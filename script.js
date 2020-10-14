//Remove the 'playing' tag from the class list to return the object to it's pre transition state
function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  e.target.classList.remove('playing');
}

const audio = document.getElementById('wellDoneSound')
const image = document.getElementById('wellDoneImage')

//Plays the sound assigned to the key that is pressed
function playSound() {
  console.log('Play soudn ran')
  console.log('Audio', audio)
  console.log('Image', image)
  //if audio doesn't exist then quit
  if (!audio) return;
  //add 'playing' tag to the class list so that the playing animation can happen
  image.classList.add('playing');
  audio.currentTime = 0;
  audio.play();
}

//listen for transitions and then remove them once finished
image.addEventListener('transitionend', removeTransition);
//Listens for a key press and then calls the play sound subroutine with each key
document.addEventListener('keydown', playSound);