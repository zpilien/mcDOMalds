
/*Use the powers of the Document Object Model (DOM) to complete the following exercises below:*/

//1. Ronald McDonald
//Find the div with the id of "name1" and replace the 'Robert' with the 'Ronald'

let ron = document.getElementById('first1').innerHTML = 'Ronald';

//Find the div id of 'favFood1' and replace 'Favorite Food: Whoppers' with 'Favorite Food: Big Macs'

let ronFood = document.getElementById('favFood1').innerHTML = 'Favorite Food: Big Macs';

//Find the div id of 'shoe1' and replace 'Shoe: n/a' with 'Shoe: Clown'

let ronShoe = document.getElementById('shoe1').innerHTML = 'Shoe: Clown';


//2. Evil Grimmace
//Find the div with the id of "last2" and replace 'Grimmmmmmace' with the 'Grimmace': 

let grim = document.getElementById('last2').innerHTML = 'Grimmace';

//Find the div with the id of 'position2' and replace 'Point Guard' with 'Power Foward'

let grimPos = document.getElementById('position2').innerHTML = 'Power Forward';

//Find the div id of 'nickName2' and replace 'aka:The Purple Monster' with 'The Poor Man's Barney'

let grimNick = document.getElementById('nickName2').innerHTML = "aka: The Poor Man's Barney";


//3. Mayor McCheese

//Find the div with the id of 'nickName3' and replace 'aka: Mister President' with 'aka: Da Mayah'

let mayorNick = document.getElementById('nickName3').innerHTML = 'aka: Da Mayah';

//Find the div with the id of 'favFood3' and replace 'Favorite Food: Kale Salad' with 'Favorite Food: Cheeseburgers';

let mayorFood = document.getElementById('favFood3').innerHTML = 'Favorite Food: Cheeseburgers';

//Find the div with the id of 'shoe3' and replace 'Shoe: Jordan Brand' with 'Shoe: Li-Ning'

let mayorShoe = document.getElementById('shoe3').innerHTML = 'Shoe: Li Ning';


//4. Player cards 
//The player cards needs an artistic update. Change the following:
//4.1 background color to 'red'
//4.2 border style to 'solid'
//4.3 border color to 'gold'

let borders = document.getElementsByClassName('playerCard');

for(let i = 0; i<borders.length; i++){
    borders[i].style.background = 'red';
    borders[i].style.borderStyle = 'solid';
    borders[i].style.borderColor = 'gold';
}
