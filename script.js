const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const response = document.getElementById('response');
const imageContainer = document.getElementById('imageContainer');
const container = document.querySelector('.container');
const darkModeToggle = document.getElementById('darkModeToggle');

let isFirstClick = true;

/* ===============================
   💖 CORAZONES FLOTANDO CONSTANTES
================================== */

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "💖";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (Math.random() * 3 + 3) + "s";
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6000);
}

setInterval(createHeart, 500);


/* ===============================
   😍 BOTÓN SÍ
================================== */

yesButton.addEventListener('click', () => {

  container.innerHTML = '';

  const gridContainer = document.createElement('div');
  gridContainer.classList.add('image-grid');

  const images = [
    'img/foto7.jpg',
    'img/foto3.jpg',
    'img/foto1.jpg',
    'img/foto4.jpg',
    'img/foto5.jpg',
    'img/foto6.jpg',
  ];

  images.forEach((src) => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = 'Cute Snoopy Image';
    gridContainer.appendChild(img);
  });

  container.appendChild(gridContainer);

  const message = document.createElement('p');
  message.id = 'response';
  message.textContent = "💖 Magaly me haces la persona más feliz del mundo 😍✨ TE AMO INFINITAMENTE 💘🔥";
  container.appendChild(message);

  explosionEffect(); // 🎆 Explosión romántica
});


/* ===============================
   😈 BOTÓN NO QUE SE ESCAPA
================================== */

function moveNoButton() {
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;
  const buttonWidth = noButton.offsetWidth;
  const buttonHeight = noButton.offsetHeight;

  const maxX = screenWidth - buttonWidth;
  const maxY = screenHeight - buttonHeight;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  noButton.style.position = 'fixed';
  noButton.style.left = `${randomX}px`;
  noButton.style.top = `${randomY}px`;
}

noButton.addEventListener('mouseover', () => {
  imageContainer.innerHTML = '<img src="https://i.pinimg.com/564x/dd/7f/6c/dd7f6ca2bce302e27f51b579ef732aeb.jpg" alt="Laughing Snoopy">';
  response.textContent = "Jaja 😜 no puedes tocar el botón Magaly 💕";
  moveNoButton();
});

noButton.addEventListener('click', () => {
  if (isFirstClick) {
    noButton.style.transition = 'transform 0.5s ease';
    noButton.style.transform = 'scale(1.2)';
    setTimeout(() => {
      noButton.style.transform = 'scale(1)';
      isFirstClick = false;
    }, 500);
  }
  moveNoButton();
});


/* ===============================
   🎆 EXPLOSIÓN DE CORAZONES
================================== */

function explosionEffect() {
  for (let i = 0; i < 30; i++) {
    const heart = document.createElement("div");
    heart.classList.add("explosion-heart");
    heart.innerHTML = "💘";

    heart.style.position = "fixed";
    heart.style.left = "50%";
    heart.style.top = "50%";

    const x = (Math.random() - 0.5) * 500 + "px";
    const y = (Math.random() - 0.5) * 500 + "px";

    heart.style.setProperty("--x", x);
    heart.style.setProperty("--y", y);

    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 1000);
  }
}


/* ===============================
   🌙 DARK MODE
================================== */

darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  if (document.body.classList.contains('dark-mode')) {
    darkModeToggle.textContent = 'Modo Claro ☀️';
  } else {
    darkModeToggle.textContent = 'Modo Oscuro 🌙';
  }
});
