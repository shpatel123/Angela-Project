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
  Mountain,
  Headset,
  Map,
  ShieldCheck,
  Plane,
  Car,
  Home,
  Luggage,
  Clock,
  Palmtree,
  Camera,
  HeartHandshake,
  Trophy,
  Wine,
  Sun,
  Landmark,
} from "lucide-react";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela3.jpeg";

import HeroImage1 from "../../assets/PrivateJetConciergeTravel/travel-during-the-competitive-season-professional-athlete-luxury-hotel.webp";
import HeroImage2 from "../../assets/PrivateJetConciergeTravel/luxury-wellness-recovery-travel-professional-athlete.webp";
import HeroImage3 from "../../assets/PrivateJetConciergeTravel/family-concierge-travel-services-luxury-family-arrival.webp";
import DifferentApproachImage from "../../assets/PrivateJetConciergeTravel/private-jet-concierge-travel-luxury-professional-athlete.webp";
import BucketCaribbean from "../../assets/CaribbeanCruisesExploraJourneys/private-exclusive-caribbean-island.jpg";
import BucketNapa from "../../assets/PrivateJetConciergeTravel/luxury-wellness-recovery-travel-poolside-retreat.webp";
import BucketAspen from "../../assets/AlaskaCruisesExploraJourneys/explora-journeys-alaska-coastal-mountain-landscape.jpg";
import BucketSouthFlorida from "../../assets/CaribbeanCruisesExploraJourneys/explora-caribbean-beach-aerial.jpg";
import BucketScottsdale from "../../assets/WhatIsIncludedDisneyCruise/senses-spa-relaxation-disney-cruise.jpg";
import BucketEurope from "../../assets/LuxuryAlumniTravel/paris-luxury-travelers-eiffel-tower-riverside-cultural-experience.jpg";
import ConciergeImage from "../../assets/PrivateJetConciergeTravel/multigenerational-travel-professional-athletes-luxury-family-villa.webp";
import AirportImage from "../../assets/PrivateJetConciergeTravel/vip-airport-meet-and-greet-concierge-service.webp";
import GroundImage from "../../assets/PrivateJetConciergeTravel/off-season-luxury-travel-professional-athletes-private-villa-retreat.webp";
import FamilyImage from "../../assets/PrivateJetConciergeTravel/luxury-wellness-recovery-travel-professional-athlete-family.webp";
import VillaImage from "../../assets/PrivateJetConciergeTravel/private-villas-yachts-exclusive-resorts-luxury-superyacht.webp";
import InsuranceImage from "../../assets/PrivateJetConciergeTravel/family-concierge-travel-services-luxury-family-arrival.webp";
import AdvisorImage from "../../assets/PrivateJetConciergeTravel/luxury-safari-expeditions-bucket-list-adventures-professional-athlete.webp";
import CtaImage from "../../assets/PrivateJetConciergeTravel/private-villas-yachts-exclusive-resorts-luxury-yacht-group..webp";

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
        "Luxury travel agency specializing in flexible travel planning for professional athletes, including last-minute luxury vacations, private aviation, and concierge coordination built around unpredictable competitive schedules.",
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
      name: "Traveling During the Competitive Season",
      url: "https://tripsandships.com/traveling-during-the-competitive-season",
      description:
        "Discover flexible luxury travel planning for professional athletes. Learn how private travel advisors coordinate last-minute vacations, changing schedules, playoffs, training camps, family commitments, and luxury getaways with complete flexibility.",
    },
    {
      "@type": "Service",
      serviceType: "Flexible Luxury Travel Planning for Professional Athletes",
      provider: {
        "@type": "TravelAgency",
        name: "Trips & Ships Luxury Travel",
      },
      areaServed: "Worldwide",
      description:
        "Concierge-level luxury travel planning built around unpredictable competitive schedules, including last-minute bookings, private aviation, flexible accommodations, and personalized itineraries for professional athletes and their families.",
    },
    {
      "@type": "Article",
      headline: "Traveling During the Competitive Season",
      description:
        "A complete guide to flexible luxury travel for professional athletes, covering last-minute travel, private aviation, adaptable accommodations, playoff planning, family travel, and short-getaway destinations.",
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
          name: "Professional Athlete Travel",
          item: "https://tripsandships.com/professional-athlete-travel",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Traveling During the Competitive Season",
          item: "https://tripsandships.com/traveling-during-the-competitive-season",
        },
      ],
    },
    {
      "@type": "ItemList",
      name: "Services Included in Flexible Athlete Travel Planning",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Last-Minute Luxury Travel",
          description:
            "Resort escapes, private villas, yacht charters, and getaways arranged with limited notice at the highest luxury standard.",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Private Aviation Coordination",
          description:
            "Flexible departure times, direct flights, and easy schedule changes built around a changing competitive calendar.",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Adaptable Accommodations",
          description:
            "Properties selected for flexible cancellation policies, late check-in, and extended stay availability.",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Playoff & Championship Planning",
          description:
            "Proactive monitoring of playoff scenarios with flexible arrival dates and protected reservations.",
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Family Travel Coordination",
          description:
            "Weekend escapes, holiday vacations, and multigenerational trips designed around available windows of time.",
        },
      ],
    },
    {
      "@type": "TouristTrip",
      name: "Flexible Luxury Vacation for Professional Athletes",
      provider: {
        "@type": "Organization",
        name: "Trips & Ships Luxury Travel",
      },
      touristType:
        "Professional athletes and their families seeking flexible, last-minute, and privacy-focused luxury travel around a competitive schedule",
    },
    {
      "@type": "LocalBusiness",
      name: "Trips & Ships Flexible Athlete Travel Planning",
      description:
        "Personalized planning for last-minute luxury travel, private aviation, flexible accommodations, and concierge support for professional athletes.",
    },
    {
      "@type": "Review",
      itemReviewed: {
        "@type": "Service",
        name: "Traveling During the Competitive Season",
      },
      author: {
        "@type": "Person",
        name: "Angela Hughes",
      },
      reviewBody:
        "When your time away is limited, every moment should be extraordinary — and that starts with a travel plan built to move with your schedule.",
    },
    {
      "@type": "AboutPage",
      name: "About Traveling During the Competitive Season",
      description:
        "Learn how flexible luxury travel planning helps professional athletes make the most of short breaks, last-minute opportunities, and changing schedules.",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Can you plan travel around my competition schedule?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Every itinerary is customized around your season, tournaments, training camps, and family commitments.",
          },
        },
        {
          "@type": "Question",
          name: "Do you specialize in last-minute travel?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. We frequently arrange luxury vacations with limited notice while maintaining exceptional quality and service.",
          },
        },
        {
          "@type": "Question",
          name: "Can you arrange private jet travel?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. We coordinate private aviation, luxury ground transportation, and VIP airport services worldwide.",
          },
        },
        {
          "@type": "Question",
          name: "What happens if my schedule changes?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Our team manages changes to flights, accommodations, transportation, and activities whenever possible, minimizing disruption to your plans.",
          },
        },
        {
          "@type": "Question",
          name: "Can my family join me on short trips?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Many itineraries are designed specifically for family travel during brief breaks in the competitive season.",
          },
        },
        {
          "@type": "Question",
          name: "Do you recommend travel insurance?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Flexible travel protection can provide valuable coverage when athletic schedules change unexpectedly.",
          },
        },
        {
          "@type": "Question",
          name: "How far in advance should I begin planning?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Even if travel dates are uncertain, early planning allows us to secure preferred accommodations while maintaining flexibility.",
          },
        },
        {
          "@type": "Question",
          name: "Can you help with international travel?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. We coordinate passports, visas, transportation, luxury accommodations, and destination logistics around the world.",
          },
        },
        {
          "@type": "Question",
          name: "Do you offer concierge services while I'm traveling?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Our advisors remain available throughout your trip to assist with itinerary adjustments, reservations, and unexpected changes.",
          },
        },
        {
          "@type": "Question",
          name: "Why choose Trips & Ships Luxury Travel?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We understand the unique demands of professional sports and specialize in flexible luxury travel solutions that adapt to your schedule while delivering exceptional service and unforgettable experiences.",
          },
        },
      ],
    },
  ],
};

/* ── Data: Short-getaway destinations (tabbed panel) ─────────────── */
const privateJetDestinations = [
  {
    id: "caribbean",
    title: "Caribbean Islands",
    badge: "Caribbean",
    icon: Palmtree,
    image: BucketCaribbean,
    window: "Warm-weather relaxation and beachfront luxury",
    desc: "Perfect for warm-weather relaxation and beachfront luxury, the Caribbean is an easy reach for a short break between games.",
    columns: [
      {
        label: "Plan Around:",
        items: [
          "Beachfront Resort Stays",
          "Private Villa Escapes",
          "Short Direct Flights",
        ],
      },
    ],
    themeLabel: "Warm-Weather Reset",
    themeText:
      "A few days of sun and beachfront luxury make the Caribbean a favorite quick escape between competitions.",
  },
  {
    id: "napa",
    title: "Napa Valley",
    badge: "Napa Valley",
    icon: Wine,
    image: BucketNapa,
    window: "Wine tasting, fine dining, and luxury resorts",
    desc: "Wine tasting, fine dining, and luxury resorts make Napa Valley an ideal short getaway for relaxing away from the spotlight.",
    columns: [
      {
        label: "Plan Around:",
        items: [
          "Private Vineyard Tastings",
          "Fine Dining Reservations",
          "Luxury Resort Stays",
        ],
      },
    ],
    themeLabel: "Wine Country, Unwind",
    themeText:
      "Napa Valley offers a quiet, close-to-home luxury reset that fits neatly into a short break in the schedule.",
  },
  {
    id: "aspen",
    title: "Aspen",
    badge: "Aspen",
    icon: Mountain,
    image: BucketAspen,
    window: "Mountain scenery, wellness, and year-round recreation",
    desc: "Mountain scenery, wellness, and year-round recreation make Aspen a versatile destination no matter the season.",
    columns: [
      {
        label: "Plan Around:",
        items: [
          "Mountain Wellness Retreats",
          "Year-Round Recreation",
          "Private Chalet Stays",
        ],
      },
    ],
    themeLabel: "Recharge in the Mountains",
    themeText:
      "Aspen's mix of scenery and wellness offerings make it an easy fit for a quick recovery-focused getaway.",
  },
  {
    id: "south-florida",
    title: "South Florida",
    badge: "S. Florida",
    icon: Sun,
    image: BucketSouthFlorida,
    window: "Luxury beach resorts, golf, and waterfront dining",
    desc: "Luxury beach resorts, golf, and waterfront dining make South Florida a convenient warm-weather escape close to home.",
    columns: [
      {
        label: "Plan Around:",
        items: [
          "Luxury Beach Resorts",
          "Golf & Waterfront Dining",
          "Convenient Regional Access",
        ],
      },
    ],
    themeLabel: "Close-to-Home Luxury",
    themeText:
      "South Florida's easy access and warm-weather resorts make it a natural choice for a short, low-hassle break.",
  },
  {
    id: "scottsdale",
    title: "Scottsdale",
    badge: "Scottsdale",
    icon: Landmark,
    image: BucketScottsdale,
    window: "Golf, spa experiences, and desert luxury",
    desc: "Golf, spa experiences, and desert luxury make Scottsdale a relaxing choice for a few days away from competition.",
    columns: [
      {
        label: "Plan Around:",
        items: [
          "Desert Spa Experiences",
          "Golf Course Access",
          "Luxury Resort Stays",
        ],
      },
    ],
    themeLabel: "Desert Luxury, Quick Escape",
    themeText:
      "Scottsdale's spa and golf resorts offer a relaxed pace that suits even the shortest breaks in the schedule.",
  },
  {
    id: "europe",
    title: "Europe",
    badge: "Europe",
    icon: Landmark,
    image: BucketEurope,
    window: "Quick city escapes to London, Paris, or Rome",
    desc: "Quick city escapes to London, Paris, or Rome are made possible via private aviation, even within a narrow travel window.",
    columns: [
      {
        label: "Plan Around:",
        items: [
          "Direct Private Aviation Routing",
          "Iconic City Stopovers",
          "Efficient Multi-Day Itineraries",
        ],
      },
    ],
    themeLabel: "City Escapes, Simplified",
    themeText:
      "Private aviation trims travel time to Europe's most iconic cities, making even a brief window feel worthwhile.",
  },
];

/* ── FAQ Component ─────────────────────────────────────────────── */
function FAQ() {
  const [open, setOpen] = useState(null);

  const faqData = [
    {
      q: "Can you plan travel around my competition schedule?",
      a: "Yes. Every itinerary is customized around your season, tournaments, training camps, and family commitments.",
    },
    {
      q: "Do you specialize in last-minute travel?",
      a: "Absolutely. We frequently arrange luxury vacations with limited notice while maintaining exceptional quality and service.",
    },
    {
      q: "Can you arrange private jet travel?",
      a: "Yes. We coordinate private aviation, luxury ground transportation, and VIP airport services worldwide.",
    },
    {
      q: "What happens if my schedule changes?",
      a: "Our team manages changes to flights, accommodations, transportation, and activities whenever possible, minimizing disruption to your plans.",
    },
    {
      q: "Can my family join me on short trips?",
      a: "Yes. Many itineraries are designed specifically for family travel during brief breaks in the competitive season.",
    },
    {
      q: "Do you recommend travel insurance?",
      a: "Yes. Flexible travel protection can provide valuable coverage when athletic schedules change unexpectedly.",
    },
    {
      q: "How far in advance should I begin planning?",
      a: "Even if travel dates are uncertain, early planning allows us to secure preferred accommodations while maintaining flexibility.",
    },
    {
      q: "Can you help with international travel?",
      a: "Yes. We coordinate passports, visas, transportation, luxury accommodations, and destination logistics around the world.",
    },
    {
      q: "Do you offer concierge services while I'm traveling?",
      a: "Yes. Our advisors remain available throughout your trip to assist with itinerary adjustments, reservations, and unexpected changes.",
    },
    {
      q: "Why choose Trips & Ships Luxury Travel?",
      a: "We understand the unique demands of professional sports and specialize in flexible luxury travel solutions that adapt to your schedule while delivering exceptional service and unforgettable experiences.",
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
const TravelingDuringTheCompetitiveSeason = () => {
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
          Traveling During the Competitive Season | Flexible Luxury Travel
          for Professional Athletes
        </title>
        <meta name="title" content="Traveling During the Competitive Season" />
        <meta
          name="description"
          content="Discover flexible luxury travel planning for professional athletes. Learn how private travel advisors coordinate last-minute vacations, changing schedules, playoffs, training camps, family commitments, and luxury getaways with complete flexibility."
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
            Traveling During <br /> the Competitive Season
          </h1>

          <p>
            For most travelers, vacations are planned months in advance with
            fixed dates and confirmed itineraries. Professional athletes,
            however, live by an entirely different calendar. Game schedules
            shift, playoff appearances extend seasons, training camps begin
            unexpectedly, and family commitments often need to fit into
            narrow windows between competitions.
          </p>

          <p>
            That's why luxury travel for athletes requires flexibility,
            precision, and expert coordination. Whether you have a three-day
            break between games, a week after a road trip, or an unexpected
            opportunity following a tournament, your travel plans should
            adapt to your schedule — not the other way around.
          </p>

          {readMore && (
            <>
              <p>
                At Trips &amp; Ships Luxury Travel, we specialize in
                designing flexible luxury travel experiences that work around
                the unpredictable demands of professional sports, ensuring
                every journey is seamless, stress-free, and ready to adjust
                whenever your schedule changes.
              </p>

              <p>
                Rather than risking expensive cancellations or complicated
                rebookings, flexible travel planning allows you to travel
                with confidence, knowing your itinerary can adapt as needed —
                whether you have 48 hours or two weeks available.
              </p>

              <p>
                With more than 40 years in the travel industry, experience
                spanning over 121 countries, and recognition as the 2024
                Luxury Travel Influencer of the Year by Travel Leaders
                Network, Angela Hughes has become one of the most trusted
                voices in flexible luxury travel for professional athletes.
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
      <section className="adg-c-section adg-c-bg-white" id="adg-c-why-flexible-planning">
        <div className="adg-c-container">
          <div className="adg-c-section-header">
            <h2 className="adg-c-h2">
              Why Athletes Need Flexible Travel Planning
            </h2>
            <div className="adg-c-accent-line"></div>
            <p className="Asc-section-intro">
              Competitive seasons rarely follow a predictable path. Rather
              than risking expensive cancellations or complicated rebookings,
              flexible travel planning allows you to travel with confidence.
            </p>
          </div>

          <div className="adg-c-overview-layout">
            <div className="adg-c-overview-icons">
              {[
                "Playoff qualification",
                "Championship games",
                "Tournament advancement",
                "Weather delays",
                "Schedule adjustments",
                "Team obligations",
                "Training camps",
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
                    Your schedule may also shift because of media appearances,
                    sponsorship commitments, or family events. Your travel
                    plans should adapt as needed, knowing your itinerary can
                    change whenever your schedule does.
                  </p>
                </div>
              </div>

              <div className="adg-c-overview-image-wrap">
                <img
                  src={DifferentApproachImage}
                  alt="Professional athlete boarding a private jet between games"
                  className="adg-c-overview-img"
                />
                <div className="adg-c-overview-img-overlay">
                  <span className="adg-c-overview-img-label">
                    Travel Built Around Your Season
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRAVEL BUILT AROUND YOUR SCHEDULE & LAST-MINUTE LUXURY TRAVEL */}
      <section
        className="Ejsc-ent-section"
        id="Ejsc-schedule-and-last-minute"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="Ejsc-container">
          <div className="Ejsc-section-header">
            <h2 className="Ejsc-section-title">
              Travel Built Around Your Schedule
            </h2>
            <div className="Asc-accent-line"></div>
            <p className="Ejsc-section-subtitle">
              Every athlete's calendar is unique. Whether you have 48 hours
              or two weeks available, we'll maximize every moment of your
              time away.
            </p>
          </div>

          <div className="Ejsc-ent-grid">
            {/* Travel Built Around Your Schedule Card */}
            <div className="Ejsc-ent-card Ejsc-explora-card">
              <div className="Ejsc-card-header">
                <div className="Ejsc-card-icon-wrap">
                  <CalendarClock size={24} className="Ejsc-card-icon" />
                </div>
                <h3 className="Ejsc-card-title">
                  Designed Around Your Calendar
                </h3>
              </div>

              <p className="Ejsc-card-intro">
                Itineraries are built to accommodate however much time you
                have, from a quick break to an extended window away.
              </p>

              <ul className="Ejsc-feature-list">
                {[
                  "Short breaks between games",
                  "Extended road trips",
                  "Bye weeks & All-Star breaks",
                  "Tournament windows",
                  "International competitions",
                  "Training camps & family holidays",
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
                  Whatever your available window, we'll maximize every moment
                  of your time away.
                </p>
              </div>
            </div>

            {/* Last-Minute Luxury Travel Card */}
            <div className="Ejsc-ent-card Ejsc-seabourn-card">
              <div className="Ejsc-card-header">
                <div className="Ejsc-card-icon-wrap">
                  <Sparkles size={24} className="Ejsc-card-icon" />
                </div>
                <h3 className="Ejsc-card-title">Last-Minute Luxury Travel</h3>
              </div>

              <p className="Ejsc-card-intro">
                Sometimes the best opportunities happen with very little
                notice. Even then, every detail is managed to the highest
                luxury standards.
              </p>

              <ul className="Ejsc-feature-list">
                {[
                  "Luxury resort escapes & private villas",
                  "Yacht charters & luxury cruises",
                  "Safari adventures & wellness retreats",
                  "European city breaks & beach vacations",
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
                  Even when travel plans come together quickly, a dedicated
                  advisor ensures every detail works together effortlessly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRIVATE AVIATION FOR MAXIMUM FLEXIBILITY ─────────────────── */}
      <section className="wnf-section wnf-bg-white" id="private-aviation-flexibility">
        <div className="wnf-container">
          <div className="wnf-section-header">
            <h2 className="wnf-h2">Private Aviation for Maximum Flexibility</h2>
            <div className="wnf-accent-line"></div>
          </div>

          <div className="wnf-split">
            <div className="wnf-image-column">
              <div className="wnf-image-stack">
                <div className="wnf-img-frame wnf-frame-primary">
                  <img
                    src={HeroImage2}
                    alt="Private jet ready for a flexible departure"
                    className="wnf-photo"
                  />
                </div>

                <div className="wnf-img-frame wnf-frame-secondary">
                  <img
                    src={AirportImage}
                    alt="Athlete boarding a private jet on a tight schedule"
                    className="wnf-photo"
                  />
                </div>
              </div>
            </div>

            <div className="wnf-content-column">
              <div className="wnf-block">
                <p className="wnf-lead-text">
                  Commercial airline schedules don't always align with the
                  demands of professional sports. Private charter flights
                  allow athletes to maximize valuable time with family while
                  minimizing travel stress.
                </p>

                <ul className="wnf-feature-list">
                  {[
                    "Flexible departure times",
                    "Direct flights",
                    "Reduced travel time",
                    "Greater privacy",
                    "Personalized service",
                    "Convenient airport access & easy schedule changes",
                  ].map((feature, i) => (
                    <li key={i} className="wnf-feature-item">
                      <div className="wnf-icon-wrapper">
                        <Plane size={14} />
                      </div>
                      <span className="wnf-feature-text">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="wnf-footer-note">
                <p className="wnf-highlight-text">
                  Private charter flights allow athletes to maximize valuable
                  time with family while minimizing travel stress, no matter
                  how the schedule shifts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LUXURY ACCOMMODATIONS THAT ADAPT & PLAYOFF PLANNING */}
      <section className="azs-suites-section" id="azs-accommodations-playoffs">
        <div className="azs-container">
          <div className="azs-section-header">
            <h2 className="azs-section-title">
              Luxury Accommodations That <br /> Adapt to Your Season
            </h2>
            <div className="azs-section-accent"></div>
            <p className="azs-section-subtitle">
              Choosing the right accommodations is essential when schedules
              are uncertain — flexibility remains a priority throughout.
            </p>
          </div>

          <div className="azs-suites-grid">
            {/* Luxury Accommodations Card */}
            <div className="azs-suites-card azs-seabourn-suites">
              <div className="azs-suites-image-wrap">
                <img
                  src={GroundImage}
                  alt="Luxury hotel suite with flexible late check-in"
                  className="azs-suites-img"
                />
                <span className="azs-suites-image-badge">
                  Flexibility First
                </span>
              </div>

              <div className="azs-suites-content">
                <div className="azs-suites-card-header">
                  <div className="azs-suites-icon-circle">
                    <Home size={24} className="azs-suites-icon" />
                  </div>
                  <h3 className="azs-suites-title">
                    Accommodations That Adapt
                  </h3>
                </div>

                <p className="azs-suites-intro">
                  Whether staying in a luxury hotel, private villa, or
                  exclusive resort, flexibility remains a priority when
                  schedules are uncertain.
                </p>

                <div className="azs-suites-body">
                  <h4 className="azs-suites-group-title">
                    We recommend properties with:
                  </h4>

                  <ul className="azs-suites-list">
                    {[
                      "Flexible cancellation policies",
                      "Late check-in options",
                      "Extended stay availability",
                      "Private entrances & spacious accommodations",
                      "Concierge & family-friendly amenities",
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
                      Every property is chosen with an uncertain schedule in
                      mind, so change never means disruption.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Playoff & Championship Planning Card */}
            <div className="azs-suites-card azs-azamara-suites">
              <div className="azs-suites-image-wrap">
                <img
                  src={ConciergeImage}
                  alt="Concierge advisor monitoring playoff travel scenarios"
                  className="azs-suites-img"
                />
                <span className="azs-suites-image-badge">
                  Protecting Every Scenario
                </span>
              </div>

              <div className="azs-suites-content">
                <div className="azs-suites-card-header">
                  <div className="azs-suites-icon-circle">
                    <Trophy size={24} className="azs-suites-icon" />
                  </div>
                  <h3 className="azs-suites-title">
                    Planning Around Playoffs &amp; Championships
                  </h3>
                </div>

                <p className="azs-suites-intro">
                  One of the biggest challenges for athletes is planning
                  travel before knowing exactly when the season will end.
                </p>

                <div className="azs-suites-body">
                  <h4 className="azs-suites-group-title">
                    We help by:
                  </h4>

                  <ul className="azs-suites-list">
                    {[
                      "Monitoring playoff scenarios",
                      "Holding preferred reservations when possible",
                      "Coordinating flexible arrival dates",
                      "Managing itinerary changes",
                      "Protecting your investment with travel coverage",
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
                      Our proactive planning allows you to focus on
                      competition while we manage the logistics.
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
            <h2 className="Leg-title">Concierge Support Every Step of the Way</h2>
            <div className="adg-c-accent-line"></div>
            <p className="Leg-subtitle">
              Changing schedules require responsive service. When plans
              change, one phone call is all it takes for our team to make the
              necessary adjustments.
            </p>
          </div>

          <div className="Leg-grid">
            {[
              {
                id: 1,
                accent: "gold",
                icon: Plane,
                title: "Flight & Hotel Adjustments",
                description:
                  "Flight monitoring and hotel adjustments handled quickly whenever your schedule shifts.",
                pills: ["Flight Monitoring", "Hotel Adjustments"],
                highlight: "Changes managed before you even have to ask.",
              },
              {
                id: 2,
                accent: "navy",
                icon: Car,
                title: "Transportation & Reservations",
                description:
                  "Transportation changes and restaurant reservations coordinated around your updated plans.",
                pills: ["Transportation", "Restaurant Reservations"],
                highlight: "Every moving piece stays connected.",
              },
              {
                id: 3,
                accent: "teal",
                icon: Camera,
                title: "Excursions & Celebrations",
                description:
                  "Excursion modifications and special celebrations arranged around your available time.",
                pills: ["Excursion Modifications", "Special Celebrations"],
                highlight: "Every occasion marked, however short the trip.",
              },
              {
                id: 4,
                accent: "gold",
                icon: Luggage,
                title: "Luggage & Emergency Support",
                description:
                  "Luggage coordination and emergency assistance available whenever you need them.",
                pills: ["Luggage Coordination", "Emergency Assistance"],
                highlight: "One phone call is all it takes.",
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
              <h2 className="dmg-info-title">Family Travel During the Season</h2>
              <div className="dmg-info-accent"></div>

              <p className="dmg-info-lead">
                Balancing professional commitments with family time can be
                challenging. We create travel experiences that allow athletes
                to reconnect with loved ones whenever opportunities arise.
              </p>

              <div className="dmg-info-features dmg-info-features-scrollable">
                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Weekend Resort Escapes
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Short trips designed to make the most of a quick break.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      School Holiday &amp; Theme Park Vacations
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Family-friendly stays timed around school schedules.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Multigenerational Family Trips
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
                      Holiday Celebrations &amp; Beach Retreats
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Every itinerary customized around your available time.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="dmg-info-media">
              <div className="dmg-media-wrapper">
                <img
                  src={FamilyImage}
                  alt="Family reuniting during a short break in the competitive season"
                  className="dmg-media-img"
                  style={{ height: "650px" }}
                />
                <div className="dmg-media-overlay"></div>

                <div className="dmg-media-badge">
                  <span>Every Family Reunion, Perfectly Timed</span>
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
                    We arrange:
                  </span>

                  <ul className="ugt-questions-list">
                    {[
                      "Private Airport Services & VIP Terminals",
                      "Discreet Accommodations & Private Residences",
                      "Secure Transportation",
                      "Confidential Itineraries",
                      "Personal Security Coordination (When Requested)",
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

      {/* ── TRAVEL INSURANCE AND FLEXIBILITY ──────────────────────────── */}
      <section
        className="dmg-info-section dmg-bg-white"
        id="dmg-travel-insurance-flexibility"
      >
        <div className="dmg-info-container">
          <div className="dmg-info-grid">
            {/* Left Side Image */}
            <div className="dmg-info-media">
              <div className="dmg-media-wrapper">
                <img
                  src={InsuranceImage}
                  alt="Family arriving for a stress-free luxury vacation with flexible travel protection"
                  className="dmg-media-img"
                  style={{ height: "710px" }}
                />
                <div className="dmg-media-overlay"></div>

                <div className="dmg-media-badge">
                  <span>Travel With Confidence</span>
                </div>
              </div>
            </div>

            {/* Right Side Content */}
            <div className="dmg-info-content">
              <h2 className="dmg-info-title">
                Travel Insurance &amp; Flexibility
              </h2>
              <div className="dmg-info-accent"></div>

              <p className="dmg-info-lead">
                Because athletic schedules can change unexpectedly,
                comprehensive travel protection is an important part of every
                itinerary. Our advisors explain your options so you can
                travel with confidence.
              </p>

              <div className="dmg-info-features dmg-info-features-scrollable">
                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <ShieldCheck size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Trip Interruption Benefits
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Coverage that accounts for sudden schedule changes.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <CalendarClock size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Flexible Cancellation Options
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Coverage designed for an unpredictable season.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <HeartHandshake size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Medical Coverage
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Protection in place wherever your travels take you.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Headset size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      International Assistance &amp; Emergency Transportation
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Support available if plans need to change quickly.
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
        id="luc-short-getaway-destinations"
      >
        <div className="luc-destinations-container">
          <div className="luc-destinations-header">
            <h2 className="luc-destinations-title">
              Luxury Destinations for Short Getaways
            </h2>

            <div className="adg-c-accent-line"></div>

            <p className="luc-destinations-intro">
              Even a few days away can provide valuable time to relax and
              recharge. Every destination is selected based on your
              available time and travel goals.
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
      <section className="adg-section" id="adg-why-trips-and-ships">
        <div className="adg-container">
          <div className="adg-section-header" style={{ marginBottom: "60px" }}>
            <h2 className="adg-h2">Why Work with Trips &amp; Ships Luxury Travel?</h2>
            <div className="adg-accent-line"></div>
          </div>

          <div
            className="adg-split-layout"
            style={{ alignItems: "flex-start" }}
          >
            <div className="adg-content-card-side">
              <img
                src={AdvisorImage}
                alt="Travel advisor coordinating a flexible itinerary for a professional athlete"
                className="adg-side-image"
                style={{ height: "30vh", border: "1px solid var(--navy)" }}
              />

              <div className="adg-info-card">
                <div className="adg-card-meta">
                  <Award size={28} />
                  <span className="adg-meta-label">Trusted Expertise</span>
                </div>

                <p className="adg-card-lead">
                  Professional athletes require more than standard vacation
                  planning. We become your trusted travel partner, ready to
                  adapt whenever your schedule changes.
                </p>

                <div className="adg-card-divider"></div>

                <p className="adg-card-subtext">
                  Because when your time away is limited, every moment should
                  be extraordinary.
                </p>
              </div>
            </div>

            <div className="adg-list-side">
              {[
                {
                  title: "Personalized Travel Planning",
                  icon: <Compass size={20} />,
                },
                {
                  title: "Last-Minute Itinerary Management",
                  icon: <Sparkles size={20} />,
                },
                {
                  title: "Private Aviation Coordination",
                  icon: <Plane size={20} />,
                },
                {
                  title: "Luxury Accommodations",
                  icon: <Home size={20} />,
                },
                {
                  title: "Family Travel Expertise",
                  icon: <HeartHandshake size={20} />,
                },
                {
                  title: "Flexible Booking Strategies",
                  icon: <CalendarClock size={20} />,
                },
                {
                  title: "Concierge Support & Privacy-Focused Planning",
                  icon: <Headset size={20} />,
                },
                {
                  title: "Global Destination Expertise",
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
        id="Asc-competitive-season-planning-tips"
        style={{ backgroundColor: "var(--bg-white)" }}
      >
        <div className="Asc-container">
          {/* HEADING */}
          <div className="Avr-planning-heading">
            <span className="Avr-planning-eyebrow">Planning With Purpose</span>

            <h2 className="Avr-planning-title">
              Tips for Planning Travel Around the Season
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
                Even if travel dates are uncertain, early planning allows us
                to secure preferred accommodations while maintaining
                flexibility. Keeping your schedule flexible allows for easier
                adjustments if plans change, and choosing destinations
                carefully ensures each trip matches your available time.
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
              Travel Without Compromise
            </span>

            <h2 className="ugt-advantage-title">
              Travel That Adapts to Your Schedule
            </h2>

            <div className="Asc-accent-line"></div>

            <p className="ugt-advantage-intro">
              A demanding competitive schedule shouldn't prevent you from
              enjoying exceptional travel experiences. Our experienced
              advisors create personalized luxury travel experiences that
              evolve with your schedule.
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
            Because when your time away is limited, every moment should be
            extraordinary.
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
                        "Specialist in flexible luxury travel planning for professional athletes",
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
                  help professional athletes plan flexible luxury travel
                  around an unpredictable competitive schedule — from
                  last-minute bookings to flawless on-the-ground execution.
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
              Everything you need to know about planning flexible luxury
              travel around a professional athlete's competitive season.
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
            alt="Athlete departing on a flexible luxury getaway at sunset"
            className="Asc-help-bg-img"
          />
          <div className="Asc-help-overlay"></div>
        </div>

        <div className="Asc-container">
          <div className="Asc-help-card">
            <div className="Asc-help-content">
              <div className="Asc-help-header">
                <span className="Asc-help-eyebrow">
                  Flexible Luxury Travel Planning
                </span>
                <h2 className="Asc-help-h2">
                  Ready for Travel That Moves <br /> With Your Schedule?
                </h2>
                <div className="Asc-help-accent"></div>
              </div>

              <div className="Asc-help-grid">
                <div className="Asc-help-info">
                  <p className="Asc-help-intro">
                    Connect with Angela Hughes and the expert team at Trips
                    &amp; Ships Luxury Travel for personalized guidance on
                    flexible travel planning built around your competitive
                    season.
                  </p>

                  <p className="Asc-help-intro">
                    From last-minute bookings and private aviation to
                    adaptable accommodations and concierge planning, expert
                    support helps every journey come together seamlessly —
                    no matter how the schedule changes.
                  </p>

                  <p className="Asc-help-intro">
                    Whether you're planning a quick getaway between games, a
                    family vacation during a bye week, or a luxury
                    celebration after the season, personalized planning
                    makes all the difference.
                  </p>

                  <div className="Asc-help-btn-container">
                    <Link
                      to="/contact"
                      className="Asc-help-cta-btn"
                      style={{ textDecoration: "none" }}
                    >
                      Start Planning Your Flexible Getaway
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
                      "Last-minute itinerary management",
                      "Private aviation coordination",
                      "Flexible booking strategies",
                      "Luxury accommodations that adapt",
                      "Privacy-focused travel planning",
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
                    Trips &amp; Ships Luxury Travel specializes in flexible
                    luxury travel solutions that adapt to a professional
                    athlete's schedule while delivering exceptional service.
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

export default TravelingDuringTheCompetitiveSeason;