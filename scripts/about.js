for(const container of Array.from(document.querySelectorAll(".container"))) {
    const titleSection = container.querySelector(".title")

    titleSection.onclick = () => {

        if(container.className === "container show") {
            container.className = "container"
        }
        else{
            container.className = "container show"
        }

    }
}