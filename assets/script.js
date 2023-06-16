//fléches
const leftArrow = document.querySelector('.arrow_left');
const rightArrow = document.querySelector('.arrow_right');
const dots = document.querySelector('.dots');
const img = document.querySelector('.banner-img');
let positionSlide = 0;
const txt = document.querySelector('.banner-txt');


//Addeventlistener
leftArrow.addEventListener("click",()=>{
	positionSlide--;
	if (positionSlide === -1){
		positionSlide = slides.lenght - 1;
	}
	  img.src = slides[positionSlide].image;
	  txt.innerHTML = slides[positionSlide].tagLine;
	  console.log("j'ai cliqué à gauche");
	  severalDots();
});

rightArrow.addEventListener("click",()=>{
	positionSlide++;
	if (positionSlide === slides.lenght){
		positionSlide = 0;
	}
	  img.src = slides[positionSlide].image;
	  txt.innerHTML = slides[positionSlide].tagLine;
	  console.log("j'ai cliqué à droite");
	  severalDots();
});

for (let i= 0; i< slides.lenght;i++){
	const newDot = document.createElement('div');
	newDot.classList = 'dot';
	dots.appendChild(newdot);
	newDot.addEventListener('click',()=>{
		positionSlide = i;
		img.src = slides[positionSlide].image;
		txt.innerHTML = slides[positionSlide].tagLine;
		severalDots();
	})
}

//Bullet point
let dot = document.querySelectorAll('.dot');
dot[0].classList.add('dot_selected');

function severalDots () {
	for (let i = 0; i < dot.length; i++) {
		if (i === positionSlide) {
			dot[i].classList.add('dot_selected');
		} else {
			dot[i].classList.remove('dot_selected');
		}
	}
}



const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

