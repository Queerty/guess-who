console.log('Here are all the available people:', people);

$(document).ready(onReady);

function onReady(){
console.log('jquery is ready!');

randomName();
appendProfilePic();

//$('body').on('click', 'div', checkMatch)
    
};
// let people = [
//     {
//       name: 'Dev',
//       githubUsername: 'devjanaprime'
//     },
//     {
//       name: 'Dane',
//       githubUsername: 'DoctorHowser'
//     },
//     {
//       name: 'Mary',
//       githubUsername: 'mbmosman'
//     },
//     {
//       name: 'Kris',
//       githubUsername: 'kdszafranski'
//     },
//     {
//       name: 'Edan',
//       githubUsername: 'eschwartz'
//     },
//     {
//       name: 'Casie',
//       githubUsername: 'cassandradanger'
//     },
//     {
//       name: 'Chris',
//       githubUsername: 'christopher-black'
//     },
//   ];
  
function appendProfilePic(){
    people.forEach(function(person){
        // $('people').append(`<div></div>`).data('profilePic',people[index] );
        // $('#people > div').append(`<span>${people[index]}</span>`);
        $('body').append(`<div><img src="https://github.com/${person.githubUsername}.png?size=250" alt="Profile image of"${person.name}"></div>`)
     
    })
    console.log(people);
    return people;
};
//<img src="https://github.com/christopher-black.png?size=250" alt="Profile image of Chris"></img>
let answer;
let nameSelected;
function randomName(min, max){
        min = 0;
        max = 9;
        answer = Math.floor(Math.random() * (1 + max - min) + min);
     
        return $('body').append(`<header>Can you guess ${people[answer].name}?</header>`);

       
    }; 

