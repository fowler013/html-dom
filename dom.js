//this is pulling straing from the Javascript
let button1 = document.createElement('button');
let btnText = document.createTextNode('congrats!');
button1.appendChild(btnText);
document.body.prepend(button1);


button1.addEventListener('click', function(){
    alert( 'you did it!');
});
// this is pulling from the ID element in the html.
let button2 = document.getElementById('html');
//this button should allow what is typed in the text to appear once clicked!
button2.addEventListener('click', function(){
    let textBoxValue = document.getElementById('text1').value;
    alert(textBoxValue);
})

//this will change there divHover background to green
let divHover = document.getElementById('divHover');

//add mouseover
divHover.addEventListener('mouseover',function(){
    divHover.style.backgroundColor = 'green';
})


//this is will change the paragraph to red
let pRandom= document.getElementById('random');

//add color to paragraph that when I click it it changes to red or random colors.
function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  pRandom.addEventListener("click", function() {
    pRandom.style.color = getRandomColor();
  });

  //this is where I will create the button that will create my name in a the div.
  let button3 = document.createElement('button3');
  let ghostSpan = document.createTextNode('ghostSpan text');
  let div1 = document.createElement('div1');
  button3.appendChild(ghostSpan);
  document.body.prepend(button3);
  document.body.appendChild(div1);
  
  
  //create the click function for the button
  button3.addEventListener('click', function(){
      let span1 = document.createElement('span');
    let myName =document.createTextNode('Tevin');
    span1.appendChild(myName)
    div1.appendChild(span1)
  }) 

  // this will be the array for the list of my best friends.
  let friends = ['brian', 'ted', 'tyler', 'joe','austin', 'scot', 'fox', 'link','zelda', 'kylo'];
  let button4 = document.getElementById('myFriendsButton');
  let friendsList = document.getElementById('friend1');
  let i = 0;

  //this is where I will create the click function for button4
  button4.addEventListener('click', function(){
    if (i < friends.length) {
        let list = document.createElement("li");
        let addFriends= friends[i];
        let friend = document.createTextNode(addFriends);
        list.appendChild(friend);
        friendsList.appendChild(list);
        i++;
      } else {
          alert("You ran out of friends, sorry!")
      }
  })

