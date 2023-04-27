const div = document.createElement("div")
div.classList.add("conteiner")
document.body.appendChild(div)

const h1 = document.createElement("h1");
h1.innerText = "Blog title";
div.appendChild(h1)

const images = document.createElement("img");
images.src = "img/acm.jpg";
div.appendChild(images)
images.style.width = "300px"

const p = document.createElement("p")
p.innerText = "Forza Rossoneri. We have 19 scudeto and 7 UCL cup!! "
div.appendChild(p)

const button = document.createElement("button")
button.innerText = "Read more"
div.appendChild(button)
button.style.margin = "20px"








//document.body.appendChild(h1);


	//const div = document.createElement("div");
    
    //document.body.appendChild("h1")


    // const div = document.createElement("div")
    // div.classList.add('box')
    // document.body.appendChild("div")
    // const title = document.createElement("h1")
    // title.innerText = "Blog title";
    // document.body.appendChild("h1")

