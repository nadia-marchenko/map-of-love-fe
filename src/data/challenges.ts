import { Challenge } from '../types';

export const challenges: Challenge[] = [
  // Adventure Challenges - Driving Focused
  {
    id: 'challenge-1',
    title: 'Дюны и Море',
    description: 'Проедьте 85 км до парка с движущимися дюнами и почувствуйте себя как в пустыне у моря.',
    category: 'adventure',
    location: 'Słowiński Park Narodowy',
    distanceFromGdansk: 85,
    time: 'Full day',
    tips: 'Full day needed - лучше открыть карточку в выходной день',
    image: 'https://picsum.photos/seed/challenge-1/800/600'
  },
  {
    id: 'challenge-2',
    title: 'Замок Тевтонского Ордена',
    description: 'Доберитесь до крупнейшего кирпичного замка в мире по живописным дорогам вдоль Вислы.',
    category: 'adventure',
    location: 'Zamek w Malborku',
    distanceFromGdansk: 60,
    time: '4-5 hours',
    tips: 'Working day - можно открыть карточку после работы, если выехать рано',
    image: 'https://picsum.photos/seed/challenge-2/800/600'
  },
  {
    id: 'challenge-3',
    title: 'Край Тысячи Озер',
    description: 'Прокатитесь через Кашубскую Швейцарию к самому глубокому озеру Польши.',
    category: 'adventure',
    location: 'Jezioro Wdzydze, Koszyce',
    distanceFromGdansk: 70,
    time: 'Full day',
    tips: 'Full day needed - лучше открыть карточку в выходной день',
    image: 'https://picsum.photos/seed/challenge-3/800/600'
  },
  {
    id: 'challenge-4',
    title: 'Самая Северная Точка',
    description: 'Доедьте до мыса Rozewie — самой северной точки Польши с живописным маяком.',
    category: 'adventure',
    location: 'Rozewie, Władysławowo',
    distanceFromGdansk: 75,
    time: '4-5 hours',
    tips: 'Working day - можно открыть карточку после работы',
    image: 'https://picsum.photos/seed/challenge-4/800/600'
  },
  {
    id: 'challenge-5',
    title: 'Город Коперника',
    description: 'Длинная поездка в средневековый Торунь — родину великого астронома.',
    category: 'adventure',
    location: 'Toruń',
    distanceFromGdansk: 165,
    time: 'Full day',
    tips: 'Full day needed - лучше открыть карточку в выходной день',
    image: 'https://picsum.photos/seed/challenge-5/800/600'
  },
  {
    id: 'challenge-6',
    title: 'Хельская Коса',
    description: 'Проедьте по узкой косе между морем и заливом до самого конца полуострова.',
    category: 'adventure',
    location: 'Hel',
    distanceFromGdansk: 70,
    time: 'Full day',
    tips: 'Full day needed - лучше открыть карточку в выходной день',
    image: 'https://picsum.photos/seed/challenge-6/800/600'
  },
  {
    id: 'challenge-7',
    title: 'Столица Кашубии',
    description: 'Откройте сердце кашубской культуры в городе Картузы с его монастырем.',
    category: 'adventure',
    location: 'Kartuzy',
    distanceFromGdansk: 35,
    time: '3-4 hours',
    tips: 'Working day - можно открыть карточку после работы',
    image: 'https://picsum.photos/seed/challenge-7/800/600'
  },
  {
    id: 'challenge-8',
    title: 'Город-Курорт у Моря',
    description: 'Доберитесь до элегантного Сопота альтернативным маршрутом через лесные дороги.',
    category: 'adventure',
    location: 'Sopot (через лесные дороги)',
    distanceFromGdansk: 15,
    time: '2-3 hours',
    tips: 'Working day - можно открыть карточку после работы',
    image: 'https://picsum.photos/seed/challenge-8/800/600'
  },
  {
    id: 'challenge-9',
    title: 'Вдоль Балтийского Берега',
    description: 'Прокатитесь вдоль побережья до рыбацкого Łeby через прибрежные деревни.',
    category: 'adventure',
    location: 'Łeba',
    distanceFromGdansk: 95,
    time: 'Full day',
    tips: 'Full day needed - лучше открыть карточку в выходной день',
    image: 'https://picsum.photos/seed/challenge-9/800/600'
  },
  {
    id: 'challenge-10',
    title: 'Королевский Замок',
    description: 'Посетите замок в Гневе — бывшую резиденцию польских королей.',
    category: 'adventure',
    location: 'Gniew',
    distanceFromGdansk: 75,
    time: '4-5 hours',
    tips: 'Working day - можно открыть карточку после работы, если выехать рано',
    image: 'https://picsum.photos/seed/challenge-10/800/600'
  },
  
  // Navigation Challenges
  {
    id: 'challenge-11',
    title: 'Без GPS до Пуцка',
    description: 'Доберитесь до Puck только по дорожным знакам, без навигатора.',
    category: 'navigation',
    location: 'Puck',
    distanceFromGdansk: 40,
    time: '2-3 hours',
    tips: 'Working day - можно открыть карточку после работы',
    image: 'https://picsum.photos/seed/challenge-11/800/600'
  },
  {
    id: 'challenge-12',
    title: 'Монетка Решает',
    description: 'На каждом перекрестке бросайте монетку: орел — направо, решка — налево. Цель: Wejherowo.',
    category: 'navigation',
    location: 'Wejherowo',
    distanceFromGdansk: 25,
    time: '2-4 hours',
    tips: 'Working day - можно открыть карточку после работы (время зависит от удачи!)',
    image: 'https://picsum.photos/seed/challenge-12/800/600'
  },
  {
    id: 'challenge-13',
    title: 'Только Правые Повороты',
    description: 'Доберитесь до Pruszcz Gdański, сворачивая только направо на перекрестках.',
    category: 'navigation',
    location: 'Pruszcz Gdański',
    distanceFromGdansk: 18,
    time: '1-2 hours',
    tips: 'Working day - можно открыть карточку после работы',
    image: 'https://picsum.photos/seed/challenge-13/800/600'
  },
  {
    id: 'challenge-14',
    title: 'Самый Длинный Путь Домой',
    description: 'Доедьте до Tczew, а обратно возвращайтесь максимально длинным маршрутом.',
    category: 'navigation',
    location: 'Tczew',
    distanceFromGdansk: 35,
    time: '3-4 hours',
    tips: 'Working day - можно открыть карточку после работы',
    image: 'https://picsum.photos/seed/challenge-14/800/600'
  },
  {
    id: 'challenge-15',
    title: 'Поиск Деревни с Необычным Названием',
    description: 'Найдите и доберитесь до деревни Chmielno в Кашубии.',
    category: 'navigation',
    location: 'Chmielno',
    distanceFromGdansk: 40,
    time: '2-3 hours',
    tips: 'Working day - можно открыть карточку после работы',
    image: 'https://picsum.photos/seed/challenge-15/800/600'
  },
  
  // Nature Challenges
  {
    id: 'challenge-16',
    title: 'Три Озера за День',
    description: 'Посетите озера Raduńskie, Ostrzyckie и Wdzydze за одну поездку.',
    category: 'nature',
    location: 'Jezioro Raduńskie, Ostrzyckie, Wdzydze',
    distanceFromGdansk: 60,
    time: 'Full day',
    tips: 'Full day needed - лучше открыть карточку в выходной день',
    image: 'https://picsum.photos/seed/challenge-16/800/600'
  },
  {
    id: 'challenge-17',
    title: 'Кашубский Лес',
    description: 'Проедьте через живописный лес к деревне Szymbark с перевернутым домом.',
    category: 'nature',
    location: 'Szymbark',
    distanceFromGdansk: 45,
    time: '3-4 hours',
    tips: 'Working day - можно открыть карточку после работы',
    image: 'https://picsum.photos/seed/challenge-17/800/600'
  },
  {
    id: 'challenge-18',
    title: 'Вдоль Реки Радуни',
    description: 'Следуйте вдоль реки Radunia до водопадов в Straszyn.',
    category: 'nature',
    location: 'Straszyn',
    distanceFromGdansk: 20,
    time: '2-3 hours',
    tips: 'Working day - можно открыть карточку после работы',
    image: 'https://picsum.photos/seed/challenge-18/800/600'
  },
  {
    id: 'challenge-19',
    title: 'Смотровая Башня',
    description: 'Доберитесь до смотровой башни Wieżyca — самой высокой точки Поморья (329 м).',
    category: 'nature',
    location: 'Wieżyca',
    distanceFromGdansk: 50,
    time: '3-4 hours',
    tips: 'Working day - можно открыть карточку после работы',
    image: 'https://picsum.photos/seed/challenge-19/800/600'
  },
  {
    id: 'challenge-20',
    title: 'Птичий Заповедник',
    description: 'Посетите орнитологический заповедник в дельте Вислы.',
    category: 'nature',
    location: 'Rezerwat Przyrody Ujście Wisły, Mikoszewo',
    distanceFromGdansk: 55,
    time: '3-4 hours',
    tips: 'Working day - можно открыть карточку после работы',
    image: 'https://picsum.photos/seed/challenge-20/800/600'
  },
  
  // Cultural Challenges
  {
    id: 'challenge-21',
    title: 'Пять Церквей',
    description: 'Посетите исторические церкви в Pelplin, Oliwa, Puck, Wejherowo, Kartuzy.',
    category: 'cultural',
    location: 'Pelplin, Oliwa, Puck, Wejherowo, Kartuzy',
    distanceFromGdansk: 100,
    time: 'Full day',
    tips: 'Full day needed - лучше открыть карточку в выходной день',
    image: 'https://picsum.photos/seed/challenge-21/800/600'
  },
  {
    id: 'challenge-22',
    title: 'Музейный Марафон',
    description: 'Посетите музей янтаря в Гданьске и этнографический музей в Wdzydze Kiszewskie.',
    category: 'cultural',
    location: 'Wdzydze Kiszewskie',
    distanceFromGdansk: 70,
    time: 'Full day',
    tips: 'Full day needed - лучше открыть карточку в выходной день',
    image: 'https://picsum.photos/seed/challenge-22/800/600'
  },
  {
    id: 'challenge-23',
    title: 'Кашубская Деревня',
    description: 'Откройте традиционную кашубскую архитектуру в деревне Sierakowice.',
    category: 'cultural',
    location: 'Sierakowice',
    distanceFromGdansk: 38,
    time: '2-3 hours',
    tips: 'Working day - можно открыть карточку после работы',
    image: 'https://picsum.photos/seed/challenge-23/800/600'
  },
  {
    id: 'challenge-24',
    title: 'Маяки Побережья',
    description: 'Посетите маяки в Hel, Rozewie и Stilo за одну поездку.',
    category: 'cultural',
    location: 'Hel, Rozewie, Stilo',
    distanceFromGdansk: 120,
    time: 'Full day',
    tips: 'Full day needed - лучше открыть карточку в выходной день',
    image: 'https://picsum.photos/seed/challenge-24/800/600'
  },
  {
    id: 'challenge-25',
    title: 'Готический Собор',
    description: 'Доберитесь до впечатляющего готического собора в Pelplin.',
    category: 'cultural',
    location: 'Pelplin',
    distanceFromGdansk: 45,
    time: '3-4 hours',
    tips: 'Working day - можно открыть карточку после работы',
    image: 'https://picsum.photos/seed/challenge-25/800/600'
  },
  
  // Food & Local Challenges
  {
    id: 'challenge-26',
    title: 'Придорожные Кафе',
    description: 'Посетите 3 случайных придорожных кафе по дороге в Bytów.',
    category: 'local',
    location: 'Bytów',
    distanceFromGdansk: 90,
    time: 'Full day',
    tips: 'Full day needed - лучше открыть карточку в выходной день',
    image: 'https://picsum.photos/seed/challenge-26/800/600'
  },
  {
    id: 'challenge-27',
    title: 'Копченая Рыба',
    description: 'Найдите лучшую коптильню в рыбацкой деревне Jastarnia.',
    category: 'local',
    location: 'Jastarnia',
    distanceFromGdansk: 60,
    time: '4-5 hours',
    tips: 'Working day - можно открыть карточку после работы, если выехать рано',
    image: 'https://picsum.photos/seed/challenge-27/800/600'
  },
  {
    id: 'challenge-28',
    title: 'Кашубская Кухня',
    description: 'Попробуйте традиционные кашубские блюда в ресторане в Chmielno.',
    category: 'local',
    location: 'Chmielno',
    distanceFromGdansk: 40,
    time: '3-4 hours',
    tips: 'Working day - можно открыть карточку после работы',
    image: 'https://picsum.photos/seed/challenge-28/800/600'
  },
  {
    id: 'challenge-29',
    title: 'Ночное Приключение',
    description: 'Ночная поездка к Mierzeja Wiślana — встретьте рассвет у залива.',
    category: 'adventure',
    location: 'Krynica Morska',
    distanceFromGdansk: 80,
    time: 'Full day (ночь + утро)',
    tips: 'Full day needed - лучше открыть карточку в выходной день',
    image: 'https://picsum.photos/seed/challenge-29/800/600'
  },
  {
    id: 'challenge-30',
    title: 'Спонтанное Открытие',
    description: 'Выберите случайное направление и езжайте 2 часа, открывая новые места. Цель: Słupsk.',
    category: 'adventure',
    location: 'Słupsk',
    distanceFromGdansk: 120,
    time: 'Full day',
    tips: 'Full day needed - лучше открыть карточку в выходной день',
    image: 'https://picsum.photos/seed/challenge-30/800/600'
  }
];
