const header = document.querySelector("header")
const nav = document.querySelector("nav")
const openMenuButton = document.querySelector("#openMenu")

openMenuButton.onclick = (ev) => {
    if(openMenuButton.textContent === "=") {
         header.className = "opened"
         openMenuButton.textContent = "x"
         nav.className = "show"
    }
    else{
        header.className = ""
        openMenuButton.textContent = "="
        nav.className = ""
    }
}