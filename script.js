
 const passwordInput = document.getElementById('password');
 const lengthInput = document.getElementById('length');
 const uppercaseInput = document.getElementById('uppercase');
 const lowercaseInput = document.getElementById('lowercase');
 const numbersInput = document.getElementById('numbers');
 const symbolsInput = document.getElementById('symbols');
 const generateBtn = document.getElementById('generateBtn');
 const copyIcon = document.querySelector('.copy-icon');

 const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
 const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
 const numberChars = '0123456789';
 const symbolChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';

 function generatePassword() {
     let chars = "";
     let password = "";

     if (uppercaseInput.checked) 
        { 
            chars += uppercaseChars;

        }
     if (lowercaseInput.checked)
         {
            chars += lowercaseChars;
        }
     if (numbersInput.checked)
         {
            chars += numberChars;
        }
     if (symbolsInput.checked)
         {
            chars += symbolChars;
        }

     if (chars === "") {
         alert('Please select at least one option');
         return;
     }

     const length = lengthInput.value;
     for (let i = 0; i < length; i++) {
         const randomIndex = Math.floor(Math.random() * chars.length);
         password += chars[randomIndex];
     }

     passwordInput.value = password;
 }




 generateBtn.addEventListener('click', generatePassword);


 lengthInput.addEventListener('input', generatePassword);
 uppercaseInput.addEventListener('change', generatePassword);
 lowercaseInput.addEventListener('change', generatePassword);
 numbersInput.addEventListener('change', generatePassword);
 symbolsInput.addEventListener('change', generatePassword);


 generatePassword();