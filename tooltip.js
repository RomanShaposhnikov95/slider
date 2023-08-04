function adjustTooltipPosition(tooltip) {
    const coord = tooltip.getBoundingClientRect();

    if (coord.x < 20) {
        tooltip.style.left = "0";
        tooltip.style.right = "unset";
        tooltip.style.transform = "unset";
    }

    if (coord.right > window.innerWidth - 20) {
        tooltip.style.left = "unset";
        tooltip.style.right = "0";
        tooltip.style.transform = "unset";
    }
}

function handleWindowResize() {
    const tooltips = document.querySelectorAll(".tooltip"); ///.tooltiper

    tooltips.forEach(tooltip => {
        adjustTooltipPosition(tooltip);
    });
}

window.addEventListener("load", handleWindowResize);

window.addEventListener("resize", handleWindowResize);
