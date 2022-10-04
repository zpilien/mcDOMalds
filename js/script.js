
/*Use the powers of the Document Object Model (DOM) to complete the following exercises below:*/

//1. Ronald McDonald
//Find the div with the id of "first1" and replace the 'Robert' with the 'Ronald'

let first1 = document.getElementById('first1');
first1.innerHTML = 'Ronald';

//Find the div id of 'favFood1' and replace 'Favorite Food: Whoppers' with 'Favorite Food: Big Macs'

let favFood1 = document.getElementById('favFood1');
favFood1.innerHTML = 'Favorite Food: Big Macs';

//Find the div id of 'shoe1' and replace 'Shoe: n/a' with 'Shoe: Clown'

let shoe1 = document.getElementById('shoe1');
shoe1.innerHTML = 'Shoe: Clown';

//2. Evil Grimmace
//Find the div with the id of "last2" and replace 'Grimmmmmmace' with the 'Grimmace': 

let last2 = document.getElementById('last2');
last2.innerHTML = 'Grimmace';

//Find the div with the id of 'position2' and replace 'Point Guard' with 'Power Foward'

let position2 = document.getElementById('position2');
position2.innerHTML = 'Power Forward';

//Find the div id of 'nickName2' and replace 'aka:The Purple Monster' with 'The Poor Man's Barney'

let nickName2 = document.getElementById('nickName2');
nickName2.innerHTML = "The Poor Man's Barney";


//3. Mayor McCheese

//Find the div with the id of 'nickName3' and replace 'aka: Mister President' with 'aka: Da Mayah'

let nickName3 = document.getElementById('nickName3');
nickName3.innerHTML = 'Da Mayah';

//Find the div with the id of 'favFood3' and replace 'Favorite Food: Kale Salad' with 'Favorite Food: Cheeseburgers';

let favFood3 = document.getElementById('favFood3');
favFood3.innerHTML = 'Favorite Food: Cheeseburgers';

//Find the div with the id of 'shoe3' and replace 'Shoe: Jordan Brand' with 'Shoe: Li-Ning'

let shoe3 = document.getElementById('shoe3');
shoe3.innerHTML = 'Shoe: Li-Ning';


//4. Player cards 
//The player cards needs an artistic update. Change the following:
//4.1 background color to 'red'
//4.2 border style to 'solid'
//4.3 border color to 'gold'

let cards = document.getElementsByClassName('playerCard');

for(i=0; i<cards.length; i++){
      cards[i].style.background = 'red';
      cards[i].style.borderStyle = 'solid';
      cards[i].style.borderColor = 'gold';
}

//5. Uncle O'Grimacey
//Create the following for each element:

/*5.1 Create a div element with:
      id of 'position7'
      innerHTML of 'Coach'
      add this newly created div element to Uncle's player card
*/

let players = document.getElementsByClassName('playerCard');

let grimPos = document.createElement('div');
grimPos.id = 'position7';
grimPos.innerHTML = 'Coach';
players[6].prepend(grimPos);


/*5.2 Create a h1 element with:
    id of 'last7'
    innerHTML of "O'Grimacey"
    add this newly created h1 element to Uncle's player card
*/
 
let OGlast = document.createElement('h1');
OGlast.id = 'last7';
OGlast.innerHTML = "O'Grimacey";
players[6].prepend(OGlast);


/*5.3 Create a h2 element with:
    id of 'first7'
    innerHTML of 'Uncle'
    add this newly created h2 element to Uncle's player card
*/

let OGfirst = document.createElement('h2');
OGfirst.id = 'first7';
OGfirst.innerHTML = 'Uncle';
players[6].prepend(OGfirst);


//6. Fry Guys

/*6.1 Create a div element with:
      id of 'nickName8'
      innerHTML of 'aka: Pom-poms'
      add this newly created div element to Fry Guys player card
*/

let fryNickName = document.createElement('div');
fryNickName.id = 'nickName8';
fryNickName.innerHTML = 'aka: Pom-poms';
players[7].appendChild(fryNickName);



/*6.2 Create a div element with:
      id of 'favFood8'
      innerHTML of 'Favorite Food: French Fries'
      add this newly created div element to Fry Guys player card
*/

let fryFave = document.createElement('div');
fryFave.id = 'favFood8';
fryFave.innerHTML = 'Favorite Food: French Fries';
players[7].appendChild(fryFave);


/*6.3 Create a div element with:
      id of 'shoe8'
      innerHTML of 'Shoe: Puma'
      add this newly created div element to Fry Guys player card
*/

let fryShoe = document.createElement('div');
fryShoe.id = 'shoe8';
fryShoe.innerHTML = 'Shoe: Puma';
players[7].appendChild(fryShoe);


//7. Birdie the Early Bird

/*7.1 Create a div element with:
      id of 'position9'
      innerHTML of 'Head Scout'
      add this newly created div element to Birdie's player card
*/



/*7.2 Create a h1 element with:
    id of 'last9'
    innerHTML of 'Early Bird'
    add this newly created h1 element to Birdie's player card
*/


/*7.3 Create a h2 element with:
    id of 'first9'
    innerHTML of 'Birdie the'
    add this newly created h2 element to Birdie's player card
*/



/*7.4 Create a div element with:
      id of 'nickName9'
      innerHTML of 'aka: ODB'
      add this newly created div element to Birdie's player card
*/




/*7.5 Create a div element with:
      id of 'favFood9'
      innerHTML of 'Favorite Food: The other white meat'
      add this newly created div element to Birdie's player card
*/




/*7.6 Create a div element with:
      id of 'shoe9'
      innerHTML of 'Shoe: allbirds'
      add this newly created div element to Birdie's player card
*/

