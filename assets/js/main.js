//Carousel
const carousel = document.querySelector(".create-container__carousel"),
    firstItem = document.querySelectorAll(".create-container__box")[0],
    arrowIcons = document.querySelectorAll(".create-content__btn"),
    unMarginLeft = document.querySelector(".create-container");

let isDragStart = false,
    prevPageX,
    prevScrollLeft,
    positionDiff;
let firstItemWidth = firstItem.clientWidth + 14;

arrowIcons.forEach((icon) => {
    icon.addEventListener("click", () => {
        carousel.scrollLeft +=
            icon.id == "left" ? -firstItemWidth : firstItemWidth;
    });
});

const autoSlide = () => {
    positionDiff = Math.abs(positionDiff);
    let firstItemWidth = firstItem.clientWidth + 14;
    let valDifference = firstItemWidth - positionDiff;

    if (carousel.scrollLeft > prevScrollLeft) {
        return (carousel.scrollLeft +=
            positionDiff > firstItemWidth / 3 ? valDifference : -positionDiff);
    }
    carousel.scrollLeft -=
        positionDiff > firstItemWidth / 3 ? valDifference : -positionDiff;
};

const dragStart = (e) => {
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = carousel.scrollLeft;
};

const dragging = (e) => {
    if (!isDragStart) return;
    e.preventDefault();
    carousel.classList.add("dragging");
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
    // unMarginLeft.style.marginLeft = "20px";
};

const dragStop = () => {
    isDragStart = false;
    carousel.classList.remove("dragging");
    autoSlide();
};

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);

carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);

carousel.addEventListener("mouseup", dragStop);
carousel.addEventListener("mouseleave", dragStop);
carousel.addEventListener("touchend", dragStop);

// Slide text
let copy1 = document.querySelector(".footer-slide__wrap").cloneNode(true);
document.querySelector(".footer-slide").appendChild(copy1);

let copy2 = document.querySelector(".home__box").cloneNode(true);
document.querySelector(".home__slide").appendChild(copy2);

let copy3 = document.querySelector(".home__box1").cloneNode(true);
document.querySelector(".home__slide1").appendChild(copy3);

let copy4 = document.querySelector(".home__box2").cloneNode(true);
document.querySelector(".home__slide2").appendChild(copy4);
