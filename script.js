// --- Translation Data ---
const translations = {
    'en': {
        siteTitleEn: 'Aribnb - Charming Apartment Rental',
        siteTitleEl: 'Aribnb - Ενοικίαση Γοητευτικού Διαμερίσματος', // Add Greek title
        brandName: 'Aribnb Rentals',
        navHome: 'Home',
        navDetails: 'Details',
        navGallery: 'Gallery',
        navContact: 'Contact',
        heroTitle: 'Your Perfect Getaway Apartment',
        heroSubtitle: 'Comfort, style, and convenience await you.',
        detailsTitle: 'Apartment Overview',
        detailsHeading: 'Discover Your Home Away From Home',
        detailsDesc1: 'This bright and airy apartment offers a comfortable and stylish base for your visit. Located in a vibrant neighbourhood, you\'ll have easy access to local cafes, shops, and attractions. The space is thoughtfully designed with modern amenities to ensure a relaxing stay.',
        detailsDesc2: 'Enjoy a morning coffee on the sunny balcony, prepare meals in the fully equipped kitchen, or unwind in the cozy living area after a day of exploring.',
        featuresTitle: 'Key Features:',
        featureWifi: 'High-speed Wi-Fi',
        featureTv: 'Flat-screen TV',
        featureAc: 'Air Conditioning & Heating',
        featureKitchen: 'Fully Equipped Kitchenette',
        featureBalcony: 'Private Balcony',
        featureGuests: 'Sleeps 2-3 Guests',
        featureLocation: 'Great Location',
        galleryTitle: 'Photo Gallery',
        captionLiving: 'Cozy Living Space',
        captionBedroom: 'Restful Bedroom',
        captionKitchen: 'Convenient Kitchenette',
        captionBalcony: 'Relaxing Balcony',
        controlPrev: 'Previous',
        controlNext: 'Next',
        contactTitle: 'Contact for Availability',
        contactSubtitle: 'Interested in renting this lovely apartment? Get in touch!',
        contactNameLabel: 'Name:',
        contactPhoneLabel: 'Phone:',
        contactInfoText: 'Please call or message for inquiries and booking information. No price details will be provided online.',
        footerText: '&copy; 2025 Aribnb Rentals. All rights reserved.',
        langSwitchToEl: 'Ελληνικά', // Text for button when site is English
        langSwitchToEn: 'English'   // Text for button when site is Greek
    },
    'el': {
        siteTitleEn: 'Aribnb - Charming Apartment Rental', // Keep English title key for consistency
        siteTitleEl: 'Aribnb - Ενοικίαση Γοητευτικού Διαμερίσματος',
        brandName: 'Aribnb Ενοικιάσεις',
        navHome: 'Αρχική',
        navDetails: 'Λεπτομέρειες',
        navGallery: 'Συλλογή',
        navContact: 'Επικοινωνία',
        heroTitle: 'Το Ιδανικό σας Διαμέρισμα Απόδρασης',
        heroSubtitle: 'Άνεση, στυλ και ευκολία σας περιμένουν.',
        detailsTitle: 'Επισκόπηση Διαμερίσματος',
        detailsHeading: 'Ανακαλύψτε το Δεύτερό σας Σπίτι',
        detailsDesc1: 'Αυτό το φωτεινό και ευάερο διαμέρισμα προσφέρει μια άνετη και κομψή βάση για την επίσκεψή σας. Σε μια ζωντανή γειτονιά, θα έχετε εύκολη πρόσβαση σε τοπικά καφέ, καταστήματα και αξιοθέατα. Ο χώρος είναι προσεκτικά σχεδιασμένος με σύγχρονες ανέσεις για να εξασφαλίσει μια χαλαρωτική διαμονή.',
        detailsDesc2: 'Απολαύστε έναν πρωινό καφέ στο ηλιόλουστο μπαλκόνι, ετοιμάστε γεύματα στην πλήρως εξοπλισμένη κουζίνα ή χαλαρώστε στο άνετο σαλόνι μετά από μια μέρα εξερεύνησης.',
        featuresTitle: 'Βασικά Χαρακτηριστικά:',
        featureWifi: 'Wi-Fi Υψηλής Ταχύτητας',
        featureTv: 'Τηλεόραση Επίπεδης Οθόνης',
        featureAc: 'Κλιματισμός & Θέρμανση',
        featureKitchen: 'Πλήρως Εξοπλισμένη Κουζίνα',
        featureBalcony: 'Ιδιωτικό Μπαλκόνι',
        featureGuests: 'Φιλοξενεί 2-3 Άτομα',
        featureLocation: 'Εξαιρετική Τοποθεσία',
        galleryTitle: 'Συλλογή Φωτογραφιών',
        captionLiving: 'Άνετος Χώρος Σαλονιού',
        captionBedroom: 'Ξεκούραστο Υπνοδωμάτιο',
        captionKitchen: 'Βολική Κουζίνα',
        captionBalcony: 'Χαλαρωτικό Μπαλκόνι',
        controlPrev: 'Προηγούμενο',
        controlNext: 'Επόμενο',
        contactTitle: 'Επικοινωνήστε για Διαθεσιμότητα',
        contactSubtitle: 'Ενδιαφέρεστε να νοικιάσετε αυτό το υπέροχο διαμέρισμα; Επικοινωνήστε!',
        contactNameLabel: 'Όνομα:',
        contactPhoneLabel: 'Τηλέφωνο:',
        contactInfoText: 'Παρακαλώ καλέστε ή στείλτε μήνυμα για ερωτήσεις και πληροφορίες κράτησης. Δεν παρέχονται λεπτομέρειες τιμής online.',
        footerText: '&copy; 2025 Aribnb Ενοικιάσεις. Με επιφύλαξη παντός δικαιώματος.',
        langSwitchToEl: 'Ελληνικά',
        langSwitchToEn: 'English'
    }
};

// --- Elements ---
const langSwitcherButton = document.getElementById('lang-switcher');
const langSwitcherTextSpan = document.getElementById('lang-switcher-text');
const translatableElements = document.querySelectorAll('[data-translate-key]');
const htmlTag = document.documentElement;
const titleTag = document.querySelector('title');

// --- Functions ---

// Function to set the language
function setLanguage(lang) {
    if (!translations[lang]) {
        console.error(`Language ${lang} not found in translations.`);
        return;
    }

    // Update all elements with data-translate-key
    translatableElements.forEach(el => {
        const key = el.getAttribute('data-translate-key');
        const translation = translations[lang][key];

        if (translation !== undefined) {
            // Check for keys that need innerHTML (like footerText)
            if (key === 'footerText') {
                el.innerHTML = translation;
            } else {
                // Check if the element is an input placeholder or similar if needed
                // Example: if (el.tagName === 'INPUT' && el.type === 'text') el.placeholder = translation;
                el.textContent = translation;
            }
        } else {
            console.warn(`Translation key "${key}" not found for language "${lang}".`);
        }
    });

    // Update page title (handle both languages)
    titleTag.textContent = lang === 'el' ? translations.el.siteTitleEl : translations.en.siteTitleEn;


    // Update HTML lang attribute
    htmlTag.setAttribute('lang', lang);

    // Update the language switcher button text and functionality
    const nextLang = lang === 'en' ? 'el' : 'en';
    const buttonTextKey = lang === 'en' ? 'langSwitchToEl' : 'langSwitchToEn';
    langSwitcherTextSpan.textContent = translations[lang][buttonTextKey]; // Display the *other* language name
    langSwitcherButton.setAttribute('data-current-lang', lang); // Store current language

    console.log(`Language switched to: ${lang}`);
}

// --- Event Listener ---
langSwitcherButton.addEventListener('click', () => {
    const currentLang = langSwitcherButton.getAttribute('data-current-lang') || 'en'; // Default to 'en' if not set
    const nextLang = currentLang === 'en' ? 'el' : 'en';
    setLanguage(nextLang);
});

// --- Initial Setup ---
// Detect browser language or default to English
// const userLang = navigator.language || navigator.userLanguage; // e.g., 'en-US', 'el-GR'
// const initialLang = userLang.startsWith('el') ? 'el' : 'en';
const initialLang = 'en'; // Or force English start

setLanguage(initialLang); // Set initial language on page load

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        if (this.getAttribute('data-bs-target') || this.getAttribute('data-bs-slide')) {
            return;
        }
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const headerOffset = document.querySelector('.sticky-top')?.offsetHeight || 0;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({ top: offsetPosition, behavior: "smooth" });
            const navbarCollapse = document.querySelector('.navbar-collapse.show');
            if (navbarCollapse) {
                const bsCollapse = new bootstrap.Collapse(navbarCollapse, { toggle: false });
                bsCollapse.hide();
            }
        }
    });
});

// Active class highlighting based on scroll position
const sections = document.querySelectorAll('section[id]');
const navLiLinks = document.querySelectorAll('.navbar-nav .nav-item .nav-link[href^="#"]'); // Select only links pointing to sections
const homeLink = document.querySelector('.navbar-nav .nav-item .nav-link[href="#"]'); // Select the home link specifically

window.addEventListener('scroll', () => {
  let current = '';
  const headerOffset = document.querySelector('.sticky-top')?.offsetHeight || 0;

  sections.forEach(section => {
    const sectionTop = section.offsetTop - headerOffset - 70; // Adjust offset
    if (window.pageYOffset >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  // Deactivate all section links first
  navLiLinks.forEach(link => link.classList.remove('active'));
  // Deactivate home link
   if (homeLink) homeLink.classList.remove('active');

  // Activate the current section link
  if (current) {
      const activeLink = document.querySelector(`.navbar-nav .nav-item .nav-link[href="#${current}"]`);
      if (activeLink) {
          activeLink.classList.add('active');
      }
  } else if (window.pageYOffset < sections[0]?.offsetTop - headerOffset - 70) {
        // If scrolled to the very top, activate the Home link
       if (homeLink) homeLink.classList.add('active');
  }
});