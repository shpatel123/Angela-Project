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
  Landmark,
  Building2,
  Camera,
  Layers,
  UtensilsCrossed,
  MapPinned,
  Home,
  Hotel,
  Plane,
  BadgePercent,
  ShieldCheck,
  CalendarClock,
  Waves,
  Anchor,
} from "lucide-react";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela3.jpeg";

import HeroImage1 from "../../assets/CaribbeanCruisesExploraJourneys/explora-norway-fjord-cruise.jpg";
// import HeroImage2 from "../../assets/CaribbeanCruisesExploraJourneys/explora-copenhagen-nyhavn-aerial.tif";
import HeroImage3 from "../../assets/WhichMediterraneanItineraryIsBest/explora-II-mediterranean-coastal-cruise-view.jpg";
import ExploraPool from "../../assets/HowAdvanceShouldBookExplora/explora-III-oceanfront-infinity-pool-luxury-cruise-deck.jpg";
import ExploraDining from "../../assets/IsExploraGoodForFamilies/EXPLORA-Crema Cafe.webp";
import NorthernEuropeCoastlineImage from "../../assets/HowAdvanceShouldBookExplora/allinn-estonia-old-town-summer-travel-aerial.jpg";
import CTAImage from "../../assets/CaribbeanCruisesExploraJourneys/explora-II-mediterranean-coastal-cruise-view.jpg";

// import NorwayImg from "../../assets/NorthernEuropeCruisesExploraJourneys/geirangerfjord-norway.jpg";
// import CopenhagenImg from "../../assets/NorthernEuropeCruisesExploraJourneys/copenhagen-nyhavn-denmark.jpg";
// import StockholmImg from "../../assets/NorthernEuropeCruisesExploraJourneys/stockholm-gamla-stan-sweden.jpg";
// import HelsinkiImg from "../../assets/NorthernEuropeCruisesExploraJourneys/helsinki-cathedral-finland.jpg";
// import IcelandImg from "../../assets/NorthernEuropeCruisesExploraJourneys/reykjavik-waterfall-iceland.jpg";
// import ScotlandImg from "../../assets/NorthernEuropeCruisesExploraJourneys/edinburgh-castle-scotland.jpg";

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
        "https://tripsandships.com/northern-europe-cruises-on-explora-journeys/#webpage",
      name: "Northern Europe Cruises on Explora Journeys",
      url: "https://tripsandships.com/northern-europe-cruises-on-explora-journeys",
      description:
        "Discover luxury Northern Europe cruises on Explora Journeys. Explore Norway's fjords, the Baltic capitals, Iceland, Scotland, and Northern Europe with elegant all-suite accommodations and immersive itineraries.",
    },
    {
      "@type": "Article",
      "@id":
        "https://tripsandships.com/northern-europe-cruises-on-explora-journeys/#article",
      headline: "Northern Europe Cruises on Explora Journeys",
      description:
        "A complete guide to cruising Northern Europe with Explora Journeys, covering destinations, seasonal highlights, fjords, Baltic capitals, dining, the best time to sail, and who these voyages suit best.",
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
        "https://tripsandships.com/northern-europe-cruises-on-explora-journeys/#breadcrumb",
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
          name: "Northern Europe Cruises on Explora Journeys",
          item: "https://tripsandships.com/northern-europe-cruises-on-explora-journeys",
        },
      ],
    },
    {
      "@type": "TouristTrip",
      "@id":
        "https://tripsandships.com/northern-europe-cruises-on-explora-journeys/#touristtrip",
      name: "Northern Europe Cruise with Explora Journeys",
      touristType: "Luxury travelers, couples, retirees, solo travelers",
      itinerary: {
        "@type": "ItemList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Norway" },
          { "@type": "ListItem", position: 2, name: "Copenhagen, Denmark" },
          { "@type": "ListItem", position: 3, name: "Stockholm, Sweden" },
          { "@type": "ListItem", position: 4, name: "Helsinki, Finland" },
          { "@type": "ListItem", position: 5, name: "Iceland" },
          { "@type": "ListItem", position: 6, name: "Scotland" },
        ],
      },
    },
    {
      "@type": "Cruise",
      "@id":
        "https://tripsandships.com/northern-europe-cruises-on-explora-journeys/#cruise",
      name: "Explora Journeys Northern Europe Cruise",
      provider: {
        "@type": "TravelAgency",
        name: "Trips & Ships Luxury Travel",
      },
      departurePort: "Various Northern Europe Ports",
      description:
        "Luxury Northern Europe itineraries featuring longer port visits, curated shore experiences, and refined cuisine aboard an all-suite ship.",
    },
    {
      "@type": "Service",
      "@id":
        "https://tripsandships.com/northern-europe-cruises-on-explora-journeys/#service",
      serviceType: "Luxury Cruise Vacation Planning & Booking Support",
      provider: {
        "@type": "TravelAgency",
        name: "Trips & Ships Luxury Travel",
      },
      areaServed: "Worldwide",
      description:
        "Personalized planning support for Explora Journeys Northern Europe sailings, including itinerary selection, suite categories, and shore experiences.",
    },
    {
      "@type": "Review",
      "@id":
        "https://tripsandships.com/northern-europe-cruises-on-explora-journeys/#review",
      itemReviewed: {
        "@type": "Product",
        name: "Explora Journeys Northern Europe Cruise",
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
        "Explora Journeys offers one of the most refined, immersive ways to experience Northern Europe, combining scenic fjord cruising with Baltic capitals and impeccable service.",
    },
    {
      "@type": "ItemList",
      "@id":
        "https://tripsandships.com/northern-europe-cruises-on-explora-journeys/#itemlist",
      name: "What This Northern Europe Cruises on Explora Journeys Guide Covers",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Why Choose Explora Journeys for Northern Europe",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Norway's Magnificent Fjords & Baltic Capitals",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Shore Experiences & Dining Inspired by Europe",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Life Onboard Between Destinations",
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Best Time to Cruise Northern Europe",
        },
        {
          "@type": "ListItem",
          position: 6,
          name: "Explore Northern Europe's Iconic Destinations",
        },
        {
          "@type": "ListItem",
          position: 7,
          name: "Tips for Planning Your Northern Europe Cruise",
        },
        {
          "@type": "ListItem",
          position: 8,
          name: "Who Will Love a Northern Europe Cruise?",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id":
        "https://tripsandships.com/northern-europe-cruises-on-explora-journeys/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Where does Explora Journeys cruise in Northern Europe?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Depending on the itinerary, destinations may include Norway, Denmark, Sweden, Finland, Iceland, Scotland, and the Baltic region.",
          },
        },
        {
          "@type": "Question",
          name: "Are Norwegian fjords included?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Many Northern Europe itineraries feature scenic cruising through Norway's world-famous fjords.",
          },
        },
        {
          "@type": "Question",
          name: "What is included on an Explora Northern Europe cruise?",
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
            text: "Most shore experiences are optional, allowing guests to customize their vacation.",
          },
        },
        {
          "@type": "Question",
          name: "When is the best time to cruise Northern Europe?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Late spring through early autumn offers the most favorable weather and longest daylight hours.",
          },
        },
        {
          "@type": "Question",
          name: "Is Explora suitable for couples?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. The elegant atmosphere, spacious suites, and scenic destinations make Northern Europe ideal for romantic travel.",
          },
        },
        {
          "@type": "Question",
          name: "What should I pack?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Layered clothing, waterproof outerwear, comfortable walking shoes, sunglasses, and smart casual evening attire are recommended.",
          },
        },
        {
          "@type": "Question",
          name: "Are Northern Europe cruises good for first-time visitors?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. These itineraries provide an excellent introduction to Scandinavia, the Baltic region, and Northern Europe's spectacular landscapes.",
          },
        },
        {
          "@type": "Question",
          name: "How long are Northern Europe cruises?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Explora offers a variety of itineraries, typically ranging from one week to longer, more immersive voyages.",
          },
        },
        {
          "@type": "Question",
          name: "Should I use a travel advisor?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. A luxury travel advisor can help you select the ideal itinerary, maximize promotions, and coordinate every aspect of your journey.",
          },
        },
        {
          "@type": "Question",
          name: "Which Explora Journeys ships sail in Northern Europe?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Explora I and Explora II are typically scheduled for Northern European itineraries, both featuring identical all-suite layouts, refined dining, and luxurious amenities.",
          },
        },
        {
          "@type": "Question",
          name: "Are gratuities included on Explora Journeys?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, Explora Journeys operates on an all-inclusive basis, meaning all gratuities for onboard services (dining, suite hosts, and spa staff) are fully included in your cruise fare.",
          },
        },
        {
          "@type": "Question",
          name: "What is the onboard currency for Northern Europe voyages?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The onboard currency for Northern European sailings is the Euro (€). Major credit cards are used to settle your onboard account at the end of the journey.",
          },
        },
        {
          "@type": "Question",
          name: "Is there a formal dress code in the evening?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No, there are no formal nights. The evening dress code is 'Elegant Casual,' which means sophisticated resort wear. Jackets and ties are optional.",
          },
        },
        {
          "@type": "Question",
          name: "Are children welcome on Northern Europe cruises?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, children are welcome. Explora Journeys features the Nautilus Club for kids and teenagers, though the overall onboard experience is designed to feel sophisticated and adult-centric.",
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
      q: "Where does Explora Journeys cruise in Northern Europe?",
      a: "Depending on the itinerary, destinations may include Norway, Denmark, Sweden, Finland, Iceland, Scotland, and the Baltic region.",
    },
    {
      q: "Are Norwegian fjords included?",
      a: "Many Northern Europe itineraries feature scenic cruising through Norway's world-famous fjords.",
    },
    {
      q: "What is included on an Explora Northern Europe cruise?",
      a: "Your fare typically includes your oceanfront suite, gourmet dining, Wi-Fi, entertainment, fitness facilities, wellness amenities, and many onboard experiences.",
    },
    {
      q: "Are shore excursions included?",
      a: "Most shore experiences are optional, allowing guests to customize their vacation.",
    },
    {
      q: "When is the best time to cruise Northern Europe?",
      a: "Late spring through early autumn offers the most favorable weather and longest daylight hours.",
    },
    {
      q: "Is Explora suitable for couples?",
      a: "Yes. The elegant atmosphere, spacious suites, and scenic destinations make Northern Europe ideal for romantic travel.",
    },
    {
      q: "What should I pack?",
      a: "Layered clothing, waterproof outerwear, comfortable walking shoes, sunglasses, and smart casual evening attire are recommended.",
    },
    {
      q: "Are Northern Europe cruises good for first-time visitors?",
      a: "Absolutely. These itineraries provide an excellent introduction to Scandinavia, the Baltic region, and Northern Europe's spectacular landscapes.",
    },
    {
      q: "How long are Northern Europe cruises?",
      a: "Explora offers a variety of itineraries, typically ranging from one week to longer, more immersive voyages.",
    },
    {
      q: "Should I use a travel advisor?",
      a: "Yes. A luxury travel advisor can help you select the ideal itinerary, maximize promotions, and coordinate every aspect of your journey.",
    },
    {
      q: "Which Explora Journeys ships sail in Northern Europe?",
      a: "Explora I and Explora II are typically scheduled for Northern European itineraries, both featuring identical all-suite layouts, refined dining, and luxurious amenities.",
    },
    {
      q: "Are gratuities included on Explora Journeys?",
      a: "Yes, Explora Journeys operates on an all-inclusive basis, meaning all gratuities for onboard services (dining, suite hosts, and spa staff) are fully included in your cruise fare.",
    },
    {
      q: "What is the onboard currency for Northern Europe voyages?",
      a: "The onboard currency for Northern European sailings is the Euro (€). Major credit cards are used to settle your onboard account at the end of the journey.",
    },
    {
      q: "Is there a formal dress code in the evening?",
      a: "No, there are no formal nights. The evening dress code is 'Elegant Casual,' which means sophisticated resort wear. Jackets and ties are optional.",
    },
    {
      q: "Are children welcome on Northern Europe cruises?",
      a: "Yes, children are welcome. Explora Journeys features the Nautilus Club for kids and teenagers, though the overall onboard experience is designed to feel sophisticated and adult-centric.",
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

/* ── Northern Europe Destinations ───────────────────────────────────────── */
const northernEuropeDestinations = [
  {
    id: "norway",
    title: "Norway",
    badge: "Norway",
    icon: Mountain,
    // image: NorwayImg,

    desc: "Norway is famous for its breathtaking fjords and dramatic natural scenery, creating one of the world's most beautiful cruising experiences.",

    columns: [
      {
        label: "Guests May Experience:",
        items: [
          "Geirangerfjord",
          "Sognefjord",
          "Bergen",
          "Ålesund",
          "Stavanger",
          "Scenic mountain villages",
        ],
      },
    ],

    themeLabel: "Fjords & Mountains",
    themeText:
      "Towering waterfalls, snow-capped peaks, and peaceful waterways create one of the world's most beautiful cruising experiences.",
  },

  {
    id: "copenhagen",
    title: "Copenhagen",
    badge: "Copenhagen",
    icon: Landmark,
    // image: CopenhagenImg,

    desc: "Denmark's capital blends historic charm with modern Scandinavian design.",

    columns: [
      {
        label: "Popular Attractions Include:",
        items: [
          "Nyhavn Harbor",
          "Tivoli Gardens",
          "Royal Palaces",
          "Canal tours",
          "World-class restaurants",
          "Boutique shopping",
        ],
      },
    ],

    themeLabel: "Scandinavian Charm",
    themeText:
      "Copenhagen consistently ranks among Europe's most enjoyable cities.",
  },

  {
    id: "stockholm",
    title: "Stockholm",
    badge: "Stockholm",
    icon: Building2,
    // image: StockholmImg,

    desc: "Built across numerous islands, Stockholm combines elegant architecture with natural beauty.",

    columns: [
      {
        label: "Highlights Include:",
        items: [
          "Gamla Stan (Old Town)",
          "Royal Palace",
          "Museums",
          "Waterfront promenades",
          "Scandinavian cuisine",
          "Beautiful archipelago views",
        ],
      },
    ],

    themeLabel: "A City of Islands",
    themeText:
      "Stockholm's archipelago setting makes it one of the most scenic capitals in Northern Europe.",
  },

  {
    id: "helsinki",
    title: "Helsinki",
    badge: "Helsinki",
    icon: Compass,
    // image: HelsinkiImg,

    desc: "Helsinki offers a fascinating mix of Nordic design and cultural heritage.",

    columns: [
      {
        label: "Visitors Enjoy:",
        items: [
          "Historic cathedrals",
          "Local markets",
          "Modern architecture",
          "Design districts",
          "Waterfront parks",
          "Traditional Finnish saunas",
        ],
      },
    ],

    themeLabel: "Nordic Design",
    themeText:
      "Helsinki's blend of design heritage and coastal scenery makes it a memorable Baltic port of call.",
  },

  {
    id: "iceland",
    title: "Iceland",
    badge: "Iceland",
    icon: Snowflake,
    // image: IcelandImg,

    desc: "Select Northern Europe itineraries may include Iceland's extraordinary landscapes, combining dramatic nature with unique cultural experiences.",

    columns: [
      {
        label: "Guests May Explore:",
        items: [
          "Reykjavik",
          "Waterfalls",
          "Volcanic scenery",
          "Black sand beaches",
          "Geothermal areas",
          "Whale watching",
        ],
      },
    ],

    themeLabel: "Dramatic Landscapes",
    themeText:
      "Iceland combines dramatic nature with unique cultural experiences unlike anywhere else on the itinerary.",
  },

  {
    id: "scotland",
    title: "Scotland",
    badge: "Scotland",
    icon: Waves,
    // image: ScotlandImg,

    desc: "Scotland offers rugged coastlines, historic castles, and picturesque villages.",

    columns: [
      {
        label: "Possible Experiences Include:",
        items: [
          "Edinburgh",
          "Highland scenery",
          "Whisky distilleries",
          "Ancient castles",
          "Coastal wildlife",
          "Scenic drives",
        ],
      },
    ],

    themeLabel: "Coastlines & Castles",
    themeText:
      "Scotland's rugged coastlines and historic castles offer a memorable contrast to Scandinavia's cities.",
  },
];

/* ── Main Component ──────────────────────────────────────────────── */
const NorthernEuropeCruisesOnExploraJourneys = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [readMore, setReadMore] = useState(false);
  const [activeRegion, setActiveRegion] = useState("norway");
  const currentRegion =
    northernEuropeDestinations.find((d) => d.id === activeRegion) ||
    northernEuropeDestinations[0];

  const ActiveIcon = currentRegion.icon;

  const images = [HeroImage1, HeroImage3];

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
          Northern Europe Cruises on Explora Journeys | Luxury Northern Europe
          Cruise Guide
        </title>
        <meta
          name="title"
          content="Northern Europe Cruises on Explora Journeys"
        />
        <meta
          name="description"
          content="Discover luxury Northern Europe cruises on Explora Journeys. Explore Norway's fjords, the Baltic capitals, Iceland, Scotland, and Northern Europe with elegant all-suite accommodations and immersive itineraries."
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
            Northern Europe Cruises <br /> on Explora Journeys
          </h1>

          <p>
            Northern Europe is one of the world's most spectacular cruise
            destinations, offering dramatic fjords, medieval cities, charming
            fishing villages, majestic castles, and vibrant cultural capitals.
          </p>

          <p>
            Explora Journeys combines these unforgettable destinations with
            contemporary European luxury, creating a cruise experience that is
            both relaxing and deeply immersive.
          </p>

          {readMore && (
            <>
              <p>
                Spacious all-suite accommodations, exceptional dining,
                personalized service, and thoughtfully crafted itineraries allow
                guests to discover Northern Europe at an unhurried pace.
              </p>

              <p>
                This guide covers every region, the onboard culinary program,
                shore experiences, the best time to sail, and whether an Explora
                Northern Europe cruise is right for your next voyage.
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

      {/* ── WHY CHOOSE EXPLORA FOR NORTHERN EUROPE ─────────────────── */}
      <section
        className="ugt-components-section"
        id="why-choose-explora"
        style={{ backgroundColor: "var(--bg-white)" }}
      >
        <div className="ugt-components-container">
          <div className="ugt-components-header">
            <h2 className="ugt-components-title">
              Why Choose Explora Journeys <br /> for Northern Europe?
            </h2>

            <div className="adg-c-accent-line"></div>
          </div>

          <div className="ugt-components-list">
            <div className="ugt-component-row">
              <div className="ugt-component-image-wrapper">
                <div className="ugt-component-image-container">
                  <img
                    src={ExploraPool}
                    alt="Onboard atmosphere aboard Explora Journeys in Northern Europe"
                    className="ugt-component-image"
                  />
                </div>
              </div>

              <div className="ugt-component-content">
                <p className="ugt-component-text">
                  <strong>Northern Europe</strong> perfectly complements
                  Explora's philosophy of destination-focused luxury travel.
                  Instead of rushing through famous destinations, Explora
                  encourages meaningful exploration and unforgettable moments.
                </p>

                <div className="ugt-questions-box">
                  <span className="ugt-questions-title">Guests Enjoy:</span>

                  <ul className="ugt-questions-list">
                    {[
                      "Oceanfront suites with private terraces",
                      "Boutique luxury atmosphere",
                      "Longer port stays",
                      "Personalized service",
                      "Multiple gourmet restaurants",
                      "Wellness experiences",
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

      {/* NORWAY'S FJORDS & BALTIC CAPITALS */}
      <section
        className="dve-winner-section"
        id="dve-fjords-baltic"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="dve-container">
          <div className="dve-section-header">
            <h2 className="dve-section-title">
              Norway's Magnificent Fjords &amp; Baltic Capitals
            </h2>
            <div className="dve-section-accent"></div>
            <p className="dve-section-subtitle">
              Two of the greatest highlights of a Northern Europe cruise —
              dramatic natural scenery and centuries of history — often appear
              on the same itinerary.
            </p>
          </div>

          <div className="dve-winner-grid">
            {/* Norway's Fjords */}
            <div className="dve-winner-card dve-disney-winner">
              <div className="dve-winner-image-wrap">
                <img
                  //   src={NorthernEuropeCoastlineImage}
                  alt="Sailing past Norway's fjords aboard Explora Journeys"
                  className="dve-winner-img"
                />
                <span className="dve-winner-badge">Scenic Cruising</span>
              </div>

              <div className="dve-winner-content">
                <h3 className="dve-winner-title">
                  Norway's Magnificent Fjords
                </h3>

                <p className="dve-winner-intro">
                  For many travelers, the Norwegian fjords are the highlight of
                  a Northern Europe cruise. Explora's spacious decks and private
                  terraces offer exceptional panoramic views throughout the
                  journey.
                </p>

                <div className="dve-winner-divider"></div>

                <h4 className="dve-advantages-title">Imagine Sailing Past:</h4>

                <ul className="dve-advantages-list">
                  {[
                    "Towering cliffs",
                    "Waterfalls cascading into the sea",
                    "Snow-covered mountains",
                    "Tiny villages",
                    "Crystal-clear waterways",
                    "Peaceful natural landscapes",
                  ].map((item, i) => (
                    <li key={i}>
                      <Check size={18} className="dve-advantage-icon" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Baltic Capitals */}
            <div className="dve-winner-card dve-viking-winner">
              <div className="dve-winner-image-wrap">
                <img
                  //   src={LifeOnboardImage}
                  alt="Historic Baltic capitals visited by Explora Journeys"
                  className="dve-winner-img"
                />
                <span className="dve-winner-badge">Baltic Capitals</span>
              </div>

              <div className="dve-winner-content">
                <h3 className="dve-winner-title">Baltic Capitals</h3>

                <p className="dve-winner-intro">
                  Northern Europe cruises often include several fascinating
                  Baltic cities on one itinerary, each offering its own
                  distinctive history and culture.
                </p>

                <div className="dve-winner-divider"></div>

                <h4 className="dve-advantages-title">Guests May Discover:</h4>

                <ul className="dve-advantages-list">
                  {[
                    "Medieval old towns",
                    "Royal palaces",
                    "UNESCO World Heritage Sites",
                    "Historic churches",
                    "Local markets",
                    "Contemporary art and design",
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

      {/* ── SHORE EXPERIENCES & DINING INSPIRED BY EUROPE ───────────────────────────────────────── */}
      <section
        className="Ejvs-pricing-section"
        id="shore-experiences"
        style={{ backgroundColor: "var(--bg-white)" }}
      >
        <div className="Ejvs-container">
          <div className="Ejvs-section-header">
            <h2 className="Ejvs-section-title">
              Shore Experiences &amp; Dining Inspired by Europe
            </h2>

            <div className="Ejvs-section-accent"></div>

            <p className="Ejvs-section-subtitle">
              Explora Journeys curates shore experiences that help guests
              connect with each destination, while the onboard culinary program
              reflects the flavors of Northern Europe.
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
                Guests may also explore independently thanks to convenient port
                locations.
              </p>

              <ul className="Ejvs-feature-list">
                {[
                  "Fjord sightseeing",
                  "Castle tours",
                  "Viking history experiences",
                  "Culinary tastings",
                  "Scenic railway journeys",
                  "Wildlife cruises",
                  "Museum visits",
                  "Local artisan workshops",
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

            {/* Dining Inspired by Europe */}
            <div className="Ejvs-pricing-card Ejvs-seabourn-card">
              <div className="Ejvs-card-header">
                <div className="Ejvs-card-icon-wrap">
                  <UtensilsCrossed size={24} className="Ejvs-card-icon" />
                </div>

                <h3 className="Ejvs-card-title">Dining Inspired by Europe</h3>
              </div>

              <p className="Ejvs-card-intro">
                Explora's culinary program reflects the destinations you'll
                visit, making every meal another highlight of the journey.
              </p>

              <ul className="Ejvs-feature-list">
                {[
                  "Fresh seafood",
                  "Scandinavian specialties",
                  "Artisan breads",
                  "European cheeses",
                  "Seasonal produce",
                  "International cuisine",
                  "Premium wines",
                  "Gourmet desserts",
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

      {/* ── LIFE ONBOARD BETWEEN DESTINATIONS ────────────────────────────────────── */}
      <section className="adg-section" id="adg-life-onboard-northern-europe">
        <div className="adg-container">
          <div className="adg-section-header" style={{ marginBottom: "60px" }}>
            <h2 className="adg-h2">Life Onboard Between Destinations</h2>
            <div className="adg-accent-line"></div>

            <p
              className="Asc-body-text"
              style={{ textAlign: "center", marginTop: "15px" }}
            >
              After a day of exploration, guests return to a luxurious sanctuary
              at sea, where the peaceful atmosphere complements Northern
              Europe's landscapes.
            </p>
          </div>

          <div className="adg-split-layout">
            <div className="adg-content-card-side">
              <img
                src={ExploraDining}
                alt="Elegant lounges and ocean views aboard Explora Journeys in Northern Europe"
                className="adg-side-image"
                style={{ height: "42vh" }}
              />

              <div className="adg-info-card">
                <div className="adg-card-meta">
                  <Sparkles size={28} />
                  <span className="adg-meta-label">Relax &amp; Recharge</span>
                </div>

                <p className="adg-card-lead">
                  The contrast between historic ports and the calm atmosphere
                  onboard creates a wonderfully balanced vacation, blending
                  cultural discovery with luxurious relaxation.
                </p>
              </div>
            </div>

            <div className="adg-list-side">
              {[
                "Sunset cocktails",
                "Live music",
                "Ocean Wellness Spa",
                "Infinity pools",
                "Elegant lounges",
                "Fine dining",
                "Ocean-view relaxation",
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

      {/* ── BEST TIME TO CRUISE NORTHERN EUROPE ───────────────────────────────────────── */}
      <section
        className="adg-c-section adg-c-bg-white"
        id="best-time-to-cruise"
      >
        <div className="adg-c-container">
          <div className="adg-c-section-header">
            <span className="adg-c-eyebrow">Plan Your Sailing</span>

            <h2 className="adg-c-h2">Best Time to Cruise Northern Europe</h2>

            <div className="adg-c-accent-line"></div>

            <p className="Asc-section-intro">
              Northern Europe is primarily a seasonal cruise destination, with
              each season offering unique scenery and experiences.
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
                  Blooming Season
                </span>

                <h3 className="adg-c-venue-name">Spring</h3>

                <p className="adg-c-venue-highlight">
                  Mild Weather, Fewer Crowds
                </p>
              </div>

              <ul className="adg-c-venue-list">
                {[
                  "Blooming landscapes",
                  "Mild temperatures",
                  "Fewer crowds",
                  "Excellent sightseeing",
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
                  Spring offers mild temperatures and excellent sightseeing with
                  fewer crowds than peak summer.
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
                  Peak Fjord Season
                </span>

                <h3 className="adg-c-venue-name">Summer</h3>

                <p className="adg-c-venue-highlight">
                  Long Days, Vibrant Cities
                </p>
              </div>

              <ul className="adg-c-venue-list">
                {[
                  "Long daylight hours",
                  "Comfortable weather",
                  "Peak fjord season",
                  "Vibrant cities",
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
                  Summer is the most popular season, with long daylight hours
                  ideal for scenic fjord cruising.
                </p>
              </div>
            </div>

            {/* Early Autumn */}
            <div className="adg-c-venue-card adg-c-venue-1">
              <div className="adg-c-venue-top">
                <span className="adg-c-venue-eyebrow">
                  <Leaf
                    size={14}
                    style={{ display: "inline", marginRight: 6 }}
                  />
                  Quiet Season
                </span>

                <h3 className="adg-c-venue-name">Early Autumn</h3>

                <p className="adg-c-venue-highlight">
                  Fall Colors, Smaller Crowds
                </p>
              </div>

              <ul className="adg-c-venue-list">
                {[
                  "Fall colors",
                  "Smaller crowds",
                  "Pleasant temperatures",
                  "Beautiful photography",
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
                  Early autumn offers pleasant temperatures, smaller crowds, and
                  beautiful photography opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── EXPLORE NORTHERN EUROPE'S ICONIC DESTINATIONS ───── */}
      <section className="luc-destinations-section" id="luc-destinations">
        <div className="luc-destinations-container">
          <div className="luc-destinations-header">
            <h2 className="luc-destinations-title">
              Explore Northern Europe's Iconic Destinations
            </h2>

            <div className="adg-c-accent-line"></div>

            <p className="luc-destinations-intro">
              Explora Journeys offers itineraries that showcase some of the
              region's most celebrated cities and landscapes.
            </p>
          </div>

          {/* Layout */}
          <div className="luc-dest-layout">
            {/* Sidebar nav */}
            <nav className="luc-dest-nav">
              {northernEuropeDestinations.map((item) => {
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

      {/* ── PLANNING YOUR NORTHERN EUROPE CRUISE ───────────────────────── */}
      <section className="ugt-advantage-section">
        <div className="Asc-container">
          <div className="ugt-advantage-header">
            <span className="ugt-advantage-eyebrow">Plan with Confidence</span>

            <h2 className="ugt-advantage-title">
              Tips for Planning Your Northern Europe Cruise
            </h2>

            <div className="Asc-accent-line"></div>

            <p className="ugt-advantage-intro">
              A little preparation can make your Northern Europe cruise even
              more rewarding. These simple tips will help you choose the right
              itinerary, pack appropriately, and enjoy a seamless journey from
              start to finish.
            </p>
          </div>

          <div className="ugt-advantage-grid">
            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <CalendarClock size={28} strokeWidth={1.5} />
              </div>

              <h4 className="ugt-card-title">Book Early</h4>

              <p className="ugt-card-desc">
                Northern Europe sailings are among Explora's most sought-after
                itineraries, so reserving early provides the best choice of
                dates and suites.
              </p>
            </div>

            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <Layers size={28} strokeWidth={1.5} />
              </div>

              <h4 className="ugt-card-title">Pack Layers</h4>

              <p className="ugt-card-desc">
                Weather can vary significantly throughout the day, so layered
                clothing is essential.
              </p>
            </div>

            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <Camera size={28} strokeWidth={1.5} />
              </div>

              <h4 className="ugt-card-title">Bring a Camera</h4>

              <p className="ugt-card-desc">
                The fjords, castles, and historic cities offer endless
                photography opportunities.
              </p>
            </div>

            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <Hotel size={28} strokeWidth={1.5} />
              </div>

              <h4 className="ugt-card-title">
                Stay Before or After Your Cruise
              </h4>

              <p className="ugt-card-desc">
                Consider spending additional time in Copenhagen, Stockholm, or
                another embarkation city.
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
                Professional guidance helps you choose the ideal itinerary,
                suite, and shore experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SEA DAYS BECOME SCENIC ADVENTURES ───────────────────────────────────────── */}
      <section className="adg-c-section adg-c-bg-white" id="scenic-sea-days">
        <div className="adg-c-container">
          <div className="adg-c-section-header">
            <h2 className="adg-c-h2">Sea Days Become Scenic Adventures</h2>
            <div className="adg-c-accent-line"></div>

            <p className="Asc-section-intro">
              Unlike many itineraries, Northern Europe offers spectacular
              scenery even while cruising, and the scenery changes constantly
              between destinations.
            </p>
          </div>

          <div className="adg-c-overview-layout">
            <div className="adg-c-overview-icons">
              {[
                "Watching fjords",
                "Photographing waterfalls",
                "Reading on private terraces",
                "Visiting the spa",
                "Enjoying afternoon tea",
                "Listening to live music",
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
                    Northern Europe's coastline is as captivating as its cities,
                    offering breathtaking scenery throughout your voyage.
                  </p>
                </div>
              </div>

              <div className="adg-c-overview-image-wrap">
                <img
                  src={NorthernEuropeCoastlineImage}
                  alt="Scenic coastline viewed from an Explora Journeys ship in Northern Europe"
                  className="adg-c-overview-img"
                />

                <div className="adg-c-overview-img-overlay">
                  <span className="adg-c-overview-img-label">
                    Discover Northern Europe by Sea
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
              Personalized Northern Europe Cruise Planning
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
                Create Your Perfect Northern Europe Journey
              </h3>

              <p className="Avr-planning-left-body">
                Planning a Northern Europe cruise involves multiple travel
                details. A luxury travel advisor takes the guesswork out of
                planning by helping you select the ideal itinerary, suite, and
                experiences for your travel style. Every detail is thoughtfully
                coordinated to deliver a seamless luxury vacation.
              </p>

              <div className="Avr-planning-alert">
                <ShieldCheck size={18} className="Avr-planning-alert-icon" />

                <p className="Avr-planning-alert-text">
                  Their expertise helps create a seamless luxury travel
                  experience.
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
                    label: "Compare Northern Europe itineraries",
                  },
                  {
                    icon: <Home size={18} />,
                    label: "Choose the best suite",
                  },
                  {
                    icon: <Plane size={18} />,
                    label: "Arrange flights and hotels",
                  },
                  {
                    icon: <Anchor size={18} />,
                    label: "Coordinate private transfers",
                  },
                  {
                    icon: <Compass size={18} />,
                    label: "Recommend exclusive shore experiences",
                  },
                  {
                    icon: <BadgePercent size={18} />,
                    label: "Secure promotional offers",
                  },
                  {
                    icon: <Sparkles size={18} />,
                    label: "Personalize your vacation from beginning to end",
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
                Their expertise helps create a seamless luxury travel
                experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHO WILL LOVE A NORTHERN EUROPE CRUISE ─────────────────────────────── */}
      <section className="Asc-section Asc-bg-white" id="Asc-who">
        <div className="Asc-container">
          <div className="Asc-section-header">
            <h2 className="Asc-h2">Who Will Love a Northern Europe Cruise?</h2>
            <div className="Asc-accent-line"></div>
            <p className="Asc-faq-intro">
              These voyages are especially popular with couples, retirees, solo
              travelers, and experienced luxury cruisers.
            </p>
          </div>

          <div className="Asc-who-grid">
            <div className="Asc-who-card Asc-who-yes">
              <h3 className="Asc-who-title">
                These Voyages Are Ideal for Travelers Who Enjoy:
              </h3>
              <ul className="Asc-who-list">
                {[
                  "History",
                  "Scenic landscapes",
                  "Luxury accommodations",
                  "Cultural exploration",
                  "Photography",
                  "Wellness",
                  "Fine dining",
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
                  "Water slides",
                  "Theme park attractions",
                  "Character entertainment",
                  "Large casinos",
                  "Broadway productions",
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

          <p
            className="Asc-body-text"
            style={{
              maxWidth: "760px",
              margin: "40px auto 0",
              textAlign: "center",
            }}
          >
            Guests looking for elegance, comfort, and destination immersion will
            appreciate Explora's distinctive style.
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
              Everything travelers need to know about Northern Europe cruises on
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
            alt="Explora Journeys sailing through Northern Europe"
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
                  Discover Northern Europe <br /> at Explora's Pace
                </h2>
                <div className="Asc-help-accent"></div>
              </div>

              <div className="Asc-help-grid">
                <div className="Asc-help-info">
                  <p className="Asc-help-intro">
                    Northern Europe offers an extraordinary combination of
                    breathtaking scenery, fascinating history, sophisticated
                    cities, and unforgettable cultural experiences.
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
                        Explora Journeys enhances every destination through
                        spacious all-suite accommodations, refined European
                        hospitality, exceptional dining, wellness experiences,
                        and carefully designed itineraries that encourage
                        meaningful exploration.
                      </p>
                      <br />
                      <p className="Asc-help-intro">
                        For travelers seeking an elegant, immersive, and
                        luxurious Northern Europe cruise, Explora Journeys
                        offers one of the finest ways to discover this
                        remarkable region.
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
                      Start Planning Your Northern Europe Voyage
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
                      "Recommend the ideal Northern Europe itinerary for your travel style",
                      "Advise on which regions and ports to prioritize",
                      "Arrange flights and hotels",
                      "Select the right suite",
                      "Compare promotional offers",
                      "Recommend pre- or post-cruise hotel stays",
                      "Reserve exclusive shore experiences",
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
                      label: "Caribbean Cruises on Explora Journeys",
                      path: "/caribbean-cruises-on-explora-journeys",
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

export default NorthernEuropeCruisesOnExploraJourneys;
