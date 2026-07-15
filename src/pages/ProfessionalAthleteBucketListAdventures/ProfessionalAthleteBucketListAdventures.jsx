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
  Sparkles,
  Waves,
  Mountain,
  Headset,
  Map,
  ShieldCheck,
  Home,
  Clock,
  Gem,
  Palmtree,
  Building2,
  Camera,
  HeartHandshake,
  Ship,
  Anchor,
  Leaf,
  Sun,
  Wind,
  Globe,
  PawPrint,
  Snowflake,
  TreePine,
  CalendarClock,
  Fish,
  Tent,
  Plane,
} from "lucide-react";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela.jpeg";

import DifferentApproachImage from "../../assets/PrivateJetConciergeTravel/family-concierge-travel-services-luxury-family-arrival.webp";

import BucketArctic from "../../assets/LuxuryAlumniExpeditionCruises/Arctic.webp";
import BucketAmazon from "../../assets/DisneyAlaskavsHollandAmerica/disney-cruise-alaska-shore-excursion-rainforest-suspension-bridge.jpg";
import BucketPatagonia from "../../assets/AlaskaCruisesExploraJourneys/explora-journeys-alaska-luxury-cruise-through-fjords.jpg";
import BucketIceland from "../../assets/LuxuryAlumniExpeditionCruises/Iceland.webp";
import BucketNewZealand from "../../assets/AzamaraNorwayFjordsCruises/geirangerfjord-norway-scenic-cruise-fjord-mountain-view.jpg";
import BucketAustralia from "../../assets/CaribbeanCruisesExploraJourneys/roatan-western-caribbean-reef.jpg";

import SafariLodgeImage from "../../assets/PrivateJetConciergeTravel/off-season-luxury-travel-professional-athletes-private-villa-retreat.webp";
import ExpeditionShipImage from "../../assets/PrivateJetConciergeTravel/private-villas-yachts-exclusive-resorts-luxury-yacht-group..webp";
import GalapagosImage from "../../assets/LuxuryAlumniExpeditionCruises/Gal_pagos_Islands.jpg";
import WildlifeImage from "../../assets/PrivateJetConciergeTravel/luxury-safari-expeditions-bucket-list-adventures-group.webp";
import AmenitiesImage from "../../assets/PrivateJetConciergeTravel/luxury-wellness-recovery-travel-poolside-retreat.webp";
import AdvisorImage from "../../assets/PrivateJetConciergeTravel/multigenerational-travel-professional-athletes-luxury-family-villa.webp";
import CtaImage from "../../assets/PrivateJetConciergeTravel/luxury-safari-expeditions-bucket-list-adventures-professional-athlete.webp";

import HeroBg1 from "../../assets/PrivateJetConciergeTravel/championship-celebrations-milestone-travel-luxury-family..webp";
import HeroBg2 from "../../assets/PrivateJetConciergeTravel/private-jet-concierge-travel-professional-athletes.webp";
import HeroBg3 from "../../assets/VikingExpeditionCruises/Expedition-Ship-Antarctica.jpg";
import GalapagosHeroImage from "../../assets/SmallShipAlumniCruises/Galapagos.jpg";

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
        "Luxury travel agency specializing in bucket-list adventures for professional athletes and their families, including African safaris, Antarctica expeditions, Galápagos cruises, and private expedition travel.",
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
      name: "Safaris, Expeditions & Bucket List Adventures",
      url: "https://tripsandships.com/professional-athlete-bucket-list-adventures",
      description:
        "Discover luxury African safaris, Antarctica expeditions, Galápagos cruises, and extraordinary bucket-list adventures designed for professional athletes, their families, and friends. Enjoy private travel planning, exclusive accommodations, and unforgettable experiences.",
    },
    {
      "@type": "Service",
      serviceType: "Safari, Expedition & Bucket List Adventure Planning",
      provider: {
        "@type": "TravelAgency",
        name: "Trips & Ships Luxury Travel",
      },
      areaServed: "Worldwide",
      description:
        "Concierge-level planning for luxury safaris, polar expeditions, and bucket-list adventures, including lodge and ship selection, private air arrangements, and personalized itineraries for high-profile travelers and their families.",
    },
    {
      "@type": "Article",
      headline: "Safaris, Expeditions & Bucket List Adventures",
      description:
        "A complete guide to luxury bucket-list adventures for professional athletes, covering African safaris, Antarctica expeditions, Galápagos cruises, and other extraordinary destinations around the world.",
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
      "@type": "TouristTrip",
      name: "Luxury Safari, Expedition & Bucket List Adventure",
      provider: {
        "@type": "Organization",
        name: "Trips & Ships Luxury Travel",
      },
      touristType:
        "Professional athletes, their families, and friends seeking luxury safaris, polar expeditions, and bucket-list adventure travel",
    },
    {
      "@type": "TravelAction",
      name: "Plan a Luxury Safari or Expedition",
      agent: {
        "@type": "Organization",
        name: "Trips & Ships Luxury Travel",
      },
      description:
        "Personalized planning for luxury African safaris, Antarctica expeditions, Galápagos cruises, and other bucket-list adventure destinations.",
    },
    {
      "@type": "Place",
      name: "African Safari Destinations",
      description:
        "Kenya, Tanzania, Botswana, South Africa, Namibia, Rwanda, Zambia, and Zimbabwe, offering luxury lodges and exceptional wildlife encounters.",
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
          name: "Professional Athlete Travel",
          item: "https://tripsandships.com/professional-athlete-travel",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Safaris, Expeditions & Bucket List Adventures",
          item: "https://tripsandships.com/professional-athlete-bucket-list-adventures",
        },
      ],
    },
    {
      "@type": "ItemList",
      name: "Bucket List Adventures for Professional Athletes",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Luxury African Safaris",
          description:
            "Five-star lodges, private game vehicles, and thrilling game drives across Kenya, Tanzania, Botswana, and more.",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Antarctica Expeditions",
          description:
            "Zodiac landings, glacier cruising, and penguin colonies aboard luxury expedition ships.",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Galápagos Islands Cruises",
          description:
            "Intimate expedition yachts exploring a UNESCO World Heritage Site with expert naturalist guides.",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Private Expeditions for Families & Friends",
          description:
            "Chartered yachts, private safari camps, and exclusive-use lodges for complete flexibility and privacy.",
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Milestone Celebration Travel",
          description:
            "Championship victories, retirements, and family reunions celebrated through extraordinary adventure travel.",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What are the best bucket-list vacations for professional athletes?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "African safaris, Antarctica expeditions, Galápagos cruises, Arctic voyages, Patagonia adventures, and private luxury expeditions are among the most popular choices.",
          },
        },
        {
          "@type": "Question",
          name: "Are African safaris suitable for families?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Many luxury safari lodges offer family-friendly accommodations, private game drives, educational activities, and children's programs.",
          },
        },
        {
          "@type": "Question",
          name: "What is the best time to visit Antarctica?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most expedition cruises operate between November and March during the Antarctic summer.",
          },
        },
        {
          "@type": "Question",
          name: "Are Galápagos cruises luxury experiences?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. Modern expedition yachts provide elegant accommodations, exceptional dining, expert guides, and personalized service.",
          },
        },
        {
          "@type": "Question",
          name: "Can I charter a private safari or expedition yacht?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Private charters provide complete flexibility, privacy, and customized itineraries for families, friends, or small groups.",
          },
        },
        {
          "@type": "Question",
          name: "Are these trips physically demanding?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Many itineraries can be customized to your preferred activity level, ranging from relaxed sightseeing to more active adventures.",
          },
        },
        {
          "@type": "Question",
          name: "How far in advance should I book?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Luxury safaris and expedition cruises often sell out 12–24 months in advance, particularly for peak travel seasons.",
          },
        },
        {
          "@type": "Question",
          name: "Can you arrange private flights?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. We coordinate private jet charters, helicopter transfers, and luxury ground transportation when requested.",
          },
        },
        {
          "@type": "Question",
          name: "Is luxury adventure travel safe?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Reputable expedition operators and safari companies maintain high safety standards, experienced guides, and carefully planned itineraries.",
          },
        },
        {
          "@type": "Question",
          name: "Why should I book through Trips & Ships Luxury Travel?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Our experienced advisors match you with the right destinations, luxury accommodations, and expedition partners while managing every aspect of your journey from planning to your return home.",
          },
        },
      ],
    },
  ],
};

/* ── Data: Bucket list destinations around the world (tabbed panel) */
const bucketListDestinations = [
  {
    id: "arctic",
    title: "Arctic Expeditions",
    badge: "Arctic",
    icon: Snowflake,
    image: BucketArctic,
    window: "Dramatic fjords, polar wildlife, glaciers, and remote northern landscapes",
    desc: "Dramatic fjords, polar wildlife, glaciers, and remote northern landscapes make the Arctic one of the world's last true frontiers.",
    columns: [
      {
        label: "Plan Around:",
        items: [
          "Fjord & Glacier Cruising",
          "Polar Wildlife Viewing",
          "Remote Landscape Photography",
        ],
      },
    ],
    themeLabel: "The Far North, Up Close",
    themeText:
      "Small expedition ships allow travelers to reach remote Arctic landscapes while enjoying luxury accommodations and expert guiding.",
  },
  {
    id: "amazon",
    title: "Amazon River",
    badge: "Amazon",
    icon: TreePine,
    image: BucketAmazon,
    window: "Incredible biodiversity, rainforest wildlife, and indigenous cultures",
    desc: "Incredible biodiversity, rainforest wildlife, and indigenous cultures make Amazon River expeditions a richly immersive adventure.",
    columns: [
      {
        label: "Plan Around:",
        items: [
          "River Expedition Cruising",
          "Rainforest Wildlife Encounters",
          "Indigenous Cultural Experiences",
        ],
      },
    ],
    themeLabel: "Biodiversity at Its Richest",
    themeText:
      "Guided river excursions and naturalist-led walks bring the Amazon's extraordinary biodiversity within easy reach.",
  },
  {
    id: "patagonia",
    title: "Patagonia",
    badge: "Patagonia",
    icon: Mountain,
    image: BucketPatagonia,
    window: "Dramatic mountain scenery, glaciers, hiking, and luxury wilderness lodges",
    desc: "Dramatic mountain scenery, glaciers, hiking, and luxury wilderness lodges make Patagonia a favorite for adventure-minded travelers.",
    columns: [
      {
        label: "Plan Around:",
        items: [
          "Glacier & Mountain Hiking",
          "Luxury Wilderness Lodges",
          "Scenic Wildlife Viewing",
        ],
      },
    ],
    themeLabel: "Wilderness Without Compromise",
    themeText:
      "Luxury lodges positioned near Patagonia's most dramatic scenery make rugged landscapes accessible in comfort.",
  },
  {
    id: "iceland",
    title: "Iceland",
    badge: "Iceland",
    icon: Wind,
    image: BucketIceland,
    window: "Volcanoes, waterfalls, geothermal lagoons, glaciers, and the Northern Lights",
    desc: "Volcanoes, waterfalls, geothermal lagoons, glaciers, and the Northern Lights make Iceland an unforgettable bucket-list destination.",
    columns: [
      {
        label: "Plan Around:",
        items: [
          "Geothermal Lagoons",
          "Waterfalls & Glaciers",
          "Northern Lights Viewing",
        ],
      },
    ],
    themeLabel: "Fire, Ice & Light",
    themeText:
      "Iceland's compact geography makes it possible to experience volcanoes, glaciers, and the Northern Lights within a single itinerary.",
  },
  {
    id: "new-zealand",
    title: "New Zealand",
    badge: "New Zealand",
    icon: Compass,
    image: BucketNewZealand,
    window: "Helicopter tours, wine regions, hiking, and spectacular landscapes",
    desc: "Helicopter tours, wine regions, hiking, and spectacular landscapes combine adventure with luxury throughout New Zealand.",
    columns: [
      {
        label: "Plan Around:",
        items: [
          "Helicopter Scenic Tours",
          "Wine Region Experiences",
          "Luxury Lodge Hiking Bases",
        ],
      },
    ],
    themeLabel: "Adventure Meets Luxury",
    themeText:
      "New Zealand pairs thrilling helicopter access to remote scenery with some of the world's most refined wilderness lodges.",
  },
  {
    id: "australia",
    title: "Australia",
    badge: "Australia",
    icon: Fish,
    image: BucketAustralia,
    window: "The Great Barrier Reef, luxury outback lodges, and world-famous wildlife",
    desc: "The Great Barrier Reef, luxury outback lodges, and world-famous wildlife make Australia a destination of striking contrasts.",
    columns: [
      {
        label: "Plan Around:",
        items: [
          "Great Barrier Reef Diving",
          "Luxury Outback Lodges",
          "Iconic Wildlife Encounters",
        ],
      },
    ],
    themeLabel: "Reef to Red Center",
    themeText:
      "From reef to outback, Australia's contrasting landscapes are best explored with private guides and thoughtfully paced itineraries.",
  },
];

/* ── FAQ Component ─────────────────────────────────────────────── */
function FAQ() {
  const [open, setOpen] = useState(null);

  const faqData = [
    {
      q: "What are the best bucket-list vacations for professional athletes?",
      a: "African safaris, Antarctica expeditions, Galápagos cruises, Arctic voyages, Patagonia adventures, and private luxury expeditions are among the most popular choices.",
    },
    {
      q: "Are African safaris suitable for families?",
      a: "Yes. Many luxury safari lodges offer family-friendly accommodations, private game drives, educational activities, and children's programs.",
    },
    {
      q: "What is the best time to visit Antarctica?",
      a: "Most expedition cruises operate between November and March during the Antarctic summer.",
    },
    {
      q: "Are Galápagos cruises luxury experiences?",
      a: "Absolutely. Modern expedition yachts provide elegant accommodations, exceptional dining, expert guides, and personalized service.",
    },
    {
      q: "Can I charter a private safari or expedition yacht?",
      a: "Yes. Private charters provide complete flexibility, privacy, and customized itineraries for families, friends, or small groups.",
    },
    {
      q: "Are these trips physically demanding?",
      a: "Many itineraries can be customized to your preferred activity level, ranging from relaxed sightseeing to more active adventures.",
    },
    {
      q: "How far in advance should I book?",
      a: "Luxury safaris and expedition cruises often sell out 12–24 months in advance, particularly for peak travel seasons.",
    },
    {
      q: "Can you arrange private flights?",
      a: "Yes. We coordinate private jet charters, helicopter transfers, and luxury ground transportation when requested.",
    },
    {
      q: "Is luxury adventure travel safe?",
      a: "Reputable expedition operators and safari companies maintain high safety standards, experienced guides, and carefully planned itineraries.",
    },
    {
      q: "Why should I book through Trips & Ships Luxury Travel?",
      a: "Our experienced advisors match you with the right destinations, luxury accommodations, and expedition partners while managing every aspect of your journey from planning to your return home.",
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
const ProfessionalAthleteBucketListAdventures = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [readMore, setReadMore] = useState(false);
  const [activeDestination, setActiveDestination] = useState("arctic");
  const [hovered, setHovered] = useState(null);

  const currentDestination =
    bucketListDestinations.find((d) => d.id === activeDestination) ||
    bucketListDestinations[0];
  const ActiveDestinationIcon = currentDestination.icon;

  const images = [HeroBg1, HeroBg2, HeroBg3];

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
          Luxury Safaris, Expeditions &amp; Bucket List Adventures for
          Professional Athletes
        </title>
        <meta
          name="title"
          content="Safaris, Expeditions & Bucket List Adventures"
        />
        <meta
          name="description"
          content="Discover luxury African safaris, Antarctica expeditions, Galápagos cruises, and extraordinary bucket-list adventures designed for professional athletes, their families, and friends. Enjoy private travel planning, exclusive accommodations, and unforgettable experiences."
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
            Safaris, Expeditions <br /> &amp; Bucket List Adventures
          </h1>

          <p>
            For professional athletes, time away from competition is an
            opportunity to reconnect with family, celebrate achievements,
            and experience destinations that few people ever have the
            chance to explore.
          </p>

          <p>
            Whether it's witnessing the Great Migration in East Africa,
            sailing among Antarctica's towering icebergs, exploring the
            wildlife of the Galápagos Islands, or discovering remote corners
            of the world aboard an expedition yacht, bucket-list adventures
            combine luxury with unforgettable experiences.
          </p>

          {readMore && (
            <>
              <p>
                At Trips &amp; Ships Luxury Travel, we create extraordinary
                journeys that balance adventure, comfort, privacy, and
                personalized service — allowing athletes and their families
                to experience the world's most remarkable destinations
                without compromising on luxury.
              </p>

              <p>
                From luxury safari lodges and polar expedition ships to
                private charters and dedicated concierge support, every
                detail is designed for comfort, flexibility, and complete
                peace of mind.
              </p>

              <p>
                With more than 40 years in the travel industry, experience
                spanning over 121 countries, and recognition as the 2024
                Luxury Travel Influencer of the Year by Travel Leaders
                Network, Angela Hughes has become one of the most trusted
                voices in luxury safari and expedition travel planning.
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

      {/* ── WHY PROFESSIONAL ATHLETES CHOOSE ADVENTURE TRAVEL ───────── */}
      <section className="adg-c-section adg-c-bg-white" id="adg-c-why-adventure-travel">
        <div className="adg-c-container">
          <div className="adg-c-section-header">
            <h2 className="adg-c-h2">
              Why Professional Athletes Choose Adventure Travel
            </h2>
            <div className="adg-c-accent-line"></div>
            <p className="Asc-section-intro">
              Elite athletes spend much of the year focused on training,
              competition, and performance. During the off-season, many are
              looking for experiences that are meaningful rather than
              ordinary.
            </p>
          </div>

          <div className="adg-c-overview-layout">
            <div className="adg-c-overview-icons">
              {[
                "Exclusive destinations",
                "Privacy away from public attention",
                "Incredible wildlife encounters",
                "Family bonding opportunities",
                "Personalized itineraries",
                "Luxury accommodations",
                "Life-changing experiences",
              ].map((label, i) => (
                <div key={i} className="adg-c-overview-item">
                  <span className="adg-c-overview-icon">
                    <Sparkles size={16} strokeWidth={2.5} />
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
                    Whether traveling as a couple, with children, or as a
                    multigenerational family, these journeys create stories
                    that last far beyond the season.
                  </p>
                </div>
              </div>

              <div className="adg-c-overview-image-wrap">
                <img
                  src={DifferentApproachImage}
                  alt="Family on a private game drive during a luxury African safari"
                  className="adg-c-overview-img"
                />
                <div className="adg-c-overview-img-overlay">
                  <span className="adg-c-overview-img-label">
                    Meaningful, Not Ordinary
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LUXURY AFRICAN SAFARIS & ANTARCTICA EXPEDITIONS */}
      <section
        className="Ejsc-ent-section"
        id="Ejsc-safaris-and-antarctica"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="Ejsc-container">
          <div className="Ejsc-section-header">
            <h2 className="Ejsc-section-title">
              Luxury African Safaris &amp; Antarctica Expeditions
            </h2>
            <div className="Asc-accent-line"></div>
            <p className="Ejsc-section-subtitle">
              Two of the world's most extraordinary wildlife experiences,
              paired with five-star comfort from arrival to departure.
            </p>
          </div>

          <div className="Ejsc-ent-grid">
            {/* Luxury African Safaris Card */}
            <div className="Ejsc-ent-card Ejsc-explora-card">
              <div className="Ejsc-card-header">
                <div className="Ejsc-card-icon-wrap">
                  <PawPrint size={24} className="Ejsc-card-icon" />
                </div>
                <h3 className="Ejsc-card-title">Luxury African Safaris</h3>
              </div>

              <p className="Ejsc-card-intro">
                Few experiences compare to seeing Africa's incredible
                wildlife in its natural habitat. Luxury safaris combine
                thrilling game drives with five-star accommodations.
              </p>

              <ul className="Ejsc-feature-list">
                {[
                  "Kenya, Tanzania & Botswana",
                  "South Africa & Namibia",
                  "Rwanda, Zambia & Zimbabwe",
                  "Private plunge pools & butler service",
                  "Gourmet dining & personal guides",
                  "Private game vehicles",
                ].map((item, i) => (
                  <li key={i} className="Ejsc-feature-item">
                    <div className="Ejsc-feature-icon">
                      <Check size={14} />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="Ejsc-card-highlight">
                <p>
                  For athletes seeking privacy and unforgettable wildlife
                  experiences, Africa remains one of the world's ultimate
                  luxury destinations.
                </p>
              </div>
            </div>

            {/* Antarctica Expeditions Card */}
            <div className="Ejsc-ent-card Ejsc-seabourn-card">
              <div className="Ejsc-card-header">
                <div className="Ejsc-card-icon-wrap">
                  <Snowflake size={24} className="Ejsc-card-icon" />
                </div>
                <h3 className="Ejsc-card-title">Antarctica Expeditions</h3>
              </div>

              <p className="Ejsc-card-intro">
                Antarctica represents one of the last true frontiers on
                Earth, offering dramatic glaciers, towering icebergs, and
                incredible wildlife.
              </p>

              <ul className="Ejsc-feature-list">
                {[
                  "Zodiac landings & penguin colonies",
                  "Whale watching & glacier cruising",
                  "Iceberg photography",
                  "Scientific lectures & kayaking",
                  "Spacious suites & wellness spas",
                ].map((item, i) => (
                  <li key={i} className="Ejsc-feature-item">
                    <div className="Ejsc-feature-icon">
                      <Star size={14} />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="Ejsc-card-highlight">
                <p>
                  For many travelers, Antarctica is the ultimate
                  once-in-a-lifetime adventure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── GALÁPAGOS ISLANDS CRUISES ─────────────────────────────────── */}
      <section className="wnf-section wnf-bg-white" id="galapagos-islands-cruises">
        <div className="wnf-container">
          <div className="wnf-section-header">
            <h2 className="wnf-h2">Galápagos Islands Cruises</h2>
            <div className="wnf-accent-line"></div>
          </div>

          <div className="wnf-split">
            <div className="wnf-image-column">
              <div className="wnf-image-stack">
                <div className="wnf-img-frame wnf-frame-primary">
                  <img
                    src={GalapagosImage}
                    alt="Giant tortoise encounter in the Galápagos Islands"
                    className="wnf-photo"
                  />
                </div>

                <div className="wnf-img-frame wnf-frame-secondary">
                  <img
                    src={GalapagosHeroImage}
                    alt="Sea lion resting on a Galápagos beach"
                    className="wnf-photo"
                  />
                </div>
              </div>
            </div>

            <div className="wnf-content-column">
              <div className="wnf-block">
                <p className="wnf-lead-text">
                  The Galápagos Islands offer one of the world's most
                  extraordinary wildlife experiences. Luxury expedition
                  yachts allow guests to explore this UNESCO World Heritage
                  Site while enjoying personalized service.
                </p>

                <ul className="wnf-feature-list">
                  {[
                    "Giant tortoise encounters",
                    "Blue-footed boobies & marine iguanas",
                    "Snorkeling with tropical fish & sea lions",
                    "Scenic volcanic landscapes",
                    "Guided nature walks",
                  ].map((feature, i) => (
                    <li key={i} className="wnf-feature-item">
                      <div className="wnf-icon-wrapper">
                        <Fish size={14} />
                      </div>
                      <span className="wnf-feature-text">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="wnf-footer-note">
                <p className="wnf-highlight-text">
                  Because visitor numbers are carefully managed, a luxury
                  Galápagos cruise provides exclusive access while helping
                  preserve this remarkable ecosystem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRIVATE EXPEDITIONS & ADVENTURE WITHOUT SACRIFICING LUXURY */}
      <section className="azs-suites-section" id="azs-private-expeditions">
        <div className="azs-container">
          <div className="azs-section-header">
            <h2 className="azs-section-title">
              Private Expeditions &amp; <br /> Adventure Without Compromise
            </h2>
            <div className="azs-section-accent"></div>
            <p className="azs-section-subtitle">
              Luxury adventure travel no longer means giving up comfort, and
              private options offer complete flexibility for your group.
            </p>
          </div>

          <div className="azs-suites-grid">
            {/* Private Expeditions Card */}
            <div className="azs-suites-card azs-seabourn-suites">
              <div className="azs-suites-image-wrap">
                <img
                  src={ExpeditionShipImage}
                  alt="Chartered expedition yacht for a private family adventure"
                  className="azs-suites-img"
                />
                <span className="azs-suites-image-badge">
                  Your Group, Your Pace
                </span>
              </div>

              <div className="azs-suites-content">
                <div className="azs-suites-card-header">
                  <div className="azs-suites-icon-circle">
                    <Tent size={24} className="azs-suites-icon" />
                  </div>
                  <h3 className="azs-suites-title">
                    Private Expeditions for Families &amp; Friends
                  </h3>
                </div>

                <p className="azs-suites-intro">
                  Many professional athletes prefer traveling with extended
                  family, close friends, teammates, or business partners.
                </p>

                <div className="azs-suites-body">
                  <h4 className="azs-suites-group-title">
                    Private options include:
                  </h4>

                  <ul className="azs-suites-list">
                    {[
                      "Chartered expedition yachts",
                      "Private safari camps & exclusive-use lodges",
                      "Private guides & helicopter transfers",
                      "VIP airport services",
                      "Dedicated concierge support",
                    ].map((item, idx) => (
                      <li key={idx} className="azs-suites-list-item">
                        <div className="azs-suites-list-icon-wrapper">
                          <Check size={14} className="azs-suites-list-icon" />
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="azs-suites-divider"></div>

                  <div className="azs-suites-highlight-box azs-seabourn-suites-highlight">
                    <p className="azs-suites-highlight-text">
                      Private travel allows your group to enjoy
                      extraordinary experiences at your own pace while
                      maintaining complete flexibility.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Adventure Without Sacrificing Luxury Card */}
            <div className="azs-suites-card azs-azamara-suites">
              <div className="azs-suites-image-wrap">
                <img
                  src={SafariLodgeImage}
                  alt="Private plunge pool at a luxury safari lodge"
                  className="azs-suites-img"
                />
                <span className="azs-suites-image-badge">
                  Comfort Meets Adventure
                </span>
              </div>

              <div className="azs-suites-content">
                <div className="azs-suites-card-header">
                  <div className="azs-suites-icon-circle">
                    <Gem size={24} className="azs-suites-icon" />
                  </div>
                  <h3 className="azs-suites-title">
                    Adventure Without Sacrificing Luxury
                  </h3>
                </div>

                <p className="azs-suites-intro">
                  Luxury adventure travel no longer means giving up comfort.
                  Today's premium expedition experiences include:
                </p>

                <div className="azs-suites-body">
                  <h4 className="azs-suites-group-title">
                    Every journey includes:
                  </h4>

                  <ul className="azs-suites-list">
                    {[
                      "Five-star accommodations & fine dining",
                      "Luxury spa treatments",
                      "Spacious suites & gourmet cuisine",
                      "Private transportation",
                      "Expert naturalists & seamless logistics",
                    ].map((item, idx) => (
                      <li key={idx} className="azs-suites-list-item">
                        <div className="azs-suites-list-icon-wrapper">
                          <Check size={14} className="azs-suites-list-icon" />
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="azs-suites-divider"></div>

                  <div className="azs-suites-highlight-box azs-azamara-suites-highlight">
                    <p className="azs-suites-highlight-text">
                      Whether you're exploring Antarctica or the African
                      savannah, every detail is designed for comfort and
                      convenience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAMILY-FRIENDLY ADVENTURES & MILESTONE CELEBRATIONS ─────── */}
      <section
        className="Leg-section"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="Leg-container">
          <div className="Leg-header">
            <h2 className="Leg-title">
              Family-Friendly Adventures &amp; Milestone Celebrations
            </h2>
            <div className="adg-c-accent-line"></div>
            <p className="Leg-subtitle">
              Adventure travel creates unforgettable memories, and it's the
              perfect way to celebrate life's biggest achievements.
            </p>
          </div>

          <div className="Leg-grid">
            {[
              {
                id: 1,
                accent: "gold",
                icon: Camera,
                title: "Family-Friendly Adventures",
                description:
                  "Junior ranger programs, wildlife photography, and cultural encounters create unforgettable memories for families of all ages.",
                pills: ["Junior Ranger Programs", "Wildlife Photography", "Stargazing"],
                highlight: "Children gain a deeper appreciation for nature.",
              },
              {
                id: 2,
                accent: "navy",
                icon: Award,
                title: "Celebrate Milestones",
                description:
                  "Championship victories, retirements, and Hall of Fame inductions are celebrated with unforgettable shared experiences.",
                pills: ["Championship Victories", "Retirement Trips", "Family Reunions"],
                highlight: "Every milestone marked with a shared adventure.",
              },
              {
                id: 3,
                accent: "teal",
                icon: HeartHandshake,
                title: "Wellness in the Wilderness",
                description:
                  "Many luxury lodges and expedition ships feature wellness spas, yoga sessions, and outdoor meditation for recovery and renewal.",
                pills: ["Wellness Spas", "Yoga Sessions", "Nature Walks"],
                highlight: "Exploration paired with recovery and renewal.",
              },
              {
                id: 4,
                accent: "coral",
                icon: Globe,
                title: "Cultural Immersion Experiences",
                description:
                  "Engage with local communities through private cooking classes, guided market tours, and traditional ceremonies that bring each destination to life.",
                pills: ["Cooking Classes", "Local Market Tours", "Traditional Ceremonies"],
                highlight: "Authentic connections that enrich every journey.",
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

      {/* ── EXTRAORDINARY WILDLIFE ENCOUNTERS ────────────────────────── */}
      <section
        className="dmg-info-section dmg-bg-white"
        id="extraordinary-wildlife-encounters"
      >
        <div className="dmg-info-container">
          <div className="dmg-info-grid">
            <div className="dmg-info-content">
              <h2 className="dmg-info-title">Extraordinary Wildlife Encounters</h2>
              <div className="dmg-info-accent"></div>

              <p className="dmg-info-lead">
                From the African savannah to the Southern Ocean, every
                journey is built around remarkable wildlife encounters in
                their natural habitat.
              </p>

              <div className="dmg-info-features dmg-info-features-scrollable">
                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <PawPrint size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      African Safari Wildlife
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Lions, leopards, elephants, rhinos, cheetahs, and
                      selected gorilla encounters.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Snowflake size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Polar Wildlife
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Penguin colonies and whale watching amid Antarctica's
                      towering icebergs.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Fish size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Galápagos Marine Life
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Giant tortoises, blue-footed boobies, marine iguanas,
                      and sea lions.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <TreePine size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Rainforest &amp; Outback Wildlife
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Amazon biodiversity and Australia's world-famous
                      native species.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="dmg-info-media">
              <div className="dmg-media-wrapper">
                <img
                  src={WildlifeImage}
                  alt="Lion resting on the African savannah during a luxury safari"
                  className="dmg-media-img"
                  style={{ height: "650px" }}
                />
                <div className="dmg-media-overlay"></div>

                <div className="dmg-media-badge">
                  <span>Nature's Most Remarkable Moments</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SIGNATURE LUXURY TOUCHES ─────────────────────────────────── */}
      <section
        className="ugt-components-section"
        id="signature-luxury-touches"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="ugt-components-container">
          <div className="ugt-components-header">
            <h2 className="ugt-components-title">Signature Luxury Touches</h2>

            <div className="adg-c-accent-line"></div>
          </div>

          <div className="ugt-components-list">
            <div className="ugt-component-row">
              <div className="ugt-component-image-wrapper">
                <div className="ugt-component-image-container">
                  <img
                    src={AmenitiesImage}
                    alt="Private plunge pool and outdoor shower at a luxury safari tent"
                    className="ugt-component-image"
                  />
                </div>
              </div>

              <div className="ugt-component-content">
                <p className="ugt-component-text">
                  Luxury safari lodges and expedition vessels are designed
                  around the same idea: extraordinary access to nature,
                  without sacrificing comfort.
                </p>

                <div className="ugt-questions-box">
                  <span className="ugt-questions-title">
                    Signature touches often include:
                  </span>

                  <ul className="ugt-questions-list">
                    {[
                      "Private Plunge Pools & Outdoor Showers",
                      "Spa Treatments",
                      "Butler & Personal Guide Service",
                      "Observation Lounges",
                      "Expert Expedition Teams",
                      "Small Guest Capacity",
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
                  Every detail is designed for comfort and convenience,
                  wherever the journey leads.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BUCKET LIST DESTINATIONS AROUND THE WORLD (TABBED) ───────── */}
      <section
        className="luc-destinations-section"
        id="luc-bucket-list-destinations"
      >
        <div className="luc-destinations-container">
          <div className="luc-destinations-header">
            <h2 className="luc-destinations-title">
              Bucket List Destinations Around the World
            </h2>

            <div className="adg-c-accent-line"></div>

            <p className="luc-destinations-intro">
              Adventure means different things to different travelers.
              These additional extraordinary journeys round out the world's
              most remarkable bucket-list experiences.
            </p>
          </div>

          <div className="luc-dest-layout">
            <nav className="luc-dest-nav">
              {bucketListDestinations.map((item) => {
                const NavIcon = item.icon;
                const isActive = activeDestination === item.id;

                return (
                  <button
                    key={item.id}
                    className={`luc-dest-nav-btn ${
                      isActive ? "luc-dest-nav-btn--active" : ""
                    }`}
                    onClick={() => setActiveDestination(item.id)}
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

            <div className="luc-dest-panel" key={activeDestination}>
              <div className="luc-dest-img-wrap">
                <img
                  src={currentDestination.image}
                  alt={currentDestination.title}
                  className="luc-dest-img"
                />

                <div className="luc-dest-img-overlay">
                  <div className="luc-dest-img-icon">
                    <ActiveDestinationIcon size={22} strokeWidth={1.6} />
                  </div>

                  <span className="luc-dest-img-title">
                    {currentDestination.title}
                  </span>
                </div>
              </div>

              <p className="luc-dest-panel-desc">
                <strong>{currentDestination.window}.</strong>{" "}
                {currentDestination.desc}
              </p>

              <div className="luc-dest-columns">
                {currentDestination.columns.map((col, cIdx) => (
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
                    {currentDestination.themeLabel}
                  </span>

                  <p className="luc-dest-theme-note-text">
                    {currentDestination.themeText}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY WORK WITH A LUXURY TRAVEL ADVISOR? ────────────────── */}
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
            <div className="adg-content-card-side">
              <img
                src={AdvisorImage}
                alt="Luxury travel advisor coordinating a safari and expedition itinerary"
                className="adg-side-image"
                style={{ height: "30vh", border: "1px solid var(--navy)" }}
              />

              <div className="adg-info-card">
                <div className="adg-card-meta">
                  <Award size={28} />
                  <span className="adg-meta-label">Trusted Expertise</span>
                </div>

                <p className="adg-card-lead">
                  Planning an expedition or safari requires specialized
                  expertise. Trips &amp; Ships Luxury Travel manages every
                  detail so you can focus on the experience — not the
                  logistics.
                </p>

                <div className="adg-card-divider"></div>

                <p className="adg-card-subtext">
                  Our goal is to create seamless adventures from the first
                  call to your return home.
                </p>
              </div>
            </div>

            <div className="adg-list-side">
              {[
                {
                  title: "Destination Recommendations",
                  icon: <Compass size={20} />,
                },
                {
                  title: "Expedition Ship Selection",
                  icon: <Ship size={20} />,
                },
                {
                  title: "Luxury Safari Lodge Reservations",
                  icon: <Tent size={20} />,
                },
                {
                  title: "Private Air Arrangements",
                  icon: <Plane size={20} />,
                },
                {
                  title: "VIP Airport Services",
                  icon: <MapPin size={20} />,
                },
                {
                  title: "Travel Insurance & Visa Guidance",
                  icon: <ShieldCheck size={20} />,
                },
                {
                  title: "Private Guides & Customized Itineraries",
                  icon: <Map size={20} />,
                },
                {
                  title: "Family Travel & Concierge Support",
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

      {/* TIPS FOR PLANNING YOUR ADVENTURE */}
      <section
        className="Avr-planning-section"
        id="Asc-adventure-planning-tips"
        style={{ backgroundColor: "var(--bg-white)" }}
      >
        <div className="Asc-container">
          {/* HEADING */}
          <div className="Avr-planning-heading">
            <span className="Avr-planning-eyebrow">Planning With Purpose</span>

            <h2 className="Avr-planning-title">
              Tips for Planning Your Adventure
            </h2>

            <div className="Avr-planning-divider"></div>
          </div>

          {/* TWO-PANEL GRID */}
          <div className="Avr-planning-grid">
            {/* LEFT PANEL */}
            <div className="Avr-planning-left">
              <div className="Avr-planning-left-deco">&ldquo;</div>

              <h3 className="Avr-planning-left-title">
                Book Early &amp; Plan Around Your Season
              </h3>

              <p className="Avr-planning-left-body">
                Luxury safaris and expedition cruises often sell out
                12–24 months in advance, particularly for peak travel
                seasons. Coordinating around your competition schedule
                early ensures the best availability and the widest choice
                of dates.
              </p>

              <div className="Avr-planning-alert">
                <ShieldCheck size={18} className="Avr-planning-alert-icon" />

                <p className="Avr-planning-alert-text">
                  Reputable operators maintain high safety standards,
                  experienced guides, and carefully planned itineraries.
                </p>
              </div>
            </div>

            {/* RIGHT PANEL */}
            <div className="Avr-planning-right">
              <p className="Avr-planning-right-intro">
                A well-planned adventure is built around:
              </p>

              <div className="Avr-planning-benefits-grid">
                {[
                  {
                    icon: <CalendarClock size={18} />,
                    label: "Early planning & booking",
                  },
                  {
                    icon: <Users size={18} />,
                    label: "Coordinated family travel",
                  },
                  {
                    icon: <MapPin size={18} />,
                    label: "Carefully chosen destinations",
                  },
                  {
                    icon: <ShieldCheck size={18} />,
                    label: "Travel insurance & visa guidance",
                  },
                  {
                    icon: <Compass size={18} />,
                    label: "Customized activity levels",
                  },
                  {
                    icon: <Headset size={18} />,
                    label: "Concierge support throughout",
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
                Many itineraries can be customized to your preferred
                activity level, from relaxed sightseeing to more active
                adventures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── WELLNESS IN THE WILDERNESS ────────────────────────────── */}
      <section className="ugt-advantage-section" id="wellness-in-the-wilderness">
        <div className="ugt-advantage-container">
          <div className="ugt-advantage-header">
            <span className="ugt-advantage-eyebrow">
              Safaris, Expeditions &amp; Bucket List Adventures
            </span>

            <h2 className="ugt-advantage-title">Wellness in the Wilderness</h2>

            <div className="Asc-accent-line"></div>

            <p className="ugt-advantage-intro">
              Adventure travel also offers opportunities to disconnect,
              recharge, and focus on personal well-being.
            </p>
          </div>

          <div className="ugt-advantage-grid">
            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <HeartHandshake size={28} strokeWidth={1.5} />
              </div>

              <h4 className="ugt-card-title">Wellness Spas</h4>

              <p className="ugt-card-desc">
                Massage therapy and spa treatments available at many luxury
                lodges and ships.
              </p>
            </div>

            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <Sun size={28} strokeWidth={1.5} />
              </div>

              <h4 className="ugt-card-title">Yoga Sessions</h4>

              <p className="ugt-card-desc">
                Movement and mindfulness sessions set against extraordinary
                natural surroundings.
              </p>
            </div>

            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <Leaf size={28} strokeWidth={1.5} />
              </div>

              <h4 className="ugt-card-title">Healthy Cuisine</h4>

              <p className="ugt-card-desc">
                Nourishing, well-prepared meals designed to support active
                days of exploring.
              </p>
            </div>

            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <TreePine size={28} strokeWidth={1.5} />
              </div>

              <h4 className="ugt-card-title">Nature Walks</h4>

              <p className="ugt-card-desc">
                Guided walks that pair gentle movement with immersive
                natural surroundings.
              </p>
            </div>

            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <Wind size={28} strokeWidth={1.5} />
              </div>

              <h4 className="ugt-card-title">Outdoor Meditation</h4>

              <p className="ugt-card-desc">
                Quiet moments designed to help travelers disconnect and
                recharge.
              </p>
            </div>

            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <Globe size={28} strokeWidth={1.5} />
              </div>

              <h4 className="ugt-card-title">Relaxation Spaces</h4>

              <p className="ugt-card-desc">
                Fitness facilities and quiet spaces built into the rhythm of
                each itinerary.
              </p>
            </div>
          </div>

          <p
            className="ugt-advantage-intro"
            style={{
              marginTop: "2.5rem",
              textAlign: "center",
              maxWidth: "900px",
              marginInline: "auto",
            }}
          >
            These experiences combine exploration with recovery and
            renewal.
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
                      icon: <PawPrint size={16} />,
                      label:
                        "Specialist in luxury safaris, expeditions, and bucket-list adventure travel for professional athletes",
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
                  help professional athletes and their families plan
                  extraordinary safaris, expeditions, and bucket-list
                  adventures around the world.
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
              Everything you need to know about planning luxury safaris,
              expeditions, and bucket-list adventures.
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
            alt="Sunset over the African savannah during the Great Migration"
            className="Asc-help-bg-img"
          />
          <div className="Asc-help-overlay"></div>
        </div>

        <div className="Asc-container">
          <div className="Asc-help-card">
            <div className="Asc-help-content">
              <div className="Asc-help-header">
                <span className="Asc-help-eyebrow">
                  Begin Planning Your Next Great Adventure
                </span>
                <h2 className="Asc-help-h2">
                  Some Journeys Change the Way <br /> You See the World
                </h2>
                <div className="Asc-help-accent"></div>
              </div>

              <div className="Asc-help-grid">
                <div className="Asc-help-info">
                  <p className="Asc-help-intro">
                    Watching elephants cross the African plains at sunrise,
                    standing among towering Antarctic glaciers, snorkeling
                    with sea lions in the Galápagos, or witnessing the Great
                    Migration are experiences that remain with you for a
                    lifetime.
                  </p>

                  <p className="Asc-help-intro">
                    At Trips &amp; Ships Luxury Travel, we specialize in
                    creating extraordinary adventures that combine
                    world-class exploration with uncompromising luxury.
                    Whether you're celebrating a championship, enjoying your
                    off-season, or simply fulfilling a lifelong dream, we'll
                    design a personalized itinerary that reflects your
                    travel style, priorities, and sense of adventure.
                  </p>

                  <div className="Asc-help-btn-container">
                    <Link
                      to="/contact"
                      className="Asc-help-cta-btn"
                      style={{ textDecoration: "none" }}
                    >
                      Start Planning Your Next Adventure
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
                      "Destination & itinerary recommendations",
                      "Expedition ship & safari lodge selection",
                      "Private air & VIP airport services",
                      "Travel insurance & visa guidance",
                      "Private guides & family travel planning",
                      "Concierge support throughout your journey",
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
                    personalized safari, expedition, and bucket-list
                    adventures worldwide.
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

export default ProfessionalAthleteBucketListAdventures;
