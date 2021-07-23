const birthDate = document.querySelector('#birthDate');
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
