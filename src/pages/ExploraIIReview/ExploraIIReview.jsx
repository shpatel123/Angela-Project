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
  Utensils,
  Plane,
  Music,
  MapPinned,
  Car,
  BadgePercent,
  Home,
  ShieldCheck,
  HeartPulse,
  Info,
} from "lucide-react";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela.jpeg";

import HeroImage1 from "../../assets/IsExploraGoodForFamilies/explora-final-destination.jpg";
import HeroImage2 from "../../assets/IsExploraGoodForFamilies/EXPLORA-III-PANAMA-CANAL.jpg";
import HeroImage4 from "../../assets/HowAdvanceShouldBookExplora/Explora-Journeys2.webp";
import ExploraPool from "../../assets/IsExploraGoodForFamilies/explora-luxury-outdoor.jpg";
import ExploraDesign from "../../assets/IsExploraGoodForFamilies/explora-I-infinity-pool.webp";
import ExploraDining from "../../assets/IsExploraGoodForFamilies/EXPLORA-Crema Cafe.webp";
import ExploraService from "../../assets/IsExploraGoodForFamilies/explora-III-oceanfront-infinity-pool-luxury-cruise-deck.jpg";
import ExploraDestination from "../../assets/WhichMediterraneanItineraryIsBest/greece-zakynthos-blue-caves-mediterranean-summer-2025.jpg";
import ExploraDestination2 from "../../assets/WhichMediterraneanItineraryIsBest/amalfi-coast-italy-mediterranean-hero-summer-2025.jpg";
import LuxuryOceanfrontSuites from "../../assets/ExploraJourneysCruises/Suite-Services.webp";
import LuxuryOceanfrontPool from "../../assets/IsExploraGoodForFamilies/explora-I-oceanfront-pool-lounge-deck.jpg";
import LuxuryOceanfront from "../../assets/IsExploraGoodForFamilies/explora-outside-suites.jpg";
import ExploraShip from "../../assets/IsExploraGoodForFamilies/Luxury-Explora-Journeys.webp";

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
      "@id": "https://tripsandships.com/explora-ii-review/#webpage",
      name: "Explora II Review",
      url: "https://tripsandships.com/explora-ii-review",
      description:
        "Read our in-depth Explora II review covering suites, dining, service, entertainment, wellness, itineraries, and how it compares to Explora I to help you decide if it's the right luxury cruise for you.",
    },
    {
      "@type": "Article",
      "@id": "https://tripsandships.com/explora-ii-review/#article",
      headline:
        "Explora II Review | Is Explora Journeys' Newest Luxury Ship Worth It?",
      description:
        "A comprehensive review of Explora II, the second ship in the Explora Journeys fleet, covering ship design, suites, dining, service, entertainment, wellness, destinations, and how it compares to Explora I.",
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
      "@id": "https://tripsandships.com/explora-ii-review/#breadcrumb",
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
          name: "Explora II Review",
          item: "https://tripsandships.com/explora-ii-review",
        },
      ],
    },
    {
      "@type": "Cruise",
      "@id": "https://tripsandships.com/explora-ii-review/#cruise",
      name: "Explora II",
      description:
        "The second ship in the Explora Journeys fleet, offering all-oceanfront suites, destination-focused itineraries, and a boutique European luxury resort atmosphere at sea.",
      provider: {
        "@type": "Organization",
        name: "Explora Journeys",
      },
    },
    {
      "@type": "Product",
      "@id": "https://tripsandships.com/explora-ii-review/#product",
      name: "Explora II",
      description:
        "Second luxury cruise ship of Explora Journeys featuring all-suite oceanfront accommodations, multiple dining venues, wellness facilities, and destination-rich itineraries.",
      brand: {
        "@type": "Organization",
        name: "Explora Journeys",
      },
    },
    {
      "@type": "TouristTrip",
      "@id": "https://tripsandships.com/explora-ii-review/#touristtrip",
      name: "Explora II Luxury Cruise Experience",
      description:
        "A relaxed, contemporary luxury cruise experience aboard Explora II designed for travelers who value space, exceptional service, outstanding cuisine, and meaningful destinations.",
      provider: {
        "@type": "Organization",
        name: "Explora Journeys",
      },
    },
    {
      "@type": "Service",
      "@id": "https://tripsandships.com/explora-ii-review/#service",
      serviceType: "Luxury Cruise Vacation Planning & Booking Support",
      provider: {
        "@type": "TravelAgency",
        name: "Trips & Ships Luxury Travel",
      },
      areaServed: "Worldwide",
      description:
        "Comprehensive travel booking, suite selection assistance, transfers, pre/post hotel bookings, and shore excursion coordination for Explora II sailings.",
    },
    {
      "@type": "ItemList",
      "@id": "https://tripsandships.com/explora-ii-review/#itemlist",
      name: "What Explora II Reviews Cover",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "First Impressions" },
        { "@type": "ListItem", position: 2, name: "Ship Design" },
        { "@type": "ListItem", position: 3, name: "Suites & Accommodations" },
        { "@type": "ListItem", position: 4, name: "Dining Experience" },
        { "@type": "ListItem", position: 5, name: "Service" },
        { "@type": "ListItem", position: 6, name: "Public Spaces" },
        { "@type": "ListItem", position: 7, name: "Wellness & Spa" },
        { "@type": "ListItem", position: 8, name: "Entertainment" },
        { "@type": "ListItem", position: 9, name: "Destinations" },
        { "@type": "ListItem", position: 10, name: "What Is Included" },
        {
          "@type": "ListItem",
          position: 11,
          name: "Explora II vs Explora I",
        },
        { "@type": "ListItem", position: 12, name: "Is Explora II Worth It" },
      ],
    },
    {
      "@type": "Review",
      "@id": "https://tripsandships.com/explora-ii-review/#review",
      itemReviewed: {
        "@type": "Cruise",
        name: "Explora II",
      },
      author: {
        "@type": "Person",
        name: "Angela Hughes",
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "4.8",
        bestRating: "5",
      },
      reviewBody:
        "Explora II successfully builds upon everything that made Explora I such a success, refining an already exceptional concept with spacious all-suite accommodations, outstanding dining, personalized service, and wellness-focused experiences.",
    },
    {
      "@type": "FAQPage",
      "@id": "https://tripsandships.com/explora-ii-review/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Is Explora II a luxury cruise ship?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Explora II is one of the newest luxury ships from Explora Journeys and offers an all-suite, premium cruise experience.",
          },
        },
        {
          "@type": "Question",
          name: "Is Explora II different from Explora I?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The ships share the same overall design philosophy, accommodations, dining, and service. The biggest differences are usually the itineraries they operate.",
          },
        },
        {
          "@type": "Question",
          name: "Are all accommodations suites?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Every guest stays in an oceanfront suite with a private terrace.",
          },
        },
        {
          "@type": "Question",
          name: "Is the food good on Explora II?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Dining is widely considered one of the ship's strongest features, with several restaurants serving exceptional international cuisine.",
          },
        },
        {
          "@type": "Question",
          name: "Does Explora II have formal nights?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. The dress code is elegant but relaxed, with smart casual attire suitable for most evenings.",
          },
        },
        {
          "@type": "Question",
          name: "Is Explora II suitable for couples?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. The peaceful atmosphere, luxurious suites, and outstanding dining make it an excellent choice for romantic vacations.",
          },
        },
        {
          "@type": "Question",
          name: "Is Wi-Fi included?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Wi-Fi is included, allowing guests to remain connected throughout the voyage.",
          },
        },
        {
          "@type": "Question",
          name: "Is Explora II family-friendly?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Families are welcome, although the onboard experience is designed more for sophisticated luxury than children's entertainment.",
          },
        },
        {
          "@type": "Question",
          name: "Is Explora II worth the money?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For travelers seeking modern luxury, spacious accommodations, exceptional dining, and personalized service, Explora II represents outstanding value within the luxury cruise market.",
          },
        },
        {
          "@type": "Question",
          name: "Should I book through a travel advisor?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. A luxury travel advisor can help you compare itineraries, choose the best suite, and identify valuable promotions.",
          },
        },
        {
          "@type": "Question",
          name: "How is the design of Explora II different from Explora I?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Explora II is structurally identical to Explora I, but it features minor cosmetic refinements, updated artwork collections in collaboration with international galleries, and a newly designed Buccellati luxury jewelry boutique onboard.",
          },
        },
        {
          "@type": "Question",
          name: "What are the signature suites available on Explora II?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Explora II features Ocean Terraces, Ocean Penthouses, Ocean Residences, and the ultra-exclusive Owner's Residence. All accommodations face the ocean and include private, fully furnished terraces.",
          },
        },
        {
          "@type": "Question",
          name: "What destinations does Explora II prioritize?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Explora II operates destination-focused sailings, primarily exploring hidden gems and yacht-friendly harbors in the Mediterranean, the Caribbean, Central America, and the Middle East, often featuring overnight stays in key ports.",
          },
        },
        {
          "@type": "Question",
          name: "Is the Helmsman Arena or sports court available on Explora II?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, Explora II features a sports court (for pickleball, basketball, or tennis) and outdoor fitness areas on its upper deck, supporting the brand's active wellness philosophy.",
          },
        },
        {
          "@type": "Question",
          name: "Does Explora II feature guest-chef collaborations?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Explora II features the Anthology restaurant, which hosts temporary culinary residencies with Michelin-starred and globally acclaimed guest chefs, offering unique dining menus during select sailings.",
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
      q: "Is Explora II a luxury cruise ship?",
      a: "Yes. Explora II is one of the newest luxury ships from Explora Journeys and offers an all-suite, premium cruise experience.",
    },
    {
      q: "Is Explora II different from Explora I?",
      a: "The ships share the same overall design philosophy, accommodations, dining, and service. The biggest differences are usually the itineraries they operate.",
    },
    {
      q: "Are all accommodations suites?",
      a: "Yes. Every guest stays in an oceanfront suite with a private terrace.",
    },
    {
      q: "Is the food good on Explora II?",
      a: "Dining is widely considered one of the ship's strongest features, with several restaurants serving exceptional international cuisine.",
    },
    {
      q: "Does Explora II have formal nights?",
      a: "No. The dress code is elegant but relaxed, with smart casual attire suitable for most evenings.",
    },
    {
      q: "Is Explora II suitable for couples?",
      a: "Absolutely. The peaceful atmosphere, luxurious suites, and outstanding dining make it an excellent choice for romantic vacations.",
    },
    {
      q: "Is Wi-Fi included?",
      a: "Yes. Wi-Fi is included, allowing guests to remain connected throughout the voyage.",
    },
    {
      q: "Is Explora II family-friendly?",
      a: "Families are welcome, although the onboard experience is designed more for sophisticated luxury than children's entertainment.",
    },
    {
      q: "Is Explora II worth the money?",
      a: "For travelers seeking modern luxury, spacious accommodations, exceptional dining, and personalized service, Explora II represents outstanding value within the luxury cruise market.",
    },
    {
      q: "Should I book through a travel advisor?",
      a: "Yes. A luxury travel advisor can help you compare itineraries, choose the best suite, and identify valuable promotions.",
    },
    {
      q: "How is the design of Explora II different from Explora I?",
      a: "Explora II is structurally identical to Explora I, but it features minor cosmetic refinements, updated artwork collections in collaboration with international galleries, and a newly designed Buccellati luxury jewelry boutique onboard.",
    },
    {
      q: "What are the signature suites available on Explora II?",
      a: "Explora II features Ocean Terraces, Ocean Penthouses, Ocean Residences, and the ultra-exclusive Owner's Residence. All accommodations face the ocean and include private, fully furnished terraces.",
    },
    {
      q: "What destinations does Explora II prioritize?",
      a: "Explora II operates destination-focused sailings, primarily exploring hidden gems and yacht-friendly harbors in the Mediterranean, the Caribbean, Central America, and the Middle East, often featuring overnight stays in key ports.",
    },
    {
      q: "Is the Helmsman Arena or sports court available on Explora II?",
      a: "Yes, Explora II features a sports court (for pickleball, basketball, or tennis) and outdoor fitness areas on its upper deck, supporting the brand's active wellness philosophy.",
    },
    {
      q: "Does Explora II feature guest-chef collaborations?",
      a: "Yes. Explora II features the Anthology restaurant, which hosts temporary culinary residencies with Michelin-starred and globally acclaimed guest chefs, offering unique dining menus during select sailings.",
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
const ExploraIIReview = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [readMore, setReadMore] = useState(false);
  const [readMoreWhy, setReadMoreWhy] = useState(false);

  const images = [HeroImage1, HeroImage2, HeroImage4];

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
          Explora II Review | Is Explora Journeys' Newest Luxury Ship Worth It?
        </title>
        <meta name="title" content="Explora II Review" />
        <meta
          name="description"
          content="Read our in-depth Explora II review covering suites, dining, service, entertainment, wellness, itineraries, and how it compares to Explora I to help you decide if it's the right luxury cruise for you."
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
          <h1>Explora II Review</h1>

          <p>
            Following the successful launch of Explora I, Explora Journeys
            introduced Explora II, the second ship in its growing luxury fleet.
          </p>

          <p>
            While it follows the same philosophy of contemporary elegance,
            spacious accommodations, and destination-focused travel, Explora II
            also refines many aspects of the onboard experience. Rather than
            reinventing the concept, it builds upon what guests already loved
            about the original ship—creating an even more polished luxury
            experience.
          </p>

          {readMore && (
            <>
              <p>
                From spacious oceanfront suites and beautifully designed public
                spaces to exceptional dining and personalized service, nearly
                every aspect of the ship focuses on comfort, relaxation, and
                understated elegance.
              </p>

              <p>
                If you're considering sailing aboard Explora II, this review
                covers everything from accommodations and dining to service,
                entertainment, wellness, and overall value to help you decide
                whether it's the right ship for your next luxury cruise.
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
      {/* ── FIRST IMPRESSIONS ─────────────────────────────── */}
      <section
        className="ugt-components-section"
        id="first-impressions"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="ugt-components-container">
          <div className="ugt-components-header">
            <h2 className="ugt-components-title">First Impressions</h2>

            <div className="adg-c-accent-line"></div>
          </div>

          <div className="ugt-components-list">
            <div className="ugt-component-row">
              <div className="ugt-component-image-wrapper">
                <div className="ugt-component-image-container">
                  <img
                    src={ExploraPool}
                    alt="Elegant interior aboard Explora II with contemporary European design"
                    className="ugt-component-image"
                  />
                </div>
              </div>

              <div className="ugt-component-content">
                <p className="ugt-component-text">
                  <strong>Explora II</strong> immediately feels familiar to
                  anyone who has experienced Explora I. Instead of dramatic
                  atriums, loud announcements, and crowded public spaces, the
                  atmosphere is calm, sophisticated, and unmistakably luxurious.
                </p>

                <div className="ugt-questions-box">
                  <span className="ugt-questions-title">
                    Guests are welcomed into an environment featuring:
                  </span>

                  <ul className="ugt-questions-list">
                    {[
                      "Contemporary European design",
                      "Spacious lounges",
                      "Floor-to-ceiling windows",
                      "Ocean views throughout the ship",
                      "Comfortable seating areas",
                      "Relaxed ambiance",
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
                  From the very first moments onboard, Explora II feels more
                  like an upscale boutique hotel than a traditional cruise ship,
                  setting the tone for a relaxed and luxurious voyage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SHIP DESIGN ───────────────────────────────────────────── */}
      <section className="Ejv-verdict-section">
        <div className="Ejv-verdict-container">
          {/* Header */}
          <div className="Ejv-verdict-header">
            <span className="Ejv-verdict-eyebrow">Design & Atmosphere</span>

            <h2 className="Ejv-verdict-title">Ship Design</h2>

            <div className="Asc-accent-line"></div>
          </div>

          {/* Main Card */}
          <div className="Ejv-verdict-card">
            {/* Left Image */}
            <div className="Ejv-verdict-img-col">
              <img
                src={ExploraDesign}
                alt="Elegant interior spaces aboard Explora II"
                className="Ejv-verdict-img"
              />

              <div className="Ejv-verdict-img-badge">
                <span className="Ejv-verdict-badge-label">
                  Contemporary European Design
                </span>
                <span className="Ejv-verdict-badge-sub">
                  Timeless Luxury at Sea
                </span>
              </div>
            </div>

            {/* Right Content */}
            <div className="Ejv-verdict-content">
              <p className="Ejv-verdict-intro">
                Explora II continues the brand's distinctive design philosophy.
                Every public area feels thoughtfully planned with an emphasis on
                comfort and connection to the sea.
              </p>

              <ul className="Ejv-verdict-list">
                {[
                  "Floor-to-ceiling windows",
                  "Warm natural materials",
                  "Modern artwork",
                  "Neutral color palettes",
                  "Open gathering spaces",
                  "Indoor and outdoor living areas",
                ].map((item) => (
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
                  Every space is designed to maximize natural light, ocean
                  views, and a relaxed sense of sophistication.
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
                  The ship never feels flashy—it feels timeless, elegant, and
                  relaxing, creating an atmosphere that resembles a luxury
                  boutique hotel more than a traditional cruise ship.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WELLNESS & SPA / ENTERTAINMENT ───────────────────────── */}
      <section
        className="Ejvs-pricing-section"
        id="Ejvs-wellness-entertainment"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="Ejvs-container">
          <div className="Ejvs-section-header">
            <h2 className="Ejvs-section-title">
              Wellness &amp; Spa <br /> Entertainment
            </h2>
            <div className="Asc-accent-line"></div>
            <p className="Ejvs-section-subtitle">
              Explora II combines a wellness-focused lifestyle with elegant,
              understated entertainment designed for relaxation and enrichment.
            </p>
          </div>

          <div className="Ejvs-pricing-grid">
            {/* Wellness Card */}
            <div className="Ejvs-pricing-card Ejvs-explora-card">
              <div className="Ejvs-card-header">
                <div className="Ejvs-card-icon-wrap">
                  <HeartPulse size={24} className="Ejvs-card-icon" />
                </div>

                <h3 className="Ejvs-card-title">Wellness &amp; Spa</h3>
              </div>

              <p className="Ejvs-card-intro">
                Wellness is integrated throughout the Explora II experience,
                allowing guests to maintain a healthy, balanced lifestyle while
                at sea.
              </p>

              <ul className="Ejvs-feature-list">
                {[
                  "Luxury spa treatments",
                  "Ocean-view fitness center",
                  "Yoga and stretching classes",
                  "Relaxation lounges",
                  "Wellness therapies",
                  "Healthy dining options",
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
                  Rather than being a single onboard attraction, wellness
                  becomes part of the overall lifestyle aboard the ship.
                </p>
              </div>
            </div>

            {/* Entertainment Card */}
            <div className="Ejvs-pricing-card Ejvs-seabourn-card">
              <div className="Ejvs-card-header">
                <div className="Ejvs-card-icon-wrap">
                  <Music size={24} className="Ejvs-card-icon" />
                </div>

                <h3 className="Ejvs-card-title">Entertainment</h3>
              </div>

              <p className="Ejvs-card-intro">
                Entertainment aboard Explora II reflects the brand's
                sophisticated identity, emphasizing culture, music, and relaxed
                evenings.
              </p>

              <ul className="Ejvs-feature-list">
                {[
                  "Live music",
                  "Piano performances",
                  "Jazz evenings",
                  "Guest speakers",
                  "Cultural enrichment",
                  "Cocktail lounges",
                  "Elegant evening performances",
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
                  Evenings are designed for conversation, music, and relaxation
                  rather than high-energy nightlife.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SUITES & ACCOMMODATIONS ───────────────────────────────────── */}
      <section className="dmg-info-section" id="suites-accommodations">
        <div className="dmg-info-container">
          <div className="dmg-info-header">
            <h2 className="dmg-info-title">Suites &amp; Accommodations</h2>
            <div className="dmg-info-accent"></div>
          </div>

          <div className="dmg-info-grid">
            <div className="dmg-info-content">
              <p className="dmg-info-lead">
                One of <strong>Explora II's</strong> greatest strengths is its
                accommodations. Every guest enjoys an oceanfront suite with a
                private terrace, creating a spacious and comfortable retreat
                throughout the voyage.
              </p>

              <div className="dmg-info-features dmg-info-features-scrollable">
                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">Spacious Layout</h3>
                    <p className="dmg-info-feature-desc">
                      Suites are significantly larger than those found on many
                      premium cruise ships, providing room to truly relax.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">Private Terrace</h3>
                    <p className="dmg-info-feature-desc">
                      Enjoy breakfast, sunsets, or peaceful moments overlooking
                      the ocean from your own furnished outdoor space.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">Elegant Bathroom</h3>
                    <p className="dmg-info-feature-desc">
                      Premium finishes, spacious walk-in showers, heated floors
                      in select categories, and luxury amenities elevate the
                      experience.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Comfortable Living Space
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Separate sitting areas make every suite feel more like a
                      luxury residence than a traditional cruise cabin.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="dmg-info-media">
              <div className="dmg-media-wrapper">
                <img
                  src={LuxuryOceanfrontSuites}
                  alt="Luxury oceanfront suite with a private terrace aboard Explora II"
                  className="dmg-media-img"
                  style={{ height: "650px" }}
                />
                <div className="dmg-media-overlay"></div>

                <div className="dmg-media-badge">
                  <span>Oceanfront Suites with Private Terraces</span>
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
            The generous amount of space is one of the reasons many guests
            choose Explora II, offering a level of comfort that feels more like
            a luxury boutique hotel than a traditional cruise ship.
          </p>
        </div>
      </section>

      {/* DINING EXPERIENCE & SERVICE */}
      <section className="dve-winner-section" id="dve-dining-service">
        <div className="dve-container">
          <div className="dve-section-header">
            <h2 className="dve-section-title">
              Dining Experience &amp; Service
            </h2>
            <div className="dve-section-accent"></div>
            <p className="dve-section-subtitle">
              Exceptional cuisine and personalized hospitality are two of the
              defining features of the Explora II experience.
            </p>
          </div>

          <div className="dve-winner-grid">
            {/* Dining Experience */}
            <div className="dve-winner-card dve-disney-winner">
              <div className="dve-winner-image-wrap">
                <img
                  src={ExploraDining}
                  alt="Dining aboard Explora II"
                  className="dve-winner-img"
                />
                <span className="dve-winner-badge">
                  World-Class Culinary Experiences
                </span>
              </div>

              <div className="dve-winner-content">
                <h3 className="dve-winner-title">Dining Experience</h3>

                <p className="dve-winner-intro">
                  Dining remains one of Explora II's greatest strengths. Guests
                  have access to several restaurants, each offering distinctive
                  culinary experiences inspired by destinations around the
                  world.
                </p>

                <div className="dve-winner-divider"></div>

                <h4 className="dve-advantages-title">Dining Highlights:</h4>

                <ul className="dve-advantages-list">
                  {[
                    "Mediterranean cuisine",
                    "Asian specialties",
                    "International favorites",
                    "Casual poolside dining",
                    "Elegant fine dining",
                    "Artisan cafés",
                  ].map((item, i) => (
                    <li key={i}>
                      <Check size={18} className="dve-advantage-icon" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Service */}
            <div className="dve-winner-card dve-viking-winner">
              <div className="dve-winner-image-wrap">
                <img
                  src={ExploraService}
                  alt="Exceptional service aboard Explora II"
                  className="dve-winner-img"
                />
                <span className="dve-winner-badge">
                  Personalized Luxury Service
                </span>
              </div>

              <div className="dve-winner-content">
                <h3 className="dve-winner-title">Service</h3>

                <p className="dve-winner-intro">
                  Exceptional service defines the Explora brand, and Explora II
                  continues that tradition with genuine hospitality and highly
                  personalized attention.
                </p>

                <div className="dve-winner-divider"></div>

                <h4 className="dve-advantages-title">
                  Guests Frequently Appreciate:
                </h4>

                <ul className="dve-advantages-list">
                  {[
                    "Friendly service",
                    "Attention to detail",
                    "Remembered preferences",
                    "Professional assistance",
                    "Relaxed interactions",
                    "Efficient problem-solving",
                  ].map((item, i) => (
                    <li key={i}>
                      <Check size={18} className="dve-advantage-icon" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── EXPLORA II VS EXPLORA I ────────────────────────── */}
      <section
        className="Asc-section Asc-bg-white"
        id="Asc-explora2-vs-explora1"
        style={{ backgroundColor: "var(--bg-white)" }}
      >
        <div className="Asc-container">
          <div className="Asc-section-header">
            <h2 className="Asc-h2">Explora II vs Explora I</h2>
            <div className="Asc-accent-line"></div>

            <p className="Asc-body-text">
              Many travelers ask whether they should choose Explora I or Explora
              II. The answer is simple: the overall experience is remarkably
              similar.
            </p>
          </div>

          <div className="Asc-table-wrapper">
            <table className="Asc-fleet-table">
              <thead>
                <tr>
                  <th>Both Ships Offer</th>
                  <th>What Usually Differs</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Identical luxury philosophy</td>
                  <td>Seasonal itineraries</td>
                </tr>
                <tr>
                  <td>Spacious oceanfront suites</td>
                  <td>Regions visited</td>
                </tr>
                <tr>
                  <td>Exceptional personalized service</td>
                  <td>Departure dates</td>
                </tr>
                <tr>
                  <td>Outstanding dining</td>
                  <td>Ports of call</td>
                </tr>
                <tr>
                  <td>Elegant public spaces</td>
                  <td>Length of voyages</td>
                </tr>
                <tr>
                  <td>Wellness-focused experiences</td>
                  <td>Specific shore experiences</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── DESTINATIONS & ITINERARIES ─────────────────── */}
      <section className="luc-why-section" id="luc-destinations">
        <div className="luc-why-container">
          {/* LEFT — stacked images */}
          <div className="luc-why-images">
            <div
              className="luc-why-img-main-wrap"
              style={{
                color: "#fff",
              }}
            >
              <img
                src={ExploraDestination}
                alt="Explora II sailing in the Mediterranean"
                className="luc-why-img-main"
              />
              <div className="luc-why-img-overlay"></div>
            </div>

            <div
              className="luc-why-img-accent-wrap"
              style={{
                color: "#fff",
              }}
            >
              <img
                src={ExploraDestination2}
                alt="Explora II visiting luxury cruise destinations"
                className="luc-why-img-accent"
              />

              <div className="luc-why-img-badge">
                <span className="luc-why-badge-num">7</span>
                <span className="luc-why-badge-text">Regions Visited</span>
              </div>
            </div>
          </div>

          {/* RIGHT — content */}
          <div className="luc-why-content">
            <h2 className="luc-why-title">Destinations &amp; Itineraries</h2>

            <div className="aac-accent-line aac-accent-white"></div>

            <p className="luc-why-intro">
              Explora II sails to some of the world's most desirable luxury
              cruise destinations, offering thoughtfully curated itineraries
              throughout the year.
            </p>

            <div className="luc-why-features">
              {[
                {
                  num: "01",
                  title: "Mediterranean",
                  desc: "Discover iconic coastal cities, charming villages, and world-famous cultural landmarks.",
                },
                {
                  num: "02",
                  title: "Greek Islands",
                  desc: "Sail among picturesque islands with crystal-clear waters and timeless seaside villages.",
                },
                {
                  num: "03",
                  title: "Adriatic Coast",
                  desc: "Visit historic ports, medieval cities, and breathtaking coastal scenery.",
                },
                {
                  num: "04",
                  title: "Caribbean",
                  desc: "Relax on beautiful tropical islands with pristine beaches and turquoise waters.",
                },
                {
                  num: "05",
                  title: "Northern Europe",
                  desc: "Experience dramatic fjords, historic capitals, and spectacular northern landscapes.",
                },
                {
                  num: "06",
                  title: "Atlantic Crossings",
                  desc: "Enjoy leisurely days at sea while experiencing Explora II's luxurious onboard lifestyle.",
                },
                {
                  num: "07",
                  title: "Middle East",
                  desc: "Explore fascinating cultures, remarkable architecture, and vibrant modern cities.",
                },
              ]
                .slice(0, readMoreWhy ? 7 : 4)
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
                onClick={() => setReadMoreWhy(!readMoreWhy)}
              >
                {readMoreWhy ? "Read Less" : "Read More"}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT IS INCLUDED? ────────────────────────────────────────── */}
      <section className="adg-section" id="adg-whats-included">
        <div className="adg-container">
          <div className="adg-section-header" style={{ marginBottom: "60px" }}>
            <h2 className="adg-h2">What Is Included?</h2>
            <div className="adg-accent-line"></div>

            <p
              className="Asc-body-text"
              style={{ textAlign: "center", marginTop: "15px" }}
            >
              One of the reasons many travelers appreciate Explora II is the
              generous range of inclusions, allowing guests to enjoy a seamless
              luxury vacation with fewer additional costs onboard.
            </p>
          </div>

          <div className="adg-split-layout">
            <div className="adg-content-card-side">
              <img
                src={LuxuryOceanfrontPool}
                alt="Included amenities aboard Explora II"
                className="adg-side-image"
                style={{ height: "65vh" }}
              />

              <div className="adg-info-card">
                <div className="adg-card-meta">
                  <Sparkles size={28} />
                  <span className="adg-meta-label">
                    Exceptional Value Included
                  </span>
                </div>

                <p className="adg-card-lead">
                  Depending on your fare, your cruise may include luxury
                  accommodations, exceptional dining, entertainment, wellness
                  facilities, Wi-Fi, and a variety of thoughtful amenities.
                </p>
              </div>
            </div>

            <div className="adg-list-side">
              {[
                "Oceanfront suite accommodations",
                "Multiple dining venues",
                "Room service",
                "Wi-Fi",
                "Entertainment",
                "Fitness classes",
                "Wellness facilities",
                "Selected beverages",
                "Gratuities in many fare categories",
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
      {/* ── WHO WILL LOVE / WHO MAY PREFER ANOTHER LINE ─────────────── */}
      <section className="Asc-section Asc-bg-white" id="Asc-who">
        <div className="Asc-container">
          <div className="Asc-section-header">
            <h2 className="Asc-h2">Who Will Love Explora II?</h2>
            <div className="Asc-accent-line"></div>
            <p className="Asc-faq-intro">
              Explora II is an excellent choice for travelers who appreciate
              modern luxury — couples, retirees, food lovers, and experienced
              luxury travelers are especially likely to enjoy the ship.
            </p>
          </div>

          <div className="Asc-who-grid">
            <div className="Asc-who-card Asc-who-yes">
              <h3 className="Asc-who-title">
                You Will Appreciate Explora II If You:
              </h3>
              <ul className="Asc-who-list">
                {[
                  "Boutique luxury hotels",
                  "Spacious accommodations",
                  "Gourmet dining",
                  "Personalized service",
                  "Wellness experiences",
                  "Destination immersion",
                  "Quiet sophistication",
                  "Contemporary European design",
                ].map((item, i) => (
                  <li key={i}>
                    <Check size={16} className="Asc-icon-green" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="Asc-who-card Asc-who-no">
              <h3 className="Asc-who-title">
                You May Prefer Another Cruise Line If You Want:
              </h3>
              <ul className="Asc-who-list">
                {[
                  "Water parks",
                  "Character entertainment",
                  "Large casinos",
                  "Broadway productions",
                  "High-energy nightlife",
                  "Constant organized activities",
                ].map((item, i) => (
                  <li key={i}>
                    <Minus size={16} className="Asc-icon-muted" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p
            className="Asc-body-text"
            style={{
              maxWidth: "760px",
              margin: "40px auto 0",
              textAlign: "center",
            }}
          >
            Families with young children who prioritize kids' clubs and themed
            entertainment may find other cruise lines more suitable.
          </p>
        </div>
      </section>

      {/* ── IS EXPLORA II WORTH IT? ───────────────────────────────────── */}
      <section className="adg-c-section adg-c-bg-soft" id="adg-c-worth-it">
        <div className="adg-c-container">
          <div className="adg-c-section-header">
            <h2 className="adg-c-h2">Is Explora II Worth It?</h2>
            <div className="adg-c-accent-line"></div>
            <p className="Asc-section-intro">
              Explora II commands premium pricing, but it also delivers a
              premium experience. Rather than measuring value by the number of
              attractions onboard, Explora II delivers value through the quality
              of every experience.
            </p>
          </div>

          <div className="adg-c-overview-layout">
            <div className="adg-c-overview-icons">
              {[
                "Spacious accommodations",
                "Exceptional cuisine",
                "Personalized hospitality",
                "Elegant surroundings",
                "Inclusive amenities",
                "Relaxed luxury",
                "Carefully curated itineraries",
              ].map((label, i) => (
                <div key={i} className="adg-c-overview-item">
                  <span className="adg-c-overview-icon">
                    <Check size={16} strokeWidth={2.5} />
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
                    For travelers seeking a peaceful and sophisticated vacation,
                    Explora II represents one of the strongest offerings in
                    luxury cruising.
                  </p>
                </div>
              </div>

              <div className="adg-c-overview-image-wrap">
                <img
                  src={ExploraShip}
                  alt="Explora II luxury cruise ship at sea"
                  className="adg-c-overview-img"
                />
                <div className="adg-c-overview-img-overlay">
                  <span className="adg-c-overview-img-label">
                    Premium Pricing, Premium Experience
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PUBLIC SPACES ───────────────────────────────────────────── */}
      <section className="dmg-info-section dmg-bg-white" id="dmg-public-spaces">
        <div className="dmg-info-container">
          <div className="dmg-info-grid">
            {/* Left Side Image */}
            <div className="dmg-info-media">
              <div className="dmg-media-wrapper">
                <img
                  src={LuxuryOceanfront}
                  alt="Elegant public spaces aboard Explora II"
                  className="dmg-media-img"
                  style={{ height: "650px" }}
                />
                <div className="dmg-media-overlay"></div>

                <div className="dmg-media-badge">
                  <span>Elegant Public Spaces</span>
                </div>
              </div>
            </div>

            {/* Right Side Content */}
            <div className="dmg-info-content">
              <h2 className="dmg-info-title">Public Spaces</h2>
              <div className="dmg-info-accent"></div>

              <p className="dmg-info-lead">
                Explora II offers numerous elegant spaces where guests can
                unwind, socialize, or simply enjoy the ocean throughout the day.
                Every venue is thoughtfully designed to create a calm and
                spacious atmosphere.
              </p>

              <div className="dmg-info-features dmg-info-features-scrollable">
                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">Infinity Pools</h3>
                    <p className="dmg-info-feature-desc">
                      Multiple pool areas offer everything from lively social
                      spaces to peaceful retreats overlooking the ocean.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">Outdoor Lounges</h3>
                    <p className="dmg-info-feature-desc">
                      Comfortable seating throughout the outdoor decks invites
                      guests to relax and enjoy panoramic sea views from sunrise
                      to sunset.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Observation Areas
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Quiet spaces perfect for reading, photography, or simply
                      watching spectacular coastal scenery unfold.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Elegant Indoor Lounges
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Beautiful lounges provide inviting settings for afternoon
                      tea, evening cocktails, or relaxed conversation throughout
                      the voyage.
                    </p>
                  </div>
                </div>
              </div>

              <p
                className="dmg-info-lead"
                style={{ marginTop: "24px", fontSize: "1rem" }}
              >
                The ship never feels crowded, even during sea days, allowing
                guests to enjoy every space in complete comfort.
              </p>
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
            <h2 className="Asc-h2">Pros &amp; Cons</h2>

            <div className="Asc-accent-line"></div>

            <p className="Asc-verdict-intro">
              For many luxury travelers, these "cons" actually reinforce the
              peaceful atmosphere they value.
            </p>
          </div>

          <div className="Asc-verdict-grid">
            {/* Pros Column */}
            <div className="Asc-verdict-card Asc-verdict-azamara">
              <h3 className="Asc-verdict-card-title">Pros</h3>

              <ul className="Asc-verdict-list">
                {[
                  "Spacious all-suite accommodations",
                  "Elegant contemporary design",
                  "Outstanding dining options",
                  "Excellent personalized service",
                  "Relaxed atmosphere",
                  "Exceptional wellness facilities",
                  "Beautiful outdoor spaces",
                  "Destination-focused itineraries",
                ].map((item, i) => (
                  <li key={i} className="Asc-verdict-item">
                    <Check size={18} className="Asc-verdict-icon" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Cons Column */}
            <div className="Asc-verdict-card Asc-verdict-seabourn">
              <h3 className="Asc-verdict-card-title">Cons</h3>

              <ul className="Asc-verdict-list">
                {[
                  "Premium pricing",
                  "Limited nightlife",
                  "Minimal children's entertainment",
                  "Entertainment is intentionally understated",
                  "Not designed for travelers seeking nonstop activities",
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
              For many luxury travelers, these "cons" actually reinforce the
              peaceful atmosphere they value.
            </p>
          </div>
        </div>
      </section>
      {/* ── THE MAKING OF A BEAUTIFUL SHIP ───────────────────────── */}
      <section
        className="Asc-video-section"
        id="Asc-video-design"
        style={{ backgroundColor: "var(--bg-white)" }}
      >
        <div className="Asc-container">
          <div className="Asc-section-header">
            <h2 className="Asc-h2">Discover the Design Behind Explora II</h2>

            <div className="Asc-accent-line"></div>

            <p className="Asc-video-intro">
              Discover the design philosophy behind Explora Journeys and see how
              thoughtful architecture, refined European styling, natural
              materials, and seamless indoor-outdoor living spaces come together
              to create a true home at sea.
            </p>
          </div>

          <div className="Asc-video-wrapper">
            <div className="Asc-video-frame">
              <iframe
                src="https://www.youtube.com/embed/qx_9Nt6kYpI"
                title="The Making Of A Beautiful Ship: A Film About Design | Explora Journeys"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
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
                Get the Most from Your Luxury Cruise
              </h3>

              <p className="Avr-planning-left-body">
                Luxury cruises involve far more than simply selecting a sailing
                date. An experienced travel advisor helps you make informed
                decisions, simplify the planning process, and create a vacation
                tailored to your travel style.
              </p>

              <div className="Avr-planning-alert">
                <ShieldCheck size={18} className="Avr-planning-alert-icon" />

                <p className="Avr-planning-alert-text">
                  Expert guidance helps ensure every part of your vacation is
                  thoughtfully planned from beginning to end.
                </p>
              </div>
            </div>

            {/* RIGHT PANEL */}
            <div className="Avr-planning-right">
              <p className="Avr-planning-right-intro">
                A knowledgeable travel advisor can help you:
              </p>

              <div className="Avr-planning-benefits-grid">
                {[
                  {
                    icon: <Compass size={18} />,
                    label: "Compare itineraries",
                  },
                  {
                    icon: <Home size={18} />,
                    label: "Choose the ideal suite",
                  },
                  {
                    icon: <BadgePercent size={18} />,
                    label: "Understand available promotions",
                  },
                  {
                    icon: <Plane size={18} />,
                    label: "Arrange flights and hotels",
                  },
                  {
                    icon: <Car size={18} />,
                    label: "Coordinate transfers",
                  },
                  {
                    icon: <Utensils size={18} />,
                    label: "Recommend dining experiences",
                  },
                  {
                    icon: <MapPinned size={18} />,
                    label: "Plan shore excursions",
                  },
                  {
                    icon: <Sparkles size={18} />,
                    label: "Maximize the value of your investment",
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
                Expert guidance helps ensure every part of your vacation is
                tailored to your travel style, allowing you to enjoy a seamless
                luxury cruise experience.
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
              Everything travelers need to know before deciding whether Explora
              I is the right luxury cruise ship for them.
            </p>
          </div>
          <FAQ />
        </div>
      </section>
      {/* ── CTA ────────────────────────────────────────────────────── */}
      <section className="Asc-help-section">
        <div className="Asc-help-bg-wrap">
          <img
            src={ExploraShip}
            alt="Explora II luxury cruise ship"
            className="Asc-help-bg-img"
          />
          <div className="Asc-help-overlay"></div>
        </div>

        <div className="Asc-container">
          <div className="Asc-help-card">
            <div className="Asc-help-content">
              <div className="Asc-help-header">
                <span className="Asc-help-eyebrow">
                  Personalized Luxury Cruise Planning
                </span>
                <h2 className="Asc-help-h2">Final Thoughts</h2>
                <div className="Asc-help-accent"></div>
              </div>

              <div className="Asc-help-grid">
                <div className="Asc-help-info">
                  <p className="Asc-help-intro">
                    Explora II successfully builds upon everything that made
                    Explora I such a success. Rather than making dramatic
                    changes, it refines an already exceptional concept—offering
                    spacious all-suite accommodations, outstanding dining,
                    personalized service, wellness-focused experiences, and
                    thoughtfully designed public spaces.
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
                        Whether you're new to luxury cruising or an experienced
                        traveler looking for a contemporary alternative to
                        traditional luxury cruise lines, Explora II delivers an
                        experience that feels calm, elegant, and refreshingly
                        unhurried.
                      </p>
                      <br />
                      <p className="Asc-help-intro">
                        For travelers who believe luxury is about space,
                        exceptional hospitality, and meaningful travel rather
                        than constant activity, Explora II is one of the finest
                        ships sailing today.
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
                      Start Planning Your Explora II Journey
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
                      "Determine whether Explora II matches your travel style",
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
                      label: "Explora Journeys Overview",
                      path: "/luxury-explora-journeys-guide",
                    },
                    {
                      label: "Explora Journeys Review",
                      path: "/explora-journeys-review",
                    },
                    {
                      label: "Explora I Review",
                      path: "/explora-i-review",
                    },
                    {
                      label: "What Makes Explora Journeys Different?",
                      path: "/what-makes-explora-journeys-different",
                    },
                    {
                      label: "Is Explora Journeys Luxury?",
                      path: "/is-explora-journeys-luxury",
                    },
                    {
                      label: "Which Explora Ship Should You Choose?",
                      path: "/which-explora-ship-should-you-choose",
                    },
                    {
                      label: "Which Explora Suite Is Worth the Upgrade?",
                      path: "/which-explora-suite-is-worth-the-upgrade",
                    },
                    {
                      label: "Is Anthology Worth It?",
                      path: "/is-anthology-worth-it",
                    },
                    {
                      label: "Planning Your First Explora Journey",
                      path: "/planning-your-first-explora-journey",
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

export default ExploraIIReview;
