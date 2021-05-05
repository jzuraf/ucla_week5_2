console.log('Hello from js/scripts.js!');

const customNameA = document.getElementById('customNameA');
const customNameB = document.getElementById('customNameB');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

let storyText = 'It was 94 fahrenheit outside, when :insertx: was murdered at :inserty:. Jim, the detective on the case, believed the suspect in question, Bob, used a :insertz: to complete the murder. Along with the :insertz: that was found at the crime scene, there were also large footprints left behind. Bob weighs 300 pounds and is 7 feet tall, could he have done it?';
let insertW = [''];
let insertX = ['Sandra','Peter','Donna','Sunny'];
let insertY = ['the park','Disneyland','the White House','the beach'];
let insertZ = ['banjo','rubber duck','potato peeler','burrito'];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  let wItem = randomValueFromArray(insertW);
  let xItem = randomValueFromArray(insertX);
  let yItem = randomValueFromArray(insertY);
  let zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':insertz:',zItem);
  newStory = newStory.replace(':insertz:',zItem);

  if(customNameA.value !== '') {
    const name = customNameA.value;
    newStory = newStory.replace('Bob',name);
  }

  if(customNameB.value !== '') {
    const name = customNameB.value;
    newStory = newStory.replace('Jim',name);
  }



  if(document.getElementById("uk").checked) {
    const weight = Math.round(300*0.0714286) + ' stone';
    const temperature =  Math.round((94-32) * 5 / 9) + ' centigrade';
    newStory = newStory.replace('94 fahrenheit',temperature);
    newStory = newStory.replace('300 pounds',weight);
  }



  story.textContent = newStory;
  story.style.visibility = 'visible';
}
