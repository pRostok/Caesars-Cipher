const message = document.getElementById('message');
const shift = document.getElementById('shift');
const output = document.getElementById('output');

message.addEventListener('keyup', function () {
  const nums = /[0-9]/g;
  this.value = this.value.replace(nums, '');

  output.textContent = rot13({
    msg: this.value,
    shift: shift.value,
  });
});

shift.addEventListener('keyup', function () {
  output.textContent = rot13({
    msg: message.value,
    shift: this.value,
  });
});

output.textContent = rot13({
  msg: message.value,
  shift: shift.value,
});

function rot13(str) {
  console.log(`TRIGGER`);
  let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.toUpperCase(),
    shiftAmount,
    shiftedAlphabet = '',
    output = '',
    upperString,
    otherCharacters = '-=~"\'#$%&*^:<>?/!{(|)}.1234567890,';

  if (typeof str === 'object') {
    console.log(str);
    shiftAmount = str.shift;
    upperString = str.msg.toUpperCase();
  } else {
    return;
  }

  if (
    typeof upperString === 'string' ||
    typeof (upperString + '') === 'string'
  ) {
    shiftedAlphabet = alphabet.slice(shiftAmount);
    shiftedAlphabet += alphabet.slice(0, shiftAmount);
    shiftedAlphabet += otherCharacters;
    alphabet += otherCharacters;

    for (let i = 0; i < upperString.length; i++) {
      let numberd = alphabet.indexOf(upperString[i]);
      output += shiftedAlphabet[numberd];
    }
  } else {
    return;
  }

  return output;
}
