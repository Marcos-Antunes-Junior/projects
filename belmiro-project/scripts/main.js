const counters = document.querySelectorAll(".count");
const speed = 100;

var isInViewport = function(elem) {
  var distance = elem.getBoundingClientRect();
  return (
    distance.top >= 0 &&
    distance.left >= 0 &&
    distance.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    distance.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

// The code to start the animation is now wrapped in a function


// On the first scroll in this window, call the function to start the counters
window.addEventListener('scroll', function(event) {
  counters.forEach((counter) => {
    if (isInViewport(counter)) {
      const updateCount = () => {
        const target = parseInt(+counter.getAttribute("data-target"));
        const count = parseInt(+counter.innerText);
        const increment = Math.trunc(target / speed);
        if (count < target) {
          counter.innerText = count + increment;
          setTimeout(updateCount, 40);
        } else {
          count.innerText = target;
        }
      };
      updateCount(); 
  }
  });
}, false);

