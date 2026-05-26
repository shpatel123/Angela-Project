import { useState, useEffect } from "react";
import {
  Ship,
  Users,
  MapPin,
  Award,
  Check,
  Plus,
  Minus,
  ArrowRight,
  Star,
  Compass,
  Wine,
  ShieldCheck,
  Info,
  Quote,
  Sparkles,
  UtensilsCrossed,
  TrendingUp,
  Hotel,
  LayoutGrid,
  Tag,
  Clock,
  Anchor,
} from "lucide-react";
import Nav from "../../components/Navbar/Nav";
import "./ExploraCruiseCost.css";
import AboutImage from "../../assets/image.webp";
import CTAImage from "../../assets/ExploraCruiseCost/Asia-Ship-a-Long-Bay-Vietnam.webp";

import HeroImage1 from "../../assets/ExploraCruiseCost/ExploraCruiseCost.webp";
import HeroImage2 from "../../assets/ExploraCruiseCost/ExploraCruiseCost2.webp";
import HeroImage4 from "../../assets/ExploraCruiseCost/ExploraCruiseCost3.webp";
import ExploraJourneys from "../../assets/ExploraCruiseCost/explora-journeys-alaska-luxury-cruise-through-fjords.webp";
import ExploraJourney2 from "../../assets/ExploraCruiseCost/explora-journeys-retreat-residence-luxury-suite-living-room.webp";

import ExploraCrema from "../../assets/ExploraCruiseCost/EXPLORA-Crema Cafe.webp";
import ExploraBooking from "../../assets/ExploraCruiseCost/EXPLORA-Mediterranean.webp";

import ShoreExcursions from "../../assets/ExploraCruiseCost/mediterranean-hidden-cove-luxury-cruise-summer.webp";
import SpaTreatments from "../../assets/ExploraCruiseCost/explora-journeys-sunrise-pool-deck-luxury-yacht.webp";
import CruiseHotels from "../../assets/ExploraCruiseCost/santorini-greece-mediterranean-luxury-cruise-view.webp";
import luxuryItineraries from "../../assets/ExploraCruiseCost/explora-I-oceanfront-pool-lounge-deck.webp";

import ExploraPool from "../../assets/ExploraCruiseCost/ExploraExperience.webp";

import { Helmet } from "react-helmet-async";

const drivers = [
  {
    icon: TrendingUp,
    title: "Larger Suites",
    desc: "Explora offers some of the largest entry-level suites in luxury cruising — a direct contributor to higher per-night pricing.",
  },
  {
    icon: Users,
    title: "Lower Passenger Density",
    desc: "Fewer guests onboard means better service, more privacy, less crowding, and a more refined atmosphere throughout the voyage.",
  },
  {
    icon: UtensilsCrossed,
    title: "Elevated Culinary Experience",
    desc: "Dining is a major focus — multiple specialty restaurants, premium ingredients, and flexible dining without upcharges.",
  },
  {
    icon: Sparkles,
    title: "Luxury Design",
    desc: "The ships feel closer to a modern luxury resort than a traditional cruise ship, with significant investment in interiors and amenities.",
  },
  {
    icon: MapPin,
    title: "Destination-Focused Itineraries",
    desc: "Longer port stays and immersive routing increase operational costs but deliver meaningfully richer travel experiences.",
  },
];

const hiddenCosts = [
  {
    icon: Anchor,
    title: "Shore Excursions",
    desc: "Private tours and premium experiences at ports of call can add substantially to the total trip cost.",
    image: ShoreExcursions,
  },
  {
    icon: Sparkles,
    title: "Spa Treatments",
    desc: "Certain spa services — massages, facials, and specialty therapies — remain an additional expense beyond the included wellness access.",
    image: SpaTreatments,
  },
  //   {
  //     icon: PlaneTakeoff,
  //     title: "Airfare",
  //     desc: "International business-class flights are often a major part of the total vacation cost and are not typically included in the cruise fare.",
  //     image:
  //       "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80",
  //   },
  {
    icon: Hotel,
    title: "Pre & Post Cruise Hotels",
    desc: "Luxury travelers frequently extend their trips with stays before embarkation or after disembarkation — a meaningful added investment.",
    image: CruiseHotels,
  },
  {
    icon: ShieldCheck,
    title: "Travel Insurance",
    desc: "Strongly recommended for high-value luxury itineraries. Comprehensive coverage for trip cancellation and medical emergencies is essential.",
    image: luxuryItineraries,
  },
];

const bookingTips = [
  { icon: Clock, label: "12–18 months before sailing" },
  { icon: Tag, label: "During launch promotions" },
  { icon: LayoutGrid, label: "During wave season offers" },
  { icon: Star, label: "When suite inventory first opens" },
];

const advisorHelps = [
  "Access early promotions",
  "Monitor pricing",
  "Select best suite categories",
  "Optimize itinerary combinations",
  "Build complete luxury travel experiences",
];
const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "Trips & Ships Luxury Travel",
      url: "https://www.tripsandships.com",
      logo: "https://www.tripsandships.com/logo.png",
    },

    {
      "@type": "TravelAgency",
      name: "Trips & Ships Luxury Travel",
      url: "https://www.tripsandships.com",
    },

    {
      "@type": "Person",
      name: "Angela Hughes",
      jobTitle: "CEO of Trips & Ships Luxury Travel",
      description:
        "Luxury travel expert with over 40 years in the travel industry.",
    },

    {
      "@type": "WebPage",
      name: "How Much Does an Explora Cruise Cost in 2026 and 2027",
      description: "Luxury pricing guide for Explora Journeys cruises.",
    },

    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
        },

        {
          "@type": "ListItem",
          position: 2,
          name: "Luxury Cruises",
        },

        {
          "@type": "ListItem",
          position: 3,
          name: "Explora Journeys Pricing Guide",
        },
      ],
    },

    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How much does an Explora cruise cost per person?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most 7-night itineraries start around $4,500–$8,500 per person depending on season and suite category.",
          },
        },

        {
          "@type": "Question",
          name: "Are drinks included on Explora Journeys?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Most beverages including premium wines and spirits are included.",
          },
        },

        {
          "@type": "Question",
          name: "Are gratuities included?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, gratuities are generally included.",
          },
        },

        {
          "@type": "Question",
          name: "Is Explora Journeys truly luxury?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Explora is positioned in the ultra-luxury cruise segment.",
          },
        },

        {
          "@type": "Question",
          name: "What is the cheapest suite on Explora?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ocean Terrace Suites are typically the entry-level category.",
          },
        },

        {
          "@type": "Question",
          name: "Is Explora more expensive than Regent?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sometimes yes, sometimes comparable depending on itinerary and inclusions.",
          },
        },

        {
          "@type": "Question",
          name: "What makes Explora different?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Its modern European luxury style, spacious suites, and wellness-focused atmosphere.",
          },
        },

        {
          "@type": "Question",
          name: "Is Wi-Fi included?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, high-speed Wi-Fi is included.",
          },
        },

        {
          "@type": "Question",
          name: "Are excursions included?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Some are not. Premium excursions typically cost extra.",
          },
        },

        {
          "@type": "Question",
          name: "When should I book for 2027?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ideally 12–18 months in advance for best suite selection.",
          },
        },

        {
          "@type": "Question",
          name: "Is Explora good for couples?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Many couples love its refined and romantic atmosphere.",
          },
        },

        {
          "@type": "Question",
          name: "Does Explora include flights?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Usually no, though packages may vary.",
          },
        },

        {
          "@type": "Question",
          name: "Is Explora formal?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. The atmosphere is elegant but relaxed.",
          },
        },

        {
          "@type": "Question",
          name: "Are children allowed onboard?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, though the atmosphere caters more toward sophisticated luxury travelers.",
          },
        },

        {
          "@type": "Question",
          name: "What destinations does Explora sail to?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Mediterranean, Caribbean, Northern Europe, Middle East, and other global luxury destinations.",
          },
        },
      ],
    },
  ],
};

function FAQ() {
  const [open, setOpen] = useState(null);

  const faqData = [
    {
      q: "How much does an Explora cruise cost per person?",
      a: "Most 7-night itineraries start around $4,500–$8,500 per person depending on season and suite category.",
    },
    {
      q: "Are drinks included on Explora Journeys?",
      a: "Yes. Most beverages including premium wines and spirits are included.",
    },
    {
      q: "Are gratuities included?",
      a: "Yes, gratuities are generally included.",
    },
    {
      q: "Is Explora Journeys truly luxury?",
      a: "Yes. Explora is positioned in the ultra-luxury cruise segment.",
    },
    {
      q: "What is the cheapest suite on Explora?",
      a: "Ocean Terrace Suites are typically the entry-level category.",
    },
    {
      q: "Is Explora more expensive than Regent?",
      a: "Sometimes yes, sometimes comparable depending on itinerary and inclusions.",
    },
    {
      q: "What makes Explora different?",
      a: "Its modern European luxury style, spacious suites, and wellness-focused atmosphere.",
    },
    {
      q: "Is Wi-Fi included?",
      a: "Yes, high-speed Wi-Fi is included.",
    },
    {
      q: "Are excursions included?",
      a: "Some are not. Premium excursions typically cost extra.",
    },
    {
      q: "When should I book for 2027?",
      a: "Ideally 12–18 months in advance for best suite selection.",
    },
    {
      q: "Is Explora good for couples?",
      a: "Yes. Many couples love its refined and romantic atmosphere.",
    },
    {
      q: "Does Explora include flights?",
      a: "Usually no, though packages may vary.",
    },
    {
      q: "Is Explora formal?",
      a: "No. The atmosphere is elegant but relaxed.",
    },
    {
      q: "Are children allowed onboard?",
      a: "Yes, though the atmosphere caters more toward sophisticated luxury travelers.",
    },
    {
      q: "What destinations does Explora sail to?",
      a: "Mediterranean, Caribbean, Northern Europe, Middle East, and other global luxury destinations.",
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
const ExploraCruiseCost = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [readMore, setReadMore] = useState(false);

  const images = [HeroImage1, HeroImage4, HeroImage2];

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
          How Much Does an Explora Cruise Cost in 2026 and 2027? Luxury Pricing
          Guide
        </title>
        <meta
          name="title"
          content="Explora Journeys Cruise Prices 2026 & 2027 | Luxury Cost Guide"
        />
        <meta
          name="description"
          content="Discover how much an Explora Journeys cruise costs in 2026 and 2027 including suites, inclusions, luxury value, hidden costs, and expert booking advice from Angela Hughes of Trips & Ships Luxury Travel."
        />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      <Nav />

      {/* HERO */}
      <section className="aac_hero_section">
        {/* ── Background slideshow ── */}
        {images.map((img, index) => (
          <div
            key={index}
            className={`aac_hero_bg ${index === currentSlide ? "active" : ""}`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}

        {/* ── Layered overlays ── */}
        <div className="aac_hero_overlay" />
        <div className="aac_hero_overlay_gradient" />
        <div className="aac_hero_noise" />

      

        {/* ── Main content ── */}
        <div className="aac_hero_content">
          {/* Heading */}
          <h1>
            How Much Does an Explora Cruise Cost
             in 2026 and 2027?
          </h1>

          <p className="aac_hero_subtitle">
            Understanding true luxury value beyond the fare
          </p>

          <p className="aac_hero_text">
            Luxury travelers considering Explora Journeys often ask the same
            question first:{" "}
            <strong>"Is Explora Journeys worth the price?"</strong>
          </p>

          <p className="aac_hero_text">
            The answer depends on what kind of luxury experience you expect. If
            you are comparing Explora strictly by price alone, you may miss why
            this cruise line has quickly become one of the most talked-about
            names in ultra-luxury cruising.
          </p>

          {/* ── Expandable content ── */}
          <div className={`aac_expandable ${readMore ? "open" : ""}`}>
            <p className="aac_list_intro">
              Explora Journeys was designed for travelers who want:
            </p>

            <ul className="aac_hero_list">
              {[
                "Spacious oceanfront suites",
                "Elegant European luxury",
                "Exceptional dining experiences",
                "Fewer crowds and relaxed atmosphere",
                "Longer port stays for deeper exploration",
                "Wellness-focused onboard lifestyle",
                "Inclusive luxury without hidden surprises",
              ].map((item) => (
                <li key={item}>
                  <span className="aac_list_dot" />
                  {item}
                </li>
              ))}
            </ul>

            <p className="aac_hero_text">
              According to <strong>Angela Hughes</strong> — CEO of Trips &amp;
              Ships Luxury Travel, founder of Luxury Travel University, global
              luxury travel speaker, and one of the most influential women in
              travel — understanding luxury cruise value matters far more than
              simply comparing fares.
            </p>

            <div className="aac_bio_card">
              <div className="aac_bio_avatar">A</div>
              <div className="aac_bio_body">
                <p className="aac_hero_text">
                  After more than 40 years in the travel industry and visiting
                  over 121 countries, Angela has helped luxury travelers
                  evaluate what truly creates a premium cruise experience.
                </p>
                <p className="aac_hero_text">
                  And Explora Journeys is positioned very differently from
                  mainstream cruise brands.
                </p>
              </div>
            </div>
          </div>

          {/* Read more toggle */}
          <div className="aac_readmore_wrapper">
            <button
              className={`aac_readmore_btn ${readMore ? "open" : ""}`}
              onClick={() => setReadMore(!readMore)}
            >
              <span>{readMore ? "Read Less" : "Read More"}</span>
              <span className="aac_btn_arrow">{readMore ? "↑" : "↓"}</span>
            </button>
          </div>
        </div>
      </section>

      {/* FLEET OVERVIEW TABLE */}
      <section
        className="Asc-section Asc-bg-white"
        id="Asc-fleet"
        style={{ backgroundColor: "var(--bg-white)" }}
      >
        <div className="Asc-container">
          <div className="Asc-section-header">
            <h2 className="Asc-h2">
              Average Explora Journeys Cruise Pricing <br /> in 2026 and 2027
            </h2>

            <div className="Asc-accent-line"></div>
          </div>

          <div className="Asc-table-wrapper">
            <table className="Asc-fleet-table">
              <thead>
                <tr>
                  <th>Cruise Type</th>
                  <th>Estimated Price Per Person</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>
                    <strong>7-night Caribbean cruise</strong>
                  </td>
                  <td>$4,500–$8,500</td>
                </tr>

                <tr>
                  <td>
                    <strong>7-night Mediterranean cruise</strong>
                  </td>
                  <td>$5,500–$11,000</td>
                </tr>

                <tr>
                  <td>
                    <strong>10-night Europe itinerary</strong>
                  </td>
                  <td>$8,000–$16,000</td>
                </tr>

                <tr>
                  <td>
                    <strong>Ocean Terrace Suite</strong>
                  </td>
                  <td>Starting around $4,500</td>
                </tr>

                <tr>
                  <td>
                    <strong>Penthouse Suites</strong>
                  </td>
                  <td>$10,000–$25,000+</td>
                </tr>

                <tr>
                  <td>
                    <strong>Residences</strong>
                  </td>
                  <td>$20,000–$75,000+</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div style={{ marginTop: "25px" }}>
            <p className="Asc-card-subtext">
              Luxury holiday sailings, Grand Journeys, and limited itineraries
              can exceed these ranges significantly.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT IS INCLUDED IN EXPLORA JOURNEYS PRICING */}
      <section
        className="wnf-section wnf-bg-white"
        id="wnf-extraordinary-fjords"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="wnf-container">
          <div className="wnf-section-header">
            <h2 className="wnf-h2">
              What Is Included in Explora Journeys Pricing?
            </h2>
            <div className="wnf-accent-line"></div>
          </div>

          <div className="wnf-split">
            {/* Left Column: Premium Visual Block */}
            <div className="wnf-image-column">
              <div className="wnf-image-stack">
                <div className="wnf-img-frame wnf-frame-primary">
                  <img
                    src={ExploraJourneys}
                    alt="Explora Journeys luxury ocean experience"
                    className="wnf-photo"
                  />
                </div>
                <div className="wnf-img-frame wnf-frame-secondary">
                  <img
                    src={ExploraJourney2}
                    alt="Luxury cruise ship experience at sea"
                    className="wnf-photo"
                  />
                </div>
              </div>
            </div>

            {/* Right Column: Structured Content Blocks */}
            <div className="wnf-content-column">
              <div className="wnf-block">
                <p className="wnf-lead-text">
                  One reason travelers perceive strong value with Explora is the
                  level of inclusions.
                </p>

                <ul className="wnf-feature-list">
                  {[
                    "Oceanfront suites",
                    "Fine dining venues",
                    "Specialty restaurants",
                    "Unlimited beverages",
                    "Premium wines and spirits",
                    "Gratuities",
                    "High-speed Wi-Fi",
                    "Wellness programming",
                    "Thermal spa access",
                    "Shuttle service in select ports",
                    "In-suite minibar",
                    "24-hour room service",
                  ].map((feature, i) => (
                    <li key={i} className="wnf-feature-item">
                      <div className="wnf-icon-wrapper">
                        <Check size={14} />
                      </div>
                      <span className="wnf-feature-text">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="wnf-footer-note">
                <p className="wnf-highlight-text">
                  Compared to many luxury cruise competitors, fewer surprise
                  charges appear onboard — creating a more seamless luxury
                  experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: Why It Costs More ── */}
      <section className="Ecc-section Ecc-section--white">
        <div className="Ecc-container">
          <div className="Ecc-header">
            <h2 className="Ecc-title">
              Why Explora Journeys Costs <br /> More Than Mainstream Cruises
            </h2>
            <div className="adg-accent-line"></div>
            <p className="Ecc-subtitle">
              Explora is not designed to compete with mass-market cruise pricing
              — it competes at the top tier of luxury ocean travel.
            </p>
          </div>

          <div className="Ecc-drivers-grid">
            {drivers.map((d, i) => {
              const Icon = d.icon;
              return (
                <div key={i} className="Ecc-driver-card">
                  <div className="Ecc-driver-icon-wrap">
                    <Icon size={20} strokeWidth={1.7} />
                  </div>
                  <div className="Ecc-driver-content">
                    <h3 className="Ecc-driver-title">{d.title}</h3>
                    <p className="Ecc-driver-desc">{d.desc}</p>
                  </div>
                  <div className="Ecc-driver-number">0{i + 1}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* VIDEO SECTION */}
      {/* <section className="Asc-video-section" id="Asc-video">
                <div className="Asc-container">
                    <div className="Asc-section-header">
                        <h2 className="Asc-h2">Watch: Regent Seven Seas Cruise</h2>
                        <div className="Asc-accent-line"></div>
                        <p className="Asc-video-intro">
                            Hear directly from luxury cruise expert Angela Hughes as she shares her firsthand insights on choosing between Azamara and Regent Seven Seas.
                        </p>
                    </div>
                    <div className="Asc-video-wrapper">
                        <div className="Asc-video-frame">
                            <iframe
                                src="https://www.youtube.com/embed/yoKE5YG3CYI"
                                title="Azamara vs Regent Seven Seas – Angela Hughes"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section> */}

      {/* IS EXPLORA JOURNEYS WORTH THE COST? */}
      <section className="adg-section" id="adg-food-itineraries">
        <div className="adg-container">
          <div className="adg-section-header" style={{ marginBottom: "60px" }}>
            <h2 className="adg-h2">Is Explora Journeys Worth the Cost?</h2>

            <div className="adg-accent-line"></div>
          </div>

          <div className="adg-split-layout">
            {/* Left Content Column */}
            <div className="adg-content-card-side">
              <img
                src={ExploraCrema}
                alt="Explora Journeys luxury onboard experience"
                className="adg-side-image"
                style={{ height: "30vh" }}
              />

              <div className="adg-info-card">
                <div className="adg-card-meta">
                  <Compass size={28} />
                  <span className="adg-meta-label">
                    Luxury Value Perspective
                  </span>
                </div>

                <p className="adg-card-lead">
                  For the right traveler, absolutely.
                </p>

                <div className="adg-card-divider"></div>

                <p className="adg-card-subtext">
                  Angela Hughes often advises clients to focus on{" "}
                  <strong>
                    “overall luxury value rather than only the upfront fare.”
                  </strong>
                </p>

                <p className="adg-card-subtext" style={{ marginTop: "18px" }}>
                  When travelers compare included amenities, suite size,
                  culinary quality, service levels, onboard ambiance, and hidden
                  onboard spending, Explora frequently compares favorably
                  against competitors.
                </p>
              </div>
            </div>

            {/* Right Inclusions Grid Column */}
            <div className="adg-list-side">
              {[
                {
                  title: "Luxury couples",
                  icon: <Check size={20} />,
                },
                {
                  title: "Affluent retirees",
                  icon: <Check size={20} />,
                },
                {
                  title: "Food and wine travelers",
                  icon: <Wine size={20} />,
                },
                {
                  title: "Experienced cruisers",
                  icon: <Ship size={20} />,
                },
                {
                  title: "Guests moving up from premium brands",
                  icon: <Star size={20} />,
                },
                {
                  title: "Sophisticated, relaxed luxury seekers",
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

      {/* ── SECTION 1: Hidden Costs ── */}
      <section className="Ecc-hc-section">
        <div className="Ecc-hc-container">
          <div className="Ecc-hc-header">
            <h2 className="Ecc-hc-title">
              Hidden Costs Luxury Travelers <br /> Should Budget For
            </h2>
            <div className="adg-accent-line"></div>
            <p className="Ecc-hc-subtitle">
              Even with many inclusions, some additional expenses remain outside
              the cruise fare.
            </p>
          </div>

          <div className="Ecc-hc-grid">
            {hiddenCosts.map((cost, i) => {
              const Icon = cost.icon;
              return (
                <div key={i} className="Ecc-hc-card">
                  <div className="Ecc-hc-img-wrap">
                    <img
                      src={cost.image}
                      alt={cost.title}
                      className="Ecc-hc-img"
                    />
                    <div className="Ecc-hc-img-overlay">
                      <div className="Ecc-hc-img-icon">
                        <Icon size={18} strokeWidth={1.7} />
                      </div>
                    </div>
                  </div>
                  <div className="Ecc-hc-body">
                    <h3 className="Ecc-hc-card-title">{cost.title}</h3>
                    <p className="Ecc-hc-card-desc">{cost.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SECTION 2: Best Time To Book ── */}
      <section className="Ecc-bt-section">
        <div className="Ecc-bt-container">
          <div className="Ecc-bt-header">
            <h2 className="Ecc-bt-title">
              Best Time To Book Explora Journeys for Value
            </h2>
            <div className="adg-accent-line"></div>
            <p className="Ecc-bt-subtitle">
              Luxury suites can sell out surprisingly early. Timing your booking
              strategically makes a significant difference.
            </p>
          </div>

          <div className="Ecc-bt-layout">
            {/* Left — image + timing pills */}
            <div className="Ecc-bt-left">
              <div className="Ecc-bt-img-wrap">
                <img
                  src={ExploraBooking}
                  alt="Luxury cruise booking timing"
                  className="Ecc-bt-img"
                />
                <div className="Ecc-bt-img-label">
                  <Compass
                    size={16}
                    strokeWidth={1.8}
                    className="Ecc-bt-img-label-icon"
                  />
                  <span>Best pricing windows</span>
                </div>
              </div>

              <div className="Ecc-bt-timing-grid">
                {bookingTips.map((tip, i) => {
                  const TipIcon = tip.icon;
                  return (
                    <div key={i} className="Ecc-bt-timing-item">
                      <div className="Ecc-bt-timing-icon">
                        <TipIcon size={15} strokeWidth={1.8} />
                      </div>
                      <span className="Ecc-bt-timing-label">{tip.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right — advisor card */}
            <div className="Ecc-bt-right">
              <div className="Ecc-bt-advisor-card">
                <div className="Ecc-bt-advisor-top">
                  <div className="Ecc-bt-advisor-badge">
                    <Star size={13} strokeWidth={2} />
                    <span>Luxury Travel Partner</span>
                  </div>
                  <h3 className="Ecc-bt-advisor-name">
                    Trips & Ships Luxury Travel
                  </h3>
                  <p className="Ecc-bt-advisor-intro">
                    Working with an experienced advisor helps clients navigate
                    pricing windows, availability, and suite selection —
                    maximising value on every voyage.
                  </p>
                </div>

                <div className="Ecc-bt-advisor-divider"></div>

                <p className="Ecc-bt-helps-label">How we help clients:</p>
                <ul className="Ecc-bt-helps-list">
                  {advisorHelps.map((help, i) => (
                    <li key={i} className="Ecc-bt-helps-item">
                      <div className="Ecc-bt-helps-dot"></div>
                      <span>{help}</span>
                    </li>
                  ))}
                </ul>

                <div className="Ecc-bt-advisor-cta">
                  <span className="Ecc-bt-cta-text">
                    Ready to plan your voyage?
                  </span>
                  <button className="Ecc-bt-cta-btn">
                    Connect with an Advisor
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FLEET OVERVIEW TABLE */}
      <section
        className="Asc-section Asc-bg-white"
        id="Asc-fleet"
        style={{ backgroundColor: "var(--bg-white)" }}
      >
        <div className="Asc-container">
          <div className="Asc-section-header">
            <h2 className="Asc-h2">
              Explora Journeys vs Other Luxury Cruise Lines
            </h2>

            <div className="Asc-accent-line"></div>
          </div>

          <div className="Asc-table-wrapper">
            <table className="Asc-fleet-table">
              <thead>
                <tr>
                  <th>Cruise Line</th>
                  <th>Atmosphere</th>
                  <th>Best For</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>
                    <strong>Explora Journeys</strong>
                  </td>
                  <td>Modern European luxury</td>
                  <td>Sophisticated travelers</td>
                </tr>

                <tr>
                  <td>
                    <strong>Regent Seven Seas</strong>
                  </td>
                  <td>Traditional all-inclusive luxury</td>
                  <td>Luxury inclusions</td>
                </tr>

                <tr>
                  <td>
                    <strong>Seabourn</strong>
                  </td>
                  <td>Social luxury cruising</td>
                  <td>Small ship elegance</td>
                </tr>

                <tr>
                  <td>
                    <strong>Silversea</strong>
                  </td>
                  <td>Expedition + luxury</td>
                  <td>Destination immersion</td>
                </tr>

                <tr>
                  <td>
                    <strong>Ritz-Carlton Yacht Collection</strong>
                  </td>
                  <td>Yacht-style luxury</td>
                  <td>Boutique yacht atmosphere</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── COMMON MISTAKES ───────────────────────────────────────── */}
      <section className="Lfsg-section Lfsg-bg-dark" id="Lfsg-mistakes">
        <div className="Lfsg-container">
          <div className="Lfsg-section-header">
            <h2 className="Lfsg-h2-white">Common Mistakes Travelers Make</h2>

            <div className="Lfsg-accent-line-white" />
          </div>

          <div className="Lfsg-mistakes-grid">
            {[
              {
                title: "Booking Too Late",
                desc: "Best suites disappear quickly.",
              },

              {
                title: "Choosing Based Only on Price",
                desc: "Luxury value matters more than headline fare.",
              },

              {
                title: "Ignoring Airfare Strategy",
                desc: "Business-class planning can significantly impact overall budget.",
              },

              {
                title: "Not Using a Luxury Cruise Specialist",
                desc: "Luxury cruise booking is highly nuanced.",
              },
            ].map((item, i) => (
              <div key={i} className="Lfsg-mistake-card">
                <div className="Lfsg-mistake-number">
                  {String(i + 1).padStart(2, "0")}
                </div>

                <h4 className="Lfsg-mistake-title">{item.title}</h4>

                <p className="Lfsg-mistake-desc">{item.desc}</p>
              </div>
            ))}
          </div>

          <p
            className="Lfsg-mistake-desc"
            style={{
              marginTop: "40px",
              textAlign: "center",
              maxWidth: "900px",
              marginInline: "auto",
            }}
          >
            Working with experienced advisors like Angela Hughes can help
            travelers avoid costly mistakes and secure the right experience.
          </p>
        </div>
      </section>

      {/* WHO SHOULD CHOOSE */}
      <section className="Asc-section Asc-bg-soft" id="Asc-who">
        <div className="Asc-container">
          <div className="Asc-section-header">
            <h2 className="Asc-h2">Who Explora Journeys Is Best For</h2>

            <div className="Asc-accent-line"></div>
          </div>

          <div className="Asc-who-grid">
            {/* BEST FOR */}
            <div className="Asc-who-card Asc-who-yes">
              <h3 className="Asc-who-title">Best For</h3>

              <ul className="Asc-who-list">
                {[
                  "Luxury-focused travelers",
                  "Couples",
                  "Experienced cruisers",
                  "Food and wine lovers",
                  "Travelers seeking quieter luxury",
                  "Guests wanting spacious suites",
                ].map((item, i) => (
                  <li key={i}>
                    <Check size={16} className="Asc-icon-green" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* NOT IDEAL FOR */}
            <div className="Asc-who-card Asc-who-no">
              <h3 className="Asc-who-title">May Not Be Best For</h3>

              <ul className="Asc-who-list">
                {[
                  "Travelers wanting nightlife-heavy ships",
                  "Budget-focused cruisers",
                  "Families seeking waterparks and attractions",
                  "Travelers preferring highly formal cruising traditions",
                ].map((item, i) => (
                  <li key={i}>
                    <Minus size={16} className="Asc-icon-muted" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ANGELA HUGHES AUTHORITY BOX */}
      <section className="Adg-expert-section" id="Asc-expert-insight">
        <div className="Asc-container">
          {/* TOP HEADING */}
          <div className="Adg-expert-heading">
            <span className="Adg-expert-eyebrow">Luxury Travel Authority</span>

            <h2 className="Adg-expert-title">
              Why Luxury Travelers Trust Angela Hughes
            </h2>

            <div className="Adg-expert-divider"></div>
          </div>

          {/* MAIN GRID */}
          <div className="Adg-expert-grid">
            {/* LEFT SIDE: Portrait + Name */}
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
              {/* INTRO */}
              <div className="Adg-expert-quote-box">
                <div className="Adg-expert-quote-icon">
                  <Quote size={36} />
                </div>

                <blockquote className="Adg-expert-quote-text">
                  "Angela Hughes is one of the travel industry’s most respected
                  luxury travel advisors and cruise experts."
                </blockquote>
              </div>

              {/* CREDENTIALS */}
              <div className="Adg-expert-credentials-box">
                <h4 className="Adg-expert-credentials-title">
                  <Award size={16} />
                  Angela Hughes Luxury Authority Box
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
                      label: "Travel industry expert with 40+ years experience",
                    },
                    {
                      icon: <MapPin size={16} />,
                      label: "Traveler to more than 121 countries",
                    },
                    {
                      icon: <Users size={16} />,
                      label: "Global luxury travel speaker and trainer",
                    },
                    {
                      icon: <Users size={16} />,
                      label: "Weekly luxury travel columnist",
                    },
                    {
                      icon: <Award size={16} />,
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

              {/* SPECIALTIES */}
              <div
                className="Adg-expert-credentials-box"
                style={{ marginTop: "24px" }}
              >
                <h4 className="Adg-expert-credentials-title">
                  <Star size={16} />
                  Angela Specializes In
                </h4>

                <div className="Adg-expert-credentials-grid">
                  {[
                    "Luxury cruises",
                    "River cruises",
                    "Safaris",
                    "Expedition travel",
                    "Premium custom journeys",
                    "Ultra-luxury travel planning",
                  ].map((item, i) => (
                    <div className="Adg-expert-list-item" key={i}>
                      <span className="Adg-expert-list-icon">
                        <Star size={16} />
                      </span>

                      <span className="Adg-expert-list-label">{item}</span>
                    </div>
                  ))}
                </div>

                <p
                  className="Adg-expert-list-label"
                  style={{ marginTop: "20px" }}
                >
                  Her expertise has been featured across major global travel
                  publications and luxury travel media outlets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* final verdict */}

      <section
        className="Ejv-verdict-section"
        style={{ backgroundColor: "var(--bg-white)" }}
      >
        <div className="Ejv-verdict-container">
          {/* Header */}
          <div className="Ejv-verdict-header">
            <span className="Ejv-verdict-eyebrow">Final Thoughts</span>

            <h2 className="Ejv-verdict-title">
              Why Expert Luxury Cruise Planning Matters
            </h2>

            <div className="Asc-accent-line"></div>
          </div>

          {/* Main card */}
          <div className="Ejv-verdict-card">
            {/* Left — Image */}
            <div className="Ejv-verdict-img-col">
              <img
                src={ExploraPool}
                alt="Explora Journeys luxury cruise experience"
                className="Ejv-verdict-img"
              />

              <div className="Ejv-verdict-img-badge">
                <span className="Ejv-verdict-badge-label">
                  Explora Journeys
                </span>

                <span className="Ejv-verdict-badge-sub">
                  Contemporary Luxury
                </span>
              </div>
            </div>

            {/* Right — Content */}
            <div className="Ejv-verdict-content">
              <p className="Ejv-verdict-intro">
                Luxury travelers today are looking for more than just another
                cruise.
              </p>

              <ul className="Ejv-verdict-list">
                {[
                  "Space",
                  "Elegance",
                  "Personalization",
                  "Exceptional service",
                  "Sophisticated experiences",
                  "Stress-free planning",
                ].map((item) => (
                  <li key={item} className="Ejv-verdict-list-item">
                    <Check
                      size={14}
                      strokeWidth={2.5}
                      className="Ejv-verdict-check"
                    />

                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="Ejv-verdict-outcome">
                <ArrowRight
                  size={16}
                  strokeWidth={2}
                  className="Ejv-verdict-outcome-icon"
                />

                <p className="Ejv-verdict-outcome-text">
                  That is exactly where expert guidance matters.
                </p>
              </div>

              <div className="Ejv-verdict-divider"></div>

              <div className="Ejv-verdict-note">
                <Info
                  size={15}
                  strokeWidth={1.8}
                  className="Ejv-verdict-note-icon"
                />

                <p className="Ejv-verdict-note-text">
                  With more than four decades of luxury travel expertise, Angela
                  Hughes and Trips & Ships Luxury Travel help discerning
                  travelers create elevated cruise experiences tailored to their
                  travel style, expectations, and investment level.
                </p>
              </div>

              <div className="Ejv-verdict-note" style={{ marginTop: "16px" }}>
                <Info
                  size={15}
                  strokeWidth={1.8}
                  className="Ejv-verdict-note-icon"
                />

                <p className="Ejv-verdict-note-text">
                  Whether you are considering your first Explora Journeys voyage
                  or comparing luxury cruise lines for 2026 or 2027,
                  personalized guidance can help you maximize both value and
                  experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="Asc-section Asc-bg-soft" id="Asc-faq">
        <div className="Asc-container">
          <div className="Asc-section-header">
            <h2 className="Asc-h2">Frequently Asked Questions</h2>
            <div className="Asc-accent-line"></div>
            <p className="Asc-faq-intro">
              Everything you need to know about choosing the right Azamara ship.
            </p>
          </div>
          <FAQ />
        </div>
      </section>

      {/* CTA */}
      <section className="Asc-help-section">
        <div className="Asc-help-bg-wrap">
          <img
            src={CTAImage}
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
                  Planning an Explora Journeys Cruise the Right Way
                </h2>

                <div className="Asc-help-accent"></div>
              </div>

              <div className="Asc-help-grid">
                <div className="Asc-help-info">
                  <p className="Asc-help-intro">
                    Luxury cruise planning is about far more than choosing
                    dates.
                  </p>

                  <p className="Asc-help-intro">
                    Trips & Ships Luxury Travel helps travelers build highly
                    personalized luxury vacations tailored to their travel
                    style, preferences, and long-term travel goals.
                  </p>

                  <p className="Asc-help-intro">
                    For travelers investing significantly in luxury travel,
                    expert planning can dramatically improve the overall
                    experience.
                  </p>

                  <div className="Asc-help-btn-container">
                    <button className="Asc-help-cta-btn">
                      Start Planning Your Explora Journey
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>

                <div className="Asc-help-list-box">
                  <h3 className="Asc-help-list-title">
                    Trips & Ships Luxury Travel helps clients:
                  </h3>

                  <ul className="Asc-help-bullets">
                    {[
                      "Compare itineraries",
                      "Select ideal suites",
                      "Coordinate flights",
                      "Arrange private transfers",
                      "Extend journeys with luxury hotels",
                      "Access exclusive perks",
                      "Build fully personalized luxury vacations",
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
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExploraCruiseCost;
