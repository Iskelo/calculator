// const dspl = document.querySelector('.displ');
const input = document.querySelector('input');
const btns = document.querySelectorAll('.btn')
// const sign = document.querySelectorAll('.sign')



btns.forEach((e) => {
	e.addEventListener('click', calculate)
})

// btns.forEach((e) => {
// 	e.addEventListener('click', () => {
// 		input.value = "";
// 		if (e.id.match(/\d/)) {
// 			input.value += e.id
// 			mem += input.value;
// 			input.value = mem;
// 		}
// 	})
// })

function calculate(event) {
	const clickedButtonValue = event.target.innerText;
	// input.value = '';
	if (clickedButtonValue === '=') {
		// Обчислення виразу, використовуючи функцію eval()
		try {
			input.value = eval(input.value);
		} catch (error) {
			input.value = 'Помилка';
		}
	} else if (clickedButtonValue === 'C') {
		// Очищення поля вводу
		input.value = '';
	} else {
		// Додавання символу до поля вводу
		input.value += clickedButtonValue;
		console.log(input.value)
	}
}

// sign.forEach((e) => {
// 	e.addEventListener('click', () => {
// 		input.value = 0
// 		if (e.id === "plus") {
// 			console.log(sum(+mem, +input.value))
// 		}
// 	})
// })


// function sum(a, b) {
// 	return a + b;
// }
// function substr(a, b) {
// 	return a - b;
// }

// function mult(a, b) {
// 	return a * b;
// }
// function division(a, b) {
// 	return a / b;
// }