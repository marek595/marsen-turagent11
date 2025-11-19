// =============================================================
// 1. ЗБЕРЕЖЕННЯ ВИБРАНОГО ТУРУ (SHOP → PAYMENT)
// =============================================================

// Знаходимо всі кнопки з класом .buy-btn (на shop.html)
const buyButtons = document.querySelectorAll(".buy-btn");

if (buyButtons) {
    buyButtons.forEach(btn => {
        btn.addEventListener("click", function () {
            const tourName = this.getAttribute("data-tour");

            // Зберігаємо в localStorage
            localStorage.setItem("selectedTour", tourName);

            // Перехід на сторінку оплати
            window.location.href = "payment.html";
        });
    });
}



// =============================================================
// 2. АВТОЗАПОВНЕННЯ ФОРМИ ОПЛАТИ НА payment.html
// =============================================================

const tourInput = document.querySelector("#tour-input");

if (tourInput) {
    const savedTour = localStorage.getItem("selectedTour");

    if (savedTour) {
        tourInput.value = savedTour;
    }
}



// =============================================================
// 3. ОБРОБКА ФОРМИ ОПЛАТИ
// =============================================================

const paymentForm = document.querySelector("#payment-form");

if (paymentForm) {
    paymentForm.addEventListener("submit", function (event) {
        event.preventDefault(); // не оновлюємо сторінку

        alert("Дякую! Тур успішно оплачено ✔");

        // очищаємо форму
        paymentForm.reset();

        // видаляємо останній вибраний тур
        localStorage.removeItem("selectedTour");
    });
}



// =============================================================
// 4. ЛЕГКА АНІМАЦІЯ КНОПОК
// =============================================================

const buttons = document.querySelectorAll(".btn");

if (buttons) {
    buttons.forEach(btn => {
        btn.addEventListener("mouseenter", () => {
            btn.style.transition = "0.2s";
            btn.style.transform = "scale(1.05)";
            btn.style.opacity = "0.8";
        });

        btn.addEventListener("mouseleave", () => {
            btn.style.transform = "scale(1)";
            btn.style.opacity = "1";
        });
    });
}



// =============================================================
// 5. МЕНЮ-БУРГЕР (необов’язково, але вже додано)
// =============================================================

const burger = document.querySelector(".burger");
const navMenu = document.querySelector("nav");

if (burger && navMenu) {
    burger.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });
}
