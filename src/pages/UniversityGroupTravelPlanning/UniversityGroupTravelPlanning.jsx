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
  HeartHandshake,
  Users,
  Globe,
} from "lucide-react";
import Nav from "../../components/Navbar/Nav";
import "./UniversityGroupTravelPlanning.css";
import AboutImage from "../../assets/image.webp";
import HeroImage1 from "../../assets/UniversityGroupTravelPlanning/GroupTravel.jpeg";
import HeroImage2 from "../../assets/LuxuryAlumniTravel/LuxuryAlumni2.jpeg";
import HeroImage3 from "../../assets/LuxuryAlumniTravel/LuxuryAlumni3.jpeg";
import CTAImage from "../../assets/UniversityGroupTravelPlanning/StartPlan.jpeg";

import Europe from "../../assets/LuxuryAlumniTravel/Europe.jpeg";

import Experience from "../../assets/LuxuryAlumniTravel/FacultyLedTravel.jpg";
import Experience1 from "../../assets/LuxuryAlumniTravel/Educational_Travel_Experiences.jpg";
import Experience2 from "../../assets/LuxuryAlumniTravel/FacultyLedTravel3.jpg";
import Experience3 from "../../assets/EducationalTravelPrograms/Educational_Travel4.jpg";
import Experience4 from "../../assets/EducationalTravelPrograms/Educational_Travel5.jpg";
import Experience5 from "../../assets/EducationalTravelPrograms/Educational_Travel6.jpg";
import Experience6 from "../../assets/EducationalTravelPrograms/Educational_Travel7.jpg";

import { Helmet } from "react-helmet-async";

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
        "Luxury travel agency specializing in university group travel planning, alumni travel programs, faculty-led travel, educational travel experiences, donor travel programs, and luxury cruises.",
    },

    {
      "@type": "TravelAgency",
      "@id": "https://www.tripsandships.com/#travelagency",
      name: "Trips & Ships Luxury Travel",
      url: "https://www.tripsandships.com",
      description:
        "Professional travel planning experts helping universities, alumni associations, advancement departments, faculty leaders, and educational institutions create exceptional group travel experiences.",
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
        "CEO of Trips & Ships Luxury Travel, Founder of Luxury Travel University, Travel Leaders Network Advisory Board Member, luxury travel educator, speaker, columnist, and travel expert with more than 40 years of experience and travel to over 121 countries.",
    },

    {
      "@type": "WebPage",
      "@id": "https://www.tripsandships.com/university-group-travel-planning",
      url: "https://www.tripsandships.com/university-group-travel-planning",
      name: "University Group Travel Planning",
      description:
        "Professional university group travel planning services for alumni associations, faculty-led programs, donor travel initiatives, educational tours, and lifelong learning experiences.",
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
        "https://www.tripsandships.com/university-group-travel-planning#breadcrumb",
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
          name: "University Group Travel Planning",
          item:
            "https://www.tripsandships.com/university-group-travel-planning",
        },
      ],
    },

    {
      "@type": "FAQPage",
      "@id":
        "https://www.tripsandships.com/university-group-travel-planning#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is university group travel planning?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "University group travel planning involves organizing travel programs for alumni, donors, faculty, students, and supporters while managing logistics, risk, educational content, and traveler experiences.",
          },
        },

        {
          "@type": "Question",
          name: "Why do universities offer travel programs?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Universities offer travel programs to strengthen alumni engagement, support fundraising initiatives, encourage lifelong learning, and build stronger institutional communities.",
          },
        },

        {
          "@type": "Question",
          name: "How far in advance should university travel programs be planned?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most successful university travel programs begin planning 12 to 24 months before departure to secure the best destinations, accommodations, and group opportunities.",
          },
        },

        {
          "@type": "Question",
          name: "What types of university travel programs are most popular?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Popular programs include alumni cruises, river cruises, educational tours, cultural journeys, faculty-led travel, donor travel programs, and expedition travel experiences.",
          },
        },

        {
          "@type": "Question",
          name: "Can donor cultivation be incorporated into travel programs?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Travel programs provide valuable opportunities for relationship building, donor engagement, and meaningful interactions between supporters and university leadership.",
          },
        },

        {
          "@type": "Question",
          name: "Are travel programs profitable for universities?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Many programs generate indirect value through increased alumni engagement, donor retention, stronger institutional loyalty, and enhanced fundraising opportunities.",
          },
        },

        {
          "@type": "Question",
          name: "How many travelers typically participate in university travel programs?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Programs range from small VIP groups of 20 participants to large alumni travel programs with more than 150 travelers.",
          },
        },

        {
          "@type": "Question",
          name: "What destinations perform best for university travel programs?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Europe, Alaska, Antarctica, river cruise regions, cultural heritage destinations, and educational travel experiences consistently perform well.",
          },
        },

        {
          "@type": "Question",
          name: "How can universities market travel programs effectively?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Successful marketing strategies include email campaigns, alumni magazines, webinars, social media promotion, university events, and dedicated travel program websites.",
          },
        },

        {
          "@type": "Question",
          name: "What role do faculty members play in travel programs?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Faculty often provide educational lectures, destination insights, academic expertise, and meaningful learning opportunities that enrich the travel experience.",
          },
        },

        {
          "@type": "Question",
          name: "What travel suppliers are commonly used?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Universities often work with luxury cruise lines, river cruise operators, premium hotels, destination management companies, and specialized tour providers.",
          },
        },

        {
          "@type": "Question",
          name: "Why use a professional travel partner?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Professional travel partners provide destination expertise, supplier relationships, risk management, operational support, traveler assistance, and marketing guidance.",
          },
        },

        {
          "@type": "Question",
          name: "What makes Trips & Ships Luxury Travel different?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Trips & Ships Luxury Travel combines luxury travel expertise, university travel experience, educational programming, strategic planning, and personalized white-glove service.",
          },
        },

        {
          "@type": "Question",
          name: "Can university travel programs be customized?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. Every university travel program can be customized to align with institutional goals, alumni interests, donor objectives, educational priorities, and brand standards.",
          },
        },

        {
          "@type": "Question",
          name: "How can universities get started?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A consultation with Trips & Ships Luxury Travel helps identify travel objectives, target audiences, destinations, program formats, and long-term strategic opportunities.",
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
      q: "What is university group travel planning?",
      a: "University group travel planning involves organizing travel programs for alumni, donors, faculty, students, and supporters while managing logistics, risk, educational programming, and traveler experiences.",
    },

    {
      q: "Why do universities offer travel programs?",
      a: "Travel programs strengthen engagement, support fundraising efforts, encourage lifelong learning, and create meaningful connections between universities and their communities.",
    },

    {
      q: "How far in advance should programs be planned?",
      a: "Most successful university travel programs begin planning 12 to 24 months before departure to ensure the best availability, pricing, and marketing opportunities.",
    },

    {
      q: "What types of travel programs are most popular?",
      a: "Alumni cruises, river cruises, educational tours, cultural journeys, faculty-hosted travel, and expedition cruises are among the most popular university travel programs.",
    },

    {
      q: "Can donor cultivation be incorporated into travel programs?",
      a: "Yes. Travel programs provide valuable opportunities for relationship building, donor engagement, and meaningful interactions in relaxed and immersive environments.",
    },

    {
      q: "Are travel programs profitable for universities?",
      a: "Many programs generate indirect value through increased alumni engagement, donor retention, stronger institutional affinity, and enhanced community relationships.",
    },

    {
      q: "How many travelers typically participate?",
      a: "Programs range from small VIP groups of approximately 20 participants to large alumni travel programs that exceed 150 travelers.",
    },

    {
      q: "What destinations perform best?",
      a: "Europe, Alaska, Antarctica, river cruise destinations, cultural heritage regions, and educational travel destinations consistently perform well for university travel programs.",
    },

    {
      q: "How can universities market travel programs?",
      a: "Email campaigns, alumni magazines, webinars, social media, events, direct mail, and dedicated travel program websites are highly effective marketing tools.",
    },

    {
      q: "What role do faculty members play?",
      a: "Faculty often provide educational content, destination lectures, expert insights, and intellectual enrichment that enhance the overall travel experience.",
    },

    {
      q: "What travel suppliers are commonly used?",
      a: "Luxury cruise lines, river cruise operators, expedition cruise companies, tour operators, destination management companies, and premium hotel partners are commonly used.",
    },

    {
      q: "Why use a professional travel partner?",
      a: "Professional travel partners provide industry expertise, supplier relationships, operational support, traveler assistance, and risk management capabilities that universities may not have internally.",
    },

    {
      q: "What makes Trips & Ships Luxury Travel different?",
      a: "Trips & Ships Luxury Travel combines luxury travel expertise, university travel experience, educational programming, strategic planning, and personalized service to create exceptional travel outcomes.",
    },

    {
      q: "Can programs be customized?",
      a: "Absolutely. Every university travel program can be customized to reflect the institution's goals, audience, educational objectives, and brand identity.",
    },

    {
      q: "How can universities get started?",
      a: "A consultation with Trips & Ships Luxury Travel helps identify goals, audiences, destinations, travel formats, and strategic opportunities for a successful university travel program.",
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
const UniversityGroupTravelPlanning = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [readMore, setReadMore] = useState(false);
  const images = [HeroImage1, HeroImage3, HeroImage2];

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
          University Group Travel Planning Services | Alumni, Faculty &
          Educational Travel
        </title>
        <meta
          name="title"
          content=" University Group Travel Planning | Trips & Ships Luxury Travel"
        />
        <meta
          name="description"
          content="Discover professional university group travel planning for alumni associations, faculty-led programs, donors, and educational travel experiences. Expertly managed by Trips & Ships Luxury Travel."
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
           University Group Travel Planning for Alumni, Faculty & Educational Communities
          </h1>

          <p>Successful university travel programs don't happen by accident.</p>

          <p>
            Behind every memorable alumni cruise, educational expedition, donor
            journey, and faculty-led travel experience is a carefully designed
            strategy that balances logistics, engagement, risk management,
            educational value, and traveler satisfaction.
          </p>

          {/* READ MORE CONTENT */}
          {readMore && (
            <>
              <p>
                As universities continue searching for innovative ways to
                strengthen alumni relationships, increase donor engagement, and
                expand lifelong learning opportunities, professionally managed
                travel programs have become one of the most effective tools
                available.
              </p>

              <p>
                At Trips &amp; Ships Luxury Travel, we specialize in helping
                universities design, manage, and execute world-class travel
                experiences that reflect the institution's reputation while
                delivering exceptional value to travelers.
              </p>

              <p>
                Led by Angela Hughes, one of the travel industry's most
                recognized luxury travel experts, our team helps institutions
                transform travel into a powerful engagement and advancement
                strategy.
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
                University Travel Program Benefits
              </span>

              <h2 className="adg-c-h2 adg-c-h2-light">
                Why University Travel Programs Continue to Grow
              </h2>

              <div className="aac-accent-line aac-accent-white"></div>

              <p className="adg-c-lead adg-c-lead-light">
                Higher education institutions face increasing pressure to
                strengthen relationships with alumni, donors, parents, and
                supporters.
              </p>

              <p className="adg-c-body adg-c-body-light">
                Traditional engagement methods remain important, but
                experiential programs create deeper emotional connections.
              </p>

              <br />

              <p className="adg-c-body adg-c-body-light">
                When participants travel together under the university banner,
                they create shared memories that often strengthen their
                connection to the institution for years.
              </p>
            </div>

            {/* RIGHT — pill grid */}
            <div className="adg-c-why-right">
              <div className="adg-c-why-card">
                <span className="adg-c-why-card-label">
                  Travel programs support:
                </span>

                <div className="adg-c-pill-grid">
                  {[
                    "Alumni engagement",
                    "Donor cultivation",
                    "Educational enrichment",
                    "Faculty interaction",
                    "Lifelong learning",
                    "Community building",
                    "Institutional visibility",
                    "Stronger alumni connections",
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
      TYPES OF UNIVERSITY TRAVEL PROGRAMS
═════════════════════════════════════════ */}
      <section className="adg-c-section adg-c-bg-soft" id="adg-complimentary">
        <div className="adg-c-container">
          <div className="adg-c-section-header">
            <h2 className="adg-c-h2">Types of University Travel Programs</h2>

            <div className="adg-c-accent-line"></div>

            <p className="Asc-section-intro">
              Every institution has unique goals, and the most successful travel
              programs are tailored <br /> to specific audiences and engagement
              objectives.
            </p>
          </div>

          <div className="adg-c-venues-grid1">
            {[
              {
                id: 1,
                eyebrow: "Graduate Engagement Programs",
                name: "Alumni Travel Programs",
                highlight:
                  "Designed to reconnect graduates with their university community while exploring destinations around the world.",
                items: [
                  "Luxury cruises",
                  "River cruises",
                  "Cultural journeys",
                  "Historical tours",
                  "Culinary travel experiences",
                ],
                callout:
                  "These programs strengthen alumni relationships while creating memorable shared experiences with fellow graduates.",
              },

              {
                id: 2,
                eyebrow: "Expert-Led Learning",
                name: "Faculty-Led Educational Travel",
                highlight:
                  "Participants learn directly from faculty experts while experiencing destinations firsthand.",
                items: [
                  "Art history tours",
                  "Archaeology expeditions",
                  "Cultural immersion programs",
                  "Environmental science travel",
                  "International business experiences",
                ],
                callout:
                  "Faculty-led travel combines academic expertise with immersive real-world learning opportunities.",
              },

              {
                id: 3,
                eyebrow: "Advancement & Development",
                name: "Donor Travel Programs",
                highlight:
                  "Exclusive travel experiences help universities strengthen relationships with donors and advancement prospects.",
                items: [
                  "VIP access",
                  "Private receptions",
                  "Leadership participation",
                  "Special educational content",
                ],
                callout:
                  "These curated experiences provide meaningful engagement opportunities with university leadership and supporters.",
              },

              {
                id: 4,
                eyebrow: "Family-Focused Experiences",
                name: "Multi-Generational Alumni Travel",
                highlight:
                  "Growing demand for travel experiences that allow alumni families to participate together.",
                items: [
                  "Alumni",
                  "Spouses",
                  "Children",
                  "Grandchildren",
                  "Family engagement",
                ],
                callout:
                  "These programs deepen family connections to the institution while creating lifelong memories across generations.",
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

      {/* ── WHAT MAKES UNIVERSITY TRAVEL PLANNING DIFFERENT ─────────────────────── */}
      <section className="ugt-diff-section" id="ugt-different">
        <div className="ugt-diff-container">

          {/* Header */}
          <div className="ugt-diff-header">
            <h2 className="ugt-diff-title">
              What Makes University Travel Planning Different?
            </h2>
         
            <div className="adg-c-accent-line"></div>
            <p className="ugt-diff-intro">
              University travel programs involve complexities that standard vacation
              planning does not. Institutions must consider a unique set of
              responsibilities that go far beyond booking flights and hotels.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="ugt-diff-grid">
            {[
              {
                icon: <ShieldCheck size={28} strokeWidth={1.5} />,
                number: "01",
                title: "Brand Protection",
                body: "Every travel experience reflects the university's reputation. Poor execution can negatively impact alumni satisfaction and institutional perception.",
              },
              {
                icon: <Users size={28} strokeWidth={1.5} />,
                number: "02",
                title: "Duty of Care",
                body: "Universities must ensure travelers are fully supported before, during, and after travel — from pre-departure to safe return home.",
              },
              {
                icon: <Globe size={28} strokeWidth={1.5} />,
                number: "03",
                title: "Risk Management",
                body: null,
                risks: [
                  "Travel disruptions",
                  "Medical emergencies",
                  "Supplier issues",
                  "Global events",
                ],
              },
              {
                icon: <Award size={28} strokeWidth={1.5} />,
                number: "04",
                title: "Educational Value",
                body: "Travel should align with the institution's mission and values whenever possible, creating meaningful learning touchpoints throughout every journey.",
              },
              {
                icon: <MapPin size={28} strokeWidth={1.5} />,
                number: "05",
                title: "Financial Accountability",
                body: "Budgets, contracts, and supplier relationships require careful management to protect the institution and deliver maximum value to participants.",
              },
            ].map((card, i) => (
              <div key={i} className="ugt-diff-card">
                <div className="ugt-diff-card-top">
                  <div className="ugt-diff-icon">{card.icon}</div>
                  <span className="ugt-diff-number">{card.number}</span>
                </div>
                <h3 className="ugt-diff-card-title">{card.title}</h3>
                {card.body && (
                  <p className="ugt-diff-card-body">{card.body}</p>
                )}
                {card.risks && (
                  <>
                    <p className="ugt-diff-card-body">
                      Professional oversight helps address:
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

      {/* ── ESSENTIAL COMPONENTS OF SUCCESSFUL UNIVERSITY GROUP TRAVEL PLANNING ───── */}
      <section className="ugt-components-section" id="ugt-components">
        <div className="ugt-components-container">
          <div className="ugt-components-header">
            <h2 className="ugt-components-title">
              Essential Components of <br /> Successful University Group Travel Planning
            </h2>
                <div className="adg-c-accent-line"></div>
          </div>

          <div className="ugt-components-list">
            {/* ITEM 1: Strategic Goal Setting */}
            <div className="ugt-component-row">
              <div className="ugt-component-image-wrapper">
                <div className="ugt-component-image-container">
                  <img
                    src={Experience2}
                    alt="Strategic Goal Setting"
                    className="ugt-component-image"
                  />
                </div>
              </div>
              <div className="ugt-component-content">
                <h3 className="ugt-component-subtitle">
                  Strategic Goal Setting
                </h3>
                <p className="ugt-component-text">
                  Before selecting destinations, universities should clearly
                  define objectives. A strategic vision ensures that your
                  program resonates with supporters and accomplishes
                  institutional goals.
                </p>
                <div className="ugt-questions-box">
                  <span className="ugt-questions-title">
                    Critical questions to address:
                  </span>
                  <ul className="ugt-questions-list">
                    {[
                      "Is the goal alumni engagement?",
                      "Donor cultivation?",
                      "Educational enrichment?",
                      "Revenue generation?",
                      "Brand awareness?",
                    ].map((q, idx) => (
                      <li key={idx} className="ugt-question-item">
                        <Check size={16} className="ugt-question-icon" />
                        <span>{q}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="ugt-component-footer">
                  Understanding these goals guides every planning decision.
                </p>
              </div>
            </div>

            {/* ITEM 2: Audience Analysis */}
            <div className="ugt-component-row ugt-row-reverse">
              <div className="ugt-component-image-wrapper">
                <div className="ugt-component-image-container">
                  <img
                    src={Experience6}
                    alt="Audience Analysis"
                    className="ugt-component-image"
                  />
                </div>
              </div>
              <div className="ugt-component-content">
                <h3 className="ugt-component-subtitle">Audience Analysis</h3>
                <p className="ugt-component-text">
                  Different audiences require different experiences. A recent
                  graduate group may have different interests than retired
                  alumni or major donors.
                </p>
                <p className="ugt-component-text">
                  Successful programs align destination choices, pricing,
                  activities, and educational content with audience preferences.
                  Cultivating these distinct segments builds lasting loyalty.
                </p>
              </div>
            </div>

            {/* ITEM 3: Destination Selection */}
            <div className="ugt-component-row">
              <div className="ugt-component-image-wrapper">
                <div className="ugt-component-image-container">
                  <img
                    src={Europe}
                    alt="Destination Selection"
                    className="ugt-component-image"
                  />
                </div>
              </div>
              <div className="ugt-component-content">
                <h3 className="ugt-component-subtitle">
                  Destination Selection
                </h3>
                <p className="ugt-component-text">
                  The best destinations combine strong traveler appeal,
                  educational opportunities, accessibility, safety, and cultural
                  value.
                </p>

                <div className="ugt-destinations-grid">
                  {[
                    {
                      region: "Europe",
                      places: ["Italy", "France", "Spain", "Greece", "Croatia"],
                    },
                    {
                      region: "River Cruise Regions",
                      places: [
                        "Rhine River",
                        "Danube River",
                        "Seine River",
                        "Douro River",
                      ],
                    },
                    {
                      region: "Expedition Destinations",
                      places: ["Antarctica", "Arctic", "Galapagos", "Iceland"],
                    },
                    {
                      region: "North America",
                      places: ["Alaska", "Canadian Rockies", "National Parks"],
                    },
                  ].map((dest, idx) => (
                    <div key={idx} className="ugt-dest-col">
                      <span className="ugt-dest-region">{dest.region}</span>
                      <ul className="ugt-dest-list">
                        {dest.places.map((place, pIdx) => (
                          <li key={pIdx}>{place}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ITEM 4: Supplier Selection */}
            <div className="ugt-component-row ugt-row-reverse">
              <div className="ugt-component-image-wrapper">
                <div className="ugt-component-image-container">
                  <img
                    src={CTAImage}
                    alt="Supplier Selection"
                    className="ugt-component-image"
                  />
                </div>
              </div>
              <div className="ugt-component-content">
                <h3 className="ugt-component-subtitle">Supplier Selection</h3>
                <p className="ugt-component-text">
                  Choosing the right travel partners is critical. Trips &amp;
                  Ships Luxury Travel maintains relationships with many of the
                  world's most respected:
                </p>
                <div className="ugt-suppliers-pills">
                  {[
                    "Cruise lines",
                    "Hotels",
                    "Tour operators",
                    "Destination management companies",
                    "Transportation providers",
                  ].map((supplier, sIdx) => (
                    <span key={sIdx} className="ugt-supplier-pill">
                      {supplier}
                    </span>
                  ))}
                </div>
                <p className="ugt-component-text ugt-supplier-highlight">
                  These relationships often provide exclusive benefits not
                  available through standard booking channels, ensuring
                  white-glove treatment for every traveler.
                </p>
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

      {/* ── COMMON ALUMNI TRAVEL MISTAKES ───────────────────────────────────────── */}
      <section className="Lfsg-section Lfsg-bg-dark" id="Lfsg-challenges">
        <div className="Lfsg-container">
          <div className="Lfsg-section-header">
            <h2 className="Lfsg-h2-white">
              Common Mistakes Universities Make When Planning Travel Programs
            </h2>

            <div className="Lfsg-accent-line-white" />
          </div>

          <div className="Lfsg-mistakes-grid">
            {[
              {
                title: "Waiting Too Long to Plan",
                desc: "Premium group space often sells out 12–24 months in advance, making early planning essential for securing the best options and pricing.",
              },

              {
                title: "Focusing Solely on Price",
                desc: "The lowest-cost option rarely produces the best experience. Traveler satisfaction, program quality, and long-term engagement should remain top priorities.",
              },

              {
                title: "Underestimating Marketing Requirements",
                desc: "Even outstanding programs require effective promotion. Universities should develop comprehensive communication and outreach plans to maximize participation.",
              },

              {
                title: "Lacking Educational Content",
                desc: "Without educational enrichment, travel programs lose a key differentiator. Faculty involvement and expert-led experiences add significant value.",
              },

              {
                title: "Attempting to Manage Everything Internally",
                desc: "Travel planning involves hundreds of moving parts. Professional support reduces risk, improves operations, and enhances the overall traveler experience.",
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
            <span className="ugt-advantage-eyebrow">The Advantage</span>
            <h2 className="ugt-advantage-title">
              The Trips &amp; Ships Luxury Travel Advantage
            </h2>
            <div className="Asc-accent-line"></div>
            <p className="ugt-advantage-intro">
              Unlike general travel agencies, Trips &amp; Ships Luxury Travel
              understands the unique needs of higher education institutions.
            </p>
            <h3 className="ugt-approach-title">Our approach combines:</h3>
          </div>

          <div className="ugt-advantage-grid">
            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <Compass size={28} strokeWidth={1.5} />
              </div>
              <h4 className="ugt-card-title">Strategic Planning</h4>
              <p className="ugt-card-desc">
                Programs aligned with university objectives.
              </p>
            </div>

            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <Award size={28} strokeWidth={1.5} />
              </div>
              <h4 className="ugt-card-title">Luxury Travel Expertise</h4>
              <p className="ugt-card-desc">
                Exceptional travel experiences designed for sophisticated
                travelers.
              </p>
            </div>

            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <BookOpen size={28} strokeWidth={1.5} />
              </div>
              <h4 className="ugt-card-title">Educational Integration</h4>
              <p className="ugt-card-desc">
                Meaningful learning opportunities throughout the journey.
              </p>
            </div>

            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <ShieldCheck size={28} strokeWidth={1.5} />
              </div>
              <h4 className="ugt-card-title">White Glove Service</h4>
              <p className="ugt-card-desc">
                Dedicated support for both institutions and travelers.
              </p>
            </div>

            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <HeartHandshake size={28} strokeWidth={1.5} />
              </div>
              <h4 className="ugt-card-title">Long-Term Partnership</h4>
              <p className="ugt-card-desc">
                Helping universities build sustainable travel programs year
                after year.
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
                Professional Travel Management
              </span>

              <h2 className="adg-c-h2 adg-c-h2-light">
                Why Universities Partner with Professional Travel Experts
              </h2>

              <div className="aac-accent-line aac-accent-white"></div>

              <p className="adg-c-lead adg-c-lead-light">
                Universities increasingly choose specialized travel partners
                because of the complexity involved in planning successful travel
                programs.
              </p>

              <p className="adg-c-body adg-c-body-light">
                Professional travel management helps institutions deliver
                exceptional traveler experiences while reducing administrative
                burden, operational challenges, and program risk.
              </p>

              <br />

              <p className="adg-c-body adg-c-body-light">
                Experienced travel partners provide the expertise, industry
                relationships, and support needed to create successful
                university travel programs from concept through execution.
              </p>
            </div>

            {/* RIGHT — pill grid */}
            <div className="adg-c-why-right">
              <div className="adg-c-why-card">
                <span className="adg-c-why-card-label">
                  Professional management provides:
                </span>

                <div className="adg-c-pill-grid">
                  {[
                    "Destination expertise",
                    "Supplier relationships",
                    "Operational support",
                    "Emergency assistance",
                    "Marketing guidance",
                    "Traveler communications",
                    "Contract management",
                    "Premium travel experiences",
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
                  "Universities seeking stronger alumni engagement",
                  "Advancement departments",
                  "Alumni associations",
                  "Faculty travel programs",
                  "Donor cultivation initiatives",
                  "Continuing education programs",
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
                  "Institutions seeking low-cost mass tourism programs",
                  "Programs without clear objectives",
                  "Organizations unwilling to invest in quality traveler experiences",
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
              Luxury Alumni Travel Specialists
            </span>

            <h2 className="Adg-expert-title">
              Why Trips &amp; Ships Luxury Travel
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
                  alt="Angela Hughes – Luxury Alumni Travel Expert"
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
              {/* INTRO */}
              <div className="Adg-expert-quote-box">
                <div className="Adg-expert-quote-icon">
                  <Quote size={36} />
                </div>

                <blockquote className="Adg-expert-quote-text">
                  "Trips &amp; Ships Luxury Travel combines luxury travel
                  expertise with educational and alumni travel planning
                  experience."
                </blockquote>
              </div>

              {/* SERVICES */}
              <div className="Adg-expert-credentials-box">
                <h4 className="Adg-expert-credentials-title">
                  <Award size={16} />
                  We Help Organizations Create
                </h4>

                <div className="Adg-expert-credentials-grid">
                  {[
                    "Luxury alumni travel programs",
                    "Alumni cruises",
                    "Alumni river cruises",
                    "Alumni expedition cruises",
                    "Faculty hosted alumni travel",
                    "Educational travel programs",
                    "Donor travel programs",
                    "Small ship alumni journeys",
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

              {/* ANGELA AUTHORITY */}
              <div
                className="Adg-expert-credentials-box"
                style={{ marginTop: "24px" }}
              >
                <h4 className="Adg-expert-credentials-title">
                  <Star size={16} />
                  Angela Hughes Authority Box
                </h4>

                <p
                  style={{
                    marginTop: "12px",
                    marginBottom: "20px",
                    lineHeight: "1.7",
                  }}
                >
                  Angela Hughes is one of the travel industry's most respected
                  experts.
                </p>

                <div className="Adg-expert-credentials-grid">
                  {[
                    "CEO of Trips & Ships Luxury Travel",
                    "Founder of Luxury Travel University",
                    "Over 40 years in the travel industry",
                    "Traveled to more than 121 countries",
                    "Global luxury travel speaker and trainer",
                    "Weekly industry columnist",
                    "Travel Leaders Network Advisory Board member",
                    "2024 Luxury Travel Influencer of the Year",
                    "Named one of the Most Influential Women in Travel in 2026",
                    "Featured in major travel publications globally",
                    "Expert in luxury cruises, safaris, expeditions, river cruising, and premium travel",
                  ].map((item, i) => (
                    <div className="Adg-expert-list-item" key={i}>
                      <span className="Adg-expert-list-icon">
                        <Award size={16} />
                      </span>

                      <span className="Adg-expert-list-label">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* BOTTOM PARAGRAPH */}
              <div
                className="Adg-expert-quote-box"
                style={{ marginTop: "24px" }}
              >
                <blockquote className="Adg-expert-quote-text">
                  Her firsthand destination expertise helps alumni travelers
                  experience the world in meaningful and unforgettable ways.
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
            alt="University travel program planning background"
            className="Asc-help-bg-img"
          />
          <div className="Asc-help-overlay"></div>
        </div>

        <div className="Asc-container">
          <div className="Asc-help-card">
            <div className="Asc-help-content">
              <div className="Asc-help-header">
                <span className="Asc-help-eyebrow">
                  University Travel Program Planning
                </span>

                <h2 className="Asc-help-h2">
                  Build a University Travel Program That Inspires Engagement and
                  Lasting Connections
                </h2>

                <div className="Asc-help-accent"></div>
              </div>

              <div className="Asc-help-grid">
                <div className="Asc-help-info">
                  <p className="Asc-help-intro">
                    The most successful university travel programs do more than
                    take travelers to incredible destinations.
                  </p>

                  <p className="Asc-help-intro">
                    They create meaningful relationships, strengthen
                    institutional loyalty, support advancement goals, and
                    provide educational experiences that participants remember
                    for years.
                  </p>

                  <p className="Asc-help-intro">
                    With Angela Hughes' global expertise and Trips &amp; Ships
                    Luxury Travel's proven planning process, universities gain a
                    trusted partner capable of delivering exceptional travel
                    experiences while protecting and enhancing their brand.
                  </p>

                  <div className="Asc-help-btn-container">
                    <button className="Asc-help-cta-btn">
                      Start Planning Your Program
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>

                <div className="Asc-help-list-box">
                  <h3 className="Asc-help-list-title">
                    University Travel Program Benefits:
                  </h3>

                  <ul className="Asc-help-bullets">
                    {[
                      "Strengthen alumni engagement",
                      "Support advancement goals",
                      "Create lifelong learning opportunities",
                      "Build donor relationships",
                      "Enhance institutional loyalty",
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
                    designing your next university travel program.
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

export default UniversityGroupTravelPlanning;
