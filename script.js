// ========== DATA ==========
const drinks = [
  {
    id: "4",
    nameAr: " كنافة نابلسية",
    nameEn: "",
    price: 500,
    category: "konafa",
    image: "1.png",
    desc: "نوع كنـافة ناعمة بتتعمل بالسمنة البلدي محشية جبنة عكاوي ونابلسية.",
    ingredients: []
  },
   {
    id: "5",
    nameAr: " كنافة عربية",
    nameEn: "",
    price: 500 ,
    category: "konafa",
    image: "2.png",
    desc: "حلوى عربية مصنوعة من السمن والسكر والزبدة الفلاحي ومحشوة بالجوز",
    ingredients: []
  },
  { id: "9000",
    nameAr: " كنافة اسطنبولية",
    nameEn: "",
    price: 580 ,
    category: "konafa",
    image: "2000.jpg",
    desc: "نوع كنـافة خشنة بتتعمل بالسمنة البلدي محشية جبنة عكاوي ونابلسية",
    ingredients: []
  },
  {
    id: "400",
    nameAr: "  اسطنبولية و عربية نصف و نصف",
    nameEn: "",
    price: 540,
    category: "konafa",
    image: "3.png",
    desc: "",
    ingredients: []
  },
  {
    id: "400",
    nameAr: "   اسطنبولية و نابلسية نصف و نصف",
    nameEn: "",
    price: 540,
    category: "konafa",
    image: "503.JPG",
    desc: "",
    ingredients: []
  },
  {
    id: "504",
    nameAr: " نابلسية و عربية نصف و نصف ",
    nameEn: "",
    price: 135,
    category: "konafa",
    image: "504.JPG",
    desc: "",
    ingredients: []
  },
   {
    id: "1",
    nameAr: "صحن نابلسية",
    nameEn: "",
    price: 90,
    category: "konafa",
    image: "1.png",
    desc: "نوع كنـافة ناعمة بتتعمل بالسمنة البلدي محشية جبنة عكاوي ونابلسية.",
    ingredients: []
  },
  {
    id: "2",
    nameAr: "صحن اسطنبولية",
    nameEn: " نوع خشنة ناعمة بتتعمل بالسمنة البلدي محشية جبنة عكاوي ونابلسية",
    price: 100 ,
    category: "konafa",
    image: "2000.jpg",
    desc: "",
    ingredients: []
  },
  {
    id: "2",
    nameAr: "صحن عربية",
    nameEn: "",
    price: 90 ,
    category: "konafa",
    image: "2.png",
    desc: "حلوى عربية مصنوعة من السمن والسكر والزبدة الفلاحي ومحشوة بالجوز",
    ingredients: []
  },
  {
    id: "3",
    nameAr: "صحن اسطنبولية و عربية",
    nameEn: "",
    price: 135,
    category: "konafa",
    image: "3.png",
    desc: "",
    ingredients: []
  },
  {
    id: "503",
    nameAr: "صحن اسطنبولية و نابلسية",
    nameEn: "",
    price: 135,
    category: "konafa",
    image: "503.JPG",
    desc: "",
    ingredients: []
  },
  {
    id: "504",
    nameAr: "صحن نابلسية و عربية",
    nameEn: "",
    price: 135,
    category: "konafa",
    image: "504.JPG",
    desc: "",
    ingredients: []
  },
  {
    id: "1000000",
    nameAr: " بورمة قشطة ",
    nameEn: "",
    price: 500 ,
    category: "konafa",
    image: "1000000.png",
    desc: "معمول من شعيرات الكنافة، بتتلف على شكل أصابع ومحشية قشطة",
    ingredients: []
  },
  {
    id: "500",
    nameAr: " كلاچ ",
    nameEn: "",
    price: 400 ,
    category: "konafa",
    image: "500.JPG",
    desc: "رقائق الجلاش محشوة بالقشطة مع اللبن والزبدة",
    ingredients: []
  },
  
  // ✅ مشكل فستق حلبي
  {
    id: "mishkal-fustuk",
    nameAr: "مشكل فستق حلبي",
    nameEn: "",
    price: 1750,
    category: "baqlawa",
    image: "7.png",
    images: [
      "7.png",
      "6.png",
      "8.png",
      "10.png",
      "13.png",
      "17.png"
    ],
    desc: "مزيج فاخر من أفضل أنواع البقلاوة بالفستق الحلبي الممتاز( قابل لتعديل الاصناف علي حسب زوقك)",
    ingredients: ["حبوب قهوة عربية", "ماء", "رغوة حليب"]
  },

  {
    id: "mishkal-fustuk-mix",
    nameAr: " مشكل فستق حلبي مع لوز و كاجو",
    nameEn: "",
    price: 1250,
    category: "baqlawa",
    image: "7.png",
    images: [
      "7.png",
      "27.png",
      "6.png",
      "23.png",
      "20.png",
      "11.png"
    ],
    desc: "مزيج فاخر من أفضل أنواع البقلاوة بالفستق الحلبي الممتاز( قابل لتعديل الاصناف علي حسب زوقك)",
    ingredients: ["حبوب قهوة عربية", "ماء", "رغوة حليب"]
  },

  {
    id: "6",
    nameAr: "بورما فستق حلبي",
    nameEn: "",
    price: 1800,
    category: "baqlawa",
    image: "6.png",
    desc: "حلوى عربية مصنوعة من عجينة الكــنافة و محشوة بالفستق نخب أول",
    ingredients: ["حبوب قهوة عربية", "ماء", "رغوة حليب"]
  },
   {
    id: "7",
    nameAr: "عش البلبل فستق حلبي",
    nameEn: "",
    price: 1650,
    category: "baqlawa",
    image: "7.png",
    desc: "حلوى من الكــنافة على شكل عش دائري محشوة فستق نخب أول",
    ingredients: ["حبوب قهوة عربية", "ماء", "رغوة حليب"]
  },
  {
    id: "8",
    nameAr: "بلوريا حمراء",
    nameEn: "",
    price: 1800,
    category: "baqlawa",
    image: "8.png",
    desc: "حلوي شامية من خيوط الكنافة محشوة فستق نخب أول",
    ingredients: ["حبوب قهوة عربية", "ماء", "رغوة حليب"]
  },
  {
    id: "9",
    nameAr: "بلوريا بيضاء",
    nameEn: "",
    price: 1800,
    category: "baqlawa",
    image: "9.png",
    desc: "حلوي شامية من خيوط الكنافة محشوة فستق نخب أول",
    ingredients: ["حبوب قهوة عربية", "ماء", "رغوة حليب"]
  },
  {
    id: "10",
    nameAr: "صره فستق حلبي",
    nameEn: "",
    price: 1950,
    category: "baqlawa",
    image: "10.png",
    desc: "رقائق الجلاش محشوة بين الرقائق بالفستق نخب أول,ومحشوة بعدها بالفستق الصحيح أيضاً",
    ingredients: ["حبوب قهوة عربية", "ماء", "رغوة حليب"]
  },
  {
    id: "11",
    nameAr: "اسيا فستق حلبي",
    nameEn: "",
    price: 1950,
    category: "baqlawa",
    image: "11.png",
    desc: "حلوى شرقية مصنوعة من طبقات الجلاش، تُحشى بالفستق نخب أول",
    ingredients: ["حبوب قهوة عربية", "ماء", "رغوة حليب"]
  },
  {
    id: "12",
    nameAr: "كل واشكر فستق حلبي",
    nameEn: "",
    price: 1550,
    category: "baqlawa",
    image: "12.png",
    desc: "حلوي عربية فاخرة تصنع من عجينة الجلاش المحشوة فستق نخب أول",
    ingredients: ["حبوب قهوة عربية", "ماء", "رغوة حليب"]
  },
  {
    id: "13",
    nameAr: "دولمة فستق حلبي",
    nameEn: "",
    price: 1850,
    category: "baqlawa",
    image: "13.png",
    desc: "حلوي ناعمة من رقائق الجلاش محشية علي طولها بالفستق نخب أول",
    ingredients: ["حبوب قهوة عربية", "ماء", "رغوة حليب"]
  },
  
  {
    id: "15",
    nameAr: "اساور الست فستق حلبي",
    nameEn: "",
    price: 750,
    category: "baqlawa",
    image: "15.png",
    desc: "حلوى من عجينة الجلاش ملفوفة بشكل دائري وعليها رشة الفستق",
    ingredients: ["حبوب قهوة عربية", "ماء", "رغوة حليب"]
  },
  {
    id: "16",
    nameAr: "سنيورة فستق حلبي",
    nameEn: "",
    price: 1500,
    category: "baqlawa",
    image: "16.png",
    desc: "حلوى من عجينة الجلاش ملفوفة وداخلها فستق",
    ingredients: ["حبوب قهوة عربية", "ماء", "رغوة حليب"]
  },
  {
    id: "900",
    nameAr: "لوكم فستق حلبي",
    nameEn: "",
    price: 1950,
    category: "baqlawa",
    image: "505.JPG",
    desc: "لوكم طري محشو بكثافة بقطع الفسدق المحمص",
    ingredients: ["حبوب قهوة عربية", "ماء", "رغوة حليب"]
  },
  {
    id: "17",
    nameAr: "بستاشيو ابو السعود",
    nameEn: "",
    price: 2200,
    category: "baqlawa",
    image: "17.png",
    desc: "مزيج من الشيكولاتة البلجيكية وعجينة الكنافة محشوة بالفستق البستاشيو نخب أول",
    ingredients: ["حبوب قهوة عربية", "ماء", "رغوة حليب"]
  },
  {
    id: "18",
    nameAr: "بقلاوة فستق",
    nameEn: "",
    price: 1250,
    category: "baqlawa",
    image: "18.png",
    desc: "حلوي شرقية عبارة عن طبقات الجلاش محشوة بالفستق الحلو نخب أول",
    ingredients: ["حبوب قهوة عربية", "ماء", "رغوة حليب"]
  },
 
  // ✅ مشكل لوز
  {
    id: "mishkal-loz",
    nameAr: "مشكل لوز",
    nameEn: "",
    price: 750,
    category: "baqlawa",
    image: "20.png",
    images: [
      "20.png",
      "21.png",
      "23.png",
      "24.png",
      "26.png",
      "30.png"
    ],
    desc: "مزيج فاخر من أفضل أنواع البقلاوة باللوز الممتاز( قابل لتعديل الاصناف علي حسب زوقك)",
    ingredients: ["حبوب قهوة عربية", "ماء", "رغوة حليب"]
  },

  {
    id: "10000",
    nameAr: "كنافة لوز",
    nameEn: "",
    price: 950 ,
    category: "baqlawa",
    image: "10000.png",
    desc: "حلوى شرقية من خيوط الكنافة المحمّصة ومحشية لوز ",
    ingredients: []
  },
  
  {
    id: "20",
    nameAr: "بورما لوز",
    nameEn: "",
    price: 900,
    category: "baqlawa",
    image: "20.png",
    desc: "حلوى عربية مصنوعة من عجينة الكــنافة و محشوة باللوز الحلو",
    ingredients: ["حبوب قهوة عربية", "ماء", "رغوة حليب"]
  },
  {
    id: "21",
    nameAr: "عش البلبل لوز",
    nameEn: "",
    price: 680,
    category: "baqlawa",
    image: "21.png",
    desc: "حلوى من الكنافة على ��كل دائري محشوة باللوز الحلو",
    ingredients: ["حبوب قهوة عربية", "ماء", "رغوة حليب"]
  },
  {
    id: "23",
    nameAr: "بقلاوة اسطنبولي لوز",
    nameEn: "",
    price: 750,
    category: "baqlawa",
    image: "23.png",
    desc: "حلوى تركية عبارة عن طبقات جلاش محشية لوز الحلو",
    ingredients: ["حبوب قهوة عربية", "ماء", "رغوة حليب"]
  },
  {
    id: "24",
    nameAr: "بقلاوة لوز",
    nameEn: "",
    price: 600,
    category: "baqlawa",
    image: "24.png",
    desc: "حلوي شرقية عبارة عن طبقات من الجلاش محشوة باللوز الحلو",
    ingredients: ["حبوب قهوة عربية", "ماء", "رغوة حليب"]
  },
   {
    id: "25",
    nameAr: "صرة لوز",
    nameEn: "",
    price: 600,
    category: "baqlawa",
    image: "25.png",
    desc: "رقائق الجلاش محشوة بين الرقائق باللوز الحلو، محشوة بعدها باللوز المبشور أيضاً",
    ingredients: ["حبوب قهوة عربية", "ماء", "رغوة حليب"]
  },
  {
    id: "26",
    nameAr: "كل واشكر لوز",
    nameEn: "",
    price: 700,
    category: "baqlawa",
    image: "26.png",
    desc: "حلوي عربية فاخرة تصنع من عجينة الجلاش المحشوة لوز حلو",
    ingredients: ["حبوب قهوة عربية", "ماء", "رغوة حليب"]
  },
  {
    id: "27",
    nameAr: "اصابع لوز",
    nameEn: "",
    price: 750,
    category: "baqlawa",
    image: "27.png",
    desc: "حلوى من رقائق الجلاش محشية باللوز الحلو، ملفوفة على شكل أصابع ومحمّرة",
    ingredients: ["حبوب قهوة عربية", "ماء", "رغوة حليب"]
  },
  
  {
    id: "29",
    nameAr: "بقلاوة اسطنبولي جوز",
    nameEn: "",
    price: 850,
    category: "baqlawa",
    image: "29.png",
    desc: "حلوى تركية عبارة  عن طبقات جلاش رفيعة ومحشية بالجوز الحلو",
    ingredients: ["حبوب قهوة عربية", "ماء", "رغوة حليب"]
  },
  {
    id: "30",
    nameAr: "عش البلبل كاجو",
    nameEn: "",
    price: 800,
    category: "baqlawa",
    image: "30.png",
    desc: "تصنع من شعر الكنافة على شكل عش دائري محشوة بحبات الكاجو",
    ingredients: ["حبوب قهوة عربية", "ماء", "رغوة حليب"]
  },
  {
    id: "31",
    nameAr: "اصابع كاجو",
    nameEn: "",
    price: 800,
    category: "baqlawa",
    image: "31.png",
    desc: "حلوى من رقائق الجلاش ملفوفة على شكل أصابع ومحشية بالكاجو",
    ingredients: ["حبوب قهوة عربية", "ماء", "رغوة حليب"]
  },
   {
    id: "32",
    nameAr: "وربات لوز",
    nameEn: "",
    price: 900,
    category: "baqlawa",
    image: "32.png",
    desc: "رقائق الجلاش المحشية بعجينة اللوز الحلو",
    ingredients: ["حبوب قهوة عربية", "ماء", "رغوة حليب"]
  },
     {
    id: "501",
    nameAr: "وربات قشطة" ,
    nameEn: "",
    price: 500,
    category: "konafa",
    image: "501.JPG",
    desc: "رقائق جلاش محشية قشطة",
    ingredients: ["حبوب قهوة عربية", "ماء", "رغوة حليب"]
  },
  {
    id: "28",
    nameAr: "معمول عجوة",
    nameEn: "",
    price: 700,
    category: "baqlawa",
    image: "28.png",
    desc: "حلوى تقليدية معمول من عجينة السميد ومحشو بمعجون التمر العجوة، يُشكّل بالقوالب",
    ingredients: ["حبوب قهوة عربية", "ماء", "رغوة حليب"]
  },
  {
    id: "280",
    nameAr: "معمول جوز",
    nameEn: "",
    price: 900,
    category: "baqlawa",
    image: "280.png",
    desc: "حلوى تقليدية معمول من عجينة السميد ومحشو باللوز، يُشكّل بالقوالب",
    ingredients: ["حبوب قهوة عربية", "ماء", "رغوة حليب"]
  },
  {
    id: "505",
    nameAr: "لوكم فسدق حلبي",
    nameEn: "",
    price: 1950,
    category: "baqlawa",
    image: "506.JPG",
    desc: "لوكم طري محشو بكثافة بقطع الفسدق المحمص و الكريمة ",
    ingredients: ["حبوب قهوة عربية", "ماء", "رغوة حليب"]
  },
  {
    id: "505b",
    nameAr: "لوكم بندق ",
    nameEn: "",
    price: 950,
    category: "baqlawa",
    image: "506.JPG",
    desc: " لوكم طري محشو بكثافة بقطع البندق المحمص",
    ingredients: ["حبوب قهوة عربية", "ماء", "رغوة حليب"]
  },
  
    {
    id: "3000",
    nameAr: "غريبة",
    nameEn: "",
    price: 400,
    category: "baqlawa",
    image: "IMG_1.JPG",
    desc: " حلوى تقليدية مصنوعة من الدقيق والسمن والسكر، تُشكّل على هيئة كرات وتُزيّن بالفستق ",
    ingredients: ["حبوب قهوة عربية", "ماء", "رغوة حليب"]
  },
  {
    id: "33",
    nameAr: "نمورة بالزبد البلدي",
    nameEn: "",
    price: 360,
    category: "namora",
    image: "33.png",
    desc: "حلوى عربية مصنوعة من السمن والسكر والزبدة الفلاحي",
    ingredients: ["إسبريسو", "حليب", "رغوة حليب", "قرفة"]
  },
  {
    id: "34",
    nameAr: "نمورة محشية لوز",
    nameEn: "",
    price: 420,
    category: "namora",
    image: "IMG_2.JPG",
    desc: "حلوى عربية مصنوعة من السمن والسكر والزبدة الفلاحي ومحشوة باللوز الحلو",
    ingredients: ["إسبريسو", "حليب", "رغوة حليب", "قرفة"]
  }
];

// ========== STATE MANAGEMENT ==========
const state = {
  currentFilter: "none",
  selectedDrink: null,
  currentImageIndex: {}
};

// ========== DOM ELEMENTS ==========
const DOM = {
  loadingScreen: document.getElementById("loading-screen"),
  navbar: document.getElementById("navbar"),
  drinksGrid: document.getElementById("drinks-grid"),
  filterBtns: document.querySelectorAll(".filter-btn"),
  modalOverlay: document.getElementById("modal-overlay"),
  toast: document.getElementById("toast"),
  modalClose: document.getElementById("modal-close")
};

// ========== INITIALIZATION ==========
document.addEventListener("DOMContentLoaded", () => {
  renderDrinks();
  setupEventListeners();
  hideLoadingScreen();
});

// ========== LOADING SCREEN ==========
function hideLoadingScreen() {
  setTimeout(() => {
    DOM.loadingScreen.classList.add("fade-out");
    setTimeout(() => {
      DOM.loadingScreen.style.display = "none";
    }, 800);
  }, 2000);
}

// ========== NAVBAR SCROLL EFFECT ==========
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    DOM.navbar.classList.add("scrolled");
  } else {
    DOM.navbar.classList.remove("scrolled");
  }
});

// ========== FILTER FUNCTIONALITY ==========
const baqlawaTypes = [
  { id: 'fustuk', name: 'بقلاوة فستق', keys: ['فستق', 'بستاشيو', 'بلوريا', 'صره', 'اسيا', 'كل واشكر فستق', 'دولمة', 'اساور', 'سنيورة', 'لوكم فستق', 'مشكل فستق'] },
  { id: 'loz', name: 'بقلاوة لوز', keys: ['لوز','لوكم بندق','كاجو','بقلاوة اسطنبولي جوز', 'وربات لوز', 'مشكل لوز'] },
  { id: 'mix', name: 'أصناف متنوعة', keys: [  'عجوة' ,'معمول جوز','غريبة'] }
];

function filterDrinks(category) {
  state.currentFilter = category;
  const subContainer = document.getElementById("sub-filters-container");
  
  DOM.filterBtns.forEach(btn => {
    btn.classList.toggle("active", btn.dataset.filter === category);
  });

  if (category === "baqlawa") {
    subContainer.style.display = "flex";
    subContainer.innerHTML = baqlawaTypes.map(type => `
      <button class="filter-btn sub-btn" onclick="filterSubCategory('${type.id}')" style="background: #1a1a1a; border: 1px solid #d4af37; font-size: 0.9rem; padding: 5px 15px;">
        ${type.name}
      </button>
    `).join("");
    
    DOM.drinksGrid.innerHTML = `<p style="color:#aaa; width:100%; text-align:center;">اختر نوع البقلاوة المفضل لديك</p>`;
  } else {
    subContainer.style.display = "none";
    renderDrinks();
  }
}

function filterSubCategory(subId) {
  const typeData = baqlawaTypes.find(t => t.id === subId);
  
  const filtered = drinks.filter(d => 
    d.category === "baqlawa" && 
    typeData.keys.some(key => d.nameAr.includes(key))
  );

  document.querySelectorAll('.sub-btn').forEach(btn => {
    btn.style.background = (btn.innerText === typeData.name) ? "#d4af37" : "#1a1a1a";
    btn.style.color = (btn.innerText === typeData.name) ? "#000" : "#fff";
  });

  displayFilteredDrinks(filtered);
}

// ✅ دالة عرض المنتجات
function displayFilteredDrinks(data) {
  DOM.drinksGrid.innerHTML = "";
  if (data.length === 0) {
    DOM.drinksGrid.innerHTML = `<p style="color:#aaa; width:100%; text-align:center;">قريباً...</p>`;
    return;
  }
  
  data.forEach((drink, index) => {
    let card;
    
    if (drink.images && drink.images.length > 1) {
      card = createCarouselCard(drink);
    } else {
      card = createDrinkCard(drink);
    }
    
    DOM.drinksGrid.appendChild(card);
    setTimeout(() => card.classList.add("visible"), index * 50);
  });
}

// ✅ دالة إنشاء كرت الكاروسيل
function createCarouselCard(drink) {
  const card = document.createElement("div");
  card.className = "drink-card carousel-card";
  
  const carouselId = `carousel-${drink.id}`;
  const images = drink.images || [drink.image];
  
  if (!state.currentImageIndex[carouselId]) {
    state.currentImageIndex[carouselId] = 0;
  }

  const slidesHTML = images.map((img, index) => `
    <div class="carousel-slide" data-index="${index}">
      <img src="${img}" alt="${drink.nameAr}" loading="lazy" />
    </div>
  `).join('');

  card.innerHTML = `
    <div class="carousel-wrapper">
      <div class="carousel-container" id="${carouselId}-container">
        <div class="carousel-track" id="${carouselId}-track">
          ${slidesHTML}
        </div>
        
        <div class="carousel-dots">
          ${images.map((_, i) => `
            <span class="dot ${i === 0 ? 'active' : ''}" onclick="goToImageSlide('${carouselId}', ${i})"></span>
          `).join('')}
        </div>
      </div>
    </div>
    
    <div class="card-body" style="padding: 12px;">
      <div style="text-align: right; width: 100%;">
        <div class="card-name-ar" style="font-weight: 700; font-size: 1.1rem; color: #fff;">
          ${drink.nameAr}
        </div>
        <div class="card-desc-simple" style="color: #aaa; font-size: 0.85rem; margin-top: 4px; line-height: 1.3;">
          ${drink.desc || ''}
        </div>
      </div>

      <!-- ✅ السعر فقط بدون زر -->
      <div style="display: flex; justify-content: center; align-items: center; margin-top: 12px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
        <div class="card-price" style="margin: 0;">
          <strong style="color: #d4af37; font-size: 1.3rem;">${drink.price}</strong>
          <small style="color: #d4af37; margin-right: 5px;">ج.م</small>
        </div>
      </div>
    </div>
  `;
  
  setTimeout(() => {
    const container = document.getElementById(`${carouselId}-container`);
    if (container) {
      container.addEventListener('wheel', (e) => {
        e.preventDefault();
        const direction = e.deltaY > 0 ? 1 : -1;
        changeImageSlide(carouselId, direction);
      }, { passive: false });
      
      let touchStartX = 0;
      container.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
      });
      
      container.addEventListener('touchend', (e) => {
        const touchEndX = e.changedTouches[0].clientX;
        const direction = touchStartX > touchEndX ? 1 : -1;
        if (Math.abs(touchStartX - touchEndX) > 50) {
          changeImageSlide(carouselId, direction);
        }
      });
    }
  }, 100);
  
  return card;
}

// ========== CREATE REGULAR CARD ==========
function createDrinkCard(drink) {
  const card = document.createElement("div");
  card.className = "drink-card";

  card.innerHTML = `
    <div class="card-img-wrap">
      <img src="${drink.image || 'logo.png'}" alt="${drink.nameAr}" loading="lazy" />
      <div class="card-overlay"></div>
    </div>
    <div class="card-body" style="padding: 12px;">
      <div class="card-row" style="margin-bottom: 8px;">
        <div style="text-align: right; width: 100%;">
          <div class="card-name-ar" style="font-weight: 700; font-size: 1.1rem; color: #fff;">${drink.nameAr}</div>
          
          <div class="card-desc-simple" style="color: #aaa; font-size: 0.85rem; margin-top: 4px; line-height: 1.3;">
            ${drink.desc || ''}
          </div>
        </div>
      </div>

      <!-- ✅ السعر فقط بدون زر -->
      <div style="display: flex; justify-content: center; align-items: center; margin-top: 12px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
        <div class="card-price" style="margin: 0;">
          <strong style="color: #d4af37; font-size: 1.3rem;">${drink.price}</strong>
          <small style="color: #d4af37; margin-right: 5px;">ج.م</small>
        </div>
      </div>
    </div>
  `;
  
  return card;
}

// ✅ تحريك الكاروسيل عند السكرول
function changeImageSlide(carouselId, direction) {
  const track = document.getElementById(`${carouselId}-track`);
  
  if (!track) return;
  
  const slides = track.querySelectorAll('.carousel-slide').length;
  let newIndex = (state.currentImageIndex[carouselId] || 0) + direction;
  
  if (newIndex >= slides) newIndex = 0;
  if (newIndex < 0) newIndex = slides - 1;
  
  state.currentImageIndex[carouselId] = newIndex;
  
  track.style.transform = `translateX(-${newIndex * 100}%)`;
  updateImageDots(carouselId, newIndex);
}

// ✅ الانتقال المباشر للصورة
function goToImageSlide(carouselId, index) {
  const track = document.getElementById(`${carouselId}-track`);
  
  if (!track) return;
  
  state.currentImageIndex[carouselId] = index;
  track.style.transform = `translateX(-${index * 100}%)`;
  updateImageDots(carouselId, index);
}

// ✅ تحديث النقاط
function updateImageDots(carouselId, index) {
  const container = document.getElementById(`${carouselId}-container`);
  
  if (!container) return;
  
  const dots = container.querySelectorAll('.dot');
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
}

// ========== MODAL MANAGEMENT ==========
function openModal(drink) {
  state.selectedDrink = drink;
  
  document.getElementById("modal-img").src = drink.image;
  document.getElementById("modal-name-ar").textContent = drink.nameAr;
  document.getElementById("modal-name-en").textContent = drink.nameEn;
  document.getElementById("modal-price").textContent = drink.price;
  document.getElementById("modal-desc").textContent = drink.desc;
  
  const ingList = document.getElementById("modal-ing-list");
  ingList.innerHTML = drink.ingredients.map(ing => `<li>${ing}</li>`).join("");
  
  DOM.modalOverlay.classList.remove("hidden");
  DOM.modalOverlay.classList.add("open");
}

function closeModal() {
  DOM.modalOverlay.classList.remove("open");
  DOM.modalOverlay.classList.add("closing");
  
  setTimeout(() => {
    DOM.modalOverlay.classList.add("hidden");
    DOM.modalOverlay.classList.remove("closing");
  }, 300);
}

// ========== TOAST NOTIFICATIONS ==========
function showToast(message) {
  DOM.toast.textContent = message;
  DOM.toast.classList.remove("hidden");
  DOM.toast.classList.add("show");
  
  setTimeout(() => {
    DOM.toast.classList.remove("show");
    setTimeout(() => {
      DOM.toast.classList.add("hidden");
    }, 400);
  }, 2500);
}

// ========== EVENT LISTENERS ==========
function setupEventListeners() {
  DOM.filterBtns.forEach(btn => {
    btn.addEventListener("click", () => filterDrinks(btn.dataset.filter));
  });
  
  DOM.modalClose.addEventListener("click", closeModal);
  DOM.modalOverlay.addEventListener("click", (e) => {
    if (e.target === DOM.modalOverlay) closeModal();
  });
  
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeModal();
    }
  });
}

// ========== RENDER DRINKS ==========
function renderDrinks() {
  if (state.currentFilter === "none") {
    DOM.drinksGrid.innerHTML = "";
    return;
  }

  const filtered = state.currentFilter === "all"
    ? drinks
    : drinks.filter(d => d.category === state.currentFilter);
  
  DOM.drinksGrid.innerHTML = "";
  
  filtered.forEach((drink, index) => {
    const card = createDrinkCard(drink);
    DOM.drinksGrid.appendChild(card);
    
    setTimeout(() => {
      card.classList.add("visible");
    }, index * 50);
  });
}
