window.addEventListener('load', () => {

  Nav([
    {
      label: 'Inicio',
      href: '#home'
    },
    {
      label: 'Invitación',
      href: '#invitation'
    },
    {
      label: 'Ceremonia',
      href: '#ceremony'
    },
    {
      label: 'Recepción',
      href: '#reception'
    },
    {
      label: 'Vestimenta',
      href: '#dresscode'
    },
    {
      label: 'Galería',
      href: '#gallery'
    },
    {
      label: 'Regalo',
      href: '#gift'
    },
    {
      label: 'Confirmación',
      href: '#confirmation'
    },
    {
      label: 'Agradecimiento',
      href: '#gratitude'
    },
    {
      label: 'final',
      href: '#ending'
    }
  ]);

  Envelope();

  Card({
    id: 'home',
    style: {
      shape: {
        backgroundImage: 'url(./assets/imgs/couple3.jpeg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
      }
    },
  });

  Counter({
    title: 'Cárolin & Enmanuel',
    time: '11/27/2026'
  });

  Card({
    id: 'invitation',
    content: invitation()
  });

  Card({
    id: 'ceremony',
    content: place({
      title: 'Ceremonia',
      dayName: 'VIERNES',
      month: 'NOV',
      day: '27',
      year: '2026',
      hour: '06:00 PM',
      image: './assets/imgs/chruch2.png',
      subtitle: '',
      place: 'Iglesia Cristiana Cielos Abiertos',
      address: `
        Iglesia Cristiana Cielos Abiertos, Q8R6+87Q,
        <br>
        C. Juan Laffi
        <br>
        Puerto Plata 57000
      `,
      map: 'https://www.google.com/maps/dir/Iglesia+Cristiana+Cielos+Abiertos,+Q8R6%2B87Q,+C.+Juan+Laffi,+Puerto+Plata+57000/19.7887936,-70.6748047/@19.7907775,-70.687192,16z/data=!3m1!4b1!4m10!4m9!1m5!1m1!1s0x8eb1ef36240c847f:0xf4701e91b257e1a3!2m2!1d-70.6892632!2d19.7908403!1m1!4e1!3e0?entry=ttu&g_ep=EgoyMDI2MDUxMy4wIKXMDSoASAFQAw%3D%3D',
      button: 'VER MAPA'
    })
  });

  Card({
    id: 'reception',
    content: place({
      title: 'Recepción',
      dayName: 'VIERNES',
      month: 'NOV',
      day: '27',
      year: '2026',
      hour: '07:00 PM',
      image: './assets/imgs/hotel.jpg',
      subtitle: '',
      place: 'Hotel Grand Marien',
      address: `
       Salón de eventos, 
        <br>
          Complejo turístico,
          Carretera Luperón
        <br>
        Puerto Plata 57000
      `,
      map: 'https://www.google.com/maps/dir/Marien+Puerto+Plata,+Complejo+tur%C3%ADstico,+Carretera+Luper%C3%B3n,+Puerto+Plata+57000/19.7887936,-70.6748047/@19.7814856,-70.6706253,15.78z/data=!4m10!4m9!1m5!1m1!1s0x8eb1efaf46e78457:0xe98dbcb9e83e59c1!2m2!1d-70.6594927!2d19.7770885!1m1!4e1!3e0?entry=ttu&g_ep=EgoyMDI2MDUxMy4wIKXMDSoASAFQAw%3D%3D',
      button: 'VER MAPA'
    })
  });

  Card({
    id: 'dresscode',
    content: dresscode()
  });

  Card({
    id: 'gallery',
    content: gallery()
  });

  Card({
    id: 'gift',
    content: gift()
  });

  Card({
    id: 'confirmation',
    content: confirmation()
  });

  Card({
    id: 'gratitude',
    content: gratitude()
  });

  Card({
    id: 'ending',
    style: {
      plant: { top: '-0%',  left: '-10%' },
      shape: {
        backgroundImage: 'url(./assets/imgs/couple10.jpeg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
      }
    },
  });

  Leaf();
  scrollAnimation();
});
