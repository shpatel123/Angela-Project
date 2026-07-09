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
  Landmark,
  Mountain,
  UtensilsCrossed,
  MapPinned,
  Home,
  Hotel,
  Plane,
  BadgePercent,
  ShieldCheck,
  Footprints,
  Building2,
  CalendarClock,
} from "lucide-react";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela3.jpeg";

import HeroImage1 from "../../assets/JapanCruisesExploraJourneys/explora-japan.jpg";
import HeroImage2 from "../../assets/JapanCruisesExploraJourneys/Asia-Ship-a-Long-Bay-Vietnam.webp";
import HeroImage3 from "../../assets/WhichMediterraneanItineraryIsBest/explora-II-mediterranean-coastal-cruise-view.jpg";
import ExploraSuite from "../../assets/ExploraIVGuide/explora-journeys-sky-lounge-outdoor-ocean-view-deck.jpg";
import JapanCoastlineImage from "../../assets/JapanCruisesExploraJourneys/okinawa-japan-tropical-island-aerial-beach-travel.jpg";
import LifeOnboardImage from "../../assets/IsExploraGoodForFamilies/explora-I-oceanfront-pool-lounge-deck.JPG";
import CTAImage from "../../assets/JapanCruisesExploraJourneys/angela-hughes-kiyomizu-dera-kyoto-autumn-foliage-japan-luxury-travel.jpg";

import TokyoImg from "../../assets/JapanCruisesExploraJourneys/tokyo-shibuya-crossing.webp";
import OsakaImg from "../../assets/JapanCruisesExploraJourneys/osaka-dotonbori-street-food.webp";
import KyotoImg from "../../assets/JapanCruisesExploraJourneys/angela-hughes-kyoto-gion-geisha-street-pagoda-japan-travel-expert.jpg";
import HiroshimaImg from "../../assets/JapanCruisesExploraJourneys/hiroshima-peace-memorial-park.webp";
import HokkaidoImg from "../../assets/JapanCruisesExploraJourneys/hokkaido-nature-hot-springs.webp";

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
        "https://tripsandships.com/japan-cruises-on-explora-journeys/#webpage",
      name: "Japan Cruises on Explora Journeys",
      url: "https://tripsandships.com/japan-cruises-on-explora-journeys",
      description:
        "Discover luxury Japan cruises on Explora Journeys. Explore Tokyo, Kyoto, Osaka, Hiroshima, Hokkaido, cherry blossom cruises, cultural experiences, and why Explora offers one of the most elegant ways to experience Japan by sea.",
    },
    {
      "@type": "Article",
      "@id":
        "https://tripsandships.com/japan-cruises-on-explora-journeys/#article",
      headline: "Japan Cruises on Explora Journeys",
      description:
        "A complete guide to cruising Japan with Explora Journeys, covering destinations, seasonal highlights, cultural experiences, dining, the best time to sail, and who these voyages suit best.",
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
        "https://tripsandships.com/japan-cruises-on-explora-journeys/#breadcrumb",
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
          name: "Japan Cruises on Explora Journeys",
          item: "https://tripsandships.com/japan-cruises-on-explora-journeys",
        },
      ],
    },
    {
      "@type": "TouristTrip",
      "@id":
        "https://tripsandships.com/japan-cruises-on-explora-journeys/#touristtrip",
      name: "Japan Cruise with Explora Journeys",
      touristType: "Luxury travelers, couples, retirees, solo travelers",
      itinerary: {
        "@type": "ItemList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Tokyo" },
          { "@type": "ListItem", position: 2, name: "Osaka" },
          { "@type": "ListItem", position: 3, name: "Kyoto" },
          { "@type": "ListItem", position: 4, name: "Hiroshima" },
          { "@type": "ListItem", position: 5, name: "Hokkaido" },
        ],
      },
    },
    {
      "@type": "Cruise",
      "@id":
        "https://tripsandships.com/japan-cruises-on-explora-journeys/#cruise",
      name: "Explora Journeys Japan Cruise",
      provider: {
        "@type": "TravelAgency",
        name: "Trips & Ships Luxury Travel",
      },
      departurePort: "Various Japan Ports",
      description:
        "Luxury Japan itineraries featuring longer port visits, destination-focused excursions, and refined cuisine aboard an all-suite ship.",
    },
    {
      "@type": "Service",
      "@id":
        "https://tripsandships.com/japan-cruises-on-explora-journeys/#service",
      serviceType: "Luxury Cruise Vacation Planning & Booking Support",
      provider: {
        "@type": "TravelAgency",
        name: "Trips & Ships Luxury Travel",
      },
      areaServed: "Worldwide",
      description:
        "Personalized planning support for Explora Journeys Japan sailings, including itinerary selection, suite categories, and shore experiences.",
    },
    {
      "@type": "Review",
      "@id":
        "https://tripsandships.com/japan-cruises-on-explora-journeys/#review",
      itemReviewed: {
        "@type": "Product",
        name: "Explora Journeys Japan Cruise",
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
        "Explora Journeys offers one of the most elegant, slow-paced ways to experience Japan, combining longer port visits with destination-inspired cuisine and impeccable service.",
    },
    {
      "@type": "ItemList",
      "@id":
        "https://tripsandships.com/japan-cruises-on-explora-journeys/#itemlist",
      name: "What This Japan Cruises on Explora Journeys Guide Covers",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Why Choose Explora Journeys for Japan",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Explore Japan's Most Fascinating Destinations",
        },
        { "@type": "ListItem", position: 3, name: "A Day Ashore in Japan" },
        {
          "@type": "ListItem",
          position: 4,
          name: "Cultural Experiences & Japanese Cuisine",
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Scenic Cruising & Life Onboard",
        },
        {
          "@type": "ListItem",
          position: 6,
          name: "Seasonal Beauty Throughout the Year",
        },
        {
          "@type": "ListItem",
          position: 7,
          name: "Tips for Planning Your Japan Cruise",
        },
        {
          "@type": "ListItem",
          position: 8,
          name: "Who Will Love a Japan Cruise?",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://tripsandships.com/japan-cruises-on-explora-journeys/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Where does Explora Journeys cruise in Japan?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Depending on the itinerary, ports may include Tokyo, Osaka, Hiroshima, Hokkaido, and other destinations throughout Japan.",
          },
        },
        {
          "@type": "Question",
          name: "Does Explora visit during cherry blossom season?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Select spring itineraries allow guests to experience Japan during the famous cherry blossom season, depending on annual bloom timing.",
          },
        },
        {
          "@type": "Question",
          name: "Are Japan cruises suitable for first-time visitors?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Cruising provides an excellent introduction to multiple regions of Japan while enjoying luxurious accommodations throughout the journey.",
          },
        },
        {
          "@type": "Question",
          name: "What is included on an Explora Japan cruise?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Your fare typically includes your oceanfront suite, multiple dining venues, Wi-Fi, entertainment, fitness facilities, wellness amenities, and many onboard services.",
          },
        },
        {
          "@type": "Question",
          name: "Are shore excursions included?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most excursions are optional, allowing guests to personalize their sightseeing experience.",
          },
        },
        {
          "@type": "Question",
          name: "Is Japan good for luxury travelers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. Japan combines world-class hospitality, exceptional cuisine, luxury shopping, fascinating culture, and beautiful landscapes.",
          },
        },
        {
          "@type": "Question",
          name: "When is the best time to cruise Japan?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Spring and autumn are generally considered the most popular seasons due to mild weather and stunning natural scenery.",
          },
        },
        {
          "@type": "Question",
          name: "Is Explora suitable for couples?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. The ship's elegant atmosphere and Japan's romantic landscapes make it an excellent choice for couples.",
          },
        },
        {
          "@type": "Question",
          name: "How long are Japan cruises?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Explora offers a variety of itineraries, ranging from approximately one week to longer Asia voyages.",
          },
        },
        {
          "@type": "Question",
          name: "Should I use a travel advisor?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. A luxury travel advisor can help you choose the ideal sailing, coordinate international travel, and maximize the value of your vacation.",
          },
        },
        {
          "@type": "Question",
          name: "Which ports are used as the primary embarkation ports for Explora in Japan?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Explora Journeys' Japan itineraries primarily begin or end in Tokyo (Yokohama port) or Kobe/Osaka, which are easily accessible from international airports.",
          },
        },
        {
          "@type": "Question",
          name: "What does Explora's shore program in Japan include?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Branded as Destination Experiences, shore programs feature private tea ceremonies, guided tours of historic castles, visits to ancient temples, culinary outings in Osaka, and scenic tours of Mount Fuji.",
          },
        },
        {
          "@type": "Question",
          name: "Does Explora offer autumn foliage cruises in Japan?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Select autumn itineraries are designed to align with Japan's stunning autumn leaf season (koyo), showcasing spectacular vibrant maple and ginkgo foliage in regions like Kyoto and Hokkaido.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need a visa to take a Japan cruise on Explora Journeys?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Passport holders from many countries (such as the US, Canada, UK, and EU) receive visa-free entry for tourism. However, you should confirm visa and entry requirements based on your nationality prior to departure.",
          },
        },
        {
          "@type": "Question",
          name: "How does the ship's culinary team incorporate Japanese cuisine?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The culinary team incorporates locally sourced fresh seafood, wagyu beef, and regional ingredients purchased in Japanese ports, featuring them in onboard venues like Sakura and during guest chef residences at Anthology.",
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
      q: "Where does Explora Journeys cruise in Japan?",
      a: "Depending on the itinerary, ports may include Tokyo, Osaka, Hiroshima, Hokkaido, and other destinations throughout Japan.",
    },
    {
      q: "Does Explora visit during cherry blossom season?",
      a: "Select spring itineraries allow guests to experience Japan during the famous cherry blossom season, depending on annual bloom timing.",
    },
    {
      q: "Are Japan cruises suitable for first-time visitors?",
      a: "Yes. Cruising provides an excellent introduction to multiple regions of Japan while enjoying luxurious accommodations throughout the journey.",
    },
    {
      q: "What is included on an Explora Japan cruise?",
      a: "Your fare typically includes your oceanfront suite, multiple dining venues, Wi-Fi, entertainment, fitness facilities, wellness amenities, and many onboard services.",
    },
    {
      q: "Are shore excursions included?",
      a: "Most excursions are optional, allowing guests to personalize their sightseeing experience.",
    },
    {
      q: "Is Japan good for luxury travelers?",
      a: "Absolutely. Japan combines world-class hospitality, exceptional cuisine, luxury shopping, fascinating culture, and beautiful landscapes.",
    },
    {
      q: "When is the best time to cruise Japan?",
      a: "Spring and autumn are generally considered the most popular seasons due to mild weather and stunning natural scenery.",
    },
    {
      q: "Is Explora suitable for couples?",
      a: "Yes. The ship's elegant atmosphere and Japan's romantic landscapes make it an excellent choice for couples.",
    },
    {
      q: "How long are Japan cruises?",
      a: "Explora offers a variety of itineraries, ranging from approximately one week to longer Asia voyages.",
    },
    {
      q: "Should I use a travel advisor?",
      a: "Yes. A luxury travel advisor can help you choose the ideal sailing, coordinate international travel, and maximize the value of your vacation.",
    },
    {
      q: "Which ports are used as the primary embarkation ports for Explora in Japan?",
      a: "Explora Journeys' Japan itineraries primarily begin or end in Tokyo (Yokohama port) or Kobe/Osaka, which are easily accessible from international airports.",
    },
    {
      q: "What does Explora's shore program in Japan include?",
      a: "Branded as Destination Experiences, shore programs feature private tea ceremonies, guided tours of historic castles, visits to ancient temples, culinary outings in Osaka, and scenic tours of Mount Fuji.",
    },
    {
      q: "Does Explora offer autumn foliage cruises in Japan?",
      a: "Yes. Select autumn itineraries are designed to align with Japan's stunning autumn leaf season (koyo), showcasing spectacular vibrant maple and ginkgo foliage in regions like Kyoto and Hokkaido.",
    },
    {
      q: "Do I need a visa to take a Japan cruise on Explora Journeys?",
      a: "Passport holders from many countries (such as the US, Canada, UK, and EU) receive visa-free entry for tourism. However, you should confirm visa and entry requirements based on your nationality prior to departure.",
    },
    {
      q: "How does the ship's culinary team incorporate Japanese cuisine?",
      a: "The culinary team incorporates locally sourced fresh seafood, wagyu beef, and regional ingredients purchased in Japanese ports, featuring them in onboard venues like Sakura and during guest chef residences at Anthology.",
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

/* ── Japan Destinations ───────────────────────────────────────── */
const japanDestinations = [
  {
    id: "tokyo",
    title: "Tokyo",
    badge: "Tokyo",
    icon: Landmark,
    image: TokyoImg,

    desc: "Japan's capital is a remarkable blend of innovation and tradition, where centuries-old shrines sit beside futuristic skylines.",

    columns: [
      {
        label: "Highlights May Include:",
        items: [
          "Historic temples",
          "Shibuya Crossing",
          "Luxury shopping",
          "Traditional gardens",
          "Fine dining",
          "Modern architecture",
        ],
      },
    ],

    themeLabel: "Tradition Meets Innovation",
    themeText:
      "Whether you're exploring ancient shrines or enjoying panoramic skyline views, Tokyo offers endless discoveries for every kind of traveler.",
  },

  {
    id: "osaka",
    title: "Osaka",
    badge: "Osaka",
    icon: UtensilsCrossed,
    image: OsakaImg,

    desc: "Known as Japan's culinary capital, Osaka is lively, welcoming, and full of flavor at every turn.",

    columns: [
      {
        label: "Popular Experiences Include:",
        items: [
          "Osaka Castle",
          "Dotonbori district",
          "Street food",
          "Shopping arcades",
          "River cruises",
          "Local markets",
        ],
      },
    ],

    themeLabel: "Japan's Kitchen",
    themeText:
      "Food lovers often consider Osaka one of the highlights of any Japan itinerary, thanks to its vibrant street food culture.",
  },

  {
    id: "kyoto",
    title: "Kyoto",
    badge: "Kyoto",
    icon: Flower2,
    image: KyotoImg,

    desc: "Kyoto preserves much of Japan's cultural heritage, offering an unforgettable glimpse into the country's history.",

    columns: [
      {
        label: "Guests May Explore:",
        items: [
          "Buddhist temples",
          "Zen gardens",
          "Bamboo forests",
          "Geisha districts",
          "Traditional tea houses",
          "Historic shrines",
        ],
      },
    ],

    themeLabel: "Timeless Heritage",
    themeText:
      "A visit to Kyoto, typically reached via nearby ports, provides one of the most culturally rich stops on any Japan voyage.",
  },

  {
    id: "hiroshima",
    title: "Hiroshima",
    badge: "Hiroshima",
    icon: Compass,
    image: HiroshimaImg,

    desc: "Today, Hiroshima is known as a vibrant, peaceful city dedicated to remembrance and hope.",

    columns: [
      {
        label: "Visitors Often Experience:",
        items: [
          "Peace Memorial Park",
          "Hiroshima Castle",
          "Local cuisine",
          "Cultural museums",
          "Beautiful waterfront areas",
        ],
      },
    ],

    themeLabel: "Remembrance & Hope",
    themeText:
      "Many travelers also visit nearby Miyajima Island, famous for its iconic floating torii gate rising from the sea.",
  },

  {
    id: "hokkaido",
    title: "Hokkaido",
    badge: "Hokkaido",
    icon: Mountain,
    image: HokkaidoImg,

    desc: "Northern Japan offers spectacular natural beauty and a quieter, more nature-focused side of the country.",

    columns: [
      {
        label: "Depending on Season, Guests May Enjoy:",
        items: [
          "National parks",
          "Mountain scenery",
          "Flower fields",
          "Fresh seafood",
          "Hot springs",
          "Coastal landscapes",
        ],
      },
    ],

    themeLabel: "Japan's Quiet North",
    themeText:
      "Hokkaido is particularly appealing for travelers seeking a slower, more nature-focused side of Japan.",
  },
];

/* ── Main Component ──────────────────────────────────────────────── */
const JapanCruisesOnExploraJourneys = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [readMore, setReadMore] = useState(false);
  const [activeRegion, setActiveRegion] = useState("tokyo");
  const currentRegion =
    japanDestinations.find((d) => d.id === activeRegion) ||
    japanDestinations[0];

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
          Japan Cruises on Explora Journeys | Luxury Japan Cruise Guide
        </title>
        <meta name="title" content="Japan Cruises on Explora Journeys" />
        <meta
          name="description"
          content="Discover luxury Japan cruises on Explora Journeys. Explore Tokyo, Kyoto, Osaka, Hiroshima, Hokkaido, cherry blossom cruises, cultural experiences, and why Explora offers one of the most elegant ways to experience Japan by sea."
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
            Japan Cruises <br /> on Explora Journeys
          </h1>

          <p>
            Japan is a destination unlike anywhere else in the world. Ancient
            temples stand beside futuristic skylines, peaceful gardens contrast
            with vibrant city streets, and centuries-old traditions continue to
            thrive in one of the world's most technologically advanced nations.
          </p>

          <p>
            Exploring Japan by sea offers a unique perspective. Instead of
            packing and unpacking between cities, you can experience multiple
            regions while enjoying the comfort of a luxurious all-suite ship.
          </p>

          {readMore && (
            <>
              <p>
                Explora Journeys combines sophisticated European hospitality
                with immersive destination experiences, allowing guests to
                discover Japan at a relaxed pace. Whether you're drawn by cherry
                blossoms, historic castles, exceptional cuisine, or dramatic
                coastal scenery, a Japan cruise delivers one of the most
                rewarding travel experiences in Asia.
              </p>

              <p>
                This guide covers every region, the onboard culinary program,
                shore experiences, the best time to sail, and whether an Explora
                Japan cruise is right for your next voyage.
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

      {/* ── WHY CHOOSE EXPLORA FOR JAPAN ─────────────────── */}
      <section
        className="ugt-components-section"
        id="why-choose-explora"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="ugt-components-container">
          <div className="ugt-components-header">
            <h2 className="ugt-components-title">
              Why Choose Explora Journeys <br /> for Japan?
            </h2>

            <div className="adg-c-accent-line"></div>
          </div>

          <div className="ugt-components-list">
            <div className="ugt-component-row">
              <div className="ugt-component-image-wrapper">
                <div className="ugt-component-image-container">
                  <img
                    src={ExploraSuite}
                    alt="Onboard atmosphere aboard Explora Journeys in Japan"
                    className="ugt-component-image"
                  />
                </div>
              </div>

              <div className="ugt-component-content">
                <p className="ugt-component-text">
                  <strong>Japan</strong> perfectly complements Explora Journeys'
                  philosophy of slow luxury travel. Rather than rushing from
                  destination to destination, guests enjoy carefully crafted
                  itineraries, longer port visits, exceptional dining, and
                  personalized service.
                </p>

                <div className="ugt-questions-box">
                  <span className="ugt-questions-title">Guests Enjoy:</span>

                  <ul className="ugt-questions-list">
                    {[
                      "Spacious oceanfront suites",
                      "Boutique luxury atmosphere",
                      "Destination-focused itineraries",
                      "Wellness experiences",
                      "Flexible dining",
                      "Longer time ashore",
                      "Exceptional personalized service",
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
                  Every voyage is designed to help you experience the culture
                  rather than simply visit it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CULTURAL EXPERIENCES & JAPANESE CUISINE ───────────────────────────────────────── */}
      <section
        className="Ejvs-pricing-section"
        id="cultural-experiences"
        style={{ backgroundColor: "var(--bg-white)" }}
      >
        <div className="Ejvs-container">
          <div className="Ejvs-section-header">
            <h2 className="Ejvs-section-title">
              Cultural Experiences &amp; Japanese Cuisine
            </h2>

            <div className="Ejvs-section-accent"></div>

            <p className="Ejvs-section-subtitle">
              Explora Journeys emphasizes authentic destination experiences,
              while the onboard culinary program continues the journey with
              refined, internationally inspired cuisine.
            </p>
          </div>

          <div className="Ejvs-pricing-grid">
            {/* Cultural Experiences */}
            <div className="Ejvs-pricing-card Ejvs-explora-card">
              <div className="Ejvs-card-header">
                <div className="Ejvs-card-icon-wrap">
                  <Compass size={24} className="Ejvs-card-icon" />
                </div>

                <h3 className="Ejvs-card-title">Curated Shore Experiences</h3>
              </div>

              <p className="Ejvs-card-intro">
                These experiences create a deeper connection with Japan's
                remarkable culture, whether joined as a group or explored
                independently.
              </p>

              <ul className="Ejvs-feature-list">
                {[
                  "Tea ceremonies",
                  "Temple visits",
                  "Japanese gardens",
                  "Culinary tours",
                  "Castle explorations",
                  "Artisan workshops",
                  "Sake tastings",
                  "Scenic railway journeys",
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

            {/* Japanese Cuisine */}
            <div className="Ejvs-pricing-card Ejvs-seabourn-card">
              <div className="Ejvs-card-header">
                <div className="Ejvs-card-icon-wrap">
                  <UtensilsCrossed size={24} className="Ejvs-card-icon" />
                </div>

                <h3 className="Ejvs-card-title">Japanese Cuisine</h3>
              </div>

              <p className="Ejvs-card-intro">
                One of the greatest pleasures of visiting Japan is its
                extraordinary food, both ashore and back onboard.
              </p>

              <ul className="Ejvs-feature-list">
                {[
                  "Sushi and sashimi",
                  "Ramen",
                  "Tempura",
                  "Wagyu beef",
                  "Kaiseki dining",
                  "Street food",
                  "Fresh seafood markets",
                  "Sake pairings",
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

      {/* ── LIFE ONBOARD DURING A JAPAN CRUISE ────────────────────────────────────── */}
      <section className="adg-section" id="adg-life-onboard-japan">
        <div className="adg-container">
          <div className="adg-section-header" style={{ marginBottom: "60px" }}>
            <h2 className="adg-h2">Life Onboard During a Japan Cruise</h2>
            <div className="adg-accent-line"></div>

            <p
              className="Asc-body-text"
              style={{ textAlign: "center", marginTop: "15px" }}
            >
              After a day exploring temples, gardens, or vibrant city streets,
              returning to Explora feels like arriving at a luxury boutique
              hotel.
            </p>
          </div>

          <div className="adg-split-layout">
            <div className="adg-content-card-side">
              <img
                src={LifeOnboardImage}
                alt="Luxury lounges and ocean views aboard Explora Journeys during a Japan cruise"
                className="adg-side-image"
                style={{ height: "42vh" }}
              />

              <div className="adg-info-card">
                <div className="adg-card-meta">
                  <Sparkles size={28} />
                  <span className="adg-meta-label">Relax &amp; Recharge</span>
                </div>

                <p className="adg-card-lead">
                  The contrast between busy ports and the calm atmosphere
                  onboard creates a wonderfully balanced vacation, blending
                  cultural discovery with luxurious relaxation.
                </p>
              </div>
            </div>

            <div className="adg-list-side">
              {[
                "Gourmet dining",
                "Live music",
                "Ocean Wellness Spa",
                "Infinity pools",
                "Elegant lounges",
                "Spacious suites",
                "Quiet evenings at sea",
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

      {/* ── SEASONAL BEAUTY THROUGHOUT THE YEAR ───────────────────────────────── */}
      <section
        className="adg-c-section adg-c-bg-white"
        id="best-time-to-cruise"
      >
        <div className="adg-c-container">
          <div className="adg-c-section-header">
            <span className="adg-c-eyebrow">Plan Your Sailing</span>

            <h2 className="adg-c-h2">Seasonal Beauty Throughout the Year</h2>

            <div className="adg-c-accent-line"></div>

            <p className="Asc-section-intro">
              Japan changes dramatically with each season, making every Explora
              voyage unique.
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
                  Cherry Blossom Season
                </span>

                <h3 className="adg-c-venue-name">Spring</h3>

                <p className="adg-c-venue-highlight">
                  Perhaps the Most Famous Time to Visit
                </p>
              </div>

              <ul className="adg-c-venue-list">
                {[
                  "Cherry blossoms",
                  "Comfortable temperatures",
                  "Parks in bloom",
                  "Traditional festivals",
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
                  Beautiful photography opportunities make spring Japan's most
                  in-demand sailing season.
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
                  Warm & Vibrant
                </span>

                <h3 className="adg-c-venue-name">Summer</h3>

                <p className="adg-c-venue-highlight">
                  Lush Landscapes & Coastal Exploration
                </p>
              </div>

              <ul className="adg-c-venue-list">
                {[
                  "Lush green landscapes",
                  "Vibrant festivals",
                  "Coastal exploration",
                  "Longer daylight hours",
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
                  Warm weather and long daylight hours make summer ideal for
                  coastal sightseeing.
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
                  Fall Foliage
                </span>

                <h3 className="adg-c-venue-name">Autumn</h3>

                <p className="adg-c-venue-highlight">
                  Often Considered the Best Season
                </p>
              </div>

              <ul className="adg-c-venue-list">
                {[
                  "Brilliant fall foliage",
                  "Comfortable weather",
                  "Harvest cuisine",
                  "Smaller crowds",
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
                  Many luxury travelers consider autumn the best time to cruise
                  Japan.
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
                  Snow & Serenity
                </span>

                <h3 className="adg-c-venue-name">Winter</h3>

                <p className="adg-c-venue-highlight">
                  Peaceful Coastal Landscapes
                </p>
              </div>

              <ul className="adg-c-venue-list">
                {[
                  "Snow-covered scenery",
                  "Winter festivals",
                  "Hot springs",
                  "Seasonal seafood",
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
                  Certain itineraries showcase peaceful, snow-dusted coastal
                  landscapes and seasonal cuisine.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── EXPLORE JAPAN'S MOST FASCINATING DESTINATIONS ───── */}
      <section className="luc-destinations-section" id="luc-destinations">
        <div className="luc-destinations-container">
          <div className="luc-destinations-header">
            <h2 className="luc-destinations-title">
              Explore Japan's Most Fascinating Destinations
            </h2>

            <div className="adg-c-accent-line"></div>

            <p className="luc-destinations-intro">
              Explora Journeys visits many of Japan's most iconic cities and
              regions, each offering its own unique culture and history.
            </p>
          </div>

          {/* Layout */}
          <div className="luc-dest-layout">
            {/* Sidebar nav */}
            <nav className="luc-dest-nav">
              {japanDestinations.map((item) => {
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

      {/* ── PLANNING YOUR JAPAN CRUISE ───────────────────────── */}
      <section className="ugt-advantage-section">
        <div className="Asc-container">
          <div className="ugt-advantage-header">
            <span className="ugt-advantage-eyebrow">Plan with Confidence</span>

            <h2 className="ugt-advantage-title">Planning Your Japan Cruise</h2>

            <div className="Asc-accent-line"></div>

            <p className="ugt-advantage-intro">
              A little preparation can make your Japan cruise even more
              rewarding. These simple tips will help you choose the right
              itinerary, experience the best seasonal highlights, and enjoy a
              seamless journey from start to finish.
            </p>
          </div>

          <div className="ugt-advantage-grid">
            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <CalendarClock size={28} strokeWidth={1.5} />
              </div>

              <h4 className="ugt-card-title">Book Early</h4>

              <p className="ugt-card-desc">
                Japan sailings are among the fastest-selling luxury cruise
                itineraries, so reserving early provides the best choice of
                dates and suites.
              </p>
            </div>

            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <Leaf size={28} strokeWidth={1.5} />
              </div>

              <h4 className="ugt-card-title">Consider the Season</h4>

              <p className="ugt-card-desc">
                Choose spring for cherry blossoms, autumn for colorful foliage,
                or summer for vibrant festivals and coastal exploration.
              </p>
            </div>

            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <Building2 size={28} strokeWidth={1.5} />
              </div>

              <h4 className="ugt-card-title">Arrive Early</h4>

              <p className="ugt-card-desc">
                Spend several nights before or after your cruise exploring
                Tokyo, Kyoto, or another fascinating Japanese destination.
              </p>
            </div>

            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <Footprints size={28} strokeWidth={1.5} />
              </div>

              <h4 className="ugt-card-title">Pack Comfortable Walking Shoes</h4>

              <p className="ugt-card-desc">
                Japanese cities, gardens, temples, and historic districts are
                best explored on foot, making comfortable footwear essential.
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
                Professional guidance helps you select the ideal itinerary,
                arrange flights, and personalize every aspect of your Japan
                cruise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SCENIC CRUISING ALONG JAPAN'S COAST ───────────────────────────────────────── */}
      <section
        className="adg-c-section adg-c-bg-white"
        id="scenic-cruising-japan"
      >
        <div className="adg-c-container">
          <div className="adg-c-section-header">
            <h2 className="adg-c-h2">Scenic Cruising Along Japan's Coast</h2>
            <div className="adg-c-accent-line"></div>

            <p className="Asc-section-intro">
              Some of the most memorable moments of a Japan cruise occur between
              destinations, when the scenery becomes part of the journey.
            </p>
          </div>

          <div className="adg-c-overview-layout">
            <div className="adg-c-overview-icons">
              {[
                "Sunrise from your private terrace",
                "Dramatic coastlines",
                "Volcanic landscapes",
                "Island views",
                "Peaceful sea days",
                "Ocean sunsets",
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
                    Japan's coastline is as captivating as its cities, offering
                    breathtaking scenery throughout your voyage.
                  </p>
                </div>
              </div>

              <div className="adg-c-overview-image-wrap">
                <img
                  src={JapanCoastlineImage}
                  alt="Scenic coastline viewed from an Explora Journeys ship in Japan"
                  className="adg-c-overview-img"
                />

                <div className="adg-c-overview-img-overlay">
                  <span className="adg-c-overview-img-label">
                    Discover Japan by Sea
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
              Personalized Japan Cruise Planning
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
                Create Your Perfect Japan Journey
              </h3>

              <p className="Avr-planning-left-body">
                Planning a Japan cruise involves multiple travel details. A
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
                    label: "Compare itineraries",
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
                    label: "Coordinate private transfers",
                  },
                  {
                    icon: <Sparkles size={18} />,
                    label: "Recommend cultural experiences",
                  },
                  {
                    icon: <BadgePercent size={18} />,
                    label: "Secure exclusive promotions",
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
                Their expertise ensures a seamless journey from departure to
                return home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHO WILL LOVE A JAPAN CRUISE ─────────────────────────────── */}
      <section className="Asc-section Asc-bg-white" id="Asc-who">
        <div className="Asc-container">
          <div className="Asc-section-header">
            <h2 className="Asc-h2">Who Will Love a Japan Cruise?</h2>
            <div className="Asc-accent-line"></div>
            <p className="Asc-faq-intro">
              These voyages are particularly popular with couples, solo
              travelers, retirees, food enthusiasts, and experienced
              international travelers.
            </p>
          </div>

          <div className="Asc-who-grid">
            <div className="Asc-who-card Asc-who-yes">
              <h3 className="Asc-who-title">
                These Voyages Are Ideal for Travelers Who Enjoy:
              </h3>
              <ul className="Asc-who-list">
                {[
                  "Cultural immersion",
                  "History",
                  "Fine dining",
                  "Photography",
                  "Gardens",
                  "Architecture",
                  "Luxury accommodations",
                  "Slow travel",
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
                  "Character entertainment",
                  "Large casinos",
                  "High-energy nightlife",
                  "Broadway-style productions",
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
            Travelers seeking sophisticated luxury and destination immersion
            will appreciate Explora's approach.
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
              Everything travelers need to know about Japan cruises on Explora
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
            src={CTAImage}
            alt="Explora Journeys sailing along the coast of Japan"
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
                  Discover Japan <br /> at Explora's Pace
                </h2>
                <div className="Asc-help-accent"></div>
              </div>

              <div className="Asc-help-grid">
                <div className="Asc-help-info">
                  <p className="Asc-help-intro">
                    A journey through Japan is unlike any other cruise
                    experience. Every port reveals a different side of the
                    country — from futuristic skylines and ancient temples to
                    peaceful gardens, dramatic coastlines, and world-renowned
                    cuisine.
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
                        Explora Journeys enhances this extraordinary destination
                        with spacious all-suite accommodations, exceptional
                        personalized service, refined dining, and thoughtfully
                        designed itineraries that encourage meaningful
                        exploration rather than hurried sightseeing.
                      </p>
                      <br />
                      <p className="Asc-help-intro">
                        For travelers seeking an elegant, culturally immersive,
                        and unforgettable voyage through Japan, Explora Journeys
                        offers one of the finest luxury cruise experiences
                        available.
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
                      Start Planning Your Japan Voyage
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
                      "Recommend the ideal Japan itinerary for your travel style",
                      "Advise on which regions and ports to prioritize",
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
                      label: "Planning Your First Explora Journey",
                      path: "/planning-your-first-explora-journey",
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
                      label: "Mediterranean Cruises on Explora Journeys",
                      path: "/mediterranean-cruises-on-explora-journeys",
                    },
                    {
                      label: "Greece & Greek Isles Cruises on Explora Journeys",
                      path: "/greece-greek-isles-cruises-on-explora-journeys",
                    },
                    {
                      label: "What to Pack for an Explora Cruise",
                      path: "/what-to-pack-for-an-explora-cruise",
                    },
                    {
                      label: "How to Get the Best Value on Explora Journeys",
                      path: "/how-to-get-the-best-value-on-explora-journeys",
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

export default JapanCruisesOnExploraJourneys;
