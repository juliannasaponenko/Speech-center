const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");
const myModal = document.getElementById("myModal");

closeModalBtn.addEventListener("click", function(e) {
    e.preventDefault();
    myModal.style.display = "none";
});

document.addEventListener("click", function(e) {
    if (e.target === myModal) {
        myModal.style.display = "none";
    }
});



document.querySelector(".header_burger").addEventListener("click", function() {
    this.classList.toggle("active");
    document.querySelector(".nav").classList.toggle("open");
});


document.querySelector(".contactsLink").addEventListener("click", function() {
    document.querySelector(".header_burger").classList.toggle("active");
    document.querySelector(".nav").classList.toggle("open");
})



document.querySelector('.form').addEventListener('submit', function(event) {
    event.preventDefault();
    var values = document.querySelectorAll('.value');
    var isValid = true;

    values.forEach(element => {
        if (element.value.length < 3) {
            element.nextElementSibling.textContent = "Введено некорректное значение!";
            element.style.border = "1px solid red";
            isValid = false;
        }
        else {
            element.nextElementSibling.textContent = ""; // Очистить сообщение об ошибке
            element.style.border = "1px solid #ccc"; // Сбросить границу на значение по умолчанию
        }
    }); 

    if (isValid) {
        myModal.style.display = "block";
        var values = document.querySelectorAll('.value');
        values.forEach(element => {
        element.value = "";
    });
    }
});