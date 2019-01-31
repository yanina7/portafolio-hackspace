function resizeHeaderOnScroll() {
  var distanciaY = window.pageYOffset || document.documentElement.scrollTop;
  var limite = 200;
  var elNav = document.getElementById('navegador'); 

  if (distanciaY > limite) {
    elNav.classList.add("el-menu");
    elNav.classList.remove("el-navegador");
    elNav.classList.remove("el-navegador");
  }else{
    elNav.classList.remove("el-menu");
    elNav.classList.add("el-navegador");    
  }
}

window.addEventListener('scroll', resizeHeaderOnScroll);
