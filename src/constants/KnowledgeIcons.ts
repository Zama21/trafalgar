export interface KnowledgeItemProps {
  id?: number;
  link: string;
  number: string;
  text: string;
}

export const KnowledgeIcons: KnowledgeItemProps[] = [
  {
    id: 1,
    link: '/assets/icon-smile.svg',
    number: '250+',
    text: 'Научных статей',
  },
  {
    id: 2,
    link: '/assets/icon-titles.svg',
    number: '600+',
    text: 'Просмотров за статью',
  },
  {
    id: 3,
    link: '/assets/icon-pizza.svg',
    number: '1.8K',
    text: 'Посетителей за день',
  },
  {
    id: 4,
    link: '/assets/icon-people.svg',
    number: '11K',
    text: 'Посетителей в неделю',
  },
];
