const btnEl = document.getElementById("btn");
const animeContainerEl = document.querySelector(".anime-container");
const animeImgEl = document.querySelector(".anime-img");
const animeNameEl = document.querySelector(".anime-name");



btnEl.addEventListener("click", async () => {


    try {
        btnEl.disabled = true;
        btnEl.innerText = "Loading...";
        animeNameEl.innerText = "Updating...";
        animeImgEl.src = "loading.svg";

        const response = await fetch("https://api.catboys.com/img");
        const result = await response.json();


        btnEl.disabled = false;
        btnEl.innerText = "Get Anime";

        animeContainerEl.style.display = "block";
        animeImgEl.src = result.url;
        animeNameEl.innerText = result.artist;
        
    } catch (error) {
        btnEl.disabled = false;
        btnEl.innerText = "Get Anime";
        animeNameEl.innerText = "An Error happened, please tyr again.";
        console.log(error);
    }
})
