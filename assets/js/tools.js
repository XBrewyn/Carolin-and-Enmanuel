class Tool {
  static el(tag, className, html = '', style) {
    const el = document.createElement(tag);
    const propertyName =
      (tag === 'style') ? 'textContent' : 'innerHTML';

    if (style) {
      el.style.cssText = this.style(style);
    }

    el.className = className;
    el[propertyName] = html;

    document.body.appendChild(el);
    return el;
  }

  static style(object = {}) {
    let result = '';

    Object.entries(object).forEach(([key, value]) => {
      const keyFormated = key.replace(/[A-Z]/g, (l) => `-${l.toLocaleLowerCase()}`);

      result += `${keyFormated}: ${value}; `;
    });

    return result;
  }
}
