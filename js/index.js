// =============================================================
// 1. ДОДАВАННЯ ТУРУ В КОШИК
// =============================================================

const buyButtons = document.querySelectorAll(".buy-btn");

buyButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        const tourName = btn.dataset.tour;
        const tourPrice = btn.dataset.price;

        const tour = {
            name: tourName,
            price: tourPrice
        };

        localStorage.setItem("selectedTour", JSON.stringify(tour));

        window.location.href = "payment.html";
    });
});


// =============================================================
// 2. АВТОЗАПОВНЕННЯ НА СТОРІНЦІ ОПЛАТИ
// =============================================================

const tourInput = document.querySelector("#tour-input");

if (tourInput) {
    const savedTour = JSON.parse(localStorage.getItem("selectedTour"));

    if (savedTour) {
        tourInput.value = savedTour.name;
    }
}


// =============================================================
// 3. ОБРОБКА ОПЛАТИ
// =============================================================

const paymentForm = document.querySelector("#payment-form");

if (paymentForm) {
    paymentForm.addEventListener("submit", e => {
        e.preventDefault();

        alert("🎉 Оплата успішна! Гарної подорожі 🌴");

        localStorage.removeItem("selectedTour");
        paymentForm.reset();
    });
}


// =============================================================
// 4. АНІМАЦІЯ КНОПОК
// =============================================================

document.querySelectorAll(".btn").forEach(btn => {
    btn.addEventListener("mouseenter", () => {
        btn.style.transform = "scale(1.08)";
        btn.style.transition = "0.2s";
    });

    btn.addEventListener("mouseleave", () => {
        btn.style.transform = "scale(1)";
    });
});


// =============================================================
// 5. MENU BURGER
// =============================================================

const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav");

if (burger && nav) {
    burger.addEventListener("click", () => {
        nav.classList.toggle("active");
    });
}

