const message = document.getElementById('message')
const shift = document.getElementById('shift')
const output = document.getElementById('output')



message.addEventListener('keyup', function ()  {
    let dont = /[0-9]/g;
    let itsValue = this.value
    this.value = this.value.replace(dont, '')

    message.addEventListener("input", () => {
        let itsValue = this.value;
        
        output.textContent = rot13({
            
            msg: itsValue,
            shift: shift.value
        });
    });

})

shift.addEventListener("keyup", function () {
    let itsValue = this.value;
    
    output.textContent = rot13({
        msg: message.value,
        shift: itsValue
    })
});

output.textContent = rot13({
    msg: message.value,
    shift: shift.value
});


function rot13(str) {

    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".toUpperCase(),
        shiftAmount,
        shiftedAlphabet = "",
        output = "",
        upperString,

        otherCharacters = '-=~\"\'#$%&*^:<>?/!{(|)}.1234567890\,'
    
        
    if (typeof str === "object") {
        shiftAmount = str.shift;
        upperString = str.msg.toUpperCase();
    } else {
        return;
    }


    if (typeof upperString === "string" || typeof (upperString + "") === "string") {
        shiftedAlphabet = alphabet.slice(shiftAmount);
        shiftedAlphabet += alphabet.slice(0, shiftAmount);
        shiftedAlphabet += otherCharacters;
        alphabet += otherCharacters;

        for (let i = 0; i < upperString.length; i++) {
            let numberd = alphabet.indexOf(upperString[i])
            output += shiftedAlphabet[numberd];
        }
    } else {
        return;
    };

    return output;
};