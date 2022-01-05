
const imgBack = document.querySelector('.img-back')
function onScroll() {
    window.addEventListener('scroll', callbackFunc);
    function callbackFunc() {
        var y = window.scrollY;
        if (y > 400) {
            imgBack.style.display = 'block';
        }
        else {
            if (y < 30) {
                imgBack.style.display = 'none';
            }
        }
    }
}
window.onload = function() {
    onScroll();
}