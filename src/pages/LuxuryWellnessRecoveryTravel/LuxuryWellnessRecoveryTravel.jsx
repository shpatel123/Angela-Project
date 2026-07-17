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
  Flower2,
  Leaf,
  Sun,
  HeartPulse,
  Utensils,
  Dumbbell,
  Brain,
  Palmtree,
  Trees,
  Droplet,
  HeartHandshake,
} from "lucide-react";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela.jpeg";

import HeroImage1 from "../../assets/LuxuryWellnessRecoveryTravel/wellness-resort-luxury-spa-pool.png";
import HeroImage2 from "../../assets/LuxuryWellnessRecoveryTravel/sunrise-beach-meditation-wellness-retreat-yoga.png";
import HeroImage3 from "../../assets/LuxuryWellnessRecoveryTravel/luxury-wellness-resort-infinity-pool-mountain-view.png";

import DifferentApproachImage from "../../assets/LuxuryWellnessRecoveryTravel/multi-generational-family-wellness-retreat-luxury-resort.png";

import BucketHawaii from "../../assets/LuxuryWellnessRecoveryTravel/oceanfront-wellness-resort-infinity-pool-coastal-view.png";
import BucketBali from "../../assets/LuxuryWellnessRecoveryTravel/sunrise-beach-meditation-wellness-retreat-yoga.png";
import BucketMaldives from "../../assets/LuxuryWellnessRecoveryTravel/maldives-wellness-overwater-spa.png";
import BucketSwitzerland from "../../assets/LuxuryWellnessRecoveryTravel/luxury-wellness-resort-infinity-pool-mountain-view.png";
import BucketCostaRica from "../../assets/LuxuryWellnessRecoveryTravel/costa-rica-rainforest-eco-spa.png";
import BucketPolynesia from "../../assets/LuxuryWellnessRecoveryTravel/french-polynesia-lagoon-spa.png";

import FitnessImage from "../../assets/LuxuryWellnessRecoveryTravel/wellness-resort-fitness-training.png";
import NutritionImage from "../../assets/LuxuryWellnessRecoveryTravel/wellness-resort-healthy-nutrition-meal.png";
import FamilyWellnessImage from "../../assets/LuxuryWellnessRecoveryTravel/wellness-resort-family-yoga-session.png";
import ResortImage from "../../assets/LuxuryWellnessRecoveryTravel/oceanfront-wellness-resort-infinity-pool-coastal-view.png";
import ConciergeImage from "../../assets/LuxuryWellnessRecoveryTravel/wellness-consultation-personalized-health-planning.png";
import AdvisorImage from "../../assets/LuxuryWellnessRecoveryTravel/wellness-travel-planner-luxury-retreat-consultation.png";
import CtaImage from "../../assets/LuxuryWellnessRecoveryTravel/sunrise-beach-meditation-wellness-retreat-yoga.png";

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
        "Luxury travel agency specializing in wellness and recovery travel for professional athletes and their families, including luxury spa retreats, fitness-focused vacations, recovery experiences, and personalized wellness itineraries.",
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
      name: "Luxury Wellness & Recovery Travel",
      url: "https://tripsandships.com/luxury-wellness-recovery-travel",
      description:
        "Discover luxury wellness and recovery travel designed for professional athletes. Explore wellness retreats, luxury spa resorts, fitness-focused vacations, recovery experiences, healthy dining, and personalized travel that supports physical and mental well-being.",
    },
    {
      "@type": "Service",
      serviceType: "Luxury Wellness & Recovery Travel Planning",
      provider: {
        "@type": "TravelAgency",
        name: "Trips & Ships Luxury Travel",
      },
      areaServed: "Worldwide",
      description:
        "Concierge-level luxury travel planning built around recovery, relaxation, fitness, nutrition, and mental well-being for professional athletes and their families.",
    },
    {
      "@type": "Article",
      headline: "Luxury Wellness & Recovery Travel",
      description:
        "A complete guide to luxury wellness and recovery travel for professional athletes, covering wellness retreats, spa experiences, fitness-focused vacations, nutrition, mental wellness, and family-friendly wellness destinations.",
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
          name: "Luxury Wellness & Recovery Travel",
          item: "https://tripsandships.com/luxury-wellness-recovery-travel",
        },
      ],
    },
    {
      "@type": "ItemList",
      name: "Wellness Experiences Included in Luxury Recovery Travel",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Recovery-Focused Spa Treatments",
          description:
            "Sports massage, hydrotherapy, and recovery pools support the body just as they do at home, in a more relaxing setting.",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Fitness Without Pressure",
          description:
            "Modern fitness centers, yoga, swimming, and guided outdoor workouts keep athletes active at a more relaxed pace.",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Nutrition That Supports Performance",
          description:
            "Fresh, balanced, and performance-focused cuisine turns healthy eating into part of the vacation.",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Mental Wellness & Relaxation",
          description:
            "Meditation, mindfulness, nature experiences, and digital detox opportunities support recovery beyond the body.",
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Family Wellness Experiences",
          description:
            "Family yoga, healthy dining, and outdoor adventures allow athletes to invest in wellness alongside the people they love.",
        },
      ],
    },
    {
      "@type": "TouristTrip",
      name: "Luxury Wellness & Recovery Vacation",
      provider: {
        "@type": "Organization",
        name: "Trips & Ships Luxury Travel",
      },
      touristType:
        "Professional athletes and their families seeking recovery and wellness-focused travel",
    },
    {
      "@type": "HealthAndBeautyBusiness",
      name: "Trips & Ships Luxury Wellness Travel Planning",
      description:
        "Personalized planning for luxury spa retreats, recovery-focused resorts, and wellness vacations designed for professional athletes.",
    },
    {
      "@type": "Review",
      itemReviewed: {
        "@type": "Service",
        name: "Luxury Wellness & Recovery Travel",
      },
      author: {
        "@type": "Person",
        name: "Angela Hughes",
      },
      reviewBody:
        "Recovery is not just about healing — it's about preparing for what's next, and the strongest performances often begin with taking the time to recover well.",
    },
    {
      "@type": "AboutPage",
      name: "About Luxury Wellness & Recovery Travel",
      description:
        "Learn how luxury wellness travel supports professional athletes through physical recovery, mental relaxation, nutrition, and family connection.",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is luxury wellness travel?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Luxury wellness travel combines exceptional accommodations with experiences focused on health, relaxation, fitness, nutrition, and overall well-being.",
          },
        },
        {
          "@type": "Question",
          name: "Why do professional athletes choose wellness vacations?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Athletes often use wellness travel to recover physically, reduce stress, reconnect with family, and prepare for future competition.",
          },
        },
        {
          "@type": "Question",
          name: "What is included in a wellness retreat?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Many retreats include luxury accommodations, healthy dining, fitness classes, spa treatments, meditation, yoga, and personalized wellness programs.",
          },
        },
        {
          "@type": "Question",
          name: "Are spa vacations beneficial for athletes?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Many athletes appreciate sports massage, hydrotherapy, recovery pools, and relaxation therapies that complement their regular recovery routines.",
          },
        },
        {
          "@type": "Question",
          name: "Can wellness vacations include family members?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Many luxury wellness resorts offer activities, accommodations, and dining suitable for couples and families.",
          },
        },
        {
          "@type": "Question",
          name: "What destinations are best for wellness travel?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Popular choices include Hawaii, Bali, Costa Rica, Switzerland, the Maldives, and French Polynesia.",
          },
        },
        {
          "@type": "Question",
          name: "Do wellness resorts provide healthy dining?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most luxury wellness resorts offer nutritious menus featuring fresh ingredients and options tailored to individual dietary preferences.",
          },
        },
        {
          "@type": "Question",
          name: "Should athletes continue exercising during vacation?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Many athletes enjoy staying active through lower-intensity activities such as swimming, hiking, yoga, or cycling while allowing the body to recover.",
          },
        },
        {
          "@type": "Question",
          name: "When is the best time to book a wellness vacation?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Planning six to twelve months ahead typically provides the best availability for luxury wellness resorts and personalized experiences.",
          },
        },
        {
          "@type": "Question",
          name: "Is using a luxury travel advisor worthwhile?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For travelers seeking customized wellness experiences and seamless planning, professional guidance often provides exceptional value.",
          },
        },
        {
          "@type": "Question",
          name: "Can a wellness retreat be integrated with custom physical therapy or medical recovery programs?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. We work closely with leading medical spas and orthopedic recovery centers that coordinate directly with your team trainers or doctors to support specific rehab and recovery goals.",
          },
        },
        {
          "@type": "Question",
          name: "What advanced recovery facilities are available at your recommended resorts?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Our selected resorts feature state-of-the-art recovery technology, including cryotherapy chambers, hyperbaric oxygen therapy, infrared saunas, sensory deprivation tanks, and advanced hydrotherapy circuits.",
          },
        },
        {
          "@type": "Question",
          name: "How do you tailor nutritional programs for athletes during their wellness stay?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We coordinate with resort nutritionists and private chefs to construct menus matching your specific macro/micro-nutrient requirements, addressing caloric goals, clean-eating parameters, or allergen exclusions.",
          },
        },
        {
          "@type": "Question",
          name: "Are mental wellness and cognitive recovery services offered?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Many of our partner retreats specialize in cognitive health, offering mindfulness training, sleep optimization coaching, neurofeedback, and stress-reduction therapies.",
          },
        },
        {
          "@type": "Question",
          name: "Do you offer private, in-villa wellness treatments to ensure complete privacy?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. We can arrange for private massage therapists, yoga instructors, and wellness coaches to conduct all sessions directly in the privacy of your villa or yacht.",
          },
        },
      ],
    },
  ],
};

/* ── Data: Wellness destinations (tabbed panel) ──────────────────── */
const wellnessDestinations = [
  {
    id: "hawaii",
    title: "Hawaii",
    badge: "Hawaii",
    icon: Palmtree,
    image: BucketHawaii,
    objectPosition: "center 50%",
    window: "Volcanic landscapes and oceanfront wellness resorts",
    desc: "Volcanic landscapes, oceanfront wellness resorts, hiking, and healthy island cuisine create a restorative setting for recovery and relaxation.",
    columns: [
      {
        label: "Plan Around:",
        items: [
          "Oceanfront Wellness Resorts",
          "Guided Volcanic Hikes",
          "Healthy Island Cuisine",
        ],
      },
    ],
    themeLabel: "Island Recovery, Reimagined",
    themeText:
      "Hawaii's natural landscapes and oceanfront resorts make it a grounding setting for both physical recovery and family time.",
  },
  {
    id: "bali",
    title: "Bali",
    badge: "Bali",
    icon: Flower2,
    image: BucketBali,
    objectPosition: "75% 10%",
    window: "Yoga retreats and holistic wellness in tropical surroundings",
    desc: "Known for yoga retreats, holistic wellness, tropical surroundings, and peaceful luxury resorts, Bali offers a deeply restorative escape.",
    columns: [
      {
        label: "Plan Around:",
        items: [
          "Private Yoga Retreats",
          "Holistic Wellness Programs",
          "Tropical Garden Resorts",
        ],
      },
    ],
    themeLabel: "Holistic, Mindful Recovery",
    themeText:
      "Bali's tradition of holistic wellness pairs naturally with luxury resorts built around mindfulness and restoration.",
  },
  {
    id: "maldives",
    title: "The Maldives",
    badge: "Maldives",
    icon: Waves,
    image: BucketMaldives,
    objectPosition: "center",
    window: "Private island resorts and complete relaxation",
    desc: "Private island resorts offer exceptional privacy, spa experiences, and complete relaxation, making the Maldives ideal for uninterrupted recovery.",
    columns: [
      {
        label: "Plan Around:",
        items: [
          "Private Island Resorts",
          "Overwater Spa Experiences",
          "Total Seclusion & Privacy",
        ],
      },
    ],
    themeLabel: "Pure, Private Recovery",
    themeText:
      "Complete privacy and overwater spa experiences make the Maldives one of the most restorative settings in the world.",
  },
  {
    id: "switzerland",
    title: "Switzerland",
    badge: "Switzerland",
    icon: Mountain,
    image: BucketSwitzerland,
    objectPosition: "center",
    window: "Alpine resorts and world-class wellness facilities",
    desc: "Luxury alpine resorts combine dramatic mountain scenery with world-class wellness facilities designed around recovery and relaxation.",
    columns: [
      {
        label: "Plan Around:",
        items: [
          "Luxury Alpine Wellness Resorts",
          "Hydrotherapy & Thermal Spas",
          "Mountain Air & Scenery",
        ],
      },
    ],
    themeLabel: "Elevated, Restorative Escape",
    themeText:
      "Switzerland's alpine wellness tradition pairs crisp mountain air with some of the world's most advanced recovery facilities.",
  },
  {
    id: "costa-rica",
    title: "Costa Rica",
    badge: "Costa Rica",
    icon: Trees,
    image: BucketCostaRica,
    objectPosition: "center",
    window: "Rainforests and eco-luxury wellness resorts",
    desc: "Rainforests, eco-luxury resorts, outdoor adventure, and wellness-focused experiences make Costa Rica ideal for athletes who want to stay active while recovering.",
    columns: [
      {
        label: "Plan Around:",
        items: [
          "Eco-Luxury Rainforest Resorts",
          "Outdoor Adventure & Movement",
          "Farm-to-Table Wellness Dining",
        ],
      },
    ],
    themeLabel: "Active Recovery in Nature",
    themeText:
      "Costa Rica's blend of adventure and eco-luxury creates a wellness escape built for athletes who want to keep moving.",
  },
  {
    id: "french-polynesia",
    title: "French Polynesia",
    badge: "French Polynesia",
    icon: Waves,
    image: BucketPolynesia,
    objectPosition: "center",
    window: "Overwater villas and tranquil lagoon living",
    desc: "Beautiful lagoons, luxury overwater villas, and tranquil island living create a peaceful, private setting for recovery and reconnection.",
    columns: [
      {
        label: "Plan Around:",
        items: [
          "Overwater Villa Recovery Suites",
          "Private Lagoon Relaxation",
          "Sunset Wellness Rituals",
        ],
      },
    ],
    themeLabel: "Tranquil, Private Renewal",
    themeText:
      "French Polynesia's overwater villas and calm lagoons offer one of the most peaceful settings for slowing down.",
  },
];

/* ── FAQ Component ─────────────────────────────────────────────── */
function FAQ() {
  const [open, setOpen] = useState(null);

  const faqData = [
    {
      q: "What is luxury wellness travel?",
      a: "Luxury wellness travel combines exceptional accommodations with experiences focused on health, relaxation, fitness, nutrition, and overall well-being.",
    },
    {
      q: "Why do professional athletes choose wellness vacations?",
      a: "Athletes often use wellness travel to recover physically, reduce stress, reconnect with family, and prepare for future competition.",
    },
    {
      q: "What is included in a wellness retreat?",
      a: "Many retreats include luxury accommodations, healthy dining, fitness classes, spa treatments, meditation, yoga, and personalized wellness programs.",
    },
    {
      q: "Are spa vacations beneficial for athletes?",
      a: "Many athletes appreciate sports massage, hydrotherapy, recovery pools, and relaxation therapies that complement their regular recovery routines.",
    },
    {
      q: "Can wellness vacations include family members?",
      a: "Yes. Many luxury wellness resorts offer activities, accommodations, and dining suitable for couples and families.",
    },
    {
      q: "What destinations are best for wellness travel?",
      a: "Popular choices include Hawaii, Bali, Costa Rica, Switzerland, the Maldives, and French Polynesia.",
    },
    {
      q: "Do wellness resorts provide healthy dining?",
      a: "Most luxury wellness resorts offer nutritious menus featuring fresh ingredients and options tailored to individual dietary preferences.",
    },
    {
      q: "Should athletes continue exercising during vacation?",
      a: "Many athletes enjoy staying active through lower-intensity activities such as swimming, hiking, yoga, or cycling while allowing the body to recover.",
    },
    {
      q: "When is the best time to book a wellness vacation?",
      a: "Planning six to twelve months ahead typically provides the best availability for luxury wellness resorts and personalized experiences.",
    },
    {
      q: "Is using a luxury travel advisor worthwhile?",
      a: "For travelers seeking customized wellness experiences and seamless planning, professional guidance often provides exceptional value.",
    },
    {
      q: "Can a wellness retreat be integrated with custom physical therapy or medical recovery programs?",
      a: "Yes. We work closely with leading medical spas and orthopedic recovery centers that coordinate directly with your team trainers or doctors to support specific rehab and recovery goals.",
    },
    {
      q: "What advanced recovery facilities are available at your recommended resorts?",
      a: "Our selected resorts feature state-of-the-art recovery technology, including cryotherapy chambers, hyperbaric oxygen therapy, infrared saunas, sensory deprivation tanks, and advanced hydrotherapy circuits.",
    },
    {
      q: "How do you tailor nutritional programs for athletes during their wellness stay?",
      a: "We coordinate with resort nutritionists and private chefs to construct menus matching your specific macro/micro-nutrient requirements, addressing caloric goals, clean-eating parameters, or allergen exclusions.",
    },
    {
      q: "Are mental wellness and cognitive recovery services offered?",
      a: "Yes. Many of our partner retreats specialize in cognitive health, offering mindfulness training, sleep optimization coaching, neurofeedback, and stress-reduction therapies.",
    },
    {
      q: "Do you offer private, in-villa wellness treatments to ensure complete privacy?",
      a: "Absolutely. We can arrange for private massage therapists, yoga instructors, and wellness coaches to conduct all sessions directly in the privacy of your villa or yacht.",
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
const LuxuryWellnessRecoveryTravel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [readMore, setReadMore] = useState(false);
  const [activeDestination, setActiveDestination] = useState("hawaii");
  const [hovered, setHovered] = useState(null);

  const currentDestination =
    wellnessDestinations.find((d) => d.id === activeDestination) ||
    wellnessDestinations[0];
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
          Luxury Wellness & Recovery Travel | Wellness Retreats for Professional
          Athletes
        </title>
        <meta name="title" content="Luxury Wellness & Recovery Travel" />
        <meta
          name="description"
          content="Discover luxury wellness and recovery travel designed for professional athletes. Explore wellness retreats, luxury spa resorts, fitness-focused vacations, recovery experiences, healthy dining, and personalized travel that supports physical and mental well-being."
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
            Luxury Wellness <br /> &amp; Recovery Travel
          </h1>

          <p>
            For professional athletes, recovery isn't something that only
            happens after a game or training session. It's a year-round
            commitment that supports performance, longevity, and overall
            well-being.
          </p>

          <p>
            Luxury wellness travel combines exceptional accommodations with
            personalized experiences that promote relaxation, fitness,
            nutrition, and recovery — all while allowing athletes to enjoy
            meaningful time with the people who matter most.
          </p>

          {readMore && (
            <>
              <p>
                The off-season provides an opportunity to step away from
                competition, slow down, reconnect with family, and focus on both
                physical recovery and mental wellness.
              </p>

              <p>
                Whether you're recovering from a demanding season, preparing for
                the next challenge, or simply looking for a healthier way to
                travel, wellness-focused vacations create lasting benefits long
                after you return home.
              </p>

              <p>
                With more than 40 years in the travel industry, experience
                spanning over 121 countries, and recognition as the 2024 Luxury
                Travel Influencer of the Year by Travel Leaders Network, Angela
                Hughes has become one of the most trusted voices in wellness and
                recovery-focused luxury travel.
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

      {/* ── WHY WELLNESS TRAVEL MATTERS FOR ATHLETES ─────────────────── */}
      <section className="adg-c-section adg-c-bg-white" id="adg-c-why-wellness">
        <div className="adg-c-container">
          <div className="adg-c-section-header">
            <h2 className="adg-c-h2">
              Why Wellness Travel Matters for Athletes
            </h2>
            <div className="adg-c-accent-line"></div>
            <p className="Asc-section-intro">
              Professional sports place extraordinary demands on the body and
              mind — intensive training, frequent travel, physical fatigue,
              mental pressure, limited family time, and constant competition.
            </p>
          </div>

          <div className="adg-c-overview-layout">
            <div className="adg-c-overview-icons">
              {[
                "Physical recovery",
                "Mental relaxation",
                "Improved sleep",
                "Better nutrition",
                "Reduced stress",
                "Family connection",
                "Renewed motivation",
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
                    Luxury wellness vacations provide the opportunity to reset
                    in a peaceful environment designed around health and
                    balance. Recovery is not just about healing — it's about
                    preparing for what's next.
                  </p>
                </div>
              </div>

              <div className="adg-c-overview-image-wrap" style={{ height: "320px" }}>
                <img
                  src={DifferentApproachImage}
                  alt="Athlete family relaxing at a luxury wellness resort"
                  className="adg-c-overview-img"
                  style={{ objectPosition: "center" }}
                />
                <div className="adg-c-overview-img-overlay">
                  <span className="adg-c-overview-img-label">
                    Reset, Recover, Reconnect
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RECOVERY BEYOND THE TRAINING ROOM & LUXURY WELLNESS RETREATS */}
      <section
        className="Ejsc-ent-section"
        id="Ejsc-recovery-retreats"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="Ejsc-container">
          <div className="Ejsc-section-header">
            <h2 className="Ejsc-section-title">
              Recovery Beyond the Training Room
            </h2>
            <div className="Asc-accent-line"></div>
            <p className="Ejsc-section-subtitle">
              Athletes spend much of the year following structured recovery
              routines. A luxury wellness vacation offers the chance to continue
              those healthy habits in a more relaxing setting.
            </p>
          </div>

          <div className="Ejsc-ent-grid">
            {/* Recovery-Focused Care Card */}
            <div className="Ejsc-ent-card Ejsc-explora-card">
              <div className="Ejsc-card-header">
                <div className="Ejsc-card-icon-wrap">
                  <HeartPulse size={24} className="Ejsc-card-icon" />
                </div>
                <h3 className="Ejsc-card-title">
                  Recovery-Focused Care On the Road
                </h3>
              </div>

              <p className="Ejsc-card-intro">
                Many wellness resorts provide the same recovery tools athletes
                rely on at home — now paired with a true vacation setting.
              </p>

              <ul className="Ejsc-feature-list">
                {[
                  "Recovery-focused spa treatments",
                  "Hydrotherapy",
                  "Stretching programs",
                  "Guided movement sessions",
                  "Recovery pools",
                  "Personalized wellness consultations",
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
                  These experiences help the body recover while allowing
                  travelers to enjoy a true vacation.
                </p>
              </div>
            </div>

            {/* Luxury Wellness Retreats Card */}
            <div className="Ejsc-ent-card Ejsc-seabourn-card">
              <div className="Ejsc-card-header">
                <div className="Ejsc-card-icon-wrap">
                  <Leaf size={24} className="Ejsc-card-icon" />
                </div>
                <h3 className="Ejsc-card-title">Luxury Wellness Retreats</h3>
              </div>

              <p className="Ejsc-card-intro">
                Luxury wellness retreats are designed to create complete balance
                between activity and relaxation, in peaceful natural settings
                guided by expert specialists.
              </p>

              <ul className="Ejsc-feature-list">
                {[
                  "Personalized wellness programs",
                  "Mountain, coastal & island settings",
                  "Wellness specialists & nutritionists",
                  "Mindful daily living routines",
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
                  Rather than simply taking time away, wellness retreats help
                  guests invest in long-term health.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── LUXURY SPA EXPERIENCES ───────────────────────────────────── */}
      <section className="wnf-section wnf-bg-white" id="luxury-spa-experiences">
        <div className="wnf-container">
          <div className="wnf-section-header">
            <h2 className="wnf-h2">Luxury Spa Experiences</h2>
            <div className="wnf-accent-line"></div>
          </div>

          <div className="wnf-split">
            <div className="la-image-column">
              <div className="la-image-wrap">
                <img
                  src={HeroImage1}
                  alt="Sports massage and spa recovery treatment"
                  className="la-image"
                />
                <div className="la-image-overlay"></div>
              </div>
            </div>

            <div className="wnf-content-column">
              <div className="wnf-block">
                <p className="wnf-lead-text">
                  Spa treatments are one of the most popular aspects of wellness
                  travel, promoting recovery while creating an atmosphere of
                  complete relaxation.
                </p>

                <ul className="wnf-feature-list">
                  {[
                    "Sports massage",
                    "Deep tissue therapy",
                    "Hydrotherapy",
                    "Hot and cold pools",
                    "Steam rooms & saunas",
                    "Aromatherapy & relaxation lounges",
                  ].map((feature, i) => (
                    <li key={i} className="wnf-feature-item">
                      <div className="wnf-icon-wrapper">
                        <Droplet size={14} />
                      </div>
                      <span className="wnf-feature-text">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="wnf-footer-note">
                <p className="wnf-highlight-text">
                  Imagine sports massage after a long season, hydrotherapy
                  overlooking the ocean, and evenings spent unwinding in a
                  private steam room or sauna.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FITNESS WITHOUT PRESSURE & NUTRITION */}
      <section className="azs-suites-section" id="azs-fitness-nutrition">
        <div className="azs-container">
          <div className="azs-section-header">
            <h2 className="azs-section-title">
              Fitness Without Pressure &amp; <br /> Nutrition That Supports Performance
            </h2>
            <div className="azs-section-accent"></div>
            <p className="azs-section-subtitle">
              Athletes don't always want to stop moving during vacation — and
              wellness travel isn't complete without exceptional dining.
            </p>
          </div>

          <div className="azs-suites-grid">
            {/* Fitness Card */}
            <div className="azs-suites-card azs-seabourn-suites">
              <div className="azs-suites-image-wrap">
                <img
                  src={FitnessImage}
                  alt="Athlete enjoying a low-intensity workout at a luxury resort"
                  className="azs-suites-img"
                />
                <span className="azs-suites-image-badge">
                  Stay Active, Not Intense
                </span>
              </div>

              <div className="azs-suites-content">
                <div className="azs-suites-card-header">
                  <div className="azs-suites-icon-circle">
                    <Dumbbell size={24} className="azs-suites-icon" />
                  </div>
                  <h3 className="azs-suites-title">Fitness Without Pressure</h3>
                </div>

                <p className="azs-suites-intro">
                  Many luxury wellness resorts offer state-of-the-art fitness
                  facilities that allow guests to remain active without the
                  intensity of regular training.
                </p>

                <div className="azs-suites-body">
                  <h4 className="azs-suites-group-title">
                    Activities may include:
                  </h4>

                  <ul className="azs-suites-list">
                    {[
                      "Modern fitness centers",
                      "Yoga & Pilates",
                      "Swimming",
                      "Hiking & cycling",
                      "Tennis",
                      "Guided outdoor workouts",
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
                      The goal is to stay active while enjoying a more relaxed
                      pace.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Nutrition Card */}
            <div className="azs-suites-card azs-azamara-suites">
              <div className="azs-suites-image-wrap">
                <img
                  src={NutritionImage}
                  alt="Fresh, performance-focused cuisine at a wellness resort"
                  className="azs-suites-img"
                />
                <span className="azs-suites-image-badge">
                  Nutrition-Focused Cuisine
                </span>
              </div>

              <div className="azs-suites-content">
                <div className="azs-suites-card-header">
                  <div className="azs-suites-icon-circle">
                    <Utensils size={24} className="azs-suites-icon" />
                  </div>
                  <h3 className="azs-suites-title">
                    Nutrition That Supports Performance
                  </h3>
                </div>

                <p className="azs-suites-intro">
                  Luxury resorts increasingly offer nutrition-focused cuisine
                  and accommodate individual dietary preferences and
                  performance-focused nutrition plans.
                </p>

                <div className="azs-suites-body">
                  <h4 className="azs-suites-group-title">
                    Menus often feature:
                  </h4>

                  <ul className="azs-suites-list">
                    {[
                      "Fresh local ingredients",
                      "Balanced meals",
                      "High-protein options",
                      "Plant-forward dishes",
                      "Customized menus",
                      "Fresh juices & hydration-focused beverages",
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
                      Healthy eating becomes part of the vacation rather than a
                      restriction.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MENTAL WELLNESS & RELAXATION ─────────────────────────────── */}
      <section
        className="Leg-section"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="Leg-container">
          <div className="Leg-header">
            <h2 className="Leg-title">Mental Wellness &amp; Relaxation</h2>
            <div className="adg-c-accent-line"></div>
            <p className="Leg-subtitle">
              Physical recovery is only part of the equation. Luxury wellness
              travel also prioritizes mental well-being — recovery that can be
              just as valuable as physical recovery.
            </p>
          </div>

          <div className="Leg-grid">
            {[
              {
                id: 1,
                accent: "gold",
                icon: Brain,
                title: "Meditation",
                description:
                  "Guided sessions that encourage relaxation and focus, offered throughout many luxury wellness resorts.",
                pills: ["Guided Sessions", "Focus", "Relaxation"],
                highlight: "A quiet moment to reset the mind.",
              },
              {
                id: 2,
                accent: "navy",
                icon: Sun,
                title: "Mindfulness Practices",
                description:
                  "Helping guests disconnect from daily pressures and be fully present in the moment.",
                pills: ["Present Moment", "Stress Relief", "Balance"],
                highlight: "Mental recovery, built into every day.",
              },
              {
                id: 3,
                accent: "teal",
                icon: Trees,
                title: "Nature Experiences",
                description:
                  "Walking trails, gardens, beaches, and mountain landscapes create peaceful surroundings.",
                pills: ["Walking Trails", "Gardens", "Scenic Views"],
                highlight: "Peaceful surroundings, restorative pace.",
              },
              {
                id: 4,
                accent: "gold",
                icon: Headset,
                title: "Digital Detox Opportunities",
                description:
                  "Time away from constant notifications and media allows athletes to be fully present with family.",
                pills: ["Unplugged Time", "Family Focus", "Presence"],
                highlight: "Fully present with the people who matter most.",
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

      {/* ── FAMILY WELLNESS VACATIONS ───────────────────────────────── */}
      <section
        className="dmg-info-section dmg-bg-white"
        id="family-wellness-vacations"
      >
        <div className="dmg-info-container">
          <div className="dmg-info-grid">
            <div className="dmg-info-content">
              <h2 className="dmg-info-title">Family Wellness Vacations</h2>
              <div className="dmg-info-accent"></div>

              <p className="dmg-info-lead">
                Recovery travel doesn't have to mean traveling alone. Many
                luxury wellness destinations are designed for couples and
                families, so parents can focus on wellness while children enjoy
                enriching activities in a safe environment.
              </p>

              <div className="dmg-info-features dmg-info-features-scrollable">
                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">Family Yoga</h3>
                    <p className="dmg-info-feature-desc">
                      Guided sessions the whole family can enjoy together.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">Healthy Dining</h3>
                    <p className="dmg-info-feature-desc">
                      Nutritious menus designed for every age and preference.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Nature Excursions
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Outdoor adventures that bring the whole family together.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Spa Experiences &amp; Quality Time
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Relaxation by the pool paired with meaningful time
                      together.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="dmg-info-media">
              <div className="dmg-media-wrapper">
                <img
                  src={FamilyWellnessImage}
                  alt="Family enjoying yoga together at a luxury wellness resort"
                  className="dmg-media-img"
                  style={{ height: "650px" }}
                />
                <div className="dmg-media-overlay"></div>

                <div className="dmg-media-badge">
                  <span>Wellness, Shared Together</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ── CONCIERGE WELLNESS PLANNING ─────────────────────────────── */}
      <section
        className="ugt-components-section"
        id="concierge-wellness-planning"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="ugt-components-container">
          <div className="ugt-components-header">
            <h2 className="ugt-components-title">
              Concierge Wellness Planning
            </h2>

            <div className="adg-c-accent-line"></div>
          </div>

          <div className="ugt-components-list">
            <div className="ugt-component-row">
              <div className="ugt-component-image-wrapper">
                <div className="ugt-component-image-container">
                  <img
                    src={ConciergeImage}
                    alt="Concierge planning a personalized wellness itinerary"
                    className="ugt-component-image"
                  />
                </div>
              </div>

              <div className="ugt-component-content">
                <p className="ugt-component-text">
                  A wellness vacation is about more than booking a spa
                  treatment. Every journey is tailored around the traveler's
                  goals and lifestyle, with each detail handled professionally
                  so travelers can focus on well-being.
                </p>

                <div className="ugt-questions-box">
                  <span className="ugt-questions-title">
                    A luxury travel advisor can arrange:
                  </span>

                  <ul className="ugt-questions-list">
                    {[
                      "Luxury Spa Appointments",
                      "Fitness Experiences",
                      "Nutrition Consultations",
                      "Private Yoga Sessions",
                      "Outdoor Adventures & Healthy Dining Reservations",
                      "Family Wellness Activities & Personalized Itineraries",
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
                  Every itinerary is designed around health, balance, and
                  long-term well-being.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      {/* ── LUXURY RESORTS DESIGNED FOR RECOVERY ─────────────────────── */}
      <section
        className="dmg-info-section dmg-bg-white"
        id="dmg-resorts-for-recovery"
      >
        <div className="dmg-info-container">
          <div className="dmg-info-grid">
            {/* Left Side Image */}
            <div className="dmg-info-media">
              <div className="dmg-media-wrapper">
                <img
                  src={ResortImage}
                  alt="Luxury resort wellness center and outdoor pool"
                  className="dmg-media-img"
                  style={{ height: "710px" }}
                />
                <div className="dmg-media-overlay"></div>

                <div className="dmg-media-badge">
                  <span>Wellness Woven Into Every Detail</span>
                </div>
              </div>
            </div>

            {/* Right Side Content */}
            <div className="dmg-info-content">
              <h2 className="dmg-info-title">
                Luxury Resorts Designed for Recovery
              </h2>
              <div className="dmg-info-accent"></div>

              <p className="dmg-info-lead">
                Many luxury resorts now integrate wellness throughout the entire
                guest experience, creating an environment where every part of
                the vacation supports overall well-being.
              </p>

              <div className="dmg-info-features dmg-info-features-scrollable">
                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Spacious, Quiet Accommodations
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Peaceful surroundings designed for uninterrupted rest.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Wellness Centers &amp; Fitness Studios
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Full facilities dedicated to recovery and movement.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Healthy Dining &amp; Concierge Service
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Personalized concierge service and healthy dining
                      throughout the stay.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DESTINATIONS PERFECT FOR WELLNESS TRAVEL (TABBED) ────────── */}
      <section
        className="luc-destinations-section"
        id="luc-wellness-destinations"
      >
        <div className="luc-destinations-container">
          <div className="luc-destinations-header">
            <h2 className="luc-destinations-title">
              Destinations Perfect for Wellness Travel
            </h2>

            <div className="adg-c-accent-line"></div>

            <p className="luc-destinations-intro">
              Some destinations are especially well suited for recovery-focused
              vacations. Each provides a unique environment for rest, recovery,
              and renewal.
            </p>
          </div>

          <div className="luc-dest-layout">
            <nav className="luc-dest-nav">
              {wellnessDestinations.map((item) => {
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
                alt="Luxury travel advisor planning a wellness retreat itinerary"
                className="adg-side-image"
                style={{ height: "50vh" }}
              />

              <div className="adg-info-card">
                <div className="adg-card-meta">
                  <Award size={28} />
                  <span className="adg-meta-label">Trusted Expertise</span>
                </div>

                <p className="adg-card-lead">
                  A wellness vacation is about more than booking a spa
                  treatment. The result is a vacation designed around health,
                  balance, and long-term well-being.
                </p>

               
              </div>
            </div>

            <div className="adg-list-side">
              {[
                {
                  title: "Recommend Wellness-Focused Destinations",
                  icon: <Compass size={20} />,
                },
                {
                  title: "Select Recovery-Oriented Resorts",
                  icon: <Sparkles size={20} />,
                },
                {
                  title: "Arrange Personalized Spa Experiences",
                  icon: <Droplet size={20} />,
                },
                {
                  title: "Coordinate Healthy Dining",
                  icon: <Utensils size={20} />,
                },
                {
                  title: "Build Flexible Itineraries",
                  icon: <Map size={20} />,
                },
                {
                  title: "Organize Family-Friendly Wellness Activities",
                  icon: <Users size={20} />,
                },
                {
                  title:
                    "Provide Concierge-Level Service Before & During the Trip",
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

      {/* TIPS FOR PLANNING A WELLNESS VACATION */}
      <section
        className="Avr-planning-section"
        id="Asc-wellness-planning-tips"
        style={{ backgroundColor: "var(--bg-white)" }}
      >
        <div className="Asc-container">
          {/* HEADING */}
          <div className="Avr-planning-heading">
            <span className="Avr-planning-eyebrow">Planning With Purpose</span>

            <h2 className="Avr-planning-title">
              Tips for Planning a Wellness Vacation
            </h2>

            <div className="Avr-planning-divider"></div>
          </div>

          {/* TWO-PANEL GRID */}
          <div className="Avr-planning-grid">
            {/* LEFT PANEL */}
            <div className="Avr-planning-left">
              <div className="Avr-planning-left-deco">&ldquo;</div>

              <h3 className="Avr-planning-left-title">
                Balance Is the Goal, Not a Busy Itinerary
              </h3>

              <p className="Avr-planning-left-body">
                Avoid filling every day with activities. Balance fitness and
                rest, prioritize healthy dining, and consider traveling during
                the off-season, when quieter travel periods often create a more
                peaceful experience.
              </p>

              <div className="Avr-planning-alert">
                <ShieldCheck size={18} className="Avr-planning-alert-icon" />

                <p className="Avr-planning-alert-text">
                  Expert planning ensures the destination, accommodations, and
                  experiences align with your wellness goals from start to
                  finish.
                </p>
              </div>
            </div>

            {/* RIGHT PANEL */}
            <div className="Avr-planning-right">
              <p className="Avr-planning-right-intro">
                A well-planned wellness vacation is built around:
              </p>

              <div className="Avr-planning-benefits-grid">
                {[
                  {
                    icon: <Leaf size={18} />,
                    label: "Relaxation over busy schedules",
                  },
                  {
                    icon: <Dumbbell size={18} />,
                    label: "Balanced fitness and rest",
                  },
                  {
                    icon: <Utensils size={18} />,
                    label: "Prioritized healthy dining",
                  },
                  {
                    icon: <CalendarClock size={18} />,
                    label: "Off-season timing",
                  },
                  {
                    icon: <Headset size={18} />,
                    label: "Expert advisor guidance",
                  },
                  {
                    icon: <Users size={18} />,
                    label: "Family-friendly flexibility",
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
                A wellness vacation is about more than booking a spa treatment —
                it's about designing a trip around long-term well-being.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── RECOVERY DURING THE OFF-SEASON ───────────────────────── */}
      <section className="ugt-advantage-section" id="off-season-recovery">
        <div className="ugt-advantage-container">
          <div className="ugt-advantage-header">
            <span className="ugt-advantage-eyebrow">
              Luxury Wellness Travel
            </span>

            <h2 className="ugt-advantage-title">
              Recovery During the Off-Season
            </h2>

            <div className="Asc-accent-line"></div>

            <p className="ugt-advantage-intro">
              Many athletes use the off-season to rebuild both physically and
              mentally. Luxury wellness vacations can complement recovery by
              providing restorative environments, personalized service, and time
              to reconnect with family.
            </p>
          </div>

          <div className="ugt-advantage-grid">
            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <CalendarClock size={28} strokeWidth={1.5} />
              </div>

              <h4 className="ugt-card-title">Flexible Schedules</h4>

              <p className="ugt-card-desc">
                Enjoy each day at your own pace without rigid itineraries or
                time constraints.
              </p>
            </div>

            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <Leaf size={28} strokeWidth={1.5} />
              </div>

              <h4 className="ugt-card-title">Peaceful Surroundings</h4>

              <p className="ugt-card-desc">
                Quiet destinations encourage relaxation, reflection, and
                complete mental renewal.
              </p>
            </div>

            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <Utensils size={28} strokeWidth={1.5} />
              </div>

              <h4 className="ugt-card-title">Nutritious Meals</h4>

              <p className="ugt-card-desc">
                Fresh, chef-prepared cuisine supports healthy living while
                delivering exceptional dining experiences.
              </p>
            </div>

            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <HeartHandshake size={28} strokeWidth={1.5} />
              </div>

              <h4 className="ugt-card-title">Restorative Activities</h4>

              <p className="ugt-card-desc">
                Wellness treatments, spa therapies, yoga, and gentle outdoor
                experiences promote recovery and relaxation.
              </p>
            </div>

            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <Users size={28} strokeWidth={1.5} />
              </div>

              <h4 className="ugt-card-title">Family Time</h4>

              <p className="ugt-card-desc">
                Spend meaningful time together while creating lasting memories
                away from everyday commitments.
              </p>
            </div>

            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <Sparkles size={28} strokeWidth={1.5} />
              </div>

              <h4 className="ugt-card-title">
                Personalized Wellness Experiences
              </h4>

              <p className="ugt-card-desc">
                Customized programs are designed around your lifestyle, recovery
                goals, and personal preferences.
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
            The result is a vacation that supports both health and happiness.
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
                      icon: <HeartPulse size={16} />,
                      label:
                        "Specialist in luxury wellness and recovery travel for professional athletes",
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
                  help professional athletes plan luxury wellness and recovery
                  travel — from destination selection to flawless concierge
                  execution.
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
              Everything you need to know about planning luxury wellness and
              recovery travel.
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
            alt="Sunrise yoga overlooking the ocean at a luxury wellness resort"
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
                  Ready to Recharge on Your <br /> Next Wellness Escape?
                </h2>
                <div className="Asc-help-accent"></div>
              </div>

              <div className="Asc-help-grid">
                <div className="Asc-help-info">
                  <p className="Asc-help-intro">
                    Connect with Angela Hughes and the expert team at Trips
                    &amp; Ships Luxury Travel for personalized guidance on
                    planning an unforgettable wellness and recovery vacation.
                  </p>

                  <p className="Asc-help-intro">
                    From luxury spa retreats and recovery-focused resorts to
                    concierge planning and personalized wellness itineraries,
                    expert support helps every journey come together seamlessly.
                  </p>

                  <p className="Asc-help-intro">
                    Whether you're recovering from a demanding season, preparing
                    for the next challenge, or simply looking for a healthier
                    way to travel, personalized planning makes all the
                    difference.
                  </p>

                  <div className="Asc-help-btn-container">
                    <Link
                      to="/contact"
                      className="Asc-help-cta-btn"
                      style={{ textDecoration: "none" }}
                    >
                      Start Planning Your Wellness Escape
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
                      "Luxury wellness retreat & spa recommendations",
                      "Recovery-focused resort planning",
                      "Fitness & nutrition-focused itineraries",
                      "Mental wellness & mindfulness experiences",
                      "Luxury concierge support, start to finish",
                      "Family-focused wellness planning",
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
                    personalized wellness and recovery travel experiences
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

export default LuxuryWellnessRecoveryTravel;
