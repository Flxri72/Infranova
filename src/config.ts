// =============================================================================
// InfraNova Systems - Configuration
// =============================================================================
// Technology Consulting Company Website Configuration
// =============================================================================

// Helper function to get correct image paths for both dev and production
export const getImagePath = (imagePath: string): string => {
  // Get the base path - in Vite, import.meta.env.BASE_URL is processed at build time
  const basePath = import.meta.env.BASE_URL || '/';
  
  // Remove leading slash from image path if present
  const cleanPath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath;
  
  // Ensure basePath ends with /
  const cleanBase = basePath.endsWith('/') ? basePath : basePath + '/';
  
  // Combine base and path
  return cleanBase + cleanPath;
};

// -----------------------------------------------------------------------------
// Site Config
// -----------------------------------------------------------------------------
export interface SiteConfig {
  title: string;
  description: string;
  language: string;
  keywords: string;
  ogImage: string;
  canonical: string;
}

export const siteConfig: SiteConfig = {
  title: "InfraNova Systems - Technology Infrastructure Modernization",
  description: "InfraNova Systems is a technology consulting company specializing in IT infrastructure modernization, cybersecurity, hardware upgrades, and custom software development for businesses.",
  language: "en",
  keywords: "technology consulting, IT infrastructure, cybersecurity, software development, hardware upgrades, business technology, Barranquilla Colombia",
  ogImage: getImagePath("/images/hero-bg.jpg"),
  canonical: "https://infranova.systems",
};

// -----------------------------------------------------------------------------
// Navigation Config
// -----------------------------------------------------------------------------
export interface NavDropdownItem {
  name: string;
  href: string;
}

export interface NavLink {
  name: string;
  href: string;
  icon: string;
  dropdown?: NavDropdownItem[];
}

export interface NavigationConfig {
  brandName: string;
  brandSubname: string;
  tagline: string;
  navLinks: NavLink[];
  ctaButtonText: string;
}

export const navigationConfig: NavigationConfig = {
  brandName: "InfraNova",
  brandSubname: "Systems",
  tagline: "Technology Infrastructure Modernization",
  navLinks: [
    { name: "Home", href: "#home", icon: "Home" },
    { name: "About", href: "#about", icon: "BookOpen" },
    { name: "Services", href: "#services", icon: "Sparkles" },
    { name: "Methodology", href: "#methodology", icon: "Clock" },
    { name: "Team", href: "#team", icon: "Users" },
    { name: "Projects", href: "#projects", icon: "Award" },
    { name: "Contact", href: "#contact", icon: "Mail" },
  ],
  ctaButtonText: "Get Started",
};

// -----------------------------------------------------------------------------
// Preloader Config
// -----------------------------------------------------------------------------
export interface PreloaderConfig {
  brandName: string;
  brandSubname: string;
  yearText: string;
}

export const preloaderConfig: PreloaderConfig = {
  brandName: "InfraNova",
  brandSubname: "Systems",
  yearText: "Est. 2024",
};

// -----------------------------------------------------------------------------
// Hero Config
// -----------------------------------------------------------------------------
export interface HeroStat {
  value: number;
  suffix: string;
  label: string;
}

export interface HeroConfig {
  scriptText: string;
  mainTitle: string;
  ctaButtonText: string;
  ctaTarget: string;
  stats: HeroStat[];
  decorativeText: string;
  backgroundImage: string;
}

export const heroConfig: HeroConfig = {
  scriptText: "Modernizing Technology Infrastructure",
  mainTitle: "InfraNova\nSystems",
  ctaButtonText: "Our Services",
  ctaTarget: "#services",
  stats: [
    { value: 50, suffix: "+", label: "Projects Completed" },
    { value: 100, suffix: "%", label: "Client Satisfaction" },
    { value: 5, suffix: "", label: "Expert Team Members" },
    { value: 24, suffix: "/7", label: "Support Available" },
  ],
  decorativeText: "TECHNOLOGY CONSULTING",
  backgroundImage: getImagePath("/images/hero-bg.jpg"),
};

// -----------------------------------------------------------------------------
// Services Config (Wine Showcase repurposed)
// -----------------------------------------------------------------------------
export interface Service {
  id: string;
  name: string;
  subtitle: string;
  year: string;
  image: string;
  filter: string;
  glowColor: string;
  description: string;
  features: string[];
  icon: string;
}

export interface ServiceFeature {
  icon: string;
  title: string;
  description: string;
}

export interface ServicesConfig {
  scriptText: string;
  subtitle: string;
  mainTitle: string;
  services: Service[];
  features: ServiceFeature[];
  quote: {
    text: string;
    attribution: string;
    prefix: string;
  };
}

export const servicesConfig: ServicesConfig = {
  scriptText: "What We Offer",
  subtitle: "OUR EXPERTISE",
  mainTitle: "Our Services",
  services: [
    {
      id: "infrastructure",
      name: "IT Infrastructure",
      subtitle: "Modernization",
      year: "01",
      image: getImagePath("/images/infrastructure.jpg"),
      filter: "",
      glowColor: "bg-blue-500/20",
      description: "Upgrade outdated computers, operating systems, and storage systems to modern high-performance hardware.",
      features: ["Hardware Upgrades", "OS Migration", "Storage Solutions", "Network Setup"],
      icon: "Server",
    },
    {
      id: "cybersecurity",
      name: "Cybersecurity",
      subtitle: "Implementation",
      year: "02",
      image: getImagePath("/images/cybersecurity.jpg"),
      filter: "",
      glowColor: "bg-purple-500/20",
      description: "Protect company data with secure operating systems, antivirus protection, and secure data backup systems.",
      features: ["Security Audits", "Antivirus Setup", "Data Encryption", "Backup Systems"],
      icon: "Shield",
    },
    {
      id: "software",
      name: "Custom Software",
      subtitle: "Development",
      year: "03",
      image: getImagePath("/images/software-dev.jpg"),
      filter: "",
      glowColor: "bg-cyan-500/20",
      description: "Design and develop software tailored to the specific needs of each business.",
      features: ["Web Applications", "Desktop Software", "Mobile Apps", "API Integration"],
      icon: "Code",
    },
    {
      id: "data",
      name: "Data Management",
      subtitle: "& Optimization",
      year: "04",
      image: getImagePath("/images/data-management.jpg"),
      filter: "",
      glowColor: "bg-emerald-500/20",
      description: "Implement structured data systems, validation rules, and standardized formats to improve reliability and analysis.",
      features: ["Database Design", "Data Migration", "Analytics", "Reporting"],
      icon: "Database",
    },
    {
      id: "consulting",
      name: "Technology",
      subtitle: "Consulting",
      year: "05",
      image: getImagePath("/images/consulting.jpg"),
      filter: "",
      glowColor: "bg-amber-500/20",
      description: "Provide technical analysis, infrastructure evaluation, and strategic recommendations for companies that need technological transformation.",
      features: ["IT Assessment", "Strategic Planning", "Cost Analysis", "Training"],
      icon: "Lightbulb",
    },
  ],
  features: [
    {
      icon: "Clock",
      title: "Fast Implementation",
      description: "Quick deployment with minimal disruption to your business operations.",
    },
    {
      icon: "Shield",
      title: "Secure Solutions",
      description: "Enterprise-grade security protocols to protect your valuable data.",
    },
    {
      icon: "Users",
      title: "Expert Support",
      description: "Dedicated team of professionals available around the clock.",
    },
  ],
  quote: {
    text: "Technology is best when it brings people together and empowers businesses to achieve more.",
    attribution: "InfraNova Systems Philosophy",
    prefix: "Our Vision",
  },
};

// -----------------------------------------------------------------------------
// Case Study Config (Winery Carousel repurposed)
// -----------------------------------------------------------------------------
export interface CaseStudySlide {
  image: string;
  title: string;
  subtitle: string;
  area: string;
  unit: string;
  description: string;
}

export interface CaseStudyConfig {
  scriptText: string;
  subtitle: string;
  mainTitle: string;
  locationTag: string;
  slides: CaseStudySlide[];
}

export const caseStudyConfig: CaseStudyConfig = {
  scriptText: "Success Story",
  subtitle: "CASE STUDY",
  mainTitle: "Café Technology\nModernization Project",
  locationTag: "Barranquilla, Colombia",
  slides: [
    {
      image: getImagePath("/images/cybercafe.jpg"),
      title: "Before Modernization",
      subtitle: "Outdated Infrastructure",
      area: "Problems",
      unit: "Identified",
      description: "The cybercafé was struggling with unsupported operating systems, slow HDD storage, low RAM capacity, and significant security vulnerabilities affecting customer experience.",
    },
    {
      image: getImagePath("/images/infrastructure.jpg"),
      title: "Our Solution",
      subtitle: "Complete Transformation",
      area: "Systems",
      unit: "Upgraded",
      description: "We implemented a comprehensive modernization plan including hardware upgrades to modern processors and SSD storage, migration to modern operating systems, and cloud data backup systems.",
    },
    {
      image: getImagePath("/images/cybersecurity.jpg"),
      title: "The Results",
      subtitle: "Dramatic Improvement",
      area: "Performance",
      unit: "Increase",
      description: "The cybercafé experienced significant improvement in performance, security, and operational efficiency. Customer satisfaction increased and maintenance costs were reduced by 40%.",
    },
  ],
};

// -----------------------------------------------------------------------------
// Methodology Config (Museum repurposed)
// -----------------------------------------------------------------------------
export interface MethodologyStep {
  year: string;
  event: string;
}

export interface MethodologyTab {
  id: string;
  name: string;
  icon: string;
  image: string;
  content: {
    title: string;
    description: string;
    highlight: string;
  };
}

export interface MethodologyConfig {
  scriptText: string;
  subtitle: string;
  mainTitle: string;
  introText: string;
  timeline: MethodologyStep[];
  tabs: MethodologyTab[];
  openingHours: string;
  openingHoursLabel: string;
  ctaButtonText: string;
  yearBadge: string;
  yearBadgeLabel: string;
  quote: {
    prefix: string;
    text: string;
    attribution: string;
  };
  founderPhotoAlt: string;
  founderPhoto: string;
}

export const methodologyConfig: MethodologyConfig = {
  scriptText: "How We Work",
  subtitle: "OUR APPROACH",
  mainTitle: "Our Methodology",
  introText: "At InfraNova Systems, we follow a proven four-step methodology that ensures every project is delivered with precision, quality, and measurable results. Our systematic approach has been refined through dozens of successful technology modernization projects.",
  timeline: [
    { year: "Step 1", event: "Technical Diagnosis" },
    { year: "Step 2", event: "Infrastructure Design" },
    { year: "Step 3", event: "Implementation" },
    { year: "Step 4", event: "Optimization" },
  ],
  tabs: [
    {
      id: "diagnosis",
      name: "Diagnosis",
      icon: "Search",
      image: getImagePath("/images/consulting.jpg"),
      content: {
        title: "Technical Diagnosis",
        description: "We begin with a comprehensive evaluation of your existing infrastructure. Our team identifies technological risks, performance bottlenecks, and security vulnerabilities to create a detailed assessment report.",
        highlight: "Complete infrastructure audit and risk assessment",
      },
    },
    {
      id: "design",
      name: "Design",
      icon: "Layout",
      image: getImagePath("/images/data-management.jpg"),
      content: {
        title: "Infrastructure Design",
        description: "Based on our diagnosis, we design an optimal hardware and software architecture tailored to your business needs. This includes selecting the right components, planning migrations, and ensuring scalability.",
        highlight: "Custom architecture planning and solution design",
      },
    },
    {
      id: "implementation",
      name: "Implementation",
      icon: "Settings",
      image: getImagePath("/images/infrastructure.jpg"),
      content: {
        title: "Implementation",
        description: "Our expert team deploys new systems, security tools, and upgraded hardware with minimal disruption to your operations. We handle everything from installation to configuration and testing.",
        highlight: "Seamless deployment with minimal downtime",
      },
    },
    {
      id: "optimization",
      name: "Optimization",
      icon: "TrendingUp",
      image: getImagePath("/images/software-dev.jpg"),
      content: {
        title: "Optimization",
        description: "After implementation, we continuously monitor and improve system performance. Our optimization process ensures your technology investment delivers maximum value and remains future-proof.",
        highlight: "Continuous improvement and performance monitoring",
      },
    },
  ],
  openingHours: "Monday - Friday: 8:00 AM - 6:00 PM",
  openingHoursLabel: "Business Hours",
  ctaButtonText: "Start Your Project",
  yearBadge: "4",
  yearBadgeLabel: "Steps",
  quote: {
    prefix: "Our Commitment",
    text: "Every successful technology transformation begins with understanding the unique challenges and goals of each client.",
    attribution: "InfraNova Systems Team",
  },
  founderPhotoAlt: "Technology Infrastructure",
  founderPhoto: getImagePath("/images/hero-bg.jpg"),
};

// -----------------------------------------------------------------------------
// Team Config (News repurposed)
// -----------------------------------------------------------------------------
export interface TeamMember {
  id: number;
  image?: string;
  name: string;
  role: string;
  description: string;
}

export interface Testimonial {
  name: string;
  role: string;
  text: string;
  rating: number;
}

export interface TeamConfig {
  scriptText: string;
  subtitle: string;
  mainTitle: string;
  viewAllText: string;
  readMoreText: string;
  members: TeamMember[];
  testimonialsScriptText: string;
  testimonialsSubtitle: string;
  testimonialsMainTitle: string;
  testimonials: Testimonial[];
  storyScriptText: string;
  storySubtitle: string;
  storyTitle: string;
  storyParagraphs: string[];
  storyTimeline: { value: string; label: string }[];
  storyQuote: {
    prefix: string;
    text: string;
    attribution: string;
  };
  storyImage: string;
  storyImageCaption: string;
}

export const teamConfig: TeamConfig = {
  scriptText: "Meet The Experts",
  subtitle: "OUR TEAM",
  mainTitle: "Our Team",
  viewAllText: "View All",
  readMoreText: "Learn More",
  members: [
    {
      id: 1,
      name: "Juan David Florián Amador",
      role: "Project Leader & General Coordinator",
      description: "Responsible for coordinating project development, team communication, and strategic planning.",
    },
    {
      id: 2,
      name: "Angello Michaelle Zuñiga Olave",
      role: "Technical Diagnosis Specialist",
      description: "Responsible for evaluating existing infrastructure, identifying technological risks, and defining improvement strategies.",
    },
    {
      id: 3,
      name: "Santiago Andres Comas Durán",
      role: "Hardware & Budget Specialist",
      description: "Responsible for hardware selection, equipment configuration, and cost optimization.",
    },
    {
      id: 4,
      name: "Jorge Mario Camargo Pérez",
      role: "Software Development Specialist",
      description: "Responsible for designing and implementing custom software solutions for clients.",
    },
    {
      id: 5,
      name: "Deimer Jesus Masco Rudas",
      role: "Financial Analysis Specialist",
      description: "Responsible for evaluating investment strategies and analyzing project financial feasibility.",
    },
  ],
  testimonialsScriptText: "Client Feedback",
  testimonialsSubtitle: "TESTIMONIALS",
  testimonialsMainTitle: "What Our Clients Say",
  testimonials: [
    {
      name: "Carlos Mendoza",
      role: "Cybercafé Owner",
      text: "InfraNova Systems transformed our outdated cybercafé into a modern, high-performance facility. Our customers love the new experience and our revenue has increased significantly.",
      rating: 5,
    },
    {
      name: "Maria Rodriguez",
      role: "Office Manager",
      text: "The team was professional, efficient, and delivered exactly what they promised. Our office systems have never run smoother. Highly recommended!",
      rating: 5,
    },
    {
      name: "Luis Hernandez",
      role: "Small Business Owner",
      text: "Working with InfraNova was a game-changer for our business. They understood our needs and provided solutions that fit our budget perfectly.",
      rating: 5,
    },
  ],
  storyScriptText: "About Us",
  storySubtitle: "WHO WE ARE",
  storyTitle: "Who We Are",
  storyParagraphs: [
    "InfraNova Systems is a technology consulting group focused on transforming outdated IT environments into modern, efficient, and secure infrastructures. We specialize in hardware modernization, data management systems, cybersecurity implementation, and custom software solutions tailored to each client.",
    "Our team works especially with small businesses, cybercafés, and administrative offices that need modernization. We understand the unique challenges faced by organizations with limited resources and provide cost-effective solutions that deliver real results.",
    "With expertise in infrastructure modernization, performance optimization, data security, and custom business software, we help our clients stay competitive in an increasingly digital world.",
  ],
  storyTimeline: [
    { value: "50+", label: "Projects" },
    { value: "100%", label: "Satisfaction" },
    { value: "5", label: "Experts" },
    { value: "24/7", label: "Support" },
  ],
  storyQuote: {
    prefix: "Our Mission",
    text: "To empower businesses with modern technology solutions that drive growth, efficiency, and security.",
    attribution: "InfraNova Systems",
  },
  storyImage: getImagePath("/images/consulting.jpg"),
  storyImageCaption: "Our team providing technology consulting services",
};

// -----------------------------------------------------------------------------
// Contact Form Config
// -----------------------------------------------------------------------------
export interface ContactInfoItem {
  icon: string;
  label: string;
  value: string;
  subtext: string;
}

export interface ContactFormFields {
  nameLabel: string;
  namePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  phoneLabel: string;
  phonePlaceholder: string;
  visitDateLabel: string;
  visitorsLabel: string;
  visitorsOptions: string[];
  messageLabel: string;
  messagePlaceholder: string;
  submitText: string;
  submittingText: string;
  successMessage: string;
  errorMessage: string;
}

export interface ContactFormConfig {
  scriptText: string;
  subtitle: string;
  mainTitle: string;
  introText: string;
  contactInfoTitle: string;
  contactInfo: ContactInfoItem[];
  form: ContactFormFields;
  privacyNotice: string;
  formEndpoint: string;
}

export const contactFormConfig: ContactFormConfig = {
  scriptText: "Get In Touch",
  subtitle: "CONTACT US",
  mainTitle: "Contact Us",
  introText: "If your organization needs to modernize its technological infrastructure, our team is ready to help. Reach out to us and let's discuss how we can transform your business.",
  contactInfoTitle: "Contact Information",
  contactInfo: [
    {
      icon: "Mail",
      label: "Email",
      value: "infranova.systems@email.com",
      subtext: "We'll respond within 24 hours",
    },
    {
      icon: "Phone",
      label: "Phone",
      value: "+57 300 000 0000",
      subtext: "Monday - Friday, 8AM - 6PM",
    },
    {
      icon: "MapPin",
      label: "Location",
      value: "Barranquilla, Colombia",
      subtext: "Serving businesses nationwide",
    },
    {
      icon: "Clock",
      label: "Business Hours",
      value: "Mon - Fri: 8:00 - 18:00",
      subtext: "Weekend support available",
    },
  ],
  form: {
    nameLabel: "Your Name",
    namePlaceholder: "Enter your full name",
    emailLabel: "Email Address",
    emailPlaceholder: "Enter your email address",
    phoneLabel: "Phone Number",
    phonePlaceholder: "Enter your phone number",
    visitDateLabel: "Preferred Contact Date",
    visitorsLabel: "Company Size",
    visitorsOptions: ["1-5 employees", "6-20 employees", "21-50 employees", "50+ employees"],
    messageLabel: "Your Message",
    messagePlaceholder: "Tell us about your project and requirements...",
    submitText: "Send Message",
    submittingText: "Sending...",
    successMessage: "Thank you! Your message has been sent successfully. We'll get back to you soon.",
    errorMessage: "Sorry, there was an error sending your message. Please try again or contact us directly.",
  },
  privacyNotice: "By submitting this form, you agree to our privacy policy. Your information will be kept confidential and used only to respond to your inquiry.",
  formEndpoint: "https://formspree.io/f/YOUR_FORM_ID",
};

// -----------------------------------------------------------------------------
// Footer Config
// -----------------------------------------------------------------------------
export interface SocialLink {
  icon: string;
  label: string;
  href: string;
}

export interface FooterLink {
  name: string;
  href: string;
}

export interface FooterLinkGroup {
  title: string;
  links: FooterLink[];
}

export interface FooterContactItem {
  icon: string;
  text: string;
}

export interface FooterConfig {
  brandName: string;
  tagline: string;
  description: string;
  socialLinks: SocialLink[];
  linkGroups: FooterLinkGroup[];
  contactItems: FooterContactItem[];
  newsletterLabel: string;
  newsletterPlaceholder: string;
  newsletterButtonText: string;
  newsletterSuccessText: string;
  newsletterErrorText: string;
  newsletterEndpoint: string;
  copyrightText: string;
  legalLinks: string[];
  icpText: string;
  backToTopText: string;
  ageVerificationText: string;
}

export const footerConfig: FooterConfig = {
  brandName: "InfraNova",
  tagline: "Systems",
  description: "Technology Infrastructure Modernization. We help organizations upgrade outdated systems, improve cybersecurity, and implement modern digital solutions.",
  socialLinks: [
    { icon: "Linkedin", label: "LinkedIn", href: "#" },
    { icon: "Instagram", label: "Instagram", href: "#" },
    { icon: "Github", label: "GitHub", href: "#" },
  ],
  linkGroups: [
    {
      title: "Quick Links",
      links: [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Services", href: "#services" },
        { name: "Team", href: "#team" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
      ],
    },
    {
      title: "Services",
      links: [
        { name: "IT Infrastructure", href: "#services" },
        { name: "Cybersecurity", href: "#services" },
        { name: "Software Development", href: "#services" },
        { name: "Data Management", href: "#services" },
        { name: "Consulting", href: "#services" },
      ],
    },
  ],
  contactItems: [
    { icon: "MapPin", text: "Barranquilla, Colombia" },
    { icon: "Phone", text: "+57 300 000 0000" },
    { icon: "Mail", text: "infranova.systems@email.com" },
  ],
  newsletterLabel: "Subscribe to our newsletter",
  newsletterPlaceholder: "Enter your email address",
  newsletterButtonText: "Subscribe",
  newsletterSuccessText: "Thank you for subscribing!",
  newsletterErrorText: "Sorry, there was an error. Please try again.",
  newsletterEndpoint: "https://formspree.io/f/YOUR_FORM_ID",
  copyrightText: "© 2026 InfraNova Systems – All Rights Reserved.",
  legalLinks: ["Privacy Policy", "Terms of Service"],
  icpText: "",
  backToTopText: "Back to top",
  ageVerificationText: "",
};

// -----------------------------------------------------------------------------
// Scroll To Top Config
// -----------------------------------------------------------------------------
export interface ScrollToTopConfig {
  ariaLabel: string;
}

export const scrollToTopConfig: ScrollToTopConfig = {
  ariaLabel: "Back to top",
};
