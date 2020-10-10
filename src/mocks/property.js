const AVATAR_URL = `https://api.adorable.io/avatars/128`;
const CITYES = [`Amsterdam`, `Paris`, `Cologne`, `Brussels`, `Hamburg`, `Dusseldorf`];
const APARTMENT_TYPES = [`Apartment`, `Studio`, `Room`];
const ADDITIONS = [`Wi-Fi`, `Heatting`, `Kitchen`, `Fridge`, `Washing machine`, `Coffe machine`, `Dishwasher`, `Towels`, `Baby seat`, `Cabel TV`];

const getPhotos = () => {
  const photo = [];
  for (let i = 0; i < 6; i++) {
    photo.push({
      src: `http://picsum.photos/248/152?r=${Math.random()}`,
      alt: `img${i}`
    });
  }
  return photo;
};

const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const shuffleArray = (arr) => {
  let j;
  let temp;
  for (let i = arr.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
  }
  return arr;
};

const getRandomElementOfArray = (arr) => {
  const randomIndex = getRandomInteger(0, arr.length - 1);
  return arr[randomIndex];
};

const owners = [
  {
    id: 1,
    name: `Pushkin`,
    avatar: `${AVATAR_URL}/${Math.random()}`,
    isProffy: getRandomInteger() ? true : false
  },
  {
    id: 2,
    name: `Lermontov`,
    avatar: `${AVATAR_URL}/${Math.random()}`,
    isProffy: getRandomInteger() ? true : false
  },
  {
    id: 3,
    name: `Esenin`,
    avatar: `${AVATAR_URL}/${Math.random()}`,
    isProffy: getRandomInteger() ? true : false
  },

];

const getOffers = () => {
  const temp = [];
  for (let id = 0; id <= 10; id++) {
    const city = getRandomElementOfArray(CITYES);
    temp.push({
      id,
      city,
      type: getRandomElementOfArray(APARTMENT_TYPES),
      price: getRandomInteger(120, 350),
      isPremium: getRandomInteger() ? true : false,
      isFavorite: getRandomInteger() ? true : false,
      rating: getRandomInteger(0, 10),
      title: `Beutiful & luxurious apartment in ${city}`,
      photos: getPhotos(),
      badrooms: getRandomInteger(1, 4),
      adults: getRandomInteger(1, 6),
      additions: shuffleArray(ADDITIONS).slice(0, getRandomInteger(1, ADDITIONS.length)),
      owner: getRandomElementOfArray(owners),
      description: `${city} A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`
    });
  }
  return temp;
};

export default getOffers();
