export interface Cards {
  logoSrc: string;
  logoAlt: string;
  title: string;
  text: string;
  userImgSrc: string;
  userName: string;
  userRole: string;
}

export const cards = [
  {
    logoSrc: '/public/assets/cardlogo.svg',
    logoAlt: 'cardLogo',
    title: 'Zoomerr',
    text: 'Исследование гласит, что наличие хороших навыков чтения в детском возрасте является предиктором высокого уровня интеллекта у молодых взрослых людей.',
    userImgSrc: '/public/assets/userLogo.svg',
    userName: 'Петров Петр',
    userRole: 'Невролог',
  },
  {
    logoSrc: '/public/assets/artVenue.svg',
    logoAlt: 'cardLogo',
    title: 'ArtVenue',
    text: 'Астма - это хроническое заболевание легких. Симптомы заболевания включают кашель, свистящее дыхание, одышку и чувство стеснения в груди.',
    userImgSrc: '/public/assets/userLogo.svg',
    userName: 'Кириллов Кирилл',
    userRole: 'Пульмонолог',
  },
];
