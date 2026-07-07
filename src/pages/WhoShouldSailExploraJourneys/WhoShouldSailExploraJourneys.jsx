import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Users,
  MapPin,
  Award,
  Check,
  Minus,
  Plus,
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
  Sun,
  Sailboat,
  Wine,
  Gem,
  ShieldCheck,
  Plane,
  Car,
  BadgePercent,
  Home,
  MapPinned,
  LifeBuoy,
  Droplet,
  User,
  Bed,
} from "lucide-react";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela2.jpeg";

import HeroImage1 from "../../assets/ExploraJourneysCruises/ExploraCruise.webp";
import HeroImage2 from "../../assets/HowAdvanceShouldBookExplora/explora-II.jpg";
import HeroImage4 from "../../assets/HowAdvanceShouldBookExplora/Explora-Journeys2.webp";
import ExploraPool from "../../assets/HowAdvanceShouldBookExplora/Explora-Journeys.webp";
import ExploraOutdoor from "../../assets/HowAdvanceShouldBookExplora/onboard-experience.webp";
import ExploraOutdoor1 from "../../assets/HowAdvanceShouldBookExplora/explora-journeys-luxury-ocean-wellness-spa-relaxation-room.jpg";
import LuxuryOceanfrontSuites from "../../assets/HowAdvanceShouldBookExplora/Explora-Suite.webp";
import LuxuryOceanfrontSuites1 from "../../assets/IsExploraGoodForFamilies/explora-I-infinity-pool-ocean-wake-view.jpg";
import LuxuryOceanfront from "../../assets/IsExploraGoodForFamilies/explora-journeys-oceanfront-infinity-pool-deck.jpg";
import LuxuryOceanfront1 from "../../assets/IsExploraGoodForFamilies/explora-III-helios-pool-luxury-sundeck-retreat.jpg";
import ExploraShip from "../../assets/HowAdvanceShouldBookExplora/explora-ship.jpg";

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
        "https://tripsandships.com/who-should-sail-explora-journeys/#webpage",
      name: "Who Should Sail Explora Journeys?",
      url: "https://tripsandships.com/who-should-sail-explora-journeys",
      description:
        "Wondering if Explora Journeys is right for you? Discover which travelers will love Explora's luxury cruise experience, including couples, retirees, food lovers, solo travelers, and luxury vacation enthusiasts.",
    },
    {
      "@type": "Article",
      "@id":
        "https://tripsandships.com/who-should-sail-explora-journeys/#article",
      headline: "Who Should Sail Explora Journeys?",
      description:
        "A complete guide to the types of travelers who will love Explora Journeys, including couples, retirees, solo travelers, food and wine enthusiasts, and wellness-focused guests.",
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
        "https://tripsandships.com/who-should-sail-explora-journeys/#breadcrumb",
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
          name: "Who Should Sail Explora Journeys?",
          item: "https://tripsandships.com/who-should-sail-explora-journeys",
        },
      ],
    },
    {
      "@type": "Cruise",
      "@id":
        "https://tripsandships.com/who-should-sail-explora-journeys/#cruise",
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
        "https://tripsandships.com/who-should-sail-explora-journeys/#touristtrip",
      name: "Explora Journeys Luxury Cruise Experience",
      description:
        "A relaxed, contemporary luxury cruise experience designed for travelers who value space, exceptional service, outstanding cuisine, and meaningful travel experiences.",
      provider: {
        "@type": "Organization",
        name: "Explora Journeys",
      },
    },
    {
      "@type": "Service",
      "@id":
        "https://tripsandships.com/who-should-sail-explora-journeys/#service",
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
      "@type": "ItemList",
      "@id":
        "https://tripsandships.com/who-should-sail-explora-journeys/#itemlist",
      name: "Traveler Types Who Will Love Explora Journeys",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Couples Looking for a Romantic Escape",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Experienced Luxury Travelers",
        },
        { "@type": "ListItem", position: 3, name: "Food & Wine Enthusiasts" },
        { "@type": "ListItem", position: 4, name: "Travelers Who Value Space" },
        {
          "@type": "ListItem",
          position: 5,
          name: "Travelers Seeking Relaxation",
        },
        {
          "@type": "ListItem",
          position: 6,
          name: "Wellness-Focused Travelers",
        },
        { "@type": "ListItem", position: 7, name: "Cultural Explorers" },
        { "@type": "ListItem", position: 8, name: "Solo Luxury Travelers" },
        { "@type": "ListItem", position: 9, name: "Retired Travelers" },
        {
          "@type": "ListItem",
          position: 10,
          name: "Celebrating Special Occasions",
        },
        {
          "@type": "ListItem",
          position: 11,
          name: "Luxury Travelers New to Cruising",
        },
      ],
    },
    {
      "@type": "Review",
      "@id":
        "https://tripsandships.com/who-should-sail-explora-journeys/#review",
      itemReviewed: {
        "@type": "Cruise",
        name: "Explora Journeys",
      },
      author: {
        "@type": "Person",
        name: "Angela Hughes",
      },
      reviewBody:
        "Explora Journeys is defined by how you like to travel, not your age or how many cruises you've taken. Travelers who value space, exceptional dining, attentive service, and the freedom to explore destinations at their own pace will find an experience unlike almost any other cruise line.",
    },
    {
      "@type": "AboutPage",
      "@id":
        "https://tripsandships.com/who-should-sail-explora-journeys/#aboutpage",
      name: "Who Should Sail Explora Journeys?",
      description:
        "An overview of the traveler types best suited to Explora Journeys, including couples, retirees, solo travelers, and luxury vacation enthusiasts.",
    },
    {
      "@type": "FAQPage",
      "@id": "https://tripsandships.com/who-should-sail-explora-journeys/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Who is Explora Journeys best suited for?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Explora is ideal for couples, luxury travelers, retirees, food enthusiasts, wellness travelers, solo travelers, and anyone seeking a relaxed luxury cruise experience.",
          },
        },
        {
          "@type": "Question",
          name: "Is Explora good for first-time luxury cruisers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Its contemporary atmosphere and intuitive service make it an excellent introduction to luxury cruising.",
          },
        },
        {
          "@type": "Question",
          name: "Is Explora suitable for couples?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. The peaceful atmosphere, exceptional dining, and luxurious suites make it especially popular with couples.",
          },
        },
        {
          "@type": "Question",
          name: "Is Explora good for retirees?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Many retirees appreciate the slower pace, destination-focused itineraries, and outstanding service.",
          },
        },
        {
          "@type": "Question",
          name: "Can solo travelers enjoy Explora?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. The welcoming atmosphere, elegant public spaces, and flexible dining make it comfortable for independent travelers.",
          },
        },
        {
          "@type": "Question",
          name: "Is Explora family-friendly?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Families are welcome, but the experience is designed more for sophisticated luxury travel than children's entertainment.",
          },
        },
        {
          "@type": "Question",
          name: "Is Explora a good choice for food lovers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Definitely. Dining is considered one of the strongest aspects of the Explora experience.",
          },
        },
        {
          "@type": "Question",
          name: "Is Explora good for wellness travelers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Wellness is integrated throughout the ship with spa facilities, fitness programs, healthy dining, and relaxation spaces.",
          },
        },
        {
          "@type": "Question",
          name: "Who may not enjoy Explora?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Travelers seeking water parks, Broadway-style entertainment, casinos, or high-energy nightlife may find other cruise lines a better fit.",
          },
        },
        {
          "@type": "Question",
          name: "Should I book through a travel advisor?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A luxury travel advisor can help you determine if Explora matches your travel style while recommending the best itinerary and suite.",
          },
        },
        {
          "@type": "Question",
          name: "Is Explora Journeys suitable for multi-generational families?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, particularly for multi-generational families who prioritize relaxed quality time, fine dining, and spacious suite configurations (including connecting suites) over high-energy pool slides or organized children's shows.",
          },
        },
        {
          "@type": "Question",
          name: "Is Explora Journeys a good option for corporate meetings and charter cruises?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. The uncrowded layout, private meeting spaces, state-of-the-art technology, high-speed Starlink Wi-Fi, and personalized service make Explora ships highly attractive for corporate retreats, incentive trips, and full-vessel charters.",
          },
        },
        {
          "@type": "Question",
          name: "What is the age demographic of passengers on Explora Journeys?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Explora Journeys attracts a diverse demographic of sophisticated global travelers. While guests typically range in age from 40 to 70+, the brand focuses on attracting active luxury travelers of all ages who value wellness, design, culinary arts, and slow travel.",
          },
        },
        {
          "@type": "Question",
          name: "Is Explora Journeys popular with travelers who are new to cruising?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Many first-time Explora guests are luxury resort enthusiasts who previously hesitated to cruise due to crowds and structured schedules. Explora's boutique resort-at-sea atmosphere feels very familiar to land-based luxury hotel guests.",
          },
        },
        {
          "@type": "Question",
          name: "How does Explora accommodate guests celebrating milestones or special occasions?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Milestone travelers celebrating anniversaries, retirements, birthdays, or family reunions are warmly welcomed with personalized touches, specialty dining arrangements, and customizable shore tours tailored by the onboard hosts.",
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
      q: "Who is Explora Journeys best suited for?",
      a: "Explora is ideal for couples, luxury travelers, retirees, food enthusiasts, wellness travelers, solo travelers, and anyone seeking a relaxed luxury cruise experience.",
    },
    {
      q: "Is Explora good for first-time luxury cruisers?",
      a: "Yes. Its contemporary atmosphere and intuitive service make it an excellent introduction to luxury cruising.",
    },
    {
      q: "Is Explora suitable for couples?",
      a: "Absolutely. The peaceful atmosphere, exceptional dining, and luxurious suites make it especially popular with couples.",
    },
    {
      q: "Is Explora good for retirees?",
      a: "Yes. Many retirees appreciate the slower pace, destination-focused itineraries, and outstanding service.",
    },
    {
      q: "Can solo travelers enjoy Explora?",
      a: "Yes. The welcoming atmosphere, elegant public spaces, and flexible dining make it comfortable for independent travelers.",
    },
    {
      q: "Is Explora family-friendly?",
      a: "Families are welcome, but the experience is designed more for sophisticated luxury travel than children's entertainment.",
    },
    {
      q: "Is Explora a good choice for food lovers?",
      a: "Definitely. Dining is considered one of the strongest aspects of the Explora experience.",
    },
    {
      q: "Is Explora good for wellness travelers?",
      a: "Yes. Wellness is integrated throughout the ship with spa facilities, fitness programs, healthy dining, and relaxation spaces.",
    },
    {
      q: "Who may not enjoy Explora?",
      a: "Travelers seeking water parks, Broadway-style entertainment, casinos, or high-energy nightlife may find other cruise lines a better fit.",
    },
    {
      q: "Should I book through a travel advisor?",
      a: "A luxury travel advisor can help you determine if Explora matches your travel style while recommending the best itinerary and suite.",
    },
    {
      q: "Is Explora Journeys suitable for multi-generational families?",
      a: "Yes, particularly for multi-generational families who prioritize relaxed quality time, fine dining, and spacious suite configurations (including connecting suites) over high-energy pool slides or organized children's shows.",
    },
    {
      q: "Is Explora Journeys a good option for corporate meetings and charter cruises?",
      a: "Absolutely. The uncrowded layout, private meeting spaces, state-of-the-art technology, high-speed Starlink Wi-Fi, and personalized service make Explora ships highly attractive for corporate retreats, incentive trips, and full-vessel charters.",
    },
    {
      q: "What is the age demographic of passengers on Explora Journeys?",
      a: "Explora Journeys attracts a diverse demographic of sophisticated global travelers. While guests typically range in age from 40 to 70+, the brand focuses on attracting active luxury travelers of all ages who value wellness, design, culinary arts, and slow travel.",
    },
    {
      q: "Is Explora Journeys popular with travelers who are new to cruising?",
      a: "Yes. Many first-time Explora guests are luxury resort enthusiasts who previously hesitated to cruise due to crowds and structured schedules. Explora's boutique resort-at-sea atmosphere feels very familiar to land-based luxury hotel guests.",
    },
    {
      q: "How does Explora accommodate guests celebrating milestones or special occasions?",
      a: "Milestone travelers celebrating anniversaries, retirements, birthdays, or family reunions are warmly welcomed with personalized touches, specialty dining arrangements, and customizable shore tours tailored by the onboard hosts.",
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

/* ── Traveler Profile Data ───────────────────────────────────────── */
const travelerProfiles = [
  {
    id: 1,
    eyebrow: "Romance",
    name: "Couples Looking for a Romantic Escape",
    highlight: "One of the Best Luxury Cruise Lines for Couples",
    items: [
      "Spacious suites with private terraces",
      "Elegant restaurants",
      "Sunset cocktails",
      "Luxury spa experiences",
      "Quiet lounges",
      "Ocean-view pools",
      "Romantic Mediterranean itineraries",
    ],
    callout:
      "Instead of crowded public areas, couples can enjoy intimate spaces throughout the ship, making Explora's peaceful atmosphere naturally encourage quality time together.",
  },
  {
    id: 2,
    eyebrow: "Refined Taste",
    name: "Experienced Luxury Travelers",
    highlight: "A Familiar Feel for Boutique Hotel Lovers",
    items: [
      "Boutique hotels",
      "Personalized service",
      "Fine dining",
      "Contemporary design",
      "Relaxed sophistication",
    ],
    callout:
      "Guests who regularly stay in luxury hotels or travel with premium tour operators often appreciate that Explora offers luxury without unnecessary formality.",
  },
  {
    id: 3,
    eyebrow: "Cuisine",
    name: "Food & Wine Enthusiasts",
    highlight: "Dining as Part of the Journey",
    items: [
      "Multiple restaurants",
      "Mediterranean specialties",
      "International cuisine",
      "Elegant presentation",
      "Flexible dining",
      "Premium wines",
      "Specialty dining experiences",
    ],
    callout:
      "Travelers who build vacations around exceptional cuisine will find meals become part of the journey rather than simply a daily routine.",
  },
];

const spaceAndRelaxProfiles = [
  {
    id: 1,
    eyebrow: "Space",
    name: "Travelers Who Value Space",
    highlight: "Room to Breathe, Even on Sea Days",
    items: [
      "Larger suites",
      "Multiple pool areas",
      "Quiet lounges",
      "Spacious outdoor decks",
      "Comfortable seating throughout the ship",
      "Oceanfront relaxation spaces",
    ],
    callout:
      "Guests who dislike crowded ships will always find somewhere peaceful to unwind, even during sea days.",
  },
  {
    id: 2,
    eyebrow: "Relaxation",
    name: "Travelers Seeking Relaxation",
    highlight: "A Vacation That Restores You",
    items: [
      "Reading by the pool",
      "Long lunches",
      "Spa treatments",
      "Watching the ocean",
      "Leisurely mornings",
      "Slow evenings",
    ],
    callout:
      "Some vacations leave travelers feeling exhausted. Explora is designed to do the opposite, with a relaxed pace built into every day.",
  },
  {
    id: 3,
    eyebrow: "Wellness",
    name: "Wellness-Focused Travelers",
    highlight: "Wellness as Part of Everyday Life",
    items: [
      "Luxury spa",
      "Modern fitness center",
      "Yoga",
      "Wellness programs",
      "Healthy dining",
      "Outdoor relaxation spaces",
    ],
    callout:
      "Explora integrates wellness throughout the onboard experience, rather than treating it as simply an optional activity.",
  },
];

const soloAndRetireeProfiles = [
  {
    icon: <Compass size={22} />,
    title: "Cultural Explorers",
    desc: "Explora's itineraries often include longer port stays, overnight visits, and less crowded destinations, allowing guests more time ashore to immerse themselves in each culture rather than rushing between ports.",
  },
  {
    icon: <Users size={22} />,
    title: "Solo Luxury Travelers",
    desc: "The ship feels welcoming without requiring guests to participate in organized social activities, thanks to comfortable public spaces, friendly yet unobtrusive service, and flexible dining.",
  },
  {
    icon: <Sun size={22} />,
    title: "Retired Travelers",
    desc: "Retirees often appreciate Explora's slower pace and destination-focused itineraries, with extended voyages and longer stays in port allowing every destination to be enjoyed without feeling rushed.",
  },
  {
    icon: <Gem size={22} />,
    title: "Celebrating Special Occasions",
    desc: "From anniversaries and honeymoons to retirement celebrations and family reunions, the elegant atmosphere makes every milestone vacation feel even more memorable.",
  },
  {
    icon: <Sailboat size={22} />,
    title: "Luxury Travelers New to Cruising",
    desc: "Explora feels less like a traditional cruise ship and more like a luxury resort that moves from destination to destination, offering a refreshing alternative for those who've hesitated to cruise before.",
  },
  {
    icon: <Wine size={22} />,
    title: "Refined, Unhurried Travel",
    desc: "For travelers who value meaningful experiences over busy schedules, Explora offers quiet sophistication over constant entertainment.",
  },
];

/* ── Main Component ──────────────────────────────────────────────── */
const WhoShouldSailExplora = () => {
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
          Who Should Sail Explora Journeys? | Is Explora the Right Luxury Cruise
          for You?
        </title>
        <meta name="title" content="Who Should Sail Explora Journeys?" />
        <meta
          name="description"
          content="Wondering if Explora Journeys is right for you? Discover which travelers will love Explora's luxury cruise experience, including couples, retirees, food lovers, solo travelers, and luxury vacation enthusiasts."
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
          <h1>Who Should Sail Explora Journeys?</h1>

          <p>
            Not every luxury cruise line is designed for every traveler. Some
            focus on entertainment and family activities, others on expedition
            adventures or traditional luxury.
          </p>

          <p>
            Explora Journeys has created something different — a relaxed,
            contemporary luxury experience designed for travelers who value
            space, exceptional service, outstanding cuisine, and meaningful
            travel experiences.
          </p>

          {readMore && (
            <>
              <p>
                If you're wondering whether Explora Journeys is the right cruise
                line for you, the answer depends less on your age and more on
                your travel style.
              </p>

              <p>
                If you enjoy sophisticated surroundings, flexible schedules, and
                immersive destinations, Explora may be exactly what you're
                looking for.
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

      {/* ── OVERVIEW ──────────────────────────────────────────────── */}
      <section className="adg-c-section adg-c-bg-soft" id="adg-common-features">
        <div className="adg-c-container">
          <div className="adg-c-section-header">
            <h2 className="adg-c-h2">
              Travelers Who Will Love Explora Journeys
            </h2>
            <div className="adg-c-accent-line"></div>
            <p className="Asc-section-intro">
              Explora appeals to travelers who believe luxury is about comfort,
              freedom, and personalized experiences rather than nonstop
              entertainment.
            </p>
          </div>

          <div className="adg-c-overview-layout">
            <div className="adg-c-overview-icons">
              {[
                "Boutique luxury hotels at sea",
                "Exceptional, destination-inspired dining",
                "Spacious all-suite accommodations",
                "Contemporary European design",
                "Personalized, unobtrusive service",
                "Integrated wellness experiences",
                "Meaningful, in-depth destinations",
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
                    Many guests share similar travel preferences: sophisticated
                    surroundings, flexible schedules, and immersive destinations
                    over crowds and rigid itineraries.
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

      {/* ── ROMANCE / EXPERIENCED / FOOD & WINE ─────────────────────── */}
      <section
        className="adg-c-section adg-c-bg-white"
        id="adg-traveler-profiles"
      >
        <div className="adg-c-container">
          <div className="adg-c-section-header">
            <span className="adg-c-eyebrow">Travel Styles</span>
            <h2 className="adg-c-h2">Is Explora Journeys Right for Me?</h2>
            <div className="adg-c-accent-line"></div>
          </div>

          <div className="adg-c-venues-grid">
            {travelerProfiles.map((venue, i) => (
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

      {/* TRAVELERS SEEKING RELAXATION & WELLNESS-FOCUSED TRAVELERS */}
      <section className="azs-suites-section" id="azs-relaxation-wellness">
        <div className="azs-container">
          <div className="azs-section-header">
            <h2 className="azs-section-title">
              Travelers Seeking Relaxation &amp; <br /> Wellness-Focused
              Travelers
            </h2>
            <div className="azs-section-accent"></div>
            <p className="azs-section-subtitle">
              Explora Journeys is designed for guests who want to slow down,
              recharge, and enjoy wellness as part of their everyday cruise
              experience.
            </p>
          </div>

          <div className="azs-suites-grid">
            {/* Relaxation Card */}
            <div className="azs-suites-card azs-seabourn-suites">
              <div className="azs-suites-image-wrap">
                <img
                  src={ExploraOutdoor}
                  alt="Guest relaxing by the pool aboard Explora Journeys"
                  className="azs-suites-img"
                />
                <span className="azs-suites-image-badge">
                  Relax at Your Own Pace
                </span>
              </div>

              <div className="azs-suites-content">
                <div className="azs-suites-card-header">
                  <div className="azs-suites-icon-circle">
                    <Coffee size={24} className="azs-suites-icon" />
                  </div>
                  <h3 className="azs-suites-title">
                    Travelers Seeking Relaxation
                  </h3>
                </div>

                <p className="azs-suites-intro">
                  Some vacations leave travelers feeling exhausted. Explora
                  Journeys is designed to do the opposite, creating a calm
                  atmosphere where guests can truly unwind.
                </p>

                <div className="azs-suites-body">
                  <h4 className="azs-suites-group-title">
                    If your ideal vacation includes:
                  </h4>

                  <ul className="azs-suites-list">
                    {[
                      "Reading by the pool",
                      "Long lunches",
                      "Spa treatments",
                      "Watching the ocean",
                      "Leisurely mornings",
                      "Slow evenings",
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
                      You'll likely appreciate Explora's relaxed pace and
                      peaceful onboard atmosphere.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Wellness Card */}
            <div className="azs-suites-card azs-azamara-suites">
              <div className="azs-suites-image-wrap">
                <img
                  src={ExploraOutdoor1}
                  alt="Luxury wellness facilities aboard Explora Journeys"
                  className="azs-suites-img"
                />
                <span className="azs-suites-image-badge">
                  Wellness Every Day
                </span>
              </div>

              <div className="azs-suites-content">
                <div className="azs-suites-card-header">
                  <div className="azs-suites-icon-circle">
                    <Heart size={24} className="azs-suites-icon" />
                  </div>
                  <h3 className="azs-suites-title">
                    Wellness-Focused Travelers
                  </h3>
                </div>

                <p className="azs-suites-intro">
                  Explora Journeys integrates wellness throughout the onboard
                  experience, making healthy living a natural part of every day
                  at sea.
                </p>

                <div className="azs-suites-body">
                  <h4 className="azs-suites-group-title">Guests enjoy:</h4>

                  <ul className="azs-suites-list">
                    {[
                      "Luxury spa",
                      "Modern fitness center",
                      "Yoga",
                      "Wellness programs",
                      "Healthy dining",
                      "Outdoor relaxation spaces",
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
                      Wellness becomes part of everyday life onboard rather than
                      simply an optional activity.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CULTURAL EXPLORERS & SOLO LUXURY TRAVELERS */}
      <section
        className="Ejsc-ent-section"
        id="Ejsc-cultural-solo-travelers"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="Ejsc-container">
          <div className="Ejsc-section-header">
            <h2 className="Ejsc-section-title">Cultural Explorers</h2>
            <div className="Asc-accent-line"></div>
            <p className="Ejsc-section-subtitle">
              Many travelers choose luxury cruises because they want to
              experience fascinating destinations, not simply check ports off a
              list.
            </p>
          </div>

          <div className="Ejsc-ent-grid">
            {/* Cultural Explorers Card */}
            <div className="Ejsc-ent-card Ejsc-explora-card">
              <div className="Ejsc-card-header">
                <div className="Ejsc-card-icon-wrap">
                  <Compass size={24} className="Ejsc-card-icon" />
                </div>
                <h3 className="Ejsc-card-title">Cultural Explorers</h3>
              </div>

              <p className="Ejsc-card-intro">
                Explora Journeys' thoughtfully designed itineraries allow guests
                to spend more time discovering each destination instead of
                rushing from port to port.
              </p>

              <ul className="Ejsc-feature-list">
                {[
                  "Longer port stays",
                  "Overnight visits",
                  "Less crowded destinations",
                  "More time ashore",
                  "Cultural experiences",
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
                  Rather than rushing between ports, guests have time to immerse
                  themselves in each destination.
                </p>
              </div>
            </div>

            {/* Solo Luxury Travelers Card */}
            <div className="Ejsc-ent-card Ejsc-seabourn-card">
              <div className="Ejsc-card-header">
                <div className="Ejsc-card-icon-wrap">
                  <User size={24} className="Ejsc-card-icon" />
                </div>
                <h3 className="Ejsc-card-title">Solo Luxury Travelers</h3>
              </div>

              <p className="Ejsc-card-intro">
                Explora Journeys is also well suited for solo travelers who
                appreciate elegant surroundings, attentive service, and the
                freedom to enjoy the voyage at their own pace.
              </p>

              <ul className="Ejsc-feature-list">
                {[
                  "Comfortable public spaces",
                  "Friendly yet unobtrusive service",
                  "Flexible dining",
                  "Wellness facilities",
                  "Cultural enrichment",
                  "Relaxed atmosphere",
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
                  The ship feels welcoming without requiring guests to
                  participate in organized social activities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRAVELERS WHO VALUE SPACE ───────────────────────────────────── */}
      <section
        className="wnf-section wnf-bg-white"
        id="travelers-who-value-space"
      >
        <div className="wnf-container">
          <div className="wnf-section-header">
            <h2 className="wnf-h2">Travelers Who Value Space</h2>
            <div className="wnf-accent-line"></div>
          </div>

          <div className="wnf-split">
            <div className="wnf-image-column">
              <div className="wnf-image-stack">
                <div className="wnf-img-frame wnf-frame-primary">
                  <img
                    src={LuxuryOceanfrontSuites}
                    alt="Spacious outdoor deck aboard an Explora Journeys ship"
                    className="wnf-photo"
                  />
                </div>

                <div className="wnf-img-frame wnf-frame-secondary">
                  <img
                    src={LuxuryOceanfrontSuites1}
                    alt="Elegant oceanfront lounge on Explora Journeys"
                    className="wnf-photo"
                  />
                </div>
              </div>
            </div>

            <div className="wnf-content-column">
              <div className="wnf-block">
                <p className="wnf-lead-text">
                  One of Explora Journeys' biggest advantages is how spacious
                  everything feels. Guests who dislike crowded ships appreciate
                  the generous public areas, peaceful atmosphere, and room to
                  relax throughout the voyage.
                </p>

                <ul className="wnf-feature-list">
                  {[
                    "Larger suites",
                    "Multiple pool areas",
                    "Quiet lounges",
                    "Spacious outdoor decks",
                    "Comfortable seating throughout the ship",
                    "Oceanfront relaxation spaces",
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
                  Even during sea days, there is always somewhere peaceful to
                  unwind, making Explora Journeys an excellent choice for
                  travelers who value privacy, comfort, and personal space.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CELEBRATING SPECIAL OCCASIONS ────────────────────────────── */}
      <section
        className="Asc-section Asc-bg-white"
        id="Asc-celebrating-special-occasions"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="Asc-container">
          <div className="Asc-section-header">
            <h2 className="Asc-h2">Celebrating Special Occasions</h2>
            <div className="Asc-accent-line"></div>
          </div>

          <p className="Asc-body-text" style={{ marginBottom: "20px" }}>
            Explora Journeys is an outstanding choice for celebrating life's
            milestones. Whether you're marking a romantic getaway or gathering
            loved ones for a memorable occasion, the ship's elegant atmosphere,
            exceptional service, and destination-rich itineraries make every
            celebration feel even more special.
          </p>

          <div className="adg-c-overview-icons">
            {[
              "Anniversaries",
              "Honeymoons",
              "Retirement celebrations",
              "Birthdays",
              "Family reunions",
              "Milestone vacations",
            ].map((label, i) => (
              <div key={i} className="adg-c-overview-item">
                <span className="adg-c-overview-icon">
                  <Check size={16} strokeWidth={2.5} />
                </span>
                <span className="adg-c-overview-label">{label}</span>
              </div>
            ))}
          </div>

          <p
            className="Asc-body-text"
            style={{
              marginTop: "30px",
              textAlign: "center",
              maxWidth: "900px",
              marginInline: "auto",
            }}
          >
            From intimate celebrations to once-in-a-lifetime family gatherings,
            Explora Journeys provides a sophisticated setting where every
            milestone becomes an unforgettable experience.
          </p>
        </div>
      </section>

      {/* ── RETIRED TRAVELERS ─────────────────────────────── */}
      <section
        className="ugt-components-section"
        id="retired-travelers"
        style={{ backgroundColor: "var(--bg-white)" }}
      >
        <div className="ugt-components-container">
          <div className="ugt-components-header">
            <h2 className="ugt-components-title">Retired Travelers</h2>

            <div className="adg-c-accent-line"></div>
          </div>

          <div className="ugt-components-list">
            <div className="ugt-component-row">
              <div className="ugt-component-image-wrapper">
                <div className="ugt-component-image-container">
                  <img
                    src={LuxuryOceanfront}
                    alt="Retired couple relaxing aboard an Explora Journeys cruise"
                    className="ugt-component-image"
                  />
                </div>
              </div>

              <div className="ugt-component-content">
                <p className="ugt-component-text">
                  Retirees often appreciate Explora Journeys' slower pace and
                  destination-focused itineraries. With more time to relax both
                  onboard and ashore, every voyage is designed to be
                  comfortable, enriching, and unhurried.
                </p>

                <div className="ugt-questions-box">
                  <span className="ugt-questions-title">
                    Many retired travelers enjoy:
                  </span>

                  <ul className="ugt-questions-list">
                    {[
                      "Extended voyages",
                      "Longer stays in port",
                      "Comfortable accommodations",
                      "Exceptional dining",
                      "Personalized service",
                      "Wellness experiences",
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
                  The relaxed schedule allows travelers to enjoy every
                  destination without feeling rushed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── VIDEO ────────────────────────────────────────────────────── */}
      {/* <section
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
      </section> */}

      {/* ── IS EXPLORA RIGHT FOR FAMILIES? ─────────────────────────── */}
      <section className="adg-section" id="adg-explora-families">
        <div className="adg-container">
          <div className="adg-section-header" style={{ marginBottom: "60px" }}>
            <h2 className="adg-h2">Is Explora Right for Families?</h2>

            <div className="adg-accent-line"></div>

            <p
              className="Asc-body-text"
              style={{ textAlign: "center", marginTop: "15px" }}
            >
              Families are certainly welcome onboard, but Explora Journeys is
              best suited to those who value a relaxed, refined style of travel
              rather than constant entertainment.
            </p>
          </div>

          <div className="adg-split-layout">
            <div className="adg-content-card-side">
              <img
                src={LuxuryOceanfront1}
                alt="Family enjoying time together aboard Explora Journeys"
                className="adg-side-image"
              />

              <div className="adg-info-card">
                <div className="adg-card-meta">
                  <Users size={28} />
                  <span className="adg-meta-label">
                    Luxury Family Travel at a Relaxed Pace
                  </span>
                </div>

                <p className="adg-card-lead">
                  Explora Journeys appeals to families who enjoy spending
                  quality time together while experiencing elegant surroundings,
                  exceptional service, and immersive destinations.
                </p>
              </div>
            </div>

            <div className="adg-list-side">
              {[
                { title: "Quiet luxury", icon: <Home size={20} /> },
                { title: "Quality dining", icon: <Utensils size={20} /> },
                { title: "Cultural travel", icon: <Compass size={20} /> },
                { title: "Spacious accommodations", icon: <Bed size={20} /> },
                { title: "Relaxed schedules", icon: <Coffee size={20} /> },
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

      {/* ── WHO MAY PREFER ANOTHER LINE ─────────────────────────────── */}
      <section className="Asc-section Asc-bg-white" id="Asc-who">
        <div className="Asc-container">
          <div className="Asc-section-header">
            <h2 className="Asc-h2">What Type of Traveler Are You?</h2>
            <div className="Asc-accent-line"></div>
            <p className="Asc-faq-intro">
              Explora Journeys is an excellent choice if you answer "yes" to
              several of the questions below.
            </p>
          </div>

          <div className="Asc-who-grid">
            <div className="Asc-who-card Asc-who-yes">
              <h3 className="Asc-who-title">
                You Will Appreciate Explora If You:
              </h3>
              <ul className="Asc-who-list">
                {[
                  "Enjoy boutique luxury hotels",
                  "Appreciate exceptional dining",
                  "Prefer fewer crowds",
                  "Value personalized service",
                  "Enjoy slower-paced travel",
                  "Would rather relax than rush",
                  "Appreciate beautiful design",
                  "Value wellness",
                  "Enjoy exploring destinations in depth",
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
                  "Water slides",
                  "Large casinos",
                  "Broadway-style productions",
                  "Character entertainment",
                  "High-energy nightlife",
                  "Constant organized activities",
                  "Budget pricing",
                ].map((item, i) => (
                  <li key={i}>
                    <Minus size={16} className="Asc-icon-muted" />
                    {item}
                  </li>
                ))}
              </ul>
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
            Families traveling primarily for children's entertainment may also
            find more suitable options elsewhere — though families who
            appreciate quiet luxury, quality dining, cultural travel, and
            relaxed schedules, especially those with teenagers and adult
            children, often find Explora particularly enjoyable.
          </p>
        </div>
      </section>
      {/* ── BUILT WITH PURPOSE - EPISODE 1 ────────────────────────────────── */}
      <section
        className="Asc-video-section"
        id="Asc-video-built-with-purpose"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="Asc-container">
          <div className="Asc-section-header">
            <h2 className="Asc-h2">Discover the Vision of Explora Journeys</h2>

            <div className="Asc-accent-line"></div>

            <p className="Asc-video-intro">
              Discover the story behind Explora Journeys and the vision that
              inspired a completely new way to experience luxury travel at sea.
            </p>
          </div>

          <div className="Asc-video-wrapper">
            <div className="Asc-video-frame">
              <iframe
                src="https://www.youtube.com/embed/_cxPoKKV4bE"
                title="Built with Purpose - Episode 1 | Explora Journeys"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY BOOK THROUGH A LUXURY TRAVEL ADVISOR ────────────────── */}
      <section
        className="Avr-planning-section"
        id="Asc-luxury-travel-advisor"
        style={{ backgroundColor: "var(--bg-white)" }}
      >
        <div className="Asc-container">
          <div className="Avr-planning-heading">
            <span className="Avr-planning-eyebrow">Expert Cruise Planning</span>

            <h2 className="Avr-planning-title">
              Why Book Through a Luxury Travel Advisor?
            </h2>

            <div className="Avr-planning-divider"></div>
          </div>

          <div className="Avr-planning-grid">
            <div className="Avr-planning-left">
              <div className="Avr-planning-left-deco">&ldquo;</div>

              <h3 className="Avr-planning-left-title">
                Choosing the Right Cruise Line Is Only the Beginning
              </h3>

              <p className="Avr-planning-left-body">
                An experienced luxury travel advisor can help you determine
                whether Explora matches your travel style, recommend the ideal
                itinerary and suite, and personalize your overall vacation from
                start to finish.
              </p>

              <div className="Avr-planning-alert">
                <ShieldCheck size={18} className="Avr-planning-alert-icon" />

                <p className="Avr-planning-alert-text">
                  Professional guidance ensures you choose the cruise that truly
                  fits your expectations.
                </p>
              </div>
            </div>

            <div className="Avr-planning-right">
              <p className="Avr-planning-right-intro">
                A luxury travel advisor can:
              </p>

              <div className="Avr-planning-benefits-grid">
                {[
                  {
                    icon: <Compass size={18} />,
                    label:
                      "Determine whether Explora matches your travel style",
                  },
                  {
                    icon: <MapPinned size={18} />,
                    label: "Recommend the ideal itinerary",
                  },
                  { icon: <Home size={18} />, label: "Select the right suite" },
                  {
                    icon: <BadgePercent size={18} />,
                    label: "Compare promotional offers",
                  },
                  {
                    icon: <Plane size={18} />,
                    label: "Arrange flights and transfers",
                  },
                  {
                    icon: <Car size={18} />,
                    label: "Coordinate pre- and post-cruise hotels",
                  },
                  {
                    icon: <Sparkles size={18} />,
                    label: "Personalize your overall vacation",
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
              Everything travelers need to know before deciding whether Explora
              Journeys is the right luxury cruise line for them.
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
                <h2 className="Asc-help-h2">
                 Should You Sail on Explora I?
                </h2>
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
                      "Determine whether Explora matches your travel style",
                      "Recommend the ideal itinerary",
                      "Select the right suite",
                      "Compare promotional offers",
                      "Arrange flights and transfers",
                      "Coordinate pre- and post-cruise hotels",
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
                      label: "Is Explora Good for Families?",
                      path: "/is-explora-good-for-families",
                    },
                    {
                      label: "Is Explora Good for Solo Travelers?",
                      path: "/is-explora-good-for-solo-travelers",
                    },
                    {
                      label: "Planning Your First Explora Journey",
                      path: "/planning-your-first-explora-journey",
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
                      label: "Should You Book Through a Travel Advisor?",
                      path: "/should-you-book-through-a-travel-advisor",
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

export default WhoShouldSailExplora;
