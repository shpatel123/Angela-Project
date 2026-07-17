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
  Compass,
  MapPinned,
  Home,
  Plane,
  BadgePercent,
  ShieldCheck,
  Anchor,
  BookOpen,
  Utensils,
  Bed,
  HeartHandshake,
} from "lucide-react";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela3.jpeg";

import ExploraPool from "../../assets/CaribbeanCruisesExploraJourneys/explora-beaches.jpg";
import MediterraneanImage from "../../assets/WhichMediterraneanItineraryIsBest/Italian-Coast.jpg";
import CaribbeanImage from "../../assets/CaribbeanCruisesExploraJourneys/Adventure.jpg";
import JapanImage from "../../assets/JapanCruisesExploraJourneys/angela-hughes-kyoto-gion-geisha-street-pagoda-japan-travel-expert.jpg";
import ExploraSuite from "../../assets/IsExploraGoodForFamilies/explora-journeys-retreat-residence-luxury-suite-living-room.webp";
import ExploraDiningImage from "../../assets/WhichExploraShipChoose/EXPLORA-III-IV-Anthology.jpg";
import ExploraBookingImage from "../../assets/HowAdvanceShouldBookExplora/explora-ship.jpg";
import ExploraEpicShip from "../../assets/HowAdvanceShouldBookExplora/ExploraCruise3.webp";
import ExploraFleetImage from "../../assets/WhichExploraShipChoose/Explora-Journeys2.webp";
import ExploraShipPanama from "../../assets/WhichExploraShipChoose/EXPLORA-III-PANAMA-CANAL.jpg";
import ExploraShipMiami from "../../assets/HowAdvanceShouldBookExplora/EXPLORA-II-sailing-in-Miami.jpg";
import ExploraShipExterior from "../../assets/WhichExploraShipChoose/Explora-Journeys-1.webp";

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
        "https://tripsandships.com/explora-journeys-resource-center/#webpage",
      name: "Explora Journeys Resource Center",
      url: "https://tripsandships.com/explora-journeys-resource-center",
      description:
        "Explore our complete Explora Journeys Resource Center featuring cruise reviews, ships, suites, destinations, itineraries, dining, wellness, costs, planning guides, FAQs, and expert luxury cruise advice.",
    },
    {
      "@type": "CollectionPage",
      "@id":
        "https://tripsandships.com/explora-journeys-resource-center/#collectionpage",
      name: "Explora Journeys Resource Center",
      url: "https://tripsandships.com/explora-journeys-resource-center",
      description:
        "A complete library of Explora Journeys guides covering ships, suites, dining, wellness, destinations, itineraries, and booking advice.",
      isPartOf: {
        "@id": "https://tripsandships.com/#organization",
      },
    },
    {
      "@type": "Article",
      "@id":
        "https://tripsandships.com/explora-journeys-resource-center/#article",
      headline: "Explora Journeys Resource Center",
      description:
        "A comprehensive hub of expert guides, reviews, destination articles, planning resources, and booking advice for Explora Journeys, one of the world's newest luxury cruise lines.",
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
        "https://tripsandships.com/explora-journeys-resource-center/#breadcrumb",
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
          name: "Explora Journeys Resource Center",
          item: "https://tripsandships.com/explora-journeys-resource-center",
        },
      ],
    },
    {
      "@type": "ItemList",
      "@id":
        "https://tripsandships.com/explora-journeys-resource-center/#itemlist",
      name: "Explora Journeys Resource Center Categories",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Getting Started" },
        { "@type": "ListItem", position: 2, name: "Explore the Fleet" },
        { "@type": "ListItem", position: 3, name: "Suites & Accommodations" },
        {
          "@type": "ListItem",
          position: 4,
          name: "Dining & Culinary Experiences",
        },
        { "@type": "ListItem", position: 5, name: "Wellness & Life Onboard" },
        { "@type": "ListItem", position: 6, name: "Destination Guides" },
        { "@type": "ListItem", position: 7, name: "Cruise Planning Resources" },
        {
          "@type": "ListItem",
          position: 8,
          name: "Who Is Explora Journeys Best For?",
        },
        { "@type": "ListItem", position: 9, name: "Booking & Value Guides" },
      ],
    },
    {
      "@type": "Service",
      "@id":
        "https://tripsandships.com/explora-journeys-resource-center/#service",
      serviceType: "Luxury Cruise Vacation Planning & Booking Support",
      provider: {
        "@type": "TravelAgency",
        name: "Trips & Ships Luxury Travel",
      },
      areaServed: "Worldwide",
      description:
        "Personalized planning support across every stage of an Explora Journeys cruise, including ship and suite selection, destinations, itineraries, and booking strategy.",
    },
    {
      "@type": "FAQPage",
      "@id": "https://tripsandships.com/explora-journeys-resource-center/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is the Explora Journeys Resource Center?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It's a comprehensive collection of expert guides, reviews, destination articles, planning resources, and travel advice designed to help you research and book an Explora Journeys cruise.",
          },
        },
        {
          "@type": "Question",
          name: "Who should use this resource center?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Anyone considering an Explora Journeys cruise—from first-time luxury cruisers to experienced travelers looking for detailed information.",
          },
        },
        {
          "@type": "Question",
          name: "What topics are covered?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The resource center includes ship reviews, suite guides, destinations, itineraries, dining, wellness, entertainment, planning tips, and booking advice.",
          },
        },
        {
          "@type": "Question",
          name: "Are the destination guides updated regularly?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. New itineraries, ships, and travel information are added as Explora Journeys expands its global offerings.",
          },
        },
        {
          "@type": "Question",
          name: "Can I compare different Explora ships?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. Fleet guides explain the similarities and differences between Explora I, II, III, and IV.",
          },
        },
        {
          "@type": "Question",
          name: "Where should I start if I'm new to Explora?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Begin with 'Why Choose Explora Journeys?', 'What Makes Explora Journeys Different?', and 'Planning Your First Explora Journey.'",
          },
        },
        {
          "@type": "Question",
          name: "Does the resource center help with choosing destinations?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Dedicated destination guides cover the Mediterranean, Caribbean, Alaska, Asia, Japan, Northern Europe, Iceland & Greenland, and more.",
          },
        },
        {
          "@type": "Question",
          name: "Can I learn about dining before I cruise?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Our dining guides explain included restaurants, specialty venues, and onboard culinary experiences.",
          },
        },
        {
          "@type": "Question",
          name: "Does the resource center include booking advice?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. You'll find expert tips on booking timelines, choosing suites, travel advisors, promotions, and maximizing value.",
          },
        },
        {
          "@type": "Question",
          name: "Should I work with a luxury travel advisor?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Many travelers benefit from personalized recommendations, exclusive offers, and expert planning provided by an experienced luxury travel advisor.",
          },
        },
        {
          "@type": "Question",
          name: "How can the Resource Center help me get the best value on my cruise?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Our Booking & Value guides explain how booking 12–18 months in advance, leveraging promotional fares, and using a luxury travel advisor's exclusive perks can save you money and secure better suite options.",
          },
        },
        {
          "@type": "Question",
          name: "Are there comparison guides for Explora Journeys versus other cruise lines?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. The resource center features detailed comparison guides comparing Explora Journeys with other premium and luxury cruise lines like Seabourn, Viking, and Regent Seven Seas Cruises.",
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
      q: "What is the Explora Journeys Resource Center?",
      a: "It's a comprehensive collection of expert guides, reviews, destination articles, planning resources, and travel advice designed to help you research and book an Explora Journeys cruise.",
    },
    {
      q: "Who should use this resource center?",
      a: "Anyone considering an Explora Journeys cruise—from first-time luxury cruisers to experienced travelers looking for detailed information.",
    },
    {
      q: "What topics are covered?",
      a: "The resource center includes ship reviews, suite guides, destinations, itineraries, dining, wellness, entertainment, planning tips, and booking advice.",
    },
    {
      q: "Are the destination guides updated regularly?",
      a: "Yes. New itineraries, ships, and travel information are added as Explora Journeys expands its global offerings.",
    },
    {
      q: "Can I compare different Explora ships?",
      a: "Absolutely. Fleet guides explain the similarities and differences between Explora I, II, III, and IV.",
    },
    {
      q: "Where should I start if I'm new to Explora?",
      a: "Begin with 'Why Choose Explora Journeys?', 'What Makes Explora Journeys Different?', and 'Planning Your First Explora Journey.'",
    },
    {
      q: "Does the resource center help with choosing destinations?",
      a: "Yes. Dedicated destination guides cover the Mediterranean, Caribbean, Alaska, Asia, Japan, Northern Europe, Iceland & Greenland, and more.",
    },
    {
      q: "Can I learn about dining before I cruise?",
      a: "Yes. Our dining guides explain included restaurants, specialty venues, and onboard culinary experiences.",
    },
    {
      q: "Does the resource center include booking advice?",
      a: "Yes. You'll find expert tips on booking timelines, choosing suites, travel advisors, promotions, and maximizing value.",
    },
    {
      q: "Should I work with a luxury travel advisor?",
      a: "Many travelers benefit from personalized recommendations, exclusive offers, and expert planning provided by an experienced luxury travel advisor.",
    },
    {
      q: "How can the Resource Center help me get the best value on my cruise?",
      a: "Our Booking & Value guides explain how booking 12–18 months in advance, leveraging promotional fares, and using a luxury travel advisor's exclusive perks can save you money and secure better suite options.",
    },
    {
      q: "Are there comparison guides for Explora Journeys versus other cruise lines?",
      a: "Yes. The resource center features detailed comparison guides comparing Explora Journeys with other premium and luxury cruise lines like Seabourn, Viking, and Regent Seven Seas Cruises.",
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



const regionalGuides = [
  {
    id: "europe",
    badge: "Europe",
    title: "Europe",
    icon: Anchor,
    image: MediterraneanImage,
    desc: "Explora Journeys sails to many of the world's most remarkable destinations in Europe.",
    guides: [
      { name: "Mediterranean Cruises on Explora Journeys", path: "/mediterranean-cruises-on-explora-journeys" },
      { name: "Greece & Greek Isles Cruises on Explora Journeys", path: "/greece-greek-isles-cruises-on-explora-journeys" },
      { name: "Northern Europe Cruises on Explora Journeys", path: "/northern-europe-cruises-on-explora-journeys" },
      { name: "Iceland & Greenland Cruises on Explora Journeys", path: "/iceland-greenland-cruises-on-explora-journeys" },
    ],
  },
  {
    id: "americas",
    badge: "Americas",
    title: "Americas",
    icon: Compass,
    image: CaribbeanImage,
    desc: "Explora Journeys sails to many of the world's most remarkable destinations in the Americas.",
    guides: [
      { name: "Caribbean Cruises on Explora Journeys", path: "/caribbean-cruises-on-explora-journeys" },
      { name: "Alaska Cruises on Explora Journeys", path: "/alaska-cruises-on-explora-journeys" },
    ],
  },
  {
    id: "asia",
    badge: "Asia",
    title: "Asia",
    icon: MapPinned,
    image: JapanImage,
    desc: "Explora Journeys sails to many of the world's most remarkable destinations in Asia.",
    guides: [
      { name: "Japan Cruises on Explora Journeys", path: "/japan-cruises-on-explora-journeys" },
      { name: "Asia Cruises on Explora Journeys", path: "/asia-cruises-on-explora-journeys" },
    ],
  },
];

/* ── Main Component ──────────────────────────────────────────────── */
const ExploraJourneysResourceCenter = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [readMore, setReadMore] = useState(false);
  const [activeRegion, setActiveRegion] = useState("europe");
  const currentRegion = regionalGuides.find((r) => r.id === activeRegion) || regionalGuides[0];
  const ActiveIcon = currentRegion.icon;

  const images = [ExploraShipPanama, ExploraShipMiami, ExploraShipExterior];

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
          Explora Journeys Resource Center | Complete Luxury Cruise Planning Hub
        </title>
        <meta name="title" content="Explora Journeys Resource Center" />
        <meta
          name="description"
          content="Explore our complete Explora Journeys Resource Center featuring cruise reviews, ships, suites, destinations, itineraries, dining, wellness, costs, planning guides, FAQs, and expert luxury cruise advice."
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
          <h1>Explora Journeys Resource Center</h1>

          <p>
            Planning a luxury cruise is about more than choosing a ship—it's
            about finding the right destination, selecting the perfect suite,
            understanding what's included, and making informed decisions before
            you book.
          </p>

          <p>
            Welcome to your comprehensive guide to one of the world's newest
            luxury cruise lines. Whether you're researching your first Explora
            voyage or comparing itineraries for your next adventure, this hub
            brings together expert advice, detailed destination guides, ship
            reviews, planning resources, and practical travel tips—all in one
            place.
          </p>

          {readMore && (
            <>
              <p>
                Created by the luxury travel experts at Trips &amp; Ships Luxury
                Travel, this resource center is designed to help you plan with
                confidence and get the most from your Explora Journeys
                experience.
              </p>

              <p>
                Browse by category below, or jump straight to the guide you need
                — ships, suites, dining, wellness, destinations, planning, and
                booking advice are all covered in depth.
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

      {/* ── START HERE: NEW TO EXPLORA JOURNEYS? ─────────────────────────── */}
      <section
        className="ugt-components-section"
        id="start-here"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="ugt-components-container">
          <div className="ugt-components-header">
            <h2 className="ugt-components-title">
              Start Here: New to Explora Journeys?
            </h2>

            <div className="adg-c-accent-line"></div>
          </div>

          <div className="ugt-components-list">
            <div className="ugt-component-row">
              <div className="ugt-component-image-wrapper">
                <div className="ugt-component-image-container">
                  <img
                    src={ExploraPool}
                    alt="Luxury experience aboard Explora Journeys"
                    className="ugt-component-image"
                  />
                </div>
              </div>

              <div className="ugt-component-content">
                <p className="ugt-component-text">
                  If you're just beginning your research, these guides provide
                  an excellent introduction to Explora Journeys. Learn about the
                  cruise line's philosophy, onboard experience, and discover
                  whether it's the right fit for your luxury travel style.
                </p>

                <div className="ugt-questions-box">
                  <span className="ugt-questions-title">Essential Reading</span>

                  <ul className="ugt-questions-list">
                    {[
                      "Explora Journeys Review",
                      "Why Choose Explora Journeys?",
                      "What Makes Explora Journeys Different?",
                      "Is Explora Journeys Luxury?",
                      "Planning Your First Explora Journey",
                      "Who Should Sail Explora Journeys?",
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
                  These articles provide a solid foundation, helping you
                  understand Explora Journeys' unique approach to luxury
                  cruising before you explore destinations, ships, suites, and
                  booking options.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── EXPLORE THE FLEET ──────────────────────────────── */}
      <section className="afc-section afc-bg-white" id="explore-the-fleet">
        <div className="afc-container">
          <div className="afc-section-header">
            <h2 className="afc-h2">Explore the Fleet</h2>
            <div className="afc-accent-line"></div>
          </div>

          <div className="afc-split-layout">
            <div className="afc-content-side">
              <div className="afc-insight-card">
                <p className="afc-lead-text">
                  <strong>
                    Every Explora ship shares the brand's commitment to
                    contemporary luxury while offering its own unique
                    itineraries, design details, and launch timeline.
                  </strong>
                </p>

                <div className="afc-why-box">
                  <span className="afc-why-title">Fleet Guides</span>

                  <p className="afc-why-text">
                    Explore detailed guides covering every ship in the fleet to
                    help you compare features, accommodations, dining, and
                    future itineraries before choosing your voyage.
                  </p>
                </div>
              </div>

              <div className="afc-recommendations-wrapper">
                <h3 className="afc-sub-title">Essential Fleet Resources</h3>

                <div className="afc-rec-grid">
                  {[
                    "Explora I Review",
                    "Explora II Review",
                    "Explora III Guide",
                    "Explora IV Guide",
                    "Which Explora Ship Should You Choose?",
                  ].map((item, i) => (
                    <div key={i} className="afc-rec-card">
                      <div className="afc-rec-icon">
                        <Check size={18} />
                      </div>
                      <span className="afc-rec-label">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="afc-media-side">
              <div className="afc-image-wrapper" style={{ aspectRatio: "4/4" }}>
                <img
                  src={ExploraFleetImage}
                  alt="Explora Journeys luxury cruise ship"
                  className="afc-showcase-image"
                />
              </div>

              <div className="afc-strategy-box" style={{ height: "250px" }}>
                <p className="afc-strategy-lead">Learn About:</p>

                <div className="afc-strategy-tags">
                  {[
                    "Ship features",
                    "Public spaces",
                    "Dining venues",
                    "Entertainment",
                    "Wellness facilities",
                    "Design philosophy",
                    "Future deployments",
                  ].map((tag, idx) => (
                    <span key={idx} className="afc-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SUITES & ACCOMMODATIONS */}
      <section className="azs-dining-section" id="azs-suites-accommodations">
        <div className="azs-container">
          <div className="azs-section-header">
            <h2 className="azs-section-title">Suites &amp; Accommodations</h2>

            <div className="azs-section-accent"></div>

            <p className="azs-section-subtitle">
              One of Explora Journeys' defining features is that every guest
              stays in a spacious oceanfront suite. Our suite resources help you
              compare every accommodation category to find the best fit for your
              travel style and budget.
            </p>
          </div>

          <div className="azs-dining-grid">
            {/* Suites */}
            <div className="azs-dining-card azs-seabourn-dining">
              <div className="azs-dining-image-wrap">
                <img
                  src={ExploraSuite}
                  alt="Oceanfront suites aboard Explora Journeys"
                  className="azs-dining-img"
                />

                <div className="azs-dining-badge-wrapper">
                  <span className="azs-dining-badge azs-seabourn-badge">
                    Suite Categories
                  </span>
                </div>
              </div>

              <div className="azs-dining-content">
                <div className="azs-dining-header">
                  <div className="azs-dining-icon-circle">
                    <Bed size={24} className="azs-dining-icon" />
                  </div>

                  <h3 className="azs-dining-title">
                    Suites &amp; Accommodations
                  </h3>
                </div>

                <p className="azs-dining-intro">
                  Compare every suite category to discover which accommodations
                  provide the best value for couples, families, and luxury
                  travelers.
                </p>

                <div className="azs-dining-body">
                  <h4 className="azs-dining-group-title">
                    Compare Suite Categories:
                  </h4>

                  <ul className="azs-dining-list">
                    {[
                      "Ocean Terrace Suites",
                      "Ocean Grand Terrace Suites",
                      "Penthouse Suites",
                      "Cove Residences",
                      "Retreat Residences",
                      "Owner's Residences",
                      "Which Explora Suite Is Worth the Upgrade?",
                    ].map((item, idx) => (
                      <li key={idx} className="azs-dining-list-item">
                        <div className="azs-dining-list-icon-wrapper">
                          <Check size={14} className="azs-dining-list-icon" />
                        </div>

                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="azs-dining-divider"></div>

                  <div className="azs-dining-highlight-box azs-seabourn-highlight">
                    <p className="azs-dining-highlight-text">
                      Find the ideal suite by comparing space, amenities,
                      location, and overall value before you book.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Dining */}
            <div className="azs-dining-card azs-azamara-dining">
              <div className="azs-dining-image-wrap">
                <img
                  src={ExploraDiningImage}
                  alt="Dining aboard Explora Journeys"
                  className="azs-dining-img"
                />

                <div className="azs-dining-badge-wrapper">
                  <span className="azs-dining-badge azs-azamara-badge">
                    Culinary Guides
                  </span>
                </div>
              </div>

              <div className="azs-dining-content">
                <div className="azs-dining-header">
                  <div className="azs-dining-icon-circle">
                    <Utensils size={24} className="azs-dining-icon" />
                  </div>

                  <h3 className="azs-dining-title">
                    Dining &amp; Culinary Experiences
                  </h3>
                </div>

                <p className="azs-dining-intro">
                  Dining is one of the highlights of every Explora voyage.
                  Explore our culinary resources to learn what makes the onboard
                  dining experience exceptional.
                </p>

                <div className="azs-dining-body">
                  <h4 className="azs-dining-group-title">
                    Explore Our Dining Guides:
                  </h4>

                  <ul className="azs-dining-list">
                    {[
                      "Dining on Explora Journeys",
                      "Is Anthology Worth It?",
                      "Included restaurants",
                      "Specialty dining",
                      "Fine wines",
                      "International cuisine",
                      "Casual dining",
                      "Room service",
                      "Dietary accommodations",
                    ].map((item, idx) => (
                      <li key={idx} className="azs-dining-list-item">
                        <div className="azs-dining-list-icon-wrapper">
                          <Star size={14} className="azs-dining-list-icon" />
                        </div>

                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="azs-dining-divider"></div>

                  <div className="azs-dining-highlight-box azs-azamara-highlight">
                    <p className="azs-dining-highlight-text">
                      Learn about included restaurants, specialty venues, fine
                      wines, international cuisine, and the culinary experiences
                      that define Explora Journeys.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WELLNESS & LIFE ONBOARD + CRUISE PLANNING RESOURCES ───────────────── */}
      <section
        className="Ejvs-pricing-section"
        id="wellness-life-onboard"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="Ejvs-container">
          <div className="Ejvs-section-header">
            <h2 className="Ejvs-section-title">
              Wellness &amp; <br /> Life Onboard
            </h2>

            <div className="Asc-accent-line"></div>

            <p className="Ejvs-section-subtitle">
              Explora Journeys was designed around relaxation, wellness, and
              personal enrichment, while providing guests with thoughtful
              resources to plan every aspect of their luxury cruise experience.
            </p>
          </div>

          <div className="Ejvs-pricing-grid">
            {/* Wellness & Life Onboard */}
            <div className="Ejvs-pricing-card Ejvs-explora-card">
              <div className="Ejvs-card-header">
                <div className="Ejvs-card-icon-wrap">
                  <HeartHandshake size={24} className="Ejvs-card-icon" />
                </div>

                <h3 className="Ejvs-card-title">Wellness &amp; Life Onboard</h3>
              </div>

              <p className="Ejvs-card-intro">
                Discover the onboard experiences designed to help you relax,
                recharge, and enjoy every moment at sea.
              </p>

              <ul className="Ejvs-feature-list">
                {[
                  "Explora Journeys Wellness Experience",
                  "Entertainment & Life Onboard Explora Journeys",
                  "Ocean Wellness Spa",
                  "Fitness center",
                  "Yoga",
                  "Pools",
                  "Live entertainment",
                  "Lounges",
                  "Enrichment programs",
                  "Daily life onboard",
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
                  Learn how wellness, entertainment, and thoughtfully designed
                  public spaces create Explora Journeys' distinctive onboard
                  experience.
                </p>
              </div>
            </div>

            {/* Cruise Planning Resources */}
            <div className="Ejvs-pricing-card Ejvs-seabourn-card">
              <div className="Ejvs-card-header">
                <div className="Ejvs-card-icon-wrap">
                  <Compass size={24} className="Ejvs-card-icon" />
                </div>

                <h3 className="Ejvs-card-title">Cruise Planning Resources</h3>
              </div>

              <p className="Ejvs-card-intro">
                Planning your cruise becomes much easier with expert guidance
                and practical planning resources.
              </p>

              <ul className="Ejvs-feature-list">
                {[
                  "Explora Journeys Itineraries",
                  "How Far in Advance Should You Book Explora?",
                  "What to Pack for an Explora Cruise",
                  "How to Get the Best Value on Explora Journeys",
                  "Should You Book Through a Travel Advisor?",
                  "Booking timelines",
                  "Promotions",
                  "Packing advice",
                  "Cabin selection",
                  "Budget planning",
                  "Shore excursions",
                ].map((item, i) => (
                  <li key={i} className="Ejvs-feature-item">
                    <div className="Ejvs-feature-icon">
                      <Star size={14} />
                    </div>

                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="Ejvs-card-highlight">
                <p>
                  These planning guides help you choose the right itinerary,
                  maximize value, prepare for your voyage, and book with
                  confidence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DESTINATION GUIDES ─────────────────────────────────────────── */}
      <section className="luc-destinations-section" id="destination-guides">
        <div className="luc-destinations-container">
          <div className="luc-destinations-header">
            <h2 className="luc-destinations-title">Destination Guides</h2>
            <div className="adg-c-accent-line"></div>
            <p className="luc-destinations-intro">
              Explora Journeys sails to many of the world's most remarkable destinations.
            </p>
          </div>

          <div className="luc-dest-layout">
            {/* Sidebar nav */}
            <nav className="luc-dest-nav">
              {regionalGuides.map((item) => {
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
                <div className="luc-dest-info-col">
                  <span className="luc-dest-info-label">Browse our regional guides:</span>
                  <div className="luc-dest-items-grid" style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    {currentRegion.guides.map((guide, idx) => (
                      <Link
                        key={idx}
                        to={guide.path}
                        className="luc-dest-item-text"
                        style={{
                          color: "var(--navy)",
                          fontWeight: "bold",
                          textDecoration: "underline",
                          display: "flex",
                          alignItems: "center",
                          gap: "8px"
                        }}
                      >
                        <ArrowRight size={14} />
                        {guide.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Highlights / What is included */}
              <div className="luc-dest-theme-box-note">
                <div className="luc-dest-theme-note-bar"></div>
                <div className="luc-dest-theme-note-content">
                  <span className="luc-dest-theme-note-label">
                    Each Destination Guide Includes:
                  </span>
                  <div
                    className="luc-dest-items-grid"
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                      gap: "12px",
                      marginTop: "12px"
                    }}
                  >
                    {[
                      "Best itineraries",
                      "Ports of call",
                      "Shore experiences",
                      "Best time to visit",
                      "Travel tips",
                      "Frequently asked questions"
                    ].map((item, idx) => (
                      <div key={idx} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <Check size={16} style={{ color: "#2e7d32" }} />
                        <span style={{ fontSize: "15px", fontWeight: "500", color: "#333" }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHO IS EXPLORA JOURNEYS BEST FOR? ─────────────────────────────────── */}
      <section className="adg-section" id="who-is-explora-best-for">
        <div className="adg-container">
          <div className="adg-section-header" style={{ marginBottom: "60px" }}>
            <h2 className="adg-h2">Who Is Explora Journeys Best For?</h2>
            <div className="adg-accent-line"></div>

            <p
              className="Asc-body-text"
              style={{ textAlign: "center", marginTop: "15px" }}
            >
              Not every luxury cruise line is the perfect fit for every
              traveler. Our comparison guides help you determine whether Explora
              Journeys matches your travel style and vacation preferences.
            </p>
          </div>

          <div className="adg-split-layout">
            <div className="adg-content-card-side">
              <img
                src={MediterraneanImage}
                alt="Beautiful coastal destination in the Mediterranean"
                className="adg-side-image"
                style={{ height: "70vh" }}
              />

              <div className="adg-info-card">
                <div className="adg-card-meta">
                  <Users size={28} />
                  <span className="adg-meta-label">
                    Find Your Perfect Match
                  </span>
                </div>

                <p className="adg-card-lead">
                  Explore our comparison guides to discover whether Explora
                  Journeys is the right choice for your travel style, whether
                  you're sailing as a couple, solo traveler, family, or seasoned
                  luxury cruiser.
                </p>
              </div>
            </div>

            <div className="adg-list-side">
              {[
                "Who Should Sail Explora Journeys?",
                "Is Explora Good for Families?",
                "Is Explora Good for Solo Travelers?",
                "Perfect for couples",
                "Ideal for solo travelers",
                "Great for multi-generational families",
                "Designed for luxury cruisers",
                "Excellent for wellness travelers",
                "A favorite of food lovers",
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
      {/* ── BOOKING & VALUE GUIDES ───────────────────────────────────────── */}
      <section
        className="adg-c-section adg-c-bg-white"
        id="booking-value-guides"
      >
        <div className="adg-c-container">
          <div className="adg-c-section-header">
            <h2 className="adg-c-h2">Booking &amp; Value Guides</h2>
            <div className="adg-c-accent-line"></div>

            <p className="Asc-section-intro">
              Luxury cruising is an investment, and choosing the right
              itinerary, suite, and booking strategy can significantly enhance
              your overall Explora Journeys experience.
            </p>
          </div>

          <div className="adg-c-overview-layout">
            {/* Left Side */}
            <div className="adg-c-overview-icons">
              {[
                "Should You Book Through a Travel Advisor?",
                "How to Get the Best Value on Explora Journeys",
                "Which Explora Suite Is Worth the Upgrade?",
                "Compare fares and sailing options",
                "Understand what's included in your fare",
                "Maximize promotions and special offers",
                "Choose the right suite for your travel style",
                "Plan your cruise budget with confidence",
              ].map((label, i) => (
                <div key={i} className="adg-c-overview-item">
                  <span className="adg-c-overview-icon">
                    <Check size={16} strokeWidth={2.5} />
                  </span>

                  <span className="adg-c-overview-label">{label}</span>
                </div>
              ))}
            </div>

            {/* Right Side */}
            <div className="adg-c-overview-right">
              <div className="adg-c-overview-callout">
                <div className="adg-c-overview-callout-inner">
                  <BookOpen size={28} className="adg-c-callout-star" />

                  <p className="adg-c-callout-text">
                    These guides help you compare fares, understand inclusions,
                    maximize promotions, select the ideal suite, and make
                    informed decisions before booking your Explora Journeys
                    vacation.
                  </p>
                </div>
              </div>

              <div
                className="adg-c-overview-image-wrap"
                style={{ height: "310px" }}
              >
                <img
                  src={ExploraBookingImage}
                  alt="Explora Journeys booking and value guides"
                  className="adg-c-overview-img"
                />

                <div className="adg-c-overview-img-overlay">
                  <span className="adg-c-overview-img-label">
                    Book Smarter • Travel Better
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY BOOK THROUGH TRIPS & SHIPS LUXURY TRAVEL? */}
      <section
        className="Avr-planning-section"
        id="Asc-luxury-travel-advisor"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="Asc-container">
          {/* HEADING */}
          <div className="Avr-planning-heading">
            <span className="Avr-planning-eyebrow">
              Personalized Explora Journeys Planning
            </span>

            <h2 className="Avr-planning-title">
              Why Book Through Trips &amp; Ships Luxury Travel?
            </h2>

            <div className="Avr-planning-divider"></div>
          </div>

          {/* TWO-PANEL GRID */}
          <div className="Avr-planning-grid">
            {/* LEFT PANEL */}
            <div className="Avr-planning-left">
              <div className="Avr-planning-left-deco">&ldquo;</div>

              <h3 className="Avr-planning-left-title">
                A Seamless Luxury Travel Experience
              </h3>

              <p className="Avr-planning-left-body">
                Working with a luxury travel advisor offers advantages beyond
                simply making a reservation. Our goal is to help you create a
                seamless luxury travel experience from beginning to end — every
                detail thoughtfully coordinated around your travel style.
              </p>

              <div className="Avr-planning-alert">
                <ShieldCheck size={18} className="Avr-planning-alert-icon" />

                <p className="Avr-planning-alert-text">
                  Personalized support is provided before and during your
                  voyage.
                </p>
              </div>
            </div>

            {/* RIGHT PANEL */}
            <div className="Avr-planning-right">
              <p className="Avr-planning-right-intro">
                Our advisors can help you:
              </p>

              <div className="Avr-planning-benefits-grid">
                {[
                  {
                    icon: <MapPinned size={18} />,
                    label: "Compare itineraries",
                  },
                  {
                    icon: <Ship size={18} />,
                    label: "Recommend the best ship",
                  },
                  {
                    icon: <Home size={18} />,
                    label: "Select the ideal suite",
                  },
                  {
                    icon: <Plane size={18} />,
                    label: "Coordinate flights and hotels",
                  },
                  {
                    icon: <Anchor size={18} />,
                    label: "Arrange transfers",
                  },
                  {
                    icon: <Compass size={18} />,
                    label: "Recommend shore experiences",
                  },
                  {
                    icon: <BadgePercent size={18} />,
                    label: "Explain promotions and offers",
                  },
                  {
                    icon: <Sparkles size={18} />,
                    label:
                      "Provide personalized support before and during your voyage",
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
                Our goal is to help you create a seamless luxury travel
                experience from beginning to end.
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
              Everything travelers need to know about the Explora Journeys
              Resource Center.
            </p>
          </div>
          <FAQ />
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────────── */}
      <section className="Asc-help-section">
        <div className="Asc-help-bg-wrap">
          <img
            src={ExploraEpicShip}
            alt="Explora Journeys luxury cruise experience"
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
                  Your Complete Guide <br /> to Explora Journeys
                </h2>
                <div className="Asc-help-accent"></div>
              </div>

              <div className="Asc-help-grid">
                <div className="Asc-help-info">
                  <p className="Asc-help-intro">
                    Whether you're comparing luxury cruise lines, deciding which
                    suite offers the best value, choosing between Mediterranean
                    and Alaska itineraries, or planning your very first Explora
                    voyage, this resource center is your trusted source for
                    expert guidance.
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
                        At Trips &amp; Ships Luxury Travel, we believe informed
                        travelers enjoy better vacations. That's why we've
                        created an extensive library of articles covering every
                        stage of the journey—from inspiration and planning to
                        booking and sailing.
                      </p>
                      <br />
                      <p className="Asc-help-intro">
                        Explore the guides, discover new destinations, compare
                        ships and itineraries, and let our luxury cruise
                        expertise help you plan an unforgettable Explora
                        Journeys experience.
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
                      Start Planning Your Explora Journey
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
                      "Recommend the ideal ship, suite, and itinerary for you",
                      "Compare destinations and travel dates",
                      "Arrange flights and hotels",
                      "Coordinate transfers",
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
                    marginBottom: "30px",
                  }}
                >
                  Explore More Explora Journeys Guides
                </h3>

                {[
                  {
                    heading: "Getting Started",
                    links: [
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
                    ],
                  },
                  {
                    heading: "Ships",
                    links: [
                      { label: "Explora I Review", path: "/explora-i-review" },
                      {
                        label: "Explora II Review",
                        path: "/explora-ii-review",
                      },
                      {
                        label: "Explora III Guide",
                        path: "/explora-iii-guide",
                      },
                      { label: "Explora IV Guide", path: "/explora-iv-guide" },
                    ],
                  },
                  {
                    heading: "Suites",
                    links: [
                      {
                        label: "Which Explora Suite Is Worth the Upgrade?",
                        path: "/which-explora-suite-is-worth-the-upgrade",
                      },
                    ],
                  },
                  {
                    heading: "Destinations",
                    links: [
                      {
                        label: "Mediterranean Cruises on Explora Journeys",
                        path: "/mediterranean-cruises-on-explora-journeys",
                      },
                      {
                        label:
                          "Greece & Greek Isles Cruises on Explora Journeys",
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
                        label:
                          "Iceland & Greenland Cruises on Explora Journeys",
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
                    ],
                  },
                  {
                    heading: "Planning",
                    links: [
                      {
                        label: "Explora Journeys Itineraries",
                        path: "/explora-journeys-itineraries",
                      },
                      {
                        label: "Should You Book Through a Travel Advisor?",
                        path: "/should-you-book-through-a-travel-advisor",
                      },
                      {
                        label: "How to Get the Best Value on Explora Journeys",
                        path: "/how-to-get-the-best-value-on-explora-journeys",
                      },
                      {
                        label: "What to Pack for an Explora Cruise",
                        path: "/what-to-pack-for-an-explora-cruise",
                      },
                    ],
                  },
                ].map((group, gIdx) => (
                  <div key={gIdx} style={{ marginBottom: "30px" }}>
                    <h4
                      style={{
                        color: "rgba(255, 255, 255, 0.95)",
                        fontSize: "16px",
                        fontWeight: "600",
                        marginBottom: "14px",
                        textTransform: "uppercase",
                        letterSpacing: "0.5px",
                      }}
                    >
                      {group.heading}
                    </h4>
                    <div
                      className="Asc-internal-links-grid"
                      style={{
                        display: "grid",
                        gridTemplateColumns:
                          "repeat(auto-fill, minmax(280px, 1fr))",
                        gap: "15px",
                      }}
                    >
                      {group.links.map((link, idx) => (
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
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExploraJourneysResourceCenter;
