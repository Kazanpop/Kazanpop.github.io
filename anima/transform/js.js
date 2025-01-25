const circle = document.getElementById("circle");


circle.animate(
  [
    {}, 
    {
      transform: "translateY(150px) translateX(150px)"
    },
    
    {} 
  ],
  { duration: 4000, iterations: Infinity }
);






const circle1 = document.getElementById("circle1");


circle1.animate(
  [
    {}, 
    {
      transform: "translateY(150px)  translateX(75px)"
    },
    {
      transform: "translate(-75px, 150px)"
    },
    {
      transform: "translate(0, 0)"
    },
    {} 
  ],
  { duration: 4000, iterations: Infinity }
);






const circle3 = document.getElementById("circle3");


circle3.animate(
  [
    {}, 
    {
      transform: "translateX(40px)"
    },
    {
      transform: "translate(80px, 40px)"
    },
    {
      transform: "translate(80px, 80px)"
    },
    {
      transform: "translate(40px, 120px)"
    },
      {
      transform: "translate(0px, 120px)"
    },
      {
      transform: "translate(-40px, 80px)"
    },
    {
      transform: "translate(-40px, 40px)"
    },
    {} 
  ],
  { duration: 4000, iterations: Infinity }
);






const circle2 = document.getElementById("circle2");


circle2.animate(
  [
    {}, 
    {
      transform: "translateY(150px) "
    },
    {
      transform: "translate(150px, 150px)"
    },
    {
      transform: "translateX(150px)"
    },
    {} 
  ],
  { duration: 4000, iterations: Infinity }
);




