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
  ShieldCheck,
  Compass,
  BookOpen,
  Users,
  Globe,
  Sparkles,
  X,
} from "lucide-react";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela.jpeg";
import HeroImage1 from "../../assets/WhyUniversitiesPartner/Educational_Travelimage.jpg";
import HeroImage2 from "../../assets/WhyUniversitiesPartner/FacultyLedTravel2.jpg";
import HeroImage3 from "../../assets/LuxuryAlumniTravel/LuxuryAlumni3.jpeg";
import CTAImage from "../../assets/UniversityGroupTravelPlanning/StartPlan.jpeg";

import TravelExperience from "../../assets/WhyUniversitiesPartner/Traveler_Experiences.jpeg";
import TravelExperience2 from "../../assets/WhyUniversitiesPartner/Alumni_Travel_Benefits.jpg";
import TravelExperience3 from "../../assets/WhyUniversitiesPartner/FacultyLedTravel.jpg";

import Experience from "../../assets/LuxuryAlumniTravel/FacultyLedTravel.jpg";
import Experience1 from "../../assets/LuxuryAlumniTravel/Educational_Travel_Experiences.jpg";
import Experience2 from "../../assets/LuxuryAlumniTravel/FacultyLedTravel3.jpg";
import Experience3 from "../../assets/EducationalTravelPrograms/Educational_Travel4.jpg";
import Experience4 from "../../assets/EducationalTravelPrograms/Educational_Travel5.jpg";
import Experience5 from "../../assets/EducationalTravelPrograms/Educational_Travel6.jpg";
import Experience6 from "../../assets/EducationalTravelPrograms/Educational_Travel7.jpg";

import { Helmet } from "react-helmet-async";
const sections = [
  {
    id: "expertise",
    number: "01",
    icon: Sparkles,
    title: "Access to Travel Expertise",
    image: HeroImage3, // replace with your actual image
    lead: "Travel companies spend every day managing complex travel programs across destinations, suppliers, and logistics.",
    blocks: [
      {
        type: "list",
        label: "What Universities Gain",
        variant: "positive",
        items: [
          "Industry knowledge",
          "Supplier relationships",
          "Destination expertise",
          "Operational systems",
          "Best practices developed over years of experience",
        ],
      },
    ],
  },
  {
    id: "suppliers",
    number: "02",
    icon: Globe,
    title: "Strong Supplier Relationships",
    image: TravelExperience2, // replace with your actual image
    lead: "Established travel companies maintain strong global partnerships across luxury travel networks.",
    blocks: [
      {
        type: "list",
        label: "Key Supplier Network",
        variant: "positive",
        items: [
          "Luxury cruise lines",
          "River cruise operators",
          "Expedition providers",
          "Premium hotels",
          "Tour companies",
          "Destination management organizations",
        ],
      },
       {
        type: "list",
        label: "These partnerships often provide:",
        variant: "negative",
        items: [
          "Better value",
          "Preferred availability",
          "Exclusive experiences",
          "Enhanced amenities",
          "VIP treatment",
        ],
      },
    ],
  },
  {
    id: "admin",
    number: "03",
    icon: ShieldCheck,
    title: "Reduced Administrative Burden",
    image: TravelExperience3, // replace with your actual image
    lead: "Managing travel programs requires significant time, coordination, and operational effort.",
    blocks: [
      {
        type: "list",
        label: "What We Handle",
        variant: "positive",
        items: [
          "Reservations",
          "Contracts",
          "Payments",
          "Documentation",
          "Registration",
          "Traveler questions",
          "Supplier communications",
        ],
      },
    ],
  },
];
const experienceSlides = [
  {
    img: Experience,
    text: "Educational Safari Experiences",
  },
  {
    img: Experience1,
    text: "Cultural & Nature Exploration",
  },
  {
    img: Experience2,
    text: "Experiential Adventure Learning",
  },
  {
    img: Experience3,
    text: "Polar Expedition Learning",
  },
  {
    img: Experience4,
    text: "Luxury Educational Journeys",
  },
  {
    img: Experience5,
    text: "Travel the World, Gain New Perspectives",
  },
  {
    img: Experience6,
    text: "Inspiring Journeys for Lifelong Learners",
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
      q: "Why do universities partner with travel companies?",
      a: "Universities partner with travel companies to gain expertise, reduce administrative workload, improve traveler experiences, and manage risk more effectively.",
    },

    {
      q: "What services do travel companies provide for universities?",
      a: "Travel companies manage planning, logistics, reservations, marketing support, supplier relationships, traveler assistance, and on-site coordination.",
    },

    {
      q: "Do travel companies help with alumni cruises?",
      a: "Yes. Professional travel companies often manage every aspect of alumni cruise programs.",
    },

    {
      q: "Can travel programs support fundraising goals?",
      a: "Many institutions use travel programs to strengthen donor relationships and increase engagement.",
    },

    {
      q: "What role does risk management play?",
      a: "Risk management helps protect travelers and the institution during all stages of travel.",
    },

    {
      q: "Why are supplier relationships important?",
      a: "Established relationships often provide better experiences, exclusive amenities, and preferred availability.",
    },

    {
      q: "Can faculty participate in travel programs?",
      a: "Yes. Faculty involvement often enhances educational value and traveler satisfaction.",
    },

    {
      q: "Are travel programs only for alumni?",
      a: "No. Programs may also include donors, parents, faculty, and friends of the institution.",
    },

    {
      q: "What destinations are most popular?",
      a: "Europe, Alaska, Antarctica, river cruise destinations, and cultural heritage regions are consistently popular.",
    },

    {
      q: "How far in advance should universities plan travel programs?",
      a: "Most successful programs begin planning 12–24 months before departure.",
    },

    {
      q: "Can travel programs be customized?",
      a: "Absolutely. Programs should align with institutional goals and audience interests.",
    },

    {
      q: "Why choose a luxury travel company?",
      a: "Luxury travel specialists provide elevated experiences that align with alumni and donor expectations.",
    },

    {
      q: "What makes Trips & Ships Luxury Travel different?",
      a: "We combine luxury travel expertise, educational travel experience, strategic planning, and personalized service.",
    },

    {
      q: "How can universities get started?",
      a: "A consultation helps identify goals, audiences, destinations, and travel opportunities.",
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
const WhyUniversitiesPartner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [readMore, setReadMore] = useState(false);
  const images = [HeroImage1, HeroImage3, HeroImage2];
  const [active, setActive] = useState(sections[0].id);
  const current = sections.find((s) => s.id === active) ?? sections[0];

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
          Why Universities Partner With Travel Companies | Alumni & Educational
          Travel Experts
        </title>
        <meta
          name="title"
          content="Why Universities Choose Professional Travel Companies for Alumni Programs
"
        />
        <meta
          name="description"
          content="Discover why leading universities partner with professional travel companies to manage alumni cruises, donor travel programs, educational tours, and luxury group travel experiences."
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
            Why Universities Partner With Travel Companies for Alumni, Donor,
            and Educational Travel Programs
          </h1>

          <p>
            University travel programs have evolved dramatically over the past
            decade.
          </p>

          <p>
            What was once considered a simple alumni trip has become a
            sophisticated engagement strategy involving alumni relations,
            advancement departments, donor cultivation, faculty participation,
            risk management, marketing, logistics, and institutional brand
            protection.
          </p>

          {/* READ MORE CONTENT */}
          {readMore && (
            <>
              <p>
                As these programs continue to grow, more universities are
                discovering that managing travel internally is often far more
                complex than anticipated.
              </p>

              <p>
                That is why many leading institutions choose to partner with
                professional travel companies that specialize in alumni, donor,
                educational, and luxury group travel experiences.
              </p>

              <p>
                At Trips &amp; Ships Luxury Travel, we work closely with
                universities to create memorable travel experiences that
                strengthen alumni relationships, support advancement goals, and
                reflect the excellence of the institution itself.
              </p>

              <p>
                Under the leadership of Angela Hughes, one of the most respected
                voices in luxury travel, universities gain access to decades of
                expertise that helps ensure successful travel programs from
                concept through completion.
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
WHY UNIVERSITY TRAVEL PROGRAMS CONTINUE TO GROW
═════════════════════════════════════════ */}
      <section className="adg-c-section adg-c-bg-dark" id="adg-why-dining">
        <div className="adg-c-container">
          <div className="adg-c-why-grid">
            {/* LEFT — text */}
            <div className="adg-c-why-left">
              <span className="adg-c-eyebrow adg-c-eyebrow-light">
                Higher Education Engagement Trends
              </span>
              <h2 className="adg-c-h2 adg-c-h2-light">
                The Growing Importance of Travel in Higher Education
              </h2>
              <div className="aac-accent-line aac-accent-white"></div>
              <p className="adg-c-lead adg-c-lead-light">
                Universities today face significant challenges in maintaining
                strong relationships across alumni, donors, faculty, and broader
                institutional communities.
              </p>
              <p className="adg-c-body adg-c-body-light">
                Traditional engagement methods remain valuable, but experiential
                programs often create stronger emotional connections that last
                far beyond a single event or interaction.
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
              </p>{" "}
              <br />
              {readMore && (
                <p className="adg-c-body adg-c-body-light">
                  Many universities now view travel programs as a strategic
                  extension of alumni engagement and advancement efforts rather
                  than simply a leisure activity.
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
                  Key institutional priorities include:
                </span>

                <div className="adg-c-pill-grid">
                  {[
                    "Alumni engagement",
                    "Donor retention",
                    "Community building",
                    "Lifelong learning initiatives",
                    "Competitive fundraising environments",
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

      {/* ════════════════════════════════════════
WHY INTERNAL TRAVEL PLANNING OFTEN BECOMES CHALLENGING
════════════════════════════════════════ */}
      <section className="adg-c-section adg-c-bg-white" id="adg-overview">
        <div className="adg-c-container">
          <div className="adg-c-section-header">
            <span className="adg-c-eyebrow">
              University Travel Program Complexity
            </span>

            <h2 className="adg-c-h2">
              Why Internal Travel Planning Often Becomes Challenging
            </h2>

            <div className="adg-c-accent-line"></div>
          </div>

          <div className="adg-c-overview-layout">
            {/* LEFT — list */}
            <div className="adg-c-overview-icons">
              {[
                "Cruise line contracts",
                "Tour operator negotiations",
                "Group air arrangements",
                "Traveler communications",
                "Registration systems",
                "Insurance requirements",
                "Risk management",
                "Emergency response planning",
                "Destination expertise",
                "Marketing campaigns",
                "On-site coordination",
              ].map((label, i) => (
                <div key={i} className="adg-c-overview-item">
                  <span className="adg-c-overview-icon">
                    <Check size={16} strokeWidth={3} />
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
                    While it may appear simple at first glance, successful
                    university travel programs require coordination across
                    multiple complex operational areas that demand specialized
                    expertise.
                  </p>
                </div>
              </div>

              <div
                className="adg-c-overview-image-wrap"
                style={{ height: "100%" }}
              >
                <img
                  src={HeroImage2}
                  alt="University travel planning challenges"
                  className="adg-c-overview-img"
                />

                <div className="adg-c-overview-img-overlay">
                  <span className="adg-c-overview-img-label">
                    Travel Program Operations
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
THE TOP REASONS UNIVERSITIES PARTNER WITH PROFESSIONAL TRAVEL COMPANIES
════════════════════════════════════════ */}
      <section className="Ejv-section" style={{ backgroundColor: "var(--bg-soft)" }}>
        <div className="Ejv-container">
          {/* Header */}
          <div className="Ejv-header">
            <h2 className="Ejv-title">
              The Top Reasons Universities Partner With Professional Travel
              Companies
            </h2>

            <div className="adg-c-accent-line"></div>
          </div>

          {/* Step Nav */}
          <div className="Ejv-step-nav">
            {sections.map((s) => {
              const Icon = s.icon;
              const isActive = active === s.id;

              return (
                <button
                  key={s.id}
                  className={`Ejv-step-btn ${
                    isActive ? "Ejv-step-btn--active" : ""
                  }`}
                  onClick={() => setActive(s.id)}
                >
                  <span className="Ejv-step-num">{s.number}</span>

                  <div className="Ejv-step-text">
                    <Icon
                      size={15}
                      strokeWidth={1.8}
                      className="Ejv-step-icon"
                    />
                    <span className="Ejv-step-label">{s.title}</span>
                  </div>

                  {isActive && <div className="Ejv-step-indicator"></div>}
                </button>
              );
            })}
          </div>

          {/* Panel */}
          <div className="Ejv-panel" key={active}>
            <div className="Ejv-panel-left">
              <div className="Ejv-img-wrap">
                <img
                  src={current.image}
                  alt={current.title}
                  className="Ejv-img"
                />

                <div className="Ejv-img-overlay">
                  <span className="Ejv-img-num">{current.number}</span>
                </div>
              </div>

              <div className="Ejv-lead-card">
                <ArrowRight
                  size={16}
                  strokeWidth={2}
                  className="Ejv-lead-icon"
                />
                <p className="Ejv-lead">{current.lead}</p>
              </div>
            </div>

            <div className="Ejv-panel-right">
              {current.blocks.map((block, i) => (
                <div
                  key={i}
                  className={`Ejv-block Ejv-block--${block.variant}`}
                >
                  <div className="Ejv-block-header">
                    <span
                      className={`Ejv-block-label Ejv-block-label--${block.variant}`}
                    >
                      {block.label}
                    </span>
                  </div>

                  <ul className="Ejv-list">
                    {block.items.map((item) => (
                      <li
                        key={item}
                        className={`Ejv-list-item Ejv-list-item--${block.variant}`}
                      >
                        {block.variant === "negative" ? (
                          <X
                            size={13}
                            strokeWidth={2.5}
                            className="Ejv-list-icon"
                          />
                        ) : (
                          <Check
                            size={13}
                            strokeWidth={2.5}
                            className="Ejv-list-icon"
                          />
                        )}
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT MAKES UNIVERSITY TRAVEL PLANNING DIFFERENT ─────────────────────── */}
      <section className="ugt-diff-section" id="ugt-different">
        <div className="ugt-diff-container">
          {/* Header */}
          <div className="ugt-diff-header">
            <h2 className="ugt-diff-title">Enhanced Risk Management</h2>

            <div className="adg-c-accent-line"></div>

            <p className="ugt-diff-intro">
              One of the most important reasons universities partner with travel
              experts is risk mitigation and comprehensive traveler protection.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="ugt-diff-grid">
            {[
              {
                icon: <ShieldCheck size={28} strokeWidth={1.5} />,
                number: "01",
                title: "Emergency Planning",
                body: "Preparation for unexpected situations before departure.",
              },
              {
                icon: <Users size={28} strokeWidth={1.5} />,
                number: "02",
                title: "Traveler Support",
                body: "Assistance throughout the travel experience.",
              },
              {
                icon: <Globe size={28} strokeWidth={1.5} />,
                number: "03",
                title: "Supplier Vetting",
                body: "Working with trusted and reliable travel providers.",
              },
              {
                icon: <Award size={28} strokeWidth={1.5} />,
                number: "04",
                title: "Crisis Response",
                body: "Support during weather disruptions, medical emergencies, transportation issues, or global events.",
              },
              {
                icon: <MapPin size={28} strokeWidth={1.5} />,
                number: "05",
                title: "Institutional Protection",
                body: "Universities have a responsibility to protect travelers while also safeguarding institutional reputation.",
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

      {/* ===== EXPERIENCE ===== */}
      {/* <section className="experience">
        <div className="section-inner wide">
          <h2 className="afc-h2" style={{ textAlign: "center" }}>
            Luxury Alumni Travel Experiences
          </h2>
          <div className="exp-slider">
            <div className="exp-track">
              {[...experienceSlides, ...experienceSlides].map((slide, i) => (
                <div
                  key={i}
                  className="exp-slide"
                  style={{ backgroundImage: `url('${slide.img}')` }}
                >
                  <span>{slide.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

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

      {/* ════════════════════════════════════════
BETTER TRAVELER EXPERIENCES
════════════════════════════════════════ */}
      <section className="adg-c-section adg-c-bg-white" id="adg-overview">
        <div className="adg-c-container">
          <div className="adg-c-section-header">
            <span className="adg-c-eyebrow">Alumni Travel Excellence</span>

            <h2 className="adg-c-h2">Better Traveler Experiences</h2>

            <div className="adg-c-accent-line"></div>
          </div>

          <div className="adg-c-overview-layout">
            {/* LEFT — list */}
            <div className="adg-c-overview-icons">
              {[
                "Service expectations",
                "Luxury standards",
                "Group dynamics",
                "Destination logistics",
                "Personalized travel planning",
              ].map((label, i) => (
                <div key={i} className="adg-c-overview-item">
                  <span className="adg-c-overview-icon">★</span>
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
                    Professional travel companies understand the expectations of
                    alumni travelers and design experiences that reflect premium
                    service standards and seamless execution.
                  </p>
                </div>
              </div>

              <div className="adg-c-overview-image-wrap">
                <img
                  src={TravelExperience }
                  alt="Better alumni travel experiences"
                  className="adg-c-overview-img"
                />

                <div className="adg-c-overview-img-overlay">
                  <span className="adg-c-overview-img-label">
                    Premium Travel Experience
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY TRIPS & SHIPS */}
      <section className="Asc-section Asc-bg-soft" id="Asc-why">
        <div className="Asc-container">
          <div className="Asc-section-header margin-large">
            <h2 className="Asc-h2">
              How Travel Programs Support <br /> University Advancement Goals
            </h2>
            <div className="Asc-accent-line"></div>
          </div>

          <div className="Asc-why-trust-grid">
            {/* LEFT COLUMN: INTRO & HIGHLIGHT */}
            <div>
              <p className="Asc-why-trust-intro">
                Many advancement departments are discovering that travel
                programs contribute to long-term fundraising success by creating
                meaningful, relationship-driven experiences.
              </p>

              <p className="Asc-why-trust-intro">
                Unlike traditional fundraising events, travel programs provide
                extended opportunities for engagement in relaxed, immersive
                environments where deeper connections can form naturally.
              </p>

              <div
                className="Asc-overview-highlight-box Asc-why-trust-quote-box"
                style={{ backgroundColor: "var(--bg-white)" }}
              >
                <p className="Asc-why-trust-quote-text">
                  “These shared travel experiences often strengthen donor
                  affinity and long-term institutional loyalty.”
                </p>
              </div>
            </div>

            {/* RIGHT COLUMN: THE 5 DELIVERABLES */}
            <div className="Asc-why-panel Asc-why-trust-panel">
              <div className="Asc-why-panel-top Asc-why-trust-panel-top">
                <div className="Asc-why-panel-icon">
                  <Award size={20} />
                </div>

                <h3 className="Asc-why-panel-title Asc-why-trust-panel-title">
                  Travel Programs Create Opportunities For:
                </h3>
              </div>

              <ul className="Asc-why-panel-list Asc-why-trust-panel-list">
                {[
                  "Relationship building",
                  "Donor cultivation",
                  "Leadership interaction",
                  "Shared experiences",
                  "Meaningful conversations",
                ].map((item, i) => (
                  <li key={i} className="Asc-why-trust-item">
                    <span className="Asc-why-panel-num Asc-why-trust-num">
                      {i + 1}
                    </span>
                    <span className="Asc-why-trust-label">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── COMMON ALUMNI TRAVEL MISTAKES ───────────────────────────────────────── */}
      <section className="Lfsg-section Lfsg-bg-dark" id="Lfsg-challenges">
        <div className="Lfsg-container">
          <div className="Lfsg-section-header">
            <h2 className="Lfsg-h2-white">
              Common Mistakes Universities Make Without Professional Support
            </h2>

            <div className="Lfsg-accent-line-white" />
          </div>

          <div className="Lfsg-mistakes-grid">
            {[
              {
                title: "Selecting Destinations Based Only on Popularity",
                desc: "The most popular destination is not always the best fit for alumni audiences.",
              },
              {
                title: "Underestimating Marketing Requirements",
                desc: "Travel programs require strategic promotion to achieve participation goals.",
              },
              {
                title: "Ignoring Risk Management",
                desc: "Risk planning should be incorporated from the beginning.",
              },
              {
                title: "Waiting Too Long to Reserve Space",
                desc: "Luxury cruises and premium group departures often sell out well in advance.",
              },
              {
                title: "Focusing Solely on Cost",
                desc: "Value, experience quality, and traveler satisfaction are often more important than finding the lowest price.",
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

      {/* ── THE TRIPS & SHIPS LUXURY TRAVEL ADVANTAGE ───────────────────────────── */}
      <section className="ugt-advantage-section" id="ugt-advantage">
        <div className="ugt-advantage-container">
          <div className="ugt-advantage-header">
            <span className="ugt-advantage-eyebrow">
              Educational Value Matters
            </span>

            <h2 className="ugt-advantage-title">
              Educational Value Matters in University Travel Programs
            </h2>

            <div className="Asc-accent-line"></div>

            <p className="ugt-advantage-intro">
              One of the unique advantages universities possess is their ability
              to incorporate learning into travel experiences, creating deeper
              meaning and engagement for participants.
            </p>

            <h3 className="ugt-approach-title">
              Professional travel partners help institutions integrate:
            </h3>
          </div>

          <div className="ugt-advantage-grid">
            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <BookOpen size={28} strokeWidth={1.5} />
              </div>

              <h4 className="ugt-card-title">Faculty Lectures</h4>
              <p className="ugt-card-desc">
                Professors sharing expertise related to destinations and
                cultures.
              </p>
            </div>

            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <Award size={28} strokeWidth={1.5} />
              </div>

              <h4 className="ugt-card-title">Academic Themes</h4>
              <p className="ugt-card-desc">
                Travel experiences aligned with institutional strengths.
              </p>
            </div>

            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <Compass size={28} strokeWidth={1.5} />
              </div>

              <h4 className="ugt-card-title">Cultural Immersion</h4>
              <p className="ugt-card-desc">
                Meaningful interactions that go beyond standard tourism.
              </p>
            </div>

            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <ShieldCheck size={28} strokeWidth={1.5} />
              </div>

              <h4 className="ugt-card-title">Expert Speakers</h4>
              <p className="ugt-card-desc">
                Historians, scientists, authors, and local experts who enrich
                the travel experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
WHY UNIVERSITIES PARTNER WITH PROFESSIONAL TRAVEL EXPERTS
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
                Trusted University Travel Partner
              </span>

              <h2 className="adg-c-h2 adg-c-h2-light">
                Why Universities Choose Trips &amp; Ships Luxury Travel
              </h2>

              <div className="aac-accent-line aac-accent-white"></div>

              <p className="adg-c-lead adg-c-lead-light">
                Trips &amp; Ships Luxury Travel has become a trusted partner for
                institutions seeking exceptional travel experiences.
              </p>

              <p className="adg-c-body adg-c-body-light">
                Universities choose us because we provide strategic,
                well-designed travel programs that align with institutional
                goals and enhance engagement outcomes.
              </p>
            </div>

            {/* RIGHT — pill grid */}
            <div className="adg-c-why-right">
              <div className="adg-c-why-card">
                <span className="adg-c-why-card-label">
                  Universities choose us because we provide:
                </span>

                <div className="adg-c-pill-grid">
                  {[
                    "Strategic Travel Program Development",
                    "Luxury Travel Expertise",
                    "Educational Travel Experience",
                    "White-Glove Service",
                    "Long-Term Partnership",
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

      {/* WHO SHOULD CHOOSE */}
      <section className="Asc-section Asc-bg-soft" id="Asc-who">
        <div className="Asc-container">
          <div className="Asc-section-header">
            <h2 className="Asc-h2">
              Who Is University Travel Planning Best For?
            </h2>
            <div className="Asc-accent-line"></div>
          </div>

          <div className="Asc-who-grid">
            <div className="Asc-who-card Asc-who-yes">
              <h3 className="Asc-who-title">Best For</h3>

              <ul className="Asc-who-list">
                {[
                  "Universities developing alumni travel programs",
                  "Advancement departments",
                  "Alumni associations",
                  "Donor engagement initiatives",
                  "Educational travel programs",
                  "Continuing education organizations",
                  "Lifelong learning communities",
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
                  "Organizations seeking unmanaged travel arrangements",
                  "Budget-focused mass-market travel experiences",
                  "Programs without engagement or educational objectives",
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

      {/* WHY TRIPS & SHIPS LUXURY TRAVEL */}
      <section className="Adg-expert-section" id="Asc-expert-insight">
        <div className="Asc-container">
          {/* TOP HEADING */}
          <div className="Adg-expert-heading">
            <span className="Adg-expert-eyebrow">
              University Travel Program Leadership
            </span>

            <h2 className="Adg-expert-title">
              Angela Hughes: A Trusted Authority for University Travel Programs
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
                  Universities benefit from the leadership and experience of
                  Angela Hughes.
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
                    "Global travel educator and speaker",
                    "Weekly travel columnist",
                    "2024 Luxury Travel Influencer of the Year",
                    "Named among the Most Influential Women in Travel",
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
                  This level of expertise provides confidence for institutions
                  seeking a trusted travel partner.
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
            alt="Higher education travel partnership"
            className="Asc-help-bg-img"
          />
          <div className="Asc-help-overlay"></div>
        </div>

        <div className="Asc-container">
          <div className="Asc-help-card">
            <div className="Asc-help-content">
              <div className="Asc-help-header">
                <span className="Asc-help-eyebrow">
                  Higher Education Travel Partnerships
                </span>

                <h2 className="Asc-help-h2">
                  Partner With a Travel Company That Understands Higher
                  Education
                </h2>

                <div className="Asc-help-accent"></div>
              </div>

              <div className="Asc-help-grid">
                <div className="Asc-help-info">
                  <p className="Asc-help-intro">
                    University travel programs require more than booking
                    expertise.
                  </p>

                  <p className="Asc-help-intro">
                    They require strategic planning, educational vision, risk
                    management, supplier relationships, and a deep understanding
                    of alumni and donor engagement.
                  </p>

                  <p className="Asc-help-intro">
                    Trips &amp; Ships Luxury Travel helps institutions create
                    travel experiences that strengthen relationships, enhance
                    reputation, and support long-term institutional goals.
                  </p>

                  <p className="Asc-help-intro">
                    With Angela Hughes' decades of expertise and global travel
                    experience, universities gain a trusted partner committed to
                    delivering exceptional outcomes.
                  </p>

                  <div className="Asc-help-btn-container">
                    <button className="Asc-help-cta-btn">
                      Contact Us Today
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>

                <div className="Asc-help-list-box">
                  <h3 className="Asc-help-list-title">
                    Why Universities Partner With Us:
                  </h3>

                  <ul className="Asc-help-bullets">
                    {[
                      "Strategic travel program planning",
                      "Higher education travel expertise",
                      "Comprehensive risk management",
                      "Strong supplier relationships",
                      "Exceptional traveler experiences",
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
                    Contact Trips &amp; Ships Luxury Travel today to learn how a
                    professionally managed travel program can support your
                    university&apos;s engagement and advancement objectives.
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

export default WhyUniversitiesPartner;
