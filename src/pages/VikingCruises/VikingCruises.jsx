import { useState, useEffect } from "react";
import {
  MapPin,
  Award,
  Check,
  Plus,
  Minus,
  ArrowRight,
  Star,
  Users,
  Ship,
  Compass,
  Globe,
  Waves,
  Mountain,
  X,
  Home,
} from "lucide-react";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela.jpeg";
import { Helmet } from "react-helmet-async";
import "./VikingCruises.css";

import HeroImage1 from "../../assets/VikingCruises/viking-cruise-eidfjord-norway-fjord.jpg";
import HeroImage2 from "../../assets/VikingCruises/flam-norway-fjord-cruise.jpg";
import HeroImage3 from "../../assets/VikingCruises/lofoten-islands-norway-cruise.jpg";
import VikingRiver from "../../assets/VikingCruises/budapest-hungary-river-cruise-danube.jpg";
import VikingOcean from "../../assets/VikingCruises/viking-expedition-ship-antarctica-cruise.jpg";
import VikingEurope from "../../assets/VikingCruises/Europe.jpg";
import VikingIceland from "../../assets/VikingCruises/Iceland.jpg";
import VikingMediterranean from "../../assets/VikingCruises/Mediterranean.jpg";
import VikingAlaska from "../../assets/VikingCruises/Alaska.jpg";
import VikingAntarctica  from "../../assets/VikingCruises/Expedition-Antarctica.jpg";
import VikingExpedition from "../../assets/VikingCruises/viking-expedition-ship-welland-canal.jpg";
import VikingExp1 from "../../assets/VikingCruises/viking-aquavit-terrace-ocean-dining.jpg";
import VikingExp2 from "../../assets/VikingCruises/mamsens-restaurant-ocean-view-viking-expedition.jpg";
import VikingExp3 from "../../assets/VikingCruises/viking-explorer-suite-balcony-view.jpg";
import VikingExp4 from "../../assets/VikingCruises/viking-infinity-pool-ocean-view.jpg";
import VikingExp5 from "../../assets/VikingCruises/viking-explorers-lounge-panoramic-views.jpg";
import VikingExp7 from "../../assets/VikingCruises/viking-deluxe-veranda-stateroom.jpg";
import VikingExp8 from "../../assets/VikingCruises/avignon-france-river-cruise-view.jpg";
import VikingCta from "../../assets/VikingCruises/viking-river-cruise-exterior-st-louis.jpg";

// ─── VIKING CRUISE TYPE PANEL DATA ────────────────────────────────────────────
const vikingCruiseTypes = [
  {
    id: "river",
    title: "Viking River Cruises",
    badge: "River Cruises",
    icon: Waves,
    desc: "Viking is perhaps best known for its river cruise experiences. River cruising allows travelers to sail directly into the heart of historic cities and cultural destinations — experiencing Europe's legendary waterways, the Nile, the Mekong, and beyond from an intimate and immersive perspective.",
    columns: [
      {
        label: "Popular River Regions:",
        items: [
          "Rhine, Danube & Seine (Europe)",
          "Rhône & Douro Rivers",
          "Nile River (Egypt)",
          "Mekong River (Southeast Asia)",
          "Mississippi River (North America)",
        ],
      },
    ],
    themeLabel: "One of the World's Leading River Cruise Companies",
    themeText:
      "River cruising offers a more intimate and immersive travel experience than traditional ocean cruising — sailing guests directly into city centers and cultural destinations that larger ships cannot reach.",
  },
  {
    id: "ocean",
    title: "Viking Ocean Cruises",
    badge: "Ocean Cruises",
    icon: Ship,
    desc: "Viking Ocean Cruises combines elegant Scandinavian-inspired ships with destination-rich itineraries. Smaller ships, fewer passengers, more time in port, and an adult-oriented atmosphere distinguish Viking Ocean from mainstream cruise lines.",
    columns: [
      {
        label: "Viking Ocean Highlights:",
        items: [
          "Scandinavian-Inspired Ship Design",
          "Smaller Ships — More Intimate Experience",
          "More Time in Port, Fewer Sea Days",
          "Adult-Oriented Atmosphere",
          "Many Amenities Included in Fare",
        ],
      },
    ],
    themeLabel: "A Popular Alternative to Traditional Luxury Cruise Brands",
    themeText:
      "Viking Ocean Cruises has built a strong reputation among travelers seeking sophisticated, destination-focused ocean voyages with fewer passengers and more enrichment than mainstream cruise lines provide.",
  },
  {
    id: "expedition",
    title: "Viking Expedition Cruises",
    badge: "Expedition Cruises",
    icon: Mountain,
    desc: "For travelers seeking adventure, Viking Expedition Cruises explore some of the world's most remote and extraordinary destinations — from Antarctica and the Arctic to the Great Lakes and remote coastal regions inaccessible to larger ships.",
    columns: [
      {
        label: "Popular Expedition Regions:",
        items: [
          "Antarctica",
          "Arctic & Greenland",
          "Great Lakes (North America)",
          "Remote Coastal Areas",
          "Unique International Regions",
        ],
      },
    ],
    themeLabel: "Luxury Meets Exploration and Education",
    themeText:
      "Viking expedition cruises combine the comfort and service of Viking's premium brand with the adventure and educational enrichment of true expedition travel — a rare and compelling combination.",
  },
  {
    id: "destinations",
    title: "Viking's Most Popular Destinations",
    badge: "Destinations",
    icon: Globe,
    desc: "Viking sails throughout the world. Europe remains one of Viking's strongest regions, with popular itineraries spanning the Mediterranean, Scandinavia, the Baltic, and Northern Europe. Beyond Europe, Viking reaches Egypt, Southeast Asia, Alaska, Antarctica, and destinations across six continents.",
    columns: [
      {
        label: "Popular Regions:",
        items: [
          "Europe — Mediterranean & Northern",
          "Scandinavia & Norwegian Fjords",
          "Baltic Capitals & Iceland",
          "Alaska",
          "Antarctica & Expedition Regions",
        ],
      },
    ],
    themeLabel: "Six Continents, Hundreds of Destinations",
    themeText:
      "Viking's itineraries span the globe — from medieval European cities and Mediterranean coastlines to remote polar regions and legendary rivers — always with a focus on destination immersion.",
  },
];

// ─── SCHEMA DATA ─────────────────────────────────────────────────────────────
const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.tripsandships.com/#organization",
      name: "Trips & Ships Luxury Travel",
      url: "https://www.tripsandships.com",
      logo: "https://www.tripsandships.com/logo.png",
      description:
        "Luxury travel agency specializing in luxury cruises, family travel, river cruises, expedition cruises, and custom travel planning.",
    },
    {
      "@type": "TravelAgency",
      "@id": "https://www.tripsandships.com/#travelagency",
      name: "Trips & Ships Luxury Travel",
      url: "https://www.tripsandships.com",
      description:
        "Luxury travel experts helping travelers discover Viking river, ocean, and expedition cruise experiences through expert guidance and personalized travel planning.",
    },
    {
      "@type": "WebPage",
      "@id": "https://www.tripsandships.com/viking-cruises",
      url: "https://www.tripsandships.com/viking-cruises",
      name: "Viking Cruises | River, Ocean & Expedition Cruises for Curious Travelers",
      description:
        "Discover Viking Cruises, including river cruises, ocean voyages, and expedition adventures. Learn why travelers choose Viking for destination-focused itineraries, cultural enrichment, and immersive travel experiences.",
      isPartOf: { "@id": "https://www.tripsandships.com/#website" },
      about: [{ "@type": "Organization", name: "Viking Cruises" }],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.tripsandships.com/viking-cruises#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.tripsandships.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Cruise Guide",
          item: "https://www.tripsandships.com/cruise-comparisons",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Viking Cruises",
          item: "https://www.tripsandships.com/viking-cruises",
        },
      ],
    },
    {
      "@type": "ItemList",
      "@id": "https://www.tripsandships.com/viking-cruises#itemlist",
      name: "Viking Cruise Types",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Viking River Cruises" },
        { "@type": "ListItem", position: 2, name: "Viking Ocean Cruises" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Viking Expedition Cruises",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.tripsandships.com/viking-cruises#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is Viking Cruises known for?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Viking is known for destination-focused river, ocean, and expedition cruises designed for curious adult travelers.",
          },
        },
        {
          "@type": "Question",
          name: "Are Viking Cruises adults-only?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Viking generally requires guests to be at least 18 years old.",
          },
        },
        {
          "@type": "Question",
          name: "Does Viking have casinos?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Viking ships do not feature casinos.",
          },
        },
        {
          "@type": "Question",
          name: "Are shore excursions included on Viking Cruises?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most Viking itineraries include at least one complimentary shore excursion in each port.",
          },
        },
        {
          "@type": "Question",
          name: "Is Viking considered a luxury cruise line?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Viking is typically considered a premium or upper-premium cruise brand that delivers many luxury-style experiences.",
          },
        },
        {
          "@type": "Question",
          name: "Are drinks included on Viking Cruises?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Beer and wine with lunch and dinner are often included on Viking sailings.",
          },
        },
        {
          "@type": "Question",
          name: "Does Viking offer river cruises?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Viking is one of the world's leading river cruise companies, sailing European rivers, the Nile, the Mekong, and more.",
          },
        },
        {
          "@type": "Question",
          name: "Does Viking sail Alaska?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Viking offers Alaska itineraries on select ocean cruises.",
          },
        },
        {
          "@type": "Question",
          name: "Is Viking good for solo travelers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Many solo travelers appreciate Viking's adult-oriented atmosphere and destination-focused itineraries.",
          },
        },
        {
          "@type": "Question",
          name: "Are Viking Cruises worth the money?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Many travelers believe Viking offers strong value because of its service, enrichment programs, included excursions, and immersive destination experiences.",
          },
        },
        {
          "@type": "Question",
          name: "Is Viking family-friendly?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Viking is not designed as a family cruise line. Viking ships are adults-only, generally requiring guests to be at least 18 years old. Families traveling with young children may prefer cruise lines specifically designed for multigenerational travel.",
          },
        },
        {
          "@type": "Question",
          name: "What is included on a Viking Cruise?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Viking fares often include accommodations, dining, beer and wine with meals, Wi-Fi, one included shore excursion per port, enrichment programs, and fitness facility access.",
          },
        },
        {
          "@type": "Question",
          name: "Who are Viking Cruises best for?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Viking appeals strongly to cultural travelers, couples, retirees, history enthusiasts, lifelong learners, and destination-focused travelers who value immersion over onboard attractions.",
          },
        },
        {
          "@type": "Question",
          name: "Does Viking offer expedition cruises?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Viking Expedition Cruises explore remote destinations including Antarctica, Arctic regions, the Great Lakes, and remote coastal areas.",
          },
        },
      ],
    },
    {
      "@type": "Review",
      "@id": "https://www.tripsandships.com/viking-cruises#review",
      itemReviewed: {
        "@type": "TravelAction",
        name: "Viking Cruises",
      },
      reviewBody:
        "Viking Cruises offers award-winning river, ocean, and expedition voyages designed for curious adult travelers — combining elegant Scandinavian design, inclusive pricing, destination-focused itineraries, and cultural enrichment programs that set it apart from mainstream cruise lines.",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      author: {
        "@type": "Organization",
        name: "Trips & Ships Luxury Travel",
      },
    },
    {
      "@type": "TouristTrip",
      "@id": "https://www.tripsandships.com/viking-cruises#touristtrip",
      name: "Viking Cruises — River, Ocean & Expedition Voyages",
      description:
        "Award-winning Viking river cruises, ocean voyages, and expedition adventures spanning six continents, designed for culturally curious adult travelers.",
      touristType: [
        "Cultural Travelers",
        "Couples",
        "Retirees",
        "Lifelong Learners",
        "Solo Travelers",
        "History Enthusiasts",
      ],
    },
  ],
};

// ─── FAQ COMPONENT ───────────────────────────────────────────────────────────
function FAQ() {
  const [open, setOpen] = useState(null);

  const faqData = [
    {
      q: "What is Viking Cruises known for?",
      a: "Viking is known for destination-focused river, ocean, and expedition cruises designed for curious adult travelers.",
    },
    {
      q: "Are Viking Cruises adults-only?",
      a: "Yes. Viking generally requires guests to be at least 18 years old.",
    },
    {
      q: "Does Viking have casinos?",
      a: "No. Viking ships do not feature casinos.",
    },
    {
      q: "Are shore excursions included on Viking Cruises?",
      a: "Most Viking itineraries include at least one complimentary shore excursion in each port.",
    },
    {
      q: "Is Viking considered a luxury cruise line?",
      a: "Viking is typically considered a premium or upper-premium cruise brand that delivers many luxury-style experiences.",
    },
    {
      q: "Are drinks included on Viking Cruises?",
      a: "Beer and wine with lunch and dinner are often included on Viking sailings.",
    },
    {
      q: "Does Viking offer river cruises?",
      a: "Yes. Viking is one of the world's leading river cruise companies, sailing European rivers, the Nile, the Mekong, and more.",
    },
    {
      q: "Does Viking sail Alaska?",
      a: "Yes. Viking offers Alaska itineraries on select ocean cruises.",
    },
    {
      q: "Is Viking good for solo travelers?",
      a: "Many solo travelers appreciate Viking's adult-oriented atmosphere and destination-focused itineraries.",
    },
    {
      q: "Are Viking Cruises worth the money?",
      a: "Many travelers believe Viking offers strong value because of its service, enrichment programs, included excursions, and immersive destination experiences.",
    },
    {
      q: "Is Viking family-friendly?",
      a: "Viking is not designed as a family cruise line. Viking ships are adults-only, generally requiring guests to be at least 18 years old. Families traveling with young children may prefer cruise lines specifically designed for multigenerational travel.",
    },
    {
      q: "What is included on a Viking Cruise?",
      a: "Viking fares often include accommodations, dining, beer and wine with meals, Wi-Fi, one included shore excursion per port, enrichment programs, and fitness facility access.",
    },
    {
      q: "Who are Viking Cruises best for?",
      a: "Viking appeals strongly to cultural travelers, couples, retirees, history enthusiasts, lifelong learners, and destination-focused travelers who value immersion over onboard attractions.",
    },
    {
      q: "Does Viking offer expedition cruises?",
      a: "Yes. Viking Expedition Cruises explore remote destinations including Antarctica, Arctic regions, the Great Lakes, and remote coastal areas.",
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

// ─── MAIN COMPONENT ──────────────────────────────────────────────────────────
const VikingCruises = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [readMore, setReadMore] = useState(false);
  const images = [HeroImage1, HeroImage2,HeroImage3];
  const [activeDest, setActiveDest] = useState("river");
  const currentDest =
    vikingCruiseTypes.find((d) => d.id === activeDest) || vikingCruiseTypes[0];
  const ActiveIcon = currentDest.icon;

  const [currentLuxurySlide, setCurrentLuxurySlide] = useState(0);
  const [activeReasonTab, setActiveReasonTab] = useState(5);
  const [activeTypeIndex, setActiveTypeIndex] = useState(0);

  const vikingCruiseCategories = [
    {
      title: "Viking River Cruises",
      description:
        "Sailing directly into historic city hearts — Viking river cruises offer an intimate way to explore Europe, Egypt, Southeast Asia, and North America's legendary waterways.",
      number: "01",
    },
    {
      title: "Viking Ocean Cruises",
      description:
        "Elegant Scandinavian-designed ships, smaller passenger counts, more time in port, and a sophisticated adult atmosphere set Viking Ocean apart from mainstream cruise lines.",
      number: "02",
    },
    {
      title: "Viking Expedition Cruises",
      description:
        "Adventure travel at its finest — Viking expeditions reach Antarctica, the Arctic, the Great Lakes, and remote coastal destinations unavailable to conventional cruise ships.",
      number: "03",
    },
    {
      title: "European Itineraries",
      description:
        "Viking's heritage and expertise shine in Europe — spanning Mediterranean coastlines, Norwegian fjords, Baltic capitals, and medieval river cities.",
      number: "04",
    },
    {
      title: "Cultural Enrichment Programs",
      description:
        "Lectures, destination presentations, and immersive onboard programs that deepen guests' understanding of the places they visit — a Viking hallmark.",
      number: "05",
    },
    {
      title: "Inclusive Pricing",
      description:
        "Viking's relatively inclusive fare structure — covering dining, Wi-Fi, one shore excursion per port, beer and wine with meals, and enrichment programs — simplifies vacation budgeting.",
      number: "06",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % (images.length || 1));
    }, 6000);
    return () => clearInterval(timer);
  }, [images.length]);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTypeIndex((prev) => (prev + 1) % 3);
    }, 6000);
    return () => clearInterval(timer);
  }, [activeTypeIndex]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentLuxurySlide(
        (prev) => (prev + 1) % vikingCruiseCategories.length,
      );
    }, 5000);
    return () => clearInterval(timer);
  }, [vikingCruiseCategories.length]);

  return (
    <div className="Asc-page-wrapper">
      <Helmet>
        <title>
          Viking Cruises | River, Ocean &amp; Expedition Cruises for Curious
          Travelers
        </title>
        <meta
          name="title"
          content="Viking Cruises | Award-Winning River & Ocean Cruise Experiences"
        />
        <meta
          name="description"
          content="Discover Viking Cruises, including river cruises, ocean voyages, and expedition adventures. Learn why travelers choose Viking for destination-focused itineraries, cultural enrichment, and immersive travel experiences."
        />
        <meta
          property="og:title"
          content="Viking Cruises | River, Ocean & Expedition Cruises for Curious Travelers"
        />
        <meta
          property="og:description"
          content="Discover Viking river cruises, ocean voyages, and expedition adventures — award-winning destination-focused travel designed for curious adult travelers."
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content="https://www.tripsandships.com/viking-cruises"
        />
        <link
          rel="canonical"
          href="https://www.tripsandships.com/viking-cruises"
        />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>
      <Nav />
      {/* ══ HERO ══════════════════════════════════════════════════════════════ */}
      <section
        className="Scenic_hero_section"
        style={{ backgroundColor: "var(--bg-dark)" }}
      >
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
          <h1>Discover the Viking Cruises Difference</h1>
          <p>
            For travelers who value cultural immersion, destination-focused
            experiences, and thoughtful luxury, Viking Cruises has become one of
            the most respected names in the cruise industry.
          </p>
          <p>
            Unlike many cruise lines that emphasize casinos, water parks, and
            large-scale entertainment, Viking focuses on helping guests explore
            the world through meaningful travel experiences.
          </p>
          {readMore && (
            <>
              <p>
                Whether sailing Europe's legendary rivers, crossing the oceans
                between iconic destinations, or venturing into remote expedition
                regions, Viking creates journeys designed for curious travelers
                who want to learn, discover, and connect with the places they
                visit.
              </p>
              <p>
                Today, Viking operates award-winning river cruises, ocean
                cruises, and expedition voyages that span six continents and
                hundreds of destinations worldwide.
              </p>
              <p>
                At Trips &amp; Ships Luxury Travel, we help travelers explore
                whether Viking is the right fit for their travel style, goals,
                and preferred destinations.
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
      {/* ══ WHAT IS VIKING CRUISES ════════════════════════════════════════════ */}
      <section
        className="ugt-components-section"
        id="ugt-components"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="Asc-container">
          <div className="ugt-components-header">
            <h2 className="adg-c-h2">What Is Viking Cruises?</h2>
            <div className="adg-c-accent-line"></div>
          </div>

          <div className="ugt-components-list">
            <div className="ugt-component-row">
              {/* LEFT IMAGE */}
              <div className="ugt-component-image-wrapper">
                <div className="ugt-component-image-container">
                  <img
                    src={HeroImage2}
                    alt="Viking ocean cruise ship elegant Scandinavian interior lounge"
                    className="ugt-component-image"
                  />
                </div>
              </div>

              {/* RIGHT CONTENT */}
              <div className="ugt-component-content">
                <p className="ugt-component-text">
                  Viking is a premium cruise company that has built its
                  reputation by prioritizing the destination rather than onboard
                  distractions — a philosophy that resonates deeply with
                  culturally curious adult travelers.
                </p>
                <p className="ugt-component-text">
                  The company has grown from a European river cruise pioneer
                  into one of the world's most respected cruise brands —
                  spanning river, ocean, and expedition travel across six
                  continents.
                </p>

                <div className="ugt-questions-box">
                  <span className="ugt-questions-title">
                    Viking Is Known For:
                  </span>
                  <ul className="ugt-questions-list">
                    {[
                      "Destination-Focused Travel",
                      "Cultural Enrichment Programs",
                      "Smaller Ship Experiences",
                      "Adult-Focused Cruising (18+)",
                      "Inclusive Pricing Structure",
                      "Award-Winning Service",
                      "Elegant Scandinavian Design",
                      "River, Ocean & Expedition Voyages",
                    ].map((item, idx) => (
                      <li key={idx} className="ugt-question-item">
                        <Check size={16} className="ugt-question-icon" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ VIDEO SECTION ════════════════════════════════════════════════════ */}
      <section
        className="azs-video-section"
        style={{ backgroundColor: "var(--bg-white)" }}
      >
        <div className="azs-container">
          <div className="azs-section-header">
            <h2 className="azs-h2">Discover the Viking Experience</h2>
            <div className="azs-accent-line"></div>
            <p className="azs-video-intro">
              Designed for curious travelers, Viking's river, ocean, and
              expedition voyages take guests to the heart of enriching
              destinations across all seven continents.
            </p>
          </div>

          <div className="azs-video-wrapper">
            <div className="azs-video-frame">
              <iframe
                src="https://www.youtube.com/embed/3eVrJWoWJko"
                title="Discover the Viking Experience"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* ══ VIKING CRUISE TYPES BREAKDOWN — SLIDER VERSION ═══════════════════ */}
      <section className="vk-types-section">
        <div className="vk-types-container">
          <div className="vk-types-header">
            <h2 className="vk-types-title">
              Viking Cruises Travel Experiences
            </h2>
            <div className="vk-types-accent"></div>
          </div>

          {/* Navigation Title Bar (clickable tabs) */}
          <div className="vk-slider-nav">
            {[
              { title: "River Cruising", icon: Waves },
              { title: "Ocean Voyages", icon: Ship },
              { title: "Remote Exploration", icon: Compass },
            ].map((tab, idx) => {
              const TabIcon = tab.icon;
              return (
                <button
                  key={idx}
                  className={`vk-slider-nav-btn ${activeTypeIndex === idx ? "active" : ""}`}
                  onClick={() => setActiveTypeIndex(idx)}
                >
                  <span className="vk-slider-nav-num">0{idx + 1}</span>
                  <TabIcon size={18} className="vk-slider-nav-icon" />
                  <span className="vk-slider-nav-text">{tab.title}</span>
                </button>
              );
            })}
          </div>

          {/* Slider Window */}
          <div className="vk-slider-viewport">
            <div
              className="vk-slider-track"
              style={{
                transform: `translateX(-${(activeTypeIndex * 100) / 3}%)`,
              }}
            >
              {/* Slide 1 - River */}
              <div className="vk-slider-slide">
                <div className="vk-types-row">
                  <div className="vk-types-content">
                    <span className="vk-types-row-number">01</span>
                    <span className="vk-types-badge">River Cruising</span>
                    <h3 className="vk-types-row-title">Viking River Cruises</h3>
                    <p className="vk-types-row-desc">
                      Viking is perhaps best known for its river cruise
                      experiences. River cruising allows travelers to sail
                      directly into the heart of historic cities and cultural
                      destinations. River cruising offers a more intimate and
                      immersive travel experience than traditional ocean
                      cruising.
                    </p>

                    <div className="vk-types-regions-box">
                      <h4 className="vk-types-regions-title">
                        Popular River Cruise Regions Include:
                      </h4>
                      <div className="vk-types-bullets-grid">
                        {[
                          {
                            title: "Europe",
                            text: "Rhine River, Danube River, Seine River, Rhône River, Douro River",
                          },
                          {
                            title: "Egypt",
                            text: "Explore the legendary Nile River.",
                          },
                          {
                            title: "Southeast Asia",
                            text: "Cruises along the Mekong River.",
                          },
                          {
                            title: "North America",
                            text: "Select Mississippi River itineraries.",
                          },
                        ].map((bullet, idx) => (
                          <div key={idx} className="vk-types-bullet-item">
                            <Waves size={16} className="vk-types-bullet-icon" />
                            <div className="vk-types-bullet-text">
                              <strong>{bullet.title}</strong> — {bullet.text}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="vk-types-media">
                    <div className="vk-types-img-container">
                      <img
                        src={VikingRiver}
                        alt="Viking River Cruise Experience"
                        className="vk-types-img"
                      />
                      <div className="vk-types-img-overlay"></div>
                      <div className="vk-types-img-badge">
                        <Waves size={20} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Slide 2 - Ocean */}
              <div className="vk-slider-slide">
                <div className="vk-types-row">
                  <div className="vk-types-content">
                    <span className="vk-types-row-number">02</span>
                    <span className="vk-types-badge">Ocean Voyages</span>
                    <h3 className="vk-types-row-title">Viking Ocean Cruises</h3>
                    <p className="vk-types-row-desc">
                      Viking Ocean Cruises combines elegant ships with
                      destination-rich itineraries. Viking Ocean Cruises has
                      become a popular alternative to traditional luxury cruise
                      brands.
                    </p>

                    <div className="vk-types-regions-box">
                      <h4 className="vk-types-regions-title">
                        The Fleet Features:
                      </h4>
                      <div className="vk-types-bullets-grid">
                        {[
                          {
                            title: "Scandinavian-Inspired Design",
                            text: "Clean, modern, and sophisticated interiors.",
                          },
                          {
                            title: "Smaller Ships",
                            text: "Fewer passengers than many mainstream cruise lines.",
                          },
                          {
                            title: "Destination Focus",
                            text: "More time in port and fewer sea days on many itineraries.",
                          },
                          {
                            title: "Adult-Oriented Atmosphere",
                            text: "Designed for travelers seeking relaxation and enrichment.",
                          },
                          {
                            title: "Inclusive Experiences",
                            text: "Many amenities are included in the cruise fare.",
                          },
                        ].map((feature, idx) => (
                          <div key={idx} className="vk-types-bullet-item">
                            <Check size={16} className="vk-types-check-icon" />
                            <div className="vk-types-bullet-text">
                              <strong>{feature.title}</strong> — {feature.text}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="vk-types-media">
                    <div className="vk-types-img-container">
                      <img
                        src={VikingOcean}
                        alt="Viking Ocean Cruises"
                        className="vk-types-img"
                      />
                      <div className="vk-types-img-overlay"></div>
                      <div className="vk-types-img-badge">
                        <Ship size={20} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Slide 3 - Expedition */}
              <div className="vk-slider-slide">
                <div className="vk-types-row">
                  <div className="vk-types-content">
                    <span className="vk-types-row-number">03</span>
                    <span className="vk-types-badge">Remote Exploration</span>
                    <h3 className="vk-types-row-title">
                      Viking Expedition Cruises
                    </h3>
                    <p className="vk-types-row-desc">
                      For travelers seeking adventure, Viking Expedition Cruises
                      explore some of the world's most remote destinations.
                      Expedition cruises combine luxury with exploration and
                      education.
                    </p>

                    <div className="vk-types-regions-box">
                      <h4 className="vk-types-regions-title">
                        Popular Expedition Regions Include:
                      </h4>
                      <div className="vk-types-bullets-grid">
                        {[
                          {
                            title: "Antarctica",
                            text: "A bucket-list destination for many travelers.",
                          },
                          {
                            title: "Arctic Regions",
                            text: "Including Greenland and northern exploration routes.",
                          },
                          {
                            title: "Great Lakes",
                            text: "Unique expedition experiences in North America.",
                          },
                          {
                            title: "Remote Coastal Areas",
                            text: "Access destinations larger ships cannot visit.",
                          },
                        ].map((bullet, idx) => (
                          <div key={idx} className="vk-types-bullet-item">
                            <Compass
                              size={16}
                              className="vk-types-bullet-icon"
                            />
                            <div className="vk-types-bullet-text">
                              <strong>{bullet.title}</strong> — {bullet.text}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="vk-types-media">
                    <div className="vk-types-img-container">
                      <img
                        src={VikingExpedition}
                        alt="Viking Expedition Cruise"
                        className="vk-types-img"
                      />
                      <div className="vk-types-img-overlay"></div>
                      <div className="vk-types-img-badge">
                        <Compass size={20} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Slider dots indicator */}
          <div className="vk-slider-dots">
            {[0, 1, 2].map((idx) => (
              <button
                key={idx}
                className={`vk-slider-dot ${activeTypeIndex === idx ? "active" : ""}`}
                onClick={() => setActiveTypeIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </section>

            {/* ══ WHY TRAVELERS CHOOSE VIKING ══════════════════════════════════════ */}
      <section className="luc-why-section" id="luc-why-viking">
        <div className="luc-why-container">
          {/* LEFT — stacked images */}
          <div className="luc-why-images">
            <div className="luc-why-img-main-wrap" style={{ color: "#fff" }}>
              <img
                src={VikingExp1}
                alt="Viking cruise guests enjoying enrichment lecture destination program"
                className="luc-why-img-main"
              />
              <div className="luc-why-img-overlay"></div>
            </div>
            <div className="luc-why-img-accent-wrap" style={{ color: "#fff" }}>
              <img
                src={VikingExp2}
                alt="Viking ocean ship stateroom elegant Scandinavian design"
                className="luc-why-img-accent"
              />
              <div className="luc-why-img-badge">
                <span className="luc-why-badge-num">6</span>
                <span className="luc-why-badge-text">Key Reasons</span>
              </div>
            </div>
          </div>

          {/* RIGHT — content */}
          <div className="luc-why-content">
            <h2 className="luc-why-title">
              Why Travelers Choose Viking Cruises
            </h2>
            <div className="aac-accent-line aac-accent-white"></div>
            <p className="luc-why-intro">
              Many guests select Viking because they want a different type of
              cruise experience — one where the destination, not the ship, is
              the main attraction.
            </p>
            <div className="luc-why-features">
              {[
                {
                  num: "01",
                  title: "Destination-Focused Philosophy",
                  desc: "Viking emphasizes cultural learning, historical exploration, and local experiences rather than onboard attractions — placing the destination at the center of every journey.",
                },
                {
                  num: "02",
                  title: "Cultural Enrichment Programs",
                  desc: "Onboard lectures, destination presentations, and immersive programming deepen guests' understanding of the places they visit — a Viking hallmark.",
                },
                {
                  num: "03",
                  title: "Adult-Only Atmosphere",
                  desc: "Viking ships are generally adults-only (18+), creating a quieter, more sophisticated environment that appeals to couples, retirees, and independent travelers.",
                },
                {
                  num: "04",
                  title: "Elegant Scandinavian Design",
                  desc: "Viking's ships feature clean, modern, and sophisticated interiors — elegant without being formal, comfortable without being ostentatious.",
                },
                {
                  num: "05",
                  title: "Inclusive Pricing Structure",
                  desc: "Wi-Fi, one shore excursion per port, beer and wine with meals, dining, and enrichment programs are often included — simplifying vacation budgeting.",
                },
                {
                  num: "06",
                  title: "High Guest Satisfaction",
                  desc: "Viking consistently earns strong guest satisfaction ratings and industry awards — a reflection of its focus on service, quality, and meaningful travel experiences.",
                },
              ].map((feat, i) => (
                <div key={i} className="luc-why-feature">
                  <div className="luc-why-feature-num">{feat.num}</div>
                  <div className="luc-why-feature-body">
                    <h3 className="luc-why-feature-title">{feat.title}</h3>
                    <p className="luc-why-feature-desc">{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ POPULAR DESTINATIONS — TABBED SECTION ════════════════════════════ */}
      <section className="dac-reasons-section">
        <div className="dac-reasons-container">
          <div className="dac-reasons-header">
            <span className="dac-reasons-eyebrow">
              Popular Viking Cruise Destinations
            </span>
            <h2 className="dac-reasons-title">Where Does Viking Cruise?</h2>
            <div className="dac-reasons-accent"></div>
            <p className="dac-reasons-lead">
              Viking sails throughout the world.
            </p>
          </div>

          <div className="dac-reasons-tabs-nav">
            <button
              className={`dac-reasons-tab-btn ${activeReasonTab === 5 ? "active" : ""}`}
              onClick={() => setActiveReasonTab(5)}
            >
              <span className="dac-reasons-tab-icon-wrap">
                <Globe size={18} />
              </span>
              <div className="dac-reasons-tab-text-wrap">
                <span className="dac-reasons-tab-num">01</span>
                <span className="dac-reasons-tab-title">Europe</span>
              </div>
            </button>

            <button
              className={`dac-reasons-tab-btn ${activeReasonTab === 6 ? "active" : ""}`}
              onClick={() => setActiveReasonTab(6)}
            >
              <span className="dac-reasons-tab-icon-wrap">
                <Waves size={18} />
              </span>
              <div className="dac-reasons-tab-text-wrap">
                <span className="dac-reasons-tab-num">02</span>
                <span className="dac-reasons-tab-title">
                  Scandinavia & Northern Europe
                </span>
              </div>
            </button>

            <button
              className={`dac-reasons-tab-btn ${activeReasonTab === 7 ? "active" : ""}`}
              onClick={() => setActiveReasonTab(7)}
            >
              <span className="dac-reasons-tab-icon-wrap">
                <Compass size={18} />
              </span>
              <div className="dac-reasons-tab-text-wrap">
                <span className="dac-reasons-tab-num">03</span>
                <span className="dac-reasons-tab-title">Mediterranean</span>
              </div>
            </button>

            <button
              className={`dac-reasons-tab-btn ${activeReasonTab === 8 ? "active" : ""}`}
              onClick={() => setActiveReasonTab(8)}
            >
              <span className="dac-reasons-tab-icon-wrap">
                <Mountain size={18} />
              </span>
              <div className="dac-reasons-tab-text-wrap">
                <span className="dac-reasons-tab-num">04</span>
                <span className="dac-reasons-tab-title">Alaska</span>
              </div>
            </button>

            <button
              className={`dac-reasons-tab-btn ${activeReasonTab === 9 ? "active" : ""}`}
              onClick={() => setActiveReasonTab(9)}
            >
              <span className="dac-reasons-tab-icon-wrap">
                <Mountain size={18} />
              </span>
              <div className="dac-reasons-tab-text-wrap">
                <span className="dac-reasons-tab-num">05</span>
                <span className="dac-reasons-tab-title">Antarctica</span>
              </div>
            </button>
          </div>

          <div className="dac-reasons-tabs-content">
            {/* Tab 5 — Europe */}
            {activeReasonTab === 5 && (
              <div className="dac-reasons-tab-panel fade-in">
                <div className="dac-reasons-row dac-reasons-row--left-content">
                  <div className="dac-reasons-content">
                    <span className="dac-reasons-row-number">01</span>
                    <h3 className="dac-reasons-row-title">Europe</h3>
                    <p className="dac-reasons-row-desc">
                      One of Viking's strongest regions. Popular destinations
                      include Italy, France, Norway, Greece, Spain, and the
                      United Kingdom. Europe remains a favorite among Viking
                      guests.
                    </p>
                    <div className="dac-reasons-pills">
                      {[
                        "Italy",
                        "France",
                        "Norway",
                        "Greece",
                        "Spain",
                        "United Kingdom",
                      ].map((pill, idx) => (
                        <span key={idx} className="dac-reasons-pill">
                          <Globe size={12} style={{ marginRight: "6px" }} />
                          {pill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="dac-reasons-media">
                    <div className="dac-reasons-img-container">
                      <img
                        src={VikingEurope}
                        alt="Viking cruise Norway fjord scenic European destination"
                        className="dac-reasons-img"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 6 — Scandinavia & Northern Europe */}
            {activeReasonTab === 6 && (
              <div className="dac-reasons-tab-panel fade-in">
                <div className="dac-reasons-row dac-reasons-row--right-content">
                  <div className="dac-reasons-media">
                    <div className="dac-reasons-img-container">
                      <img
                        src={VikingIceland}
                        alt="Viking river cruise Nile Egypt cultural temple experience"
                        className="dac-reasons-img"
                      />
                    </div>
                  </div>
                  <div className="dac-reasons-content">
                    <span className="dac-reasons-row-number">02</span>
                    <h3 className="dac-reasons-row-title">
                      Scandinavia & Northern Europe
                    </h3>
                    <p className="dac-reasons-row-desc">
                      Viking's heritage makes Northern Europe especially
                      popular.
                    </p>
                    <div className="dac-reasons-bullets">
                      {[
                        "Norwegian Fjords",
                        "Baltic Capitals",
                        "Iceland",
                        "Scandinavian Cities",
                      ].map((bullet, idx) => (
                        <div key={idx} className="dac-reasons-bullet-item">
                          <Waves
                            size={16}
                            className="dac-reasons-bullet-icon"
                          />
                          <span>{bullet}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 7 — Mediterranean */}
            {activeReasonTab === 7 && (
              <div className="dac-reasons-tab-panel fade-in">
                <div className="dac-reasons-row dac-reasons-row--left-content">
                  <div className="dac-reasons-content">
                    <span className="dac-reasons-row-number">03</span>
                    <h3 className="dac-reasons-row-title">Mediterranean</h3>
                    <p className="dac-reasons-row-desc">
                      Mediterranean cruises offer ancient history, world-famous
                      landmarks, coastal villages, and culinary experiences.
                      Popular ports include Rome, Athens, Barcelona, and
                      Venice-region destinations.
                    </p>
                    <div className="dac-reasons-pills">
                      {[
                        "Ancient History",
                        "World-Famous Landmarks",
                        "Coastal Villages",
                        "Culinary Experiences",
                        "Rome",
                        "Athens",
                        "Barcelona",
                        "Venice Region",
                      ].map((pill, idx) => (
                        <span key={idx} className="dac-reasons-pill">
                          <Compass size={12} style={{ marginRight: "6px" }} />
                          {pill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="dac-reasons-media">
                    <div className="dac-reasons-img-container">
                      <img
                        src={VikingMediterranean}
                        alt="Viking Mediterranean cruise coastal landmarks culinary"
                        className="dac-reasons-img"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 8 — Alaska */}
            {activeReasonTab === 8 && (
              <div className="dac-reasons-tab-panel fade-in">
                <div className="dac-reasons-row dac-reasons-row--right-content">
                  <div className="dac-reasons-media">
                    <div className="dac-reasons-img-container">
                      <img
                        src={VikingAlaska}
                        alt="Viking Alaska cruise glacier wildlife scenic fjord"
                        className="dac-reasons-img"
                      />
                    </div>
                  </div>
                  <div className="dac-reasons-content">
                    <span className="dac-reasons-row-number">04</span>
                    <h3 className="dac-reasons-row-title">
                      Alaska — Wilderness, Wildlife & Scenic Cruising
                    </h3>
                    <p className="dac-reasons-row-desc">
                      Viking offers Alaska itineraries designed for travelers
                      interested in scenery, wildlife, and cultural experiences.
                    </p>
                    <div className="dac-reasons-bullets">
                      {[
                        "Glacier Viewing",
                        "Wildlife Encounters",
                        "Indigenous Cultural Experiences",
                        "Scenic Cruising",
                      ].map((bullet, idx) => (
                        <div key={idx} className="dac-reasons-bullet-item">
                          <Compass
                            size={16}
                            className="dac-reasons-bullet-icon"
                          />
                          <span>{bullet}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 9 — Antarctica */}
            {activeReasonTab === 9 && (
              <div className="dac-reasons-tab-panel fade-in">
                <div className="dac-reasons-row dac-reasons-row--left-content">
                  <div className="dac-reasons-content">
                    <span className="dac-reasons-row-number">05</span>
                    <h3 className="dac-reasons-row-title">
                      Antarctica — One of Viking's Most Extraordinary
                      Destinations
                    </h3>
                    <p className="dac-reasons-row-desc">
                      One of Viking's most extraordinary expedition
                      destinations. Antarctica remains one of the most
                      sought-after expedition cruise experiences.
                    </p>
                    <div className="dac-reasons-bullets">
                      {[
                        "Icebergs",
                        "Penguins",
                        "Wildlife",
                        "Remote Landscapes",
                      ].map((bullet, idx) => (
                        <div key={idx} className="dac-reasons-bullet-item">
                          <Mountain
                            size={16}
                            className="dac-reasons-bullet-icon"
                          />
                          <span>{bullet}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="dac-reasons-media">
                    <div className="dac-reasons-img-container">
                      <img
                        src={VikingAntarctica}
                        alt="Viking expedition Antarctica polar landscape wildlife"
                        className="dac-reasons-img"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>


      {/* ══ IS VIKING FAMILY-FRIENDLY? ═════════════════════════════ */}
      <section className="adg-section" style={{backgroundColor: "var(--bg-white)"}}>
        <div className="adg-container">
          <div className="adg-section-header" style={{ marginBottom: "60px" }}>
            <h2 className="adg-h2">Is Viking Family-Friendly?</h2>
            <div className="adg-accent-line"></div>
          </div>

          <div
            className="adg-split-layout"
            style={{ alignItems: "flex-start" }}
          >
            <div className="adg-content-card-side">
              <img
                  src={VikingExp3}
                alt="Adults-only Viking cruise experience"
                className="adg-side-image"
                style={{ height: "30vh", border: "1px solid var(--navy)" }}
              />

              <div className="adg-info-card">
                <div className="adg-card-meta">
                  <Compass size={28} />
                  <span className="adg-meta-label">
                    Adults-Only Cruise Experience
                  </span>
                </div>

                <p className="adg-card-lead">
                  Viking is not designed as a family cruise line.
                </p>

                <div className="adg-card-divider"></div>

                <p className="adg-card-subtext">
                  Viking ships are adults-only, and guests must generally be 18
                  years or older to sail.
                </p>

                <p className="adg-card-subtext" style={{ marginTop: "18px" }}>
                  The cruise line focuses on cultural enrichment, destination
                  exploration, and a quieter onboard atmosphere designed for
                  adult travelers.
                </p>
              </div>
            </div>

            <div className="adg-list-side">
              {[
                {
                  title: "No Kids Clubs",
                  icon: <Check size={20} />,
                },
                {
                  title: "No Character Experiences",
                  icon: <Star size={20} />,
                },
                {
                  title: "No Family Water Attractions",
                  icon: <Home size={20} />,
                },
                {
                  title: "No Children's Entertainment Programs",
                  icon: <Users size={20} />,
                },
                {
                  title: "Designed for Adult Travelers",
                  icon: <Compass size={20} />,
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

      {/* ══ COMPARISON TABLE ══════════════════════════════════════════════════ */}
      <section className="Asc-section Asc-bg-soft" id="Asc-fleet">
        <div className="Asc-container">
          <div className="Asc-section-header">
            <h2 className="Asc-h2">
              Viking Cruises vs Mainstream Cruise Lines
            </h2>
            <div className="Asc-accent-line"></div>
          </div>

          <div className="Asc-table-wrapper">
            <table className="Asc-fleet-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Viking Cruises</th>
                  <th>Mainstream Cruise Lines</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>Target Audience</strong>
                  </td>
                  <td>Adults (18+)</td>
                  <td>Families & Mixed Ages</td>
                </tr>
                <tr>
                  <td>
                    <strong>Kids Programs</strong>
                  </td>
                  <td>No</td>
                  <td>Yes</td>
                </tr>
                <tr>
                  <td>
                    <strong>Casinos</strong>
                  </td>
                  <td>No</td>
                  <td>Often Yes</td>
                </tr>
                <tr>
                  <td>
                    <strong>Water Parks</strong>
                  </td>
                  <td>No</td>
                  <td>Often Yes</td>
                </tr>
                <tr>
                  <td>
                    <strong>Destination Focus</strong>
                  </td>
                  <td>Very High</td>
                  <td>Moderate</td>
                </tr>
                <tr>
                  <td>
                    <strong>Enrichment Programs</strong>
                  </td>
                  <td>Extensive</td>
                  <td>Limited</td>
                </tr>
                <tr>
                  <td>
                    <strong>Atmosphere</strong>
                  </td>
                  <td>Relaxed & Sophisticated</td>
                  <td>Varies</td>
                </tr>
                <tr>
                  <td>
                    <strong>Cultural Experiences</strong>
                  </td>
                  <td>Strong Focus</td>
                  <td>Moderate</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ══ WHY LUXURY TRAVELERS APPRECIATE VIKING ════════════════════════ */}
      <section className="dac-families-section">
        <div className="dac-families-container">
          <div className="dac-families-grid">
            {/* Left Content Column */}
            <div className="dac-families-left">
              <div className="dac-families-heading-wrap">
                <h2 className="dac-families-title">
                  Why Luxury Travelers Appreciate Viking
                </h2>
                <div className="dac-families-accent"></div>
              </div>

              <p className="dac-families-intro">
                Many luxury-minded travelers choose Viking because of its unique
                approach to premium cruising.
              </p>

              <div className="dac-families-features">
                {[
                  {
                    title: "Sophisticated Atmosphere",
                    desc: "Elegant surroundings and refined experiences create a luxury environment without feeling overly formal.",
                  },
                  {
                    title: "Destination-Focused Experiences",
                    desc: "More emphasis is placed on exploring destinations, cultures, and local experiences throughout the journey.",
                  },
                  {
                    title: "Included Amenities",
                    desc: "Many key amenities are included, helping simplify vacation planning and budgeting.",
                  },
                  {
                    title: "Smaller Ships",
                    desc: "Intimate ship designs create a more relaxed atmosphere and personalized guest experience.",
                  },
                  {
                    title: "High Guest Satisfaction",
                    desc: "Viking has earned a strong reputation for quality service, comfort, and overall guest satisfaction.",
                  },
                ].map((feat, idx) => (
                  <div key={idx} className="dac-families-feature-item">
                    <div className="dac-families-feature-icon-box">
                      <Check size={18} strokeWidth={3} />
                    </div>

                    <div className="dac-families-feature-texts">
                      <h3 className="dac-families-feature-title">
                        {feat.title}
                      </h3>
                      <p className="dac-families-feature-desc">{feat.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

             
            </div>

            {/* Right Images Column */}
            <div className="dac-families-right">
              <div className="dac-families-image-wrapper">
                <div className="dac-families-img-card dac-families-img-card--primary">
                  <img
                    src={VikingExp4}
                    alt="Luxury travelers enjoying a Viking cruise experience"
                    className="dac-families-img"
                  />
                  <div className="dac-families-img-caption">
                    Sophisticated Luxury
                  </div>
                </div>

                <div className="dac-families-img-card dac-families-img-card--secondary">
                  <img
                    src={VikingExp5}
                    alt="Destination-focused Viking cruise travel experience"
                    className="dac-families-img"
                  />
                  <div className="dac-families-img-caption">
                    Destination Experiences
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ WHAT IS INCLUDED — ugt row ════════════════════════════════════════ */}
      <section
        className="ugt-components-section"
        style={{ backgroundColor: "var(--bg-white)" }}
      >
        <div className="Asc-container">
          <div className="ugt-components-header">
            <h2 className="adg-c-h2">What Is Included on a Viking Cruise?</h2>
            <div className="adg-c-accent-line"></div>
          </div>

          <div className="ugt-components-list">
            <div className="ugt-component-row">
              {/* LEFT IMAGE */}
              <div className="ugt-component-image-wrapper">
                <div className="ugt-component-image-container">
                  <img
                    src={VikingExp7}
                    alt="Viking cruise couple relaxing on deck with ocean views"
                    className="ugt-component-image"
                  />
                </div>
              </div>

              {/* RIGHT CONTENT */}
              <div className="ugt-component-content">
                <p className="ugt-component-text">
                  One reason travelers appreciate Viking is its relatively
                  inclusive pricing structure. Depending on the itinerary, fares
                  often include a meaningful range of amenities that simplify
                  budgeting and reduce surprise expenses.
                </p>

                <p className="ugt-component-text">
                  This helps travelers compare the true cost of a Viking cruise
                  more accurately against mainstream options — once inclusions
                  are factored in, the value proposition often becomes clearer.
                </p>

                <div className="ugt-questions-box">
                  <span className="ugt-questions-title">
                    Often Included in Viking Fares:
                  </span>
                  <ul className="ugt-questions-list">
                    {[
                      "Accommodations",
                      "Dining at Multiple Venues",
                      "Beer & Wine with Meals",
                      "Complimentary Wi-Fi",
                      "One Included Shore Excursion Per Port",
                      "Cultural Enrichment Programs",
                      "Fitness Facility Access",
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
                  Inclusions vary by itinerary and cruise type. Consult a Viking
                  travel specialist for details specific to your chosen voyage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ VIDEO SECTION ════════════════════════════════════════════════════ */}
      <section
        className="azs-video-section"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="azs-container">
          <div className="azs-section-header">
            <h2 className="azs-h2">
              Discover the Viking Cruise Experience
            </h2>
            <div className="azs-accent-line"></div>
            <p className="azs-video-intro">
              Explore Europe's legendary waterways aboard a Viking river cruise
              — sailing directly into the hearts of historic cities, guided by
              Viking's signature cultural enrichment programs and exceptional
              service.
            </p>
          </div>

          <div className="azs-video-wrapper">
            <div className="azs-video-frame">
              
              <iframe
                src="https://www.youtube.com/embed/JcegzKW4wys"
                title="Viking Cruises Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
        
            </div>
          </div>
        </div>
      </section>

      {/* VIKING CRUISES FOR MATURE TRAVELERS */}
      <section
        className="afc-section afc-bg-white"
        id="afc-luxury-travelers-miss"
      >
        <div className="afc-container">
          <div className="afc-section-header">
            <h2 className="afc-h2">Viking Cruises for Mature Travelers</h2>
            <div className="afc-accent-line"></div>
          </div>

          <div className="afc-split-layout">
            {/* Left Column */}
            <div className="afc-content-side">
              <div className="afc-insight-card">
                <p className="afc-lead-text">
                  <strong>
                    Viking appeals strongly to travelers seeking enriching,
                    destination-focused experiences in a relaxed environment.
                  </strong>
                </p>

                <div className="afc-why-box">
                  <span className="afc-why-title">Popular Among</span>
                  <p className="afc-why-text">
                    Retirees, empty nesters, cultural travelers, lifelong
                    learners, couples, and solo travelers often appreciate
                    Viking's thoughtful approach to cruising.
                  </p>
                </div>
              </div>

              <div className="afc-recommendations-wrapper">
                <h3 className="afc-sub-title">Viking Appeals To:</h3>

                <div className="afc-rec-grid">
                  {[
                    "Retirees",
                    "Empty Nesters",
                    "Cultural Travelers",
                    "Lifelong Learners",
                    "Couples",
                    "Solo Travelers",
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

            {/* Right Column */}
            <div className="afc-media-side">
              <div className="afc-image-wrapper">
                <img
                  src={VikingExp8}
                  alt="Mature travelers enjoying a Viking cruise experience"
                  className="afc-showcase-image"
                />
              </div>

              <div className="afc-strategy-box">
                <p className="afc-strategy-lead">Guests often prioritize:</p>

                <div className="afc-strategy-tags">
                  {[
                    "Learning",
                    "Exploration",
                    "History",
                    "Culture",
                    "Relaxation",
                    "Meaningful Travel Experiences",
                  ].map((tag, idx) => (
                    <span key={idx} className="afc-tag">
                      ✔ {tag}
                    </span>
                  ))}
                </div>

                <p className="afc-strategy-lead" style={{ marginTop: "20px" }}>
                  The atmosphere tends to be quieter and more relaxed than many
                  mainstream cruise lines.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IS VIKING CRUISES WORTH IT? */}
      <section
        className="Asc-section Asc-alt-bg"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="Asc-container">
          <div className="Asc-section-header">
            <h2>Is Viking Cruises Worth It?</h2>
            <div className="Asc-accent-line"></div>
          </div>

          <p className="Asc-intro-text">
            For many travelers, Viking offers excellent value. The right choice
            depends on your travel priorities.
          </p>

          <div className="Asc-who-grid">
            <div className="Asc-who-card Asc-who-yes">
              <h3 className="Asc-who-title">Worth It For</h3>

              <ul className="Asc-who-list">
                {[
                  "Cultural travelers",
                  "Couples",
                  "Retirees",
                  "History enthusiasts",
                  "Lifelong learners",
                  "Destination-focused travelers",
                  "River cruise enthusiasts",
                ].map((item, i) => (
                  <li key={i}>
                    <Check size={16} className="Asc-icon-green" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="Asc-who-card Asc-who-no">
              <h3 className="Asc-who-title">May Not Be Ideal For</h3>

              <ul className="Asc-who-list">
                {[
                  "Families with young children",
                  "Travelers seeking nightlife",
                  "Guests wanting large ship attractions",
                  "Budget-focused cruisers",
                  "Travelers seeking highly active onboard entertainment",
                ].map((item, i) => (
                  <li key={i}>
                    <X size={16} className="Asc-icon-red" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* ══ ANGELA HUGHES AUTHORITY BOX ══════════════════════════════════════ */}
      <section className="Adg-expert-section" id="Asc-expert-insight">
        <div className="Asc-container">
          <div className="Adg-expert-heading">
            <span className="Adg-expert-eyebrow">Luxury Travel Authority</span>
            <h2 className="Adg-expert-title">Meet Angela Hughes</h2>
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
                  CEO · Trips &amp; Ships Luxury Travel
                </p>
                <div className="Adg-expert-name-divider"></div>
                <p className="Adg-expert-countries">
                  <MapPin size={14} />
                  121+ Countries Visited
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
                      label: "Featured in major travel publications globally",
                    },
                    {
                      icon: <Ship size={16} />,
                      label:
                        "Specialist in luxury cruises, safaris, expeditions, and premium travel",
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
      {/* ══ FAQ ═══════════════════════════════════════════════════════════════ */}
      <section className="Asc-section Asc-bg-white" id="Asc-faq">
        <div className="Asc-container">
          <div className="Asc-section-header">
            <h2 className="Asc-h2">Frequently Asked Questions</h2>
            <div className="Asc-accent-line"></div>
            <p className="Asc-faq-intro">
              Everything you need to know about Viking Cruises.
            </p>
          </div>
          <FAQ />
        </div>
      </section>
      {/* ══ CTA ═══════════════════════════════════════════════════════════════ */}
      <section className="Asc-help-section">
        <div className="Asc-help-bg-wrap">
          <img
            src={VikingCta}
            alt="Viking Cruise destination scenic cultural travel experience"
            className="Asc-help-bg-img"
          />
          <div className="Asc-help-overlay"></div>
        </div>

        <div className="Asc-container">
          <div className="Asc-help-card">
            <div className="Asc-help-content">
              <div className="Asc-help-header">
                <span className="Asc-help-eyebrow">Viking Cruises Guide</span>
                <h2 className="Asc-help-h2">
                  The Best Voyages Are Measured <br /> by What You Discover
                </h2>
                <div className="Asc-help-accent"></div>
              </div>

              <div className="Asc-help-grid">
                <div className="Asc-help-info">
                  <p className="Asc-help-intro">
                    Viking Cruises has redefined what many travelers expect from
                    a cruise vacation.
                  </p>
                  <p className="Asc-help-intro">
                    Rather than focusing on casinos, water slides, and
                    large-scale attractions, Viking places the destination at
                    the center of the journey.
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
                  <br />
                  {readMore && (
                    <p className="Asc-help-intro">
                      Whether you're exploring medieval European cities on a
                      river cruise, crossing the Mediterranean on an elegant
                      ocean ship, or venturing to Antarctica on an expedition
                      vessel, Viking offers experiences designed for travelers
                      who want to learn, discover, and connect with the world
                      around them.
                      <br />
                      <br />
                      For curious travelers seeking meaningful journeys,
                      cultural enrichment, and sophisticated cruising, Viking
                      remains one of the most respected names in modern travel.
                      <br />
                      <br />
                      <strong>
                        Because the best voyages aren't measured by what happens
                        onboard. They're measured by the destinations,
                        discoveries, and memories you bring home.
                      </strong>
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
                  )}
                  <div className="Asc-help-btn-container">
                    <button className="Asc-help-cta-btn">
                      Explore Viking Cruise Vacations
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>

                <div className="Asc-help-list-box">
                  <h3 className="Asc-help-list-title">
                    Why Travelers Choose Viking:
                  </h3>
                  <ul className="Asc-help-bullets">
                    {[
                      "Destination-Focused Travel",
                      "Cultural Enrichment Programs",
                      "Award-Winning River Cruises",
                      "Elegant Ocean Voyages",
                      "Expedition Adventures",
                      "Adults-Only Sophisticated Atmosphere",
                      "Inclusive Pricing Structure",
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
                    <strong>
                      Contact Trips &amp; Ships Luxury Travel to explore Viking
                      river, ocean, and expedition cruise options.
                    </strong>
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

export default VikingCruises;
