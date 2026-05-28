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
  Compass,
  Shield,
  Plane,
  ShieldCheck,
} from "lucide-react";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela.jpeg";
import HeroImage1 from "../../assets/AzamaraNorwayFjordsCruises/AzamaraNorway.webp";
import HeroImage2 from "../../assets/AzamaraNorwayFjordsCruises/AzamaraNorway2.jpg";
import HeroImage3 from "../../assets/AzamaraNorwayFjordsCruises/traditional-lofoten-islands-red-rorbuer-cabins-norway.jpg";
import HeroImage6 from "../../assets/AzamaraNorwayFjordsCruises/AzamaraNorway5.jpg";
import CTAImage from "../../assets/AzamaraNorwayFjordsCruises/Azamaracta.webp";
import HeroImage4 from "../../assets/AzamaraNorwayFjordsCruises/AzamaraNorway3.webp";

import Experience from "../../assets/AzamaraNorwayFjordsCruises/best-lofoten-islands-waterfront-cabins-norway-vacation.jpg";
import Experience1 from "../../assets/AzamaraNorwayFjordsCruises/geirangerfjord-norway-scenic-cruise-fjord-mountain-view.jpg";
import Experience2 from "../../assets/AzamaraNorwayFjordsCruises/norway-fjord-cruise-waterfall-national-flag-scenic-travel.jpg";
import Experience3 from "../../assets/AzamaraNorwayFjordsCruises/norway-fjord-village-overlook-scenic-cruise-destination.jpg";
import Experience4 from "../../assets/AzamaraNorwayFjordsCruises/norway-trolltunga-hiking-view-fjord-mountain-adventure.jpg";
import Experience5 from "../../assets/AzamaraNorwayFjordsCruises/norway-fjord-waterfall-scenic-cruise-landscape.jpg";
import Experience6 from "../../assets/AzamaraNorwayFjordsCruises/AzamaraNorway3.webp";

import "./AzamaraNorwayFjordsCruises.css";

import { Helmet } from "react-helmet-async";

const experienceSlides = [
  {
    img: Experience,
    text: "Lofoten Islands Waterfront Cabins & Scenic Norway Views",
  },
  {
    img: Experience1,
    text: "Geirangerfjord Scenic Fjord & Mountain Cruise Experience",
  },
  {
    img: Experience2,
    text: "Norway Fjord Waterfalls & National Flag Coastal Journey",
  },
  {
    img: Experience3,
    text: "Charming Norway Fjord Village Overlook Destination",
  },
  {
    img: Experience4,
    text: "Trolltunga Hiking Adventure & Fjord Mountain Landscapes",
  },
  {
    img: Experience5,
    text: "Norway Fjord Waterfall Scenic Cruise Landscapes",
  },
  {
    img: Experience6,
    text: "Azamara Norway Fjords Luxury Cruise Experience",
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
    },

    {
      "@type": "TravelAgency",
      name: "Trips & Ships Luxury Travel",
      url: "https://www.tripsandships.com",
      areaServed: "Worldwide",
    },

    {
      "@type": "Person",
      name: "Angela Hughes",
      jobTitle: "CEO",
      worksFor: {
        "@type": "Organization",
        name: "Trips & Ships Luxury Travel",
      },
      award: [
        "2024 Luxury Travel Influencer of the Year",
        "Most Influential Women in Travel 2026",
      ],
    },

    {
      "@type": "WebPage",
      name: "Azamara Norway Fjords Cruises",
      url: "https://www.tripsandships.com/azamara-norway-fjords-cruises",
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
          name: "Azamara Norway Fjords Cruises",
        },
      ],
    },

    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Is Azamara good for Norway fjords cruises?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Azamara’s smaller ships, destination-focused itineraries, and immersive port experiences make it an excellent option for Norway fjords cruises.",
          },
        },

        {
          "@type": "Question",
          name: "What is the best month for a Norway fjords cruise?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "May through September are ideal, with July and August offering the warmest weather and longest daylight hours.",
          },
        },

        {
          "@type": "Question",
          name: "Are balcony cabins worth it for Norway cruises?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. Fjord scenery is a major highlight, and balcony cabins allow private scenic viewing throughout the voyage.",
          },
        },

        {
          "@type": "Question",
          name: "How cold is Norway during fjord cruises?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Temperatures generally range from 45°F to 70°F depending on the season and region.",
          },
        },

        {
          "@type": "Question",
          name: "Does Azamara include excursions?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Some amenities and destination experiences are included, but many premium excursions are optional upgrades.",
          },
        },

        {
          "@type": "Question",
          name: "How long should a Norway fjords cruise be?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most luxury Norway cruises range from 7 to 14 nights for optimal destination immersion.",
          },
        },

        {
          "@type": "Question",
          name: "Is Azamara all inclusive?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Azamara includes many premium amenities such as gratuities, select beverages, and cultural experiences.",
          },
        },

        {
          "@type": "Question",
          name: "What should I pack for a Norway fjords cruise?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Layered clothing, waterproof outerwear, comfortable walking shoes, and photography gear are highly recommended.",
          },
        },

        {
          "@type": "Question",
          name: "Are Norway fjords cruises suitable for first-time cruisers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Norway cruises are highly scenic, relaxing, and destination-focused, making them ideal for many first-time luxury cruisers.",
          },
        },

        {
          "@type": "Question",
          name: "What is the difference between Azamara and Viking for Norway?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Azamara offers a more boutique luxury feel, while Viking emphasizes Scandinavian cultural enrichment.",
          },
        },

        {
          "@type": "Question",
          name: "Can you see the Northern Lights on Norway cruises?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Some northern itineraries later in the season may offer Northern Lights viewing opportunities.",
          },
        },

        {
          "@type": "Question",
          name: "Are shore excursions physically demanding?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Some are active, while others are scenic and relaxed. Trips & Ships Luxury Travel helps match excursions to traveler preferences.",
          },
        },

        {
          "@type": "Question",
          name: "Why use a luxury cruise specialist?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Luxury cruise specialists provide personalized guidance, insider expertise, and strategic planning that significantly enhances the overall experience.",
          },
        },

        {
          "@type": "Question",
          name: "How far in advance should I book?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ideally 9–18 months in advance for the best cabin availability and pricing.",
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
              Expert Insight From Angela Hughes
            </p>

            <h2 className="aac-h2 aac-h2-white">
              Why Ship Size Matters More Than Most Travelers Realize
            </h2>

            <div className="aac-accent-line aac-accent-white" />

            <blockquote className="aac-expert-quote">
              “Norway is about immersion and scenery. Smaller luxury ships
              create a dramatically better fjord experience than large
              resort-style vessels. Azamara strikes an exceptional balance
              between luxury, destination access, and comfort.”
            </blockquote>

            <div className="aac-expert-byline">
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
            <p className="aac-insight-label">
              Personalized recommendations based on
            </p>

            <div className="aac-insight-list">
              {[
                { num: "01", text: "Travel style" },
                { num: "02", text: "Activity level" },
                { num: "03", text: "Desired luxury level" },
                { num: "04", text: "Scenic priorities" },
                { num: "05", text: "Budget expectations" },
                { num: "06", text: "Cabin preferences" },
                { num: "07", text: "Seasonal interests" },
              ].map((pt, i) => (
                <div
                  key={i}
                  className="aac-insight-item"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <span className="aac-insight-num">{pt.num}</span>

                  <p className="aac-insight-text">{pt.text}</p>
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
      q: "Is Azamara good for Norway fjords cruises?",
      a: "Yes. Azamara’s smaller ships, destination-focused itineraries, and immersive port experiences make it an excellent option for Norway fjords cruises.",
    },
    {
      q: "What is the best month for a Norway fjords cruise?",
      a: "May through September are ideal, with July and August offering the warmest weather and longest daylight hours.",
    },
    {
      q: "Are balcony cabins worth it for Norway cruises?",
      a: "Absolutely. Fjord scenery is a major highlight, and balcony cabins allow private scenic viewing throughout the voyage.",
    },
    {
      q: "How cold is Norway during fjord cruises?",
      a: "Temperatures generally range from 45°F to 70°F depending on the season and region.",
    },
    {
      q: "Does Azamara include excursions?",
      a: "Some amenities and destination experiences are included, but many premium excursions are optional upgrades.",
    },
    {
      q: "How long should a Norway fjords cruise be?",
      a: "Most luxury Norway cruises range from 7 to 14 nights for optimal destination immersion.",
    },
    {
      q: "Is Azamara all inclusive?",
      a: "Azamara includes many premium amenities such as gratuities, select beverages, and cultural experiences.",
    },
    {
      q: "What should I pack for a Norway fjords cruise?",
      a: "Layered clothing, waterproof outerwear, comfortable walking shoes, and photography gear are highly recommended.",
    },
    {
      q: "Are Norway fjords cruises suitable for first-time cruisers?",
      a: "Yes. Norway cruises are highly scenic, relaxing, and destination-focused, making them ideal for many first-time luxury cruisers.",
    },
    {
      q: "What is the difference between Azamara and Viking for Norway?",
      a: "Azamara offers a more boutique luxury feel, while Viking emphasizes Scandinavian cultural enrichment.",
    },
    {
      q: "Can you see the Northern Lights on Norway cruises?",
      a: "Some northern itineraries later in the season may offer Northern Lights viewing opportunities.",
    },
    {
      q: "Are shore excursions physically demanding?",
      a: "Some are active, while others are scenic and relaxed. Trips & Ships Luxury Travel helps match excursions to traveler preferences.",
    },
    {
      q: "Why use a luxury cruise specialist?",
      a: "Luxury cruise specialists provide personalized guidance, insider expertise, and strategic planning that significantly enhances the overall experience.",
    },
    {
      q: "How far in advance should I book?",
      a: "Ideally 9–18 months in advance for the best cabin availability and pricing.",
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
const AzamaraNorwayFjordsCruises = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [readMore, setReadMore] = useState(false);
  const images = [HeroImage4, HeroImage1, HeroImage2];

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
          Azamara Norway Fjords Cruises | Luxury Norway Cruise Experts | Trips &
          Ships Luxury Travel
        </title>
        <meta
          name="title"
          content="Azamara Norway Fjords Cruises Guide by Luxury Cruise Expert Angela Hughes"
        />
        <meta
          name="description"
          content="Discover luxury Azamara Norway Fjords cruises with expert guidance from Angela Hughes, CEO of Trips & Ships Luxury Travel. Explore fjord itineraries, insider tips, best cabins, cruise planning advice, and personalized luxury cruise experiences."
        />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      <Nav />

      {/* HERO */}
      <section className="aac_hero_section">
        {images.map((img, index) => (
          <div
            key={index}
            className={`aac_hero_bg ${index === currentSlide ? "active" : ""}`}
            style={{ backgroundImage: `url(${img})` }}
          ></div>
        ))}

        <div className="aac_hero_overlay"></div>

        <div className="aac_hero_content">
          <h1>Azamara Norway Fjords Cruises</h1>

          <p className="aac_hero_subtitle">
            Discover Norway’s Most Spectacular Fjords in Luxury
          </p>

          <p className="aac_hero_text">
            There are cruises that simply visit Norway — and then there are
            Azamara Norway Fjords cruises, designed for travelers who want to
            experience the dramatic beauty of Scandinavia with depth, elegance,
            and genuine immersion.
          </p>

          {readMore && (
            <>
              <p className="aac_hero_text">
                Towering waterfalls, emerald fjords, charming Nordic villages,
                midnight sun evenings, and breathtaking mountain scenery create
                one of the world’s most unforgettable cruise journeys. But
                choosing the right cruise line for Norway matters enormously.
              </p>
              <p className="aac_hero_text">
                That is where expert guidance becomes invaluable.
              </p>

              <p className="aac_hero_text">
                Angela Hughes, CEO of Trips &amp; Ships Luxury Travel, has spent
                more than 40 years helping travelers experience the world at the
                highest level. Having traveled to over 121 countries and
                recognized globally as a luxury travel speaker, trainer, and
                cruise expert, Angela brings unmatched insight into planning
                extraordinary Norway fjords voyages.
              </p>

              <p className="aac_hero_text">
                Named the 2024 Luxury Travel Influencer of the Year by Travel
                Leaders Network and one of the Most Influential Women in Travel
                in 2026 by TravelPulse, Angela specializes in luxury cruises,
                expeditions, river cruises, safaris, and premium travel
                experiences worldwide.
              </p>
            </>
          )}

          <div className="aac_readmore_wrapper">
            <button
              className="aac_readmore_btn"
              onClick={() => setReadMore(!readMore)}
            >
              {readMore ? "Read Less" : "Read More"}
            </button>
          </div>
        </div>
      </section>

      {/* WHAT MAKES NORWAY FJORDS CRUISES SO EXTRAORDINARY */}
      <section
        className="wnf-section wnf-bg-white"
        id="wnf-extraordinary-fjords"
      >
        <div className="wnf-container">
          <div className="wnf-section-header">
            <h2 className="wnf-h2">
              What Makes Norway Fjords Cruises So Extraordinary
            </h2>
            <div className="wnf-accent-line"></div>
          </div>

          <div className="wnf-split">
            {/* Left Column: Premium Dual Image Stack */}
            <div className="wnf-image-column">
              <div className="wnf-image-stack">
                <div className="wnf-img-frame wnf-frame-primary">
                  <img
                    src={HeroImage3}
                    alt="Norway Fjord Dramatic Natural Scenery"
                    className="wnf-photo"
                  />
                </div>
                <div className="wnf-img-frame wnf-frame-secondary">
                  <img
                    src={Experience}
                    alt="Luxury cruise ship sailing through historic coastal villages"
                    className="wnf-photo"
                  />
                </div>
              </div>
            </div>

            {/* Right Column: Structured Content Blocks */}
            <div className="wnf-content-column">
              <div className="wnf-block">
                <p className="wnf-lead-text">
                  Norway fjords cruising combines:
                </p>
                <ul className="wnf-feature-list">
                  {[
                    "Dramatic natural scenery",
                    "Scandinavian culture",
                    "Historic coastal villages",
                    "Luxury scenic sailing",
                    "Outdoor adventure",
                    "Wildlife encounters",
                    "Photography opportunities",
                    "Relaxed luxury exploration",
                  ].map((feature, i) => (
                    <li key={i} className="wnf-feature-item">
                      <div className="wnf-icon-wrapper">
                        <Check size={14} />
                      </div>
                      <span className="wnf-feature-text">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="wnf-block wnf-block-destinations">
                <p className="wnf-meta-title">
                  Popular fjords and destinations often include:
                </p>
                <div className="wnf-tags-container">
                  {[
                    "Geirangerfjord",
                    "Sognefjord",
                    "Flam",
                    "Bergen",
                    "Alesund",
                    "Stavanger",
                    "Tromso",
                    "Lofoten Islands",
                  ].map((destination, i) => (
                    <span key={i} className="wnf-tag-pill">
                      {destination}
                    </span>
                  ))}
                </div>
              </div>

              <div className="wnf-footer-note">
                <p className="wnf-highlight-text">
                  The scenery is genuinely among the most spectacular in the
                  world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
WHY AZAMARA IS EXCEPTIONAL FOR NORWAY FJORDS CRUISES
════════════════════════════════════════ */}
      <section className="adg-c-section adg-c-bg-dark" id="adg-why-norway">
        <div className="adg-c-container">
          <div className="adg-c-why-grid">
            {/* LEFT — TEXT */}
            <div className="adg-c-why-left">
              <span className="adg-c-eyebrow adg-c-eyebrow-light">
                Norway Fjords Luxury
              </span>

              <h2 className="adg-c-h2 adg-c-h2-light">
                Why Azamara Is Exceptional for Norway Fjords Cruises
              </h2>

              <div className="adg-c-accent-line adg-c-accent-light"></div>

              <p className="adg-c-lead adg-c-lead-light">
                Norway is not a destination best experienced on mega ships.
              </p>

              <p className="adg-c-lead adg-c-lead-light">
                The real magic of the fjords comes from intimacy, scenic access,
                and immersive port experiences.
              </p>

              <div className="adg-c-why-features">
                <div className="adg-c-why-feature">
                  <div className="adg-c-why-feature-icon">
                    <Ship size={18} strokeWidth={1.6} />
                  </div>

                  <div className="adg-c-why-feature-text">
                    <h4 className="adg-c-why-feature-title">
                      Smaller Ships, Better Fjord Access
                    </h4>

                    <p className="adg-c-why-feature-desc">
                      Azamara’s ships can navigate scenic fjord regions and
                      smaller ports more comfortably than larger vessels.
                    </p>
                  </div>
                </div>

                <div className="adg-c-why-feature">
                  <div className="adg-c-why-feature-icon">
                    <MapPin size={18} strokeWidth={1.6} />
                  </div>

                  <div className="adg-c-why-feature-text">
                    <h4 className="adg-c-why-feature-title">
                      Destination Immersion
                    </h4>

                    <p className="adg-c-why-feature-desc">
                      Longer port stays and immersive itineraries allow
                      travelers to experience Norway beyond surface-level
                      sightseeing.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT — FEATURE CARDS */}
            <div className="adg-c-why-right" style={{ marginTop: "41px" }}>
              <div className="adg-c-why-card">
                <span className="adg-c-why-card-label">
                  Why Luxury Travelers Prefer Azamara
                </span>

                <p className="adg-c-why-card-desc">
                  Azamara delivers a more refined and immersive Norway cruise
                  experience with:
                </p>

                <div className="adg-c-pill-grid">
                  {[
                    "Access to smaller, less crowded ports",
                    "More scenic fjord navigation",
                    "Longer port stays",
                    "More overnight experiences",
                    "Refined luxury atmosphere",
                    "Destination-focused itineraries",
                    "Exceptional personalized service",
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

      {/* ===== EXPERIENCE ===== */}
      <section className="experience">
        <div className="section-inner wide">
          <h2 className="afc-h2" style={{ textAlign: "center" }}>
            The Experience Onboard
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

      {/* FLEET OVERVIEW TABLE */}
      <section className="Asc-section Asc-bg-soft" id="Asc-fleet">
        <div className="Asc-container">
          <div className="Asc-section-header">
            <h2 className="Asc-h2">Azamara vs Other Norway Cruise Lines</h2>

            <div className="Asc-accent-line"></div>
          </div>

          <div className="Asc-table-wrapper">
            <table className="Asc-fleet-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Azamara</th>
                  <th>Viking</th>
                  <th>Seabourn</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>
                    <strong>Ship Size</strong>
                  </td>
                  <td>Small</td>
                  <td>Medium</td>
                  <td>Small Luxury</td>
                </tr>

                <tr>
                  <td>
                    <strong>Atmosphere</strong>
                  </td>
                  <td>Relaxed Luxury</td>
                  <td>Cultural</td>
                  <td>Ultra Luxury</td>
                </tr>

                <tr>
                  <td>
                    <strong>Fjord Access</strong>
                  </td>
                  <td>Excellent</td>
                  <td>Good</td>
                  <td>Excellent</td>
                </tr>

                <tr>
                  <td>
                    <strong>Nightlife</strong>
                  </td>
                  <td>Moderate</td>
                  <td>Minimal</td>
                  <td>Elegant</td>
                </tr>

                <tr>
                  <td>
                    <strong>Included Amenities</strong>
                  </td>
                  <td>Strong Value</td>
                  <td>Strong</td>
                  <td>Higher-End Luxury</td>
                </tr>

                <tr>
                  <td>
                    <strong>Destination Immersion</strong>
                  </td>
                  <td>Excellent</td>
                  <td>Excellent</td>
                  <td>Excellent</td>
                </tr>

                <tr>
                  <td>
                    <strong>Price Point</strong>
                  </td>
                  <td>Premium</td>
                  <td>Premium</td>
                  <td>Ultra Premium</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* VIDEO SECTION */}
      <section
        className="Asc-video-section"
        id="Asc-video"
        style={{ backgroundColor: "var(--bg-white)" }}
      >
        <div className="Asc-container">
          <div className="Asc-section-header">
            <h2 className="Asc-h2">Small Ship Cruising with Azamara</h2>
            <div className="Asc-accent-line"></div>

            <p className="Asc-video-intro">
              Discover the charm of small ship cruising with Azamara, where
              intimate ships, immersive destinations, and personalized
              experiences bring travelers closer to the world.
            </p>
          </div>

          <div className="Asc-video-wrapper">
            <div className="Asc-video-frame">
              <iframe
                src="https://www.youtube.com/embed/MbtzeUXewyQ"
                title="Experience Small Ship Cruising with Azamara"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* BEST TIME FOR AZAMARA NORWAY FJORDS CRUISES */}
      <section className="Asc-section Asc-bg-soft" id="Asc-norway-best-time">
        <div className="Asc-container">
          <div className="Asc-section-header">
            <h2 className="Asc-h2">
              Best Time for Azamara Norway Fjords Cruises
            </h2>
            <div className="Asc-accent-line"></div>
          </div>

          <div className="Asc-seasons-grid">
            {/* May and June */}
            <div className="Asc-season-card">
              <div className="Asc-season-header-block">
                <h3 className="Asc-season-title">May and June</h3>
              </div>
              <div className="Asc-season-body">
                <span className="Asc-season-meta">Best for:</span>
                <ul className="Asc-season-bullets">
                  {[
                    "Waterfalls at peak flow",
                    "Fewer crowds",
                    "Fresh greenery",
                    "Cooler temperatures",
                  ].map((item, i) => (
                    <li key={i}>
                      <div className="Asc-season-icon">
                        <Check size={14} />
                      </div>
                      <span className="Asc-season-text">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* July and August */}
            <div className="Asc-season-card">
              <div className="Asc-season-header-block">
                <h3 className="Asc-season-title">July and August</h3>
              </div>
              <div className="Asc-season-body">
                <span className="Asc-season-meta">Best for:</span>
                <ul className="Asc-season-bullets">
                  {[
                    "Warmest weather",
                    "Midnight sun experiences",
                    "Long daylight hours",
                    "Peak scenic cruising",
                  ].map((item, i) => (
                    <li key={i}>
                      <div className="Asc-season-icon">
                        <Check size={14} />
                      </div>
                      <span className="Asc-season-text">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* September */}
            <div className="Asc-season-card">
              <div className="Asc-season-header-block">
                <h3 className="Asc-season-title">September</h3>
              </div>
              <div className="Asc-season-body">
                <span className="Asc-season-meta">Best for:</span>
                <ul className="Asc-season-bullets">
                  {[
                    "Fall colors",
                    "Lower pricing",
                    "Fewer tourists",
                    "Photography",
                  ].map((item, i) => (
                    <li key={i}>
                      <div className="Asc-season-icon">
                        <Check size={14} />
                      </div>
                      <span className="Asc-season-text">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERT INSIGHT */}
      <AacExpertSection />

      {/* BEST CABINS FOR NORWAY FJORDS CRUISES */}
      <section className="afc-section afc-bg-white" id="afc-norway-cabins">
        <div className="afc-container">
          <div className="afc-section-header">
            <h2 className="afc-h2">Best Cabins for Norway Fjords Cruises</h2>
            <div className="afc-accent-line"></div>
          </div>

          {/* Feature Split Layout */}
          <div className="afc-split-layout">
            {/* Left Column: Context Card & Top Recommendations */}
            <div className="afc-content-side">
              <div className="afc-insight-card">
                <p className="afc-lead-text">
                  <strong>
                    For Norway fjords itineraries, balcony cabins are often
                    worth the investment.
                  </strong>
                </p>
                <div className="afc-why-box">
                  <span className="afc-why-title">Why?</span>
                  <p className="afc-why-text">
                    Because some of the most breathtaking scenery happens during
                    scenic cruising hours early in the morning or late evening.
                  </p>
                </div>
              </div>

              <div className="afc-recommendations-wrapper">
                <h3 className="afc-sub-title">Top Recommendations:</h3>
                <div className="afc-rec-grid">
                  {[
                    "Veranda staterooms",
                    "Club Continent Suites",
                    "Spa Suites for added luxury",
                  ].map((item, i) => (
                    <div key={i} className="afc-rec-card">
                      <div className="afc-rec-icon">
                        <Check size={18} />
                      </div>
                      <span className="afc-rec-label">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Visual Image & Strategic Selection Metrics */}
            <div className="afc-media-side">
              <div className="afc-image-wrapper">
                <img
                  src={HeroImage6}
                  alt="Azamara luxury balcony scenic view"
                  className="afc-showcase-image"
                />
              </div>

              <div className="afc-strategy-box">
                <p className="afc-strategy-lead">
                  Angela Hughes and the Trips & Ships Luxury Travel team help
                  clients select cabins strategically based on:
                </p>
                <div className="afc-strategy-tags">
                  {[
                    "Scenic orientation",
                    "Motion preferences",
                    "Privacy",
                    "Accessibility",
                    "Budget",
                  ].map((tag, idx) => (
                    <span key={idx} className="afc-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── COMMON MISTAKES ───────────────────────────────────────── */}
      <section className="Lfsg-section Lfsg-bg-dark" id="Lfsg-mistakes">
        <div className="Lfsg-container">
          <div className="Lfsg-section-header">
            <h2 className="Lfsg-h2-white">Common Mistakes Travelers Make</h2>

            <div className="Lfsg-accent-line-white" />
          </div>

          <div className="Lfsg-mistakes-grid">
            {[
              {
                title: "Booking Too Late",
                desc: "The best Norway itineraries and balcony cabins sell quickly.",
              },

              {
                title: "Choosing Large Ships",
                desc: "Large vessels can reduce the intimacy of fjord cruising.",
              },

              {
                title: "Underestimating Weather",
                desc: "Norway weather changes rapidly.",
              },

              {
                title: "Overpacking",
                desc: "Layering is far more effective than heavy clothing.",
              },

              {
                title: "Ignoring Port Timing",
                desc: "Long daylight hours affect excursion planning.",
              },
              {
                title: "Not Booking Excursions Early",
                desc: "Popular Norway fjord excursions and scenic experiences often sell out in advance.",
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
              Is An Azamara Norway Fjords Cruise Right For You?
            </h2>

            <div className="Asc-accent-line"></div>

            <p className="Asc-section-intro">
              Azamara Norway Fjords cruises appeal most to travelers seeking
              immersive luxury <br /> experiences, scenic exploration, and
              smaller-ship sophistication.
            </p>
          </div>

          <div className="Asc-who-grid">
            {/* BEST FOR */}
            <div className="Asc-who-card Asc-who-yes">
              <h3 className="Asc-who-title">Best For</h3>

              <ul className="Asc-who-list">
                {[
                  "Luxury travelers",
                  "Scenic cruise lovers",
                  "Photography enthusiasts",
                  "Couples",
                  "Experienced cruisers",
                  "Travelers seeking immersive destinations",
                  "Sophisticated travelers wanting smaller ships",
                ].map((item, i) => (
                  <li key={i}>
                    <Check size={16} className="Asc-icon-green" />

                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* NOT BEST FOR */}
            <div className="Asc-who-card Asc-who-no">
              <h3 className="Asc-who-title">Not Best For</h3>

              <ul className="Asc-who-list">
                {[
                  "Travelers wanting water parks or mega-ship entertainment",
                  "Families seeking heavy kid-focused programming",
                  "Travelers prioritizing nightlife over destinations",
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

      {/* VIDEO SECTION */}
      <section
        className="Asc-video-section"
        id="Asc-video"
        style={{ backgroundColor: "var(--bg-white)" }}
      >
        <div className="Asc-container">
          <div className="Asc-section-header">
            <h2 className="Asc-h2">Azamara 2026 World Cruise</h2>

            <div className="Asc-accent-line"></div>

            <p className="Asc-video-intro">
              Explore Azamara’s extraordinary 2026 World Cruise journey
              featuring immersive destinations, extended stays, cultural
              discovery, and the boutique luxury cruising experience that makes
              Azamara ideal for travelers seeking deeper global exploration.
            </p>
          </div>

          <div className="Asc-video-wrapper">
            <div className="Asc-video-frame">
              <iframe
                src="https://www.youtube.com/embed/gF5XBSByguQ"
                title="Azamara 2026 World Cruise"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* ANGELA HUGHES AUTHORITY BOX */}
      <section className="Adg-expert-section" id="Asc-expert-insight">
        <div className="Asc-container">
          {/* TOP HEADING */}
          <div className="Adg-expert-heading">
            <span className="Adg-expert-eyebrow">Luxury Travel Authority</span>

            <h2 className="Adg-expert-title">Meet Angela Hughes</h2>

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
                      icon: <Award size={16} />,
                      label: "Founder of Luxury Travel University",
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
                      icon: <Users size={16} />,
                      label: "Global luxury travel speaker and trainer",
                    },
                    {
                      icon: <Users size={16} />,
                      label: "Weekly travel industry columnist",
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
                        "Named one of the Most Influential Women in Travel in 2026",
                    },
                    {
                      icon: <Award size={16} />,
                      label: "Featured in major travel publications globally",
                    },
                    {
                      icon: <Ship size={16} />,
                      label:
                        "Specialist in luxury cruises, safaris, expeditions, and premium travel",
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

      {/* PLANNING ADVICE */}
      <section
        className="Avr-planning-section"
        id="Asc-planning-advice"
        style={{ backgroundColor: "var(--bg-white)" }}
      >
        <div className="Asc-container">
          {/* HEADING */}
          <div className="Avr-planning-heading">
            <span className="Avr-planning-eyebrow">Luxury Cruise Planning</span>

            <h2 className="Avr-planning-title">
              Why Travelers Trust Trips &amp; Ships Luxury Travel
            </h2>

            <div className="Avr-planning-divider"></div>
          </div>

          {/* TWO-PANEL GRID */}
          <div className="Avr-planning-grid">
            {/* LEFT PANEL */}
            <div className="Avr-planning-left">
              <div className="Avr-planning-left-deco">&ldquo;</div>

              <h3 className="Avr-planning-left-title">
                Luxury Cruise Planning Requires Expert Guidance
              </h3>

              <p className="Avr-planning-left-body">
                Luxury cruise planning requires far more than simply booking a
                cabin.
              </p>

              <div className="Avr-planning-alert">
                <ShieldCheck size={18} className="Avr-planning-alert-icon" />

                <p className="Avr-planning-alert-text">
                  Angela Hughes’ decades of expertise help travelers avoid
                  costly mistakes while creating truly exceptional luxury travel
                  experiences.
                </p>
              </div>
            </div>

            {/* RIGHT PANEL */}
            <div className="Avr-planning-right">
              <p className="Avr-planning-right-intro">
                Clients working with Trips &amp; Ships Luxury Travel receive:
              </p>

              <div className="Avr-planning-benefits-grid">
                {[
                  {
                    icon: <MapPin size={18} />,
                    label: "Personalized cruise recommendations",
                  },
                  {
                    icon: <Compass size={18} />,
                    label: "Expert itinerary matching",
                  },
                  {
                    icon: <Ship size={18} />,
                    label: "Luxury cruise comparisons",
                  },
                  {
                    icon: <Star size={18} />,
                    label: "Pre/post cruise planning",
                  },
                  { icon: <Award size={18} />, label: "Hotel coordination" },
                  { icon: <Plane size={18} />, label: "Airfare strategy" },
                  {
                    icon: <Users size={18} />,
                    label: "Shore excursion guidance",
                  },
                  {
                    icon: <Shield size={18} />,
                    label: "Concierge-level support",
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
            alt="Azamara Norway Fjords Cruise"
            className="Asc-help-bg-img"
          />
          <div className="Asc-help-overlay"></div>
        </div>

        <div className="Asc-container">
          <div className="Asc-help-card">
            <div className="Asc-help-content">
              <div className="Asc-help-header">
                <span className="Asc-help-eyebrow">
                  Luxury Norway Fjords Cruise Planning
                </span>

                <h2 className="Asc-help-h2">
                  Start Planning Your Azamara Norway Fjords Cruise
                </h2>

                <div className="Asc-help-accent"></div>
              </div>

              <div className="Asc-help-grid">
                {/* LEFT SIDE */}
                <div className="Asc-help-info">
                  <p className="Asc-help-intro">
                    Norway fjords cruises are not simply vacations — they are
                    transformative travel experiences.
                  </p>

                  <p className="Asc-help-intro">
                    The right itinerary, cabin, timing, and cruise line can make
                    the difference between a good trip and an unforgettable one.
                  </p>

                  <p className="Asc-help-intro">
                    With expert guidance from Angela Hughes and Trips &amp;
                    Ships Luxury Travel, travelers gain access to insider
                    expertise, personalized planning, and luxury cruise insight
                    built on decades of global experience.
                  </p>

                  <div className="Asc-help-btn-container">
                    <button className="Asc-help-cta-btn">
                      Plan Your Norway Fjords Cruise
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>

                {/* RIGHT SIDE */}
                <div className="Asc-help-list-box">
                  <h3 className="Asc-help-list-title">Ready to Plan?</h3>

                  <p className="Asc-help-intro">
                    Contact Trips &amp; Ships Luxury Travel today to begin
                    designing your perfect Azamara Norway Fjords cruise
                    experience.
                  </p>

                  <ul className="Asc-help-bullets">
                    {[
                      "Personalized Azamara cruise recommendations",
                      "Luxury cabin and suite guidance",
                      "Destination-focused itinerary planning",
                      "Customized Norway fjords experiences",
                      "Expert luxury cruise planning support",
                    ].map((item, i) => (
                      <li key={i}>
                        <div className="Asc-bullet-icon">
                          <Check size={14} strokeWidth={3} />
                        </div>

                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AzamaraNorwayFjordsCruises;
