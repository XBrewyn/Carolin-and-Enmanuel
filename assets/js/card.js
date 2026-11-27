function Card({ style = {}, id = '', content = '' } = {}) {
  const card = Tool.el('section', 'card fade-in-element', `
    <div class="card__container" ${id ? `id="${id}"` : ''}>
      <div class="card__shape" style="${Tool.style(style.shape)}">
        ${content}
      </div>

      <img loading="lazy" decoding="async" src="./assets/imgs/plant.webp" style="${Tool.style(style.plant)}" class="card__plant" />
      <img loading="lazy" decoding="async" src="./assets/imgs/paint.webp" class="card__img card__img-1" />
      <img loading="lazy" decoding="async" src="./assets/imgs/confeti.webp" class="card__img card_img-4">
    </div>

    <img loading="lazy" decoding="async" src="./assets/imgs/paint.webp" class="card__img card__img-2" />
    <img loading="lazy" decoding="async" src="./assets/imgs/paint.webp" class="card__img card__img-3" />
  `, style.container);

  return card;
}
