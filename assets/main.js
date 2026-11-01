/**
 * Saeed Sharifi — Architect
 * Standalone Client Script for GitHub Pages
 */

const defaultProjects = {
  1: {
    num: '01',
    titleEn: 'Niavaran Travertine Residence',
    titleFa: 'اقامتگاه تراورتن نیاوران',
    catEn: 'EXTERIOR ARCHITECTURE',
    catFa: 'معماری بیرونی و نما',
    metaEn: '2024 — NIAVARAN, TEHRAN',
    metaFa: '۱۴۰۳ — نیاوران، تهران',
    category: 'exterior',
    descEn: 'The residence establishes an introverted dialogue with its mountain surroundings. Layered screens of local Abbas-Abad travertine modulate harsh western exposure while deep courtyards invite diffused daylight deep into the domestic core.',
    descFa: 'این اقامتگاه گفتگویی درون‌گرایانه با بستر کوهپایه‌ای برقرار می‌کند. پوسته‌های لایه‌بندی‌شده از سنگ تراورتن عباس‌آباد نور تند باختر را تلطیف کرده و حیاط‌های میانی نور طبیعی ملایم را به قلب خانه هدایت می‌کنند.',
    materialsEn: 'Honed Abbas-Abad travertine, cast concrete, smoked oak, dark bronze louvers.',
    materialsFa: 'تراورتن ساب‌خورده عباس‌آباد، بتن اکسپوز، بلوط دودی، لوورهای برنز تیره.',
    area: '1,850 SQ.M',
    scopeEn: 'Full Architectural Design & Supervision',
    scopeFa: 'طراحی کامل معماری و نظارت کارگاهی',
    typologyEn: 'Private Residential Monograph',
    typologyFa: 'اقامتگاه اختصاصی مسکونی',
    statusEn: 'Completed 2024',
    statusFa: 'تکمیل شده ۱۴۰۳',
    imgSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCNJB5o9zjYwRdCdYIPbAtpkNHW1jM5DZmJMGaccI_r2rggZfcDul-6cC33-453Qpfbws9tonuj8DkBgO1JJQJvVQ2DRPhy4hL6jLKLgNe_9DecKBSbGZjj1_CU5ODdFwKaMkM6zKzEsm4A42wT5f92zz-0TdXfut7kDc3gTRfjlSOSrhNR7pa_L65hstsYws4FQhF3ChPsos38LHCiXuPqTWf9oGAFSl3zagJKi-g',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCNJB5o9zjYwRdCdYIPbAtpkNHW1jM5DZmJMGaccI_r2rggZfcDul-6cC33-453Qpfbws9tonuj8DkBgO1JJQJvVQ2DRPhy4hL6jLKLgNe_9DecKBSbGZjj1_CU5ODdFwKaMkM6zKzEsm4A42wT5f92zz-0TdXfut7kDc3gTRfjlSOSrhNR7pa_L65hstsYws4FQhF3ChPsos38LHCiXuPqTWf9oGAFSl3zagJKi-g',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA9UYN10XrdrqUF0dCff_k3H859QPuOoOBu52s2Ytc4ODrMkjPMqdXOTv8klqYlCzZOK-yPWQuCsJlp3rlTxm9SH0SvFC4MhpkDlB_dyDA1UCtOvgn8BqFEOu7ymVWvVGY07d1XYS7os-AXbq8Yd3ukNGUv0zQ-LSDdfiNIPCrTrOP4uGjigPI0RQgV9ZjU_XVPVSbcosSyO4t2baQtUoMJyxH5q7AXcPIzcReKesk',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCUU-vkdkgjRddlJAhfn5O4z3_ft5NwBuE20qlCOXKjF3EBNAVqvIiearae7HqWhivC1eaXWvZu5ZE_T8xl1vZW4-ZER85clqYcl4wES2cvDxDH1wIyPmI0UMYKD3zHOngO30Wi--6w7KAII8QE7G3WSHm5-SYDRZzbCAVnUs_ai0asupQNXYfH8-7Z5vwxH3mpdeJz3ZJ-2IRoTEnL52SOa28A88KTLZitJ3AHadA'
    ]
  },
  2: {
    num: '02',
    titleEn: 'Zaferanieh Penthouse Gallery',
    titleFa: 'پنت‌هاوس گالری زعفرانیه',
    catEn: 'INTERIOR ARCHITECTURE',
    catFa: 'معماری و طراحی داخلی',
    metaEn: '2024 — ZAFERANIEH, TEHRAN',
    metaFa: '۱۴۰۳ — زعفرانیه، تهران',
    category: 'interior',
    descEn: 'Conceived as a living museum for a private art connoisseur. Continuous honed limestone floors, fluted white oak partitions, and carefully recessed ceiling light troughs transform a residential volume into an atmospheric sanctuary.',
    descFa: 'طراحی‌شده به مثابه گالری مسکونی برای کلکسیونر آثار هنری معاصر. کفپوش سنگ آهکی یکپارچه، پارتیشن‌های شیاردار چوب بلوط و شیارهای نوری نامرئی، این فضا را به پناهگاهی آرام بدل ساخته‌اند.',
    materialsEn: 'Honed limestone, fluted white oak, microcement, custom bronze joinery.',
    materialsFa: 'لایم‌استون هوند، بلوط شیاردار، میکروسمنت، یراق‌آلات دست‌ساز برنزی.',
    area: '540 SQ.M',
    scopeEn: 'Interior Architecture & Bespoke Millwork',
    scopeFa: 'معماری داخلی و طراحی مبلمان اختصاصی',
    typologyEn: 'Penthouse Apartment',
    typologyFa: 'پنت‌هاوس مسکونی',
    statusEn: 'Completed 2024',
    statusFa: 'تکمیل شده ۱۴۰۳',
    imgSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDBFKqbpftTSpd7YRDXQObAJZiuNGG6ZeKqUNMAeYe06StLmmyeYAAWYSyinnh5KqH4bMBxlh8AL5Td1YcsvBCtrbSUaRgFnBBeRbi5LqFYzvzz269rIv0F-bokLp5I4_dD_RiTN9tFFqhKdibXTTn8UEJ-MW6MWD7ai2xxUm-azTpVTbHD27psnXzuqm7Da-I6c7DqPH1g_D4VT5tqSDYV-xA3ilyEKbyt_4iaR2E',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDBFKqbpftTSpd7YRDXQObAJZiuNGG6ZeKqUNMAeYe06StLmmyeYAAWYSyinnh5KqH4bMBxlh8AL5Td1YcsvBCtrbSUaRgFnBBeRbi5LqFYzvzz269rIv0F-bokLp5I4_dD_RiTN9tFFqhKdibXTTn8UEJ-MW6MWD7ai2xxUm-azTpVTbHD27psnXzuqm7Da-I6c7DqPH1g_D4VT5tqSDYV-xA3ilyEKbyt_4iaR2E',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB9HG1Gx71ZEU52YrgcpVIGP5pObEa4ouhJPoNklHyutvQKSJ8_AsRsIBACBE7eoItq1ZJUsvYbPH0ZhrFiZQ9sJsVnFPfEweGZeABztZwil5KMHpt8oqmC5loaxUYUQU9LMzCzMeiVlvGegCjWz_FpIo9z2IF__br2nntf6Je2yF2EbOJBzWDdng89Pcgu1NAUWfaYQhMt1sbf5cdisoSUdkIOO-puDT5ufwtyi4g'
    ]
  },
  3: {
    num: '03',
    titleEn: 'Lavasan Monolith Villa',
    titleFa: 'ویلای مونولیت لواسان',
    catEn: 'EXTERIOR ARCHITECTURE',
    catFa: 'معماری بیرونی و ویلایی',
    metaEn: '2023 — LAVASAN',
    metaFa: '۱۴۰۲ — لواسان',
    category: 'exterior',
    descEn: 'Emerging directly from the arid hillside of Lavasan, two interlocking stone monoliths form protected outdoor terraces shielding inhabitants from wind while framing views toward the lake.',
    descFa: 'برآمده از شیب تپه خشک لواسان، دو حجم سنگی درهم‌تنیده تراس‌های محصوری پدید می‌آورند که پناهی در برابر بادهای کوهستانی بوده و چشم‌انداز دریاچه را قاب می‌گیرند.',
    materialsEn: 'Local mountain rubble stone, board-marked concrete, low-iron insulated glass.',
    materialsFa: 'سنگ لاشه کوهی محلی، بتن تخته‌کوب، شیشه‌های سوپرکلیر عایق.',
    area: '920 SQ.M',
    scopeEn: 'Masterplanning & Exterior Architecture',
    scopeFa: 'طراحی کلان سایت و معماری بنا',
    typologyEn: 'Private Hillside Villa',
    typologyFa: 'ویلای کوهستانی اختصاصی',
    statusEn: 'Completed 2023',
    statusFa: 'تکمیل شده ۱۴۰۲',
    imgSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC52lcIBCHkbF868XAXibj9gRWkQHtQP7pZVBe_YQSwBDndzWZder3lJJgSYYcdaC1-We9ejHfXGzAtSwozxTbUkYs7nySN8nOgjjVzcKWY7rZys7e97ai6bIXmK9dz1aFcVwdVfJnY5q0VeWht_hJE9uxWZGIBdHlNW3e3OjUBM314a6waJe1xGZvkSmjXFDg38cRX9syd0Vz2ZK-HiPINQ6SfLNd5rQ5vZpjY3_Q',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC52lcIBCHkbF868XAXibj9gRWkQHtQP7pZVBe_YQSwBDndzWZder3lJJgSYYcdaC1-We9ejHfXGzAtSwozxTbUkYs7nySN8nOgjjVzcKWY7rZys7e97ai6bIXmK9dz1aFcVwdVfJnY5q0VeWht_hJE9uxWZGIBdHlNW3e3OjUBM314a6waJe1xGZvkSmjXFDg38cRX9syd0Vz2ZK-HiPINQ6SfLNd5rQ5vZpjY3_Q',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDy7LRxCuJgYmmqn9FyS8DSGIyOm5poRXb2p50CMVOajdE0XtNK0_mBoJ0d4-HyhlKgzEi7U5lCMxAouEuN57tCg-PfNS5hOGcbmERjxzTJiCjHXGTMz9LhTlByAYBi33xBY8kPKf_c-jUlFIQKBg7Aoz_2WGo7sdx_y5TB2yuJiPXx2h33oTTffv1zHSQgbQvBoS2ilPOHDvavm5wYv3Ku0HVemHC4E8KkBdnyFLE'
    ]
  },
  4: {
    num: '04',
    titleEn: 'Elahieh Minimalist Studio',
    titleFa: 'استودیو مینیمال الهیه',
    catEn: 'INTERIOR ARCHITECTURE',
    catFa: 'معماری و طراحی داخلی',
    metaEn: '2023 — ELAHIEH, TEHRAN',
    metaFa: '۱۴۰۲ — الهیه، تهران',
    category: 'interior',
    descEn: 'A studio designed for intellectual focus and architectural creation. Seamless sand-colored microcement floor planes are contrasted with raw blackened hot-rolled steel storage walls and sheer acoustic linens.',
    descFa: 'استودیویی مهیا برای تمرکز فکری و خلق معماری. سطوح پیوسته میکروسمنت شنی در تقابل با دیواره‌های ذخیره‌سازی از فولاد نورد گرم و پرده‌های حریر آکوستیک قرار دارند.',
    materialsEn: 'Sand microcement, hot-rolled blackened steel, linen acoustic drapes.',
    materialsFa: 'میکروسمنت شنی، ورق فولادی نورد گرم سیاه، پرده‌های کتان آکوستیک.',
    area: '280 SQ.M',
    scopeEn: 'Adaptive Spatial Reuse & Studio Interior',
    scopeFa: 'بازطراحی کالبدی فضا و معماری آتلیه',
    typologyEn: 'Design Atelier & Archive',
    typologyFa: 'آتلیه و آرشیو معماری',
    statusEn: 'Completed 2023',
    statusFa: 'تکمیل شده ۱۴۰۲',
    imgSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDQ9NnOOTphDK7l27WZfTxHT4-OtZYAQkxS8AeIEais8NQccURW9Y_uwpwmOjxeQoYEZ6xgqTz7YOZRdBV6Edy7wC26n3UJ-z6VjXLaBRWm0_ZQen6JF6ZzKsn-Q82f8--Uq4NiixG5PssrJu-cOTVUYPo6s2Fgty3J8tK3t2fmoQpnBzP7N5u_93FZxqkqWwlRxS-plAAnCyqVCAv-NzOl4qDetJUTIKOySDdDYMo',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDQ9NnOOTphDK7l27WZfTxHT4-OtZYAQkxS8AeIEais8NQccURW9Y_uwpwmOjxeQoYEZ6xgqTz7YOZRdBV6Edy7wC26n3UJ-z6VjXLaBRWm0_ZQen6JF6ZzKsn-Q82f8--Uq4NiixG5PssrJu-cOTVUYPo6s2Fgty3J8tK3t2fmoQpnBzP7N5u_93FZxqkqWwlRxS-plAAnCyqVCAv-NzOl4qDetJUTIKOySDdDYMo'
    ]
  },
  5: {
    num: '05',
    titleEn: 'Darrous Courtyard Pavilion',
    titleFa: 'پاویون حیاط دروس',
    catEn: 'EXTERIOR ARCHITECTURE',
    catFa: 'معماری بیرونی و نما',
    metaEn: '2022 — DARROUS, TEHRAN',
    metaFa: '۱۴۰۱ — دروس، تهران',
    category: 'exterior',
    descEn: 'Reinterpreting traditional Tehran garden pavilions. Linear water rills run along a rhythmic colonnade of slender stone piers, mediating the boundary between domestic halls and mature plane trees.',
    descFa: 'بازخوانی پاویون‌های کهن باغات تهران. جویبارهای خطی در امتداد رواقی از ستون‌های باریک سنگی امتداد یافته و مرز میان فضاهای داخلی و چنارهای کهنسال را مفصل‌بندی می‌کنند.',
    materialsEn: 'Honed Isfahan limestone, clay brick pavers, oxidized copper flashings.',
    materialsFa: 'سنگ لایم‌استون اصفهان، آجر قزاقی دست‌ساز، ورق‌های مسی اکسید شده.',
    area: '1,200 SQ.M',
    scopeEn: 'Architecture & Courtyard Landscape',
    scopeFa: 'معماری و محوطه‌سازی حیاط',
    typologyEn: 'Courtyard Residence',
    typologyFa: 'خانه حیاط‌دار',
    statusEn: 'Completed 2022',
    statusFa: 'تکمیل شده ۱۴۰۱',
    imgSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCUU-vkdkgjRddlJAhfn5O4z3_ft5NwBuE20qlCOXKjF3EBNAVqvIiearae7HqWhivC1eaXWvZu5ZE_T8xl1vZW4-ZER85clqYcl4wES2cvDxDH1wIyPmI0UMYKD3zHOngO30Wi--6w7KAII8QE7G3WSHm5-SYDRZzbCAVnUs_ai0asupQNXYfH8-7Z5vwxH3mpdeJz3ZJ-2IRoTEnL52SOa28A88KTLZitJ3AHadA',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCUU-vkdkgjRddlJAhfn5O4z3_ft5NwBuE20qlCOXKjF3EBNAVqvIiearae7HqWhivC1eaXWvZu5ZE_T8xl1vZW4-ZER85clqYcl4wES2cvDxDH1wIyPmI0UMYKD3zHOngO30Wi--6w7KAII8QE7G3WSHm5-SYDRZzbCAVnUs_ai0asupQNXYfH8-7Z5vwxH3mpdeJz3ZJ-2IRoTEnL52SOa28A88KTLZitJ3AHadA'
    ]
  },
  6: {
    num: '06',
    titleEn: 'Faris Tactile Apartment',
    titleFa: 'آپارتمان ملموس فارس',
    catEn: 'INTERIOR ARCHITECTURE',
    catFa: 'معماری و طراحی داخلی',
    metaEn: '2022 — TEHRAN',
    metaFa: '۱۴۰۱ — تهران',
    category: 'interior',
    descEn: 'A residential interior embracing soft ergonomics and hand-troweled lime plaster surfaces. Rounded wall intersections soften daylight falloff and provide tactile comfort.',
    descFa: 'طراحی داخلی مسکونی با تأکید بر ارگونومی نرم و سطوح گچ‌بری ماله‌ای دست‌ساز. اتصالات منحنی دیوارها تابش نور را ملایم کرده و کیفیتی لمسی و آرامش‌بخش می‌آفرینند.',
    materialsEn: 'Natural lime plaster, matte walnut, terrazzo aggregate with river pebbles.',
    materialsFa: 'پلاستر آهکی دست‌ساز، گردوی مات طبیعی، موزاییک درجا با سنگ‌ریزه‌های رودخانه‌ای.',
    area: '340 SQ.M',
    scopeEn: 'Complete Interior Renovation & Lighting Design',
    scopeFa: 'بازسازی کامل داخلی و مهندسی روشنایی',
    typologyEn: 'Apartment Residence',
    typologyFa: 'واحد مسکونی معاصر',
    statusEn: 'Completed 2022',
    statusFa: 'تکمیل شده ۱۴۰۱',
    imgSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB9HG1Gx71ZEU52YrgcpVIGP5pObEa4ouhJPoNklHyutvQKSJ8_AsRsIBACBE7eoItq1ZJUsvYbPH0ZhrFiZQ9sJsVnFPfEweGZeABztZwil5KMHpt8oqmC5loaxUYUQU9LMzCzMeiVlvGegCjWz_FpIo9z2IF__br2nntf6Je2yF2EbOJBzWDdng89Pcgu1NAUWfaYQhMt1sbf5cdisoSUdkIOO-puDT5ufwtyi4g',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB9HG1Gx71ZEU52YrgcpVIGP5pObEa4ouhJPoNklHyutvQKSJ8_AsRsIBACBE7eoItq1ZJUsvYbPH0ZhrFiZQ9sJsVnFPfEweGZeABztZwil5KMHpt8oqmC5loaxUYUQU9LMzCzMeiVlvGegCjWz_FpIo9z2IF__br2nntf6Je2yF2EbOJBzWDdng89Pcgu1NAUWfaYQhMt1sbf5cdisoSUdkIOO-puDT5ufwtyi4g'
    ]
  }
};

// Check localStorage for any customized projects
function loadProjects() {
  const saved = localStorage.getItem('saeed_sharifi_projects');
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch(e) {}
  }
  return defaultProjects;
}

let projectsData = loadProjects();

const translations = {
  en: {
    'hero-coords': '35.6892° N, 51.3890° E — TEHRAN, IRAN',
    'hero-spec': 'ARCHITECTURAL PRACTICE',
    'hero-status': 'COMMISSIONS OPEN 2025–2026',
    'hero-subtitle': 'SAEED SHARIFI — ARCHITECT | TEHRAN',
    'hero-statement': 'Designing spaces through material, light, form, and atmosphere.',
    'hero-desc': 'Rooted in contemporary Iranian materiality and international spatial order. Tectonic precision celebrating raw travertine, cast shadow, and contemplative silence.',
    'hero-cta': 'EXPLORE SELECTED WORKS',
    'hero-img-badge': 'FIGURE 01 — MONOLITHIC APARTMENT FAÇADE (NIAVARAN)',
    'filter-index': 'INDEX 01 / FOLIO',
    'projects-heading': 'SELECTED WORKS',
    'filter-all': 'ALL (06)',
    'filter-exterior': 'EXTERIOR ARCHITECTURE',
    'filter-interior': 'INTERIOR ARCHITECTURE',
    'proj1-type': 'EXTERIOR ARCHITECTURE',
    'proj1-title': 'Niavaran Travertine Residence',
    'proj1-area': '1,850 SQ.M — RESIDENTIAL',
    'proj2-type': 'INTERIOR ARCHITECTURE',
    'proj2-title': 'Zaferanieh Penthouse Gallery',
    'proj2-area': '540 SQ.M — PENTHOUSE',
    'proj3-type': 'EXTERIOR ARCHITECTURE',
    'proj3-title': 'Lavasan Monolith Villa',
    'proj3-area': '920 SQ.M — VILLA',
    'proj4-type': 'INTERIOR ARCHITECTURE',
    'proj4-title': 'Elahieh Minimalist Studio',
    'proj4-area': '280 SQ.M — ATELIER',
    'proj5-type': 'EXTERIOR ARCHITECTURE',
    'proj5-title': 'Darrous Courtyard Pavilion',
    'proj5-area': '1,200 SQ.M — RESIDENTIAL',
    'proj6-type': 'INTERIOR ARCHITECTURE',
    'proj6-title': 'Faris Tactile Apartment',
    'proj6-area': '340 SQ.M — RESIDENTIAL',
    'about-pretitle': 'PORTRAIT & PRACTICE',
    'about-title': 'ABOUT SAEED',
    'about-quote': '"I am Saeed Sharifi, an independent architect based in Tehran, Iran. My practice explores the relationship between interior and exterior spaces through material, light, form, and contemporary architectural expression."',
    'spec-practice': 'PRACTICE:',
    'spec-practice-val': 'INDEPENDENT ARCHITECT',
    'spec-location': 'LOCATION:',
    'spec-location-val': 'TEHRAN, IRAN',
    'spec-focus': 'FOCUS:',
    'spec-focus-val': 'TACTILE MONOGRAPHS & RESIDENCES',
    'bio-academic-title': 'ACADEMIC BACKGROUND',
    'bio-academic-sub': 'Architectural Discipline & Theory',
    'bio-academic-p': 'Formed through advanced architectural studies in Tehran, bridging Persian spatial traditions of inward courtyards and tectonic bricklaying with contemporary international minimalism.',
    'bio-milestones-title': 'PRACTICE MILESTONES',
    'bio-milestones-sub': 'Tectonic Autonomy',
    'bio-milestones-p': 'Over a decade executing rigorous commissions across Shemiranat, Elahieh, and Lavasan. Dedicated to small-batch, client-collaborative spatial works that age with grace.',
    'metric-years': 'YEARS OF PRACTICE',
    'metric-projects': 'PROJECT MONOGRAPHS',
    'metric-bespoke': 'BESPOKE EXECUTION',
    'expertise-pretitle': 'METHODOLOGY',
    'expertise-heading': 'DESIGN APPROACH',
    'expertise-lead': 'Architecture is not applied surface; it is the physical distillation of volume, daylight, and physical restraint.',
    'pillar1-title': 'Spatial Sequence',
    'pillar1-desc': 'Crafting progressive transitions between public gathering and sanctuary realms, celebrating thresholds through compressed corridors and expansive double-height volumes.',
    'pillar2-title': 'Material Tactility',
    'pillar2-desc': 'Selecting raw local stones, open-pore travertine, board-formed concrete, smoked Iranian oak, and dark steel that patina honestly over time.',
    'pillar3-title': 'Light Choreography',
    'pillar3-desc': 'Manipulating high Tehran sun angles through deep reveals, narrow clerestory slits, and textured stone louvers to carve shadow into living spaces.',
    'pillar4-title': 'Contextual Dialogue',
    'pillar4-desc': 'Respecting neighborhood urban grain, Alborz mountain sightlines, and climatic realities while maintaining an uncompromising contemporary posture.',
    'disc-heading': 'PRACTICE DISCIPLINES',
    'disc-1': 'Interior Architecture',
    'disc-1-sub': 'Custom millwork, lighting & spatial flow',
    'disc-2': 'Exterior Architecture',
    'disc-2-sub': 'Tectonic facades, volumes & structural mass',
    'disc-3': 'Conceptual Form-Finding',
    'disc-3-sub': 'Parametric sketches & tectonic studies',
    'tools-heading': 'TECHNICAL MASTERY & SOFTWARE',
    'tools-desc': 'Precision computation used strictly in the service of architectural truth. Rigorous BIM drafting, structural coordination, and photorealistic spatial simulations.',
    'tool-3ds': '3D Modeling',
    'tool-cad': 'Drafting & Detail',
    'tool-vray': 'Light Simulation',
    'tool-ps': 'Post-Production',
    'contact-pretitle': 'COMMISSIONS & INQUIRIES',
    'contact-title': "LET'S WORK TOGETHER",
    'contact-subtitle': 'For collaborations, architectural projects, and professional inquiries, feel free to get in touch. We welcome private residential clients and design partnerships.',
    'contact-phone-lbl': 'DIRECT LINE / WHATSAPP',
    'contact-email-lbl': 'ELECTRONIC MAIL',
    'contact-insta-lbl': 'INSTAGRAM ARCHIVE',
    'contact-web-lbl': 'PORTAL & 3D ATELIER',
    'cta-call': 'CALL',
    'cta-email': 'WRITE',
    'cta-view': 'FOLLOW',
    'cta-visit': 'VISIT',
    'form-heading': 'COMMISSION INQUIRY FORM',
    'form-desc': 'Provide the basic coordinates of your project. We typically review and respond within two working days.',
    'lbl-name': 'YOUR NAME *',
    'lbl-email': 'EMAIL ADDRESS *',
    'lbl-typology': 'PROJECT TYPOLOGY',
    'opt-res': 'Residential Architecture (Villa / Monograph)',
    'opt-int': 'Interior Architecture & Spatial Renovation',
    'opt-com': 'Commercial & Exhibition Pavilion',
    'opt-3d': 'Consultancy & 3D Spatial Visualization',
    'lbl-msg': 'PROJECT DETAILS & LOCATION *',
    'form-confidential': 'All project information is treated with strict studio confidentiality.',
    'btn-send': 'TRANSMIT INQUIRY',
    'modal-concept-lbl': 'DESIGN CONCEPT',
    'modal-mat-lbl': 'PRIMARY MATERIALS',
    'modal-specs-lbl': 'PROJECT SPECIFICATIONS',
    'spec-area': 'TOTAL AREA:',
    'spec-scope': 'SCOPE:',
    'spec-typology': 'TYPOLOGY:',
    'spec-status': 'STATUS:'
  },
  fa: {
    'hero-coords': '۳۵.۶۸۹۲° شمالی، ۵۱.۳۸۹۰° شرقی — تهران، ایران',
    'hero-spec': 'دفتر معماری',
    'hero-status': 'پذیرش پروژه‌های جدید ۱۴۰۴–۱۴۰۵',
    'hero-subtitle': 'سعید شریفی — معمار | تهران',
    'hero-statement': 'طراحی فضا با رویکردی مبتنی بر متریال، نور، فرم و اتمسفر.',
    'hero-desc': 'ریشه‌دار در هویت کالبدی و مصالح معاصر ایرانی همگام با نظم فضایی جهان‌شمول. دقت تکتونیک در ستایش تراورتن ناب، بازی سایه‌ها و آرامش تأمل‌برانگیز.',
    'hero-cta': 'مشاهده آثار برگزیده',
    'hero-img-badge': 'تصویر ۰۱ — پوسته مونولیت مسکونی (نیاوران)',
    'filter-index': 'فهرست ۰۱ / نمونه آثار',
    'projects-heading': 'آثار برگزیده',
    'filter-all': 'همه پروژه‌ها (۰۶)',
    'filter-exterior': 'معماری بیرونی',
    'filter-interior': 'معماری داخلی',
    'proj1-type': 'معماری بیرونی',
    'proj1-title': 'اقامتگاه تراورتن نیاوران',
    'proj1-area': '۱,۸۵۰ مترمربع — مسکونی',
    'proj2-type': 'معماری داخلی',
    'proj2-title': 'پنت‌هاوس گالری زعفرانیه',
    'proj2-area': '۵۴۰ مترمربع — پنت‌هاوس',
    'proj3-type': 'معماری بیرونی',
    'proj3-title': 'ویلای مونولیت لواسان',
    'proj3-area': '۹۲۰ مترمربع — ویلایی',
    'proj4-type': 'معماری داخلی',
    'proj4-title': 'استودیو مینیمال الهیه',
    'proj4-area': '۲۸۰ مترمربع — آتلیه',
    'proj5-type': 'معماری بیرونی',
    'proj5-title': 'پاویون حیاط دروس',
    'proj5-area': '۱,۲۰۰ مترمربع — مسکونی',
    'proj6-type': 'معماری داخلی',
    'proj6-title': 'آپارتمان ملموس فارس',
    'proj6-area': '۳۴۰ مترمربع — مسکونی',
    'about-pretitle': 'پرتره و رویکرد',
    'about-title': 'درباره سعید',
    'about-quote': '«من سعید شریفی، معمار مستقل مستقر در تهران هستم. رویکرد طراحی من بر ارتباط میان فضاهای داخلی و خارجی با تأکید بر متریال، نور، فرم و بیان معاصر معماری متمرکز است.»',
    'spec-practice': 'حیطه فعالیت:',
    'spec-practice-val': 'معمار مستقل',
    'spec-location': 'موقعیت:',
    'spec-location-val': 'تهران، ایران',
    'spec-focus': 'تمرکز:',
    'spec-focus-val': 'اقامتگاه‌های اختصاصی و مونوگراف کالبدی',
    'bio-academic-title': 'پیشینه آکادمیک',
    'bio-academic-sub': 'دانش کالبدی و نظریه معماری',
    'bio-academic-p': 'شکل‌گرفته بر بستر آموزش‌های تخصصی معماری در تهران، با تلفیق سنت‌های فضایی اصیل همچون حیاط مرکزی و آجرچینی با مینیمالیسم پالوده بین‌المللی.',
    'bio-milestones-title': 'نقاط عطف حرفه‌ای',
    'bio-milestones-sub': 'استقلال تکتونیکی',
    'bio-milestones-p': 'بیش از یک دهه خلق فضاهای متمایز در شمیرانات، الهیه و لواسان. التزام به پروژه‌های محدود و کیفی با تعامل پیوسته کارفرما برای خلق بناهایی دیرپا.',
    'metric-years': 'سال سابقه مستقل',
    'metric-projects': 'پروژه و مونوگراف',
    'metric-bespoke': 'طراحی اختصاصی',
    'expertise-pretitle': 'روش‌شناسی',
    'expertise-heading': 'رویکرد طراحی و تخصص',
    'expertise-lead': 'معماری افزوده‌ای تزئینی نیست؛ بلکه پالایش فیزیکی حجم، جریان نور روز و پیراستگی فضایی است.',
    'pillar1-title': 'توالی و پیوستگی فضایی',
    'pillar1-desc': 'تنظیم گذارهای سلسله‌مراتبی میان فضاهای عمومی و خلوتگاه‌های خصوصی با شکوه مرزها از طریق راهروهای فشرده و گشایش‌های دوطبقه.',
    'pillar2-title': 'حس ملموس مصالح بروز',
    'pillar2-desc': 'انتخاب آگاهانه سنگ‌های طبیعی، تراورتن متخلخل، بتن عریان، چوب بلوط دودی ایرانی و فولاد مات که با وقار گذر زمان را بازتاب می‌دهند.',
    'pillar3-title': 'کارگردانی نور',
    'pillar3-desc': 'رام کردن زوایای تند آفتاب تهران از طریق گشودگی‌های عمیق، شکاف‌های سقفی باریک و لوورهای سنگی برای نقاشی سایه‌ها بر اندام فضا.',
    'pillar4-title': 'گفتگوی بافتاری',
    'pillar4-desc': 'احترام به دانه و دانه‌بندی شهری محلات، خطوط افق البرز و شرایط اقلیمی همگام با ایستایی محکم در موضعی نوگرایانه.',
    'disc-heading': 'زمینه‌های تخصصی',
    'disc-1': 'معماری و طراحی داخلی',
    'disc-1-sub': 'طراحی اجزای ثابت، نورپردازی و سیالیت حرکت',
    'disc-2': 'معماری بیرونی و کالبدی',
    'disc-2-sub': 'طراحی نماهای تکتونیک، حجم و جرم سازه‌ای',
    'disc-3': 'فرم‌یابی مفهومی',
    'disc-3-sub': 'اتودهای پارامتریک و مطالعات فرمی اولیه',
    'tools-heading': 'تخصص فنی و ابزارهای دیجیتال',
    'tools-desc': 'محاسبات پیشرفته دیجیتال در خدمت حقیقت کالبدی بنا؛ ترسیمات دقیق اجرایی BIM، هماهنگی سازه و شبیه‌سازی واقع‌گرایانه اتمسفر فضا.',
    'tool-3ds': 'مدل‌سازی سه‌بعدی',
    'tool-cad': 'ترسیم و جزئیات فاز ۲',
    'tool-vray': 'محاسبه تابش نور',
    'tool-ps': 'پردازش و پست‌پرو',
    'contact-pretitle': 'همکاری و سفارش طراحی',
    'contact-title': 'همکاری و ارتباط',
    'contact-subtitle': 'برای پروژه‌های معماری، همکاری‌های حرفه‌ای و طرح پرسش‌های فنی، خوشحال می‌شویم در تماس باشید. پذیرای کارفرمایان خصوصی و دفاتر همکار هستیم.',
    'contact-phone-lbl': 'خط مستقیم / واتس‌اپ',
    'contact-email-lbl': 'پست الکترونیک',
    'contact-insta-lbl': 'صفحه اینستاگرام',
    'contact-web-lbl': 'درگاه اینترنتی و آتلیه سه‌بعدی',
    'cta-call': 'تماس',
    'cta-email': 'ارسال ایمیل',
    'cta-view': 'دنبال کنید',
    'cta-visit': 'مشاهده',
    'form-heading': 'فرم درخواست همکاری معماری',
    'form-desc': 'مشخصات اولیه پروژه خود را وارد فرمایید. کارشناسان آتلیه ظرف دو روز کاری با شما تماس خواهند گرفت.',
    'lbl-name': 'نام و نام خانوادگی *',
    'lbl-email': 'آدرس ایمیل *',
    'lbl-typology': 'گونه‌شناسی پروژه',
    'opt-res': 'معماری مسکونی (ویلا / آپارتمان شاخص)',
    'opt-int': 'معماری و طراحی داخلی و بازآفرینی فضا',
    'opt-com': 'پروژه‌های تجاری و پاویون‌های نمایشگاهی',
    'opt-3d': 'مشاوره و شبیه‌سازی تخصصی فضایی سه‌بعدی',
    'lbl-msg': 'شرح پروژه، ابعاد و موقعیت مکانی *',
    'form-confidential': 'کلیه اطلاعات پروژه طبق اصول محرمانگی استودیو محفوظ خواهد ماند.',
    'btn-send': 'ارسال پیام درخواست',
    'modal-concept-lbl': 'ایده و کانسپت طراحی',
    'modal-mat-lbl': 'مصالح اصلی',
    'modal-specs-lbl': 'مشخصات فنی پروژه',
    'spec-area': 'مساحت زیربنا:',
    'spec-scope': 'دامنه خدمات:',
    'spec-typology': 'گونه پروژه:',
    'spec-status': 'وضعیت اجرا:'
  }
};

let currentModalProject = null;
let currentModalImageIndex = 0;

function setupSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (!targetId || targetId === '#') return;
      const targetElem = document.querySelector(targetId);
      if (targetElem) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = targetElem.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

function setupLanguageSwitcher() {
  const btnEn = document.getElementById('lang-btn-en');
  const btnFa = document.getElementById('lang-btn-fa');
  if (btnEn) {
    btnEn.addEventListener('click', () => setLanguage('en'));
  }
  if (btnFa) {
    btnFa.addEventListener('click', () => setLanguage('fa'));
  }
}

function setLanguage(lang) {
  const root = document.getElementById('portfolio-root');
  if (!root) return;
  root.setAttribute('data-current-lang', lang);

  const btnEn = document.getElementById('lang-btn-en');
  const btnFa = document.getElementById('lang-btn-fa');

  if (lang === 'fa') {
    document.documentElement.setAttribute('dir', 'rtl');
    document.documentElement.setAttribute('lang', 'fa');
    root.style.fontFamily = "'IRANSans', 'IRANSansX', 'Vazirmatn', sans-serif";
    if (btnFa) {
      btnFa.className = 'px-space-sm font-label-caps text-label-caps hover:text-primary transition-colors font-bold text-primary cursor-pointer py-1';
    }
    if (btnEn) {
      btnEn.className = 'px-space-sm font-label-caps text-label-caps hover:text-primary transition-colors text-on-surface-variant cursor-pointer py-1';
    }
  } else {
    document.documentElement.setAttribute('dir', 'ltr');
    document.documentElement.setAttribute('lang', 'en');
    root.style.fontFamily = "'Hanken Grotesk', sans-serif";
    if (btnEn) {
      btnEn.className = 'px-space-sm font-label-caps text-label-caps hover:text-primary transition-colors font-bold text-primary cursor-pointer py-1';
    }
    if (btnFa) {
      btnFa.className = 'px-space-sm font-label-caps text-label-caps hover:text-primary transition-colors text-on-surface-variant cursor-pointer py-1';
    }
  }

  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  if (currentModalProject) {
    populateModalData(currentModalProject, lang);
  }
}

function setupFiltering() {
  const buttons = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.project-card');

  buttons.forEach(btn => {
    btn.addEventListener('click', function() {
      buttons.forEach(b => {
        b.classList.remove('bg-primary', 'text-surface', 'active-filter', 'font-medium');
        b.classList.add('bg-surface-container', 'text-on-surface');
      });

      this.classList.add('bg-primary', 'text-surface', 'active-filter', 'font-medium');
      this.classList.remove('bg-surface-container', 'text-on-surface');

      const filter = this.getAttribute('data-filter');

      cards.forEach(card => {
        const cat = card.getAttribute('data-category');
        if (filter === 'all' || cat === filter) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

function setupProjectCards() {
  const cards = document.querySelectorAll('.project-card');
  cards.forEach(card => {
    card.addEventListener('click', function(e) {
      e.stopPropagation();
      const id = this.getAttribute('data-project-id');
      openProjectModal(id);
    });
  });
}

function openProjectModal(projectId) {
  const project = projectsData[projectId];
  if (!project) return;
  currentModalProject = project;
  currentModalImageIndex = 0;

  const lang = document.getElementById('portfolio-root')?.getAttribute('data-current-lang') || 'fa';
  populateModalData(project, lang);

  const modal = document.getElementById('project-modal');
  if (modal) {
    modal.style.display = 'flex';
    void modal.offsetWidth;
    modal.classList.remove('hidden', 'opacity-0', 'pointer-events-none');
    modal.classList.add('opacity-100', 'pointer-events-auto');
    document.body.style.overflow = 'hidden';
  }
}

function populateModalData(project, lang) {
  document.getElementById('modal-project-number').innerText = (lang === 'fa' ? 'پروژه ' : 'PROJECT ') + project.num;
  document.getElementById('modal-project-typology').innerText = lang === 'fa' ? project.catFa : project.catEn;
  document.getElementById('modal-project-title').innerText = lang === 'fa' ? project.titleFa : project.titleEn;
  document.getElementById('modal-project-meta').innerText = lang === 'fa' ? project.metaFa : project.metaEn;
  document.getElementById('modal-project-desc').innerText = lang === 'fa' ? project.descFa : project.descEn;
  document.getElementById('modal-project-materials').innerText = lang === 'fa' ? project.materialsFa : project.materialsEn;

  document.getElementById('modal-spec-area').innerText = project.area;
  document.getElementById('modal-spec-scope').innerText = lang === 'fa' ? project.scopeFa : project.scopeEn;
  document.getElementById('modal-spec-typology').innerText = lang === 'fa' ? project.typologyFa : project.typologyEn;
  document.getElementById('modal-spec-status').innerText = lang === 'fa' ? project.statusFa : project.statusEn;

  updateModalImage(project);
}

function updateModalImage(project) {
  const img = document.getElementById('modal-main-image');
  const counter = document.getElementById('modal-gallery-counter');
  const activeImgSrc = (project.images && project.images[currentModalImageIndex]) ? project.images[currentModalImageIndex] : project.imgSrc;

  if (img && activeImgSrc) {
    img.setAttribute('src', activeImgSrc);
  }
  if (counter && project.images) {
    counter.innerText = (currentModalImageIndex + 1) + ' / ' + project.images.length;
  }
}

window.cycleModalImage = function(dir) {
  if (!currentModalProject || !currentModalProject.images) return;
  const total = currentModalProject.images.length;
  currentModalImageIndex = (currentModalImageIndex + dir + total) % total;
  updateModalImage(currentModalProject);
};

window.closeProjectModal = function() {
  const modal = document.getElementById('project-modal');
  if (modal) {
    modal.classList.remove('opacity-100', 'pointer-events-auto');
    modal.classList.add('opacity-0', 'pointer-events-none');
    setTimeout(() => {
      modal.style.display = 'none';
      modal.classList.add('hidden');
    }, 300);
  }
  document.body.style.overflow = '';
  currentModalProject = null;
};

// Contact Form Handler
window.handleContactSubmit = function() {
  const name = document.getElementById('form-name').value;
  const statusBox = document.getElementById('form-status');
  const lang = document.getElementById('portfolio-root')?.getAttribute('data-current-lang') || 'fa';

  if (statusBox) {
    statusBox.classList.remove('hidden');
    if (lang === 'fa') {
      statusBox.innerHTML = `<strong>پیام دریافت شد، ${name} گرامی.</strong> اطلاعات پروژه شما در آتلیه ثبت گردید. با شما تماس گرفته خواهد شد.`;
    } else {
      statusBox.innerHTML = `<strong>Inquiry Transmitted, ${name}.</strong> Your project coordinates have been logged at the studio. We will connect with you shortly.`;
    }

    document.getElementById('contact-form').reset();
    setTimeout(() => {
      statusBox.classList.add('hidden');
    }, 8000);
  }
};

function init() {
  setupSmoothScroll();
  setupLanguageSwitcher();
  setupFiltering();
  setupProjectCards();

  const modalEl = document.getElementById('project-modal');
  if (modalEl) {
    modalEl.addEventListener('click', function(e) {
      if (e.target === this) {
        window.closeProjectModal();
      }
    });
  }

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      window.closeProjectModal();
    }
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
