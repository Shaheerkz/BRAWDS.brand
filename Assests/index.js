const slider = document.getElementById("slider");
const slides = slider.children;
const imgIndex = slider.children;
imgIndex[0].className = "Active";
function prev() {

    for (let i = 0; i < imgIndex.length; i++) {
        if (imgIndex[i].className === "Active") {
            imgIndex[i].className = "";
            imgIndex[i - 1].className = "Active";
            slider.style.transform = "translateX(" + (i - 1) * -221 + "px)";
            break;
        }
    }
};
function next() {
    for (let x = 0; x <= imgIndex.length; x++) {
        if (imgIndex[x].className === "Active") {
            imgIndex[x].className = "";
            imgIndex[x + 1].className = "Active";
            slider.style.transform = "translateX(" + (x + 1) * -221 + "px)";
            break;
        }
    }
};