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
  Building2,
  Camera,
  HeartHandshake,
  Trophy,
  Flag,
  Ticket,
  Medal,
  Wine,
} from "lucide-react";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela2.jpeg";

import DifferentApproachImage from "../../assets/PrivateJetConciergeTravel/private-jet-concierge-travel-luxury-professional-athlete.webp";

import EventF1 from "../../assets/PrivateJetConciergeTravel/luxury-wellness-recovery-travel-professional-athlete-family.webp";
import EventWimbledon from "../../assets/DisneyBahamasCruises/disney-wish-keg-compass-pub-sports-bar-counter.jpg";
import EventMasters from "../../assets/PrivateJetConciergeTravel/luxury-wellness-recovery-travel-poolside-retreat.webp";
import EventRyderCup from "../../assets/PrivateJetConciergeTravel/private-villas-yachts-exclusive-resorts-luxury-yacht-group..webp";
import EventSuperBowl from "../../assets/PrivateJetConciergeTravel/private-jet-concierge-travel-professional-athletes.webp";
import EventWorldCup from "../../assets/PrivateJetConciergeTravel/french-polynesia-overwater-villa-luxury-private-aviation.webp";
import EventOlympics from "../../assets/PrivateJetConciergeTravel/hawaii-oceanfront-luxury-resort-private-jet-travel.webp";

import TransportImage from "../../assets/PrivateJetConciergeTravel/vip-airport-meet-and-greet-concierge-service.webp";
import GroundImage from "../../assets/PrivateJetConciergeTravel/vip-private-airport-lounge-luxury-travel-services.webp";
import AccommodationImage from "../../assets/PrivateJetConciergeTravel/travel-during-the-competitive-season-professional-athlete-luxury-hotel.webp";
import ConciergeImage from "../../assets/PrivateJetConciergeTravel/family-concierge-travel-services-luxury-family-arrival.webp";
import FamilyImage from "../../assets/PrivateJetConciergeTravel/multigenerational-travel-professional-athletes-luxury-family-villa.webp";
import AdvisorImage from "../../assets/PrivateJetConciergeTravel/off-season-luxury-travel-professional-athletes-private-villa-retreat.webp";
import CtaImage from "../../assets/PrivateJetConciergeTravel/private-villas-yachts-exclusive-resorts-luxury-superyacht.webp";

import HeroBg1 from "../../assets/PrivateJetConciergeTravel/luxury-sports-travel-experiences-private-hospitality.webp";
import HeroBg2 from "../../assets/DisneyBahamasCruises/disney-wish-the-rose-lounge-adults-only-luxury-booths.jpg";
import HeroBg3 from "../../assets/ExploraIVGuide/explora-journeys-sky-lounge-outdoor-ocean-view-deck.jpg";

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
        "Luxury travel agency specializing in VIP sporting event travel and hospitality, including premium accommodations, private transportation, and personalized concierge service for Formula 1, Wimbledon, The Masters, Ryder Cup, Super Bowl, FIFA World Cup, and the Olympic Games.",
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
      name: "Luxury Sports Travel Experiences",
      url: "https://tripsandships.com/luxury-sports-travel-experiences",
      description:
        "Experience the world's greatest sporting events with luxury travel packages featuring VIP hospitality, premium accommodations, private transportation, and personalized concierge service for Formula 1, Wimbledon, The Masters, Ryder Cup, Super Bowl, FIFA World Cup, and the Olympic Games.",
    },
    {
      "@type": "Service",
      serviceType: "Luxury Sports Travel & VIP Hospitality Planning",
      provider: {
        "@type": "TravelAgency",
        name: "Trips & Ships Luxury Travel",
      },
      areaServed: "Worldwide",
      description:
        "Concierge-level luxury travel planning built around VIP sporting event access, premium hospitality, luxury accommodations, private transportation, and personalized itineraries for the world's most prestigious sporting events.",
    },
    {
      "@type": "Article",
      headline: "Luxury Sports Travel Experiences",
      description:
        "A complete guide to luxury sports travel, covering VIP hospitality, premium accommodations, private transportation, and personalized itineraries for the world's greatest sporting events.",
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
          name: "Luxury Travel Experiences",
          item: "https://tripsandships.com/luxury-travel-experiences",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Luxury Sports Travel Experiences",
          item: "https://tripsandships.com/luxury-sports-travel-experiences",
        },
      ],
    },
    {
      "@type": "ItemList",
      name: "Sporting Events Featured in Luxury Sports Travel",
      itemListElement: [
        {
          "@type": "SportsEvent",
          position: 1,
          name: "Formula 1 Grand Prix",
        },
        {
          "@type": "SportsEvent",
          position: 2,
          name: "Wimbledon Championships",
        },
        {
          "@type": "SportsEvent",
          position: 3,
          name: "The Masters Tournament",
        },
        {
          "@type": "SportsEvent",
          position: 4,
          name: "Ryder Cup",
        },
        {
          "@type": "SportsEvent",
          position: 5,
          name: "Super Bowl",
        },
        {
          "@type": "SportsEvent",
          position: 6,
          name: "FIFA World Cup",
        },
        {
          "@type": "SportsEvent",
          position: 7,
          name: "Olympic Games",
        },
      ],
    },
    {
      "@type": "TouristTrip",
      name: "Luxury Sports Travel Experience",
      provider: {
        "@type": "Organization",
        name: "Trips & Ships Luxury Travel",
      },
      touristType:
        "Professional athletes, corporate groups, families, and sports fans seeking VIP hospitality and luxury travel around the world's premier sporting events",
    },
    {
      "@type": "LocalBusiness",
      name: "Trips & Ships Luxury Sports Travel Planning",
      description:
        "Personalized planning for VIP hospitality, luxury accommodations, private transportation, and concierge-level travel around the world's greatest sporting events.",
    },
    {
      "@type": "Review",
      itemReviewed: {
        "@type": "Service",
        name: "Luxury Sports Travel Experiences",
      },
      author: {
        "@type": "Person",
        name: "Angela Hughes",
      },
      reviewBody:
        "Watching elite athletes compete is exciting. Experiencing these iconic events with premium hospitality and personalized service makes them truly unforgettable.",
    },
    {
      "@type": "AboutPage",
      name: "About Luxury Sports Travel Experiences",
      description:
        "Learn how VIP hospitality, premium accommodations, and concierge planning transform the world's greatest sporting events into unforgettable luxury travel experiences.",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What sporting events do you specialize in?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We plan luxury travel experiences for Formula 1, Wimbledon, The Masters, Ryder Cup, Super Bowl, FIFA World Cup, Olympic Games, and many other prestigious sporting events.",
          },
        },
        {
          "@type": "Question",
          name: "Can you arrange VIP hospitality packages?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. We work with trusted partners to provide premium hospitality experiences whenever available.",
          },
        },
        {
          "@type": "Question",
          name: "Do you offer private transportation?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. We can arrange private jets, luxury vehicles, chauffeur services, helicopter transfers, and VIP airport assistance.",
          },
        },
        {
          "@type": "Question",
          name: "Can you customize my itinerary?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Every trip is fully customized based on your preferred events, accommodations, dining, sightseeing, and travel style.",
          },
        },
        {
          "@type": "Question",
          name: "Can families travel together?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. We regularly design sports travel experiences for couples, families, friends, and multigenerational groups.",
          },
        },
        {
          "@type": "Question",
          name: "How far in advance should I book?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Major events such as the Super Bowl, Olympic Games, FIFA World Cup, Wimbledon, and The Masters often require planning 12–24 months in advance.",
          },
        },
        {
          "@type": "Question",
          name: "Can you combine sporting events with sightseeing?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Many travelers extend their trips with cultural tours, luxury cruises, safaris, golf vacations, or private resort stays.",
          },
        },
        {
          "@type": "Question",
          name: "Are these experiences suitable for corporate entertaining?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. Luxury sports travel is an excellent option for executive retreats, client appreciation events, and incentive travel.",
          },
        },
        {
          "@type": "Question",
          name: "Do you coordinate luxury accommodations?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. We recommend and reserve exceptional hotels, resorts, villas, and private residences based on your preferences.",
          },
        },
        {
          "@type": "Question",
          name: "Why book through Trips & Ships Luxury Travel?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Our expertise, global partnerships, personalized service, and attention to detail ensure a seamless luxury travel experience from planning through your return home.",
          },
        },
      ],
    },
  ],
};

/* ── Data: Sporting event destinations (tabbed panel) ────────────── */
const sportsEvents = [
  {
    id: "formula1",
    title: "Formula 1 Grand Prix Experiences",
    badge: "Formula 1",
    icon: Flag,
    image: EventF1,
    window: "Paddock Club access, pit lane walks, and luxury yacht viewing",
    desc: "Formula 1 combines world-class motorsport with luxury travel unlike any other sporting event.",
    columns: [
      {
        label: "Popular Destinations Include:",
        items: [
          "Monaco Grand Prix",
          "Italian Grand Prix",
          "British Grand Prix",
          "Abu Dhabi Grand Prix",
          "Singapore Grand Prix",
          "Miami Grand Prix",
          "Las Vegas Grand Prix",
          "Japanese Grand Prix",
        ],
      },
      {
        label: "Luxury Experiences May Include:",
        items: [
          "Paddock Club Access",
          "Pit Lane Walks",
          "Team Hospitality",
          "Luxury Yacht Viewing",
          "Driver Appearances",
          "Five-Star Hotels",
          "Private Transfers",
          "Gourmet Dining",
        ],
      },
    ],
    themeLabel: "Speed, Sophistication & Glamour",
    themeText:
      "Formula 1 weekends are ideal for travelers seeking excitement, sophistication, and international glamour.",
  },
  {
    id: "wimbledon",
    title: "Wimbledon Championships",
    badge: "Wimbledon",
    icon: Trophy,
    image: EventWimbledon,
    window: "Centre Court tickets, debenture seating, and champagne receptions",
    desc: "The Championships at Wimbledon represent one of the world's most prestigious sporting traditions.",
    columns: [
      {
        label: "Luxury Wimbledon Experiences Include:",
        items: [
          "Centre Court Tickets",
          "Debenture Seating",
          "VIP Hospitality",
          "Gourmet Dining",
          "Champagne Receptions",
          "Luxury London Accommodations",
          "Private Transfers",
          "Personalized Concierge Services",
        ],
      },
    ],
    themeLabel: "Tradition Meets Luxury",
    themeText:
      "Combine your Wimbledon experience with private tours, fine dining, West End theatre, and luxury shopping throughout London.",
  },
  {
    id: "masters",
    title: "The Masters Tournament",
    badge: "The Masters",
    icon: Medal,
    image: EventMasters,
    window: "Premium tournament access and golf experiences at Augusta National",
    desc: "Attending The Masters at Augusta National is a dream for golf enthusiasts around the world.",
    columns: [
      {
        label: "Luxury Masters Experiences May Feature:",
        items: [
          "Premium Tournament Access",
          "Hospitality Packages",
          "Luxury Accommodations",
          "Private Transportation",
          "Fine Dining Reservations",
          "Golf Experiences Before or After the Tournament",
          "Concierge Services",
        ],
      },
    ],
    themeLabel: "A Dream for Golf Enthusiasts",
    themeText:
      "Whether entertaining clients or enjoying a personal golf getaway, The Masters delivers an unforgettable sporting experience.",
  },
  {
    id: "ryder-cup",
    title: "Ryder Cup Luxury Travel",
    badge: "Ryder Cup",
    icon: Flag,
    image: EventRyderCup,
    window: "Premium match tickets and championship dinners",
    desc: "The Ryder Cup combines elite golf with incredible international atmosphere.",
    columns: [
      {
        label: "Luxury Travel Packages May Include:",
        items: [
          "Premium Match Tickets",
          "Hospitality Suites",
          "Luxury Hotels",
          "Private Airport Transfers",
          "Championship Dinners",
          "Local Sightseeing",
          "Customized Itineraries",
        ],
      },
    ],
    themeLabel: "Elite Golf, International Atmosphere",
    themeText:
      "Extend your trip with rounds at legendary golf courses and exclusive cultural experiences.",
  },
  {
    id: "super-bowl",
    title: "Super Bowl VIP Experiences",
    badge: "Super Bowl",
    icon: Trophy,
    image: EventSuperBowl,
    window: "Club-level seating, luxury suites, and VIP pre-game parties",
    desc: "The Super Bowl is one of the world's premier sporting and entertainment events.",
    columns: [
      {
        label: "Luxury Packages Often Include:",
        items: [
          "Club-Level Seating",
          "Luxury Suites",
          "VIP Pre-Game Parties",
          "Celebrity Events",
          "Five-Star Accommodations",
          "Private Transportation",
          "Fine Dining",
          "Dedicated Concierge Support",
        ],
      },
    ],
    themeLabel: "Championship Celebrations",
    themeText:
      "It's the perfect destination for championship celebrations, corporate hospitality, or unforgettable family experiences.",
  },
  {
    id: "world-cup",
    title: "FIFA World Cup Luxury Travel",
    badge: "FIFA World Cup",
    icon: Trophy,
    image: EventWorldCup,
    window: "Premium match tickets and multi-city itineraries",
    desc: "The FIFA World Cup brings together fans from around the globe for the world's most celebrated football tournament.",
    columns: [
      {
        label: "Luxury Experiences May Include:",
        items: [
          "Premium Match Tickets",
          "VIP Hospitality",
          "Luxury Accommodations",
          "Private Transportation",
          "Multi-City Itineraries",
          "Cultural Tours",
          "Concierge Assistance",
          "Exclusive Events",
        ],
      },
    ],
    themeLabel: "The World's Game, Globally Experienced",
    themeText:
      "Travelers can combine tournament matches with unforgettable sightseeing throughout the host country.",
  },
  {
    id: "olympics",
    title: "Olympic Games Experiences",
    badge: "Olympics",
    icon: Medal,
    image: EventOlympics,
    window: "Premium event tickets and VIP hospitality lounges",
    desc: "The Olympic Games offer a unique opportunity to witness the world's greatest athletes competing on the biggest stage.",
    columns: [
      {
        label: "Luxury Olympic Travel Includes:",
        items: [
          "Premium Event Tickets",
          "VIP Hospitality Lounges",
          "Luxury Hotels",
          "Private Transportation",
          "Cultural Experiences",
          "Guided Sightseeing",
          "Exclusive Dining",
          "Personalized Concierge Support",
        ],
      },
    ],
    themeLabel: "The Biggest Stage in Sport",
    themeText:
      "Whether attending the Summer or Winter Games, every itinerary is customized around your interests.",
  },
];

/* ── FAQ Component ─────────────────────────────────────────────── */
function FAQ() {
  const [open, setOpen] = useState(null);

  const faqData = [
    {
      q: "What sporting events do you specialize in?",
      a: "We plan luxury travel experiences for Formula 1, Wimbledon, The Masters, Ryder Cup, Super Bowl, FIFA World Cup, Olympic Games, and many other prestigious sporting events.",
    },
    {
      q: "Can you arrange VIP hospitality packages?",
      a: "Yes. We work with trusted partners to provide premium hospitality experiences whenever available.",
    },
    {
      q: "Do you offer private transportation?",
      a: "Absolutely. We can arrange private jets, luxury vehicles, chauffeur services, helicopter transfers, and VIP airport assistance.",
    },
    {
      q: "Can you customize my itinerary?",
      a: "Every trip is fully customized based on your preferred events, accommodations, dining, sightseeing, and travel style.",
    },
    {
      q: "Can families travel together?",
      a: "Yes. We regularly design sports travel experiences for couples, families, friends, and multigenerational groups.",
    },
    {
      q: "How far in advance should I book?",
      a: "Major events such as the Super Bowl, Olympic Games, FIFA World Cup, Wimbledon, and The Masters often require planning 12–24 months in advance.",
    },
    {
      q: "Can you combine sporting events with sightseeing?",
      a: "Yes. Many travelers extend their trips with cultural tours, luxury cruises, safaris, golf vacations, or private resort stays.",
    },
    {
      q: "Are these experiences suitable for corporate entertaining?",
      a: "Absolutely. Luxury sports travel is an excellent option for executive retreats, client appreciation events, and incentive travel.",
    },
    {
      q: "Do you coordinate luxury accommodations?",
      a: "Yes. We recommend and reserve exceptional hotels, resorts, villas, and private residences based on your preferences.",
    },
    {
      q: "Why book through Trips & Ships Luxury Travel?",
      a: "Our expertise, global partnerships, personalized service, and attention to detail ensure a seamless luxury travel experience from planning through your return home.",
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
const LuxurySportsTravelExperiences = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [readMore, setReadMore] = useState(false);
  const [activeEvent, setActiveEvent] = useState("formula1");
  const [hovered, setHovered] = useState(null);

  const currentEvent =
    sportsEvents.find((d) => d.id === activeEvent) || sportsEvents[0];
  const ActiveEventIcon = currentEvent.icon;

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
          Luxury Sports Travel Experiences | VIP Sporting Event Travel &amp;
          Hospitality
        </title>
        <meta name="title" content="Luxury Sports Travel Experiences" />
        <meta
          name="description"
          content="Experience the world's greatest sporting events with luxury travel packages featuring VIP hospitality, premium accommodations, private transportation, and personalized concierge service for Formula 1, Wimbledon, The Masters, Ryder Cup, Super Bowl, FIFA World Cup, and the Olympic Games."
        />
        <meta
          name="keywords"
          content="Luxury Sports Travel Experiences, Luxury sports travel, VIP sporting events, Sports hospitality packages, Luxury event travel, Premium sports experiences, Luxury travel packages for sporting events, VIP Formula 1 travel experiences, Wimbledon luxury hospitality packages, Masters Tournament luxury travel, Super Bowl VIP travel packages, FIFA World Cup luxury travel, Olympic Games luxury experiences"
        />
        <link
          rel="canonical"
          href="https://tripsandships.com/luxury-sports-travel-experiences"
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
            Luxury Sports <br /> Travel Experiences
          </h1>

          <p>
            For many professional athletes, sports are more than a
            career—they're a lifelong passion. Even during the off-season,
            many enjoy attending the world's most prestigious sporting events
            with family, friends, teammates, clients, or business partners.
          </p>

          <p>
            Luxury sports travel transforms these events into unforgettable
            experiences through premium hospitality, exclusive
            accommodations, private transportation, and personalized
            concierge services.
          </p>

          {readMore && (
            <>
              <p>
                Whether you're attending the Formula 1 Monaco Grand Prix,
                enjoying Centre Court at Wimbledon, walking the fairways of
                Augusta National during The Masters, or cheering from a
                luxury suite at the Super Bowl, every detail is carefully
                planned to provide a seamless VIP experience.
              </p>

              <p>
                At Trips &amp; Ships Luxury Travel, we specialize in creating
                extraordinary sports travel experiences that combine
                world-class competition with exceptional luxury, from the
                first ticket secured to the final transfer home.
              </p>

              <p>
                With more than 40 years in the travel industry, experience
                spanning over 121 countries, and recognition as the 2024
                Luxury Travel Influencer of the Year by Travel Leaders
                Network, Angela Hughes has become one of the most trusted
                voices in luxury sports and hospitality travel.
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

      {/* ── WHY LUXURY SPORTS TRAVEL? ─────────────────────────────── */}
      <section className="adg-c-section adg-c-bg-white" id="adg-c-why-luxury-sports-travel">
        <div className="adg-c-container">
          <div className="adg-c-section-header">
            <h2 className="adg-c-h2">Why Luxury Sports Travel?</h2>
            <div className="adg-c-accent-line"></div>
            <p className="Asc-section-intro">
              Watching elite athletes compete is exciting. Experiencing these
              iconic events with premium hospitality and personalized service
              makes them truly unforgettable.
            </p>
          </div>

          <div className="adg-c-overview-layout">
            <div className="adg-c-overview-icons">
              {[
                "VIP event access",
                "Premium seating",
                "Luxury hotels",
                "Private transportation",
                "Concierge support",
                "Exclusive hospitality lounges",
                "Fine dining experiences",
                "Customized itineraries",
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
                    Whether you're celebrating a championship season,
                    entertaining clients, or creating unforgettable family
                    memories, luxury sports travel elevates every moment.
                  </p>
                </div>
              </div>

              <div className="adg-c-overview-image-wrap">
                <img
                  src={DifferentApproachImage}
                  alt="VIP hospitality suite at a luxury sporting event"
                  className="adg-c-overview-img"
                />
                <div className="adg-c-overview-img-overlay">
                  <span className="adg-c-overview-img-label">
                    Championship Moments, Elevated
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MORE THAN A TICKET: PREMIUM HOSPITALITY & CONCIERGE TRAVEL */}
      <section
        className="Ejsc-ent-section"
        id="Ejsc-more-than-a-ticket"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="Ejsc-container">
          <div className="Ejsc-section-header">
            <h2 className="Ejsc-section-title">More Than Just a Ticket</h2>
            <div className="Asc-accent-line"></div>
            <p className="Ejsc-section-subtitle">
              Luxury sports travel is about far more than the event itself.
              It provides a complete, seamless experience from arrival to the
              final whistle and beyond.
            </p>
          </div>

          <div className="Ejsc-ent-grid">
            {/* VIP Hospitality Advantages Card */}
            <div className="Ejsc-ent-card Ejsc-explora-card">
              <div className="Ejsc-card-header">
                <div className="Ejsc-card-icon-wrap">
                  <Ticket size={24} className="Ejsc-card-icon" />
                </div>
                <h3 className="Ejsc-card-title">VIP Hospitality Access</h3>
              </div>

              <p className="Ejsc-card-intro">
                Every stage of the event experience is designed to be more
                comfortable, more exclusive, and less crowded than
                general admission.
              </p>

              <ul className="Ejsc-feature-list">
                {[
                  "Access to VIP hospitality lounges",
                  "Premium and Debenture-level seating",
                  "Paddock Club and pit lane access",
                  "Reserved club-level suites",
                  "Champagne receptions & fine dining",
                  "Priority venue entry",
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
                  These advantages elevate the event itself into a
                  once-in-a-lifetime experience, front and center.
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
                Exceptional sports travel doesn't happen by accident. Behind
                every seamless trip is thoughtful planning and careful
                coordination.
              </p>

              <ul className="Ejsc-feature-list">
                {[
                  "Tickets & hospitality packages",
                  "Hotel reservations & private residences",
                  "Restaurant bookings & event logistics",
                  "Private transportation & security",
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
                  Rather than navigating complex ticketing and logistics
                  yourself, a dedicated advisor ensures everything works
                  together effortlessly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRIVATE TRANSPORTATION & CONCIERGE SERVICES ──────────────── */}
      <section className="wnf-section wnf-bg-white" id="private-transportation-concierge">
        <div className="wnf-container">
          <div className="wnf-section-header">
            <h2 className="wnf-h2">Private Transportation &amp; Concierge Services</h2>
            <div className="wnf-accent-line"></div>
          </div>

          <div className="wnf-split">
            <div className="wnf-image-column">
              <div className="wnf-image-stack">
                <div className="wnf-img-frame wnf-frame-primary">
                  <img
                    src={TransportImage}
                    alt="Luxury chauffeur service arriving at a sporting event"
                    className="wnf-photo"
                  />
                </div>

                <div className="wnf-img-frame wnf-frame-secondary">
                  <img
                    src={GroundImage}
                    alt="Private jet on the tarmac ahead of a VIP sporting event"
                    className="wnf-photo"
                  />
                </div>
              </div>
            </div>

            <div className="wnf-content-column">
              <div className="wnf-block">
                <p className="wnf-lead-text">
                  To ensure a seamless experience, we coordinate every aspect
                  of your journey, from departure to your seat at the event
                  and back home again.
                </p>

                <ul className="wnf-feature-list">
                  {[
                    "Private jet charters",
                    "First-class commercial flights",
                    "Airport VIP assistance",
                    "Luxury chauffeur service",
                    "Private security arrangements",
                    "Hotel reservations",
                    "Restaurant bookings",
                    "Event logistics",
                    "Dedicated travel concierge",
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
                  From departure to return home, every detail is managed with
                  precision so you can focus on the event.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LUXURY ACCOMMODATIONS & PERSONALIZED ITINERARIES */}
      <section className="azs-suites-section" id="azs-accommodations-itineraries">
        <div className="azs-container">
          <div className="azs-section-header">
            <h2 className="azs-section-title">
              Luxury Accommodations &amp; <br /> Personalized Travel
              Itineraries
            </h2>
            <div className="azs-section-accent"></div>
            <p className="azs-section-subtitle">
              Your accommodations should reflect the prestige of the event
              you're attending — and no two travelers are the same.
            </p>
          </div>

          <div className="azs-suites-grid">
            {/* Luxury Accommodations Card */}
            <div className="azs-suites-card azs-seabourn-suites">
              <div className="azs-suites-image-wrap">
                <img
                  src={AccommodationImage}
                  alt="Five-star hotel suite in a luxury sporting event host city"
                  className="azs-suites-img"
                />
                <span className="azs-suites-image-badge">
                  Prestige-Level Accommodations
                </span>
              </div>

              <div className="azs-suites-content">
                <div className="azs-suites-card-header">
                  <div className="azs-suites-icon-circle">
                    <Building2 size={24} className="azs-suites-icon" />
                  </div>
                  <h3 className="azs-suites-title">Luxury Accommodations</h3>
                </div>

                <p className="azs-suites-intro">
                  Our advisors recommend properties known for exceptional
                  service, prime locations, and outstanding amenities.
                </p>

                <div className="azs-suites-body">
                  <h4 className="azs-suites-group-title">Options include:</h4>

                  <ul className="azs-suites-list">
                    {[
                      "Five-star hotels",
                      "Luxury resorts",
                      "Private villas",
                      "Exclusive residences",
                      "Boutique luxury properties",
                      "Penthouse suites",
                      "Yacht accommodations (select destinations)",
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
                      Every stay is chosen to match the prestige of the event
                      you've traveled for.
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
                  alt="Concierge advisor building a personalized sports travel itinerary"
                  className="azs-suites-img"
                />
                <span className="azs-suites-image-badge">
                  Built Around the Event
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
                  High-demand sporting events often require planning well in
                  advance and navigating complex ticketing, accommodations,
                  and transportation.
                </p>

                <div className="azs-suites-body">
                  <h4 className="azs-suites-group-title">
                    Every itinerary can include:
                  </h4>

                  <ul className="azs-suites-list">
                    {[
                      "Premium event tickets & hospitality",
                      "Multi-city itineraries",
                      "Cultural tours & sightseeing",
                      "Championship celebration planning",
                      "Corporate & incentive group logistics",
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
                      Every itinerary is customized around your preferred
                      events, accommodations, dining, and travel style.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BEYOND THE MAIN EVENT ─────────────────────────────────────── */}
      <section
        className="Leg-section"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="Leg-container">
          <div className="Leg-header">
            <h2 className="Leg-title">Beyond the Main Event</h2>
            <div className="adg-c-accent-line"></div>
            <p className="Leg-subtitle">
              Luxury sports travel extends far beyond the competition itself.
              The result is a complete luxury vacation rather than simply
              attending a sporting event.
            </p>
          </div>

          <div className="Leg-grid">
            {[
              {
                id: 1,
                accent: "gold",
                icon: Utensils,
                title: "Dining & Wine",
                description:
                  "Michelin-star dining and wine tastings arranged around your event schedule.",
                pills: ["Michelin-Star Dining", "Wine Tastings"],
                highlight: "Reservations secured before you even arrive.",
              },
              {
                id: 2,
                accent: "navy",
                icon: Camera,
                title: "City Tours & Culture",
                description:
                  "Private city tours and cultural performances bring every host destination to life beyond the venue.",
                pills: ["Private City Tours", "Cultural Performances"],
                highlight: "Explore the destination, not just the venue.",
              },
              {
                id: 3,
                accent: "teal",
                icon: Ship,
                title: "Yachts & Helicopter Sightseeing",
                description:
                  "Yacht charters and helicopter sightseeing add a new dimension to any luxury sports getaway.",
                pills: ["Yacht Charters", "Helicopter Sightseeing"],
                highlight: "Views and experiences money can't usually buy.",
              },
              {
                id: 4,
                accent: "gold",
                icon: Gem,
                title: "Spa, Golf & Luxury Shopping",
                description:
                  "Spa experiences, golf at championship courses, and luxury shopping round out every itinerary.",
                pills: [
                  "Spa Experiences",
                  "Golf at Championship Courses",
                  "Luxury Shopping",
                ],
                highlight: "Every moment between events, elevated.",
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

      {/* ── PERFECT FOR FAMILIES, FRIENDS & CORPORATE GROUPS ─────────── */}
      <section
        className="dmg-info-section dmg-bg-white"
        id="families-friends-corporate-groups"
      >
        <div className="dmg-info-container">
          <div className="dmg-info-grid">
            <div className="dmg-info-content">
              <h2 className="dmg-info-title">
                Perfect for Families, Friends &amp; Corporate Groups
              </h2>
              <div className="dmg-info-accent"></div>

              <p className="dmg-info-lead">
                Luxury sports travel is ideal for:
              </p>

              <div className="adg-c-overview-icons" style={{ marginBottom: "24px" }}>
                {[
                  "Professional athletes and their families",
                  "Corporate incentive groups",
                  "Executive retreats",
                  "Client entertainment",
                  "Family vacations",
                  "Friends traveling together",
                  "Championship celebrations",
                  "Milestone birthdays and anniversaries",
                ].map((label, i) => (
                  <div key={i} className="adg-c-overview-item">
                    <span className="adg-c-overview-icon">
                      <Check size={16} strokeWidth={2.5} />
                    </span>
                    <span className="adg-c-overview-label">{label}</span>
                  </div>
                ))}
              </div>

              <p className="dmg-info-lead">
                Every itinerary can be customized to suit your group's size,
                interests, and travel preferences.
              </p>

              <div className="dmg-info-features dmg-info-features-scrollable">
                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Professional Athletes &amp; Families
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Off-season travel built around the sports you love to
                      watch, not just play.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Corporate Incentive &amp; Client Entertainment
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Executive retreats and client appreciation events built
                      around premier sporting events.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Friends &amp; Family Vacations
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Championship celebrations, milestone birthdays, and
                      anniversaries planned around the event.
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
                  alt="Family and friends enjoying a VIP suite at a luxury sporting event"
                  className="dmg-media-img"
                  style={{ height: "650px" }}
                />
                <div className="dmg-media-overlay"></div>

                <div className="dmg-media-badge">
                  <span>Every Group, One Seamless Trip</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DESTINATIONS PERFECT FOR LUXURY SPORTS TRAVEL (TABBED) ───── */}
      <section
        className="luc-destinations-section"
        id="luc-sports-event-destinations"
      >
        <div className="luc-destinations-container">
          <div className="luc-destinations-header">
            <h2 className="luc-destinations-title">
              The World's Greatest Sporting Events
            </h2>

            <div className="adg-c-accent-line"></div>

            <p className="luc-destinations-intro">
              High-demand sporting events often require planning well in
              advance and navigating complex ticketing, accommodations, and
              transportation. Explore the events we specialize in below.
            </p>
          </div>

          <div className="luc-dest-layout">
            <nav className="luc-dest-nav">
              {sportsEvents.map((item) => {
                const NavIcon = item.icon;
                const isActive = activeEvent === item.id;

                return (
                  <button
                    key={item.id}
                    className={`luc-dest-nav-btn ${
                      isActive ? "luc-dest-nav-btn--active" : ""
                    }`}
                    onClick={() => setActiveEvent(item.id)}
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

            <div className="luc-dest-panel" key={activeEvent}>
              <div className="luc-dest-img-wrap">
                <img
                  src={currentEvent.image}
                  alt={currentEvent.title}
                  className="luc-dest-img"
                />

                <div className="luc-dest-img-overlay">
                  <div className="luc-dest-img-icon">
                    <ActiveEventIcon size={22} strokeWidth={1.6} />
                  </div>

                  <span className="luc-dest-img-title">
                    {currentEvent.title}
                  </span>
                </div>
              </div>

              <p className="luc-dest-panel-desc">
                <strong>{currentEvent.window}.</strong> {currentEvent.desc}
              </p>

              <div className="luc-dest-columns">
                {currentEvent.columns.map((col, cIdx) => (
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
                    {currentEvent.themeLabel}
                  </span>

                  <p className="luc-dest-theme-note-text">
                    {currentEvent.themeText}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY WORK WITH TRIPS & SHIPS LUXURY TRAVEL? ────────────────── */}
      <section className="adg-section" id="adg-why-work-with-us">
        <div className="adg-container">
          <div className="adg-section-header" style={{ marginBottom: "60px" }}>
            <h2 className="adg-h2">
              Why Work With Trips &amp; Ships Luxury Travel?
            </h2>
            <div className="adg-accent-line"></div>
          </div>

          <div
            className="adg-split-layout"
            style={{ alignItems: "flex-start" }}
          >
            <div className="adg-content-card-side">
              <img
                src={AdvisorImage}
                alt="Luxury travel advisor coordinating VIP hospitality tickets"
                className="adg-side-image"
                style={{ height: "30vh", border: "1px solid var(--navy)" }}
              />

              <div className="adg-info-card">
                <div className="adg-card-meta">
                  <Award size={28} />
                  <span className="adg-meta-label">Trusted Expertise</span>
                </div>

                <p className="adg-card-lead">
                  High-demand sporting events often require planning well in
                  advance and navigating complex ticketing, accommodations,
                  and transportation. We take care of every detail so you can
                  focus on enjoying the event.
                </p>

                <div className="adg-card-divider"></div>

                <p className="adg-card-subtext">
                  Our expertise, global partnerships, personalized service,
                  and attention to detail ensure a seamless luxury travel
                  experience from planning through your return home.
                </p>
              </div>
            </div>

            <div className="adg-list-side">
              {[
                {
                  title: "Personalized Itinerary Planning",
                  icon: <Compass size={20} />,
                },
                {
                  title: "Luxury Hotel Recommendations",
                  icon: <Home size={20} />,
                },
                {
                  title: "Premium Hospitality Packages",
                  icon: <Ticket size={20} />,
                },
                {
                  title: "Private Transportation Coordination",
                  icon: <Car size={20} />,
                },
                {
                  title: "Restaurant Reservations",
                  icon: <Utensils size={20} />,
                },
                {
                  title: "VIP Concierge Services",
                  icon: <Headset size={20} />,
                },
                {
                  title: "Destination Expertise",
                  icon: <Map size={20} />,
                },
                {
                  title: "Ongoing Travel Support",
                  icon: <HeartHandshake size={20} />,
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

      {/* TIPS FOR PLANNING LUXURY SPORTS TRAVEL */}
      <section
        className="Avr-planning-section"
        id="Asc-sports-travel-planning-tips"
        style={{ backgroundColor: "var(--bg-white)" }}
      >
        <div className="Asc-container">
          {/* HEADING */}
          <div className="Avr-planning-heading">
            <span className="Avr-planning-eyebrow">Planning With Purpose</span>

            <h2 className="Avr-planning-title">
              Tips for Planning Luxury Sports Travel
            </h2>

            <div className="Avr-planning-divider"></div>
          </div>

          {/* TWO-PANEL GRID */}
          <div className="Avr-planning-grid">
            {/* LEFT PANEL */}
            <div className="Avr-planning-left">
              <div className="Avr-planning-left-deco">&ldquo;</div>

              <h3 className="Avr-planning-left-title">
                Book Early &amp; Secure Your Hospitality
              </h3>

              <p className="Avr-planning-left-body">
                Major events such as the Super Bowl, Olympic Games, FIFA
                World Cup, Wimbledon, and The Masters often require planning
                12–24 months in advance. Securing tickets and hospitality
                early ensures the best access and accommodations for your
                trip.
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
                A well-planned sports travel itinerary is built around:
              </p>

              <div className="Avr-planning-benefits-grid">
                {[
                  {
                    icon: <CalendarClock size={18} />,
                    label: "Early ticket & hospitality booking",
                  },
                  {
                    icon: <Clock size={18} />,
                    label: "Flexible scheduling",
                  },
                  {
                    icon: <Users size={18} />,
                    label: "Coordinated group travel",
                  },
                  {
                    icon: <MapPin size={18} />,
                    label: "Carefully chosen accommodations",
                  },
                  {
                    icon: <Headset size={18} />,
                    label: "Professional concierge support",
                  },
                  {
                    icon: <ShieldCheck size={18} />,
                    label: "Privacy & security arrangements",
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
                Expert planning ensures tickets, transfers, and
                accommodations work together seamlessly, whatever your
                schedule requires.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── A COMPLETE LUXURY VACATION, NOT JUST AN EVENT ───────────── */}
      <section className="ugt-advantage-section" id="complete-luxury-vacation">
        <div className="ugt-advantage-container">
          <div className="ugt-advantage-header">
            <span className="ugt-advantage-eyebrow">
              Luxury Sports Travel Experiences
            </span>

            <h2 className="ugt-advantage-title">
              A Complete Luxury Vacation, Not Just an Event
            </h2>

            <div className="Asc-accent-line"></div>

            <p className="ugt-advantage-intro">
              Luxury sports travel extends far beyond the competition itself.
              Additional experiences turn a single event into a full luxury
              getaway.
            </p>
          </div>

          <div className="ugt-advantage-grid">
            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <Utensils size={28} strokeWidth={1.5} />
              </div>

              <h4 className="ugt-card-title">Michelin-Star Dining</h4>

              <p className="ugt-card-desc">
                Fine dining reservations secured around your match days and
                free time.
              </p>
            </div>

            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <Compass size={28} strokeWidth={1.5} />
              </div>

              <h4 className="ugt-card-title">Private City Tours</h4>

              <p className="ugt-card-desc">
                Guided sightseeing and cultural tours throughout the host
                destination.
              </p>
            </div>

            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <Gem size={28} strokeWidth={1.5} />
              </div>

              <h4 className="ugt-card-title">Luxury Shopping & Spa</h4>

              <p className="ugt-card-desc">
                Spa experiences and luxury shopping woven into your event
                itinerary.
              </p>
            </div>

            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <Ship size={28} strokeWidth={1.5} />
              </div>

              <h4 className="ugt-card-title">Yacht Charters</h4>

              <p className="ugt-card-desc">
                Waterfront viewing and yacht charters available in select
                host destinations.
              </p>
            </div>

            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <Wine size={28} strokeWidth={1.5} />
              </div>

              <h4 className="ugt-card-title">Wine Tastings</h4>

              <p className="ugt-card-desc">
                Curated tastings and celebratory dinners around championship
                moments.
              </p>
            </div>

            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <ShieldCheck size={28} strokeWidth={1.5} />
              </div>

              <h4 className="ugt-card-title">Privacy &amp; Security</h4>

              <p className="ugt-card-desc">
                Private security arrangements and trusted local partners keep
                every trip discreet.
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
            The result is a complete luxury vacation rather than simply
            attending a sporting event.
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
                      icon: <Trophy size={16} />,
                      label:
                        "Specialist in VIP sports hospitality and luxury event travel",
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
                  families plan luxury sports travel — from VIP hospitality
                  to flawless on-the-ground execution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── RELATED LUXURY TRAVEL EXPERIENCES ─────────────────────────── */}
      <section className="adg-section" id="related-luxury-travel-experiences" style={{ backgroundColor: "var(--bg-soft)" }}>
        <div className="adg-container">
          <div className="adg-section-header" style={{ marginBottom: "40px" }}>
            <h2 className="adg-h2">Related Luxury Travel Experiences</h2>
            <div className="adg-accent-line"></div>
            <p className="Asc-section-intro">
              Continue exploring the world of luxury travel with these
              related guides and experiences.
            </p>
          </div>

          <div className="adg-list-side" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "16px" }}>
            {[
              { title: "Professional Athlete Travel", slug: "/professional-athlete-travel" },
              { title: "Professional Athlete Family Travel", slug: "/professional-athlete-family-travel" },
              { title: "Off-Season Luxury Travel for Professional Athletes", slug: "/off-season-luxury-travel-for-professional-athletes" },
              { title: "Multigenerational Travel for Professional Athletes", slug: "/multigenerational-travel-for-professional-athletes" },
              { title: "Championship Celebrations & Milestone Travel", slug: "/championship-celebrations-milestone-travel" },
              { title: "Private Jet & Concierge Travel", slug: "/private-jet-concierge-travel" },
              { title: "Privacy & Security Travel Planning", slug: "/privacy-security-travel-planning" },
              { title: "Luxury Wellness & Recovery Travel", slug: "/luxury-wellness-recovery-travel" },
              { title: "Safaris, Expeditions & Bucket List Adventures", slug: "/safaris-expeditions-bucket-list-adventures" },
              { title: "Luxury Travel Experiences", slug: "/luxury-travel-experiences" },
              { title: "Luxury Cruises", slug: "/luxury-cruises" },
              { title: "Private Villas, Yachts & Exclusive Resorts", slug: "/private-villas-yachts-exclusive-resorts" },
              { title: "European Luxury Travel", slug: "/european-luxury-travel" },
              { title: "Mediterranean Cruises", slug: "/mediterranean-cruises" },
              { title: "Luxury African Safaris", slug: "/luxury-african-safaris" },
              { title: "Antarctica Expedition Cruises", slug: "/antarctica-expedition-cruises" },
            ].map((item, i) => (
              <Link
                key={i}
                to={item.slug}
                className="adg-list-item-card"
                style={{ textDecoration: "none" }}
              >
                <div className="adg-list-item-icon">
                  <ArrowRight size={18} />
                </div>
                <h4 className="adg-list-item-label">{item.title}</h4>
              </Link>
            ))}
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
              Everything you need to know about planning luxury sports travel
              and VIP event hospitality.
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
            alt="Sunset yacht viewing near a luxury sporting event"
            className="Asc-help-bg-img"
          />
          <div className="Asc-help-overlay"></div>
        </div>

        <div className="Asc-container">
          <div className="Asc-help-card">
            <div className="Asc-help-content">
              <div className="Asc-help-header">
                <span className="Asc-help-eyebrow">
                  Personalized Luxury Sports Travel Planning
                </span>
                <h2 className="Asc-help-h2">
                  Ready to Create Your Ultimate <br /> Sports Travel
                  Experience?
                </h2>
                <div className="Asc-help-accent"></div>
              </div>

              <div className="Asc-help-grid">
                <div className="Asc-help-info">
                  <p className="Asc-help-intro">
                    Some sporting events are more than competitions—they're
                    once-in-a-lifetime experiences. Watching the world's
                    greatest drivers race through Monaco, witnessing history
                    on Centre Court at Wimbledon, walking the grounds of
                    Augusta National, celebrating at the Super Bowl, or
                    attending the Olympic Games creates memories that last
                    forever.
                  </p>

                  <p className="Asc-help-intro">
                    At Trips &amp; Ships Luxury Travel, we transform these
                    iconic events into extraordinary luxury vacations. From
                    premium hospitality and five-star accommodations to
                    private transportation and personalized concierge
                    service, every aspect of your journey is designed around
                    comfort, exclusivity, and unforgettable experiences.
                  </p>

                  <p className="Asc-help-intro">
                    Whether you're traveling with family, entertaining
                    clients, celebrating a milestone, or simply pursuing your
                    passion for sport, we'll create a customized itinerary
                    worthy of the world's greatest sporting events.
                  </p>

                  <div className="Asc-help-btn-container">
                    <Link
                      to="/contact"
                      className="Asc-help-cta-btn"
                      style={{ textDecoration: "none" }}
                    >
                      Start Planning Your Sports Travel Journey
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
                      "VIP hospitality package sourcing",
                      "Premium & Debenture-level tickets",
                      "Private jet & luxury transportation",
                      "Five-star accommodations worldwide",
                      "Personalized concierge itineraries",
                      "Corporate & multigenerational group coordination",
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
                    families create highly personalized luxury sports travel
                    experiences worldwide.
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

export default LuxurySportsTravelExperiences;
