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
  Globe,
  Waves,
  Mountain,
  Quote,
  X,
  Wifi,
  UtensilsCrossed,
  Wine,
  Compass,
  Bed,
  GraduationCap,
  Anchor,
} from "lucide-react";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela3.jpeg";
import { Helmet } from "react-helmet-async";
import HeroImage1 from "../../assets/WhatIsIncludedOnVikingCruises/Sydney-Australia.jpg";
import HeroImage2 from "../../assets/WhatIsIncludedOnVikingCruises/viking-river-cruise-exterior-st-louis.jpg";
import HeroImage3 from "../../assets/WhatIsIncludedOnVikingCruises/Expedition-Ship-Antarctica.jpg";

import VikingExp1 from "../../assets/WhatIsIncludedOnVikingCruises/viking-ship-living-room-lounge.jpg";
import VikingSuite from "../../assets/WhatIsIncludedOnVikingCruises/Viking-Suites.jpg";
import VikingDining from "../../assets/WhatIsIncludedOnVikingCruises/mamsens-restaurant-ocean-view-viking-expedition.jpg";
import VikingExpedition from "../../assets/WhatIsIncludedOnVikingCruises/Guests-in-Antarctica.jpg";
import VikingExp2 from "../../assets/WhatIsIncludedOnVikingCruises/viking-aquavit-terrace-ocean-dining.jpg";
import VikingExp3 from "../../assets/WhatIsIncludedOnVikingCruises/viking-explorers-lounge-panoramic-views.jpg";
import VikingExp4 from "../../assets/WhatIsIncludedOnVikingCruises/Aquavit-dinig.jpg";
import VikingExp5 from "../../assets/WhatIsIncludedOnVikingCruises/viking-explorers-lounge-panoramic-view.jpg";
import VikingExp6 from "../../assets/WhatIsIncludedOnVikingCruises/viking-explorer-suite-living-room-ocean-view.jpg";
import VikingExp7 from "../../assets/WhatIsIncludedOnVikingCruises/viking-mamsens-scandinavian-deli.jpg";
import VikingExp8 from "../../assets/WhatIsIncludedOnVikingCruises/viking-the-restaurant-ocean-view-dining.jpg";
import Vikingcta from "../../assets/WhatIsIncludedOnVikingCruises/viking-expedition-ship-welland-canal.jpg";

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
        "Luxury travel experts helping travelers understand what is included on Viking river, ocean, and expedition cruises.",
    },
    {
      "@type": "WebPage",
      "@id": "https://www.tripsandships.com/what-is-included-on-viking-cruises",
      url: "https://www.tripsandships.com/what-is-included-on-viking-cruises",
      name: "What Is Included on Viking Cruises? | Complete Guide to Viking Inclusions",
      description:
        "Discover what is included on Viking Cruises, from accommodations and dining to Wi-Fi, shore excursions, enrichment programs, and more. Learn what you get with Viking River, Ocean, and Expedition Cruises.",
      isPartOf: { "@id": "https://www.tripsandships.com/#website" },
      about: [{ "@type": "Organization", name: "Viking Cruises" }],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.tripsandships.com/what-is-included-on-viking-cruises#breadcrumb",
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
          name: "What Is Included on Viking Cruises?",
          item: "https://www.tripsandships.com/what-is-included-on-viking-cruises",
        },
      ],
    },
    {
      "@type": "ItemList",
      "@id":
        "https://www.tripsandships.com/what-is-included-on-viking-cruises#itemlist",
      name: "What Is Included on Viking Cruises",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accommodations" },
        { "@type": "ListItem", position: 2, name: "Dining" },
        { "@type": "ListItem", position: 3, name: "Wi-Fi" },
        { "@type": "ListItem", position: 4, name: "Shore Excursions" },
        { "@type": "ListItem", position: 5, name: "Educational Programs" },
        {
          "@type": "ListItem",
          position: 6,
          name: "Beer and Wine with Meals",
        },
      ],
    },
    {
      "@type": "PriceSpecification",
      name: "Viking Cruise Inclusions",
      description:
        "Many amenities including accommodations, dining, Wi-Fi, shore excursions, beer and wine with meals, and port taxes are included in the Viking cruise fare.",
      priceCurrency: "USD",
    },
    {
      "@type": "FAQPage",
      "@id":
        "https://www.tripsandships.com/what-is-included-on-viking-cruises#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Are shore excursions included on Viking Cruises?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Most Viking itineraries include at least one complimentary shore excursion in every port.",
          },
        },
        {
          "@type": "Question",
          name: "Is Wi-Fi included on Viking Cruises?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Complimentary Wi-Fi is generally included.",
          },
        },
        {
          "@type": "Question",
          name: "Are drinks included on Viking Cruises?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Beer, wine, and soft drinks with lunch and dinner are typically included.",
          },
        },
        {
          "@type": "Question",
          name: "Are meals included on Viking Cruises?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Breakfast, lunch, and dinner are included throughout the cruise.",
          },
        },
        {
          "@type": "Question",
          name: "Is specialty dining included?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Many Viking Ocean and Expedition Cruises include specialty dining venues at no additional charge.",
          },
        },
        {
          "@type": "Question",
          name: "Are gratuities included on Viking Cruises?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Gratuity policies may vary depending on promotions and booking packages.",
          },
        },
        {
          "@type": "Question",
          name: "Is airfare included on Viking Cruises?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Not always. Airfare may be offered through special promotions or package deals.",
          },
        },
        {
          "@type": "Question",
          name: "Are port charges included on Viking Cruises?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Port taxes and fees are generally included in the cruise fare.",
          },
        },
        {
          "@type": "Question",
          name: "Are fitness facilities included on Viking Cruises?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Guests have access to onboard fitness centers.",
          },
        },
        {
          "@type": "Question",
          name: "Is Viking all-inclusive?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Not fully, but it includes significantly more amenities than many mainstream cruise lines.",
          },
        },
        {
          "@type": "Question",
          name: "Are room service meals included on Viking Cruises?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Room service is complimentary and available 24 hours a day for all guests aboard Viking Ocean and Expedition ships, and on select River launderettes/staterooms.",
          },
        },
        {
          "@type": "Question",
          name: "Is access to the spa included on Viking Cruises?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Access to the thermal suite in the spa (featuring the sauna, steam room, snow grotto, and pool) is fully complimentary for all guests on Viking Ocean and Expedition cruises. Spa treatments like massages cost extra.",
          },
        },
        {
          "@type": "Question",
          name: "Are specialty coffees and teas included on Viking Cruises?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Specialty coffees, espresso drinks, teas, and bottled water are complimentary and available throughout the ships at self-service stations and dining venues.",
          },
        },
        {
          "@type": "Question",
          name: "Is laundry service included on Viking Cruises?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Self-service launderettes (including washers, dryers, and detergent) are complimentary for all guests on Viking Ocean and Expedition ships. Dry cleaning and press services are available for an extra charge, or included for select premium suite categories.",
          },
        },
        {
          "@type": "Question",
          name: "Are enrichment lectures and classes included in the fare?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. All destination-focused guest lectures, port briefings, regional culinary demonstrations, and onboard musical performances are fully included in the cruise price.",
          },
        },
      ],
    },
    {
      "@type": "Review",
      "@id":
        "https://www.tripsandships.com/what-is-included-on-viking-cruises#review",
      itemReviewed: {
        "@type": "TravelAction",
        name: "Viking Cruises",
      },
      reviewBody:
        "Viking Cruises includes accommodations, dining, Wi-Fi, shore excursions, educational programming, and many other amenities within the cruise fare, allowing travelers to focus on exploring the world rather than managing additional expenses.",
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
      "@id":
        "https://www.tripsandships.com/what-is-included-on-viking-cruises#touristtrip",
      name: "Viking Cruises — River, Ocean & Expedition Inclusions",
      description:
        "Viking river, ocean, and expedition cruises with accommodations, dining, Wi-Fi, shore excursions, and educational enrichment included in the fare.",
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
      q: "Are shore excursions included on Viking Cruises?",
      a: "Yes. Most Viking itineraries include at least one complimentary shore excursion in every port.",
    },
    {
      q: "Is Wi-Fi included on Viking Cruises?",
      a: "Yes. Complimentary Wi-Fi is generally included.",
    },
    {
      q: "Are drinks included on Viking Cruises?",
      a: "Beer, wine, and soft drinks with lunch and dinner are typically included.",
    },
    {
      q: "Are meals included on Viking Cruises?",
      a: "Yes. Breakfast, lunch, and dinner are included throughout the cruise.",
    },
    {
      q: "Is specialty dining included?",
      a: "Many Viking Ocean and Expedition Cruises include specialty dining venues at no additional charge.",
    },
    {
      q: "Are gratuities included on Viking Cruises?",
      a: "Gratuity policies may vary depending on promotions and booking packages.",
    },
    {
      q: "Is airfare included on Viking Cruises?",
      a: "Not always. Airfare may be offered through special promotions or package deals.",
    },
    {
      q: "Are port charges included on Viking Cruises?",
      a: "Port taxes and fees are generally included in the cruise fare.",
    },
    {
      q: "Are fitness facilities included on Viking Cruises?",
      a: "Yes. Guests have access to onboard fitness centers.",
    },
    {
      q: "Is Viking all-inclusive?",
      a: "Not fully, but it includes significantly more amenities than many mainstream cruise lines.",
    },
    {
      q: "Are room service meals included on Viking Cruises?",
      a: "Yes. Room service is complimentary and available 24 hours a day for all guests aboard Viking Ocean and Expedition ships, and on select River staterooms.",
    },
    {
      q: "Is access to the spa included on Viking Cruises?",
      a: "Access to the thermal suite in the spa (featuring the sauna, steam room, snow grotto, and pool) is fully complimentary for all guests on Viking Ocean and Expedition cruises. Spa treatments like massages cost extra.",
    },
    {
      q: "Are specialty coffees and teas included on Viking Cruises?",
      a: "Yes. Specialty coffees, espresso drinks, teas, and bottled water are complimentary and available throughout the ships at self-service stations and dining venues.",
    },
    {
      q: "Is laundry service included on Viking Cruises?",
      a: "Self-service launderettes (including washers, dryers, and detergent) are complimentary for all guests on Viking Ocean and Expedition ships. Dry cleaning and press services are available for an extra charge, or included for select premium suite categories.",
    },
    {
      q: "Are enrichment lectures and classes included in the fare?",
      a: "Yes. All destination-focused guest lectures, port briefings, regional culinary demonstrations, and onboard musical performances are fully included in the cruise price.",
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
const WhatIsIncludedOnVikingCruises = () => {
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
          What Is Included on Viking Cruises? | Complete Guide to Viking
          Inclusions
        </title>
        <meta name="title" content="What Is Included on Viking Cruises?" />
        <meta
          name="description"
          content="Discover what is included on Viking Cruises, from accommodations and dining to Wi-Fi, shore excursions, enrichment programs, and more. Learn what you get with Viking River, Ocean, and Expedition Cruises."
        />
        <meta
          property="og:title"
          content="What Is Included on Viking Cruises? | Complete Guide to Viking Inclusions"
        />
        <meta
          property="og:description"
          content="A complete breakdown of what's included on Viking River, Ocean, and Expedition Cruises — covering dining, Wi-Fi, excursions, enrichment, and more."
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content="https://www.tripsandships.com/what-is-included-on-viking-cruises"
        />
        <link
          rel="canonical"
          href="https://www.tripsandships.com/what-is-included-on-viking-cruises"
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
            What Is Included on <br /> Viking Cruises?
          </h1>
          <p>
            One of the reasons many travelers choose Viking is the company's
            commitment to providing a more inclusive cruise experience.
          </p>
          <p>
            While Viking is not a fully all-inclusive cruise line, many
            services, amenities, and experiences that cost extra on other cruise
            lines are already included in your fare.
          </p>
          {readMore && (
            <>
              <p>
                This approach helps travelers better understand the true cost of
                their vacation and reduces the surprise expenses that can
                sometimes occur during a cruise.
              </p>
              <p>
                Whether you're considering a Viking River Cruise, Ocean Cruise,
                or Expedition Cruise, understanding what is included can help
                you determine the overall value of the experience.
              </p>
              <p>
                At Trips &amp; Ships Luxury Travel, we help travelers understand
                exactly what's included so they can budget confidently and
                choose the right Viking voyage.
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

      {/* ══ VIKING'S PHILOSOPHY ══════════════════════════════════════════════ */}
      <section
        className="ugt-components-section"
        id="ugt-components"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="Asc-container">
          <div className="ugt-components-header">
            <h2 className="adg-c-h2">
              Viking's Philosophy: More Included, <br /> Less Nickel-and-Diming
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
                    alt="Viking cruise inclusive dining and onboard experience"
                    className="ugt-component-image"
                  />
                </div>
              </div>

              {/* RIGHT CONTENT */}
              <div className="ugt-component-content">
                <p className="ugt-component-text">
                  Unlike many cruise lines that rely heavily on onboard
                  upcharges, Viking focuses on providing a straightforward
                  vacation experience.
                </p>
                <p className="ugt-component-text">
                  Guests often appreciate that essential travel elements are
                  included, allowing them to focus on enjoying the journey
                  rather than managing additional expenses. The exact inclusions
                  may vary slightly depending on the cruise type and itinerary.
                </p>

                <div className="ugt-questions-box">
                  <span className="ugt-questions-title">
                    Included Amenities Typically Cover:
                  </span>
                  <ul className="ugt-questions-list">
                    {[
                      "Accommodations",
                      "Dining",
                      "Wi-Fi",
                      "Shore Excursions",
                      "Educational Programs",
                      "Beer and Wine with Meals",
                      "Port Taxes and Fees",
                      "Destination Enrichment",
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
            <h2 className="azs-h2">Explore Viking's Award-Winning Longships</h2>

            <div className="azs-accent-line"></div>

            <p className="azs-video-intro">
              Viking Longships showcase innovative engineering, streamlined
              Scandinavian design, and understated elegance.
            </p>
          </div>

          <div className="azs-video-wrapper">
            <div className="azs-video-frame">
              <iframe
                src="https://www.youtube.com/embed/bx9p-BM2Dos"
                title="Viking Longships River Cruise Experience"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* ══ WHAT IS INCLUDED — CORE CATEGORIES ═══════════════════════════════ */}
      <section className="adg-c-section adg-c-bg-soft" id="adg-viking-reviews">
        <div className="adg-c-container">
          <div className="adg-c-section-header">
            <span className="adg-c-eyebrow">
              What Is Included on Viking Cruises
            </span>

            <h2 className="adg-c-h2">
              The Core Inclusions Found <br /> in Every Viking Cruise Fare
            </h2>

            <div className="adg-c-accent-line"></div>

            <p className="Asc-section-intro">
              Several categories of inclusions appear across nearly every Viking
              sailing. Guests consistently benefit from included accommodations,
              dining, Wi-Fi, shore excursions, and educational enrichment
              programs.
            </p>
          </div>

          <div className="adg-c-venues-grid1">
            {[
              {
                id: 1,
                eyebrow: "Included #1",
                name: "Accommodations",
                highlight: "Comfortable Staterooms in Every Fare",
                items: [
                  "Comfortable Furnishings",
                  "Private Bathrooms",
                  "Daily Housekeeping",
                  "Premium Bedding",
                  "Climate Control",
                ],
                callout:
                  "Whether choosing a standard stateroom or an upgraded suite, accommodations are included in the base fare — thoughtfully designed cabins focused on relaxation and functionality.",
              },
              {
                id: 2,
                eyebrow: "Included #2",
                name: "Dining",
                highlight: "Breakfast, Lunch & Dinner Included",
                items: [
                  "Breakfast — Buffet & Made-to-Order",
                  "Lunch — Casual & Destination-Inspired",
                  "Dinner — Multi-Course Regional Cuisine",
                  "Specialty Dining (Ocean & Expedition)",
                  "Room Service (Many Ocean Cruises)",
                ],
                callout:
                  "Dining is designed to reflect the destinations visited while maintaining consistent quality throughout the voyage — one of the most appreciated Viking inclusions.",
              },
              {
                id: 3,
                eyebrow: "Included #3",
                name: "Beer and Wine with Meals",
                highlight: "Included During Lunch and Dinner",
                items: [
                  "Beer",
                  "Wine",
                  "Soft Drinks",
                  "Lunch Service",
                  "Dinner Service",
                ],
                callout:
                  "Unlike many mainstream cruise lines, Viking typically includes beer, wine, and soft drinks during meal service — adding significant value and reducing onboard spending.",
              },
              {
                id: 4,
                eyebrow: "Included #4",
                name: "Complimentary Wi-Fi",
                highlight: "Stay Connected Throughout Your Voyage",
                items: [
                  "Staying Connected with Family",
                  "Sharing Travel Experiences",
                  "Checking Email",
                  "Basic Web Browsing",
                ],
                callout:
                  "While internet speeds may vary depending on location and ship type, complimentary Wi-Fi is one of Viking's most appreciated inclusions.",
              },
              {
                id: 5,
                eyebrow: "Included #5",
                name: "Shore Excursions",
                highlight: "At Least One Complimentary Excursion Per Port",
                items: [
                  "Guided City Tours",
                  "Historical Sites",
                  "Cultural Attractions",
                  "Local Landmarks",
                ],
                callout:
                  "This allows guests to begin exploring destinations immediately without purchasing additional tours — one of Viking's most valuable benefits.",
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

      {/* ══ WHAT'S INCLUDED BY CRUISE TYPE ══════════════════════════════ */}
      <section
        className="dac-reasons-section"
        style={{ backgroundColor: "var(--bg-white)" }}
      >
        <div className="dac-reasons-container">
          <div className="dac-reasons-header">
            <span className="dac-reasons-eyebrow">
              Viking Inclusions by Cruise Type
            </span>
            <h2 className="dac-reasons-title">
              What Is Included by Cruise Type
            </h2>
            <div className="dac-reasons-accent"></div>
            <p className="dac-reasons-lead">
              Inclusions vary slightly depending on the type of Viking voyage,
              but each cruise type bundles in accommodations, dining, Wi-Fi, and
              destination-focused experiences.
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
                <Ship size={18} />
              </span>
              <div className="dac-reasons-tab-text-wrap">
                <span className="dac-reasons-tab-num">01</span>
                <span className="dac-reasons-tab-title">
                  Viking River Cruise Inclusions
                </span>
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
                  Viking Ocean Cruise Inclusions
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
                <Mountain size={18} />
              </span>
              <div className="dac-reasons-tab-text-wrap">
                <span className="dac-reasons-tab-num">03</span>
                <span className="dac-reasons-tab-title">
                  Viking Expedition Cruise Inclusions
                </span>
              </div>
            </button>
          </div>

          <div className="dac-reasons-tabs-content">
            {/* Tab 5 — River Inclusions */}
            {activeReasonTab === 5 && (
              <div className="dac-reasons-tab-panel fade-in">
                <div className="dac-reasons-row dac-reasons-row--left-content">
                  <div className="dac-reasons-content">
                    <span className="dac-reasons-row-number">01</span>
                    <h3 className="dac-reasons-row-title">
                      What Is Included on Viking River Cruises
                    </h3>

                    <p className="dac-reasons-row-desc">
                      Because river ships visit city centers, guests often enjoy
                      convenient access to destinations alongside a
                      comprehensive set of included amenities.
                    </p>

                    <div className="dac-reasons-includes-grid">
                      {[
                        "Accommodations",
                        "All Meals Onboard",
                        "Beer & Wine with Lunch and Dinner",
                        "Wi-Fi",
                        "Guided Shore Excursions",
                        "Port Charges",
                        "Educational Programs",
                        "Scenic River Cruising",
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
                        src={VikingSuite}
                        alt="Viking river cruise scenic European waterway included excursion"
                        className="dac-reasons-img"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 6 — Ocean Inclusions */}
            {activeReasonTab === 6 && (
              <div className="dac-reasons-tab-panel fade-in">
                <div className="dac-reasons-row dac-reasons-row--right-content">
                  <div className="dac-reasons-media">
                    <div className="dac-reasons-img-container">
                      <img
                        src={VikingDining}
                        alt="Viking ocean cruise ship at sea included dining"
                        className="dac-reasons-img"
                      />
                    </div>
                  </div>

                  <div className="dac-reasons-content">
                    <span className="dac-reasons-row-number">02</span>
                    <h3 className="dac-reasons-row-title">
                      What Is Included on Viking Ocean Cruises
                    </h3>

                    <p className="dac-reasons-row-desc">
                      Ocean cruise fares generally include a wide range of
                      amenities that help simplify budgeting and improve overall
                      value.
                    </p>

                    <div className="dac-reasons-bullets">
                      {[
                        "Accommodations",
                        "Dining",
                        "Beer & Wine with Meals",
                        "Complimentary Wi-Fi",
                        "One Shore Excursion in Each Port",
                        "Specialty Dining Venues",
                        "Destination Lectures",
                        "Fitness Center Access",
                        "Port Taxes & Fees",
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

            {/* Tab 7 — Expedition Inclusions */}
            {activeReasonTab === 7 && (
              <div className="dac-reasons-tab-panel fade-in">
                <div className="dac-reasons-row dac-reasons-row--left-content">
                  <div className="dac-reasons-content">
                    <span className="dac-reasons-row-number">03</span>
                    <h3 className="dac-reasons-row-title">
                      What Is Included on Viking Expedition Cruises
                    </h3>

                    <p className="dac-reasons-row-desc">
                      Expedition voyages include many premium features, offering
                      some of the most comprehensive inclusion packages in the
                      Viking portfolio.
                    </p>

                    <div className="dac-reasons-pills">
                      {[
                        "Accommodations & Dining",
                        "Wi-Fi",
                        "Expedition Equipment",
                        "Expert-Led Educational Programs",
                        "Guided Landings & Excursions",
                        "Scientific Enrichment Activities",
                      ].map((pill, idx) => (
                        <span key={idx} className="dac-reasons-pill">
                          <Mountain size={12} style={{ marginRight: "6px" }} />
                          {pill}
                        </span>
                      ))}
                    </div>

                    <div
                      className="dac-reasons-callout"
                      style={{ marginTop: "20px" }}
                    >
                      <Quote size={18} className="dac-reasons-callout-icon" />
                      <p>
                        Observation opportunities and port charges round out
                        what is widely regarded as Viking's most inclusive
                        cruise category.
                      </p>
                    </div>
                  </div>

                  <div className="dac-reasons-media">
                    <div className="dac-reasons-img-container">
                      <img
                        src={VikingExpedition}
                        alt="Viking expedition cruise Antarctica included equipment"
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

      {/* ══ WHAT IS NOT INCLUDED ══════════════════════════════ */}
      <section
        className="Leg-section"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="Leg-container">
          {/* Header */}
          <div className="Leg-header">
            <h2 className="Leg-title">
              What Is NOT Included on Viking Cruises ?
            </h2>

            <div className="adg-c-accent-line"></div>

            <p className="Leg-subtitle">
              Although Viking includes many amenities, certain expenses remain
              additional depending on your booking and preferences.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="Leg-grid">
            {[
              {
                id: 1,
                accent: "blue",
                icon: X,
                title: "Airfare",
                description:
                  "Unless purchased as part of a promotion or package, airfare is generally not included in the cruise fare.",
                pills: ["Often Separate", "Promotions Vary", "Package Deals"],
                highlight:
                  "Viking occasionally offers reduced or included airfare promotions.",
              },

              {
                id: 2,
                accent: "gold",
                icon: Compass,
                title: "Premium Shore Excursions",
                description:
                  "Optional upgraded tours beyond the included complimentary excursion may carry extra charges.",
                pills: [
                  "Optional Upgrades",
                  "Private Tours",
                  "Specialty Experiences",
                ],
                highlight:
                  "The included excursion provides a strong starting point at every port.",
              },

              {
                id: 3,
                accent: "green",
                icon: Wine,
                title: "Premium Alcohol",
                description:
                  "Cocktails, premium wines, and spirits beyond standard beer and wine with meals may not be included.",
                pills: ["Cocktails", "Premium Wines", "Top-Shelf Spirits"],
                highlight:
                  "Standard beer, wine, and soft drinks remain included with meals.",
              },

              {
                id: 4,
                accent: "purple",
                icon: Users,
                title: "Spa & Personal Expenses",
                description:
                  "Massages, wellness services, travel insurance, and personal purchases like shopping and souvenirs remain additional.",
                pills: [
                  "Spa Treatments",
                  "Travel Insurance",
                  "Personal Purchases",
                ],
                highlight:
                  "Travel insurance is usually purchased separately and strongly recommended.",
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

      {/* ══ IMAGE GALLERY ════════════════════════════════════════════════════ */}
      <section className="dfg-gallery-section" id="dfg-gallery">
        <div className="dfg-gallery-container">
          <div className="dfg-gallery-header">
            <h2 className="dfg-gallery-title">Inside the Viking Experience</h2>

            <div className="dfg-gallery-accent"></div>

            <p className="dfg-gallery-intro">
              Scandinavian Design, Dining, and Ocean Views
            </p>

            <p className="dfg-gallery-description">
              Viking ships are known for elegant Scandinavian interiors,
              comfortable accommodations, destination-focused public spaces, and
              thoughtfully curated dining experiences.
            </p>
          </div>
          <div className="dfg-gallery-mosaic">
            {/* Explorer's Lounge */}
            <div
              className="dfg-gallery-item dfg-gallery-large"
              style={{ color: "#fff" }}
            >
              <img
                src={VikingExp5}
                alt="Viking Explorer's Lounge panoramic view"
                className="dfg-gallery-img"
              />
              <div className="dfg-gallery-overlay">
                <span className="dfg-gallery-caption">
                  Explorer's Lounge Panoramic Views
                </span>
              </div>
            </div>

            {/* Explorer Suite */}
            <div
              className="dfg-gallery-item dfg-gallery-tall"
              style={{ color: "#fff" }}
            >
              <img
                src={VikingExp6}
                alt="Viking Explorer Suite living room ocean view"
                className="dfg-gallery-img"
              />
              <div className="dfg-gallery-overlay">
                <span className="dfg-gallery-caption">
                  Explorer Suite Ocean-View Living Room
                </span>
              </div>
            </div>

            {/* Mamsen's */}
            <div
              className="dfg-gallery-item dfg-gallery-wide"
              style={{ color: "#fff" }}
            >
              <img
                src={VikingExp7}
                alt="Mamsen's Scandinavian Deli onboard Viking"
                className="dfg-gallery-img"
              />
              <div className="dfg-gallery-overlay">
                <span className="dfg-gallery-caption">
                  Mamsen's Scandinavian Deli
                </span>
              </div>
            </div>

            {/* The Restaurant */}
            <div
              className="dfg-gallery-item dfg-gallery-square"
              style={{ color: "#fff" }}
            >
              <img
                src={VikingExp8}
                alt="The Restaurant ocean-view dining on Viking"
                className="dfg-gallery-img"
              />
              <div className="dfg-gallery-overlay">
                <span className="dfg-gallery-caption">
                  Ocean-View Dining at The Restaurant
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ DESTINATION-FOCUSED ENRICHMENT PROGRAMS ════════════════════════════════════ */}
      <section
        className="dac-ent-section"
        style={{ backgroundColor: "var(--bg-white)" }}
      >
        <div className="dac-ent-container">
          <div className="dac-ent-header">
            <h2 className="dac-ent-title" style={{ textAlign: "center" }}>
              Destination-Focused Enrichment Programs
            </h2>
            <div className="adg-c-accent-line"></div>
            <p className="dac-ent-intro">
              Education is a major part of the Viking experience. Viking's
              enrichment programs help travelers gain a deeper understanding of
              the destinations they visit through expert insights, cultural
              programming, and educational presentations.
            </p>
          </div>

          <div className="dac-ent-grid" style={{ gap: "30px" }}>
            {[
              {
                title: "Destination Lectures",
                desc: "Learn about local history, culture, traditions, and important landmarks before arriving in each destination.",
              },
              {
                title: "Guest Speakers",
                desc: "Experts, historians, and regional specialists provide unique perspectives and valuable insights throughout the voyage.",
              },
              {
                title: "Cultural Presentations",
                desc: "Programs designed to enhance understanding and appreciation of the regions, customs, and cultures being visited.",
              },
              {
                title: "Expedition Team Briefings",
                desc: "Available on Viking Expedition Cruises, these sessions prepare guests for landings, wildlife encounters, and exploration activities.",
              },
              {
                title: "Educational Value",
                desc: "For many travelers, these enrichment opportunities become one of the most memorable and valuable aspects of the Viking experience.",
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
      </section>

      {/* ACCESS TO PUBLIC SPACES AND AMENITIES */}
      <section className="azs-suites-section" id="azs-suites">
        <div className="azs-container">
          <div className="azs-section-header">
            <h2 className="azs-section-title">
              Access to Public Spaces and Amenities
            </h2>
            <div className="azs-section-accent"></div>
            <p className="azs-section-subtitle">
              Your Viking cruise fare includes access to a variety of onboard
              facilities designed for relaxation, enrichment, and scenic
              viewing.
            </p>
          </div>

          <div className="azs-suites-grid">
            {/* Public Spaces Card */}
            <div className="azs-suites-card azs-seabourn-suites">
              <div className="azs-suites-image-wrap">
                <img
                  src={VikingExp2}
                  alt="Viking public spaces and lounges"
                  className="azs-suites-img"
                />
                <span className="azs-suites-image-badge">
                  Included Amenities
                </span>
              </div>

              <div className="azs-suites-content">
                <div className="azs-suites-card-header">
                  <div className="azs-suites-icon-circle">
                    <Ship size={24} className="azs-suites-icon" />
                  </div>
                  <h3 className="azs-suites-title">
                    Public Spaces & Facilities
                  </h3>
                </div>

                <p className="azs-suites-intro">
                  Guests enjoy complimentary access to many shipboard spaces
                  throughout the voyage.
                </p>

                <div className="azs-suites-body">
                  <h4 className="azs-suites-group-title">
                    Depending on the ship:
                  </h4>

                  <ul className="azs-suites-list">
                    {[
                      "Observation Areas",
                      "Lounges",
                      "Libraries",
                      "Fitness Centers",
                      "Walking Decks",
                      "Pools (Ocean Ships)",
                      "Outdoor Viewing Areas",
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
                      These facilities are available throughout the voyage
                      without additional charges.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Entertainment Card */}
            <div className="azs-suites-card azs-azamara-suites">
              <div className="azs-suites-image-wrap">
                <img
                  src={VikingExp3}
                  alt="Viking onboard entertainment and enrichment programs"
                  className="azs-suites-img"
                />
                <span className="azs-suites-image-badge">
                  Included Entertainment
                </span>
              </div>

              <div className="azs-suites-content">
                <div className="azs-suites-card-header">
                  <div className="azs-suites-icon-circle">
                    <Award size={24} className="azs-suites-icon" />
                  </div>
                  <h3 className="azs-suites-title">
                    Enrichment-Focused Entertainment
                  </h3>
                </div>

                <p className="azs-suites-intro">
                  Viking's entertainment emphasizes culture, education, and
                  destination immersion rather than large-scale productions.
                </p>

                <div className="azs-suites-body">
                  <h4 className="azs-suites-group-title">
                    Guests often enjoy:
                  </h4>

                  <ul className="azs-suites-list">
                    {[
                      "Cultural Performances",
                      "Musical Entertainment",
                      "Educational Presentations",
                      "Regional Experiences",
                      "Guest Lectures",
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

                  <div className="azs-suites-highlight-box azs-azamara-suites-highlight">
                    <p className="azs-suites-highlight-text">
                      The focus remains on enrichment, learning, and destination
                      immersion throughout the journey.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ COMPARISON TABLE ══════════════════════════════════════════════════ */}
      <section className="Asc-section Asc-bg-soft" id="Asc-fleet">
        <div className="Asc-container">
          <div className="Asc-section-header">
            <h2 className="Asc-h2">
              Viking vs Other Cruise Lines: What's Included?
            </h2>
            <div className="Asc-accent-line"></div>
          </div>

          <div className="Asc-table-wrapper">
            <table className="Asc-fleet-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Viking</th>
                  <th>Many Mainstream Cruise Lines</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>Wi-Fi</strong>
                  </td>
                  <td>Included</td>
                  <td>Often Extra</td>
                </tr>
                <tr>
                  <td>
                    <strong>Excursions</strong>
                  </td>
                  <td>Included in Most Ports</td>
                  <td>Usually Extra</td>
                </tr>
                <tr>
                  <td>
                    <strong>Beer & Wine with Meals</strong>
                  </td>
                  <td>Included</td>
                  <td>Usually Extra</td>
                </tr>
                <tr>
                  <td>
                    <strong>Educational Programs</strong>
                  </td>
                  <td>Included</td>
                  <td>Limited</td>
                </tr>
                <tr>
                  <td>
                    <strong>Port Charges</strong>
                  </td>
                  <td>Often Included</td>
                  <td>Varies</td>
                </tr>
                <tr>
                  <td>
                    <strong>Specialty Dining</strong>
                  </td>
                  <td>Often Included</td>
                  <td>Frequently Extra</td>
                </tr>
                <tr>
                  <td>
                    <strong>Kids Programs</strong>
                  </td>
                  <td>Not Offered</td>
                  <td>Usually Included</td>
                </tr>
                <tr>
                  <td>
                    <strong>Casinos</strong>
                  </td>
                  <td>Not Offered</td>
                  <td>Usually Available</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div style={{ marginTop: "25px" }}>
            <p
              className="Asc-card-subtext"
              style={{ color: "var(--navy)", textAlign: "center" }}
            >
              Viking's value becomes more apparent when comparing included
              amenities side by side.
            </p>
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
            <h2 className="azs-h2">
              Viking Named a Leader in Ocean, <br /> River & Expedition Travel
            </h2>

            <div className="azs-accent-line"></div>

            <p className="azs-video-intro">
              Watch as Viking Chairman Torstein Hagen thanks guests and
              colleagues after Viking was recognized among the top cruise lines
              for ocean, river, and expedition travel.
            </p>
          </div>

          <div className="azs-video-wrapper">
            <div className="azs-video-frame">
              <iframe
                src="https://www.youtube.com/embed/OS6QIt8zumg"
                title="Viking Travel + Leisure Award Recognition"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* ══ WHY TRAVELERS APPRECIATE VIKING'S INCLUSIONS ════════════════════ */}
      <section
        className="dbf-fleet-breakdown-section"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="dbf-fleet-container">
          <div className="dbf-fleet-header">
            <h2 className="dbf-fleet-title">
              Why Travelers Appreciate Viking's Inclusions
            </h2>
            <div className="dbf-fleet-accent"></div>
          </div>

          <div className="dbf-fleet-grid">
            {[
              {
                name: "Simpler Budgeting",
                desc: "Fewer unexpected onboard charges make it easier to plan a complete vacation budget in advance.",
                icon: Bed,
              },
              {
                name: "Better Overall Value",
                desc: "Many essentials — dining, Wi-Fi, excursions — are already included in the fare.",
                icon: Star,
              },
              {
                name: "Enhanced Travel Experience",
                desc: "Guests focus more on destinations and less on managing additional onboard expenses.",
                icon: Globe,
              },
              {
                name: "Greater Convenience",
                desc: "Planning becomes easier when major travel elements are bundled into a single fare.",
                icon: Anchor,
              },
              {
                name: "Educational Enrichment",
                desc: "Destination lectures, guest speakers, and cultural presentations are included throughout the voyage.",
                icon: GraduationCap,
              },
              {
                name: "Included Dining & Drinks",
                desc: "Multi-course meals, regional cuisine, and beer and wine with lunch and dinner reduce onboard spending.",
                icon: UtensilsCrossed,
              },
              {
                name: "Complimentary Wi-Fi",
                desc: "Staying connected with family and sharing travel experiences comes at no additional charge.",
                icon: Wifi,
              },
            ].map((traveler, idx) => {
              const IconComponent = traveler.icon;

              return (
                <div key={idx} className="dbf-ship-overview-card">
                  <div className="dbf-ship-card-icon-wrap">
                    <IconComponent size={22} />
                  </div>

                  <h3 className="dbf-ship-card-name">{traveler.name}</h3>

                  <p className="dbf-ship-card-desc">{traveler.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
  2. IS VIKING CLOSE TO ALL-INCLUSIVE
  ════════════════════════════════════════ */}

      <section className="adg-c-section adg-c-bg-white">
        <div className="adg-c-container">
          <div className="adg-c-section-header">
            <h2 className="adg-c-h2">Is Viking Close to All-Inclusive?</h2>
            <div className="adg-c-accent-line"></div>
          </div>

          <div className="adg-c-overview-layout">
            {/* LEFT — list */}
            <div className="adg-c-overview-icons">
              <div className="adg-c-overview-item">
                <span className="adg-c-overview-icon">✔</span>
                <span className="adg-c-overview-label">Accommodations</span>
              </div>

              <div className="adg-c-overview-item">
                <span className="adg-c-overview-icon">✔</span>
                <span className="adg-c-overview-label">Dining</span>
              </div>

              <div className="adg-c-overview-item">
                <span className="adg-c-overview-icon">✔</span>
                <span className="adg-c-overview-label">Wi-Fi</span>
              </div>

              <div className="adg-c-overview-item">
                <span className="adg-c-overview-icon">✔</span>
                <span className="adg-c-overview-label">Shore Excursions</span>
              </div>

              <div className="adg-c-overview-item">
                <span className="adg-c-overview-icon">✔</span>
                <span className="adg-c-overview-label">
                  Beer & Wine with Meals
                </span>
              </div>

              <div className="adg-c-overview-item">
                <span className="adg-c-overview-icon">✔</span>
                <span className="adg-c-overview-label">
                  Educational Enrichment
                </span>
              </div>

              <div className="adg-c-overview-item">
                <span className="adg-c-overview-icon">✔</span>
                <span className="adg-c-overview-label">Port Taxes & Fees</span>
              </div>
              <div className="adg-c-overview-item">
                <span className="adg-c-overview-icon">✔</span>
                <span className="adg-c-overview-label">Specialty Dining</span>
              </div>
            </div>

            {/* RIGHT — callout card + image */}
            <div className="adg-c-overview-right">
              <div className="adg-c-overview-callout">
                <div className="adg-c-overview-callout-inner">
                  <Star size={28} className="adg-c-callout-star" />
                  <p className="adg-c-callout-text">
                    While not technically all-inclusive, Viking comes closer
                    than many cruise brands. Many travelers find that once
                    onboard, additional spending is minimal unless they choose
                    premium excursions, spa services, specialty beverages, or
                    shopping. For destination-focused travelers, Viking's
                    inclusion model offers strong value.
                  </p>
                </div>
              </div>

              <div className="adg-c-overview-image-wrap">
                <img
                  src={VikingExp4}
                  alt="Viking cruise guest experience included amenities"
                  className="adg-c-overview-img"
                />
                <div className="adg-c-overview-img-overlay">
                  <span className="adg-c-overview-img-label">
                    Viking Inclusions
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
              Everything you need to know about what's included on Viking
              Cruises.
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
                <span className="Asc-help-eyebrow">
                  Viking Cruise Inclusions
                </span>
                <h2 className="Asc-help-h2">
                  The Best Vacations Aren't About <br /> Constantly Reaching for
                  Your Wallet
                </h2>
                <div className="Asc-help-accent"></div>
              </div>

              <div className="Asc-help-grid">
                <div className="Asc-help-info">
                  <p className="Asc-help-intro">
                    Viking Cruises has built its reputation on providing a
                    travel experience that emphasizes value, simplicity, and
                    destination immersion.
                  </p>
                  <p className="Asc-help-intro">
                    By including accommodations, dining, Wi-Fi, shore
                    excursions, educational programming, and many other
                    amenities within the cruise fare, Viking allows travelers to
                    focus on exploring the world rather than managing additional
                    expenses.
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
                      Whether you're sailing a European river, crossing the
                      Mediterranean, or embarking on an expedition to
                      Antarctica, Viking's inclusion model helps create a more
                      seamless and enriching travel experience.
                      <br />
                      <br />
                      Because the best vacations aren't about constantly
                      reaching for your wallet.
                      <br />
                      <br />
                      <strong>
                        They're about enjoying every moment of the journey.
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
                    What's Included on Viking Cruises:
                  </h3>
                  <ul className="Asc-help-bullets">
                    {[
                      "Accommodations",
                      "Dining",
                      "Complimentary Wi-Fi",
                      "Shore Excursions in Most Ports",
                      "Beer & Wine with Meals",
                      "Educational Enrichment Programs",
                      "Port Taxes and Fees",
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
                      Contact Trips &amp; Ships Luxury Travel to learn more
                      about what's included on your ideal Viking voyage.
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

export default WhatIsIncludedOnVikingCruises;
