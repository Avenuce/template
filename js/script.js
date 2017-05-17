window.onload = function (){
		var imgs = document.querySelectorAll('.slide'), len = imgs.length, i = len-1;
  (function go(){
     imgs[i].classList.remove('active')
     i = ++i % len;
     imgs[i].classList.add('active');
     window.setTimeout(go, 6000)
  })()
}
