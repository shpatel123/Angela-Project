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
  Utensils,
  Compass,
  Wine,
  ShieldCheck,
  Plane,
  Shield,
  Heart,
  Sparkles,
  UtensilsCrossed,
  X,
  BedDouble,
  Info,
} from "lucide-react";
import Nav from "../../components/Navbar/Nav";
import "./ExploraJourneysWorth.css";
import AboutImage from "../../assets/image.webp";
import CTAImage from "../../assets/ExploraJourneysWorth/AlaskaCruise.webp";

import HeroImage1 from "../../assets/ExploraJourneysWorth/Explora-Journeys.webp";
import HeroImage2 from "../../assets/ExploraJourneysWorth/Explora-Journeys2.webp";
import HeroImage4 from "../../assets/ExploraJourneysWorth/Explora-Journeys3.webp";
import ExpolarSuite from "../../assets/ExploraJourneysWorth/Explora-Suite.webp";
import ExploraDining from "../../assets/ExploraJourneysWorth/Explora-Dining.webp";
import ExploraAtmosphere from "../../assets/ExploraJourneysWorth/Modern-Experience.webp";
import AzamaraDietaryImage from "../../assets/ExploraJourneysWorth/Dining-Venues.webp";
import ExploraPool from "../../assets/ExploraJourneysWorth/ExploraPool.webp";

import { Helmet } from "react-helmet-async";

const appreciateItems = [
  "Modern luxury",
  "Sophisticated design",
  "Spacious suites",
  "Elevated dining",
  "Quiet elegance",
  "European hospitality",
  "Wellness-oriented travel",
];

const sections = [
  {
    id: "suites",
    number: "01",
    icon: BedDouble,
    title: "The Suites Are Exceptionally Spacious",
    image: ExpolarSuite,
    lead: "Even entry-level accommodations feel genuinely luxurious — often closer to premium suite categories found elsewhere.",
    blocks: [
      {
        type: "list",
        label: "Suite Highlights",
        variant: "positive",
        items: [
          "Large private terraces",
          "Walk-in wardrobes",
          "Elegant European interiors",
          "Heated bathroom floors",
          "High-end bedding",
          "Oceanfront design throughout",
        ],
      },
    ],
  },
  {
    id: "atmosphere",
    number: "02",
    icon: Sparkles,
    title: "More Modern Luxury Than Traditional Luxury",
    image: ExploraAtmosphere,
    lead: "Explora appeals to a new generation of luxury traveler — sophisticated, informal, and experience-driven.",
    blocks: [
      {
        type: "list",
        label: "Who It Appeals To",
        variant: "positive",
        items: [
          "Younger affluent travelers",
          "Sophisticated professionals",
          "Luxury hotel enthusiasts",
          "Travelers who dislike formal cruise culture",
          "Luxury travelers transitioning from resorts",
        ],
      },
      {
        type: "list",
        label: "You Will Not Find",
        variant: "negative",
        items: [
          "Excessively formal dress codes",
          "Overly traditional cruise entertainment",
          "Loud party atmospheres",
          "Mass-market cruise experiences",
        ],
      },
      {
        type: "list",
        label: "Instead, The Focus Is",
        variant: "focus",
        items: [
          "Wellness & fine dining",
          "Quiet sophistication",
          "Spacious public areas",
          "Destination immersion",
        ],
      },
    ],
  },
  {
    id: "dining",
    number: "03",
    icon: UtensilsCrossed,
    title: "The Food & Beverage Program Is Strong",
    image: ExploraDining,
    lead: "Dining is a major strength onboard. Luxury travelers who prioritize culinary experiences consistently rate Explora highly.",
    blocks: [
      {
        type: "list",
        label: "Dining Highlights",
        variant: "positive",
        items: [
          "Multiple specialty restaurants",
          "European culinary influence",
          "Refined presentation",
          "High-quality ingredients",
          "Included premium beverages",
          "Sophisticated wine offerings",
        ],
      },
    ],
  },
];

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "Trips & Ships Luxury Travel",
      url: "https://www.tripsandships.com",
      logo: "https://www.tripsandships.com/logo.png",
      sameAs: ["https://www.linkedin.com", "https://www.facebook.com"],
    },
    {
      "@type": "TravelAgency",
      name: "Trips & Ships Luxury Travel",
      url: "https://www.tripsandships.com",
      description:
        "Luxury travel agency specializing in luxury cruises, safaris, expeditions, river cruises, and premium travel experiences.",
    },
    {
      "@type": "Person",
      name: "Angela Hughes",
      jobTitle: "CEO of Trips & Ships Luxury Travel",
      description:
        "Luxury travel expert with over 40 years in the travel industry and travel experience across 121+ countries.",
      worksFor: {
        "@type": "Organization",
        name: "Trips & Ships Luxury Travel",
      },
    },
    {
      "@type": "WebPage",
      name: "Is Explora Journeys Worth It?",
      description:
        "Expert luxury cruise review and analysis of Explora Journeys.",
      url: "https://www.tripsandships.com/is-explora-journeys-worth-it",
    },
    {
      "@type": "BreadcrumbList",
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
          name: "Luxury Cruises",
          item: "https://www.tripsandships.com/luxury-cruises",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Is Explora Journeys Worth It?",
          item: "https://www.tripsandships.com/is-explora-journeys-worth-it",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Is Explora Journeys considered ultra luxury?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Explora Journeys is positioned within the luxury cruise market with a strong focus on modern European luxury, spacious suites, and elevated service.",
          },
        },
        {
          "@type": "Question",
          name: "Is Explora Journeys all inclusive?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most dining, beverages, Wi-Fi, and gratuities are included, though some premium experiences cost extra.",
          },
        },
        {
          "@type": "Question",
          name: "Who owns Explora Journeys?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Explora Journeys is owned by the MSC Group.",
          },
        },
        {
          "@type": "Question",
          name: "Is Explora better than Regent Seven Seas?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "They offer different luxury styles. Explora focuses on modern European sophistication while Regent emphasizes traditional ultra-luxury and broader inclusions.",
          },
        },
        {
          "@type": "Question",
          name: "What is included on Explora Journeys?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Dining, beverages, Wi-Fi, wellness amenities, gratuities, and in-suite dining are generally included.",
          },
        },
        {
          "@type": "Question",
          name: "Are drinks included on Explora Journeys?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, many premium beverages are included in the fare.",
          },
        },
        {
          "@type": "Question",
          name: "Is Explora good for first-time luxury cruisers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, especially for travelers who prefer contemporary luxury and a resort-like atmosphere.",
          },
        },
        {
          "@type": "Question",
          name: "Does Explora Journeys have formal nights?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Explora maintains a more relaxed luxury atmosphere without heavily formal cruise traditions.",
          },
        },
        {
          "@type": "Question",
          name: "Are Explora suites large?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Explora suites are considered among the more spacious accommodations in luxury cruising.",
          },
        },
        {
          "@type": "Question",
          name: "Is Explora Journeys family friendly?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It can work for families, but it is more strongly designed for sophisticated luxury travelers and couples.",
          },
        },
        {
          "@type": "Question",
          name: "What destinations does Explora Journeys sail to?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Explora sails throughout the Mediterranean, Caribbean, Northern Europe, and other luxury cruise regions.",
          },
        },
        {
          "@type": "Question",
          name: "Is Explora Journeys worth the money?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For travelers seeking refined modern luxury, many consider it an excellent value within the luxury cruise segment.",
          },
        },
        {
          "@type": "Question",
          name: "Should I use a travel advisor for Explora Journeys?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. A luxury travel advisor can help maximize value, amenities, and suite selection.",
          },
        },
        {
          "@type": "Question",
          name: "What makes Explora different from other luxury cruise lines?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Its contemporary European luxury positioning, spacious suites, and wellness-focused atmosphere make it stand out.",
          },
        },
      ],
    },
  ],
};

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

/* ── aac: Section 2 — Expert Insight ────────────────────────────── */
function AacExpertSection() {
  const [ref, inView] = useAacInView();

  return (
    <section className="aac-section aac-section-expert" ref={ref}>
      <div className="aac-container">
        <div className={`aac-expert-grid${inView ? " aac-animate-in" : ""}`}>
          {/* LEFT SIDE */}
          <div className="aac-expert-left">
            <p className="aac-eyebrow aac-eyebrow-light">
              Luxury Cruise Expertise
            </p>

            <h2 className="aac-h2 aac-h2-white">
              Why Experienced Luxury Travelers Are Paying Attention to Explora
            </h2>

            <div className="aac-accent-line aac-accent-white" />

            <p className="aac-expert-desc" style={{ marginTop: "18px" }}>
              With travel experience spanning more than 121 countries, Angela
              Hughes has watched luxury cruising evolve for decades.
            </p>

            <blockquote className="aac-expert-quote">
              “Explora Journeys is one of the most interesting developments in
              luxury cruising because it appeals strongly to travelers who want
              modern luxury without the overly formal atmosphere found on some
              traditional luxury lines.”
            </blockquote>

            <p className="aac-expert-desc" style={{ marginTop: "24px" }}>
              Angela Hughes specializes in helping affluent travelers determine
              which luxury cruise experience truly aligns with their travel
              style.
            </p>

            <div className="aac-expert-byline" style={{ marginTop: "30px" }}>
              <div className="aac-expert-avatar">AH</div>

              <div>
                <p className="aac-expert-name">Angela Hughes</p>

                <p className="aac-expert-role">
                  CEO, Trips &amp; Ships Luxury Travel
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="aac-expert-right">
            <p className="aac-insight-label">Angela Hughes Credentials</p>

            <div className="aac-insight-list">
              {[
                "CEO of Trips & Ships Luxury Travel",
                "Founder of Luxury Travel University",
                "Weekly luxury travel columnist",
                "Global luxury travel speaker and trainer",
                "Travel Leaders Network Advisory Board member",
                "2024 Luxury Travel Influencer of the Year",
                "Named among the Most Influential Women in Travel in 2026 by TravelPulse",
              ].map((text, i) => (
                <div
                  key={i}
                  className="aac-insight-item"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <span className="aac-insight-num">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <p className="aac-insight-text">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState(null);

  const faqData = [
    {
      q: "Is Explora Journeys considered ultra luxury?",
      a: "Explora Journeys is positioned within the luxury cruise market with a strong focus on modern European luxury, spacious suites, and elevated service.",
    },
    {
      q: "Is Explora Journeys all inclusive?",
      a: "Most dining, beverages, Wi-Fi, and gratuities are included, though some premium experiences cost extra.",
    },
    {
      q: "Who owns Explora Journeys?",
      a: "Explora Journeys is owned by the MSC Group.",
    },
    {
      q: "Is Explora better than Regent Seven Seas?",
      a: "They offer different luxury styles. Explora focuses on modern European sophistication while Regent emphasizes traditional ultra-luxury and broader inclusions.",
    },
    {
      q: "What is included on Explora Journeys?",
      a: "Dining, beverages, Wi-Fi, wellness amenities, gratuities, and in-suite dining are generally included.",
    },
    {
      q: "Are drinks included on Explora Journeys?",
      a: "Yes, many premium beverages are included in the fare.",
    },
    {
      q: "Is Explora good for first-time luxury cruisers?",
      a: "Yes, especially for travelers who prefer contemporary luxury and a resort-like atmosphere.",
    },
    {
      q: "Does Explora Journeys have formal nights?",
      a: "Explora maintains a more relaxed luxury atmosphere without heavily formal cruise traditions.",
    },
    {
      q: "Are Explora suites large?",
      a: "Yes. Explora suites are considered among the more spacious accommodations in luxury cruising.",
    },
    {
      q: "Is Explora Journeys family friendly?",
      a: "It can work for families, but it is more strongly designed for sophisticated luxury travelers and couples.",
    },
    {
      q: "What destinations does Explora Journeys sail to?",
      a: "Explora sails throughout the Mediterranean, Caribbean, Northern Europe, and other luxury cruise regions.",
    },
    {
      q: "Is Explora Journeys worth the money?",
      a: "For travelers seeking refined modern luxury, many consider it an excellent value within the luxury cruise segment.",
    },
    {
      q: "Should I use a travel advisor for Explora Journeys?",
      a: "Yes. A luxury travel advisor can help maximize value, amenities, and suite selection.",
    },
    {
      q: "What makes Explora different from other luxury cruise lines?",
      a: "Its contemporary European luxury positioning, spacious suites, and wellness-focused atmosphere make it stand out.",
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
const ExploraJourneysWorth = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [readMore, setReadMore] = useState(false);
  const [active, setActive] = useState("suites");
  const current = sections.find((s) => s.id === active);

  const images = [HeroImage1, HeroImage4, HeroImage2];

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
          Is Explora Journeys Worth It? Honest Luxury Cruise Expert Review for
          2026
        </title>
        <meta
          name="title"
          content="Is Explora Journeys Worth It? Luxury Cruise Expert Review by Angela Hughes"
        />
        <meta
          name="description"
          content="Discover whether Explora Journeys is truly worth the price for luxury travelers. Expert insights from Angela Hughes, CEO of Trips & Ships Luxury Travel and luxury cruise specialist with 40+ years of experience."
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
          <h1>Is Explora Journeys Worth It?</h1>

          <p>The Short Answer: For the Right Luxury Traveler, Absolutely</p>

          <p>
            Explora Journeys has rapidly become one of the most talked-about
            luxury cruise brands in the world — but it is not the right fit for
            every traveler.
          </p>

          {/* READ MORE CONTENT */}
          {readMore && (
            <>
              <p>
                For affluent travelers seeking a sophisticated, modern,
                European-style luxury cruise experience with exceptional suites,
                refined dining, elegant design, and a quieter onboard
                atmosphere, Explora Journeys can deliver extraordinary value.
              </p>

              <p>
                However, travelers expecting a highly traditional ultra-luxury
                cruise experience may find important differences compared to
                brands like Regent Seven Seas Cruises or Silversea Cruises.
              </p>

              <p>
                According to Angela Hughes — CEO of Trips & Ships Luxury Travel,
                founder of Luxury Travel University, and a luxury cruise expert
                with over 40 years in the travel industry — the key is
                understanding what kind of luxury traveler you are before
                booking.
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
    1. WHY EXPLORA JOURNEYS HAS CAPTURED ATTENTION
════════════════════════════════════════ */}
      <section className="adg-c-section adg-c-bg-dark" id="adg-why-dining">
        <div className="adg-c-container">
          <div className="adg-c-why-grid">
            {/* LEFT — text */}
            <div className="adg-c-why-left">
              <span className="adg-c-eyebrow adg-c-eyebrow-light">
                Modern Luxury Cruising
              </span>

              <h2 className="adg-c-h2 adg-c-h2-light">
                Why Explora Journeys Has Captured Luxury Travelers’ Attention
              </h2>

              <div className="adg-c-accent-line adg-c-accent-light"></div>

              <p className="adg-c-lead adg-c-lead-light">
                Explora Journeys was designed to redefine modern luxury cruising
                with a more sophisticated, spacious, and contemporary onboard
                experience.
              </p>

              <div className="adg-c-why-features">
                <div className="adg-c-why-feature">
                  <div className="adg-c-why-feature-icon">
                    <Ship size={18} strokeWidth={1.6} />
                  </div>

                  <div className="adg-c-why-feature-text">
                    <h4 className="adg-c-why-feature-title">
                      Luxury Resort Atmosphere
                    </h4>

                    <p className="adg-c-why-feature-desc">
                      Unlike traditional mega ships, Explora feels more like an
                      exclusive luxury resort at sea.
                    </p>
                  </div>
                </div>

                <div className="adg-c-why-feature">
                  <div className="adg-c-why-feature-icon">
                    <MapPin size={18} strokeWidth={1.6} />
                  </div>

                  <div className="adg-c-why-feature-text">
                    <h4 className="adg-c-why-feature-title">
                      Destination & Wellness Focus
                    </h4>

                    <p className="adg-c-why-feature-desc">
                      Explora emphasizes destination immersion, wellness, and
                      slower-paced luxury travel experiences.
                    </p>
                  </div>
                </div>

                {/* THIRD CARD */}
                <div className="adg-c-why-feature">
                  <div className="adg-c-why-feature-icon">
                    <Star size={18} strokeWidth={1.6} />
                  </div>

                  <div className="adg-c-why-feature-text">
                    <h4 className="adg-c-why-feature-title">
                      Why This Matters
                    </h4>

                    <p className="adg-c-why-feature-desc">
                      This distinction matters enormously when evaluating
                      whether Explora Journeys is worth the premium pricing.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT — two pill cards */}
            <div className="adg-c-why-right">
              <div className="adg-c-why-card">
                <span className="adg-c-why-card-label">Explora Focuses On</span>

                <p className="adg-c-why-card-desc">
                  Backed by the MSC Group, the brand prioritizes:
                </p>

                <div className="adg-c-pill-grid">
                  {[
                    "Spacious oceanfront suites",
                    "European luxury aesthetics",
                    "Destination immersion",
                    "Wellness and slow travel",
                    "Elevated culinary experiences",
                    "Sophisticated onboard ambiance",
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

              <div className="adg-c-why-card adg-c-why-card-alt">
                <span className="adg-c-why-card-label">
                  How Travelers Describe Explora
                </span>

                <p className="adg-c-why-card-desc">
                  Many luxury travelers describe the experience as:
                </p>

                <div className="adg-c-pill-grid">
                  {[
                    "Calm rather than crowded",
                    "Elegant rather than flashy",
                    "Sophisticated rather than formal",
                    "Contemporary rather than traditional",
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

      <section className="Ejv-section">
        <div className="Ejv-container">
          {/* Header */}
          <div className="Ejv-header">
            <h2 className="Ejv-title">
              What Makes Explora Journeys Different?
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
                  className={`Ejv-step-btn ${isActive ? "Ejv-step-btn--active" : ""}`}
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

      <AacExpertSection />

      {/* VIDEO SECTION */}
      {/* <section className="Asc-video-section" id="Asc-video">
                <div className="Asc-container">
                    <div className="Asc-section-header">
                        <h2 className="Asc-h2">Watch: Regent Seven Seas Cruise</h2>
                        <div className="Asc-accent-line"></div>
                        <p className="Asc-video-intro">
                            Hear directly from luxury cruise expert Angela Hughes as she shares her firsthand insights on choosing between Azamara and Regent Seven Seas.
                        </p>
                    </div>
                    <div className="Asc-video-wrapper">
                        <div className="Asc-video-frame">
                            <iframe
                                src="https://www.youtube.com/embed/yoKE5YG3CYI"
                                title="Azamara vs Regent Seven Seas – Angela Hughes"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section> */}

      {/* IS EXPLORA JOURNEYS TRULY ALL INCLUSIVE? */}
      <section className="adg-section" id="adg-food-itineraries">
        <div className="adg-container">
          <div className="adg-section-header" style={{ marginBottom: "60px" }}>
            <h2 className="adg-h2">Is Explora Journeys Truly All Inclusive?</h2>

            <div className="adg-accent-line"></div>
          </div>

          <div className="adg-split-layout">
            {/* Left Content Column */}
            <div className="adg-content-card-side">
              <img
                src={AzamaraDietaryImage}
                alt="Explora Journeys luxury onboard experience"
                className="adg-side-image"
                style={{ height: "40vh" }}
              />

              <div className="adg-info-card">
                <div className="adg-card-meta">
                  <Compass size={28} />
                  <span className="adg-meta-label">
                    Additional Premium Experiences
                  </span>
                </div>

                <p className="adg-card-lead">
                  Some premium experiences remain additional depending on the
                  voyage and onboard selections.
                </p>

                <div className="adg-card-divider"></div>

                <ul className="Asc-who-list" style={{ marginTop: "20px" }}>
                  {[
                    "Certain rare wines and spirits",
                    "Spa treatments",
                    "Select shore excursions",
                  ].map((item, i) => (
                    <li key={i}>
                      <Minus size={16} className="Asc-icon-muted" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Inclusions Grid Column */}
            <div className="adg-list-side">
              {[
                {
                  title: "Fine dining venues",
                  icon: <Utensils size={20} />,
                },
                {
                  title: "Premium beverages",
                  icon: <Wine size={20} />,
                },
                {
                  title: "Wi-Fi included",
                  icon: <Star size={20} />,
                },
                {
                  title: "Gratuities included",
                  icon: <Check size={20} />,
                },
                {
                  title: "Wellness facilities",
                  icon: <Compass size={20} />,
                },
                {
                  title: "In-suite dining",
                  icon: <Heart size={20} />,
                },
                {
                  title: "Fitness programming",
                  icon: <Ship size={20} />,
                },
              ].map((item, i) => (
                <div key={i} className="adg-list-item-card">
                  <div className="adg-list-item-icon">{item.icon}</div>

                  <h4 className="adg-list-item-label">{item.title}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FLEET OVERVIEW TABLE */}
      <section
        className="Asc-section Asc-bg-white"
        id="Asc-fleet"
        style={{ backgroundColor: "var(--bg-white)" }}
      >
        <div className="Asc-container">
          <div className="Asc-section-header">
            <h2 className="Asc-h2">
              Explora Journeys vs Other Luxury Cruise Lines
            </h2>

            <div className="Asc-accent-line"></div>
          </div>

          <div className="Asc-table-wrapper">
            <table className="Asc-fleet-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Explora Journeys</th>
                  <th>Regent Seven Seas</th>
                  <th>Silversea</th>
                  <th>Seabourn</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>
                    <strong>Style</strong>
                  </td>
                  <td>Modern European Luxury</td>
                  <td>Traditional Ultra-Luxury</td>
                  <td>Expedition + Luxury</td>
                  <td>Yacht-Inspired Luxury</td>
                </tr>

                <tr>
                  <td>
                    <strong>Atmosphere</strong>
                  </td>
                  <td>Contemporary</td>
                  <td>Formal Elegant</td>
                  <td>Sophisticated</td>
                  <td>Relaxed Luxury</td>
                </tr>

                <tr>
                  <td>
                    <strong>Best For</strong>
                  </td>
                  <td>Modern affluent travelers</td>
                  <td>All-inclusive enthusiasts</td>
                  <td>Destination explorers</td>
                  <td>Relaxed luxury cruisers</td>
                </tr>

                <tr>
                  <td>
                    <strong>Dining</strong>
                  </td>
                  <td>Excellent</td>
                  <td>Excellent</td>
                  <td>Very Good</td>
                  <td>Excellent</td>
                </tr>

                <tr>
                  <td>
                    <strong>Suites</strong>
                  </td>
                  <td>Spacious</td>
                  <td>Spacious</td>
                  <td>Smaller on some ships</td>
                  <td>Stylish</td>
                </tr>

                <tr>
                  <td>
                    <strong>Entertainment</strong>
                  </td>
                  <td>Minimalist</td>
                  <td>Traditional luxury</td>
                  <td>Moderate</td>
                  <td>Social luxury</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* WHO SHOULD CHOOSE */}
      <section className="Asc-section Asc-bg-soft" id="Asc-who">
        <div className="Asc-container">
          <div className="Asc-section-header">
            <h2 className="Asc-h2">Who Explora Journeys Is Best For</h2>
            <div className="Asc-accent-line"></div>
          </div>

          <div className="Asc-who-grid">
            {/* BEST FOR */}
            <div className="Asc-who-card Asc-who-yes">
              <h3 className="Asc-who-title">Explora Journeys Is Ideal For</h3>

              <ul className="Asc-who-list">
                {[
                  "Luxury hotel lovers",
                  "Sophisticated couples",
                  "Travelers seeking calm environments",
                  "Affluent millennials and Gen X travelers",
                  "Wellness-focused travelers",
                  "Luxury cruisers wanting something fresh and modern",
                  "Food and wine enthusiasts",
                ].map((item, i) => (
                  <li key={i}>
                    <Check size={16} className="Asc-icon-green" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* NOT IDEAL FOR */}
            <div className="Asc-who-card Asc-who-no">
              <h3 className="Asc-who-title">
                Explora Journeys May NOT Be Best For
              </h3>

              <ul className="Asc-who-list">
                {[
                  "Travelers who prefer highly traditional luxury cruising",
                  "Guests wanting Broadway-style entertainment",
                  "Families needing extensive kids programming",
                  "Travelers preferring highly social party environments",
                  "Guests expecting fully unlimited shore excursions",
                  "Travelers wanting old-world formal luxury culture",
                ].map((item, i) => (
                  <li key={i}>
                    <Minus size={16} className="Asc-icon-muted" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="Asc-body-text" style={{ marginTop: "20px" }}>
            This is one of the most important distinctions travelers should
            understand before booking.
          </p>
        </div>
      </section>

      {/* ── COMMON MISTAKES ───────────────────────────────────────── */}
      <section className="Lfsg-section Lfsg-bg-dark" id="Lfsg-mistakes">
        <div className="Lfsg-container">
          <div className="Lfsg-section-header">
            <h2 className="Lfsg-h2-white">
              Common Mistakes Travelers Make When Booking Explora Journeys
            </h2>

            <div className="Lfsg-accent-line-white" />
          </div>

          <div className="Lfsg-mistakes-grid">
            {[
              {
                title: "Booking Without Understanding the Brand Personality",
                desc: "Explora is not trying to replicate traditional luxury cruise lines. Travelers expecting Regent-style luxury may misunderstand the experience.",
              },

              {
                title: "Choosing the Wrong Itinerary",
                desc: "Some itineraries align better with Explora’s immersive luxury style than others. Mediterranean voyages are often among the strongest experiences.",
              },

              {
                title: "Trying to Plan Luxury Cruises Without Expert Guidance",
                desc: "Luxury cruise planning has become increasingly complex. Working with a specialist like Angela Hughes can help travelers select the right suite category, maximize amenities and exclusive perks, understand itinerary differences.",
              },
              {
                title: "Not Using a Luxury Travel Advisor",
                desc: "Luxury cruise planning has become increasingly complex. Working with a specialist like Angela Hughes can help travelers select the right suite, maximize amenities, access exclusive benefits, understand itinerary nuances, and avoid costly booking mistakes.",
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

      {/* ════════════════════════════════════════
    5. IS IT WORTH THE PRICE
════════════════════════════════════════ */}
      <section className="adg-c-section adg-c-bg-soft" id="adg-worth-it">
        <div className="adg-c-container">
          <div className="adg-c-section-header">
            <h2 className="adg-c-h2">Is Explora Journeys Worth the Price?</h2>

            <div className="adg-c-accent-line"></div>
          </div>

          <div className="adg-c-worth-layout">
            {/* VERDICT BANNER */}
            <div className="adg-c-verdict-banner">
              <div className="adg-c-verdict-badge">
                For the right traveler, many experts say yes.
              </div>

              <p className="adg-c-verdict-sub">
                Explora delivers value through exceptional space, refined
                service, elevated aesthetics, high-quality dining, and a
                sophisticated wellness-focused atmosphere.
              </p>
            </div>

            {/* SPLIT */}
            <div className="adg-c-worth-split">
              <div
                className="adg-c-worth-left"
                style={{ backgroundColor: "var(--bg-white)" }}
              >
                <h4 className="adg-c-worth-col-title">
                  Explora Journeys Delivers Value Through
                </h4>

                <ul className="adg-c-worth-list">
                  {[
                    "Exceptional space",
                    "Elevated onboard aesthetics",
                    "Refined service",
                    "High-quality dining",
                    "Wellness focus",
                    "Sophisticated atmosphere",
                  ].map((pt, i) => (
                    <li key={i}>
                      <span className="adg-c-worth-num">{i + 1}</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="adg-c-worth-right">
                <div className="adg-c-worth-note">
                  <div className="adg-c-worth-note-bar"></div>

                  <div className="adg-c-worth-note-content">
                    <p className="adg-c-worth-note-text">
                      Travelers wanting massive entertainment, constant onboard
                      activities, or traditional cruise culture may not feel the
                      same level of value.
                    </p>

                    <p className="adg-c-worth-note-emphasis">
                      Luxury travel is highly personal — matching the traveler
                      to the right experience matters far more than simply
                      booking the most expensive option.
                    </p>
                  </div>
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
              Luxury Travel Expertise
            </span>

            <h2 className="Avr-planning-title">
              Why Luxury Travelers Work With Trips &amp; Ships Luxury Travel
            </h2>

            <div className="Avr-planning-divider"></div>
          </div>

          {/* TWO-PANEL GRID */}
          <div className="Avr-planning-grid">
            {/* LEFT PANEL */}
            <div className="Avr-planning-left">
              <div className="Avr-planning-left-deco">&ldquo;</div>

              <h3 className="Avr-planning-left-title">
                Luxury Cruising Is About More Than Choosing a Ship
              </h3>

              <p className="Avr-planning-left-body">
                Today’s luxury travelers are looking for highly personalized
                experiences that align with their lifestyle, travel goals,
                destination interests, and preferred level of luxury.
              </p>

              <div className="Avr-planning-alert">
                <ShieldCheck size={18} className="Avr-planning-alert-icon" />

                <p className="Avr-planning-alert-text">
                  Led by Angela Hughes, Trips &amp; Ships Luxury Travel combines
                  four decades of industry expertise with personalized luxury
                  planning for discerning travelers worldwide.
                </p>
              </div>
            </div>

            {/* RIGHT PANEL */}
            <div className="Avr-planning-right">
              <p className="Avr-planning-right-intro">
                Luxury travel planning includes:
              </p>

              <div className="Avr-planning-benefits-grid">
                {[
                  {
                    icon: <MapPin size={18} />,
                    label: "Lifestyle alignment",
                  },
                  {
                    icon: <Compass size={18} />,
                    label: "Destination strategy",
                  },
                  {
                    icon: <Ship size={18} />,
                    label: "Suite selection",
                  },
                  {
                    icon: <Star size={18} />,
                    label: "Timing and itinerary planning",
                  },
                  {
                    icon: <Award size={18} />,
                    label: "Exclusive luxury experiences",
                  },
                  {
                    icon: <Plane size={18} />,
                    label: "Personalized travel planning",
                  },
                  {
                    icon: <Users size={18} />,
                    label: "Luxury cruise expertise",
                  },
                  {
                    icon: <Shield size={18} />,
                    label: "Attention to travel details",
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
                style={{ marginTop: "24px" }}
              >
                Trips &amp; Ships Luxury Travel specializes in luxury ocean
                cruises, river cruising, expedition travel, safaris, and global
                premium travel experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ANGELA HUGHES AUTHORITY BOX */}
      <section className="Adg-expert-section" id="Asc-expert-insight">
        <div className="Asc-container">
          {/* TOP HEADING */}
          <div className="Adg-expert-heading">
            <span className="Adg-expert-eyebrow">Luxury Travel Expertise</span>

            <h2 className="Adg-expert-title">Angela Hughes Authority Box</h2>

            <div className="Adg-expert-divider"></div>
          </div>

          {/* MAIN GRID */}
          <div className="Adg-expert-grid">
            {/* LEFT SIDE */}
            <div className="Adg-expert-image-col">
              <div className="Adg-expert-portrait-wrap">
                <img
                  src={AboutImage}
                  alt="Angela Hughes – Luxury Travel Expert"
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
                  CEO of Trips &amp; Ships Luxury Travel
                </p>

                <div className="Adg-expert-name-divider"></div>

                <p className="Adg-expert-countries">
                  <MapPin size={14} />
                  Traveled to more than 121 countries
                </p>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="Adg-expert-content-col">
              <div className="Adg-expert-credentials-box">
                <h4 className="Adg-expert-credentials-title">
                  <Award size={16} />
                  Angela Hughes Authority Box
                </h4>

                <div className="Adg-expert-credentials-grid">
                  {[
                    {
                      icon: <Award size={16} />,
                      label: "CEO of Trips & Ships Luxury Travel",
                    },
                    {
                      icon: <Star size={16} />,
                      label: "Over 40 years in the travel industry",
                    },
                    {
                      icon: <MapPin size={16} />,
                      label: "Traveled to more than 121 countries",
                    },
                    {
                      icon: <Award size={16} />,
                      label: "Founder of Luxury Travel University",
                    },
                    {
                      icon: <Users size={16} />,
                      label: "Global luxury travel speaker and trainer",
                    },
                    {
                      icon: <Users size={16} />,
                      label: "Weekly industry columnist",
                    },
                    {
                      icon: <Users size={16} />,
                      label: "Travel Leaders Network Advisory Board member",
                    },
                    {
                      icon: <Award size={16} />,
                      label: "2024 Luxury Travel Influencer of the Year",
                    },
                    {
                      icon: <Star size={16} />,
                      label:
                        "Named one of the Most Influential Women in Travel in 2026 by TravelPulse",
                    },
                    {
                      icon: <Award size={16} />,
                      label: "Featured in major travel publications globally",
                    },
                    {
                      icon: <Ship size={16} />,
                      label:
                        "Expert in luxury cruises, safaris, expeditions, river cruising, and premium travel",
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
            </div>
          </div>
        </div>
      </section>

      <section className="Ejv-verdict-section">
        <div className="Ejv-verdict-container">
          {/* Header */}
          <div className="Ejv-verdict-header">
            <span className="Ejv-verdict-eyebrow">Final Verdict</span>
            <h2 className="Ejv-verdict-title">Is Explora Journeys Worth It?</h2>
     <div className="Asc-accent-line"></div>
          </div>

          {/* Main card */}
          <div className="Ejv-verdict-card">
            {/* Left — Image */}
            <div className="Ejv-verdict-img-col">
              <img
                src={ExploraPool}
                alt="Luxury cruise experience"
                className="Ejv-verdict-img"
              />
              <div className="Ejv-verdict-img-badge">
                <span className="Ejv-verdict-badge-label">
                  Explora Journeys
                </span>
                <span className="Ejv-verdict-badge-sub">Luxury Redefined</span>
              </div>
            </div>

            {/* Right — Content */}
            <div className="Ejv-verdict-content">
              <p className="Ejv-verdict-intro">
                If you appreciate any of the following…
              </p>

              <ul className="Ejv-verdict-list">
                {appreciateItems.map((item) => (
                  <li key={item} className="Ejv-verdict-list-item">
                    <Check
                      size={14}
                      strokeWidth={2.5}
                      className="Ejv-verdict-check"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="Ejv-verdict-outcome">
                <ArrowRight
                  size={16}
                  strokeWidth={2}
                  className="Ejv-verdict-outcome-icon"
                />
                <p className="Ejv-verdict-outcome-text">
                  …then Explora Journeys may become one of your favorite luxury
                  cruise experiences.
                </p>
              </div>

              <div className="Ejv-verdict-divider"></div>

              <div className="Ejv-verdict-note">
                <Info
                  size={15}
                  strokeWidth={1.8}
                  className="Ejv-verdict-note-icon"
                />
                <p className="Ejv-verdict-note-text">
                  For travelers seeking a highly traditional luxury cruise
                  atmosphere, other luxury lines may align more closely. The key
                  is working with an experienced luxury travel advisor who
                  understands the subtle but important differences between
                  luxury cruise brands.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="Asc-section Asc-bg-soft" id="Asc-faq">
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
            alt="Explora Journeys luxury cruise"
            className="Asc-help-bg-img"
          />
          <div className="Asc-help-overlay"></div>
        </div>

        <div className="Asc-container">
          <div className="Asc-help-card">
            <div className="Asc-help-content">
              <div className="Asc-help-header">
                <span className="Asc-help-eyebrow">
                  Personalized Luxury Planning
                </span>

                <h2 className="Asc-help-h2">
                  Plan Your Explora Journeys Experience
                </h2>

                <div className="Asc-help-accent"></div>
              </div>

              <div className="Asc-help-grid">
                <div className="Asc-help-info">
                  <p className="Asc-help-intro">
                    Trips & Ships Luxury Travel helps discerning travelers
                    identify the right luxury cruise experience based on travel
                    style, luxury preferences, and destination goals.
                  </p>

                  <p className="Asc-help-intro">
                    Whether you prioritize wellness, dining experiences,
                    spacious suites, or multi-generational travel, expert
                    guidance can help create a far more personalized luxury
                    journey.
                  </p>

                  <p className="Asc-help-intro">
                    Connect with Angela Hughes and the Trips & Ships Luxury
                    Travel team to begin planning a personalized luxury cruise
                    experience.
                  </p>

                  <div className="Asc-help-btn-container">
                    <button className="Asc-help-cta-btn">
                      Start Planning Your Explora Journey
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>

                <div className="Asc-help-list-box">
                  <h3 className="Asc-help-list-title">
                    Personalized planning includes:
                  </h3>

                  <ul className="Asc-help-bullets">
                    {[
                      "Travel style matching",
                      "Luxury preference guidance",
                      "Destination-focused planning",
                      "Wellness travel recommendations",
                      "Dining and suite selection",
                      "Multi-generational cruise planning",
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
                    Experienced luxury travel guidance helps ensure your Explora
                    Journeys experience aligns with the level of luxury and
                    personalization you truly want.
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

export default ExploraJourneysWorth;
