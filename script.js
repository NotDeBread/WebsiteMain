const titleText = 'DeBread\'s Space'
let i = 0
for(const char in titleText) {
    const div = document.createElement('div')
    div.innerText = titleText[char]
    div.style.animation = `titleChar 3s ease-in-out -${i * 100}ms infinite forwards`
    if(titleText[char] === ' ') div.style.width = '10px'
    doge('titleTextContainer').append(div)

    i++
}

const settings = {
    stars: true,
    floatyBoxes: false,
    crtLines: true,
}

const art = {
    goober: [
        {
            url: 'checkThisOut.png',
            date: 'April 28th, 2024'
        },
        {
            url: 'Nyan.png',
            date: 'May 16th, 2024'
        },
        {
            url: 'AntiAliasing.png',
            date: 'June 21st, 2024'
        }
    ],
    misc: [
        {
            url: 'Floaty.png',
            date: 'June 18th, 2024'
        }
    ],
    pixel: [
        {
            url: 'desert.png',
            date: 'March 16th, 2024'
        },
        {
            url: 'donut.png',
            date: 'March 16th, 2024'
        },
        {
            url: 'guy.png',
            date: 'March 15th, 2024'
        },
        {
            url: 'helloBro.png',
            date: 'March 16th, 2024'
        },
        {
            url: 'Tree.png',
            date: 'March 15th, 2024'
        }
    ],
    vector: [
        {
            url: 'BlackHole.png',
            date: 'August 19th, 2023'
        },
        {
            url: 'butter.png',
            date: 'December 20th, 2022'
        },
        {
            url: 'GDIcon.png',
            date: 'December 1st, 2022'
        },
        {
            url: 'ruinseekerballing.png',
            date: 'March 17th, 2024'
        },
        {
            url: 'Tower.png',
            date: 'February 7th, 2023'
        },
        {
            url: 'Tower2.png',
            date: 'March 3rd, 2023'
        },
        {
            url: 'Tower3.png',
            date: 'August 10th, 2023'
        },
        {
            url: 'Triangles.png',
            date: 'August 19th, 2023'
        }
    ],
}

const artTitles = {
    goober: 'Goober Art',
    notebook: 'Notebook Doodles',
    misc: 'Misc Art',
    pixel: 'Pixel Art',
    vector: 'Vector Art',
}

const textures = [
    'guy.png',
    'breadGame/bg.png',
    'breadGame/bread.gif',
    'breadGame/breadDead.png',
    'breadGame/breadSlide.png',
    'breadGame/breadSlideFall.png',
    'breadGame/breadSlideFall2.png',
    'breadGame/cloud0.png',
    'breadGame/cloud1.png',
    'breadGame/cloud2.png',
    'breadGame/cloud3.png',
    'breadGame/cloud4.png',
    'breadGame/cloud5.png',
    'breadGame/floor.png',
    'breadGame/obstacleA0.png',
    'breadGame/obstacleF0.png',
]

for(const group in art) {
    for(const peice in art[group]) {
        if(!art[group][peice].folder) {
            textures.push(`art/${group}/${art[group][peice].url}`)
        }
    }
}


const gallery = doge('gallery')
const innerGallery = doge('innerGallery')
const galleryContainer = doge('galleryContainer')
function openGallery(group) { if(!selectedTool) {
    innerGallery.innerHTML = ''
    closeMediaView()
    gallery.style.animation = 'galleryOpen 250ms cubic-bezier(0,1,.5,1) 1 forwards'
    setTimeout(() => {
        galleryContainer.style.pointerEvents = 'unset'
    }, 250);

    doge('galleryHeaderText').innerText = '// ' + artTitles[group]
    doge('galleryFooterText').innerText = art[group].length + ' Items'

    //Clear images
    
    innerGallery.innerHTML = ''

    //Add images

    for(const image in art[group]) {
        if(!art[group][image].folder) {
            const img = document.createElement('img')
            img.src = `media/art/${group}/${art[group][image].url}`
            innerGallery.append(img)
    
            img.onmouseenter = () => {
                if(!contextMenuOpen) {
                    const rect = img.getBoundingClientRect()
                    mouseTarget = () => {return [rect.left + img.offsetWidth / 2, rect.top + img.offsetHeight / 2]}
                    cursor.style.borderRadius = '0'
                    cursor.style.width = img.offsetWidth + 'px'
                    cursor.style.height = img.offsetHeight + 'px'
                    cursor.style.outline = '2px solid white'
                    cursor.style.backdropFilter = 'none'
                    cursorHovering = img
                    cursorText.innerText = art[group][image].url
                }
            }
            img.onmouseleave = () => {
                if(!contextMenuOpen) {
                    mouseTarget = () => {return [mouse[0], mouse[1]]}
                    cursor.style.borderRadius = '50%'
                    cursor.style.width = '15px'
                    cursor.style.height = '15px'
                    cursor.style.outline = 'none'
                    cursor.style.backdropFilter = 'invert()'
                    cursorHovering = undefined
                    cursorText.innerText = ''
                }
            }
            img.onclick = () => {
                openMediaView(group, art[group][image])
            }
        } else {
            const folder = document.createElement('button')
            folder.style.height = '200px'
            folder.style.width = '200px'
            folder.style.fontSize = '1.5em'
            folder.style.fontWeight = '700'
            folder.innerText = art[group][image].name

            folder.onmouseenter = () => {
                if(!contextMenuOpen) {
                    const rect = folder.getBoundingClientRect()
                    mouseTarget = () => {return [rect.left + folder.offsetWidth / 2, rect.top + folder.offsetHeight / 2]}
                    cursor.style.borderRadius = '0'
                    cursor.style.width = folder.offsetWidth + 'px'
                    cursor.style.height = folder.offsetHeight + 'px'
                    cursorHovering = folder
                }
            }
            folder.onmouseleave = () => {
                if(!contextMenuOpen) {
                    mouseTarget = () => {return [mouse[0], mouse[1]]}
                    cursor.style.borderRadius = '50%'
                    cursor.style.width = '15px'
                    cursor.style.height = '15px'
                    cursorHovering = undefined
                }
            }

            folder.onclick = () => {
                openGallery(art[group][image].open)
            }

            innerGallery.append(folder)
        }
    }
}}

function closeGallery() {
    gallery.style.animation = 'galleryClose 250ms ease-in 1 forwards'
    galleryContainer.style.pointerEvents = 'none'
}

const mediaView = doge('mediaView')
function openMediaView(group, img) {
    mediaView.style.animation = 'galleryOpen 250ms cubic-bezier(0,1,.5,1) 1 forwards'
    doge('mediaViewImg').src = `media/art/${group}/${img.url}`
    doge('mediaViewTitle').innerText = img.url
    doge('mediaViewDate').innerText = img.date
    
    setTimeout(() => {
        mediaView.style.pointerEvents = 'unset'
    }, 250);
}

function closeMediaView() {
    mediaView.style.animation = 'galleryClose 250ms ease-in 1 forwards'
    mediaView.style.pointerEvents = 'none'
}


let allTexturesLoaded = false
const imageCache = {}

function loadTexures(path) {
    let loaded = 0
    let total = textures.length
    for(const image in path) {
        const img = new Image()
        img.onload = () => {
            loaded++
            imageCache[img.src] = img

            doge('texturesLoaded').innerText = `${DeBread.round((loaded / total) * 100)}%`

            if(loaded === total) {
                allTexturesLoaded = true
                if(allTexturesLoaded && allVideosLoaded) {
                    setTimeout(() => {                        
                        doge('loadingScreen').style.opacity = 0
                        document.body.style.overflow = 'unset'
                        setTimeout(() => {
                            doge('loadingScreen').style.display = 'none'
                        }, 500);
                    }, 500);
                }
            }
        }
        img.src = `media/${path[image]}`
    }
}
loadTexures(textures)

function getTexture(url) {
    for(const img in imageCache) { 
        if(img.endsWith(url)) {
            return imageCache[img]
        }
    }
}

const videos = [
    // 'headerBG'
]
let allVideosLoaded = false

function loadVideos(path) {
    let loadCheckInterval = setInterval(() => {
        let loaded = true
        for(const video in path) {
            if(doge(path[video]).readyState !== 4) {
                loaded = false
            }
        }

        if(loaded) {
            clearInterval(loadCheckInterval)
            allVideosLoaded = true

            if(allTexturesLoaded && allVideosLoaded) {
                doge('loadingScreen').style.opacity = 0
                document.body.style.overflow = 'unset'
                setTimeout(() => {
                    doge('loadingScreen').style.display = 'none'
                }, 500);
            }
        }
    }, 500);
}

loadVideos(videos)



function guyClick() {
    doge('guyCounter').innerText++
    doge('guyCounter').style.opacity = 1

    doge('guyCounter').style.animation = 'none'
    requestAnimationFrame(() => {
        doge('guyCounter').style.animation = 'pulse 500ms cubic-bezier(0,1,.5,1) 1 forwards'
    })

    if(doge('guyCounter').innerText === '1') {
        // startFight()
    }

    // if(doge('guyCounter').innerText === '10') {
    //     const explosionImg = new Image()
    //     explosionImg.src = 'media/explosion.gif'
    //     explosionImg.style.width = '100px'
    //     explosionImg.style.position = 'absolute'
    //     explosionImg.style.left = '25px'
    //     explosionImg.style.top = '25px'
        
    //     explosionImg.onload = () => {
    //         setTimeout(() => {
    //             document.body.append(explosionImg)
    //         }, 100);
    //     }
    //     //WHY THE FUCK DOES THIS WORK ONLY SOMETIMES
    // }
}

document.querySelectorAll('#guy, #guy2').forEach(guy => {
    guy.onmouseenter = () => {
        if(!selectedTool) {
            cursor.style.width = 0
            cursor.style.height = 0
            realCursor.style.opacity = 0
        }
    }
    
    guy.onmouseleave = () => {
        if(!selectedTool) {
            cursor.style.width = '15px'
            cursor.style.height = '15px'
            realCursor.style.opacity = 1
        }
    }
})

//Apply float effect to boxes if not on mobile

if(window.innerWidth > 850) {
    document.querySelectorAll('.genericBox').forEach(box => {
        box.style.animation = `bgLoop 10s linear infinite forwards, floatMoveY ${DeBread.randomNum(9,11,3)}s -${DeBread.randomNum(10,0)}s linear infinite, floatMoveX ${DeBread.randomNum(9,11,3)}s -${DeBread.randomNum(10,0)}s linear infinite`
    })
}

function openCenterMenu(from, to, open) {
    
    if(!open) {
        doge('centerContainer').style.width = '1250px'
        doge('centerContainer').style.height = '500px'

        document.body.querySelectorAll('.sideContainer').forEach(container => {
            container.style.opacity = 0
            container.style.pointerEvents = 'none'
        })

        doge('headerText').style.height = 0
        doge('headerText').style.opacity = 0
        doge('headerText').style.padding = 0
    } else {
        doge('centerContainer').style.width = '750px'
        doge('centerContainer').style.height = '390px'
        
        document.body.querySelectorAll('.sideContainer').forEach(container => {
            container.style.opacity = 1
            container.style.pointerEvents = 'unset'
        })

        doge('headerText').style.height = '100px'
        doge('headerText').style.opacity = 1
        doge('headerText').style.padding = '25px'
    }

    doge(from).style.opacity = 0
    setTimeout(() => {
        doge(from).style.display = 'none'
        doge(to).style.display = 'unset'
        requestAnimationFrame(() => {
            doge(to).style.opacity = 1
        })
    }, 250);
} 
// openCenterMenu('gamesContainer', 'interestsContainer', false)

setInterval(() => {
    if(settings.stars) {
        const backgroundParticle = document.createElement('div')
        backgroundParticle.classList.add('backgroundParticle')
        backgroundParticle.style.left = DeBread.randomNum(0, window.innerWidth-5)+'px'
        backgroundParticle.style.top = DeBread.randomNum(0, window.innerHeight-5)+'px'
        backgroundParticle.style.setProperty('--rot',DeBread.randomNum(-90,90)+'deg')
        doge('bgParticles').append(backgroundParticle)
    
        setTimeout(() => {
            backgroundParticle.remove()
        }, 5000);
    }
}, 200);

function createImageTooltip(pos, url, caption) {
    const tooltip = document.createElement('div')
    tooltip.id = 'tooltip'

    const image = document.createElement('img')
    image.src = url
    image.classList.add('tooltipImg')
    tooltip.append(image)

    if(caption) {
        const span = document.createElement('span')
        span.innerText = caption
        tooltip.append(span)
    }

    document.body.append(tooltip)
    tooltip.style.left = pos[0] - tooltip.offsetWidth / 2 + 'px'
    tooltip.style.top = pos[1] + 25 + 'px'

    console.log(tooltip)
}

function destoryTooltip() {
    doge('tooltip').remove()
}

document.querySelectorAll('[tooltip=true]').forEach(elem => {
    elem.addEventListener('mouseenter', () => {
        createImageTooltip(
            [elem.getBoundingClientRect().left + elem.offsetWidth / 2, elem.getBoundingClientRect().top + elem.offsetHeight / 2], 
            elem.getAttribute('tooltipImg'), 
            elem.getAttribute('tooltipCaption')
        )
    })
    elem.addEventListener('mouseleave', () => {
        destoryTooltip()
    })
})

//Checkbox stuff
document.querySelectorAll('.checkbox').forEach(checkbox => {
    checkbox.value = checkbox.getAttribute('checked')
    settings[checkbox.getAttribute('setting')] = checkbox.value

    checkbox.onclick = () => {
        checkbox.value = !checkbox.value

        checkbox.setAttribute('checked',checkbox.value.toString())
        settings[checkbox.getAttribute('setting')] = checkbox.value
        console.log(settings[checkbox.getAttribute('setting')])


        if(settings.crtLines) {
            doge('pixelOverlay').style.display = 'unset'
        } else {
            doge('pixelOverlay').style.display = 'none'
        }

        if(checkbox.getAttribute('setting') === 'floatyBoxes') {
            if(settings.floatyBoxes) {
                document.querySelectorAll('.genericBox').forEach(box => {
                    box.style.animation = `bgLoop 10s linear infinite forwards, floatMoveY ${DeBread.randomNum(9,11,3)}s -${DeBread.randomNum(10,0)}s linear infinite, floatMoveX ${DeBread.randomNum(9,11,3)}s -${DeBread.randomNum(10,0)}s linear infinite`
                })
            } else {
                document.querySelectorAll('.genericBox').forEach(box => {
                    box.style.animation = `bgLoop 10s linear infinite forwards`
                })
            }
        }
    }
})

function applyFlowText(elem,speedMult = 1) {
    const targetText = elem.innerText

    elem.innerHTML = ''
    elem.style.display = 'flex'
    for(let i = 0; i < targetText.length; i++) {
        const div = document.createElement('div')
        div.style.opacity = 0
        div.innerText = targetText[i]
        div.style.animation = `textFlow 3s ease-in-out -${(targetText.length - i) * 250}ms infinite forwards, scaleIn 0.25s ease-in-out ${i * 25}ms 1 forwards`
        div.style.rotate = (i - targetText.length / 2) / 3 + 'deg'
        if(targetText[i] === ' ') div.style.width = '10px'
        elem.append(div)

        setTimeout(() => {
            div.style.opacity = 1
        }, (i * 25) / speedMult + 5);
    }
}
document.querySelectorAll('.flowText').forEach(elem => {applyFlowText(elem)})

setTimeout(() => {
    doge('loadingScreen').style.opacity = 0
    setTimeout(() => {
        doge('loadingScreen').style.display = 'none'
    }, 500);
}, DeBread.randomNum(250, 1000));

const music = [
    {
        name: 'The World Looks Red',
        artist: 'Heaven Pierce Her',
        id: 0,
    },
    {
        name: 'Scarlet Forest',
        artist: 'Toby Fox',
        id: 1,
    },
    {
        name: 'Waterfall',
        artist: 'Vibe Avenue',
        id: 2,
    },
    // {
    //     name: 'FINAL BLENDERMAN APPEARED',
    //     artist: 'Camellia, RichaadEB',
    //     id: 3,
    // },
    // {
    //     name: 'Strings of Light',
    //     artist: 'Yussef Kamaal',
    //     id: 4,
    // },
    {
        name: 'YKWIM?',
        realName: 'YKWIM',
        artist: 'Yot Club',
        id: 5,
    },

]

for(const key in music) {
    const audio = new Audio(`media/music/${music[key].realName ?? music[key].name.replaceAll(' ','_')}.mp3`)
    let audioPlaying = false
    let audioProgress = 0
    audio.volume = 0.1
    audio.playbackRate = 1
    audio.preservesPitch = false

    const startTime = performance.now()
    audio.onloadedmetadata = () => {
        console.log(`${music[key].name} loaded in ${performance.now() - startTime}ms`)
        const elem = document.createElement('div')
        elem.innerHTML = `
        <img class="musicWidgetAlbum" src="media/music/${music[key].realName ?? music[key].name.replaceAll(' ','_')}.png">
        <div style="display: flex; flex-direction: column; justify-content: space-between; width: 100%;">
            <div style="line-height: 1;">
                <span class="musicWidgetName">${music[key].name}</span><br>
                <span class="musicWidgetArtist">${music[key].artist}</span>
            </div>
            <div>
                <div style="display: flex; justify-content: space-between;">
                    <span id="music${music[key].id}Time" style="width: 50px;">0:00</span>
                    <div id="music${music[key].id}Control"></div>
                    <span style="width: 50px; text-align: right;">${formatTime(audio.duration)}</span>
                </div>
                <div class="musicWidgetProgressContainer" id="music${music[key].id}ProgressConter"></div>
            </div>
        </div>
        `

        //Add cursor stuff to album cover
        elem.querySelectorAll('img').forEach(img => {
            img.onmouseenter = () => {
                if(!contextMenuOpen && !img.getAttribute('ignore') && !selectedTool) {
                    const rect = img.getBoundingClientRect()
                    mouseTarget = () => {return [rect.left + img.offsetWidth / 2, rect.top + img.offsetHeight / 2]}
                    cursor.style.borderRadius = '5px'
                    cursor.style.width = img.offsetWidth + 'px'
                    cursor.style.height = img.offsetHeight + 'px'
                    cursor.style.outline = '2px solid white'
                    cursor.style.backdropFilter = 'none'
                    cursorHovering = img
                }
            }
            img.onmouseleave = () => {
                if(!contextMenuOpen && !img.getAttribute('ignore') && !selectedTool) {
                    mouseTarget = () => {return [mouse[0], mouse[1]]}
                    cursor.style.borderRadius = '50%'
                    cursor.style.width = '15px'
                    cursor.style.height = '15px'
                    cursor.style.outline = 'none'
                    cursor.style.backdropFilter = 'invert()'
                    cursorHovering = undefined
                }
            }
        })

        elem.addEventListener('wheel', ev => {
            if(ev.deltaY > 0) {
                audio.volume -= 0.05
            } else {
                audio.volume += 0.05
            }
        })
        
        elem.classList.add('musicWidget')
        doge('musicContainer').append(elem)

        const controlButton = document.createElement('button')
        controlButton.classList.add('musicWidgetControl')
        controlButton.innerText = '⏵'
        controlButton.onclick = toggleMusic
        doge(`music${music[key].id}Control`).append(controlButton)

        controlButton.onmouseenter = () => {
            if(!contextMenuOpen && !selectedTool) {
                const rect = controlButton.getBoundingClientRect()
                mouseTarget = () => {return [rect.left + controlButton.offsetWidth / 2, rect.top + controlButton.offsetHeight / 2]}
                cursor.style.borderRadius = '0'
                cursor.style.width = controlButton.offsetWidth + 'px'
                cursor.style.height = controlButton.offsetHeight + 'px'
                cursorHovering = controlButton
            }
        }
        controlButton.onmouseleave = () => {
            if(!contextMenuOpen && !selectedTool) {
                mouseTarget = () => {return [mouse[0], mouse[1]]}
                cursor.style.borderRadius = '50%'
                cursor.style.width = '15px'
                cursor.style.height = '15px'
                cursorHovering = undefined
            }
        }

        const progress = document.createElement('div')
        progress.classList.add('musicWidgetProgress')
        progress.innerHTML = `
        <div class="musicWidgetProgressBar" id="music${music[key].id}Progress"></div>
        `
        
        progress.onclick = ev => {
            const percent = (ev.x - progress.getBoundingClientRect().left) / progress.offsetWidth
            audio.currentTime = percent * audio.duration
            updateWidget()
        }

        doge(`music${music[key].id}ProgressConter`).append(progress)

        doge(`music${music[key].id}ProgressConter`).onmouseenter = () => {
            elemRect = doge(`music${music[key].id}ProgressConter`).getBoundingClientRect()
            cursor.style.height = '10px'
            cursor.style.width = '2px'
            cursor.style.borderRadius = '0'
            mouseTarget = () => {
                return [mouse[0], elemRect.top + 5]
            }
        }
    
        doge(`music${music[key].id}ProgressConter`).onmouseleave = () => {
            mouseTarget = () => {return [mouse[0], mouse[1]]}
            cursor.style.width = '15px'
            cursor.style.height = '15px'
            cursor.style.borderRadius = '50%'
        }

        let updateInterval

        function toggleMusic() {
            audioPlaying = !audioPlaying
            if(audioPlaying) {
                controlButton.innerText = '⏸'

                audio.currentTime = audioProgress
                audio.play()

                updateInterval = setInterval(updateWidget, 100)
            } else {
                controlButton.innerText = '⏵'

                audioProgress = audio.currentTime
                audio.pause()

                clearInterval(updateInterval)
            }
        }

        function updateWidget() {
            doge(`music${music[key].id}Time`).innerText = formatTime(audio.currentTime)
            doge(`music${music[key].id}Progress`).style.width = audio.currentTime / audio.duration * 100 + '%'

            if(audio.currentTime >= audio.duration) {
                audio.currentTime = 0
                toggleMusic()
            }
        }
    }

}

function formatTime(time) {
    const minutes = Math.floor(time / 60)
    const seconds = time % 60

    return `${minutes}:${DeBread.round(seconds).toString().padStart(2,0)}`
}

if(window.innerWidth < 750) {
    console.log(`Redirecting to mobile site... ${window.innerWidth}`)
    window.open('/mobile','_self')
}