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
  Repeat,
  TrendingUp,
} from "lucide-react";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela.jpeg";
import HeroImage1 from "../../assets/MultiGenerationalAlumniTravel/university-historic-campus-clock-tower-academic-building.jpg.jpg";
import HeroImage2 from "../../assets/MultiGenerationalAlumniTravel/historic-university-campus-entrance-academic-landmark-education.jpg";
import HeroImage3 from "../../assets/MultiGenerationalAlumniTravel/alumni-university-campus-community-aerial-view.jpg";
import CTAImage from "../../assets/MultiGenerationalAlumniTravel/Partner-With-Travel.jpeg";
import AlumniTravel from "../../assets/MultiGenerationalAlumniTravel/Luxury-Travel-Expertise.jpeg";
import AlumniTravel2 from "../../assets/MultiGenerationalAlumniTravel/luxury-travelers-exploring-european-village-cultural-vacation.jpg";
import AlumniTravel3 from "../../assets/MultiGenerationalAlumniTravel/Travelers.jpeg";
import Personalized from "../../assets/MultiGenerationalAlumniTravel/Personalized-Service.jpeg";
import LoveAlumni from "../../assets/MultiGenerationalAlumniTravel/Love_Alumni_Travel.jpeg";
import LoveAlumni2 from "../../assets/MultiGenerationalAlumniTravel/Universities.jpeg";


import { Helmet } from "react-helmet-async";


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
        "Luxury travel agency specializing in university travel programs, alumni cruises, donor travel programs, educational travel, and luxury group travel experiences.",
    },

    {
      "@type": "TravelAgency",
      "@id": "https://www.tripsandships.com/#travelagency",
      name: "Trips & Ships Luxury Travel",
      url: "https://www.tripsandships.com",
      description:
        "Trusted university travel partner providing alumni travel programs, donor travel experiences, educational travel planning, luxury cruises, and customized group travel solutions.",
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
        "CEO of Trips & Ships Luxury Travel, Founder of Luxury Travel University, Travel Leaders Network Advisory Board Member, luxury travel educator, international speaker, columnist, and travel expert with more than 40 years of experience and travel to over 121 countries.",
    },

    {
      "@type": "WebPage",
      "@id":
        "https://www.tripsandships.com/why-trips-and-ships-luxury-travel-for-universities",
      url:
        "https://www.tripsandships.com/why-trips-and-ships-luxury-travel-for-universities",
      name: "Why Trips & Ships Luxury Travel for Universities",
      description:
        "Discover why universities, alumni associations, advancement offices, and lifelong learning organizations choose Trips & Ships Luxury Travel for alumni cruises, donor travel programs, educational travel, and luxury group experiences.",
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
        "https://www.tripsandships.com/why-trips-and-ships-luxury-travel-for-universities#breadcrumb",
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
          name: "Why Trips & Ships Luxury Travel for Universities",
          item:
            "https://www.tripsandships.com/why-trips-and-ships-luxury-travel-for-universities",
        },
      ],
    },

    {
      "@type": "FAQPage",
      "@id":
        "https://www.tripsandships.com/why-trips-and-ships-luxury-travel-for-universities#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Why do universities choose Trips & Ships Luxury Travel?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Universities choose Trips & Ships Luxury Travel because we understand alumni engagement, donor relations, educational travel, luxury travel planning, and the unique objectives of higher education institutions.",
          },
        },

        {
          "@type": "Question",
          name: "What types of travel programs do you manage?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We manage alumni cruises, donor travel programs, educational tours, river cruises, expedition cruises, small ship cruises, faculty-led travel programs, and custom university travel experiences.",
          },
        },

        {
          "@type": "Question",
          name: "How is Trips & Ships Luxury Travel different from a traditional travel agency?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Unlike traditional travel agencies, we focus on strategic travel experiences that support university engagement, alumni relations, donor stewardship, lifelong learning, and advancement objectives.",
          },
        },

        {
          "@type": "Question",
          name: "Can university travel programs be customized?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. Every travel program is customized based on institutional goals, audience demographics, educational objectives, travel preferences, and engagement priorities.",
          },
        },

        {
          "@type": "Question",
          name: "Do you help with donor travel programs?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Donor engagement and stewardship travel programs are among our specialties, helping institutions strengthen relationships and support advancement initiatives.",
          },
        },

        {
          "@type": "Question",
          name: "Can faculty participate in university travel programs?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Faculty participation is highly encouraged and often enhances the educational value of travel experiences through lectures, discussions, and destination-specific expertise.",
          },
        },

        {
          "@type": "Question",
          name: "What destinations are most popular for university travel programs?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Europe, Alaska, Antarctica, the Mediterranean, river cruise regions, the Galápagos Islands, and culturally rich destinations consistently perform well for university travel programs.",
          },
        },

        {
          "@type": "Question",
          name: "How far in advance should university travel planning begin?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most successful university travel programs begin planning 12 to 24 months before departure to secure preferred itineraries, accommodations, and group space.",
          },
        },

        {
          "@type": "Question",
          name: "Do you provide traveler support?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. We provide comprehensive traveler support before, during, and after travel, ensuring a seamless and enjoyable experience for participants.",
          },
        },

        {
          "@type": "Question",
          name: "Can travel programs support fundraising goals?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Travel experiences often strengthen alumni and donor relationships, creating opportunities that contribute to long-term advancement and fundraising success.",
          },
        },

        {
          "@type": "Question",
          name: "Why is Angela Hughes involved in university travel programs?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Angela Hughes brings more than 40 years of travel industry experience, expertise gained from visiting over 121 countries, and a deep commitment to educational travel and exceptional service.",
          },
        },

        {
          "@type": "Question",
          name: "What is the first step to working with Trips & Ships Luxury Travel?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The first step is a consultation to understand your institution's goals, audience, travel objectives, and opportunities for creating a successful travel program.",
          },
        },

        {
          "@type": "Question",
          name: "What makes Trips & Ships Luxury Travel a trusted university travel partner?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Our university-focused expertise, luxury travel specialization, educational travel experience, donor engagement knowledge, strong supplier relationships, and personalized service make us a trusted partner for higher education institutions.",
          },
        },

        {
          "@type": "Question",
          name: "What benefits do universities gain from partnering with Trips & Ships Luxury Travel?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Universities gain expert planning, enhanced alumni engagement, stronger donor relationships, educational enrichment, reduced administrative burden, and access to world-class travel experiences.",
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
      q: "Why do universities choose Trips & Ships Luxury Travel?",
      a: "Universities choose us because we understand alumni engagement, donor relations, educational travel, and luxury travel planning.",
    },

    {
      q: "What types of travel programs do you manage?",
      a: "We manage alumni cruises, donor travel programs, educational tours, river cruises, expedition cruises, small ship cruises, and custom travel experiences.",
    },

    {
      q: "How is Trips & Ships different from a traditional travel agency?",
      a: "We focus specifically on strategic travel experiences that support university engagement and advancement objectives.",
    },

    {
      q: "Can programs be customized?",
      a: "Absolutely. Every travel program is tailored to institutional goals and participant interests.",
    },

    {
      q: "Do you help with donor travel programs?",
      a: "Yes. Donor engagement and stewardship travel are among our specialties.",
    },

    {
      q: "Can faculty participate?",
      a: "Faculty involvement is highly encouraged and often enhances educational value.",
    },

    {
      q: "What destinations are most popular?",
      a: "Europe, Alaska, Antarctica, the Mediterranean, river cruise regions, and cultural destinations consistently perform well.",
    },

    {
      q: "How far in advance should planning begin?",
      a: "Most successful programs begin planning 12–24 months before departure.",
    },

    {
      q: "Do you provide traveler support?",
      a: "Yes. We offer comprehensive support before, during, and after travel.",
    },

    {
      q: "Can travel programs support fundraising goals?",
      a: "Travel can strengthen relationships that contribute to long-term advancement success.",
    },

    {
      q: "Why is Angela Hughes involved in university travel programs?",
      a: "Her decades of travel expertise and commitment to educational travel make her uniquely qualified to help institutions develop successful programs.",
    },

    {
      q: "What is the first step to working with Trips & Ships Luxury Travel?",
      a: "A consultation allows us to understand your goals and identify opportunities that align with your institution's needs.",
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
const WhyLuxuryTravelForUniversities = () => {
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
          Why Universities Choose Trips & Ships Luxury Travel | University
          Travel Experts
        </title>
        <meta
          name="title"
          content="Why Trips & Ships Luxury Travel for Universities"
        />
        <meta
          name="description"
          content="Discover why universities, alumni associations, and advancement offices trust Trips & Ships Luxury Travel for alumni cruises, donor travel programs, educational travel, and luxury group experiences."
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
            The Trusted Travel Partner for Universities, Alumni Associations,
            and Advancement Programs
          </h1>

          <p>
            University travel programs require far more than booking cruises and
            tours.
          </p>

          <p>
            Successful programs demand strategic planning, educational value,
            alumni engagement expertise, risk management, donor cultivation
            opportunities, exceptional service, and a deep understanding of
            higher education objectives.
          </p>

          {/* READ MORE CONTENT */}
          {readMore && (
            <>
              <p>
                That is why universities across the country choose Trips &amp;
                Ships Luxury Travel.
              </p>

              <p>
                We help institutions create travel experiences that strengthen
                alumni relationships, support advancement initiatives, engage
                lifelong learners, and deliver unforgettable journeys that
                reflect the excellence of the university itself.
              </p>

              <p>
                Under the leadership of <strong>Angela Hughes</strong>, one of
                the most respected names in luxury travel, Trips &amp; Ships
                Luxury Travel provides the expertise, industry relationships,
                and personalized service universities need to develop successful
                travel programs.
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

      {/* ── OUR MISSION ───── */}
      <section
        className="ugt-components-section"
        id="ugt-components"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="Asc-container">
          {/* HEADER */}
          <div className="ugt-components-header">
            <h2 className="adg-c-h2">Our Mission</h2>

            <div className="adg-c-accent-line"></div>
          </div>

          {/* MAIN CONTENT */}
          <div className="ugt-components-list">
            <div className="ugt-component-row">
              {/* LEFT IMAGE */}
              <div className="ugt-component-image-wrapper">
                <div className="ugt-component-image-container">
                  <img
                    src={AlumniTravel2}
                    alt="University travel experiences"
                    className="ugt-component-image"
                  />
                </div>
              </div>

              {/* RIGHT CONTENT */}
              <div className="ugt-component-content">
                <p className="ugt-component-text">
                  At Trips &amp; Ships Luxury Travel, we believe travel should
                  do more than take people to new destinations.
                </p>

                <div className="ugt-questions-box">
                  <span className="ugt-questions-title">Travel should:</span>

                  <ul className="ugt-questions-list">
                    {[
                      "Inspire learning",
                      "Strengthen relationships",
                      "Create lasting memories",
                      "Build community",
                      "Support institutional goals",
                      "Foster meaningful connections",
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
                  For universities, travel becomes a powerful engagement tool
                  that extends the campus experience far beyond graduation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
    WHY UNIVERSITIES NEED SPECIALIZED EXPERTISE
═════════════════════════════════════════ */}
      <section className="adg-c-section adg-c-bg-dark" id="adg-why-dining">
        <div className="adg-c-container">
          <div className="adg-c-why-grid">
            {/* LEFT — text */}
            <div className="adg-c-why-left">
              <span className="adg-c-eyebrow adg-c-eyebrow-light">
                Institutional Alignment
              </span>

              <h2 className="adg-c-h2 adg-c-h2-light">
                Why Universities Need Specialized Travel Expertise
              </h2>

              <div className="aac-accent-line aac-accent-white"></div>

              <p className="adg-c-lead adg-c-lead-light">
                University travel programs are fundamentally different from
                traditional leisure travel. They carry distinct strategic
                burdens that standard vacations simply do not share.
              </p>

              <p className="adg-c-body adg-c-body-light">
                A general travel agency may understand vacations, but a
                dedicated university travel partner fundamentally understands
                institutional objectives. That distinction matters deeply when
                your brand equity is on the line.
              </p>
            </div>

            {/* RIGHT — pill grid */}
            <div className="adg-c-why-right">
              <div className="adg-c-why-card">
                <span className="adg-c-why-card-label">
                  Institutions Must Carefully Balance:
                </span>

                <div className="adg-c-pill-grid">
                  {[
                    "Alumni Engagement",
                    "Donor Stewardship",
                    "Educational Programming",
                    "Brand Reputation",
                    "Traveler Safety",
                    "Logistics Management",
                    "Financial Accountability",
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

      {/* ── WHAT MAKES TRIPS & SHIPS LUXURY TRAVEL DIFFERENT? ───── */}
      <section className="mga-edu-section">
        <div className="mga-edu-container">
          <div className="mga-edu-card">
            <div className="mga-card-content">
              <span className="mga-card-eyebrow">
                University Travel Expertise
              </span>

              <h2 className="mga-card-title">
                What Makes Trips &amp; Ships Luxury Travel Different?
              </h2>

              <div className="mga-card-accent-line"></div>

              <p className="mga-card-subtitle">
                Deep Understanding of Higher Education
              </p>

              <div className="mga-card-lead">
                <span className="mga-lead-badge">Our Advantage</span>
                <span className="mga-lead-text">
                  We understand that university travel programs are designed to
                  achieve outcomes beyond tourism.
                </span>
              </div>

              <p className="mga-features-intro">Our programs support:</p>

              <div className="mga-features-grid">
                {[
                  {
                    title: "Alumni Relations",
                    desc: "Strengthening alumni connections and engagement.",
                  },
                  {
                    title: "Advancement Goals",
                    desc: "Supporting donor cultivation and stewardship initiatives.",
                  },
                  {
                    title: "Lifelong Learning",
                    desc: "Creating intellectually enriching experiences.",
                  },
                  {
                    title: "Community Building",
                    desc: "Bringing alumni, faculty, and supporters together.",
                  },
                ].map((feat, idx) => (
                  <div key={idx} className="mga-feature-item">
                    <div className="mga-feature-header">
                      <span className="mga-feature-num">0{idx + 1}</span>
                      <h4 className="mga-feature-title">{feat.title}</h4>
                    </div>
                    <p className="mga-feature-desc">{feat.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
   LUXURY TRAVEL EXPERTISE
════════════════════════════════════════ */}

      <section
        className="adg-c-section adg-c-bg-white"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="Asc-container">
          <div className="adg-c-section-header">
            <span className="adg-c-eyebrow">Travel Experience Excellence</span>

            <h2 className="adg-c-h2">Luxury Travel Expertise</h2>

            <div className="adg-c-accent-line"></div>
          </div>

          <div className="adg-c-overview-layout">
            {/* LEFT — specialties */}
            <div className="adg-c-overview-icons">
              {[
                "Luxury Cruises",
                "River Cruises",
                "Expedition Cruises",
                "Small Ship Cruises",
                "Cultural Journeys",
                "Custom Travel Experiences",
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
                    Today's alumni and donor travelers expect exceptional
                    experiences. Trips &amp; Ships Luxury Travel specializes in
                    designing and delivering high-quality journeys that combine
                    comfort, enrichment, and personalized service.
                  </p>
                </div>
              </div>

              <div className="adg-c-overview-image-wrap">
                <img
                  src={AlumniTravel}
                  alt="Luxury university travel experiences"
                  className="adg-c-overview-img"
                />

                <div className="adg-c-overview-img-overlay">
                  <span className="adg-c-overview-img-label">
                    Exceptional Travel Experiences
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
   PERSONALIZED SERVICE
════════════════════════════════════════ */}

      <section className="wlt-personalized-section">
        <div className="wlt-personalized-container">
          <div className="wlt-personalized-grid">
            {/* Left Column: Image with dynamic overlay card */}
            <div className="wlt-personalized-image-col">
              <div className="wlt-personalized-image-wrapper">
                <img
                  src={Personalized}
                  alt="Customized university travel programs"
                  className="wlt-personalized-image"
                />
                <div className="wlt-personalized-image-card">
                  <span className="wlt-personalized-card-number">100%</span>
                  <span className="wlt-personalized-card-label">
                    Tailored Solutions
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Custom Content */}
            <div className="wlt-personalized-content-col">
              <span className="wlt-personalized-eyebrow">Bespoke Journeys</span>

              <h2 className="wlt-personalized-title">Personalized Service</h2>

              <div className="wlt-personalized-accent-line"></div>

              <div className="wlt-personalized-intro-statements">
                <div className="wlt-personalized-intro-item">
                  <p className="wlt-personalized-intro-text">
                    Every university is different.
                  </p>
                </div>
                <div className="wlt-personalized-intro-item">
                  <p className="wlt-personalized-intro-text">
                    Every audience is different.
                  </p>
                </div>
                <div className="wlt-personalized-intro-item">
                  <p className="wlt-personalized-intro-text">
                    Every travel program should be different.
                  </p>
                </div>
              </div>

              <div className="wlt-personalized-custom-box">
                <p className="wlt-personalized-custom-title">
                  We create customized solutions based on:
                </p>

                <ul className="wlt-personalized-list">
                  {[
                    "Institutional goals",
                    "Audience demographics",
                    "Travel preferences",
                    "Engagement objectives",
                    "Budget considerations",
                  ].map((item, idx) => (
                    <li key={idx} className="wlt-personalized-list-item">
                      <span className="wlt-personalized-check-icon">
                        <Check size={16} strokeWidth={3} />
                      </span>
                      <span className="wlt-personalized-list-text">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="wlt-personalized-footer-text">
                No two programs are exactly alike.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
   OUR PROVEN PLANNING PROCESS
════════════════════════════════════════ */}
      <section className="wlt-planning-section">
        <div className="wlt-planning-container">
          <div className="wlt-planning-header">
            <span className="wlt-planning-eyebrow">Structured Excellence</span>
            <h2 className="wlt-planning-title">Our Proven Planning Process</h2>
            <div className="wlt-planning-accent-line"></div>
            <p className="wlt-planning-subtitle">
              Successful travel programs do not happen by accident. They require
              a structured planning approach.
            </p>
          </div>

          <div className="wlt-planning-grid">
            {/* Step 1 */}
            <div className="wlt-planning-card">
              <div className="wlt-planning-card-header">
                <span className="wlt-planning-step-num">01</span>
                <h3 className="wlt-planning-step-name">Discovery</h3>
              </div>
              <p className="wlt-planning-card-intro">
                We begin by understanding:
              </p>
              <ul className="wlt-planning-card-list">
                {[
                  "Institutional goals",
                  "Target audiences",
                  "Engagement objectives",
                  "Program expectations",
                ].map((item, idx) => (
                  <li key={idx} className="wlt-planning-card-list-item">
                    <span className="wlt-planning-card-list-bullet"></span>
                    <span className="wlt-planning-card-list-text">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Step 2 */}
            <div className="wlt-planning-card">
              <div className="wlt-planning-card-header">
                <span className="wlt-planning-step-num">02</span>
                <h3 className="wlt-planning-step-name">Strategic Planning</h3>
              </div>
              <p className="wlt-planning-card-intro">We identify:</p>
              <ul className="wlt-planning-card-list">
                {[
                  "Destinations",
                  "Travel formats",
                  "Educational opportunities",
                  "Marketing strategies",
                ].map((item, idx) => (
                  <li key={idx} className="wlt-planning-card-list-item">
                    <span className="wlt-planning-card-list-bullet"></span>
                    <span className="wlt-planning-card-list-text">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Step 3 */}
            <div className="wlt-planning-card">
              <div className="wlt-planning-card-header">
                <span className="wlt-planning-step-num">03</span>
                <h3 className="wlt-planning-step-name">Program Development</h3>
              </div>
              <p className="wlt-planning-card-intro">We coordinate:</p>
              <ul className="wlt-planning-card-list">
                {[
                  "Cruise lines",
                  "Hotels",
                  "Tours",
                  "Educational content",
                  "Logistics",
                ].map((item, idx) => (
                  <li key={idx} className="wlt-planning-card-list-item">
                    <span className="wlt-planning-card-list-bullet"></span>
                    <span className="wlt-planning-card-list-text">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Step 4 */}
            <div className="wlt-planning-card">
              <div className="wlt-planning-card-header">
                <span className="wlt-planning-step-num">04</span>
                <h3 className="wlt-planning-step-name">Traveler Support</h3>
              </div>
              <p className="wlt-planning-card-desc">
                Participants receive guidance and assistance throughout the
                planning process.
              </p>
            </div>

            {/* Step 5 */}
            <div className="wlt-planning-card">
              <div className="wlt-planning-card-header">
                <span className="wlt-planning-step-num">05</span>
                <h3 className="wlt-planning-step-name">
                  On-Program Excellence
                </h3>
              </div>
              <p className="wlt-planning-card-desc">
                We help ensure travelers enjoy a seamless and memorable
                experience.
              </p>
            </div>

            {/* Step 6 */}
            <div className="wlt-planning-card">
              <div className="wlt-planning-card-header">
                <span className="wlt-planning-step-num">06</span>
                <h3 className="wlt-planning-step-name">
                  Long-Term Partnership
                </h3>
              </div>
              <p className="wlt-planning-card-desc">
                We evaluate results and support future travel program growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
   STRONG SUPPLIER RELATIONSHIPS
════════════════════════════════════════ */}
      <section className="wlt-relationships-section">
        <div className="wlt-relationships-container">
          <div className="wlt-relationships-grid">
            {/* Left Column: Content */}
            <div className="wlt-relationships-content-col">
              <span className="wlt-relationships-eyebrow">
                Industry Connections
              </span>
              <h2 className="wlt-relationships-title">
                Strong Supplier Relationships Create Better Experiences
              </h2>
              <div className="wlt-relationships-accent-line"></div>

              <p className="wlt-relationships-lead">
                Relationships matter in travel.
              </p>

              {/* Partners we work with */}
              <div className="wlt-relationships-partners-box">
                <p className="wlt-relationships-partners-title">
                  Trips &amp; Ships Luxury Travel works with leading:
                </p>
                <div className="wlt-relationships-partners-pills">
                  {[
                    "Luxury cruise lines",
                    "River cruise companies",
                    "Expedition operators",
                    "Premium hotels",
                    "Tour providers",
                    "Destination specialists",
                  ].map((partner, idx) => (
                    <span key={idx} className="wlt-relationships-partner-pill">
                      {partner}
                    </span>
                  ))}
                </div>
              </div>

              {/* Benefits layout */}
              <div className="wlt-relationships-benefits-wrapper">
                <p className="wlt-relationships-benefits-title">
                  These relationships help universities access:
                </p>

                <div className="wlt-relationships-benefits-grid">
                  {[
                    {
                      title: "Preferred Availability",
                      desc: "Especially important for high-demand departures.",
                    },
                    {
                      title: "Exceptional Service",
                      desc: "Trusted partners consistently deliver quality experiences.",
                    },
                    {
                      title: "Exclusive Opportunities",
                      desc: "Unique experiences not available through standard travel channels.",
                    },
                    {
                      title: "Better Value",
                      desc: "Enhanced experiences without sacrificing quality.",
                    },
                  ].map((benefit, idx) => (
                    <div key={idx} className="wlt-relationships-benefit-card">
                      <span className="wlt-relationships-benefit-icon">
                        <Star size={16} strokeWidth={2.5} />
                      </span>
                      <div className="wlt-relationships-benefit-text">
                        <h4 className="wlt-relationships-benefit-name">
                          {benefit.title}
                        </h4>
                        <p className="wlt-relationships-benefit-desc">
                          {benefit.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Image with stylized frame */}
            <div className="wlt-relationships-image-col">
              <div className="wlt-relationships-image-wrapper">
                <img
                  src={LoveAlumni}
                  alt="Supplier relationships and premium travel experiences"
                  className="wlt-relationships-image"
                />
                <div className="wlt-relationships-image-tag">
                  <span className="wlt-relationships-tag-text">
                    Global Network
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── EDUCATIONAL TRAVEL IS PART OF OUR DNA ─────────────────────── */}
      <section className="ugt-diff-section" id="ugt-different">
        <div className="ugt-diff-container">
          {/* Header */}
          <div className="ugt-diff-header">
            <h2 className="ugt-diff-title">
              Educational Travel Is Part of Our DNA
            </h2>

            <div className="adg-c-accent-line"></div>

            <p className="ugt-diff-intro">
              Unlike many travel providers, we understand the importance of
              educational enrichment.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="ugt-diff-grid">
            {[
              {
                icon: <HeartHandshake size={28} strokeWidth={1.5} />,
                number: "01",
                title: "Learning",
                body: "University travelers seek experiences that expand knowledge, encourage curiosity, and create meaningful educational opportunities.",
              },
              {
                icon: <Users size={28} strokeWidth={1.5} />,
                number: "02",
                title: "Faculty Lectures",
                body: "We integrate your institution’s own professors directly into the travel experience. Far from dry classroom environments, these lectures provide exclusive, field-based briefings that tie your university’s academic strengths directly to the geography of the route.",
              },
              {
                icon: <Award size={28} strokeWidth={1.5} />,
                number: "03",
                title: "Guest Experts",
                body: "Through our deep global network, we connect travelers with prominent local historians, on-site archaeologists, policymakers, and conservationists. These specialists offer real-time insights that standard tour guides simply cannot duplicate.",
              },
              {
                icon: <TrendingUp size={28} strokeWidth={1.5} />,
                number: "04",
                title: "Destination Learning",
                body: "We transform the physical world into an active laboratory. Whether inspecting ancient masonry up close, touring private research facilities, or studying unique ecosystems, the landscape itself serves as the textbook.",
              },
              {
                icon: <TrendingUp size={28} strokeWidth={1.5} />,
                number: "05",
                title: "Historical Context",
                body: "We pull back the curtain on the deeper geopolitical, artistic, and social narratives that shaped a region. Travelers don't just see what a destination looks like today; they leave understanding the centuries of human history that defined it.",
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

      {/* COMPREHENSIVE TRAVEL SOLUTIONS FOR UNIVERSITIES */}
      <section className="adg-c-section adg-c-bg-soft" id="adg-donor-programs">
        <div className="adg-c-container">
          <div className="adg-c-section-header">
            <span className="adg-c-eyebrow">University Travel Services</span>

            <h2 className="adg-c-h2">
              Comprehensive Travel Solutions for Universities
            </h2>

            <div className="adg-c-accent-line"></div>

            <p className="Asc-section-intro">
              Trips &amp; Ships Luxury Travel provides complete program support
              designed to help universities achieve engagement, educational, and
              advancement objectives through exceptional travel experiences.
            </p>
          </div>

          <div className="adg-c-venues-grid1">
            {[
              {
                id: 1,
                eyebrow: "Alumni Engagement",
                name: "Alumni Travel Programs",
                highlight:
                  "Helping institutions create memorable experiences that strengthen alumni loyalty.",
                items: [
                  "Alumni Cruises",
                  "Educational Tours",
                  "Cultural Journeys",
                  "Lifelong Learning Travel",
                ],
                callout:
                  "Travel experiences designed to strengthen alumni relationships and encourage long-term engagement.",
              },

              {
                id: 2,
                eyebrow: "Advancement Support",
                name: "Donor Travel Programs",
                highlight:
                  "Strategic travel experiences that support institutional advancement goals.",
                items: [
                  "Donor Stewardship",
                  "Advancement Objectives",
                  "Relationship Building",
                  "Major Gift Cultivation",
                ],
                callout:
                  "Programs designed to deepen relationships with donors and university supporters.",
              },

              {
                id: 3,
                eyebrow: "Academic Enrichment",
                name: "Faculty-Led Educational Travel",
                highlight:
                  "Programs that combine travel with academic enrichment and intellectual exploration.",
                items: [
                  "Faculty Participation",
                  "Educational Programming",
                  "Destination Learning",
                  "Intellectual Engagement",
                ],
                callout:
                  "Meaningful travel experiences that reinforce lifelong learning and academic excellence.",
              },

              {
                id: 4,
                eyebrow: "Family Engagement",
                name: "Multi-Generational Travel",
                highlight:
                  "Experiences designed for alumni families, including children and grandchildren.",
                items: [
                  "Family Travel Experiences",
                  "Shared Learning",
                  "Community Building",
                  "Legacy Engagement",
                ],
                callout:
                  "Strengthening institutional connections across multiple generations.",
              },

              {
                id: 5,
                eyebrow: "Customized Solutions",
                name: "Custom University Travel Experiences",
                highlight:
                  "Tailored solutions designed around institutional priorities.",
                items: [
                  "Custom Itineraries",
                  "Strategic Planning",
                  "Unique Destinations",
                  "Institutional Alignment",
                ],
                callout:
                  "Every program is customized to meet the unique goals and needs of each institution.",
              },
            ].map((venue, i) => (
              <div
                key={venue.id}
                className={`adg-c-venue-card adg-c-venue-${(i % 4) + 1}`}
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

      {/* ── WHITE-GLOVE SERVICE FOR TRAVELERS AND UNIVERSITIES ───── */}
      <section className="luc-why-section" id="luc-why">
        <div className="luc-why-container">
          {/* LEFT — stacked images */}
          <div className="luc-why-images">
            <div className="luc-why-img-main-wrap">
              <img
                src={AlumniTravel3}
                alt="White-glove university travel service"
                className="luc-why-img-main"
              />
              <div className="luc-why-img-overlay"></div>
            </div>

            <div className="luc-why-img-accent-wrap">
              <img
                src={LoveAlumni2}
                alt="Professional travel support"
                className="luc-why-img-accent"
              />

              <div className="luc-why-img-badge">
                <span className="luc-why-badge-num">3</span>
                <span className="luc-why-badge-text">Support Areas</span>
              </div>
            </div>
          </div>

          {/* RIGHT — content */}
          <div className="luc-why-content">
            <h2 className="luc-why-title">
              White-Glove Service for Travelers and Universities
            </h2>

            <div className="aac-accent-line aac-accent-white"></div>

            <p className="luc-why-intro">
              Exceptional service remains one of our core principles.
            </p>

            <div className="luc-why-features">
              <div className="luc-why-feature">
                <div className="luc-why-feature-num">01</div>

                <div className="luc-why-feature-body">
                  <h3 className="luc-why-feature-title">University Staff</h3>
                  <p className="luc-why-feature-desc">
                    Reducing administrative burdens and simplifying program
                    management.
                  </p>
                </div>
              </div>

              <div className="luc-why-feature">
                <div className="luc-why-feature-num">02</div>

                <div className="luc-why-feature-body">
                  <h3 className="luc-why-feature-title">Travelers</h3>
                  <p className="luc-why-feature-desc">
                    Providing guidance before, during, and after travel.
                  </p>
                </div>
              </div>

              <div className="luc-why-feature">
                <div className="luc-why-feature-num">03</div>

                <div className="luc-why-feature-body">
                  <h3 className="luc-why-feature-title">Program Leaders</h3>
                  <p className="luc-why-feature-desc">
                    Ensuring a smooth and professional travel experience.
                  </p>
                </div>
              </div>
            </div>

            <div
              style={{
                marginTop: "24px",
                padding: "18px",
                borderRadius: "10px",
                background: "rgba(255,255,255,0.08)",
              }}
            >
              <p
                className="luc-why-feature-desc"
                style={{ marginBottom: 0, fontWeight: 600 }}
              >
                Our goal is simple:
              </p>

              <p className="luc-why-feature-desc" style={{ marginTop: "8px" }}>
                Deliver a travel experience that exceeds expectations.
              </p>
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

      {/* ── RESULTS UNIVERSITIES VALUE ───────────────────────────── */}
      <section className="ugt-advantage-section" id="ugt-advantage">
        <div className="ugt-advantage-container">
          <div className="ugt-advantage-header">
            <span className="ugt-advantage-eyebrow">
              Measurable Program Outcomes
            </span>

            <h2 className="ugt-advantage-title">Results Universities Value</h2>

            <div className="Asc-accent-line"></div>

            <p className="ugt-advantage-intro">
              The most successful university travel programs often generate:
            </p>
          </div>

          <div className="ugt-advantage-grid">
            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <Users size={28} strokeWidth={1.5} />
              </div>

              <h4 className="ugt-card-title">Higher Alumni Engagement</h4>

              <p className="ugt-card-desc">
                Travel creates meaningful personal connections.
              </p>
            </div>

            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <HeartHandshake size={28} strokeWidth={1.5} />
              </div>

              <h4 className="ugt-card-title">Stronger Donor Relationships</h4>

              <p className="ugt-card-desc">
                Extended interaction fosters trust and loyalty.
              </p>
            </div>

            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <Award size={28} strokeWidth={1.5} />
              </div>

              <h4 className="ugt-card-title">
                Increased Program Participation
              </h4>

              <p className="ugt-card-desc">
                Exceptional experiences encourage repeat travelers.
              </p>
            </div>

            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <Repeat size={28} strokeWidth={1.5} />
              </div>

              <h4 className="ugt-card-title">
                Enhanced Institutional Affinity
              </h4>

              <p className="ugt-card-desc">
                Participants often feel more connected to the university after
                travel.
              </p>
            </div>

            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <TrendingUp size={28} strokeWidth={1.5} />
              </div>

              <h4 className="ugt-card-title">Sustainable Long-Term Growth</h4>

              <p className="ugt-card-desc">
                Successful programs become valuable institutional assets.
              </p>
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
                Trusted University Travel Partner
              </span>
              <h2 className="adg-c-h2 adg-c-h2-light">
                Why Universities Continue to Travel With Us
              </h2>

              <div className="aac-accent-line aac-accent-white"></div>

              <p className="adg-c-lead adg-c-lead-light">
                Universities choose Trips &amp; Ships Luxury Travel because we
                understand the unique goals of alumni engagement, advancement,
                educational travel, and donor relations.
              </p>

              <p className="adg-c-body adg-c-body-light">
                Our combination of luxury travel expertise, strategic planning,
                personalized service, and long-term partnership support helps
                institutions create successful travel programs that deliver
                value for both travelers and the university.
              </p>
            </div>

            {/* RIGHT — pill grid */}
            <div className="adg-c-why-right">
              <div className="adg-c-why-card">
                <span className="adg-c-why-card-label">
                  Our expertise includes:
                </span>

                <div className="adg-c-pill-grid">
                  {[
                    "University-Focused Expertise",
                    "Luxury Travel Specialization",
                    "Educational Travel Experience",
                    "Advancement Program Support",
                    "Donor Engagement Knowledge",
                    "Personalized Service",
                    "Global Destination Expertise",
                    "Proven Planning Processes",
                    "Strong Supplier Relationships",
                    "Long-Term Partnership Commitment",
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
            <h2 className="Asc-h2">Best For</h2>

            <div className="Asc-accent-line"></div>
          </div>

          <div className="Asc-who-grid">
            <div className="Asc-who-card Asc-who-yes">
              <h3 className="Asc-who-title">Best For</h3>

              <ul className="Asc-who-list">
                {[
                  "Universities",
                  "Alumni associations",
                  "Advancement departments",
                  "University foundations",
                  "Lifelong learning organizations",
                  "Donor engagement programs",
                  "Faculty-led travel initiatives",
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
                  "Organizations seeking basic transactional travel booking",
                  "Budget-focused mass-market travel programs",
                  "Travel experiences without educational or engagement objectives",
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

      {/* ANGELA HUGHES AUTHORITY BOX */}
      <section className="Adg-expert-section" id="Asc-expert-insight">
        <div className="Asc-container">
          {/* TOP HEADING */}
          <div className="Adg-expert-heading">
            <span className="Adg-expert-eyebrow">
              Trusted Leadership & Expertise
            </span>

            <h2 className="Adg-expert-title">
              Angela Hughes: The Experience Universities Trust
            </h2>

            <div className="Adg-expert-divider"></div>
          </div>

          {/* MAIN GRID */}
          <div className="Adg-expert-grid">
            {/* LEFT SIDE: Portrait + Name */}
            <div className="Adg-expert-image-col">
              <div className="Adg-expert-portrait-wrap">
                <img
                  src={AboutImage}
                  alt="Angela Hughes"
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
                  When institutions partner with Trips &amp; Ships Luxury
                  Travel, they gain access to one of the travel industry's most
                  respected professionals.
                </blockquote>
              </div>

              {/* CREDENTIALS */}
              <div className="Adg-expert-credentials-box">
                <h4 className="Adg-expert-credentials-title">
                  <Award size={16} />
                  More Than Four Decades of Experience
                </h4>

                <div className="Adg-expert-credentials-grid">
                  {[
                    {
                      icon: <Star size={16} />,
                      label: "Over 40 Years in the Travel Industry",
                    },
                    {
                      icon: <MapPin size={16} />,
                      label: "Luxury Travel Trends Expertise",
                    },
                    {
                      icon: <Users size={16} />,
                      label: "Extensive Supplier Relationships",
                    },
                    {
                      icon: <Award size={16} />,
                      label: "Group Travel Management Experience",
                    },
                    {
                      icon: <Star size={16} />,
                      label: "Deep Understanding of Traveler Expectations",
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

              {/* GLOBAL EXPERTISE */}
              <div
                className="Adg-expert-credentials-box"
                style={{ marginTop: "24px" }}
              >
                <h4 className="Adg-expert-credentials-title">
                  <MapPin size={16} />
                  Global Travel Expertise
                </h4>

                <div className="Adg-expert-credentials-grid">
                  {[
                    "Personally traveled to more than 121 countries",
                    "Destination expertise across the globe",
                    "Identifies experiences that resonate with alumni travelers",
                    "Firsthand knowledge of luxury travel destinations",
                    "Helps universities select high-performing travel programs",
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

              {/* LEADERSHIP */}
              <div
                className="Adg-expert-credentials-box"
                style={{ marginTop: "24px" }}
              >
                <h4 className="Adg-expert-credentials-title">
                  <Award size={16} />
                  Industry Leadership
                </h4>

                <div className="Adg-expert-credentials-grid">
                  {[
                    "Founder of Luxury Travel University",
                    "Travel Leaders Network Advisory Board Member",
                    "Luxury Travel Influencer of the Year (2024)",
                    "International Travel Speaker",
                    "Weekly Travel Columnist",
                    "Industry Educator",
                    "Recognized Among the Most Influential Women in Travel",
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

              <div
                className="Adg-expert-quote-box"
                style={{ marginTop: "24px" }}
              >
                <blockquote className="Adg-expert-quote-text">
                  Universities gain confidence knowing their programs are
                  supported by proven leadership, global expertise, and decades
                  of travel industry experience.
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
            alt="University Travel Partnership"
            className="Asc-help-bg-img"
          />
          <div className="Asc-help-overlay"></div>
        </div>

        <div className="Asc-container">
          <div className="Asc-help-card">
            <div className="Asc-help-content">
              <div className="Asc-help-header">
                <span className="Asc-help-eyebrow">
                  University Travel Partnerships
                </span>

                <h2 className="Asc-help-h2">
                  Partner With a Travel Company That Understands Universities
                </h2>

                <div className="Asc-help-accent"></div>
              </div>

              <div className="Asc-help-grid">
                <div className="Asc-help-info">
                  <p className="Asc-help-intro">
                    The most successful university travel programs are built on
                    expertise, relationships, strategic planning, and
                    exceptional experiences.
                  </p>

                  <p className="Asc-help-intro">
                    Trips &amp; Ships Luxury Travel helps institutions create
                    travel programs that engage alumni, strengthen donor
                    relationships, support lifelong learning, and reflect the
                    values of the university community.
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
                      With Angela Hughes&apos; global travel expertise and our
                      commitment to personalized service, universities gain a
                      trusted partner dedicated to delivering meaningful
                      results.
                      <br />
                      <br />
                      Whether you are launching your first alumni travel program
                      or expanding an established portfolio of travel
                      experiences, we are ready to help you create journeys that
                      inspire, educate, and connect.
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
                      Schedule a Consultation
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
                      "Specialized expertise in university travel programs",
                      "Support for alumni engagement and donor relations",
                      "Customized travel experiences aligned with institutional goals",
                      "Comprehensive planning and traveler support",
                      "Luxury travel experiences with educational value",
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
                    Contact Trips &amp; Ships Luxury Travel today to discover
                    how a strategic travel partnership can elevate your
                    university's engagement and advancement initiatives.
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

export default WhyLuxuryTravelForUniversities;
