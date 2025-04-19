
let cirkles = [].slice.call(document.querySelectorAll('.cirkle1'))

function rounded(list) {
  list.forEach(function(elem) {
    let r = elem.parentElement
    elem.theta = 0;
    elem.t = r.offsetWidth / 2;
    elem.r = elem.offsetWidth / 2
  })
}

function positions(list) {
  let a = 0;
  for (let i = 0; i < list.length; i++){
    list[i].theta = a;
    a -= 0.518;
  }
}




  function rotate(a)  {
    a.x = a.t - a.r + Math.cos(a.theta) * a.t;
    a.y = a.t - a.r + Math.sin(a.theta) * a.t;
    a.style.left = a.x + 'px'
    a.style.top = a.y + 'px'
  };


function anim() {
  requestAnimationFrame(anim)
  rounded(cirkles)
  positions(cirkles)
  cirkles.forEach(function(elem) {

    rotate(elem)
  })
}
anim();
