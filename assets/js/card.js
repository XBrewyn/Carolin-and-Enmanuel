function Card({ style = {}, id = '', content = '' } = {}) {
  const card = Tool.el('section', 'card fade-in-element', `
    <div class="card__container" ${id ? `id="${id}"` : ''}>
      <div class="card__shape" style="${Tool.style(style.shape)}">
        ${content}
      </div>

      <img src="./assets/imgs/plant.png" style="${Tool.style(style.plant)}" class="card__plant" />
      <img src="./assets/imgs/paint.png" class="card__img card__img-1" />
      <img src="./assets/imgs/confeti.png" class="card__img card_img-4">
    </div>

    <img src="./assets/imgs/paint.png" class="card__img card__img-2" />
    <img src="./assets/imgs/paint.png" class="card__img card__img-3" />
  `, style.container);

  return card;
}
