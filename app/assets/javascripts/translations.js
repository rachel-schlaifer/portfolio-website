// Translations for the portfolio website

const translations = {
  en: {
    welcomeHeading: "Welcome to My Portfolio",
    exploreText: "Explore my projects and learn more about my journey in tech.",
    aboutMeHeading: "About Me",
    aboutMeText: "I'm Rachel! I am super passionate about helping others and want to create positive experiences for people through design and technology that solves real-world needs. I started my programming journey with a six month bootcamp at Le Wagon, Tokyo. Outside of improving my development skills, I enjoy running, various types of dance, reading, tending to my houseplants, and of course, lots of coffee.",
    projectsHeading: "Projects",
    projectDescription: "Pantry management and recipe generation web application leveraging AI photo recognition and data analysis.",
    projectLink: "Go check it out!",
    techStackHeading: "Tech Stack",
    languagesHeading: "Languages",
    datastoreHeading: "Datastore",
    toolsHeading: "Tools",
    cloudHeading: "Cloud"
  },
  jp: {
    welcomeHeading: "ポートフォリオへようこそ",
    exploreText: "私のプロジェクトを探索し、テック業界での私の旅についてもっと学びましょう。",
    aboutMeHeading: "自己紹介",
    aboutMeText: "レイチェルです！他の人を助けることに情熱を持っており、実際のニーズを解決するデザインとテクノロジーを通じて、人々にポジティブな体験を提供したいと考えています。私のプログラミングの旅は、東京のLe Wagonで6ヶ月のブートキャンプから始まりました。開発スキルを向上させる以外にも、ランニング、様々なダンス、読書、観葉植物の世話、そしてもちろん、たくさんのコーヒーを楽しんでいます。",
    projectsHeading: "プロジェクト",
    projectDescription: "AI画像認識とデータ分析を活用したパントリー管理とレシピ生成のウェブアプリケーション。",
    projectLink: "チェックしてみてください！",
    techStackHeading: "テックスタック",
    languagesHeading: "言語",
    datastoreHeading: "データストア",
    toolsHeading: "ツール",
    cloudHeading: "クラウド"
  },
  es: {
    welcomeHeading: "Bienvenido a Mi Portafolio",
    exploreText: "Explora mis proyectos y aprende más sobre mi trayectoria en tecnología.",
    aboutMeHeading: "Sobre Mí",
    aboutMeText: "¡Soy Rachel! Me apasiona ayudar a los demás y quiero crear experiencias positivas para las personas a través del diseño y la tecnología que resuelve necesidades del mundo real. Comencé mi viaje de programación con un bootcamp de seis meses en Le Wagon, Tokio. Además de mejorar mis habilidades de desarrollo, disfruto corriendo, varios tipos de baile, leyendo, cuidando mis plantas de interior y, por supuesto, tomando mucho café.",
    projectsHeading: "Proyectos",
    projectDescription: "Aplicación web de gestión de despensa y generación de recetas que aprovecha el reconocimiento fotográfico de IA y el análisis de datos.",
    projectLink: "¡Échale un vistazo!",
    techStackHeading: "Stack Tecnológico",
    languagesHeading: "Lenguajes",
    datastoreHeading: "Almacenamiento de Datos",
    toolsHeading: "Herramientas",
    cloudHeading: "Nube"
  }
};

// Function to change the language
function changeLanguage(lang) {
  if (!translations[lang]) return;
  
  const elements = {
    welcomeHeading: document.querySelector('.header h1'),
    exploreText: document.querySelector('.landing-section > p'),
    aboutMeHeading: document.querySelector('.content-section h2:nth-of-type(1)'),
    aboutMeText: document.querySelector('.content-section p:nth-of-type(1)'),
    projectsHeading: document.querySelector('.content-section h2:nth-of-type(2)'),
    projectDescription: document.querySelector('.content-section p:nth-of-type(2)'),
    projectLink: document.querySelector('.content-section a'),
    techStackHeading: document.querySelector('.content-section h2:nth-of-type(3)'),
    languagesHeading: document.querySelector('.tech-category:nth-of-type(1) h3'),
    datastoreHeading: document.querySelector('.tech-category:nth-of-type(2) h3'),
    toolsHeading: document.querySelector('.tech-category:nth-of-type(3) h3'),
    cloudHeading: document.querySelector('.tech-category:nth-of-type(4) h3')
  };
  
  // Update text content for each element
  for (const [key, element] of Object.entries(elements)) {
    if (element && translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  }
  
  // Save language preference to localStorage
  localStorage.setItem('preferredLanguage', lang);
  
  // Update active language button
  document.querySelectorAll('.language-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.getAttribute('data-lang') === lang) {
      btn.classList.add('active');
    }
  });
}

// Initialize translation system
document.addEventListener('DOMContentLoaded', function() {
  // Check if there's a saved language preference
  const savedLanguage = localStorage.getItem('preferredLanguage');
  if (savedLanguage && translations[savedLanguage]) {
    changeLanguage(savedLanguage);
  }
});
