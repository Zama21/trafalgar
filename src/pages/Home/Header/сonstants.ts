import Knowledge from '../../../components/Knowledge/Knowledge';
import QuestionBlock from '../../../components/QuestionBlock/QuestionBlock';
import AboutProject from '../AboutProject';
import Main from '../Main';
import RequestSection from '../RequestSection/RequestSection';
import ReviewPage from '../ReviewPage';
import SectionPrice from '../SectionPrice';
import SectionsSponsors from '../SectionSponsors';

export const MEDICAL_SPECIALTY_OPTIONS = [
  { label: 'Тонометры', value: 'tonometry' },
  { label: 'Дерматология', value: 'dermatology' },
  { label: 'Инфекционные болезни', value: 'infectious_diseases' },
  { label: 'Кардиология', value: 'cardiology' },
  { label: 'Неврология', value: 'neurology' },
  { label: 'Общая медицина', value: 'general_medicine' },
  { label: 'Терапия', value: 'therapy' },
  { label: 'Хирургия', value: 'surgery' },
];

export const SECTION_IDS = {
  top: 'top',
  about: 'about',
  articles: 'articles',
  reviews: 'reviews',
  knowledge: 'knowledge',
  questions: 'questions',
  pricing: 'pricing',
  apply: 'apply',
  sponsors: 'sponsors',
} as const;

export const MENU_ITEMS = [
  { label: 'Главная', path: `/trafalgar/#${SECTION_IDS.top}`, id: SECTION_IDS.top, section: Main },
  { label: 'О проекте', path: `/trafalgar/#${SECTION_IDS.about}`, id: SECTION_IDS.about, section: AboutProject },
  { label: 'Отзывы', path: `/trafalgar/#${SECTION_IDS.reviews}`, id: SECTION_IDS.reviews, section: ReviewPage },
  { label: 'Знания', path: `/trafalgar/#${SECTION_IDS.knowledge}`, id: SECTION_IDS.knowledge, section: Knowledge },
  { label: 'Вопросы', path: `/trafalgar/#${SECTION_IDS.questions}`, id: SECTION_IDS.questions, section: QuestionBlock },
  { label: 'Цены', path: `/trafalgar/#${SECTION_IDS.pricing}`, id: SECTION_IDS.pricing, section: SectionPrice },
  {
    label: 'Оставить заявку',
    path: `/trafalgar/#${SECTION_IDS.apply}`,
    id: SECTION_IDS.apply,
    section: RequestSection,
  },
  {
    label: 'Спонсоры',
    path: `/trafalgar/#${SECTION_IDS.sponsors}`,
    id: SECTION_IDS.sponsors,
    section: SectionsSponsors,
  },
];

export const HEADER_HEIGHT = {
  mobileHeight: 80,
  desktopHeight: 129,
};

//   { label: 'Статьи', path: `/trafalgar/#${SECTION_IDS.articles}`, id: SECTION_IDS.articles, section: ArticlesPage },

export const HEADER_ID = 'headerMain';
