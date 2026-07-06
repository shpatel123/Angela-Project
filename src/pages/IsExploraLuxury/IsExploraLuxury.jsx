import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Users,
  MapPin,
  Award,
  Check,
  Plus,
  Minus,
  ArrowRight,
  Star,
  Compass,
  Sparkles,
  UserCheck,
  Globe,
  Ship,
  Utensils,
  Wine,
  Anchor,
  Info,
  Home,
  BadgePercent,
  Hotel,
  MapPinned,
  TrendingUp,
  ShieldCheck,
} from "lucide-react";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela3.jpeg";

import CTAImage from "../../assets/IsExploraGoodForFamilies/explora-final-destination.jpg";
import HeroImage1 from "../../assets/IsExploraGoodForFamilies/EXPLORA-III-PANAMA-CANAL.jpg";
import HeroImage2 from "../../assets/IsExploraGoodForFamilies/ExploraCruise3.webp";
import HeroImage3 from "../../assets/IsExploraGoodForFamilies/Luxury-Explora-Journeys.webp";
import ExploraSuite from "../../assets/IsExploraGoodForFamilies/explora-I-infinity-pool-ocean-wake-view.jpg";
import ExploraSuites from "../../assets/IsExploraGoodForFamilies/explora-I-oceanfront-pool-lounge-deck.JPG";
import Exploraexp1 from "../../assets/IsExploraGoodForFamilies/explora-outside-suites.jpg";
import Exploraexp2 from "../../assets/IsExploraGoodForFamilies/explora-journeys-oceanfront-infinity-pool-deck.jpg";
import ExploraDining from "../../assets/IsExploraGoodForFamilies/Fine-Dining.webp";
import ExploraPool from "../../assets/IsExploraGoodForFamilies/Regent-Seven-Seas-Cruises.webp";
import ExploraOutdoor from "../../assets/IsExploraGoodForFamilies/explora-journeys-retreat-residence-luxury-suite-living-room.webp";

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
        "Luxury travel agency specializing in ultra-luxury cruise lines, custom wellness retreats, and personalized luxury travel experiences worldwide.",
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
      "@id": "https://tripsandships.com/is-explora-journeys-luxury/#webpage",
      name: "Is Explora Journeys Luxury? | Everything You Need to Know Before Booking",
      url: "https://tripsandships.com/is-explora-journeys-luxury",
      description:
        "Is Explora Journeys truly a luxury cruise line? Discover what defines its luxury experience, including all-suite accommodations, world-class dining, personalized service, wellness, and destination-focused itineraries.",
    },
    {
      "@type": "Article",
      "@id": "https://tripsandships.com/is-explora-journeys-luxury/#article",
      headline: "Is Explora Journeys Luxury?",
      description:
        "An analytical guide to the luxury status of Explora Journeys, covering suite design, dining options, hospitality quality, fare inclusions, and comparison to traditional luxury cruise lines.",
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
      "@id": "https://tripsandships.com/is-explora-journeys-luxury/#breadcrumb",
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
          name: "Is Explora Journeys Luxury?",
          item: "https://tripsandships.com/is-explora-journeys-luxury",
        },
      ],
    },
    {
      "@type": "Cruise",
      "@id": "https://tripsandships.com/is-explora-journeys-luxury/#cruise",
      name: "Explora Journeys luxury cruise fleet",
      description:
        "A luxury lifestyle travel brand of the MSC Group offering all-suite residences, refined service, and flexible dining.",
      provider: {
        "@type": "Organization",
        name: "Explora Journeys",
      },
    },
    {
      "@type": "TouristTrip",
      "@id":
        "https://tripsandships.com/is-explora-journeys-luxury/#touristtrip",
      name: "Explora Journeys Cruise Voyage",
      description:
        "A refined ocean voyage designed around contemporary luxury and destination immersion.",
      provider: {
        "@type": "Organization",
        name: "Explora Journeys",
      },
    },
    {
      "@type": "Review",
      "@id": "https://tripsandships.com/is-explora-journeys-luxury/#review",
      itemReviewed: {
        "@type": "Cruise",
        name: "Explora Journeys",
      },
      author: {
        "@type": "Person",
        name: "Angela Hughes",
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "4.9",
        bestRating: "5",
      },
      reviewBody:
        "Explora Journeys is a true luxury cruise line. It offers an elegant, relaxed, and spacious alternative to traditional luxury cruise ships, combining contemporary design and high crew-to-guest ratios.",
    },
    {
      "@type": "Service",
      "@id": "https://tripsandships.com/is-explora-journeys-luxury/#service",
      serviceType: "Luxury Travel Advisory & Cruise Coordination",
      provider: {
        "@type": "TravelAgency",
        name: "Trips & Ships Luxury Travel",
      },
      areaServed: "Worldwide",
      description:
        "Concierge cruise booking, transfer coordination, custom shore excursions, and luxury pre- and post-cruise hotel arrangements.",
    },
    {
      "@type": "ItemList",
      "@id": "https://tripsandships.com/is-explora-journeys-luxury/#itemlist",
      name: "Luxury Features of Explora Journeys",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "All-Suite Residences",
          description:
            "Every accommodation is an ocean-front suite featuring a private terrace and luxury bath.",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Attentive Crew-to-Guest Ratio",
          description:
            "Personalized service that learns preferences and anticipates guest needs.",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Culinary Venues",
          description:
            "Multiple restaurants serving international, Asian, and Mediterranean menus with open-seating flexibility.",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Integrated Onboard Wellness",
          description:
            "Integrated fitness centers, ocean spas, yoga, and meditation opportunities.",
        },
      ],
    },
    {
      "@type": "AboutPage",
      "@id": "https://tripsandships.com/is-explora-journeys-luxury/#about",
      name: "About Explora Journeys Luxury Experience",
      description:
        "Understand what defines the modern luxury lifestyle at sea on Explora Journeys.",
    },
    {
      "@type": "FAQPage",
      "@id": "https://tripsandships.com/is-explora-journeys-luxury/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Is Explora Journeys considered a luxury cruise line?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Explora Journeys is positioned firmly within the luxury cruise market, offering all-suite accommodations, exceptional service, premium dining, and destination-focused itineraries.",
          },
        },
        {
          "@type": "Question",
          name: "What makes Explora luxurious?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Its spacious suites, contemporary design, personalized service, gourmet dining, wellness facilities, and relaxed atmosphere distinguish it from many other cruise lines.",
          },
        },
        {
          "@type": "Question",
          name: "Are all cabins suites?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Every guest stays in an oceanfront suite with a private terrace.",
          },
        },
        {
          "@type": "Question",
          name: "Is Explora more luxurious than mainstream cruise lines?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Generally, yes. Explora emphasizes space, service, inclusions, and refined experiences rather than large-scale attractions and entertainment.",
          },
        },
        {
          "@type": "Question",
          name: "Is there a formal dress code?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. The atmosphere is elegant yet relaxed, allowing guests to dress smartly without traditional formal-night requirements.",
          },
        },
        {
          "@type": "Question",
          name: "Is Explora good for couples?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. Its peaceful atmosphere, luxurious accommodations, and destination-focused itineraries make it especially appealing for couples.",
          },
        },
        {
          "@type": "Question",
          name: "Is Explora family-friendly?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Families are welcome, but the onboard experience is designed more for sophisticated luxury travelers than for children's entertainment.",
          },
        },
        {
          "@type": "Question",
          name: "What is included in the fare?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Depending on the booking, guests may enjoy suite accommodations, dining, Wi-Fi, wellness facilities, entertainment, selected beverages, and additional premium inclusions.",
          },
        },
        {
          "@type": "Question",
          name: "Is Explora worth the money?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For travelers seeking spacious accommodations, refined luxury, exceptional service, and immersive itineraries, many consider Explora Journeys an excellent value.",
          },
        },
        {
          "@type": "Question",
          name: "Should I book through a travel advisor?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. A luxury travel advisor can help you choose the best itinerary, suite, and promotional offers while simplifying the planning process.",
          },
        },
        {
          "@type": "Question",
          name: "Does Explora Journeys offer butler service?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Explora Journeys does not offer traditional butler service for standard suites. Instead, all guests receive the service of dedicated 'Hosts' (suite attendants) who provide personalized housekeeping, room service, and concierge-level assistance. True butler service is reserved for top-tier Ocean Residences and Penthouses.",
          },
        },
        {
          "@type": "Question",
          name: "What brands of amenities are featured in the suites?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Every suite features luxury residential amenities, including custom Frette linens, Dyson Supersonic hairdryers, Illy espresso machines, and premium refillable bath products from renowned luxury brands.",
          },
        },
        {
          "@type": "Question",
          name: "Is room service included on Explora Journeys?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, 24-hour in-suite dining is fully complimentary. Guests can order a wide range of gourmet meals, snacks, and beverages to be served in their suite or on their private terrace.",
          },
        },
        {
          "@type": "Question",
          name: "Is alcohol included in the fare on Explora Journeys?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, a wide selection of premium wines, beers, spirits, cocktails, and soft drinks are included throughout the ship, including the in-suite mini-bar, which is replenished daily according to guest preferences.",
          },
        },
        {
          "@type": "Question",
          name: "How does Explora Journeys' crew-to-guest ratio compare to other lines?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Explora Journeys features a crew-to-guest ratio of approximately 1 to 1.25. This very high ratio is a benchmark of ultra-luxury cruising, ensuring that service is highly personalized, prompt, and attentive.",
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
      q: "Is Explora Journeys considered a luxury cruise line?",
      a: "Yes. Explora Journeys is positioned firmly within the luxury cruise market, offering all-suite accommodations, exceptional service, premium dining, and destination-focused itineraries.",
    },
    {
      q: "What makes Explora luxurious?",
      a: "Its spacious suites, contemporary design, personalized service, gourmet dining, wellness facilities, and relaxed atmosphere distinguish it from many other cruise lines.",
    },
    {
      q: "Are all cabins suites?",
      a: "Yes. Every guest stays in an oceanfront suite with a private terrace.",
    },
    {
      q: "Is Explora more luxurious than mainstream cruise lines?",
      a: "Generally, yes. Explora emphasizes space, service, inclusions, and refined experiences rather than large-scale attractions and entertainment.",
    },
    {
      q: "Is there a formal dress code?",
      a: "No. The atmosphere is elegant yet relaxed, allowing guests to dress smartly without traditional formal-night requirements.",
    },
    {
      q: "Is Explora good for couples?",
      a: "Absolutely. Its peaceful atmosphere, luxurious accommodations, and destination-focused itineraries make it especially appealing for couples.",
    },
    {
      q: "Is Explora family-friendly?",
      a: "Families are welcome, but the onboard experience is designed more for sophisticated luxury travelers than for children's entertainment.",
    },
    {
      q: "What is included in the fare?",
      a: "Depending on the booking, guests may enjoy suite accommodations, dining, Wi-Fi, wellness facilities, entertainment, selected beverages, and additional premium inclusions.",
    },
    {
      q: "Is Explora worth the money?",
      a: "For travelers seeking spacious accommodations, refined luxury, exceptional service, and immersive itineraries, many consider Explora Journeys an excellent value.",
    },
    {
      q: "Should I book through a travel advisor?",
      a: "Yes. A luxury travel advisor can help you choose the best itinerary, suite, and promotional offers while simplifying the planning process.",
    },
    {
      q: "Does Explora Journeys offer butler service?",
      a: "Explora Journeys does not offer traditional butler service for standard suites. Instead, all guests receive the service of dedicated 'Hosts' (suite attendants) who provide personalized housekeeping, room service, and concierge-level assistance. True butler service is reserved for top-tier Ocean Residences and Penthouses.",
    },
    {
      q: "What brands of amenities are featured in the suites?",
      a: "Every suite features luxury residential amenities, including custom Frette linens, Dyson Supersonic hairdryers, Illy espresso machines, and premium refillable bath products from renowned luxury brands.",
    },
    {
      q: "Is room service included on Explora Journeys?",
      a: "Yes, 24-hour in-suite dining is fully complimentary. Guests can order a wide range of gourmet meals, snacks, and beverages to be served in their suite or on their private terrace.",
    },
    {
      q: "Is alcohol included in the fare on Explora Journeys?",
      a: "Yes, a wide selection of premium wines, beers, spirits, cocktails, and soft drinks are included throughout the ship, including the in-suite mini-bar, which is replenished daily according to guest preferences.",
    },
    {
      q: "How does Explora Journeys' crew-to-guest ratio compare to other lines?",
      a: "Explora Journeys features a crew-to-guest ratio of approximately 1 to 1.25. This very high ratio is a benchmark of ultra-luxury cruising, ensuring that service is highly personalized, prompt, and attentive.",
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
const IsExploraLuxury = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [readMore, setReadMore] = useState(false);

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
          Is Explora Journeys Luxury? | Everything You Need to Know Before
          Booking
        </title>
        <meta name="title" content="Is Explora Journeys Luxury?" />
        <meta
          name="description"
          content="Is Explora Journeys truly a luxury cruise line? Discover what defines its luxury experience, including all-suite accommodations, world-class dining, personalized service, wellness, and destination-focused itineraries."
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
          <h1>Is Explora Journeys Luxury?</h1>

          <p>
            The short answer is yes—Explora Journeys is unquestionably a luxury
            cruise line.
          </p>

          <p>
            However, its interpretation of luxury differs from many traditional
            cruise brands. Rather than emphasizing grand chandeliers, formal
            dress codes, or elaborate nightly productions, Explora Journeys
            focuses on a more modern and understated style of luxury.
          </p>

          {readMore && (
            <>
              <p>
                Spacious all-suite accommodations, exceptional dining, intuitive
                service, elegant design, and immersive itineraries create an
                experience that feels more like a five-star boutique hotel at
                sea than a conventional cruise ship.
              </p>

              <p>
                For travelers seeking sophistication, comfort, and personalized
                experiences, Explora Journeys has quickly become one of the most
                talked-about names in luxury cruising.
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

      {/* ── WHAT DEFINES A LUXURY CRUISE ───────────────────────────── */}
      <section className="adg-c-section adg-c-bg-soft" id="adg-common-features">
        <div className="adg-c-container">
          <div className="adg-c-section-header">
            <h2 className="adg-c-h2">What Defines a Luxury Cruise?</h2>
            <div className="adg-c-accent-line"></div>
            <p className="Asc-section-intro">
              Luxury means different things to different travelers. For some, it
              is lavish accommodations. For others, it is exceptional cuisine,
              personalized service, or the ability to relax without crowds.
            </p>
          </div>

          <div className="adg-c-overview-layout">
            <div className="adg-c-overview-icons">
              {[
                "Spacious accommodations",
                "Outstanding service",
                "Exceptional dining",
                "Elegant design",
                "Inclusive amenities",
                "Premium wellness facilities",
                "Destination-focused itineraries",
                "Attention to detail throughout the journey",
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
                    Explora Journeys delivers all of these luxury elements while
                    introducing its own contemporary, European-styled approach
                    to ocean travel.
                  </p>
                </div>
              </div>

              <div
                className="adg-c-overview-image-wrap"
                style={{ height: "350px" }}
              >
                <img
                  src={ExploraSuite}
                  alt="Explora Journeys luxury suite bathroom with ocean views"
                  className="adg-c-overview-img"
                />
                <div className="adg-c-overview-img-overlay">
                  <span className="adg-c-overview-img-label">
                    Bespoke Modern Luxury
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── EVERY GUEST STAYS IN A LUXURY SUITE ────────────────────── */}
      <section className="dmg-info-section dmg-bg-white" id="dmg-who-explora">
        <div className="dmg-info-container">
          <div className="dmg-info-grid">
            {/* Left Side Image */}
            <div className="dmg-info-media">
              <div className="dmg-media-wrapper">
                <img
                  src={ExploraSuites}
                  alt="Spacious suite living area and private oceanfront terrace"
                  className="dmg-media-img"
                  style={{ height: "650px" }}
                />
                <div className="dmg-media-overlay"></div>

                <div className="dmg-media-badge">
                  <span>Suite Residences</span>
                </div>
              </div>
            </div>

            {/* Right Side Content */}
            <div className="dmg-info-content">
              <h2 className="dmg-info-title">Every Guest Stays in a Suite</h2>
              <div className="dmg-info-accent"></div>

              <p className="dmg-info-lead">
                One of the clearest indicators of Explora's luxury positioning
                is that every single accommodation onboard is a spacious
                oceanfront suite.
              </p>

              <div className="dmg-info-features dmg-info-features-scrollable">
                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">Generous Space</h3>
                    <p className="dmg-info-feature-desc">
                      Noticeably larger layouts than traditional cruise cabins,
                      featuring dedicated sitting areas.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Private Oceanfront Terraces
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Floor-to-ceiling glass doors open to personal sundecks
                      with daybeds and seating.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Marble Bathrooms &amp; Walk-ins
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Spacious bathrooms, walk-in closets, heated floors in
                      select rooms, and premium amenities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PUBLIC SPACES & WELLNESS ────────────────────────────────── */}
      <section
        className="Ejvs-pricing-section"
        id="Ejvs-family-experience"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="Ejvs-container">
          <div className="Ejvs-section-header">
            <h2 className="Ejvs-section-title">
              Spacious Public Decks &amp; Integrated Wellness
            </h2>
            <div className="Asc-accent-line"></div>
            <p className="Ejvs-section-subtitle">
              Enjoy room to breathe and physical renewal with expansive ship
              decks and dedicated wellness structures.
            </p>
          </div>

          <div className="Ejvs-pricing-grid">
            {/* Left Card */}
            <div className="Ejvs-pricing-card Ejvs-explora-card">
              <div className="Ejvs-card-header">
                <div className="Ejvs-card-icon-wrap">
                  <Sparkles size={24} className="Ejvs-card-icon" />
                </div>
                <h3 className="Ejvs-card-title">Spacious Public Areas</h3>
              </div>

              <p className="Ejvs-card-intro">
                Designed to prioritize space, Explora Journeys guarantees a
                peaceful sundeck or lounge is always within reach.
              </p>

              <ul className="Ejvs-feature-list">
                {[
                  "Three outdoor swimming pools & daybeds",
                  "One indoor pool with retractable glass dome",
                  "Elegant cocktail bars and quiet lounges",
                  "Oceanfront sundecks and viewing platforms",
                  "No crowded waiting lines or seating conflicts",
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
                  Even on sea days, the passenger-to-space ratio ensures an
                  uncrowded atmosphere that feels exclusive and relaxing.
                </p>
              </div>
            </div>

            {/* Right Card */}
            <div className="Ejvs-pricing-card Ejvs-seabourn-card">
              <div className="Ejvs-card-header">
                <div className="Ejvs-card-icon-wrap">
                  <Award size={24} className="Ejvs-card-icon" />
                </div>
                <h3 className="Ejvs-card-title">Everyday Onboard Wellness</h3>
              </div>

              <p className="Ejvs-card-intro">
                Wellness is integrated throughout the ship, allowing you to
                prioritize physical and mental health.
              </p>

              <ul className="Ejvs-feature-list">
                {[
                  "Refined thermal spa and steam suites",
                  "Modern fitness center with ocean views",
                  "Complimentary yoga and Pilates classes",
                  "Healthy dining options across menus",
                  "Outdoor exercise and meditation decks",
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
                  The emphasis is on physical recovery and mental wellness,
                  helping you return home refreshed rather than exhausted.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTEMPORARY EUROPEAN ELEGANCE ─────────────────────────── */}
      <section className="luc-why-section" id="luc-why-explora">
        <div className="luc-why-container">
          {/* LEFT — stacked images */}
          <div className="luc-why-images">
            <div className="luc-why-img-main-wrap" style={{ color: "#fff" }}>
              <img
                src={Exploraexp1}
                alt="Explora Journeys clean architectural design"
                className="luc-why-img-main"
              />
              <div className="luc-why-img-overlay"></div>
            </div>
            <div className="luc-why-img-accent-wrap" style={{ color: "#fff" }}>
              <img
                src={Exploraexp2}
                alt="Refined materials and designer furniture"
                className="luc-why-img-accent"
              />
              <div className="luc-why-img-badge">
                <span className="luc-why-badge-num">100%</span>
                <span className="luc-why-badge-text">Ocean Views</span>
              </div>
            </div>
          </div>

          {/* RIGHT — content */}
          <div className="luc-why-content">
            <h2 className="luc-why-title">Contemporary European Elegance</h2>
            <div className="aac-accent-line aac-accent-white"></div>
            <p className="luc-why-intro">
              Explora Journeys avoids the flashy, traditional style often
              associated with luxury cruising. The focus remains on understated
              elegance, natural light, and clean architectural lines.
            </p>
            <div className="luc-why-features">
              {[
                {
                  num: "01",
                  title: "Modern Architecture",
                  desc: "Thoughtful layouts designed in Switzerland to feel like a high-end European villa.",
                },
                {
                  num: "02",
                  title: "Natural Materials",
                  desc: "Stunning integration of premium woods, marble, stones, and high-end brass finishes.",
                },
                {
                  num: "03",
                  title: "Neutral Color Palettes",
                  desc: "Calming shades of cream, beige, navy, and gold that naturally connect with the marine views.",
                },
                {
                  num: "04",
                  title: "Designer Furnishings",
                  desc: "Luxe Italian furniture brands and curated contemporary artwork decorate every venue.",
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

      {/* DINING THAT RIVALS FINE RESTAURANTS */}
      <section className="dmg-info-section dmg-bg-white" id="dmg-dining">
        <div className="dmg-info-container">
          <div className="dmg-info-grid">
            <div className="dmg-info-content">
              <h2 className="dmg-info-title">
                Dining That Rivals Fine Restaurants
              </h2>

              <div className="dmg-info-accent"></div>

              <p className="dmg-info-lead">
                Dining is one of Explora Journeys' strongest features. Rather
                than centering the experience around a single main dining room,
                guests can enjoy several restaurants inspired by cuisines from
                around the world, all with flexible dining times.
              </p>

              <div className="dmg-info-features dmg-info-features-scrollable">
                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>

                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Mediterranean Cuisine
                    </h3>

                    <p className="dmg-info-feature-desc">
                      Fresh seasonal ingredients and regional specialties
                      inspired by coastal Europe.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>

                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Asian-Inspired Dining
                    </h3>

                    <p className="dmg-info-feature-desc">
                      Creative menus showcasing authentic flavors and
                      contemporary culinary techniques.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>

                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Fine Dining Experiences
                    </h3>

                    <p className="dmg-info-feature-desc">
                      Elegant restaurants featuring beautifully presented dishes
                      and attentive service.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>

                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">Casual Venues</h3>

                    <p className="dmg-info-feature-desc">
                      Relaxed cafés and casual dining options that maintain the
                      same commitment to exceptional quality.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="dmg-info-media">
              <div className="dmg-media-wrapper">
                <img
                  src={ExploraDining}
                  alt="Fine dining restaurant aboard Explora Journeys"
                  className="dmg-media-img"
                  style={{ height: "750px" }}
                />

                <div className="dmg-media-overlay"></div>

                <div className="dmg-media-badge">
                  <span>World-Class Culinary Experiences</span>
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
            Guests also appreciate the flexibility to dine whenever it suits
            their schedule instead of adhering to fixed dining times, making
            every meal feel relaxed and unhurried.
          </p>
        </div>
      </section>

      {/* ── IS EXPLORA LUXURY COMPARED TO OTHER CRUISE LINES? ────────────────────────── */}
      <section
        className="Asc-section Asc-bg-white"
        id="Asc-luxury-comparison"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="Asc-container">
          <div className="Asc-section-header">
            <h2 className="Asc-h2">
              Is Explora Luxury Compared to Other Cruise Lines?
            </h2>
            <div className="Asc-accent-line"></div>

            <p className="Asc-body-text" style={{ marginTop: "20px" }}>
              Compared with mainstream premium cruise lines, Explora Journeys
              offers a distinctly modern approach to luxury cruising that
              emphasizes space, personalized service, wellness, and destination
              immersion.
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
                  <td>
                    <strong>Accommodation</strong>
                  </td>
                  <td>All-suite luxury accommodations</td>
                </tr>
                <tr>
                  <td>
                    <strong>Design</strong>
                  </td>
                  <td>Contemporary European elegance</td>
                </tr>
                <tr>
                  <td>
                    <strong>Dining</strong>
                  </td>
                  <td>Multiple premium restaurants</td>
                </tr>
                <tr>
                  <td>
                    <strong>Service</strong>
                  </td>
                  <td>Highly personalized</td>
                </tr>
                <tr>
                  <td>
                    <strong>Wellness</strong>
                  </td>
                  <td>Integrated throughout the experience</td>
                </tr>
                <tr>
                  <td>
                    <strong>Atmosphere</strong>
                  </td>
                  <td>Relaxed and sophisticated</td>
                </tr>
                <tr>
                  <td>
                    <strong>Public Spaces</strong>
                  </td>
                  <td>Spacious and uncrowded</td>
                </tr>
                <tr>
                  <td>
                    <strong>Focus</strong>
                  </td>
                  <td>Destination immersion and luxury living</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="Asc-body-text" style={{ marginTop: "2rem" }}>
            Rather than competing through ship size or onboard attractions,
            Explora Journeys differentiates itself by elevating every aspect of
            the guest experience—from spacious accommodations and exceptional
            dining to personalized service, wellness, and immersive
            destinations.
          </p>
        </div>
      </section>

      {/* ── RELAXED LUXURY RATHER THAN FORMAL LUXURY ──────────────────────────── */}
      <section className="afc-section afc-bg-white" id="afc-relaxed-luxury">
        <div className="afc-container">
          <div className="afc-section-header">
            <h2 className="afc-h2">Relaxed Luxury Rather Than Formal Luxury</h2>
            <div className="afc-accent-line"></div>
          </div>

          <div className="afc-split-layout">
            {/* Left Column */}
            <div className="afc-content-side">
              <div className="afc-insight-card">
                <p className="afc-lead-text">
                  <strong>
                    One of Explora Journeys' defining characteristics is its
                    relaxed, contemporary approach to luxury.
                  </strong>
                </p>

                <div className="afc-why-box">
                  <span className="afc-why-title">You Won't Encounter</span>

                  <p className="afc-why-text">
                    Strict formal nights, loud announcements, constant onboard
                    promotions, busy activity schedules, or crowded
                    entertainment venues competing for your attention.
                  </p>
                </div>
              </div>

              <div className="afc-recommendations-wrapper">
                <h3 className="afc-sub-title">Instead, Expect:</h3>

                <div className="afc-rec-grid">
                  {[
                    "Leisurely mornings",
                    "Elegant cocktails",
                    "Ocean-view lounges",
                    "Live music",
                    "Quiet evenings",
                    "Meaningful conversations",
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

            {/* Right Column */}
            <div className="afc-media-side">
              <div className="afc-image-wrapper" style={{ aspectRatio: "4/4" }}>
                <img
                  src={ExploraPool}
                  alt="Relaxed luxury atmosphere aboard Explora Journeys"
                  className="afc-showcase-image"
                />
              </div>

              <div className="afc-strategy-box" style={{ height: "300px" }}>
                <p className="afc-strategy-lead">
                  Explora Journeys redefines luxury by emphasizing comfort,
                  flexibility, and genuine hospitality instead of rigid
                  traditions and formal routines.
                </p>

                <div className="afc-strategy-tags">
                  {[
                    "Relaxed Atmosphere",
                    "Flexible Lifestyle",
                    "Ocean Views",
                    "Live Music",
                    "Quiet Luxury",
                  ].map((tag, idx) => (
                    <span key={idx} className="afc-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <p
            className="afc-lead-text"
            style={{
              maxWidth: "900px",
              margin: "40px auto 0",
              textAlign: "center",
            }}
          >
            Luxury is experienced through comfort, freedom, and thoughtful
            service rather than strict dress codes, formal traditions, or packed
            daily schedules.
          </p>
        </div>
      </section>

      {/* ── WHAT'S INCLUDED? ───────────────────────────────────────── */}
      <section className="adg-section" id="adg-family-experience">
        <div className="adg-container">
          <div className="adg-section-header" style={{ marginBottom: "60px" }}>
            <h2 className="adg-h2">What's Included in the Fare?</h2>
            <div className="adg-accent-line"></div>
            <p
              className="Asc-body-text"
              style={{ textAlign: "center", marginTop: "15px" }}
            >
              Explora Journeys simplifies the luxury experience by including
              many premium amenities in the cruise fare.
            </p>
          </div>

          <div className="adg-split-layout">
            <div className="adg-content-card-side">
              <img
                src={ExploraOutdoor}
                alt="Explora Journeys inclusive luxury sundeck"
                className="adg-side-image"
                style={{ height: "54vh" }}
              />

              <div className="adg-info-card">
                <div className="adg-card-meta">
                  <Compass size={28} />
                  <span className="adg-meta-label">All-Inclusive Comfort</span>
                </div>

                <p className="adg-card-lead">
                  These inclusions simplify the onboard experience, ensuring you
                  can focus entirely on your travel journey without constantly
                  checking a folio balance.
                </p>
              </div>
            </div>

            <div className="adg-list-side">
              {[
                {
                  title: "Luxury suite accommodations",
                  icon: <Ship size={20} />,
                },
                {
                  title: "Multiple dining venues",
                  icon: <Utensils size={20} />,
                },
                {
                  title: "Complimentary room service",
                  icon: <Sparkles size={20} />,
                },
                {
                  title: "High-speed Wi-Fi (Starlink)",
                  icon: <Globe size={20} />,
                },
                {
                  title: "Refined onboard entertainment",
                  icon: <Anchor size={20} />,
                },
                {
                  title: "Access to spa & wellness spaces",
                  icon: <Sparkles size={20} />,
                },
                { title: "Selected fine beverages", icon: <Wine size={20} /> },
                {
                  title: "Onboard gratuities included",
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

      {/* PERSONALIZED SERVICE & DESTINATION FOCUS */}
      <section
        className="azs-entertainment-section"
        id="azs-personalized-service"
      >
        <div className="azs-container">
          <div className="azs-section-header">
            <h2 className="azs-section-title">Personalized Service</h2>
            <div className="azs-section-accent"></div>

            <p className="azs-section-subtitle">
              Exceptional service is one of the foundations of the Explora
              Journeys experience, where genuine hospitality and thoughtful
              attention to detail create a relaxed luxury atmosphere.
            </p>
          </div>

          <div className="azs-entertainment-grid">
            {/* Personalized Service Card */}
            <div className="azs-entertainment-card azs-azamara-ent">
              <div className="azs-ent-header">
                <div className="azs-ent-icon-circle">
                  <Users size={24} className="azs-ent-icon" />
                </div>

                <h3 className="azs-ent-title">Personalized Service</h3>
              </div>

              <p className="azs-ent-intro">
                Guests frequently appreciate the warm, attentive hospitality
                that makes every voyage feel personal without ever feeling
                intrusive.
              </p>

              <div className="azs-ent-body">
                <ul className="azs-ent-list">
                  {[
                    "Friendly crew members",
                    "Personalized attention",
                    "Remembered preferences",
                    "Efficient service",
                    "Professional hospitality",
                    "Relaxed interactions",
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
                    The service feels attentive without being overly formal or
                    intrusive, allowing guests to relax from the moment they
                    board.
                  </p>
                </div>
              </div>
            </div>

            {/* Destination Focus Card */}
            <div className="azs-entertainment-card azs-seabourn-ent">
              <div className="azs-ent-header">
                <div className="azs-ent-icon-circle">
                  <Compass size={24} className="azs-ent-icon" />
                </div>

                <h3 className="azs-ent-title">A Focus on the Destination</h3>
              </div>

              <p className="azs-ent-intro">
                Explora Journeys believes luxury travel should extend beyond the
                ship itself, giving guests more time to experience each
                destination.
              </p>

              <div className="azs-ent-body">
                <ul className="azs-ent-list">
                  {[
                    "Longer port stays",
                    "Overnight visits",
                    "Less crowded destinations",
                    "More time ashore",
                    "Flexible exploration",
                  ].map((item, idx) => (
                    <li key={idx} className="azs-ent-list-item">
                      <div className="azs-ent-list-icon-wrapper">
                        <Compass size={14} className="azs-ent-list-icon" />
                      </div>

                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="azs-ent-divider"></div>

                <div className="azs-ent-highlight-box azs-seabourn-ent-highlight">
                  <p className="azs-ent-highlight-text">
                    Instead of rushing from one port to the next, travelers have
                    the opportunity to immerse themselves more deeply in every
                    destination.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── IS EXPLORA WORTH THE PRICE? ──────────────────── */}
      <section
        className="ugt-components-section"
        id="explora-worth-the-price"
        style={{ backgroundColor: "var(--bg-white)" }}
      >
        <div className="ugt-components-container">
          <div className="ugt-components-header">
            <h2 className="ugt-components-title">
              Is Explora Worth the Price?
            </h2>
            <div className="adg-c-accent-line"></div>
          </div>

          <div className="ugt-components-list">
            <div className="ugt-component-row">
              <div className="ugt-component-image-wrapper">
                <div className="ugt-component-image-container">
                  <img
                    src={HeroImage3}
                    alt="Luxury suite and ocean views aboard Explora Journeys"
                    className="ugt-component-image"
                  />
                </div>
              </div>

              <div className="ugt-component-content">
                <p className="ugt-component-text">
                  Luxury travel always represents an investment. Explora
                  Journeys justifies its premium pricing by delivering
                  exceptional quality, personalized hospitality, and
                  thoughtfully designed experiences throughout every voyage.
                </p>

                <div className="ugt-questions-box">
                  <span className="ugt-questions-title">
                    Explora Journeys delivers value through:
                  </span>

                  <ul className="ugt-questions-list">
                    {[
                      "Spacious suites",
                      "Exceptional dining",
                      "Outstanding service",
                      "Elegant design",
                      "Inclusive amenities",
                      "Wellness experiences",
                      "Relaxed atmosphere",
                      "Carefully curated itineraries",
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
                    backgroundColor: "var(--bg-soft)",
                    padding: "12px",
                    borderRadius: "6px",
                  }}
                >
                  When compared with the overall quality of the experience, many
                  luxury travelers consider Explora Journeys an excellent value
                  within its category.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHO MAY PREFER ANOTHER CRUISE LINE? */}
      <section className="Asc-section Asc-bg-soft" id="Asc-who">
        <div className="Asc-container">
          <div className="Asc-section-header">
            <h2 className="Asc-h2">Who May Prefer Another Cruise Line?</h2>

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
            <div className="Asc-who-card Asc-who-no">
              <h3 className="Asc-who-title">
                Explora Journeys May Not Be the Ideal Choice If You're Looking
                For:
              </h3>

              <ul className="Asc-who-list">
                {[
                  "Water parks",
                  "Character entertainment",
                  "Large casinos",
                  "High-energy nightlife",
                  "Broadway-style productions",
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
              margin: "32px auto 0",
              textAlign: "center",
            }}
          >
            Families with young children who prioritize extensive kids' clubs,
            character entertainment, and activity-packed days may find other
            cruise lines better suited to their travel style.
          </p>
        </div>
      </section>

      {/* ── EXPLORA TALES VIDEO ───────────────────────── */}
      <section
        className="Asc-video-section"
        id="Asc-video-4"
        style={{ backgroundColor: "var(--bg-white)" }}
      >
        <div className="Asc-container">
          <div className="Asc-section-header">
            <h2 className="Asc-h2">Discover a New Standard of Ocean Luxury</h2>

            <div className="Asc-accent-line"></div>

            <p className="Asc-video-intro">
              Step aboard EXPLORA I and discover a new style of luxury ocean
              travel. This inspiring introduction showcases the beauty of life
              at sea, from breathtaking destinations and unforgettable moments
              to the thoughtful experiences that define every Explora Journey.
            </p>
          </div>

          <div className="Asc-video-wrapper">
            <div className="Asc-video-frame">
              <iframe
                src="https://www.youtube.com/embed/cOX8GgQMP48"
                title="Begin Your Explora Journey: Discover EXPLORA I"
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
        style={{ backgroundColor: "var(--bg-white)" }}
      >
        <div className="Asc-container">
          {/* HEADING */}
          <div className="Avr-planning-heading">
            <span className="Avr-planning-eyebrow">Expert Cruise Planning</span>

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
                Expert Guidance for Every Step of Your Journey
              </h3>

              <p className="Avr-planning-left-body">
                Luxury cruises often involve important decisions beyond simply
                selecting a departure date. Working with an experienced luxury
                travel advisor helps ensure every detail is carefully planned to
                match your travel style, preferences, and budget.
              </p>

              <div className="Avr-planning-alert">
                <ShieldCheck size={18} className="Avr-planning-alert-icon" />

                <p className="Avr-planning-alert-text">
                  Professional guidance helps you make informed decisions while
                  maximizing the value of your luxury cruise investment.
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
                    icon: <Compass size={18} />,
                    label: "Compare itineraries",
                  },
                  {
                    icon: <Home size={18} />,
                    label: "Select the ideal suite",
                  },
                  {
                    icon: <Info size={18} />,
                    label: "Explain included amenities",
                  },
                  {
                    icon: <BadgePercent size={18} />,
                    label: "Identify available promotions",
                  },
                  {
                    icon: <Hotel size={18} />,
                    label: "Coordinate hotels and transfers",
                  },
                  {
                    icon: <MapPinned size={18} />,
                    label: "Arrange personalized shore experiences",
                  },
                  {
                    icon: <TrendingUp size={18} />,
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
                Professional planning ensures your luxury cruise vacation is
                tailored to your travel style, preferences, and overall vacation
                goals.
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
      <section className="Asc-section Asc-bg-soft" id="Asc-faq">
        <div className="Asc-container">
          <div className="Asc-section-header">
            <h2 className="Asc-h2">Frequently Asked Questions</h2>
            <div className="Asc-accent-line"></div>
            <p className="Asc-faq-intro">
              Everything you need to know about Explora Journeys' luxury
              experience.
            </p>
          </div>
          <FAQ />
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────────── */}
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
                  Personalized Luxury Cruise Planning
                </span>
                <h2 className="Asc-help-h2">
                  Ready to Experience Explora Journeys?
                </h2>
                <div className="Asc-help-accent"></div>
              </div>

              <div className="Asc-help-grid">
                <div className="Asc-help-info">
                  <p className="Asc-help-intro">
                    Trips &amp; Ships Luxury Travel helps travelers select and
                    coordinate the right luxury cruise experience based on
                    travel style, preferences, and destination goals.
                  </p>

                  <p className="Asc-help-intro">
                    Connect with Angela Hughes and the Trips &amp; Ships Luxury
                    Travel team to begin planning your personalized Explora
                    Journeys voyage.
                  </p>

                  <div className="Asc-help-btn-container">
                    <Link
                      to="/contact"
                      className="Asc-help-cta-btn"
                      style={{ textDecoration: "none" }}
                    >
                      Start Planning Your Explora Journey
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
                      "Travel style and cruise line matching",
                      "Suite selection and deck location guidance",
                      "Destination-focused experience planning",
                      "Access to exclusive agency rates and promotions",
                      "Coordination of flights and luxury transfers",
                      "Complete pre- and post-voyage concierge support",
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
                      label: "What Makes Explora Journeys Different?",
                      path: "/what-makes-explora-journeys-different",
                    },
                    {
                      label: "Is Explora Journeys Worth It?",
                      path: "/is-explora-journeys-worth-it",
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
                      label: "What Is Included on Explora Journeys?",
                      path: "/explora-journeys-cruise-inclusions",
                    },
                    {
                      label: "Is Anthology Worth It?",
                      path: "/is-anthology-worth-it",
                    },
                    {
                      label: "How to Get the Best Value on Explora Journeys",
                      path: "/how-to-get-the-best-value-on-explora-journeys",
                    },
                    {
                      label: "Planning Your First Explora Journey",
                      path: "/planning-your-first-explora-journey",
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

export default IsExploraLuxury;
