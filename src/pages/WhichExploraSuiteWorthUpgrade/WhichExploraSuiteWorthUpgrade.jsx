import { useState, useEffect } from "react";
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
  Sparkles,
  BedDouble,
  Home,
  Waves,
} from "lucide-react";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela2.jpeg";

import HeroImage1 from "../../assets/WhichExploraSuiteWorthUpgrade/explora-I-central-pool-deck-aerial-view.jpg";
import HeroImage2 from "../../assets/WhichExploraSuiteWorthUpgrade/explora-I-aft-pool-luxury-sundeck.jpg";
import HeroImage4 from "../../assets/WhichExploraSuiteWorthUpgrade/explora-I-luxury-cruise-aerial-view-mediterranean.jpg";
import ExpolaSuite from "../../assets/WhichExploraSuiteWorthUpgrade/explora-I-luxury-pool-deck-daybeds.jpg";
import ExpolaSuite2 from "../../assets/WhichExploraSuiteWorthUpgrade/explora-I-oceanfront-pool-lounge-deck.jpg";
import ExpolaSuite3 from "../../assets/WhichExploraSuiteWorthUpgrade/explora-outside-suites.jpg";
import ExpolaSuite4 from "../../assets/WhichExploraSuiteWorthUpgrade/explora-III-oceanfront-infinity-pool-luxury-cruise-deck.jpg";
import ExpolaSuite5 from "../../assets/WhichExploraSuiteWorthUpgrade/Regent-Seven-Seas-Cruises.webp";

import OceanTerraceSuite from "../../assets/WhichExploraSuiteWorthUpgrade/explora-I-infinity-pool-ocean-wake-view.jpg";
import GrandTerraceSuite from "../../assets/WhichExploraSuiteWorthUpgrade/explora-journeys-oceanfront-infinity-pool-deck.jpg";
import PenthouseSuite from "../../assets/WhichExploraSuiteWorthUpgrade/luxury-oceanfront-suite-explora-journeys-interior.jpg";
import Residences from "../../assets/WhichExploraSuiteWorthUpgrade/explora-journeys-deluxe-penthouse-suite-bedroom.jpg";

import ExploraShip from "../../assets/WhichExploraSuiteWorthUpgrade/explora-III-helios-pool-luxury-sundeck-retreat.jpg";

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
      name: "Which Explora Suite Is Worth the Upgrade?",
      url: "https://tripsandships.com/which-explora-suite-is-worth-the-upgrade",
      description:
        "Compare Explora Journeys suites to discover which upgrade is worth the investment. Learn the differences between Ocean Terrace, Penthouse, Residence, and Owner's Residence accommodations.",
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
          name: "Which Explora Suite Is Worth the Upgrade",
          item: "https://tripsandships.com/which-explora-suite-is-worth-the-upgrade",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Are all Explora accommodations suites?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Every accommodation on Explora Journeys is an ocean-front suite with a private terrace.",
          },
        },
        {
          "@type": "Question",
          name: "What is the most affordable suite?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Ocean Terrace Suite is the entry-level accommodation and offers exceptional value.",
          },
        },
        {
          "@type": "Question",
          name: "Is the Ocean Grand Terrace worth the upgrade?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "If you enjoy spending time outdoors on your private terrace, many travelers find the larger outdoor space well worth the additional cost.",
          },
        },
        {
          "@type": "Question",
          name: "What is the difference between a Penthouse and a Residence?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Residences offer significantly more space, larger terraces, and a more residential layout, while Penthouses provide upgraded luxury with expanded living areas.",
          },
        },
        {
          "@type": "Question",
          name: "Which suite is best for couples?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ocean Grand Terrace Suites and Penthouses are popular choices for couples seeking additional comfort and privacy.",
          },
        },
        {
          "@type": "Question",
          name: "Does every suite have a balcony?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Every Explora suite includes a private furnished ocean-front terrace.",
          },
        },
        {
          "@type": "Question",
          name: "Do larger suites receive better service?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Service is exceptional throughout the ship, though some higher suite categories may include additional personalized amenities.",
          },
        },
        {
          "@type": "Question",
          name: "Is the Owner's Residence worth the price?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For travelers seeking the most exclusive accommodations, maximum privacy, and premium luxury, the Owner's Residence offers an unparalleled experience.",
          },
        },
        {
          "@type": "Question",
          name: "Should first-time guests upgrade?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Many first-time guests find the Ocean Terrace Suite more than sufficient, then consider upgrading on future voyages based on their preferences.",
          },
        },
        {
          "@type": "Question",
          name: "Which suite offers the best overall value?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For most travelers, the Ocean Terrace Suite delivers the strongest balance of luxury, space, and value.",
          },
        },
        {
          "@type": "Question",
          name: "What is included in every Explora suite?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Every suite includes ocean views, a private furnished terrace, floor-to-ceiling windows, a king-size bed, walk-in wardrobe, spacious marble bathroom, luxury linens, complimentary Wi-Fi, in-suite dining, personal minibar, and twice-daily housekeeping.",
          },
        },
        {
          "@type": "Question",
          name: "When is a suite upgrade most worthwhile?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A suite upgrade offers the greatest value on sailings of 10 nights or longer, special occasions, scenic itineraries like Alaska or Northern Europe, or when you plan significant relaxation time onboard.",
          },
        },
        {
          "@type": "Question",
          name: "How does booking through a luxury travel advisor like Angela Hughes benefit my Explora cruise?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Booking through Angela Hughes and Trips & Ships Luxury Travel provides exclusive benefits such as additional shipboard credit, priority reservations, complimentary room upgrades when available, and personalized planning support to tailor your entire luxury travel experience.",
          },
        },
      ],
    },
  ],
};

/* ── Suite category data (mirrors exploraFleet pattern) ─────────── */
const exploraSuites = [
  {
    id: "ocean-terrace",
    title: "Ocean Terrace Suite",
    badge: "Ocean Terrace",
    icon: BedDouble,
    image: OceanTerraceSuite,

    desc: "The Ocean Terrace Suite is the most common accommodation aboard Explora Journeys. Despite being the entry-level option, it offers significantly more space than standard balcony cabins found on many premium cruise lines.",

    columns: [
      {
        label: "Ideal For:",
        items: [
          "Couples",
          "First-Time Explora Guests",
          "Luxury Travelers Seeking Value",
          "Short & Medium-Length Cruises",
        ],
      },
      {
        label: "Highlights:",
        items: [
          "Spacious Open Layout",
          "Private Ocean Terrace",
          "Elegant European Design",
          "Comfortable Seating Area",
          "Luxury Bathroom",
        ],
      },
    ],

    themeLabel: "Best Value for Most Travelers",
    themeText:
      "For many guests, this suite provides everything needed for an exceptional voyage without paying for space you may not fully use.",
  },

  {
    id: "ocean-grand-terrace",
    title: "Ocean Grand Terrace Suite",
    badge: "Grand Terrace",
    icon: Waves,
    image: GrandTerraceSuite,

    desc: "The Ocean Grand Terrace Suite offers many of the same interior features as the Ocean Terrace Suite but adds a significantly larger outdoor living space — making it ideal for guests who love spending time on their private terrace.",

    columns: [
      {
        label: "Best For:",
        items: [
          "Guests Who Love Outdoor Living",
          "Scenic Itineraries",
          "Alaska & Mediterranean Voyages",
          "Couples Celebrating Special Occasions",
        ],
      },
      {
        label: "Upgrade Benefits:",
        items: [
          "Larger Private Terrace",
          "More Outdoor Seating",
          "Better Entertaining Space",
          "Enhanced Ocean Views",
        ],
      },
    ],

    themeLabel: "Worth It for Outdoor Living",
    themeText:
      "If you enjoy morning coffee, sunset cocktails, or private outdoor relaxation, this upgrade is often one of the most practical choices available.",
  },

  {
    id: "penthouse",
    title: "Penthouse Suite",
    badge: "Penthouse",
    icon: Sparkles,
    image: PenthouseSuite,

    desc: "Penthouse Suites offer noticeably more interior space and additional premium amenities. These suites are ideal for travelers who spend more time relaxing in their accommodations, especially on longer voyages.",

    columns: [
      {
        label: "Best For:",
        items: [
          "Longer Cruises (10+ Nights)",
          "Frequent Luxury Cruisers",
          "Milestone Celebrations",
          "Travelers Who Value Privacy",
        ],
      },
      {
        label: "Features:",
        items: [
          "Larger Living Area",
          "Expanded Bedroom Space",
          "Premium Furnishings",
          "Additional Personalized Service",
          "More Luxurious Finishes",
        ],
      },
    ],

    themeLabel: "Luxury With Additional Space",
    themeText:
      "The added comfort becomes especially valuable on longer itineraries where time spent in the suite matters most.",
  },

  {
    id: "residence",
    title: "Residences",
    badge: "Residences",
    icon: Home,
    image: Residences,

    desc: "Explora Residences are designed to feel like sophisticated private apartments at sea. The Owner's Residence represents the most exclusive accommodation in the fleet, offering expansive indoor and outdoor living spaces with exceptional privacy.",

    columns: [
      {
        label: "Ideal For:",
        items: [
          "Extended Voyages",
          "Families",
          "Luxury Enthusiasts",
          "Guests Entertaining Onboard",
        ],
      },
      {
        label: "Owner's Residence Features:",
        items: [
          "Large Living Room",
          "Separate Dining Area",
          "Spacious Bedroom",
          "Oversized Private Terrace",
          "Exclusive Services",
        ],
      },
    ],

    themeLabel: "A Residential Luxury Experience at Sea",
    themeText:
      "The Owner's Residence delivers one of the most luxurious accommodations available at sea — designed for travelers who expect uncompromising luxury.",
  },
];

/* ── Suite upgrade choice data (mirrors exploraChoiceData pattern) ─ */
const suiteChoiceData = [
  {
    key: "ocean-terrace",
    eyebrow: "Best Value",
    accent: "adg-accent-blue",
    title: "Stay with an Ocean Terrace Suite If You",
    items: [
      "Spend most of your time exploring the ship",
      "Prefer value over extra space",
      "Are taking your first Explora cruise",
      "Plan to enjoy restaurants, lounges, and excursions",
    ],
  },
  {
    key: "grand-terrace",
    eyebrow: "Outdoor Living",
    accent: "adg-accent-gold",
    title: "Upgrade to an Ocean Grand Terrace If You",
    items: [
      "Love private outdoor space",
      "Enjoy scenic cruising",
      "Want a more spacious balcony",
      "Plan to relax outside frequently",
    ],
  },
  {
    key: "penthouse",
    eyebrow: "More Space",
    accent: "adg-accent-green",
    title: "Upgrade to a Penthouse If You",
    items: [
      "Are celebrating a honeymoon or anniversary",
      "Prefer additional living space",
      "Are sailing for 10 nights or longer",
      "Spend significant time in your suite",
    ],
  },
  {
    key: "residence",
    eyebrow: "Ultimate Luxury",
    accent: "adg-accent-silver",
    title: "Choose a Residence If You",
    items: [
      "Want the highest level of luxury",
      "Need more room for entertaining",
      "Are traveling with family",
      "Value privacy and premium service",
    ],
  },
];

/* ── FAQ Component ───────────────────────────────────────────────── */
function FAQ() {
  const [open, setOpen] = useState(null);

  const faqData = [
    {
      q: "Are all Explora accommodations suites?",
      a: "Yes. Every accommodation on Explora Journeys is an ocean-front suite with a private terrace.",
    },
    {
      q: "What is the most affordable suite?",
      a: "The Ocean Terrace Suite is the entry-level accommodation and offers exceptional value.",
    },
    {
      q: "Is the Ocean Grand Terrace worth the upgrade?",
      a: "If you enjoy spending time outdoors on your private terrace, many travelers find the larger outdoor space well worth the additional cost.",
    },
    {
      q: "What is the difference between a Penthouse and a Residence?",
      a: "Residences offer significantly more space, larger terraces, and a more residential layout, while Penthouses provide upgraded luxury with expanded living areas.",
    },
    {
      q: "Which suite is best for couples?",
      a: "Ocean Grand Terrace Suites and Penthouses are popular choices for couples seeking additional comfort and privacy.",
    },
    {
      q: "Does every suite have a balcony?",
      a: "Yes. Every Explora suite includes a private furnished ocean-front terrace.",
    },
    {
      q: "Do larger suites receive better service?",
      a: "Service is exceptional throughout the ship, though some higher suite categories may include additional personalized amenities.",
    },
    {
      q: "Is the Owner's Residence worth the price?",
      a: "For travelers seeking the most exclusive accommodations, maximum privacy, and premium luxury, the Owner's Residence offers an unparalleled experience.",
    },
    {
      q: "Should first-time guests upgrade?",
      a: "Many first-time guests find the Ocean Terrace Suite more than sufficient, then consider upgrading on future voyages based on their preferences.",
    },
    {
      q: "Which suite offers the best overall value?",
      a: "For most travelers, the Ocean Terrace Suite delivers the strongest balance of luxury, space, and value.",
    },
    {
      q: "What is included in every Explora suite?",
      a: "Every suite includes ocean views, a private furnished terrace, floor-to-ceiling windows, a king-size bed, walk-in wardrobe, spacious marble bathroom, luxury linens, complimentary Wi-Fi, in-suite dining, personal minibar, and twice-daily housekeeping.",
    },
    {
      q: "When is a suite upgrade most worthwhile?",
      a: "A suite upgrade offers the greatest value on sailings of 10 nights or longer, special occasions, scenic itineraries like Alaska or Northern Europe, or when you plan significant relaxation time onboard.",
    },
    {
      q: "How does booking through a luxury travel advisor like Angela Hughes benefit my Explora cruise?",
      a: "Booking through Angela Hughes and Trips & Ships Luxury Travel provides exclusive benefits such as additional shipboard credit, priority reservations, complimentary room upgrades when available, and personalized planning support to tailor your entire luxury travel experience.",
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
const WhichExploraSuiteUpgrade = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [readMore, setReadMore] = useState(false);
  const [activeSuite, setActiveSuite] = useState("ocean-terrace");
  const currentSuite =
    exploraSuites.find((s) => s.id === activeSuite) || exploraSuites[0];

  const ActiveIcon = currentSuite.icon;

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
          Which Explora Suite Is Worth the Upgrade? | Explora Journeys Suite
          Guide
        </title>
        <meta
          name="title"
          content="Which Explora Suite Is Worth the Upgrade? | Explora Journeys Suite Guide"
        />
        <meta
          name="description"
          content="Compare Explora Journeys suites to discover which upgrade is worth the investment. Learn the differences between Ocean Terrace, Penthouse, Residence, and Owner's Residence accommodations."
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
            Which Explora Suite Is <br /> Worth the Upgrade?
          </h1>

          <p>
            One of the defining features of Explora Journeys is that every
            accommodation onboard is a luxurious ocean-front suite with a
            private terrace.
          </p>

          <p>
            Choosing the right suite isn't about deciding whether you want a
            balcony — it's about determining how much additional space, privacy,
            and premium amenities will enhance your voyage.
          </p>

          {readMore && (
            <>
              <p>
                For some travelers, the entry-level Ocean Terrace Suite is more
                than enough. For others, upgrading to a Penthouse, Residence, or
                the spectacular Owner's Residence can transform an already
                luxurious voyage into an unforgettable experience.
              </p>

              <p>
                According to luxury cruise expert Angela Hughes, understanding
                how you actually spend time onboard is the most important factor
                when deciding whether a suite upgrade is truly worth the
                investment.
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

      {/* ── SUITE CATEGORIES OVERVIEW TABLE ────────────────────────── */}
      <section
        className="Asc-section Asc-bg-white"
        id="Asc-fleet"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="Asc-container">
          <div className="Asc-section-header">
            <h2 className="Asc-h2">Explora Journeys Suite Categories</h2>
            <div className="Asc-accent-line"></div>
          </div>

          <p className="Asc-body-text" style={{ marginBottom: "20px" }}>
            Explora Journeys offers four primary accommodation categories, each
            beginning at an exceptionally high standard — every suite includes
            ocean views, a private terrace, and luxury finishes.
          </p>

          <div className="Asc-table-wrapper">
            <table className="Asc-fleet-table">
              <thead>
                <tr>
                  <th>Suite Category</th>
                  <th>Best For</th>
                  <th>Luxury Level</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>Ocean Terrace Suites</strong>
                  </td>
                  <td>First-time guests, couples</td>
                  <td>Premium</td>
                </tr>
                <tr>
                  <td>
                    <strong>Ocean Grand Terrace Suites</strong>
                  </td>
                  <td>Travelers wanting additional outdoor space</td>
                  <td>Premium Plus</td>
                </tr>
                <tr>
                  <td>
                    <strong>Penthouses</strong>
                  </td>
                  <td>Luxury travelers and longer voyages</td>
                  <td>Luxury</td>
                </tr>
                <tr>
                  <td>
                    <strong>Residences &amp; Owner's Residence</strong>
                  </td>
                  <td>Ultimate luxury experience</td>
                  <td>Ultra Luxury</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="Asc-body-text" style={{ marginTop: "2rem" }}>
            Because every suite begins at such a high standard, there is truly
            no wrong choice — only the question of how much additional space and
            privacy will enhance your specific voyage.
          </p>
        </div>
      </section>

      {/* ── VIDEO ──────────────────────────────────────────────────── */}
      <section
        className="Asc-video-section"
        id="Asc-video"
        style={{ backgroundColor: "var(--bg-white)" }}
      >
        <div className="Asc-container">
          <div className="Asc-section-header">
            <h2 className="Asc-h2">
              Discover the Suits & Lounges on Explora I
            </h2>
            <div className="Asc-accent-line"></div>
            <p className="Asc-video-intro">
              Step inside Explora I and discover its beautifully designed
              suites, sophisticated bars, and elegant lounges. Experience the
              refined European-inspired spaces where comfort, style, and
              personalized service come together to create a truly luxurious
              journey at sea.
            </p>
          </div>

          <div className="Asc-video-wrapper">
            <div className="Asc-video-frame">
              <iframe
                src="https://www.youtube.com/embed/ZOEMyGj0g_c"
                title="EXPLORA II – Coin Ceremony | Explora Journeys"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT EVERY SUITE INCLUDES ───────────────────────────────── */}
      <section className="adg-c-section adg-c-bg-soft" id="adg-common-features">
        <div className="adg-c-container">
          <div className="adg-c-section-header">
            <h2 className="adg-c-h2">What Every Explora Suite Includes</h2>
            <div className="adg-c-accent-line"></div>
          </div>

          <div className="adg-c-overview-layout">
            {/* LEFT — Standard inclusions */}
            <div className="adg-c-overview-icons">
              {[
                "Ocean-front location",
                "Private furnished terrace",
                "Floor-to-ceiling windows",
                "King-size bed",
                "Walk-in wardrobe",
                "Spacious marble bathroom",
                "Luxury linens",
                "Complimentary Wi-Fi",
                "In-suite dining & personal minibar",
                "Twice-daily housekeeping",
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
                <div
                  className="adg-c-overview-callout-inner"
                  style={{ height: "300px" }}
                >
                  <Star size={28} className="adg-c-callout-star" />
                  <p className="adg-c-callout-text">
                    This consistency makes even the entry-level Ocean Terrace
                    Suite feel exceptionally luxurious — no interior cabins
                    exist on any Explora Journeys vessel.
                  </p>
                </div>
              </div>

              <div
                className="adg-c-overview-image-wrap"
                style={{ height: "365px" }}
              >
                <img
                  src={ExpolaSuite}
                  alt="Explora Journeys luxury suite outdoor terrace experience"
                  className="adg-c-overview-img"
                />
                <div className="adg-c-overview-img-overlay">
                  <span className="adg-c-overview-img-label">
                    Every Suite — Ocean-Front & Private
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SUITE CATEGORY DETAIL PANEL ─────────────────────────────── */}
      <section className="luc-destinations-section" id="luc-destinations">
        <div className="luc-destinations-container">
          <div className="luc-destinations-header">
            <h2 className="luc-destinations-title">
              Explora Journeys Suite Categories in Detail
            </h2>

            <div className="adg-c-accent-line"></div>

            <p className="luc-destinations-intro">
              From the spacious Ocean Terrace Suite to the extraordinary Owner's
              Residence, each accommodation category is designed to deliver a
              genuinely exceptional luxury experience at sea.
            </p>
          </div>

          {/* Layout */}
          <div className="luc-dest-layout">
            {/* Sidebar nav */}
            <nav className="luc-dest-nav">
              {exploraSuites.map((item) => {
                const NavIcon = item.icon;
                const isActive = activeSuite === item.id;

                return (
                  <button
                    key={item.id}
                    className={`luc-dest-nav-btn ${
                      isActive ? "luc-dest-nav-btn--active" : ""
                    }`}
                    onClick={() => setActiveSuite(item.id)}
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

            {/* Detail panel */}
            <div className="luc-dest-panel" key={activeSuite}>
              {/* Image */}
              <div className="luc-dest-img-wrap">
                <img
                  src={currentSuite.image}
                  alt={currentSuite.title}
                  className="luc-dest-img"
                />

                <div className="luc-dest-img-overlay">
                  <div className="luc-dest-img-icon">
                    <ActiveIcon size={22} strokeWidth={1.6} />
                  </div>

                  <span className="luc-dest-img-title">
                    {currentSuite.title}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="luc-dest-panel-desc">{currentSuite.desc}</p>

              {/* Columns */}
              <div className="luc-dest-columns">
                {currentSuite.columns.map((col, cIdx) => (
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

              {/* Theme note */}
              <div className="luc-dest-theme-box-note">
                <div className="luc-dest-theme-note-bar"></div>

                <div className="luc-dest-theme-note-content">
                  <span className="luc-dest-theme-note-label">
                    {currentSuite.themeLabel}
                  </span>

                  <p className="luc-dest-theme-note-text">
                    {currentSuite.themeText}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── IS THE UPGRADE WORTH IT? — CHOICE CARDS ────────────────── */}
      <section className="adg-section" id="adg-suite-choose">
        <div className="adg-container">
          {/* HEADER */}
          <div className="adg-header">
            <h2 className="adg-h2">Is the Upgrade Worth It?</h2>
            <div className="adg-accent-line"></div>
            <p className="adg-intro">
              The answer depends on your travel style. Use this guide to match
              each suite category with your ideal onboard experience.
            </p>
          </div>

          {/* CARDS GRID */}
          <div className="adg-grid">
            {suiteChoiceData.map((item) => (
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

                {/* BOTTOM ACCENT BAR */}
                <div className="adg-card-bar"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ OWNER'S RESIDENCE: THE ULTIMATE EXPLORA SUITE ════════════════════ */}
      <section
        className="ugt-components-section"
        id="ugt-components"
        style={{ backgroundColor: "var(--bg-white)" }}
      >
        <div className="Asc-container">
          <div className="ugt-components-header">
            <h2 className="adg-c-h2">
              The Ultimate Explora Suite: Owner's Residence
            </h2>
            <div className="adg-c-accent-line"></div>
          </div>

          <div className="ugt-components-list">
            <div className="ugt-component-row">
              {/* LEFT IMAGE */}
              <div className="ugt-component-image-wrapper">
                <div className="ugt-component-image-container">
                  <img
                    src={ExpolaSuite2}
                    alt="Explora Journeys luxury Owner's Residence suite and private ocean terrace"
                    className="ugt-component-image"
                  />
                </div>
              </div>

              {/* RIGHT CONTENT */}
              <div className="ugt-component-content">
                <p className="ugt-component-text">
                  The Owner's Residence represents the most exclusive
                  accommodation in the Explora Journeys fleet. Designed for
                  travelers who expect uncompromising luxury, it offers
                  expansive indoor and outdoor living spaces with exceptional
                  privacy.
                </p>
                <p className="ugt-component-text">
                  Every square foot has been meticulously curated to match the
                  ambiance of a private luxury residence, delivering one of the
                  most sophisticated and relaxing environments available at sea.
                </p>

                <div className="ugt-questions-box">
                  <span className="ugt-questions-title">
                    Premium Features Include:
                  </span>
                  <ul className="ugt-questions-list">
                    {[
                      "Large living room",
                      "Separate dining area",
                      "Spacious bedroom",
                      "Oversized private terrace",
                      "Premium furnishings",
                      "Exclusive services",
                    ].map((item, idx) => (
                      <li key={idx} className="ugt-question-item">
                        <Check size={16} className="ugt-question-icon" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHICH SUITE IS BEST FOR DIFFERENT TRAVELERS ─────────────── */}
      <section className="luc-why-section" id="luc-why-suites">
        <div className="luc-why-container">
          {/* LEFT — stacked images */}
          <div className="luc-why-images">
            <div className="luc-why-img-main-wrap" style={{ color: "#fff" }}>
              <img
                src={ExpolaSuite3}
                alt="Explora Journeys luxury suite ocean view terrace"
                className="luc-why-img-main"
              />
              <div className="luc-why-img-overlay"></div>
            </div>
            <div className="luc-why-img-accent-wrap" style={{ color: "#fff" }}>
              <img
                src={ExpolaSuite4}
                alt="Explora Journeys luxury accommodation experience"
                className="luc-why-img-accent"
              />
              <div className="luc-why-img-badge">
                <span className="luc-why-badge-num">4</span>
                <span className="luc-why-badge-text">Suite Tiers</span>
              </div>
            </div>
          </div>

          {/* RIGHT — content */}
          <div className="luc-why-content">
            <h2 className="luc-why-title">
              Which Suite Is Best for Different Travelers?
            </h2>
            <div className="aac-accent-line aac-accent-white"></div>
            <p className="luc-why-intro">
              Because Explora Journeys starts at such a high accommodation
              standard, every traveler enjoys an exceptional experience.
            </p>
            <p className="luc-why-intro">
              The right suite depends on who you are, how you travel, and what
              you most value onboard:
            </p>

            <div className="luc-why-features">
              {[
                {
                  num: "01",
                  title: "First-Time Guests",
                  desc: "Ocean Terrace Suite — an excellent introduction to Explora Journeys without paying for space you may not fully use.",
                },
                {
                  num: "02",
                  title: "Couples",
                  desc: "Ocean Grand Terrace or Penthouse — extra space creates a more romantic and relaxing environment.",
                },
                {
                  num: "03",
                  title: "Luxury Travelers",
                  desc: "Residence — offers elevated accommodations, premium services, and a truly residential experience at sea.",
                },
                {
                  num: "04",
                  title: "Multi-Generational Travelers",
                  desc: "Residence — larger living areas make longer voyages significantly more comfortable for families.",
                },
                {
                  num: "05",
                  title: "Special Celebrations",
                  desc: "Penthouse or Owner's Residence — perfect for milestone birthdays, anniversaries, or once-in-a-lifetime vacations.",
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

      {/* ── WHAT AN UPGRADE PROVIDES — DINING SECTION PATTERN ───────── */}
      <section className="dmg-info-section dmg-bg-soft" id="dmg-upgrade-value">
        <div className="dmg-info-container">
          <div className="dmg-info-grid">
            <div className="dmg-info-content">
              <h2 className="dmg-info-title">
                Does a Larger Suite Change the Experience?
              </h2>
              <div className="dmg-info-accent"></div>

              <p className="dmg-info-lead">
                All Explora guests receive the same outstanding service, dining,
                entertainment, and public spaces regardless of suite category.
                Upgrading primarily enhances your private space and personal
                comfort.
              </p>

              <div className="dmg-info-features dmg-info-features-scrollable">
                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">More Space</h3>
                    <p className="dmg-info-feature-desc">
                      Larger suites provide noticeably more room to relax,
                      unwind, and spend meaningful time onboard between ports.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">Greater Privacy</h3>
                    <p className="dmg-info-feature-desc">
                      Residences and Owner's Residences provide a true sanctuary
                      — ideal for those who value seclusion and an unhurried
                      pace.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Larger Outdoor Areas
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Grand Terrace and upper-category suites offer more
                      expansive private terraces to enjoy the ocean in every
                      condition.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Additional Premium Amenities
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Higher suite categories may include enhanced personalized
                      service, priority access, and exclusive onboard benefits.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="dmg-info-media">
              <div className="dmg-media-wrapper">
                <img
                  src={ExpolaSuite5}
                  alt="Explora Journeys luxury suite and fine dining experience"
                  className="dmg-media-img"
                />
                <div className="dmg-media-overlay"></div>

                <div className="dmg-media-badge">
                  <span>Suite Excellence</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHEN IS AN UPGRADE MOST WORTHWHILE — DARK CARDS ─────────── */}
      <section className="Lfsg-section Lfsg-bg-dark" id="Lfsg-upgrade-timing">
        <div className="Lfsg-container">
          <div className="Lfsg-section-header">
            <h2 className="Lfsg-h2-white">
              When Is an Upgrade Most Worthwhile?
            </h2>
            <div className="Lfsg-accent-line-white" />
          </div>

          <div className="Lfsg-mistakes-grid">
            {[
              {
                title: "Longer Voyages (10+ Nights)",
                desc: "The longer you sail, the more time you spend in your suite — making additional space and comfort significantly more valuable.",
              },
              {
                title: "Special Celebrations",
                desc: "Honeymoons, anniversaries, milestone birthdays, and once-in-a-lifetime occasions deserve an accommodation that matches the moment.",
              },
              {
                title: "Scenic Itineraries",
                desc: "Alaska, Northern Europe, and Norwegian fjords reward a larger terrace — the outdoor scenery becomes your private theatre.",
              },
              {
                title: "Working Remotely Onboard",
                desc: "Executives and digital nomads benefit greatly from the additional living and working space that Penthouse and Residence suites provide.",
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

      {/* ── SECOND VIDEO ───────────────────────────────────────────── */}
      <section
        className="Asc-video-section"
        id="Asc-video-2"
        style={{ backgroundColor: "var(--bg-white)" }}
      >
        <div className="Asc-container">
          <div className="Asc-section-header">
            <h2 className="Asc-h2">
              The Ocean State of Mind by Explora Journeys
            </h2>
            <div className="Asc-accent-line"></div>
            <p className="Asc-video-intro">
              Discover the philosophy behind Explora Journeys' Ocean State of
              Mind—a fresh vision of luxury ocean travel where elegant design,
              immersive experiences, and effortless comfort come together.
            </p>
          </div>

          <div className="Asc-video-wrapper">
            <div className="Asc-video-frame">
              <iframe
                src="https://www.youtube.com/embed/Zi5FES_5OSc"
                title="Explore the Ocean State of Mind | Explora Journeys"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
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
            {/* LEFT */}
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

            {/* RIGHT */}
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
                  help travelers identify which Explora Journeys suite and
                  itinerary truly aligns with their lifestyle, expectations, and
                  travel goals.
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
              Everything you need to know about choosing the right Explora
              Journeys suite.
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
                  Ready to Find the Right <br /> Explora Suite for You?
                </h2>
                <div className="Asc-help-accent"></div>
              </div>

              <div className="Asc-help-grid">
                <div className="Asc-help-info">
                  <p className="Asc-help-intro">
                    Connect with Angela Hughes and the expert team at Trips
                    &amp; Ships Luxury Travel for personalized suite selection
                    and luxury cruise planning tailored to your travel style,
                    voyage length, and personal preferences.
                  </p>

                  <p className="Asc-help-intro">
                    From suite category recommendations and upgrade guidance to
                    itinerary planning and exclusive amenities, expert support
                    helps travelers maximize the value of every Explora Journeys
                    experience.
                  </p>

                  <p className="Asc-help-intro">
                    Whether you are new to Explora Journeys or a returning guest
                    considering an upgrade, personalized guidance helps you make
                    the right decision for your perfect voyage.
                  </p>

                  <div className="Asc-help-btn-container">
                    <button className="Asc-help-cta-btn">
                      Start Planning Your Explora Journey
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>

                <div className="Asc-help-list-box">
                  <h3 className="Asc-help-list-title">
                    Expert guidance includes:
                  </h3>
                  <ul className="Asc-help-bullets">
                    {[
                      "Personalized suite selection advice",
                      "Exclusive luxury travel benefits",
                      "Suite upgrade value analysis",
                      "Destination-focused voyage planning",
                      "Luxury cruise comparison expertise",
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
                    discerning travelers create highly personalized Explora
                    Journeys experiences worldwide.
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

export default WhichExploraSuiteUpgrade;
