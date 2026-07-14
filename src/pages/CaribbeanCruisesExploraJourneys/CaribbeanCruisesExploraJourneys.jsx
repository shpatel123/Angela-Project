import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Users,
  MapPin,
  Award,
  Check,
  X,
  Minus,
  Plus,
  ArrowRight,
  Star,
  Sparkles,
  Ship,
  Sun,
  Flower2,
  Leaf,
  Snowflake,
  Compass,
  Mountain,
  UtensilsCrossed,
  MapPinned,
  Home,
  Hotel,
  Plane,
  BadgePercent,
  ShieldCheck,
  Footprints,
  CalendarClock,
  Waves,
  Palmtree,
  Anchor,
} from "lucide-react";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela2.jpeg";

import HeroImage1 from "../../assets/CaribbeanCruisesExploraJourneys/explora-caribbean-turquoise-water.jpg";
import HeroImage2 from "../../assets/CaribbeanCruisesExploraJourneys/explora-caribbean-beach-aerial.jpg";
import HeroImage3 from "../../assets/WhichMediterraneanItineraryIsBest/explora-II-mediterranean-coastal-cruise-view.jpg";
import ExploraPool from "../../assets/CaribbeanCruisesExploraJourneys/explora-beaches.jpg";
import ExploraPool1 from "../../assets/CaribbeanCruisesExploraJourneys/Regent-Seven-Seas-Cruises.jpg";
import CaribbeanCoastlineImage from "../../assets/CaribbeanCruisesExploraJourneys/Adventure.jpg";
import LifeOnboardImage from "../../assets/CaribbeanCruisesExploraJourneys/WellnessSea.jpg";
import BeautifulBeachs from "../../assets/CaribbeanCruisesExploraJourneys/Beautiful-Beachs.jpg";
import CTAImage from "../../assets/CaribbeanCruisesExploraJourneys/CtaImage.png";

import EasternCaribbeanImg from "../../assets/CaribbeanCruisesExploraJourneys/st-thomas-eastern-caribbean.jpg";
import WesternCaribbeanImg from "../../assets/CaribbeanCruisesExploraJourneys/roatan-western-caribbean-reef.jpg";
import SouthernCaribbeanImg from "../../assets/CaribbeanCruisesExploraJourneys/curacao-southern-caribbean-architecture.jpg";
import PrivateIslandImg from "../../assets/CaribbeanCruisesExploraJourneys/private-exclusive-caribbean-island.jpg";

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
      "@id":
        "https://tripsandships.com/caribbean-cruises-on-explora-journeys/#webpage",
      name: "Caribbean Cruises on Explora Journeys",
      url: "https://tripsandships.com/caribbean-cruises-on-explora-journeys",
      description:
        "Discover luxury Caribbean cruises on Explora Journeys. Explore pristine beaches, tropical islands, exclusive destinations, onboard luxury, and why Explora offers one of the finest Caribbean cruise experiences.",
    },
    {
      "@type": "Article",
      "@id":
        "https://tripsandships.com/caribbean-cruises-on-explora-journeys/#article",
      headline: "Caribbean Cruises on Explora Journeys",
      description:
        "A complete guide to cruising the Caribbean with Explora Journeys, covering destinations, seasonal highlights, beaches, dining, the best time to sail, and who these voyages suit best.",
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
        "https://tripsandships.com/caribbean-cruises-on-explora-journeys/#breadcrumb",
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
          name: "Caribbean Cruises on Explora Journeys",
          item: "https://tripsandships.com/caribbean-cruises-on-explora-journeys",
        },
      ],
    },
    {
      "@type": "TouristTrip",
      "@id":
        "https://tripsandships.com/caribbean-cruises-on-explora-journeys/#touristtrip",
      name: "Caribbean Cruise with Explora Journeys",
      touristType: "Luxury travelers, couples, retirees, solo travelers",
      itinerary: {
        "@type": "ItemList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Eastern Caribbean" },
          { "@type": "ListItem", position: 2, name: "Western Caribbean" },
          { "@type": "ListItem", position: 3, name: "Southern Caribbean" },
          {
            "@type": "ListItem",
            position: 4,
            name: "Private & Exclusive Destinations",
          },
        ],
      },
    },
    {
      "@type": "Cruise",
      "@id":
        "https://tripsandships.com/caribbean-cruises-on-explora-journeys/#cruise",
      name: "Explora Journeys Caribbean Cruise",
      provider: {
        "@type": "TravelAgency",
        name: "Trips & Ships Luxury Travel",
      },
      departurePort: "Various Caribbean Ports",
      description:
        "Luxury Caribbean itineraries featuring longer port visits, curated shore experiences, and refined cuisine aboard an all-suite ship.",
    },
    {
      "@type": "Service",
      "@id":
        "https://tripsandships.com/caribbean-cruises-on-explora-journeys/#service",
      serviceType: "Luxury Cruise Vacation Planning & Booking Support",
      provider: {
        "@type": "TravelAgency",
        name: "Trips & Ships Luxury Travel",
      },
      areaServed: "Worldwide",
      description:
        "Personalized planning support for Explora Journeys Caribbean sailings, including itinerary selection, suite categories, and shore experiences.",
    },
    {
      "@type": "Review",
      "@id":
        "https://tripsandships.com/caribbean-cruises-on-explora-journeys/#review",
      itemReviewed: {
        "@type": "Product",
        name: "Explora Journeys Caribbean Cruise",
      },
      author: {
        "@type": "Person",
        name: "Angela Hughes",
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      reviewBody:
        "Explora Journeys offers one of the most relaxed, refined ways to experience the Caribbean, combining longer port visits with beach-focused excursions and impeccable service.",
    },
    {
      "@type": "ItemList",
      "@id":
        "https://tripsandships.com/caribbean-cruises-on-explora-journeys/#itemlist",
      name: "What This Caribbean Cruises on Explora Journeys Guide Covers",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Why Choose Explora Journeys for the Caribbean",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Discover the Caribbean Islands",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Beautiful Beaches Everywhere",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Shore Experiences & Caribbean Dining",
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Life Onboard Between Islands",
        },
        {
          "@type": "ListItem",
          position: 6,
          name: "Best Time to Cruise the Caribbean",
        },
        {
          "@type": "ListItem",
          position: 7,
          name: "Tips for Planning Your Caribbean Cruise",
        },
        {
          "@type": "ListItem",
          position: 8,
          name: "Who Will Love an Explora Caribbean Cruise?",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id":
        "https://tripsandships.com/caribbean-cruises-on-explora-journeys/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Where does Explora Journeys cruise in the Caribbean?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Depending on the itinerary, voyages may visit the Eastern, Western, and Southern Caribbean, including destinations such as St. Thomas, Aruba, Barbados, Cozumel, Antigua, and Grand Cayman.",
          },
        },
        {
          "@type": "Question",
          name: "Are Caribbean cruises suitable for first-time cruisers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Calm waters, beautiful beaches, and convenient island hopping make the Caribbean an excellent introduction to cruising.",
          },
        },
        {
          "@type": "Question",
          name: "What is included on an Explora Caribbean cruise?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Your fare typically includes your oceanfront suite, gourmet dining, Wi-Fi, entertainment, wellness facilities, fitness classes, and many onboard amenities.",
          },
        },
        {
          "@type": "Question",
          name: "Are shore excursions included?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most excursions are optional and can be booked separately to customize your vacation.",
          },
        },
        {
          "@type": "Question",
          name: "Is Explora good for beach lovers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. Caribbean itineraries feature some of the world's most beautiful beaches and crystal-clear waters.",
          },
        },
        {
          "@type": "Question",
          name: "Is Explora suitable for couples?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Romantic suites, exceptional dining, wellness experiences, and peaceful surroundings make it ideal for couples and honeymooners.",
          },
        },
        {
          "@type": "Question",
          name: "What should I pack?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Swimwear, lightweight clothing, sandals, sun protection, sunglasses, and smart casual evening attire are recommended.",
          },
        },
        {
          "@type": "Question",
          name: "When is the best time to cruise the Caribbean?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Winter and spring are the most popular seasons, although the Caribbean offers enjoyable cruising year-round.",
          },
        },
        {
          "@type": "Question",
          name: "How long are Caribbean cruises?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Explora offers a variety of itineraries ranging from approximately one week to extended luxury voyages.",
          },
        },
        {
          "@type": "Question",
          name: "Should I use a travel advisor?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. A luxury travel advisor can help you choose the best itinerary, maximize promotions, and coordinate every aspect of your Caribbean vacation.",
          },
        },
        {
          "@type": "Question",
          name: "Which ports are used as the main homeports for Explora in the Caribbean?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Explora Journeys' Caribbean cruises depart from major easily accessible ports including Miami (Florida), Bridgetown (Barbados), and San Juan (Puerto Rico).",
          },
        },
        {
          "@type": "Question",
          name: "Does Explora visit Ocean Cay MSC Marine Reserve in the Bahamas?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Select Caribbean and Bahamas sailings include stops at Ocean Cay MSC Marine Reserve, where guests can enjoy a dedicated private marine sanctuary beach experience, water sports, and sunset events.",
          },
        },
        {
          "@type": "Question",
          name: "What makes Explora's Caribbean shore experiences unique?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Known as Destination Experiences, they are conducted in small groups and focus on authentic local encounters, such as private catamaran excursions, culinary beach experiences, and eco-tours of tropical reefs.",
          },
        },
        {
          "@type": "Question",
          name: "Is it easy to combine multiple Caribbean itineraries on Explora?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Explora's itineraries are designed to be modular and non-repeating. You can easily book back-to-back sailings (such as combining an Eastern and Western Caribbean itinerary) into a single 14-night voyage.",
          },
        },
        {
          "@type": "Question",
          name: "How does Explora Journeys handle the Caribbean hurricane season?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The official hurricane season runs from June 1 through November 30. Explora's modern vessels are equipped with state-of-the-art navigation and weather tracking systems, and the captain will alter routes to bypass storm systems and ensure maximum passenger safety and comfort.",
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
      q: "Where does Explora Journeys cruise in the Caribbean?",
      a: "Depending on the itinerary, voyages may visit the Eastern, Western, and Southern Caribbean, including destinations such as St. Thomas, Aruba, Barbados, Cozumel, Antigua, and Grand Cayman.",
    },
    {
      q: "Are Caribbean cruises suitable for first-time cruisers?",
      a: "Yes. Calm waters, beautiful beaches, and convenient island hopping make the Caribbean an excellent introduction to cruising.",
    },
    {
      q: "What is included on an Explora Caribbean cruise?",
      a: "Your fare typically includes your oceanfront suite, gourmet dining, Wi-Fi, entertainment, wellness facilities, fitness classes, and many onboard amenities.",
    },
    {
      q: "Are shore excursions included?",
      a: "Most excursions are optional and can be booked separately to customize your vacation.",
    },
    {
      q: "Is Explora good for beach lovers?",
      a: "Absolutely. Caribbean itineraries feature some of the world's most beautiful beaches and crystal-clear waters.",
    },
    {
      q: "Is Explora suitable for couples?",
      a: "Yes. Romantic suites, exceptional dining, wellness experiences, and peaceful surroundings make it ideal for couples and honeymooners.",
    },
    {
      q: "What should I pack?",
      a: "Swimwear, lightweight clothing, sandals, sun protection, sunglasses, and smart casual evening attire are recommended.",
    },
    {
      q: "When is the best time to cruise the Caribbean?",
      a: "Winter and spring are the most popular seasons, although the Caribbean offers enjoyable cruising year-round.",
    },
    {
      q: "How long are Caribbean cruises?",
      a: "Explora offers a variety of itineraries ranging from approximately one week to extended luxury voyages.",
    },
    {
      q: "Should I use a travel advisor?",
      a: "Yes. A luxury travel advisor can help you choose the best itinerary, maximize promotions, and coordinate every aspect of your Caribbean vacation.",
    },
    {
      q: "Which ports are used as the main homeports for Explora in the Caribbean?",
      a: "Explora Journeys' Caribbean cruises depart from major easily accessible ports including Miami (Florida), Bridgetown (Barbados), and San Juan (Puerto Rico).",
    },
    {
      q: "Does Explora visit Ocean Cay MSC Marine Reserve in the Bahamas?",
      a: "Yes. Select Caribbean and Bahamas sailings include stops at Ocean Cay MSC Marine Reserve, where guests can enjoy a dedicated private marine sanctuary beach experience, water sports, and sunset events.",
    },
    {
      q: "What makes Explora's Caribbean shore experiences unique?",
      a: "Known as Destination Experiences, they are conducted in small groups and focus on authentic local encounters, such as private catamaran excursions, culinary beach experiences, and eco-tours of tropical reefs.",
    },
    {
      q: "Is it easy to combine multiple Caribbean itineraries on Explora?",
      a: "Yes. Explora's itineraries are designed to be modular and non-repeating. You can easily book back-to-back sailings (such as combining an Eastern and Western Caribbean itinerary) into a single 14-night voyage.",
    },
    {
      q: "How does Explora Journeys handle the Caribbean hurricane season?",
      a: "The official hurricane season runs from June 1 through November 30. Explora's modern vessels are equipped with state-of-the-art navigation and weather tracking systems, and the captain will alter routes to bypass storm systems and ensure maximum passenger safety and comfort.",
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

/* ── Caribbean Destinations ───────────────────────────────────────── */
const caribbeanDestinations = [
  {
    id: "eastern",
    title: "Eastern Caribbean",
    badge: "Eastern",
    icon: MapPinned,
    image: EasternCaribbeanImg,

    desc: "Known for dramatic coastlines and crystal-clear waters, the Eastern Caribbean combines beautiful beaches with colonial history and shopping.",

    columns: [
      {
        label: "Popular Ports May Include:",
        items: [
          "St. Thomas",
          "St. Maarten",
          "Antigua",
          "Tortola",
          "Puerto Rico",
        ],
      },
    ],

    themeLabel: "Beaches & Colonial Charm",
    themeText:
      "These islands pair beautiful beaches with colonial history, shopping, and excellent snorkeling.",
  },

  {
    id: "western",
    title: "Western Caribbean",
    badge: "Western",
    icon: Mountain,
    image: WesternCaribbeanImg,

    desc: "Perfect for travelers seeking nature and adventure, with coral reefs, tropical forests, and rich cultural experiences.",

    columns: [
      {
        label: "Popular Ports May Include:",
        items: ["Cozumel", "Belize", "Roatán", "Grand Cayman", "Jamaica"],
      },
    ],

    themeLabel: "Nature & Adventure",
    themeText:
      "Visitors enjoy coral reefs, tropical forests, wildlife encounters, and rich cultural experiences.",
  },

  {
    id: "southern",
    title: "Southern Caribbean",
    badge: "Southern",
    icon: Waves,
    image: SouthernCaribbeanImg,

    desc: "Often considered the most scenic part of the region, famous for colorful architecture, calm waters, and exceptional diving.",

    columns: [
      {
        label: "Popular Ports May Include:",
        items: ["Aruba", "Curaçao", "Bonaire", "Barbados", "Grenada"],
      },
    ],

    themeLabel: "Scenic & Serene",
    themeText:
      "Southern Caribbean islands are famous for colorful architecture, calm waters, and exceptional diving.",
  },

  {
    id: "private",
    title: "Private & Exclusive",
    badge: "Private Islands",
    icon: Sparkles,
    image: PrivateIslandImg,

    desc: "Depending on the itinerary, guests may also visit exclusive islands or secluded ports that offer a more intimate Caribbean experience.",

    columns: [
      {
        label: "Guests May Enjoy:",
        items: [
          "Secluded beaches",
          "Beach clubs",
          "Fewer crowds",
          "Private cabanas",
          "Calm, clear water",
        ],
      },
    ],

    themeLabel: "An Intimate Escape",
    themeText:
      "These exclusive destinations offer a more intimate Caribbean experience away from larger crowds.",
  },
];

/* ── Main Component ──────────────────────────────────────────────── */
const CaribbeanCruisesOnExploraJourneys = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [readMore, setReadMore] = useState(false);
  const [activeRegion, setActiveRegion] = useState("eastern");
  const currentRegion =
    caribbeanDestinations.find((d) => d.id === activeRegion) ||
    caribbeanDestinations[0];

  const ActiveIcon = currentRegion.icon;

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
          Caribbean Cruises on Explora Journeys | Luxury Caribbean Cruise Guide
        </title>
        <meta name="title" content="Caribbean Cruises on Explora Journeys" />
        <meta
          name="description"
          content="Discover luxury Caribbean cruises on Explora Journeys. Explore pristine beaches, tropical islands, exclusive destinations, onboard luxury, and why Explora offers one of the finest Caribbean cruise experiences."
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
            Caribbean Cruises <br /> on Explora Journeys
          </h1>

          <p>
            The Caribbean has long been one of the world's most popular cruise
            destinations, offering turquoise waters, white-sand beaches,
            colorful cultures, and year-round sunshine.
          </p>

          <p>
            Rather than rushing from island to island, guests enjoy longer port
            stays, exceptional dining, elegant accommodations, and the freedom
            to experience each destination at their own pace.
          </p>

          {readMore && (
            <>
              <p>
                Whether you're seeking secluded beaches, vibrant island culture,
                snorkeling adventures, or simply uninterrupted relaxation,
                Explora Journeys delivers a sophisticated Caribbean escape.
              </p>

              <p>
                This guide covers every region, the onboard culinary program,
                shore experiences, the best time to sail, and whether an Explora
                Caribbean cruise is right for your next voyage.
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

      {/* ── WHY CHOOSE EXPLORA FOR THE CARIBBEAN ─────────────────── */}
      <section
        className="ugt-components-section"
        id="why-choose-explora"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="ugt-components-container">
          <div className="ugt-components-header">
            <h2 className="ugt-components-title">
              Why Choose Explora Journeys <br /> for the Caribbean?
            </h2>

            <div className="adg-c-accent-line"></div>
          </div>

          <div className="ugt-components-list">
            <div className="ugt-component-row">
              <div className="ugt-component-image-wrapper">
                <div className="ugt-component-image-container">
                  <img
                    src={ExploraPool}
                    alt="Onboard atmosphere aboard Explora Journeys in the Caribbean"
                    className="ugt-component-image"
                  />
                </div>
              </div>

              <div className="ugt-component-content">
                <p className="ugt-component-text">
                  The <strong>Caribbean</strong> is the perfect setting for
                  Explora's luxury travel philosophy. Instead of feeling like
                  you're on a floating resort packed with thousands of
                  passengers, Explora offers an experience that feels intimate,
                  refined, and peaceful.
                </p>

                <div className="ugt-questions-box">
                  <span className="ugt-questions-title">Guests Enjoy:</span>

                  <ul className="ugt-questions-list">
                    {[
                      "Spacious oceanfront suites",
                      "Private terraces on every suite",
                      "Boutique luxury atmosphere",
                      "Personalized service",
                      "Multiple gourmet restaurants",
                      "Wellness-focused experiences",
                      "Relaxed onboard lifestyle",
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
                  Every voyage is designed to help you experience each
                  destination at your own pace, rather than rushing between
                  ports.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SHORE EXPERIENCES & CARIBBEAN DINING ───────────────────────────────────────── */}
      <section
        className="Ejvs-pricing-section"
        id="shore-experiences"
        style={{ backgroundColor: "var(--bg-white)" }}
      >
        <div className="Ejvs-container">
          <div className="Ejvs-section-header">
            <h2 className="Ejvs-section-title">
              Shore Experiences &amp; Caribbean Dining
            </h2>

            <div className="Ejvs-section-accent"></div>

            <p className="Ejvs-section-subtitle">
              Explora Journeys curates shore experiences that showcase each
              island's unique character, while the onboard culinary program
              reflects the vibrant flavors of the region.
            </p>
          </div>

          <div className="Ejvs-pricing-grid">
            {/* Shore Experiences */}
            <div className="Ejvs-pricing-card Ejvs-explora-card">
              <div className="Ejvs-card-header">
                <div className="Ejvs-card-icon-wrap">
                  <Compass size={24} className="Ejvs-card-icon" />
                </div>

                <h3 className="Ejvs-card-title">Curated Shore Experiences</h3>
              </div>

              <p className="Ejvs-card-intro">
                Guests may also choose independent exploration or simply relax
                on the beach.
              </p>

              <ul className="Ejvs-feature-list">
                {[
                  "Catamaran cruises",
                  "Snorkeling adventures",
                  "Scuba diving",
                  "Historic walking tours",
                  "Rainforest hikes",
                  "Culinary experiences",
                  "Rum distillery visits",
                  "Wildlife encounters",
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
                  Choose organized excursions ashore or explore independently —
                  the choice is entirely yours.
                </p>
              </div>
            </div>

            {/* Caribbean Cuisine */}
            <div className="Ejvs-pricing-card Ejvs-seabourn-card">
              <div className="Ejvs-card-header">
                <div className="Ejvs-card-icon-wrap">
                  <UtensilsCrossed size={24} className="Ejvs-card-icon" />
                </div>

                <h3 className="Ejvs-card-title">
                  Dining Inspired by the Caribbean
                </h3>
              </div>

              <p className="Ejvs-card-intro">
                Whether dining casually by the pool or enjoying an elegant
                multi-course dinner, every meal becomes part of the luxury
                experience.
              </p>

              <ul className="Ejvs-feature-list">
                {[
                  "Fresh seafood",
                  "Tropical fruits",
                  "Caribbean spices",
                  "International cuisine",
                  "Premium steaks",
                  "Mediterranean dishes",
                  "Artisan desserts",
                  "Fine wines and handcrafted cocktails",
                ].map((item, i) => (
                  <li key={i} className="Ejvs-feature-item">
                    <Star size={14} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="Ejvs-card-highlight">
                <p>
                  Back onboard, Explora's internationally inspired restaurants
                  continue the culinary journey with refined cuisine and
                  exceptional service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── LIFE ONBOARD BETWEEN ISLANDS ────────────────────────────────────── */}
      <section className="adg-section" id="adg-life-onboard-caribbean">
        <div className="adg-container">
          <div className="adg-section-header" style={{ marginBottom: "60px" }}>
            <h2 className="adg-h2">Life Onboard Between Islands</h2>
            <div className="adg-accent-line"></div>

            <p
              className="Asc-body-text"
              style={{ textAlign: "center", marginTop: "15px" }}
            >
              Sea days become an important part of the Caribbean experience,
              allowing travelers to fully unwind between destinations.
            </p>
          </div>

          <div className="adg-split-layout">
            <div className="adg-content-card-side">
              <img
                src={ExploraPool1}
                alt="Infinity pool and ocean views aboard Explora Journeys in the Caribbean"
                className="adg-side-image"
                style={{ height: "55vh" }}
              />

              <div className="adg-info-card">
                <div className="adg-card-meta">
                  <Sparkles size={28} />
                  <span className="adg-meta-label">Relax &amp; Recharge</span>
                </div>

                <p className="adg-card-lead">
                  The relaxed rhythm between islands blends beach-day adventure
                  with luxurious relaxation, from morning swims to sunset
                  cocktails.
                </p>
              </div>
            </div>

            <div className="adg-list-side">
              {[
                "Infinity pools",
                "Ocean Wellness Spa",
                "Live music",
                "Yoga classes",
                "Gourmet dining",
                "Ocean-view lounges",
                "Quiet reading spaces",
                "Private terraces",
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

      {/* ── BEST TIME TO CRUISE THE CARIBBEAN ───────────────────────────────────────── */}
      <section
        className="adg-c-section adg-c-bg-white"
        id="best-time-to-cruise"
      >
        <div className="adg-c-container">
          <div className="adg-c-section-header">
            <span className="adg-c-eyebrow">Plan Your Sailing</span>

            <h2 className="adg-c-h2">Best Time to Cruise the Caribbean</h2>

            <div className="adg-c-accent-line"></div>

            <p className="Asc-section-intro">
              The Caribbean offers year-round cruising opportunities, with each
              season offering its own advantages.
            </p>
          </div>

          <div
            className="adg-c-venues-grid1"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            }}
          >
            {/* Winter */}
            <div className="adg-c-venue-card adg-c-venue-1">
              <div className="adg-c-venue-top">
                <span className="adg-c-venue-eyebrow">
                  <Snowflake
                    size={14}
                    style={{ display: "inline", marginRight: 6 }}
                  />
                  Peak Season
                </span>

                <h3 className="adg-c-venue-name">Winter</h3>

                <p className="adg-c-venue-highlight">Ideal Beach Conditions</p>
              </div>

              <ul className="adg-c-venue-list">
                {[
                  "Pleasant temperatures",
                  "Escape cold weather",
                  "Peak travel season",
                  "Ideal beach conditions",
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
                  Winter is the most popular season for escaping the cold in
                  favor of warm Caribbean sunshine.
                </p>
              </div>
            </div>

            {/* Spring */}
            <div className="adg-c-venue-card adg-c-venue-2">
              <div className="adg-c-venue-top">
                <span className="adg-c-venue-eyebrow">
                  <Flower2
                    size={14}
                    style={{ display: "inline", marginRight: 6 }}
                  />
                  Shoulder Season
                </span>

                <h3 className="adg-c-venue-name">Spring</h3>

                <p className="adg-c-venue-highlight">
                  Fewer Crowds, Great Snorkeling
                </p>
              </div>

              <ul className="adg-c-venue-list">
                {[
                  "Warm sunshine",
                  "Comfortable humidity",
                  "Excellent snorkeling",
                  "Fewer crowds than winter",
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
                  Spring often provides excellent weather with fewer crowds than
                  the winter peak.
                </p>
              </div>
            </div>

            {/* Summer */}
            <div className="adg-c-venue-card adg-c-venue-1">
              <div className="adg-c-venue-top">
                <span className="adg-c-venue-eyebrow">
                  <Sun
                    size={14}
                    style={{ display: "inline", marginRight: 6 }}
                  />
                  Tropical & Warm
                </span>

                <h3 className="adg-c-venue-name">Summer</h3>

                <p className="adg-c-venue-highlight">
                  Excellent Value & Warm Water
                </p>
              </div>

              <ul className="adg-c-venue-list">
                {[
                  "Tropical atmosphere",
                  "Excellent value on select sailings",
                  "Warm ocean temperatures",
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
                  Summer sailings often offer excellent value alongside warm,
                  swimmable ocean temperatures.
                </p>
              </div>
            </div>

            {/* Autumn */}
            <div className="adg-c-venue-card adg-c-venue-2">
              <div className="adg-c-venue-top">
                <span className="adg-c-venue-eyebrow">
                  <Leaf
                    size={14}
                    style={{ display: "inline", marginRight: 6 }}
                  />
                  Quiet Season
                </span>

                <h3 className="adg-c-venue-name">Autumn</h3>

                <p className="adg-c-venue-highlight">Relaxed & Uncrowded</p>
              </div>

              <ul className="adg-c-venue-list">
                {[
                  "Quieter travel season",
                  "Relaxed atmosphere",
                  "Beautiful tropical scenery",
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
                  Autumn offers a relaxed, quieter atmosphere with beautiful
                  tropical scenery throughout.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DISCOVER THE CARIBBEAN ISLANDS ───── */}
      <section className="luc-destinations-section" id="luc-destinations">
        <div className="luc-destinations-container">
          <div className="luc-destinations-header">
            <h2 className="luc-destinations-title">
              Discover the Caribbean Islands
            </h2>

            <div className="adg-c-accent-line"></div>

            <p className="luc-destinations-intro">
              Explora Journeys visits a variety of beautiful destinations
              throughout the Caribbean, with itineraries varying by season and
              voyage.
            </p>
          </div>

          {/* Layout */}
          <div className="luc-dest-layout">
            {/* Sidebar nav */}
            <nav className="luc-dest-nav">
              {caribbeanDestinations.map((item) => {
                const NavIcon = item.icon;
                const isActive = activeRegion === item.id;

                return (
                  <button
                    key={item.id}
                    className={`luc-dest-nav-btn ${
                      isActive ? "luc-dest-nav-btn--active" : ""
                    }`}
                    onClick={() => setActiveRegion(item.id)}
                  >
                    <div className="luc-dest-nav-icon-wrap">
                      <NavIcon size={16} strokeWidth={1.8} />
                    </div>

                    <span className="luc-dest-nav-label">{item.badge}</span>

                    {isActive && <div className="luc-dest-nav-pip"></div>}
                  </button>
                );
              })}
            </nav>

            {/* Detail panel */}
            <div className="luc-dest-panel" key={activeRegion}>
              {/* Image */}
              <div className="luc-dest-img-wrap">
                <img
                  src={currentRegion.image}
                  alt={currentRegion.title}
                  className="luc-dest-img"
                />

                <div className="luc-dest-img-overlay">
                  <div className="luc-dest-img-icon">
                    <ActiveIcon size={22} strokeWidth={1.6} />
                  </div>

                  <span className="luc-dest-img-title">
                    {currentRegion.title}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="luc-dest-panel-desc">{currentRegion.desc}</p>

              {/* Columns */}
              <div className="luc-dest-columns">
                {currentRegion.columns.map((col, cIdx) => (
                  <div key={cIdx} className="luc-dest-info-col">
                    <span className="luc-dest-info-label">{col.label}</span>

                    <div className="luc-dest-items-grid">
                      {col.items.map((item) => (
                        <div key={item} className="luc-dest-item">
                          <div className="luc-dest-item-dot"></div>

                          <span className="luc-dest-item-text">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Educational Theme / Highlight */}
              <div className="luc-dest-theme-box-note">
                <div className="luc-dest-theme-note-bar"></div>

                <div className="luc-dest-theme-note-content">
                  <span className="luc-dest-theme-note-label">
                    {currentRegion.themeLabel}
                  </span>

                  <p className="luc-dest-theme-note-text">
                    {currentRegion.themeText}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ADVENTURE & WELLNESS */}
      <section
        className="dve-winner-section"
        id="dve-adventure-wellness"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="dve-container">
          <div className="dve-section-header">
            <h2 className="dve-section-title">
              A Perfect Balance of Adventure &amp; Relaxation
            </h2>
            <div className="dve-section-accent"></div>
            <p className="dve-section-subtitle">
              Every Caribbean voyage with Explora Journeys offers the freedom to
              explore vibrant islands while enjoying luxurious moments of
              relaxation at sea.
            </p>
          </div>

          <div className="dve-winner-grid">
            {/* Adventure & Relaxation */}
            <div className="dve-winner-card dve-disney-winner">
              <div className="dve-winner-image-wrap">
                <img
                  src={CaribbeanCoastlineImage}
                  alt="Guests exploring Caribbean islands and relaxing aboard Explora Journeys"
                  className="dve-winner-img"
                />
                <span className="dve-winner-badge">Adventure Meets Luxury</span>
              </div>

              <div className="dve-winner-content">
                <h3 className="dve-winner-title">
                  A Perfect Balance of Adventure &amp; Relaxation
                </h3>

                <p className="dve-winner-intro">
                  One of the greatest advantages of a Caribbean cruise is the
                  freedom to shape each day around your own pace. Discover
                  tropical destinations, then return to the comfort of your
                  luxury ship for an afternoon of relaxation.
                </p>

                <div className="dve-winner-divider"></div>

                <h4 className="dve-advantages-title">
                  Your Day Could Include:
                </h4>

                <ul className="dve-advantages-list">
                  {[
                    "Exploring historic Caribbean towns",
                    "Swimming in crystal-clear turquoise waters",
                    "Browsing vibrant local markets",
                    "Lunch overlooking the ocean",
                    "Spa treatments and afternoon cocktails",
                    "Relaxing beside the infinity pool",
                    "Exceptional dining and live entertainment under the stars",
                  ].map((item, i) => (
                    <li key={i}>
                      <Check size={18} className="dve-advantage-icon" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Wellness */}
            <div className="dve-winner-card dve-viking-winner">
              <div className="dve-winner-image-wrap">
                <img
                  src={LifeOnboardImage}
                  alt="Wellness experiences aboard Explora Journeys in the Caribbean"
                  className="dve-winner-img"
                />
                <span className="dve-winner-badge">Wellness at Sea</span>
              </div>

              <div className="dve-winner-content">
                <h3 className="dve-winner-title">Wellness at Sea</h3>

                <p className="dve-winner-intro">
                  The warm Caribbean climate creates the perfect setting for
                  wellness. From sunrise to sunset, every day offers
                  opportunities to relax, recharge, and reconnect while
                  surrounded by the ocean.
                </p>

                <div className="dve-winner-divider"></div>

                <h4 className="dve-advantages-title">Guests Can Enjoy:</h4>

                <ul className="dve-advantages-list">
                  {[
                    "Luxury spa treatments",
                    "Ocean-view yoga sessions",
                    "Guided meditation",
                    "Modern fitness classes",
                    "Swimming and aquatic relaxation",
                    "Healthy dining options",
                    "Quiet spaces to unwind",
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

      {/* ── PLANNING YOUR CARIBBEAN CRUISE ───────────────────────── */}
      <section className="ugt-advantage-section">
        <div className="Asc-container">
          <div className="ugt-advantage-header">
            <span className="ugt-advantage-eyebrow">Plan with Confidence</span>

            <h2 className="ugt-advantage-title">
              Tips for Planning Your Caribbean Cruise
            </h2>

            <div className="Asc-accent-line"></div>

            <p className="ugt-advantage-intro">
              A little preparation can make your Caribbean cruise even more
              rewarding. These simple tips will help you choose the right
              itinerary, enjoy the best seasonal conditions, and have a seamless
              journey from start to finish.
            </p>
          </div>

          <div className="ugt-advantage-grid">
            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <CalendarClock size={28} strokeWidth={1.5} />
              </div>

              <h4 className="ugt-card-title">Book Early</h4>

              <p className="ugt-card-desc">
                Popular winter Caribbean sailings often sell out well in
                advance, so reserving early provides the best choice of dates
                and suites.
              </p>
            </div>

            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <Leaf size={28} strokeWidth={1.5} />
              </div>

              <h4 className="ugt-card-title">Travel During Shoulder Season</h4>

              <p className="ugt-card-desc">
                Spring and late autumn often provide excellent weather with
                fewer crowds than the winter peak.
              </p>
            </div>

            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <Palmtree size={28} strokeWidth={1.5} />
              </div>

              <h4 className="ugt-card-title">Pack Light</h4>

              <p className="ugt-card-desc">
                Resort wear, swimwear, sandals, and light evening attire are
                ideal for a Caribbean cruise.
              </p>
            </div>

            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <Footprints size={28} strokeWidth={1.5} />
              </div>

              <h4 className="ugt-card-title">
                Reserve Shore Experiences Early
              </h4>

              <p className="ugt-card-desc">
                Popular snorkeling and sailing excursions fill quickly, so book
                them as soon as your itinerary is confirmed.
              </p>
            </div>

            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <Award size={28} strokeWidth={1.5} />
              </div>

              <h4 className="ugt-card-title">
                Work with a Luxury Travel Advisor
              </h4>

              <p className="ugt-card-desc">
                An experienced advisor can help select the ideal itinerary,
                suite, and destination based on your interests.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── BEAUTIFUL BEACHES EVERYWHERE ───────────────────────────────────────── */}
      <section className="adg-c-section adg-c-bg-white" id="beautiful-beaches">
        <div className="adg-c-container">
          <div className="adg-c-section-header">
            <h2 className="adg-c-h2">Beautiful Beaches Everywhere</h2>
            <div className="adg-c-accent-line"></div>

            <p className="Asc-section-intro">
              Every Caribbean itinerary offers opportunities to enjoy some of
              the world's finest beaches, whether lively or peaceful and hidden.
            </p>
          </div>

          <div className="adg-c-overview-layout">
            <div className="adg-c-overview-icons">
              {[
                "Powder-soft white sand",
                "Crystal-clear turquoise water",
                "Palm-lined coastlines",
                "Beach clubs & snorkeling",
                "Paddleboarding",
                "Sunset walks",
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
                    The Caribbean's coastline is as captivating as its islands,
                    offering breathtaking scenery throughout your voyage.
                  </p>
                </div>
              </div>

              <div className="adg-c-overview-image-wrap">
                <img
                  src={BeautifulBeachs}
                  alt="Scenic coastline viewed from an Explora Journeys ship in the Caribbean"
                  className="adg-c-overview-img"
                />

                <div className="adg-c-overview-img-overlay">
                  <span className="adg-c-overview-img-label">
                    Discover the Caribbean by Sea
                  </span>
                </div>
              </div>
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
              Personalized Caribbean Cruise Planning
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
                Create Your Perfect Caribbean Escape
              </h3>

              <p className="Avr-planning-left-body">
                Planning a Caribbean cruise involves multiple travel details. A
                luxury travel advisor takes the guesswork out of planning by
                helping you select the ideal itinerary, suite, and experiences
                for your travel style. Every detail is thoughtfully coordinated
                to deliver a seamless luxury vacation.
              </p>

              <div className="Avr-planning-alert">
                <ShieldCheck size={18} className="Avr-planning-alert-icon" />

                <p className="Avr-planning-alert-text">
                  Their expertise ensures a seamless journey from departure to
                  return home.
                </p>
              </div>
            </div>

            {/* RIGHT PANEL */}
            <div className="Avr-planning-right">
              <p className="Avr-planning-right-intro">
                A luxury travel advisor can help you:
              </p>

              <div className="Avr-planning-benefits-grid">
                {[
                  {
                    icon: <MapPinned size={18} />,
                    label: "Compare Caribbean itineraries",
                  },
                  {
                    icon: <Home size={18} />,
                    label: "Select the best suite",
                  },
                  {
                    icon: <Plane size={18} />,
                    label: "Arrange flights and transfers",
                  },
                  {
                    icon: <Hotel size={18} />,
                    label: "Recommend luxury beach resorts",
                  },
                  {
                    icon: <Anchor size={18} />,
                    label: "Reserve exclusive shore excursions",
                  },
                  {
                    icon: <BadgePercent size={18} />,
                    label: "Secure promotional offers",
                  },
                  {
                    icon: <Sparkles size={18} />,
                    label: "Personalize every aspect of your vacation",
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
                Professional planning ensures a seamless luxury travel
                experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHO WILL LOVE AN EXPLORA CARIBBEAN CRUISE ─────────────────────────────── */}
      <section className="Asc-section Asc-bg-white" id="Asc-who">
        <div className="Asc-container">
          <div className="Asc-section-header">
            <h2 className="Asc-h2">
              Who Will Love an Explora Caribbean Cruise?
            </h2>
            <div className="Asc-accent-line"></div>
            <p className="Asc-faq-intro">
              Explora is especially popular with couples, honeymooners,
              retirees, solo travelers, and experienced luxury cruisers.
            </p>
          </div>

          <div className="Asc-who-grid">
            <div className="Asc-who-card Asc-who-yes">
              <h3 className="Asc-who-title">
                These Voyages Are Ideal for Travelers Who Enjoy:
              </h3>
              <ul className="Asc-who-list">
                {[
                  "Luxury accommodations",
                  "Beach vacations",
                  "Fine dining",
                  "Wellness",
                  "Couples travel",
                  "Boutique hotels",
                  "Personalized service",
                  "Relaxed exploration",
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
                You May Prefer Another Cruise Line If You Prefer:
              </h3>
              <ul className="Asc-who-list">
                {[
                  "Water parks",
                  "Surf simulators",
                  "Large casinos",
                  "Character entertainment",
                  "Broadway-style productions",
                  "Loud pool parties",
                  "Constant organized activities",
                ].map((item, i) => (
                  <li key={i}>
                    <X size={16} className="Asc-icon-red" />
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
            Travelers who prefer tranquility and refined luxury generally find
            Explora to be an outstanding choice.
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
              Everything travelers need to know about Caribbean cruises on
              Explora Journeys.
            </p>
          </div>
          <FAQ />
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────────── */}
      <section className="Asc-help-section">
        <div className="Asc-help-bg-wrap">
          <img
            src={CTAImage}
            alt="Explora Journeys sailing through the Caribbean"
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
                  Discover the Caribbean <br /> at Explora's Pace
                </h2>
                <div className="Asc-help-accent"></div>
              </div>

              <div className="Asc-help-grid">
                <div className="Asc-help-info">
                  <p className="Asc-help-intro">
                    The Caribbean is one of the world's premier luxury cruise
                    destinations, offering spectacular beaches, vibrant
                    cultures, crystal-clear waters, and endless opportunities
                    for relaxation and adventure.
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
                        Explora Journeys elevates the experience through
                        spacious all-suite accommodations, refined European
                        hospitality, exceptional dining, wellness experiences,
                        and thoughtfully crafted itineraries that allow guests
                        to fully appreciate each destination.
                      </p>
                      <br />
                      <p className="Asc-help-intro">
                        For travelers seeking a sophisticated, relaxing, and
                        unforgettable Caribbean cruise, Explora Journeys offers
                        one of the finest luxury experiences at sea.
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
                      Start Planning Your Caribbean Voyage
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
                      "Recommend the ideal Caribbean itinerary for your travel style",
                      "Advise on which regions and ports to prioritize",
                      "Arrange flights and transfers",
                      "Select the right suite",
                      "Compare promotional offers",
                      "Recommend luxury beach resorts before or after your cruise",
                      "Reserve exclusive shore excursions",
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
                      label: "Explora Journeys Review",
                      path: "/explora-journeys-review",
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
                      label: "Mediterranean Cruises on Explora Journeys",
                      path: "/mediterranean-cruises-on-explora-journeys",
                    },
                    {
                      label: "Greece & Greek Isles Cruises on Explora Journeys",
                      path: "/greece-greek-isles-cruises-on-explora-journeys",
                    },
                    {
                      label: "Alaska Cruises on Explora Journeys",
                      path: "/alaska-cruises-on-explora-journeys",
                    },
                    {
                      label: "Japan Cruises on Explora Journeys",
                      path: "/japan-cruises-on-explora-journeys",
                    },
                    {
                      label: "Dining on Explora Journeys",
                      path: "/dining-on-explora-journeys",
                    },
                    {
                      label: "Explora Journeys Wellness Experience",
                      path: "/explora-journeys-wellness-experience",
                    },
                    {
                      label: "Entertainment & Life Onboard Explora Journeys",
                      path: "/entertainment-life-onboard-explora-journeys",
                    },
                    {
                      label: "Planning Your First Explora Journey",
                      path: "/planning-your-first-explora-journey",
                    },
                    {
                      label: "Should You Book Through a Travel Advisor",
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

export default CaribbeanCruisesOnExploraJourneys;
