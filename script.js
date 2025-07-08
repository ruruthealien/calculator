let string = "";
let memory = 0;
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            try {
                string = eval(string);
                document.querySelector('input').value = string;
            } catch (error) {
                String = "Error";
                document.querySelector('input').value = string;
            }
        } else if (e.target.innerHTML == 'C') {
            string = "";
            document.querySelector('input').value = string;
        } else if (e.target.innerHTML == 'M+') {
            memory += Number(input.value) || 0;
        } else if (e.target.innerHTML == 'M-') {
            memory -= Number(input.value) || 0;
        } else if (e.target.innerHTML == '%') {
            string = (eval(string) / 100).toString();
            input.value = string;
        } else {
            console.log(e.target);
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }

    });
})