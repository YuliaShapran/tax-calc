document.addEventListener("DOMContentLoaded", () => {

	//modal

	const modalTrigger = document.querySelector('[data-modal]'),
		modal = document.querySelector('.modal'),
		modalCloseBtn = document.querySelector('[data-close]');


	modalTrigger.addEventListener('click', () => {
		modal.style.display = 'block'
		modal.classList.toggle('show');
		document.body.style.overflow = 'hidden';

	});

	function closeModal() {
		modal.style.display = 'none'
		modal.classList.toggle('show');
		document.body.style.overflow = '';
	}
	modalCloseBtn.addEventListener('click', closeModal);

	modal.addEventListener('click', (e) => {
		if (e.target === modal) {
			closeModal();
		}
	});

	document.addEventListener('keydown', (e) => {
		if (e.code === "Escape") {
			closeModal();
		}
	});


	//calc


	
	calcShow = document.querySelector('.modal__calc-show');

	const startOfCalculation = document.querySelector('.modal__link');


	startOfCalculation.addEventListener("click", () => {
		const salary = document.getElementById('input-salary');

		if (salary.value != '') {
			calcShow.style.display = 'block'
			calcShow.classList.toggle('show');
			calc(salary.value);
		}
	});



	function calc(salary) {
		const modalCalcCheckboxes = document.querySelector('.modal__calc-checkboxes');

		let taxRefund = 260000;
		let taxDeduction = Math.floor((salary * 12) * 0.13);
		let allYears = Math.floor(taxRefund / taxDeduction);
		let paidBefore = allYears * taxDeduction;
		let lastYears = Math.floor(taxRefund - paidBefore)
		let request = [];
		for (i = 0; i < allYears; i++) {
			request.push(taxDeduction);
		}
		if (lastYears > 0) {
			request.push(lastYears);
		}

		newList(request, modalCalcCheckboxes);
	}

	function newList(items, parent) {
		parent.innerHTML = "";
		items.forEach((item, i) => {
			parent.innerHTML += `<div class="modal__calc-checkboxes">
		<input id="checkbox" type="checkbox" name="checkbox" class="custom-checkbox"></input>
		<label for="checkbox">${item} рублей<span> в ${i + 1}-ый год</span></label>
		</div>
		`
		});
	}

});






