/*Hey Prepsters! Let's help Ronald McDonald find true love by revising his online dating profile!*/

//1. In the nav element, target the span element with the id of 'matCount' and change the number from 0 to 11.
const matId = document.getElementById('matCount');
matCount.innerHTML = 11;
//2. In the nav element, target the span element with the id of 'msgCount' and change the number from 0 to 23.
const msgId = document.getElementById('msgCount');
msgId.innerHTML = 23;
//3. In the div id data section, target the div element with the id of 'fullname' and change Full Name to Ronald McDonald.
const fullName = document.getElementById('fullname');
fullName.innerHTML = 'Ronald McDonald';
//4. In the div id data section, target the div element with the id of 'age' and change Age to 63 Years Old.
const ageId = document.getElementById('age');
ageId.innerHTML = '63 years old';
//5. In the div id data section, create a div with an id of job and give it the following information: Clown and Restauranteur.
const jobDiv = document.createElement('div');
jobDiv.innerHTML = 'Clown and Restauranteur';
jobDiv.id = 'job';
const dataDiv = document.getElementById('data');
dataDiv.appendChild(jobDiv);
//6. In the div id data section, create a div with an id of hobbies and give it the following information: Long romantic walks on the beach, candle light Big Mac dinners and tormenting the King.
const hobbiesDiv = document.createElement('div');
hobbiesDiv.innerHTML = 'Long romantic walks on the beach, candle light Big Mac dinners and tormenting the King.';
hobbiesDiv.id = 'hobbies';
dataDiv.appendChild(hobbiesDiv);
//7. In the div id data section, create a div with an id of location and give it the following information: Honolulu, HI.
const locDiv = document.createElement('div');
locDiv.innerHTML = 'Honolulu, HI';
locDiv.id = 'location';
dataDiv.appendChild(locDiv);
//8. In the div id data section, create a div with an id of wants and give it the following information: Looking for a Mrs. McDonald.
const wantsDiv = document.createElement('div');
wantsDiv.innerHTML = 'Looking for a Mrs. McDonald.';
wantsDiv.id = 'wants';
dataDiv.appendChild(wantsDiv);
//9. In the div id profile section, create a paragraph element with an id of pro2 and create a your own profile for Ronald (at least 2 sentences).
const profDiv = document.getElementById('profile');
const pro2Para = document.createElement('p');
pro2Para.id = 'pro2';
pro2Para.innerHTML = 'Do you like french fries? Do you like smelling like french fries? If so, cool. I was just asking.';
profDiv.appendChild(pro2Para);
//10. In the div id matches section, target the first div element with the class name of firstName and change Name to Wendy.
const getFirstName = document.getElementsByClassName('firstName');
getFirstName[0].innerHTML = 'Wendy';
//11. In the div id matches section, target the first div element with the class name of otherAge and change Age to 48.
const getAge = document.getElementsByClassName('otherAge');
getAge[0].innerHTML = '48';
//12. In the div id matches section, target the first div element with the class name of status and change Status to Single Mother.
const getStatus = document.getElementsByClassName('status');
getStatus[0].innerHTML = 'Single Mother';
//13. In the div id matches section, target the second div element with the class name of firstName and change Name to Peko Chan.
getFirstName[1].innerHTML = 'Peko-chan';
//14. In the div id matches section, target the second div element with the class name of otherAge and change Age to 68.
getAge[1].innerHTML = '68';
//Final Boss Create your own profile into the page:
//change image to match your profile
//div with class name of firstName
//div with class name of otherAge
//div with class name of status
//div with class anem of Motto
const imgSet = document.getElementsByClassName('other');
imgSet[2].src = 'http://img.timeinc.net/time/photoessays/2011/top10_creepiest_mascots/jack.jpg';
getFirstName[2].innerHTML = 'Jack';
getAge[2].innerHTML = '67';
getStatus[2].innerHTML = 'Single';
const getMotto = document.getElementsByClassName('motto');
getMotto[2].innerHTML = 'The food is better at the Box';