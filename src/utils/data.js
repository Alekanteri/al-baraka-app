import { HiOutlineDesktopComputer } from "react-icons/hi";
import { CiMobile1 } from "react-icons/ci";
import { MdWorkspacesOutline } from "react-icons/md";
export const projectExperience = [
  {
    name: "Website Design",
    projects: 76,
    icon: HiOutlineDesktopComputer,
    bg: "#286F6C",
  },
  {
    name: "Mobile App Design",
    projects: 63,
    icon: CiMobile1,
    bg: "#EEC048",
  },
  {
    name: "Brand Identity",
    projects: 47,
    icon: MdWorkspacesOutline,
    bg: "#F26440",
  },
];

export const WhatDoIHelp = [
  "I will help you with finging a solution and solve your problem, We use process design to create digital products. Besides that also help their business.",
  "We use process design to create digital products. Besides that also help their business",
];

export const workExp = [
  {
    place: "Self-Employed, Brisbane",
    tenure: "Aug 2014 - Sep 2016",
    role: "Одобрение в 98% случаев",
    detail:
      "Мы не требуем официального дохода, сбора справок и т.д. Если есть постоянный доход, то вы получите рассрочку",
  },
  {
    place: "New Man Services",
    tenure: "Aug 2014 - Sep 2016",
    role: "Самые низкие тарифы",
    detail:
      "Наша наценка на товар минимальная. Поэтому вы покупаете товар почти по стоимости магазина",
  },
  {
    place: "Global Solution",
    tenure: "Aug 2014 - Sep 2016",
    role: "Большая сеть партнеров",
    detail:
      "Мы сотрудничаем с многими магазинами. Вы сможете взять в рассрочку практически любой товар, который вам необходим",
  },
  {
    place: "Global Solution",
    tenure: "Aug 2014 - Sep 2016",
    role: "Человеческое отношение к клиентам",
    detail:
      "Наши клиенты - это наши друзья. К каждому мы относимся с уважением и вниманием. Стараемся максимально помочь при получении рассрочки и желаемого товара",
  },
];

export const partners = [
  {
    img: "../partners/1.png",
    title: "ИНГСТРОЙ Назрань",
    data: {
      industry: "Стройматериалы",
      tel: "8(964)028-78-88",
      time: "9:00 – 18:00",
      location: "г. Назрань, Муталиева 199",
    },
  },
  {
    img: "../partners/1.png",
    title: "ИНГСТРОЙ Плиево",
    data: {
      industry: "Стройматериалы",
      tel: "8(938)005-55-35",
      time: "9:00 – 18:00",
      location: "Плиево, пересечение улиц Осканова и Эсмурзиева",
    },
  },
  {
    img: "../partners/1.png",
    title: "ИНГСТРОЙ Малгобек",
    data: {
      industry: "Стройматериалы",
      tel: "8(929) 860-74-44",
      time: "9:00 – 18:00",
      location: "с. Сагопши, ул. Толстого 34",
    },
  },
  {
    img: "../partners/3.png",
    title: "Ламинат Холл Назрань",
    data: {
      industry: "Ламинат",
      tel: "+7 (963) 399-17-77",
      inst: "laminat_hall",
      time: "9:30 – 18:30",
      location: "Назрань, ул. Картоева, 148",
    },
  },
  {
    img: "../partners/3.png",
    title: "Ламинат Холл Экажево",
    data: {
      industry: "Ламинат",
      tel: "8(938) 007-77-677",
      inst: "laminat_hall",
      time: "9:30 – 18:30",
      location: "Экажево, ул. М.С. Экажева 3",
    },
  },
  {
    img: "../partners/4.png",
    title: "Моби Кинг Назрань",
    data: {
      industry: "Магазин электроники",
      tel: "+7 (962) 637-80-87",
      inst: "mobi_king.ru",
      time: "9:00 - 18:00",
      location: "г. Назрань, ул. Муталиева, 34",
    },
  },
  {
    img: "../partners/4.png",
    title: "Моби Кинг Сунжа",
    data: {
      industry: "Магазин электроники",
      tel: "+7 (928) 439-87-771",
      inst: "mobi_king.ru",
      time: "9:00 - 18:00",
      location: "г. Сунжа, ТД Сийг, маг. 108",
    },
  },
  {
    img: "../partners/5.png",
    title: "Моби Кинг Сунжа",
    data: {
      industry: "Центр Мебели и Дизайна",
      tel: "+7 (960) 435-22-55",
      inst: "cmd_06",
      time: "9:00 - 18:00",
      location: "Г.Назрань ул.Тангиева 10",
    },
  },
  {
    img: "../partners/2.jpeg",
    title: "ИНГАВТО",
    data: {
      industry: "Автозапчасти на все авто",
      tel: "+7 938) 026-66-44",
      inst: "ingavto06",
      time: "9:00 - 18:00",
      location: "г. Назрань, ул. Вазовская, 1",
    },
  },
  {
    img: "../partners/6.jpg",
    title: "Обои Новострой",
    data: {
      industry: "Автозапчасти на все авто",
      tel: "+7 (938) 076-88-33",
      inst: "oboi.novostroi",
      time: "9:00 - 18:00",
      location: "АО Насыр-Корт, ул. А. Тутаевой, 24",
    },
  },
];

export const sliderSettings = {
  dots: true,
  autoplay: true,
  infinite: true,
  autoplaySpeed: 3000,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  touchMove: true,
  useCSS: true,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
