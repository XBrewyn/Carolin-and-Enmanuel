function Envelope(style = {}) {
  //     <source src="./assets/music/contigo.mp3" type="audio/mp3">

  const envelope = Tool.el('section', 'envelope', `
    
    <!-- AUDIO -->
    <audio id="music" loop>
    </audio>

    <!-- RIGHT -->
    <div class="envelope__shadow envelope__shadow--right" id="rightShadow">
      <div class="envelope__panel envelope__panel--right"></div>
    </div>

    <!-- LEFT -->
    <div class="envelope__shadow envelope__shadow--left" id="leftShadow">
      <div class="envelope__panel envelope__panel--left"></div>
    </div>

    <!-- BOTTOM -->
    <div class="envelope__shadow envelope__shadow--bottom" id="bottomShadow">
      <div class="envelope__panel envelope__panel--bottom"></div>
    </div>

    <!-- TOP -->
    <div class="envelope__shadow envelope__shadow--top" id="topShadow">
      <div class="envelope__panel envelope__panel--top"></div>
    </div>

    <!-- SEAL -->
    <div class="envelope__seal" id="seal">
      <img 
        src="./assets/imgs/knob2.png" 
        class="envelope__knob"
      >
    </div>

  `, style);

  /* =========================
     ELEMENTS
  ========================== */

  const seal = envelope.querySelector('#seal');

  const music = envelope.querySelector('#music');

  const rightShadow = envelope.querySelector('#rightShadow');
  const leftShadow = envelope.querySelector('#leftShadow');
  const topShadow = envelope.querySelector('#topShadow');
  const bottomShadow = envelope.querySelector('#bottomShadow');

  /* =========================
     OPEN ENVELOPE
  ========================== */

  seal.addEventListener('click', () => {

    /* PLAY MUSIC */
    music.play();

    /* ANIMATION */
    seal.classList.add('envelope__seal--fade-out');

    setTimeout(() => {
      rightShadow.classList.add(
        'envelope__shadow--right-collapse'
      );
    }, 300);

  });

  /* =========================
     SECOND ANIMATION
  ========================== */

  rightShadow.addEventListener('transitionend', (e) => {

    if (e.propertyName !== 'width') return;

    leftShadow.classList.add(
      'envelope__shadow--move-left'
    );

    topShadow.classList.add(
      'envelope__shadow--move-left'
    );

    bottomShadow.classList.add(
      'envelope__shadow--move-left'
    );

  });

  return envelope;
}