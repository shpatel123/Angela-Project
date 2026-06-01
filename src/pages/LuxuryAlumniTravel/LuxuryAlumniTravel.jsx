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
} from "lucide-react";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela2.jpeg";
import HeroImage1 from "../../assets/LuxuryAlumniTravel/LuxuryAlumni.jpeg";
import HeroImage2 from "../../assets/LuxuryAlumniTravel/LuxuryAlumni2.jpeg";
import HeroImage3 from "../../assets/LuxuryAlumniTravel/LuxuryAlumni3.jpeg";
import CTAImage from "../../assets/LuxuryAlumniTravel/StartPlan.jpeg";

import Europe from "../../assets/EducationalTravelPrograms/Europe.jpeg";
import Asia from "../../assets/FacultyLedTravelPrograms/Asia.jpeg";
import Africa from "../../assets/EducationalTravelPrograms/Educational_Travel.jpg";
import SouthAmerica from "../../assets/FacultyLedTravelPrograms/South_America.jpg";

import Experience from "../../assets/EducationalTravelPrograms/Educational_Travel.jpg";
import Experience1 from "../../assets/EducationalTravelPrograms/Educational_Travel2.jpg";
import Experience2 from "../../assets/EducationalTravelPrograms/Educational_Travel3.jpg";
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
      q: "What is luxury alumni travel?",
      a: "Luxury alumni travel combines premium travel experiences with alumni engagement, lifelong learning, cultural immersion, and meaningful connections with fellow graduates and university communities.",
    },

    {
      q: "Why are universities offering alumni travel programs?",
      a: "Universities use alumni travel programs to strengthen alumni engagement, support lifelong learning, encourage donor participation, and create deeper connections between graduates and their institution.",
    },

    {
      q: "What are the best destinations for alumni travel?",
      a: "Popular alumni travel destinations include Italy, France, Greece, Alaska, Antarctica, South Africa, Japan, the Galapagos Islands, and European river cruise itineraries.",
    },

    {
      q: "Why are cruises so popular for alumni groups?",
      a: "Cruises provide convenience, educational opportunities, social interaction, multiple destinations, and a comfortable environment for alumni networking and enrichment.",
    },

    {
      q: "What travel company specializes in alumni travel?",
      a: "Trips & Ships Luxury Travel specializes in luxury alumni travel, alumni cruises, educational travel programs, faculty-hosted travel, and university travel planning.",
    },

    {
      q: "What makes luxury alumni travel different?",
      a: "Luxury alumni travel focuses on premium accommodations, exclusive experiences, personalized service, educational enrichment, and curated itineraries that go beyond traditional group travel.",
    },

    {
      q: "Are luxury alumni cruises worth it?",
      a: "Yes. Luxury alumni cruises combine world-class service, destination immersion, educational programming, and meaningful alumni engagement in one seamless experience.",
    },

    {
      q: "What are alumni river cruises?",
      a: "Alumni river cruises are educational and cultural travel experiences designed for university alumni, typically sailing through destinations such as the Rhine, Danube, Seine, or Douro rivers.",
    },

    {
      q: "What are alumni expedition cruises?",
      a: "Alumni expedition cruises explore destinations such as Antarctica, the Arctic, Greenland, Alaska, and the Galapagos while offering expert-led educational experiences.",
    },

    {
      q: "Why are small ship cruises popular for alumni travel?",
      a: "Small ship cruises provide greater destination access, fewer crowds, personalized service, and deeper cultural immersion than larger cruise ships.",
    },

    {
      q: "Can alumni travel strengthen university engagement?",
      a: "Absolutely. Alumni travel creates meaningful opportunities for graduates to reconnect with faculty, classmates, and university leadership while participating in lifelong learning experiences.",
    },

    {
      q: "What should universities look for in an alumni travel partner?",
      a: "Universities should seek expertise in luxury travel, educational travel, group travel management, supplier relationships, risk management, and alumni engagement.",
    },

    {
      q: "Are faculty-hosted alumni travel programs beneficial?",
      a: "Yes. Faculty-hosted programs provide educational enrichment, intellectual engagement, and unique opportunities for alumni to learn from respected academic experts.",
    },

    {
      q: "Can luxury alumni travel support donor development?",
      a: "Many institutions use luxury alumni travel and donor travel programs to deepen relationships with supporters through meaningful shared experiences.",
    },

    {
      q: "Why choose Trips & Ships Luxury Travel?",
      a: "Trips & Ships Luxury Travel combines luxury travel expertise, educational travel experience, alumni travel planning, and personalized service to create exceptional travel experiences worldwide.",
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
const LuxuryAlumniTravel = () => {
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
          Luxury Alumni Travel | Premium Alumni Cruises & Educational Travel
        </title>
        <meta
          name="title"
          content="Luxury Alumni Travel | Alumni Cruises & Exclusive Travel Experiences | Trips & Ships Luxury Travel"
        />
        <meta
          name="description"
          content="Discover luxury alumni travel experiences including alumni cruises, river cruises, expedition voyages, and educational journeys designed for universities, alumni associations, and lifelong learners."
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
          <h1>LUXURY ALUMNI TRAVEL</h1>

          <p>
            Reconnect, Explore, and Experience the World in Extraordinary Ways
          </p>

          <p>
            Travel has always been one of the most powerful ways to build
            relationships, expand perspectives, and create lifelong memories.
          </p>

          {/* READ MORE CONTENT */}
          {readMore && (
            <>
              <p>
                Luxury alumni travel takes that experience even further by
                combining meaningful connections with world-class travel
                experiences. These journeys allow graduates to reconnect with
                their university, engage with fellow alumni, participate in
                lifelong learning opportunities, and explore extraordinary
                destinations while enjoying premium accommodations, exceptional
                service, and carefully curated experiences.
              </p>

              <p>
                At Trips &amp; Ships Luxury Travel, we help universities, alumni
                associations, affinity groups, and educational institutions
                create luxury alumni travel programs that inspire, educate, and
                strengthen community connections.
              </p>

              <p>
                Led by Angela Hughes, CEO of Trips &amp; Ships Luxury Travel,
                our team brings more than 40 years of travel industry expertise
                and firsthand experience in over 121 countries, helping alumni
                travelers discover the world through exceptional journeys.
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
                Luxury Alumni Travel Experiences
              </span>

              <h2 className="adg-c-h2 adg-c-h2-light">
                What Is Luxury Alumni Travel?
              </h2>
              <div class="aac-accent-line aac-accent-white"></div>

              <p className="adg-c-lead adg-c-lead-light">
                Luxury alumni travel combines the benefits of alumni engagement
                with premium travel experiences.
              </p>

              <p className="adg-c-body adg-c-body-light">
                Unlike traditional group travel, luxury alumni travel focuses on
                exceptional accommodations, curated cultural experiences,
                educational enrichment, and meaningful opportunities to
                reconnect with fellow graduates and university communities.
              </p>

              <br />

              <p className="adg-c-body adg-c-body-light">
                Many programs are developed specifically for alumni
                associations, university travel programs, and educational
                institutions seeking meaningful ways to engage graduates beyond
                campus.
              </p>

              <br />
              {readMore && (
                <>
                  <p className="adg-c-body adg-c-body-light">
                    Whether travelers choose a luxury river cruise through
                    Europe, a safari in Africa, or an expedition voyage to
                    Antarctica, luxury alumni travel delivers experiences that
                    go far beyond traditional tourism.
                  </p>
                </>
              )}

              <div className="Scenic_readmore_wrapper">
                <button
                  style={{ color: "var(--bg-white)" }}
                  className="Scenic_readmore_btn"
                  onClick={() => setReadMore(!readMore)}
                >
                  {readMore ? "Read Less" : "Read More"}
                </button>
              </div>
            </div>

            {/* RIGHT — pill grid */}
            <div className="adg-c-why-right">
              <div className="adg-c-why-card">
                <span className="adg-c-why-card-label">
                  Luxury alumni travel focuses on:
                </span>

                <div className="adg-c-pill-grid">
                  {[
                    "Exceptional accommodations",
                    "Curated cultural experiences",
                    "Educational enrichment",
                    "VIP access opportunities",
                    "Personalized service",
                    "Faculty hosted experiences",
                    "Lifelong learning opportunities",
                    "Exclusive itineraries",
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

      {/* PLANNING ADVICE */}
      <section
        className="Avr-planning-section"
        id="Asc-planning-advice"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="Asc-container">
          {/* HEADING */}
          <div className="Avr-planning-heading">
            <span className="Avr-planning-eyebrow">
              Alumni Engagement Through Travel
            </span>

            <h2 className="Avr-planning-title">
              Why Universities Are Offering Alumni Travel Programs
            </h2>

            <div className="Avr-planning-divider"></div>
          </div>

          {/* TWO-PANEL GRID */}
          <div className="Avr-planning-grid">
            {/* LEFT PANEL */}
            <div className="Avr-planning-left">
              <div className="Avr-planning-left-deco">&ldquo;</div>

              <h3 className="Avr-planning-left-title">
                Alumni Travel Is Becoming a Strategic Engagement Tool
              </h3>

              <p className="Avr-planning-left-body">
                Universities increasingly recognize the value of alumni travel
                programs as part of their broader engagement strategy.
              </p>

              <div className="Avr-planning-alert">
                <ShieldCheck size={18} className="Avr-planning-alert-icon" />

                <p className="Avr-planning-alert-text">
                  These programs allow alumni to remain connected to their
                  institution while exploring the world alongside fellow
                  graduates and faculty experts.
                </p>
              </div>
            </div>

            {/* RIGHT PANEL */}
            <div className="Avr-planning-right">
              <p className="Avr-planning-right-intro">
                Luxury alumni travel helps institutions:
              </p>

              <div className="Avr-planning-benefits-grid">
                {[
                  {
                    icon: <Users size={18} />,
                    label: "Strengthen alumni relationships",
                  },
                  {
                    icon: <Award size={18} />,
                    label: "Encourage lifelong learning",
                  },
                  {
                    icon: <ShieldCheck size={18} />,
                    label: "Support donor engagement",
                  },
                  {
                    icon: <Globe size={18} />,
                    label: "Foster community connections",
                  },
                  {
                    icon: <Star size={18} />,
                    label: "Enhance alumni participation",
                  },
                  {
                    icon: <MapPin size={18} />,
                    label: "Create memorable university experiences",
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
                As alumni expectations evolve, luxury travel experiences have
                become increasingly important in delivering exceptional value
                and engagement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== EXPERIENCE ===== */}
      <section className="experience">
        <div className="section-inner wide">
          <h2 className="afc-h2" style={{ textAlign: "center" }}>
            Educational travel experiences
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
      WHY LUXURY ALUMNI TRAVEL MATTERS
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
                Purpose-Driven Alumni Travel
              </span>

              <h2 className="adg-c-h2 adg-c-h2-light">
                Why Luxury Alumni Travel Matters
              </h2>
              <div class="aac-accent-line aac-accent-white"></div>

              <p className="adg-c-lead adg-c-lead-light">
                Many alumni travelers are seeking more than a vacation.
              </p>

              <p className="adg-c-body adg-c-body-light">
                Luxury alumni travel provides these experiences while creating
                opportunities to reconnect with friends, classmates, faculty
                members, and university leadership.
              </p>

              <p className="adg-c-body adg-c-body-light">
                For universities, these programs strengthen alumni communities
                and support long-term engagement goals.
              </p>
            </div>

            {/* RIGHT — pill grid */}
            <div className="adg-c-why-right">
              <div className="adg-c-why-card">
                <span className="adg-c-why-card-label">
                  Alumni travelers want:
                </span>

                <div className="adg-c-pill-grid">
                  {[
                    "Meaningful experiences",
                    "Cultural immersion",
                    "Educational enrichment",
                    "Intellectual engagement",
                    "Personalized service",
                    "Unique destinations",
                    "Exclusive access",
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
      LUXURY ALUMNI CRUISES
════════════════════════════════════════ */}
      <section className="adg-c-section adg-c-bg-soft" id="adg-complimentary">
        <div className="adg-c-container">
          <div className="adg-c-section-header">
            <h2 className="adg-c-h2">Luxury Alumni Cruises</h2>

            <div className="adg-c-accent-line"></div>

            <p className="Asc-section-intro">
              Cruising remains one of the most popular formats for alumni
              travel.
            </p>
          </div>

          <div className="adg-c-venues-grid1">
            {[
              {
                id: 1,
                eyebrow: "Luxury Ocean Cruises",
                name: "Ocean Cruises",
                highlight:
                  "Luxury ocean cruises allow alumni to explore multiple destinations while enjoying premium accommodations and onboard enrichment programs.",
                items: [
                  "Mediterranean",
                  "Alaska",
                  "Northern Europe",
                  "South Pacific",
                  "Caribbean",
                ],
                callout:
                  "Many programs include guest lecturers, faculty presentations, and destination-focused discussions.",
              },

              {
                id: 2,
                eyebrow: "Alumni River Cruises",
                name: "River Cruises",
                highlight:
                  "River cruises offer a more intimate travel experience and are especially popular among alumni travelers.",
                items: [
                  "Rhine River",
                  "Danube River",
                  "Seine River",
                  "Douro River",
                ],
                callout:
                  "River cruises combine cultural immersion with comfort, making them ideal for educational and alumni travel experiences.",
              },

              {
                id: 3,
                eyebrow: "Alumni Expedition Cruises",
                name: "Expedition Cruises",
                highlight:
                  "Expedition travel is one of the fastest-growing segments of alumni travel.",
                items: [
                  "Antarctica",
                  "Arctic",
                  "Greenland",
                  "Iceland",
                  "Galapagos Islands",
                  "Alaska",
                ],
                callout:
                  "These voyages provide opportunities to learn about wildlife, conservation, exploration, and environmental science while visiting some of the world's most remote destinations.",
              },

              {
                id: 4,
                eyebrow: "Small Ship Alumni Cruises",
                name: "Small Ship Cruises",
                highlight:
                  "Small ship cruises offer a more personalized and immersive travel experience.",
                items: [
                  "Personalized service",
                  "Greater destination access",
                  "Fewer crowds",
                  "Enhanced educational opportunities",
                  "Deeper cultural immersion",
                ],
                callout:
                  "These advantages make small ship cruising particularly attractive for alumni groups seeking meaningful travel experiences.",
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

      {/* BEST DESTINATIONS FOR LUXURY ALUMNI TRAVEL */}
      <section className="azs-experience-section" id="azs-experience">
        <div className="azs-container">
          <div className="azs-section-header">
            <h2 className="azs-section-title">
              Best Destinations for Luxury Alumni Travel
            </h2>

            <div className="azs-section-accent"></div>
          </div>

          <div className="azs-experience-grid">
            {/* EUROPE CARD */}
            <div className="azs-experience-card azs-azamara-exp">
              <div className="azs-exp-image-wrap" style={{ height: "330px" }}>
                <img
                  src={Europe}
                  alt="Europe luxury alumni travel destinations"
                  className="azs-exp-img"
                />

                <div className="azs-exp-image-badge">Europe</div>
              </div>

              <div className="azs-exp-content">
                <div className="azs-exp-header">
                  <Ship size={24} className="azs-exp-icon" />

                  <h3 className="azs-exp-title">Europe</h3>
                </div>

                <div className="azs-exp-body">
                  <p className="azs-exp-highlight">
                    Europe remains one of the most popular destinations for
                    luxury alumni travel.
                  </p>

                  <div className="azs-exp-divider"></div>

                  <div className="azs-exp-group">
                    <h4 className="azs-exp-group-title">Top destinations:</h4>

                    <ul className="azs-exp-list">
                      {["Italy", "France", "Greece", "Spain", "Portugal"].map(
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
                    Ideal for history, art, culture, food, and educational
                    enrichment.
                  </p>
                </div>
              </div>
            </div>

            {/* AFRICA CARD */}
            <div className="azs-experience-card azs-seabourn-exp">
              <div className="azs-exp-image-wrap" style={{ height: "330px" }}>
                <img
                  src={Africa}
                  alt="Africa luxury alumni travel destinations"
                  className="azs-exp-img"
                />

                <div className="azs-exp-image-badge">Africa</div>
              </div>

              <div className="azs-exp-content">
                <div className="azs-exp-header">
                  <Ship size={24} className="azs-exp-icon" />

                  <h3 className="azs-exp-title">Africa</h3>
                </div>

                <div className="azs-exp-body">
                  <p className="azs-exp-highlight">
                    Africa offers unforgettable alumni travel experiences.
                  </p>

                  <div className="azs-exp-divider"></div>

                  <div className="azs-exp-group">
                    <h4 className="azs-exp-group-title">Top destinations:</h4>

                    <ul className="azs-exp-list">
                      {["South Africa", "Kenya", "Tanzania"].map(
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
                    Ideal for safari experiences, conservation education, and
                    cultural immersion.
                  </p>
                </div>
              </div>
            </div>

            {/* ASIA CARD */}
            <div className="azs-experience-card azs-azamara-exp">
              <div className="azs-exp-image-wrap" style={{ height: "330px" }}>
                <img
                  src={Asia}
                  alt="Asia luxury alumni travel destinations"
                  className="azs-exp-img"
                />

                <div className="azs-exp-image-badge">Asia</div>
              </div>

              <div className="azs-exp-content">
                <div className="azs-exp-header">
                  <Ship size={24} className="azs-exp-icon" />

                  <h3 className="azs-exp-title">Asia</h3>
                </div>

                <div className="azs-exp-body">
                  <p className="azs-exp-highlight">
                    Asia offers rich cultural and educational travel
                    opportunities.
                  </p>

                  <div className="azs-exp-divider"></div>

                  <div className="azs-exp-group">
                    <h4 className="azs-exp-group-title">Top destinations:</h4>

                    <ul className="azs-exp-list">
                      {["Japan", "Vietnam", "Thailand", "India"].map(
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
                    Ideal for culture, history, sustainability, and
                    business-focused travel.
                  </p>
                </div>
              </div>
            </div>

            {/* SOUTH AMERICA & POLAR REGIONS */}
            <div className="azs-experience-card azs-seabourn-exp">
              <div className="azs-exp-image-wrap" style={{ height: "330px" }}>
                <img
                  src={SouthAmerica}
                  alt="South America and Polar Regions luxury alumni travel"
                  className="azs-exp-img"
                />

                <div className="azs-exp-image-badge">
                  South America & Polar Regions
                </div>
              </div>

              <div className="azs-exp-content">
                <div className="azs-exp-header">
                  <Ship size={24} className="azs-exp-icon" />

                  <h3 className="azs-exp-title">
                    South America & Polar Regions
                  </h3>
                </div>

                <div className="azs-exp-body">
                  <div className="azs-exp-group">
                    <h4 className="azs-exp-group-title">
                      South America destinations:
                    </h4>

                    <ul className="azs-exp-list">
                      {["Peru", "Ecuador", "Argentina"].map((item, idx) => (
                        <li key={idx} className="azs-exp-list-item">
                          <ArrowRight size={16} className="azs-exp-list-icon" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="azs-exp-divider"></div>

                  <p className="azs-exp-highlight">
                    Ideal for archaeology, environmental exploration, and
                    cultural discovery.
                  </p>

                  <div className="azs-exp-divider"></div>

                  <p className="azs-exp-highlight">
                    Antarctica and the Arctic offer extraordinary expedition
                    experiences for adventurous alumni travelers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LUXURY ALUMNI TRAVEL VS TRADITIONAL ALUMNI TRAVEL */}
      <section
        className="Asc-section Asc-bg-white"
        id="Asc-fleet"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="Asc-container">
          <div className="Asc-section-header">
            <h2 className="Asc-h2">
              Luxury Alumni Travel vs Traditional Alumni Travel
            </h2>

            <div className="Asc-accent-line"></div>

            <p className="Asc-section-intro">
              Luxury alumni travel provides a more immersive, personalized, and
              memorable experience.
            </p>
          </div>

          <div className="Asc-table-wrapper">
            <table className="Asc-fleet-table">
              <thead>
                <tr>
                  <th>Luxury Alumni Travel</th>
                  <th>Traditional Alumni Travel</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Premium Accommodations</td>
                  <td>Standard Accommodations</td>
                </tr>

                <tr>
                  <td>Exclusive Experiences</td>
                  <td>Standard Excursions</td>
                </tr>

                <tr>
                  <td>Personalized Service</td>
                  <td>Group-Based Service</td>
                </tr>

                <tr>
                  <td>Educational Enrichment</td>
                  <td>Basic Sightseeing</td>
                </tr>

                <tr>
                  <td>Small Group Travel</td>
                  <td>Larger Group Travel</td>
                </tr>

                <tr>
                  <td>Curated Itineraries</td>
                  <td>Fixed Programs</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      {/* ── COMMON ALUMNI TRAVEL MISTAKES ───────────────────────────────────────── */}
      <section className="Lfsg-section Lfsg-bg-dark" id="Lfsg-challenges">
        <div className="Lfsg-container">
          <div className="Lfsg-section-header">
            <h2 className="Lfsg-h2-white">Common Alumni Travel Mistakes</h2>

            <div className="Lfsg-accent-line-white" />
          </div>

          <div className="Lfsg-mistakes-grid">
            {[
              {
                title: "Choosing Price Over Value",
                desc: "The lowest-cost program is rarely the most rewarding experience.",
              },

              {
                title: "Ignoring Educational Components",
                desc: "The best alumni travel programs combine exploration with meaningful learning opportunities.",
              },

              {
                title: "Waiting Too Long to Book",
                desc: "Luxury cruises and premium travel experiences often sell out well in advance.",
              },

              {
                title: "Choosing the Wrong Travel Partner",
                desc: "Experience matters. Alumni travel programs require expertise in group travel, luxury travel, educational travel, and alumni engagement.",
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
            <h2 className="Asc-h2">Who Is Luxury Alumni Travel Best For?</h2>
            <div className="Asc-accent-line"></div>
          </div>

          <div className="Asc-who-grid">
            <div className="Asc-who-card Asc-who-yes">
              <h3 className="Asc-who-title">Ideal For</h3>

              <ul className="Asc-who-list">
                {[
                  "University alumni associations",
                  "Lifelong learners",
                  "Donor groups",
                  "Affinity organizations",
                  "Faculty hosted travel programs",
                  "Multi-generational alumni families",
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
                  "Travelers seeking budget-focused vacations may prefer traditional group travel programs rather than luxury experiences.",
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
            alt="Luxury alumni travel experience background"
            className="Asc-help-bg-img"
          />
          <div className="Asc-help-overlay"></div>
        </div>

        <div className="Asc-container">
          <div className="Asc-help-card">
            <div className="Asc-help-content">
              <div className="Asc-help-header">
                <span className="Asc-help-eyebrow">
                  Luxury Alumni Travel Planning
                </span>

                <h2 className="Asc-help-h2">
                  Start Planning Your <br /> Luxury Alumni Travel Experience
                </h2>

                <div className="Asc-help-accent"></div>
              </div>

              <div className="Asc-help-grid">
                <div className="Asc-help-info">
                  <p className="Asc-help-intro">
                    Luxury alumni travel creates opportunities to reconnect,
                    learn, and explore the world alongside fellow graduates and
                    trusted travel experts.
                  </p>

                  <p className="Asc-help-intro">
                    Whether your organization is planning a luxury cruise, river
                    cruise, expedition voyage, safari, or educational travel
                    experience, Trips &amp; Ships Luxury Travel can help create
                    a program that exceeds expectations.
                  </p>

                  <div className="Asc-help-btn-container">
                    <button className="Asc-help-cta-btn">
                      Start Planning Your Experience
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>

                <div className="Asc-help-list-box">
                  <h3 className="Asc-help-list-title">
                    Luxury Alumni Travel Experiences:
                  </h3>

                  <ul className="Asc-help-bullets">
                    {[
                      "Luxury alumni cruises",
                      "Alumni river cruises",
                      "Expedition voyages",
                      "Luxury safaris",
                      "Educational travel experiences",
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
                    planning your next luxury alumni travel experience.
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

export default LuxuryAlumniTravel;
