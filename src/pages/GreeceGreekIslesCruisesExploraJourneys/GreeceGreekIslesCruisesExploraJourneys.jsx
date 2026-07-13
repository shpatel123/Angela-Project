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
  MoonStar,
  Clock,
} from "lucide-react";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela2.jpeg";

import HeroImage1 from "../../assets/GreeceGreekIslesCruisesExploraJourneys/Greek-Isles-Cruises4.jpg";
import HeroImage2 from "../../assets/GreeceGreekIslesCruisesExploraJourneys/Greek-Isles-Cruises2.jpg";
import HeroImage3 from "../../assets/GreeceGreekIslesCruisesExploraJourneys/Greek-Isles-Cruises3.jpg";

import Destination1 from "../../assets/GreeceGreekIslesCruisesExploraJourneys/Santorini.jpg";
import Destination2 from "../../assets/GreeceGreekIslesCruisesExploraJourneys/Mykonos.jpg";
import Destination3 from "../../assets/GreeceGreekIslesCruisesExploraJourneys/Crete.jpg";
import Destination4 from "../../assets/GreeceGreekIslesCruisesExploraJourneys/Rhodes.jpg";
import Destination5 from "../../assets/GreeceGreekIslesCruisesExploraJourneys/Corfu.jpg";
import Destination6 from "../../assets/GreeceGreekIslesCruisesExploraJourneys/Longer-Port-Stays.jpg";
import Destination7 from "../../assets/GreeceGreekIslesCruisesExploraJourneys/Boutique-hotel-style-luxury.jpg";
import Destination8 from "../../assets/GreeceGreekIslesCruisesExploraJourneys/Greek-Isles-Cruises.jpg";
import Destination9 from "../../assets/GreeceGreekIslesCruisesExploraJourneys/GreenlandExperience.jpg";
import Destination10 from "../../assets/GreeceGreekIslesCruisesExploraJourneys/GreenlandExperience.jpg";
import Destination11 from "../../assets/GreeceGreekIslesCruisesExploraJourneys/CTAImage.jpg";
import AegeanDay from "../../assets/ExploraIVGuide/explora-I-luxury-pool-deck-close-up.JPG";


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
        "https://tripsandships.com/greece-greek-isles-cruises-on-explora-journeys/#webpage",
      name: "Greece & Greek Isles Cruises on Explora Journeys",
      url: "https://tripsandships.com/greece-greek-isles-cruises-on-explora-journeys",
      description:
        "Discover luxury Greece and Greek Isles cruises with Explora Journeys. Explore iconic islands, historic ports, Mediterranean cuisine, curated shore experiences, and why Explora offers one of the finest ways to experience Greece.",
    },
    {
      "@type": "Article",
      "@id":
        "https://tripsandships.com/greece-greek-isles-cruises-on-explora-journeys/#article",
      headline: "Greece & Greek Isles Cruises on Explora Journeys",
      description:
        "A complete guide to cruising Greece and the Greek Isles with Explora Journeys, covering islands, port stays, shore experiences, dining, the best time to sail, and who these voyages suit best.",
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
        "https://tripsandships.com/greece-greek-isles-cruises-on-explora-journeys/#breadcrumb",
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
          name: "Greece & Greek Isles Cruises on Explora Journeys",
          item: "https://tripsandships.com/greece-greek-isles-cruises-on-explora-journeys",
        },
      ],
    },
    {
      "@type": "TouristTrip",
      "@id":
        "https://tripsandships.com/greece-greek-isles-cruises-on-explora-journeys/#touristtrip",
      name: "Greece & Greek Isles Cruise with Explora Journeys",
      touristType:
        "Luxury travelers, couples, honeymooners, retirees, solo travelers",
      itinerary: {
        "@type": "ItemList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Santorini" },
          { "@type": "ListItem", position: 2, name: "Mykonos" },
          { "@type": "ListItem", position: 3, name: "Crete" },
          { "@type": "ListItem", position: 4, name: "Rhodes" },
          { "@type": "ListItem", position: 5, name: "Corfu" },
        ],
      },
    },
    {
      "@type": "Place",
      "@id":
        "https://tripsandships.com/greece-greek-isles-cruises-on-explora-journeys/#place",
      name: "Greece & The Greek Isles",
      description:
        "A Mediterranean region known for whitewashed villages, sapphire-blue waters, ancient history, and welcoming coastal culture.",
    },
    {
      "@type": "Cruise",
      "@id":
        "https://tripsandships.com/greece-greek-isles-cruises-on-explora-journeys/#cruise",
      name: "Explora Journeys Greece & Greek Isles Cruise",
      provider: {
        "@type": "TravelAgency",
        name: "Trips & Ships Luxury Travel",
      },
      departurePort: "Various Greek & Mediterranean Ports",
      description:
        "Luxury Greek Isles itineraries featuring longer port stays, overnight visits, and Mediterranean-inspired cuisine aboard an all-suite ship.",
    },
    {
      "@type": "Service",
      "@id":
        "https://tripsandships.com/greece-greek-isles-cruises-on-explora-journeys/#service",
      serviceType: "Luxury Cruise Vacation Planning & Booking Support",
      provider: {
        "@type": "TravelAgency",
        name: "Trips & Ships Luxury Travel",
      },
      areaServed: "Worldwide",
      description:
        "Personalized planning support for Explora Journeys Greek Isles sailings, including itinerary selection, suite categories, and shore experiences.",
    },
    {
      "@type": "Review",
      "@id":
        "https://tripsandships.com/greece-greek-isles-cruises-on-explora-journeys/#review",
      itemReviewed: {
        "@type": "Product",
        name: "Explora Journeys Greece & Greek Isles Cruise",
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
        "Explora Journeys offers one of the most elegant, slow-paced ways to experience Greece and the Greek Isles, with longer port stays and Mediterranean-inspired cuisine.",
    },
    {
      "@type": "ItemList",
      "@id":
        "https://tripsandships.com/greece-greek-isles-cruises-on-explora-journeys/#itemlist",
      name: "What This Greece & Greek Isles Cruises on Explora Journeys Guide Covers",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Why Choose Explora Journeys for Greece",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Discover the Greek Islands",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Longer Port Stays for Deeper Exploration",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "The Beauty of Cruising the Aegean",
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Curated Shore Experiences",
        },
        {
          "@type": "ListItem",
          position: 6,
          name: "Mediterranean Dining Inspired by Greece",
        },
        { "@type": "ListItem", position: 7, name: "Life Onboard Between Islands" },
        {
          "@type": "ListItem",
          position: 8,
          name: "Best Time to Cruise the Greek Islands",
        },
        {
          "@type": "ListItem",
          position: 9,
          name: "Who Will Love a Greek Isles Cruise?",
        },
        {
          "@type": "ListItem",
          position: 10,
          name: "Tips for Planning Your Greek Isles Cruise",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id":
        "https://tripsandships.com/greece-greek-isles-cruises-on-explora-journeys/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Which Greek islands does Explora Journeys visit?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Depending on the itinerary, ports may include Santorini, Mykonos, Rhodes, Crete, Corfu, and other beautiful Greek destinations.",
          },
        },
        {
          "@type": "Question",
          name: "Does Explora offer overnight stays?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Select itineraries include longer port visits and overnight stays, allowing guests more time to experience local culture.",
          },
        },
        {
          "@type": "Question",
          name: "Is Greece a good first cruise destination?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. The Greek Islands combine beautiful scenery, rich history, exceptional cuisine, and relatively short sailing distances.",
          },
        },
        {
          "@type": "Question",
          name: "What is included on an Explora Greek Isles cruise?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Your fare typically includes your oceanfront suite, multiple dining venues, Wi-Fi, entertainment, fitness facilities, wellness amenities, and many onboard services.",
          },
        },
        {
          "@type": "Question",
          name: "Are shore excursions included?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Excursions are generally optional and can be booked separately, allowing guests to customize their experience.",
          },
        },
        {
          "@type": "Question",
          name: "Is Explora suitable for couples?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. The romantic atmosphere, luxury accommodations, and stunning destinations make it an excellent choice for couples and honeymooners.",
          },
        },
        {
          "@type": "Question",
          name: "What should I pack?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Comfortable walking shoes, resort wear, swimwear, sun protection, and smart casual evening attire are recommended.",
          },
        },
        {
          "@type": "Question",
          name: "When is the best time to cruise the Greek Islands?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Spring and autumn are excellent for sightseeing and pleasant weather, while summer offers lively beaches and longer days.",
          },
        },
        {
          "@type": "Question",
          name: "How long are Greek Isles cruises?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Explora offers a variety of itineraries ranging from approximately one week to longer Mediterranean voyages.",
          },
        },
        {
          "@type": "Question",
          name: "Should I use a travel advisor?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. A luxury travel advisor can help you choose the ideal itinerary, arrange travel logistics, and personalize every aspect of your Greek Isles vacation.",
          },
        },
        {
          "@type": "Question",
          name: "Does Explora sail to the Greek Islands year-round?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Explora Journeys operates in Greece seasonally, primarily from late spring (May) through mid-autumn (October), which corresponds to the best sailing weather in the Aegean and Ionian seas.",
          },
        },
        {
          "@type": "Question",
          name: "What tender ports does Explora visit in Greece?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "While Explora can dock in many Greek ports, Santorini and Mykonos require tender service (using the ship's tenders or local boat services) to transfer guests from the anchored ship to the port dock.",
          },
        },
        {
          "@type": "Question",
          name: "Can I visit the ancient ruins of Delos on an Explora cruise?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Select itineraries that stop in Mykonos offer Destination Experiences that take guests by private boat to the nearby UNESCO World Heritage island of Delos, the legendary birthplace of Apollo.",
          },
        },
        {
          "@type": "Question",
          name: "Is a Greek Isles cruise suitable for families with small children?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "While children are welcome and a dedicated children's program (Helios Pool & Nautilus Club) is available, the Greek Isles itineraries focus on relaxed, upscale cultural sightseeing, making them best suited for adults, couples, and multi-generational families with older children.",
          },
        },
        {
          "@type": "Question",
          name: "How are Greece's summer winds (the Meltemi) managed during sailings?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Aegean Sea experiences strong Meltemi winds in July and August. Explora's modern ships are equipped with advanced stabilizers and experienced captains who adjust speeds and route planning to ensure a smooth, comfortable cruise.",
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
      q: "Which Greek islands does Explora Journeys visit?",
      a: "Depending on the itinerary, ports may include Santorini, Mykonos, Rhodes, Crete, Corfu, and other beautiful Greek destinations.",
    },
    {
      q: "Does Explora offer overnight stays?",
      a: "Yes. Select itineraries include longer port visits and overnight stays, allowing guests more time to experience local culture.",
    },
    {
      q: "Is Greece a good first cruise destination?",
      a: "Absolutely. The Greek Islands combine beautiful scenery, rich history, exceptional cuisine, and relatively short sailing distances.",
    },
    {
      q: "What is included on an Explora Greek Isles cruise?",
      a: "Your fare typically includes your oceanfront suite, multiple dining venues, Wi-Fi, entertainment, fitness facilities, wellness amenities, and many onboard services.",
    },
    {
      q: "Are shore excursions included?",
      a: "Excursions are generally optional and can be booked separately, allowing guests to customize their experience.",
    },
    {
      q: "Is Explora suitable for couples?",
      a: "Yes. The romantic atmosphere, luxury accommodations, and stunning destinations make it an excellent choice for couples and honeymooners.",
    },
    {
      q: "What should I pack?",
      a: "Comfortable walking shoes, resort wear, swimwear, sun protection, and smart casual evening attire are recommended.",
    },
    {
      q: "When is the best time to cruise the Greek Islands?",
      a: "Spring and autumn are excellent for sightseeing and pleasant weather, while summer offers lively beaches and longer days.",
    },
    {
      q: "How long are Greek Isles cruises?",
      a: "Explora offers a variety of itineraries ranging from approximately one week to longer Mediterranean voyages.",
    },
    {
      q: "Should I use a travel advisor?",
      a: "Yes. A luxury travel advisor can help you choose the ideal itinerary, arrange travel logistics, and personalize every aspect of your Greek Isles vacation.",
    },
    {
      q: "Does Explora sail to the Greek Islands year-round?",
      a: "Explora Journeys operates in Greece seasonally, primarily from late spring (May) through mid-autumn (October), which corresponds to the best sailing weather in the Aegean and Ionian seas.",
    },
    {
      q: "What tender ports does Explora visit in Greece?",
      a: "While Explora can dock in many Greek ports, Santorini and Mykonos require tender service (using the ship's tenders or local boat services) to transfer guests from the anchored ship to the port dock.",
    },
    {
      q: "Can I visit the ancient ruins of Delos on an Explora cruise?",
      a: "Yes. Select itineraries that stop in Mykonos offer Destination Experiences that take guests by private boat to the nearby UNESCO World Heritage island of Delos, the legendary birthplace of Apollo.",
    },
    {
      q: "Is a Greek Isles cruise suitable for families with small children?",
      a: "While children are welcome and a dedicated children's program (Helios Pool & Nautilus Club) is available, the Greek Isles itineraries focus on relaxed, upscale cultural sightseeing, making them best suited for adults, couples, and multi-generational families with older children.",
    },
    {
      q: "How are Greece's summer winds (the Meltemi) managed during sailings?",
      a: "The Aegean Sea experiences strong Meltemi winds in July and August. Explora's modern ships are equipped with advanced stabilizers and experienced captains who adjust speeds and route planning to ensure a smooth, comfortable cruise.",
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

/* ── Greek Islands ───────────────────────────────────────── */
const greekIslands = [
  {
    id: "santorini",
    title: "Santorini",
    badge: "Santorini",
    icon: Sun,
    image: Destination1,

    desc: "One of the world's most photographed islands, Santorini is famous for whitewashed villages, blue-domed churches, and incredible sunsets over the volcanic caldera.",

    columns: [
      {
        label: "Highlights Include:",
        items: [
          "Whitewashed villages",
          "Blue-domed churches",
          "Volcanic cliffs",
          "Incredible sunsets",
          "Local wineries",
          "Boutique shopping",
        ],
      },
    ],

    themeLabel: "Iconic Aegean Sunsets",
    themeText:
      "Whether exploring Oia or relaxing at a seaside café, Santorini offers unforgettable scenery at every turn.",
  },

  {
    id: "mykonos",
    title: "Mykonos",
    badge: "Mykonos",
    icon: Landmark,
    image: Destination2,

    desc: "Known for its vibrant atmosphere and Cycladic architecture, Mykonos blends luxury with tradition in one lively island setting.",

    columns: [
      {
        label: "Highlights Include:",
        items: [
          "Charming narrow streets",
          "Windmills",
          "Little Venice",
          "Designer boutiques",
          "Beach clubs",
          "Waterfront dining",
        ],
      },
    ],

    themeLabel: "Vibrant Cycladic Charm",
    themeText:
      "Guests can explore at their own pace or simply enjoy watching the island come alive.",
  },

  {
    id: "crete",
    title: "Crete",
    badge: "Crete",
    icon: Compass,
    image: Destination3,

    desc: "As Greece's largest island, Crete combines history, mountains, beaches, and exceptional cuisine into one rewarding destination.",

    columns: [
      {
        label: "Visitors Can Enjoy:",
        items: [
          "Ancient archaeological sites",
          "Traditional villages",
          "Olive groves",
          "Local wineries",
          "Scenic coastal drives",
          "Beautiful beaches",
        ],
      },
    ],

    themeLabel: "Authentic Cultural Discovery",
    themeText:
      "Crete rewards travelers looking for authentic cultural experiences beyond the typical tourist path.",
  },

  {
    id: "rhodes",
    title: "Rhodes",
    badge: "Rhodes",
    icon: Anchor,
    image: Destination4,

    desc: "Rhodes offers one of the Mediterranean's best-preserved medieval old towns, layered with centuries of history.",

    columns: [
      {
        label: "Popular Experiences Include:",
        items: [
          "Palace of the Grand Master",
          "Medieval walls",
          "Ancient ruins",
          "Beautiful harbors",
          "Local markets",
          "Traditional Greek tavernas",
        ],
      },
    ],

    themeLabel: "Medieval History Meets the Sea",
    themeText:
      "Wandering the old town's cobblestone streets feels like stepping back through centuries of Mediterranean history.",
  },

  {
    id: "corfu",
    title: "Corfu",
    badge: "Corfu",
    icon: Umbrella,
    image: Destination5,

    desc: "Located in the Ionian Sea, Corfu offers a unique blend of Greek, Venetian, and British influences found nowhere else in Greece.",

    columns: [
      {
        label: "Guests May Discover:",
        items: [
          "Elegant old town",
          "Venetian architecture",
          "Olive groves",
          "Coastal villages",
          "Beautiful beaches",
          "Historic fortresses",
        ],
      },
    ],

    themeLabel: "A Blend of Cultures",
    themeText:
      "Corfu's layered history creates a distinctive island atmosphere unlike anywhere else in the Greek Isles.",
  },
];

/* ── Main Component ──────────────────────────────────────────────── */
const GreeceGreekIslesCruisesOnExploraJourneys = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [readMore, setReadMore] = useState(false);
  const [activeIsland, setActiveIsland] = useState("santorini");
  const currentIsland =
    greekIslands.find((d) => d.id === activeIsland) || greekIslands[0];

  const ActiveIcon = currentIsland.icon;

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
          Greece &amp; Greek Isles Cruises on Explora Journeys | Luxury Greek
          Islands Cruise Guide
        </title>
        <meta
          name="title"
          content="Greece & Greek Isles Cruises on Explora Journeys"
        />
        <meta
          name="description"
          content="Discover luxury Greece and Greek Isles cruises with Explora Journeys. Explore iconic islands, historic ports, Mediterranean cuisine, curated shore experiences, and why Explora offers one of the finest ways to experience Greece."
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
            Greece &amp; Greek Isles Cruises <br /> on Explora Journeys
          </h1>

          <p>
            The Greek Islands have captivated travelers for centuries with
            their whitewashed villages, sapphire-blue waters, ancient history,
            and welcoming Mediterranean culture. From the dramatic cliffs of
            Santorini to the charming streets of Mykonos and the rich
            heritage of Crete, every island offers its own unique
            personality.
          </p>

          <p>
            Explora Journeys combines these extraordinary destinations with
            contemporary European luxury, creating an elegant and immersive
            way to experience Greece.
          </p>

          {readMore && (
            <>
              <p>
                Rather than rushing from port to port, Explora emphasizes
                longer stays, carefully curated itineraries, exceptional
                dining, and personalized service, allowing guests to truly
                appreciate one of the world's most beautiful cruising
                regions.
              </p>

              <p>
                This guide covers every island, curated shore experiences,
                the onboard culinary program, the best time to sail, and
                whether an Explora Greek Isles cruise is right for your next
                voyage.
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

      {/* ── WHY CHOOSE EXPLORA FOR GREECE ─────────────────── */}
      <section
        className="ugt-components-section"
        id="why-choose-explora"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="ugt-components-container">
          <div className="ugt-components-header">
            <h2 className="ugt-components-title">
              Why Choose Explora Journeys <br /> for Greece?
            </h2>

            <div className="adg-c-accent-line"></div>
          </div>

          <div className="ugt-components-list">
            <div className="ugt-component-row">
              <div className="ugt-component-image-wrapper">
                <div className="ugt-component-image-container">
                  <img
                    src={Destination7}
                    alt="Onboard atmosphere aboard Explora Journeys in Greece"
                    className="ugt-component-image"
                  />
                </div>
              </div>

              <div className="ugt-component-content">
                <p className="ugt-component-text">
                  Explora Journeys was designed around the relaxed lifestyle
                  of the <strong>Mediterranean</strong>, making Greece one of
                  its most natural destinations.
                </p>

                <div className="ugt-questions-box">
                  <span className="ugt-questions-title">Guests Enjoy:</span>

                  <ul className="ugt-questions-list">
                    {[
                      "Spacious oceanfront suites",
                      "Boutique hotel-style luxury",
                      "Longer port visits",
                      "Flexible dining",
                      "Personalized service",
                      "Wellness-focused experiences",
                      "Destination-rich itineraries",
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
                  The experience feels less like a traditional cruise and more
                  like a luxury resort that travels through the Aegean Sea.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── LONGER PORT STAYS FOR DEEPER EXPLORATION ─────────────────────────────── */}
      <section className="dmg-info-section" id="longer-port-stays">
        <div className="dmg-info-container">
          <div className="dmg-info-header">
            <h2 className="dmg-info-title">
              Longer Port Stays <br /> for Deeper Exploration
            </h2>
            <div className="dmg-info-accent"></div>
          </div>

          <div className="dmg-info-grid">
            <div className="dmg-info-content">
              <p className="dmg-info-lead">
                Explora Journeys believes destinations deserve time. Longer
                stays allow guests to experience the islands beyond the
                busiest tourist hours.
              </p>

              <div className="dmg-info-features dmg-info-features-scrollable">
                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Clock size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Extended Port Calls
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Spend more time on each island instead of rushing
                      through a brief visit.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <MoonStar size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Evening Departures
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Experience island towns after dark, when they take on a
                      completely different atmosphere.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Home size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Overnight Stays on Select Sailings
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Selected itineraries include overnight calls, giving
                      guests more time to fully experience an island.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <MapPinned size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      More Flexible Sightseeing
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Enjoy popular landmarks and hidden corners without
                      feeling rushed by the clock.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Globe2 size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Time for Independent Exploration
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Wander at your own pace, from village tavernas to quiet
                      coastal paths.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="dmg-info-media">
              <div className="dmg-media-wrapper">
                <img
                  src={Destination6}
                  alt="Explora Journeys ship docked during an extended Greek port stay"
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

      {/* ── THE BEAUTY OF CRUISING THE AEGEAN ────────────────────────────────────── */}
      <section className="adg-section" id="adg-aegean-beauty">
        <div className="adg-container">
          <div className="adg-section-header" style={{ marginBottom: "60px" }}>
            <h2 className="adg-h2">The Beauty of Cruising the Aegean</h2>
            <div className="adg-accent-line"></div>

            <p
              className="Asc-body-text"
              style={{ textAlign: "center", marginTop: "15px" }}
            >
              One of the greatest pleasures of a Greek Isles cruise is the
              journey between destinations. The voyage itself becomes part of
              the destination.
            </p>
          </div>

          <div className="adg-split-layout">
            <div className="adg-content-card-side">
              <img
                src={AegeanDay}
                alt="Sailing the Aegean Sea aboard Explora Journeys"
                className="adg-side-image"
                style={{ height: "26vh" }}
              />

              <div className="adg-info-card">
                <div className="adg-card-meta">
                  <Sparkles size={28} />
                  <span className="adg-meta-label">A Relaxed Rhythm</span>
                </div>

                <p className="adg-card-lead">
                  This relaxed pace defines the Explora Greek Isles
                  experience, allowing every day at sea to feel unhurried and
                  personal.
                </p>
              </div>
            </div>

            <div className="adg-list-side">
              {[
                "Relaxing by the infinity pool",
                "Reading on your private terrace",
                "Watching volcanic islands appear on the horizon",
                "Enjoying lunch overlooking the sea",
                "Watching the sunset over the Aegean",
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

      {/* ── DISCOVER THE GREEK ISLANDS ───── */}
      <section className="luc-destinations-section" id="luc-destinations">
        <div className="luc-destinations-container">
          <div className="luc-destinations-header">
            <h2 className="luc-destinations-title">Discover the Greek Islands</h2>

            <div className="adg-c-accent-line"></div>

            <p className="luc-destinations-intro">
              Each Greek island offers something different, making every
              Explora itinerary unique.
            </p>
          </div>

          {/* Layout */}
          <div className="luc-dest-layout">
            {/* Sidebar nav */}
            <nav className="luc-dest-nav">
              {greekIslands.map((item) => {
                const NavIcon = item.icon;
                const isActive = activeIsland === item.id;

                return (
                  <button
                    key={item.id}
                    className={`luc-dest-nav-btn ${
                      isActive ? "luc-dest-nav-btn--active" : ""
                    }`}
                    onClick={() => setActiveIsland(item.id)}
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
            <div className="luc-dest-panel" key={activeIsland}>
              {/* Image */}
              <div className="luc-dest-img-wrap">
                <img
                  src={currentIsland.image}
                  alt={currentIsland.title}
                  className="luc-dest-img"
                />

                <div className="luc-dest-img-overlay">
                  <div className="luc-dest-img-icon">
                    <ActiveIcon size={22} strokeWidth={1.6} />
                  </div>

                  <span className="luc-dest-img-title">
                    {currentIsland.title}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="luc-dest-panel-desc">{currentIsland.desc}</p>

              {/* Columns */}
              <div className="luc-dest-columns">
                {currentIsland.columns.map((col, cIdx) => (
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
                    {currentIsland.themeLabel}
                  </span>

                  <p className="luc-dest-theme-note-text">
                    {currentIsland.themeText}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CURATED SHORE EXPERIENCES & MEDITERRANEAN DINING ───────────────────────────────────────── */}
      <section
        className="Ejvs-pricing-section"
        id="shore-experiences"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="Ejvs-container">
          <div className="Ejvs-section-header">
            <h2 className="Ejvs-section-title">
              Curated Shore Experiences &amp; Onboard Dining
            </h2>

            <div className="Ejvs-section-accent"></div>

            <p className="Ejvs-section-subtitle">
              Explora offers carefully designed shore experiences that
              highlight the history, culture, and beauty of Greece, while the
              onboard culinary program complements every destination.
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
                Guests may also choose to explore independently and create
                their own adventure.
              </p>

              <ul className="Ejvs-feature-list">
                {[
                  "Ancient archaeological tours",
                  "Private winery visits",
                  "Cooking classes",
                  "Olive oil tastings",
                  "Catamaran cruises",
                  "Beach escapes",
                  "Historic walking tours",
                  "Village explorations",
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
                  Choose organized excursions ashore or explore independently
                  — the choice is entirely yours.
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
                  Mediterranean Dining Inspired by Greece
                </h3>
              </div>

              <p className="Ejvs-card-intro">
                Dining onboard reflects the flavors of Southern Europe while
                maintaining the highest luxury standards.
              </p>

              <ul className="Ejvs-feature-list">
                {[
                  "Fresh seafood",
                  "Greek salads",
                  "Artisan cheeses",
                  "Local olive oils",
                  "Seasonal vegetables",
                  "Fresh herbs",
                  "Handmade pastries",
                  "Regional wines",
                ].map((item, i) => (
                  <li key={i} className="Ejvs-feature-item">
                    <Star size={14} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="Ejvs-card-highlight">
                <p>
                  Every meal reflects Mediterranean traditions inspired by the
                  islands you're sailing past.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── LIFE ONBOARD & SLOW LUXURY TRAVEL ───────────────────────────────────────── */}
      <section
        className="dve-winner-section"
        id="life-onboard"
        style={{ backgroundColor: "var(--bg-white)" }}
      >
        <div className="dve-container">
          <div className="dve-section-header">
            <h2 className="dve-section-title">
              Life Onboard &amp; Slow Luxury Travel
            </h2>

            <div className="dve-section-accent"></div>

            <p className="dve-section-subtitle">
              After a day exploring historic villages and coastal landscapes,
              guests return to a peaceful retreat at sea, perfectly
              complementing the slower pace of Greek island life.
            </p>
          </div>

          <div className="dve-winner-grid">
            {/* Life Onboard Between Islands */}
            <div className="dve-winner-card dve-disney-winner">
              <div className="dve-winner-image-wrap">
                <img
                  src={Destination9}
                  alt="Life onboard Explora Journeys between Greek islands"
                  className="dve-winner-img"
                />

                <span className="dve-winner-badge">Evenings at Sea</span>
              </div>

              <div className="dve-winner-content">
                <h3 className="dve-winner-title">
                  Life Onboard Between Islands
                </h3>

                <p className="dve-winner-intro">
                  After a day exploring historic villages and coastal
                  landscapes, guests return to a{" "}
                  <strong>peaceful retreat at sea</strong>.
                </p>

                <div className="dve-winner-divider"></div>

                <h4 className="dve-advantages-title">Guests Can Enjoy:</h4>

                <ul className="dve-advantages-list">
                  {[
                    "Sunset cocktails",
                    "Live music",
                    "Ocean Wellness Spa",
                    "Gourmet restaurants",
                    "Elegant lounges",
                    "Infinity pools",
                    "Quiet evenings beneath the stars",
                  ].map((item, i) => (
                    <li key={i}>
                      <Waves size={18} className="dve-advantage-icon" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Perfect for Slow Luxury Travel */}
            <div className="dve-winner-card dve-seabourn-winner">
              <div className="dve-winner-image-wrap">
                <img
                  src={Destination8}
                  alt="Slow luxury travel through the Greek Isles with Explora Journeys"
                  className="dve-winner-img"
                />

                <span className="dve-winner-badge">Slow Luxury</span>
              </div>

              <div className="dve-winner-content">
                <h3 className="dve-winner-title">
                  Perfect for Slow Luxury Travel
                </h3>

                <p className="dve-winner-intro">
                  Greek island cruising isn't about rushing through famous
                  landmarks. Explora's philosophy aligns perfectly with this
                  slower style of travel.
                </p>

                <div className="dve-winner-divider"></div>

                <h4 className="dve-advantages-title">It's About:</h4>

                <ul className="dve-advantages-list">
                  {[
                    "Long seaside lunches",
                    "Wandering village streets",
                    "Watching sunsets",
                    "Meeting local artisans",
                    "Discovering hidden beaches",
                    "Relaxing aboard a luxury ship",
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

      {/* ── BEST TIME TO CRUISE THE GREEK ISLANDS ───────────────────────────────── */}
      <section className="adg-c-section adg-c-bg-soft" id="best-time-to-cruise">
        <div className="adg-c-container">
          <div className="adg-c-section-header">
            <span className="adg-c-eyebrow">Plan Your Sailing</span>

            <h2 className="adg-c-h2">
              Best Time to Cruise the Greek Islands
            </h2>

            <div className="adg-c-accent-line"></div>

            <p className="Asc-section-intro">
              Explora Journeys offers Greek itineraries during much of the
              Mediterranean cruising season, and each season offers a
              slightly different perspective on Greece.
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

                <p className="adg-c-venue-highlight">Comfortable Sightseeing</p>
              </div>

              <ul className="adg-c-venue-list">
                {[
                  "Mild weather",
                  "Blooming landscapes",
                  "Comfortable sightseeing",
                  "Smaller crowds",
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
                  A comfortable, unhurried time to explore island villages
                  and landmarks.
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
                  Vibrant Island Atmosphere
                </p>
              </div>

              <ul className="adg-c-venue-list">
                {[
                  "Warm sunshine",
                  "Beach weather",
                  "Vibrant island atmosphere",
                  "Longer daylight hours",
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
                  The liveliest season, perfect for beach clubs and long
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
                  Ideal Photography Conditions
                </p>
              </div>

              <ul className="adg-c-venue-list">
                {[
                  "Pleasant temperatures",
                  "Warm sea",
                  "Fewer visitors",
                  "Ideal photography conditions",
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
                  A quieter season with pleasant temperatures and warm waters
                  well into the fall.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TIPS FOR PLANNING YOUR GREEK ISLES CRUISE ───────────────────────────────────────── */}
      <section className="adg-c-section adg-c-bg-white" id="planning-tips">
        <div className="adg-c-container">
          <div className="adg-c-section-header">
            <h2 className="adg-c-h2">
              Tips for Planning Your Greek Isles Cruise
            </h2>
            <div className="adg-c-accent-line"></div>

            <p className="Asc-section-intro">
              A little planning goes a long way toward making your Greek
              Isles voyage as smooth and enjoyable as possible.
            </p>
          </div>

          <div className="adg-c-overview-layout">
            <div className="adg-c-overview-icons">
              {[
                "Book early — Greek island itineraries are among Explora's most sought-after sailings",
                "Choose the right season for comfortable temperatures or vibrant island life",
                "Pack for walking on cobblestone streets and hillside paths",
                "Bring swimwear for the crystal-clear waters of the Aegean",
                "Work with a luxury travel advisor to select the best itinerary and suite",
                "Allow extra time in port to enjoy local tavernas, markets, and villages at a relaxed pace",
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
                    An experienced advisor can help you select the best
                    itinerary, suite category, and shore experiences for a
                    seamless Greek Isles vacation.
                  </p>
                </div>
              </div>

              <div className="adg-c-overview-image-wrap">
                <img
                  src={Destination1}
                  alt="Planning a Greek Isles cruise with Explora Journeys"
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
              Personalized Greek Isles Cruise Planning
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
                Create Your Perfect Greek Isles Journey
              </h3>

              <p className="Avr-planning-left-body">
                Planning a Greek Isles cruise involves much more than choosing
                departure dates. A luxury travel advisor helps you select the
                ideal itinerary, ship, accommodations, and experiences for
                your travel style, with every detail thoughtfully
                coordinated.
              </p>

              <div className="Avr-planning-alert">
                <ShieldCheck size={18} className="Avr-planning-alert-icon" />

                <p className="Avr-planning-alert-text">
                  Professional planning ensures a seamless luxury vacation
                  from embarkation to disembarkation.
                </p>
              </div>
            </div>

            {/* RIGHT PANEL */}
            <div className="Avr-planning-right">
              <p className="Avr-planning-right-intro">
                A travel advisor can help you:
              </p>

              <div className="Avr-planning-benefits-grid">
                {[
                  {
                    icon: <MapPinned size={18} />,
                    label: "Compare itineraries",
                  },
                  {
                    icon: <Home size={18} />,
                    label: "Select the ideal suite",
                  },
                  {
                    icon: <Plane size={18} />,
                    label: "Arrange flights",
                  },
                  {
                    icon: <Hotel size={18} />,
                    label: "Book luxury hotels before or after your cruise",
                  },
                  {
                    icon: <Compass size={18} />,
                    label: "Coordinate private transfers",
                  },
                  {
                    icon: <Sparkles size={18} />,
                    label: "Recommend exclusive shore excursions",
                  },
                  {
                    icon: <BadgePercent size={18} />,
                    label: "Maximize available promotions",
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
                Professional planning ensures a seamless luxury vacation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHO WILL LOVE A GREEK ISLES CRUISE ─────────────────── */}
      <section className="Asc-section Asc-bg-white" id="Asc-who">
        <div className="Asc-container">
          <div className="Asc-section-header">
            <h2 className="Asc-h2">Who Will Love a Greek Isles Cruise?</h2>
            <div className="Asc-accent-line"></div>
            <p className="Asc-faq-intro">
              These voyages are especially popular with couples,
              honeymooners, solo travelers, retirees, and experienced luxury
              cruisers.
            </p>
          </div>

          <div className="Asc-who-grid">
            <div className="Asc-who-card Asc-who-yes">
              <h3 className="Asc-who-title">
                These Voyages Are Perfect for Travelers Who Enjoy:
              </h3>
              <ul className="Asc-who-list">
                {[
                  "Mediterranean culture",
                  "History",
                  "Fine dining",
                  "Scenic coastlines",
                  "Boutique luxury",
                  "Photography",
                  "Relaxed exploration",
                  "Wellness",
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
                  "Broadway productions",
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
            Guests seeking elegance, tranquility, and destination immersion
            will appreciate Explora's unique approach.
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
              Everything travelers need to know about Greece and Greek Isles
              cruises on Explora Journeys.
            </p>
          </div>
          <FAQ />
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────────── */}
      <section className="Asc-help-section">
        <div className="Asc-help-bg-wrap">
          <img
            src={Destination11}
            alt="Explora Journeys sailing the Greek Isles"
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
                  Discover Greece <br /> at Explora's Pace
                </h2>
                <div className="Asc-help-accent"></div>
              </div>

              <div className="Asc-help-grid">
                <div className="Asc-help-info">
                  <p className="Asc-help-intro">
                    Few destinations capture the imagination quite like the
                    Greek Islands. Their timeless beauty, fascinating
                    history, welcoming culture, and spectacular coastlines
                    make them one of the world's premier luxury cruise
                    destinations.
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
                        Explora Journeys enhances this experience through
                        spacious all-suite accommodations, exceptional
                        Mediterranean dining, personalized service, and
                        thoughtfully designed itineraries that encourage
                        deeper exploration rather than hurried sightseeing.
                      </p>
                      <br />
                      <p className="Asc-help-intro">
                        For travelers seeking an unforgettable luxury cruise
                        through Greece and the Greek Isles, Explora Journeys
                        delivers one of the most sophisticated and rewarding
                        experiences available.
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
                      Start Planning Your Greek Isles Voyage
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
                      "Recommend the ideal Greek Isles itinerary for your travel style",
                      "Advise on which islands and ports to prioritize",
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
                      label: "Mediterranean Cruises on Explora Journeys",
                      path: "/mediterranean-cruises-on-explora-journeys",
                    },
                    {
                      label: "Which Mediterranean Itinerary Is Best?",
                      path: "/which-mediterranean-itinerary-is-best",
                    },
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
                      label: "What to Pack for an Explora Cruise",
                      path: "/what-to-pack-for-an-explora-cruise",
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

export default GreeceGreekIslesCruisesOnExploraJourneys;