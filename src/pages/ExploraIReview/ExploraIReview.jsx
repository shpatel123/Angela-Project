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
  Waves,
  Heart,
  Utensils,
  Coffee,
  Sun,
  Plane,
  Music,
  HeartHandshake,
  Camera,
} from "lucide-react";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela3.jpeg";

import HeroImage1 from "../../assets/WhichExploraShipChoose/Explora-Journeys-1.webp";
import HeroImage2 from "../../assets/WhichExploraSuiteWorthUpgrade/EXPLORA-CARIBBEAN.jpg";
import HeroImage4 from "../../assets/HowAdvanceShouldBookExplora/Explora-Journeys2.webp";
import ExploraPool from "../../assets/WhichExploraSuiteWorthUpgrade/explora-I-infinity-pool-ocean-wake-view.jpg";
import ExploraDining from "../../assets/WhichExploraSuiteWorthUpgrade/explora-luxury-dining2.jpg";
import ExploraService from "../../assets/IsExploraGoodForFamilies/explora-journeys-sunrise-pool-deck-luxury-yacht.webp";
import ExploraDestination from "../../assets/WhichMediterraneanItineraryIsBest/explora-ii-amalfi-coast-mediterranean-cruise.jpg";
import ExploraDestination2 from "../../assets/WhichMediterraneanItineraryIsBest/santorini-greece-mediterranean-luxury-cruise-view.jpg";
import LuxuryOceanfrontSuites from "../../assets/HowAdvanceShouldBookExplora/Explora-Suite.webp";
import LuxuryOceanfrontPool from "../../assets/IsExploraGoodForFamilies/Regent-Seven-Seas-Cruises.webp";
import ExploraShip from "../../assets/IsExploraGoodForFamilies/Luxury-Explora-Journeys.webp";

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
      "@id": "https://tripsandships.com/explora-i-review/#webpage",
      name: "Explora I Review",
      url: "https://tripsandships.com/explora-i-review",
      description:
        "Read our comprehensive Explora I review covering suites, dining, service, entertainment, wellness, itineraries, and whether Explora I is worth booking for your next luxury cruise.",
    },
    {
      "@type": "Article",
      "@id": "https://tripsandships.com/explora-i-review/#article",
      headline:
        "Explora I Review | Inside Explora Journeys' Flagship Luxury Cruise Ship",
      description:
        "A comprehensive review of Explora I, the flagship of Explora Journeys, covering ship design, suites, dining, service, entertainment, wellness, and destinations.",
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
      "@id": "https://tripsandships.com/explora-i-review/#breadcrumb",
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
          name: "Explora I Review",
          item: "https://tripsandships.com/explora-i-review",
        },
      ],
    },
    {
      "@type": "Cruise",
      "@id": "https://tripsandships.com/explora-i-review/#cruise",
      name: "Explora I",
      description:
        "The flagship vessel of Explora Journeys, offering all-oceanfront suites, destination-focused itineraries, and a boutique European luxury resort atmosphere at sea.",
      provider: {
        "@type": "Organization",
        name: "Explora Journeys",
      },
    },
    {
      "@type": "Product",
      "@id": "https://tripsandships.com/explora-i-review/#product",
      name: "Explora I",
      description:
        "Flagship luxury cruise ship of Explora Journeys featuring all-suite oceanfront accommodations, multiple dining venues, wellness facilities, and destination-rich itineraries.",
      brand: {
        "@type": "Organization",
        name: "Explora Journeys",
      },
    },
    {
      "@type": "TouristTrip",
      "@id": "https://tripsandships.com/explora-i-review/#touristtrip",
      name: "Explora I Luxury Cruise Experience",
      description:
        "A relaxed, contemporary luxury cruise experience aboard Explora I designed for travelers who value space, exceptional service, outstanding cuisine, and meaningful destinations.",
      provider: {
        "@type": "Organization",
        name: "Explora Journeys",
      },
    },
    {
      "@type": "Service",
      "@id": "https://tripsandships.com/explora-i-review/#service",
      serviceType: "Luxury Cruise Vacation Planning & Booking Support",
      provider: {
        "@type": "TravelAgency",
        name: "Trips & Ships Luxury Travel",
      },
      areaServed: "Worldwide",
      description:
        "Comprehensive travel booking, suite selection assistance, transfers, pre/post hotel bookings, and shore excursion coordination for Explora I sailings.",
    },
    {
      "@type": "ItemList",
      "@id": "https://tripsandships.com/explora-i-review/#itemlist",
      name: "What Explora I Reviews Cover",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "First Impressions" },
        { "@type": "ListItem", position: 2, name: "Ship Design" },
        { "@type": "ListItem", position: 3, name: "Suites & Accommodations" },
        { "@type": "ListItem", position: 4, name: "Dining Experience" },
        { "@type": "ListItem", position: 5, name: "Service" },
        { "@type": "ListItem", position: 6, name: "Public Spaces" },
        { "@type": "ListItem", position: 7, name: "Wellness & Spa" },
        { "@type": "ListItem", position: 8, name: "Entertainment" },
        { "@type": "ListItem", position: 9, name: "Destinations" },
        { "@type": "ListItem", position: 10, name: "What Is Included" },
        { "@type": "ListItem", position: 11, name: "Is Explora I Worth It" },
      ],
    },
    {
      "@type": "Review",
      "@id": "https://tripsandships.com/explora-i-review/#review",
      itemReviewed: {
        "@type": "Cruise",
        name: "Explora I",
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
        "Explora I successfully delivers on its promise of redefining luxury cruising, creating an atmosphere centered on space, comfort, wellness, exceptional dining, and personalized hospitality rather than bigger ships or more attractions.",
    },
    {
      "@type": "FAQPage",
      "@id": "https://tripsandships.com/explora-i-review/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Is Explora I a luxury cruise ship?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Explora I is the flagship of Explora Journeys and is positioned firmly within the luxury cruise market.",
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
          name: "Is the dining good on Explora I?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Dining is considered one of the ship's greatest strengths, with multiple restaurants serving high-quality international cuisine.",
          },
        },
        {
          "@type": "Question",
          name: "Does Explora I have formal nights?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. The atmosphere is elegant yet relaxed, with smart casual attire appropriate for most evenings.",
          },
        },
        {
          "@type": "Question",
          name: "Is Explora I suitable for couples?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. The peaceful atmosphere and luxurious accommodations make it especially popular with couples.",
          },
        },
        {
          "@type": "Question",
          name: "Is Explora I family-friendly?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Families are welcome, but the onboard experience is designed more for sophisticated luxury than children's entertainment.",
          },
        },
        {
          "@type": "Question",
          name: "Is Wi-Fi included?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Wi-Fi is included, allowing guests to remain connected throughout their voyage.",
          },
        },
        {
          "@type": "Question",
          name: "What destinations does Explora I visit?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Depending on the season, Explora I sails throughout the Mediterranean, Northern Europe, Caribbean, North America, Middle East, and on transatlantic voyages.",
          },
        },
        {
          "@type": "Question",
          name: "Is Explora I worth the money?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For travelers seeking spacious accommodations, refined luxury, outstanding dining, and exceptional service, many consider Explora I an excellent value within the luxury cruise market.",
          },
        },
        {
          "@type": "Question",
          name: "Should I book through a travel advisor?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. A luxury travel advisor can help you choose the best itinerary, suite, and promotional offers while simplifying every stage of the planning process.",
          },
        },
        {
          "@type": "Question",
          name: "How many guest suites are onboard Explora I?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Explora I features 461 oceanfront suites, penthouses, and residences. This small-ship layout hosts a maximum of 900 guests, creating a highly spacious and uncrowded environment.",
          },
        },
        {
          "@type": "Question",
          name: "What pools are available on Explora I?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Explora I has four heated swimming pools: three outdoor pools (including the aft infinity pool and the adult-only Helios Pool) and one indoor pool covered by a large retractable glass dome (the Conservatory Pool), allowing guests to swim in any weather.",
          },
        },
        {
          "@type": "Question",
          name: "What is the guest-to-crew ratio on Explora I?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The ship maintains an exceptional crew-to-guest ratio of approximately 1 to 1.25. This ensures that services are highly attentive, prompt, and personalized for every guest onboard.",
          },
        },
        {
          "@type": "Question",
          name: "Is there a self-service launderette on Explora I?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, Explora I provides complimentary self-service launderettes on multiple passenger decks, equipped with modern washing machines, dryers, detergents, and ironing facilities for guest convenience.",
          },
        },
        {
          "@type": "Question",
          name: "Does Explora I offer themed or scheduled activities?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Explora I focuses on a relaxed pacing. Rather than pool games or loud trivia, onboard activities focus on wellness seminars, cooking masterclasses, destination insights, wine tastings, and intimate live acoustic music sessions.",
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
      q: "Is Explora I a luxury cruise ship?",
      a: "Yes. Explora I is the flagship of Explora Journeys and is positioned firmly within the luxury cruise market.",
    },
    {
      q: "Are all accommodations suites?",
      a: "Yes. Every guest stays in an oceanfront suite with a private terrace.",
    },
    {
      q: "Is the dining good on Explora I?",
      a: "Dining is considered one of the ship's greatest strengths, with multiple restaurants serving high-quality international cuisine.",
    },
    {
      q: "Does Explora I have formal nights?",
      a: "No. The atmosphere is elegant yet relaxed, with smart casual attire appropriate for most evenings.",
    },
    {
      q: "Is Explora I suitable for couples?",
      a: "Absolutely. The peaceful atmosphere and luxurious accommodations make it especially popular with couples.",
    },
    {
      q: "Is Explora I family-friendly?",
      a: "Families are welcome, but the onboard experience is designed more for sophisticated luxury than children's entertainment.",
    },
    {
      q: "Is Wi-Fi included?",
      a: "Yes. Wi-Fi is included, allowing guests to remain connected throughout their voyage.",
    },
    {
      q: "What destinations does Explora I visit?",
      a: "Depending on the season, Explora I sails throughout the Mediterranean, Northern Europe, Caribbean, North America, Middle East, and on transatlantic voyages.",
    },
    {
      q: "Is Explora I worth the money?",
      a: "For travelers seeking spacious accommodations, refined luxury, outstanding dining, and exceptional service, many consider Explora I an excellent value within the luxury cruise market.",
    },
    {
      q: "Should I book through a travel advisor?",
      a: "Yes. A luxury travel advisor can help you choose the best itinerary, suite, and promotional offers while simplifying every stage of the planning process.",
    },
    {
      q: "How many guest suites are onboard Explora I?",
      a: "Explora I features 461 oceanfront suites, penthouses, and residences. This small-ship layout hosts a maximum of 900 guests, creating a highly spacious and uncrowded environment.",
    },
    {
      q: "What pools are available on Explora I?",
      a: "Explora I has four heated swimming pools: three outdoor pools (including the aft infinity pool and the adult-only Helios Pool) and one indoor pool covered by a large retractable glass dome (the Conservatory Pool), allowing guests to swim in any weather.",
    },
    {
      q: "What is the guest-to-crew ratio on Explora I?",
      a: "The ship maintains an exceptional crew-to-guest ratio of approximately 1 to 1.25. This ensures that services are highly attentive, prompt, and personalized for every guest onboard.",
    },
    {
      q: "Is there a self-service launderette on Explora I?",
      a: "Yes, Explora I provides complimentary self-service launderettes on multiple passenger decks, equipped with modern washing machines, dryers, detergents, and ironing facilities for guest convenience.",
    },
    {
      q: "Does Explora I offer themed or scheduled activities?",
      a: "Explora I focuses on a relaxed pacing. Rather than pool games or loud trivia, onboard activities focus on wellness seminars, cooking masterclasses, destination insights, wine tastings, and intimate live acoustic music sessions.",
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

/* ── Public Spaces Data ──────────────────────────────────────── */
const publicSpaceProfiles = [
  {
    icon: <Waves size={22} />,
    title: "Infinity Pools",
    desc: "Multiple pools provide different atmospheres, from lively gathering spaces to peaceful retreats, so guests can choose the mood that suits their day.",
  },
  {
    icon: <Sun size={22} />,
    title: "Outdoor Lounges",
    desc: "Comfortable seating invites guests to spend time outdoors throughout the day, whether reading, socializing, or simply watching the horizon.",
  },
  {
    icon: <Compass size={22} />,
    title: "Elegant Observation Areas",
    desc: "Perfect for reading, enjoying a cocktail, or simply watching the scenery unfold as the ship moves between destinations.",
  },
  {
    icon: <Coffee size={22} />,
    title: "Quiet Indoor Spaces",
    desc: "Stylish lounges provide ideal settings for conversation or relaxation, away from the energy of the ship's busier areas.",
  },
];

/* ── What's Included Data ────────────────────────────────────── */
const includedItems = [
  "Luxury suite accommodations",
  "Multiple dining venues",
  "Room service",
  "Wi-Fi",
  "Entertainment",
  "Wellness facilities",
  "Fitness classes",
  "Selected beverages",
  "Gratuities in many fare categories",
];

/* ── Main Component ──────────────────────────────────────────────── */
const ExploraIReview = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [readMore, setReadMore] = useState(false);

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
          Explora I Review | Inside Explora Journeys' Flagship Luxury Cruise
          Ship
        </title>
        <meta name="title" content="Explora I Review" />
        <meta
          name="description"
          content="Read our comprehensive Explora I review covering suites, dining, service, entertainment, wellness, itineraries, and whether Explora I is worth booking for your next luxury cruise."
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
          <h1>Explora I Review</h1>

          <p>
            Explora I is more than just the first ship in the Explora Journeys
            fleet—it's the ship that introduced an entirely new vision for
            modern luxury cruising.
          </p>

          <p>
            Rather than trying to compete with larger cruise ships filled with
            attractions and entertainment, Explora I was designed to create the
            feeling of staying in a sophisticated European luxury resort that
            happens to travel the world.
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
                But does it live up to the expectations? In this comprehensive
                review, we'll explore everything Explora I has to offer and help
                you decide whether it's the right luxury cruise for your next
                vacation.
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
        id="first-impressions"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="ugt-components-container">
          <div className="ugt-components-header">
            <h2 className="ugt-components-title">First Impressions</h2>

            <div className="adg-c-accent-line"></div>
          </div>

          <div className="ugt-components-list">
            <div className="ugt-component-row">
              <div className="ugt-component-image-wrapper">
                <div className="ugt-component-image-container">
                  <img
                    src={ExploraPool}
                    alt="Elegant interior aboard Explora I with contemporary European design"
                    className="ugt-component-image"
                  />
                </div>
              </div>

              <div className="ugt-component-content">
                <p className="ugt-component-text">
                  The moment you step aboard <strong>Explora I</strong>, you'll
                  notice that it feels different from most cruise ships. Instead
                  of dramatic atriums, loud announcements, and crowded public
                  spaces, the atmosphere is calm, sophisticated, and
                  effortlessly inviting.
                </p>

                <div className="ugt-questions-box">
                  <span className="ugt-questions-title">
                    Guests are welcomed into an environment featuring:
                  </span>

                  <ul className="ugt-questions-list">
                    {[
                      "Contemporary European design",
                      "Spacious lounges",
                      "Floor-to-ceiling windows",
                      "Ocean views throughout the ship",
                      "Comfortable seating areas",
                      "Relaxed ambiance",
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
                  From the very first moments onboard, Explora I feels more like
                  an upscale boutique hotel than a traditional cruise ship,
                  setting the tone for a relaxed and luxurious voyage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SHIP DESIGN ──────────────────────────────────────────────── */}
      <section className="Asc-section Asc-bg-white" id="Asc-ship-design">
        <div className="Asc-container">
          <div className="Asc-section-header">
            <h2 className="Asc-h2">Ship Design</h2>
            <div className="Asc-accent-line"></div>
          </div>

          <p className="Asc-body-text" style={{ marginBottom: "20px" }}>
            Explora I embraces modern luxury with elegant architecture and
            thoughtful details. Rather than overwhelming guests with extravagant
            décor, the design encourages relaxation and connection with the sea.
          </p>

          <div className="adg-c-overview-icons">
            {[
              "Natural light",
              "Warm neutral colors",
              "Contemporary artwork",
              "High-quality materials",
              "Open public spaces",
              "Indoor-outdoor living",
            ].map((label, i) => (
              <div key={i} className="adg-c-overview-item">
                <span className="adg-c-overview-icon">
                  <Check size={16} strokeWidth={2.5} />
                </span>
                <span className="adg-c-overview-label">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPLORA I – HOMES AT SEA, PART 2 ───────────────────────── */}
      <section
        className="Asc-video-section"
        id="Asc-video-homes-at-sea"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="Asc-container">
          <div className="Asc-section-header">
            <h2 className="Asc-h2">Explore the Homes at Sea Experience</h2>

            <div className="Asc-accent-line"></div>

            <p className="Asc-video-intro">
              Discover the thoughtfully designed accommodations aboard
              <strong> Explora I</strong>, where every ocean-front suite,
              penthouse, and residence is inspired by refined European elegance,
              spacious comfort, and the feeling of being truly at home while
              exploring the world's oceans.
            </p>
          </div>

          <div className="Asc-video-wrapper">
            <div className="Asc-video-frame">
              <iframe
                src="https://www.youtube.com/embed/5E8X-pYnDvM"
                title="EXPLORA I - Homes at Sea, Part 2 | Explora Journeys"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* ── SUITES & ACCOMMODATIONS ───────────────────────────────────── */}
      <section className="dmg-info-section" id="suites-accommodations">
        <div className="dmg-info-container">
          <div className="dmg-info-header">
            <h2 className="dmg-info-title">Suites &amp; Accommodations</h2>
            <div className="dmg-info-accent"></div>
          </div>

          <div className="dmg-info-grid">
            <div className="dmg-info-content">
              <p className="dmg-info-lead">
                One of <strong>Explora I's</strong> greatest strengths is its
                accommodations. Every guest enjoys an oceanfront suite with a
                private terrace, creating a spacious and comfortable retreat
                throughout the voyage.
              </p>

              <div className="dmg-info-features dmg-info-features-scrollable">
                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">Spacious Layout</h3>
                    <p className="dmg-info-feature-desc">
                      Suites are significantly larger than those found on many
                      premium cruise ships, providing room to truly relax.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">Private Terrace</h3>
                    <p className="dmg-info-feature-desc">
                      Enjoy breakfast, sunsets, or peaceful moments overlooking
                      the ocean from your own furnished outdoor space.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">Elegant Bathroom</h3>
                    <p className="dmg-info-feature-desc">
                      Premium finishes, spacious walk-in showers, heated floors
                      in select categories, and luxury amenities elevate the
                      experience.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Comfortable Living Space
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Separate sitting areas make every suite feel more like a
                      luxury residence than a traditional cruise cabin.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="dmg-info-media">
              <div className="dmg-media-wrapper">
                <img
                  src={LuxuryOceanfrontSuites}
                  alt="Luxury oceanfront suite with a private terrace aboard Explora I"
                  className="dmg-media-img"
                  style={{ height: "650px" }}
                />
                <div className="dmg-media-overlay"></div>

                <div className="dmg-media-badge">
                  <span>Oceanfront Suites with Private Terraces</span>
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
            The generous amount of space is one of the reasons many guests
            choose Explora I, offering a level of comfort that feels more like a
            luxury boutique hotel than a traditional cruise ship.
          </p>
        </div>
      </section>

      {/* DINING EXPERIENCE & SERVICE */}
      <section className="azs-suites-section" id="azs-dining-service">
        <div className="azs-container">
          <div className="azs-section-header">
            <h2 className="azs-section-title">
              Dining Experience &amp; <br /> Exceptional Service
            </h2>
            <div className="azs-section-accent"></div>
            <p className="azs-section-subtitle">
              Outstanding dining and personalized service are two of the
              defining features that make sailing aboard Explora I such a
              memorable luxury experience.
            </p>
          </div>

          <div className="azs-suites-grid">
            {/* Dining Card */}
            <div className="azs-suites-card azs-seabourn-suites">
              <div className="azs-suites-image-wrap">
                <img
                  src={ExploraDining}
                  alt="Elegant dining venue aboard Explora I"
                  className="azs-suites-img"
                />
                <span className="azs-suites-image-badge">
                  Diverse Culinary Experiences
                </span>
              </div>

              <div className="azs-suites-content">
                <div className="azs-suites-card-header">
                  <div className="azs-suites-icon-circle">
                    <Utensils size={24} className="azs-suites-icon" />
                  </div>
                  <h3 className="azs-suites-title">Dining Experience</h3>
                </div>

                <p className="azs-suites-intro">
                  Dining is one of the highlights of sailing on Explora I.
                  Rather than relying on a single main dining room, guests can
                  enjoy several restaurants showcasing a wide variety of
                  cuisines and dining styles.
                </p>

                <div className="azs-suites-body">
                  <h4 className="azs-suites-group-title">
                    Dining options include:
                  </h4>

                  <ul className="azs-suites-list">
                    {[
                      "Mediterranean cuisine",
                      "Asian-inspired specialties",
                      "International favorites",
                      "Casual poolside dining",
                      "Elegant fine dining",
                      "Artisan cafés",
                      "Stylish cocktail lounges",
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
                      Meals are beautifully presented using premium ingredients,
                      while
                      <strong> Anthology</strong>, the ship's signature
                      specialty restaurant, offers carefully crafted tasting
                      menus inspired by celebrated culinary traditions.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Card */}
            <div className="azs-suites-card azs-azamara-suites">
              <div className="azs-suites-image-wrap">
                <img
                  src={ExploraService}
                  alt="Crew member welcoming guests aboard Explora I"
                  className="azs-suites-img"
                />
                <span className="azs-suites-image-badge">
                  Personalized Hospitality
                </span>
              </div>

              <div className="azs-suites-content">
                <div className="azs-suites-card-header">
                  <div className="azs-suites-icon-circle">
                    <HeartHandshake size={24} className="azs-suites-icon" />
                  </div>
                  <h3 className="azs-suites-title">Service</h3>
                </div>

                <p className="azs-suites-intro">
                  Luxury cruising is defined by exceptional service, and Explora
                  I delivers a warm, highly personalized experience throughout
                  every voyage.
                </p>

                <div className="azs-suites-body">
                  <h4 className="azs-suites-group-title">
                    Crew members are known for:
                  </h4>

                  <ul className="azs-suites-list">
                    {[
                      "Warm hospitality",
                      "Professionalism",
                      "Attention to detail",
                      "Remembering guest preferences",
                      "Prompt assistance",
                      "Genuine friendliness",
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
                      The service feels genuine, attentive, and welcoming rather
                      than formal or scripted, helping guests feel at home from
                      the moment they step aboard.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PUBLIC SPACES ────────────────────────────────────────────── */}
      <section
        className="Ejsc-ent-section"
        id="Ejsc-public-spaces"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="Ejsc-container">
          <div className="Ejsc-section-header">
            <h2 className="Ejsc-section-title">Public Spaces</h2>
            <div className="Asc-accent-line"></div>
            <p className="Ejsc-section-subtitle">
              Explora I was intentionally designed to avoid the crowded feeling
              found on many larger ships. Every public area encourages guests to
              slow down and enjoy the journey.
            </p>
          </div>

          <div className="Ejsc-ent-grid">
            {publicSpaceProfiles.map((item, i) => (
              <div
                key={i}
                className={`Ejsc-ent-card ${
                  i % 2 === 0 ? "Ejsc-explora-card" : "Ejsc-seabourn-card"
                }`}
              >
                <div className="Ejsc-card-header">
                  <div className="Ejsc-card-icon-wrap">{item.icon}</div>
                  <h3 className="Ejsc-card-title">{item.title}</h3>
                </div>

                <p className="Ejsc-card-intro">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ DESTINATIONS ═══════════════════════════════ */}
      <section className="dac-families-section">
        <div className="dac-families-container">
          <div className="dac-families-grid">
            {/* Left Content Column */}
            <div className="dac-families-left">
              <div className="dac-families-heading-wrap">
                <h2 className="dac-families-title">Destinations</h2>
                <div className="dac-families-accent"></div>
              </div>

              <div className="dac-families-features">
                {[
                  {
                    title: "Mediterranean",
                    desc: "Explore iconic coastal cities, picturesque villages, and world-famous cultural landmarks.",
                  },
                  {
                    title: "Northern Europe",
                    desc: "Discover majestic fjords, historic capitals, and charming seaside towns.",
                  },
                  {
                    title: "Caribbean",
                    desc: "Relax on beautiful island escapes with crystal-clear waters and white-sand beaches.",
                  },
                  {
                    title: "North America",
                    desc: "Visit vibrant coastal destinations rich in history, culture, and natural beauty.",
                  },
                  {
                    title: "Middle East",
                    desc: "Experience fascinating traditions, remarkable architecture, and modern luxury.",
                  },
                  {
                    title: "Transatlantic Crossings",
                    desc: "Enjoy leisurely days at sea with uninterrupted ocean views and exceptional onboard experiences.",
                  },
                ].map((feat, idx) => (
                  <div key={idx} className="dac-families-feature-item">
                    <div className="dac-families-feature-icon-box">
                      <Check size={18} strokeWidth={3} />
                    </div>

                    <div className="dac-families-feature-texts">
                      <h3 className="dac-families-feature-title">
                        {feat.title}
                      </h3>
                      <p className="dac-families-feature-desc">{feat.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Images Column */}
            <div className="dac-families-right">
              <div className="dac-families-image-wrapper">
                <div className="dac-families-img-card dac-families-img-card--primary">
                  <img
                    src={ExploraDestination}
                    alt="Explora I sailing through the Mediterranean"
                    className="dac-families-img"
                  />
                  <div className="dac-families-img-caption">
                    Mediterranean Voyages
                  </div>
                </div>

                <div className="dac-families-img-card dac-families-img-card--secondary">
                  <img
                    src={ExploraDestination2}
                    alt="Explora I visiting a Northern Europe destination"
                    className="dac-families-img"
                  />
                  <div className="dac-families-img-caption">
                    Extraordinary Destinations
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WELLNESS & SPA / ENTERTAINMENT */}
      <section
        className="azs-entertainment-section"
        id="azs-wellness-entertainment"
      >
        <div className="azs-container">
          <div className="azs-section-header">
            <h2 className="azs-section-title">Wellness &amp; Spa</h2>
            <div className="azs-section-accent"></div>

            <p className="azs-section-subtitle">
              Wellness is an important part of the Explora I experience, with
              thoughtfully designed spaces and experiences that encourage
              relaxation, rejuvenation, and a healthy lifestyle throughout the
              voyage.
            </p>
          </div>

          <div className="azs-entertainment-grid">
            {/* Wellness Card */}
            <div className="azs-entertainment-card azs-azamara-ent">
              <div className="azs-ent-header">
                <div className="azs-ent-icon-circle">
                  <Heart size={24} className="azs-ent-icon" />
                </div>

                <h3 className="azs-ent-title">Wellness &amp; Spa</h3>
              </div>

              <p className="azs-ent-intro">
                Wellness is woven into everyday life aboard Explora I, allowing
                guests to recharge while enjoying luxurious surroundings at sea.
              </p>

              <div className="azs-ent-body">
                <ul className="azs-ent-list">
                  {[
                    "Luxury spa treatments",
                    "Ocean-view fitness center",
                    "Yoga classes",
                    "Relaxation lounges",
                    "Wellness therapies",
                    "Healthy dining options",
                  ].map((item, idx) => (
                    <li key={idx} className="azs-ent-list-item">
                      <div className="azs-ent-list-icon-wrapper">
                        <Check size={14} className="azs-ent-list-icon" />
                      </div>

                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="azs-ent-divider"></div>

                <div className="azs-ent-highlight-box azs-azamara-ent-highlight">
                  <p className="azs-ent-highlight-text">
                    Rather than being limited to the spa, wellness is integrated
                    throughout the ship, creating a relaxing atmosphere from
                    morning until evening.
                  </p>
                </div>
              </div>
            </div>

            {/* Entertainment Card */}
            <div className="azs-entertainment-card azs-seabourn-ent">
              <div className="azs-ent-header">
                <div className="azs-ent-icon-circle">
                  <Music size={24} className="azs-ent-icon" />
                </div>

                <h3 className="azs-ent-title">Entertainment</h3>
              </div>

              <p className="azs-ent-intro">
                Entertainment aboard Explora I is sophisticated and understated,
                perfectly complementing the ship's relaxed luxury atmosphere.
              </p>

              <div className="azs-ent-body">
                <ul className="azs-ent-list">
                  {[
                    "Live music",
                    "Piano performances",
                    "Jazz",
                    "Cultural presentations",
                    "Cocktail lounges",
                    "Evening performances",
                  ].map((item, idx) => (
                    <li key={idx} className="azs-ent-list-item">
                      <div className="azs-ent-list-icon-wrapper">
                        <Music size={14} className="azs-ent-list-icon" />
                      </div>

                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="azs-ent-divider"></div>

                <div className="azs-ent-highlight-box azs-seabourn-ent-highlight">
                  <p className="azs-ent-highlight-text">
                    Instead of Broadway-style productions, guests enjoy elegant
                    evenings filled with live performances, refined lounges, and
                    a relaxed ambiance that matches the overall character of the
                    ship.
                  </p>
                </div>
              </div>
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
              Explora I includes many amenities that are often additional costs
              on other cruise lines, helping simplify the onboard experience
              while enhancing overall value.
            </p>
          </div>

          <div className="adg-split-layout">
            <div className="adg-content-card-side">
              <img
                src={LuxuryOceanfrontPool}
                alt="Included amenities aboard Explora I"
                className="adg-side-image"
                style={{ height: "65vh" }}
              />

              <div className="adg-info-card">
                <div className="adg-card-meta">
                  <Sparkles size={28} />
                  <span className="adg-meta-label">
                    Value Built Into Every Fare
                  </span>
                </div>

                <p className="adg-card-lead">
                  Depending on your booking, your fare may include suite
                  accommodations, dining, Wi-Fi, wellness facilities, and more.
                </p>
              </div>
            </div>

            <div className="adg-list-side">
              {includedItems.map((item, i) => (
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

      {/* ── WHO WILL LOVE / WHO MAY PREFER ANOTHER LINE ─────────────── */}
      <section className="Asc-section Asc-bg-white" id="Asc-who">
        <div className="Asc-container">
          <div className="Asc-section-header">
            <h2 className="Asc-h2">Who Will Love Explora I?</h2>
            <div className="Asc-accent-line"></div>
            <p className="Asc-faq-intro">
              Explora I is an excellent choice for travelers who appreciate
              modern luxury — couples, retirees, food lovers, and experienced
              luxury travelers are especially likely to enjoy the ship.
            </p>
          </div>

          <div className="Asc-who-grid">
            <div className="Asc-who-card Asc-who-yes">
              <h3 className="Asc-who-title">
                You Will Appreciate Explora I If You:
              </h3>
              <ul className="Asc-who-list">
                {[
                  "Modern luxury",
                  "Spacious suites",
                  "Gourmet dining",
                  "Quiet surroundings",
                  "Personalized service",
                  "Wellness experiences",
                  "Destination-focused itineraries",
                  "Boutique hotel-style experiences",
                ].map((item, i) => (
                  <li key={i}>
                    <Check size={16} className="Asc-icon-green" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="Asc-who-card Asc-who-no">
              <h3 className="Asc-who-title">
                You May Prefer Another Cruise Line If You Want:
              </h3>
              <ul className="Asc-who-list">
                {[
                  "Water slides",
                  "Large casinos",
                  "Character entertainment",
                  "Broadway productions",
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
              margin: "40px auto 0",
              textAlign: "center",
            }}
          >
            Families with young children who prioritize kids' clubs and themed
            entertainment may find other cruise lines more suitable.
          </p>
        </div>
      </section>

      {/* ── IS EXPLORA I WORTH IT? ───────────────────────────────────── */}
      <section className="adg-c-section adg-c-bg-soft" id="adg-c-worth-it">
        <div className="adg-c-container">
          <div className="adg-c-section-header">
            <h2 className="adg-c-h2">Is Explora I Worth It?</h2>
            <div className="adg-c-accent-line"></div>
            <p className="Asc-section-intro">
              Explora I commands premium pricing, but it also delivers a premium
              experience. Rather than measuring value by the number of
              attractions onboard, Explora I delivers value through the quality
              of every experience.
            </p>
          </div>

          <div className="adg-c-overview-layout">
            <div className="adg-c-overview-icons">
              {[
                "Spacious accommodations",
                "High-quality dining",
                "Personalized hospitality",
                "Elegant surroundings",
                "Inclusive amenities",
                "Relaxed luxury",
                "Thoughtfully designed itineraries",
              ].map((label, i) => (
                <div key={i} className="adg-c-overview-item">
                  <span className="adg-c-overview-icon">
                    <Check size={16} strokeWidth={2.5} />
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
                    For travelers seeking a peaceful and sophisticated vacation,
                    Explora I represents one of the strongest offerings in
                    luxury cruising.
                  </p>
                </div>
              </div>

              <div className="adg-c-overview-image-wrap">
                <img
                  src={ExploraShip}
                  alt="Explora I luxury cruise ship at sea"
                  className="adg-c-overview-img"
                />
                <div className="adg-c-overview-img-overlay">
                  <span className="adg-c-overview-img-label">
                    Premium Pricing, Premium Experience
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ENTERTAINMENT & ENRICHMENT ───────────────────────── */}
      <section
        className="Asc-video-section"
        id="Asc-video-entertainment"
        style={{ backgroundColor: "var(--bg-white)" }}
      >
        <div className="Asc-container">
          <div className="Asc-section-header">
            <h2 className="Asc-h2">
              Entertainment & Enrichment Aboard Explora I
            </h2>

            <div className="Asc-accent-line"></div>

            <p className="Asc-video-intro">
              Discover how Explora I offers a sophisticated approach to onboard
              entertainment, combining live performances, cultural enrichment,
              and elegant social spaces to create memorable evenings at sea.
            </p>
          </div>

          <div className="Asc-video-wrapper">
            <div className="Asc-video-frame">
              <iframe
                src="https://www.youtube.com/embed/t-qhsu2s3h8"
                title="EXPLORA I - Entertainment and Enrichment | Explora Journeys"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL VERDICT */}
      <section
        className="Asc-section Asc-bg-white"
        id="Asc-verdict"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="Asc-container">
          <div className="Asc-section-header margin-large">
            <h2 className="Asc-h2">Pros &amp; Cons</h2>

            <div className="Asc-accent-line"></div>

            <p className="Asc-verdict-intro">
              For travelers who appreciate refined luxury, these "limitations"
              are often part of the ship's appeal.
            </p>
          </div>

          <div className="Asc-verdict-grid">
            {/* Pros Column */}
            <div className="Asc-verdict-card Asc-verdict-azamara">
              <h3 className="Asc-verdict-card-title">Pros</h3>

              <ul className="Asc-verdict-list">
                {[
                  "Spacious all-suite accommodations",
                  "Beautiful contemporary design",
                  "Outstanding dining",
                  "Excellent personalized service",
                  "Relaxed atmosphere",
                  "Multiple pools and outdoor spaces",
                  "Wellness-focused experience",
                  "Longer destination stays",
                ].map((item, i) => (
                  <li key={i} className="Asc-verdict-item">
                    <Check size={18} className="Asc-verdict-icon" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Cons Column */}
            <div className="Asc-verdict-card Asc-verdict-seabourn">
              <h3 className="Asc-verdict-card-title">Cons</h3>

              <ul className="Asc-verdict-list">
                {[
                  "Limited nightlife compared to mainstream cruise lines",
                  "Few activities for young children",
                  "Premium pricing",
                  "Entertainment is intentionally understated",
                  "Not designed for travelers seeking constant onboard excitement",
                ].map((item, i) => (
                  <li key={i} className="Asc-verdict-item">
                    <Check size={18} className="Asc-verdict-icon" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="Asc-verdict-footer-box">
            <p className="Asc-verdict-footer-text">
              For many luxury travelers, the ideal answer comes down to: “What
              type of luxury experience do you want to remember most?”
            </p>
          </div>
        </div>
      </section>

      {/* ── WHY BOOK THROUGH A LUXURY TRAVEL ADVISOR? ────────────────────────── */}
      <section className="ugt-advantage-section" id="luxury-travel-advisor">
        <div className="ugt-advantage-container">
          <div className="ugt-advantage-header">
            <span className="ugt-advantage-eyebrow">
              Expert Vacation Planning
            </span>

            <h2 className="ugt-advantage-title">
              Why Book Through a Luxury Travel Advisor?
            </h2>

            <div className="Asc-accent-line"></div>

            <p className="ugt-advantage-intro">
              Booking a luxury cruise involves much more than selecting a
              sailing date. An experienced travel advisor helps you make
              informed decisions, simplify the planning process, and maximize
              the value of your vacation.
            </p>
          </div>

          <div className="ugt-advantage-grid">
            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <Compass size={28} strokeWidth={1.5} />
              </div>
              <h4 className="ugt-card-title">Choose the Right Itinerary</h4>
              <p className="ugt-card-desc">
                Find the itinerary that best matches your interests, travel
                style, preferred destinations, and ideal voyage length.
              </p>
            </div>

            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <Award size={28} strokeWidth={1.5} />
              </div>
              <h4 className="ugt-card-title">Select the Best Suite Category</h4>
              <p className="ugt-card-desc">
                Receive expert guidance on suite categories, locations, layouts,
                and amenities to ensure the best onboard experience.
              </p>
            </div>

            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <Sparkles size={28} strokeWidth={1.5} />
              </div>
              <h4 className="ugt-card-title">Compare Available Promotions</h4>
              <p className="ugt-card-desc">
                Identify current offers, added amenities, onboard credits, and
                other opportunities that increase the overall value of your
                cruise.
              </p>
            </div>

            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <Plane size={28} strokeWidth={1.5} />
              </div>
              <h4 className="ugt-card-title">Arrange Flights & Hotels</h4>
              <p className="ugt-card-desc">
                Coordinate flights, pre- and post-cruise hotel stays, and other
                travel arrangements for a seamless vacation.
              </p>
            </div>

            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <MapPin size={28} strokeWidth={1.5} />
              </div>
              <h4 className="ugt-card-title">Coordinate Transfers</h4>
              <p className="ugt-card-desc">
                Organize airport transfers, port transportation, and other
                logistics so every part of your journey runs smoothly.
              </p>
            </div>

            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <Camera size={28} strokeWidth={1.5} />
              </div>
              <h4 className="ugt-card-title">Recommend Shore Experiences</h4>
              <p className="ugt-card-desc">
                Discover memorable excursions and destination experiences that
                match your interests while making the most of every port.
              </p>
            </div>
          </div>

          <p
            className="ugt-advantage-intro"
            style={{
              maxWidth: "900px",
              margin: "50px auto 0",
              textAlign: "center",
            }}
          >
            Expert guidance helps ensure every part of your journey is carefully
            planned, allowing you to relax and enjoy an exceptional luxury
            cruise experience.
          </p>
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
              I is the right luxury cruise ship for them.
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
            alt="Explora I luxury cruise ship"
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
                    Explora I successfully delivers on its promise of redefining
                    luxury cruising. Instead of focusing on bigger ships or more
                    attractions, it creates an atmosphere centered on space,
                    comfort, wellness, exceptional dining, and personalized
                    hospitality.
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
                        From its beautifully designed suites and elegant public
                        spaces to its immersive itineraries and attentive
                        service, every detail feels intentional.
                      </p>
                      <br />
                      <p className="Asc-help-intro">
                        If your idea of luxury is relaxing in a spacious
                        oceanfront suite, enjoying world-class cuisine, and
                        exploring extraordinary destinations at a comfortable
                        pace, Explora I is one of the finest luxury cruise ships
                        sailing today.
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
                      Start Planning Your Explora I Journey
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
                      "Determine whether Explora I matches your travel style",
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
                      label: "Explora II Review",
                      path: "/explora-ii-review",
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
                      label: "Is Anthology Worth It?",
                      path: "/is-anthology-worth-it",
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

export default ExploraIReview;
