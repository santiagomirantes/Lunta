const terrains = [
    {
        name: "AX1XB302", 
        meters: "200",
        price: "200.000",
        intPrice:200000,
        status:true,
        selection:[20, 10]
    },
    {
        name: "3B2FAA9A",
        meters: "280",
        price: "142.000",
        intPrice:142000,
        status:true,
        selection:[35,8]
    },
    {
        name: "D21D392F",
        meters: "450",
        price: "229.500",
        intPrice:229500,
        status:false,
        selection:[18,25]
    },
    {
        name: "5F4FA1A0",
        meters: "55",
        price: "27.500",
        intPrice:27500,
        status:true,
        selection:[11,5]
    }
];


const moonVideo = document.querySelector("#moon_video")
const terrainInfo = document.querySelector("#terrain_info")
const skipButton = document.querySelector("#skip")

const nameElement = document.querySelector("#terrain_info h2")
const statusElement = document.querySelector("#terrain_info #status")
const metersElement = document.querySelector("#terrain_info #meters")
const priceElement = document.querySelector("#terrain_info #price")
const selectionElement = document.querySelector("#selection")

function updateTerrainInfo(pos) {
    let terrain = terrains[pos]

    nameElement.innerHTML = terrain.name

    if(terrain.status) {
        statusElement.innerHTML = "DISPONIBLE"
        statusElement.className = "avaliable"
    }
    else{
        statusElement.innerHTML = "NO DISPONIBLE"
        statusElement.className = "unavaliable"
    }

    metersElement.innerHTML = terrain.meters

    priceElement.innerHTML = terrain.price

   selectionElement.style.width = terrain.selection[0] / 5 + "vw"
   selectionElement.style.height = terrain.selection[1] / 5 + "vw"

   terrainInfo.style.visibility = "unset"
   selectionElement.style.display = "unset"
}


let current = 0

moonVideo.ontimeupdate = () => {

    if(moonVideo.currentTime >= 0 && moonVideo.currentTime < 1 && current === 3) {
        current = 0
        moonVideo.pause()
    }
    else if(moonVideo.currentTime >= 1 && current === 0) {
        moonVideo.pause()
        current = 1
    }
    else if(moonVideo.currentTime >= 2.3 && current === 1) {
        moonVideo.pause()
        current = 2
    }
    else if(moonVideo.currentTime >= 3.4 && current === 2) {
        moonVideo.pause()
        current = 3
    }
    else{
        return
    }

    updateTerrainInfo(current)

}

skipButton.onclick = () => {
    moonVideo.play()

    terrainInfo.style.visibility = "hidden"
    selectionElement.style.display = "none"
}

moonVideo.onended = () => {
    moonVideo.currentTime = 0
    moonVideo.play()
}

function redirect() {
    const terrain = terrains[current]
    return window.location.href = `/pages/purchase.html?name=${terrain.name}&price=${terrain.intPrice}`
}

updateTerrainInfo(0)