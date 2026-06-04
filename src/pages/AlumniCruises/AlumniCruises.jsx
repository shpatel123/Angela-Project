import { useState, useEffect } from "react";
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
  Quote,
  ShieldCheck,
  Globe,
  Heart,
  Building,
} from "lucide-react";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela3.jpeg";
import HeroImage1 from "../../assets/LuxuryAlumniTravel/LuxuryAlumni.jpeg";
import HeroImage2 from "../../assets/LuxuryAlumniTravel/LuxuryAlumni2.jpeg";
import HeroImage3 from "../../assets/LuxuryAlumniTravel/LuxuryAlumni3.jpeg";
import CTAImage from "../../assets/LuxuryAlumniTravel/StartPlan.jpeg";

import Europe from "../../assets/LuxuryAlumniTravel/EuropeCruise.jpg";
import Mediterranean from "../../assets/LuxuryAlumniTravel/Mediterranean.jpg";
import Alaska from "../../assets/LuxuryAlumniTravel/Alaska.jpg";
import SouthAmerica from "../../assets/FacultyLedTravelPrograms/South_America.jpg";

import Experience from "../../assets/LuxuryAlumniTravel/FacultyLedTravel.jpg";
import Experience1 from "../../assets/LuxuryAlumniTravel/Alumni-Travel-Experiences.jpeg";
import Experience2 from "../../assets/LuxuryAlumniTravel/FacultyLedTravel3.jpg";
import Experience3 from "../../assets/LuxuryAlumniTravel/Alumni-Travel-Experiences2.jpeg";
import Experience4 from "../../assets/LuxuryAlumniTravel/Alumni-Travel-Experiences3.jpeg";
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
        "Luxury travel agency specializing in alumni cruises, luxury alumni travel, educational travel programs, expedition cruises, river cruises, and university travel experiences.",
    },

    {
      "@type": "TravelAgency",
      "@id": "https://www.tripsandships.com/#travelagency",
      name: "Trips & Ships Luxury Travel",
      url: "https://www.tripsandships.com",
      description:
        "Luxury travel experts helping universities, alumni associations, affinity groups, and lifelong learners create exceptional cruise and travel experiences.",
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
        "CEO of Trips & Ships Luxury Travel, Founder of Luxury Travel University, Travel Leaders Network Advisory Board member, luxury travel speaker, educator, and travel expert with more than 40 years of experience and travel to over 121 countries.",
    },

    {
      "@type": "WebPage",
      "@id": "https://www.tripsandships.com/alumni-cruises",
      url: "https://www.tripsandships.com/alumni-cruises",
      name: "Luxury Alumni Cruises",
      description:
        "Luxury alumni cruises designed for universities, alumni associations, donors, faculty, and lifelong learners. Explore river cruises, ocean cruises, expedition voyages, and educational travel experiences.",
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
        "https://www.tripsandships.com/alumni-cruises#breadcrumb",
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
      ],
    },

    {
      "@type": "FAQPage",
      "@id": "https://www.tripsandships.com/alumni-cruises#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is an alumni cruise?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "An alumni cruise is a travel program organized for university graduates, supporters, faculty, and friends that combines luxury travel with educational and networking opportunities.",
          },
        },
        {
          "@type": "Question",
          name: "How many travelers typically join an alumni cruise?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Programs often range from 20 to more than 200 participants depending on the cruise type and institution.",
          },
        },
        {
          "@type": "Question",
          name: "Are alumni cruises only for graduates?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Many programs welcome spouses, family members, donors, and friends of the university.",
          },
        },
        {
          "@type": "Question",
          name: "What destinations are most popular for alumni cruises?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Europe, Alaska, the Mediterranean, Antarctica, and river cruise itineraries are consistently popular among alumni travelers.",
          },
        },
        {
          "@type": "Question",
          name: "Can faculty participate in alumni cruises?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Faculty involvement often enhances educational value and alumni engagement.",
          },
        },
        {
          "@type": "Question",
          name: "Do alumni cruises help fundraising efforts?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Many universities report stronger donor relationships and increased alumni engagement following travel programs.",
          },
        },
        {
          "@type": "Question",
          name: "Are river cruises suitable for alumni groups?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. River cruises are among the most successful and popular alumni travel formats.",
          },
        },
        {
          "@type": "Question",
          name: "What is the ideal alumni cruise size?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The ideal size depends on program objectives, but many successful alumni cruises range from 30 to 100 travelers.",
          },
        },
        {
          "@type": "Question",
          name: "How far in advance should alumni cruises be planned?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most alumni cruises should begin planning 12 to 24 months before departure.",
          },
        },
        {
          "@type": "Question",
          name: "Can alumni cruises be customized?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Universities can incorporate private events, faculty lectures, educational programming, donor receptions, and custom branding.",
          },
        },
        {
          "@type": "Question",
          name: "Are luxury cruises worth the investment?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Luxury cruises often generate higher traveler satisfaction, stronger alumni engagement, and a more positive reflection of the university's brand.",
          },
        },
        {
          "@type": "Question",
          name: "What support does Trips & Ships Luxury Travel provide?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Trips & Ships Luxury Travel provides program planning, supplier negotiations, marketing support, logistics management, traveler assistance, and on-site coordination.",
          },
        },
        {
          "@type": "Question",
          name: "How do universities get started with an alumni cruise program?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "An initial consultation helps determine goals, target audiences, destinations, travel formats, and program objectives before development begins.",
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
      q: "What is an alumni cruise?",
      a: "An alumni cruise is a travel program organized for university graduates, supporters, faculty, and friends that combines luxury travel with educational and networking opportunities.",
    },

    {
      q: "How many travelers typically join an alumni cruise?",
      a: "Programs often range from 20 to more than 200 participants depending on the cruise type and institution.",
    },

    {
      q: "Are alumni cruises only for graduates?",
      a: "No. Many programs welcome spouses, family members, donors, and friends of the university.",
    },

    {
      q: "What destinations are most popular?",
      a: "Europe, Alaska, the Mediterranean, Antarctica, and river cruise itineraries are consistently popular.",
    },

    {
      q: "Can faculty participate?",
      a: "Yes. Faculty involvement often enhances educational value and alumni engagement.",
    },

    {
      q: "Do alumni cruises help fundraising efforts?",
      a: "Many universities report stronger donor relationships and increased engagement following travel programs.",
    },

    {
      q: "Are river cruises suitable for alumni groups?",
      a: "Absolutely. River cruises are among the most successful alumni travel formats.",
    },

    {
      q: "What is the ideal alumni cruise size?",
      a: "The ideal size depends on objectives, but most successful programs range from 30 to 100 travelers.",
    },

    {
      q: "How far in advance should cruises be planned?",
      a: "Most alumni cruises should begin planning 12 to 24 months before departure.",
    },

    {
      q: "Can cruises be customized?",
      a: "Yes. Private events, educational programming, and university branding can all be incorporated.",
    },

    {
      q: "Are luxury cruises worth the investment?",
      a: "Luxury experiences often generate higher satisfaction and stronger university affiliation.",
    },

    {
      q: "What support does Trips & Ships Luxury Travel provide?",
      a: "Planning, supplier negotiation, logistics, marketing support, traveler assistance, and on-site coordination.",
    },

    {
      q: "How do universities get started?",
      a: "An initial consultation helps determine goals, audience, destinations, and travel formats.",
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
const AlumniCruises = () => {
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
          Luxury Alumni Cruises | University Alumni Travel Programs | Trips &
          Ships Luxury Travel
        </title>
        <meta
          name="title"
          content=" Luxury Alumni Cruises for Universities & Alumni Associations"
        />
        <meta
          name="description"
          content="Discover luxury alumni cruises designed for universities, alumni associations, and educational institutions. Expertly planned by Trips & Ships Luxury Travel and industry leader Angela Hughes."
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
            Luxury Alumni Cruises That Strengthen Connections Beyond Campus
          </h1>

          <p>
            For universities seeking innovative ways to engage alumni,
            strengthen donor relationships, and create lifelong memories, few
            experiences rival the impact of a luxury alumni cruise.
          </p>

          {/* READ MORE CONTENT */}
          {readMore && (
            <>
              <p>
                Today's alumni want more than newsletters and annual fundraising
                campaigns. They want meaningful experiences, deeper connections,
                and opportunities to continue learning while exploring the
                world. Alumni cruises deliver exactly that.
              </p>

              <p>
                At Trips &amp; Ships Luxury Travel, we help universities create
                extraordinary travel programs that connect graduates, donors,
                faculty, and families through unforgettable cruise experiences
                around the globe.
              </p>

              <p>
                Under the leadership of Angela Hughes, CEO of Trips &amp; Ships
                Luxury Travel, universities gain access to one of the travel
                industry's most respected experts.
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
    WHAT IS LUXURY ALUMNI TRAVEL?
════════════════════════════════════════ */}
      <section className="adg-c-section adg-c-bg-dark" id="adg-why-dining">
        <div className="adg-c-container">
          <div className="adg-c-why-grid">
            {/* LEFT — text */}
            <div className="adg-c-why-left">
              <span className="adg-c-eyebrow adg-c-eyebrow-light">
                Alumni Cruise Benefits
              </span>

              <h2 className="adg-c-h2 adg-c-h2-light">
                Why Alumni Cruises Have Become So Popular
              </h2>

              <div className="aac-accent-line aac-accent-white"></div>

              <p className="adg-c-lead adg-c-lead-light">
                Universities across the country are investing heavily in alumni
                travel programs because they create stronger relationships than
                traditional engagement methods.
              </p>

              <p className="adg-c-body adg-c-body-light">
                Luxury alumni cruises provide meaningful opportunities for
                graduates, donors, faculty, and university leaders to connect
                through shared travel experiences and lifelong learning.
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
                  Many institutions find that alumni who participate in travel
                  programs become more engaged with university events,
                  advancement initiatives, and donor programs long after the
                  journey ends.
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
                  Luxury alumni cruises provide:
                </span>

                <div className="adg-c-pill-grid">
                  {[
                    "Meaningful Alumni Connections",
                    "Increased Alumni Engagement",
                    "Donor Relationship Building",
                    "Lifelong Learning Opportunities",
                    "Multi-Generational Participation",
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
WHAT MAKES A SUCCESSFUL ALUMNI CRUISE PROGRAM?
═════════════════════════════════════════ */}
      <section className="adg-c-section adg-c-bg-soft" id="adg-complimentary">
        <div className="adg-c-container">
          <div className="adg-c-section-header">
            <h2 className="adg-c-h2">
              What Makes a Successful Alumni Cruise Program?
            </h2>
            <div className="adg-c-accent-line"></div>

            <p className="Asc-section-intro">
              Not all alumni cruises are created equal.
            </p>

            <p className="Asc-section-intro">
              The most successful programs combine luxury travel with
              educational enrichment and meaningful university engagement.
            </p>
          </div>

          <div className="adg-c-venues-grid">
            {[
              {
                id: 1,
                eyebrow: "University Engagement",
                name: "Exclusive University Experiences",
                highlight:
                  "Successful alumni cruise programs create meaningful opportunities for graduates to reconnect with their institution and fellow alumni.",
                items: [
                  "Private receptions",
                  "Faculty presentations",
                  "Behind-the-scenes destination access",
                  "Alumni networking events",
                  "VIP excursions",
                ],
                callout:
                  "Exclusive experiences strengthen alumni relationships and create lasting memories.",
              },

              {
                id: 2,
                eyebrow: "Educational Enrichment",
                name: "Educational Components",
                highlight:
                  "Travel becomes far more meaningful when learning opportunities are integrated throughout the journey.",
                items: [
                  "Guest lecturers",
                  "Faculty experts",
                  "Historians",
                  "Scientists",
                  "Cultural specialists",
                  "Destination experts",
                ],
                callout:
                  "Educational programming transforms travel into a richer and more engaging alumni experience.",
              },

              {
                id: 3,
                eyebrow: "Luxury Travel Partners",
                name: "Exceptional Cruise Partners",
                highlight:
                  "Trips & Ships Luxury Travel works with leading luxury cruise brands to deliver world-class travel experiences.",
                items: [
                  "Luxury ocean cruises",
                  "River cruises",
                  "Expedition cruises",
                  "Small ship voyages",
                  "Private charter programs",
                ],
                callout:
                  "The right cruise partner plays a critical role in traveler satisfaction and program success.",
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

      {/* ===== EXPERIENCE ===== */}
      <section className="experience">
        <div className="section-inner wide">
          <h2 className="afc-h2" style={{ textAlign: "center" }}>
            Alumni Travel Experiences
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

      {/* ════════════════════════════════════════
WHY UNIVERSITIES PARTNER WITH TRIPS & SHIPS LUXURY TRAVEL
═════════════════════════════════════════ */}
      <section
        className="adg-c-section adg-c-bg-dark"
        id="adg-university-travel"
      >
        <div className="adg-c-container">
          <div className="adg-c-why-grid">
            {/* LEFT — text */}
            <div className="adg-c-why-left">
              <span className="adg-c-eyebrow adg-c-eyebrow-light">
                Alumni Travel Experts
              </span>

              <h2 className="adg-c-h2 adg-c-h2-light">
                Why Universities Partner With Trips &amp; Ships Luxury Travel
              </h2>

              <div className="aac-accent-line aac-accent-white"></div>

              <p className="adg-c-lead adg-c-lead-light">
                Trips &amp; Ships Luxury Travel specializes in designing custom
                alumni travel programs that combine luxury, education, and
                relationship-building.
              </p>

              <p className="adg-c-body adg-c-body-light">
                Our team works closely with universities, alumni associations,
                advancement offices, and donor programs to create meaningful
                travel experiences that strengthen engagement and deliver
                lasting value.
              </p>
            </div>

            {/* RIGHT — pill grid */}
            <div className="adg-c-why-right">
              <div className="adg-c-why-card">
                <span className="adg-c-why-card-label">
                  Universities benefit from:
                </span>

                <div className="adg-c-pill-grid">
                  {[
                    "Strategic Planning",
                    "Complete program development from concept to execution",
                    "Supplier Relationships",
                    "Access to premium cruise lines and exclusive opportunities",
                    "Risk Management",
                    "Professional oversight and traveler support",
                    "Marketing Assistance",
                    "Helping universities promote programs effectively",
                    "White Glove Service",
                    "Dedicated support before, during, and after travel",
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

      {/* ALUMNI CRUISE DESTINATIONS THAT CONSISTENTLY PERFORM WELL */}
      <section className="azs-experience-section" id="azs-experience">
        <div className="azs-container">
          <div className="azs-section-header">
            <h2 className="azs-section-title">
              Alumni Cruise Destinations <br /> That Consistently Perform Well
            </h2>

            <div className="azs-section-accent"></div>

            <p className="Asc-section-intro">
              The most successful alumni cruise programs combine exceptional
              destinations, educational opportunities, and memorable travel
              experiences that appeal to a wide range of alumni audiences.
            </p>
          </div>

          <div className="azs-experience-grid">
            {/* MEDITERRANEAN */}
            <div className="azs-experience-card azs-azamara-exp">
              <div className="azs-exp-image-wrap" style={{ height: "330px" }}>
                <img
                  src={Mediterranean}
                  alt="Mediterranean Alumni Cruises"
                  className="azs-exp-img"
                />

                <div className="azs-exp-image-badge">Mediterranean</div>
              </div>

              <div className="azs-exp-content">
                <div className="azs-exp-header">
                  <Ship size={24} className="azs-exp-icon" />

                  <h3 className="azs-exp-title">
                    Mediterranean Alumni Cruises
                  </h3>
                </div>

                <div className="azs-exp-body">
                  <p className="azs-exp-highlight">
                    Popular among graduates seeking history, culture,
                    architecture, and world-class cuisine.
                  </p>

                  <div className="azs-exp-divider"></div>

                  <div className="azs-exp-group">
                    <h4 className="azs-exp-group-title">Highlights include:</h4>

                    <ul className="azs-exp-list">
                      {["Italy", "Greece", "Croatia", "Spain", "France"].map(
                        (item, idx) => (
                          <li key={idx} className="azs-exp-list-item">
                            <ArrowRight
                              size={16}
                              className="azs-exp-list-icon"
                            />
                            <span>{item}</span>
                          </li>
                        ),
                      )}
                    </ul>
                  </div>

                  <div className="azs-exp-divider"></div>

                  <p className="azs-exp-highlight">
                    Ideal for educational enrichment, cultural immersion, and
                    alumni networking experiences.
                  </p>
                </div>
              </div>
            </div>

            {/* EUROPEAN RIVER CRUISES */}
            <div className="azs-experience-card azs-seabourn-exp">
              <div className="azs-exp-image-wrap" style={{ height: "330px" }}>
                <img
                  src={Europe}
                  alt="European River Cruises"
                  className="azs-exp-img"
                />

                <div className="azs-exp-image-badge">European Rivers</div>
              </div>

              <div className="azs-exp-content">
                <div className="azs-exp-header">
                  <Ship size={24} className="azs-exp-icon" />

                  <h3 className="azs-exp-title">European River Cruises</h3>
                </div>

                <div className="azs-exp-body">
                  <p className="azs-exp-highlight">
                    Ideal for educational travel programs and lifelong learning
                    experiences.
                  </p>

                  <div className="azs-exp-divider"></div>

                  <div className="azs-exp-group">
                    <h4 className="azs-exp-group-title">
                      Popular rivers include:
                    </h4>

                    <ul className="azs-exp-list">
                      {["Rhine", "Danube", "Seine", "Douro"].map(
                        (item, idx) => (
                          <li key={idx} className="azs-exp-list-item">
                            <ArrowRight
                              size={16}
                              className="azs-exp-list-icon"
                            />
                            <span>{item}</span>
                          </li>
                        ),
                      )}
                    </ul>
                  </div>

                  <div className="azs-exp-divider"></div>

                  <p className="azs-exp-highlight">
                    River cruises combine cultural discovery, expert-led
                    learning, and luxurious comfort in an intimate setting.
                  </p>
                </div>
              </div>
            </div>

            {/* ALASKA */}
            <div className="azs-experience-card azs-azamara-exp">
              <div className="azs-exp-image-wrap" style={{ height: "330px" }}>
                <img
                  src={Alaska}
                  alt="Alaska Alumni Cruises"
                  className="azs-exp-img"
                />

                <div className="azs-exp-image-badge">Alaska</div>
              </div>

              <div className="azs-exp-content">
                <div className="azs-exp-header">
                  <Ship size={24} className="azs-exp-icon" />

                  <h3 className="azs-exp-title">Alaska Alumni Cruises</h3>
                </div>

                <div className="azs-exp-body">
                  <p className="azs-exp-highlight">
                    Perfect for nature enthusiasts and educational programming
                    focused on wildlife, conservation, and environmental
                    sciences.
                  </p>

                  <div className="azs-exp-divider"></div>

                  <div className="azs-exp-group">
                    <h4 className="azs-exp-group-title">
                      Popular experiences:
                    </h4>

                    <ul className="azs-exp-list">
                      {[
                        "Glacier exploration",
                        "Wildlife observation",
                        "Native culture experiences",
                        "Conservation education",
                      ].map((item, idx) => (
                        <li key={idx} className="azs-exp-list-item">
                          <Check size={16} className="azs-exp-list-icon" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="azs-exp-divider"></div>

                  <p className="azs-exp-highlight">
                    Alaska consistently attracts alumni travelers seeking both
                    adventure and educational enrichment.
                  </p>
                </div>
              </div>
            </div>

            {/* ANTARCTICA & BRITISH ISLES */}
            <div className="azs-experience-card azs-seabourn-exp">
              <div className="azs-exp-image-wrap" style={{ height: "330px" }}>
                <img
                  src={SouthAmerica}
                  alt="Antarctica and British Isles Cruises"
                  className="azs-exp-img"
                />

                <div className="azs-exp-image-badge">
                  Antarctica & British Isles
                </div>
              </div>

              <div className="azs-exp-content">
                <div className="azs-exp-header">
                  <Ship size={24} className="azs-exp-icon" />

                  <h3 className="azs-exp-title">
                    Antarctica & British Isles Cruises
                  </h3>
                </div>

                <div className="azs-exp-body">
                  <div className="azs-exp-group">
                    <h4 className="azs-exp-group-title">
                      Antarctica Expedition Cruises
                    </h4>

                    <p
                      className="azs-exp-highlight"
                      style={{ fontWeight: "300" }}
                    >
                      A premium alumni travel experience attracting adventurous
                      travelers seeking once-in-a-lifetime journeys.
                    </p>
                  </div>

                  <div className="azs-exp-divider"></div>

                  <div className="azs-exp-group">
                    <h4 className="azs-exp-group-title">
                      British Isles Cruises
                    </h4>

                    <p
                      className="azs-exp-highlight"
                      style={{ fontWeight: "300" }}
                    >
                      Strong demand among history-focused alumni audiences
                      interested in heritage, culture, literature, and academic
                      exploration.
                    </p>
                  </div>

                  <div className="azs-exp-divider"></div>

                  <p className="azs-exp-highlight">
                    Both destinations offer exceptional opportunities for
                    faculty-led enrichment, expert lectures, and meaningful
                    alumni engagement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
BENEFITS FOR UNIVERSITY ADVANCEMENT DEPARTMENTS
════════════════════════════════════════ */}
      <section className="adg-c-section adg-c-bg-soft" id="adg-overview">
        <div className="adg-c-container">
          <div className="adg-c-section-header">
            <h2 className="adg-c-h2">
              Benefits for University Advancement Departments
            </h2>

            <div className="adg-c-accent-line"></div>
          </div>

          <div className="adg-c-overview-layout">
            {/* LEFT — list */}
            <div className="adg-c-overview-icons">
              {[
                {
                  icon: <Users size={20} />,
                  label: "Deepen donor relationships",
                },
                {
                  icon: <Heart size={20} />,
                  label: "Increase donor retention",
                },
                {
                  icon: <Building size={20} />,
                  label: "Strengthen affinity toward the institution",
                },
                {
                  icon: <Star size={20} />,
                  label: "Create exclusive donor experiences",
                },
                {
                  icon: <Award size={20} />,
                  label: "Encourage future major gifts",
                },
              ].map((item, i) => (
                <div key={i} className="adg-c-overview-item">
                  <span className="adg-c-overview-icon">{item.icon}</span>

                  <span className="adg-c-overview-label">{item.label}</span>
                </div>
              ))}
            </div>

            {/* RIGHT — callout card + image */}
            <div className="adg-c-overview-right">
              <div className="adg-c-overview-callout">
                <div className="adg-c-overview-callout-inner">
                  <Star size={28} className="adg-c-callout-star" />

                  <p className="adg-c-callout-text">
                    One of the most overlooked advantages of alumni cruises is
                    their fundraising potential. Travel programs allow
                    advancement teams to deepen relationships with donors while
                    creating memorable experiences that strengthen long-term
                    institutional engagement.
                  </p>
                </div>
              </div>

              <div className="adg-c-overview-image-wrap">
                <img
                  src={HeroImage2}
                  alt="University advancement and alumni engagement programs"
                  className="adg-c-overview-img"
                />

                <div className="adg-c-overview-img-overlay">
                  <span className="adg-c-overview-img-label">
                    Alumni Engagement & Fundraising
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PLANNING ADVICE */}
      <section
        className="Avr-planning-section"
        id="Asc-planning-advice"
        style={{ backgroundColor: "var(--bg-white)" }}
      >
        <div className="Asc-container">
          {/* HEADING */}
          <div className="Avr-planning-heading">
            <span className="Avr-planning-eyebrow">
              Premium Alumni Travel Experiences
            </span>

            <h2 className="Avr-planning-title">Why Luxury Matters</h2>

            <div className="Avr-planning-divider"></div>
          </div>

          {/* TWO-PANEL GRID */}
          <div className="Avr-planning-grid">
            {/* LEFT PANEL */}
            <div className="Avr-planning-left">
              <div className="Avr-planning-left-deco">&ldquo;</div>

              <h3 className="Avr-planning-left-title">
                Today's Alumni Travelers Expect Premium Experiences
              </h3>

              <p className="Avr-planning-left-body">
                Modern alumni travelers are seeking more than standard group
                tours. They value comfort, personalized service, meaningful
                cultural experiences, and opportunities to connect with fellow
                graduates in exceptional settings.
              </p>

              <div className="Avr-planning-alert">
                <ShieldCheck size={18} className="Avr-planning-alert-icon" />

                <p className="Avr-planning-alert-text">
                  Luxury travel experiences help create stronger emotional
                  connections, higher traveler satisfaction, and memorable
                  alumni engagement opportunities.
                </p>
              </div>
            </div>

            {/* RIGHT PANEL */}
            <div className="Avr-planning-right">
              <p className="Avr-planning-right-intro">
                Luxury cruises provide:
              </p>

              <div className="Avr-planning-benefits-grid">
                {[
                  {
                    icon: <Star size={18} />,
                    label: "Spacious accommodations",
                  },
                  {
                    icon: <Users size={18} />,
                    label: "Personalized service",
                  },
                  {
                    icon: <Award size={18} />,
                    label: "Exceptional dining",
                  },
                  {
                    icon: <Globe size={18} />,
                    label: "Cultural immersion",
                  },
                  {
                    icon: <MapPin size={18} />,
                    label: "Expert-guided excursions",
                  },
                  {
                    icon: <ShieldCheck size={18} />,
                    label: "Small group experiences",
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
                style={{ marginTop: "28px" }}
              >
                Luxury travel also reflects positively on a university's brand,
                enhances alumni satisfaction, encourages repeat participation,
                and helps create unforgettable experiences that strengthen
                long-term alumni engagement.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* ── COMMON MISTAKES UNIVERSITIES MAKE WHEN PLANNING ALUMNI CRUISES ───────────────────────────────────────── */}
      <section className="Lfsg-section Lfsg-bg-dark" id="Lfsg-challenges">
        <div className="Lfsg-container">
          <div className="Lfsg-section-header">
            <h2 className="Lfsg-h2-white">
              Common Mistakes Universities Make <br /> When Planning Alumni
              Cruises
            </h2>

            <div className="Lfsg-accent-line-white" />
          </div>

          <div className="Lfsg-mistakes-grid">
            {[
              {
                title: "Choosing Price Over Experience",
                desc: "Low-cost options often result in lower satisfaction and reduced repeat participation.",
              },

              {
                title: "Lack of Educational Programming",
                desc: "Travel without meaningful university involvement can feel disconnected from the institution.",
              },

              {
                title: "Poor Marketing",
                desc: "Many programs fail because alumni simply don't know they exist.",
              },

              {
                title: "Insufficient Travel Expertise",
                desc: "University staff rarely have the resources needed to manage complex cruise programs.",
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
            <h2 className="Asc-h2">Who Is Alumni Travel Best For?</h2>
            <div className="Asc-accent-line"></div>
          </div>

          <div className="Asc-who-grid">
            <div className="Asc-who-card Asc-who-yes">
              <h3 className="Asc-who-title">Best For</h3>

              <ul className="Asc-who-list">
                {[
                  "Universities seeking stronger alumni engagement",
                  "Alumni associations",
                  "Advancement offices",
                  "Donor cultivation programs",
                  "Educational travel initiatives",
                  "Multi-generational alumni experiences",
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
                  "Institutions seeking mass-market travel experiences",
                  "Budget-focused travel programs",
                  "Programs without educational objectives",
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
            alt="Alumni cruise program planning background"
            className="Asc-help-bg-img"
          />
          <div className="Asc-help-overlay"></div>
        </div>

        <div className="Asc-container">
          <div className="Asc-help-card">
            <div className="Asc-help-content">
              <div className="Asc-help-header">
                <span className="Asc-help-eyebrow">
                  Alumni Cruise Program Planning
                </span>

                <h2 className="Asc-help-h2">
                  Ready to Launch a <br /> Successful Alumni Travel Program?
                </h2>

                <div className="Asc-help-accent"></div>
              </div>

              <div className="Asc-help-grid">
                <div className="Asc-help-info">
                  <p className="Asc-help-intro">
                    A thoughtfully designed alumni cruise can strengthen
                    relationships, increase engagement, support fundraising
                    goals, and create unforgettable memories for graduates and
                    supporters.
                  </p>

                  <p className="Asc-help-intro">
                    With more than four decades of travel expertise and a
                    reputation for excellence, Angela Hughes and Trips &amp;
                    Ships Luxury Travel help universities create world-class
                    travel experiences that deliver lasting value.
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
                    Alumni Travel Program Benefits:
                  </h3>

                  <ul className="Asc-help-bullets">
                    {[
                      "Strengthen alumni relationships",
                      "Increase engagement",
                      "Support fundraising goals",
                      "Create lifelong memories",
                      "Deliver meaningful travel experiences",
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
                    designing a custom alumni cruise program for your
                    institution.
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

export default AlumniCruises;
