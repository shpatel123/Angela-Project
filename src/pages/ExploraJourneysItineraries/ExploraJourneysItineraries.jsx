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
  Sparkles,
  Ship,
  Sun,
  Snowflake,
  Compass,
  Mountain,
  Landmark,
  Building2,
  Layers,
  MapPinned,
  Home,
  Hotel,
  Plane,
  BadgePercent,
  ShieldCheck,
  Waves,
  Anchor,
  Globe,
  Palmtree,
} from "lucide-react";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela2.jpeg";

import HeroImage1 from "../../assets/CaribbeanCruisesExploraJourneys/explora-norway-fjord-cruise.jpg";
import HeroImage3 from "../../assets/WhichMediterraneanItineraryIsBest/explora-II-mediterranean-coastal-cruise-view.jpg";
import ExploraPool from "../../assets/GreeceGreekIslesCruisesExploraJourneys/Boutique-hotel-style-luxury.jpg";
import ExploraSea from "../../assets/GreeceGreekIslesCruisesExploraJourneys/Corfu.jpg";
import ExploraOcean from "../../assets/CaribbeanCruisesExploraJourneys/Regent-Seven-Seas-Cruises.jpg";
import ExploraDestination from "../../assets/NorthernEuropeCruisesExploraJourneys/Baltic-Capitals.jpg";
import ExploraDining from "../../assets/GreeceGreekIslesCruisesExploraJourneys/Longer-Port-Stays.jpg";

import Mediterranean from "../../assets/WhichMediterraneanItineraryIsBest/Italian-Coast.jpg";
import GreekIsles from "../../assets/GreeceGreekIslesCruisesExploraJourneys/Santorini.jpg";
import NorthernEurope from "../../assets/NorthernEuropeCruisesExploraJourneys/helsinki-cathedral-finland.jpg";
import IcelandGreenland from "../../assets/IcelandGreenlandCruisesExploraJourneys/GreenlandHero.jpg";
import Caribbean from "../../assets/CaribbeanCruisesExploraJourneys/Adventure.jpg";
import Alaska from "../../assets/AlaskaCruisesExploraJourneys/ketchikan-creek-street-alaska.png";
import Japan from "../../assets/JapanCruisesExploraJourneys/angela-hughes-kyoto-gion-geisha-street-pagoda-japan-travel-expert.jpg";
import Asia from "../../assets/AsiaCruisesExploraJourneys/Cultural-Experiences.jpg";
import CTAImage from "../../assets/NorthernEuropeCruisesExploraJourneys/explora-II-mediterranean-coastal-cruise-view.jpg";

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
      "@id": "https://tripsandships.com/explora-journeys-itineraries/#webpage",
      name: "Explora Journeys Itineraries",
      url: "https://tripsandships.com/explora-journeys-itineraries",
      description:
        "Explore Explora Journeys itineraries across the Mediterranean, Caribbean, Alaska, Northern Europe, Iceland, Greenland, Japan, and Asia. Discover destination-focused luxury voyages with longer port stays and all-suite accommodations.",
    },
    {
      "@type": "Article",
      "@id": "https://tripsandships.com/explora-journeys-itineraries/#article",
      headline: "Explora Journeys Itineraries",
      description:
        "A complete guide to Explora Journeys itineraries worldwide, covering destinations, itinerary style, shore experiences, dining, booking timing, and who these voyages suit best.",
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
        "https://tripsandships.com/explora-journeys-itineraries/#breadcrumb",
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
          name: "Explora Journeys Itineraries",
          item: "https://tripsandships.com/explora-journeys-itineraries",
        },
      ],
    },
    {
      "@type": "TouristTrip",
      "@id":
        "https://tripsandships.com/explora-journeys-itineraries/#touristtrip",
      name: "Explora Journeys Worldwide Itineraries",
      touristType: "Luxury travelers, couples, retirees, solo travelers",
      itinerary: {
        "@type": "ItemList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Mediterranean" },
          { "@type": "ListItem", position: 2, name: "Greece & Greek Isles" },
          { "@type": "ListItem", position: 3, name: "Northern Europe" },
          { "@type": "ListItem", position: 4, name: "Iceland & Greenland" },
          { "@type": "ListItem", position: 5, name: "Caribbean" },
          { "@type": "ListItem", position: 6, name: "Alaska" },
          { "@type": "ListItem", position: 7, name: "Japan" },
          { "@type": "ListItem", position: 8, name: "Asia" },
          { "@type": "ListItem", position: 9, name: "Transatlantic Voyages" },
        ],
      },
    },
    {
      "@type": "ItemList",
      "@id":
        "https://tripsandships.com/explora-journeys-itineraries/#destinations",
      name: "Explora Journeys Destinations",
      itemListElement: [
        { "@type": "Place", position: 1, name: "Mediterranean" },
        { "@type": "Place", position: 2, name: "Greece & Greek Isles" },
        { "@type": "Place", position: 3, name: "Northern Europe" },
        { "@type": "Place", position: 4, name: "Iceland & Greenland" },
        { "@type": "Place", position: 5, name: "Caribbean" },
        { "@type": "Place", position: 6, name: "Alaska" },
        { "@type": "Place", position: 7, name: "Japan" },
        { "@type": "Place", position: 8, name: "Asia" },
        { "@type": "Place", position: 9, name: "Transatlantic Voyages" },
      ],
    },
    {
      "@type": "Service",
      "@id": "https://tripsandships.com/explora-journeys-itineraries/#service",
      serviceType: "Luxury Cruise Vacation Planning & Booking Support",
      provider: {
        "@type": "TravelAgency",
        name: "Trips & Ships Luxury Travel",
      },
      areaServed: "Worldwide",
      description:
        "Personalized planning support for Explora Journeys itineraries worldwide, including itinerary selection, suite categories, and shore experiences.",
    },
    {
      "@type": "Review",
      "@id": "https://tripsandships.com/explora-journeys-itineraries/#review",
      itemReviewed: {
        "@type": "Product",
        name: "Explora Journeys Itineraries",
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
        "Explora Journeys has redefined luxury cruising by designing destination-focused itineraries with longer port stays and immersive experiences across the world's most spectacular regions.",
    },
    {
      "@type": "ItemList",
      "@id": "https://tripsandships.com/explora-journeys-itineraries/#itemlist",
      name: "What This Explora Journeys Itineraries Guide Covers",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Why Explora Journeys Itineraries Are Different",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Destinations Around the World",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Scenic Sea Days & Longer Port Stays",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Curated Shore Experiences",
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Choosing the Right Itinerary",
        },
        {
          "@type": "ListItem",
          position: 6,
          name: "When Should You Book?",
        },
        {
          "@type": "ListItem",
          position: 7,
          name: "Why Book Through a Luxury Travel Advisor",
        },
        {
          "@type": "ListItem",
          position: 8,
          name: "Frequently Asked Questions",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://tripsandships.com/explora-journeys-itineraries/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Where does Explora Journeys sail?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Explora Journeys sails throughout the Mediterranean, Caribbean, Alaska, Northern Europe, Iceland & Greenland, Japan, Asia, and on select transatlantic voyages.",
          },
        },
        {
          "@type": "Question",
          name: "What makes Explora itineraries different?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Explora emphasizes longer port stays, destination immersion, smaller ports, and a relaxed pace rather than visiting as many ports as possible.",
          },
        },
        {
          "@type": "Question",
          name: "Which Explora itinerary is best for first-time guests?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Mediterranean itineraries are among the most popular for first-time luxury cruisers due to their mix of culture, scenery, and iconic destinations.",
          },
        },
        {
          "@type": "Question",
          name: "Does Explora include overnight stays?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Many itineraries feature overnight or extended stays that allow guests to experience destinations after most cruise ships have departed.",
          },
        },
        {
          "@type": "Question",
          name: "Are shore excursions included?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most shore experiences are optional, allowing guests to personalize their voyage.",
          },
        },
        {
          "@type": "Question",
          name: "How long are Explora cruises?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Itineraries typically range from 7-night voyages to longer journeys spanning multiple regions.",
          },
        },
        {
          "@type": "Question",
          name: "Which destinations are best for couples?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Mediterranean, Greece, Caribbean, and Japan are especially popular with couples seeking romance and luxury.",
          },
        },
        {
          "@type": "Question",
          name: "Which itinerary is best for nature lovers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Alaska and Iceland & Greenland offer spectacular landscapes, wildlife, glaciers, and scenic cruising.",
          },
        },
        {
          "@type": "Question",
          name: "When should I book an Explora itinerary?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Booking 12–18 months in advance generally provides the best suite availability and promotional offers.",
          },
        },
        {
          "@type": "Question",
          name: "Should I book through a travel advisor?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. A luxury travel advisor can help you compare itineraries, secure promotions, and coordinate every aspect of your vacation.",
          },
        },
        {
          "@type": "Question",
          name: "Can I combine multiple Explora Journeys itineraries into a longer voyage?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Explora Journeys intentionally designs its itineraries to be combinable without repeating ports. These 'Extended Journeys' allow travelers to merge consecutive 7-night or 14-night cruises into longer voyages with seamless transitions.",
          },
        },
        {
          "@type": "Question",
          name: "What types of shore experiences are offered on Explora itineraries?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Explora offers curated shore experiences categorized into different styles, including 'Beyond Boundaries' (exclusive and private experiences), 'Tailored Journeys' (custom tours), and active/nature adventures.",
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
      q: "Where does Explora Journeys sail?",
      a: "Explora Journeys sails throughout the Mediterranean, Caribbean, Alaska, Northern Europe, Iceland & Greenland, Japan, Asia, and on select transatlantic voyages.",
    },
    {
      q: "What makes Explora itineraries different?",
      a: "Explora emphasizes longer port stays, destination immersion, smaller ports, and a relaxed pace rather than visiting as many ports as possible.",
    },
    {
      q: "Which Explora itinerary is best for first-time guests?",
      a: "Mediterranean itineraries are among the most popular for first-time luxury cruisers due to their mix of culture, scenery, and iconic destinations.",
    },
    {
      q: "Does Explora include overnight stays?",
      a: "Yes. Many itineraries feature overnight or extended stays that allow guests to experience destinations after most cruise ships have departed.",
    },
    {
      q: "Are shore excursions included?",
      a: "Most shore experiences are optional, allowing guests to personalize their voyage.",
    },
    {
      q: "How long are Explora cruises?",
      a: "Itineraries typically range from 7-night voyages to longer journeys spanning multiple regions.",
    },
    {
      q: "Which destinations are best for couples?",
      a: "The Mediterranean, Greece, Caribbean, and Japan are especially popular with couples seeking romance and luxury.",
    },
    {
      q: "Which itinerary is best for nature lovers?",
      a: "Alaska and Iceland & Greenland offer spectacular landscapes, wildlife, glaciers, and scenic cruising.",
    },
    {
      q: "When should I book an Explora itinerary?",
      a: "Booking 12–18 months in advance generally provides the best suite availability and promotional offers.",
    },
    {
      q: "Should I book through a travel advisor?",
      a: "Yes. A luxury travel advisor can help you compare itineraries, secure promotions, and coordinate every aspect of your vacation.",
    },
    {
      q: "Can I combine multiple Explora Journeys itineraries into a longer voyage?",
      a: "Yes. Explora Journeys intentionally designs its itineraries to be combinable without repeating ports. These 'Extended Journeys' allow travelers to merge consecutive 7-night or 14-night cruises into longer voyages with seamless transitions.",
    },
    {
      q: "What types of shore experiences are offered on Explora itineraries?",
      a: "Explora offers curated shore experiences categorized into different styles, including 'Beyond Boundaries' (exclusive and private experiences), 'Tailored Journeys' (custom tours), and active/nature adventures.",
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

/* ── World Destinations ───────────────────────────────────────── */
const worldDestinations = [
  {
    id: "mediterranean",
    title: "Mediterranean",
    badge: "Mediterranean",
    icon: Sun,
    image: Mediterranean,

    desc: "The Mediterranean is one of Explora Journeys' signature destinations, combining historic cities, ancient ruins, and coastal villages with world-famous cuisine.",

    columns: [
      {
        label: "Popular Ports May Include:",
        items: [
          "Barcelona",
          "Rome (Civitavecchia)",
          "Monte Carlo",
          "Naples",
          "Valletta",
          "Dubrovnik",
          "Split",
          "Santorini",
          "Mykonos",
        ],
      },
    ],

    themeLabel: "Classic Coastal Europe",
    themeText:
      "Guests enjoy historic cities, ancient ruins, coastal villages, world-famous cuisine, beautiful beaches, and scenic sailing — ideal for first-time luxury cruisers and experienced travelers alike.",
  },
  {
    id: "greece",
    title: "Greece & Greek Isles",
    badge: "Greek Isles",
    icon: Landmark,
    image: GreekIsles,

    desc: "The Greek Isles remain one of the most popular luxury cruise destinations, known for whitewashed villages and crystal-clear waters.",

    columns: [
      {
        label: "Highlights Include:",
        items: ["Santorini", "Mykonos", "Rhodes", "Corfu", "Crete", "Athens"],
      },
    ],

    themeLabel: "Island Culture",
    themeText:
      "Guests experience whitewashed villages, crystal-clear waters, ancient history, island culture, and fresh Mediterranean cuisine.",
  },
  {
    id: "northern-europe",
    title: "Northern Europe",
    badge: "Northern Europe",
    icon: Mountain,
    image: NorthernEurope,

    desc: "Northern Europe offers dramatic scenery and fascinating history, from Norwegian fjords to charming Baltic capitals.",

    columns: [
      {
        label: "Popular Destinations Include:",
        items: [
          "Norway",
          "Denmark",
          "Sweden",
          "Finland",
          "Germany",
          "Netherlands",
        ],
      },
    ],

    themeLabel: "Fjords & Viking History",
    themeText:
      "Expect fjords, castles, Viking history, charming cities, and scenic coastlines throughout the region.",
  },
  {
    id: "iceland-greenland",
    title: "Iceland & Greenland",
    badge: "Iceland & Greenland",
    icon: Snowflake,
    image: IcelandGreenland,

    desc: "For travelers seeking extraordinary natural beauty, Explora's Arctic voyages offer unforgettable experiences among glaciers and icebergs.",

    columns: [
      {
        label: "Possible Highlights Include:",
        items: [
          "Reykjavik",
          "Isafjordur",
          "Nuuk",
          "Ilulissat",
          "Glacier cruising",
          "Icebergs",
          "Arctic wildlife",
        ],
      },
    ],

    themeLabel: "Arctic Wilderness",
    themeText:
      "These itineraries are ideal for photographers, nature lovers, and adventure travelers exploring remote Arctic landscapes.",
  },
  {
    id: "caribbean",
    title: "Caribbean",
    badge: "Caribbean",
    icon: Waves,
    image: Caribbean,

    desc: "Explora brings contemporary luxury to the Caribbean with itineraries focused on both iconic islands and quieter destinations.",

    columns: [
      {
        label: "Popular Ports Include:",
        items: [
          "St. Barts",
          "Antigua",
          "Barbados",
          "St. Lucia",
          "British Virgin Islands",
          "Puerto Rico",
        ],
      },
    ],

    themeLabel: "Island Escapes",
    themeText:
      "Guests enjoy white-sand beaches, snorkeling, sailing, tropical cuisine, and boutique shopping across the islands.",
  },
  {
    id: "alaska",
    title: "Alaska",
    badge: "Alaska",
    icon: Compass,
    image: Alaska,

    desc: "Alaska offers one of the world's most spectacular cruise experiences, combining glaciers, wildlife, and indigenous culture.",

    columns: [
      {
        label: "Guests May Visit:",
        items: ["Juneau", "Ketchikan", "Skagway", "Sitka", "Icy Strait Point"],
      },
    ],

    themeLabel: "Glaciers & Wildlife",
    themeText:
      "Highlights include glacier viewing, whale watching, bald eagles, scenic fjords, and indigenous culture.",
  },
  {
    id: "japan",
    title: "Japan",
    badge: "Japan",
    icon: Building2,
    image: Japan,

    desc: "Japan combines ancient traditions with modern innovation, offering temples, gardens, and vibrant contemporary cities.",

    columns: [
      {
        label: "Explora Itineraries May Include:",
        items: ["Tokyo", "Osaka", "Kobe", "Hiroshima", "Hakodate", "Aomori"],
      },
    ],

    themeLabel: "Tradition Meets Innovation",
    themeText:
      "Travelers experience temples, gardens, seasonal cherry blossoms, sushi, historic castles, and contemporary cities.",
  },
  {
    id: "asia",
    title: "Asia",
    badge: "Asia",
    icon: Layers,
    image: Asia,

    desc: "Asia offers extraordinary cultural diversity, from ancient temples to modern skylines and tropical islands.",

    columns: [
      {
        label: "Guests May Visit:",
        items: [
          "Singapore",
          "Vietnam",
          "Thailand",
          "Hong Kong",
          "South Korea",
          "Indonesia",
        ],
      },
    ],

    themeLabel: "Cultural Diversity",
    themeText:
      "Expect ancient temples, modern skylines, tropical islands, UNESCO World Heritage Sites, and exceptional cuisine.",
  },
];
const diningData = [
  {
    key: "mediterranean",
    icon: <Sun size={22} strokeWidth={1.6} />,
    eyebrow: "If You Love",
    title: "Mediterranean Cruises",
    image: Mediterranean,
    imageAlt: "Explora Mediterranean luxury cruise",
    items: ["History", "Coastal villages", "Food and wine", "Classic Europe"],
    accent: "adg-accent-rose",
  },
  {
    key: "alaska",
    icon: <Mountain size={22} strokeWidth={1.6} />,
    eyebrow: "If You Love",
    title: "Alaska Sailings",
    image: Alaska,
    imageAlt: "Explora Alaska luxury cruise wilderness",
    items: ["Wildlife", "Glaciers", "Nature", "Photography"],
    accent: "adg-accent-teal",
  },
  {
    key: "japan",
    icon: <Landmark size={22} strokeWidth={1.6} />,
    eyebrow: "If You Love",
    title: "Japan Voyages",
    image: Japan,
    imageAlt: "Explora luxury cruise itinerary Japan",
    items: ["Culture", "Temples", "Gardens", "Modern cities"],
    accent: "adg-accent-gold",
  },
  {
    key: "caribbean",
    icon: <Waves size={22} strokeWidth={1.6} />,
    eyebrow: "If You Love",
    title: "Caribbean Sailings",
    image: Caribbean,
    imageAlt: "Explora Caribbean luxury cruise beach",
    items: ["Beaches", "Relaxation", "Warm weather", "Water sports"],
    accent: "adg-accent-gold",
  },
  {
    key: "northern-europe",
    icon: <Compass size={22} strokeWidth={1.6} />,
    eyebrow: "If You Love",
    title: "Northern Europe Cruises",
    image: NorthernEurope,
    imageAlt: "Explora Northern Europe luxury cruise scenic fjords",
    items: ["Fjords", "Castles", "Scenic cruising", "Historic cities"],
    accent: "adg-accent-teal",
  },
  {
    key: "iceland-greenland",
    icon: <Snowflake size={22} strokeWidth={1.6} />,
    eyebrow: "If You Love",
    title: "Iceland & Greenland",
    image: IcelandGreenland,
    imageAlt: "Explora luxury cruise Arctic landscapes",
    items: ["Icebergs", "Adventure", "Remote landscapes", "Arctic wildlife"],
    accent: "adg-accent-rose",
  },
  {
    key: "asia",
    icon: <Layers size={22} strokeWidth={1.6} />,
    eyebrow: "If You Love",
    title: "Asia Journeys",
    image: Asia,
    imageAlt: "Explora luxury cruise tropical destinations Asia",
    items: [
      "Diverse cultures",
      "Street food",
      "Ancient history",
      "Tropical destinations",
    ],
    accent: "adg-accent-gold",
  },
];
/* ── Main Component ──────────────────────────────────────────────── */
const ExploraJourneysItineraries = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [readMore, setReadMore] = useState(false);
  const [activeRegion, setActiveRegion] = useState("mediterranean");
  const currentRegion =
    worldDestinations.find((d) => d.id === activeRegion) ||
    worldDestinations[0];

  const ActiveIcon = currentRegion.icon;

  const images = [HeroImage3, HeroImage1];

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
          Explora Journeys Itineraries | Luxury Cruise Destinations &amp;
          Voyages Guide
        </title>
        <meta name="title" content="Explora Journeys Itineraries" />
        <meta
          name="description"
          content="Explore Explora Journeys itineraries across the Mediterranean, Caribbean, Alaska, Northern Europe, Iceland, Greenland, Japan, and Asia. Discover destination-focused luxury voyages with longer port stays and all-suite accommodations."
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
          <h1>Explora Journeys Itineraries</h1>

          <p>
            Explora Journeys has redefined luxury cruising by designing
            itineraries that place destinations — not the ship — at the heart of
            every voyage. Rather than rushing from port to port, Explora focuses
            on slower, more immersive journeys with longer stays, overnight
            calls, and carefully selected destinations.
          </p>

          <p>
            Whether you're dreaming of sailing through the sun-drenched
            Mediterranean, exploring the glaciers of Alaska, discovering Japan's
            rich cultural heritage, or relaxing on Caribbean beaches, Explora
            Journeys offers thoughtfully crafted voyages that combine
            exceptional destinations with contemporary European luxury.
          </p>

          {readMore && (
            <>
              <p>
                Every itinerary is paired with spacious oceanfront suites,
                world-class dining, personalized service, and an elegant onboard
                atmosphere, creating a seamless luxury travel experience from
                embarkation to disembarkation.
              </p>

              <p>
                This guide covers every major region Explora sails to, how these
                itineraries differ from traditional cruising, the best time to
                book, and how to choose the voyage that fits your travel style.
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

      {/* ── WHY EXPLORA ITINERARIES ARE DIFFERENT ─────────────────── */}
      <section
        className="ugt-components-section"
        id="why-different"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="ugt-components-container">
          <div className="ugt-components-header">
            <h2 className="ugt-components-title">
              Why Explora Journeys Itineraries <br /> Are Different
            </h2>

            <div className="adg-c-accent-line"></div>
          </div>

          <div className="ugt-components-list">
            <div className="ugt-component-row">
              <div className="ugt-component-image-wrapper">
                <div className="ugt-component-image-container">
                  <img
                    src={ExploraPool}
                    alt="Onboard atmosphere aboard Explora Journeys"
                    className="ugt-component-image"
                  />
                </div>
              </div>

              <div className="ugt-component-content">
                <p className="ugt-component-text">
                  Many cruise lines focus on visiting as many ports as possible.{" "}
                  <strong>Explora Journeys</strong> takes a different approach —
                  designing itineraries that allow travelers to connect more
                  deeply with each destination rather than simply checking it
                  off a list.
                </p>

                <div className="ugt-questions-box">
                  <span className="ugt-questions-title">
                    Their Itineraries Are Designed to Provide:
                  </span>

                  <ul className="ugt-questions-list">
                    {[
                      "Longer stays in port",
                      "Overnight visits in select destinations",
                      "Smaller, less crowded ports",
                      "Balanced sea days",
                      "Immersive cultural experiences",
                      "Scenic cruising",
                      "Flexible exploration",
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
                  This slower pace allows travelers to experience each
                  destination rather than simply passing through it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DESTINATIONS AROUND THE WORLD ────────────────────────── */}
      <section className="luc-destinations-section" id="luc-destinations">
        <div className="luc-destinations-container">
          <div className="luc-destinations-header">
            <h2 className="luc-destinations-title">
              Destinations Around the World
            </h2>

            <div className="adg-c-accent-line"></div>

            <p className="luc-destinations-intro">
              Explora Journeys sails to some of the world's most spectacular
              regions. Each itinerary reflects the unique culture, history,
              cuisine, and landscapes of the region.
            </p>
          </div>

          {/* Layout */}
          <div className="luc-dest-layout">
            {/* Sidebar nav */}
            <nav className="luc-dest-nav">
              {worldDestinations.map((item) => {
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
              {/* Icon hero with destination photography */}
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

              {/* Theme / Highlight */}
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

      {/* ── SCENIC SEA DAYS & LONGER PORT STAYS ─────────────────── */}
      <section
        className="dve-winner-section"
        id="dve-sea-days-port-stays"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="dve-container">
          <div className="dve-section-header">
            <h2 className="dve-section-title">
              Scenic Sea Days &amp; Longer Port Stays
            </h2>
            <div className="dve-section-accent"></div>
            <p className="dve-section-subtitle">
              Explora Journeys carefully balances port visits with relaxing sea
              days, and one of Explora's defining features is the amount of time
              spent in each destination.
            </p>
          </div>

          <div className="dve-winner-grid">
            {/* Scenic Sea Days */}
            <div className="dve-winner-card dve-disney-winner">
              <div className="dve-winner-image-wrap">
                <img
                  src={ExploraSea}
                  alt="Infinity pool and ocean views aboard Explora Journeys"
                  className="dve-winner-img"
                />
                <span className="dve-winner-badge">Scenic Sea Days</span>
              </div>

              <div className="dve-winner-content">
                <h3 className="dve-winner-title">Scenic Sea Days</h3>

                <p className="dve-winner-intro">
                  These quieter days become an important part of the overall
                  vacation experience, giving guests time to unwind between
                  destinations.
                </p>

                <div className="dve-winner-divider"></div>

                <h4 className="dve-advantages-title">Guests May Enjoy:</h4>

                <ul className="dve-advantages-list">
                  {[
                    "Ocean Wellness Spa",
                    "Infinity pools",
                    "Fine dining",
                    "Ocean-view lounges",
                    "Fitness center",
                    "Private terrace",
                    "Live entertainment",
                  ].map((item, i) => (
                    <li key={i}>
                      <Check size={18} className="dve-advantage-icon" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Longer Port Stays */}
            <div className="dve-winner-card dve-viking-winner">
              <div className="dve-winner-image-wrap">
                <img
                  src={ExploraDining}
                  alt="Guests enjoying an evening ashore on an Explora Journeys itinerary"
                  className="dve-winner-img"
                />
                <span className="dve-winner-badge">Longer Port Stays</span>
              </div>

              <div className="dve-winner-content">
                <h3 className="dve-winner-title">Longer Port Stays</h3>

                <p className="dve-winner-intro">
                  Many itineraries also include overnight stays in select ports,
                  allowing guests to experience each destination after most
                  cruise ships have departed.
                </p>

                <div className="dve-winner-divider"></div>

                <h4 className="dve-advantages-title">
                  Longer Stays Allow Guests To:
                </h4>

                <ul className="dve-advantages-list">
                  {[
                    "Explore without rushing",
                    "Enjoy local restaurants",
                    "Experience evening culture",
                    "Visit museums",
                    "Shop at local markets",
                    "Participate in extended shore excursions",
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

      {/* ── CHOOSING THE RIGHT ITINERARY ────────────────────────── */}
      <section className="adg-section" id="choosing-itinerary" style={{backgroundColor: 'var(--bg-white)'}}>
        <div className="adg-container">
          {/* HEADER */}
          <div className="adg-header">
            <h2 className="adg-h2">Choosing the Right Itinerary</h2>

            <div className="adg-accent-line"></div>

            <p className="adg-intro">
              The best itinerary depends on your travel style. Use this quick
              guide to narrow down the region that matches what you love most.
            </p>
          </div>

          {/* CARDS GRID */}
          <div className="adgs-grid">
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

      {/* ── SHORE EXPERIENCES ─────────────────── */}
      <section className="adg-section" id="shore-experiences">
        <div className="adg-container">
          <div className="adg-section-header" style={{ marginBottom: "60px" }}>
            <h2 className="adg-h2">Shore Experiences</h2>
            <div className="adg-accent-line"></div>

            <p
              className="Asc-body-text"
              style={{ textAlign: "center", marginTop: "15px" }}
            >
              Explora Journeys offers thoughtfully curated shore experiences
              designed to complement each itinerary, allowing guests to discover
              every destination in a more authentic and meaningful way.
            </p>
          </div>

          <div className="adg-split-layout">
            <div className="adg-content-card-side">
              <img
                src={ExploraOcean}
                alt="Guests enjoying curated shore experiences with Explora Journeys"
                className="adg-side-image"
                style={{ height: "60vh" }}
              />

              <div className="adg-info-card">
                <div className="adg-card-meta">
                  <MapPinned size={28} />
                  <span className="adg-meta-label">
                    Curated Destination Experiences
                  </span>
                </div>

                <p className="adg-card-lead">
                  From private cultural tours to outdoor adventures, every shore
                  experience is designed to help guests connect more deeply with
                  the destination while maintaining the comfort and quality
                  expected from Explora Journeys.
                </p>
              </div>
            </div>

            <div className="adg-list-side">
              {[
                "Private cultural tours",
                "Culinary experiences",
                "Wine tastings",
                "Nature excursions",
                "Wildlife encounters",
                "Historic walking tours",
                "Luxury beach clubs",
                "Adventure activities",
                "Independent exploration",
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

      {/* ── WHEN SHOULD YOU BOOK? ───────────────────────────────────── */}
      <section
        className="adg-c-section adg-c-bg-white"
        id="when-should-you-book"
      >
        <div className="adg-c-container">
          <div className="adg-c-section-header">
            <h2 className="adg-c-h2">When Should You Book?</h2>

            <div className="adg-c-accent-line"></div>

            <p className="Asc-section-intro">
              Explora Journeys operates a limited fleet, making many of its most
              popular itineraries highly sought after. Booking well in advance
              gives travelers the greatest choice and the best overall value.
            </p>
          </div>

          <div className="adg-c-overview-layout">
            {/* Left Side */}
            <div className="adg-c-overview-icons">
              {[
                "Best suite selection",
                "Preferred sailing dates",
                "Early promotional pricing",
                "More excursion availability",
                "Greater choice of itinerary options",
                "Access to limited-time special offers",
                "More flexibility when planning your vacation",
              ].map((label, i) => (
                <div key={i} className="adg-c-overview-item">
                  <span className="adg-c-overview-icon">
                    <Sparkles size={16} strokeWidth={2.5} />
                  </span>

                  <span className="adg-c-overview-label">{label}</span>
                </div>
              ))}
            </div>

            {/* Right Side */}
            <div className="adg-c-overview-right">
              <div className="adg-c-overview-callout">
                <div className="adg-c-overview-callout-inner">
                  <Star size={28} className="adg-c-callout-star" />

                  <p className="adg-c-callout-text">
                    Luxury travelers often reserve their Explora Journeys voyage
                    12 to 18 months before departure to secure the best suites,
                    preferred itineraries, and early booking offers.
                  </p>
                </div>
              </div>

              <div className="adg-c-overview-image-wrap">
                <img
                  src={ExploraDestination}
                  alt="Luxury suite booking and voyage planning for Explora Journeys"
                  className="adg-c-overview-img"
                />

                <div className="adg-c-overview-img-overlay">
                  <span className="adg-c-overview-img-label">
                    Book Early • More Choice • Better Value
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
              Personalized Itinerary Planning
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
                Find the Itinerary That Fits You Best
              </h3>

              <p className="Avr-planning-left-body">
                With so many extraordinary regions to choose from, a luxury
                travel advisor takes the guesswork out of planning by helping
                you select the ideal itinerary, suite, and experiences for your
                travel style. Every detail is thoughtfully coordinated to
                deliver a seamless luxury vacation.
              </p>

              <div className="Avr-planning-alert">
                <ShieldCheck size={18} className="Avr-planning-alert-icon" />

                <p className="Avr-planning-alert-text">
                  Their expertise helps you choose the itinerary that best fits
                  your interests and travel style.
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
                    icon: <Globe size={18} />,
                    label: "Recommend destinations",
                  },
                  {
                    icon: <Home size={18} />,
                    label: "Select the ideal suite",
                  },
                  {
                    icon: <Plane size={18} />,
                    label: "Coordinate flights",
                  },
                  {
                    icon: <Hotel size={18} />,
                    label: "Arrange hotels",
                  },
                  {
                    icon: <Anchor size={18} />,
                    label: "Book transfers",
                  },
                  {
                    icon: <Compass size={18} />,
                    label: "Recommend excursions",
                  },
                  {
                    icon: <BadgePercent size={18} />,
                    label: "Access exclusive promotions",
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
                Their expertise helps you choose the itinerary that best fits
                your interests and travel style.
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
              Everything travelers need to know about Explora Journeys
              itineraries.
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
            alt="Explora Journeys sailing to a luxury destination"
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
                  Discover the World <br /> at Explora's Pace
                </h2>
                <div className="Asc-help-accent"></div>
              </div>

              <div className="Asc-help-grid">
                <div className="Asc-help-info">
                  <p className="Asc-help-intro">
                    Explora Journeys has transformed luxury cruising by creating
                    itineraries that prioritize meaningful exploration over
                    hurried sightseeing.
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
                        Whether you're sailing among the sun-drenched islands of
                        the Mediterranean, witnessing glaciers in Alaska,
                        exploring Japan's cultural treasures, discovering the
                        vibrant cities of Asia, or relaxing on a Caribbean
                        beach, each itinerary reflects Explora's commitment to
                        immersive luxury travel.
                      </p>
                      <br />
                      <p className="Asc-help-intro">
                        For travelers seeking a sophisticated,
                        destination-focused luxury cruise, Explora Journeys
                        itineraries represent an exceptional choice.
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
                      Start Planning Your Explora Voyage
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
                      "Recommend the ideal itinerary for your travel style",
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
                      label: "Why Choose Explora Journeys?",
                      path: "/why-choose-explora-journeys",
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
                      label: "Which Explora Ship Should You Choose?",
                      path: "/which-explora-ship-should-you-choose",
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
                      label: "Caribbean Cruises on Explora Journeys",
                      path: "/caribbean-cruises-on-explora-journeys",
                    },
                    {
                      label: "Alaska Cruises on Explora Journeys",
                      path: "/alaska-cruises-on-explora-journeys",
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
                      label: "Japan Cruises on Explora Journeys",
                      path: "/japan-cruises-on-explora-journeys",
                    },
                    {
                      label: "Asia Cruises on Explora Journeys",
                      path: "/asia-cruises-on-explora-journeys",
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

export default ExploraJourneysItineraries;
