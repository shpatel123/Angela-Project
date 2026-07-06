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
  Ship,
  Waves,
  Heart,
  Utensils,
  Coffee,
  BookOpen,
  LifeBuoy,
  MapPinned,
  Car,
  Plane,
  BadgePercent,
  Home,
  ShieldCheck,
} from "lucide-react";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela.jpeg";

import HeroImage1 from "../../assets/ExploraCruiseCost/Asia-Ship-a-Long-Bay-Vietnam.webp";
import HeroImage2 from "../../assets/ExploraJourneysCruises/explora-journeys-red-sea-luxury-cruise-oman.webp";
import HeroImage4 from "../../assets/ExploraCruiseCost/ExploraCruiseCost3.webp";
import ExploraPool from "../../assets/WhichExploraShipChoose/explora-journeys-atoll-pool-luxury-cruise-deck.jpg";
import ExploraDetination3 from "../../assets/WhichExploraShipChoose/EXPLORA-III-PANAMA-CANAL.jpg";
import ExploraDetination5 from "../../assets/WhichExploraShipChoose/mediterranean-hidden-cove-luxury-cruise-summer-2025.jpg";
import ExploraDetination6 from "../../assets/WhichExploraShipChoose/allinn-estonia-old-town-summer-travel-aerial.jpg";
import LuxuryOceanfrontSuites from "../../assets/WhichExploraShipChoose/Regent-Seven-Seas-Cruises.webp";
import ExploraShip from "../../assets/WhichExploraShipChoose/ExploraCruise3.webp";

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
        "https://tripsandships.com/planning-your-first-explora-journey/#webpage",
      name: "Planning Your First Explora Journey | A Complete First-Time Cruiser Guide",
      url: "https://tripsandships.com/planning-your-first-explora-journey",
      description:
        "Planning your first Explora Journeys cruise? Learn how to choose the right ship, itinerary, suite, dining experiences, excursions, and booking strategy for a seamless luxury cruise vacation.",
    },
    {
      "@type": "Article",
      "@id":
        "https://tripsandships.com/planning-your-first-explora-journey/#article",
      headline: "Planning Your First Explora Journey",
      description:
        "A comprehensive step-by-step planning guide for first-time guests sailing with Explora Journeys, covering destinations, suite options, fare inclusions, dining, and professional advisory strategies.",
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
        "https://tripsandships.com/planning-your-first-explora-journey/#breadcrumb",
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
          name: "First-Time Planner Guide",
          item: "https://tripsandships.com/planning-your-first-explora-journey",
        },
      ],
    },
    {
      "@type": "Cruise",
      "@id":
        "https://tripsandships.com/planning-your-first-explora-journey/#cruise",
      name: "Explora Journeys Ocean Cruises",
      description:
        "Contemporary luxury ocean cruise vacations featuring all-suite accommodations and flexible lifestyle programs.",
      provider: {
        "@type": "Organization",
        name: "Explora Journeys",
      },
    },
    {
      "@type": "TouristTrip",
      "@id":
        "https://tripsandships.com/planning-your-first-explora-journey/#touristtrip",
      name: "First-Time Explora Journey Cruise Trip",
      description:
        "A luxury cruise voyage designed to connect guests with destinations, culinary experiences, and wellness.",
      provider: {
        "@type": "Organization",
        name: "Explora Journeys",
      },
    },
    {
      "@type": "Service",
      "@id":
        "https://tripsandships.com/planning-your-first-explora-journey/#service",
      serviceType: "Luxury Cruise Vacation Planning & Booking Support",
      provider: {
        "@type": "TravelAgency",
        name: "Trips & Ships Luxury Travel",
      },
      areaServed: "Worldwide",
      description:
        "Comprehensive travel booking, cabin selection assistance, transfers, pre/post hotel bookings, and excursion coordination.",
    },
    {
      "@type": "HowTo",
      "@id":
        "https://tripsandships.com/planning-your-first-explora-journey/#howto",
      name: "How to Plan Your First Explora Journeys Cruise",
      description:
        "Follow these steps to research, customize, and book a luxury cruise voyage with Explora Journeys.",
      step: [
        {
          "@type": "HowToStep",
          position: 1,
          name: "Understand the Brand Offerings",
          text: "Verify that Explora's contemporary European styling, all-suite residences, and relaxed pacing match your vacation expectations.",
        },
        {
          "@type": "HowToStep",
          position: 2,
          name: "Select your Destination",
          text: "Choose from key regions including the Mediterranean, Caribbean, Northern Europe, or Transatlantic voyages.",
        },
        {
          "@type": "HowToStep",
          position: 3,
          name: "Select Cruise Duration",
          text: "Pick from a shorter 7-night introduction, balanced 10-14 night itineraries, or extended ocean voyages.",
        },
        {
          "@type": "HowToStep",
          position: 4,
          name: "Choose a Suite Category",
          text: "Determine your space preferences and select an Ocean Terrace Suite, Ocean Penthouse, or a top-tier Ocean Residence.",
        },
        {
          "@type": "HowToStep",
          position: 5,
          name: "Book early for best values",
          text: "Coordinate your booking 6-12 months ahead for optimal cabin location, travel dates, and exclusive promotional inclusions.",
        },
      ],
    },
    {
      "@type": "ItemList",
      "@id":
        "https://tripsandships.com/planning-your-first-explora-journey/#itemlist",
      name: "Crucial First-Time Explora Planning Steps",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Step 1: Understand Explora Journeys Brand",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Step 2: Choose the Right Destination",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Step 3: Decide Cruise Length",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Step 4: Choose the Ideal Suite",
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Step 5: Book Early",
        },
        {
          "@type": "ListItem",
          position: 6,
          name: "Step 6: Understand Inclusions",
        },
        {
          "@type": "ListItem",
          position: 7,
          name: "Step 7: Plan Your Dining Experience",
        },
        {
          "@type": "ListItem",
          position: 8,
          name: "Step 8: Explore Shore Experiences",
        },
        {
          "@type": "ListItem",
          position: 9,
          name: "Step 9: Pack Smart",
        },
        {
          "@type": "ListItem",
          position: 10,
          name: "Step 10: Slow Down",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id":
        "https://tripsandships.com/planning-your-first-explora-journey/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Is Explora Journeys good for first-time luxury cruisers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Explora's relaxed atmosphere, spacious suites, and personalized service make it an excellent introduction to luxury cruising.",
          },
        },
        {
          "@type": "Question",
          name: "How far in advance should I book?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Booking six to twelve months in advance generally provides the best choice of suites and itineraries.",
          },
        },
        {
          "@type": "Question",
          name: "Which itinerary is best for a first cruise?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Mediterranean and Caribbean voyages are among the most popular options for first-time guests.",
          },
        },
        {
          "@type": "Question",
          name: "Are all accommodations suites?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Every guest enjoys an oceanfront suite with a private terrace.",
          },
        },
        {
          "@type": "Question",
          name: "Is there a formal dress code?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. The atmosphere is elegant yet relaxed, with smart casual attire suitable for most evenings.",
          },
        },
        {
          "@type": "Question",
          name: "Should I book specialty dining?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "If dining is an important part of your vacation, consider reserving popular specialty experiences before sailing when available.",
          },
        },
        {
          "@type": "Question",
          name: "Are shore excursions required?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Guests may book organized excursions or explore destinations independently.",
          },
        },
        {
          "@type": "Question",
          name: "Is Wi-Fi included?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Wi-Fi is included, allowing guests to stay connected throughout their voyage.",
          },
        },
        {
          "@type": "Question",
          name: "What should I pack?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Comfortable resort wear, walking shoes, swimwear, smart casual evening clothing, and lightweight layers are suitable for most itineraries.",
          },
        },
        {
          "@type": "Question",
          name: "Is using a travel advisor recommended?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. A luxury travel advisor can simplify the planning process, recommend the best itinerary, and help maximize the value of your vacation.",
          },
        },
        {
          "@type": "Question",
          name: "Can I pre-book dining and wellness services before boarding?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Once you have a confirmed booking, you can access the online guest portal to reserve specialty dining (such as Anthology), spa treatments, and organized shore excursions (Destination Experiences) prior to your sailing date.",
          },
        },
        {
          "@type": "Question",
          name: "What is the cancellation policy for Explora Journeys?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Explora Journeys offers a tiered cancellation policy based on how far in advance of the departure date you cancel. Working with a luxury travel advisor is highly recommended to understand the exact terms, deposit schedules, and to secure comprehensive travel insurance.",
          },
        },
        {
          "@type": "Question",
          name: "Does Explora Journeys offer airport transfer services?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, Explora Journeys provides optional luxury transfer services between the ship and local airports or hotels. These can be pre-arranged through the cruise line or coordinated by your travel advisor for a seamless arrival.",
          },
        },
        {
          "@type": "Question",
          name: "How do I manage my onboard account and payments?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Upon boarding, you will register a credit card to your suite. Since most amenities (gratuities, Wi-Fi, fine wines, and dining) are included, your onboard account will only reflect optional charges like spa services, Anthology dining, premium liquors, or shore excursions.",
          },
        },
        {
          "@type": "Question",
          name: "Is travel insurance required when booking an Explora cruise?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "While not strictly mandatory, purchasing comprehensive travel insurance is strongly advised. This protects your financial investment against unforeseen trip cancellations, medical emergencies, travel delays, or lost luggage.",
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
      q: "Is Explora Journeys good for first-time luxury cruisers?",
      a: "Yes. Explora's relaxed atmosphere, spacious suites, and personalized service make it an excellent introduction to luxury cruising.",
    },
    {
      q: "How far in advance should I book?",
      a: "Booking six to twelve months in advance generally provides the best choice of suites and itineraries.",
    },
    {
      q: "Which itinerary is best for a first cruise?",
      a: "Mediterranean and Caribbean voyages are among the most popular options for first-time guests.",
    },
    {
      q: "Are all accommodations suites?",
      a: "Yes. Every guest enjoys an oceanfront suite with a private terrace.",
    },
    {
      q: "Is there a formal dress code?",
      a: "No. The atmosphere is elegant yet relaxed, with smart casual attire suitable for most evenings.",
    },
    {
      q: "Should I book specialty dining?",
      a: "If dining is an important part of your vacation, consider reserving popular specialty experiences before sailing when available.",
    },
    {
      q: "Are shore excursions required?",
      a: "No. Guests may book organized excursions or explore destinations independently.",
    },
    {
      q: "Is Wi-Fi included?",
      a: "Yes. Wi-Fi is included, allowing guests to stay connected throughout their voyage.",
    },
    {
      q: "What should I pack?",
      a: "Comfortable resort wear, walking shoes, swimwear, smart casual evening clothing, and lightweight layers are suitable for most itineraries.",
    },
    {
      q: "Is using a travel advisor recommended?",
      a: "Yes. A luxury travel advisor can simplify the planning process, recommend the best itinerary, and help maximize the value of your vacation.",
    },
    {
      q: "Can I pre-book dining and wellness services before boarding?",
      a: "Yes. Once you have a confirmed booking, you can access the online guest portal to reserve specialty dining (such as Anthology), spa treatments, and organized shore excursions (Destination Experiences) prior to your sailing date.",
    },
    {
      q: "What is the cancellation policy for Explora Journeys?",
      a: "Explora Journeys offers a tiered cancellation policy based on how far in advance of the departure date you cancel. Working with a luxury travel advisor is highly recommended to understand the exact terms, deposit schedules, and to secure comprehensive travel insurance.",
    },
    {
      q: "Does Explora Journeys offer airport transfer services?",
      a: "Yes, Explora Journeys provides optional luxury transfer services between the ship and local airports or hotels. These can be pre-arranged through the cruise line or coordinated by your travel advisor for a seamless arrival.",
    },
    {
      q: "How do I manage my onboard account and payments?",
      a: "Upon boarding, you will register a credit card to your suite. Since most amenities (gratuities, Wi-Fi, fine wines, and dining) are included, your onboard account will only reflect optional charges like spa services, Anthology dining, premium liquors, or shore excursions.",
    },
    {
      q: "Is travel insurance required when booking an Explora cruise?",
      a: "While not strictly mandatory, purchasing comprehensive travel insurance is strongly advised. This protects your financial investment against unforeseen trip cancellations, medical emergencies, travel delays, or lost luggage.",
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

const planningSteps = [
  {
    id: 1,
    eyebrow: "Step 4",
    name: "Choose the Right Suite",
    highlight: "Find the Perfect Accommodation",
    items: [
      "Budget",
      "Location on the ship",
      "Terrace size",
      "Living space",
      "Preferred deck",
      "Additional luxury features",
    ],
    callout:
      "Every accommodation aboard Explora is a suite. If this is your first Explora Journey, an Ocean Terrace Suite offers an excellent introduction while still providing the brand's signature luxury experience. Travelers seeking additional space or exclusive benefits may prefer higher suite categories.",
  },
  {
    id: 2,
    eyebrow: "Step 5",
    name: "Book Early",
    highlight: "Secure the Best Options",
    items: [
      "Better suite selection",
      "Preferred sailing dates",
      "More itinerary options",
      "Promotional pricing",
      "Additional booking incentives",
    ],
    callout:
      "Luxury cruises often sell well in advance, especially during popular travel seasons. Booking early typically provides the widest selection and the greatest flexibility.",
  },
  {
    id: 3,
    eyebrow: "Step 6",
    name: "Understand What's Included",
    highlight: "Know the Value of Your Fare",
    items: [
      "Luxury suite accommodations",
      "Multiple dining venues",
      "Wi-Fi",
      "Room service",
      "Entertainment",
      "Wellness facilities",
      "Fitness classes",
      "Selected beverages",
      "Gratuities in many fare categories",
    ],
    callout:
      "Knowing what's already included helps you better compare overall value and understand why Explora Journeys is considered a compelling option in the luxury cruise market.",
  },
];

/* ── Main Component ──────────────────────────────────────────────── */
const PlanningFirstJourney = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [readMore, setReadMore] = useState(false);

  const images = [HeroImage1, HeroImage2, HeroImage4];

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
          Planning Your First Explora Journey | A Complete First-Time Cruiser
          Guide
        </title>
        <meta name="title" content="Planning Your First Explora Journey" />
        <meta
          name="description"
          content="Planning your first Explora Journeys cruise? Learn how to choose the right ship, itinerary, suite, dining experiences, excursions, and booking strategy for a seamless luxury cruise vacation."
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
          <h1>Planning Your First Explora Journey</h1>

          <p>
            Booking your first luxury cruise is exciting, but choosing the right
            cruise line can feel overwhelming.
          </p>

          <p>
            If you've decided to explore Explora Journeys, you've already taken
            the first step toward a different style of cruising—one focused on
            spacious suites, refined service, exceptional dining, and immersive
            destinations rather than crowded ships and nonstop activities.
          </p>

          {readMore && (
            <>
              <p>
                Unlike traditional cruise vacations, Explora Journeys encourages
                travelers to slow down, enjoy the journey, and experience each
                destination at a relaxed pace.
              </p>

              <p>
                This guide walks you through everything you should know before
                booking your first Explora Journey, helping you choose the right
                itinerary, suite, and travel experience.
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

      {/* ── STEP 1: WHAT IS IT ────────────────────────────────────── */}
      <section className="adg-c-section adg-c-bg-soft" id="adg-common-features">
        <div className="adg-c-container">
          <div className="adg-c-section-header">
            <h2 className="adg-c-h2">Understand What Explora Journeys Is</h2>
            <div className="adg-c-accent-line"></div>
            <p className="Asc-section-intro">
              Before choosing a sailing, it's important to understand what makes
              Explora Journeys unique.
            </p>
          </div>

          <div className="adg-c-overview-layout">
            <div className="adg-c-overview-icons">
              {[
                "Oceanfront all-suite accommodations",
                "Contemporary European design",
                "Personalized service",
                "Flexible dining",
                "Wellness-focused experiences",
                "Longer stays in destination",
                "Relaxed luxury",
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
                    If you're expecting water slides, Broadway-style
                    productions, or constant organized activities, Explora may
                    not be the best fit. If you're looking for a boutique luxury
                    hotel experience at sea, you'll likely feel right at home.
                  </p>
                </div>
              </div>

              <div className="adg-c-overview-image-wrap">
                <img
                  src={ExploraPool}
                  alt="Explora Journeys uncrowded boutique pool deck"
                  className="adg-c-overview-img"
                />
                <div className="adg-c-overview-img-overlay">
                  <span className="adg-c-overview-img-label">
                    Boutique Hotel at Sea
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STEP 2 & 3: DESTINATION & PACING ───────────────────────── */}
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
                alt="Tallinn Estonia old town summer travel destination"
                className="luc-why-img-accent"
              />
              <div className="luc-why-img-badge">
                <span className="luc-why-badge-num">10</span>
                <span className="luc-why-badge-text">Planning Steps</span>
              </div>
            </div>
          </div>

          {/* RIGHT — content */}
          <div className="luc-why-content">
            <h2 className="luc-why-title">Choose Destination &amp; Duration</h2>
            <div className="aac-accent-line aac-accent-white"></div>
            <p className="luc-why-intro">
              Selecting your itinerary and sailing length will establish the
              foundation of your first luxury cruise experience. Be sure to
              align your choice with your personal travel goals.
            </p>

            <div className="luc-why-features">
              {[
                {
                  num: "01",
                  title: "Mediterranean",
                  desc: "Perfect for history buffs, food lovers, and culture seekers enjoying charming coastal villages and warm weather.",
                },
                {
                  num: "02",
                  title: "Caribbean",
                  desc: "A relaxed tropical getaway highlighting quiet private beaches, turquoise waters, and extended island stays.",
                },
                {
                  num: "03",
                  title: "Northern Europe",
                  desc: "Scenic fjord cruising, Baltic capitals, historic landmarks, and cooler coastal atmospheres.",
                },
                {
                  num: "04",
                  title: "Transatlantic & Sea Days",
                  desc: "Ideal for experienced travelers seeking slow travel, onboard wellness programs, and complete relaxation.",
                },
                {
                  num: "05",
                  title: "Cruise Duration",
                  desc: "Choose from 7 Nights (ideal introduction), 10–14 Nights (balanced escape), or longer voyages (ultimate slow travel).",
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

      <section className="adg-c-section adg-c-bg-white" id="adg-complimentary">
        <div className="adg-c-container">
          <div className="adg-c-section-header">
            <span className="adg-c-eyebrow">Included Onboard</span>
            <h2 className="adg-c-h2">Planning Your First Explora Journey</h2>
            <div className="adg-c-accent-line"></div>
          </div>

          <div className="adg-c-venues-grid">
            {planningSteps.map((venue, i) => (
              <div
                key={venue.id}
                className={`adg-c-venue-card adg-c-venue-${i + 1}`}
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

      <section
        className="Asc-video-section"
        id="Asc-video-2"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="Asc-container">
          <div className="Asc-section-header">
            <h2 className="Asc-h2">
              Explore the Explora Journeys 2027 Collection
            </h2>

            <div className="Asc-accent-line"></div>

            <p className="Asc-video-intro">
              Discover Explora Journeys' 2027 Journeys Collection as a new
              chapter in ocean discovery unfolds.
            </p>
          </div>

          <div className="Asc-video-wrapper">
            <div className="Asc-video-frame">
              <iframe
                src="https://www.youtube.com/embed/OwYwL7N1Qfg"
                title="An Ocean of New – Our 2027 Journeys Collection | Explora Journeys"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* ── COMMON MISTAKES TO AVOID ───────────────────────────────── */}
      <section className="Lfsg-section Lfsg-bg-dark" id="Lfsg-suites">
        <div className="Lfsg-container">
          <div className="Lfsg-section-header">
            <h2 className="Lfsg-h2-white">
              Common Mistakes First-Time Guests Should Avoid
            </h2>
            <div className="Lfsg-accent-line-white" />
          </div>

          <div className="Lfsg-mistakes-grid">
            {[
              {
                title: "Booking Too Late",
                desc: "Preferred suites and popular holiday sailings often sell out up to a year in advance.",
              },
              {
                title: "Overplanning Every Port",
                desc: "Rushing through excursions leaves little time to absorb local culture or enjoy spontaneous discoveries.",
              },
              {
                title: "Comparing to Mainstream Lines",
                desc: "Explora operates on a completely different philosophy of space, luxury, and serenity.",
              },
              {
                title: "Choosing Only Based on Price",
                desc: "The destination, suite category, and pacing have a much greater impact on your overall experience than the fare.",
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

      {/* ── STEP 10: SLOW DOWN ───────────────────────────────────────── */}
      <section className="adg-section" id="adg-step-10">
        <div className="adg-container">
          <div className="adg-section-header" style={{ marginBottom: "60px" }}>
            <h2 className="adg-h2">Slow Down</h2>

            <div className="adg-accent-line"></div>

            <p
              className="Asc-body-text"
              style={{ textAlign: "center", marginTop: "15px" }}
            >
              Perhaps the most important advice for first-time Explora Journeys
              guests is simple: don't try to do everything.
            </p>
          </div>

          <div className="adg-split-layout">
            <div className="adg-content-card-side">
              <img
                src={LuxuryOceanfrontSuites}
                alt="Guests relaxing on an outdoor terrace aboard Explora Journeys"
                className="adg-side-image"
                style={{ height: "30vh" }}
              />

              <div className="adg-info-card">
                <div className="adg-card-meta">
                  <Compass size={28} />
                  <span className="adg-meta-label">
                    Embrace the Ocean State of Mind
                  </span>
                </div>

                <p className="adg-card-lead">
                  Explora Journeys was created for travelers who value
                  relaxation, meaningful experiences, and the freedom to enjoy
                  each day at their own pace.
                </p>

                <div className="adg-card-divider"></div>

                <p className="adg-card-subtext">
                  Rather than filling every hour with activities, allow yourself
                  time to unwind, recharge, and appreciate the journey as much
                  as the destinations.
                </p>
              </div>
            </div>

            <div className="adg-list-side">
              {[
                {
                  title: "Relaxed mornings",
                  icon: <Coffee size={20} />,
                },
                {
                  title: "Long lunches",
                  icon: <Utensils size={20} />,
                },
                {
                  title: "Quiet afternoons",
                  icon: <BookOpen size={20} />,
                },
                {
                  title: "Ocean views",
                  icon: <Waves size={20} />,
                },
                {
                  title: "Wellness experiences",
                  icon: <Heart size={20} />,
                },
                {
                  title: "Meaningful conversations",
                  icon: <Users size={20} />,
                },
                {
                  title: "Unhurried exploration",
                  icon: <Compass size={20} />,
                },
              ].map((item, i) => (
                <div key={i} className="adg-list-item-card">
                  <div className="adg-list-item-icon">{item.icon}</div>
                  <h4 className="adg-list-item-label">{item.title}</h4>
                </div>
              ))}
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
            The less you rush, the more you'll enjoy the Explora Journeys
            experience.
          </p>
        </div>
      </section>

      {/* ── STEP 7 & 8: DINING & SHORE EXPERIENCES ─────────────────── */}
      <section
        className="Ejvs-pricing-section"
        id="Ejvs-family-experience"
        style={{ backgroundColor: "var(--bg-white)" }}
      >
        <div className="Ejvs-container">
          <div className="Ejvs-section-header">
            <h2 className="Ejvs-section-title">
              Refined Dining &amp; Shore Experiences
            </h2>
            <div className="Asc-accent-line"></div>
            <p className="Ejvs-section-subtitle">
              Plan your culinary experiences and destination activities for a
              smooth, relaxed journey.
            </p>
          </div>

          <div className="Ejvs-pricing-grid">
            {/* Dining Card */}
            <div className="Ejvs-pricing-card Ejvs-explora-card">
              <div className="Ejvs-card-header">
                <div className="Ejvs-card-icon-wrap">
                  <Sparkles size={24} className="Ejvs-card-icon" />
                </div>
                <h3 className="Ejvs-card-title">Plan Your Dining</h3>
              </div>

              <p className="Ejvs-card-intro">
                Enjoy flexible, open-seating options across multiple specialty
                dining venues without fixed schedules.
              </p>

              <ul className="Ejvs-feature-list">
                {[
                  "Refined Mediterranean specialties",
                  "Chef-inspired Pan-Asian dining",
                  "Gourmet steakhouse & fine cuts",
                  "Complimentary 24-hour suite dining",
                  "Anthology exclusive tasting menus",
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
                  Anthology features collaborations with world-renowned guest
                  chefs. If you want to experience it, book prior to sailing.
                </p>
              </div>
            </div>

            {/* Shore Experiences Card */}
            <div className="Ejvs-pricing-card Ejvs-seabourn-card">
              <div className="Ejvs-card-header">
                <div className="Ejvs-card-icon-wrap">
                  <Award size={24} className="Ejvs-card-icon" />
                </div>
                <h3 className="Ejvs-card-title">Explore Shore Experiences</h3>
              </div>

              <p className="Ejvs-card-intro">
                Anticipate how you would like to explore each unique port of
                call, choosing from structured or private setups.
              </p>

              <ul className="Ejvs-feature-list">
                {[
                  "Private cultural & historical tours",
                  "Curated local food and wine tastings",
                  "Guided walking tours in historic towns",
                  "Coastal scenic drives & cruises",
                  "Relaxing luxury beach club access",
                ].map((item, i) => (
                  <li key={i} className="Ejvs-feature-item">
                    <div className="Ejvs-feature-icon">
                      <Star size={14} />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="Ejvs-card-highlight">
                <p>
                  Avoid over-scheduling. Leaving blocks of time for spontaneous
                  independent exploration makes for the most memorable trips.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STEP 9: PACK SMART ────────────────────────────────────── */}
      <section
        className="ugt-components-section"
        id="step-9-pack-smart"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="ugt-components-container">
          <div className="ugt-components-header">
            <h2 className="ugt-components-title">Pack Smart</h2>
            <div className="adg-c-accent-line"></div>
          </div>

          <div className="ugt-components-list">
            <div className="ugt-component-row">
              <div className="ugt-component-image-wrapper">
                <div className="ugt-component-image-container">
                  <img
                    src={ExploraDetination3}
                    alt="Guests enjoying relaxed luxury aboard Explora Journeys"
                    className="ugt-component-image"
                  />
                </div>
              </div>

              <div className="ugt-component-content">
                <p className="ugt-component-text">
                  Explora Journeys embraces elegant but relaxed luxury, so
                  packing versatile clothing will help you feel comfortable
                  throughout your voyage. The onboard atmosphere is
                  sophisticated without requiring formal attire.
                </p>

                <div className="ugt-questions-box">
                  <span className="ugt-questions-title">
                    Pack clothing suitable for:
                  </span>

                  <ul className="ugt-questions-list">
                    {[
                      "Daytime sightseeing",
                      "Poolside relaxation",
                      "Casual lunches",
                      "Evening dining",
                      "Shore excursions",
                      "Fitness activities",
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
                    backgroundColor: "var(--bg-soft)",
                    padding: "12px",
                    borderRadius: "6px",
                  }}
                >
                  Comfortable walking shoes are essential for exploring ports,
                  while smart casual attire works well for most evenings
                  onboard. Formal wear is generally unnecessary.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHO IS EXPLORA BEST FOR ────────────────────────────────── */}
      <section className="Asc-section Asc-bg-white" id="Asc-who">
        <div className="Asc-container">
          <div className="Asc-section-header">
            <h2 className="Asc-h2">Is Explora Journeys Right For You?</h2>
            <div className="Asc-accent-line"></div>
          </div>

          <div className="Asc-who-grid">
            <div className="Asc-who-card Asc-who-yes">
              <h3 className="Asc-who-title">
                You Will Appreciate Explora If You Enjoy:
              </h3>
              <ul className="Asc-who-list">
                {[
                  "Five-star luxury boutique hotels",
                  "Refined, destination-inspired dining",
                  "Spacious all-suite living layouts",
                  "Contemporary, clean design aesthetics",
                  "Quiet sophistication and relaxation",
                  "Integrated wellness-focused vacations",
                  "Attentive, personalized hospitality",
                  "Luxury without rigid formalities",
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
                You May Prefer Another Line If You Want:
              </h3>
              <ul className="Asc-who-list">
                {[
                  "Water parks, slides, and roller coasters",
                  "Character entertainment and family shows",
                  "Massive, high-energy gaming casinos",
                  "Broadway-style major theater productions",
                  "Structured, non-stop onboard activities",
                  "Rigid formal dress codes & traditional dining",
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

      {/* ── OCEAN STATE OF MIND VIDEO ───────────────────────── */}
      <section
        className="Asc-video-section"
        id="Asc-video-3"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="Asc-container">
          <div className="Asc-section-header">
            <h2 className="Asc-h2">
              Discover the Ocean State of Mind with Explora Journeys
            </h2>

            <div className="Asc-accent-line"></div>

            <p className="Asc-video-intro">
              More than a luxury cruise, Explora Journeys is designed to help
              guests slow down, reconnect, and experience the ocean in a more
              meaningful way.
            </p>
          </div>

          <div className="Asc-video-wrapper">
            <div className="Asc-video-frame">
              <iframe
                src="https://www.youtube.com/embed/hhmfrSOZEq8"
                title="Discover the Ocean State of Mind with Explora Journeys"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* WHY BOOK THROUGH A LUXURY TRAVEL ADVISOR? */}
      <section
        className="Avr-planning-section"
        id="Asc-luxury-travel-advisor"
        style={{ backgroundColor: "var(--bg-white)" }}
      >
        <div className="Asc-container">
          {/* HEADING */}
          <div className="Avr-planning-heading">
            <span className="Avr-planning-eyebrow">Expert Cruise Planning</span>

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
                Make the Most of Your First Explora Journey
              </h3>

              <p className="Avr-planning-left-body">
                Your first Explora Journey is an investment, and expert guidance
                can help you choose the right itinerary, accommodations, and
                experiences while making the planning process simple and
                stress-free.
              </p>

              <div className="Avr-planning-alert">
                <ShieldCheck size={18} className="Avr-planning-alert-icon" />

                <p className="Avr-planning-alert-text">
                  Professional planning often results in a smoother, more
                  personalized vacation from the moment you book until you
                  return home.
                </p>
              </div>
            </div>

            {/* RIGHT PANEL */}
            <div className="Avr-planning-right">
              <p className="Avr-planning-right-intro">
                A luxury travel advisor can:
              </p>

              <div className="Avr-planning-benefits-grid">
                {[
                  {
                    icon: <Compass size={18} />,
                    label: "Recommend the right itinerary",
                  },
                  {
                    icon: <Home size={18} />,
                    label: "Explain the differences between suites",
                  },
                  {
                    icon: <BadgePercent size={18} />,
                    label: "Compare promotions",
                  },
                  {
                    icon: <Plane size={18} />,
                    label: "Arrange flights and hotels",
                  },
                  {
                    icon: <Car size={18} />,
                    label: "Coordinate transfers",
                  },
                  {
                    icon: <Utensils size={18} />,
                    label: "Recommend dining experiences",
                  },
                  {
                    icon: <MapPinned size={18} />,
                    label: "Assist with shore excursions",
                  },
                  {
                    icon: <LifeBuoy size={18} />,
                    label:
                      "Provide ongoing support before and during your trip",
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
                With expert guidance, you can enjoy a seamless planning
                experience and a luxury cruise tailored to your preferences from
                beginning to end.
              </p>
            </div>
          </div>
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
              Everything first-time guests need to know before booking their
              first Explora Journeys cruise.
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
                <h2 className="Asc-help-h2">Plan Your First Explora Journey</h2>
                <div className="Asc-help-accent"></div>
              </div>

              <div className="Asc-help-grid">
                <div className="Asc-help-info">
                  <p className="Asc-help-intro">
                    Trips &amp; Ships Luxury Travel helps travelers identify the
                    right luxury cruise experience based on travel style,
                    preferences, and destination goals.
                  </p>

                  <p className="Asc-help-intro">
                    Connect with Angela Hughes and the Trips &amp; Ships Luxury
                    Travel team to begin planning your personalized Explora
                    Journeys vacation.
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
                    Our luxury planning services include:
                  </h3>

                  <ul className="Asc-help-bullets">
                    {[
                      "Personalized ship and itinerary matching",
                      "Suite selection and deck location guidance",
                      "Shore excursion & destination planning",
                      "Access to exclusive agency rates and promotions",
                      "Coordination of flights and luxury transfers",
                      "Complete pre- and post-voyage concierge support",
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
                      label: "Explora Journeys Overview",
                      path: "/luxury-explora-journeys-guide",
                    },
                    {
                      label: "Explora Journeys Review",
                      path: "/explora-journeys-review",
                    },
                    {
                      label: "What Makes Explora Journeys Different?",
                      path: "/what-makes-explora-journeys-different",
                    },
                    {
                      label: "Is Explora Journeys Luxury?",
                      path: "/is-explora-journeys-luxury",
                    },
                    {
                      label: "Is Explora Journeys Worth It?",
                      path: "/is-explora-journeys-worth-it",
                    },
                    {
                      label: "Which Explora Ship Should You Choose?",
                      path: "/which-explora-ship-should-you-choose",
                    },
                    {
                      label: "Which Explora Suite Is Worth the Upgrade?",
                      path: "/which-explora-suite-is-worth-the-upgrade",
                    },
                    {
                      label: "What Is Included on Explora Journeys?",
                      path: "/explora-journeys-cruise-inclusions",
                    },
                    {
                      label: "Is Anthology Worth It?",
                      path: "/is-anthology-worth-it",
                    },
                    {
                      label: "What to Pack for an Explora Cruise",
                      path: "/what-to-pack-for-an-explora-cruise",
                    },
                    {
                      label: "How to Get the Best Value on Explora Journeys",
                      path: "/how-to-get-the-best-value-on-explora-journeys",
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

export default PlanningFirstJourney;
