const burger = document.getElementById("burger");
const navLinks = document.getElementById("nav-links");
const langSwitcher = document.getElementById("langSwitcher");

burger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

const translations = {
  ru: {
    home: "Главная",
    shop: "Магазин",
    aboutNav: "О нас",
    contact: "Контакты",
    headerContentTitle: "iNTER HOUSE",
    // headerContentDescription: `здесь вы найдёте эко продукцию
    // из натуральных инградиентов для вашей здоровой кожи!`,
    descriptionTitle: "Новая линия косметики",
    descriptionAboutUs: `Добро пожаловать в наш салон Silk Green Theraphy, где вы можете найти наш бредовый
    серум для лица и спа для рук. Наш бредовый Серум для лица и рук это
    жидкость с легкой, текучей структурой высокой концентрации,
    обогащенная биологическими веществами и натуральными компонентами.
    Эко-продукция способна проникать в глубокие слои кожи и останавливать
    быстрое старение, даруя вашему лицу молодость и свежесть.`,
    contactWithUsTitle: "Свяжитесь с нами",
    contactWithUsDesc:
      "Данный информационный блок содержит полные контактные данные нашей компании, включая номера телефонов, почтовый адрес, адрес электронной почты, а также ссылку на карту с указанием местоположения.",
    email: "Эл.письмо:",
    phoneNumber: "Позвоните нам:",
    address: "АДРЕС:",
    addressV: "Город Фаргона, ул. Кувачой дом 240А",
    titleOfSecond: "Преподаватели"
  },
  en: {
    home: "Home",
    shop: "Shop",
    aboutNav: "About us",
    contact: "Contacts",
    headerContentTitle: "Silk Green Theraphy",
    headerContentDescription: `Here you will find eco products made 
    from natural ingredients for your healthy skin!`,
    descriptionTitle: "New line of cosmetics",
    descriptionAboutUs: `Welcome to our salon Silk Green Theraphy, where you can find our branded
    face serum and hand spa. Our branded Face and Hand Serum is a
    liquid with a light, flowing structure of high concentration,
    enriched with biological substances and natural components.
    Eco-products are able to penetrate into the deep layers of the skin and stop
    rapid aging, giving your face youth and freshness.`,
    contactWithUsTitle: "Contact us",
    contactWithUsDesc:
    "This information section provides the complete contact details of our company, including phone numbers, mailing address, email, and a map link indicating our location.",
    email: "E-Mail:",
    phoneNumber: "Call To Us:",
    address: "Address:",
    addressV: "Fargona city, Kuvachoy street, house 240A",
    titleOfSecond: "Teachers"
  },
  uz: {
    home: "Bosh sahifa",
    shop: "Do‘kon",
    aboutNav: "Mahsulotlar haqida",
    contact: "Aloqa",
    headerContentTitle: "Silk Green Theraphy",
    headerContentDescription: `Bu yerda siz sog‘lom teringiz uchun tabiiy ingredientlardan tayyorlangan ekologik mahsulotlarni topasiz!`,
    descriptionTitle: "Yangi kosmetika liniyasi",
    descriptionAboutUs: `Bizning salonimizga xush kelibsiz, Silk Green Theraphy yerda siz yuz uchun serum va qo‘llar uchun spa mahsulotlarimizni topishingiz mumkin. 
    Yuz va qo‘l uchun mo‘ljallangan ushbu serum yengil, suyuq tuzilishga ega bo‘lib, yuqori konsentratsiyali biologik moddalar va tabiiy komponentlar bilan boyitilgan. 
    Ekologik mahsulot terining chuqur qatlamlariga kirib borib, tez qarishni sekinlashtiradi va yuzingizga yoshlik hamda yangilik bag‘ishlaydi.`,
    contactWithUsTitle: "Biz bilan bog‘laning",
    contactWithUsDesc:
    "Ushbu ma’lumot bo‘limida kompaniyamizning to‘liq aloqa ma’lumotlari keltirilgan: telefon raqamlari, pochta manzili, elektron pochta hamda joylashuvimizni ko‘rsatuvchi xarita havolasi.",
    email: "Elektron pochta:",
    phoneNumber: "Telefon:",
    address: "MANZIL:",
    addressV: "Farg‘ona shahri, Kuvochoy ko‘chasi, 240A-uy",
    titleOfSecond: "o'qituvchilar"
  },
};

function setLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    el.textContent = translations[lang][key];
  });
}

setLanguage("ru");

langSwitcher.addEventListener("change", (e) => {
  setLanguage(e.target.value);
});
