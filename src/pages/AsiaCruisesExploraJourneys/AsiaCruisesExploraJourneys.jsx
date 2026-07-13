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
  Compass,
  Anchor,
  Waves,
  Landmark,
  Umbrella,
  UtensilsCrossed,
  MapPinned,
  Home,
  Hotel,
  Plane,
  BadgePercent,
  ShieldCheck,
  Globe2,
  MoonStar,
  Clock,
  Mountain,
  Snowflake,
  Palmtree,
  Camera,
  Globe,
} from "lucide-react";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela2.jpeg";

import HeroImage1 from "../../assets/JapanCruisesExploraJourneys/explora-japan.jpg";
import HeroImage2 from "../../assets/JapanCruisesExploraJourneys/Asia-Ship-a-Long-Bay-Vietnam.webp";
import HeroImage3 from "../../assets/AsiaCruisesExploraJourneys/AsiaHeroimage.jpg";
import Destination1 from "../../assets/AsiaCruisesExploraJourneys/angela-hughes-kyoto-gion-geisha-street-pagoda-japan-travel-expert.jpg";
import Destination2 from "../../assets/AsiaCruisesExploraJourneys/Vietnam.jpg";
import Destination3 from "../../assets/AsiaCruisesExploraJourneys/Thailand.jpg";
import Destination4 from "../../assets/AsiaCruisesExploraJourneys/South-Korea.jpg";
import Destination5 from "../../assets/AsiaCruisesExploraJourneys/Indonesia.jpg";
import Destination6 from "../../assets/AsiaCruisesExploraJourneys/Asia-Cruise.jpg";
import Destination7 from "../../assets/AsiaCruisesExploraJourneys/One-Voyage.jpg";
import ThroughoutAsia from "../../assets/AsiaCruisesExploraJourneys/Throughout-Asia.jpg";
import CulturalExperiences from "../../assets/AsiaCruisesExploraJourneys/Cultural-Experiences.jpg";
import ExploraPort from "../../assets/IsExploraGoodForFamilies/explora-journeys-oceanfront-infinity-pool-deck.jpg";
import AegeanDay from "../../assets/ExploraIVGuide/explora-I-luxury-pool-deck-close-up.JPG";
import ExploraPool from "../../assets/ExploraIVGuide/explora-journeys-luxury-sundeck-ocean-loungers-relaxation.jpg";
import ExploraPool1 from "../../assets/WhichExploraShipChoose/explora-journeys-atoll-pool-luxury-cruise-deck.jpg";
import ExploraDining from "../../assets/ExploraIVGuide/explora-journeys-ocean-grand-terrace-suite-balcony.jpg";
import ExploraDest1 from "../../assets/WhichMediterraneanItineraryIsBest/explora-ii-amalfi-coast-mediterranean-cruise.jpg";
import LuxuryOceanfront from "../../assets/WhichMediterraneanItineraryIsBest/EXPLORA-II-Mediterranean2.jpg";
import ExploraShip from "../../assets/AsiaCruisesExploraJourneys/ctaimage.jpg";

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
        "https://tripsandships.com/asia-cruises-on-explora-journeys/#webpage",
      name: "Asia Cruises on Explora Journeys",
      url: "https://tripsandships.com/asia-cruises-on-explora-journeys",
      description:
        "Discover luxury Asia cruises on Explora Journeys. Explore Japan, Vietnam, Thailand, Singapore, Hong Kong, South Korea, Indonesia, and Southeast Asia with elegant all-suite accommodations and immersive itineraries.",
    },
    {
      "@type": "Article",
      "@id":
        "https://tripsandships.com/asia-cruises-on-explora-journeys/#article",
      headline: "Asia Cruises on Explora Journeys",
      description:
        "A complete guide to cruising Asia with Explora Journeys, covering destinations, curated shore experiences, regional cuisine, scenic cruising, the best time to sail, and who these voyages suit best.",
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
        "https://tripsandships.com/asia-cruises-on-explora-journeys/#breadcrumb",
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
          name: "Asia Cruises on Explora Journeys",
          item: "https://tripsandships.com/asia-cruises-on-explora-journeys",
        },
      ],
    },
    {
      "@type": "TouristTrip",
      "@id":
        "https://tripsandships.com/asia-cruises-on-explora-journeys/#touristtrip",
      name: "Asia Cruise with Explora Journeys",
      touristType:
        "Luxury travelers, couples, food lovers, retirees, solo travelers, international travelers",
      itinerary: {
        "@type": "ItemList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Japan" },
          { "@type": "ListItem", position: 2, name: "Singapore" },
          { "@type": "ListItem", position: 3, name: "Vietnam" },
          { "@type": "ListItem", position: 4, name: "Thailand" },
          { "@type": "ListItem", position: 5, name: "Hong Kong" },
          { "@type": "ListItem", position: 6, name: "South Korea" },
          { "@type": "ListItem", position: 7, name: "Indonesia" },
        ],
      },
    },
    {
      "@type": "Place",
      "@id":
        "https://tripsandships.com/asia-cruises-on-explora-journeys/#place",
      name: "Asia",
      description:
        "A vast and diverse continent known for ancient civilizations, vibrant modern cities, tropical islands, and breathtaking natural landscapes.",
    },
    {
      "@type": "Cruise",
      "@id":
        "https://tripsandships.com/asia-cruises-on-explora-journeys/#cruise",
      name: "Explora Journeys Asia Cruise",
      provider: {
        "@type": "TravelAgency",
        name: "Trips & Ships Luxury Travel",
      },
      departurePort: "Various Asian Ports",
      description:
        "Luxury Asia itineraries featuring longer port visits, curated cultural shore experiences, and international dining aboard an all-suite ship.",
    },
    {
      "@type": "Service",
      "@id":
        "https://tripsandships.com/asia-cruises-on-explora-journeys/#service",
      serviceType: "Luxury Cruise Vacation Planning & Booking Support",
      provider: {
        "@type": "TravelAgency",
        name: "Trips & Ships Luxury Travel",
      },
      areaServed: "Worldwide",
      description:
        "Personalized planning support for Explora Journeys Asia sailings, including itinerary selection, suite categories, and shore experiences.",
    },
    {
      "@type": "Review",
      "@id":
        "https://tripsandships.com/asia-cruises-on-explora-journeys/#review",
      itemReviewed: {
        "@type": "Product",
        name: "Explora Journeys Asia Cruise",
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
        "Explora Journeys offers one of the most elegant ways to experience Asia, combining immersive destinations with spacious oceanfront suites, refined dining, and personalized service.",
    },
    {
      "@type": "ItemList",
      "@id":
        "https://tripsandships.com/asia-cruises-on-explora-journeys/#itemlist",
      name: "What This Asia Cruises on Explora Journeys Guide Covers",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Why Choose Explora Journeys for Asia",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Scenic Cruising Throughout Asia",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Diverse Cultural Experiences",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Explore Asia's Extraordinary Destinations",
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Curated Shore Experiences & Asia's Remarkable Cuisine",
        },
        {
          "@type": "ListItem",
          position: 6,
          name: "Life Onboard During an Asia Cruise",
        },
        {
          "@type": "ListItem",
          position: 7,
          name: "Best Time to Cruise Asia",
        },
        {
          "@type": "ListItem",
          position: 8,
          name: "Who Will Love an Asia Cruise?",
        },
        {
          "@type": "ListItem",
          position: 9,
          name: "Tips for Planning Your Asia Cruise",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://tripsandships.com/asia-cruises-on-explora-journeys/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Where does Explora Journeys cruise in Asia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Depending on the itinerary, destinations may include Japan, Singapore, Vietnam, Thailand, Hong Kong, South Korea, Indonesia, and other Asian ports.",
          },
        },
        {
          "@type": "Question",
          name: "What is included on an Explora Asia cruise?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Your fare typically includes your oceanfront suite, gourmet dining, Wi-Fi, entertainment, fitness facilities, wellness amenities, and many onboard experiences.",
          },
        },
        {
          "@type": "Question",
          name: "Are shore excursions included?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most shore excursions are optional, allowing guests to customize their travel experience.",
          },
        },
        {
          "@type": "Question",
          name: "Is Asia suitable for first-time cruisers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Cruising allows guests to experience multiple countries while enjoying the convenience of unpacking only once.",
          },
        },
        {
          "@type": "Question",
          name: "When is the best time to cruise Asia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The ideal season depends on the itinerary, although spring, autumn, and winter are generally popular throughout much of the region.",
          },
        },
        {
          "@type": "Question",
          name: "Is Explora suitable for couples?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. Spacious suites, refined dining, and immersive destinations make Asia an excellent choice for romantic luxury travel.",
          },
        },
        {
          "@type": "Question",
          name: "What should I pack?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Lightweight clothing, comfortable walking shoes, sun protection, and smart casual evening attire are recommended.",
          },
        },
        {
          "@type": "Question",
          name: "How long are Asia cruises?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Explora offers itineraries ranging from approximately one week to extended voyages across multiple countries.",
          },
        },
        {
          "@type": "Question",
          name: "Is Asia good for food lovers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Asia is one of the world's greatest culinary destinations, offering incredible regional cuisines at every port.",
          },
        },
        {
          "@type": "Question",
          name: "Should I use a travel advisor?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. A luxury travel advisor can help you choose the best itinerary, coordinate international travel, and personalize your cruise experience.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need a visa for an Explora Journeys Asia cruise?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Visa requirements depend on your nationality and the specific countries on your itinerary (such as Vietnam, Japan, or Indonesia). While some destinations offer transit visas or visas-on-arrival for cruise guests, you must verify and obtain required visas in advance.",
          },
        },
        {
          "@type": "Question",
          name: "Does Explora Journeys offer overnight stays in Asian ports?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, many Asian itineraries feature late-night departures or overnight stays in major hubs like Tokyo, Singapore, Bangkok, and Ho Chi Minh City, giving you ample time to explore night markets, dining, and local culture.",
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
      q: "Where does Explora Journeys cruise in Asia?",
      a: "Depending on the itinerary, destinations may include Japan, Singapore, Vietnam, Thailand, Hong Kong, South Korea, Indonesia, and other Asian ports.",
    },
    {
      q: "What is included on an Explora Asia cruise?",
      a: "Your fare typically includes your oceanfront suite, gourmet dining, Wi-Fi, entertainment, fitness facilities, wellness amenities, and many onboard experiences.",
    },
    {
      q: "Are shore excursions included?",
      a: "Most shore excursions are optional, allowing guests to customize their travel experience.",
    },
    {
      q: "Is Asia suitable for first-time cruisers?",
      a: "Yes. Cruising allows guests to experience multiple countries while enjoying the convenience of unpacking only once.",
    },
    {
      q: "When is the best time to cruise Asia?",
      a: "The ideal season depends on the itinerary, although spring, autumn, and winter are generally popular throughout much of the region.",
    },
    {
      q: "Is Explora suitable for couples?",
      a: "Absolutely. Spacious suites, refined dining, and immersive destinations make Asia an excellent choice for romantic luxury travel.",
    },
    {
      q: "What should I pack?",
      a: "Lightweight clothing, comfortable walking shoes, sun protection, and smart casual evening attire are recommended.",
    },
    {
      q: "How long are Asia cruises?",
      a: "Explora offers itineraries ranging from approximately one week to extended voyages across multiple countries.",
    },
    {
      q: "Is Asia good for food lovers?",
      a: "Yes. Asia is one of the world's greatest culinary destinations, offering incredible regional cuisines at every port.",
    },
    {
      q: "Should I use a travel advisor?",
      a: "Yes. A luxury travel advisor can help you choose the best itinerary, coordinate international travel, and personalize your cruise experience.",
    },
    {
      q: "Do I need a visa for an Explora Journeys Asia cruise?",
      a: "Visa requirements depend on your nationality and the specific countries on your itinerary (such as Vietnam, Japan, or Indonesia). While some destinations offer transit visas or visas-on-arrival for cruise guests, you must verify and obtain required visas in advance.",
    },
    {
      q: "Does Explora Journeys offer overnight stays in Asian ports?",
      a: "Yes, many Asian itineraries feature late-night departures or overnight stays in major hubs like Tokyo, Singapore, Bangkok, and Ho Chi Minh City, giving you ample time to explore night markets, dining, and local culture.",
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

/* ── Asia Destinations ───────────────────────────────────────── */
const asiaDestinations = [
  {
    id: "japan",
    title: "Japan",
    badge: "Japan",
    icon: Landmark,
    image: Destination1,

    desc: "Japan offers a captivating blend of ancient traditions and cutting-edge innovation, and remains one of Asia's premier luxury cruise destinations.",

    columns: [
      {
        label: "Popular Experiences Include:",
        items: [
          "Tokyo",
          "Osaka",
          "Kyoto (via nearby ports)",
          "Hiroshima",
          "Hokkaido",
          "Traditional temples",
        ],
      },
    ],

    themeLabel: "Ancient Traditions, Modern Innovation",
    themeText:
      "From cherry blossoms to exceptional cuisine, Japan rewards travelers seeking both cultural depth and contemporary sophistication.",
  },

  {
    id: "singapore",
    title: "Singapore",
    badge: "Singapore",
    icon: Sparkles,
    // image: ExploraPort,

    desc: "Singapore is one of Asia's most sophisticated cities, and its world-class infrastructure makes it an excellent embarkation or disembarkation port.",

    columns: [
      {
        label: "Guests May Enjoy:",
        items: [
          "Marina Bay",
          "Gardens by the Bay",
          "Luxury shopping",
          "Michelin-starred dining",
          "Cultural neighborhoods",
          "Waterfront promenades",
        ],
      },
    ],

    themeLabel: "A Futuristic Gateway to Asia",
    themeText:
      "Singapore blends cutting-edge design with rich multicultural heritage in one compact, walkable city.",
  },

  {
    id: "vietnam",
    title: "Vietnam",
    badge: "Vietnam",
    icon: Waves,
        image: Destination2,

    desc: "Vietnam combines spectacular scenery with rich cultural traditions, offering remarkable diversity throughout every itinerary.",

    columns: [
      {
        label: "Highlights May Include:",
        items: [
          "Ho Chi Minh City",
          "Ha Long Bay",
          "Da Nang",
          "Hue",
          "Ancient temples",
          "Floating markets",
        ],
      },
    ],

    themeLabel: "Emerald Bays and Ancient Culture",
    themeText:
      "From limestone karsts to floating markets, Vietnam offers some of Southeast Asia's most memorable scenery.",
  },

  {
    id: "thailand",
    title: "Thailand",
    badge: "Thailand",
    icon: Palmtree,
       image: Destination3,

    desc: "Thailand blends tropical beaches, vibrant cities, and remarkable cultural heritage into one unforgettable destination.",

    columns: [
      {
        label: "Visitors Often Experience:",
        items: [
          "Bangkok",
          "Phuket",
          "Koh Samui",
          "Golden temples",
          "Island excursions",
          "Luxury beach resorts",
        ],
      },
    ],

    themeLabel: "Golden Temples, Tropical Beaches",
    themeText:
      "Thailand offers a rewarding contrast between bustling cities and idyllic island escapes.",
  },

  {
    id: "hong-kong",
    title: "Hong Kong",
    badge: "Hong Kong",
    icon: Anchor,
    // image: ExploraPool,

    desc: "One of Asia's most iconic cities, Hong Kong offers a fascinating mix of Eastern and Western influences.",

    columns: [
      {
        label: "Guests May Explore:",
        items: [
          "Victoria Peak",
          "Harbor cruises",
          "Luxury shopping",
          "Historic neighborhoods",
          "Fine dining",
          "Traditional markets",
        ],
      },
    ],

    themeLabel: "East Meets West",
    themeText:
      "Hong Kong's dramatic skyline and layered history make it one of Asia's most captivating port calls.",
  },

  {
    id: "south-korea",
    title: "South Korea",
    badge: "South Korea",
    icon: Compass,
       image: Destination4,

    desc: "South Korea combines contemporary cities with centuries-old traditions along a striking coastline.",

    columns: [
      {
        label: "Possible Destinations Include:",
        items: [
          "Busan",
          "Jeju Island",
          "Historic temples",
          "Coastal scenery",
          "Local markets",
          "Korean cuisine",
        ],
      },
    ],

    themeLabel: "Contemporary Cities, Timeless Traditions",
    themeText:
      "South Korea offers a compelling mix of modern culture, coastal scenery, and centuries-old heritage.",
  },

  {
    id: "indonesia",
    title: "Indonesia",
    badge: "Indonesia",
    icon: Globe,
    image: Destination5,

    desc: "Indonesia's islands offer spectacular natural beauty, from volcanic landscapes to pristine coral reefs.",

    columns: [
      {
        label: "Guests May Enjoy:",
        items: [
          "Bali",
          "Komodo region",
          "Volcanic landscapes",
          "Tropical beaches",
          "Coral reefs",
          "Cultural villages",
        ],
      },
    ],

    themeLabel: "Volcanic Landscapes, Island Beauty",
    themeText:
      "Indonesia's diverse islands offer some of Southeast Asia's most spectacular natural scenery.",
  },
];

/* ── Main Component ──────────────────────────────────────────────── */
const AsiaCruisesOnExploraJourneys = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [readMore, setReadMore] = useState(false);
  const [activeDestination, setActiveDestination] = useState("japan");
  const currentDestination =
    asiaDestinations.find((d) => d.id === activeDestination) ||
    asiaDestinations[0];

  const ActiveIcon = currentDestination.icon;

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
          Asia Cruises on Explora Journeys | Luxury Asia Cruise Guide
        </title>
        <meta name="title" content="Asia Cruises on Explora Journeys" />
        <meta
          name="description"
          content="Discover luxury Asia cruises on Explora Journeys. Explore Japan, Vietnam, Thailand, Singapore, Hong Kong, South Korea, Indonesia, and Southeast Asia with elegant all-suite accommodations and immersive itineraries."
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
            Asia Cruises <br /> on Explora Journeys
          </h1>

          <p>
            Asia is a continent of incredible diversity, where ancient
            civilizations, vibrant modern cities, tropical islands, and
            breathtaking natural landscapes come together to create
            unforgettable travel experiences. From Japan's centuries-old temples
            and Singapore's futuristic skyline to Vietnam's emerald bays and
            Thailand's tropical beaches, every destination offers something
            unique.
          </p>

          <p>
            Explora Journeys invites travelers to discover Asia through
            thoughtfully crafted luxury voyages that combine immersive
            destinations with refined European hospitality.
          </p>

          {readMore && (
            <>
              <p>
                Spacious oceanfront suites, exceptional dining, personalized
                service, and carefully planned itineraries allow guests to
                experience Asia in comfort while enjoying the freedom to explore
                multiple countries on a single journey.
              </p>

              <p>
                This guide covers Asia's extraordinary destinations, curated
                shore experiences, regional cuisine, scenic cruising, the best
                time to sail, and whether an Explora Asia cruise is right for
                your next voyage.
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

      {/* ── WHY CHOOSE EXPLORA FOR ASIA ─────────────────── */}
      <section
        className="ugt-components-section"
        id="why-choose-explora"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="ugt-components-container">
          <div className="ugt-components-header">
            <h2 className="ugt-components-title">
              Why Choose Explora Journeys <br /> for Asia?
            </h2>

            <div className="adg-c-accent-line"></div>
          </div>

          <div className="ugt-components-list">
            <div className="ugt-component-row">
              <div className="ugt-component-image-wrapper">
                <div className="ugt-component-image-container">
                  <img
                    src={ExploraPort}
                    alt="Onboard atmosphere aboard Explora Journeys in Asia"
                    className="ugt-component-image"
                  />
                </div>
              </div>

              <div className="ugt-component-content">
                <p className="ugt-component-text">
                  Asia rewards travelers who take time to truly experience each
                  destination. Instead of simply visiting ports, guests enjoy{" "}
                  <strong>deeper cultural connections</strong> and more relaxed
                  exploration.
                </p>

                <div className="ugt-questions-box">
                  <span className="ugt-questions-title">
                    Explora Journeys Focuses On:
                  </span>

                  <ul className="ugt-questions-list">
                    {[
                      "Spacious all-suite accommodations",
                      "Boutique luxury atmosphere",
                      "Longer port visits",
                      "Personalized service",
                      "Wellness-focused experiences",
                      "Exceptional international dining",
                      "Carefully curated itineraries",
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
                  Explora provides an elegant and enriching way to experience
                  one of the world's most fascinating continents.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SCENIC CRUISING THROUGHOUT ASIA ─────────────────────────────── */}
      <section className="dmg-info-section" id="scenic-cruising">
        <div className="dmg-info-container">
          <div className="dmg-info-header">
            <h2 className="dmg-info-title">
              Scenic Cruising <br /> Throughout Asia
            </h2>
            <div className="dmg-info-accent"></div>
          </div>

          <div className="dmg-info-grid">
            <div className="dmg-info-content">
              <p className="dmg-info-lead">
                Some of the voyage's most memorable moments occur while sailing
                between destinations. Every sea day offers new scenery from your
                private terrace.
              </p>

              <div className="dmg-info-features dmg-info-features-scrollable">
                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Mountain size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Limestone Islands
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Sail past dramatic limestone karsts rising from emerald
                      bays.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Palmtree size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Tropical Coastlines
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Relax on your private terrace while passing tropical
                      coastlines and volcanic landscapes.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Anchor size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">Bustling Harbors</h3>
                    <p className="dmg-info-feature-desc">
                      Arrive into some of the world's most iconic and energetic
                      harbor cities.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <MapPinned size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Remote Fishing Villages
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Glimpse traditional fishing villages tucked along quiet
                      coastlines.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Waves size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">Emerald Seas</h3>
                    <p className="dmg-info-feature-desc">
                      Take in the ever-changing colors of Asia's emerald seas
                      from sunrise to sunset.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="dmg-info-media">
              <div className="dmg-media-wrapper">
                <img
                    src={ThroughoutAsia}
                  alt="Explora Journeys sailing through Asia's scenic coastlines"
                  className="dmg-media-img"
                  style={{ height: "610px" }}
                />
                <div className="dmg-media-overlay"></div>

                <div className="dmg-media-badge">
                  <span>Limestone Islands • Emerald Seas</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DIVERSE CULTURAL EXPERIENCES ────────────────────────────────────── */}
      <section className="adg-section" id="adg-culture">
        <div className="adg-container">
          <div className="adg-section-header" style={{ marginBottom: "60px" }}>
            <h2 className="adg-h2">Diverse Cultural Experiences</h2>
            <div className="adg-accent-line"></div>

            <p
              className="Asc-body-text"
              style={{ textAlign: "center", marginTop: "15px" }}
            >
              Asia offers some of the richest cultural experiences in the world,
              and every destination reveals a different story.
            </p>
          </div>

          <div className="adg-split-layout">
            <div className="adg-content-card-side">
              <img
                src={CulturalExperiences}
                alt="Cultural experiences ashore during an Explora Journeys Asia cruise"
                className="adg-side-image"
                style={{ height: "38vh" }}
              />

              <div className="adg-info-card">
                <div className="adg-card-meta">
                  <Landmark size={28} />
                  <span className="adg-meta-label">Living History</span>
                </div>

                <p className="adg-card-lead">
                  From ancient temples to contemporary cities, Asia's cultural
                  depth reveals itself at every port.
                </p>
              </div>
            </div>

            <div className="adg-list-side">
              {[
                "Ancient temples",
                "UNESCO World Heritage Sites",
                "Traditional festivals",
                "Local artisans",
                "Historic architecture",
                "Religious landmarks",
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

      {/* ── EXPLORE ASIA'S EXTRAORDINARY DESTINATIONS ───── */}
      <section className="luc-destinations-section" id="luc-destinations">
        <div className="luc-destinations-container">
          <div className="luc-destinations-header">
            <h2 className="luc-destinations-title">
              Explore Asia's Extraordinary Destinations
            </h2>

            <div className="adg-c-accent-line"></div>

            <p className="luc-destinations-intro">
              Explora Journeys offers voyages across East Asia and Southeast
              Asia, showcasing both iconic cities and hidden gems.
            </p>
          </div>

          {/* Layout */}
          <div className="luc-dest-layout">
            {/* Sidebar nav */}
            <nav className="luc-dest-nav">
              {asiaDestinations.map((item) => {
                const NavIcon = item.icon;
                const isActive = activeDestination === item.id;

                return (
                  <button
                    key={item.id}
                    className={`luc-dest-nav-btn ${
                      isActive ? "luc-dest-nav-btn--active" : ""
                    }`}
                    onClick={() => setActiveDestination(item.id)}
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
            <div className="luc-dest-panel" key={activeDestination}>
              {/* Image */}
              <div className="luc-dest-img-wrap">
                <img
                  src={currentDestination.image}
                  alt={currentDestination.title}
                  className="luc-dest-img"
                />

                <div className="luc-dest-img-overlay">
                  <div className="luc-dest-img-icon">
                    <ActiveIcon size={22} strokeWidth={1.6} />
                  </div>

                  <span className="luc-dest-img-title">
                    {currentDestination.title}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="luc-dest-panel-desc">{currentDestination.desc}</p>

              {/* Columns */}
              <div className="luc-dest-columns">
                {currentDestination.columns.map((col, cIdx) => (
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
                    {currentDestination.themeLabel}
                  </span>

                  <p className="luc-dest-theme-note-text">
                    {currentDestination.themeText}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CURATED SHORE EXPERIENCES & ASIA'S REMARKABLE CUISINE ───────────────────────────────────────── */}
      <section
        className="Ejvs-pricing-section"
        id="shore-experiences"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="Ejvs-container">
          <div className="Ejvs-section-header">
            <h2 className="Ejvs-section-title">
              Curated Shore Experiences &amp; Asia's Remarkable Cuisine
            </h2>

            <div className="Ejvs-section-accent"></div>

            <p className="Ejvs-section-subtitle">
              Explora Journeys offers thoughtfully designed shore experiences
              that help guests connect with local cultures, while onboard dining
              complements the incredible variety of regional cuisine.
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
                Guests also have the flexibility to explore independently.
              </p>

              <ul className="Ejvs-feature-list">
                {[
                  "Temple tours",
                  "Culinary experiences",
                  "Tea ceremonies",
                  "Local cooking classes",
                  "Historic walking tours",
                  "Scenic boat cruises",
                  "Wildlife encounters",
                  "Private cultural experiences",
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

            {/* Cuisine */}
            <div className="Ejvs-pricing-card Ejvs-seabourn-card">
              <div className="Ejvs-card-header">
                <div className="Ejvs-card-icon-wrap">
                  <UtensilsCrossed size={24} className="Ejvs-card-icon" />
                </div>

                <h3 className="Ejvs-card-title">Asia's Remarkable Cuisine</h3>
              </div>

              <p className="Ejvs-card-intro">
                Onboard, Explora's international restaurants complement the
                culinary journey with refined dining and exceptional service.
              </p>

              <ul className="Ejvs-feature-list">
                {[
                  "Sushi",
                  "Dim sum",
                  "Pho",
                  "Thai curries",
                  "Fresh seafood",
                  "Korean barbecue",
                  "Street food",
                  "Tropical fruits",
                ].map((item, i) => (
                  <li key={i} className="Ejvs-feature-item">
                    <Star size={14} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="Ejvs-card-highlight">
                <p>
                  One of the highlights of cruising Asia is the incredible
                  variety of regional cuisine at every port.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── LIFE ONBOARD DURING AN ASIA CRUISE ───────────────────────────────────────── */}
      <section
        className="dve-winner-section"
        id="life-onboard"
        style={{ backgroundColor: "var(--bg-white)" }}
      >
        <div className="dve-container">
          <div className="dve-section-header">
            <h2 className="dve-section-title">
              Life Onboard During an Asia Cruise
            </h2>

            <div className="dve-section-accent"></div>

            <p className="dve-section-subtitle">
              After exploring vibrant cities or peaceful temples, guests return
              to a luxurious retreat that provides the perfect balance to Asia's
              energetic destinations.
            </p>
          </div>

          <div className="dve-winner-grid">
            {/* A Luxurious Retreat */}
            <div className="dve-winner-card dve-disney-winner">
              <div className="dve-winner-image-wrap">
                <img
                    src={ExploraPool1}
                  alt="Life onboard Explora Journeys during an Asia cruise"
                  className="dve-winner-img"
                />

                <span className="dve-winner-badge">A Calm Retreat</span>
              </div>

              <div className="dve-winner-content">
                <h3 className="dve-winner-title">A Luxurious Retreat</h3>

                <p className="dve-winner-intro">
                  The calm atmosphere onboard provides the perfect{" "}
                  <strong>balance to Asia's energetic destinations</strong>.
                </p>

                <div className="dve-winner-divider"></div>

                <h4 className="dve-advantages-title">Guests Can Enjoy:</h4>

                <ul className="dve-advantages-list">
                  {[
                    "Ocean Wellness Spa",
                    "Infinity pools",
                    "Gourmet dining",
                    "Elegant lounges",
                    "Live music",
                    "Spacious suites",
                    "Personalized service",
                  ].map((item, i) => (
                    <li key={i}>
                      <Waves size={18} className="dve-advantage-icon" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* One Voyage, Many Countries */}
            <div className="dve-winner-card dve-seabourn-winner">
              <div className="dve-winner-image-wrap">
                <img
                    src={Destination7}
                  alt="Exploring multiple Asian countries aboard Explora Journeys"
                  className="dve-winner-img"
                />

                <span className="dve-winner-badge">
                  One Voyage, Many Countries
                </span>
              </div>

              <div className="dve-winner-content">
                <h3 className="dve-winner-title">One Voyage, Many Countries</h3>

                <p className="dve-winner-intro">
                  Every destination reveals a different story, allowing guests
                  to unpack once and discover an entire continent.
                </p>

                <div className="dve-winner-divider"></div>

                <h4 className="dve-advantages-title">Guests May Discover:</h4>

                <ul className="dve-advantages-list">
                  {[
                    "Traditional festivals",
                    "Local artisans",
                    "Historic architecture",
                    "Religious landmarks",
                    "Contemporary cities",
                    "Colorful local markets",
                  ].map((item, i) => (
                    <li key={i}>
                      <Star size={18} className="dve-advantage-icon" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BEST TIME TO CRUISE ASIA ───────────────────────────────── */}
      <section className="adg-c-section adg-c-bg-soft" id="best-time-to-cruise">
        <div className="adg-c-container">
          <div className="adg-c-section-header">
            <span className="adg-c-eyebrow">Plan Your Sailing</span>

            <h2 className="adg-c-h2">Best Time to Cruise Asia</h2>

            <div className="adg-c-accent-line"></div>

            <p className="Asc-section-intro">
              Asia offers excellent cruising opportunities throughout much of
              the year, and the best time depends on the destinations included
              in your itinerary.
            </p>
          </div>

          <div
            className="adg-c-venues-grid1"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            }}
          >
            {/* Spring */}
            <div className="adg-c-venue-card adg-c-venue-1">
              <div className="adg-c-venue-top">
                <span className="adg-c-venue-eyebrow">
                  <Flower2
                    size={14}
                    style={{ display: "inline", marginRight: 6 }}
                  />
                  Spring
                </span>

                <h3 className="adg-c-venue-name">Spring</h3>

                <p className="adg-c-venue-highlight">Ideal Sightseeing</p>
              </div>

              <ul className="adg-c-venue-list">
                {[
                  "Comfortable temperatures",
                  "Cherry blossom season in Japan",
                  "Beautiful gardens",
                  "Ideal sightseeing",
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
                  A wonderful season for sightseeing, especially for Japan's
                  cherry blossoms.
                </p>
              </div>
            </div>

            {/* Summer */}
            <div className="adg-c-venue-card adg-c-venue-2">
              <div className="adg-c-venue-top">
                <span className="adg-c-venue-eyebrow">
                  <Sun
                    size={14}
                    style={{ display: "inline", marginRight: 6 }}
                  />
                  Summer
                </span>

                <h3 className="adg-c-venue-name">Summer</h3>

                <p className="adg-c-venue-highlight">Vibrant Festivals</p>
              </div>

              <ul className="adg-c-venue-list">
                {[
                  "Tropical warmth",
                  "Vibrant festivals",
                  "Lush landscapes",
                  "Coastal exploration",
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
                  Warm, lush, and lively — an energetic time to explore coastal
                  Asia.
                </p>
              </div>
            </div>

            {/* Autumn */}
            <div className="adg-c-venue-card adg-c-venue-1">
              <div className="adg-c-venue-top">
                <span className="adg-c-venue-eyebrow">
                  <Leaf
                    size={14}
                    style={{ display: "inline", marginRight: 6 }}
                  />
                  Autumn
                </span>

                <h3 className="adg-c-venue-name">Autumn</h3>

                <p className="adg-c-venue-highlight">Excellent Photography</p>
              </div>

              <ul className="adg-c-venue-list">
                {[
                  "Pleasant weather",
                  "Fewer crowds",
                  "Excellent photography",
                  "Cultural festivals",
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
                  A quieter season with pleasant weather, ideal for photography
                  and cultural festivals.
                </p>
              </div>
            </div>

            {/* Winter */}
            <div className="adg-c-venue-card adg-c-venue-2">
              <div className="adg-c-venue-top">
                <span className="adg-c-venue-eyebrow">
                  <Snowflake
                    size={14}
                    style={{ display: "inline", marginRight: 6 }}
                  />
                  Winter
                </span>

                <h3 className="adg-c-venue-name">Winter</h3>

                <p className="adg-c-venue-highlight">Ideal Tropical Cruising</p>
              </div>

              <ul className="adg-c-venue-list">
                {[
                  "Warm temperatures in Southeast Asia",
                  "Comfortable sightseeing",
                  "Popular travel season",
                  "Ideal tropical cruising",
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
                  A popular season for warm, comfortable sightseeing across
                  Southeast Asia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TIPS FOR PLANNING YOUR ASIA CRUISE ───────────────────────────────────────── */}
      <section className="adg-c-section adg-c-bg-white" id="planning-tips">
        <div className="adg-c-container">
          <div className="adg-c-section-header">
            <h2 className="adg-c-h2">Tips for Planning Your Asia Cruise</h2>
            <div className="adg-c-accent-line"></div>

            <p className="Asc-section-intro">
              A little planning goes a long way toward making your Asia voyage
              as smooth and enjoyable as possible.
            </p>
          </div>

          <div className="adg-c-overview-layout">
            <div className="adg-c-overview-icons">
              {[
                "Book early — Asia sailings are among Explora's most popular international itineraries",
                "Consider the season — research regional weather, festivals, and temperatures before selecting your voyage",
                "Arrive early — spend additional nights in cities like Tokyo, Singapore, or Hong Kong before your cruise",
                "Pack for variety — lightweight clothing, comfortable walking shoes, and smart casual evening attire are recommended",
                "Work with a luxury travel advisor to match your interests with the ideal itinerary",
                "Reserve shore excursions in advance — cultural tours and small-group experiences at popular ports often fill quickly",
                "Verify passport and visa requirements — entry rules vary by destination, so review documentation well before departure",
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
                  <Camera size={28} className="adg-c-callout-star" />
                  <p className="adg-c-callout-text">
                    An experienced advisor can help you match your interests
                    with the ideal itinerary, suite, and shore experiences for a
                    seamless Asia vacation.
                  </p>
                </div>
              </div>

              <div className="adg-c-overview-image-wrap" style={{height: '310px'}}>
                <img
                    src={Destination6}
                  alt="Planning an Asia cruise with Explora Journeys"
                  className="adg-c-overview-img"
                />

                <div className="adg-c-overview-img-overlay">
                  <span className="adg-c-overview-img-label">
                    Plan a Seamless Voyage
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
              Personalized Asia Cruise Planning
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
                Create Your Perfect Asia Journey
              </h3>

              <p className="Avr-planning-left-body">
                Planning an Asia cruise involves much more than choosing
                departure dates. A luxury travel advisor helps you select the
                ideal itinerary, ship, accommodations, and experiences for your
                travel style, with every detail thoughtfully coordinated.
              </p>

              <div className="Avr-planning-alert">
                <ShieldCheck size={18} className="Avr-planning-alert-icon" />

                <p className="Avr-planning-alert-text">
                  Professional planning helps maximize every aspect of your Asia
                  vacation.
                </p>
              </div>
            </div>

            {/* RIGHT PANEL */}
            <div className="Avr-planning-right">
              <p className="Avr-planning-right-intro">
                A travel advisor can help you:
              </p>

              <div className="Avr-planning-benefits-grid">
                {[
                  {
                    icon: <MapPinned size={18} />,
                    label: "Compare Asia itineraries",
                  },
                  {
                    icon: <Home size={18} />,
                    label: "Select the ideal suite",
                  },
                  {
                    icon: <Plane size={18} />,
                    label: "Arrange international flights",
                  },
                  {
                    icon: <Hotel size={18} />,
                    label: "Book luxury hotels",
                  },
                  {
                    icon: <Compass size={18} />,
                    label: "Coordinate transfers",
                  },
                  {
                    icon: <Sparkles size={18} />,
                    label: "Recommend exclusive shore experiences",
                  },
                  {
                    icon: <BadgePercent size={18} />,
                    label: "Secure promotional offers",
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
                Professional planning helps maximize every aspect of your Asia
                vacation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHO WILL LOVE AN ASIA CRUISE ─────────────────── */}
      <section className="Asc-section Asc-bg-white" id="Asc-who">
        <div className="Asc-container">
          <div className="Asc-section-header">
            <h2 className="Asc-h2">Who Will Love an Asia Cruise?</h2>
            <div className="Asc-accent-line"></div>
            <p className="Asc-faq-intro">
              These voyages are especially popular with couples, solo travelers,
              retirees, food lovers, and experienced international travelers.
            </p>
          </div>

          <div className="Asc-who-grid">
            <div className="Asc-who-card Asc-who-yes">
              <h3 className="Asc-who-title">
                These Voyages Are Ideal for Travelers Who Appreciate:
              </h3>
              <ul className="Asc-who-list">
                {[
                  "Cultural immersion",
                  "History",
                  "Fine dining",
                  "Luxury accommodations",
                  "Photography",
                  "Architecture",
                  "Wellness",
                  "Destination-focused travel",
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
                You May Prefer Another Cruise Line If Your Priorities Include:
              </h3>
              <ul className="Asc-who-list">
                {[
                  "Water slides",
                  "Theme park attractions",
                  "Character entertainment",
                  "Large casinos",
                  "High-energy nightlife",
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
            Guests looking for sophisticated luxury and meaningful travel
            experiences will appreciate Explora's approach.
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
              Everything travelers need to know about Asia cruises on Explora
              Journeys.
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
            alt="Explora Journeys sailing through Asia"
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
                  Discover Asia <br /> at Explora's Pace
                </h2>
                <div className="Asc-help-accent"></div>
              </div>

              <div className="Asc-help-grid">
                <div className="Asc-help-info">
                  <p className="Asc-help-intro">
                    Asia offers an extraordinary blend of history, culture,
                    cuisine, natural beauty, and modern sophistication. Every
                    destination introduces new traditions, flavors, landscapes,
                    and unforgettable experiences.
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
                        Explora Journeys enhances this remarkable region through
                        spacious all-suite accommodations, personalized service,
                        exceptional dining, and thoughtfully designed
                        itineraries that encourage meaningful exploration rather
                        than hurried sightseeing.
                      </p>
                      <br />
                      <p className="Asc-help-intro">
                        For travelers seeking an elegant, immersive, and
                        unforgettable cruise through Asia, Explora Journeys
                        offers one of the finest luxury experiences available.
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
                      Start Planning Your Asia Voyage
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
                      "Recommend the ideal Asia itinerary for your travel style",
                      "Advise on which destinations and excursions to prioritize",
                      "Coordinate pre- and post-cruise hotel stays",
                      "Select the right suite",
                      "Compare promotional offers",
                      "Arrange flights, transfers, and private shore experiences",
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
                      label: "Japan Cruises on Explora Journeys",
                      path: "/japan-cruises-on-explora-journeys",
                    },
                    {
                      label: "Northern Europe Cruises on Explora Journeys",
                      path: "/northern-europe-cruises-on-explora-journeys",
                    },
                    {
                      label: "Iceland & Greenland Cruises on Explora Journeys",
                      path: "/iceland-greenland-cruises-on-explora-journeys",
                    },
                    {
                      label: "Mediterranean Cruises on Explora Journeys",
                      path: "/mediterranean-cruises-on-explora-journeys",
                    },
                    {
                      label: "Caribbean Cruises on Explora Journeys",
                      path: "/caribbean-cruises-on-explora-journeys",
                    },
                    {
                      label: "Alaska Cruises on Explora Journeys",
                      path: "/alaska-cruises-on-explora-journeys",
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

export default AsiaCruisesOnExploraJourneys;
