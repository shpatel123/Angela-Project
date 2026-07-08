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
  BadgePercent,
  Home,
  ShieldCheck,
  HeartPulse,
  CalendarClock,
  Moon,
  Sun,
  Camera,
  Palette,
  Wine,
  MoonStar,
  Shirt,
} from "lucide-react";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela3.jpeg";

import HeroImage1 from "../../assets/ExploraIVGuide/explora-journeys-sky-lounge-outdoor-ocean-view-deck.jpg";
import HeroImage2 from "../../assets/ExploraIVGuide/explora-I-luxury-pool-deck-close-up.jpg";
import HeroImage3 from "../../assets/ExploraIVGuide/explorajourny.jpg";
import ExploraPool from "../../assets/ExploraIVGuide/explora-journeys-luxury-sundeck-ocean-loungers-relaxation.jpg";
import ExploraDining from "../../assets/WhichExploraSuiteWorthUpgrade/explora-luxury-dining.jpg";
import ExploraAtmosphere  from "../../assets/WhichExploraSuiteWorthUpgrade/explora-journeys-oceanfront-infinity-pool-deck.jpg";
import ExploraEnough  from "../../assets/IsExploraGoodForFamilies/Explora-Journeys.webp";
import LuxuryOceanfront from "../../assets/WhichExploraSuiteWorthUpgrade/Regent-Seven-Seas-Cruises.webp";
import LuxuryOnboard from "../../assets/IsExploraGoodForFamilies/explora-I-oceanfront-pool-lounge-deck.jpg";
import LuxuryOceanfront1 from "../../assets/IsExploraGoodForFamilies/explora-journeys-sunrise-pool-deck-luxury-yacht.webp";
import LuxuryNight from "../../assets/ExploraIVGuide/ExploraIIMonacoGP25_byRomainReglade3.webp";
import ExploraShip from "../../assets/ExploraJourneysWorth/Explora-Journeys3.webp";

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
        "https://tripsandships.com/entertainment-life-onboard-explora-journeys/#webpage",
      name: "Entertainment & Life Onboard Explora Journeys",
      url: "https://tripsandships.com/entertainment-life-onboard-explora-journeys",
      description:
        "Discover what life onboard Explora Journeys is really like, from live entertainment and elegant lounges to wellness, dining, enrichment, nightlife, and relaxing days at sea.",
    },
    {
      "@type": "Article",
      "@id":
        "https://tripsandships.com/entertainment-life-onboard-explora-journeys/#article",
      headline:
        "Entertainment & Life Onboard Explora Journeys | What to Expect at Sea",
      description:
        "A complete guide to daily life aboard Explora Journeys, covering live music, evening entertainment, lounges, pool deck life, cultural enrichment, sea days, nightlife, and the dress code.",
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
        "https://tripsandships.com/entertainment-life-onboard-explora-journeys/#breadcrumb",
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
          name: "Entertainment & Life Onboard",
          item: "https://tripsandships.com/entertainment-life-onboard-explora-journeys",
        },
      ],
    },
    {
      "@type": "Service",
      "@id":
        "https://tripsandships.com/entertainment-life-onboard-explora-journeys/#service",
      serviceType: "Luxury Cruise Vacation Planning & Booking Support",
      provider: {
        "@type": "TravelAgency",
        name: "Trips & Ships Luxury Travel",
      },
      areaServed: "Worldwide",
      description:
        "Personalized planning for Explora Journeys sailings, including itinerary guidance, suite selection, dining recommendations, and onboard experience matching.",
    },
    {
      "@type": "Review",
      "@id":
        "https://tripsandships.com/entertainment-life-onboard-explora-journeys/#review",
      itemReviewed: {
        "@type": "Product",
        name: "Explora Journeys Onboard Experience",
      },
      author: {
        "@type": "Person",
        name: "Angela Hughes",
      },
      reviewBody:
        "Explora Journeys offers a relaxed, sophisticated onboard lifestyle built around live music, elegant lounges, wellness, and fine dining rather than nonstop scheduled activities.",
    },
    {
      "@type": "HowTo",
      "@id":
        "https://tripsandships.com/entertainment-life-onboard-explora-journeys/#howto",
      name: "How to Make the Most of Life Onboard Explora Journeys",
      step: [
        { "@type": "HowToStep", name: "Slow Down" },
        { "@type": "HowToStep", name: "Explore the Ship" },
        { "@type": "HowToStep", name: "Attend Live Music" },
        { "@type": "HowToStep", name: "Book the Spa Early" },
        { "@type": "HowToStep", name: "Leave Time for Doing Nothing" },
      ],
    },
    {
      "@type": "ItemList",
      "@id":
        "https://tripsandships.com/entertainment-life-onboard-explora-journeys/#itemlist",
      name: "What This Onboard Life Guide Covers",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "A Different Philosophy of Entertainment",
        },
        { "@type": "ListItem", position: 2, name: "The Atmosphere Onboard" },
        { "@type": "ListItem", position: 3, name: "A Typical Day at Sea" },
        {
          "@type": "ListItem",
          position: 4,
          name: "Live Music & Evening Entertainment",
        },
        { "@type": "ListItem", position: 5, name: "Lounges & Social Spaces" },
        { "@type": "ListItem", position: 6, name: "Pool Deck Life & Wellness" },
        {
          "@type": "ListItem",
          position: 7,
          name: "Culinary Experiences Throughout the Day",
        },
        {
          "@type": "ListItem",
          position: 8,
          name: "Learning & Cultural Enrichment",
        },
        {
          "@type": "ListItem",
          position: 9,
          name: "Nightlife & the Dress Code",
        },
        {
          "@type": "ListItem",
          position: 10,
          name: "Who Will Enjoy Life Onboard",
        },
        {
          "@type": "ListItem",
          position: 11,
          name: "Tips for Making the Most of Life Onboard",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id":
        "https://tripsandships.com/entertainment-life-onboard-explora-journeys/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Does Explora Journeys have Broadway-style shows?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Entertainment focuses on live music, elegant performances, cultural enrichment, and sophisticated evening experiences rather than large theatrical productions.",
          },
        },
        {
          "@type": "Question",
          name: "Is there live music every evening?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Guests can typically enjoy piano performances, jazz, acoustic music, vocalists, and other live entertainment throughout the ship.",
          },
        },
        {
          "@type": "Question",
          name: "Is there nightlife?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, but it is refined rather than high energy. Evenings revolve around lounges, live music, fine dining, and conversation.",
          },
        },
        {
          "@type": "Question",
          name: "Are there activities during sea days?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. Guests can enjoy wellness classes, spa treatments, swimming, enrichment programs, dining, and relaxing throughout the ship.",
          },
        },
        {
          "@type": "Question",
          name: "Is there a casino?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Explora Journeys offers a boutique casino experience on its ships, but it is intentionally understated and complements the ship's relaxed atmosphere rather than dominating the onboard experience.",
          },
        },
        {
          "@type": "Question",
          name: "Is Explora good for couples?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. The peaceful atmosphere, luxurious accommodations, and sophisticated entertainment make it an outstanding choice for couples.",
          },
        },
        {
          "@type": "Question",
          name: "Are there activities for children?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Families are welcome, but Explora focuses more on luxury experiences than extensive children's entertainment.",
          },
        },
        {
          "@type": "Question",
          name: "Is Wi-Fi included?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Wi-Fi is included for guests throughout the voyage.",
          },
        },
        {
          "@type": "Question",
          name: "Will I be bored?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most guests find the opposite to be true. The combination of beautiful surroundings, exceptional dining, wellness, entertainment, and destination-focused travel creates a deeply relaxing and engaging vacation.",
          },
        },
        {
          "@type": "Question",
          name: "What makes life onboard different from other cruise lines?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Explora emphasizes space, tranquility, flexibility, and refined luxury instead of constant activity, making the journey feel more like staying at an exclusive oceanfront resort.",
          },
        },
        {
          "@type": "Question",
          name: "Are there art galleries or art auctions onboard Explora?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Explora Journeys features curated art exhibitions displaying contemporary works from international galleries and local artists, but it does not conduct aggressive art auctions, maintaining a refined gallery environment.",
          },
        },
        {
          "@type": "Question",
          name: "What enrichment lectures or workshops are offered?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The enrichment program includes destination-specific lectures by resident historians, photography workshops, digital storytelling classes, and guest-led discussions on ocean conservation, design, and local cultures.",
          },
        },
        {
          "@type": "Question",
          name: "Is there a library or quiet reading space onboard?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Explora features a beautifully curated library and multiple quiet corner lounges, providing peaceful sanctuaries stocked with a selection of books, design albums, and travel literature.",
          },
        },
        {
          "@type": "Question",
          name: "Do they have theme nights or formal dress nights?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Explora Journeys does not have traditional formal nights or enforced theme nights. The evening dress code is 'Elegant Resort Casual,' encouraging guests to dress stylishly but comfortably for dinner and drinks.",
          },
        },
        {
          "@type": "Question",
          name: "What daytime pool deck entertainment is offered?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The pool decks feature relaxed chill-out music played by resident DJs or acoustic musicians, avoiding loud pool games or disruptive announcements to preserve a calm, beach-club-style atmosphere.",
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
      q: "Does Explora Journeys have Broadway-style shows?",
      a: "No. Entertainment focuses on live music, elegant performances, cultural enrichment, and sophisticated evening experiences rather than large theatrical productions.",
    },
    {
      q: "Is there live music every evening?",
      a: "Yes. Guests can typically enjoy piano performances, jazz, acoustic music, vocalists, and other live entertainment throughout the ship.",
    },
    {
      q: "Is there nightlife?",
      a: "Yes, but it is refined rather than high energy. Evenings revolve around lounges, live music, fine dining, and conversation.",
    },
    {
      q: "Are there activities during sea days?",
      a: "Absolutely. Guests can enjoy wellness classes, spa treatments, swimming, enrichment programs, dining, and relaxing throughout the ship.",
    },
    {
      q: "Is there a casino?",
      a: "Explora Journeys offers a boutique casino experience on its ships, but it is intentionally understated and complements the ship's relaxed atmosphere rather than dominating the onboard experience.",
    },
    {
      q: "Is Explora good for couples?",
      a: "Yes. The peaceful atmosphere, luxurious accommodations, and sophisticated entertainment make it an outstanding choice for couples.",
    },
    {
      q: "Are there activities for children?",
      a: "Families are welcome, but Explora focuses more on luxury experiences than extensive children's entertainment.",
    },
    {
      q: "Is Wi-Fi included?",
      a: "Yes. Wi-Fi is included for guests throughout the voyage.",
    },
    {
      q: "Will I be bored?",
      a: "Most guests find the opposite to be true. The combination of beautiful surroundings, exceptional dining, wellness, entertainment, and destination-focused travel creates a deeply relaxing and engaging vacation.",
    },
    {
      q: "What makes life onboard different from other cruise lines?",
      a: "Explora emphasizes space, tranquility, flexibility, and refined luxury instead of constant activity, making the journey feel more like staying at an exclusive oceanfront resort.",
    },
    {
      q: "Are there art galleries or art auctions onboard Explora?",
      a: "Explora Journeys features curated art exhibitions displaying contemporary works from international galleries and local artists, but it does not conduct aggressive art auctions, maintaining a refined gallery environment.",
    },
    {
      q: "What enrichment lectures or workshops are offered?",
      a: "The enrichment program includes destination-specific lectures by resident historians, photography workshops, digital storytelling classes, and guest-led discussions on ocean conservation, design, and local cultures.",
    },
    {
      q: "Is there a library or quiet reading space onboard?",
      a: "Yes. Explora features a beautifully curated library and multiple quiet corner lounges, providing peaceful sanctuaries stocked with a selection of books, design albums, and travel literature.",
    },
    {
      q: "Do they have theme nights or formal dress nights?",
      a: "Explora Journeys does not have traditional formal nights or enforced theme nights. The evening dress code is 'Elegant Resort Casual,' encouraging guests to dress stylishly but comfortably for dinner and drinks.",
    },
    {
      q: "What daytime pool deck entertainment is offered?",
      a: "The pool decks feature relaxed chill-out music played by resident DJs or acoustic musicians, avoiding loud pool games or disruptive announcements to preserve a calm, beach-club-style atmosphere.",
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
const EntertainmentLifeOnboardExploraJourneys = () => {
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
          Entertainment & Life Onboard Explora Journeys | What to Expect at Sea
        </title>
        <meta
          name="title"
          content="Entertainment & Life Onboard Explora Journeys"
        />
        <meta
          name="description"
          content="Discover what life onboard Explora Journeys is really like, from live entertainment and elegant lounges to wellness, dining, enrichment, nightlife, and relaxing days at sea."
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
          <h1>Entertainment &amp; Life Onboard Explora Journeys</h1>

          <p>
            Explora Journeys was created for travelers who value relaxed luxury
            over nonstop activity. Rather than filling every hour with
            announcements, games, and large-scale productions, the onboard
            experience is designed to give guests the freedom to spend their
            time exactly as they choose.
          </p>

          <p>
            Whether that's enjoying live music with a handcrafted cocktail,
            relaxing beside an infinity pool, attending a wellness class, or
            watching the sunset from your private terrace, every day aboard
            Explora Journeys feels unhurried and sophisticated.
          </p>

          {readMore && (
            <p>
              If you're wondering what life onboard is really like, this guide
              explores everything from daytime activities and evening
              entertainment to sea days, social spaces, and the atmosphere that
              makes Explora different from traditional cruise lines.
            </p>
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

      {/* ── A DIFFERENT PHILOSOPHY OF ENTERTAINMENT ─────────────────── */}
      <section
        className="ugt-components-section"
        id="different-philosophy-entertainment"
        style={{ backgroundColor: "var(--bg-white)" }}
      >
        <div className="ugt-components-container">
          <div className="ugt-components-header">
            <h2 className="ugt-components-title">
              A Different Philosophy of Entertainment
            </h2>
            <div className="adg-c-accent-line"></div>
          </div>

          <div className="ugt-components-list">
            <div className="ugt-component-row">
              <div className="ugt-component-image-wrapper">
                <div className="ugt-component-image-container">
                  <img
                    src={ExploraPool}
                    alt="Elegant outdoor lounge deck aboard Explora Journeys"
                    className="ugt-component-image"
                  />
                </div>
              </div>

              <div className="ugt-component-content">
                <p className="ugt-component-text">
                  Unlike mainstream cruise ships that focus on packed schedules
                  and large theatrical productions,
                  <strong> Explora Journeys</strong> offers a more refined
                  approach, where entertainment enhances the journey rather than
                  dominating it.
                </p>

                <div className="ugt-questions-box">
                  <span className="ugt-questions-title">
                    The onboard philosophy centers around:
                  </span>

                  <ul className="ugt-questions-list">
                    {[
                      "Relaxation",
                      "Personal choice",
                      "Cultural enrichment",
                      "Live performances",
                      "Wellness",
                      "Fine dining",
                      "Meaningful social experiences",
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
                  Entertainment enhances the journey rather than dominating it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── A TYPICAL DAY AT SEA ───────────────────────────────────── */}
      <section className="adg-section" id="adg-typical-day-at-sea">
        <div className="adg-container">
          {/* Header */}
          <div className="adg-header">
            <h2 className="adg-h2">A Typical Day at Sea</h2>

            <div className="adg-accent-line"></div>

            <p className="adg-intro">
              Every traveler creates their own perfect schedule aboard Explora
              Journeys. Whether you prefer relaxation, wellness, fine dining, or
              simply enjoying the ocean, each sea day is entirely your own.
            </p>
          </div>

          {/* Three Column Grid */}
          <div
            className="adgs-grid"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            }}
          >
            {/* Morning */}
            <div className="adg-card gold">
              <div className="adg-card-body">
                <h3 className="adg-card-title">Morning</h3>

                <ul className="adg-card-list">
                  {[
                    "Coffee on your private terrace",
                    "Breakfast overlooking the ocean",
                    "Yoga or stretching class",
                    "Walk around the outdoor decks",
                  ].map((item, idx) => (
                    <li key={idx} className="adg-card-list-item">
                      <span className="adg-card-list-dot"></span>
                      <span className="adg-card-list-text">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="adg-card-bar"></div>
            </div>

            {/* Afternoon */}
            <div className="adg-card navy">
              <div className="adg-card-body">
                <h3 className="adg-card-title">Afternoon</h3>

                <ul className="adg-card-list">
                  {[
                    "Lunch by the pool",
                    "Spa treatment",
                    "Reading in a quiet lounge",
                    "Swimming or relaxing by the infinity pool",
                    "Exploring the ship's art and public spaces",
                  ].map((item, idx) => (
                    <li key={idx} className="adg-card-list-item">
                      <span className="adg-card-list-dot"></span>
                      <span className="adg-card-list-text">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="adg-card-bar"></div>
            </div>

            {/* Evening */}
            <div className="adg-card teal">
              <div className="adg-card-body">
                <h3 className="adg-card-title">Evening</h3>

                <ul className="adg-card-list">
                  {[
                    "Sunset cocktails",
                    "Gourmet dinner",
                    "Live music",
                    "Conversation in an elegant lounge",
                    "Late-night dessert or nightcap",
                  ].map((item, idx) => (
                    <li key={idx} className="adg-card-list-item">
                      <span className="adg-card-list-dot"></span>
                      <span className="adg-card-list-text">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="adg-card-bar"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE ATMOSPHERE ONBOARD ───────────────────────────────────── */}
      <section
        className="adg-c-section adg-c-bg-white"
        id="the-atmosphere-onboard"
      >
        <div className="adg-c-container">
          <div className="adg-c-section-header">
            <h2 className="adg-c-h2">The Atmosphere Onboard</h2>

            <div className="adg-c-accent-line"></div>

            <p className="Asc-section-intro">
              One of the first things guests notice aboard Explora Journeys is
              how peaceful the ship feels. Every space is thoughtfully designed
              to create a calm, sophisticated environment where guests can truly
              relax and reconnect with the ocean.
            </p>
          </div>

          <div className="adg-c-overview-layout">
            {/* Left Side */}
            <div className="adg-c-overview-icons">
              {[
                "No crowded atriums",
                "Very few public announcements",
                "Spacious lounges",
                "Comfortable seating throughout the ship",
                "Quiet outdoor areas",
                "Plenty of places to unwind",
              ].map((label, i) => (
                <div key={i} className="adg-c-overview-item">
                  <span className="adg-c-overview-icon">
                    <Sparkles size={16} strokeWidth={2.5} />
                  </span>

                  <span className="adg-c-overview-label">{label}</span>
                </div>
              ))}
            </div>

            {/* Right Side */}
            <div className="adg-c-overview-right">
              <div className="adg-c-overview-callout">
                <div className="adg-c-overview-callout-inner">
                  <Star size={28} className="adg-c-callout-star" />

                  <p className="adg-c-callout-text">
                    Rather than constant stimulation, Explora Journeys creates a
                    peaceful atmosphere that encourages guests to slow down,
                    unwind, and fully enjoy every moment at sea.
                  </p>
                </div>
              </div>

              <div className="adg-c-overview-image-wrap">
                <img
                  src={ExploraAtmosphere}
                  alt="Peaceful lounge aboard Explora Journeys"
                  className="adg-c-overview-img"
                />

                <div className="adg-c-overview-img-overlay">
                  <span className="adg-c-overview-img-label">
                    Peaceful • Spacious • Refined
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LIVE MUSIC & ELEGANT EVENING ENTERTAINMENT */}
      <section
        className="azs-entertainment-section"
        id="live-music-evening-entertainment"
      >
        <div className="azs-container">
          <div className="azs-section-header">
            <h2 className="azs-section-title">
              Live Music Throughout the Ship & Elegant Evening Entertainment
            </h2>

            <div className="azs-section-accent"></div>

            <p className="azs-section-subtitle">
              Evenings aboard Explora Journeys are centered around sophisticated
              entertainment, live music, and relaxed social spaces rather than
              large-scale productions or high-energy nightlife.
            </p>
          </div>

          <div className="azs-entertainment-grid">
            {/* Live Music */}
            <div className="azs-entertainment-card azs-azamara-ent">
              <div className="azs-ent-header">
                <div className="azs-ent-icon-circle">
                  <Music size={24} className="azs-ent-icon" />
                </div>

                <h3 className="azs-ent-title">
                  Live Music Throughout the Ship
                </h3>
              </div>

              <p className="azs-ent-intro">
                Music plays an important role in creating Explora Journeys'
                peaceful and refined atmosphere throughout the day and evening.
              </p>

              <div className="azs-ent-body">
                <h4 className="azs-ent-group-title">Guests May Enjoy:</h4>

                <ul className="azs-ent-list">
                  {[
                    "Solo pianists",
                    "Jazz ensembles",
                    "Acoustic performances",
                    "Classical musicians",
                    "Contemporary vocalists",
                    "Instrumental performances",
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
                    Rather than dominating the environment, music complements
                    the elegant surroundings and relaxed atmosphere.
                  </p>
                </div>
              </div>
            </div>

            {/* Evening Entertainment */}
            <div className="azs-entertainment-card azs-seabourn-ent">
              <div className="azs-ent-header">
                <div className="azs-ent-icon-circle">
                  <MoonStar size={24} className="azs-ent-icon" />
                </div>

                <h3 className="azs-ent-title">Elegant Evening Entertainment</h3>
              </div>

              <p className="azs-ent-intro">
                Evenings aboard Explora Journeys are sophisticated, relaxed, and
                designed for meaningful moments rather than nonstop activity.
              </p>

              <div className="azs-ent-body">
                <h4 className="azs-ent-group-title">
                  Guests Often Spend Their Nights:
                </h4>

                <ul className="azs-ent-list">
                  {[
                    "Enjoying live performances",
                    "Sharing wine with friends",
                    "Listening to piano music",
                    "Watching the sunset",
                    "Exploring cocktail lounges",
                    "Relaxing on deck beneath the stars",
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
                    The atmosphere feels more like an upscale luxury hotel than
                    a traditional cruise ship.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── LOUNGES & SOCIAL SPACES ──────────────────────────────────── */}
      <section className="dmg-info-section" id="lounges-social-spaces">
        <div className="dmg-info-container">
          <div className="dmg-info-header">
            <h2 className="dmg-info-title">Lounges &amp; Social Spaces</h2>
            <div className="dmg-info-accent"></div>
          </div>

          <div className="dmg-info-grid">
            <div className="dmg-info-content">
              <p className="dmg-info-lead">
                Explora Journeys features numerous beautifully designed lounges
                throughout the ship. Because the ship carries fewer guests than
                many large cruise ships, these venues rarely feel crowded.
              </p>

              <div className="dmg-info-features dmg-info-features-scrollable">
                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">Morning Coffee</h3>
                    <p className="dmg-info-feature-desc">
                      Quiet lounges perfect for an unhurried start to the day.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">Afternoon Tea</h3>
                    <p className="dmg-info-feature-desc">
                      Relaxed social spaces ideal for an afternoon pause or
                      reading session.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Meeting Fellow Travelers
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Comfortable settings that make it easy to strike up
                      conversation.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Evening Cocktails &amp; Quiet Conversation
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Elegant lounges designed for winding down at the close of
                      the day.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="dmg-info-media">
              <div className="dmg-media-wrapper">
                <img
                  src={LuxuryOceanfront}
                  alt="Elegant lounge and social space aboard Explora Journeys"
                  className="dmg-media-img"
                  style={{ height: "610px" }}
                />
                <div className="dmg-media-overlay"></div>

                <div className="dmg-media-badge">
                  <span>Elegant Lounges • Rarely Crowded</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── POOL DECK LIFE & WELLNESS AS PART OF DAILY LIFE ─────────── */}
      <section className="adg-c-section adg-c-bg-soft" id="pool-deck-wellness">
        <div className="adg-c-container">
          <div className="adg-c-section-header">
            <span className="adg-c-eyebrow">Daily Rhythm</span>

            <h2 className="adg-c-h2">Pool Deck Life &amp; Wellness</h2>

            <div className="adg-c-accent-line"></div>

            <p className="Asc-section-intro">
              Wellness isn't a separate activity—it becomes part of everyday
              life onboard, and the pool areas are among the most popular places
              to enjoy it.
            </p>
          </div>

          <div className="adg-c-venues-grid1">
            {/* Pool Deck Life */}
            <div className="adg-c-venue-card adg-c-venue-1">
              <div className="adg-c-venue-top">
                <span className="adg-c-venue-eyebrow">Pool Deck Life</span>

                <h3 className="adg-c-venue-name">Calm, Not Crowded</h3>

                <p className="adg-c-venue-highlight">
                  Infinity Pools &amp; Ocean Views
                </p>
              </div>

              <ul className="adg-c-venue-list">
                {[
                  "Infinity pools",
                  "Comfortable loungers",
                  "Poolside dining",
                  "Ocean views",
                  "Quiet relaxation",
                  "Refreshing cocktails",
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
                  Rather than hosting loud pool parties, these spaces maintain
                  the ship's calm and luxurious atmosphere.
                </p>
              </div>
            </div>

            {/* Wellness as Part of Daily Life */}
            <div className="adg-c-venue-card adg-c-venue-2">
              <div className="adg-c-venue-top">
                <span className="adg-c-venue-eyebrow">
                  Wellness as Part of Daily Life
                </span>

                <h3 className="adg-c-venue-name">Woven Into Every Day</h3>

                <p className="adg-c-venue-highlight">
                  Body &amp; Mind, Together
                </p>
              </div>

              <ul className="adg-c-venue-list">
                {[
                  "Fitness classes",
                  "Spa treatments",
                  "Meditation",
                  "Swimming",
                  "Healthy dining",
                  "Quiet relaxation",
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
                  The slower pace encourages both physical and mental
                  well-being.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NIGHTLIFE ON EXPLORA JOURNEYS */}
      <section className="azs-dining-section" id="azs-nightlife">
        <div className="azs-container">
          <div className="azs-section-header">
            <h2 className="azs-section-title">Nightlife on Explora Journeys</h2>

            <div className="azs-section-accent"></div>

            <p className="azs-section-subtitle">
              Evenings aboard Explora Journeys are sophisticated, relaxed, and
              designed for travelers who appreciate refined experiences over
              high-energy entertainment.
            </p>
          </div>

          <div className="azs-dining-grid">
            {/* Nightlife */}
            <div className="azs-dining-card azs-seabourn-dining">
              <div className="azs-dining-image-wrap">
                <img
                  src={LuxuryNight}
                  alt="Elegant nightlife aboard Explora Journeys"
                  className="azs-dining-img"
                />

                <div className="azs-dining-badge-wrapper">
                  <span className="azs-dining-badge azs-seabourn-badge">
                    Sophisticated Evenings
                  </span>
                </div>
              </div>

              <div className="azs-dining-content">
                <div className="azs-dining-header">
                  <div className="azs-dining-icon-circle">
                    <Wine size={24} className="azs-dining-icon" />
                  </div>

                  <h3 className="azs-dining-title">Elegant Nightlife</h3>
                </div>

                <p className="azs-dining-intro">
                  Instead of casinos, loud dance clubs, or large productions,
                  evenings revolve around intimate spaces and meaningful
                  moments.
                </p>

                <div className="azs-dining-body">
                  <h4 className="azs-dining-group-title">Guests Can Enjoy:</h4>

                  <ul className="azs-dining-list">
                    {[
                      "Live music",
                      "Cocktail lounges",
                      "Wine bars",
                      "Piano performances",
                      "Fine dining",
                      "Stargazing on deck",
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
                      Guests looking for sophisticated evenings generally
                      appreciate Explora's elegant, unhurried approach.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Dress Code */}
            <div className="azs-dining-card azs-azamara-dining">
              <div className="azs-dining-image-wrap">
                <img
                  src={LuxuryOceanfront1}
                  alt="Stylish dress code aboard Explora Journeys"
                  className="azs-dining-img"
                />

                <div className="azs-dining-badge-wrapper">
                  <span className="azs-dining-badge azs-azamara-badge">
                    Effortless Style
                  </span>
                </div>
              </div>

              <div className="azs-dining-content">
                <div className="azs-dining-header">
                  <div className="azs-dining-icon-circle">
                    <Shirt size={24} className="azs-dining-icon" />
                  </div>

                  <h3 className="azs-dining-title">The Dress Code</h3>
                </div>

                <p className="azs-dining-intro">
                  The onboard atmosphere is stylish yet relaxed, allowing guests
                  to dress comfortably while maintaining an elegant resort feel.
                </p>

                <div className="azs-dining-body">
                  <h4 className="azs-dining-group-title">
                    Typical Attire Includes:
                  </h4>

                  <ul className="azs-dining-list">
                    {[
                      "Resort casual by day",
                      "Linen shirts & sundresses",
                      "Smart shorts & comfortable footwear",
                      "Smart casual evenings",
                      "Collared shirts & dresses",
                      "Jackets optional",
                      "Elegant resort wear",
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
                      Formal nights are not a defining part of the Explora
                      experience, making it easy to feel comfortable while still
                      looking polished.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CULINARY EXPERIENCES THROUGHOUT THE DAY ─────────────────── */}
      <section className="adg-section" id="culinary-experiences">
        <div className="adg-container">
          <div className="adg-section-header" style={{ marginBottom: "60px" }}>
            <h2 className="adg-h2">Culinary Experiences Throughout the Day</h2>
            <div className="adg-accent-line"></div>

            <p
              className="Asc-body-text"
              style={{ textAlign: "center", marginTop: "15px" }}
            >
              Dining naturally becomes one of the highlights of life onboard,
              shaping the rhythm of each day.
            </p>
          </div>

          <div className="adg-split-layout">
            <div className="adg-content-card-side">
              <img
                src={ExploraDining}
                alt="Culinary experiences throughout the day aboard Explora Journeys"
                className="adg-side-image"
                style={{ height: "35vh" }}
              />

              <div className="adg-info-card">
                <div className="adg-card-meta">
                  <Utensils size={28} />
                  <span className="adg-meta-label">
                    Food &amp; Beverage, All Day Long
                  </span>
                </div>

                <p className="adg-card-lead">
                  Whether it's a quiet breakfast on your terrace or a
                  multi-course dinner, food and beverage experiences shape the
                  rhythm of each day.
                </p>
              </div>
            </div>

            <div className="adg-list-side">
              {[
                "Breakfast on your terrace",
                "Long lunches by the pool",
                "Afternoon espresso and pastries",
                "Multi-course dinners",
                "Specialty dining",
                "Evening cocktails",
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

      {/* ── LEARNING & CULTURAL ENRICHMENT + SEA DAYS ───────────────── */}
      <section
        className="Ejvs-pricing-section"
        id="enrichment-sea-days"
        style={{ backgroundColor: "var(--bg-white)" }}
      >
        <div className="Ejvs-container">
          <div className="Ejvs-section-header">
            <h2 className="Ejvs-section-title">
              Learning, Enrichment <br /> &amp; Sea Days
            </h2>
            <div className="Asc-accent-line"></div>
            <p className="Ejvs-section-subtitle">
              Many travelers worry they'll become bored during sea days—on
              Explora Journeys, sea days are often guests' favorite part of the
              cruise.
            </p>
          </div>

          <div className="Ejvs-pricing-grid">
            {/* Learning & Cultural Enrichment */}
            <div className="Ejvs-pricing-card Ejvs-explora-card">
              <div className="Ejvs-card-header">
                <div className="Ejvs-card-icon-wrap">
                  <Palette size={24} className="Ejvs-card-icon" />
                </div>

                <h3 className="Ejvs-card-title">
                  Learning &amp; Cultural Enrichment
                </h3>
              </div>

              <p className="Ejvs-card-intro">
                Depending on the itinerary, guests may enjoy programs that
                provide a deeper connection to the places you'll visit.
              </p>

              <ul className="Ejvs-feature-list">
                {[
                  "Guest speakers",
                  "Destination presentations",
                  "Cultural lectures",
                  "Culinary demonstrations",
                  "Art experiences",
                  "Local insights",
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
                  These enrichment programs provide a deeper connection to the
                  places you'll visit.
                </p>
              </div>
            </div>

            {/* Sea Days */}
            <div className="Ejvs-pricing-card Ejvs-seabourn-card">
              <div className="Ejvs-card-header">
                <div className="Ejvs-card-icon-wrap">
                  <Camera size={24} className="Ejvs-card-icon" />
                </div>

                <h3 className="Ejvs-card-title">
                  Sea Days You'll Look Forward To
                </h3>
              </div>

              <p className="Ejvs-card-intro">
                With no pressure to constantly stay busy, you can simply enjoy
                the moment.
              </p>

              <ul className="Ejvs-feature-list">
                {[
                  "Ocean views",
                  "Reading",
                  "Spa treatments",
                  "Fine dining",
                  "Photography",
                  "Watching the horizon",
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
                  Sea days become an opportunity to truly disconnect from
                  everyday life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── IS THERE ENOUGH TO DO? ───────────────────────────────────── */}
      <section
        className="ugt-components-section"
        id="is-there-enough-to-do"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="ugt-components-container">
          <div className="ugt-components-header">
            <h2 className="ugt-components-title">Is There Enough to Do?</h2>
            <div className="adg-c-accent-line"></div>
          </div>

          <div className="ugt-components-list">
            <div className="ugt-component-row">
              <div className="ugt-component-image-wrapper">
                <div className="ugt-component-image-container">
                  <img
                    src={ExploraEnough}
                    alt="Guest enjoying a relaxed evening aboard Explora Journeys"
                    className="ugt-component-image"
                  />
                </div>
              </div>

              <div className="ugt-component-content">
                <p className="ugt-component-text">
                  Absolutely—but the experience is intentionally different.
                  Rather than offering dozens of scheduled activities every
                  hour, Explora provides an experience many luxury travelers
                  find more rewarding than packed daily schedules.
                </p>

                <div className="ugt-questions-box">
                  <span className="ugt-questions-title">Guests can enjoy:</span>

                  <ul className="ugt-questions-list">
                    {[
                      "Beautiful surroundings",
                      "Exceptional dining",
                      "Live entertainment",
                      "Wellness experiences",
                      "Relaxation",
                      "Cultural enrichment",
                      "Meaningful conversations",
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
                  Luxury travelers often find this more rewarding than packed
                  daily schedules.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHO WILL ENJOY LIFE ONBOARD ──────────────────────────────── */}
      <section className="afc-section afc-bg-white" id="afc-who-will-enjoy">
        <div className="afc-container">
          <div className="afc-section-header">
            <h2 className="afc-h2">Who Will Enjoy Life Onboard?</h2>
            <div className="afc-accent-line"></div>
          </div>

          <div className="afc-split-layout">
            <div className="afc-content-side">
              <div className="afc-insight-card">
                <p className="afc-lead-text">
                  <strong>
                    Explora Journeys is an excellent fit for travelers who
                    enjoy:
                  </strong>
                </p>

                <div className="afc-why-box">
                  <span className="afc-why-title">Perfect For</span>

                  <p className="afc-why-text">
                    Boutique luxury hotels, fine dining, live music, quiet
                    elegance, spa experiences, wellness, ocean views, and
                    relaxed luxury.
                  </p>
                </div>
              </div>

              <div className="afc-recommendations-wrapper">
                <h3 className="afc-sub-title">
                  Travelers Will Love Life Onboard For:
                </h3>

                <div className="afc-rec-grid">
                  {[
                    "Boutique luxury hotels",
                    "Fine dining",
                    "Live music",
                    "Quiet elegance",
                    "Spa experiences",
                    "Wellness",
                    "Ocean views",
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
                  src={LuxuryOnboard}
                  alt="Couple enjoying life onboard Explora Journeys"
                  className="afc-showcase-image"
                />
              </div>

              <div className="afc-strategy-box" style={{ height: "250px" }}>
                <p className="afc-strategy-lead">
                  It is particularly popular with:
                </p>

                <div className="afc-strategy-tags">
                  {[
                    "Couples",
                    "Solo travelers",
                    "Empty nesters",
                    "Retirees",
                    "Luxury travelers",
                    "Food & wine enthusiasts",
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
                Explora May Not Be the Best Fit for Travelers Seeking:
              </h3>

              <ul className="Asc-who-list">
                {[
                  "Water slides",
                  "Theme park attractions",
                  "Broadway productions",
                  "Character entertainment",
                  "Large casinos",
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
              margin: "32px auto 0",
              textAlign: "center",
            }}
          >
            Families with young children or travelers looking for nonstop
            entertainment may prefer a mainstream cruise line, while those
            seeking a relaxed, sophisticated onboard lifestyle will feel right
            at home aboard Explora Journeys.
          </p>
        </div>
      </section>

      {/* ── TIPS FOR MAKING THE MOST OF LIFE ONBOARD ────────────────── */}
      <section className="ugt-advantage-section" id="tips-life-onboard">
        <div className="ugt-advantage-container">
          <div className="ugt-advantage-header">
            <span className="ugt-advantage-eyebrow">Make It Yours</span>

            <h2 className="ugt-advantage-title">
              Tips for Making the Most of Life Onboard
            </h2>

            <div className="Asc-accent-line"></div>

            <p className="ugt-advantage-intro">
              A few simple habits can help you get the most from your days and
              evenings aboard Explora Journeys.
            </p>
          </div>

          <div className="ugt-advantage-grid">
            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <Moon size={28} strokeWidth={1.5} />
              </div>

              <h4 className="ugt-card-title">Slow Down</h4>

              <p className="ugt-card-desc">Don't try to schedule every hour.</p>
            </div>

            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <Compass size={28} strokeWidth={1.5} />
              </div>

              <h4 className="ugt-card-title">Explore the Ship</h4>

              <p className="ugt-card-desc">
                Spend time discovering different lounges, observation areas, and
                outdoor spaces.
              </p>
            </div>

            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <Music size={28} strokeWidth={1.5} />
              </div>

              <h4 className="ugt-card-title">Attend Live Music</h4>

              <p className="ugt-card-desc">
                Even if you don't normally seek out performances, the intimate
                concerts onboard are worth experiencing.
              </p>
            </div>

            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <CalendarClock size={28} strokeWidth={1.5} />
              </div>

              <h4 className="ugt-card-title">Book the Spa Early</h4>

              <p className="ugt-card-desc">
                Sea-day appointments are especially popular.
              </p>
            </div>

            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <Sun size={28} strokeWidth={1.5} />
              </div>

              <h4 className="ugt-card-title">Leave Time for Doing Nothing</h4>

              <p className="ugt-card-desc">
                Some of the most memorable moments happen while simply watching
                the ocean from your terrace.
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
                Match Your Itinerary to Your Ideal Onboard Experience
              </h3>

              <p className="Avr-planning-left-body">
                A travel advisor can help you choose the Explora itinerary that
                best matches your preferred onboard experience, ensuring every
                detail is thoughtfully planned.
              </p>

              <div className="Avr-planning-alert">
                <ShieldCheck size={18} className="Avr-planning-alert-icon" />

                <p className="Avr-planning-alert-text">
                  Expert guidance helps create a seamless luxury vacation from
                  beginning to end.
                </p>
              </div>
            </div>

            {/* RIGHT PANEL */}
            <div className="Avr-planning-right">
              <p className="Avr-planning-right-intro">
                A knowledgeable travel advisor can also assist with:
              </p>

              <div className="Avr-planning-benefits-grid">
                {[
                  {
                    icon: <Home size={18} />,
                    label: "Suite selection",
                  },
                  {
                    icon: <Utensils size={18} />,
                    label: "Dining recommendations",
                  },
                  {
                    icon: <HeartPulse size={18} />,
                    label: "Spa planning",
                  },
                  {
                    icon: <MapPinned size={18} />,
                    label: "Shore excursions",
                  },
                  {
                    icon: <Plane size={18} />,
                    label: "Hotels and flights",
                  },
                  {
                    icon: <Sparkles size={18} />,
                    label: "Special celebrations",
                  },
                  {
                    icon: <BadgePercent size={18} />,
                    label: "Exclusive promotions",
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
                Expert guidance helps create a seamless luxury vacation from
                beginning to end.
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
              Everything travelers need to know about entertainment and life
              onboard Explora Journeys.
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
                <h2 className="Asc-help-h2">Ready to Experience the Onboard Lifestyle?</h2>
                <div className="Asc-help-accent"></div>
              </div>

              <div className="Asc-help-grid">
                <div className="Asc-help-info">
                  <p className="Asc-help-intro">
                    Life aboard Explora Journeys is about enjoying the luxury of
                    time. Instead of rushing between scheduled activities,
                    guests are encouraged to embrace a slower pace where
                    exceptional dining, live music, wellness, ocean views, and
                    meaningful conversations become the highlights of each day.
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
                        From peaceful mornings on your private terrace to
                        elegant evenings filled with live music and fine
                        cuisine, every moment reflects Explora's vision of
                        contemporary luxury at sea.
                      </p>
                      <br />
                      <p className="Asc-help-intro">
                        If you're looking for a cruise that values relaxation,
                        sophistication, and unforgettable experiences over
                        crowds and constant entertainment, Explora Journeys
                        offers one of the most rewarding onboard lifestyles in
                        luxury cruising.
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
                      "Determine which Explora itinerary matches your onboard preferences",
                      "Recommend the ideal sailing",
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
                      label: "What Makes Explora Journeys Different?",
                      path: "/what-makes-explora-journeys-different",
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
                      label: "Explora Journeys Wellness Experience",
                      path: "/explora-journeys-wellness-experience",
                    },
                    {
                      label: "What Is Included on Explora Journeys?",
                      path: "/what-is-included-on-explora-journeys",
                    },
                    {
                      label: "Who Should Sail Explora Journeys?",
                      path: "/who-should-sail-explora-journeys",
                    },
                    {
                      label: "Planning Your First Explora Journey",
                      path: "/planning-your-first-explora-journey",
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

export default EntertainmentLifeOnboardExploraJourneys;
