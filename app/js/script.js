$.get('/robots', function (robots) {
  init(window, robots);
});

function init(target, robots) {

  var DEFAULT_MESSAGE = 'Hello, Robots!';
  var DANCE_DATA = [
    { text: 'Everybody dance now!', color: '#FFFF66' },
    { text: 'Can\'t touch this!', color: '#FFFF66' },
    { text: 'Livin\' la vida loca!', color: '#FFFF66' },
    { text: 'You danced me too many times.', color: '#E6E6E6' },
    { text: 'Ughhhhhhhhhhhh...', color: '#FFCC99' }
  ];
  var PANIC_THRESHOLD = DANCE_DATA.length;
  var ROBOTS = robots;

  var danceCounter = 0;
  var robotCounter = 0;

  var charge = function () {
    setMessage('Fueling...');
    setImageBackground('#5CD65C');
    danceCounter = 0;
  }

  var dance = function () {
    var danceDatum;

    if (danceCounter >= PANIC_THRESHOLD) {
      panic();
    } else {
      danceDatum = DANCE_DATA[danceCounter];
      setImageBackground(danceDatum.color);
      setMessage(danceDatum.text);
      danceCounter++;
    }
  }

  var panic = function () {
    setMessage('AUGHHHHHHH!!!!');
    setImageBackground('#FF4D4D');
  }

  var changeRobot = function () {
    robotCounter++;
    var robot = ROBOTS[robotCounter % ROBOTS.length];
    document.getElementById('robot-image').src = 'img/' + robot;
    resetRobot();
  }

  var resetRobot = function () {
    setImageBackground('transparent');
    setMessage(DEFAULT_MESSAGE);
    danceCounter = 0;
  }

  var setMessage = function (text) {
    document.getElementById('message').innerHTML = text;
  }

  var setImageBackground = function (color) {
    document.getElementById('image-container').style.backgroundColor = color;
  }

  target.charge = charge;
  target.dance = dance;
  target.panic = panic;
  target.changeRobot = changeRobot;

}