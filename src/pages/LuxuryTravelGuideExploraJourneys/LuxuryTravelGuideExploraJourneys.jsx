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
  MapPinned,
  BadgePercent,
  Home,
  ShieldCheck,
  CalendarClock,
  Sun,
  Shirt,
  DollarSign,
  Anchor,
  Waves,
  HeartHandshake,
  Rocket,
  Globe,
  Info,
} from "lucide-react";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela.jpeg";

import HeroImage1 from "../../assets/ExploraIVGuide/explora-journeys-sky-lounge-outdoor-ocean-view-deck.jpg";
import HeroImage2 from "../../assets/ExploraIVGuide/explora-I-luxury-pool-deck-close-up.JPG";
import HeroImage3 from "../../assets/ExploraIVGuide/explorajourny.jpg";
import ExploraPool from "../../assets/ExploraIVGuide/explora-journeys-luxury-sundeck-ocean-loungers-relaxation.jpg";
import ExploraDining from "../../assets/WhichExploraSuiteWorthUpgrade/explora-luxury-dining.jpg";
import ExploraAtmosphere from "../../assets/WhichExploraSuiteWorthUpgrade/explora-journeys-oceanfront-infinity-pool-deck.jpg";
import LuxuryOceanfront from "../../assets/WhichExploraSuiteWorthUpgrade/Regent-Seven-Seas-Cruises.webp";
import ExploraShip from "../../assets/ExploraJourneysWorth/Explora-Journeys3.webp";
import ExploraSpa from "../../assets/HowAdvanceShouldBookExplora/explora-journeys-luxury-ocean-wellness-spa-relaxation-room.jpg";
import ExploraDestination from "../../assets/HowAdvanceShouldBookExplora/allinn-estonia-old-town-summer-travel-aerial.jpg";
import ExploraSuiteImage from "../../assets/IsExploraGoodForFamilies/explora-journeys-retreat-residence-luxury-suite-living-room.webp";
import ExploraLifeOnboard from "../../assets/CaribbeanCruisesExploraJourneys/WellnessSea.jpg";
import ExploraSantorini from "../../assets/GreeceGreekIslesCruisesExploraJourneys/Santorini.jpg";

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
        "https://tripsandships.com/luxury-travel-guide-explora-journeys/#webpage",
      name: "Luxury Travel Guide to Explora Journeys",
      url: "https://tripsandships.com/luxury-travel-guide-explora-journeys",
      description:
        "Discover the ultimate luxury travel guide to Explora Journeys. Learn about ships, suites, destinations, dining, wellness, itineraries, pricing, booking tips, and expert advice for planning your perfect luxury cruise.",
    },
    {   
      "@type": "Article",
      "@id":
        "https://tripsandships.com/luxury-travel-guide-explora-journeys/#article",
      headline: "Luxury Travel Guide to Explora Journeys",
      description:
        "A complete guide to planning a luxury Explora Journeys cruise, covering the fleet, suites, destinations, dining, wellness, itineraries, pricing, and expert booking tips.",
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
      "@type": "TravelAgency",
      "@id":
        "https://tripsandships.com/luxury-travel-guide-explora-journeys/#travelguide",
      name: "Trips & Ships Luxury Travel",
      description:
        "Complete planning guide to Explora Journeys, the luxury lifestyle cruise brand of the MSC Group.",
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://tripsandships.com/luxury-travel-guide-explora-journeys/#breadcrumb",
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
          name: "Luxury Travel Guide to Explora Journeys",
          item: "https://tripsandships.com/luxury-travel-guide-explora-journeys",
        },
      ],
    },
    {
      "@type": "Service",
      "@id":
        "https://tripsandships.com/luxury-travel-guide-explora-journeys/#service",
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
      "@type": "TouristTrip",
      "@id":
        "https://tripsandships.com/luxury-travel-guide-explora-journeys/#touristtrip",
      name: "Explora Journeys Luxury Cruise",
      touristType: "Luxury travelers, couples, and experienced cruisers",
      provider: {
        "@type": "TravelAgency",
        name: "Trips & Ships Luxury Travel",
      },
    },
    {
      "@type": "ItemList",
      "@id":
        "https://tripsandships.com/luxury-travel-guide-explora-journeys/#itemlist",
      name: "What This Luxury Travel Guide Covers",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "What Is Explora Journeys?" },
        {
          "@type": "ListItem",
          position: 2,
          name: "Why Travelers Choose Explora Journeys",
        },
        { "@type": "ListItem", position: 3, name: "The Explora Fleet" },
        {
          "@type": "ListItem",
          position: 4,
          name: "Luxury Suites Designed for Space",
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Extraordinary Destinations",
        },
        {
          "@type": "ListItem",
          position: 6,
          name: "Dining That Rivals Luxury Resorts",
        },
        { "@type": "ListItem", position: 7, name: "Wellness at Sea" },
        { "@type": "ListItem", position: 8, name: "Life Onboard" },
        {
          "@type": "ListItem",
          position: 9,
          name: "Choosing the Right Itinerary",
        },
        { "@type": "ListItem", position: 10, name: "What Is Included?" },
        {
          "@type": "ListItem",
          position: 11,
          name: "How Much Does an Explora Cruise Cost?",
        },
        {
          "@type": "ListItem",
          position: 12,
          name: "Tips for First-Time Guests",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id":
        "https://tripsandships.com/luxury-travel-guide-explora-journeys/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Is Explora Journeys considered a luxury cruise line?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Explora Journeys is positioned in the luxury cruise market, offering spacious suites, premium dining, personalized service, and destination-focused itineraries.",
          },
        },
        {
          "@type": "Question",
          name: "Are all accommodations suites?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Every guest enjoys an oceanfront suite with a private terrace.",
          },
        },
        {
          "@type": "Question",
          name: "Where does Explora Journeys sail?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Explora sails throughout the Mediterranean, Caribbean, Alaska, Northern Europe, Iceland & Greenland, Japan, Asia, and on select transoceanic voyages.",
          },
        },
        {
          "@type": "Question",
          name: "Is dining included?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Multiple gourmet dining venues are included, along with many beverages and in-suite dining options.",
          },
        },
        {
          "@type": "Question",
          name: "Does Explora have formal nights?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. The dress code is elegant and relaxed rather than traditionally formal.",
          },
        },
        {
          "@type": "Question",
          name: "Is Explora suitable for first-time luxury cruisers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. Its welcoming atmosphere and intuitive service make it an excellent introduction to luxury cruising.",
          },
        },
        {
          "@type": "Question",
          name: "When should I book?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Booking 12 to 18 months before departure generally provides the best suite availability and promotional offers.",
          },
        },
        {
          "@type": "Question",
          name: "What should I pack?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Comfortable resort wear, elegant evening attire, walking shoes, swimwear, lightweight layers, and destination-specific clothing.",
          },
        },
        {
          "@type": "Question",
          name: "Can a travel advisor help?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. A luxury travel advisor can recommend itineraries, compare suite categories, coordinate travel arrangements, and provide personalized support.",
          },
        },
        {
          "@type": "Question",
          name: "Is Explora good for couples?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. The elegant atmosphere, spacious suites, fine dining, and destination-focused voyages make it especially popular with couples.",
          },
        },
        {
          "@type": "Question",
          name: "Is Wi-Fi included on Explora Journeys?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Unlimited high-speed Wi-Fi (via Starlink) is included for all guests in their suites and throughout the ship, allowing seamless connectivity.",
          },
        },
        {
          "@type": "Question",
          name: "What is Explora's cancellation policy?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Cancellation policies vary by booking fare type and how far in advance you cancel. We recommend booking with a travel advisor and purchasing comprehensive travel insurance to protect your investment.",
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
      a: "Yes. Explora Journeys is positioned in the luxury cruise market, offering spacious suites, premium dining, personalized service, and destination-focused itineraries.",
    },
    {
      q: "Are all accommodations suites?",
      a: "Yes. Every guest enjoys an oceanfront suite with a private terrace.",
    },
    {
      q: "Where does Explora Journeys sail?",
      a: "Explora sails throughout the Mediterranean, Caribbean, Alaska, Northern Europe, Iceland & Greenland, Japan, Asia, and on select transoceanic voyages.",
    },
    {
      q: "Is dining included?",
      a: "Yes. Multiple gourmet dining venues are included, along with many beverages and in-suite dining options.",
    },
    {
      q: "Does Explora have formal nights?",
      a: "No. The dress code is elegant and relaxed rather than traditionally formal.",
    },
    {
      q: "Is Explora suitable for first-time luxury cruisers?",
      a: "Absolutely. Its welcoming atmosphere and intuitive service make it an excellent introduction to luxury cruising.",
    },
    {
      q: "When should I book?",
      a: "Booking 12 to 18 months before departure generally provides the best suite availability and promotional offers.",
    },
    {
      q: "What should I pack?",
      a: "Comfortable resort wear, elegant evening attire, walking shoes, swimwear, lightweight layers, and destination-specific clothing.",
    },
    {
      q: "Can a travel advisor help?",
      a: "Yes. A luxury travel advisor can recommend itineraries, compare suite categories, coordinate travel arrangements, and provide personalized support.",
    },
    {
      q: "Is Explora good for couples?",
      a: "Yes. The elegant atmosphere, spacious suites, fine dining, and destination-focused voyages make it especially popular with couples.",
    },
    {
      q: "Is Wi-Fi included on Explora Journeys?",
      a: "Yes. Unlimited high-speed Wi-Fi (via Starlink) is included for all guests in their suites and throughout the ship, allowing seamless connectivity.",
    },
    {
      q: "What is Explora's cancellation policy?",
      a: "Cancellation policies vary by booking fare type and how far in advance you cancel. We recommend booking with a travel advisor and purchasing comprehensive travel insurance to protect your investment.",
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
const LuxuryTravelGuideExploraJourneys = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [readMore, setReadMore] = useState(false);
  const [readMoreDestination, setReadMoreDestination] = useState(false);

  const images = [HeroImage1, HeroImage2, HeroImage3];
  const [gridCols, setGridCols] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 767) {
        setGridCols(1);
      } else if (window.innerWidth <= 991) {
        setGridCols(2);
      } else {
        setGridCols(3);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="Asc-page-wrapper">
      <Helmet>
        <title>Luxury Travel Guide to Explora Journeys</title>
        <meta name="title" content="Luxury Travel Guide to Explora Journeys" />
        <meta
          name="description"
          content="Discover the ultimate luxury travel guide to Explora Journeys. Learn about ships, suites, destinations, dining, wellness, itineraries, pricing, booking tips, and expert advice for planning your perfect luxury cruise."
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
          <h1>Luxury Travel Guide to Explora Journeys</h1>

          <p>
            Explora Journeys is redefining luxury cruising with a fresh approach
            that blends elegant European design, spacious all-suite
            accommodations, destination-rich itineraries, exceptional dining,
            and personalized service.
          </p>

          <p>
            Rather than focusing on crowded ships or nonstop entertainment,
            Explora creates an atmosphere where relaxation, discovery, and
            meaningful travel take center stage.
          </p>

          {readMore && (
            <p>
              Whether you're considering your very first luxury cruise or you're
              an experienced traveler looking for something more refined, this
              guide will walk you through everything you need to know—from
              choosing the right ship and itinerary to selecting the perfect
              suite and maximizing the value of your vacation.
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

      {/* ── WHAT IS EXPLORA JOURNEYS? ─────────────────────────────── */}
      <section
        className="ugt-components-section"
        id="what-is-explora-journeys"
        style={{ backgroundColor: "var(--bg-white)" }}
      >
        <div className="ugt-components-container">
          <div className="ugt-components-header">
            <h2 className="ugt-components-title">What Is Explora Journeys?</h2>
            <div className="adg-c-accent-line"></div>
          </div>

          <div className="ugt-components-list">
            <div className="ugt-component-row">
              <div className="ugt-component-image-wrapper">
                <div className="ugt-component-image-container">
                  <img
                    src={ExploraPool}
                    alt="Elegant sundeck aboard Explora Journeys luxury cruise ship"
                    className="ugt-component-image"
                  />
                </div>
              </div>

              <div className="ugt-component-content">
                <p className="ugt-component-text">
                  <strong>Explora Journeys</strong> is the luxury lifestyle
                  cruise brand of the MSC Group, created to offer a contemporary
                  alternative to traditional luxury cruising. Its philosophy
                  centers around the <strong>Ocean State of Mind</strong>—a
                  slower, more intentional way to travel that encourages guests
                  to reconnect with the sea, immerse themselves in remarkable
                  destinations, and enjoy exceptional hospitality.
                </p>

                <div className="ugt-questions-box">
                  <span className="ugt-questions-title">
                    Unlike many cruise lines, Explora emphasizes:
                  </span>

                  <ul className="ugt-questions-list">
                    {[
                      "Spacious accommodations",
                      "Longer stays in port",
                      "Flexible dining",
                      "Personalized service",
                      "Wellness-focused experiences",
                      "Sophisticated design",
                      "Destination immersion",
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
                  The result feels more like staying in a five-star boutique
                  hotel than aboard a traditional ship.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE EXPLORA FLEET ───────────────────────────────────────── */}
      <section className="adg-c-section adg-c-bg-soft" id="the-explora-fleet">
        <div className="adg-c-container">
          <div className="adg-c-section-header">
            <span className="adg-c-eyebrow">Meet the Fleet</span>

            <h2 className="adg-c-h2">The Explora Fleet</h2>

            <div className="adg-c-accent-line"></div>

            <p className="Asc-section-intro">
              Explora Journeys is building a fleet of modern luxury ships, each
              sharing the brand's signature design, spacious accommodations, and
              exceptional service philosophy.
            </p>
          </div>

          <div
            className="adg-c-venues-grid1"
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(${gridCols}, minmax(0, 1fr))`,
              gap: "30px",
            }}
          >
            {/* Explora I */}
            <div className="adg-c-venue-card adg-c-venue-1">
              <div className="adg-c-venue-top">
                <span className="adg-c-venue-eyebrow">
                  <Ship
                    size={14}
                    style={{ display: "inline", marginRight: 6 }}
                  />
                  Explora I
                </span>

                <h3 className="adg-c-venue-name">The Inaugural Ship</h3>

                <p className="adg-c-venue-highlight">Where the Journey Began</p>
              </div>

              <ul className="adg-c-venue-list">
                {[
                  "Oceanfront suites",
                  "Multiple restaurants",
                  "Outdoor decks",
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
                  The inaugural ship introduced guests to Explora's vision of
                  luxury cruising with spacious suites, refined dining, and
                  wellness-focused experiences.
                </p>
              </div>
            </div>

            {/* Explora II */}
            <div className="adg-c-venue-card adg-c-venue-2">
              <div className="adg-c-venue-top">
                <span className="adg-c-venue-eyebrow">
                  <Anchor
                    size={14}
                    style={{ display: "inline", marginRight: 6 }}
                  />
                  Explora II
                </span>

                <h3 className="adg-c-venue-name">Building on Success</h3>

                <p className="adg-c-venue-highlight">Expanded Global Voyages</p>
              </div>

              <ul className="adg-c-venue-list">
                {["Luxury suites", "Refined dining", "Global itineraries"].map(
                  (item, i) => (
                    <li key={i}>
                      <span className="adg-c-venue-dot"></span>
                      <span>{item}</span>
                    </li>
                  ),
                )}
              </ul>

              <div className="adg-c-venue-callout">
                <span className="adg-c-venue-callout-bar"></span>
                <p>
                  Building on the success of Explora I, Explora II delivers the
                  same elegant experience while expanding the cruise line's
                  worldwide destinations.
                </p>
              </div>
            </div>

            {/* Explora III */}
            <div className="adg-c-venue-card adg-c-venue-1">
              <div className="adg-c-venue-top">
                <span className="adg-c-venue-eyebrow">
                  <Compass
                    size={14}
                    style={{ display: "inline", marginRight: 6 }}
                  />
                  Explora III
                </span>

                <h3 className="adg-c-venue-name">Next Generation</h3>

                <p className="adg-c-venue-highlight">
                  Innovation & Sustainability
                </p>
              </div>

              <ul className="adg-c-venue-list">
                {[
                  "New itineraries",
                  "Advanced technologies",
                  "Luxury standards",
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
                  Explora III introduces enhanced sustainability technologies
                  and exciting new itineraries while maintaining the brand's
                  luxury standards.
                </p>
              </div>
            </div>

            {/* Explora IV */}
            <div className="adg-c-venue-card adg-c-venue-2">
              <div className="adg-c-venue-top">
                <span className="adg-c-venue-eyebrow">
                  <Globe
                    size={14}
                    style={{ display: "inline", marginRight: 6 }}
                  />
                  Explora IV
                </span>

                <h3 className="adg-c-venue-name">Fleet Expansion</h3>

                <p className="adg-c-venue-highlight">More Destinations Ahead</p>
              </div>

              <ul className="adg-c-venue-list">
                {[
                  "Expanded fleet",
                  "Future itineraries",
                  "Luxury experiences",
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
                  Scheduled to continue the fleet's expansion, Explora IV will
                  provide even more opportunities to explore the world's most
                  fascinating destinations.
                </p>
              </div>
            </div>

            {/* Shared Features */}
            <div className="adg-c-venue-card adg-c-venue-1">
              <div className="adg-c-venue-top">
                <span className="adg-c-venue-eyebrow">
                  <Sparkles
                    size={14}
                    style={{ display: "inline", marginRight: 6 }}
                  />
                  Every Ship
                </span>

                <h3 className="adg-c-venue-name">Shared Luxury Features</h3>

                <p className="adg-c-venue-highlight">
                  Signature Explora Experience
                </p>
              </div>

              <ul className="adg-c-venue-list">
                {[
                  "Oceanfront suites",
                  "Fine dining",
                  "Wellness facilities",
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
                  Every Explora ship shares contemporary design, personalized
                  service, spacious public areas, and destination-focused
                  luxury.
                </p>
              </div>
            </div>

            {/* Future Fleet */}
            <div className="adg-c-venue-card adg-c-venue-2">
              <div className="adg-c-venue-top">
                <span className="adg-c-venue-eyebrow">
                  <Rocket
                    size={14}
                    style={{ display: "inline", marginRight: 6 }}
                  />
                  Looking Ahead
                </span>

                <h3 className="adg-c-venue-name">The Future Fleet</h3>

                <p className="adg-c-venue-highlight">Continuing the Vision</p>
              </div>

              <ul className="adg-c-venue-list">
                {[
                  "Modern ship design",
                  "Global expansion",
                  "Sustainable innovation",
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
                  As the fleet grows, Explora Journeys continues investing in
                  innovative technology, exceptional guest experiences, and
                  destination-focused luxury travel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY TRAVELERS CHOOSE EXPLORA JOURNEYS ────────────────────── */}
      <section
        className="adg-c-section adg-c-bg-white"
        id="why-travelers-choose-explora"
      >
        <div className="adg-c-container">
          <div className="adg-c-section-header">
            <h2 className="adg-c-h2">Why Travelers Choose Explora Journeys</h2>

            <div className="adg-c-accent-line"></div>

            <p className="Asc-section-intro">
              Luxury travelers increasingly choose Explora because it offers an
              experience that is elegant, relaxed, and highly personalized.
            </p>
          </div>

          <div className="adg-c-overview-layout">
            {/* Left Side */}
            <div className="adg-c-overview-icons">
              {[
                "All oceanfront suites with private terraces",
                "Contemporary European luxury",
                "Exceptional dining",
                "Boutique ship atmosphere",
                "Longer destination visits",
                "Wellness and spa experiences",
                "Refined entertainment",
                "Outstanding personalized service",
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
                    Explora appeals to travelers who value quality, comfort, and
                    authentic experiences over crowds and constant activity.
                  </p>
                </div>
              </div>

              <div
                className="adg-c-overview-image-wrap"
                style={{ height: "380px" }}
              >
                <img
                  src={ExploraAtmosphere}
                  alt="Oceanfront infinity pool deck aboard Explora Journeys"
                  className="adg-c-overview-img"
                />

                <div className="adg-c-overview-img-overlay">
                  <span className="adg-c-overview-img-label">
                    Elegant • Relaxed • Personalized
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── LUXURY SUITES DESIGNED FOR SPACE ─────────────────────────── */}
      <section
        className="azs-entertainment-section"
        id="luxury-suites-designed-for-space"
      >
        <div className="azs-container">
          <div className="azs-section-header">
            <h2 className="azs-section-title">
              Luxury Suites Designed for Space
            </h2>

            <div className="azs-section-accent"></div>

            <p className="azs-section-subtitle">
              Every guest aboard Explora stays in an oceanfront suite with a
              private terrace, among the most generous accommodations in the
              luxury cruise industry.
            </p>
          </div>

          <div className="azs-entertainment-grid">
            {/* Suite Categories */}
            <div className="azs-entertainment-card azs-azamara-ent">
              <div className="azs-ent-header">
                <div className="azs-ent-icon-circle">
                  <Home size={24} className="azs-ent-icon" />
                </div>

                <h3 className="azs-ent-title">Accommodation Categories</h3>
              </div>

              <p className="azs-ent-intro">
                Explora offers a range of suite and residence categories to suit
                every style of luxury travel.
              </p>

              <div className="azs-ent-body">
                <h4 className="azs-ent-group-title">Choose From:</h4>

                <ul className="azs-ent-list">
                  {[
                    "Ocean Terrace Suites",
                    "Ocean Grand Terrace Suites",
                    "Penthouse Suites",
                    "Cove Residences",
                    "Retreat Residences",
                    "Owner's Residences",
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
                    Every category offers an oceanfront view with a private
                    terrace.
                  </p>
                </div>
              </div>
            </div>

            {/* Suite Features */}
            <div className="azs-entertainment-card azs-seabourn-ent">
              <div className="azs-ent-header">
                <div className="azs-ent-icon-circle">
                  <Sparkles size={24} className="azs-ent-icon" />
                </div>

                <h3 className="azs-ent-title">Signature Suite Features</h3>
              </div>

              <p className="azs-ent-intro">
                Each suite is thoughtfully designed with comfort and
                sophistication in mind.
              </p>

              <div className="azs-ent-body">
                <h4 className="azs-ent-group-title">Every Suite Includes:</h4>

                <ul className="azs-ent-list">
                  {[
                    "Floor-to-ceiling windows",
                    "Spacious living areas",
                    "Walk-in wardrobes",
                    "Marble bathrooms",
                    "King-size beds",
                    "Luxury amenities",
                    "Private outdoor space",
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
                    The generous accommodations are among the largest in the
                    luxury cruise industry.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CHOOSING THE RIGHT ITINERARY */}
      <section
        className="Asc-section Asc-bg-soft"
        id="choosing-the-right-itinerary"
      >
        <div className="Asc-container">
          <div className="Asc-section-header">
            <h2 className="Asc-h2">Choosing the Right Itinerary</h2>
            <div className="Asc-accent-line"></div>

            <p
              className="Asc-body-text"
              style={{
                maxWidth: "760px",
                margin: "18px auto 0",
                textAlign: "center",
              }}
            >
              Explora itineraries are carefully curated to balance exploration
              with relaxation. Consider your interests when selecting the voyage
              that's right for you.
            </p>
          </div>

          <div className="Asc-seasons-grid">
            {/* Mediterranean */}
            <div className="Asc-season-card">
              <div className="Asc-season-header-block">
                <h3 className="Asc-season-title">Mediterranean</h3>
              </div>

              <div className="Asc-season-body">
                <span className="Asc-season-meta">Choose for:</span>

                <ul className="Asc-season-bullets">
                  {["Food and wine", "Historic cities", "Coastal scenery"].map(
                    (item, i) => (
                      <li key={i}>
                        <div className="Asc-season-icon">
                          <Check size={14} />
                        </div>
                        <span className="Asc-season-text">{item}</span>
                      </li>
                    ),
                  )}
                </ul>
              </div>
            </div>

            {/* Alaska */}
            <div className="Asc-season-card">
              <div className="Asc-season-header-block">
                <h3 className="Asc-season-title">Alaska</h3>
              </div>

              <div className="Asc-season-body">
                <span className="Asc-season-meta">Choose for:</span>

                <ul className="Asc-season-bullets">
                  {["Wildlife", "Nature", "Photography"].map((item, i) => (
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

            {/* Japan */}
            <div className="Asc-season-card">
              <div className="Asc-season-header-block">
                <h3 className="Asc-season-title">Japan</h3>
              </div>

              <div className="Asc-season-body">
                <span className="Asc-season-meta">Choose for:</span>

                <ul className="Asc-season-bullets">
                  {["Culture", "Gardens", "Temples"].map((item, i) => (
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

            {/* Caribbean */}
            <div className="Asc-season-card">
              <div className="Asc-season-header-block">
                <h3 className="Asc-season-title">Caribbean</h3>
              </div>

              <div className="Asc-season-body">
                <span className="Asc-season-meta">Choose for:</span>

                <ul className="Asc-season-bullets">
                  {["Beaches", "Warm weather", "Relaxation"].map((item, i) => (
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

            {/* Northern Europe */}
            <div className="Asc-season-card">
              <div className="Asc-season-header-block">
                <h3 className="Asc-season-title">Northern Europe</h3>
              </div>

              <div className="Asc-season-body">
                <span className="Asc-season-meta">Choose for:</span>

                <ul className="Asc-season-bullets">
                  {["Fjords", "Scandinavian cities", "History"].map(
                    (item, i) => (
                      <li key={i}>
                        <div className="Asc-season-icon">
                          <Check size={14} />
                        </div>
                        <span className="Asc-season-text">{item}</span>
                      </li>
                    ),
                  )}
                </ul>
              </div>
            </div>

            {/* Iceland & Greenland */}
            <div className="Asc-season-card">
              <div className="Asc-season-header-block">
                <h3 className="Asc-season-title">Iceland & Greenland</h3>
              </div>

              <div className="Asc-season-body">
                <span className="Asc-season-meta">Choose for:</span>

                <ul className="Asc-season-bullets">
                  {["Adventure", "Icebergs", "Remote landscapes"].map(
                    (item, i) => (
                      <li key={i}>
                        <div className="Asc-season-icon">
                          <Check size={14} />
                        </div>
                        <span className="Asc-season-text">{item}</span>
                      </li>
                    ),
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WELLNESS AT SEA */}
      <section className="azs-dining-section" id="azs-wellness-at-sea">
        <div className="azs-container">
          <div className="azs-section-header">
            <h2 className="azs-section-title">Wellness at Sea</h2>

            <div className="azs-section-accent"></div>

            <p className="azs-section-subtitle">
              Explora Journeys places wellness at the center of the guest
              experience, seamlessly blending relaxation, fitness, and personal
              well-being into every voyage.
            </p>
          </div>

          <div className="azs-dining-grid">
            {/* Wellness at Sea */}
            <div className="azs-dining-card azs-seabourn-dining">
              <div className="azs-dining-image-wrap">
                <img
                  src={ExploraSpa}
                  alt="Ocean Wellness experience aboard Explora Journeys"
                  className="azs-dining-img"
                />

                <div className="azs-dining-badge-wrapper">
                  <span className="azs-dining-badge azs-seabourn-badge">
                    Ocean Wellness
                  </span>
                </div>
              </div>

              <div className="azs-dining-content">
                <div className="azs-dining-header">
                  <div className="azs-dining-icon-circle">
                    <HeartHandshake size={24} className="azs-dining-icon" />
                  </div>

                  <h3 className="azs-dining-title">Wellness at Sea</h3>
                </div>

                <p className="azs-dining-intro">
                  The Ocean Wellness concept is designed to help guests relax,
                  recharge, and maintain a healthy lifestyle throughout their
                  voyage.
                </p>

                <div className="azs-dining-body">
                  <h4 className="azs-dining-group-title">
                    Ocean Wellness Includes:
                  </h4>

                  <ul className="azs-dining-list">
                    {[
                      "Luxury spa",
                      "Thermal areas",
                      "Massage treatments",
                      "Yoga classes",
                      "Fitness center",
                      "Meditation",
                      "Outdoor wellness spaces",
                      "Healthy cuisine",
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
                      Whether your goal is relaxation or maintaining an active
                      lifestyle, wellness is thoughtfully integrated into every
                      aspect of the Explora experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Life Onboard */}
            <div className="azs-dining-card azs-azamara-dining">
              <div className="azs-dining-image-wrap">
                <img
                  src={ExploraLifeOnboard}
                  alt="Life onboard Explora Journeys"
                  className="azs-dining-img"
                />

                <div className="azs-dining-badge-wrapper">
                  <span className="azs-dining-badge azs-azamara-badge">
                    Relaxed Daily Life
                  </span>
                </div>
              </div>

              <div className="azs-dining-content">
                <div className="azs-dining-header">
                  <div className="azs-dining-icon-circle">
                    <Waves size={24} className="azs-dining-icon" />
                  </div>

                  <h3 className="azs-dining-title">Life Onboard</h3>
                </div>

                <p className="azs-dining-intro">
                  Days aboard Explora Journeys are intentionally unhurried,
                  allowing guests to enjoy every moment at their own pace.
                </p>

                <div className="azs-dining-body">
                  <h4 className="azs-dining-group-title">Guests Can Enjoy:</h4>

                  <ul className="azs-dining-list">
                    {[
                      "Relaxing by infinity pools",
                      "Reading on private terraces",
                      "Enjoying live music",
                      "Attending enrichment programs",
                      "Visiting the spa",
                      "Exercising with ocean views",
                      "Socializing in elegant lounges",
                      "Exploring each destination at their own pace",
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
                      There is no pressure to follow a packed schedule—each day
                      is designed around freedom, relaxation, and meaningful
                      experiences both onboard and ashore.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── EXTRAORDINARY DESTINATIONS ─────────────────────────── */}
      <section className="luc-why-section" id="extraordinary-destinations">
        <div className="luc-why-container">
          {/* LEFT — stacked images */}
          <div className="luc-why-images">
            <div className="luc-why-img-main-wrap" style={{ color: "#fff" }}>
              <img
                src={ExploraDestination}
                alt="Extraordinary destinations visited by Explora Journeys"
                className="luc-why-img-main"
              />
              <div className="luc-why-img-overlay"></div>
            </div>

            <div className="luc-why-img-accent-wrap" style={{ color: "#fff" }}>
              <img
                src={ExploraSantorini}
                alt="Guests exploring destinations with Explora Journeys"
                className="luc-why-img-accent"
              />

              <div className="luc-why-img-badge">
                <span className="luc-why-badge-num">7</span>
                <span className="luc-why-badge-text">Global Regions</span>
              </div>
            </div>
          </div>

          {/* RIGHT — content */}
          <div className="luc-why-content">
            <h2 className="luc-why-title">Extraordinary Destinations</h2>

            <div className="aac-accent-line aac-accent-white"></div>

            <p className="luc-why-intro">
              Explora Journeys sails to many of the world's most sought-after
              regions, with carefully designed itineraries that maximize time
              ashore and encourage meaningful exploration.
            </p>

            <div className="luc-why-features">
              {[
                {
                  num: "01",
                  title: "Mediterranean",
                  desc: "Explore iconic cities, charming villages, and breathtaking coastlines throughout Italy, Spain, France, Croatia, and Malta.",
                },
                {
                  num: "02",
                  title: "Greece & Greek Isles",
                  desc: "Discover whitewashed villages, crystal-clear waters, ancient ruins, and authentic island culture.",
                },
                {
                  num: "03",
                  title: "Northern Europe",
                  desc: "Experience majestic fjords, medieval towns, Scandinavian capitals, and breathtaking natural scenery.",
                },
                {
                  num: "04",
                  title: "Iceland & Greenland",
                  desc: "Witness glaciers, volcanic landscapes, Arctic wildlife, and remote destinations rarely visited by larger cruise ships.",
                },
                {
                  num: "05",
                  title: "Caribbean",
                  desc: "Relax on white-sand beaches while exploring both famous islands and hidden gems.",
                },
                {
                  num: "06",
                  title: "Alaska",
                  desc: "Enjoy glacier viewing, wildlife encounters, scenic fjords, and unforgettable natural beauty.",
                },
                {
                  num: "07",
                  title: "Japan & Asia",
                  desc: "Immerse yourself in ancient traditions, modern cities, remarkable cuisine, and diverse cultural experiences.",
                },
              ]
                .slice(0, readMoreDestination ? 7 : 4)
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

      {/* ── DINING THAT RIVALS LUXURY RESORTS ───────────────────────── */}
      <section className="adg-section" id="dining-that-rivals-luxury-resorts">
        <div className="adg-container">
          <div className="adg-section-header" style={{ marginBottom: "60px" }}>
            <h2 className="adg-h2">Dining That Rivals Luxury Resorts</h2>
            <div className="adg-accent-line"></div>

            <p
              className="Asc-body-text"
              style={{ textAlign: "center", marginTop: "15px" }}
            >
              Dining aboard Explora Journeys reflects the quality expected from
              a world-class luxury hotel.
            </p>
          </div>

          <div className="adg-split-layout">
            <div className="adg-content-card-side">
              <img
                src={ExploraDining}
                alt="Fine dining aboard Explora Journeys luxury cruise ship"
                className="adg-side-image"
                style={{ height: "58vh" }}
              />

              <div className="adg-info-card">
                <div className="adg-card-meta">
                  <Utensils size={28} />
                  <span className="adg-meta-label">
                    Flexible, World-Class Dining
                  </span>
                </div>

                <p className="adg-card-lead">
                  Meals are served with flexibility, allowing guests to dine
                  when it best suits their schedule.
                </p>
              </div>
            </div>

            <div className="adg-list-side">
              {[
                "Multiple included restaurants",
                "Mediterranean specialties",
                "Asian cuisine",
                "European classics",
                "Fresh seafood",
                "Premium steaks",
                "Healthy dining options",
                "In-suite dining",
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

      {/* ── TIPS FOR FIRST-TIME GUESTS ────────────────────────────────── */}
      <section
        className="ugt-advantage-section"
        id="tips-for-first-time-guests"
      >
        <div className="ugt-advantage-container">
          <div className="ugt-advantage-header">
            <span className="ugt-advantage-eyebrow">Plan With Confidence</span>

            <h2 className="ugt-advantage-title">Tips for First-Time Guests</h2>

            <div className="Asc-accent-line"></div>

            <p className="ugt-advantage-intro">
              A few simple steps will help you make the most of your voyage.
            </p>
          </div>

          <div className="ugt-advantage-grid">
            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <CalendarClock size={28} strokeWidth={1.5} />
              </div>

              <h4 className="ugt-card-title">Book Early</h4>

              <p className="ugt-card-desc">
                Secure the best suite choices by booking well ahead.
              </p>
            </div>

            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <Compass size={28} strokeWidth={1.5} />
              </div>

              <h4 className="ugt-card-title">Choose Wisely</h4>

              <p className="ugt-card-desc">
                Choose an itinerary based on your interests.
              </p>
            </div>

            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <Plane size={28} strokeWidth={1.5} />
              </div>

              <h4 className="ugt-card-title">Arrive Early</h4>

              <p className="ugt-card-desc">
                Arrive a day before embarkation for peace of mind.
              </p>
            </div>

            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <MapPinned size={28} strokeWidth={1.5} />
              </div>

              <h4 className="ugt-card-title">Reserve Ahead</h4>

              <p className="ugt-card-desc">
                Reserve popular shore experiences in advance.
              </p>
            </div>

            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <Shirt size={28} strokeWidth={1.5} />
              </div>

              <h4 className="ugt-card-title">Pack Elegant Resort Wear</h4>

              <p className="ugt-card-desc">
                Pack stylish, comfortable clothing for every occasion.
              </p>
            </div>

            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <Sun size={28} strokeWidth={1.5} />
              </div>

              <h4 className="ugt-card-title">Enjoy the Ship</h4>

              <p className="ugt-card-desc">
                Allow time to enjoy the ship as well as the destinations.
              </p>
            </div>

            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <Users size={28} strokeWidth={1.5} />
              </div>

              <h4 className="ugt-card-title">Work With an Advisor</h4>

              <p className="ugt-card-desc">
                Work with a luxury travel advisor for personalized guidance.
              </p>
            </div>
          </div>
        </div>
      </section>

      
      {/* ── HOW MUCH DOES AN EXPLORA CRUISE COST? ───────────────────── */}
      <section
        className="Ejv-verdict-section"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="Ejv-verdict-container">
          {/* Header */}
          <div className="Ejv-verdict-header">
            <span className="Ejv-verdict-eyebrow">Pricing Guide</span>

            <h2 className="Ejv-verdict-title">
              How Much Does an Explora Cruise Cost?
            </h2>

            <div className="Asc-accent-line"></div>
          </div>

          {/* Main card */}
          <div className="Ejv-verdict-card">
            {/* Left — Image */}
            <div className="Ejv-verdict-img-col">
              <img
                src={ExploraSuiteImage}
                alt="Luxury suite aboard Explora Journeys"
                className="Ejv-verdict-img"
              />

              <div className="Ejv-verdict-img-badge">
                <span className="Ejv-verdict-badge-label">Pricing Factors</span>

                <span className="Ejv-verdict-badge-sub">
                  Plan Your Investment
                </span>
              </div>
            </div>

            {/* Right — Content */}
            <div className="Ejv-verdict-content">
              <p className="Ejv-verdict-intro">
                Explora Journeys pricing varies depending on your itinerary,
                travel season, suite category, and voyage length. While these
                cruises represent a premium investment, the extensive inclusions
                often provide exceptional overall value.
              </p>

              <ul className="Ejv-verdict-list">
                {[
                  "Itinerary",
                  "Season",
                  "Suite category",
                  "Cruise length",
                  "Demand",
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
                  Luxury cruises often provide excellent value because
                  accommodations, fine dining, beverages, entertainment, and
                  many onboard amenities are included in the overall fare.
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
                  Booking 12–18 months in advance generally provides the best
                  pricing, the widest suite selection, and access to early
                  promotional offers on popular sailings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT IS INCLUDED? ─────────────────────────────────────────── */}
      <section className="adg-c-section adg-c-bg-white" id="what-is-included">
        <div className="adg-c-container">
          <div className="adg-c-section-header">
            <h2 className="adg-c-h2">What Is Included?</h2>

            <div className="adg-c-accent-line"></div>

            <p className="Asc-section-intro">
              Most Explora Journeys fares include a generous range of amenities
              and experiences.
            </p>
          </div>

          <div className="adg-c-overview-layout">
            <div className="adg-c-overview-icons">
              {[
                "Luxury suite accommodations",
                "Fine dining across multiple venues",
                "Specialty coffees and premium teas",
                "Wine, beer, and premium spirits",
                "High-speed Wi-Fi",
                "Wellness and fitness facilities",
                "Entertainment",
                "Gratuities",
                "In-suite minibar",
                "Room service",
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
                    Optional purchases may include specialty experiences, shore
                    excursions, spa treatments, and boutique shopping.
                  </p>
                </div>
              </div>

              <div
                className="adg-c-overview-image-wrap"
                style={{ height: "520px" }}
              >
                <img
                  src={LuxuryOceanfront}
                  alt="Luxury oceanfront suite and lounge aboard Explora Journeys"
                  className="adg-c-overview-img"
                />

                <div className="adg-c-overview-img-overlay">
                  <span className="adg-c-overview-img-label">
                    All-Inclusive Luxury
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* WHY BOOK THROUGH TRIPS & SHIPS LUXURY TRAVEL? */}
      <section
        className="Avr-planning-section"
        id="why-book-through-trips-and-ships"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="Asc-container">
          <div className="Avr-planning-heading">
            <span className="Avr-planning-eyebrow">
              Personalized Cruise Planning
            </span>

            <h2 className="Avr-planning-title">
              Why Book Through Trips &amp; Ships Luxury Travel?
            </h2>

            <div className="Avr-planning-divider"></div>
          </div>

          <div className="Avr-planning-grid">
            <div className="Avr-planning-left">
              <div className="Avr-planning-left-deco">&ldquo;</div>

              <h3 className="Avr-planning-left-title">
                A Seamless, Personalized Luxury Experience
              </h3>

              <p className="Avr-planning-left-body">
                Planning a luxury cruise involves many decisions beyond
                selecting a sailing date. Our advisors ensure every detail is
                thoughtfully planned.
              </p>

              <div className="Avr-planning-alert">
                <ShieldCheck size={18} className="Avr-planning-alert-icon" />

                <p className="Avr-planning-alert-text">
                  Our expertise ensures a seamless and personalized luxury
                  travel experience.
                </p>
              </div>
            </div>

            <div className="Avr-planning-right">
              <p className="Avr-planning-right-intro">Our advisors help you:</p>

              <div className="Avr-planning-benefits-grid">
                {[
                  { icon: <Compass size={18} />, label: "Compare itineraries" },
                  {
                    icon: <Home size={18} />,
                    label: "Recommend the ideal suite",
                  },
                  {
                    icon: <BadgePercent size={18} />,
                    label: "Explain fare options",
                  },
                  {
                    icon: <Plane size={18} />,
                    label: "Arrange flights and hotels",
                  },
                  {
                    icon: <MapPinned size={18} />,
                    label: "Coordinate private transfers",
                  },
                  {
                    icon: <Sparkles size={18} />,
                    label: "Recommend shore experiences",
                  },
                  {
                    icon: <DollarSign size={18} />,
                    label: "Access exclusive promotions",
                  },
                  {
                    icon: <Users size={18} />,
                    label: "Provide ongoing support",
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
              Everything travelers need to know about planning a luxury Explora
              Journeys cruise.
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
                  Ready to Plan Your Explora Journey?
                </h2>
                <div className="Asc-help-accent"></div>
              </div>

              <div className="Asc-help-grid">
                <div className="Asc-help-info">
                  <p className="Asc-help-intro">
                    Explora Journeys represents a new generation of luxury
                    cruising—one where space, service, wellness, and destination
                    immersion come together to create an unforgettable travel
                    experience.
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
                        From beautifully appointed oceanfront suites and
                        exceptional culinary experiences to thoughtfully
                        designed itineraries and attentive hospitality, every
                        aspect of the journey is crafted with today's discerning
                        traveler in mind.
                      </p>
                      <br />
                      <p className="Asc-help-intro">
                        At Trips &amp; Ships Luxury Travel, we're passionate
                        about helping travelers choose the right ship, suite,
                        and itinerary while ensuring every detail of the journey
                        is perfectly planned.
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
                      "Compare itineraries and destinations",
                      "Recommend the ideal ship and sailing",
                      "Select the right suite category",
                      "Compare fare options and promotions",
                      "Arrange flights and hotels",
                      "Coordinate pre- and post-cruise transfers",
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
                      label: "Why Choose Explora Journeys?",
                      path: "/why-choose-explora-journeys",
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
                      label: "Explora I Review",
                      path: "/explora-i-review",
                    },
                    {
                      label: "Explora II Review",
                      path: "/explora-ii-review",
                    },
                    {
                      label: "Explora III Guide",
                      path: "/explora-iii-guide",
                    },
                    {
                      label: "Explora IV Guide",
                      path: "/explora-iv-guide",
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
                      label: "Explora Journeys Itineraries",
                      path: "/explora-journeys-itineraries",
                    },
                    {
                      label: "Mediterranean Cruises on Explora Journeys",
                      path: "/mediterranean-cruises-on-explora-journeys",
                    },
                    {
                      label: "Greece & Greek Isles Cruises on Explora Journeys",
                      path: "/greece-greek-isles-cruises-on-explora-journeys",
                    },
                    {
                      label: "Caribbean Cruises on Explora Journeys",
                      path: "/caribbean-cruises-on-explora-journeys",
                    },
                    {
                      label: "Alaska Cruises on Explora Journeys",
                      path: "/alaska-cruises-on-explora-journeys",
                    },
                    {
                      label: "Northern Europe Cruises on Explora Journeys",
                      path: "/northern-europe-cruises-on-explora-journeys",
                    },
                    {
                      label: "Iceland & Greenland Cruises on Explora Journeys",
                      path: "/iceland-greenland-cruises-on-explora-journeys",
                    },
                    {
                      label: "Japan Cruises on Explora Journeys",
                      path: "/japan-cruises-on-explora-journeys",
                    },
                    {
                      label: "Asia Cruises on Explora Journeys",
                      path: "/asia-cruises-on-explora-journeys",
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
                      path: "/entertainment-life-onboard-explora-journeys",
                    },
                    {
                      label: "How to Get the Best Value on Explora Journeys",
                      path: "/how-to-get-the-best-value-on-explora-journeys",
                    },
                    {
                      label: "What to Pack for an Explora Cruise",
                      path: "/what-to-pack-for-an-explora-cruise",
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

export default LuxuryTravelGuideExploraJourneys;
