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
import AboutImage from "../../assets/AboutAngela3.jpeg";

import HeroImage1 from "../../assets/HowAdvanceShouldBookExplora/explora-final-destination.jpg";
import HeroImage2 from "../../assets/HowAdvanceShouldBookExplora/explora-II.jpg";
import HeroImage4 from "../../assets/HowAdvanceShouldBookExplora/explora-III.jpg";

import ExploraDetination from "../../assets/WhichExploraSuiteWorthUpgrade/EXPLORA-CARIBBEAN.jpg";
import ExploraDetination2 from "../../assets/HowAdvanceShouldBookExplora/allinn-estonia-old-town-summer-travel-aerial.jpg";
import ExploraDetination3 from "../../assets/WhichExploraShipChoose/EXPLORA-III-PANAMA-CANAL.jpg";
import ExploraDetination4 from "../../assets/WhichExploraShipChoose/EXPLORA-III-IV-Anthology.jpg";
import ExploraDetination5 from "../../assets/WhichExploraShipChoose/mediterranean-hidden-cove-luxury-cruise-summer-2025.jpg";

import LuxuryOceanfrontSuites from "../../assets/HowAdvanceShouldBookExplora/explora-ship.jpg";
import ExploraCta from "../../assets/HowAdvanceShouldBookExplora/Luxury-Explora-Journeys.webp";
import ExploraPool from "../../assets/WhichExploraShipChoose/explora-journeys-atoll-pool-luxury-cruise-deck.jpg";
import ExploraShip from "../../assets/WhichExploraShipChoose/ExploraCruise3.webp";

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
      name: "How Far in Advance Should You Book Explora?",
      url: "https://tripsandships.com/how-far-in-advance-should-you-book-explora",
      description:
        "Learn the best time to book an Explora Journeys cruise. Discover when to reserve for the best suite selection, pricing, promotions, holiday sailings, and popular luxury itineraries.",
    },
    {
      "@type": "Article",
      headline: "How Far in Advance Should You Book Explora?",
      description:
        "A complete booking timeline guide for Explora Journeys, covering suite availability, holiday sailings, destination-specific windows, and traveler-type recommendations.",
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
          name: "How Far in Advance Should You Book Explora",
          item: "https://tripsandships.com/how-far-in-advance-should-you-book-explora",
        },
      ],
    },
    {
      "@type": "ItemList",
      name: "Explora Journeys Booking Timeline by Traveler Type",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "First-Time Explora Guests",
          description:
            "Book 12 months ahead for excellent suite and itinerary selection.",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Couples Celebrating a Milestone",
          description:
            "Book 12 to 18 months ahead, since popular suite categories sell quickly.",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Families",
          description:
            "Book 12 months ahead for flexibility around school schedules.",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Solo Travelers",
          description:
            "Book 9 to 12 months ahead to improve access to promotional solo fares.",
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Repeat Explora Guests",
          description:
            "Book as soon as preferred itineraries are released to secure favorite routes.",
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
        name: "Explora Journeys Luxury Cruise Booking Process",
      },
      author: {
        "@type": "Person",
        name: "Angela Hughes",
      },
      reviewBody:
        "Booking Explora Journeys well in advance consistently gives travelers the strongest suite selection, the widest itinerary choice, and the most flexible planning timeline.",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How far in advance should I book Explora?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most travelers should book 9 to 18 months before departure, depending on the itinerary and travel season.",
          },
        },
        {
          "@type": "Question",
          name: "Is it better to book Explora early?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Early booking generally provides better suite availability, preferred sailing dates, and greater itinerary selection.",
          },
        },
        {
          "@type": "Question",
          name: "When do holiday cruises sell out?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Christmas and New Year's sailings are among the most popular and often fill 12 to 18 months in advance.",
          },
        },
        {
          "@type": "Question",
          name: "Should I wait for last-minute deals?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "If you're flexible, last-minute opportunities occasionally arise. However, popular suites and itineraries are often unavailable by then.",
          },
        },
        {
          "@type": "Question",
          name: "Do luxury cruises increase in price?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Pricing varies, but booking early often gives travelers access to introductory fares and the widest range of accommodations.",
          },
        },
        {
          "@type": "Question",
          name: "Which suites sell out first?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Premium categories such as Residences and the Owner's Residence are usually reserved well in advance.",
          },
        },
        {
          "@type": "Question",
          name: "Is 12 months early enough?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. For most itineraries, booking about a year ahead offers an excellent balance of availability and planning flexibility.",
          },
        },
        {
          "@type": "Question",
          name: "Should first-time Explora guests use a travel advisor?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Many first-time guests find expert guidance helpful when selecting itineraries, suites, and travel arrangements.",
          },
        },
        {
          "@type": "Question",
          name: "Can I book more than a year ahead?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. Many luxury travelers reserve 18 months or more in advance, especially for special voyages and peak-season departures.",
          },
        },
        {
          "@type": "Question",
          name: "What happens after I book?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You'll have plenty of time to arrange flights, hotels, excursions, travel insurance, dining preferences, and other details before departure.",
          },
        },
        {
          "@type": "Question",
          name: "How do I secure the best suite location on Explora Journeys?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Booking early (12 to 18 months ahead) is key. This guarantees first choice of specific deck placements, proximity to elevators, and preferred views (such as aft-facing or mid-ship suites which provide the smoothest ride).",
          },
        },
        {
          "@type": "Question",
          name: "Does Explora Journeys offer early booking promotions?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, Explora Journeys regularly offers 'Early Booking Benefit' promotions that provide a discount (often up to 5-10%) on the cruise fare when booking and paying in full or depositing early in the itinerary release cycle.",
          },
        },
        {
          "@type": "Question",
          name: "What is the cancellation policy if I book far in advance?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Explora Journeys provides flexible booking policies, but cancellation fees apply depending on how close you are to departure. Booking travel insurance through your luxury travel advisor is highly recommended to protect your investment for bookings made far in advance.",
          },
        },
        {
          "@type": "Question",
          name: "Can I change my sailing date after booking?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Date changes are typically permitted under select conditions or promotions, though standard administrative fees and fare differences may apply depending on the timing of the request relative to the departure date.",
          },
        },
        {
          "@type": "Question",
          name: "When does Explora Journeys release new itineraries?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Explora Journeys generally releases new sailings and itineraries 18 to 24 months in advance, giving luxury travelers ample time to lock in maiden voyages, grand journeys, and seasonal itineraries at the lowest introductory rates.",
          },
        },
      ],
    },
  ],
};

/* ── Data: Booking window by destination (tabbed panel) ─────────── */
const bookingByDestination = [
  {
    id: "mediterranean",
    title: "Mediterranean",
    badge: "Mediterranean",
    icon: Sun,
    image: ExploraDetination5,
    window: "12–15 months ahead",
    desc: "The Mediterranean is one of Explora's most popular regions, and popular summer departures tend to fill quickly.",
    columns: [
      {
        label: "Plan Around:",
        items: [
          "Peak Summer Sailings",
          "Coastal Village Itineraries",
          "Culinary-Focused Voyages",
        ],
      },
    ],
    themeLabel: "Most In-Demand Region",
    themeText:
      "Because Mediterranean sailings are consistently popular, the best suites and dates are reserved well before the season begins.",
  },
  {
    id: "caribbean",
    title: "Caribbean",
    badge: "Caribbean",
    icon: Snowflake,
    image: ExploraDetination,
    window: "9–12 months ahead",
    desc: "Winter Caribbean sailings are highly sought after, and holiday departures often require even earlier planning.",
    columns: [
      {
        label: "Plan Around:",
        items: [
          "Winter Escape Itineraries",
          "Holiday Departures",
          "Island-Hopping Voyages",
        ],
      },
    ],
    themeLabel: "Seasonal Demand",
    themeText:
      "Winter sun-seekers book early, so reserving 9 to 12 months out keeps the widest range of suites available.",
  },
  {
    id: "northern-europe",
    title: "Northern Europe",
    badge: "Northern Europe",
    icon: Compass,
    image: ExploraDetination2,
    window: "12–15 months ahead",
    desc: "Scenic fjords, Baltic capitals, and Northern European itineraries typically operate during a shorter sailing season.",
    columns: [
      {
        label: "Plan Around:",
        items: [
          "Short Sailing Season",
          "Fjord & Baltic Routes",
          "Scandinavian Capitals",
        ],
      },
    ],
    themeLabel: "Limited Season Window",
    themeText:
      "A shorter operating season means Northern Europe itineraries fill faster relative to their number of departures.",
  },
  {
    id: "holiday",
    title: "Holiday Sailings",
    badge: "Holiday Sailings",
    icon: Gift,
    image: ExploraDetination3,
    window: "12–18 months ahead",
    desc: "Christmas, New Year's, and Easter voyages attract repeat luxury travelers, making them some of the first sailings to sell out.",
    columns: [
      {
        label: "Plan Around:",
        items: ["Christmas Cruises", "New Year's Voyages", "Easter Sailings"],
      },
    ],
    themeLabel: "Sells Out Earliest",
    themeText:
      "Repeat guests often reserve holiday sailings as soon as they're released, well over a year before departure.",
  },
];

/* ── Data: Booking timeframe cards ───────────────────────────────── */
const bookingTimeframes = [
  {
    key: "18plus",
    eyebrow: "Widest Selection",
    accent: "adg-accent-blue",
    title: "18 Months or More",
    items: [
      "Best for maiden & special voyages",
      "Widest range of departure dates",
      "Full suite category selection",
      "Ideal for Christmas & New Year's sailings",
    ],
  },
  {
    key: "12-15",
    eyebrow: "The Sweet Spot",
    accent: "adg-accent-gold",
    title: "12–15 Months",
    items: [
      "Excellent suite availability",
      "Strong itinerary selection",
      "Time to plan flights",
      "Recommended for first-time guests",
    ],
  },
  {
    key: "9-12",
    eyebrow: "Still a Great Option",
    accent: "adg-accent-green",
    title: "9–12 Months",
    items: [
      "Wide range of itineraries",
      "Multiple suite categories",
      "Attractive seasonal departures",
      "Holiday sailings may be limited",
    ],
  },
  {
    key: "last-minute",
    eyebrow: "For Flexible Travelers",
    accent: "adg-accent-silver",
    title: "Last-Minute Booking",
    items: [
      "Best with flexible travel dates",
      "Open to varied destinations",
      "Limited remaining suite categories",
      "Availability can be unpredictable",
    ],
  },
];

/* ── Data: Booking timeline by traveler type ─────────────────────── */
const travelerTimeline = [
  {
    title: "First-Time Explora Guests",
    desc: "Book 12 months ahead for excellent suite selection and itinerary choices.",
  },
  {
    title: "Couples Celebrating a Milestone",
    desc: "Book 12–18 months ahead, since popular suite categories often sell quickly.",
  },
  {
    title: "Families",
    desc: "Book 12 months ahead for more flexibility when coordinating school schedules and vacations.",
  },
  {
    title: "Solo Travelers",
    desc: "Book 9–12 months ahead to improve access to promotional solo fares when available.",
  },
  {
    title: "Repeat Explora Guests",
    desc: "Book as soon as preferred itineraries are released to secure favorite routes and accommodations.",
  },
];

/* ── FAQ Component ───────────────────────────────────────────────── */
function FAQ() {
  const [open, setOpen] = useState(null);

  const faqData = [
    {
      q: "How far in advance should I book Explora?",
      a: "Most travelers should book 9 to 18 months before departure, depending on the itinerary and travel season.",
    },
    {
      q: "Is it better to book Explora early?",
      a: "Yes. Early booking generally provides better suite availability, preferred sailing dates, and greater itinerary selection.",
    },
    {
      q: "When do holiday cruises sell out?",
      a: "Christmas and New Year's sailings are among the most popular and often fill 12 to 18 months in advance.",
    },
    {
      q: "Should I wait for last-minute deals?",
      a: "If you're flexible, last-minute opportunities occasionally arise. However, popular suites and itineraries are often unavailable by then.",
    },
    {
      q: "Do luxury cruises increase in price?",
      a: "Pricing varies, but booking early often gives travelers access to introductory fares and the widest range of accommodations.",
    },
    {
      q: "Which suites sell out first?",
      a: "Premium categories such as Residences and the Owner's Residence are usually reserved well in advance.",
    },
    {
      q: "Is 12 months early enough?",
      a: "Yes. For most itineraries, booking about a year ahead offers an excellent balance of availability and planning flexibility.",
    },
    {
      q: "Should first-time Explora guests use a travel advisor?",
      a: "Many first-time guests find expert guidance helpful when selecting itineraries, suites, and travel arrangements.",
    },
    {
      q: "Can I book more than a year ahead?",
      a: "Absolutely. Many luxury travelers reserve 18 months or more in advance, especially for special voyages and peak-season departures.",
    },
    {
      q: "What happens after I book?",
      a: "You'll have plenty of time to arrange flights, hotels, excursions, travel insurance, dining preferences, and other details before departure.",
    },
    {
      q: "How do I secure the best suite location on Explora Journeys?",
      a: "Booking early (12 to 18 months ahead) is key. This guarantees first choice of specific deck placements, proximity to elevators, and preferred views (such as aft-facing or mid-ship suites which provide the smoothest ride).",
    },
    {
      q: "Does Explora Journeys offer early booking promotions?",
      a: "Yes, Explora Journeys regularly offers 'Early Booking Benefit' promotions that provide a discount (often up to 5-10%) on the cruise fare when booking and paying in full or depositing early in the itinerary release cycle.",
    },
    {
      q: "What is the cancellation policy if I book far in advance?",
      a: "Explora Journeys provides flexible booking policies, but cancellation fees apply depending on how close you are to departure. Booking travel insurance through your luxury travel advisor is highly recommended to protect your investment for bookings made far in advance.",
    },
    {
      q: "Can I change my sailing date after booking?",
      a: "Date changes are typically permitted under select conditions or promotions, though standard administrative fees and fare differences may apply depending on the timing of the request relative to the departure date.",
    },
    {
      q: "When does Explora Journeys release new itineraries?",
      a: "Explora Journeys generally releases new sailings and itineraries 18 to 24 months in advance, giving luxury travelers ample time to lock in maiden voyages, grand journeys, and seasonal itineraries at the lowest introductory rates.",
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
const HowFarInAdvanceShouldYouBookExplora = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [readMore, setReadMore] = useState(false);
  const [activeDest, setActiveDest] = useState("mediterranean");
  const currentDest =
    bookingByDestination.find((d) => d.id === activeDest) ||
    bookingByDestination[0];

  const ActiveIcon = currentDest.icon;

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
          How Far in Advance Should You Book Explora? | Explora Journeys Booking
          Guide
        </title>
        <meta
          name="title"
          content="How Far in Advance Should You Book Explora?"
        />
        <meta
          name="description"
          content="Learn the best time to book an Explora Journeys cruise. Discover when to reserve for the best suite selection, pricing, promotions, holiday sailings, and popular luxury itineraries."
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
            How Far in Advance Should <br /> You Book Explora?
          </h1>

          <p>
            Luxury cruises are different from mainstream cruises. Instead of
            thousands of cabins and frequent departures, Explora Journeys offers
            an intimate experience with fewer guests, a limited number of
            suites, and carefully curated itineraries.
          </p>

          <p>
            For most travelers, booking 9 to 18 months before departure offers
            the best balance of suite availability, itinerary selection, and
            pricing.
          </p>

          {readMore && (
            <>
              <p>
                Because the best accommodations and most desirable sailings
                often sell out well before departure, holiday voyages, special
                sailings, and the most popular destinations can reward booking
                even earlier.
              </p>

              <p>
                According to luxury cruise expert Angela Hughes, the ideal
                booking window depends on the type of vacation you're planning —
                from itinerary and season to suite category and travel dates.
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

      {/* ── RECOMMENDED BOOKING WINDOW TABLE ────────────────────────── */}
      <section
        className="Asc-section Asc-bg-white"
        id="Asc-booking-window"
        style={{ backgroundColor: "var(--bg-white)" }}
      >
        <div className="Asc-container">
          <div className="Asc-section-header">
            <h2 className="Asc-h2">How Early Should You Book?</h2>
            <div className="Asc-accent-line"></div>
          </div>

          <p className="Asc-body-text" style={{ marginBottom: "20px" }}>
            The ideal booking window depends on the type of vacation you're
            planning. The more specific your travel preferences, the earlier you
            should reserve.
          </p>

          <div className="Asc-table-wrapper">
            <table className="Asc-fleet-table">
              <thead>
                <tr>
                  <th>Travel Type</th>
                  <th>Recommended Booking Window</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>Standard Mediterranean Cruise</strong>
                  </td>
                  <td>9–12 months</td>
                </tr>
                <tr>
                  <td>
                    <strong>Caribbean Cruises</strong>
                  </td>
                  <td>9–12 months</td>
                </tr>
                <tr>
                  <td>
                    <strong>Northern Europe</strong>
                  </td>
                  <td>12–15 months</td>
                </tr>
                <tr>
                  <td>
                    <strong>Holiday Sailings</strong>
                  </td>
                  <td>12–18 months</td>
                </tr>
                <tr>
                  <td>
                    <strong>Maiden or Special Voyages</strong>
                  </td>
                  <td>18+ months</td>
                </tr>
                <tr>
                  <td>
                    <strong>Popular Suite Categories</strong>
                  </td>
                  <td>12–18 months</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* EXPLORA CLUB VIDEO */}
      <section className="Asc-section" id="explora-club-video" style={{backgroundColor: 'var(--bg-soft)'}}>
        <div className="Asc-container">
          <div className="Asc-section-header">
            <h2 className="Asc-h2">
              Introducing <br /> Explora Club
            </h2>

            <div className="Asc-accent-line"></div>

            <p className="Asc-video-intro">
              Learn about Explora Club, the loyalty program designed to reward
              returning guests with exclusive benefits and personalized
              privileges.
            </p>
          </div>

          <div className="Asc-video-wrapper">
            <div className="Asc-video-frame">
              <iframe
                src="https://www.youtube.com/embed/C_BMby4dyDE"
                title="Introducing Explora Club | Explora Journeys Loyalty Program"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY BOOKING EARLY MATTERS ───────────────────────────────── */}
      <section className="adg-c-section adg-c-bg-white" id="adg-why-early">
        <div className="adg-c-container">
          <div className="adg-c-section-header">
            <h2 className="adg-c-h2">Why Booking Early Matters</h2>
            <div className="adg-c-accent-line"></div>
          </div>

          <div className="adg-c-overview-layout">
            {/* LEFT — Benefits */}
            <div className="adg-c-overview-icons">
              {[
                "Greater suite selection",
                "Preferred sailing dates",
                "Popular itineraries",
                "Better location choices",
                "Promotional fares",
                "Flexible planning",
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
                    Explora Journeys operates smaller ships with fewer than
                    1,000 guests — meaning naturally fewer suites than ships
                    carrying several thousand passengers.
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
                    Limited Suites, High Demand
                  </span>
                </div>
              </div>
            </div>
          </div>

          <p
            className="adg-c-body-text"
            style={{ marginTop: "2rem", textAlign: "center" }}
          >
            Luxury travelers often begin planning vacations well in advance,
            making early reservations especially important.
          </p>
        </div>
      </section>

      {/* ── BOOKING TIMEFRAME CARDS ──────────────────────────────────── */}
      <section className="adg-section" id="adg-timeframes">
        <div className="adg-container">
          <div className="adg-header">
            <h2 className="adg-h2">
              Choose the <br /> Right Booking Window
            </h2>
            <div className="adg-accent-line"></div>
            <p className="adg-intro">
              Rather than asking "is it too early," consider which window best
              matches your itinerary, season, and suite preferences.
            </p>
          </div>

          <div className="adg-grid">
            {bookingTimeframes.map((item) => (
              <div key={item.key} className={`adg-card ${item.accent}`}>
                <div className="adg-card-body">
                  <h3 className="adg-card-title">{item.title}</h3>

                  <ul className="adg-card-list">
                    {item.items.map((point, idx) => (
                      <li key={idx} className="adg-card-list-item">
                        <span className="adg-card-list-dot"></span>
                        <span className="adg-card-list-text">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="adg-card-bar"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOOKING WINDOW BY DESTINATION (TABBED) ──────────────────── */}
      <section className="luc-destinations-section" id="luc-destinations">
        <div className="luc-destinations-container">
          <div className="luc-destinations-header">
            <h2 className="luc-destinations-title">
              When Should You Book Specific Destinations?
            </h2>

            <div className="adg-c-accent-line"></div>

            <p className="luc-destinations-intro">
              Sailing demand varies by region and season. Here's when to reserve
              each of Explora's most popular itineraries.
            </p>
          </div>

          <div className="luc-dest-layout">
            <nav className="luc-dest-nav">
              {bookingByDestination.map((item) => {
                const NavIcon = item.icon;
                const isActive = activeDest === item.id;

                return (
                  <button
                    key={item.id}
                    className={`luc-dest-nav-btn ${
                      isActive ? "luc-dest-nav-btn--active" : ""
                    }`}
                    onClick={() => setActiveDest(item.id)}
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

            <div className="luc-dest-panel" key={activeDest}>
              <div className="luc-dest-img-wrap">
                <img
                  src={currentDest.image}
                  alt={currentDest.title}
                  className="luc-dest-img"
                />

                <div className="luc-dest-img-overlay">
                  <div className="luc-dest-img-icon">
                    <ActiveIcon size={22} strokeWidth={1.6} />
                  </div>

                  <span className="luc-dest-img-title">
                    {currentDest.title}
                  </span>
                </div>
              </div>

              <p className="luc-dest-panel-desc">
                <strong>Recommended booking: {currentDest.window}.</strong>{" "}
                {currentDest.desc}
              </p>

              <div className="luc-dest-columns">
                {currentDest.columns.map((col, cIdx) => (
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
                    {currentDest.themeLabel}
                  </span>

                  <p className="luc-dest-theme-note-text">
                    {currentDest.themeText}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SUITE CATEGORIES WORTH BOOKING EARLY FOR ────────────────── */}
      <section className="Lfsg-section Lfsg-bg-dark" id="Lfsg-suites">
        <div className="Lfsg-container">
          <div className="Lfsg-section-header">
            <h2 className="Lfsg-h2-white">
              Booking Early Helps You Choose the Right Suite
            </h2>
            <div className="Lfsg-accent-line-white" />
          </div>

          <div className="Lfsg-mistakes-grid">
            {[
              {
                title: "Ocean Grand Terrace Suites",
                desc: "Ideal for travelers who value extra outdoor space on their private terrace.",
              },
              {
                title: "Penthouses",
                desc: "Popular for anniversaries and longer voyages, with elevated views and amenities.",
              },
              {
                title: "Residences",
                desc: "Often booked well in advance because of their limited availability fleet-wide.",
              },
              {
                title: "Owner's Residence",
                desc: "The most exclusive accommodation onboard is typically among the first to be reserved.",
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

      {/* ── CAN YOU SAVE MONEY BY BOOKING EARLY ─────────────────────── */}
      <section className="dmg-info-section dmg-bg-soft" id="dmg-savings">
        <div className="dmg-info-container">
          <div className="dmg-info-grid">
            <div className="dmg-info-content">
              <h2 className="dmg-info-title">
                Can You Save Money by Booking Early?
              </h2>
              <div className="dmg-info-accent"></div>

              <p className="dmg-info-lead">
                Luxury cruise pricing doesn't always work like airline tickets.
                Instead of waiting for dramatic last-minute discounts, many
                travelers benefit from booking early.
              </p>

              <div className="dmg-info-features dmg-info-features-scrollable">
                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Introductory Fares
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Newly released sailings are often opened with the most
                      attractive opening pricing.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Promotional Offers
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Early reservations are well positioned to take advantage
                      of seasonal promotions as they're released.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Flexible Payment Schedules
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Booking ahead spreads deposits and final payments over a
                      longer, more comfortable timeline.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Better Suite Selection
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Even when fares stay similar, securing your preferred
                      accommodation often provides greater overall value.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="dmg-info-media">
              <div className="dmg-media-wrapper">
                <img
                  src={LuxuryOceanfrontSuites}
                  alt="Luxury oceanfront suite aboard an Explora Journeys ship"
                  className="dmg-media-img"
                />
                <div className="dmg-media-overlay"></div>

                <div className="dmg-media-badge">
                  <span>Plan Ahead, Pay Less Often</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BOOKING TIMELINE BY TRAVELER TYPE ───────────────────────── */}
      <section
        className="Asc-section Asc-bg-white"
        id="Asc-traveler-timeline"
        style={{ backgroundColor: "var(--bg-white)" }}
      >
        <div className="Asc-container">
          <div className="Asc-section-header">
            <h2 className="Asc-h2">Booking Timeline by Traveler Type</h2>
            <div className="Asc-accent-line"></div>
          </div>

          <div className="adg-c-overview-layout">
            <div className="adg-c-overview-icons">
              {travelerTimeline.map((item, i) => (
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
                    Whatever stage of planning you're in, the earlier preferred
                    itineraries are released, the more accommodation and date
                    flexibility you'll have to work with.
                  </p>
                </div>
              </div>

              <div className="adg-c-overview-image-wrap">
                <img
                  src={ExploraDetination4}
                  alt="Explora Journeys guests enjoying a luxury cruise voyage"
                  className="adg-c-overview-img"
                />
                <div className="adg-c-overview-img-overlay">
                  <span className="adg-c-overview-img-label">
                    Plan Around Your Travel Style
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SHOULD YOU USE A TRAVEL ADVISOR ─────────────────────────── */}
      <section className="adg-section" id="adg-advisor">
        <div className="adg-container">
          <div className="adg-section-header" style={{ marginBottom: "60px" }}>
            <h2 className="adg-h2">Should You Use a Travel Advisor?</h2>
            <div className="adg-accent-line"></div>
          </div>
          <div
            className="adg-split-layout"
            style={{ alignItems: "flex-start" }}
          >
            <div className="adg-content-card-side">
              <img
                src={ExploraShip}
                alt="Explora Journeys luxury cruise ship at sea"
                className="adg-side-image"
                style={{ height: "30vh", border: "1px solid var(--navy)" }}
              />
              <div className="adg-info-card">
                <div className="adg-card-meta">
                  <Award size={28} />
                  <span className="adg-meta-label">Expert Guidance</span>
                </div>
                <p className="adg-card-lead">
                  Many luxury travelers choose to work with a travel advisor
                  when booking Explora.
                </p>
                <div className="adg-card-divider"></div>
                <p className="adg-card-subtext">
                  Professional guidance can be especially valuable for
                  first-time luxury cruisers navigating suite categories, fare
                  options, and itinerary timing.
                </p>
              </div>
            </div>
            <div className="adg-list-side">
              {[
                { title: "Compare Itineraries", icon: <Compass size={20} /> },
                { title: "Select the Best Suite", icon: <Anchor size={20} /> },
                { title: "Explain Fare Options", icon: <Sparkles size={20} /> },
                {
                  title: "Identify Promotional Offers",
                  icon: <Gift size={20} />,
                },
                {
                  title: "Coordinate Flights & Hotels",
                  icon: <MapPin size={20} />,
                },
                { title: "Assist If Plans Change", icon: <Ship size={20} /> },
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

      {/* ── BOOK NOW OR WAIT ─────────────────────────────────────────── */}
      <section className="Asc-section Asc-bg-white" id="Asc-who">
        <div className="Asc-container">
          <div className="Asc-section-header">
            <h2 className="Asc-h2">When Is It Okay to Wait?</h2>
            <div className="Asc-accent-line"></div>
          </div>

          <div className="Asc-who-grid">
            <div className="Asc-who-card Asc-who-yes">
              <h3 className="Asc-who-title">Book Early If You...</h3>
              <ul className="Asc-who-list">
                {[
                  "Have a specific suite category in mind",
                  "Want a particular sailing date",
                  "Are planning a holiday or milestone voyage",
                  "Want the widest itinerary selection",
                  "Are a first-time Explora guest",
                  "Want flexible payment scheduling",
                ].map((item, i) => (
                  <li key={i}>
                    <Check size={16} className="Asc-icon-green" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="Asc-who-card Asc-who-no">
              <h3 className="Asc-who-title">Waiting May Work If You...</h3>
              <ul className="Asc-who-list">
                {[
                  "Have a highly flexible travel schedule",
                  "Aren't concerned about suite location",
                  "Are happy with any available itinerary",
                  "Are watching for occasional promotions",
                  "Can arrange flights on shorter notice",
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
            Keep in mind that popular voyages can sell out long before
            departure, particularly on the most sought-after routes.
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
                  help travelers map out exactly when to book their Explora
                  Journeys voyage to secure the suite, sailing date, and
                  itinerary that fit them best.
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
              Everything you need to know about timing your Explora Journeys
              booking.
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
                  Ready to Book Your <br /> Explora Journeys Voyage?
                </h2>
                <div className="Asc-help-accent"></div>
              </div>

              <div className="Asc-help-grid">
                <div className="Asc-help-info">
                  <p className="Asc-help-intro">
                    Connect with Angela Hughes and the expert team at Trips
                    &amp; Ships Luxury Travel for personalized guidance on
                    exactly when to book your Explora Journeys cruise.
                  </p>

                  <p className="Asc-help-intro">
                    From suite recommendations and fare timing to itinerary
                    planning and exclusive amenities, expert support helps
                    travelers secure the voyage they really want.
                  </p>

                  <p className="Asc-help-intro">
                    Whether you're planning a milestone celebration, a holiday
                    sailing, or your very first Explora voyage, personalized
                    timing guidance makes all the difference.
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
                      "Holiday and milestone voyage planning",
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
                    discerning travelers time and plan highly personalized
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

export default HowFarInAdvanceShouldYouBookExplora;
