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
  Trophy,
  Flag,
  Waves,
  Mountain,
  Palmtree,
  Headset,
  Hotel,
  Clock,
  Map,
  Home,
  PartyPopper,
  Heart,
} from "lucide-react";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela3.jpeg";

import HeroImage1 from "../../assets/PrivateJetConciergeTravel/multigenerational-travel-professional-athletes-luxury-family-villa.webp";
import HeroImage2 from "../../assets/PrivateJetConciergeTravel/luxury-safari-expeditions-bucket-list-adventures-group.webp";
import HeroImage3 from "../../assets/PrivateJetConciergeTravel/championship-celebrations-milestone-travel-luxury-family..webp";

import TogetherImage from "../../assets/PrivateJetConciergeTravel/luxury-wellness-recovery-travel-professional-athlete-family.webp";

import BucketMediterranean from "../../assets/WhichMediterraneanItineraryIsBest/EXPLORAI-Mediterranean.jpg";
import BucketCaribbean from "../../assets/CaribbeanCruisesExploraJourneys/roatan-western-caribbean-reef.jpg";
import BucketAlaska from "../../assets/AlaskaCruisesExploraJourneys/explora-journeys-alaska-luxury-expedition-cruise.jpg";
import BucketSafari from "../../assets/PrivateJetConciergeTravel/luxury-safari-expeditions-bucket-list-adventures-group.webp";
import BucketPolynesia from "../../assets/PrivateJetConciergeTravel/championship-french-polynesia-overwater-celebration.png";
import BucketHawaii from "../../assets/PrivateJetConciergeTravel/hawaii-oceanfront-luxury-resort-private-jet-travel.webp";

import VillaImage from "../../assets/PrivateJetConciergeTravel/off-season-luxury-travel-professional-athletes-private-villa-retreat.webp";
import AdventureImage from "../../assets/PrivateJetConciergeTravel/Luxury-African-Safaris.png";
import CruiseImage from "../../assets/PrivateJetConciergeTravel/private-villas-yachts-exclusive-resorts-luxury-superyacht.webp";
import AdvisorImage from "../../assets/PrivateJetConciergeTravel/privacy-luxury-travel-advisor-client-meeting.png";
import CtaImage from "../../assets/PrivateJetConciergeTravel/championship-hero-villa-celebration-sunset.png";

import { Helmet } from "react-helmet-async";

import "../LuxuryExploraJourneysGuide/LuxuryExploraJourneysGuide.css";

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
        "Luxury travel agency specializing in multigenerational vacation planning for professional athletes and their families, including private villas, luxury cruises, private islands, wellness experiences, and concierge travel planning.",
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
      name: "Multigenerational Travel for Professional Athletes",
      url: "https://tripsandships.com/multigenerational-travel-for-professional-athletes",
      description:
        "Discover luxury multigenerational travel for professional athletes. Plan unforgettable vacations with parents, grandparents, children, siblings, and extended family through private villas, luxury cruises, custom itineraries, and concierge travel planning.",
    },
    {
      "@type": "AboutPage",
      name: "About Multigenerational Travel Planning",
      url: "https://tripsandships.com/multigenerational-travel-for-professional-athletes",
      description:
        "Learn how Trips & Ships Luxury Travel designs private, flexible, multigenerational vacations for professional athletes and their extended families.",
    },
    {
      "@type": "Service",
      serviceType:
        "Multigenerational Luxury Travel Planning for Professional Athletes",
      provider: {
        "@type": "TravelAgency",
        name: "Trips & Ships Luxury Travel",
      },
      areaServed: "Worldwide",
      description:
        "Concierge-level luxury travel planning built to bring parents, grandparents, children, and extended family together in one extraordinary destination.",
    },
    {
      "@type": "Article",
      headline: "Multigenerational Travel for Professional Athletes",
      description:
        "A complete guide to multigenerational luxury travel for professional athletes, covering top destinations, private villas, private islands, luxury cruises, bucket-list adventures, wellness experiences, and family milestone celebrations.",
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
          name: "Multigenerational Travel for Professional Athletes",
          item: "https://tripsandships.com/multigenerational-travel-for-professional-athletes",
        },
      ],
    },
    {
      "@type": "ItemList",
      name: "Ways Multigenerational Travel Supports Professional Athlete Families",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Bring Every Generation Together",
          description:
            "Personalized itineraries ensure parents, grandparents, siblings, and children all feel included in one destination.",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Choose Spacious, Private Accommodations",
          description:
            "Villas and suites give every generation their own space while remaining under one roof.",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Build Flexible, Age-Friendly Itineraries",
          description:
            "Activities can be tailored so grandparents, parents, teens, and young children each enjoy the trip in their own way.",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Celebrate Family Milestones",
          description:
            "Championship wins, retirements, birthdays, anniversaries, and reunions become unforgettable shared experiences.",
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Work With a Luxury Travel Advisor",
          description:
            "Dedicated planning support coordinates flights, accommodations, dining, and celebrations for the whole family.",
        },
      ],
    },
    {
      "@type": "TouristTrip",
      name: "Multigenerational Luxury Vacation for Professional Athletes",
      provider: {
        "@type": "Organization",
        name: "Trips & Ships Luxury Travel",
      },
      touristType: "Professional athletes and their extended families",
    },
    {
      "@type": "Review",
      itemReviewed: {
        "@type": "Service",
        name: "Multigenerational Travel Planning",
      },
      author: {
        "@type": "Person",
        name: "Angela Hughes",
      },
      reviewBody:
        "The best multigenerational vacations are built around flexibility, privacy, and shared moments — not just a destination. Thoughtful planning turns limited off-season time into memories a family will share for generations.",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is multigenerational luxury travel?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It involves vacations designed for multiple generations of a family — including grandparents, parents, children, and extended relatives — while providing luxury accommodations, personalized experiences, and activities for every age.",
          },
        },
        {
          "@type": "Question",
          name: "Why is multigenerational travel popular with professional athletes?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Athletes have limited time away from competition, making shared family vacations an ideal way to reconnect and celebrate together.",
          },
        },
        {
          "@type": "Question",
          name: "What destinations work best for extended families?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Mediterranean, Caribbean, Hawaii, Alaska, African safaris, and luxury cruises are among the most popular choices.",
          },
        },
        {
          "@type": "Question",
          name: "Are private villas better than hotels?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For many larger families, yes. Villas offer greater privacy, shared living spaces, personalized service, and flexibility.",
          },
        },
        {
          "@type": "Question",
          name: "Are luxury cruises good for multiple generations?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. Cruises combine accommodations, dining, entertainment, and transportation while offering activities for every age group.",
          },
        },
        {
          "@type": "Question",
          name: "How far in advance should families book?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Planning 9–12 months ahead is recommended, especially for luxury villas, holiday travel, and premium cruise suites.",
          },
        },
        {
          "@type": "Question",
          name: "Can travel plans accommodate changing athletic schedules?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Experienced luxury travel advisors can recommend flexible booking options and adjust itineraries if needed.",
          },
        },
        {
          "@type": "Question",
          name: "Are wellness experiences available for athletes?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Many luxury resorts and cruise lines offer spas, fitness facilities, healthy dining, and recovery-focused wellness programs.",
          },
        },
        {
          "@type": "Question",
          name: "Can milestone celebrations be included?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Luxury travel can be customized for championship celebrations, anniversaries, birthdays, retirements, and family reunions.",
          },
        },
        {
          "@type": "Question",
          name: "Is using a travel advisor worthwhile?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For larger family groups and busy professional athletes, expert planning often saves significant time while creating a smoother, more enjoyable travel experience.",
          },
        },
      ],
    },
  ],
};

/* ── Data: Destinations perfect for athlete families (tabbed panel) ── */
const destinationTrips = [
  {
    id: "mediterranean",
    title: "Mediterranean",
    badge: "Mediterranean",
    icon: Compass,
    image: BucketMediterranean,
    window: "Elegant coastal towns and world-class dining",
    desc: "Elegant coastal towns, luxury villas, private yachts, and world-class dining make the Mediterranean a favorite for extended families exploring at a relaxed pace.",
    columns: [
      {
        label: "Plan Around:",
        items: [
          "Coastal Villa Stays",
          "Private Yacht Charters",
          "Historic Villages & Cities",
        ],
      },
    ],
    themeLabel: "Timeless Elegance",
    themeText:
      "Grandparents, parents, and children alike find something to love in the Mediterranean's mix of culture, cuisine, and coastline.",
  },
  {
    id: "caribbean",
    title: "Caribbean",
    badge: "Caribbean",
    icon: Anchor,
    image: BucketCaribbean,
    window: "Relaxed island escapes for every generation",
    desc: "Relaxed island escapes with private beaches and warm weather year-round make the Caribbean an easy, low-stress choice for gathering the whole family.",
    columns: [
      {
        label: "Plan Around:",
        items: [
          "Private Beachfront Villas",
          "Family-Friendly Resorts",
          "Water Sports & Island Hopping",
        ],
      },
    ],
    themeLabel: "Sun, Sand & Simplicity",
    themeText:
      "The Caribbean's warm weather and relaxed pace make it one of the easiest destinations for coordinating a large family group.",
  },
  {
    id: "alaska",
    title: "Alaska",
    badge: "Alaska",
    icon: Snowflake,
    image: BucketAlaska,
    window: "Glaciers, wildlife, and scenic cruising",
    desc: "An unforgettable destination featuring glaciers, wildlife, and scenic cruising, Alaska delivers glacier cruising, whale watching, and wildlife encounters that create shared memories across generations.",
    columns: [
      {
        label: "Plan Around:",
        items: [
          "Glacier & Coastal Cruising",
          "Whale Watching Excursions",
          "Wildlife Encounters",
        ],
      },
    ],
    themeLabel: "Nature on a Grand Scale",
    themeText:
      "Few destinations impress every generation the way Alaska's glaciers and wildlife do, making it a favorite for family expeditions.",
  },
  {
    id: "french-polynesia",
    title: "French Polynesia",
    badge: "French Polynesia",
    icon: Waves,
    image: BucketPolynesia,
    window: "Exceptional privacy and natural beauty",
    desc: "Exceptional privacy and breathtaking natural beauty make French Polynesia ideal for extended families who want total seclusion together.",
    columns: [
      {
        label: "Plan Around:",
        items: [
          "Overwater Villas",
          "Crystal-Clear Lagoons",
          "Private Family Excursions",
        ],
      },
    ],
    themeLabel: "Pure Island Serenity",
    themeText:
      "Families who prioritize privacy above all else often find French Polynesia to be the ultimate multigenerational retreat.",
  },
  {
    id: "african-safari",
    title: "African Safari",
    badge: "Safari",
    icon: Mountain,
    image: BucketSafari,
    window: "Luxury lodges and wildlife for every generation",
    desc: "Luxury lodges, wildlife encounters, and educational experiences for every generation make an African safari one of the most memorable multigenerational adventures a family can take.",
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
      "Children discover wildlife for the first time while grandparents experience breathtaking landscapes together.",
  },
  {
    id: "hawaii",
    title: "Hawaii",
    badge: "Hawaii",
    icon: Palmtree,
    image: BucketHawaii,
    objectPosition: "center 40%",
    window: "Adventure, relaxation, and culture in one place",
    desc: "Adventure, relaxation, culture, and beautiful beaches in one destination make Hawaii an easy favorite for families spanning multiple generations.",
    columns: [
      {
        label: "Plan Around:",
        items: [
          "Private Beachfront Resorts",
          "Volcano & Waterfall Excursions",
          "Cultural Experiences",
        ],
      },
    ],
    themeLabel: "Something for Everyone",
    themeText:
      "Hawaii combines beaches, volcanoes, waterfalls, and cultural experiences suitable for every age in the family.",
  },
];

/* ── FAQ Component ─────────────────────────────────────────────── */
function FAQ() {
  const [open, setOpen] = useState(null);

  const faqData = [
    {
      q: "What is multigenerational luxury travel?",
      a: "It involves vacations designed for multiple generations of a family — including grandparents, parents, children, and extended relatives — while providing luxury accommodations, personalized experiences, and activities for every age.",
    },
    {
      q: "Why is multigenerational travel popular with professional athletes?",
      a: "Athletes have limited time away from competition, making shared family vacations an ideal way to reconnect and celebrate together.",
    },
    {
      q: "What destinations work best for extended families?",
      a: "The Mediterranean, Caribbean, Hawaii, Alaska, African safaris, and luxury cruises are among the most popular choices.",
    },
    {
      q: "Are private villas better than hotels?",
      a: "For many larger families, yes. Villas offer greater privacy, shared living spaces, personalized service, and flexibility.",
    },
    {
      q: "Are luxury cruises good for multiple generations?",
      a: "Absolutely. Cruises combine accommodations, dining, entertainment, and transportation while offering activities for every age group.",
    },
    {
      q: "How far in advance should families book?",
      a: "Planning 9–12 months ahead is recommended, especially for luxury villas, holiday travel, and premium cruise suites.",
    },
    {
      q: "Can travel plans accommodate changing athletic schedules?",
      a: "Yes. Experienced luxury travel advisors can recommend flexible booking options and adjust itineraries if needed.",
    },
    {
      q: "Are wellness experiences available for athletes?",
      a: "Many luxury resorts and cruise lines offer spas, fitness facilities, healthy dining, and recovery-focused wellness programs.",
    },
    {
      q: "Can milestone celebrations be included?",
      a: "Yes. Luxury travel can be customized for championship celebrations, anniversaries, birthdays, retirements, and family reunions.",
    },
    {
      q: "Is using a travel advisor worthwhile?",
      a: "For larger family groups and busy professional athletes, expert planning often saves significant time while creating a smoother, more enjoyable travel experience.",
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
const MultigenerationalTravel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [readMore, setReadMore] = useState(false);
  const [activeTrip, setActiveTrip] = useState("mediterranean");
  const [hovered, setHovered] = useState(null);
  const currentTrip =
    destinationTrips.find((d) => d.id === activeTrip) || destinationTrips[0];

  const ActiveIcon = currentTrip.icon;

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
          Multigenerational Travel for Professional Athletes | Luxury Family
          Vacations
        </title>
        <meta
          name="title"
          content="Multigenerational Travel for Professional Athletes"
        />
        <meta
          name="description"
          content="Discover luxury multigenerational travel for professional athletes. Plan unforgettable vacations with parents, grandparents, children, siblings, and extended family through private villas, luxury cruises, custom itineraries, and concierge travel planning."
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
            Multigenerational Travel <br /> for Professional Athletes
          </h1>

          <p>
            Success in professional sports is rarely achieved alone. Behind
            every athlete is a support system of parents, siblings,
            grandparents, spouses, and children who make every season possible.
          </p>

          <p>
            The off-season offers a rare chance to bring everyone together.
            Luxury multigenerational travel allows professional athletes to
            celebrate these relationships through unforgettable experiences
            designed for every generation.
          </p>

          {readMore && (
            <>
              <p>
                Instead of planning separate vacations, many athletes now choose
                multigenerational travel because it allows everyone to reconnect
                in one extraordinary destination — whether it's a private villa
                overlooking the Mediterranean, a luxury cruise through Alaska,
                or an exclusive safari adventure.
              </p>

              <p>
                According to luxury travel expert Angela Hughes, the families
                who get the most from these trips are the ones who let every
                generation participate at their own pace, coming together for
                shared meals and celebrations each day.
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

            {/* ── BRINGING EVERY GENERATION TOGETHER ───────────────────────── */}
      <section className="adg-c-section adg-c-bg-white" id="adg-c-together">
        <div className="adg-c-container">
          <div className="adg-c-section-header">
            <h2 className="adg-c-h2">Bringing Every Generation Together</h2>
            <div className="adg-c-accent-line"></div>
          </div>

          <div className="adg-c-overview-layout">
            <div className="adg-c-overview-icons">
              {[
                "Parents",
                "Grandparents",
                "Brothers and sisters",
                "Spouses",
                "Young children",
                "Teenagers",
                "Cousins",
                "Close family friends",
              ].map((label, i) => (
                <div key={i} className="adg-c-overview-item">
                  <span className="adg-c-overview-icon">
                    <Users size={16} strokeWidth={2.5} />
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
                    A personalized itinerary ensures every traveler feels
                    included. Some family members may spend the morning relaxing
                    by the pool while others explore local culture or join
                    private excursions, before coming together for memorable
                    evenings.
                  </p>
                </div>
              </div>

              <div className="adg-c-overview-image-wrap">
                <img
                  src={TogetherImage}
                  alt="Multiple generations of an athlete's family gathering at a private villa"
                  className="adg-c-overview-img"
                />
                <div className="adg-c-overview-img-overlay">
                  <span className="adg-c-overview-img-label">
                    Everyone Included, Every Age
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY MULTIGENERATIONAL TRAVEL IS GROWING ──────────────────── */}
      <section
        className="Asc-section Asc-bg-white"
        id="Asc-why-its-growing"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="Asc-container">
          <div className="Asc-section-header">
            <h2 className="Asc-h2">Why Multigenerational Travel Is Growing</h2>
            <div className="Asc-accent-line"></div>
          </div>

          <p className="Asc-body-text" style={{ marginBottom: "20px" }}>
            Training camps, competitions, media obligations, sponsorship
            commitments, and travel schedules make quality family time
            difficult. Instead of planning separate vacations, many athletes now
            choose multigenerational travel because it allows everyone to
            reconnect in one extraordinary destination.
          </p>

          <div className="adg-c-overview-icons">
            {[
              "More time together",
              "Shared experiences",
              "Celebrating family milestones",
              "Easier vacation planning",
              "Luxury accommodations for every age",
              "Creating lifelong memories",
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




      {/* ── DESTINATIONS PERFECT FOR ATHLETE FAMILIES (TABBED) ───────── */}
      <section className="luc-destinations-section" id="luc-destinations">
        <div className="luc-destinations-container">
          <div className="luc-destinations-header">
            <h2 className="luc-destinations-title">
              Destinations Perfect for Athlete Families
            </h2>

            <div className="adg-c-accent-line"></div>

            <p className="luc-destinations-intro">
              The right destination brings every generation together
              comfortably. Whether it's coastal elegance, total seclusion, or a
              wildlife-filled adventure, every trip can be personalized for your
              extended family.
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
                  style={{ objectPosition: currentTrip.objectPosition || "center" }}
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

      
      {/* WHY PROFESSIONAL ATHLETES NEED A DIFFERENT APPROACH */}
      <section
        className="wnf-section wnf-bg-white"
        id="professional-athlete-travel"
      >
        <div className="wnf-container">
          <div className="wnf-section-header">
            <h2 className="wnf-h2">
              Why Professional Athletes Need a Different Approach
            </h2>
            <div className="wnf-accent-line"></div>
          </div>

          <div className="wnf-split">
            <div className="la-image-column">
              <div className="la-image-wrap">
                <img
                  src={HeroImage3}
                  alt="Luxury family vacation planning for professional athletes"
                  className="la-image"
                />
                <div className="la-image-overlay"></div>
              </div>
            </div>

            {/* Right Column */}
            <div className="wnf-content-column">
              <div className="wnf-block">
                <p className="wnf-lead-text">
                  Planning a vacation for one family can be challenging.
                  Planning for three generations with a professional athlete's
                  schedule requires even greater expertise.
                </p>

                <ul className="wnf-feature-list">
                  {[
                    "Limited off-season availability",
                    "Last-minute schedule changes",
                    "Privacy requirements",
                    "Security considerations",
                    "Multiple arrival cities",
                    "Children's school calendars",
                    "Wellness and recovery needs",
                    "Personalized experiences",
                  ].map((feature, i) => (
                    <li key={i} className="wnf-feature-item">
                      <div className="wnf-icon-wrapper">
                        <Check size={14} />
                      </div>
                      <span className="wnf-feature-text">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="wnf-footer-note">
                <p className="wnf-highlight-text">
                  Every detail is carefully coordinated so families can focus
                  entirely on spending quality time together.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CELEBRATING FAMILY MILESTONES ───────────────────────────── */}
      <section
        className="Leg-section"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="Leg-container">
          {/* Header */}
          <div className="Leg-header">
            <h2 className="Leg-title">Celebrating Family Milestones</h2>
            <div className="adg-c-accent-line"></div>
            <p className="Leg-subtitle">
              Luxury multigenerational travel is perfect for marking life's
              biggest moments. Every celebration becomes even more meaningful
              when shared together.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="Leg-grid">
            {[
              {
                id: 1,
                accent: "gold",
                icon: Trophy,
                title: "Championship Victories",
                description:
                  "Thank the family members who supported every season with an unforgettable destination getaway.",
                pills: [
                  "Luxury Resorts",
                  "Private Villas",
                  "Celebration Travel",
                ],
                highlight: "Celebrate an unforgettable season together.",
              },
              {
                id: 2,
                accent: "navy",
                icon: Flag,
                title: "Retirement",
                description:
                  "Celebrate the next chapter surrounded by the loved ones who made every season possible.",
                pills: [
                  "Bucket List Trips",
                  "Luxury Cruises",
                  "Private Escapes",
                ],
                highlight: "A memorable journey shared with family.",
              },
              {
                id: 3,
                accent: "teal",
                icon: PartyPopper,
                title: "Milestone Birthdays",
                description:
                  "Bring multiple generations together for an unforgettable celebration in an extraordinary setting.",
                pills: ["Family Vacations", "Luxury Hotels", "VIP Experiences"],
                highlight: "Every generation, one unforgettable party.",
              },
              {
                id: 4,
                accent: "gold",
                icon: Heart,
                title: "Anniversaries",
                description:
                  "Create lasting memories with the entire family in a destination that reflects the occasion.",
                pills: [
                  "Private Dining",
                  "Custom Experiences",
                  "Family Celebrations",
                ],
                highlight: "Celebrate love and family together.",
              },
              {
                id: 5,
                accent: "navy",
                icon: Home,
                title: "Family Reunions",
                description:
                  "Reconnect relatives from around the world in one extraordinary destination built for everyone.",
                pills: [
                  "Large Villas",
                  "Group Itineraries",
                  "Shared Celebrations",
                ],
                highlight: "Everyone, together, in one place.",
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

      {/* ── LUXURY VILLAS FOR EXTENDED FAMILIES ──────────────────────── */}
      <section
        className="ugt-components-section"
        id="luxury-villas"
        style={{ backgroundColor: "var(--bg-white)" }}
      >
        <div className="ugt-components-container">
          <div className="ugt-components-header">
            <h2 className="ugt-components-title">
              Luxury Villas for Extended Families
            </h2>

            <div className="adg-c-accent-line"></div>
          </div>

          <div className="ugt-components-list">
            <div className="ugt-component-row">
              <div className="ugt-component-image-wrapper">
                <div className="ugt-component-image-container">
                  <img
                    src={VillaImage}
                    alt="Luxury villa for extended athlete families"
                    className="ugt-component-image"
                  />
                </div>
              </div>

              <div className="ugt-component-content">
                <p className="ugt-component-text">
                  Private villas remain one of the most popular choices for
                  athlete families. Unlike traditional hotels, villas provide
                  space for everyone while maintaining privacy — creating an
                  atmosphere that feels more like home than a hotel.
                </p>

                <div className="ugt-questions-box">
                  <span className="ugt-questions-title">
                    A great extended-family villa includes:
                  </span>

                  <ul className="ugt-questions-list">
                    {[
                      "Spacious Living Areas",
                      "Multiple Bedrooms",
                      "Private Pool",
                      "Personal Chef",
                      "Dedicated Staff",
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
                  Large gathering spaces encourage family meals, conversations,
                  and celebrations, while everyone enjoys their own private
                  retreat under one roof.
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
                title: "Luxury Beachfront Residences",
                desc: "Personalized service and private beaches for the whole family.",
              },
              {
                title: "Water Sports & Boat Excursions",
                desc: "Activities for every generation, from young children to grandparents.",
              },
              {
                title: "Family Dining Experiences",
                desc: "Shared meals and sunset celebrations in an exclusive setting.",
              },
              {
                title: "Wellness Facilities",
                desc: "Relaxation and recovery available for every member of the family.",
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
            Private islands allow athlete families to disconnect from the public
            spotlight while reconnecting with one another.
          </p>
        </div>
      </section>

      {/* ── BUCKET-LIST ADVENTURES FOR EVERY GENERATION ─────────────── */}
      <section className="dmg-info-section dmg-bg-soft" id="dmg-bucket-list">
        <div className="dmg-info-container">
          <div className="dmg-info-grid">
            <div className="dmg-info-content">
              <h2 className="dmg-info-title">
                Bucket-List Adventures for Every Generation
              </h2>
              <div className="dmg-info-accent"></div>

              <p className="dmg-info-lead">
                The most memorable vacations often include extraordinary
                experiences. These journeys become stories that families share
                for generations.
              </p>

              <div className="dmg-info-features dmg-info-features-scrollable">
                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">African Safari</h3>
                    <p className="dmg-info-feature-desc">
                      Children discover wildlife for the first time while
                      grandparents experience breathtaking landscapes together.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Alaska Expedition
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Glacier cruising, whale watching, and wildlife encounters
                      create unforgettable shared memories.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Mediterranean Cruise
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Explore charming villages, historic cities, and coastal
                      destinations at a relaxed pace.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Hawaiian Adventure
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Combine beaches, volcanoes, waterfalls, and cultural
                      experiences suitable for every age.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      European Heritage Journey
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Visit destinations connected to your family's history with
                      luxury accommodations and private guides.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="dmg-info-media">
              <div className="dmg-media-wrapper">
                <img
                  src={AdventureImage}
                  alt="Multigenerational family on an African safari adventure"
                  className="dmg-media-img"
                  style={{ height: "650px" }}
                />
                <div className="dmg-media-overlay"></div>

                <div className="dmg-media-badge">
                  <span>Stories Shared for Generations</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── LUXURY CRUISES EVERYONE CAN ENJOY ─────────────────────────── */}
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
                  src={CruiseImage}
                  alt="Luxury cruise suite for multigenerational athlete family travel"
                  className="dmg-media-img"
                  style={{ height: "760px" }}
                />
                <div className="dmg-media-overlay"></div>

                <div className="dmg-media-badge">
                  <span>One Ship, Every Generation</span>
                </div>
              </div>
            </div>

            {/* Right Side Content */}
            <div className="dmg-info-content">
              <h2 className="dmg-info-title">
                Luxury Cruises Everyone Can Enjoy
              </h2>
              <div className="dmg-info-accent"></div>

              <p className="dmg-info-lead">
                Luxury cruises are an excellent choice for multigenerational
                families because they offer something for every age group.
                Instead of coordinating transportation between destinations, the
                ship becomes your floating luxury resort.
              </p>

              <div className="dmg-info-features dmg-info-features-scrollable">
                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">Spacious Suites</h3>
                    <p className="dmg-info-feature-desc">
                      Generously designed accommodations for the whole family to
                      unwind in comfort.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Children's Programs
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Age-appropriate activities keep the youngest travelers
                      entertained.
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
                      Spas and relaxation areas let parents unwind while
                      grandparents enjoy scenic cruising.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Entertainment & Shore Excursions
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Onboard activities for teenagers and curated excursions
                      the whole family can share.
                    </p>
                  </div>
                </div>
              </div>

              <p className="dmg-info-lead" style={{ marginTop: "2rem" }}>
                Grandparents can enjoy scenic cruising, parents can unwind at
                the spa, teenagers can explore onboard activities, and children
                can join age-appropriate programs — all before gathering
                together for dinner.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══ WELLNESS & CONCIERGE PLANNING ═══════════════════════ */}
      <section
        className="adg-c-section adg-c-bg-soft"
        id="wellness-family-concierge"
      >
        <div className="adg-c-container">
          <div className="adg-c-section-header">
            <span className="adg-c-eyebrow">Luxury Family Travel</span>

            <h2 className="adg-c-h2">Wellness for Every Family Member</h2>

            <div className="adg-c-accent-line"></div>

            <p className="Asc-section-intro">
              Luxury travel isn't only about sightseeing. It's about helping
              every traveler return home refreshed. Athletes can continue
              focusing on recovery while the rest of the family enjoys a
              relaxing vacation.
            </p>
          </div>

          <div className="adg-c-venues-grid1">
            {[
              {
                id: 1,
                eyebrow: "Wellness Experiences",
                name: "Wellness for Every Family Member",
                highlight: "Relax, Recover & Reconnect",
                items: [
                  "Luxury spas",
                  "Yoga sessions",
                  "Fitness centers",
                  "Healthy dining",
                  "Meditation",
                  "Nature walks",
                  "Outdoor relaxation",
                  "Recovery treatments",
                ],
                callout:
                  "Every family member can enjoy personalized wellness experiences while athletes prioritize recovery and relaxation.",
              },
              {
                id: 2,
                eyebrow: "Expert Coordination",
                name: "Concierge Planning Makes Everything Easier",
                highlight: "Every Detail Professionally Managed",
                items: [
                  "International flights",
                  "Private aviation",
                  "Airport transfers",
                  "Luxury accommodations",
                  "Cruise reservations",
                  "Dining experiences",
                  "Private excursions",
                  "Family celebrations",
                  "Childcare arrangements",
                  "Special requests",
                ],
                callout:
                  "With every detail professionally managed, athletes can focus on what matters most—spending quality time with family.",
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

      {/* ── TIPS FOR A SUCCESSFUL MULTIGENERATIONAL VACATION ─────────── */}
      <section className="ugt-advantage-section" id="planning-tips">
        <div className="ugt-advantage-container">
          <div className="ugt-advantage-header">
            <span className="ugt-advantage-eyebrow">Expert Planning</span>

            <h2 className="ugt-advantage-title">
              Tips for Planning a Successful Multigenerational Vacation
            </h2>

            <div className="Asc-accent-line"></div>

            <p className="ugt-advantage-intro">
              Large villas, luxury cruise suites, and holiday travel dates often
              book well in advance. These simple strategies help every
              generation enjoy the trip.
            </p>
          </div>

          <div className="ugt-advantage-grid">
            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <CalendarClock size={28} strokeWidth={1.5} />
              </div>

              <h4 className="ugt-card-title">Plan Early</h4>

              <p className="ugt-card-desc">
                Large villas, luxury cruise suites, and holiday travel dates
                often book well in advance.
              </p>
            </div>

            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <Compass size={28} strokeWidth={1.5} />
              </div>

              <h4 className="ugt-card-title">Choose Flexible Activities</h4>

              <p className="ugt-card-desc">
                Allow every generation to participate at their own pace
                throughout the trip.
              </p>
            </div>

            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <Sparkles size={28} strokeWidth={1.5} />
              </div>

              <h4 className="ugt-card-title">Build in Downtime</h4>

              <p className="ugt-card-desc">
                Avoid overscheduling so everyone has time to relax between
                activities.
              </p>
            </div>

            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <Users size={28} strokeWidth={1.5} />
              </div>

              <h4 className="ugt-card-title">Celebrate Together</h4>

              <p className="ugt-card-desc">
                Plan shared dinners, sunset cruises, or private events that
                bring everyone together each day.
              </p>
            </div>

            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <Award size={28} strokeWidth={1.5} />
              </div>

              <h4 className="ugt-card-title">
                Work With a Luxury Travel Advisor
              </h4>

              <p className="ugt-card-desc">
                Expert planning ensures every traveler enjoys a personalized
                experience while reducing stress for the whole family.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY WORK WITH A LUXURY TRAVEL ADVISOR? ────────────────────── */}
      <section className="adg-section" id="adg-luxury-travel-advisor">
        <div className="adg-container">
          <div className="adg-section-header" style={{ marginBottom: "60px" }}>
            <h2 className="adg-h2">Why Work With a Luxury Travel Advisor?</h2>
            <div className="adg-accent-line"></div>
          </div>

          <div
            className="adg-split-layout"
            style={{ alignItems: "flex-start" }}
          >
            {/* Left Side */}
            <div className="adg-content-card-side">
              <img
                src={AdvisorImage}
                alt="Luxury travel advisor planning a multigenerational family vacation"
                className="adg-side-image"
                style={{ height: "30vh", border: "1px solid var(--navy)" }}
              />

              <div className="adg-info-card">
                <div className="adg-card-meta">
                  <Award size={28} />
                  <span className="adg-meta-label">Trusted Expertise</span>
                </div>

                <p className="adg-card-lead">
                  Professional athletes trust specialists throughout their
                  careers. Luxury travel deserves the same level of expertise,
                  resulting in a vacation that's effortless, personalized, and
                  memorable for everyone.
                </p>

                <div className="adg-card-divider"></div>

                <p className="adg-card-subtext">
                  Rather than coordinating complex family logistics alone,
                  athletes receive carefully curated itineraries built for every
                  generation.
                </p>
              </div>
            </div>

            {/* Right Side */}
            <div className="adg-list-side">
              {[
                {
                  title: "Save Valuable Planning Time",
                  icon: <Clock size={20} />,
                },
                {
                  title: "Coordinate Complex Family Itineraries",
                  icon: <Map size={20} />,
                },
                {
                  title: "Arrange Luxury Villas and Cruises",
                  icon: <Hotel size={20} />,
                },
                {
                  title: "Recommend Destinations for Every Generation",
                  icon: <Compass size={20} />,
                },
                {
                  title: "Manage Schedule Changes",
                  icon: <CalendarClock size={20} />,
                },
                {
                  title: "Secure Exclusive Experiences",
                  icon: <Sparkles size={20} />,
                },
                {
                  title: "Provide Concierge Support Throughout the Journey",
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
                        "Specialist in multigenerational travel for professional athletes and their families",
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
                  help professional athletes bring parents, grandparents,
                  siblings, and children together — from destination and villa
                  selection to concierge planning and milestone celebrations.
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
              Everything you need to know about planning multigenerational
              luxury travel as a professional athlete.
            </p>
          </div>
          <FAQ />
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────────── */}
      <section className="Asc-help-section">
        <div className="Asc-help-bg-wrap">
          <img
            src={CtaImage}
            alt="Multigenerational family gathering at a luxury travel destination"
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
                  Ready to Bring Your <br /> Family Together?
                </h2>
                <div className="Asc-help-accent"></div>
              </div>

              <div className="Asc-help-grid">
                <div className="Asc-help-info">
                  <p className="Asc-help-intro">
                    Connect with Angela Hughes and the expert team at Trips
                    &amp; Ships Luxury Travel for personalized guidance on
                    planning an unforgettable multigenerational vacation.
                  </p>

                  <p className="Asc-help-intro">
                    From villa selection and luxury cruises to bucket-list
                    adventures and milestone celebrations, expert support helps
                    every generation make the most of your time together.
                  </p>

                  <p className="Asc-help-intro">
                    Whether you're celebrating a championship, planning a family
                    reunion, or organizing a milestone birthday, personalized
                    planning makes all the difference.
                  </p>

                  <div className="Asc-help-btn-container">
                    <Link
                      to="/contact"
                      className="Asc-help-cta-btn"
                      style={{ textDecoration: "none" }}
                    >
                      Start Planning Your Family Journey
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
                      "Luxury cruise & bucket-list adventure planning",
                      "Wellness experiences for every family member",
                      "Flexible, schedule-friendly itineraries",
                      "Family milestone celebration planning",
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
                    professional athletes and their extended families create
                    highly personalized, multigenerational travel experiences
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

export default MultigenerationalTravel;
