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
  HeartHandshake,
  Compass,
  Anchor,
  Ship,
  Waves,
  Repeat,
  TrendingUp,
  Handshake,
} from "lucide-react";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela.jpeg";
import HeroImage1 from "../../assets/DonorTravelPrograms/university-donor-travel-cultivation-program-hero-1.jpg";
import HeroImage2 from "../../assets/DonorTravelPrograms/alumni-philanthropic-giving-stewardship-hero-2.jpg";
import HeroImage3 from "../../assets/DonorTravelPrograms/luxury-donor-travel-board-members-hero-3.jpg";
import CTAImage from "../../assets/DonorTravelPrograms/university-donor-travel-planning-call-to-action.jpg";

import Mediterian from "../../assets/DonorTravelPrograms/mediterranean-cultural-donor-cruises.jpg";
import Danube from "../../assets/DonorTravelPrograms/european-river-cruises-donor-travel.jpg";
import Britislen from "../../assets/DonorTravelPrograms/british-isles-small-ship-donor-cruises.jpg";
import France from "../../assets/DonorTravelPrograms/france-cultural-donor-journeys.jpg";
import Antarctica from "../../assets/DonorTravelPrograms/antarctica-expedition-conservation-donor-travel.jpg";
import DonorTravel from "../../assets/DonorTravelPrograms/university-donor-travel-faculty-educational-experience.jpg";

import DonorExperience from "../../assets/DonorTravelPrograms/luxury-university-donor-travel-stewardship-primary.jpg";
import DonorExperience2 from "../../assets/DonorTravelPrograms/premium-luxury-cruise-donor-travel-accent.jpg";
import DonorExperience3 from "../../assets/DonorTravelPrograms/university-donor-travel-engagement-stewardship.jpg";


import { Helmet } from "react-helmet-async";

const donorTravelDestinations = [
  {
    id: "river-cruises",
    title: "European River Cruises",
    badge: "River Cruises",
    icon: Waves,
    image: Danube,

    desc: "European river cruises remain among the most successful and popular donor travel formats, combining luxury, culture, education, and convenience in a highly engaging travel experience.",

    columns: [
      {
        label: "Popular itineraries:",
        items: ["Rhine River", "Danube River", "Seine River", "Douro River"],
      },
    ],

    themeLabel: "Why River Cruises?",
    themeText:
      "These journeys combine luxury, culture, and educational opportunities while creating ideal environments for donor engagement and relationship building.",
  },

  {
    id: "mediterranean",
    title: "Mediterranean Cruises",
    badge: "Mediterranean",
    icon: Ship,
    image: Mediterian,

    desc: "Mediterranean cruises offer timeless appeal for donors interested in history, culture, art, and world-class culinary experiences.",

    columns: [
      {
        label: "Popular interests:",
        items: ["History", "Art", "Cuisine", "Ancient Civilizations"],
      },
    ],

    themeLabel: "Why the Mediterranean?",
    themeText:
      "A perfect blend of educational enrichment, cultural discovery, and luxury travel experiences.",
  },

  {
    id: "antarctica",
    title: "Antarctica & Expedition Travel",
    badge: "Expeditions",
    icon: Compass,
    image: Antarctica,

    desc: "Expedition travel appeals to adventurous donors seeking transformational experiences and extraordinary access to some of the world's most remote destinations.",

    columns: [
      {
        label: "Educational themes:",
        items: ["Climate Science", "Conservation", "Wildlife", "Exploration"],
      },
    ],

    themeLabel: "Transformational Travel",
    themeText:
      "Expedition journeys often create unforgettable shared experiences that strengthen donor relationships and institutional affinity.",
  },

  {
    id: "british-isles",
    title: "British Isles & Northern Europe",
    badge: "Northern Europe",
    icon: Anchor,
    image: Britislen,

    desc: "These itineraries appeal strongly to travelers interested in history, heritage, culture, and educational exploration.",

    columns: [
      {
        label: "Popular regions:",
        items: ["England", "Scotland", "Ireland", "Scandinavia"],
      },
    ],

    themeLabel: "History & Heritage",
    themeText:
      "Ideal for donor audiences who appreciate intellectual enrichment and culturally significant destinations.",
  },

  {
    id: "cultural-journeys",
    title: "Cultural Land Journeys",
    badge: "Land Tours",
    icon: MapPin,
    image: France,

    desc: "Immersive cultural land programs provide meaningful educational experiences while allowing donors to explore some of the world's most fascinating destinations.",

    columns: [
      {
        label: "Popular destinations:",
        items: ["Italy", "France", "Spain", "Egypt", "Japan"],
      },
    ],

    themeLabel: "Educational Value",
    themeText:
      "These experiences provide rich educational opportunities while fostering meaningful interaction among donors, faculty, and university leadership.",
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
      q: "What is a donor travel program?",
      a: "A donor travel program is a curated travel experience designed to engage, steward, and build relationships with university supporters and donors.",
    },

    {
      q: "Why do universities offer donor travel programs?",
      a: "Travel creates opportunities for meaningful interaction, donor stewardship, and long-term relationship building.",
    },

    {
      q: "Are donor travel programs fundraising events?",
      a: "No. While they can support advancement goals, the primary focus is relationship development and engagement.",
    },

    {
      q: "What types of travel work best for donors?",
      a: "Luxury cruises, river cruises, educational tours, cultural journeys, and expedition travel are all popular options.",
    },

    {
      q: "Do donors travel with university leadership?",
      a: "Often, yes. Participation by presidents, advancement leaders, and faculty members enhances engagement.",
    },

    {
      q: "How do travel programs support fundraising?",
      a: "Stronger relationships often lead to increased institutional affinity and long-term philanthropic support.",
    },

    {
      q: "Are educational experiences included?",
      a: "Most university donor travel programs incorporate lectures, faculty presentations, and destination-focused learning opportunities.",
    },

    {
      q: "What destinations are most popular?",
      a: "Europe, Alaska, Antarctica, the Mediterranean, and culturally significant destinations consistently perform well.",
    },

    {
      q: "How far in advance should programs be planned?",
      a: "Most donor travel programs should begin planning 12–24 months before departure.",
    },

    {
      q: "Can travel experiences be customized?",
      a: "Absolutely. Universities can incorporate private events, receptions, educational sessions, and branded experiences.",
    },

    {
      q: "Why choose Trips & Ships Luxury Travel?",
      a: "We combine luxury travel expertise, educational travel experience, and a deep understanding of university advancement goals.",
    },

    {
      q: "How can institutions get started?",
      a: "A consultation helps identify objectives, audiences, destinations, and program opportunities.",
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
const DonorTravelPrograms = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [readMore, setReadMore] = useState(false);
  const images = [HeroImage1, HeroImage2, HeroImage3];
  const heroPositions = ["center center", "center center", "center top"];
  const [activeDest, setActiveDest] = useState("antarctica");
  const currentDest =
    donorTravelDestinations.find((d) => d.id === activeDest) ||
    donorTravelDestinations[0];

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
          Donor Travel Programs for Universities | Luxury Advancement Travel
          Experiences
        </title>
        <meta
          name="title"
          content="University Donor Travel Programs | Alumni & Advancement Travel"
        />
        <meta
          name="description"
          content="Strengthen donor relationships through luxury donor travel programs. Discover how universities use curated travel experiences to engage supporters, cultivate major gifts, and build lasting connections."
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
            style={{
              backgroundImage: `url(${img})`,
              backgroundPosition: heroPositions[index] || "center center",
            }}
          ></div>
        ))}

        <div className="Scenic_hero_overlay"></div>

        <div className="Scenic_hero_content">
          <h1>
            Donor Travel Programs: Building Stronger Relationships Through
            Meaningful Travel Experiences
          </h1>

          <p>
            In today's increasingly competitive fundraising environment,
            universities are continually seeking innovative ways to strengthen
            relationships with donors, alumni, and supporters.
          </p>

          {/* READ MORE CONTENT */}
          {readMore && (
            <>
              <p>
                While traditional stewardship events and fundraising campaigns
                remain important, experiential engagement has emerged as one of
                the most powerful tools available to advancement professionals.
              </p>

              <p>
                Travel provides something few other engagement strategies can
                offer: meaningful time together.
              </p>

              <p>
                Donor travel programs allow university leaders, advancement
                teams, faculty members, and supporters to connect in ways that
                foster trust, deepen relationships, and strengthen institutional
                loyalty.
              </p>

              <p>
                At Trips &amp; Ships Luxury Travel, we help universities design
                exceptional donor travel experiences that align with advancement
                objectives while delivering unforgettable journeys.
              </p>

              <p>
                Led by <strong>Angela Hughes</strong>, one of the travel
                industry's most respected luxury travel experts, our team
                specializes in creating travel programs that inspire engagement
                and support long-term fundraising success.
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
    WHAT ARE DONOR TRAVEL PROGRAMS?
════════════════════════════════════════ */}
      <section className="adg-c-section adg-c-bg-white" id="adg-overview">
        <div className="adg-c-container">
          <div className="adg-c-section-header">
            <span className="adg-c-eyebrow">Donor Travel Program Overview</span>

            <h2 className="adg-c-h2">What Are Donor Travel Programs?</h2>

            <div className="adg-c-accent-line"></div>
          </div>

          <div className="adg-c-overview-layout">
            {/* LEFT — list */}
            <div className="adg-c-overview-icons">
              {[
                "Luxury Travel",
                "Educational Enrichment",
                "Relationship Building",
                "Institutional Engagement",
                "Cultural Exploration",
                "Exclusive Access",
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
                    Donor travel programs are curated travel experiences
                    designed specifically for university supporters, alumni
                    donors, trustees, and advancement prospects.
                  </p>
                </div>
              </div>

              <div className="adg-c-overview-image-wrap">
                <img
                  src={DonorExperience3}
                  alt="University donor travel program"
                  className="adg-c-overview-img"
                />

                <div className="adg-c-overview-img-overlay">
                  <span className="adg-c-overview-img-label">
                    Meaningful Donor Engagement
                  </span>
                </div>
              </div>

              <div
                className="adg-c-overview-callout"
                style={{ marginTop: "20px" }}
              ></div>
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
                Donor Travel Program Benefits
              </span>

              <h2 className="adg-c-h2 adg-c-h2-light">
                Why Universities Are Investing in Donor Travel Programs
              </h2>

              <div className="aac-accent-line aac-accent-white"></div>

              <p className="adg-c-lead adg-c-lead-light">
                Universities increasingly recognize that fundraising is
                fundamentally about relationships.
              </p>

              <p className="adg-c-body adg-c-body-light">
                Major gifts are often the result of trust built over time.
                Travel accelerates this relationship-building process by
                creating shared experiences that foster genuine connections.
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
                  Donor travel programs provide meaningful opportunities for
                  university leaders, advancement teams, faculty members, and
                  supporters to spend quality time together in inspiring
                  environments. These experiences strengthen institutional
                  affinity, encourage long-term engagement, and support
                  stewardship efforts that extend well beyond the journey
                  itself.
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
                  Key Benefits Include:
                </span>

                <div className="adg-c-pill-grid">
                  {[
                    "Increased Donor Engagement",
                    "Stronger Relationships",
                    "Enhanced Stewardship",
                    "Greater Institutional Affinity",
                    "Improved Donor Retention",
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
      {/* ── THE EDUCATIONAL ADVANTAGE OF UNIVERSITY DONOR TRAVEL ───── */}
      <section
        className="ugt-components-section"
        id="ugt-components"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="ugt-components-container">
          <div className="ugt-components-header">
            <h2 className="ugt-components-title">
              The Educational Advantage of University Donor Travel
            </h2>

            <div className="adg-c-accent-line"></div>
          </div>

          <div className="ugt-components-list">
            <div className="ugt-component-row">
              <div className="ugt-component-image-wrapper">
                <div className="ugt-component-image-container">
                  <img
                    src={DonorTravel}
                    alt="University Donor Travel Educational Experience"
                    className="ugt-component-image"
                  />
                </div>
              </div>

              <div className="ugt-component-content">
                <h3 className="ugt-component-subtitle">
                  Faculty Expertise Creates Meaningful Experiences
                </h3>

                <p className="ugt-component-text">
                  Universities possess a unique advantage that traditional
                  travel providers cannot easily replicate: faculty expertise.
                </p>

                <div className="ugt-questions-box">
                  <span className="ugt-questions-title">
                    By incorporating professors and subject matter experts,
                    travel programs become:
                  </span>

                  <ul className="ugt-questions-list">
                    {[
                      "More engaging",
                      "More educational",
                      "More memorable",
                      "More aligned with institutional values",
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
                  Faculty involvement often becomes one of the most appreciated
                  aspects of donor travel programs, creating deeper learning
                  opportunities and strengthening participants' connection to
                  the university.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ── HOW DONOR TRAVEL SUPPORTS UNIVERSITY ADVANCEMENT GOALS ─────────────────────── */}
      <section className="ugt-diff-section" id="ugt-different">
        <div className="ugt-diff-container">
          {/* Header */}
          <div className="ugt-diff-header">
            <h2 className="ugt-diff-title">
              How Donor Travel Supports University Advancement Goals
            </h2>

            <div className="adg-c-accent-line"></div>

            <p className="ugt-diff-intro">
              Travel programs can play a significant role in an institution's
              advancement strategy by creating opportunities for meaningful
              engagement, relationship building, and long-term philanthropic
              support.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="ugt-diff-grid">
            {[
              {
                icon: <HeartHandshake size={28} strokeWidth={1.5} />,
                number: "01",
                title: "Donor Cultivation",
                body: "Travel provides opportunities to engage prospective donors in relaxed and meaningful settings. Instead of formal fundraising meetings, conversations occur naturally throughout the journey.",
              },
              {
                icon: <Award size={28} strokeWidth={1.5} />,
                number: "02",
                title: "Donor Stewardship",
                body: "Many universities use travel experiences to thank loyal supporters and recognize their contributions. Exclusive travel opportunities can serve as powerful stewardship tools.",
              },
              {
                icon: <Users size={28} strokeWidth={1.5} />,
                number: "03",
                title: "Leadership Access",
                body: null,
                risks: [
                  "University presidents",
                  "Advancement leaders",
                  "Trustees",
                  "Faculty experts",
                ],
              },
              {
                icon: <Handshake size={28} strokeWidth={1.5} />,
                number: "04",
                title: "Relationship Building",
                body: "Direct access to university leadership and subject matter experts helps strengthen relationships, build trust, and deepen institutional connections.",
              },
              {
                icon: <TrendingUp size={28} strokeWidth={1.5} />,
                number: "05",
                title: "Major Gift Development",
                body: "Meaningful travel experiences frequently create opportunities for conversations about institutional priorities, philanthropic impact, and future giving opportunities.",
              },
            ].map((card, i) => (
              <div key={i} className="ugt-diff-card">
                <div className="ugt-diff-card-top">
                  <div className="ugt-diff-icon">{card.icon}</div>
                  <span className="ugt-diff-number">{card.number}</span>
                </div>

                <h3 className="ugt-diff-card-title">{card.title}</h3>

                {card.body && <p className="ugt-diff-card-body">{card.body}</p>}

                {card.risks && (
                  <>
                    <p className="ugt-diff-card-body">
                      Travel programs often include participation from:
                    </p>

                    <ul className="ugt-diff-risk-list">
                      {card.risks.map((r, ri) => (
                        <li key={ri} className="ugt-diff-risk-item">
                          <Check size={14} className="ugt-diff-risk-icon" />
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TYPES OF DONOR TRAVEL PROGRAMS */}
      <section className="adg-c-section adg-c-bg-soft" id="adg-donor-programs">
        <div className="adg-c-container">
          <div className="adg-c-section-header">
            <span className="adg-c-eyebrow">Donor Travel Experiences</span>

            <h2 className="adg-c-h2">Types of Donor Travel Programs</h2>

            <div className="adg-c-accent-line"></div>

            <p className="Asc-section-intro">
              Every institution has unique fundraising objectives. Successful
              travel programs are designed with specific audiences and
              engagement goals in mind.
            </p>
          </div>

          <div className="adg-c-venues-grid1">
            {[
              {
                id: 1,
                eyebrow: "Luxury Donor Cruises",
                name: "Luxury Cruises",
                highlight:
                  "One of the most popular formats for donor engagement, luxury cruises combine exceptional service, educational programming, and meaningful networking opportunities.",
                items: [
                  "Ocean Cruises",
                  "River Cruises",
                  "Small Ship Cruises",
                  "Expedition Cruises",
                ],
                callout:
                  "Cruise-based donor programs provide relaxed environments where meaningful conversations and long-term relationships naturally develop.",
              },

              {
                id: 2,
                eyebrow: "Cultural Travel Experiences",
                name: "Cultural Journeys",
                highlight:
                  "Immersive land-based programs designed for intellectually curious travelers seeking deeper cultural and educational experiences.",
                items: [
                  "History",
                  "Art",
                  "Architecture",
                  "Heritage",
                  "Culinary Exploration",
                ],
                callout:
                  "These journeys offer rich cultural immersion while creating memorable shared experiences among donors and university leaders.",
              },

              {
                id: 3,
                eyebrow: "Faculty-Led Experiences",
                name: "Educational Travel",
                highlight:
                  "Universities often integrate learning opportunities that distinguish donor travel programs from traditional luxury tourism.",
                items: [
                  "Faculty Lectures",
                  "Seminars",
                  "Destination Discussions",
                  "Expert Presentations",
                ],
                callout:
                  "The educational component adds intellectual value and strengthens connections between participants and the institution.",
              },

              {
                id: 4,
                eyebrow: "Exclusive Access Programs",
                name: "Private Experiences",
                highlight:
                  "Premium donor travel programs frequently incorporate unique experiences unavailable to the general public.",
                items: [
                  "Private Receptions",
                  "Behind-the-Scenes Access",
                  "VIP Cultural Experiences",
                  "Exclusive Excursions",
                ],
                callout:
                  "These personalized opportunities create memorable moments that donors value highly and remember long after the journey ends.",
              },
            ].map((venue, i) => (
              <div
                key={venue.id}
                className={`adg-c-venue-card adg-c-venue-${i + 1}`}
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

      {/* ── BEST DESTINATIONS FOR DONOR TRAVEL PROGRAMS ───── */}
      <section className="luc-destinations-section" id="luc-destinations">
        <div className="luc-destinations-container">
          <div className="luc-destinations-header">
            <h2 className="luc-destinations-title">
              Best Destinations for Donor Travel Programs
            </h2>

            <div className="adg-c-accent-line"></div>

            <p className="luc-destinations-intro">
              From luxury European river cruises to transformational expedition
              voyages and immersive cultural journeys, these destinations
              provide exceptional opportunities for donor engagement,
              educational enrichment, and meaningful relationship building.
            </p>
          </div>

          {/* Layout */}
          <div className="luc-dest-layout">
            {/* Sidebar nav */}
            <nav className="luc-dest-nav">
              {donorTravelDestinations.map((item) => {
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

      {/* ── WHY LUXURY MATTERS IN DONOR TRAVEL ───── */}
      <section className="luc-why-section" id="luc-why">
        <div className="luc-why-container">
          {/* LEFT — stacked images */}
          <div className="luc-why-images">
            <div className="luc-why-img-main-wrap">
              <img
                src={DonorExperience}
                alt="Luxury donor travel experience"
                className="luc-why-img-main"
              />
              <div className="luc-why-img-overlay"></div>
            </div>

            <div className="luc-why-img-accent-wrap">
              <img
                src={DonorExperience2}
                alt="Premium luxury travel experience"
                className="luc-why-img-accent"
              />

              <div className="luc-why-img-badge">
                <span className="luc-why-badge-num">4</span>
                <span className="luc-why-badge-text">Luxury Benefits</span>
              </div>
            </div>
          </div>

          {/* RIGHT — content */}
          <div className="luc-why-content">
            <h2 className="luc-why-title">
              Why Luxury Matters in Donor Travel
            </h2>

            <div className="aac-accent-line aac-accent-white"></div>

            <p className="luc-why-intro">
              Today's major donors often have significant travel experience.
            </p>

            <p className="luc-why-subintro">
              As a result, expectations are high. Luxury travel provides:
            </p>

            <div className="luc-why-features">
              <div className="luc-why-feature">
                <div className="luc-why-feature-num">01</div>

                <div className="luc-why-feature-body">
                  <h3 className="luc-why-feature-title">Exceptional Service</h3>

                  <p className="luc-why-feature-desc">
                    Personalized attention enhances the overall experience and
                    helps create memorable moments throughout the journey.
                  </p>
                </div>
              </div>

              <div className="luc-why-feature">
                <div className="luc-why-feature-num">02</div>

                <div className="luc-why-feature-body">
                  <h3 className="luc-why-feature-title">
                    Comfort and Convenience
                  </h3>

                  <p className="luc-why-feature-desc">
                    Premium accommodations, fine dining, and seamless logistics
                    improve traveler satisfaction and enjoyment.
                  </p>
                </div>
              </div>

              <div className="luc-why-feature">
                <div className="luc-why-feature-num">03</div>

                <div className="luc-why-feature-body">
                  <h3 className="luc-why-feature-title">Unique Experiences</h3>

                  <p className="luc-why-feature-desc">
                    Luxury suppliers often provide exclusive access and
                    opportunities unavailable through mainstream travel
                    programs.
                  </p>
                </div>
              </div>

              <div className="luc-why-feature">
                <div className="luc-why-feature-num">04</div>

                <div className="luc-why-feature-body">
                  <h3 className="luc-why-feature-title">
                    Institutional Brand Alignment
                  </h3>

                  <p className="luc-why-feature-desc">
                    High-quality travel experiences reflect positively on the
                    university's reputation and reinforce a commitment to
                    excellence.
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
      {/* ── MEASURING THE SUCCESS OF DONOR TRAVEL PROGRAMS ───────────────────────────── */}
      <section className="ugt-advantage-section" id="ugt-advantage">
        <div className="ugt-advantage-container">
          <div className="ugt-advantage-header">
            <span className="ugt-advantage-eyebrow">
              Program Evaluation & Advancement Impact
            </span>

            <h2 className="ugt-advantage-title">
              Measuring the Success of Donor Travel Programs
            </h2>

            <div className="Asc-accent-line"></div>

            <p className="ugt-advantage-intro">
              Success should not be measured solely by immediate fundraising
              results.
            </p>

            <h3 className="ugt-approach-title">
              Key indicators of success include:
            </h3>
          </div>

          <div className="ugt-advantage-grid">
            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <TrendingUp size={28} strokeWidth={1.5} />
              </div>

              <h4 className="ugt-card-title">Increased Engagement</h4>

              <p className="ugt-card-desc">
                Greater participation in future university initiatives, events,
                and advancement activities following the travel experience.
              </p>
            </div>

            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <Users size={28} strokeWidth={1.5} />
              </div>

              <h4 className="ugt-card-title">Stronger Relationships</h4>

              <p className="ugt-card-desc">
                Improved interaction and deeper connections between donors,
                university leadership, faculty, and advancement teams.
              </p>
            </div>

            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <Repeat size={28} strokeWidth={1.5} />
              </div>

              <h4 className="ugt-card-title">Repeat Participation</h4>

              <p className="ugt-card-desc">
                High return rates and continued involvement often indicate a
                successful and meaningful donor travel program.
              </p>
            </div>

            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <Award size={28} strokeWidth={1.5} />
              </div>

              <h4 className="ugt-card-title">Institutional Loyalty</h4>

              <p className="ugt-card-desc">
                Increased affinity toward the university and stronger emotional
                connections to its mission and community.
              </p>
            </div>

            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <HeartHandshake size={28} strokeWidth={1.5} />
              </div>

              <h4 className="ugt-card-title">
                Long-Term Philanthropic Support
              </h4>

              <p className="ugt-card-desc">
                Many of the most valuable outcomes emerge over time through
                continued engagement, stewardship, and future giving.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* ── COMMON DONOR TRAVEL PROGRAM MISTAKES ───────────────────────── */}
      <section className="Lfsg-section Lfsg-bg-dark" id="Lfsg-challenges">
        <div className="Lfsg-container">
          <div className="Lfsg-section-header">
            <h2 className="Lfsg-h2-white">
              Common Mistakes Universities Make <br /> With Donor Travel
              Programs
            </h2>

            <div className="Lfsg-accent-line-white" />
          </div>

          <div className="Lfsg-mistakes-grid">
            {[
              {
                title: "Treating Travel Like a Fundraising Event",
                desc: "The primary objective should be relationship building, meaningful engagement, and donor stewardship rather than direct solicitation.",
              },

              {
                title:
                  "Choosing Destinations Without Understanding Donor Interests",
                desc: "Successful programs align travel experiences with audience preferences, educational interests, and desired travel styles.",
              },

              {
                title: "Underestimating Planning Requirements",
                desc: "Luxury donor travel programs require extensive coordination, logistical expertise, and attention to detail to ensure a seamless experience.",
              },

              {
                title: "Neglecting Educational Content",
                desc: "Travel without intellectual enrichment often fails to maximize engagement potential. Faculty participation and destination-focused learning add significant value.",
              },

              {
                title: "Selecting the Wrong Travel Partner",
                desc: "Universities need partners who understand both luxury travel and advancement objectives to create meaningful donor experiences.",
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
            <h2 className="Asc-h2">Who Are Donor Travel Programs Best For?</h2>

            <div className="Asc-accent-line"></div>
          </div>

          <div className="Asc-who-grid">
            <div className="Asc-who-card Asc-who-yes">
              <h3 className="Asc-who-title">Best For</h3>

              <ul className="Asc-who-list">
                {[
                  "Advancement offices",
                  "Development teams",
                  "Alumni associations",
                  "Major donor stewardship programs",
                  "University foundations",
                  "Presidential engagement initiatives",
                  "Lifelong learning organizations",
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
                  "Institutions seeking transactional fundraising activities",
                  "Budget-focused travel experiences",
                  "Programs without relationship-building objectives",
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
                University Advancement Travel Specialists
              </span>

              <h2 className="adg-c-h2 adg-c-h2-light">
                Why Universities Choose Trips &amp; Ships Luxury Travel
              </h2>

              <div className="aac-accent-line aac-accent-white"></div>

              <p className="adg-c-lead adg-c-lead-light">
                Trips &amp; Ships Luxury Travel understands the unique role
                travel plays in advancement and donor engagement.
              </p>

              <p className="adg-c-body adg-c-body-light">
                We help universities create meaningful travel experiences that
                strengthen donor relationships, support alumni engagement,
                encourage lifelong learning, and advance institutional goals
                through thoughtfully designed programs.
              </p>
            </div>

            {/* RIGHT — pill grid */}
            <div className="adg-c-why-right">
              <div className="adg-c-why-card">
                <span className="adg-c-why-card-label">We Provide:</span>

                <div className="adg-c-pill-grid">
                  {[
                    "Strategic Program Design",
                    "Luxury Travel Expertise",
                    "Donor-Focused Experiences",
                    "Educational Integration",
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
              University Travel Leadership
            </span>

            <h2 className="Adg-expert-title">
              Angela Hughes: A Trusted Advisor for University Travel Programs
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
                  alt="Angela Hughes - University Travel Program Expert"
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
                  Universities benefit from Angela Hughes' decades of global
                  travel expertise.
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
                    "More than 40 years in travel",
                    "Travel to over 121 countries",
                    "Founder of Luxury Travel University",
                    "Travel Leaders Network Advisory Board Member",
                    "Luxury Travel Influencer of the Year",
                    "International travel educator and speaker",
                    "Weekly travel columnist",
                    "Recognized among the travel industry's most influential professionals",
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
                  Her leadership helps institutions confidently develop donor
                  travel programs that reflect excellence, professionalism, and
                  long-term advancement goals.
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
            alt="University Donor Travel Experience"
            className="Asc-help-bg-img"
          />
          <div className="Asc-help-overlay"></div>
        </div>

        <div className="Asc-container">
          <div className="Asc-help-card">
            <div className="Asc-help-content">
              <div className="Asc-help-header">
                <span className="Asc-help-eyebrow">
                  University Donor Travel Programs
                </span>

                <h2 className="Asc-help-h2">
                  Strengthen Donor Relationships Through Extraordinary Travel
                  Experiences
                </h2>

                <div className="Asc-help-accent"></div>
              </div>

              <div className="Asc-help-grid">
                <div className="Asc-help-info">
                  <p className="Asc-help-intro">
                    The most successful donor relationships are built on trust,
                    shared experiences, and meaningful engagement.
                  </p>

                  <p className="Asc-help-intro">
                    Travel provides a unique platform for universities to
                    cultivate these relationships while delivering exceptional
                    educational and cultural experiences.
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
                      Whether your institution is focused on donor stewardship,
                      major gift development, alumni engagement, or lifelong
                      learning, a thoughtfully designed donor travel program can
                      create lasting value for both participants and the
                      university.
                      <br />
                      <br />
                      With Angela Hughes' global expertise and Trips &amp; Ships
                      Luxury Travel's proven planning process, your institution
                      can create donor travel experiences that inspire loyalty,
                      strengthen relationships, and support long-term
                      advancement goals.
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
                      Start Planning Your Donor Travel Program
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>

                <div className="Asc-help-list-box">
                  <h3 className="Asc-help-list-title">
                    Benefits of Donor Travel Programs:
                  </h3>

                  <ul className="Asc-help-bullets">
                    {[
                      "Meaningful donor stewardship opportunities",
                      "Stronger relationships with university supporters",
                      "Enhanced alumni and advancement engagement",
                      "Educational and cultural enrichment",
                      "Long-term institutional loyalty and affinity",
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
                    designing your custom donor travel program.
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

export default DonorTravelPrograms;
