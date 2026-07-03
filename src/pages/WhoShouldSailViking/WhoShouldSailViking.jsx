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
  Ship,
  Waves,
  Mountain,
  Quote,
  X,
  Compass,
  Landmark,
} from "lucide-react";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela.jpeg";
import { Helmet } from "react-helmet-async";
import HeroImage1 from "../../assets/WhoShouldSailViking/viking-cruise-eidfjord-norway-fjord.jpg";
import HeroImage2 from "../../assets/WhoShouldSailViking/viking-Halong-Bay-Vietnam.jpg";
import HeroImage3 from "../../assets/WhoShouldSailViking/Sydney-Australia.jpg";

import VikingExp1 from "../../assets/WhoShouldSailViking/viking-infinity-pool-ocean-view.jpg";
import VikingExp2 from "../../assets/WhoShouldSailViking/viking-expedition-cruise-antarctica-suite-view.jpg";
import VikingExp3 from "../../assets/WhoShouldSailViking/Budapest-Hungary.jpg";
import VikingExp4 from "../../assets/WhoShouldSailViking/Viking-Aquavit-Terrace.jpg";
import VikingExp5 from "../../assets/WhoShouldSailViking/Guests-in-Antarctica3.jpg";
import VikingExp6 from "../../assets/WhoShouldSailViking/Viking-family-experience.jpg";
import VikingExp7 from "../../assets/WhoShouldSailViking/viking-the-restaurant-ocean-view-dining.jpg";

import VikingExp8 from "../../assets/WhoShouldSailViking/viking-multiple-dining-venues-restaurants.jpg";
import VikingExp9 from "../../assets/WhoShouldSailViking/viking-aquavit-terrace-outdoor-dining-budapest.jpg";
import VikingExp10 from "../../assets/WhoShouldSailViking/viking-main-pool-deck-loungers.jpg";
import VikingExp11 from "../../assets/WhoShouldSailViking/viking-suite-ocean-view-accommodation.jpg";

import Vikingriver from "../../assets/WhoShouldSailViking/viking-expedition-ship-welland-canal.jpg";
import Vikingocean from "../../assets/WhoShouldSailViking/viking-Tromso-Norway.jpg";
import Vikinganta from "../../assets/WhoShouldSailViking/Expedition-Ship-Antarctica.jpg";
import Vikingcta from "../../assets/WhoShouldSailViking/viking-river-cruise-exterior-st-louis.jpg";

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
        "Luxury travel experts helping travelers determine whether Viking River, Ocean, and Expedition Cruises are the right fit for them.",
    },
    {
      "@type": "WebPage",
      "@id": "https://www.tripsandships.com/who-should-sail-viking",
      url: "https://www.tripsandships.com/who-should-sail-viking",
      name: "Who Should Sail Viking? | Is Viking Cruises Right for You?",
      description:
        "Wondering if Viking Cruises is right for you? Discover which travelers benefit most from Viking River, Ocean, and Expedition Cruises, and who may prefer a different cruise experience.",
      isPartOf: { "@id": "https://www.tripsandships.com/#website" },
      about: [{ "@type": "Organization", name: "Viking Cruises" }],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.tripsandships.com/who-should-sail-viking#breadcrumb",
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
          name: "Viking Cruises",
          item: "https://www.tripsandships.com/viking-cruises",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Who Should Sail Viking?",
          item: "https://www.tripsandships.com/who-should-sail-viking",
        },
      ],
    },
    {
      "@type": "ItemList",
      "@id": "https://www.tripsandships.com/who-should-sail-viking#itemlist",
      name: "Who Should Sail Viking",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Couples" },
        { "@type": "ListItem", position: 2, name: "Retirees" },
        { "@type": "ListItem", position: 3, name: "Empty Nesters" },
        { "@type": "ListItem", position: 4, name: "Lifelong Learners" },
        { "@type": "ListItem", position: 5, name: "Experienced Travelers" },
        { "@type": "ListItem", position: 6, name: "Solo Travelers" },
      ],
    },
    {
      "@type": "Audience",
      "@id": "https://www.tripsandships.com/who-should-sail-viking#audience",
      audienceType:
        "Couples, Retirees, Empty Nesters, Lifelong Learners, Experienced Travelers, Solo Travelers, River Cruise Enthusiasts, Adventure Travelers",
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.tripsandships.com/who-should-sail-viking#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Who is Viking Cruises designed for?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Viking is designed for adult travelers who value culture, history, education, and destination-focused travel.",
          },
        },
        {
          "@type": "Question",
          name: "Is Viking good for retirees?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Retirees are one of Viking's largest and most loyal customer groups.",
          },
        },
        {
          "@type": "Question",
          name: "Is Viking good for couples?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. The adult-only atmosphere and destination-focused experiences make Viking very popular with couples.",
          },
        },
        {
          "@type": "Question",
          name: "Is Viking good for solo travelers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Many solo travelers appreciate Viking's organized excursions and welcoming environment.",
          },
        },
        {
          "@type": "Question",
          name: "Is Viking suitable for families?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Viking is designed for adults and generally requires guests to be at least 18 years old.",
          },
        },
        {
          "@type": "Question",
          name: "Is Viking considered luxury travel?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Viking is typically categorized as premium or upper-premium, offering many luxury-style experiences.",
          },
        },
        {
          "@type": "Question",
          name: "Who should choose Viking River Cruises?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Travelers interested in culture, history, scenic sailing, and European destinations often enjoy Viking River Cruises.",
          },
        },
        {
          "@type": "Question",
          name: "Who should choose Viking Ocean Cruises?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Travelers seeking elegant ships, global destinations, and a relaxed atmosphere often prefer Viking Ocean Cruises.",
          },
        },
        {
          "@type": "Question",
          name: "Who should choose Viking Expedition Cruises?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Adventure travelers, wildlife enthusiasts, photographers, and lifelong learners are ideal candidates.",
          },
        },
        {
          "@type": "Question",
          name: "Who should avoid Viking?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Families with children, nightlife seekers, and travelers looking for water parks or resort-style attractions may prefer other cruise lines.",
          },
        },
        {
          "@type": "Question",
          name: "Is a Viking cruise a good fit for first-time cruisers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, especially for travelers who are hesitant about massive mega-ships. Viking's smaller capacity, quiet atmosphere, and intuitive inclusions provide an easy, stress-free introduction to cruising.",
          },
        },
        {
          "@type": "Question",
          name: "Are Viking Cruises accessible for guests with limited mobility?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Viking Ocean and Expedition ships are highly accessible with wheelchair-friendly elevators, ramps, and staterooms. River cruises can be more challenging due to steep gangways, cobblestone streets, and launderettes/gangways where guests must walk across adjacent ships to reach the shore.",
          },
        },
        {
          "@type": "Question",
          name: "What is the average age of a traveler on a Viking Cruise?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The average age of a Viking passenger is typically 55 and older, drawing a demographic of retirees, empty nesters, and seasoned professionals who enjoy cultural enrichment and quiet relaxation.",
          },
        },
        {
          "@type": "Question",
          name: "Is Viking a good fit for business travelers or working professionals?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "While Viking ships have excellent complimentary Wi-Fi and plenty of quiet corners to check emails, they are designed primarily for leisure and cultural exploration, making them best suited for professionals looking to disconnect.",
          },
        },
        {
          "@type": "Question",
          name: "Is Viking Cruises a good fit for travelers who get seasick?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Viking River Cruises are perfect for those prone to motion sickness, as river waters are extremely calm with virtually no ship movement. For oceans, Viking ships feature advanced stabilization technology, though travelers should opt for mid-ship staterooms on lower decks to minimize movement.",
          },
        },
      ],
    },
    {
      "@type": "Review",
      "@id": "https://www.tripsandships.com/who-should-sail-viking#review",
      itemReviewed: {
        "@type": "TravelAction",
        name: "Viking Cruises",
      },
      reviewBody:
        "Viking isn't trying to be everything to everyone. The company has built its reputation by serving couples, retirees, solo travelers, empty nesters, and lifelong learners exceptionally well through culturally immersive, destination-focused travel.",
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
    {
      "@type": "TouristTrip",
      "@id": "https://www.tripsandships.com/who-should-sail-viking#touristtrip",
      name: "Viking Cruises — Who It's Built For",
      description:
        "Viking river, ocean, and expedition cruises designed for adult travelers who value exploration, culture, history, and meaningful travel experiences.",
      touristType: [
        "Couples",
        "Retirees",
        "Empty Nesters",
        "Lifelong Learners",
        "Experienced Travelers",
        "Solo Travelers",
        "River Cruise Enthusiasts",
        "Adventure Travelers",
      ],
    },
  ],
};

const travelerTypeData = [
  {
    key: "river",
    image: Vikingriver,
    imageAlt: "Viking River Cruise sailing through Europe",
    eyebrow: "River Cruises",
    icon: <Landmark size={18} />,
    title: "Choose Viking River Cruises If You Want:",
    items: [
      "Historic European cities",
      "Scenic sailing",
      "Smaller ships",
      "Easy destination access",
      "Cultural immersion",
    ],
  },
  {
    key: "ocean",
    image: Vikingocean,
    imageAlt: "Viking Ocean Cruise ship at sea",
    eyebrow: "Ocean Cruises",
    icon: <Ship size={18} />,
    title: "Choose Viking Ocean Cruises If You Want:",
    items: [
      "Global destinations",
      "Elegant ships",
      "More sea travel",
      "Relaxed luxury",
      "Adult-only cruising",
    ],
  },
  {
    key: "expedition",
    image: Vikinganta,
    imageAlt: "Viking Expedition ship exploring remote destinations",
    eyebrow: "Expedition Cruises",
    icon: <Compass size={18} />,
    title: "Choose Viking Expedition Cruises If You Want:",
    items: [
      "Adventure",
      "Wildlife encounters",
      "Remote destinations",
      "Scientific exploration",
      "Once-in-a-lifetime experiences",
    ],
  },
];

// ─── FAQ COMPONENT ───────────────────────────────────────────────────────────
function FAQ() {
  const [open, setOpen] = useState(null);

  const faqData = [
    {
      q: "Who is Viking Cruises designed for?",
      a: "Viking is designed for adult travelers who value culture, history, education, and destination-focused travel.",
    },
    {
      q: "Is Viking good for retirees?",
      a: "Yes. Retirees are one of Viking's largest and most loyal customer groups.",
    },
    {
      q: "Is Viking good for couples?",
      a: "Absolutely. The adult-only atmosphere and destination-focused experiences make Viking very popular with couples.",
    },
    {
      q: "Is Viking good for solo travelers?",
      a: "Many solo travelers appreciate Viking's organized excursions and welcoming environment.",
    },
    {
      q: "Is Viking suitable for families?",
      a: "No. Viking is designed for adults and generally requires guests to be at least 18 years old.",
    },
    {
      q: "Is Viking considered luxury travel?",
      a: "Viking is typically categorized as premium or upper-premium, offering many luxury-style experiences.",
    },
    {
      q: "Who should choose Viking River Cruises?",
      a: "Travelers interested in culture, history, scenic sailing, and European destinations often enjoy Viking River Cruises.",
    },
    {
      q: "Who should choose Viking Ocean Cruises?",
      a: "Travelers seeking elegant ships, global destinations, and a relaxed atmosphere often prefer Viking Ocean Cruises.",
    },
    {
      q: "Who should choose Viking Expedition Cruises?",
      a: "Adventure travelers, wildlife enthusiasts, photographers, and lifelong learners are ideal candidates.",
    },
    {
      q: "Who should avoid Viking?",
      a: "Families with children, nightlife seekers, and travelers looking for water parks or resort-style attractions may prefer other cruise lines.",
    },
    {
      q: "Is a Viking cruise a good fit for first-time cruisers?",
      a: "Yes, especially for travelers who are hesitant about massive mega-ships. Viking's smaller capacity, quiet atmosphere, and intuitive inclusions provide an easy, stress-free introduction to cruising.",
    },
    {
      q: "Are Viking Cruises accessible for guests with limited mobility?",
      a: "Viking Ocean and Expedition ships are highly accessible with wheelchair-friendly elevators, ramps, and staterooms. River cruises can be more challenging due to steep gangways, cobblestone streets, and launderettes/gangways where guests must walk across adjacent ships to reach the shore.",
    },
    {
      q: "What is the average age of a traveler on a Viking Cruise?",
      a: "The average age of a Viking passenger is typically 55 and older, drawing a demographic of retirees, empty nesters, and seasoned professionals who enjoy cultural enrichment and quiet relaxation.",
    },
    {
      q: "Is Viking a good fit for business travelers or working professionals?",
      a: "While Viking ships have excellent complimentary Wi-Fi and plenty of quiet corners to check emails, they are designed primarily for leisure and cultural exploration, making them best suited for professionals looking to disconnect.",
    },
    {
      q: "Is Viking Cruises a good fit for travelers who get seasick?",
      a: "Viking River Cruises are perfect for those prone to motion sickness, as river waters are extremely calm with virtually no ship movement. For oceans, Viking ships feature advanced stabilization technology, though travelers should opt for mid-ship staterooms on lower decks to minimize movement.",
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
const WhoShouldSailViking = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [readMore, setReadMore] = useState(false);

  const [hovered, setHovered] = useState(null);
  const images = [HeroImage1, HeroImage2, HeroImage3];
  const [activeReasonTab, setActiveReasonTab] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % (images.length || 1));
    }, 6000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="Asc-page-wrapper">
      <Helmet>
        <title>
          Who Should Sail Viking? | Is Viking Cruises Right for You?
        </title>
        <meta name="title" content="Who Should Sail Viking?" />
        <meta
          name="description"
          content="Wondering if Viking Cruises is right for you? Discover which travelers benefit most from Viking River, Ocean, and Expedition Cruises, and who may prefer a different cruise experience."
        />
        <meta
          property="og:title"
          content="Who Should Sail Viking? | Is Viking Cruises Right for You?"
        />
        <meta
          property="og:description"
          content="Discover which travelers benefit most from Viking River, Ocean, and Expedition Cruises, and who may prefer a different cruise experience."
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content="https://www.tripsandships.com/who-should-sail-viking"
        />
        <link
          rel="canonical"
          href="https://www.tripsandships.com/who-should-sail-viking"
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
          <h1>
            Who Should Sail <br /> Viking?
          </h1>
          <p>
            Not every cruise line is designed for every traveler. Some cruise
            brands focus on families, nightlife, or onboard attractions — Viking
            takes a different approach.
          </p>
          <p>
            Its ships, itineraries, and onboard experiences are designed for
            travelers who value exploration, culture, history, and meaningful
            travel experiences.
          </p>
          {readMore && (
            <>
              <p>
                If you're considering a Viking River Cruise, Ocean Cruise, or
                Expedition Cruise, understanding who Viking is built for can
                help you decide whether it's the right fit for your next
                vacation.
              </p>
              <p>
                Because the best travelers aren't always looking for the biggest
                ship — they're looking for the most rewarding experience.
              </p>
              <p>
                At Trips &amp; Ships Luxury Travel, we help travelers match
                their personal travel style to the right Viking voyage.
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

      {/* ══ WHAT TYPE OF TRAVELER IS VIKING DESIGNED FOR ════════════════════ */}
      <section
        className="ugt-components-section"
        id="ugt-components"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="Asc-container">
          <div className="ugt-components-header">
            <h2 className="adg-c-h2">
              What Type of Traveler Is <br /> Viking Designed For?
            </h2>
            <div className="adg-c-accent-line"></div>
          </div>

          <div className="ugt-components-list">
            <div className="ugt-component-row">
              {/* LEFT IMAGE */}
              <div className="ugt-component-image-wrapper">
                <div className="ugt-component-image-container">
                  <img
                    src={VikingExp1}
                    alt="Viking cruise guests enjoying destination-focused travel"
                    className="ugt-component-image"
                  />
                </div>
              </div>

              {/* RIGHT CONTENT */}
              <div className="ugt-component-content">
                <p className="ugt-component-text">
                  At its core, Viking is designed for travelers who believe the
                  destination is the most important part of the journey.
                </p>
                <p className="ugt-component-text">
                  Rather than focusing on onboard attractions, Viking focuses on
                  helping guests connect with the places they visit through
                  comfortable luxury, smaller ships, and meaningful exploration.
                </p>

                <div className="ugt-questions-box">
                  <span className="ugt-questions-title">
                    Viking Appeals to Travelers Who Prefer:
                  </span>
                  <ul className="ugt-questions-list">
                    {[
                      "Cultural Experiences",
                      "Historical Destinations",
                      "Educational Enrichment",
                      "Smaller Ships",
                      "Relaxed Atmospheres",
                      "Adult-Focused Travel",
                      "Meaningful Exploration",
                      "Comfortable Luxury",
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
        style={{ backgroundColor: "var(--bg-white)" }}
      >
        <div className="azs-container">
          <div className="azs-section-header">
            <h2 className="azs-h2">See Why So Many Travelers Choose Viking</h2>

            <div className="azs-accent-line"></div>

            <p className="azs-video-intro">
              Viking Longships showcase innovative engineering, streamlined
              Scandinavian design, and understated elegance built for
              destination-focused travel.
            </p>
          </div>

          <div className="azs-video-wrapper">
            <div className="azs-video-frame">
              <iframe
                src="https://www.youtube.com/embed/_0Xy3o7r8yY"
                title="Viking Longships River Cruise Experience"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* ══ CORE TRAVELER TYPES ═══════════════════════════════════════════ */}
      <section className="adg-c-section adg-c-bg-soft" id="adg-viking-reviews">
        <div className="adg-c-container">
          <div className="adg-c-section-header">
            <span className="adg-c-eyebrow">Who Sails Viking</span>

            <h2 className="adg-c-h2">
              The Traveler Types Who Love <br /> Viking Cruises Most
            </h2>

            <div className="adg-c-accent-line"></div>

            <p className="Asc-section-intro">
              Several traveler types consistently find Viking to be an excellent
              fit. These groups make up the majority of Viking's most loyal and
              satisfied guests.
            </p>
          </div>

          <div className="adg-c-venues-grid1">
            {[
              {
                id: 1,
                eyebrow: "Traveler Type #1",
                name: "Couples",
                highlight: "One of Viking's Largest, Most Loyal Groups",
                items: [
                  "Adult-Only Atmosphere",
                  "Romantic Destinations",
                  "Relaxed Environment",
                  "Elegant, Intimate Dining",
                  "Shared Cultural Exploration",
                ],
                callout:
                  "For couples seeking a sophisticated and enriching vacation, Viking is often an excellent choice.",
              },
              {
                id: 2,
                eyebrow: "Traveler Type #2",
                name: "Retirees",
                highlight: "Among Viking's Most Common Guests",
                items: [
                  "Comfortable, Unhurried Pace",
                  "Educational Opportunities",
                  "Included Excursions",
                  "Smaller Ships, Fewer Crowds",
                  "Quiet, Adult Environment",
                ],
                callout:
                  "Many retirees choose Viking because it aligns with their desire for deeper, more rewarding travel experiences.",
              },
              {
                id: 3,
                eyebrow: "Traveler Type #3",
                name: "Empty Nesters",
                highlight: "A Natural Fit for the Next Chapter",
                items: [
                  "More Sophisticated Travel",
                  "Destination Immersion",
                  "Relaxed Onboard Atmosphere",
                  "Cultural Enrichment",
                  "Exceptional Service",
                ],
                callout:
                  "Many guests discover Viking during this stage of life and become repeat travelers.",
              },
              {
                id: 4,
                eyebrow: "Traveler Type #4",
                name: "Lifelong Learners",
                highlight: "Education Is a Defining Characteristic",
                items: [
                  "History & Ancient Civilizations",
                  "Geography & Landscapes",
                  "Art & Architecture",
                  "Local Culture",
                  "Science & Nature (Expeditions)",
                ],
                callout:
                  "If learning is an important part of your travel experience, Viking excels in this area.",
              },
              {
                id: 5,
                eyebrow: "Traveler Type #5",
                name: "Experienced Travelers",
                highlight: "A Deeper Approach to Exploration",
                items: [
                  "More Meaningful Experiences",
                  "Carefully Curated Itineraries",
                  "Expert Guidance",
                  "Unique Access to Destinations",
                ],
                callout:
                  "Many seasoned travelers view Viking as a natural progression from traditional cruising.",
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

      {/* ══ MORE TRAVELER TYPES — TABS ══════════════════════════════════════ */}
      <section
        className="dac-reasons-section"
        style={{ backgroundColor: "var(--bg-white)" }}
      >
        <div className="dac-reasons-container">
          <div className="dac-reasons-header">
            <span className="dac-reasons-eyebrow">More Travelers Who Fit</span>
            <h2 className="dac-reasons-title">
              Other Travelers Who Thrive on Viking
            </h2>
            <div className="dac-reasons-accent"></div>
            <p className="dac-reasons-lead">
              Beyond its core audience, Viking also resonates strongly with
              several other types of travelers seeking a specific kind of
              experience.
            </p>
          </div>

          <div className="dac-reasons-tabs-nav">
            <button
              className={`dac-reasons-tab-btn ${
                activeReasonTab === 5 ? "active" : ""
              }`}
              onClick={() => setActiveReasonTab(5)}
            >
              <span className="dac-reasons-tab-icon-wrap">
                <Users size={18} />
              </span>
              <div className="dac-reasons-tab-text-wrap">
                <span className="dac-reasons-tab-num">01</span>
                <span className="dac-reasons-tab-title">Solo Travelers</span>
              </div>
            </button>

            <button
              className={`dac-reasons-tab-btn ${
                activeReasonTab === 6 ? "active" : ""
              }`}
              onClick={() => setActiveReasonTab(6)}
            >
              <span className="dac-reasons-tab-icon-wrap">
                <Waves size={18} />
              </span>
              <div className="dac-reasons-tab-text-wrap">
                <span className="dac-reasons-tab-num">02</span>
                <span className="dac-reasons-tab-title">
                  River Cruise Enthusiasts
                </span>
              </div>
            </button>

            <button
              className={`dac-reasons-tab-btn ${
                activeReasonTab === 7 ? "active" : ""
              }`}
              onClick={() => setActiveReasonTab(7)}
            >
              <span className="dac-reasons-tab-icon-wrap">
                <Star size={18} />
              </span>
              <div className="dac-reasons-tab-text-wrap">
                <span className="dac-reasons-tab-num">03</span>
                <span className="dac-reasons-tab-title">
                  Luxury Travelers Seeking Substance
                </span>
              </div>
            </button>

            <button
              className={`dac-reasons-tab-btn ${
                activeReasonTab === 8 ? "active" : ""
              }`}
              onClick={() => setActiveReasonTab(8)}
            >
              <span className="dac-reasons-tab-icon-wrap">
                <Mountain size={18} />
              </span>
              <div className="dac-reasons-tab-text-wrap">
                <span className="dac-reasons-tab-num">04</span>
                <span className="dac-reasons-tab-title">
                  Adventure Travelers
                </span>
              </div>
            </button>
          </div>

          <div className="dac-reasons-tabs-content">
            {/* Tab 5 — Solo Travelers */}
            {activeReasonTab === 5 && (
              <div className="dac-reasons-tab-panel fade-in">
                <div className="dac-reasons-row dac-reasons-row--left-content">
                  <div className="dac-reasons-content">
                    <span className="dac-reasons-row-number">01</span>
                    <h3 className="dac-reasons-row-title">Solo Travelers</h3>

                    <p className="dac-reasons-row-desc">
                      Although Viking is often associated with couples, many
                      solo travelers enjoy the experience and find it an
                      excellent choice for independent exploration.
                    </p>

                    <div className="dac-reasons-includes-grid">
                      {[
                        "Organized Excursions",
                        "Comfortable Atmosphere",
                        "Shared Interests with Fellow Guests",
                        "Safe, Guided Exploration",
                      ].map((item, idx) => (
                        <div key={idx} className="dac-reasons-include-tag">
                          <Check size={12} className="dac-reasons-check-icon" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="dac-reasons-media">
                    <div className="dac-reasons-img-container">
                      <img
                        src={VikingExp2}
                        alt="Solo traveler enjoying Viking river cruise"
                        className="dac-reasons-img"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 6 — River Cruise Enthusiasts */}
            {activeReasonTab === 6 && (
              <div className="dac-reasons-tab-panel fade-in">
                <div className="dac-reasons-row dac-reasons-row--right-content">
                  <div className="dac-reasons-media">
                    <div className="dac-reasons-img-container">
                      <img
                        src={VikingExp3}
                        alt="River cruise enthusiast scenic European sailing"
                        className="dac-reasons-img"
                      />
                    </div>
                  </div>

                  <div className="dac-reasons-content">
                    <span className="dac-reasons-row-number">02</span>
                    <h3 className="dac-reasons-row-title">
                      River Cruise Enthusiasts
                    </h3>

                    <p className="dac-reasons-row-desc">
                      Travelers interested in river cruising often find Viking
                      particularly appealing — and it remains one of the most
                      recognized names in river cruising worldwide.
                    </p>

                    <div className="dac-reasons-bullets">
                      {[
                        "Scenic Sailing Past Castles & Vineyards",
                        "Convenient Access to City Centers",
                        "Deeper Cultural Immersion",
                        "Intimate, Smaller-Ship Experience",
                      ].map((bullet, idx) => (
                        <div key={idx} className="dac-reasons-bullet-item">
                          <Check
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

            {/* Tab 7 — Luxury Travelers Seeking Substance */}
            {activeReasonTab === 7 && (
              <div className="dac-reasons-tab-panel fade-in">
                <div className="dac-reasons-row dac-reasons-row--left-content">
                  <div className="dac-reasons-content">
                    <span className="dac-reasons-row-number">03</span>
                    <h3 className="dac-reasons-row-title">
                      Luxury Travelers Seeking Substance
                    </h3>

                    <p className="dac-reasons-row-desc">
                      Some luxury travelers prefer meaningful experiences over
                      flashy amenities. Viking offers a refined travel
                      experience without being overly formal or extravagant.
                    </p>

                    <div className="dac-reasons-pills">
                      {[
                        "Service Over Spectacle",
                        "Culture Over Crowds",
                        "Discovery Over Entertainment",
                        "Experiences Over Attractions",
                        "Elegance Over Excess",
                      ].map((pill, idx) => (
                        <span key={idx} className="dac-reasons-pill">
                          <Star size={12} style={{ marginRight: "6px" }} />
                          {pill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="dac-reasons-media">
                    <div className="dac-reasons-img-container">
                      <img
                        src={VikingExp4}
                        alt="Luxury travelers enjoying refined Viking cruise experience"
                        className="dac-reasons-img"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 8 — Adventure Travelers */}
            {activeReasonTab === 8 && (
              <div className="dac-reasons-tab-panel fade-in">
                <div className="dac-reasons-row dac-reasons-row--right-content">
                  <div className="dac-reasons-media">
                    <div className="dac-reasons-img-container">
                      <img
                        src={VikingExp5}
                        alt="Adventure travelers on Viking Expedition Cruise in Antarctica"
                        className="dac-reasons-img"
                      />
                    </div>
                  </div>

                  <div className="dac-reasons-content">
                    <span className="dac-reasons-row-number">04</span>
                    <h3 className="dac-reasons-row-title">
                      Adventure Travelers
                    </h3>

                    <p className="dac-reasons-row-desc">
                      Viking Expedition Cruises attract travelers interested in
                      exploration and discovery — combining adventure with
                      comfort in a way few other cruise lines can match.
                    </p>

                    <div
                      className="dac-reasons-callout"
                      style={{ marginTop: "20px" }}
                    >
                      <Quote size={18} className="dac-reasons-callout-icon" />
                      <p>
                        Ideal for travelers interested in Antarctica, Arctic
                        exploration, wildlife encounters, photography, remote
                        destinations, and scientific discovery.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ══ WHO MIGHT NOT ENJOY VIKING ══════════════════════════════ */}
      <section
        className="Leg-section"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="Leg-container">
          {/* Header */}
          <div className="Leg-header">
            <h2 className="Leg-title">Who Might Not Enjoy Viking?</h2>

            <div className="adg-c-accent-line"></div>

            <p className="Leg-subtitle">
              While Viking receives excellent reviews, it is not the right
              cruise line for every traveler.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="Leg-grid">
            {[
              {
                id: 1,
                accent: "blue",
                icon: Users,
                title: "Families with Young Children",
                description:
                  "Viking is adults-only, and guests generally must be at least 18 years old. There are no kids clubs, children's entertainment, character experiences, or family attractions.",
                pills: ["Adults-Only", "18+ Required", "No Kids Clubs"],
                highlight:
                  "Families often find better options with family-focused cruise lines.",
              },
              {
                id: 2,
                accent: "gold",
                icon: X,
                title: "Travelers Seeking Nightlife",
                description:
                  "If your ideal cruise includes nightclubs, casinos, parties, or late-night entertainment, Viking may feel too quiet.",
                pills: ["No Nightclubs", "No Casinos", "Quiet by Design"],
                highlight:
                  "The atmosphere is intentionally relaxed and sophisticated.",
              },
              {
                id: 3,
                accent: "green",
                icon: Waves,
                title: "Attraction-Focused Travelers",
                description:
                  "Viking does not offer water slides, surf simulators, roller coasters, or large-scale attractions.",
                pills: ["No Water Slides", "No Attractions", "No Arcades"],
                highlight:
                  "Travelers seeking resort-style experiences may prefer larger mainstream cruise ships.",
              },
              {
                id: 4,
                accent: "purple",
                icon: Compass,
                title: "Budget Travelers",
                description:
                  "Viking is generally priced above many mainstream cruise lines. Although the fare includes numerous amenities, travelers focused primarily on the lowest price may prefer other options.",
                pills: ["Premium Pricing", "Value-Focused Fare"],
                highlight:
                  "The fare includes many amenities that are extra elsewhere.",
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

          <div style={{ marginTop: "25px" }}>
            <p
              className="Asc-card-subtext"
              style={{ color: "var(--navy)", textAlign: "center" }}
            >
              Viking prioritizes destinations, learning, relaxation, and
              exploration rather than game shows, theme attractions, or
              high-energy entertainment. The onboard experience is intentionally
              quieter and more thoughtful.
            </p>
          </div>
        </div>
      </section>

      {/* ══ IMAGE GALLERY ════════════════════════════════════════════════════ */}
      <section className="dfg-gallery-section" id="dfg-gallery">
        <div className="dfg-gallery-container">
          <div className="dfg-gallery-header">
            <h2 className="dfg-gallery-title">
              What Life Onboard a Viking Cruise Looks Like
            </h2>

            <div className="dfg-gallery-accent"></div>

            <p className="dfg-gallery-intro">
              Elegant Spaces Designed for Thoughtful Travel
            </p>

            <p className="dfg-gallery-description">
              From destination-focused dining and outdoor gathering spaces to
              luxurious accommodations and relaxing public areas, Viking ships
              are thoughtfully designed for travelers who value comfort,
              culture, and exploration.
            </p>
          </div>

          <div className="dfg-gallery-mosaic">
            {/* Multiple Dining Venues */}
            <div
              className="dfg-gallery-item dfg-gallery-large"
              style={{ color: "#fff" }}
            >
              <img
                src={VikingExp8}
                alt="Multiple dining venues and restaurants aboard a Viking ship"
                className="dfg-gallery-img"
              />

              <div className="dfg-gallery-overlay">
                <span className="dfg-gallery-caption">
                  Multiple Dining Venues — Destination-Inspired Cuisine
                </span>
              </div>
            </div>

            {/* Aquavit Terrace */}
            <div
              className="dfg-gallery-item dfg-gallery-tall"
              style={{ color: "#fff" }}
            >
              <img
                src={VikingExp9}
                alt="Aquavit Terrace outdoor dining area on a Viking cruise"
                className="dfg-gallery-img"
              />

              <div className="dfg-gallery-overlay">
                <span className="dfg-gallery-caption">
                  Aquavit Terrace — Scenic Outdoor Dining
                </span>
              </div>
            </div>

            {/* Main Pool Deck */}
            <div
              className="dfg-gallery-item dfg-gallery-wide"
              style={{ color: "#fff" }}
            >
              <img
                src={VikingExp10}
                alt="Main pool deck with loungers on a Viking cruise ship"
                className="dfg-gallery-img"
              />

              <div className="dfg-gallery-overlay">
                <span className="dfg-gallery-caption">
                  Main Pool Deck — Relaxation at Sea
                </span>
              </div>
            </div>

            {/* Suite Accommodation */}
            <div
              className="dfg-gallery-item dfg-gallery-square"
              style={{ color: "#fff" }}
            >
              <img
                src={VikingExp11}
                alt="Ocean-view suite accommodation aboard a Viking cruise"
                className="dfg-gallery-img"
              />

              <div className="dfg-gallery-overlay">
                <span className="dfg-gallery-caption">
                  Ocean-View Suites — Scandinavian Luxury
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRAVELERS WHO PREFER CONSTANT ENTERTAINMENT */}
      <section
        className="afc-section afc-bg-white"
        id="travelers-who-prefer-constant-entertainment"
      >
        <div className="afc-container">
          <div className="afc-section-header">
            <h2 className="afc-h2">
              Travelers Who Prefer Constant Entertainment
            </h2>
            <div className="afc-accent-line"></div>
          </div>

          <div className="afc-split-layout">
            {/* Left Content */}
            <div className="afc-content-side">
              <div className="afc-insight-card">
                <p className="afc-lead-text">
                  <strong>
                    Viking is designed for travelers who value meaningful
                    experiences over nonstop onboard activities.
                  </strong>
                </p>

                <div className="afc-why-box">
                  <span className="afc-why-title">Viking Prioritizes</span>

                  <p className="afc-why-text">
                    Destination-focused travel, cultural enrichment, relaxation,
                    and exploration rather than high-energy entertainment.
                  </p>
                </div>
              </div>

              <div className="afc-recommendations-wrapper">
                <h3 className="afc-sub-title">Viking Prioritizes:</h3>

                <div className="afc-rec-grid">
                  {[
                    "Destinations",
                    "Learning",
                    "Relaxation",
                    "Exploration",
                  ].map((item, i) => (
                    <div key={i} className="afc-rec-card">
                      <div className="afc-rec-icon">
                        <Check size={18} />
                      </div>

                      <span className="afc-rec-label">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="afc-media-side">
              <div className="afc-image-wrapper">
                <img
                  src={VikingExp6}
                  alt="Guests enjoying a relaxing Viking cruise experience"
                  className="afc-showcase-image"
                />
              </div>

              <div className="afc-strategy-box">
                <p className="afc-strategy-lead">
                  Rather than focusing on traditional cruise attractions, Viking
                  offers a quieter and more thoughtful onboard atmosphere.
                </p>

                <div className="afc-strategy-tags">
                  {[
                    "Game Shows",
                    "Theme Attractions",
                    "High-Energy Entertainment",
                  ].map((tag, idx) => (
                    <span key={idx} className="afc-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="adg-section"
        id="which-viking-cruise-is-right-for-you"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        {" "}
        <div className="adg-container">
          {" "}
          {/* Header */}{" "}
          <div className="adg-header">
            {" "}
            <h2 className="adg-h2">
              Which Viking Cruise Is <br /> Right for You?
            </h2>{" "}
            <div className="adg-accent-line"></div>{" "}
            <p className="adg-intro">
              {" "}
              Viking offers three distinct cruise experiences. Whether you're
              looking for cultural immersion, elegant ocean travel, or
              expedition-style adventure, this guide can help you choose the
              Viking cruise that best matches your travel style.{" "}
            </p>{" "}
          </div>{" "}
          {/* Cards */}{" "}
          <div className="adgs-grid">
            {" "}
            {travelerTypeData.map((item) => (
              <div key={item.key} className={`adg-card ${item.accent}`}>
                {" "}
                {/* Image */}{" "}
                <div className="adg-card-image-wrap">
                  {" "}
                  <img
                    src={item.image}
                    alt={item.imageAlt}
                    className="adg-card-img"
                  />{" "}
                  <div className="adg-card-image-overlay"></div>{" "}
                  <div className="adg-card-eyebrow-wrap">
                    {" "}
                    <span className="adg-card-eyebrow-icon">
                      {item.icon}
                    </span>{" "}
                    <span className="adg-card-eyebrow-label">
                      {" "}
                      {item.eyebrow}{" "}
                    </span>{" "}
                  </div>{" "}
                </div>{" "}
                {/* Content */}{" "}
                <div className="adg-card-body">
                  {" "}
                  <h3 className="adg-card-title">{item.title}</h3>{" "}
                  <ul className="adg-card-list">
                    {" "}
                    {item.items.map((point, idx) => (
                      <li key={idx} className="adg-card-list-item">
                        {" "}
                        <span className="adg-card-list-dot"></span>{" "}
                        <span className="adg-card-list-text">{point}</span>{" "}
                      </li>
                    ))}{" "}
                  </ul>{" "}
                  <p
                    className="adg-card-description"
                    style={{ color: "var(--navy)", fontSize: "16px" }}
                  >
                    {" "}
                    {item.description}{" "}
                  </p>{" "}
                </div>{" "}
                <div className="adg-card-bar"></div>{" "}
              </div>
            ))}{" "}
          </div>{" "}
        </div>{" "}
      </section>

      {/* ══ VIDEO SECTION 2 ════════════════════════════════════════════════════ */}
      <section
        className="azs-video-section"
        style={{ backgroundColor: "var(--bg-white)" }}
      >
        <div className="azs-container">
          <div className="azs-section-header">
            <h2 className="azs-h2">Discover the Viking Longships Experience</h2>

            <div className="azs-accent-line"></div>

            <p className="azs-video-intro">
              Take a closer look at Viking's award-winning Longships, featuring
              innovative engineering, elegant Scandinavian design, spacious
              staterooms with full-size verandas, and some of the largest suites
              on Europe's rivers.
            </p>
          </div>

          <div className="azs-video-wrapper">
            <div className="azs-video-frame">
              <iframe
                src="https://www.youtube.com/embed/drsLIk6vJ5A"
                title="Viking Longships River Cruise Experience"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
  IS VIKING RIGHT FOR YOU — OVERVIEW
  ════════════════════════════════════════ */}

      <section className="adg-c-section adg-c-bg-soft">
        <div className="adg-c-container">
          <div className="adg-c-section-header">
            <h2 className="adg-c-h2">Is Viking Right for You?</h2>
            <div className="adg-c-accent-line"></div>
          </div>

          <div className="adg-c-overview-layout">
            {/* LEFT — list */}
            <div className="adg-c-overview-icons">
              <div className="adg-c-overview-item">
                <span className="adg-c-overview-icon">✔</span>
                <span className="adg-c-overview-label">Exploration</span>
              </div>

              <div className="adg-c-overview-item">
                <span className="adg-c-overview-icon">✔</span>
                <span className="adg-c-overview-label">Learning</span>
              </div>

              <div className="adg-c-overview-item">
                <span className="adg-c-overview-icon">✔</span>
                <span className="adg-c-overview-label">History & Culture</span>
              </div>

              <div className="adg-c-overview-item">
                <span className="adg-c-overview-icon">✔</span>
                <span className="adg-c-overview-label">Comfort</span>
              </div>

              <div className="adg-c-overview-item">
                <span className="adg-c-overview-icon">✔</span>
                <span className="adg-c-overview-label">Smaller Ships</span>
              </div>

              <div className="adg-c-overview-item">
                <span className="adg-c-overview-icon">✔</span>
                <span className="adg-c-overview-label">
                  Adult-Focused Travel
                </span>
              </div>

              <div className="adg-c-overview-item">
                <span className="adg-c-overview-icon">✔</span>
                <span className="adg-c-overview-label">
                  Meaningful Experiences
                </span>
              </div>
              <div className="adg-c-overview-item">
                <span className="adg-c-overview-icon">✔</span>
                <span className="adg-c-overview-label">
                  Destination Immersion
                </span>
              </div>
            </div>

            {/* RIGHT — callout card + image */}
            <div className="adg-c-overview-right">
              <div className="adg-c-overview-callout">
                <div className="adg-c-overview-callout-inner">
                  <Star size={28} className="adg-c-callout-star" />
                  <p className="adg-c-callout-text">
                    Viking isn't trying to be everything to everyone. Instead,
                    the company has built its reputation by serving a specific
                    type of traveler exceptionally well. For couples, retirees,
                    solo travelers, empty nesters, lifelong learners, and
                    experienced travelers, Viking consistently delivers the type
                    of journey that goes far beyond a traditional vacation.
                  </p>
                </div>
              </div>

              <div className="adg-c-overview-image-wrap">
                <img
                  src={VikingExp7}
                  alt="Viking cruise traveler enjoying a meaningful destination experience"
                  className="adg-c-overview-img"
                />
                <div className="adg-c-overview-img-overlay">
                  <span className="adg-c-overview-img-label">
                    The Viking Traveler
                  </span>
                </div>
              </div>
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
              Everything you need to know about who should — and shouldn't —
              sail Viking.
            </p>
          </div>
          <FAQ />
        </div>
      </section>

      {/* ══ CTA ═══════════════════════════════════════════════════════════════ */}
      <section className="Asc-help-section">
        <div className="Asc-help-bg-wrap">
          <img
            src={Vikingcta}
            alt="Viking cruise fleet multiple ships scenic destination"
            className="Asc-help-bg-img"
          />
          <div className="Asc-help-overlay"></div>
        </div>

        <div className="Asc-container">
          <div className="Asc-help-card">
            <div className="Asc-help-content">
              <div className="Asc-help-header">
                <span className="Asc-help-eyebrow">Who Should Sail Viking</span>
                <h2 className="Asc-help-h2">
                  The Best Travelers Aren't Looking <br /> for the Biggest Ship
                </h2>
                <div className="Asc-help-accent"></div>
              </div>

              <div className="Asc-help-grid">
                <div className="Asc-help-info">
                  <p className="Asc-help-intro">
                    Viking has built its reputation by serving a specific type
                    of traveler exceptionally well — those who value cultural
                    immersion, destination-focused itineraries, and meaningful
                    travel experiences.
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
                      Whether you're a couple seeking romance, a retiree seeking
                      enrichment, or a solo traveler seeking connection,
                      Viking's destination-first approach helps create a more
                      meaningful travel experience.
                      <br />
                      <br />
                      Because the best travelers aren't always looking for the
                      biggest ship.
                      <br />
                      <br />
                      <strong>
                        They're looking for the most rewarding experience.
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
                      Find Your Ideal Viking Voyage
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>

                <div className="Asc-help-list-box">
                  <h3 className="Asc-help-list-title">
                    Viking Is Likely Right for You If You're:
                  </h3>
                  <ul className="Asc-help-bullets">
                    {[
                      "A Couple Seeking Romance & Culture",
                      "A Retiree Seeking Enrichment",
                      "An Empty Nester Starting a New Chapter",
                      "A Lifelong Learner",
                      "An Experienced or Solo Traveler",
                      "A River Cruise Enthusiast",
                      "An Adventure-Minded Explorer",
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
                      Contact Trips &amp; Ships Luxury Travel to find out which
                      Viking voyage matches your travel style.
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

export default WhoShouldSailViking;
