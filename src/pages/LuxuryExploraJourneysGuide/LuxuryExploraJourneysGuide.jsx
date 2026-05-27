import { useState, useEffect } from "react";
import {
  Ship,
  Users,
  MapPin,
  Award,
  Check,
  Plus,
  Minus,
  ArrowRight,
  Star,
  Utensils,
  Compass,
  Wine,
  ShieldCheck,
  Plane,
  Shield,
  Palmtree,
  Heart,
  Sparkles,
  Clock3,
  Building2,
  Palette,
  UtensilsCrossed,
  HeartPulse,
  CheckCircle2,
} from "lucide-react";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/image.webp";
import CTAImage from "../../assets/LuxuryExploraJourneysGuide/Explora-Mediterranean3.webp";

import Mediterranean from "../../assets/LuxuryExploraJourneysGuide/Mediterranean-Cruises.webp";
import Caribbean from "../../assets/LuxuryExploraJourneysGuide/Caribbean-Sailings.webp";
import NorthernEurope from "../../assets/LuxuryExploraJourneysGuide/Northern-Europe-Cruises.webp";

import HeroImage1 from "../../assets/LuxuryExploraJourneysGuide/Luxury-Explora-Journeys.webp";
import HeroImage2 from "../../assets/LuxuryExploraJourneysGuide/Luxury-Explora-Journeys2.webp";
import HeroImage4 from "../../assets/LuxuryExploraJourneysGuide/Luxury-Explora-Journeys3.webp";
import RegentSea from "../../assets/LuxuryExploraJourneysGuide/Regent-Seven-Seas-Explorer.webp";
import Seabourn from "../../assets/LuxuryExploraJourneysGuide/Seabourn-Ventura.webp";
import RitzCarton from "../../assets/LuxuryExploraJourneysGuide/RitzCarton.webp";
import OverviewImage from "../../assets/LuxuryExploraJourneysGuide/Onboard_Dining.webp";
import AzamaraDietaryImage from "../../assets/LuxuryExploraJourneysGuide/Explore-Journeys.webp";

import "./LuxuryExploraJourneysGuide.css";

import { Helmet } from "react-helmet-async";

const whyMatters = [
  "The contemporary luxury feel of a boutique luxury hotel",
  "The space and privacy of a private yacht",
  "The service standards of luxury cruising",
  "The flexibility modern affluent travelers expect",
];

const diningOverview = [
  {
    icon: <Ship size={22} />,
    label: "Spacious luxury suites",
  },

  {
    icon: <Star size={22} />,
    label: "Refined European elegance",
  },

  {
    icon: <Heart size={22} />,
    label: "Wellness and relaxation",
  },

  {
    icon: <Utensils size={22} />,
    label: "Elevated culinary experiences",
  },

  {
    icon: <Compass size={22} />,
    label: "Destination immersion",
  },

  {
    icon: <Sparkles size={22} />,
    label: "Modern luxury aesthetics",
  },

  {
    icon: <Clock3 size={22} />,
    label: "Slower-paced travel",
  },
];

const complimentaryVenues = [
  {
    id: "ocean-terrace",
    eyebrow: "Luxury Value",
    name: "Ocean Terrace Suites",
    highlight: "An excellent introduction to modern luxury cruising",

    callout:
      "These suites already feel significantly more luxurious than many premium cruise accommodations.",

    items: [
      "Ideal for first-time luxury cruisers",
      "Perfect for couples",
      "Strong overall value",
      "Spacious contemporary design",
      "Private ocean terrace",
      "Elegant residential atmosphere",
    ],
  },

  {
    id: "penthouse",
    eyebrow: "Enhanced Luxury",
    name: "Penthouse Suites",

    highlight: "Additional space and elevated onboard experience",

    callout:
      "Excellent for travelers seeking premium positioning and enhanced service levels.",

    items: [
      "More entertaining space",
      "Premium suite positioning",
      "Enhanced service levels",
      "Expanded luxury amenities",
      "Sophisticated modern interiors",
    ],
  },

  {
    id: "residences",
    eyebrow: "Ultra-Luxury",
    name: "Residences",

    highlight: "Among the finest luxury accommodations at sea",

    callout:
      "The top-tier residences compete with some of the finest accommodations available on any luxury cruise line.",

    items: [
      "Best for ultra-luxury travelers",
      "Excellent for longer sailings",
      "Ideal for multi-generational travel",
      "Exceptional privacy and space",
      "Residential-style luxury living",
    ],
  },
];

const diningData = [
  {
    key: "mediterranean",
    icon: <Compass size={22} strokeWidth={1.6} />,
    eyebrow: "Mediterranean Voyages",
    title: "Mediterranean Cruises",
    image: Mediterranean,
    imageAlt: "Explora Mediterranean luxury cruise",
    items: [
      "Excellent for culinary travelers",
      "Scenic coastal experiences",
      "European culture",
      "First-time luxury cruise guests",
    ],
    accent: "adg-accent-rose",
  },

  {
    key: "caribbean",
    icon: <Palmtree size={22} strokeWidth={1.6} />,
    eyebrow: "Caribbean Luxury",
    title: "Caribbean Sailings",
    image: Caribbean,
    imageAlt: "Explora Caribbean luxury cruise",
    items: [
      "Best for relaxation",
      "Winter escapes",
      "Wellness-focused vacations",
      "Resort-style luxury travelers",
    ],
    accent: "adg-accent-gold",
  },

  {
    key: "northern-europe",
    icon: <Ship size={22} strokeWidth={1.6} />,
    eyebrow: "Northern Europe",
    title: "Northern Europe Cruises",
    image: NorthernEurope,
    imageAlt: "Explora Northern Europe luxury cruise",
    items: [
      "Ideal for experienced travelers",
      "Cultural immersion",
      "Scenic exploration",
      "Cooler-climate luxury travel",
    ],
    accent: "adg-accent-teal",
  },
];

const worthItPoint = [
  "White-glove old-world formality",
  "Extremely traditional service",
  "Formal nights",
  "Highly structured luxury",
  "Classic ultra-luxury cruise environments like Regent Seven Seas or Silversea",
];

const comparisons = [
  {
    id: "regent",
    competitor: "Regent Seven Seas",
    image: RegentSea,
    exploraStrengths: [
      "More modern design",
      "Larger suites",
      "Younger atmosphere",
      "Contemporary luxury feel",
      "Strong wellness focus",
    ],
    competitorStrengths: [
      "More inclusions",
      "Traditional luxury service",
      "Extensive destination programs",
      "Established luxury reputation",
    ],
  },
  {
    id: "seabourn",
    competitor: "Seabourn",
    image: Seabourn,
    competitorNote:
      "Seabourn Cruise Line still excels in intimate luxury service and expedition offerings.",
    exploraStrengths: [
      "Larger accommodations",
      "Contemporary aesthetics",
      "Relaxed atmosphere",
      "Residential luxury feel",
    ],
    competitorStrengths: ["Intimate luxury service", "Expedition offerings"],
  },
  {
    id: "ritz",
    competitor: "Ritz-Carlton Yacht Collection",
    image: RitzCarton,
    competitorNote:
      "The Ritz-Carlton Yacht Collection leans more toward boutique yacht-style experiences.",
    exploraStrengths: [
      "More onboard space",
      "More dining variety",
      "Larger-scale luxury amenities",
      "Broader itinerary options",
    ],
    competitorStrengths: ["Boutique yacht-style feel", "Iconic brand prestige"],
  },
];

const cards = [
  {
    id: "suites",
    icon: Building2,
    accent: "teal",
    title: "Spacious Oceanfront Suites",
    description:
      "Every suite includes ocean views and a private terrace. Lead-in suites are significantly larger than comparable luxury lines — ideal for longer voyages and repeat luxury travelers.",
    pills: ["Ocean views", "Private terraces", "Generous sq footage"],
    highlight: "Prioritized for repeat luxury travelers",
  },
  {
    id: "design",
    icon: Palette,
    accent: "navy",
    title: "Sophisticated European Design",
    description:
      "Understated elegance over flashy luxury. Residential-style interiors built for quiet, refined living — neutral palettes, designer furnishings, and spa-inspired bathrooms.",
    pills: [
      "Neutral palettes",
      "Designer furnishings",
      "Spa bathrooms",
      "Residential layouts",
    ],
    highlight: "Quiet luxury — no excessive formality",
  },
  {
    id: "dining",
    icon: UtensilsCrossed,
    accent: "gold",
    title: "Flexible Dining Philosophy",
    description:
      "No rigid dining schedules. Multiple venues, open seating, and diverse culinary styles with premium ingredients — eat when and how you want.",
    pills: [
      "Open dining",
      "Multiple venues",
      "Premium ingredients",
      "Diverse cuisines",
    ],
    highlight: "Appeals to younger affluent travelers",
  },
  {
    id: "wellness",
    icon: HeartPulse,
    accent: "sage",
    title: "Wellness-Centered Luxury",
    description:
      "Unusually strong wellness focus sets Explora apart. Thermal areas, fitness experiences, and wellness cuisine — wellbeing is woven into every aspect of the voyage.",
    pills: [
      "Large spa",
      "Thermal areas",
      "Fitness experiences",
      "Wellness cuisine",
    ],
    highlight: "A key differentiator vs competitors",
  },
];

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "Trips & Ships Luxury Travel",
      url: "https://www.tripsandshipsluxurytravel.com",
      logo: "https://www.tripsandshipsluxurytravel.com/logo.png",
      sameAs: [
        "https://www.facebook.com/",
        "https://www.instagram.com/",
        "https://www.linkedin.com/",
      ],
    },
    {
      "@type": "TravelAgency",
      name: "Trips & Ships Luxury Travel",
      url: "https://www.tripsandshipsluxurytravel.com",
      priceRange: "$$$$",
      areaServed: "Worldwide",
    },
    {
      "@type": "Person",
      name: "Angela Hughes",
      jobTitle: "CEO of Trips & Ships Luxury Travel",
      description:
        "Luxury travel expert with over 40 years of experience and travel to 121+ countries.",
      worksFor: {
        "@type": "Organization",
        name: "Trips & Ships Luxury Travel",
      },
    },
    {
      "@type": "WebPage",
      name: "Luxury Explora Journeys Complete Guide",
      url: "https://www.tripsandshipsluxurytravel.com/luxury-explora-journeys-guide",
      description: "Comprehensive guide to Explora Journeys luxury cruises.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.tripsandshipsluxurytravel.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Luxury Cruises",
          item: "https://www.tripsandshipsluxurytravel.com/luxury-cruises",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Luxury Explora Journeys Guide",
          item: "https://www.tripsandshipsluxurytravel.com/luxury-explora-journeys-guide",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Is Explora Journeys all-inclusive?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Explora Journeys includes many luxury amenities, beverages, dining experiences, Wi-Fi, and gratuities, though some premium services remain additional.",
          },
        },
        {
          "@type": "Question",
          name: "Is Explora Journeys worth the money?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For travelers seeking spacious suites, modern luxury, wellness, and sophisticated service, many luxury travelers consider Explora strong value within the luxury cruise market.",
          },
        },
        {
          "@type": "Question",
          name: "What age group travels on Explora Journeys?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Explora primarily attracts affluent adult travelers, often ranging from their 40s through 70s, though younger luxury travelers are increasingly interested.",
          },
        },
        {
          "@type": "Question",
          name: "Are drinks included on Explora Journeys?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Many beverages are included, though premium labels and select specialty offerings may cost extra.",
          },
        },
        {
          "@type": "Question",
          name: "Does Explora Journeys have formal nights?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Explora focuses on elegant relaxed luxury rather than highly formal cruise traditions.",
          },
        },
        {
          "@type": "Question",
          name: "Is Explora good for first-time luxury cruisers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Many travelers find Explora approachable because of its relaxed atmosphere and contemporary luxury style.",
          },
        },
        {
          "@type": "Question",
          name: "What is the dress code on Explora Journeys?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The dress code is refined but relaxed, emphasizing smart casual luxury.",
          },
        },
        {
          "@type": "Question",
          name: "How does Explora compare to Regent Seven Seas?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Explora offers more contemporary design and atmosphere, while Regent emphasizes traditional ultra-luxury inclusions and service.",
          },
        },
        {
          "@type": "Question",
          name: "What are the best suites on Explora Journeys?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Residences provide the highest luxury level, while Ocean Terrace Suites offer exceptional value for many travelers.",
          },
        },
        {
          "@type": "Question",
          name: "Does Explora Journeys include shore excursions?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Some experiences may be included, but many curated excursions are additional.",
          },
        },
        {
          "@type": "Question",
          name: "Is Explora good for solo luxury travelers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. The relaxed luxury atmosphere appeals to many solo travelers seeking sophisticated experiences.",
          },
        },
        {
          "@type": "Question",
          name: "What destinations does Explora Journeys sail to?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Explora sails throughout the Mediterranean, Caribbean, Northern Europe, and other luxury cruise destinations globally.",
          },
        },
        {
          "@type": "Question",
          name: "Is Explora better than Seabourn?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "They appeal to different luxury travelers. Explora feels more contemporary, while Seabourn emphasizes traditional intimate luxury.",
          },
        },
        {
          "@type": "Question",
          name: "How far in advance should you book Explora Journeys?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Luxury travelers should ideally book 9–18 months ahead for the best suite selection and pricing opportunities.",
          },
        },
      ],
    },
  ],
};

function FAQ() {
  const [open, setOpen] = useState(null);
  const faqData = [
    {
      q: "Is Explora Journeys all-inclusive?",
      a: "Explora Journeys includes many luxury amenities, beverages, dining experiences, Wi-Fi, and gratuities, though some premium services remain additional.",
    },
    {
      q: "Is Explora Journeys worth the money?",
      a: "For travelers seeking spacious suites, modern luxury, wellness, and sophisticated service, many luxury travelers consider Explora strong value within the luxury cruise market.",
    },
    {
      q: "What age group travels on Explora Journeys?",
      a: "Explora primarily attracts affluent adult travelers, often ranging from their 40s through 70s, though younger luxury travelers are increasingly interested.",
    },
    {
      q: "Are drinks included on Explora Journeys?",
      a: "Many beverages are included, though premium labels and select specialty offerings may cost extra.",
    },
    {
      q: "Does Explora Journeys have formal nights?",
      a: "Explora focuses on elegant relaxed luxury rather than highly formal cruise traditions.",
    },
    {
      q: "Is Explora good for first-time luxury cruisers?",
      a: "Yes. Many travelers find Explora approachable because of its relaxed atmosphere and contemporary luxury style.",
    },
    {
      q: "What is the dress code on Explora Journeys?",
      a: "The dress code is refined but relaxed, emphasizing smart casual luxury.",
    },
    {
      q: "How does Explora compare to Regent Seven Seas?",
      a: "Explora offers more contemporary design and atmosphere, while Regent emphasizes traditional ultra-luxury inclusions and service.",
    },
    {
      q: "What are the best suites on Explora Journeys?",
      a: "Residences provide the highest luxury level, while Ocean Terrace Suites offer exceptional value for many travelers.",
    },
    {
      q: "Does Explora Journeys include shore excursions?",
      a: "Some experiences may be included, but many curated excursions are additional.",
    },
    {
      q: "Is Explora good for solo luxury travelers?",
      a: "Yes. The relaxed luxury atmosphere appeals to many solo travelers seeking sophisticated experiences.",
    },
    {
      q: "What destinations does Explora Journeys sail to?",
      a: "Explora sails throughout the Mediterranean, Caribbean, Northern Europe, and other luxury cruise destinations globally.",
    },
    {
      q: "Is Explora better than Seabourn?",
      a: "They appeal to different luxury travelers. Explora feels more contemporary, while Seabourn emphasizes traditional intimate luxury.",
    },
    {
      q: "How far in advance should you book Explora Journeys?",
      a: "Luxury travelers should ideally book 9–18 months ahead for the best suite selection and pricing opportunities.",
    },
  ];
  return (
    <div className="Asc-faq-list">
      {faqData.map((item, i) => (
        <div
          key={i}
          className={`Asc-faq-item${open === i ? " Asc-open" : ""}`}
          onClick={() => setOpen(open === i ? null : i)}
        >
          <div className="Asc-faq-q">
            <span>{item.q}</span>
            <span className="Asc-faq-icon">
              {open === i ? (
                <Minus size={18} strokeWidth={1.5} />
              ) : (
                <Plus size={18} strokeWidth={1.5} />
              )}
            </span>
          </div>
          {open === i && (
            <div className="Asc-faq-a">
              <div className="Asc-faq-a-inner">{item.a}</div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
const LuxuryExploraJourneysGuide = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [readMore, setReadMore] = useState(false);
  const [active, setActive] = useState("regent");
  const current = comparisons.find((c) => c.id === active);

  const [hovered, setHovered] = useState(null);
  const images = [HeroImage1, HeroImage4, HeroImage2];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="Asc-page-wrapper">
      <Helmet>
        <title>
          Luxury Explora Journeys Guide for First Time & Repeat Travelers
        </title>
        <meta
          name="title"
          content="Luxury Explora Journeys Guide 2026 | Expert Cruise Insights by Angela Hughes"
        />
        <meta
          name="description"
          content="Discover everything luxury travelers need to know about Explora Journeys cruises in 2026. Expert insights from Angela Hughes, award-winning luxury travel advisor and CEO of Trips & Ships Luxury Travel."
        />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      <Nav />
      {/* HERO */}
      <section className="Scenic_hero_section">
        {images.map((img, index) => (
          <div
            key={index}
            className={`Scenic_hero_bg ${
              index === currentSlide ? "active" : ""
            }`}
            style={{ backgroundImage: `url(${img})` }}
          ></div>
        ))}

        <div className="Scenic_hero_overlay"></div>

        <div className="Scenic_hero_content">
          <h1>
            Luxury Explora Journeys: Complete Guide for First Time and Repeat
            Travelers
          </h1>

          <p>
            Luxury cruising has entered a new era with Explora Journeys — a
            sophisticated luxury ocean travel brand redefining what affluent
            travelers expect at sea.
          </p>

          <p>
            For travelers seeking something more refined than mainstream premium
            cruises but more contemporary and spacious than traditional
            ultra-luxury lines, Explora Journeys has quickly become one of the
            most talked-about names in luxury travel.
          </p>

          {/* READ MORE CONTENT */}
          {readMore && (
            <>
              <p>
                But is it truly worth the hype? And more importantly — is it the
                right luxury cruise experience for you?
              </p>

              <p>
                After more than 40 years in the travel industry, visiting over
                121 countries, and advising luxury cruise clients worldwide,
                Angela Hughes, CEO of Trips & Ships Luxury Travel, has seen
                firsthand how luxury cruise expectations are evolving.
              </p>

              <p>
                As founder of Luxury Travel University, a Travel Leaders Network
                Advisory Board member, weekly travel columnist, and recipient of
                the 2024 Luxury Travel Influencer of the Year award, Angela
                Hughes brings rare perspective into what truly separates
                exceptional luxury travel from expensive marketing.
              </p>

              <p>
                This guide breaks down everything first-time and repeat luxury
                travelers need to know about Explora Journeys in 2026 and
                beyond.
              </p>
            </>
          )}

          {/* READ MORE BUTTON */}
          <div className="Scenic_readmore_wrapper">
            <button
              className="Scenic_readmore_btn"
              onClick={() => setReadMore(!readMore)}
            >
              {readMore ? "Read Less" : "Read More"}
            </button>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
    2. EXPLORA OVERVIEW
════════════════════════════════════════ */}
      <section className="adg-c-section adg-c-bg-soft" id="adg-overview">
        <div className="adg-c-container">
          <div className="adg-c-section-header">
            <h2 className="adg-c-h2">What Is Explora Journeys?</h2>

            <div className="adg-c-accent-line"></div>
          </div>

          <div className="adg-c-overview-layout">
            {/* LEFT — list */}
            <div className="adg-c-overview-icons">
              {diningOverview.map((item, i) => (
                <div key={i} className="adg-c-overview-item">
                  <span className="adg-c-overview-icon">{item.icon}</span>

                  <span className="adg-c-overview-label">{item.label}</span>
                </div>
              ))}
            </div>

            {/* RIGHT — callout card + image */}
            <div className="adg-c-overview-right">
              <div className="adg-c-overview-callout">
                <div className="adg-c-overview-callout-inner">
                  <Star size={28} className="adg-c-callout-star" />

                  <p className="adg-c-callout-text">
                    Explora Journeys was designed to deliver a more residential,
                    yacht-inspired luxury experience for affluent modern
                    travelers.
                  </p>
                </div>
              </div>

              <div className="adg-c-overview-image-wrap">
                <img
                  src={OverviewImage}
                  alt="Explora Journeys luxury cruise experience"
                  className="adg-c-overview-img"
                />

                <div className="adg-c-overview-img-overlay">
                  <span className="adg-c-overview-img-label">
                    Explora Journeys
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
    1. WHY EXPLORA JOURNEYS
════════════════════════════════════════ */}
      <section className="adg-c-section adg-c-bg-dark" id="adg-why-dining">
        <div className="adg-c-container">
          <div className="adg-c-why-grid">
            {/* LEFT — text */}
            <div className="adg-c-why-left">
              <h2 className="adg-c-h2 adg-c-h2-light">
                Why Luxury Travelers Are Paying Attention to Explora Journeys
              </h2>

              <div className="adg-c-accent-line adg-c-accent-light"></div>

              <p className="adg-c-lead adg-c-lead-light">
                Explora Journeys has gained rapid attention because it fills a
                gap many luxury travelers have been seeking for years.
              </p>

              <p className="adg-c-body adg-c-body-light">
                For many seasoned luxury travelers, Explora feels fresher and
                less traditional than some older luxury cruise brands while
                still delivering exceptional comfort, service, and
                sophistication.
              </p>

              <p className="adg-c-body adg-c-body-light">
                Angela Hughes notes that many of her clients are drawn to
                Explora because it feels more “current luxury” rather than
                old-world cruise formality.
              </p>
            </div>

            {/* RIGHT — pill grid */}
            <div className="adg-c-why-right">
              <div className="adg-c-why-card">
                <span className="adg-c-why-card-label">
                  Explora Journeys blends:
                </span>

                <div className="adg-c-pill-grid">
                  {whyMatters.map((item, i) => (
                    <div key={i} className="adg-c-pill">
                      <span className="adg-c-pill-check">
                        <Check size={13} strokeWidth={3} />
                      </span>

                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="Leg-section"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="Leg-container">
          {/* Header */}
          <div className="Leg-header">
            <h2 className="Leg-title">
              What Makes Explora Journeys Different?
            </h2>
            <div className="adg-c-accent-line"></div>
            <p className="Leg-subtitle">
              A new generation of luxury ocean travel — designed around space,
              style, choice, and wellbeing.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="Leg-grid">
            {cards.map((card) => {
              const Icon = card.icon;
              const isHovered = hovered === card.id;
              return (
                <div
                  key={card.id}
                  className={`Leg-card Leg-card--${card.accent} ${isHovered ? "Leg-card--hovered" : ""}`}
                  onMouseEnter={() => setHovered(card.id)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <div
                    className={`Leg-card-top-bar Leg-bar--${card.accent}`}
                  ></div>

                  <div
                    className={`Leg-card-icon-wrap Leg-icon--${card.accent}`}
                  >
                    <Icon size={22} strokeWidth={1.6} />
                  </div>

                  <h3 className="Leg-card-title">{card.title}</h3>
                  <p className="Leg-card-desc">{card.description}</p>

                  <div className="Leg-divider"></div>

                  <div className="Leg-pill-list">
                    {card.pills.map((pill) => (
                      <span
                        key={pill}
                        className={`Leg-pill Leg-pill--${card.accent}`}
                      >
                        {pill}
                      </span>
                    ))}
                  </div>

                  <div
                    className={`Leg-highlight Leg-highlight--${card.accent}`}
                  >
                    <Check
                      size={13}
                      strokeWidth={2.5}
                      className="Leg-check-icon"
                    />
                    <span>{card.highlight}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* VIDEO SECTION */}
      <section
        className="Asc-video-section"
        id="Asc-video"
        style={{ backgroundColor: "var(--bg-white)" }}
      >
        <div className="Asc-container">
          <div className="Asc-section-header">
            <h2 className="Asc-h2">Explora Journeys Cruise</h2>

            <div className="Asc-accent-line"></div>

            <p className="Asc-video-intro">
              Explora Journeys has rapidly become one of the most talked-about
              luxury cruise brands in the world — but it is not the right fit
              for every traveler.
            </p>
          </div>
          <div className="Asc-video-wrapper">
            <div className="Asc-video-frame">
              <iframe
                src="https://www.youtube.com/embed/2nuohDzg2Oo"
                title="Explora Journeys Cruise"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
    5. IS IT TRULY LUXURY
════════════════════════════════════════ */}
      <section className="adg-c-section adg-c-bg-soft" id="adg-worth-it">
        <div className="adg-c-container">
          <div className="adg-c-section-header">
            <h2 className="adg-c-h2">Is Explora Journeys Truly Luxury?</h2>

            <div className="adg-c-accent-line"></div>
          </div>

          <div className="adg-c-worth-layout">
            {/* VERDICT BANNER */}
            <div className="adg-c-verdict-banner">
              <div className="adg-c-verdict-badge">
                Yes — but it delivers luxury differently.
              </div>

              <p className="adg-c-verdict-sub">
                Explora focuses on contemporary luxury, relaxed sophistication,
                and spacious modern experiences rather than traditional cruise
                formality.
              </p>
            </div>

            {/* SPLIT */}
            <div className="adg-c-worth-split">
              <div
                className="adg-c-worth-left"
                style={{ backgroundColor: "var(--bg-white)" }}
              >
                <h4 className="adg-c-worth-col-title">
                  Travelers Who May Prefer Traditional Luxury Brands
                </h4>

                <ul className="adg-c-worth-list">
                  {worthItPoint.map((pt, i) => (
                    <li key={i}>
                      <span className="adg-c-worth-num">{i + 1}</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="adg-c-worth-right">
                <div className="adg-c-worth-note">
                  <div className="adg-c-worth-note-bar"></div>

                  <div className="adg-c-worth-note-content">
                    <p className="adg-c-worth-note-text">
                      Travelers seeking contemporary luxury, wellness-focused
                      travel, spacious suites, and elevated but less formal
                      experiences often find Explora exceptionally appealing.
                    </p>

                    <p className="adg-c-worth-note-emphasis">
                      That modern approach is exactly why many affluent
                      travelers are paying attention to Explora Journeys.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="Cmp-section">
        <div className="Cmp-container">
          {/* Header */}
          <div className="Cmp-header">
            <h2 className="Cmp-title">
              Explora Journeys vs Other <br /> Luxury Cruise Lines
            </h2>
            <div className="Asc-accent-line"></div>
          </div>

          {/* Tab Bar */}
          <div className="Cmp-tabs" role="tablist">
            {comparisons.map((c) => (
              <button
                key={c.id}
                role="tab"
                aria-selected={active === c.id}
                className={`Cmp-tab ${active === c.id ? "Cmp-tab--active" : ""}`}
                onClick={() => setActive(c.id)}
              >
                {c.competitor}
              </button>
            ))}
          </div>

          {/* Content Panel */}
          <div className="Cmp-panel" key={active}>
            {/* Image Banner */}
            <div className="Cmp-image-wrap">
              <img
                src={current.image}
                alt={current.competitor}
                className="Cmp-image"
              />
              <div className="Cmp-image-label">
                <span>vs {current.competitor}</span>
              </div>
            </div>

            {/* Competitor note if present */}
            {current.competitorNote && (
              <p className="Cmp-note">{current.competitorNote}</p>
            )}

            {/* Two-column strengths */}
            <div className="Cmp-compare-grid">
              {/* Explora column */}
              <div className="Cmp-col Cmp-col--explora">
                <div className="Cmp-col-header">
                  <span className="Cmp-col-badge Cmp-col-badge--explora">
                    Explora Journeys
                  </span>
                  <span className="Cmp-col-label">Strengths</span>
                </div>
                <ul className="Cmp-list">
                  {current.exploraStrengths.map((item) => (
                    <li
                      key={item}
                      className="Cmp-list-item Cmp-list-item--explora"
                    >
                      <CheckCircle2
                        size={15}
                        strokeWidth={2}
                        className="Cmp-list-icon"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Divider */}
              <div className="Cmp-vs-divider">
                <div className="Cmp-vs-line"></div>
                <span className="Cmp-vs-label">vs</span>
                <div className="Cmp-vs-line"></div>
              </div>

              {/* Competitor column */}
              <div className="Cmp-col Cmp-col--competitor">
                <div className="Cmp-col-header">
                  <span className="Cmp-col-badge Cmp-col-badge--competitor">
                    {current.competitor}
                  </span>
                  <span className="Cmp-col-label">Strengths</span>
                </div>
                <ul className="Cmp-list">
                  {current.competitorStrengths.map((item) => (
                    <li
                      key={item}
                      className="Cmp-list-item Cmp-list-item--competitor"
                    >
                      <Shield
                        size={15}
                        strokeWidth={2}
                        className="Cmp-list-icon"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VIDEO SECTION */}
      {/* <section className="Asc-video-section" id="Asc-video">
                <div className="Asc-container">
                    <div className="Asc-section-header">
                        <h2 className="Asc-h2">Watch: Regent Seven Seas Cruise</h2>
                        <div className="Asc-accent-line"></div>
                        <p className="Asc-video-intro">
                            Hear directly from luxury cruise expert Angela Hughes as she shares her firsthand insights on choosing between Azamara and Regent Seven Seas.
                        </p>
                    </div>
                    <div className="Asc-video-wrapper">
                        <div className="Asc-video-frame">
                            <iframe
                                src="https://www.youtube.com/embed/yoKE5YG3CYI"
                                title="Azamara vs Regent Seven Seas – Angela Hughes"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section> */}

      {/* WHAT IS INCLUDED ON EXPLORA JOURNEYS */}
      <section className="adg-section adg-bg-soft" id="adg-food-itineraries">
        <div className="adg-container">
          <div className="adg-section-header" style={{ marginBottom: "60px" }}>
            <h2 className="adg-h2">What Is Included on Explora Journeys?</h2>

            <div className="adg-accent-line"></div>
          </div>

          <div className="adg-split-layout">
            {/* Left Content Column */}
            <div className="adg-content-card-side">
              <img
                src={AzamaraDietaryImage}
                alt="Explora Journeys luxury suite experience"
                className="adg-side-image"
                style={{ height: "50vh" }}
              />

              <div className="adg-info-card">
                <div className="adg-card-meta">
                  <Star size={28} />
                  <span className="adg-meta-label">Luxury Inclusions</span>
                </div>

                <p className="adg-card-lead">
                  One of the biggest questions luxury travelers ask is what’s
                  included onboard Explora Journeys.
                </p>

                <div className="adg-card-divider"></div>

                <p className="adg-card-subtext">
                  Angela Hughes recommends reviewing inclusions carefully
                  because luxury cruise value often matters more than headline
                  pricing alone.
                </p>
              </div>
            </div>

            {/* Right Inclusions Grid Column */}
            <div className="adg-list-side">
              {[
                {
                  title: "Oceanfront suites with terraces",
                  icon: <Ship size={20} />,
                },
                {
                  title: "Many beverages included",
                  icon: <Wine size={20} />,
                },
                {
                  title: "Specialty dining",
                  icon: <Utensils size={20} />,
                },
                {
                  title: "Wi-Fi access",
                  icon: <Star size={20} />,
                },
                {
                  title: "Wellness facilities",
                  icon: <Compass size={20} />,
                },
                {
                  title: "Gratuities included",
                  icon: <Check size={20} />,
                },
                {
                  title: "Shuttle services in select ports",
                  icon: <MapPin size={20} />,
                },
                {
                  title: "In-suite minibar and room service",
                  icon: <Heart size={20} />,
                },
              ].map((item, i) => (
                <div key={i} className="adg-list-item-card">
                  <div className="adg-list-item-icon">{item.icon}</div>

                  <h4 className="adg-list-item-label">{item.title}</h4>
                </div>
              ))}
            </div>
          </div>

          <p
            className="adg-card-subtext"
            style={{
              marginTop: "32px",
              textAlign: "center",
              marginInline: "auto",
              fontSize: "18px",
            }}
          >
            However, some premium experiences remain extra-cost depending on the
            voyage and onboard selections.
          </p>
        </div>
      </section>

      {/* ════════════════════════════════════════
    3. BEST SUITES
════════════════════════════════════════ */}
      <section className="adg-c-section adg-c-bg-white" id="adg-complimentary">
        <div className="adg-c-container">
          <div className="adg-c-section-header">
            <h2 className="adg-c-h2">Best Explora Journeys Suites</h2>

            <div className="adg-c-accent-line"></div>
          </div>

          <div className="adg-c-venues-grid">
            {complimentaryVenues.map((venue, i) => (
              <div
                key={venue.id}
                className={`adg-c-venue-card adg-c-venue-${i + 1}`}
              >
                <div className="adg-c-venue-top">
                  <span className="adg-c-venue-eyebrow">{venue.eyebrow}</span>

                  <h3 className="adg-c-venue-name">{venue.name}</h3>

                  <p className="adg-c-venue-highlight">{venue.highlight}</p>
                </div>

                <ul className="adg-c-venue-list">
                  {venue.items.map((item, j) => (
                    <li key={j}>
                      <span className="adg-c-venue-dot"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="adg-c-venue-callout">
                  <span className="adg-c-venue-callout-bar"></span>
                  <p>{venue.callout}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="adg-section" id="adg-dining">
        <div className="adg-container">
          {/* HEADER */}
          <div className="adg-header">
            <h2 className="adg-h2">
              Best Explora Cruises for First-Time Luxury Travelers
            </h2>

            <div className="adg-accent-line"></div>

            <p className="adg-intro">
              Angela Hughes often recommends these Explora Journeys itineraries
              for travelers experiencing luxury cruising for the first time.
            </p>
          </div>

          {/* CARDS GRID */}
          <div
            className="adgs-grid"
          >
            {diningData.map((item) => (
              <div key={item.key} className={`adg-card ${item.accent}`}>
                {/* IMAGE */}
                <div className="adg-card-image-wrap">
                  <img
                    src={item.image}
                    alt={item.imageAlt}
                    className="adg-card-img"
                  />

                  <div className="adg-card-image-overlay"></div>

                  {/* FLOATING EYEBROW ON IMAGE */}
                  <div className="adg-card-eyebrow-wrap">
                    <span className="adg-card-eyebrow-icon">{item.icon}</span>

                    <span className="adg-card-eyebrow-label">
                      {item.eyebrow}
                    </span>
                  </div>
                </div>

                {/* BODY */}
                <div className="adg-card-body">
                  <h3 className="adg-card-title">{item.title}</h3>

                  <ul className="adg-card-list">
                    {item.items.map((point, idx) => (
                      <li key={idx} className="adg-card-list-item">
                        <span className="adg-card-list-dot"></span>
                        <span className="adg-card-list-text">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* BOTTOM ACCENT BAR */}
                <div className="adg-card-bar"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO SHOULD CHOOSE */}
      <section className="Asc-section Asc-bg-white" id="Asc-who">
        <div className="Asc-container">
          <div className="Asc-section-header">
            <h2 className="Asc-h2">Who Explora Journeys Is Best For</h2>
            <div className="Asc-accent-line"></div>
          </div>

          <div className="Asc-who-grid">
            {/* BEST FOR */}
            <div className="Asc-who-card Asc-who-yes">
              <h3 className="Asc-who-title">Best For</h3>

              <ul className="Asc-who-list">
                {[
                  "Luxury travelers wanting contemporary elegance",
                  "Couples",
                  "Affluent professionals",
                  "Wellness-focused travelers",
                  "Luxury hotel lovers",
                  "Repeat premium cruise travelers upgrading to luxury",
                  "Travelers who dislike overly formal cruise culture",
                ].map((item, i) => (
                  <li key={i}>
                    <Check size={16} className="Asc-icon-green" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* NOT IDEAL FOR */}
            <div className="Asc-who-card Asc-who-no">
              <h3 className="Asc-who-title">May Not Be Best For</h3>

              <ul className="Asc-who-list">
                {[
                  "Travelers wanting highly formal luxury",
                  "Families seeking extensive children’s programming",
                  "Budget-focused travelers",
                  "Guests wanting nonstop onboard entertainment",
                  "Travelers seeking ultra-traditional cruise experiences",
                ].map((item, i) => (
                  <li key={i}>
                    <Minus size={16} className="Asc-icon-muted" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="Asc-body-text" style={{ marginTop: "20px" }}>
            Honest guidance like this builds trust and helps travelers choose
            the right luxury cruise experience.
          </p>
        </div>
      </section>

      {/* ── COMMON MISTAKES ───────────────────────────────────────── */}
      <section className="Lfsg-section Lfsg-bg-dark" id="Lfsg-mistakes">
        <div className="Lfsg-container">
          <div className="Lfsg-section-header">
            <h2 className="Lfsg-h2-white">
              Common Mistakes Travelers Make <br /> with Explora Journeys
            </h2>

            <div className="Lfsg-accent-line-white" />
          </div>

          <div className="Lfsg-mistakes-grid">
            {[
              {
                title: "Booking Too Late",
                desc: "The best suite categories often sell quickly.",
              },

              {
                title: "Choosing Based Only on Price",
                desc: "Luxury value matters more than headline fare alone.",
              },

              {
                title: "Assuming All Luxury Cruise Lines Feel the Same",
                desc: "Explora’s atmosphere is very distinct from brands like Regent or Crystal.",
              },

              {
                title: "Not Using a Luxury Cruise Advisor",
                desc: "Luxury cruise planning often includes suite selection, air arrangements, VIP perks, pre/post cruise hotels, destination expertise, and exclusive amenities.",
              },
            ].map((item, i) => (
              <div key={i} className="Lfsg-mistake-card">
                <div className="Lfsg-mistake-number">
                  {String(i + 1).padStart(2, "0")}
                </div>

                <h4 className="Lfsg-mistake-title">{item.title}</h4>

                <p className="Lfsg-mistake-desc">{item.desc}</p>
              </div>
            ))}
          </div>

          <p
            className="Lfsg-mistake-desc"
            style={{
              marginTop: "40px",
              textAlign: "center",
              maxWidth: "900px",
              marginInline: "auto",
            }}
          >
            Working with an experienced luxury advisor often significantly
            improves the overall cruise experience.
          </p>
        </div>
      </section>

      {/* VIDEO SECTION */}
      <section
        className="Asc-video-section"
        id="Asc-video"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="Asc-container">
          <div className="Asc-section-header">
            <h2 className="Asc-h2">Experience Modern Luxury at Sea</h2>

            <div className="Asc-accent-line"></div>

            <p className="Asc-video-intro">
              Step inside the world of Explora Journeys and discover a new
              standard of ocean travel defined by refined elegance, spacious
              luxury, world-class dining, and immersive experiences designed for
              modern luxury travelers.
            </p>
          </div>

          <div className="Asc-video-wrapper">
            <div className="Asc-video-frame">
              <iframe
                src="https://www.youtube.com/embed/ZOEMyGj0g_c"
                title="Explora Journeys Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* ANGELA HUGHES AUTHORITY BOX */}
      <section className="Adg-expert-section" id="Asc-expert-insight">
        <div className="Asc-container">
          {/* TOP HEADING */}
          <div className="Adg-expert-heading">
            <span className="Adg-expert-eyebrow">Luxury Travel Expertise</span>

            <h2 className="Adg-expert-title">
              Expert Insight from Angela Hughes
            </h2>

            <div className="Adg-expert-divider"></div>
          </div>

          {/* MAIN GRID */}
          <div className="Adg-expert-grid">
            {/* LEFT SIDE */}
            <div className="Adg-expert-image-col">
              <div className="Adg-expert-portrait-wrap">
                <img
                  src={AboutImage}
                  alt="Angela Hughes – Luxury Travel Expert"
                  className="Adg-expert-portrait"
                />

                <div className="Adg-expert-portrait-badge">
                  <Star size={14} />
                  <span>40+ Years Experience</span>
                </div>
              </div>

              <div className="Adg-expert-name-card">
                <h3 className="Adg-expert-name">Angela Hughes</h3>

                <p className="Adg-expert-role">
                  CEO · Trips &amp; Ships Luxury Travel
                </p>

                <div className="Adg-expert-name-divider"></div>

                <p className="Adg-expert-countries">
                  <MapPin size={14} />
                  121+ Countries Visited
                </p>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="Adg-expert-content-col">
              <div className="Adg-expert-credentials-box">
                <h4 className="Adg-expert-credentials-title">
                  <Award size={16} />
                  Angela Hughes Authority Box
                </h4>

                <div className="Adg-expert-credentials-grid">
                  {[
                    {
                      icon: <Award size={16} />,
                      label: "CEO, Trips & Ships Luxury Travel",
                    },
                    {
                      icon: <Star size={16} />,
                      label: "40+ years in luxury travel",
                    },
                    {
                      icon: <MapPin size={16} />,
                      label: "Visited 121+ countries",
                    },
                    {
                      icon: <Award size={16} />,
                      label: "Founder of Luxury Travel University",
                    },
                    {
                      icon: <Users size={16} />,
                      label: "Global luxury travel speaker and trainer",
                    },
                    {
                      icon: <Users size={16} />,
                      label: "Weekly travel industry columnist",
                    },
                    {
                      icon: <Users size={16} />,
                      label: "Travel Leaders Network Advisory Board member",
                    },
                    {
                      icon: <Award size={16} />,
                      label: "2024 Luxury Travel Influencer of the Year",
                    },
                    {
                      icon: <Star size={16} />,
                      label:
                        "Named one of the Most Influential Women in Travel in 2026",
                    },
                    {
                      icon: <Award size={16} />,
                      label: "Featured in global travel publications",
                    },
                    {
                      icon: <Ship size={16} />,
                      label:
                        "Luxury cruise, safari, expedition, and premium travel specialist",
                    },
                  ].map((item, i) => (
                    <div className="Adg-expert-list-item" key={i}>
                      <span className="Adg-expert-list-icon">{item.icon}</span>

                      <span className="Adg-expert-list-label">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>

                <p
                  className="Adg-expert-role"
                  style={{ marginTop: "24px", lineHeight: "1.8" }}
                >
                  Angela Hughes is recognized globally for helping affluent
                  travelers design highly personalized luxury travel experiences
                  with exceptional insider expertise.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PLANNING ADVICE */}
      <section
        className="Avr-planning-section"
        id="Asc-planning-advice"
        style={{ backgroundColor: "var(--bg-white)" }}
      >
        <div className="Asc-container">
          {/* HEADING */}
          <div className="Avr-planning-heading">
            <span className="Avr-planning-eyebrow">
              Luxury Travel Expertise
            </span>

            <h2 className="Avr-planning-title">
              Why Work with Trips &amp; Ships Luxury Travel?
            </h2>

            <div className="Avr-planning-divider"></div>
          </div>

          {/* TWO-PANEL GRID */}
          <div className="Avr-planning-grid">
            {/* LEFT PANEL */}
            <div className="Avr-planning-left">
              <div className="Avr-planning-left-deco">&ldquo;</div>

              <h3 className="Avr-planning-left-title">
                Luxury Travel Is More Than Booking a Cruise
              </h3>

              <p className="Avr-planning-left-body">
                The best luxury travel experiences come from matching travelers
                with the right cruise, destinations, and onboard experience for
                their personal travel style.
              </p>

              <div className="Avr-planning-alert">
                <ShieldCheck size={18} className="Avr-planning-alert-icon" />

                <p className="Avr-planning-alert-text">
                  Trips &amp; Ships Luxury Travel helps discerning travelers
                  maximize value, secure VIP amenities, and avoid overlooking
                  important travel details.
                </p>
              </div>
            </div>

            {/* RIGHT PANEL */}
            <div className="Avr-planning-right">
              <p className="Avr-planning-right-intro">
                Clients working with Trips &amp; Ships Luxury Travel benefit
                from:
              </p>

              <div className="Avr-planning-benefits-grid">
                {[
                  {
                    icon: <MapPin size={18} />,
                    label: "Matching travelers to the right experience",
                  },
                  {
                    icon: <Compass size={18} />,
                    label: "Understanding luxury travel preferences",
                  },
                  {
                    icon: <Ship size={18} />,
                    label: "Luxury cruise expertise",
                  },
                  {
                    icon: <Star size={18} />,
                    label: "Maximizing travel value",
                  },
                  {
                    icon: <Award size={18} />,
                    label: "VIP amenities and exclusive benefits",
                  },
                  {
                    icon: <Plane size={18} />,
                    label: "Personalized luxury planning",
                  },
                  {
                    icon: <Users size={18} />,
                    label: "Expert travel guidance",
                  },
                  {
                    icon: <Shield size={18} />,
                    label: "Attention to overlooked details",
                  },
                ].map((item, i) => (
                  <div key={i} className="Avr-planning-benefit-card">
                    <span className="Avr-planning-benefit-icon">
                      {item.icon}
                    </span>

                    <span className="Avr-planning-benefit-label">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>

              <p
                className="Avr-planning-right-intro"
                style={{ marginTop: "24px" }}
              >
                Trips &amp; Ships Luxury Travel specializes in highly
                personalized luxury cruise planning for discerning travelers
                worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="Asc-section Asc-bg-soft" id="Asc-faq">
        <div className="Asc-container">
          <div className="Asc-section-header">
            <h2 className="Asc-h2">Frequently Asked Questions</h2>
            <div className="Asc-accent-line"></div>
            <p className="Asc-faq-intro">
              Everything you need to know about choosing the right Azamara ship.
            </p>
          </div>
          <FAQ />
        </div>
      </section>

      {/* CTA */}
      <section className="Asc-help-section">
        <div className="Asc-help-bg-wrap">
          <img
            src={CTAImage}
            alt="Explora Journeys luxury cruise"
            className="Asc-help-bg-img"
          />
          <div className="Asc-help-overlay"></div>
        </div>

        <div className="Asc-container">
          <div className="Asc-help-card">
            <div className="Asc-help-content">
              <div className="Asc-help-header">
                <span className="Asc-help-eyebrow">Luxury Cruise Guidance</span>
                <h2 className="Asc-help-h2">
                  Is Explora Journeys Right for You?
                </h2>
                <div className="Asc-help-accent"></div>
              </div>

              <div className="Asc-help-grid">
                <div className="Asc-help-info">
                  <p className="Asc-help-intro">
                    Explora Journeys is redefining luxury cruising for travelers
                    who want sophisticated, spacious, modern luxury without
                    excessive formality.
                  </p>

                  <p className="Asc-help-intro">
                    For the right traveler, it can deliver an exceptional luxury
                    ocean travel experience that feels fresher, calmer, and more
                    residential than many competing luxury brands.
                  </p>

                  <p className="Asc-help-intro">
                    The key is understanding whether its style of luxury aligns
                    with your personal travel preferences.
                  </p>

                  <div className="Asc-help-btn-container">
                    <button className="Asc-help-cta-btn">
                      Start Planning Your Explora Journey
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>

                <div className="Asc-help-list-box">
                  <h3 className="Asc-help-list-title">
                    Why expert guidance matters:
                  </h3>

                  <ul className="Asc-help-bullets">
                    {[
                      "Trusted luxury cruise expertise",
                      "Personalized voyage recommendations",
                      "Insider insight on luxury cruise brands",
                      "Suite and itinerary guidance",
                      "Tailored luxury travel planning",
                    ].map((item, i) => (
                      <li key={i}>
                        <div className="Asc-bullet-icon">
                          <Check size={14} strokeWidth={3} />
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="Asc-help-intro" style={{ marginTop: "20px" }}>
                    Angela Hughes and Trips & Ships Luxury Travel help
                    discerning travelers navigate the luxury cruise market with
                    personalized planning and trusted guidance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LuxuryExploraJourneysGuide;
