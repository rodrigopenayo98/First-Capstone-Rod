const hamburg = document.getElementById('hamburg');
const xSection = document.querySelector('.x-section');
const menuRes = document.querySelector('.menu-responsive');
const menuLinks = document.querySelectorAll('.items-menu-responsive');

function resMenu() {
  menuRes.style.display = 'block';
}

function hideResMenu() {
  menuRes.style.display = 'none';
}

xSection.addEventListener('click', hideResMenu);
hamburg.addEventListener('click', resMenu);

menuLinks.forEach((link) => {
  link.addEventListener('click', resMenu);
});

const speakers = [
  {
    name: 'Imagine Dragons',
    img: './images/imdrwbg.png',
    info1:
      'The tour, which celebrates the release of his massively anticipated double album, Mercury',
    info2:
      'Imagine Dragons announces the rescheduling of their dates fortheir "Mercury World Tour" in Latin America.',
  },
  {
    name: 'Ed Sheeran',
    img: './images/ed-sheeran.png',
    info1: 'New (-) Tour - Promotion of his latest studio album Substract',
    info2:
      'Buy Ed Sheeran concert tickets near you. Check out upcoming tour dates in 2023-24, supporting artists, reviews and venue information.',
  },
  {
    name: 'Quevedo',
    img: './images/3quevedo.png',
    info1:
      'First World Tour of the canarian singer - Promotion of his first studio album Donde Quiero Estar',
    info2:
      'Quevedo announced this Thursday the first three confirmed dates of what will be his first big tour DQE Tour',
  },
  {
    name: 'Martin Garrix',
    img: './images/4martin.png',
    info1:
      'The Dutch dj has just announced the first dates of the year for festivals.',
    info2:
      'The 22-year-old Dutch artist was chosen by the British magazine Dj Magazine as the best in the world in the years 2016, 2017 and 2018.',
  },
  {
    name: 'Kygo',
    img: './images/5kygo.png',
    info1:
      'The norwegian DJ arrives for the first time in Argentina on November 19.',
    info2:
      'KYGO announced through its social networks with great emotion that it will be presented for the FIRST TIME in South America',
  },
  {
    name: 'Bebe Rexha',
    img: './images/6bebe.png',
    info1: 'Bebe Rexha recharges her batteries to go out on stage again.',
    info2:
      'The Albanian artist confirms her tour called, "Best Fun Night of my Life Tour", through cities in her country.',
  },
];

let cards = '';
speakers.forEach((artist, index) => {
  if (index >= 2 && index <= 5) {
    cards += `
      <div class="speakers-cards flex aux-card">
        <img src="${artist.img}" alt="" />
        <div class="info-speakers">
          <h3>${artist.name}</h3>
          <h5>${artist.info1}</h5>
          <hr class="line3" />
          <p>${artist.info2}</p>
        </div>
      </div>`;
  } else {
    cards += `
      <div class="speakers-cards flex">
        <img src="${artist.img}" alt="" />
        <div class="info-speakers">
          <h3>${artist.name}</h3>
          <h5>${artist.info1}</h5>
          <hr class="line3" />
          <p>${artist.info2}</p>
        </div>
      </div>`;
  }
});

document.querySelector('#speaker-container').innerHTML = cards;

