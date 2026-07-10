import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Ship,
  Users,
  MapPin,
  Award,
  Check,
  Plus,
  Minus,
  ArrowRight,
  Star,
  Compass,
  Anchor,
  Sparkles,
  Briefcase,
  Snowflake,
  Sun,
  Headphones,
  Laptop,
  Camera,
  Battery,
  BatteryCharging,
  Smartphone,
} from "lucide-react";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela2.jpeg";

import HeroImage1 from "../../assets/WhichExploraShipChoose/EXPLORA-III-PANAMA-CANAL.jpg";
import HeroImage2 from "../../assets/WhichExploraShipChoose/Explora-Journeys-1.webp";
import HeroImage4 from "../../assets/HowAdvanceShouldBookExplora/explora-III.jpg";

import ExploraDetination from "../../assets/WhichExploraSuiteWorthUpgrade/EXPLORA-CARIBBEAN.jpg";
import ExploraDetination2 from "../../assets/WhichMediterraneanItineraryIsBest/santorini-greece-mediterranean-luxury-cruise-view.jpg";
import ExploraDetination5 from "../../assets/WhichExploraShipChoose/mediterranean-hidden-cove-luxury-cruise-summer-2025.jpg";

import LuxuryOceanfrontSuites from "../../assets/WhichExploraSuiteWorthUpgrade/explora-journeys-oceanfront-infinity-pool-deck.jpg";
import ExploraCta from "../../assets/WhichExploraShipChoose/ExploraCruise3.webp";
import ExploraPool from "../../assets/WhichExploraShipChoose/Regent-Seven-Seas-Cruises.webp";
import ExploraPool2 from "../../assets/WhichExploraSuiteWorthUpgrade/explora-I-luxury-pool-deck-daybeds.jpg";
import Exploradining from "../../assets/WhichExploraSuiteWorthUpgrade/explora-outside-suites.jpg";
import ExploraSuite from "../../assets/HowAdvanceShouldBookExplora/Explora-Suite.webp";

import { Helmet } from "react-helmet-async";

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
        "Luxury travel agency specializing in luxury cruises, safaris, expeditions, and premium travel experiences.",
    },
    {
      "@type": "Person",
      name: "Angela Hughes",
      jobTitle: "CEO of Trips & Ships Luxury Travel",
      description:
        "Luxury travel expert with over 40 years of experience and travel to 121+ countries.",
    },
    {
      "@type": "WebPage",
      name: "What to Pack for an Explora Cruise",
      url: "https://tripsandships.com/what-to-pack-for-an-explora-cruise",
      description:
        "Wondering what to pack for an Explora Journeys cruise? Discover the ultimate packing list, including clothing, footwear, accessories, travel essentials, and destination-specific tips for your luxury voyage.",
    },
    {
      "@type": "Article",
      headline: "What to Pack for an Explora Cruise",
      description:
        "A complete luxury cruise packing guide for Explora Journeys, covering daytime and evening attire, footwear, swimwear, excursion clothing, destination tips, and what to leave at home.",
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
          item: "https://tripsandships.com/luxury-cruises",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "What to Pack for an Explora Cruise",
          item: "https://tripsandships.com/what-to-pack-for-an-explora-cruise",
        },
      ],
    },
    {
      "@type": "ItemList",
      name: "Essential Packing Categories for Explora Journeys",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Daytime Clothing",
          description:
            "Lightweight, resort-casual pieces for relaxed days onboard and ashore.",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Evening Attire",
          description:
            "Smart casual and elegant options for refined dining without strict formalwear.",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Footwear",
          description: "Comfortable walking shoes plus dress and pool options.",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Excursion Essentials",
          description:
            "Layers, a day bag, and weather-ready gear for shore exploration.",
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Destination-Specific Items",
          description:
            "Packing adjustments based on Mediterranean, Northern Europe, or Caribbean itineraries.",
        },
      ],
    },
    {
      "@type": "HowTo",
      name: "How to Pack for an Explora Journeys Cruise",
      step: [
        { "@type": "HowToStep", name: "Understand Explora's Style" },
        { "@type": "HowToStep", name: "Pack Daytime Clothing" },
        { "@type": "HowToStep", name: "Pack Evening Attire" },
        { "@type": "HowToStep", name: "Choose the Right Footwear" },
        { "@type": "HowToStep", name: "Prepare for Shore Excursions" },
        { "@type": "HowToStep", name: "Adjust for Your Destination" },
      ],
    },
    {
      "@type": "TouristTrip",
      name: "Explora Journeys Luxury Cruise",
      provider: {
        "@type": "Organization",
        name: "Explora Journeys",
      },
      touristType: "Luxury cruise travelers",
    },
    {
      "@type": "Review",
      itemReviewed: {
        "@type": "TouristTrip",
        name: "Explora Journeys Luxury Cruise Packing Experience",
      },
      author: {
        "@type": "Person",
        name: "Angela Hughes",
      },
      reviewBody:
        "Packing well for Explora Journeys is less about bringing more and more about bringing the right things. Versatile, polished pieces serve travelers far better than an overstuffed suitcase.",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Is there a formal dress code on Explora?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Explora embraces elegant resort-style attire. Most evenings are smart casual, with no requirement for tuxedos or formal gowns.",
          },
        },
        {
          "@type": "Question",
          name: "What shoes should I pack?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Bring comfortable walking shoes for excursions, sandals for warm-weather destinations, and dress shoes for evening dining.",
          },
        },
        {
          "@type": "Question",
          name: "Should I bring formalwear?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most guests do not need traditional formalwear. Stylish, elegant clothing is generally appropriate for dinner.",
          },
        },
        {
          "@type": "Question",
          name: "Does Explora provide toiletries?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Premium bath amenities are provided in every suite, though many guests bring their preferred personal care products.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need beach towels?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Pool towels are available onboard.",
          },
        },
        {
          "@type": "Question",
          name: "What should I wear during the day?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Resort casual clothing such as shorts, linen pants, polo shirts, sundresses, and comfortable footwear works well.",
          },
        },
        {
          "@type": "Question",
          name: "What should I pack for Mediterranean cruises?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Lightweight clothing, comfortable walking shoes, sun protection, and a light sweater for cooler evenings are ideal.",
          },
        },
        {
          "@type": "Question",
          name: "Should I bring a jacket?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Even warm-weather itineraries can have cooler evenings or air-conditioned indoor spaces.",
          },
        },
        {
          "@type": "Question",
          name: "Can I wear jeans onboard?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Clean, well-maintained jeans are generally appropriate in many casual settings, though guests often choose more polished attire for dinner.",
          },
        },
        {
          "@type": "Question",
          name: "What's the biggest packing mistake?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Overpacking. Because Explora offers a relaxed luxury atmosphere, versatile clothing that can be worn in multiple settings is usually the best approach.",
          },
        },
        {
          "@type": "Question",
          name: "Does Explora Journeys provide hair dryers and straighteners?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Every suite on Explora Journeys is equipped with a high-performance Dyson Supersonic hair dryer, so there is no need to pack one. However, if you require a hair straightener or styling iron, you should bring your own.",
          },
        },
        {
          "@type": "Question",
          name: "What plug adapters or outlets are available in Explora suites?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Explora Journeys suites feature multiple power outlets, including standard US (110V) and European (220V) plugs, along with USB-A and USB-C charging ports beside the bed and at the desk, reducing the need for multiple heavy adapters.",
          },
        },
        {
          "@type": "Question",
          name: "Are there laundry services available onboard Explora ships?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, Explora Journeys offers professional laundry, pressing, and dry-cleaning services for a fee. Additionally, complimentary self-service launderettes (equipped with washers, dryers, ironing boards, and detergent) are available on guest decks.",
          },
        },
        {
          "@type": "Question",
          name: "What should I pack for the fitness center and wellness programs?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Pack athletic wear, supportive running or training shoes, and activewear for fitness classes (like yoga or pilates). Explora Journeys ships feature state-of-the-art indoor and outdoor ocean wellness fitness centers.",
          },
        },
        {
          "@type": "Question",
          name: "Should I pack a rain jacket or umbrella for Explora excursions?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It is recommended to bring a lightweight, packable rain jacket or windbreaker. However, Explora Journeys provides large umbrellas in every suite for guests to use during rainy days ashore, so you do not need to pack your own.",
          },
        },
      ],
    },
  ],
};

/* ── Data: Destination packing (tabbed panel) ────────────────────── */
const packingByDestination = [
  {
    id: "mediterranean",
    title: "Mediterranean",
    badge: "Mediterranean",
    icon: Sun,
    image: ExploraDetination5,
    window: "Warm days, cooler evenings",
    desc: "Mediterranean itineraries call for lightweight clothing during the day and a light layer for cooler evenings on deck.",
    columns: [
      {
        label: "Pack For This Region:",
        items: [
          "Lightweight Clothing",
          "Comfortable Sandals",
          "Sun Protection",
          "Evening Outfits",
          "Light Sweater",
        ],
      },
    ],
    themeLabel: "Classic Warm-Weather Sailing",
    themeText:
      "Versatile, breathable pieces paired with one elegant evening outfit cover nearly every Mediterranean port day.",
  },
  {
    id: "northern-europe",
    title: "Northern Europe",
    badge: "Northern Europe",
    icon: Snowflake,
    image: ExploraDetination2,
    window: "Changeable weather throughout the day",
    desc: "Northern Europe itineraries reward travelers who pack in layers, since conditions can shift from sun to rain within hours.",
    columns: [
      {
        label: "Pack For This Region:",
        items: [
          "Layers",
          "Waterproof Jacket",
          "Closed-Toe Shoes",
          "Scarf",
          "Sweater",
        ],
      },
    ],
    themeLabel: "Layer-First Packing",
    themeText:
      "A waterproof outer layer and a few warm mid-layers do more work than any single heavy coat.",
  },
  {
    id: "caribbean",
    title: "Caribbean",
    badge: "Caribbean",
    icon: Compass,
    image: ExploraDetination,
    window: "Consistent tropical warmth",
    desc: "Caribbean sailings are the most straightforward to pack for, with breathable fabrics and swimwear doing most of the work.",
    columns: [
      {
        label: "Pack For This Region:",
        items: [
          "Swimwear",
          "Breathable Fabrics",
          "Sun Hat",
          "Reef-Safe Sunscreen",
          "Sandals",
        ],
      },
    ],
    themeLabel: "Lightweight & Easy",
    themeText:
      "Tropical itineraries call for the lightest suitcase of the three, with room left over for resort wear and souvenirs.",
  },
];

/* ── FAQ Component ────────────────────────────────────────────────── */
function FAQ() {
  const [open, setOpen] = useState(null);

  const faqData = [
    {
      q: "Is there a formal dress code on Explora?",
      a: "Explora embraces elegant resort-style attire. Most evenings are smart casual, with no requirement for tuxedos or formal gowns.",
    },
    {
      q: "What shoes should I pack?",
      a: "Bring comfortable walking shoes for excursions, sandals for warm-weather destinations, and dress shoes for evening dining.",
    },
    {
      q: "Should I bring formalwear?",
      a: "Most guests do not need traditional formalwear. Stylish, elegant clothing is generally appropriate for dinner.",
    },
    {
      q: "Does Explora provide toiletries?",
      a: "Yes. Premium bath amenities are provided in every suite, though many guests bring their preferred personal care products.",
    },
    {
      q: "Do I need beach towels?",
      a: "No. Pool towels are available onboard.",
    },
    {
      q: "What should I wear during the day?",
      a: "Resort casual clothing such as shorts, linen pants, polo shirts, sundresses, and comfortable footwear works well.",
    },
    {
      q: "What should I pack for Mediterranean cruises?",
      a: "Lightweight clothing, comfortable walking shoes, sun protection, and a light sweater for cooler evenings are ideal.",
    },
    {
      q: "Should I bring a jacket?",
      a: "Yes. Even warm-weather itineraries can have cooler evenings or air-conditioned indoor spaces.",
    },
    {
      q: "Can I wear jeans onboard?",
      a: "Yes. Clean, well-maintained jeans are generally appropriate in many casual settings, though guests often choose more polished attire for dinner.",
    },
    {
      q: "What's the biggest packing mistake?",
      a: "Overpacking. Because Explora offers a relaxed luxury atmosphere, versatile clothing that can be worn in multiple settings is usually the best approach.",
    },
    {
      q: "Does Explora Journeys provide hair dryers and straighteners?",
      a: "Every suite on Explora Journeys is equipped with a high-performance Dyson Supersonic hair dryer, so there is no need to pack one. However, if you require a hair straightener or styling iron, you should bring your own.",
    },
    {
      q: "What plug adapters or outlets are available in Explora suites?",
      a: "Explora Journeys suites feature multiple power outlets, including standard US (110V) and European (220V) plugs, along with USB-A and USB-C charging ports beside the bed and at the desk, reducing the need for multiple heavy adapters.",
    },
    {
      q: "Are there laundry services available onboard Explora ships?",
      a: "Yes, Explora Journeys offers professional laundry, pressing, and dry-cleaning services for a fee. Additionally, complimentary self-service launderettes (equipped with washers, dryers, ironing boards, and detergent) are available on guest decks.",
    },
    {
      q: "What should I pack for the fitness center and wellness programs?",
      a: "Pack athletic wear, supportive running or training shoes, and activewear for fitness classes (like yoga or pilates). Explora Journeys ships feature state-of-the-art indoor and outdoor ocean wellness fitness centers.",
    },
    {
      q: "Should I pack a rain jacket or umbrella for Explora excursions?",
      a: "It is recommended to bring a lightweight, packable rain jacket or windbreaker. However, Explora Journeys provides large umbrellas in every suite for guests to use during rainy days ashore, so you do not need to pack your own.",
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
const WhatToPackForAnExploraCruise = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [readMore, setReadMore] = useState(false);
  const [activeDestination, setActiveDestination] = useState("mediterranean");
  const currentDestination =
    packingByDestination.find((d) => d.id === activeDestination) ||
    packingByDestination[0];

  const ActiveIcon = currentDestination.icon;

  const images = [HeroImage1, HeroImage4, HeroImage2];

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
          What to Pack for an Explora Cruise | Complete Luxury Cruise Packing
          Guide
        </title>
        <meta name="title" content="What to Pack for an Explora Cruise" />
        <meta
          name="description"
          content="Wondering what to pack for an Explora Journeys cruise? Discover the ultimate packing list, including clothing, footwear, accessories, travel essentials, and destination-specific tips for your luxury voyage."
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
            What to Pack <br /> for an Explora Cruise
          </h1>

          <p>
            Packing for a luxury cruise is a little different from packing for a
            traditional vacation. Explora Journeys combines elegant
            accommodations, destination-focused exploration, wellness
            experiences, and refined dining in an atmosphere that's
            sophisticated without being overly formal.
          </p>

          <p>
            The goal isn't to fill your suitcase with countless outfits—it's to
            pack thoughtfully so you're comfortable whether you're exploring a
            Mediterranean village, relaxing by the pool, or dining in one of the
            ship's exceptional restaurants.
          </p>

          {readMore && (
            <>
              <p>
                This guide walks through every category—daytime clothing,
                evening attire, footwear, swimwear, excursion essentials,
                accessories, and destination-specific tips—so you can pack
                everything you need while avoiding what you don't.
              </p>

              <p>
                According to luxury cruise expert Angela Hughes, the best
                suitcase isn't the fullest one—it's the one packed with
                versatile, polished pieces that work across every setting
                onboard.
              </p>

              <p>
                With more than 40 years in the travel industry, experience
                spanning over 121 countries, and recognition as the 2024 Luxury
                Travel Influencer of the Year by Travel Leaders Network, Angela
                Hughes has become one of the most trusted voices in luxury
                cruising worldwide.
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

      {/* ── UNDERSTAND EXPLORA'S STYLE ──────────────────────────────── */}
      <section
        className="Asc-section Asc-bg-white"
        id="Asc-style"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="Asc-container">
          <div className="Asc-section-header">
            <h2 className="Asc-h2">Understand Explora's Style</h2>
            <div className="Asc-accent-line"></div>
          </div>

          <p className="Asc-body-text" style={{ marginBottom: "20px" }}>
            Explora Journeys embraces effortless luxury. Guests generally dress
            in a way that feels polished, comfortable, and appropriate for the
            setting. The atmosphere is refined but never overly formal.
          </p>

          <div className="Asc-table-wrapper">
            <table className="Asc-fleet-table">
              <thead>
                <tr>
                  <th>Time of Day</th>
                  <th>What to Expect</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>Daytime</strong>
                  </td>
                  <td>Resort casual, relaxed and breathable</td>
                </tr>
                <tr>
                  <td>
                    <strong>Evenings</strong>
                  </td>
                  <td>Smart casual, polished but comfortable</td>
                </tr>
                <tr>
                  <td>
                    <strong>Special Dinners</strong>
                  </td>
                  <td>Elegant attire, no tuxedos required</td>
                </tr>
                <tr>
                  <td>
                    <strong>Excursions</strong>
                  </td>
                  <td>Comfortable clothing suited to the destination</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── DAYTIME CLOTHING ─────────────────────────────────────────── */}
      <section className="adg-c-section adg-c-bg-white" id="adg-daytime">
        <div className="adg-c-container">
          <div className="adg-c-section-header">
            <h2 className="adg-c-h2">Daytime Clothing</h2>
            <div className="adg-c-accent-line"></div>
          </div>

          <div className="adg-c-overview-layout">
            <div className="adg-c-overview-icons">
              {[
                "Lightweight Shirts",
                "Polo Shirts or Blouses",
                "Shorts",
                "Casual Dresses",
                "Linen Pants",
                "Comfortable T-Shirts",
                "Swimwear & Cover-Up",
                "Comfortable Walking Shoes",
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
                    Pack versatile pieces that can be mixed and matched
                    throughout your cruise to keep daytime packing simple.
                  </p>
                </div>
              </div>

              <div className="adg-c-overview-image-wrap">
                <img
                  src={ExploraPool}
                  alt="Resort casual daytime attire aboard an Explora Journeys ship"
                  className="adg-c-overview-img"
                />
                <div className="adg-c-overview-img-overlay">
                  <span className="adg-c-overview-img-label">
                    Relaxed by Day
                  </span>
                </div>
              </div>
            </div>
          </div>

          <p
            className="adg-c-body-text"
            style={{ marginTop: "2rem", textAlign: "center" }}
          >
            Most days onboard are relaxed, so breathable fabrics and comfortable
            layers work well for warm-weather destinations, pool days, and
            casual sightseeing alike.
          </p>
        </div>
      </section>

      {/* ══ EVENING ATTIRE ═══════════════════════════════════════════ */}
      <section className="adg-c-section adg-c-bg-soft" id="evening-attire">
        <div className="adg-c-container">
          <div className="adg-c-section-header">
            <span className="adg-c-eyebrow">Evening Style</span>

            <h2 className="adg-c-h2">
              Evening Attire <br /> for Onboard Dining
            </h2>

            <div className="adg-c-accent-line"></div>

            <p className="Asc-section-intro">
              Evenings on Explora feel elegant without requiring formalwear
              every night. Most guests prefer polished, smart-casual attire that
              is both comfortable and refined.
            </p>
          </div>

          <div className="adg-c-venues-grid1">
            {[
              {
                id: 1,
                eyebrow: "For Men",
                name: "Smart Casual Attire",
                highlight: "Comfortable Yet Refined",
                items: [
                  "Collared Shirts",
                  "Chinos",
                  "Dress Trousers",
                  "Smart Loafers",
                  "Lightweight Blazer (Optional)",
                ],
                callout:
                  "A few versatile pieces make it easy to look polished for dinner throughout the voyage without packing formalwear.",
              },
              {
                id: 2,
                eyebrow: "For Women",
                name: "Elegant Evening Wear",
                highlight: "Stylish Without Being Formal",
                items: [
                  "Cocktail Dresses",
                  "Stylish Separates",
                  "Maxi Dresses",
                  "Elegant Jumpsuits",
                  "Dressy Sandals or Heels",
                ],
                callout:
                  "While tuxedos and evening gowns are generally unnecessary, many guests enjoy dressing up for dinner in elegant, sophisticated outfits.",
              },
            ].map((venue, i) => (
              <div
                key={venue.id}
                className={`adg-c-venue-card adg-c-venue-${(i % 5) + 1}`}
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

      {/* ── FOOTWEAR & SWIMWEAR (TABBED BY DESTINATION) ─────────────── */}
      <section className="luc-destinations-section" id="luc-destinations">
        <div className="luc-destinations-container">
          <div className="luc-destinations-header">
            <h2 className="luc-destinations-title">
              Destination-Specific Packing
            </h2>

            <div className="adg-c-accent-line"></div>

            <p className="luc-destinations-intro">
              What you pack should shift slightly depending on where you're
              sailing. Here's how each region compares.
            </p>
          </div>

          <div className="luc-dest-layout">
            <nav className="luc-dest-nav">
              {packingByDestination.map((item) => {
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

      {/* ── FOOTWEAR & SWIMWEAR ──────────────────────────────────────── */}
      <section
        className="ugt-components-section"
        id="footwear-and-swimwear"
        style={{ backgroundColor: "var(--bg-white)" }}
      >
        <div className="ugt-components-container">
          <div className="ugt-components-header">
            <h2 className="ugt-components-title">Footwear & Swimwear</h2>

            <div className="adg-c-accent-line"></div>
          </div>

          <div className="ugt-components-list">
            <div className="ugt-component-row">
              <div className="ugt-component-image-wrapper">
                <div className="ugt-component-image-container">
                  <img
                    src={LuxuryOceanfrontSuites}
                    alt="Comfortable walking shoes and swimwear packed for a luxury cruise"
                    className="ugt-component-image"
                  />
                </div>
              </div>

              <div className="ugt-component-content">
                <p className="ugt-component-text">
                  Comfortable shoes are essential—you'll likely spend plenty of
                  time exploring ports, so comfortable walking shoes are one of
                  the most important items to pack. Explora's pool decks and
                  wellness areas are perfect for relaxing between destinations,
                  so swimwear deserves its own spot in the suitcase too.
                </p>

                <div className="ugt-questions-box">
                  <span className="ugt-questions-title">
                    Be sure to include:
                  </span>

                  <ul className="ugt-questions-list">
                    {[
                      "Walking Shoes",
                      "Casual Sneakers",
                      "Sandals",
                      "Dress Shoes",
                      "Pool Footwear",
                      "Swimsuits & Cover-Up",
                      "Sunglasses & Sun Hat",
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
                  Two to three pairs of shoes—one walking pair, one casual pair,
                  and one dress pair—are usually enough to cover an entire
                  voyage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SHORE EXCURSION ESSENTIALS ──────────────────────────────── */}
      <section className="Lfsg-section Lfsg-bg-dark" id="Lfsg-excursions">
        <div className="Lfsg-container">
          <div className="Lfsg-section-header">
            <h2 className="Lfsg-h2-white">Clothing for Shore Excursions</h2>
            <div className="Lfsg-accent-line-white" />
          </div>

          <div className="Lfsg-mistakes-grid">
            {[
              {
                title: "Comfortable Walking Clothes",
                desc: "Ideal for city tours and sightseeing days ashore.",
              },
              {
                title: "Light Jacket",
                desc: "Useful for cooler mornings or evenings on excursion days.",
              },
              {
                title: "Rain Jacket",
                desc: "Helpful for destinations where weather can change quickly.",
              },
              {
                title: "Day Bag & Water Bottle",
                desc: "Perfect for carrying sunscreen, water, and personal items.",
              },
            ].map((item, i) => (
              <div key={i} className="Lfsg-mistake-card">
                <div className="Lfsg-mistake-number">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h4 className="Lfsg-mistake-title">{item.title}</h4>
                <p className="Lfsg-mistake-desc">{item.desc}</p>
              </div>
            ))}
          </div>

          <p
            className="Lfsg-mistake-desc"
            style={{ textAlign: "center", marginTop: "2rem" }}
          >
            Excursion clothing depends on your itinerary, but a comfortable base
            layer paired with a packable jacket covers most ports of call.
          </p>
        </div>
      </section>

      {/* ── ACCESSORIES & TOILETRIES ────────────────────────────────── */}
      <section className="dmg-info-section dmg-bg-soft" id="dmg-accessories">
        <div className="dmg-info-container">
          <div className="dmg-info-grid">
            <div className="dmg-info-content">
              <h2 className="dmg-info-title">Accessories & Toiletries</h2>
              <div className="dmg-info-accent"></div>

              <p className="dmg-info-lead">
                Although Explora provides premium bath amenities, many travelers
                still bring a few personal favorites. Choose accessories that
                complement multiple outfits to keep your suitcase light.
              </p>

              <div className="dmg-info-features dmg-info-features-scrollable">
                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Sunglasses & Wide-Brim Hat
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Pair well with both daytime and resort-casual evening
                      looks.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Jewelry & Evening Clutch
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Keep jewelry simple and pack one elegant clutch for
                      dinner.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Personal Toiletries
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Toothbrush, skincare, makeup, and prescription medications
                      travel best in your carry-on.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Travel Umbrella & Scarf
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Lightweight options that add versatility without taking up
                      much suitcase space.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="dmg-info-media">
              <div className="dmg-media-wrapper">
                <img
                  src={Exploradining}
                  alt="Accessories and toiletries packed for an Explora Journeys cruise"
                  className="dmg-media-img"
                  style={{ height: "72vh" }}
                />
                <div className="dmg-media-overlay"></div>

                <div className="dmg-media-badge">
                  <span>Pack Light, Pack Smart</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ TECHNOLOGY ESSENTIALS ═══════════════════════════════════════════ */}
      <section className="ugt-advantage-section">
        <div className="ugt-container">
          <div className="ugt-advantage-header">
            <span className="ugt-advantage-eyebrow">Cruise Packing Guide</span>

            <h2 className="ugt-advantage-title">Technology Essentials</h2>

            <div className="Asc-accent-line"></div>

            <p className="ugt-advantage-intro">
              Bring the technology you need to stay connected, capture memories,
              and enjoy a smooth travel experience throughout your cruise.
            </p>
          </div>

          <div className="ugt-advantage-grid">
            {[
              {
                icon: Smartphone,
                title: "Smartphone",
                desc: "Essential for communication, travel apps, digital boarding information, and capturing photos during your trip.",
              },
              {
                icon: BatteryCharging,
                title: "Charger",
                desc: "Pack all necessary charging cables and adapters to keep your devices powered throughout the voyage.",
              },
              {
                icon: Battery,
                title: "Power Bank",
                desc: "A portable charger is useful during shore excursions and long sightseeing days away from the ship.",
              },
              {
                icon: Camera,
                title: "Camera",
                desc: "Bring a dedicated camera if you want high-quality photos of destinations, wildlife, and unforgettable moments.",
              },
              {
                icon: Laptop,
                title: "Laptop or Tablet",
                desc: "Optional for travelers who plan to work remotely, edit photos, or stream content while onboard.",
              },
              {
                icon: Headphones,
                title: "Headphones",
                desc: "Perfect for entertainment, video calls, relaxing with music, or enjoying quiet time during your journey.",
              },
            ].map((card, i) => {
              const Icon = card.icon;

              return (
                <div key={i} className="ugt-advantage-card">
                  <div className="ugt-icon-box">
                    <Icon size={28} strokeWidth={1.5} />
                  </div>

                  <h4 className="ugt-card-title">{card.title}</h4>

                  <p className="ugt-card-desc">{card.desc}</p>
                </div>
              );
            })}
          </div>

          <p
            style={{
              marginTop: "32px",
              textAlign: "center",
              maxWidth: "760px",
              marginInline: "auto",
            }}
          >
            Explora offers Wi-Fi, making it easy to stay connected throughout
            your voyage if you choose.
          </p>
        </div>
      </section>

      {/* TRAVEL DOCUMENTS & WELLNESS ITEMS */}
      <section className="azs-entertainment-section" id="travel-documents">
        <div className="azs-container">
          <div className="azs-section-header">
            <h2 className="azs-section-title">Travel Documents</h2>
            <div className="azs-section-accent"></div>
            <p className="azs-section-subtitle">
              Keep your essential travel documents and wellness items organized
              so you're fully prepared for your cruise vacation.
            </p>
          </div>

          <div className="azs-entertainment-grid">
            {/* Travel Documents Card */}
            <div className="azs-entertainment-card azs-azamara-ent">
              <div className="azs-ent-header">
                <div className="azs-ent-icon-circle">
                  <Check size={24} className="azs-ent-icon" />
                </div>
                <h3 className="azs-ent-title">Travel Documents</h3>
              </div>

              <p className="azs-ent-intro">
                Always keep these important items with you during your journey.
              </p>

              <div className="azs-ent-body">
                <h4 className="azs-ent-group-title">Carry with you:</h4>

                <ul className="azs-ent-list">
                  {[
                    "Passport",
                    "Cruise Documents",
                    "Boarding Information",
                    "Travel Insurance Details",
                    "Credit Card",
                    "Government-Issued Identification",
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
                    Keep important travel documents in your carry-on rather than
                    checked luggage.
                  </p>
                </div>
              </div>
            </div>

            {/* Wellness Items Card */}
            <div className="azs-entertainment-card azs-seabourn-ent">
              <div className="azs-ent-header">
                <div className="azs-ent-icon-circle">
                  <Star size={24} className="azs-ent-icon" />
                </div>
                <h3 className="azs-ent-title">Wellness Items</h3>
              </div>

              <p className="azs-ent-intro">
                If you enjoy staying active or relaxing during your cruise,
                consider packing these extras.
              </p>

              <div className="azs-ent-body">
                <h4 className="azs-ent-group-title">Recommended items:</h4>

                <ul className="azs-ent-list">
                  {[
                    "Workout Clothes",
                    "Athletic Shoes",
                    "Reusable Water Bottle",
                    "Yoga Clothing",
                    "Swim Goggles",
                  ].map((item, idx) => (
                    <li key={idx} className="azs-ent-list-item">
                      <div className="azs-ent-list-icon-wrapper">
                        <Star size={14} className="azs-ent-list-icon" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="azs-ent-divider"></div>

                <div className="azs-ent-highlight-box azs-seabourn-ent-highlight">
                  <p className="azs-ent-highlight-text">
                    The ship's wellness facilities make it easy to maintain an
                    active and relaxing lifestyle throughout your voyage.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WORK WITH A TRAVEL ADVISOR ──────────────────────────────── */}
      <section className="adg-section" id="adg-advisor">
        <div className="adg-container">
          <div className="adg-section-header" style={{ marginBottom: "60px" }}>
            <h2 className="adg-h2">Packing Tips for Luxury Cruising</h2>
            <div className="adg-accent-line"></div>
          </div>
          <div
            className="adg-split-layout"
            style={{ alignItems: "flex-start" }}
          >
            <div className="adg-content-card-side">
              <img
                src={ExploraSuite}
                alt="Suitcase packed neatly for an Explora Journeys luxury cruise"
                className="adg-side-image"
                style={{ height: "28vh" }}
              />
              <div className="adg-info-card">
                <div className="adg-card-meta">
                  <Award size={28} />
                  <span className="adg-meta-label">Pack Smarter</span>
                </div>
                <p className="adg-card-lead">
                  Many first-time luxury cruisers overpack. Packing lighter
                  often makes the journey more enjoyable.
                </p>
                <div className="adg-card-divider"></div>
                <p className="adg-card-subtext">
                  A few thoughtful habits go a long way toward a stress-free
                  suitcase—and a little extra room for souvenirs.
                </p>
              </div>
            </div>
            <div className="adg-list-side">
              {[
                { title: "Choose Neutral Colors", icon: <Compass size={20} /> },
                { title: "Pack in Layers", icon: <Anchor size={20} /> },
                { title: "Use Packing Cubes", icon: <Sparkles size={20} /> },
                {
                  title: "Leave Room for Souvenirs",
                  icon: <Briefcase size={20} />,
                },
                {
                  title: "Carry Essentials Onboard",
                  icon: <MapPin size={20} />,
                },
                {
                  title: "Skip Bulky Hair Dryers",
                  icon: <Ship size={20} />,
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

      {/* WHAT YOU DON'T NEED TO PACK */}
      <section
        className="dmg-info-section dmg-bg-white"
        id="what-you-dont-need"
      >
        <div className="dmg-info-container">
          <div className="dmg-info-grid">
            {/* Left Side Image */}
            <div className="dmg-info-media">
              <div className="dmg-media-wrapper">
                <img
                  src={ExploraPool2}
                  alt="Lightly packed suitcase for a luxury Explora Journeys cruise"
                  className="dmg-media-img"
                  style={{ height: "64vh" }}
                />
                <div className="dmg-media-overlay"></div>

                <div className="dmg-media-badge">
                  <span>Pack Less, Enjoy More</span>
                </div>
              </div>
            </div>

            {/* Right Side Content */}
            <div className="dmg-info-content">
              <h2 className="dmg-info-title">What You Don't Need to Pack</h2>
              <div className="dmg-info-accent"></div>

              <p className="dmg-info-lead">
                Many first-time luxury cruisers overpack. Knowing what to leave
                behind is just as important as knowing what to bring.
              </p>

              <div className="dmg-info-features dmg-info-features-scrollable">
                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Minus size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Formal Tuxedos & Gowns
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Generally unnecessary for Explora's smart-casual evening
                      atmosphere.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Minus size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Excessive Shoes & Large Beach Towels
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Pool towels are provided onboard, and a few versatile
                      shoes go a long way.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Minus size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">Hair Dryers</h3>
                    <p className="dmg-info-feature-desc">
                      Hair dryers are already provided in suites.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Minus size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Heavy Winter Clothing
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Unnecessary for warm-weather itineraries—save the suitcase
                      space.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SAMPLE PACKING CHECKLIST */}
      <section className="adg-section" id="sample-packing-checklist">
        <div className="adg-container">
          {/* HEADER */}
          <div className="adg-header">
            <h2 className="adg-h2">
              Sample <br /> Packing Checklist
            </h2>

            <div className="adg-accent-line"></div>

            <p className="adg-intro">
              Use this checklist as a starting point to help you pack for a
              comfortable and stress-free cruise vacation.
            </p>
          </div>

          {/* CARDS GRID */}
          <div className="adgs-grid">
            {[
              {
                key: "clothing",
                accent: "adg-accent-spring",
                title: "Clothing",
                items: [
                  "Casual Daytime Outfits",
                  "Evening Attire",
                  "Swimwear",
                  "Light Jacket",
                  "Sleepwear",
                  "Undergarments",
                ],
              },
              {
                key: "shoes",
                accent: "adg-accent-summer",
                title: "Shoes",
                items: [
                  "Walking Shoes",
                  "Sandals",
                  "Dress Shoes",
                  "Pool Footwear",
                ],
              },
              {
                key: "accessories",
                accent: "adg-accent-fall",
                title: "Accessories",
                items: ["Sunglasses", "Hat", "Jewelry", "Small Day Bag"],
              },
              {
                key: "documents",
                accent: "adg-accent-spring",
                title: "Documents",
                items: [
                  "Passport",
                  "Cruise Confirmation",
                  "Insurance Information",
                  "Credit Cards",
                ],
              },
              {
                key: "electronics",
                accent: "adg-accent-summer",
                title: "Electronics",
                items: ["Phone", "Chargers", "Camera", "Power Bank"],
              },
              {
                key: "toiletries",
                accent: "adg-accent-fall",
                title: "Toiletries",
                items: [
                  "Prescription Medications",
                  "Personal Care Items",
                  "Sunscreen",
                  "Lip Balm",
                ],
              },
            ].map((item) => (
              <div key={item.key} className={`adg-card ${item.accent}`}>
                <div className="adg-card-body" style={{ paddingTop: "24px" }}>
                  <h3 className="adg-card-title" style={{ marginTop: "0" }}>
                    {item.title}
                  </h3>

                  <ul className="adg-card-list">
                    {item.items.map((point, idx) => (
                      <li key={idx} className="adg-card-list-item">
                        <span className="adg-card-list-dot"></span>
                        <span className="adg-card-list-text">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="adg-card-bar"></div>
              </div>
            ))}
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
                        "Specialist in luxury cruises, expeditions, safaris, and premium travel experiences",
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
                  help travelers pack smarter for every Explora Journeys
                  voyage—matching wardrobe choices to destination, season, and
                  onboard style.
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
              Everything you need to know about packing for your Explora
              Journeys voyage.
            </p>
          </div>
          <FAQ />
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────────── */}
      <section className="Asc-help-section">
        <div className="Asc-help-bg-wrap">
          <img
            src={ExploraCta}
            alt="Explora Journeys luxury cruise"
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
                  Ready to Pack <br /> for Your Explora Journey?
                </h2>
                <div className="Asc-help-accent"></div>
              </div>

              <div className="Asc-help-grid">
                <div className="Asc-help-info">
                  <p className="Asc-help-intro">
                    Connect with Angela Hughes and the expert team at Trips
                    &amp; Ships Luxury Travel for personalized guidance on your
                    Explora Journeys itinerary, suite, and packing plan.
                  </p>

                  <p className="Asc-help-intro">
                    From destination-specific wardrobe advice to onboard dress
                    codes, expert support helps travelers arrive prepared for
                    every moment of the voyage.
                  </p>

                  <p className="Asc-help-intro">
                    Whether you're planning a milestone celebration, a holiday
                    sailing, or your very first Explora voyage, personalized
                    guidance makes all the difference.
                  </p>

                  <div className="Asc-help-btn-container">
                    <Link
                      to="/contact"
                      className="Asc-help-cta-btn"
                      style={{ textDecoration: "none" }}
                    >
                      Start Planning Your Explora Journey
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
                      "Destination-specific packing advice",
                      "Exclusive luxury travel benefits",
                      "Suite and itinerary recommendations",
                      "Seasonal timing and promotion tracking",
                      "Luxury cruise planning expertise",
                      "Tailored travel experiences worldwide",
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
                    discerning travelers prepare for highly personalized Explora
                    Journeys experiences worldwide.
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

export default WhatToPackForAnExploraCruise;
