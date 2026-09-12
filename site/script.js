const toggleBtn = document.getElementById("toggleSkills");
const hiddenItems = document.querySelectorAll(".skills__item--hidden");

toggleBtn.addEventListener("click", function () {
    const isOpen = hiddenItems[0].classList.contains("is-visible");

    hiddenItems.forEach(function (item) {
        if (isOpen) {
            item.classList.remove("is-visible");
        } else {
            item.classList.add("is-visible");
        }
    });

    toggleBtn.textContent = isOpen ? "Показать ещё" : "Свернуть";
});

const links = document.querySelectorAll('a[href^="#"]');

links.forEach(function (link) {
    link.addEventListener("click", function (e) {
        const id = link.getAttribute("href");
        if (id === "#") return;

        const target = document.querySelector(id);
        if (!target) return;

        e.preventDefault();
        const top = target.getBoundingClientRect().top + window.pageYOffset - 70;
        window.scrollTo({ top: top, behavior: "smooth" });
    });
});

document.getElementById("year").textContent = new Date().getFullYear();