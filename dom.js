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