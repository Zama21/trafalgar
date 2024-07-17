export interface Article {
  img: string | string[];
  title: string;
  text: string;
}

export const articles: Article[] = [
  {
    img: '/assets/Article/ArticleImg1.svg',
    title: 'Головная боль',
    text: 'Врач-невролог из Москвы, Иванов Иван Иванович, отвечает на частые вопросы, касающиеся проблемы головной боли...',
  },
  {
    img: [
      '/assets/Article/01.png',
      '/assets/Article/02.png',
      '/assets/Article/03.png',
      '/assets/Article/04.png',
      '/assets/Article/05.png',
      '/assets/Article/06.png',
      '/assets/Article/07.png',
      '/assets/Article/08.png',
      '/assets/Article/09.png',
      '/assets/Article/10.png',
      '/assets/Article/11.png',
    ],
    title: 'Мигрень',
    text: 'Информация для пациентов. Мигрень. Симптомы, диагностика, лечение, профилактика',
  },
  {
    img: '/assets/Article/ArticleImg2.svg',
    title: 'Доказательная медицина',
    text: 'Читая статьи, и получая консультации на нашем сайте, вы часто будете встречаться...',
  },
  {
    img: '/assets/Article/ArticleImg3.svg',
    title: 'Антидепрессанты',
    text: 'Как показало исследование, антидепрессанты, особенно относящиеся к классе селектив...',
  },
];
