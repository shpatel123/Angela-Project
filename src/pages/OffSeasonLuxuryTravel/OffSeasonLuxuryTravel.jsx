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
  Anchor,
  Sparkles,
  CalendarClock,
  Snowflake,
  Gift,
  Shield,
  Plane,
  Trophy,
  Flag,
  Waves,
  Mountain,
  Palmtree,
  Headset,
  HeartPulse,
  Hotel,
  Clock,
  Map,
  FileSignature,
} from "lucide-react";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela2.jpeg";

// import HeroImage1 from "../../assets/OffSeasonLuxuryTravel/private-villa-mediterranean-coast.jpg";
// import HeroImage2 from "../../assets/OffSeasonLuxuryTravel/caribbean-yacht-charter.jpg";
// import HeroImage3 from "../../assets/OffSeasonLuxuryTravel/overwater-villa-french-polynesia.jpg";

// import PrivacyImage from "../../assets/OffSeasonLuxuryTravel/private-villa-flexible-schedule.jpg";
// import DestinationHero from "../../assets/OffSeasonLuxuryTravel/mediterranean-cruise-coastline.jpg";

// import BucketMediterranean from "../../assets/OffSeasonLuxuryTravel/mediterranean-riviera-villa.jpg";
// import BucketCaribbean from "../../assets/OffSeasonLuxuryTravel/caribbean-beachfront-resort.jpg";
// import BucketHawaii from "../../assets/OffSeasonLuxuryTravel/hawaii-scenic-coastline.jpg";
// import BucketPolynesia from "../../assets/OffSeasonLuxuryTravel/french-polynesia-overwater-villa.jpg";
// import BucketSafari from "../../assets/OffSeasonLuxuryTravel/african-safari-luxury-lodge.jpg";
// import BucketNorthernEurope from "../../assets/OffSeasonLuxuryTravel/northern-europe-fjord-cruise.jpg";

// import VillaImage from "../../assets/OffSeasonLuxuryTravel/luxury-villa-private-pool.jpg";
// import IslandImage from "../../assets/OffSeasonLuxuryTravel/private-island-escape.jpg";
// import CruiseImage from "../../assets/OffSeasonLuxuryTravel/luxury-cruise-suite.jpg";
// import AdventureImage from "../../assets/OffSeasonLuxuryTravel/mountain-hiking-adventure.jpg";
// import WellnessImage from "../../assets/OffSeasonLuxuryTravel/wellness-retreat-spa.jpg";
// import AdvisorImage from "../../assets/OffSeasonLuxuryTravel/travel-advisor-planning-session.jpg";
// import CtaImage from "../../assets/OffSeasonLuxuryTravel/off-season-final-destination.jpg";

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
        "Luxury travel agency specializing in off-season vacation planning for professional athletes and their families, including private villas, luxury cruises, wellness retreats, private islands, and adventure travel.",
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
      name: "Off-Season Luxury Travel for Professional Athletes",
      url: "https://tripsandships.com/off-season-luxury-travel-for-professional-athletes",
      description:
        "Discover luxury off-season vacations for professional athletes. Explore private villas, luxury cruises, wellness retreats, private islands, adventure travel, and concierge-planned family vacations designed around your schedule.",
    },
    {
      "@type": "AboutPage",
      name: "About Off-Season Luxury Travel Planning",
      url: "https://tripsandships.com/off-season-luxury-travel-for-professional-athletes",
      description:
        "Learn how Trips & Ships Luxury Travel designs private, flexible, recovery-focused off-season vacations for professional athletes and their families.",
    },
    {
      "@type": "Service",
      serviceType:
        "Off-Season Luxury Travel Planning for Professional Athletes",
      provider: {
        "@type": "TravelAgency",
        name: "Trips & Ships Luxury Travel",
      },
      areaServed: "Worldwide",
      description:
        "Concierge-level luxury travel planning built around an athlete's limited off-season window, privacy needs, and family priorities.",
    },
    {
      "@type": "Article",
      headline: "Off-Season Luxury Travel for Professional Athletes",
      description:
        "A complete guide to off-season luxury travel for professional athletes, covering top destinations, private villas, private islands, luxury cruises, adventure travel, wellness escapes, and booking tips.",
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
          name: "Family Travel",
          item: "https://tripsandships.com/family-and-multigenerational-travel",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Off-Season Luxury Travel for Professional Athletes",
          item: "https://tripsandships.com/off-season-luxury-travel-for-professional-athletes",
        },
      ],
    },
    {
      "@type": "ItemList",
      name: "Ways Off-Season Luxury Travel Supports Professional Athletes",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Prioritize Privacy",
          description:
            "Private villas, private islands, and yacht charters keep families out of the spotlight during their limited time off.",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Build Flexible Itineraries",
          description:
            "Adjustable travel dates and personalized planning accommodate changing training and competition schedules.",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Focus on Recovery",
          description:
            "Wellness retreats combine sports massage, hydrotherapy, and mindfulness with quality family time.",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Celebrate Milestones",
          description:
            "Championship wins, retirements, and contract renewals become unforgettable trips designed around the achievement.",
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Work With a Luxury Travel Advisor",
          description:
            "Dedicated planning support manages every detail, from accommodations to concierge services, before and during the trip.",
        },
      ],
    },
    {
      "@type": "TouristTrip",
      name: "Off-Season Luxury Vacation for Professional Athletes",
      provider: {
        "@type": "Organization",
        name: "Trips & Ships Luxury Travel",
      },
      touristType: "Professional athletes and their families",
    },
    {
      "@type": "Review",
      itemReviewed: {
        "@type": "Service",
        name: "Off-Season Luxury Travel Planning",
      },
      author: {
        "@type": "Person",
        name: "Angela Hughes",
      },
      reviewBody:
        "The best off-season vacations for athletes are built around privacy, flexibility, and recovery — not just a destination. Thoughtful planning turns a short window of free time into lasting family memories.",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Why is off-season travel important for professional athletes?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It provides time for recovery, relaxation, family connection, and mental rejuvenation before returning to training and competition.",
          },
        },
        {
          "@type": "Question",
          name: "What are the best off-season destinations for athletes?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Popular options include the Mediterranean, Caribbean, Hawaii, French Polynesia, African safaris, and Northern Europe.",
          },
        },
        {
          "@type": "Question",
          name: "Are luxury cruises a good option?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Luxury cruises combine exceptional accommodations, multiple destinations, wellness amenities, and personalized service into one seamless vacation.",
          },
        },
        {
          "@type": "Question",
          name: "Why do athletes choose private villas?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Private villas provide enhanced privacy, spacious accommodations, flexible schedules, and personalized service.",
          },
        },
        {
          "@type": "Question",
          name: "Are wellness retreats beneficial?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. Wellness retreats support physical recovery, stress reduction, nutrition, and overall well-being.",
          },
        },
        {
          "@type": "Question",
          name: "How far in advance should athletes book?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Planning six to twelve months ahead generally provides the best availability, especially for luxury accommodations and peak travel periods.",
          },
        },
        {
          "@type": "Question",
          name: "Can vacations be customized around training schedules?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Luxury travel advisors create flexible itineraries designed around each athlete's unique calendar.",
          },
        },
        {
          "@type": "Question",
          name: "Are these vacations suitable for families?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Luxury family travel can be personalized for couples, young children, teenagers, grandparents, and extended families.",
          },
        },
        {
          "@type": "Question",
          name: "Should professional athletes work with a travel advisor?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Many do because expert planning saves time, reduces stress, and provides access to exclusive experiences and concierge services.",
          },
        },
        {
          "@type": "Question",
          name: "What makes off-season luxury travel different?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It focuses on privacy, flexibility, wellness, personalized service, and making the most of a limited vacation window.",
          },
        },
        {
          "@type": "Question",
          name: "How do you handle security and privacy for high-profile athletes?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We prioritize privacy and security above all else. This includes working with gated private properties, arranging private security if requested, ensuring discrete transfers, and maintaining strict confidentiality throughout the planning process.",
          },
        },
        {
          "@type": "Question",
          name: "What happens if a playoff run or training schedule changes my travel dates?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We design itineraries with high flexibility, selecting accommodations and transport options with favorable change policies and offering dedicated 24/7 concierge support to make last-minute adjustments seamless.",
          },
        },
        {
          "@type": "Question",
          name: "Can you coordinate specialized dietary and training needs while on vacation?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. We can arrange private chefs, pre-stock villas with specific nutritional requirements, and select properties or cruises with state-of-the-art fitness facilities and recovery amenities.",
          },
        },
        {
          "@type": "Question",
          name: "How are milestone celebrations, like contract signings or championship wins, customized?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We coordinate every detail of your celebration, from booking private yacht charters and arranging exclusive beach dinners to organizing bespoke family gatherings and high-end celebrations tailored to your achievements.",
          },
        },
        {
          "@type": "Question",
          name: "Can extended family and entourage travel together?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. We specialize in coordinating multi-generational and group travel, securing multi-bedroom villas, adjoining suites on luxury cruises, or chartering private yachts to ensure everyone stays comfortably together.",
          },
        },
      ],
    },
  ],
};

/* ── Data: Off-season destinations (tabbed panel) ────────────────── */
const destinationTrips = [
  {
    id: "mediterranean",
    title: "Mediterranean",
    badge: "Mediterranean",
    icon: Compass,
    // image: BucketMediterranean,
    window: "Coastal cities, fine dining, and cruising in style",
    desc: "Perfect for luxury cruising, private villas, historic cities, fine dining, and coastal relaxation along the Italian Riviera, French Riviera, Greek Islands, Amalfi Coast, and Balearic Islands.",
    columns: [
      {
        label: "Plan Around:",
        items: [
          "Italian & French Riviera",
          "Greek Islands & Amalfi Coast",
          "Balearic Islands",
        ],
      },
    ],
    themeLabel: "Coastal Elegance",
    themeText:
      "Families seeking luxury cruising, historic cities, and fine dining find the Mediterranean to be one of the most versatile off-season escapes.",
  },
  {
    id: "caribbean",
    title: "Caribbean",
    badge: "Caribbean",
    icon: Anchor,
    // image: BucketCaribbean,
    window: "Warm weather, turquoise waters, and total privacy",
    desc: "Warm weather, turquoise waters, and luxury beachfront resorts make the Caribbean one of the most popular off-season destinations — ideal for family vacations, private villas, yacht charters, island hopping, and water sports.",
    columns: [
      {
        label: "Plan Around:",
        items: [
          "Private Beachfront Villas",
          "Yacht Charters & Island Hopping",
          "Water Sports & Family Activities",
        ],
      },
    ],
    themeLabel: "Sun, Sea & Privacy",
    themeText:
      "The Caribbean remains one of the most requested off-season escapes, combining relaxation with complete privacy for the whole family.",
  },
  {
    id: "hawaii",
    title: "Hawaii",
    badge: "Hawaii",
    icon: Palmtree,
    // image: BucketHawaii,
    window: "Adventure, relaxation, and spectacular scenery",
    desc: "Combining adventure, relaxation, and spectacular scenery, Hawaii is a favorite for athletes seeking an active yet peaceful escape without leaving U.S. soil.",
    columns: [
      {
        label: "Plan Around:",
        items: [
          "Private Beachfront Resorts",
          "Volcano & Waterfall Excursions",
          "Ocean Adventures",
        ],
      },
    ],
    themeLabel: "Active Yet Peaceful",
    themeText:
      "Hawaii pairs dramatic scenery with genuine relaxation, giving families the best of adventure and downtime in one trip.",
  },
  {
    id: "french-polynesia",
    title: "French Polynesia",
    badge: "French Polynesia",
    icon: Waves,
    // image: BucketPolynesia,
    window: "Overwater villas and unmatched privacy",
    desc: "Overwater villas, crystal-clear lagoons, and unmatched privacy create an unforgettable luxury experience for families craving total seclusion.",
    columns: [
      {
        label: "Plan Around:",
        items: [
          "Overwater Bungalows",
          "Crystal-Clear Lagoons",
          "World-Class Snorkeling",
        ],
      },
    ],
    themeLabel: "Pure Island Serenity",
    themeText:
      "Families who prioritize privacy above all else often find French Polynesia to be the ultimate off-season retreat.",
  },
  {
    id: "african-safari",
    title: "African Safari",
    badge: "Safari",
    icon: Mountain,
    // image: BucketSafari,
    window: "Extraordinary wildlife encounters in complete comfort",
    desc: "Luxury safari lodges offer extraordinary wildlife encounters alongside exceptional hospitality, pairing front-row wildlife viewing with the privacy and service athlete families expect.",
    columns: [
      {
        label: "Plan Around:",
        items: [
          "Luxury Safari Lodges",
          "Private Expert Guides",
          "Dawn & Dusk Game Drives",
        ],
      },
    ],
    themeLabel: "Once-in-a-Lifetime Wildlife",
    themeText:
      "Families who want an immersive, screen-free adventure often find an African safari to be the most memorable off-season trip they take.",
  },
  {
    id: "northern-europe",
    title: "Northern Europe",
    badge: "N. Europe",
    icon: Snowflake,
    // image: BucketNorthernEurope,
    window: "Scenic cruising and cultural discovery",
    desc: "Perfect for scenic cruising, fjord exploration, and cultural experiences during the summer months, Northern Europe blends natural beauty with rich history.",
    columns: [
      {
        label: "Plan Around:",
        items: [
          "Fjord & Coastal Cruising",
          "Scandinavian Culture",
          "Summer Scenic Exploration",
        ],
      },
    ],
    themeLabel: "Scenic & Storied",
    themeText:
      "Northern Europe offers a rare combination of dramatic scenery and cultural immersion, ideal for families who love to explore.",
  },
];

/* ── FAQ Component ─────────────────────────────────────────────── */
function FAQ() {
  const [open, setOpen] = useState(null);

  const faqData = [
    {
      q: "Why is off-season travel important for professional athletes?",
      a: "It provides time for recovery, relaxation, family connection, and mental rejuvenation before returning to training and competition.",
    },
    {
      q: "What are the best off-season destinations for athletes?",
      a: "Popular options include the Mediterranean, Caribbean, Hawaii, French Polynesia, African safaris, and Northern Europe.",
    },
    {
      q: "Are luxury cruises a good option?",
      a: "Yes. Luxury cruises combine exceptional accommodations, multiple destinations, wellness amenities, and personalized service into one seamless vacation.",
    },
    {
      q: "Why do athletes choose private villas?",
      a: "Private villas provide enhanced privacy, spacious accommodations, flexible schedules, and personalized service.",
    },
    {
      q: "Are wellness retreats beneficial?",
      a: "Absolutely. Wellness retreats support physical recovery, stress reduction, nutrition, and overall well-being.",
    },
    {
      q: "How far in advance should athletes book?",
      a: "Planning six to twelve months ahead generally provides the best availability, especially for luxury accommodations and peak travel periods.",
    },
    {
      q: "Can vacations be customized around training schedules?",
      a: "Yes. Luxury travel advisors create flexible itineraries designed around each athlete's unique calendar.",
    },
    {
      q: "Are these vacations suitable for families?",
      a: "Yes. Luxury family travel can be personalized for couples, young children, teenagers, grandparents, and extended families.",
    },
    {
      q: "Should professional athletes work with a travel advisor?",
      a: "Many do because expert planning saves time, reduces stress, and provides access to exclusive experiences and concierge services.",
    },
    {
      q: "What makes off-season luxury travel different?",
      a: "It focuses on privacy, flexibility, wellness, personalized service, and making the most of a limited vacation window.",
    },
    {
      q: "How do you handle security and privacy for high-profile athletes?",
      a: "We prioritize privacy and security above all else. This includes working with gated private properties, arranging private security if requested, ensuring discrete transfers, and maintaining strict confidentiality throughout the planning process.",
    },
    {
      q: "What happens if a playoff run or training schedule changes my travel dates?",
      a: "We design itineraries with high flexibility, selecting accommodations and transport options with favorable change policies and offering dedicated 24/7 concierge support to make last-minute adjustments seamless.",
    },
    {
      q: "Can you coordinate specialized dietary and training needs while on vacation?",
      a: "Yes. We can arrange private chefs, pre-stock villas with specific nutritional requirements, and select properties or cruises with state-of-the-art fitness facilities and recovery amenities.",
    },
    {
      q: "How are milestone celebrations, like contract signings or championship wins, customized?",
      a: "We coordinate every detail of your celebration, from booking private yacht charters and arranging exclusive beach dinners to organizing bespoke family gatherings and high-end celebrations tailored to your achievements.",
    },
    {
      q: "Can extended family and entourage travel together?",
      a: "Absolutely. We specialize in coordinating multi-generational and group travel, securing multi-bedroom villas, adjoining suites on luxury cruises, or chartering private yachts to ensure everyone stays comfortably together.",
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
const OffSeasonLuxuryTravel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [readMore, setReadMore] = useState(false);
  const [activeTrip, setActiveTrip] = useState("mediterranean");
  const [hovered, setHovered] = useState(null);
  const currentTrip =
    destinationTrips.find((d) => d.id === activeTrip) || destinationTrips[0];

  const ActiveIcon = currentTrip.icon;

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
          Off-Season Luxury Travel for Professional Athletes | Exclusive Luxury
          Vacations
        </title>
        <meta
          name="title"
          content="Off-Season Luxury Travel for Professional Athletes"
        />
        <meta
          name="description"
          content="Discover luxury off-season vacations for professional athletes. Explore private villas, luxury cruises, wellness retreats, private islands, adventure travel, and concierge-planned family vacations designed around your schedule."
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
            Off-Season Luxury Travel <br /> for Professional Athletes
          </h1>

          <p>
            For professional athletes, the off-season is one of the most
            valuable times of the year. After months of competition, training,
            media appearances, and intense schedules, it's an opportunity to
            slow down and reconnect.
          </p>

          <p>
            But with only a limited amount of free time, every day counts.
            That's why many athletes choose personalized luxury travel designed
            specifically around their lifestyle — from a secluded beachfront
            villa to a luxury cruise, a wellness retreat, or a
            once-in-a-lifetime adventure.
          </p>

          {readMore && (
            <>
              <p>
                Off-season travel provides much more than a break — it offers an
                opportunity to reset. It allows time for physical recovery,
                mental wellness, family bonding, celebrating accomplishments,
                experiencing new cultures, and preparing for the next season.
              </p>

              <p>
                According to luxury travel expert Angela Hughes, athlete
                families get the most from their limited time away when every
                logistical detail is handled in advance, leaving nothing but
                relaxation and connection.
              </p>

              <p>
                With more than 40 years in the travel industry, experience
                spanning over 121 countries, and recognition as the 2024 Luxury
                Travel Influencer of the Year by Travel Leaders Network, Angela
                Hughes has become one of the most trusted voices in private,
                family-focused luxury travel.
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

      {/* ── WHY OFF-SEASON TRAVEL MATTERS ────────────────────────────── */}
      <section
        className="Asc-section Asc-bg-white"
        id="Asc-why-it-matters"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="Asc-container">
          <div className="Asc-section-header">
            <h2 className="Asc-h2">Why Off-Season Travel Matters</h2>
            <div className="Asc-accent-line"></div>
          </div>

          <p className="Asc-body-text" style={{ marginBottom: "20px" }}>
            The demands of professional sports leave little room for extended
            vacations during the competitive season. Off-season travel provides
            much more than a break — it offers an opportunity to reset. A
            thoughtfully planned vacation allows athletes to return refreshed,
            motivated, and ready for the challenges ahead.
          </p>

          <div className="adg-c-overview-icons">
            {[
              "Physical recovery",
              "Mental wellness",
              "Family bonding",
              "Celebrating accomplishments",
              "Experiencing new cultures",
              "Creating lifelong memories",
              "Preparing for the next season",
            ].map((label, i) => (
              <div key={i} className="adg-c-overview-item">
                <span className="adg-c-overview-icon">
                  <Check size={16} strokeWidth={2.5} />
                </span>
                <span className="adg-c-overview-label">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRAVEL DESIGNED AROUND YOUR SCHEDULE ─────────────────────── */}
      <section className="adg-c-section adg-c-bg-white" id="adg-c-schedule">
        <div className="adg-c-container">
          <div className="adg-c-section-header">
            <h2 className="adg-c-h2">Travel Designed Around Your Schedule</h2>
            <div className="adg-c-accent-line"></div>
          </div>

          <div className="adg-c-overview-layout">
            <div className="adg-c-overview-icons">
              {[
                "Adjustable travel dates",
                "Private transportation",
                "Personalized itineraries",
                "Flexible accommodations",
                "Concierge support",
                "Tailored experiences",
                "24/7 Travel Assistance"
              ].map((label, i) => (
                <div key={i} className="adg-c-overview-item">
                  <span className="adg-c-overview-icon">
                    <CalendarClock size={16} strokeWidth={2.5} />
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
                    Professional sports schedules can change quickly. Playoff
                    runs, international competitions, sponsorship commitments,
                    and training camps often affect travel plans — every
                    itinerary is built around your calendar, not someone else's.
                  </p>
                </div>
              </div>

              <div className="adg-c-overview-image-wrap">
                <img
                  //   src={PrivacyImage}
                  alt="Flexible off-season villa travel for professional athletes"
                  className="adg-c-overview-img"
                />
                <div className="adg-c-overview-img-overlay">
                  <span className="adg-c-overview-img-label">
                    Built Around Your Calendar
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BEST DESTINATIONS (TABBED) ─────────────────────────────── */}
      <section className="luc-destinations-section" id="luc-destinations">
        <div className="luc-destinations-container">
          <div className="luc-destinations-header">
            <h2 className="luc-destinations-title">
              Best Destinations for Off-Season Luxury Travel
            </h2>

            <div className="adg-c-accent-line"></div>

            <p className="luc-destinations-intro">
              The ideal destination depends on how you want to spend your time
              away from competition. Whether it's coastal relaxation, total
              seclusion, or an immersive cultural adventure, every trip can be
              personalized.
            </p>
          </div>

          <div className="luc-dest-layout">
            <nav className="luc-dest-nav">
              {destinationTrips.map((item) => {
                const NavIcon = item.icon;
                const isActive = activeTrip === item.id;

                return (
                  <button
                    key={item.id}
                    className={`luc-dest-nav-btn ${
                      isActive ? "luc-dest-nav-btn--active" : ""
                    }`}
                    onClick={() => setActiveTrip(item.id)}
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

            <div className="luc-dest-panel" key={activeTrip}>
              <div className="luc-dest-img-wrap">
                <img
                  src={currentTrip.image}
                  alt={currentTrip.title}
                  className="luc-dest-img"
                />

                <div className="luc-dest-img-overlay">
                  <div className="luc-dest-img-icon">
                    <ActiveIcon size={22} strokeWidth={1.6} />
                  </div>

                  <span className="luc-dest-img-title">
                    {currentTrip.title}
                  </span>
                </div>
              </div>

              <p className="luc-dest-panel-desc">
                <strong>{currentTrip.window}.</strong> {currentTrip.desc}
              </p>

              <div className="luc-dest-columns">
                {currentTrip.columns.map((col, cIdx) => (
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
                    {currentTrip.themeLabel}
                  </span>

                  <p className="luc-dest-theme-note-text">
                    {currentTrip.themeText}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CELEBRATE CAREER MILESTONES ───────────────────────────────── */}
      <section
        className="Leg-section"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="Leg-container">
          {/* Header */}
          <div className="Leg-header">
            <h2 className="Leg-title">Celebrate Career Milestones</h2>
            <div className="adg-c-accent-line"></div>
            <p className="Leg-subtitle">
              The off-season is the perfect time to celebrate achievements that
              deserve recognition. Every milestone deserves an experience as
              remarkable as the achievement itself.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="Leg-grid">
            {[
              {
                id: 1,
                accent: "gold",
                icon: Trophy,
                title: "Championship Wins",
                description:
                  "Celebrate a successful season in a truly unforgettable destination with family and friends.",
                pills: [
                  "Luxury Resorts",
                  "Private Villas",
                  "Celebration Travel",
                ],
                highlight:
                  "Celebrate an unforgettable season in extraordinary style.",
              },
              {
                id: 2,
                accent: "navy",
                icon: Flag,
                title: "Retirement",
                description:
                  "Mark the beginning of a new chapter with a once-in-a-lifetime luxury journey.",
                pills: [
                  "Bucket List Trips",
                  "Luxury Cruises",
                  "Private Escapes",
                ],
                highlight: "A memorable journey for life's next adventure.",
              },
              {
                id: 3,
                accent: "teal",
                icon: FileSignature,
                title: "Contract Renewals",
                description:
                  "Reward years of dedication with a meaningful getaway shared with the people who matter most.",
                pills: ["Family Vacations", "Luxury Hotels", "VIP Experiences"],
                highlight:
                  "Celebrate career success with a personalized itinerary.",
              },
              {
                id: 4,
                accent: "gold",
                icon: Gift,
                title: "Birthdays & Anniversaries",
                description:
                  "Personalized celebrations become even more memorable in extraordinary destinations.",
                pills: [
                  "Private Dining",
                  "Custom Experiences",
                  "Family Celebrations",
                ],
                highlight:
                  "Every milestone deserves an unforgettable destination.",
              },
            ].map((card) => {
              const Icon = card.icon;
              const isHovered = hovered === card.id;

              return (
                <div
                  key={card.id}
                  className={`Leg-card Leg-card--${card.accent} ${
                    isHovered ? "Leg-card--hovered" : ""
                  }`}
                  onMouseEnter={() => setHovered(card.id)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <div
                    className={`Leg-card-top-bar Leg-bar--${card.accent}`}
                  ></div>

                  <div
                    className={`Leg-card-icon-wrap Leg-icon--${card.accent}`}
                  >
                    <Icon size={22} strokeWidth={1.6} />
                  </div>

                  <h3 className="Leg-card-title">{card.title}</h3>

                  <p className="Leg-card-desc">{card.description}</p>

                  <div className="Leg-divider"></div>

                  <div className="Leg-pill-list">
                    {card.pills.map((pill) => (
                      <span
                        key={pill}
                        className={`Leg-pill Leg-pill--${card.accent}`}
                      >
                        {pill}
                      </span>
                    ))}
                  </div>

                  <div
                    className={`Leg-highlight Leg-highlight--${card.accent}`}
                  >
                    <Check
                      size={13}
                      strokeWidth={2.5}
                      className="Leg-check-icon"
                    />
                    <span>{card.highlight}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── LUXURY VILLAS: YOUR PRIVATE RETREAT ─────────────────────── */}
      <section
        className="ugt-components-section"
        id="luxury-villas"
        style={{ backgroundColor: "var(--bg-white)" }}
      >
        <div className="ugt-components-container">
          <div className="ugt-components-header">
            <h2 className="ugt-components-title">
              Luxury Villas: Your Private Retreat
            </h2>

            <div className="adg-c-accent-line"></div>
          </div>

          <div className="ugt-components-list">
            <div className="ugt-component-row">
              <div className="ugt-component-image-wrapper">
                <div className="ugt-component-image-container">
                  <img
                    // src={VillaImage}
                    alt="Luxury private villa retreat for professional athletes"
                    className="ugt-component-image"
                  />
                </div>
              </div>

              <div className="ugt-component-content">
                <p className="ugt-component-text">
                  For many professional athletes, privacy is one of the highest
                  priorities. Unlike traditional hotels, villas provide a true
                  home-away-from-home atmosphere where families can relax
                  together without interruption.
                </p>

                <div className="ugt-questions-box">
                  <span className="ugt-questions-title">
                    A private villa retreat includes:
                  </span>

                  <ul className="ugt-questions-list">
                    {[
                      "Exclusive Accommodations",
                      "Private Pools",
                      "Dedicated Staff",
                      "Personal Chefs",
                      "Spacious Family Living",
                      "Flexible Schedules",
                      "Enhanced Security",
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
                  A villa's flexible schedule and open layout give families room
                  to truly relax together, without the structure of a
                  traditional hotel stay.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRIVATE ISLAND ESCAPES ───────────────────────────────────── */}
      <section className="Lfsg-section Lfsg-bg-dark" id="Lfsg-private-island">
        <div className="Lfsg-container">
          <div className="Lfsg-section-header">
            <h2 className="Lfsg-h2-white">Private Island Escapes</h2>
            <div className="Lfsg-accent-line-white" />
          </div>

          <div className="Lfsg-mistakes-grid">
            {[
              {
                title: "Total Privacy",
                desc: "Complete seclusion, far from crowds and public attention.",
              },
              {
                title: "Personalized Service",
                desc: "Dedicated staff attentive to every detail of your stay.",
              },
              {
                title: "Pristine Beaches & Water Sports",
                desc: "Private excursions, luxury residences, and wellness facilities.",
              },
              {
                title: "Unmatched Exclusivity",
                desc: "The ultimate setting for celebrating a championship or simply recharging.",
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
            For athletes seeking complete seclusion, few experiences compare to
            staying on a private island.
          </p>
        </div>
      </section>

      {/* ── ADVENTURE TRAVEL ─────────────────────────────────────────── */}
      <section className="dmg-info-section dmg-bg-soft" id="dmg-adventure">
        <div className="dmg-info-container">
          <div className="dmg-info-grid">
            <div className="dmg-info-content">
              <h2 className="dmg-info-title">Adventure Travel</h2>
              <div className="dmg-info-accent"></div>

              <p className="dmg-info-lead">
                Many athletes spend their careers pushing physical limits,
                making adventure travel a natural fit during the off-season.
                Adventure itineraries can be customized to suit every fitness
                level and family interest.
              </p>

              <div className="dmg-info-features dmg-info-features-scrollable">
                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">Mountain Hiking</h3>
                    <p className="dmg-info-feature-desc">
                      Explore breathtaking landscapes with private guides.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">Scuba Diving</h3>
                    <p className="dmg-info-feature-desc">
                      Discover coral reefs and marine life in some of the
                      world's most beautiful waters.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Wildlife Expeditions
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Encounter extraordinary animals in Africa, the Galápagos,
                      or Alaska.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Glacier Exploration
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Experience dramatic landscapes through guided expeditions.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Cultural Discovery
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Private tours, local cuisine, and immersive experiences
                      create meaningful connections with each destination.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="dmg-info-media">
              <div className="dmg-media-wrapper">
                <img
                  //   src={AdventureImage}
                  alt="Mountain hiking adventure travel for professional athletes"
                  className="dmg-media-img"
                  style={{ height: "650px" }}
                />
                <div className="dmg-media-overlay"></div>

                <div className="dmg-media-badge">
                  <span>Push Limits, Then Relax</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── LUXURY CRUISES ─────────────────────────────────────────── */}
      <section
        className="dmg-info-section dmg-bg-white"
        id="dmg-luxury-cruises"
      >
        <div className="dmg-info-container">
          <div className="dmg-info-grid">
            {/* Left Side Image */}
            <div className="dmg-info-media">
              <div className="dmg-media-wrapper">
                <img
                  // src={LuxuryCruiseImage}
                  alt="Luxury cruise vacation for professional athletes and families"
                  className="dmg-media-img"
                  style={{ height: "760px" }}
                />
                <div className="dmg-media-overlay"></div>

                <div className="dmg-media-badge">
                  <span>Luxury Meets Exploration</span>
                </div>
              </div>
            </div>

            {/* Right Side Content */}
            <div className="dmg-info-content">
              <h2 className="dmg-info-title">Luxury Cruises</h2>
              <div className="dmg-info-accent"></div>

              <p className="dmg-info-lead">
                Luxury cruises offer the perfect combination of convenience,
                comfort, and exploration. Instead of moving between multiple
                hotels, families unpack once while discovering several
                incredible destinations in complete comfort.
              </p>

              <div className="dmg-info-features dmg-info-features-scrollable">
                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">Spacious Suites</h3>
                    <p className="dmg-info-feature-desc">
                      Generously designed accommodations with separate living
                      areas, premium amenities, and private balconies.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Personalized Service
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Attentive crew members deliver seamless, personalized
                      service throughout every stage of your voyage.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">Fine Dining</h3>
                    <p className="dmg-info-feature-desc">
                      Enjoy world-class cuisine with flexible dining options,
                      specialty restaurants, and exceptional culinary
                      experiences.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Wellness Facilities
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Relax and recover with luxury spas, fitness centers,
                      swimming pools, and dedicated wellness spaces.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Destination Immersion
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Visit iconic ports, charming villages, and cultural
                      landmarks without the hassle of constantly changing hotels
                      or transportation.
                    </p>
                  </div>
                </div>
              </div>

              <p className="dmg-info-lead" style={{ marginTop: "2rem" }}>
                Luxury cruises are especially appealing to families seeking the
                perfect balance of adventure, relaxation, and effortless travel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WELLNESS ESCAPES & FAMILY VACATIONS */}
      <section className="azs-entertainment-section" id="wellness-family">
        <div className="azs-container">
          <div className="azs-section-header">
            <h2 className="azs-section-title">
              Wellness Escapes &amp; Family Vacations
            </h2>
            <div className="azs-section-accent"></div>
            <p className="azs-section-subtitle">
              Reconnect, recharge, and create lasting memories with
              wellness-focused retreats and luxury family vacations designed
              around every generation.
            </p>
          </div>

          <div className="azs-entertainment-grid">
            {/* Wellness Escapes */}
            <div className="azs-entertainment-card azs-azamara-ent">
              <div className="azs-ent-header">
                <div className="azs-ent-icon-circle">
                  <HeartPulse size={24} className="azs-ent-icon" />
                </div>
                <h3 className="azs-ent-title">Wellness Escapes</h3>
              </div>

              <p className="azs-ent-intro">
                Recovery is just as important as adventure. Luxury wellness
                retreats help athletes focus on both body and mind while
                promoting long-term health in a peaceful setting.
              </p>

              <div className="azs-ent-body">
                <h4 className="azs-ent-group-title">
                  Experiences May Include:
                </h4>

                <ul className="azs-ent-list">
                  {[
                    "Sports massage",
                    "Hydrotherapy",
                    "Yoga",
                    "Meditation",
                    "Personalized fitness programs",
                    "Healthy cuisine",
                    "Sleep optimization",
                    "Mindfulness coaching",
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
                    Wellness retreats promote long-term recovery while providing
                    a relaxing environment for the entire family.
                  </p>
                </div>
              </div>
            </div>

            {/* Family Vacations */}
            <div className="azs-entertainment-card azs-seabourn-ent">
              <div className="azs-ent-header">
                <div className="azs-ent-icon-circle">
                  <Users size={24} className="azs-ent-icon" />
                </div>
                <h3 className="azs-ent-title">
                  Family Vacations That Everyone Enjoys
                </h3>
              </div>

              <p className="azs-ent-intro">
                The best off-season vacations create memories for every
                generation. Every itinerary can be customized around your
                family's interests and travel style.
              </p>

              <div className="azs-ent-body">
                <h4 className="azs-ent-group-title">
                  Luxury Family Travel Can Include:
                </h4>

                <ul className="azs-ent-list">
                  {[
                    "Children's activities",
                    "Teen adventures",
                    "Private guides",
                    "Cultural experiences",
                    "Water sports",
                    "Beach days",
                    "Wildlife encounters",
                    "Family cooking classes",
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
                    Whether traveling with young children, teenagers,
                    grandparents, or extended family, every journey can be
                    tailored to create unforgettable shared experiences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY USE A LUXURY TRAVEL ADVISOR? ─────────────────────────────── */}
      <section className="adg-section" id="adg-luxury-travel-advisor">
        <div className="adg-container">
          <div className="adg-section-header" style={{ marginBottom: "60px" }}>
            <h2 className="adg-h2">Why Use a Luxury Travel Advisor?</h2>
            <div className="adg-accent-line"></div>
          </div>

          <div
            className="adg-split-layout"
            style={{ alignItems: "flex-start" }}
          >
            {/* Left Side */}
            <div className="adg-content-card-side">
              <img
                // src={LuxuryAdvisorImage}
                alt="Luxury travel advisor planning personalized vacations for professional athletes"
                className="adg-side-image"
                style={{ height: "30vh", border: "1px solid var(--navy)" }}
              />

              <div className="adg-info-card">
                <div className="adg-card-meta">
                  <Award size={28} />
                  <span className="adg-meta-label">Expert Travel Planning</span>
                </div>

                <p className="adg-card-lead">
                  Professional athletes rely on experts throughout their
                  careers—and travel deserves the same level of expertise. A
                  luxury travel advisor handles every detail, creating seamless
                  journeys tailored to your lifestyle, schedule, and
                  preferences.
                </p>

                <div className="adg-card-divider"></div>

                <p className="adg-card-subtext">
                  With every detail professionally managed, athletes can focus
                  entirely on relaxing, reconnecting with family, and enjoying
                  their time away.
                </p>
              </div>
            </div>

            {/* Right Side */}
            <div className="adg-list-side">
              {[
                {
                  title: "Save Valuable Time",
                  icon: <Clock size={20} />,
                },
                {
                  title: "Design Personalized Itineraries",
                  icon: <Map size={20} />,
                },
                {
                  title: "Arrange Private Transportation",
                  icon: <Plane size={20} />,
                },
                {
                  title: "Secure Luxury Accommodations",
                  icon: <Hotel size={20} />,
                },
                {
                  title: "Coordinate Family Travel",
                  icon: <Users size={20} />,
                },
                {
                  title: "Recommend Wellness Experiences",
                  icon: <HeartPulse size={20} />,
                },
                {
                  title: "Provide Ongoing Support Before & During Your Trip",
                  icon: <Headset size={20} />,
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

      {/* ── BOOKING TIPS FOR PROFESSIONAL ATHLETES ─────────────────────────── */}
      <section className="ugt-advantage-section" id="booking-tips">
        <div className="ugt-advantage-container">
          <div className="ugt-advantage-header">
            <span className="ugt-advantage-eyebrow">Expert Planning</span>

            <h2 className="ugt-advantage-title">
              Booking Tips for Professional Athletes
            </h2>

            <div className="Asc-accent-line"></div>

            <p className="ugt-advantage-intro">
              Planning ahead allows you to secure the best accommodations and
              experiences. These simple strategies can help maximize your
              off-season vacation while keeping your travel stress-free and
              flexible.
            </p>
          </div>

          <div className="ugt-advantage-grid">
            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <CalendarClock size={28} strokeWidth={1.5} />
              </div>

              <h4 className="ugt-card-title">Book Early</h4>

              <p className="ugt-card-desc">
                Luxury villas, private islands, and premium cruise suites often
                sell out well in advance, especially during peak travel seasons.
              </p>
            </div>

            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <Compass size={28} strokeWidth={1.5} />
              </div>

              <h4 className="ugt-card-title">Stay Flexible</h4>

              <p className="ugt-card-desc">
                If your competition schedule changes, flexible travel
                arrangements make it easier to adjust your plans with minimal
                disruption.
              </p>
            </div>

            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <Shield size={28} strokeWidth={1.5} />
              </div>

              <h4 className="ugt-card-title">Choose Privacy</h4>

              <p className="ugt-card-desc">
                Select accommodations that prioritize discretion, security, and
                highly personalized service for complete peace of mind.
              </p>
            </div>

            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <Award size={28} strokeWidth={1.5} />
              </div>

              <h4 className="ugt-card-title">
                Work with a Luxury Travel Advisor
              </h4>

              <p className="ugt-card-desc">
                An experienced advisor coordinates flights, accommodations,
                private experiences, transportation, and concierge services.
              </p>
            </div>

            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <Sparkles size={28} strokeWidth={1.5} />
              </div>

              <h4 className="ugt-card-title">
                Balance Relaxation and Adventure
              </h4>

              <p className="ugt-card-desc">
                The best vacations combine time to recharge with opportunities
                to explore new destinations and create lasting family memories.
              </p>
            </div>
          </div>
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
                      icon: <Trophy size={16} />,
                      label:
                        "Specialist in off-season travel for professional athletes and their families",
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
                  help professional athletes and their families make the most of
                  a limited off-season window — from destination and villa
                  selection to wellness retreats and concierge planning.
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
              Everything you need to know about planning off-season luxury
              travel as a professional athlete.
            </p>
          </div>
          <FAQ />
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────────── */}
      <section className="Asc-help-section">
        <div className="Asc-help-bg-wrap">
          <img
            // src={CtaImage}
            alt="Off-season luxury travel destination for professional athletes"
            className="Asc-help-bg-img"
          />
          <div className="Asc-help-overlay"></div>
        </div>

        <div className="Asc-container">
          <div className="Asc-help-card">
            <div className="Asc-help-content">
              <div className="Asc-help-header">
                <span className="Asc-help-eyebrow">
                  Personalized Luxury Travel Planning
                </span>
                <h2 className="Asc-help-h2">
                  Ready to Plan Your <br /> Off-Season Escape?
                </h2>
                <div className="Asc-help-accent"></div>
              </div>

              <div className="Asc-help-grid">
                <div className="Asc-help-info">
                  <p className="Asc-help-intro">
                    Connect with Angela Hughes and the expert team at Trips
                    &amp; Ships Luxury Travel for personalized guidance on
                    planning a private, flexible, and unforgettable off-season
                    vacation.
                  </p>

                  <p className="Asc-help-intro">
                    From villa selection and private islands to wellness
                    retreats and milestone celebrations, expert support helps
                    athletes make the most of every valuable moment away.
                  </p>

                  <p className="Asc-help-intro">
                    Whether you're celebrating a championship, planning a
                    recovery-focused retreat, or organizing a multi-generational
                    getaway, personalized planning makes all the difference.
                  </p>

                  <div className="Asc-help-btn-container">
                    <Link
                      to="/contact"
                      className="Asc-help-cta-btn"
                      style={{ textDecoration: "none" }}
                    >
                      Start Planning Your Off-Season Escape
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
                      "Private villa & private island recommendations",
                      "Luxury cruise & adventure travel planning",
                      "Wellness & recovery retreat selection",
                      "Flexible, schedule-friendly itineraries",
                      "Milestone celebration planning",
                      "Full concierge support, start to finish",
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
                    professional athletes and their families create highly
                    personalized, private off-season travel experiences
                    worldwide.
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

export default OffSeasonLuxuryTravel;
