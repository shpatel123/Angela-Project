import { useState, useEffect} from "react";
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
  Sparkles,
  UserCheck,
  Globe,
  HeartHandshake,
} from "lucide-react";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela3.jpeg";
// import CTAImage from "../../assets/AnthologyWorth/AlaskaCruise.webp";

// import HeroImage1 from "../../assets/AnthologyWorth/Anthology.webp";
// import HeroImage2 from "../../assets/AnthologyWorth/Anthology2.webp";
// import HeroImage4 from "../../assets/AnthologyWorth/Anthology3.webp";
// import AnthologySuite from "../../assets/AnthologyWorth/Anthology-Suite.webp";
// import AnthologyDining from "../../assets/AnthologyWorth/Anthology-Dining.webp";
// import AnthologyAtmosphere from "../../assets/AnthologyWorth/Boutique-Experience.webp";
// import AnthologyDiningVenues from "../../assets/AnthologyWorth/Dining-Venues.webp";
// import AnthologyPool from "../../assets/AnthologyWorth/AnthologyPool.webp";

import { Helmet } from "react-helmet-async";

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
      name: "Is Anthology Worth It?",
      description:
        "Expert luxury cruise review and buying guide for Anthology small-ship voyages.",
      url: "https://www.tripsandships.com/is-anthology-worth-it",
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
          name: "Is Anthology Worth It?",
          item: "https://www.tripsandships.com/is-anthology-worth-it",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Is Anthology considered a luxury travel experience?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Anthology focuses on boutique luxury, personalized service, and destination-rich itineraries.",
          },
        },
        {
          "@type": "Question",
          name: "Is Anthology worth the price?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For travelers seeking small-ship luxury, exceptional service, and immersive travel, many believe the experience offers excellent value.",
          },
        },
        {
          "@type": "Question",
          name: "Who is Anthology best suited for?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Couples, experienced cruisers, retirees, and travelers who value culture, comfort, and personalized experiences.",
          },
        },
        {
          "@type": "Question",
          name: "Are Anthology ships crowded?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Smaller guest capacities create a more intimate and relaxed atmosphere.",
          },
        },
        {
          "@type": "Question",
          name: "Does Anthology focus more on destinations or onboard attractions?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Anthology emphasizes destination immersion and authentic experiences rather than large-scale onboard entertainment.",
          },
        },
        {
          "@type": "Question",
          name: "Is Anthology family friendly?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "While families are welcome on many voyages, the experience is primarily designed for travelers seeking a quieter, more sophisticated atmosphere.",
          },
        },
        {
          "@type": "Question",
          name: "What type of dining does Anthology offer?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Guests can expect high-quality cuisine with an emphasis on fresh ingredients, regional flavors, and attentive service.",
          },
        },
        {
          "@type": "Question",
          name: "Are there luxury accommodations on Anthology?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Anthology accommodations are designed to provide comfort, elegance, and a boutique luxury experience.",
          },
        },
        {
          "@type": "Question",
          name: "Is Anthology good for first-time luxury travelers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. Anthology offers an approachable introduction to luxury small-ship travel.",
          },
        },
        {
          "@type": "Question",
          name: "Why do travelers choose Anthology?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Travelers appreciate the combination of personalized service, cultural immersion, elegant accommodations, and thoughtfully curated itineraries.",
          },
        },
        {
          "@type": "Question",
          name: "What makes Anthology different from large cruise ships?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Its smaller ship size, boutique atmosphere, high staff-to-guest ratio, and destination-focused itineraries make it a fundamentally different experience.",
          },
        },
        {
          "@type": "Question",
          name: "Are beverages and gratuities included in Anthology fares?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, Anthology offers an all-inclusive experience. This typically includes select fine wines, spirits, specialty coffees, soft drinks, and all onboard gratuities, allowing guests to relax without worrying about extra charges.",
          },
        },
        {
          "@type": "Question",
          name: "What is the dress code onboard Anthology voyages?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The dress code is 'resort casual' during the day and 'smart-casual' or 'elegant casual' in the evenings. Formal nights are generally not required, keeping the atmosphere relaxed yet sophisticated.",
          },
        },
        {
          "@type": "Question",
          name: "What destinations does Anthology sail to?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Anthology sails to a variety of destination-rich regions, including the Mediterranean, Northern Europe, the Caribbean, and select boutique ports that larger cruise ships cannot access due to size constraints.",
          },
        },
        {
          "@type": "Question",
          name: "Is Wi-Fi included on Anthology voyages?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, high-speed, unlimited Wi-Fi is complimentary for all guests onboard, making it easy to stay connected with family, friends, or work while at sea.",
          },
        },
        {
          "@type": "Question",
          name: "How does booking Anthology through a luxury travel advisor like Angela Hughes benefit me?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Booking through Angela Hughes and Trips & Ships Luxury Travel grants you access to exclusive perks such as additional shipboard credits, potential suite upgrades, private booking support, and custom pre- and post-voyage travel arrangements.",
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
      q: "Is Anthology considered a luxury travel experience?",
      a: "Yes. Anthology focuses on boutique luxury, personalized service, and destination-rich itineraries.",
    },
    {
      q: "Is Anthology worth the price?",
      a: "For travelers seeking small-ship luxury, exceptional service, and immersive travel, many believe the experience offers excellent value.",
    },
    {
      q: "Who is Anthology best suited for?",
      a: "Couples, experienced cruisers, retirees, and travelers who value culture, comfort, and personalized experiences.",
    },
    {
      q: "Are Anthology ships crowded?",
      a: "No. Smaller guest capacities create a more intimate and relaxed atmosphere.",
    },
    {
      q: "Does Anthology focus more on destinations or onboard attractions?",
      a: "Anthology emphasizes destination immersion and authentic experiences rather than large-scale onboard entertainment.",
    },
    {
      q: "Is Anthology family friendly?",
      a: "While families are welcome on many voyages, the experience is primarily designed for travelers seeking a quieter, more sophisticated atmosphere.",
    },
    {
      q: "What type of dining does Anthology offer?",
      a: "Guests can expect high-quality cuisine with an emphasis on fresh ingredients, regional flavors, and attentive service.",
    },
    {
      q: "Are there luxury accommodations on Anthology?",
      a: "Yes. Anthology accommodations are designed to provide comfort, elegance, and a boutique luxury experience.",
    },
    {
      q: "Is Anthology good for first-time luxury travelers?",
      a: "Absolutely. Anthology offers an approachable introduction to luxury small-ship travel.",
    },
    {
      q: "Why do travelers choose Anthology?",
      a: "Travelers appreciate the combination of personalized service, cultural immersion, elegant accommodations, and thoughtfully curated itineraries.",
    },
    {
      q: "What makes Anthology different from large cruise ships?",
      a: "Its smaller ship size, boutique atmosphere, high staff-to-guest ratio, and destination-focused itineraries create a fundamentally more personal experience.",
    },
    {
      q: "Are beverages and gratuities included in Anthology fares?",
      a: "Yes, Anthology offers an all-inclusive experience. This typically includes select fine wines, spirits, specialty coffees, soft drinks, and all onboard gratuities, allowing guests to relax without worrying about extra charges.",
    },
    {
      q: "What is the dress code onboard Anthology voyages?",
      a: "The dress code is 'resort casual' during the day and 'smart-casual' or 'elegant casual' in the evenings. Formal nights are generally not required, keeping the atmosphere relaxed yet sophisticated.",
    },
    {
      q: "What destinations does Anthology sail to?",
      a: "Anthology sails to a variety of destination-rich regions, including the Mediterranean, Northern Europe, the Caribbean, and select boutique ports that larger cruise ships cannot access due to size constraints.",
    },
    {
      q: "Is Wi-Fi included on Anthology voyages?",
      a: "Yes, high-speed, unlimited Wi-Fi is complimentary for all guests onboard, making it easy to stay connected with family, friends, or work while at sea.",
    },
    {
      q: "How does booking Anthology through a luxury travel advisor like Angela Hughes benefit me?",
      a: "Booking through Angela Hughes and Trips & Ships Luxury Travel grants you access to exclusive perks such as additional shipboard credits, potential suite upgrades, private booking support, and custom pre- and post-voyage travel arrangements.",
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

const AnthologyWorth = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
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
          Is Anthology Worth It? Luxury Small Ship Cruise Review &amp; Buying
          Guide 2026
        </title>
        <meta
          name="title"
          content="Is Anthology Worth It? | Luxury Small Ship Cruise Review & Buying Guide"
        />
        <meta
          name="description"
          content="Wondering if Anthology luxury cruises are worth the investment? Learn who Anthology is best for, what makes the experience unique, what's included, and whether its boutique voyages deliver exceptional value."
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
          <h1>Is Anthology Worth It?</h1>

          <p>The Short Answer: For the Right Luxury Traveler, Absolutely</p>

          <p>
            Anthology has quickly become one of the most compelling boutique
            luxury travel experiences in the world — but it is not designed for
            every traveler.
          </p>

          {/* READ MORE CONTENT */}
          {readMore && (
            <>
              <p>
                For discerning travelers seeking intimate ships, meaningful
                destination immersion, exceptional personalized service, and the
                refined atmosphere of a boutique voyage, Anthology can deliver
                outstanding value.
              </p>

              <p>
                However, travelers expecting large-scale entertainment,
                resort-style attractions, or family-focused programming may find
                important differences compared to mainstream cruise lines.
              </p>

              <p>
                According to Angela Hughes — CEO of Trips &amp; Ships Luxury
                Travel, founder of Luxury Travel University, and a luxury cruise
                expert with over 40 years in the travel industry — the key is
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

      {/* ── WHAT IS ANTHOLOGY ───────────────────────────────── */}
      <section className="adg-c-section adg-c-bg-soft" id="adg-common-features">
        <div className="adg-c-container">
          <div className="adg-c-section-header">
            <h2 className="adg-c-h2">What Is Anthology?</h2>
            <div className="adg-c-accent-line"></div>
          </div>

          <div className="adg-c-overview-layout">
            {/* LEFT — Standard inclusions */}
            <div className="adg-c-overview-icons">
              {[
                "Boutique luxury",
                "Smaller guest numbers",
                "Destination immersion",
                "Personalized service",
                "Curated cultural experiences",
                "Relaxed sophistication",
              ].map((label, i) => (
                <div key={i} className="adg-c-overview-item">
                  <span className="adg-c-overview-icon">
                    <Check size={16} strokeWidth={2.5} />
                  </span>
                  <span className="adg-c-overview-label">{label}</span>
                </div>
              ))}
            </div>

            {/* RIGHT — Callout + Image */}
            <div className="adg-c-overview-right">
              <div className="adg-c-overview-callout">
                <div className="adg-c-overview-callout-inner">
                  <Star size={28} className="adg-c-callout-star" />
                  <p className="adg-c-callout-text">
                    Anthology is a luxury small-ship travel experience designed
                    for travelers who prefer quality over quantity. Rather than
                    focusing on amusement-style attractions or crowded ships, it
                    offers a refined perspective on the world.
                  </p>
                </div>
              </div>

              <div className="adg-c-overview-image-wrap">
                <img
                  // src={ExpolaSuite}
                  alt="Anthology luxury small-ship boutique cruise experience"
                  className="adg-c-overview-img"
                />
                <div className="adg-c-overview-img-overlay">
                  <span className="adg-c-overview-img-label">
                    Exclusive and Intimate Travel
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ WHY TRAVELERS CHOOSE ANTHOLOGY ══════════════════════════════════════ */}
      <section className="luc-why-section" id="luc-why-viking">
        <div className="luc-why-container">
          {/* LEFT — stacked images */}
          <div className="luc-why-images">
            <div className="luc-why-img-main-wrap" style={{ color: "#fff" }}>
              <img
                // src={VikingExp1}
                alt="Anthology luxury small-ship boutique cruise experience"
                className="luc-why-img-main"
              />
              <div className="luc-why-img-overlay"></div>
            </div>
            <div className="luc-why-img-accent-wrap" style={{ color: "#fff" }}>
              <img
                // src={VikingExp2}
                alt="Anthology elegant and uncrowded public spaces"
                className="luc-why-img-accent"
              />
              <div className="luc-why-img-badge">
                <span className="luc-why-badge-num">4</span>
                <span className="luc-why-badge-text">Key Pillars</span>
              </div>
            </div>
          </div>

          {/* RIGHT — content */}
          <div className="luc-why-content">
            <h2 className="luc-why-title">What Makes Anthology Different?</h2>
            <div className="aac-accent-line aac-accent-white"></div>
            <p className="luc-why-intro">
              Many cruise lines compete by offering larger ships with more
              restaurants, attractions, and entertainment. Anthology follows a
              different philosophy — focusing on delivering exceptional
              experiences through thoughtful design and personalized service
              instead of overwhelming choices.
            </p>
            <div className="luc-why-features">
              {[
                {
                  num: "01",
                  title: "Smaller Ships",
                  desc: "Fewer guests create a quieter, more relaxed atmosphere on board, steering clear of crowded spaces and long lines.",
                },
                {
                  num: "02",
                  title: "Destination-Focused Itineraries",
                  desc: "More time is spent experiencing and immersing yourself in unique locations rather than simply passing through them.",
                },
                {
                  num: "03",
                  title: "Personalized Service",
                  desc: "Smaller guest counts allow crew members to provide genuinely attentive, individualized service tailored to your preferences.",
                },
                {
                  num: "04",
                  title: "Boutique Atmosphere",
                  desc: "Public spaces feel elegant and beautifully uncrowded, creating a much more private, exclusive travel experience.",
                },
              ].map((feat, i) => (
                <div key={i} className="luc-why-feature">
                  <div className="luc-why-feature-num">{feat.num}</div>
                  <div className="luc-why-feature-body">
                    <h3 className="luc-why-feature-title">{feat.title}</h3>
                    <p className="luc-why-feature-desc">{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHO IS ANTHOLOGY BEST FOR? */}
      <section
        className="dmg-info-section dmg-bg-white"
        id="dmg-accommodations"
      >
        <div className="dmg-info-container">
          <div className="dmg-info-grid">
            {/* Left Side Image */}
            <div className="dmg-info-media">
              <div className="dmg-media-wrapper">
                <img
                  //   src={VikingExp4}
                  alt="Refined, immersive boutique cruise journey with Anthology"
                  className="dmg-media-img"
                />
                <div className="dmg-media-overlay"></div>

                <div className="dmg-media-badge">
                  <span>Immersive Journeys</span>
                </div>
              </div>
            </div>

            {/* Right Side Content */}
            <div className="dmg-info-content">
              <h2 className="dmg-info-title">Who Is Anthology Best For?</h2>
              <div className="dmg-info-accent"></div>

              <p className="dmg-info-lead">
                Anthology appeals to travelers looking for refined, immersive
                journeys, offering an upscale alternative to large-scale
                cruising.
              </p>

              <div className="dmg-info-features dmg-info-features-scrollable">
                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">Couples</h3>
                    <p className="dmg-info-feature-desc">
                      Romantic voyages featuring elegant accommodations, quiet
                      spaces, and intimate dining settings.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Retired Travelers
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Relaxed itineraries designed with a comfortable pace,
                      focused on culture, history, and scenic exploration.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">Luxury Travelers</h3>
                    <p className="dmg-info-feature-desc">
                      Guests who prioritize highly personalized service,
                      exceptional comfort, and exclusive experiences over neon
                      onboard attractions.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Experienced Cruisers
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Seasoned travelers looking to move beyond massive,
                      mainstream mega-ships in favor of a boutique approach.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Cultural Explorers
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Curious guests deeply interested in local traditions,
                      regional cuisine, architecture, and immersive history.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ WHAT IS INCLUDED WITH ANTHOLOGY ════════════════════════ */}
      <section className="dac-families-section">
        <div className="dac-families-container">
          <div className="dac-families-grid">
            {/* Left Content Column */}
            <div className="dac-families-left">
              <div className="dac-families-heading-wrap">
                <h2 className="dac-families-title">What Is Included?</h2>
                <div className="dac-families-accent"></div>
              </div>

              <div className="dac-families-features">
                {[
                  {
                    title: "Luxury Accommodations",
                    desc: "Comfortable, elegantly designed staterooms or suites featuring high-end finishes and peaceful spaces to unwind.",
                  },
                  {
                    title: "Fine Dining",
                    desc: "Chef-inspired menus showcasing regional specialties and international cuisine prepared with fresh, premium ingredients.",
                  },
                  {
                    title: "Personalized Service",
                    desc: "An attentive staff-to-guest ratio ensuring crew members quickly learn and anticipate your specific preferences.",
                  },
                  {
                    title: "Curated Itineraries",
                    desc: "Unique destinations selected specifically for their cultural significance, history, and opportunities for authentic experiences.",
                  },
                  {
                    title: "Enrichment Programs",
                    desc: "Engaging lectures, insights from local experts, and destination-focused activities on select voyages to deepen your journey.",
                  },
                ].map((feat, idx) => (
                  <div key={idx} className="dac-families-feature-item">
                    <div className="dac-families-feature-icon-box">
                      <Check size={18} strokeWidth={3} />
                    </div>

                    <div className="dac-families-feature-texts">
                      <h3 className="dac-families-feature-title">
                        {feat.title}
                      </h3>
                      <p className="dac-families-feature-desc">{feat.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Images Column */}
            <div className="dac-families-right">
              <div className="dac-families-image-wrapper">
                <div className="dac-families-img-card dac-families-img-card--primary">
                  <img
                    // src={VikingExp4}
                    alt="Luxury accommodations and premium suite experience on Anthology"
                    className="dac-families-img"
                  />
                  <div className="dac-families-img-caption">
                    Premium Accommodations
                  </div>
                </div>

                <div className="dac-families-img-card dac-families-img-card--secondary">
                  <img
                    // src={VikingExp5}
                    alt="Fine dining and curated experiences with Anthology"
                    className="dac-families-img"
                  />
                  <div className="dac-families-img-caption">
                    Curated Experiences
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section
        className="Asc-section Asc-bg-white"
        id="Asc-fleet"
        style={{ backgroundColor: "var(--bg-white)" }}
      >
        <div className="Asc-container">
          <div className="Asc-section-header">
            <h2 className="Asc-h2">Anthology vs Large Cruise Ships</h2>

            <div className="Asc-accent-line"></div>
          </div>

          <div className="Asc-table-wrapper">
            <table className="Asc-fleet-table">
              <thead>
                <tr>
                  <th>If You Prefer…</th>
                  <th>Anthology</th>
                  <th>Large Cruise Ships</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>
                    <strong>Personalized service</strong>
                  </td>
                  <td>✓</td>
                  <td>Limited</td>
                </tr>

                <tr>
                  <td>
                    <strong>Quiet atmosphere</strong>
                  </td>
                  <td>✓</td>
                  <td>Crowded</td>
                </tr>

                <tr>
                  <td>
                    <strong>Boutique luxury</strong>
                  </td>
                  <td>✓</td>
                  <td>Varies</td>
                </tr>

                <tr>
                  <td>
                    <strong>Destination immersion</strong>
                  </td>
                  <td>✓</td>
                  <td>Good</td>
                </tr>

                <tr>
                  <td>
                    <strong>Family attractions</strong>
                  </td>
                  <td>Limited</td>
                  <td>✓</td>
                </tr>

                <tr>
                  <td>
                    <strong>Large entertainment venues</strong>
                  </td>
                  <td>Limited</td>
                  <td>✓</td>
                </tr>

                <tr>
                  <td>
                    <strong>Intimate dining</strong>
                  </td>
                  <td>✓</td>
                  <td>Varies</td>
                </tr>

                <tr>
                  <td>
                    <strong>Small guest numbers</strong>
                  </td>
                  <td>✓</td>
                  <td>No</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* WHY TRAVELERS CHOOSE ANTHOLOGY */}
      <section className="adg-section" id="adg-food-itineraries">
        <div className="adg-container">
          <div className="adg-section-header" style={{ marginBottom: "60px" }}>
            <h2 className="adg-h2">Why Travelers Choose Anthology</h2>

            <div className="adg-accent-line"></div>
          </div>

          <div className="adg-split-layout">
            {/* Left Content Column */}
            <div className="adg-content-card-side">
              <img
                // src={AnthologyDiningVenues} /* Keep or replace this variable as needed */
                alt="Anthology luxury onboard experience"
                className="adg-side-image"
                style={{ height: "40vh", border: "1px solid" }}
              />

              <div className="adg-info-card">
                <div className="adg-card-meta">
                  <Compass size={28} />
                  <span className="adg-meta-label">
                    Authentic Travel Philosophy
                  </span>
                </div>

                <p className="adg-card-lead">
                  Many guests choose Anthology because they value experiences
                  that feel less commercial and more authentic, creating a
                  journey that feels both luxurious and meaningful.
                </p>

                <div className="adg-card-divider"></div>

                <ul className="Asc-who-list" style={{ marginTop: "20px" }}>
                  {[
                    "Fewer crowds than commercial cruises",
                    "A focus on destination depth over filler",
                    "Thoughtfully scaled small-ship freedom",
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
                  title: "Smaller guest numbers",
                  icon: <Users size={20} />,
                },
                {
                  title: "Relaxed atmosphere",
                  icon: <Sparkles size={20} />,
                },
                {
                  title: "High staff-to-guest ratio",
                  icon: <HeartHandshake size={20} />,
                },
                {
                  title: "Scenic itineraries",
                  icon: <Compass size={20} />,
                },
                {
                  title: "Exceptional dining",
                  icon: <Utensils size={20} />,
                },
                {
                  title: "Cultural immersion",
                  icon: <Globe size={20} />,
                },
                {
                  title: "Personalized attention",
                  icon: <UserCheck size={20} />,
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

      {/* PROS OF CHOOSING ANTHOLOGY */}
      <section className="ugt-advantage-section" id="ugt-advantage">
        <div className="ugt-advantage-container">
          <div className="ugt-advantage-header">
            <h2 className="ugt-advantage-title">Pros of Choosing Anthology</h2>

            <div className="Asc-accent-line"></div>

            <p className="ugt-advantage-intro">
              Anthology offers a carefully curated approach to maritime travel.
              These core advantages highlight what sets the experience apart for
              discerning travelers.
            </p>
          </div>

          <div className="ugt-advantage-grid">
            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <Sparkles size={28} strokeWidth={1.5} />
              </div>

              <h4 className="ugt-card-title">Intimate Atmosphere</h4>

              <p className="ugt-card-desc">
                Smaller ships provide a peaceful, beautifully uncrowded
                environment.
              </p>
            </div>

            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <HeartHandshake size={28} strokeWidth={1.5} />
              </div>

              <h4 className="ugt-card-title">Personalized Experience</h4>

              <p className="ugt-card-desc">
                Guests enjoy highly attentive, intuitive service throughout the
                entire voyage.
              </p>
            </div>

            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <Compass size={28} strokeWidth={1.5} />
              </div>

              <h4 className="ugt-card-title">Destination Access</h4>

              <p className="ugt-card-desc">
                Boutique vessels easily reach unique ports and hidden
                destinations unavailable to larger ships.
              </p>
            </div>

            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <Utensils size={28} strokeWidth={1.5} />
              </div>

              <h4 className="ugt-card-title">Exceptional Dining</h4>

              <p className="ugt-card-desc">
                Onboard cuisine highlights high-quality ingredients, regional
                flavors, and elegant presentation.
              </p>
            </div>

            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <Award size={28} strokeWidth={1.5} />
              </div>

              <h4 className="ugt-card-title">Relaxed Luxury</h4>

              <p className="ugt-card-desc">
                The day-to-day travel experience feels sophisticated and refined
                without being overly formal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* IS ANTHOLOGY WORTH THE PRICE? */}
      <section
        className="dmg-info-section dmg-bg-white"
        id="dmg-accommodations"
      >
        <div className="dmg-info-container">
          <div className="dmg-info-grid">
            <div className="dmg-info-content">
              <h2 className="dmg-info-title">Is Anthology Worth the Price?</h2>
              <div className="dmg-info-accent"></div>

              <p className="dmg-info-lead">
                Anthology is positioned in the premium to luxury segment of the
                travel market. While fares may be higher than mainstream cruise
                lines, the added value comes from a highly refined,
                uncompromising approach to travel.
              </p>

              <div className="dmg-info-features dmg-info-features-scrollable">
                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      More Personalized Service
                    </h3>
                    <p className="dmg-info-feature-desc">
                      An intimate passenger scale allows dedicated crew members
                      to provide far greater attention to individual guests.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Better Destination Experience
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Smaller ships easily access unique ports, narrow
                      waterways, and boutique harbors completely unavailable to
                      larger vessels.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Higher Space Per Guest
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Generous ship layouts mean public lounges, decks, and
                      dining areas feel beautifully spacious and never crowded.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Quality Over Quantity
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Rather than overwhelming you with dozens of flashy venues,
                      Anthology emphasizes fewer experiences executed
                      exceptionally well.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="dmg-info-media">
              <div className="dmg-media-wrapper">
                <img
                  //   src={VikingExp5}
                  alt="Premium boutique luxury onboard Anthology"
                  className="dmg-media-img"
                />
                <div className="dmg-media-overlay"></div>

                <div className="dmg-media-badge">
                  <span>Premium Value</span>
                </div>
              </div>
            </div>
          </div>

          <p
            className="dmg-info-lead"
            style={{
              marginTop: "50px",
              textAlign: "center",
              maxWidth: "900px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            For travelers who appreciate boutique luxury and a less commercial
            atmosphere, these distinct advantages often fully justify the
            additional investment.
          </p>
        </div>
      </section>

      {/* WHAT YOU WON'T FIND ON ANTHOLOGY */}
      <section
        className="Ejvs-pricing-section"
        id="Ejvs-considerations"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="Ejvs-container">
          {/* Section Header */}
          <div className="Ejvs-section-header">
            <h2 className="Ejvs-section-title">
              What You Won't Find on Anthology
            </h2>
            <div className="Asc-accent-line"></div>

            <p className="Ejvs-section-subtitle">
              Anthology is intentionally designed for travelers who value
              refined luxury, immersive exploration, and peaceful experiences
              over large-scale entertainment.
            </p>
          </div>

          {/* Main Grid */}
          <div className="Ejvs-pricing-grid">
            {/* Left Card */}
            <div className="Ejvs-pricing-card Ejvs-explora-card">
              <div className="Ejvs-card-header">
                <div className="Ejvs-card-icon-wrap">
                  <Sparkles size={24} className="Ejvs-card-icon" />
                </div>

                <h3 className="Ejvs-card-title">What You Won't Find</h3>
              </div>

              <p className="Ejvs-card-intro">
                Anthology is intentionally different from family-focused mega
                ships. Travelers should not expect:
              </p>

              <ul className="Ejvs-feature-list">
                {[
                  "Massive water parks",
                  "Go-kart tracks",
                  "Surf simulators",
                  "Large casinos",
                  "Crowded pool decks",
                  "Theme park-style attractions",
                ].map((item, i) => (
                  <li key={i} className="Ejvs-feature-item">
                    <div className="Ejvs-feature-icon">
                      <Check size={14} />
                    </div>

                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="Ejvs-card-highlight">
                <p>
                  Instead, the focus remains on relaxation, exploration, and
                  refined luxury.
                </p>
              </div>
            </div>

            {/* Right Card */}
            <div className="Ejvs-pricing-card Ejvs-seabourn-card">
              <div className="Ejvs-card-header">
                <div className="Ejvs-card-icon-wrap">
                  <Award size={24} className="Ejvs-card-icon" />
                </div>

                <h3 className="Ejvs-card-title">Potential Considerations</h3>
              </div>

              <p className="Ejvs-card-intro">
                Anthology may not be the best fit for every traveler. You may
                prefer another cruise line if you're looking for:
              </p>

              <ul className="Ejvs-feature-list">
                {[
                  "Extensive nightlife",
                  "Large-scale entertainment",
                  "Theme parks at sea",
                  "Family-focused attractions",
                  "Budget-friendly pricing",
                  "High-energy onboard activities",
                ].map((item, i) => (
                  <li key={i} className="Ejvs-feature-item">
                    <div className="Ejvs-feature-icon">
                      <Star size={14} />
                    </div>

                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="Ejvs-card-highlight">
                <p>
                  Travelers seeking these experiences may find larger mainstream
                  cruise lines more suitable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHO MIGHT WANT ANOTHER OPTION? ───── */}
      <section
        className="ugt-components-section"
        id="ugt-components"
        style={{ backgroundColor: "var(--bg-white)" }}
      >
        <div className="ugt-components-container">
          <div className="ugt-components-header">
            <h2 className="ugt-components-title">
              Who Might Want Another Option?
            </h2>

            <div className="adg-c-accent-line"></div>
          </div>

          <div className="ugt-components-list">
            <div className="ugt-component-row">
              <div className="ugt-component-image-wrapper">
                <div className="ugt-component-image-container">
                  <img
                    //   src={BestDetination}
                    alt="Travelers considering different cruise options"
                    className="ugt-component-image"
                  />
                </div>
              </div>

              <div className="ugt-component-content">
                <h3 className="ugt-component-subtitle">
                  Anthology May Not Be the Best Fit If You:
                </h3>

                <p className="ugt-component-text">
                  While Anthology delivers an exceptional luxury experience,
                  every traveler has different expectations. You may want to
                  explore other cruise lines if you:
                </p>

                <div className="ugt-questions-box">
                  <span className="ugt-questions-title">
                    You may prefer another option if you:
                  </span>

                  <ul className="ugt-questions-list">
                    {[
                      "Are traveling with young children",
                      "Want extensive onboard attractions",
                      "Prefer action-packed vacations",
                      "Are focused primarily on price",
                      "Enjoy large resort-style ships",
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
                  Understanding your travel priorities is the key to making the
                  right decision and selecting the cruise experience that best
                  matches your travel style.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHO SHOULD BOOK ANTHOLOGY */}
      <section className="Asc-section Asc-bg-soft" id="Asc-who">
        <div className="Asc-container">
          <div className="Asc-section-header">
            <h2 className="Asc-h2">Who Should Book Anthology?</h2>
            <div className="Asc-accent-line"></div>
          </div>

          <div
            className="Asc-who-grid"
            style={{
              gridTemplateColumns: "1fr",
              maxWidth: "800px",
              margin: "0 auto",
            }}
          >
            <div className="Asc-who-card Asc-who-yes">
              <h3 className="Asc-who-title">
                Anthology Is an Excellent Choice For Travelers Who:
              </h3>

              <ul className="Asc-who-list">
                {[
                  "Appreciate luxury without excess",
                  "Enjoy meaningful cultural experiences",
                  "Prefer small ships",
                  "Value exceptional service",
                  "Like relaxed itineraries",
                  "Want immersive destination experiences",
                ].map((item, i) => (
                  <li key={i}>
                    <Check size={16} className="Asc-icon-green" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p
            className="Asc-body-text"
            style={{
              marginTop: "24px",
              textAlign: "center",
              maxWidth: "760px",
              marginInline: "auto",
            }}
          >
            These travelers often find Anthology to be an outstanding
            investment, combining refined luxury, immersive destinations, and
            exceptional personalized service in one thoughtfully curated
            experience.
          </p>
        </div>
      </section>

      {/* ANGELA HUGHES AUTHORITY BOX */}
      <section className="Adg-expert-section" id="Asc-expert-insight">
        <div className="Asc-container">
          {/* TOP HEADING */}
          <div className="Adg-expert-heading">
            <span className="Adg-expert-eyebrow">Luxury Travel Expertise</span>

            <h2 className="Adg-expert-title">Angela Hughes Luxury Authority</h2>

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

      {/* FAQ */}
      <section className="Asc-section Asc-bg-soft" id="Asc-faq">
        <div className="Asc-container">
          <div className="Asc-section-header">
            <h2 className="Asc-h2">Frequently Asked Questions</h2>
            <div className="Asc-accent-line"></div>
            <p className="Asc-faq-intro">
              Everything you need to know about choosing an Anthology voyage.
            </p>
          </div>
          <FAQ />
        </div>
      </section>

      {/* CTA */}
      <section className="Asc-help-section">
        <div className="Asc-help-bg-wrap">
          <img
            // src={CTAImage}
            alt="Anthology luxury cruise"
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

                <h2 className="Asc-help-h2">Plan Your Anthology Experience</h2>

                <div className="Asc-help-accent"></div>
              </div>

              <div className="Asc-help-grid">
                <div className="Asc-help-info">
                  <p className="Asc-help-intro">
                    Trips &amp; Ships Luxury Travel helps discerning travelers
                    identify the right luxury cruise experience based on travel
                    style, luxury preferences, and destination goals.
                  </p>

                  <p className="Asc-help-intro">
                    Whether you prioritize cultural immersion, exceptional
                    dining, intimate accommodations, or multi-generational
                    travel, expert guidance can help create a far more
                    personalized luxury journey.
                  </p>

                  <p className="Asc-help-intro">
                    Connect with Angela Hughes and the Trips &amp; Ships Luxury
                    Travel team to begin planning a personalized boutique luxury
                    cruise experience.
                  </p>

                  <div className="Asc-help-btn-container">
                    <button className="Asc-help-cta-btn">
                      Start Planning Your Anthology Journey
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
                      "Cultural experience recommendations",
                      "Dining and accommodation selection",
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
                    Experienced luxury travel guidance helps ensure your
                    Anthology experience aligns with the level of intimacy,
                    personalization, and destination immersion you truly want.
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

export default AnthologyWorth;
