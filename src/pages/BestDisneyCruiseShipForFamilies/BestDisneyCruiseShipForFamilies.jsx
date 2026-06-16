import { useState, useEffect } from "react";
import {
  MapPin,
  Award,
  Check,
  Plus,
  Minus,
  ArrowRight,
  Star,
  Users,
  Sparkles,
  Ship,
  Anchor,
  Compass,
  Globe,
  Waves,
} from "lucide-react";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela2.jpeg";
import { Helmet } from "react-helmet-async";

import HeroImage1 from "../../assets/BestDisneyCruiseShipForFamilies/disney-cruise-inside-passage-alaska-fjord-glacier-scenery.jpg";
import HeroImage2 from "../../assets/BestDisneyCruiseShipForFamilies/disney-treasure-cruise-ship-sailing-ocean.jpg";
import HeroImage3 from "../../assets/BestDisneyCruiseShipForFamilies/disney-wish-grand-hall-atrium-chandelier-view-from-above.jpeg";
import DisneyShipExp1 from "../../assets/BestDisneyCruiseShipForFamilies/children-meeting-olaf-at-frozen-themed-disney-cruise-event.jpg";
import DisneyShipExp2 from "../../assets/BestDisneyCruiseShipForFamilies/disney-cruise-cove-cafe-adults-only-lounge-oceanview.jpg";
import DisneyShipExp3 from "../../assets/BestDisneyCruiseShipForFamilies/disney-cruise-deluxe-oceanview-stateroom-family-cabin-sitting-area.jpg";
import DisneyShipExp4 from "../../assets/BestDisneyCruiseShipForFamilies/disney-wish-grand-hall-captain-mickey-mouse-family-photo.jpg";
import DisneyShipExp5 from "../../assets/BestDisneyCruiseShipForFamilies/isney-wish-the-rose-lounge-adults-only-luxury-seating.jpg";
import DisneyShipExp6 from "../../assets/BestDisneyCruiseShipForFamilies/couple-enjoying-castaway-cay-with-disney-cruise-ship-background.jpg";
import DisneyShipExp7 from "../../assets/BestDisneyCruiseShipForFamilies/multigenerational-family-walking-on-castaway-cay-beach-disney-cruise-vacation.jpeg";
import DisneyShipExp8 from "../../assets/BestDisneyCruiseShipForFamilies/disney-alaska-cruise-mickey-minnie-mouse-deck-walk.jpg";
import DisneyShipExp9 from "../../assets/BestDisneyCruiseShipForFamilies/disney-cruise-line-adults-only-lounge-nightlife-couple.jpg";
import DisneyShipExp10 from "../../assets/BestDisneyCruiseShipForFamilies/disney-cruise-line-kids-activities-stateroom-hallway-family.jpg";
import DisneyShipExp11 from "../../assets/BestDisneyCruiseShipForFamilies/disney-wonder-alaska-cruise-family-travel-deck-view.jpg";
import DisneyShipExp12 from "../../assets/BestDisneyCruiseShipForFamilies/disney-cruise-vibe-teen-club-foosball-youth-activities.jpg";
import DisneyShipExp13 from "../../assets/BestDisneyCruiseShipForFamilies/disney-wonder-alaska-cruise-tracy-arm-fjord-excursion.jpg";
import DisneyShipExp14 from "../../assets/BestDisneyCruiseShipForFamilies/disney-cruise-line-vacation-packages-special-offers.jpg";
import DisneyShipExp15 from "../../assets/BestDisneyCruiseShipForFamilies/Disney-Treasure-Periscope-Pub.jpg";
import DisneyShipcta from "../../assets/BestDisneyCruiseShipForFamilies/disney-destiny-cruise-ship-sunset-ocean-voyage-rendering.jpg";

// ─── SHIP HIGHLIGHTS — INTERACTIVE PANEL DATA ─────────────────────────────────
const disneyShipHighlights = [
  {
    id: "disney-wish",
    title: "Disney Wish — Best Overall for Families",
    badge: "Disney Wish",
    icon: Sparkles,
    desc: "For many families, the Disney Wish is currently the best all-around Disney cruise ship. With innovative design, immersive Disney storytelling, AquaMouse — Disney's first attraction at sea — and beautifully designed family staterooms, the Wish sets a new standard for family cruising.",
    columns: [
      {
        label: "Why Families Love Disney Wish:",
        items: [
          "Newest Family Spaces & Modern Amenities",
          "AquaMouse — Disney's First Attraction at Sea",
          "Immersive Disney Storytelling Throughout",
          "Expanded Family Entertainment",
          "Enhanced Character Experiences",
          "Beautifully Designed Family Staterooms",
        ],
      },
    ],
    themeLabel: "Best For: Families with Toddlers & Young Children",
    themeText:
      "Disney Wish is especially popular with families traveling with younger children — offering the most modern youth spaces, newest attractions, and most immersive Disney storytelling experiences in the fleet.",
  },
  {
    id: "disney-fantasy",
    title: "Disney Fantasy — Best for Multigenerational Families",
    badge: "Disney Fantasy",
    icon: Users,
    desc: "The Disney Fantasy remains one of the top choices for grandparents, parents, and children traveling together. Its spacious design, longer 7-night Caribbean itineraries, and excellent balance of activity and relaxation make it ideal for multigenerational family groups.",
    columns: [
      {
        label: "Why It Works for Multiple Generations:",
        items: [
          "Spacious Design for Larger Groups",
          "Longer 7-Night Caribbean Sailings",
          "Family-Friendly Entertainment for All Ages",
          "Dining Variety for Children & Adults",
          "Relaxed Atmosphere — Activity & Rest Balanced",
        ],
      },
    ],
    themeLabel: "Best For: Multigenerational Families & Large Groups",
    themeText:
      "Families planning reunions or multigenerational vacations often choose Disney Fantasy — its layout, longer itineraries, and accommodations work particularly well for grandparents traveling with grandchildren.",
  },
  {
    id: "disney-treasure",
    title: "Disney Treasure — Best for Adventure-Loving Families",
    badge: "Disney Treasure",
    icon: Compass,
    desc: "Disney Treasure is designed around adventure, exploration, and beloved Disney stories. With innovative dining experiences, new entertainment offerings, family activities throughout the ship, and modern accommodations, it appeals especially to families who enjoy immersive storytelling.",
    columns: [
      {
        label: "Disney Treasure Highlights:",
        items: [
          "Adventure-Inspired Theming",
          "Innovative Dining Experiences",
          "New Entertainment Offerings",
          "Family Activities Throughout the Ship",
          "Modern Accommodations",
        ],
      },
    ],
    themeLabel: "Best For: Adventure-Loving & Story-Driven Families",
    themeText:
      "Families who enjoy immersive storytelling, adventure themes, and Disney's newest cruise innovations often find Disney Treasure especially appealing.",
  },
  {
    id: "disney-dream",
    title: "Disney Dream — Best for First-Time Disney Cruisers",
    badge: "Disney Dream",
    icon: Star,
    desc: "Disney Dream remains one of the most popular Disney ships for first-time cruisers. With popular Bahamas itineraries, excellent onboard entertainment, the beloved AquaDuck water coaster, abundant character experiences, and frequent access to Castaway Cay, it delivers the perfect introduction to Disney cruising.",
    columns: [
      {
        label: "Why First-Timers Love It:",
        items: [
          "Short Bahamas Cruises — Perfect Introduction",
          "AquaDuck Family Favorite Water Coaster",
          "Excellent Character Experiences",
          "Family Entertainment Variety",
          "Frequent Castaway Cay Access",
        ],
      },
    ],
    themeLabel: "Best For: First-Time Disney Cruisers",
    themeText:
      "For many families, Disney Dream provides the perfect first cruise experience — combining accessible Bahamas itineraries with the full Disney Cruise Line experience.",
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
        "Luxury travel experts helping families choose the right Disney cruise ship through expert comparisons, planning, and personalized travel services.",
    },
    {
      "@type": "WebPage",
      "@id":
        "https://www.tripsandships.com/best-disney-cruise-ship-for-families",
      url: "https://www.tripsandships.com/best-disney-cruise-ship-for-families",
      name: "Best Disney Cruise Ship for Families",
      description:
        "Discover the best Disney Cruise ships for families. Compare Disney Wish, Disney Treasure, Disney Fantasy, Disney Dream, Disney Magic, and Disney Wonder to find the perfect family cruise vacation.",
      isPartOf: { "@id": "https://www.tripsandships.com/#website" },
      about: [{ "@type": "Organization", name: "Disney Cruise Line" }],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.tripsandships.com/best-disney-cruise-ship-for-families#breadcrumb",
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
          name: "Best Disney Cruise Ship for Families",
          item: "https://www.tripsandships.com/best-disney-cruise-ship-for-families",
        },
      ],
    },
    {
      "@type": "ItemList",
      "@id":
        "https://www.tripsandships.com/best-disney-cruise-ship-for-families#itemlist",
      name: "Best Disney Cruise Ships for Families",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Disney Wish — Best Overall for Families",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Disney Fantasy — Best for Multigenerational Families",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Disney Treasure — Best for Adventure-Loving Families",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Disney Dream — Best for First-Time Disney Cruisers",
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Disney Wonder — Best for Alaska Cruises",
        },
        {
          "@type": "ListItem",
          position: 6,
          name: "Disney Magic — Best for Classic Disney Fans",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id":
        "https://www.tripsandships.com/best-disney-cruise-ship-for-families#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is the best Disney Cruise ship for families?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Disney Wish is often considered the best overall Disney cruise ship for families due to its modern design, family attractions, and immersive experiences.",
          },
        },
        {
          "@type": "Question",
          name: "Which Disney ship is best for grandparents and grandchildren?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Disney Fantasy is frequently recommended for multigenerational travel because of its spacious layout and longer itineraries.",
          },
        },
        {
          "@type": "Question",
          name: "Is Disney Wish better than Disney Fantasy?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Both are excellent. Disney Wish offers newer attractions and design, while Disney Fantasy provides longer itineraries and a more traditional cruise experience.",
          },
        },
        {
          "@type": "Question",
          name: "Which Disney ship is best for first-time cruisers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Disney Dream is often recommended for first-time Disney cruisers due to its popular Bahamas itineraries and family-friendly amenities.",
          },
        },
        {
          "@type": "Question",
          name: "Which Disney ship sails to Alaska?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Disney Wonder frequently operates Disney's Alaska itineraries.",
          },
        },
        {
          "@type": "Question",
          name: "Is Disney Treasure good for families?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Disney Treasure offers immersive storytelling, family activities, and modern cruise experiences designed for all ages.",
          },
        },
        {
          "@type": "Question",
          name: "Are all Disney ships family-friendly?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. Every Disney Cruise Line ship is specifically designed with families in mind.",
          },
        },
        {
          "@type": "Question",
          name: "Which Disney ship has the best kids clubs?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Disney Wish currently offers some of the most advanced and immersive youth spaces in the fleet.",
          },
        },
        {
          "@type": "Question",
          name: "Which Disney ship is best for toddlers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Disney Wish is often considered the best option for families with younger children.",
          },
        },
        {
          "@type": "Question",
          name: "Which Disney ship is best overall?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For most families, Disney Wish currently holds the title of best overall Disney cruise ship.",
          },
        },
        {
          "@type": "Question",
          name: "Does newer always mean better for Disney ships?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Not necessarily. While Disney Wish and Disney Treasure feature newer technology, Disney Magic and Disney Wonder remain favorites among repeat cruisers for their intimate atmospheres and unique itineraries.",
          },
        },
        {
          "@type": "Question",
          name: "Is the itinerary more important than the ship?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Many experienced Disney cruisers recommend choosing your destination first. Once you've selected a destination, the best ship often becomes clearer.",
          },
        },
        {
          "@type": "Question",
          name: "Which Disney ship is best for teenagers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Disney Fantasy or Disney Treasure are popular choices for families with teenagers, offering larger activity offerings, teen spaces, and longer itineraries.",
          },
        },
        {
          "@type": "Question",
          name: "Which Disney ship is best for large family groups?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Disney Fantasy works particularly well for large and multigenerational family groups due to its spacious layout and accommodation options.",
          },
        },
      ],
    },
    {
      "@type": "Review",
      "@id":
        "https://www.tripsandships.com/best-disney-cruise-ship-for-families#review",
      itemReviewed: {
        "@type": "TravelAction",
        name: "Disney Cruise Line Ships for Families",
      },
      reviewBody:
        "Every Disney Cruise Line ship is designed with families in mind — from innovative family spaces on Disney Wish to the multigenerational appeal of Disney Fantasy and the adventure theming of Disney Treasure. The best ship depends on your family's priorities, destinations, and travel style.",
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
      q: "What is the best Disney Cruise ship for families?",
      a: "Disney Wish is often considered the best overall Disney cruise ship for families due to its modern design, family attractions, and immersive experiences.",
    },
    {
      q: "Which Disney ship is best for grandparents and grandchildren?",
      a: "Disney Fantasy is frequently recommended for multigenerational travel because of its spacious layout and longer itineraries.",
    },
    {
      q: "Is Disney Wish better than Disney Fantasy?",
      a: "Both are excellent. Disney Wish offers newer attractions and design, while Disney Fantasy provides longer itineraries and a more traditional cruise experience.",
    },
    {
      q: "Which Disney ship is best for first-time cruisers?",
      a: "Disney Dream is often recommended for first-time Disney cruisers due to its popular Bahamas itineraries and family-friendly amenities.",
    },
    {
      q: "Which Disney ship sails to Alaska?",
      a: "Disney Wonder frequently operates Disney's Alaska itineraries.",
    },
    {
      q: "Is Disney Treasure good for families?",
      a: "Yes. Disney Treasure offers immersive storytelling, family activities, and modern cruise experiences designed for all ages.",
    },
    {
      q: "Are all Disney ships family-friendly?",
      a: "Absolutely. Every Disney Cruise Line ship is specifically designed with families in mind.",
    },
    {
      q: "Which Disney ship has the best kids clubs?",
      a: "Disney Wish currently offers some of the most advanced and immersive youth spaces in the fleet.",
    },
    {
      q: "Which Disney ship is best for toddlers?",
      a: "Disney Wish is often considered the best option for families with younger children.",
    },
    {
      q: "Which Disney ship is best overall?",
      a: "For most families, Disney Wish currently holds the title of best overall Disney cruise ship.",
    },
    {
      q: "Does newer always mean better for Disney ships?",
      a: "Not necessarily. While Disney Wish and Disney Treasure feature newer technology, Disney Magic and Disney Wonder remain favorites among repeat cruisers for their intimate atmospheres and unique itineraries.",
    },
    {
      q: "Is the itinerary more important than the ship?",
      a: "Many experienced Disney cruisers recommend choosing your destination first. Once you've selected a destination, the best ship often becomes clearer.",
    },
    {
      q: "Which Disney ship is best for teenagers?",
      a: "Disney Fantasy or Disney Treasure are popular choices for families with teenagers, offering larger activity offerings, teen spaces, and longer itineraries.",
    },
    {
      q: "Which Disney ship is best for large family groups?",
      a: "Disney Fantasy works particularly well for large and multigenerational family groups due to its spacious layout and accommodation options.",
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
const BestDisneyCruiseShipForFamilies = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [readMore, setReadMore] = useState(false);
  const images = [HeroImage1, HeroImage2, HeroImage3];
  const [activeDest, setActiveDest] = useState("disney-wish");
  const currentDest =
    disneyShipHighlights.find((d) => d.id === activeDest) ||
    disneyShipHighlights[0];
  const ActiveIcon = currentDest.icon;

  const [currentLuxurySlide, setCurrentLuxurySlide] = useState(0);
  const [activeReasonTab, setActiveReasonTab] = useState(5);

  const shipCategories = [
    {
      title: "Disney Wish",
      description:
        "Disney's newest and most innovative ship — best overall for families with younger children, featuring AquaMouse, modern youth spaces, and immersive Disney storytelling.",
      number: "01",
    },
    {
      title: "Disney Fantasy",
      description:
        "The top pick for multigenerational families — spacious design, longer 7-night Caribbean itineraries, and an excellent balance of activity and relaxation for all ages.",
      number: "02",
    },
    {
      title: "Disney Treasure",
      description:
        "Adventure-inspired and story-driven — ideal for families who love immersive theming, innovative dining, and the newest Disney cruise experiences at sea.",
      number: "03",
    },
    {
      title: "Disney Dream",
      description:
        "The perfect first Disney cruise ship — popular Bahamas itineraries, AquaDuck water coaster, abundant character experiences, and frequent Castaway Cay access.",
      number: "04",
    },
    {
      title: "Disney Wonder",
      description:
        "Disney's Alaska specialist — an intimate ship ideal for families seeking natural beauty, wildlife viewing, and glacier experiences with Disney's hallmark service.",
      number: "05",
    },
    {
      title: "Disney Magic",
      description:
        "The original Disney cruise ship — beloved by repeat guests for its classic Disney charm, intimate atmosphere, and unique itineraries to destinations larger ships can't visit.",
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
      setCurrentLuxurySlide((prev) => (prev + 1) % shipCategories.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [shipCategories.length]);

  return (
    <div className="Asc-page-wrapper">
      <Helmet>
        <title>
          Best Disney Cruise Ship for Families | Which Disney Ship Is Right for
          You?
        </title>
        <meta name="title" content="Best Disney Cruise Ship for Families" />
        <meta
          name="description"
          content="Discover the best Disney Cruise ships for families. Compare Disney Wish, Disney Treasure, Disney Fantasy, Disney Dream, Disney Magic, and Disney Wonder to find the perfect family cruise vacation."
        />
        <meta
          property="og:title"
          content="Best Disney Cruise Ship for Families | Which Disney Ship Is Right for You?"
        />
        <meta
          property="og:description"
          content="Compare Disney Wish, Disney Fantasy, Disney Treasure, Disney Dream, Disney Magic, and Disney Wonder to find the best ship for your family cruise vacation."
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content="https://www.tripsandships.com/best-disney-cruise-ship-for-families"
        />
        <link
          rel="canonical"
          href="https://www.tripsandships.com/best-disney-cruise-ship-for-families"
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
          <h1>Best Disney Cruise Ship for Families</h1>
          <p>
            One of the most common questions families ask when planning a Disney
            cruise is: which Disney Cruise ship is the best for families?
          </p>
          <p>
            The answer depends on your family's travel style, the ages of your
            children, your preferred destinations, and the type of onboard
            experience you're seeking.
          </p>
          {readMore && (
            <>
              <p>
                The good news? Every Disney Cruise Line ship is designed with
                families in mind. From innovative kids clubs and Broadway-style
                entertainment to family-friendly staterooms and exceptional
                service, Disney consistently delivers one of the best family
                vacation experiences at sea.
              </p>
              <p>
                However, each ship offers unique features that may make it a
                better fit for your specific family — whether you're traveling
                with toddlers, teenagers, grandparents, or all of the above.
              </p>
              <p>
                At Trips &amp; Ships Luxury Travel, we help families compare the
                Disney fleet and choose the right ship and itinerary for their
                unique travel goals.
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
      {/* ══ FLEET OVERVIEW ════════════════════════════════════════════════════ */}
      <section
        className="ugt-components-section"
        id="ugt-components"
        style={{ backgroundColor: "var(--bg-white)" }}
      >
        <div className="Asc-container">
          <div className="ugt-components-header">
            <h2 className="adg-c-h2">Disney Cruise Line Fleet Overview</h2>
            <div className="adg-c-accent-line"></div>
          </div>

          <div className="ugt-components-list">
            <div className="ugt-component-row">
              {/* LEFT IMAGE */}
              <div className="ugt-component-image-wrapper">
                <div className="ugt-component-image-container">
                  <img
                    src={DisneyShipExp1}
                    alt="Disney Cruise Line fleet overview for families"
                    className="ugt-component-image"
                  />
                </div>
              </div>

              {/* RIGHT CONTENT */}
              <div className="ugt-component-content">
                <p className="ugt-component-text">
                  No matter which ship you choose, you'll enjoy the core Disney
                  Cruise experience — including character meet-and-greets,
                  Broadway-quality entertainment, industry-leading youth clubs,
                  and Disney's exceptional family-focused service.
                </p>
                <p className="ugt-component-text">
                  The key is finding the ship whose unique features best match
                  your family's priorities — from the newest technology on
                  Disney Wish to the multigenerational appeal of Disney Fantasy.
                </p>

                <div className="ugt-questions-box">
                  <span className="ugt-questions-title">
                    All Disney Ships Feature:
                  </span>
                  <ul className="ugt-questions-list">
                    {[
                      "Family-Focused Design",
                      "Character Meet-and-Greets",
                      "Broadway-Quality Entertainment",
                      "Kids Clubs & Youth Programs",
                      "Family-Friendly Dining",
                      "Disney Storytelling & Theming",
                      "Pools & Recreation Areas",
                      "Exceptional Guest Service",
                      "Activities for All Ages",
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
      {/* ══ FLEET OVERVIEW BREAKDOWN ════════════════════════════════════════ */}
      <section className="dbf-fleet-breakdown-section">
        <div className="dbf-fleet-container">
          <div className="dbf-fleet-header">
            <span className="dbf-fleet-eyebrow">Fleet Breakdown</span>
            <h2 className="dbf-fleet-title">
              Disney Cruise Line Fleet Overview
            </h2>
            <div className="dbf-fleet-accent"></div>
          </div>

          <div className="dbf-fleet-grid">
            {[
              {
                name: "Disney Magic",
                desc: "The original Disney cruise ship.",
                icon: Anchor,
              },
              {
                name: "Disney Wonder",
                desc: "Known for Alaska and unique itineraries.",
                icon: Compass,
              },
              {
                name: "Disney Dream",
                desc: "A larger ship with extensive family amenities.",
                icon: Ship,
              },
              {
                name: "Disney Fantasy",
                desc: "Popular for longer Caribbean cruises.",
                icon: Waves,
              },
              {
                name: "Disney Wish",
                desc: "Disney's newest generation of family cruising.",
                icon: Sparkles,
              },
              {
                name: "Disney Treasure",
                desc: "Adventure-themed and family-focused.",
                icon: Globe,
              },
            ].map((ship, idx) => {
              const IconComponent = ship.icon;
              return (
                <div key={idx} className="dbf-ship-overview-card">
                  <div className="dbf-ship-card-icon-wrap">
                    <IconComponent size={22} />
                  </div>
                  <h3 className="dbf-ship-card-name">{ship.name}</h3>
                  <p className="dbf-ship-card-desc">{ship.desc}</p>
                </div>
              );
            })}
          </div>
          <p className="dbf-fleet-lead-footer">
            Each ship appeals to families in slightly different ways.
          </p>
        </div>
      </section>
      {/* ══ BEST SHIPS FOR FAMILIES SPOTLIGHTS ══════════════════════════════ */}
      <section className="dbf-spotlight-section">
        <div className="dbf-spotlight-container">
          <div className="dbf-spotlight-header">
            <h2 className="dbf-spotlight-title">Best Cruise Ships Spotlight</h2>
            <div className="dbf-spotlight-accent"></div>
          </div>

          <div className="dbf-spotlight-grid">
            {/* CARD 1: Disney Wish */}
            <div className="dbf-spotlight-card dbf-spotlight-card--wish">
              <div className="dbf-spotlight-card-header">
                <span className="dbf-spotlight-card-badge">Best Overall</span>
                <h3 className="dbf-spotlight-card-title">
                  Best Overall: Disney Wish
                </h3>
              </div>

              <div className="dbf-spotlight-card-media">
                <img
                  src={DisneyShipExp14}
                  alt="Disney Wish Family Pool Deck & AquaMouse"
                  className="dbf-spotlight-card-img"
                />
                <div className="dbf-spotlight-card-img-overlay"></div>
                <div className="dbf-spotlight-card-icon-badge">
                  <Sparkles size={18} />
                </div>
              </div>

              <div className="dbf-spotlight-card-body">
                <p className="dbf-spotlight-card-lead">
                  For many families, the Disney Wish is currently the best
                  all-around Disney cruise ship.
                </p>

                <div className="dbf-spotlight-features-box">
                  <h4 className="dbf-spotlight-features-title">
                    Why Families Love Disney Wish
                  </h4>
                  <ul className="dbf-spotlight-features-list">
                    {[
                      {
                        title: "Newest Family Spaces",
                        text: "Innovative design and modern amenities.",
                      },
                      {
                        title: "Disney Storytelling",
                        text: "Immersive experiences throughout the ship.",
                      },
                      {
                        title: "AquaMouse",
                        text: "Disney's first attraction at sea.",
                      },
                      {
                        title: "Expanded Family Entertainment",
                        text: "New shows, dining experiences, and activities.",
                      },
                      {
                        title: "Family Staterooms",
                        text: "Beautifully designed accommodations.",
                      },
                      {
                        title: "Character Experiences",
                        text: "Enhanced opportunities to interact with favorite Disney characters.",
                      },
                    ].map((item, idx) => (
                      <li key={idx} className="dbf-spotlight-feature-item">
                        <span className="dbf-spotlight-feature-check">
                          <Check size={12} />
                        </span>
                        <div className="dbf-spotlight-feature-text">
                          <strong>{item.title}</strong> — {item.text}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="dbf-spotlight-card-footer">
                <Sparkles size={16} className="dbf-spotlight-footer-icon" />
                <p>
                  The Disney Wish is especially popular with families traveling
                  with younger children.
                </p>
              </div>
            </div>

            {/* CARD 2: Disney Fantasy */}
            <div className="dbf-spotlight-card dbf-spotlight-card--fantasy">
              <div className="dbf-spotlight-card-header">
                <span className="dbf-spotlight-card-badge dbf-spotlight-card-badge--navy">
                  Multigenerational Choice
                </span>
                <h3 className="dbf-spotlight-card-title">
                  Best for Multigenerational Families: Disney Fantasy
                </h3>
              </div>

              <div className="dbf-spotlight-card-media">
                <img
                  src={DisneyShipExp15}
                  alt="Multigenerational Family Dining on Disney Fantasy"
                  className="dbf-spotlight-card-img"
                />
                <div className="dbf-spotlight-card-img-overlay"></div>
                <div className="dbf-spotlight-card-icon-badge">
                  <Users size={18} />
                </div>
              </div>

              <div className="dbf-spotlight-card-body">
                <p className="dbf-spotlight-card-lead">
                  The Disney Fantasy remains one of the top choices for
                  grandparents, parents, and children traveling together.
                </p>

                <div className="dbf-spotlight-features-box">
                  <h4 className="dbf-spotlight-features-title">
                    Why It Works for Multiple Generations
                  </h4>
                  <ul className="dbf-spotlight-features-list">
                    {[
                      {
                        title: "Spacious Design",
                        text: "Plenty of room for larger groups.",
                      },
                      {
                        title: "Longer Itineraries",
                        text: "Popular 7-night Caribbean sailings.",
                      },
                      {
                        title: "Family-Friendly Entertainment",
                        text: "Something for every age group.",
                      },
                      {
                        title: "Dining Variety",
                        text: "Appeals to children and adults alike.",
                      },
                      {
                        title: "Relaxed Atmosphere",
                        text: "Excellent balance of activity and relaxation.",
                      },
                    ].map((item, idx) => (
                      <li key={idx} className="dbf-spotlight-feature-item">
                        <span className="dbf-spotlight-feature-check">
                          <Check size={12} />
                        </span>
                        <div className="dbf-spotlight-feature-text">
                          <strong>{item.title}</strong> — {item.text}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="dbf-spotlight-card-footer">
                <Users size={16} className="dbf-spotlight-footer-icon" />
                <p>
                  Families planning reunions or multigenerational vacations
                  often choose Disney Fantasy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ══ VIDEO SECTION ════════════════════════════════════════════════════ */}
      <section
        className="azs-video-section"
        id="azs-video"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="azs-container">
          <div className="azs-section-header">
            <h2 className="azs-h2">
              Discover the Disney Wish — Disney's Best Family Ship
            </h2>
            <div className="azs-accent-line"></div>
            <p className="azs-video-intro">
              Discover all the exciting details about Disney Cruise Line's
              Disney Wish — from its AquaMouse water attraction and immersive
              Disney storytelling spaces to stunning dining experiences and the
              most advanced youth clubs in the fleet.
            </p>
          </div>
          <div className="azs-video-wrapper">
            <div className="azs-video-frame">
              <iframe
                src="https://www.youtube.com/embed/78a5juJUmc4"
                title="Disney Wish Family Ship Overview"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      {/* ══ BEST SHIP BY CATEGORY — 4-CARD GRID ═════════════════════════════ */}
      <section className="adg-c-section adg-c-bg-white">
        <div className="adg-c-container">
          <div className="adg-c-section-header">
            <span className="adg-c-eyebrow">
              Disney Cruise Line Ship Recommendations
            </span>
            <h2 className="adg-c-h2">
              Best Disney Cruise Ship <br /> by Family Type
            </h2>
            <div className="adg-c-accent-line"></div>
            <p className="Asc-section-intro">
              Each Disney ship has unique strengths. Here's how the fleet
              matches up against the most common family travel styles and
              priorities.
            </p>
          </div>

          <div className="adg-c-venues-grid1">
            {[
              {
                id: 1,
                eyebrow: "Best Pick #1",
                name: "Families with Toddlers & Young Children",
                highlight: "Top Choice: Disney Wish",
                items: [
                  "Modern Family Spaces & Youth Clubs",
                  "AquaMouse — Disney's First Attraction at Sea",
                  "Enhanced Character Experiences",
                  "Interactive Attractions",
                  "Family-Friendly Accommodations",
                ],
                callout:
                  "Disney Wish offers the most modern, immersive, and child-focused spaces in the fleet — making it the top recommendation for families with younger children.",
              },
              {
                id: 2,
                eyebrow: "Best Pick #2",
                name: "Families with Teenagers",
                highlight: "Top Choice: Disney Fantasy or Disney Treasure",
                items: [
                  "Larger Activity Offerings",
                  "Dedicated Teen Spaces (Vibe)",
                  "Adventure & Exploration Experiences",
                  "Longer Itineraries",
                  "More Diverse Entertainment Options",
                ],
                callout:
                  "Disney Fantasy and Disney Treasure provide the variety, adventure, and teen-specific spaces that older children appreciate most.",
              },
              {
                id: 3,
                eyebrow: "Best Pick #3",
                name: "Grandparents & Grandchildren",
                highlight: "Top Choice: Disney Fantasy",
                items: [
                  "Spacious Design for Larger Groups",
                  "Longer 7-Night Sailings",
                  "Activities for Every Generation",
                  "Relaxed, Comfortable Pace",
                  "Excellent Multigenerational Layout",
                ],
                callout:
                  "Disney Fantasy is the most frequently recommended ship for multigenerational travel — its layout, pace, and longer itineraries are ideal for grandparents and grandchildren traveling together.",
              },
              {
                id: 4,
                eyebrow: "Best Pick #4",
                name: "Large Family Groups",
                highlight: "Top Choice: Disney Fantasy",
                items: [
                  "Spacious Layout for Large Parties",
                  "Connecting Stateroom Options",
                  "Longer Itineraries for More Shared Time",
                  "Diverse Dining for All Tastes",
                  "Activities Across All Age Groups",
                ],
                callout:
                  "Disney Fantasy's layout and accommodations work particularly well for large family reunion-style groups wanting both shared experiences and individual flexibility.",
              },
            ].map((venue, i) => (
              <div
                key={venue.id}
                className={`adg-c-venue-card adg-c-venue-${(i % 4) + 1}`}
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

      {/* ══ IMAGE GALLERY ════════════════════════════════════════════════════ */}
      <section className="dfg-gallery-section" id="dfg-gallery">
        <div className="dfg-gallery-container">
          <div className="dfg-gallery-header">
            <h2 className="dfg-gallery-title">
              Inside Disney Cruise Line's Family Experience
            </h2>
            <div className="dfg-gallery-accent"></div>
            <p className="dfg-gallery-intro">
              Spaces Designed for Every Generation
            </p>
            <p className="dfg-gallery-description">
              Disney Cruise Line combines family-friendly accommodations,
              immersive Disney storytelling, and sophisticated adults-only
              retreats. From iconic gathering spaces and character moments to
              comfortable staterooms and relaxing lounges, every ship is
              designed to create unforgettable vacations for guests of all ages.
            </p>
          </div>

          <div className="dfg-gallery-mosaic">
            <div
              className="dfg-gallery-item dfg-gallery-large"
              style={{ color: "#fff" }}
            >
              <img
                src={DisneyShipExp2}
                alt="Disney Cruise Cove Cafe adults only lounge with ocean views"
                className="dfg-gallery-img"
              />
              <div className="dfg-gallery-overlay">
                <span className="dfg-gallery-caption">
                  Adults-Only Relaxation at Cove Café
                </span>
              </div>
            </div>

            <div
              className="dfg-gallery-item dfg-gallery-tall"
              style={{ color: "#fff" }}
            >
              <img
                src={DisneyShipExp3}
                alt="Disney Cruise deluxe oceanview family stateroom"
                className="dfg-gallery-img"
              />
              <div className="dfg-gallery-overlay">
                <span className="dfg-gallery-caption">
                  Spacious Family Staterooms
                </span>
              </div>
            </div>

            <div
              className="dfg-gallery-item dfg-gallery-wide"
              style={{ color: "#fff" }}
            >
              <img
                src={DisneyShipExp4}
                alt="Disney Wish Grand Hall with Captain Mickey"
                className="dfg-gallery-img"
              />
              <div className="dfg-gallery-overlay">
                <span className="dfg-gallery-caption">
                  Iconic Disney Wish Grand Hall Moments
                </span>
              </div>
            </div>

            <div
              className="dfg-gallery-item dfg-gallery-square"
              style={{ color: "#fff" }}
            >
              <img
                src={DisneyShipExp5}
                alt="The Rose adults only lounge aboard Disney Wish"
                className="dfg-gallery-img"
              />
              <div className="dfg-gallery-overlay">
                <span className="dfg-gallery-caption">
                  Elegant Adults-Only Lounges
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
 
      {/* ══ SHIP SPOTLIGHTS — TABBED SECTION ═════════════════════════════════ */}
      <section className="dac-reasons-section">
        <div className="dac-reasons-container">
          <div className="dac-reasons-header">
            <span className="dac-reasons-eyebrow">Ship Spotlights</span>
            <h2 className="dac-reasons-title">
              Which Disney Cruise Ship Is Best for Your Family?
            </h2>
            <div className="dac-reasons-accent"></div>
            <p className="dac-reasons-lead">
              Every Disney ship offers something unique. Whether you're seeking
              adventure, planning your first Disney cruise, exploring Alaska, or
              looking for classic Disney charm, there's a ship designed for your
              family's travel style.
            </p>
          </div>

          <div className="dac-reasons-tabs-nav">
            <button
              className={`dac-reasons-tab-btn ${activeReasonTab === 5 ? "active" : ""}`}
              onClick={() => setActiveReasonTab(5)}
            >
              <span className="dac-reasons-tab-icon-wrap">
                <Compass size={18} />
              </span>
              <div className="dac-reasons-tab-text-wrap">
                <span className="dac-reasons-tab-num">01</span>
                <span className="dac-reasons-tab-title">Disney Treasure</span>
              </div>
            </button>

            <button
              className={`dac-reasons-tab-btn ${activeReasonTab === 6 ? "active" : ""}`}
              onClick={() => setActiveReasonTab(6)}
            >
              <span className="dac-reasons-tab-icon-wrap">
                <Star size={18} />
              </span>
              <div className="dac-reasons-tab-text-wrap">
                <span className="dac-reasons-tab-num">02</span>
                <span className="dac-reasons-tab-title">Disney Dream</span>
              </div>
            </button>

            <button
              className={`dac-reasons-tab-btn ${activeReasonTab === 7 ? "active" : ""}`}
              onClick={() => setActiveReasonTab(7)}
            >
              <span className="dac-reasons-tab-icon-wrap">
                <Globe size={18} />
              </span>
              <div className="dac-reasons-tab-text-wrap">
                <span className="dac-reasons-tab-num">03</span>
                <span className="dac-reasons-tab-title">Disney Wonder</span>
              </div>
            </button>

            <button
              className={`dac-reasons-tab-btn ${activeReasonTab === 8 ? "active" : ""}`}
              onClick={() => setActiveReasonTab(8)}
            >
              <span className="dac-reasons-tab-icon-wrap">
                <Anchor size={18} />
              </span>
              <div className="dac-reasons-tab-text-wrap">
                <span className="dac-reasons-tab-num">04</span>
                <span className="dac-reasons-tab-title">Disney Magic</span>
              </div>
            </button>
          </div>

          <div className="dac-reasons-tabs-content">
            {/* Disney Treasure */}
            {activeReasonTab === 5 && (
              <div className="dac-reasons-tab-panel fade-in">
                <div className="dac-reasons-row dac-reasons-row--left-content">
                  <div className="dac-reasons-content">
                    <span className="dac-reasons-row-number">01</span>
                    <h3 className="dac-reasons-row-title">
                      Best for Adventure-Loving Families: Disney Treasure
                    </h3>
                    <p className="dac-reasons-row-desc">
                      Disney Treasure is designed around adventure, exploration,
                      and beloved Disney stories. Families who enjoy immersive
                      storytelling and exciting onboard experiences may find
                      Disney Treasure especially appealing.
                    </p>

                    <div className="dac-reasons-pills">
                      {[
                        "Adventure-Inspired Theming",
                        "Innovative Dining",
                        "New Entertainment",
                        "Family Activities",
                        "Modern Accommodations",
                      ].map((pill, idx) => (
                        <span key={idx} className="dac-reasons-pill">
                          <Compass size={12} style={{ marginRight: "6px" }} />
                          {pill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="dac-reasons-media">
                    <div className="dac-reasons-img-container">
                      <img
                        src={DisneyShipExp6}
                        alt="Disney Treasure cruise ship"
                        className="dac-reasons-img"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Disney Dream */}
            {activeReasonTab === 6 && (
              <div className="dac-reasons-tab-panel fade-in">
                <div className="dac-reasons-row dac-reasons-row--right-content">
                  <div className="dac-reasons-media">
                    <div className="dac-reasons-img-container">
                      <img
                        src={DisneyShipExp7}
                        alt="Disney Dream cruise ship"
                        className="dac-reasons-img"
                      />
                    </div>
                  </div>

                  <div className="dac-reasons-content">
                    <span className="dac-reasons-row-number">02</span>
                    <h3 className="dac-reasons-row-title">
                      Best for First-Time Disney Cruisers: Disney Dream
                    </h3>

                    <p className="dac-reasons-row-desc">
                      Disney Dream remains one of Disney's most popular ships
                      and provides an ideal introduction to Disney cruising.
                    </p>

                    <div className="dac-reasons-bullets">
                      {[
                        "Short Bahamas Cruises",
                        "Family Entertainment",
                        "AquaDuck Water Coaster",
                        "Character Experiences",
                        "Disney Castaway Cay Access",
                      ].map((bullet, idx) => (
                        <div key={idx} className="dac-reasons-bullet-item">
                          <Star size={16} className="dac-reasons-bullet-icon" />
                          <span>{bullet}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Disney Wonder */}
            {activeReasonTab === 7 && (
              <div className="dac-reasons-tab-panel fade-in">
                <div className="dac-reasons-row dac-reasons-row--left-content">
                  <div className="dac-reasons-content">
                    <span className="dac-reasons-row-number">03</span>
                    <h3 className="dac-reasons-row-title">
                      Best for Alaska Cruises: Disney Wonder
                    </h3>

                    <p className="dac-reasons-row-desc">
                      If Alaska is on your family's bucket list, Disney Wonder
                      is often the ship you'll encounter. Families seeking
                      natural beauty and adventure frequently choose Disney
                      Wonder.
                    </p>

                    <div className="dac-reasons-pills">
                      {[
                        "Alaska Itineraries",
                        "Intimate Atmosphere",
                        "Family-Friendly Design",
                        "Exceptional Service",
                        "Scenic Viewing Opportunities",
                      ].map((pill, idx) => (
                        <span key={idx} className="dac-reasons-pill">
                          <Globe size={12} style={{ marginRight: "6px" }} />
                          {pill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="dac-reasons-media">
                    <div className="dac-reasons-img-container">
                      <img
                        src={DisneyShipExp8}
                        alt="Disney Wonder Alaska cruise"
                        className="dac-reasons-img"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Disney Magic */}
            {activeReasonTab === 8 && (
              <div className="dac-reasons-tab-panel fade-in">
                <div className="dac-reasons-row dac-reasons-row--right-content">
                  <div className="dac-reasons-media">
                    <div className="dac-reasons-img-container">
                      <img
                        src={DisneyShipExp9}
                        alt="Disney Magic cruise ship"
                        className="dac-reasons-img"
                      />
                    </div>
                  </div>

                  <div className="dac-reasons-content">
                    <span className="dac-reasons-row-number">04</span>
                    <h3 className="dac-reasons-row-title">
                      Best for Classic Disney Fans: Disney Magic
                    </h3>

                    <p className="dac-reasons-row-desc">
                      Disney Magic remains beloved by longtime Disney cruisers
                      and appeals to families who appreciate Disney nostalgia
                      and a more traditional cruise experience.
                    </p>

                    <div className="dac-reasons-bullets">
                      {[
                        "Original Disney Cruise Experience",
                        "Smaller Ship Feel",
                        "Family Entertainment",
                        "Unique Itineraries",
                        "Excellent Service",
                      ].map((bullet, idx) => (
                        <div key={idx} className="dac-reasons-bullet-item">
                          <Anchor
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
          </div>
        </div>
      </section>
      {/* ══ FAMILY-FRIENDLY FEATURES ON EVERY SHIP ═══════════════════════════ */}
      <section className="luc-why-section" id="luc-every-ship-features">
        <div className="luc-why-container">
          {/* LEFT — stacked images */}
          <div className="luc-why-images">
            <div className="luc-why-img-main-wrap" style={{ color: "#fff" }}>
              <img
                src={DisneyShipExp10}
                alt="Family enjoying Disney Cruise onboard experience at sunset"
                className="luc-why-img-main"
              />
              <div className="luc-why-img-overlay"></div>
            </div>
            <div className="luc-why-img-accent-wrap" style={{ color: "#fff" }}>
              <img
                src={DisneyShipExp11}
                alt="Disney Wish pool deck AquaMouse attraction"
                className="luc-why-img-accent"
              />
              <div className="luc-why-img-badge">
                <span className="luc-why-badge-num">6</span>
                <span className="luc-why-badge-text">Key Features</span>
              </div>
            </div>
          </div>

          {/* RIGHT — content */}
          <div className="luc-why-content">
            <h2 className="luc-why-title">
              Family-Friendly Features on Every Disney Ship
            </h2>
            <div className="aac-accent-line aac-accent-white"></div>
            <p className="luc-why-intro">
              Regardless of which ship you choose, you'll find these core
              family-focused features across the entire Disney Cruise Line
              fleet.
            </p>
            <div className="luc-why-features">
              {[
                {
                  num: "01",
                  title: "Rotational Dining",
                  desc: "Families experience multiple themed restaurants during one cruise — with the same attentive serving team following them each evening.",
                },
                {
                  num: "02",
                  title: "Kids Clubs",
                  desc: "Industry-leading youth programs — Oceaneer Club, Oceaneer Lab, Edge, and Vibe — provide supervised, age-appropriate programming for every age group.",
                },
                {
                  num: "03",
                  title: "Character Meet-and-Greets",
                  desc: "Beloved Disney characters appear throughout the voyage — onboard and at private island destinations — with no additional fee required.",
                },
                {
                  num: "04",
                  title: "Broadway-Style Shows",
                  desc: "World-class live entertainment for all ages — original Disney productions performed by professional casts every evening.",
                },
                {
                  num: "05",
                  title: "Family Stateroom Design",
                  desc: "Features like split bathrooms and connecting staterooms make cruising easier, more comfortable, and more practical for families of all sizes.",
                },
                {
                  num: "06",
                  title: "Exceptional Service",
                  desc: "Disney's crew consistently receives outstanding reviews — the hallmark of the brand that sets Disney Cruise Line apart from every competitor.",
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
      {/* ══ SHIP COMPARISON TABLE ═════════════════════════════════════════════ */}
      <section className="Asc-section Asc-bg-white" id="Asc-fleet">
        <div className="Asc-container">
          <div className="Asc-section-header">
            <h2 className="Asc-h2">Disney Cruise Ship Comparison</h2>
            <div className="Asc-accent-line"></div>
          </div>

          <div className="Asc-table-wrapper">
            <table className="Asc-fleet-table">
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Disney Cruise Line</th>
                  <th>Typical Mainstream Cruise</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>Family Focus</strong>
                  </td>
                  <td>Exceptional</td>
                  <td>Good</td>
                </tr>
                <tr>
                  <td>
                    <strong>Entertainment</strong>
                  </td>
                  <td>Industry Leading</td>
                  <td>Moderate to Good</td>
                </tr>
                <tr>
                  <td>
                    <strong>Character Experiences</strong>
                  </td>
                  <td>Unique — Included</td>
                  <td>Not Available</td>
                </tr>
                <tr>
                  <td>
                    <strong>Youth Programs</strong>
                  </td>
                  <td>Industry Leading</td>
                  <td>Good</td>
                </tr>
                <tr>
                  <td>
                    <strong>Family Stateroom Design</strong>
                  </td>
                  <td>Excellent</td>
                  <td>Moderate</td>
                </tr>
                <tr>
                  <td>
                    <strong>Service</strong>
                  </td>
                  <td>Outstanding</td>
                  <td>Varies</td>
                </tr>
                <tr>
                  <td>
                    <strong>Multigenerational Appeal</strong>
                  </td>
                  <td>Exceptional</td>
                  <td>Moderate</td>
                </tr>
                <tr>
                  <td>
                    <strong>Price</strong>
                  </td>
                  <td>Higher</td>
                  <td>Lower</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      {/* ── DOES NEWER ALWAYS MEAN BETTER? ───── */}
      <section
        className="ugt-components-section"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="Asc-container">
          <div className="ugt-components-header">
            <h2 className="adg-c-h2">Does Newer Always Mean Better?</h2>
            <div className="adg-c-accent-line"></div>
          </div>

          {/* MAIN CONTENT */}
          <div className="ugt-components-list">
            <div className="ugt-component-row">
              {/* LEFT IMAGE */}
              <div className="ugt-component-image-wrapper">
                <div className="ugt-component-image-container">
                  <img
                    src={DisneyShipExp12}
                    alt="Disney Cruise ship experience for families"
                    className="ugt-component-image"
                  />
                </div>
              </div>

              {/* RIGHT CONTENT */}
              <div className="ugt-component-content">
                <p className="ugt-component-text">Not necessarily.</p>

                <p className="ugt-component-text">
                  Many travelers assume newer ships automatically provide a
                  better cruise experience.
                </p>

                <p className="ugt-component-text">
                  While Disney Wish and Disney Treasure feature newer technology
                  and design, Disney Magic and Disney Wonder remain favorites
                  among repeat cruisers.
                </p>

                <div className="ugt-questions-box">
                  <span className="ugt-questions-title">
                    Older Ships Often Provide:
                  </span>

                  <ul className="ugt-questions-list">
                    {[
                      "More intimate atmospheres",
                      "Unique itineraries",
                      "Shorter walking distances",
                      "Classic Disney charm",
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
                  The best ship ultimately depends on your family's priorities.
                  <br />
                  <br />
                  Some travelers prefer the newest innovations, while others
                  value the atmosphere, layout, and destinations offered by
                  Disney's classic ships.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="azs-video-section"
        style={{ backgroundColor: "var(--bg-white)" }}
      >
        <div className="azs-container">
          <div className="azs-section-header">
            <h2 className="azs-h2">
              Discover Disney's Most Enchanting Cruise Ship
            </h2>
            <div className="azs-accent-line"></div>
            <p className="azs-video-intro">
              Disney Cruise Line offers a vacation experience unlike any other
              that magically brings families together while providing
              unparalleled kid fun and relaxing adult time — across every ship
              in the fleet.
            </p>
          </div>

          <div className="azs-video-wrapper">
            <div className="azs-video-frame">
              <iframe
                src="https://www.youtube.com/embed/oMJIrnbdpvM"
                title="Introducing The Disney Wish | Disney Cruise Line"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      {/* ══ IS ITINERARY MORE IMPORTANT THAN THE SHIP ═══════════════════════════════════════════════════ */}
      <section className="adg-section" id="adg-itinerary-vs-ship">
        <div className="adg-container">
          <div className="adg-section-header" style={{ marginBottom: "60px" }}>
            <h2 className="adg-h2">
              Is the Itinerary More Important Than the Ship?
            </h2>
            <div className="adg-accent-line"></div>
          </div>

          <div
            className="adg-split-layout"
            style={{ alignItems: "flex-start" }}
          >
            <div className="adg-content-card-side">
              <img
                src={DisneyShipExp13}
                alt="Disney Cruise itinerary destinations and family adventures"
                className="adg-side-image"
                style={{ height: "30vh", border: "1px solid var(--navy)" }}
              />

              <div className="adg-info-card">
                <div className="adg-card-meta">
                  <Compass size={28} />
                  <span className="adg-meta-label">
                    Choosing Your Disney Cruise
                  </span>
                </div>

                <p className="adg-card-lead">Sometimes.</p>

                <div className="adg-card-divider"></div>

                <p className="adg-card-subtext">
                  Many experienced Disney cruisers recommend choosing your
                  destination first before selecting a specific ship.
                </p>

                <p className="adg-card-subtext" style={{ marginTop: "18px" }}>
                  Once you've selected where you want to travel, the best Disney
                  ship for your vacation often becomes much clearer.
                </p>

                <p className="adg-card-subtext" style={{ marginTop: "18px" }}>
                  Many families find that the itinerary matters just as much as
                  the ship itself when planning the perfect Disney cruise.
                </p>
              </div>
            </div>

            <div className="adg-list-side">
              {[
                { title: "The Bahamas", icon: <Anchor size={20} /> },
                { title: "The Caribbean", icon: <Star size={20} /> },
                { title: "Alaska", icon: <Compass size={20} /> },
                { title: "Europe", icon: <Globe size={20} /> },
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
      {/* ══ ANGELA HUGHES AUTHORITY BOX ══════════════════════════════════════ */}
      <section className="Adg-expert-section" id="Asc-expert-insight">
        <div className="Asc-container">
          <div className="Adg-expert-heading">
            <span className="Adg-expert-eyebrow">Luxury Travel Authority</span>
            <h2 className="Adg-expert-title">Meet Angela Hughes</h2>
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
                  CEO · Trips &amp; Ships Luxury Travel
                </p>
                <div className="Adg-expert-name-divider"></div>
                <p className="Adg-expert-countries">
                  <MapPin size={14} />
                  121+ Countries Visited
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
              Everything you need to know about choosing the best Disney Cruise
              ship for your family.
            </p>
          </div>
          <FAQ />
        </div>
      </section>
      {/* ══ CTA ═══════════════════════════════════════════════════════════════ */}
      <section className="Asc-help-section">
        <div className="Asc-help-bg-wrap">
          <img
            src={DisneyShipcta}
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
                  Disney Cruise Line Ship Guide
                </span>
                <h2 className="Asc-help-h2">
                  The Best Disney Ship <br /> Is the One Right for Your Family
                </h2>
                <div className="Asc-help-accent"></div>
              </div>

              <div className="Asc-help-grid">
                <div className="Asc-help-info">
                  <p className="Asc-help-intro">
                    The best Disney Cruise ship for families depends on what
                    your family values most.
                  </p>
                  <p className="Asc-help-intro">
                    If you're seeking the newest attractions and immersive
                    experiences, Disney Wish may be the ideal choice. If you're
                    planning a multigenerational vacation, Disney Fantasy
                    remains one of the best ships in the fleet.
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
                      Adventure-loving travelers may gravitate toward Disney
                      Treasure, while Alaska explorers often prefer Disney
                      Wonder. Classic Disney fans continue to return to Disney
                      Magic for its timeless charm.
                      <br />
                      <br />
                      The good news is that every Disney ship offers the
                      family-focused service, entertainment, accommodations, and
                      Disney magic that have made Disney Cruise Line one of the
                      most beloved cruise brands in the world.
                      <br />
                      <br />
                      <strong>
                        Because the best Disney cruise ship isn't necessarily
                        the newest ship. It's the one that helps your family
                        create unforgettable memories together.
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
                      Find Your Perfect Disney Ship
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>

                <div className="Asc-help-list-box">
                  <h3 className="Asc-help-list-title">
                    Disney Ship Quick Guide:
                  </h3>
                  <ul className="Asc-help-bullets">
                    {[
                      "Disney Wish — Best Overall & For Young Children",
                      "Disney Fantasy — Best for Multigenerational",
                      "Disney Treasure — Best for Adventure Lovers",
                      "Disney Dream — Best for First-Timers",
                      "Disney Wonder — Best for Alaska",
                      "Disney Magic — Best for Classic Disney Fans",
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
                      Contact Trips &amp; Ships Luxury Travel to get expert
                      guidance on the right Disney ship and itinerary for your
                      family.
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

export default BestDisneyCruiseShipForFamilies;
