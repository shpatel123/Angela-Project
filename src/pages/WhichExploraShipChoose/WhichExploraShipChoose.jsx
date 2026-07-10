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
  Waves,
  Sparkles,
  Dumbbell,
  Sun,
  Heart,
  Scissors,
  Flower2,
} from "lucide-react";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela.jpeg";

import HeroImage1 from "../../assets/ExploraJourneysCruises/ExploraCruise.webp";
import HeroImage2 from "../../assets/ExploraJourneysCruises/ExploraCruise2.webp";
import HeroImage4 from "../../assets/ExploraJourneysCruises/ExploraCruise3.webp";
import ExploraPool from "../../assets/WhichExploraShipChoose/explora-journeys-atoll-pool-luxury-cruise-deck.jpg";

import ExploraDetination from "../../assets/WhichExploraShipChoose/Explora-Journeys-1.webp";
import ExploraDetination2 from "../../assets/WhichExploraShipChoose/Explora-Journeys2.webp";
import ExploraDetination3 from "../../assets/WhichExploraShipChoose/EXPLORA-III-PANAMA-CANAL.jpg";
import ExploraDetination4 from "../../assets/WhichExploraShipChoose/EXPLORA-III-IV-Anthology.jpg";
import ExploraDetination5 from "../../assets/WhichExploraShipChoose/mediterranean-hidden-cove-luxury-cruise-summer-2025.jpg";
import ExploraDetination6 from "../../assets/WhichExploraShipChoose/allinn-estonia-old-town-summer-travel-aerial.jpg";

import LuxuryOceanfrontSuites from "../../assets/WhichExploraShipChoose/Regent-Seven-Seas-Cruises.webp";
import FineDining from "../../assets/WhichExploraShipChoose/Fine-Dining.webp";
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
      name: "Which Explora Ship Should You Choose?",
      url: "https://tripsandships.com/which-explora-ship-should-you-choose",
      description:
        "Not sure which Explora Journeys ship is right for you? Compare Explora I, Explora II, Explora III, and future ships to discover the best luxury cruise experience for your travel style and destination.",
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
          name: "Which Explora Ship Should You Choose",
          item: "https://tripsandships.com/which-explora-ship-should-you-choose",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Which Explora ship is the newest?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Explora II is currently among the newest ships in service, while Explora III and Explora IV will continue expanding the fleet.",
          },
        },
        {
          "@type": "Question",
          name: "Is Explora I different from Explora II?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The two ships are very similar in design, accommodations, dining, and onboard experiences. Most travelers choose based on itinerary rather than ship features.",
          },
        },
        {
          "@type": "Question",
          name: "Which Explora ship is best?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "There is no single best ship. The right choice depends on your preferred destination, travel dates, and itinerary.",
          },
        },
        {
          "@type": "Question",
          name: "Are all Explora ships luxury ships?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Every Explora Journeys ship is designed as a luxury ocean vessel with spacious suites, premium dining, and personalized service.",
          },
        },
        {
          "@type": "Question",
          name: "Do all Explora ships have suites?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Every accommodation is an ocean-front suite with a private terrace.",
          },
        },
        {
          "@type": "Question",
          name: "Are restaurants the same on every ship?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Dining concepts remain largely consistent across the fleet, offering a comparable luxury culinary experience.",
          },
        },
        {
          "@type": "Question",
          name: "Which ship is best for first-time Explora guests?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Explora I and Explora II are both excellent choices for first-time travelers.",
          },
        },
        {
          "@type": "Question",
          name: "Do all Explora ships visit the same destinations?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Itineraries vary by season and ship, making destination one of the most important factors when choosing.",
          },
        },
        {
          "@type": "Question",
          name: "Are newer Explora ships more sustainable?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Newer ships continue to introduce additional environmental technologies and operational improvements.",
          },
        },
        {
          "@type": "Question",
          name: "Should I choose the newest Explora ship?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "If your preferred itinerary is available, the newest ships may offer the latest innovations, but every Explora vessel delivers a similar luxury experience.",
          },
        },
        {
          "@type": "Question",
          name: "What is included in the fare on Explora Journeys ships?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Explora Journeys offers an all-inclusive experience. The fare covers ocean-front suite accommodations with a private terrace, fine dining at multiple culinary venues (excluding Anthology), unlimited beverages, access to spa thermal areas, high-speed Wi-Fi, onboard gratuities, and shuttle service at most ports.",
          },
        },
        {
          "@type": "Question",
          name: "Are there solo traveler suites on Explora ships?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "While Explora Journeys does not have dedicated solo suites, they offer attractive solo fares with reduced single supplements on select itineraries for their luxury oceanfront suites, allowing solo travelers to enjoy the same spacious accommodations.",
          },
        },
        {
          "@type": "Question",
          name: "Can families travel on Explora Journeys ships?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, Explora Journeys is family-friendly and offers connecting suites for families. The ships feature the Nautilus Club, a dedicated space for children and teenagers (ages 6-17) with games, consoles, and structured activities, while maintaining a refined, quiet atmosphere for adults.",
          },
        },
        {
          "@type": "Question",
          name: "What makes the suite terraces on Explora Journeys unique?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Every suite on Explora I, II, III, and IV features a spacious private terrace ranging from 75 to 280 square feet. Each terrace includes a comfortable daybed, dining area, and floor-to-ceiling glass doors, creating a seamless indoor-outdoor living experience.",
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

const exploraFleet = [
  {
    id: "explora-i",
    title: "Explora I",
    badge: "Explora I",
    icon: Ship,
    image: ExploraDetination,

    desc: "Explora I introduced travelers to the Explora Journeys concept and quickly established the brand as one of the newest names in luxury cruising.",

    columns: [
      {
        label: "Best For:",
        items: [
          "First-Time Explora Guests",
          "Mediterranean Cruises",
          "Northern Europe Itineraries",
          "Caribbean Luxury Vacations",
        ],
      },
      {
        label: "Highlights:",
        items: [
          "Scandinavian-Inspired Design",
          "Spacious Oceanfront Suites",
          "Indoor & Outdoor Pools",
          "Exceptional Culinary Experiences",
          "Wellness-Focused Spaces",
        ],
      },
    ],

    themeLabel: "The Original Flagship",
    themeText:
      "Explora I continues to operate some of the brand's most popular itineraries, delivering a refined and sophisticated Ocean State of Mind.",
  },

  {
    id: "explora-ii",
    title: "Explora II",
    badge: "Explora II",
    icon: Sparkles,
    image: ExploraDetination2,

    desc: "Explora II builds upon the success of Explora I while maintaining nearly identical luxury standards. Guests will notice the same overall design philosophy with subtle refinements throughout the ship.",

    columns: [
      {
        label: "Best For:",
        items: [
          "Travelers Wanting Newer Sailings",
          "Mediterranean Exploration",
          "Caribbean Luxury Cruises",
          "Repeat Explora Guests",
        ],
      },
      {
        label: "Highlights:",
        items: [
          "Same Intimate Atmosphere",
          "Spacious Accommodations",
          "Luxury Dining Experiences",
          "Elegant Public Spaces",
          "Exceptional Guest-to-Staff Ratio",
        ],
      },
    ],

    themeLabel: "The Refined Sister Ship",
    themeText:
      "For most travelers, choosing between Explora I and Explora II comes down to your preferred itinerary and departure date.",
  },

  {
    id: "explora-iii",
    title: "Explora III",
    badge: "Explora III",
    icon: Compass,
    image: ExploraDetination3,

    desc: "Explora III represents the next phase in the fleet's evolution. While maintaining the same luxury experience guests expect, the ship introduces newer environmental technologies and operational improvements.",

    columns: [
      {
        label: "Expected Highlights:",
        items: [
          "Enhanced Sustainability Features",
          "Luxury Suite Accommodations",
          "Destination-Focused Itineraries",
          "Elevated Wellness Experiences",
          "Modern European Design",
        ],
      },
    ],

    themeLabel: "The Next Generation",
    themeText:
      "As the fleet expands, Explora III will introduce travelers to additional regions around the world using state-of-the-art alternative energy updates.",
  },

  {
    id: "explora-iv",
    title: "Explora IV",
    badge: "Explora IV",
    icon: Anchor,
    image: ExploraDetination4,

    desc: "Explora IV continues the brand's commitment to luxury travel with a focus on innovation and sustainability.",

    columns: [
      {
        label: "Travelers Can Expect:",
        items: [
          "Elegant Suites",
          "Refined Dining",
          "Ocean Wellness",
          "Small-Ship Atmosphere",
          "Personalized Service",
        ],
      },
    ],

    themeLabel: "Looking Toward the Future",
    themeText:
      "Although future itineraries will vary, Explora IV is expected to continue serving premium destinations worldwide with advanced ecological tech.",
  },
];

const exploraChoiceData = [
  {
    key: "explora-i",
    eyebrow: "Proven Experience",
    accent: "adg-accent-blue",
    title: "Choose Explora I If You Want",
    items: [
      "Proven guest experience",
      "Classic Mediterranean itineraries",
      "Established luxury service",
      "First-generation Explora design",
    ],
  },
  {
    key: "explora-ii",
    eyebrow: "Newer Sailings",
    accent: "adg-accent-gold",
    title: "Choose Explora II If You Want",
    items: [
      "Newer sailings",
      "Expanded itinerary options",
      "Same luxury experience",
      "Flexible departure dates",
    ],
  },
  {
    key: "explora-iii",
    eyebrow: "Sustainability Focus",
    accent: "adg-accent-green",
    title: "Choose Explora III If You Want",
    items: [
      "The newest technology",
      "Future itineraries",
      "Sustainability innovations",
      "Next-generation luxury cruising",
    ],
  },
  {
    key: "explora-iv",
    eyebrow: "Next-Gen Design",
    accent: "adg-accent-silver",
    title: "Choose Explora IV If You Want",
    items: [
      "One of the newest ships",
      "Future global itineraries",
      "Latest environmental features",
      "Modern luxury design",
    ],
  },
];

/* ── FAQ Component ───────────────────────────────────────────────── */
function FAQ() {
  const [open, setOpen] = useState(null);

  const faqData = [
    {
      q: "Which Explora ship is the newest?",
      a: "Explora II is currently among the newest ships in service, while Explora III and Explora IV will continue expanding the fleet.",
    },
    {
      q: "Is Explora I different from Explora II?",
      a: "The two ships are very similar in design, accommodations, dining, and onboard experiences. Most travelers choose based on itinerary rather than ship features.",
    },
    {
      q: "Which Explora ship is best?",
      a: "There is no single best ship. The right choice depends on your preferred destination, travel dates, and itinerary.",
    },
    {
      q: "Are all Explora ships luxury ships?",
      a: "Yes. Every Explora Journeys ship is designed as a luxury ocean vessel with spacious suites, premium dining, and personalized service.",
    },
    {
      q: "Do all Explora ships have suites?",
      a: "Yes. Every accommodation is an ocean-front suite with a private terrace.",
    },
    {
      q: "Are restaurants the same on every ship?",
      a: "Dining concepts remain largely consistent across the fleet, offering a comparable luxury culinary experience.",
    },
    {
      q: "Which ship is best for first-time Explora guests?",
      a: "Explora I and Explora II are both excellent choices for first-time travelers.",
    },
    {
      q: "Do all Explora ships visit the same destinations?",
      a: "No. Itineraries vary by season and ship, making destination one of the most important factors when choosing.",
    },
    {
      q: "Are newer Explora ships more sustainable?",
      a: "Yes. Newer ships continue to introduce additional environmental technologies and operational improvements.",
    },
    {
      q: "Should I choose the newest Explora ship?",
      a: "If your preferred itinerary is available, the newest ships may offer the latest innovations, but every Explora vessel delivers a similar luxury experience.",
    },
    {
      q: "What is included in the fare on Explora Journeys ships?",
      a: "Explora Journeys offers an all-inclusive experience. The fare covers ocean-front suite accommodations with a private terrace, fine dining at multiple culinary venues (excluding Anthology), unlimited beverages, access to spa thermal areas, high-speed Wi-Fi, onboard gratuities, and shuttle service at most ports.",
    },
    {
      q: "Are there solo traveler suites on Explora ships?",
      a: "While Explora Journeys does not have dedicated solo suites, they offer attractive solo fares with reduced single supplements on select itineraries for their luxury oceanfront suites, allowing solo travelers to enjoy the same spacious accommodations.",
    },
    {
      q: "Can families travel on Explora Journeys ships?",
      a: "Yes, Explora Journeys is family-friendly and offers connecting suites for families. The ships feature the Nautilus Club, a dedicated space for children and teenagers (ages 6-17) with games, consoles, and structured activities, while maintaining a refined, quiet atmosphere for adults.",
    },
    {
      q: "What makes the suite terraces on Explora Journeys unique?",
      a: "Every suite on Explora I, II, III, and IV features a spacious private terrace ranging from 75 to 280 square feet. Each terrace includes a comfortable daybed, dining area, and floor-to-ceiling glass doors, creating a seamless indoor-outdoor living experience.",
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
const WhichExploraShip = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [readMore, setReadMore] = useState(false);
  const [readMoreWhy, setReadMoreWhy] = useState(false);
  const [activeDest, setActiveDest] = useState("explora-i");
  const currentDest =
    exploraFleet.find((d) => d.id === activeDest) || exploraFleet[0];

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
          Which Explora Ship Should You Choose? | Explora I, II, III &amp; IV
          Comparison
        </title>
        <meta
          name="title"
          content="Which Explora Ship Should You Choose? | Explora Journeys Fleet Guide"
        />
        <meta
          name="description"
          content="Not sure which Explora Journeys ship is right for you? Compare Explora I, Explora II, Explora III, and future ships to discover the best luxury cruise experience for your travel style and destination."
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
          <h1>Which Explora Ship Should You Choose?</h1>

          <p>
            Explora Journeys was designed with a simple philosophy: create a
            fleet of luxury ships that feels more like a private yacht than a
            traditional cruise ship.
          </p>

          <p>
            Unlike cruise lines with dozens of different ship classes, Explora
            Journeys maintains consistency across its fleet — so how do you
            decide which one is right for you?
          </p>

          {readMore && (
            <>
              <p>
                The answer often comes down to itineraries, destinations, travel
                dates, and personal preferences.
              </p>

              <p>
                According to luxury cruise expert Angela Hughes, the most
                important factor when choosing between Explora ships is not the
                vessel itself — it's the voyage. Every ship in the Explora fleet
                delivers the same elevated service, spacious suites, refined
                dining, and destination-focused experiences.
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

      {/* ── EXPLORA JOURNEYS FLEET OVERVIEW ─────────────────────────────────── */}
      <section
        className="Asc-section Asc-bg-white"
        id="Asc-fleet"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="Asc-container">
          <div className="Asc-section-header">
            <h2 className="Asc-h2">Explora Journeys Fleet Overview</h2>
            <div className="Asc-accent-line"></div>
          </div>

          <p className="Asc-body-text" style={{ marginBottom: "20px" }}>
            Explora Journeys is building a fleet of modern luxury ships that
            share the same core design philosophy while gradually introducing
            new technologies and sustainability innovations.
          </p>

          <div className="Asc-table-wrapper">
            <table className="Asc-fleet-table">
              <thead>
                <tr>
                  <th>Ship</th>
                  <th>Status</th>
                  <th>Guest Capacity</th>
                  <th>Launch Year</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>Explora I</strong>
                  </td>
                  <td>Sailing</td>
                  <td>Approximately 900 guests</td>
                  <td>2023</td>
                </tr>
                <tr>
                  <td>
                    <strong>Explora II</strong>
                  </td>
                  <td>Sailing</td>
                  <td>Approximately 900 guests</td>
                  <td>2024</td>
                </tr>
                <tr>
                  <td>
                    <strong>Explora III</strong>
                  </td>
                  <td>Coming Soon</td>
                  <td>Approximately 900 guests</td>
                  <td>July 24,2026</td>
                </tr>
                <tr>
                  <td>
                    <strong>Explora IV</strong>
                  </td>
                  <td>Planned</td>
                  <td>Approximately 900 guests</td>
                  <td>2027</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="Asc-body-text" style={{ marginTop: "2rem" }}>
            Because every ship carries fewer than 1,000 guests, the atmosphere
            remains intimate, elegant, and uncrowded.
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
            <h2 className="Asc-h2">Discover the Making of Explora I</h2>
            <div className="Asc-accent-line"></div>
            <p className="Asc-video-intro">
              Experience the elegance of the EXPLORA II Naming Ceremony —
              showcasing the brand's modern luxury, sophisticated design, and
              immersive ocean travel experience.
            </p>
          </div>

          <div className="Asc-video-wrapper">
            <div className="Asc-video-frame">
              <iframe
                src="https://www.youtube.com/embed/2BcVrN5QYfM"
                title="EXPLORA I - Coin Ceremony | Explora Journeys"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* ══ WHAT ALL EXPLORA SHIPS HAVE IN COMMON ═════════════════════════════ */}
      <section
        className="adg-c-section adg-c-bg-white"
        id="adg-common-features"
      >
        <div className="adg-c-container">
          <div className="adg-c-section-header">
            <h2 className="adg-c-h2">What All Explora Ships Have in Common</h2>
            <div className="adg-c-accent-line"></div>
          </div>

          <div className="adg-c-overview-layout">
            {/* LEFT — Common Features */}
            <div className="adg-c-overview-icons">
              {[
                "Ocean-front suites",
                "Multiple fine dining restaurants",
                "Luxury spa and wellness facilities",
                "Elegant lounges",
                "Infinity pools",
                "Spacious outdoor decks",
                "Personalized service",
                "Destination-focused itineraries",
                "European-inspired luxury",
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
                    Regardless of which ship you choose, you can expect the
                    signature Explora Journeys experience, with every vessel
                    designed to deliver exceptional comfort, personalized
                    service, and refined European luxury.
                  </p>
                </div>
              </div>

              <div
                className="adg-c-overview-image-wrap"
                style={{ height: "390px" }}
              >
                <img
                  src={ExploraPool}
                  alt="Luxury ocean-front suite and outdoor spaces aboard an Explora Journeys ship"
                  className="adg-c-overview-img"
                />
                <div className="adg-c-overview-img-overlay">
                  <span className="adg-c-overview-img-label">
                    Signature Explora Journeys Experience
                  </span>
                </div>
              </div>
            </div>
          </div>

          <p
            className="adg-c-body-text"
            style={{ marginTop: "2rem", textAlign: "center" }}
          >
            This consistency allows travelers to select ships primarily based on
            itinerary rather than onboard amenities.
          </p>
        </div>
      </section>

      {/* ── EXPLORA JOURNEYS FLEET HIGHLIGHTS ───── */}
      <section className="luc-destinations-section" id="luc-destinations">
        <div className="luc-destinations-container">
          <div className="luc-destinations-header">
            <h2 className="luc-destinations-title">
              The Explora Journeys Luxury Fleet
            </h2>

            <div className="adg-c-accent-line"></div>

            <p className="luc-destinations-intro">
              From the pioneering design of Explora I to the forward-looking
              innovation of Explora IV, each ship in the fleet offers an
              intimate, sophisticated small-ship atmosphere designed to connect
              you beautifully with the ocean and world-class destinations.
            </p>
          </div>

          {/* Layout */}
          <div className="luc-dest-layout">
            {/* Sidebar nav */}
            <nav className="luc-dest-nav">
              {exploraFleet.map((item) => {
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

            {/* Detail panel */}
            <div className="luc-dest-panel" key={activeDest}>
              {/* Image */}
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

              {/* Description */}
              <p className="luc-dest-panel-desc">{currentDest.desc}</p>

              {/* Columns */}
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

              {/* Educational Theme / Highlight */}
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

      {/* ── HOW TO CHOOSE THE RIGHT EXPLORA SHIP ───── */}
      <section className="adg-section" id="adg-explora-choose">
        <div className="adg-container">
          {/* HEADER */}
          <div className="adg-header">
            <h2 className="adg-h2">
              How to Choose the <br /> Right Explora Ship
            </h2>
            <div className="adg-accent-line"></div>
            <p className="adg-intro">
              Rather than asking which ship is "best," consider which voyage
              best matches your interests, preferred timelines, and destination
              goals.
            </p>
          </div>

          {/* CARDS GRID */}
          <div className="adg-grid">
            {exploraChoiceData.map((item) => (
              <div key={item.key} className={`adg-card ${item.accent}`}>
                {/* CARD BODY WITH FLOATING EYEBROW INCORPORATED */}
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

      {/* ══ EXPLORA JOURNEYS — DESTINATIONS MATTER ════════════════════════════════════ */}
      <section className="luc-why-section" id="luc-why-europe">
        <div className="luc-why-container">
          {/* LEFT — stacked images */}
          <div className="luc-why-images">
            <div className="luc-why-img-main-wrap" style={{ color: "#fff" }}>
              <img
                src={ExploraDetination5}
                alt="Explora Journeys luxury ship docked in a scenic Mediterranean port"
                className="luc-why-img-main"
              />
              <div className="luc-why-img-overlay"></div>
            </div>
            <div className="luc-why-img-accent-wrap" style={{ color: "#fff" }}>
              <img
                src={ExploraDetination6}
                alt="Explora Journeys luxury ocean cruise travel destination"
                className="luc-why-img-accent"
              />
              <div className="luc-why-img-badge">
                <span className="luc-why-badge-num">5</span>
                <span className="luc-why-badge-text">Key Regions</span>
              </div>
            </div>
          </div>

          {/* RIGHT — content */}
          <div className="luc-why-content">
            <h2 className="luc-why-title">
              Destinations Matter More Than the Ship
            </h2>
            <div className="aac-accent-line aac-accent-white"></div>
            <p className="luc-why-intro">
              Unlike larger cruise lines with dramatically different vessels,
              Explora Journeys encourages travelers to choose based on
              destination.
            </p>
            <p className="luc-why-intro">
              As additional ships join the fleet, your options continue to
              expand across popular luxury regions:
            </p>

            <div className="luc-why-features">
              {[
                {
                  num: "01",
                  title: "Mediterranean",
                  desc: "Historic ports, coastal villages, and immersive regional culinary experiences.",
                },
                {
                  num: "02",
                  title: "Northern Europe",
                  desc: "Scenic coastlines, dramatic fjords, and historic Baltic or Scandinavian cultural capitals.",
                },
                {
                  num: "03",
                  title: "Caribbean",
                  desc: "Boutique, luxury island escapes paired with uniquely extended stays in port.",
                },
                {
                  num: "04",
                  title: "Middle East",
                  desc: "Striking contrasts between innovative modern cities and deeply rooted ancient history.",
                },
                {
                  num: "05",
                  title: "North America",
                  desc: "Select seasonal voyages hitting refined seaside locations and coastal tracks.",
                },
              ]
                .slice(0, readMoreWhy ? 5 : 3)
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

            <div className="Scenic_readmore_wrapper" style={{ marginTop: "25px", textAlign: "left" }}>
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

      {/* ── EXPLORA FLEET DINING INCLUSIONS ───── */}
      <section className="dmg-info-section dmg-bg-soft" id="dmg-accommodations">
        <div className="dmg-info-container">
          <div className="dmg-info-grid">
            <div className="dmg-info-content">
              <h2 className="dmg-info-title">
                Dining Across the Explora Fleet
              </h2>
              <div className="dmg-info-accent"></div>

              <p className="dmg-info-lead">
                Every Explora ship emphasizes culinary excellence, offering
                diverse experiences that remain beautifully consistent
                throughout the fleet.
              </p>

              <div className="dmg-info-features dmg-info-features-scrollable">
                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Multiple Specialty Restaurants
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Featuring exceptional, curated international cuisine
                      across diverse venues.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Elegant Casual Dining
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Relaxed yet refined environments that prioritize comfort
                      without compromising quality.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Chef-Inspired Menus
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Crafted with fresh seasonal ingredients and vibrant global
                      flavors.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Oceanfront Dining Venues
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Many of the onboard restaurants offer stunning, panoramic
                      sea views.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="dmg-info-media">
              <div className="dmg-media-wrapper">
                <img
                  src={FineDining}
                  alt="Explora Journeys fine dining luxury experience"
                  className="dmg-media-img"
                  style={{ height: "73vh" }}
                />
                <div className="dmg-media-overlay"></div>

                <div className="dmg-media-badge">
                  <span>Culinary Excellence</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SUITE CONSISTENCY ──────────────────────────────────────── */}
      <section className="Lfsg-section Lfsg-bg-dark" id="Lfsg-suites">
        <div className="Lfsg-container">
          <div className="Lfsg-section-header">
            <h2 className="Lfsg-h2-white">
              Does One Ship Offer Better Suites?
            </h2>
            <div className="Lfsg-accent-line-white" />
          </div>

          <div className="Lfsg-mistakes-grid">
            {[
              {
                title: "Oceanfront Suites",
                desc: "Every suite across the entire fleet offers ocean views — there are no interior cabins on any Explora Journeys ship.",
              },
              {
                title: "Private Terraces",
                desc: "Each accommodation includes a large private outdoor living space to enjoy the ocean at any time of day.",
              },
              {
                title: "Walk-In Wardrobes",
                desc: "Suites are designed for extended luxury travel with generous storage and wardrobe space throughout.",
              },
              {
                title: "Luxury Bedding & Bathrooms",
                desc: "Premium fixtures, upscale finishes, and exceptional comfort are consistent standards on every ship in the fleet.",
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
            <h2 className="Asc-h2">Experience the Caribbean with Explora</h2>
            <div className="Asc-accent-line"></div>
            <p className="Asc-video-intro">
              Journey through the beauty of the Caribbean with Explora Journeys
              — crystal-clear waters, vibrant island culture, and the refined
              elegance of luxury ocean travel.
            </p>
          </div>

          <div className="Asc-video-wrapper">
            <div className="Asc-video-frame">
              <iframe
                src="https://www.youtube.com/embed/XrrbICIeWhQ"
                title="Chapter Two: Tales of the Caribbean Sea I Explora Journeys"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* ══ WELLNESS ON EVERY SHIP ═══════════════════════════════════════════════════ */}
      <section className="adg-section" id="adg-worth-it-europe">
        <div className="adg-container">
          <div className="adg-section-header" style={{ marginBottom: "60px" }}>
            <h2 className="adg-h2">Wellness on Every Ship</h2>
            <div className="adg-accent-line"></div>
          </div>
          <div
            className="adg-split-layout"
            style={{ alignItems: "flex-start" }}
          >
            <div className="adg-content-card-side">
              <img
                src={LuxuryOceanfrontSuites}
                alt="Explora Journeys luxury spa and ocean wellness experience"
                className="adg-side-image"
                style={{ height: "33vh" }}
              />
              <div className="adg-info-card">
                <div className="adg-card-meta">
                  <Sparkles size={28} />
                  <span className="adg-meta-label">Ocean Wellness</span>
                </div>
                <p className="adg-card-lead">
                  Explora Journeys places wellness at the center of every
                  voyage.
                </p>
                <div className="adg-card-divider"></div>
                <p className="adg-card-subtext">
                  Designed to guide guests into an "Ocean State of Mind," the
                  fleet features expansive physical and mental well-being
                  spaces.
                </p>
                <p className="adg-card-subtext" style={{ marginTop: "18px" }}>
                  Guests seeking genuine rejuvenation and deep relaxation will
                  enjoy beautifully similar luxury experiences regardless of
                  their ship selection.
                </p>
              </div>
            </div>
            <div className="adg-list-side">
              {[
                { title: "Luxury Spa", icon: <Sparkles size={20} /> },
                { title: "Fitness Center", icon: <Dumbbell size={20} /> },
                { title: "Outdoor Wellness Areas", icon: <Sun size={20} /> },
                { title: "Multiple Pools", icon: <Waves size={20} /> },
                { title: "Relaxation Lounges", icon: <Heart size={20} /> },
                { title: "Wellness Programs", icon: <Compass size={20} /> },
                {
                  title: "Beauty Salon & Barber",
                  icon: <Scissors size={20} />,
                },
                {
                  title: "Yoga & Mindfulness Studio",
                  icon: <Flower2 size={20} />,
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

      {/* ── WHO SHOULD SAIL ────────────────────────────────────────── */}
      <section className="Asc-section Asc-bg-white" id="Asc-who">
        <div className="Asc-container">
          <div className="Asc-section-header">
            <h2 className="Asc-h2">Who Should Sail Explora Journeys?</h2>
            <div className="Asc-accent-line"></div>
          </div>

          <div className="Asc-who-grid">
            <div className="Asc-who-card Asc-who-yes">
              <h3 className="Asc-who-title">Ideal For</h3>
              <ul className="Asc-who-list">
                {[
                  "Luxury without formality",
                  "Spacious suite accommodations",
                  "Fine dining enthusiasts",
                  "Relaxation-focused travelers",
                  "Smaller ship atmosphere",
                  "Destination-focused voyages",
                  "Personalized, attentive service",
                  "Elegant European design lovers",
                ].map((item, i) => (
                  <li key={i}>
                    <Check size={16} className="Asc-icon-green" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="Asc-who-card Asc-who-no">
              <h3 className="Asc-who-title">Less Suited For</h3>
              <ul className="Asc-who-list">
                {[
                  "Budget-focused travelers",
                  "Families seeking large waterparks",
                  "Nonstop entertainment seekers",
                  "Travelers expecting fully included excursions",
                  "Party-focused cruise guests",
                ].map((item, i) => (
                  <li key={i}>
                    <Minus size={16} className="Asc-icon-muted" />
                    {item}
                  </li>
                ))}
              </ul>
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
                  help travelers identify which Explora Journeys ship and
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
              Journeys ship.
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
                  Ready to Find the Right <br /> Explora Ship for You?
                </h2>
                <div className="Asc-help-accent"></div>
              </div>

              <div className="Asc-help-grid">
                <div className="Asc-help-info">
                  <p className="Asc-help-intro">
                    Connect with Angela Hughes and the expert team at Trips
                    &amp; Ships Luxury Travel for personalized luxury cruise
                    planning tailored to your travel style, preferences, and
                    ideal destinations.
                  </p>

                  <p className="Asc-help-intro">
                    From ship selection and suite recommendations to itinerary
                    planning and exclusive amenities, expert support helps
                    travelers maximize the value of every Explora Journeys
                    experience.
                  </p>

                  <p className="Asc-help-intro">
                    Whether you are new to Explora Journeys or a returning guest
                    seeking a new destination, personalized guidance helps you
                    find the perfect voyage.
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
                      "Personalized ship and itinerary selection",
                      "Exclusive luxury travel benefits",
                      "Suite and destination recommendations",
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

export default WhichExploraShip;
