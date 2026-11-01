// main.js - Saeed Sharifi Architecture Portfolio (GitHub Pages Edition)

const initialProjects = {
  1: {
    id: 1,
    titleFa: 'اقامتگاه تراورتن نیاوران',
    titleEn: 'Niavaran Travertine Residence',
    category: 'exterior',
    categoryFa: 'معماری بیرونی',
    categoryEn: 'Exterior Architecture',
    year: '2024',
    locFa: '2024 / تهران',
    locEn: '2024 / TEHRAN',
    metaFa: '۱,۸۵۰ مترمربع — مسکونی',
    metaEn: '1,850 m² — Residential',
    img: './assets/project-1.jpg',
    descFa: 'این اقامتگاه گفتگویی درون‌گرایانه با بستر کوهپایه‌ای برقرار می‌کند. پوسته‌های لایه‌بندی‌شده از سنگ تراورتن عباس‌آباد نور تند باختر را تلطیف کرده و حیاط‌های میانی نور طبیعی ملایم را هدایت می‌کنند.',
    descEn: 'This residence establishes an introverted dialogue with its foothill context. Layered shells of Abbas-Abad travertine soften the harsh western light while interior courtyards channel gentle natural daylight.',
    brightness: 100
  },
  2: {
    id: 2,
    titleFa: 'پنت‌هاوس گالری زعفرانیه',
    titleEn: 'Zaferaniyeh Gallery Penthouse',
    category: 'interior',
    categoryFa: 'معماری داخلی',
    categoryEn: 'Interior Architecture',
    year: '2024',
    locFa: '2024 / تهران',
    locEn: '2024 / TEHRAN',
    metaFa: '۵۴۰ مترمربع — پنت‌هاوس',
    metaEn: '540 m² — Penthouse',
    img: './assets/project-2.png',
    descFa: 'طراحی‌شده به مثابه گالری مسکونی برای کلکسیونر آثار هنری معاصر با کفپوش سنگ آهکی یکپارچه و شیارهای نوری نامرئی.',
    descEn: 'Conceived as a residential gallery for a contemporary art collector, featuring seamless limestone flooring and invisible recessed lighting reveals.',
    brightness: 100
  },
  3: {
    id: 3,
    titleFa: 'ویلای مونولیت لواسان',
    titleEn: 'Lavasan Monolith Villa',
    category: 'exterior',
    categoryFa: 'معماری بیرونی',
    categoryEn: 'Exterior Architecture',
    year: '2023',
    locFa: '2023 / لواسان',
    locEn: '2023 / LAVASAN',
    metaFa: '۹۲۰ مترمربع — ویلایی',
    metaEn: '920 m² — Villa',
    img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    descFa: 'برآمده از شیب تپه خشک لواسان، دو حجم سنگی درهم‌تنیده تراس‌های محصوری پدید می‌آورند که پناهی در برابر بادهای کوهستانی است.',
    descEn: 'Emerging from the arid hillside of Lavasan, two interlocking mineral volumes form sheltered terraces that provide refuge from mountain winds.',
    brightness: 100
  },
  4: {
    id: 4,
    titleFa: 'استودیو مینیمال الهیه',
    titleEn: 'Elahiyeh Minimalist Studio',
    category: 'interior',
    categoryFa: 'معماری داخلی',
    categoryEn: 'Interior Architecture',
    year: '2023',
    locFa: '2023 / تهران',
    locEn: '2023 / TEHRAN',
    metaFa: '۲۸۰ مترمربع — آتلیه',
    metaEn: '280 m² — Atelier',
    img: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
    descFa: 'استودیویی مهیا برای تمرکز فکری و خلق معماری با سطوح پیوسته میکروسمنت شنی.',
    descEn: 'A studio refined for contemplation and architectural creation, enveloped in continuous sand-toned microcement surfaces.',
    brightness: 100
  },
  5: {
    id: 5,
    titleFa: 'پاویون حیاط دروس',
    titleEn: 'Darrous Courtyard Pavilion',
    category: 'exterior',
    categoryFa: 'معماری بیرونی',
    categoryEn: 'Exterior Architecture',
    year: '2022',
    locFa: '2022 / تهران',
    locEn: '2022 / TEHRAN',
    metaFa: '۱,۲۰۰ مترمربع — مسکونی',
    metaEn: '1,200 m² — Residential',
    img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    descFa: 'بازخوانی پاویون‌های کهن باغات تهران با جویبارهای خطی در امتداد رواقی از ستون‌های باریک سنگی.',
    descEn: 'A reinterpretation of historic Tehran garden pavilions with linear water channels running alongside a colonnade of slender stone pillars.',
    brightness: 100
  },
  6: {
    id: 6,
    titleFa: 'آپارتمان ملموس فارس',
    titleEn: 'Fars Tactile Apartment',
    category: 'interior',
    categoryFa: 'معماری داخلی',
    categoryEn: 'Interior Architecture',
    year: '2022',
    locFa: '2022 / تهران',
    locEn: '2022 / TEHRAN',
    metaFa: '۳۴۰ مترمربع — مسکونی',
    metaEn: '340 m² — Residential',
    img: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
    descFa: 'طراحی داخلی مسکونی با تأکید بر ارگونومی نرم و سطوح گچ‌بری ماله‌ای دست‌ساز.',
    descEn: 'Residential interior focusing on tactile ergonomics and hand-troweled textured plaster surfaces.',
    brightness: 100
  }
};

function getStoredProjects() {
  try {
    const raw = localStorage.getItem('saeed_projects');
    if (raw) return JSON.parse(raw);
  } catch (e) {
    console.error('Storage read error:', e);
  }
  return initialProjects;
}

function saveStoredProjects(projs) {
  try {
    localStorage.setItem('saeed_projects', JSON.stringify(projs));
  } catch (e) {
    console.error('Storage save error:', e);
  }
}

let projects = getStoredProjects();
let currentLang = 'fa';
let currentFilter = 'all';
let activeProjId = 1;

const dict = {
  brandTitle: { fa: 'سعید شریفی', en: 'SAEED SHARIFI' },
  brandSubtitle: { fa: 'تهران — معمار', en: 'TEHRAN — ARCHITECT' },
  navProjects: { fa: 'پروژه‌ها', en: 'Projects' },
  navAbout: { fa: 'درباره', en: 'About' },
  navExpertise: { fa: 'تخصص و رویکرد', en: 'Expertise & Approach' },
  navContact: { fa: 'ارتباط', en: 'Contact' },
  coords: { fa: '۳۵.۶۸۹۲° شمالی، ۵۱.۳۸۹۰° شرقی — تهران، ایران', en: '35.6892° N, 51.3890° E — Tehran, Iran' },
  officeStatus: { fa: 'دفتر معماری / پذیرش پروژه‌های جدید ۱۴۰۴–۱۴۰۵', en: 'Architectural Atelier / Open for Commissions 2025–2026' },
  heroSubtitle: { fa: 'سعید شریفی — معمار | تهران', en: 'Saeed Sharifi — Architect | Tehran' },
  heroHeadline: { fa: 'طراحی فضا با رویکردی مبتنی بر متریال، نور، فرم و اتمسفر.', en: 'Spatial architecture grounded in material, light, form, and atmosphere.' },
  heroDesc: { fa: 'ریشه‌دار در هویت کالبدی و مصالح معاصر ایرانی همگام با نظم فضایی جهان‌شمول. ستایش تراورتن ناب، بازی سایه‌ها و آرامش تأمل‌برانگیز.', en: 'Rooted in contemporary Iranian tectonic identity and materials, aligned with universal spatial order. Celebrating pure travertine, shadow play, and contemplative calm.' },
  heroCta: { fa: 'مشاهده آثار برگزیده', en: 'Explore Selected Works' },
  heroCaption: { fa: 'تصویر ۰۱ — پوسته مونولیت مسکونی (نیاوران)', en: 'Image 01 — Residential Monolith Shell (Niavaran)' },
  projectsIndex: { fa: 'فهرست ۰۱ / نمونه آثار', en: 'Index 01 / Selected Works' },
  projectsHeading: { fa: 'آثار برگزیده', en: 'Selected Works' },
  filterAll: { fa: 'همه پروژه‌ها (۰۶)', en: 'All Works (06)' },
  filterExterior: { fa: 'معماری بیرونی', en: 'Exterior Architecture' },
  filterInterior: { fa: 'معماری داخلی', en: 'Interior Architecture' },
  aboutIndex: { fa: 'پرتره و رویکرد', en: 'Portrait & Approach' },
  aboutHeading: { fa: 'درباره سعید', en: 'About Saeed' },
  aboutQuote: { fa: '«من سعید شریفی، معمار مستقل مستقر در تهران هستم. رویکرد طراحی من بر ارتباط میان فضاهای داخلی و خارجی با تأکید بر متریال، نور، فرم و بیان معاصر معماری متمرکز است.»', en: '“I am Saeed Sharifi, an independent architect based in Tehran. My design practice centers on the interplay between interior and exterior spaces, emphasizing materiality, light, form, and contemporary architectural vernacular.”' },
  aboutFieldLabel: { fa: 'حیطه فعالیت:', en: 'Practice:' },
  aboutFieldValue: { fa: 'معمار مستقل', en: 'Independent Architect' },
  aboutLocLabel: { fa: 'موقعیت:', en: 'Location:' },
  aboutLocValue: { fa: 'تهران، ایران', en: 'Tehran, Iran' },
  aboutFocusLabel: { fa: 'تمرکز:', en: 'Focus:' },
  aboutFocusValue: { fa: 'اقامتگاه‌های اختصاصی و مونوگراف کالبدی', en: 'Bespoke Residences & Tectonic Monographs' },
  academicTitle: { fa: 'پیشینه آکادمیک', en: 'Academic Background' },
  academicHeading: { fa: 'دانش کالبدی و نظریه معماری', en: 'Tectonic Knowledge & Spatial Theory' },
  academicDesc: { fa: 'آموزش‌های تخصصی معماری با تلفیق سنت‌های فضایی اصیل همچون حیاط مرکزی با مینیمالیسم پالوده بین‌المللی.', en: 'Specialized architectural research bridging ancestral spatial typologies—such as introverted courtyards—with refined international minimalism.' },
  careerTitle: { fa: 'نقاط عطف حرفه‌ای', en: 'Professional Milestones' },
  careerHeading: { fa: 'استقلال تکتونیکی', en: 'Tectonic Independence' },
  careerDesc: { fa: 'بیش از یک دهه خلق فضاهای متمایز در شمیرانات و لواسان با التزام به پروژه‌های کیفی و سفارشی.', en: 'Over a decade crafting distinct built spaces across Shemiranat and Lavasan with unwavering dedication to bespoke execution.' },
  stat1Num: { fa: '10+', en: '10+' },
  stat1Desc: { fa: 'سال سابقه مستقل', en: 'Years Independent Practice' },
  stat2Num: { fa: '28', en: '28' },
  stat2Desc: { fa: 'پروژه و مونوگراف', en: 'Projects & Monographs' },
  stat3Num: { fa: '100%', en: '100%' },
  stat3Desc: { fa: 'طراحی اختصاصی', en: 'Custom Crafted Design' },
  manifestoTitle: { fa: 'مانیفست معماری', en: 'Architectural Manifesto' },
  manifestoDesc: { fa: '«معماری برای ما پیوند اندام‌وار اقلیم، ماده و سکوت است؛ خلق فضاهایی که هیاهوی بیرون را به آرامشی معتدل بدل کرده و در برابر گذر سالیان، وقار و اصالت مادی خود را حفظ می‌کنند.»', en: '“Architecture for us is an organic communion between climate, matter, and silence; forging spaces that dissolve external turmoil into measured stillness and maintain material dignity against time.”' },
  awardsTitle: { fa: 'جوایز، افتخارات و انتشارات برگزیده (۲۰۱۶ — ۲۰۲۴)', en: 'Selected Awards, Honors & Features (2016 — 2024)' },
  award1Title: { fa: 'نامزد جایزه معمار ۱۴۰۲', en: 'Memar Award Nominee 2023' },
  award1Desc: { fa: 'بخش مسکونی تک‌واحدی برای ویلای مونولیت لواسان', en: 'Single-Family Residential Category for Lavasan Monolith Villa' },
  award2Title: { fa: 'منتخب فستیوال معماری معاصر', en: 'Contemporary Architecture Festival Selection' },
  award2Desc: { fa: 'تقدیر ویژه هیئت داوران برای سامان‌دهی نور و متریال در اقامتگاه نیاوران', en: 'Special Jury Citation for Spatial Illumination & Travertine Detailing in Niavaran' },
  expertiseIndex: { fa: 'روش‌شناسی', en: 'Methodology' },
  expertiseHeading: { fa: 'رویکرد طراحی و تخصص', en: 'Design Approach & Expertise' },
  expertiseIntro: { fa: 'معماری افزوده‌ای تزئینی نیست؛ بلکه پالایش فیزیکی حجم، جریان نور روز و پیراستگی فضایی است.', en: 'Architecture is never ornamental surplus; it is the physical refinement of mass, daylight choreography, and spatial serenity.' },
  contactIndex: { fa: 'همکاری و سفارش طراحی', en: 'Commissions & Dialogue' },
  contactHeading: { fa: 'همکاری و ارتباط', en: 'Contact & Collaboration' },
  contactDesc: { fa: 'برای پروژه‌های معماری، همکاری‌های حرفه‌ای و طرح پرسش‌های فنی، خوشحال می‌شویم در تماس باشید.', en: 'For architectural commissions, studio collaborations, or spatial inquiries, we welcome your contact.' },
  phoneLabel: { fa: 'خط مستقیم / واتس‌اپ', en: 'Direct Phone / WhatsApp' },
  emailLabel: { fa: 'پست الکترونیک', en: 'Email Inquiries' },
  igLabel: { fa: 'صفحه اینستاگرام', en: 'Instagram Portfolio' },
  actionCall: { fa: 'تماس', en: 'Call' },
  actionMail: { fa: 'ارسال ایمیل', en: 'Email' },
  actionView: { fa: 'مشاهده', en: 'View' },
  formTitle: { fa: 'فرم درخواست همکاری معماری', en: 'Architectural Commission Request Form' },
  formNameLabel: { fa: 'نام و نام خانوادگی *', en: 'Full Name *' },
  formEmailLabel: { fa: 'آدرس ایمیل *', en: 'Email Address *' },
  formTypeLabel: { fa: 'گونه‌شناسی پروژه', en: 'Project Typology' },
  formType1: { fa: 'معماری مسکونی (ویلا / آپارتمان شاخص)', en: 'Residential Architecture (Villa / Bespoke Apartment)' },
  formType2: { fa: 'معماری و طراحی داخلی و بازآفرینی فضا', en: 'Interior Architecture & Spatial Adaptation' },
  formType3: { fa: 'پروژه‌های تجاری و پاویون‌های نمایشگاهی', en: 'Commercial Projects & Exhibition Pavilions' },
  formType4: { fa: 'مشاوره و شبیه‌سازی تخصصی فضایی سه‌بعدی', en: 'Spatial Advisory & 3D Architectural Simulation' },
  formDescLabel: { fa: 'شرح پروژه، متراژ و موقعیت مکانی *', en: 'Project Brief, Area & Site Context *' },
  formSubmit: { fa: 'ارسال پیام درخواست', en: 'Send Commission Request' },
  footerRights: { fa: 'آتلیه معماری سعید شریفی — کلیه حقوق محفوظ است ۱۴۰۳ / ۲۰۲۵', en: 'Saeed Sharifi Architecture Atelier — All Rights Reserved 2025' },
  footerTag: { fa: 'مینیمالیسم گرم و انضباط ساختاری', en: 'Warm Minimalism & Tectonic Rigor' },
  modalUpload: { fa: 'بارگذاری فایل تصویر', en: 'Upload New Image' },
  modalUrlLabel: { fa: 'آدرس مستقیم تصویر (URL):', en: 'Direct Image URL:' },
  modalApplyUrl: { fa: 'ثبت لینک', en: 'Apply URL' },
  modalBrightness: { fa: 'تنظیم نور تصویر:', en: 'Brightness Adjustment:' },
  modalReset: { fa: 'بازگردانی تصویر اصلی', en: 'Reset to Original' },
  modalAreaLabel: { fa: 'متراژ و کاربری:', en: 'Area & Typology:' },
  modalLocLabel: { fa: 'موقعیت و سال:', en: 'Location & Year:' }
};

function toggleLang() {
  currentLang = currentLang === 'fa' ? 'en' : 'fa';
  updateLanguageUI();
}

function updateLanguageUI() {
  const isEn = currentLang === 'en';
  document.documentElement.lang = isEn ? 'en' : 'fa';
  document.documentElement.dir = isEn ? 'ltr' : 'rtl';

  const langEn = document.getElementById('lang-en');
  const langFa = document.getElementById('lang-fa');
  if (langEn && langFa) {
    if (isEn) {
      langEn.className = 'px-1.5 font-bold text-primary';
      langFa.className = 'px-1.5 text-on-surface-variant font-medium';
    } else {
      langEn.className = 'px-1.5 text-on-surface-variant font-medium';
      langFa.className = 'px-1.5 font-bold text-primary';
    }
  }

  for (const [key, val] of Object.entries(dict)) {
    const el = document.getElementById(`txt-${key}`);
    if (el) {
      el.innerText = isEn ? val.en : val.fa;
    }
  }

  renderProjects();
}

function filterProjects(cat) {
  currentFilter = cat;
  const btnAll = document.getElementById('filter-all');
  const btnExt = document.getElementById('filter-exterior');
  const btnInt = document.getElementById('filter-interior');

  const activeClass = 'px-4 py-1.5 bg-primary text-surface font-medium cursor-pointer transition-colors border border-primary';
  const inactiveClass = 'px-4 py-1.5 bg-surface-container text-on-surface border border-outline-variant hover:text-primary hover:border-secondary cursor-pointer transition-colors';

  if (btnAll) btnAll.className = cat === 'all' ? activeClass : inactiveClass;
  if (btnExt) btnExt.className = cat === 'exterior' ? activeClass : inactiveClass;
  if (btnInt) btnInt.className = cat === 'interior' ? activeClass : inactiveClass;

  renderProjects();
}

function renderProjects() {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;

  grid.innerHTML = '';
  const isEn = currentLang === 'en';

  Object.values(projects).forEach(p => {
    if (currentFilter !== 'all' && p.category !== currentFilter) return;

    const card = document.createElement('article');
    card.className = 'bg-surface-container border border-outline-variant hover:border-secondary transition-all flex flex-col group cursor-pointer arch-card';
    card.onclick = () => openModal(p.id);

    const title = isEn ? p.titleEn : p.titleFa;
    const cat = isEn ? p.categoryEn : p.categoryFa;
    const loc = isEn ? p.locEn : p.locFa;
    const meta = isEn ? p.metaEn : p.metaFa;

    card.innerHTML = `
      <div class="relative w-full aspect-[4/3] overflow-hidden bg-surface-container-high">
        <img id="card-img-${p.id}" src="${p.img}" alt="${title}" class="arch-card-img w-full h-full object-cover group-hover:scale-105" style="filter: brightness(${p.brightness || 100}%);">
        <span class="absolute top-3 left-3 bg-surface/90 px-2 py-0.5 text-xs text-primary font-mono border border-outline-variant">0${p.id}</span>
      </div>
      <div class="p-5 flex flex-col justify-between flex-1 gap-4">
        <div>
          <div class="flex justify-between text-xs text-secondary mb-1">
            <span>${cat}</span>
            <span class="font-mono">${loc}</span>
          </div>
          <h3 class="text-base text-primary font-medium group-hover:text-secondary transition-colors">${title}</h3>
        </div>
        <div class="pt-2 border-t border-outline-variant/50 flex justify-between text-xs text-secondary">
          <span>${meta}</span>
          <span class="material-symbols-outlined text-sm">${isEn ? 'arrow_forward' : 'arrow_backward'}</span>
        </div>
      </div>
    `;

    grid.appendChild(card);
  });
}

function openModal(id) {
  activeProjId = id;
  const p = projects[id];
  const modal = document.getElementById('project-modal');
  if (!modal || !p) return;

  const isEn = currentLang === 'en';
  document.getElementById('modal-num').innerText = `0${id}`;
  document.getElementById('modal-title').innerText = isEn ? p.titleEn : p.titleFa;
  document.getElementById('modal-desc').innerText = isEn ? p.descEn : p.descFa;
  document.getElementById('modal-meta').innerText = isEn ? p.metaEn : p.metaFa;
  document.getElementById('modal-loc').innerText = isEn ? p.locEn : p.locFa;
  
  const modalImg = document.getElementById('modal-img');
  modalImg.src = p.img;
  modalImg.style.filter = `brightness(${p.brightness || 100}%)`;

  const bRange = document.getElementById('modal-brightness-range');
  if (bRange) bRange.value = p.brightness || 100;

  const urlInput = document.getElementById('modal-img-url-input');
  if (urlInput) urlInput.value = '';

  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

function closeModal() {
  const modal = document.getElementById('project-modal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}

function handleBackdropClick(e) {
  if (e.target && e.target.id === 'project-modal') {
    closeModal();
  }
}

function handleModalUpload(e) {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(evt) {
    const newSrc = evt.target.result;
    document.getElementById('modal-img').src = newSrc;
    
    projects[activeProjId].img = newSrc;
    saveStoredProjects(projects);
    renderProjects();
    showToast(currentLang === 'en' ? 'Project image updated successfully!' : 'تصویر پروژه با موفقیت ذخیره گردید.');
  };
  reader.readAsDataURL(file);
}

function applyImageURL() {
  const urlInput = document.getElementById('modal-img-url-input');
  const url = urlInput?.value?.trim();
  if (!url) {
    showToast(currentLang === 'en' ? 'Please enter a valid URL' : 'لطفاً یک آدرس تصویر معتبر وارد کنید');
    return;
  }

  projects[activeProjId].img = url;
  document.getElementById('modal-img').src = url;
  saveStoredProjects(projects);
  renderProjects();
  showToast(currentLang === 'en' ? 'Image URL applied successfully!' : 'آدرس تصویر با موفقیت اعمال گردید.');
}

function adjustImageFilter() {
  const bVal = document.getElementById('modal-brightness-range')?.value || 100;
  const modalImg = document.getElementById('modal-img');
  if (modalImg) modalImg.style.filter = `brightness(${bVal}%)`;
  
  if (projects[activeProjId]) {
    projects[activeProjId].brightness = bVal;
    saveStoredProjects(projects);
    const cardImg = document.getElementById(`card-img-${activeProjId}`);
    if (cardImg) cardImg.style.filter = `brightness(${bVal}%)`;
  }
}

function resetActiveProjectImage() {
  if (initialProjects[activeProjId]) {
    projects[activeProjId].img = initialProjects[activeProjId].img;
    projects[activeProjId].brightness = 100;
    saveStoredProjects(projects);
    openModal(activeProjId);
    renderProjects();
    showToast(currentLang === 'en' ? 'Image restored to original!' : 'تصویر اصلی بازگردانده شد.');
  }
}

function handleContactSubmit(e) {
  e.preventDefault();
  showToast(currentLang === 'en' ? 'Your message has been sent successfully!' : 'درخواست شما با موفقیت ثبت گردید.');
  e.target.reset();
}

function showToast(msg) {
  const toast = document.createElement('div');
  toast.className = 'fixed bottom-6 right-6 z-50 bg-surface-container-high text-primary border border-secondary px-5 py-3 text-xs shadow-2xl backdrop-blur-md transition-all duration-300';
  toast.innerText = msg;
  document.body.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

document.addEventListener('DOMContentLoaded', () => {
  renderProjects();
});
