const display = document.querySelector("#screen");
const btns = document.querySelectorAll(".button");

btns.forEach(element => {
	element.addEventListener('click', (e) => {
		switch (element.innerText) {
			case 'C':
				display.innerText = '';
				break;
			case '←':
				display.innerText = display.innerText.slice(0, -1);
				break;
			case '=':
				// TODO: This is just a protoype, in the future change this to where eval() isn't used as it's insecure. (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval#never_use_eval!)
				try {
					display.innerText = eval(display.innerText);
				}
				catch {
					display.innerText = 'Error'
				}
				break;
			default:
				display.innerText += element.innerText;
		}
	}
	)
});