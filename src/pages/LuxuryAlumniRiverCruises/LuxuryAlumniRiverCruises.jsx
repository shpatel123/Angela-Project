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
  Mic,
  Map,
} from "lucide-react";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela2.jpeg";
import HeroImage1 from "../../assets/WhyUniversitiesPartner/Educational_Travelimage.jpg";
import HeroImage2 from "../../assets/WhyUniversitiesPartner/FacultyLedTravel2.jpg";
import HeroImage3 from "../../assets/LuxuryAlumniTravel/LuxuryAlumni3.jpeg";
import CTAImage from "../../assets/UniversityGroupTravelPlanning/StartPlan.jpeg";

import TravelExperience from "../../assets/WhyUniversitiesPartner/Traveler_Experiences.jpeg";
import TravelExperience2 from "../../assets/WhyUniversitiesPartner/Alumni_Travel_Benefits.jpg";

import Experience from "../../assets/LuxuryAlumniTravel/FacultyLedTravel.jpg";
import Experience1 from "../../assets/LuxuryAlumniTravel/Educational_Travel_Experiences.jpg";
import Experience2 from "../../assets/LuxuryAlumniTravel/FacultyLedTravel3.jpg";
import Experience4 from "../../assets/EducationalTravelPrograms/Educational_Travel5.jpg";


import RhineImg from "../../assets/LuxuryAlumniTravel/Europe.jpeg";
import DouroImg from "../../assets/LuxuryAlumniTravel/LuxuryAlumni2.jpeg";

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
      q: "What is an alumni river cruise?",
      a: "An alumni river cruise is a university-sponsored travel experience that combines luxury river cruising with educational programming, alumni engagement, and cultural exploration.",
    },

    {
      q: "Why are river cruises popular among alumni?",
      a: "River cruises provide intimate experiences, cultural immersion, educational opportunities, and convenient travel.",
    },

    {
      q: "Which rivers are most popular?",
      a: "The Rhine, Danube, Seine, and Douro are among the most requested alumni cruise itineraries.",
    },

    {
      q: "Are river cruises suitable for donors?",
      a: "Yes. The intimate environment makes river cruises ideal for donor cultivation and relationship building.",
    },

    {
      q: "How many travelers typically participate?",
      a: "Most alumni river cruise groups range from 20 to 100 participants.",
    },

    {
      q: "Can faculty participate?",
      a: "Absolutely. Faculty lectures often become a highlight of the experience.",
    },

    {
      q: "Are excursions included?",
      a: "Most luxury river cruises include guided excursions throughout the itinerary.",
    },

    {
      q: "How far in advance should programs be planned?",
      a: "Ideally 12–24 months before departure.",
    },

    {
      q: "What age groups participate?",
      a: "Most participants are alumni, donors, spouses, and lifelong learners, though many programs welcome family members.",
    },

    {
      q: "Are river cruises luxurious?",
      a: "Yes. Modern river ships offer exceptional accommodations, dining, and service.",
    },

    {
      q: "What educational opportunities are available?",
      a: "Faculty lectures, destination experts, historical tours, and cultural experiences are commonly incorporated.",
    },

    {
      q: "Can cruises be customized?",
      a: "Yes. Universities can add private events, receptions, lectures, and branded experiences.",
    },

    {
      q: "Why choose Trips & Ships Luxury Travel?",
      a: "We combine luxury cruise expertise, educational travel experience, and university-focused planning services.",
    },

    {
      q: "How can universities start a river cruise program?",
      a: "A consultation with Trips & Ships Luxury Travel helps identify goals, audiences, destinations, and timelines.",
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
const LuxuryAlumniRiverCruises = () => {
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
          Luxury Alumni River Cruises | University River Cruise Programs | Trips
          & Ships Luxury Travel
        </title>
        <meta
          name="title"
          content="Alumni River Cruises for Universities & Alumni Associations"
        />
        <meta
          name="description"
          content="Discover luxury alumni river cruises designed for universities, alumni associations, donors, and lifelong learning travelers. Explore Europe’s most iconic rivers with expert planning from Trips & Ships Luxury Travel."
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
            Alumni River Cruises: The Perfect Blend of Luxury, Learning, and
            Lifelong Connections
          </h1>

          <p>
            For universities seeking a travel experience that combines
            educational enrichment, cultural immersion, luxury accommodations,
            and meaningful alumni engagement, few options rival the appeal of a
            river cruise.
          </p>

          {/* READ MORE CONTENT */}
          {readMore && (
            <>
              <p>
                Unlike large ocean ships carrying thousands of passengers, river
                cruises offer an intimate experience where travelers can connect
                more deeply with fellow alumni, faculty members, university
                leadership, and the destinations they visit.
              </p>
              <p>
                At Trips &amp; Ships Luxury Travel, we help universities design
                extraordinary alumni river cruise programs that strengthen
                relationships, enhance donor engagement, and create
                unforgettable travel experiences.
              </p>

              <p>
                Led by renowned travel expert Angela Hughes, our team brings
                decades of experience planning sophisticated educational and
                luxury travel programs for discerning travelers around the
                world.
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
WHY RIVER CRUISES ARE IDEAL FOR ALUMNI TRAVEL PROGRAMS
═════════════════════════════════════════ */}
      <section className="adg-c-section adg-c-bg-dark" id="adg-why-dining">
        <div className="adg-c-container">
          <div className="adg-c-why-grid">
            {/* LEFT — text */}
            <div className="adg-c-why-left">
              <span className="adg-c-eyebrow adg-c-eyebrow-light">
                Alumni River Cruise Benefits
              </span>

              <h2 className="adg-c-h2 adg-c-h2-light">
                Why River Cruises Are Ideal for Alumni Travel Programs
              </h2>

              <div className="aac-accent-line aac-accent-white"></div>

              <p className="adg-c-lead adg-c-lead-light">
                River cruises have become one of the fastest-growing segments of
                educational travel.
              </p>

              <p className="adg-c-body adg-c-body-light">
                Universities increasingly choose river cruising because it
                perfectly aligns with the interests and expectations of alumni
                travelers.
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
                  Travelers unpack once while experiencing multiple destinations
                  throughout their journey. This convenience makes river
                  cruising particularly attractive for alumni and donor
                  audiences.
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
                  River cruises combine:
                </span>

                <div className="adg-c-pill-grid">
                  {[
                    "Cultural immersion",
                    "Lifelong learning",
                    "Historical exploration",
                    "Fine dining",
                    "Comfortable travel",
                    "Meaningful social interaction",
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
THE UNIQUE ADVANTAGES OF ALUMNI RIVER CRUISES
════════════════════════════════════════ */}
      <section className="adg-c-section adg-c-bg-white" id="adg-overview">
        <div className="adg-c-container">
          <div className="adg-c-section-header">
            <span className="adg-c-eyebrow">Alumni River Cruise Benefits</span>

            <h2 className="adg-c-h2">
              The Unique Advantages of Alumni River Cruises
            </h2>

            <div className="adg-c-accent-line"></div>
          </div>

          <div className="adg-c-overview-layout">
            {/* LEFT — list */}
            <div className="adg-c-overview-icons">
              {[
                "Alumni networking",
                "Faculty interaction",
                "Meaningful conversations",
                "Stronger community connections",
                "Luxury accommodations",
                "Cultural immersion",
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
                    Most luxury river ships accommodate between 100 and 200
                    guests, creating an intimate atmosphere that encourages
                    deeper connections among alumni, faculty, and university
                    leadership.
                  </p>
                </div>
              </div>

              <div className="adg-c-overview-image-wrap">
                <img
                  src={HeroImage2}
                  alt="Alumni river cruise experience"
                  className="adg-c-overview-img"
                />

                <div className="adg-c-overview-img-overlay">
                  <span className="adg-c-overview-img-label">
                    Intimate River Cruising
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── EDUCATIONAL OPPORTUNITIES ─────────────────────── */}
      <section className="ugt-diff-section" id="ugt-different">
        <div className="ugt-diff-container">
          {/* Header */}
          <div className="ugt-diff-header">
            <h2 className="ugt-diff-title">Educational Opportunities</h2>

            <div className="adg-c-accent-line"></div>

            <p className="ugt-diff-intro">
              River cruise itineraries naturally support educational
              programming, creating meaningful learning experiences throughout
              the journey.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="ugt-diff-grid">
            {[
              {
                icon: <BookOpen size={28} strokeWidth={1.5} />,
                number: "01",
                title: "Faculty Lectures",
                body: "Professors share expertise related to destinations and themes.",
              },
              {
                icon: <Mic size={28} strokeWidth={1.5} />,
                number: "02",
                title: "Guest Speakers",
                body: "Historians, authors, cultural experts, and regional specialists enhance the experience.",
              },
              {
                icon: <Map size={28} strokeWidth={1.5} />,
                number: "03",
                title: "Destination-Based Learning",
                body: "Every stop becomes an opportunity for deeper understanding and exploration.",
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

      {/* ── CONVENIENT TRAVEL EXPERIENCE ───── */}
      <section className="ugt-components-section" id="ugt-components" style={{backgroundColor: "var(--bg-soft)"}}>
        <div className="ugt-components-container">
          <div className="ugt-components-header">
            <h2 className="ugt-components-title">
              Convenient Travel Experience
            </h2>
            <div className="adg-c-accent-line"></div>
          </div>

          <div className="ugt-components-list">
            <div className="ugt-component-row">
              <div className="ugt-component-image-wrapper">
                <div className="ugt-component-image-container">
                  <img
                    src={Experience2}
                    alt="Convenient River Cruise Travel"
                    className="ugt-component-image"
                  />
                </div>
              </div>

              <div className="ugt-component-content">
                <h3 className="ugt-component-subtitle">
                  Stress-Free and Accessible Travel
                </h3>

                <p className="ugt-component-text">
                  Unlike ocean cruising, river cruising eliminates many common
                  travel frustrations, making the experience more enjoyable and
                  convenient for alumni travelers.
                </p>

                <div className="ugt-questions-box">
                  <span className="ugt-questions-title">Benefits include:</span>

                  <ul className="ugt-questions-list">
                    {[
                      "Central docking locations",
                      "Easy embarkation and disembarkation",
                      "Smaller crowds",
                      "Less walking",
                      "Streamlined logistics",
                    ].map((item, idx) => (
                      <li key={idx} className="ugt-question-item">
                        <Check size={16} className="ugt-question-icon" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="ugt-component-footer" style={{backgroundColor: "var(--bg-white)", padding: "12px", borderRadius: "6px"}}>
                  This accessibility appeals to a wide range of alumni travelers
                  and contributes to a smoother overall travel experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MOST POPULAR ALUMNI RIVER CRUISE DESTINATIONS ───── */}
      <section className="luc-destinations-section" id="luc-destinations">
        <div className="luc-destinations-container">
          <div className="luc-destinations-header">
            <h2 className="luc-destinations-title">
              Most Popular Alumni River Cruise Destinations
            </h2>
            <div className="adg-c-accent-line"></div>
            <p className="luc-destinations-intro">
              From the legendary Rhine to Portugal's scenic Douro, these
              European waterways offer unparalleled alumni travel experiences
              filled with history, culture, and lifelong learning.
            </p>
          </div>

          <div className="luc-destinations-grid">

            {/* Rhine River Cruises */}
            <div className="luc-dest-card">
              <div className="luc-dest-card-img-wrap">
                <img
                  src={RhineImg}
                  alt="Rhine River Cruise"
                  className="luc-dest-card-img"
                />
                <div className="luc-dest-card-overlay"></div>
                <span className="luc-dest-badge">Rhine River</span>
              </div>
              <div className="luc-dest-card-body">
                <h3 className="luc-dest-card-title">Rhine River Cruises</h3>
                <p className="luc-dest-card-desc">
                  The Rhine remains one of the most requested alumni cruise
                  itineraries.
                </p>
                <div className="luc-dest-info-row">
                  <div className="luc-dest-info-col">
                    <span className="luc-dest-info-label">Highlights include:</span>
                    <ul className="luc-dest-info-list">
                      {["Germany", "France", "Switzerland", "Netherlands"].map(
                        (item, i) => (
                          <li key={i}>{item}</li>
                        )
                      )}
                    </ul>
                  </div>
                  <div className="luc-dest-info-col">
                    <span className="luc-dest-info-label">Travelers enjoy:</span>
                    <ul className="luc-dest-info-list">
                      {[
                        "Medieval castles",
                        "Wine regions",
                        "Historic towns",
                        "Scenic landscapes",
                      ].map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="luc-dest-theme-box">
                  <span className="luc-dest-theme-label">Educational themes:</span>
                  <span className="luc-dest-theme-text">
                    European history, politics, architecture, and culture
                  </span>
                </div>
              </div>
            </div>

            {/* Danube River Cruises */}
            <div className="luc-dest-card">
              <div className="luc-dest-card-img-wrap">
                <img
                  src={TravelExperience2}
                  alt="Danube River Cruise"
                  className="luc-dest-card-img"
                />
                <div className="luc-dest-card-overlay"></div>
                <span className="luc-dest-badge">Danube River</span>
              </div>
              <div className="luc-dest-card-body">
                <h3 className="luc-dest-card-title">Danube River Cruises</h3>
                <p className="luc-dest-card-desc">
                  The Danube connects several of Europe's most fascinating
                  cities.
                </p>
                <div className="luc-dest-info-row">
                  <div className="luc-dest-info-col">
                    <span className="luc-dest-info-label">Popular destinations:</span>
                    <ul className="luc-dest-info-list">
                      {["Vienna", "Budapest", "Bratislava", "Passau"].map(
                        (item, i) => (
                          <li key={i}>{item}</li>
                        )
                      )}
                    </ul>
                  </div>
                  <div className="luc-dest-info-col">
                    <span className="luc-dest-info-label">Ideal programs:</span>
                    <ul className="luc-dest-info-list">
                      {[
                        "European history",
                        "Music",
                        "Art",
                        "Political science",
                      ].map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="luc-dest-theme-box">
                  <span className="luc-dest-theme-label">Educational themes:</span>
                  <span className="luc-dest-theme-text">
                    European history, music, art, political science &amp;
                    cultural studies
                  </span>
                </div>
              </div>
            </div>

            {/* Seine River Cruises */}
            <div className="luc-dest-card">
              <div className="luc-dest-card-img-wrap">
                <img
                  src={Experience1}
                  alt="Seine River Cruise"
                  className="luc-dest-card-img"
                />
                <div className="luc-dest-card-overlay"></div>
                <span className="luc-dest-badge">Seine River</span>
              </div>
              <div className="luc-dest-card-body">
                <h3 className="luc-dest-card-title">Seine River Cruises</h3>
                <p className="luc-dest-card-desc">
                  Perfect for institutions with interests in art, culture, and
                  culinary experiences.
                </p>
                <div className="luc-dest-info-row">
                  <div className="luc-dest-info-col">
                    <span className="luc-dest-info-label">Perfect for:</span>
                    <ul className="luc-dest-info-list">
                      {[
                        "Art history",
                        "French culture",
                        "Literature",
                        "Culinary experiences",
                      ].map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="luc-dest-info-col">
                    <span className="luc-dest-info-label">Major highlights:</span>
                    <ul className="luc-dest-info-list">
                      {["Paris", "Normandy"].map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="luc-dest-theme-box">
                  <span className="luc-dest-theme-label">Educational themes:</span>
                  <span className="luc-dest-theme-text">
                    Art history, French culture, literature &amp; culinary
                    exploration
                  </span>
                </div>
              </div>
            </div>

            {/* Douro River Cruises */}
            <div className="luc-dest-card">
              <div className="luc-dest-card-img-wrap">
                <img
                  src={DouroImg}
                  alt="Douro River Cruise"
                  className="luc-dest-card-img"
                />
                <div className="luc-dest-card-overlay"></div>
                <span className="luc-dest-badge">Douro River</span>
              </div>
              <div className="luc-dest-card-body">
                <h3 className="luc-dest-card-title">Douro River Cruises</h3>
                <p className="luc-dest-card-desc">
                  Portugal's Douro Valley offers increasingly popular luxury
                  experiences.
                </p>
                <div className="luc-dest-info-row">
                  <div className="luc-dest-info-col">
                    <span className="luc-dest-info-label">Douro Valley offers:</span>
                    <ul className="luc-dest-info-list">
                      {[
                        "Vineyards",
                        "Historic villages",
                        "Scenic river landscapes",
                        "Culinary exploration",
                      ].map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="luc-dest-theme-box">
                  <span className="luc-dest-theme-label">Educational themes:</span>
                  <span className="luc-dest-theme-text">
                    Unique experiences increasingly popular among luxury
                    travelers seeking authentic culture
                  </span>
                </div>
              </div>
            </div>

            {/* Dutch and Belgian Waterways */}
            <div className="luc-dest-card">
              <div className="luc-dest-card-img-wrap">
                <img
                  src={Experience4}
                  alt="Dutch and Belgian Waterways"
                  className="luc-dest-card-img"
                />
                <div className="luc-dest-card-overlay"></div>
                <span className="luc-dest-badge">Dutch &amp; Belgian</span>
              </div>
              <div className="luc-dest-card-body">
                <h3 className="luc-dest-card-title">
                  Dutch and Belgian Waterways
                </h3>
                <p className="luc-dest-card-desc">
                  Springtime tulip cruises provide exceptional opportunities for
                  enrichment.
                </p>
                <div className="luc-dest-info-row">
                  <div className="luc-dest-info-col">
                    <span className="luc-dest-info-label">Exceptional for:</span>
                    <ul className="luc-dest-info-list">
                      {[
                        "Garden enthusiasts",
                        "Art lovers",
                        "Cultural travelers",
                      ].map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="luc-dest-theme-box">
                  <span className="luc-dest-theme-label">Educational themes:</span>
                  <span className="luc-dest-theme-text">
                    Beauty with educational enrichment, combining art and
                    cultural exploration
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

       {/* ── WHY ALUMNI TRAVELERS LOVE RIVER CRUISES ───── */}
      <section className="luc-why-section" id="luc-why">
        <div className="luc-why-container">

          {/* LEFT — stacked images */}
          <div className="luc-why-images">
            <div className="luc-why-img-main-wrap">
              <img
                src={TravelExperience}
                alt="Alumni river cruise experience"
                className="luc-why-img-main"
              />
              <div className="luc-why-img-overlay"></div>
            </div>
            <div className="luc-why-img-accent-wrap">
              <img
                src={Experience}
                alt="Luxury river cruise comfort"
                className="luc-why-img-accent"
              />
              <div className="luc-why-img-badge">
                <span className="luc-why-badge-num">4</span>
                <span className="luc-why-badge-text">
                  Reasons to Love River Cruises
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT — content */}
          <div className="luc-why-content">
            <h2 className="luc-why-title">
              Why Alumni Travelers Love River Cruises
            </h2>
            <div className="aac-accent-line aac-accent-white"></div>
            <p className="luc-why-intro">
              Today’s alumni travelers are seeking experiences rather than
              simply destinations. River cruising offers the perfect balance of
              luxury, learning, and authentic connection.
            </p>
            <p className="luc-why-subintro">River cruising offers:</p>

            <div className="luc-why-features">

              <div className="luc-why-feature">
                <div className="luc-why-feature-num">01</div>
                <div className="luc-why-feature-body">
                  <h3 className="luc-why-feature-title">
                    Authentic Cultural Connections
                  </h3>
                  <p className="luc-why-feature-desc">
                    Travelers interact more closely with local communities.
                  </p>
                </div>
              </div>

              <div className="luc-why-feature">
                <div className="luc-why-feature-num">02</div>
                <div className="luc-why-feature-body">
                  <h3 className="luc-why-feature-title">Comfortable Luxury</h3>
                  <p className="luc-why-feature-desc">
                    Modern river ships provide:
                  </p>
                  <ul className="luc-why-feature-list">
                    {[
                      "Elegant accommodations",
                      "Fine dining",
                      "Personalized service",
                      "Scenic lounges",
                    ].map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="luc-why-feature">
                <div className="luc-why-feature-num">03</div>
                <div className="luc-why-feature-body">
                  <h3 className="luc-why-feature-title">Ease of Travel</h3>
                  <p className="luc-why-feature-desc">
                    Daily excursions and transportation are often included.
                  </p>
                </div>
              </div>

              <div className="luc-why-feature">
                <div className="luc-why-feature-num">04</div>
                <div className="luc-why-feature-body">
                  <h3 className="luc-why-feature-title">Lifelong Learning</h3>
                  <p className="luc-why-feature-desc">
                    Every destination presents opportunities for education and
                    discovery.
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

      {/* ── HOW RIVER CRUISES SUPPORT UNIVERSITY ADVANCEMENT GOALS ───────────────────────────── */}
      <section className="ugt-advantage-section" id="ugt-advantage">
        <div className="ugt-advantage-container">
          <div className="ugt-advantage-header">
            <span className="ugt-advantage-eyebrow">
              Advancement & Alumni Engagement
            </span>

            <h2 className="ugt-advantage-title">
              How River Cruises Support University Advancement Goals
            </h2>

            <div className="Asc-accent-line"></div>

            <p className="ugt-advantage-intro">
              River cruises are particularly effective for advancement and
              alumni relations departments.
            </p>

            <h3 className="ugt-approach-title">
              The intimate setting creates opportunities for:
            </h3>
          </div>

          <div className="ugt-advantage-grid">
            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <Users size={28} strokeWidth={1.5} />
              </div>

              <h4 className="ugt-card-title">Relationship Building</h4>
              <p className="ugt-card-desc">
                University leaders can spend meaningful time with alumni and
                donors.
              </p>
            </div>

            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <HeartHandshake size={28} strokeWidth={1.5} />
              </div>

              <h4 className="ugt-card-title">Donor Engagement</h4>
              <p className="ugt-card-desc">
                Shared travel experiences strengthen personal connections.
              </p>
            </div>

            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <Network size={28} strokeWidth={1.5} />
              </div>

              <h4 className="ugt-card-title">Alumni Networking</h4>
              <p className="ugt-card-desc">
                Graduates build new relationships with fellow alumni.
              </p>
            </div>

            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <Award size={28} strokeWidth={1.5} />
              </div>

              <h4 className="ugt-card-title">Institutional Loyalty</h4>
              <p className="ugt-card-desc">
                Travel often deepens participants&apos; connection to the
                university.
              </p>
            </div>
          </div>

          <p
            className="ugt-advantage-intro"
            style={{ marginTop: "30px", textAlign: "center" }}
          >
            Many institutions report increased alumni involvement following
            travel experiences.
          </p>
        </div>
      </section>

      {/* RIVER CRUISES VS OCEAN CRUISES FOR ALUMNI GROUPS */}
      <section
        className="Asc-section Asc-bg-white"
        id="Asc-fleet"
        style={{ backgroundColor: "var(--bg-white)" }}
      >
        <div className="Asc-container">
          <div className="Asc-section-header">
            <h2 className="Asc-h2">
              River Cruises vs Ocean Cruises for Alumni Groups
            </h2>

            <div className="Asc-accent-line"></div>
          </div>

          <div className="Asc-table-wrapper">
            <table className="Asc-fleet-table">
              <thead>
                <tr>
                  <th>River Cruises</th>
                  <th>Ocean Cruises</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Smaller ships</td>
                  <td>Larger ships</td>
                </tr>

                <tr>
                  <td>Intimate atmosphere</td>
                  <td>More passengers</td>
                </tr>

                <tr>
                  <td>Educational focus</td>
                  <td>Broader entertainment</td>
                </tr>

                <tr>
                  <td>Central city docking</td>
                  <td>Larger ports</td>
                </tr>

                <tr>
                  <td>Personalized experience</td>
                  <td>More activity options</td>
                </tr>

                <tr>
                  <td>Strong group interaction</td>
                  <td>Less group cohesion</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div
            className="Asc-overview-highlight-box"
            style={{ marginTop: "30px" }}
          >
            <p className="Asc-overview-highlight-text">
              For universities prioritizing education, engagement, and
              relationship building, river cruises often provide the strongest
              fit.
            </p>
          </div>
        </div>
      </section>

      {/* ── COMMON ALUMNI RIVER CRUISE PLANNING MISTAKES ───────────────────────── */}
      <section className="Lfsg-section Lfsg-bg-dark" id="Lfsg-challenges">
        <div className="Lfsg-container">
          <div className="Lfsg-section-header">
            <h2 className="Lfsg-h2-white">
              Common Mistakes Universities Make When Planning River Cruises
            </h2>

            <div className="Lfsg-accent-line-white" />
          </div>

          <div className="Lfsg-mistakes-grid">
            {[
              {
                title: "Waiting Too Long to Reserve Space",
                desc: "River ships have limited capacity and often sell out well in advance. Planning should begin 12–24 months before departure.",
              },

              {
                title: "Selecting the Wrong Itinerary",
                desc: "The most successful programs align destinations with alumni interests and university goals.",
              },

              {
                title: "Underestimating Demand",
                desc: "Popular itineraries often exceed expectations when marketed effectively.",
              },

              {
                title: "Lacking Educational Content",
                desc: "Faculty involvement significantly enhances traveler satisfaction.",
              },

              {
                title: "Choosing a General Travel Agency",
                desc: "Universities benefit most from travel partners experienced in educational and alumni travel programs.",
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
                Alumni River Cruise Specialists
              </span>

              <h2 className="adg-c-h2 adg-c-h2-light">
                Why Universities Choose Trips &amp; Ships Luxury Travel
              </h2>

              <div className="aac-accent-line aac-accent-white"></div>

              <p className="adg-c-lead adg-c-lead-light">
                Trips &amp; Ships Luxury Travel specializes in designing river
                cruise experiences that align with university objectives.
              </p>

              <p className="adg-c-body adg-c-body-light">
                Our team helps institutions create meaningful alumni travel
                experiences that strengthen engagement, support advancement
                goals, and deliver exceptional educational value.
              </p>
            </div>

            {/* RIGHT — pill grid */}
            <div className="adg-c-why-right">
              <div className="adg-c-why-card">
                <span className="adg-c-why-card-label">
                  Our services include:
                </span>

                <div className="adg-c-pill-grid">
                  {[
                    "Strategic Program Planning",
                    "Luxury River Cruise Expertise",
                    "Educational Programming Support",
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
            alt="Alumni river cruise experience"
            className="Asc-help-bg-img"
          />
          <div className="Asc-help-overlay"></div>
        </div>

        <div className="Asc-container">
          <div className="Asc-help-card">
            <div className="Asc-help-content">
              <div className="Asc-help-header">
                <span className="Asc-help-eyebrow">
                  Alumni River Cruise Programs
                </span>

                <h2 className="Asc-help-h2">
                  Create an Alumni Travel Experience That Inspires Lifelong
                  Connections
                </h2>

                <div className="Asc-help-accent"></div>
              </div>

              <div className="Asc-help-grid">
                <div className="Asc-help-info">
                  <p className="Asc-help-intro">
                    River cruising offers a unique combination of luxury,
                    education, convenience, and relationship building that
                    perfectly aligns with university engagement goals.
                  </p>
                  <p className="Asc-help-intro">
                    Whether your institution is looking to strengthen alumni
                    loyalty, cultivate donors, expand lifelong learning
                    opportunities, or create unforgettable travel experiences, a
                    professionally planned river cruise can deliver exceptional
                    results.
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
                    <p className="Asc-help-intro">
                      With Angela Hughes' global expertise and Trips &amp; Ships
                      Luxury Travel's proven planning process, your university
                      can offer a river cruise program that alumni will remember
                      for years to come.
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
                      Start Planning Your River Cruise
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>

                <div className="Asc-help-list-box">
                  <h3 className="Asc-help-list-title">
                    Benefits of Alumni River Cruises:
                  </h3>

                  <ul className="Asc-help-bullets">
                    {[
                      "Luxury travel experiences",
                      "Meaningful alumni engagement",
                      "Donor relationship building",
                      "Lifelong learning opportunities",
                      "Cultural immersion and exploration",
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
                    planning your custom alumni river cruise experience.
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

export default LuxuryAlumniRiverCruises;
