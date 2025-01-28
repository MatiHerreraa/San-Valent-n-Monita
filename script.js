document.addEventListener('DOMContentLoaded', function () {
  const yesButton = document.getElementById('yesButton');
  const noButton = document.getElementById('noButton');
  const message = document.getElementById('message');
  const imageContainer = document.getElementById('imageContainer');
  const portadaImage = document.getElementById('portadaImage');

  let noClickCount = 0;
  const noTexts = [
    '¿segura?',
    '¡dale negrita!',
    '¿Por qué noo?',
    '¡Yo sé que vos quieres!',
    '😭 ¿Por qué no?',
    'te pierdes el regalo👀',
    'mira que está casi listo',
    '¿segura que no quieres?',
    'bueno listo 🥱',
    '😔',
    'así sos!',
    'mairita',
    'pone',
    'que',
    '¡sí!',
    'vos te perdes los broches🙂‍↔️',
    'a no te importa?',
    'ok',
    'bueno ya está',
    'que me quedo sin ideas🙄',
    'segura que no queres?',
    'segurisima?',
    'seguririsima?',
    'ni por chocolate?👀',
    'listo entonces',
    'una vez mas',
    'y te quedas sin regalo',
    '👍🏻',
  ];

  const backgrounds = [
    'imagenes/fondo1.gif',
    'imagenes/fondo2.gif',
    'imagenes/fondo3.gif',
    'imagenes/fondo4.gif',
  ];

  const noImages = [
    'imagenes/no1.gif',
    'imagenes/no2.gif',
    'imagenes/no3.gif',
    'imagenes/no4.gif',
    'imagenes/no5.gif',
    'imagenes/no6.gif',
    'imagenes/no7.gif',
    'imagenes/no8.gif',
  ];

  const yesImage = 'imagenes/yesImage.gif';

  let backgroundIndex = 0;

  // Cambiar texto del botón "No" al hacer clic
  noButton.addEventListener('click', function () {
    noClickCount++;
    const textIndex = noClickCount % noTexts.length;
    noButton.textContent = noTexts[textIndex];

    // Cambiar el fondo cada vez que se presiona "No"
    backgroundIndex = (backgroundIndex + 1) % backgrounds.length;
    document.body.style.backgroundImage = `url('${backgrounds[backgroundIndex]}')`;

    // Mostrar Gif aleatoria para "No"
    const imageIndex = noClickCount % noImages.length;
    imageContainer.innerHTML = `<img src="${noImages[imageIndex]}" alt="Gif de No">`;

    // Hacer crecer el botón "Sí"
    const currentSize = parseInt(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize + 14}px`;
    yesButton.style.padding = `${currentSize + 16}px`;
  });

  // Mostrar mensaje y cambiar Gif al hacer clic en "Sí"
  yesButton.addEventListener('click', function () {
    message.textContent = 'Yo sabía, como te vas a resistir a este bombón, ¡TE AMO!😁❤️';
    yesButton.style.display = 'none';
    noButton.style.display = 'none';

    // Mostrar Gif para el "Sí"
    imageContainer.innerHTML = `<img src="${yesImage}" alt="Gif de Sí">`;
  });
});