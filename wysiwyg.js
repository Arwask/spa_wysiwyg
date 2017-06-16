// Create an array of objects that represents famous people (see structure below).
var famousPeople = 
[{
  title: "Samurai",
  name: "Tomoe Gozen",
  bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
  image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
  lifespan: 
  {
    birth: 1747,
    death: 1797
  }
},
{
	title: "Dr",
	name: "APJ Abdul Kalam",
	bio: "He is the most loved ex-president of India. Aeronautical engineer by profession and great idol and motiation to many youth",
	image: "https://www.google.com/imgres?imgurl=http://www.thefamouspeople.com/profiles/images/a-p-j-abdul-kalam-2.jpg&imgrefurl=http://www.thefamouspeople.com/profiles/a-p-j-abdul-kalam-590.php&h=750&w=900&tbnid=un4qNPrxaYgCMM:&tbnh=166&tbnw=200&usg=__z-fhnG-eWTGfr3haXeZKJk-hlv4=&vet=10ahUKEwiD_fLi_MLUAhXLKiYKHReVCBsQ_B0IkgEwCg..i&docid=cEwqwX9LY6RHYM&itg=1&sa=X&ved=0ahUKEwiD_fLi_MLUAhXLKiYKHReVCBsQ_B0IkgEwCg&ei=uSBEWcO8N8vVmAGXqqLYAQ",
	lifespan: 
	{
		birth: 1931,
		death: " "
	}
},

]
// Create a text input in your DOM.
var textElement = document.createElement('input');
textElement.setAttribute('type','text');

// Beneath that, create a container, block element in your DOM.
var container = document.createElement('div');
container.setAttribute('id', 'container');

// Create a DOM element for each of the objects inside the container. Style your person elements however you like.
conatiner.appendChild(document.createElement('h1'));
conatiner.appendChild(document.createElement('h2'));
conatiner.appendChild(document.createElement('p'));
conatiner.appendChild(document.createElement('img'));
conatiner.appendChild(document.createElement('p'));

// For every even numbered element, have a light yellow background.
// For every odd numbered element, have a light blue background.
// Each element's DOM structure should be as shown below.
// When you click on one of the person elements, a dotted border should appear around it.
// When you click on one of the person elements, the text input should immediately gain focus so that you can start typing.
// When there is a highlighted person element, and you begin typing in the input box, the person's biography should be immediately bound to what you are typing, letter by letter.
// When you press the enter/return key when typing in the input field, then the content of the input field should immediately be blank.