interface Artikle {
    img: string,
    title: string,
    text: string,
}

export const articles: Artikle[] = [
    {
        img: '/public/assets/ArticleImg1.svg',
        title: 'Головная боль',
        text: 'Врач-невролог из Москвы, Иванов Иван Иванович, отвечает на частые вопросы, касающиеся проблемы головной боли...',
    },
    {
        img: '/public/assets/ArticleImg3.jpg',
        title: 'Мигрень',
        text: 'Информация для пациентов. Мигрень. Симптомы, диагностика, лечение, профилактика',
    },
    {
        img: '/public/assets/ArticleImg3.jpg',
        title: 'Доказательная медицина',
        text: 'Читая статьи, и получая консультации на нашем сайте, вы часто будете встречаться...',
    },
    {
        img: '/public/assets/ArticleImg4.jpg',
        title: 'Антидепрессанты',
        text: 'Как показало исследование, антидепрессанты, особенно относящиеся к классе селектив...',
    }
];
