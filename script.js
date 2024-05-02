let time = 3;
const start_div = document.getElementById("start_div");
const main = document.getElementById("main");
main.style.display = "none";
const header = document.getElementById("header");
header.style.display = "none";

function timeChange(){
    time--;
    if(time == 0){
        start_div.remove();
        main.style.display = "flex";
        header.style.display = "flex";
    }
}
setInterval(timeChange, 1000);

fetch("data.json")
.then(response => response.json())
.then(data =>{
    for(let i = 0; i < data.length; i++){
        main.innerHTML += `
        <div class="new_div">
            <img src="img-${i}.webp" class="photo">

            <div> 
            <p class="title">${JSON.stringify(data[i].title)}</p>

            <br<br

            <p>${JSON.stringify(data[i].description)}</p>

            </div>
        </div>`;
    }
})