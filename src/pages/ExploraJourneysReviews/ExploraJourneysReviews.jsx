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
  CalendarClock,
  Waves,
  Utensils,
  ShieldCheck,
  Info,
  Anchor,
  Smile,
  Heart,
  X,
  Coffee,
  Home,
  Sun,
} from "lucide-react";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela.jpeg";

import HeroImage1 from "../../assets/ExploraJourneysWorth/Explora-Journeys.webp";
import HeroImage2 from "../../assets/ExploraJourneysWorth/Explora-Journeys2.webp";
import HeroImage3 from "../../assets/ExploraJourneysWorth/Explora-Journeys3.webp";
import Publicspace from "../../assets/IsExploraGoodForFamilies/explora-I-luxury-pool-deck-daybeds.jpg";
import SuiteImage from "../../assets/ExploraJourneysWorth/Explora-Suite.webp";
import SuiteImage1 from "../../assets/IsExploraGoodForFamilies/explora-journeys-oceanfront-infinity-pool-deck.jpg";
import DiningImage from "../../assets/ExploraJourneysWorth/Explora-Dining.webp";
import DiningImage1 from "../../assets/IsExploraGoodForFamilies/Dining-Venues.webp";
import PoolImage from "../../assets/ExploraJourneysWorth/ExploraPool.webp";
import PoolImage1 from "../../assets/IsExploraGoodForFamilies/Explora-Journeys.webp";
import CtaImage from "../../assets/ExploraCruiseCost/explora-journeys-sunrise-pool-deck-luxury-yacht.webp";

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
      "@id": "https://tripsandships.com/explora-journeys-review/#webpage",
      name: "Explora Journeys Review | Is Explora Worth It for Luxury Travelers?",
      url: "https://tripsandships.com/explora-journeys-review",
      description:
        "Read our comprehensive Explora Journeys review covering suites, dining, service, destinations, pricing, onboard atmosphere, inclusions, and who should book this luxury cruise line.",
    },
    {
      "@type": "Article",
      "@id": "https://tripsandships.com/explora-journeys-review/#article",
      headline: "Explora Journeys Review: Is It Worth It for Luxury Travelers?",
      description:
        "An in-depth review of Explora Journeys covering suites, dining, service, destinations, inclusions, pricing, and the general onboard experience.",
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
      "@type": "Review",
      "@id": "https://tripsandships.com/explora-journeys-review/#review",
      itemReviewed: {
        "@type": "Cruise",
        name: "Explora Journeys",
        provider: {
          "@type": "Organization",
          name: "MSC Group",
        },
      },
      author: {
        "@type": "Person",
        name: "Angela Hughes",
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "4.8",
        bestRating: "5",
      },
      reviewBody:
        "Explora Journeys offers an exceptional boutique hotel experience at sea. Highly recommended for travelers who appreciate contemporary European design, spacious all-suite cabins, outstanding dining options, and a relaxed luxury atmosphere without crowds.",
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://tripsandships.com/explora-journeys-review/#breadcrumb",
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
          name: "Explora Journeys Guides",
          item: "https://tripsandships.com/luxury-explora-journeys-guide",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Explora Journeys Review",
          item: "https://tripsandships.com/explora-journeys-review",
        },
      ],
    },
    {
      "@type": "ItemList",
      "@id": "https://tripsandships.com/explora-journeys-review/#itemlist",
      name: "Explora Journeys Review Highlights",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Spacious All-Suite Accommodations",
          description:
            "Every suite features ocean views, a private terrace, elegant bathrooms, walk-in closets, and spacious seating areas.",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Exceptional Flexible Dining",
          description:
            "Multiple restaurants featuring international, Mediterranean, and Asian-focused cuisine with no rigid dining schedules.",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Personalized European Service",
          description:
            "High crew-to-guest ratio ensures attentive service that is professional yet comfortably relaxed.",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Refined Wellness & Relaxation",
          description:
            "Expansive outdoor decks, multiple infinity pools, modern spa, and integrated fitness facilities.",
        },
      ],
    },
    {
      "@type": "TouristTrip",
      "@id": "https://tripsandships.com/explora-journeys-review/#touristtrip",
      name: "Explora Journeys Luxury Cruise Vacation",
      description:
        "An ocean journey focused on relaxation, culinary discovery, and immersion into world-class destinations.",
      provider: {
        "@type": "Organization",
        name: "Explora Journeys",
      },
    },
    {
      "@type": "Service",
      "@id": "https://tripsandships.com/explora-journeys-review/#service",
      serviceType: "Luxury Cruise Planning & Concierge Service",
      provider: {
        "@type": "TravelAgency",
        name: "Trips & Ships Luxury Travel",
      },
      areaServed: "Worldwide",
      description:
        "Tailored cruise planning and consultation to select the best itineraries, suite upgrades, promotions, and coordinate pre- and post-cruise logistics.",
    },
    {
      "@type": "FAQPage",
      "@id": "https://tripsandships.com/explora-journeys-review/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Is Explora Journeys a luxury cruise line?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Explora Journeys is positioned within the luxury cruise market, offering all-suite accommodations, premium dining, attentive service, and destination-focused itineraries.",
          },
        },
        {
          "@type": "Question",
          name: "Are all cabins suites?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Every accommodation onboard is a spacious oceanfront suite with a private terrace.",
          },
        },
        {
          "@type": "Question",
          name: "Is the food good on Explora Journeys?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Dining is widely considered one of the highlights, with multiple restaurants offering high-quality international cuisine in a relaxed setting.",
          },
        },
        {
          "@type": "Question",
          name: "Is Explora good for families?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Families are welcome, but the onboard atmosphere is quieter and more sophisticated than traditional family-focused cruise lines.",
          },
        },
        {
          "@type": "Question",
          name: "Is Explora suitable for first-time luxury cruisers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. Its relaxed atmosphere and contemporary design make it an appealing introduction to luxury cruising.",
          },
        },
        {
          "@type": "Question",
          name: "Does Explora include Wi-Fi?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Wi-Fi is included for guests, making it easy to stay connected throughout the voyage.",
          },
        },
        {
          "@type": "Question",
          name: "Is there a dress code?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The atmosphere is elegant yet relaxed, with smart casual attire appropriate for most evenings.",
          },
        },
        {
          "@type": "Question",
          name: "How early should I book?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Booking six to twelve months ahead is recommended, particularly for popular itineraries and preferred suite categories.",
          },
        },
        {
          "@type": "Question",
          name: "Is Explora Journeys worth the money?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For travelers seeking spacious accommodations, exceptional service, fine dining, and a relaxed luxury experience, many consider Explora Journeys an excellent value within the luxury cruise market.",
          },
        },
        {
          "@type": "Question",
          name: "Should I use a travel advisor?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A luxury travel advisor can help identify the best itinerary, suite, promotions, and personalized experiences while simplifying the booking process.",
          },
        },
        {
          "@type": "Question",
          name: "What is the difference between Explora I and Explora II?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Explora I and Explora II are sister ships with identical dimensions and designs. The main differences lie in their travel itineraries, their onboard contemporary art collections, and subtle modifications to the interior styling and venue decor.",
          },
        },
        {
          "@type": "Question",
          name: "What is included in the beverage package on Explora Journeys?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Explora Journeys offers an all-inclusive beverage experience. This includes unlimited fine wines, beers, premium spirits, specialty coffees, tea, and soft drinks. Only select ultra-premium spirits and rare vintage wines incur an extra charge.",
          },
        },
        {
          "@type": "Question",
          name: "Is there a casino onboard Explora Journeys?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No, Explora Journeys has chosen not to include a casino onboard their fleet. Instead, the focus is on wellness, quiet luxury, enrichment lectures, culinary exploration, and deep destination immersion.",
          },
        },
        {
          "@type": "Question",
          name: "Are laundry services available on Explora Journeys?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Guests in all suite categories have access to complimentary laundry service, and self-service launderettes (equipped with washers, dryers, irons, and detergent) are also available on guest corridors.",
          },
        },
        {
          "@type": "Question",
          name: "Does Explora Journeys offer guided shore excursions?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, Explora Journeys offers curated shore programs called 'Destination Experiences.' These are designed for small groups and focus on authentic local culture, history, nature, and gastronomy. They can be pre-booked online or via the concierge onboard.",
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
      q: "Is Explora Journeys a luxury cruise line?",
      a: "Yes. Explora Journeys is positioned within the luxury cruise market, offering all-suite accommodations, premium dining, attentive service, and destination-focused itineraries.",
    },
    {
      q: "Are all cabins suites?",
      a: "Yes. Every accommodation onboard is a spacious oceanfront suite with a private terrace.",
    },
    {
      q: "Is the food good on Explora Journeys?",
      a: "Dining is widely considered one of the highlights, with multiple restaurants offering high-quality international cuisine in a relaxed setting.",
    },
    {
      q: "Is Explora good for families?",
      a: "Families are welcome, but the onboard atmosphere is quieter and more sophisticated than traditional family-focused cruise lines.",
    },
    {
      q: "Is Explora suitable for first-time luxury cruisers?",
      a: "Absolutely. Its relaxed atmosphere and contemporary design make it an appealing introduction to luxury cruising.",
    },
    {
      q: "Does Explora include Wi-Fi?",
      a: "Wi-Fi is included for guests, making it easy to stay connected throughout the voyage.",
    },
    {
      q: "Is there a dress code?",
      a: "The atmosphere is elegant yet relaxed, with smart casual attire appropriate for most evenings.",
    },
    {
      q: "How early should I book?",
      a: "Booking six to twelve months ahead is recommended, particularly for popular itineraries and preferred suite categories.",
    },
    {
      q: "Is Explora Journeys worth the money?",
      a: "For travelers seeking spacious accommodations, exceptional service, fine dining, and a relaxed luxury experience, many consider Explora Journeys an excellent value within the luxury cruise market.",
    },
    {
      q: "Should I use a travel advisor?",
      a: "A luxury travel advisor can help identify the best itinerary, suite, promotions, and personalized experiences while simplifying the booking process.",
    },
    {
      q: "What is the difference between Explora I and Explora II?",
      a: "Explora I and Explora II are sister ships with identical dimensions and designs. The main differences lie in their travel itineraries, their onboard contemporary art collections, and subtle modifications to the interior styling and venue decor.",
    },
    {
      q: "What is included in the beverage package on Explora Journeys?",
      a: "Explora Journeys offers an all-inclusive beverage experience. This includes unlimited fine wines, beers, premium spirits, specialty coffees, tea, and soft drinks. Only select ultra-premium spirits and rare vintage wines incur an extra charge.",
    },
    {
      q: "Is there a casino onboard Explora Journeys?",
      a: "No, Explora Journeys has chosen not to include a casino onboard their fleet. Instead, the focus is on wellness, quiet luxury, enrichment lectures, culinary exploration, and deep destination immersion.",
    },
    {
      q: "Are laundry services available on Explora Journeys?",
      a: "Yes. Guests in all suite categories have access to complimentary laundry service, and self-service launderettes (equipped with washers, dryers, irons, and detergent) are also available on guest corridors.",
    },
    {
      q: "Does Explora Journeys offer guided shore excursions?",
      a: "Yes, Explora Journeys offers curated shore programs called 'Destination Experiences.' These are designed for small groups and focus on authentic local culture, history, nature, and gastronomy. They can be pre-booked online or via the concierge onboard.",
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
const ExploraJourneysReviews = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [readMore, setReadMore] = useState(false);

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
          Explora Journeys Review | Is Explora Worth It for Luxury Travelers?
        </title>
        <meta name="title" content="Explora Journeys Review" />
        <meta
          name="description"
          content="Read our comprehensive Explora Journeys review covering suites, dining, service, destinations, pricing, onboard atmosphere, inclusions, and who should book this luxury cruise line."
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
          <h1>Explora Journeys Review</h1>

          <p>Luxury cruising has entered a new era.</p>

          <p>
            For decades, travelers seeking an upscale cruise vacation typically
            chose established names known for elegant ships and exceptional
            service. Today, Explora Journeys has introduced a fresh approach—one
            centered on spacious accommodations, contemporary design,
            exceptional dining, flexible experiences, and a slower, more
            immersive style of travel.
          </p>

          {readMore && (
            <>
              <p>
                But with premium pricing and growing interest from luxury
                travelers, an important question remains:
              </p>

              <p>
                <strong>Is Explora Journeys truly worth it?</strong>
              </p>

              <p>
                The answer depends on the type of traveler you are. If you value
                spacious suites, outstanding service, destination-focused
                itineraries, and a sophisticated atmosphere without crowds,
                Explora Journeys offers one of the most compelling luxury cruise
                experiences available today.
              </p>

              <p>
                This guide explores what you can realistically expect onboard
                and whether Explora Journeys is the right fit for your next
                voyage.
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

      {/* ── WHAT MAKES EXPLORA JOURNEYS DIFFERENT ─────────────────── */}
      <section className="adg-c-section adg-c-bg-white" id="adg-c-why-wellness">
        <div className="adg-c-container">
          <div className="adg-c-section-header">
            <h2 className="adg-c-h2">What Makes Explora Journeys Different?</h2>
            <div className="adg-c-accent-line"></div>
            <p className="Asc-section-intro">
              Explora Journeys wasn't designed to compete with large mainstream
              cruise ships. Instead, it focuses on creating the feeling of
              staying at an elegant boutique luxury hotel that happens to travel
              from destination to destination.
            </p>
          </div>

          <div className="adg-c-overview-layout">
            <div className="adg-c-overview-icons">
              {[
                "Contemporary European design",
                "Spacious all-suite accommodations",
                "High crew-to-guest ratio",
                "Multiple specialty restaurants",
                "Relaxed luxury atmosphere",
                "Oceanfront public spaces",
                "Flexible dining",
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
                    Rather than constant announcements and busy activity
                    schedules, the atmosphere onboard Explora Journeys
                    emphasizes quiet relaxation, ocean vistas, and highly
                    personalized service.
                  </p>
                </div>
              </div>

              <div
                className="adg-c-overview-image-wrap"
                style={{ height: "317px" }}
              >
                <img
                  src={PoolImage}
                  alt="Explora Journeys oceanfront outdoor pool deck"
                  className="adg-c-overview-img"
                />
                <div className="adg-c-overview-img-overlay">
                  <span className="adg-c-overview-img-label">
                    Boutique Hotel Atmosphere at Sea
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FIRST IMPRESSIONS & PUBLIC SPACES ────────────────────────── */}
      <section
        className="Ejsc-ent-section"
        id="Ejsc-recovery-retreats"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="Ejsc-container">
          <div className="Ejsc-section-header">
            <h2 className="Ejsc-section-title">
              First Impressions &amp; Public Spaces
            </h2>
            <div className="Asc-accent-line"></div>
            <p className="Ejsc-section-subtitle">
              From the moment you board, Explora Journeys feels remarkably
              different from traditional cruise ships. Quiet sophistication
              replacing crowded spaces.
            </p>
          </div>

          <div className="Ejsc-ent-grid">
            {/* First Impressions Card */}
            <div className="Ejsc-ent-card Ejsc-explora-card">
              <div className="Ejsc-card-header">
                <div className="Ejsc-card-icon-wrap">
                  <Anchor size={24} className="Ejsc-card-icon" />
                </div>
                <h3 className="Ejsc-card-title">
                  A Different First Impression
                </h3>
              </div>

              <p className="Ejsc-card-intro">
                Instead of crowded atriums and busy public spaces, you will
                discover an environment designed around peace and quiet
                appreciation.
              </p>

              <ul className="Ejsc-feature-list">
                {[
                  "Elegant and welcoming lounges",
                  "Contemporary European architecture",
                  "Comfortable, residential seating throughout",
                  "Expansive outdoor teak decks",
                  "Sweeping ocean views from public areas",
                  "Quiet alcoves for reading or relaxing",
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
                  The overall design encourages guests to slow down rather than
                  rush from one activity to another.
                </p>
              </div>
            </div>

            {/* Public Spaces Card */}
            <div className="Ejsc-ent-card Ejsc-seabourn-card">
              <div className="Ejsc-card-header">
                <div className="Ejsc-card-icon-wrap">
                  <Waves size={24} className="Ejsc-card-icon" />
                </div>
                <h3 className="Ejsc-card-title">Generous Outdoor Spaces</h3>
              </div>

              <p className="Ejsc-card-intro">
                The ship offers numerous public spaces to enjoy throughout the
                day without ever feeling crowded, even during sea days.
              </p>

              <ul className="Ejsc-feature-list">
                {[
                  "Stunning infinity pools overlooking the ocean",
                  "Peaceful outdoor lounges with premium daybeds",
                  "Integrated state-of-the-art wellness areas",
                  "Elegant cocktail bars and quiet lounges",
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
                  With four swimming pools and expansive sundecks, finding your
                  own private corner of the ship is effortless.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE SUITES ───────────────────────────────────────────────── */}
      <section className="wnf-section wnf-bg-white" id="luxury-spa-experiences">
        <div className="wnf-container">
          <div className="wnf-section-header">
            <h2 className="wnf-h2">The Suites</h2>
            <div className="wnf-accent-line"></div>
          </div>

          <div className="wnf-split">
            <div className="wnf-image-column">
              <div className="wnf-image-stack">
                <div className="wnf-img-frame wnf-frame-primary">
                  <img
                    src={SuiteImage}
                    alt="Spacious ocean terrace suite interior"
                    className="wnf-photo"
                  />
                </div>

                <div className="wnf-img-frame wnf-frame-secondary">
                  <img
                    src={SuiteImage1}
                    alt="Explora Journeys luxury balcony view"
                    className="wnf-photo"
                  />
                </div>
              </div>
            </div>

            <div className="wnf-content-column">
              <div className="wnf-block">
                <p className="wnf-lead-text">
                  One of Explora Journeys' biggest strengths is its
                  accommodations. Every guest stays in a suite, creating a
                  consistently premium experience throughout the ship.
                </p>

                <ul className="wnf-feature-list">
                  {[
                    "Spacious Layouts: Noticeably larger than comparable luxury cruise options",
                    "Private Terraces: Generous outdoor space for relaxing with ocean views",
                    "Luxury Bathrooms: Elegant finishes, spacious showers, and premium amenities",
                    "Comfortable Living Areas: Separate sitting spaces make longer voyages enjoyable",
                    "Walk-In Wardrobes: Abundant storage space with vanity table in all categories",
                    "Residential Details: Premium linens, espresso machines, and custom mini-bars",
                  ].map((feature, i) => {
                    const [title, desc] = feature.split(": ");
                    return (
                      <li key={i} className="wnf-feature-item">
                        <div className="wnf-icon-wrapper">
                          <Check size={14} />
                        </div>
                        <span className="wnf-feature-text">
                          <strong>{title}:</strong> {desc}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="wnf-footer-note">
                <p className="wnf-highlight-text">
                  With refined materials, heated bathroom floors in select
                  categories, and a strong residential feel, the suite alone
                  becomes a major reason to choose Explora Journeys.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DINING & SERVICE ─────────────────────────────────────────── */}
      <section className="azs-suites-section" id="azs-fitness-nutrition">
        <div className="azs-container">
          <div className="azs-section-header">
            <h2 className="azs-section-title">
              Dining Experience &amp; Personalized Service
            </h2>
            <div className="azs-section-accent"></div>
            <p className="azs-section-subtitle">
              Exceptional cuisine and attentive hospitality define the core of
              the Explora luxury cruise experience.
            </p>
          </div>

          <div className="azs-suites-grid">
            {/* Dining Card */}
            <div className="azs-suites-card azs-seabourn-suites">
              <div className="azs-suites-image-wrap">
                <img
                  src={DiningImage}
                  alt="Fine dining restaurant onboard Explora Journeys"
                  className="azs-suites-img"
                />
                <span className="azs-suites-image-badge">
                  Culinary Excellence
                </span>
              </div>

              <div className="azs-suites-content">
                <div className="azs-suites-card-header">
                  <div className="azs-suites-icon-circle">
                    <Utensils size={24} className="azs-suites-icon" />
                  </div>
                  <h3 className="azs-suites-title">Exceptional Dining</h3>
                </div>

                <p className="azs-suites-intro">
                  Rather than relying on a single main dining room, guests enjoy
                  multiple culinary venues offering diverse international menus
                  without rigid dining schedules.
                </p>

                <div className="azs-suites-body">
                  <h4 className="azs-suites-group-title">
                    Dining highlights include:
                  </h4>

                  <ul className="azs-suites-list">
                    {[
                      "International fine dining selections",
                      "Mediterranean-inspired fresh menus",
                      "Sophisticated Asian and pan-Asian specialties",
                      "Upscale steakhouse and refined grill options",
                      "Casual poolside dining and luxury room service",
                      "Artisan coffees, pastries, and French gelaterias",
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
                      Meals are served in a relaxed, open-seating environment
                      where quality and presentation always reflect the line's
                      luxury positioning.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Card */}
            <div className="azs-suites-card azs-azamara-suites">
              <div className="azs-suites-image-wrap">
                <img
                  src={PoolImage1}
                  alt="Attentive crew members providing luxury service"
                  className="azs-suites-img"
                />
                <span className="azs-suites-image-badge">
                  Attentive &amp; Professional
                </span>
              </div>

              <div className="azs-suites-content">
                <div className="azs-suites-card-header">
                  <div className="azs-suites-icon-circle">
                    <Smile size={24} className="azs-suites-icon" />
                  </div>
                  <h3 className="azs-suites-title">Personalized Service</h3>
                </div>

                <p className="azs-suites-intro">
                  Excellent service defines a luxury cruise. Explora Journeys
                  places significant emphasis on warm hospitality, professional
                  attention, and remembering guest preferences.
                </p>

                <div className="azs-suites-body">
                  <h4 className="azs-suites-group-title">
                    What to expect from the crew:
                  </h4>

                  <ul className="azs-suites-list">
                    {[
                      "Warm, genuine guest interactions",
                      "Highly professional and polished service",
                      "Outstanding attention to minor details",
                      "Quickly remembering beverage and dietary preferences",
                      "Efficient, hassle-free problem solving",
                      "Personalized destination and excursion recommendations",
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

                  <div className="azs-suites-highlight-box azs-azamara-suites-highlight">
                    <p className="azs-suites-highlight-text">
                      The service feels highly attentive and customized without
                      becoming overly formal or intrusive.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ENTERTAINMENT, WELLNESS, DESTINATIONS & WHAT'S INCLUDED */}
      <section className="adg-c-section adg-c-bg-soft" id="adg-entertainment">
        <div className="adg-c-container">
          <div className="adg-c-section-header">
            <span className="adg-c-eyebrow">The Explora Experience</span>

            <h2 className="adg-c-h2">
              Entertainment, Wellness <br /> & What's Included
            </h2>

            <div className="adg-c-accent-line"></div>

            <p className="Asc-section-intro">
              Explora Journeys focuses on sophisticated luxury, immersive
              destinations, and thoughtful inclusions rather than flashy
              attractions. Every aspect of the experience is designed to create
              a relaxed and refined voyage.
            </p>
          </div>

          <div className="adg-c-venues-grid1">
            {[
              {
                id: 1,
                eyebrow: "Refined Evenings",
                name: "Entertainment",
                highlight: "Sophisticated Rather Than Spectacular",
                items: [
                  "Live Music",
                  "Pianists",
                  "Jazz Performances",
                  "Guest Speakers",
                  "Cultural Enrichment",
                  "Cocktail Lounges",
                  "Intimate Performances",
                ],
                callout:
                  "Instead of Broadway-style productions, Explora Journeys emphasizes elegant evenings with live entertainment, enriching experiences, and relaxed social spaces.",
              },
              {
                id: 2,
                eyebrow: "Relax & Recharge",
                name: "Wellness & Relaxation",
                highlight: "Wellness Integrated Into Daily Life",
                items: [
                  "Luxury Spa Treatments",
                  "Modern Fitness Center",
                  "Yoga",
                  "Outdoor Wellness Spaces",
                  "Healthy Dining Choices",
                  "Relaxation Lounges",
                ],
                callout:
                  "Wellness extends far beyond the spa, creating opportunities to relax, stay active, and enjoy healthy living throughout the voyage.",
              },
              {
                id: 3,
                eyebrow: "Explore the World",
                name: "Destinations & Itineraries",
                highlight: "Longer Stays & Meaningful Exploration",
                items: [
                  "Mediterranean",
                  "Northern Europe",
                  "Caribbean",
                  "Middle East",
                  "North America",
                  "Transatlantic Crossings",
                ],
                callout:
                  "Many itineraries feature extended port calls and overnight stays, giving guests more time to experience each destination beyond the typical cruise schedule.",
              },
              {
                id: 4,
                eyebrow: "Exceptional Value",
                name: "What's Included?",
                highlight: "More Included in Your Fare",
                items: [
                  "Luxury Suite Accommodations",
                  "Multiple Dining Venues",
                  "Room Service",
                  "Wi-Fi",
                  "Entertainment",
                  "Wellness Facilities",
                  "Fitness Classes",
                  "Selected Beverages",
                  "Gratuities (Many Fare Categories)",
                ],
                callout:
                  "Explora Journeys includes numerous premium amenities in the cruise fare, making it easier to compare the overall value with other luxury cruise lines.",
              },
            ].map((venue, i) => (
              <div
                key={venue.id}
                className={`adg-c-venue-card adg-c-venue-${(i % 4) + 1}`}
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

      {/* ── PUBLIC SPACES ───────────────────────────────────────────── */}
      <section className="dmg-info-section dmg-bg-white" id="public-spaces">
        <div className="dmg-info-container">
          <div className="dmg-info-grid">
            <div className="dmg-info-content">
              <h2 className="dmg-info-title">Public Spaces</h2>
              <div className="dmg-info-accent"></div>

              <p className="dmg-info-lead">
                Explora Journeys offers numerous beautifully designed public
                spaces where guests can relax, socialize, or simply enjoy the
                ocean views.
              </p>

              <div className="dmg-info-features dmg-info-features-scrollable">
                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Waves size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">Infinity Pools</h3>
                    <p className="dmg-info-feature-desc">
                      Multiple infinity pool areas create different atmospheres,
                      from lively social spaces to peaceful retreats where
                      guests can relax with uninterrupted ocean views.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div
                    className="dmg-info-icon-box"
                    style={{ backgroundColor: "var(--navy-light)" }}
                  >
                    <Sun size={16} style={{ color: "#fff" }} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">Outdoor Lounges</h3>
                    <p className="dmg-info-feature-desc">
                      Comfortable outdoor seating areas invite guests to unwind,
                      enjoy the fresh sea air, and take in spectacular coastal
                      and ocean scenery throughout the voyage.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Heart size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">Wellness Areas</h3>
                    <p className="dmg-info-feature-desc">
                      The luxury spa, modern fitness facilities, and wellness
                      experiences provide opportunities for relaxation,
                      rejuvenation, and maintaining healthy routines while at
                      sea.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Coffee size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">Elegant Lounges</h3>
                    <p className="dmg-info-feature-desc">
                      Stylish lounges throughout the ship are perfect for
                      reading, enjoying cocktails, meeting fellow travelers, or
                      simply watching the ocean pass by in a peaceful setting.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="dmg-info-media">
              <div className="dmg-media-wrapper">
                <img
                  src={Publicspace}
                  alt="Elegant public spaces aboard Explora Journeys"
                  className="dmg-media-img"
                  style={{ height: "650px" }}
                />
                <div className="dmg-media-overlay"></div>

                <div className="dmg-media-badge">
                  <span>Relaxed Luxury at Sea</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ WHO WILL LOVE EXPLORA JOURNEYS? ════════════════════════════════ */}
      <section className="adg-section">
        <div className="adg-container">
          <div className="adg-section-header" style={{ marginBottom: "60px" }}>
            <h2 className="adg-h2">Who Will Love Explora Journeys?</h2>
            <div className="adg-accent-line"></div>
          </div>

          <div
            className="adg-split-layout"
            style={{ alignItems: "flex-start" }}
          >
            <div className="adg-content-card-side">
              <img
                src={DiningImage1}
                alt="Luxury suite aboard Explora Journeys"
                className="adg-side-image"
                style={{ height: "30vh", border: "1px solid var(--navy)" }}
              />

              <div className="adg-info-card">
                <div className="adg-card-meta">
                  <Compass size={28} />
                  <span className="adg-meta-label">
                    Luxury Ocean Travel Designed for Modern Explorers
                  </span>
                </div>

                <p className="adg-card-lead">
                  Explora Journeys is ideal for travelers seeking a refined,
                  contemporary luxury cruise experience centered on comfort,
                  exceptional service, and meaningful destinations.
                </p>

                <div className="adg-card-divider"></div>

                <p className="adg-card-subtext">
                  Every journey emphasizes spacious oceanfront suites,
                  world-class dining, personalized attention, and a relaxed
                  onboard atmosphere.
                </p>

                <p className="adg-card-subtext" style={{ marginTop: "18px" }}>
                  Many guests are experienced luxury travelers looking for
                  something more sophisticated and immersive than mainstream
                  cruising.
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
                  title: "Exceptional Dining",
                  icon: <Utensils size={20} />,
                },
                {
                  title: "Personalized Service",
                  icon: <Users size={20} />,
                },
                {
                  title: "Relaxed Atmosphere",
                  icon: <Coffee size={20} />,
                },
                {
                  title: "Wellness Experiences",
                  icon: <Heart size={20} />,
                },
                {
                  title: "Destination-Focused Travel",
                  icon: <Compass size={20} />,
                },
                {
                  title: "Ocean Views",
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

      {/* WHO MAY PREFER ANOTHER CRUISE LINE? */}

      <section className="Asc-section">
        <div className="Asc-container">
          <div className="Asc-section-header">
            <h2 className="Asc-section-title">
              Who May Prefer Another Cruise Line?
            </h2>

            <p
              className="Asc-body-text"
              style={{
                maxWidth: "760px",
                margin: "20px auto 0",
                textAlign: "center",
              }}
            >
              Families with young children who prioritize character
              entertainment, large kids' clubs, and activity-packed days may
              find other cruise lines better suited to their vacation style than
              Explora Journeys.
            </p>
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
                You May Prefer Another Cruise Line If You Want:
              </h3>

              <ul className="Asc-who-list">
                {[
                  "Large-scale entertainment",
                  "Water parks and thrill attractions",
                  "Theme park-style experiences",
                  "Constant organized activities",
                  "Budget-friendly cruising",
                  "High-energy nightlife",
                ].map((item, i) => (
                  <li key={i}>
                    <X size={16} className="Asc-icon-red" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── IS IT WORTH THE PRICE? ───────────────────────────────────── */}
      <section
        className="ugt-components-section"
        id="concierge-wellness-planning"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="ugt-components-container">
          <div className="ugt-components-header">
            <h2 className="ugt-components-title">
              Is Explora Journeys Worth the Price?
            </h2>
            <div className="adg-c-accent-line"></div>
          </div>

          <div className="ugt-components-list">
            <div className="ugt-component-row">
              <div className="ugt-component-image-wrapper">
                <div className="ugt-component-image-container">
                  <img
                    src={CtaImage}
                    alt="Sunrise pool deck on Explora Journeys luxury yacht"
                    className="ugt-component-image"
                  />
                </div>
              </div>

              <div className="ugt-component-content">
                <p className="ugt-component-text">
                  Luxury cruising represents a significant investment, making
                  overall value an important consideration. Explora Journeys
                  justifies its premium pricing by delivering high quality in
                  the areas that matter most to discerning travelers.
                </p>

                <div className="ugt-questions-box">
                  <span className="ugt-questions-title">
                    Explora Journeys delivers exceptional value through:
                  </span>

                  <ul className="ugt-questions-list">
                    {[
                      "Spacious, thoughtfully designed suites with ocean terraces",
                      "Premium culinary selections across multiple distinct venues",
                      "Exceptional crew-to-guest ratios and customized hospitality",
                      "Stunning modern ship aesthetics and quiet public decks",
                      "A generous slate of inclusive onboard amenities",
                      "Immersive port stays and overnight destination experiences",
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
                  Rather than comparing price alone, travelers should consider
                  the overall quality of the experience and the premium services
                  already included in the cruise fare. For guests seeking
                  contemporary luxury without crowds, Explora Journeys is an
                  outstanding choice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TIPS BEFORE BOOKING ───────────────────────────────────────── */}
      <section
        className="Avr-planning-section"
        id="Asc-wellness-planning-tips"
        style={{ backgroundColor: "var(--bg-white)" }}
      >
        <div className="Asc-container">
          <div className="Avr-planning-heading">
            <span className="Avr-planning-eyebrow">
              Maximize Your Experience
            </span>
            <h2 className="Avr-planning-title">
              Tips Before Booking Your Voyage
            </h2>
            <div className="Avr-planning-divider"></div>
          </div>

          <div className="Avr-planning-grid">
            {/* LEFT PANEL */}
            <div className="Avr-planning-left">
              <div className="Avr-planning-left-deco">&ldquo;</div>

              <h3 className="Avr-planning-left-title">
                Book Early for Desirable Suites &amp; Itineraries
              </h3>

              <p className="Avr-planning-left-body">
                The most popular suites and unique itineraries (such as Alaska
                or Mediterranean overnight cruises) frequently sell out six to
                twelve months in advance. Booking early secures your preferred
                location and locks in the best rates.
              </p>

              <div className="Avr-planning-alert">
                <ShieldCheck size={18} className="Avr-planning-alert-icon" />
                <p className="Avr-planning-alert-text">
                  Working with an experienced luxury travel advisor ensures you
                  receive the greatest value, promotions, and personalized
                  service from start to finish.
                </p>
              </div>
            </div>

            {/* RIGHT PANEL */}
            <div className="Avr-planning-right">
              <p className="Avr-planning-right-intro">
                Key planning considerations before you finalize:
              </p>

              <div className="Avr-planning-benefits-grid">
                {[
                  {
                    icon: <CalendarClock size={18} />,
                    label: "Book early for peak dates",
                  },
                  {
                    icon: <Compass size={18} />,
                    label: "Compare regional itineraries",
                  },
                  {
                    icon: <Anchor size={18} />,
                    label: "Consider longer sailings",
                  },
                  {
                    icon: <Award size={18} />,
                    label: "Consult a luxury travel advisor",
                  },
                  {
                    icon: <Users size={18} />,
                    label: "Review family & solo options",
                  },
                  {
                    icon: <Sparkles size={18} />,
                    label: "Check inclusive promo offers",
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
                Different regions provide very different onboard climates and
                shore experiences. Additionally, Explora's relaxed atmosphere is
                especially rewarding on longer voyages.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── A NEW WAY TO EXPERIENCE THE OCEAN ───────────────────────── */}
      <section
        className="Asc-video-section"
        id="Asc-video-6"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="Asc-container">
          <div className="Asc-section-header">
            <h2 className="Asc-h2">A New Way to Experience the Ocean</h2>

            <div className="Asc-accent-line"></div>

            <p className="Asc-video-intro">
              Discover how Explora Journeys redefines luxury ocean travel
              through elegant design, spacious surroundings, personalized
              hospitality, and immersive destinations.
            </p>
          </div>

          <div className="Asc-video-wrapper">
            <div className="Asc-video-frame">
              <iframe
                src="https://www.youtube.com/embed/QElxJpiU3Cs"
                title="A New Way to Experience the Ocean"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY BOOK THROUGH A TRAVEL ADVISOR ────────────────────────── */}
      <section className="ugt-advantage-section" id="off-season-recovery">
        <div className="ugt-advantage-container">
          <div className="ugt-advantage-header">
            <span className="ugt-advantage-eyebrow">Professional Guidance</span>

            <h2 className="ugt-advantage-title">
              Why Book Through a Luxury Travel Advisor?
            </h2>

            <div className="Asc-accent-line"></div>

            <p className="ugt-advantage-intro">
              Luxury cruises involve much more than selecting a sailing date. An
              experienced advisor helps navigate room configurations, coordinate
              logistics, and unlock exclusive amenities.
            </p>
          </div>

          <div className="ugt-advantage-grid">
            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <Compass size={28} strokeWidth={1.5} />
              </div>
              <h4 className="ugt-card-title">Select the Right Itinerary</h4>
              <p className="ugt-card-desc">
                Match your travel preferences with the best regional cruise
                routes, seasonal conditions, and overnight ports.
              </p>
            </div>

            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <Award size={28} strokeWidth={1.5} />
              </div>
              <h4 className="ugt-card-title">Choose the Best Suite</h4>
              <p className="ugt-card-desc">
                Expert advice on suite locations, category features, private
                terrace sizing, and whether upgrades are worth it.
              </p>
            </div>

            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <Info size={28} strokeWidth={1.5} />
              </div>
              <h4 className="ugt-card-title">Explain What's Included</h4>
              <p className="ugt-card-desc">
                Understand exactly what your fare covers, from specialty dining
                reservations and onboard credits to beverage choices.
              </p>
            </div>

            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <Sparkles size={28} strokeWidth={1.5} />
              </div>
              <h4 className="ugt-card-title">Identify Promotional Offers</h4>
              <p className="ugt-card-desc">
                Gain access to advisor-exclusive rates, room upgrades,
                complimentary onboard credits, and unique amenity packages.
              </p>
            </div>

            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <MapPin size={28} strokeWidth={1.5} />
              </div>
              <h4 className="ugt-card-title">Coordinate Logistics</h4>
              <p className="ugt-card-desc">
                Arrange pre- and post-cruise luxury hotel stays, private airport
                transfers, flights, and custom private shore excursions.
              </p>
            </div>

            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <Users size={28} strokeWidth={1.5} />
              </div>
              <h4 className="ugt-card-title">Personalized Planning</h4>
              <p className="ugt-card-desc">
                Enjoy complete concierge assistance before, during, and after
                your cruise, ensuring a seamless, worry-free vacation.
              </p>
            </div>
          </div>
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
                  alt="Angela Hughes Luxury Travel Expert"
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
                  help travelers navigate the world of luxury cruise lines like
                  Explora Journeys — ensuring your investment delivers an
                  unforgettable, personalized vacation.
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
              Everything you need to know about planning your Explora Journeys
              luxury cruise.
            </p>
          </div>
          <FAQ />
        </div>
      </section>

      {/* ── CTA & INTERNAL LINKS ────────────────────────────────────── */}
      <section className="Asc-help-section">
        <div className="Asc-help-bg-wrap">
          <img
            src={HeroImage3}
            alt="Explora Journeys cruise ship under sunset sky"
            className="Asc-help-bg-img"
          />
          <div className="Asc-help-overlay"></div>
        </div>

        <div className="Asc-container">
          <div className="Asc-help-card">
            <div className="Asc-help-content">
              <div className="Asc-help-header">
                <span className="Asc-help-eyebrow">
                  Tailored Luxury Vacation Planning
                </span>
                <h2 className="Asc-help-h2">
                  Ready to Experience Explora Journeys?
                </h2>
                <div className="Asc-help-accent"></div>
              </div>

              <div className="Asc-help-grid">
                <div className="Asc-help-info">
                  <p className="Asc-help-intro">
                    Connect with Angela Hughes and the expert team at Trips
                    &amp; Ships Luxury Travel for personalized guidance on
                    planning your next Explora Journeys cruise.
                  </p>

                  <p className="Asc-help-intro">
                    From recommending the right itinerary and choosing the best
                    suite category to coordinating flights, hotels, transfers,
                    and custom shore excursions, we handle every detail of your
                    luxury cruise vacation.
                  </p>

                  <div className="Asc-help-btn-container">
                    <Link
                      to="/contact"
                      className="Asc-help-cta-btn"
                      style={{ textDecoration: "none" }}
                    >
                      Start Planning Your Explora Voyage
                      <ArrowRight size={18} />
                    </Link>
                  </div>
                </div>

                <div className="Asc-help-list-box">
                  <h3 className="Asc-help-list-title">
                    Our planning services include:
                  </h3>
                  <ul className="Asc-help-bullets">
                    {[
                      "Custom suite selection & upgrade recommendations",
                      "Exclusive promotional rates & onboard credit amenities",
                      "Pre- and post-cruise luxury hotel & transfer logistics",
                      "Specialty dining & onboard experience reservations",
                      "Customized shore excursion planning & guide connections",
                      "Ongoing travel concierge support, start to finish",
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
                      label: "How Far in Advance Should You Book Explora?",
                      path: "/how-far-in-advance-should-you-book-explora",
                    },
                    {
                      label: "How to Get the Best Value on Explora Journeys",
                      path: "/how-to-get-the-best-value-on-explora-journeys",
                    },
                    {
                      label: "What to Pack for an Explora Cruise",
                      path: "/what-to-pack-for-an-explora-cruise",
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

export default ExploraJourneysReviews;
