import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Users,
  MapPin,
  Award,
  Check,
  X,
  Minus,
  Plus,
  ArrowRight,
  Star,
  Sparkles,
  Ship,
  Sun,
  Flower2,
  Leaf,
  Compass,
  Anchor,
  Waves,
  Landmark,
  Umbrella,
  UtensilsCrossed,
  MapPinned,
  Home,
  Hotel,
  Plane,
  BadgePercent,
  ShieldCheck,
  Globe2,
  Utensils,
  MoonStar,
  Clock,
} from "lucide-react";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela.jpeg";

import HeroImage1 from "../../assets/WhichMediterraneanItineraryIsBest/CONSIDERATIO-MED-copia-Summer.jpg";
import HeroImage2 from "../../assets/WhichMediterraneanItineraryIsBest/explora-II-mediterranean-coastal-cruise-view.jpg";
import ExploraPort from "../../assets/WhichMediterraneanItineraryIsBest/EXPLORAI-Mediterranean.jpg";
import MediterianDay from "../../assets/WhichMediterraneanItineraryIsBest/amalfi-coast-italy-mediterranean-hero-summer-2025.jpg";
import ExploraPool from "../../assets/WhichExploraSuiteWorthUpgrade/explora-outside-suites.jpg";
import ExploraPool1 from "../../assets/WhichExploraShipChoose/explora-journeys-atoll-pool-luxury-cruise-deck.jpg";
import ExploraDining from "../../assets/ExploraIVGuide/explora-journeys-ocean-grand-terrace-suite-balcony.jpg";
import ExploraDest1 from "../../assets/WhichMediterraneanItineraryIsBest/explora-ii-amalfi-coast-mediterranean-cruise.jpg";
import LuxuryOceanfront from "../../assets/WhichMediterraneanItineraryIsBest/EXPLORA-II-Mediterranean2.jpg";
import ExploraShip from "../../assets/WhichMediterraneanItineraryIsBest/explora-II-mediterranean-coastal-cruise-view.jpg";

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
        "https://tripsandships.com/mediterranean-cruises-on-explora-journeys/#webpage",
      name: "Mediterranean Cruises on Explora Journeys",
      url: "https://tripsandships.com/mediterranean-cruises-on-explora-journeys",
      description:
        "Discover luxury Mediterranean cruises with Explora Journeys. Learn about itineraries, destinations, ports, excursions, dining, the best time to sail, and why Explora offers one of the finest ways to experience the Mediterranean.",
    },
    {
      "@type": "Article",
      "@id":
        "https://tripsandships.com/mediterranean-cruises-on-explora-journeys/#article",
      headline: "Mediterranean Cruises on Explora Journeys",
      description:
        "A complete guide to Mediterranean cruising with Explora Journeys, covering destinations, port stays, shore experiences, dining, the best time to sail, and who these voyages suit best.",
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
        "https://tripsandships.com/mediterranean-cruises-on-explora-journeys/#breadcrumb",
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
          name: "Mediterranean Cruises on Explora Journeys",
          item: "https://tripsandships.com/mediterranean-cruises-on-explora-journeys",
        },
      ],
    },
    {
      "@type": "TouristTrip",
      "@id":
        "https://tripsandships.com/mediterranean-cruises-on-explora-journeys/#touristtrip",
      name: "Mediterranean Cruise with Explora Journeys",
      touristType: "Luxury travelers, couples, retirees, solo travelers",
      itinerary: {
        "@type": "ItemList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Italian Coast" },
          { "@type": "ListItem", position: 2, name: "Greek Islands" },
          { "@type": "ListItem", position: 3, name: "French Riviera" },
          { "@type": "ListItem", position: 4, name: "Spain" },
          { "@type": "ListItem", position: 5, name: "Adriatic Coast" },
        ],
      },
    },
    {
      "@type": "Cruise",
      "@id":
        "https://tripsandships.com/mediterranean-cruises-on-explora-journeys/#cruise",
      name: "Explora Journeys Mediterranean Cruise",
      provider: {
        "@type": "TravelAgency",
        name: "Trips & Ships Luxury Travel",
      },
      departurePort: "Various Mediterranean Ports",
      description:
        "Luxury Mediterranean itineraries featuring longer port stays, overnight visits, and destination-inspired cuisine aboard an all-suite ship.",
    },
    {
      "@type": "Service",
      "@id":
        "https://tripsandships.com/mediterranean-cruises-on-explora-journeys/#service",
      serviceType: "Luxury Cruise Vacation Planning & Booking Support",
      provider: {
        "@type": "TravelAgency",
        name: "Trips & Ships Luxury Travel",
      },
      areaServed: "Worldwide",
      description:
        "Personalized planning support for Explora Journeys Mediterranean sailings, including itinerary selection, suite categories, and shore experiences.",
    },
    {
      "@type": "Review",
      "@id":
        "https://tripsandships.com/mediterranean-cruises-on-explora-journeys/#review",
      itemReviewed: {
        "@type": "Product",
        name: "Explora Journeys Mediterranean Cruise",
      },
      author: {
        "@type": "Person",
        name: "Angela Hughes",
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      reviewBody:
        "Explora Journeys offers one of the most elegant, slow-paced ways to experience the Mediterranean, with longer port stays and destination-inspired cuisine.",
    },
    {
      "@type": "ItemList",
      "@id":
        "https://tripsandships.com/mediterranean-cruises-on-explora-journeys/#itemlist",
      name: "What This Mediterranean Cruises on Explora Journeys Guide Covers",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Why Choose Explora Journeys for the Mediterranean",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Explore Iconic Mediterranean Destinations",
        },
        { "@type": "ListItem", position: 3, name: "Longer Port Stays" },
        {
          "@type": "ListItem",
          position: 4,
          name: "A Day in the Mediterranean",
        },
        { "@type": "ListItem", position: 5, name: "Shore Experiences" },
        {
          "@type": "ListItem",
          position: 6,
          name: "Dining Inspired by the Mediterranean",
        },
        {
          "@type": "ListItem",
          position: 7,
          name: "Sea Days Between Destinations",
        },
        {
          "@type": "ListItem",
          position: 8,
          name: "The Best Time to Cruise the Mediterranean",
        },
        {
          "@type": "ListItem",
          position: 9,
          name: "Who Should Choose an Explora Mediterranean Cruise?",
        },
        {
          "@type": "ListItem",
          position: 10,
          name: "Tips for Planning Your Mediterranean Voyage",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id":
        "https://tripsandships.com/mediterranean-cruises-on-explora-journeys/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Where does Explora Journeys cruise in the Mediterranean?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Itineraries often include Italy, Greece, France, Spain, Croatia, Montenegro, and other Mediterranean destinations.",
          },
        },
        {
          "@type": "Question",
          name: "Does Explora offer overnight stays?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Select itineraries include extended port visits and overnight stays, allowing for deeper destination exploration.",
          },
        },
        {
          "@type": "Question",
          name: "Are Mediterranean cruises suitable for first-time visitors?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. Explora's thoughtfully planned itineraries make it easy to experience several iconic destinations in one luxurious vacation.",
          },
        },
        {
          "@type": "Question",
          name: "What is included on an Explora Mediterranean cruise?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Your fare typically includes your oceanfront suite, multiple dining venues, Wi-Fi, entertainment, wellness facilities, fitness classes, and many onboard amenities.",
          },
        },
        {
          "@type": "Question",
          name: "Is dining inspired by Mediterranean cuisine?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Many onboard restaurants feature fresh regional ingredients and European culinary traditions.",
          },
        },
        {
          "@type": "Question",
          name: "When is the best time to cruise the Mediterranean?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Spring and autumn are popular for comfortable temperatures and fewer crowds, while summer offers warm weather and lively coastal destinations.",
          },
        },
        {
          "@type": "Question",
          name: "Is Explora good for couples?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Spacious suites, exceptional dining, and a peaceful atmosphere make it an outstanding choice for romantic Mediterranean vacations.",
          },
        },
        {
          "@type": "Question",
          name: "Are shore excursions required?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Guests may choose organized excursions or explore independently in many ports.",
          },
        },
        {
          "@type": "Question",
          name: "How long are Mediterranean cruises?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Explora offers a variety of itineraries, typically ranging from one week to longer, more immersive voyages.",
          },
        },
        {
          "@type": "Question",
          name: "Should I book through a travel advisor?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. A luxury travel advisor can help you choose the ideal itinerary, secure the best suite, and coordinate every aspect of your Mediterranean vacation.",
          },
        },
        {
          "@type": "Question",
          name: "Which ports serve as the main homeports for Explora in the Mediterranean?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Explora Journeys sailings primarily depart from major Mediterranean hubs including Barcelona (Spain), Civitavecchia/Rome (Italy), Venice/Marghera (Italy), Piraeus/Athens (Greece), and Monaco.",
          },
        },
        {
          "@type": "Question",
          name: "Does Explora visit boutique ports that large cruise ships cannot access?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Because of their mid-sized yacht design, Explora ships can anchor or dock in smaller, exclusive harbors such as Saint-Tropez (French Riviera), Hvar (Croatia), Portofino (Italy), and Fiskardo (Kefalonia, Greece).",
          },
        },
        {
          "@type": "Question",
          name: "What is included in Explora's Mediterranean shore experiences?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Shore experiences, branded as Destination Experiences, are organized in small groups and focus on active exploration, culinary discovery (like wine tastings or local cooking classes), and private historical tours.",
          },
        },
        {
          "@type": "Question",
          name: "Is it easy to combine multiple back-to-back Mediterranean itineraries?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, Explora Journeys designs its itineraries to be non-repeating and modular. You can easily combine consecutive 7-night sailings into a longer 14- to 21-night grand voyage without repeating any ports of call.",
          },
        },
        {
          "@type": "Question",
          name: "How does the onboard dress code fit local Mediterranean destinations?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The onboard atmosphere matches the elegant 'Resort Casual' style of the Mediterranean. It is recommended to dress comfortably for daytime sightseeing, and wear smart, elegant attire (linen shirts, sundresses) for dinners and evening shore visits.",
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
      q: "Where does Explora Journeys cruise in the Mediterranean?",
      a: "Itineraries often include Italy, Greece, France, Spain, Croatia, Montenegro, and other Mediterranean destinations.",
    },
    {
      q: "Does Explora offer overnight stays?",
      a: "Yes. Select itineraries include extended port visits and overnight stays, allowing for deeper destination exploration.",
    },
    {
      q: "Are Mediterranean cruises suitable for first-time visitors?",
      a: "Absolutely. Explora's thoughtfully planned itineraries make it easy to experience several iconic destinations in one luxurious vacation.",
    },
    {
      q: "What is included on an Explora Mediterranean cruise?",
      a: "Your fare typically includes your oceanfront suite, multiple dining venues, Wi-Fi, entertainment, wellness facilities, fitness classes, and many onboard amenities.",
    },
    {
      q: "Is dining inspired by Mediterranean cuisine?",
      a: "Yes. Many onboard restaurants feature fresh regional ingredients and European culinary traditions.",
    },
    {
      q: "When is the best time to cruise the Mediterranean?",
      a: "Spring and autumn are popular for comfortable temperatures and fewer crowds, while summer offers warm weather and lively coastal destinations.",
    },
    {
      q: "Is Explora good for couples?",
      a: "Yes. Spacious suites, exceptional dining, and a peaceful atmosphere make it an outstanding choice for romantic Mediterranean vacations.",
    },
    {
      q: "Are shore excursions required?",
      a: "No. Guests may choose organized excursions or explore independently in many ports.",
    },
    {
      q: "How long are Mediterranean cruises?",
      a: "Explora offers a variety of itineraries, typically ranging from one week to longer, more immersive voyages.",
    },
    {
      q: "Should I book through a travel advisor?",
      a: "Yes. A luxury travel advisor can help you choose the ideal itinerary, secure the best suite, and coordinate every aspect of your Mediterranean vacation.",
    },
    {
      q: "Which ports serve as the main homeports for Explora in the Mediterranean?",
      a: "Explora Journeys sailings primarily depart from major Mediterranean hubs including Barcelona (Spain), Civivavecchia/Rome (Italy), Venice/Marghera (Italy), Piraeus/Athens (Greece), and Monaco.",
    },
    {
      q: "Does Explora visit boutique ports that large cruise ships cannot access?",
      a: "Yes. Because of their mid-sized yacht design, Explora ships can anchor or dock in smaller, exclusive harbors such as Saint-Tropez (French Riviera), Hvar (Croatia), Portofino (Italy), and Fiskardo (Kefalonia, Greece).",
    },
    {
      q: "What is included in Explora's Mediterranean shore experiences?",
      a: "Shore experiences, branded as Destination Experiences, are organized in small groups and focus on active exploration, culinary discovery (like wine tastings or local cooking classes), and private historical tours.",
    },
    {
      q: "Is it easy to combine multiple back-to-back Mediterranean itineraries?",
      a: "Yes, Explora Journeys designs its itineraries to be non-repeating and modular. You can easily combine consecutive 7-night sailings into a longer 14- to 21-night grand voyage without repeating any ports of call.",
    },
    {
      q: "How does the onboard dress code fit local Mediterranean destinations?",
      a: "The onboard atmosphere matches the elegant 'Resort Casual' style of the Mediterranean. It is recommended to dress comfortably for daytime sightseeing, and wear smart, elegant attire (linen shirts, sundresses) for dinners and evening shore visits.",
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

/* ── Mediterranean Regions ───────────────────────────────────────── */
const mediterraneanRegions = [
  {
    id: "italy",
    title: "Italian Coast",
    badge: "Italy",
    icon: Landmark,
    // image: ExploraDest1,

    desc: "Experience world-famous cities, colorful seaside villages, and incredible cuisine along one of the Mediterranean's most celebrated coastlines.",

    columns: [
      {
        label: "Highlights May Include:",
        items: [
          "Rome",
          "Florence",
          "Naples",
          "Sicily",
          "Portofino",
          "Amalfi Coast",
        ],
      },
    ],

    themeLabel: "La Dolce Vita",
    themeText:
      "From ancient ruins to colorful cliffside villages, the Italian coast pairs effortlessly with Explora's relaxed, immersive style of travel.",
  },

  {
    id: "greece",
    title: "Greek Islands",
    badge: "Greece",
    icon: Sun,
    // image: ExploraDest2,

    desc: "The Greek Islands combine whitewashed villages, crystal-clear waters, and thousands of years of history in one unforgettable region.",

    columns: [
      {
        label: "Popular Stops Often Include:",
        items: ["Santorini", "Mykonos", "Crete", "Rhodes", "Corfu"],
      },
    ],

    themeLabel: "Timeless Aegean Beauty",
    themeText:
      "Longer port stays make it possible to watch the sunset in Santorini or wander Mykonos after the daytime crowds have gone.",
  },

  {
    id: "france",
    title: "French Riviera",
    badge: "France",
    icon: Sparkles,
    // image: LuxuryOceanfront,

    desc: "Elegant coastal resorts and glamorous seaside towns make this region a favorite among luxury travelers.",

    columns: [
      {
        label: "Possible Ports Include:",
        items: ["Nice", "Cannes", "Monte Carlo", "Saint-Tropez"],
      },
    ],

    themeLabel: "Riviera Glamour",
    themeText:
      "Sophisticated seaside towns and glamorous harbors offer the perfect complement to Explora's elevated onboard atmosphere.",
  },

  {
    id: "spain",
    title: "Spain",
    badge: "Spain",
    icon: Umbrella,
    // image: ExploraDest4,

    desc: "Explore vibrant cities and beautiful coastlines featuring some of the Mediterranean's most dynamic culture and cuisine.",

    columns: [
      {
        label: "Featured Ports:",
        items: ["Barcelona", "Valencia", "Málaga", "Palma de Mallorca"],
      },
    ],

    themeLabel: "Vibrant Coastal Culture",
    themeText:
      "From Gaudí's Barcelona to the beaches of Mallorca, Spain's Mediterranean coast offers rich culture alongside relaxed seaside charm.",
  },

  {
    id: "adriatic",
    title: "Adriatic Coast",
    badge: "Adriatic",
    icon: Anchor,
    // image: LuxuryOceanfront1,

    desc: "Croatia and neighboring countries offer medieval cities and stunning island landscapes along the Adriatic Coast.",

    columns: [
      {
        label: "Popular Destinations May Include:",
        items: ["Dubrovnik", "Split", "Kotor", "Zadar"],
      },
    ],

    themeLabel: "Medieval Charm Meets Coastline",
    themeText:
      "Walled cities, dramatic bays, and quiet island landscapes make the Adriatic one of the Mediterranean's most rewarding regions to explore slowly.",
  },
];

/* ── Main Component ──────────────────────────────────────────────── */
const MediterraneanCruisesOnExploraJourneys = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [readMore, setReadMore] = useState(false);
  const [activeRegion, setActiveRegion] = useState("italy");
  const currentRegion =
    mediterraneanRegions.find((d) => d.id === activeRegion) ||
    mediterraneanRegions[0];

  const ActiveIcon = currentRegion.icon;

  const images = [ExploraDest1, HeroImage1, HeroImage2];

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
          Mediterranean Cruises on Explora Journeys | Luxury Mediterranean
          Cruise Guide
        </title>
        <meta
          name="title"
          content="Mediterranean Cruises on Explora Journeys"
        />
        <meta
          name="description"
          content="Discover luxury Mediterranean cruises with Explora Journeys. Learn about itineraries, destinations, ports, excursions, dining, the best time to sail, and why Explora offers one of the finest ways to experience the Mediterranean."
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
          <h1>Mediterranean Cruises <br /> on Explora Journeys</h1>

          <p>
            Few places in the world combine history, culture, cuisine, and
            breathtaking coastlines quite like the Mediterranean. It's no
            surprise that the region has become one of the most sought-after
            destinations for luxury cruising.
          </p>

          <p>
            Explora Journeys was created with the Mediterranean at its heart.
            Inspired by European sophistication and a slower, more immersive
            style of travel, the cruise line offers thoughtfully designed
            itineraries that allow guests to experience iconic cities, charming
            coastal villages, and hidden gems without feeling rushed.
          </p>

          {readMore && (
            <>
              <p>
                Whether you're dreaming of the Greek Islands, the Italian
                Riviera, the French Riviera, Croatia's Adriatic Coast, or the
                Spanish Mediterranean, Explora Journeys delivers one of the most
                elegant ways to explore this remarkable region.
              </p>

              <p>
                This guide covers every region, the onboard culinary program,
                shore experiences, the best time to sail, and whether an Explora
                Mediterranean cruise is right for your next voyage.
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

      {/* ── WHY CHOOSE EXPLORA FOR THE MEDITERRANEAN ─────────────────── */}
      <section
        className="ugt-components-section"
        id="why-choose-explora"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="ugt-components-container">
          <div className="ugt-components-header">
            <h2 className="ugt-components-title">
              Why Choose Explora Journeys <br /> for the Mediterranean?
            </h2>

            <div className="adg-c-accent-line"></div>
          </div>

          <div className="ugt-components-list">
            <div className="ugt-component-row">
              <div className="ugt-component-image-wrapper">
                <div className="ugt-component-image-container">
                  <img
                    src={ExploraPool}
                    alt="Onboard atmosphere aboard Explora Journeys in the Mediterranean"
                    className="ugt-component-image"
                  />
                </div>
              </div>

              <div className="ugt-component-content">
                <p className="ugt-component-text">
                  The <strong>Mediterranean</strong> perfectly complements
                  Explora's philosophy of luxury travel. Instead of focusing on
                  visiting as many ports as possible, Explora emphasizes quality
                  experiences, extended stays, and relaxed exploration.
                </p>

                <div className="ugt-questions-box">
                  <span className="ugt-questions-title">Guests Enjoy:</span>

                  <ul className="ugt-questions-list">
                    {[
                      "Spacious all-suite accommodations",
                      "Exceptional European-inspired cuisine",
                      "Longer port visits",
                      "Overnight stays in select destinations",
                      "Personalized service",
                      "Wellness-focused experiences",
                      "Sophisticated onboard atmosphere",
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
                  The result is a journey that feels more like a luxury yacht
                  adventure than a traditional cruise.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── LONGER PORT STAYS ─────────────────────────────── */}
      <section className="dmg-info-section" id="longer-port-stays">
        <div className="dmg-info-container">
          <div className="dmg-info-header">
            <h2 className="dmg-info-title">Longer Port Stays</h2>
            <div className="dmg-info-accent"></div>
          </div>

          <div className="dmg-info-grid">
            <div className="dmg-info-content">
              <p className="dmg-info-lead">
                One feature that distinguishes Explora Journeys is its emphasis
                on spending more time in each destination.
              </p>

              <div className="dmg-info-features dmg-info-features-scrollable">
                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Clock size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Less Rushed Sightseeing
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Enjoy popular attractions and hidden gems without feeling
                      pressured by a tight schedule.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <MoonStar size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Evening Experiences Ashore
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Experience destinations after sunset with evening walks,
                      entertainment, and local nightlife.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Utensils size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Local Dining Opportunities
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Savor authentic regional cuisine at local restaurants and
                      cafés rather than rushing back to the ship.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <MapPinned size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Flexible Exploration
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Spend your day sightseeing, shopping, relaxing, or
                      discovering lesser-known neighborhoods at your own pace.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Globe2 size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      More Authentic Cultural Immersion
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Connect more deeply with local culture through extended
                      time in each destination.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="dmg-info-media">
              <div className="dmg-media-wrapper">
                <img
                  src={ExploraPort}
                  alt="Explora Journeys ship docked during an extended port stay"
                  className="dmg-media-img"
                  style={{ height: "610px" }}
                />
                <div className="dmg-media-overlay"></div>

                <div className="dmg-media-badge">
                  <span>Longer Stays • Deeper Exploration</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── A DAY IN THE MEDITERRANEAN ────────────────────────────────────── */}
      <section className="adg-section" id="adg-day-in-med">
        <div className="adg-container">
          <div className="adg-section-header" style={{ marginBottom: "60px" }}>
            <h2 className="adg-h2">A Day in the Mediterranean</h2>
            <div className="adg-accent-line"></div>

            <p
              className="Asc-body-text"
              style={{ textAlign: "center", marginTop: "15px" }}
            >
              Imagine waking up to the sunrise over the Italian coastline before
              enjoying breakfast on your private terrace.
            </p>
          </div>

          <div className="adg-split-layout">
            <div className="adg-content-card-side">
              <img
                src={MediterianDay}
                alt="A day exploring the Mediterranean coastline with Explora Journeys"
                className="adg-side-image"
                style={{ height: "36vh" }}
              />

              <div className="adg-info-card">
                <div className="adg-card-meta">
                  <Sparkles size={28} />
                  <span className="adg-meta-label">A Relaxed Rhythm</span>
                </div>

                <p className="adg-card-lead">
                  This relaxed pace defines the Explora Mediterranean
                  experience, allowing every day ashore to feel unhurried and
                  personal.
                </p>
              </div>
            </div>

            <div className="adg-list-side">
              {[
                "Exploring ancient ruins",
                "Visiting local markets",
                "Enjoying a leisurely waterfront lunch",
                "Shopping in boutique villages",
                "Returning to the ship for sunset cocktails",
                "Dining under the stars",
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

      {/* ── EXPLORE ICONIC MEDITERRANEAN DESTINATIONS ───── */}
      <section className="luc-destinations-section" id="luc-destinations">
        <div className="luc-destinations-container">
          <div className="luc-destinations-header">
            <h2 className="luc-destinations-title">
              Explore Iconic Mediterranean Destinations
            </h2>

            <div className="adg-c-accent-line"></div>

            <p className="luc-destinations-intro">
              Explora Journeys visits many of the Mediterranean's most
              celebrated ports while also including lesser-known destinations
              that offer a more authentic experience.
            </p>
          </div>

          {/* Layout */}
          <div className="luc-dest-layout">
            {/* Sidebar nav */}
            <nav className="luc-dest-nav">
              {mediterraneanRegions.map((item) => {
                const NavIcon = item.icon;
                const isActive = activeRegion === item.id;

                return (
                  <button
                    key={item.id}
                    className={`luc-dest-nav-btn ${
                      isActive ? "luc-dest-nav-btn--active" : ""
                    }`}
                    onClick={() => setActiveRegion(item.id)}
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
            <div className="luc-dest-panel" key={activeRegion}>
              {/* Image */}
              <div className="luc-dest-img-wrap">
                <img
                  src={currentRegion.image}
                  alt={currentRegion.title}
                  className="luc-dest-img"
                />

                <div className="luc-dest-img-overlay">
                  <div className="luc-dest-img-icon">
                    <ActiveIcon size={22} strokeWidth={1.6} />
                  </div>

                  <span className="luc-dest-img-title">
                    {currentRegion.title}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="luc-dest-panel-desc">{currentRegion.desc}</p>

              {/* Columns */}
              <div className="luc-dest-columns">
                {currentRegion.columns.map((col, cIdx) => (
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
                    {currentRegion.themeLabel}
                  </span>

                  <p className="luc-dest-theme-note-text">
                    {currentRegion.themeText}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SHORE EXPERIENCES & DINING ───────────────────────────────────────── */}
      <section
        className="Ejvs-pricing-section"
        id="shore-experiences"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="Ejvs-container">
          <div className="Ejvs-section-header">
            <h2 className="Ejvs-section-title">
              Shore Experiences &amp; Onboard Dining
            </h2>

            <div className="Ejvs-section-accent"></div>

            <p className="Ejvs-section-subtitle">
              Explora offers a variety of curated shore experiences designed to
              deepen your connection with each destination, while the onboard
              culinary program reflects the regions you'll visit.
            </p>
          </div>

          <div className="Ejvs-pricing-grid">
            {/* Shore Experiences */}
            <div className="Ejvs-pricing-card Ejvs-explora-card">
              <div className="Ejvs-card-header">
                <div className="Ejvs-card-icon-wrap">
                  <Compass size={24} className="Ejvs-card-icon" />
                </div>

                <h3 className="Ejvs-card-title">Curated Shore Experiences</h3>
              </div>

              <p className="Ejvs-card-intro">
                Many travelers also choose to explore independently, thanks to
                the convenient location of many Mediterranean ports.
              </p>

              <ul className="Ejvs-feature-list">
                {[
                  "Historic walking tours",
                  "Private museum visits",
                  "Wine tastings",
                  "Culinary experiences",
                  "Coastal yacht excursions",
                  "Scenic drives",
                  "Cultural performances",
                  "Local artisan workshops",
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
                  Choose organized excursions ashore or explore independently —
                  the choice is entirely yours.
                </p>
              </div>
            </div>

            {/* Dining */}
            <div className="Ejvs-pricing-card Ejvs-seabourn-card">
              <div className="Ejvs-card-header">
                <div className="Ejvs-card-icon-wrap">
                  <UtensilsCrossed size={24} className="Ejvs-card-icon" />
                </div>

                <h3 className="Ejvs-card-title">
                  Dining Inspired by the Mediterranean
                </h3>
              </div>

              <p className="Ejvs-card-intro">
                Dining becomes an extension of your destination experience, with
                menus built around fresh, regional ingredients.
              </p>

              <ul className="Ejvs-feature-list">
                {[
                  "Fresh seafood",
                  "Handmade pasta",
                  "Local cheeses",
                  "Seasonal vegetables",
                  "Artisan breads",
                  "Mediterranean wines",
                  "Olive oils",
                  "Regional specialties",
                ].map((item, i) => (
                  <li key={i} className="Ejvs-feature-item">
                    <Star size={14} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="Ejvs-card-highlight">
                <p>
                  Every meal reflects the culture and cuisine of the coastline
                  you're sailing past.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SEA DAYS & LIFE ONBOARD ───────────────────────────────────────── */}
      <section
        className="dve-winner-section"
        id="sea-days"
        style={{ backgroundColor: "var(--bg-white)" }}
      >
        <div className="dve-container">
          <div className="dve-section-header">
            <h2 className="dve-section-title">Sea Days &amp; Life Onboard</h2>

            <div className="dve-section-accent"></div>

            <p className="dve-section-subtitle">
              Sea days aboard Explora are just as memorable as the ports
              themselves, and returning to the ship after a day ashore feels
              like arriving at a luxury resort.
            </p>
          </div>

          <div className="dve-winner-grid">
            {/* Sea Days */}
            <div className="dve-winner-card dve-disney-winner">
              <div className="dve-winner-image-wrap">
                <img
                  src={ExploraPool1}
                  alt="Sea days aboard Explora Journeys in the Mediterranean"
                  className="dve-winner-img"
                />

                <span className="dve-winner-badge">Slow Luxury at Sea</span>
              </div>

              <div className="dve-winner-content">
                <h3 className="dve-winner-title">
                  Sea Days Between Destinations
                </h3>

                <p className="dve-winner-intro">
                  Rather than feeling like travel days, sea days become
                  opportunities to fully embrace <strong>slow luxury</strong>{" "}
                  while watching the coastline drift by.
                </p>

                <div className="dve-winner-divider"></div>

                <h4 className="dve-advantages-title">Guests Can Spend Time:</h4>

                <ul className="dve-advantages-list">
                  {[
                    "Relaxing by the infinity pool",
                    "Visiting the Ocean Wellness Spa",
                    "Joining a yoga class",
                    "Reading on their private terrace",
                    "Enjoying long lunches",
                    "Listening to live music",
                  ].map((item, i) => (
                    <li key={i}>
                      <Waves size={18} className="dve-advantage-icon" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Life Onboard */}
            <div className="dve-winner-card dve-seabourn-winner">
              <div className="dve-winner-image-wrap">
                <img
                  src={ExploraDining}
                  alt="Evenings aboard Explora Journeys in the Mediterranean"
                  className="dve-winner-img"
                />

                <span className="dve-winner-badge">Evenings Onboard</span>
              </div>

              <div className="dve-winner-content">
                <h3 className="dve-winner-title">
                  Life Onboard During a Mediterranean Cruise
                </h3>

                <p className="dve-winner-intro">
                  After a day exploring Europe, returning to Explora feels like
                  arriving at a luxury resort, with a peaceful contrast to busy
                  days ashore.
                </p>

                <div className="dve-winner-divider"></div>

                <h4 className="dve-advantages-title">Guests Can Enjoy:</h4>

                <ul className="dve-advantages-list">
                  {[
                    "Sunset cocktails",
                    "Gourmet dining",
                    "Live music",
                    "Elegant lounges",
                    "Spa treatments",
                    "Quiet ocean views",
                  ].map((item, i) => (
                    <li key={i}>
                      <Star size={18} className="dve-advantage-icon" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BEST TIME TO CRUISE ───────────────────────────────── */}
      <section className="adg-c-section adg-c-bg-soft" id="best-time-to-cruise">
        <div className="adg-c-container">
          <div className="adg-c-section-header">
            <span className="adg-c-eyebrow">Plan Your Sailing</span>

            <h2 className="adg-c-h2">
              The Best Time to Cruise the Mediterranean
            </h2>

            <div className="adg-c-accent-line"></div>

            <p className="Asc-section-intro">
              Explora Journeys offers Mediterranean itineraries throughout much
              of the cruising season, and each season offers its own unique
              advantages.
            </p>
          </div>

          <div
            className="adg-c-venues-grid1"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            }}
          >
            {/* Spring */}
            <div className="adg-c-venue-card adg-c-venue-1">
              <div className="adg-c-venue-top">
                <span className="adg-c-venue-eyebrow">
                  <Flower2
                    size={14}
                    style={{ display: "inline", marginRight: 6 }}
                  />
                  March – May
                </span>

                <h3 className="adg-c-venue-name">Spring</h3>

                <p className="adg-c-venue-highlight">
                  Ideal Sightseeing Weather
                </p>
              </div>

              <ul className="adg-c-venue-list">
                {[
                  "Mild temperatures",
                  "Blooming landscapes",
                  "Smaller crowds",
                  "Ideal sightseeing weather",
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
                  A comfortable, unhurried time to explore the region's
                  landmarks.
                </p>
              </div>
            </div>

            {/* Summer */}
            <div className="adg-c-venue-card adg-c-venue-2">
              <div className="adg-c-venue-top">
                <span className="adg-c-venue-eyebrow">
                  <Sun
                    size={14}
                    style={{ display: "inline", marginRight: 6 }}
                  />
                  June – August
                </span>

                <h3 className="adg-c-venue-name">Summer</h3>

                <p className="adg-c-venue-highlight">
                  Vibrant Coastal Atmosphere
                </p>
              </div>

              <ul className="adg-c-venue-list">
                {[
                  "Warm sunshine",
                  "Beach destinations",
                  "Longer daylight hours",
                  "Vibrant coastal atmosphere",
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
                  The liveliest season, perfect for beach towns and long
                  daylight evenings.
                </p>
              </div>
            </div>

            {/* Autumn */}
            <div className="adg-c-venue-card adg-c-venue-1">
              <div className="adg-c-venue-top">
                <span className="adg-c-venue-eyebrow">
                  <Leaf
                    size={14}
                    style={{ display: "inline", marginRight: 6 }}
                  />
                  September – November
                </span>

                <h3 className="adg-c-venue-name">Autumn</h3>

                <p className="adg-c-venue-highlight">
                  Comfortable Exploring Conditions
                </p>
              </div>

              <ul className="adg-c-venue-list">
                {[
                  "Pleasant temperatures",
                  "Wine harvest season",
                  "Fewer tourists",
                  "Comfortable exploring conditions",
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
                  A quieter season with comfortable weather and the region's
                  wine harvest in full swing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TIPS FOR PLANNING YOUR VOYAGE ───────────────────────────────────────── */}
      <section className="adg-c-section adg-c-bg-white" id="planning-tips">
        <div className="adg-c-container">
          <div className="adg-c-section-header">
            <h2 className="adg-c-h2">
              Tips for Planning Your Mediterranean Voyage
            </h2>
            <div className="adg-c-accent-line"></div>

            <p className="Asc-section-intro">
              A little planning goes a long way toward making your Mediterranean
              voyage as smooth and enjoyable as possible.
            </p>
          </div>

          <div className="adg-c-overview-layout">
            <div className="adg-c-overview-icons">
              {[
                "Book early — Mediterranean sailings are among Explora's most popular itineraries",
                "Travel in shoulder season for excellent weather and fewer crowds",
                "Stay before or after your cruise in your embarkation or disembarkation city",
                "Pack comfortable walking shoes for cobblestone streets and historic districts",
                "Work with a luxury travel advisor to select the ideal itinerary and suite",
                "Allow extra time in port to experience local cuisine, markets, and cultural attractions at a relaxed pace",
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
                    Professional guidance can help you select the ideal
                    itinerary, suite category, and shore experiences for a
                    seamless Mediterranean vacation.
                  </p>
                </div>
              </div>

              <div className="adg-c-overview-image-wrap">
                <img
                  src={LuxuryOceanfront}
                  alt="Planning a Mediterranean cruise with Explora Journeys"
                  className="adg-c-overview-img"
                />

                <div className="adg-c-overview-img-overlay">
                  <span className="adg-c-overview-img-label">
                    Plan a Seamless Voyage
                  </span>
                </div>
              </div>
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
              Personalized Mediterranean Cruise Planning
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
                Create Your Perfect Mediterranean Journey
              </h3>

              <p className="Avr-planning-left-body">
                A luxury travel advisor takes the guesswork out of planning by
                helping you select the ideal itinerary, ship, accommodations,
                and experiences for your travel style. Every detail is
                thoughtfully coordinated to deliver a seamless luxury vacation.
              </p>

              <div className="Avr-planning-alert">
                <ShieldCheck size={18} className="Avr-planning-alert-icon" />

                <p className="Avr-planning-alert-text">
                  Personalized planning ensures you enjoy the very best of the
                  Mediterranean from embarkation to disembarkation.
                </p>
              </div>
            </div>

            {/* RIGHT PANEL */}
            <div className="Avr-planning-right">
              <p className="Avr-planning-right-intro">
                A luxury travel advisor can help you:
              </p>

              <div className="Avr-planning-benefits-grid">
                {[
                  {
                    icon: <MapPinned size={18} />,
                    label: "Compare Mediterranean itineraries",
                  },
                  {
                    icon: <Home size={18} />,
                    label: "Select the right ship and suite",
                  },
                  {
                    icon: <Hotel size={18} />,
                    label: "Arrange hotels before and after your cruise",
                  },
                  {
                    icon: <Plane size={18} />,
                    label: "Coordinate flights and transfers",
                  },
                  {
                    icon: <Compass size={18} />,
                    label: "Recommend private shore experiences",
                  },
                  {
                    icon: <BadgePercent size={18} />,
                    label: "Maximize promotional offers",
                  },
                  {
                    icon: <Sparkles size={18} />,
                    label: "Personalize every aspect of your journey",
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
                Their expertise helps create a seamless Mediterranean vacation
                from beginning to end.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHO SHOULD CHOOSE AN EXPLORA MEDITERRANEAN CRUISE ─────────────────── */}
      <section className="Asc-section Asc-bg-white" id="Asc-who">
        <div className="Asc-container">
          <div className="Asc-section-header">
            <h2 className="Asc-h2">
              Who Should Choose an Explora Mediterranean Cruise?
            </h2>
            <div className="Asc-accent-line"></div>
            <p className="Asc-faq-intro">
              These voyages are particularly popular with couples, retirees,
              solo travelers, and experienced luxury cruisers.
            </p>
          </div>

          <div className="Asc-who-grid">
            <div className="Asc-who-card Asc-who-yes">
              <h3 className="Asc-who-title">
                These Voyages Are Ideal for Travelers Who Appreciate:
              </h3>
              <ul className="Asc-who-list">
                {[
                  "European culture",
                  "Fine dining",
                  "History",
                  "Luxury accommodations",
                  "Personalized service",
                  "Slow travel",
                  "Wellness",
                  "Boutique hotel experiences",
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
                You May Prefer Another Cruise Line If Your Priorities Include:
              </h3>
              <ul className="Asc-who-list">
                {[
                  "Water parks",
                  "Character entertainment",
                  "Large casinos",
                  "High-energy nightlife",
                  "Broadway-style productions",
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

          <p
            className="Asc-body-text"
            style={{
              maxWidth: "760px",
              margin: "40px auto 0",
              textAlign: "center",
            }}
          >
            Travelers looking for a quieter, more sophisticated experience
            typically find Explora to be an excellent match.
          </p>
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
              Everything travelers need to know about Mediterranean cruises on
              Explora Journeys.
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
            alt="Explora Journeys sailing the Mediterranean"
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
                  Discover the Mediterranean <br /> at Explora's Pace
                </h2>
                <div className="Asc-help-accent"></div>
              </div>

              <div className="Asc-help-grid">
                <div className="Asc-help-info">
                  <p className="Asc-help-intro">
                    A Mediterranean cruise is about more than simply checking
                    famous destinations off a list — it's about immersing
                    yourself in the culture, cuisine, landscapes, and lifestyle
                    that have inspired travelers for centuries.
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
                        Explora Journeys embraces this philosophy by combining
                        elegant all-suite accommodations, exceptional dining,
                        longer port stays, and personalized service with
                        carefully crafted itineraries throughout Southern
                        Europe.
                      </p>
                      <br />
                      <p className="Asc-help-intro">
                        For travelers seeking a sophisticated,
                        destination-focused Mediterranean cruise, Explora
                        Journeys offers one of the finest luxury experiences
                        available.
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
                      Start Planning Your Mediterranean Voyage
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
                      "Recommend the ideal Mediterranean itinerary for your travel style",
                      "Advise on which regions and ports to prioritize",
                      "Coordinate pre- and post-cruise hotel stays",
                      "Select the right suite",
                      "Compare promotional offers",
                      "Arrange flights, transfers, and private shore experiences",
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
                      label: "Which Mediterranean Itinerary Is Best?",
                      path: "/which-mediterranean-itinerary-is-best",
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
                      label: "Planning Your First Explora Journey",
                      path: "/planning-your-first-explora-journey",
                    },
                    {
                      label: "How to Get the Best Value on Explora Journeys",
                      path: "/how-to-get-the-best-value-on-explora-journeys",
                    },
                    {
                      label: "Should You Book Through a Travel Advisor",
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

export default MediterraneanCruisesOnExploraJourneys;
