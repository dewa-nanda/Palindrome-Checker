document.addEventListener('DOMContentLoaded', function() {
    const inputElement = document.getElementById('text-input');
    const outputElement = document.getElementById('content-answer');
    const button = document.getElementById('check-btn');

    

    button.addEventListener('click', function() {
        if(inputElement.value == ''){
            outputElement.classList.remove('visible');
            alert('Input Tidak Boleh Kosong');
        }else{
            // get element answer-result
            const answerResultElement = document.getElementById('result-input-user');
            // get element palindrome
            const palindromeElement = document.getElementById('palindrome');
            // get normal text
            let normalText = inputElement.value.toString().toLowerCase().replace(/[0-9]|\s|\f/, '');
            // get reverse text with array reverse function
            let reverseText = Array.from(inputElement.value).reverse();

            // use toString function for covert arr to string 
            // replaceAll for remove ',' char in string
            reverseText = reverseText.toString().replaceAll(',', '');
            reverseText = reverseText.toString().replace(/[0-9]|\s|\f/, '');

            console.log(reverseText);

            answerResultElement.innerText = normalText;
            if(normalText == reverseText){
                palindromeElement.innerText = "is a palindrome"
            }else{
                palindromeElement.innerText = "is not a palindrome"
            }

            outputElement.classList.add('visible');
        }
    });
});