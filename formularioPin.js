let inputPin = document.getElementById('pin');
let form = document.getElementById('formulario');
let result = document.getElementById('result');
const FORMAT = 'application/x-www-form-urlencoded';
const METHOD = 'POST' ;


async function sendForm() {
  if((inputPin.value).length === 5){
    try {
      const res = await fetch('https://validate-pin.fly.dev/validate', {
          body: new URLSearchParams({ PIN: inputPin.value }),
          headers: {
              FORMAT
          },
          method: METHOD
      }); 
      const content = await res.text()
      result.innerHTML = content;
      
    } catch (error) {
      result.innerHTML = error;
    }

  }
}

inputPin.addEventListener('input', sendForm )