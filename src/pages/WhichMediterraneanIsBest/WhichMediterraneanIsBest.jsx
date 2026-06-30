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
  Sparkles,
  Compass,
  Anchor,
  Waves,
  Sun,
} from "lucide-react";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela.jpeg";

import HeroImage1 from "../../assets/WhichMediterraneanItineraryIsBest/CONSIDERATIO-MED-copia-Summer.jpg";
import HeroImage2 from "../../assets/WhichMediterraneanItineraryIsBest/explora-II-mediterranean-coastal-cruise-view.jpg";
import HeroImage3 from "../../assets/WhichMediterraneanItineraryIsBest/EXPLORAI-Mediterranean.jpg";
import Mediterraneanwest from "../../assets/WhichMediterraneanItineraryIsBest/amalfi-coast-italy-mediterranean-hero-summer-2025.jpg";
import Mediterraneansea from "../../assets/WhichMediterraneanItineraryIsBest/greece-zakynthos-blue-caves-mediterranean-summer-2025.jpg";
import MediterraneanWestPort from "../../assets/WhichMediterraneanItineraryIsBest/explora-ii-amalfi-coast-mediterranean-cruise.jpg";
import MediterraneanGreekPort from "../../assets/WhichMediterraneanItineraryIsBest/santorini-greece-mediterranean-luxury-cruise-view.jpg";
import Mediterraneancta from "../../assets/WhichMediterraneanItineraryIsBest/EXPLORA-II-Mediterranean2.jpg";

// import WesternMed from "../../assets/WhichMediterraneanItineraryIsBest/western-mediterranean.jpg";
// import EasternMed from "../../assets/WhichMediterraneanItineraryIsBest/eastern-mediterranean.jpg";
// import GreekIslands from "../../assets/WhichMediterraneanItineraryIsBest/greek-islands.jpg";
// import AdriaticCruise from "../../assets/WhichMediterraneanItineraryIsBest/adriatic-cruise.jpg";

// import FrenchRiviera from "../../assets/WhichMediterraneanItineraryIsBest/french-riviera.jpg";
// import GrandMed from "../../assets/WhichMediterraneanItineraryIsBest/grand-mediterranean.jpg";

// import MedShip from "../../assets/WhichMediterraneanItineraryIsBest/mediterranean-ship-cta.jpg";
// import MedCompare1 from "../../assets/WhichMediterraneanItineraryIsBest/med-compare-1.jpg";
// import MedCompare2 from "../../assets/WhichMediterraneanItineraryIsBest/med-compare-2.jpg";

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
      name: "Which Mediterranean Itinerary Is Best?",
      url: "https://tripsandships.com/which-mediterranean-itinerary-is-best",
      description:
        "Not sure which Mediterranean cruise itinerary to choose? Compare the Western, Eastern, Adriatic, Greek Islands, French Riviera, and Grand Mediterranean itineraries to find the perfect luxury cruise.",
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
          name: "Which Mediterranean Itinerary Is Best?",
          item: "https://tripsandships.com/which-mediterranean-itinerary-is-best",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Which Mediterranean itinerary is best for first-time cruisers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Western Mediterranean is generally recommended because it includes iconic destinations such as Barcelona, Rome, and the French Riviera.",
          },
        },
        {
          "@type": "Question",
          name: "Is the Western or Eastern Mediterranean better?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Neither is universally better. Western itineraries focus on Italy, France, and Spain, while Eastern cruises emphasize Greece, Turkey, and ancient history.",
          },
        },
        {
          "@type": "Question",
          name: "Which itinerary includes the Greek Islands?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Greek Island cruises and many Eastern Mediterranean itineraries include destinations such as Santorini, Mykonos, Rhodes, and Crete.",
          },
        },
        {
          "@type": "Question",
          name: "Are Adriatic cruises less crowded?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Many Adriatic itineraries visit smaller ports that offer a quieter and more intimate travel experience.",
          },
        },
        {
          "@type": "Question",
          name: "What is a Grand Mediterranean cruise?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "These longer voyages combine multiple Mediterranean regions into one itinerary, often including Spain, France, Italy, Greece, Croatia, Turkey, and Malta.",
          },
        },
        {
          "@type": "Question",
          name: "Which Mediterranean cruise is best for luxury travelers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "French Riviera, Italian Coast, and Adriatic itineraries are especially popular among luxury travelers.",
          },
        },
        {
          "@type": "Question",
          name: "When is the best time to cruise the Mediterranean?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Spring and early fall generally provide pleasant weather, comfortable temperatures, and fewer crowds.",
          },
        },
        {
          "@type": "Question",
          name: "Are small ships better for Mediterranean cruises?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Many travelers prefer small ships because they can access charming ports unavailable to larger vessels.",
          },
        },
        {
          "@type": "Question",
          name: "How long should a Mediterranean cruise be?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Seven to ten nights are ideal for first-time visitors, while two-week or longer itineraries allow for deeper exploration.",
          },
        },
        {
          "@type": "Question",
          name: "Can I visit multiple countries on one Mediterranean cruise?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Most Mediterranean cruises visit several countries during a single voyage.",
          },
        },
        {
          "@type": "Question",
          name: "How does booking through a luxury travel advisor like Angela Hughes benefit my Mediterranean cruise?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Booking through Angela Hughes and Trips & Ships Luxury Travel provides expert itinerary matching, exclusive shipboard benefits, priority reservations, and personalized planning support tailored to your travel style.",
          },
        },
        {
          "@type": "Question",
          name: "What is the difference between a cruise and a land tour in the Mediterranean?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A Mediterranean cruise allows you to visit multiple coastal cities and countries without unpacking more than once or arranging regional transportation, whereas a land tour allows for deeper inland exploration of a single country or city.",
          },
        },
        {
          "@type": "Question",
          name: "What should I pack for a Mediterranean cruise?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Pack lightweight, breathable clothing for daytime shore excursions, comfortable walking shoes for cobblestone streets, modest attire for visiting historic religious sites, swimwear, and smart-casual attire for onboard evening dining.",
          },
        },
        {
          "@type": "Question",
          name: "Are shore excursions included in luxury Mediterranean cruises?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Shore excursions are typically not included in standard cruise lines, but ultra-luxury cruise lines (such as Regent Seven Seas or select boutique expeditions) include them in the upfront fare, while others offer customizable small-group excursions for an additional fee.",
          },
        },
        {
          "@type": "Question",
          name: "Is it easy to explore Mediterranean cruise ports on my own?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, many Mediterranean ports like Barcelona, Villefranche (for Nice/Monaco), and Venice are very pedestrian-friendly and have accessible public transport, making it easy to explore independently, though booking guided tours is recommended for key historical sites like Rome or Ephesus.",
          },
        },
        {
          "@type": "Question",
          name: "How far in advance should I book a Mediterranean cruise?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For the best suite availability, itinerary options, and early booking promotions, it is recommended to book your Mediterranean cruise 9 to 12 months in advance, especially for high-demand summer sailings and popular boutique small-ship voyages.",
          },
        },
      ],
    },
  ],
};

/* ── Itinerary data (mirrors exploraSuites pattern) ─────────────── */
const medItineraries = [
  {
    id: "western",
    title: "Western Mediterranean",
    badge: "Western Med",
    icon: Anchor,
    // image: WesternMed,

    desc: "The Western Mediterranean is the most popular itinerary for first-time visitors. Combining iconic cities, world-renowned landmarks, and the glamour of the French Riviera, it delivers a classic introduction to Mediterranean cruising.",

    columns: [
      {
        label: "Typical Destinations:",
        items: [
          "Barcelona",
          "Rome (Civitavecchia)",
          "Florence (Livorno)",
          "Naples",
          "Marseille",
          "Monte Carlo",
          "Palma de Mallorca",
        ],
      },
      {
        label: "Highlights:",
        items: [
          "World-famous landmarks",
          "Italian cuisine",
          "French Riviera",
          "Renaissance art",
          "Coastal villages",
          "Mediterranean beaches",
        ],
      },
    ],

    themeLabel: "Best for First-Time Mediterranean Travelers",
    themeText:
      "The combination of Rome, Barcelona, Florence, and the French Riviera offers an ideal introduction to the region's culture, history, and cuisine.",
  },

  {
    id: "eastern",
    title: "Eastern Mediterranean",
    badge: "Eastern Med",
    icon: Sparkles,
    // image: EasternMed,

    desc: "The Eastern Mediterranean combines thousands of years of history with breathtaking island scenery. Ideal for travelers drawn to archaeology, ancient civilizations, and iconic island landscapes.",

    columns: [
      {
        label: "Typical Destinations:",
        items: [
          "Athens (Piraeus)",
          "Santorini",
          "Mykonos",
          "Kusadasi (Ephesus)",
          "Istanbul",
          "Rhodes",
          "Crete",
        ],
      },
      {
        label: "Highlights:",
        items: [
          "Ancient ruins",
          "Greek Islands",
          "Byzantine history",
          "Whitewashed villages",
          "Stunning sunsets",
          "Rich cultural heritage",
        ],
      },
    ],

    themeLabel: "Best for Ancient History & Island Culture",
    themeText:
      "Few itineraries offer the same depth of historical discovery — from Ephesus and the Acropolis to the blue-domed churches of Santorini.",
  },

  {
    id: "greek-islands",
    title: "Greek Islands",
    badge: "Greek Islands",
    icon: Sun,
    // image: GreekIslands,

    desc: "Dedicated Greek Islands itineraries focus almost entirely on Greece's most celebrated destinations. Perfect for travelers wanting to deeply immerse themselves in island culture, beaches, and cuisine.",

    columns: [
      {
        label: "Popular Islands:",
        items: [
          "Santorini — dramatic cliffs & sunsets",
          "Mykonos — beaches & charming villages",
          "Crete — archaeology & cuisine",
          "Rhodes — medieval architecture",
          "Corfu — Venetian influences",
        ],
      },
      {
        label: "Highlights:",
        items: [
          "Crystal-clear waters",
          "Picturesque beaches",
          "Island village life",
          "Greek cuisine & wine",
          "Scenic sailing routes",
        ],
      },
    ],

    themeLabel: "Best for Island Hopping",
    themeText:
      "For travelers who dream of Greece specifically, a dedicated Greek Islands itinerary offers unmatched immersion in one of the world's most iconic destinations.",
  },

  {
    id: "adriatic",
    title: "Adriatic Cruises",
    badge: "Adriatic",
    icon: Waves,
    // image: AdriaticCruise,

    desc: "The Adriatic has become one of Europe's fastest-growing luxury cruise destinations. Smaller boutique ships access charming ports unavailable to larger vessels — making this one of the most intimate Mediterranean experiences available.",

    columns: [
      {
        label: "Popular Ports:",
        items: ["Dubrovnik", "Split", "Kotor", "Venice", "Rovinj", "Zadar"],
      },
      {
        label: "Highlights:",
        items: [
          "Medieval walled cities",
          "UNESCO World Heritage Sites",
          "Scenic Dalmatian coastline",
          "Smaller, less-crowded ports",
          "Hidden coves and islands",
        ],
      },
    ],

    themeLabel: "Best for Hidden Gems",
    themeText:
      "Travelers returning to the Mediterranean often discover the Adriatic offers fresh experiences far beyond the classic routes — perfect for repeat visitors.",
  },

  {
    id: "french-riviera",
    title: "French Riviera & Italian Coast",
    badge: "French Riviera",
    icon: Compass,
    // image: FrenchRiviera,

    desc: "These voyages emphasize elegance, world-class cuisine, and sophisticated coastal destinations. Strongly favored by experienced luxury travelers who appreciate fine dining, boutique experiences, and glamorous marinas.",

    columns: [
      {
        label: "Popular Stops:",
        items: [
          "Nice",
          "Cannes",
          "Monte Carlo",
          "Portofino",
          "Cinque Terre",
          "Livorno",
        ],
      },
      {
        label: "Highlights:",
        items: [
          "Luxury shopping",
          "Michelin-quality dining",
          "Scenic coastal beauty",
          "Historic villages",
          "Elegant marina culture",
        ],
      },
    ],

    themeLabel: "Best for Luxury Travelers",
    themeText:
      "No other Mediterranean itinerary captures the spirit of European luxury quite like the French Riviera and Italian Coast.",
  },

  {
    id: "grand-med",
    title: "Grand Mediterranean",
    badge: "Grand Med",
    icon: Ship,
    // image: GrandMed,

    desc: "Grand Mediterranean voyages combine multiple regions into one extended journey — ideal for travelers who want to experience the full breadth of Southern Europe's culture, landscapes, and cuisine in a single voyage.",

    columns: [
      {
        label: "Regions Often Included:",
        items: [
          "Spain",
          "France",
          "Italy",
          "Greece",
          "Croatia",
          "Turkey",
          "Malta",
        ],
      },
      {
        label: "Benefits:",
        items: [
          "Greater destination variety",
          "Fewer required flights",
          "Longer port stays",
          "Comprehensive cultural exploration",
          "Deeply immersive experience",
        ],
      },
    ],

    themeLabel: "Best for Travelers With More Time",
    themeText:
      "Grand Mediterranean voyages reward those willing to dedicate two weeks or more — bringing together the very best of the region in one unforgettable journey.",
  },
];

/* ── FAQ Component ───────────────────────────────────────────────── */
function FAQ() {
  const [open, setOpen] = useState(null);

  const faqData = [
    {
      q: "Which Mediterranean itinerary is best for first-time cruisers?",
      a: "The Western Mediterranean is generally recommended because it includes iconic destinations such as Barcelona, Rome, and the French Riviera.",
    },
    {
      q: "Is the Western or Eastern Mediterranean better?",
      a: "Neither is universally better. Western itineraries focus on Italy, France, and Spain, while Eastern cruises emphasize Greece, Turkey, and ancient history.",
    },
    {
      q: "Which itinerary includes the Greek Islands?",
      a: "Greek Island cruises and many Eastern Mediterranean itineraries include destinations such as Santorini, Mykonos, Rhodes, and Crete.",
    },
    {
      q: "Are Adriatic cruises less crowded?",
      a: "Yes. Many Adriatic itineraries visit smaller ports that offer a quieter and more intimate travel experience.",
    },
    {
      q: "What is a Grand Mediterranean cruise?",
      a: "These longer voyages combine multiple Mediterranean regions into one itinerary, often including Spain, France, Italy, Greece, Croatia, Turkey, and Malta.",
    },
    {
      q: "Which Mediterranean cruise is best for luxury travelers?",
      a: "French Riviera, Italian Coast, and Adriatic itineraries are especially popular among luxury travelers.",
    },
    {
      q: "When is the best time to cruise the Mediterranean?",
      a: "Spring and early fall generally provide pleasant weather, comfortable temperatures, and fewer crowds.",
    },
    {
      q: "Are small ships better for Mediterranean cruises?",
      a: "Many travelers prefer small ships because they can access charming ports unavailable to larger vessels.",
    },
    {
      q: "How long should a Mediterranean cruise be?",
      a: "Seven to ten nights are ideal for first-time visitors, while two-week or longer itineraries allow for deeper exploration.",
    },
    {
      q: "Can I visit multiple countries on one Mediterranean cruise?",
      a: "Yes. Most Mediterranean cruises visit several countries during a single voyage.",
    },
    {
      q: "How does booking through a luxury travel advisor like Angela Hughes benefit my Mediterranean cruise?",
      a: "Booking through Angela Hughes and Trips & Ships Luxury Travel provides expert itinerary matching, exclusive shipboard benefits, priority reservations, and personalized planning support tailored to your travel style.",
    },
    {
      q: "What is the difference between a cruise and a land tour in the Mediterranean?",
      a: "A Mediterranean cruise allows you to visit multiple coastal cities and countries without unpacking more than once or arranging regional transportation, whereas a land tour allows for deeper inland exploration of a single country or city.",
    },
    {
      q: "What should I pack for a Mediterranean cruise?",
      a: "Pack lightweight, breathable clothing for daytime shore excursions, comfortable walking shoes for cobblestone streets, modest attire for visiting historic religious sites, swimwear, and smart-casual attire for onboard evening dining.",
    },
    {
      q: "Are shore excursions included in luxury Mediterranean cruises?",
      a: "Shore excursions are typically not included in standard cruise lines, but ultra-luxury cruise lines (such as Regent Seven Seas or select boutique expeditions) include them in the upfront fare, while others offer customizable small-group excursions for an additional fee.",
    },
    {
      q: "Is it easy to explore Mediterranean cruise ports on my own?",
      a: "Yes, many Mediterranean ports like Barcelona, Villefranche (for Nice/Monaco), and Venice are very pedestrian-friendly and have accessible public transport, making it easy to explore independently, though booking guided tours is recommended for key historical sites like Rome or Ephesus.",
    },
    {
      q: "How far in advance should I book a Mediterranean cruise?",
      a: "For the best suite availability, itinerary options, and early booking promotions, it is recommended to book your Mediterranean cruise 9 to 12 months in advance, especially for high-demand summer sailings and popular boutique small-ship voyages.",
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
const WhichMediterraneanItineraryIsBest = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [readMore, setReadMore] = useState(false);
  const [activeItinerary, setActiveItinerary] = useState("western");
  const currentItinerary =
    medItineraries.find((s) => s.id === activeItinerary) || medItineraries[0];

  const ActiveIcon = currentItinerary.icon;

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
          Which Mediterranean Itinerary Is Best? | Complete Luxury Mediterranean
          Cruise Guide
        </title>
        <meta
          name="title"
          content="Which Mediterranean Itinerary Is Best? | Complete Luxury Mediterranean Cruise Guide"
        />
        <meta
          name="description"
          content="Not sure which Mediterranean cruise itinerary to choose? Compare the Western, Eastern, Adriatic, Greek Islands, French Riviera, and Grand Mediterranean itineraries to find the perfect luxury cruise."
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
            Which Mediterranean <br /> Itinerary Is Best?
          </h1>

          <p>
            The Mediterranean offers centuries of history, culture, and
            coastline — but not every itinerary is the right fit for every
            traveler.
          </p>

          <p>
            Choosing the right route isn't about picking the most popular option
            — it's about matching the destinations, pace, and style of travel to
            what you most want to experience.
          </p>

          {readMore && (
            <>
              <p>
                Some travelers dream of the Greek Islands, while others prefer
                the art, history, and cuisine of Italy, France, and Spain.
                Others seek hidden Adriatic ports, smaller coastal towns, or
                extended grand voyages that combine multiple regions into one
                unforgettable journey.
              </p>

              <p>
                According to luxury cruise expert Angela Hughes, understanding
                your travel priorities is the most important factor when
                selecting the right Mediterranean itinerary.
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

      {/* ══ UNDERSTANDING THE MEDITERRANEAN REGIONS ════════════════════════ */}
      <section className="dac-families-section">
        <div className="dac-families-container">
          <div className="dac-families-grid">
            {/* Left Content Column */}
            <div className="dac-families-left">
              <div className="dac-families-heading-wrap">
                <h2 className="dac-families-title">
                  Understanding the Mediterranean Regions
                </h2>
                <div className="dac-families-accent"></div>
              </div>

              <div className="dac-families-features">
                {[
                  {
                    title: "Western Mediterranean",
                    desc: "Focuses on the classic coastlines, historic art cities, and glamorous rivieras of Italy, France, Spain, and Monaco.",
                  },
                  {
                    title: "Eastern Mediterranean",
                    desc: "Features ancient history, iconic architecture, and vibrant cultures across Greece, Turkey, Croatia, and surrounding destinations.",
                  },
                  {
                    title: "Adriatic Sea",
                    desc: "Highlights dramatic landscapes, pristine medieval old towns, and beautiful islands throughout Croatia, Montenegro, Slovenia, and Italy.",
                  },
                  {
                    title: "Greek Islands",
                    desc: "Dedicated itineraries deeply exploring Greece's most famous, sun-drenched islands, historical ports, and whitewashed villages.",
                  },
                  {
                    title: "Grand Mediterranean",
                    desc: "Longer, comprehensive cruises combining both Eastern and Western Mediterranean destinations for the ultimate regional voyage.",
                  },
                ].map((feat, idx) => (
                  <div key={idx} className="dac-families-feature-item">
                    <div className="dac-families-feature-icon-box">
                      <Check size={18} strokeWidth={3} />
                    </div>

                    <div className="dac-families-feature-texts">
                      <h3 className="dac-families-feature-title">
                        {feat.title}
                      </h3>
                      <p className="dac-families-feature-desc">{feat.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Images Column */}
            <div className="dac-families-right">
              <div className="dac-families-image-wrapper">
                <div className="dac-families-img-card dac-families-img-card--primary">
                  <img
                    src={Mediterraneanwest}
                    alt="Scenic coastal village in the Mediterranean"
                    className="dac-families-img"
                  />
                  <div className="dac-families-img-caption">
                    Scenic coastal village
                  </div>
                </div>

                <div className="dac-families-img-card dac-families-img-card--secondary">
                  <img
                    src={Mediterraneansea}
                    alt="Historic harbor in Europe"
                    className="dac-families-img"
                  />
                  <div className="dac-families-img-caption">
                    Crystal-Clear Mediterranean Waters
                  </div>
                </div>
              </div>
            </div>
          </div>
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
              Discover the Mediterranean with Luxury Cruising
            </h2>
            <div className="Asc-accent-line"></div>
            <p className="Asc-video-intro">
              Experience the timeless allure of the Mediterranean — from the
              sun-drenched Greek Islands and ancient ruins of Rome to the
              glamour of the French Riviera and the hidden coves of the
              Adriatic.
            </p>
          </div>

          <div className="Asc-video-wrapper">
            <div className="Asc-video-frame">
              <iframe
                src="https://www.youtube.com/embed/2nuohDzg2Oo"
                title="Discover Explora Journeys' Culinary Experiences"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* ── ITINERARY DETAIL PANEL ───────────────────────────────────── */}
      <section className="luc-destinations-section" id="luc-destinations">
        <div className="luc-destinations-container">
          <div className="luc-destinations-header">
            <h2 className="luc-destinations-title">
              Mediterranean Itineraries in Detail
            </h2>

            <div className="adg-c-accent-line"></div>

            <p className="luc-destinations-intro">
              From the iconic Western Mediterranean to the hidden harbors of the
              Adriatic, each itinerary offers a genuinely different luxury
              experience. Explore each option to find your perfect voyage.
            </p>
          </div>

          {/* Layout */}
          <div className="luc-dest-layout">
            {/* Sidebar nav */}
            <nav className="luc-dest-nav">
              {medItineraries.map((item) => {
                const NavIcon = item.icon;
                const isActive = activeItinerary === item.id;

                return (
                  <button
                    key={item.id}
                    className={`luc-dest-nav-btn ${
                      isActive ? "luc-dest-nav-btn--active" : ""
                    }`}
                    onClick={() => setActiveItinerary(item.id)}
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
            <div className="luc-dest-panel" key={activeItinerary}>
              {/* Image */}
              <div className="luc-dest-img-wrap">
                <img
                  src={currentItinerary.image}
                  alt={currentItinerary.title}
                  className="luc-dest-img"
                />

                <div className="luc-dest-img-overlay">
                  <div className="luc-dest-img-icon">
                    <ActiveIcon size={22} strokeWidth={1.6} />
                  </div>

                  <span className="luc-dest-img-title">
                    {currentItinerary.title}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="luc-dest-panel-desc">{currentItinerary.desc}</p>

              {/* Columns */}
              <div className="luc-dest-columns">
                {currentItinerary.columns.map((col, cIdx) => (
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
                    {currentItinerary.themeLabel}
                  </span>

                  <p className="luc-dest-theme-note-text">
                    {currentItinerary.themeText}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHICH ITINERARY FOR DIFFERENT TRAVELERS ─────────────────── */}
      <section className="luc-why-section" id="luc-why-itineraries">
        <div className="luc-why-container">
          {/* LEFT — stacked images */}
          <div className="luc-why-images">
            <div className="luc-why-img-main-wrap" style={{ color: "#fff" }}>
              <img
                src={MediterraneanWestPort}
                alt="Western Mediterranean cruise port destination"
                className="luc-why-img-main"
              />
              <div className="luc-why-img-overlay"></div>
            </div>
            <div className="luc-why-img-accent-wrap" style={{ color: "#fff" }}>
              <img
                src={MediterraneanGreekPort}
                alt="Greek Islands luxury cruise experience"
                className="luc-why-img-accent"
              />
              <div className="luc-why-img-badge">
                <span className="luc-why-badge-num">6</span>
                <span className="luc-why-badge-text">Itinerary Regions</span>
              </div>
            </div>
          </div>

          {/* RIGHT — content */}
          <div className="luc-why-content">
            <h2 className="luc-why-title">
              Which Mediterranean Itinerary Is Best for You?
            </h2>
            <div className="aac-accent-line aac-accent-white"></div>
            <p className="luc-why-intro">
              Because the Mediterranean offers such extraordinary variety, every
              traveler can find a voyage that feels perfectly matched to their
              interests.
            </p>
            <p className="luc-why-intro">
              The right itinerary depends on who you are, how you prefer to
              travel, and what you most want to experience:
            </p>

            <div className="luc-why-features">
              {[
                {
                  num: "01",
                  title: "First-Time Visitors",
                  desc: "Western Mediterranean — an iconic introduction covering Rome, Barcelona, Florence, and the French Riviera.",
                },
                {
                  num: "02",
                  title: "History & Culture Lovers",
                  desc: "Eastern Mediterranean — ancient ruins, Byzantine heritage, and the awe-inspiring Greek Islands.",
                },
                {
                  num: "03",
                  title: "Luxury Travelers",
                  desc: "French Riviera & Italian Coast — elegant marinas, Michelin dining, and sophisticated coastal destinations.",
                },
                {
                  num: "04",
                  title: "Repeat Mediterranean Visitors",
                  desc: "Adriatic — smaller ports, UNESCO heritage, and destinations rarely reached by larger vessels.",
                },
                {
                  num: "05",
                  title: "Comprehensive Explorers",
                  desc: "Grand Mediterranean — for travelers with two weeks or more who want to experience the full breadth of Southern Europe.",
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

      {/* ── ITINERARY OVERVIEW TABLE ────────────────────────────────── */}
      <section
        className="Asc-section Asc-bg-white"
        id="Asc-fleet"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="Asc-container">
          <div className="Asc-section-header">
            <h2 className="Asc-h2">
              Mediterranean Cruise Itineraries at a Glance
            </h2>
            <div className="Asc-accent-line"></div>
          </div>

          <div className="Asc-table-wrapper">
            <table className="Asc-fleet-table">
              <thead>
                <tr>
                  <th>Itinerary</th>
                  <th>Best For</th>
                  <th>Travel Style</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>Western Mediterranean</strong>
                  </td>
                  <td>First-time visitors, city lovers</td>
                  <td>Classic & Iconic</td>
                </tr>
                <tr>
                  <td>
                    <strong>Eastern Mediterranean</strong>
                  </td>
                  <td>History lovers, island seekers</td>
                  <td>Cultural & Archaeological</td>
                </tr>
                <tr>
                  <td>
                    <strong>Greek Islands</strong>
                  </td>
                  <td>Beach lovers, Greece enthusiasts</td>
                  <td>Island Hopping</td>
                </tr>
                <tr>
                  <td>
                    <strong>Adriatic</strong>
                  </td>
                  <td>Repeat visitors, hidden gem seekers</td>
                  <td>Boutique & Intimate</td>
                </tr>
                <tr>
                  <td>
                    <strong>French Riviera &amp; Italian Coast</strong>
                  </td>
                  <td>Luxury travelers, food lovers</td>
                  <td>Elegant & Sophisticated</td>
                </tr>
                <tr>
                  <td>
                    <strong>Grand Mediterranean</strong>
                  </td>
                  <td>Comprehensive explorers</td>
                  <td>Extended Multi-Region</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="Asc-body-text" style={{ marginTop: "2rem" }}>
            Because every Mediterranean itinerary begins at such a high standard
            of cultural richness, there is truly no wrong choice — only the
            question of which destinations and experiences matter most to you.
          </p>
        </div>
      </section>

      {/* ── WHAT MAKES THE MEDITERRANEAN SPECIAL ───────────────────── */}
      <section
        className="adg-c-section adg-c-bg-white"
        id="adg-common-features"
      >
        <div className="adg-c-container">
          <div className="adg-c-section-header">
            <h2 className="adg-c-h2">
              What Makes a Mediterranean Cruise Special?
            </h2>
            <div className="adg-c-accent-line"></div>
          </div>

          <div className="adg-c-overview-layout">
            {/* LEFT — Standard experiences */}
            <div className="adg-c-overview-icons">
              {[
                "Ancient Roman ruins",
                "Greek temples",
                "Medieval fortresses",
                "Renaissance cities",
                "French vineyards",
                "Italian villages",
                "Island beaches",
                "World-class cuisine",
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
                    Unlike many cruise regions, the Mediterranean offers
                    extraordinary diversity. During a single voyage, travelers
                    may experience thousands of years of history, cuisine, and
                    culture across multiple countries.
                  </p>
                </div>
              </div>

              <div
                className="adg-c-overview-image-wrap"
                style={{ height: "250px" }}
              >
                <img
                  src={HeroImage3}
                  alt="Mediterranean cruise destination coastline"
                  className="adg-c-overview-img"
                />
                <div className="adg-c-overview-img-overlay">
                  <span className="adg-c-overview-img-label">
                    Remarkable Cultural Variety
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BEST TIME TO CRUISE THE MEDITERRANEAN */}
      <section className="adg-section" id="adg-dining">
        <div className="adg-container">
          {/* HEADER */}
          <div className="adg-header">
            <h2 className="adg-h2">
              Best Time to Cruise <br /> the Mediterranean
            </h2>

            <div className="adg-accent-line"></div>

            <p className="adg-intro">
              Each season brings its own unique advantages. Choose the perfect
              window for your travel preferences.
            </p>
          </div>

          {/* CARDS GRID */}
          <div className="adgs-grid">
            {[
              {
                key: "spring",
                accent: "adg-accent-spring",
                eyebrow: "April–May",
                icon: <Sparkles size={16} />,
                title: "Spring",
                items: [
                  "Pleasant temperatures ideal for sightseeing",
                  "Lush, blooming landscapes across the coast",
                  "Fewer crowds at major historical sites",
                ],
              },
              {
                key: "summer",
                accent: "adg-accent-summer",
                eyebrow: "June–August",
                icon: <Sun size={16} />,
                title: "Summer",
                items: [
                  "Warm beaches and perfect swimming weather",
                  "Long daylight hours to maximize your days ashore",
                  "Vibrant, energetic coastal atmosphere",
                  "Note: Summer is also the busiest travel season",
                ],
              },
              {
                key: "fall",
                accent: "adg-accent-fall",
                eyebrow: "September–October",
                icon: <Compass size={16} />,
                title: "Fall",
                items: [
                  "Comfortable weather without intense summer heat",
                  "Smaller crowds returning to towns and ports",
                  "Warm sea temperatures perfect for late-season dips",
                  "Often considered by experienced travelers as the ideal time",
                ],
              },
            ].map((item) => (
              <div key={item.key} className={`adg-card ${item.accent}`}>
                {/* BODY */}
                <div className="adg-card-body" style={{ paddingTop: "24px" }}>
                  <h3 className="adg-card-title" style={{ marginTop: "0" }}>
                    {item.title}
                  </h3>

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

      {/* ── SECOND VIDEO ───────────────────────────────────────────── */}
      <section
        className="Asc-video-section"
        id="Asc-video-2"
        style={{ backgroundColor: "var(--bg-white)" }}
      >
        <div className="Asc-container">
          <div className="Asc-section-header">
            <h2 className="Asc-h2">The Art of Designing Explora Journeys</h2>
            <div className="Asc-accent-line"></div>
            <p className="Asc-video-intro">
              From elegant ocean-front spaces to thoughtfully curated interiors,
              see how leading architects and world-renowned design brands create
              a seamless connection between guests, the sea, and modern European
              luxury.
            </p>
          </div>

          <div className="Asc-video-wrapper">
            <div className="Asc-video-frame">
              <iframe
                src="https://www.youtube.com/embed/qx_9Nt6kYpI"
                title="The Making Of A Beautiful Ship: A Film About Design | Explora Journeys"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* ── SMALL SHIP VS LARGE SHIP — DINING SECTION PATTERN ──────── */}
      <section className="dmg-info-section dmg-bg-soft" id="dmg-ship-size">
        <div className="dmg-info-container">
          <div className="dmg-info-grid">
            <div className="dmg-info-content">
              <h2 className="dmg-info-title">
                Small Ship vs Large Ship Mediterranean Cruises
              </h2>
              <div className="dmg-info-accent"></div>

              <p className="dmg-info-lead">
                All Mediterranean cruise guests experience the same
                extraordinary destinations. Ship size primarily determines your
                onboard atmosphere and the range of ports you can access.
              </p>

              <div className="dmg-info-features dmg-info-features-scrollable">
                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Access to Smaller Ports
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Boutique ships reach charming harbors in the Adriatic,
                      Cinque Terre, and smaller Greek Islands unavailable to
                      larger vessels.
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
                      Smaller guest counts allow crew members to provide
                      genuinely attentive, individualized service throughout the
                      voyage.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Longer Port Stays
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Boutique voyages often allocate more time in each
                      destination, enabling deeper cultural immersion rather
                      than quick port stops.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Quieter Atmosphere
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Smaller ships create a more relaxed, uncrowded onboard
                      environment — especially appreciated after full days of
                      exploring busy ports.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="dmg-info-media">
              <div className="dmg-media-wrapper">
                <img
                  src={MediterraneanGreekPort}
                  alt="Luxury small ship Mediterranean cruise sailing through the Adriatic"
                  className="dmg-media-img"
                />
                <div className="dmg-media-overlay"></div>

                <div className="dmg-media-badge">
                  <span>Small Ship Advantage</span>
                </div>
              </div>
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
                  help travelers identify which Mediterranean itinerary and
                  luxury cruise line truly aligns with their lifestyle,
                  expectations, and travel goals.
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
              Everything you need to know about choosing the right Mediterranean
              cruise itinerary.
            </p>
          </div>
          <FAQ />
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────────── */}
      <section className="Asc-help-section">
        <div className="Asc-help-bg-wrap">
          <img
            src={Mediterraneancta}
            alt="Luxury Mediterranean cruise"
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
                  Ready to Find the Right <br /> Mediterranean Itinerary for
                  You?
                </h2>
                <div className="Asc-help-accent"></div>
              </div>

              <div className="Asc-help-grid">
                <div className="Asc-help-info">
                  <p className="Asc-help-intro">
                    Connect with Angela Hughes and the expert team at Trips
                    &amp; Ships Luxury Travel for personalized Mediterranean
                    itinerary matching and luxury cruise planning tailored to
                    your travel style, voyage length, and destination
                    priorities.
                  </p>

                  <p className="Asc-help-intro">
                    From itinerary selection and ship recommendations to
                    exclusive amenities and destination planning, expert support
                    helps travelers maximize the value of every Mediterranean
                    cruise experience.
                  </p>

                  <p className="Asc-help-intro">
                    Whether you are a first-time Mediterranean visitor or a
                    seasoned traveler ready to explore a new region,
                    personalized guidance helps you make the right decision for
                    your perfect voyage.
                  </p>

                  <div className="Asc-help-btn-container">
                    <Link to="/contact" className="Asc-help-cta-btn" style={{ textDecoration: "none" }}>
                      Start Planning Your Mediterranean Journey
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
                      "Personalized itinerary matching",
                      "Luxury cruise line comparisons",
                      "Destination-focused voyage planning",
                      "Best time to cruise recommendations",
                      "Exclusive luxury travel benefits",
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
                    discerning travelers create highly personalized
                    Mediterranean cruise experiences worldwide.
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

export default WhichMediterraneanItineraryIsBest;
