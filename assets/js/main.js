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
function slideText() {
    const e = document.querySelectorAll();
    let width = 0;
    const id = setInterval(frame, 10);
    function frame() {
        if (width == 100) {
            width = 0;
        } else {
            width++;
            element.style.width = width + "%";
        }
    }
}

slideText();
