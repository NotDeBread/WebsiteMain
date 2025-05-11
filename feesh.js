let fishing = false
let catching = false
let canCatch = false
let fishingWaitTimeout

let baseCatchDifficulty = 1

const fishingCanvas = doge('fishingCanvas')
const fishingCanvasCTX = fishingCanvas.getContext('2d')
fishingCanvasCTX.lineWidth = 2

const fishData = {
    inventory: [
        {
            name: 'Great White Shark',
            size: 300,
        }
    ],
    collection: []
}

const castFrames = [
    'Sit',
    'Cast',
    'Fish'
]

let bobber
function castAnim() {
    if(!fishing && !catching) {
        for(let i = 1; i < castFrames.length; i++) {
            setTimeout(() => {
                doge('fishingBread').style.backgroundImage = `url(media/fishing/bread${castFrames[i]}.png`
    
                if(i === castFrames.length - 1) {
                    //Cancel catch on button press
                    doge('fishingButton').onclick = () => {finishCatch()}

                    bobber = document.createElement('div')
                    bobber.classList.add('bobber')
                    bobber.innerHTML = '<div style="width:10px;height:10px;position:relative;"><img id="bobberImg" style="position:absolute;transform: translate(-50%,-50%);"></div>'
                    bobber.pos = [180, 105] //left, bottom
                    bobber.vel = [10, 5]
                    function updatePobberPos() {
                        fishingCanvasCTX.strokeStyle = 'black'
                        bobber.style.left = bobber.pos[0]+'px'
                        bobber.style.bottom = bobber.pos[1]+'px'

                        const controlPointPos = [
                            [(bobber.pos[0] + 180) / 2, Math.max(160 * (bobber.pos[0] / 435), 50)],
                            [(bobber.pos[0] + 180) / 2, Math.max(160 * (bobber.pos[0] / 435), 50)]
                        ] //ugh

                        fishingCanvasCTX.beginPath()
                        fishingCanvasCTX.clearRect(0, 0, fishingCanvas.width,fishingCanvas.height);
                        fishingCanvasCTX.moveTo(180-3, 192-105-3)
                        if(!catching) {
                            fishingCanvasCTX.bezierCurveTo(controlPointPos[0][0], controlPointPos[0][1], controlPointPos[1][0], controlPointPos[1][1], bobber.pos[0]+5, 192-bobber.pos[1]-5)
                        } else {
                            fishingCanvasCTX.lineTo(bobber.pos[0]+5, 192-bobber.pos[1]-5)
                        }
                        fishingCanvasCTX.stroke()


                        // draw control points for debugging

                        fishingCanvasCTX.beginPath()
                        fishingCanvasCTX.strokeStyle = 'red'
                        fishingCanvasCTX.strokeRect(controlPointPos[0][0]-2, controlPointPos[0][1]-2,2,2);
                        fishingCanvasCTX.stroke()

                        fishingCanvasCTX.beginPath()
                        fishingCanvasCTX.strokeStyle = 'blue'
                        fishingCanvasCTX.strokeRect(controlPointPos[1][0]-2, controlPointPos[1][1]-2,2,2);
                        fishingCanvasCTX.stroke()

                    } updatePobberPos()
                    
                    document.body.append(bobber)
                    
                    bobber.interval = setInterval(() => {
                        bobber.pos[0] += bobber.vel[0]
                        bobber.pos[1] += bobber.vel[1]
                        if(bobber.vel[0] > 0) {bobber.vel[0] -= 0.20}
                        if(bobber.vel[0] < 0) {bobber.vel[0] += 0.20}
                        if(Math.abs(bobber.vel[0]) < 0.1) bobber.vel[0] = 0
                        if(bobber.pos[1] > 19) {bobber.vel[1] -= 0.5} else {
                            bobber.vel[1] /= 2
                            bobber.vel[1] += Math.abs(bobber.pos[1] + 19) / 100
                        }
                        if(Math.abs(bobber.vel[1]) < 0.1) bobber.vel[1] = 0
                        doge('bobberImg').style.rotate = -bobber.vel[0] + bobber.vel[1] + 'deg'

                        updatePobberPos()

                        if(bobber.pos[0] < 180) {
                            bobber.remove()
                            bobber.destroy()

                            setTimeout(() => {
                                doge('fishingBread').style.backgroundImage = `url(media/fishing/breadSit.png`
                                fishing = false
                            }, 1000);
                        }
                    },15);

                    bobber.destroy = () => {
                        clearInterval(bobber.interval)
                        bobber.remove()
                        fishingCanvasCTX.clearRect(0, 0, fishingCanvas.width,fishingCanvas.height);
                    }
    
                    fishingWaitTimeout = setTimeout(() => {
                        for(let i = 0; i < DeBread.randomNum(1,5); i++) {
                            setTimeout(() => {
                                bobber.vel[1] += DeBread.randomNum(-2, -5)
    
                                DeBread.createParticles(
                                    document.body,
                                    10,
                                    0,
                                    1000,
                                    'ease-out',
                                    [[bobber.pos[0]+5,bobber.pos[0]+5],[window.innerHeight-bobber.pos[1]-5,window.innerHeight-bobber.pos[1]-5]],
                                    [[[5,5],[5,5]],[[2,2],[2,2]]],
                                    [[0,0],[0,0]],
                                    [[-50,50],[-25,-50]],
                                    [[100,150,255],[100,255,255]],
                                    [[100,150,255],[100,255,255]]
                                )
                            }, i * 250 + DeBread.randomNum(-100, 100));
                        }
                        setTimeout(() => {
                            canCatch = true
                            doge('fishingButton').onclick = startCatching

                            //if catch misses...
                            setTimeout(() => {
                                if(!catching) {
                                    canCatch = false
                                    doge('fishingButton').onclick = castAnim
                                    bobber.destroy()
    
                                    setTimeout(() => {
                                        doge('fishingBread').style.backgroundImage = `url(media/fishing/breadSit.png`
                                        fishing = false
                                    }, 1000);
                                }
                            }, 1500);
                        }, 250);
                    }, DeBread.randomNum(3000, 5000));
                    
                }
            }, i * 100);
        }
    }
    fishing = true
}

let catchingInterval

let fishingButtonDown = false
let catchingValue = 0
let evilCatchingValue = 0
function startCatching() {
    doge('fishingButton').onclick = ''
    if(!catching) {
        doge('fishingBread').style.backgroundImage = `url(media/fishing/breadReel.png`
        doge('catchingContainer').style.translate = '0px 0px'
        doge('fishMenuButtons').style.top = '-100px'
        document.body.querySelectorAll('.catchingBarLabel, .catchingBarLine').forEach(elem => {elem.remove()})
        catching = true

        //Equally rare rarities
        let difficulty = DeBread.randomNum(fishRarities.length-1)
        //Exotic  rarity
        // let difficulty = fishRarities.length - 1
        // let difficulty = 0
        let difficultyBoolean = DeBread.randomNum(0,1)
        while(difficultyBoolean === 0 && difficulty < fishRarities.length-1) {
            difficulty++
            difficultyBoolean = DeBread.randomNum(0,1)
        }

        for(let i = 0; i < difficulty+1; i++) {
            setTimeout(() => {                
                const star = document.createElement('div')
                star.innerText = '⭐'
                star.classList.add('fishStar')
                doge('fishStars').append(star)
            }, 250 * i);
        }

        //Shark only
        // let randomFish = fish.mythic[3]
        let randomFish = fish[fishRarities[difficulty].name.toLowerCase()][DeBread.randomNum(0,fish[fishRarities[difficulty].name.toLowerCase()].length-1)]
        
        //Max size
        // let randomSize = randomFish.textureSize[0] * DeBread.randomNum(40,40,2)
        let randomSize = randomFish.textureSize[0] * DeBread.randomNum(0.5,4,2)

        const clickPoints = []
        let pointsPassed = 0
        let catchDifficulty = baseCatchDifficulty * randomFish.difficulty + randomSize / 40
        for(let i = 0; i < Math.min(DeBread.randomNum(catchDifficulty-1,catchDifficulty), 7); i++) {
            clickPoints.push({
                location: DeBread.randomNum(10, 90),
                clicks: Math.max(DeBread.randomNum(5 * catchDifficulty, 15 * catchDifficulty),1),
            })
        }
        clickPoints.push({
            location: 101,
            clicks: 0,
        })
        clickPoints.sort((a, b) => a.location - b.location)
        
        for(const point in clickPoints) {
            if(clickPoints[point].location !== 101) {
                const label = document.createElement('div')
                label.classList.add('catchingBarLabel')
                label.innerText = clickPoints[point].clicks
                label.style.bottom = clickPoints[point].location + '%'
                label.style.zIndex = 100 - clickPoints[point].location
                doge('catchingBarLabels').append(label)
                clickPoints[point].elem = label
                
                const line = document.createElement('div')
                line.classList.add('catchingBarLine')
                line.style.bottom = clickPoints[point].location + '%'
                doge('catchingBarContainer').append(line)
                clickPoints[point].lineElem = line
            }
        }

        const startDate = performance.now()
        catchingInterval = setInterval(() => {
            if(fishingButtonDown) {
                if(clickPoints[pointsPassed].location > catchingValue) { //if hasnt reached next point, increase value
                    catchingValue++
                } else {
                    doge('fishingButton').onmousedown = () => {
                        clickPoints[pointsPassed].clicks -= 100
                        clickPoints[pointsPassed].elem.innerText = clickPoints[pointsPassed].clicks
                        clickPoints[pointsPassed].elem.style.animation = ''
                        requestAnimationFrame(() => {
                            clickPoints[pointsPassed].elem.style.animation = 'wiggle 250ms ease-out 1 forwards'
                        })
                        if(clickPoints[pointsPassed].clicks <= 0) {
                            clickPoints[pointsPassed].elem.remove()
                            clickPoints[pointsPassed].lineElem.remove()
                            pointsPassed++
                            doge('fishingButton').onmousedown = ''
                        }
                    }
                }
            }

            if(performance.now() - startDate > 2500 + catchDifficulty * 250) {
                evilCatchingValue += 0.2
            }

    
            doge('catchingBar').style.height = catchingValue + '%'
            doge('evilCatchingBar').style.height = evilCatchingValue + '%'
            bobber.vel[1] = -0.1

            //Catch fail
            if(evilCatchingValue > catchingValue) {
                finishCatch()
                clearInterval(catchingInterval)
                catching = false
                doge('fishStars').innerHTML = ''

                catchingValue = 0
                evilCatchingValue = 0
                DeBread.shake(doge('catchingContainer'),10,5,5,100)
                doge('fishingBread').style.backgroundImage = `url(media/fishing/breadFish.png`
                setTimeout(() => {
                    doge('catchingContainer').style.translate = '0px 250px'
                }, 750);
            }

            //Catch success
            if(catchingValue >= 100) {
                finishCatch(true, randomFish, difficulty, randomSize)
                clearInterval(catchingInterval)
                catching = false

                catchingValue = 0
                evilCatchingValue = 0
                doge('catchingContainer').style.animation = 'wiggle 250ms ease-out 1 forwards'
                doge('fishingBread').style.backgroundImage = `url(media/fishing/breadFish.png`
                setTimeout(() => {
                    doge('catchingContainer').style.animation = 'none'
                    doge('catchingContainer').style.translate = '0px 250px'
                }, 750);
            }
        }, 25);
    }

}

doge('fishingButton').addEventListener('mousedown', () => {fishingButtonDown = true})
doge('fishingButton').addEventListener('mouseup', () => {fishingButtonDown = false})

function finishCatch(success = false, fish, rarity, size) {
    doge('bobberImg').src = `media/fishing/fish/${fish.name.toLowerCase().replaceAll(' ','_')}.png`
    doge('bobberImg').width = size*2
    clearTimeout(fishingWaitTimeout)
    bobber.vel[0] = -11
    bobber.pos[1] = 19
    bobber.vel[1] = 10
    setTimeout(() => {

        if(success) {
            setTimeout(() => {
                fishPopup(fish.name,fishRarities[rarity],size)
            }, 1000);
        }
    }, 100);
}

function fishPopup(name, rarity, size) {
    doge('fishPopup').style.display = 'flex'
    doge('fishPopupName').innerText = name
    if(rarity.name !== 'Mythic') {
        doge('fishPopupName').style.outline = `3px solid ${rarity.color}`
    } else {
        doge('fishPopupName').style.outline = 'rgb(31, 218, 255)'
    }
    doge('fishPopupRarity').innerText = rarity.name
    doge('fishPopupRarity').style.background = rarity.color
    doge('fishSize').innerText = DeBread.round(size,1) + 'cm'

    doge('fishPopupFish').src = `media/fishing/fish/${name.toLowerCase().replaceAll(' ','_')}.png`
    doge('fishPopupFish').width = size * 2
}

const fishRarities = [
    {
        name: 'Common',
        color: 'rgb(50,50,50)'
    },
    {
        name: 'Uncommon',
        color: 'rgb(74, 199, 105)'
    },
    {
        name: 'Rare',
        color: 'rgb(74,122,199)'
    },
    {
        name: 'Legendary',
        color: 'rgb(199,189,74)'
    },
    {
        name: 'Mythic',
        color: 'linear-gradient(to left,rgb(31, 218, 255),rgb(221, 31, 255))'
    }
]

const fish = {
    common: [
        {
            name: 'Sardine',
            difficulty: 0.5,
            textureSize: [21,10]
        },
        {
            name: 'Cod',
            difficulty: 1,
            textureSize: [24,15]
        },
        {
            name: 'Bluegill',
            difficulty: 1.5,
            textureSize: [24,18]
        },
    ],
    uncommon: [
        {
            name: 'Shrimp',
            difficulty: 1.5,
            textureSize: [21,21]
        },
        {
            name: 'Salmon',
            difficulty: 2,
            textureSize: [31,15]
        },
        {
            name: 'Carp',
            difficulty: 3,
            textureSize: [46,22]
        },
        {
            name: 'Catfish',
            difficulty: 4,
            textureSize: [62,30]
        },
    ],
    rare: [
        {
            name: 'Clownfish',
            difficulty: 2.5,
            textureSize: [25,15]
        },
        {
            name: 'Pufferfish',
            difficulty: 3,
            textureSize: [25,20]
        },
        {
            name: 'Eel',
            difficulty: 3.5,
            textureSize: [48,12]
        }
    ],
    legendary: [
        {
            name: 'Swordfish',
            difficulty: 6,
            textureSize: [76,27]
        },
        {
            name: 'Goldenfish',
            difficulty: 3,
            textureSize: [26,19]
        },
        {
            name: 'Great White Shark',
            difficulty: 9,
            textureSize: [116,48]
        },
        {
            name: 'Jellyfish',
            difficulty: 4,
            textureSize: [32,24]
        },
    ],
    mythic: [
        {
            name: 'Breadfish',
            difficulty: 11,
            textureSize: [68,24]
        },
        {
            name: 'Lamefish',
            difficulty: 10,
            textureSize: [61,24]
        },
        {
            name: 'Jaden',
            difficulty: 9,
            textureSize: [27,32]
        },
        // {
        //     name: 'Uh guys',
        //     difficulty: 50,
        //     textureSize: [19,35]
        // },
    ]
}

function closeFishPopup() {
    doge('fishPopup').style.display = 'none'
    doge('fishStars').innerHTML = ''
    doge('fishMenuButtons').style.top = '10px'
}

doge('fishMenuContainer').querySelectorAll('.fishMenu').forEach(closingMenu => {
    closingMenu.open = false
})
function toggleFishMenuContainer(menu) {
    if(!doge(`fishMenu${menu}`).open) {
        doge(`fishMenu${menu}`).style.translate = '0px 0px'
    } else {
        doge(`fishMenu${menu}`).style.translate = '0px 300px'
    }
    doge(`fishMenu${menu}`).open = !doge(`fishMenu${menu}`).open

    let allMenusClosed = true
    doge('fishMenuContainer').querySelectorAll('.fishMenu').forEach(closingMenu => {
        if(closingMenu !== doge(`fishMenu${menu}`)) {
            closingMenu.style.translate = '0px 300px'
            closingMenu.open = false
        }

        if(closingMenu.open) {
            allMenusClosed = false
        }

        if(allMenusClosed) {
            doge('fishDisplayContainer').style.translate = '0px 300px'
        } else {
            doge('fishDisplayContainer').style.translate = '0px 0px'
        }

        //Update 
    })
}