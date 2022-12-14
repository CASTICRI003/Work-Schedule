
//this shows the date
var today = dayjs();
$('#date').text(today.format('MMM, D, YYYY'));

//my hours
var h9 = document.getElementById('09');
var h10 = document.getElementById('10');
var h11 = document.getElementById('11');
var h10 = document.getElementById('12');
var h1 = document.getElementById('01');
var h2 = document.getElementById('02');
var h3 = document.getElementById('03');
var h4 = document.getElementById('04');
var h5 = document.getElementById('05');

var Input;
//function that runs when page is loaded
function init() {
  Input = json.parse(localStorage.getItem('plannerInput'));
  if (Input === 0) {
    return;
  } else {
    renderSchedule();
  }
};
//function that runs when button is clicked
$('.saveBtn').on('click', function (event) {
  event.preventDefault();

  var plannerInput = {
     h9: h9.value,
     h10: h10.value,
     h11: h11.value,
     h12: h12.value,
     h1: h1.value,
     h2: h2.value,
     h3: h3.value,
     h4: h4.value,
     h5: h5.value
  };

  localStorage.setItem('plannerInput', json.stringify(plannerInput));

});

// puts text where it needs to go
function renderSchedule() {
  Input = json.parse(localStorage.getItem('plannerInput'));

  h9.textContent = Input.h9
  h10.textContent = Input.h10
  h11.textContent = Input.h11
  h12.textContent = Input.h12
  h1.textContent = Input.h1
  h2.textContent = Input.h2
  h3.textContent = Input.h3
  h4.textContent = Input.h4
  h5.textContent = Input.h5
}

init();