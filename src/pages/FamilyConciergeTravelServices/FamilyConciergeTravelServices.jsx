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
  CalendarClock,
  Waves,
  Mountain,
  Headset,
  Map,
  ShieldCheck,
  Plane,
  Car,
  Ship,
  Home,
  Luggage,
  Clock,
  Utensils,
  Gem,
  Palmtree,
  Building2,
  PawPrint,
  Camera,
  HeartHandshake,
  Baby,
  Ticket,
  PartyPopper,
  Anchor,
} from "lucide-react";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela.jpeg";

import HeroImage1 from "../../assets/PrivateJetConciergeTravel/family-concierge-hero-1.jpg";
import HeroImage2 from "../../assets/PrivateJetConciergeTravel/family-concierge-hero-2.jpg";
import HeroImage3 from "../../assets/PrivateJetConciergeTravel/family-concierge-hero-3.jpg";

import DifferentApproachImage from "../../assets/PrivateJetConciergeTravel/family-concierge-travel-services-luxury-family-arrival.webp";

import BucketCaribbean from "../../assets/CaribbeanCruisesExploraJourneys/private-exclusive-caribbean-island.jpg";
import BucketMediterranean from "../../assets/WhichMediterraneanItineraryIsBest/amalfi-coast-italy-mediterranean-hero-summer-2025.jpg";
import HawaiiJetImage from "../../assets/PrivateJetConciergeTravel/hawaii-oceanfront-luxury-resort-private-jet-travel.webp";
import BucketAlaska from "../../assets/AlaskaCruisesExploraJourneys/explora-journeys-alaska-luxury-cruise-through-fjords.jpg";
import PolynesiaJetImage from "../../assets/PrivateJetConciergeTravel/french-polynesia-overwater-villa-luxury-private-aviation.webp";
import BucketSafari from "../../assets/PrivateJetConciergeTravel/luxury-safari-expeditions-bucket-list-adventures-group.webp";

import ConciergeImage from "../../assets/PrivateJetConciergeTravel/luxury-wellness-recovery-travel-professional-athlete-family.webp";
import DiningImage from "../../assets/ExploraJourneysCruises/Fine-Dining.webp";
import GuidesImage from "../../assets/MultiGenerationalAlumniTravel/machu-picchu-group-tour-peru-luxury-cultural-travel-experience.jpg";
import TransportationImage from "../../assets/PrivateJetConciergeTravel/vip-airport-meet-and-greet-concierge-service.webp";
import ChildcareImage from "../../assets/PrivateJetConciergeTravel/family-concierge-childcare-support.jpg";
import SuiteImage from "../../assets/PrivateJetConciergeTravel/competitive-season-luxury-hotel-suite-flexibility.jpg";
import EventTicketsImage from "../../assets/PrivateJetConciergeTravel/off-season-luxury-travel-professional-athletes-private-villa-retreat.webp";
import CruiseImage from "../../assets/PrivateJetConciergeTravel/family-concierge-luxury-cruise-suite.jpg";
import AdvisorImage from "../../assets/PrivateJetConciergeTravel/luxury-safari-expeditions-bucket-list-adventures-professional-athlete.webp";
import CtaImage from "../../assets/PrivateJetConciergeTravel/private-villas-yachts-exclusive-resorts-luxury-yacht-group..webp";

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
        "Luxury travel agency specializing in Family Concierge Travel Services for busy families, professional athletes, executives, entrepreneurs, and multigenerational travelers, including personalized itineraries, luxury accommodations, private transportation, childcare coordination, and ongoing travel support.",
    },
    {
      "@type": "WebPage",
      name: "Family Concierge Travel Services",
      url: "https://tripsandships.com/family-concierge-travel-services",
      description:
        "Experience stress-free luxury family vacations with personalized concierge travel services. From restaurant reservations and private guides to childcare coordination, VIP transportation, event tickets, and customized itineraries, every detail is expertly managed.",
    },
    {
      "@type": "Service",
      serviceType: "Family Concierge Travel Services",
      provider: {
        "@type": "TravelAgency",
        name: "Trips & Ships Luxury Travel",
      },
      areaServed: "Worldwide",
      description:
        "Personalized travel management for families, professional athletes, executives, entrepreneurs, and multigenerational travelers, coordinating accommodations, dining, private guides, childcare, transportation, and celebrations into one seamless itinerary.",
    },
    {
      "@type": "Article",
      headline: "Family Concierge Travel Services",
      description:
        "A complete guide to Family Concierge Travel Services, covering personalized itineraries, luxury accommodations, dining reservations, private guides, childcare support, VIP transportation, and milestone celebrations.",
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
          name: "Luxury Concierge Travel",
          item: "https://tripsandships.com/luxury-concierge-travel",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Family Concierge Travel Services",
          item: "https://tripsandships.com/family-concierge-travel-services",
        },
      ],
    },
    {
      "@type": "ItemList",
      name: "Services Included in Family Concierge Travel",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Customized Itineraries",
          description:
            "Vacation planning tailored to your family's lifestyle, interests, and travel preferences.",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Luxury Accommodations",
          description:
            "Resorts, private villas, oceanfront residences, and cruise suites matched to your family's needs.",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Restaurant Reservations & Private Guides",
          description:
            "Reservations at renowned restaurants and private guides for personalized sightseeing and experiences.",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Childcare & VIP Transportation",
          description:
            "Certified babysitters, kids' club arrangements, and coordinated private transfers for the whole family.",
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Celebrations & Ongoing Travel Support",
          description:
            "Milestone celebrations planned down to the smallest detail, with concierge support throughout your trip.",
        },
      ],
    },
    {
      "@type": "TouristTrip",
      name: "Family Concierge Vacation",
      provider: {
        "@type": "Organization",
        name: "Trips & Ships Luxury Travel",
      },
      touristType:
        "Busy families, professional athletes, executives, entrepreneurs, and multigenerational travelers seeking personalized, concierge-level travel planning",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is family concierge travel?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Family concierge travel is a personalized service that manages every aspect of your vacation, including accommodations, transportation, dining, activities, childcare, and special requests.",
          },
        },
        {
          "@type": "Question",
          name: "Do you only work with luxury travelers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Our services are designed for travelers seeking personalized planning, premium experiences, and exceptional service, regardless of destination.",
          },
        },
        {
          "@type": "Question",
          name: "Can you arrange childcare while we're traveling?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. We can coordinate professional childcare services, kids' clubs, babysitters, and family-friendly activities through trusted local providers where available.",
          },
        },
        {
          "@type": "Question",
          name: "Do you book restaurant reservations?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. We secure reservations at renowned restaurants, local favorites, private dining venues, and special celebration locations.",
          },
        },
        {
          "@type": "Question",
          name: "Can you arrange private guides?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Private guides can be arranged for sightseeing, museums, cultural experiences, safaris, food tours, shopping, and more.",
          },
        },
        {
          "@type": "Question",
          name: "Do you provide transportation?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. We coordinate private airport transfers, chauffeur services, luxury vehicles, helicopter transfers, yacht transportation, and private aviation.",
          },
        },
        {
          "@type": "Question",
          name: "Can you help plan milestone celebrations?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. We specialize in anniversaries, birthdays, family reunions, retirement trips, championship celebrations, proposals, and other memorable occasions.",
          },
        },
        {
          "@type": "Question",
          name: "Do you offer concierge support during our trip?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Our advisors remain available to assist with itinerary changes, reservations, transportation updates, and unexpected travel needs.",
          },
        },
        {
          "@type": "Question",
          name: "Is this service ideal for professional athletes?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. We understand the scheduling, privacy, and flexibility requirements of professional athletes and their families.",
          },
        },
        {
          "@type": "Question",
          name: "Why should I use a travel concierge?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A travel concierge saves time, reduces stress, provides expert recommendations, manages logistics, and creates personalized experiences that are difficult to arrange independently.",
          },
        },
      ],
    },
  ],
};

/* ── Data: Family destinations (tabbed panel) ────────────────────── */
const familyDestinations = [
  {
    id: "caribbean",
    title: "Caribbean",
    badge: "Caribbean",
    icon: Palmtree,
    image: BucketCaribbean,
    objectPosition: "center 55%",
    window: "Private island resorts, luxury villas, and family-friendly yacht charters",
    desc: "Private island resorts, luxury villas, and family-friendly yacht charters make the Caribbean an easy, relaxed choice for multigenerational getaways.",
    columns: [
      {
        label: "Plan Around:",
        items: [
          "Private Island Resorts",
          "Luxury Villa Stays",
          "Family Yacht Charter Add-Ons",
        ],
      },
    ],
    themeLabel: "Effortless Island Time",
    themeText:
      "Kids' clubs, private beaches, and villa staff let every generation enjoy the Caribbean at their own pace.",
  },
  {
    id: "mediterranean",
    title: "Mediterranean",
    badge: "Mediterranean",
    icon: Waves,
    image: BucketMediterranean,
    objectPosition: "center",
    window: "Coastal cities, island hopping, and villas built for family celebrations",
    desc: "Coastal cities, island hopping, and villas built for family celebrations make the Mediterranean ideal for milestone trips and reunions.",
    columns: [
      {
        label: "Plan Around:",
        items: [
          "Coastal City Stopovers",
          "Island-Hopping Itineraries",
          "Villa-Based Family Reunions",
        ],
      },
    ],
    themeLabel: "One Trip, Many Generations",
    themeText:
      "Private guides and flexible dining reservations make it simple to keep grandparents, parents, and kids happily in step.",
  },
  {
    id: "hawaii",
    title: "Hawaii",
    badge: "Hawaii",
    icon: Palmtree,
    image: HawaiiJetImage,
    objectPosition: "center",
    window: "Oceanfront resorts, wellness retreats, and family adventures",
    desc: "Oceanfront resorts, wellness retreats, and family adventures make Hawaii a favorite destination for multigenerational family trips.",
    columns: [
      {
        label: "Plan Around:",
        items: [
          "Oceanfront Resort Stays",
          "Family-Friendly Adventures",
          "Kids' Club & Childcare Arrangements",
        ],
      },
    ],
    themeLabel: "Built for Every Age",
    themeText:
      "From keiki programs to quiet spa mornings, Hawaii's resorts are designed to give every family member their own kind of vacation.",
  },
  {
    id: "alaska",
    title: "Alaska",
    badge: "Alaska",
    icon: Mountain,
    image: BucketAlaska,
    objectPosition: "center 60%",
    window: "Luxury expedition cruises and breathtaking wilderness",
    desc: "Luxury expedition cruises and breathtaking wilderness experiences make Alaska a memorable, adventure-filled family celebration.",
    columns: [
      {
        label: "Plan Around:",
        items: [
          "Luxury Expedition Cruise Suites",
          "Family Shore Excursions",
          "Milestone Celebration Dinners Onboard",
        ],
      },
    ],
    themeLabel: "Adventure the Whole Family Shares",
    themeText:
      "Cruise concierge coordination handles cabins, excursions, and celebrations so every generation can explore together.",
  },
  {
    id: "french-polynesia",
    title: "French Polynesia",
    badge: "French Polynesia",
    icon: Waves,
    image: PolynesiaJetImage,
    objectPosition: "center",
    window: "Overwater villa resorts surrounded by crystal-clear lagoons",
    desc: "Overwater villa resorts surrounded by crystal-clear lagoons make French Polynesia a dreamy setting for anniversaries, honeymoons, and family escapes.",
    columns: [
      {
        label: "Plan Around:",
        items: [
          "Overwater Villa Resorts",
          "Private Lagoon Excursions",
          "Anniversary & Proposal Planning",
        ],
      },
    ],
    themeLabel: "Celebration-Ready Settings",
    themeText:
      "Private dining on the water and personalized touches make French Polynesia a natural fit for life's biggest moments.",
  },
  {
    id: "safari",
    title: "African Safari",
    badge: "Safari",
    icon: PawPrint,
    image: BucketSafari,
    objectPosition: "center 18%",
    window: "Luxury lodges offering extraordinary family wildlife experiences",
    desc: "Luxury lodges offering extraordinary wildlife experiences make African safari destinations an unforgettable choice for family bucket-list adventures.",
    columns: [
      {
        label: "Plan Around:",
        items: [
          "Family-Friendly Safari Lodges",
          "Private Guided Game Drives",
          "Multi-Country Itineraries",
        ],
      },
    ],
    themeLabel: "Wonder for Every Generation",
    themeText:
      "Private guides tailor the pace of each excursion so children, parents, and grandparents can experience the safari together.",
  },
];

/* ── FAQ Component ─────────────────────────────────────────────── */
function FAQ() {
  const [open, setOpen] = useState(null);

  const faqData = [
    {
      q: "What is family concierge travel?",
      a: "Family concierge travel is a personalized service that manages every aspect of your vacation, including accommodations, transportation, dining, activities, childcare, and special requests.",
    },
    {
      q: "Do you only work with luxury travelers?",
      a: "Our services are designed for travelers seeking personalized planning, premium experiences, and exceptional service, regardless of destination.",
    },
    {
      q: "Can you arrange childcare while we're traveling?",
      a: "Yes. We can coordinate professional childcare services, kids' clubs, babysitters, and family-friendly activities through trusted local providers where available.",
    },
    {
      q: "Do you book restaurant reservations?",
      a: "Absolutely. We secure reservations at renowned restaurants, local favorites, private dining venues, and special celebration locations.",
    },
    {
      q: "Can you arrange private guides?",
      a: "Yes. Private guides can be arranged for sightseeing, museums, cultural experiences, safaris, food tours, shopping, and more.",
    },
    {
      q: "Do you provide transportation?",
      a: "Yes. We coordinate private airport transfers, chauffeur services, luxury vehicles, helicopter transfers, yacht transportation, and private aviation.",
    },
    {
      q: "Can you help plan milestone celebrations?",
      a: "Yes. We specialize in anniversaries, birthdays, family reunions, retirement trips, championship celebrations, proposals, and other memorable occasions.",
    },
    {
      q: "Do you offer concierge support during our trip?",
      a: "Yes. Our advisors remain available to assist with itinerary changes, reservations, transportation updates, and unexpected travel needs.",
    },
    {
      q: "Is this service ideal for professional athletes?",
      a: "Absolutely. We understand the scheduling, privacy, and flexibility requirements of professional athletes and their families.",
    },
    {
      q: "Why should I use a travel concierge?",
      a: "A travel concierge saves time, reduces stress, provides expert recommendations, manages logistics, and creates personalized experiences that are difficult to arrange independently.",
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
const FamilyConciergeTravelServices = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [readMore, setReadMore] = useState(false);
  const [activeDestination, setActiveDestination] = useState("caribbean");
  const [hovered, setHovered] = useState(null);

  const currentDestination =
    familyDestinations.find((d) => d.id === activeDestination) ||
    familyDestinations[0];
  const ActiveDestinationIcon = currentDestination.icon;

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
          Family Concierge Travel Services | Luxury Family Travel Planning
        </title>
        <meta name="title" content="Family Concierge Travel Services" />
        <meta
          name="description"
          content="Experience stress-free luxury family vacations with personalized concierge travel services. From restaurant reservations and private guides to childcare coordination, VIP transportation, event tickets, and customized itineraries, every detail is expertly managed."
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
            Family Concierge <br /> Travel Services
          </h1>

          <p>
            Luxury family travel should be effortless. Instead of spending
            weeks researching destinations, making reservations, coordinating
            transportation, or managing countless travel details, imagine
            having a dedicated travel expert who handles everything for you.
          </p>

          <p>
            At Trips &amp; Ships Luxury Travel, our Family Concierge Travel
            Services are designed for busy families, professional athletes,
            executives, entrepreneurs, and multigenerational travelers who
            value personalized service and exceptional experiences.
          </p>

          {readMore && (
            <>
              <p>
                From the moment you begin planning until you return home, we
                coordinate every aspect of your journey — allowing you to
                focus on making memories while we take care of the logistics.
              </p>

              <p>
                Today's families often have demanding schedules filled with
                school, sports, work, and other commitments. Our concierge
                services eliminate the stress of planning by handling
                research, reservations, scheduling, confirmations, travel
                documents, destination recommendations, daily itineraries,
                and last-minute adjustments.
              </p>

              <p>
                With more than four decades of luxury travel expertise, Angela
                Hughes and the team at Trips &amp; Ships Luxury Travel believe
                exceptional family vacations begin with exceptional planning.
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

      {/* ── WHAT IS FAMILY CONCIERGE TRAVEL? ─────────────────────────── */}
      <section className="adg-c-section adg-c-bg-white" id="adg-c-what-is-family-concierge-travel">
        <div className="adg-c-container">
          <div className="adg-c-section-header">
            <h2 className="adg-c-h2">What Is Family Concierge Travel?</h2>
            <div className="adg-c-accent-line"></div>
            <p className="Asc-section-intro">
              Family concierge travel goes beyond booking flights and hotels.
              It is a personalized travel management service that coordinates
              every detail of your vacation before, during, and after your
              trip.
            </p>
          </div>

          <div className="adg-c-overview-layout">
            <div className="adg-c-overview-icons">
              {[
                "Customized itineraries",
                "Luxury accommodations",
                "Private transportation",
                "Restaurant reservations",
                "Private guides",
                "VIP experiences",
                "Childcare arrangements",
                "Activity planning",
                "Special celebrations",
                "Ongoing travel support",
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
                    Every vacation is tailored specifically to your family's
                    lifestyle, interests, and travel preferences — so you
                    enjoy the trip while we manage the details.
                  </p>
                </div>
              </div>

              <div className="adg-c-overview-image-wrap" style={{height: '500px'}}>
                <img
                  src={DifferentApproachImage}
                  alt="Family arriving at a luxury resort with personalized concierge service"
                  className="adg-c-overview-img"
                />
                <div className="adg-c-overview-img-overlay">
                  <span className="adg-c-overview-img-label">
                    Designed Around Your Family
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BUSY FAMILIES & PERSONALIZED VACATION PLANNING */}
      <section
        className="Ejsc-ent-section"
        id="Ejsc-busy-families-personalized-planning"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="Ejsc-container">
          <div className="Ejsc-section-header">
            <h2 className="Ejsc-section-title">Designed for Busy Families</h2>
            <div className="Asc-accent-line"></div>
            <p className="Ejsc-section-subtitle">
              No two families travel the same way. We begin by understanding
              your family's unique travel style, then handle every detail
              from research to reservations.
            </p>
          </div>

          <div className="Ejsc-ent-grid">
            {/* Designed for Busy Families Card */}
            <div className="Ejsc-ent-card Ejsc-explora-card">
              <div className="Ejsc-card-header">
                <div className="Ejsc-card-icon-wrap">
                  <Clock size={24} className="Ejsc-card-icon" />
                </div>
                <h3 className="Ejsc-card-title">We Handle the Details</h3>
              </div>

              <p className="Ejsc-card-intro">
                Today's families often have demanding schedules filled with
                school, sports, work, and other commitments. Our concierge
                services eliminate the stress of planning.
              </p>

              <ul className="Ejsc-feature-list">
                {[
                  "Research",
                  "Reservations",
                  "Scheduling",
                  "Confirmations",
                  "Travel documents",
                  "Last-minute adjustments",
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
                <p>You enjoy the vacation while we manage the details.</p>
              </div>
            </div>

            {/* Personalized Vacation Planning Card */}
            <div className="Ejsc-ent-card Ejsc-seabourn-card">
              <div className="Ejsc-card-header">
                <div className="Ejsc-card-icon-wrap">
                  <Compass size={24} className="Ejsc-card-icon" />
                </div>
                <h3 className="Ejsc-card-title">
                  Personalized Vacation Planning
                </h3>
              </div>

              <p className="Ejsc-card-intro">
                We begin by understanding your preferred destinations,
                children's ages, activity levels, and travel preferences.
              </p>

              <ul className="Ejsc-feature-list">
                {[
                  "Destinations & children's ages",
                  "Dining preferences & accommodation style",
                  "Budget & travel dates",
                  "Special requests",
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
                  Every recommendation is customized around your family's
                  unique travel style.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── LUXURY ACCOMMODATIONS ─────────────────────────────────────── */}
      <section className="wnf-section wnf-bg-white" id="luxury-accommodations">
        <div className="wnf-container">
          <div className="wnf-section-header">
            <h2 className="wnf-h2">Luxury Accommodations</h2>
            <div className="wnf-accent-line"></div>
          </div>

          <div className="wnf-split">
            <div className="la-image-column">
              <div className="la-image-wrap">
                <img
                  src={SuiteImage}
                  alt="Luxury family villa accommodation"
                  className="la-image"
                />
                <div className="la-image-overlay"></div>
              </div>
            </div>

            <div className="wnf-content-column">
              <div className="wnf-block">
                <p className="wnf-lead-text">
                  We carefully match each family with accommodations that
                  provide the perfect balance of comfort, privacy, and
                  convenience.
                </p>

                <ul className="wnf-feature-list">
                  {[
                    "Luxury resorts",
                    "Private villas",
                    "Oceanfront residences",
                    "Luxury cruise suites",
                    "Boutique hotels",
                    "Safari lodges, ski chalets & private island retreats",
                  ].map((feature, i) => (
                    <li key={i} className="wnf-feature-item">
                      <div className="wnf-icon-wrapper">
                        <Home size={14} />
                      </div>
                      <span className="wnf-feature-text">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="wnf-footer-note">
                <p className="wnf-highlight-text">
                  Whether you're traveling with young children or multiple
                  generations, we'll recommend accommodations that best suit
                  your needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RESTAURANT RESERVATIONS & PRIVATE GUIDES */}
      <section className="azs-suites-section" id="azs-dining-private-guides">
        <div className="azs-container">
          <div className="azs-section-header">
            <h2 className="azs-section-title">
              Restaurant Reservations &amp; <br /> Private Guides
            </h2>
            <div className="azs-section-accent"></div>
            <p className="azs-section-subtitle">
              Dining and discovery are often the highlights of any vacation —
              every reservation and experience is handled with care.
            </p>
          </div>

          <div className="azs-suites-grid">
            {/* Restaurant Reservations Card */}
            <div className="azs-suites-card azs-seabourn-suites">
              <div className="azs-suites-image-wrap">
                <img
                  src={DiningImage}
                  alt="Private dining table set for a family celebration"
                  className="azs-suites-img"
                />
                <span className="azs-suites-image-badge">
                  Reserved Before You Arrive
                </span>
              </div>

              <div className="azs-suites-content">
                <div className="azs-suites-card-header">
                  <div className="azs-suites-icon-circle">
                    <Utensils size={24} className="azs-suites-icon" />
                  </div>
                  <h3 className="azs-suites-title">Restaurant Reservations</h3>
                </div>

                <p className="azs-suites-intro">
                  Dining is often one of the highlights of any vacation. Our
                  concierge team secures reservations that fit your family's
                  taste.
                </p>

                <div className="azs-suites-body">
                  <h4 className="azs-suites-group-title">
                    Reservations include:
                  </h4>

                  <ul className="azs-suites-list">
                    {[
                      "Michelin-star restaurants",
                      "Family-friendly dining",
                      "Local hidden gems",
                      "Private chef experiences",
                      "Winery & celebrity chef dining",
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
                      We also coordinate dietary requirements, celebration
                      dinners, and private dining experiences.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Private Guides Card */}
            <div className="azs-suites-card azs-azamara-suites">
              <div className="azs-suites-image-wrap">
                <img
                  src={GuidesImage}
                  alt="Private guide leading a family cultural tour"
                  className="azs-suites-img"
                />
                <span className="azs-suites-image-badge">
                  Tailored to Your Pace
                </span>
              </div>

              <div className="azs-suites-content">
                <div className="azs-suites-card-header">
                  <div className="azs-suites-icon-circle">
                    <Camera size={24} className="azs-suites-icon" />
                  </div>
                  <h3 className="azs-suites-title">
                    Private Guides &amp; Exclusive Experiences
                  </h3>
                </div>

                <p className="azs-suites-intro">
                  Discover destinations through personalized experiences
                  rather than crowded group tours.
                </p>

                <div className="azs-suites-body">
                  <h4 className="azs-suites-group-title">
                    Experiences may include:
                  </h4>

                  <ul className="azs-suites-list">
                    {[
                      "Cultural walking tours & museum guides",
                      "Wildlife safaris & historical excursions",
                      "Culinary experiences & wine tastings",
                      "Photography tours & adventure activities",
                      "Shopping guides",
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
                      Your private guide tailors each experience to your
                      family's interests and pace.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CHILDCARE & FAMILY SUPPORT ────────────────────────────────── */}
      <section
        className="dmg-info-section dmg-bg-white"
        id="childcare-family-support"
      >
        <div className="dmg-info-container">
          <div className="dmg-info-grid">
            <div className="dmg-info-content">
              <h2 className="dmg-info-title">Childcare &amp; Family Support</h2>
              <div className="dmg-info-accent"></div>

              <p className="dmg-info-lead">
                Traveling with young children becomes much easier with
                professional assistance. Parents enjoy time to relax while
                children experience age-appropriate activities in a safe
                environment.
              </p>

              <div className="dmg-info-features dmg-info-features-scrollable">
                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Baby size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Certified Babysitters &amp; Kids' Clubs
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Trusted childcare arranged through vetted local
                      providers.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Sparkles size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Children's Activity Planning
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Family-friendly excursions and equipment rentals
                      arranged around your schedule.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <PartyPopper size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Birthday Celebrations
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Special moments marked with custom cakes and
                      personalized touches.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Special Requests
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Every family's needs are handled with care and
                      attention.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="dmg-info-media">
              <div className="dmg-media-wrapper">
                <img
                  src={ChildcareImage}
                  alt="Children enjoying a family-friendly resort activity"
                  className="dmg-media-img"
                  style={{ height: "650px" }}
                />
                <div className="dmg-media-overlay"></div>

                <div className="dmg-media-badge">
                  <span>Every Age, Looked After</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── VIP TRANSPORTATION ────────────────────────────────────────── */}
      <section
        className="ugt-components-section"
        id="vip-transportation"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="ugt-components-container">
          <div className="ugt-components-header">
            <h2 className="ugt-components-title">VIP Transportation</h2>
            <div className="adg-c-accent-line"></div>
          </div>

          <div className="ugt-components-list">
            <div className="ugt-component-row">
              <div className="ugt-component-image-wrapper">
                <div className="ugt-component-image-container">
                  <img
                    src={TransportationImage}
                    alt="Chauffeured luxury vehicle for a family transfer"
                    className="ugt-component-image"
                  />
                </div>
              </div>

              <div className="ugt-component-content">
                <p className="ugt-component-text">
                  Seamless transportation makes every journey more enjoyable.
                  Every transfer is planned around your schedule for maximum
                  convenience.
                </p>

                <div className="ugt-questions-box">
                  <span className="ugt-questions-title">
                    We coordinate:
                  </span>

                  <ul className="ugt-questions-list">
                    {[
                      "Private Airport Transfers",
                      "Chauffeur Services & Luxury SUVs",
                      "Executive Sedans & Private Drivers",
                      "Helicopter Transfers",
                      "Yacht Transfers & Private Aviation",
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
                  Every transfer is planned around your family's schedule for
                  maximum convenience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── EVENT TICKETS, CELEBRATIONS & EXCLUSIVE ACCESS ───────────── */}
      <section
        className="Leg-section"
        style={{ backgroundColor: "var(--bg-white)" }}
      >
        <div className="Leg-container">
          <div className="Leg-header">
            <h2 className="Leg-title">
              Event Tickets &amp; Life's Special Moments
            </h2>
            <div className="adg-c-accent-line"></div>
            <p className="Leg-subtitle">
              Looking to make your vacation even more memorable? Vacations
              often become the setting for life's most meaningful
              celebrations.
            </p>
          </div>

          <div className="Leg-grid">
            {[
              {
                id: 1,
                accent: "gold",
                icon: Ticket,
                title: "Event Tickets & Exclusive Access",
                description:
                  "Sporting events, concerts, theatre performances, and theme parks — with premium seating whenever possible.",
                pills: ["Sporting Events", "Concerts", "Theme Parks"],
                highlight: "Exclusive access, arranged in advance.",
              },
              {
                id: 2,
                accent: "navy",
                icon: PartyPopper,
                title: "Celebrating Life's Special Moments",
                description:
                  "Anniversary surprises, birthday celebrations, family reunions, and graduation trips planned with care.",
                pills: ["Anniversaries", "Birthdays", "Reunions"],
                highlight: "From custom cakes to private venues.",
              },
              {
                id: 3,
                accent: "teal",
                icon: Gem,
                title: "Proposal & Milestone Planning",
                description:
                  "Championship celebrations, retirement vacations, and proposal planning down to the smallest detail.",
                pills: ["Proposals", "Championships", "Milestones"],
                highlight: "Every milestone marked in style.",
              },
              {
                id: 4,
                accent: "gold",
                icon: HeartHandshake,
                title: "Personalized Gifts & Touches",
                description:
                  "Custom cakes, private venues, and personalized gifts help make every celebration unforgettable.",
                pills: ["Custom Cakes", "Private Venues", "Personal Gifts"],
                highlight: "Details that make moments unforgettable.",
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

      {/* ── LUXURY CRUISES WITH CONCIERGE SERVICE ─────────────────────── */}
      <section
        className="dmg-info-section dmg-bg-white"
        id="luxury-cruises-concierge-service"
      >
        <div className="dmg-info-container">
          <div className="dmg-info-grid">
            {/* Left Side Image */}
            <div className="dmg-info-media">
              <div className="dmg-media-wrapper">
                <img
                  src={CruiseImage}
                  alt="Luxury cruise suite arranged through concierge service"
                  className="dmg-media-img"
                  style={{ height: "80vh", objectPosition: 'right'}}
                />
                <div className="dmg-media-overlay"></div>

                <div className="dmg-media-badge">
                  <span>Coordinated Before You Board</span>
                </div>
              </div>
            </div>

            {/* Right Side Content */}
            <div className="dmg-info-content">
              <h2 className="dmg-info-title">
                Luxury Cruises With Concierge Service
              </h2>
              <div className="dmg-info-accent"></div>

              <p className="dmg-info-lead">
                Cruising becomes even more enjoyable with personalized
                planning. Everything is coordinated before you ever board the
                ship.
              </p>

              <div className="dmg-info-features dmg-info-features-scrollable">
                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Anchor size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Cruise Line &amp; Suite Selection
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Selecting the right cruise line and the ideal suite for
                      your family.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Ship size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Shore Excursions &amp; Specialty Dining
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Shore excursion recommendations and specialty dining
                      reservations.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Home size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Pre &amp; Post-Cruise Hotel Stays
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Hotel stays and airport transfers coordinated before and
                      after your cruise.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Award size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Spa Appointments &amp; Documentation
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Spa appointments and travel documentation handled in
                      advance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SUPPORT WHILE YOU TRAVEL ──────────────────────────────────── */}
      <section className="ugt-advantage-section" id="support-while-you-travel">
        <div className="ugt-advantage-container">
          <div className="ugt-advantage-header">
            <span className="ugt-advantage-eyebrow">
              Family Concierge Travel Services
            </span>

            <h2 className="ugt-advantage-title">Support While You Travel</h2>

            <div className="Asc-accent-line"></div>

            <p className="ugt-advantage-intro">
              Our service doesn't end when your vacation begins. Having a
              trusted advisor available provides peace of mind wherever you
              travel.
            </p>
          </div>

          <div className="ugt-advantage-grid">
            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <CalendarClock size={28} strokeWidth={1.5} />
              </div>

              <h4 className="ugt-card-title">Schedule Changes</h4>

              <p className="ugt-card-desc">
                Itineraries adjusted quickly whenever your family's plans
                shift.
              </p>
            </div>

            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <Utensils size={28} strokeWidth={1.5} />
              </div>

              <h4 className="ugt-card-title">Additional Reservations</h4>

              <p className="ugt-card-desc">
                New dining and activity reservations arranged on the spot.
              </p>
            </div>

            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <Car size={28} strokeWidth={1.5} />
              </div>

              <h4 className="ugt-card-title">Transportation Updates</h4>

              <p className="ugt-card-desc">
                Transfers rebooked and coordinated as your schedule changes.
              </p>
            </div>

            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <Map size={28} strokeWidth={1.5} />
              </div>

              <h4 className="ugt-card-title">Excursion Adjustments</h4>

              <p className="ugt-card-desc">
                Activities revised smoothly to fit your family's energy each
                day.
              </p>
            </div>

            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <ShieldCheck size={28} strokeWidth={1.5} />
              </div>

              <h4 className="ugt-card-title">Emergency Assistance</h4>

              <p className="ugt-card-desc">
                Trusted support available if the unexpected happens while you
                travel.
              </p>
            </div>

            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <Headset size={28} strokeWidth={1.5} />
              </div>

              <h4 className="ugt-card-title">Travel Questions</h4>

              <p className="ugt-card-desc">
                Dining recommendations and special requests answered
                throughout your trip.
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
            Having a trusted advisor available provides peace of mind wherever
            you travel.
          </p>
        </div>
      </section>

      {/* ── PROFESSIONAL ATHLETES & HIGH-PROFILE FAMILIES ─────────────── */}
      <section className="adg-section" id="adg-athletes-high-profile-families">
        <div className="adg-container">
          <div className="adg-section-header" style={{ marginBottom: "60px" }}>
            <h2 className="adg-h2">
              Perfect for Professional Athletes &amp; High-Profile Families
            </h2>
            <div className="adg-accent-line"></div>
          </div>

          <div
            className="adg-split-layout"
            style={{ alignItems: "flex-start" }}
          >
            <div className="adg-content-card-side">
              <img
                src={ConciergeImage}
                alt="Luxury family concierge travel planning experience"
                className="adg-side-image"
                style={{ height: "47vh"}}
              />

              <div className="adg-info-card">
                <div className="adg-card-meta">
                  <Award size={28} />
                  <span className="adg-meta-label">
                    Discretion & Flexibility
                  </span>
                </div>

                <p className="adg-card-lead">
                  Our concierge services are especially valuable for families
                  with demanding schedules and unique travel needs. We
                  understand the importance of flexibility, discretion,
                  privacy, and personalized attention.
                </p>

   

              </div>
            </div>

            <div className="adg-list-side">
              {[
                {
                  title: "Professional Athletes & Coaches",
                  icon: <Award size={20} />,
                },
                {
                  title: "Executives & Entrepreneurs",
                  icon: <Users size={20} />,
                },
                {
                  title: "Celebrities & Public Figures",
                  icon: <ShieldCheck size={20} />,
                },
                {
                  title: "Multigenerational Families",
                  icon: <HeartHandshake size={20} />,
                },
                {
                  title: "Championship Celebrations",
                  icon: <Gem size={20} />,
                },
                {
                  title: "Off-Season Family Travel",
                  icon: <CalendarClock size={20} />,
                },
                {
                  title: "Privacy & Security Planning",
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

      {/* ── FAMILY DESTINATIONS WE LOVE (TABBED) ──────────────────────── */}
      <section
        className="luc-destinations-section"
        id="luc-family-destinations"
      >
        <div className="luc-destinations-container">
          <div className="luc-destinations-header">
            <h2 className="luc-destinations-title">
              Family Destinations We Love
            </h2>

            <div className="adg-c-accent-line"></div>

            <p className="luc-destinations-intro">
              Every family travels differently. These destinations are
              favorites for multigenerational trips, milestone celebrations,
              and everything in between.
            </p>
          </div>

          <div className="luc-dest-layout">
            <nav className="luc-dest-nav">
              {familyDestinations.map((item) => {
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
                  style={{ objectPosition: currentDestination.objectPosition || "center" }}
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

      {/* ── WHY CHOOSE TRIPS & SHIPS LUXURY TRAVEL? ───────────────────── */}
      <section
        className="Avr-planning-section"
        id="Asc-why-choose-trips-and-ships"
        style={{ backgroundColor: "var(--bg-white)" }}
      >
        <div className="Asc-container">
          {/* HEADING */}
          <div className="Avr-planning-heading">
            <span className="Avr-planning-eyebrow">
              Four Decades of Luxury Travel Expertise
            </span>

            <h2 className="Avr-planning-title">
              Why Choose Trips &amp; Ships Luxury Travel?
            </h2>

            <div className="Avr-planning-divider"></div>
          </div>

          {/* TWO-PANEL GRID */}
          <div className="Avr-planning-grid">
            {/* LEFT PANEL */}
            <div className="Avr-planning-left">
              <div className="Avr-planning-left-deco">&ldquo;</div>

              <h3 className="Avr-planning-left-title">
                Exceptional Vacations Begin With Exceptional Planning
              </h3>

              <p className="Avr-planning-left-body">
                With more than four decades of luxury travel expertise, we
                believe exceptional vacations begin with exceptional
                planning. We handle every detail so you can focus on enjoying
                your time together.
              </p>

              <div className="Avr-planning-alert">
                <ShieldCheck size={18} className="Avr-planning-alert-icon" />

                <p className="Avr-planning-alert-text">
                  Personalized consultations and family travel expertise mean
                  every itinerary is built around you.
                </p>
              </div>
            </div>

            {/* RIGHT PANEL */}
            <div className="Avr-planning-right">
              <p className="Avr-planning-right-intro">
                Our advisors provide:
              </p>

              <div className="Avr-planning-benefits-grid">
                {[
                  {
                    icon: <Compass size={18} />,
                    label: "Personalized travel consultations",
                  },
                  {
                    icon: <MapPin size={18} />,
                    label: "Worldwide destination expertise",
                  },
                  {
                    icon: <Ship size={18} />,
                    label: "Luxury hotel & cruise recommendations",
                  },
                  {
                    icon: <Sparkles size={18} />,
                    label: "Exclusive travel experiences",
                  },
                  {
                    icon: <Car size={18} />,
                    label: "Private transportation & concierge services",
                  },
                  {
                    icon: <Users size={18} />,
                    label: "Family travel expertise",
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
                We handle every detail so you can focus on enjoying your time
                together.
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
                      icon: <HeartHandshake size={16} />,
                      label:
                        "Specialist in family concierge travel for high-profile clients",
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
                  help busy families, professional athletes, and high-profile
                  households plan family concierge travel — from the first
                  reservation to the moment you return home.
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
              Everything you need to know about planning family concierge
              luxury travel.
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
            alt="Family relaxing together on a luxury vacation at sunset"
            className="Asc-help-bg-img"
          />
          <div className="Asc-help-overlay"></div>
        </div>

        <div className="Asc-container">
          <div className="Asc-help-card">
            <div className="Asc-help-content">
              <div className="Asc-help-header">
                <span className="Asc-help-eyebrow">
                  Personalized Luxury Family Travel Planning
                </span>
                <h2 className="Asc-help-h2">
                  Let Us Take Care of <br /> Every Detail
                </h2>
                <div className="Asc-help-accent"></div>
              </div>

              <div className="Asc-help-grid">
                <div className="Asc-help-info">
                  <p className="Asc-help-intro">
                    The best family vacations aren't remembered for perfectly
                    organized itineraries — they're remembered for the
                    moments shared together. Watching a sunset from a private
                    villa, celebrating a birthday in a Michelin-starred
                    restaurant, or simply relaxing while someone else handles
                    every detail.
                  </p>

                  <p className="Asc-help-intro">
                    At Trips &amp; Ships Luxury Travel, our Family Concierge
                    Travel Services are designed to make luxury travel
                    effortless, from the initial planning stages to the
                    moment you return home.
                  </p>

                  <p className="Asc-help-intro">
                    Whether you're planning a family getaway, a
                    multigenerational vacation, a luxury cruise, or a
                    once-in-a-lifetime celebration, our team is dedicated to
                    creating seamless travel experiences that exceed
                    expectations.
                  </p>

                  <div className="Asc-help-btn-container">
                    <Link
                      to="/contact"
                      className="Asc-help-cta-btn"
                      style={{ textDecoration: "none" }}
                    >
                      Start Planning Your Family Getaway
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
                      "Customized family itineraries",
                      "Luxury accommodation matching",
                      "Restaurant reservations & private guides",
                      "Childcare & VIP transportation coordination",
                      "Milestone celebration planning",
                      "Ongoing support throughout your trip",
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
                    busy families, professional athletes, and high-profile
                    households create highly personalized family concierge
                    travel experiences worldwide.
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

export default FamilyConciergeTravelServices;