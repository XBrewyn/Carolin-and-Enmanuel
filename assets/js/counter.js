function Counter({ style = {}, title, time }) {
  const counter = Tool.el('section', 'counter', `
    <div class="counter__container">

      <h1 class="counter__title">${title}</h1>

      <div class="counter__content">

        <div class="counter__item">
          <span class="counter__number js-days">00</span>
          <span class="counter__label">Dias</span>
        </div>

        <span class="counter__separator">:</span>

        <div class="counter__item">
          <span class="counter__number js-hours">00</span>
          <span class="counter__label">Horas</span>
        </div>

        <span class="counter__separator">:</span>

        <div class="counter__item">
          <span class="counter__number js-minutes">00</span>
          <span class="counter__label">Minutos</span>
        </div>

        <span class="counter__separator">:</span>

        <div class="counter__item">
          <span class="counter__number js-seconds">00</span>
          <span class="counter__label">Segundos</span>
        </div>

      </div>

    </div>
  `, style.container);

  const daysEl = counter.querySelector('.js-days');
  const hoursEl = counter.querySelector('.js-hours');
  const minutesEl = counter.querySelector('.js-minutes');
  const secondsEl = counter.querySelector('.js-seconds');
  const targetDate = new Date(time).getTime();

  function updateCounter() {
    const now = Date.now();
    const distance = targetDate - now;

    if (distance <= 0) {
      daysEl.textContent = '00';
      hoursEl.textContent = '00';
      minutesEl.textContent = '00';
      secondsEl.textContent = '00';

      clearInterval(interval);
      return;
    }

    const days = Math.floor(
      distance / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) /
      (1000 * 60 * 60)
    );

    const minutes = Math.floor(
      (distance % (1000 * 60 * 60)) /
      (1000 * 60)
    );

    const seconds = Math.floor(
      (distance % (1000 * 60)) / 1000
    );

    daysEl.textContent = String(days).padStart(2, '0');
    hoursEl.textContent = String(hours).padStart(2, '0');
    minutesEl.textContent = String(minutes).padStart(2, '0');
    secondsEl.textContent = String(seconds).padStart(2, '0');
  }

  updateCounter();

  const interval = setInterval(updateCounter, 1000);

  return counter;
}