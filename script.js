const counters = document.querySelectorAll('.counter');

counters.forEach((counter) => {
  counter.innerText = '0';

  const updateCounter = () => {
    const finallCount = +counter.getAttribute('data-target');
    const startCount = +counter.innerText;
    const increment = finallCount / 200;

    if (startCount < finallCount) {
      counter.innerText = `${Math.ceil(startCount + increment)}`;
      setTimeout(updateCounter, 1);
    } else counter.innerText = finallCount;
  };

  updateCounter();
});
