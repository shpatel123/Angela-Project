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
  Compass,
  Waves,
  BookOpen,
  Mountain,
  Coffee,
  Gift,
} from "lucide-react";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela2.jpeg";
import { Helmet } from "react-helmet-async";

import HeroImage1 from "../../assets/IsVikingWorthIt/Bay-of-Islands-New-Zealand.jpg";
import HeroImage2 from "../../assets/IsVikingWorthIt/viking-cruise-eidfjord-norway-fjord.jpg";
import HeroImage3 from "../../assets/IsVikingWorthIt/viking-Tromso-Norway.jpg";
import VikingExp1 from "../../assets/IsVikingWorthIt/Sydney-Australia.jpg";
import VikingExp2 from "../../assets/IsVikingWorthIt/viking-main-pool-deck.jpg";
import VikingExp3 from "../../assets/IsVikingWorthIt/viking-explorer-suite-balcony-view.jpg";
import VikingExp4 from "../../assets/IsVikingWorthIt/viking-explorer-suite-living-room.jpg";
import VikingExp5 from "../../assets/IsVikingWorthIt/viking-ship-living-room-lounge.jpg";
import VikingRiver from "../../assets/IsVikingWorthIt/viking-river-cruises.jpg";
import VikingOcean from "../../assets/IsVikingWorthIt/viking-Dubrovnik-Croatia.jpg";
import VikingExpediton from "../../assets/IsVikingWorthIt/Expedition-Ship-Antarctica.jpg";
import VikingExp6 from "../../assets/IsVikingWorthIt/viking-Exterior.jpg";
import VikingExp7 from "../../assets/IsVikingWorthIt/Sun-Terrace-with_br_Infinity-Plunge-Pool.jpg";
import Vikingcta from "../../assets/IsVikingWorthIt/Viking-Octanis-with-Viking-Star-and-Viking-Sea.jpg";



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
        "Luxury travel experts helping travelers evaluate Viking river, ocean, and expedition cruise experiences through honest comparisons and personalized travel planning.",
    },
    {
      "@type": "WebPage",
      "@id": "https://www.tripsandships.com/is-viking-worth-it",
      url: "https://www.tripsandships.com/is-viking-worth-it",
      name: "Is Viking Worth It? | An Honest Look at Viking Cruises Value",
      description:
        "Wondering if Viking Cruises are worth the cost? Discover what Viking offers, who benefits most from Viking River, Ocean, and Expedition Cruises, and whether the experience justifies the premium price.",
      isPartOf: { "@id": "https://www.tripsandships.com/#website" },
      about: [{ "@type": "Organization", name: "Viking Cruises" }],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.tripsandships.com/is-viking-worth-it#breadcrumb",
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
          name: "Is Viking Worth It?",
          item: "https://www.tripsandships.com/is-viking-worth-it",
        },
      ],
    },
    {
      "@type": "ItemList",
      "@id": "https://www.tripsandships.com/is-viking-worth-it#itemlist",
      name: "Reasons Viking Cruises Are Worth It",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "The Destinations Come First",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Included Shore Excursions Add Value",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Smaller Ships & Adult-Only Atmosphere",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Cultural Enrichment Is Included",
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Viking Includes More Than Many Travelers Expect",
        },
        {
          "@type": "ListItem",
          position: 6,
          name: "High Guest Satisfaction & Repeat Travelers",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.tripsandships.com/is-viking-worth-it#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Is Viking Cruises worth the money?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For travelers seeking destination-focused, adult-oriented travel experiences, many believe Viking provides excellent value.",
          },
        },
        {
          "@type": "Question",
          name: "Why is Viking more expensive?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Viking includes amenities, excursions, enrichment programs, and premium service that contribute to higher pricing.",
          },
        },
        {
          "@type": "Question",
          name: "Is Viking considered luxury?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Viking is generally categorized as premium or upper-premium, offering many luxury-style experiences.",
          },
        },
        {
          "@type": "Question",
          name: "Are Viking River Cruises worth it?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Many travelers consider Viking River Cruises among the best values in river cruising due to included excursions and destination access.",
          },
        },
        {
          "@type": "Question",
          name: "Are Viking Ocean Cruises worth it?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, particularly for travelers seeking smaller ships, cultural enrichment, and adult-focused travel experiences.",
          },
        },
        {
          "@type": "Question",
          name: "Are Viking Expedition Cruises worth the cost?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For travelers interested in Antarctica, the Arctic, and remote destinations, many consider the experience worth the investment.",
          },
        },
        {
          "@type": "Question",
          name: "Who should not choose Viking?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Families with young children, nightlife seekers, and travelers prioritizing onboard attractions may prefer other cruise lines.",
          },
        },
        {
          "@type": "Question",
          name: "Does Viking include excursions?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most itineraries include at least one guided excursion in each port.",
          },
        },
        {
          "@type": "Question",
          name: "Is Viking good for solo travelers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Many solo travelers appreciate the relaxed atmosphere and destination-focused experiences Viking provides.",
          },
        },
        {
          "@type": "Question",
          name: "Why do people love Viking Cruises?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Guests frequently praise the service, cultural enrichment, itineraries, and overall travel experience.",
          },
        },
        {
          "@type": "Question",
          name: "Is Viking River Cruises worth it for first-timers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Many first-time river cruisers find Viking an exceptional introduction — particularly for European itineraries where included excursions, convenient docking, and enrichment programs add clear value.",
          },
        },
        {
          "@type": "Question",
          name: "Is Viking worth it for couples?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. Viking's adult-only environment, relaxed atmosphere, elegant design, and destination-focused itineraries make it especially popular among couples.",
          },
        },
        {
          "@type": "Question",
          name: "What does Viking include in the fare?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Depending on the voyage, Viking fares often include accommodations, dining, Wi-Fi, beer and wine with meals, one shore excursion per port, enrichment programs, and port charges.",
          },
        },
        {
          "@type": "Question",
          name: "Is Viking better than mainstream cruise lines?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Viking serves a very different type of traveler than mainstream cruise lines. It is better for cultural, destination-focused adults but not for families with young children or travelers seeking large ship attractions.",
          },
        },
      ],
    },
    {
      "@type": "Review",
      "@id": "https://www.tripsandships.com/is-viking-worth-it#review",
      itemReviewed: {
        "@type": "TravelAction",
        name: "Viking Cruises Value Assessment",
      },
      reviewBody:
        "For the right traveler, Viking Cruises is absolutely worth it. The combination of destination-focused itineraries, included shore excursions, cultural enrichment programs, smaller ships, adult-only atmosphere, and elegant Scandinavian design delivers exceptional value for culturally curious adult travelers.",
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
      "@id": "https://www.tripsandships.com/is-viking-worth-it#touristtrip",
      name: "Viking Cruises — River, Ocean & Expedition Experiences",
      description:
        "Viking river, ocean, and expedition cruises designed for destination-focused adult travelers seeking cultural enrichment, meaningful travel, and elegant smaller-ship experiences.",
      touristType: [
        "Cultural Travelers",
        "Couples",
        "Retirees",
        "Lifelong Learners",
        "Solo Travelers",
        "History Enthusiasts",
      ],
    },
  ],
};

// ─── FAQ COMPONENT ───────────────────────────────────────────────────────────
function FAQ() {
  const [open, setOpen] = useState(null);

  const faqData = [
    {
      q: "Is Viking Cruises worth the money?",
      a: "For travelers seeking destination-focused, adult-oriented travel experiences, many believe Viking provides excellent value.",
    },
    {
      q: "Why is Viking more expensive?",
      a: "Viking includes amenities, excursions, enrichment programs, and premium service that contribute to higher pricing.",
    },
    {
      q: "Is Viking considered luxury?",
      a: "Viking is generally categorized as premium or upper-premium, offering many luxury-style experiences.",
    },
    {
      q: "Are Viking River Cruises worth it?",
      a: "Many travelers consider Viking River Cruises among the best values in river cruising due to included excursions and destination access.",
    },
    {
      q: "Are Viking Ocean Cruises worth it?",
      a: "Yes, particularly for travelers seeking smaller ships, cultural enrichment, and adult-focused travel experiences.",
    },
    {
      q: "Are Viking Expedition Cruises worth the cost?",
      a: "For travelers interested in Antarctica, the Arctic, and remote destinations, many consider the experience worth the investment.",
    },
    {
      q: "Who should not choose Viking?",
      a: "Families with young children, nightlife seekers, and travelers prioritizing onboard attractions may prefer other cruise lines.",
    },
    {
      q: "Does Viking include excursions?",
      a: "Most itineraries include at least one guided excursion in each port.",
    },
    {
      q: "Is Viking good for solo travelers?",
      a: "Many solo travelers appreciate the relaxed atmosphere and destination-focused experiences Viking provides.",
    },
    {
      q: "Why do people love Viking Cruises?",
      a: "Guests frequently praise the service, cultural enrichment, itineraries, and overall travel experience.",
    },
    {
      q: "Is Viking River Cruises worth it for first-timers?",
      a: "Yes. Many first-time river cruisers find Viking an exceptional introduction — particularly for European itineraries where included excursions, convenient docking, and enrichment programs add clear value.",
    },
    {
      q: "Is Viking worth it for couples?",
      a: "Absolutely. Viking's adult-only environment, relaxed atmosphere, elegant design, and destination-focused itineraries make it especially popular among couples.",
    },
    {
      q: "What does Viking include in the fare?",
      a: "Depending on the voyage, Viking fares often include accommodations, dining, Wi-Fi, beer and wine with meals, one shore excursion per port, enrichment programs, and port charges.",
    },
    {
      q: "Is Viking better than mainstream cruise lines?",
      a: "Viking serves a very different type of traveler than mainstream cruise lines. It is better for cultural, destination-focused adults but not for families with young children or travelers seeking large ship attractions.",
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
const IsVikingWorthIt = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [readMore, setReadMore] = useState(false);
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
          Is Viking Worth It? | An Honest Look at Viking Cruises Value
        </title>
        <meta name="title" content="Is Viking Worth It?" />
        <meta
          name="description"
          content="Wondering if Viking Cruises are worth the cost? Discover what Viking offers, who benefits most from Viking River, Ocean, and Expedition Cruises, and whether the experience justifies the premium price."
        />
        <meta
          property="og:title"
          content="Is Viking Worth It? | An Honest Look at Viking Cruises Value"
        />
        <meta
          property="og:description"
          content="An honest assessment of Viking Cruises value — who Viking is worth it for, what's included, and who should consider another cruise line instead."
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content="https://www.tripsandships.com/is-viking-worth-it"
        />
        <link
          rel="canonical"
          href="https://www.tripsandships.com/is-viking-worth-it"
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
          <h1>Is Viking Worth the Price?</h1>
          <p>
            If you're researching cruise options, you've probably noticed one
            thing immediately: Viking Cruises aren't cheap.
          </p>
          <p>
            Whether you're considering a Viking River Cruise through Europe, an
            ocean voyage across the Mediterranean, or an expedition cruise to
            Antarctica, Viking generally costs more than many mainstream cruise
            lines.
          </p>
          {readMore && (
            <>
              <p>That naturally leads travelers to ask: is Viking worth it?</p>
              <p>
                For many guests, the answer is yes. But Viking isn't the right
                choice for everyone. Understanding what Viking offers — and what
                it doesn't — can help determine whether the experience aligns
                with your travel style and expectations.
              </p>
              <p>
                At Trips &amp; Ships Luxury Travel, we help travelers evaluate
                Viking honestly — so you can make the right decision for your
                vacation.
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

      {/* ══ WHAT ARE YOU ACTUALLY PAYING FOR ════════════════════════════════ */}
      <section
        className="ugt-components-section"
        id="ugt-components"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="Asc-container">
          <div className="ugt-components-header">
            <h2 className="adg-c-h2">What Are You Actually Paying For?</h2>
            <div className="adg-c-accent-line"></div>
          </div>

          <div className="ugt-components-list">
            <div className="ugt-component-row">
              {/* LEFT IMAGE */}
              <div className="ugt-component-image-wrapper">
                <div className="ugt-component-image-container">
                  <img
                    src={VikingExp1}
                    alt="Viking cruise guests on cultural shore excursion European city"
                    className="ugt-component-image"
                  />
                </div>
              </div>

              {/* RIGHT CONTENT */}
              <div className="ugt-component-content">
                <p className="ugt-component-text">
                  One of the biggest misconceptions about Viking is that you're
                  simply paying for a luxury cruise.
                </p>
                <p className="ugt-component-text">
                  In reality, Viking sells something different. The value isn't
                  based on onboard attractions — it's based on the overall
                  travel experience, the destinations, and the type of journey
                  Viking creates.
                </p>

                <div className="ugt-questions-box">
                  <span className="ugt-questions-title">
                    You're Paying For:
                  </span>
                  <ul className="ugt-questions-list">
                    {[
                      "Destination-Focused Travel",
                      "Smaller Ships & Intimate Experience",
                      "Included Shore Excursions",
                      "Cultural Enrichment Programs",
                      "Educational Experiences",
                      "Adult-Only Atmosphere",
                      "Thoughtful & Attentive Service",
                      "Elegant Scandinavian Design",
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
            <h2 className="azs-h2">Explore Viking Expedition Ship Design</h2>

            <div className="azs-accent-line"></div>

            <p className="azs-video-intro">
              All Viking ships are carefully designed to enable exploration.
              Understated, elegant interiors feature Viking's signature
              Scandinavian design philosophy, while thoughtful details
              throughout prioritize comfort and destination immersion.
            </p>
          </div>

          <div className="azs-video-wrapper">
            <div className="azs-video-frame">
              <iframe
                src="https://www.youtube.com/embed/7cqxJbsBKsQ"
                title="Viking Expedition Ship Design"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* ══ 4-CARD GRID — WHY MANY TRAVELERS BELIEVE VIKING IS WORTH IT ═══════ */}
      <section className="adg-c-section adg-c-bg-soft" id="adg-viking-worth-it">
        <div className="adg-c-container">
          <div className="adg-c-section-header">
            <span className="adg-c-eyebrow">
              Viking Cruise Value Assessment
            </span>

            <h2 className="adg-c-h2">
              Why Many Travelers Believe <br /> Viking Is Worth It
            </h2>

            <div className="adg-c-accent-line"></div>

            <p className="Asc-section-intro">
              Several factors consistently appear in guest reviews and traveler
              feedback. These are the reasons many guests feel Viking justifies
              its premium pricing and continues to earn strong loyalty among
              travelers.
            </p>
          </div>

          <div className="adg-c-venues-grid1">
            {[
              {
                id: 1,
                eyebrow: "Reason #1",
                name: "The Destinations Come First",
                highlight: "Exploration Takes Priority",
                items: [
                  "Exploring Cities",
                  "Visiting Historical Sites",
                  "Learning Local Culture",
                  "Experiencing Authentic Destinations",
                  "Destination-Focused Itineraries",
                ],
                callout:
                  "Rather than building vacations around water slides, casinos, or theme-park attractions, Viking builds voyages around exploration. For destination-focused travelers, this alone can justify the higher price.",
              },
              {
                id: 2,
                eyebrow: "Reason #2",
                name: "Included Shore Excursions Add Value",
                highlight: "More Included Experiences",
                items: [
                  "One Excursion Per Port",
                  "Guided Local Experiences",
                  "Easy Destination Access",
                  "Fewer Additional Costs",
                  "Convenient Exploration",
                ],
                callout:
                  "Most itineraries include at least one excursion per port, allowing guests to begin exploring immediately without purchasing expensive add-ons.",
              },
              {
                id: 3,
                eyebrow: "Reason #3",
                name: "Viking Ships Feel Less Crowded",
                highlight: "A More Intimate Experience",
                items: [
                  "More Personal Service",
                  "Less Waiting",
                  "Easier Navigation",
                  "Relaxed Atmosphere",
                  "Better Scenic Viewing",
                ],
                callout:
                  "Many guests find Viking's smaller ship environment significantly more enjoyable than larger cruise ships carrying thousands of passengers.",
              },
              {
                id: 4,
                eyebrow: "Reason #4",
                name: "Adult-Only Environment",
                highlight: "Peaceful & Refined Atmosphere",
                items: [
                  "No Kids Clubs",
                  "No Water Parks",
                  "No Children's Programming",
                  "No Family Attractions",
                  "Guests Must Be 18+",
                ],
                callout:
                  "For many travelers, especially couples and retirees, Viking's adult-only policy creates a peaceful atmosphere that enhances the overall vacation experience.",
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
            <h2 className="dfg-gallery-title">Inside the Viking Experience</h2>

            <div className="dfg-gallery-accent"></div>

            <p className="dfg-gallery-intro">
              Elegant Spaces Designed for Discovery
            </p>

            <p className="dfg-gallery-description">
              Viking's ships combine Scandinavian elegance, spacious
              accommodations, and thoughtfully designed public areas that
              enhance the travel experience. From panoramic pool decks to
              luxurious suites and inviting lounges, every space is created to
              keep the focus on comfort, relaxation, and destination immersion.
            </p>
          </div>

          <div className="dfg-gallery-mosaic">
            {/* Main Pool Deck */}
            <div
              className="dfg-gallery-item dfg-gallery-large"
              style={{ color: "#fff" }}
            >
              <img
                src={VikingExp2}
                alt="Viking main pool deck"
                className="dfg-gallery-img"
              />
              <div className="dfg-gallery-overlay">
                <span className="dfg-gallery-caption">
                  Panoramic Pool Deck Views
                </span>
              </div>
            </div>

            {/* Balcony Suite */}
            <div
              className="dfg-gallery-item dfg-gallery-tall"
              style={{ color: "#fff" }}
            >
              <img
                src={VikingExp3}
                alt="Viking explorer suite balcony view"
                className="dfg-gallery-img"
              />
              <div className="dfg-gallery-overlay">
                <span className="dfg-gallery-caption">
                  Explorer Suite Balcony Views
                </span>
              </div>
            </div>

            {/* Suite Living Room */}
            <div
              className="dfg-gallery-item dfg-gallery-wide"
              style={{ color: "#fff" }}
            >
              <img
                src={VikingExp4}
                alt="Viking explorer suite living room"
                className="dfg-gallery-img"
              />
              <div className="dfg-gallery-overlay">
                <span className="dfg-gallery-caption">
                  Spacious Luxury Accommodations
                </span>
              </div>
            </div>

            {/* Lounge */}
            <div
              className="dfg-gallery-item dfg-gallery-square"
              style={{ color: "#fff" }}
            >
              <img
                src={VikingExp5}
                alt="Viking ship living room lounge"
                className="dfg-gallery-img"
              />
              <div className="dfg-gallery-overlay">
                <span className="dfg-gallery-caption">
                  Scandinavian-Inspired Lounges
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

          {/* ══ WHO GETS THE MOST VALUE FROM VIKING ═════════════════════════════ */}
      <section className="dbf-spotlight-section">
        <div className="dbf-spotlight-container">
          <div className="dbf-spotlight-header">
            <h2 className="dbf-spotlight-title">
              Who Gets the Most Value From Viking?
            </h2>
            <div className="dbf-spotlight-accent"></div>
          </div>

          <div className="dbf-spotlight-grid">
            {/* CARD 1 */}
            <div className="dbf-spotlight-card dbf-spotlight-card--wish">
              <div className="dbf-spotlight-card-header">
                <span className="dbf-spotlight-card-badge">Best Fit</span>
                <h3 className="dbf-spotlight-card-title">
                  Travelers Who Benefit Most from Viking
                </h3>
              </div>

              <div className="dbf-spotlight-card-body">
                <p className="dbf-spotlight-card-lead">
                  Viking delivers its strongest value to travelers who
                  prioritize culture, education, destination immersion, and a
                  relaxed onboard atmosphere over entertainment-focused
                  cruising.
                </p>

                <div className="dbf-spotlight-features-box">
                  <h4 className="dbf-spotlight-features-title">
                    Viking Is Ideal For:
                  </h4>

                  <ul className="dbf-spotlight-features-list">
                    {[
                      {
                        title: "Retirees",
                        text: "A relaxed pace and strong cultural focus appeal to many retired travelers.",
                      },
                      {
                        title: "Couples",
                        text: "Adult-only environments create a peaceful and romantic atmosphere.",
                      },
                      {
                        title: "Empty Nesters",
                        text: "Many guests enjoy exploring the world after their children have grown.",
                      },
                      {
                        title: "Lifelong Learners",
                        text: "Educational enrichment programs remain central to the Viking experience.",
                      },
                      {
                        title: "Experienced Travelers",
                        text: "Guests who have visited major destinations often appreciate Viking's deeper approach to exploration.",
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
                <BookOpen size={16} className="dbf-spotlight-footer-icon" />
                <p>
                  Viking is designed for travelers who value meaningful
                  experiences, cultural discovery, and destination-focused
                  journeys.
                </p>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="dbf-spotlight-card dbf-spotlight-card--fantasy">
              <div className="dbf-spotlight-card-header">
                <span className="dbf-spotlight-card-badge dbf-spotlight-card-badge--navy">
                  Consider Alternatives
                </span>
                <h3 className="dbf-spotlight-card-title">
                  Who Might Prefer Another Cruise Line?
                </h3>
              </div>

              <div className="dbf-spotlight-card-body">
                <p className="dbf-spotlight-card-lead">
                  While Viking is highly rated by its target audience, it may
                  not be the best fit for every traveler depending on vacation
                  priorities.
                </p>

                <div className="dbf-spotlight-features-box">
                  <h4 className="dbf-spotlight-features-title">
                    Another Cruise Line May Be Better If You Want:
                  </h4>

                  <ul className="dbf-spotlight-features-list">
                    {[
                      {
                        title: "Family-Friendly Activities",
                        text: "Families with children often prefer cruise lines that offer youth clubs and character experiences.",
                      },
                      {
                        title: "Nightlife & Parties",
                        text: "Travelers seeking vibrant nightlife may find Viking too relaxed.",
                      },
                      {
                        title: "Lower Prices",
                        text: "Budget-conscious travelers can find less expensive cruise alternatives.",
                      },
                      {
                        title: "Large-Scale Attractions",
                        text: "Guests who prioritize water parks, casinos, and onboard entertainment may prefer mainstream cruise lines.",
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
                <Compass size={16} className="dbf-spotlight-footer-icon" />
                <p>
                  Viking focuses on cultural enrichment and destination
                  immersion rather than family entertainment, nightlife, or
                  attraction-driven cruising.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ VIKING VALUE BY CRUISE TYPE — TABBED SECTION ══════════════════════ */}
      <section className="dac-reasons-section">
        <div className="dac-reasons-container">
          <div className="dac-reasons-header">
            <span className="dac-reasons-eyebrow">Viking Cruise Types</span>

            <h2 className="dac-reasons-title">
              Is Viking Worth It by Cruise Type?
            </h2>

            <div className="dac-reasons-accent"></div>

            <p className="dac-reasons-lead">
              Whether Viking is worth the cost depends on the type of cruise
              experience you're seeking. River, ocean, and expedition voyages
              each offer unique advantages that appeal to different kinds of
              travelers.
            </p>
          </div>

          <div className="dac-reasons-tabs-nav">
            {/* River Cruises */}
            <button
              className={`dac-reasons-tab-btn ${
                activeReasonTab === 5 ? "active" : ""
              }`}
              onClick={() => setActiveReasonTab(5)}
            >
              <span className="dac-reasons-tab-icon-wrap">
                <Waves size={18} />
              </span>

              <div className="dac-reasons-tab-text-wrap">
                <span className="dac-reasons-tab-num">01</span>
                <span className="dac-reasons-tab-title">
                  Viking River Cruises
                </span>
              </div>
            </button>

            {/* Ocean Cruises */}
            <button
              className={`dac-reasons-tab-btn ${
                activeReasonTab === 6 ? "active" : ""
              }`}
              onClick={() => setActiveReasonTab(6)}
            >
              <span className="dac-reasons-tab-icon-wrap">
                <Ship size={18} />
              </span>

              <div className="dac-reasons-tab-text-wrap">
                <span className="dac-reasons-tab-num">02</span>
                <span className="dac-reasons-tab-title">
                  Viking Ocean Cruises
                </span>
              </div>
            </button>

            {/* Expedition Cruises */}
            <button
              className={`dac-reasons-tab-btn ${
                activeReasonTab === 7 ? "active" : ""
              }`}
              onClick={() => setActiveReasonTab(7)}
            >
              <span className="dac-reasons-tab-icon-wrap">
                <Mountain size={18} />
              </span>

              <div className="dac-reasons-tab-text-wrap">
                <span className="dac-reasons-tab-num">03</span>
                <span className="dac-reasons-tab-title">
                  Viking Expedition Cruises
                </span>
              </div>
            </button>
          </div>

          <div className="dac-reasons-tabs-content">
            {/* TAB 5 — RIVER CRUISES */}
            {activeReasonTab === 5 && (
              <div className="dac-reasons-tab-panel fade-in">
                <div className="dac-reasons-row dac-reasons-row--right-content">
                  <div className="dac-reasons-content">
                    <span className="dac-reasons-row-number">01</span>

                    <h3 className="dac-reasons-row-title">
                      Is Viking River Cruises Worth It?
                    </h3>

                    <p className="dac-reasons-row-desc">
                      For many travelers, Viking River Cruises represents
                      exceptional value. River cruising combines destination
                      immersion, scenic sailing, and convenient access to
                      historic city centers throughout Europe and beyond.
                    </p>

                    <div className="dac-reasons-bullets">
                      {[
                        "First-Time River Cruisers",
                        "European Travelers",
                        "History Enthusiasts",
                        "Food & Wine Lovers",
                        "Retirees",
                        "Couples",
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

                    <div
                      className="dac-reasons-callout"
                      style={{ marginTop: "20px" }}
                    >
                      <Waves size={18} className="dac-reasons-callout-icon" />
                      <p>
                        River cruising provides convenient access to city
                        centers, scenic sailing, cultural immersion, and smaller
                        ship experiences.
                      </p>
                    </div>
                  </div>

                  <div className="dac-reasons-media">
                    <div className="dac-reasons-img-container">
                      <img
                        src={VikingRiver}
                        alt="Viking River Cruise in Europe"
                        className="dac-reasons-img"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 6 — OCEAN CRUISES */}
            {activeReasonTab === 6 && (
              <div className="dac-reasons-tab-panel fade-in">
                <div className="dac-reasons-row dac-reasons-row--left-content">
                  <div className="dac-reasons-media">
                    <div className="dac-reasons-img-container">
                      <img
                        src={VikingOcean}
                        alt="Viking Ocean Cruise ship"
                        className="dac-reasons-img"
                      />
                    </div>
                  </div>
                  <div className="dac-reasons-content">
                    <span className="dac-reasons-row-number">02</span>

                    <h3 className="dac-reasons-row-title">
                      Is Viking Ocean Cruises Worth It?
                    </h3>

                    <p className="dac-reasons-row-desc">
                      Viking Ocean Cruises appeals to travelers seeking a
                      premium but relaxed cruise experience. The ships focus on
                      cultural enrichment, elegant accommodations, and
                      destination-focused itineraries.
                    </p>

                    <div className="dac-reasons-bullets">
                      {[
                        "Smaller Ships",
                        "More Time in Port",
                        "Educational Experiences",
                        "Elegant Accommodations",
                        "Destination-Focused Itineraries",
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

                    <div
                      className="dac-reasons-callout"
                      style={{ marginTop: "20px" }}
                    >
                      <Ship size={18} className="dac-reasons-callout-icon" />
                      <p>
                        Guests often compare Viking favorably to premium and
                        luxury cruise brands because of its destination-focused
                        approach.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 7 — EXPEDITION CRUISES */}
            {activeReasonTab === 7 && (
              <div className="dac-reasons-tab-panel fade-in">
                <div className="dac-reasons-row dac-reasons-row--right-content">
                  <div className="dac-reasons-content">
                    <span className="dac-reasons-row-number">03</span>

                    <h3 className="dac-reasons-row-title">
                      Is Viking Expedition Cruises Worth It?
                    </h3>

                    <p className="dac-reasons-row-desc">
                      Expedition cruises represent a significant investment.
                      However, many travelers consider them once-in-a-lifetime
                      experiences that deliver extraordinary access to some of
                      the world's most remote destinations.
                    </p>

                    <div className="dac-reasons-includes-grid">
                      {[
                        "Adventure Seekers",
                        "Wildlife Enthusiasts",
                        "Photographers",
                        "Nature Lovers",
                        "Lifelong Learners",
                      ].map((item, idx) => (
                        <div key={idx} className="dac-reasons-include-tag">
                          <Check size={12} className="dac-reasons-check-icon" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    <div
                      className="dac-reasons-callout"
                      style={{ marginTop: "20px" }}
                    >
                      <Mountain
                        size={18}
                        className="dac-reasons-callout-icon"
                      />
                      <p>
                        Destinations such as Antarctica and the Arctic offer
                        experiences unavailable through traditional cruising.
                      </p>
                    </div>
                  </div>

                  <div className="dac-reasons-media">
                    <div className="dac-reasons-img-container">
                      <img
                        src={VikingExpediton}
                        alt="Viking Expedition Antarctica cruise"
                        className="dac-reasons-img"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ══ COMPARISON TABLE ══════════════════════════════════════════════════ */}
      <section className="Asc-section Asc-bg-white" id="Asc-fleet">
        <div className="Asc-container">
          <div className="Asc-section-header">
            <h2 className="Asc-h2">Viking vs Mainstream Cruise Lines</h2>
            <div className="Asc-accent-line"></div>
          </div>

          <div className="Asc-table-wrapper">
            <table className="Asc-fleet-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Viking</th>
                  <th>Mainstream Cruise Lines</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>Adult-Only</strong>
                  </td>
                  <td>✔ Yes</td>
                  <td>Usually No</td>
                </tr>
                <tr>
                  <td>
                    <strong>Kids Programs</strong>
                  </td>
                  <td>✖ No</td>
                  <td>✔ Yes</td>
                </tr>
                <tr>
                  <td>
                    <strong>Included Excursions</strong>
                  </td>
                  <td>Often ✔</td>
                  <td>Usually Extra</td>
                </tr>
                <tr>
                  <td>
                    <strong>Cultural Focus</strong>
                  </td>
                  <td>Very High</td>
                  <td>Moderate</td>
                </tr>
                <tr>
                  <td>
                    <strong>Casinos</strong>
                  </td>
                  <td>✖ No</td>
                  <td>Often ✔</td>
                </tr>
                <tr>
                  <td>
                    <strong>Water Parks</strong>
                  </td>
                  <td>✖ No</td>
                  <td>Often ✔</td>
                </tr>
                <tr>
                  <td>
                    <strong>Educational Programs</strong>
                  </td>
                  <td>Extensive</td>
                  <td>Limited</td>
                </tr>
                <tr>
                  <td>
                    <strong>Atmosphere</strong>
                  </td>
                  <td>Relaxed & Refined</td>
                  <td>Varies</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ══ WHY SOME TRAVELERS THINK VIKING ISN'T WORTH IT ═══════════════════ */}
      <section className="luc-why-section" id="luc-why-viking-not-worth-it">
        <div className="luc-why-container">
          {/* LEFT — stacked images */}
          <div className="luc-why-images">
            <div className="luc-why-img-main-wrap" style={{ color: "#fff" }}>
              <img
                src={VikingExp6}
                alt="Viking cruise ship sailing ocean destination-focused travel"
                className="luc-why-img-main"
              />
              <div className="luc-why-img-overlay"></div>
            </div>

            <div className="luc-why-img-accent-wrap" style={{ color: "#fff" }}>
              <img
                src={VikingExp7}
                alt="Viking cruise adult-only atmosphere onboard experience"
                className="luc-why-img-accent"
              />
              <div className="luc-why-img-badge">
                <span className="luc-why-badge-num">3</span>
                <span className="luc-why-badge-text">Key Concerns</span>
              </div>
            </div>
          </div>

          {/* RIGHT — content */}
          <div className="luc-why-content">
            <h2 className="luc-why-title">
              Why Some Travelers Think Viking Isn't Worth It
            </h2>

            <div className="aac-accent-line aac-accent-white"></div>

            <p className="luc-why-intro">
              Despite its strengths, Viking isn't ideal for everyone. Travelers
              seeking family entertainment, nightlife, or attraction-focused
              cruising may find better value with other cruise lines.
            </p>

            <div className="luc-why-features">
              {[
                {
                  num: "01",
                  title: "No Family Entertainment",
                  desc: "Families traveling with young children may find Viking unsuitable. There are no kids clubs, family attractions, character experiences, or children's entertainment programs onboard.",
                },
                {
                  num: "02",
                  title: "Limited Nightlife",
                  desc: "Travelers looking for casinos, nightclubs, late-night parties, and high-energy entertainment may feel disappointed. Viking intentionally maintains a quieter atmosphere.",
                },
                {
                  num: "03",
                  title: "Fewer Onboard Attractions",
                  desc: "Viking focuses on destinations rather than onboard activities. You won't find surf simulators, roller coasters, water slides, or large-scale attractions. Some travelers view this as a benefit, while others do not.",
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

      {/* ══ COMMON REASONS GUESTS RETURN TO VIKING ════════════════════════════ */}
      <section className="dbf-fleet-breakdown-section">
        <div className="dbf-fleet-container">
          <div className="dbf-fleet-header">
            <span className="dbf-fleet-eyebrow">Guest Loyalty</span>
            <h2 className="dbf-fleet-title">
              Common Reasons Guests Return to Viking
            </h2>
            <div className="dbf-fleet-accent"></div>
          </div>

          <div className="dbf-fleet-grid">
            {[
              {
                name: "Exceptional Service",
                desc: "Friendly, attentive service and a consistently high level of hospitality keep many guests returning year after year.",
                icon: Star,
              },
              {
                name: "High-Quality Itineraries",
                desc: "Thoughtfully designed voyages provide meaningful destination experiences and cultural immersion.",
                icon: Compass,
              },
              {
                name: "Cultural Experiences",
                desc: "Expert lectures, local performances, and destination-focused enrichment add depth to every journey.",
                icon: BookOpen,
              },
              {
                name: "Relaxed Atmosphere",
                desc: "The adult-focused environment offers a peaceful onboard experience without crowds or constant activities.",
                icon: Coffee,
              },
              {
                name: "Included Amenities",
                desc: "Many travelers appreciate the value of having numerous services and experiences included in the fare.",
                icon: Gift,
              },
              {
                name: "Destination Access",
                desc: "Carefully selected ports and immersive excursions help travelers connect more deeply with each destination.",
                icon: MapPin,
              },
              {
                name: "Consistent Quality",
                desc: "Guests often cite Viking's reliable standards across ships, itineraries, dining, and service.",
                icon: Award,
              },
            ].map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div key={idx} className="dbf-ship-overview-card">
                  <div className="dbf-ship-card-icon-wrap">
                    <IconComponent size={22} />
                  </div>
                  <h3 className="dbf-ship-card-name">{item.name}</h3>
                  <p className="dbf-ship-card-desc">{item.desc}</p>
                </div>
              );
            })}
          </div>

          <p className="dbf-fleet-lead-footer">
            These factors contribute to Viking's strong guest loyalty and high
            rate of repeat travelers across its river, ocean, and expedition
            cruise offerings.
          </p>
        </div>
      </section>

      {/* ══ VIDEO SECTION ════════════════════════════════════════════════════ */}
      <section
        className="azs-video-section"
        style={{ backgroundColor: "var(--bg-white)" }}
      >
        <div className="azs-container">
          <div className="azs-section-header">
            <h2 className="azs-h2">
              Discover What Makes Viking Ocean Ships Unique
            </h2>

            <div className="azs-accent-line"></div>

            <p className="azs-video-intro">
              Centuries ago, the birth of the Viking Age gave rise to Norway's
              tradition of exploration. Today, Viking proudly carries on that
              heritage with elegant ocean ships designed for discovery.
            </p>
          </div>

          <div className="azs-video-wrapper">
            <div className="azs-video-frame">
              <iframe
                src="https://www.youtube.com/embed/wh4dJ_jKkHA"
                title="Ocean Ship Tour Experience Viking's Norwegian Heritage"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
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
              Everything you need to know about whether Viking Cruises are worth
              the cost.
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
            alt="Viking cruise memorable destination voyage cultural travel"
            className="Asc-help-bg-img"
          />
          <div className="Asc-help-overlay"></div>
        </div>

        <div className="Asc-container">
          <div className="Asc-help-card">
            <div className="Asc-help-content">
              <div className="Asc-help-header">
                <span className="Asc-help-eyebrow">Is Viking Worth It?</span>
                <h2 className="Asc-help-h2">
                  For the Right Traveler, <br /> Viking Is Absolutely Worth It
                </h2>
                <div className="Asc-help-accent"></div>
              </div>

              <div className="Asc-help-grid">
                <div className="Asc-help-info">
                  <p className="Asc-help-intro">
                    Viking isn't designed to be the right cruise line for
                    everyone.
                  </p>
                  <p className="Asc-help-intro">
                    It's designed for travelers who believe that the destination
                    — not the ship — is the most important part of the journey.
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
                      For travelers seeking cultural immersion, educational
                      enrichment, meaningful travel experiences, smaller ships,
                      included excursions, and adult-only environments — Viking
                      delivers exceptional value.
                      <br />
                      <br />
                      For travelers seeking family entertainment, water parks,
                      casinos, or budget pricing — another cruise line is a
                      better fit.
                      <br />
                      <br />
                      <strong>
                        And for those travelers Viking does serve, the
                        experience consistently proves its worth — voyage after
                        voyage, year after year.
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
                      Explore Viking Cruise Options
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>

                <div className="Asc-help-list-box">
                  <h3 className="Asc-help-list-title">
                    Viking Is Worth It For:
                  </h3>
                  <ul className="Asc-help-bullets">
                    {[
                      "Cultural Immersion",
                      "Educational Enrichment",
                      "Meaningful Travel Experiences",
                      "Smaller Ships",
                      "Included Shore Excursions",
                      "Adult-Only Environments",
                      "Destination-Focused Itineraries",
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
                      Contact Trips &amp; Ships Luxury Travel to explore whether
                      Viking is the right choice for your next journey.
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

export default IsVikingWorthIt;
