let topBtn = document.getElementById("btn-up");
topBtn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth'});

window.onscroll = () => window.scrollY > 500 ? topBtn.style.display = 'inline-block' : topBtn.style.display = 'none'
