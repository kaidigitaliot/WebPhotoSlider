const slideContainers = document.querySelectorAll(".slide-container");

slideContainers.forEach(container => {
    const carousel = container.querySelector(".carousel"),
          slides = carousel.querySelectorAll(".slide"), // 获取所有幻灯片
          arrowIcons = container.querySelectorAll("i");

    let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;

    const showHideIcons = () => {
        let scrollWidth = carousel.scrollWidth - carousel.clientWidth;
        arrowIcons[0].style.display = carousel.scrollLeft === 0 ? "none" : "block";
        arrowIcons[1].style.display = carousel.scrollLeft === scrollWidth ? "none" : "block";
    }

    arrowIcons.forEach(icon => {
        icon.addEventListener("click", () => {
            let firstSlideWidth = slides[0].offsetWidth + 14;
            carousel.scrollLeft += icon.id === "left" ? -firstSlideWidth : firstSlideWidth;
            setTimeout(() => showHideIcons(), 60);

             // 手动触发更新<p>元素位置的函数
           
        });
    });


    

    const autoSlide = () => {
        if (carousel.scrollLeft - (carousel.scrollWidth - carousel.clientWidth) > -1 || carousel.scrollLeft <= 0) return;

        positionDiff = Math.abs(positionDiff);
        let firstSlideWidth = slides[0].offsetWidth + 14;
        let valDifference = firstSlideWidth - positionDiff;

        if (carousel.scrollLeft > prevScrollLeft) {
            return carousel.scrollLeft += positionDiff > firstSlideWidth / 3 ? valDifference : -positionDiff;
        }
        carousel.scrollLeft -= positionDiff > firstSlideWidth / 3 ? valDifference : -positionDiff;
    }

    const dragStart = (e) => {
        isDragStart = true;
        prevPageX = e.pageX || e.touches[0].pageX;
        prevScrollLeft = carousel.scrollLeft;
    }

    const dragging = (e) => {
        if (!isDragStart) return;
        e.preventDefault();
        isDragging = true;
        carousel.classList.add("dragging");
        positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
        carousel.scrollLeft = prevScrollLeft - positionDiff;
        showHideIcons();

        // 更新每个幻灯片内部的<p>元素的位置
        slides.forEach(slide => {
            //const pElement = slide.querySelector("p");
            const imgElement = slide.querySelector("img");
            const imgLeft = imgElement.getBoundingClientRect().left; // 获取<img>元素的左侧位置
            //pElement.style.left = `${imgLeft - carousel.scrollLeft}px`; // 设置<p>元素的left属性
        });
    }

    const dragStop = () => {
        isDragStart = false;
        carousel.classList.remove("dragging");

        if (!isDragging) return;
        isDragging = false;
        autoSlide();
    }

    carousel.addEventListener("mousedown", dragStart);
    carousel.addEventListener("touchstart", dragStart);

    document.addEventListener("mousemove", dragging);
    carousel.addEventListener("touchmove", dragging);

    document.addEventListener("mouseup", dragStop);
    carousel.addEventListener("touchend", dragStop);
});
