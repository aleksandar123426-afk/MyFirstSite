const detailButtons = document.querySelectorAll('.language-card__button');

detailButtons.forEach((button) => {
	button.addEventListener('click', () => {
		const details = document.getElementById(button.getAttribute('aria-controls'));
		const isOpen = button.getAttribute('aria-expanded') === 'true';

		button.setAttribute('aria-expanded', String(!isOpen));
		details.hidden = isOpen;
		button.firstChild.textContent = isOpen ? 'Show details ' : 'Hide details ';
		button.querySelector('span').textContent = isOpen ? '+' : '−';
	});
});
