function Nav(menu = []) {
  const nav = Tool.el('nav', 'navbar', `
    <!-- LOGO -->
    <a
      href="#home"
      class="navbar__logo"
    >
      <img 
        src="./assets/imgs/logo2.png" 
        alt="Logo" 
        class="navbar__logo-img"
      />

    </a>

    <!-- HAMBURGER -->
    <button class="navbar__toggle">
      <span class="navbar__toggle-line"></span>
      <span class="navbar__toggle-line"></span>
      <span class="navbar__toggle-line"></span>
    </button>

    <!-- MENU -->
    <div class="navbar__menu">
      ${menu.map(item => `
        <a 
          href="${item.href}" 
          class="navbar__menu-item"
        >
          ${item.label}
        </a>
      `).join('')}
    </div>
  `);

  const toggle = nav.querySelector('.navbar__toggle');
  const menuEl = nav.querySelector('.navbar__menu');
  const menuItems = nav.querySelectorAll('.navbar__menu-item');

  function onMenu() {
    menuEl.classList.toggle('navbar__menu--show');
    toggle.classList.toggle('navbar__toggle--active');
  }

  /* TOGGLE MENU */
  toggle.addEventListener('click', onMenu);

  /* CLOSE MENU WHEN CLICK ITEM */
  menuItems.forEach(item => item.addEventListener('click', onMenu));

  return nav;
}
