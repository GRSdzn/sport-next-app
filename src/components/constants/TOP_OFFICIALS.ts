interface Official {
  id: string;
  name: string;
  image: string;
  positions: string[];
}

export const TOP_OFFICIALS: Official[] = [
  {
    id: 'zatolochniy-denis',
    name: 'Затолочный Денис Владимирович',
    image: '/images/top-officials/image-1.png',
    positions: [
      'Президент федерации кхмерского бокса',
      'Советник главы управы района Марфино',
      'Начальник департамента по развитию банка "Неклис"',
      'Мастер спорта по МуайТай',
      'Мастер спорта по кикбоксингу',
    ],
  },
  {
    id: 'serebrennikov-emil',
    name: 'Серебренников Эмиль Руфатович',
    image: '/images/top-officials/image-2.png',
    positions: [
      'Вице-президент федерации кхмерского бокса',
      'Спортивный менеджер "Ultimasport.agency"',
      'Управляющий партнер сети клубов единоборств "NaMode Gym"',
    ],
  },
  {
    id: 'chinarev-pavel',
    name: 'Чинарев Павел Алексеевич',
    image: '/images/top-officials/image-3.png',
    positions: [
      'Российский актер театра и кино',
      'Директор департамента по развитию федерации кхмерского бокса',
      'Популярный артист электронной музыка',
    ],
  },
  {
    id: 'pitko-roman',
    name: 'Питько Роман Игоревич',
    image: '/images/top-officials/image-4.png',
    positions: [
      'Депутат ВМО Строгино',
      'Президент федерации тхэквондо МФО г. Москва',
      'Трехкратный чемпион кубка мира по кикбоксингу',
      'Шестикратный чемпион России по тхэквондо',
    ],
  },
];
