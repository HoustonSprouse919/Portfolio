const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));
const left = document.getElementById('leftSide');
const handleOnMove = (e) => {
  const p = (e.clientX / window.innerWidth) * 100;
  left.style.width = `${p}%`;
};
document.onmousemove = (e) => handleOnMove(e);
document.ontouchmove = (e) => handleOnMove(e.touches[0]);
