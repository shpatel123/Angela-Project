import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
  Anchor,
  Sparkles,
  CalendarClock,
  Snowflake,
  Sun,
  Gift,
} from "lucide-react";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela.jpeg";

import HeroImage1 from "../../assets/HowAdvanceShouldBookExplora/Explora-Journeys.webp";
import HeroImage2 from "../../assets/HowAdvanceShouldBookExplora/ExploraCruise3.webp";
import HeroImage4 from "../../assets/HowAdvanceShouldBookExplora/explora-III.jpg";

import ExploraDetination from "../../assets/HowAdvanceShouldBookExplora/explora-ii-amalfi-coast-mediterranean-cruise.jpg";
import ExploraDetination2 from "../../assets/HowAdvanceShouldBookExplora/allinn-estonia-old-town-summer-travel-aerial.jpg";
import ExploraDetination5 from "../../assets/WhichExploraShipChoose/mediterranean-hidden-cove-luxury-cruise-summer-2025.jpg";

import LuxuryOceanfrontSuites from "../../assets/HowAdvanceShouldBookExplora/explora-ship.jpg";
import ExploraCta from "../../assets/HowAdvanceShouldBookExplora/explora-final-destination.jpg";
import ExploraPool from "../../assets/WhichExploraShipChoose/Regent-Seven-Seas-Cruises.webp";
import ExploraPool2 from "../../assets/HowAdvanceShouldBookExplora/explora-III-oceanfront-infinity-pool-luxury-cruise-deck.jpg";
import Exploradining from "../../assets/HowAdvanceShouldBookExplora/EXPLORA-III-IV-Anthology.jpg";
import Exploradining2 from "../../assets/HowAdvanceShouldBookExplora/onboard-experience.webp";
import ExploraSuite from "../../assets/HowAdvanceShouldBookExplora/Explora-Suite.webp";

import { Helmet } from "react-helmet-async";

/* ── Schema ─────────────────────────────────────────────────────── */
const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "Trips & Ships Luxury Travel",
      url: "https://tripsandships.com",
      logo: "https://www.tripsandships.com/Copy-of-TRIPSSHIPS-e1592486640831.webp",
    },
    {
      "@type": "TravelAgency",
      name: "Trips & Ships Luxury Travel",
      url: "https://tripsandships.com",
      description:
        "Luxury travel agency specializing in luxury cruises, safaris, expeditions, and premium travel experiences.",
    },
    {
      "@type": "Person",
      name: "Angela Hughes",
      jobTitle: "CEO of Trips & Ships Luxury Travel",
      description:
        "Luxury travel expert with over 40 years of experience and travel to 121+ countries.",
    },
    {
      "@type": "WebPage",
      name: "How to Get the Best Value on Explora Journeys",
      url: "https://tripsandships.com/how-to-get-the-best-value-on-explora-journeys",
      description:
        "Learn how to get the best value on an Explora Journeys cruise. Discover smart booking strategies, the best times to sail, suite selection tips, promotions, and ways to maximize your luxury cruise investment.",
    },
    {
      "@type": "Article",
      headline: "How to Get the Best Value on Explora Journeys",
      description:
        "A complete value guide for Explora Journeys, covering booking timing, shoulder season travel, suite selection, promotions, and total trip cost.",
      author: {
        "@type": "Person",
        name: "Angela Hughes",
      },
      publisher: {
        "@type": "Organization",
        name: "Trips & Ships Luxury Travel",
      },
    },
    {
      "@type": "BreadcrumbList",
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
          name: "Luxury Cruises",
          item: "https://tripsandships.com/luxury-cruises",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "How to Get the Best Value on Explora Journeys",
          item: "https://tripsandships.com/how-to-get-the-best-value-on-explora-journeys",
        },
      ],
    },
    {
      "@type": "ItemList",
      name: "Ways to Maximize Value on Explora Journeys",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Book Early",
          description:
            "Reserve 9 to 18 months ahead for the widest suite selection and introductory pricing.",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Travel During Shoulder Season",
          description:
            "Spring, early fall, and select late-autumn sailings often balance pleasant weather with better value.",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Choose the Right Suite",
          description:
            "Match your suite category to your travel style instead of defaulting to the highest category.",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Work With a Travel Advisor",
          description:
            "Expert guidance helps identify promotions, compare itineraries, and avoid costly mistakes.",
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Look Beyond the Cruise Fare",
          description:
            "Evaluate everything included in your fare, not just the base price.",
        },
      ],
    },
    {
      "@type": "TouristTrip",
      name: "Explora Journeys Luxury Cruise",
      provider: {
        "@type": "Organization",
        name: "Explora Journeys",
      },
      touristType: "Luxury cruise travelers",
    },
    {
      "@type": "Review",
      itemReviewed: {
        "@type": "TouristTrip",
        name: "Explora Journeys Luxury Cruise Value",
      },
      author: {
        "@type": "Person",
        name: "Angela Hughes",
      },
      reviewBody:
        "The best value on Explora Journeys rarely comes from the lowest fare alone. It comes from booking early, choosing the right suite, and traveling during the seasons that match a traveler's priorities.",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How can I get the best value on Explora Journeys?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Booking early, traveling during shoulder seasons, selecting the right suite, and choosing an itinerary that matches your interests are among the best ways to maximize value.",
          },
        },
        {
          "@type": "Question",
          name: "Is it cheaper to book Explora early?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Early booking often provides better suite availability, promotional pricing, and greater itinerary choice.",
          },
        },
        {
          "@type": "Question",
          name: "Should I wait for last-minute deals?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Last-minute offers occasionally appear, but waiting may limit your suite options and travel flexibility.",
          },
        },
        {
          "@type": "Question",
          name: "Which suite offers the best value?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For many travelers, the Ocean Terrace Suite offers an excellent balance of luxury, comfort, and price.",
          },
        },
        {
          "@type": "Question",
          name: "Does a travel advisor help save money?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A travel advisor can often identify promotions, recommend the best itinerary, and help maximize overall vacation value.",
          },
        },
        {
          "@type": "Question",
          name: "Is shoulder season a good time to cruise?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Spring and early fall frequently offer pleasant weather, fewer crowds, and attractive pricing.",
          },
        },
        {
          "@type": "Question",
          name: "Are longer cruises a better value?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Often, yes. Longer itineraries may reduce the average daily cost while providing a more immersive travel experience.",
          },
        },
        {
          "@type": "Question",
          name: "What should I compare besides price?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Consider suite category, itinerary quality, included amenities, destination variety, and onboard experience.",
          },
        },
        {
          "@type": "Question",
          name: "Are luxury cruises worth the extra cost?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For travelers who value personalized service, spacious accommodations, and destination-focused travel, many find luxury cruising offers excellent overall value.",
          },
        },
        {
          "@type": "Question",
          name: "What's the biggest mistake travelers make?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Focusing only on the lowest fare instead of the overall vacation experience and long-term value.",
          },
        },
        {
          "@type": "Question",
          name: "What is included in the Explora Journeys cruise fare?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Explora Journeys offers an all-inclusive experience. The fare covers suite accommodations with a private terrace, dining at nine culinary experiences (except Anthology), unlimited premium beverages, high-speed Wi-Fi, onboard gratuities, access to spa thermal areas, and port shuttle transfers where available.",
          },
        },
        {
          "@type": "Question",
          name: "Does Explora Journeys offer loyalty discounts for repeat guests?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, through the 'Explora Society' loyalty program, returning guests receive exclusive benefits, repeat booking discounts (usually around 5%), onboard credits, and priority access to newly released itineraries.",
          },
        },
        {
          "@type": "Question",
          name: "Are there group booking discounts on Explora Journeys?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, Explora Journeys offers attractive group booking programs. Booking multiple suites under a single group through a luxury travel advisor can unlock lower group rates, tour conductor credits, and additional onboard credits.",
          },
        },
        {
          "@type": "Question",
          name: "Is travel insurance recommended for Explora Journeys cruises?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. Travel insurance is highly recommended to protect your vacation investment against unexpected cancellations, trip interruptions, medical emergencies, and lost baggage, ensuring peace of mind for luxury travel.",
          },
        },
        {
          "@type": "Question",
          name: "How does booking with Trips & Ships Luxury Travel maximize value?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Trips & Ships Luxury Travel is a preferred partner of Explora Journeys. Booking through Angela Hughes provides clients with exclusive promotions, additional shipboard credits, priority suite upgrades when available, and personalized planning support to maximize every dollar.",
          },
        },
      ],
    },
  ],
};

/* ── Data: Value by season (tabbed panel) ────────────────────────── */
const valueBySeason = [
  {
    id: "spring",
    title: "Spring",
    badge: "Spring",
    icon: Sun,
    image: ExploraDetination5,
    window: "Pleasant weather, fewer crowds",
    desc: "Spring sailings frequently offer comfortable temperatures and lighter crowds, creating an excellent balance of experience and value.",
    columns: [
      {
        label: "Plan Around:",
        items: [
          "Mild, Comfortable Weather",
          "Lower-Traffic Ports",
          "Blossoming Coastal Scenery",
        ],
      },
    ],
    themeLabel: "Balanced Value Season",
    themeText:
      "Travelers who prioritize comfort and a quieter pace often find spring departures deliver outstanding overall value.",
  },
  {
    id: "early-fall",
    title: "Early Fall",
    badge: "Early Fall",
    icon: Compass,
    image: ExploraDetination,
    window: "Comfortable temperatures, great sightseeing",
    desc: "Early autumn keeps summer-like warmth in many regions while crowds and pricing begin to ease.",
    columns: [
      {
        label: "Plan Around:",
        items: [
          "Late-Summer Warmth",
          "Easing Peak-Season Pricing",
          "Excellent Sightseeing Conditions",
        ],
      },
    ],
    themeLabel: "Shoulder Season Sweet Spot",
    themeText:
      "Early fall is often considered one of the strongest value windows of the year for travelers chasing warm weather without peak pricing.",
  },
  {
    id: "late-autumn",
    title: "Late Autumn",
    badge: "Late Autumn",
    icon: Snowflake,
    image: ExploraDetination2,
    window: "Attractive pricing on select itineraries",
    desc: "Select late-autumn itineraries can offer attractive pricing while still delivering excellent weather in many regions.",
    columns: [
      {
        label: "Plan Around:",
        items: [
          "Select Discounted Itineraries",
          "Quieter Ports of Call",
          "Mild Weather in Many Regions",
        ],
      },
    ],
    themeLabel: "Worth a Closer Look",
    themeText:
      "Travelers with flexible dates often find meaningful value by sailing just before peak winter or holiday demand begins.",
  },
];

/* ── Data: Value strategy cards ───────────────────────────────────── */
const valueStrategies = [
  {
    key: "book-early",
    eyebrow: "Widest Selection",
    accent: "adg-accent-blue",
    title: "Book 9–18 Months Ahead",
    items: [
      "Widest suite selection",
      "Preferred sailing dates",
      "Access to introductory pricing",
      "Flexible payment schedules",
    ],
  },
  {
    key: "shoulder-season",
    eyebrow: "Smart Timing",
    accent: "adg-accent-gold",
    title: "Travel Shoulder Season",
    items: [
      "Fewer crowds at popular ports",
      "Comfortable, pleasant weather",
      "Often better overall pricing",
      "More relaxed onboard atmosphere",
    ],
  },
  {
    key: "right-suite",
    eyebrow: "Match Your Style",
    accent: "adg-accent-green",
    title: "Choose the Right Suite",
    items: [
      "Avoid paying for unused space",
      "Ocean Terrace Suites offer strong value",
      "Upgrade only when it adds real benefit",
      "Match suite to how you'll actually travel",
    ],
  },
  {
    key: "look-beyond-fare",
    eyebrow: "See the Full Picture",
    accent: "adg-accent-silver",
    title: "Look Beyond the Fare",
    items: [
      "Compare what's actually included",
      "Factor in dining, Wi-Fi, and gratuities",
      "Consider total trip cost, not just fare",
      "Weigh longer voyages by value per day",
    ],
  },
];

/* ── Data: Match cruise to travel style ───────────────────────────── */
const travelStyleMatch = [
  {
    title: "First-Time Luxury Cruisers",
    desc: "Start with an Ocean Terrace Suite and a well-paced itinerary to experience Explora's signature service without overspending.",
  },
  {
    title: "Couples Celebrating a Milestone",
    desc: "An Ocean Grand Terrace Suite or Penthouse often adds meaningful value for travelers who plan to enjoy extra outdoor space.",
  },
  {
    title: "Travelers Who Love the Outdoors",
    desc: "Prioritize itineraries with scenic cruising and overnight port stays to get more from each day at sea.",
  },
  {
    title: "Flexible, Date-Open Travelers",
    desc: "Shifting a departure by a week or two can sometimes unlock better pricing, suite availability, and promotions.",
  },
  {
    title: "Travelers Planning Longer Trips",
    desc: "A 10- to 14-night voyage frequently offers stronger value per day than several shorter vacations.",
  },
];

/* ── FAQ Component ───────────────────────────────────────────────── */
function FAQ() {
  const [open, setOpen] = useState(null);

  const faqData = [
    {
      q: "How can I get the best value on Explora Journeys?",
      a: "Booking early, traveling during shoulder seasons, selecting the right suite, and choosing an itinerary that matches your interests are among the best ways to maximize value.",
    },
    {
      q: "Is it cheaper to book Explora early?",
      a: "Early booking often provides better suite availability, promotional pricing, and greater itinerary choice.",
    },
    {
      q: "Should I wait for last-minute deals?",
      a: "Last-minute offers occasionally appear, but waiting may limit your suite options and travel flexibility.",
    },
    {
      q: "Which suite offers the best value?",
      a: "For many travelers, the Ocean Terrace Suite offers an excellent balance of luxury, comfort, and price.",
    },
    {
      q: "Does a travel advisor help save money?",
      a: "A travel advisor can often identify promotions, recommend the best itinerary, and help maximize overall vacation value.",
    },
    {
      q: "Is shoulder season a good time to cruise?",
      a: "Yes. Spring and early fall frequently offer pleasant weather, fewer crowds, and attractive pricing.",
    },
    {
      q: "Are longer cruises a better value?",
      a: "Often, yes. Longer itineraries may reduce the average daily cost while providing a more immersive travel experience.",
    },
    {
      q: "What should I compare besides price?",
      a: "Consider suite category, itinerary quality, included amenities, destination variety, and onboard experience.",
    },
    {
      q: "Are luxury cruises worth the extra cost?",
      a: "For travelers who value personalized service, spacious accommodations, and destination-focused travel, many find luxury cruising offers excellent overall value.",
    },
    {
      q: "What's the biggest mistake travelers make?",
      a: "Focusing only on the lowest fare instead of the overall vacation experience and long-term value.",
    },
    {
      q: "What is included in the Explora Journeys cruise fare?",
      a: "Explora Journeys offers an all-inclusive experience. The fare covers suite accommodations with a private terrace, dining at nine culinary experiences (except Anthology), unlimited premium beverages, high-speed Wi-Fi, onboard gratuities, access to spa thermal areas, and port shuttle transfers where available.",
    },
    {
      q: "Does Explora Journeys offer loyalty discounts for repeat guests?",
      a: "Yes, through the 'Explora Society' loyalty program, returning guests receive exclusive benefits, repeat booking discounts (usually around 5%), onboard credits, and priority access to newly released itineraries.",
    },
    {
      q: "Are there group booking discounts on Explora Journeys?",
      a: "Yes, Explora Journeys offers attractive group booking programs. Booking multiple suites under a single group through a luxury travel advisor can unlock lower group rates, tour conductor credits, and additional onboard credits.",
    },
    {
      q: "Is travel insurance recommended for Explora Journeys cruises?",
      a: "Absolutely. Travel insurance is highly recommended to protect your vacation investment against unexpected cancellations, trip interruptions, medical emergencies, and lost baggage, ensuring peace of mind for luxury travel.",
    },
    {
      q: "How does booking with Trips & Ships Luxury Travel maximize value?",
      a: "Trips & Ships Luxury Travel is a preferred partner of Explora Journeys. Booking through Angela Hughes provides clients with exclusive promotions, additional shipboard credits, priority suite upgrades when available, and personalized planning support to maximize every dollar.",
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
const HowToGetTheBestValueOnExploraJourneys = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [readMore, setReadMore] = useState(false);
  const [activeSeason, setActiveSeason] = useState("spring");
  const currentSeason =
    valueBySeason.find((d) => d.id === activeSeason) || valueBySeason[0];

  const ActiveIcon = currentSeason.icon;

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
          How to Get the Best Value on Explora Journeys | Luxury Cruise
          Money-Saving Guide
        </title>
        <meta
          name="title"
          content="How to Get the Best Value on Explora Journeys"
        />
        <meta
          name="description"
          content="Learn how to get the best value on an Explora Journeys cruise. Discover smart booking strategies, the best times to sail, suite selection tips, promotions, and ways to maximize your luxury cruise investment."
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
          <h1>
            How to Get the Best Value <br /> on Explora Journeys
          </h1>

          <p>
            Explora Journeys is positioned as a luxury cruise line, offering
            spacious all-suite accommodations, exceptional dining, personalized
            service, and destination-focused itineraries.
          </p>

          <p>
            Because of its premium positioning, many travelers assume the only
            way to save money is by waiting for last-minute discounts. In
            reality, getting the best value isn't necessarily about paying the
            lowest fare.
          </p>

          {readMore && (
            <>
              <p>
                It's about booking the right voyage, choosing the right suite,
                and taking advantage of opportunities that enhance your overall
                experience. With thoughtful planning, you can maximize both your
                investment and your enjoyment.
              </p>

              <p>
                According to luxury cruise expert Angela Hughes, value rarely
                comes from chasing the lowest fare — it comes from matching the
                right itinerary, suite, and season to your travel style.
              </p>

              <p>
                With more than 40 years in the travel industry, experience
                spanning over 121 countries, and recognition as the 2024 Luxury
                Travel Influencer of the Year by Travel Leaders Network, Angela
                Hughes has become one of the most trusted voices in luxury
                cruising worldwide.
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

      {/* ── WHAT VALUE REALLY MEANS ──────────────────────────────────── */}
      <section
        className="Asc-section Asc-bg-white"
        id="Asc-value-meaning"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="Asc-container">
          <div className="Asc-section-header">
            <h2 className="Asc-h2">Understand What "Value" Really Means</h2>
            <div className="Asc-accent-line"></div>
          </div>

          <p className="Asc-body-text" style={{ marginBottom: "20px" }}>
            Luxury travel is different from budget travel. The goal isn't simply
            to spend less — value comes from receiving an experience that
            matches your expectations. Sometimes paying slightly more for a
            better itinerary or suite creates significantly greater value.
          </p>

          <div className="Asc-table-wrapper">
            <table className="Asc-fleet-table">
              <thead>
                <tr>
                  <th>What True Value Includes</th>
                  <th>Why It Matters</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>Exceptional Service</strong>
                  </td>
                  <td>Personalized attention throughout the voyage</td>
                </tr>
                <tr>
                  <td>
                    <strong>Spacious Accommodations</strong>
                  </td>
                  <td>Every Explora stateroom is a suite</td>
                </tr>
                <tr>
                  <td>
                    <strong>Memorable Destinations</strong>
                  </td>
                  <td>Itinerary quality, not just port count</td>
                </tr>
                <tr>
                  <td>
                    <strong>High-Quality Dining</strong>
                  </td>
                  <td>Multiple included venues and experiences</td>
                </tr>
                <tr>
                  <td>
                    <strong>Comfort Throughout</strong>
                  </td>
                  <td>Smaller ships, fewer guests, less crowding</td>
                </tr>
                <tr>
                  <td>
                    <strong>Matched Expectations</strong>
                  </td>
                  <td>The right fit reduces wasted spend</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── BOOK EARLY ───────────────────────────────────────────────── */}
      <section className="adg-c-section adg-c-bg-white" id="adg-book-early">
        <div className="adg-c-container">
          <div className="adg-c-section-header">
            <h2 className="adg-c-h2">Book Early</h2>
            <div className="adg-c-accent-line"></div>
          </div>

          <div className="adg-c-overview-layout">
            <div className="adg-c-overview-icons">
              {[
                "Widest suite selection",
                "Preferred sailing dates",
                "Access to introductory pricing",
                "Flexible payment schedules",
                "Better peak-season availability",
                "More planning time overall",
                "More choice of suite locations",
                "Higher availability for shore experiences",
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
                    For most itineraries, booking 9 to 18 months ahead is
                    recommended for the strongest combination of value and
                    selection.
                  </p>
                </div>
              </div>

              <div className="adg-c-overview-image-wrap">
                <img
                  src={ExploraPool}
                  alt="Luxury ocean-front suite and outdoor spaces aboard an Explora Journeys ship"
                  className="adg-c-overview-img"
                />
                <div className="adg-c-overview-img-overlay">
                  <span className="adg-c-overview-img-label">
                    Reserve Early, Save Stress Later
                  </span>
                </div>
              </div>
            </div>
          </div>

          <p
            className="adg-c-body-text"
            style={{ marginTop: "2rem", textAlign: "center" }}
          >
            Many travelers hope for last-minute bargains, but popular
            itineraries can sell out, preferred suites may disappear, and
            flights can become more expensive the longer you wait.
          </p>
        </div>
      </section>

      {/* ══ BOOKING TIPS ═══════════════════════════════════════════ */}
      <section
        className="adg-c-section adg-c-bg-soft"
        id="choose-the-right-itinerary"
      >
        <div className="adg-c-container">
          <div className="adg-c-section-header">
            <span className="adg-c-eyebrow">Booking Tips</span>

            <h2 className="adg-c-h2">
              How to Get the Best Value <br /> on Your Cruise
            </h2>

            <div className="adg-c-accent-line"></div>

            <p className="Asc-section-intro">
              A few smart planning decisions can significantly improve the
              overall value of your cruise. These strategies can help you
              maximize your experience while making the most of your travel
              budget.
            </p>
          </div>

          <div className="adg-c-venues-grid1">
            {[
              {
                id: 1,
                eyebrow: "Booking Tip #1",
                name: "Choose the Right Itinerary",
                highlight: "Look Beyond the Lowest Price",
                items: [
                  "Number of Ports",
                  "Overnight Stays",
                  "Scenic Cruising",
                  "Cultural Experiences",
                  "Time Spent at Sea",
                  "Excursion Opportunities",
                ],
                callout:
                  "Rather than booking based solely on price, choose an itinerary that offers richer experiences and more immersive destinations for greater overall value.",
              },
              {
                id: 2,
                eyebrow: "Booking Tip #2",
                name: "Consider Longer Voyages",
                highlight: "Better Value Per Day",
                items: [
                  "More Destinations",
                  "Greater Relaxation",
                  "Better Use of International Flights",
                  "More Time to Enjoy the Ship",
                ],
                callout:
                  "If your schedule allows, a 10- to 14-night voyage often delivers more value than taking multiple shorter vacations.",
              },
              {
                id: 3,
                eyebrow: "Booking Tip #3",
                name: "Be Flexible With Dates",
                highlight: "Flexibility Can Save Money",
                items: [
                  "Better Pricing",
                  "More Suite Availability",
                  "Less Crowded Sailings",
                  "Additional Promotional Opportunities",
                ],
                callout:
                  "Even shifting your departure by a week or two may provide better pricing, improved availability, and additional promotional offers.",
              },
              {
                id: 4,
                eyebrow: "Booking Tip #4",
                name: "Don't Wait Too Long",
                highlight: "Book Early for the Best Selection",
                items: [
                  "Popular Itineraries Sell Out",
                  "Preferred Suite Categories Fill Quickly",
                  "Flights Become More Expensive",
                  "Easier Vacation Planning",
                ],
                callout:
                  "While last-minute bargains occasionally appear, booking early is usually the best strategy for securing your preferred itinerary and maximizing value.",
              },
            ].map((venue, i) => (
              <div
                key={venue.id}
                className={`adg-c-venue-card adg-c-venue-${(i % 5) + 1}`}
              >
                <div className="adg-c-venue-top">
                  <span className="adg-c-venue-eyebrow">{venue.eyebrow}</span>

                  <h3 className="adg-c-venue-name">{venue.name}</h3>

                  <p className="adg-c-venue-highlight">{venue.highlight}</p>
                </div>

                <ul className="adg-c-venue-list">
                  {venue.items.map((item, j) => (
                    <li key={j}>
                      <span className="adg-c-venue-dot"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="adg-c-venue-callout">
                  <span className="adg-c-venue-callout-bar"></span>
                  <p>{venue.callout}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VALUE BY SEASON (TABBED) ────────────────────────────────── */}
      <section className="luc-destinations-section" id="luc-seasons">
        <div className="luc-destinations-container">
          <div className="luc-destinations-header">
            <h2 className="luc-destinations-title">
              When Should You Travel for the Best Value?
            </h2>

            <div className="adg-c-accent-line"></div>

            <p className="luc-destinations-intro">
              Luxury cruising is often more affordable outside peak vacation
              periods. Here's how each season compares.
            </p>
          </div>

          <div className="luc-dest-layout">
            <nav className="luc-dest-nav">
              {valueBySeason.map((item) => {
                const NavIcon = item.icon;
                const isActive = activeSeason === item.id;

                return (
                  <button
                    key={item.id}
                    className={`luc-dest-nav-btn ${
                      isActive ? "luc-dest-nav-btn--active" : ""
                    }`}
                    onClick={() => setActiveSeason(item.id)}
                  >
                    <div className="luc-dest-nav-icon-wrap">
                      <NavIcon size={16} strokeWidth={1.8} />
                    </div>

                    <span className="luc-dest-nav-label">{item.badge}</span>

                    {isActive && <div className="luc-dest-nav-pip"></div>}
                  </button>
                );
              })}
            </nav>

            <div className="luc-dest-panel" key={activeSeason}>
              <div className="luc-dest-img-wrap">
                <img
                  src={currentSeason.image}
                  alt={currentSeason.title}
                  className="luc-dest-img"
                />

                <div className="luc-dest-img-overlay">
                  <div className="luc-dest-img-icon">
                    <ActiveIcon size={22} strokeWidth={1.6} />
                  </div>

                  <span className="luc-dest-img-title">
                    {currentSeason.title}
                  </span>
                </div>
              </div>

              <p className="luc-dest-panel-desc">
                <strong>{currentSeason.window}.</strong> {currentSeason.desc}
              </p>

              <div className="luc-dest-columns">
                {currentSeason.columns.map((col, cIdx) => (
                  <div key={cIdx} className="luc-dest-info-col">
                    <span className="luc-dest-info-label">{col.label}</span>

                    <div className="luc-dest-items-grid">
                      {col.items.map((item) => (
                        <div key={item} className="luc-dest-item">
                          <div className="luc-dest-item-dot"></div>
                          <span className="luc-dest-item-text">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="luc-dest-theme-box-note">
                <div className="luc-dest-theme-note-bar"></div>

                <div className="luc-dest-theme-note-content">
                  <span className="luc-dest-theme-note-label">
                    {currentSeason.themeLabel}
                  </span>

                  <p className="luc-dest-theme-note-text">
                    {currentSeason.themeText}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── THINK ABOUT TOTAL TRIP COST ───── */}
      <section
        className="ugt-components-section"
        id="think-about-total-trip-cost"
        style={{ backgroundColor: "var(--bg-white)" }}
      >
        <div className="ugt-components-container">
          <div className="ugt-components-header">
            <h2 className="ugt-components-title">
              Think About Total Trip Cost
            </h2>

            <div className="adg-c-accent-line"></div>
          </div>

          <div className="ugt-components-list">
            <div className="ugt-component-row">
              <div className="ugt-component-image-wrapper">
                <div className="ugt-component-image-container">
                  <img
                    src={LuxuryOceanfrontSuites}
                    alt="Travel planning budget including flights, hotels, and cruise expenses"
                    className="ugt-component-image"
                  />
                </div>
              </div>

              <div className="ugt-component-content">
                <p className="ugt-component-text">
                  The cruise fare is only one part of your overall vacation
                  budget. Planning for every major expense before you book gives
                  you a clearer picture of the total investment and helps you
                  avoid unexpected costs.
                </p>

                <div className="ugt-questions-box">
                  <span className="ugt-questions-title">
                    Be sure to include:
                  </span>

                  <ul className="ugt-questions-list">
                    {[
                      "Flights",
                      "Hotels Before or After the Cruise",
                      "Airport Transfers",
                      "Shore Excursions",
                      "Travel Insurance",
                      "Dining Ashore",
                      "Personal Spending",
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
                  Looking at the complete vacation cost—not just the cruise
                  fare—helps you make more informed decisions and better
                  evaluate the overall value of your trip.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SELECT THE RIGHT SUITE ──────────────────────────────────── */}
      <section className="Lfsg-section Lfsg-bg-dark" id="Lfsg-suites">
        <div className="Lfsg-container">
          <div className="Lfsg-section-header">
            <h2 className="Lfsg-h2-white">Select the Right Suite</h2>
            <div className="Lfsg-accent-line-white" />
          </div>

          <div className="Lfsg-mistakes-grid">
            {[
              {
                title: "Ocean Terrace Suites",
                desc: "Offer outstanding value with spacious interiors and a private terrace.",
              },
              {
                title: "Ocean Grand Terrace Suites",
                desc: "Provide additional outdoor space for travelers who spend significant time on their balcony.",
              },
              {
                title: "Penthouses",
                desc: "Ideal for milestone celebrations or extended voyages where extra living space becomes more valuable.",
              },
              {
                title: "Residences",
                desc: "Best suited to travelers who want the most expansive accommodations and amenities onboard.",
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

          <p
            className="Lfsg-mistake-desc"
            style={{ textAlign: "center", marginTop: "2rem" }}
          >
            Because every Explora accommodation is a luxury suite, you don't
            necessarily need to choose the most expensive category. Choosing a
            suite that matches your travel style prevents paying for features
            you may not fully use.
          </p>
        </div>
      </section>

      {/* ── LOOK BEYOND THE CRUISE FARE ─────────────────────────────── */}
      <section className="dmg-info-section dmg-bg-soft" id="dmg-fare">
        <div className="dmg-info-container">
          <div className="dmg-info-grid">
            <div className="dmg-info-content">
              <h2 className="dmg-info-title">Look Beyond the Cruise Fare</h2>
              <div className="dmg-info-accent"></div>

              <p className="dmg-info-lead">
                Explora Journeys offers a premium experience that includes many
                amenities travelers might otherwise pay extra for on other
                cruise lines. Understanding the overall value — not just the
                base fare — can change how you compare cruise options.
              </p>

              <div className="dmg-info-features dmg-info-features-scrollable">
                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Multiple Dining Venues
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Several included dining experiences across the ship,
                      depending on fare and itinerary.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Spacious Ocean-Front Suites
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Every accommodation is a suite, with personalized service
                      included.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Wi-Fi, Beverages & Gratuities
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Many sailings include select beverages, Wi-Fi, and
                      gratuities or service charges.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Entertainment & Wellness
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Onboard entertainment and wellness facilities add to the
                      overall included experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="dmg-info-media">
              <div className="dmg-media-wrapper">
                <img
                  src={Exploradining}
                  alt="Luxury oceanfront suite aboard an Explora Journeys ship"
                  className="dmg-media-img"
                  style={{ height: "78vh" }}
                />
                <div className="dmg-media-overlay"></div>

                <div className="dmg-media-badge">
                  <span>What's Already Included</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MATCH THE CRUISE TO YOUR TRAVEL STYLE ───────────────────── */}
      <section
        className="Asc-section Asc-bg-white"
        id="Asc-travel-style"
        style={{ backgroundColor: "var(--bg-white)" }}
      >
        <div className="Asc-container">
          <div className="Asc-section-header">
            <h2 className="Asc-h2">Match the Cruise to Your Travel Style</h2>
            <div className="Asc-accent-line"></div>
          </div>

          <div className="adg-c-overview-layout">
            <div className="adg-c-overview-icons">
              {[
                {
                  title: "Luxury Accommodations",
                  desc: "Elegant all-suite accommodations with spacious layouts and premium amenities.",
                },
                {
                  title: "Personalized Service",
                  desc: "Attentive, individualized service designed around each guest.",
                },
                {
                  title: "Destination-Focused Itineraries",
                  desc: "Meaningful port visits with immersive cultural experiences.",
                },
                {
                  title: "Fine Dining",
                  desc: "Multiple high-quality dining venues featuring refined cuisine.",
                },
                {
                  title: "Wellness",
                  desc: "Relaxation, spa experiences, fitness, and wellness-focused spaces.",
                },
                {
                  title: "Smaller Ships",
                  desc: "A more intimate atmosphere with fewer crowds and easier exploration.",
                },
                {
                  title: "Relaxed Sophistication",
                  desc: "An elegant yet comfortable onboard environment without formality.",
                },
                {
                  title: "Oceanfront Living",
                  desc: "Private terraces and sweeping sea views create a seamless connection to the ocean.",
                },
                {
                  title: "Flexible Onboard Experience",
                  desc: "Enjoy your days at your own pace with no rigid schedules or crowded activities.",
                },
              ].map((item, i) => (
                <div key={i} className="adg-c-overview-item">
                  <span className="adg-c-overview-icon">
                    <CalendarClock size={16} strokeWidth={2.2} />
                  </span>
                  <span className="adg-c-overview-label">
                    <strong>{item.title}:</strong> {item.desc}
                  </span>
                </div>
              ))}
            </div>

            <div className="adg-c-overview-right">
              <div className="adg-c-overview-callout">
                <div className="adg-c-overview-callout-inner">
                  <Users size={28} className="adg-c-callout-star" />
                  <p className="adg-c-callout-text">
                    The best value comes from choosing the experience that's
                    right for you. If your priorities align with Explora's
                    luxury accommodations, personalized service,
                    destination-focused itineraries, fine dining, wellness,
                    smaller ships, and relaxed sophistication, the experience
                    often delivers exceptional value regardless of the exact
                    fare.
                  </p>
                </div>
              </div>

              <div className="adg-c-overview-image-wrap">
                <img
                  src={Exploradining2}
                  alt="Guests enjoying a luxury cruise tailored to their travel style"
                  className="adg-c-overview-img"
                />
                <div className="adg-c-overview-img-overlay">
                  <span className="adg-c-overview-img-label">
                    Find Your Perfect Fit
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WORK WITH A TRAVEL ADVISOR ──────────────────────────────── */}
      <section className="adg-section" id="adg-advisor">
        <div className="adg-container">
          <div className="adg-section-header" style={{ marginBottom: "60px" }}>
            <h2 className="adg-h2">Work With a Travel Advisor</h2>
            <div className="adg-accent-line"></div>
          </div>
          <div
            className="adg-split-layout"
            style={{ alignItems: "flex-start" }}
          >
            <div className="adg-content-card-side">
              <img
                src={ExploraSuite}
                alt="Explora Journeys luxury cruise ship at sea"
                className="adg-side-image"
                style={{ height: "28vh" }}
              />
              <div className="adg-info-card">
                <div className="adg-card-meta">
                  <Award size={28} />
                  <span className="adg-meta-label">Expert Guidance</span>
                </div>
                <p className="adg-card-lead">
                  Experienced luxury travel advisors can help you maximize value
                  at every step of the planning process.
                </p>
                <div className="adg-card-divider"></div>
                <p className="adg-card-subtext">
                  Professional guidance often helps travelers avoid costly
                  mistakes while making the most of their vacation budget.
                </p>
              </div>
            </div>
            <div className="adg-list-side">
              {[
                { title: "Compare Itineraries", icon: <Compass size={20} /> },
                {
                  title: "Recommend the Best Suite",
                  icon: <Anchor size={20} />,
                },
                {
                  title: "Identify Promotional Offers",
                  icon: <Sparkles size={20} />,
                },
                {
                  title: "Monitor Pricing Opportunities",
                  icon: <Gift size={20} />,
                },
                {
                  title: "Coordinate Flights & Hotels",
                  icon: <MapPin size={20} />,
                },
                {
                  title: "Support Before & During Travel",
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

      {/* WATCH FOR PROMOTIONS */}
      <section
        className="dmg-info-section dmg-bg-white"
        id="watch-for-promotions"
      >
        <div className="dmg-info-container">
          <div className="dmg-info-grid">
            {/* Left Side Image */}
            <div className="dmg-info-media">
              <div className="dmg-media-wrapper">
                <img
                  src={ExploraPool2}
                  alt="Luxury cruise suite promotion and special offers"
                  className="dmg-media-img"
                  style={{ height: "70vh" }}
                />
                <div className="dmg-media-overlay"></div>

                <div className="dmg-media-badge">
                  <span>Special Offers</span>
                </div>
              </div>
            </div>

            {/* Right Side Content */}
            <div className="dmg-info-content">
              <h2 className="dmg-info-title">Watch for Promotions</h2>
              <div className="dmg-info-accent"></div>

              <p className="dmg-info-lead">
                Luxury cruise lines occasionally introduce promotions that
                provide additional value beyond standard fare discounts.
                Depending on the sailing and booking period, these offers can
                make your vacation even more rewarding.
              </p>

              <div className="dmg-info-features dmg-info-features-scrollable">
                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Suite Upgrade Opportunities
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Move into a higher suite category at a reduced cost when
                      upgrade promotions are available.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Included Airfare Promotions
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Select departures may include airfare incentives that help
                      lower the total cost of your vacation.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">Onboard Credit</h3>
                    <p className="dmg-info-feature-desc">
                      Receive extra spending credit to enjoy specialty dining,
                      spa treatments, shore excursions, or other onboard
                      experiences.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">Reduced Deposits</h3>
                    <p className="dmg-info-feature-desc">
                      Some booking promotions lower the required upfront
                      deposit, making it easier to reserve your preferred
                      sailing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── COMMON MISTAKES VS SMART MOVES ──────────────────────────── */}
      <section className="Asc-section Asc-bg-soft" id="Asc-mistakes">
        <div className="Asc-container">
          <div className="Asc-section-header">
            <h2 className="Asc-h2">What Helps — and What Hurts — Your Value</h2>
            <div className="Asc-accent-line"></div>
          </div>

          <div className="Asc-who-grid">
            <div className="Asc-who-card Asc-who-yes">
              <h3 className="Asc-who-title">Choices That Increase Value</h3>
              <ul className="Asc-who-list">
                {[
                  "Booking 9 to 18 months in advance",
                  "Traveling during shoulder season",
                  "Selecting a suite that matches your style",
                  "Comparing itineraries, not just fares",
                  "Working with a travel advisor",
                  "Considering total trip cost upfront",
                ].map((item, i) => (
                  <li key={i}>
                    <Check size={16} className="Asc-icon-green" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="Asc-who-card Asc-who-no">
              <h3 className="Asc-who-title">Mistakes That Reduce Value</h3>
              <ul className="Asc-who-list">
                {[
                  "Choosing a cruise based only on price",
                  "Waiting too long to reserve",
                  "Booking a suite larger than you need",
                  "Ignoring seasonal differences",
                  "Overlooking total trip costs",
                  "Skipping professional travel advice",
                ].map((item, i) => (
                  <li key={i}>
                    <Minus size={16} className="Asc-icon-muted" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="Asc-body-text" style={{ marginTop: "2rem" }}>
            Thoughtful planning often provides better value than chasing the
            lowest fare alone.
          </p>
        </div>
      </section>

      {/* ── ANGELA HUGHES AUTHORITY ────────────────────────────────── */}
      <section className="Adg-expert-section" id="Asc-expert-insight">
        <div className="Asc-container">
          <div className="Adg-expert-heading">
            <span className="Adg-expert-eyebrow">
              Expert Insight From Angela Hughes
            </span>
            <h2 className="Adg-expert-title">Angela Hughes Luxury Authority</h2>
            <div className="Adg-expert-divider"></div>
          </div>

          <div className="Adg-expert-grid">
            <div className="Adg-expert-image-col">
              <div className="Adg-expert-portrait-wrap">
                <img
                  src={AboutImage}
                  alt="Angela Hughes Luxury Travel Expert"
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
                  Angela Hughes Luxury Authority
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
                      label: "Featured in major travel publications worldwide",
                    },
                    {
                      icon: <Ship size={16} />,
                      label:
                        "Specialist in luxury cruises, expeditions, safaris, and premium travel experiences",
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

                <p
                  className="Adg-expert-role"
                  style={{ marginTop: "24px", lineHeight: "1.8" }}
                >
                  Angela Hughes and the team at Trips &amp; Ships Luxury Travel
                  help travelers find the smartest path to value on every
                  Explora Journeys voyage — from suite selection and timing to
                  promotions and total trip planning.
                </p>
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
              Everything you need to know about maximizing value on your Explora
              Journeys booking.
            </p>
          </div>
          <FAQ />
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────────── */}
      <section className="Asc-help-section">
        <div className="Asc-help-bg-wrap">
          <img
            src={ExploraCta}
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
                  Ready to Maximize <br /> Your Explora Journeys Value?
                </h2>
                <div className="Asc-help-accent"></div>
              </div>

              <div className="Asc-help-grid">
                <div className="Asc-help-info">
                  <p className="Asc-help-intro">
                    Connect with Angela Hughes and the expert team at Trips
                    &amp; Ships Luxury Travel for personalized guidance on
                    getting the best value on your Explora Journeys cruise.
                  </p>

                  <p className="Asc-help-intro">
                    From suite recommendations and seasonal timing to itinerary
                    planning and promotional offers, expert support helps
                    travelers get more from every voyage.
                  </p>

                  <p className="Asc-help-intro">
                    Whether you're planning a milestone celebration, a holiday
                    sailing, or your very first Explora voyage, personalized
                    value guidance makes all the difference.
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
                    Expert guidance includes:
                  </h3>
                  <ul className="Asc-help-bullets">
                    {[
                      "Optimal booking-window recommendations",
                      "Exclusive luxury travel benefits",
                      "Suite and destination recommendations",
                      "Seasonal timing and promotion tracking",
                      "Luxury cruise pricing expertise",
                      "Tailored travel experiences worldwide",
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
                    Trips &amp; Ships Luxury Travel specializes in helping
                    discerning travelers maximize value on highly personalized
                    Explora Journeys experiences worldwide.
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

export default HowToGetTheBestValueOnExploraJourneys;
