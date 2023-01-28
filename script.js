const images = [
    "./images/avocado.jpeg",
    "./images/pancake.jpeg",
    "./images/sandwich.jpeg",
    "./images/spaghetti.jpeg"
]

const img = document.querySelector('img')
const nextBtn = document.querySelector('#next-button')
const prevBtn = document.querySelector('#prev-button')
const lastImage = images.length - 1;
let currentImage = 0;

window.addEventListener("DOMContentLoaded", () => {
img.src = images[0]

})

nextBtn.addEventListener('click', () => {
        for (let i = 0 ; i <= lastImage ; i ++) {
            if (currentImage === lastImage) {
                currentImage = 0;
                return img.src = `${images[currentImage]}`
            } 
                currentImage +=1;
                return img.src = `${images[currentImage]}`
        }
    }      
)

prevBtn.addEventListener('click', () => {
    for (let i = 0 ; i <= lastImage ; i ++) {
        if (currentImage === 0) {
            currentImage = lastImage;
            return img.src = `${images[currentImage]}`
        } 
            currentImage -=1;
            return img.src = `${images[currentImage]}`
    }
})

