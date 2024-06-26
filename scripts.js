document.addEventListener('DOMContentLoaded', function() {
    const inputElement = document.getElementById('text-input');
    const button = document.getElementById('check-btn');

    button.addEventListener('click', () => {
        const realText = inputElement.value.split('');
        const reveseText = inputElement.value.split('').reverse();
        const resultContent = document.getElementById('text-content');

        if(inputElement.value == ''){
            resultContent.innerText = "Anda Belum Memberikan Text Apapun!"
        }else{
            if(JSON.stringify(realText) == JSON.stringify(reveseText))
            {
                resultContent.innerText = inputElement.value + " merupakan palindrome";
            }else{
                resultContent.innerText = inputElement.value + " bukan merupakan palindrome";
            }
        }
    })
    
});