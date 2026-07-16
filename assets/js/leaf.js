function Leaf(len = 12) {

  const random = (min, max) =>
    Math.random() * (max - min) + min;

  // detect mobile
  const isMobile = window.innerWidth <= 768;

  const getStyle = () => {

    // smaller leaves on mobile
    const size = isMobile
      ? random(20, 45)
      : random(40, 90);

    const duration = random(10, 25);
    const delay = random(0, 8);
    const drift = random(-200, 200);
    const rotate = random(180, 720);
    const opacity = random(0.4, 1);

    return `
      left:${random(0, 100)}%;
      top:-15%;
      width:${size}px;

      --drift:${drift}px;
      --rotate:${rotate}deg;

      opacity:${opacity};

      animation-duration:${duration}s;
      animation-delay:-${delay}s;
    `;
  };

  const component = Tool.el('div', 'leafs', `
    ${[...Array(len)].map(() => `
      <div class="leaf" style="${getStyle()}">
        <img src="./assets/imgs/leaf.png" alt="leaf">
      </div>
    `).join('')}
  `);

  return component;
}