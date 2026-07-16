function invitation() {
  return `
   <div class="invitation">
    <!-- TOP -->
    <h1 class="invitation__blessing">
      Con la bendición <br/> de Dios
      <br>
      y nuestros padres
    </h1>

    <!-- PARENTS -->
    <div class="invitation__parents">

      <div class="invitation__parents-group">
        <h2 class="invitation__parent-name">
          YENNI REYES DE KINGSLEY
        </h2>


        <h2 class="invitation__parent-name">
          CARLOS KINGSLEY POLANCO
        </h2>

        <p class="invitation__parent-role">
          Padres de la novia
        </p>
      </div>

      <div class="invitation__parents-group">
        <h2 class="invitation__parent-name">
         SELIA GONZÁLEZ DE NÚÑEZ
        </h2>

        <h2 class="invitation__parent-name">
         GUILLERMO NÚÑEZ FERMÍN
        </h2>

        <p class="invitation__parent-role">
          Padres del novio
        </p>
      </div>

    </div>

    <!-- IMAGE -->
    <div class="invitation__couple">
    <img 
      src="./assets/imgs/couple.png" 
      alt="Couple" 
      class="invitation__couple-img"
    >
    </div>

    <!-- MESSAGE -->
    <p class="invitation__message">
Celebraremos con alegría el momento en que Dios bendecirá nuestra unión en matrimonio.
<br/>
Cárolin y Enmanuel tienen el honor de invitarle a compartir con nosotros este día tan especial y a ser parte de la felicidad de nuestras vidas.
<br/>
¡Le esperamos!
    </p>

  </div>
  `;
}

function place({
  title = 'Nos Casamos!',
  dayName = 'VIERNES',
  month = 'NOV',
  day = '27',
  year = '2026',
  hour = '06:00 PM',

  image = './assets/imgs/church2.png',

  subtitle = 'CEREMONIA',

  place = 'Iglesia Cristiana Cielos Abiertos',

  address = `
    Iglesia Cristiana Cielos Abiertos, Q8R6+87Q,
    <br>
    C. Juan Laffi
    <br>
    Puerto Plata 57000
  `,

  map = '#',

  button = 'VER MAPA'
}) {

  return `
  
    <div class="place">

      <!-- TITLE -->
      <h1 class="place__title">
        ${title}
      </h1>

      <!-- DATE -->
      <div class="place__date">

        <!-- LEFT -->
        <div class="place__date-side">

          <span class="place__line"></span>

          <span class="place__date-text">
            ${dayName}
          </span>

          <span class="place__line"></span>

        </div>

        <!-- CENTER -->
        <div class="place__date-center">

          <span class="place__month">
            ${month}
          </span>

          <div class="place__date-middle">

            <span class="place__day">
              ${day}
            </span>

          </div>

          <span class="place__year">
            ${year}
          </span>

        </div>

        <!-- RIGHT -->
        <div class="place__date-side">

          <span class="place__line"></span>

          <span class="place__date-text">
            ${hour}
          </span>

          <span class="place__line"></span>

        </div>

      </div>

      <!-- IMAGE -->
      <img 
        src="${image}"
        alt="Place"
        class="place__image"
      >

      <!-- INFO -->
      <h2 class="place__subtitle">
        ${subtitle}
      </h2>

      <h3 class="place__place">
        ${place}
      </h3>

      <p class="place__address">
        ${address}
      </p>

      <!-- BUTTON -->
      <a 
        href="${map}" 
        target="_blank"
        class="place__button"
      >
        ${button}
      </a>

    </div>

  `;
}

function dresscode() {
  return `
<div class="dresscode">

  <!-- TITLE -->
  <h1 class="dresscode__title">
    Código <br/> de <br/>vestimenta
  </h1>

  <!-- OUTFITS -->
  <div class="dresscode__outfits">

    <img 
      src="./assets/imgs/couple2.png" 
      alt="Dress"
      class="dresscode__image"
    >
  </div>

  <!-- TYPE -->
  <h2 class="dresscode__type">
    FORMAL
  </h2>
</div>
  `;
}

function gallery() {
  return `
  <div class="gallery">

  <!-- TITLE -->
  <h1 class="gallery__title">
    Galeria
  </h1>

  <!-- SLIDER -->
  <div class="gallery__slider">

    <div class="gallery__track">

      <img 
        src="./assets/imgs/couple6.jpeg"
        class="gallery__image"
        alt="Gallery Image"
      >

      <img 
        src="./assets/imgs/couple7.jpeg"
        class="gallery__image"
        alt="Gallery Image"
      >

      <img 
        src="./assets/imgs/couple5.jpeg"
        class="gallery__image"
        alt="Gallery Image"
      >

    </div>

  </div>

</div>`;
}


function gratitude() {
  return `
  <div class="hero">

  <!-- NAMES -->
  <h1 class="hero__title">
    Cárolin <br/> & <br/> Enmanuel
  </h1>

  <!-- DATE -->
  <div class="hero__date">

    <!-- LEFT -->
    <div class="hero__date-side">

      <span class="hero__line"></span>

      <span class="hero__text">
        VIERNES
      </span>

      <span class="hero__line"></span>

    </div>

    <!-- CENTER -->
    <div class="hero__center">

      <span class="hero__month">
        NOV
      </span>

      <span class="hero__day">
        27
      </span>

      <span class="hero__year">
        2026
      </span>

    </div>

    <!-- RIGHT -->
    <div class="hero__date-side">

      <span class="hero__line"></span>

      <span class="hero__text">
        06:00 PM
      </span>

      <span class="hero__line"></span>

    </div>

  </div>

  <!-- MESSAGE -->
  <p class="hero__message">
    Esperamos con entusiasmo que
    seas parte de nuestro día especial
  </p>

</div>
  `
}

function gift() {
  return `
  <section class="gifts">

  <!-- TITLE -->
  <h1 class="gifts__title">
    Detalles <br/> para los novios
  </h1>

  <!-- MESSAGE -->
  <p class="gifts__message">
    Más que regalos, <br/>valoramos su compañía.
    Pero si desean bendecirnos con un detalle,
    agradeceremos que sea en efectivo o transferencia.
  </p>

  <!-- ITEM -->
  <div class="gifts__item">

    <img 
      src="./assets/imgs/banco.jpg"
      alt="popular"
      class="gifts__logo"
    >

    <p class="gifts__event">
      Cuenta: Ahorros / 802722892
      <br/>
      Beneficiario: Enmanuel Nuñez Gonzalez
      <br/> 
      Cédula: 402-2750915-1
    </p>
  </div>
</section> 
  `;
}

function confirmation() {
  return `
  
  <section class="confirmation">

  <!-- TITLE -->
  <h1 class="confirmation__title">
    Confirmación
    <br>
    de asistencia
  </h1>

  <!-- MESSAGE -->
  <p class="confirmation__message">
    Amamos a sus hijos pero creemos que
    necesitan una noche libre para ustedes, <br/>
    solo adultos por favor "No niños"
  </p>

    <!-- RESERVED -->
  <p class="confirmation__reserved">
    Con cariño, les agradeceremos confirmar su asistencia antes de octubre.
  </p>

  <!-- BUTTON -->
  <a 
  href="https://wa.me/18497110070?text=Hola%20quiero%20confirmar%20mi%20asistencia"
    target="_blank"
    class="confirmation__button"
  >
    CONFIRMAR AHORA
  </a>

</section>
  
  `
}