//Меню
document.addEventListener("DOMContentLoaded", function () {
    const burger = document.querySelector(".burger");
    const menu = document.querySelector(".menu");
    const open = document.querySelector(".open");
    const body = document.body;
    const menuLinks = document.querySelectorAll(".menu__link");

    if (burger) {
        burger.addEventListener("click", function () {
            menu?.classList.toggle("active");
            open?.classList.toggle("active");
            body.classList.toggle("lock");
        });
    }

    menuLinks.forEach(link => {
        link.addEventListener("click", function () {
            menu?.classList.remove("active");
            document.querySelector(".menu__list")?.classList.remove("active");
            open?.classList.remove("active");
            body.classList.remove("lock");
        });
    });
});



//Скролл по блокам

const anchors = document.querySelectorAll('a[href*="#"]');

anchors.forEach(anchor => {
	anchor.addEventListener('click', event => {
		event.preventDefault();

		const blockID = anchor.getAttribute('href').substring(1);

		document.getElementById(blockID).scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		})
	})
})
//Ліниве завантаження
document.addEventListener("DOMContentLoaded", () => {
    const lazyElements = document.querySelectorAll(".lazy");
    const lazyImages = document.querySelectorAll(".lazy-image");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const element = entry.target;

                if (element.tagName === "IMG") {
                    element.src = element.dataset.src;
                    element.onload = () => element.classList.add("loaded");
                } else {
                    element.classList.add("animate");
                }
                
                element.classList.remove("lazy");
                observer.unobserve(element);
            }
        });
    }, { rootMargin: "200px 0px" });

    lazyElements.forEach((el) => observer.observe(el));
    lazyImages.forEach((img) => observer.observe(img));
});

    document.addEventListener("DOMContentLoaded", () => {
    const lazyElements = document.querySelectorAll(".lazy");
    const lazyImages = document.querySelectorAll(".lazy-image");

    // Перевірка для елементів
    if (lazyElements.length) {
        const elementObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("animate");
                    entry.target.classList.remove("lazy");
                    observer.unobserve(entry.target);
                }
            });
        });

        lazyElements.forEach((el) => elementObserver.observe(el));
    }

    // Перевірка для зображень
    if (lazyImages.length) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src; // Завантаження зображень
                    img.onload = () => img.classList.add("loaded"); // Плавна поява 
                    observer.unobserve(img);
                }
            });
        });

        lazyImages.forEach((img) => imageObserver.observe(img));
    }
});




//Перевірка розмірів вікна
const lazyObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const lazyElement = entry.target;
        lazyElement.classList.add("lazy-loaded");
        lazyElement.classList.remove("lazy");
        observer.unobserve(lazyElement);
      }
    });
  },
  { rootMargin: "200px 0px" } 
);


if (!('IntersectionObserver' in window)) {
    var script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/intersection-observer/0.12.0/intersection-observer.min.js';
    document.head.appendChild(script);
}
//Перевірка input у блоці 3
  const container = document.querySelector(".form__input-box"); 
const inputs = document.querySelectorAll(".form__input-box input"); 

if (inputs.length > 2) {
    container.classList.add("vertical");
} else {
    container.classList.remove("vertical");
}

 







