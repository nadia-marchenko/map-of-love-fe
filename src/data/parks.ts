import { Location } from '../types';

export const parks: Location[] = [
  {
    id: 'slowinski-pn',
    name: 'Słowiński Park Narodowy',
    description: 'Один из самых красивых национальных парков Польши, известный движущимися дюнами и уникальными прибрежными ландшафтами.',
    coordinates: [17.3, 54.7],
    category: 'park narodowy',
    image: 'https://picsum.photos/seed/slowinski-pn/800/600',
    details: {
      location: 'Поморское воеводство, побережье Балтийского моря',
      establishmentDate: '1 января 1967',
      area: {
        park: '327,44 км²',
        bufferZone: '302,20 км²'
      },
      protection: {
        strict: '15%',
        active: '60%',
        landscape: '25%'
      },
      protectionPrograms: ['UNESCO MAB', 'Орнитологический заповедник IBA', 'Рамсарская конвенция'],
      symbol: 'Чайка',
      tickets: 'Вход платный, билеты в кассах парка',
      nearestCity: 'Слупск, Леба',
      nearestTrainStation: 'Леба, Слупск',
      headquarters: 'ул. Бохтеров 1, 76-214 Смольдзино',
      phone: '+48 (59) 811 72 04',
      website: 'www.slowinskipn.pl',
      museums: ['Музей Словинского национального парка в Смольдзино'],
      activities: {
        hiking: '150 км',
        cycling: '80 км',
        skiing: 'Лыжные трассы',
        educationalTrails: '12 км',
        other: ['Каякинг', 'Наблюдение за птицами']
      },
      visitRecommendations: 'Парк известен движущимися дюнами, которые достигают высоты до 40 метров. Лучшее время для посещения - лето, когда можно насладиться пляжами и дюнами. Обязательно посетите музей и прогуляйтесь по образовательным тропам.'
    }
  },
  {
    id: 'bory-tucholskie',
    name: 'Bory Tucholskie',
    description: 'Обширный лесной комплекс с многочисленными озёрами и реками, идеальный для пеших походов и каякинга.',
    coordinates: [17.8, 53.6],
    category: 'park krajobrazowy',
    image: 'https://picsum.photos/seed/bory-tucholskie/800/600',
    details: {
      location: 'Поморское и Куявско-Поморское воеводство',
      establishmentDate: '1996',
      area: {
        park: '319,75 км²',
        bufferZone: '120,00 км²'
      },
      protection: {
        landscape: '100%'
      },
      symbol: 'Глухарь',
      tickets: 'Вход бесплатный',
      nearestCity: 'Хойнице, Тухоля',
      nearestTrainStation: 'Хойнице, Тухоля',
      headquarters: 'ул. Дворцова 1, 89-620 Хойнице',
      phone: '+48 (52) 397 21 97',
      website: 'www.borytucholskie.pl',
      activities: {
        hiking: '200 км',
        cycling: '150 км',
        educationalTrails: '15 км',
        other: ['Каякинг по рекам', 'Рыбалка', 'Наблюдение за природой']
      },
      visitRecommendations: 'Идеальное место для активного отдыха. Многочисленные озёра и реки создают прекрасные условия для каякинга. Лесные тропы подходят для пеших и велосипедных прогулок. Рекомендуется посетить в тёплое время года.'
    }
  },
  {
    id: 'wdzydzki-pk',
    name: 'Wdzydzki Park Krajobrazowy',
    description: 'Парк известен озером Вдзыдзе, называемым "Кашубским морем", с красивыми видами и возможностями для отдыха.',
    coordinates: [17.9, 54.0],
    category: 'park krajobrazowy',
    image: 'https://picsum.photos/seed/wdzydzki-pk/800/600',
    details: {
      location: 'Поморское воеводство, Кашубия',
      establishmentDate: '1983',
      area: {
        park: '178,32 км²',
        bufferZone: '67,00 км²'
      },
      protection: {
        landscape: '100%'
      },
      symbol: 'Орлан-белохвост',
      tickets: 'Вход бесплатный',
      nearestCity: 'Костежина, Картузы',
      nearestTrainStation: 'Костежина',
      headquarters: 'ул. Туристов 10, 83-406 Вдзыдзе',
      phone: '+48 (58) 686 12 88',
      website: 'www.wdzydzkipark.pl',
      activities: {
        hiking: '80 км',
        cycling: '60 км',
        educationalTrails: '8 км',
        other: ['Каякинг', 'Парусный спорт', 'Рыбалка', 'Купание']
      },
      visitRecommendations: 'Озеро Вдзыдзе - главная достопримечательность парка. Идеальное место для водных видов спорта и отдыха на природе. Многочисленные пляжи и пристани делают это место популярным среди туристов. Лучшее время для посещения - лето.'
    }
  },
  {
    id: 'kaszubski-pk',
    name: 'Kaszubski Park Krajobrazowy',
    description: 'Живописный парк с холмистой местностью, озёрами и традиционной кашубской архитектурой.',
    coordinates: [18.1, 54.3],
    category: 'park krajobrazowy',
    image: 'https://picsum.photos/seed/kaszubski-pk/800/600',
    details: {
      location: 'Поморское воеводство, Кашубия',
      establishmentDate: '1983',
      area: {
        park: '332,02 км²',
        bufferZone: '120,00 км²'
      },
      protection: {
        landscape: '100%'
      },
      symbol: 'Кашубская культура',
      tickets: 'Вход бесплатный',
      nearestCity: 'Картузы, Косцежина',
      nearestTrainStation: 'Картузы, Косцежина',
      headquarters: 'ул. Туристов 10, 83-300 Картузы',
      phone: '+48 (58) 681 14 42',
      website: 'www.kaszubskipark.pl',
      museums: ['Музей кашубской культуры в Картузах'],
      activities: {
        hiking: '120 км',
        cycling: '90 км',
        educationalTrails: '10 км',
        other: ['Наблюдение за природой', 'Культурный туризм']
      },
      visitRecommendations: 'Парк сочетает природную красоту с богатой кашубской культурой. Холмистая местность создаёт живописные виды. Рекомендуется посетить музеи и познакомиться с кашубскими традициями.'
    }
  },
  {
    id: 'trzebiatowsko-kolobrzeski-pk',
    name: 'Trzebiatowsko-Kołobrzeski Park Krajobrazowy',
    description: 'Прибрежный парк с утёсами, пляжами и лесами, защищающий уникальные прибрежные экосистемы.',
    coordinates: [15.6, 54.2],
    category: 'park krajobrazowy',
    image: 'https://picsum.photos/seed/trzebiatowsko-kolobrzeski-pk/800/600',
    details: {
      location: 'Западно-Поморское воеводство, побережье Балтийского моря',
      establishmentDate: '2005',
      area: {
        park: '200,00 км²',
        bufferZone: '80,00 км²'
      },
      protection: {
        landscape: '100%'
      },
      symbol: 'Морской клиф',
      tickets: 'Вход бесплатный',
      nearestCity: 'Колобжег, Тшебятув',
      nearestTrainStation: 'Колобжег, Тшебятув',
      headquarters: 'ул. Морская 2, 78-100 Колобжег',
      phone: '+48 (94) 352 12 09',
      website: 'www.trzebiatowsko-kolobrzeski.pl',
      activities: {
        hiking: '100 км',
        cycling: '70 км',
        educationalTrails: '12 км',
        other: ['Пляжный отдых', 'Наблюдение за птицами', 'Фотография']
      },
      visitRecommendations: 'Прибрежный парк с красивыми утёсами и пляжами. Идеальное место для отдыха у моря и прогулок по лесу. Клифы создают живописные виды. Лучшее время для посещения - лето.'
    }
  },
  {
    id: 'barlinecko-gorzowski-pk',
    name: 'Barlinecko-Gorzowski Park Krajobrazowy',
    description: 'Парк с густыми лесами и озёрами, идеальный для пеших походов и наблюдения за природой.',
    coordinates: [15.2, 52.9],
    category: 'park krajobrazowy',
    image: 'https://picsum.photos/seed/barlinecko-gorzowski-pk/800/600',
    details: {
      location: 'Западно-Поморское и Любуское воеводство',
      establishmentDate: '1991',
      area: {
        park: '239,80 км²',
        bufferZone: '100,00 км²'
      },
      protection: {
        landscape: '100%'
      },
      symbol: 'Лесной комплекс',
      tickets: 'Вход бесплатный',
      nearestCity: 'Барлинек, Гожув-Велькопольский',
      nearestTrainStation: 'Барлинек, Гожув-Велькопольский',
      headquarters: 'ул. Независимости 1, 74-320 Барлинек',
      phone: '+48 (95) 746 20 21',
      website: 'www.barlinecko-gorzowski.pl',
      activities: {
        hiking: '150 км',
        cycling: '100 км',
        educationalTrails: '8 км',
        other: ['Наблюдение за природой', 'Рыбалка']
      },
      visitRecommendations: 'Густые леса и многочисленные озёра создают идеальные условия для отдыха на природе. Парк подходит для пеших прогулок и наблюдения за дикой природой. Рекомендуется посещение в любое время года.'
    }
  },
  {
    id: 'drawski-pk',
    name: 'Drawski Park Krajobrazowy',
    description: 'Парк с озером Дравско и живописными холмами, популярный среди яхтсменов и рыбаков.',
    coordinates: [16.2, 53.7],
    category: 'park krajobrazowy',
    image: 'https://picsum.photos/seed/drawski-pk/800/600',
    details: {
      location: 'Западно-Поморское воеводство',
      establishmentDate: '1979',
      area: {
        park: '414,31 км²',
        bufferZone: '240,00 км²'
      },
      protection: {
        landscape: '100%'
      },
      symbol: 'Озеро Дравско',
      tickets: 'Вход бесплатный',
      nearestCity: 'Члопа, Дравско-Поморске',
      nearestTrainStation: 'Члопа',
      headquarters: 'ул. Лесная 2, 78-550 Члопа',
      phone: '+48 (94) 375 22 11',
      website: 'www.drawskipark.pl',
      activities: {
        hiking: '180 км',
        cycling: '120 км',
        educationalTrails: '15 км',
        other: ['Парусный спорт', 'Рыбалка', 'Каякинг', 'Водные виды спорта']
      },
      visitRecommendations: 'Озеро Дравско - одно из крупнейших в Польше, идеально подходит для парусного спорта и рыбалки. Живописные холмы создают красивые виды. Парк особенно популярен летом среди любителей водных видов спорта.'
    }
  },
  {
    id: 'izerski-pk',
    name: 'Izerski Park Krajobrazowy',
    description: 'Горный парк с торфяными болотами и уникальной растительностью, часть Западных Судет.',
    coordinates: [15.3, 50.9],
    category: 'park krajobrazowy',
    image: 'https://picsum.photos/seed/izerski-pk/800/600',
    details: {
      location: 'Нижнесилезское воеводство, Западные Судеты',
      establishmentDate: '1989',
      area: {
        park: '157,00 км²',
        bufferZone: '80,00 км²'
      },
      protection: {
        landscape: '100%'
      },
      symbol: 'Торфяные болота',
      tickets: 'Вход бесплатный',
      nearestCity: 'Шклярска-Поремба, Яблоннец',
      nearestTrainStation: 'Шклярска-Поремба',
      headquarters: 'ул. Свободы 2, 58-580 Шклярска-Поремба',
      phone: '+48 (75) 717 30 21',
      website: 'www.izerskipark.pl',
      activities: {
        hiking: '120 км',
        cycling: '80 км',
        skiing: 'Лыжные трассы',
        educationalTrails: '10 км',
        other: ['Наблюдение за природой', 'Фотография']
      },
      visitRecommendations: 'Уникальные торфяные болота и горные пейзажи делают парк особенным. Парк подходит для пеших прогулок и лыжного спорта зимой. Рекомендуется посетить в разные сезоны, чтобы увидеть разнообразие природы.'
    }
  },
  {
    id: 'karkonoski-pn',
    name: 'Karkonoski Park Narodowy',
    description: 'Самый высокий горный хребет Судет со Снежкой, водопадами и уникальной горной природой.',
    coordinates: [15.7, 50.7],
    category: 'park narodowy',
    image: 'https://picsum.photos/seed/karkonoski-pn/800/600',
    details: {
      location: 'Нижнесилезское воеводство, Западные Судеты',
      establishmentDate: '16 января 1959',
      area: {
        park: '55,75 км²',
        bufferZone: '112,75 км²'
      },
      protection: {
        strict: '18%',
        active: '65%',
        landscape: '17%'
      },
      protectionPrograms: ['UNESCO MAB', 'Орнитологический заповедник IBA'],
      symbol: 'Снежка',
      tickets: 'Вход платный, билеты в кассах парка',
      nearestCity: 'Карпач, Шклярска-Поремба',
      nearestTrainStation: 'Карпач, Шклярска-Поремба',
      headquarters: 'ул. Хойна 23, 58-570 Карпач',
      phone: '+48 (75) 761 37 05',
      website: 'www.kpnmab.pl',
      museums: ['Музей KPN в Карпаче', 'Музей KPN в Шклярске-Порембе'],
      activities: {
        hiking: '112 км',
        cycling: 'Ограничено',
        skiing: 'Лыжные трассы',
        educationalTrails: '15 км',
        other: ['Альпинизм', 'Наблюдение за природой']
      },
      visitRecommendations: 'Самый высокий горный хребет в Польше со Снежкой (1603 м). Парк известен водопадами, горными озёрами и уникальной альпийской природой. Обязательно посетите Снежку и водопад Каменьчик. Лучшее время для посещения - лето и ранняя осень.'
    }
  },
  {
    id: 'babiogorski-pn',
    name: 'Babia Góra - Babiogórski Park Narodowy',
    description: 'Самая высокая вершина Западных Бескид с красивыми видами и охраняемой природой.',
    coordinates: [19.5, 49.6],
    category: 'park narodowy',
    image: 'https://picsum.photos/seed/babiogorski-pn/800/600',
    details: {
      location: 'Малопольское воеводство, Западные Бескиды',
      establishmentDate: '30 октября 1954',
      area: {
        park: '33,92 км²',
        bufferZone: '84,37 км²'
      },
      protection: {
        strict: '20%',
        active: '60%',
        landscape: '20%'
      },
      protectionPrograms: ['UNESCO MAB', 'Орнитологический заповедник IBA'],
      symbol: 'Бабия-Гура',
      tickets: 'Вход платный, билеты в кассах парка',
      nearestCity: 'Закопане, Суха-Бескидска',
      nearestTrainStation: 'Суха-Бескидска',
      headquarters: 'ул. Замкова 2, 34-223 Завоя',
      phone: '+48 (33) 877 51 10',
      website: 'www.bgpn.pl',
      museums: ['Музей BPN в Завое'],
      activities: {
        hiking: '50 км',
        cycling: 'Ограничено',
        skiing: 'Лыжные трассы',
        educationalTrails: '8 км',
        other: ['Альпинизм', 'Наблюдение за природой']
      },
      visitRecommendations: 'Бабия-Гура (1725 м) - самая высокая вершина Западных Бескид. Парк известен альпийскими лугами и уникальной природой. Обязательно поднимитесь на вершину для панорамных видов. Лучшее время для посещения - лето и ранняя осень.'
    }
  },
  {
    id: 'tatrzanski-pn',
    name: 'Tatrzański Park Narodowy',
    description: 'Самые высокие горы Польши с Морским Оком, Долиной Пяти Озёр и уникальной альпийской природой.',
    coordinates: [20.0, 49.2],
    category: 'park narodowy',
    image: 'https://picsum.photos/seed/tatrzanski-pn/800/600',
    details: {
      location: 'Малопольское воеводство, Татры',
      establishmentDate: '30 октября 1954',
      area: {
        park: '211,64 км²',
        bufferZone: '207,10 км²'
      },
      protection: {
        strict: '15%',
        active: '70%',
        landscape: '15%'
      },
      protectionPrograms: ['UNESCO MAB', 'Орнитологический заповедник IBA'],
      symbol: 'Козерог',
      tickets: 'Вход платный, билеты в кассах парка',
      nearestCity: 'Закопане',
      nearestTrainStation: 'Закопане',
      headquarters: 'ул. Кузница 1, 34-500 Закопане',
      phone: '+48 (18) 202 32 00',
      website: 'www.tpn.pl',
      museums: ['Музей TPN в Закопане', 'Музей TPN в Кузнице'],
      activities: {
        hiking: '275 км',
        cycling: 'Ограничено',
        skiing: 'Лыжные трассы',
        educationalTrails: '20 км',
        other: ['Альпинизм', 'Скалолазание', 'Наблюдение за природой']
      },
      visitRecommendations: 'Самые высокие горы Польши с вершиной Рысы (2499 м). Обязательно посетите Морское Око, Долину Пяти Озёр и Каспровы-Верх. Парк очень популярен, особенно летом. Рекомендуется бронировать проживание заранее. Лучшее время для посещения - лето и ранняя осень.'
    }
  },
  {
    id: 'pieninski-pn',
    name: 'Pieniński Park Narodowy',
    description: 'Парк с ущельем Дунаец, Тремя Коронками и живописными известняковыми скалами.',
    coordinates: [20.4, 49.4],
    category: 'park narodowy',
    image: 'https://picsum.photos/seed/pieninski-pn/800/600',
    details: {
      location: 'Малопольское воеводство, Пенины',
      establishmentDate: '23 мая 1932',
      area: {
        park: '23,46 км²',
        bufferZone: '26,62 км²'
      },
      protection: {
        strict: '10%',
        active: '75%',
        landscape: '15%'
      },
      protectionPrograms: ['UNESCO MAB'],
      symbol: 'Три Коронки',
      tickets: 'Вход платный, билеты в кассах парка',
      nearestCity: 'Кросценко-над-Дунайцем, Шчавница',
      nearestTrainStation: 'Кросценко-над-Дунайцем',
      headquarters: 'ул. Ягеллонская 107B, 34-450 Кросценко-над-Дунайцем',
      phone: '+48 (18) 262 56 01',
      website: 'www.pieninypn.pl',
      museums: ['Музей PPN в Кросценко'],
      activities: {
        hiking: '35 км',
        cycling: 'Ограничено',
        educationalTrails: '5 км',
        other: ['Сплав по Дунайцу', 'Скалолазание', 'Наблюдение за природой']
      },
      visitRecommendations: 'Парк известен ущельем Дунаец и Тремя Коронками. Обязательно совершите сплав по реке Дунаец - это одна из главных достопримечательностей. Парк небольшой, но очень живописный. Лучшее время для посещения - лето.'
    }
  },
  {
    id: 'gorczanski-pn',
    name: 'Gorczański Park Narodowy',
    description: 'Горный парк с буковыми лесами, полянами и традиционной пастушьей архитектурой.',
    coordinates: [20.1, 49.6],
    category: 'park narodowy',
    image: 'https://picsum.photos/seed/gorczanski-pn/800/600',
    details: {
      location: 'Малопольское воеводство, Горы Горец',
      establishmentDate: '7 января 1981',
      area: {
        park: '70,30 км²',
        bufferZone: '166,47 км²'
      },
      protection: {
        strict: '12%',
        active: '68%',
        landscape: '20%'
      },
      protectionPrograms: ['UNESCO MAB'],
      symbol: 'Саламандра',
      tickets: 'Вход платный, билеты в кассах парка',
      nearestCity: 'Новы-Тарг, Рабка-Здруй',
      nearestTrainStation: 'Новы-Тарг, Рабка-Здруй',
      headquarters: 'ул. Владыслава Оркана 2, 34-735 Поромбка-Велька',
      phone: '+48 (18) 331 72 07',
      website: 'www.gorczanskipark.pl',
      museums: ['Музей GPN в Поромбке-Вельке'],
      activities: {
        hiking: '85 км',
        cycling: 'Ограничено',
        skiing: 'Лыжные трассы',
        educationalTrails: '10 км',
        other: ['Наблюдение за природой', 'Культурный туризм']
      },
      visitRecommendations: 'Парк известен буковыми лесами и традиционной пастушьей архитектурой. Поляны создают живописные виды. Парк менее популярен, чем Татры, что делает его идеальным для спокойного отдыха. Лучшее время для посещения - лето и ранняя осень.'
    }
  },
  {
    id: 'ojcowski-pn',
    name: 'Ojcowski Park Narodowy',
    description: 'Самый маленький национальный парк с пещерами, замками и живописными долинами.',
    coordinates: [19.8, 50.2],
    category: 'park narodowy',
    image: 'https://picsum.photos/seed/ojcowski-pn/800/600',
    details: {
      location: 'Малопольское воеводство, Краковско-Ченстоховская возвышенность',
      establishmentDate: '14 января 1956',
      area: {
        park: '21,46 км²',
        bufferZone: '67,77 км²'
      },
      protection: {
        strict: '8%',
        active: '72%',
        landscape: '20%'
      },
      protectionPrograms: ['UNESCO MAB'],
      symbol: 'Летучая мышь',
      tickets: 'Вход платный, билеты в кассах парка',
      nearestCity: 'Краков, Олькуш',
      nearestTrainStation: 'Краков',
      headquarters: 'ул. Парк 11, 32-047 Ойцов',
      phone: '+48 (12) 389 20 05',
      website: 'www.ojcowskiparknarodowy.pl',
      museums: ['Музей OPN в Ойцове'],
      activities: {
        hiking: '40 км',
        cycling: 'Ограничено',
        educationalTrails: '8 км',
        other: ['Посещение пещер', 'Посещение замков', 'Наблюдение за природой']
      },
      visitRecommendations: 'Самый маленький национальный парк Польши, но очень богатый достопримечательностями. Обязательно посетите пещеры (Локетек, Чёрная) и замки (Ойцов, Пескова-Скала). Парк находится недалеко от Кракова, что делает его популярным для однодневных поездок.'
    }
  },
  {
    id: 'magurski-pn',
    name: 'Magurski Park Narodowy',
    description: 'Парк с буковыми лесами, лугами и уникальной фауной, часть Низких Бескид.',
    coordinates: [21.5, 49.5],
    category: 'park narodowy',
    image: 'https://picsum.photos/seed/magurski-pn/800/600',
    details: {
      location: 'Подкарпатское воеводство, Низкие Бескиды',
      establishmentDate: '1 января 1995',
      area: {
        park: '194,39 км²',
        bufferZone: '226,97 км²'
      },
      protection: {
        strict: '10%',
        active: '70%',
        landscape: '20%'
      },
      protectionPrograms: ['UNESCO MAB'],
      symbol: 'Орлан-белохвост',
      tickets: 'Вход платный, билеты в кассах парка',
      nearestCity: 'Кросно, Ясло',
      nearestTrainStation: 'Кросно, Ясло',
      headquarters: 'ул. Кремпна 59, 38-232 Кремпна',
      phone: '+48 (13) 441 40 99',
      website: 'www.magurskipn.pl',
      museums: ['Музей MPN в Кремпне'],
      activities: {
        hiking: '100 км',
        cycling: 'Ограничено',
        skiing: 'Лыжные трассы',
        educationalTrails: '12 км',
        other: ['Наблюдение за природой', 'Фотография']
      },
      visitRecommendations: 'Парк известен буковыми лесами и богатой фауной, включая медведей и волков. Парк менее популярен, чем другие, что делает его идеальным для спокойного отдыха. Рекомендуется посетить в любое время года.'
    }
  },
  {
    id: 'bialowieski-pn',
    name: 'Białowieski Park Narodowy',
    description: 'Последний первобытный лес в Европе, дом зубров и уникальной природы.',
    coordinates: [23.8, 52.7],
    category: 'park narodowy',
    image: 'https://picsum.photos/seed/bialowieski-pn/800/600',
    details: {
      location: 'Подляское воеводство, Беловежская пуща',
      establishmentDate: '11 августа 1932',
      area: {
        park: '105,17 км²',
        bufferZone: '322,75 км²'
      },
      protection: {
        strict: '47%',
        active: '53%'
      },
      protectionPrograms: ['UNESCO World Heritage', 'UNESCO MAB', 'Орнитологический заповедник IBA'],
      symbol: 'Зубр',
      tickets: 'Вход платный, билеты в кассах парка',
      nearestCity: 'Беловежа, Гайнувка',
      nearestTrainStation: 'Гайнувка',
      headquarters: 'Парк Палац 11, 17-230 Беловежа',
      phone: '+48 (85) 681 23 06',
      website: 'www.bpn.com.pl',
      museums: ['Музей BPN в Беловеже', 'Музей природы и леса в Беловеже'],
      activities: {
        hiking: 'Ограничено (только с гидом)',
        cycling: 'Ограничено',
        educationalTrails: '6 км',
        other: ['Наблюдение за зубрами', 'Экскурсии с гидом', 'Наблюдение за природой']
      },
      visitRecommendations: 'Последний первобытный лес в Европе и дом зубров. Парк имеет строгие правила посещения - многие участки доступны только с гидом. Обязательно посетите заповедник зубров и музей. Парк включён в список Всемирного наследия ЮНЕСКО. Рекомендуется бронировать экскурсии заранее.'
    }
  },
  {
    id: 'wigierski-pn',
    name: 'Wigierski Park Narodowy',
    description: 'Парк с озером Вигры, многочисленными озёрами и реками, идеальный для каякинга.',
    coordinates: [23.1, 54.0],
    category: 'park narodowy',
    image: 'https://picsum.photos/seed/wigierski-pn/800/600',
    details: {
      location: 'Подляское воеводство, Сувальщина',
      establishmentDate: '1 января 1989',
      area: {
        park: '150,86 км²',
        bufferZone: '113,37 км²'
      },
      protection: {
        strict: '12%',
        active: '68%',
        landscape: '20%'
      },
      protectionPrograms: ['UNESCO MAB', 'Рамсарская конвенция'],
      symbol: 'Бобр',
      tickets: 'Вход платный, билеты в кассах парка',
      nearestCity: 'Сувалки, Августов',
      nearestTrainStation: 'Сувалки',
      headquarters: 'ул. Туристов 46, 16-400 Сувалки',
      phone: '+48 (87) 563 25 40',
      website: 'www.wigry.org.pl',
      museums: ['Музей WPN в Крутыне', 'Бывший монастырь камальдулов на Виграх'],
      activities: {
        hiking: '190 км',
        cycling: '140 км',
        skiing: 'Лыжные трассы',
        educationalTrails: '18 км',
        other: ['Каякинг', 'Парусный спорт', 'Рыбалка', 'Наблюдение за природой']
      },
      visitRecommendations: 'Озеро Вигры - одно из крупнейших в Польше, идеально подходит для водных видов спорта. Многочисленные озёра и реки создают прекрасные условия для каякинга. Парк менее популярен, чем другие, что делает его идеальным для спокойного отдыха. Лучшее время для посещения - лето.'
    }
  },
  {
    id: 'bieszczadzki-pn',
    name: 'Bieszczadzki Park Narodowy',
    description: 'Дикие горы с горными лугами, волками и медведями, часть Восточных Карпат.',
    coordinates: [22.7, 49.1],
    category: 'park narodowy',
    image: 'https://picsum.photos/seed/bieszczadzki-pn/800/600',
    details: {
      location: 'Подкарпатское воеводство, Восточные Карпаты',
      establishmentDate: '4 августа 1973',
      area: {
        park: '292,02 км²',
        bufferZone: '207,31 км²'
      },
      protection: {
        strict: '18%',
        active: '72%',
        landscape: '10%'
      },
      protectionPrograms: ['UNESCO MAB', 'Орнитологический заповедник IBA'],
      symbol: 'Рысь',
      tickets: 'Вход платный, билеты в кассах парка',
      nearestCity: 'Устшики-Дольне, Санок',
      nearestTrainStation: 'Устшики-Дольне',
      headquarters: 'ул. Безьецка 1, 38-714 Устшики-Гурне',
      phone: '+48 (13) 461 10 91',
      website: 'www.bdpn.pl',
      museums: ['Музей BPN в Устшиках-Гурне'],
      activities: {
        hiking: '206 км',
        cycling: 'Ограничено',
        skiing: 'Лыжные трассы',
        educationalTrails: '15 км',
        other: ['Конные прогулки', 'Наблюдение за природой', 'Фотография']
      },
      visitRecommendations: 'Самый дикий и отдалённый национальный парк Польши. Парк известен горными лугами (полонинами), волками и медведями. Обязательно поднимитесь на Тарницу и Галич для панорамных видов. Парк менее популярен, чем Татры, что делает его идеальным для спокойного отдыха. Лучшее время для посещения - лето и ранняя осень.'
    }
  },
  {
    id: 'kampinoski-pn',
    name: 'Kampinoski Park Narodowy',
    description: 'Парк недалеко от Варшавы с дюнами, болотами и лесами, популярный среди велосипедистов.',
    coordinates: [20.6, 52.3],
    category: 'park narodowy',
    image: 'https://picsum.photos/seed/kampinoski-pn/800/600',
    details: {
      location: 'Мазовецкое воеводство, Варшавская котловина',
      establishmentDate: '16 января 1959',
      area: {
        park: '385,44 км²',
        bufferZone: '377,56 км²'
      },
      protection: {
        strict: '12%',
        active: '72%',
        landscape: '16%'
      },
      protectionPrograms: ['UNESCO MAB', 'Орнитологический заповедник IBA'],
      symbol: 'Лось',
      tickets: 'Вход бесплатный',
      nearestCity: 'Варшава',
      nearestTrainStation: 'Тересин, Новы-Двур-Мазовецки',
      headquarters: 'ул. Казимежа Тетмайера 38, 05-080 Избелин',
      phone: '+48 (22) 722 60 01 или +48 (22) 722 60 21',
      website: 'www.kampinoski-pn.gov.pl',
      museums: ['Центр образования KPN в Избелине', 'Учебно-музейный центр им. Ядвиги и Романа Кобендзов в Границе'],
      activities: {
        hiking: '357 км',
        cycling: '206 км',
        skiing: 'Лыжные трассы',
        educationalTrails: '28 км',
        other: ['Наблюдение за природой', 'Фотография']
      },
      visitRecommendations: 'KPN - второй по величине и один из самых посещаемых национальных парков в Польше. Многолюдно в основном в выходные дни в местах близко к парковкам. Чем дальше в лес, тем лучше - лучше всего на велосипеде. Если вы приехали на одноразовый визит, стоит сосредоточиться на самых ценных природных местах, охваченных зонами строгой охраны (ООС).'
    }
  },
  {
    id: 'wielkopolski-pn',
    name: 'Wielkopolski Park Narodowy',
    description: 'Парк с послеледниковыми озёрами, лесами и памятниками, недалеко от Познани.',
    coordinates: [16.8, 52.2],
    category: 'park narodowy',
    image: 'https://picsum.photos/seed/wielkopolski-pn/800/600',
    details: {
      location: 'Великопольское воеводство, недалеко от Познани',
      establishmentDate: '16 апреля 1957',
      area: {
        park: '75,84 км²',
        bufferZone: '72,58 км²'
      },
      protection: {
        strict: '8%',
        active: '72%',
        landscape: '20%'
      },
      protectionPrograms: ['UNESCO MAB'],
      symbol: 'Орлан-белохвост',
      tickets: 'Вход платный, билеты в кассах парка',
      nearestCity: 'Познань',
      nearestTrainStation: 'Познань, Мосина',
      headquarters: 'ул. Дрожиньска 2, 62-050 Мосина',
      phone: '+48 (61) 813 20 06',
      website: 'www.wielkopolskipn.pl',
      museums: ['Музей WPN в Езерце'],
      activities: {
        hiking: '85 км',
        cycling: '60 км',
        educationalTrails: '10 км',
        other: ['Наблюдение за природой', 'Культурный туризм']
      },
      visitRecommendations: 'Парк известен послеледниковыми озёрами и лесами. Парк находится недалеко от Познани, что делает его популярным для однодневных поездок. Рекомендуется посетить в любое время года.'
    }
  },
  {
    id: 'wolinski-pn',
    name: 'Woliński Park Narodowy',
    description: 'Прибрежный парк с утёсами, лесами и озёрами, защищающий уникальные островные экосистемы.',
    coordinates: [14.5, 53.9],
    category: 'park narodowy',
    image: 'https://picsum.photos/seed/wolinski-pn/800/600',
    details: {
      location: 'Западно-Поморское воеводство, остров Волин',
      establishmentDate: '3 марта 1960',
      area: {
        park: '109,37 км²',
        bufferZone: '46,00 км²'
      },
      protection: {
        strict: '10%',
        active: '70%',
        landscape: '20%'
      },
      protectionPrograms: ['UNESCO MAB', 'Орнитологический заповедник IBA'],
      symbol: 'Орлан-белохвост',
      tickets: 'Вход платный, билеты в кассах парка',
      nearestCity: 'Свиноуйсьце, Мендзыздрое',
      nearestTrainStation: 'Свиноуйсьце',
      headquarters: 'ул. Недзведзя 1, 72-500 Мендзыздрое',
      phone: '+48 (91) 328 07 27',
      website: 'www.wolinpn.pl',
      museums: ['Музей WPN в Мендзыздрое', 'Центр разведения зубров в Мендзыздрое'],
      activities: {
        hiking: '120 км',
        cycling: '80 км',
        educationalTrails: '12 км',
        other: ['Пляжный отдых', 'Наблюдение за птицами', 'Наблюдение за зубрами']
      },
      visitRecommendations: 'Единственный островной национальный парк в Польше. Парк известен утёсами, лесами и заповедником зубров. Обязательно посетите центр разведения зубров. Парк особенно популярен летом благодаря пляжам. Лучшее время для посещения - лето.'
    }
  },
  {
    id: 'drawienski-pn',
    name: 'Drawieński Park Narodowy',
    description: 'Парк с рекой Драва, идеальный для каякинга и лесных походов.',
    coordinates: [15.9, 53.2],
    category: 'park narodowy',
    image: 'https://picsum.photos/seed/drawienski-pn/800/600',
    details: {
      location: 'Западно-Поморское и Любуское воеводство',
      establishmentDate: '1 мая 1990',
      area: {
        park: '114,41 км²',
        bufferZone: '367,92 км²'
      },
      protection: {
        strict: '8%',
        active: '72%',
        landscape: '20%'
      },
      protectionPrograms: ['UNESCO MAB'],
      symbol: 'Выдра',
      tickets: 'Вход платный, билеты в кассах парка',
      nearestCity: 'Дравско-Поморске, Хойнице',
      nearestTrainStation: 'Дравско-Поморске',
      headquarters: 'ул. Лесников 2, 73-220 Дравско-Поморске',
      phone: '+48 (95) 768 20 51',
      website: 'www.dpn.pl',
      museums: ['Музей DPN в Дравско-Поморске'],
      activities: {
        hiking: '80 км',
        cycling: '60 км',
        educationalTrails: '10 км',
        other: ['Каякинг по реке Драва', 'Рыбалка', 'Наблюдение за природой']
      },
      visitRecommendations: 'Парк известен рекой Драва, идеально подходящей для каякинга. Лесные тропы создают прекрасные условия для пеших и велосипедных прогулок. Парк менее популярен, чем другие, что делает его идеальным для спокойного отдыха. Лучшее время для посещения - лето.'
    }
  },
  {
    id: 'narwianski-pn',
    name: 'Narwiański Park Narodowy',
    description: 'Парк с уникальной долиной Нарев, болотами и поймами, дом для многих видов птиц.',
    coordinates: [22.9, 53.1],
    category: 'park narodowy',
    image: 'https://picsum.photos/seed/narwianski-pn/800/600',
    details: {
      location: 'Подляское воеводство, долина Нарев',
      establishmentDate: '1 июля 1996',
      area: {
        park: '73,50 км²',
        bufferZone: '154,58 км²'
      },
      protection: {
        strict: '5%',
        active: '75%',
        landscape: '20%'
      },
      protectionPrograms: ['Рамсарская конвенция', 'Орнитологический заповедник IBA'],
      symbol: 'Болотная сова',
      tickets: 'Вход платный, билеты в кассах парка',
      nearestCity: 'Белосток, Вапно',
      nearestTrainStation: 'Белосток',
      headquarters: 'ул. Ковальска 10, 18-204 Курово',
      phone: '+48 (85) 681 23 06',
      website: 'www.narwianskipn.pl',
      museums: ['Музей NPN в Курове'],
      activities: {
        hiking: 'Ограничено (только с гидом)',
        cycling: 'Ограничено',
        educationalTrails: '5 км',
        other: ['Каякинг по реке Нарев', 'Наблюдение за птицами', 'Фотография']
      },
      visitRecommendations: 'Парк известен уникальной долиной Нарев с многочисленными протоками и болотами. Парк является важным местом для многих видов птиц. Многие участки доступны только с гидом или на лодке. Рекомендуется посетить в сезон миграции птиц (весна и осень).'
    }
  },
  {
    id: 'bebrzanski-pn',
    name: 'Biebrzański Park Narodowy',
    description: 'Самый большой национальный парк с обширными болотами, дом лосей и уникальной природы.',
    coordinates: [22.7, 53.5],
    category: 'park narodowy',
    image: 'https://picsum.photos/seed/bebrzanski-pn/800/600',
    details: {
      location: 'Подляское воеводство, долина Бобры',
      establishmentDate: '9 сентября 1993',
      area: {
        park: '592,23 км²',
        bufferZone: '668,24 км²'
      },
      protection: {
        strict: '15%',
        active: '75%',
        landscape: '10%'
      },
      protectionPrograms: ['Рамсарская конвенция', 'Орнитологический заповедник IBA'],
      symbol: 'Лось',
      tickets: 'Вход платный, билеты в кассах парка',
      nearestCity: 'Осовец-Твердза, Граево',
      nearestTrainStation: 'Осовец-Твердза',
      headquarters: 'ул. 3 Мая 19, 19-110 Гонёндз',
      phone: '+48 (85) 738 06 20',
      website: 'www.biebrza.org.pl',
      museums: ['Музей BPN в Осовце-Твердзе'],
      activities: {
        hiking: '470 км',
        cycling: '200 км',
        skiing: 'Лыжные трассы',
        educationalTrails: '25 км',
        other: ['Каякинг по реке Бобры', 'Наблюдение за птицами', 'Наблюдение за лосями', 'Фотография']
      },
      visitRecommendations: 'Самый большой национальный парк в Польше с обширными болотами. Парк является домом для лосей и многих видов птиц. Парк особенно популярен среди орнитологов. Рекомендуется посетить в сезон миграции птиц (весна и осень) и во время гона лосей (сентябрь). Многие участки доступны только с гидом.'
    }
  },
];
