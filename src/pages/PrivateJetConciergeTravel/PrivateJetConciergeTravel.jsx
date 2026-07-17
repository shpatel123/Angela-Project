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
} from "lucide-react";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela.jpeg";

import HeroImage1 from "../../assets/PrivateJetConciergeTravel/private-jet-concierge-travel-luxury-professional-athlete.webp";
import HeroImage2 from "../../assets/PrivateJetConciergeTravel/private-jet-concierge-travel-professional-athletes.webp";
import HeroImage3 from "../../assets/PrivateJetConciergeTravel/championship-celebrations-milestone-travel-luxury-family..webp";

import DifferentApproachImage from "../../assets/PrivateJetConciergeTravel/family-concierge-travel-services-luxury-family-arrival.webp";

import BucketCaribbean from "../../assets/CaribbeanCruisesExploraJourneys/private-exclusive-caribbean-island.jpg";
import BucketMediterranean from "../../assets/WhichMediterraneanItineraryIsBest/amalfi-coast-italy-mediterranean-hero-summer-2025.jpg";
import HawaiiJetImage from "../../assets/PrivateJetConciergeTravel/hawaii-oceanfront-luxury-resort-private-jet-travel.webp";
import BucketAlaska from "../../assets/AlaskaCruisesExploraJourneys/explora-journeys-alaska-luxury-cruise-through-fjords.jpg";
import PolynesiaJetImage from "../../assets/PrivateJetConciergeTravel/french-polynesia-overwater-villa-luxury-private-aviation.webp";
import BucketSafari from "../../assets/PrivateJetConciergeTravel/luxury-safari-expeditions-bucket-list-adventures-group.webp";

import ConciergeImage from "../../assets/PrivateJetConciergeTravel/luxury-wellness-recovery-travel-professional-athlete-family.webp";
import AirportLoungeImage from "../../assets/PrivateJetConciergeTravel/vip-private-airport-lounge-luxury-travel-services.webp";
import AirportMeetGreetImage from "../../assets/PrivateJetConciergeTravel/vip-airport-meet-and-greet-concierge-service.webp";
import GroundImage from "../../assets/PrivateJetConciergeTravel/luxury-sports-travel-experiences-private-hospitality.webp";
import FamilyImage from "../../assets/PrivateJetConciergeTravel/multigenerational-travel-professional-athletes-luxury-family-villa.webp";
import VillaImage from "../../assets/PrivateJetConciergeTravel/off-season-luxury-travel-professional-athletes-private-villa-retreat.webp";
import YachtImage from "../../assets/PrivateJetConciergeTravel/private-villas-yachts-exclusive-resorts-luxury-superyacht.webp";
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
        "Luxury travel agency specializing in private jet vacations and concierge luxury travel for professional athletes, executives, and high-profile families, including private aviation coordination, VIP airport services, luxury ground transportation, and personalized concierge planning.",
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
      name: "Private Jet & Concierge Travel",
      url: "https://tripsandships.com/private-jet-concierge-travel",
      description:
        "Discover private jet vacations and concierge luxury travel for professional athletes, executives, and high-profile families. Learn how private aviation, VIP airport services, luxury transfers, and personalized concierge planning create seamless travel experiences.",
    },
    {
      "@type": "Service",
      serviceType: "Private Jet & Concierge Travel Planning",
      provider: {
        "@type": "TravelAgency",
        name: "Trips & Ships Luxury Travel",
      },
      areaServed: "Worldwide",
      description:
        "Concierge-level luxury travel planning built around private aviation, VIP airport services, luxury ground transportation, and personalized itineraries for high-profile travelers and their families.",
    },
    {
      "@type": "Article",
      headline: "Private Jet & Concierge Travel",
      description:
        "A complete guide to private jet vacations and concierge luxury travel, covering private aviation, VIP airport services, luxury transportation, personalized itineraries, and destinations perfect for private jet travel.",
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
          name: "Private Jet & Concierge Travel",
          item: "https://tripsandships.com/private-jet-concierge-travel",
        },
      ],
    },
    {
      "@type": "ItemList",
      name: "Services Included in Private Jet & Concierge Travel",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Private Aviation Coordination",
          description:
            "Flexible departure times, direct routing, and personalized service tailored around your schedule.",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "VIP Airport Services",
          description:
            "Personalized meet and greet, expedited procedures, private lounges, and luggage assistance.",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Luxury Ground Transportation",
          description:
            "Chauffeured sedans, executive SUVs, private drivers, and yacht or helicopter transfers.",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Personalized Concierge Planning",
          description:
            "Dedicated advisors coordinate flights, accommodations, dining, and activities into one seamless itinerary.",
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Family Travel Coordination",
          description:
            "Multi-generational flight arrivals, transfers, and child-friendly accommodations handled with care.",
        },
      ],
    },
    {
      "@type": "TouristTrip",
      name: "Private Jet & Concierge Vacation",
      provider: {
        "@type": "Organization",
        name: "Trips & Ships Luxury Travel",
      },
      touristType:
        "Professional athletes, executives, entrepreneurs, entertainers, and families seeking private aviation and concierge-level travel",
    },
    {
      "@type": "LocalBusiness",
      name: "Trips & Ships Private Jet & Concierge Travel Planning",
      description:
        "Personalized planning for private aviation, VIP airport services, luxury ground transportation, and concierge-level vacations for high-profile travelers.",
    },
    {
      "@type": "Review",
      itemReviewed: {
        "@type": "Service",
        name: "Private Jet & Concierge Travel",
      },
      author: {
        "@type": "Person",
        name: "Angela Hughes",
      },
      reviewBody:
        "True luxury isn't just where you go — it's how effortlessly you get there, and that begins with the very first moment of the journey.",
    },
    {
      "@type": "AboutPage",
      name: "About Private Jet & Concierge Travel",
      description:
        "Learn how private aviation and luxury concierge services transform travel into a seamless, personalized experience for high-profile travelers and their families.",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is private jet travel?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Private jet travel allows travelers to use private aircraft with flexible scheduling, personalized service, and access to private aviation facilities.",
          },
        },
        {
          "@type": "Question",
          name: "What is luxury concierge travel?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Luxury concierge travel provides personalized planning and ongoing support for flights, accommodations, transportation, dining, activities, and special requests.",
          },
        },
        {
          "@type": "Question",
          name: "Who benefits most from private aviation?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Professional athletes, executives, entrepreneurs, entertainers, and families with demanding schedules often appreciate the flexibility and convenience of private aviation.",
          },
        },
        {
          "@type": "Question",
          name: "What are VIP airport services?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "VIP airport services may include personalized assistance, private lounges, luggage coordination, and expedited airport support where available.",
          },
        },
        {
          "@type": "Question",
          name: "Can concierge services arrange family vacations?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Concierge planning often includes multi-generational travel, children's activities, private transportation, dining, and personalized itineraries.",
          },
        },
        {
          "@type": "Question",
          name: "Are private jet vacations only for international travel?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Private aviation can be used for domestic trips, island destinations, multi-city itineraries, and shorter regional journeys.",
          },
        },
        {
          "@type": "Question",
          name: "Can travel plans change after booking?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Luxury travel advisors often recommend flexible travel arrangements whenever possible and can assist with itinerary adjustments if needed.",
          },
        },
        {
          "@type": "Question",
          name: "Are private villas and yacht charters included?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Concierge travel frequently combines private aviation with luxury villas, yacht charters, wellness resorts, and personalized experiences.",
          },
        },
        {
          "@type": "Question",
          name: "How far in advance should private jet vacations be planned?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Booking six to twelve months ahead generally provides the best availability, particularly during holidays and peak travel seasons.",
          },
        },
        {
          "@type": "Question",
          name: "Is working with a luxury travel advisor worthwhile?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For travelers seeking personalized service, expert coordination, and seamless logistics, professional travel planning often delivers exceptional value.",
          },
        },
      ],
    },
  ],
};

/* ── Data: Private jet destinations (tabbed panel) ───────────────── */
const privateJetDestinations = [
  {
    id: "caribbean",
    title: "Caribbean",
    badge: "Caribbean",
    icon: Palmtree,
    image: BucketCaribbean,
    objectPosition: "center 55%",
    window: "Private island resorts, luxury villas, and yacht charters",
    desc: "Private island resorts, luxury villas, and yacht charters make the Caribbean effortless to reach and explore by private jet.",
    columns: [
      {
        label: "Plan Around:",
        items: [
          "Private Island Resorts",
          "Luxury Villa Stays",
          "Yacht Charter Add-Ons",
        ],
      },
    ],
    themeLabel: "Island Access, Simplified",
    themeText:
      "Private aviation opens up smaller island airports, cutting travel time between resorts, villas, and yachts across the Caribbean.",
  },
  {
    id: "mediterranean",
    title: "Mediterranean",
    badge: "Mediterranean",
    icon: Waves,
    image: BucketMediterranean,
    objectPosition: "center",
    window: "Coastal cities, island hopping, and luxury villas",
    desc: "Coastal cities, island hopping, and luxury villas make the Mediterranean an ideal region for a multi-stop private aviation itinerary.",
    columns: [
      {
        label: "Plan Around:",
        items: [
          "Coastal City Stopovers",
          "Island-Hopping Itineraries",
          "Private Villa Coordination",
        ],
      },
    ],
    themeLabel: "Multi-Destination, One Journey",
    themeText:
      "Private jet travel makes it easy to move between coastal cities and islands without the constraints of commercial routing.",
  },
  {
    id: "hawaii",
    title: "Hawaii",
    badge: "Hawaii",
    icon: Palmtree,
    image: HawaiiJetImage,
    objectPosition: "center",
    window: "Oceanfront resorts, wellness retreats, and family adventures",
    desc: "Oceanfront resorts, wellness retreats, and family adventures make Hawaii a favorite private jet destination for multi-generational trips.",
    columns: [
      {
        label: "Plan Around:",
        items: [
          "Oceanfront Resort Stays",
          "Family-Friendly Adventures",
          "Wellness Retreat Add-Ons",
        ],
      },
    ],
    themeLabel: "Effortless Island Arrival",
    themeText:
      "Flexible departure times and direct routing make it easier for families to reach Hawaii on their own schedule.",
  },
  {
    id: "alaska",
    title: "Alaska",
    badge: "Alaska",
    icon: Mountain,
    image: BucketAlaska,
    objectPosition: "center 60%",
    window: "Luxury expedition cruises and breathtaking wilderness",
    desc: "Luxury expedition cruises and breathtaking wilderness experiences make Alaska a striking destination reached comfortably by private aviation.",
    columns: [
      {
        label: "Plan Around:",
        items: [
          "Luxury Expedition Cruise Transfers",
          "Remote Wilderness Access",
          "Scenic Regional Routing",
        ],
      },
    ],
    themeLabel: "Remote Made Reachable",
    themeText:
      "Private aviation provides direct access to regional airports near Alaska's most remote and scenic destinations.",
  },
  {
    id: "french-polynesia",
    title: "French Polynesia",
    badge: "French Polynesia",
    icon: Waves,
    image: PolynesiaJetImage,
    objectPosition: "center",
    window: "Exclusive island resorts surrounded by crystal-clear lagoons",
    desc: "Exclusive island resorts surrounded by crystal-clear lagoons make French Polynesia an ideal setting for a private, uninterrupted escape.",
    columns: [
      {
        label: "Plan Around:",
        items: [
          "Overwater Villa Resorts",
          "Private Lagoon Excursions",
          "Seamless Inter-Island Transfers",
        ],
      },
    ],
    themeLabel: "Private, Uninterrupted Escape",
    themeText:
      "Private jet access and coordinated inter-island transfers make French Polynesia far easier to enjoy without commercial delays.",
  },
  {
    id: "safari",
    title: "African Safari",
    badge: "Safari",
    icon: PawPrint,
    image: BucketSafari,
    objectPosition: "center 18%",
    window: "Luxury lodges offering extraordinary wildlife experiences",
    desc: "Luxury lodges offering extraordinary wildlife experiences make African safari destinations a natural fit for private aviation itineraries.",
    columns: [
      {
        label: "Plan Around:",
        items: [
          "Luxury Safari Lodge Stays",
          "Private Bush-Flight Connections",
          "Multi-Country Itineraries",
        ],
      },
    ],
    themeLabel: "Wilderness Without Compromise",
    themeText:
      "Private aviation and bush-flight connections make it possible to reach remote safari lodges without sacrificing comfort.",
  },
];

/* ── FAQ Component ─────────────────────────────────────────────── */
function FAQ() {
  const [open, setOpen] = useState(null);

  const faqData = [
    {
      q: "What is private jet travel?",
      a: "Private jet travel allows travelers to use private aircraft with flexible scheduling, personalized service, and access to private aviation facilities.",
    },
    {
      q: "What is luxury concierge travel?",
      a: "Luxury concierge travel provides personalized planning and ongoing support for flights, accommodations, transportation, dining, activities, and special requests.",
    },
    {
      q: "Who benefits most from private aviation?",
      a: "Professional athletes, executives, entrepreneurs, entertainers, and families with demanding schedules often appreciate the flexibility and convenience of private aviation.",
    },
    {
      q: "What are VIP airport services?",
      a: "VIP airport services may include personalized assistance, private lounges, luggage coordination, and expedited airport support where available.",
    },
    {
      q: "Can concierge services arrange family vacations?",
      a: "Yes. Concierge planning often includes multi-generational travel, children's activities, private transportation, dining, and personalized itineraries.",
    },
    {
      q: "Are private jet vacations only for international travel?",
      a: "No. Private aviation can be used for domestic trips, island destinations, multi-city itineraries, and shorter regional journeys.",
    },
    {
      q: "Can travel plans change after booking?",
      a: "Luxury travel advisors often recommend flexible travel arrangements whenever possible and can assist with itinerary adjustments if needed.",
    },
    {
      q: "Are private villas and yacht charters included?",
      a: "Yes. Concierge travel frequently combines private aviation with luxury villas, yacht charters, wellness resorts, and personalized experiences.",
    },
    {
      q: "How far in advance should private jet vacations be planned?",
      a: "Booking six to twelve months ahead generally provides the best availability, particularly during holidays and peak travel seasons.",
    },
    {
      q: "Is working with a luxury travel advisor worthwhile?",
      a: "For travelers seeking personalized service, expert coordination, and seamless logistics, professional travel planning often delivers exceptional value.",
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
const PrivateJetConciergeTravel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [readMore, setReadMore] = useState(false);
  const [activeDestination, setActiveDestination] = useState("caribbean");
  const [hovered, setHovered] = useState(null);

  const currentDestination =
    privateJetDestinations.find((d) => d.id === activeDestination) ||
    privateJetDestinations[0];
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
          Private Jet &amp; Concierge Travel | Luxury Private Aviation &amp;
          VIP Travel Planning
        </title>
        <meta name="title" content="Private Jet & Concierge Travel" />
        <meta
          name="description"
          content="Discover private jet vacations and concierge luxury travel for professional athletes, executives, and high-profile families. Learn how private aviation, VIP airport services, luxury transfers, and personalized concierge planning create seamless travel experiences."
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
            Private Jet <br /> &amp; Concierge Travel
          </h1>

          <p>
            Luxury travel begins long before you arrive at your destination.
            For professional athletes, executives, entrepreneurs,
            entertainers, and families with demanding schedules, the journey
            itself should be as comfortable and effortless as the vacation.
          </p>

          <p>
            Private aviation and luxury concierge services transform travel
            into a seamless experience by reducing stress, maximizing
            flexibility, and ensuring every detail is professionally managed.
          </p>

          {readMore && (
            <>
              <p>
                Whether you're planning an off-season family vacation,
                celebrating a championship, attending an international event,
                or embarking on a once-in-a-lifetime adventure, personalized
                travel management allows you to focus on enjoying the
                experience instead of coordinating the logistics.
              </p>

              <p>
                From private terminals and VIP airport assistance to luxury
                ground transportation and carefully coordinated itineraries,
                every detail contributes to a travel experience that feels
                effortless, comfortable, and tailored to your lifestyle.
              </p>

              <p>
                With more than 40 years in the travel industry, experience
                spanning over 121 countries, and recognition as the 2024
                Luxury Travel Influencer of the Year by Travel Leaders
                Network, Angela Hughes has become one of the most trusted
                voices in private aviation and concierge-level luxury travel.
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

      {/* ── WHY HIGH-PROFILE TRAVELERS CHOOSE PRIVATE AVIATION ───────── */}
      <section className="adg-c-section adg-c-bg-white" id="adg-c-why-private-aviation">
        <div className="adg-c-container">
          <div className="adg-c-section-header">
            <h2 className="adg-c-h2">
              Why High-Profile Travelers Choose Private Aviation
            </h2>
            <div className="adg-c-accent-line"></div>
            <p className="Asc-section-intro">
              Training schedules, competitions, sponsorship commitments,
              business meetings, and family responsibilities often leave very
              little room for delays or complicated travel plans.
            </p>
          </div>

          <div className="adg-c-overview-layout">
            <div className="adg-c-overview-icons">
              {[
                "Flexible departure times",
                "Greater privacy",
                "More direct routing",
                "Comfortable surroundings",
                "Personalized service",
                "Efficient boarding processes",
                "Convenient family travel",
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
                    Instead of adapting to airline schedules, your travel
                    schedule is built around you. Private aviation offers a
                    more personalized approach to travel from departure to
                    arrival.
                  </p>
                </div>
              </div>

              <div className="adg-c-overview-image-wrap" style={{ height: "320px" }}>
                <img
                  src={DifferentApproachImage}
                  alt="Family boarding a private jet with personalized service"
                  className="adg-c-overview-img"
                  style={{ objectPosition: "top" }}
                />
                <div className="adg-c-overview-img-overlay">
                  <span className="adg-c-overview-img-label">
                    Your Schedule, Your Journey
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MORE THAN JUST FLYING PRIVATE & LUXURY CONCIERGE TRAVEL */}
      <section
        className="Ejsc-ent-section"
        id="Ejsc-more-than-flying"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="Ejsc-container">
          <div className="Ejsc-section-header">
            <h2 className="Ejsc-section-title">
              More Than Just Flying Private
            </h2>
            <div className="Asc-accent-line"></div>
            <p className="Ejsc-section-subtitle">
              Private aviation is about much more than luxury. It provides a
              smoother and more efficient travel experience from departure to
              arrival, particularly for families or travelers with limited
              time.
            </p>
          </div>

          <div className="Ejsc-ent-grid">
            {/* Private Aviation Advantages Card */}
            <div className="Ejsc-ent-card Ejsc-explora-card">
              <div className="Ejsc-card-header">
                <div className="Ejsc-card-icon-wrap">
                  <Plane size={24} className="Ejsc-card-icon" />
                </div>
                <h3 className="Ejsc-card-title">
                  Private Aviation Advantages
                </h3>
              </div>

              <p className="Ejsc-card-intro">
                Every stage of the flying experience is designed to be
                smoother, more efficient, and less stressful than
                commercial travel.
              </p>

              <ul className="Ejsc-feature-list">
                {[
                  "Access to private terminals",
                  "Reduced airport waiting times",
                  "Customized flight schedules",
                  "Spacious cabins",
                  "Personalized onboard dining",
                  "Flexible luggage allowances",
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
                  These advantages can make travel less stressful and more
                  enjoyable, particularly for families or travelers with
                  limited time.
                </p>
              </div>
            </div>

            {/* Luxury Concierge Travel Card */}
            <div className="Ejsc-ent-card Ejsc-seabourn-card">
              <div className="Ejsc-card-header">
                <div className="Ejsc-card-icon-wrap">
                  <Headset size={24} className="Ejsc-card-icon" />
                </div>
                <h3 className="Ejsc-card-title">Luxury Concierge Travel</h3>
              </div>

              <p className="Ejsc-card-intro">
                Exceptional travel doesn't happen by accident. Behind every
                seamless vacation is thoughtful planning and careful
                coordination.
              </p>

              <ul className="Ejsc-feature-list">
                {[
                  "Flights & ground transportation",
                  "Hotel reservations & private villas",
                  "Restaurant bookings & excursions",
                  "Spa appointments & special celebrations",
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
                  Rather than coordinating multiple reservations yourself, a
                  dedicated advisor ensures everything works together
                  effortlessly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── VIP AIRPORT SERVICES ─────────────────────────────────────── */}
      <section className="wnf-section wnf-bg-white" id="vip-airport-services">
        <div className="wnf-container">
          <div className="wnf-section-header">
            <h2 className="wnf-h2">VIP Airport Services</h2>
            <div className="wnf-accent-line"></div>
          </div>

          <div className="wnf-split">
            <div className="la-image-column">
              <div className="la-image-wrap">
                <img
                  src={AirportLoungeImage}
                  alt="Private airport terminal lounge"
                  className="la-image"
                />
                <div className="la-image-overlay"></div>
              </div>
            </div>

            <div className="wnf-content-column">
              <div className="wnf-block">
                <p className="wnf-lead-text">
                  Airports can often be the most stressful part of a luxury
                  vacation. VIP airport services help simplify the experience
                  from arrival through departure.
                </p>

                <ul className="wnf-feature-list">
                  {[
                    "Personalized meet and greet",
                    "Expedited airport procedures",
                    "Private airport lounges",
                    "Professional luggage assistance",
                    "Support for families traveling with multiple bags",
                    "A relaxed beginning and end to every trip",
                  ].map((feature, i) => (
                    <li key={i} className="wnf-feature-item">
                      <div className="wnf-icon-wrapper">
                        <Luggage size={14} />
                      </div>
                      <span className="wnf-feature-text">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="wnf-footer-note">
                <p className="wnf-highlight-text">
                  Professional staff assist travelers from arrival through
                  departure, while streamlined procedures and private lounges
                  create a calmer, more comfortable start to the journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LUXURY GROUND TRANSPORTATION & PERSONALIZED ITINERARIES */}
      <section className="azs-suites-section" id="azs-ground-itineraries">
        <div className="azs-container">
          <div className="azs-section-header">
            <h2 className="azs-section-title">
              Luxury Ground Transportation &amp; <br /> Personalized Travel
              Itineraries
            </h2>
            <div className="azs-section-accent"></div>
            <p className="azs-section-subtitle">
              Your experience should remain exceptional after landing — and no
              two travelers are the same.
            </p>
          </div>

          <div className="azs-suites-grid">
            {/* Ground Transportation Card */}
            <div className="azs-suites-card azs-seabourn-suites">
              <div className="azs-suites-image-wrap">
                <img
                  src={GroundImage}
                  alt="Chauffeured luxury vehicle arriving at a private resort"
                  className="azs-suites-img"
                />
                <span className="azs-suites-image-badge">
                  Comfortable, Efficient Transfers
                </span>
              </div>

              <div className="azs-suites-content">
                <div className="azs-suites-card-header">
                  <div className="azs-suites-icon-circle">
                    <Car size={24} className="azs-suites-icon" />
                  </div>
                  <h3 className="azs-suites-title">
                    Luxury Ground Transportation
                  </h3>
                </div>

                <p className="azs-suites-intro">
                  Professional transportation ensures comfortable, efficient
                  travel throughout your vacation, from the tarmac to your
                  final destination.
                </p>

                <div className="azs-suites-body">
                  <h4 className="azs-suites-group-title">
                    Options may include:
                  </h4>

                  <ul className="azs-suites-list">
                    {[
                      "Chauffeured sedans & executive SUVs",
                      "Luxury vans for larger families",
                      "Private drivers & resort transfers",
                      "Yacht transfers",
                      "Helicopter transfers in select destinations",
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
                      Every transfer is designed to feel like a natural
                      extension of the flight itself.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Personalized Itineraries Card */}
            <div className="azs-suites-card azs-azamara-suites">
              <div className="azs-suites-image-wrap">
                <img
                  src={ConciergeImage}
                  alt="Concierge advisor building a personalized travel itinerary"
                  className="azs-suites-img"
                />
                <span className="azs-suites-image-badge">
                  Built Around Your Goals
                </span>
              </div>

              <div className="azs-suites-content">
                <div className="azs-suites-card-header">
                  <div className="azs-suites-icon-circle">
                    <Compass size={24} className="azs-suites-icon" />
                  </div>
                  <h3 className="azs-suites-title">
                    Personalized Travel Itineraries
                  </h3>
                </div>

                <p className="azs-suites-intro">
                  Luxury concierge planning begins by understanding your
                  goals, whether that means quiet family time or a
                  once-in-a-lifetime adventure.
                </p>

                <div className="azs-suites-body">
                  <h4 className="azs-suites-group-title">
                    Some travelers want:
                  </h4>

                  <ul className="azs-suites-list">
                    {[
                      "Quiet family time & wellness experiences",
                      "Adventure activities & cultural experiences",
                      "Luxury cruises & private yacht charters",
                      "Sports events & championship celebrations",
                      "Multi-generational vacations",
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
                      Every itinerary is customized around your interests,
                      schedule, and preferred pace of travel.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONCIERGE SERVICES BEYOND TRAVEL ─────────────────────────── */}
      <section
        className="Leg-section"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="Leg-container">
          <div className="Leg-header">
            <h2 className="Leg-title">Concierge Services Beyond Travel</h2>
            <div className="adg-c-accent-line"></div>
            <p className="Leg-subtitle">
              Luxury concierge support doesn't stop after your arrival. Every
              detail is coordinated to create a personalized travel
              experience.
            </p>
          </div>

          <div className="Leg-grid">
            {[
              {
                id: 1,
                accent: "gold",
                icon: Utensils,
                title: "Dining & Entertainment",
                description:
                  "Private dining reservations, event tickets, and golf tee times arranged around your schedule.",
                pills: ["Private Dining", "Event Tickets", "Golf Tee Times"],
                highlight: "Reservations handled before you even arrive.",
              },
              {
                id: 2,
                accent: "navy",
                icon: HeartHandshake,
                title: "Wellness & Family",
                description:
                  "Spa scheduling, wellness appointments, and trusted childcare recommendations for the whole family.",
                pills: ["Spa Scheduling", "Wellness", "Childcare"],
                highlight: "Every family member is thought of and cared for.",
              },
              {
                id: 3,
                accent: "teal",
                icon: Camera,
                title: "Personalized Experiences",
                description:
                  "Private guides and photography sessions that capture and elevate every moment of the trip.",
                pills: ["Private Guides", "Photography", "Local Access"],
                highlight: "Experiences shaped around your interests.",
              },
              {
                id: 4,
                accent: "gold",
                icon: Gem,
                title: "Celebrations & Milestones",
                description:
                  "Anniversary celebrations and championship celebrations planned down to the smallest detail.",
                pills: ["Anniversaries", "Championships", "Milestones"],
                highlight: "Every milestone marked in style.",
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

      {/* ── FAMILY TRAVEL WITHOUT THE STRESS ─────────────────────────── */}
      <section
        className="dmg-info-section dmg-bg-white"
        id="family-travel-without-stress"
      >
        <div className="dmg-info-container">
          <div className="dmg-info-grid">
            <div className="dmg-info-content">
              <h2 className="dmg-info-title">Family Travel Without the Stress</h2>
              <div className="dmg-info-accent"></div>

              <p className="dmg-info-lead">
                Traveling with children, grandparents, or extended family
                requires additional coordination. Every family member enjoys
                a smoother, more enjoyable vacation.
              </p>

              <div className="dmg-info-features dmg-info-features-scrollable">
                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Multiple Flight Arrivals &amp; Transfers
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Coordinated arrivals so every family member lands and
                      moves together.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Child-Friendly Accommodations
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Restaurant reservations and stays selected with children
                      in mind.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Group Excursions
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Activity scheduling that brings the whole family
                      together.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Celebration Planning &amp; Special Requests
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Every detail handled, down to the most personal
                      requests.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="dmg-info-media">
              <div className="dmg-media-wrapper">
                <img
                  src={FamilyImage}
                  alt="Multi-generational family arriving together on a private jet vacation"
                  className="dmg-media-img"
                  style={{ height: "650px" }}
                />
                <div className="dmg-media-overlay"></div>

                <div className="dmg-media-badge">
                  <span>Every Generation, One Seamless Trip</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRIVACY & DISCRETION ─────────────────────────────────────── */}
      <section
        className="ugt-components-section"
        id="privacy-and-discretion"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="ugt-components-container">
          <div className="ugt-components-header">
            <h2 className="ugt-components-title">Privacy &amp; Discretion</h2>

            <div className="adg-c-accent-line"></div>
          </div>

          <div className="ugt-components-list">
            <div className="ugt-component-row">
              <div className="ugt-component-image-wrapper">
                <div className="ugt-component-image-container">
                  <img
                    src={VillaImage}
                    alt="Private villa entrance offering complete discretion"
                    className="ugt-component-image"
                  />
                </div>
              </div>

              <div className="ugt-component-content">
                <p className="ugt-component-text">
                  Many professional athletes and public figures value privacy
                  as much as comfort. The focus is always on creating a
                  relaxed and enjoyable vacation experience.
                </p>

                <div className="ugt-questions-box">
                  <span className="ugt-questions-title">
                    Luxury travel planning can help support discretion by
                    recommending:
                  </span>

                  <ul className="ugt-questions-list">
                    {[
                      "Private Accommodations",
                      "Personalized Transportation",
                      "Quiet Luxury Properties",
                      "Flexible Itineraries",
                      "Trusted Local Partners",
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
                  Every itinerary is designed around comfort, privacy, and
                  long-term peace of mind.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRIVATE VILLAS, RESORTS & YACHT COORDINATION ─────────────── */}
      <section
        className="dmg-info-section dmg-bg-white"
        id="dmg-villas-resorts-yachts"
      >
        <div className="dmg-info-container">
          <div className="dmg-info-grid">
            {/* Left Side Image */}
            <div className="dmg-info-media">
              <div className="dmg-media-wrapper">
                <img
                  src={YachtImage}
                  alt="Private yacht anchored near a luxury resort"
                  className="dmg-media-img"
                  style={{ height: "710px" }}
                />
                <div className="dmg-media-overlay"></div>

                <div className="dmg-media-badge">
                  <span>One Seamless Itinerary</span>
                </div>
              </div>
            </div>

            {/* Right Side Content */}
            <div className="dmg-info-content">
              <h2 className="dmg-info-title">
                Private Villas, Resorts &amp; Yacht Coordination
              </h2>
              <div className="dmg-info-accent"></div>

              <p className="dmg-info-lead">
                Luxury travel often includes multiple accommodations and
                experiences. Every part of the journey is carefully connected
                into one seamless itinerary.
              </p>

              <div className="dmg-info-features dmg-info-features-scrollable">
                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Home size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Private Villas
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Spacious accommodations with personalized service.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Building2 size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Luxury Resorts
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Wellness facilities, family programs, and fine dining.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Ship size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Private Yacht Charters
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Flexible coastal exploration with professional crews.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Award size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Exclusive Residences
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Longer stays supported by dedicated staff and concierge
                      services.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DESTINATIONS PERFECT FOR PRIVATE JET TRAVEL (TABBED) ─────── */}
      <section
        className="luc-destinations-section"
        id="luc-private-jet-destinations"
      >
        <div className="luc-destinations-container">
          <div className="luc-destinations-header">
            <h2 className="luc-destinations-title">
              Destinations Perfect for Private Jet Travel
            </h2>

            <div className="adg-c-accent-line"></div>

            <p className="luc-destinations-intro">
              Private aviation makes it easier to reach destinations where
              convenience and privacy are especially valuable. Private
              aviation often makes multi-destination itineraries more
              convenient and efficient.
            </p>
          </div>

          <div className="luc-dest-layout">
            <nav className="luc-dest-nav">
              {privateJetDestinations.map((item) => {
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
                alt="Luxury travel advisor coordinating a private jet itinerary"
                className="adg-side-image"
                style={{ height: "44vh" }}
              />

              <div className="adg-info-card">
                <div className="adg-card-meta">
                  <Award size={28} />
                  <span className="adg-meta-label">Trusted Expertise</span>
                </div>

                <p className="adg-card-lead">
                  Managing a luxury vacation involving flights, accommodations,
                  transportation, and activities can quickly become complex.
                  Professional planning allows travelers to enjoy the vacation
                  while every detail is handled behind the scenes.
                </p>

                
              </div>
            </div>

            <div className="adg-list-side">
              {[
                {
                  title: "Personalized Destination Recommendations",
                  icon: <Compass size={20} />,
                },
                {
                  title: "Private Aviation Coordination",
                  icon: <Plane size={20} />,
                },
                {
                  title: "VIP Airport Assistance",
                  icon: <Luggage size={20} />,
                },
                {
                  title: "Luxury Accommodation Selection",
                  icon: <Home size={20} />,
                },
                {
                  title: "Ground Transportation Planning",
                  icon: <Car size={20} />,
                },
                {
                  title: "Concierge Support Before & During Travel",
                  icon: <Headset size={20} />,
                },
                {
                  title: "Ongoing Assistance Throughout the Journey",
                  icon: <Map size={20} />,
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

      {/* TIPS FOR PLANNING PRIVATE JET TRAVEL */}
      <section
        className="Avr-planning-section"
        id="Asc-private-jet-planning-tips"
        style={{ backgroundColor: "var(--bg-white)" }}
      >
        <div className="Asc-container">
          {/* HEADING */}
          <div className="Avr-planning-heading">
            <span className="Avr-planning-eyebrow">Planning With Purpose</span>

            <h2 className="Avr-planning-title">
              Tips for Planning Private Jet Travel
            </h2>

            <div className="Avr-planning-divider"></div>
          </div>

          {/* TWO-PANEL GRID */}
          <div className="Avr-planning-grid">
            {/* LEFT PANEL */}
            <div className="Avr-planning-left">
              <div className="Avr-planning-left-deco">&ldquo;</div>

              <h3 className="Avr-planning-left-title">
                Plan Early &amp; Keep Your Schedule Flexible
              </h3>

              <p className="Avr-planning-left-body">
                Private aviation and luxury accommodations are often in high
                demand during peak travel periods. Keeping your schedule
                flexible allows for easier adjustments if plans change, and
                choosing destinations carefully ensures each trip matches your
                travel goals and preferred pace.
              </p>

              <div className="Avr-planning-alert">
                <ShieldCheck size={18} className="Avr-planning-alert-icon" />

                <p className="Avr-planning-alert-text">
                  Expert planning helps reduce stress while creating a more
                  personalized experience from start to finish.
                </p>
              </div>
            </div>

            {/* RIGHT PANEL */}
            <div className="Avr-planning-right">
              <p className="Avr-planning-right-intro">
                A well-planned private jet vacation is built around:
              </p>

              <div className="Avr-planning-benefits-grid">
                {[
                  {
                    icon: <CalendarClock size={18} />,
                    label: "Early planning & booking",
                  },
                  {
                    icon: <Clock size={18} />,
                    label: "Flexible scheduling",
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
                    icon: <Headset size={18} />,
                    label: "Professional concierge support",
                  },
                  {
                    icon: <ShieldCheck size={18} />,
                    label: "Privacy & discretion",
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
                Expert planning ensures flights, transfers, and accommodations
                work together seamlessly, whatever your schedule requires.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRAVEL THAT ADAPTS TO YOUR SCHEDULE ─────────────────── */}
      <section className="ugt-advantage-section" id="travel-adapts-to-schedule">
        <div className="ugt-advantage-container">
          <div className="ugt-advantage-header">
            <span className="ugt-advantage-eyebrow">
              Private Jet &amp; Concierge Travel
            </span>

            <h2 className="ugt-advantage-title">
              Travel That Adapts to Your Schedule
            </h2>

            <div className="Asc-accent-line"></div>

            <p className="ugt-advantage-intro">
              Professional athletes and executives often experience changing
              schedules. Luxury travel planning emphasizes flexibility
              whenever possible, and thoughtful planning makes adapting to
              changes much easier.
            </p>
          </div>

          <div className="ugt-advantage-grid">
            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <CalendarClock size={28} strokeWidth={1.5} />
              </div>

              <h4 className="ugt-card-title">Adjustable Travel Dates</h4>

              <p className="ugt-card-desc">
                Departure and return dates that move with your schedule
                rather than against it.
              </p>
            </div>

            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <Car size={28} strokeWidth={1.5} />
              </div>

              <h4 className="ugt-card-title">Alternative Transportation</h4>

              <p className="ugt-card-desc">
                Ground, yacht, and helicopter transfer options ready as your
                plans evolve.
              </p>
            </div>

            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <Home size={28} strokeWidth={1.5} />
              </div>

              <h4 className="ugt-card-title">Flexible Accommodations</h4>

              <p className="ugt-card-desc">
                Villas, resorts, and residences selected with change in mind
                from the start.
              </p>
            </div>

            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <Map size={28} strokeWidth={1.5} />
              </div>

              <h4 className="ugt-card-title">Updated Itineraries</h4>

              <p className="ugt-card-desc">
                Itineraries revised quickly and smoothly whenever your
                schedule shifts.
              </p>
            </div>

            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <Headset size={28} strokeWidth={1.5} />
              </div>

              <h4 className="ugt-card-title">Concierge Support in Transit</h4>

              <p className="ugt-card-desc">
                Ongoing concierge support during travel keeps every detail on
                track.
              </p>
            </div>

            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <ShieldCheck size={28} strokeWidth={1.5} />
              </div>

              <h4 className="ugt-card-title">Privacy &amp; Discretion</h4>

              <p className="ugt-card-desc">
                Trusted local partners and quiet properties keep every trip
                private.
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
            The result is a vacation that feels effortless from the first
            call to the final transfer home.
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
                      icon: <Plane size={16} />,
                      label:
                        "Specialist in private aviation and concierge luxury travel for high-profile clients",
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
                  help professional athletes, executives, and high-profile
                  families plan private jet and concierge travel — from
                  aviation coordination to flawless on-the-ground execution.
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
              Everything you need to know about planning private jet and
              concierge luxury travel.
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
            alt="Private jet on the tarmac at sunset"
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
                  Ready for Travel That's as <br /> Effortless as It Is
                  Exceptional?
                </h2>
                <div className="Asc-help-accent"></div>
              </div>

              <div className="Asc-help-grid">
                <div className="Asc-help-info">
                  <p className="Asc-help-intro">
                    Connect with Angela Hughes and the expert team at Trips
                    &amp; Ships Luxury Travel for personalized guidance on
                    planning private jet and concierge luxury travel.
                  </p>

                  <p className="Asc-help-intro">
                    From private aviation and VIP airport services to luxury
                    transfers, concierge planning, and carefully coordinated
                    itineraries, expert support helps every journey come
                    together seamlessly.
                  </p>

                  <p className="Asc-help-intro">
                    Whether you're celebrating a championship, planning an
                    off-season family vacation, organizing a multi-generational
                    reunion, or embarking on a once-in-a-lifetime adventure,
                    personalized planning makes all the difference.
                  </p>

                  <div className="Asc-help-btn-container">
                    <Link
                      to="/contact"
                      className="Asc-help-cta-btn"
                      style={{ textDecoration: "none" }}
                    >
                      Start Planning Your Private Jet Journey
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
                      "Private aviation coordination",
                      "VIP airport & lounge arrangements",
                      "Luxury ground transportation planning",
                      "Personalized concierge itineraries",
                      "Privacy & discretion planning",
                      "Family-focused travel coordination",
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
                    professional athletes, executives, and high-profile
                    families create highly personalized private jet and
                    concierge travel experiences worldwide.
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

export default PrivateJetConciergeTravel;