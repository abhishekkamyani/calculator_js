const btns = document.querySelectorAll('.btn');
let prevOpertor;

btns.forEach((btn) =>{
    btn.addEventListener('click', (e) =>{
        const value = btn.value;
        const inputScreen  = document.querySelector('#input_screen');
        const tempScreen = document.querySelector('#temp_screen');
        
        if (value == '+' || value == '-'|| value == '/' || value == '*' || value == '=') {
            if(prevOpertor == undefined){
                if(value != '='){
                prevOpertor = value;
                tempScreen.innerHTML += inputScreen.value + value; 
                inputScreen.value = '';
                }
            }
            else{
                const firstValue = +tempScreen.innerText.slice(0,-1);
                const result = calculate(firstValue,prevOpertor,+inputScreen.value);
                
                if(value != '='){
                prevOpertor = value;
                }

                tempScreen.innerHTML = result + prevOpertor;
                inputScreen.value = '';
            }
        }
        else if(value == 'undo'){
            inputScreen.value = inputScreen.value.slice(0,-1);
        }
        else if(value == 'clear'){
            inputScreen.value = '';
            tempScreen.innerText = '';
            prevOpertor = undefined;
        }
        else{
            inputScreen.value += value;
        }

        function calculate(firstValue, operator, secondValue){
            let result;
            switch (operator) {
              case '+':
                result = firstValue + secondValue;
                break;
              case '-':
                result = firstValue - secondValue;
                break;
              case '*':
                result = firstValue * secondValue;
                break;
              case '/':
                result = firstValue / secondValue;
                break;
              default:
                console.log('Invalid operator');
            }
            return result;
        }
    })
})