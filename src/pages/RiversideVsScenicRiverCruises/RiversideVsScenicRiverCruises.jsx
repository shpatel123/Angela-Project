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
  ChefHat,
  Utensils,
  Sparkles,
  Compass,
  HeartHandshake,
  Plane,
  BadgePercent,
  Home,
  MapPinned,
  ShieldCheck,
  DollarSign,
  Waves,
  Bike,
} from "lucide-react";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela.jpeg";

// NOTE: Replace these with your own Riverside vs. Scenic images once available.
// Folder suggestion: src/assets/RiversidevsScenic/
// import HeroImage1 from "../../assets/RiversidevsScenic/riverside-ship.jpg";
// import HeroImage2 from "../../assets/RiversidevsScenic/scenic-ship.jpg";
// import HeroImage3 from "../../assets/RiversidevsScenic/riverside-ship2.jpg";
// import RiversideOverviewImage from "../../assets/RiversidevsScenic/riverside-overview.jpg";
// import ScenicOverviewImage from "../../assets/RiversidevsScenic/scenic-overview.jpg";
// import RiversideAtmosphereImage from "../../assets/RiversidevsScenic/riverside-atmosphere.jpg";
// import ScenicAtmosphereImage from "../../assets/RiversidevsScenic/scenic-atmosphere.jpg";
// import RiversideFleetImage from "../../assets/RiversidevsScenic/riverside-fleet.jpg";
// import ScenicFleetImage from "../../assets/RiversidevsScenic/scenic-fleet.jpg";
// import RiversideDiningImage from "../../assets/RiversidevsScenic/riverside-dining.jpg";
// import ScenicDiningImage from "../../assets/RiversidevsScenic/scenic-dining.jpg";
// import RiversideSuiteImage from "../../assets/RiversidevsScenic/riverside-suite.jpg";
// import ScenicSuiteImage from "../../assets/RiversidevsScenic/scenic-suite.jpg";
// import RiversideVsScenicCtaImage from "../../assets/RiversidevsScenic/riverside-scenic-cta.jpg";

import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import "../RiversideLuxuryCruisesReviews/RiversideLuxuryCruisesReviews.css";

// Commented out images for comparison sections
// import RiversideImage from "../../assets/VikingDanubeRiverCruises/AmaSonata_Budapest_Parliment_building.webp";
// import ScenicImage from "../../assets/VikingRiverCruises/DE_Passau_Danube.webp";

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "Trips & Ships Luxury Travel",
      url: "https://www.tripsandships.com",
      logo: "https://www.tripsandships.com/Copy-of-TRIPSSHIPS-e1592486640831.webp",
      sameAs: [
        "https://www.facebook.com/tripsandships/",
        "https://www.instagram.com/tripsandshipsluxurytravel",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+1-603-860-3274",
        email: "sales@tripsandships.com",
        contactType: "customer service",
      },
    },
    {
      "@type": "TravelAgency",
      name: "Trips & Ships Luxury Travel",
      url: "https://www.tripsandships.com",
      logo: "https://www.tripsandships.com/Copy-of-TRIPSSHIPS-e1592486640831.webp",
      image: "https://www.tripsandships.com/Copy-of-TRIPSSHIPS-e1592486640831.webp",
      founder: { "@type": "Person", name: "Angela Hughes" },
      areaServed: "Worldwide",
      priceRange: "$$$$",
      telephone: "+1-603-860-3274",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Orlando",
        addressRegion: "FL",
        addressCountry: "US",
      },
    },
    {
      "@type": "Person",
      name: "Angela Hughes",
      jobTitle:
        "CEO, Trips & Ships Luxury Travel; Founder, Luxury Travel University",
      worksFor: {
        "@type": "Organization",
        name: "Trips & Ships Luxury Travel",
      },
      description:
        "Luxury travel expert with 40+ years in the travel industry and personal travel to 121+ countries. Global luxury travel speaker and trainer, weekly industry columnist, Travel Leaders Network Advisory Board member, 2024 Luxury Travel Influencer of the Year, and named one of the Most Influential Women in Travel in 2026 by TravelPulse.",
      award: [
        "2024 Luxury Travel Influencer of the Year — Travel Leaders Network",
        "2026 Most Influential Women in Travel — TravelPulse",
      ],
    },
    {
      "@type": "WebPage",
      name: "Riverside vs. Scenic River Cruises | Which Luxury River Cruise Is Better?",
      description:
        "Compare Riverside and Scenic River Cruises. Discover differences in ships, suites, dining, service, itineraries, inclusions, pricing, excursions, and which luxury river cruise line is the best fit for your travel style.",
      url: "https://www.tripsandships.com/riverside-vs-scenic-river-cruises",
      author: { "@type": "Person", name: "Angela Hughes" },
      publisher: {
        "@type": "Organization",
        name: "Trips & Ships Luxury Travel",
      },
      datePublished: "2026-08-01",
      dateModified: "2026-08-01",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.tripsandships.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "River Cruises",
          item: "https://www.tripsandships.com/river-cruises",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Riverside Luxury Cruises",
          item: "https://www.tripsandships.com/riverside-luxury-cruises",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Riverside vs. Scenic",
          item: "https://www.tripsandships.com/riverside-vs-scenic-river-cruises",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Is Riverside more luxurious than Scenic?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Both are luxury cruise lines. Riverside emphasizes boutique elegance and spacious suites, while Scenic focuses on an ultra all-inclusive luxury experience.",
          },
        },
        {
          "@type": "Question",
          name: "Which has larger suites?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Riverside generally offers larger suite accommodations.",
          },
        },
        {
          "@type": "Question",
          name: "Which cruise line includes butler service?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Scenic provides butler service for every suite category.",
          },
        },
        {
          "@type": "Question",
          name: "Which has better excursions?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Scenic includes a wider variety of excursions and exclusive cultural experiences.",
          },
        },
        {
          "@type": "Question",
          name: "Which is better for first-time river cruisers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Both are excellent. Scenic offers more inclusions, while Riverside provides a quieter boutique atmosphere.",
          },
        },
        {
          "@type": "Question",
          name: "Which is better for couples?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Both appeal to couples, though Riverside's intimate atmosphere is especially popular for anniversaries and romantic vacations.",
          },
        },
        {
          "@type": "Question",
          name: "Which cruise line costs more?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Scenic is typically priced slightly higher but includes more amenities and services.",
          },
        },
        {
          "@type": "Question",
          name: "Which offers more destinations?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Scenic has a significantly larger worldwide river cruise network.",
          },
        },
        {
          "@type": "Question",
          name: "Is Riverside worth considering over Scenic?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. Travelers who value spacious accommodations and personalized boutique service often prefer Riverside.",
          },
        },
        {
          "@type": "Question",
          name: "Should I book through a travel advisor?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. A luxury travel advisor can compare both cruise lines, explain promotions, and recommend the best itinerary for your travel goals.",
          },
        },
        {
          "@type": "Question",
          name: "Are airport transfers and shore excursions included in the price?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Scenic is truly all-inclusive, covering luxury airport transfers and all shore excursions. Riverside covers gourmet dining and select excursions, but transfers and premium shore tours are typically extra.",
          },
        },
        {
          "@type": "Question",
          name: "Which cruise line has a better onboard wellness experience?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Scenic offers an extensive wellness setup, including salt therapy lounges, wellness classes, and onboard electric bikes. Riverside focuses on quiet relaxation, offering standard fitness rooms, sun decks, and spa treatments.",
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
      q: "Is Riverside more luxurious than Scenic?",
      a: "Both are luxury cruise lines. Riverside emphasizes boutique elegance and spacious suites, while Scenic focuses on an ultra all-inclusive luxury experience.",
    },
    {
      q: "Which has larger suites?",
      a: "Riverside generally offers larger suite accommodations.",
    },
    {
      q: "Which cruise line includes butler service?",
      a: "Scenic provides butler service for every suite category.",
    },
    {
      q: "Which has better excursions?",
      a: "Scenic includes a wider variety of excursions and exclusive cultural experiences.",
    },
    {
      q: "Which is better for first-time river cruisers?",
      a: "Both are excellent. Scenic offers more inclusions, while Riverside provides a quieter boutique atmosphere.",
    },
    {
      q: "Which is better for couples?",
      a: "Both appeal to couples, though Riverside's intimate atmosphere is especially popular for anniversaries and romantic vacations.",
    },
    {
      q: "Which cruise line costs more?",
      a: "Scenic is typically priced slightly higher but includes more amenities and services.",
    },
    {
      q: "Which offers more destinations?",
      a: "Scenic has a significantly larger worldwide river cruise network.",
    },
    {
      q: "Is Riverside worth considering over Scenic?",
      a: "Absolutely. Travelers who value spacious accommodations and personalized boutique service often prefer Riverside.",
    },
    {
      q: "Should I book through a travel advisor?",
      a: "Yes. A luxury travel advisor can compare both cruise lines, explain promotions, and recommend the best itinerary for your travel goals.",
    },
    {
      q: "Are airport transfers and shore excursions included in the price?",
      a: "Scenic is truly all-inclusive, covering luxury airport transfers and all shore excursions. Riverside covers gourmet dining and select excursions, but transfers and premium shore tours are typically extra.",
    },
    {
      q: "Which cruise line has a better onboard wellness experience?",
      a: "Scenic offers an extensive wellness setup, including salt therapy lounges, wellness classes, and onboard electric bikes. Riverside focuses on quiet relaxation, offering standard fitness rooms, sun decks, and spa treatments.",
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

const RiversideVsScenic = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [ctaReadMore, setCtaReadMore] = useState(false);
  const [readMore, setReadMore] = useState(false);
  const images = [];

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
          Riverside vs. Scenic River Cruises | Which Luxury River Cruise Is
          Better?
        </title>
        <meta
          name="title"
          content="Riverside vs. Scenic | Luxury River Cruise Comparison"
        />
        <meta
          name="description"
          content="Compare Riverside and Scenic River Cruises. Discover differences in ships, suites, dining, service, itineraries, inclusions, pricing, excursions, and which luxury river cruise line is the best fit for your travel style."
        />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      <Nav />

      {/* HERO */}
      <section className="Scenic_hero_section">
        {images.map((img, index) => (
          <div
            key={index}
            className={`Scenic_hero_bg ${index === currentSlide ? "active" : ""}`}
            style={{ backgroundImage: `url(${img})` }}
          ></div>
        ))}

        <div className="Scenic_hero_overlay"></div>

        <div className="Scenic_hero_content">
          <h1>
            Riverside vs. Scenic River Cruises: <br /> Which Luxury River
            Cruise Is Better?
          </h1>

          <p>
            Choosing between Riverside Luxury Cruises and Scenic Luxury
            Cruises &amp; Tours comes down to one question: what kind of
            luxury experience are you looking for? Both cruise lines deliver
            exceptional European river cruises, outstanding dining, and
            beautiful itineraries.
          </p>

          {/* READ MORE CONTENT */}
          {readMore && (
            <>
              <p>
                However, they appeal to different travelers. Riverside focuses
                on spacious suites, boutique hospitality, and a relaxed
                onboard atmosphere, while Scenic emphasizes an ultra
                all-inclusive experience with extensive excursions, premium
                amenities, and a wider global river cruise network.
              </p>

              <p
                style={{
                  fontStyle: "italic",
                  fontWeight: "600",
                  margin: "10px 0",
                }}
              >
                “The right choice depends less on which cruise line is better
                and more on which travel style matches you.”
              </p>

              <p>
                As CEO of Trips & Ships Luxury Travel, founder of Luxury
                Travel University, and a global luxury travel authority with
                more than 40 years in the industry and travel experience
                across 121+ countries, Angela Hughes has helped luxury
                travelers navigate premium river cruise decisions for
                decades.
              </p>

              <p>
                This guide breaks down everything from ships and suites to
                dining, service, excursions, wellness, destinations, and
                pricing — beyond the marketing brochures.
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
          <div className="rlc-page-cta-container" style={{ marginTop: "24px" }}>
            <Link to="/contact" className="rlc-page-cta-btn rlc-btn-light" style={{ textDecoration: "none" }}>
              Start Planning Your Riverside Cruise
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* QUICK COMPARISON TABLE */}
      <section className="Asc-section Asc-bg-white" id="Asc-fleet">
        <div className="Asc-container">
          <div className="Asc-section-header">
            <h2 className="Asc-h2">Riverside vs Scenic Quick Comparison</h2>
            <div className="Asc-accent-line"></div>
          </div>

          <div className="Asc-table-wrapper">
            <table className="Asc-fleet-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Riverside</th>
                  <th>Scenic</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>
                    <strong>Atmosphere</strong>
                  </td>
                  <td>Boutique &amp; relaxed</td>
                  <td>Ultra-luxury, more structured</td>
                </tr>

                <tr>
                  <td>
                    <strong>Fleet Size</strong>
                  </td>
                  <td>3 ships</td>
                  <td>Large global fleet</td>
                </tr>

                <tr>
                  <td>
                    <strong>Suites</strong>
                  </td>
                  <td>Very spacious</td>
                  <td>Spacious with butler service</td>
                </tr>

                <tr>
                  <td>
                    <strong>Dining</strong>
                  </td>
                  <td>Gourmet European cuisine</td>
                  <td>Multiple fine dining options</td>
                </tr>

                <tr>
                  <td>
                    <strong>Excursions</strong>
                  </td>
                  <td>Selected included tours</td>
                  <td>Extensive included excursions</td>
                </tr>

                <tr>
                  <td>
                    <strong>Butler Service</strong>
                  </td>
                  <td>Select suites</td>
                  <td>Included for all suites</td>
                </tr>

                <tr>
                  <td>
                    <strong>Best For</strong>
                  </td>
                  <td>Boutique luxury</td>
                  <td>All-inclusive luxury</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── RIVERSIDE VS SCENIC COMPARISON SECTION ───────────────────── */}
      <section className="rlc-rvs-section" id="riverside-vs-scenic-comparison">
        <div className="rlc-rvs-container">
          <div className="rlc-rvs-grid">
            {/* Riverside Card */}
            <div className="rlc-rvs-card">
              <div className="rlc-rvs-image-wrap">
                <img
                  //   src={RiversideImage}
                  alt="Boutique Luxury River Cruise Ship in Budapest"
                  className="rlc-rvs-card-img"
                />
              </div>
              <h2 className="rlc-rvs-card-title">About Riverside Luxury Cruises</h2>
              <p className="rlc-rvs-card-intro">
                Riverside operates an intimate fleet of luxury river ships designed around comfort, personalized service, and elegant European travel.
              </p>

              <h3 className="rlc-rvs-list-title">Highlights include:</h3>
              <ul className="rlc-rvs-list">
                {[
                  "Spacious all-suite accommodations",
                  "Relaxed luxury",
                  "Exceptional cuisine",
                  "Boutique atmosphere",
                  "Personalized service",
                  "Scenic European itineraries",
                ].map((item, i) => (
                  <li key={i} className="rlc-rvs-item">
                    <Check size={16} className="rlc-rvs-icon" />
                    <span className="rlc-rvs-text">{item}</span>
                  </li>
                ))}
              </ul>

              <p className="rlc-rvs-footer-quote">
                Riverside feels like a luxury boutique hotel floating through Europe.
              </p>
            </div>

            {/* Scenic Card */}
            <div className="rlc-rvs-card">
              <div className="rlc-rvs-image-wrap">
                <img
                  //   src={ScenicImage}
                  alt="Scenic Luxury River Cruise Ship sailing in Germany"
                  className="rlc-rvs-card-img"
                />
              </div>
              <h2 className="rlc-rvs-card-title">About Scenic River Cruises</h2>
              <p className="rlc-rvs-card-intro">
                Scenic is one of the world's most recognized luxury river cruise brands.
              </p>

              <h3 className="rlc-rvs-list-title">The cruise line is known for:</h3>
              <ul className="rlc-rvs-list">
                {[
                  "Truly all-inclusive pricing",
                  "Butler service for every suite",
                  "Premium beverages",
                  "Scenic Freechoice excursions",
                  "Electric bicycles",
                  "Luxury airport transfers",
                  "Extensive worldwide itineraries",
                ].map((item, i) => (
                  <li key={i} className="rlc-rvs-item">
                    <Check size={16} className="rlc-rvs-icon" />
                    <span className="rlc-rvs-text">{item}</span>
                  </li>
                ))}
              </ul>

              <p className="rlc-rvs-footer-quote">
                Scenic delivers one of the industry's most comprehensive luxury experiences.
              </p>
            </div>
          </div>
          <div className="rlc-cta-btn-wrapper" style={{ display: "flex", justifyContent: "center", width: "100%", marginTop: "40px" }}>
            <Link to="/contact" className="rlc-page-cta-btn">
              Start Planning Your Riverside Cruise
            </Link>
          </div>
        </div>
      </section>

      {/* ── SHIPS & FLEET SECTION ───────────────────────────────────── */}
      <section className="rlc-flt-section" id="riverside-vs-scenic-fleet">
        <div className="rlc-flt-container">
          <div className="rlc-flt-header">
            <span className="rlc-flt-eyebrow">Vessels &amp; Capacity</span>
            <h2 className="rlc-flt-title">Ships &amp; Fleet</h2>
            <div className="rlc-flt-accent"></div>
          </div>

          <div className="rlc-flt-grid">
            {/* Riverside Card */}
            <div className="rlc-flt-card">
              <div className="rlc-rvs-image-wrap">
                <img
                  //   src={RiversideFleetImage}
                  alt="Riverside Boutique River Cruise Fleet"
                  className="rlc-rvs-card-img"
                />
              </div>
              <h3 className="rlc-flt-brand">Riverside</h3>

              <h4 className="rlc-flt-sub-title">Current Fleet:</h4>
              <div className="rlc-flt-ship-tags">
                {["Riverside Mozart", "Riverside Debussy", "Riverside Ravel"].map((ship, idx) => (
                  <span key={idx} className="rlc-flt-tag">{ship}</span>
                ))}
              </div>

              <p className="rlc-flt-desc">
                Its smaller fleet allows Riverside to focus on highly personalized service and carefully curated European itineraries.
              </p>

              <div className="rlc-flt-best-for">
                <div className="rlc-flt-best-icon-box">
                  <Sparkles size={20} />
                </div>
                <div className="rlc-flt-best-content">
                  <span className="rlc-flt-best-title">Best For:</span>
                  <p className="rlc-flt-best-text">
                    Travelers who appreciate intimate luxury and boutique experiences.
                  </p>
                </div>
              </div>
            </div>

            {/* Scenic Card */}
            <div className="rlc-flt-card">
              <div className="rlc-rvs-image-wrap">
                <img
                  //   src={ScenicFleetImage}
                  alt="Scenic Luxury River Cruise Fleet"
                  className="rlc-rvs-card-img"
                />
              </div>
              <h3 className="rlc-flt-brand">Scenic</h3>

              <p className="rlc-flt-desc" style={{ marginBottom: "20px" }}>
                Scenic operates one of Europe's largest fleets of luxury river ships, along with expedition yachts.
              </p>

              <h4 className="rlc-flt-sub-title">Popular Ships Include:</h4>
              <div className="rlc-flt-ship-tags">
                {[
                  "Scenic Sapphire",
                  "Scenic Jasper",
                  "Scenic Opal",
                  "Scenic Crystal",
                  "Scenic Azure",
                  "Scenic Amber",
                ].map((ship, idx) => (
                  <span key={idx} className="rlc-flt-tag">{ship}</span>
                ))}
              </div>

              <p className="rlc-flt-desc">
                Scenic also offers river cruises in Southeast Asia and luxury ocean expeditions.
              </p>

              <div className="rlc-flt-best-for">
                <div className="rlc-flt-best-icon-box">
                  <Compass size={20} />
                </div>
                <div className="rlc-flt-best-content">
                  <span className="rlc-flt-best-title">Best For:</span>
                  <p className="rlc-flt-best-text">
                    Travelers seeking the widest variety of destinations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* DINING COMPARISON */}
      <section className="azs-dining-section" id="azs-dining">
        <div className="azs-container">
          <div className="azs-section-header">
            <h2 className="azs-section-title">Dining Experience</h2>
            <div className="azs-section-accent"></div>
            <p className="azs-section-subtitle">
              Regional European Cuisine vs. Multiple Fine Dining Venues
            </p>
          </div>

          <div className="azs-dining-grid">
            {/* Riverside Card */}
            <div className="azs-dining-card azs-azamara-dining">
              <div className="azs-dining-image-wrap">
                <img
                  //   src={RiversideDiningImage}
                  alt="Riverside gourmet European dining"
                  className="azs-dining-img"
                />
                <div className="azs-dining-badge-wrapper">
                  <span className="azs-dining-badge azs-azamara-badge">
                    Gourmet European Cuisine
                  </span>
                </div>
              </div>
              <div className="azs-dining-content">
                <div className="azs-dining-header">
                  <div className="azs-dining-icon-circle">
                    <Utensils size={24} className="azs-dining-icon" />
                  </div>
                  <h3 className="azs-dining-title">Riverside Dining</h3>
                </div>
                <p className="azs-dining-intro">
                  Dining emphasizes regional specialties, fresh seasonal
                  ingredients, and elegant presentation in a relaxed
                  atmosphere.
                </p>
                <div className="azs-dining-body">
                  <h4 className="azs-dining-group-title">Highlights include:</h4>
                  <ul className="azs-dining-list">
                    {[
                      "Regional specialties",
                      "Fresh seasonal ingredients",
                      "Elegant presentation",
                      "Menus reflecting each destination visited",
                    ].map((item, idx) => (
                      <li key={idx} className="azs-dining-list-item">
                        <div className="azs-dining-list-icon-wrapper">
                          <Check size={14} className="azs-dining-list-icon" />
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="azs-dining-divider"></div>
                  <div className="azs-dining-highlight-box azs-azamara-highlight">
                    <p className="azs-dining-highlight-text">
                      A relaxed, elegant dining experience true to Europe's
                      classic river regions.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Scenic Card */}
            <div className="azs-dining-card azs-seabourn-dining">
              <div className="azs-dining-image-wrap">
                <img
                  //   src={ScenicDiningImage}
                  alt="Scenic multiple fine dining venues"
                  className="azs-dining-img"
                />

                <div className="azs-dining-badge-wrapper">
                  <span className="azs-dining-badge azs-azamara-badge">
                    Multiple Fine Dining Venues
                  </span>
                </div>
              </div>
              <div className="azs-dining-content">
                <div className="azs-dining-header">
                  <div className="azs-dining-icon-circle">
                    <ChefHat size={24} className="azs-dining-icon" />
                  </div>
                  <h3 className="azs-dining-title">Scenic Dining</h3>
                </div>
                <p className="azs-dining-intro">
                  Scenic offers a slightly more varied dining experience
                  thanks to additional specialty venues and an extensive
                  beverage program.
                </p>
                <div className="azs-dining-body">
                  <h4 className="azs-dining-group-title">Scenic offers:</h4>
                  <ul className="azs-dining-list">
                    {[
                      "Multiple dining venues",
                      "Fine wines",
                      "Specialty restaurants",
                      "Chef-prepared cuisine",
                      "Extensive beverage program",
                    ].map((item, idx) => (
                      <li key={idx} className="azs-dining-list-item">
                        <div className="azs-dining-list-icon-wrapper">
                          <Star size={14} className="azs-dining-list-icon" />
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="azs-dining-divider"></div>
                  <div className="azs-dining-highlight-box azs-oceania-highlight">
                    <p className="azs-dining-highlight-text">
                      Winner by a small margin, thanks to greater venue
                      variety.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── EDITORIAL PREMIUM COMPARISON ROWS (SERVICE & WELLNESS) ───── */}
      <section className="rlc-prem-section" id="riverside-vs-scenic-service-wellness">
        <div className="rlc-prem-container">

          {/* Row 1: Service */}
          <div className="rlc-prem-row">
            {/* Meta Column (Dark theme) */}
            <div className="rlc-prem-meta">
              <span className="rlc-prem-num">01</span>
              <div className="rlc-prem-label-wrap">
                <span className="rlc-prem-eyebrow">Attentiveness &amp; Crew</span>
                <h3 className="rlc-prem-title">Service Comparison</h3>
                <p className="rlc-prem-intro">
                  Exceptional service defines both brands.
                </p>
              </div>
              <div className="rlc-prem-winner-tag">
                <Star size={14} fill="var(--bg-white)" />
                <span>Winner: Scenic</span>
              </div>
            </div>

            {/* Riverside Column */}
            <div className="rlc-prem-card">
              <div className="rlc-prem-card-header">
                <HeartHandshake size={24} className="rlc-prem-brand-icon" />
                <h4 className="rlc-prem-brand-name">Riverside</h4>
              </div>
              <h5 className="rlc-prem-list-title">Guests Enjoy:</h5>
              <ul className="rlc-prem-list">
                {[
                  "Friendly crew",
                  "Personalized attention",
                  "Boutique hospitality",
                  "Familiar atmosphere",
                ].map((item, idx) => (
                  <li key={idx} className="rlc-prem-item">
                    <Check size={16} className="rlc-prem-item-icon" />
                    <span className="rlc-prem-item-text">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="rlc-prem-desc">
                Crew members quickly learn guest preferences.
              </p>
            </div>

            {/* Scenic Column */}
            <div className="rlc-prem-card rlc-winner-card">
              <div className="rlc-prem-card-header">
                <Award size={24} className="rlc-prem-brand-icon" />
                <h4 className="rlc-prem-brand-name">Scenic</h4>
              </div>
              <h5 className="rlc-prem-list-title">Scenic Offers:</h5>
              <ul className="rlc-prem-list">
                {[
                  "Butler service",
                  "Concierge assistance",
                  "High crew-to-guest ratio",
                  "Premium hospitality",
                ].map((item, idx) => (
                  <li key={idx} className="rlc-prem-item">
                    <Check size={16} className="rlc-prem-item-icon" />
                    <span className="rlc-prem-item-text">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="rlc-prem-desc">
                The all-inclusive service model provides a highly polished luxury experience.
              </p>
            </div>
          </div>

          {/* Row 2: Wellness */}
          <div className="rlc-prem-row">
            {/* Meta Column (Dark theme) */}
            <div className="rlc-prem-meta">
              <span className="rlc-prem-num">02</span>
              <div className="rlc-prem-label-wrap">
                <span className="rlc-prem-eyebrow">Relaxation &amp; Activity</span>
                <h3 className="rlc-prem-title">Wellness &amp; Amenities</h3>
                <p className="rlc-prem-intro">
                  Comparing onboard facilities, relaxation spaces, and active equipment.
                </p>
              </div>
              <div className="rlc-prem-winner-tag">
                <Star size={14} fill="var(--bg-white)" />
                <span>Winner: Scenic</span>
              </div>
            </div>

            {/* Riverside Column */}
            <div className="rlc-prem-card">
              <div className="rlc-prem-card-header">
                <Waves size={24} className="rlc-prem-brand-icon" />
                <h4 className="rlc-prem-brand-name">Riverside</h4>
              </div>
              <h5 className="rlc-prem-list-title">Facilities Include:</h5>
              <ul className="rlc-prem-list">
                {[
                  "Fitness center",
                  "Spa treatments",
                  "Observation lounge",
                  "Sun deck",
                  "Library",
                ].map((item, idx) => (
                  <li key={idx} className="rlc-prem-item">
                    <Check size={16} className="rlc-prem-item-icon" />
                    <span className="rlc-prem-item-text">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="rlc-prem-desc">
                The focus is relaxation.
              </p>
            </div>

            {/* Scenic Column */}
            <div className="rlc-prem-card rlc-winner-card">
              <div className="rlc-prem-card-header">
                <Bike size={24} className="rlc-prem-brand-icon" />
                <h4 className="rlc-prem-brand-name">Scenic</h4>
              </div>
              <h5 className="rlc-prem-list-title">Additional Amenities:</h5>
              <ul className="rlc-prem-list">
                {[
                  "Salt therapy lounge",
                  "Wellness programs",
                  "Fitness classes",
                  "Electric bikes",
                  "Spa",
                  "Scenic Culinaire (select ships)",
                ].map((item, idx) => (
                  <li key={idx} className="rlc-prem-item">
                    <Check size={16} className="rlc-prem-item-icon" />
                    <span className="rlc-prem-item-text">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="rlc-prem-desc">
                Scenic also offers river cruises in Southeast Asia and luxury ocean expeditions.
              </p>
            </div>
          </div>

          {/* Row 3: Destinations */}
          <div className="rlc-prem-row">
            {/* Meta Column (Dark theme) */}
            <div className="rlc-prem-meta">
              <span className="rlc-prem-num">03</span>
              <div className="rlc-prem-label-wrap">
                <span className="rlc-prem-eyebrow">Rivers &amp; Waterways</span>
                <h3 className="rlc-prem-title">Destinations</h3>
                <p className="rlc-prem-intro">
                  Comparing the geographic reach of both fleets.
                </p>
              </div>
              <div className="rlc-prem-winner-tag">
                <Star size={14} fill="var(--bg-white)" />
                <span>Winner: Scenic</span>
              </div>
            </div>

            {/* Riverside Column */}
            <div className="rlc-prem-card">
              <div className="rlc-prem-card-header">
                <Compass size={24} className="rlc-prem-brand-icon" />
                <h4 className="rlc-prem-brand-name">Riverside</h4>
              </div>
              <h5 className="rlc-prem-list-title">Focuses Primarily On:</h5>
              <ul className="rlc-prem-list">
                {[
                  "Danube",
                  "Rhine",
                  "Rhône",
                  "Main",
                  "Moselle",
                ].map((item, idx) => (
                  <li key={idx} className="rlc-prem-item">
                    <Check size={16} className="rlc-prem-item-icon" />
                    <span className="rlc-prem-item-text">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="rlc-prem-desc">
                Ideal for travelers seeking Europe's classic river cruise experience.
              </p>
            </div>

            {/* Scenic Column */}
            <div className="rlc-prem-card rlc-winner-card">
              <div className="rlc-prem-card-header">
                <MapPinned size={24} className="rlc-prem-brand-icon" />
                <h4 className="rlc-prem-brand-name">Scenic</h4>
              </div>
              <h5 className="rlc-prem-list-title">Offers Cruises On:</h5>
              <ul className="rlc-prem-list">
                {[
                  "Danube",
                  "Rhine",
                  "Seine",
                  "Douro",
                  "Rhône",
                  "Mekong",
                  "Egypt",
                  "Plus luxury expedition cruises worldwide",
                ].map((item, idx) => (
                  <li key={idx} className="rlc-prem-item">
                    <Check size={16} className="rlc-prem-item-icon" />
                    <span className="rlc-prem-item-text">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="rlc-cta-btn-wrapper" style={{ display: "flex", justifyContent: "center", width: "100%" }}>
            <Link to="/contact" className="rlc-page-cta-btn">
              Start Planning Your Riverside Cruise
            </Link>
          </div>

        </div>
      </section>


      {/* SUITES & ACCOMMODATIONS */}
      <section className="azs-suites-section" id="azs-suites">
        <div className="azs-container">
          <div className="azs-section-header">
            <h2 className="azs-section-title">Suites &amp; Accommodations</h2>
            <div className="azs-section-accent"></div>
            <p className="azs-section-subtitle">
              Some of the Largest Suites on European Rivers vs. Butler
              Service in Every Category
            </p>
          </div>

          <div className="azs-suites-grid">
            {/* Riverside Card */}
            <div className="azs-suites-card azs-oceania-suites">
              <div className="azs-suites-image-wrap">
                <img
                  //   src={RiversideSuiteImage}
                  alt="Riverside spacious suite"
                  className="azs-suites-img"
                />
                <span className="azs-suites-image-badge">
                  Among the Largest on the Rivers
                </span>
              </div>

              <div className="azs-suites-content">
                <div className="azs-suites-card-header">
                  <div className="azs-suites-icon-circle">
                    <Award size={24} className="azs-suites-icon" />
                  </div>
                  <h3 className="azs-suites-title">Riverside Suites</h3>
                </div>
                <p className="azs-suites-intro">
                  Riverside's biggest advantage is space, with many suites
                  among the largest available on European rivers.
                </p>
                <div className="azs-suites-body">
                  <h4 className="azs-suites-group-title">Guests enjoy:</h4>
                  <ul className="azs-suites-list">
                    {[
                      "Large suites with sitting areas",
                      "Elegant décor",
                      "Marble bathrooms",
                      "King-size beds",
                      "Luxury amenities",
                    ].map((item, idx) => (
                      <li key={idx} className="azs-suites-list-item">
                        <div className="azs-suites-list-icon-wrapper">
                          <Check size={14} className="azs-suites-list-icon" />
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="azs-suites-divider"></div>
                  <div className="azs-suites-highlight-box azs-azamara-suites-highlight">
                    <p className="azs-suites-highlight-text">
                      Winner for suite size.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Scenic Card */}
            <div className="azs-suites-card azs-azamara-suites">
              <div className="azs-suites-image-wrap">
                <img
                  //   src={ScenicSuiteImage}
                  alt="Scenic suite with butler service"
                  className="azs-suites-img"
                />
                <span className="azs-suites-image-badge">Butler Service Included</span>
              </div>

              <div className="azs-suites-content">
                <div className="azs-suites-card-header">
                  <div className="azs-suites-icon-circle">
                    <Ship size={24} className="azs-suites-icon" />
                  </div>
                  <h3 className="azs-suites-title">Scenic Suites</h3>
                </div>
                <p className="azs-suites-intro">
                  Scenic's service level is exceptionally high throughout
                  every suite category, with butler service included for all
                  guests.
                </p>
                <div className="azs-suites-body">
                  <h4 className="azs-suites-group-title">Suites include:</h4>
                  <ul className="azs-suites-list">
                    {[
                      "Butler service",
                      "Pillow menus & premium linens",
                      "Luxury bathrooms",
                      "Private balconies",
                      "In-suite dining",
                    ].map((item, idx) => (
                      <li key={idx} className="azs-suites-list-item">
                        <div className="azs-suites-list-icon-wrapper">
                          <Check size={14} className="azs-suites-list-icon" />
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="azs-suites-divider"></div>
                  <div className="azs-suites-highlight-box azs-azamara-suites-highlight">
                    <p className="azs-suites-highlight-text">
                      Winner for butler service and included amenities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* SHORE EXCURSIONS & WELLNESS */}
      <section className="azs-entertainment-section" id="azs-entertainment">
        <div className="azs-container">
          <div className="azs-section-header">
            <h2 className="azs-section-title">Shore Excursions &amp; Wellness</h2>
            <div className="azs-section-accent"></div>
            <p className="azs-section-subtitle">
              Selected Included Tours vs. Extensive Freechoice Excursions
            </p>
          </div>

          <div className="azs-entertainment-grid">
            {/* Riverside Card */}
            <div className="azs-entertainment-card azs-azamara-ent">
              <div className="azs-ent-header">
                <div className="azs-ent-icon-circle">
                  <Compass size={24} className="azs-ent-icon" />
                </div>
                <h3 className="azs-ent-title">Riverside Excursions</h3>
              </div>
              <p className="azs-ent-intro">
                Included experiences focus on the essentials, with optional
                premium excursions available for added flexibility.
              </p>
              <div className="azs-ent-body">
                <h4 className="azs-ent-group-title">Included experiences:</h4>
                <ul className="azs-ent-list">
                  {[
                    "Walking tours",
                    "Historic sites",
                    "Wine tastings",
                    "Cultural experiences",
                    "Fitness center, spa, and library onboard",
                  ].map((item, idx) => (
                    <li key={idx} className="azs-ent-list-item">
                      <div className="azs-ent-list-icon-wrapper">
                        <Check size={14} className="azs-ent-list-icon" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="azs-ent-divider"></div>
                <div className="azs-ent-highlight-box azs-azamara-ent-highlight">
                  <p className="azs-ent-highlight-text">
                    A relaxed, wellness-focused onboard experience with
                    optional excursion flexibility.
                  </p>
                </div>
              </div>
            </div>

            {/* Scenic Card */}
            <div className="azs-entertainment-card azs-seabourn-ent">
              <div className="azs-ent-header">
                <div className="azs-ent-icon-circle">
                  <Bike size={24} className="azs-ent-icon" />
                </div>
                <h3 className="azs-ent-title">Scenic Excursions</h3>
              </div>
              <p className="azs-ent-intro">
                Excursion variety is one of Scenic's strongest advantages,
                paired with a robust wellness program.
              </p>
              <div className="azs-ent-body">
                <h4 className="azs-ent-group-title">Scenic includes:</h4>
                <ul className="azs-ent-list">
                  {[
                    "Scenic Freechoice excursions",
                    "Scenic Enrich experiences",
                    "Active adventures and private concerts",
                    "Salt therapy lounge & wellness programs",
                    "Electric bikes and fitness classes",
                  ].map((item, idx) => (
                    <li key={idx} className="azs-ent-list-item">
                      <div className="azs-ent-list-icon-wrapper">
                        <Star size={14} className="azs-ent-list-icon" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="azs-ent-divider"></div>
                <div className="azs-ent-highlight-box azs-oceania-ent-highlight">
                  <p className="azs-ent-highlight-text">
                    The broadest excursion and wellness program of the two
                    lines.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MODERN BENTO GRID GALLERY SHOWCASE ===== */}
      <section className="senianta-gallery-section" style={{ backgroundColor: "var(--bg-soft)" }}>
        <div className="senianta-gallery-inner">
          <div className="senianta-gallery-header">
            <h2 className="senianta-gallery-h2">Global Explorations</h2>
            <div className="senianta-gallery-divider"></div>
            <p className="senianta-gallery-p">
              From classic European rivers to exotic global waterways and luxury expeditions, discover the regions where Riverside and Scenic sail.
            </p>
          </div>

          <div className="senianta-gallery-bento-grid">
            {/* 01: Large Featured Item - The Danube River */}
            <div className="senianta-gallery-item senianta-gallery-feature">
              <div className="senianta-gallery-image-box">
                <img
                  //   src={RiversideOverviewImage}
                  alt="Danube River Budapest Parliament Scenic views"
                  className="senianta-gallery-img"
                />
                <div className="senianta-gallery-overlay">
                  <span className="senianta-gallery-badge">
                    Classic Europe
                  </span>
                  <h3 className="senianta-gallery-h3">The Danube River</h3>
                  <p className="senianta-gallery-item-p">
                    Sailing through the heart of Europe past castles, vineyards, and historic capitals like Vienna and Budapest. Both Riverside and Scenic offer premier Danube itineraries.
                  </p>
                </div>
              </div>
            </div>

            {/* 02: Vertical Item - The Mekong River */}
            <div className="senianta-gallery-item senianta-gallery-tall">
              <div className="senianta-gallery-image-box">
                <img
                  //   src={ScenicOverviewImage}
                  alt="Scenic luxury ship on Mekong River Vietnam Cambodia"
                  className="senianta-gallery-img"
                />
                <div className="senianta-gallery-overlay">
                  <span className="senianta-gallery-badge">Southeast Asia</span>
                  <h3 className="senianta-gallery-h3">The Mekong River</h3>
                </div>
              </div>
            </div>

            {/* 03: Standard Item - The Douro Valley */}
            <div className="senianta-gallery-item">
              <div className="senianta-gallery-image-box">
                <img
                  //   src={ScenicAtmosphereImage}
                  alt="Douro River Portugal Scenic cruises vineyards"
                  className="senianta-gallery-img"
                />
                <div className="senianta-gallery-overlay">
                  <span className="senianta-gallery-badge">
                    Portugal's Gold
                  </span>
                  <h3 className="senianta-gallery-h3">
                    The Douro Valley
                  </h3>
                </div>
              </div>
            </div>

            {/* 04: Standard Item - The Rhine & Moselle */}
            <div className="senianta-gallery-item">
              <div className="senianta-gallery-image-box">
                <img
                  //   src={RiversideAtmosphereImage}
                  alt="Rhine river castle medieval towns Riverside cruises"
                  className="senianta-gallery-img"
                />
                <div className="senianta-gallery-overlay">
                  <span className="senianta-gallery-badge">
                    Castles &amp; Vineyards
                  </span>
                  <h3 className="senianta-gallery-h3">The Rhine &amp; Moselle</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* WHO SHOULD CHOOSE */}
      <section className="Asc-section Asc-bg-white" id="Asc-who">
        <div className="Asc-container">
          <div className="Asc-section-header">
            <h2 className="Asc-h2">Who Should Choose Which Cruise Line?</h2>
            <div className="Asc-accent-line"></div>
          </div>
          <div className="Asc-who-grid">
            {/* Riverside Card */}
            <div className="Asc-who-card Asc-who-yes">
              <h3 className="Asc-who-title">Who Should Choose Riverside?</h3>
              <p className="Asc-who-card-intro">
                Riverside is ideal if you value:
              </p>
              <ul className="Asc-who-list">
                {[
                  "Spacious suites",
                  "Boutique atmosphere",
                  "Relaxed luxury",
                  "Quiet ships",
                  "Personalized service",
                  "Elegant European dining",
                ].map((item, i) => (
                  <li key={i} className="Asc-who-list-item">
                    <Check
                      size={16}
                      className="Asc-icon-green Asc-who-list-icon"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Scenic Card */}
            <div className="Asc-who-card Asc-who-no">
              <h3 className="Asc-who-title">Who Should Choose Scenic?</h3>
              <p className="Asc-who-card-intro">
                Scenic is an excellent choice if you prefer:
              </p>
              <ul className="Asc-who-list">
                {[
                  "Everything included",
                  "Butler service",
                  "Premium beverages",
                  "More excursions",
                  "Wellness facilities",
                  "Luxury without additional onboard costs",
                ].map((item, i) => (
                  <li key={i} className="Asc-who-list-item">
                    <Check
                      size={16}
                      className="Asc-icon-green Asc-who-list-icon"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROS & CONS SECTION ────────────────────────────────────── */}
      <section className="rlc-pc-section" id="riverside-vs-scenic-pros-cons">
        <div className="rlc-pc-container">
          <div className="rlc-pc-header">
            <h2 className="rlc-pc-title">Pros &amp; Cons</h2>
            <div className="rlc-pc-accent"></div>
          </div>

          <div className="rlc-pc-grid">
            {/* Riverside Card */}
            <div className="rlc-pc-card">
              <h3 className="rlc-pc-brand">Riverside</h3>

              <div className="rlc-pc-lists-wrap">
                {/* Pros */}
                <div className="rlc-pc-list-col">
                  <h4 className="rlc-pc-col-title rlc-pro">
                    <Check size={16} className="rlc-pc-icon rlc-pro" /> Pros
                  </h4>
                  <ul className="rlc-pc-list">
                    {[
                      "Spacious accommodations",
                      "Boutique atmosphere",
                      "Personalized hospitality",
                      "Elegant ships",
                      "Relaxed experience",
                      "Excellent cuisine",
                    ].map((item, idx) => (
                      <li key={idx} className="rlc-pc-item">
                        <Check size={14} className="rlc-pc-icon rlc-pro" />
                        <span className="rlc-pc-text">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Cons */}
                <div className="rlc-pc-list-col">
                  <h4 className="rlc-pc-col-title rlc-con">
                    <Minus size={16} className="rlc-pc-icon rlc-con" /> Cons
                  </h4>
                  <ul className="rlc-pc-list">
                    {[
                      "Smaller fleet",
                      "Fewer itineraries",
                      "Fewer included excursions",
                      "Limited wellness facilities",
                    ].map((item, idx) => (
                      <li key={idx} className="rlc-pc-item">
                        <Minus size={14} className="rlc-pc-icon rlc-con" />
                        <span className="rlc-pc-text">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Scenic Card */}
            <div className="rlc-pc-card">
              <h3 className="rlc-pc-brand">Scenic</h3>

              <div className="rlc-pc-lists-wrap">
                {/* Pros */}
                <div className="rlc-pc-list-col">
                  <h4 className="rlc-pc-col-title rlc-pro">
                    <Check size={16} className="rlc-pc-icon rlc-pro" /> Pros
                  </h4>
                  <ul className="rlc-pc-list">
                    {[
                      "Truly all-inclusive",
                      "Butler service",
                      "Extensive excursions",
                      "More destinations",
                      "Premium amenities",
                      "Excellent wellness facilities",
                    ].map((item, idx) => (
                      <li key={idx} className="rlc-pc-item">
                        <Check size={14} className="rlc-pc-icon rlc-pro" />
                        <span className="rlc-pc-text">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Cons */}
                <div className="rlc-pc-list-col">
                  <h4 className="rlc-pc-col-title rlc-con">
                    <Minus size={16} className="rlc-pc-icon rlc-con" /> Cons
                  </h4>
                  <ul className="rlc-pc-list">
                    {[
                      "Higher pricing",
                      "Larger fleet feels less boutique",
                      "More structured daily schedules",
                    ].map((item, idx) => (
                      <li key={idx} className="rlc-pc-item">
                        <Minus size={14} className="rlc-pc-icon rlc-con" />
                        <span className="rlc-pc-text">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* FINAL VERDICT */}
      <section
        className="Asc-section Asc-bg-white"
        id="Asc-verdict"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="Asc-container">
          <div className="Asc-section-header margin-large">
            <h2 className="Asc-h2">Which Cruise Line Offers Better Value?</h2>

            <div className="Asc-accent-line"></div>

            <p className="Asc-verdict-intro">
              Value depends entirely on your personal travel priorities.
            </p>
          </div>

          <div className="Asc-verdict-grid">
            {/* Riverside Column */}
            <div className="Asc-verdict-card Asc-verdict-azamara">
              <h3 className="Asc-verdict-card-title">
                Choose Riverside if you want:
              </h3>

              <ul className="Asc-verdict-list">
                {[
                  "Spacious luxury",
                  "Personalized service",
                  "Boutique atmosphere",
                  "Elegant European travel",
                ].map((item, i) => (
                  <li key={i} className="Asc-verdict-item">
                    <Check size={18} className="Asc-verdict-icon" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Scenic Column */}
            <div className="Asc-verdict-card Asc-verdict-regent">
              <h3 className="Asc-verdict-card-title">
                Choose Scenic if you want:
              </h3>

              <ul className="Asc-verdict-list">
                {[
                  "Maximum inclusions",
                  "Butler service",
                  "More excursions and wellness amenities",
                  "Luxury without worrying about onboard expenses",
                ].map((item, i) => (
                  <li key={i} className="Asc-verdict-item">
                    <Check size={18} className="Asc-verdict-icon" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="Asc-verdict-footer-box">
            <p className="Asc-verdict-footer-text">
              Both cruise lines deliver exceptional experiences — the right
              one depends on how you want to travel, not which is objectively
              "better."
            </p>
          </div>
        </div>
      </section>

      {/* WHY BOOK THROUGH A LUXURY TRAVEL ADVISOR? */}
      <section
        className="Avr-planning-section"
        id="Asc-luxury-travel-advisor"
        style={{ backgroundColor: "var(--bg-white)" }}
      >
        <div className="Asc-container">
          {/* HEADING */}
          <div className="Avr-planning-heading">
            <span className="Avr-planning-eyebrow">
              Personalized Cruise Planning
            </span>

            <h2 className="Avr-planning-title">
              Why Book Through a Luxury Travel Advisor?
            </h2>

            <div className="Avr-planning-divider"></div>
          </div>

          {/* TWO-PANEL GRID */}
          <div className="Avr-planning-grid">
            {/* LEFT PANEL */}
            <div className="Avr-planning-left">
              <div className="Avr-planning-left-deco">&ldquo;</div>

              <h3 className="Avr-planning-left-title">
                Create Your Perfect River Journey
              </h3>

              <p className="Avr-planning-left-body">
                Comparing luxury river cruise lines can be challenging.
                Expert guidance ensures you book the cruise that best matches
                your individual travel style.
              </p>

              <div className="Avr-planning-alert">
                <ShieldCheck size={18} className="Avr-planning-alert-icon" />

                <p className="Avr-planning-alert-text">
                  Professional guidance ensures you book the river cruise that
                  best matches your travel goals.
                </p>
              </div>
            </div>

            {/* RIGHT PANEL */}
            <div className="Avr-planning-right">
              <p className="Avr-planning-right-intro">
                A luxury travel advisor can help you:
              </p>

              <div className="Avr-planning-benefits-grid">
                {[
                  {
                    icon: <MapPinned size={18} />,
                    label: "Compare itineraries",
                  },
                  {
                    icon: <Ship size={18} />,
                    label: "Choose the right suite",
                  },
                  {
                    icon: <Sparkles size={18} />,
                    label: "Understand inclusions",
                  },
                  {
                    icon: <Plane size={18} />,
                    label: "Coordinate flights",
                  },
                  {
                    icon: <Home size={18} />,
                    label: "Arrange hotels and transfers",
                  },
                  {
                    icon: <Compass size={18} />,
                    label: "Recommend excursions",
                  },
                  {
                    icon: <BadgePercent size={18} />,
                    label: "Identify exclusive promotions",
                  },
                  {
                    icon: <HeartHandshake size={18} />,
                    label:
                      "Provide ongoing support before and during your vacation",
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
                Professional planning ensures you book the cruise that best
                matches your travel goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ANGELA HUGHES AUTHORITY BOX */}
      <section className="Adg-expert-section" id="Asc-expert-insight">
        <div className="Asc-container">
          <div className="Adg-expert-heading">
            <span className="Adg-expert-eyebrow">Luxury Travel Expertise</span>
            <h2 className="Adg-expert-title">Angela Hughes Luxury Authority</h2>
            <div className="Adg-expert-divider"></div>
          </div>

          <div className="Adg-expert-grid">
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

      {/* FAQ */}
      <section className="Asc-section Asc-bg-white" id="Asc-faq">
        <div className="Asc-container">
          <div className="Asc-section-header">
            <h2 className="Asc-h2">Frequently Asked Questions</h2>
            <div className="Asc-accent-line"></div>
            <p className="Asc-faq-intro">
              Everything you need to know about choosing between Riverside
              and Scenic River Cruises.
            </p>
          </div>
          <FAQ />
        </div>
      </section>

      {/* CTA */}
      <section className="Asc-help-section">
        <div className="Asc-help-bg-wrap">
          <img
            // src={RiversideVsScenicCtaImage}
            alt="Riverside and Scenic river cruises sailing through Europe"
            className="Asc-help-bg-img"
          />
          <div className="Asc-help-overlay"></div>
        </div>

        <div className="Asc-container">
          <div className="Asc-help-card">
            <div className="Asc-help-content">
              <div className="Asc-help-header">
                <span className="Asc-help-eyebrow">
                  Personalized Luxury River Cruise Planning
                </span>
                <h2 className="Asc-help-h2">
                  Final Thoughts: <br /> Riverside vs. Scenic River Cruises
                </h2>
                <div className="Asc-help-accent"></div>
              </div>

              <div className="Asc-help-grid">
                <div className="Asc-help-info">
                  <p className="Asc-help-intro">
                    Both Riverside and Scenic rank among Europe's finest
                    luxury river cruise experiences, but they excel in
                    different areas.
                    {!ctaReadMore && (
                      <button
                        onClick={() => setCtaReadMore(true)}
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

                  {ctaReadMore && (
                    <>
                      <br />
                      <p className="Asc-help-intro">
                        Choose Riverside Luxury Cruises if you want boutique
                        luxury, spacious suites, personalized service, a
                        relaxed onboard atmosphere, and elegant European
                        travel.
                      </p>
                      <br />
                      <p className="Asc-help-intro">
                        Choose Scenic River Cruises if you want truly
                        all-inclusive luxury, butler service, extensive
                        included excursions, premium amenities, and the
                        broadest choice of itineraries.
                      </p>
                      <br />
                      <p className="Asc-help-intro">
                        Whichever you choose, you'll enjoy exceptional
                        hospitality, gourmet dining, and unforgettable
                        journeys through Europe's most beautiful waterways.
                        <button
                          onClick={() => setCtaReadMore(false)}
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
                    </>
                  )}

                  <div className="Asc-help-btn-container">
                    <Link
                      to="/contact"
                      className="Asc-help-cta-btn"
                      style={{ textDecoration: "none" }}
                    >
                      Start Planning Your Luxury River Cruise
                      <ArrowRight size={18} />
                    </Link>
                  </div>
                </div>

                <div className="Asc-help-list-box">
                  <h3 className="Asc-help-list-title">
                    Our luxury planning services include:
                  </h3>

                  <ul className="Asc-help-bullets">
                    {[
                      "Compare Riverside and Scenic itineraries side by side",
                      "Recommend the ship and suite category that fits your travel style",
                      "Coordinate pre- and post-cruise hotel stays",
                      "Access exclusive promotions and amenities",
                      "Arrange flights, transfers, and private shore experiences",
                      "Provide ongoing support before and during your voyage",
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

              {/* Suggested Internal Links */}
              <div
                className="Asc-internal-links-section"
                style={{
                  marginTop: "60px",
                  borderTop: "1px solid rgba(255, 255, 255, 0.2)",
                  paddingTop: "40px",
                }}
              >
                <h3
                  style={{
                    color: "#fff",
                    fontFamily: "var(--font-display)",
                    fontSize: "24px",
                    fontWeight: "400",
                    marginBottom: "20px",
                  }}
                >
                  Explore More Luxury River Cruise Guides
                </h3>
                <div
                  className="Asc-internal-links-grid"
                  style={{
                    display: "grid",
                    gridTemplateColumns:
                      "repeat(auto-fill, minmax(280px, 1fr))",
                    gap: "15px",
                  }}
                >
                  {[
                    {
                      label: "Riverside Luxury Cruises",
                      path: "/riverside-luxury-cruises",
                    },
                    {
                      label: "Riverside Luxury Cruises Reviews",
                      path: "/riverside-luxury-cruises-reviews",
                    },
                    {
                      label: "Is Riverside Worth It?",
                      path: "/is-riverside-worth-it",
                    },
                    {
                      label: "Riverside Mozart Review",
                      path: "/riverside-mozart-review",
                    },
                    {
                      label: "Riverside vs. Uniworld",
                      path: "/riverside-vs-uniworld",
                    },
                    {
                      label: "Riverside vs. AmaWaterways",
                      path: "/riverside-vs-amawaterways",
                    },
                  ].map((link, idx) => (
                    <Link
                      key={idx}
                      to={link.path}
                      style={{
                        color: "rgba(255, 255, 255, 0.8)",
                        fontSize: "16px",
                        textDecoration: "none",
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        transition: "color 0.2s ease",
                      }}
                      onMouseEnter={(e) => (e.target.style.color = "#fff")}
                      onMouseLeave={(e) =>
                        (e.target.style.color = "rgba(255, 255, 255, 0.8)")
                      }
                    >
                      <ArrowRight size={14} style={{ flexShrink: 0 }} />
                      <span>{link.label}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RiversideVsScenic;