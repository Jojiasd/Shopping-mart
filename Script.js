const slider = document.querySelector('.slider');

let startX;

let scrollLeft;

let isTouching = false;

slider.addEventListener('mousedown', (e) => {

    startX = e.pageX - slider.offsetLeft;

    scrollLeft = slider.scrollLeft;

    slider.classList.add('active');

});

slider.addEventListener('mouseleave', () => {

    slider.classList.remove('active');

});

slider.addEventListener('mouseup', () => {

    slider.classList.remove('active');

});

slider.addEventListener('mousemove', (e) => {

    if (!slider.classList.contains('active')) return;

    const x = e.pageX - slider.offsetLeft;

    const walk = (x - startX) * 2; // The scroll speed

    slider.scrollLeft = scrollLeft - walk;

});

// Touch events for mobile devices

slider.addEventListener('touchstart', (e) => {

    e.preventDefault(); // Prevent the default touch scroll behavior

    isTouching = true;

    startX = e.touches[0].pageX - slider.offsetLeft;

    scrollLeft = slider.scrollLeft;

});

slider.addEventListener('touchmove', (e) => {

    if (!isTouching) return;

    const x = e.touches[0].pageX - slider.offsetLeft;

    const walk = (x - startX) * 2;

    slider.scrollLeft = scrollLeft - walk;

});

slider.addEventListener('touchend', () => {

    isTouching = false;

});

// Add support for touch swipe with momentum (optional)

slider.addEventListener('touchstart', (e) => {

    e.preventDefault(); // Prevent page scrolling

    startX = e.touches[0].pageX;

    scrollLeft = slider.scrollLeft;

}, { passive: false });

slider.addEventListener('touchmove', (e) => {

    if (startX === null) return;

    const x = e.touches[0].pageX;

    const walk = (x - startX) * 2;

    slider.scrollLeft = scrollLeft - walk;

}, { passive: false });

slider.addEventListener('touchend', () => {

    startX = null; // Reset touch start position

});