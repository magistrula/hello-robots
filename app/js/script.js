var DANCE_MESSAGES = [
  'Everybody dance now!',
  'Can\'t touch this!',
  'Livin\' la vida loca!',
  'You danced me too many times.',
  'Ughhhhhhhhhhhh...'
];
var TIRED_THRESHOLD = 3;
var PANIC_THRESHOLD = DANCE_MESSAGES.length;
var danceCounter = 0;

var charge = function () {
  setMessage('Fueling...');
  setImageBackground('green');
  danceCounter = 0;
}

var dance = function () {
  if (danceCounter >= PANIC_THRESHOLD) {
    panic();
    return;
  }

  if (danceCounter >= TIRED_THRESHOLD) {
    setImageBackground('gray');
  } else {
    setImageBackground('yellow');
  }

  setMessage(DANCE_MESSAGES[danceCounter]);
  danceCounter++;
}

var panic = function () {
  setMessage('AUGHHHHHHH!!!!');
  setImageBackground('red');
}

var setMessage = function (text) {
  document.getElementById('message').innerHTML = text;
}

var setImageBackground = function (color) {
  document.getElementById('image-container').style.backgroundColor = color;
}