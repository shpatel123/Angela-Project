import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Users,
  MapPin,
  Award,
  Check,
  Minus,
  Plus,
  ArrowRight,
  Star,
  Compass,
  Sparkles,
  Ship,
  Utensils,
  Plane,
  Music,
  MapPinned,
  Car,
  BadgePercent,
  Home,
  ShieldCheck,
  HeartPulse,
  Map,
  BedDouble,
  CalendarClock,
} from "lucide-react";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela3.jpeg";

import HeroImage1 from "../../assets/ExploraIVGuide/EXPLORA-Alaska.jpg";
import HeroImage2 from "../../assets/ExploraIVGuide/EXPLORA-III-Exterior.jpg";
import HeroImage4 from "../../assets/ExploraIVGuide/greenland-expedition-cruise-arctic-luxury-voyage.jpg";
import ExploraPool from "../../assets/ExploraIVGuide/explora-I-luxury-pool-deck-close-up.JPG";
import ExploraDining from "../../assets/IsExploraGoodForFamilies/Fine-Dining.webp";
import ExploraService from "../../assets/ExploraIVGuide/explora-journeys-sky-lounge-outdoor-ocean-view-deck.jpg";
import ExploraDestination from "../../assets/WhichExploraSuiteWorthUpgrade/EXPLORA-CARIBBEAN.jpg";
import ExploraDestination2 from "../../assets/ExploraIVGuide/explorajourny.jpg";
import LuxuryOceanfrontSuites from "../../assets/ExploraIVGuide/explora-journeys-luxury-sundeck-ocean-loungers-relaxation.jpg";
import LuxuryOceanfrontPool from "../../assets/ExploraIVGuide/explora-I-infinity-pool-aerial-view.JPG";
import LuxuryOceanfront from "../../assets/ExploraIVGuide/explora-journeys-deluxe-penthouse-suite-bedroom.jpg";
import LuxuryOceanfront1 from "../../assets/ExploraIVGuide/explora-journeys-serenity-residence-private-whirlpool-suite.jpg";
import ExploraShip from "../../assets/IsExploraGoodForFamilies/ExploraDestination.webp";

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
        "Luxury travel agency specializing in luxury cruises, safaris, expeditions, and premium travel experiences.",
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
      "@id": "https://tripsandships.com/explora-iv-guide/#webpage",
      name: "Explora IV Guide",
      url: "https://tripsandships.com/explora-iv-guide",
      description:
        "Discover everything you need to know about Explora IV, including accommodations, dining, wellness, sustainability, itineraries, and whether this next-generation luxury cruise ship is right for your next voyage.",
    },
    {
      "@type": "Article",
      "@id": "https://tripsandships.com/explora-iv-guide/#article",
      headline:
        "Explora IV Guide | Everything You Need to Know About Explora Journeys' Fourth Luxury Ship",
      description:
        "A comprehensive guide to Explora IV, the fourth ship in the Explora Journeys fleet, covering ship design, suites, dining, wellness, entertainment, destinations, sustainability, and how it compares to Explora I, Explora II, and Explora III.",
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
      "@id": "https://tripsandships.com/explora-iv-guide/#breadcrumb",
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
          name: "Explora IV Guide",
          item: "https://tripsandships.com/explora-iv-guide",
        },
      ],
    },
    {
      "@type": "Cruise",
      "@id": "https://tripsandships.com/explora-iv-guide/#cruise",
      name: "Explora IV",
      description:
        "The fourth ship in the Explora Journeys fleet, offering all-oceanfront suites, destination-focused itineraries, next-generation sustainability features, and a boutique European luxury resort atmosphere at sea.",
      provider: {
        "@type": "Organization",
        name: "Explora Journeys",
      },
    },
    {
      "@type": "Product",
      "@id": "https://tripsandships.com/explora-iv-guide/#product",
      name: "Explora IV",
      description:
        "Fourth luxury cruise ship of Explora Journeys featuring all-suite oceanfront accommodations, multiple dining venues, wellness facilities, enhanced sustainability innovations, and destination-rich itineraries.",
      brand: {
        "@type": "Organization",
        name: "Explora Journeys",
      },
    },
    {
      "@type": "TouristTrip",
      "@id": "https://tripsandships.com/explora-iv-guide/#touristtrip",
      name: "Explora IV Luxury Cruise Experience",
      description:
        "A relaxed, contemporary luxury cruise experience aboard Explora IV designed for travelers who value space, exceptional service, outstanding cuisine, and meaningful destinations.",
      provider: {
        "@type": "Organization",
        name: "Explora Journeys",
      },
    },
    {
      "@type": "Service",
      "@id": "https://tripsandships.com/explora-iv-guide/#service",
      serviceType: "Luxury Cruise Vacation Planning & Booking Support",
      provider: {
        "@type": "TravelAgency",
        name: "Trips & Ships Luxury Travel",
      },
      areaServed: "Worldwide",
      description:
        "Comprehensive travel booking, suite selection assistance, transfers, pre/post hotel bookings, and shore excursion coordination for Explora IV sailings.",
    },
    {
      "@type": "ItemList",
      "@id": "https://tripsandships.com/explora-iv-guide/#itemlist",
      name: "What This Explora IV Guide Covers",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "What Is Explora IV?" },
        {
          "@type": "ListItem",
          position: 2,
          name: "A New Generation of Luxury Cruising",
        },
        { "@type": "ListItem", position: 3, name: "Contemporary Design" },
        {
          "@type": "ListItem",
          position: 4,
          name: "All-Suite Accommodations",
        },
        { "@type": "ListItem", position: 5, name: "Dining on Explora IV" },
        { "@type": "ListItem", position: 6, name: "Wellness at Sea" },
        { "@type": "ListItem", position: 7, name: "Public Spaces" },
        { "@type": "ListItem", position: 8, name: "Entertainment" },
        { "@type": "ListItem", position: 9, name: "Destinations" },
        {
          "@type": "ListItem",
          position: 10,
          name: "Sustainability & Innovation",
        },
        { "@type": "ListItem", position: 11, name: "What's Included" },
        {
          "@type": "ListItem",
          position: 12,
          name: "Explora IV vs Explora I, II & III",
        },
        { "@type": "ListItem", position: 13, name: "Tips Before Booking" },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://tripsandships.com/explora-iv-guide/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is Explora IV?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Explora IV is the fourth luxury ship in the Explora Journeys fleet, continuing the brand's focus on spacious suites, refined hospitality, wellness, and destination-focused cruising.",
          },
        },
        {
          "@type": "Question",
          name: "Are all accommodations suites?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Every guest stays in a luxury oceanfront suite with a private terrace.",
          },
        },
        {
          "@type": "Question",
          name: "Is Explora IV different from the earlier ships?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The overall luxury experience remains consistent, while Explora IV introduces newer technology, enhanced sustainability features, and refined operational improvements.",
          },
        },
        {
          "@type": "Question",
          name: "Does Explora IV have specialty dining?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Guests can enjoy multiple restaurants, including premium specialty dining experiences such as Anthology.",
          },
        },
        {
          "@type": "Question",
          name: "Is Explora IV suitable for couples?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. The ship's relaxed atmosphere, elegant suites, exceptional dining, and wellness facilities make it an outstanding choice for romantic travel.",
          },
        },
        {
          "@type": "Question",
          name: "Is Explora IV family-friendly?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Families are welcome, although the onboard experience is designed more for sophisticated luxury than children's entertainment.",
          },
        },
        {
          "@type": "Question",
          name: "Does Explora IV include Wi-Fi?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Wi-Fi is included, allowing guests to stay connected throughout the voyage.",
          },
        },
        {
          "@type": "Question",
          name: "What destinations will Explora IV visit?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Seasonal itineraries are expected to include destinations throughout Europe, the Caribbean, North America, and beyond.",
          },
        },
        {
          "@type": "Question",
          name: "Is Explora IV worth booking?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For travelers seeking spacious accommodations, refined luxury, and exceptional service, Explora IV is expected to become one of the premier luxury cruise ships in the industry.",
          },
        },
        {
          "@type": "Question",
          name: "Should I book through a travel advisor?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. A luxury travel advisor can help you choose the best itinerary, suite, and promotional offers while ensuring every detail of your vacation is professionally planned.",
          },
        },
        {
          "@type": "Question",
          name: "What is the environmental propulsion system of Explora IV?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Explora IV is powered by Liquefied Natural Gas (LNG), matching the eco-friendly propulsion system introduced on Explora III. This clean-burning fuel significantly reduces greenhouse gas emissions, nitrogen oxides, and fine particulate matter.",
          },
        },
        {
          "@type": "Question",
          name: "When is Explora IV scheduled to enter service?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Explora IV is scheduled to launch and enter service in 2027, continuing the brand's rapid fleet expansion and introducing new itineraries to luxury travelers.",
          },
        },
        {
          "@type": "Question",
          name: "What is the guest capacity and size of Explora IV?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Explora IV is designed to host a maximum of 900 guests in 461 oceanfront suites. With a size of approximately 63,900 gross register tons, it maintains one of the highest space-to-guest ratios in the luxury cruise industry.",
          },
        },
        {
          "@type": "Question",
          name: "Does Explora IV feature hydrogen fuel cell technology?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Explora IV is designed to incorporate hydrogen fuel cells to generate clean electricity for hotel operations while in port, eliminating emissions when docked and protecting local port environments.",
          },
        },
        {
          "@type": "Question",
          name: "Will there be a retractable glass roof pool on Explora IV?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, Explora IV will feature the Conservatory Pool under a massive, retractable glass dome, providing a climate-controlled swimming and relaxation space that can be enjoyed in any weather condition or sailing region.",
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
      q: "What is Explora IV?",
      a: "Explora IV is the fourth luxury ship in the Explora Journeys fleet, continuing the brand's focus on spacious suites, refined hospitality, wellness, and destination-focused cruising.",
    },
    {
      q: "Are all accommodations suites?",
      a: "Yes. Every guest stays in a luxury oceanfront suite with a private terrace.",
    },
    {
      q: "Is Explora IV different from the earlier ships?",
      a: "The overall luxury experience remains consistent, while Explora IV introduces newer technology, enhanced sustainability features, and refined operational improvements.",
    },
    {
      q: "Does Explora IV have specialty dining?",
      a: "Yes. Guests can enjoy multiple restaurants, including premium specialty dining experiences such as Anthology.",
    },
    {
      q: "Is Explora IV suitable for couples?",
      a: "Absolutely. The ship's relaxed atmosphere, elegant suites, exceptional dining, and wellness facilities make it an outstanding choice for romantic travel.",
    },
    {
      q: "Is Explora IV family-friendly?",
      a: "Families are welcome, although the onboard experience is designed more for sophisticated luxury than children's entertainment.",
    },
    {
      q: "Does Explora IV include Wi-Fi?",
      a: "Yes. Wi-Fi is included, allowing guests to stay connected throughout the voyage.",
    },
    {
      q: "What destinations will Explora IV visit?",
      a: "Seasonal itineraries are expected to include destinations throughout Europe, the Caribbean, North America, and beyond.",
    },
    {
      q: "Is Explora IV worth booking?",
      a: "For travelers seeking spacious accommodations, refined luxury, and exceptional service, Explora IV is expected to become one of the premier luxury cruise ships in the industry.",
    },
    {
      q: "Should I book through a travel advisor?",
      a: "Yes. A luxury travel advisor can help you choose the best itinerary, suite, and promotional offers while ensuring every detail of your vacation is professionally planned.",
    },
    {
      q: "What is the environmental propulsion system of Explora IV?",
      a: "Explora IV is powered by Liquefied Natural Gas (LNG), matching the eco-friendly propulsion system introduced on Explora III. This clean-burning fuel significantly reduces greenhouse gas emissions, nitrogen oxides, and fine particulate matter.",
    },
    {
      q: "When is Explora IV scheduled to enter service?",
      a: "Explora IV is scheduled to launch and enter service in 2027, continuing the brand's rapid fleet expansion and introducing new itineraries to luxury travelers.",
    },
    {
      q: "What is the guest capacity and size of Explora IV?",
      a: "Explora IV is designed to host a maximum of 900 guests in 461 oceanfront suites. With a size of approximately 63,900 gross register tons, it maintains one of the highest space-to-guest ratios in the luxury cruise industry.",
    },
    {
      q: "Does Explora IV feature hydrogen fuel cell technology?",
      a: "Yes. Explora IV is designed to incorporate hydrogen fuel cells to generate clean electricity for hotel operations while in port, eliminating emissions when docked and protecting local port environments.",
    },
    {
      q: "Will there be a retractable glass roof pool on Explora IV?",
      a: "Yes, Explora IV will feature the Conservatory Pool under a massive, retractable glass dome, providing a climate-controlled swimming and relaxation space that can be enjoyed in any weather condition or sailing region.",
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
const ExploraIVGuide = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [readMore, setReadMore] = useState(false);
  const [readMoreWhy, setReadMoreWhy] = useState(false);

  const images = [HeroImage1, HeroImage2, HeroImage4];

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
          Explora IV Guide | Everything You Need to Know About Explora Journeys'
          Fourth Luxury Ship
        </title>
        <meta name="title" content="Explora IV Guide" />
        <meta
          name="description"
          content="Discover everything you need to know about Explora IV, including its design, accommodations, dining, itineraries, wellness experiences, sustainability features, and who should book this next-generation luxury cruise ship."
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
          <h1>Explora IV Guide</h1>

          <p>
            Explora Journeys continues expanding its luxury fleet with Explora
            IV, the next evolution of the brand's modern approach to cruising.
          </p>

          <p>
            Building on the success of Explora I, Explora II, and Explora III,
            Explora IV is designed to offer the same spacious accommodations,
            exceptional dining, personalized service, and elegant atmosphere
            that have quickly made Explora one of the most respected names in
            luxury travel. While remaining true to the brand's philosophy, it
            also introduces the next generation of technology, sustainability
            initiatives, and refined guest experiences.
          </p>

          {readMore && (
            <>
              <p>
                From spacious oceanfront suites and beautifully designed public
                spaces to exceptional dining and personalized service, nearly
                every aspect of the ship focuses on comfort, relaxation, and
                understated elegance.
              </p>

              <p>
                If you're considering sailing aboard Explora IV, this guide will
                help you understand what to expect and whether it's the right
                luxury cruise for your next vacation.
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
      {/* ── FIRST IMPRESSIONS ─────────────────────────────── */}
      <section
        className="ugt-components-section"
        id="what-is-explora-iv"
        style={{ backgroundColor: "var(--bg-white)" }}
      >
        <div className="ugt-components-container">
          <div className="ugt-components-header">
            <h2 className="ugt-components-title">What Is Explora IV?</h2>

            <div className="adg-c-accent-line"></div>
          </div>

          <div className="ugt-components-list">
            <div className="ugt-component-row">
              <div className="ugt-component-image-wrapper">
                <div className="ugt-component-image-container">
                  <img
                    src={ExploraPool}
                    alt="Elegant interior aboard Explora IV with contemporary European design"
                    className="ugt-component-image"
                  />
                </div>
              </div>

              <div className="ugt-component-content">
                <p className="ugt-component-text">
                  <strong>Explora IV</strong> is the fourth luxury ship in the
                  Explora Journeys fleet. It continues the company's vision of
                  offering a luxury resort experience at sea rather than a
                  traditional cruise vacation.
                </p>

                <div className="ugt-questions-box">
                  <span className="ugt-questions-title">
                    Guests can expect:
                  </span>

                  <ul className="ugt-questions-list">
                    {[
                      "Contemporary European design",
                      "Spacious oceanfront suites",
                      "Personalized service",
                      "Flexible dining",
                      "Wellness-focused experiences",
                      "Destination-rich itineraries",
                      "Elegant public spaces",
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
                  Rather than adding more attractions, Explora IV focuses on
                  refining every aspect of the luxury guest experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── A NEW GENERATION OF LUXURY CRUISING ────────────────────────────── */}
      <section
        className="adg-c-section adg-c-bg-soft"
        id="new-generation-luxury"
      >
        <div className="adg-c-container">
          <div className="adg-c-section-header">
            <span className="adg-c-eyebrow">The Explora Philosophy</span>

            <h2 className="adg-c-h2">A New Generation of Luxury Cruising</h2>

            <div className="adg-c-accent-line"></div>

            <p className="Asc-section-intro">
              Explora Journeys believes luxury isn't measured by the size of a
              ship or the number of onboard attractions. Instead, Explora IV is
              designed to offer more space, greater comfort, exceptional
              hospitality, and a relaxed atmosphere where every journey feels
              effortless.
            </p>
          </div>

          <div className="adg-c-venues-grid1">
            {/* Luxury Philosophy */}
            <div className="adg-c-venue-card adg-c-venue-1">
              <div className="adg-c-venue-top">
                <span className="adg-c-venue-eyebrow">Luxury Philosophy</span>

                <h3 className="adg-c-venue-name">Relaxed Luxury at Sea</h3>

                <p className="adg-c-venue-highlight">
                  Space, Comfort & Exceptional Hospitality
                </p>
              </div>

              <ul className="adg-c-venue-list">
                {[
                  "More space",
                  "Greater comfort",
                  "Exceptional hospitality",
                  "Beautiful design",
                  "Meaningful destinations",
                  "Relaxed luxury",
                ].map((item, i) => (
                  <li key={i}>
                    <span className="adg-c-venue-dot"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="adg-c-venue-callout">
                <span className="adg-c-venue-callout-bar"></span>
                <p>
                  The goal is simple: create an atmosphere where guests can
                  truly slow down, reconnect, and enjoy every moment of the
                  journey.
                </p>
              </div>
            </div>

            {/* Contemporary Design */}
            <div className="adg-c-venue-card adg-c-venue-2">
              <div className="adg-c-venue-top">
                <span className="adg-c-venue-eyebrow">Contemporary Design</span>

                <h3 className="adg-c-venue-name">
                  Elegant European-Inspired Interiors
                </h3>

                <p className="adg-c-venue-highlight">
                  Timeless Design with Ocean Views
                </p>
              </div>

              <ul className="adg-c-venue-list">
                {[
                  "Floor-to-ceiling windows",
                  "Natural materials",
                  "Warm lighting",
                  "Contemporary artwork",
                  "Spacious lounges",
                  "Ocean-inspired interiors",
                ].map((item, i) => (
                  <li key={i}>
                    <span className="adg-c-venue-dot"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="adg-c-venue-callout">
                <span className="adg-c-venue-callout-bar"></span>
                <p>
                  Every space is thoughtfully designed to maximize natural light
                  while creating a calm, sophisticated atmosphere that feels
                  like a luxury residence at sea.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DINING ON EXPLORA IV ───────────────────────────────────── */}
      <section className="dmg-info-section" id="dining-explora-iv">
        <div className="dmg-info-container">
          <div className="dmg-info-header">
            <h2 className="dmg-info-title">Dining on Explora IV</h2>
            <div className="dmg-info-accent"></div>
          </div>

          <div className="dmg-info-grid">
            <div className="dmg-info-content">
              <p className="dmg-info-lead">
                Dining continues to be one of the highlights of the Explora
                experience. Guests can enjoy a collection of restaurants
                offering diverse culinary styles, all served with flexible
                dining times that allow you to dine whenever it best suits your
                schedule.
              </p>

              <div className="dmg-info-features dmg-info-features-scrollable">
                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Mediterranean Cuisine
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Fresh seasonal ingredients inspired by the flavors and
                      traditions of coastal Europe.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Asian-Inspired Dining
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Creative menus showcasing authentic flavors and
                      contemporary culinary techniques.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      International Specialties
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Globally inspired cuisine prepared with premium
                      ingredients and beautifully presented.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Casual & Specialty Dining
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Relaxed poolside dining is complemented by signature
                      venues such as <strong>Anthology</strong>, offering
                      elevated tasting menus for an exceptional evening at sea.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="dmg-info-media">
              <div className="dmg-media-wrapper">
                <img
                  src={ExploraDining}
                  alt="Elegant dining restaurant aboard Explora IV"
                  className="dmg-media-img"
                  style={{ height: "650px" }}
                />
                <div className="dmg-media-overlay"></div>

                <div className="dmg-media-badge">
                  <span>Flexible Dining • World-Class Cuisine</span>
                </div>
              </div>
            </div>
          </div>

          <p
            className="dmg-info-lead"
            style={{
              maxWidth: "900px",
              margin: "40px auto 0",
              textAlign: "center",
            }}
          >
            From relaxed lunches by the pool to memorable evenings at Anthology,
            every meal aboard Explora IV is designed to reflect the brand's
            commitment to exceptional cuisine, quality ingredients, and
            effortless luxury.
          </p>
        </div>
      </section>

      {/* ── WELLNESS & SPA / ENTERTAINMENT ───────────────────────── */}
      <section
        className="Ejvs-pricing-section"
        id="Ejvs-wellness-entertainment"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="Ejvs-container">
          <div className="Ejvs-section-header">
            <h2 className="Ejvs-section-title">
              Wellness &amp; Spa <br /> Entertainment
            </h2>
            <div className="Asc-accent-line"></div>
            <p className="Ejvs-section-subtitle">
              Explora IV continues the brand's commitment to wellness and its
              sophisticated approach to entertainment, designed for relaxation
              and enrichment.
            </p>
          </div>

          <div className="Ejvs-pricing-grid">
            {/* Wellness Card */}
            <div className="Ejvs-pricing-card Ejvs-explora-card">
              <div className="Ejvs-card-header">
                <div className="Ejvs-card-icon-wrap">
                  <HeartPulse size={24} className="Ejvs-card-icon" />
                </div>

                <h3 className="Ejvs-card-title">Wellness &amp; Spa</h3>
              </div>

              <p className="Ejvs-card-intro">
                Explora IV continues the brand's commitment to wellness,
                integrated throughout the voyage rather than limited to a single
                area of the ship.
              </p>

              <ul className="Ejvs-feature-list">
                {[
                  "Luxury spa",
                  "Ocean-view fitness center",
                  "Yoga classes",
                  "Wellness programs",
                  "Relaxation lounges",
                  "Healthy dining choices",
                  "Outdoor wellness spaces",
                ].map((item, i) => (
                  <li key={i} className="Ejvs-feature-item">
                    <div className="Ejvs-feature-icon">
                      <Check size={14} />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="Ejvs-card-highlight">
                <p>
                  Rather than being a single onboard attraction, wellness
                  becomes part of the overall lifestyle aboard the ship.
                </p>
              </div>
            </div>

            {/* Entertainment Card */}
            <div className="Ejvs-pricing-card Ejvs-seabourn-card">
              <div className="Ejvs-card-header">
                <div className="Ejvs-card-icon-wrap">
                  <Music size={24} className="Ejvs-card-icon" />
                </div>

                <h3 className="Ejvs-card-title">Entertainment</h3>
              </div>

              <p className="Ejvs-card-intro">
                Entertainment aboard Explora IV reflects the brand's
                sophisticated personality, emphasizing culture, music, and
                relaxed evenings.
              </p>

              <ul className="Ejvs-feature-list">
                {[
                  "Live music",
                  "Jazz performances",
                  "Pianists",
                  "Guest speakers",
                  "Cultural enrichment",
                  "Elegant evening lounges",
                ].map((item, i) => (
                  <li key={i} className="Ejvs-feature-item">
                    <div className="Ejvs-feature-icon">
                      <Star size={14} />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="Ejvs-card-highlight">
                <p>
                  Instead of high-energy productions, the emphasis is on
                  creating relaxed evenings filled with conversation, music, and
                  exceptional hospitality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DINING & SUSTAINABILITY */}
      <section
        className="dve-winner-section"
        id="dve-dining-sustainability"
        style={{ backgroundColor: "var(--bg-white)" }}
      >
        <div className="dve-container">
          <div className="dve-section-header">
            <h2 className="dve-section-title">
              Public Areas &amp; Sustainability
            </h2>
            <div className="dve-section-accent"></div>
            <p className="dve-section-subtitle">
              Exceptional cuisine and forward-thinking innovation are two of the
              defining features of the Explora IV experience.
            </p>
          </div>

          <div className="dve-winner-grid">
            {/* Spacious Public Areas */}
            <div className="dve-winner-card dve-disney-winner">
              <div className="dve-winner-image-wrap">
                <img
                  src={LuxuryOceanfrontSuites}
                  alt="Spacious public areas aboard Explora IV"
                  className="dve-winner-img"
                />
                <span className="dve-winner-badge">
                  Spacious Oceanfront Living
                </span>
              </div>

              <div className="dve-winner-content">
                <h3 className="dve-winner-title">Spacious Public Areas</h3>

                <p className="dve-winner-intro">
                  One of Explora Journeys' greatest strengths is the amount of
                  personal space available onboard. Explora IV has been
                  thoughtfully designed with expansive indoor and outdoor
                  gathering spaces, allowing guests to relax, unwind, and enjoy
                  the journey without feeling crowded.
                </p>

                <div className="dve-winner-divider"></div>

                <h4 className="dve-advantages-title">Explora IV Offers:</h4>

                <ul className="dve-advantages-list">
                  {[
                    "Multiple infinity pools",
                    "Oceanfront terraces",
                    "Elegant lounges",
                    "Observation decks",
                    "Quiet reading areas",
                    "Outdoor seating throughout the ship",
                  ].map((item, i) => (
                    <li key={i}>
                      <Check size={18} className="dve-advantage-icon" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sustainability & Innovation */}
            <div className="dve-winner-card dve-viking-winner">
              <div className="dve-winner-image-wrap">
                <img
                  src={ExploraService}
                  alt="Explora IV at sea showcasing next-generation ship design"
                  className="dve-winner-img"
                />
                <span className="dve-winner-badge">
                  Next-Generation Innovation
                </span>
              </div>

              <div className="dve-winner-content">
                <h3 className="dve-winner-title">
                  Sustainability &amp; Innovation
                </h3>

                <p className="dve-winner-intro">
                  Explora IV represents the next step in the fleet's evolution,
                  with an increased focus on environmental responsibility and
                  operational efficiency.
                </p>

                <div className="dve-winner-divider"></div>

                <h4 className="dve-advantages-title">
                  Sustainability Initiatives May Include:
                </h4>

                <ul className="dve-advantages-list">
                  {[
                    "Cleaner marine fuel technologies",
                    "Energy-efficient systems",
                    "Advanced waste management",
                    "Water conservation systems",
                    "Responsible sourcing practices",
                    "Reduced emissions technologies",
                  ].map((item, i) => (
                    <li key={i}>
                      <ShieldCheck size={18} className="dve-advantage-icon" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── EXPLORA IV VS EXPLORA I, II & III ────────────────────────── */}
      <section
        className="Asc-section Asc-bg-white"
        id="explora-iv-vs-i-ii"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="Asc-container">
          <div className="Asc-section-header">
            <h2 className="Asc-h2">Explora IV Compared with the Fleet</h2>
            <div className="Asc-accent-line"></div>

            <p className="Asc-body-text">
              Across the fleet, the guest experience remains consistently
              luxurious. For most travelers, itinerary and destination will play
              a greater role than the specific ship they choose.
            </p>
          </div>

          <div className="Asc-table-wrapper">
            <table className="Asc-fleet-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Explora I</th>
                  <th>Explora II</th>
                  <th>Explora III</th>
                  <th>Explora IV</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Oceanfront Suites</td>
                  <td>✔</td>
                  <td>✔</td>
                  <td>✔</td>
                  <td>✔</td>
                </tr>
                <tr>
                  <td>Contemporary Design</td>
                  <td>✔</td>
                  <td>✔</td>
                  <td>✔</td>
                  <td>✔</td>
                </tr>
                <tr>
                  <td>Flexible Dining</td>
                  <td>✔</td>
                  <td>✔</td>
                  <td>✔</td>
                  <td>✔</td>
                </tr>
                <tr>
                  <td>Luxury Spa</td>
                  <td>✔</td>
                  <td>✔</td>
                  <td>✔</td>
                  <td>✔</td>
                </tr>
                <tr>
                  <td>Personalized Service</td>
                  <td>✔</td>
                  <td>✔</td>
                  <td>✔</td>
                  <td>✔</td>
                </tr>
                <tr>
                  <td>Premium Restaurants</td>
                  <td>✔</td>
                  <td>✔</td>
                  <td>✔</td>
                  <td>✔</td>
                </tr>
                <tr>
                  <td>Latest Sustainability Technology</td>
                  <td>Excellent</td>
                  <td>Enhanced</td>
                  <td>Advanced</td>
                  <td>Next Generation</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p
            className="Asc-body-text"
            style={{
              maxWidth: "760px",
              margin: "30px auto 0",
              textAlign: "center",
            }}
          >
            For most guests, destination and sailing dates remain the most
            important deciding factors.
          </p>
        </div>
      </section>

      {/* ── LUXURY SUITES ───────────────────────────────────────────── */}
      <section className="dmg-info-section dmg-bg-white" id="dmg-luxury-suites">
        <div className="dmg-info-container">
          <div className="dmg-info-grid">
            {/* Left Side Image */}
            <div className="dmg-info-media">
              <div className="dmg-media-wrapper">
                <img
                  src={LuxuryOceanfront}
                  alt="Luxury Suites aboard Explora IV"
                  className="dmg-media-img"
                  style={{ height: "650px" }}
                />
                <div className="dmg-media-overlay"></div>

                <div className="dmg-media-badge">
                  <span>Luxury Suites</span>
                </div>
              </div>
            </div>

            {/* Right Side Content */}
            <div className="dmg-info-content">
              <h2 className="dmg-info-title">
                Luxury Suites Throughout the Ship
              </h2>
              <div className="dmg-info-accent"></div>

              <p className="dmg-info-lead">
                Every guest aboard Explora IV enjoys an oceanfront suite with a
                private terrace. Standard features include:
              </p>

              <div className="dmg-info-features dmg-info-features-scrollable">
                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Private Ocean Terrace
                    </h3>
                    <p className="dmg-info-feature-desc">
                      A spacious outdoor area perfect for breakfast, reading, or
                      enjoying sunsets.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Spacious Living Areas
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Separate sitting areas create a residential feel rarely
                      found on cruise ships.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">Luxury Bathrooms</h3>
                    <p className="dmg-info-feature-desc">
                      Elegant bathrooms include premium amenities, spacious
                      showers, and upscale finishes.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">Premium Comfort</h3>
                    <p className="dmg-info-feature-desc">
                      Expect luxurious bedding, generous storage, advanced
                      in-suite technology, and thoughtful design throughout.
                    </p>
                  </div>
                </div>
              </div>

              <p
                className="dmg-info-lead"
                style={{ marginTop: "24px", fontSize: "1rem" }}
              >
                Guests seeking additional space can choose from several
                higher-category suites offering expanded living areas and
                exclusive amenities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── DESTINATIONS & ITINERARIES ─────────────────── */}
      <section className="luc-why-section" id="luc-destinations">
        <div className="luc-why-container">
          {/* LEFT — stacked images */}
          <div className="luc-why-images">
            <div
              className="luc-why-img-main-wrap"
              style={{
                color: "#fff",
              }}
            >
              <img
                src={ExploraDestination}
                alt="Explora IV sailing in the Mediterranean"
                className="luc-why-img-main"
              />
              <div className="luc-why-img-overlay"></div>
            </div>

            <div
              className="luc-why-img-accent-wrap"
              style={{
                color: "#fff",
              }}
            >
              <img
                src={ExploraDestination2}
                alt="Explora IV visiting luxury cruise destinations"
                className="luc-why-img-accent"
              />

              <div className="luc-why-img-badge">
                <span className="luc-why-badge-num">7</span>
                <span className="luc-why-badge-text">Regions Visited</span>
              </div>
            </div>
          </div>

          {/* RIGHT — content */}
          <div className="luc-why-content">
            <h2 className="luc-why-title">Destinations &amp; Itineraries</h2>

            <div className="aac-accent-line aac-accent-white"></div>

            <p className="luc-why-intro">
              Explora IV will continue visiting many of the world's most
              desirable luxury cruise destinations, with itineraries designed
              for longer port stays and overnight visits.
            </p>

            <div className="luc-why-features">
              {[
                {
                  num: "01",
                  title: "Mediterranean",
                  desc: "Discover iconic coastal cities, charming villages, and world-famous cultural landmarks.",
                },
                {
                  num: "02",
                  title: "Greek Islands",
                  desc: "Sail among picturesque islands with crystal-clear waters and timeless seaside villages.",
                },
                {
                  num: "03",
                  title: "Northern Europe",
                  desc: "Experience dramatic fjords, historic capitals, and spectacular northern landscapes.",
                },
                {
                  num: "04",
                  title: "Caribbean",
                  desc: "Relax on beautiful tropical islands with pristine beaches and turquoise waters.",
                },
                {
                  num: "05",
                  title: "North America",
                  desc: "Visit vibrant coastal destinations rich in history, culture, and natural beauty.",
                },
                {
                  num: "06",
                  title: "Middle East",
                  desc: "Explore fascinating cultures, remarkable architecture, and vibrant modern cities.",
                },
                {
                  num: "07",
                  title: "Transatlantic Voyages",
                  desc: "Enjoy leisurely days at sea while experiencing Explora IV's luxurious onboard lifestyle.",
                },
              ]
                .slice(0, readMoreWhy ? 7 : 4)
                .map((feat, i) => (
                  <div key={i} className="luc-why-feature">
                    <div className="luc-why-feature-num">{feat.num}</div>

                    <div className="luc-why-feature-body">
                      <h3 className="luc-why-feature-title">{feat.title}</h3>
                      <p className="luc-why-feature-desc">{feat.desc}</p>
                    </div>
                  </div>
                ))}
            </div>

            <div
              className="Scenic_readmore_wrapper"
              style={{ marginTop: "25px", textAlign: "left" }}
            >
              <button
                className="Scenic_readmore_btn"
                onClick={() => setReadMoreWhy(!readMoreWhy)}
              >
                {readMoreWhy ? "Read Less" : "Read More"}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT IS INCLUDED? ────────────────────────────────────────── */}
      <section className="adg-section" id="adg-whats-included">
        <div className="adg-container">
          <div className="adg-section-header" style={{ marginBottom: "60px" }}>
            <h2 className="adg-h2">What Is Included?</h2>
            <div className="adg-accent-line"></div>

            <p
              className="Asc-body-text"
              style={{ textAlign: "center", marginTop: "15px" }}
            >
              One of the reasons many travelers appreciate Explora IV is the
              generous range of inclusions, allowing guests to enjoy a seamless
              luxury vacation with fewer additional costs onboard.
            </p>
          </div>

          <div className="adg-split-layout">
            <div className="adg-content-card-side">
              <img
                src={LuxuryOceanfrontPool}
                alt="Included amenities aboard Explora IV"
                className="adg-side-image"
                style={{ height: "65vh" }}
              />

              <div className="adg-info-card">
                <div className="adg-card-meta">
                  <Sparkles size={28} />
                  <span className="adg-meta-label">
                    Exceptional Value Included
                  </span>
                </div>

                <p className="adg-card-lead">
                  Depending on your fare, your cruise may include luxury
                  accommodations, exceptional dining, entertainment, wellness
                  facilities, Wi-Fi, and a variety of thoughtful amenities.
                </p>
              </div>
            </div>

            <div className="adg-list-side">
              {[
                "Oceanfront suite accommodations",
                "Multiple dining venues",
                "Room service",
                "Wi-Fi",
                "Entertainment",
                "Fitness classes",
                "Wellness facilities",
                "Selected beverages",
                "Gratuities in many fare categories",
              ].map((item, i) => (
                <div key={i} className="adg-list-item-card">
                  <div className="adg-list-item-icon">
                    <Check size={18} strokeWidth={2.5} />
                  </div>

                  <h4 className="adg-list-item-label">{item}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHO SHOULD SAIL EXPLORA IV? */}
      <section className="afc-section afc-bg-white" id="afc-who-should-sail">
        <div className="afc-container">
          <div className="afc-section-header">
            <h2 className="afc-h2">Who Should Sail Explora IV?</h2>
            <div className="afc-accent-line"></div>
          </div>

          {/* Feature Split Layout */}
          <div className="afc-split-layout">
            {/* Left Column */}
            <div className="afc-content-side">
              <div className="afc-insight-card">
                <p className="afc-lead-text">
                  <strong>
                    Explora IV is an excellent choice for travelers who
                    appreciate:
                  </strong>
                </p>

                <div className="afc-why-box">
                  <span className="afc-why-title">Perfect For</span>

                  <p className="afc-why-text">
                    Boutique luxury hotels, spacious accommodations, fine
                    dining, personalized service, wellness experiences,
                    contemporary design, quiet elegance, and destination-focused
                    travel.
                  </p>
                </div>
              </div>

              <div className="afc-recommendations-wrapper">
                <h3 className="afc-sub-title">
                  Travelers Will Love Explora IV For:
                </h3>

                <div className="afc-rec-grid">
                  {[
                    "Boutique luxury hotels",
                    "Spacious accommodations",
                    "Fine dining",
                    "Personalized service",
                    "Wellness experiences",
                    "Contemporary design",
                    "Quiet elegance",
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
                  src={LuxuryOceanfront1}
                  alt="Couple enjoying the luxury experience aboard Explora IV"
                  className="afc-showcase-image"
                />
              </div>

              <div className="afc-strategy-box" style={{ height: "250px" }}>
                <p className="afc-strategy-lead">
                  Explora IV is particularly well suited for:
                </p>

                <div className="afc-strategy-tags">
                  {[
                    "Couples",
                    "Retirees",
                    "Solo travelers",
                    "Food & wine enthusiasts",
                    "Luxury travelers",
                    "Celebration vacations",
                  ].map((tag, idx) => (
                    <span key={idx} className="afc-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHO MAY PREFER ANOTHER CRUISE LINE? */}
      <section className="Asc-section Asc-bg-soft" id="Asc-who">
        <div className="Asc-container">
          <div className="Asc-section-header">
            <h2 className="Asc-h2">Who May Prefer Another Cruise Line?</h2>

            <div className="Asc-accent-line"></div>
          </div>

          <div
            className="Asc-who-grid"
            style={{
              gridTemplateColumns: "1fr",
              maxWidth: "800px",
              margin: "0 auto",
            }}
          >
            <div className="Asc-who-card Asc-who-no">
              <h3 className="Asc-who-title">
                Explora IV May Not Be the Best Fit for Travelers Seeking:
              </h3>

              <ul className="Asc-who-list">
                {[
                  "Water parks",
                  "Theme park attractions",
                  "Large casinos",
                  "Broadway-style entertainment",
                  "Character experiences",
                  "High-energy nightlife",
                  "Constant organized activities",
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
            Travelers looking for peaceful luxury rather than nonstop
            entertainment will likely appreciate Explora IV's refined approach,
            while those seeking action-packed days and high-energy attractions
            may find another cruise line better suited to their vacation style.
          </p>
        </div>
      </section>

      {/* ── TIPS BEFORE BOOKING ───────────────────────── */}
      <section className="ugt-advantage-section" id="tips-before-booking">
        <div className="ugt-advantage-container">
          <div className="ugt-advantage-header">
            <span className="ugt-advantage-eyebrow">Plan with Confidence</span>

            <h2 className="ugt-advantage-title">Tips Before Booking</h2>

            <div className="Asc-accent-line"></div>

            <p className="ugt-advantage-intro">
              A little planning can make a significant difference to your
              Explora IV experience. These simple tips can help you choose the
              right sailing, accommodations, and onboard experiences.
            </p>
          </div>

          <div className="ugt-advantage-grid">
            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <CalendarClock size={28} strokeWidth={1.5} />
              </div>

              <h4 className="ugt-card-title">Book Early</h4>

              <p className="ugt-card-desc">
                New luxury ships often experience strong demand, especially
                during their inaugural seasons.
              </p>
            </div>

            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <Map size={28} strokeWidth={1.5} />
              </div>

              <h4 className="ugt-card-title">Choose the Itinerary First</h4>

              <p className="ugt-card-desc">
                The differences between Explora ships are smaller than the
                differences between destinations.
              </p>
            </div>

            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <BedDouble size={28} strokeWidth={1.5} />
              </div>

              <h4 className="ugt-card-title">Select the Right Suite</h4>

              <p className="ugt-card-desc">
                Every suite is luxurious, but choosing the right category can
                enhance your overall experience.
              </p>
            </div>

            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <Compass size={28} strokeWidth={1.5} />
              </div>

              <h4 className="ugt-card-title">Plan Shore Experiences</h4>

              <p className="ugt-card-desc">
                Research your destinations before departure to maximize your
                time ashore.
              </p>
            </div>

            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <Award size={28} strokeWidth={1.5} />
              </div>

              <h4 className="ugt-card-title">
                Work With a Luxury Travel Advisor
              </h4>

              <p className="ugt-card-desc">
                Professional guidance helps ensure you choose the itinerary and
                accommodations that best match your travel style.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── DISCOVER EXPLORA JOURNEYS DESTINATIONS ───────────────────────── */}
      <section
        className="Asc-video-section"
        id="Asc-video-destinations"
        style={{ backgroundColor: "var(--bg-white)" }}
      >
        <div className="Asc-container">
          <div className="Asc-section-header">
            <h2 className="Asc-h2">
              Discover Our Destinations | Explora Journeys
            </h2>

            <div className="Asc-accent-line"></div>

            <p className="Asc-video-intro">
              Explore the remarkable destinations visited by Explora Journeys,
              from iconic coastlines and vibrant cities to hidden harbors and
              lesser-known gems. 
            </p>
          </div>

          <div className="Asc-video-wrapper">
            <div className="Asc-video-frame">
              <iframe
                src="https://www.youtube.com/embed/uRRZm11tK5U"
                title="Discover our Destinations | Explora Journeys"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* WHY BOOK THROUGH A LUXURY TRAVEL ADVISOR? */}
      <section
        className="Avr-planning-section"
        id="Asc-luxury-travel-advisor"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="Asc-container">
          {/* HEADING */}
          <div className="Avr-planning-heading">
            <span className="Avr-planning-eyebrow">
              Personalized Cruise Planning
            </span>

            <h2 className="Avr-planning-title">
              Why Book Through a Luxury Travel Advisor?
            </h2>

            <div className="Avr-planning-divider"></div>
          </div>

          {/* TWO-PANEL GRID */}
          <div className="Avr-planning-grid">
            {/* LEFT PANEL */}
            <div className="Avr-planning-left">
              <div className="Avr-planning-left-deco">&ldquo;</div>

              <h3 className="Avr-planning-left-title">
                Get the Most from Your Luxury Cruise
              </h3>

              <p className="Avr-planning-left-body">
                Luxury cruises involve far more than simply selecting a sailing
                date. An experienced travel advisor helps you make informed
                decisions, simplify the planning process, and create a vacation
                tailored to your travel style.
              </p>

              <div className="Avr-planning-alert">
                <ShieldCheck size={18} className="Avr-planning-alert-icon" />

                <p className="Avr-planning-alert-text">
                  Expert guidance helps ensure every part of your vacation is
                  thoughtfully planned from beginning to end.
                </p>
              </div>
            </div>

            {/* RIGHT PANEL */}
            <div className="Avr-planning-right">
              <p className="Avr-planning-right-intro">
                A knowledgeable travel advisor can help you:
              </p>

              <div className="Avr-planning-benefits-grid">
                {[
                  {
                    icon: <Compass size={18} />,
                    label: "Compare itineraries",
                  },
                  {
                    icon: <Home size={18} />,
                    label: "Choose the ideal suite",
                  },
                  {
                    icon: <BadgePercent size={18} />,
                    label: "Understand available promotions",
                  },
                  {
                    icon: <Plane size={18} />,
                    label: "Arrange flights and hotels",
                  },
                  {
                    icon: <Car size={18} />,
                    label: "Coordinate transfers",
                  },
                  {
                    icon: <Utensils size={18} />,
                    label: "Recommend dining experiences",
                  },
                  {
                    icon: <MapPinned size={18} />,
                    label: "Plan shore excursions",
                  },
                  {
                    icon: <Sparkles size={18} />,
                    label: "Maximize the value of your investment",
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
                Expert guidance helps ensure every part of your vacation is
                tailored to your travel style, allowing you to enjoy a seamless
                luxury cruise experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── ANGELA HUGHES AUTHORITY BOX ────────────────────────────── */}
      <section className="Adg-expert-section" id="Asc-expert-insight">
        <div className="Asc-container">
          <div className="Adg-expert-heading">
            <span className="Adg-expert-eyebrow">Luxury Travel Expertise</span>
            <h2 className="Adg-expert-title">Angela Hughes Luxury Authority</h2>
            <div className="Adg-expert-divider"></div>
          </div>

          <div className="Adg-expert-grid">
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
                  Angela Hughes Authority Box
                </h4>

                <div className="Adg-expert-credentials-grid">
                  {[
                    {
                      icon: <Award size={16} />,
                      label: "CEO of Trips & Ships Luxury Travel",
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
                      icon: <Award size={16} />,
                      label: "Founder of Luxury Travel University",
                    },
                    {
                      icon: <Users size={16} />,
                      label: "Global luxury travel speaker and trainer",
                    },
                    {
                      icon: <Users size={16} />,
                      label: "Weekly industry columnist",
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
                        "Named one of the Most Influential Women in Travel in 2026 by TravelPulse",
                    },
                    {
                      icon: <Award size={16} />,
                      label: "Featured in major travel publications globally",
                    },
                    {
                      icon: <Ship size={16} />,
                      label:
                        "Expert in luxury cruises, safaris, expeditions, river cruising, and premium travel",
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
              Everything travelers need to know before deciding whether Explora
              IV is the right luxury cruise ship for them.
            </p>
          </div>
          <FAQ />
        </div>
      </section>
      {/* ── CTA ────────────────────────────────────────────────────── */}
      <section className="Asc-help-section">
        <div className="Asc-help-bg-wrap">
          <img
            src={ExploraShip}
            alt="Explora IV luxury cruise ship"
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
                <h2 className="Asc-help-h2">Final Thoughts</h2>
                <div className="Asc-help-accent"></div>
              </div>

              <div className="Asc-help-grid">
                <div className="Asc-help-info">
                  <p className="Asc-help-intro">
                    Explora IV successfully builds upon everything that made
                    Explora I such a success. Rather than making dramatic
                    changes, it refines an already exceptional concept—offering
                    spacious all-suite accommodations, outstanding dining,
                    personalized service, wellness-focused experiences, and
                    thoughtfully designed public spaces.
                    {!readMore && (
                      <button
                        onClick={() => setReadMore(true)}
                        style={{
                          background: "none",
                          border: "none",
                          color: "var(--bg-white)",
                          cursor: "pointer",
                          marginLeft: "8px",
                          fontWeight: "600",
                          padding: 0,
                        }}
                      >
                        Read More
                      </button>
                    )}
                  </p>

                  {readMore && (
                    <>
                      <br />
                      <p className="Asc-help-intro">
                        Whether you're new to luxury cruising or an experienced
                        traveler looking for a contemporary alternative to
                        traditional luxury cruise lines, Explora IV delivers an
                        experience that feels calm, elegant, and refreshingly
                        unhurried.
                      </p>
                      <br />
                      <p className="Asc-help-intro">
                        For travelers who believe luxury is about space,
                        exceptional hospitality, and meaningful travel rather
                        than constant activity, Explora IV is one of the finest
                        ships sailing today.
                        <button
                          onClick={() => setReadMore(false)}
                          style={{
                            background: "none",
                            border: "none",
                            color: "var(--bg-white)",
                            cursor: "pointer",
                            marginLeft: "8px",
                            fontWeight: "600",
                            padding: 0,
                          }}
                        >
                          Read Less
                        </button>
                      </p>
                    </>
                  )}

                  <div className="Asc-help-btn-container">
                    <Link
                      to="/contact"
                      className="Asc-help-cta-btn"
                      style={{ textDecoration: "none" }}
                    >
                      Start Planning Your Explora IV Journey
                      <ArrowRight size={18} />
                    </Link>
                  </div>
                </div>

                <div className="Asc-help-list-box">
                  <h3 className="Asc-help-list-title">
                    Our luxury planning services include:
                  </h3>

                  <ul className="Asc-help-bullets">
                    {[
                      "Determine whether Explora IV matches your travel style",
                      "Recommend the ideal itinerary",
                      "Select the right suite",
                      "Compare promotional offers",
                      "Arrange flights and transfers",
                      "Coordinate pre- and post-cruise hotels",
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
                      label: "Explora Journeys Overview",
                      path: "/luxury-explora-journeys-guide",
                    },
                    {
                      label: "Explora Journeys Review",
                      path: "/explora-journeys-review",
                    },
                    {
                      label: "Explora I Review",
                      path: "/explora-i-review",
                    },
                    {
                      label: "Explora II Review",
                      path: "/explora-ii-review",
                    },
                    {
                      label: "Explora III Guide",
                      path: "/explora-iii-guide",
                    },
                    {
                      label: "What Makes Explora Journeys Different?",
                      path: "/what-makes-explora-journeys-different",
                    },
                    {
                      label: "Is Explora Journeys Luxury?",
                      path: "/is-explora-journeys-luxury",
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
                      label: "Planning Your First Explora Journey",
                      path: "/planning-your-first-explora-journey",
                    },
                    {
                      label: "How to Get the Best Value on Explora Journeys",
                      path: "/how-to-get-the-best-value-on-explora-journeys",
                    },
                    {
                      label: "Should You Book Through a Travel Advisor?",
                      path: "/should-you-book-through-a-travel-advisor",
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

export default ExploraIVGuide;
