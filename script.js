///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
// Fontion 1
let footer = document.getElementsByTagName("footer");
nbClick = 0;

footer[0].addEventListener("click", function(){
	console.log("clique n°" + (nbClick += 1));
});
// Fontion 1
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
// Fontion 2
let dropdownButton = document.getElementsByTagName("button")[0];

let uncollapseStatus = false;

function uncollapse(){
	let navbarHeader = document.getElementById("navbarHeader");

	if (uncollapseStatus === false){
			navbarHeader.removeAttribute("class");
			uncollapseStatus = true;
	} else if (uncollapseStatus === true){
		navbarHeader.setAttribute("class", "collapse bg-dark");
		uncollapseStatus = false;
	}
};

dropdownButton.addEventListener("click", uncollapse)
// Fontion 2
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
// Fontion 3
let firstEditBtn = document.getElementsByTagName("button")[2];

function firstCardTextTurnRed(){
	let firstCardText = document.querySelector(".card-text")
	firstCardText.style.color = "red";
}	

firstEditBtn.addEventListener("click", firstCardTextTurnRed);
// Fontion 3
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
// Fontion 4
let secondEditBtn = document.getElementsByTagName("button")[4];

function secondCardTextTurnGreen(){
	let secondCardText = document.querySelectorAll(".card-text")[1];

		if (secondCardText.style.color !== "green"){
			secondCardText.style.color = "green";
		} else {
			secondCardText.style.color = "";
	}	
}

secondEditBtn.addEventListener("click", secondCardTextTurnGreen)
// Fontion 4
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
// Fontion 5
let navbar = document.body.querySelector("header");

function nuclear(){
	if (document.styleSheets[0].disabled === true){
			document.styleSheets[0].disabled = false
	} else {
		document.styleSheets[0].disabled = true;
	}
};

navbar.addEventListener("dblclick", nuclear);
// Fontion 5
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
// Fontion 6
let cardsBtnView = document.body.querySelectorAll(".btn-success");
let cards = document.body.querySelectorAll(".card")

	for (let i = 0; i < cards.length; i++) {
		cardsBtnView[i].addEventListener('mouseover', function(){
			if (cards[i].getElementsByClassName("card-img-top")[0].style.width === '20%') {
				cards[i].getElementsByClassName("card-img-top")[0].style.width = '100%'
				cards[i].getElementsByClassName("card-text")[0].classList.remove("collapse")	
			}
			else {
				cards[i].getElementsByClassName("card-img-top")[0].style.width = '20%'
				cards[i].getElementsByClassName("card-text")[0].classList.add("collapse")	
			}
		});
	}
// Fontion 6
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
// Fontion 7
let roundBtn = document.getElementsByClassName("btn btn-secondary my-2")[0]
let cardsTurn = document.getElementsByClassName('col-md-4')
let row = document.getElementsByClassName('row')[1]

function turnClock(){
	row.insertBefore(cardsTurn[cardsTurn.length - 1], cardsTurn[0])
}

roundBtn.addEventListener('click', turnClock)
// Fontion 7
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
// Fontion 8
let btnRound = document.getElementsByClassName("btn btn-primary my-2")[0]
	btnRound.removeAttribute("href")
	btnRound.addEventListener('click', function(){
  	row.appendChild(row.firstElementChild);
	});

// Fontion 8
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////