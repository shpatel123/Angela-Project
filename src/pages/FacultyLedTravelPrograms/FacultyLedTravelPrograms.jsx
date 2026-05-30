import { useState, useEffect, useRef } from "react";
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
  GraduationCap,
  Building2,
} from "lucide-react";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/image.webp";
import HeroImage1 from "../../assets/FacultyLedTravelPrograms/FacultyLedTravel.jpg";
import HeroImage2 from "../../assets/FacultyLedTravelPrograms/FacultyLedTravel2.jpg";
import HeroImage3 from "../../assets/FacultyLedTravelPrograms/FacultyLedTravel3.jpg";
import CTAImage from "../../assets/FacultyLedTravelPrograms/Start_Planning.jpg";
import OverviewImage from "../../assets/FacultyLedTravelPrograms/Educational_Travel_Experiences.jpg";

import StudentBenifits from "../../assets/FacultyLedTravelPrograms/Student_Educational_Benefits.jpg";
import AlumniBenifits from "../../assets/FacultyLedTravelPrograms/Alumni_Travel_Benefits.jpg";
import InstitutionalBenifits from "../../assets/FacultyLedTravelPrograms/Institutional_Benefits.jpg";

import Europe from "../../assets/FacultyLedTravelPrograms/Europe.jpg";
import Asia from "../../assets/FacultyLedTravelPrograms/Asia.jpeg";
import Africa from "../../assets/FacultyLedTravelPrograms/Africa.jpg";
import SouthAmerica from "../../assets/FacultyLedTravelPrograms/South_America.jpg";

import { Helmet } from "react-helmet-async";

const diningData = [
  {
    key: "students",
    eyebrow: "For Students",
    title: "Student Educational Benefits",
    image: StudentBenifits,
    imageAlt: "Students participating in educational travel",
    accent: "adg-accent-gold",
    icon: <GraduationCap size={16} />,
    items: [
      "Global perspective",
      "Cultural awareness",
      "Leadership development",
      "Real-world learning",
      "Career readiness",
      "Academic engagement",
    ],
  },

  {
    key: "alumni",
    eyebrow: "For Alumni",
    title: "Alumni Travel Benefits",
    image: AlumniBenifits,
    imageAlt: "Alumni educational travel experiences",
    accent: "adg-accent-blue",
    icon: <Users size={16} />,
    items: [
      "Lifelong learning",
      "Intellectual enrichment",
      "Alumni networking",
      "Continued university engagement",
      "Educational exploration",
    ],
  },

  {
    key: "universities",
    eyebrow: "For Universities",
    title: "Institutional Benefits",
    image: InstitutionalBenifits,
    imageAlt: "University educational travel programs",
    accent: "adg-accent-green",
    icon: <Building2 size={16} />,
    items: [
      "Strengthen alumni relationships",
      "Support donor engagement",
      "Improve student recruitment",
      "Enhance institutional reputation",
      "Expand educational offerings",
    ],
  },
];

const aacMonths = [
  {
    name: "18 Months Before Departure",
    peak: false,
    highlights: ["Establish goals", "Select destinations", "Secure approvals"],
  },

  {
    name: "12 Months Before Departure",
    peak: false,
    highlights: ["Confirm suppliers", "Build itineraries", "Launch marketing"],
  },

  {
    name: "9 Months Before Departure",
    peak: true,
    highlights: ["Open registration", "Promote the program"],
  },

  {
    name: "6 Months Before Departure",
    peak: false,
    highlights: ["Confirm logistics", "Manage documentation"],
  },

  {
    name: "90 Days Before Departure",
    peak: false,
    highlights: ["Final payments", "Safety briefings", "Emergency planning"],
  },
];

const diningOverview = [
  {
    icon: <Check size={18} />,
    label: "Study abroad experiences",
  },

  {
    icon: <Check size={18} />,
    label: "Educational tours",
  },

  {
    icon: <Check size={18} />,
    label: "Research travel",
  },

  {
    icon: <Check size={18} />,
    label: "Cultural immersion programs",
  },

  {
    icon: <Check size={18} />,
    label: "Academic conferences",
  },

  {
    icon: <Check size={18} />,
    label: "Leadership development experiences",
  },

  {
    icon: <Check size={18} />,
    label: "Faculty hosted alumni travel",
  },

  {
    icon: <Check size={18} />,
    label: "Educational cruises",
  },

  {
    icon: <Check size={18} />,
    label: "Expedition travel programs",
  },
];

const complimentaryVenues = [
  {
    id: 1,
    eyebrow: "Ocean Cruises",
    name: "Faculty Hosted Ocean Cruises",
    highlight:
      "Educational ocean cruises combine lectures, destination-focused learning, and immersive shore excursions.",
    items: [
      "Mediterranean",
      "Alaska",
      "Northern Europe",
      "South Pacific",
      "Caribbean",
    ],
    callout:
      "Ocean cruises provide a comfortable and immersive platform for faculty led educational travel experiences.",
  },

  {
    id: 2,
    eyebrow: "River Cruises",
    name: "Educational River Cruises",
    highlight:
      "River cruises are ideal for educational travelers seeking cultural immersion and easy access to historic cities.",
    items: ["Rhine River", "Danube River", "Seine River", "Douro River"],
    callout:
      "River cruises allow travelers to experience multiple destinations with exceptional convenience and enrichment.",
  },

  {
    id: 3,
    eyebrow: "Expedition Cruises",
    name: "Expedition Educational Travel",
    highlight:
      "Expedition travel has become increasingly popular among universities and alumni associations.",
    items: [
      "Antarctica",
      "Arctic",
      "Galapagos Islands",
      "Greenland",
      "Iceland",
      "Alaska",
    ],
    callout:
      "These voyages provide extraordinary opportunities for learning in science, conservation, history, and environmental studies.",
  },
];

/* ── aac: IntersectionObserver Hook ─────────────────────────────── */
function useAacInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return [ref, inView];
}

/* ── Faculty Led Travel Planning Timeline ─────────────────────────────────── */
function AacTimingSection() {
  const [active, setActive] = useState(2);
  const [ref, inView] = useAacInView();

  return (
    <section className="aac-section aac-section-timing" ref={ref}>
      <div className="aac-container">
        <div className="aac-section-header aac-centered">
          <h2 className="aac-h2">Faculty Led Travel Planning Timeline</h2>

          <div className="aac-accent-line" />
        </div>

        <div className="aac-month-tabs">
          {aacMonths.map((m, i) => (
            <button
              key={i}
              className={`aac-month-tab${
                active === i ? " aac-month-tab-active" : ""
              }${m.peak ? " aac-month-tab-peak" : ""}`}
              onClick={() => setActive(i)}
            >
              {m.name}

              {m.peak && <span className="aac-peak-badge">Important</span>}
            </button>
          ))}
        </div>

        <div className="aac-month-detail">
          {aacMonths[active].highlights.map((h, i) => (
            <div key={i} className="aac-month-highlight">
              <span className="aac-month-dot" />
              {h}
            </div>
          ))}
        </div>

        <div
          className={`aac-months-full-grids${inView ? " aac-animate-in" : ""}`}
        >
          {aacMonths.map((m, i) => (
            <div
              key={i}
              className={`aac-month-card${
                m.peak ? " aac-month-card-peak" : ""
              }`}
              style={{ animationDelay: `${i * 0.07}s` }}
            >
              <div className="aac-month-card-top">
                <span className="aac-month-name">{m.name}</span>

                {m.peak && <span className="aac-peak-pill">Key Stage</span>}
              </div>

              <ul className="aac-month-list">
                {m.highlights.map((h, j) => (
                  <li key={j} className="aac-month-li">
                    <span className="aac-li-dot" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

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
        "Luxury travel agency specializing in educational travel, faculty led travel programs, alumni travel, donor travel programs, luxury cruises, expedition cruises, river cruises, and university travel planning.",
    },

    {
      "@type": "TravelAgency",
      "@id": "https://www.tripsandships.com/#travelagency",
      name: "Trips & Ships Luxury Travel",
      url: "https://www.tripsandships.com",
      description:
        "Educational travel planning experts helping universities, alumni associations, and faculty leaders create exceptional travel experiences.",
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
        "CEO of Trips & Ships Luxury Travel, Founder of Luxury Travel University, global luxury travel speaker and trainer, Travel Leaders Network Advisory Board member, and travel industry expert with more than 40 years of experience and travel to over 121 countries.",
    },

    {
      "@type": "WebPage",
      "@id": "https://www.tripsandships.com/faculty-led-travel-programs",
      url: "https://www.tripsandships.com/faculty-led-travel-programs",
      name: "Faculty Led Travel Programs",
      description:
        "Expert faculty led travel programs, educational travel planning, alumni travel experiences, educational cruises, and university group travel services.",
    },

    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.tripsandships.com/faculty-led-travel-programs#breadcrumb",
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
          name: "Faculty Led Travel Programs",
          item: "https://www.tripsandships.com/faculty-led-travel-programs",
        },
      ],
    },

    {
      "@type": "FAQPage",
      "@id": "https://www.tripsandships.com/faculty-led-travel-programs#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is a faculty led travel program?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A faculty led travel program is an educational travel experience designed and hosted by a professor, instructor, researcher, or academic expert.",
          },
        },

        {
          "@type": "Question",
          name: "How do universities organize faculty led travel?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Universities often partner with experienced travel providers to manage logistics, accommodations, transportation, risk management, and educational travel planning.",
          },
        },

        {
          "@type": "Question",
          name: "What travel company works with universities?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Trips & Ships Luxury Travel specializes in educational travel, faculty led travel programs, alumni travel, educational cruises, and university travel planning.",
          },
        },

        {
          "@type": "Question",
          name: "How much do faculty led travel programs cost?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Costs vary depending on destination, duration, accommodations, transportation, and included educational experiences.",
          },
        },

        {
          "@type": "Question",
          name: "What destinations work best for faculty led travel?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Popular destinations include Italy, France, Greece, Spain, Japan, Kenya, South Africa, Peru, Antarctica, and Alaska.",
          },
        },

        {
          "@type": "Question",
          name: "Are faculty led travel programs safe?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "When professionally managed with risk mitigation strategies and travel support, faculty led travel programs can be safe and rewarding educational experiences.",
          },
        },

        {
          "@type": "Question",
          name: "Can alumni participate in faculty led travel programs?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Many universities offer faculty hosted educational travel experiences designed specifically for alumni and lifelong learners.",
          },
        },

        {
          "@type": "Question",
          name: "Are faculty led cruises educational?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Faculty led cruises often include lectures, expert discussions, destination briefings, and immersive educational experiences.",
          },
        },

        {
          "@type": "Question",
          name: "Why are small ship cruises popular for educational travel?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Small ship cruises provide deeper destination access, fewer crowds, and greater educational engagement opportunities.",
          },
        },

        {
          "@type": "Question",
          name: "What is the difference between educational travel and tourism?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Educational travel emphasizes learning and enrichment, while tourism focuses primarily on leisure and recreation.",
          },
        },

        {
          "@type": "Question",
          name: "Why are expedition cruises becoming popular with universities?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Expedition cruises provide exceptional opportunities to study wildlife, conservation, climate science, and exploration.",
          },
        },

        {
          "@type": "Question",
          name: "Can faculty led travel improve alumni engagement?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Educational travel creates meaningful opportunities for alumni to reconnect with faculty, fellow graduates, and their institution.",
          },
        },

        {
          "@type": "Question",
          name: "What makes a successful faculty led travel program?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Strong academic leadership, meaningful educational content, effective logistics, and professional travel support contribute to success.",
          },
        },

        {
          "@type": "Question",
          name: "What should universities look for in a travel partner?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Universities should seek expertise in educational travel, risk management, destination knowledge, and travel logistics.",
          },
        },

        {
          "@type": "Question",
          name: "Why choose Trips & Ships Luxury Travel?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Trips & Ships Luxury Travel combines educational travel expertise, luxury travel planning, and university travel support to create exceptional experiences.",
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
      q: "What is a faculty led travel program?",
      a: "A faculty led travel program is an educational travel experience designed and hosted by a professor, instructor, researcher, or academic expert. These programs combine travel with structured learning, cultural immersion, and academic enrichment.",
    },
    {
      q: "How do universities organize faculty led travel?",
      a: "Universities typically partner with experienced travel providers to coordinate logistics, accommodations, transportation, risk management, registration, and educational programming while faculty members focus on academic content.",
    },
    {
      q: "What travel company works with universities?",
      a: "Trips & Ships Luxury Travel specializes in educational travel, faculty led travel programs, alumni travel, donor travel, educational cruises, and university group travel planning.",
    },
    {
      q: "How much do faculty led travel programs cost?",
      a: "Costs vary based on destination, trip length, accommodations, transportation, group size, and included educational experiences. Programs can range from affordable study tours to luxury educational travel experiences.",
    },
    {
      q: "What destinations work best for faculty led travel?",
      a: "Popular destinations include Italy, France, Greece, Spain, Japan, Kenya, South Africa, Peru, Antarctica, Alaska, and the Galapagos Islands depending on the academic focus of the program.",
    },
    {
      q: "Are faculty led travel programs safe?",
      a: "When properly planned with professional travel management, risk mitigation strategies, emergency planning, and travel insurance guidance, faculty led travel programs can provide safe and rewarding educational experiences.",
    },
    {
      q: "Can alumni participate in faculty led travel programs?",
      a: "Yes. Many universities now offer faculty hosted travel experiences specifically designed for alumni, lifelong learners, and university supporters.",
    },
    {
      q: "Are faculty led cruises educational?",
      a: "Absolutely. Educational cruises often include onboard lectures, destination briefings, faculty discussions, expert speakers, and immersive shore excursions.",
    },
    {
      q: "Why are small ship cruises popular for educational travel?",
      a: "Small ship cruises provide deeper destination access, fewer crowds, more personalized experiences, and greater opportunities for meaningful educational engagement.",
    },
    {
      q: "What is the difference between educational travel and tourism?",
      a: "Educational travel focuses on learning, cultural immersion, and intellectual enrichment, while traditional tourism is primarily centered on leisure and recreation.",
    },
    {
      q: "Why are expedition cruises becoming popular with universities?",
      a: "Expedition cruises offer extraordinary opportunities to study wildlife, conservation, climate science, history, and exploration in destinations such as Antarctica, the Arctic, and the Galapagos Islands.",
    },
    {
      q: "Can faculty led travel improve alumni engagement?",
      a: "Yes. Educational travel creates meaningful opportunities for alumni to reconnect with faculty, fellow graduates, and their university while participating in lifelong learning experiences.",
    },
    {
      q: "What makes a successful faculty led travel program?",
      a: "Successful programs combine strong academic leadership, carefully selected destinations, meaningful educational content, effective logistics, and professional travel support.",
    },
    {
      q: "What should universities look for in a travel partner?",
      a: "Universities should seek a travel partner with educational travel expertise, strong supplier relationships, risk management capabilities, destination knowledge, and experience supporting faculty led programs.",
    },
    {
      q: "Why choose Trips & Ships Luxury Travel?",
      a: "Trips & Ships Luxury Travel combines educational travel expertise with luxury travel planning experience, helping universities, alumni associations, and faculty leaders create transformative travel experiences worldwide.",
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
const FacultyLedTravelPrograms = () => {
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
          Faculty Led Travel Programs | University Educational Travel Experts
        </title>
        <meta
          name="title"
          content="Faculty Led Travel Programs | Educational Travel Planning | Trips & Ships Luxury Travel"
        />
        <meta
          name="description"
          content="Discover faculty led travel programs designed for universities, alumni associations, lifelong learners, and educational organizations. Learn how Trips & Ships Luxury Travel creates transformative educational experiences worldwide."
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
          <h1>Faculty Led Travel Programs</h1>

          <p>Transform Learning Beyond the Classroom</p>

          <p>
            The most meaningful educational experiences often happen far beyond
            campus walls.
          </p>

          {/* READ MORE CONTENT */}
          {readMore && (
            <>
              <p>
                Faculty led travel programs provide opportunities for students,
                alumni, donors, and lifelong learners to engage directly with
                the destinations, cultures, industries, and historical sites
                connected to their fields of study.
              </p>

              <p>
                These experiences create powerful learning opportunities that
                simply cannot be replicated in a traditional classroom
                environment.
              </p>

              <p>
                At Trips &amp; Ships Luxury Travel, we work with universities,
                colleges, educational organizations, alumni associations, and
                faculty leaders to design customized educational travel
                experiences that combine academic enrichment, cultural
                immersion, safety, and exceptional travel planning.
              </p>

              <p>
                Led by Angela Hughes, CEO of Trips &amp; Ships Luxury Travel,
                our team brings more than 40 years of travel industry experience
                and firsthand knowledge gained through travel to more than 121
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
    WHY UNIVERSITIES ARE OFFERING MORE
    FACULTY LED TRAVEL PROGRAMS
════════════════════════════════════════ */}
      <section className="adg-c-section adg-c-bg-dark" id="adg-why-dining">
        <div className="adg-c-container">
          <div className="adg-c-why-grid">
            {/* LEFT — text */}
            <div className="adg-c-why-left">
              <span className="adg-c-eyebrow adg-c-eyebrow-light">
                Educational Travel Growth
              </span>
              <h2 className="adg-c-h2 adg-c-h2-light">
                Why Universities Are Offering More Faculty Led Travel Programs
              </h2>
              <div className="adg-c-accent-line adg-c-accent-light"></div>
              <p className="adg-c-lead adg-c-lead-light">
                Universities today recognize that educational travel plays an
                important role in student success, alumni engagement, and
                institutional growth.
              </p>
              <p className="adg-c-body adg-c-body-light">
                Many institutions now extend these opportunities beyond students
                to include alumni, donors, continuing education participants,
                and lifelong learning communities.
              </p>{" "}
              <br />
              <p className="adg-c-body adg-c-body-light">
                This evolution has transformed faculty led travel from a
                traditional study abroad model into a broader educational travel
                ecosystem that supports engagement long after graduation.
              </p>
            </div>

            {/* RIGHT — pill grid */}
            <div className="adg-c-why-right">
              <div className="adg-c-why-card">
                <span className="adg-c-why-card-label">
                  Faculty led travel programs allow participants to:
                </span>

                <div className="adg-c-pill-grid">
                  {[
                    "Experience real-world applications of classroom concepts",
                    "Build global awareness",
                    "Engage with experts and local communities",
                    "Strengthen university connections",
                    "Foster lifelong learning",
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
    WHAT ARE FACULTY LED TRAVEL PROGRAMS?
════════════════════════════════════════ */}
      <section className="adg-c-section adg-c-bg-white" id="adg-overview">
        <div className="adg-c-container">
          <div className="adg-c-section-header">
            <span className="adg-c-eyebrow">
              Educational Travel Experiences
            </span>

            <h2 className="adg-c-h2">What Are Faculty Led Travel Programs?</h2>

            <div className="adg-c-accent-line"></div>
          </div>

          <div className="adg-c-overview-layout">
            {/* LEFT — list */}
            <div className="adg-c-overview-icons">
              {diningOverview.map((item, i) => (
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
                    Faculty led travel programs are educational journeys
                    designed and hosted by professors, instructors, researchers,
                    and academic leaders.
                  </p>
                </div>
              </div>

              <div
                className="adg-c-overview-image-wrap"
                style={{ height: "100%" }}
              >
                <img
                  src={OverviewImage}
                  alt="Faculty led travel programs"
                  className="adg-c-overview-img"
                />

                <div className="adg-c-overview-img-overlay">
                  <span className="adg-c-overview-img-label">
                    Educational Travel
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
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="Asc-container">
          {/* HEADING */}
          <div className="Avr-planning-heading">
            <span className="Avr-planning-eyebrow">
              Alumni Educational Travel
            </span>

            <h2 className="Avr-planning-title">
              Faculty Led Travel Programs and Alumni Travel
            </h2>

            <div className="Avr-planning-divider"></div>
          </div>

          {/* TWO-PANEL GRID */}
          <div className="Avr-planning-grid">
            {/* LEFT PANEL */}
            <div className="Avr-planning-left">
              <div className="Avr-planning-left-deco">&ldquo;</div>

              <h3 className="Avr-planning-left-title">
                Faculty Hosted Alumni Travel Continues to Grow
              </h3>

              <p className="Avr-planning-left-body">
                One of the fastest growing areas of educational travel is
                faculty hosted alumni travel.
              </p>

              <div className="Avr-planning-alert">
                <ShieldCheck size={18} className="Avr-planning-alert-icon" />

                <p className="Avr-planning-alert-text">
                  Universities increasingly recognize that alumni seek
                  meaningful travel experiences that combine education,
                  enrichment, and connection to their alma mater.
                </p>
              </div>
            </div>

            {/* RIGHT PANEL */}
            <div className="Avr-planning-right">
              <p className="Avr-planning-right-intro">
                Faculty hosted alumni travel allows graduates to:
              </p>

              <div className="Avr-planning-benefits-grid">
                {[
                  {
                    icon: <MapPin size={18} />,
                    label: "Learn from respected professors",
                  },

                  {
                    icon: <Award size={18} />,
                    label:
                      "Explore destinations connected to academic subjects",
                  },

                  {
                    icon: <Users size={18} />,
                    label: "Connect with fellow alumni",
                  },

                  {
                    icon: <Star size={18} />,
                    label: "Participate in lifelong learning programs",
                  },

                  {
                    icon: <ShieldCheck size={18} />,
                    label: "Strengthen relationships with the university",
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
                These programs often include luxury alumni travel experiences,
                educational cruises, river cruises, expedition cruises, and
                small ship journeys designed specifically for alumni
                communities.
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

      <section className="adg-section" id="adg-dining" style={{backgroundColor: "var(--bg-white)"}}>
        <div className="adg-container">
          {/* HEADER */}
          <div className="adg-header">
            <span className="adg-eyebrow">Educational Travel Benefits</span>

            <h2 className="adg-h2">Why Faculty Led Travel Matters</h2>

            <div className="adg-accent-line"></div>

            <p className="adg-intro">
              Faculty led travel creates meaningful educational experiences that
              benefit students, alumni, and universities through global
              learning, engagement, and enrichment opportunities.
            </p>
          </div>

          {/* CARDS GRID */}
          <div className="adg-grid1">
            {diningData.map((item) => (
              <div key={item.key} className={`adg-card ${item.accent}`}>
                {/* IMAGE */}
                <div className="adg-card-image-wrap">
                  <img
                    src={item.image}
                    alt={item.imageAlt}
                    className="adg-card-img"
                  />

                  <div className="adg-card-image-overlay"></div>

                  {/* FLOATING EYEBROW ON IMAGE */}
                  <div className="adg-card-eyebrow-wrap">
                    <span className="adg-card-eyebrow-icon">{item.icon}</span>

                    <span className="adg-card-eyebrow-label">
                      {item.eyebrow}
                    </span>
                  </div>
                </div>

                {/* BODY */}
                <div className="adg-card-body">
                  <h3 className="adg-card-title">{item.title}</h3>

                  <ul className="adg-card-list">
                    {item.items.map((point, idx) => (
                      <li key={idx} className="adg-card-list-item">
                        <span className="adg-card-list-dot"></span>

                        <span className="adg-card-list-text">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════ FACULTY LED EDUCATIONAL
      CRUISES ════════════════════════════════════════ */}

      <section className="adg-c-section adg-c-bg-soft" id="adg-complimentary">
        <div className="adg-c-container">
          <div className="adg-c-section-header">
            <h2 className="adg-c-h2">Faculty Led Educational Cruises</h2>

            <div className="adg-c-accent-line"></div>
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

      {/* BEST DESTINATIONS FOR FACULTY LED TRAVEL PROGRAMS */}
      <section className="azs-experience-section" id="azs-experience">
        <div className="azs-container">
          <div className="azs-section-header">
            <h2 className="azs-section-title">
              Best Destinations for Faculty Led Travel Programs
            </h2>

            <div className="azs-section-accent"></div>
          </div>

          <div className="azs-experience-grid">
            {/* EUROPE CARD */}
            <div className="azs-experience-card azs-azamara-exp">
              <div className="azs-exp-image-wrap" style={{height: "330px"}}>
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
                  <div className="azs-exp-group">
                    <h4 className="azs-exp-group-title">Ideal for:</h4>

                    <ul className="azs-exp-list">
                      {[
                        "Art history",
                        "Architecture",
                        "Political science",
                        "International relations",
                        "Business studies",
                      ].map((item, idx) => (
                        <li key={idx} className="azs-exp-list-item">
                          <Check size={16} className="azs-exp-list-icon" />

                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="azs-exp-divider"></div>

                  <div className="azs-exp-group">
                    <h4 className="azs-exp-group-title">
                      Popular destinations:
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
                </div>
              </div>
            </div>

            {/* ASIA CARD */}
            <div className="azs-experience-card azs-seabourn-exp">
              <div className="azs-exp-image-wrap" style={{height: "330px"}}>
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
                  <div className="azs-exp-group">
                    <h4 className="azs-exp-group-title">Ideal for:</h4>

                    <ul className="azs-exp-list">
                      {[
                        "Technology",
                        "Sustainability",
                        "Global business",
                        "Cultural studies",
                      ].map((item, idx) => (
                        <li key={idx} className="azs-exp-list-item">
                          <Check size={16} className="azs-exp-list-icon" />

                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="azs-exp-divider"></div>

                  <div className="azs-exp-group">
                    <h4 className="azs-exp-group-title">
                      Popular destinations:
                    </h4>

                    <ul className="azs-exp-list">
                      {[
                        "Japan",
                        "Vietnam",
                        "Thailand",
                        "India",
                        "Singapore",
                      ].map((item, idx) => (
                        <li key={idx} className="azs-exp-list-item">
                          <ArrowRight size={16} className="azs-exp-list-icon" />

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
              <div className="azs-exp-image-wrap" style={{height: "330px"}}>
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
                  <div className="azs-exp-group">
                    <h4 className="azs-exp-group-title">Ideal for:</h4>

                    <ul className="azs-exp-list">
                      {[
                        "Wildlife conservation",
                        "Anthropology",
                        "Sustainability",
                        "Development studies",
                      ].map((item, idx) => (
                        <li key={idx} className="azs-exp-list-item">
                          <Check size={16} className="azs-exp-list-icon" />

                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="azs-exp-divider"></div>

                  <div className="azs-exp-group">
                    <h4 className="azs-exp-group-title">
                      Popular destinations:
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
                </div>
              </div>
            </div>

            {/* SOUTH AMERICA & POLAR CARD */}
            <div className="azs-experience-card azs-seabourn-exp">
              <div className="azs-exp-image-wrap" style={{height: "330px"}}>
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
                    <h4 className="azs-exp-group-title">Ideal for:</h4>

                    <ul className="azs-exp-list">
                      {[
                        "Environmental science",
                        "Archaeology",
                        "Cultural immersion",
                        "Climate science",
                        "Wildlife exploration",
                      ].map((item, idx) => (
                        <li key={idx} className="azs-exp-list-item">
                          <Check size={16} className="azs-exp-list-icon" />

                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="azs-exp-divider"></div>

                  <div className="azs-exp-group">
                    <h4 className="azs-exp-group-title">
                      Popular destinations:
                    </h4>

                    <ul className="azs-exp-list">
                      {[
                        "Peru",
                        "Ecuador",
                        "Argentina",
                        "Antarctica",
                        "The Arctic",
                      ].map((item, idx) => (
                        <li key={idx} className="azs-exp-list-item">
                          <ArrowRight size={16} className="azs-exp-list-icon" />

                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="azs-exp-divider"></div>

                  <p className="azs-exp-highlight">
                    Antarctica and the Arctic provide unmatched educational
                    opportunities focused on climate science, wildlife, and
                    exploration.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FACULTY LED TRAVEL VS TRADITIONAL GROUP TRAVEL */}
      <section
        className="Asc-section Asc-bg-white"
        id="Asc-fleet"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="Asc-container">
          <div className="Asc-section-header">
            <h2 className="Asc-h2">
              Faculty Led Travel vs Traditional Group Travel
            </h2>

            <div className="Asc-accent-line"></div>
          </div>

          <div className="Asc-table-wrapper">
            <table className="Asc-fleet-table">
              <thead>
                <tr>
                  <th>Faculty Led Travel</th>
                  <th>Traditional Group Travel</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Educational Focus</td>
                  <td>Leisure Focus</td>
                </tr>

                <tr>
                  <td>Faculty Expertise</td>
                  <td>Tour Director</td>
                </tr>

                <tr>
                  <td>Academic Learning</td>
                  <td>Sightseeing</td>
                </tr>

                <tr>
                  <td>Structured Enrichment</td>
                  <td>General Tourism</td>
                </tr>

                <tr>
                  <td>University Affiliation</td>
                  <td>Commercial Tour</td>
                </tr>

                <tr>
                  <td>Lifelong Learning</td>
                  <td>Vacation Experience</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      {/* ════════════════════════════════════════
      WHY UNIVERSITIES PARTNER WITH TRAVEL COMPANIES
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
                Educational Travel Support
              </span>

              <h2 className="adg-c-h2 adg-c-h2-light">
                Why Universities Partner With Travel Companies
              </h2>

              <div className="adg-c-accent-line adg-c-accent-light"></div>

              <p className="adg-c-lead adg-c-lead-light">
                Organizing educational travel requires significant expertise.
              </p>

              <p className="adg-c-body adg-c-body-light">
                Universities often partner with experienced travel companies to
                manage operational planning, supplier coordination, and traveler
                support for faculty led programs and educational travel
                experiences.
              </p>

              <p className="adg-c-body adg-c-body-light">
                This allows faculty leaders to focus on delivering educational
                content while travel professionals handle the complex logistical
                details behind successful travel programs.
              </p>
            </div>

            {/* RIGHT — pill grid */}
            <div className="adg-c-why-right">
              <div className="adg-c-why-card">
                <span className="adg-c-why-card-label">
                  Universities often need support with:
                </span>

                <div className="adg-c-pill-grid">
                  {[
                    "Travel logistics",
                    "Supplier negotiations",
                    "Airfare coordination",
                    "Hotel contracts",
                    "Transportation",
                    "Registration systems",
                    "Travel insurance",
                    "Risk management",
                    "Emergency planning",
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
      <AacTimingSection />
      {/* ── COMMON CHALLENGES ───────────────────────────────────────── */}
      <section className="Lfsg-section Lfsg-bg-dark" id="Lfsg-challenges">
        <div className="Lfsg-container">
          <div className="Lfsg-section-header">
            <h2 className="Lfsg-h2-white">
              Common Challenges and How to Avoid Them
            </h2>

            <div className="Lfsg-accent-line-white" />
          </div>

          <div className="Lfsg-mistakes-grid">
            {[
              {
                title: "Faculty Workload",
                desc: "Travel planning can be overwhelming without professional support.",
              },

              {
                title: "Enrollment Targets",
                desc: "Effective marketing and alumni outreach are critical.",
              },

              {
                title: "Budget Management",
                desc: "Programs should balance affordability and educational value.",
              },

              {
                title: "Risk Management",
                desc: "Comprehensive planning reduces travel-related risks.",
              },

              {
                title: "Travel Logistics",
                desc: "Professional coordination ensures a smoother traveler experience.",
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
      {/* WHY TRIPS & SHIPS LUXURY TRAVEL IS DIFFERENT */}
      <section className="Adg-expert-section" id="Asc-expert-insight">
        <div className="Asc-container">
          {/* TOP HEADING */}
          <div className="Adg-expert-heading">
            <span className="Adg-expert-eyebrow">
              Educational Travel Experts
            </span>

            <h2 className="Adg-expert-title">
              Why Trips &amp; Ships Luxury Travel Is Different
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
                  "Trips &amp; Ships Luxury Travel combines educational travel
                  expertise with luxury travel planning experience."
                </blockquote>
              </div>

              {/* SERVICES */}
              <div className="Adg-expert-credentials-box">
                <h4 className="Adg-expert-credentials-title">
                  <Award size={16} />
                  We Support
                </h4>

                <div className="Adg-expert-credentials-grid">
                  {[
                    "Faculty led travel programs",
                    "Educational travel programs",
                    "Alumni cruises",
                    "River cruises",
                    "Expedition cruises",
                    "Small ship educational travel",
                    "Donor travel programs",
                    "University group travel planning",
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

              {/* ANGELA CREDENTIALS */}
              <div
                className="Adg-expert-credentials-box"
                style={{ marginTop: "24px" }}
              >
                <h4 className="Adg-expert-credentials-title">
                  <Star size={16} />
                  Angela Hughes Is
                </h4>

                <div className="Adg-expert-credentials-grid">
                  {[
                    "CEO of Trips & Ships Luxury Travel",
                    "Founder of Luxury Travel University",
                    "Travel industry professional for over 40 years",
                    "Traveler to more than 121 countries",
                    "Global luxury travel speaker and trainer",
                    "Weekly travel industry columnist",
                    "Travel Leaders Network Advisory Board Member",
                    "2024 Luxury Travel Influencer of the Year",
                    "Named one of the Most Influential Women in Travel in 2026",
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
                  Her firsthand destination expertise and global industry
                  relationships provide exceptional value for universities,
                  alumni associations, and educational organizations.
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
            alt="Faculty led travel program background"
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
                  Start Planning Your Faculty Led Travel Program
                </h2>

                <div className="Asc-help-accent"></div>
              </div>

              <div className="Asc-help-grid">
                <div className="Asc-help-info">
                  <p className="Asc-help-intro">
                    Whether you are creating a faculty led study tour, alumni
                    travel program, educational cruise, expedition experience,
                    or lifelong learning journey, Trips &amp; Ships Luxury
                    Travel can help you design a program that delivers
                    meaningful educational outcomes and unforgettable travel
                    experiences.
                  </p>

                  <p className="Asc-help-intro">
                    Contact Trips &amp; Ships Luxury Travel today to begin
                    planning your next faculty led travel program.
                  </p>

                  <div className="Asc-help-btn-container">
                    <button className="Asc-help-cta-btn">
                      Start Planning Your Program
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>

                <div className="Asc-help-list-box">
                  <h3 className="Asc-help-list-title">Programs We Support:</h3>

                  <ul className="Asc-help-bullets">
                    {[
                      "Faculty led study tours",
                      "Alumni travel programs",
                      "Educational cruises",
                      "Expedition experiences",
                      "Lifelong learning journeys",
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
                    Trips &amp; Ships Luxury Travel helps universities, alumni
                    associations, and faculty leaders create educational travel
                    experiences with seamless planning and professional support.
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

export default FacultyLedTravelPrograms;
