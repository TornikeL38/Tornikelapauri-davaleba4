const header = document.createElement("header")
header.classList.add("header")
document.body.appendChild(header)


const div = document.createElement("div")
div.classList.add("conteiner")
document.body.appendChild(div)

const h1 = document.createElement("h1");
h1.innerText = "WE   ARE   MILAN";
header.appendChild(h1)
h1.style.color = "white"

const h3 = document.createElement("h3")
h3.innerText = "HOW WE START"
document.body.appendChild(h3)
h3.style.color = "red"

const secondDiv = document.createElement("div")
secondDiv.classList.add("conteiner")
document.body.appendChild(secondDiv)
secondDiv.classList.add("box")


const p = document.createElement("p")
p.innerText = "We will be a team of devils. Our colours will be red like fire and black to invoke fear in our opponents!” These were the words that Herbert Kilpin used as he founded AC Milan on 16 December 1899. Just a year and a half later, the Rossoneri became the champions of Italy for the first time after beating Genoa 3-0 at Ponte Carrega on 5 May 1901"
secondDiv.appendChild(p)

const button = document.createElement("button")
button.innerText = "Read more"
document.body.appendChild(button)

















