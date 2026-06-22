import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
  Sparkles,
} from "lucide-react";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela.jpeg";
import { Helmet } from "react-helmet-async";

import HeroImage1 from "../../assets/VikingDanubeRiverCruises/budapest-hungary-river-cruise-danube.jpg";
import HeroImage2 from "../../assets/VikingDanubeRiverCruises/vienna-austria-danube-river-cruise.jpg";
import HeroImage3 from "../../assets/VikingDanubeRiverCruises/wachau-valley-danube-river-cruise.jpg";
import vikingriver from "../../assets/VikingDanubeRiverCruises/Aschaffenburg-Germany.jpg";
import VikingExp1 from "../../assets/VikingDanubeRiverCruises/Explorer-Suite-Living-Room.jpg";
import VikingExp2 from "../../assets/VikingDanubeRiverCruises/Viking-Aquavit-Terrace.jpg";
import VikingExp3 from "../../assets/VikingDanubeRiverCruises/Viking-Suites.jpg";
import VikingExp4 from "../../assets/VikingDanubeRiverCruises/viking-the-restaurant-ocean-view-dining.jpg";
import VikingExp5 from "../../assets/VikingDanubeRiverCruises/viking-explorer-suite-balcony-view.jpg";
import VikingExp6 from "../../assets/VikingDanubeRiverCruises/Viking-family-experience.jpg";
import VikingCta from "../../assets/VikingDanubeRiverCruises/viking-expedition-ship-welland-canal.jpg";
import VikingRomanticDanube from "../../assets/VikingDanubeRiverCruises/Romantic-Danube.jpg";
import VikingDanubewaltz from "../../assets/VikingDanubeRiverCruises/Danube-Waltz.webp";
import VikingAmaSonata from "../../assets/VikingDanubeRiverCruises/AmaSonata_Budapest_Parliment_building.webp";

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
        "Luxury travel experts helping travelers discover Viking Danube River Cruise experiences through expert guidance and personalized travel planning.",
    },
    {
      "@type": "WebPage",
      "@id": "https://www.tripsandships.com/viking-danube-river-cruises",
      url: "https://www.tripsandships.com/viking-danube-river-cruises",
      name: "Viking Danube River Cruises | Explore Europe's Most Famous River",
      description:
        "Discover Viking Danube River Cruises and explore iconic European destinations including Budapest, Vienna, Bratislava, and Passau. Learn about itineraries, pricing, included excursions, and why the Danube is one of Viking's most popular river cruise experiences.",
      isPartOf: { "@id": "https://www.tripsandships.com/#website" },
      about: [{ "@type": "Organization", name: "Viking Cruises" }],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.tripsandships.com/viking-danube-river-cruises#breadcrumb",
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
        {
          "@type": "ListItem",
          position: 4,
          name: "Viking Danube River Cruises",
          item: "https://www.tripsandships.com/viking-danube-river-cruises",
        },
      ],
    },
    {
      "@type": "ItemList",
      "@id":
        "https://www.tripsandships.com/viking-danube-river-cruises#itemlist",
      name: "Popular Viking Danube River Cruise Itineraries",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Romantic Danube" },
        { "@type": "ListItem", position: 2, name: "Grand European Tour" },
        { "@type": "ListItem", position: 3, name: "Danube Waltz" },
        {
          "@type": "ListItem",
          position: 4,
          name: "Capitals of Eastern Europe",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.tripsandships.com/viking-danube-river-cruises#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "How long is a Viking Danube River Cruise?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most itineraries range from 7 to 15 nights, depending on the route.",
          },
        },
        {
          "@type": "Question",
          name: "What countries does the Danube cruise visit?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Common countries include Hungary, Slovakia, Austria, Germany, Croatia, Serbia, Romania, and Bulgaria.",
          },
        },
        {
          "@type": "Question",
          name: "Is the Danube a good first river cruise?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Many travelers consider it one of the best introductions to river cruising.",
          },
        },
        {
          "@type": "Question",
          name: "What is included on a Viking Danube Cruise?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Accommodations, dining, Wi-Fi, excursions, educational programs, and beer and wine with meals are typically included.",
          },
        },
        {
          "@type": "Question",
          name: "Which cities are most popular on Danube cruises?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Budapest, Vienna, Bratislava, and Passau are among the most visited destinations.",
          },
        },
        {
          "@type": "Question",
          name: "Is a Viking Danube Cruise adults-only?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Viking generally welcomes guests aged 18 and older.",
          },
        },
        {
          "@type": "Question",
          name: "What is the best time to cruise the Danube?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Spring, summer, and fall are all popular, with each season offering different scenery and experiences.",
          },
        },
        {
          "@type": "Question",
          name: "Are excursions included on Viking Danube Cruises?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most itineraries include at least one guided excursion in every port.",
          },
        },
        {
          "@type": "Question",
          name: "Is the Danube scenic?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Regions such as the Wachau Valley are considered among Europe's most beautiful river landscapes.",
          },
        },
        {
          "@type": "Question",
          name: "Is a Viking Danube Cruise worth the money?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Many travelers believe the combination of destinations, inclusions, and cultural experiences offers excellent value.",
          },
        },
        {
          "@type": "Question",
          name: "What is the dress code onboard a Viking Danube river cruise?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The dress code is casual and comfortable. There are no formal nights, but guests often wear smart casual attire for dinner. Comfortable walking shoes are highly recommended for shore excursions.",
          },
        },
        {
          "@type": "Question",
          name: "Is there laundry service on Viking Danube river cruise ships?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, laundry services are available onboard for a fee. Some stateroom classes include complimentary laundry, but self-service launderettes are not typically available on river ships.",
          },
        },
        {
          "@type": "Question",
          name: "Are gratuities included in the fare for Viking Danube river cruises?",
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
          name: "Can I bring my own wine or alcohol onboard a Viking Danube river ship?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Guests are welcome to bring local wines, beers, or spirits onboard and consume them in their staterooms or at dinner with no corkage fees.",
          },
        },
      ],
    },
    {
      "@type": "Review",
      "@id": "https://www.tripsandships.com/viking-danube-river-cruises#review",
      itemReviewed: {
        "@type": "TravelAction",
        name: "Viking Danube River Cruises",
      },
      reviewBody:
        "Viking Danube River Cruises offer award-winning voyages through the heart of Europe — combining iconic cities like Budapest, Vienna, and Bratislava with elegant ships, inclusive pricing, and cultural enrichment programs that make the Danube one of the world's finest river cruise experiences.",
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
        "https://www.tripsandships.com/viking-danube-river-cruises#touristtrip",
      name: "Viking Danube River Cruises — The Heart of Europe by River",
      description:
        "Award-winning Viking Danube river cruises exploring Budapest, Vienna, Bratislava, Passau, the Wachau Valley, and beyond — designed for culturally curious adult travelers seeking immersive European destination experiences.",
      touristType: [
        "Cultural Travelers",
        "Couples",
        "Retirees",
        "Lifelong Learners",
        "History Enthusiasts",
        "First-Time River Cruisers",
      ],
    },
  ],
};

// ─── FAQ COMPONENT ───────────────────────────────────────────────────────────
function FAQ() {
  const [open, setOpen] = useState(null);

  const faqData = [
    {
      q: "How long is a Viking Danube River Cruise?",
      a: "Most itineraries range from 7 to 15 nights, depending on the route.",
    },
    {
      q: "What countries does the Danube cruise visit?",
      a: "Common countries include Hungary, Slovakia, Austria, Germany, Croatia, Serbia, Romania, and Bulgaria.",
    },
    {
      q: "Is the Danube a good first river cruise?",
      a: "Yes. Many travelers consider it one of the best introductions to river cruising.",
    },
    {
      q: "What is included on a Viking Danube Cruise?",
      a: "Accommodations, dining, Wi-Fi, excursions, educational programs, and beer and wine with meals are typically included.",
    },
    {
      q: "Which cities are most popular on Danube cruises?",
      a: "Budapest, Vienna, Bratislava, and Passau are among the most visited destinations.",
    },
    {
      q: "Is a Viking Danube Cruise adults-only?",
      a: "Yes. Viking generally welcomes guests aged 18 and older.",
    },
    {
      q: "What is the best time to cruise the Danube?",
      a: "Spring, summer, and fall are all popular, with each season offering different scenery and experiences.",
    },
    {
      q: "Are excursions included on Viking Danube Cruises?",
      a: "Most itineraries include at least one guided excursion in every port.",
    },
    {
      q: "Is the Danube scenic?",
      a: "Yes. Regions such as the Wachau Valley are considered among Europe's most beautiful river landscapes.",
    },
    {
      q: "Is a Viking Danube Cruise worth the money?",
      a: "Many travelers believe the combination of destinations, inclusions, and cultural experiences offers excellent value.",
    },
    {
      q: "What is the dress code onboard a Viking Danube river cruise?",
      a: "The dress code is casual and comfortable. There are no formal nights, but guests often wear smart casual attire for dinner. Comfortable walking shoes are highly recommended for shore excursions.",
    },
    {
      q: "Is there laundry service on Viking Danube river cruise ships?",
      a: "Yes, laundry services are available onboard for a fee. Some stateroom classes include complimentary laundry, but self-service launderettes are not typically available on river ships.",
    },
    {
      q: "Are gratuities included in the fare for Viking Danube river cruises?",
      a: "Gratuities are not included in the cruise fare. Tips for the ship's crew and local tour guides are discretionary, though Viking provides recommended daily amounts which can be paid onboard or pre-paid.",
    },
    {
      q: "How does Viking handle dietary restrictions and allergies onboard?",
      a: "Viking's chefs can accommodate most dietary requests, including vegetarian, low-sodium, diabetic, and gluten-free diets. It is best to notify Viking in advance and discuss dietary needs with the maître d' upon embarkation.",
    },
    {
      q: "Can I bring my own wine or alcohol onboard a Viking Danube river ship?",
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
const VikingDanubeRiverCruises = () => {
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

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const tabParam = params.get("tab");
    if (tabParam) {
      const tabMap = {
        romantic: 5,
        "romantic-danube": 5,
        grand: 6,
        "grand-european": 6,
        waltz: 7,
        "danube-waltz": 7,
        eastern: 8,
        "eastern-europe": 8,
      };
      const targetTab = tabMap[tabParam.toLowerCase()];
      if (targetTab) {
        setActiveReasonTab(targetTab);
        setTimeout(() => {
          const element = document.querySelector(".dac-reasons-tabs-nav");
          if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, 300);
      }
    }
  }, []);

  useEffect(() => {
    if (window.location.hash) {
      setTimeout(() => {
        const id = window.location.hash.substring(1);
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 500);
    }
  }, []);

  return (
    <div className="Asc-page-wrapper">
      <Helmet>
        <title>
          Viking Danube River Cruises | Explore Europe's Most Famous River
        </title>
        <meta name="title" content="Viking Danube River Cruises" />
        <meta
          name="description"
          content="Discover Viking Danube River Cruises and explore iconic European destinations including Budapest, Vienna, Bratislava, and Passau. Learn about itineraries, pricing, included excursions, and why the Danube is one of Viking's most popular river cruise experiences."
        />
        <meta
          property="og:title"
          content="Viking Danube River Cruises | Explore Europe's Most Famous River"
        />
        <meta
          property="og:description"
          content="Discover Viking Danube River Cruises — award-winning voyages through Budapest, Vienna, Bratislava, and the scenic Wachau Valley, designed for culturally curious adult travelers."
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content="https://www.tripsandships.com/viking-danube-river-cruises"
        />
        <link
          rel="canonical"
          href="https://www.tripsandships.com/viking-danube-river-cruises"
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
          <h1>Viking Danube River Cruises: The Heart of Europe by River</h1>
          <p>
            Few travel experiences capture the beauty, history, and culture of
            Europe quite like a Danube River cruise.
          </p>
          <p>
            Flowing through the heart of the continent, the Danube connects some
            of Europe's most iconic cities, charming villages, and historic
            landmarks — all experienced from the quiet elegance of a Viking
            river ship.
          </p>
          {readMore && (
            <>
              <p>
                Whether you're interested in grand capitals, medieval towns,
                classical music, stunning architecture, or scenic river
                landscapes, the Danube offers an unforgettable journey through
                multiple countries and cultures.
              </p>
              <p>
                For many travelers, a Viking Danube River Cruise is the perfect
                introduction to river cruising and one of the most rewarding
                ways to explore Europe.
              </p>
              <p>
                At Trips &amp; Ships Luxury Travel, we help travelers find the
                right Danube itinerary — matching each client to the voyage that
                best fits their travel style, interests, and timing.
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

      {/* ══ WHY THE DANUBE ════════════════════════════════════════════════════ */}
      <section
        className="ugt-components-section"
        id="ugt-components"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="Asc-container">
          <div className="ugt-components-header">
            <h2 className="adg-c-h2">Why the Danube River Is So Popular</h2>
            <div className="adg-c-accent-line"></div>
          </div>

          <div className="ugt-components-list">
            <div className="ugt-component-row">
              {/* LEFT IMAGE */}
              <div className="ugt-component-image-wrapper">
                <div className="ugt-component-image-container">
                  <img
                    src={vikingriver}
                    alt="Viking Danube river cruise scenic Central Europe"
                    className="ugt-component-image"
                  />
                </div>
              </div>

              {/* RIGHT CONTENT */}
              <div className="ugt-component-content">
                <p className="ugt-component-text">
                  The Danube is Europe's second-longest river and passes through
                  more countries than any other river on the continent. Along
                  its route, travelers experience an incredible variety of
                  destinations without the stress of constantly packing and
                  unpacking.
                </p>
                <p className="ugt-component-text">
                  From imperial capitals and medieval towns to scenic vineyards
                  and UNESCO World Heritage Sites, the Danube delivers some of
                  Europe's most rewarding travel experiences in a single,
                  seamless journey.
                </p>

                <div className="ugt-questions-box">
                  <span className="ugt-questions-title">
                    Along the Danube, Travelers Can Experience:
                  </span>
                  <ul className="ugt-questions-list">
                    {[
                      "Historic Cities",
                      "UNESCO World Heritage Sites",
                      "Castles and Palaces",
                      "Scenic Vineyards",
                      "Cultural Traditions",
                      "World-Famous Music and Art",
                      "Local Cuisine and Wine",
                      "Multiple Countries in a Single Trip",
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
            <h2 className="azs-h2">
              Explore the Danube with Viking <br /> Danube Waltz Itinerary
            </h2>
            <div className="azs-accent-line"></div>
            <p className="azs-video-intro">
              Soak up soothing steam at a Budapest thermal bath, learn to waltz
              at a traditional Viennese dance school, and savor authentic
              Austro-Hungarian cuisine in Vienna and Budapest.
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

      {/* ══ WHY CHOOSE VIKING FOR THE DANUBE ═════════════════════════════════ */}
      <section className="luc-why-section" id="luc-why-viking-danube">
        <div className="luc-why-container">
          {/* LEFT — stacked images */}
          <div className="luc-why-images">
            <div className="luc-why-img-main-wrap" style={{ color: "#fff" }}>
              <img
                src={VikingExp1}
                alt="Viking Danube river cruise guests elegant stateroom"
                className="luc-why-img-main"
              />
              <div className="luc-why-img-overlay"></div>
            </div>
            <div className="luc-why-img-accent-wrap" style={{ color: "#fff" }}>
              <img
                src={VikingExp2}
                alt="Viking Danube cruise regional cuisine dining"
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
              Why Choose Viking for a Danube River Cruise?
            </h2>
            <div className="aac-accent-line aac-accent-white"></div>
            <p className="luc-why-intro">
              Viking is one of the most recognized names in river cruising and
              has spent decades refining the Danube experience for curious,
              culturally motivated travelers.
            </p>
            <div className="luc-why-features">
              {[
                {
                  num: "01",
                  title: "Destination-Focused Itineraries",
                  desc: "The emphasis remains on exploration rather than onboard attractions — the Danube's extraordinary destinations are the star of every voyage.",
                },
                {
                  num: "02",
                  title: "Included Guided Excursions",
                  desc: "Most ports feature complimentary guided tours and destination experiences, allowing guests to explore immediately without purchasing additional tours.",
                },
                {
                  num: "03",
                  title: "Elegant Scandinavian Design",
                  desc: "Viking Longships offer modern comfort and understated luxury, with panoramic windows designed to maximize scenic Danube views.",
                },
                {
                  num: "04",
                  title: "Cultural Enrichment",
                  desc: "Destination lectures, onboard presentations, and local cultural experiences deepen guests' understanding of the cities and regions visited.",
                },
                {
                  num: "05",
                  title: "Convenient City-Center Docking",
                  desc: "Viking river ships often dock close to major attractions, making it easy for guests to step directly into historic neighborhoods.",
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

      {/* ══ POPULAR DANUBE ITINERARIES — TABBED SECTION ══════════════════════ */}
      <section className="dac-reasons-section">
        <div className="dac-reasons-container">
          <div className="dac-reasons-header">
            <span className="dac-reasons-eyebrow">
              Popular Viking Danube River Cruise Itineraries
            </span>
            <h2 className="dac-reasons-title">
              Popular Viking Danube River Cruise Itineraries
            </h2>
            <div className="dac-reasons-accent"></div>
            <p className="dac-reasons-lead">
              Viking offers several Danube-focused itineraries, each designed to
              showcase different regions of Central and Eastern Europe. During the holiday season, they also offer the highly sought-after <Link to="/viking-christmas-market-cruises" style={{ color: "var(--navy)", fontWeight: "bold", textDecoration: "underline" }}>Viking Christmas Market Cruises</Link> along the Danube.
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
                <span className="dac-reasons-tab-title">Romantic Danube</span>
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
                <span className="dac-reasons-tab-title">
                  Grand European Tour
                </span>
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
                <span className="dac-reasons-tab-title">Danube Waltz</span>
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
                <span className="dac-reasons-tab-title">
                  Capitals of Eastern Europe
                </span>
              </div>
            </button>
          </div>

          <div className="dac-reasons-tabs-content">
            {/* Tab 5 — Romantic Danube */}
            {activeReasonTab === 5 && (
              <div className="dac-reasons-tab-panel fade-in">
                <div className="dac-reasons-row dac-reasons-row--left-content">
                  <div className="dac-reasons-content">
                    <span className="dac-reasons-row-number">01</span>
                    <h3 className="dac-reasons-row-title">Romantic Danube</h3>
                    <p className="dac-reasons-row-desc">
                      One of Viking's most popular river cruises and an ideal
                      choice for first-time river cruisers. Travelers explore
                      Budapest, Bratislava, Vienna, Krems, and Passau over
                      typically 7–8 nights — experiencing Europe's most iconic
                      Danube destinations in one seamless journey. Check our{" "}
                      <Link
                        to="/viking-cruise-cost-guide"
                        style={{
                          color: "var(--navy)",
                          fontWeight: "bold",
                          textDecoration: "underline",
                        }}
                      >
                        Viking Cruise Cost Guide
                      </Link>{" "}
                      for pricing details.
                    </p>
                    <div className="dac-reasons-pills">
                      {[
                        "Budapest, Hungary",
                        "Bratislava, Slovakia",
                        "Vienna, Austria",
                        "Krems, Austria",
                        "Passau, Germany",
                        "7–8 Nights",
                      ].map((pill, idx) => (
                        <span key={idx} className="dac-reasons-pill">
                          <Waves size={12} style={{ marginRight: "6px" }} />
                          {pill}
                        </span>
                      ))}
                    </div>
                    <div style={{ marginTop: "25px" }}>
                      <Link
                        to="/viking-danube-river-cruises"
                        className="Scenic_readmore_btn"
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          textDecoration: "none",
                        }}
                      >
                        Explore Romantic Danube{" "}
                        <ArrowRight size={16} style={{ marginLeft: "6px" }} />
                      </Link>
                    </div>
                  </div>
                  <div className="dac-reasons-media">
                    <div className="dac-reasons-img-container">
                      <img
                        src={VikingRomanticDanube}
                        alt="Romantic Danube Viking river cruise Budapest Vienna"
                        className="dac-reasons-img"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 6 — Grand European Tour */}
            {activeReasonTab === 6 && (
              <div className="dac-reasons-tab-panel fade-in">
                <div className="dac-reasons-row dac-reasons-row--right-content">
                  <div className="dac-reasons-media">
                    <div className="dac-reasons-img-container">
                      <img
                        src={HeroImage1}
                        alt="Grand European Tour Viking Rhine and Danube river cruise"
                        className="dac-reasons-img"
                      />
                    </div>
                  </div>
                  <div className="dac-reasons-content">
                    <span className="dac-reasons-row-number">02</span>
                    <h3 className="dac-reasons-row-title">
                      Grand European Tour
                    </h3>
                    <p className="dac-reasons-row-desc">
                      A longer voyage combining <Link to="/viking-rhine-river-cruises" style={{ color: "var(--navy)", fontWeight: "bold", textDecoration: "underline" }}>Viking Rhine River Cruises</Link> and Danube River itineraries —
                      approximately 14–15 nights sailing from Amsterdam through
                      Cologne, Würzburg, Nuremberg, Passau, Vienna, and
                      Budapest. Ideal for travelers wanting a comprehensive
                      European river cruise experience. Read our{" "}
                      <Link
                        to="/viking-cruise-reviews"
                        style={{
                          color: "var(--navy)",
                          fontWeight: "bold",
                          textDecoration: "underline",
                        }}
                      >
                        Viking Reviews
                      </Link>{" "}
                      for guest experiences.
                    </p>
                    <div className="dac-reasons-bullets">
                      {[
                        "Amsterdam → Cologne → Würzburg",
                        "Nuremberg → Passau",
                        "Vienna → Budapest",
                        "Approximately 14–15 Nights",
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

            {/* Tab 7 — Danube Waltz */}
            {activeReasonTab === 7 && (
              <div className="dac-reasons-tab-panel fade-in">
                <div className="dac-reasons-row dac-reasons-row--left-content">
                  <div className="dac-reasons-content">
                    <span className="dac-reasons-row-number">03</span>
                    <h3 className="dac-reasons-row-title">Danube Waltz</h3>
                    <p className="dac-reasons-row-desc">
                      A shorter itinerary focusing on Central Europe's cultural
                      treasures — ideal for travelers with limited vacation time
                      who want to experience the Danube's highlights. Guests
                      enjoy Budapest, Bratislava, Vienna, and scenic Danube
                      cruising in an intimate, well-paced format.
                    </p>
                    <div className="dac-reasons-pills">
                      {[
                        "Budapest",
                        "Bratislava",
                        "Vienna",
                        "Scenic Danube Cruising",
                        "Shorter Format",
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
                        src={VikingDanubewaltz}
                        alt="Danube Waltz Vienna Austria Viking river cruise"
                        className="dac-reasons-img"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 8 — Capitals of Eastern Europe */}
            {activeReasonTab === 8 && (
              <div className="dac-reasons-tab-panel fade-in">
                <div className="dac-reasons-row dac-reasons-row--right-content">
                  <div className="dac-reasons-media">
                    <div className="dac-reasons-img-container">
                      <img
                        src={VikingAmaSonata}
                        alt="Capitals of Eastern Europe Viking Danube river cruise"
                        className="dac-reasons-img"
                      />
                    </div>
                  </div>
                  <div className="dac-reasons-content">
                    <span className="dac-reasons-row-number">04</span>
                    <h3 className="dac-reasons-row-title">
                      Capitals of Eastern Europe
                    </h3>
                    <p className="dac-reasons-row-desc">
                      Explores lesser-visited Danube destinations beyond the
                      traditional Western highlights — ideal for experienced
                      travelers seeking deeper cultural exploration across
                      Hungary, Croatia, Serbia, Romania, and Bulgaria.
                    </p>
                    <div className="dac-reasons-bullets">
                      {[
                        "Budapest, Hungary",
                        "Croatia & Serbia",
                        "Romania — Scenic Landscapes",
                        "Bulgaria — Cultural Heritage",
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
          </div>
        </div>
      </section>

      {/* ══ ICONIC DANUBE DESTINATIONS ═══════════════════════════════════════════ */}
      <section className="adg-c-section adg-c-bg-white" id="adg-viking-reviews">
        <div className="adg-c-container">
          <div className="adg-c-section-header">
            <h2 className="adg-c-h2">Iconic Danube Destinations</h2>

            <div className="adg-c-accent-line"></div>
          </div>

          <div className="adg-c-venues-grid1">
            {[
              {
                id: 1,
                eyebrow: "Destination #1",
                name: "Budapest, Hungary",
                highlight: 'Often called the "Pearl of the Danube."',
                items: [
                  "Hungarian Parliament Building",
                  "Buda Castle",
                  "Fisherman's Bastion",
                  "Thermal baths",
                  "Danube riverfront views",
                ],
                callout:
                  "Many travelers consider Budapest one of the most beautiful cities in Europe.",
              },
              {
                id: 2,
                eyebrow: "Destination #2",
                name: "Vienna, Austria",
                highlight: "A city known for music, art, and imperial history.",
                items: [
                  "Schönbrunn Palace",
                  "Vienna State Opera",
                  "Historic coffeehouses",
                  "Classical music heritage",
                  "Elegant architecture",
                ],
                callout:
                  "Vienna is frequently a favorite stop on Danube itineraries.",
              },
              {
                id: 3,
                eyebrow: "Destination #3",
                name: "Bratislava, Slovakia",
                highlight: "A charming capital with a compact historic center.",
                items: [
                  "Bratislava Castle",
                  "Old Town",
                  "Local cafés",
                  "Scenic riverfront",
                ],
                callout:
                  "Its smaller size makes it ideal for exploration on foot.",
              },
              {
                id: 4,
                eyebrow: "Destination #4",
                name: "Passau, Germany",
                highlight: 'Known as the "City of Three Rivers."',
                items: [
                  "St. Stephen's Cathedral",
                  "Baroque architecture",
                  "Historic streets",
                  "Scenic river views",
                ],
                callout: "Passau serves as a gateway to Bavaria.",
              },
              {
                id: 5,
                eyebrow: "Destination #5",
                name: "Wachau Valley, Austria",
                highlight: "One of the Danube's most scenic regions.",
                items: [
                  "Vineyards",
                  "Medieval villages",
                  "Castle ruins",
                  "Apricot orchards",
                ],
                callout:
                  "Many guests consider this stretch of the river a cruise highlight.",
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

      <section className="dmg-info-section dmg-bg-soft" id="dmg-accommodations">
        <div className="dmg-info-container">
          <div className="dmg-info-grid">
            <div className="dmg-info-content">
              <h2 className="dmg-info-title">
                What Is Included on a Viking Danube River Cruise?
              </h2>
              <div className="dmg-info-accent"></div>

              <p className="dmg-info-lead">
                Viking includes many amenities within the cruise fare.
              </p>

              <div className="dmg-info-features dmg-info-features-scrollable">
                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">Accommodations</h3>
                    <p className="dmg-info-feature-desc">
                      Comfortable staterorooms and suites.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">Dining</h3>
                    <p className="dmg-info-feature-desc">
                      Breakfast, lunch, and dinner included.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Beer & Wine with Meals
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Included during lunch and dinner service.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">Wi-Fi</h3>
                    <p className="dmg-info-feature-desc">
                      Complimentary internet access.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Guided Excursions
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Typically one included excursion in each port.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Educational Programs
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Destination-focused lectures and presentations.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">Port Charges</h3>
                    <p className="dmg-info-feature-desc">
                      Generally included in advertised pricing.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="dmg-info-media">
              <div className="dmg-media-wrapper">
                <img
                  src={VikingExp3}
                  alt="Viking Danube River Cruise inclusions"
                  className="dmg-media-img"
                />
                <div className="dmg-media-overlay"></div>

                <div className="dmg-media-badge">
                  <span>All-Inclusive Value</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ VIKING DANUBE HIGHLIGHTS — SPOTLIGHT CARDS ═══════════════════════ */}
      <section className="dbf-spotlight-section">
        <div className="dbf-spotlight-container">
          <div className="dbf-spotlight-header">
            <h2 className="dbf-spotlight-title">
              Viking Danube River Cruise Highlights
            </h2>
            <div className="dbf-spotlight-accent"></div>
          </div>

          <div className="dbf-spotlight-grid">
            {/* CARD 1: Dining */}
            <div className="dbf-spotlight-card dbf-spotlight-card--wish">
              <div className="dbf-spotlight-card-header">
                <span className="dbf-spotlight-card-badge">
                  Culinary Experience
                </span>
                <h3 className="dbf-spotlight-card-title">
                  Dining on a Viking Danube Cruise
                </h3>
              </div>

              <div className="dbf-spotlight-card-media">
                <img
                  src={VikingExp4}
                  alt="Dining on a Viking Danube River Cruise"
                  className="dbf-spotlight-card-img"
                />
                <div className="dbf-spotlight-card-img-overlay"></div>
                <div className="dbf-spotlight-card-icon-badge">
                  <Sparkles size={18} />
                </div>
              </div>

              <div className="dbf-spotlight-card-body">
                <p className="dbf-spotlight-card-lead">
                  Cuisine is an important part of the Danube experience. Dining
                  emphasizes regional specialties, fresh ingredients, and local
                  flavors that reflect the destinations visited.
                </p>

                <div className="dbf-spotlight-features-box">
                  <h4 className="dbf-spotlight-features-title">
                    What Guests Enjoy
                  </h4>

                  <ul className="dbf-spotlight-features-list">
                    {[
                      {
                        title: "Regional Specialties",
                        text: "Austro-Hungarian dishes, Czech cuisine, and local favorites.",
                      },
                      {
                        title: "International Favorites",
                        text: "Familiar options alongside regional offerings.",
                      },
                      {
                        title: "Fresh Ingredients",
                        text: "Seasonal menus inspired by local markets.",
                      },
                      {
                        title: "Regional Wine Pairings",
                        text: "Featuring Austrian, Hungarian, and Slovakian wines.",
                      },
                      {
                        title: "Complimentary Beer & Wine",
                        text: "Included with lunch and dinner on Viking itineraries.",
                      },
                      {
                        title: "Open Seating Dining",
                        text: "Flexible arrangements for a relaxed guest experience.",
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
                  Dining provides another meaningful way to connect with local
                  Danube culture throughout the voyage.
                </p>
              </div>
            </div>

            {/* CARD 2: Who Should Choose */}
            <div className="dbf-spotlight-card dbf-spotlight-card--fantasy">
              <div className="dbf-spotlight-card-header">
                <span className="dbf-spotlight-card-badge dbf-spotlight-card-badge--navy">
                  Ideal Travelers
                </span>
                <h3 className="dbf-spotlight-card-title">
                  Who Should Choose a Viking Danube Cruise?
                </h3>
              </div>

              <div className="dbf-spotlight-card-media">
                <img
                  src={VikingExp5}
                  alt="Travelers enjoying the Viking Danube River Cruise experience"
                  className="dbf-spotlight-card-img"
                />
                <div className="dbf-spotlight-card-img-overlay"></div>
                <div className="dbf-spotlight-card-icon-badge">
                  <Users size={18} />
                </div>
              </div>

              <div className="dbf-spotlight-card-body">
                <p className="dbf-spotlight-card-lead">
                  The Danube appeals to a wide variety of travelers — from
                  first-time river cruisers to experienced cultural explorers
                  seeking deeper European immersion.
                </p>

                <div className="dbf-spotlight-features-box">
                  <h4 className="dbf-spotlight-features-title">Ideal For</h4>

                  <ul className="dbf-spotlight-features-list">
                    {[
                      {
                        title: "Couples",
                        text: "Romantic cities and intimate scenic landscapes.",
                      },
                      {
                        title: "Retirees",
                        text: "Relaxed pace and deeply educational experiences.",
                      },
                      {
                        title: "First-Time River Cruisers",
                        text: "One of Europe's most accessible river cruise itineraries.",
                      },
                      {
                        title: "History Enthusiasts",
                        text: "Centuries of European history at every port.",
                      },
                      {
                        title: "Cultural Travelers",
                        text: "Art, architecture, music, and local traditions throughout.",
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
                  For many travelers, the Danube is the perfect introduction to
                  river cruising.
                </p>
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
              Viking Danube River Cruise vs Ocean Cruise
            </h2>
            <div className="Asc-accent-line"></div>
          </div>

          <div className="Asc-table-wrapper">
            <table className="Asc-fleet-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Viking Danube River Cruise</th>
                  <th>Ocean Cruise</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>Ship Size</strong>
                  </td>
                  <td>Small</td>
                  <td>Larger</td>
                </tr>
                <tr>
                  <td>
                    <strong>City Access</strong>
                  </td>
                  <td>Excellent</td>
                  <td>Varies</td>
                </tr>
                <tr>
                  <td>
                    <strong>Scenic Cruising</strong>
                  </td>
                  <td>Constant</td>
                  <td>Periodic</td>
                </tr>
                <tr>
                  <td>
                    <strong>Countries Visited</strong>
                  </td>
                  <td>Multiple</td>
                  <td>Multiple</td>
                </tr>
                <tr>
                  <td>
                    <strong>Atmosphere</strong>
                  </td>
                  <td>Intimate</td>
                  <td>More Traditional</td>
                </tr>
                <tr>
                  <td>
                    <strong>Excursions</strong>
                  </td>
                  <td>Highly Destination-Focused</td>
                  <td>Destination-Focused</td>
                </tr>
                <tr>
                  <td>
                    <strong>River Views</strong>
                  </td>
                  <td>Continuous</td>
                  <td>Open Ocean</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div style={{ marginTop: "25px" }}>
            <p
              className="Asc-card-subtext"
              style={{ color: "var(--navy)", textAlign: "center" }}
            >
              Many travelers find river cruising offers a deeper connection to
              destinations than traditional ocean cruising.
            </p>
          </div>
        </div>
      </section>

      {/* ══ VIDEO SECTION 2 ══════════════════════════════════════════════════ */}
      <section
        className="azs-video-section"
        style={{ backgroundColor: "var(--bg-white)" }}
      >
        <div className="azs-container">
          <div className="azs-section-header">
            <h2 className="azs-h2">Viking Romantic Danube Itinerary</h2>
            <div className="azs-accent-line"></div>

            <p className="azs-video-intro">
              Discover Viking's Romantic Danube itinerary — one of the most
              popular river cruise journeys in the world, sailing through
              Budapest, Bratislava, Vienna, Krems, and Passau across 8
              unforgettable nights.
            </p>
          </div>

          <div className="azs-video-wrapper">
            <div className="azs-video-frame">
              <iframe
                src="https://www.youtube.com/embed/LKBlZ8C6Nfo"
                title="Viking Expedition Cruises"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* ══ SCENIC CRUISING ON THE DANUBE ═══════════════════════════════════════════ */}
      <section
        className="dac-ent-section"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="dac-ent-container">
          <div className="dac-ent-header">
            <h2 className="dac-ent-title" style={{ textAlign: "center" }}>
              Scenic Cruising on the Danube
            </h2>
            <div className="adg-c-accent-line"></div>
          </div>

          <div
            className="dac-ent-grid"
            style={{ gap: "30px", marginTop: "44px" }}
          >
            {[
              {
                title: "Historic Castles",
                desc: "Perched above the riverbanks.",
              },
              {
                title: "Rolling Vineyards",
                desc: "Producing world-renowned wines.",
              },
              {
                title: "Charming Villages",
                desc: "Many inaccessible to large ocean ships.",
              },
              {
                title: "Dramatic Landscapes",
                desc: "Particularly in Austria's Wachau Valley.",
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

      <section className="adg-c-section adg-c-bg-white">
        <div className="adg-c-container">
          <div className="adg-c-section-header">
            <h2 className="adg-c-h2">Is a Viking Danube Cruise Worth It?</h2>
            <div className="adg-c-accent-line"></div>
          </div>

          <div className="adg-c-overview-layout">
            {/* LEFT — list */}
            <div className="adg-c-overview-icons">
              <div className="adg-c-overview-item">
                <span className="adg-c-overview-icon">✔</span>
                <span className="adg-c-overview-label">
                  Multiple Countries in One Trip
                </span>
              </div>

              <div className="adg-c-overview-item">
                <span className="adg-c-overview-icon">✔</span>
                <span className="adg-c-overview-label">Historic Cities</span>
              </div>

              <div className="adg-c-overview-item">
                <span className="adg-c-overview-icon">✔</span>
                <span className="adg-c-overview-label">
                  Included Excursions
                </span>
              </div>

              <div className="adg-c-overview-item">
                <span className="adg-c-overview-icon">✔</span>
                <span className="adg-c-overview-label">
                  Easy Travel Logistics
                </span>
              </div>

              <div className="adg-c-overview-item">
                <span className="adg-c-overview-icon">✔</span>
                <span className="adg-c-overview-label">Scenic Cruising</span>
              </div>

              <div className="adg-c-overview-item">
                <span className="adg-c-overview-icon">✔</span>
                <span className="adg-c-overview-label">Cultural Immersion</span>
              </div>

              <div className="adg-c-overview-item">
                <span className="adg-c-overview-icon">✔</span>
                <span className="adg-c-overview-label">
                  Comfortable Accommodations
                </span>
              </div>

              <div className="adg-c-overview-item">
                <span className="adg-c-overview-icon">✔</span>
                <span className="adg-c-overview-label">
                  Smaller Ship Atmosphere
                </span>
              </div>
            </div>

            {/* RIGHT — callout card + image */}
            <div className="adg-c-overview-right">
              <div className="adg-c-overview-callout">
                <div className="adg-c-overview-callout-inner">
                  <Star size={28} className="adg-c-callout-star" />
                  <p className="adg-c-callout-text">
                    Many travelers believe the answer is yes. Viking's Danube
                    itineraries combine scenic river cruising, historic cities,
                    cultural experiences, and convenient travel logistics into a
                    single journey. The Danube consistently ranks among Viking's
                    most popular itineraries for good reason. For more detailed perspectives, explore our main guide to <Link to="/viking-river-cruises" style={{ color: "var(--navy)", fontWeight: "bold", textDecoration: "underline" }}>Viking River Cruises</Link> or read our comprehensive <Link to="/viking-cruise-reviews" style={{ color: "var(--navy)", fontWeight: "bold", textDecoration: "underline" }}>Viking Reviews</Link>.
                  </p>
                </div>
              </div>

              <div className="adg-c-overview-image-wrap">
                <img
                  src={VikingExp6}
                  alt="Viking Danube River Cruise experience"
                  className="adg-c-overview-img"
                />
                <div className="adg-c-overview-img-overlay">
                  <span className="adg-c-overview-img-label">
                    Viking Danube Cruise
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
              Everything you need to know about Viking Danube River Cruises.
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
            alt="Viking Danube river cruise scenic European destination"
            className="Asc-help-bg-img"
          />
          <div className="Asc-help-overlay"></div>
        </div>

        <div className="Asc-container">
          <div className="Asc-help-card">
            <div className="Asc-help-content">
              <div className="Asc-help-header">
                <span className="Asc-help-eyebrow">
                  Viking Danube River Cruises Guide
                </span>
                <h2 className="Asc-help-h2">
                  Discover the Heart of Europe <br /> Along the Timeless Danube
                  River
                </h2>
                <div className="Asc-help-accent"></div>
              </div>

              <div className="Asc-help-grid">
                <div className="Asc-help-info">
                  <p className="Asc-help-intro">
                    A Viking Danube River Cruise combines some of Europe's most
                    celebrated cities, landscapes, and cultural treasures into
                    one seamless travel experience.
                  </p>
                  <p className="Asc-help-intro">
                    From the grandeur of Budapest and Vienna to the scenic
                    beauty of the Wachau Valley and the charm of riverside
                    villages, every day offers new discoveries.
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
                      For travelers seeking history, culture, comfort, and
                      meaningful exploration, the Danube remains one of the
                      finest river cruise journeys in the world.
                      <br />
                      <br />
                      Because some of Europe's greatest stories aren't found on
                      highways or railways.
                      <br />
                      <strong>
                        {" "}
                        They're discovered along the timeless waters of the
                        Danube.
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
                      Explore Viking Danube River Cruise Vacations
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>

                <div className="Asc-help-list-box">
                  <h3 className="Asc-help-list-title">
                    Why Travelers Choose the Viking Danube:
                  </h3>
                  <ul className="Asc-help-bullets">
                    {[
                      "Iconic Cities — Budapest, Vienna, Bratislava",
                      "Multiple Countries in One Voyage",
                      "Included Shore Excursions",
                      "Scenic Wachau Valley Cruising",
                      "Cultural Enrichment Programs",
                      "Elegant Scandinavian Ship Design",
                      "Adults-Only Sophisticated Atmosphere",
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
                      Danube river cruise itineraries and find the perfect
                      voyage for your travel style.
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

export default VikingDanubeRiverCruises;
