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
  Mountain,
  Headset,
  Map,
  ShieldCheck,
  Plane,
  Car,
  Ship,
  Home,
  Luggage,
  Utensils,
  Gem,
  Palmtree,
  Building2,
  Camera,
  HeartHandshake,
  Anchor,
  Snowflake,
  UtensilsCrossed,
  Sailboat,
  Wine,
  PartyPopper,
} from "lucide-react";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela.jpeg";

import HeroImage1 from "../../assets/ExploraIVGuide/EXPLORA-III-Exterior.jpg";
import HeroImage2 from "../../assets/WhichExploraShipChoose/explora-journeys-atoll-pool-luxury-cruise-deck.jpg";
import HeroImage3 from "../../assets/CaribbeanCruisesExploraJourneys/caribbean-sunset-explora-ship-luxury-travel.jpg";

import OverviewImage from "../../assets/PrivateJetConciergeTravel/athlete-cruise-why-athletes-choose.jpg";

import BucketCaribbean from "../../assets/CaribbeanCruisesExploraJourneys/private-exclusive-caribbean-island.jpg";
import BucketMediterranean from "../../assets/WhichMediterraneanItineraryIsBest/amalfi-coast-italy-mediterranean-hero-summer-2025.jpg";
import HawaiiJetImage from "../../assets/PrivateJetConciergeTravel/hawaii-oceanfront-luxury-resort-private-jet-travel.webp";
import BucketAlaska from "../../assets/AlaskaCruisesExploraJourneys/explora-journeys-alaska-luxury-cruise-through-fjords.jpg";
import PolynesiaJetImage from "../../assets/PrivateJetConciergeTravel/french-polynesia-overwater-villa-luxury-private-aviation.webp";
import BucketSafari from "../../assets/ExploraIVGuide/Iceland.png";

import ExpeditionImage from "../../assets/VikingExpeditionCruises/Expedition-Ship-Antarctica.jpg";
import RiverCruiseImage from "../../assets/VikingDanubeRiverCruises/budapest-hungary-river-cruise-danube.jpg";
import YachtCharterImage from "../../assets/PrivateJetConciergeTravel/private-villas-yachts-exclusive-resorts-luxury-superyacht.webp";
import DiningImage from "../../assets/PrivateJetConciergeTravel/athlete-cruise-exceptional-dining.jpg";
import SuiteImage from "../../assets/PrivateJetConciergeTravel/athlete-cruise-luxury-suite.jpg";
import FamilyImage from "../../assets/PrivateJetConciergeTravel/athlete-cruise-perfect-for-families.jpg";
import YachtImage from "../../assets/VikingDanubeRiverCruises/vienna-austria-danube-river-cruise.jpg";
import AdvisorImage from "../../assets/PrivateJetConciergeTravel/athlete-cruise-trips-and-ships-advisor.jpg";
import CtaImage from "../../assets/PrivateJetConciergeTravel/private-villas-yachts-exclusive-resorts-luxury-yacht-group..webp";

import { Helmet } from "react-helmet-async";

import "../LuxuryExploraJourneysGuide/LuxuryExploraJourneysGuide.css";

/* ── Schema ─────────────────────────────────────────────────────── */
const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "Trips & Ships Luxury Travel",
      url: "https://tripsandships.com",
      logo: "https://www.tripsandships.com/Copy-of-TRIPSSHIPS-e1592486640831.webp",
    },
    {
      "@type": "TravelAgency",
      name: "Trips & Ships Luxury Travel",
      url: "https://tripsandships.com",
      description:
        "Luxury travel agency specializing in luxury cruises for professional athletes and their families, including small ship cruises, expedition cruises, river cruises, and private yacht charters.",
    },
    {
      "@type": "WebPage",
      name: "Luxury Cruises for Professional Athletes",
      url: "https://tripsandships.com/luxury-cruises-for-professional-athletes",
      description:
        "Discover luxury cruises designed for professional athletes and their families. Explore small ship cruises, expedition cruises, river cruises, private yacht charters, and personalized luxury voyages offering privacy, wellness, and unforgettable destinations.",
    },
    {
      "@type": "Service",
      serviceType: "Luxury Cruise Planning for Professional Athletes",
      provider: {
        "@type": "TravelAgency",
        name: "Trips & Ships Luxury Travel",
      },
      areaServed: "Worldwide",
      description:
        "Concierge-level luxury cruise planning covering small ship cruises, expedition cruises, river cruises, and private yacht charters, personalized for professional athletes and high-profile families.",
    },
    {
      "@type": "Article",
      headline: "Luxury Cruises for Professional Athletes",
      description:
        "A complete guide to luxury cruising for professional athletes, covering small ship cruises, expedition cruises, river cruises, private yacht charters, luxury suites, dining, wellness, and popular destinations.",
      author: {
        "@type": "Person",
        name: "Angela Hughes",
      },
      publisher: {
        "@type": "Organization",
        name: "Trips & Ships Luxury Travel",
      },
    },
    {
      "@type": "BreadcrumbList",
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
          name: "Luxury Cruises",
          item: "https://tripsandships.com/cruise-travel",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Luxury Cruises for Professional Athletes",
          item: "https://tripsandships.com/luxury-cruises-for-professional-athletes",
        },
      ],
    },
    {
      "@type": "ItemList",
      name: "Types of Luxury Cruises for Professional Athletes",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Small Ship Luxury Cruises",
          description:
            "Fewer guests, boutique atmosphere, and access to unique ports of call larger ships cannot reach.",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Luxury Expedition Cruises",
          description:
            "Antarctica, Alaska, the Arctic, and Galápagos explored with premium accommodations and expert naturalists.",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "River Cruises",
          description:
            "Immersive sailings along the Danube, Rhine, Seine, Douro, Mekong, and Nile with intimate, smaller ships.",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Private Yacht Charters",
          description:
            "Complete exclusivity with a professional captain, crew, private chef, and a fully customized itinerary.",
        },
      ],
    },
    {
      "@type": "TouristTrip",
      name: "Luxury Cruise Vacation for Professional Athletes",
      provider: {
        "@type": "Organization",
        name: "Trips & Ships Luxury Travel",
      },
      touristType:
        "Professional athletes and their families seeking privacy, wellness, and personalized luxury cruise vacations",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What type of cruise is best for professional athletes?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It depends on your travel style. Small ship cruises provide privacy, expedition cruises offer adventure, river cruises focus on culture, and private yachts deliver unmatched exclusivity.",
          },
        },
        {
          "@type": "Question",
          name: "Are luxury cruises suitable for families?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Many luxury cruise lines offer spacious suites, family-friendly excursions, and activities for travelers of all ages.",
          },
        },
        {
          "@type": "Question",
          name: "Can I charter a private yacht?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. Private yacht charters provide complete flexibility, personalized service, and exclusive access to remarkable destinations.",
          },
        },
        {
          "@type": "Question",
          name: "Which destinations are most popular?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Mediterranean, Alaska, Caribbean, Antarctica, Northern Europe, Japan, and Europe's rivers are among the most requested luxury cruise destinations.",
          },
        },
        {
          "@type": "Question",
          name: "Do luxury cruises include wellness facilities?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Most luxury ships feature spas, fitness centers, healthy dining, yoga classes, and wellness programs.",
          },
        },
        {
          "@type": "Question",
          name: "Can you arrange private transportation?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. We coordinate private jets, luxury transfers, chauffeur services, and VIP airport assistance.",
          },
        },
        {
          "@type": "Question",
          name: "How far in advance should I book?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Luxury cruises often sell out 12 to 18 months in advance, particularly for premium suites and popular itineraries.",
          },
        },
        {
          "@type": "Question",
          name: "Can you coordinate travel before and after the cruise?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. We arrange luxury hotels, private tours, transfers, flights, and additional vacation experiences before and after your sailing.",
          },
        },
        {
          "@type": "Question",
          name: "Why should I use a travel advisor?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A luxury travel advisor helps you choose the right cruise line, maximize value, coordinate logistics, and personalize every aspect of your vacation.",
          },
        },
        {
          "@type": "Question",
          name: "Why choose Trips & Ships Luxury Travel?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Our expertise in luxury cruises, personalized planning, and concierge-level service ensures every journey is seamless, relaxing, and unforgettable.",
          },
        },
      ],
    },
  ],
};

/* ── Data: Popular cruise destinations (tabbed panel) ─────────────── */
const cruiseDestinations = [
  {
    id: "mediterranean",
    title: "Mediterranean",
    badge: "Mediterranean",
    icon: Waves,
    image: BucketMediterranean,
    window: "Historic cities, luxury resorts, and coastal villages",
    desc: "Historic cities, luxury resorts, coastal villages, and world-famous cuisine make the Mediterranean one of the most requested luxury cruise regions.",
    columns: [
      {
        label: "Plan Around:",
        items: [
          "Historic City Stopovers",
          "Coastal Village Ports of Call",
          "World-Famous Regional Cuisine",
        ],
      },
    ],
    themeLabel: "Culture, Coastline & Cuisine",
    themeText:
      "Small ship itineraries reach charming harbors larger vessels simply cannot access.",
  },
  {
    id: "alaska",
    title: "Alaska",
    badge: "Alaska",
    icon: Mountain,
    image: BucketAlaska,
    objectPosition: "center 60%",
    window: "Glaciers, wildlife, and breathtaking natural scenery",
    desc: "Glaciers, wildlife, and breathtaking natural scenery make Alaska a favorite expedition-style cruise destination.",
    columns: [
      {
        label: "Plan Around:",
        items: [
          "Glacier Cruising",
          "Wildlife Viewing Excursions",
          "Scenic Fjord Sailing",
        ],
      },
    ],
    themeLabel: "Wilderness in Comfort",
    themeText:
      "Expert naturalists and premium accommodations bring Alaska's wilderness within easy, comfortable reach.",
  },
  {
    id: "caribbean",
    title: "Caribbean",
    badge: "Caribbean",
    icon: Palmtree,
    image: BucketCaribbean,
    objectPosition: "center 60%",
    window: "Relaxed island escapes and crystal-clear waters",
    desc: "Relaxed island escapes, luxury beaches, and crystal-clear waters make the Caribbean an easy, restorative choice between competitive seasons.",
    columns: [
      {
        label: "Plan Around:",
        items: [
          "Private Island Beach Days",
          "Small Ship Island Hopping",
          "Family-Friendly Excursions",
        ],
      },
    ],
    themeLabel: "Effortless Island Time",
    themeText:
      "Flexible itineraries and calm waters make the Caribbean ideal for a quick, relaxing escape.",
  },
  {
    id: "antarctica",
    title: "Antarctica",
    badge: "Antarctica",
    icon: Snowflake,
    image: BucketSafari,
    objectPosition: "center 18%",
    window: "One of the world's most extraordinary expedition destinations",
    desc: "Antarctica is one of the world's most extraordinary expedition destinations, combining adventure with premium accommodations and expert guidance.",
    columns: [
      {
        label: "Plan Around:",
        items: [
          "Zodiac Excursions",
          "Wildlife Encounters",
          "Glacier & Scenic Cruising",
        ],
      },
    ],
    themeLabel: "Adventure & Luxury Together",
    themeText:
      "Luxury expedition ships pair extraordinary landscapes with gourmet dining and wellness facilities onboard.",
  },
  {
    id: "northern-europe",
    title: "Northern Europe",
    badge: "N. Europe",
    icon: Building2,
    image: PolynesiaJetImage,
    window: "Fjords, castles, charming cities, and cultural experiences",
    desc: "Fjords, castles, charming cities, and cultural experiences make Northern Europe a rich, rewarding luxury cruise region.",
    columns: [
      {
        label: "Plan Around:",
        items: [
          "Norwegian Fjord Sailing",
          "Castle & Old Town Excursions",
          "Cultural City Stopovers",
        ],
      },
    ],
    themeLabel: "History Meets Scenery",
    themeText:
      "Small ship itineraries move easily between dramatic coastlines and storied city ports.",
  },
  {
    id: "japan-asia",
    title: "Japan & Asia",
    badge: "Japan & Asia",
    icon: Camera,
    image: HawaiiJetImage,
    window: "Ancient traditions, vibrant cities, and unforgettable cuisine",
    desc: "Ancient traditions, vibrant cities, and unforgettable culinary adventures make Japan and Asia a distinctive luxury cruise experience.",
    columns: [
      {
        label: "Plan Around:",
        items: [
          "Ancient Temples & Traditions",
          "Vibrant City Ports",
          "Regional Culinary Experiences",
        ],
      },
    ],
    themeLabel: "Tradition & Discovery",
    themeText:
      "Personalized shore excursions bring centuries of culture and cuisine within easy reach.",
  },
  {
    id: "european-rivers",
    title: "European Rivers",
    badge: "River Cruises",
    icon: Anchor,
    image: YachtImage,
    window: "Historic capitals, vineyards, castles, and charming villages",
    desc: "Historic capitals, vineyards, castles, and charming villages make Europe's rivers ideal for a slower, more immersive luxury voyage.",
    columns: [
      {
        label: "Plan Around:",
        items: [
          "Danube, Rhine & Seine Itineraries",
          "Vineyard & Wine Region Stops",
          "Multigenerational River Travel",
        ],
      },
    ],
    themeLabel: "Easy-Paced Exploration",
    themeText:
      "Smaller ships and fewer guests create an intimate travel experience for couples and multigenerational groups alike.",
  },
];

/* ── FAQ Component ─────────────────────────────────────────────── */
function FAQ() {
  const [open, setOpen] = useState(null);

  const faqData = [
    {
      q: "What type of cruise is best for professional athletes?",
      a: "It depends on your travel style. Small ship cruises provide privacy, expedition cruises offer adventure, river cruises focus on culture, and private yachts deliver unmatched exclusivity.",
    },
    {
      q: "Are luxury cruises suitable for families?",
      a: "Yes. Many luxury cruise lines offer spacious suites, family-friendly excursions, and activities for travelers of all ages.",
    },
    {
      q: "Can I charter a private yacht?",
      a: "Absolutely. Private yacht charters provide complete flexibility, personalized service, and exclusive access to remarkable destinations.",
    },
    {
      q: "Which destinations are most popular?",
      a: "The Mediterranean, Alaska, Caribbean, Antarctica, Northern Europe, Japan, and Europe's rivers are among the most requested luxury cruise destinations.",
    },
    {
      q: "Do luxury cruises include wellness facilities?",
      a: "Yes. Most luxury ships feature spas, fitness centers, healthy dining, yoga classes, and wellness programs.",
    },
    {
      q: "Can you arrange private transportation?",
      a: "Yes. We coordinate private jets, luxury transfers, chauffeur services, and VIP airport assistance.",
    },
    {
      q: "How far in advance should I book?",
      a: "Luxury cruises often sell out 12 to 18 months in advance, particularly for premium suites and popular itineraries.",
    },
    {
      q: "Can you coordinate travel before and after the cruise?",
      a: "Yes. We arrange luxury hotels, private tours, transfers, flights, and additional vacation experiences before and after your sailing.",
    },
    {
      q: "Why should I use a travel advisor?",
      a: "A luxury travel advisor helps you choose the right cruise line, maximize value, coordinate logistics, and personalize every aspect of your vacation.",
    },
    {
      q: "Why choose Trips & Ships Luxury Travel?",
      a: "Our expertise in luxury cruises, personalized planning, and concierge-level service ensures every journey is seamless, relaxing, and unforgettable.",
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
const LuxuryCruisesForProfessionalAthletes = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [readMore, setReadMore] = useState(false);
  const [activeDestination, setActiveDestination] = useState("mediterranean");
  const [hovered, setHovered] = useState(null);

  const currentDestination =
    cruiseDestinations.find((d) => d.id === activeDestination) ||
    cruiseDestinations[0];
  const ActiveDestinationIcon = currentDestination.icon;

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
          Luxury Cruises for Professional Athletes | Private &amp; Small Ship
          Cruise Vacations
        </title>
        <meta name="title" content="Luxury Cruises for Professional Athletes" />
        <meta
          name="description"
          content="Discover luxury cruises designed for professional athletes and their families. Explore small ship cruises, expedition cruises, river cruises, private yacht charters, and personalized luxury voyages offering privacy, wellness, and unforgettable destinations."
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
            Luxury Cruises <br /> for Professional Athletes
          </h1>

          <p>
            Professional athletes spend much of the year following demanding
            schedules filled with games, travel, training, media obligations,
            and family commitments. When it's time to step away from
            competition, many seek vacations that offer the perfect balance
            of relaxation, privacy, exceptional service, and unforgettable
            experiences.
          </p>

          <p>
            Luxury cruises provide exactly that — unpack once while exploring
            some of the world's most spectacular places, with every detail
            designed around comfort, convenience, and personalized service.
          </p>

          {readMore && (
            <>
              <p>
                Unlike traditional vacations that require constant planning
                and moving between destinations, a luxury cruise allows you to
                relax while every detail is managed by an experienced crew.
                Whether sailing aboard an intimate luxury ship, a private
                yacht, an expedition vessel, or a European river cruise, the
                journey is shaped entirely around your lifestyle.
              </p>

              <p>
                At Trips &amp; Ships Luxury Travel, we help professional
                athletes and their families find the cruise experience that
                perfectly matches their travel goals and schedule — from
                selecting the right cruise line to coordinating private jet
                and concierge support before and after the voyage.
              </p>

              <p>
                With more than 40 years in the travel industry, experience
                spanning over 121 countries, and recognition as the 2024
                Luxury Travel Influencer of the Year by Travel Leaders
                Network, Angela Hughes has become one of the most trusted
                voices in luxury cruise planning.
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

      {/* ── WHY PROFESSIONAL ATHLETES CHOOSE LUXURY CRUISES ──────────── */}
      <section className="adg-c-section adg-c-bg-white" id="adg-c-why-luxury-cruises">
        <div className="adg-c-container">
          <div className="adg-c-section-header">
            <h2 className="adg-c-h2">
              Why Professional Athletes Choose Luxury Cruises
            </h2>
            <div className="adg-c-accent-line"></div>
            <p className="Asc-section-intro">
              Luxury cruises offer advantages that few other vacations can
              match. Instead of worrying about hotels, restaurants,
              transportation, and daily planning, guests simply relax while
              every detail is managed by an experienced crew.
            </p>
          </div>

          <div className="adg-c-overview-layout">
            <div className="adg-c-overview-icons">
              {[
                "Privacy and exclusivity",
                "Spacious accommodations",
                "Personalized service",
                "Flexible itineraries",
                "Wellness facilities",
                "Exceptional dining",
                "Family-friendly experiences",
                "Seamless travel logistics",
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
                    After months of public appearances and constant
                    attention, many athletes want a vacation where they can
                    truly unwind. Smaller ships create a calmer atmosphere for
                    a more peaceful, discreet travel experience.
                  </p>
                </div>
              </div>

              <div className="adg-c-overview-image-wrap" style={{height: '360px'}}>
                <img
                  src={OverviewImage}
                  alt="Guests relaxing aboard a luxury cruise ship veranda"
                  className="adg-c-overview-img"
                />
                <div className="adg-c-overview-img-overlay">
                  <span className="adg-c-overview-img-label">
                    Unpack Once, Explore Everywhere
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRIVACY & SPACE + SMALL SHIP LUXURY CRUISES */}
      <section
        className="Ejsc-ent-section"
        id="Ejsc-privacy-small-ship-cruises"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="Ejsc-container">
          <div className="Ejsc-section-header">
            <h2 className="Ejsc-section-title">Privacy and Space Matter</h2>
            <div className="Asc-accent-line"></div>
            <p className="Ejsc-section-subtitle">
              After months of public appearances and constant attention, many
              athletes want a vacation where they can truly unwind.
            </p>
          </div>

          <div className="Ejsc-ent-grid">
            {/* Privacy & Space Card */}
            <div className="Ejsc-ent-card Ejsc-explora-card">
              <div className="Ejsc-card-header">
                <div className="Ejsc-card-icon-wrap">
                  <ShieldCheck size={24} className="Ejsc-card-icon" />
                </div>
                <h3 className="Ejsc-card-title">Privacy &amp; Space</h3>
              </div>

              <p className="Ejsc-card-intro">
                Luxury cruise lines feature spacious suites and quiet spaces
                designed for guests who want to truly relax.
              </p>

              <ul className="Ejsc-feature-list">
                {[
                  "Spacious suites & private verandas",
                  "Butler service (select cruise lines)",
                  "Quiet lounges & adults-only spaces",
                  "Private dining options",
                  "Lower guest-to-crew ratios",
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
                  Smaller ships create a calmer atmosphere, allowing guests to
                  enjoy a more peaceful and discreet travel experience.
                </p>
              </div>
            </div>

            {/* Small Ship Luxury Cruises Card */}
            <div className="Ejsc-ent-card Ejsc-seabourn-card">
              <div className="Ejsc-card-header">
                <div className="Ejsc-card-icon-wrap">
                  <Ship size={24} className="Ejsc-card-icon" />
                </div>
                <h3 className="Ejsc-card-title">Small Ship Luxury Cruises</h3>
              </div>

              <p className="Ejsc-card-intro">
                Small ship cruises combine the comforts of a luxury resort
                with access to destinations that larger ships simply cannot
                reach.
              </p>

              <ul className="Ejsc-feature-list">
                {[
                  "Fewer guests onboard",
                  "More personalized service",
                  "Boutique atmosphere",
                  "Unique ports of call",
                  "Longer stays in destination",
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
                  Luxury small ship cruise lines often visit charming coastal
                  villages, hidden harbors, and less-crowded destinations
                  throughout Europe, the Mediterranean, Asia, and beyond.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── LUXURY EXPEDITION CRUISES ─────────────────────────────────── */}
      <section className="wnf-section wnf-bg-white" id="luxury-expedition-cruises">
        <div className="wnf-container">
          <div className="wnf-section-header">
            <h2 className="wnf-h2">Luxury Expedition Cruises</h2>
            <div className="wnf-accent-line"></div>
          </div>

          <div className="wnf-split">
            <div className="la-image-column">
              <div className="la-image-wrap" style={{height: '550px'}}>
                <img
                  src={ExpeditionImage}
                  alt="Luxury expedition ship near a glacier"
                  className="la-image"
                />
                <div className="la-image-overlay"></div>
              </div>
            </div>

            <div className="wnf-content-column">
              <div className="wnf-block">
                <p className="wnf-lead-text">
                  For athletes seeking extraordinary adventures, expedition
                  cruises provide unforgettable experiences without
                  sacrificing comfort. Popular destinations include
                  Antarctica, Alaska, the Arctic, Iceland &amp; Greenland, the
                  Galápagos Islands, Patagonia, and the Norwegian Fjords.
                </p>

                <ul className="wnf-feature-list">
                  {[
                    "Zodiac excursions & wildlife encounters",
                    "Glacier cruising & scenic cruising",
                    "Photography opportunities",
                    "Cultural exploration & kayaking",
                    "Expert naturalists onboard",
                    "Gourmet dining & wellness facilities",
                  ].map((feature, i) => (
                    <li key={i} className="wnf-feature-item">
                      <div className="wnf-icon-wrapper">
                        <Compass size={14} />
                      </div>
                      <span className="wnf-feature-text">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="wnf-footer-note">
                <p className="wnf-highlight-text">
                  Luxury expedition ships combine exploration with premium
                  accommodations — adventure and luxury come together in one
                  remarkable journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RIVER CRUISES & PRIVATE YACHT CHARTERS */}
      <section className="azs-suites-section" id="azs-river-cruises-yacht-charters">
        <div className="azs-container">
          <div className="azs-section-header">
            <h2 className="azs-section-title">
              River Cruises &amp; <br /> Private Yacht Charters
            </h2>
            <div className="azs-section-accent"></div>
            <p className="azs-section-subtitle">
              Two very different ways to travel — one immersive and
              easy-paced, the other completely exclusive and personalized.
            </p>
          </div>

          <div className="azs-suites-grid">
            {/* River Cruises Card */}
            <div className="azs-suites-card azs-seabourn-suites">
              <div className="azs-suites-image-wrap">
                <img
                  src={RiverCruiseImage}
                  alt="Luxury river cruise ship sailing past a historic European city"
                  className="azs-suites-img"
                />
                <span className="azs-suites-image-badge">
                  A Slower, Richer Journey
                </span>
              </div>

              <div className="azs-suites-content">
                <div className="azs-suites-card-header">
                  <div className="azs-suites-icon-circle">
                    <Wine size={24} className="azs-suites-icon" />
                  </div>
                  <h3 className="azs-suites-title">River Cruises</h3>
                </div>

                <p className="azs-suites-intro">
                  River cruising offers a slower, more immersive way to
                  explore the world's great cities and countryside along the
                  Danube, Rhine, Seine, Rhône, Douro, Mekong, and Nile.
                </p>

                <div className="azs-suites-body">
                  <h4 className="azs-suites-group-title">
                    Ideal for travelers who enjoy:
                  </h4>

                  <ul className="azs-suites-list">
                    {[
                      "Historic cities & local culture",
                      "Culinary experiences & wine regions",
                      "Scenic landscapes",
                      "Easy-paced sightseeing",
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
                      With smaller ships and fewer guests, river cruises
                      create an intimate travel experience perfect for
                      couples, families, and multigenerational groups.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Private Yacht Charters Card */}
            <div className="azs-suites-card azs-azamara-suites">
              <div className="azs-suites-image-wrap">
                <img
                  src={YachtCharterImage}
                  alt="Private luxury yacht anchored off a Mediterranean coastline"
                  className="azs-suites-img"
                />
                <span className="azs-suites-image-badge">
                  Complete Exclusivity
                </span>
              </div>

              <div className="azs-suites-content">
                <div className="azs-suites-card-header">
                  <div className="azs-suites-icon-circle">
                    <Sailboat size={24} className="azs-suites-icon" />
                  </div>
                  <h3 className="azs-suites-title">Private Yacht Charters</h3>
                </div>

                <p className="azs-suites-intro">
                  For the ultimate in exclusivity, nothing compares to a
                  private yacht — complete freedom to create a personalized
                  itinerary while enjoying world-class service.
                </p>

                <div className="azs-suites-body">
                  <h4 className="azs-suites-group-title">
                    Luxury yacht vacations include:
                  </h4>

                  <ul className="azs-suites-list">
                    {[
                      "Professional captain & private chef",
                      "Customized itineraries",
                      "Water sports equipment",
                      "Flexible schedules & complete privacy",
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
                      Whether exploring the Mediterranean, Caribbean, Greek
                      Isles, or South Pacific, every day is designed around
                      your preferences.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── LUXURY SUITES DESIGNED FOR COMFORT ────────────────────────── */}
      <section
        className="dmg-info-section dmg-bg-white"
        id="luxury-suites-designed-for-comfort"
      >
        <div className="dmg-info-container">
          <div className="dmg-info-grid">
            <div className="dmg-info-content">
              <h2 className="dmg-info-title">
                Luxury Suites Designed for Comfort
              </h2>
              <div className="dmg-info-accent"></div>

              <p className="dmg-info-lead">
                Luxury cruise accommodations provide the space athletes need
                to truly relax. Many suites rival five-star hotel
                accommodations while offering spectacular ocean or river
                views.
              </p>

              <div className="dmg-info-features dmg-info-features-scrollable">
                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Home size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Separate Living Areas &amp; King-Size Beds
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Space designed for real rest, not just a place to
                      sleep.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Building2 size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Walk-In Wardrobes &amp; Marble Bathrooms
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Finishes that rival the world's finest hotels.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Waves size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Private Balconies
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Spectacular ocean or river views from your own suite.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Utensils size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      In-Suite Dining &amp; Butler Service
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Premium bedding and personalized attention in select
                      categories.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="dmg-info-media">
              <div className="dmg-media-wrapper">
                <img
                  src={SuiteImage}
                  alt="Luxury cruise suite with private balcony and ocean view"
                  className="dmg-media-img"
                  style={{ height: "90vh" }}
                />
                <div className="dmg-media-overlay"></div>

                <div className="dmg-media-badge">
                  <span>Five-Star Comfort at Sea</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── EXCEPTIONAL DINING EXPERIENCES ────────────────────────────── */}
      <section
        className="ugt-components-section"
        id="exceptional-dining-experiences"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="ugt-components-container">
          <div className="ugt-components-header">
            <h2 className="ugt-components-title">
              Exceptional Dining Experiences
            </h2>
            <div className="adg-c-accent-line"></div>
          </div>

          <div className="ugt-components-list">
            <div className="ugt-component-row">
              <div className="ugt-component-image-wrapper">
                <div className="ugt-component-image-container">
                  <img
                    src={DiningImage}
                    alt="Fine dining table set aboard a luxury cruise ship"
                    className="ugt-component-image"
                  />
                </div>
              </div>

              <div className="ugt-component-content">
                <p className="ugt-component-text">
                  Luxury cruise dining is a highlight of every voyage.
                  Whether celebrating a special occasion or simply enjoying a
                  quiet evening, dining is tailored to your preferences.
                </p>

                <div className="ugt-questions-box">
                  <span className="ugt-questions-title">
                    Guests enjoy:
                  </span>

                  <ul className="ugt-questions-list">
                    {[
                      "Multiple Specialty Restaurants",
                      "Regional Cuisine & Fine Wines",
                      "Healthy Menu Options",
                      "Flexible Dining Times",
                      "Private Dining & Room Service",
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
                  Culinary demonstrations and private dining experiences
                  round out every voyage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WELLNESS, FAMILY & CELEBRATIONS AT SEA ────────────────────── */}
      <section
        className="Leg-section"
        style={{ backgroundColor: "var(--bg-white)" }}
      >
        <div className="Leg-container">
          <div className="Leg-header">
            <h2 className="Leg-title">Wellness, Family &amp; Celebrations at Sea</h2>
            <div className="adg-c-accent-line"></div>
            <p className="Leg-subtitle">
              Many athletes use vacations to focus on recovery and overall
              well-being — while every family member enjoys the trip at their
              own pace.
            </p>
          </div>

          <div className="Leg-grid">
            {[
              {
                id: 1,
                accent: "gold",
                icon: HeartHandshake,
                title: "Wellness & Recovery at Sea",
                description:
                  "Full-service spas, massage therapy, fitness centers, yoga, and personal training maintain wellness routines at sea.",
                pills: ["Spas", "Fitness Centers", "Yoga & Pilates"],
                highlight: "Recovery built into every itinerary.",
              },
              {
                id: 2,
                accent: "navy",
                icon: Users,
                title: "Perfect for Families",
                description:
                  "Connecting suites, children's programs, teen activities, and multigenerational accommodations for the whole family.",
                pills: ["Connecting Suites", "Kids' Programs", "Family Excursions"],
                highlight: "Every generation enjoys the vacation.",
              },
              {
                id: 3,
                accent: "teal",
                icon: Gem,
                title: "Celebrate Life's Biggest Moments",
                description:
                  "Championship celebrations, retirement vacations, contract signings, and Hall of Fame inductions personalized at sea.",
                pills: ["Championships", "Anniversaries", "Reunions"],
                highlight: "Every celebration personalized.",
              },
              {
                id: 4,
                accent: "gold",
                icon: Plane,
                title: "Private Jet & Concierge Support",
                description:
                  "Private jet charters, international flights, VIP airport services, and pre- and post-cruise stays coordinated seamlessly.",
                pills: ["Private Jets", "VIP Airport Service", "Pre/Post-Cruise Stays"],
                highlight: "Every journey planned end to end.",
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

      {/* ── PERFECT FOR FAMILIES ──────────────────────────────────────── */}
      <section
        className="dmg-info-section dmg-bg-white"
        id="dmg-perfect-for-families"
      >
        <div className="dmg-info-container">
          <div className="dmg-info-grid">
            {/* Left Side Image */}
            <div className="dmg-info-media">
              <div className="dmg-media-wrapper">
                <img
                  src={FamilyImage}
                  alt="Multigenerational family enjoying a luxury cruise together"
                  className="dmg-media-img"
                  style={{ height: "80vh" }}
                />
                <div className="dmg-media-overlay"></div>

                <div className="dmg-media-badge">
                  <span>Every Age, At Its Own Pace</span>
                </div>
              </div>
            </div>

            {/* Right Side Content */}
            <div className="dmg-info-content">
              <h2 className="dmg-info-title">Perfect for Families</h2>
              <div className="dmg-info-accent"></div>

              <p className="dmg-info-lead">
                Luxury cruises are ideal for athletes traveling with spouses,
                children, parents, or extended family. Every member of the
                family can enjoy the vacation at their own pace.
              </p>

              <div className="dmg-info-features dmg-info-features-scrollable">
                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Home size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Connecting Suites
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Accommodations built for multigenerational travel.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Sparkles size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Children's &amp; Teen Programs
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Age-appropriate activities for every young traveler.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Compass size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Family Excursions &amp; Private Shore Experiences
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Shared adventures selected with the whole family in
                      mind.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Utensils size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Flexible Dining
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Dining times and venues that work around your family's
                      schedule.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── POPULAR CRUISE DESTINATIONS (TABBED) ──────────────────────── */}
      <section
        className="luc-destinations-section"
        id="luc-popular-cruise-destinations"
      >
        <div className="luc-destinations-container">
          <div className="luc-destinations-header">
            <h2 className="luc-destinations-title">
              Popular Cruise Destinations
            </h2>

            <div className="adg-c-accent-line"></div>

            <p className="luc-destinations-intro">
              Professional athletes enjoy cruising to destinations around the
              world, from relaxed island escapes to extraordinary expedition
              voyages.
            </p>
          </div>

          <div className="luc-dest-layout">
            <nav className="luc-dest-nav">
              {cruiseDestinations.map((item) => {
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

            <div className="luc-dest-panel" key={activeDestination}>
              <div className="luc-dest-img-wrap">
                <img
                  src={currentDestination.image}
                  alt={currentDestination.title}
                  className="luc-dest-img"
                  style={{ objectPosition: currentDestination.objectPosition || "center" }}
                />

                <div className="luc-dest-img-overlay">
                  <div className="luc-dest-img-icon">
                    <ActiveDestinationIcon size={22} strokeWidth={1.6} />
                  </div>

                  <span className="luc-dest-img-title">
                    {currentDestination.title}
                  </span>
                </div>
              </div>

              <p className="luc-dest-panel-desc">
                <strong>{currentDestination.window}.</strong>{" "}
                {currentDestination.desc}
              </p>

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

      {/* ── PRIVATE JET & CONCIERGE SUPPORT ───────────────────────────── */}
      <section className="ugt-advantage-section" id="private-jet-concierge-support">
        <div className="ugt-advantage-container">
          <div className="ugt-advantage-header">
            <span className="ugt-advantage-eyebrow">
              Beyond the Voyage
            </span>

            <h2 className="ugt-advantage-title">
              Private Jet &amp; Concierge Support
            </h2>

            <div className="Asc-accent-line"></div>

            <p className="ugt-advantage-intro">
              Our luxury cruise planning goes far beyond booking the voyage.
              Every aspect of your journey is carefully planned to ensure a
              seamless experience.
            </p>
          </div>

          <div className="ugt-advantage-grid">
            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <Plane size={28} strokeWidth={1.5} />
              </div>

              <h4 className="ugt-card-title">Private Jet Charters</h4>

              <p className="ugt-card-desc">
                Private jet charters and international flights coordinated
                around your schedule.
              </p>
            </div>

            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <Luggage size={28} strokeWidth={1.5} />
              </div>

              <h4 className="ugt-card-title">Airport VIP Services</h4>

              <p className="ugt-card-desc">
                Expedited, personalized assistance from arrival through
                departure.
              </p>
            </div>

            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <Building2 size={28} strokeWidth={1.5} />
              </div>

              <h4 className="ugt-card-title">Luxury Hotels</h4>

              <p className="ugt-card-desc">
                Pre- and post-cruise stays selected to match your itinerary.
              </p>
            </div>

            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <Car size={28} strokeWidth={1.5} />
              </div>

              <h4 className="ugt-card-title">Private Transfers</h4>

              <p className="ugt-card-desc">
                Seamless ground transportation to and from every port.
              </p>
            </div>

            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <Compass size={28} strokeWidth={1.5} />
              </div>

              <h4 className="ugt-card-title">Shore Excursions</h4>

              <p className="ugt-card-desc">
                Curated excursions and restaurant reservations at every
                stop.
              </p>
            </div>

            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <ShieldCheck size={28} strokeWidth={1.5} />
              </div>

              <h4 className="ugt-card-title">Travel Insurance</h4>

              <p className="ugt-card-desc">
                Coverage arranged for added peace of mind on every voyage.
              </p>
            </div>
          </div>

          <p
            className="ugt-advantage-intro"
            style={{
              marginTop: "2.5rem",
              textAlign: "center",
              maxWidth: "900px",
              marginInline: "auto",
            }}
          >
            Every aspect of your journey is carefully planned to ensure a
            seamless experience.
          </p>
        </div>
      </section>

      {/* ── WHY BOOK WITH TRIPS & SHIPS LUXURY TRAVEL? ────────────────── */}
      <section className="adg-section" id="adg-why-book-with-trips-and-ships">
        <div className="adg-container">
          <div className="adg-section-header" style={{ marginBottom: "60px" }}>
            <h2 className="adg-h2">
              Why Book With Trips &amp; Ships Luxury Travel?
            </h2>
            <div className="adg-accent-line"></div>
          </div>

          <div
            className="adg-split-layout"
            style={{ alignItems: "flex-start" }}
          >
            <div className="adg-content-card-side">
              <img
                src={AdvisorImage}
                alt="Luxury travel advisor coordinating a cruise itinerary"
                className="adg-side-image"
                style={{ height: "45vh" }}
              />

              <div className="adg-info-card">
                <div className="adg-card-meta">
                  <Award size={28} />
                  <span className="adg-meta-label">Decades of Expertise</span>
                </div>

                <p className="adg-card-lead">
                  Selecting the right cruise line, itinerary, and suite can
                  make all the difference. With decades of luxury travel
                  expertise, we create personalized cruise experiences that
                  reflect your lifestyle and priorities.
                </p>

                <div className="adg-card-divider"></div>

                <p className="adg-card-subtext">
                  Because the right voyage is about more than the
                  destination — it's about how effortlessly you experience
                  it.
                </p>
              </div>
            </div>

            <div className="adg-list-side">
              {[
                {
                  title: "Compare Luxury Cruise Lines",
                  icon: <Ship size={20} />,
                },
                {
                  title: "Select the Best Itinerary",
                  icon: <Map size={20} />,
                },
                {
                  title: "Recommend the Ideal Suite",
                  icon: <Home size={20} />,
                },
                {
                  title: "Coordinate Family Travel",
                  icon: <Users size={20} />,
                },
                {
                  title: "Arrange Private Transportation",
                  icon: <Car size={20} />,
                },
                {
                  title: "Secure Exclusive Amenities & Promotions",
                  icon: <Gem size={20} />,
                },
                {
                  title: "Plan Milestone Celebrations",
                  icon: <PartyPopper size={20} />,
                },
                {
                  title: "Support Before, During & After Your Cruise",
                  icon: <Headset size={20} />,
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

      {/* ── DISCOVER THE WORLD IN LUXURY ──────────────────────────────── */}
      <section
        className="Avr-planning-section"
        id="Asc-discover-the-world-in-luxury"
        style={{ backgroundColor: "var(--bg-white)" }}
      >
        <div className="Asc-container">
          {/* HEADING */}
          <div className="Avr-planning-heading">
            <span className="Avr-planning-eyebrow">A New Way to Travel</span>

            <h2 className="Avr-planning-title">
              Discover the World in Luxury
            </h2>

            <div className="Avr-planning-divider"></div>
          </div>

          {/* TWO-PANEL GRID */}
          <div className="Avr-planning-grid">
            {/* LEFT PANEL */}
            <div className="Avr-planning-left">
              <div className="Avr-planning-left-deco">&ldquo;</div>

              <h3 className="Avr-planning-left-title">
                More Than Transportation — A New Way to Experience the World
              </h3>

              <p className="Avr-planning-left-body">
                Wake each morning in a different destination, enjoy
                exceptional dining, relax in spacious accommodations, and
                explore remarkable places without ever repacking your
                suitcase. When your time away from competition is limited,
                every detail matters.
              </p>

              <div className="Avr-planning-alert">
                <ShieldCheck size={18} className="Avr-planning-alert-icon" />

                <p className="Avr-planning-alert-text">
                  Let us design a luxury cruise vacation that delivers
                  comfort, privacy, adventure, and memories that will last
                  long after you've returned home.
                </p>
              </div>
            </div>

            {/* RIGHT PANEL */}
            <div className="Avr-planning-right">
              <p className="Avr-planning-right-intro">
                A luxury cruise vacation built around:
              </p>

              <div className="Avr-planning-benefits-grid">
                {[
                  {
                    icon: <Ship size={18} />,
                    label: "Intimate luxury ships & private yachts",
                  },
                  {
                    icon: <Snowflake size={18} />,
                    label: "Expedition voyages",
                  },
                  {
                    icon: <Anchor size={18} />,
                    label: "European river cruising",
                  },
                  {
                    icon: <Users size={18} />,
                    label: "Family & multigenerational travel",
                  },
                  {
                    icon: <UtensilsCrossed size={18} />,
                    label: "Exceptional dining onboard",
                  },
                  {
                    icon: <Headset size={18} />,
                    label: "Concierge support start to finish",
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
                Whether it's a peaceful river cruise through Europe, an
                expedition to Antarctica, or a private yacht in the
                Mediterranean, we'll help you find the perfect voyage.
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
                      icon: <Ship size={16} />,
                      label:
                        "Specialist in luxury cruise planning for professional athletes",
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
                  help professional athletes and their families plan luxury
                  cruise vacations — from choosing the right ship to flawless
                  on-the-ground and onboard execution.
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
              Everything you need to know about planning a luxury cruise
              vacation.
            </p>
          </div>
          <FAQ />
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────────── */}
      <section className="Asc-help-section">
        <div className="Asc-help-bg-wrap">
          <img
            src={CtaImage}
            alt="Luxury yacht sailing at sunset"
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
                  Ready to Discover the <br /> World in Luxury?
                </h2>
                <div className="Asc-help-accent"></div>
              </div>

              <div className="Asc-help-grid">
                <div className="Asc-help-info">
                  <p className="Asc-help-intro">
                    Connect with Angela Hughes and the expert team at Trips
                    &amp; Ships Luxury Travel for personalized guidance on
                    planning a luxury cruise vacation.
                  </p>

                  <p className="Asc-help-intro">
                    From small ship and expedition cruises to river voyages
                    and private yacht charters, expert support helps every
                    journey come together seamlessly.
                  </p>

                  <p className="Asc-help-intro">
                    Whether you're looking for a peaceful river cruise
                    through Europe, an unforgettable expedition to
                    Antarctica, a private yacht in the Mediterranean, or an
                    elegant ocean voyage with your family, we'll help you
                    find the perfect cruise experience.
                  </p>

                  <div className="Asc-help-btn-container">
                    <Link
                      to="/contact"
                      className="Asc-help-cta-btn"
                      style={{ textDecoration: "none" }}
                    >
                      Start Planning Your Luxury Cruise
                      <ArrowRight size={18} />
                    </Link>
                  </div>
                </div>

                <div className="Asc-help-list-box">
                  <h3 className="Asc-help-list-title">
                    Expert guidance includes:
                  </h3>
                  <ul className="Asc-help-bullets">
                    {[
                      "Cruise line & itinerary comparison",
                      "Suite & cabin category recommendations",
                      "Private yacht charter coordination",
                      "Family & multigenerational planning",
                      "Private jet & concierge support",
                      "Milestone celebration planning",
                    ].map((item, i) => (
                      <li key={i}>
                        <div className="Asc-bullet-icon">
                          <Check size={14} strokeWidth={3} />
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="Asc-help-intro" style={{ marginTop: "20px" }}>
                    Trips &amp; Ships Luxury Travel specializes in helping
                    professional athletes and their families create highly
                    personalized luxury cruise experiences worldwide.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LuxuryCruisesForProfessionalAthletes;