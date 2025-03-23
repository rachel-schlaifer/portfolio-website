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
    cloudHeading: "Cloud",
    // Navigation
    homeLink: "Home",
    contactLink: "Contact",
    // Contact page
    contactHeading: "Contact Me",
    nameLabel: "Your name",
    emailLabel: "Your email address",
    subjectLabel: "Subject",
    messageLabel: "Message",
    sendButton: "Send Message",
    backLink: "Back to Home",
    successMessage: "Thank you for your message! I'll get back to you soon.",
    errorMessage: "Sorry, there was an error sending your message. Please try again."
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
    cloudHeading: "クラウド",
    // Navigation
    homeLink: "ホーム",
    contactLink: "お問い合わせ",
    // Contact page
    contactHeading: "お問い合わせ",
    nameLabel: "お名前",
    emailLabel: "メールアドレス",
    subjectLabel: "件名",
    messageLabel: "メッセージ",
    sendButton: "送信する",
    backLink: "ホームに戻る",
    successMessage: "メッセージをいただきありがとうございます！近日中にご連絡いたします。",
    errorMessage: "申し訳ありませんが、メッセージの送信中にエラーが発生しました。もう一度お試しください。"
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
    cloudHeading: "Nube",
    // Navigation
    homeLink: "Inicio",
    contactLink: "Contacto",
    // Contact page
    contactHeading: "Contáctame",
    nameLabel: "Nombre",
    emailLabel: "Correo electrónico",
    subjectLabel: "Asunto",
    messageLabel: "Mensaje",
    sendButton: "Enviar mensaje",
    backLink: "Volver al inicio",
    successMessage: "¡Gracias por tu mensaje! Te responderé pronto.",
    errorMessage: "Lo siento, hubo un error al enviar tu mensaje. Por favor, inténtalo de nuevo."
  }
};

// Function to change the language
function changeLanguage(lang) {
  if (!translations[lang]) return;
  
  // Save language preference to localStorage
  localStorage.setItem('preferredLanguage', lang);
  
  // Update active language button
  document.querySelectorAll('.language-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.getAttribute('data-lang') === lang) {
      btn.classList.add('active');
    }
  });
  
  // Detect the current page and apply translations accordingly
  applyTranslations(lang);
}

// Apply translations based on the current page
function applyTranslations(lang) {
  // Elements that exist on all pages
  updateElement('.nav-links a:nth-of-type(1)', 'homeLink', lang);
  updateElement('.nav-links a:nth-of-type(2)', 'contactLink', lang);
  
  // Homepage elements
  if (document.querySelector('.landing-section')) {
    updateElement('.header h1', 'welcomeHeading', lang);
    updateElement('.landing-section > p', 'exploreText', lang);
    updateElement('.content-section h2:nth-of-type(1)', 'aboutMeHeading', lang);
    updateElement('.content-section p:nth-of-type(1)', 'aboutMeText', lang);
    updateElement('.content-section h2:nth-of-type(2)', 'projectsHeading', lang);
    updateElement('.content-section p:nth-of-type(2)', 'projectDescription', lang);
    updateElement('.content-section a', 'projectLink', lang);
    updateElement('.content-section h2:nth-of-type(3)', 'techStackHeading', lang);
    updateElement('.tech-category:nth-of-type(1) h3', 'languagesHeading', lang);
    updateElement('.tech-category:nth-of-type(2) h3', 'datastoreHeading', lang);
    updateElement('.tech-category:nth-of-type(3) h3', 'toolsHeading', lang);
    updateElement('.tech-category:nth-of-type(4) h3', 'cloudHeading', lang);
  }
  
  // Contact page elements
  if (document.querySelector('.contact-section')) {
    updateElement('.contact-section h1', 'contactHeading', lang);
    updateElement('label[for="name"]', 'nameLabel', lang);
    updateElement('label[for="email"]', 'emailLabel', lang);
    updateElement('label[for="subject"]', 'subjectLabel', lang);
    updateElement('label[for="message"]', 'messageLabel', lang);
    updateElement('#submit-btn', 'sendButton', lang);
    updateElement('.back-link a', 'backLink', lang);
    
    // Flash messages if present
    updateElement('.alert-success', 'successMessage', lang);
    updateElement('.alert-danger', 'errorMessage', lang);
  }
}

// Helper function to update an element if it exists
function updateElement(selector, translationKey, lang) {
  const element = document.querySelector(selector);
  if (element && translations[lang][translationKey]) {
    element.textContent = translations[lang][translationKey];
  }
}

// Initialize translation system - with both Turbolinks and standard events
function initTranslations() {
  // Set up language switcher buttons
  document.querySelectorAll('.language-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      changeLanguage(this.getAttribute('data-lang'));
    });
  });
  
  // Check if there's a saved language preference
  const savedLanguage = localStorage.getItem('preferredLanguage');
  if (savedLanguage && translations[savedLanguage]) {
    changeLanguage(savedLanguage);
  }
}

// Handle both initial page load and Turbolinks navigation
document.addEventListener('DOMContentLoaded', initTranslations);
document.addEventListener('turbolinks:load', initTranslations);

// Also support jQuery ready for backward compatibility
$(document).ready(initTranslations);
$(document).on('turbolinks:load', initTranslations);
