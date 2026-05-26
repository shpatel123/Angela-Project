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
  Info,
  HeartPulse,
  Utensils,
  Quote,
  Sparkles,
  ChefHat,
  Crown,
} from "lucide-react";
import Nav from "../../components/Navbar/Nav";
import "./ExploraJourneysvsSeabourn.css";
import AboutImage from "../../assets/image.webp";
import CTAImage from "../../assets/ExploraJourneysvsSeabourn/EXPLORA-Mediterranean.webp";

import HeroImage1 from "../../assets/ExploraJourneysvsSeabourn/ExploraCruise.webp";
import HeroImage2 from "../../assets/ExploraJourneysvsSeabourn/Auckland-skyline-in-New-Zealand.webp";
import HeroImage4 from "../../assets/ExploraJourneysvsSeabourn/Asia-Ship-a-Long-Bay-Vietnam.webp";

import ExploraOverview from "../../assets/ExploraJourneysvsSeabourn/Explora-Overview.webp";
import SeabournOverview from "../../assets/ExploraJourneysvsSeabourn/Seabourn-Overview.webp";
import ExploraSuite from "../../assets/ExploraJourneysvsSeabourn/Suite-Services.webp";
import SeabournSuite from "../../assets/ExploraJourneysvsSeabourn/Seabourn-Suite.webp";
import SpaExperience from "../../assets/ExploraJourneysvsSeabourn/explora-journeys-sunrise-pool-deck-luxury-yacht.webp";
import ExploraDetination from "../../assets/ExploraJourneysvsSeabourn/ExploraDestination.webp";
import SeabournDetination from "../../assets/ExploraJourneysvsSeabourn/SeabourPlace.webp";
import ExploraPool from "../../assets/ExploraJourneysvsSeabourn/explora-I-infinity-pool.webp";
import ExploraDinig from "../../assets/ExploraJourneysvsSeabourn/Conservatory-Pool-Bar.webp";




import { Helmet } from "react-helmet-async";

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "Trips & Ships Luxury Travel",
      url: "https://www.tripsandships.com",
      logo: "https://www.tripsandships.com/logo.png",
      sameAs: ["https://www.linkedin.com", "https://www.facebook.com"],
    },
    {
      "@type": "Person",
      name: "Angela Hughes",
      jobTitle: "CEO of Trips & Ships Luxury Travel",
      description:
        "Luxury travel expert with over 40 years of experience and travel to 121+ countries.",
      worksFor: {
        "@type": "Organization",
        name: "Trips & Ships Luxury Travel",
      },
    },
    {
      "@type": "TravelAgency",
      name: "Trips & Ships Luxury Travel",
      url: "https://www.tripsandships.com",
    },
    {
      "@type": "BreadcrumbList",
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
          name: "Luxury Cruises",
          item: "https://www.tripsandships.com/luxury-cruises",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Explora Journeys vs Seabourn",
          item: "https://www.tripsandships.com/explora-journeys-vs-seabourn",
        },
      ],
    },
    {
      "@type": "WebPage",
      name: "Explora Journeys vs Seabourn",
      url: "https://www.tripsandships.com/explora-journeys-vs-seabourn",
      description:
        "Luxury cruise comparison between Explora Journeys and Seabourn.",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Is Explora Journeys more luxurious than Seabourn?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Explora offers more modern lifestyle luxury, while Seabourn emphasizes traditional ultra-luxury service and refinement.",
          },
        },
        {
          "@type": "Question",
          name: "Which cruise line has larger suites?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Explora Journeys generally offers larger entry-level suites.",
          },
        },
        {
          "@type": "Question",
          name: "Which cruise line is better for wellness travelers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Explora Journeys is more wellness-focused overall.",
          },
        },
        {
          "@type": "Question",
          name: "Which cruise line has better dining?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Both excel, but Seabourn is especially renowned for culinary excellence.",
          },
        },
        {
          "@type": "Question",
          name: "Is Seabourn more formal than Explora?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Seabourn feels more traditionally refined and formal.",
          },
        },
        {
          "@type": "Question",
          name: "Which cruise line attracts younger luxury travelers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Explora Journeys tends to attract a younger affluent demographic.",
          },
        },
        {
          "@type": "Question",
          name: "Which cruise line is quieter?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Explora generally feels quieter and more relaxed.",
          },
        },
        {
          "@type": "Question",
          name: "Which cruise line is better for couples?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Both are excellent for couples, though Explora appeals more to modern romantic luxury travelers.",
          },
        },
        {
          "@type": "Question",
          name: "Which cruise line is better for expedition travel?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Seabourn offers stronger expedition capabilities.",
          },
        },
        {
          "@type": "Question",
          name: "Are drinks included on both cruise lines?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Both include many premium beverages and luxury inclusions.",
          },
        },
        {
          "@type": "Question",
          name: "Which luxury cruise line offers better value?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Value depends on traveler priorities, destinations, and desired onboard experience.",
          },
        },
        {
          "@type": "Question",
          name: "Is Explora Journeys all-inclusive?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Explora includes many luxury amenities, dining, beverages, and wellness offerings.",
          },
        },
        {
          "@type": "Question",
          name: "Which cruise line is best for Mediterranean cruises?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Both are strong, though Explora’s Mediterranean lifestyle focus resonates strongly with many travelers.",
          },
        },
        {
          "@type": "Question",
          name: "Should I use a luxury cruise travel advisor?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Luxury cruises vary significantly in style, inclusions, and atmosphere, making expert guidance valuable.",
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
      q: "Is Explora Journeys more luxurious than Seabourn?",
      a: "Explora offers more modern lifestyle luxury, while Seabourn emphasizes traditional ultra-luxury service and refinement.",
    },
    {
      q: "Which cruise line has larger suites?",
      a: "Explora Journeys generally offers larger entry-level suites.",
    },
    {
      q: "Which cruise line is better for wellness travelers?",
      a: "Explora Journeys is more wellness-focused overall.",
    },
    {
      q: "Which cruise line has better dining?",
      a: "Both excel, but Seabourn is especially renowned for culinary excellence.",
    },
    {
      q: "Is Seabourn more formal than Explora?",
      a: "Yes. Seabourn feels more traditionally refined and formal.",
    },
    {
      q: "Which cruise line attracts younger luxury travelers?",
      a: "Explora Journeys tends to attract a younger affluent demographic.",
    },
    {
      q: "Which cruise line is quieter?",
      a: "Explora generally feels quieter and more relaxed.",
    },
    {
      q: "Which cruise line is better for couples?",
      a: "Both are excellent for couples, though Explora appeals more to modern romantic luxury travelers.",
    },
    {
      q: "Which cruise line is better for expedition travel?",
      a: "Seabourn offers stronger expedition capabilities.",
    },
    {
      q: "Are drinks included on both cruise lines?",
      a: "Both include many premium beverages and luxury inclusions.",
    },
    {
      q: "Which luxury cruise line offers better value?",
      a: "Value depends on traveler priorities, destinations, and desired onboard experience.",
    },
    {
      q: "Is Explora Journeys all-inclusive?",
      a: "Explora includes many luxury amenities, dining, beverages, and wellness offerings.",
    },
    {
      q: "Which cruise line is best for Mediterranean cruises?",
      a: "Both are strong, though Explora’s Mediterranean lifestyle focus resonates strongly with many travelers.",
    },
    {
      q: "Should I use a luxury cruise travel advisor?",
      a: "Yes. Luxury cruises vary significantly in style, inclusions, and atmosphere, making expert guidance valuable.",
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
const ExploraJourneysvsSeabourn = () => {
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
          Explora Journeys vs Seabourn: Which Luxury Cruise Line Is Better in
          2026?
        </title>
        <meta
          name="title"
          content="Explora Journeys vs Seabourn | Luxury Cruise Comparison 2026"
        />
        <meta
          name="description"
          content="Compare Explora Journeys vs Seabourn for luxury cruising in 2026. Discover differences in suites, dining, pricing, service, wellness, destinations, and overall luxury experience with expert insights from Angela Hughes of Trips & Ships Luxury Travel."
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
            Explora Journeys vs Seabourn: Which Luxury Cruise Line Is Right for
            You?
          </h1>

          <p className="aac_hero_subtitle">
            Understanding key differences in modern luxury cruising
          </p>

          <p className="aac_hero_text">
            Luxury cruising has evolved dramatically in recent years, and two
            names are dominating conversations among affluent travelers seeking
            elevated ocean experiences: Explora Journeys and Seabourn.
          </p>

          <p className="aac_hero_text">
            Both deliver premium service, elegant accommodations, gourmet
            dining, and immersive itineraries — but the experience onboard each
            line feels very different.
          </p>

          {/* ── Expandable content ── */}
          <div className={`aac_expandable ${readMore ? "open" : ""}`}>
            <p className="aac_hero_text">
              For travelers investing significantly in a luxury cruise vacation,
              choosing the right cruise line matters. The wrong fit can leave
              travelers feeling underwhelmed. The right fit creates
              unforgettable memories, seamless luxury, and transformative travel
              experiences.
            </p>

            <p className="aac_hero_text">
              At Trips & Ships Luxury Travel, Angela Hughes has spent more than
              40 years helping discerning travelers choose luxury cruise
              experiences aligned with their personal travel style,
              expectations, and lifestyle preferences.
            </p>

            <ul className="aac_hero_list">
              <li>CEO of Trips &amp; Ships Luxury Travel</li>
              <li>Founder of Luxury Travel University</li>
              <li>Travel Leaders Network Advisory Board member</li>
              <li>2024 Luxury Travel Influencer of the Year</li>
              <li>Named among the Most Influential Women in Travel in 2026</li>
              <li>Traveler to 121+ countries</li>
            </ul>

            <div className="aac_bio_card">
              <div className="aac_bio_avatar">A</div>
              <div className="aac_bio_body">
                <p className="aac_hero_text" style={{ marginTop: "12px" }}>
                  Angela Hughes brings a level of real-world luxury travel
                  expertise few advisors worldwide can match.
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

      {/* FINAL VERDICT */}
      <section className="Asc-section Asc-bg-soft" id="Asc-verdict">
        <div className="Asc-container">
          <div className="Asc-section-header margin-large">
            <h2 className="Asc-h2">Explora Journeys vs Seabourn</h2>

            <div className="Asc-accent-line"></div>
          </div>

          <div className="Asc-verdict-grid">
            {/* Explora Column */}
            <div className="Asc-verdict-card Asc-verdict-azamara">
              <h3 className="Asc-verdict-card-title">
                Choose Explora Journeys If You Want:
              </h3>

              <ul className="Asc-verdict-list">
                {[
                  "Modern European luxury",
                  "A yacht-inspired atmosphere",
                  "Larger suites",
                  "Wellness-focused travel",
                  "Contemporary design",
                  "More spacious public areas",
                  "A younger luxury demographic",
                  "Lifestyle-driven cruising",
                ].map((item, i) => (
                  <li key={i} className="Asc-verdict-item">
                    <Check size={18} className="Asc-verdict-icon" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Seabourn Column */}
            <div className="Asc-verdict-card Asc-verdict-regent">
              <h3 className="Asc-verdict-card-title">
                Choose Seabourn If You Want:
              </h3>

              <ul className="Asc-verdict-list">
                {[
                  "Traditional ultra-luxury cruising",
                  "Highly refined classic service",
                  "Destination-intensive itineraries",
                  "Smaller ship intimacy",
                  "Long-established luxury reputation",
                  "Expedition options",
                  "Sophisticated social atmosphere",
                ].map((item, i) => (
                  <li key={i} className="Asc-verdict-item">
                    <Check size={18} className="Asc-verdict-icon" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE COMPARISON */}
      <section className="azs-experience-section" id="azs-experience">
        <div className="azs-container">
          <div className="azs-section-header">
            <h2 className="azs-section-title">
              Explora Journeys vs Seabourn Overview
            </h2>

            <div className="azs-section-accent"></div>
          </div>

          <div className="azs-experience-grid">
            {/* Explora Card */}
            <div className="azs-experience-card azs-azamara-exp">
              <div className="azs-exp-image-wrap">
                <img
                  src={ExploraOverview}
                  alt="Explora Journeys modern luxury atmosphere"
                  className="azs-exp-img"
                />

                <div className="azs-exp-image-badge">
                  Modern Lifestyle Luxury
                </div>
              </div>

              <div className="azs-exp-content">
                <div className="azs-exp-header">
                  <Ship size={24} className="azs-exp-icon" />
                  <h3 className="azs-exp-title">Explora Journeys Overview</h3>
                </div>

                <div className="azs-exp-body">
                  <p className="azs-exp-highlight">
                    Explora Journeys is the ultra-luxury lifestyle brand created
                    by MSC Group.
                  </p>

                  <div className="azs-exp-divider"></div>

                  <p
                    className="azs-exp-highlight"
                    style={{ fontWeight: "400" }}
                  >
                    Rather than positioning itself as a traditional cruise line,
                    Explora focuses on “ocean state of mind” luxury travel —
                    emphasizing wellness, space, design, culinary experiences,
                    and slower-paced immersive journeys.
                  </p>

                  <div className="azs-exp-group">
                    <h4 className="azs-exp-group-title">
                      The atmosphere onboard feels:
                    </h4>

                    <ul className="azs-exp-list">
                      {[
                        "Contemporary",
                        "Residential",
                        "Calm",
                        "Sophisticated",
                        "Wellness-oriented",
                        "Design-forward",
                      ].map((item, idx) => (
                        <li key={idx} className="azs-exp-list-item">
                          <Check size={16} className="azs-exp-list-icon" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="azs-exp-divider"></div>

                  <div className="azs-exp-group">
                    <h4 className="azs-exp-group-title">
                      Explora appeals strongly to:
                    </h4>

                    <ul className="azs-exp-list">
                      {[
                        "Luxury hotel travelers",
                        "Aman and Four Seasons guests",
                        "Affluent younger travelers",
                        "Modern luxury seekers",
                        "Travelers who dislike traditional cruise environments",
                      ].map((item, idx) => (
                        <li key={idx} className="azs-exp-list-item">
                          <ArrowRight size={16} className="azs-exp-list-icon" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Seabourn Card */}
            <div className="azs-experience-card azs-seabourn-exp">
              <div className="azs-exp-image-wrap">
                <img
                  src={SeabournOverview}
                  alt="Seabourn ultra luxury atmosphere"
                  className="azs-exp-img"
                />

                <div className="azs-exp-image-badge">
                  Traditional Ultra-Luxury
                </div>
              </div>

              <div className="azs-exp-content">
                <div className="azs-exp-header">
                  <Ship size={24} className="azs-exp-icon" />
                  <h3 className="azs-exp-title">Seabourn Overview</h3>
                </div>

                <div className="azs-exp-body">
                  <p className="azs-exp-highlight">
                    Seabourn has long been considered one of the world’s premier
                    ultra-luxury cruise brands.
                  </p>

                  <div className="azs-exp-divider"></div>

                  <p
                    className="azs-exp-highlight"
                    style={{ fontWeight: "400" }}
                  >
                    Known for exceptional service, destination-focused
                    itineraries, refined dining, and intimate ships, Seabourn
                    attracts experienced luxury cruisers seeking traditional
                    elegance and personalized attention.
                  </p>

                  <div className="azs-exp-group">
                    <h4 className="azs-exp-group-title">
                      Seabourn’s atmosphere feels:
                    </h4>

                    <ul className="azs-exp-list">
                      {[
                        "Refined",
                        "Sophisticated",
                        "Social",
                        "Elegant",
                        "Classic luxury",
                      ].map((item, idx) => (
                        <li key={idx} className="azs-exp-list-item">
                          <Check size={16} className="azs-exp-list-icon" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="azs-exp-divider"></div>

                  <div className="azs-exp-group">
                    <h4 className="azs-exp-group-title">
                      It especially appeals to:
                    </h4>

                    <ul className="azs-exp-list">
                      {[
                        "Experienced luxury cruisers",
                        "Affluent retirees",
                        "World travelers",
                        "Culinary-focused travelers",
                        "Destination enthusiasts",
                      ].map((item, idx) => (
                        <li key={idx} className="azs-exp-list-item">
                          <ArrowRight size={16} className="azs-exp-list-icon" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ENTERTAINMENT & ENRICHMENT */}
      <section className="azs-entertainment-section" id="azs-entertainment">
        <div className="azs-container">
          <div className="azs-section-header">
            <h2 className="azs-section-title">
              Explora Journeys vs Seabourn Comparison
            </h2>

            <div className="azs-section-accent"></div>

            <p className="azs-section-subtitle">
              Ship Design, Atmosphere, and Luxury Experience Style
            </p>
          </div>

          <div className="azs-entertainment-grid">
            {/* Explora Journeys Card */}
            <div className="azs-entertainment-card azs-azamara-ent">
              <div className="azs-ent-header">
                <div className="azs-ent-icon-circle">
                  <Sparkles size={24} className="azs-ent-icon" />
                </div>

                <h3 className="azs-ent-title">Explora Journeys</h3>
              </div>

              <p className="azs-ent-intro">
                Explora’s ships feel like modern luxury boutique hotels at sea.
              </p>

              <div className="azs-ent-body">
                <h4 className="azs-ent-group-title">Highlights include:</h4>

                <ul className="azs-ent-list">
                  {[
                    "European contemporary interiors",
                    "High ceilings",
                    "Spacious open decks",
                    "Residential suite styling",
                    "Wellness-inspired spaces",
                    "Quiet luxury aesthetic",
                  ].map((item, idx) => (
                    <li key={idx} className="azs-ent-list-item">
                      <div className="azs-ent-list-icon-wrapper">
                        <Check size={14} className="azs-ent-list-icon" />
                      </div>

                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="azs-ent-divider"></div>

                <div className="azs-ent-highlight-box azs-azamara-ent-highlight">
                  <p className="azs-ent-highlight-text">
                    The experience feels intentionally unhurried and uncrowded.
                  </p>
                </div>
              </div>
            </div>

            {/* Seabourn Card */}
            <div className="azs-entertainment-card azs-seabourn-ent">
              <div className="azs-ent-header">
                <div className="azs-ent-icon-circle">
                  <Sparkles size={24} className="azs-ent-icon" />
                </div>

                <h3 className="azs-ent-title">Seabourn</h3>
              </div>

              <p className="azs-ent-intro">
                Seabourn offers a more classic ultra-luxury cruise atmosphere.
              </p>

              <div className="azs-ent-body">
                <h4 className="azs-ent-group-title">Highlights include:</h4>

                <ul className="azs-ent-list">
                  {[
                    "Traditional elegance",
                    "Yacht-club ambiance",
                    "Intimate lounges",
                    "Social sophistication",
                    "Formal luxury touches",
                  ].map((item, idx) => (
                    <li key={idx} className="azs-ent-list-item">
                      <div className="azs-ent-list-icon-wrapper">
                        <Star size={14} className="azs-ent-list-icon" />
                      </div>

                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="azs-ent-divider"></div>

                <div className="azs-ent-highlight-box azs-seabourn-ent-highlight">
                  <p className="azs-ent-highlight-text">
                    The atmosphere often feels more social and refined in a
                    classic luxury sense.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SUITES & ACCOMMODATIONS */}
      <section className="azs-suites-section" id="azs-suites">
        <div className="azs-container">
          <div className="azs-section-header">
            <h2 className="azs-section-title">Suites & Accommodations</h2>

            <div className="azs-section-accent"></div>

            <p className="azs-section-subtitle">
              Modern Residential Luxury vs Personalized Traditional Elegance
            </p>
          </div>

          <div className="azs-suites-grid">
            {/* Explora Card */}
            <div className="azs-suites-card azs-seabourn-suites">
              <div className="azs-suites-image-wrap">
                <img
                  src={ExploraSuite}
                  alt="Explora Journeys luxury suite"
                  className="azs-suites-img"
                />

                <span className="azs-suites-image-badge">
                  Spacious Modern Suites
                </span>
              </div>

              <div className="azs-suites-content">
                <div className="azs-suites-card-header">
                  <div className="azs-suites-icon-circle">
                    <Award size={24} className="azs-suites-icon" />
                  </div>

                  <h3 className="azs-suites-title">
                    Explora Journeys Wins on Space
                  </h3>
                </div>

                <p className="azs-suites-intro">
                  Explora suites are among the largest entry-level suites in
                  luxury cruising.
                </p>

                <div className="azs-suites-body">
                  <h4 className="azs-suites-group-title">
                    Travelers appreciate:
                  </h4>

                  <ul className="azs-suites-list">
                    {[
                      "Large terraces",
                      "Floor-to-ceiling windows",
                      "Walk-in closets",
                      "Heated bathroom floors",
                      "Residential comfort",
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

                  <div className="azs-suites-highlight-box azs-seabourn-suites-highlight">
                    <p className="azs-suites-highlight-text">
                      The aesthetic feels more like a luxury penthouse than a
                      cruise cabin.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Seabourn Card */}
            <div className="azs-suites-card azs-azamara-suites">
              <div className="azs-suites-image-wrap">
                <img
                  src={SeabournSuite}
                  alt="Seabourn luxury suite"
                  className="azs-suites-img"
                />

                <span className="azs-suites-image-badge">
                  Personalized Ultra-Luxury
                </span>
              </div>

              <div className="azs-suites-content">
                <div className="azs-suites-card-header">
                  <div className="azs-suites-icon-circle">
                    <Ship size={24} className="azs-suites-icon" />
                  </div>

                  <h3 className="azs-suites-title">
                    Seabourn Excels in Personalized Luxury
                  </h3>
                </div>

                <p className="azs-suites-intro">
                  Seabourn suites remain elegant and comfortable, with
                  exceptional service being the standout differentiator.
                </p>

                <div className="azs-suites-body">
                  <h4 className="azs-suites-group-title">
                    Guests consistently praise:
                  </h4>

                  <ul className="azs-suites-list">
                    {[
                      "Personalized attention",
                      "Attentive suite stewards",
                      "Butler-level hospitality",
                      "Seamless service delivery",
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
                      Service and hospitality remain core strengths of the
                      Seabourn experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DINING COMPARISON */}
      <section
        className="azs-dining-section"
        id="azs-dining"
        style={{ borderBottom: "none" }}
      >
        <div className="azs-container">
          <div className="azs-section-header">
            <h2 className="azs-section-title">Dining Comparison</h2>

            <div className="azs-section-accent"></div>

            <p className="azs-section-subtitle">
              Contemporary Wellness-Focused Cuisine vs Legendary Fine Dining
            </p>
          </div>

          <div className="azs-dining-grid">
            {/* Explora Journeys Card */}
            <div className="azs-dining-card azs-seabourn-dining">
              <div className="azs-dining-header">
                <div className="azs-dining-icon-circle">
                  <ChefHat size={24} className="azs-dining-icon" />
                </div>

                <h3 className="azs-dining-title">Explora Journeys Dining</h3>
              </div>

              <p className="azs-dining-intro">
                Explora emphasizes elevated contemporary dining with a strong
                lifestyle and wellness focus.
              </p>

              <div className="azs-dining-body">
                <h4 className="azs-dining-group-title">Explora emphasizes:</h4>

                <ul className="azs-dining-list">
                  {[
                    "Wellness-conscious cuisine",
                    "Mediterranean influences",
                    "Elevated casual luxury",
                    "Flexible dining",
                    "Contemporary culinary presentation",
                  ].map((item, idx) => (
                    <li key={idx} className="azs-dining-list-item">
                      <div className="azs-dining-list-icon-wrapper">
                        <Check size={14} className="azs-dining-list-icon" />
                      </div>

                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="azs-dining-divider"></div>

                <div className="azs-dining-highlight-box azs-seabourn-highlight">
                  <p className="azs-dining-highlight-text">
                    Dining feels relaxed yet sophisticated.
                  </p>
                </div>
              </div>
            </div>

            {/* Seabourn Card */}
            <div className="azs-dining-card azs-azamara-dining">
              <div className="azs-dining-header">
                <div className="azs-dining-icon-circle">
                  <Utensils size={24} className="azs-dining-icon" />
                </div>

                <h3 className="azs-dining-title">Seabourn Dining</h3>
              </div>

              <p className="azs-dining-intro">
                Seabourn remains one of the most respected culinary experiences
                in ultra-luxury cruising.
              </p>

              <div className="azs-dining-body">
                <h4 className="azs-dining-group-title">
                  Seabourn remains legendary for:
                </h4>

                <ul className="azs-dining-list">
                  {[
                    "Fine dining standards",
                    "Formal culinary excellence",
                    "Wine programming",
                    "Thomas Keller collaborations",
                    "Destination-inspired menus",
                  ].map((item, idx) => (
                    <li key={idx} className="azs-dining-list-item">
                      <div className="azs-dining-list-icon-wrapper">
                        <Star size={14} className="azs-dining-list-icon" />
                      </div>

                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="azs-dining-divider"></div>

                <div className="azs-dining-highlight-box azs-azamara-highlight">
                  <p className="azs-dining-highlight-text">
                    Food-focused travelers often rank Seabourn among the best
                    luxury cruise lines globally.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="Ejvs-section">
        <div className="Ejvs-container">
          {/* ── Page Header ── */}
          <div className="Ejvs-header">
            <h2 className="Ejvs-title">Wellness & Spa Experience</h2>

            <div className="Asc-accent-line"></div>
          </div>

          {/* ══ BLOCK 1: Wellness — Full bleed image split ══ */}
          <div className="Ejvs-wellness-block">
            <div className="Ejvs-wellness-img-side">
              <img
                src={SpaExperience}
                alt="Wellness"
                className="Ejvs-wellness-img"
              />
              <div className="Ejvs-wellness-img-label">
                <HeartPulse size={16} strokeWidth={1.6} />
                <span>Wellness & Spa Experience</span>
              </div>
            </div>
            <div className="Ejvs-wellness-content">
              <p className="Ejvs-wellness-note">
                Travelers prioritizing spa and wellness often prefer Explora.
              </p>
              <div className="Ejvs-wellness-rows">
                <div className="Ejvs-wellness-brand">
                  <span className="Ejvs-pill Ejvs-pill--dark">
                    Explora Journeys
                  </span>
                  <ul className="Ejvs-dot-list">
                    {[
                      "Extensive spa facilities",
                      "Wellness programming",
                      "Fitness spaces",
                      "Relaxation-focused design",
                      "Ocean wellness philosophy",
                    ].map((i) => (
                      <li key={i}>
                        <span className="Ejvs-dot Ejvs-dot--solid"></span>
                        {i}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="Ejvs-wellness-brand">
                  <span className="Ejvs-pill Ejvs-pill--outline">Seabourn</span>
                  <p className="Ejvs-muted-text">
                    Excellent wellness facilities but with less emphasis on
                    lifestyle wellness immersion.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      {/* ENTERTAINMENT & NIGHTLIFE */}
      <section className="Ejsc-ent-section" id="Ejsc-entertainment">
        <div className="Ejsc-container">
          <div className="Ejsc-section-header">
            <h2 className="Ejsc-section-title">Entertainment &amp; Nightlife</h2>
            <div className="Asc-accent-line"></div>
            <p className="Ejsc-section-subtitle">
              Comparing Explora’s understated sophistication with Seabourn’s engaging social atmosphere
            </p>
          </div>

          <div className="Ejsc-ent-grid">
            {/* Explora Journeys Card */}
            <div className="Ejsc-ent-card Ejsc-explora-card">
              <div className="Ejsc-card-header">
                <div className="Ejsc-card-icon-wrap">
                  <Compass size={24} className="Ejsc-card-icon" />
                </div>
                <h3 className="Ejsc-card-title">Explora Journeys</h3>
              </div>
              <p className="Ejsc-card-intro">
                Entertainment feels understated and sophisticated, designed to complement your evening without dominating it.
              </p>
              <ul className="Ejsc-feature-list">
                {[
                  "Live music in elegant lounges",
                  "Elegant, understated lounge experiences",
                  "Quiet, relaxing nightlife venues",
                  "Curated cultural programming & guest hosts",
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
                  Perfect for guests who prefer sophisticated, low-key evenings and intimate conversation.
                </p>
              </div>
            </div>

            {/* Seabourn Card */}
            <div className="Ejsc-ent-card Ejsc-seabourn-card">
              <div className="Ejsc-card-header">
                <div className="Ejsc-card-icon-wrap">
                  <Users size={24} className="Ejsc-card-icon" />
                </div>
                <h3 className="Ejsc-card-title">Seabourn</h3>
              </div>
              <p className="Ejsc-card-intro">
                Seabourn offers a more social, classic luxury environment where guests naturally mingle and celebrate.
              </p>
              <ul className="Ejsc-feature-list">
                {[
                  "Lively cocktail lounges & social spots",
                  "Inviting social gatherings & Hosted tables",
                  "Enlightening enrichment talks by experts",
                  "High-caliber live performances & stage shows",
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
                  Ideal for those who enjoy a highly interactive onboard community and traditional evening entertainment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      {/* DESTINATIONS & ITINERARIES */}
      <section className="Ejsc-dest-section" id="Ejsc-destinations">
        <div className="Ejsc-container">
          <div className="Ejsc-section-header">
            <h2 className="Ejsc-section-title">Destinations &amp; Itineraries</h2>
            <div className="Asc-accent-line"></div>
            <p className="Ejsc-section-subtitle">
              Slower lifestyle-focused port pacing vs. a comprehensive global footprint
            </p>
          </div>

          <div className="Ejsc-dest-grid">
            {/* Seabourn Strengths Card */}
            <div className="Ejsc-dest-card Ejsc-seabourn-dest-card">
              <div className="Ejsc-dest-img-wrap">
                <img 
                  src={SeabournDetination}
                  alt="Seabourn polar and remote destinations" 
                  className="Ejsc-dest-img" 
                />
              </div>
              <div className="Ejsc-card-header">
                <div className="Ejsc-card-icon-wrap">
                  <Compass size={24} className="Ejsc-card-icon" />
                </div>
                <h3 className="Ejsc-card-title">Seabourn Strengths</h3>
              </div>
              <p className="Ejsc-card-intro">
                Seabourn has a broader global itinerary portfolio that reaches all seven continents with specialized expedition travel.
              </p>
              <ul className="Ejsc-feature-list">
                {[
                  "Ultra-luxury expedition cruises",
                  "Deep exploration of polar regions",
                  "Remote, hard-to-reach destinations",
                  "Grand voyages & longer world cruises",
                ].map((item, i) => (
                  <li key={i} className="Ejsc-feature-item">
                    <div className="Ejsc-feature-icon">
                      <Check size={14} />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Explora Strengths Card */}
            <div className="Ejsc-dest-card Ejsc-explora-dest-card">
              <div className="Ejsc-dest-img-wrap">
                <img 
                  src={ExploraDetination}
                  alt="Explora Mediterranean luxury cruising" 
                  className="Ejsc-dest-img" 
                />
              </div>
              <div className="Ejsc-card-header">
                <div className="Ejsc-card-icon-wrap">
                  <Ship size={24} className="Ejsc-card-icon" />
                </div>
                <h3 className="Ejsc-card-title">Explora Strengths</h3>
              </div>
              <p className="Ejsc-card-intro">
                Explora Journeys focuses heavily on iconic, lifestyle-centered regions with extended port stays and a relaxed rhythm.
              </p>
              <ul className="Ejsc-feature-list">
                {[
                  "Mediterranean luxury cruising expertise",
                  "Boutique Caribbean luxury itineraries",
                  "Curated, lifestyle-focused port experiences",
                  "Slower travel pacing with overnight stays",
                ].map((item, i) => (
                  <li key={i} className="Ejsc-feature-item">
                    <div className="Ejsc-feature-icon">
                      <Star size={14} />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>


      
      {/* SERVICE STYLE COMPARISON */}
      <section className="Ejsc-service-section" id="Ejsc-service">
        <div className="Ejsc-container">
          <div className="Ejsc-section-header">
            <h2 className="Ejsc-section-title">Service Style Comparison</h2>
            <div className="Asc-accent-line"></div>
            <p className="Ejsc-section-subtitle">
              Modern hospitality-focused warmth vs. timeless, highly polished ultra-luxury refinement
            </p>
          </div>

          <div className="Ejsc-service-grid">
            {/* Explora Service Card */}
            <div className="Ejsc-service-card Ejsc-explora-service">
              <div className="Ejsc-card-header">
                <div className="Ejsc-card-icon-wrap">
                  <Sparkles size={24} className="Ejsc-card-icon" />
                </div>
                <h3 className="Ejsc-card-title">Explora Service Style</h3>
              </div>
              <p className="Ejsc-card-intro">
                Contemporary and warm hospitality designed to feel like an upscale, relaxed European boutique hotel.
              </p>
              <div className="Ejsc-service-tags">
                {["Warm", "Contemporary", "Less Formal", "Lifestyle-Focused"].map((tag, i) => (
                  <span key={i} className="Ejsc-service-tag">{tag}</span>
                ))}
              </div>
            </div>

            {/* Seabourn Service Card */}
            <div className="Ejsc-service-card Ejsc-seabourn-service">
              <div className="Ejsc-card-header">
                <div className="Ejsc-card-icon-wrap">
                  <Crown size={24} className="Ejsc-card-icon" />
                </div>
                <h3 className="Ejsc-card-title">Seabourn Service Style</h3>
              </div>
              <p className="Ejsc-card-intro">
                Timeless ultra-luxury service, highly personalized and meticulously trained to anticipate every whim.
              </p>
              <div className="Ejsc-service-tags">
                {["Highly Polished", "Traditional Ultra-Luxury", "Formal Refinement", "Exceptionally Personalized"].map((tag, i) => (
                  <span key={i} className="Ejsc-service-tag Ejsc-tag-highlight">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="Ejvs-section" style={{ backgroundColor: "var(--bg-soft)" }}>
        <div className="Ejvs-container">
          {/* ── Page Header ── */}
          <div className="Ejvs-header">
            <h2 className="Ejvs-title">
              Which Cruise Line Feels More Luxurious?
            </h2>

            <div className="Asc-accent-line"></div>
          </div>

          {/* ══ BLOCK 5: Luxury — Dark full-width with image ══ */}
          <div className="Ejvs-luxury-block">
            <div className="Ejvs-luxury-img-wrap">
              <img
                src={ExploraPool}
                alt="Luxury"
                className="Ejvs-luxury-img"
              />
            </div>
            <div className="Ejvs-luxury-content">
              <p className="Ejvs-luxury-note">
                This depends entirely on how travelers define luxury.
              </p>
              <div className="Ejvs-luxury-split">
                <div className="Ejvs-luxury-half">
                  <p className="Ejvs-luxury-brand">Explora — Luxury Through</p>
                  <div className="Ejvs-luxury-tags">
                    {[
                      "Space",
                      "Design",
                      "Wellness",
                      "Lifestyle",
                      "Modern aesthetics",
                    ].map((t) => (
                      <span key={t} className="Ejvs-luxury-tag">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="Ejvs-luxury-vline"></div>
                <div className="Ejvs-luxury-half">
                  <p className="Ejvs-luxury-brand">Seabourn — Luxury Through</p>
                  <div className="Ejvs-luxury-tags">
                    {[
                      "Service",
                      "Tradition",
                      "Refinement",
                      "Culinary excellence",
                      "Heritage reputation",
                    ].map((t) => (
                      <span
                        key={t}
                        className="Ejvs-luxury-tag Ejvs-luxury-tag--muted"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING & VALUE */}
<section className="Ejvs-pricing-section" id="Ejvs-pricing">
  <div className="Ejvs-container">
    {/* Section Header */}
    <div className="Ejvs-section-header">
      <h2 className="Ejvs-section-title">Pricing &amp; Value</h2>
       <div className="Asc-accent-line"></div>


      <p className="Ejvs-section-subtitle">
        Understanding the difference between lifestyle luxury and
        destination-focused value
      </p>
    </div>

    {/* Main Grid */}
    <div className="Ejvs-pricing-grid">
      {/* Explora Card */}
      <div className="Ejvs-pricing-card Ejvs-explora-card">
        <div className="Ejvs-card-header">
          <div className="Ejvs-card-icon-wrap">
            <Sparkles size={24} className="Ejvs-card-icon" />
          </div>

          <h3 className="Ejvs-card-title">Explora Journeys Value</h3>
        </div>

        <p className="Ejvs-card-intro">
          Explora appeals strongly to travelers who prioritize the onboard
          luxury lifestyle experience.
        </p>

        <ul className="Ejvs-feature-list">
          {[
            "Lifestyle-oriented inclusions",
            "Modern luxury atmosphere",
            "Wellness-focused experiences",
            "Large residential-style suites",
            "Relaxed luxury ambiance",
          ].map((item, i) => (
            <li key={i} className="Ejvs-feature-item">
              <div className="Ejvs-feature-icon">
                <Check size={14} />
              </div>

              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="Ejvs-card-highlight">
          <p>
            Ideal for travelers seeking a highly contemporary luxury
            experience at sea.
          </p>
        </div>
      </div>

      {/* Seabourn Card */}
      <div className="Ejvs-pricing-card Ejvs-seabourn-card">
        <div className="Ejvs-card-header">
          <div className="Ejvs-card-icon-wrap">
            <Award size={24} className="Ejvs-card-icon" />
          </div>

          <h3 className="Ejvs-card-title">Seabourn Value</h3>
        </div>

        <p className="Ejvs-card-intro">
          Seabourn often delivers exceptional value for travelers focused on
          service and destination depth.
        </p>

        <ul className="Ejvs-feature-list">
          {[
            "Refined personalized service",
            "Destination-intensive itineraries",
            "Traditional ultra-luxury atmosphere",
            "Elegant culinary experiences",
            "Strong itinerary reputation",
          ].map((item, i) => (
            <li key={i} className="Ejvs-feature-item">
              <div className="Ejvs-feature-icon">
                <Star size={14} />
              </div>

              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="Ejvs-card-highlight">
          <p>
            Best suited for travelers who value classic luxury cruising and
            immersive destinations.
          </p>
        </div>
      </div>
    </div>

    {/* Bottom Summary */}
    <div className="Ejvs-summary-box">
      <p className="Ejvs-summary-text">
        Both cruise lines occupy the ultra-luxury category, but the right
        value depends entirely on whether travelers prioritize onboard
        lifestyle luxury or destination-focused sophistication.
      </p>
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
                title: "Choosing Based Only on Price",
                desc: "Luxury cruise value is about fit, not simply cost.",
              },

              {
                title: "MIgnoring Atmosphere",
                desc: "The emotional feel of a cruise line matters tremendously.",
              },

              {
                title: "Booking Without Expert Guidance",
                desc: "Luxury cruise selection is increasingly nuanced.",
              },

              {
                title: "Personalized Luxury Cruise Matching",
                desc: "Angela Hughes and the Trips & Ships Luxury Travel team help travelers align travel style, lifestyle preferences, destination goals, wellness priorities, dining expectations, social preferences, and suite preferences.",
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
        </div>
      </section>

      {/* WHO SHOULD CHOOSE */}
      <section
        className="Asc-section Asc-bg-soft"
        id="Asc-who"
        style={{ backgroundColor: "var(--bg-white)" }}
      >
        <div className="Asc-container">
          <div className="Asc-section-header">
            <h2 className="Asc-h2">Who Explora Journeys Is Best Suited For</h2>

            <div className="Asc-accent-line"></div>
          </div>

          <div className="Asc-who-grid">
            {/* BEST FOR */}
            <div className="Asc-who-card Asc-who-yes">
              <h3 className="Asc-who-title">Explora Journeys Is Best For</h3>

              <ul className="Asc-who-list">
                {[
                  "Modern luxury travelers",
                  "Wellness enthusiasts",
                  "Younger affluent travelers",
                  "Luxury hotel lovers",
                  "Design-focused travelers",
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
              <h3 className="Asc-who-title">Explora May Not Be Ideal For</h3>

              <ul className="Asc-who-list">
                {[
                  "Travelers seeking traditional formal cruising",
                  "Highly social cruise atmospheres",
                  "Expedition-focused travelers",
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

      {/* WHO SHOULD CHOOSE */}
      <section className="Asc-section Asc-bg-soft" id="Asc-who">
        <div className="Asc-container">
          <div className="Asc-section-header">
            <h2 className="Asc-h2">Who Seabourn Is Best Suited For</h2>

            <div className="Asc-accent-line"></div>
          </div>

          <div className="Asc-who-grid">
            {/* BEST FOR */}
            <div className="Asc-who-card Asc-who-yes">
              <h3 className="Asc-who-title">Seabourn Is Best For</h3>

              <ul className="Asc-who-list">
                {[
                  "Experienced luxury cruisers",
                  "Food-focused travelers",
                  "Traditional luxury lovers",
                  "Destination enthusiasts",
                  "Expedition travelers",
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
              <h3 className="Asc-who-title">Seabourn May Not Be Ideal For</h3>

              <ul className="Asc-who-list">
                {[
                  "Travelers wanting highly contemporary design",
                  "Travelers seeking wellness-centric cruising",
                  "Younger luxury demographics",
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
            <span className="Adg-expert-eyebrow">
              Angela Hughes Luxury Cruise Authority
            </span>

            <h2 className="Adg-expert-title">
              Why Travelers Trust Angela Hughes
            </h2>

            <div className="Adg-expert-divider"></div>
          </div>

          {/* MAIN GRID */}
          <div className="Adg-expert-grid">
            {/* LEFT SIDE */}
            <div className="Adg-expert-image-col">
              <div className="Adg-expert-portrait-wrap">
                <img
                  src={AboutImage}
                  alt="Angela Hughes Luxury Cruise Expert"
                  className="Adg-expert-portrait"
                />

                <div className="Adg-expert-portrait-badge">
                  <Star size={14} />
                  <span>40+ Years Luxury Travel Expertise</span>
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
                  luxury travel experts."
                </blockquote>
              </div>

              {/* CREDENTIALS */}
              <div className="Adg-expert-credentials-box">
                <h4 className="Adg-expert-credentials-title">
                  <Award size={16} />
                  Her Credentials Include
                </h4>

                <div className="Adg-expert-credentials-grid">
                  {[
                    {
                      icon: <Star size={16} />,
                      label: "Over 40 years in luxury travel",
                    },
                    {
                      icon: <MapPin size={16} />,
                      label: "Visited 121+ countries",
                    },
                    {
                      icon: <Users size={16} />,
                      label: "Global luxury travel speaker",
                    },
                    {
                      icon: <Award size={16} />,
                      label: "Founder of Luxury Travel University",
                    },
                    {
                      icon: <Users size={16} />,
                      label: "Weekly travel industry columnist",
                    },
                    {
                      icon: <Award size={16} />,
                      label: "Travel Leaders Network Advisory Board member",
                    },
                    {
                      icon: <Award size={16} />,
                      label: "Luxury Travel Influencer of the Year",
                    },
                    {
                      icon: <Star size={16} />,
                      label: "Featured in global travel publications",
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
                  Her Expertise Spans
                </h4>

                <div className="Adg-expert-credentials-grid">
                  {[
                    "Luxury ocean cruises",
                    "River cruises",
                    "Expedition travel",
                    "Safaris",
                    "Premium custom travel",
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
                  Trips & Ships Luxury Travel delivers concierge-level luxury
                  travel planning designed specifically for affluent travelers
                  seeking curated experiences rather than transactional
                  bookings.
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
            <span className="Ejv-verdict-eyebrow">Luxury Cruise Guidance</span>

            <h2 className="Ejv-verdict-title">
              How to Choose the Right Luxury Cruise Line
            </h2>

            <div className="Asc-accent-line"></div>
          </div>

          {/* Main card */}
          <div className="Ejv-verdict-card">
            {/* Left — Image */}
            <div className="Ejv-verdict-img-col">
              <img
                src={ExploraDinig}
                alt="Luxury cruise experience"
                className="Ejv-verdict-img"
              />

              <div className="Ejv-verdict-img-badge">
                <span className="Ejv-verdict-badge-label">
                  Luxury Cruise Planning
                </span>

                <span className="Ejv-verdict-badge-sub">
                  Personalized Guidance
                </span>
              </div>
            </div>

            {/* Right — Content */}
            <div className="Ejv-verdict-content">
              <p className="Ejv-verdict-intro">
                The best luxury cruise line is not universally the same for
                every traveler.
              </p>

              <p className="Ejv-verdict-intro">The right choice depends on:</p>

              <ul className="Ejv-verdict-list">
                {[
                  "Personality",
                  "Lifestyle",
                  "Travel goals",
                  "Wellness priorities",
                  "Dining expectations",
                  "Desired atmosphere",
                  "Preferred destinations",
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
                  That is why expert guidance matters.
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
                  Angela Hughes and Trips &amp; Ships Luxury Travel help
                  travelers compare luxury cruise experiences based on personal
                  travel style, expectations, and long-term value rather than
                  generic comparisons.
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
            alt="Luxury cruise consultation"
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
                  Ready to Plan Your Luxury Cruise?
                </h2>

                <div className="Asc-help-accent"></div>
              </div>

              <div className="Asc-help-grid">
                <div className="Asc-help-info">
                  <p className="Asc-help-intro">
                    Whether you are considering Explora Journeys, Seabourn, or
                    another ultra-luxury cruise experience, Trips & Ships Luxury
                    Travel can help you select the perfect fit for your travel
                    style.
                  </p>

                  <p className="Asc-help-intro">
                    With decades of expertise and deep luxury cruise knowledge,
                    Angela Hughes and her team provide highly personalized
                    recommendations designed around your preferences — not
                    generic booking engines.
                  </p>

                  <div className="Asc-help-btn-container">
                    <button className="Asc-help-cta-btn">
                      Schedule Your Luxury Cruise Consultation
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>

                <div className="Asc-help-list-box">
                  <h3 className="Asc-help-list-title">
                    Contact Trips & Ships Luxury Travel Today
                  </h3>

                  <p className="Asc-help-intro">
                    Schedule a personalized luxury cruise consultation and
                    discover which ultra-luxury cruise experience is truly right
                    for you.
                  </p>

                  <ul className="Asc-help-bullets">
                    {[
                      "Explora Journeys guidance",
                      "Seabourn comparison expertise",
                      "Personalized itinerary planning",
                      "Suite selection support",
                      "Luxury cruise recommendations",
                      "Tailored travel experiences",
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

export default ExploraJourneysvsSeabourn;
