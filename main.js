function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')

//    if(html.classList.contains('light')) {
//    html.classList.remove('light')
//    } else {
//       html.classList.add('light')
//    }

    const img = document.querySelector("#profile img")
    if (html.classList.contains('light')) {
        img.setAttribute("alt", "Foto de um urso de braços cruzados usando óculos modo dia.")
    } else {
        img.setAttribute("alt", "Foto de um urso de braços cruzados usando óculos modo noturno.")
    }
    
}