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
  Moon,
  Trees,
  Leaf,
  Music,
  Utensils,
  X,
} from "lucide-react";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela.jpeg";

import HeroImage1 from "../../assets/WhichExploraShipChoose/EXPLORA-III-PANAMA-CANAL.jpg";
import HeroImage2 from "../../assets/WhichExploraShipChoose/Explora-Journeys2.webp";
import HeroImage3 from "../../assets/ExploraIVGuide/explora-I-infinity-pool-aerial-view.JPG";
import ExploraPool from "../../assets/WhichExploraSuiteWorthUpgrade/explora-I-oceanfront-pool-lounge-deck.JPG";
import ExploraPool1 from "../../assets/ExploraIVGuide/explora-I-luxury-pool-deck-close-up.JPG";
import ExploraOutdoor from "../../assets/HowAdvanceShouldBookExplora/Explora-Journeys.webp";
import ExploraDining from "../../assets/WhichExploraShipChoose/EXPLORA-III-IV-Anthology.jpg";
import ExploraDestination from "../../assets/HowAdvanceShouldBookExplora/allinn-estonia-old-town-summer-travel-aerial.jpg";
import ExploraDestination2 from "../../assets/NorthernEuropeCruisesExploraJourneys/edinburgh-castle-scotland.jpg";
import LuxuryOceanfront from "../../assets/IsExploraGoodForFamilies/explora-journeys-retreat-residence-luxury-suite-living-room.webp";
import LuxuryOceanfront1 from "../../assets/ExploraIVGuide/explora-journeys-serenity-residence-private-whirlpool-suite.jpg";
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
      "@id": "https://tripsandships.com/why-choose-explora-journeys/#webpage",
      name: "Why Choose Explora Journeys?",
      url: "https://tripsandships.com/why-choose-explora-journeys",
      description:
        "Discover why travelers choose Explora Journeys for luxury cruising. Learn about spacious suites, destination-focused itineraries, exceptional dining, wellness experiences, personalized service, and whether Explora is the right cruise line for you.",
    },
    {
      "@type": "Article",
      "@id": "https://tripsandships.com/why-choose-explora-journeys/#article",
      headline:
        "Why Choose Explora Journeys? | Is Explora the Right Luxury Cruise Line?",
      description:
        "A complete guide to why travelers choose Explora Journeys, covering spacious oceanfront suites, boutique atmosphere, destination-focused itineraries, exceptional dining, wellness, personalized service, and more.",
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
        "https://tripsandships.com/why-choose-explora-journeys/#breadcrumb",
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
          name: "Why Choose Explora Journeys?",
          item: "https://tripsandships.com/why-choose-explora-journeys",
        },
      ],
    },
    {
      "@type": "TouristTrip",
      "@id": "https://tripsandships.com/why-choose-explora-journeys/#trip",
      name: "Explora Journeys Luxury Cruise Experience",
      description:
        "Boutique luxury cruising with all-suite oceanfront accommodations, destination-focused itineraries, exceptional dining, and wellness at sea.",
      provider: {
        "@type": "Organization",
        name: "Explora Journeys",
      },
    },
    {
      "@type": "Service",
      "@id": "https://tripsandships.com/why-choose-explora-journeys/#service",
      serviceType: "Luxury Cruise Vacation Planning",
      provider: {
        "@type": "TravelAgency",
        name: "Trips & Ships Luxury Travel",
      },
      areaServed: "Worldwide",
      description:
        "Personalized planning for Explora Journeys sailings, including itinerary selection, suite recommendations, and exclusive promotions.",
    },
    {
      "@type": "ItemList",
      "@id": "https://tripsandships.com/why-choose-explora-journeys/#itemlist",
      name: "Why Choose Explora Journeys — What This Guide Covers",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "A New Vision of Luxury Cruising",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Spacious Oceanfront Suites",
        },
        { "@type": "ListItem", position: 3, name: "Boutique Atmosphere" },
        {
          "@type": "ListItem",
          position: 4,
          name: "Destination-Focused Itineraries",
        },
        { "@type": "ListItem", position: 5, name: "Exceptional Dining" },
        {
          "@type": "ListItem",
          position: 6,
          name: "Wellness at the Center of Every Journey",
        },
        { "@type": "ListItem", position: 7, name: "Personalized Service" },
        { "@type": "ListItem", position: 8, name: "Elegant Public Spaces" },
        { "@type": "ListItem", position: 9, name: "A Relaxed Daily Schedule" },
        {
          "@type": "ListItem",
          position: 10,
          name: "Entertainment Without the Crowds",
        },
        { "@type": "ListItem", position: 11, name: "Global Destinations" },
        { "@type": "ListItem", position: 12, name: "Sustainability Matters" },
        {
          "@type": "ListItem",
          position: 13,
          name: "Who Should Choose Explora Journeys?",
        },
        {
          "@type": "ListItem",
          position: 14,
          name: "Why Book Through a Luxury Travel Advisor?",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://tripsandships.com/why-choose-explora-journeys/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Why do travelers choose Explora Journeys?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Travelers choose Explora for its spacious suites, destination-focused itineraries, exceptional dining, personalized service, and relaxed luxury atmosphere.",
          },
        },
        {
          "@type": "Question",
          name: "What makes Explora different from other cruise lines?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Explora focuses on boutique luxury, longer port stays, wellness, and immersive travel rather than large-scale entertainment and attractions.",
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
          name: "Is Explora considered luxury?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Explora Journeys is positioned in the luxury cruise market, offering premium accommodations, dining, and service.",
          },
        },
        {
          "@type": "Question",
          name: "Is Explora good for couples?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. The elegant atmosphere, spacious suites, and destination-focused itineraries make it especially appealing for couples.",
          },
        },
        {
          "@type": "Question",
          name: "Does Explora include dining?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Multiple gourmet dining venues are included in your cruise fare.",
          },
        },
        {
          "@type": "Question",
          name: "What destinations does Explora visit?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Explora sails throughout the Mediterranean, Northern Europe, Alaska, the Caribbean, Asia, Japan, Iceland & Greenland, and other regions worldwide.",
          },
        },
        {
          "@type": "Question",
          name: "Is Explora suitable for first-time luxury cruisers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. The relaxed atmosphere and personalized service make it an excellent introduction to luxury cruising.",
          },
        },
        {
          "@type": "Question",
          name: "Does Explora have formal nights?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Explora embraces an elegant, relaxed dress code rather than traditional formal evenings.",
          },
        },
        {
          "@type": "Question",
          name: "Should I book through a travel advisor?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. A luxury travel advisor can help you choose the right itinerary, secure promotions, and coordinate every aspect of your vacation.",
          },
        },
        {
          "@type": "Question",
          name: "Is Explora Journeys all-inclusive?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Explora Journeys offers a highly inclusive experience. Your fare covers gourmet dining at multiple venues, premium beverages, high-speed Wi-Fi, onboard gratuities, wellness programs, and port transfers where available.",
          },
        },
        {
          "@type": "Question",
          name: "Are families and children welcome on Explora Journeys?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. While designed primarily for adults seeking refined luxury, Explora is family-friendly and features the Nautilus Club for children and teenagers aged 6 to 17, providing age-appropriate activities and spaces.",
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
      q: "Why do travelers choose Explora Journeys?",
      a: "Travelers choose Explora for its spacious suites, destination-focused itineraries, exceptional dining, personalized service, and relaxed luxury atmosphere.",
    },
    {
      q: "What makes Explora different from other cruise lines?",
      a: "Explora focuses on boutique luxury, longer port stays, wellness, and immersive travel rather than large-scale entertainment and attractions.",
    },
    {
      q: "Are all accommodations suites?",
      a: "Yes. Every guest stays in an oceanfront suite with a private terrace.",
    },
    {
      q: "Is Explora considered luxury?",
      a: "Yes. Explora Journeys is positioned in the luxury cruise market, offering premium accommodations, dining, and service.",
    },
    {
      q: "Is Explora good for couples?",
      a: "Absolutely. The elegant atmosphere, spacious suites, and destination-focused itineraries make it especially appealing for couples.",
    },
    {
      q: "Does Explora include dining?",
      a: "Yes. Multiple gourmet dining venues are included in your cruise fare.",
    },
    {
      q: "What destinations does Explora visit?",
      a: "Explora sails throughout the Mediterranean, Northern Europe, Alaska, the Caribbean, Asia, Japan, Iceland & Greenland, and other regions worldwide.",
    },
    {
      q: "Is Explora suitable for first-time luxury cruisers?",
      a: "Yes. The relaxed atmosphere and personalized service make it an excellent introduction to luxury cruising.",
    },
    {
      q: "Does Explora have formal nights?",
      a: "No. Explora embraces an elegant, relaxed dress code rather than traditional formal evenings.",
    },
    {
      q: "Should I book through a travel advisor?",
      a: "Yes. A luxury travel advisor can help you choose the right itinerary, secure promotions, and coordinate every aspect of your vacation.",
    },
    {
      q: "Is Explora Journeys all-inclusive?",
      a: "Yes. Explora Journeys offers a highly inclusive experience. Your fare covers gourmet dining at multiple venues, premium beverages, high-speed Wi-Fi, onboard gratuities, wellness programs, and port transfers where available.",
    },
    {
      q: "Are families and children welcome on Explora Journeys?",
      a: "Yes. While designed primarily for adults seeking refined luxury, Explora is family-friendly and features the Nautilus Club for children and teenagers aged 6 to 17, providing age-appropriate activities and spaces.",
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
const WhyChooseExploraJourneys = () => {
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
          Why Choose Explora Journeys? | Is Explora the Right Luxury Cruise
          Line?
        </title>
        <meta name="title" content="Why Choose Explora Journeys?" />
        <meta
          name="description"
          content="Discover why travelers choose Explora Journeys for luxury cruising. Learn about spacious suites, destination-focused itineraries, exceptional dining, wellness experiences, personalized service, and whether Explora is the right cruise line for you."
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
          <h1>Why Choose Explora Journeys?</h1>

          <p>
            Luxury cruising has evolved dramatically in recent years, and
            Explora Journeys represents a fresh approach to life at sea.
          </p>

          <p>
            Rather than focusing on crowded ships, fixed schedules, and nonstop
            activities, Explora emphasizes spacious accommodations, immersive
            destinations, exceptional service, and the freedom to travel at your
            own pace.
          </p>

          {readMore && (
            <>
              <p>
                Created by the MSC Group, Explora Journeys combines European
                elegance with contemporary luxury, offering a boutique hotel
                atmosphere on beautifully designed ships. Every detail—from the
                all-suite accommodations to the thoughtfully curated
                itineraries—is intended to create a more relaxed, sophisticated,
                and enriching travel experience.
              </p>

              <p>
                If you're considering your next luxury cruise, here's why so
                many travelers are choosing Explora Journeys.
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

      {/* ── A NEW VISION OF LUXURY CRUISING ─────────────────────────── */}
      <section
        className="ugt-components-section"
        id="new-vision-luxury-cruising"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="ugt-components-container">
          <div className="ugt-components-header">
            <h2 className="ugt-components-title">
              A New Vision of Luxury Cruising
            </h2>
            <div className="adg-c-accent-line"></div>
          </div>

          <div className="ugt-components-list">
            <div className="ugt-component-row">
              <div className="ugt-component-image-wrapper">
                <div className="ugt-component-image-container">
                  <img
                    src={ExploraPool}
                    alt="Oceanfront pool deck reflecting Explora Journeys' relaxed vision of luxury cruising"
                    className="ugt-component-image"
                  />
                </div>
              </div>

              <div className="ugt-component-content">
                <p className="ugt-component-text">
                  <strong>Explora Journeys</strong> was designed for travelers
                  who value experiences over excess. Instead of creating the
                  largest ships with the most attractions, Explora focuses on
                  what truly matters at sea.
                </p>

                <div className="ugt-questions-box">
                  <span className="ugt-questions-title">
                    Explora focuses on:
                  </span>

                  <ul className="ugt-questions-list">
                    {[
                      "Space",
                      "Comfort",
                      "Personalized service",
                      "Exceptional dining",
                      "Destination immersion",
                      "Wellness",
                      "Elegant design",
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
                  The result is a cruise experience that feels more like staying
                  at a luxury oceanfront resort than sailing on a traditional
                  cruise ship.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SPACIOUS OCEANFRONT SUITES ──────────────────────────────── */}
      <section className="adg-c-section adg-c-bg-white" id="oceanfront-suites">
        <div className="adg-c-container">
          <div className="adg-c-section-header">
            <h2 className="adg-c-h2">Spacious Oceanfront Suites</h2>

            <div className="adg-c-accent-line"></div>

            <p className="Asc-section-intro">
              One of Explora's defining features is that every accommodation is
              an oceanfront suite with a private terrace, creating a true
              home-away-from-home experience at sea.
            </p>
          </div>

          <div className="adg-c-overview-layout">
            <div className="adg-c-overview-icons">
              {[
                "Floor-to-ceiling windows",
                "Comfortable living areas",
                "Walk-in wardrobes",
                "Spacious marble bathrooms",
                "Luxury bedding",
                "Private outdoor seating",
              ].map((label, i) => (
                <div key={i} className="adg-c-overview-item">
                  <span className="adg-c-overview-icon">
                    <BedDouble size={16} strokeWidth={2.5} />
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
                    With significantly more living space than many mainstream
                    cruise lines, the suites create a true home-away-from-home
                    experience.
                  </p>
                </div>
              </div>

              <div className="adg-c-overview-image-wrap">
                <img
                  src={LuxuryOceanfront}
                  alt="Spacious oceanfront suite living area aboard Explora Journeys"
                  className="adg-c-overview-img"
                />

                <div className="adg-c-overview-img-overlay">
                  <span className="adg-c-overview-img-label">
                    Every Suite • Every Guest
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BOUTIQUE ATMOSPHERE ─────────────────────────────────────── */}
      <section className="adg-section" id="boutique-atmosphere">
        <div className="adg-container">
          <div className="adg-section-header" style={{ marginBottom: "60px" }}>
            <h2 className="adg-h2">Boutique Atmosphere</h2>

            <div className="adg-accent-line"></div>

            <p
              className="Asc-body-text"
              style={{ textAlign: "center", marginTop: "15px" }}
            >
              Unlike mega-ships carrying thousands of passengers, Explora
              Journeys offers a calmer, more intimate environment that
              encourages meaningful relaxation rather than constant activity.
            </p>
          </div>

          <div className="adg-split-layout">
            {/* Left Side */}
            <div className="adg-content-card-side">
              <img
                src={ExploraPool1}
                alt="Quiet pool deck reflecting Explora Journeys' boutique atmosphere"
                className="adg-side-image"
                style={{ height: "25vh" }}
              />

              <div className="adg-info-card">
                <div className="adg-card-meta">
                  <Sparkles size={28} />

                  <span className="adg-meta-label">
                    Calm • Intimate • Uncrowded
                  </span>
                </div>

                <p className="adg-card-lead">
                  With far fewer guests aboard than mainstream ships, Explora
                  creates space to relax rather than compete for a lounge chair.
                </p>
              </div>
            </div>

            {/* Right Side */}
            <div className="adg-list-side">
              {[
                "Quiet public spaces",
                "No crowded pool decks",
                "Relaxed lounges",
                "Personalized attention",
                "Easy navigation around the ship",
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

      {/* ── GLOBAL DESTINATIONS ─────────────────────────── */}
      <section className="luc-why-section" id="global-destinations">
        <div className="luc-why-container">
          {/* LEFT — stacked images */}
          <div className="luc-why-images">
            <div className="luc-why-img-main-wrap" style={{ color: "#fff" }}>
              <img
                src={ExploraDestination}
                alt="Explora Journeys visiting world-class cruise destinations"
                className="luc-why-img-main"
              />
              <div className="luc-why-img-overlay"></div>
            </div>

            <div className="luc-why-img-accent-wrap" style={{ color: "#fff" }}>
              <img
                src={ExploraDestination2}
                alt="Guests exploring iconic destinations with Explora Journeys"
                className="luc-why-img-accent"
              />

              <div className="luc-why-img-badge">
                <span className="luc-why-badge-num">9</span>
                <span className="luc-why-badge-text">Global Regions</span>
              </div>
            </div>
          </div>

          {/* RIGHT — content */}
          <div className="luc-why-content">
            <h2 className="luc-why-title">Global Destinations</h2>

            <div className="aac-accent-line aac-accent-white"></div>

            <p className="luc-why-intro">
              Explora Journeys sails to many of the world's most desirable
              destinations. Every itinerary is thoughtfully designed to maximize
              time ashore, allowing guests to experience each region in greater
              depth.
            </p>

            <div className="luc-why-features">
              {[
                {
                  num: "01",
                  title: "Mediterranean",
                  desc: "Discover iconic coastal cities, charming villages, and world-famous cuisine.",
                },
                {
                  num: "02",
                  title: "Greece & Greek Isles",
                  desc: "Explore whitewashed islands, ancient history, and crystal-clear waters.",
                },
                {
                  num: "03",
                  title: "Northern Europe",
                  desc: "Visit historic capitals, scenic fjords, and vibrant cultural destinations.",
                },
                {
                  num: "04",
                  title: "Iceland & Greenland",
                  desc: "Experience dramatic landscapes, glaciers, waterfalls, and Arctic beauty.",
                },
                {
                  num: "05",
                  title: "Caribbean",
                  desc: "Relax on pristine beaches while enjoying vibrant island cultures.",
                },
                {
                  num: "06",
                  title: "Alaska",
                  desc: "Witness glaciers, wildlife, and spectacular wilderness landscapes.",
                },
                {
                  num: "07",
                  title: "Japan & Asia",
                  desc: "Discover fascinating traditions, modern cities, and exceptional cuisine.",
                },
                {
                  num: "08",
                  title: "Transatlantic Voyages",
                  desc: "Enjoy relaxing ocean crossings with extended time to experience life onboard.",
                },
              ]
                .slice(0, readMoreDestination ? 8 : 4)
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

      {/* ── DESTINATION-FOCUSED ITINERARIES & SUSTAINABILITY ─────────── */}
      <section
        className="adg-c-section adg-c-bg-soft"
        id="destination-itineraries"
      >
        <div className="adg-c-container">
          <div className="adg-c-section-header">
            <span className="adg-c-eyebrow">The Explora Philosophy</span>

            <h2 className="adg-c-h2">
              Destination-Focused Itineraries &amp; Sustainability
            </h2>

            <div className="adg-c-accent-line"></div>

            <p className="Asc-section-intro">
              Explora Journeys believes the destinations should be the highlight
              of every voyage. Each itinerary is thoughtfully designed to give
              guests more time ashore while embracing a responsible approach to
              modern luxury travel.
            </p>
          </div>

          <div className="adg-c-venues-grid1">
            {/* Destination-Focused Itineraries */}
            <div className="adg-c-venue-card adg-c-venue-1">
              <div className="adg-c-venue-top">
                <span className="adg-c-venue-eyebrow">
                  Destination-Focused Itineraries
                </span>

                <h3 className="adg-c-venue-name">
                  More Time Where It Matters Most
                </h3>

                <p className="adg-c-venue-highlight">
                  Explore Destinations at a Relaxed Pace
                </p>
              </div>

              <ul className="adg-c-venue-list">
                {[
                  "Longer port stays",
                  "Overnight visits",
                  "Smaller ports",
                  "Less-traveled destinations",
                  "More time to explore ashore",
                ].map((item, i) => (
                  <li key={i}>
                    <span className="adg-c-venue-dot"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="adg-c-venue-callout">
                <span className="adg-c-venue-callout-bar"></span>
                <p>
                  Rather than rushing from port to port, Explora gives guests
                  time to immerse themselves in local culture, cuisine, history,
                  and authentic experiences.
                </p>
              </div>
            </div>

            {/* Sustainability Matters */}
            <div className="adg-c-venue-card adg-c-venue-2">
              <div className="adg-c-venue-top">
                <span className="adg-c-venue-eyebrow">
                  Sustainability Matters
                </span>

                <h3 className="adg-c-venue-name">
                  A More Responsible Way to Travel
                </h3>

                <p className="adg-c-venue-highlight">
                  Modern Environmental Technologies
                </p>
              </div>

              <ul className="adg-c-venue-list">
                {[
                  "Advanced wastewater treatment",
                  "Energy-efficient systems",
                  "Reduced emissions technologies",
                  "Responsible resource management",
                  "Sustainable operational practices",
                ].map((item, i) => (
                  <li key={i}>
                    <span className="adg-c-venue-dot"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="adg-c-venue-callout">
                <span className="adg-c-venue-callout-bar"></span>
                <p>
                  Explora Journeys continues investing in environmentally
                  conscious innovations that help reduce its impact while
                  delivering a refined luxury travel experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── EXCEPTIONAL DINING ──────────────────────────────────────── */}
      <section
        className="dmg-info-section dmg-bg-white"
        id="exceptional-dining"
      >
        <div className="dmg-info-container">
          <div className="dmg-info-grid">
            {/* Left Side Image */}
            <div className="dmg-info-media">
              <div className="dmg-media-wrapper">
                <img
                  src={ExploraDining}
                  alt="Fine dining aboard Explora Journeys"
                  className="dmg-media-img"
                  style={{ height: "73vh" }}
                />

                <div className="dmg-media-overlay"></div>

                <div className="dmg-media-badge">
                  <span>Flexible Dining • No Rigid Schedules</span>
                </div>
              </div>
            </div>

            {/* Right Side Content */}
            <div className="dmg-info-content">
              <h2 className="dmg-info-title">Exceptional Dining</h2>

              <div className="dmg-info-accent"></div>

              <p className="dmg-info-lead">
                Dining aboard Explora Journeys is a highlight of every voyage.
                Guests enjoy multiple restaurants featuring a wide range of
                global cuisine, all without the rigid schedules found on many
                cruise lines.
              </p>

              <div className="dmg-info-features dmg-info-features-scrollable">
                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Utensils size={16} />
                  </div>

                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">Global Flavors</h3>

                    <p className="dmg-info-feature-desc">
                      Mediterranean cuisine, Asian specialties, European
                      classics, and international favorites across multiple
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
                      Fresh Seafood &amp; Premium Steaks
                    </h3>

                    <p className="dmg-info-feature-desc">
                      Quality ingredients prepared with exceptional
                      craftsmanship at every dining venue.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Leaf size={16} />
                  </div>

                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Plant-Based Options
                    </h3>

                    <p className="dmg-info-feature-desc">
                      Thoughtfully prepared plant-based dishes available
                      alongside every menu.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WELLNESS AT THE CENTER OF EVERY JOURNEY ─────────────────── */}
      <section
        className="azs-entertainment-section"
        id="wellness-at-the-center"
      >
        <div className="azs-container">
          <div className="azs-section-header">
            <h2 className="azs-section-title">
              Wellness at the Center of Every Journey
            </h2>

            <div className="azs-section-accent"></div>

            <p className="azs-section-subtitle">
              Explora places wellness at the heart of the onboard experience,
              whether you want to maintain your fitness routine or simply relax.
            </p>
          </div>

          <div className="azs-entertainment-grid">
            {/* Spa & Fitness */}
            <div className="azs-entertainment-card azs-azamara-ent">
              <div className="azs-ent-header">
                <div className="azs-ent-icon-circle">
                  <HeartPulse size={24} className="azs-ent-icon" />
                </div>

                <h3 className="azs-ent-title">
                  Ocean Wellness Spa &amp; Fitness
                </h3>
              </div>

              <p className="azs-ent-intro">
                A full-service spa and modern, ocean-view fitness center give
                guests everything needed to stay active and rejuvenated at sea.
              </p>

              <div className="azs-ent-body">
                <h4 className="azs-ent-group-title">Guests Can Enjoy:</h4>

                <ul className="azs-ent-list">
                  {[
                    "Ocean Wellness Spa",
                    "Modern fitness center",
                    "Yoga classes",
                    "Meditation",
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
                    Wellness is integrated throughout the ship rather than
                    confined to a single space.
                  </p>
                </div>
              </div>
            </div>

            {/* Thermal & Outdoor Wellness */}
            <div className="azs-entertainment-card azs-seabourn-ent">
              <div className="azs-ent-header">
                <div className="azs-ent-icon-circle">
                  <Trees size={24} className="azs-ent-icon" />
                </div>

                <h3 className="azs-ent-title">
                  Thermal &amp; Outdoor Wellness Spaces
                </h3>
              </div>

              <p className="azs-ent-intro">
                Beyond the spa, Explora offers healthy dining and outdoor
                fitness spaces designed to support well-being throughout the
                voyage.
              </p>

              <div className="azs-ent-body">
                <h4 className="azs-ent-group-title">Also Available:</h4>

                <ul className="azs-ent-list">
                  {[
                    "Thermal experiences",
                    "Healthy dining options",
                    "Outdoor fitness spaces",
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
                    Whether you want to maintain your fitness routine or simply
                    relax, wellness is woven into nearly every part of the
                    journey.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PERSONALIZED SERVICE ────────────────────────────────────── */}
      <section
        className="ugt-components-section"
        id="personalized-service"
        style={{ backgroundColor: "var(--bg-white)" }}
      >
        <div className="ugt-components-container">
          <div className="ugt-components-header">
            <h2 className="ugt-components-title">Personalized Service</h2>
            <div className="adg-c-accent-line"></div>
          </div>

          <div className="ugt-components-list">
            <div className="ugt-component-row">
              <div className="ugt-component-image-wrapper">
                <div className="ugt-component-image-container">
                  <img
                    src={LuxuryOceanfront1}
                    alt="Attentive crew service reflecting Explora Journeys' personalized approach"
                    className="ugt-component-image"
                  />
                </div>
              </div>

              <div className="ugt-component-content">
                <p className="ugt-component-text">
                  Luxury is defined by service as much as amenities.{" "}
                  <strong>Explora's</strong> attentive crew focuses on creating
                  genuine relationships with guests, anticipating your needs
                  rather than simply responding to them.
                </p>

                <div className="ugt-questions-box">
                  <span className="ugt-questions-title">
                    Expect from every crew member:
                  </span>

                  <ul className="ugt-questions-list">
                    {[
                      "Friendly, professional staff",
                      "Personalized attention",
                      "Quick response to requests",
                      "Thoughtful details",
                      "Exceptional hospitality",
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
                  The crew's goal is to anticipate your needs rather than simply
                  respond to them.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ELEGANT PUBLIC SPACES & A RELAXED DAILY SCHEDULE ────────── */}
      <section
        className="Ejvs-pricing-section"
        id="elegant-spaces-relaxed-schedule"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="Ejvs-container">
          <div className="Ejvs-section-header">
            <h2 className="Ejvs-section-title">
              Elegant Public Spaces & <br /> A Relaxed Daily Schedule
            </h2>
            <div className="Asc-accent-line"></div>
            <p className="Ejvs-section-subtitle">
              Every area onboard has been thoughtfully designed, and unlike many
              traditional cruises, Explora avoids packed daily schedules.
            </p>
          </div>

          <div className="Ejvs-pricing-grid">
            {/* Elegant Public Spaces */}
            <div className="Ejvs-pricing-card Ejvs-explora-card">
              <div className="Ejvs-card-header">
                <div className="Ejvs-card-icon-wrap">
                  <Sparkles size={24} className="Ejvs-card-icon" />
                </div>

                <h3 className="Ejvs-card-title">Elegant Public Spaces</h3>
              </div>

              <p className="Ejvs-card-intro">
                The design philosophy emphasizes natural light, open space, and
                uninterrupted ocean views throughout every area of the ship.
              </p>

              <ul className="Ejvs-feature-list">
                {[
                  "Stylish lounges",
                  "Infinity pools",
                  "Outdoor terraces",
                  "Quiet reading areas",
                  "Ocean-view bars",
                  "Art-filled interiors",
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
                  Comfortable gathering spaces make it easy to relax wherever
                  you choose to spend your day.
                </p>
              </div>
            </div>

            {/* A Relaxed Daily Schedule */}
            <div className="Ejvs-pricing-card Ejvs-seabourn-card">
              <div className="Ejvs-card-header">
                <div className="Ejvs-card-icon-wrap">
                  <Moon size={24} className="Ejvs-card-icon" />
                </div>

                <h3 className="Ejvs-card-title">A Relaxed Daily Schedule</h3>
              </div>

              <p className="Ejvs-card-intro">
                There is no pressure to constantly participate in organized
                activities—guests enjoy the freedom to set their own pace.
              </p>

              <ul className="Ejvs-feature-list">
                {[
                  "Sleep in",
                  "Dine whenever they prefer",
                  "Spend time at the spa",
                  "Read by the pool",
                  "Explore ports independently",
                  "Relax on their private terrace",
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
                  The freedom to travel at your own pace is at the heart of the
                  Explora experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ENTERTAINMENT WITHOUT THE CROWDS ────────────────────────── */}
      <section
        className="dmg-info-section"
        id="entertainment-without-the-crowds"
      >
        <div className="dmg-info-container">
          <div className="dmg-info-grid">
            <div className="dmg-info-content">
              <h2 className="dmg-info-title">
                Entertainment Without the Crowds
              </h2>

              <div className="dmg-info-accent"></div>

              <p className="dmg-info-lead">
                Entertainment is elegant rather than overwhelming. The
                atmosphere remains sophisticated and relaxed throughout the day,
                without the packed theaters and constant announcements found on
                larger ships.
              </p>

              <div className="dmg-info-features dmg-info-features-scrollable">
                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Music size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Live Music &amp; Jazz
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Live music, pianists, and jazz performances set a refined
                      evening tone.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Cultural Presentations
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Guest speakers and cultural presentations connect guests
                      to each destination.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">Cocktail Lounges</h3>
                    <p className="dmg-info-feature-desc">
                      Evening performances and cocktail lounges offer a relaxed
                      close to the day.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="dmg-info-media">
              <div className="dmg-media-wrapper">
                <img
                  src={ExploraOutdoor}
                  alt="Elegant evening lounge aboard Explora Journeys"
                  className="dmg-media-img"
                  style={{ height: "75vh" }}
                />
                <div className="dmg-media-overlay"></div>

                <div className="dmg-media-badge">
                  <span>Sophisticated • Relaxed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHO SHOULD CHOOSE EXPLORA JOURNEYS ─────────────────── */}
      <section className="Asc-section" id="who-should-choose" style={{backgroundColor: "var(--bg-soft)"}}>
        <div className="Asc-container">
          <div className="Asc-section-header">
            <h2 className="Asc-h2">Who Should Choose Explora Journeys?</h2>
            <div className="Asc-accent-line"></div>

            <p className="Asc-body-text">
              Explora Journeys is an excellent choice for travelers seeking
              sophisticated luxury, immersive destinations, and personalized
              service. It is especially popular with couples, retirees, solo
              travelers, and experienced luxury cruisers who value meaningful
              travel over onboard attractions.
            </p>
          </div>

          <div className="Asc-who-grid">
            <div className="Asc-who-card Asc-who-yes">
              <h3 className="Asc-who-title">
                Explora Is an Excellent Choice for Travelers Who Enjoy:
              </h3>

              <ul className="Asc-who-list">
                {[
                  "Luxury hotels",
                  "Boutique experiences",
                  "Fine dining",
                  "Wellness",
                  "Quiet relaxation",
                  "Cultural exploration",
                  "Destination-focused travel",
                  "Personalized service",
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
                Who May Prefer Another Cruise Line?
              </h3>

              <ul className="Asc-who-list">
                {[
                  "Water parks",
                  "Surf simulators",
                  "Theme park attractions",
                  "Character entertainment",
                  "Large casinos",
                  "High-energy nightlife",
                  "Constant organized activities",
                ].map((item, i) => (
                  <li key={i}>
                    <X size={16} className="Asc-icon-red" />
                    {item}
                  </li>
                ))}
              </ul>
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
            <span className="Avr-planning-eyebrow">
              Personalized Trip Planning
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
                Select the Explora Voyage That Fits You
              </h3>

              <p className="Avr-planning-left-body">
                An experienced luxury travel advisor can help you compare
                itineraries, choose the ideal suite, and secure exclusive
                promotions—professional guidance that ensures you select the
                Explora voyage that best matches your travel style.
              </p>

              <div className="Avr-planning-alert">
                <ShieldCheck size={18} className="Avr-planning-alert-icon" />

                <p className="Avr-planning-alert-text">
                  Professional guidance helps ensure every detail of your
                  vacation is planned seamlessly, from start to finish.
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
                    icon: <Compass size={18} />,
                    label: "Compare itineraries",
                  },
                  {
                    icon: <Home size={18} />,
                    label: "Choose the ideal suite",
                  },
                  {
                    icon: <Star size={18} />,
                    label: "Explain fare options",
                  },
                  {
                    icon: <Plane size={18} />,
                    label: "Arrange flights and hotels",
                  },
                  {
                    icon: <MapPinned size={18} />,
                    label: "Coordinate transfers",
                  },
                  {
                    icon: <Sparkles size={18} />,
                    label: "Secure exclusive promotions",
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
                Professional guidance helps ensure you select the Explora voyage
                that best matches your travel style.
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
              Everything travelers need to know about why so many choose to sail
              with Explora Journeys.
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
                  Personalized Luxury Cruise Planning
                </span>
                <h2 className="Asc-help-h2">
                  Begin Your Explora Journey Today
                </h2>
                <div className="Asc-help-accent"></div>
              </div>

              <div className="Asc-help-grid">
                <div className="Asc-help-info">
                  <p className="Asc-help-intro">
                    Explora Journeys has reimagined what a luxury cruise can be.
                    Instead of emphasizing bigger ships and busier schedules, it
                    focuses on what truly matters to discerning travelers:
                    space, comfort, exceptional service, outstanding dining, and
                    meaningful destination experiences.
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
                        From spacious oceanfront suites and world-class wellness
                        facilities to thoughtfully crafted itineraries and
                        personalized hospitality, every aspect of the experience
                        is designed to help guests relax, reconnect, and explore
                        the world in style.
                      </p>
                      <br />
                      <p className="Asc-help-intro">
                        If you're seeking a quieter, more immersive, and truly
                        luxurious way to travel, Explora Journeys is one of the
                        most compelling choices available today.
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
                      "Compare itineraries",
                      "Choose the ideal suite",
                      "Explain fare options",
                      "Arrange flights and hotels",
                      "Coordinate transfers and shore experiences",
                      "Secure exclusive promotions",
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
                      label: "What Makes Explora Journeys Different?",
                      path: "/what-makes-explora-journeys-different",
                    },
                    {
                      label: "Is Explora Journeys Luxury?",
                      path: "/is-explora-journeys-luxury",
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
                      label: "Which Explora Ship Should You Choose?",
                      path: "/which-explora-ship-should-you-choose",
                    },
                    {
                      label: "Which Explora Suite Is Worth the Upgrade?",
                      path: "/which-explora-suite-is-worth-the-upgrade",
                    },
                    {
                      label: "Dining on Explora Journeys",
                      path: "/dining-on-explora-journeys",
                    },
                    {
                      label: "Explora Journeys Wellness Experience",
                      path: "/explora-journeys-wellness-experience",
                    },
                    {
                      label: "Entertainment & Life Onboard Explora Journeys",
                      path: "/entertainment-and-life-onboard-explora-journeys",
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

export default WhyChooseExploraJourneys;
