const items = {
    steamDeck: {
        name: 'Steam Deck',
        desc: 'A portable handheld console, like the Nintendo Switch, but it can play PC games.',
        specs: 'Storage Space: 64GB',
        img: 'steamDeck.jpg',
        tags: [
            'Tech'
        ],
        price: 400,
        links: {
            steamDeck: {
                name: 'SteamDeck',
                address: 'https://www.steamdeck.com/en/',
                price: '$399'
            },
            amazon: {
                name: 'Amazon',
                address: 'https://a.co/d/4h4xDlM',
                price: '$409'
            }
        }
    },
    ssd: {
        name: 'Samsung 990 PRO (SSD)',
        desc: 'A pc component that holds storage.',
        specs: 'Size: 2TB or 4TB',
        img: 'ssd.png',
        tags: [
            'Tech'
        ],
        price: '160 (36% off)',
        pColor: 159.99,
        links: {
            amazon: {
                name: 'Amazon (2TB)',
                address: 'https://www.amazon.com/SAMSUNG-Computing-Workstations-MZ-V9P4T0B-AM/dp/B0BHJJ9Y77?crid=NYO66F93VA1L&dib=eyJ2IjoiMSJ9.1mBXJZAetyBSQPkhvdQlEqr8JVVQoEigc6P2NgriFq7v6UnPH3nzEAY3zfTVAW10ItrjSiZjYXx8_C6lUlVgj-4Tng6uNyQrOx_H_V5mX6n1aKFt9GU58nOmbRFlQdFVXVR-vBWgnDIZTEbhws1hwzufFjOpKMY7yZ4wXt00FVYafq1JXos2oO7YSPn-qLTiWxslFC1sPKVa74AgTN74EYp3PsyzYPTJ5aoDPmJkY_I.vSH1F85OFPNsAxF1hzEfy7kUMNW-OTGIsxssGWdYQig&dib_tag=se&keywords=samsung%2Bssd&psr=EY17&s=black-friday&sprefix=samsung%2Bss%2Cblack-friday%2C117&sr=1-1&th=1',
                price: '$159.99'
            },
            otherAmazon: {
                name: 'Amazon (4TB)',
                address: 'https://www.amazon.com/SAMSUNG-Computing-Workstations-MZ-V9P4T0B-AM/dp/B0CHGT1KFJ?crid=NYO66F93VA1L&dib=eyJ2IjoiMSJ9.1mBXJZAetyBSQPkhvdQlEqr8JVVQoEigc6P2NgriFq7v6UnPH3nzEAY3zfTVAW10ItrjSiZjYXx8_C6lUlVgj-4Tng6uNyQrOx_H_V5mX6n1aKFt9GU58nOmbRFlQdFVXVR-vBWgnDIZTEbhws1hwzufFjOpKMY7yZ4wXt00FVYafq1JXos2oO7YSPn-qLTiWxslFC1sPKVa74AgTN74EYp3PsyzYPTJ5aoDPmJkY_I.vSH1F85OFPNsAxF1hzEfy7kUMNW-OTGIsxssGWdYQig&dib_tag=se&keywords=samsung%2Bssd&psr=EY17&s=black-friday&sprefix=samsung%2Bss%2Cblack-friday%2C117&sr=1-1&th=1',
                price: '$269.99'
            },
        }
    },
    legoCastle: {
        name: 'Himeji Castle',
        desc: '',
        img: 'castle.webp',
        tags: [
            'Decor'
        ],
        price: 160,
        links: {
            lego: {
                name: 'LEGO',
                address: 'https://www.lego.com/en-us/product/himeji-castle-21060',
                price: '$159.99'
            },
        }
    },
    ram: {
        name: 'Corsair Vengeance RGB Pro 32GB (4x8GB) (RAM)',
        desc: 'A pc component that holds storage.',
        img: 'ram.png',
        tags: [
            'Tech'
        ],
        price: '132 (6% off)',
        pColor: 131.99,
        links: {
            amazon: {
                name: 'Amazon',
                address: 'https://www.amazon.com/Corsair-Vengeance-PC4-28800-Desktop-Memory/dp/B08PW41WXH',
                price: '$131.99'
            },
        }
    },
    pcCase: {
        name: 'H5 Flow RGB (Computer Case)',
        desc: 'A computer case to hold all of my components.',
        specs: 'Color: Black',
        img: 'pcCase.avif',
        tags: [
            'Tech'
        ],
        price: 125,
        links: {
            steamDeck: {
                name: 'NZXT',
                address: 'https://nzxt.com/product/h5-flow-rgb',
                price: '$124.99'
            },
        }
    },
    ultrakillSweater: {
        name: 'ULTRAKILL Holiday sweater',
        desc: 'Super cool sweater from one of my favorite games.',
        specs: 'Size: Large',
        img: 'ultrakillSweater.webp',
        tags: ['Clothing'],
        price: '90 (SALE)',
        pColor: 90,
        links: {
            newBlood: {
                name: 'NewBlood Store',
                address: 'https://newbloodstore.com/products/ultrakill-holiday-sweater?variant=43089826119832',
                price: '$89.99 '
            }
        }
    },
    ruinSeekerHoodie: {
        name: 'Ruin Seeker Hoodie',
        desc: 'Super cool hoodie from one of my favorite games.',
        specs: 'Size: Large',
        img: 'ruinseeker.webp',
        tags: ['Clothing'],
        price: 69,
        links: {
            newBlood: {
                name: 'Fangamer',
                address: 'https://www.fangamer.com/collections/tunic/products/tunic-hoodie-ruin-seeker',
                price: '$69 '
            }
        }
    },
    paris: {
        name: 'Paris',
        desc: '',
        img: 'paris.webp',
        tags: [
            'Decor',
        ],
        price: 50,
        links: {
            amazon: {
                name: 'LEGO',
                address: 'https://www.lego.com/en-us/product/paris-21044',
                price: '$49.99'
            }
        }
    },
    breadCatHoodie: {
        name: 'Bread Cat Hoodie',
        desc: 'A very cool hoodie.',
        img: 'breadcathoodie.webp',
        specs: 'Size: Large',
        tags: [
            'Clothing'
        ],
        price: '40 (20% off)',
        pColor: 40,
        links: {
            amazon: {
                name: 'Cat Warehouse',
                address: 'https://www.catwarehouse.com/products/breadcat-hoodie?variant=41531230060734',
                price: '$40'
            }
        }
    },
    breadCatTee: {
        name: 'Bread Cat Tee',
        desc: 'A very cool shirt.',
        img: 'breadCatTee.webp',
        specs: 'Size: Large <br> Color: Black',
        tags: [
            'Clothing'
        ],
        price: 30,
        links: {
            amazon: {
                name: 'Cat Warehouse',
                address: 'https://www.catwarehouse.com/products/breadcat-tee-black?variant=41581729579198',
                price: '$30'
            }
        }
    },
    cards: {
        name: 'Balatro playing cards (pre-order)',
        desc: 'Playing cards based on my favorite roguelike game.',
        img: 'cards.webp',
        specs: 'This is only for preorder, it will be shipped in March of 2025',
        tags: [
            'Misc'
        ],
        price: 16,
        links: {
            fangamer: {
                name: 'Fangamer',
                address: 'https://www.fangamer.com/products/balatro-playing-cards',
                price: '$16'
            }
        }
    },
    v1pin: {
        name: 'ULTRAKILL V1 Pin (pre-order)',
        desc: 'A pin of the main character from my favorite game.',
        img: 'pin.webp',
        specs: 'This is only for preorder, it will be shipped in early 2025',
        tags: [
            'Decor'
        ],
        price: 9.99,
        links: {
            fangamer: {
                name: 'New Blood store',
                address: 'https://newbloodstore.com/products/ultrakill-v1-pin',
                price: '$9.99'
            }
        }
    },
    eddieSticker: {
        name: 'Eddie Sticker',
        desc: '',
        img: 'eddieSticker.png',
        tags: [
            'Decor'
        ],
        price: '4.80',
        pColor: 4.8,
        links: {
            amazon: {
                name: 'Streamlabs',
                address: 'https://streamlabs.com/notdebread/merch/5475614',
                price: '$4.80'
            }
        }
    },
    eddieBeegSticker: {
        name: 'Eddie Beeg Sticker',
        desc: '',
        img: 'eddieBeegSticker.png',
        tags: [
            'Decor'
        ],
        price: '4.40',
        pColor: 4.4,
        links: {
            amazon: {
                name: 'Streamlabs',
                address: 'https://streamlabs.com/notdebread/merch/3266686',
                price: '$4.40'
            }
        }
    },
    // breadCatSticker: {
    //     name: 'Bread Cat Sticker',
    //     desc: 'A very cool sticker.',
    //     img: 'breadCatSticker.png',
    //     tags: [
    //         'Decor'
    //     ],
    //     price: '2.50',
    //     pColor: 2.5,
    //     links: {
    //         amazon: {
    //             name: 'Cat Warehouse',
    //             address: 'https://www.catwarehouse.com/collections/all/products/bread-cat-sticker',
    //             price: '$2.50'
    //         }
    //     }
    // },
}

for(let item in items) {
    const itemDiv = document.createElement('div')
    itemDiv.classList.add('item')
    itemDiv.innerHTML = `
    <div class="itemContent">
        <span class="itemName">${items[item].name}</span>
        <span>${items[item].desc}</span>
        <div class="itemTags" id="${item}Tags"></div>
        <div class="itemPrice" id="${item}Price">
            <span>$${items[item].price}</span>
        </div>
    </div>
    <div class="itemVignette"></div>
    `
    if(items[item].img.startsWith('https://')) {
        itemDiv.style.backgroundImage = items[item].img
        console.log(items[item].img)

    } else {
        itemDiv.style.backgroundImage = `url(images/items/${items[item].img})`
        console.log(`url(images/items/${items[item].img})`)
    }

    doge('itemContainer').appendChild(itemDiv)

    if(typeof items[item].price === 'number') {
        doge(`${item}Price`).style.backgroundColor = `hsl(${150 - items[item].price / 1.25}, 100%, 65%)`
    } else {
        doge(`${item}Price`).style.backgroundColor = `hsl(${150 - items[item].pColor / 1.25}, 100%, 65%)`
    }

    for(tag in items[item].tags) {
        const tagSpan = document.createElement('span')
        tagSpan.innerText = items[item].tags[tag]
        doge(`${item}Tags`).appendChild(tagSpan)
    }

    itemDiv.addEventListener('mouseup', () => {
        openMenu(items[item])
    })
}

// for(let i = 0; i < 75; i++) {
//     const colorBlock = document.createElement('div')
//     colorBlock.innerText = `hsl(${i * 4}, 100%, 65%)`
//     colorBlock.style.backgroundColor = `hsl(${i * 4}, 100%, 65%)`
//     if(i * 4 > 40 && i * 4 < 200) {
//         colorBlock.style.color = 'black'
//     }
//     document.body.appendChild(colorBlock)
// }

function openMenu(item) {
    doge('menuContainer').style.display = 'flex'
    doge('menuHeading').innerText = item.name
    if(item.desc && item.specs) {
        doge('menuDesc').innerHTML = `${item.desc}<br><div class="menuDesc">${item.specs}</div>`
    } else if(item.desc) {
        doge('menuDesc').innerHTML = item.desc
    } else if(item.specs) {
        doge('menuDesc').innerHTML = item.specs
    } else {
        doge('menuDesc').innerHTML = ''
    }

    doge('menuImg').style.backgroundImage = `url(images/items/${item.img})`

    doge('menuButtons').innerHTML = ''
    if(item.links) {
        for(let link in item.links) {
            const linkA = document.createElement('a')
            linkA.setAttribute('href', item.links[link].address)
            linkA.setAttribute('target','_blank')
            if(item.links[link].price) {
                linkA.innerText = `${item.links[link].name} - ${item.links[link].price}`
            } else {
                linkA.innerText = `${item.links[link].name}`
            }
            doge('menuButtons').appendChild(linkA)
        }
    }
}

function closeMenu() {
    doge('menuContainer').style.display = 'none'
}