import { useState, useEffect } from "react";
import {
  MapPin,
  Award,
  Check,
  Plus,
  Minus,
  ArrowRight,
  Star,
  Palmtree,
  TrendingUp,
  Users,
  Sparkles,
  Ship,
  Wine,
  Utensils,
  Heart,
  Wifi,
  Baby,
  ShoppingBag,
  Camera,
  HandCoins,
  Map,
} from "lucide-react";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela.jpeg";
import { Helmet } from "react-helmet-async";

import HeroImage1 from "../../assets/WhatIsIncludedDisneyCruise/disney-castaway-cay-private-island-aerial-drone-view-cruise-ship.jpg";
import HeroImage2 from "../../assets/WhatIsIncludedDisneyCruise/disney-wish-enchante-restaurant-luxury-french-fine-dining.jpg";
import HeroImage3 from "../../assets/WhatIsIncludedDisneyCruise/disney-wish-grand-hall-atrium-chandelier-view-from-above.jpeg";
import DisneyIncludedExp1 from "../../assets/WhatIsIncludedDisneyCruise/disney-wish-the-rose-lounge-adults-only-luxury-seating.jpg";
import DisneyIncludedSuite from "../../assets/WhatIsIncludedDisneyCruise/disney-wish-oceaneer-club-star-wars-cargo-bay-kids-activities.jpg";
import DisneyIncludedDining from "../../assets/WhatIsIncludedDisneyCruise/family-dining-together-at-disney-cruise-restaurant.jpg";
import DisneyIncludedCharacter from "../../assets/WhatIsIncludedDisneyCruise/disney-cruise-character-walk-donald-duck-promenade-deck.jpg";
import DisneyIncludedExp2 from "../../assets/WhatIsIncludedDisneyCruise/multigenerational-family-dinner-disney-cruise-ship-rotational-dining-experience.jpg";
import DisneyIncludedExp3 from "../../assets/WhatIsIncludedDisneyCruise/kids-playing-dress-up-in-disney-cruise-stateroom.jpg";
import DisneyIncludedExp4 from "../../assets/WhatIsIncludedDisneyCruise/disney-cruise-family-stateroom-bunk-beds-cabin-interior.jpg";
import DisneyIncludedExp5 from "../../assets/WhatIsIncludedDisneyCruise/disney-wish-luna-lounge-circular-stage-architecture.jpg";

import DisneyIncludedExp6 from "../../assets/WhatIsIncludedDisneyCruise/chip-and-dale-castaway-cay-family-beach.jpg";
import DisneyIncludedExp7 from "../../assets/WhatIsIncludedDisneyCruise/disney-cruise-frozen-dining-adventure-elsa-restaurant-show.jpg";
import DisneyIncludedExp8 from "../../assets/WhatIsIncludedDisneyCruise/disney-cruise-wonderland-cinema-movie-theater.jpg";
import DisneyIncludedExp9 from "../../assets/WhatIsIncludedDisneyCruise/senses-spa-relaxation-disney-cruise.jpg";
import DisneyIncludedExp10 from "../../assets/WhatIsIncludedDisneyCruise/family-enjoying-ocean-views-from-disney-cruise-ship-deck-at-sunset.jpg";
import DisneyIncludedExp11 from "../../assets/WhatIsIncludedDisneyCruise/disney-wish-pool-deck-and-aquamouse-attraction.jpg";
import DisneyIncludedExp12 from "../../assets/WhatIsIncludedDisneyCruise/kids-splash-zone-water-play-disney-cruise-ship-family-vacation.jpg";
import DisneyIncludedExp13 from "../../assets/WhatIsIncludedDisneyCruise/luxury-cruise-stateroom-balcony-verandah-sunset-couple-travel.jpg";
import DisneyIncludedcta from "../../assets/WhatIsIncludedDisneyCruise/disney-castaway-cay-private-island-family-beach-day.jpg";

// ─── WHAT'S INCLUDED — INTERACTIVE PANEL DATA ────────────────────────────────
const disneyIncludedHighlights = [
  {
    id: "entertainment",
    title: "Broadway-Style Entertainment",
    badge: "Entertainment",
    icon: Sparkles,
    desc: "Disney's live productions feature professional performers, advanced stage technology, and original shows that cruise experts consistently rank among the best at sea — all included in your fare.",
    columns: [
      {
        label: "Includes:",
        items: [
          "Professional Performers",
          "Original Productions",
          "Advanced Stage Technology",
          "High Production Values",
          "Seasonal Themed Events",
        ],
      },
    ],
    themeLabel: "Included Value Highlight",
    themeText:
      "Tickets to comparable Broadway-quality shows on land would cost hundreds of dollars. On a Disney cruise, they're included in your fare at no additional charge.",
  },
  {
    id: "private-islands",
    title: "Private Island Destinations",
    badge: "Private Islands",
    icon: Palmtree,
    desc: "If your itinerary includes Castaway Cay or Lookout Cay at Lighthouse Point, access is included in your cruise fare. Both are exclusive Disney Cruise Line destinations unavailable to any other cruise line.",
    columns: [
      {
        label: "Included Access:",
        items: [
          "Castaway Cay Beach Access",
          "Lookout Cay at Lighthouse Point",
          "Family Recreation Areas",
          "Island Character Encounters",
          "Beach & Family Activities",
        ],
      },
    ],
    themeLabel: "Included Value Highlight",
    themeText:
      "Private island access is a rare premium in cruising — and for Disney guests it is simply part of the fare. Consistently rated among the world's best private cruise destinations.",
  },
  {
    id: "character-experiences",
    title: "Character Meet-and-Greets",
    badge: "Characters",
    icon: Users,
    desc: "Unlike many vacation experiences where character interactions cost extra, Disney character meet-and-greets are included in your cruise fare. Guests can meet Mickey, Minnie, Disney Princesses, Pixar characters, and more.",
    columns: [
      {
        label: "Characters You May Meet:",
        items: [
          "Mickey & Minnie Mouse",
          "Donald Duck & Goofy",
          "Disney Princesses",
          "Pixar Characters",
          "Marvel Characters (Select Ships)",
        ],
      },
    ],
    themeLabel: "Included Value Highlight",
    themeText:
      "Character encounters are among the most popular Disney Cruise experiences — and they are fully included in the cruise fare without any additional admission or reservation fee.",
  },
  {
    id: "youth-clubs",
    title: "Youth Clubs & Kids Programs",
    badge: "Youth Programs",
    icon: Sparkles,
    desc: "Disney is known for offering some of the best youth programs in the cruise industry. Most programs are included in the fare and provide tremendous value for families with children of all ages.",
    columns: [
      {
        label: "Included Programs:",
        items: [
          "Disney's Oceaneer Club",
          "Disney's Oceaneer Lab",
          "Edge (Tween Programs)",
          "Vibe (Teen Spaces)",
          "Family Recreation Programs",
        ],
      },
    ],
    themeLabel: "Included Value Highlight",
    themeText:
      "Parents appreciate the quality, variety, and safety of Disney's youth programming — all included without additional charges for the Oceaneer Club, Lab, Edge, and Vibe.",
  },
];

// ─── SCHEMA DATA ─────────────────────────────────────────────────────────────
const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.tripsandships.com/#organization",
      name: "Trips & Ships Luxury Travel",
      url: "https://www.tripsandships.com",
      logo: "https://www.tripsandships.com/logo.png",
      description:
        "Luxury travel agency specializing in luxury cruises, family travel, river cruises, expedition cruises, and custom travel planning.",
    },
    {
      "@type": "TravelAgency",
      "@id": "https://www.tripsandships.com/#travelagency",
      name: "Trips & Ships Luxury Travel",
      url: "https://www.tripsandships.com",
      description:
        "Luxury travel experts helping travelers choose the right cruise experiences through expert comparisons, planning, and personalized travel services.",
    },
    {
      "@type": "WebPage",
      "@id":
        "https://www.tripsandships.com/what-is-included-on-a-disney-cruise",
      url: "https://www.tripsandships.com/what-is-included-on-a-disney-cruise",
      name: "What Is Included on a Disney Cruise?",
      description:
        "Wondering what's included on a Disney Cruise? Discover what's covered in your cruise fare, from accommodations and dining to entertainment, kids clubs, character experiences, and Disney's private island destinations.",
      isPartOf: {
        "@id": "https://www.tripsandships.com/#website",
      },
      about: [
        {
          "@type": "Organization",
          name: "Disney Cruise Line",
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.tripsandships.com/what-is-included-on-a-disney-cruise#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.tripsandships.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Cruise Guide",
          item: "https://www.tripsandships.com/cruise-comparisons",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "What Is Included on a Disney Cruise?",
          item: "https://www.tripsandships.com/what-is-included-on-a-disney-cruise",
        },
      ],
    },
    {
      "@type": "HowTo",
      "@id":
        "https://www.tripsandships.com/what-is-included-on-a-disney-cruise#howto",
      name: "What Is Included on a Disney Cruise Fare",
      description:
        "A guide to what is included in a Disney Cruise Line fare, including accommodations, dining, entertainment, youth programs, character experiences, and private island access.",
      step: [
        {
          "@type": "HowToStep",
          name: "Accommodations",
          text: "Your stateroom is included in the cruise fare, from inside cabins to concierge-level suites.",
        },
        {
          "@type": "HowToStep",
          name: "Rotational Dining",
          text: "Meals in Disney's main dining restaurants are included, including breakfast, lunch, dinner, snacks, and non-alcoholic beverages.",
        },
        {
          "@type": "HowToStep",
          name: "Broadway-Style Entertainment",
          text: "Disney's live stage productions, deck parties, musical performances, and seasonal events are included.",
        },
        {
          "@type": "HowToStep",
          name: "Character Meet-and-Greets",
          text: "Character experiences with Mickey, Minnie, Disney Princesses, Pixar, and Marvel characters are included.",
        },
        {
          "@type": "HowToStep",
          name: "Youth Clubs & Programs",
          text: "Most youth clubs including Oceaneer Club, Oceaneer Lab, Edge, and Vibe are included.",
        },
        {
          "@type": "HowToStep",
          name: "Private Island Access",
          text: "Access to Castaway Cay and Lookout Cay at Lighthouse Point is included when your itinerary visits these destinations.",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id":
        "https://www.tripsandships.com/what-is-included-on-a-disney-cruise#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Are meals included on a Disney Cruise?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Most dining venues, including rotational dining restaurants, are included in your cruise fare.",
          },
        },
        {
          "@type": "Question",
          name: "Are Disney character meet-and-greets included?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Character experiences are included and do not require additional payment.",
          },
        },
        {
          "@type": "Question",
          name: "Are Broadway-style shows included?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Disney's live entertainment is included in the cruise fare.",
          },
        },
        {
          "@type": "Question",
          name: "Is Castaway Cay included?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Access to Castaway Cay is included if your itinerary visits the island.",
          },
        },
        {
          "@type": "Question",
          name: "Are kids clubs included?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most youth clubs and children's programming are included, including Oceaneer Club, Oceaneer Lab, Edge, and Vibe.",
          },
        },
        {
          "@type": "Question",
          name: "Are soft drinks included?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Soft drinks are available at self-service beverage stations onboard at no additional charge.",
          },
        },
        {
          "@type": "Question",
          name: "Is Wi-Fi included?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Internet packages generally require an additional fee.",
          },
        },
        {
          "@type": "Question",
          name: "Are shore excursions included?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most excursions are purchased separately and are not included in the cruise fare.",
          },
        },
        {
          "@type": "Question",
          name: "Is specialty dining included?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Adult-exclusive specialty restaurants like Palo and Enchanté usually require an additional charge.",
          },
        },
        {
          "@type": "Question",
          name: "Is a Disney Cruise all-inclusive?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Not completely. While many major vacation components are included, items such as alcohol, spa services, excursions, Wi-Fi, specialty dining, and gratuities cost extra.",
          },
        },
        {
          "@type": "Question",
          name: "Are pools and recreation included?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Family pools, water play areas, sports courts, and most deck recreation are included.",
          },
        },
        {
          "@type": "Question",
          name: "Are first-run Disney movies included?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Disney's onboard movie theaters show Disney, Pixar, Marvel, and Star Wars films, often including first-run screenings, at no additional charge.",
          },
        },
        {
          "@type": "Question",
          name: "Are gratuities included on Disney Cruises?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Gratuities are generally added separately unless prepaid as part of a package.",
          },
        },
        {
          "@type": "Question",
          name: "Is the fitness center included?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Basic fitness center access is generally included. Some exercise classes may carry additional fees.",
          },
        },
        {
          "@type": "Question",
          name: "Is alcohol included on a Disney Cruise?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Alcoholic beverages are not included and are purchased separately.",
          },
        },
      ],
    },
    {
      "@type": "Review",
      "@id":
        "https://www.tripsandships.com/what-is-included-on-a-disney-cruise#review",
      itemReviewed: {
        "@type": "TravelAction",
        name: "Disney Cruise Line Inclusions",
      },
      reviewBody:
        "A Disney Cruise fare includes significantly more than transportation and a cabin — accommodations, rotational dining, Broadway-style entertainment, character experiences, youth programs, pools, movies, and private island access are all bundled into the experience.",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      author: {
        "@type": "Organization",
        name: "Trips & Ships Luxury Travel",
      },
    },
  ],
};

// ─── FAQ COMPONENT ───────────────────────────────────────────────────────────
function FAQ() {
  const [open, setOpen] = useState(null);

  const faqData = [
    {
      q: "Are meals included on a Disney Cruise?",
      a: "Yes. Most dining venues, including rotational dining restaurants, are included in your cruise fare.",
    },
    {
      q: "Are Disney character meet-and-greets included?",
      a: "Yes. Character experiences are included and do not require additional payment.",
    },
    {
      q: "Are Broadway-style shows included?",
      a: "Yes. Disney's live entertainment is included in the cruise fare.",
    },
    {
      q: "Is Castaway Cay included?",
      a: "Yes. Access to Castaway Cay is included if your itinerary visits the island.",
    },
    {
      q: "Are kids clubs included?",
      a: "Most youth clubs and children's programming are included, including Oceaneer Club, Oceaneer Lab, Edge, and Vibe.",
    },
    {
      q: "Are soft drinks included?",
      a: "Yes. Soft drinks are available at self-service beverage stations onboard at no additional charge.",
    },
    {
      q: "Is Wi-Fi included?",
      a: "No. Internet packages generally require an additional fee.",
    },
    {
      q: "Are shore excursions included?",
      a: "Most excursions are purchased separately and are not included in the cruise fare.",
    },
    {
      q: "Is specialty dining included?",
      a: "No. Adult-exclusive specialty restaurants like Palo and Enchanté usually require an additional charge.",
    },
    {
      q: "Is a Disney Cruise all-inclusive?",
      a: "Not completely. While many major vacation components are included, items such as alcohol, spa services, excursions, Wi-Fi, specialty dining, and gratuities cost extra.",
    },
    {
      q: "Are pools and recreation included?",
      a: "Yes. Family pools, water play areas, sports courts, and most deck recreation are included.",
    },
    {
      q: "Are first-run Disney movies included?",
      a: "Yes. Disney's onboard movie theaters show Disney, Pixar, Marvel, and Star Wars films, often including first-run screenings, at no additional charge.",
    },
    {
      q: "Are gratuities included on Disney Cruises?",
      a: "Gratuities are generally added separately unless prepaid as part of a package.",
    },
    {
      q: "Is the fitness center included?",
      a: "Basic fitness center access is generally included. Some exercise classes may carry additional fees.",
    },
    {
      q: "Is alcohol included on a Disney Cruise?",
      a: "No. Alcoholic beverages are not included and are purchased separately.",
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

// ─── MAIN COMPONENT ──────────────────────────────────────────────────────────
const WhatIsIncludedOnADisneyCruise = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [readMore, setReadMore] = useState(false);
  const images = [HeroImage1, HeroImage2, HeroImage3];
  const [activeDest, setActiveDest] = useState("entertainment");
  const currentDest =
    disneyIncludedHighlights.find((d) => d.id === activeDest) ||
    disneyIncludedHighlights[0];

  const ActiveIcon = currentDest.icon;

  const [currentLuxurySlide, setCurrentLuxurySlide] = useState(0);
  const [activeReasonTab, setActiveReasonTab] = useState(5);

  const includedCategories = [
    {
      title: "Accommodations",
      description:
        "Your stateroom is included in the cruise fare. Disney offers inside cabins to concierge suites, all with daily housekeeping and thoughtful family-focused design including split bathrooms in many categories.",
      number: "01",
    },
    {
      title: "Rotational Dining",
      description:
        "Breakfast, lunch, and dinner in Disney's main dining restaurants are included. Guests rotate through themed restaurants each evening with the same serving team — a Disney signature experience.",
      number: "02",
    },
    {
      title: "Broadway-Style Shows",
      description:
        "Disney's live stage productions, deck parties, musical performances, and seasonal entertainment events are all included in the cruise fare.",
      number: "03",
    },
    {
      title: "Character Experiences",
      description:
        "Meet beloved Disney characters throughout the voyage — onboard and at private island destinations — with no additional admission or reservation fee required.",
      number: "04",
    },
    {
      title: "Youth Clubs & Programs",
      description:
        "Most youth programs including Oceaneer Club, Oceaneer Lab, Edge, and Vibe are included. Disney's children's programming is consistently rated among the best in the cruise industry.",
      number: "05",
    },
    {
      title: "Private Island Access",
      description:
        "Access to Castaway Cay and Lookout Cay at Lighthouse Point is included when your itinerary visits these destinations — exclusively available to Disney Cruise Line guests.",
      number: "06",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % (images.length || 1));
    }, 6000);
    return () => clearInterval(timer);
  }, [images.length]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentLuxurySlide((prev) => (prev + 1) % includedCategories.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [includedCategories.length]);

  return (
    <div className="Asc-page-wrapper">
      <Helmet>
        <title>
          What Is Included on a Disney Cruise? | Disney Cruise Line Guide
        </title>
        <meta name="title" content="What Is Included on a Disney Cruise?" />
        <meta
          name="description"
          content="Wondering what's included on a Disney Cruise? Discover what's covered in your cruise fare, from accommodations and dining to entertainment, kids clubs, character experiences, and Disney's private island destinations."
        />
        <meta
          property="og:title"
          content="What Is Included on a Disney Cruise? | Disney Cruise Line Guide"
        />
        <meta
          property="og:description"
          content="Discover what's included in your Disney Cruise fare — from dining and entertainment to character experiences, youth clubs, and private island access."
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content="https://www.tripsandships.com/what-is-included-on-a-disney-cruise"
        />
        <link
          rel="canonical"
          href="https://www.tripsandships.com/what-is-included-on-a-disney-cruise"
        />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>
      <Nav />
      {/* ══ HERO ══════════════════════════════════════════════════════════════ */}
      <section
        className="Scenic_hero_section"
        style={{ backgroundColor: "var(--bg-dark)" }}
      >
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
          <h1>What Is Included on a Disney Cruise?</h1>

          <p>
            One of the most common questions first-time cruisers ask is: what
            does a Disney Cruise actually include?
          </p>

          <p>
            With Disney Cruise Line often carrying a higher price tag than many
            other cruise lines, it's important to understand exactly what you're
            getting for your money.
          </p>

          {readMore && (
            <>
              <p>
                The good news is that a Disney cruise includes far more than
                simply transportation and a cabin. From Broadway-style
                entertainment and character experiences to dining, youth clubs,
                and private island access, Disney bundles significant value into
                the cruise fare.
              </p>

              <p>
                Understanding what is included — and what costs extra — can help
                families determine whether a Disney cruise is the right fit for
                their vacation plans.
              </p>

              <p>
                At Trips &amp; Ships Luxury Travel, we help families evaluate
                what's included and how to get the best possible value from the
                Disney Cruise experience.
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
      {/* ══ WHAT'S INCLUDED OVERVIEW ══════════════════════════════════════════ */}
      <section
        className="ugt-components-section"
        id="ugt-components"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="Asc-container">
          <div className="ugt-components-header">
            <h2 className="adg-c-h2">
              What's Included in a Disney Cruise Fare?
            </h2>
            <div className="adg-c-accent-line"></div>
          </div>

          <div className="ugt-components-list">
            <div className="ugt-component-row">
              {/* LEFT IMAGE */}
              <div className="ugt-component-image-wrapper">
                <div className="ugt-component-image-container">
                  <img
                    src={DisneyIncludedExp1}
                    alt="Disney Cruise Line included experiences overview"
                    className="ugt-component-image"
                  />
                </div>
              </div>

              {/* RIGHT CONTENT */}
              <div className="ugt-component-content">
                <p className="ugt-component-text">
                  One of the most important things to understand is that a
                  Disney cruise fare covers a great deal more than a standard
                  cruise fare from many other lines.
                </p>

                <p className="ugt-component-text">
                  Rather than competing on a minimal base fare, Disney bundles
                  premium family experiences directly into the cost — making the
                  real value clearer when comparing total vacation experiences.
                </p>

                <div className="ugt-questions-box">
                  <span className="ugt-questions-title">
                    Your Fare Includes:
                  </span>

                  <ul className="ugt-questions-list">
                    {[
                      "Accommodations",
                      "Main Dining Venues",
                      "Broadway-Style Entertainment",
                      "Character Meet-and-Greets",
                      "Youth Clubs & Kids Programs",
                      "Pools & Recreation",
                      "Movies & Theaters",
                      "Fitness Center Access",
                      "Most Onboard Activities",
                      "Private Island Access",
                    ].map((item, idx) => (
                      <li key={idx} className="ugt-question-item">
                        <Check size={16} className="ugt-question-icon" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ══ VIDEO SECTION ════════════════════════════════════════════════════ */}
      <section
        className="azs-video-section"
        id="azs-video"
        style={{ backgroundColor: "var(--bg-white)" }}
      >
        <div className="azs-container">
          <div className="azs-section-header">
            <h2 className="azs-h2">
              Meet Your Favorite Disney Characters at Sea
            </h2>

            <div className="azs-accent-line"></div>

            <p className="azs-video-intro">
              One of the most popular Disney Cruise Line experiences is the
              opportunity to meet beloved Disney characters throughout your
              vacation.
            </p>
          </div>

          <div className="azs-video-wrapper">
            <div className="azs-video-frame">
              <iframe
                src="https://www.youtube.com/embed/yw922nyPxZs"
                title="Disney Cruise Character Meet and Greet Experience"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      {/* ══ ACCOMMODATIONS ═══════════════════════════════════════════════════ */}
      <section
        className="dmg-info-section dmg-bg-soft"
        id="dmg-accommodations-port-canaveral"
      >
        <div className="dmg-info-container">
          <div className="dmg-info-grid">
            <div className="dmg-info-content">
              <h2 className="dmg-info-title">Accommodations</h2>

              <div className="dmg-info-accent"></div>

              <p className="dmg-info-lead">
                Your stateroom is included in the cruise fare. Disney offers a
                variety of accommodations ranging from inside cabins to
                concierge-level suites.
              </p>

              <div className="dmg-info-features">
                {[
                  {
                    title: "Comfortable Sleeping Areas",
                    desc: "Designed for families and multigenerational travelers, providing a relaxing space to recharge after a day of adventure.",
                  },
                  {
                    title: "Private Bathroom Facilities",
                    desc: "Including Disney's popular split-bathroom design in many stateroom categories for added convenience.",
                  },
                  {
                    title: "Daily Housekeeping",
                    desc: "Cabins are cleaned and refreshed throughout the voyage to ensure a comfortable and enjoyable stay.",
                  },
                  {
                    title: "Family-Friendly Design",
                    desc: "Disney cabins are among the most thoughtfully designed in the cruise industry, maximizing space and comfort for guests of all ages.",
                  },
                ].map((feat, i) => (
                  <div key={i} className="dmg-info-feature-item">
                    <div className="dmg-info-icon-box">
                      <Check size={16} />
                    </div>

                    <div className="dmg-info-feature-texts">
                      <h3 className="dmg-info-feature-title">{feat.title}</h3>
                      <p className="dmg-info-feature-desc">{feat.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <p className="dmg-info-lead" style={{ marginTop: "24px" }}>
                For many families, cabin comfort is one of Disney's biggest
                advantages, helping make every voyage more relaxing and
                enjoyable.
              </p>
            </div>

            <div className="dmg-info-media">
              <div className="dmg-media-wrapper">
                <img
                  src={DisneyIncludedSuite}
                  alt="Disney Cruise from Port Canaveral family stateroom accommodations"
                  className="dmg-media-img"
                />

                <div className="dmg-media-overlay"></div>

                <div className="dmg-media-badge">
                  <span>Included Stateroom Accommodations</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ══ DINING ═══════════════════════════════════════════════════════════ */}
      <section className="dmg-info-section dmg-bg-white dmg-info-reverse">
        <div className="dmg-info-container">
          <div className="dmg-info-grid">
            <div className="dmg-info-content">
              <div className="dmg-info-header">
                <h2 className="dmg-info-title">Rotational Dining</h2>

                <div className="dmg-info-accent"></div>

                <p className="dmg-info-lead">
                  One of Disney Cruise Line's signature experiences is
                  rotational dining. Included in your fare are meals in Disney's
                  main dining restaurants.
                </p>
              </div>

              <div className="dmg-info-features">
                {[
                  {
                    title: "Breakfast",
                    desc: "Available in designated restaurants and buffet venues throughout the ship.",
                  },
                  {
                    title: "Lunch",
                    desc: "Included in various onboard dining locations, offering a variety of options for every taste.",
                  },
                  {
                    title: "Dinner",
                    desc: "Guests rotate among themed restaurants during the cruise, enjoying unique atmospheres and menus.",
                  },
                  {
                    title: "Snacks",
                    desc: "Available at select quick-service locations for convenient bites between activities.",
                  },
                  {
                    title: "Non-Alcoholic Beverages",
                    desc: "Includes soft drinks at beverage stations, coffee, tea, water, and juice at select venues.",
                  },
                ].map((feat, i) => (
                  <div key={i} className="dmg-info-feature-item">
                    <div className="dmg-info-icon-box">
                      <Check size={16} />
                    </div>

                    <div className="dmg-info-feature-texts">
                      <h3 className="dmg-info-feature-title">{feat.title}</h3>
                      <p className="dmg-info-feature-desc">{feat.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <p className="dmg-info-lead" style={{ marginTop: "24px" }}>
                Rotational dining allows families to experience multiple
                restaurants while keeping the same serving team throughout the
                voyage, creating a personalized and memorable dining experience.
              </p>
            </div>

            <div className="dmg-info-media">
              <div className="dmg-media-wrapper">
                <img
                  src={DisneyIncludedDining}
                  alt="Disney Cruise rotational dining experience"
                  className="dmg-media-img"
                />

                <div className="dmg-media-overlay"></div>

                <div className="dmg-media-badge">
                  <span>Rotational Dining Experience</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ════════════════════════════════════════
   CHARACTER MEET-AND-GREETS
═════════════════════════════════════════ */}
      <section className="adg-c-section adg-c-bg-soft">
        <div className="adg-c-container">
          <div className="adg-c-section-header">
            <h2 className="adg-c-section-title">Character Meet-and-Greets</h2>
            <div className="adg-c-accent-line"></div>
          </div>

          <div className="adg-c-overview-layout">
            {/* LEFT — list */}
            <div className="adg-c-overview-icons">
              {[
                {
                  icon: <Check size={18} />,
                  label: "Mickey Mouse",
                },
                {
                  icon: <Check size={18} />,
                  label: "Minnie Mouse",
                },
                {
                  icon: <Check size={18} />,
                  label: "Donald Duck",
                },
                {
                  icon: <Check size={18} />,
                  label: "Goofy",
                },
                {
                  icon: <Check size={18} />,
                  label: "Disney Princesses",
                },
                {
                  icon: <Check size={18} />,
                  label: "Pixar Characters",
                },
                {
                  icon: <Check size={18} />,
                  label: "Marvel Characters (on select ships)",
                },
              ].map((item, i) => (
                <div key={i} className="adg-c-overview-item">
                  <span className="adg-c-overview-icon">{item.icon}</span>
                  <span className="adg-c-overview-label">{item.label}</span>
                </div>
              ))}
            </div>

            {/* RIGHT — callout card + image */}
            <div className="adg-c-overview-right">
              <div className="adg-c-overview-callout">
                <div className="adg-c-overview-callout-inner">
                  <Star size={28} className="adg-c-callout-star" />
                  <p className="adg-c-callout-text">
                    Unlike many vacation experiences where character
                    interactions cost extra, Disney character experiences are
                    included with your cruise fare, creating memorable moments
                    for guests of all ages.
                  </p>
                </div>
              </div>

              <div className="adg-c-overview-image-wrap">
                <img
                  src={DisneyIncludedCharacter}
                  alt="Disney Cruise character meet and greet experience"
                  className="adg-c-overview-img"
                />
                <div className="adg-c-overview-img-overlay">
                  <span className="adg-c-overview-img-label">
                    Included Character Experiences
                  </span>
                </div>
              </div>
            </div>
          </div>

          <p
            style={{
              textAlign: "center",
              marginTop: "32px",
              maxWidth: "900px",
              marginInline: "auto",
              color: "var(--navy)",
            }}
          >
            Character encounters are among the most popular Disney Cruise
            experiences and are included in the cruise fare.
          </p>
        </div>
      </section>
      {/* ══ KIDS CLUBS & YOUTH PROGRAMS ═══════════════════════════════════════ */}
      <section
        className="dac-ent-section"
        style={{ backgroundColor: "var(--bg-white)" }}
      >
        <div className="dac-ent-container">
          <div className="dac-ent-grid">
            <div className="dac-ent-left">
              <h2 className="dac-ent-title">Kids Clubs & Youth Programs</h2>

              <div className="dac-ent-accent"></div>

              <p className="dac-ent-desc">
                Disney is known for offering some of the best youth programs in
                the cruise industry.
              </p>

              <div className="dac-ent-badge">
                Fun for Kids, Value for Families
              </div>
            </div>

            <div className="dac-ent-right">
              {[
                {
                  title: "Disney's Oceaneer Club",
                  desc: "Interactive experiences and immersive adventures designed for younger children in Disney-themed environments.",
                },
                {
                  title: "Disney's Oceaneer Lab",
                  desc: "Creative activities, hands-on learning experiences, and themed adventures that encourage exploration and imagination.",
                },
                {
                  title: "Edge",
                  desc: "Dedicated programs, activities, and social spaces created specifically for tweens.",
                },
                {
                  title: "Vibe",
                  desc: "Teen-focused spaces, events, and activities designed to give older kids their own place to relax and connect.",
                },
                {
                  title: "It's a Small World Nursery",
                  desc: "Nursery services for infants and toddlers are available on many sailings and may require an additional fee.",
                },
              ].map((item, idx) => (
                <div key={idx} className="dac-ent-card">
                  <div className="dac-ent-card-header">
                    <div className="dac-ent-card-num">0{idx + 1}</div>

                    <h3 className="dac-ent-card-title">{item.title}</h3>
                  </div>

                  <p className="dac-ent-card-desc">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              marginTop: "32px",
              textAlign: "center",
              maxWidth: "900px",
              marginInline: "auto",
            }}
          >
            <p>
              Most youth programming is included and provides tremendous value
              for families, giving children engaging experiences while parents
              enjoy time to relax and explore the ship.
            </p>
          </div>
        </div>
      </section>
      {/* ══ PRIVATE ISLANDS & MORE — TABBED SECTION ══════════════════════════ */}
      <section className="dac-reasons-section">
        <div className="dac-reasons-container">
          <div className="dac-reasons-header">
            <span className="dac-reasons-eyebrow">
              More Included Highlights
            </span>
            <h2 className="dac-reasons-title">
              Four More Things Included in Your Disney Cruise Fare
            </h2>
            <div className="dac-reasons-accent"></div>
            <p className="dac-reasons-lead">
              From exclusive private island access and first-run Disney movies
              to fitness facilities and family activities — here is more of what
              your Disney Cruise fare covers.
            </p>
          </div>

          <div className="dac-reasons-tabs-nav">
            <button
              className={`dac-reasons-tab-btn ${activeReasonTab === 5 ? "active" : ""}`}
              onClick={() => setActiveReasonTab(5)}
            >
              <span className="dac-reasons-tab-icon-wrap">
                <Palmtree size={18} />
              </span>
              <div className="dac-reasons-tab-text-wrap">
                <span className="dac-reasons-tab-num">01</span>
                <span className="dac-reasons-tab-title">
                  Castaway Cay — Disney's Private Island
                </span>
              </div>
            </button>

            <button
              className={`dac-reasons-tab-btn ${activeReasonTab === 6 ? "active" : ""}`}
              onClick={() => setActiveReasonTab(6)}
            >
              <span className="dac-reasons-tab-icon-wrap">
                <Palmtree size={18} />
              </span>
              <div className="dac-reasons-tab-text-wrap">
                <span className="dac-reasons-tab-num">02</span>
                <span className="dac-reasons-tab-title">
                  Lookout Cay at Lighthouse Point
                </span>
              </div>
            </button>

            <button
              className={`dac-reasons-tab-btn ${activeReasonTab === 7 ? "active" : ""}`}
              onClick={() => setActiveReasonTab(7)}
            >
              <span className="dac-reasons-tab-icon-wrap">
                <Sparkles size={18} />
              </span>
              <div className="dac-reasons-tab-text-wrap">
                <span className="dac-reasons-tab-num">03</span>
                <span className="dac-reasons-tab-title">
                  First-Run Disney Movies & Theaters
                </span>
              </div>
            </button>

            <button
              className={`dac-reasons-tab-btn ${activeReasonTab === 8 ? "active" : ""}`}
              onClick={() => setActiveReasonTab(8)}
            >
              <span className="dac-reasons-tab-icon-wrap">
                <TrendingUp size={18} />
              </span>
              <div className="dac-reasons-tab-text-wrap">
                <span className="dac-reasons-tab-num">04</span>
                <span className="dac-reasons-tab-title">
                  Family Activities & Fitness
                </span>
              </div>
            </button>
          </div>

          <div className="dac-reasons-tabs-content">
            {/* Tab 5 — Castaway Cay */}
            {activeReasonTab === 5 && (
              <div className="dac-reasons-tab-panel fade-in">
                <div className="dac-reasons-row dac-reasons-row--left-content">
                  <div className="dac-reasons-content">
                    <span className="dac-reasons-row-number">01</span>
                    <h3 className="dac-reasons-row-title">
                      Access to Castaway Cay Is Included
                    </h3>
                    <p className="dac-reasons-row-desc">
                      If your itinerary includes Castaway Cay, access to
                      Disney's private Bahamian island is included in your
                      cruise fare. Guests enjoy beautiful family beaches,
                      character encounters in a tropical setting, water
                      activities, an adult-only beach retreat, and island
                      transportation — all exclusively for Disney Cruise Line
                      guests.
                    </p>
                    <div className="dac-reasons-pills">
                      {[
                        "Family Beaches",
                        "Adult-Only Beach",
                        "Character Encounters",
                        "Water Activities",
                        "Island Transportation",
                      ].map((pill, idx) => (
                        <span key={idx} className="dac-reasons-pill">
                          <Palmtree size={12} style={{ marginRight: "6px" }} />
                          {pill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="dac-reasons-media">
                    <div className="dac-reasons-img-container">
                      <img
                        src={DisneyIncludedExp6}
                        alt="Castaway Cay Disney private island included in cruise fare"
                        className="dac-reasons-img"
                      />
                      <div className="dac-reasons-img-overlay"></div>
                      <div className="dac-reasons-img-badge">
                        <Palmtree size={20} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 6 — Lookout Cay */}
            {activeReasonTab === 6 && (
              <div className="dac-reasons-tab-panel fade-in">
                <div className="dac-reasons-row dac-reasons-row--right-content">
                  <div className="dac-reasons-media">
                    <div className="dac-reasons-img-container">
                      <img
                        src={DisneyIncludedExp7}
                        alt="Lookout Cay at Lighthouse Point Disney Bahamas destination"
                        className="dac-reasons-img"
                      />
                      <div className="dac-reasons-img-overlay"></div>
                      <div className="dac-reasons-img-badge">
                        <Palmtree size={20} />
                      </div>
                    </div>
                  </div>
                  <div className="dac-reasons-content">
                    <span className="dac-reasons-row-number">02</span>
                    <h3 className="dac-reasons-row-title">
                      Lookout Cay at Lighthouse Point Is Included
                    </h3>
                    <p className="dac-reasons-row-desc">
                      Disney's newest Bahamian destination is included for
                      guests whose itinerary visits{" "}
                      <strong>Lookout Cay at Lighthouse Point</strong>. Guests
                      enjoy beach access, Bahamian-inspired cultural
                      experiences, family activities, water recreation, and
                      local entertainment — all part of the fare. Some optional
                      excursions may carry additional charges.
                    </p>
                    <div className="dac-reasons-bullets">
                      {[
                        "Beach Access — Included",
                        "Cultural Experiences — Included",
                        "Family Activities — Included",
                        "Water Recreation — Included",
                      ].map((bullet, idx) => (
                        <div key={idx} className="dac-reasons-bullet-item">
                          <Palmtree
                            size={16}
                            className="dac-reasons-bullet-icon"
                          />
                          <span>{bullet}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 7 — Movies */}
            {activeReasonTab === 7 && (
              <div className="dac-reasons-tab-panel fade-in">
                <div className="dac-reasons-row dac-reasons-row--left-content">
                  <div className="dac-reasons-content">
                    <span className="dac-reasons-row-number">03</span>
                    <h3 className="dac-reasons-row-title">
                      First-Run Disney Movies Are Included
                    </h3>
                    <p className="dac-reasons-row-desc">
                      One unique benefit of Disney Cruise Line is access to
                      Disney's onboard movie theaters at no additional cost.
                      Guests may enjoy Disney films, Pixar movies, Marvel
                      releases, and Star Wars content — often including
                      first-run screenings shortly after theatrical release.
                      Screenings are included and available throughout the
                      voyage.
                    </p>
                    <div className="dac-reasons-callout">
                      <Sparkles
                        size={18}
                        className="dac-reasons-callout-icon"
                      />
                      <p>
                        Disney's onboard theaters offer first-run screenings
                        included in your fare — a benefit unavailable on most
                        other cruise lines.
                      </p>
                    </div>
                  </div>
                  <div className="dac-reasons-media">
                    <div className="dac-reasons-img-container">
                      <img
                        src={DisneyIncludedExp8}
                        alt="Disney Cruise Line first-run movies included in fare"
                        className="dac-reasons-img"
                      />
                      <div className="dac-reasons-img-overlay"></div>
                      <div className="dac-reasons-img-badge">
                        <Sparkles size={20} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 8 — Activities & Fitness */}
            {activeReasonTab === 8 && (
              <div className="dac-reasons-tab-panel fade-in">
                <div className="dac-reasons-row dac-reasons-row--right-content">
                  <div className="dac-reasons-media">
                    <div className="dac-reasons-img-container">
                      <img
                        src={DisneyIncludedExp9}
                        alt="Family activities and fitness included on Disney Cruise"
                        className="dac-reasons-img"
                      />
                      <div className="dac-reasons-img-overlay"></div>
                      <div className="dac-reasons-img-badge">
                        <TrendingUp size={20} />
                      </div>
                    </div>
                  </div>
                  <div className="dac-reasons-content">
                    <span className="dac-reasons-row-number">04</span>
                    <h3 className="dac-reasons-row-title">
                      Family Activities & Fitness Center Are Included
                    </h3>
                    <p className="dac-reasons-row-desc">
                      Disney offers a wide range of activities included in the
                      fare — from trivia competitions and animation activities
                      to dance parties, educational programs, and themed
                      experiences. Basic fitness center access is also generally
                      included. Families can stay entertained throughout the
                      voyage without additional expenses.
                    </p>
                    <div className="dac-reasons-includes-grid">
                      {[
                        "Trivia Competitions",
                        "Animation Activities",
                        "Dance Parties",
                        "Family Games",
                        "Themed Experiences",
                        "Educational Programs",
                        "Cardio Equipment",
                        "Strength Training",
                        "Deck Activities",
                      ].map((item, idx) => (
                        <div key={idx} className="dac-reasons-include-tag">
                          <Check size={12} className="dac-reasons-check-icon" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      {/* ══ BROADWAY-STYLE DISNEY ENTERTAINMENT ═══════════════════════════════ */}
      <section className="luc-why-section" id="luc-disney-entertainment">
        <div className="luc-why-container">
          {/* LEFT — stacked images */}
          <div className="luc-why-images">
            <div className="luc-why-img-main-wrap" style={{ color: "#fff" }}>
              <img
                src={DisneyIncludedExp10}
                alt="Broadway-style Disney entertainment onboard Disney Cruise Line"
                className="luc-why-img-main"
              />
              <div className="luc-why-img-overlay"></div>
            </div>

            <div className="luc-why-img-accent-wrap" style={{ color: "#fff" }}>
              <img
                src={DisneyIncludedExp11}
                alt="Disney Cruise live shows and themed entertainment"
                className="luc-why-img-accent"
              />

              <div className="luc-why-img-badge">
                <span className="luc-why-badge-num">5</span>
                <span className="luc-why-badge-text">
                  Entertainment Highlights
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT — content */}
          <div className="luc-why-content">
            <h2 className="luc-why-title">
              Broadway-Style Disney Entertainment
            </h2>

            <div className="aac-accent-line aac-accent-white"></div>

            <p className="luc-why-intro">
              Many travelers consider Disney's entertainment among the best at
              sea. Included in your fare:
            </p>

            <div className="luc-why-features">
              <div className="luc-why-feature">
                <div className="luc-why-feature-num">01</div>
                <div className="luc-why-feature-body">
                  <h3 className="luc-why-feature-title">
                    Live Stage Productions
                  </h3>
                  <p className="luc-why-feature-desc">
                    Disney-exclusive Broadway-style shows featuring world-class
                    performances, music, and storytelling.
                  </p>
                </div>
              </div>

              <div className="luc-why-feature">
                <div className="luc-why-feature-num">02</div>
                <div className="luc-why-feature-body">
                  <h3 className="luc-why-feature-title">
                    Musical Performances
                  </h3>
                  <p className="luc-why-feature-desc">
                    Family-friendly entertainment and live music performances
                    presented throughout the ship.
                  </p>
                </div>
              </div>

              <div className="luc-why-feature">
                <div className="luc-why-feature-num">03</div>
                <div className="luc-why-feature-body">
                  <h3 className="luc-why-feature-title">Themed Deck Parties</h3>
                  <p className="luc-why-feature-desc">
                    Unique Disney celebrations, character appearances, and
                    special events held on deck throughout the voyage.
                  </p>
                </div>
              </div>

              <div className="luc-why-feature">
                <div className="luc-why-feature-num">04</div>
                <div className="luc-why-feature-body">
                  <h3 className="luc-why-feature-title">Seasonal Events</h3>
                  <p className="luc-why-feature-desc">
                    Special entertainment offerings available on select sailings
                    throughout the year.
                  </p>
                </div>
              </div>

              <div className="luc-why-feature">
                <div className="luc-why-feature-num">05</div>
                <div className="luc-why-feature-body">
                  <h3 className="luc-why-feature-title">
                    Halloween & Holiday Cruises
                  </h3>
                  <p className="luc-why-feature-desc">
                    Enjoy themed experiences such as Halloween on the High Seas
                    and Very Merrytime Cruises on eligible sailings.
                  </p>
                </div>
              </div>
            </div>

            <p className="luc-why-intro" style={{ marginTop: "24px" }}>
              Entertainment alone represents tremendous value for many families
              and is often one of the most memorable parts of a Disney cruise
              vacation.
            </p>
          </div>
        </div>
      </section>
      {/* ══ WHAT'S NOT INCLUDED ON A DISNEY CRUISE ═════════════════════════════ */}
      <section className="dac-special-section">
        <div className="dac-special-container">
          <div className="dac-special-header">
            <h2 className="dac-special-title">
              What's NOT Included on a Disney Cruise?
            </h2>

            <div className="dac-special-accent"></div>

            <p className="dac-special-lead">
              While Disney includes a great deal, some experiences require
              additional payment.
            </p>
          </div>

          <div className="dac-special-grid">
            {[
              {
                icon: Wine,
                title: "Alcoholic Beverages",
                desc: "Beer, wine, cocktails, and specialty alcoholic drinks are not included in the cruise fare.",
              },
              {
                icon: Utensils,
                title: "Specialty Dining",
                desc: "Adult-exclusive restaurants typically require an additional fee. Popular examples include Palo and Enchanté.",
              },
              {
                icon: Heart,
                title: "Spa Treatments",
                desc: "Massages, facials, and wellness treatments are available for an additional charge.",
              },
              {
                icon: Map,
                title: "Shore Excursions",
                desc: "Most port excursions and guided experiences require separate payment.",
              },
              {
                icon: Wifi,
                title: "Internet Packages",
                desc: "Wi-Fi services are typically purchased separately and are not included in the base fare.",
              },
              {
                icon: Baby,
                title: "Nursery Services",
                desc: "Certain childcare programs for infants and toddlers may have additional fees.",
              },
              {
                icon: ShoppingBag,
                title: "Souvenirs & Merchandise",
                desc: "Disney merchandise, gifts, and onboard shopping purchases are not included.",
              },
              {
                icon: Camera,
                title: "Photography Packages",
                desc: "Professional cruise photography and portrait packages are available for purchase.",
              },
              {
                icon: HandCoins,
                title: "Gratuities",
                desc: "Crew gratuities are generally added separately unless prepaid before sailing.",
              },
            ].map((item, idx) => {
              const Icon = item.icon;

              return (
                <div key={idx} className="dac-special-card">
                  <div className="dac-special-icon-wrap">
                    <Icon size={24} />
                  </div>

                  <h3 className="dac-special-card-title">{item.title}</h3>

                  <p className="dac-special-card-desc">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    
      {/* ══ IMAGE GALLERY ════════════════════════════════════════════════════ */}
      <section className="dfg-gallery-section">
        <div className="dfg-gallery-container">
          <div className="dfg-gallery-header">
            <h2 className="dfg-gallery-title">What You're Getting</h2>

            <div className="dfg-gallery-accent"></div>

            <p className="dfg-gallery-intro">
              The Disney Cruise Line Experience
            </p>

            <p className="dfg-gallery-description">
              From family dining experiences and imaginative youth activities to
              thoughtfully designed staterooms and vibrant onboard
              entertainment, Disney Cruise Line delivers memorable experiences
              for guests of all ages throughout every voyage.
            </p>
          </div>

          <div className="dfg-gallery-mosaic">
            <div
              className="dfg-gallery-item dfg-gallery-large"
              style={{ color: "#fff" }}
            >
              <img
                src={DisneyIncludedExp2}
                alt="Multigenerational family enjoying Disney Cruise rotational dining"
                className="dfg-gallery-img"
              />
              <div className="dfg-gallery-overlay">
                <span className="dfg-gallery-caption">
                  Rotational Dining Experiences
                </span>
              </div>
            </div>

            <div
              className="dfg-gallery-item dfg-gallery-tall"
              style={{ color: "#fff" }}
            >
              <img
                src={DisneyIncludedExp3}
                alt="Children enjoying dress-up activities in a Disney Cruise stateroom"
                className="dfg-gallery-img"
              />
              <div className="dfg-gallery-overlay">
                <span className="dfg-gallery-caption">
                  Kids Activities & Imagination
                </span>
              </div>
            </div>

            <div
              className="dfg-gallery-item dfg-gallery-wide"
              style={{ color: "#fff" }}
            >
              <img
                src={DisneyIncludedExp4}
                alt="Disney Cruise family stateroom with bunk beds"
                className="dfg-gallery-img"
              />
              <div className="dfg-gallery-overlay">
                <span className="dfg-gallery-caption">
                  Family-Friendly Staterooms
                </span>
              </div>
            </div>

            <div
              className="dfg-gallery-item dfg-gallery-square"
              style={{ color: "#fff" }}
            >
              <img
                src={DisneyIncludedExp5}
                alt="Disney Wish Luna Lounge entertainment venue"
                className="dfg-gallery-img"
              />
              <div className="dfg-gallery-overlay">
                <span className="dfg-gallery-caption">
                  Onboard Entertainment Venues
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    
      {/* ══ COMPARISON TABLE ══════════════════════════════════════════════════ */}
      <section className="Asc-section Asc-bg-white" id="Asc-fleet">
        <div className="Asc-container">
          <div className="Asc-section-header">
            <h2 className="Asc-h2">
              Is Disney More Inclusive Than Other Cruise Lines?
            </h2>

            <div className="Asc-accent-line"></div>
          </div>

          <div className="Asc-table-wrapper">
            <table className="Asc-fleet-table">
              <thead>
                <tr>
                  <th>Included Feature</th>
                  <th>Disney Cruise Line</th>
                  <th>Typical Mainstream Cruise</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>
                    <strong>Character Experiences</strong>
                  </td>
                  <td>✔ Included</td>
                  <td>Not Available</td>
                </tr>
                <tr>
                  <td>
                    <strong>Broadway-Style Shows</strong>
                  </td>
                  <td>✔ Included</td>
                  <td>Varies</td>
                </tr>
                <tr>
                  <td>
                    <strong>Kids Clubs</strong>
                  </td>
                  <td>✔ Included</td>
                  <td>Often Included</td>
                </tr>
                <tr>
                  <td>
                    <strong>Soft Drinks at Beverage Stations</strong>
                  </td>
                  <td>✔ Included</td>
                  <td>Often Extra</td>
                </tr>
                <tr>
                  <td>
                    <strong>Disney Movies (First-Run)</strong>
                  </td>
                  <td>✔ Included</td>
                  <td>Not Available</td>
                </tr>
                <tr>
                  <td>
                    <strong>Private Island Access</strong>
                  </td>
                  <td>✔ Included</td>
                  <td>Some Lines</td>
                </tr>
                <tr>
                  <td>
                    <strong>Family Activities</strong>
                  </td>
                  <td>✔ Included</td>
                  <td>Often Included</td>
                </tr>
                <tr>
                  <td>
                    <strong>Alcohol</strong>
                  </td>
                  <td>Extra Charge</td>
                  <td>Extra Charge</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      {/* ══ VIDEO SECTION 2 ═══════════════════════════════════════════════════ */}
      <section
        className="azs-video-section"
        id="azs-video-2"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="azs-container">
          <div className="azs-section-header">
            <h2 className="azs-h2">
              Enjoy 3 Vacations in 1 With Disney Cruise Line
            </h2>
            <div className="azs-accent-line"></div>

            <p className="azs-video-intro">
              Disney Cruise Line offers a vacation experience unlike any other
              that magically brings families together while providing
              unparalleled kid fun and relaxing adult time.
            </p>
          </div>

          <div className="azs-video-wrapper">
            <div className="azs-video-frame">
              <iframe
                src="https://www.youtube.com/embed/Af4CWANXYMc"
                title="Enjoy 3 Vacations in 1 With Disney Cruise Line"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      {/* ══ WHY FAMILIES FEEL DISNEY OFFERS STRONG VALUE ════════════════════════ */}
      <section className="dac-families-section">
        <div className="dac-families-container">
          <div className="dac-families-grid">
            {/* Left Content Column */}
            <div className="dac-families-left">
              <div className="dac-families-heading-wrap">
                <h2 className="dac-families-title">
                  Why Families Feel Disney Offers Strong Value
                </h2>
                <div className="dac-families-accent"></div>
              </div>

              <p className="dac-families-intro">
                Families often cite several reasons for Disney's value.
              </p>

              <div className="dac-families-features">
                {[
                  {
                    title: "Less Pressure to Spend Extra",
                    desc: "Many major entertainment options are already included, helping families enjoy more experiences without additional costs.",
                  },
                  {
                    title: "Family-Focused Design",
                    desc: "Experiences are built specifically for families, making vacations easier and more enjoyable for all ages.",
                  },
                  {
                    title: "Exceptional Entertainment",
                    desc: "Broadway-style productions and live performances provide entertainment that could be costly to experience on land.",
                  },
                  {
                    title: "Character Experiences",
                    desc: "Meet beloved Disney characters throughout the voyage, often included rather than requiring separate admission.",
                  },
                  {
                    title: "Youth Programs",
                    desc: "Parents appreciate the quality, supervision, and variety of children's programming available onboard.",
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
                    src={DisneyIncludedExp12}
                    alt="Disney Cruise family value experience"
                    className="dac-families-img"
                  />
                  <div className="dac-families-img-caption">Family Value</div>
                </div>

                <div className="dac-families-img-card dac-families-img-card--secondary">
                  <img
                    src={DisneyIncludedExp13}
                    alt="Family enjoying included Disney Cruise activities"
                    className="dac-families-img"
                  />
                  <div className="dac-families-img-caption">
                    Included Experiences
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ══ ANGELA HUGHES AUTHORITY BOX ══════════════════════════════════════ */}
      <section className="Adg-expert-section" id="Asc-expert-insight">
        <div className="Asc-container">
          {/* TOP HEADING */}
          <div className="Adg-expert-heading">
            <span className="Adg-expert-eyebrow">Luxury Travel Authority</span>
            <h2 className="Adg-expert-title">Meet Angela Hughes</h2>
            <div className="Adg-expert-divider"></div>
          </div>

          {/* MAIN GRID */}
          <div className="Adg-expert-grid">
            {/* LEFT SIDE */}
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
                  CEO · Trips &amp; Ships Luxury Travel
                </p>
                <div className="Adg-expert-name-divider"></div>
                <p className="Adg-expert-countries">
                  <MapPin size={14} />
                  121+ Countries Visited
                </p>
              </div>
            </div>

            {/* RIGHT SIDE */}
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
                      label: "Featured in major travel publications globally",
                    },
                    {
                      icon: <Ship size={16} />,
                      label:
                        "Specialist in luxury cruises, safaris, expeditions, and premium travel",
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
      {/* ══ FAQ ═══════════════════════════════════════════════════════════════ */}
      <section className="Asc-section Asc-bg-white" id="Asc-faq">
        <div className="Asc-container">
          <div className="Asc-section-header">
            <h2 className="Asc-h2">Frequently Asked Questions</h2>
            <div className="Asc-accent-line"></div>
            <p className="Asc-faq-intro">
              Everything you need to know about what's included on a Disney
              Cruise.
            </p>
          </div>
          <FAQ />
        </div>
      </section>
      {/* ══ CTA ═══════════════════════════════════════════════════════════════ */}
      <section className="Asc-help-section">
        <div className="Asc-help-bg-wrap">
          <img
            src={DisneyIncludedcta}
            alt="Disney Cruise Line Family Experience"
            className="Asc-help-bg-img"
          />
          <div className="Asc-help-overlay"></div>
        </div>

        <div className="Asc-container">
          <div className="Asc-help-card">
            <div className="Asc-help-content">
              <div className="Asc-help-header">
                <span className="Asc-help-eyebrow">
                  Disney Cruise Line Guide
                </span>

                <h2 className="Asc-help-h2">
                  You're Getting More Than <br /> a Cruise
                </h2>

                <div className="Asc-help-accent"></div>
              </div>

              <div className="Asc-help-grid">
                <div className="Asc-help-info">
                  <p className="Asc-help-intro">
                    A Disney cruise includes far more than simply a cabin and
                    transportation between destinations.
                  </p>

                  <p className="Asc-help-intro">
                    Your fare covers accommodations, dining, entertainment,
                    youth programs, character experiences, pools, movies, and
                    access to some of Disney's most beloved destinations —
                    including Castaway Cay and Lookout Cay.
                    {!readMore && (
                      <button
                        onClick={() => setReadMore(true)}
                        style={{
                          background: "none",
                          border: "none",
                          color: "var(--bg-white)",
                          cursor: "pointer",
                          marginLeft: "8px",
                          fontWeight: "600",
                          padding: 0,
                        }}
                      >
                        Read More
                      </button>
                    )}
                  </p>

                  <br />

                  {readMore && (
                    <p className="Asc-help-intro">
                      While certain premium experiences cost extra, most
                      families find there is more than enough included
                      entertainment and recreation to enjoy an incredible
                      vacation without constantly reaching for their wallet.
                      <br />
                      <br />
                      For families, grandparents, and multigenerational
                      travelers, Disney Cruise Line offers one of the most
                      complete vacation packages available at sea.
                      <br />
                      <br />
                      <strong>
                        Because when you understand everything that's included,
                        it's easier to see why so many families return to Disney
                        Cruise Line again and again.
                      </strong>
                      <button
                        onClick={() => setReadMore(false)}
                        style={{
                          background: "none",
                          border: "none",
                          color: "var(--bg-white)",
                          cursor: "pointer",
                          marginLeft: "8px",
                          fontWeight: "600",
                          padding: 0,
                        }}
                      >
                        Read Less
                      </button>
                    </p>
                  )}

                  <div className="Asc-help-btn-container">
                    <button className="Asc-help-cta-btn">
                      Plan Your Disney Cruise
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>

                <div className="Asc-help-list-box">
                  <h3 className="Asc-help-list-title">What Disney Includes:</h3>

                  <ul className="Asc-help-bullets">
                    {[
                      "Accommodations",
                      "Rotational Dining",
                      "Broadway-Style Entertainment",
                      "Character Meet-and-Greets",
                      "Youth Clubs & Programs",
                      "Private Island Access",
                      "First-Run Disney Movies",
                      "Family Activities & Recreation",
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
                    <strong>
                      Disney Cruise Line bundles premium family experiences into
                      the fare — creating a complete vacation package that
                      families return to again and again.
                    </strong>
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

export default WhatIsIncludedOnADisneyCruise;
