// Create an array of objects that represents famous people (see structure below).
var person = 
[{
  title: "Samurai",
  name: "Tomoe Gozen",
  bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
  image: "samurai.jpg",
  lifespan: 
  {
    birth: 1747,
    death: 1797
  }
},
{
	title: "Ex-President",
	name: "APJ Abdul Kalam",
	bio: "He is the most loved ex-president of India. Aeronautical engineer by profession and great idol and motiation to many youth",
	image: "apj.jpg",
	lifespan: 
	{
		birth: 1931,
		death: " "
	}
},
{
	title: "Ex-President",
	name: "APJ Abdul Kalam",
	bio: "He is the most loved ex-president of India. Aeronautical engineer by profession and great idol and motiation to many youth",
	image: "apj.jpg",
	lifespan: 
	{
		birth: 1931,
		death: " "
	}
},
{
  title: "Samurai",
  name: "Tomoe Gozen",
  bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
  image: "samurai.jpg",
  lifespan: 
  {
    birth: 1747,
    death: 1797
  }
}
]
// Create a text input in your DOM.
var main = document.getElementById('mainDiv');
var textElement = document.createElement('input');
textElement.setAttribute('type','text');
textElement.setAttribute('id','input')
main.appendChild(textElement);
var counter = 0;
person.forEach(function(persona)
{
	// Beneath that, create a container, block element in your DOM.
	var container = document.createElement('div');
	container.setAttribute('class', 'container');
	container.setAttribute('id', counter);
	counter++;
	main.appendChild(container);

	// Create a DOM element for each of the objects inside the container. Style your person elements however you like.
	var h1 = document.createElement('h1');
	container.appendChild(h1);
	h1.innerHTML = persona.title;
	var h2 = document.createElement('h2');
	container.appendChild(h2);
	h2.innerHTML = persona.name;
	var p1 = document.createElement('p');
	// p1.setAttribute('class','bio');
	container.appendChild(p1);
	p1.innerHTML = persona.bio;
	var imageurl = document.createElement('img');
	container.appendChild(imageurl);
	imageurl.setAttribute("src", persona.image);
	var article = document.createElement('article')
	container.appendChild(article);
	article.innerHTML = `${persona.lifespan.birth} - ${persona.lifespan.death}`;
// When you click on one of the person elements, a dotted border should appear around it.
		container.addEventListener("click", function()
		{
			var divId = this.id;
			toggleBorder(divId);
		})
})

function toggleBorder(id)
{
	for(let i=0; i<main.childElementCount-1; i++)
	{
		let currentDiv = document.getElementById(i);
		console.log(currentDiv);
		if(currentDiv.classList.contains('border'))
			currentDiv.classList.remove('border');
	}
	var thisDiv = document.getElementById(id);
	thisDiv.classList.toggle('border');
	if(thisDiv.classList.contains('border'))
	{
		document.getElementById('input').focus();
		document.getElementById('input').addEventListener("keypress", function()
		{
			if(event.keyCode == 13)
			{
			// When you press the enter/return key when typing in the input field, then the content of the input field should immediately be blank.
				document.getElementById('input').value = " ";		
			}
			else
			{
				for(let i=0; i<main.childElementCount-1; i++)
				{
					let currentDiv = document.getElementById(i);
					// console.log(currentDiv);
					if(currentDiv.classList.contains('border'))
					{
						let p1 = document.getElementsByTagName('p');
						console.log(p1[i]);
						console.log(p1[i].innerHTML);
						p1[i].innerHTML += String.fromCharCode(event.keyCode);
					}
				}
				// console.log(id);
				
				// console.log(p1.innerHTML);
			}
		})
	}
	else
	{
		document.getElementById('imput').blur();
	}
}
// 	// When you click on one of the person elements, the text input should immediately gain focus so that you can start typing.
// 		// When there is a highlighted person element, and you begin typing in the input box, the person's biography should be immediately bound to what you are typing, letter by letter.