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
  Anchor,
  Sparkles,
  CalendarClock,
  Shield,
  Waves,
  Mountain,
  Headset,
  Hotel,
  Map,
  Home,
  Lock,
  Car,
  Building2,
  Globe,
  Landmark,
  EyeOff,
  PartyPopper,
  Briefcase,
  ShieldCheck,
} from "lucide-react";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela3.jpeg";

import HeroImage1 from "../../assets/PrivateJetConciergeTravel/privacy-security-travel-private-jet-tarmac.png";
import HeroImage2 from "../../assets/PrivateJetConciergeTravel/off-season-luxury-travel-professional-athletes-private-villa-retreat.webp";
import HeroImage3 from "../../assets/PrivateJetConciergeTravel/vip-airport-meet-and-greet-concierge-service.webp";

import DifferentApproachImage from "../../assets/PrivateJetConciergeTravel/privacy-security-travel-private-villa-terrace-family.png";

import BucketMaldives from "../../assets/LuxuryWellnessRecoveryTravel/maldives-wellness-overwater-spa.png";
import BucketCaribbean from "../../assets/CaribbeanCruisesExploraJourneys/explora-caribbean-turquoise-water.jpg";
import BucketPolynesia from "../../assets/PrivateJetConciergeTravel/championship-french-polynesia-overwater-celebration.png";
import BucketMediterranean from "../../assets/WhichMediterraneanItineraryIsBest/explora-ii-amalfi-coast-mediterranean-cruise.jpg";
import BucketMountain from "../../assets/AlaskaCruisesExploraJourneys/explora-journeys-haines-alaska-lighthouse-mountain-view.jpg";

import PrivateJetImage from "../../assets/PrivateJetConciergeTravel/private-jet-concierge-travel-luxury-professional-athlete.webp";
import LuxuryTransferImage from "../../assets/PrivateJetConciergeTravel/family-concierge-travel-services-luxury-family-arrival.webp";
import LogisticsImage from "../../assets/PrivateJetConciergeTravel/vip-airport-meet-and-greet-concierge-service.webp";
import SeamlessLogisticsImage from "../../assets/PrivateJetConciergeTravel/travel-during-the-competitive-season-professional-athlete-luxury-hotel.webp";
import FamilyImage from "../../assets/PrivateJetConciergeTravel/privacy-family-vacation-private-beach.png";
import AdvisorImage from "../../assets/PrivateJetConciergeTravel/privacy-luxury-travel-advisor-client-meeting.png";
import CtaImage from "../../assets/PrivateJetConciergeTravel/privacy-security-travel-private-jet-tarmac.png";

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
        "Luxury concierge travel agency specializing in privacy and security travel planning for professional athletes, celebrities, executives, and high-profile families, including private transportation, discreet accommodations, and seamless logistics.",
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
      name: "Privacy & Security Travel Planning",
      url: "https://tripsandships.com/privacy-security-travel-planning",
      description:
        "Discover private travel planning for professional athletes, celebrities, executives, and high-profile families. Learn how luxury concierge travel combines discretion, security, private transportation, exclusive accommodations, and seamless logistics.",
    },
    {
      "@type": "AboutPage",
      name: "About Privacy & Security Travel Planning",
      url: "https://tripsandships.com/privacy-security-travel-planning",
      description:
        "Learn how Trips & Ships Luxury Travel designs discreet, secure, and seamless vacations for high-profile travelers and their families.",
    },
    {
      "@type": "Service",
      serviceType: "Privacy & Security Travel Planning",
      provider: {
        "@type": "TravelAgency",
        name: "Trips & Ships Luxury Travel",
      },
      areaServed: "Worldwide",
      description:
        "Concierge-level luxury travel planning built around discretion, private transportation, secure logistics, and exclusive accommodations for high-profile travelers.",
    },
    {
      "@type": "Article",
      headline: "Privacy & Security Travel Planning",
      description:
        "A complete guide to privacy and security travel planning for high-profile travelers, covering private transportation, discreet accommodations, thoughtful security logistics, concierge services, and the destinations that offer the greatest privacy.",
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
          name: "Privacy & Security Travel Planning",
          item: "https://tripsandships.com/privacy-security-travel-planning",
        },
      ],
    },
    {
      "@type": "ItemList",
      name: "Ways Luxury Travel Planning Protects Privacy & Security",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Choose Discreet Accommodations",
          description:
            "Private villas, staffed homes, boutique resorts, and private islands offer far greater discretion than traditional hotels.",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Arrange Private Transportation",
          description:
            "Private aviation, chauffeured vehicles, luxury SUVs, and private boat transfers reduce time spent in crowded, public spaces.",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Coordinate Security Through Thoughtful Planning",
          description:
            "Coordinated arrivals, trusted local providers, and flexible scheduling keep safety in place without feeling intrusive.",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Rely on Luxury Concierge Services",
          description:
            "A dedicated concierge manages reservations, guides, and last-minute changes so nothing is left to chance.",
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Work With an Experienced Travel Advisor",
          description:
            "Professional planning brings destination, accommodation, transportation, and security considerations together seamlessly.",
        },
      ],
    },
    {
      "@type": "TouristTrip",
      name: "Privacy & Security Focused Luxury Vacation",
      provider: {
        "@type": "Organization",
        name: "Trips & Ships Luxury Travel",
      },
      touristType:
        "Professional athletes, celebrities, executives, entrepreneurs, and high-profile families",
    },
    {
      "@type": "Review",
      itemReviewed: {
        "@type": "Service",
        name: "Privacy & Security Travel Planning",
      },
      author: {
        "@type": "Person",
        name: "Angela Hughes",
      },
      reviewBody:
        "The finest luxury vacations aren't defined only by where you stay or where you travel — they're defined by how effortlessly, and how privately, the journey unfolds.",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is private travel planning?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Private travel planning focuses on creating personalized vacations that prioritize discretion, convenience, seamless logistics, and exceptional service.",
          },
        },
        {
          "@type": "Question",
          name: "Who benefits from privacy-focused travel planning?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Professional athletes, celebrities, executives, entrepreneurs, and families seeking personalized luxury travel often appreciate privacy-focused planning.",
          },
        },
        {
          "@type": "Question",
          name: "Are private villas more secure than hotels?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Many travelers appreciate the privacy, exclusive access, and spacious accommodations offered by private villas.",
          },
        },
        {
          "@type": "Question",
          name: "What does a luxury concierge do?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A concierge can coordinate transportation, dining, activities, reservations, celebrations, and personalized travel experiences before and during the trip.",
          },
        },
        {
          "@type": "Question",
          name: "Can travel plans accommodate changing schedules?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Experienced travel advisors help create flexible itineraries that can adapt when plans change.",
          },
        },
        {
          "@type": "Question",
          name: "Why is private transportation popular?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Private transportation offers convenience, personalized service, flexible schedules, and a more comfortable travel experience.",
          },
        },
        {
          "@type": "Question",
          name: "What destinations are best for private luxury travel?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Maldives, French Polynesia, the Caribbean, the Mediterranean, and secluded mountain retreats are among the most popular options.",
          },
        },
        {
          "@type": "Question",
          name: "Is private travel only for celebrities?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Anyone who values convenience, personalized service, privacy, and thoughtfully planned travel can benefit from luxury travel planning.",
          },
        },
        {
          "@type": "Question",
          name: "How far in advance should private vacations be planned?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Booking six to twelve months ahead often provides the best availability for luxury accommodations and personalized experiences.",
          },
        },
        {
          "@type": "Question",
          name: "Is working with a luxury travel advisor worthwhile?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For travelers with busy schedules or complex itineraries, expert planning often saves significant time while creating a more enjoyable vacation.",
          },
        },
        {
          "@type": "Question",
          name: "Do you sign Non-Disclosure Agreements (NDAs) to protect traveler information?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. We regularly work with legal representatives, agents, and management teams, and are fully prepared to sign NDAs to ensure absolute confidentiality for our clients.",
          },
        },
        {
          "@type": "Question",
          name: "Can you coordinate with our personal security detail?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. We routinely collaborate with our clients' private security teams to synchronize travel logistics, villa access, secure entry/exit points, and local transport security.",
          },
        },
        {
          "@type": "Question",
          name: "How do you ensure discretion during check-ins and transfers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We arrange private VIP airport meet-and-greets, fast-tracked customs clearance, and direct-to-tarmac transfers. For villas and resorts, we coordinate pre-registration so you bypass the main lobby and check in directly in-residence.",
          },
        },
        {
          "@type": "Question",
          name: "What security measures are vetted for private villa rentals?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We select properties that offer robust security infrastructure, including gated perimeters, advanced surveillance systems, restricted access roads, and optional private security staffing.",
          },
        },
        {
          "@type": "Question",
          name: "How do you protect client digital data and itineraries?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We utilize secure communication channels and encrypted storage platforms for all itineraries, passports, and travel documents, limiting access strictly to essential team members.",
          },
        },
      ],
    },
  ],
};


/* ── Data: Destinations that naturally offer privacy (tabbed panel) ── */
const privacyDestinations = [
  {
    id: "maldives",
    title: "The Maldives",
    badge: "Maldives",
    icon: Waves,
    image: BucketMaldives,
    window: "Private island resorts and overwater villas",
    desc: "Private island resorts and overwater villas make the Maldives one of the most naturally secluded luxury destinations in the world, ideal for travelers seeking complete privacy.",
    columns: [
      {
        label: "Plan Around:",
        items: [
          "Overwater Villa Stays",
          "Private Island Resorts",
          "Secluded Lagoon Excursions",
        ],
      },
    ],
    themeLabel: "Total Seclusion",
    themeText:
      "Few destinations offer the same level of built-in privacy as the Maldives, where entire resorts occupy a single private island.",
  },
  {
    id: "caribbean",
    title: "Caribbean",
    badge: "Caribbean",
    icon: Anchor,
    image: BucketCaribbean,
    window: "Luxury beachfront villas and yacht charters",
    desc: "Luxury beachfront villas and yacht charters give travelers a relaxed, low-key escape with warm weather and easy access from most major cities.",
    columns: [
      {
        label: "Plan Around:",
        items: [
          "Private Beachfront Villas",
          "Yacht Charters",
          "Island Hopping by Boat",
        ],
      },
    ],
    themeLabel: "Easy, Relaxed Privacy",
    themeText:
      "The Caribbean pairs convenient access with private villas and charters, making it an easy choice for a discreet getaway.",
  },
  {
    id: "french-polynesia",
    title: "French Polynesia",
    badge: "French Polynesia",
    icon: Compass,
    image: BucketPolynesia,
    objectPosition: "center 40%",
    window: "Exceptional privacy in spectacular surroundings",
    desc: "Exceptional privacy in spectacular natural surroundings makes French Polynesia a favorite for travelers who want total seclusion without sacrificing beauty or service.",
    columns: [
      {
        label: "Plan Around:",
        items: [
          "Remote Overwater Bungalows",
          "Private Lagoon Access",
          "Limited-Guest Resorts",
        ],
      },
    ],
    themeLabel: "Seclusion Without Compromise",
    themeText:
      "French Polynesia's remote geography naturally limits visitor traffic, creating some of the most private resort settings anywhere.",
  },
  {
    id: "mediterranean",
    title: "Mediterranean",
    badge: "Mediterranean",
    icon: Landmark,
    image: BucketMediterranean,
    window: "Private estates, boutique resorts, and yachts",
    desc: "Private estates, boutique resorts, and luxury yachts allow travelers to enjoy the Mediterranean's culture and cuisine while maintaining a discreet, low-profile itinerary.",
    columns: [
      {
        label: "Plan Around:",
        items: [
          "Private Coastal Estates",
          "Boutique Resort Stays",
          "Yacht-Based Exploration",
        ],
      },
    ],
    themeLabel: "Culture With Discretion",
    themeText:
      "A private estate or yacht lets travelers experience the Mediterranean's charm while controlling exposure to crowded, public spaces.",
  },
  {
    id: "mountain-retreats",
    title: "Mountain Retreats",
    badge: "Mountain Retreats",
    icon: Mountain,
    image: BucketMountain,
    window: "Tranquility and breathtaking scenery",
    desc: "Exclusive lodges offering tranquility and breathtaking scenery give travelers a quiet, secluded alternative to beach and island destinations.",
    columns: [
      {
        label: "Plan Around:",
        items: [
          "Private Mountain Lodges",
          "Limited-Access Properties",
          "Off-Season Scheduling",
        ],
      },
    ],
    themeLabel: "Quiet, Elevated Privacy",
    themeText:
      "Remote mountain lodges offer some of the lowest-traffic settings available, ideal for travelers seeking true tranquility.",
  },
];

/* ── FAQ Component ─────────────────────────────────────────────── */
function FAQ() {
  const [open, setOpen] = useState(null);

  const faqData = [
    {
      q: "What is private travel planning?",
      a: "Private travel planning focuses on creating personalized vacations that prioritize discretion, convenience, seamless logistics, and exceptional service.",
    },
    {
      q: "Who benefits from privacy-focused travel planning?",
      a: "Professional athletes, celebrities, executives, entrepreneurs, and families seeking personalized luxury travel often appreciate privacy-focused planning.",
    },
    {
      q: "Are private villas more secure than hotels?",
      a: "Many travelers appreciate the privacy, exclusive access, and spacious accommodations offered by private villas.",
    },
    {
      q: "What does a luxury concierge do?",
      a: "A concierge can coordinate transportation, dining, activities, reservations, celebrations, and personalized travel experiences before and during the trip.",
    },
    {
      q: "Can travel plans accommodate changing schedules?",
      a: "Yes. Experienced travel advisors help create flexible itineraries that can adapt when plans change.",
    },
    {
      q: "Why is private transportation popular?",
      a: "Private transportation offers convenience, personalized service, flexible schedules, and a more comfortable travel experience.",
    },
    {
      q: "What destinations are best for private luxury travel?",
      a: "The Maldives, French Polynesia, the Caribbean, the Mediterranean, and secluded mountain retreats are among the most popular options.",
    },
    {
      q: "Is private travel only for celebrities?",
      a: "No. Anyone who values convenience, personalized service, privacy, and thoughtfully planned travel can benefit from luxury travel planning.",
    },
    {
      q: "How far in advance should private vacations be planned?",
      a: "Booking six to twelve months ahead often provides the best availability for luxury accommodations and personalized experiences.",
    },
    {
      q: "Is working with a luxury travel advisor worthwhile?",
      a: "For travelers with busy schedules or complex itineraries, expert planning often saves significant time while creating a more enjoyable vacation.",
    },
    {
      q: "Do you sign Non-Disclosure Agreements (NDAs) to protect traveler information?",
      a: "Yes. We regularly work with legal representatives, agents, and management teams, and are fully prepared to sign NDAs to ensure absolute confidentiality for our clients.",
    },
    {
      q: "Can you coordinate with our personal security detail?",
      a: "Absolutely. We routinely collaborate with our clients' private security teams to synchronize travel logistics, villa access, secure entry/exit points, and local transport security.",
    },
    {
      q: "How do you ensure discretion during check-ins and transfers?",
      a: "We arrange private VIP airport meet-and-greets, fast-tracked customs clearance, and direct-to-tarmac transfers. For villas and resorts, we coordinate pre-registration so you bypass the main lobby and check in directly in-residence.",
    },
    {
      q: "What security measures are vetted for private villa rentals?",
      a: "We select properties that offer robust security infrastructure, including gated perimeters, advanced surveillance systems, restricted access roads, and optional private security staffing.",
    },
    {
      q: "How do you protect client digital data and itineraries?",
      a: "We utilize secure communication channels and encrypted storage platforms for all itineraries, passports, and travel documents, limiting access strictly to essential team members.",
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
const PrivacySecurityTravelPlanning = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [readMore, setReadMore] = useState(false);
  const [activeDestination, setActiveDestination] = useState("maldives");
  const [hovered, setHovered] = useState(null);

  const currentDestination =
    privacyDestinations.find((d) => d.id === activeDestination) ||
    privacyDestinations[0];
  const ActiveDestinationIcon = currentDestination.icon;

  const images = [HeroImage1, HeroImage2, HeroImage3];
  const heroPositions = ["center center", "center center", "center top"];

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
          Privacy & Security Travel Planning | Luxury Concierge Travel for
          High-Profile Families
        </title>
        <meta name="title" content="Privacy & Security Travel Planning" />
        <meta
          name="description"
          content="Discover private travel planning for professional athletes, celebrities, executives, and high-profile families. Learn how luxury concierge travel combines discretion, security, private transportation, exclusive accommodations, and seamless logistics."
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
            style={{
              backgroundImage: `url(${img})`,
              backgroundPosition: heroPositions[index] || "center center",
            }}
          ></div>
        ))}

        <div className="Scenic_hero_overlay"></div>

        <div className="Scenic_hero_content">
          <h1>
            Privacy &amp; Security <br /> Travel Planning
          </h1>

          <p>
            Luxury travel is about more than beautiful destinations and
            five-star accommodations. For professional athletes, entertainers,
            executives, entrepreneurs, and other high-profile travelers, one of
            the most valuable aspects of a vacation is something that can't be
            measured by hotel ratings or resort amenities: peace of mind.
          </p>

          <p>
            Whether you're planning a family vacation, celebrating a
            championship, attending an international event, or simply taking
            time away from the spotlight, privacy and security should be
            thoughtfully considered throughout every stage of the journey.
          </p>

          {readMore && (
            <>
              <p>
                Professional travel planning focuses on creating seamless
                experiences that allow travelers to relax, knowing every detail
                has been carefully coordinated with discretion and
                professionalism.
              </p>

              <p>
                High-profile travelers often face unique challenges that most
                vacationers never encounter, from public recognition and media
                attention to unplanned interruptions and last-minute schedule
                changes. The goal of luxury travel planning is to minimize
                unnecessary attention while maximizing comfort and enjoyment.
              </p>

              <p>
                With more than 40 years in the travel industry, experience
                spanning over 121 countries, and recognition as the 2024 Luxury
                Travel Influencer of the Year by Travel Leaders Network, Angela
                Hughes has become one of the most trusted voices in private,
                security-conscious luxury travel.
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

      {/* ── WHY PRIVACY MATTERS ───────────────────────────────────── */}
      <section className="adg-c-section adg-c-bg-white" id="adg-c-why-privacy">
        <div className="adg-c-container">
          <div className="adg-c-section-header">
            <h2 className="adg-c-h2">Why Privacy Matters</h2>
            <div className="adg-c-accent-line"></div>
          </div>

          <div className="adg-c-overview-layout">
            <div className="adg-c-overview-icons">
              {[
                "Public recognition",
                "Media attention",
                "Social media exposure",
                "Unplanned interruptions",
                "Busy travel environments",
                "Last-minute schedule changes",
                 "Privacy concerns",
              ].map((label, i) => (
                <div key={i} className="adg-c-overview-item">
                  <span className="adg-c-overview-icon">
                    <EyeOff size={16} strokeWidth={2.5} />
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
                    The goal of luxury travel planning is to minimize
                    unnecessary attention while maximizing comfort and
                    enjoyment. Privacy allows families to spend meaningful time
                    together without distractions.
                  </p>
                </div>
              </div>

              <div className="adg-c-overview-image-wrap">
                <img
                  src={DifferentApproachImage}
                  alt="Discreet private travel planning for high-profile travelers"
                  className="adg-c-overview-img"
                />
                <div className="adg-c-overview-img-overlay">
                  <span className="adg-c-overview-img-label">
                    Peace of Mind, Thoughtfully Planned
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRAVEL DESIGNED AROUND DISCRETION */}
      <section
        className="Ejsc-ent-section"
        id="Ejsc-travel-discretion"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="Ejsc-container">
          <div className="Ejsc-section-header">
            <h2 className="Ejsc-section-title">
              Travel Designed Around Discretion
            </h2>
            <div className="Asc-accent-line"></div>
            <p className="Ejsc-section-subtitle">
              Exceptional luxury travel begins with thoughtful planning that
              prioritizes privacy, comfort, and seamless experiences from start
              to finish.
            </p>
          </div>

          <div className="Ejsc-ent-grid">
            {/* Discretion Card */}
            <div className="Ejsc-ent-card Ejsc-explora-card">
              <div className="Ejsc-card-header">
                <div className="Ejsc-card-icon-wrap">
                  <ShieldCheck size={24} className="Ejsc-card-icon" />
                </div>
                <h3 className="Ejsc-card-title">
                  Travel Designed Around Discretion
                </h3>
              </div>

              <p className="Ejsc-card-intro">
                Discretion begins long before departure. Experienced luxury
                travel planning considers every stage of the journey to ensure a
                smooth, private, and personalized experience.
              </p>

              <ul className="Ejsc-feature-list">
                {[
                  "Destination selection",
                  "Accommodation recommendations",
                  "Transportation coordination",
                  "Arrival planning",
                  "Excursion scheduling",
                  "Concierge support",
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
                  Every recommendation is made with the traveler's preferences,
                  comfort, and privacy in mind.
                </p>
              </div>
            </div>

            {/* Extended Family Card */}
            <div className="Ejsc-ent-card Ejsc-seabourn-card">
              <div className="Ejsc-card-header">
                <div className="Ejsc-card-icon-wrap">
                  <Users size={24} className="Ejsc-card-icon" />
                </div>
                <h3 className="Ejsc-card-title">
                  Traveling with Extended Family
                </h3>
              </div>

              <p className="Ejsc-card-intro">
                Luxury vacations often include parents, grandparents, siblings,
                children, and close friends. Thoughtful planning ensures
                everyone enjoys a seamless and memorable experience together.
              </p>

              <ul className="Ejsc-feature-list">
                {[
                  "Multiple arrivals",
                  "Shared accommodations",
                  "Private dining",
                  "Group excursions",
                  "Celebration events",
                  "Personalized activities",
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
                  Every generation can enjoy the vacation while spending
                  meaningful time together.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ PRIVATE TRANSPORTATION ════════════════════════ */}
      <section className="dac-families-section">
        <div className="dac-families-container">
          <div className="dac-families-grid">
            {/* Left Content Column */}
            <div className="dac-families-left">
              <div className="dac-families-heading-wrap">
                <h2 className="dac-families-title">Private Transportation</h2>
                <div className="dac-families-accent"></div>
              </div>

              <div className="dac-families-features">
                {[
                  {
                    title: "Private Aviation",
                    desc: "Flexible schedules, private terminals, and direct flights reduce time spent in crowded airports while providing greater convenience.",
                  },
                  {
                    title: "Chauffeured Vehicles",
                    desc: "Professional drivers provide comfortable, efficient transportation between airports, hotels, restaurants, and attractions.",
                  },
                  {
                    title: "Luxury SUVs",
                    desc: "Ideal for families traveling with children or extended family members, offering comfort, space, and flexibility.",
                  },
                  {
                    title: "Private Boat Transfers",
                    desc: "In coastal destinations, private water transportation provides a relaxed and scenic alternative to busy public terminals.",
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
                    src={PrivateJetImage}
                    alt="Private jet on the airport runway"
                    className="dac-families-img"
                  />
                  <div className="dac-families-img-caption">
                    Private Aviation
                  </div>
                </div>

                <div className="dac-families-img-card dac-families-img-card--secondary">
                  <img
                    src={LuxuryTransferImage}
                    alt="Luxury SUV providing private transportation"
                    className="dac-families-img"
                  />
                  <div className="dac-families-img-caption">
                    Luxury Ground Transfers
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CHOOSING DISCREET ACCOMMODATIONS ─────────────────────────── */}
      <section
        className="Leg-section"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="Leg-container">
          <div className="Leg-header">
            <h2 className="Leg-title">Choosing Discreet Accommodations</h2>
            <div className="adg-c-accent-line"></div>
            <p className="Leg-subtitle">
              Not every luxury hotel offers the same level of privacy. Many
              travelers prefer accommodations that naturally provide greater
              discretion.
            </p>
          </div>

          <div className="Leg-grid">
            {[
              {
                id: 1,
                accent: "gold",
                icon: Home,
                title: "Private Villas",
                description:
                  "Independent residences with generous living space, private pools, and personalized service.",
                pills: ["Private Pool", "Full Privacy", "Personal Service"],
                highlight: "A home away from home, entirely your own.",
              },
              {
                id: 2,
                accent: "navy",
                icon: Building2,
                title: "Staffed Luxury Homes",
                description:
                  "Properties featuring chefs, housekeeping, concierge services, and private entrances.",
                pills: ["Private Chef", "Dedicated Staff", "Private Entrance"],
                highlight: "Every detail managed, out of sight.",
              },
              {
                id: 3,
                accent: "teal",
                icon: Hotel,
                title: "Boutique Luxury Resorts",
                description:
                  "Smaller properties with fewer guests and a quieter atmosphere.",
                pills: ["Fewer Guests", "Quiet Atmosphere", "Personal Touch"],
                highlight: "Intimate scale, exceptional service.",
              },
              {
                id: 4,
                accent: "gold",
                icon: Waves,
                title: "Private Islands",
                description:
                  "Exclusive destinations offering exceptional privacy and personalized experiences.",
                pills: [
                  "Exclusive Access",
                  "Total Seclusion",
                  "Personalized Experiences",
                ],
                highlight: "Privacy in its most complete form.",
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

          <p
            className="Leg-subtitle"
            style={{ textAlign: "center", marginTop: "2rem" }}
          >
            Choosing the right accommodation often plays a significant role in
            the overall vacation experience.
          </p>
        </div>
      </section>

      {/* ── SECURITY THROUGH THOUGHTFUL PLANNING ──────────────────── */}
      <section className="wnf-section wnf-bg-white" id="security-planning">
        <div className="wnf-container">
          <div className="wnf-section-header">
            <h2 className="wnf-h2">Security Through Thoughtful Planning</h2>
            <div className="wnf-accent-line"></div>
          </div>

          <div className="wnf-split">
            <div className="la-image-column">
              <div className="la-image-wrap">
                <img
                  src={LogisticsImage}
                  alt="Coordinated private airport transfer for a high-profile traveler"
                  className="la-image"
                />
                <div className="la-image-overlay"></div>
              </div>
            </div>

            <div className="wnf-content-column">
              <div className="wnf-block">
                <p className="wnf-lead-text">
                  Security doesn't have to feel intrusive. The best travel
                  experiences combine safety with comfort through thoughtful,
                  professional planning.
                </p>

                <ul className="wnf-feature-list">
                  {[
                    "Coordinated arrivals and departures",
                    "Private airport transfers",
                    "Trusted local transportation providers",
                    "Personalized itineraries",
                    "Flexible scheduling",
                    "Reliable communication throughout the trip",
                  ].map((feature, i) => (
                    <li key={i} className="wnf-feature-item">
                      <div className="wnf-icon-wrapper">
                        <Lock size={14} />
                      </div>
                      <span className="wnf-feature-text">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="wnf-footer-note">
                <p className="wnf-highlight-text">
                  Thoughtful logistics help reduce stress while allowing
                  travelers to focus on enjoying their vacation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── LUXURY CONCIERGE SERVICES ────────────────────────────── */}
      <section className="adg-c-section adg-c-bg-soft" id="concierge-services">
        <div className="adg-c-container">
          <div className="adg-c-section-header">
            <span className="adg-c-eyebrow">Effortless Coordination</span>

            <h2 className="adg-c-h2">Luxury Concierge Services</h2>

            <div className="adg-c-accent-line"></div>

            <p className="Asc-section-intro">
              Luxury concierge services go far beyond making reservations.
              Having a knowledgeable professional managing these details allows
              travelers to enjoy a smoother and more relaxing experience.
            </p>
          </div>

          <div className="adg-c-venues-grid1">
            {[
              {
                id: 1,
                eyebrow: "Trip Coordination",
                name: "A Dedicated Concierge Handles the Details",
                highlight: "Every Reservation, Managed",
                items: [
                  "Flight coordination",
                  "Restaurant reservations",
                  "Private guides",
                  "Spa appointments",
                ],
                callout:
                  "A dedicated concierge coordinates the details that create a smoother, more relaxing experience from arrival to departure.",
              },
              {
                id: 2,
                eyebrow: "Family & Celebrations",
                name: "Support for Every Moment of the Trip",
                highlight: "Flexible, Around the Clock",
                items: [
                  "Yacht charters",
                  "Golf tee times",
                  "Family celebrations",
                  "Children's activities",
                  "Last-minute itinerary adjustments",
                ],
                callout:
                  "Having a knowledgeable professional managing these details allows travelers to enjoy a smoother and more relaxing experience.",
              },
            ].map((venue, i) => (
              <div
                key={venue.id}
                className={`adg-c-venue-card adg-c-venue-${(i % 5) + 1}`}
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

      {/* ── SEAMLESS LOGISTICS ───────────────────────────────────── */}
      <section
        className="dmg-info-section dmg-bg-white"
        id="seamless-logistics"
      >
        <div className="dmg-info-container">
          <div className="dmg-info-grid">
            <div className="dmg-info-content">
              <h2 className="dmg-info-title">Seamless Logistics</h2>
              <div className="dmg-info-accent"></div>

              <p className="dmg-info-lead">
                Luxury travel should feel effortless. Every part of the journey
                should flow naturally from one experience to the next, creating
                more time for what matters most.
              </p>

              <div className="dmg-info-features dmg-info-features-scrollable">
                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Airport Coordination
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Efficient transfers and arrival planning from the moment
                      you land.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">Hotel Check-In</h3>
                    <p className="dmg-info-feature-desc">
                      Personalized arrival experiences whenever available.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Activity Scheduling
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Balanced itineraries that avoid unnecessary rushing.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Family Coordination
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Managing travel for multiple generations or guests
                      arriving from different locations.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="dmg-info-media">
              <div className="dmg-media-wrapper">
                <img
                  src={SeamlessLogisticsImage}
                  alt="Concierge coordinating seamless private travel logistics"
                  className="dmg-media-img"
                  style={{ height: "650px" }}
                />
                <div className="dmg-media-overlay"></div>

                <div className="dmg-media-badge">
                  <span>Good Logistics Create More Time</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRIVACY FOR FAMILY VACATIONS ─────────────────────────── */}
      <section className="dmg-info-section dmg-bg-soft" id="family-privacy">
        <div className="dmg-info-container">
          <div className="dmg-info-grid">
            <div className="dmg-info-media">
              <div className="dmg-media-wrapper">
                <img
                  src={FamilyImage}
                  alt="Family enjoying a private beach vacation away from public attention"
                  className="dmg-media-img"
                  style={{ height: "700px" }}
                />
                <div className="dmg-media-overlay"></div>

                <div className="dmg-media-badge">
                  <span>Quality Time, Away From the Spotlight</span>
                </div>
              </div>
            </div>

            <div className="dmg-info-content">
              <h2 className="dmg-info-title">Privacy for Family Vacations</h2>
              <div className="dmg-info-accent"></div>

              <p className="dmg-info-lead">
                Many professional athletes spend much of the year in the public
                eye. Family vacations provide an opportunity to reconnect away
                from professional responsibilities. Private travel planning
                allows families to enjoy time together without feeling
                constantly observed or interrupted.
              </p>

              <div className="adg-c-overview-icons">
                {[
                  "Pool days",
                  "Beach vacations",
                  "Family dinners",
                  "Outdoor adventures",
                  "Cultural experiences",
                  "Relaxation",
                ].map((label, i) => (
                  <div key={i} className="adg-c-overview-item">
                    <span className="adg-c-overview-icon">
                      <Check size={16} strokeWidth={2.5} />
                    </span>
                    <span className="adg-c-overview-label">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FLEXIBLE PLANNING FOR CHANGING SCHEDULES ─────────────── */}
      <section
        className="ugt-components-section"
        id="flexible-scheduling"
        style={{ backgroundColor: "var(--bg-white)" }}
      >
        <div className="ugt-components-container">
          <div className="ugt-components-header">
            <h2 className="ugt-components-title">
              Flexible Planning for Changing Schedules
            </h2>

            <div className="adg-c-accent-line"></div>
          </div>

          <div className="ugt-components-list">
            <div className="ugt-component-row">
              <div className="ugt-component-image-wrapper">
                <div className="ugt-component-image-container">
                  <img
                    src={AdvisorImage}
                    alt="Travel advisor adjusting a flexible private itinerary"
                    className="ugt-component-image"
                  />
                </div>
              </div>

              <div className="ugt-component-content">
                <p className="ugt-component-text">
                  Professional schedules don't always follow a predictable
                  timeline. Luxury travel planning takes flexibility into
                  account, and this is particularly valuable for athletes,
                  executives, and entertainers with evolving commitments.
                </p>

                <div className="ugt-questions-box">
                  <span className="ugt-questions-title">
                    Flexible planning helps travelers:
                  </span>

                  <ul className="ugt-questions-list">
                    {[
                      "Adjust Travel Dates When Possible",
                      "Modify Accommodations",
                      "Rearrange Transportation",
                      "Update Activity Reservations",
                      "Adapt Itineraries as Needed",
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
                  This flexibility keeps a private vacation running smoothly,
                  even when professional commitments shift at the last minute.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DESTINATIONS THAT NATURALLY OFFER PRIVACY (TABBED) ───── */}
      <section
        className="luc-destinations-section"
        id="luc-private-destinations"
      >
        <div className="luc-destinations-container">
          <div className="luc-destinations-header">
            <h2 className="luc-destinations-title">
              Destinations That Naturally Offer Privacy
            </h2>

            <div className="adg-c-accent-line"></div>

            <p className="luc-destinations-intro">
              Some destinations are especially appealing to travelers seeking
              relaxation and discretion. These destinations combine outstanding
              hospitality with peaceful environments.
            </p>
          </div>

          <div className="luc-dest-layout">
            <nav className="luc-dest-nav">
              {privacyDestinations.map((item) => {
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
                  style={{
                    objectPosition: currentDestination.objectPosition || "center center",
                  }}
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
                alt="Luxury travel advisor planning a private, secure itinerary"
                className="adg-side-image"
                style={{ height: "30vh", border: "1px solid var(--navy)" }}
              />

              <div className="adg-info-card">
                <div className="adg-card-meta">
                  <Award size={28} />
                  <span className="adg-meta-label">Trusted Expertise</span>
                </div>

                <p className="adg-card-lead">
                  Planning a private vacation requires much more than booking
                  flights and hotels. The result is a travel experience that's
                  smooth, personalized, and carefully organized from beginning
                  to end.
                </p>

                <div className="adg-card-divider"></div>

                <p className="adg-card-subtext">
                  Because the greatest luxury isn't simply traveling well — it's
                  traveling knowing every detail has already been taken care of.
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
                  title: "Carefully Selected Accommodations",
                  icon: <Hotel size={20} />,
                },
                {
                  title: "Concierge-Level Planning",
                  icon: <Sparkles size={20} />,
                },
                {
                  title: "Coordination of Transportation",
                  icon: <Car size={20} />,
                },
                {
                  title: "Customized Itineraries",
                  icon: <Map size={20} />,
                },
                {
                  title: "Family Travel Expertise",
                  icon: <Users size={20} />,
                },
                {
                  title: "Ongoing Support Before and During the Trip",
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

      {/* WHO BENEFITS MOST FROM PRIVATE TRAVEL PLANNING? */}
      <section
        className="Avr-planning-section"
        id="Asc-private-travel-planning"
        style={{ backgroundColor: "var(--bg-white)" }}
      >
        <div className="Asc-container">
          {/* HEADING */}
          <div className="Avr-planning-heading">
            <span className="Avr-planning-eyebrow">
              Personalized Luxury Travel
            </span>

            <h2 className="Avr-planning-title">
              Who Benefits Most from Private Travel Planning?
            </h2>

            <div className="Avr-planning-divider"></div>
          </div>

          {/* TWO-PANEL GRID */}
          <div className="Avr-planning-grid">
            {/* LEFT PANEL */}
            <div className="Avr-planning-left">
              <div className="Avr-planning-left-deco">&ldquo;</div>

              <h3 className="Avr-planning-left-title">
                Designed for Travelers Who Value Privacy & Convenience
              </h3>

              <p className="Avr-planning-left-body">
                Luxury privacy-focused travel planning is designed for travelers
                who appreciate personalized service, seamless logistics,
                discretion, and exceptional attention to detail throughout every
                stage of their journey.
              </p>

              <div className="Avr-planning-alert">
                <ShieldCheck size={18} className="Avr-planning-alert-icon" />

                <p className="Avr-planning-alert-text">
                  Whether you're planning a family vacation, a milestone
                  celebration, or a private getaway, expert planning creates a
                  smooth, stress-free luxury travel experience.
                </p>
              </div>
            </div>

            {/* RIGHT PANEL */}
            <div className="Avr-planning-right">
              <p className="Avr-planning-right-intro">
                Private travel planning is ideal for:
              </p>

              <div className="Avr-planning-benefits-grid">
                {[
                  {
                    icon: <Award size={18} />,
                    label: "Professional athletes",
                  },
                  {
                    icon: <Users size={18} />,
                    label: "Sports executives",
                  },
                  {
                    icon: <Star size={18} />,
                    label: "Entertainers",
                  },
                  {
                    icon: <Briefcase size={18} />,
                    label: "Business leaders",
                  },
                  {
                    icon: <Compass size={18} />,
                    label: "Entrepreneurs",
                  },
                  {
                    icon: <Shield size={18} />,
                    label: "Public figures",
                  },
                  {
                    icon: <Home size={18} />,
                    label: "Multi-generational families",
                  },
                  {
                    icon: <PartyPopper size={18} />,
                    label: "Travelers celebrating milestone events",
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
                Anyone who values personalized service, convenience, and
                thoughtful planning can benefit from a private luxury travel
                experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── TIPS FOR PLANNING A PRIVATE LUXURY VACATION ───────────── */}
      <section className="ugt-advantage-section" id="planning-tips">
        <div className="ugt-advantage-container">
          <div className="ugt-advantage-header">
            <span className="ugt-advantage-eyebrow">Expert Planning</span>

            <h2 className="ugt-advantage-title">
              Tips for Planning a Private Luxury Vacation
            </h2>

            <div className="Asc-accent-line"></div>

            <p className="ugt-advantage-intro">
              Premium villas, private islands, and luxury suites often book
              months in advance. These simple strategies help create a more
              peaceful, personalized journey.
            </p>
          </div>

          <div className="ugt-advantage-grid">
            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <CalendarClock size={28} strokeWidth={1.5} />
              </div>

              <h4 className="ugt-card-title">Plan Well Ahead</h4>

              <p className="ugt-card-desc">
                Premium villas, private islands, and luxury suites often book
                months in advance.
              </p>
            </div>

            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <Home size={28} strokeWidth={1.5} />
              </div>

              <h4 className="ugt-card-title">Choose the Right Accommodation</h4>

              <p className="ugt-card-desc">
                Privacy is often more important than size or popularity.
              </p>
            </div>

            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <Sparkles size={28} strokeWidth={1.5} />
              </div>

              <h4 className="ugt-card-title">Keep Your Schedule Flexible</h4>

              <p className="ugt-card-desc">
                Leave room for spontaneous experiences and relaxation.
              </p>
            </div>

            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <Globe size={28} strokeWidth={1.5} />
              </div>

              <h4 className="ugt-card-title">Travel During Shoulder Seasons</h4>

              <p className="ugt-card-desc">
                Fewer crowds often create a more peaceful experience.
              </p>
            </div>

            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <Award size={28} strokeWidth={1.5} />
              </div>

              <h4 className="ugt-card-title">
                Work With an Experienced Advisor
              </h4>

              <p className="ugt-card-desc">
                Professional planning saves time while creating a more
                personalized journey.
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
                      icon: <Shield size={16} />,
                      label:
                        "Specialist in privacy and security-focused travel for high-profile families",
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
                  help professional athletes, celebrities, executives, and
                  high-profile families travel with complete discretion — from
                  destination and accommodation selection to private
                  transportation and concierge planning.
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
              Everything you need to know about planning privacy and
              security-focused luxury travel.
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
            alt="Private luxury travel destination — peace of mind through expert planning"
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
                  Ready to Travel With <br /> Complete Confidence?
                </h2>
                <div className="Asc-help-accent"></div>
              </div>

              <div className="Asc-help-grid">
                <div className="Asc-help-info">
                  <p className="Asc-help-intro">
                    Connect with Angela Hughes and the expert team at Trips
                    &amp; Ships Luxury Travel for personalized guidance on
                    planning a private, secure, and unforgettable vacation.
                  </p>

                  <p className="Asc-help-intro">
                    From discreet accommodations and private transportation to
                    concierge services and flexible itineraries, expert support
                    helps every detail come together seamlessly.
                  </p>

                  <p className="Asc-help-intro">
                    Whether you're taking time away from the spotlight,
                    celebrating a milestone, or simply planning quality time
                    with family, personalized planning makes all the difference.
                  </p>

                  <div className="Asc-help-btn-container">
                    <Link
                      to="/contact"
                      className="Asc-help-cta-btn"
                      style={{ textDecoration: "none" }}
                    >
                      Start Planning Your Private Journey
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
                      "Private villa & private island recommendations",
                      "Private aviation & transportation coordination",
                      "Thoughtful, security-conscious logistics",
                      "Flexible, schedule-friendly itineraries",
                      "Luxury concierge support, start to finish",
                      "Discreet planning for the whole family",
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
                    high-profile travelers and their families create highly
                    personalized, privacy-focused travel experiences worldwide.
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

export default PrivacySecurityTravelPlanning;
