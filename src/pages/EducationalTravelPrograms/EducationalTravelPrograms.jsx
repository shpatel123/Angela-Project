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
import AboutImage from "../../assets/AboutAngela.jpeg";
import HeroImage1 from "../../assets/FacultyLedTravelPrograms/FacultyLedTravel4.jpg";
import HeroImage2 from "../../assets/FacultyLedTravelPrograms/FacultyLedTravel2.jpg";
import HeroImage3 from "../../assets/FacultyLedTravelPrograms/FacultyLedTravel3.jpg";
import CTAImage from "../../assets/FacultyLedTravelPrograms/StartPlan.jpg";

import Europe from "../../assets/FacultyLedTravelPrograms/Europe.jpg";
import Asia from "../../assets/FacultyLedTravelPrograms/Asia.jpg";
import Africa from "../../assets/FacultyLedTravelPrograms/Africa.jpg";
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

const complimentaryVenues = [
  {
    id: 1,
    eyebrow: "Ocean Voyages",
    name: "Educational Ocean Cruises",
    highlight:
      "Educational cruises have become one of the most popular forms of educational travel.",

    items: [
      "Mediterranean",
      "Northern Europe",
      "Alaska",
      "South Pacific",
      "Caribbean",
    ],

    callout:
      "Educational programming may include guest lecturers, faculty presentations, cultural discussions, and destination briefings.",
  },

  {
    id: 2,
    eyebrow: "River Cruising",
    name: "Educational River Cruises",
    highlight:
      "River cruises offer some of the richest educational experiences available.",

    items: ["Rhine", "Danube", "Seine", "Douro", "Mekong"],

    callout:
      "River cruising allows travelers to engage deeply with local culture, history, architecture, and traditions.",
  },

  {
    id: 3,
    eyebrow: "Expedition Travel",
    name: "Educational Expedition Cruises",
    highlight:
      "Expedition travel is increasingly popular among educational travelers.",

    items: [
      "Antarctica",
      "Arctic",
      "Galapagos Islands",
      "Iceland",
      "Greenland",
      "Alaska",
    ],

    callout:
      "These voyages provide extraordinary opportunities to learn about wildlife, conservation, geology, climate science, and exploration.",
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
        "Luxury travel agency specializing in educational travel programs, alumni travel, educational cruises, expedition cruises, river cruises, and premium travel experiences.",
    },

    {
      "@type": "TravelAgency",
      "@id": "https://www.tripsandships.com/#travelagency",
      name: "Trips & Ships Luxury Travel",
      url: "https://www.tripsandships.com",
      description:
        "Educational travel and luxury travel experts helping universities, alumni associations, affinity groups, and lifelong learners explore the world.",
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
        "CEO of Trips & Ships Luxury Travel, Founder of Luxury Travel University, Travel Leaders Network Advisory Board Member, global luxury travel speaker and trainer, weekly industry columnist, and travel expert with over 40 years of experience and travel to more than 121 countries.",
    },

    {
      "@type": "WebPage",
      "@id": "https://www.tripsandships.com/educational-travel-programs",
      url: "https://www.tripsandships.com/educational-travel-programs",
      name: "Educational Travel Programs",
      description:
        "Educational travel programs, educational cruises, cultural immersion experiences, educational expedition travel, and luxury educational travel planning.",
    },

    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.tripsandships.com/educational-travel-programs#breadcrumb",
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
          name: "Educational Travel Programs",
          item: "https://www.tripsandships.com/educational-travel-programs",
        },
      ],
    },

    {
      "@type": "FAQPage",
      "@id": "https://www.tripsandships.com/educational-travel-programs#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is educational travel?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Educational travel is travel designed to provide learning experiences through cultural immersion, historical exploration, expert-led discussions, and destination-focused activities.",
          },
        },

        {
          "@type": "Question",
          name: "What are the benefits of educational travel?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Educational travel helps develop cultural awareness, global perspectives, intellectual curiosity, and deeper understanding through firsthand experiences.",
          },
        },

        {
          "@type": "Question",
          name: "What companies specialize in educational travel?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Trips & Ships Luxury Travel specializes in educational travel programs, educational cruises, alumni travel, expedition travel, and luxury educational experiences.",
          },
        },

        {
          "@type": "Question",
          name: "What are the best educational travel destinations?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Popular destinations include Italy, France, Greece, Japan, Kenya, South Africa, Peru, Antarctica, Alaska, and the Galapagos Islands.",
          },
        },

        {
          "@type": "Question",
          name: "Are educational cruises worth it?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Educational cruises combine expert lectures, immersive shore excursions, cultural enrichment, and destination-focused learning experiences.",
          },
        },

        {
          "@type": "Question",
          name: "Who participates in educational travel programs?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Universities, alumni associations, lifelong learners, affinity groups, donor groups, and professional organizations frequently participate in educational travel.",
          },
        },

        {
          "@type": "Question",
          name: "What is the difference between educational travel and tourism?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Educational travel focuses on learning and enrichment, while tourism primarily emphasizes leisure and recreation.",
          },
        },

        {
          "@type": "Question",
          name: "Are educational travel programs only for students?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Many educational travel programs are designed for adults, alumni, retirees, and lifelong learners.",
          },
        },

        {
          "@type": "Question",
          name: "Why are educational cruises becoming more popular?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Educational cruises provide structured learning opportunities while allowing travelers to explore multiple destinations.",
          },
        },

        {
          "@type": "Question",
          name: "What are educational expedition cruises?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Educational expedition cruises combine exploration and learning, often focusing on wildlife, conservation, climate science, and history.",
          },
        },

        {
          "@type": "Question",
          name: "Why are river cruises popular for educational travel?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "River cruises provide immersive access to historic cities, cultural landmarks, and local communities.",
          },
        },

        {
          "@type": "Question",
          name: "What should travelers look for in an educational travel company?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Travelers should seek destination expertise, educational programming, travel planning experience, and strong supplier relationships.",
          },
        },

        {
          "@type": "Question",
          name: "Can educational travel strengthen alumni engagement?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Educational travel helps alumni reconnect with faculty, fellow graduates, and their institution through lifelong learning experiences.",
          },
        },

        {
          "@type": "Question",
          name: "Why choose Trips & Ships Luxury Travel for educational travel?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Trips & Ships Luxury Travel combines educational travel expertise, luxury travel planning, and personalized service to create transformative travel experiences.",
          },
        },

        {
          "@type": "Question",
          name: "Why work with Angela Hughes?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Angela Hughes brings over 40 years of travel industry expertise, experience in more than 121 countries, and recognized leadership in luxury and educational travel.",
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
      q: "What is educational travel?",
      a: "Educational travel is travel designed to provide learning experiences through cultural immersion, historical exploration, expert-led discussions, and destination-focused activities that expand knowledge and understanding.",
    },

    {
      q: "What are the benefits of educational travel?",
      a: "Educational travel helps travelers develop cultural awareness, global perspectives, intellectual curiosity, critical thinking skills, and a deeper understanding of the world through firsthand experiences.",
    },

    {
      q: "What companies specialize in educational travel?",
      a: "Trips & Ships Luxury Travel specializes in educational travel programs, educational cruises, alumni travel, faculty-hosted journeys, expedition travel, and luxury educational experiences worldwide.",
    },

    {
      q: "What are the best educational travel destinations?",
      a: "Popular educational travel destinations include Italy, France, Greece, Japan, Kenya, South Africa, Peru, Antarctica, Alaska, and the Galapagos Islands.",
    },

    {
      q: "Are educational cruises worth it?",
      a: "Yes. Educational cruises combine expert lectures, immersive shore excursions, cultural enrichment, and destination-focused learning, making them one of the most rewarding travel experiences available.",
    },

    {
      q: "Who participates in educational travel programs?",
      a: "Educational travel programs are popular with universities, alumni associations, lifelong learners, affinity groups, donor groups, professional organizations, and intellectually curious travelers.",
    },

    {
      q: "What is the difference between educational travel and tourism?",
      a: "Educational travel prioritizes learning, cultural immersion, and intellectual enrichment, while traditional tourism focuses primarily on leisure and recreation.",
    },

    {
      q: "Are educational travel programs only for students?",
      a: "No. Many educational travel programs are designed specifically for adults, alumni, retirees, lifelong learners, and affinity groups seeking enriching travel experiences.",
    },

    {
      q: "Why are educational cruises becoming more popular?",
      a: "Educational cruises provide structured learning opportunities while allowing travelers to explore multiple destinations in comfort and convenience.",
    },

    {
      q: "What are educational expedition cruises?",
      a: "Educational expedition cruises combine exploration with learning and often focus on wildlife, conservation, climate science, history, and remote destinations such as Antarctica and the Arctic.",
    },

    {
      q: "Why are river cruises popular for educational travel?",
      a: "River cruises provide direct access to historic cities, cultural landmarks, and local communities while offering a more immersive and educational travel experience.",
    },

    {
      q: "What should travelers look for in an educational travel company?",
      a: "Travelers should seek destination expertise, educational programming, strong supplier relationships, travel planning experience, and a proven record of successful educational journeys.",
    },

    {
      q: "Can educational travel strengthen alumni engagement?",
      a: "Yes. Educational travel creates meaningful opportunities for alumni to reconnect with faculty, fellow graduates, and their institution while participating in lifelong learning experiences.",
    },

    {
      q: "Why choose Trips & Ships Luxury Travel for educational travel?",
      a: "Trips & Ships Luxury Travel combines luxury travel planning expertise, educational travel experience, global destination knowledge, and personalized service to create transformative travel experiences.",
    },

    {
      q: "Why work with Angela Hughes?",
      a: "Angela Hughes brings more than 40 years of travel industry expertise, firsthand experience in over 121 countries, global recognition as a luxury travel authority, and extensive knowledge of educational, expedition, river cruise, safari, and premium travel experiences.",
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
const EducationalTravelPrograms = () => {
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
          Educational Travel Programs | Luxury Educational Travel Experts
        </title>
        <meta
          name="title"
          content="Educational Travel Programs | Educational Travel Planning | Trips & Ships Luxury Travel"
        />
        <meta
          name="description"
          content="Explore educational travel programs designed for universities, alumni associations, lifelong learners, and affinity groups. Discover educational cruises, cultural immersion experiences, and luxury educational travel worldwide."
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
          <h1>Educational Travel Programs</h1>

          <p>Travel That Educates, Inspires, and Transforms</p>

          <p>
            The best educational experiences rarely happen inside four walls.
          </p>

          {/* READ MORE CONTENT */}
          {readMore && (
            <>
              <p>
                Educational travel programs allow travelers to engage directly
                with history, culture, science, conservation, art, architecture,
                business, and global communities in ways that textbooks and
                lectures alone cannot provide.
              </p>

              <p>
                Whether exploring ancient ruins in Greece, cruising the Rhine
                River through Europe’s cultural heartland, visiting wildlife
                reserves in Africa, or sailing to Antarctica aboard an
                expedition vessel, educational travel transforms information
                into lived experience.
              </p>

              <p>
                At Trips &amp; Ships Luxury Travel, we help universities, alumni
                associations, affinity groups, lifelong learning organizations,
                and curious travelers design meaningful educational journeys
                that combine intellectual enrichment with exceptional travel
                experiences.
              </p>

              <p>
                Led by Angela Hughes, CEO of Trips &amp; Ships Luxury Travel,
                our team brings more than four decades of travel industry
                expertise and firsthand destination knowledge from over 121
                countries worldwide.
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
    WHAT IS EDUCATIONAL TRAVEL?
════════════════════════════════════════ */}
      <section className="adg-c-section adg-c-bg-dark" id="adg-why-dining">
        <div className="adg-c-container">
          <div className="adg-c-why-grid">
            {/* LEFT — text */}
            <div className="adg-c-why-left">
              <span className="adg-c-eyebrow adg-c-eyebrow-light">
                Educational Travel Experiences
              </span>

              <h2 className="adg-c-h2 adg-c-h2-light">
                What Is Educational Travel?
              </h2>

              <div className="adg-c-accent-line adg-c-accent-light"></div>

              <p className="adg-c-lead adg-c-lead-light">
                Educational travel is travel designed with learning as a primary
                objective.
              </p>

              <p className="adg-c-body adg-c-body-light">
                Unlike traditional tourism, educational travel focuses on
                meaningful engagement with destinations, cultures, experts, and
                experiences that provide personal growth and intellectual
                enrichment.
              </p>

              <br />

              <p className="adg-c-body adg-c-body-light">
                Participants return home not only with memories but with a
                deeper understanding of the world around them.
              </p>
            </div>

            {/* RIGHT — pill grid */}
            <div className="adg-c-why-right">
              <div className="adg-c-why-card">
                <span className="adg-c-why-card-label">
                  Educational travel programs may include:
                </span>

                <div className="adg-c-pill-grid">
                  {[
                    "Cultural immersion experiences",
                    "Educational cruises",
                    "Faculty hosted journeys",
                    "Historical tours",
                    "Wildlife and conservation expeditions",
                    "Archaeological exploration",
                    "Lifelong learning programs",
                    "Alumni travel experiences",
                    "University educational travel programs",
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
              Lifelong Learning Travel
            </span>

            <h2 className="Avr-planning-title">
              Educational Travel for Alumni and Lifelong Learners
            </h2>

            <div className="Avr-planning-divider"></div>
          </div>

          {/* TWO-PANEL GRID */}
          <div className="Avr-planning-grid">
            {/* LEFT PANEL */}
            <div className="Avr-planning-left">
              <div className="Avr-planning-left-deco">&ldquo;</div>

              <h3 className="Avr-planning-left-title">
                Educational Travel Is No Longer Limited to Students
              </h3>

              <p className="Avr-planning-left-body">
                Many of the most successful educational travel programs today
                are designed specifically for alumni and lifelong learners.
              </p>

              <div className="Avr-planning-alert">
                <ShieldCheck size={18} className="Avr-planning-alert-icon" />

                <p className="Avr-planning-alert-text">
                  These travelers are often motivated by curiosity, intellectual
                  engagement, and personal enrichment rather than traditional
                  sightseeing.
                </p>
              </div>
            </div>

            {/* RIGHT PANEL */}
            <div className="Avr-planning-right">
              <p className="Avr-planning-right-intro">
                Popular educational travel experiences include:
              </p>

              <div className="Avr-planning-benefits-grid">
                {[
                  {
                    icon: <Ship size={18} />,
                    label: "Alumni cruises",
                  },

                  {
                    icon: <MapPin size={18} />,
                    label: "Educational river cruises",
                  },

                  {
                    icon: <Star size={18} />,
                    label: "Educational expedition cruises",
                  },

                  {
                    icon: <Users size={18} />,
                    label: "Faculty hosted travel programs",
                  },

                  {
                    icon: <Award size={18} />,
                    label: "Cultural immersion journeys",
                  },

                  {
                    icon: <ShieldCheck size={18} />,
                    label: "Historical explorations",
                  },

                  {
                    icon: <Globe size={18} />,
                    label: "Multi-generational educational travel",
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
                These experiences help alumni remain connected to their
                institutions while continuing their educational journey.
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
      WHY EDUCATIONAL TRAVEL MATTERS MORE THAN EVER
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
                Purpose-Driven Travel
              </span>

              <h2 className="adg-c-h2 adg-c-h2-light">
                Why Educational Travel Matters More Than Ever
              </h2>

              <div className="adg-c-accent-line adg-c-accent-light"></div>

              <p className="adg-c-lead adg-c-lead-light">
                Today's travelers increasingly seek purpose-driven experiences.
              </p>

              <p className="adg-c-body adg-c-body-light">
                Educational travel fulfills these goals while creating memorable
                experiences that remain valuable long after the journey ends.
              </p>

              <p className="adg-c-body adg-c-body-light">
                For universities and organizations, educational travel also
                strengthens community engagement, alumni participation, donor
                relationships, and lifelong learning initiatives.
              </p>
            </div>

            {/* RIGHT — pill grid */}
            <div className="adg-c-why-right">
              <div className="adg-c-why-card">
                <span className="adg-c-why-card-label">
                  Today's travelers want to:
                </span>

                <div className="adg-c-pill-grid">
                  {[
                    "Learn while traveling",
                    "Connect with local cultures",
                    "Explore meaningful destinations",
                    "Understand global issues",
                    "Expand personal knowledge",
                    "Engage with experts",
                    "Experience authentic cultural immersion",
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
      EDUCATIONAL CRUISES: LEARNING AT SEA
════════════════════════════════════════ */}
      <section className="adg-c-section adg-c-bg-soft" id="adg-complimentary">
        <div className="adg-c-container">
          <div className="adg-c-section-header">
            <h2 className="adg-c-h2">Educational Cruises: Learning at Sea</h2>
            <div className="adg-c-accent-line"></div>
            <p className="Asc-section-intro">
              Educational cruises have become one of the most popular forms of
              educational travel.
            </p>
            <p className="Asc-section-intro">
              Cruises provide a unique environment where travelers can combine
              expert lectures, <br /> destination-focused learning, and
              immersive shore experiences.
            </p>
          </div>

          <div className="adg-c-venues-grid">
            {complimentaryVenues.map((venue, i) => (
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

      {/* BEST EDUCATIONAL TRAVEL DESTINATIONS */}
      <section className="azs-experience-section" id="azs-experience">
        <div className="azs-container">
          <div className="azs-section-header">
            <h2 className="azs-section-title">
              Best Educational Travel Destinations
            </h2>

            <div className="azs-section-accent"></div>
          </div>

          <div className="azs-experience-grid">
            {/* EUROPE CARD */}
            <div className="azs-experience-card azs-azamara-exp">
              <div className="azs-exp-image-wrap" style={{ height: "330px" }}>
                <img
                  src={Europe}
                  alt="Europe educational travel destinations"
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
                    Europe remains one of the most popular educational travel
                    destinations.
                  </p>

                  <div className="azs-exp-divider"></div>

                  <div className="azs-exp-group">
                    <h4 className="azs-exp-group-title">
                      Top destinations include:
                    </h4>

                    <ul className="azs-exp-list">
                      {[
                        "Italy",
                        "France",
                        "Greece",
                        "Spain",
                        "United Kingdom",
                      ].map((item, idx) => (
                        <li key={idx} className="azs-exp-list-item">
                          <ArrowRight size={16} className="azs-exp-list-icon" />

                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="azs-exp-divider"></div>

                  <div className="azs-exp-group">
                    <h4 className="azs-exp-group-title">Ideal for:</h4>

                    <ul className="azs-exp-list">
                      {[
                        "Art history",
                        "Architecture",
                        "Political science",
                        "International relations",
                        "Cultural studies",
                      ].map((item, idx) => (
                        <li key={idx} className="azs-exp-list-item">
                          <Check size={16} className="azs-exp-list-icon" />

                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* ASIA CARD */}
            <div className="azs-experience-card azs-seabourn-exp">
              <div className="azs-exp-image-wrap" style={{ height: "330px" }}>
                <img
                  src={Asia}
                  alt="Asia educational travel destinations"
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
                    Asia offers exceptional educational opportunities.
                  </p>

                  <div className="azs-exp-divider"></div>

                  <div className="azs-exp-group">
                    <h4 className="azs-exp-group-title">
                      Popular destinations include:
                    </h4>

                    <ul className="azs-exp-list">
                      {[
                        "Japan",
                        "Singapore",
                        "Vietnam",
                        "India",
                        "Thailand",
                      ].map((item, idx) => (
                        <li key={idx} className="azs-exp-list-item">
                          <ArrowRight size={16} className="azs-exp-list-icon" />

                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="azs-exp-divider"></div>

                  <div className="azs-exp-group">
                    <h4 className="azs-exp-group-title">Ideal for:</h4>

                    <ul className="azs-exp-list">
                      {[
                        "Technology",
                        "Sustainability",
                        "Business",
                        "Cultural immersion",
                      ].map((item, idx) => (
                        <li key={idx} className="azs-exp-list-item">
                          <Check size={16} className="azs-exp-list-icon" />

                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* AFRICA CARD */}
            <div className="azs-experience-card azs-azamara-exp">
              <div className="azs-exp-image-wrap" style={{ height: "330px" }}>
                <img
                  src={Africa}
                  alt="Africa educational travel destinations"
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
                    Africa provides meaningful experiential learning
                    opportunities.
                  </p>

                  <div className="azs-exp-divider"></div>

                  <div className="azs-exp-group">
                    <h4 className="azs-exp-group-title">
                      Popular destinations include:
                    </h4>

                    <ul className="azs-exp-list">
                      {["Kenya", "Tanzania", "South Africa", "Egypt"].map(
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

                  <div className="azs-exp-group">
                    <h4 className="azs-exp-group-title">Ideal for:</h4>

                    <ul className="azs-exp-list">
                      {[
                        "Conservation",
                        "Anthropology",
                        "Wildlife studies",
                        "Sustainable development",
                      ].map((item, idx) => (
                        <li key={idx} className="azs-exp-list-item">
                          <Check size={16} className="azs-exp-list-icon" />

                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* SOUTH AMERICA & POLAR CARD */}
            <div className="azs-experience-card azs-seabourn-exp">
              <div className="azs-exp-image-wrap" style={{ height: "330px" }}>
                <img
                  src={SouthAmerica}
                  alt="South America and Polar educational travel"
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
                      Popular destinations include:
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

                  <div className="azs-exp-group">
                    <h4 className="azs-exp-group-title">Ideal for:</h4>

                    <ul className="azs-exp-list">
                      {[
                        "Archaeology",
                        "Environmental science",
                        "Cultural immersion",
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
                    Antarctica and the Arctic provide unique opportunities to
                    study climate science, wildlife, and exploration.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EDUCATIONAL TRAVEL VS TRADITIONAL TOURISM */}
      <section
        className="Asc-section Asc-bg-white"
        id="Asc-fleet"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="Asc-container">
          <div className="Asc-section-header">
            <h2 className="Asc-h2">
              Educational Travel vs Traditional Tourism
            </h2>

            <div className="Asc-accent-line"></div>

            <p className="Asc-section-intro">
              Educational travel creates deeper, more meaningful connections
              with destinations and cultures.
            </p>
          </div>

          <div className="Asc-table-wrapper">
            <table className="Asc-fleet-table">
              <thead>
                <tr>
                  <th>Educational Travel</th>
                  <th>Traditional Tourism</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Learning Focus</td>
                  <td>Leisure Focus</td>
                </tr>

                <tr>
                  <td>Expert-Led Experiences</td>
                  <td>General Sightseeing</td>
                </tr>

                <tr>
                  <td>Cultural Immersion</td>
                  <td>Tourist Attractions</td>
                </tr>

                <tr>
                  <td>Intellectual Engagement</td>
                  <td>Entertainment</td>
                </tr>

                <tr>
                  <td>Educational Outcomes</td>
                  <td>Vacation Experiences</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      {/* ── COMMON EDUCATIONAL TRAVEL MISTAKES ───────────────────────────────────────── */}
      <section className="Lfsg-section Lfsg-bg-dark" id="Lfsg-challenges">
        <div className="Lfsg-container">
          <div className="Lfsg-section-header">
            <h2 className="Lfsg-h2-white">
              Common Educational Travel Mistakes
            </h2>

            <div className="Lfsg-accent-line-white" />
          </div>

          <div className="Lfsg-mistakes-grid">
            {[
              {
                title: "Focusing Only on Sightseeing",
                desc: "True educational travel goes beyond visiting attractions. It requires meaningful engagement and context.",
              },

              {
                title: "Choosing the Wrong Destination",
                desc: "The best destination should support the educational goals of the group.",
              },

              {
                title: "Ignoring Expert Guidance",
                desc: "Experienced guides, lecturers, and travel advisors significantly enhance the learning experience.",
              },

              {
                title: "Waiting Too Long to Plan",
                desc: "Educational travel programs often require 12 to 18 months of planning.",
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
            <h2 className="Asc-h2">Who Is Educational Travel Best For?</h2>
            <div className="Asc-accent-line"></div>
          </div>

          <div className="Asc-who-grid">
            <div className="Asc-who-card Asc-who-yes">
              <h3 className="Asc-who-title">Ideal For</h3>

              <ul className="Asc-who-list">
                {[
                  "Universities",
                  "Alumni associations",
                  "Lifelong learners",
                  "Professional organizations",
                  "Affinity groups",
                  "Faculty leaders",
                  "Donor groups",
                  "Multi-generational families",
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
                  "Travelers seeking purely recreational vacations",
                  "Guests with little interest in learning experiences",
                  "Travelers preferring traditional leisure tourism",
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
              Educational Travel Specialists
            </span>

            <h2 className="Adg-expert-title">
              Why Trips &amp; Ships Luxury Travel
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
                  alt="Angela Hughes – Educational Travel Expert"
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
                  "Trips &amp; Ships Luxury Travel combines educational
                  expertise with luxury travel planning experience."
                </blockquote>
              </div>

              {/* SERVICES */}
              <div className="Adg-expert-credentials-box">
                <h4 className="Adg-expert-credentials-title">
                  <Award size={16} />
                  We Help Clients Create
                </h4>

                <div className="Adg-expert-credentials-grid">
                  {[
                    "Educational travel programs",
                    "Educational cruises",
                    "Educational river cruises",
                    "Educational expedition cruises",
                    "Alumni travel experiences",
                    "Faculty hosted journeys",
                    "Small ship educational travel",
                    "Luxury educational travel programs",
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

                <div className="Adg-expert-credentials-grid">
                  {[
                    "CEO of Trips & Ships Luxury Travel",
                    "Founder of Luxury Travel University",
                    "Over 40 years in the travel industry",
                    "Traveled to more than 121 countries",
                    "Global luxury travel speaker and trainer",
                    "Weekly travel industry columnist",
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
                  Her firsthand destination expertise helps educational
                  travelers experience the world in meaningful and
                  transformative ways.
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
            alt="Educational travel program background"
            className="Asc-help-bg-img"
          />
          <div className="Asc-help-overlay"></div>
        </div>

        <div className="Asc-container">
          <div className="Asc-help-card">
            <div className="Asc-help-content">
              <div className="Asc-help-header">
                <span className="Asc-help-eyebrow">
                  Educational Travel Planning
                </span>

                <h2 className="Asc-help-h2">
                  Start Planning Your <br /> Educational Travel Program
                </h2>

                <div className="Asc-help-accent"></div>
              </div>

              <div className="Asc-help-grid">
                <div className="Asc-help-info">
                  <p className="Asc-help-intro">
                    Educational travel has the power to inspire curiosity,
                    strengthen communities, and create lifelong memories.
                  </p>

                  <p className="Asc-help-intro">
                    Whether you are planning a university travel program, alumni
                    journey, educational cruise, expedition voyage, or lifelong
                    learning experience, Trips &amp; Ships Luxury Travel can
                    help you create an unforgettable journey that combines
                    discovery, enrichment, and exceptional travel experiences.
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
                    Educational Travel Experiences:
                  </h3>

                  <ul className="Asc-help-bullets">
                    {[
                      "University travel programs",
                      "Alumni travel journeys",
                      "Educational cruises",
                      "Expedition voyages",
                      "Lifelong learning experiences",
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
                    planning your next educational travel program.
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

export default EducationalTravelPrograms;
