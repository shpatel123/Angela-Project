import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Users,
  MapPin,
  Award,
  Check,
  Plus,
  Minus,
  ArrowRight,
  Star,
  Compass,
  Sparkles,
  Waves,
  Utensils,
  Wine,
  Anchor,
  Smile,
  Heart,
  Coffee,
  Home,
  Music,
} from "lucide-react";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela2.jpeg";

import HeroImage1 from "../../assets/IsExploraGoodForFamilies/explora-final-destination.jpg";
import HeroImage2 from "../../assets/IsExploraGoodForFamilies/ExploraCruise.webp";
import HeroImage3 from "../../assets/ExploraJourneysWorth/Explora-Journeys3.webp";
import SuiteImage from "../../assets/IsExploraGoodForFamilies/onboard-experience.webp";
import OceanviewImage from "../../assets/IsExploraGoodForFamilies/explora-outside-suites.jpg";
import DiningImage from "../../assets/IsExploraGoodForFamilies/Fine-Dining.webp";
import PoolImage from "../../assets/IsExploraGoodForFamilies/explora-III-helios-pool-luxury-sundeck-retreat.jpg";
import PoolImage1 from "../../assets/IsExploraGoodForFamilies/explora-I-infinity-pool.webp";
import CtaImage from "../../assets/IsExploraGoodForFamilies/EXPLORA-III-PANAMA-CANAL.jpg";

import { Helmet } from "react-helmet-async";

/* ── Schema ─────────────────────────────────────────────────────── */
const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://tripsandships.com/#organization",
      name: "Trips & Ships Luxury Travel",
      url: "https://tripsandships.com",
      logo: "https://www.tripsandships.com/Copy-of-TRIPSSHIPS-e1592486640831.webp",
    },
    {
      "@type": "TravelAgency",
      "@id": "https://tripsandships.com/#travelagency",
      name: "Trips & Ships Luxury Travel",
      url: "https://tripsandships.com",
      description:
        "Luxury travel agency specializing in ultra-luxury cruise lines, custom wellness retreats, and personalized luxury travel experiences worldwide.",
    },
    {
      "@type": "Person",
      "@id": "https://tripsandships.com/#person",
      name: "Angela Hughes",
      jobTitle: "CEO of Trips & Ships Luxury Travel",
      description:
        "Luxury travel expert with over 40 years of experience and travel to 121+ countries.",
    },
    {
      "@type": "WebPage",
      "@id":
        "https://tripsandships.com/what-makes-explora-journeys-different/#webpage",
      name: "What Makes Explora Journeys Different? | A New Standard in Luxury Cruising",
      url: "https://tripsandships.com/what-makes-explora-journeys-different",
      description:
        "Discover what makes Explora Journeys different from other luxury cruise lines. Learn about its all-suite accommodations, European elegance, exceptional dining, immersive itineraries, wellness philosophy, and personalized luxury experience.",
    },
    {
      "@type": "Article",
      "@id":
        "https://tripsandships.com/what-makes-explora-journeys-different/#article",
      headline: "What Makes Explora Journeys Different?",
      description:
        "Discover how Explora Journeys sets a new vision of luxury cruising through spacious all-suite residences, contemporary European design, flexible dining options, integrated wellness, and destination-focused travel.",
      author: {
        "@type": "Person",
        name: "Angela Hughes",
      },
      publisher: {
        "@type": "Organization",
        name: "Trips & Ships Luxury Travel",
      },
      inLanguage: "en-US",
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://tripsandships.com/what-makes-explora-journeys-different/#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://tripsandships.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Explora Journeys",
          item: "https://tripsandships.com/luxury-explora-journeys-guide",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "What Makes Explora Journeys Different?",
          item: "https://tripsandships.com/what-makes-explora-journeys-different",
        },
      ],
    },
    {
      "@type": "Cruise",
      "@id":
        "https://tripsandships.com/what-makes-explora-journeys-different/#cruise",
      name: "Explora Journeys Fleet",
      description:
        "A fleet of luxury ocean liners designed in Switzerland and built in Italy, blending European design with warm, cosmopolitan hospitality.",
      provider: {
        "@type": "Organization",
        name: "Explora Journeys",
      },
    },
    {
      "@type": "TouristTrip",
      "@id":
        "https://tripsandships.com/what-makes-explora-journeys-different/#touristtrip",
      name: "Explora Journeys Ocean Journey",
      description:
        "An immersive luxury cruise experience designed to connect travelers with themselves, others, and the destinations they visit.",
      provider: {
        "@type": "Organization",
        name: "Explora Journeys",
      },
    },
    {
      "@type": "Service",
      "@id":
        "https://tripsandships.com/what-makes-explora-journeys-different/#service",
      serviceType: "Bespoke Luxury Cruise Booking & Concierge Services",
      provider: {
        "@type": "TravelAgency",
        name: "Trips & Ships Luxury Travel",
      },
      areaServed: "Worldwide",
      description:
        "Personalized travel advisory services to coordinate luxury cruise cabins, transfers, private shore excursions, and flight logistics.",
    },
    {
      "@type": "ItemList",
      "@id":
        "https://tripsandships.com/what-makes-explora-journeys-different/#itemlist",
      name: "Core Differentiators of Explora Journeys",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Spacious All-Suite Residences",
          description:
            "Oceanfront accommodations featuring private terraces, floor-to-ceiling windows, and walk-in wardrobes.",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Contemporary European Design",
          description:
            "Clean architectural lines, neutral tones, and natural light that feel closer to a boutique hotel than a traditional cruise liner.",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Flexible Open-Seating Dining",
          description:
            "Choice of multiple restaurants without fixed schedules or assigned seating.",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Integrated Wellness Philosophy",
          description:
            "Spas, gyms, healthy menu options, and relaxation spaces designed as a natural part of daily life.",
        },
      ],
    },
    {
      "@type": "Review",
      "@id":
        "https://tripsandships.com/what-makes-explora-journeys-different/#review",
      itemReviewed: {
        "@type": "Cruise",
        name: "Explora Journeys",
      },
      author: {
        "@type": "Person",
        name: "Angela Hughes",
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "4.9",
        bestRating: "5",
      },
      reviewBody:
        "Explora Journeys is truly unique. It sets a new benchmark in luxury ocean travel with its spacious design, residential comfort, and contemporary European style. It is the perfect choice for travelers seeking quiet sophistication.",
    },
    {
      "@type": "FAQPage",
      "@id":
        "https://tripsandships.com/what-makes-explora-journeys-different/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What makes Explora Journeys different from other cruise lines?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Explora Journeys focuses on spacious all-suite accommodations, contemporary luxury, exceptional dining, personalized service, wellness, and destination-focused itineraries rather than large-scale entertainment.",
          },
        },
        {
          "@type": "Question",
          name: "Are all accommodations suites?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Every guest stays in an oceanfront suite with a private terrace.",
          },
        },
        {
          "@type": "Question",
          name: "Is Explora Journeys considered luxury?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. It is positioned within the premium luxury cruise market and emphasizes spacious accommodations, personalized hospitality, and refined experiences.",
          },
        },
        {
          "@type": "Question",
          name: "Is Explora formal?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. The atmosphere is elegant but relaxed, allowing guests to enjoy luxury without unnecessary formality.",
          },
        },
        {
          "@type": "Question",
          name: "Does Explora have flexible dining?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Guests can choose when and where they dine instead of following fixed dining schedules.",
          },
        },
        {
          "@type": "Question",
          name: "Is Explora good for couples?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. The peaceful atmosphere, exceptional dining, and luxurious suites make it especially appealing for couples.",
          },
        },
        {
          "@type": "Question",
          name: "Is Explora suitable for families?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Families are welcome, although the experience is designed more for travelers seeking sophisticated luxury than extensive children's entertainment.",
          },
        },
        {
          "@type": "Question",
          name: "Does Explora focus on wellness?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Wellness is integrated throughout the ship with spa facilities, fitness programs, healthy dining, and relaxation spaces.",
          },
        },
        {
          "@type": "Question",
          name: "Is Explora worth the premium price?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For travelers seeking spacious accommodations, exceptional service, and a relaxed luxury experience, many consider it an excellent value within the luxury cruise market.",
          },
        },
        {
          "@type": "Question",
          name: "Should I use a travel advisor when booking Explora?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Working with an experienced luxury travel advisor can help you choose the right itinerary, suite, and available offers while simplifying the planning process.",
          },
        },
        {
          "@type": "Question",
          name: "What is Explora Journeys' 'Ocean State of Mind' philosophy?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The 'Ocean State of Mind' is Explora Journeys' core philosophy, designed to connect guests with the sea, themselves, and like-minded travelers. It emphasizes relaxation, personal discovery, wellness, and a slower, more mindful approach to luxury travel.",
          },
        },
        {
          "@type": "Question",
          name: "Are gratuities included in the fare on Explora Journeys?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, all onboard gratuities for housekeeping, bar, and dining services are fully included in the cruise fare, ensuring a seamless and stress-free environment where crew members focus solely on personalized hospitality.",
          },
        },
        {
          "@type": "Question",
          name: "What dining venues are included on Explora Journeys?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Explora Journeys includes five distinct specialty dining restaurants—featuring pan-Asian, Mediterranean, international, steakhouse, and poolside cuisines—plus a French gelateria and 24-hour in-suite dining. Only the ultra-exclusive Anthology dining venue has an additional charge.",
          },
        },
        {
          "@type": "Question",
          name: "Is Wi-Fi included and what is the speed?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "High-speed, unlimited Wi-Fi (via Starlink) is complimentary for all guests onboard. It supports multi-device streaming, messaging, and video calling, making it easy to stay connected or work remotely while at sea.",
          },
        },
        {
          "@type": "Question",
          name: "How many pools are on Explora Journeys ships?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "There are four heated swimming pools: three outdoor pools (including an adults-only pool and aft infinity pool overlooking the ocean wake) and one large pool covered by a retractable glass dome, allowing swimming in any weather condition.",
          },
        },
      ],
    },
  ],
};

/* ── FAQ Component ─────────────────────────────────────────────── */
function FAQ() {
  const [open, setOpen] = useState(null);

  const faqData = [
    {
      q: "What makes Explora Journeys different from other cruise lines?",
      a: "Explora Journeys focuses on spacious all-suite accommodations, contemporary luxury, exceptional dining, personalized service, wellness, and destination-focused itineraries rather than large-scale entertainment.",
    },
    {
      q: "Are all accommodations suites?",
      a: "Yes. Every guest stays in an oceanfront suite with a private terrace.",
    },
    {
      q: "Is Explora Journeys considered luxury?",
      a: "Yes. It is positioned within the premium luxury cruise market and emphasizes spacious accommodations, personalized hospitality, and refined experiences.",
    },
    {
      q: "Is Explora formal?",
      a: "No. The atmosphere is elegant but relaxed, allowing guests to enjoy luxury without unnecessary formality.",
    },
    {
      q: "Does Explora have flexible dining?",
      a: "Yes. Guests can choose when and where they dine instead of following fixed dining schedules.",
    },
    {
      q: "Is Explora good for couples?",
      a: "Absolutely. The peaceful atmosphere, exceptional dining, and luxurious suites make it especially appealing for couples.",
    },
    {
      q: "Is Explora suitable for families?",
      a: "Families are welcome, although the experience is designed more for travelers seeking sophisticated luxury than extensive children's entertainment.",
    },
    {
      q: "Does Explora focus on wellness?",
      a: "Yes. Wellness is integrated throughout the ship with spa facilities, fitness programs, healthy dining, and relaxation spaces.",
    },
    {
      q: "Is Explora worth the premium price?",
      a: "For travelers seeking spacious accommodations, exceptional service, and a relaxed luxury experience, many consider it an excellent value within the luxury cruise market.",
    },
    {
      q: "Should I use a travel advisor when booking Explora?",
      a: "Working with an experienced luxury travel advisor can help you choose the right itinerary, suite, and available offers while simplifying the planning process.",
    },
    {
      q: "What is Explora Journeys' 'Ocean State of Mind' philosophy?",
      a: "The 'Ocean State of Mind' is Explora Journeys' core philosophy, designed to connect guests with the sea, themselves, and like-minded travelers. It emphasizes relaxation, personal discovery, wellness, and a slower, more mindful approach to luxury travel.",
    },
    {
      q: "Are gratuities included in the fare on Explora Journeys?",
      a: "Yes, all onboard gratuities for housekeeping, bar, and dining services are fully included in the cruise fare, ensuring a seamless and stress-free environment where crew members focus solely on personalized hospitality.",
    },
    {
      q: "What dining venues are included on Explora Journeys?",
      a: "Explora Journeys includes five distinct specialty dining restaurants—featuring pan-Asian, Mediterranean, international, steakhouse, and poolside cuisines—plus a French gelateria and 24-hour in-suite dining. Only the ultra-exclusive Anthology dining venue has an additional charge.",
    },
    {
      q: "Is Wi-Fi included and what is the speed?",
      a: "High-speed, unlimited Wi-Fi (via Starlink) is complimentary for all guests onboard. It supports multi-device streaming, messaging, and video calling, making it easy to stay connected or work remotely while at sea.",
    },
    {
      q: "How many pools are on Explora Journeys ships?",
      a: "There are four heated swimming pools: three outdoor pools (including an adults-only pool and aft infinity pool overlooking the ocean wake) and one large pool covered by a retractable glass dome, allowing swimming in any weather condition.",
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

/* ── Main Component ──────────────────────────────────────────────── */
const WhatMakesExploraDifferent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [readMore, setReadMore] = useState(false);
  const [hovered, setHovered] = useState(null);

  const images = [HeroImage1, HeroImage2, HeroImage3];

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
          What Makes Explora Journeys Different? | A New Standard in Luxury
          Cruising
        </title>
        <meta name="title" content="What Makes Explora Journeys Different?" />
        <meta
          name="description"
          content="Discover what makes Explora Journeys different from other luxury cruise lines. Learn about its all-suite accommodations, European elegance, exceptional dining, immersive itineraries, wellness philosophy, and personalized luxury experience."
        />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      <Nav />

      {/* ── HERO ───────────────────────────────────────────────────── */}
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
            What Makes Explora <br /> Journeys Different?
          </h1>

          <p>
            Luxury cruising has traditionally been defined by elegant ships,
            attentive service, and premium destinations. Explora Journeys
            delivers all of those qualities—but it also introduces a different
            philosophy.
          </p>

          <p>
            Rather than designing cruises around packed schedules, formal
            traditions, and constant onboard entertainment, Explora Journeys
            focuses on something many modern luxury travelers value even more:{" "}
            <strong>Space. Time. Freedom.</strong>
          </p>

          {readMore && (
            <>
              <p>
                Instead of feeling like a traditional cruise vacation, Explora
                Journeys feels like staying in a sophisticated European luxury
                hotel that happens to sail from one extraordinary destination to
                another.
              </p>

              <p>
                For travelers seeking understated elegance, personalized
                service, and immersive travel, this approach sets Explora apart
                from nearly every other cruise line in the luxury market.
              </p>
            </>
          )}

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

      {/* ── A NEW VISION OF LUXURY ─────────────────────────────────── */}
      <section className="adg-c-section adg-c-bg-white" id="adg-c-why-wellness">
        <div className="adg-c-container">
          <div className="adg-c-section-header">
            <h2 className="adg-c-h2">A New Vision of Luxury</h2>
            <div className="adg-c-accent-line"></div>
            <p className="Asc-section-intro">
              Explora Journeys was created for travelers who appreciate modern
              luxury rather than traditional formality. Everything about the
              experience feels intentionally designed.
            </p>
          </div>

          <div className="adg-c-overview-layout">
            <div className="adg-c-overview-icons">
              {[
                "Spacious public areas",
                "Contemporary European interiors",
                "Ocean views throughout the ship",
                "Relaxed elegance",
                "Personalized service",
                "Flexible daily schedules",
                "Destination-focused itineraries",
              ].map((label, i) => (
                <div key={i} className="adg-c-overview-item">
                  <span className="adg-c-overview-icon">
                    <Sparkles size={16} strokeWidth={2.5} />
                  </span>
                  <span className="adg-c-overview-label">{label}</span>
                </div>
              ))}
            </div>

            <div className="adg-c-overview-right">
              <div className="adg-c-overview-callout">
                <div className="adg-c-overview-callout-inner">
                  <Star size={28} className="adg-c-callout-star" />
                  <p className="adg-c-callout-text">
                    Luxury is expressed through comfort, thoughtful design, and
                    exceptional hospitality rather than unnecessary
                    extravagance.
                  </p>
                </div>
              </div>

              <div className="adg-c-overview-image-wrap">
                <img
                  src={PoolImage}
                  alt="Explora Journeys luxury pool deck overview"
                  className="adg-c-overview-img"
                />
                <div className="adg-c-overview-img-overlay">
                  <span className="adg-c-overview-img-label">
                    Contemporary Elegance at Sea
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SUITES & DESIGN ────────────────────────────────────────── */}
      <section
        className="Ejsc-ent-section"
        id="Ejsc-recovery-retreats"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="Ejsc-container">
          <div className="Ejsc-section-header">
            <h2 className="Ejsc-section-title">Every Guest Stays in a Suite</h2>
            <div className="Asc-accent-line"></div>
            <p className="Ejsc-section-subtitle">
              Unlike many cruise lines where guests choose between interior
              cabins, ocean views, balconies, and suites, Explora offers a
              consistently premium, all-suite experience.
            </p>
          </div>

          <div className="Ejsc-ent-grid">
            {/* Suites Card */}
            <div className="Ejsc-ent-card Ejsc-explora-card">
              <div className="Ejsc-card-header">
                <div className="Ejsc-card-icon-wrap">
                  <Anchor size={24} className="Ejsc-card-icon" />
                </div>
                <h3 className="Ejsc-card-title">All-Suite Residences</h3>
              </div>

              <p className="Ejsc-card-intro">
                Each suite is designed with floor-to-ceiling windows and premium
                details that feel more like a luxury apartment than a ship
                cabin.
              </p>

              <ul className="Ejsc-feature-list">
                {[
                  "Generous private ocean-front terraces",
                  "Floor-to-ceiling glass windows",
                  "Spacious master bedrooms",
                  "Comfortable separate sitting areas",
                  "Walk-in wardrobe in most categories",
                  "Luxury bathrooms with walk-in showers",
                ].map((item, i) => (
                  <li key={i} className="Ejsc-feature-item">
                    <div className="Ejsc-feature-icon">
                      <Check size={14} />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="Ejsc-card-highlight">
                <p>
                  Premium bedding, in-room espresso machines, and custom
                  mini-bars elevate the residential comfort.
                </p>
              </div>
            </div>

            {/* Design Card */}
            <div className="Ejsc-ent-card Ejsc-seabourn-card">
              <div className="Ejsc-card-header">
                <div className="Ejsc-card-icon-wrap">
                  <Sparkles size={24} className="Ejsc-card-icon" />
                </div>
                <h3 className="Ejsc-card-title">European Design</h3>
              </div>

              <p className="Ejsc-card-intro">
                While traditional ships emphasize grand, dramatic décor, Explora
                Journeys focuses on understated, refined architecture.
              </p>

              <ul className="Ejsc-feature-list">
                {[
                  "Clean and crisp architectural lines",
                  "Natural materials (teak, marble, stone)",
                  "Elegant and contemporary furnishings",
                  "Calming neutral, soft color palettes",
                  "Thoughtfully selected contemporary artwork",
                  "Abundant natural light throughout public areas",
                ].map((item, i) => (
                  <li key={i} className="Ejsc-feature-item">
                    <div className="Ejsc-feature-icon">
                      <Star size={14} />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="Ejsc-card-highlight">
                <p>
                  Instead of overwhelming guests with flashy elements, the
                  design is specifically tuned to promote calm and relaxation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SPACE EVERYWHERE ───────────────────────────────────── */}
      <section
        className="ugt-components-section"
        id="space-everywhere"
        style={{ backgroundColor: "var(--bg-white)" }}
      >
        <div className="ugt-components-container">
          <div className="ugt-components-header">
            <h2 className="ugt-components-title">Space Everywhere</h2>
            <div className="adg-c-accent-line"></div>
          </div>

          <div className="ugt-components-list">
            <div className="ugt-component-row">
              <div className="ugt-component-image-wrapper">
                <div className="ugt-component-image-container">
                  <img
                    src={PoolImage1}
                    alt="Spacious public areas aboard Explora Journeys"
                    className="ugt-component-image"
                  />
                </div>
              </div>

              <div className="ugt-component-content">
                <p className="ugt-component-text">
                  One of the first things guests notice aboard Explora Journeys
                  is how spacious the ship feels. Rather than maximizing
                  passenger capacity, the ship is thoughtfully designed with
                  generous public areas where travelers can comfortably relax
                  and enjoy the journey.
                </p>

                <div className="ugt-questions-box">
                  <span className="ugt-questions-title">
                    Throughout the ship you'll find:
                  </span>

                  <ul className="ugt-questions-list">
                    {[
                      "Quiet lounges",
                      "Open pool decks",
                      "Comfortable seating throughout the ship",
                      "Oceanfront terraces",
                      "Relaxation spaces",
                      "Multiple outdoor venues",
                    ].map((item, idx) => (
                      <li key={idx} className="ugt-question-item">
                        <Check size={16} className="ugt-question-icon" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <p
                  className="ugt-component-footer"
                  style={{
                    backgroundColor: "var(--bg-white)",
                    padding: "12px",
                    borderRadius: "6px",
                  }}
                >
                  Even during sea days, Explora Journeys rarely feels crowded,
                  allowing guests to unwind, enjoy ocean views, and experience a
                  calm, unhurried atmosphere throughout the voyage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ONBOARD EXPERIENCE & DESTINATIONS ───────────────────────── */}
      <section
        className="Leg-section"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="Leg-container">
          <div className="Leg-header">
            <h2 className="Leg-title">A Different Philosophy</h2>
            <div className="adg-c-accent-line"></div>
            <p className="Leg-subtitle">
              Explora Journeys shifts the focus away from constant, busy
              activity schedules toward personalized service, health, and deeper
              cultural discovery.
            </p>
          </div>

          <div className="Leg-grid">
            {[
              {
                id: 1,
                accent: "gold",
                icon: Smile,
                title: "Personalized Service",
                description:
                  "Luxury hospitality is one of Explora Journeys' greatest strengths. Crew members take time to learn guest preferences and create highly personalized experiences throughout each voyage.",
                pills: [
                  "Friendly Conversations",
                  "Consistent Service",
                  "Attention to Detail",
                  "Personalized Recommendations",
                  "Efficient Assistance",
                  "Genuine Hospitality",
                ],
                highlight:
                  "Attentive service without feeling overly formal or intrusive.",
              },
              {
                id: 2,
                accent: "navy",
                icon: Sparkles,
                title: "Wellness Is Part of Everyday Life",
                description:
                  "Rather than treating wellness as an optional activity, Explora integrates it into the entire onboard experience, helping guests relax and recharge every day.",
                pills: [
                  "Luxury Spa",
                  "Ocean-View Fitness Center",
                  "Yoga Classes",
                  "Healthy Dining",
                  "Outdoor Relaxation",
                  "Wellness Treatments",
                  "Meditation",
                ],
                highlight:
                  "Return home feeling refreshed rather than exhausted.",
              },
              {
                id: 3,
                accent: "teal",
                icon: Compass,
                title: "Destination-Focused Itineraries",
                description:
                  "Explora Journeys places the destination at the heart of every voyage, allowing guests to spend more meaningful time exploring each port.",
                pills: [
                  "Longer Port Stays",
                  "Overnight Visits",
                  "Smaller Ports",
                  "Relaxed Schedules",
                  "Immersive Experiences",
                ],
                highlight:
                  "Discover destinations at a slower, more rewarding pace.",
              },
              {
                id: 4,
                accent: "gold",
                icon: Music,
                title: "Thoughtfully Curated Entertainment",
                description:
                  "Entertainment reflects Explora's sophisticated atmosphere with intimate performances and elegant social spaces instead of large-scale productions.",
                pills: [
                  "Live Music",
                  "Piano Performances",
                  "Jazz",
                  "Cultural Presentations",
                  "Cocktail Lounges",
                  "Elegant Bars",
                ],
                highlight:
                  "Relaxed evenings focused on atmosphere, conversation, and live entertainment.",
              },
            ].map((card) => {
              const Icon = card.icon;
              const isHovered = hovered === card.id;

              return (
                <div
                  key={card.id}
                  className={`Leg-card Leg-card--${card.accent} ${
                    isHovered ? "Leg-card--hovered" : ""
                  }`}
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

      {/* ── FLEXIBLE DINING & CULINARY ───────────────────────────────── */}
      <section className="azs-suites-section" id="azs-fitness-nutrition">
        <div className="azs-container">
          <div className="azs-section-header">
            <h2 className="azs-section-title">
              Flexible Dining &amp; Exceptional Culinary Experiences
            </h2>
            <div className="azs-section-accent"></div>
            <p className="azs-section-subtitle">
              Dining is central to the Explora experience, designed around
              choice, premium quality, and open seating.
            </p>
          </div>

          <div className="azs-suites-grid">
            {/* Dining Card */}
            <div className="azs-suites-card azs-seabourn-suites">
              <div className="azs-suites-image-wrap">
                <img
                  src={DiningImage}
                  alt="Fine dining restaurant on Explora Journeys"
                  className="azs-suites-img"
                />
                <span className="azs-suites-image-badge">No Fixed Times</span>
              </div>

              <div className="azs-suites-content">
                <div className="azs-suites-card-header">
                  <div className="azs-suites-icon-circle">
                    <Utensils size={24} className="azs-suites-icon" />
                  </div>
                  <h3 className="azs-suites-title">Flexible Dining</h3>
                </div>

                <p className="azs-suites-intro">
                  Instead of assigning traditional dining times or tables,
                  guests enjoy full autonomy to dine when and with whom they
                  prefer.
                </p>

                <div className="azs-suites-body">
                  <h4 className="azs-suites-group-title">
                    Highlights include:
                  </h4>

                  <ul className="azs-suites-list">
                    {[
                      "Open seating across all restaurants",
                      "No assigned tables or dinner shifts",
                      "Easy booking through the onboard app",
                      "Multiple specialty restaurants included in fare",
                      "Elegant bars, lounges, and artisan cafés",
                      "In-suite dining service available 24/7",
                    ].map((item, idx) => (
                      <li key={idx} className="azs-suites-list-item">
                        <div className="azs-suites-list-icon-wrapper">
                          <Check size={14} className="azs-suites-list-icon" />
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="azs-suites-divider"></div>

                  <div className="azs-suites-highlight-box azs-seabourn-suites-highlight">
                    <p className="azs-suites-highlight-text">
                      This dining flexibility creates a more relaxed vacation
                      experience, matching the cadence of your day.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Culinary Card */}
            <div className="azs-suites-card azs-azamara-suites">
              <div className="azs-suites-image-wrap">
                <img
                  src={HeroImage3}
                  alt="Culinary specialty plate"
                  className="azs-suites-img"
                />
                <span className="azs-suites-image-badge">
                  Culinary Artistry
                </span>
              </div>

              <div className="azs-suites-content">
                <div className="azs-suites-card-header">
                  <div className="azs-suites-icon-circle">
                    <Wine size={24} className="azs-suites-icon" />
                  </div>
                  <h3 className="azs-suites-title">Exceptional Experiences</h3>
                </div>

                <p className="azs-suites-intro">
                  Every meal is thoughtfully prepared by culinary experts, using
                  fresh ingredients and inspired by destinations along the
                  itinerary.
                </p>

                <div className="azs-suites-body">
                  <h4 className="azs-suites-group-title">Venues feature:</h4>

                  <ul className="azs-suites-list">
                    {[
                      "Mediterranean Cuisine: Fresh seafood and regional ingredients",
                      "Asian-Inspired: Pan-Asian menus, sushi, and wok specialties",
                      "Refined Steakhouse: Select prime cuts and aged steaks",
                      "International Dining: Menus inspired by global cuisines",
                      "Casual Dining: Gourmet poolside snacks and chef stations",
                      "Fine Dining: Exquisite tasting menus and wine pairings",
                    ].map((item, idx) => {
                      const [title, desc] = item.split(": ");
                      return (
                        <li key={idx} className="azs-suites-list-item">
                          <div className="azs-suites-list-icon-wrapper">
                            <Check size={14} className="azs-suites-list-icon" />
                          </div>
                          <span>
                            <strong>{title}:</strong> {desc}
                          </span>
                        </li>
                      );
                    })}
                  </ul>

                  <div className="azs-suites-divider"></div>

                  <div className="azs-suites-highlight-box azs-azamara-suites-highlight">
                    <p className="azs-suites-highlight-text">
                      From artisan coffees in the morning to wine pairings in
                      the evening, culinary quality is paramount.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ WHO IS EXPLORA JOURNEYS DESIGNED FOR? ════════════════════════════════ */}
      <section className="adg-section">
        <div className="adg-container">
          <div className="adg-section-header" style={{ marginBottom: "60px" }}>
            <h2 className="adg-h2">Who Is Explora Journeys Designed For?</h2>
            <div className="adg-accent-line"></div>
          </div>

          <div
            className="adg-split-layout"
            style={{ alignItems: "flex-start" }}
          >
            <div className="adg-content-card-side">
              <img
                src={SuiteImage}
                alt="Guests enjoying the luxury atmosphere aboard Explora Journeys"
                className="adg-side-image"
                style={{ height: "30vh" }}
              />

              <div className="adg-info-card">
                <div className="adg-card-meta">
                  <Compass size={28} />
                  <span className="adg-meta-label">
                    Contemporary Luxury for Modern Travelers
                  </span>
                </div>

                <p className="adg-card-lead">
                  Explora Journeys is designed for travelers who value
                  understated luxury, exceptional comfort, and meaningful travel
                  experiences over crowded ships and nonstop entertainment.
                </p>

                <div className="adg-card-divider"></div>

                <p className="adg-card-subtext">
                  Every voyage combines elegant accommodations, attentive
                  service, world-class dining, wellness, and destination-focused
                  itineraries in a relaxed atmosphere.
                </p>

                <p className="adg-card-subtext" style={{ marginTop: "18px" }}>
                  Many guests are experienced travelers looking for an
                  alternative to both mainstream cruise lines and more
                  traditional luxury brands.
                </p>
              </div>
            </div>

            <div className="adg-list-side">
              {[
                {
                  title: "Contemporary Luxury",
                  icon: <Check size={20} />,
                },
                {
                  title: "Spacious Accommodations",
                  icon: <Home size={20} />,
                },
                {
                  title: "Quiet Surroundings",
                  icon: <Coffee size={20} />,
                },
                {
                  title: "Exceptional Dining",
                  icon: <Utensils size={20} />,
                },
                {
                  title: "Wellness Experiences",
                  icon: <Heart size={20} />,
                },
                {
                  title: "Personalized Service",
                  icon: <Users size={20} />,
                },
                {
                  title: "Cultural Exploration",
                  icon: <Compass size={20} />,
                },
                {
                  title: "Relaxed Sophistication",
                  icon: <Waves size={20} />,
                },
              ].map((item, i) => (
                <div key={i} className="adg-list-item-card">
                  <div className="adg-list-item-icon">{item.icon}</div>
                  <h4 className="adg-list-item-label">{item.title}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY BOOK THROUGH A TRAVEL ADVISOR ────────────────────────── */}
      <section className="ugt-advantage-section" id="off-season-recovery">
        <div className="ugt-advantage-container">
          <div className="ugt-advantage-header">
            <span className="ugt-advantage-eyebrow">
              Professional Advisor Support
            </span>

            <h2 className="ugt-advantage-title">
              Why Book Through a Luxury Travel Advisor?
            </h2>

            <div className="Asc-accent-line"></div>

            <p className="ugt-advantage-intro">
              Luxury cruises involve many choices beyond selecting a departure
              date. An experienced travel advisor works directly with the cruise
              line to ensure every detail matches your preferences.
            </p>
          </div>

          <div className="ugt-advantage-grid">
            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <Compass size={28} strokeWidth={1.5} />
              </div>
              <h4 className="ugt-card-title">Choose the Right Itinerary</h4>
              <p className="ugt-card-desc">
                Select itineraries with overnight stays and port calls tailored
                to your style of travel.
              </p>
            </div>

            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <Award size={28} strokeWidth={1.5} />
              </div>
              <h4 className="ugt-card-title">Select the Ideal Suite</h4>
              <p className="ugt-card-desc">
                Receive expert guidance on suite categories, terrace dimensions,
                and deck locations.
              </p>
            </div>

            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <Sparkles size={28} strokeWidth={1.5} />
              </div>
              <h4 className="ugt-card-title">Compare Promotions</h4>
              <p className="ugt-card-desc">
                Access advisor-exclusive rates, onboard credits, room upgrades,
                and custom promotions.
              </p>
            </div>

            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <MapPin size={28} strokeWidth={1.5} />
              </div>
              <h4 className="ugt-card-title">Coordinate Logistics</h4>
              <p className="ugt-card-desc">
                Seamlessly organize pre- and post-cruise luxury hotels, flights,
                and private transfers.
              </p>
            </div>

            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <Anchor size={28} strokeWidth={1.5} />
              </div>
              <h4 className="ugt-card-title">Destination Experiences</h4>
              <p className="ugt-card-desc">
                Book private local tour guides, tailored excursions, and
                exclusive culinary excursions.
              </p>
            </div>

            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <Users size={28} strokeWidth={1.5} />
              </div>
              <h4 className="ugt-card-title">Maximize Value</h4>
              <p className="ugt-card-desc">
                Receive dedicated support from start to finish to ensure you
                receive the greatest return on investment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RELAXED ATMOSPHERE */}
      <section className="afc-section afc-bg-white" id="afc-relaxed-atmosphere">
        <div className="afc-container">
          <div className="afc-section-header">
            <h2 className="afc-h2">A Relaxed Atmosphere</h2>
            <div className="afc-accent-line"></div>
          </div>

          {/* Feature Split Layout */}
          <div className="afc-split-layout">
            {/* Left Column */}
            <div className="afc-content-side">
              <div className="afc-insight-card">
                <p className="afc-lead-text">
                  <strong>
                    One of Explora Journeys' greatest strengths is its calm,
                    sophisticated onboard atmosphere.
                  </strong>
                </p>

                <div className="afc-why-box">
                  <span className="afc-why-title">You Won't Find</span>
                  <p className="afc-why-text">
                    Loud announcements, constant sales promotions, crowded pool
                    games, theme park attractions, or nonstop entertainment
                    schedules competing for your attention.
                  </p>
                </div>
              </div>

              <div className="afc-recommendations-wrapper">
                <h3 className="afc-sub-title">Instead, Guests Enjoy:</h3>

                <div className="afc-rec-grid">
                  {[
                    "Quiet mornings",
                    "Ocean views",
                    "Leisurely lunches",
                    "Afternoon relaxation",
                    "Live music",
                    "Evening cocktails",
                    "Elegant conversation",
                  ].map((item, i) => (
                    <div key={i} className="afc-rec-card">
                      <div className="afc-rec-icon">
                        <Check size={18} />
                      </div>

                      <span className="afc-rec-label">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="afc-media-side">
              <div className="afc-image-wrapper" style={{ aspectRatio: "4/5" }}>
                <img
                  src={OceanviewImage}
                  alt="Relaxed atmosphere aboard Explora Journeys"
                  className="afc-showcase-image"
                />
              </div>

              <div className="afc-strategy-box" style={{ height: "250px" }}>
                <p className="afc-strategy-lead">
                  Explora Journeys is designed for travelers who appreciate
                  unhurried luxury, allowing every day to unfold naturally
                  rather than following a packed activity schedule.
                </p>

                <div className="afc-strategy-tags">
                  {[
                    "Quiet Spaces",
                    "Ocean Views",
                    "Live Music",
                    "Relaxation",
                    "Sophisticated Evenings",
                  ].map((tag, idx) => (
                    <span key={idx} className="afc-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <p
            className="afc-lead-text"
            style={{
              maxWidth: "900px",
              margin: "40px auto 0",
              textAlign: "center",
            }}
          >
            The slower pace encourages travelers to unwind, disconnect from
            daily routines, and fully enjoy every moment of the journey.
          </p>
        </div>
      </section>

      {/* ── HOW EXPLORA COMPARES TO TRADITIONAL CRUISE LINES ────────────────────────── */}
      <section
        className="Asc-section Asc-bg-white"
        id="Asc-comparison"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="Asc-container">
          <div className="Asc-section-header">
            <h2 className="Asc-h2">
              How Explora Compares to Traditional Cruise Lines
            </h2>
            <div className="Asc-accent-line"></div>
          </div>

          <div className="Asc-table-wrapper">
            <table className="Asc-fleet-table">
              <thead>
                <tr>
                  <th>Traditional Cruise Lines</th>
                  <th>Explora Journeys</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Large passenger capacity</td>
                  <td>More spacious guest experience</td>
                </tr>
                <tr>
                  <td>Fixed dining schedules</td>
                  <td>Flexible dining</td>
                </tr>
                <tr>
                  <td>Mixed cabin categories</td>
                  <td>All-suite accommodations</td>
                </tr>
                <tr>
                  <td>Busy entertainment</td>
                  <td>Relaxed entertainment</td>
                </tr>
                <tr>
                  <td>Activity-focused vacations</td>
                  <td>Destination-focused journeys</td>
                </tr>
                <tr>
                  <td>Formal atmosphere</td>
                  <td>Contemporary elegance</td>
                </tr>
                <tr>
                  <td>Crowded public spaces</td>
                  <td>Spacious ship design</td>
                </tr>
                <tr>
                  <td>Traditional luxury</td>
                  <td>Modern luxury lifestyle</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="Asc-body-text" style={{ marginTop: "2rem" }}>
            Explora Journeys doesn't attempt to compete on the quantity of
            onboard activities.
          </p>
        </div>
      </section>

      {/* ── EXPLORE THE WORLD WITH EXPLORA JOURNEYS ───────────────────────── */}
      <section
        className="Asc-video-section"
        id="Asc-video-5"
        style={{ backgroundColor: "var(--bg-white)" }}
      >
        <div className="Asc-container">
          <div className="Asc-section-header">
            <h2 className="Asc-h2">Explore the World with Explora Journeys</h2>

            <div className="Asc-accent-line"></div>

            <p className="Asc-video-intro">
              Discover how Explora Journeys reimagines luxury ocean travel
              through thoughtfully designed ships, immersive destinations, and
              the signature Ocean State of Mind. 
            </p>
          </div>

          <div className="Asc-video-wrapper">
            <div className="Asc-video-frame">
              <iframe
                src="https://www.youtube.com/embed/QP9bIwbEIBs"
                title="Explore the World with Explora Journeys"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* WHO SHOULD CHOOSE */}
      <section className="Asc-section Asc-bg-soft" id="Asc-who">
        <div className="Asc-container">
          <div className="Asc-section-header">
            <h2 className="Asc-h2">Is Explora Right for You?</h2>

            <div className="Asc-accent-line"></div>

            <p className="Asc-section-intro">
              Explora Journeys is designed for travelers who appreciate refined
              luxury, exceptional service, and destination-focused experiences.
              Choosing the right cruise depends on the type of vacation you
              enjoy most.
            </p>
          </div>

          <div className="Asc-who-grid">
            {/* EXCELLENT CHOICE */}
            <div className="Asc-who-card Asc-who-yes">
              <h3 className="Asc-who-title">
                Explora Journeys Is an Excellent Choice If You Value:
              </h3>

              <ul className="Asc-who-list">
                {[
                  "Spacious suites",
                  "Elegant design",
                  "Personalized hospitality",
                  "Flexible schedules",
                  "Quiet luxury",
                  "Gourmet dining",
                  "Wellness experiences",
                  "Immersive destinations",
                ].map((item, i) => (
                  <li key={i}>
                    <Check size={16} className="Asc-icon-green" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* MAY NOT BE THE BEST FIT */}
            <div className="Asc-who-card Asc-who-no">
              <h3 className="Asc-who-title">
                It May Be Less Suitable for Travelers Seeking:
              </h3>

              <ul className="Asc-who-list">
                {[
                  "Water parks",
                  "Character entertainment",
                  "High-energy nightlife",
                  "Constant organized activities",
                  "Budget-friendly vacations",
                ].map((item, i) => (
                  <li key={i}>
                    <Minus size={16} className="Asc-icon-muted" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p
            className="Asc-body-text"
            style={{
              maxWidth: "760px",
              margin: "32px auto 0",
              textAlign: "center",
            }}
          >
            Understanding your own travel style is the best way to determine
            whether Explora Journeys is the right fit for your next luxury
            cruise vacation.
          </p>
        </div>
      </section>

      {/* ── ANGELA HUGHES AUTHORITY ────────────────────────────────── */}
      <section className="Adg-expert-section" id="Asc-expert-insight">
        <div className="Asc-container">
          <div className="Adg-expert-heading">
            <span className="Adg-expert-eyebrow">
              Expert Insight From Angela Hughes
            </span>
            <h2 className="Adg-expert-title">Angela Hughes Luxury Authority</h2>
            <div className="Adg-expert-divider"></div>
          </div>

          <div className="Adg-expert-grid">
            <div className="Adg-expert-image-col">
              <div className="Adg-expert-portrait-wrap">
                <img
                  src={AboutImage}
                  alt="Angela Hughes Luxury Cruise Travel Advisor"
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
                  CEO of Trips &amp; Ships Luxury Travel
                </p>
                <div className="Adg-expert-name-divider"></div>
                <p className="Adg-expert-countries">
                  <MapPin size={14} />
                  Traveled to more than 121 countries
                </p>
              </div>
            </div>

            <div className="Adg-expert-content-col">
              <div className="Adg-expert-credentials-box">
                <h4 className="Adg-expert-credentials-title">
                  <Award size={16} />
                  Angela Hughes Luxury Authority
                </h4>

                <div className="Adg-expert-credentials-grid">
                  {[
                    {
                      icon: <Award size={16} />,
                      label: "CEO of Trips & Ships Luxury Travel",
                    },
                    {
                      icon: <Award size={16} />,
                      label: "Founder of Luxury Travel University",
                    },
                    {
                      icon: <Star size={16} />,
                      label: "Over 40 years in the travel industry",
                    },
                    {
                      icon: <MapPin size={16} />,
                      label: "Traveled to more than 121 countries",
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
                      label: "Featured in major travel publications worldwide",
                    },
                    {
                      icon: <Anchor size={16} />,
                      label:
                        "Specialist in luxury and ultra-luxury cruise lines",
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
                  Angela Hughes and the team at Trips &amp; Ships Luxury Travel
                  help travelers navigate options, select the best suites and
                  promotions, and execute flawless itineraries on boutique
                  cruise lines like Explora Journeys.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────────────────── */}
      <section className="Asc-section Asc-bg-white" id="Asc-faq">
        <div className="Asc-container">
          <div className="Asc-section-header">
            <h2 className="Asc-h2">Frequently Asked Questions</h2>
            <div className="Asc-accent-line"></div>
            <p className="Asc-faq-intro">
              Everything you need to know about what sets Explora Journeys
              apart.
            </p>
          </div>
          <FAQ />
        </div>
      </section>

      {/* ── CTA & INTERNAL LINKS ────────────────────────────────────── */}
      <section className="Asc-help-section">
        <div className="Asc-help-bg-wrap">
          <img
            src={CtaImage}
            alt="Explora Journeys luxury yacht sundeck pool"
            className="Asc-help-bg-img"
          />
          <div className="Asc-help-overlay"></div>
        </div>

        <div className="Asc-container">
          <div className="Asc-help-card">
            <div className="Asc-help-content">
              <div className="Asc-help-header">
                <span className="Asc-help-eyebrow">
                  Personalized Luxury Cruise Planning
                </span>
                <h2 className="Asc-help-h2">
                  Ready to Plan Your Next Ocean Escape?
                </h2>
                <div className="Asc-help-accent"></div>
              </div>

              <div className="Asc-help-grid">
                <div className="Asc-help-info">
                  <p className="Asc-help-intro">
                    Connect with Angela Hughes and the expert team at Trips
                    &amp; Ships Luxury Travel for personalized guidance on
                    planning your voyage with Explora Journeys.
                  </p>

                  <p className="Asc-help-intro">
                    From selecting the perfect suite to arranging private
                    transfers and custom shore excursions, we handle every
                    detail so you can focus on enjoying the journey.
                  </p>

                  <div className="Asc-help-btn-container">
                    <Link
                      to="/contact"
                      className="Asc-help-cta-btn"
                      style={{ textDecoration: "none" }}
                    >
                      Start Planning Your Explora Journey
                      <ArrowRight size={18} />
                    </Link>
                  </div>
                </div>

                <div className="Asc-help-list-box">
                  <h3 className="Asc-help-list-title">
                    Expert planning services include:
                  </h3>
                  <ul className="Asc-help-bullets">
                    {[
                      "Complimentary suite upgrade assessment & booking",
                      "Access to exclusive agency rates & onboard credits",
                      "Coordination of pre/post cruise luxury hotels & flights",
                      "Booking of specialty restaurants & private transfers",
                      "Arranging private local guides & custom excursions",
                      "Dedicated travel concierge assistance start to finish",
                    ].map((item, i) => (
                      <li key={i}>
                        <div className="Asc-bullet-icon">
                          <Check size={14} strokeWidth={3} />
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Suggested Internal Links */}
              <div
                className="Asc-internal-links-section"
                style={{
                  marginTop: "60px",
                  borderTop: "1px solid rgba(255, 255, 255, 0.2)",
                  paddingTop: "40px",
                }}
              >
                <h3
                  style={{
                    color: "#fff",
                    fontFamily: "var(--font-display)",
                    fontSize: "24px",
                    fontWeight: "400",
                    marginBottom: "20px",
                  }}
                >
                  Explore More Explora Journeys Guides
                </h3>
                <div
                  className="Asc-internal-links-grid"
                  style={{
                    display: "grid",
                    gridTemplateColumns:
                      "repeat(auto-fill, minmax(280px, 1fr))",
                    gap: "15px",
                  }}
                >
                  {[
                    {
                      label: "Explora Journeys Guide",
                      path: "/luxury-explora-journeys-guide",
                    },
                    {
                      label: "Explora Journeys Review",
                      path: "/explora-journeys-review",
                    },
                    {
                      label: "Is Explora Journeys Worth It?",
                      path: "/is-explora-journeys-worth-it",
                    },
                    {
                      label: "Which Explora Ship Should You Choose?",
                      path: "/which-explora-ship-should-you-choose",
                    },
                    {
                      label: "Which Explora Suite Is Worth the Upgrade?",
                      path: "/which-explora-suite-is-worth-the-upgrade",
                    },
                    {
                      label: "Is Anthology Worth It?",
                      path: "/is-anthology-worth-it",
                    },
                    {
                      label: "Which Mediterranean Itinerary Is Best?",
                      path: "/which-mediterranean-itinerary-is-best",
                    },
                    {
                      label: "Is Explora Good for Families?",
                      path: "/is-explora-good-for-families",
                    },
                    {
                      label: "Is Explora Good for Solo Travelers?",
                      path: "/is-explora-good-for-solo-travelers",
                    },
                    {
                      label: "How to Get the Best Value on Explora Journeys",
                      path: "/how-to-get-the-best-value-on-explora-journeys",
                    },
                    {
                      label: "Is Explora Journeys Luxury?",
                      path: "/is-explora-journeys-luxury",
                    },
                    {
                      label: "Planning Your First Explora Journey",
                      path: "/planning-your-first-explora-journey",
                    },
                  ].map((link, idx) => (
                    <Link
                      key={idx}
                      to={link.path}
                      style={{
                        color: "rgba(255, 255, 255, 0.8)",
                        fontSize: "16px",
                        textDecoration: "none",
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        transition: "color 0.2s ease",
                      }}
                      onMouseEnter={(e) => (e.target.style.color = "#fff")}
                      onMouseLeave={(e) =>
                        (e.target.style.color = "rgba(255, 255, 255, 0.8)")
                      }
                    >
                      <ArrowRight size={14} style={{ flexShrink: 0 }} />
                      <span>{link.label}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhatMakesExploraDifferent;
