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
  }
});
//Convert Date to String
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

//Setting max date to today
let today = new Date();
let maxDate = dateToString(today);
date.setAttribute('max', maxDate);
date.setAttribute('value', maxDate);

const findNextPalindrome = (dateList) => {
  let curDate = new Date(dateList.join('-'));
  curDate.setDate(curDate.getDate() + 1);
  console.log(dateToString(curDate));
  let trueFlag = '',
    dayCount = 0;
  while (!trueFlag) {
    curDate.setDate(curDate.getDate() + 1);
    dayCount++;
    console.log(dateToString(curDate));
    [trueFlag, palDate] = isPalindrome(dateToString(curDate).split('-'));
  }
  return [trueFlag, palDate, dayCount];
};

//Check if palindrome
const isPalindrome = function (dateList) {
  dateFormats = [
    dateList[1] + dateList[2] + dateList[0],
    dateList[2] + dateList[1] + dateList[0],
    dateList[1] + dateList[2] + dateList[0].substring(2),
    dateList[2] + dateList[1] + dateList[0].substring(2),
  ];
  for (let index = 0; index < dateFormats.length; index++) {
    let revstr = dateFormats[index].split('').reverse().join('');
    if (dateFormats[index] === revstr) {
      switch (index) {
        case 0:
          console.log('matched' + index);
          return ['MM/DD/YYYY', `${dateList[1]}-${dateList[2]}-${dateList[0]}`];
        case 1:
          console.log('matched' + index);
          return [`DD/MM/YYYY`, `${dateList[2]}-${dateList[1]}-${dateList[0]}`];
        case 2:
          console.log('matched' + index);
          return [
            `MM/DD/YY`,
            `${dateList[1]}-${dateList[2]}-${dateList[0].substring(2)}`,
          ];
        case 3:
          console.log('matched' + index);
          return [
            `DD/MM/YY`,
            `${dateList[2]}-${dateList[1]}-${dateList[0].substring(2)}`,
          ];
      }
    }
  }
  return ['', ''];
};

//Calls the function in different date format
function callPalindrome(date) {
  let dateVal = date.split('-');
  //Check if palindrome in 4 formats
  let [flagFormat, palDate] = isPalindrome(dateVal);
  console.log(flagFormat);
  if (flagFormat) {
    setTimeout(() => {
      output.innerHTML = `Congratulations! Your birthdate is a palindrome string in the <span class='highlight'>${flagFormat}</span> format as <span class='highlight'>${palDate}</span>.`;
    }, 10000);
  } else {
    let [dateFormat, nextDate, days] = findNextPalindrome(dateVal);
    setTimeout(() => {
      output.innerHTML = `Sorry,your birthdate is not a palindrome.\nThe nearest palindrome date is <span class='highlight'>${nextDate}</span> in <span class='highlight'>${dateFormat}</span> format which occurs in <span class='highlight'>${days}</span> days from your birthday.`;
    }, 10000);
  }
}

//Button trigger to check
btn.addEventListener('click', () => {
  output.innerText = '';
  if (!date.value) {
    output.innerText = `Provide a valid date.`;
  }
  callPalindrome(date.value);
});
