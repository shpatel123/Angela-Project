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
  Home,
  Hotel,
  CalendarClock,
  Headset,
  Map,
  Palmtree,
  Lock,
  Sailboat,
  Trophy,
  Ship,
  ShieldCheck,
} from "lucide-react";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela.jpeg";

import HeroImage1 from "../../assets/PrivateJetConciergeTravel/private-villas-yachts-exclusive-resorts-luxury-superyacht.webp";
import HeroImage2 from "../../assets/PrivateJetConciergeTravel/off-season-luxury-travel-professional-athletes-private-villa-retreat.webp";
import HeroImage3 from "../../assets/PrivateJetConciergeTravel/luxury-wellness-recovery-travel-poolside-retreat.webp";

import AccommodationMattersImage from "../../assets/PrivateJetConciergeTravel/multigenerational-travel-professional-athletes-luxury-family-villa.webp";
import VillaImage from "../../assets/PrivateJetConciergeTravel/off-season-luxury-travel-professional-athletes-private-villa-retreat.webp";
import YachtImage1 from "../../assets/PrivateJetConciergeTravel/private-villas-yachts-exclusive-resorts-luxury-superyacht.webp";
import PrivateIslandImage from "../../assets/PrivateJetConciergeTravel/championship-french-polynesia-overwater-celebration.png";
import LuxuryVillaImage from "../../assets/PrivateJetConciergeTravel/multigenerational-travel-professional-athletes-luxury-family-villa.webp";
import StaffedResidenceImage from "../../assets/PrivateJetConciergeTravel/luxury-wellness-recovery-travel-professional-athlete-family.webp";
import LuxuryResortImage from "../../assets/PrivateJetConciergeTravel/privacy-security-travel-private-villa-terrace-family.png";
import LuxuryAdvisorImage from "../../assets/PrivateJetConciergeTravel/privacy-luxury-travel-advisor-client-meeting.png";
import CtaImage from "../../assets/PrivateJetConciergeTravel/private-villas-yachts-exclusive-resorts-luxury-yacht-group..webp";
import BucketMediterranean from "../../assets/WhichMediterraneanItineraryIsBest/amalfi-coast-italy-mediterranean-hero-summer-2025.jpg";
import BucketCaribbean from "../../assets/CaribbeanCruisesExploraJourneys/explora-beaches.jpg";

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
        "Luxury travel agency specializing in private villas, yacht charters, private islands, exclusive resorts, and staffed luxury residences for professional athletes and their families.",
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
      name: "Private Villas, Yachts & Exclusive Resorts",
      url: "https://tripsandships.com/private-villas-yachts-exclusive-resorts",
      description:
        "Discover why professional athletes choose private villas, luxury yacht charters, exclusive resorts, and staffed residences. Learn how privacy, security, flexibility, and personalized service create the ultimate luxury vacation experience.",
    },
    {
      "@type": "AboutPage",
      name: "About Private Villas, Yachts & Exclusive Resorts",
      url: "https://tripsandships.com/private-villas-yachts-exclusive-resorts",
      description:
        "Learn how Trips & Ships Luxury Travel selects private villas, yachts, private islands, resorts, and staffed residences for professional athletes and their families.",
    },
    {
      "@type": "Service",
      serviceType: "Luxury Accommodation Planning for Professional Athletes",
      provider: {
        "@type": "TravelAgency",
        name: "Trips & Ships Luxury Travel",
      },
      areaServed: "Worldwide",
      description:
        "Concierge-level planning for private villas, yacht charters, private islands, exclusive resorts, and staffed luxury residences.",
    },
    {
      "@type": "Article",
      headline: "Private Villas, Yachts & Exclusive Resorts",
      description:
        "A complete guide to private villas, yacht charters, private islands, exclusive resorts, and staffed luxury residences for professional athletes.",
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
          name: "Luxury Accommodations",
          item: "https://tripsandships.com/luxury-accommodations",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Private Villas, Yachts & Exclusive Resorts",
          item: "https://tripsandships.com/private-villas-yachts-exclusive-resorts",
        },
      ],
    },
    {
      "@type": "ItemList",
      name: "Luxury Accommodation Options for Professional Athletes",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Private Luxury Villas",
          description:
            "Spacious, staffed villas offering privacy and room for the whole family.",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Private Islands",
          description:
            "Complete seclusion with private beaches and dedicated hospitality teams.",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Luxury Yacht Charters",
          description:
            "Flexible itineraries combining transportation and accommodation.",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Exclusive Luxury Resorts",
          description:
            "World-class amenities paired with personalized, discreet service.",
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Staffed Luxury Residences",
          description:
            "Full-service homes with private chefs, housekeeping, and concierge support.",
        },
      ],
    },
    {
      "@type": "TouristTrip",
      name: "Private Villa, Yacht & Resort Vacation for Professional Athletes",
      provider: {
        "@type": "Organization",
        name: "Trips & Ships Luxury Travel",
      },
      touristType: "Professional athletes and their families",
    },
    {
      "@type": "Review",
      itemReviewed: {
        "@type": "Service",
        name: "Private Villas, Yachts & Exclusive Resorts",
      },
      author: {
        "@type": "Person",
        name: "Angela Hughes",
      },
      reviewBody:
        "True luxury isn't measured by the number of stars a property has — it's measured by the freedom to enjoy your time exactly the way you want.",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Why do professional athletes choose private villas?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Private villas provide greater privacy, spacious accommodations, personalized service, and flexibility compared to traditional hotels.",
          },
        },
        {
          "@type": "Question",
          name: "What is included in a staffed luxury residence?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Many residences include a private chef, housekeeping, concierge services, butler, villa manager, and additional staff depending on the property.",
          },
        },
        {
          "@type": "Question",
          name: "Are private yacht charters suitable for families?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Luxury yachts offer spacious accommodations, professional crews, water activities, and customized itineraries that appeal to travelers of all ages.",
          },
        },
        {
          "@type": "Question",
          name: "What are the benefits of staying on a private island?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Private islands provide complete privacy, personalized service, exclusive amenities, and an exceptional level of relaxation.",
          },
        },
        {
          "@type": "Question",
          name: "Are luxury resorts still a good option?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. Many luxury resorts combine outstanding accommodations with wellness facilities, family programs, fine dining, and concierge-level service.",
          },
        },
        {
          "@type": "Question",
          name: "Which accommodation offers the most privacy?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Private islands, luxury villas, and yacht charters generally provide the highest levels of privacy.",
          },
        },
        {
          "@type": "Question",
          name: "Are these accommodations suitable for multi-generational travel?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Villas, staffed residences, and luxury cruises are particularly well suited for extended families traveling together.",
          },
        },
        {
          "@type": "Question",
          name: "How far in advance should luxury accommodations be booked?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Booking six to twelve months ahead is recommended, especially during peak travel seasons and for larger villas or private islands.",
          },
        },
        {
          "@type": "Question",
          name: "Can accommodations accommodate changing schedules?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Many luxury travel advisors recommend flexible booking options whenever possible to help athletes adapt to unexpected schedule changes.",
          },
        },
        {
          "@type": "Question",
          name: "Is working with a luxury travel advisor worthwhile?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For high-profile travelers seeking personalized service, privacy, and carefully curated experiences, professional planning often delivers exceptional value.",
          },
        },
        {
          "@type": "Question",
          name: "Can a private yacht charter accommodate custom routes and spontaneous detours?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. One of the greatest benefits of a private yacht charter is the ability to customize your cruise itinerary, allowing for spontaneous route adjustments, custom anchorages, and personalized island hopping in collaboration with the captain.",
          },
        },
        {
          "@type": "Question",
          name: "How do you match a traveler with the right private villa or yacht?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We conduct a thorough profiling of your group size, privacy expectations, dietary preferences, recreational interests, and location requirements to curate a selection from our vetted network of ultra-luxury estates and yachts.",
          },
        },
        {
          "@type": "Question",
          name: "Are water sports equipment and toys included in yacht charters?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most luxury yachts come equipped with a range of toys, such as jet skis, paddleboards, snorkeling gear, and inflatable slides. We confirm the exact inventory during planning to align with your family's preferences.",
          },
        },
        {
          "@type": "Question",
          name: "How are culinary preferences handled in staffed residences or yachts?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Prior to departure, we collect detailed food preferences, dietary restrictions, and beverage requests. The private chef uses this profile to design custom daily menus tailored specifically to your party.",
          },
        },
        {
          "@type": "Question",
          name: "What level of access controls exist at exclusive resorts for VIP guests?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We work with top-tier resorts that offer exclusive VIP wings, restricted-access elevators, private beachfront cabanas, and residential enclaves that ensure high-profile guests can enjoy resort amenities with minimal public interaction.",
          },
        },
      ],
    },
  ],
};

/* ── Data: Which accommodation is right for you (tabbed panel) ──── */
const accommodationOptions = [
  {
    id: "villa",
    title: "Private Villa",
    badge: "Villa",
    icon: Home,
    image: VillaImage,
    objectPosition: "center 30%",
    window: "Family vacations and multi-generational travel",
    desc: "Villas provide complete control over your environment while offering many of the comforts of home — multiple bedrooms, private pools, and dedicated staff for everyone to relax comfortably.",
    columns: [
      {
        label: "Best For:",
        items: [
          "Multi-Generational Travel",
          "Privacy & Extended Stays",
          "Family Celebrations",
        ],
      },
    ],
    themeLabel: "Space to Gather",
    themeText:
      "Instead of reserving multiple hotel rooms, families can stay together while still enjoying private bedrooms and quiet retreats.",
  },
  {
    id: "island",
    title: "Private Island",
    badge: "Private Island",
    icon: Palmtree,
    image: PrivateIslandImage,
    objectPosition: "center 40%",
    window: "Ultimate seclusion and VIP family vacations",
    desc: "For athletes who spend much of the year in the public eye, private islands provide complete freedom to unwind with private beaches, personalized dining, and dedicated hospitality teams.",
    columns: [
      {
        label: "Best For:",
        items: [
          "Ultimate Seclusion",
          "Romantic Escapes",
          "Championship Celebrations",
        ],
      },
    ],
    themeLabel: "No Crowds, No Interruptions",
    themeText:
      "With complete privacy and exclusive amenities, families can simply enjoy being together.",
  },
  {
    id: "yacht",
    title: "Yacht Charter",
    badge: "Yacht Charter",
    icon: Sailboat,
    image: YachtImage1,
    objectPosition: "center 50%",
    window: "Exploring multiple destinations with total flexibility",
    desc: "Instead of staying in one location, a private yacht becomes both transportation and accommodation — offering flexible itineraries, secluded beaches, and complete privacy.",
    columns: [
      {
        label: "Best For:",
        items: [
          "Exploring Multiple Destinations",
          "Adventure & Coastal Cruising",
          "Flexible Itineraries",
        ],
      },
    ],
    themeLabel: "A Floating Luxury Residence",
    themeText:
      "Every day brings the opportunity to explore a new destination while returning to the comfort of your own private crew and suites.",
  },
  {
    id: "resort",
    title: "Luxury Resort",
    badge: "Luxury Resort",
    icon: Hotel,
    image: LuxuryResortImage,
    objectPosition: "center 60%",
    window: "Wellness and full-service family amenities",
    desc: "The best resorts offer far more than elegant accommodations — fine dining, wellness centers, and family activity programs designed for children, teenagers, and adults alike.",
    columns: [
      {
        label: "Best For:",
        items: [
          "Wellness Vacations",
          "Family-Friendly Amenities",
          "Full-Service Experiences",
        ],
      },
    ],
    themeLabel: "Convenience Without Compromise",
    themeText:
      "Exclusive resorts provide the convenience of a full-service vacation while maintaining a peaceful, sophisticated atmosphere.",
  },
  {
    id: "residence",
    title: "Staffed Residence",
    badge: "Staffed Residence",
    icon: Users,
    image: StaffedResidenceImage,
    objectPosition: "center 30%",
    window: "Longer stays with personalized, home-like service",
    desc: "For longer stays, many athletes choose fully staffed luxury residences that combine the comfort of a private home with the services of a luxury hotel.",
    columns: [
      {
        label: "Best For:",
        items: ["Longer Stays", "Personalized Service", "Large Family Groups"],
      },
    ],
    themeLabel: "Every Detail Managed",
    themeText:
      "A dedicated team of chefs, housekeepers, and concierge staff allows families to focus entirely on enjoying their vacation.",
  },
];


/* ── FAQ Component ─────────────────────────────────────────────── */
function FAQ() {
  const [open, setOpen] = useState(null);

  const faqData = [
    {
      q: "Why do professional athletes choose private villas?",
      a: "Private villas provide greater privacy, spacious accommodations, personalized service, and flexibility compared to traditional hotels.",
    },
    {
      q: "What is included in a staffed luxury residence?",
      a: "Many residences include a private chef, housekeeping, concierge services, butler, villa manager, and additional staff depending on the property.",
    },
    {
      q: "Are private yacht charters suitable for families?",
      a: "Yes. Luxury yachts offer spacious accommodations, professional crews, water activities, and customized itineraries that appeal to travelers of all ages.",
    },
    {
      q: "What are the benefits of staying on a private island?",
      a: "Private islands provide complete privacy, personalized service, exclusive amenities, and an exceptional level of relaxation.",
    },
    {
      q: "Are luxury resorts still a good option?",
      a: "Absolutely. Many luxury resorts combine outstanding accommodations with wellness facilities, family programs, fine dining, and concierge-level service.",
    },
    {
      q: "Which accommodation offers the most privacy?",
      a: "Private islands, luxury villas, and yacht charters generally provide the highest levels of privacy.",
    },
    {
      q: "Are these accommodations suitable for multi-generational travel?",
      a: "Yes. Villas, staffed residences, and luxury cruises are particularly well suited for extended families traveling together.",
    },
    {
      q: "How far in advance should luxury accommodations be booked?",
      a: "Booking six to twelve months ahead is recommended, especially during peak travel seasons and for larger villas or private islands.",
    },
    {
      q: "Can accommodations accommodate changing schedules?",
      a: "Many luxury travel advisors recommend flexible booking options whenever possible to help athletes adapt to unexpected schedule changes.",
    },
    {
      q: "Is working with a luxury travel advisor worthwhile?",
      a: "For high-profile travelers seeking personalized service, privacy, and carefully curated experiences, professional planning often delivers exceptional value.",
    },
    {
      q: "Can a private yacht charter accommodate custom routes and spontaneous detours?",
      a: "Yes. One of the greatest benefits of a private yacht charter is the ability to customize your cruise itinerary, allowing for spontaneous route adjustments, custom anchorages, and personalized island hopping in collaboration with the captain.",
    },
    {
      q: "How do you match a traveler with the right private villa or yacht?",
      a: "We conduct a thorough profiling of your group size, privacy expectations, dietary preferences, recreational interests, and location requirements to curate a selection from our vetted network of ultra-luxury estates and yachts.",
    },
    {
      q: "Are water sports equipment and toys included in yacht charters?",
      a: "Most luxury yachts come equipped with a range of toys, such as jet skis, paddleboards, snorkeling gear, and inflatable slides. We confirm the exact inventory during planning to align with your family's preferences.",
    },
    {
      q: "How are culinary preferences handled in staffed residences or yachts?",
      a: "Prior to departure, we collect detailed food preferences, dietary restrictions, and beverage requests. The private chef uses this profile to design custom daily menus tailored specifically to your party.",
    },
    {
      q: "What level of access controls exist at exclusive resorts for VIP guests?",
      a: "We work with top-tier resorts that offer exclusive VIP wings, restricted-access elevators, private beachfront cabanas, and residential enclaves that ensure high-profile guests can enjoy resort amenities with minimal public interaction.",
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
const PrivateVillasYachtsExclusiveResorts = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [readMore, setReadMore] = useState(false);
  const [activeOption, setActiveOption] = useState("villa");
  const currentOption =
    accommodationOptions.find((d) => d.id === activeOption) ||
    accommodationOptions[0];

  const ActiveIcon = currentOption.icon;

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
          Private Villas, Yachts & Exclusive Resorts | Luxury Travel for
          Professional Athletes
        </title>
        <meta
          name="title"
          content="Private Villas, Yachts & Exclusive Resorts"
        />
        <meta
          name="description"
          content="Discover why professional athletes choose private villas, luxury yacht charters, exclusive resorts, and staffed residences. Learn how privacy, security, flexibility, and personalized service create the ultimate luxury vacation experience."
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
            Private Villas, Yachts <br /> & Exclusive Resorts
          </h1>

          <p>
            For professional athletes and their families, choosing the right
            accommodation is just as important as choosing the destination.
            Luxury travel isn't simply about staying in a five-star hotel.
          </p>

          <p>
            It's about finding a place where you can truly relax, reconnect with
            family, maintain privacy, and enjoy personalized experiences without
            interruption.
          </p>

          {readMore && (
            <>
              <p>
                Whether it's a secluded villa overlooking the Mediterranean, a
                fully staffed beachfront estate, a private yacht cruising
                through the Caribbean, or an exclusive resort hidden away from
                the crowds, the right accommodation transforms a vacation into
                something unforgettable.
              </p>

              <p>
                Today's luxury travelers increasingly seek experiences that
                offer space, flexibility, security, and exceptional service —
                all while feeling like a home away from home.
              </p>

              <p>
                With more than 40 years in the travel industry and experience
                spanning over 121 countries, Angela Hughes helps professional
                athletes and their families select the accommodations that best
                match their lifestyle, privacy needs, and season.
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

      {/* ── WHY ACCOMMODATION MATTERS ─────────────────────────────── */}
      <section className="adg-c-section adg-c-bg-white" id="adg-c-why-matters">
        <div className="adg-c-container">
          <div className="adg-c-section-header">
            <h2 className="adg-c-h2">
              Why Accommodation Matters for Professional Athletes
            </h2>
            <div className="adg-c-accent-line"></div>
          </div>

          <div className="adg-c-overview-layout">
            <div className="adg-c-overview-icons">
              {[
                "Complete privacy",
                "Spacious living areas",
                "Personalized service",
                "Flexible schedules",
                "Family-friendly environments",
                "Wellness opportunities",
                "Security and discretion",
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
                    Elite athletes travel differently than most vacationers.
                    During the season, they spend countless nights in hotels for
                    competitions and training. When the off-season arrives, they
                    often want something entirely different.
                  </p>
                </div>
              </div>

              <div className="adg-c-overview-image-wrap">
                <img
                  src={AccommodationMattersImage}
                  alt="Professional athlete family relaxing at a private luxury villa"
                  className="adg-c-overview-img"
                />
                <div className="adg-c-overview-img-overlay">
                  <span className="adg-c-overview-img-label">
                    More Than a Place to Sleep
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRIVATE LUXURY VILLAS ────────────────────────────────── */}
      <section
        className="ugt-components-section"
        id="private-luxury-villas"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="ugt-components-container">
          <div className="ugt-components-header">
            <h2 className="ugt-components-title">Private Luxury Villas</h2>
            <div className="adg-c-accent-line"></div>
          </div>

          <div className="ugt-components-list">
            <div className="ugt-component-row">
              <div className="ugt-component-image-wrapper">
                <div className="ugt-component-image-container">
                  <img
                    src={VillaImage}
                    alt="Luxury private villa with spacious indoor and outdoor living areas"
                    className="ugt-component-image"
                  />
                </div>
              </div>

              <div className="ugt-component-content">
                <p className="ugt-component-text">
                  Private villas are one of the most popular accommodation
                  choices for professional athletes and their families. Unlike
                  traditional hotels, villas provide complete control over your
                  environment while offering many of the comforts of home.
                </p>

                <div className="ugt-questions-box">
                  <span className="ugt-questions-title">
                    Why Athletes Choose Villas
                  </span>

                  <ul className="ugt-questions-list">
                    {[
                      "Multiple bedrooms",
                      "Large indoor and outdoor living spaces",
                      "Private swimming pools",
                      "Outdoor dining areas",
                      "Home theaters",
                      "Fitness rooms",
                      "Dedicated staff",
                      "Beautiful natural surroundings",
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
                  Whether you're traveling with your immediate family or hosting
                  several generations, luxury villas provide ample space for
                  everyone to relax, reconnect, and enjoy an exceptional
                  vacation together.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRIVATE ISLANDS: THE ULTIMATE ESCAPE ─────────────────── */}
      <section className="Lfsg-section Lfsg-bg-dark" id="private-islands">
        <div className="Lfsg-container">
          <div className="Lfsg-section-header">
            <h2 className="Lfsg-h2-white">
              Private Islands: The Ultimate Escape
            </h2>
            <div className="Lfsg-accent-line-white" />
          </div>

          <p
            className="Lfsg-mistake-desc"
            style={{ textAlign: "center", marginBottom: "2rem" }}
          >
            Few travel experiences offer greater exclusivity than staying on a
            private island. For athletes who spend much of the year in the
            public eye, private islands provide complete freedom to unwind.
          </p>

          <div className="Lfsg-mistakes-grid">
            {[
              {
                title: "Private Beaches & Villas",
                desc: "Luxury beachfront villas with personalized dining for every guest.",
              },
              {
                title: "Water Sports & Excursions",
                desc: "Yacht excursions, sunset cruises, and water sports for the whole family.",
              },
              {
                title: "Spa & Wellness Treatments",
                desc: "Relaxation experiences tailored to every generation.",
              },
              {
                title: "Dedicated Hospitality Teams",
                desc: "No crowds and no interruptions — just time together.",
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

      {/* ── LUXURY YACHT CHARTERS ────────────────────────────────── */}
      <section className="wnf-section wnf-bg-white" id="luxury-yacht-charters">
        <div className="wnf-container">
          <div className="wnf-section-header">
            <h2 className="wnf-h2">Luxury Yacht Charters</h2>
            <div className="wnf-accent-line"></div>
          </div>

          <div className="wnf-split">
            <div className="la-image-column">
              <div className="la-image-wrap">
                <img
                  src={YachtImage1}
                  alt="Luxury yacht charter for professional athlete families"
                  className="la-image"
                />
                <div className="la-image-overlay"></div>
              </div>
            </div>

            <div className="wnf-content-column">
              <div className="wnf-block">
                <p className="wnf-lead-text">
                  For travelers who value flexibility and adventure, private
                  yacht charters offer a unique way to experience the world.
                  Instead of staying in one location, your luxury yacht becomes
                  both transportation and accommodation.
                </p>

                <ul className="wnf-feature-list">
                  {[
                    "Flexible itineraries",
                    "Access to secluded beaches",
                    "Private anchorages",
                    "Luxury suites",
                    "Gourmet dining",
                    "Water sports equipment",
                    "Professional crew",
                    "Complete privacy",
                  ].map((feature, i) => (
                    <li key={i} className="wnf-feature-item">
                      <div className="wnf-icon-wrapper">
                        <Check size={14} />
                      </div>
                      <span className="wnf-feature-text">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="wnf-footer-note">
                <p className="wnf-highlight-text">
                  Every day brings the opportunity to explore a new destination
                  while returning to the comfort of your own floating luxury
                  residence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE BENEFITS OF SPACE */}
      <section className="azs-suites-section" id="azs-benefits-of-space">
        <div className="azs-container">
          <div className="azs-section-header">
            <h2 className="azs-section-title">The Benefits of Space</h2>
            <div className="azs-section-accent"></div>
            <p className="azs-section-subtitle">
              Spacious accommodations and personalized service create a more
              comfortable, relaxing, and memorable luxury vacation.
            </p>
          </div>

          <div className="azs-suites-grid">
            {/* Benefits of Space Card */}
            <div className="azs-suites-card azs-seabourn-suites">
              <div className="azs-suites-image-wrap">
                <img
                  src={LuxuryVillaImage}
                  alt="Spacious luxury villa living room for families"
                  className="azs-suites-img"
                />
                <span className="azs-suites-image-badge">Spacious Living</span>
              </div>

              <div className="azs-suites-content">
                <div className="azs-suites-card-header">
                  <div className="azs-suites-icon-circle">
                    <Home size={24} className="azs-suites-icon" />
                  </div>
                  <h3 className="azs-suites-title">The Benefits of Space</h3>
                </div>

                <p className="azs-suites-intro">
                  One of the greatest advantages of a private villa is the
                  amount of space available. Instead of reserving multiple hotel
                  rooms, families can stay together while still enjoying private
                  bedrooms and quiet retreats.
                </p>

                <div className="azs-suites-body">
                  <h4 className="azs-suites-group-title">
                    Large living spaces encourage:
                  </h4>

                  <ul className="azs-suites-list">
                    {[
                      "Family meals",
                      "Movie nights",
                      "Children's playtime",
                      "Celebrations",
                      "Relaxation",
                      "Quality conversations",
                    ].map((item, idx) => (
                      <li key={idx} className="azs-suites-list-item">
                        <div className="azs-suites-list-icon-wrapper">
                          <Star size={14} className="azs-suites-list-icon" />
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="azs-suites-divider"></div>

                  <div className="azs-suites-highlight-box azs-seabourn-suites-highlight">
                    <p className="azs-suites-highlight-text">
                      For many families, these shared moments become the
                      highlight of the vacation.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Staffed Luxury Residences Card */}
            <div className="azs-suites-card azs-azamara-suites">
              <div className="azs-suites-image-wrap">
                <img
                  src={StaffedResidenceImage}
                  alt="Luxury staffed residence with dedicated hospitality team"
                  className="azs-suites-img"
                />
                <span className="azs-suites-image-badge">
                  Full-Service Living
                </span>
              </div>

              <div className="azs-suites-content">
                <div className="azs-suites-card-header">
                  <div className="azs-suites-icon-circle">
                    <Users size={24} className="azs-suites-icon" />
                  </div>
                  <h3 className="azs-suites-title">
                    Staffed Luxury Residences
                  </h3>
                </div>

                <p className="azs-suites-intro">
                  For longer stays, many athletes choose fully staffed luxury
                  residences that combine the comfort of a private home with the
                  exceptional service of a luxury hotel.
                </p>

                <div className="azs-suites-body">
                  <h4 className="azs-suites-group-title">
                    A dedicated team may include:
                  </h4>

                  <ul className="azs-suites-list">
                    {[
                      "Private chef",
                      "Housekeeper",
                      "Butler",
                      "Concierge",
                      "Villa manager",
                      "Driver",
                      "Security personnel",
                      "Childcare professionals",
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
                      Every aspect of daily life is carefully managed, allowing
                      families to focus entirely on enjoying their vacation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── EXCLUSIVE LUXURY RESORTS ───────────────────────────── */}
      <section
        className="dmg-info-section dmg-bg-soft"
        id="dmg-exclusive-luxury-resorts"
      >
        <div className="dmg-info-container">
          <div className="dmg-info-grid">
            <div className="dmg-info-content">
              <h2 className="dmg-info-title">Exclusive Luxury Resorts</h2>
              <div className="dmg-info-accent"></div>

              <p className="dmg-info-lead">
                Luxury resorts remain a favorite choice for professional
                athletes seeking world-class amenities, personalized service,
                and effortless relaxation. The finest resorts offer much more
                than elegant accommodations—they deliver exceptional experiences
                for every guest.
              </p>

              <div className="dmg-info-features dmg-info-features-scrollable">
                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">Fine Dining</h3>
                    <p className="dmg-info-feature-desc">
                      Enjoy restaurants featuring exceptional local specialties,
                      international cuisine, and personalized dining
                      experiences.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">Wellness Centers</h3>
                    <p className="dmg-info-feature-desc">
                      Luxury spas, state-of-the-art fitness facilities, yoga
                      studios, and recovery-focused wellness experiences support
                      complete relaxation.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Family Activities
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Engaging programs and activities designed for children,
                      teenagers, parents, and grandparents to enjoy together.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Private Experiences
                    </h3>
                    <p className="dmg-info-feature-desc">
                      From private beach dinners to guided excursions and
                      customized adventures, every experience can be tailored to
                      your interests.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="dmg-info-media">
              <div className="dmg-media-wrapper">
                <img
                  src={LuxuryResortImage}
                  alt="Exclusive luxury resort with oceanfront accommodations"
                  className="dmg-media-img"
                  style={{ height: "650px" }}
                />
                <div className="dmg-media-overlay"></div>

                <div className="dmg-media-badge">
                  <span>World-Class Luxury & Personalized Service</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRIVACY COMES FIRST ──────────────────────────────────── */}
      <section className="adg-c-section adg-c-bg-white" id="privacy-first">
        <div className="adg-c-container">
          <div className="adg-c-section-header">
            <h2 className="adg-c-h2">Privacy Comes First</h2>
            <div className="adg-c-accent-line"></div>
          </div>

          <p className="Asc-body-text" style={{ marginBottom: "20px" }}>
            Professional athletes often spend much of their careers in the
            spotlight. Vacations should provide an opportunity to step away from
            public attention. Whether staying in a villa, resort, or aboard a
            yacht, privacy allows families to relax without interruption.
          </p>

          <div className="adg-c-overview-icons">
            {[
              "Gated entrances",
              "Private access roads",
              "Limited guest capacity",
              "Exclusive amenities",
              "Personalized check-in",
              "Discreet service",
            ].map((label, i) => (
              <div key={i} className="adg-c-overview-item">
                <span className="adg-c-overview-icon">
                  <Lock size={16} strokeWidth={2.5} />
                </span>
                <span className="adg-c-overview-label">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECURITY & FLEXIBILITY */}
      <section
        className="Ejsc-ent-section"
        id="Ejsc-security-flexibility"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="Ejsc-container">
          <div className="Ejsc-section-header">
            <h2 className="Ejsc-section-title">
              Security Without Compromising Comfort
            </h2>
            <div className="Asc-accent-line"></div>
            <p className="Ejsc-section-subtitle">
              Luxury accommodations combine exceptional privacy, personalized
              service, and discreet security so travelers can fully relax
              throughout their vacation.
            </p>
          </div>

          <div className="Ejsc-ent-grid">
            {/* Security Card */}
            <div className="Ejsc-ent-card Ejsc-explora-card">
              <div className="Ejsc-card-header">
                <div className="Ejsc-card-icon-wrap">
                  <ShieldCheck size={24} className="Ejsc-card-icon" />
                </div>
                <h3 className="Ejsc-card-title">
                  Security Without Compromising Comfort
                </h3>
              </div>

              <p className="Ejsc-card-intro">
                Security is an important consideration for many high-profile
                travelers. Luxury properties provide peace of mind while
                maintaining a relaxed and welcoming atmosphere.
              </p>

              <ul className="Ejsc-feature-list">
                {[
                  "Controlled property access",
                  "On-site security teams",
                  "Secure transportation",
                  "Confidential guest services",
                  "Private transfers",
                  "Personalized arrival and departure arrangements",
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
                  Every detail is designed to protect privacy while delivering
                  an effortless luxury experience.
                </p>
              </div>
            </div>

            {/* Flexibility Card */}
            <div className="Ejsc-ent-card Ejsc-seabourn-card">
              <div className="Ejsc-card-header">
                <div className="Ejsc-card-icon-wrap">
                  <CalendarClock size={24} className="Ejsc-card-icon" />
                </div>
                <h3 className="Ejsc-card-title">
                  Flexibility Makes Every Vacation Better
                </h3>
              </div>

              <p className="Ejsc-card-intro">
                Unlike traditional hotels with fixed schedules, luxury
                accommodations offer complete flexibility so every day can be
                tailored to your family's preferences.
              </p>

              <ul className="Ejsc-feature-list">
                {[
                  "Enjoy breakfast whenever you choose",
                  "Customize dining experiences",
                  "Plan private excursions",
                  "Relax away from crowded public areas",
                  "Adjust schedules around children's needs",
                  "Balance wellness, recovery, and adventure",
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
                  This flexibility is especially valuable for professional
                  athletes, whose vacations often need to accommodate training,
                  recovery, and family time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHICH ACCOMMODATION IS RIGHT FOR YOU (TABBED) ────────── */}
      <section className="luc-destinations-section" id="which-is-right-for-you">
        <div className="luc-destinations-container">
          <div className="luc-destinations-header">
            <h2 className="luc-destinations-title">
              Which Accommodation Is Right for You?
            </h2>

            <div className="adg-c-accent-line"></div>

            <p className="luc-destinations-intro">
              The ideal choice depends on your travel goals. Each option
              delivers luxury in a different way, allowing travelers to choose
              the experience that best matches their lifestyle.
            </p>
          </div>

          <div className="luc-dest-layout">
            <nav className="luc-dest-nav">
              {accommodationOptions.map((item) => {
                const NavIcon = item.icon;
                const isActive = activeOption === item.id;

                return (
                  <button
                    key={item.id}
                    className={`luc-dest-nav-btn ${
                      isActive ? "luc-dest-nav-btn--active" : ""
                    }`}
                    onClick={() => setActiveOption(item.id)}
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

            <div className="luc-dest-panel" key={activeOption}>
              <div className="luc-dest-img-wrap">
                <img
                  src={currentOption.image}
                  alt={currentOption.title}
                  className="luc-dest-img"
                  style={{ objectPosition: currentOption.objectPosition || "center" }}
                />

                <div className="luc-dest-img-overlay">
                  <div className="luc-dest-img-icon">
                    <ActiveIcon size={22} strokeWidth={1.6} />
                  </div>

                  <span className="luc-dest-img-title">
                    {currentOption.title}
                  </span>
                </div>
              </div>

              <p className="luc-dest-panel-desc">
                <strong>{currentOption.window}.</strong> {currentOption.desc}
              </p>

              <div className="luc-dest-columns">
                {currentOption.columns.map((col, cIdx) => (
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
                    {currentOption.themeLabel}
                  </span>

                  <p className="luc-dest-theme-note-text">
                    {currentOption.themeText}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ══ DESTINATIONS THAT PAIR PERFECTLY WITH LUXURY ACCOMMODATIONS ════════════════════════ */}
      <section className="dac-families-section">
        <div className="dac-families-container">
          <div className="dac-families-grid">
            {/* Left Content Column */}
            <div className="dac-families-left">
              <div className="dac-families-heading-wrap">
                <h2 className="dac-families-title">
                  Destinations That Pair Perfectly with Luxury Accommodations
                </h2>
                <div className="dac-families-accent"></div>
              </div>

              <div className="dac-families-features">
                {[
                  {
                    title: "Mediterranean",
                    desc: "Luxury villas, private yachts, and exclusive coastal resorts offering breathtaking sea views and timeless elegance.",
                  },
                  {
                    title: "Caribbean",
                    desc: "Private islands, beachfront estates, and luxury yacht charters create the ultimate tropical escape.",
                  },
                  {
                    title: "Hawaii",
                    desc: "Oceanfront villas, wellness resorts, and spacious family-friendly residences surrounded by natural beauty.",
                  },
                  {
                    title: "French Polynesia",
                    desc: "Private overwater villas and secluded island escapes provide unmatched tranquility and exclusivity.",
                  },
                  {
                    title: "Amalfi Coast",
                    desc: "Elegant cliffside villas with spectacular sea views, charming villages, and world-class hospitality.",
                  },
                  {
                    title: "The Maldives",
                    desc: "Luxury island resorts offering exceptional privacy, personalized service, and unforgettable overwater accommodations.",
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
                      src={BucketMediterranean}
                    alt="Luxury coastal villa overlooking the Mediterranean"
                    className="dac-families-img"
                  />
                  <div className="dac-families-img-caption">
                    Luxury Coastal Retreat
                  </div>
                </div>

                <div className="dac-families-img-card dac-families-img-card--secondary">
                  <img
                      src={BucketCaribbean}
                    alt="Luxury beachfront resort with crystal-clear waters"
                    className="dac-families-img"
                  />
                  <div className="dac-families-img-caption">
                    Private Luxury Resort
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY WORK WITH A LUXURY TRAVEL ADVISOR? ────────────────────── */}
      <section className="adg-section" id="adg-luxury-travel-advisor">
        <div className="adg-container">
          <div className="adg-section-header" style={{ marginBottom: "60px" }}>
            <h2 className="adg-h2">Why Work with a Luxury Travel Advisor?</h2>
            <div className="adg-accent-line"></div>
          </div>

          <div
            className="adg-split-layout"
            style={{ alignItems: "flex-start" }}
          >
            {/* Left Side */}
            <div className="adg-content-card-side">
              <img
                src={LuxuryAdvisorImage}
                alt="Luxury travel advisor helping plan a personalized vacation"
                className="adg-side-image"
                style={{ height: "30vh", border: "1px solid var(--navy)" }}
              />

              <div className="adg-info-card">
                <div className="adg-card-meta">
                  <Award size={28} />
                  <span className="adg-meta-label">Expert Travel Planning</span>
                </div>

                <p className="adg-card-lead">
                  Selecting the right accommodation goes beyond comparing photos
                  online. An experienced luxury travel advisor helps you find
                  destinations, accommodations, and experiences that perfectly
                  match your lifestyle and travel goals.
                </p>

                <div className="adg-card-divider"></div>

                <p className="adg-card-subtext">
                  For busy professional athletes, expert planning saves valuable
                  time while creating a seamless, personalized travel experience
                  from departure through your return home.
                </p>
              </div>
            </div>

            {/* Right Side */}
            <div className="adg-list-side">
              {[
                {
                  title: "Recommend Destinations That Fit Your Lifestyle",
                  icon: <Compass size={20} />,
                },
                {
                  title: "Match Accommodations to Your Family's Needs",
                  icon: <Hotel size={20} />,
                },
                {
                  title: "Arrange Private Transportation",
                  icon: <Map size={20} />,
                },
                {
                  title: "Coordinate Yacht Charters",
                  icon: <Sparkles size={20} />,
                },
                {
                  title: "Secure Exclusive Villas and Residences",
                  icon: <Award size={20} />,
                },
                {
                  title: "Organize Concierge Services",
                  icon: <Headset size={20} />,
                },
                {
                  title: "Assist Before and Throughout Your Trip",
                  icon: <CalendarClock size={20} />,
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
                        "Specialist in multigenerational travel for professional athletes and their families",
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
                  help professional athletes bring parents, grandparents,
                  siblings, and children together — from destination and villa
                  selection to concierge planning and milestone celebrations.
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
              Everything you need to know about choosing private villas, yachts,
              and exclusive resorts.
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
            alt="Private villa family gathering at a luxury destination"
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
                  Ready to Find Your <br /> Perfect Escape?
                </h2>
                <div className="Asc-help-accent"></div>
              </div>

              <div className="Asc-help-grid">
                <div className="Asc-help-info">
                  <p className="Asc-help-intro">
                    Connect with Angela Hughes and the expert team at Trips
                    &amp; Ships Luxury Travel for personalized guidance on
                    selecting the perfect private villa, yacht, or exclusive
                    resort.
                  </p>

                  <p className="Asc-help-intro">
                    From villa selection and yacht charters to private islands
                    and staffed residences, expert support helps you find an
                    accommodation that matches your lifestyle.
                  </p>

                  <p className="Asc-help-intro">
                    Because true luxury isn't measured by the number of stars a
                    property has — it's measured by the freedom to enjoy your
                    time exactly the way you want.
                  </p>

                  <div className="Asc-help-btn-container">
                    <Link
                      to="/contact"
                      className="Asc-help-cta-btn"
                      style={{ textDecoration: "none" }}
                    >
                      Start Planning Your Escape
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
                      "Luxury yacht charter planning",
                      "Exclusive resort selection",
                      "Staffed residence coordination",
                      "Privacy & security arrangements",
                      "Full concierge support, start to finish",
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
                    professional athletes and their families select private
                    villas, yachts, and exclusive resorts worldwide.
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

export default PrivateVillasYachtsExclusiveResorts;
