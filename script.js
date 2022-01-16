const dpContainer = document.querySelector('.dropdown_container');
const selectedOption = document.querySelector('.selectedOpt');
const dpList = document.querySelector('.dropdown_option');
const dpIcon = document.querySelector('.dpIcon');

window.addEventListener('click', (e) => {
    console.log(e.target.className);
    if (dpContainer.contains(e.target) && e.target.className === "optList") {
        selectedOption.innerText = e.target.innerText;
    }
    if (selectedOption.contains(e.target)) {
        dpList.style.display = "block";
        dpIcon.style.transform = "rotate(-180deg)";
    } else {
        dpList.style.display = "none";
        dpIcon.style.transform = "rotate(0deg)";
    }
})
