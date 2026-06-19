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
  Globe,
  Waves,
  Mountain,
  X,
  Sparkles,
} from "lucide-react";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela2.jpeg";
import { Helmet } from "react-helmet-async";

import HeroImage1 from "../../assets/VikingRiverCruises/budapest-hungary-river-cruise-danube.jpg";
import HeroImage2 from "../../assets/VikingRiverCruises/viking-expedition-ship-welland-canal.jpg";
import HeroImage3 from "../../assets/VikingRiverCruises/viking-river-cruises.jpg";
import Vikingrhine from "../../assets/VikingRiverCruises/Rhine-River.jpg";
import Vikingdanube from "../../assets/VikingRiverCruises/Danube-River.jpg";
import VikingExp1 from "../../assets/VikingRiverCruises/Explorer Suite.jpg";
import VikingExp2 from "../../assets/VikingRiverCruises/Explorer Suite - Living-Room.jpg";
import VikingExp3 from "../../assets/VikingRiverCruises/The-Living-Room.jpg";
import VikingExp4 from "../../assets/VikingRiverCruises/Aquavit-Terrace_.jpg";
import VikingExp5 from "../../assets/VikingRiverCruises/avignon-france-river-cruise-view.jpg";
import VikingExp6 from "../../assets/VikingRiverCruises/Expedition-Ship-Welland-Canal.jpg";
import VikingExp7 from "../../assets/VikingRiverCruises/Aquavit-Terrace.jpg";
import VikingExp8 from "../../assets/VikingRiverCruises/Aquavit-dinig.jpg";
import VikingCta from "../../assets/VikingRiverCruises/viking-Exterior.jpg";

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
        "Luxury travel experts helping travelers discover Viking river cruise experiences through expert guidance and personalized travel planning.",
    },
    {
      "@type": "WebPage",
      "@id": "https://www.tripsandships.com/viking-river-cruises",
      url: "https://www.tripsandships.com/viking-river-cruises",
      name: "Viking River Cruises | Europe's Most Popular River Cruise Experiences",
      description:
        "Discover Viking River Cruises and explore Europe's iconic waterways, cultural destinations, and immersive travel experiences. Learn why Viking is a leader in river cruising for travelers seeking history, culture, and destination-focused adventures.",
      isPartOf: { "@id": "https://www.tripsandships.com/#website" },
      about: [{ "@type": "Organization", name: "Viking Cruises" }],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.tripsandships.com/viking-river-cruises#breadcrumb",
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
          name: "Viking River Cruises",
          item: "https://www.tripsandships.com/viking-river-cruises",
        },
      ],
    },
    {
      "@type": "ItemList",
      "@id": "https://www.tripsandships.com/viking-river-cruises#itemlist",
      name: "Popular Viking River Cruise Itineraries",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Rhine River Cruises" },
        { "@type": "ListItem", position: 2, name: "Danube River Cruises" },
        { "@type": "ListItem", position: 3, name: "Seine River Cruises" },
        { "@type": "ListItem", position: 4, name: "Douro River Cruises" },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.tripsandships.com/viking-river-cruises#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is Viking River Cruises known for?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Viking is known for destination-focused river cruising with cultural enrichment, included excursions, and elegant ships.",
          },
        },
        {
          "@type": "Question",
          name: "Are Viking River Cruises all-inclusive?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Not fully, but many amenities such as dining, Wi-Fi, excursions, and beer and wine with meals are included.",
          },
        },
        {
          "@type": "Question",
          name: "What is the most popular Viking River Cruise?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Rhine and Danube River itineraries are among Viking's most popular offerings.",
          },
        },
        {
          "@type": "Question",
          name: "Are Viking River Cruises adults-only?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Guests are generally required to be at least 18 years old.",
          },
        },
        {
          "@type": "Question",
          name: "Does Viking offer excursions on river cruises?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Most itineraries include at least one guided excursion in every port.",
          },
        },
        {
          "@type": "Question",
          name: "Are Viking River Cruises luxury cruises?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Viking is generally considered a premium or upper-premium river cruise brand with many luxury-style features.",
          },
        },
        {
          "@type": "Question",
          name: "Which Viking River Cruise is best for first-time travelers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Rhine River and Danube River cruises are often recommended for first-time guests.",
          },
        },
        {
          "@type": "Question",
          name: "Are drinks included on Viking River Cruises?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Beer, wine, and soft drinks with meals are typically included.",
          },
        },
        {
          "@type": "Question",
          name: "Is Wi-Fi included on Viking River Cruises?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Complimentary Wi-Fi is generally available onboard.",
          },
        },
        {
          "@type": "Question",
          name: "Are Viking River Cruises worth the cost?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Many travelers believe Viking offers strong value due to included excursions, destination access, service, and cultural experiences.",
          },
        },
        {
          "@type": "Question",
          name: "What is the dress code onboard a Viking river cruise?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The dress code is casual and comfortable. There are no formal nights, but guests often wear smart casual attire for dinner. Comfortable walking shoes are highly recommended for shore excursions.",
          },
        },
        {
          "@type": "Question",
          name: "Is there laundry service on Viking river cruise ships?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, laundry services are available onboard for a fee. Some stateroom classes include complimentary laundry, but self-service launderettes are not typically available on river ships.",
          },
        },
        {
          "@type": "Question",
          name: "Are gratuities included in the fare for Viking river cruises?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Gratuities are not included in the cruise fare. Tips for the ship's crew and local tour guides are discretionary, though Viking provides recommended daily amounts which can be paid onboard or pre-paid.",
          },
        },
        {
          "@type": "Question",
          name: "How does Viking handle dietary restrictions and allergies onboard?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Viking's chefs can accommodate most dietary requests, including vegetarian, low-sodium, diabetic, and gluten-free diets. It is best to notify Viking in advance and discuss dietary needs with the maître d' upon embarkation.",
          },
        },
        {
          "@type": "Question",
          name: "Can I bring my own wine or alcohol onboard a Viking river ship?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Guests are welcome to bring local wines, beers, or spirits onboard and consume them in their staterooms or at dinner with no corkage fees.",
          },
        },
      ],
    },
    {
      "@type": "Review",
      "@id": "https://www.tripsandships.com/viking-river-cruises#review",
      itemReviewed: {
        "@type": "TravelAction",
        name: "Viking River Cruises",
      },
      reviewBody:
        "Viking River Cruises offers award-winning European and international river voyages designed for curious adult travelers — combining elegant ships, inclusive pricing, destination-focused itineraries, and cultural enrichment programs that set it apart in the river cruise industry.",
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
      "@id": "https://www.tripsandships.com/viking-river-cruises#touristtrip",
      name: "Viking River Cruises — European & International River Voyages",
      description:
        "Award-winning Viking river cruises exploring Europe's iconic waterways, the Nile, the Mekong, and beyond — designed for culturally curious adult travelers seeking immersive destination experiences.",
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
      q: "What is Viking River Cruises known for?",
      a: "Viking is known for destination-focused river cruising with cultural enrichment, included excursions, and elegant ships.",
    },
    {
      q: "Are Viking River Cruises all-inclusive?",
      a: "Not fully, but many amenities such as dining, Wi-Fi, excursions, and beer and wine with meals are included.",
    },
    {
      q: "What is the most popular Viking River Cruise?",
      a: "Rhine and Danube River itineraries are among Viking's most popular offerings.",
    },
    {
      q: "Are Viking River Cruises adults-only?",
      a: "Yes. Guests are generally required to be at least 18 years old.",
    },
    {
      q: "Does Viking offer excursions on river cruises?",
      a: "Yes. Most itineraries include at least one guided excursion in every port.",
    },
    {
      q: "Are Viking River Cruises luxury cruises?",
      a: "Viking is generally considered a premium or upper-premium river cruise brand with many luxury-style features.",
    },
    {
      q: "Which Viking River Cruise is best for first-time travelers?",
      a: "The Rhine River and Danube River cruises are often recommended for first-time guests.",
    },
    {
      q: "Are drinks included on Viking River Cruises?",
      a: "Beer, wine, and soft drinks with meals are typically included.",
    },
    {
      q: "Is Wi-Fi included on Viking River Cruises?",
      a: "Yes. Complimentary Wi-Fi is generally available onboard.",
    },
    {
      q: "Are Viking River Cruises worth the cost?",
      a: "Many travelers believe Viking offers strong value due to included excursions, destination access, service, and cultural experiences.",
    },
    {
      q: "What is the dress code onboard a Viking river cruise?",
      a: "The dress code is casual and comfortable. There are no formal nights, but guests often wear smart casual attire for dinner. Comfortable walking shoes are highly recommended for shore excursions.",
    },
    {
      q: "Is there laundry service on Viking river cruise ships?",
      a: "Yes, laundry services are available onboard for a fee. Some stateroom classes include complimentary laundry, but self-service launderettes are not typically available on river ships.",
    },
    {
      q: "Are gratuities included in the fare for Viking river cruises?",
      a: "Gratuities are not included in the cruise fare. Tips for the ship's crew and local tour guides are discretionary, though Viking provides recommended daily amounts which can be paid onboard or pre-paid.",
    },
    {
      q: "How does Viking handle dietary restrictions and allergies onboard?",
      a: "Viking's chefs can accommodate most dietary requests, including vegetarian, low-sodium, diabetic, and gluten-free diets. It is best to notify Viking in advance and discuss dietary needs with the maître d' upon embarkation.",
    },
    {
      q: "Can I bring my own wine or alcohol onboard a Viking river ship?",
      a: "Yes. Guests are welcome to bring local wines, beers, or spirits onboard and consume them in their staterooms or at dinner with no corkage fees.",
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
const VikingRiverCruises = () => {
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
          Viking River Cruises | Europe's Most Popular River Cruise Experiences
        </title>
        <meta
          name="title"
          content="Viking River Cruises | Award-Winning River Cruise Vacations"
        />
        <meta
          name="description"
          content="Discover Viking River Cruises and explore Europe's iconic waterways, cultural destinations, and immersive travel experiences. Learn why Viking is a leader in river cruising for travelers seeking history, culture, and destination-focused adventures."
        />
        <meta
          property="og:title"
          content="Viking River Cruises | Europe's Most Popular River Cruise Experiences"
        />
        <meta
          property="og:description"
          content="Discover Viking River Cruises — award-winning river voyages through Europe's legendary waterways, designed for culturally curious adult travelers."
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content="https://www.tripsandships.com/viking-river-cruises"
        />
        <link
          rel="canonical"
          href="https://www.tripsandships.com/viking-river-cruises"
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
          <h1>Explore the World with Viking River Cruises</h1>
          <p>
            For travelers seeking a more immersive and culturally enriching way
            to explore the world, Viking River Cruises has become one of the
            most recognized names in river cruising.
          </p>
          <p>
            Unlike traditional ocean cruises that visit large ports and spend
            days at sea, river cruises place travelers directly in the heart of
            historic cities, charming villages, and iconic cultural
            destinations.
          </p>
          {readMore && (
            <>
              <p>
                With elegant ships, thoughtfully designed itineraries, and a
                strong focus on destination experiences, Viking River Cruises
                offers travelers the opportunity to discover Europe, Asia,
                Egypt, and North America in a unique and meaningful way.
              </p>
              <p>
                For many guests, river cruising is not simply a vacation. It's a
                journey through history, culture, architecture, cuisine, and
                local traditions.
              </p>
              <p>
                At Trips &amp; Ships Luxury Travel, we help travelers find the
                right Viking river itinerary for their travel style, interests,
                and preferred destinations.
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

      {/* ══ WHAT MAKES VIKING RIVER CRUISES DIFFERENT ════════════════════════ */}
      <section
        className="ugt-components-section"
        id="ugt-components"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="Asc-container">
          <div className="ugt-components-header">
            <h2 className="adg-c-h2">
              What Makes Viking River Cruises Different?
            </h2>
            <div className="adg-c-accent-line"></div>
          </div>

          <div className="ugt-components-list">
            <div className="ugt-component-row">
              {/* LEFT IMAGE */}
              <div className="ugt-component-image-wrapper">
                <div className="ugt-component-image-container">
                  <img
                    src={VikingExp6}
                    alt="Viking River Cruise sailing through Budapest Hungary Danube"
                    className="ugt-component-image"
                  />
                </div>
              </div>

              {/* RIGHT CONTENT */}
              <div className="ugt-component-content">
                <p className="ugt-component-text">
                  Viking helped popularize modern river cruising by focusing on
                  what many travelers value most — the destination itself.
                  Rather than emphasizing onboard attractions, Viking places
                  cultural immersion and historic exploration at the center of
                  every journey.
                </p>
                <p className="ugt-component-text">
                  The result is a travel experience that feels genuinely
                  different from mainstream cruising — quieter, more intimate,
                  and more enriching.
                </p>

                <div className="ugt-questions-box">
                  <span className="ugt-questions-title">
                    Viking River Cruises Focus On:
                  </span>
                  <ul className="ugt-questions-list">
                    {[
                      "Cultural Immersion",
                      "Historic Destinations",
                      "Smaller Ships",
                      "Scenic Sailing",
                      "Included Excursions",
                      "Adult-Focused Atmosphere",
                      "Educational Enrichment",
                      "Comfortable Accommodations",
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
            <h2 className="azs-h2">Discover Viking's Rhine Getaway Journey</h2>
            <div className="azs-accent-line"></div>
            <p className="azs-video-intro">
              Explore Europe's legendary waterways aboard a Viking river cruise
              — sailing directly into the hearts of historic cities, guided by
              Viking's signature cultural enrichment programs and exceptional
              service.
            </p>
          </div>

          <div className="azs-video-wrapper">
            <div className="azs-video-frame">
              <iframe
                src="https://www.youtube.com/embed/mm-TtRkvDwc"
                title="Discover the Viking River Cruise Experience"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* ══ WHY CHOOSE A RIVER CRUISE INSTEAD OF AN OCEAN CRUISE? ═══════════════════════ */}
      <section className="luc-why-section" id="luc-why-viking">
        <div className="luc-why-container">
          {/* LEFT — stacked images */}
          <div className="luc-why-images">
            <div className="luc-why-img-main-wrap" style={{ color: "#fff" }}>
              <img
                src={VikingExp1}
                alt="Viking river cruise guests dining with scenic views"
                className="luc-why-img-main"
              />
              <div className="luc-why-img-overlay"></div>
            </div>
            <div className="luc-why-img-accent-wrap" style={{ color: "#fff" }}>
              <img
                src={VikingExp2}
                alt="Viking river cruise restaurant regional cuisine"
                className="luc-why-img-accent"
              />
              <div className="luc-why-img-badge">
                <span className="luc-why-badge-num">5</span>
                <span className="luc-why-badge-text">Key Reasons</span>
              </div>
            </div>
          </div>

          {/* RIGHT — content */}
          <div className="luc-why-content">
            <h2 className="luc-why-title">
              Why Choose a River Cruise Instead of an Ocean Cruise?
            </h2>
            <div className="aac-accent-line aac-accent-white"></div>
            <p className="luc-why-intro">
              River cruising offers several unique advantages that redefine the
              traditional travel experience, bringing you closer to your
              destinations.
            </p>
            <div className="luc-why-features">
              {[
                {
                  num: "01",
                  title: "Sail Through the Heart of Destinations",
                  desc: "River ships dock directly in city centers rather than industrial ports, allowing guests to walk immediately into historic districts and major attractions.",
                },
                {
                  num: "02",
                  title: "Less Time at Sea",
                  desc: "Unlike ocean cruising, river voyages focus intensely on destination exploration with different, culturally rich ports visited on a daily basis.",
                },
                {
                  num: "03",
                  title: "Smaller Ships",
                  desc: "River vessels typically carry far fewer passengers than ocean liners, creating a significantly more intimate, personal, and relaxed atmosphere onboard.",
                },
                {
                  num: "04",
                  title: "Scenic Cruising",
                  desc: "Travelers enjoy continuously changing landscapes rather than vast stretches of open ocean. Castles, vineyards, and villages become part of the daily view.",
                },
                {
                  num: "05",
                  title: "Easy Access",
                  desc: "Guests experience multiple countries, languages, and cultures seamlessly, without the hassle of repeatedly packing and unpacking their luggage.",
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

      {/* ══ POPULAR RIVER CRUISE DESTINATIONS — TABBED SECTION ══════════════ */}
      <section className="dac-reasons-section">
        <div className="dac-reasons-container">
          <div className="dac-reasons-header">
            <span className="dac-reasons-eyebrow">
              Popular Viking River Cruise Destinations
            </span>
            <h2 className="dac-reasons-title">
              Popular Viking River Cruise Destinations
            </h2>
            <div className="dac-reasons-accent"></div>
            <p className="dac-reasons-lead">
              Viking operates river cruises throughout some of the world's most
              fascinating regions.
            </p>
          </div>

          <div className="dac-reasons-tabs-nav">
            <button
              className={`dac-reasons-tab-btn ${activeReasonTab === 5 ? "active" : ""}`}
              onClick={() => setActiveReasonTab(5)}
            >
              <span className="dac-reasons-tab-icon-wrap">
                <Waves size={18} />
              </span>
              <div className="dac-reasons-tab-text-wrap">
                <span className="dac-reasons-tab-num">01</span>
                <span className="dac-reasons-tab-title">Rhine</span>
              </div>
            </button>

            <button
              className={`dac-reasons-tab-btn ${activeReasonTab === 6 ? "active" : ""}`}
              onClick={() => setActiveReasonTab(6)}
            >
              <span className="dac-reasons-tab-icon-wrap">
                <Globe size={18} />
              </span>
              <div className="dac-reasons-tab-text-wrap">
                <span className="dac-reasons-tab-num">02</span>
                <span className="dac-reasons-tab-title">Danube</span>
              </div>
            </button>

            <button
              className={`dac-reasons-tab-btn ${activeReasonTab === 7 ? "active" : ""}`}
              onClick={() => setActiveReasonTab(7)}
            >
              <span className="dac-reasons-tab-icon-wrap">
                <Compass size={18} />
              </span>
              <div className="dac-reasons-tab-text-wrap">
                <span className="dac-reasons-tab-num">03</span>
                <span className="dac-reasons-tab-title">Seine</span>
              </div>
            </button>

            <button
              className={`dac-reasons-tab-btn ${activeReasonTab === 8 ? "active" : ""}`}
              onClick={() => setActiveReasonTab(8)}
            >
              <span className="dac-reasons-tab-icon-wrap">
                <Mountain size={18} />
              </span>
              <div className="dac-reasons-tab-text-wrap">
                <span className="dac-reasons-tab-num">04</span>
                <span className="dac-reasons-tab-title">Rhône & Douro</span>
              </div>
            </button>

            <button
              className={`dac-reasons-tab-btn ${activeReasonTab === 9 ? "active" : ""}`}
              onClick={() => setActiveReasonTab(9)}
            >
              <span className="dac-reasons-tab-icon-wrap">
                <Globe size={18} />
              </span>
              <div className="dac-reasons-tab-text-wrap">
                <span className="dac-reasons-tab-num">05</span>
                <span className="dac-reasons-tab-title">Nile & Mekong</span>
              </div>
            </button>
          </div>

          <div className="dac-reasons-tabs-content">
            {/* Tab 5 — Rhine */}
            {activeReasonTab === 5 && (
              <div className="dac-reasons-tab-panel fade-in">
                <div className="dac-reasons-row dac-reasons-row--left-content">
                  <div className="dac-reasons-content">
                    <span className="dac-reasons-row-number">01</span>
                    <h3 className="dac-reasons-row-title">
                      Rhine River Cruises
                    </h3>
                    <p className="dac-reasons-row-desc">
                      The Rhine is one of Viking's most popular itineraries and
                      is frequently recommended for first-time river cruisers.
                      Travelers sail past fairytale castles, charming villages,
                      world-famous vineyards, and historic cultural landmarks.
                    </p>
                    <div className="dac-reasons-pills">
                      {[
                        "Netherlands",
                        "Germany",
                        "France",
                        "Switzerland",
                        "Historic Castles",
                        "Vineyards",
                      ].map((pill, idx) => (
                        <span key={idx} className="dac-reasons-pill">
                          <Waves size={12} style={{ marginRight: "6px" }} />
                          {pill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="dac-reasons-media">
                    <div className="dac-reasons-img-container">
                      <img
                        // src={HeroImage1}
                        alt="Viking Rhine River Cruise scenic European landscapes"
                        className="dac-reasons-img"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 6 — Danube */}
            {activeReasonTab === 6 && (
              <div className="dac-reasons-tab-panel fade-in">
                <div className="dac-reasons-row dac-reasons-row--right-content">
                  <div className="dac-reasons-media">
                    <div className="dac-reasons-img-container">
                      <img
                        // src={VikingRiver}
                        alt="Viking Danube River Cruise Budapest Hungary"
                        className="dac-reasons-img"
                      />
                    </div>
                  </div>
                  <div className="dac-reasons-content">
                    <span className="dac-reasons-row-number">02</span>
                    <h3 className="dac-reasons-row-title">
                      Danube River Cruises
                    </h3>
                    <p className="dac-reasons-row-desc">
                      The Danube blends imperial architecture, classical music
                      heritage, and breathtaking scenery across Central Europe.
                      Key highlights include Vienna, Budapest, and Bratislava.
                    </p>
                    <div className="dac-reasons-bullets">
                      {[
                        "Vienna — Imperial Architecture",
                        "Budapest — One of Europe's Most Beautiful Capitals",
                        "Bratislava — Historic Old Town",
                        "Scenic Countryside Villages",
                      ].map((bullet, idx) => (
                        <div key={idx} className="dac-reasons-bullet-item">
                          <Globe
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

            {/* Tab 7 — Seine */}
            {activeReasonTab === 7 && (
              <div className="dac-reasons-tab-panel fade-in">
                <div className="dac-reasons-row dac-reasons-row--left-content">
                  <div className="dac-reasons-content">
                    <span className="dac-reasons-row-number">03</span>
                    <h3 className="dac-reasons-row-title">
                      Seine River Cruises
                    </h3>
                    <p className="dac-reasons-row-desc">
                      Viking's Seine itineraries explore France's rich history
                      and culture — from iconic Paris to the historic Normandy
                      landing beaches and the authentic charm of French
                      villages.
                    </p>
                    <div className="dac-reasons-pills">
                      {[
                        "Paris",
                        "Normandy",
                        "French Villages",
                        "Culinary Traditions",
                        "Regional Wine",
                        "WWII History",
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
                        // src={VikingMediterranean}
                        alt="Viking Seine River Cruise France Paris Normandy"
                        className="dac-reasons-img"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 8 — Rhône & Douro */}
            {activeReasonTab === 8 && (
              <div className="dac-reasons-tab-panel fade-in">
                <div className="dac-reasons-row dac-reasons-row--right-content">
                  <div className="dac-reasons-media">
                    <div className="dac-reasons-img-container">
                      <img
                        // src={VikingExp8}
                        alt="Rhône River Cruise Southern France Avignon Provence"
                        className="dac-reasons-img"
                      />
                    </div>
                  </div>
                  <div className="dac-reasons-content">
                    <span className="dac-reasons-row-number">04</span>
                    <h3 className="dac-reasons-row-title">
                      Rhône & Douro River Cruises
                    </h3>
                    <p className="dac-reasons-row-desc">
                      The Rhône winds through Southern France past Provence,
                      vineyards, and medieval towns with Roman ruins — a
                      favorite for food and wine enthusiasts. Portugal's Douro
                      Valley offers terraced UNESCO vineyards and spectacular
                      river scenery.
                    </p>
                    <div className="dac-reasons-bullets">
                      {[
                        "Provence & Southern France",
                        "Medieval Towns & Roman Ruins",
                        "Douro Valley — UNESCO Wine Region",
                        "Portuguese Heritage & Scenic Landscapes",
                      ].map((bullet, idx) => (
                        <div key={idx} className="dac-reasons-bullet-item">
                          <Mountain
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

            {/* Tab 9 — Nile & Mekong */}
            {activeReasonTab === 9 && (
              <div className="dac-reasons-tab-panel fade-in">
                <div className="dac-reasons-row dac-reasons-row--left-content">
                  <div className="dac-reasons-content">
                    <span className="dac-reasons-row-number">05</span>
                    <h3 className="dac-reasons-row-title">
                      Nile & Mekong River Cruises
                    </h3>
                    <p className="dac-reasons-row-desc">
                      For travelers fascinated by ancient civilizations or
                      Southeast Asian culture, Viking offers Nile River cruises
                      through Egypt and select Mekong itineraries through
                      Vietnam and Cambodia.
                    </p>
                    <div className="dac-reasons-bullets">
                      {[
                        "Luxor & Karnak Temple",
                        "Valley of the Kings",
                        "Aswan & Ancient Egyptian Monuments",
                        "Vietnam & Cambodia Cultural Landmarks",
                      ].map((bullet, idx) => (
                        <div key={idx} className="dac-reasons-bullet-item">
                          <Globe
                            size={16}
                            className="dac-reasons-bullet-icon"
                          />
                          <span>{bullet}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="dac-reasons-media">
                    <div className="dac-reasons-img-container">
                      <img
                        // src={VikingAntarctica}
                        alt="Viking Nile River Cruise Egypt ancient monuments"
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

      {/* LIFE ONBOARD A VIKING RIVER SHIP */}
      <section
        className="dmg-info-section dmg-bg-white"
        id="dmg-accommodations"
      >
        <div className="dmg-info-container">
          <div className="dmg-info-grid">
            <div className="dmg-info-content">
              <h2 className="dmg-info-title">
                Life Onboard a Viking River Ship
              </h2>
              <div className="dmg-info-accent"></div>

              <p className="dmg-info-lead">
                Viking ships are designed to complement the destinations they
                visit, creating an atmosphere focused on comfort, culture, and
                exploration.
              </p>

              <div className="dmg-info-features">
                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Scandinavian Design
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Clean, elegant, and comfortable interiors inspired by
                      Nordic design principles.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">Panoramic Views</h3>
                    <p className="dmg-info-feature-desc">
                      Large windows maximize scenic viewing opportunities
                      throughout the voyage.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Comfortable Public Spaces
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Ideal for relaxing, reading, or socializing after a day of
                      exploration.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Destination-Focused Atmosphere
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Guests spend more time discussing travel experiences than
                      onboard attractions.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Smaller Guest Capacity
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Creates a more personal and intimate onboard environment.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="dmg-info-media">
              <div className="dmg-media-wrapper">
                <img
                  src={VikingExp3}
                  alt="Life onboard a Viking River Ship"
                  className="dmg-media-img"
                />
                <div className="dmg-media-overlay"></div>

                <div className="dmg-media-badge">
                  <span>Destination-Focused Experience</span>
                </div>
              </div>
            </div>
          </div>

          <p
            className="dmg-info-lead"
            style={{
              marginTop: "40px",
              textAlign: "center",
              maxWidth: "900px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Many travelers appreciate the peaceful and sophisticated atmosphere.
          </p>
        </div>
      </section>

      {/* ══ COMPARISON TABLE ══════════════════════════════════════════════════ */}
      <section className="Asc-section Asc-bg-soft" id="Asc-fleet">
        <div className="Asc-container">
          <div className="Asc-section-header">
            <h2 className="Asc-h2">Viking River Cruises vs Ocean Cruises</h2>
            <div className="Asc-accent-line"></div>
          </div>

          <div className="Asc-table-wrapper">
            <table className="Asc-fleet-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Viking River Cruises</th>
                  <th>Traditional Ocean Cruises</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>Ship Size</strong>
                  </td>
                  <td>Small</td>
                  <td>Large</td>
                </tr>
                <tr>
                  <td>
                    <strong>Passenger Count</strong>
                  </td>
                  <td>Lower</td>
                  <td>Higher</td>
                </tr>
                <tr>
                  <td>
                    <strong>Destination Access</strong>
                  </td>
                  <td>City Centers</td>
                  <td>Major Ports</td>
                </tr>
                <tr>
                  <td>
                    <strong>Scenic Cruising</strong>
                  </td>
                  <td>Constant</td>
                  <td>Occasional</td>
                </tr>
                <tr>
                  <td>
                    <strong>Family Programs</strong>
                  </td>
                  <td>No</td>
                  <td>Often Yes</td>
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
                    <strong>Included Excursions</strong>
                  </td>
                  <td>Often Included</td>
                  <td>Frequently Extra</td>
                </tr>
                <tr>
                  <td>
                    <strong>Atmosphere</strong>
                  </td>
                  <td>Relaxed &amp; Educational</td>
                  <td>Varies</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ══ VIKING RIVER CRUISE EXPERIENCE SPOTLIGHTS ══════════════════════ */}
      <section className="dbf-spotlight-section">
        <div className="dbf-spotlight-container">
          <div className="dbf-spotlight-header">
            <h2 className="dbf-spotlight-title">
              Viking River Cruise Highlights
            </h2>
            <div className="dbf-spotlight-accent"></div>
          </div>

          <div className="dbf-spotlight-grid">
            {/* CARD 1: Dining on Viking */}
            <div className="dbf-spotlight-card dbf-spotlight-card--wish">
              <div className="dbf-spotlight-card-header">
                <span className="dbf-spotlight-card-badge">
                  Culinary Experience
                </span>
                <h3 className="dbf-spotlight-card-title">
                  Dining on Viking River Cruises
                </h3>
              </div>

              <div className="dbf-spotlight-card-media">
                <img
                  src={VikingExp4}
                  alt="Dining on Viking River Cruises"
                  className="dbf-spotlight-card-img"
                />
                <div className="dbf-spotlight-card-img-overlay"></div>
                <div className="dbf-spotlight-card-icon-badge">
                  <Sparkles size={18} />
                </div>
              </div>

              <div className="dbf-spotlight-card-body">
                <p className="dbf-spotlight-card-lead">
                  Dining on Viking emphasizes regional cuisine, fresh
                  ingredients, and local flavors inspired by the destinations
                  visited.
                </p>

                <div className="dbf-spotlight-features-box">
                  <h4 className="dbf-spotlight-features-title">
                    What Guests Enjoy
                  </h4>

                  <ul className="dbf-spotlight-features-list">
                    {[
                      {
                        title: "Fresh Ingredients",
                        text: "Prepared with quality seasonal products.",
                      },
                      {
                        title: "Destination-Inspired Menus",
                        text: "Reflecting local culinary traditions.",
                      },
                      {
                        title: "Regional Specialties",
                        text: "Authentic flavors from each destination.",
                      },
                      {
                        title: "International Favorites",
                        text: "Familiar options alongside local dishes.",
                      },
                      {
                        title: "Relaxed Dining Atmosphere",
                        text: "Comfortable and welcoming onboard experience.",
                      },
                      {
                        title: "Complimentary Beer & Wine",
                        text: "Included with lunch and dinner on many Viking itineraries.",
                      },
                      {
                        title: "Open Seating Dining",
                        text: "Flexible dining arrangements encourage a relaxed guest experience.",
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
                  Many travelers consider dining one of the highlights of a
                  Viking voyage.
                </p>
              </div>
            </div>

            {/* CARD 2: Mature Travelers */}
            <div className="dbf-spotlight-card dbf-spotlight-card--fantasy">
              <div className="dbf-spotlight-card-header">
                <span className="dbf-spotlight-card-badge dbf-spotlight-card-badge--navy">
                  Popular Guest Profile
                </span>
                <h3 className="dbf-spotlight-card-title">
                  Viking River Cruises for Mature Travelers
                </h3>
              </div>

              <div className="dbf-spotlight-card-media">
                <img
                  src={VikingExp5}
                  alt="Mature travelers enjoying a Viking river cruise"
                  className="dbf-spotlight-card-img"
                />
                <div className="dbf-spotlight-card-img-overlay"></div>
                <div className="dbf-spotlight-card-icon-badge">
                  <Users size={18} />
                </div>
              </div>

              <div className="dbf-spotlight-card-body">
                <p className="dbf-spotlight-card-lead">
                  Viking appeals strongly to travelers who prioritize culture,
                  learning, and destination-focused exploration.
                </p>

                <div className="dbf-spotlight-features-box">
                  <h4 className="dbf-spotlight-features-title">
                    Popular Guest Types
                  </h4>

                  <ul className="dbf-spotlight-features-list">
                    {[
                      {
                        title: "Retirees",
                        text: "Seeking enriching travel experiences.",
                      },
                      {
                        title: "Empty Nesters",
                        text: "Exploring the world at a relaxed pace.",
                      },
                      {
                        title: "Couples",
                        text: "Enjoying meaningful shared experiences.",
                      },
                      {
                        title: "Lifelong Learners",
                        text: "Interested in culture and history.",
                      },
                      {
                        title: "Solo Travelers",
                        text: "Looking for comfortable exploration.",
                      },
                      {
                        title: "History Enthusiasts",
                        text: "Drawn to immersive destinations.",
                      },
                      {
                        title: "Food & Wine Travelers",
                        text: "Interested in regional culinary experiences.",
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
                  The atmosphere tends to be quieter and more educational than
                  many mainstream cruise vacations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ IS VIKING RIVER FAMILY-FRIENDLY? ════════════════════════════════ */}
      <section className="adg-section">
        <div className="adg-container">
          <div className="adg-section-header" style={{ marginBottom: "60px" }}>
            <h2 className="adg-h2">
              Are Viking River Cruises Family-Friendly?
            </h2>
            <div className="adg-accent-line"></div>
          </div>

          <div
            className="adg-split-layout"
            style={{ alignItems: "flex-start" }}
          >
            <div className="adg-content-card-side">
              <img
                src={VikingExp7}
                alt="Adults-only Viking river cruise experience"
                className="adg-side-image"
                style={{ height: "30vh", border: "1px solid var(--navy)" }}
              />

              <div className="adg-info-card">
                <div className="adg-card-meta">
                  <Compass size={28} />
                  <span className="adg-meta-label">
                    Adult-Oriented River Cruise Experience
                  </span>
                </div>

                <p className="adg-card-lead">
                  Viking is not designed for families with young children.
                </p>

                <div className="adg-card-divider"></div>

                <p className="adg-card-subtext">
                  Guests must generally be at least 18 years old to sail on
                  Viking river cruises.
                </p>

                <p className="adg-card-subtext" style={{ marginTop: "18px" }}>
                  The cruise line focuses on cultural enrichment, destination
                  exploration, and a quieter onboard atmosphere designed
                  specifically for adult travelers.
                </p>
              </div>
            </div>

            <div className="adg-list-side">
              {[
                {
                  title: "No Kids Clubs",
                  icon: <Check size={20} />,
                },
                {
                  title: "No Water Slides or Family Attractions",
                  icon: <Waves size={20} />,
                },
                {
                  title: "No Children's Entertainment Programs",
                  icon: <Users size={20} />,
                },
                {
                  title: "No Character Experiences",
                  icon: <Star size={20} />,
                },
                {
                  title: "Designed for Adult Travelers Seeking Culture",
                  icon: <Compass size={20} />,
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

      {/* ══ BEST VIKING RIVER CRUISES FOR FIRST-TIME TRAVELERS ════════════ */}
      <section className="dac-families-section">
        <div className="dac-families-container">
          <div className="dac-families-grid">
            {/* Left Content Column */}
            <div className="dac-families-left">
              <div className="dac-families-heading-wrap">
                <h2 className="dac-families-title">
                  Best Viking River Cruises for First-Time Travelers
                </h2>
                <div className="dac-families-accent"></div>
              </div>

              <div className="dac-families-features">
                {[
                  {
                    title: "Rhine River Cruises",
                    desc: "Ideal combination of scenery, castles, and culture.",
                  },
                  {
                    title: "Danube River Cruises",
                    desc: "Excellent introduction to Central Europe.",
                  },
                  {
                    title: "Seine River Cruises",
                    desc: "Perfect for travelers interested in France.",
                  },
                  {
                    title: "Douro River Cruises",
                    desc: "Beautiful landscapes and wine experiences.",
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
                    src={Vikingrhine}
                    alt="Viking river cruise scenic journey"
                    className="dac-families-img"
                  />
                  <div className="dac-families-img-caption">
                    Rhine River Cruises
                  </div>
                </div>

                <div className="dac-families-img-card dac-families-img-card--secondary">
                  <img
                    src={Vikingdanube}
                    alt="Viking river cruise cultural destination experience"
                    className="dac-families-img"
                  />
                  <div className="dac-families-img-caption">Danube River</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ WHAT IS INCLUDED ══════════════════════════════════════════════════ */}
      <section
        className="ugt-components-section"
        style={{ backgroundColor: "var(--bg-white)" }}
      >
        <div className="Asc-container">
          <div className="ugt-components-header">
            <h2 className="adg-c-h2">
              What Is Included on a Viking River Cruise?
            </h2>
            <div className="adg-c-accent-line"></div>
          </div>

          <div className="ugt-components-list">
            <div className="ugt-component-row">
              {/* LEFT IMAGE */}
              <div className="ugt-component-image-wrapper">
                <div className="ugt-component-image-container">
                  <img
                    src={VikingExp8}
                    alt="Viking river cruise stateroom elegant comfortable accommodations"
                    className="ugt-component-image"
                  />
                </div>
              </div>

              {/* RIGHT CONTENT */}
              <div className="ugt-component-content">
                <p className="ugt-component-text">
                  One of Viking's most attractive features is its relatively
                  inclusive pricing structure. Depending on the itinerary, fares
                  often include a meaningful range of amenities that simplify
                  budgeting and reduce surprise expenses.
                </p>

                <p className="ugt-component-text">
                  This helps travelers compare the true cost of a Viking river
                  cruise more accurately against other options — once inclusions
                  are factored in, the value proposition often becomes clearer.
                </p>

                <div className="ugt-questions-box">
                  <span className="ugt-questions-title">
                    Often Included in Viking River Cruise Fares:
                  </span>
                  <ul className="ugt-questions-list">
                    {[
                      "Comfortable Stateroom Accommodations",
                      "Breakfast, Lunch & Dinner Onboard",
                      "Beer & Wine with Meals",
                      "Complimentary Wi-Fi",
                      "One Included Shore Excursion Per Port",
                      "Cultural Enrichment Programs & Lectures",
                      "Port Charges & Fees",
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
                    backgroundColor: "var(--bg-soft)",
                    padding: "12px",
                    borderRadius: "6px",
                  }}
                >
                  Inclusions vary by itinerary. Consult a Viking travel
                  specialist for details specific to your chosen voyage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ VIDEO SECTION 2 ══════════════════════════════════════════════════ */}
      <section
        className="azs-video-section"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="azs-container">
          <div className="azs-section-header">
            <h2 className="azs-h2">Explore the Danube with Viking</h2>
            <div className="azs-accent-line"></div>

            <p className="azs-video-intro">
              Soak up soothing steam at a Budapest thermal bath, learn to waltz
              at a traditional Viennese dance school, and savor authentic
              Austro-Hungarian cuisine in Vienna and Budapest
            </p>
          </div>

          <div className="azs-video-wrapper">
            <div className="azs-video-frame">
              <iframe
                src="https://www.youtube.com/embed/FFVou8VsXz4"
                title="Danube Waltz Itinerary | Viking"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* ══ IS VIKING RIVER WORTH IT? ══════════════════════════════════════ */}
      <section
        className="Asc-section Asc-alt-bg"
        style={{ backgroundColor: "var(--bg-white)" }}
      >
        <div className="Asc-container">
          <div className="Asc-section-header">
            <h2>Are Viking River Cruises Worth It?</h2>
            <div className="Asc-accent-line"></div>
          </div>

          <div className="Asc-who-grid">
            <div className="Asc-who-card Asc-who-yes">
              <h3 className="Asc-who-title">Worth It For</h3>

              <ul className="Asc-who-list">
                {[
                  "Cultural travelers",
                  "History enthusiasts",
                  "Couples",
                  "Retirees",
                  "Food and wine lovers",
                  "Destination-focused travelers",
                  "First-time river cruisers",
                ].map((item, i) => (
                  <li key={i}>
                    <Check size={16} className="Asc-icon-green" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="Asc-who-card Asc-who-no">
              <h3 className="Asc-who-title">May Not Be Ideal For</h3>

              <ul className="Asc-who-list">
                {[
                  "Families with young children",
                  "Travelers seeking nightlife",
                  "Budget-focused travelers",
                  "Guests wanting large-scale onboard attractions",
                  "Travelers seeking highly active entertainment",
                ].map((item, i) => (
                  <li key={i}>
                    <X size={16} className="Asc-icon-red" />
                    {item}
                  </li>
                ))}
              </ul>
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
              Everything you need to know about Viking River Cruises.
            </p>
          </div>
          <FAQ />
        </div>
      </section>

      {/* ══ CTA ═══════════════════════════════════════════════════════════════ */}
      <section className="Asc-help-section">
        <div className="Asc-help-bg-wrap">
          <img
            src={VikingCta}
            alt="Viking River Cruise scenic cultural destination experience"
            className="Asc-help-bg-img"
          />
          <div className="Asc-help-overlay"></div>
        </div>

        <div className="Asc-container">
          <div className="Asc-help-card">
            <div className="Asc-help-content">
              <div className="Asc-help-header">
                <span className="Asc-help-eyebrow">
                  Viking River Cruises Guide
                </span>
                <h2 className="Asc-help-h2">
                  The True Magic of River Cruising <br /> Is Found Beyond the
                  Riverbank
                </h2>
                <div className="Asc-help-accent"></div>
              </div>

              <div className="Asc-help-grid">
                <div className="Asc-help-info">
                  <p className="Asc-help-intro">
                    Viking River Cruises offers travelers a unique opportunity
                    to experience some of the world's most fascinating
                    destinations from a completely different perspective.
                  </p>
                  <p className="Asc-help-intro">
                    Whether you're sailing past medieval castles on the Rhine,
                    exploring imperial cities along the Danube, discovering
                    French culture on the Seine, or uncovering the mysteries of
                    ancient Egypt on the Nile, Viking combines comfort, culture,
                    and exploration into one seamless experience.
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
                      For travelers who value meaningful journeys over onboard
                      attractions, Viking River Cruises continues to set the
                      standard for destination-focused travel.
                      <br />
                      <br />
                      Because the true magic of river cruising isn't found
                      onboard.
                      <br />
                      <strong>
                        {" "}
                        It's found in the historic cities, breathtaking
                        landscapes, and unforgettable experiences waiting just
                        beyond the riverbank.
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
                      Explore Viking River Cruise Vacations
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>

                <div className="Asc-help-list-box">
                  <h3 className="Asc-help-list-title">
                    Why Travelers Choose Viking River Cruises:
                  </h3>
                  <ul className="Asc-help-bullets">
                    {[
                      "Destination-Focused Travel",
                      "Cultural Enrichment Programs",
                      "Award-Winning River Cruise Experiences",
                      "Scenic Sailing Through Historic Landscapes",
                      "Adults-Only Sophisticated Atmosphere",
                      "Inclusive Pricing Structure",
                      "Elegant Scandinavian Ship Design",
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
                      Contact Trips &amp; Ships Luxury Travel to explore Viking
                      river cruise itineraries and find the perfect voyage for
                      your travel style.
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

export default VikingRiverCruises;
