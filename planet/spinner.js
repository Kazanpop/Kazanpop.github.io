
let cirkles = [].slice.call(document.querySelectorAll('.cirkle1'))

function rounded(list) {
  list.forEach(function(elem) {
    let r = elem.parentElement
    elem.theta = Math.random() * 360;
    elem.t = r.offsetWidth / 2;
  })
}

rounded(cirkles)

  function rotate(a)  {
    a.theta += 0.015;
    a.x = a.t - 25 + Math.cos(a.theta) * a.t;
    a.y = a.t - 25 + Math.sin(a.theta) * a.t;
    a.style.left = a.x + 'px'
    a.style.top = a.y + 'px'
    
  };


function anim() {
  requestAnimationFrame(anim);
  cirkles.forEach(function(elem) {
    rotate(elem)
  })
}
anim();
