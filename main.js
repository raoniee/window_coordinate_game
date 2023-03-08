const Horizontal = document.querySelector('.horizontal');
const Vertical = document.querySelector('.vertical');
const Target = document.querySelector('.target');
const Coordinate = document.querySelector('span');


addEventListener('load', () => {
    const TargetRect = Target.getBoundingClientRect();
    const TargetHalfWidth = TargetRect.width / 2;
    const TargetHalfHeight = TargetRect.height / 2;


    document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;


        Horizontal.style.transform = `translateY(${mouseY}px)`;
        Vertical.style.transform = `translateX(${mouseX}px)`;
        Target.style.transform = `translate(${mouseX - TargetHalfWidth}px, ${mouseY - TargetHalfHeight}px)`;
        Coordinate.style.transform = `translate(${mouseX}px,${mouseY}px)`;
        Coordinate.innerText = `${mouseX}px,${mouseY}px`;

    });
});

