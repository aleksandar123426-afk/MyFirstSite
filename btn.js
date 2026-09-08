const moreButton = document.querySelector('#more-button');
const moreText = document.querySelector('#more-text');

moreButton.addEventListener('click', () => {
    moreText.removeAttribute('hidden');
    moreButton.setAttribute('aria-expanded', 'true');
    moreButton.setAttribute('hidden', '');
});
