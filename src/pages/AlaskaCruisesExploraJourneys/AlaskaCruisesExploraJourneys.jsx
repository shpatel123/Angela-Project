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
  Plane,
  BadgePercent,
  ShieldCheck,
  Footprints,
  CalendarClock,
  Telescope,
  Binoculars,
  HeartPulse,
  Armchair,
  Camera,
  MountainSnow,
} from "lucide-react";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela.jpeg";

import HeroImage1 from "../../assets/AlaskaCruisesExploraJourneys/explora-journeys-alaska-luxury-expedition-cruise.jpg";
import HeroImage2 from "../../assets/AlaskaCruisesExploraJourneys/explora-journeys-alaska-luxury-cruise-through-fjords.jpg";
import HeroImage3 from "../../assets/AlaskaCruisesExploraJourneys/explora-journeys-alaska-glacier-expedition-adventure.jpg";
import ExploraSuite from "../../assets/IsExploraGoodForFamilies/explora-I-luxury-pool-deck-daybeds.jpg";
import ExploraSpa from "../../assets/IsExploraGoodForFamilies/explora-journeys-sunrise-pool-deck-luxury-yacht.webp";
import ExploraAlaska from "../../assets/AlaskaCruisesExploraJourneys/alaska-glacier-mountain-lake-scenic-wilderness-vacation.jpeg";
import ExploraAlaskaScenic from "../../assets/AlaskaCruisesExploraJourneys/alaska-scenic-wetland-mountain-landscape-vacation.jpeg";
import CTAImage from "../../assets/AlaskaCruisesExploraJourneys/explora-journeys-alaska-coastal-mountain-landscape.jpg";

import JuneauImg from "../../assets/AlaskaCruisesExploraJourneys/explora-journeys-alaska-orca-whale-expedition.jpg";
import KetchikanImg from "../../assets/AlaskaCruisesExploraJourneys/ketchikan-creek-street-alaska.png";
import SkagwayImg from "../../assets/AlaskaCruisesExploraJourneys/skagway-white-pass-railway-alaska.png";
import SitkaImg from "../../assets/AlaskaCruisesExploraJourneys/explora-journeys-haines-alaska-lighthouse-mountain-view.jpg";

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
        "https://tripsandships.com/alaska-cruises-on-explora-journeys/#webpage",
      name: "Alaska Cruises on Explora Journeys",
      url: "https://tripsandships.com/alaska-cruises-on-explora-journeys",
      description:
        "Discover luxury Alaska cruises on Explora Journeys. Explore glaciers, wildlife, Inside Passage itineraries, scenic cruising, shore excursions, and why Explora offers an elegant way to experience Alaska.",
    },
    {
      "@type": "Article",
      "@id":
        "https://tripsandships.com/alaska-cruises-on-explora-journeys/#article",
      headline: "Alaska Cruises on Explora Journeys",
      description:
        "A complete guide to cruising Alaska with Explora Journeys, covering destinations, glaciers, wildlife, dining, the best time to sail, and who these voyages suit best.",
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
        "https://tripsandships.com/alaska-cruises-on-explora-journeys/#breadcrumb",
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
          name: "Alaska Cruises on Explora Journeys",
          item: "https://tripsandships.com/alaska-cruises-on-explora-journeys",
        },
      ],
    },
    {
      "@type": "TouristTrip",
      "@id":
        "https://tripsandships.com/alaska-cruises-on-explora-journeys/#touristtrip",
      name: "Alaska Cruise with Explora Journeys",
      touristType: "Luxury travelers, couples, retirees, solo travelers",
      itinerary: {
        "@type": "ItemList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Juneau" },
          { "@type": "ListItem", position: 2, name: "Ketchikan" },
          { "@type": "ListItem", position: 3, name: "Skagway" },
          { "@type": "ListItem", position: 4, name: "Sitka" },
        ],
      },
    },
    {
      "@type": "Cruise",
      "@id":
        "https://tripsandships.com/alaska-cruises-on-explora-journeys/#cruise",
      name: "Explora Journeys Alaska Cruise",
      provider: {
        "@type": "TravelAgency",
        name: "Trips & Ships Luxury Travel",
      },
      departurePort: "Pacific Northwest Gateway Ports",
      description:
        "Luxury Alaska itineraries featuring scenic glacier cruising, wildlife viewing, and destination-focused excursions aboard an all-suite ship.",
    },
    {
      "@type": "Service",
      "@id":
        "https://tripsandships.com/alaska-cruises-on-explora-journeys/#service",
      serviceType: "Luxury Cruise Vacation Planning & Booking Support",
      provider: {
        "@type": "TravelAgency",
        name: "Trips & Ships Luxury Travel",
      },
      areaServed: "Worldwide",
      description:
        "Personalized planning support for Explora Journeys Alaska sailings, including itinerary selection, suite categories, and shore experiences.",
    },
    {
      "@type": "Review",
      "@id":
        "https://tripsandships.com/alaska-cruises-on-explora-journeys/#review",
      itemReviewed: {
        "@type": "Product",
        name: "Explora Journeys Alaska Cruise",
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
        "Explora Journeys offers one of the most elegant, relaxed ways to experience Alaska, combining spacious outdoor viewing areas with wellness experiences and impeccable service.",
    },
    {
      "@type": "ItemList",
      "@id":
        "https://tripsandships.com/alaska-cruises-on-explora-journeys/#itemlist",
      name: "What This Alaska Cruises on Explora Journeys Guide Covers",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Why Choose Explora Journeys for Alaska",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Discover Alaska's Iconic Destinations",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Hubbard Glacier & Scenic Cruising",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Incredible Wildlife Encounters",
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Shore Experiences & Dining",
        },
        {
          "@type": "ListItem",
          position: 6,
          name: "Luxury Meets Wilderness Onboard",
        },
        {
          "@type": "ListItem",
          position: 7,
          name: "Best Time to Cruise Alaska",
        },
        {
          "@type": "ListItem",
          position: 8,
          name: "Who Should Choose an Alaska Cruise?",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id":
        "https://tripsandships.com/alaska-cruises-on-explora-journeys/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Where does Explora Journeys cruise in Alaska?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Depending on the itinerary, ports may include Juneau, Ketchikan, Skagway, Sitka, and scenic glacier cruising regions.",
          },
        },
        {
          "@type": "Question",
          name: "Will I see glaciers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Scenic glacier cruising is often one of the highlights of Alaska itineraries.",
          },
        },
        {
          "@type": "Question",
          name: "Is Alaska suitable for first-time cruisers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. Alaska combines incredible scenery, comfortable sailing conditions, and unforgettable wildlife encounters.",
          },
        },
        {
          "@type": "Question",
          name: "What wildlife might I see?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Depending on the season, guests may observe whales, bears, bald eagles, sea otters, seals, and many other native species.",
          },
        },
        {
          "@type": "Question",
          name: "What is included on an Explora Alaska cruise?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Your fare generally includes your oceanfront suite, multiple dining venues, Wi-Fi, entertainment, fitness facilities, wellness amenities, and many onboard experiences.",
          },
        },
        {
          "@type": "Question",
          name: "Are excursions included?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most shore excursions are optional and can be customized to your interests.",
          },
        },
        {
          "@type": "Question",
          name: "When is the best time to cruise Alaska?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "June through August offers warmer temperatures, while May and September provide fewer crowds and excellent scenery.",
          },
        },
        {
          "@type": "Question",
          name: "Is Explora good for couples?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Spacious suites, exceptional dining, wellness experiences, and breathtaking scenery make Alaska an excellent destination for couples.",
          },
        },
        {
          "@type": "Question",
          name: "What should I pack?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Layered clothing, waterproof outerwear, comfortable walking shoes, binoculars, sunglasses, and a quality camera are recommended.",
          },
        },
        {
          "@type": "Question",
          name: "Should I use a travel advisor?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. A luxury travel advisor can help you choose the best itinerary, arrange logistics, and personalize every detail of your Alaska journey.",
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
      q: "Where does Explora Journeys cruise in Alaska?",
      a: "Depending on the itinerary, ports may include Juneau, Ketchikan, Skagway, Sitka, and scenic glacier cruising regions.",
    },
    {
      q: "Will I see glaciers?",
      a: "Yes. Scenic glacier cruising is often one of the highlights of Alaska itineraries.",
    },
    {
      q: "Is Alaska suitable for first-time cruisers?",
      a: "Absolutely. Alaska combines incredible scenery, comfortable sailing conditions, and unforgettable wildlife encounters.",
    },
    {
      q: "What wildlife might I see?",
      a: "Depending on the season, guests may observe whales, bears, bald eagles, sea otters, seals, and many other native species.",
    },
    {
      q: "What is included on an Explora Alaska cruise?",
      a: "Your fare generally includes your oceanfront suite, multiple dining venues, Wi-Fi, entertainment, fitness facilities, wellness amenities, and many onboard experiences.",
    },
    {
      q: "Are excursions included?",
      a: "Most shore excursions are optional and can be customized to your interests.",
    },
    {
      q: "When is the best time to cruise Alaska?",
      a: "June through August offers warmer temperatures, while May and September provide fewer crowds and excellent scenery.",
    },
    {
      q: "Is Explora good for couples?",
      a: "Yes. Spacious suites, exceptional dining, wellness experiences, and breathtaking scenery make Alaska an excellent destination for couples.",
    },
    {
      q: "What should I pack?",
      a: "Layered clothing, waterproof outerwear, comfortable walking shoes, binoculars, sunglasses, and a quality camera are recommended.",
    },
    {
      q: "Should I use a travel advisor?",
      a: "Yes. A luxury travel advisor can help you choose the best itinerary, arrange logistics, and personalize every detail of your Alaska journey.",
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

/* ── Alaska Destinations ───────────────────────────────────────── */
const alaskaDestinations = [
  {
    id: "juneau",
    title: "Juneau",
    badge: "Juneau",
    icon: Mountain,
    image: JuneauImg,

    desc: "Alaska's capital is surrounded by mountains, glaciers, and dense forests.",

    columns: [
      {
        label: "Popular Experiences Include:",
        items: [
          "Mendenhall Glacier",
          "Whale watching",
          "Gold Rush history",
          "Scenic tramways",
          "Local seafood restaurants",
          "Glacier helicopter tours",
        ],
      },
    ],

    themeLabel: "Adventure & Natural Beauty",
    themeText:
      "Juneau offers both adventure and natural beauty, from towering glaciers to vibrant Gold Rush history.",
  },

  {
    id: "ketchikan",
    title: "Ketchikan",
    badge: "Ketchikan",
    icon: Landmark,
    image: KetchikanImg,

    desc: 'Known as Alaska\'s "First City," Ketchikan is famous for its rich Native Alaskan heritage.',

    columns: [
      {
        label: "Highlights Include:",
        items: [
          "Creek Street",
          "Totem parks",
          "Salmon fishing",
          "Rainforest walks",
          "Local art galleries",
          "Wildlife viewing",
        ],
      },
    ],

    themeLabel: "Alaska's First City",
    themeText:
      "The town provides an authentic introduction to Southeast Alaska's rich Native heritage.",
  },

  {
    id: "skagway",
    title: "Skagway",
    badge: "Skagway",
    icon: CalendarClock,
    image: SkagwayImg,

    desc: "Step back into the Klondike Gold Rush era.",

    columns: [
      {
        label: "Guests May Enjoy:",
        items: [
          "White Pass Railway",
          "Historic downtown",
          "Gold Rush museums",
          "Mountain scenery",
          "Scenic hiking",
          "Cultural experiences",
        ],
      },
    ],

    themeLabel: "History Meets Landscape",
    themeText:
      "Skagway blends fascinating Gold Rush history with spectacular mountain landscapes.",
  },

  {
    id: "sitka",
    title: "Sitka",
    badge: "Sitka",
    icon: Compass,
    image: SitkaImg,

    desc: "Sitka offers a unique combination of Russian history and Native Alaskan culture.",

    columns: [
      {
        label: "Visitors Often Explore:",
        items: [
          "Sitka National Historical Park",
          "Wildlife viewing",
          "Historic churches",
          "Coastal kayaking",
          "Harbor walks",
          "Local artisan shops",
        ],
      },
    ],

    themeLabel: "Alaska's Hidden Gem",
    themeText:
      "Its peaceful atmosphere makes Sitka one of Alaska's hidden gems, rich in Russian and Native Alaskan culture.",
  },
];

/* ── Main Component ──────────────────────────────────────────────── */
const AlaskaCruisesOnExploraJourneys = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [readMore, setReadMore] = useState(false);
  const [activeRegion, setActiveRegion] = useState("juneau");
  const currentRegion =
    alaskaDestinations.find((d) => d.id === activeRegion) ||
    alaskaDestinations[0];

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
          Alaska Cruises on Explora Journeys | Luxury Alaska Cruise Guide
        </title>
        <meta name="title" content="Alaska Cruises on Explora Journeys" />
        <meta
          name="description"
          content="Discover luxury Alaska cruises on Explora Journeys. Explore glaciers, wildlife, Inside Passage itineraries, scenic cruising, shore excursions, and why Explora offers an elegant way to experience Alaska."
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
            Alaska Cruises <br /> on Explora Journeys
          </h1>

          <p>
            Alaska is one of the world's last great wilderness destinations.
            Towering glaciers, snow-capped mountains, pristine fjords, abundant
            wildlife, and charming coastal communities create an unforgettable
            journey that is unlike anywhere else on Earth.
          </p>

          <p>
            An Alaska cruise allows travelers to experience this remarkable
            region without sacrificing comfort. Each morning brings a new
            landscape — from dramatic glacier-carved coastlines to peaceful
            fishing villages and wildlife-rich national parks.
          </p>

          {readMore && (
            <>
              <p>
                Explora Journeys combines sophisticated European luxury with
                immersive destination experiences, making Alaska an exceptional
                choice for travelers who want to experience nature while
                enjoying spacious accommodations, exceptional dining,
                personalized service, and a relaxed onboard atmosphere.
              </p>

              <p>
                This guide covers every region, the onboard culinary program,
                shore experiences, the best time to sail, and whether an Explora
                Alaska cruise is right for your next voyage.
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

      {/* ── WHY CHOOSE EXPLORA FOR ALASKA ─────────────────── */}
      <section
        className="ugt-components-section"
        id="why-choose-explora"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="ugt-components-container">
          <div className="ugt-components-header">
            <h2 className="ugt-components-title">
              Why Choose Explora Journeys <br /> for Alaska?
            </h2>

            <div className="adg-c-accent-line"></div>
          </div>

          <div className="ugt-components-list">
            <div className="ugt-component-row">
              <div className="ugt-component-image-wrapper">
                <div className="ugt-component-image-container">
                  <img
                    src={ExploraSuite}
                    alt="Onboard atmosphere aboard Explora Journeys in Alaska"
                    className="ugt-component-image"
                  />
                </div>
              </div>

              <div className="ugt-component-content">
                <p className="ugt-component-text">
                  Explora Journeys approaches <strong>Alaska</strong>{" "}
                  differently than many traditional cruise lines. Rather than
                  emphasizing crowded attractions and busy schedules, Explora
                  focuses on immersive travel, elegant surroundings, and
                  meaningful exploration.
                </p>

                <div className="ugt-questions-box">
                  <span className="ugt-questions-title">Guests Enjoy:</span>

                  <ul className="ugt-questions-list">
                    {[
                      "Oceanfront all-suite accommodations",
                      "Personalized luxury service",
                      "Spacious outdoor viewing areas",
                      "Wellness experiences",
                      "Exceptional dining",
                      "Destination-focused itineraries",
                      "Relaxed luxury throughout the voyage",
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
                  The result is a journey where Alaska's incredible scenery
                  remains the star of the experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SHORE EXPERIENCES & ALASKAN DINING ───────────────────────────────────────── */}
      <section
        className="Ejvs-pricing-section"
        id="shore-experiences-dining"
        style={{ backgroundColor: "var(--bg-white)" }}
      >
        <div className="Ejvs-container">
          <div className="Ejvs-section-header">
            <h2 className="Ejvs-section-title">
              Shore Experiences &amp; Dining Inspired by the Journey
            </h2>

            <div className="Ejvs-section-accent"></div>

            <p className="Ejvs-section-subtitle">
              Explora offers carefully curated shore experiences designed to
              showcase Alaska's natural beauty, while the onboard culinary
              program complements every destination you visit.
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
                Explora offers carefully curated shore experiences designed to
                showcase Alaska's natural beauty and rich cultural heritage.
              </p>

              <ul className="Ejvs-feature-list">
                {[
                  "Whale watching",
                  "Glacier trekking",
                  "Dog sledding",
                  "Helicopter adventures",
                  "Scenic rail journeys",
                  "Native cultural experiences",
                  "Kayaking",
                  "Wildlife photography tours",
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
                  Guests may also choose independent exploration in many ports.
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
                Explora's culinary program complements the destinations you
                visit throughout Alaska.
              </p>

              <ul className="Ejvs-feature-list">
                {[
                  "Fresh seafood",
                  "Seasonal ingredients",
                  "Gourmet international cuisine",
                  "Fine wines",
                  "Specialty restaurants",
                  "Casual outdoor dining",
                ].map((item, i) => (
                  <li key={i} className="Ejvs-feature-item">
                    <Star size={14} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="Ejvs-card-highlight">
                <p>
                  Many travelers appreciate sampling regional seafood while also
                  enjoying Explora's diverse international menus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── LUXURY MEETS WILDERNESS ONBOARD ────────────────────────────────────── */}
      <section className="adg-section" id="adg-life-onboard-alaska">
        <div className="adg-container">
          <div className="adg-section-header" style={{ marginBottom: "60px" }}>
            <h2 className="adg-h2">Luxury Meets Wilderness</h2>
            <div className="adg-accent-line"></div>

            <p
              className="Asc-body-text"
              style={{ textAlign: "center", marginTop: "15px" }}
            >
              One of the unique aspects of an Explora Alaska cruise is the
              contrast between rugged landscapes and refined onboard luxury.
            </p>
          </div>

          <div className="adg-split-layout">
            <div className="adg-content-card-side">
              <img
                src={ExploraSpa}
                alt="Luxury lounges and ocean views aboard Explora Journeys during an Alaska cruise"
                className="adg-side-image"
                style={{ height: "42vh" }}
              />

              <div className="adg-info-card">
                <div className="adg-card-meta">
                  <Sparkles size={28} />
                  <span className="adg-meta-label">Relax &amp; Recharge</span>
                </div>

                <p className="adg-card-lead">
                  After a day exploring glaciers and forests, guests return to
                  spacious suites and refined onboard comfort — the balance
                  between adventure and relaxation defines the Explora
                  experience.
                </p>
              </div>
            </div>

            <div className="adg-list-side">
              {[
                "Spacious suites",
                "Gourmet dining",
                "Ocean Wellness Spa",
                "Elegant lounges",
                "Live music",
                "Infinity pools",
                "Personalized service",
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

      {/* ── BEST TIME TO CRUISE ALASKA ───────────────────────────────────────── */}
      <section
        className="adg-c-section adg-c-bg-white"
        id="best-time-to-cruise"
      >
        <div className="adg-c-container">
          <div className="adg-c-section-header">
            <span className="adg-c-eyebrow">Plan Your Sailing</span>

            <h2 className="adg-c-h2">Best Time to Cruise Alaska</h2>

            <div className="adg-c-accent-line"></div>

            <p className="Asc-section-intro">
              Alaska's cruise season generally runs from late spring through
              early autumn, with each month offering a slightly different
              perspective on Alaska.
            </p>
          </div>

          <div
            className="adg-c-venues-grid1"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            }}
          >
            {/* May */}
            <div className="adg-c-venue-card adg-c-venue-1">
              <div className="adg-c-venue-top">
                <span className="adg-c-venue-eyebrow">
                  <Snowflake
                    size={14}
                    style={{ display: "inline", marginRight: 6 }}
                  />
                  Season Opens
                </span>

                <h3 className="adg-c-venue-name">May</h3>

                <p className="adg-c-venue-highlight">
                  Fewer Crowds, Fresh Snow
                </p>
              </div>

              <ul className="adg-c-venue-list">
                {[
                  "Snow-capped mountains",
                  "Cool temperatures",
                  "Fewer crowds",
                  "Wildlife emerging",
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
                  May offers a quieter start to the Alaska season with crisp,
                  scenic landscapes.
                </p>
              </div>
            </div>

            {/* June */}
            <div className="adg-c-venue-card adg-c-venue-2">
              <div className="adg-c-venue-top">
                <span className="adg-c-venue-eyebrow">
                  <Flower2
                    size={14}
                    style={{ display: "inline", marginRight: 6 }}
                  />
                  Blooming Landscapes
                </span>

                <h3 className="adg-c-venue-name">June</h3>

                <p className="adg-c-venue-highlight">Long Daylight Hours</p>
              </div>

              <ul className="adg-c-venue-list">
                {[
                  "Long daylight hours",
                  "Blooming landscapes",
                  "Excellent wildlife viewing",
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
                  Extended daylight makes June ideal for sightseeing and
                  wildlife photography.
                </p>
              </div>
            </div>

            {/* July */}
            <div className="adg-c-venue-card adg-c-venue-1">
              <div className="adg-c-venue-top">
                <span className="adg-c-venue-eyebrow">
                  <Sun
                    size={14}
                    style={{ display: "inline", marginRight: 6 }}
                  />
                  Peak Season
                </span>

                <h3 className="adg-c-venue-name">July</h3>

                <p className="adg-c-venue-highlight">
                  Warmest Weather of the Year
                </p>
              </div>

              <ul className="adg-c-venue-list">
                {[
                  "Warmest weather",
                  "Peak cruise season",
                  "Active wildlife",
                  "Lush scenery",
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
                  Many luxury travelers consider July the height of the Alaska
                  cruise season.
                </p>
              </div>
            </div>

            {/* August */}
            <div className="adg-c-venue-card adg-c-venue-2">
              <div className="adg-c-venue-top">
                <span className="adg-c-venue-eyebrow">
                  <Leaf
                    size={14}
                    style={{ display: "inline", marginRight: 6 }}
                  />
                  Salmon Runs
                </span>

                <h3 className="adg-c-venue-name">August</h3>

                <p className="adg-c-venue-highlight">
                  Comfortable Temperatures
                </p>
              </div>

              <ul className="adg-c-venue-list">
                {[
                  "Comfortable temperatures",
                  "Salmon runs",
                  "Whale watching",
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
                  August pairs pleasant weather with excellent whale watching
                  opportunities.
                </p>
              </div>
            </div>

            {/* September */}
            <div className="adg-c-venue-card adg-c-venue-1">
              <div className="adg-c-venue-top">
                <span className="adg-c-venue-eyebrow">
                  <Sparkles
                    size={14}
                    style={{ display: "inline", marginRight: 6 }}
                  />
                  Fall Colors
                </span>

                <h3 className="adg-c-venue-name">September</h3>

                <p className="adg-c-venue-highlight">
                  Smaller Crowds, Beautiful Light
                </p>
              </div>

              <ul className="adg-c-venue-list">
                {[
                  "Fall colors",
                  "Smaller crowds",
                  "Beautiful photography",
                  "Early northern lights opportunities",
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
                  September offers fall colors, quieter ports, and the first
                  chances to spot the northern lights.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SEA DAYS IN ALASKA ──────────────────────────────────── */}
      <section
        className="dmg-info-section"
        id="sea-days-in-alaska"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="dmg-info-container">
          <div className="dmg-info-header">
            <h2 className="dmg-info-title">Sea Days in Alaska</h2>
            <div className="dmg-info-accent"></div>
          </div>

          <div className="dmg-info-grid">
            <div className="dmg-info-content">
              <p className="dmg-info-lead">
                Unlike many cruises, sea days in Alaska are among the voyage's
                greatest highlights. Spectacular scenery surrounds the ship
                throughout the day, making every moment an opportunity to
                discover something new.
              </p>

              <div className="dmg-info-features dmg-info-features-scrollable">
                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <MountainSnow size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Watching Glaciers
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Admire towering glaciers and dramatic icy landscapes from
                      spacious outdoor decks or your private terrace.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Camera size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Photographing Wildlife
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Keep an eye out for whales, bald eagles, sea otters, and
                      other incredible wildlife throughout the voyage.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Armchair size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Relaxing on Private Terraces
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Enjoy uninterrupted mountain and coastal views from the
                      comfort of your suite.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <HeartPulse size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Spa, Tea &amp; Live Music
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Unwind at the spa, enjoy afternoon tea, or listen to live
                      music while Alaska's scenery unfolds outside.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Binoculars size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Panoramic Mountain Views
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Take in ever-changing views of snow-capped peaks, fjords,
                      and rugged coastlines throughout the day.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="dmg-info-media">
              <div className="dmg-media-wrapper">
                <img
                  src={ExploraAlaska}
                  alt="Guests enjoying scenic sea days aboard Explora Journeys in Alaska"
                  className="dmg-media-img"
                  style={{ height: "610px" }}
                />
                <div className="dmg-media-overlay"></div>

                <div className="dmg-media-badge">
                  <span>Scenic Sea Days • Ever-Changing Views</span>
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
            The scenery changes constantly, making every hour at sea a unique
            and unforgettable part of your Alaska voyage.
          </p>
        </div>
      </section>

      {/* ── DISCOVER ALASKA'S ICONIC DESTINATIONS ───── */}
      <section className="luc-destinations-section" id="luc-destinations">
        <div className="luc-destinations-container">
          <div className="luc-destinations-header">
            <h2 className="luc-destinations-title">
              Discover Alaska's Iconic Destinations
            </h2>

            <div className="adg-c-accent-line"></div>

            <p className="luc-destinations-intro">
              Explora Alaska itineraries may include many of the state's most
              celebrated ports and scenic cruising regions.
            </p>
          </div>

          {/* Layout */}
          <div className="luc-dest-layout">
            {/* Sidebar nav */}
            <nav className="luc-dest-nav">
              {alaskaDestinations.map((item) => {
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

      {/* ── PLANNING YOUR ALASKA CRUISE ───────────────────────── */}
      <section className="ugt-advantage-section">
        <div className="Asc-container">
          <div className="ugt-advantage-header">
            <span className="ugt-advantage-eyebrow">Plan with Confidence</span>

            <h2 className="ugt-advantage-title">
              Tips for Planning Your Alaska Cruise
            </h2>

            <div className="Asc-accent-line"></div>

            <p className="ugt-advantage-intro">
              A little preparation can make your Alaska cruise even more
              rewarding. These simple tips will help you choose the right
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
                Luxury Alaska sailings often sell out well in advance.
              </p>
            </div>

            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <Snowflake size={28} strokeWidth={1.5} />
              </div>

              <h4 className="ugt-card-title">Bring Layers</h4>

              <p className="ugt-card-desc">
                Alaska weather can change quickly throughout the day.
              </p>
            </div>

            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <Telescope size={28} strokeWidth={1.5} />
              </div>

              <h4 className="ugt-card-title">Pack Binoculars</h4>

              <p className="ugt-card-desc">
                Wildlife viewing opportunities are frequent.
              </p>
            </div>

            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <Footprints size={28} strokeWidth={1.5} />
              </div>

              <h4 className="ugt-card-title">Reserve Excursions Early</h4>

              <p className="ugt-card-desc">
                Popular tours such as helicopter flights and whale watching
                often fill quickly.
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
                Professional guidance can help you select the ideal itinerary,
                suite location, and shore experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── HUBBARD GLACIER & SCENIC CRUISING ───────────────────────────────────────── */}
      <section
        className="adg-c-section adg-c-bg-white"
        id="scenic-cruising-alaska"
      >
        <div className="adg-c-container">
          <div className="adg-c-section-header">
            <h2 className="adg-c-h2">Hubbard Glacier &amp; Scenic Cruising</h2>
            <div className="adg-c-accent-line"></div>

            <p className="Asc-section-intro">
              One of the highlights of many Alaska cruises is simply witnessing
              nature at its most impressive. Some of Alaska's greatest treasures
              cannot be reached by road.
            </p>
          </div>

          <div className="adg-c-overview-layout">
            <div className="adg-c-overview-icons">
              {[
                "Glacier-filled bays",
                "Narrow fjords",
                "Remote islands",
                "Untouched forests",
                "Towering mountain ranges",
                "Hidden waterfalls",
                "Abundant wildlife viewing",
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
                    Guests often spend hours on deck watching glaciers calve
                    into the sea — Explora's spacious outdoor decks and private
                    suite terraces provide exceptional viewing opportunities
                    throughout the voyage.
                  </p>
                </div>
              </div>

              <div className="adg-c-overview-image-wrap">
                <img
                  src={ExploraAlaskaScenic}
                  alt="Scenic glacier cruising viewed from an Explora Journeys ship in Alaska"
                  className="adg-c-overview-img"
                />

                <div className="adg-c-overview-img-overlay">
                  <span className="adg-c-overview-img-label">
                    Discover Alaska by Sea
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
              Personalized Alaska Cruise Planning
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
                Create Your Perfect Alaska Journey
              </h3>

              <p className="Avr-planning-left-body">
                An experienced luxury travel advisor can help you select the
                ideal itinerary, suite location, and shore experiences. Their
                expertise helps ensure every aspect of your Alaska vacation is
                carefully planned.
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
                    label: "Compare Alaska itineraries",
                  },
                  {
                    icon: <Home size={18} />,
                    label: "Choose the best suite for glacier viewing",
                  },
                  {
                    icon: <Plane size={18} />,
                    label: "Arrange flights and hotels",
                  },
                  {
                    icon: <Compass size={18} />,
                    label: "Coordinate pre- and post-cruise travel",
                  },
                  {
                    icon: <Sparkles size={18} />,
                    label: "Recommend exclusive shore excursions",
                  },
                  {
                    icon: <BadgePercent size={18} />,
                    label: "Maximize promotional offers",
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
                Their expertise helps ensure every aspect of your Alaska
                vacation is carefully planned.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHO SHOULD CHOOSE AN ALASKA CRUISE ─────────────────────────────── */}
      <section className="Asc-section Asc-bg-white" id="Asc-who">
        <div className="Asc-container">
          <div className="Asc-section-header">
            <h2 className="Asc-h2">Who Should Choose an Alaska Cruise?</h2>
            <div className="Asc-accent-line"></div>
            <p className="Asc-faq-intro">
              These itineraries are especially popular with couples, retirees,
              solo travelers, photographers, and experienced luxury cruisers.
            </p>
          </div>

          <div className="Asc-who-grid">
            <div className="Asc-who-card Asc-who-yes">
              <h3 className="Asc-who-title">
                Explora Alaska Cruises Are Ideal for Travelers Who Appreciate:
              </h3>
              <ul className="Asc-who-list">
                {[
                  "Nature",
                  "Wildlife",
                  "Photography",
                  "Luxury accommodations",
                  "Personalized service",
                  "Scenic cruising",
                  "Wellness",
                  "Quiet exploration",
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
                You May Prefer Another Cruise Line If You're Seeking:
              </h3>
              <ul className="Asc-who-list">
                {[
                  "Water parks",
                  "Character entertainment",
                  "Large casinos",
                  "High-energy nightlife",
                  "Constant onboard activities",
                  "Theme park attractions",
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
            Guests who value elegant surroundings and immersive travel generally
            find Explora to be an outstanding choice.
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
              Everything travelers need to know about Alaska cruises on Explora
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
            alt="Explora Journeys sailing along the coast of Alaska"
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
                  Discover Alaska <br /> at Explora's Pace
                </h2>
                <div className="Asc-help-accent"></div>
              </div>

              <div className="Asc-help-grid">
                <div className="Asc-help-info">
                  <p className="Asc-help-intro">
                    Alaska is one of the few destinations where the journey
                    itself is every bit as extraordinary as the ports you'll
                    visit. Towering glaciers, abundant wildlife, dramatic
                    mountain landscapes, and peaceful coastal towns create
                    unforgettable memories at every turn.
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
                        Explora Journeys enhances this remarkable destination
                        through spacious all-suite accommodations, refined
                        dining, personalized service, wellness experiences, and
                        thoughtfully designed itineraries that allow guests to
                        experience Alaska in comfort and style.
                      </p>
                      <br />
                      <p className="Asc-help-intro">
                        For travelers seeking an elegant, immersive, and
                        unforgettable Alaska cruise, Explora Journeys offers an
                        exceptional way to discover North America's last great
                        wilderness.
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
                      Start Planning Your Alaska Voyage
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
                      "Recommend the ideal Alaska itinerary for your travel style",
                      "Advise on which ports and glaciers to prioritize",
                      "Coordinate pre- and post-cruise hotel stays",
                      "Select the right suite for glacier viewing",
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
                      label: "Mediterranean Cruises on Explora Journeys",
                      path: "/mediterranean-cruises-on-explora-journeys",
                    },
                    {
                      label: "Greece & Greek Isles Cruises on Explora Journeys",
                      path: "/greece-greek-isles-cruises-on-explora-journeys",
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

export default AlaskaCruisesOnExploraJourneys;
