const button = document.querySelector(".btn");
const reply = document.querySelector(".text");

button.addEventListener("click", removeButton);

function removeButton() {
    button.classList.add("removed");
    reply.textContent = "Bravo bumeru!!";
    reply.classList.add("visible");
}