const date = document.querySelector('#birthDate');
const btn = document.querySelector('#btn');
const output = document.querySelector('#output');
const giffy = document.querySelector('#gif');

btn.addEventListener('click', function () {
  let date = birthDate.value;
  if (date === '') {
    alert('Please select your birth date...');
  } else {
    giffy.className = 'show';
    setTimeout(function () {
      giffy.className = giffy.className.replace('show', '');
    }, 10000);

    setTimeout(
      () => (output.innerHTML = 'JS logic yet to be implemented...'),
      10000
    );
  }
});

function dateToString(date) {
  let dd = date.getDate();
  let mm = date.getMonth() + 1;
  if (dd < 10) {
    dd = '0' + dd;
  }
  if (mm < 10) {
    mm = '0' + mm;
  }
  return date.getFullYear() + '-' + mm + '-' + dd;
}

let today = new Date();
let maxDate = dateToString(today);
date.setAttribute('max', maxDate);
date.setAttribute('value', maxDate);
