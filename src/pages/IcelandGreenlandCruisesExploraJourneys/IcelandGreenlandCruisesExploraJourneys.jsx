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
  Fish,
  Camera,
  Globe,
} from "lucide-react";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela.jpeg";

import HeroImage1 from "../../assets/WhichMediterraneanItineraryIsBest/CONSIDERATIO-MED-copia-Summer.jpg";
import HeroImage2 from "../../assets/WhichMediterraneanItineraryIsBest/explora-II-mediterranean-coastal-cruise-view.jpg";
import ExploraPort from "../../assets/WhichMediterraneanItineraryIsBest/EXPLORAI-Mediterranean.jpg";
import AegeanDay from "../../assets/ExploraIVGuide/explora-I-luxury-pool-deck-close-up.JPG";
import ExploraPool from "../../assets/ExploraIVGuide/explora-journeys-luxury-sundeck-ocean-loungers-relaxation.jpg";
import ExploraPool1 from "../../assets/WhichExploraShipChoose/explora-journeys-atoll-pool-luxury-cruise-deck.jpg";
import ExploraDining from "../../assets/ExploraIVGuide/explora-journeys-ocean-grand-terrace-suite-balcony.jpg";
import ExploraDest1 from "../../assets/WhichMediterraneanItineraryIsBest/explora-ii-amalfi-coast-mediterranean-cruise.jpg";
import LuxuryOceanfront from "../../assets/WhichMediterraneanItineraryIsBest/EXPLORA-II-Mediterranean2.jpg";
import ExploraShip from "../../assets/WhichMediterraneanItineraryIsBest/explora-II-mediterranean-coastal-cruise-view.jpg";

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
        "https://tripsandships.com/iceland-greenland-cruises-on-explora-journeys/#webpage",
      name: "Iceland & Greenland Cruises on Explora Journeys",
      url: "https://tripsandships.com/iceland-greenland-cruises-on-explora-journeys",
      description:
        "Discover luxury Iceland and Greenland cruises on Explora Journeys. Explore glaciers, fjords, volcanic landscapes, Arctic wildlife, remote villages, and immersive luxury voyages through the North Atlantic.",
    },
    {
      "@type": "Article",
      "@id":
        "https://tripsandships.com/iceland-greenland-cruises-on-explora-journeys/#article",
      headline: "Iceland & Greenland Cruises on Explora Journeys",
      description:
        "A complete guide to cruising Iceland and Greenland with Explora Journeys, covering ports, scenic cruising, wildlife, shore experiences, dining, the best time to sail, and who these voyages suit best.",
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
        "https://tripsandships.com/iceland-greenland-cruises-on-explora-journeys/#breadcrumb",
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
          name: "Iceland & Greenland Cruises on Explora Journeys",
          item: "https://tripsandships.com/iceland-greenland-cruises-on-explora-journeys",
        },
      ],
    },
    {
      "@type": "TouristTrip",
      "@id":
        "https://tripsandships.com/iceland-greenland-cruises-on-explora-journeys/#touristtrip",
      name: "Iceland & Greenland Cruise with Explora Journeys",
      touristType:
        "Luxury travelers, couples, photographers, retirees, solo travelers",
      itinerary: {
        "@type": "ItemList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Reykjavik" },
          { "@type": "ListItem", position: 2, name: "Isafjordur" },
          { "@type": "ListItem", position: 3, name: "Akureyri" },
          { "@type": "ListItem", position: 4, name: "Nuuk" },
          { "@type": "ListItem", position: 5, name: "Ilulissat" },
        ],
      },
    },
    {
      "@type": "Place",
      "@id":
        "https://tripsandships.com/iceland-greenland-cruises-on-explora-journeys/#place",
      name: "Iceland & Greenland",
      description:
        "A North Atlantic region known for towering glaciers, volcanic coastlines, iceberg-filled fjords, geothermal wonders, and remote Arctic villages.",
    },
    {
      "@type": "Cruise",
      "@id":
        "https://tripsandships.com/iceland-greenland-cruises-on-explora-journeys/#cruise",
      name: "Explora Journeys Iceland & Greenland Cruise",
      provider: {
        "@type": "TravelAgency",
        name: "Trips & Ships Luxury Travel",
      },
      departurePort: "Various North Atlantic & Arctic Ports",
      description:
        "Luxury Arctic itineraries featuring longer port visits, extraordinary scenic cruising, and destination-focused dining aboard an all-suite ship.",
    },
    {
      "@type": "Service",
      "@id":
        "https://tripsandships.com/iceland-greenland-cruises-on-explora-journeys/#service",
      serviceType: "Luxury Cruise Vacation Planning & Booking Support",
      provider: {
        "@type": "TravelAgency",
        name: "Trips & Ships Luxury Travel",
      },
      areaServed: "Worldwide",
      description:
        "Personalized planning support for Explora Journeys Iceland & Greenland sailings, including itinerary selection, suite categories, and shore experiences.",
    },
    {
      "@type": "Review",
      "@id":
        "https://tripsandships.com/iceland-greenland-cruises-on-explora-journeys/#review",
      itemReviewed: {
        "@type": "Product",
        name: "Explora Journeys Iceland & Greenland Cruise",
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
        "Explora Journeys offers one of the most elegant ways to experience Iceland and Greenland, combining spectacular Arctic scenery with spacious oceanfront suites and personalized service.",
    },
    {
      "@type": "ItemList",
      "@id":
        "https://tripsandships.com/iceland-greenland-cruises-on-explora-journeys/#itemlist",
      name: "What This Iceland & Greenland Cruises on Explora Journeys Guide Covers",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Why Choose Explora Journeys for Iceland & Greenland",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Discover Iceland",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Discover Greenland",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Extraordinary Scenic Cruising",
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Wildlife Encounters",
        },
        {
          "@type": "ListItem",
          position: 6,
          name: "Shore Experiences & Onboard Dining",
        },
        {
          "@type": "ListItem",
          position: 7,
          name: "Life Onboard During the Voyage",
        },
        {
          "@type": "ListItem",
          position: 8,
          name: "Best Time to Cruise Iceland & Greenland",
        },
        {
          "@type": "ListItem",
          position: 9,
          name: "Who Will Love an Iceland & Greenland Cruise?",
        },
        {
          "@type": "ListItem",
          position: 10,
          name: "Tips for Planning Your Arctic Cruise",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id":
        "https://tripsandships.com/iceland-greenland-cruises-on-explora-journeys/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Where does Explora Journeys cruise in Iceland and Greenland?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Depending on the itinerary, ports may include Reykjavik, Akureyri, Isafjordur, Nuuk, Ilulissat, and other destinations across the North Atlantic.",
          },
        },
        {
          "@type": "Question",
          name: "Will I see glaciers and icebergs?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Scenic cruising through glacier-filled fjords and iceberg-rich waters is often one of the highlights of these voyages.",
          },
        },
        {
          "@type": "Question",
          name: "What wildlife might I see?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Depending on the season, guests may observe whales, puffins, seals, seabirds, and other Arctic wildlife.",
          },
        },
        {
          "@type": "Question",
          name: "What is included on an Explora Iceland & Greenland cruise?",
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
            text: "Most excursions are optional and allow guests to personalize their Arctic adventure.",
          },
        },
        {
          "@type": "Question",
          name: "When is the best time to cruise Iceland and Greenland?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "June through September offers the best combination of weather, daylight, and accessibility.",
          },
        },
        {
          "@type": "Question",
          name: "Is Explora suitable for couples?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Spacious suites, exceptional dining, and breathtaking scenery make these voyages ideal for couples.",
          },
        },
        {
          "@type": "Question",
          name: "What should I pack?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Warm layers, waterproof outerwear, comfortable walking shoes, gloves, sunglasses, binoculars, and a quality camera are recommended.",
          },
        },
        {
          "@type": "Question",
          name: "How long are Iceland & Greenland cruises?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Explora offers a variety of itineraries, generally ranging from one to two weeks or longer depending on the voyage.",
          },
        },
        {
          "@type": "Question",
          name: "Should I use a travel advisor?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. A luxury travel advisor can help you select the best itinerary, coordinate travel logistics, and maximize the value of your Arctic vacation.",
          },
        },
        {
          "@type": "Question",
          name: "Can I see the Northern Lights during these cruises?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Since Explora Journeys' sailings in Iceland and Greenland occur during the summer months when the Arctic experiences near-continuous daylight, it is unlikely to see the Northern Lights, which require dark night skies.",
          },
        },
        {
          "@type": "Question",
          name: "How are remote Greenlandic settlements explored?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Explora Journeys organizes specialized shore experiences, using local tenders, Zodiac excursions, and guided cultural walks led by experts to visit remote Greenlandic communities safely and respectfully.",
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
      q: "Where does Explora Journeys cruise in Iceland and Greenland?",
      a: "Depending on the itinerary, ports may include Reykjavik, Akureyri, Isafjordur, Nuuk, Ilulissat, and other destinations across the North Atlantic.",
    },
    {
      q: "Will I see glaciers and icebergs?",
      a: "Yes. Scenic cruising through glacier-filled fjords and iceberg-rich waters is often one of the highlights of these voyages.",
    },
    {
      q: "What wildlife might I see?",
      a: "Depending on the season, guests may observe whales, puffins, seals, seabirds, and other Arctic wildlife.",
    },
    {
      q: "What is included on an Explora Iceland & Greenland cruise?",
      a: "Your fare typically includes your oceanfront suite, gourmet dining, Wi-Fi, entertainment, fitness facilities, wellness amenities, and many onboard experiences.",
    },
    {
      q: "Are shore excursions included?",
      a: "Most excursions are optional and allow guests to personalize their Arctic adventure.",
    },
    {
      q: "When is the best time to cruise Iceland and Greenland?",
      a: "June through September offers the best combination of weather, daylight, and accessibility.",
    },
    {
      q: "Is Explora suitable for couples?",
      a: "Yes. Spacious suites, exceptional dining, and breathtaking scenery make these voyages ideal for couples.",
    },
    {
      q: "What should I pack?",
      a: "Warm layers, waterproof outerwear, comfortable walking shoes, gloves, sunglasses, binoculars, and a quality camera are recommended.",
    },
    {
      q: "How long are Iceland & Greenland cruises?",
      a: "Explora offers a variety of itineraries, generally ranging from one to two weeks or longer depending on the voyage.",
    },
    {
      q: "Should I use a travel advisor?",
      a: "Yes. A luxury travel advisor can help you select the best itinerary, coordinate travel logistics, and maximize the value of your Arctic vacation.",
    },
    {
      q: "Can I see the Northern Lights during these cruises?",
      a: "Since Explora Journeys' sailings in Iceland and Greenland occur during the summer months when the Arctic experiences near-continuous daylight, it is unlikely to see the Northern Lights, which require dark night skies.",
    },
    {
      q: "How are remote Greenlandic settlements explored?",
      a: "Explora Journeys organizes specialized shore experiences, using local tenders, Zodiac excursions, and guided cultural walks led by experts to visit remote Greenlandic communities safely and respectfully.",
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

/* ── Iceland & Greenland Destinations ───────────────────────────────────────── */
const arcticDestinations = [
  {
    id: "reykjavik",
    title: "Reykjavik",
    badge: "Reykjavik",
    icon: Landmark,
    // image: ExploraDest1,

    desc: "Iceland's capital combines Nordic culture with modern design, and serves as the gateway to many of Iceland's natural wonders.",

    columns: [
      {
        label: "Guests May Enjoy:",
        items: [
          "Hallgrímskirkja Church",
          "Harpa Concert Hall",
          "Boutique shopping",
          "Icelandic cuisine",
          "Art museums",
          "Waterfront walks",
        ],
      },
    ],

    themeLabel: "Nordic Culture Meets Modern Design",
    themeText:
      "Reykjavik offers a compact, walkable capital experience before venturing deeper into Iceland's volcanic landscapes.",
  },

  {
    id: "isafjordur",
    title: "Isafjordur",
    badge: "Isafjordur",
    icon: Mountain,
    // image: ExploraPort,

    desc: "Located in Iceland's dramatic Westfjords, Isafjordur offers spectacular scenery and authentic Icelandic culture.",

    columns: [
      {
        label: "Highlights Include:",
        items: [
          "Scenic fjords",
          "Mountain hiking",
          "Local fishing heritage",
          "Wildlife viewing",
          "Coastal villages",
          "Kayaking",
        ],
      },
    ],

    themeLabel: "Dramatic Westfjords Scenery",
    themeText:
      "Isafjordur rewards travelers seeking authentic Icelandic culture set against towering fjord walls.",
  },

  {
    id: "akureyri",
    title: "Akureyri",
    badge: "Akureyri",
    icon: Snowflake,
    // image: LuxuryOceanfront,

    desc: "Often called the 'Capital of North Iceland,' Akureyri offers easy access to some of the island's most striking natural landmarks.",

    columns: [
      {
        label: "Visitors Can Enjoy:",
        items: [
          "Godafoss Waterfall",
          "Lake Mývatn",
          "Volcanic landscapes",
          "Botanical gardens",
          "Whale watching",
          "Geothermal areas",
        ],
      },
    ],

    themeLabel: "Gateway to North Iceland",
    themeText:
      "Akureyri combines a charming harbor town with easy access to some of Iceland's most dramatic volcanic scenery.",
  },
  {
    id: "discover-greenland",
    title: "Discover Greenland",
    badge: "Greenland",
    icon: Globe,
    // image: GreenlandLandscape,

    desc: "Greenland offers one of the world's last truly untouched wilderness experiences, where immense landscapes, Arctic wildlife, and centuries-old Inuit traditions create an unforgettable journey.",

    columns: [
      {
        label: "Visitors May Encounter:",
        items: [
          "Massive glaciers",
          "Towering icebergs",
          "Arctic fjords",
          "Traditional Inuit communities",
          "Remote settlements",
          "Dramatic mountain scenery",
        ],
      },
    ],

    themeLabel: "One of the World's Last Great Wildernesses",
    themeText:
      "Greenland's immense scale is impossible to fully appreciate until experienced in person, where pristine landscapes and extraordinary natural beauty stretch as far as the eye can see.",
  },

  {
    id: "nuuk",
    title: "Nuuk",
    badge: "Nuuk",
    icon: Compass,
    // image: AegeanDay,

    desc: "Greenland's capital combines modern Arctic life with traditional Inuit culture along a scenic coastal setting.",

    columns: [
      {
        label: "Visitors May Explore:",
        items: [
          "Greenland National Museum",
          "Historic harbor",
          "Local art galleries",
          "Scenic coastal walks",
          "Cafés and restaurants",
          "Cultural exhibitions",
        ],
      },
    ],

    themeLabel: "Modern Arctic Life, Traditional Roots",
    themeText:
      "Nuuk offers a rare window into how modern Greenlandic life blends with centuries of Inuit heritage.",
  },

  {
    id: "ilulissat",
    title: "Ilulissat",
    badge: "Ilulissat",
    icon: Anchor,
    // image: ExploraPool,

    desc: "One of Greenland's most famous destinations, where few places on Earth offer scenery as dramatic as the surrounding icefjord.",

    columns: [
      {
        label: "Highlights Include:",
        items: [
          "Ilulissat Icefjord",
          "Enormous drifting icebergs",
          "UNESCO World Heritage Site",
          "Glacier viewpoints",
          "Boat excursions",
          "Arctic photography",
        ],
      },
    ],

    themeLabel: "The Icefjord Capital of the World",
    themeText:
      "Watching massive icebergs calve and drift through Ilulissat's icefjord is an experience few destinations can rival.",
  },
];

/* ── Main Component ──────────────────────────────────────────────── */
const IcelandGreenlandCruisesOnExploraJourneys = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [readMore, setReadMore] = useState(false);
  const [activeDestination, setActiveDestination] = useState("reykjavik");
  const currentDestination =
    arcticDestinations.find((d) => d.id === activeDestination) ||
    arcticDestinations[0];

  const ActiveIcon = currentDestination.icon;

  const images = [];

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
          Iceland &amp; Greenland Cruises on Explora Journeys | Luxury Arctic
          Cruise Guide
        </title>
        <meta
          name="title"
          content="Iceland & Greenland Cruises on Explora Journeys"
        />
        <meta
          name="description"
          content="Discover luxury Iceland and Greenland cruises on Explora Journeys. Explore glaciers, fjords, volcanic landscapes, Arctic wildlife, remote villages, and immersive luxury voyages through the North Atlantic."
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
            Iceland &amp; Greenland Cruises <br /> on Explora Journeys
          </h1>

          <p>
            For travelers seeking extraordinary landscapes and unforgettable
            adventures, few destinations compare to Iceland and Greenland.
            Towering glaciers, volcanic coastlines, iceberg-filled fjords,
            colorful fishing villages, geothermal wonders, and abundant wildlife
            create one of the world's most spectacular cruising experiences.
          </p>

          <p>
            Explora Journeys combines these breathtaking destinations with
            sophisticated European luxury, allowing guests to explore the North
            Atlantic in exceptional comfort.
          </p>

          {readMore && (
            <>
              <p>
                Spacious oceanfront suites, destination-focused itineraries,
                world-class dining, and personalized service transform every day
                into an unforgettable journey through some of the planet's most
                remote and awe-inspiring destinations.
              </p>

              <p>
                This guide covers Iceland and Greenland's most captivating
                ports, extraordinary scenic cruising, wildlife encounters, shore
                experiences, dining, the best time to sail, and whether an
                Explora Arctic cruise is right for your next voyage.
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

      {/* ── WHY CHOOSE EXPLORA FOR ICELAND & GREENLAND ─────────────────── */}
      <section
        className="ugt-components-section"
        id="why-choose-explora"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="ugt-components-container">
          <div className="ugt-components-header">
            <h2 className="ugt-components-title">
              Why Choose Explora Journeys <br /> for Iceland &amp; Greenland?
            </h2>

            <div className="adg-c-accent-line"></div>
          </div>

          <div className="ugt-components-list">
            <div className="ugt-component-row">
              <div className="ugt-component-image-wrapper">
                <div className="ugt-component-image-container">
                  <img
                    // src={ExploraPool}
                    alt="Onboard atmosphere aboard Explora Journeys in the Arctic"
                    className="ugt-component-image"
                  />
                </div>
              </div>

              <div className="ugt-component-content">
                <p className="ugt-component-text">
                  These remarkable destinations deserve more than a standard
                  sightseeing vacation. Explora Journeys emphasizes{" "}
                  <strong>destination-focused</strong> Arctic itineraries.
                </p>

                <div className="ugt-questions-box">
                  <span className="ugt-questions-title">Guests Enjoy:</span>

                  <ul className="ugt-questions-list">
                    {[
                      "Spacious all-suite accommodations",
                      "Boutique luxury atmosphere",
                      "Longer port visits",
                      "Personalized service",
                      "Wellness experiences",
                      "Exceptional dining",
                      "Relaxed destination-focused itineraries",
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
                  The result is a voyage where nature takes center stage while
                  guests enjoy exceptional comfort throughout the journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── EXTRAORDINARY SCENIC CRUISING ─────────────────────────────── */}
      <section className="dmg-info-section" id="scenic-cruising">
        <div className="dmg-info-container">
          <div className="dmg-info-header">
            <h2 className="dmg-info-title">
              Extraordinary <br /> Scenic Cruising
            </h2>
            <div className="dmg-info-accent"></div>
          </div>

          <div className="dmg-info-grid">
            <div className="dmg-info-content">
              <p className="dmg-info-lead">
                Some of the greatest highlights occur between ports. Explora's
                spacious outdoor decks and private suite terraces provide
                exceptional viewing throughout the voyage.
              </p>

              <div className="dmg-info-features dmg-info-features-scrollable">
                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Snowflake size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Floating Icebergs
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Sail past drifting icebergs in scale and color that are
                      difficult to comprehend from land.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Mountain size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Towering Glaciers
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Watch massive glaciers descend toward the sea along the
                      North Atlantic coastline.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Home size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Private Terrace Viewing
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Enjoy snow-covered mountains and deep Arctic fjords from
                      the privacy of your own suite.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <MapPinned size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Remote Coastlines
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Experience waterfalls and coastlines that are difficult—or
                      impossible—to reach by land.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Globe2 size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Ever-Changing Landscapes
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Every sea day offers spectacular, ever-changing Arctic
                      scenery.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="dmg-info-media">
              <div className="dmg-media-wrapper">
                <img
                  //   src={ExploraPort}
                  alt="Explora Journeys sailing past glaciers and icebergs"
                  className="dmg-media-img"
                  style={{ height: "610px" }}
                />
                <div className="dmg-media-overlay"></div>

                <div className="dmg-media-badge">
                  <span>Glaciers • Icebergs • Fjords</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WILDLIFE ENCOUNTERS ────────────────────────────────────── */}
      <section className="adg-section" id="adg-wildlife">
        <div className="adg-container">
          <div className="adg-section-header" style={{ marginBottom: "60px" }}>
            <h2 className="adg-h2">Wildlife Encounters</h2>
            <div className="adg-accent-line"></div>

            <p
              className="Asc-body-text"
              style={{ textAlign: "center", marginTop: "15px" }}
            >
              The North Atlantic is home to remarkable wildlife, and sightings
              become unforgettable moments during every voyage.
            </p>
          </div>

          <div className="adg-split-layout">
            <div className="adg-content-card-side">
              <img
                // src={AegeanDay}
                alt="Wildlife viewing aboard Explora Journeys in the Arctic"
                className="adg-side-image"
                style={{ height: "38vh" }}
              />

              <div className="adg-info-card">
                <div className="adg-card-meta">
                  <Fish size={28} />
                  <span className="adg-meta-label">Arctic Waters</span>
                </div>

                <p className="adg-card-lead">
                  Depending on the season, guests may see remarkable marine and
                  coastal wildlife throughout the voyage.
                </p>
              </div>
            </div>

            <div className="adg-list-side">
              {[
                "Humpback and minke whales",
                "Orcas",
                "Puffins and seabirds",
                "Arctic foxes",
                "Seals",
                "Polar wildlife in select regions",
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

      {/* ── DISCOVER ICELAND & GREENLAND ───── */}
      <section className="luc-destinations-section" id="luc-destinations">
        <div className="luc-destinations-container">
          <div className="luc-destinations-header">
            <h2 className="luc-destinations-title">
              Discover Iceland &amp; Greenland
            </h2>

            <div className="adg-c-accent-line"></div>

            <p className="luc-destinations-intro">
              Each port offers something different, making every Explora Arctic
              itinerary unique.
            </p>
          </div>

          {/* Layout */}
          <div className="luc-dest-layout">
            {/* Sidebar nav */}
            <nav className="luc-dest-nav">
              {arcticDestinations.map((item) => {
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

      {/* ── SHORE EXPERIENCES & DINING ───────────────────────────────────────── */}
      <section
        className="Ejvs-pricing-section"
        id="shore-experiences"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="Ejvs-container">
          <div className="Ejvs-section-header">
            <h2 className="Ejvs-section-title">
              Shore Experiences &amp; Onboard Dining
            </h2>

            <div className="Ejvs-section-accent"></div>

            <p className="Ejvs-section-subtitle">
              Explora Journeys offers immersive shore experiences that highlight
              the natural and cultural heritage of Iceland and Greenland, while
              the onboard culinary program complements every destination.
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
                Guests can also explore independently in many ports.
              </p>

              <ul className="Ejvs-feature-list">
                {[
                  "Glacier walks",
                  "Whale watching",
                  "Zodiac cruises",
                  "Geothermal excursions",
                  "Waterfall tours",
                  "Inuit cultural experiences",
                  "Hiking adventures",
                  "Scenic photography tours",
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

            {/* Dining */}
            <div className="Ejvs-pricing-card Ejvs-seabourn-card">
              <div className="Ejvs-card-header">
                <div className="Ejvs-card-icon-wrap">
                  <UtensilsCrossed size={24} className="Ejvs-card-icon" />
                </div>

                <h3 className="Ejvs-card-title">
                  Dining Inspired by the Journey
                </h3>
              </div>

              <p className="Ejvs-card-intro">
                Explora's culinary program complements the destinations you'll
                visit, making dining another highlight of every day at sea.
              </p>

              <ul className="Ejvs-feature-list">
                {[
                  "Fresh seafood",
                  "Nordic-inspired cuisine",
                  "Premium steaks",
                  "Artisan cheeses",
                  "International specialties",
                  "Fine wines",
                  "Gourmet desserts",
                  "Seasonal ingredients",
                ].map((item, i) => (
                  <li key={i} className="Ejvs-feature-item">
                    <Star size={14} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="Ejvs-card-highlight">
                <p>
                  Every meal reflects the flavors and spirit of the North
                  Atlantic destinations you're sailing past.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── LIFE ONBOARD DURING THE VOYAGE ───────────────────────────────────────── */}
      <section
        className="dve-winner-section"
        id="life-onboard"
        style={{ backgroundColor: "var(--bg-white)" }}
      >
        <div className="dve-container">
          <div className="dve-section-header">
            <h2 className="dve-section-title">
              Life Onboard During the Voyage
            </h2>

            <div className="dve-section-accent"></div>

            <p className="dve-section-subtitle">
              After exploring dramatic Arctic landscapes, guests return to the
              comfort of Explora Journeys, where rugged wilderness meets
              luxurious accommodations.
            </p>
          </div>

          <div className="dve-winner-grid">
            {/* Life Onboard */}
            <div className="dve-winner-card dve-disney-winner">
              <div className="dve-winner-image-wrap">
                <img
                  //   src={ExploraPool1}
                  alt="Life onboard Explora Journeys between Iceland and Greenland"
                  className="dve-winner-img"
                />

                <span className="dve-winner-badge">Evenings at Sea</span>
              </div>

              <div className="dve-winner-content">
                <h3 className="dve-winner-title">
                  Comfort After the Wilderness
                </h3>

                <p className="dve-winner-intro">
                  After exploring dramatic Arctic landscapes, guests return to a{" "}
                  <strong>peaceful retreat at sea</strong>.
                </p>

                <div className="dve-winner-divider"></div>

                <h4 className="dve-advantages-title">Guests Can Enjoy:</h4>

                <ul className="dve-advantages-list">
                  {[
                    "Ocean Wellness Spa",
                    "Gourmet restaurants",
                    "Elegant lounges",
                    "Live music",
                    "Infinity pools",
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

            {/* A Journey Through the Arctic */}
            <div className="dve-winner-card dve-seabourn-winner">
              <div className="dve-winner-image-wrap">
                <img
                  //   src={ExploraDining}
                  alt="A journey through the Arctic with Explora Journeys"
                  className="dve-winner-img"
                />

                <span className="dve-winner-badge">
                  A Journey Through the Arctic
                </span>
              </div>

              <div className="dve-winner-content">
                <h3 className="dve-winner-title">
                  A Journey Through the Arctic
                </h3>

                <p className="dve-winner-intro">
                  Cruising allows guests to experience places that are
                  difficult—or impossible—to reach by land.
                </p>

                <div className="dve-winner-divider"></div>

                <h4 className="dve-advantages-title">You'll Witness:</h4>

                <ul className="dve-advantages-list">
                  {[
                    "Remote coastlines",
                    "Glacier-filled bays",
                    "Volcanic cliffs",
                    "Ice-covered mountains",
                    "Quiet Arctic waters",
                    "Ever-changing landscapes",
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

      {/* ── BEST TIME TO CRUISE ICELAND & GREENLAND ───────────────────────────────── */}
      <section className="adg-c-section adg-c-bg-soft" id="best-time-to-cruise">
        <div className="adg-c-container">
          <div className="adg-c-section-header">
            <span className="adg-c-eyebrow">Plan Your Sailing</span>

            <h2 className="adg-c-h2">
              Best Time to Cruise Iceland &amp; Greenland
            </h2>

            <div className="adg-c-accent-line"></div>

            <p className="Asc-section-intro">
              These destinations are generally visited during the Northern
              Hemisphere summer, and each month offers a slightly different
              perspective on the Arctic.
            </p>
          </div>

          <div
            className="adg-c-venues-grid1"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            }}
          >
            {/* June */}
            <div className="adg-c-venue-card adg-c-venue-1">
              <div className="adg-c-venue-top">
                <span className="adg-c-venue-eyebrow">
                  <Sun
                    size={14}
                    style={{ display: "inline", marginRight: 6 }}
                  />
                  June
                </span>

                <h3 className="adg-c-venue-name">June</h3>

                <p className="adg-c-venue-highlight">Long Daylight Hours</p>
              </div>

              <ul className="adg-c-venue-list">
                {[
                  "Long daylight hours",
                  "Wildlife activity",
                  "Snow-covered peaks",
                  "Comfortable temperatures",
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
                  Long summer days make for extended scenic cruising and
                  sightseeing.
                </p>
              </div>
            </div>

            {/* July */}
            <div className="adg-c-venue-card adg-c-venue-2">
              <div className="adg-c-venue-top">
                <span className="adg-c-venue-eyebrow">
                  <Snowflake
                    size={14}
                    style={{ display: "inline", marginRight: 6 }}
                  />
                  July
                </span>

                <h3 className="adg-c-venue-name">July</h3>

                <p className="adg-c-venue-highlight">Peak Arctic Season</p>
              </div>

              <ul className="adg-c-venue-list">
                {[
                  "Peak Arctic season",
                  "Iceberg viewing",
                  "Mild weather",
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
                  The height of the season, with mild weather and excellent
                  iceberg viewing.
                </p>
              </div>
            </div>

            {/* August */}
            <div className="adg-c-venue-card adg-c-venue-1">
              <div className="adg-c-venue-top">
                <span className="adg-c-venue-eyebrow">
                  <Waves
                    size={14}
                    style={{ display: "inline", marginRight: 6 }}
                  />
                  August
                </span>

                <h3 className="adg-c-venue-name">August</h3>

                <p className="adg-c-venue-highlight">Comfortable Cruising</p>
              </div>

              <ul className="adg-c-venue-list">
                {[
                  "Comfortable cruising",
                  "Wildlife encounters",
                  "Spectacular scenery",
                  "Longer exploration opportunities",
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
                  A comfortable month for cruising with strong wildlife
                  encounters throughout.
                </p>
              </div>
            </div>

            {/* September */}
            <div className="adg-c-venue-card adg-c-venue-2">
              <div className="adg-c-venue-top">
                <span className="adg-c-venue-eyebrow">
                  <Leaf
                    size={14}
                    style={{ display: "inline", marginRight: 6 }}
                  />
                  September
                </span>

                <h3 className="adg-c-venue-name">September</h3>

                <p className="adg-c-venue-highlight">Northern Lights Season</p>
              </div>

              <ul className="adg-c-venue-list">
                {[
                  "Smaller crowds",
                  "Autumn colors",
                  "Beautiful photography",
                  "Possible Northern Lights sightings",
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
                  Smaller crowds and beautiful autumn photography, with possible
                  Northern Lights sightings later in the season.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TIPS FOR PLANNING YOUR ARCTIC CRUISE ───────────────────────────────────────── */}
      <section className="adg-c-section adg-c-bg-white" id="planning-tips">
        <div className="adg-c-container">
          <div className="adg-c-section-header">
            <h2 className="adg-c-h2">Tips for Planning Your Arctic Cruise</h2>
            <div className="adg-c-accent-line"></div>

            <p className="Asc-section-intro">
              A little planning goes a long way toward making your Iceland &amp;
              Greenland voyage as smooth and enjoyable as possible.
            </p>
          </div>

          <div className="adg-c-overview-layout">
            <div className="adg-c-overview-icons">
              {[
                "Book early — Arctic voyages have limited availability and are among the most sought-after luxury itineraries",
                "Dress in layers — weather conditions can change quickly throughout the day",
                "Bring quality camera equipment for extraordinary photography opportunities",
                "Reserve excursions early — popular wildlife and glacier excursions often sell out before departure",
                "Work with a luxury travel advisor to select the ideal itinerary, suite location, and shore experiences",
                "Pack comfortable waterproof footwear for glacier landings, nature walks, and changing coastal conditions",
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
                    An experienced advisor can help you select the ideal
                    itinerary, suite location, and shore experiences for a
                    seamless Arctic vacation.
                  </p>
                </div>
              </div>

              <div className="adg-c-overview-image-wrap">
                <img
                  //   src={LuxuryOceanfront}
                  alt="Planning an Iceland & Greenland cruise with Explora Journeys"
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
              Personalized Arctic Cruise Planning
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
                Create Your Perfect Arctic Journey
              </h3>

              <p className="Avr-planning-left-body">
                Planning an Iceland &amp; Greenland cruise involves much more
                than choosing departure dates. A luxury travel advisor helps you
                select the ideal itinerary, ship, accommodations, and
                experiences for your travel style, with every detail
                thoughtfully coordinated.
              </p>

              <div className="Avr-planning-alert">
                <ShieldCheck size={18} className="Avr-planning-alert-icon" />

                <p className="Avr-planning-alert-text">
                  Professional planning ensures a seamless luxury vacation from
                  embarkation to disembarkation.
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
                    label: "Compare Arctic itineraries",
                  },
                  {
                    icon: <Home size={18} />,
                    label: "Choose the best suite for scenic viewing",
                  },
                  {
                    icon: <Plane size={18} />,
                    label: "Arrange international flights",
                  },
                  {
                    icon: <Hotel size={18} />,
                    label: "Coordinate pre- and post-cruise hotels",
                  },
                  {
                    icon: <Compass size={18} />,
                    label: "Recommend exclusive excursions",
                  },
                  {
                    icon: <Sparkles size={18} />,
                    label: "Secure promotional offers",
                  },
                  {
                    icon: <BadgePercent size={18} />,
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
                Their expertise helps ensure a seamless luxury journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHO WILL LOVE AN ICELAND & GREENLAND CRUISE ─────────────────── */}
      <section className="Asc-section Asc-bg-white" id="Asc-who">
        <div className="Asc-container">
          <div className="Asc-section-header">
            <h2 className="Asc-h2">
              Who Will Love an Iceland &amp; Greenland Cruise?
            </h2>
            <div className="Asc-accent-line"></div>
            <p className="Asc-faq-intro">
              These voyages are especially popular with couples, retirees, solo
              travelers, photographers, and experienced luxury cruisers.
            </p>
          </div>

          <div className="Asc-who-grid">
            <div className="Asc-who-card Asc-who-yes">
              <h3 className="Asc-who-title">
                These Voyages Are Perfect for Travelers Who Appreciate:
              </h3>
              <ul className="Asc-who-list">
                {[
                  "Nature",
                  "Photography",
                  "Wildlife",
                  "Adventure",
                  "Luxury accommodations",
                  "Cultural exploration",
                  "Scenic cruising",
                  "Wellness",
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
                  "Character entertainment",
                  "Large casinos",
                  "Theme park attractions",
                  "High-energy nightlife",
                  "Constant onboard activities",
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
            Guests who value quiet luxury and destination immersion will
            appreciate Explora's approach.
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
              Everything travelers need to know about Iceland and Greenland
              cruises on Explora Journeys.
            </p>
          </div>
          <FAQ />
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────────── */}
      <section className="Asc-help-section">
        <div className="Asc-help-bg-wrap">
          <img
            // src={ExploraShip}
            alt="Explora Journeys sailing through Iceland and Greenland"
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
                  Discover the Arctic <br /> at Explora's Pace
                </h2>
                <div className="Asc-help-accent"></div>
              </div>

              <div className="Asc-help-grid">
                <div className="Asc-help-info">
                  <p className="Asc-help-intro">
                    Few destinations inspire the imagination quite like Iceland
                    and Greenland. Their volcanic landscapes, towering glaciers,
                    drifting icebergs, abundant wildlife, and remote Arctic
                    beauty create a travel experience unlike any other.
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
                        Explora Journeys elevates every moment with spacious
                        all-suite accommodations, exceptional dining,
                        personalized service, wellness experiences, and
                        thoughtfully crafted itineraries that encourage
                        meaningful exploration.
                      </p>
                      <br />
                      <p className="Asc-help-intro">
                        For travelers seeking an elegant, immersive, and truly
                        extraordinary Arctic cruise, Explora Journeys offers one
                        of the finest luxury experiences available.
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
                      Start Planning Your Arctic Voyage
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
                      "Recommend the ideal Iceland & Greenland itinerary for your travel style",
                      "Advise on which ports and excursions to prioritize",
                      "Coordinate pre- and post-cruise hotel stays",
                      "Select the right suite for scenic viewing",
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
                      label: "Northern Europe Cruises on Explora Journeys",
                      path: "/northern-europe-cruises-on-explora-journeys",
                    },
                    {
                      label: "Alaska Cruises on Explora Journeys",
                      path: "/alaska-cruises-on-explora-journeys",
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
                      label: "What to Pack for an Explora Cruise",
                      path: "/what-to-pack-for-an-explora-cruise",
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

export default IcelandGreenlandCruisesOnExploraJourneys;
