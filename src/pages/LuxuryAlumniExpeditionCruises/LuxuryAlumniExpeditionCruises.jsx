import { useState, useEffect } from "react";
import {
  MapPin,
  Award,
  Check,
  Plus,
  Minus,
  ArrowRight,
  Star,
  Quote,
  Users,
  Network,
  HeartHandshake,
  BookOpen,
  Map,
  GraduationCap,
  Binoculars,
  Compass,
  Anchor,
  Ship,
  Waves,
} from "lucide-react";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela3.jpeg";
import HeroImage1 from "../../assets/LuxuryAlumniExpeditionCruises/LuxuryAlumni.jpg";
import HeroImage2 from "../../assets/LuxuryAlumniExpeditionCruises/LuxuryAlumni2.jpeg";
import HeroImage3 from "../../assets/LuxuryAlumniExpeditionCruises/Educational_Travelimage3.jpeg";
import CTAImage from "../../assets/LuxuryAlumniExpeditionCruises/StartPlan.jpeg";

import Antarctica from "../../assets/LuxuryAlumniExpeditionCruises/Antarctica.webp";
import Arctic from "../../assets/LuxuryAlumniExpeditionCruises/Arctic.webp";
import Alaska from "../../assets/LuxuryAlumniExpeditionCruises/Alaska.webp";
import Iceland from "../../assets/LuxuryAlumniExpeditionCruises/Iceland.webp";
import Galapagos from "../../assets/LuxuryAlumniExpeditionCruises/Gal_pagos_Islands.jpg";

import TravelExperience from "../../assets/LuxuryAlumniExpeditionCruises/Asia.jpeg";

import Experience from "../../assets/LuxuryAlumniTravel/LuxuryAlumni2.jpeg";
import Experience2 from "../../assets/LuxuryAlumniExpeditionCruises/LuxuryAlumni3.jpeg";


import { Helmet } from "react-helmet-async";
const expeditionDestinations = [
  {
    id: "antarctica",
    title: "Antarctica Expedition Cruises",
    badge: "Antarctica",
    icon: Compass,
    image: Antarctica,
    desc: "Antarctica remains one of the world's most coveted travel experiences.",
    columns: [
      {
        label: "Educational opportunities:",
        items: [
          "Climate science",
          "Environmental studies",
          "Marine biology",
          "Geology",
          "Conservation",
        ],
      },
      {
        label: "Travelers may experience:",
        items: [
          "Massive glaciers",
          "Penguin colonies",
          "Whales",
          "Icebergs",
          "Scientific research stations",
        ],
      },
    ],
    themeLabel: "Why Antarctica?",
    themeText:
      "An Antarctica expedition often becomes a once-in-a-lifetime journey that participants never forget.",
  },

  {
    id: "arctic",
    title: "Arctic Expedition Cruises",
    badge: "Arctic",
    icon: Anchor,
    image: Arctic,
    desc: "The Arctic provides a fascinating combination of natural beauty and scientific relevance.",
    columns: [
      {
        label: "Highlights include:",
        items: [
          "Polar bears",
          "Glaciers",
          "Remote communities",
          "Indigenous cultures",
          "Climate research",
        ],
      },
      {
        label: "Popular regions:",
        items: ["Greenland", "Svalbard", "Norwegian Arctic", "Canadian Arctic"],
      },
    ],
    themeLabel: "Ideal For:",
    themeText:
      "These voyages are ideal for institutions focused on environmental sciences and global studies.",
  },

  {
    id: "galapagos",
    title: "Galápagos Islands Expeditions",
    badge: "Galápagos",
    icon: Ship,
    image: Galapagos,
    desc: "The Galápagos Islands offer one of the world's most important destinations for educational travel.",
    columns: [
      {
        label: "Educational themes:",
        items: ["Evolution", "Biodiversity", "Conservation", "Ecology"],
      },
      {
        label: "Wildlife encounters:",
        items: [
          "Giant tortoises",
          "Blue-footed boobies",
          "Marine iguanas",
          "Sea lions",
        ],
      },
    ],
    themeLabel: "Educational Value:",
    themeText:
      "The Galápagos provides an unparalleled outdoor classroom experience.",
  },

  {
    id: "iceland",
    title: "Iceland Expedition Cruises",
    badge: "Iceland",
    icon: Waves,
    image: Iceland,
    desc: "Iceland combines adventure with accessibility.",
    columns: [
      {
        label: "Travelers experience:",
        items: [
          "Volcanoes",
          "Glaciers",
          "Waterfalls",
          "Geothermal landscapes",
          "Viking history",
        ],
      },
      {
        label: "Educational themes:",
        items: [
          "Geology",
          "Renewable energy",
          "Climate science",
          "Nordic culture",
        ],
      },
    ],
    themeLabel: "Why Iceland?",
    themeText:
      "A perfect combination of adventure, education, and accessibility for alumni travelers.",
  },

  {
    id: "alaska",
    title: "Alaska Expedition Cruises",
    badge: "Alaska",
    icon: MapPin,
    image: Alaska,
    desc: "Unlike traditional Alaska cruises, expedition voyages focus on immersive exploration.",
    columns: [
      {
        label: "Activities may include:",
        items: [
          "Zodiac excursions",
          "Wildlife observation",
          "Glacier exploration",
          "Naturalist-guided adventures",
        ],
      },
    ],
    themeLabel: "Ideal For:",
    themeText:
      "An outstanding option for universities introducing alumni to expedition travel.",
  },
];


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
        "Luxury travel agency specializing in alumni expedition cruises, educational travel programs, university travel experiences, donor travel programs, and luxury adventure travel.",
    },

    {
      "@type": "TravelAgency",
      "@id": "https://www.tripsandships.com/#travelagency",
      name: "Trips & Ships Luxury Travel",
      url: "https://www.tripsandships.com",
      description:
        "Luxury travel experts helping universities, alumni associations, advancement departments, and lifelong learning organizations create exceptional expedition cruise experiences.",
    },

    {
      "@type": "Person",
      "@id": "https://www.tripsandships.com/#angelahughes",
      name: "Angela Hughes",
      jobTitle: "CEO",
      worksFor: {
        "@id": "https://www.tripsandships.com/#organization",
      },
      description:
        "CEO of Trips & Ships Luxury Travel, Founder of Luxury Travel University, Travel Leaders Network Advisory Board Member, luxury travel educator, speaker, and travel expert with more than 40 years of experience and travel to over 121 countries.",
    },

    {
      "@type": "WebPage",
      "@id": "https://www.tripsandships.com/alumni-expedition-cruises",
      url: "https://www.tripsandships.com/alumni-expedition-cruises",
      name: "Alumni Expedition Cruises",
      description:
        "Luxury alumni expedition cruises to Antarctica, the Arctic, Galápagos Islands, Iceland, Alaska, and other extraordinary destinations designed for universities, alumni associations, donors, and lifelong learners.",
      isPartOf: {
        "@id": "https://www.tripsandships.com/#website",
      },
      about: {
        "@id": "https://www.tripsandships.com/#travelagency",
      },
    },

    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.tripsandships.com/alumni-expedition-cruises#breadcrumb",
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
          name: "Alumni Cruises",
          item: "https://www.tripsandships.com/alumni-cruises",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Alumni Expedition Cruises",
          item:
            "https://www.tripsandships.com/alumni-expedition-cruises",
        },
      ],
    },

    {
      "@type": "FAQPage",
      "@id":
        "https://www.tripsandships.com/alumni-expedition-cruises#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is an alumni expedition cruise?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "An alumni expedition cruise is an educational travel experience that combines exploration, learning, and luxury travel in remote destinations around the world.",
          },
        },

        {
          "@type": "Question",
          name: "What destinations are most popular for alumni expedition cruises?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Antarctica, the Arctic, Galápagos Islands, Iceland, and Alaska are among the most requested expedition cruise destinations.",
          },
        },

        {
          "@type": "Question",
          name: "Are expedition cruises physically demanding?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most expedition cruises offer varying activity levels, allowing travelers to choose experiences that match their comfort, interests, and mobility.",
          },
        },

        {
          "@type": "Question",
          name: "Are expedition cruises luxurious?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Modern expedition ships provide exceptional accommodations, fine dining, personalized service, and luxury amenities while exploring remote destinations.",
          },
        },

        {
          "@type": "Question",
          name: "Can faculty participate in expedition cruise programs?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. Faculty participation enhances educational value through lectures, destination insights, discussions, and specialized expertise.",
          },
        },

        {
          "@type": "Question",
          name: "Are expedition cruises suitable for donor travel programs?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Expedition cruises create memorable experiences that strengthen donor relationships, encourage meaningful engagement, and support institutional affinity.",
          },
        },

        {
          "@type": "Question",
          name: "How many travelers typically participate?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most university expedition cruise groups range from 20 to 80 participants depending on the destination, vessel, and institutional objectives.",
          },
        },

        {
          "@type": "Question",
          name: "How far in advance should expedition cruises be planned?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Universities should ideally begin planning expedition cruise programs 18 to 24 months before departure because availability is often limited.",
          },
        },

        {
          "@type": "Question",
          name: "Are educational lectures included on expedition cruises?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most expedition voyages feature expert presentations, destination-focused learning opportunities, scientific insights, and educational programming.",
          },
        },

        {
          "@type": "Question",
          name: "What wildlife might travelers see on expedition cruises?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Depending on the destination, travelers may encounter whales, penguins, polar bears, sea lions, seabirds, giant tortoises, and other remarkable wildlife species.",
          },
        },

        {
          "@type": "Question",
          name: "Why are expedition cruises growing in popularity?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Travelers increasingly seek authentic, educational, transformational, and immersive experiences that combine exploration with lifelong learning.",
          },
        },

        {
          "@type": "Question",
          name: "Can alumni expedition cruises be customized?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Universities can incorporate faculty lectures, private receptions, donor events, educational themes, and institution-branded experiences.",
          },
        },

        {
          "@type": "Question",
          name: "Why choose Trips & Ships Luxury Travel?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Trips & Ships Luxury Travel combines luxury travel expertise, expedition planning knowledge, educational travel experience, and university-focused program development.",
          },
        },

        {
          "@type": "Question",
          name: "How do universities begin planning an expedition cruise?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A consultation with Trips & Ships Luxury Travel helps determine institutional goals, traveler interests, destinations, educational objectives, and planning timelines.",
          },
        }
      ],
    },
  ],
};

function FAQ() {
  const [open, setOpen] = useState(null);

  const faqData = [
    {
      q: "What is an alumni expedition cruise?",
      a: "An alumni expedition cruise is an educational travel experience that combines exploration, learning, and luxury travel in remote destinations.",
    },

    {
      q: "What destinations are most popular?",
      a: "Antarctica, the Arctic, Galápagos Islands, Iceland, and Alaska are among the most requested expedition cruise destinations.",
    },

    {
      q: "Are expedition cruises physically demanding?",
      a: "Most offer varying activity levels, allowing travelers to choose experiences that match their comfort and mobility.",
    },

    {
      q: "Are expedition cruises luxurious?",
      a: "Yes. Modern expedition ships provide exceptional accommodations, dining, and service.",
    },

    {
      q: "Can faculty participate?",
      a: "Absolutely. Faculty involvement enhances educational value and traveler engagement.",
    },

    {
      q: "Are expedition cruises suitable for donor programs?",
      a: "Yes. They create memorable experiences that strengthen relationships and institutional affinity.",
    },

    {
      q: "How many travelers typically participate?",
      a: "Most university expedition groups range from 20 to 80 participants.",
    },

    {
      q: "How far in advance should planning begin?",
      a: "Ideally 18–24 months before departure due to limited availability.",
    },

    {
      q: "Are educational lectures included?",
      a: "Most expedition voyages feature expert presentations and destination-focused learning opportunities.",
    },

    {
      q: "What wildlife might travelers see?",
      a: "Depending on the destination, travelers may encounter whales, penguins, polar bears, sea lions, seabirds, and other remarkable species.",
    },

    {
      q: "Why are expedition cruises growing in popularity?",
      a: "Travelers increasingly seek authentic, educational, and transformational experiences.",
    },

    {
      q: "Can programs be customized?",
      a: "Yes. Universities can incorporate private receptions, faculty lectures, donor events, and branded experiences.",
    },

    {
      q: "Why choose Trips & Ships Luxury Travel?",
      a: "We combine luxury travel expertise, expedition planning knowledge, and university travel experience.",
    },

    {
      q: "How do universities begin planning an expedition cruise?",
      a: "A consultation helps determine goals, destinations, timelines, and traveler interests.",
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
const LuxuryAlumniExpeditionCruises = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [readMore, setReadMore] = useState(false);
  const images = [HeroImage1, HeroImage3, HeroImage2];
  const [activeDest, setActiveDest] = useState("antarctica");
  const currentDest =
    expeditionDestinations.find((d) => d.id === activeDest) ||
    expeditionDestinations[0];

  const ActiveIcon = currentDest.icon;

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
          Luxury Alumni Expedition Cruises | Antarctica, Arctic & Galápagos
          Alumni Travel
        </title>
        <meta
          name="title"
          content="Alumni Expedition Cruises for Universities & Alumni Associations"
        />
        <meta
          name="description"
          content="Discover luxury alumni expedition cruises to Antarctica, the Arctic, Galápagos, Iceland, and beyond. Create extraordinary educational travel experiences for alumni, donors, faculty, and lifelong learners."
        />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>
      <Nav />
      {/* HERO */}
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
            Alumni Expedition Cruises: Transforming Travel Into Extraordinary
            Educational Adventures
          </h1>

          <p>
            For alumni travelers seeking more than traditional sightseeing,
            expedition cruising offers something truly remarkable.
          </p>

          {/* READ MORE CONTENT */}
          {readMore && (
            <>
              <p>
                These immersive voyages combine exploration, education,
                scientific discovery, and luxury travel into unforgettable
                experiences that inspire lifelong learning and deeper
                connections with the world.
              </p>

              <p>
                From Antarctica&apos;s towering icebergs to the wildlife-rich
                Galápagos Islands and the remote landscapes of the Arctic,
                expedition cruises allow universities to offer alumni travel
                experiences unlike anything else available.
              </p>

              <p>
                At Trips &amp; Ships Luxury Travel, we help universities create
                extraordinary expedition programs that engage alumni, strengthen
                donor relationships, and showcase the educational values that
                define their institution.
              </p>

              <p>
                Led by luxury travel expert Angela Hughes, our team designs
                expedition travel experiences that balance adventure, comfort,
                and meaningful learning opportunities.
              </p>
            </>
          )}

          {/* READ MORE BUTTON */}
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
      {/* ════════════════════════════════════════
WHY EXPEDITION CRUISES ARE GROWING IN POPULARITY
═════════════════════════════════════════ */}
      <section className="adg-c-section adg-c-bg-dark" id="adg-why-dining">
        <div className="adg-c-container">
          <div className="adg-c-why-grid">
            {/* LEFT — text */}
            <div className="adg-c-why-left">
              <span className="adg-c-eyebrow adg-c-eyebrow-light">
                Alumni Expedition Cruise Benefits
              </span>

              <h2 className="adg-c-h2 adg-c-h2-light">
                Why Expedition Cruises Are Growing in Popularity
              </h2>

              <div className="aac-accent-line aac-accent-white"></div>

              <p className="adg-c-lead adg-c-lead-light">
                Today's alumni travelers increasingly seek transformational
                experiences.
              </p>

              <p className="adg-c-body adg-c-body-light">
                Many have already visited major tourist destinations and are now
                searching for journeys that provide discovery, exploration,
                education, personal growth, authentic experiences, and
                meaningful connections.
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
                <p className="adg-c-body adg-c-body-light">
                  Expedition cruising delivers all of these benefits while
                  maintaining the luxury service levels expected by
                  sophisticated travelers. Unlike traditional cruises,
                  expedition voyages focus on the destination itself rather than
                  onboard entertainment. Every day becomes an opportunity to
                  learn, explore, and engage with the natural world.
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
            </div>

            {/* RIGHT — pill grid */}
            <div className="adg-c-why-right">
              <div className="adg-c-why-card">
                <span className="adg-c-why-card-label">
                  Alumni travelers seek:
                </span>

                <div className="adg-c-pill-grid">
                  {[
                    "Discovery",
                    "Exploration",
                    "Education",
                    "Personal Growth",
                    "Authentic Experiences",
                    "Meaningful Connections",
                  ].map((item, i) => (
                    <div key={i} className="adg-c-pill">
                      <span className="adg-c-pill-check">
                        <Check size={13} strokeWidth={3} />
                      </span>

                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ── WHY EXPEDITION CRUISES APPEAL TO ALUMNI ASSOCIATIONS ───── */}
      <section
        className="ugt-components-section"
        id="ugt-components"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="ugt-components-container">
          <div className="ugt-components-header">
            <h2 className="ugt-components-title">
              Why Expedition Cruises Appeal to Alumni Associations
            </h2>
            <div className="adg-c-accent-line"></div>
          </div>

          <div className="ugt-components-list">
            <div className="ugt-component-row">
              <div className="ugt-component-image-wrapper">
                <div className="ugt-component-image-container">
                  <img
                    src={Experience2}
                    alt="Alumni Expedition Cruise Experience"
                    className="ugt-component-image"
                  />
                </div>
              </div>

              <div className="ugt-component-content">
                <h3 className="ugt-component-subtitle">
                  Engaged Travelers Who Value Learning and Exploration
                </h3>

                <p className="ugt-component-text">
                  Expedition travel attracts highly engaged travelers who value
                  learning, discovery, and meaningful exploration.
                </p>

                <div className="ugt-questions-box">
                  <span className="ugt-questions-title">
                    These travelers often:
                  </span>

                  <ul className="ugt-questions-list">
                    {[
                      "Participate actively in university programs",
                      "Support lifelong learning initiatives",
                      "Value educational experiences",
                      "Seek meaningful travel opportunities",
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
                  As a result, expedition cruises frequently attract alumni who
                  become strong ambassadors for future travel programs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ── WHAT MAKES EXPEDITION CRUISES DIFFERENT? ─────────────────────── */}
      <section className="ugt-diff-section" id="ugt-different">
        <div className="ugt-diff-container">
          {/* Header */}
          <div className="ugt-diff-header">
            <h2 className="ugt-diff-title">
              What Makes Expedition Cruises Different?
            </h2>

            <div className="adg-c-accent-line"></div>

            <p className="ugt-diff-intro">
              Expedition cruising is designed for travelers who want deeper
              experiences. Instead of visiting crowded tourist destinations,
              expedition ships access remote regions that few people ever see.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="ugt-diff-grid">
            {[
              {
                icon: <BookOpen size={28} strokeWidth={1.5} />,
                number: "01",
                title: "Expert-Led Exploration",
                body: "Scientists, naturalists, historians, geologists, and researchers provide educational insights throughout the voyage.",
              },
              {
                icon: <Users size={28} strokeWidth={1.5} />,
                number: "02",
                title: "Small Group Experiences",
                body: "Smaller ships allow greater flexibility and more personalized experiences.",
              },
              {
                icon: <Binoculars size={28} strokeWidth={1.5} />,
                number: "03",
                title: "Wildlife Encounters",
                body: "Observe wildlife in their natural habitats with expert interpretation.",
              },
              {
                icon: <GraduationCap size={28} strokeWidth={1.5} />,
                number: "04",
                title: "Hands-On Learning",
                body: "Travelers gain a deeper understanding of ecosystems, cultures, history, and conservation efforts.",
              },
              {
                icon: <Map size={28} strokeWidth={1.5} />,
                number: "05",
                title: "Extraordinary Access",
                body: "Expedition vessels can reach destinations inaccessible to larger ships.",
              },
            ].map((card, i) => (
              <div key={i} className="ugt-diff-card">
                <div className="ugt-diff-card-top">
                  <div className="ugt-diff-icon">{card.icon}</div>
                  <span className="ugt-diff-number">{card.number}</span>
                </div>

                <h3 className="ugt-diff-card-title">{card.title}</h3>

                <p className="ugt-diff-card-body">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MOST POPULAR ALUMNI EXPEDITION CRUISE DESTINATIONS ───── */}
      <section className="luc-destinations-section" id="luc-destinations">
        <div className="luc-destinations-container">
          <div className="luc-destinations-header">
            <h2 className="luc-destinations-title">
              Most Popular Alumni Expedition Cruise Destinations
            </h2>

            <div className="adg-c-accent-line"></div>

            <p className="luc-destinations-intro">
              From Antarctica's frozen wilderness to the wildlife-rich Galápagos
              Islands, these extraordinary expedition destinations provide
              unparalleled educational, scientific, and exploration
              opportunities for alumni travelers.
            </p>
          </div>

          {/* Layout */}
          <div className="luc-dest-layout">
            {/* Sidebar nav */}
            <nav className="luc-dest-nav">
              {expeditionDestinations.map((item) => {
                const NavIcon = item.icon;
                const isActive = activeDest === item.id;

                return (
                  <button
                    key={item.id}
                    className={`luc-dest-nav-btn ${
                      isActive ? "luc-dest-nav-btn--active" : ""
                    }`}
                    onClick={() => setActiveDest(item.id)}
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
            <div className="luc-dest-panel" key={activeDest}>
              {/* Image */}
              <div className="luc-dest-img-wrap">
                <img
                  src={currentDest.image}
                  alt={currentDest.title}
                  className="luc-dest-img"
                />

                <div className="luc-dest-img-overlay">
                  <div className="luc-dest-img-icon">
                    <ActiveIcon size={22} strokeWidth={1.6} />
                  </div>

                  <span className="luc-dest-img-title">
                    {currentDest.title}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="luc-dest-panel-desc">{currentDest.desc}</p>

              {/* Columns */}
              <div className="luc-dest-columns">
                {currentDest.columns.map((col, cIdx) => (
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
                    {currentDest.themeLabel}
                  </span>

                  <p className="luc-dest-theme-note-text">
                    {currentDest.themeText}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── EDUCATIONAL BENEFITS OF ALUMNI EXPEDITION CRUISES ───── */}
      <section className="luc-why-section" id="luc-why">
        <div className="luc-why-container">
          {/* LEFT — stacked images */}
          <div className="luc-why-images">
            <div className="luc-why-img-main-wrap">
              <img
                src={TravelExperience}
                alt="Alumni expedition cruise experience"
                className="luc-why-img-main"
              />
              <div className="luc-why-img-overlay"></div>
            </div>

            <div className="luc-why-img-accent-wrap">
              <img
                src={Experience}
                alt="Educational expedition travel"
                className="luc-why-img-accent"
              />

              <div className="luc-why-img-badge">
                <span className="luc-why-badge-num">5</span>
                <span className="luc-why-badge-text">Educational Benefits</span>
              </div>
            </div>
          </div>

          {/* RIGHT — content */}
          <div className="luc-why-content">
            <h2 className="luc-why-title">
              Educational Benefits of Alumni Expedition Cruises
            </h2>

            <div className="aac-accent-line aac-accent-white"></div>

            <p className="luc-why-intro">
              Universities are uniquely positioned to enhance expedition
              experiences through education.
            </p>

            <p className="luc-why-subintro">Programs may include:</p>

            <div className="luc-why-features">
              <div className="luc-why-feature">
                <div className="luc-why-feature-num">01</div>

                <div className="luc-why-feature-body">
                  <h3 className="luc-why-feature-title">
                    Faculty Presentations
                  </h3>

                  <p className="luc-why-feature-desc">
                    Professors provide context before and during the journey.
                  </p>
                </div>
              </div>

              <div className="luc-why-feature">
                <div className="luc-why-feature-num">02</div>

                <div className="luc-why-feature-body">
                  <h3 className="luc-why-feature-title">
                    Destination-Specific Learning
                  </h3>

                  <p className="luc-why-feature-desc">
                    Educational content tailored to the region being explored.
                  </p>
                </div>
              </div>

              <div className="luc-why-feature">
                <div className="luc-why-feature-num">03</div>

                <div className="luc-why-feature-body">
                  <h3 className="luc-why-feature-title">
                    Scientific Exploration
                  </h3>

                  <p className="luc-why-feature-desc">
                    Participants gain firsthand exposure to environmental and
                    scientific concepts.
                  </p>
                </div>
              </div>

              <div className="luc-why-feature">
                <div className="luc-why-feature-num">04</div>

                <div className="luc-why-feature-body">
                  <h3 className="luc-why-feature-title">
                    Cultural Understanding
                  </h3>

                  <p className="luc-why-feature-desc">
                    Travelers engage with local communities and traditions.
                  </p>
                </div>
              </div>

              <div className="luc-why-feature">
                <div className="luc-why-feature-num">05</div>

                <div className="luc-why-feature-body">
                  <h3 className="luc-why-feature-title">
                    Lifelong Learning Opportunities
                  </h3>

                  <p className="luc-why-feature-desc">
                    Expedition travel encourages curiosity, critical thinking,
                    and discovery.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* VIDEO SECTION */}
      {/* <section
        className="Asc-video-section"
        id="Asc-video"
        style={{ backgroundColor: "var(--navy-soft)" }}
      >
        <div className="Asc-container">
          <div className="Asc-section-header">
            <h2 className="Asc-h2">Closer to the World with Azamara</h2>
            <div className="Asc-accent-line"></div>

            <p className="Asc-video-intro">
              Experience how Azamara’s smaller ships, longer stays, and
              immersive journeys create more meaningful connections with the
              world. Discover destinations in a more personal, authentic, and
              unhurried way — where every horizon feels closer.
            </p>
          </div>

          <div className="Asc-video-wrapper">
            <div className="Asc-video-frame">
              <iframe
                src="https://www.youtube.com/embed/GQj8QXkJeik"
                title="Closer to the World with Azamara"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section> */}
      {/* VIDEO SECTION */}
      {/* <section
        className="Asc-video-section"
        id="Asc-video"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="Asc-container">
          <div className="Asc-section-header">
            <h2 className="Asc-h2">Lens of a Local: Pasta Making in Italy</h2>

            <div className="Asc-accent-line"></div>

            <p className="Asc-video-intro">
              Experience Azamara’s immersive destination-focused travel through
              this authentic pasta-making journey in Civitavecchia, Italy, where
              local culture, culinary traditions, and meaningful travel
              experiences come together beyond the typical cruise itinerary.
            </p>
          </div>

          <div className="Asc-video-wrapper">
            <div className="Asc-video-frame">
              <iframe
                src="https://www.youtube.com/embed/VUWKldvItdU"
                title="Azamara's Lens of a Local: Pasta Making in Civitavecchia, Italy"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section> */}

      {/* ── EXPEDITION CRUISES AND DONOR ENGAGEMENT ───────────────────────────── */}
      <section className="ugt-advantage-section" id="ugt-advantage">
        <div className="ugt-advantage-container">
          <div className="ugt-advantage-header">
            <span className="ugt-advantage-eyebrow">
              Advancement & Alumni Engagement
            </span>

            <h2 className="ugt-advantage-title">
              Expedition Cruises and Donor Engagement
            </h2>

            <div className="Asc-accent-line"></div>

            <p className="ugt-advantage-intro">
              Advancement teams increasingly recognize the value of expedition
              travel.
            </p>

            <h3 className="ugt-approach-title">
              Extended time together in extraordinary settings creates
              opportunities for:
            </h3>
          </div>

          <div className="ugt-advantage-grid">
            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <Users size={28} strokeWidth={1.5} />
              </div>

              <h4 className="ugt-card-title">Relationship Building</h4>

              <p className="ugt-card-desc">
                Meaningful conversations occur naturally throughout the journey.
              </p>
            </div>

            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <HeartHandshake size={28} strokeWidth={1.5} />
              </div>

              <h4 className="ugt-card-title">Shared Experiences</h4>

              <p className="ugt-card-desc">
                Transformational experiences strengthen emotional connections.
              </p>
            </div>

            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <Network size={28} strokeWidth={1.5} />
              </div>

              <h4 className="ugt-card-title">Institutional Affinity</h4>

              <p className="ugt-card-desc">
                Travelers often deepen their connection to the university
                through educational exploration.
              </p>
            </div>

            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <Award size={28} strokeWidth={1.5} />
              </div>

              <h4 className="ugt-card-title">Long-Term Engagement</h4>

              <p className="ugt-card-desc">
                Many participants become repeat travelers and active supporters.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RIVER CRUISES VS EXPEDITION CRUISES */}
      <section
        className="Asc-section Asc-bg-white"
        id="Asc-fleet"
        style={{ backgroundColor: "var(--bg-white)" }}
      >
        <div className="Asc-container">
          <div className="Asc-section-header">
            <h2 className="Asc-h2">River Cruises vs Expedition Cruises</h2>

            <div className="Asc-accent-line"></div>
          </div>

          <div className="Asc-table-wrapper">
            <table className="Asc-fleet-table">
              <thead>
                <tr>
                  <th>River Cruises</th>
                  <th>Expedition Cruises</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Cultural focus</td>
                  <td>Exploration focus</td>
                </tr>

                <tr>
                  <td>Historic cities</td>
                  <td>Remote destinations</td>
                </tr>

                <tr>
                  <td>Relaxed pace</td>
                  <td>Active discovery</td>
                </tr>

                <tr>
                  <td>Luxury immersion</td>
                  <td>Adventure learning</td>
                </tr>

                <tr>
                  <td>European itineraries</td>
                  <td>Global expedition regions</td>
                </tr>

                <tr>
                  <td>Ideal for first-time travelers</td>
                  <td>Ideal for explorers</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div
            className="Asc-overview-highlight-box"
            style={{ marginTop: "30px" }}
          >
            <p className="Asc-overview-highlight-text">
              Both options can be highly successful depending on alumni
              interests and institutional objectives.
            </p>
          </div>
        </div>
      </section>
      {/* ── COMMON ALUMNI EXPEDITION CRUISE PLANNING MISTAKES ───────────────────────── */}
      <section className="Lfsg-section Lfsg-bg-dark" id="Lfsg-challenges">
        <div className="Lfsg-container">
          <div className="Lfsg-section-header">
            <h2 className="Lfsg-h2-white">
              Common Mistakes Universities Make When Planning Expedition
              Programs
            </h2>

            <div className="Lfsg-accent-line-white" />
          </div>

          <div className="Lfsg-mistakes-grid">
            {[
              {
                title: "Underestimating Demand",
                desc: "Expedition travel continues to grow rapidly among affluent travelers.",
              },

              {
                title: "Waiting Too Long to Secure Space",
                desc: "Many expedition vessels accommodate fewer than 200 passengers. Availability often fills years in advance.",
              },

              {
                title: "Choosing the Wrong Partner",
                desc: "Expedition travel requires specialized expertise.",
              },

              {
                title: "Lack of Educational Integration",
                desc: "Universities can significantly enhance traveler experiences through faculty participation.",
              },

              {
                title: "Focusing Only on Adventure",
                desc: "The best expedition programs balance exploration, comfort, and learning.",
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
        </div>
      </section>
      {/* WHO SHOULD CHOOSE */}
      <section className="Asc-section Asc-bg-soft" id="Asc-who">
        <div className="Asc-container">
          <div className="Asc-section-header">
            <h2 className="Asc-h2">
              Who Is Alumni Expedition Travel Best For?
            </h2>
            <div className="Asc-accent-line"></div>
          </div>

          <div className="Asc-who-grid">
            <div className="Asc-who-card Asc-who-yes">
              <h3 className="Asc-who-title">Best For</h3>

              <ul className="Asc-who-list">
                {[
                  "Alumni associations",
                  "Lifelong learning programs",
                  "Environmental science departments",
                  "Advancement offices",
                  "Donor engagement initiatives",
                  "Adventure-minded alumni travelers",
                  "Educational travel organizations",
                ].map((item, i) => (
                  <li key={i}>
                    <Check size={16} className="Asc-icon-green" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="Asc-who-card Asc-who-no">
              <h3 className="Asc-who-title">May Not Be Best For</h3>

              <ul className="Asc-who-list">
                {[
                  "Travelers seeking traditional resort-style vacations",
                  "Large-group entertainment-focused travel",
                  "Budget-oriented travel programs",
                ].map((item, i) => (
                  <li key={i}>
                    <Minus size={16} className="Asc-icon-muted" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* ════════════════════════════════════════
WHY UNIVERSITIES CHOOSE TRIPS & SHIPS LUXURY TRAVEL
════════════════════════════════════════ */}
      <section
        className="adg-c-section adg-c-bg-dark"
        id="adg-university-travel"
      >
        <div className="adg-c-container">
          <div className="adg-c-why-grid">
            {/* LEFT — text */}
            <div className="adg-c-why-left">
              <span className="adg-c-eyebrow adg-c-eyebrow-light">
                Alumni Expedition Cruise Specialists
              </span>

              <h2 className="adg-c-h2 adg-c-h2-light">
                Why Universities Choose Trips &amp; Ships Luxury Travel
              </h2>

              <div className="aac-accent-line aac-accent-white"></div>

              <p className="adg-c-lead adg-c-lead-light">
                Trips &amp; Ships Luxury Travel helps institutions create
                expedition programs that align with engagement and educational
                goals.
              </p>

              <p className="adg-c-body adg-c-body-light">
                Our expertise combines luxury travel planning, educational
                programming, alumni engagement, and donor-focused experiences to
                deliver meaningful expedition journeys.
              </p>
            </div>

            {/* RIGHT — pill grid */}
            <div className="adg-c-why-right">
              <div className="adg-c-why-card">
                <span className="adg-c-why-card-label">
                  Our Expertise Includes:
                </span>

                <div className="adg-c-pill-grid">
                  {[
                    "Expedition Cruise Planning",
                    "Educational Programming Development",
                    "Alumni Engagement Strategy",
                    "Donor Travel Programs",
                    "White-Glove Service",
                  ].map((item, i) => (
                    <div key={i} className="adg-c-pill">
                      <span className="adg-c-pill-check">
                        <Check size={13} strokeWidth={3} />
                      </span>

                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* WHY TRIPS & SHIPS LUXURY TRAVEL */}
      <section className="Adg-expert-section" id="Asc-expert-insight">
        <div className="Asc-container">
          {/* TOP HEADING */}
          <div className="Adg-expert-heading">
            <span className="Adg-expert-eyebrow">
              Luxury & Expedition Travel Leadership
            </span>

            <h2 className="Adg-expert-title">
              Angela Hughes: A Trusted Leader in Luxury and Expedition Travel
            </h2>

            <div className="Adg-expert-divider"></div>
          </div>

          {/* MAIN GRID */}
          <div className="Adg-expert-grid">
            {/* LEFT SIDE */}
            <div className="Adg-expert-image-col">
              <div className="Adg-expert-portrait-wrap">
                <img
                  src={AboutImage}
                  alt="Angela Hughes - Luxury and Expedition Travel Expert"
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

            {/* RIGHT SIDE */}
            <div className="Adg-expert-content-col">
              {/* INTRO QUOTE */}
              <div className="Adg-expert-quote-box">
                <div className="Adg-expert-quote-icon">
                  <Quote size={36} />
                </div>

                <blockquote className="Adg-expert-quote-text">
                  Universities benefit from Angela Hughes' extensive experience
                  in global travel.
                </blockquote>
              </div>

              {/* CREDENTIALS */}
              <div className="Adg-expert-credentials-box">
                <h4 className="Adg-expert-credentials-title">
                  <Award size={16} />
                  Her Credentials Include
                </h4>

                <div className="Adg-expert-credentials-grid">
                  {[
                    "More than 40 years in the travel industry",
                    "Travel to over 121 countries",
                    "Founder of Luxury Travel University",
                    "Global luxury travel educator",
                    "Travel Leaders Network Advisory Board Member",
                    "Industry award recipient",
                    "International speaker and columnist",
                  ].map((item, i) => (
                    <div className="Adg-expert-list-item" key={i}>
                      <span className="Adg-expert-list-icon">
                        <Star size={16} />
                      </span>

                      <span className="Adg-expert-list-label">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* BOTTOM NOTE */}
              <div
                className="Adg-expert-quote-box"
                style={{ marginTop: "24px" }}
              >
                <blockquote className="Adg-expert-quote-text">
                  Her expertise helps institutions confidently offer world-class
                  expedition experiences.
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ */}
      <section className="Asc-section Asc-bg-white" id="Asc-faq">
        <div className="Asc-container">
          <div className="Asc-section-header">
            <h2 className="Asc-h2">Frequently Asked Questions</h2>
            <div className="Asc-accent-line"></div>
            <p className="Asc-faq-intro">
              Everything you need to know about choosing the right Azamara ship.
            </p>
          </div>
          <FAQ />
        </div>
      </section>
      {/* CTA */}
      <section className="Asc-help-section">
        <div className="Asc-help-bg-wrap">
          <img
            src={CTAImage}
            alt="Alumni expedition cruise experience"
            className="Asc-help-bg-img"
          />
          <div className="Asc-help-overlay"></div>
        </div>

        <div className="Asc-container">
          <div className="Asc-help-card">
            <div className="Asc-help-content">
              <div className="Asc-help-header">
                <span className="Asc-help-eyebrow">
                  Alumni Expedition Cruise Programs
                </span>

                <h2 className="Asc-help-h2">
                  Inspire Discovery Through Alumni Expedition Travel
                </h2>

                <div className="Asc-help-accent"></div>
              </div>

              <div className="Asc-help-grid">
                <div className="Asc-help-info">
                  <p className="Asc-help-intro">
                    Expedition cruises offer universities a unique opportunity
                    to combine education, exploration, and engagement in some of
                    the world's most extraordinary destinations.
                  </p>

                  <p className="Asc-help-intro">
                    Whether exploring Antarctica's frozen wilderness, studying
                    wildlife in the Galápagos, or discovering Arctic landscapes,
                    alumni travelers gain experiences that inspire curiosity and
                    lifelong learning.
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
                      With Angela Hughes' expertise and Trips &amp; Ships Luxury
                      Travel's proven planning process, your institution can
                      create an expedition travel program that delivers
                      exceptional value, deeper engagement, and unforgettable
                      memories.
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
                      Start Planning Your Expedition Cruise
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>

                <div className="Asc-help-list-box">
                  <h3 className="Asc-help-list-title">
                    Benefits of Alumni Expedition Cruises:
                  </h3>

                  <ul className="Asc-help-bullets">
                    {[
                      "Educational exploration opportunities",
                      "Unique wildlife and nature encounters",
                      "Meaningful alumni engagement",
                      "Donor relationship building",
                      "Transformational travel experiences",
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
                    Contact Trips &amp; Ships Luxury Travel today to begin
                    planning your custom alumni expedition cruise experience.
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

export default LuxuryAlumniExpeditionCruises;
