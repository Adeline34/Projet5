//fléches
const leftArrow = document.querySelector('.arrow_left');
const rightArrow = document.querySelector('.arrow_right');

//Addeventlistener
leftArrow.addEventListener("click",()=>{
	 alert("j'ai cliqué à gauche");
});

rightArrow.addEventListener("click",()=>{

	  alert("j'ai cliqué à droite");

});

//Bullet point
const bullet = document.querySelector('.dots');

bullet.classList.add('dot')

const select = document.querySelector('.dots');

select.classList.add('dot_selected')


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

