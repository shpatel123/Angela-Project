import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Users,
  MapPin,
  Award,
  Check,
  Minus,
  Plus,
  ArrowRight,
  Star,
  Compass,
  Sparkles,
  Ship,
  Plane,
  MapPinned,
  Home,
  ShieldCheck,
  HeartPulse,
  BedDouble,
  CalendarClock,
  Waves,
  Moon,
  Dumbbell,
  MoonStar,
  Trees,
} from "lucide-react";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela2.jpeg";

import HeroImage1 from "../../assets/ExploraIVGuide/explora-journeys-luxury-sundeck-ocean-loungers-relaxation.jpg";
import HeroImage2 from "../../assets/ExploraIVGuide/explora-journeys-sky-lounge-outdoor-ocean-view-deck.jpg";
import HeroImage3 from "../../assets/ExploraIVGuide/explora-I-infinity-pool-aerial-view.jpg";
import ExploraPool from "../../assets/WhichExploraSuiteWorthUpgrade/explora-I-oceanfront-pool-lounge-deck.jpg";
import ExploraPool1 from "../../assets/ExploraIVGuide/explora-I-luxury-pool-deck-close-up.jpg";
import ExploraSpa from "../../assets/HowAdvanceShouldBookExplora/explora-journeys-luxury-ocean-wellness-spa-relaxation-room.jpg";
import ExploraOutdoor from "../../assets/HowAdvanceShouldBookExplora/Explora-Journeys.webp";
import ExploraDining from "../../assets/IsExploraGoodForFamilies/Fine-Dining.webp";
import ExploraDestination from "../../assets/HowAdvanceShouldBookExplora/allinn-estonia-old-town-summer-travel-aerial.jpg";
import ExploraDestination2 from "../../assets/WhichMediterraneanItineraryIsBest/EXPLORA-II-Mediterranean2.jpg";
import LuxuryOceanfrontPool from "../../assets/IsExploraGoodForFamilies/explora-I-luxury-pool-deck-daybeds.jpg";
import LuxuryOceanfront from "../../assets/IsExploraGoodForFamilies/explora-journeys-retreat-residence-luxury-suite-living-room.webp";
import LuxuryOceanfront1 from "../../assets/ExploraIVGuide/explora-journeys-serenity-residence-private-whirlpool-suite.jpg";
import LuxuryOceanfront2 from "../../assets/IsExploraGoodForFamilies/explora-luxury-outdoor.jpg";
import ExploraShip from "../../assets/HowAdvanceShouldBookExplora/ExploraCruise3.webp";

import { Helmet } from "react-helmet-async";

/* ── Schema ─────────────────────────────────────────────────────── */
const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://tripsandships.com/#organization",
      name: "Trips & Ships Luxury Travel",
      url: "https://tripsandships.com",
      logo: "https://www.tripsandships.com/Copy-of-TRIPSSHIPS-e1592486640831.webp",
    },
    {
      "@type": "TravelAgency",
      "@id": "https://tripsandships.com/#travelagency",
      name: "Trips & Ships Luxury Travel",
      url: "https://tripsandships.com",
      description:
        "Luxury travel agency specializing in luxury cruises, safaris, expeditions, and premium travel experiences.",
    },
    {
      "@type": "Person",
      "@id": "https://tripsandships.com/#person",
      name: "Angela Hughes",
      jobTitle: "CEO of Trips & Ships Luxury Travel",
      description:
        "Luxury travel expert with over 40 years of experience and travel to 121+ countries.",
    },
    {
      "@type": "WebPage",
      "@id":
        "https://tripsandships.com/explora-journeys-wellness-experience/#webpage",
      name: "Explora Journeys Wellness Experience",
      url: "https://tripsandships.com/explora-journeys-wellness-experience",
      description:
        "Discover the wellness experience on Explora Journeys, including the luxury spa, fitness center, wellness programs, healthy dining, outdoor relaxation spaces, and why Explora is ideal for travelers seeking rejuvenation at sea.",
    },
    {
      "@type": "Article",
      "@id":
        "https://tripsandships.com/explora-journeys-wellness-experience/#article",
      headline:
        "Explora Journeys Wellness Experience | Spa, Fitness & Luxury Relaxation at Sea",
      description:
        "A complete guide to the wellness experience aboard Explora Journeys, covering the Ocean Wellness Spa, thermal facilities, fitness center, group classes, healthy dining, and slow travel philosophy.",
      author: {
        "@type": "Person",
        name: "Angela Hughes",
      },
      publisher: {
        "@type": "Organization",
        name: "Trips & Ships Luxury Travel",
      },
      inLanguage: "en-US",
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://tripsandships.com/explora-journeys-wellness-experience/#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://tripsandships.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Explora Journeys",
          item: "https://tripsandships.com/luxury-explora-journeys-guide",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Explora Journeys Wellness Experience",
          item: "https://tripsandships.com/explora-journeys-wellness-experience",
        },
      ],
    },
    {
      "@type": "HealthAndBeautyBusiness",
      "@id":
        "https://tripsandships.com/explora-journeys-wellness-experience/#spa",
      name: "Ocean Wellness Spa – Explora Journeys",
      description:
        "The Ocean Wellness Spa aboard Explora Journeys offers signature massages, facial treatments, body therapies, aromatherapy, couples treatments, beauty services, and relaxation rituals inspired by global wellness traditions.",
      brand: {
        "@type": "Organization",
        name: "Explora Journeys",
      },
    },
    {
      "@type": "Service",
      "@id":
        "https://tripsandships.com/explora-journeys-wellness-experience/#service",
      serviceType: "Luxury Cruise & Wellness Vacation Planning",
      provider: {
        "@type": "TravelAgency",
        name: "Trips & Ships Luxury Travel",
      },
      areaServed: "Worldwide",
      description:
        "Personalized planning for wellness-focused Explora Journeys sailings, including spa recommendations, suite selection, and itinerary guidance.",
    },
    {
      "@type": "ItemList",
      "@id":
        "https://tripsandships.com/explora-journeys-wellness-experience/#itemlist",
      name: "What This Wellness Guide Covers",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Wellness Is More Than a Spa",
        },
        { "@type": "ListItem", position: 2, name: "Ocean Wellness Spa" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Thermal Wellness Facilities",
        },
        { "@type": "ListItem", position: 4, name: "Ocean-View Fitness Center" },
        { "@type": "ListItem", position: 5, name: "Group Fitness Classes" },
        { "@type": "ListItem", position: 6, name: "Outdoor Wellness Spaces" },
        { "@type": "ListItem", position: 7, name: "Healthy Dining Choices" },
        { "@type": "ListItem", position: 8, name: "Wellness in Your Suite" },
        { "@type": "ListItem", position: 9, name: "Sleep & Relaxation" },
        {
          "@type": "ListItem",
          position: 10,
          name: "The Benefits of Slow Travel",
        },
        { "@type": "ListItem", position: 11, name: "Mental Wellness" },
        { "@type": "ListItem", position: 12, name: "Destination Wellness" },
        {
          "@type": "ListItem",
          position: 13,
          name: "Who Will Appreciate This Experience",
        },
        {
          "@type": "ListItem",
          position: 14,
          name: "Tips for Enjoying the Wellness Experience",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id":
        "https://tripsandships.com/explora-journeys-wellness-experience/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Does Explora Journeys have a spa?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Every Explora ship features the Ocean Wellness Spa with a range of treatments, therapies, and relaxation facilities.",
          },
        },
        {
          "@type": "Question",
          name: "Is the wellness experience included?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Many wellness amenities such as the fitness center and relaxation spaces are included. Spa treatments typically have an additional charge.",
          },
        },
        {
          "@type": "Question",
          name: "Are fitness classes available?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Guests can participate in yoga, stretching, meditation, and other fitness classes during the voyage.",
          },
        },
        {
          "@type": "Question",
          name: "Does Explora offer healthy dining?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. Restaurants feature fresh seafood, vegetables, lean proteins, plant-based dishes, and wellness-focused menu options.",
          },
        },
        {
          "@type": "Question",
          name: "Is Explora good for relaxation?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Quiet public spaces, spacious suites, minimal announcements, and elegant design create one of the most relaxing environments at sea.",
          },
        },
        {
          "@type": "Question",
          name: "Can couples enjoy the spa together?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Couples treatments are among the most popular spa experiences onboard.",
          },
        },
        {
          "@type": "Question",
          name: "Is there a gym?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Every ship includes a fully equipped, ocean-view fitness center.",
          },
        },
        {
          "@type": "Question",
          name: "Are wellness facilities crowded?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Because of the ship's spacious design and lower guest capacity, wellness areas generally feel calm and uncrowded.",
          },
        },
        {
          "@type": "Question",
          name: "Is Explora better than mainstream cruise lines for wellness?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For travelers seeking relaxation, wellness, and quiet luxury, many guests consider Explora among the finest wellness-focused cruise experiences available.",
          },
        },
        {
          "@type": "Question",
          name: "Should I reserve spa treatments in advance?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Booking early is recommended, especially for sea days and popular treatment times.",
          },
        },
        {
          "@type": "Question",
          name: "What brands are used for spa treatments onboard Explora?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Explora Journeys partners with luxury beauty and wellness brands including Dr. LEVY Switzerland and Aromatherapy Associates to offer high-performance skin care products and essential oil therapies.",
          },
        },
        {
          "@type": "Question",
          name: "What thermal suite facilities are available at the spa?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The thermal suite includes a hydrotherapy pool, a Finnish sauna, a salt inhalation room, a steam room, experience showers, and a heated marble lounger relaxation area.",
          },
        },
        {
          "@type": "Question",
          name: "Are outdoor fitness facilities available on Explora ships?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. In addition to the indoor fitness center, the ship features an outdoor sports court (Helmsman Arena), an outdoor running track, and outdoor fitness equipment (such as Technogym spin bikes) on the open decks.",
          },
        },
        {
          "@type": "Question",
          name: "Is there a hair and beauty salon onboard?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, every ship features a modern hair and nail salon offering blowouts, manicures, pedicures, and grooming services for both men and women.",
          },
        },
        {
          "@type": "Question",
          name: "Does the in-suite dining offer wellness-focused menus?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. The 24-hour complimentary in-suite dining features a selection of healthy, calorie-conscious, vegetarian, vegan, and gluten-free items, allowing you to maintain your wellness routine in private.",
          },
        },
      ],
    },
  ],
};

/* ── FAQ Component ─────────────────────────────────────────────── */
function FAQ() {
  const [open, setOpen] = useState(null);

  const faqData = [
    {
      q: "Does Explora Journeys have a spa?",
      a: "Yes. Every Explora ship features the Ocean Wellness Spa with a range of treatments, therapies, and relaxation facilities.",
    },
    {
      q: "Is the wellness experience included?",
      a: "Many wellness amenities such as the fitness center and relaxation spaces are included. Spa treatments typically have an additional charge.",
    },
    {
      q: "Are fitness classes available?",
      a: "Yes. Guests can participate in yoga, stretching, meditation, and other fitness classes during the voyage.",
    },
    {
      q: "Does Explora offer healthy dining?",
      a: "Absolutely. Restaurants feature fresh seafood, vegetables, lean proteins, plant-based dishes, and wellness-focused menu options.",
    },
    {
      q: "Is Explora good for relaxation?",
      a: "Yes. Quiet public spaces, spacious suites, minimal announcements, and elegant design create one of the most relaxing environments at sea.",
    },
    {
      q: "Can couples enjoy the spa together?",
      a: "Yes. Couples treatments are among the most popular spa experiences onboard.",
    },
    {
      q: "Is there a gym?",
      a: "Yes. Every ship includes a fully equipped, ocean-view fitness center.",
    },
    {
      q: "Are wellness facilities crowded?",
      a: "Because of the ship's spacious design and lower guest capacity, wellness areas generally feel calm and uncrowded.",
    },
    {
      q: "Is Explora better than mainstream cruise lines for wellness?",
      a: "For travelers seeking relaxation, wellness, and quiet luxury, many guests consider Explora among the finest wellness-focused cruise experiences available.",
    },
    {
      q: "Should I reserve spa treatments in advance?",
      a: "Yes. Booking early is recommended, especially for sea days and popular treatment times.",
    },
    {
      q: "What brands are used for spa treatments onboard Explora?",
      a: "Explora Journeys partners with luxury beauty and wellness brands including Dr. LEVY Switzerland and Aromatherapy Associates to offer high-performance skin care products and essential oil therapies.",
    },
    {
      q: "What thermal suite facilities are available at the spa?",
      a: "The thermal suite includes a hydrotherapy pool, a Finnish sauna, a salt inhalation room, a steam room, experience showers, and a heated marble lounger relaxation area.",
    },
    {
      q: "Are outdoor fitness facilities available on Explora ships?",
      a: "Yes. In addition to the indoor fitness center, the ship features an outdoor sports court (Helmsman Arena), an outdoor running track, and outdoor fitness equipment (such as Technogym spin bikes) on the open decks.",
    },
    {
      q: "Is there a hair and beauty salon onboard?",
      a: "Yes, every ship features a modern hair and nail salon offering blowouts, manicures, pedicures, and grooming services for both men and women.",
    },
    {
      q: "Does the in-suite dining offer wellness-focused menus?",
      a: "Yes. The 24-hour complimentary in-suite dining features a selection of healthy, calorie-conscious, vegetarian, vegan, and gluten-free items, allowing you to maintain your wellness routine in private.",
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

/* ── Main Component ──────────────────────────────────────────────── */
const ExploraJourneysWellnessExperience = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [readMore, setReadMore] = useState(false);
  const [readMoreDestination, setReadMoreDestination] = useState(false);

  const images = [HeroImage1, HeroImage2, HeroImage3];

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
          Explora Journeys Wellness Experience | Spa, Fitness & Luxury
          Relaxation at Sea
        </title>
        <meta name="title" content="Explora Journeys Wellness Experience" />
        <meta
          name="description"
          content="Discover the wellness experience on Explora Journeys, including the luxury spa, fitness center, wellness programs, healthy dining, outdoor relaxation spaces, and why Explora is ideal for travelers seeking rejuvenation at sea."
        />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>
      <Nav />

      {/* ── HERO ───────────────────────────────────────────────────── */}
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
          <h1>Explora Journeys Wellness Experience</h1>

          <p>
            Luxury travel isn't only about beautiful destinations or exceptional
            accommodations—it's also about how you feel when you return home.
          </p>

          <p>
            Explora Journeys was created around the belief that true luxury
            includes well-being, balance, and rejuvenation. Rather than treating
            wellness as a single onboard attraction, Explora integrates it into
            nearly every aspect of the voyage.
          </p>

          {readMore && (
            <>
              <p>
                From tranquil spa treatments and ocean-view fitness spaces to
                healthy cuisine and peaceful outdoor lounges, the ship is
                designed to help guests slow down, recharge, and reconnect with
                themselves.
              </p>

              <p>
                If wellness is an important part of your travels, Explora
                Journeys offers one of the most comprehensive and relaxing
                experiences at sea.
              </p>
            </>
          )}

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

      {/* ── WELLNESS IS MORE THAN A SPA ─────────────────────────────── */}
      <section
        className="ugt-components-section"
        id="wellness-more-than-spa"
        style={{ backgroundColor: "var(--bg-white)" }}
      >
        <div className="ugt-components-container">
          <div className="ugt-components-header">
            <h2 className="ugt-components-title">
              Wellness Is More Than a Spa
            </h2>
            <div className="adg-c-accent-line"></div>
          </div>

          <div className="ugt-components-list">
            <div className="ugt-component-row">
              <div className="ugt-component-image-wrapper">
                <div className="ugt-component-image-container">
                  <img
                    src={ExploraPool}
                    alt="Peaceful pool deck aboard Explora Journeys reflecting the ship's wellness focus"
                    className="ugt-component-image"
                  />
                </div>
              </div>

              <div className="ugt-component-content">
                <p className="ugt-component-text">
                  On many cruise ships, wellness begins and ends with a spa
                  appointment. <strong>Explora Journeys</strong> takes a much
                  broader approach, reflecting well-being in nearly every part
                  of the voyage.
                </p>

                <div className="ugt-questions-box">
                  <span className="ugt-questions-title">
                    Wellness is reflected in:
                  </span>

                  <ul className="ugt-questions-list">
                    {[
                      "Spacious accommodations",
                      "Peaceful public spaces",
                      "Healthy dining",
                      "Ocean-focused design",
                      "Fitness programs",
                      "Relaxation experiences",
                      "Personalized service",
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
                  Everything works together to create a calmer and less
                  stressful vacation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── THERMAL WELLNESS FACILITIES ───────────────────────────────── */}
      <section className="adg-section" id="adg-thermal-wellness">
        <div className="adg-container">
          <div className="adg-section-header" style={{ marginBottom: "60px" }}>
            <h2 className="adg-h2">Thermal Wellness Facilities</h2>

            <div className="adg-accent-line"></div>

            <p
              className="Asc-body-text"
              style={{ textAlign: "center", marginTop: "15px" }}
            >
              Many guests spend hours enjoying the thermal wellness area before
              or after spa treatments. These peaceful spaces are designed to
              promote relaxation, rejuvenation, and overall well-being
              throughout the voyage.
            </p>
          </div>

          <div className="adg-split-layout">
            {/* Left Side */}
            <div className="adg-content-card-side">
              <img
                  src={ExploraPool1}
                alt="Thermal wellness facilities aboard Explora Journeys"
                className="adg-side-image"
                style={{ height: "35vh" }}
              />

              <div className="adg-info-card">
                <div className="adg-card-meta">
                  <Sparkles size={28} />

                  <span className="adg-meta-label">
                    Relax • Restore • Rejuvenate
                  </span>
                </div>

                <p className="adg-card-lead">
                  The thermal wellness area provides a calming retreat where
                  guests can unwind before or after treatments while enjoying a
                  peaceful, spa-inspired atmosphere.
                </p>
              </div>
            </div>

            {/* Right Side */}
            <div className="adg-list-side">
              {[
                "Steam rooms",
                "Dry saunas",
                "Hydrotherapy experiences",
                "Relaxation lounges",
                "Heated wellness spaces",
                "Quiet meditation areas",
              ].map((item, i) => (
                <div key={i} className="adg-list-item-card">
                  <div className="adg-list-item-icon">
                    <Check size={18} strokeWidth={2.5} />
                  </div>

                  <h4 className="adg-list-item-label">{item}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SLOW TRAVEL & MENTAL WELLNESS ───────────────────────────── */}
      <section
        className="Ejvs-pricing-section"
        id="slow-travel-mental-wellness"
        style={{ backgroundColor: "var(--bg-white)" }}
      >
        <div className="Ejvs-container">
          <div className="Ejvs-section-header">
            <h2 className="Ejvs-section-title">
              The Benefits of <br /> Slow Travel
            </h2>
            <div className="Asc-accent-line"></div>
            <p className="Ejvs-section-subtitle">
              Explora Journeys embraces the concept of slow travel—supporting
              both physical rest and emotional well-being throughout the voyage.
            </p>
          </div>

          <div className="Ejvs-pricing-grid">
            {/* Slow Travel */}
            <div className="Ejvs-pricing-card Ejvs-explora-card">
              <div className="Ejvs-card-header">
                <div className="Ejvs-card-icon-wrap">
                  <Moon size={24} className="Ejvs-card-icon" />
                </div>

                <h3 className="Ejvs-card-title">Embracing Slow Travel</h3>
              </div>

              <p className="Ejvs-card-intro">
                Instead of rushing from one activity to another, guests are
                encouraged to move at their own pace.
              </p>

              <ul className="Ejvs-feature-list">
                {[
                  "Sleep in",
                  "Enjoy leisurely breakfasts",
                  "Spend time by the pool",
                  "Visit the spa",
                  "Exercise at their own pace",
                  "Explore destinations without feeling hurried",
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
                  The slower rhythm contributes significantly to the overall
                  wellness experience.
                </p>
              </div>
            </div>

            {/* Mental Wellness */}
            <div className="Ejvs-pricing-card Ejvs-seabourn-card">
              <div className="Ejvs-card-header">
                <div className="Ejvs-card-icon-wrap">
                  <HeartPulse size={24} className="Ejvs-card-icon" />
                </div>

                <h3 className="Ejvs-card-title">Mental Wellness</h3>
              </div>

              <p className="Ejvs-card-intro">
                Luxury wellness isn't only physical. Explora Journeys also
                encourages emotional well-being by providing opportunities to
                disconnect from daily stress.
              </p>

              <ul className="Ejvs-feature-list">
                {[
                  "Reading",
                  "Watching the ocean",
                  "Practicing mindfulness",
                  "Enjoying quiet conversations",
                  "Exploring new destinations",
                  "Relaxing without rigid schedules",
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
                  The atmosphere naturally promotes mindfulness and balance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── OCEAN WELLNESS SPA ───────────────────────────────────────── */}
      <section className="adg-c-section adg-c-bg-soft" id="ocean-wellness-spa">
        <div className="adg-c-container">
          <div className="adg-c-section-header">
            <h2 className="adg-c-h2">Ocean Wellness Spa</h2>

            <div className="adg-c-accent-line"></div>

            <p className="Asc-section-intro">
              The Ocean Wellness Spa serves as the heart of the ship's wellness
              experience. Designed as a peaceful sanctuary, it combines elegant
              surroundings with treatments inspired by global wellness
              traditions.
            </p>
          </div>

          <div className="adg-c-overview-layout">
            <div className="adg-c-overview-icons">
              {[
                "Signature massages",
                "Facial treatments",
                "Body therapies",
                "Aromatherapy",
                "Couples treatments",
                "Beauty services",
                "Relaxation rituals",
              ].map((label, i) => (
                <div key={i} className="adg-c-overview-item">
                  <span className="adg-c-overview-icon">
                    <Sparkles size={16} strokeWidth={2.5} />
                  </span>

                  <span className="adg-c-overview-label">{label}</span>
                </div>
              ))}
            </div>

            <div className="adg-c-overview-right">
              <div className="adg-c-overview-callout">
                <div className="adg-c-overview-callout-inner">
                  <Star size={28} className="adg-c-callout-star" />

                  <p className="adg-c-callout-text">
                    The Ocean Wellness Spa focuses on personalized care,
                    creating treatments tailored to each guest rather than
                    simply offering a standard spa menu.
                  </p>
                </div>
              </div>

              <div className="adg-c-overview-image-wrap">
                <img
                  src={ExploraSpa}
                  alt="Ocean Wellness Spa aboard Explora Journeys"
                  className="adg-c-overview-img"
                />

                <div className="adg-c-overview-img-overlay">
                  <span className="adg-c-overview-img-label">
                    Relax • Restore • Renew
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── OCEAN-VIEW FITNESS CENTER ─────────────────────────────── */}
      <section className="dmg-info-section" id="ocean-view-fitness-center">
        <div className="dmg-info-container">
          <div className="dmg-info-header">
            <h2 className="dmg-info-title">Ocean-View Fitness Center</h2>
            <div className="dmg-info-accent"></div>
          </div>

          <div className="dmg-info-grid">
            <div className="dmg-info-content">
              <p className="dmg-info-lead">
                Exercise feels different when surrounded by panoramic ocean
                views. Whether maintaining your fitness routine or simply
                staying active while traveling, the facility offers everything
                needed for a complete workout.
              </p>

              <div className="dmg-info-features dmg-info-features-scrollable">
                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Dumbbell size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Cardio &amp; Strength Equipment
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Modern cardio machines, strength-training equipment, and
                      free weights for every fitness level.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Functional Training Areas
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Dedicated spaces for functional training, stretching, and
                      mobility work.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Waves size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Ocean-Facing Workout Zones
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Floor-to-ceiling views turn every workout into a moment of
                      calm above the sea.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Group Fitness Classes
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Instructor-led{" "}
                      <strong>
                        yoga, Pilates, stretching, meditation, functional
                        fitness,
                      </strong>{" "}
                      and low-impact sessions designed to accommodate a wide
                      range of fitness levels.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="dmg-info-media">
              <div className="dmg-media-wrapper">
                <img
                  src={ExploraOutdoor}
                  alt="Ocean-view fitness and wellness deck aboard Explora Journeys"
                  className="dmg-media-img"
                  style={{ height: "650px" }}
                />
                <div className="dmg-media-overlay"></div>

                <div className="dmg-media-badge">
                  <span>Ocean Views • Full-Service Fitness</span>
                </div>
              </div>
            </div>
          </div>

          <p
            className="dmg-info-lead"
            style={{
              maxWidth: "900px",
              margin: "40px auto 0",
              textAlign: "center",
            }}
          >
            Guests can participate in a variety of instructor-led wellness
            sessions throughout the voyage, all designed to accommodate a wide
            range of fitness levels.
          </p>
        </div>
      </section>

      {/* GROUP FITNESS CLASSES & OUTDOOR WELLNESS SPACES */}
      <section
        className="azs-entertainment-section"
        id="group-fitness-outdoor-wellness"
      >
        <div className="azs-container">
          <div className="azs-section-header">
            <h2 className="azs-section-title">
              Group Fitness Classes & Outdoor Wellness Spaces
            </h2>

            <div className="azs-section-accent"></div>

            <p className="azs-section-subtitle">
              Stay active with instructor-led fitness sessions and enjoy
              beautifully designed outdoor spaces that make wellness part of
              every day at sea.
            </p>
          </div>

          <div className="azs-entertainment-grid">
            {/* Group Fitness Classes */}
            <div className="azs-entertainment-card azs-azamara-ent">
              <div className="azs-ent-header">
                <div className="azs-ent-icon-circle">
                  <Dumbbell size={24} className="azs-ent-icon" />
                </div>

                <h3 className="azs-ent-title">Group Fitness Classes</h3>
              </div>

              <p className="azs-ent-intro">
                Guests can participate in a variety of instructor-led wellness
                sessions throughout the voyage, with classes suitable for a wide
                range of fitness levels.
              </p>

              <div className="azs-ent-body">
                <h4 className="azs-ent-group-title">
                  Popular Classes Include:
                </h4>

                <ul className="azs-ent-list">
                  {[
                    "Yoga",
                    "Pilates",
                    "Stretching",
                    "Meditation",
                    "Functional fitness",
                    "Mobility classes",
                    "Low-impact exercise",
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
                    Classes are welcoming for beginners while still offering
                    value for experienced fitness enthusiasts.
                  </p>
                </div>
              </div>
            </div>

            {/* Outdoor Wellness Spaces */}
            <div className="azs-entertainment-card azs-seabourn-ent">
              <div className="azs-ent-header">
                <div className="azs-ent-icon-circle">
                  <Trees size={24} className="azs-ent-icon" />
                </div>

                <h3 className="azs-ent-title">Outdoor Wellness Spaces</h3>
              </div>

              <p className="azs-ent-intro">
                One of Explora Journeys' greatest wellness features is the
                abundance of outdoor space, where fresh sea air and panoramic
                ocean views are part of the experience.
              </p>

              <div className="azs-ent-body">
                <h4 className="azs-ent-group-title">Guests Can Relax In:</h4>

                <ul className="azs-ent-list">
                  {[
                    "Infinity pools",
                    "Oceanfront lounges",
                    "Quiet terraces",
                    "Sun decks",
                    "Outdoor seating areas",
                    "Walking spaces",
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

                <div className="azs-ent-highlight-box azs-seabourn-ent-highlight">
                  <p className="azs-ent-highlight-text">
                    Fresh sea air and uninterrupted ocean views naturally become
                    part of the wellness experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HEALTHY DINING CHOICES ───────────────────────────────────── */}
      <section
        className="dmg-info-section dmg-bg-white"
        id="healthy-dining-choices"
      >
        <div className="dmg-info-container">
          <div className="dmg-info-grid">
            {/* Left Side Image */}
            <div className="dmg-info-media">
              <div className="dmg-media-wrapper">
                <img
                  src={ExploraDining}
                  alt="Healthy Mediterranean cuisine aboard Explora Journeys"
                  className="dmg-media-img"
                  style={{ height: "650px" }}
                />

                <div className="dmg-media-overlay"></div>

                <div className="dmg-media-badge">
                  <span>Fresh • Healthy • Delicious</span>
                </div>
              </div>
            </div>

            {/* Right Side Content */}
            <div className="dmg-info-content">
              <h2 className="dmg-info-title">Healthy Dining Choices</h2>

              <div className="dmg-info-accent"></div>

              <p className="dmg-info-lead">
                Nutrition plays an important role in overall well-being.
                Explora's culinary team offers a wide selection of healthy
                dining options throughout the ship, making it easy to enjoy
                balanced, flavorful meals every day.
              </p>

              <div className="dmg-info-features dmg-info-features-scrollable">
                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>

                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Fresh &amp; Seasonal Ingredients
                    </h3>

                    <p className="dmg-info-feature-desc">
                      Fresh seafood, seasonal vegetables, lean proteins, and
                      light Mediterranean cuisine prepared with exceptional
                      quality.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>

                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Wellness-Focused Options
                    </h3>

                    <p className="dmg-info-feature-desc">
                      Plant-based meals, gluten-free selections, fresh fruit,
                      and smoothies are available across a variety of dining
                      venues.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>

                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Balanced Everyday Dining
                    </h3>

                    <p className="dmg-info-feature-desc">
                      Healthy choices are thoughtfully integrated into the
                      menus, allowing guests to enjoy nutritious meals without
                      sacrificing flavor or variety.
                    </p>
                  </div>
                </div>
              </div>

              <p
                className="dmg-info-lead"
                style={{ marginTop: "24px", fontSize: "1rem" }}
              >
                Healthy eating never feels restrictive—it simply becomes another
                enjoyable part of the journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WELLNESS IN YOUR SUITE */}
      <section className="azs-dining-section" id="azs-suite-wellness">
        <div className="azs-container">
          <div className="azs-section-header">
            <h2 className="azs-section-title">Wellness in Your Suite</h2>

            <div className="azs-section-accent"></div>

            <p className="azs-section-subtitle">
              Every suite aboard Explora Journeys is thoughtfully designed to
              encourage rest, relaxation, and restorative sleep throughout your
              voyage.
            </p>
          </div>

          <div className="azs-dining-grid">
            {/* Wellness in Your Suite */}
            <div className="azs-dining-card azs-seabourn-dining">
              <div className="azs-dining-image-wrap">
                <img
                  src={LuxuryOceanfront}
                  alt="Luxury suite aboard Explora Journeys"
                  className="azs-dining-img"
                />

                <div className="azs-dining-badge-wrapper">
                  <span className="azs-dining-badge azs-seabourn-badge">
                    Private Wellness Retreat
                  </span>
                </div>
              </div>

              <div className="azs-dining-content">
                <div className="azs-dining-header">
                  <div className="azs-dining-icon-circle">
                    <BedDouble size={24} className="azs-dining-icon" />
                  </div>

                  <h3 className="azs-dining-title">Wellness in Your Suite</h3>
                </div>

                <p className="azs-dining-intro">
                  Every suite has been designed to provide a peaceful sanctuary
                  where guests can relax, recharge, and enjoy the journey at
                  their own pace.
                </p>

                <div className="azs-dining-body">
                  <h4 className="azs-dining-group-title">Guests Enjoy:</h4>

                  <ul className="azs-dining-list">
                    {[
                      "Luxury bedding",
                      "Spacious layouts",
                      "Natural lighting",
                      "Private terraces",
                      "Quiet surroundings",
                      "Premium bath amenities",
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

                  <div className="azs-dining-highlight-box azs-seabourn-highlight">
                    <p className="azs-dining-highlight-text">
                      Your suite becomes a personal retreat for morning coffee,
                      afternoon reading, or watching the sunset from your
                      private terrace.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sleep & Relaxation */}
            <div className="azs-dining-card azs-azamara-dining">
              <div className="azs-dining-image-wrap">
                <img
                  src={LuxuryOceanfront1}
                  alt="Peaceful relaxation aboard Explora Journeys"
                  className="azs-dining-img"
                />

                <div className="azs-dining-badge-wrapper">
                  <span className="azs-dining-badge azs-azamara-badge">
                    Rest &amp; Relaxation
                  </span>
                </div>
              </div>

              <div className="azs-dining-content">
                <div className="azs-dining-header">
                  <div className="azs-dining-icon-circle">
                    <MoonStar size={24} className="azs-dining-icon" />
                  </div>

                  <h3 className="azs-dining-title">Sleep &amp; Relaxation</h3>
                </div>

                <p className="azs-dining-intro">
                  Many travelers underestimate how restorative a luxury cruise
                  can be. Explora creates an environment that naturally promotes
                  better rest and relaxation.
                </p>

                <div className="azs-dining-body">
                  <h4 className="azs-dining-group-title">
                    Explora Supports Rest Through:
                  </h4>

                  <ul className="azs-dining-list">
                    {[
                      "Quiet public spaces",
                      "Comfortable suites",
                      "Premium mattresses",
                      "Minimal onboard announcements",
                      "Relaxed daily schedules",
                      "Calm evening entertainment",
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

                  <div className="azs-dining-highlight-box azs-azamara-highlight">
                    <p className="azs-dining-highlight-text">
                      Instead of overstimulation, guests enjoy a peaceful
                      atmosphere that encourages deeper relaxation and quality
                      sleep.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DESTINATION WELLNESS ─────────────────────────────────────── */}
      <section className="luc-why-section" id="destination-wellness">
        <div className="luc-why-container">
          {/* LEFT — stacked images */}
          <div className="luc-why-images">
            <div className="luc-why-img-main-wrap" style={{ color: "#fff" }}>
              <img
                src={ExploraDestination}
                alt="Scenic coastal destination visited by Explora Journeys"
                className="luc-why-img-main"
              />
              <div className="luc-why-img-overlay"></div>
            </div>

            <div className="luc-why-img-accent-wrap" style={{ color: "#fff" }}>
              <img
                src={ExploraDestination2}
                alt="Guests enjoying destination wellness ashore with Explora Journeys"
                className="luc-why-img-accent"
              />

              <div className="luc-why-img-badge">
                <span className="luc-why-badge-num">6</span>
                <span className="luc-why-badge-text">Wellness Elements</span>
              </div>
            </div>
          </div>

          {/* RIGHT — content */}
          <div className="luc-why-content">
            <h2 className="luc-why-title">Destination Wellness</h2>

            <div className="aac-accent-line aac-accent-white"></div>

            <p className="luc-why-intro">
              Wellness extends beyond the ship itself. Longer port stays allow
              guests to experience each destination at a more relaxed pace, and
              many itineraries include opportunities to enjoy:
            </p>

            <div className="luc-why-features">
              {[
                {
                  num: "01",
                  title: "Scenic Coastal Walks",
                  desc: "Unhurried strolls through some of the world's most beautiful coastal towns.",
                },
                {
                  num: "02",
                  title: "Beach Relaxation",
                  desc: "Time to unwind on quiet beaches during longer port stays.",
                },
                {
                  num: "03",
                  title: "Cultural Immersion",
                  desc: "Meaningful encounters with local traditions and communities.",
                },
                {
                  num: "04",
                  title: "Nature Experiences",
                  desc: "Opportunities to reconnect with the natural landscapes at each destination.",
                },
                {
                  num: "05",
                  title: "Local Wellness Traditions",
                  desc: "A chance to experience wellness practices unique to each region visited.",
                },
                {
                  num: "06",
                  title: "Outdoor Exploration",
                  desc: "Extended time ashore designed for a relaxed, unhurried pace.",
                },
              ]
                .slice(0, readMoreDestination ? 6 : 3)
                .map((feat, i) => (
                  <div key={i} className="luc-why-feature">
                    <div className="luc-why-feature-num">{feat.num}</div>

                    <div className="luc-why-feature-body">
                      <h3 className="luc-why-feature-title">{feat.title}</h3>
                      <p className="luc-why-feature-desc">{feat.desc}</p>
                    </div>
                  </div>
                ))}
            </div>

            <div
              className="Scenic_readmore_wrapper"
              style={{ marginTop: "25px", textAlign: "left" }}
            >
              <button
                className="Scenic_readmore_btn"
                onClick={() => setReadMoreDestination(!readMoreDestination)}
              >
                {readMoreDestination ? "Read Less" : "Read More"}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── PERSONALIZED WELLNESS ───────────────────────────────────── */}
      <section
        className="ugt-components-section"
        id="personalized-wellness"
        style={{ backgroundColor: "var(--bg-white)" }}
      >
        <div className="ugt-components-container">
          <div className="ugt-components-header">
            <h2 className="ugt-components-title">Personalized Wellness</h2>
            <div className="adg-c-accent-line"></div>
          </div>

          <div className="ugt-components-list">
            <div className="ugt-component-row">
              <div className="ugt-component-image-wrapper">
                <div className="ugt-component-image-container">
                  <img
                    src={LuxuryOceanfrontPool}
                    alt="Private whirlpool suite reflecting Explora Journeys' personalized wellness approach"
                    className="ugt-component-image"
                  />
                </div>
              </div>

              <div className="ugt-component-content">
                <p className="ugt-component-text">
                  Every traveler defines wellness differently. Some guests focus
                  on fitness. Others prioritize relaxation. Some enjoy healthy
                  cuisine, while others simply appreciate uninterrupted time
                  with loved ones.
                </p>

                <div className="ugt-questions-box">
                  <span className="ugt-questions-title">
                    Explora's flexible approach lets every guest:
                  </span>

                  <ul className="ugt-questions-list">
                    {[
                      "Build their own wellness rhythm",
                      "Choose fitness, relaxation, or both",
                      "Enjoy healthy cuisine on their terms",
                      "Prioritize uninterrupted time together",
                      "Create a vacation matched to personal goals",
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
                  Explora's flexible approach allows every guest to create a
                  wellness experience that matches their personal goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WELLNESS COMPARED WITH MAINSTREAM CRUISE LINES ──────────── */}
      <section
        className="Asc-section Asc-bg-white"
        id="wellness-vs-mainstream"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="Asc-container">
          <div className="Asc-section-header">
            <h2 className="Asc-h2">
              Wellness Compared with Mainstream Cruise Lines
            </h2>
            <div className="Asc-accent-line"></div>

            <p className="Asc-body-text">
              Rather than treating wellness as a separate activity, Explora
              makes it part of the overall cruise experience.
            </p>
          </div>

          <div className="Asc-table-wrapper">
            <table className="Asc-fleet-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Explora Journeys</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Luxury Spa</td>
                  <td>✔</td>
                </tr>
                <tr>
                  <td>Ocean-View Fitness Center</td>
                  <td>✔</td>
                </tr>
                <tr>
                  <td>Yoga &amp; Wellness Classes</td>
                  <td>✔</td>
                </tr>
                <tr>
                  <td>Healthy Dining</td>
                  <td>✔</td>
                </tr>
                <tr>
                  <td>Spacious Outdoor Areas</td>
                  <td>✔</td>
                </tr>
                <tr>
                  <td>Quiet Atmosphere</td>
                  <td>✔</td>
                </tr>
                <tr>
                  <td>Personalized Wellness</td>
                  <td>✔</td>
                </tr>
                <tr>
                  <td>Relaxed Daily Schedule</td>
                  <td>✔</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p
            className="Asc-body-text"
            style={{
              maxWidth: "760px",
              margin: "30px auto 0",
              textAlign: "center",
            }}
          >
            For travelers seeking relaxation, wellness, and quiet luxury, many
            guests consider Explora among the finest wellness-focused cruise
            experiences available.
          </p>
        </div>
      </section>

      {/* ── WHO WILL APPRECIATE THIS WELLNESS EXPERIENCE ────────────── */}
      <section
        className="afc-section afc-bg-white"
        id="afc-who-will-appreciate"
      >
        <div className="afc-container">
          <div className="afc-section-header">
            <h2 className="afc-h2">
              Who Will Appreciate Explora's Wellness Experience?
            </h2>
            <div className="afc-accent-line"></div>
          </div>

          <div className="afc-split-layout">
            <div className="afc-content-side">
              <div className="afc-insight-card">
                <p className="afc-lead-text">
                  <strong>
                    Explora Journeys is ideal for travelers who value:
                  </strong>
                </p>

                <div className="afc-why-box">
                  <span className="afc-why-title">Perfect For</span>

                  <p className="afc-why-text">
                    Spa treatments, healthy dining, yoga and fitness, quiet
                    luxury, relaxation, stress-free vacations, ocean views, and
                    slow travel.
                  </p>
                </div>
              </div>

              <div className="afc-recommendations-wrapper">
                <h3 className="afc-sub-title">
                  Travelers Will Love the Wellness Experience For:
                </h3>

                <div className="afc-rec-grid">
                  {[
                    "Spa treatments",
                    "Healthy dining",
                    "Yoga & fitness",
                    "Quiet luxury",
                    "Relaxation",
                    "Ocean views",
                    "Slow travel",
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

            <div className="afc-media-side">
              <div className="afc-image-wrapper" style={{ aspectRatio: "4/5" }}>
                <img
                  src={LuxuryOceanfront2}
                  alt="Guest enjoying the sky lounge wellness experience aboard Explora Journeys"
                  className="afc-showcase-image"
                />
              </div>

              <div className="afc-strategy-box" style={{ height: "200px" }}>
                <p className="afc-strategy-lead">
                  It is especially popular with:
                </p>

                <div className="afc-strategy-tags">
                  {[
                    "Couples",
                    "Retirees",
                    "Solo travelers",
                    "Wellness enthusiasts",
                    "Restorative-vacation seekers",
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

      {/* ── TIPS FOR ENJOYING THE WELLNESS EXPERIENCE ───────────────── */}
      <section className="ugt-advantage-section" id="tips-wellness-experience">
        <div className="ugt-advantage-container">
          <div className="ugt-advantage-header">
            <span className="ugt-advantage-eyebrow">Make the Most of It</span>

            <h2 className="ugt-advantage-title">
              Tips for Enjoying the Wellness Experience
            </h2>

            <div className="Asc-accent-line"></div>

            <p className="ugt-advantage-intro">
              A little planning helps you get the most from the spa, fitness
              center, and relaxation spaces aboard Explora Journeys.
            </p>
          </div>

          <div className="ugt-advantage-grid">
            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <CalendarClock size={28} strokeWidth={1.5} />
              </div>

              <h4 className="ugt-card-title">Book Spa Treatments Early</h4>

              <p className="ugt-card-desc">
                Popular treatments and sea-day appointments often fill quickly.
              </p>
            </div>

            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <Waves size={28} strokeWidth={1.5} />
              </div>

              <h4 className="ugt-card-title">Take Advantage of Sea Days</h4>

              <p className="ugt-card-desc">
                Sea days provide the perfect opportunity to enjoy the spa,
                fitness center, and relaxation areas.
              </p>
            </div>

            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <Compass size={28} strokeWidth={1.5} />
              </div>

              <h4 className="ugt-card-title">
                Balance Activity &amp; Relaxation
              </h4>

              <p className="ugt-card-desc">
                Alternate sightseeing with time at the spa or by the pool.
              </p>
            </div>

            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <Sparkles size={28} strokeWidth={1.5} />
              </div>

              <h4 className="ugt-card-title">Try Something New</h4>

              <p className="ugt-card-desc">
                Consider joining a yoga class or wellness session you've never
                experienced before.
              </p>
            </div>

            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <Moon size={28} strokeWidth={1.5} />
              </div>

              <h4 className="ugt-card-title">Disconnect</h4>

              <p className="ugt-card-desc">
                Take time away from your phone and enjoy the peaceful atmosphere
                that surrounds you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY BOOK THROUGH A LUXURY TRAVEL ADVISOR? */}
      <section
        className="Avr-planning-section"
        id="Asc-luxury-travel-advisor"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="Asc-container">
          {/* HEADING */}
          <div className="Avr-planning-heading">
            <span className="Avr-planning-eyebrow">
              Personalized Wellness Planning
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
                Get the Most from Your Wellness Journey
              </h3>

              <p className="Avr-planning-left-body">
                A luxury travel advisor can help you choose itineraries that
                best match your wellness goals, ensuring every detail of your
                vacation is professionally planned.
              </p>

              <div className="Avr-planning-alert">
                <ShieldCheck size={18} className="Avr-planning-alert-icon" />

                <p className="Avr-planning-alert-text">
                  Professional planning helps create a seamless wellness-focused
                  journey from beginning to end.
                </p>
              </div>
            </div>

            {/* RIGHT PANEL */}
            <div className="Avr-planning-right">
              <p className="Avr-planning-right-intro">
                A knowledgeable travel advisor can assist with:
              </p>

              <div className="Avr-planning-benefits-grid">
                {[
                  {
                    icon: <HeartPulse size={18} />,
                    label: "Spa recommendations",
                  },
                  {
                    icon: <Home size={18} />,
                    label: "Suite selection",
                  },
                  {
                    icon: <Compass size={18} />,
                    label: "Longer wellness-focused itineraries",
                  },
                  {
                    icon: <MapPinned size={18} />,
                    label: "Shore experiences",
                  },
                  {
                    icon: <Plane size={18} />,
                    label: "Pre- and post-cruise luxury hotels",
                  },
                  {
                    icon: <Sparkles size={18} />,
                    label: "Personalized vacation planning",
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
                Professional planning helps create a seamless wellness-focused
                journey from beginning to end.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── ANGELA HUGHES AUTHORITY BOX ────────────────────────────── */}
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

      {/* ── FAQ ────────────────────────────────────────────────────── */}
      <section className="Asc-section Asc-bg-white" id="Asc-faq">
        <div className="Asc-container">
          <div className="Asc-section-header">
            <h2 className="Asc-h2">Frequently Asked Questions</h2>
            <div className="Asc-accent-line"></div>
            <p className="Asc-faq-intro">
              Everything travelers need to know about the wellness experience
              aboard Explora Journeys.
            </p>
          </div>
          <FAQ />
        </div>
      </section>

      {/* ── CTA / FINAL THOUGHTS ─────────────────────────────────────── */}
      <section className="Asc-help-section">
        <div className="Asc-help-bg-wrap">
          <img
            src={ExploraShip}
            alt="Explora Journeys luxury cruise ship at sea"
            className="Asc-help-bg-img"
          />
          <div className="Asc-help-overlay"></div>
        </div>

        <div className="Asc-container">
          <div className="Asc-help-card">
            <div className="Asc-help-content">
              <div className="Asc-help-header">
                <span className="Asc-help-eyebrow">
                  Personalized Wellness Cruise Planning
                </span>
                <h2 className="Asc-help-h2">Begin Your Wellness Journey Today</h2>
                <div className="Asc-help-accent"></div>
              </div>

              <div className="Asc-help-grid">
                <div className="Asc-help-info">
                  <p className="Asc-help-intro">
                    The wellness experience aboard Explora Journeys goes far
                    beyond massages and fitness classes. It's woven into every
                    aspect of the voyage—from spacious suites and quiet public
                    spaces to nutritious cuisine, ocean-view fitness facilities,
                    and thoughtfully paced itineraries.
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

                  {readMore && (
                    <>
                      <br />
                      <p className="Asc-help-intro">
                        Rather than filling every moment with activity, Explora
                        invites guests to embrace a slower rhythm where
                        relaxation becomes the destination itself.
                      </p>
                      <br />
                      <p className="Asc-help-intro">
                        If your ideal vacation leaves you feeling healthier,
                        calmer, and genuinely refreshed, Explora Journeys
                        delivers one of the most complete wellness experiences
                        in luxury cruising.
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
                    </>
                  )}

                  <div className="Asc-help-btn-container">
                    <Link
                      to="/contact"
                      className="Asc-help-cta-btn"
                      style={{ textDecoration: "none" }}
                    >
                      Start Planning Your Wellness Journey
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
                      "Determine whether Explora matches your wellness goals",
                      "Recommend the ideal itinerary",
                      "Select the right suite",
                      "Compare promotional offers",
                      "Arrange flights and transfers",
                      "Coordinate pre- and post-cruise hotels",
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
                  Explore More Explora Journeys Guides
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
                      label: "Explora Journeys Review",
                      path: "/explora-journeys-review",
                    },
                    {
                      label: "Is Explora Journeys Luxury?",
                      path: "/is-explora-journeys-luxury",
                    },
                    {
                      label: "Dining on Explora Journeys",
                      path: "/dining-on-explora-journeys",
                    },
                    {
                      label: "What Makes Explora Journeys Different?",
                      path: "/what-makes-explora-journeys-different",
                    },
                    {
                      label: "Planning Your First Explora Journey",
                      path: "/planning-your-first-explora-journey",
                    },
                    {
                      label: "Who Should Sail Explora Journeys?",
                      path: "/who-should-sail-explora-journeys",
                    },
                    {
                      label: "What Is Included on Explora Journeys?",
                      path: "/what-is-included-on-explora-journeys",
                    },
                    {
                      label: "Which Explora Suite Is Worth the Upgrade?",
                      path: "/which-explora-suite-is-worth-the-upgrade",
                    },
                    {
                      label: "Explora I Review",
                      path: "/explora-i-review",
                    },
                    {
                      label: "Explora II Review",
                      path: "/explora-ii-review",
                    },
                    {
                      label: "How to Get the Best Value on Explora Journeys",
                      path: "/how-to-get-the-best-value-on-explora-journeys",
                    },
                    {
                      label: "Should You Book Through a Travel Advisor?",
                      path: "/should-you-book-through-a-travel-advisor",
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

export default ExploraJourneysWellnessExperience;
