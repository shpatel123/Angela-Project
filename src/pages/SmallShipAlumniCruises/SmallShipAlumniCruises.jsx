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
  Compass,
  Anchor,
  Ship,
  Waves,
} from "lucide-react";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela.jpeg";
import HeroImage1 from "../../assets/SmallShipAlumniCruises/Small_Ship.webp";
import HeroImage2 from "../../assets/SmallShipAlumniCruises/Small_Ship2.jpg";
import HeroImage3 from "../../assets/SmallShipAlumniCruises/Small_Ship3.jpg";
import CTAImage from "../../assets/SmallShipAlumniCruises/Planning.jpg";

import Mediterian from "../../assets/SmallShipAlumniCruises/Mediterian.jpg";
import NorthEurope from "../../assets/SmallShipAlumniCruises/North_Europe.jpg";
import Britislen from "../../assets/SmallShipAlumniCruises/Britislen.jpg";
import Galapagos from "../../assets/SmallShipAlumniCruises/Galapagos.jpg";
import SmallShip from "../../assets/SmallShipAlumniCruises/Small_Ship_Cruise.jpg";
import BestDetination from "../../assets/SmallShipAlumniCruises/Best_Destination.jpg";
import FineDining from "../../assets/SmallShipAlumniCruises/Fine_Dining.jpg";
import SmallShipExperience from "../../assets/SmallShipAlumniCruises/Small_Ship_Experience.jpg";
import Alaska from "../../assets/LuxuryAlumniExpeditionCruises/Alaska.webp";
import TravelExperience from "../../assets/SmallShipAlumniCruises/StartPlan.jpg";



import { Helmet } from "react-helmet-async";
const smallShipDestinations = [
  

  {
    id: "northern-europe",
    title: "Northern Europe & Baltic Cruises",
    badge: "Northern Europe",
    icon: Anchor,
    image: NorthEurope,
    desc: "Small ships provide access to fascinating ports and cultural destinations throughout Northern Europe and the Baltic region.",
    columns: [
      {
        label: "Destinations include:",
        items: ["Norway", "Sweden", "Denmark", "Finland", "Estonia"],
      },
      {
        label: "Popular topics:",
        items: [
          "Viking history",
          "Sustainability",
          "Scandinavian culture",
          "Modern design",
        ],
      },
    ],
    themeLabel: "Educational Value:",
    themeText:
      "An outstanding region for institutions interested in history, innovation, sustainability, and cultural exploration.",
  },
  {
    id: "mediterranean",
    title: "Mediterranean Small Ship Cruises",
    badge: "Mediterranean",
    icon: Compass,
    // image: Mediterian,
    desc: "The Mediterranean remains one of the most popular regions for alumni travel, combining world-class cultural experiences with exceptional small ship cruising.",
    columns: [
      {
        label: "Highlights include:",
        items: ["Greece", "Italy", "Croatia", "France", "Spain"],
      },
      {
        label: "Educational themes:",
        items: [
          "Ancient history",
          "Art and architecture",
          "Culinary traditions",
          "Cultural heritage",
        ],
      },
    ],
    themeLabel: "Why the Mediterranean?",
    themeText:
      "A perfect combination of history, culture, education, and luxury travel that consistently appeals to alumni travelers.",
  },

  {
    id: "british-isles",
    title: "British Isles Small Ship Cruises",
    badge: "British Isles",
    icon: Ship,
    image: Britislen,
    desc: "The British Isles offer an ideal combination of history, culture, literature, and scenic coastal exploration.",
    columns: [
      {
        label: "Ideal for alumni interested in:",
        items: [
          "History",
          "Literature",
          "Genealogy",
          "Politics",
          "Architecture",
        ],
      },
      {
        label: "Explore:",
        items: ["England", "Scotland", "Wales", "Ireland"],
      },
    ],
    themeLabel: "Why the British Isles?",
    themeText:
      "Small ships can access charming ports and coastal communities that larger vessels often cannot reach.",
  },

  {
    id: "alaska",
    title: "Coastal Alaska Small Ship Cruises",
    badge: "Coastal Alaska",
    icon: Waves,
    image: Alaska,
    desc: "Small ship Alaska itineraries provide immersive experiences that go far beyond traditional cruise routes.",
    columns: [
      {
        label: "Travelers may enjoy:",
        items: [
          "Glacier exploration",
          "Wildlife encounters",
          "Naturalist-led excursions",
          "Remote wilderness access",
        ],
      },
      {
        label: "Educational themes:",
        items: [
          "Conservation",
          "Marine ecosystems",
          "Climate science",
          "Native cultures",
        ],
      },
    ],
    themeLabel: "Why Alaska?",
    themeText:
      "An exceptional destination for travelers seeking adventure, education, and meaningful interaction with nature.",
  },

  {
    id: "galapagos",
    title: "Galápagos & Expedition Regions",
    badge: "Galápagos",
    icon: MapPin,
    image: Galapagos,
    desc: "For institutions seeking educational travel opportunities, small expedition ships provide unparalleled access to wildlife and natural wonders.",
    columns: [
      {
        label: "Educational themes:",
        items: ["Evolution", "Biodiversity", "Ecology", "Conservation"],
      },
      {
        label: "Experience:",
        items: [
          "Unique wildlife",
          "Scientific discovery",
          "Natural wonders",
          "Expert-led exploration",
        ],
      },
    ],
    themeLabel: "Educational Excellence:",
    themeText:
      "One of the world's most valuable destinations for lifelong learning, scientific exploration, and alumni engagement.",
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
        "Luxury travel agency specializing in luxury alumni travel, alumni cruises, educational travel programs, expedition cruises, river cruises, and premium travel experiences.",
    },

    {
      "@type": "TravelAgency",
      "@id": "https://www.tripsandships.com/#travelagency",
      name: "Trips & Ships Luxury Travel",
      url: "https://www.tripsandships.com",
      description:
        "Luxury travel experts helping universities, alumni associations, affinity groups, and lifelong learners create exceptional travel experiences.",
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
        "CEO of Trips & Ships Luxury Travel, Founder of Luxury Travel University, Travel Leaders Network Advisory Board member, global luxury travel speaker and trainer, weekly industry columnist, and travel expert with over 40 years of experience and travel to more than 121 countries.",
    },

    {
      "@type": "WebPage",
      "@id": "https://www.tripsandships.com/luxury-alumni-travel",
      url: "https://www.tripsandships.com/luxury-alumni-travel",
      name: "Luxury Alumni Travel",
      description:
        "Luxury alumni travel experiences including alumni cruises, alumni river cruises, expedition voyages, educational travel, and premium university travel programs.",
    },

    {
      "@type": "BreadcrumbList",
      "@id": "https://www.tripsandships.com/luxury-alumni-travel#breadcrumb",
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
          name: "Alumni Travel",
          item: "https://www.tripsandships.com/alumni-travel",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Luxury Alumni Travel",
          item: "https://www.tripsandships.com/luxury-alumni-travel",
        },
      ],
    },

    {
      "@type": "FAQPage",
      "@id": "https://www.tripsandships.com/luxury-alumni-travel#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is luxury alumni travel?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Luxury alumni travel combines premium travel experiences with alumni engagement, lifelong learning, and meaningful connections to university communities.",
          },
        },

        {
          "@type": "Question",
          name: "Why are universities offering alumni travel programs?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Universities use alumni travel programs to strengthen alumni engagement, encourage lifelong learning, support donor participation, and build stronger communities.",
          },
        },

        {
          "@type": "Question",
          name: "What are the best destinations for alumni travel?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Popular destinations include Italy, France, Greece, Alaska, Antarctica, South Africa, Japan, and European river cruise itineraries.",
          },
        },

        {
          "@type": "Question",
          name: "Why are cruises popular for alumni groups?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Cruises provide convenience, educational opportunities, social interaction, and the ability to visit multiple destinations in a comfortable environment.",
          },
        },

        {
          "@type": "Question",
          name: "What travel company specializes in alumni travel?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Trips & Ships Luxury Travel specializes in luxury alumni travel, educational travel, alumni cruises, and university travel planning.",
          },
        },

        {
          "@type": "Question",
          name: "What makes luxury alumni travel different?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Luxury alumni travel focuses on premium accommodations, personalized service, educational enrichment, and exclusive experiences.",
          },
        },

        {
          "@type": "Question",
          name: "Are luxury alumni cruises worth it?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Luxury alumni cruises combine exceptional service, destination immersion, educational programming, and meaningful alumni engagement.",
          },
        },

        {
          "@type": "Question",
          name: "What are alumni river cruises?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Alumni river cruises are educational and cultural travel experiences designed for university alumni, often sailing Europe's most iconic rivers.",
          },
        },

        {
          "@type": "Question",
          name: "What are alumni expedition cruises?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Alumni expedition cruises explore destinations such as Antarctica, the Arctic, Greenland, Alaska, and the Galapagos Islands.",
          },
        },

        {
          "@type": "Question",
          name: "Why are small ship cruises popular for alumni travel?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Small ship cruises offer personalized service, greater destination access, and deeper cultural immersion.",
          },
        },

        {
          "@type": "Question",
          name: "Can alumni travel strengthen university engagement?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Alumni travel creates opportunities for graduates to reconnect with fellow alumni, faculty, and university leadership.",
          },
        },

        {
          "@type": "Question",
          name: "What should universities look for in an alumni travel partner?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Universities should seek expertise in luxury travel, educational travel, supplier relationships, and alumni engagement.",
          },
        },

        {
          "@type": "Question",
          name: "Are faculty-hosted alumni travel programs beneficial?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Faculty-hosted travel programs provide educational enrichment and unique learning opportunities for alumni.",
          },
        },

        {
          "@type": "Question",
          name: "Can luxury alumni travel support donor development?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Many institutions use luxury alumni travel and donor travel programs to deepen relationships with supporters.",
          },
        },

        {
          "@type": "Question",
          name: "Why choose Trips & Ships Luxury Travel?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Trips & Ships Luxury Travel combines luxury travel expertise, educational travel experience, alumni travel planning, and personalized service.",
          },
        },
      ],
    },
  ],
};

function FAQ() {
  const [open, setOpen] = useState(null);

  const faqData = [
    {
      q: "What is a small ship alumni cruise?",
      a: "A small ship alumni cruise is a university-sponsored travel experience aboard a smaller luxury vessel that emphasizes educational enrichment, alumni engagement, and personalized service.",
    },

    {
      q: "How many passengers are typically on a small ship?",
      a: "Most small ship cruises carry between 50 and 700 guests depending on the vessel and itinerary.",
    },

    {
      q: "Why are small ships popular with universities?",
      a: "Small ships encourage stronger interaction among alumni, donors, faculty, and university leadership.",
    },

    {
      q: "What destinations work best for small ship cruises?",
      a: "The Mediterranean, Alaska, Northern Europe, the British Isles, and expedition regions are among the most popular choices.",
    },

    {
      q: "Are small ship cruises luxurious?",
      a: "Yes. Most luxury small ship operators provide exceptional accommodations, dining, service, and excursions.",
    },

    {
      q: "Can faculty participate?",
      a: "Absolutely. Faculty participation often becomes one of the most valuable aspects of the experience.",
    },

    {
      q: "Are small ship cruises suitable for donor programs?",
      a: "Yes. Their intimate atmosphere makes them ideal for donor engagement and relationship building.",
    },

    {
      q: "How far in advance should planning begin?",
      a: "Most programs should begin planning 12–24 months before departure.",
    },

    {
      q: "Do small ships visit destinations larger ships cannot?",
      a: "Yes. One of the primary advantages of small ship cruising is access to unique ports and remote locations.",
    },

    {
      q: "Can universities customize the experience?",
      a: "Yes. Private receptions, lectures, educational sessions, and branded events can all be incorporated.",
    },

    {
      q: "What is the ideal group size?",
      a: "Many successful programs range from 20 to 100 travelers, depending on objectives and ship capacity.",
    },

    {
      q: "Why choose Trips & Ships Luxury Travel?",
      a: "We combine luxury cruise expertise, educational travel experience, and university-focused planning services.",
    },

    {
      q: "How do universities begin planning?",
      a: "A consultation helps identify goals, destinations, audiences, and timelines.",
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
const SmallShipAlumniCruises = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [readMore, setReadMore] = useState(false);
  const images = [HeroImage1, HeroImage3, HeroImage2];
  const [activeDest, setActiveDest] = useState("antarctica");
  const currentDest =
    smallShipDestinations.find((d) => d.id === activeDest) ||
    smallShipDestinations[0];

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
          Small Ship Alumni Cruises | Luxury University Cruise Programs
        </title>
        <meta
          name="title"
          content="Small Ship Alumni Cruises for Universities & Alumni Associations"
        />
        <meta
          name="description"
          content="Discover luxury small ship alumni cruises designed for universities, alumni associations, donors, and lifelong learners. Enjoy exclusive travel experiences, deeper connections, and immersive educational opportunities."
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
            Small Ship Alumni Cruises: Exclusive Travel Experiences Designed for
            Meaningful Connections
          </h1>

          <p>
            When universities seek travel experiences that foster deeper
            relationships, richer educational opportunities, and more
            personalized service, small ship cruises consistently rise to the
            top.
          </p>

          {/* READ MORE CONTENT */}
          {readMore && (
            <>
              <p>
                Unlike large cruise vessels carrying thousands of passengers,
                small ship cruises create an intimate environment where alumni,
                donors, faculty, and university leadership can connect naturally
                while exploring some of the world's most remarkable
                destinations.
              </p>

              <p>
                For institutions focused on engagement, lifelong learning, and
                donor cultivation, small ship cruises offer a unique combination
                of luxury, exclusivity, and educational enrichment.
              </p>

              <p>
                At Trips &amp; Ships Luxury Travel, we help universities design
                customized small ship alumni cruise programs that strengthen
                relationships while delivering extraordinary travel experiences.
              </p>

              <p>
                Led by <strong>Angela Hughes</strong>, one of the travel
                industry's most respected luxury travel experts, our team
                specializes in creating unforgettable journeys tailored
                specifically for educational institutions and alumni
                communities.
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
    WHAT IS A SMALL SHIP ALUMNI CRUISE?
════════════════════════════════════════ */}

      <section className="adg-c-section adg-c-bg-white" id="adg-overview">
        <div className="adg-c-container">
          <div className="adg-c-section-header">
            <span className="adg-c-eyebrow">
              Small Ship Alumni Cruise Overview
            </span>

            <h2 className="adg-c-h2">What Is a Small Ship Alumni Cruise?</h2>

            <div className="adg-c-accent-line"></div>
          </div>

          <div className="adg-c-overview-layout">
            {/* LEFT — list */}
            <div className="adg-c-overview-icons">
              {[
                "Personalized Service",
                "Educational Enrichment",
                "Cultural Immersion",
                "Exclusive Destinations",
                "Meaningful Social Interaction",
                "Alumni Networking",
                "Faculty Engagement",
              ].map((label, i) => (
                <div key={i} className="adg-c-overview-item">
                  <span className="adg-c-overview-icon">
                    <Check size={16} strokeWidth={2.5} />
                  </span>

                  <span className="adg-c-overview-label">{label}</span>
                </div>
              ))}
            </div>

            {/* RIGHT — callout card + image */}
            <div className="adg-c-overview-right">
              <div className="adg-c-overview-callout">
                <div className="adg-c-overview-callout-inner">
                  <Star size={28} className="adg-c-callout-star" />

                  <p className="adg-c-callout-text">
                    A small ship alumni cruise is a university-sponsored travel
                    experience aboard a luxury vessel that typically
                    accommodates between 50 and 700 guests, creating a more
                    intimate and engaging environment than traditional
                    large-ship cruising.
                  </p>
                </div>
              </div>

              <div className="adg-c-overview-image-wrap">
                <img
                  src={SmallShip}
                  alt="Small ship alumni cruise experience"
                  className="adg-c-overview-img"
                />

                <div className="adg-c-overview-img-overlay">
                  <span className="adg-c-overview-img-label">
                    Intimate Small Ship Cruising
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
    WHY UNIVERSITIES CHOOSE SMALL SHIP CRUISES
═════════════════════════════════════════ */}
      <section className="adg-c-section adg-c-bg-dark" id="adg-why-dining">
        <div className="adg-c-container">
          <div className="adg-c-why-grid">
            {/* LEFT — text */}
            <div className="adg-c-why-left">
              <span className="adg-c-eyebrow adg-c-eyebrow-light">
                Small Ship Alumni Cruise Benefits
              </span>

              <h2 className="adg-c-h2 adg-c-h2-light">
                Why Universities Choose Small Ship Cruises
              </h2>

              <div className="aac-accent-line aac-accent-white"></div>

              <p className="adg-c-lead adg-c-lead-light">
                Universities increasingly favor small ship cruising because it
                creates the ideal environment for relationship building.
              </p>

              <p className="adg-c-body adg-c-body-light">
                Large cruise ships often offer numerous distractions that limit
                group interaction. Small ships, by contrast, encourage
                meaningful engagement and stronger connections among
                participants.
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
                  Small ship cruises provide a more personal travel experience
                  where alumni, donors, faculty, and university leadership can
                  connect naturally. These intimate environments support
                  lifelong learning, strengthen institutional relationships, and
                  create memorable shared experiences that often extend far
                  beyond the voyage itself.
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
                  Small ships encourage:
                </span>

                <div className="adg-c-pill-grid">
                  {[
                    "Stronger Alumni Connections",
                    "Enhanced Faculty Engagement",
                    "Better Networking Opportunities",
                    "Greater Exclusivity",
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

      {/* ── THE ADVANTAGES OF SMALL SHIP ALUMNI CRUISES ───── */}
      <section
        className="ugt-components-section"
        id="ugt-components"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="ugt-components-container">
          <div className="ugt-components-header">
            <h2 className="ugt-components-title">
              The Advantages of Small Ship Alumni Cruises
            </h2>

            <div className="adg-c-accent-line"></div>
          </div>

          <div className="ugt-components-list">
            <div className="ugt-component-row">
              <div className="ugt-component-image-wrapper">
                <div className="ugt-component-image-container">
                  <img
                    src={BestDetination}
                    alt="Small Ship Alumni Cruise Destination"
                    className="ugt-component-image"
                  />
                </div>
              </div>

              <div className="ugt-component-content">
                <h3 className="ugt-component-subtitle">
                  Access to Unique Destinations
                </h3>

                <p className="ugt-component-text">
                  One of the greatest benefits of small ship travel is access.
                  Smaller vessels can visit ports that larger ships simply
                  cannot reach.
                </p>

                <div className="ugt-questions-box">
                  <span className="ugt-questions-title">
                    This opens opportunities for:
                  </span>

                  <ul className="ugt-questions-list">
                    {[
                      "Hidden coastal villages",
                      "Historic harbors",
                      "Remote islands",
                      "Cultural destinations",
                      "Scenic waterways",
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
                  Travelers enjoy authentic experiences beyond traditional
                  tourist routes, creating memorable journeys that encourage
                  deeper cultural exploration and meaningful alumni engagement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MORE MEANINGFUL EDUCATIONAL EXPERIENCES ─────────────────────── */}
      <section className="ugt-diff-section" id="ugt-different">
        <div className="ugt-diff-container">
          {/* Header */}
          <div className="ugt-diff-header">
            <h2 className="ugt-diff-title">
              More Meaningful Educational Experiences
            </h2>

            <div className="adg-c-accent-line"></div>

            <p className="ugt-diff-intro">
              Small ship environments are ideal for lifelong learning. Their
              intimate setting allows universities to create educational
              programs that are engaging, interactive, and closely connected to
              each destination.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="ugt-diff-grid">
            {[
              {
                icon: <GraduationCap size={28} strokeWidth={1.5} />,
                number: "01",
                title: "Faculty Lectures",
                body: "Professors provide educational insights tied to destinations, historical themes, cultural topics, and academic areas of expertise.",
              },
              {
                icon: <BookOpen size={28} strokeWidth={1.5} />,
                number: "02",
                title: "Expert Speakers",
                body: "Historians, scientists, authors, and regional experts enrich the journey with unique perspectives and specialized knowledge.",
              },
              {
                icon: <Users size={28} strokeWidth={1.5} />,
                number: "03",
                title: "Interactive Discussions",
                body: "Smaller groups encourage participation, conversation, and meaningful dialogue between travelers, faculty, and guest speakers.",
              },
              {
                icon: <Map size={28} strokeWidth={1.5} />,
                number: "04",
                title: "Cultural Immersion",
                body: "Travelers engage more deeply with local communities, traditions, history, and authentic cultural experiences.",
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



      {/* ── BEST DESTINATIONS FOR SMALL SHIP ALUMNI CRUISES ───── */}
      <section className="luc-destinations-section" id="luc-destinations">
        <div className="luc-destinations-container">
          <div className="luc-destinations-header">
            <h2 className="luc-destinations-title">
              Best Destinations for Small Ship Alumni Cruises
            </h2>

            <div className="adg-c-accent-line"></div>

            <p className="luc-destinations-intro">
              From the historic ports of the Mediterranean to the remote
              wilderness of Alaska and the Galápagos Islands, small ship cruises
              provide exceptional opportunities for educational enrichment,
              cultural immersion, and meaningful alumni engagement.
            </p>
          </div>

          {/* Layout */}
          <div className="luc-dest-layout">
            {/* Sidebar nav */}
            <nav className="luc-dest-nav">
              {smallShipDestinations.map((item) => {
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

      {/* ── WHY ALUMNI TRAVELERS PREFER SMALL SHIPS ───── */}
      <section className="luc-why-section" id="luc-why">
        <div className="luc-why-container">
          {/* LEFT — stacked images */}
          <div className="luc-why-images">
            <div className="luc-why-img-main-wrap">
              <img
                src={TravelExperience}
                alt="Alumni travelers enjoying a small ship cruise"
                className="luc-why-img-main"
              />
              <div className="luc-why-img-overlay"></div>
            </div>

            <div className="luc-why-img-accent-wrap">
              <img
                src={SmallShipExperience}
                alt="Luxury small ship travel experience"
                className="luc-why-img-accent"
              />

              <div className="luc-why-img-badge">
                <span className="luc-why-badge-num">5</span>
                <span className="luc-why-badge-text">Key Advantages</span>
              </div>
            </div>
          </div>

          {/* RIGHT — content */}
          <div className="luc-why-content">
            <h2 className="luc-why-title">
              Why Alumni Travelers Prefer Small Ships
            </h2>

            <div className="aac-accent-line aac-accent-white"></div>

            <p className="luc-why-intro">
              Many alumni travelers have already experienced traditional
              cruises. Small ship voyages provide a more personal, immersive,
              and engaging travel experience.
            </p>

            <p className="luc-why-subintro">
              Key reasons alumni travelers prefer small ships include:
            </p>

            <div className="luc-why-features">
              <div className="luc-why-feature">
                <div className="luc-why-feature-num">01</div>

                <div className="luc-why-feature-body">
                  <h3 className="luc-why-feature-title">Less Crowding</h3>

                  <p className="luc-why-feature-desc">
                    Fewer passengers create a more relaxed atmosphere and allow
                    travelers to enjoy the journey without large crowds.
                  </p>
                </div>
              </div>

              <div className="luc-why-feature">
                <div className="luc-why-feature-num">02</div>

                <div className="luc-why-feature-body">
                  <h3 className="luc-why-feature-title">
                    Authentic Experiences
                  </h3>

                  <p className="luc-why-feature-desc">
                    Travelers spend more time exploring destinations and less
                    time navigating crowded ports and tourist-heavy
                    environments.
                  </p>
                </div>
              </div>

              <div className="luc-why-feature">
                <div className="luc-why-feature-num">03</div>

                <div className="luc-why-feature-body">
                  <h3 className="luc-why-feature-title">Stronger Community</h3>

                  <p className="luc-why-feature-desc">
                    Participants often form lasting friendships and meaningful
                    connections throughout the voyage.
                  </p>
                </div>
              </div>

              <div className="luc-why-feature">
                <div className="luc-why-feature-num">04</div>

                <div className="luc-why-feature-body">
                  <h3 className="luc-why-feature-title">Higher Engagement</h3>

                  <p className="luc-why-feature-desc">
                    Faculty lectures, discussions, and group activities become
                    more meaningful in smaller, interactive settings.
                  </p>
                </div>
              </div>

              <div className="luc-why-feature">
                <div className="luc-why-feature-num">05</div>

                <div className="luc-why-feature-body">
                  <h3 className="luc-why-feature-title">
                    Premium Travel Experience
                  </h3>

                  <p className="luc-why-feature-desc">
                    Luxury small ship operators focus on quality, personalized
                    service, and exceptional guest experiences rather than
                    scale.
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

      {/* SMALL SHIP CRUISES VS LARGE SHIP CRUISES */}
      <section
        className="Asc-section Asc-bg-white"
        id="Asc-fleet"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="Asc-container">
          <div className="Asc-section-header">
            <h2 className="Asc-h2">Small Ship Cruises vs Large Ship Cruises</h2>

            <div className="Asc-accent-line"></div>
          </div>

          <div className="Asc-table-wrapper">
            <table className="Asc-fleet-table">
              <thead>
                <tr>
                  <th>Small Ship Cruises</th>
                  <th>Large Ship Cruises</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Intimate atmosphere</td>
                  <td>Large crowds</td>
                </tr>

                <tr>
                  <td>Personalized service</td>
                  <td>Standardized service</td>
                </tr>

                <tr>
                  <td>Unique ports</td>
                  <td>Major cruise ports</td>
                </tr>

                <tr>
                  <td>Educational focus</td>
                  <td>Entertainment focus</td>
                </tr>

                <tr>
                  <td>Strong group interaction</td>
                  <td>Less group cohesion</td>
                </tr>

                <tr>
                  <td>Exclusive experiences</td>
                  <td>Mass-market experiences</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div
            className="Asc-overview-highlight-box"
            style={{ marginTop: "30px" }}
          >
            <p className="Asc-overview-highlight-text">
              For alumni associations and universities, small ship cruises often
              provide significantly stronger engagement opportunities through
              meaningful interactions, immersive educational programming, and
              shared travel experiences.
            </p>
          </div>
        </div>
      </section>

            {/* ════════════════════════════════════════
    PERSONALIZED SERVICE
════════════════════════════════════════ */}
      <section className="adg-c-section adg-c-bg-white" id="adg-overview">
        <div className="adg-c-container">
          <div className="adg-c-section-header">
            <span className="adg-c-eyebrow">Luxury Small Ship Experiences</span>

            <h2 className="adg-c-h2">Personalized Service</h2>

            <div className="adg-c-accent-line"></div>
          </div>

          <div className="adg-c-overview-layout">
            {/* LEFT — list */}
            <div className="adg-c-overview-icons">
              {[
                "Personalized Attention",
                "Higher Staff-to-Guest Ratios",
                "Fine Dining Experiences",
                "Spacious Accommodations",
                "Tailored Excursions",
              ].map((label, i) => (
                <div key={i} className="adg-c-overview-item">
                  <span className="adg-c-overview-icon">
                    <Check size={16} strokeWidth={2.5} />
                  </span>

                  <span className="adg-c-overview-label">{label}</span>
                </div>
              ))}
            </div>

            {/* RIGHT — callout card + image */}
            <div className="adg-c-overview-right">
              <div className="adg-c-overview-callout">
                <div className="adg-c-overview-callout-inner">
                  <Star size={28} className="adg-c-callout-star" />

                  <p className="adg-c-callout-text">
                    Luxury small ship operators are known for exceptional
                    hospitality, providing attentive service and highly
                    personalized experiences that elevate every aspect of the
                    journey.
                  </p>
                </div>
              </div>

              <div className="adg-c-overview-image-wrap">
                <img
                  src={FineDining}
                  alt="Luxury small ship personalized service"
                  className="adg-c-overview-img"
                />

                <div className="adg-c-overview-img-overlay">
                  <span className="adg-c-overview-img-label">
                    Exceptional Guest Service
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW SMALL SHIP CRUISES SUPPORT UNIVERSITY ADVANCEMENT GOALS ───────────────────────────── */}
      <section className="ugt-advantage-section" id="ugt-advantage">
        <div className="ugt-advantage-container">
          <div className="ugt-advantage-header">
            <span className="ugt-advantage-eyebrow">
              Advancement & Alumni Relations
            </span>

            <h2 className="ugt-advantage-title">
              How Small Ship Cruises Support University Advancement Goals
            </h2>

            <div className="Asc-accent-line"></div>

            <p className="ugt-advantage-intro">
              Travel programs have become valuable tools for advancement
              departments seeking to strengthen alumni relationships and build
              long-term institutional support.
            </p>

            <h3 className="ugt-approach-title">
              Small ship cruises create opportunities for:
            </h3>
          </div>

          <div className="ugt-advantage-grid">
            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <HeartHandshake size={28} strokeWidth={1.5} />
              </div>

              <h4 className="ugt-card-title">Donor Cultivation</h4>

              <p className="ugt-card-desc">
                University leaders can spend meaningful time with supporters in
                relaxed and engaging travel environments.
              </p>
            </div>

            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <Users size={28} strokeWidth={1.5} />
              </div>

              <h4 className="ugt-card-title">Alumni Engagement</h4>

              <p className="ugt-card-desc">
                Participants often strengthen their connection to the
                institution through shared educational and cultural experiences.
              </p>
            </div>

            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <Network size={28} strokeWidth={1.5} />
              </div>

              <h4 className="ugt-card-title">Community Building</h4>

              <p className="ugt-card-desc">
                Shared experiences foster long-term relationships among alumni,
                faculty, donors, and university leadership.
              </p>
            </div>

            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <Award size={28} strokeWidth={1.5} />
              </div>

              <h4 className="ugt-card-title">Institutional Loyalty</h4>

              <p className="ugt-card-desc">
                Travel creates emotional connections that traditional engagement
                methods often cannot replicate, helping strengthen long-term
                affinity for the university.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── COMMON SMALL SHIP CRUISE PLANNING MISTAKES ───────────────────────── */}
      <section className="Lfsg-section Lfsg-bg-dark" id="Lfsg-challenges">
        <div className="Lfsg-container">
          <div className="Lfsg-section-header">
            <h2 className="Lfsg-h2-white">
              Common Mistakes Universities Make When Planning Small Ship Cruises
            </h2>

            <div className="Lfsg-accent-line-white" />
          </div>

          <div className="Lfsg-mistakes-grid">
            {[
              {
                title: "Waiting Too Long to Reserve Space",
                desc: "Small ship capacity is limited. Popular departures often sell out 18–24 months in advance, making early planning essential.",
              },

              {
                title: "Choosing Destinations Without Audience Research",
                desc: "The most successful programs align destinations with alumni interests, travel preferences, and educational objectives.",
              },

              {
                title: "Neglecting Educational Content",
                desc: "Faculty involvement, guest lecturers, and curated learning experiences significantly enhance participant satisfaction.",
              },

              {
                title: "Underestimating Marketing Requirements",
                desc: "Even exceptional travel programs require strategic promotion, targeted outreach, and consistent communication to achieve strong participation.",
              },

              {
                title: "Working With General Travel Providers",
                desc: "Universities benefit most from partners who understand alumni engagement, educational travel, and the unique needs of institutional programs.",
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
              Who Is Small Ship Alumni Travel Best For?
            </h2>
            <div className="Asc-accent-line"></div>
          </div>

          <div className="Asc-who-grid">
            <div className="Asc-who-card Asc-who-yes">
              <h3 className="Asc-who-title">Best For</h3>

              <ul className="Asc-who-list">
                {[
                  "Alumni associations",
                  "Advancement departments",
                  "Donor travel programs",
                  "Lifelong learning organizations",
                  "Faculty-led educational travel",
                  "Luxury-minded alumni travelers",
                  "Multi-generational travel groups",
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
                  "Travelers seeking large-scale entertainment venues",
                  "Budget-focused travel programs",
                  "High-volume mass-market travel experiences",
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
                University Travel Program Specialists
              </span>

              <h2 className="adg-c-h2 adg-c-h2-light">
                Why Universities Partner With Trips &amp; Ships Luxury Travel
              </h2>

              <div className="aac-accent-line aac-accent-white"></div>

              <p className="adg-c-lead adg-c-lead-light">
                Trips &amp; Ships Luxury Travel specializes in university travel
                programs designed to achieve meaningful engagement outcomes.
              </p>

              <p className="adg-c-body adg-c-body-light">
                We help institutions create exceptional travel experiences that
                strengthen alumni relationships, support educational
                initiatives, enhance donor engagement, and provide seamless
                travel management from planning through completion.
              </p>
            </div>

            {/* RIGHT — pill grid */}
            <div className="adg-c-why-right">
              <div className="adg-c-why-card">
                <span className="adg-c-why-card-label">
                  Our Services Include:
                </span>

                <div className="adg-c-pill-grid">
                  {[
                    "Strategic Program Development",
                    "Luxury Cruise Expertise",
                    "Educational Program Integration",
                    "Marketing Assistance",
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
              Luxury Cruise Travel Leadership
            </span>

            <h2 className="Adg-expert-title">
              Angela Hughes: A Global Authority in Luxury Cruise Travel
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
                  alt="Angela Hughes - Global Luxury Cruise Travel Expert"
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
                  Universities benefit from Angela Hughes' extensive travel
                  industry experience.
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
                    "Travel Leaders Network Advisory Board Member",
                    "Luxury Travel Influencer of the Year",
                    "International travel educator and speaker",
                    "Weekly travel columnist",
                    "Recognized among the travel industry's most influential leaders",
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
                  Her expertise helps universities create travel experiences
                  that reflect the excellence of their institution.
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
            alt="Small Ship Alumni Cruise Experience"
            className="Asc-help-bg-img"
          />
          <div className="Asc-help-overlay"></div>
        </div>

        <div className="Asc-container">
          <div className="Asc-help-card">
            <div className="Asc-help-content">
              <div className="Asc-help-header">
                <span className="Asc-help-eyebrow">
                  Small Ship Alumni Cruise Programs
                </span>

                <h2 className="Asc-help-h2">
                  Create Exclusive Alumni Experiences That Build Lasting
                  Connections
                </h2>

                <div className="Asc-help-accent"></div>
              </div>

              <div className="Asc-help-grid">
                <div className="Asc-help-info">
                  <p className="Asc-help-intro">
                    Small ship alumni cruises provide a unique combination of
                    luxury, learning, exclusivity, and engagement that aligns
                    perfectly with university objectives.
                  </p>

                  <p className="Asc-help-intro">
                    Whether your institution is seeking stronger alumni
                    relationships, enhanced donor engagement, lifelong learning
                    opportunities, or unforgettable travel experiences, small
                    ship cruising offers exceptional possibilities.
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
                      With Angela Hughes' global expertise and Trips &amp; Ships
                      Luxury Travel's proven planning process, your university
                      can create a travel program that participants will
                      remember long after they return home.
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
                      Start Planning Your Small Ship Alumni Cruise
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>

                <div className="Asc-help-list-box">
                  <h3 className="Asc-help-list-title">
                    Benefits of Small Ship Alumni Cruises:
                  </h3>

                  <ul className="Asc-help-bullets">
                    {[
                      "Exclusive and intimate travel experiences",
                      "Stronger alumni and donor engagement",
                      "Access to unique ports and destinations",
                      "Educational enrichment opportunities",
                      "Personalized service and luxury accommodations",
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
                    planning your custom small ship alumni cruise program.
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

export default SmallShipAlumniCruises;
