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
  Waves,
  Mountain,
  Headset,
  Hotel,
  Map,
  Home,
  Ship,
  Landmark,
  Briefcase,
  ShieldCheck,
  Trophy,
  Gift,
  Snowflake,
  Flower2,
} from "lucide-react";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela3.jpeg";

import HeroImage1 from "../../assets/PrivateJetConciergeTravel/championship-hero-villa-celebration-sunset.png";
import HeroImage2 from "../../assets/PrivateJetConciergeTravel/championship-celebrations-milestone-travel-luxury-family..webp";
import HeroImage3 from "../../assets/PrivateJetConciergeTravel/multigenerational-travel-professional-athletes-luxury-family-villa.webp";

import DifferentApproachImage from "../../assets/PrivateJetConciergeTravel/championship-celebrations-milestone-travel-luxury-family..webp";

import BucketMediterranean from "../../assets/WhichMediterraneanItineraryIsBest/explora-II-mediterranean-coastal-cruise-view.jpg";
import BucketCaribbean from "../../assets/CaribbeanCruisesExploraJourneys/curacao-southern-caribbean-architecture.jpg";
import BucketAlaska from "../../assets/AlaskaCruisesExploraJourneys/alaska-glacier-mountain-lake-scenic-wilderness-vacation.jpeg";
import BucketSafari from "../../assets/PrivateJetConciergeTravel/Luxury-African-Safaris.png";
import BucketPolynesia from "../../assets/PrivateJetConciergeTravel/championship-french-polynesia-overwater-celebration.png";
import BucketJapan from "../../assets/JapanCruisesExploraJourneys/angela-hughes-kyoto-gion-geisha-street-pagoda-japan-travel-expert.jpg";

import RetirementVacationImage from "../../assets/PrivateJetConciergeTravel/off-season-luxury-travel-professional-athletes-private-villa-retreat.webp";
import PersonalizedExperienceImage from "../../assets/PrivateJetConciergeTravel/private-villas-yachts-exclusive-resorts-luxury-superyacht.webp";
import LogisticsImage from "../../assets/PrivateJetConciergeTravel/vip-airport-meet-and-greet-concierge-service.webp";
import FamilyImage from "../../assets/PrivateJetConciergeTravel/multigenerational-travel-professional-athletes-luxury-family-villa.webp";
import MultiGenerationalCelebrationImage from "../../assets/PrivateJetConciergeTravel/private-villas-yachts-exclusive-resorts-luxury-yacht-group..webp";
import AdvisorImage from "../../assets/PrivateJetConciergeTravel/championship-luxury-travel-advisor-planning.png";
import CtaImage from "../../assets/PrivateJetConciergeTravel/championship-hero-villa-celebration-sunset.png";

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
        "Luxury travel agency specializing in championship celebration trips and milestone travel for professional athletes and their families, including retirement vacations, Hall of Fame honors, anniversaries, birthdays, and family celebrations.",
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
      name: "Championship Celebrations & Milestone Travel",
      url: "https://tripsandships.com/championship-celebrations-milestone-travel",
      description:
        "Celebrate championships, contract signings, retirements, Hall of Fame inductions, birthdays, anniversaries, and family milestones with luxury travel experiences designed for professional athletes and their loved ones.",
    },
    {
      "@type": "Service",
      serviceType: "Championship Celebration & Milestone Travel Planning",
      provider: {
        "@type": "TravelAgency",
        name: "Trips & Ships Luxury Travel",
      },
      areaServed: "Worldwide",
      description:
        "Concierge-level luxury travel planning built to celebrate championships, retirements, Hall of Fame honors, birthdays, anniversaries, and family milestones in extraordinary destinations.",
    },
    {
      "@type": "Article",
      headline: "Championship Celebrations & Milestone Travel",
      description:
        "A complete guide to celebrating championships, contract signings, retirements, Hall of Fame inductions, birthdays, anniversaries, and family milestones through luxury travel designed for professional athletes and their families.",
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
          name: "Championship Celebrations & Milestone Travel",
          item: "https://tripsandships.com/championship-celebrations-milestone-travel",
        },
      ],
    },
    {
      "@type": "ItemList",
      name: "Milestones Celebrated Through Luxury Travel",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Championship Victories",
          description:
            "Luxury family vacations, private island escapes, and yacht charters celebrate years of discipline, sacrifice, and teamwork.",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Contract Signings",
          description:
            "Private villas, European tours, and wellness resorts mark another important chapter in an athlete's career.",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Retirement",
          description:
            "Reflection, family time, and bucket-list destinations celebrate everything a career made possible.",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Hall of Fame & Career Honors",
          description:
            "Mediterranean cruises, safari expeditions, and private villa celebrations honor a lifetime of achievement.",
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Family Milestones & Anniversaries",
          description:
            "Graduations, reunions, birthdays, and anniversaries become unforgettable shared experiences.",
        },
      ],
    },
    {
      "@type": "TouristTrip",
      name: "Championship Celebration & Milestone Luxury Vacation",
      provider: {
        "@type": "Organization",
        name: "Trips & Ships Luxury Travel",
      },
      touristType:
        "Professional athletes and their families, friends, and teammates",
    },
    {
      "@type": "Event",
      name: "Championship Celebration & Milestone Travel Experience",
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      organizer: {
        "@type": "Organization",
        name: "Trips & Ships Luxury Travel",
      },
      description:
        "A personalized luxury travel experience designed to celebrate championships, retirements, Hall of Fame honors, birthdays, anniversaries, and family milestones.",
    },
    {
      "@type": "Review",
      itemReviewed: {
        "@type": "Service",
        name: "Championship Celebrations & Milestone Travel",
      },
      author: {
        "@type": "Person",
        name: "Angela Hughes",
      },
      reviewBody:
        "The greatest milestones deserve more than a celebration — they deserve an unforgettable journey shared with the people who made every success possible.",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What are championship celebration trips?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "They are luxury vacations designed to celebrate major athletic achievements such as league championships, tournament victories, or career milestones with family and loved ones.",
          },
        },
        {
          "@type": "Question",
          name: "What destinations are best for celebration vacations?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Mediterranean, Caribbean, Alaska, Hawaii, French Polynesia, African safaris, and luxury cruises are among the most popular choices.",
          },
        },
        {
          "@type": "Question",
          name: "What types of milestones can be celebrated?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Championship wins, contract signings, retirements, Hall of Fame inductions, anniversaries, birthdays, graduations, family reunions, and personal achievements.",
          },
        },
        {
          "@type": "Question",
          name: "Are these vacations suitable for families?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Many celebration trips are designed for spouses, children, parents, grandparents, and extended family members.",
          },
        },
        {
          "@type": "Question",
          name: "Can celebrations be kept private?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. Private villas, yacht charters, exclusive resorts, and concierge services provide exceptional privacy.",
          },
        },
        {
          "@type": "Question",
          name: "What experiences can be customized?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Private dinners, yacht cruises, guided excursions, spa treatments, adventure activities, photography sessions, and personalized celebrations.",
          },
        },
        {
          "@type": "Question",
          name: "How far in advance should milestone travel be planned?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Planning 9–12 months ahead provides the best availability for luxury accommodations, private villas, and exclusive experiences.",
          },
        },
        {
          "@type": "Question",
          name: "Can travel advisors organize surprise celebrations?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Luxury travel advisors can coordinate surprise dinners, special events, personalized gifts, and exclusive experiences.",
          },
        },
        {
          "@type": "Question",
          name: "Are retirement vacations becoming more popular?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Many retired athletes choose luxury travel to celebrate the next chapter of life while spending meaningful time with family.",
          },
        },
        {
          "@type": "Question",
          name: "Is working with a luxury travel advisor worthwhile?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For important celebrations involving multiple travelers and personalized experiences, expert planning often ensures a smooth, memorable, and stress-free vacation.",
          },
        },
        {
          "@type": "Question",
          name: "Can you coordinate high-end banquet facilities or private venues for championship parties?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. We specialize in securing exclusive venues, private beach locations, and luxury banquet facilities, handling all coordination with caterers, decorators, and entertainment to bring your celebration vision to life.",
          },
        },
        {
          "@type": "Question",
          name: "How are guest lists, RSVP management, and group travel coordinates handled?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We manage all the travel logistics for your guests, including flight bookings, airport transfers, villa allocations, and itinerary routing, giving you a single point of contact for the entire group.",
          },
        },
        {
          "@type": "Question",
          name: "What options exist for commemorative branding or custom gifting during the trip?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We can arrange customized team merchandise, high-end welcome gifts, bespoke champagnes, and branded materials matching your team colors or milestone logo throughout the villas or yachts.",
          },
        },
        {
          "@type": "Question",
          name: "Can you organize private media coverage or professional videographers/photographers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. We hire professional, discreet luxury travel photographers and videographers to document your milestone trip, delivering high-resolution media while respecting your group's privacy.",
          },
        },
        {
          "@type": "Question",
          name: "Do you handle contract-signing travel arrangements at short notice?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. We are equipped to handle last-minute travel needs for players, family, and agents, securing private jets, fast check-ins, and secure rooms for signing events on very short notice.",
          },
        },
      ],
    },
  ],
};

/* ── Data: Bucket-list celebration destinations (tabbed panel) ───── */
const celebrationDestinations = [
  {
    id: "mediterranean",
    title: "The Mediterranean",
    badge: "Mediterranean",
    icon: Landmark,
    image: BucketMediterranean,
    window: "Luxury villas, private yachts, and coastal villages",
    desc: "Luxury villas, private yachts, coastal villages, and exceptional cuisine make the Mediterranean a timeless setting for celebrating any milestone.",
    columns: [
      {
        label: "Plan Around:",
        items: [
          "Private Coastal Villas",
          "Yacht Charter Celebrations",
          "Historic Village Dining",
        ],
      },
    ],
    themeLabel: "Elegant, Timeless Celebration",
    themeText:
      "Few destinations pair celebration and culture as naturally as the Mediterranean's coastline of villas, yachts, and cuisine.",
  },
  {
    id: "caribbean",
    title: "Caribbean",
    badge: "Caribbean",
    icon: Anchor,
    image: BucketCaribbean,
    window: "Private beaches and island-hopping adventures",
    desc: "Private beaches, luxury resorts, and island-hopping adventures create a relaxed, celebratory atmosphere the whole family can enjoy.",
    columns: [
      {
        label: "Plan Around:",
        items: [
          "Private Beachfront Resorts",
          "Island-Hopping Excursions",
          "Sunset Celebration Dinners",
        ],
      },
    ],
    themeLabel: "Easy, Sun-Soaked Celebration",
    themeText:
      "The Caribbean's warm weather and relaxed pace make it an effortless choice for gathering loved ones to celebrate.",
  },
  {
    id: "alaska",
    title: "Alaska",
    badge: "Alaska",
    icon: Snowflake,
    image: BucketAlaska,
    window: "Spectacular scenery and wildlife encounters",
    desc: "Spectacular scenery, wildlife encounters, and unforgettable family experiences make Alaska a memorable setting for milestone celebrations.",
    columns: [
      {
        label: "Plan Around:",
        items: [
          "Glacier & Coastal Cruising",
          "Wildlife Encounters",
          "Family Expedition Excursions",
        ],
      },
    ],
    themeLabel: "Nature on a Grand Scale",
    themeText:
      "Alaska's glaciers and wildlife create a dramatic, once-in-a-lifetime backdrop for celebrating a career milestone.",
  },
  {
    id: "african-safari",
    title: "African Safari",
    badge: "Safari",
    icon: Mountain,
    image: BucketSafari,
    window: "Some of the world's most extraordinary wildlife",
    desc: "Celebrate surrounded by some of the world's most extraordinary wildlife, with luxury lodges and private guides built for milestone occasions.",
    columns: [
      {
        label: "Plan Around:",
        items: [
          "Luxury Safari Lodges",
          "Private Expert Guides",
          "Dawn & Dusk Game Drives",
        ],
      },
    ],
    themeLabel: "Once-in-a-Lifetime Celebration",
    themeText:
      "An African safari transforms a milestone celebration into an unforgettable, shared family adventure.",
  },
  {
    id: "french-polynesia",
    title: "French Polynesia",
    badge: "French Polynesia",
    icon: Waves,
    image: BucketPolynesia,
    objectPosition: "center 40%",
    window: "Overwater villas and peaceful lagoons",
    desc: "Overwater villas, peaceful lagoons, and unmatched privacy make French Polynesia ideal for couples and families celebrating intimate milestones.",
    columns: [
      {
        label: "Plan Around:",
        items: [
          "Overwater Villa Celebrations",
          "Private Lagoon Excursions",
          "Sunset Champagne Toasts",
        ],
      },
    ],
    themeLabel: "Pure, Private Celebration",
    themeText:
      "Total seclusion makes French Polynesia one of the most romantic settings for anniversaries and milestone birthdays.",
  },
  {
    id: "japan",
    title: "Japan",
    badge: "Japan",
    icon: Flower2,
    image: BucketJapan,
    window: "Luxury hospitality and rich cultural traditions",
    desc: "Blend luxury hospitality with rich cultural traditions and unforgettable culinary experiences for a celebration unlike any other.",
    columns: [
      {
        label: "Plan Around:",
        items: [
          "Luxury Ryokan Stays",
          "Private Culinary Experiences",
          "Cultural Heritage Tours",
        ],
      },
    ],
    themeLabel: "Celebration Through Culture",
    themeText:
      "Japan's blend of hospitality and tradition creates a celebration that's as meaningful as it is memorable.",
  },
];

/* ── FAQ Component ─────────────────────────────────────────────── */
function FAQ() {
  const [open, setOpen] = useState(null);

  const faqData = [
    {
      q: "What are championship celebration trips?",
      a: "They are luxury vacations designed to celebrate major athletic achievements such as league championships, tournament victories, or career milestones with family and loved ones.",
    },
    {
      q: "What destinations are best for celebration vacations?",
      a: "The Mediterranean, Caribbean, Alaska, Hawaii, French Polynesia, African safaris, and luxury cruises are among the most popular choices.",
    },
    {
      q: "What types of milestones can be celebrated?",
      a: "Championship wins, contract signings, retirements, Hall of Fame inductions, anniversaries, birthdays, graduations, family reunions, and personal achievements.",
    },
    {
      q: "Are these vacations suitable for families?",
      a: "Yes. Many celebration trips are designed for spouses, children, parents, grandparents, and extended family members.",
    },
    {
      q: "Can celebrations be kept private?",
      a: "Absolutely. Private villas, yacht charters, exclusive resorts, and concierge services provide exceptional privacy.",
    },
    {
      q: "What experiences can be customized?",
      a: "Private dinners, yacht cruises, guided excursions, spa treatments, adventure activities, photography sessions, and personalized celebrations.",
    },
    {
      q: "How far in advance should milestone travel be planned?",
      a: "Planning 9–12 months ahead provides the best availability for luxury accommodations, private villas, and exclusive experiences.",
    },
    {
      q: "Can travel advisors organize surprise celebrations?",
      a: "Yes. Luxury travel advisors can coordinate surprise dinners, special events, personalized gifts, and exclusive experiences.",
    },
    {
      q: "Are retirement vacations becoming more popular?",
      a: "Many retired athletes choose luxury travel to celebrate the next chapter of life while spending meaningful time with family.",
    },
    {
      q: "Is working with a luxury travel advisor worthwhile?",
      a: "For important celebrations involving multiple travelers and personalized experiences, expert planning often ensures a smooth, memorable, and stress-free vacation.",
    },
    {
      q: "Can you coordinate high-end banquet facilities or private venues for championship parties?",
      a: "Yes. We specialize in securing exclusive venues, private beach locations, and luxury banquet facilities, handling all coordination with caterers, decorators, and entertainment to bring your celebration vision to life.",
    },
    {
      q: "How are guest lists, RSVP management, and group travel coordinates handled?",
      a: "We manage all the travel logistics for your guests, including flight bookings, airport transfers, villa allocations, and itinerary routing, giving you a single point of contact for the entire group.",
    },
    {
      q: "What options exist for commemorative branding or custom gifting during the trip?",
      a: "We can arrange customized team merchandise, high-end welcome gifts, bespoke champagnes, and branded materials matching your team colors or milestone logo throughout the villas or yachts.",
    },
    {
      q: "Can you organize private media coverage or professional videographers/photographers?",
      a: "Yes. We hire professional, discreet luxury travel photographers and videographers to document your milestone trip, delivering high-resolution media while respecting your group's privacy.",
    },
    {
      q: "Do you handle contract-signing travel arrangements at short notice?",
      a: "Absolutely. We are equipped to handle last-minute travel needs for players, family, and agents, securing private jets, fast check-ins, and secure rooms for signing events on very short notice.",
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
const ChampionshipCelebrationsMilestoneTravel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [readMore, setReadMore] = useState(false);
  const [activeDestination, setActiveDestination] = useState("mediterranean");
  const [hovered, setHovered] = useState(null);

  const currentDestination =
    celebrationDestinations.find((d) => d.id === activeDestination) ||
    celebrationDestinations[0];
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
          Championship Celebrations & Milestone Travel | Luxury Vacations for
          Professional Athletes
        </title>
        <meta
          name="title"
          content="Championship Celebrations & Milestone Travel"
        />
        <meta
          name="description"
          content="Celebrate championships, contract signings, retirements, Hall of Fame inductions, birthdays, anniversaries, and family milestones with luxury travel experiences designed for professional athletes and their loved ones."
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
            Championship Celebrations <br /> &amp; Milestone Travel
          </h1>

          <p>
            Every professional athlete experiences defining moments throughout
            their career. Winning a championship. Signing a life-changing
            contract. Announcing retirement after years of dedication. Watching
            a child graduate or celebrating a milestone birthday.
          </p>

          <p>
            These moments deserve more than a dinner reservation or a weekend
            away. Luxury travel transforms life's biggest achievements into
            unforgettable experiences shared with the people who made them
            possible.
          </p>

          {readMore && (
            <>
              <p>
                Whether you're celebrating with immediate family, teammates,
                lifelong friends, or multiple generations, a thoughtfully
                planned journey becomes a lasting reminder that success is meant
                to be celebrated together.
              </p>

              <p>
                Professional sports careers move quickly. One season ends and
                another begins before you have time to appreciate what you've
                accomplished. Luxury travel creates space to pause, reflect, and
                reconnect with the people who made every success possible.
              </p>

              <p>
                With more than 40 years in the travel industry, experience
                spanning over 121 countries, and recognition as the 2024 Luxury
                Travel Influencer of the Year by Travel Leaders Network, Angela
                Hughes has become one of the most trusted voices in celebration
                and milestone-focused luxury travel.
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

      {/* ── WHY CELEBRATE THROUGH TRAVEL? ─────────────────────────── */}
      <section
        className="adg-c-section adg-c-bg-white"
        id="adg-c-why-celebrate"
      >
        <div className="adg-c-container">
          <div className="adg-c-section-header">
            <h2 className="adg-c-h2">Why Celebrate Through Travel?</h2>
            <div className="adg-c-accent-line"></div>
          </div>

          <div className="adg-c-overview-layout">
            <div className="adg-c-overview-icons">
              {[
                "Reflect on achievements",
                "Reconnect with family",
                "Celebrate with loved ones",
                "Recover physically and mentally",
                "Create lifelong memories",
                "Explore bucket-list destinations",
                "Begin the next chapter with purpose",
                "Strengthen relationships through shared experiences",
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
                    Professional sports careers move quickly. Instead of rushing
                    into the next commitment, luxury travel creates space to
                    pause. Experiences often become far more meaningful than
                    material gifts.
                  </p>
                </div>
              </div>

              <div
                className="adg-c-overview-image-wrap"
                style={{ height: "350px" }}
              >
                <img
                  src={DifferentApproachImage}
                  alt="Athlete family celebrating a milestone at a luxury destination"
                  className="adg-c-overview-img"
                />
                <div className="adg-c-overview-img-overlay">
                  <span className="adg-c-overview-img-label">
                    Pause, Celebrate, Reconnect
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CHAMPIONSHIP VICTORIES & CONTRACT SIGNING CELEBRATIONS */}
      <section
        className="Ejsc-ent-section"
        id="Ejsc-championship-contract"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="Ejsc-container">
          <div className="Ejsc-section-header">
            <h2 className="Ejsc-section-title">
              Celebrating Career-Defining Moments
            </h2>
            <div className="Asc-accent-line"></div>
            <p className="Ejsc-section-subtitle">
              Two of the most common moments professional athletes celebrate
              through travel — winning a championship and signing a new
              contract.
            </p>
          </div>

          <div className="Ejsc-ent-grid">
            {/* Championship Victories Card */}
            <div className="Ejsc-ent-card Ejsc-explora-card">
              <div className="Ejsc-card-header">
                <div className="Ejsc-card-icon-wrap">
                  <Trophy size={24} className="Ejsc-card-icon" />
                </div>
                <h3 className="Ejsc-card-title">
                  Celebrating Championship Victories
                </h3>
              </div>

              <p className="Ejsc-card-intro">
                Winning a championship represents years of discipline,
                sacrifice, and teamwork. It's also an opportunity to thank the
                people who supported the journey.
              </p>

              <ul className="Ejsc-feature-list">
                {[
                  "Luxury family vacations",
                  "Private island escapes",
                  "Mediterranean yacht charters",
                  "Luxury cruises",
                  "Safari adventures",
                  "Exclusive villa retreats",
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
                  Rather than hosting one evening of celebration, a luxury
                  vacation creates days filled with unforgettable experiences.
                </p>
              </div>
            </div>

            {/* Contract Signing Card */}
            <div className="Ejsc-ent-card Ejsc-seabourn-card">
              <div className="Ejsc-card-header">
                <div className="Ejsc-card-icon-wrap">
                  <Briefcase size={24} className="Ejsc-card-icon" />
                </div>
                <h3 className="Ejsc-card-title">
                  Contract Signing Celebrations
                </h3>
              </div>

              <p className="Ejsc-card-intro">
                Whether it's a first professional contract or a long-awaited
                extension, signing a new contract marks another important
                chapter worth celebrating.
              </p>

              <ul className="Ejsc-feature-list">
                {[
                  "Private Caribbean Villas",
                  "European Luxury Tours",
                  "Private Yacht Charters",
                  "Luxury Wellness Resorts",
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
                  The destination becomes part of the story behind every career
                  milestone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MILESTONE BIRTHDAYS ───────────────────────────────────── */}
      <section className="wnf-section wnf-bg-white" id="milestone-birthdays">
        <div className="wnf-container">
          <div className="wnf-section-header">
            <h2 className="wnf-h2">Milestone Birthdays</h2>
            <div className="wnf-accent-line"></div>
          </div>

          <div className="wnf-split">
            <div className="la-image-column">
              <div className="la-image-wrap">
                <img
                  src={HeroImage1}
                  alt="Sunset dinner celebrating a milestone birthday overlooking the ocean"
                  className="la-image"
                />
                <div className="la-image-overlay"></div>
              </div>
            </div>

            <div className="wnf-content-column">
              <div className="wnf-block">
                <p className="wnf-lead-text">
                  Some birthdays deserve something extraordinary. The
                  destination becomes part of the celebration itself.
                </p>

                <ul className="wnf-feature-list">
                  {[
                    "30th birthdays",
                    "40th birthdays",
                    "50th birthdays",
                    "60th birthdays",
                    "Family milestone celebrations",
                  ].map((feature, i) => (
                    <li key={i} className="wnf-feature-item">
                      <div className="wnf-icon-wrapper">
                        <Gift size={14} />
                      </div>
                      <span className="wnf-feature-text">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="wnf-footer-note">
                <p className="wnf-highlight-text">
                  Imagine celebrating with sunset dinners overlooking the ocean,
                  private yacht cruises, family villa gatherings, champagne
                  celebrations, and exclusive culinary experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RETIREMENT VACATIONS */}
      <section className="azs-suites-section" id="azs-retirement-vacations">
        <div className="azs-container">
          <div className="azs-section-header">
            <h2 className="azs-section-title">Retirement Vacations</h2>
            <div className="azs-section-accent"></div>
            <p className="azs-section-subtitle">
              Celebrate the next chapter with meaningful experiences,
              unforgettable destinations, and personalized luxury travel.
            </p>
          </div>

          <div className="azs-suites-grid">
            {/* Retirement Vacations Card */}
            <div className="azs-suites-card azs-seabourn-suites">
              <div className="azs-suites-image-wrap">
                <img
                  src={RetirementVacationImage}
                  alt="Luxury retirement vacation overlooking the ocean"
                  className="azs-suites-img"
                />
                <span className="azs-suites-image-badge">
                  Celebrate a New Chapter
                </span>
              </div>

              <div className="azs-suites-content">
                <div className="azs-suites-card-header">
                  <div className="azs-suites-icon-circle">
                    <Award size={24} className="azs-suites-icon" />
                  </div>
                  <h3 className="azs-suites-title">Retirement Vacations</h3>
                </div>

                <p className="azs-suites-intro">
                  Retirement is one of the most emotional moments in
                  professional sports. After years of competition, travel, and
                  dedication, many athletes celebrate this milestone with a
                  once-in-a-lifetime journey.
                </p>

                <div className="azs-suites-body">
                  <h4 className="azs-suites-group-title">
                    Retirement vacations often focus on:
                  </h4>

                  <ul className="azs-suites-list">
                    {[
                      "Reflection",
                      "Family time",
                      "Bucket-list destinations",
                      "Relaxation",
                      "New adventures",
                      "Wellness and rejuvenation",
                      "Meaningful celebrations",
                      "Creating lasting family memories",
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
                      It's not about saying goodbye to a career—it's about
                      celebrating everything that career made possible.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Personalized Experiences Card */}
            <div className="azs-suites-card azs-azamara-suites">
              <div className="azs-suites-image-wrap">
                <img
                  src={PersonalizedExperienceImage}
                  alt="Luxury personalized vacation experience"
                  className="azs-suites-img"
                />
                <span className="azs-suites-image-badge">
                  Tailored Celebrations
                </span>
              </div>

              <div className="azs-suites-content">
                <div className="azs-suites-card-header">
                  <div className="azs-suites-icon-circle">
                    <Sparkles size={24} className="azs-suites-icon" />
                  </div>
                  <h3 className="azs-suites-title">Personalized Experiences</h3>
                </div>

                <p className="azs-suites-intro">
                  Luxury travel advisors can arrange exclusive experiences that
                  transform a great vacation into an unforgettable celebration.
                </p>

                <div className="azs-suites-body">
                  <h4 className="azs-suites-group-title">Examples include:</h4>

                  <ul className="azs-suites-list">
                    {[
                      "Private chefs",
                      "Sunset yacht cruises",
                      "Helicopter sightseeing",
                      "Wine tastings",
                      "Family photography sessions",
                      "Beach celebrations",
                      "Cultural experiences",
                      "Adventure excursions",
                      "Golf outings",
                      "Wellness experiences",
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
                      Every itinerary is thoughtfully designed around the
                      celebration itself.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HALL OF FAME & CAREER HONORS ─────────────────────────────── */}
      <section
        className="Leg-section"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="Leg-container">
          <div className="Leg-header">
            <h2 className="Leg-title">Hall of Fame &amp; Career Honors</h2>
            <div className="adg-c-accent-line"></div>
            <p className="Leg-subtitle">
              Being inducted into a Hall of Fame or receiving a lifetime
              achievement award represents decades of commitment and excellence.
              These trips honor a lifetime of achievement with memories that
              will last for generations.
            </p>
          </div>

          <div className="Leg-grid">
            {[
              {
                id: 1,
                accent: "gold",
                icon: Waves,
                title: "Mediterranean Cruises",
                description:
                  "Multi-country journeys along the coast, pairing celebration with world-class cuisine and culture.",
                pills: ["Coastal Villages", "Fine Dining", "Private Yacht"],
                highlight: "A lifetime of achievement, honored in style.",
              },
              {
                id: 2,
                accent: "navy",
                icon: Mountain,
                title: "Luxury Safari Expeditions",
                description:
                  "Celebrate decades of excellence surrounded by extraordinary wildlife and luxury lodges.",
                pills: ["Private Guides", "Luxury Lodges", "Game Drives"],
                highlight: "An honor as extraordinary as the career itself.",
              },
              {
                id: 3,
                accent: "teal",
                icon: Home,
                title: "Private Villa Celebrations",
                description:
                  "Gather everyone who shared the journey in one exclusive, private setting.",
                pills: ["Full Privacy", "Family Gathering", "Personal Chef"],
                highlight: "Celebrated with the people who mattered most.",
              },
              {
                id: 4,
                accent: "gold",
                icon: Landmark,
                title: "Multi-Country European Journeys",
                description:
                  "Luxury train experiences and private yacht vacations bring a European tour to life.",
                pills: [
                  "Luxury Train Travel",
                  "Private Yacht Vacations",
                  "Multi-City Itineraries",
                ],
                highlight: "A journey worthy of a career of excellence.",
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

      {/* ── FAMILY MILESTONES ───────────────────────────────────── */}
      <section className="dmg-info-section dmg-bg-white" id="family-milestones">
        <div className="dmg-info-container">
          <div className="dmg-info-grid">
            <div className="dmg-info-content">
              <h2 className="dmg-info-title">Family Milestones</h2>
              <div className="dmg-info-accent"></div>

              <p className="dmg-info-lead">
                Not every celebration is career-related. Professional athletes
                often use the off-season to celebrate the people who have
                supported them throughout their careers.
              </p>

              <div className="dmg-info-features dmg-info-features-scrollable">
                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">Graduations</h3>
                    <p className="dmg-info-feature-desc">
                      Celebrate an academic achievement in an unforgettable
                      setting.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">Family Reunions</h3>
                    <p className="dmg-info-feature-desc">
                      Bring relatives together from around the world in one
                      destination.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">New Babies</h3>
                    <p className="dmg-info-feature-desc">
                      Welcome a new addition to the family with a meaningful
                      shared getaway.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Holiday Gatherings
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Celebrate the season together in a destination built for
                      the whole family.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="dmg-info-media">
              <div className="dmg-media-wrapper">
                <img
                  src={FamilyImage}
                  alt="Family celebrating a milestone reunion at a luxury destination"
                  className="dmg-media-img"
                  style={{ height: "650px" }}
                />
                <div className="dmg-media-overlay"></div>

                <div className="dmg-media-badge">
                  <span>Celebrating the People Who Support You</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ANNIVERSARY VACATIONS ────────────────────────────────── */}
      <section
        className="adg-c-section adg-c-bg-soft"
        id="anniversary-vacations"
      >
        <div className="adg-c-container">
          <div className="adg-c-section-header">
            <span className="adg-c-eyebrow">Reconnecting Together</span>

            <h2 className="adg-c-h2">Anniversary Vacations</h2>

            <div className="adg-c-accent-line"></div>

            <p className="Asc-section-intro">
              Professional sports often require long periods away from loved
              ones. Anniversaries provide an opportunity to reconnect and
              celebrate not only a relationship, but the shared journey behind
              every athletic career.
            </p>
          </div>

          <div className="adg-c-venues-grid1">
            {[
              {
                id: 1,
                eyebrow: "Waterfront Privacy",
                name: "Overwater Villas & European River Cruises",
                highlight: "Reconnect in Extraordinary Settings",
                items: [
                  "Private accommodations surrounded by crystal-clear waters",
                  "Relaxed journeys through historic cities",
                  "Picturesque landscapes at every stop",
                ],
                callout:
                  "Private accommodations and relaxed river journeys create the perfect setting to reconnect.",
              },
              {
                id: 2,
                eyebrow: "Complete Flexibility",
                name: "Luxury Resorts & Private Yacht Escapes",
                highlight: "World-Class Service, Total Freedom",
                items: [
                  "World-class spas and fine dining",
                  "Personalized resort experiences",
                  "Complete flexibility and coastal adventures",
                ],
                callout:
                  "These vacations celebrate not only a relationship, but the shared journey behind every athletic career.",
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

      {/* ── MULTI-GENERATIONAL CELEBRATIONS ─────────────────────────── */}
      <section
        className="dmg-info-section dmg-bg-white"
        id="dmg-multi-generational-celebrations"
      >
        <div className="dmg-info-container">
          <div className="dmg-info-grid">
            {/* Left Side Image */}
            <div className="dmg-info-media">
              <div className="dmg-media-wrapper">
                <img
                  src={MultiGenerationalCelebrationImage}
                  alt="Luxury family celebration with multiple generations"
                  className="dmg-media-img"
                  style={{ height: "760px" }}
                />
                <div className="dmg-media-overlay"></div>

                <div className="dmg-media-badge">
                  <span>Celebrating Together Across Generations</span>
                </div>
              </div>
            </div>

            {/* Right Side Content */}
            <div className="dmg-info-content">
              <h2 className="dmg-info-title">
                Multi-Generational Celebrations
              </h2>
              <div className="dmg-info-accent"></div>

              <p className="dmg-info-lead">
                Many professional athletes prefer celebrating life's biggest
                milestones with parents, grandparents, siblings, children, and
                extended family.
              </p>

              <div className="dmg-info-features dmg-info-features-scrollable">
                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">Private Villas</h3>
                    <p className="dmg-info-feature-desc">
                      Large luxury estates where everyone can stay together
                      while enjoying privacy, comfort, and shared living spaces.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">Luxury Cruises</h3>
                    <p className="dmg-info-feature-desc">
                      Activities for every age combined with effortless travel
                      between destinations, allowing families to explore
                      together.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">Private Resorts</h3>
                    <p className="dmg-info-feature-desc">
                      Exclusive resorts with personalized service, spacious
                      accommodations, and experiences designed for every
                      generation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── LUXURY CONCIERGE PLANNING ─────────────────────────────── */}
      <section
        className="ugt-components-section"
        id="concierge-planning"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="ugt-components-container">
          <div className="ugt-components-header">
            <h2 className="ugt-components-title">Luxury Concierge Planning</h2>

            <div className="adg-c-accent-line"></div>
          </div>

          <div className="ugt-components-list">
            <div className="ugt-component-row">
              <div className="ugt-component-image-wrapper">
                <div className="ugt-component-image-container">
                  <img
                    src={LogisticsImage}
                    alt="Concierge coordinating a milestone celebration"
                    className="ugt-component-image"
                  />
                </div>
              </div>

              <div className="ugt-component-content">
                <p className="ugt-component-text">
                  Major celebrations deserve flawless execution. Every detail is
                  handled professionally so families can focus on celebrating
                  together — including personalized experiences like private
                  chefs, sunset yacht cruises, helicopter sightseeing, wine
                  tastings, and family photography sessions.
                </p>

                <div className="ugt-questions-box">
                  <span className="ugt-questions-title">
                    A luxury travel advisor can coordinate:
                  </span>

                  <ul className="ugt-questions-list">
                    {[
                      "Flights & Private Aviation",
                      "Luxury Accommodations",
                      "Yacht Charters",
                      "Airport Transfers",
                      "Celebration Dinners & Restaurant Reservations",
                      "Family Activities & Personalized Surprises",
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
                  Every itinerary is designed around the celebration itself, so
                  nothing is left to chance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BUCKET-LIST CELEBRATION DESTINATIONS (TABBED) ────────── */}
      <section
        className="luc-destinations-section"
        id="luc-celebration-destinations"
      >
        <div className="luc-destinations-container">
          <div className="luc-destinations-header">
            <h2 className="luc-destinations-title">
              Bucket-List Celebration Destinations
            </h2>

            <div className="adg-c-accent-line"></div>

            <p className="luc-destinations-intro">
              Some milestones deserve extraordinary destinations. Each
              destination offers a unique way to celebrate life's biggest
              accomplishments.
            </p>
          </div>

          <div className="luc-dest-layout">
            <nav className="luc-dest-nav">
              {celebrationDestinations.map((item) => {
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
                alt="Luxury travel advisor planning a championship celebration itinerary"
                className="adg-side-image"
                style={{ height: "48vh" }}
              />

              <div className="adg-info-card">
                <div className="adg-card-meta">
                  <Award size={28} />
                  <span className="adg-meta-label">Trusted Expertise</span>
                </div>

                <p className="adg-card-lead">
                  Celebrating an important milestone isn't something you want to
                  leave to chance. The result is a vacation that's every bit as
                  memorable as the achievement itself.
                </p>
              </div>
            </div>

            <div className="adg-list-side">
              {[
                {
                  title: "Recommend Destinations That Match the Occasion",
                  icon: <Compass size={20} />,
                },
                {
                  title: "Arrange Exclusive Experiences",
                  icon: <Sparkles size={20} />,
                },
                {
                  title: "Coordinate Family Travel",
                  icon: <Users size={20} />,
                },
                {
                  title: "Secure Luxury Accommodations",
                  icon: <Hotel size={20} />,
                },
                {
                  title: "Manage Complex Logistics",
                  icon: <Map size={20} />,
                },
                {
                  title: "Handle Last-Minute Adjustments",
                  icon: <CalendarClock size={20} />,
                },
                {
                  title: "Create a Seamless Celebration, Start to Finish",
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

      {/* PRIVATE CELEBRATIONS WITH COMPLETE PRIVACY */}
      <section
        className="Avr-planning-section"
        id="Asc-private-celebrations"
        style={{ backgroundColor: "var(--bg-white)" }}
      >
        <div className="Asc-container">
          {/* HEADING */}
          <div className="Avr-planning-heading">
            <span className="Avr-planning-eyebrow">Intimate & Personal</span>

            <h2 className="Avr-planning-title">
              Private Celebrations with Complete Privacy
            </h2>

            <div className="Avr-planning-divider"></div>
          </div>

          {/* TWO-PANEL GRID */}
          <div className="Avr-planning-grid">
            {/* LEFT PANEL */}
            <div className="Avr-planning-left">
              <div className="Avr-planning-left-deco">&ldquo;</div>

              <h3 className="Avr-planning-left-title">
                Celebrations That Remain Personal &amp; Meaningful
              </h3>

              <p className="Avr-planning-left-body">
                Many athletes prefer intimate celebrations rather than public
                events. Luxury travel provides the privacy needed to keep a
                milestone celebration exactly as it should be — personal and
                shared with the people who matter most.
              </p>

              <div className="Avr-planning-alert">
                <ShieldCheck size={18} className="Avr-planning-alert-icon" />

                <p className="Avr-planning-alert-text">
                  Whether it's a championship, a retirement, or a milestone
                  birthday, complete privacy allows the celebration to stay
                  focused on the people who made it possible.
                </p>
              </div>
            </div>

            {/* RIGHT PANEL */}
            <div className="Avr-planning-right">
              <p className="Avr-planning-right-intro">
                Private celebrations are built around:
              </p>

              <div className="Avr-planning-benefits-grid">
                {[
                  {
                    icon: <Home size={18} />,
                    label: "Private villas",
                  },
                  {
                    icon: <Ship size={18} />,
                    label: "Yacht charters",
                  },
                  {
                    icon: <Star size={18} />,
                    label: "Exclusive dining",
                  },
                  {
                    icon: <Sparkles size={18} />,
                    label: "Personalized experiences",
                  },
                  {
                    icon: <Headset size={18} />,
                    label: "Dedicated concierge services",
                  },
                  {
                    icon: <Users size={18} />,
                    label: "Family-focused itineraries",
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
                Privacy allows celebrations to remain personal and meaningful,
                no matter the scale of the milestone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHEN SHOULD YOU START PLANNING? ───────────────────────── */}
      <section className="ugt-advantage-section" id="planning-timeline">
        <div className="ugt-advantage-container">
          <div className="ugt-advantage-header">
            <span className="ugt-advantage-eyebrow">Expert Planning</span>

            <h2 className="ugt-advantage-title">
              When Should You Start Planning?
            </h2>

            <div className="Asc-accent-line"></div>

            <p className="ugt-advantage-intro">
              Luxury accommodations and exclusive experiences often book well in
              advance. Planning ahead provides greater flexibility and access to
              the most desirable accommodations.
            </p>
          </div>

          <div className="ugt-advantage-grid">
            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <CalendarClock size={28} strokeWidth={1.5} />
              </div>

              <h4 className="ugt-card-title">9–12 Months Ahead</h4>

              <p className="ugt-card-desc">
                Recommended for major celebrations to secure the best
                availability.
              </p>
            </div>

            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <Gift size={28} strokeWidth={1.5} />
              </div>

              <h4 className="ugt-card-title">Earlier for Holiday Travel</h4>

              <p className="ugt-card-desc">
                Holiday dates and peak seasons book especially far in advance.
              </p>
            </div>

            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <Users size={28} strokeWidth={1.5} />
              </div>

              <h4 className="ugt-card-title">Earlier for Large Groups</h4>

              <p className="ugt-card-desc">
                Larger family groups need more lead time to secure
                accommodations together.
              </p>
            </div>

            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <Ship size={28} strokeWidth={1.5} />
              </div>

              <h4 className="ugt-card-title">
                Earlier for Villas &amp; Yacht Charters
              </h4>

              <p className="ugt-card-desc">
                Luxury villas and yacht charters are among the first bookings to
                sell out.
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
                Expert planning ensures a smooth, memorable, and stress-free
                celebration.
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
                      icon: <Trophy size={16} />,
                      label:
                        "Specialist in championship celebrations and milestone travel for professional athletes",
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
                  help professional athletes celebrate championships,
                  retirements, Hall of Fame honors, and family milestones — from
                  destination selection to flawless concierge execution.
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
              Everything you need to know about planning championship
              celebration and milestone travel.
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
            alt="Family celebrating a championship milestone at a luxury travel destination"
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
                  Ready to Celebrate Your <br /> Next Milestone?
                </h2>
                <div className="Asc-help-accent"></div>
              </div>

              <div className="Asc-help-grid">
                <div className="Asc-help-info">
                  <p className="Asc-help-intro">
                    Connect with Angela Hughes and the expert team at Trips
                    &amp; Ships Luxury Travel for personalized guidance on
                    planning an unforgettable championship celebration or
                    milestone vacation.
                  </p>

                  <p className="Asc-help-intro">
                    From private villas and yacht charters to concierge planning
                    and personalized surprises, expert support helps every
                    celebration come together seamlessly.
                  </p>

                  <p className="Asc-help-intro">
                    Whether you're celebrating a championship, a retirement, an
                    anniversary, or a milestone birthday, personalized planning
                    makes all the difference.
                  </p>

                  <div className="Asc-help-btn-container">
                    <Link
                      to="/contact"
                      className="Asc-help-cta-btn"
                      style={{ textDecoration: "none" }}
                    >
                      Start Planning Your Celebration
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
                      "Private villa & yacht charter recommendations",
                      "Championship & retirement celebration planning",
                      "Hall of Fame & career honor itineraries",
                      "Milestone birthday & anniversary experiences",
                      "Luxury concierge support, start to finish",
                      "Private, family-focused celebration planning",
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
                    personalized celebration and milestone travel experiences
                    worldwide.
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

export default ChampionshipCelebrationsMilestoneTravel;
