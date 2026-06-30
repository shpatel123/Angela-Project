import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
  Utensils,
  Sparkles,
  Wine,
  HeartHandshake,
  Clock,
  ChefHat,
} from "lucide-react";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela3.jpeg";

import HeroImage1 from "../../assets/ExploraJourneysCruises/ExploraCruise.webp";
import HeroImage2 from "../../assets/IsExploraGoodForFamilies/ExploraCruise3.webp";
import HeroImage3 from "../../assets/IsExploraGoodForFamilies/Luxury-Explora-Journeys.webp";
import ExploraShip from "../../assets/WhichExploraShipChoose/ExploraCruise3.webp";
import Exploracta from "../../assets/WhichExploraSuiteWorthUpgrade/explora-I-central-pool-deck-aerial-view.jpg";
import FineDining from "../../assets/WhichExploraShipChoose/Fine-Dining.webp";
import FineDining2 from "../../assets/WhichExploraSuiteWorthUpgrade/explora-luxury-dining2.jpg";
import FineDining3 from "../../assets/WhichExploraSuiteWorthUpgrade/explora-luxury-dining.jpg";
import FineDining4 from "../../assets/WhichExploraSuiteWorthUpgrade/explora-outside-suites.jpg";
import LuxuryOceanfrontSuites from "../../assets/HowAdvanceShouldBookExplora/EXPLORA-III-IV-Anthology.jpg";
import ExploraPool from "../../assets/WhichExploraSuiteWorthUpgrade/explora-III-helios-pool-luxury-sundeck-retreat.jpg";
import ExploraDetination5 from "../../assets/HowAdvanceShouldBookExplora/onboard-experience.webp";

import { Helmet } from "react-helmet-async";

/* ── Schema ─────────────────────────────────────────────────────── */
const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "Trips & Ships Luxury Travel",
      url: "https://www.tripsandships.com",
      logo: "https://www.tripsandships.com/Copy-of-TRIPSSHIPS-e1592486640831.webp",
    },
    {
      "@type": "TravelAgency",
      name: "Trips & Ships Luxury Travel",
      url: "https://www.tripsandships.com",
      description:
        "Luxury travel agency specializing in luxury cruises, safaris, expeditions, and premium travel experiences.",
    },
    {
      "@type": "Person",
      name: "Angela Hughes",
      jobTitle: "CEO of Trips & Ships Luxury Travel",
      description:
        "Luxury travel expert with over 40 years of experience and travel to 121+ countries.",
    },
    {
      "@type": "WebPage",
      name: "Is Anthology Worth It?",
      url: "https://www.tripsandships.com/is-anthology-worth-it",
      description:
        "Thinking about dining at Anthology on Explora Journeys? Discover what's included, how much it costs, what to expect, and whether this specialty restaurant is worth the extra charge.",
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
          name: "Is Anthology Worth It",
          item: "https://www.tripsandships.com/is-anthology-worth-it",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Is Anthology included in the Explora Journeys fare?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Anthology is a specialty restaurant that requires an additional reservation fee.",
          },
        },
        {
          "@type": "Question",
          name: "How much does Anthology cost?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The tasting menu is approximately €165 per person, with an optional wine pairing available for an additional charge.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need a reservation?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Because seating is limited, reservations are highly recommended.",
          },
        },
        {
          "@type": "Question",
          name: "Is there a dress code?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Smart casual or elegant evening attire is recommended, in keeping with the restaurant's refined atmosphere.",
          },
        },
        {
          "@type": "Question",
          name: "Is Anthology good for special occasions?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. Many guests choose Anthology to celebrate anniversaries, birthdays, honeymoons, or other milestones.",
          },
        },
        {
          "@type": "Question",
          name: "Is the wine pairing worth it?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "If you enjoy wine and appreciate curated pairings, many guests feel it enhances the overall experience.",
          },
        },
        {
          "@type": "Question",
          name: "Can dietary requirements be accommodated?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Explora Journeys generally accommodates dietary preferences and allergies with advance notice.",
          },
        },
        {
          "@type": "Question",
          name: "Should I dine at Anthology more than once?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most guests book Anthology once during their voyage while enjoying the included restaurants on other evenings.",
          },
        },
        {
          "@type": "Question",
          name: "Who is the current guest chef at Anthology?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Anthology features a rotating lineup of celebrated guest chefs, including Michelin-starred culinary artists from around the world. The menu and chef change periodically, so check the Explora Journeys portal or consult your travel advisor for the current sailing's culinary partner.",
          },
        },
        {
          "@type": "Question",
          name: "Is a wine pairing included in the base tasting menu price?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No, the wine pairing is an optional add-on that costs approximately €75 per person. It features premium wines selected by the ship's head sommelier to complement each course of the tasting menu.",
          },
        },
        {
          "@type": "Question",
          name: "How long does the dining experience at Anthology take?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The multi-course tasting menu at Anthology is a leisurely culinary journey that typically takes 2 to 2.5 hours, allowing guests to fully savor each course and pairing.",
          },
        },
        {
          "@type": "Question",
          name: "Can children dine at Anthology?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "While children are technically permitted, the sophisticated atmosphere and multi-course tasting menu format make it best suited for adults and older teenagers who appreciate fine dining.",
          },
        },
        {
          "@type": "Question",
          name: "How far in advance should I book my table at Anthology?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Seating at Anthology is extremely limited with only a few tables available each night. It is highly recommended to book your reservation through the guest portal as soon as your booking is confirmed, or at least 30 to 60 days prior to departure.",
          },
        },
      ],
    },
  ],
};

/* ── FAQ Component ───────────────────────────────────────────────── */
function FAQ() {
  const [open, setOpen] = useState(null);

  const faqData = [
    {
      q: "Is Anthology included in the Explora Journeys fare?",
      a: "No. Anthology is a specialty restaurant that requires an additional reservation fee.",
    },
    {
      q: "How much does Anthology cost?",
      a: "The tasting menu is approximately €165 per person, with an optional wine pairing available for an additional charge.",
    },
    {
      q: "Do I need a reservation?",
      a: "Yes. Because seating is limited, reservations are highly recommended.",
    },
    {
      q: "Is there a dress code?",
      a: "Smart casual or elegant evening attire is recommended, in keeping with the restaurant's refined atmosphere.",
    },
    {
      q: "Is Anthology good for special occasions?",
      a: "Absolutely. Many guests choose Anthology to celebrate anniversaries, birthdays, honeymoons, or other milestones.",
    },
    {
      q: "Is the wine pairing worth it?",
      a: "If you enjoy wine and appreciate curated pairings, many guests feel it enhances the overall experience.",
    },
    {
      q: "Can dietary requirements be accommodated?",
      a: "Explora Journeys generally accommodates dietary preferences and allergies with advance notice.",
    },
    {
      q: "Should I dine at Anthology more than once?",
      a: "Most guests book Anthology once during their voyage while enjoying the included restaurants on other evenings.",
    },
    {
      q: "Who is the current guest chef at Anthology?",
      a: "Anthology features a rotating lineup of celebrated guest chefs, including Michelin-starred culinary artists from around the world. The menu and chef change periodically, so check the Explora Journeys portal or consult your travel advisor for the current sailing's culinary partner.",
    },
    {
      q: "Is a wine pairing included in the base tasting menu price?",
      a: "No, the wine pairing is an optional add-on that costs approximately €75 per person. It features premium wines selected by the ship's head sommelier to complement each course of the tasting menu.",
    },
    {
      q: "How long does the dining experience at Anthology take?",
      a: "The multi-course tasting menu at Anthology is a leisurely culinary journey that typically takes 2 to 2.5 hours, allowing guests to fully savor each course and pairing.",
    },
    {
      q: "Can children dine at Anthology?",
      a: "While children are technically permitted, the sophisticated atmosphere and multi-course tasting menu format make it best suited for adults and older teenagers who appreciate fine dining.",
    },
    {
      q: "How far in advance should I book my table at Anthology?",
      a: "Seating at Anthology is extremely limited with only a few tables available each night. It is highly recommended to book your reservation through the guest portal as soon as your booking is confirmed, or at least 30 to 60 days prior to departure.",
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

/* ── Main Component ──────────────────────────────────────────────── */
const IsAnthologyWorthIt = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [readMore, setReadMore] = useState(false);

  const images = [HeroImage1, HeroImage2, HeroImage3];

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
          Is Anthology Worth It? | Explora Journeys Specialty Dining Review
        </title>
        <meta
          name="title"
          content="Is Anthology Worth It? | Explora Journeys Restaurant Review"
        />
        <meta
          name="description"
          content="Thinking about dining at Anthology on Explora Journeys? Discover what's included, how much it costs, what to expect, and whether this specialty restaurant is worth the extra charge."
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
          <h1>Is Anthology Worth It?</h1>

          <p>
            One of the most common questions guests ask before sailing with
            Explora Journeys is whether Anthology, the ship's signature
            specialty restaurant, is worth paying extra for.
          </p>

          <p>
            The answer depends on what you're looking for. If you appreciate
            fine dining, enjoy tasting menus, or are celebrating a special
            occasion, Anthology can be one of the most memorable meals of
            your voyage.
          </p>

          {readMore && (
            <>
              <p>
                Unlike Explora's six included dining venues, Anthology offers
                an exclusive tasting menu experience with premium
                ingredients, elegant presentation, and highly personalized
                service. Because it comes with an additional charge, many
                travelers wonder whether the experience justifies the cost.
              </p>

              <p>
                However, if you're already satisfied with Explora's
                complimentary restaurants, you may find that the included
                dining options provide excellent value without the
                additional expense.
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

      {/* ── WHAT IS ANTHOLOGY ───────────────────────────────────────── */}
      <section className="adg-c-section adg-c-bg-soft" id="adg-common-features">
        <div className="adg-c-container">
          <div className="adg-c-section-header">
            <h2 className="adg-c-h2">What Is Anthology?</h2>
            <div className="adg-c-accent-line"></div>
          </div>

          <div className="adg-c-overview-layout">
            <div className="adg-c-overview-icons">
              {[
                "Signature fine-dining restaurant",
                "Multi-course tasting menu",
                "Seasonal, premium ingredients",
                "Refined culinary techniques",
                "Intimate, elegant atmosphere",
                "Sophisticated wine program",
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
                    Rather than serving an à la carte menu, Anthology focuses
                    on a carefully crafted multi-course tasting menu designed
                    to offer an elevated culinary experience beyond the
                    complimentary restaurants onboard.
                  </p>
                </div>
              </div>

              <div className="adg-c-overview-image-wrap">
                <img
                  src={FineDining4}
                  alt="Anthology specialty restaurant fine dining aboard Explora Journeys"
                  className="adg-c-overview-img"
                />
                <div className="adg-c-overview-img-overlay">
                  <span className="adg-c-overview-img-label">
                    A Culinary Event, Not Just Dinner
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      {/* ── HOW MUCH DOES ANTHOLOGY COST ────────────────────────────── */}
      <section className="dmg-info-section dmg-bg-white" id="dmg-cost">
        <div className="dmg-info-container">
          <div className="dmg-info-grid">
            <div className="dmg-info-media">
              <div className="dmg-media-wrapper">
                <img
                  src={LuxuryOceanfrontSuites}
                  alt="Elegant Anthology dining table setting aboard Explora Journeys"
                  className="dmg-media-img"
                />
                <div className="dmg-media-overlay"></div>

                <div className="dmg-media-badge">
                  <span>Approximately €165 Per Person</span>
                </div>
              </div>
            </div>

            <div className="dmg-info-content">
              <h2 className="dmg-info-title">How Much Does Anthology Cost?</h2>
              <div className="dmg-info-accent"></div>

              <p className="dmg-info-lead">
                Dining at Anthology requires an additional reservation fee.
                Pricing may vary depending on the itinerary or promotional
                offers, so it's always worth checking before your voyage.
              </p>

              <div className="dmg-info-features dmg-info-features-scrollable">
                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <ChefHat size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Multi-Course Tasting Menu
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Approximately €165 per person for the full chef-curated
                      experience.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Wine size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Optional Wine Pairing
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Available for an additional charge to complement each
                      course.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Clock size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Reservations Recommended
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Booking before sailing helps secure your preferred
                      evening and seating time.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ WHAT MAKES ANTHOLOGY DIFFERENT ══════════════════════════ */}
      <section className="luc-why-section" id="luc-why-viking">
        <div className="luc-why-container">
          <div className="luc-why-images">
            <div className="luc-why-img-main-wrap" style={{ color: "#fff" }}>
              <img
                src={FineDining}
                alt="Anthology multi-course tasting menu presentation"
                className="luc-why-img-main"
              />
              <div className="luc-why-img-overlay"></div>
            </div>
            <div className="luc-why-img-accent-wrap" style={{ color: "#fff" }}>
              <img
                src={ExploraDetination5}
                alt="Intimate fine-dining atmosphere aboard Explora Journeys"
                className="luc-why-img-accent"
              />
              <div className="luc-why-img-badge">
                <span className="luc-why-badge-num">7</span>
                <span className="luc-why-badge-text">Signature Touches</span>
              </div>
            </div>
          </div>

          <div className="luc-why-content">
            <h2 className="luc-why-title">What Makes Anthology Different?</h2>
            <div className="aac-accent-line aac-accent-white"></div>
            <p className="luc-why-intro">
              While Explora's included restaurants already offer excellent
              cuisine, Anthology provides a more immersive fine-dining
              experience. Rather than simply having dinner, Anthology is
              designed as a culinary event.
            </p>
            <div className="luc-why-features">
              {[
                {
                  num: "01",
                  title: "Chef-Curated Tasting Menu",
                  desc: "A multi-course journey highlighting premium seasonal ingredients and refined culinary techniques.",
                },
                {
                  num: "02",
                  title: "Elegant Plating",
                  desc: "Every course is thoughtfully presented, making the meal feel as artistic as it is delicious.",
                },
                {
                  num: "03",
                  title: "Personalized Table Service",
                  desc: "Attentive without feeling formal, allowing guests to enjoy a relaxed yet refined evening.",
                },
                {
                  num: "04",
                  title: "Curated Wine Pairings",
                  desc: "Carefully selected vintages designed to enhance each course of the tasting menu.",
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


      {/* ══ WHAT CAN YOU EXPECT ══════════════════════════════════════ */}
      <section className="dac-families-section">
        <div className="dac-families-container">
          <div className="dac-families-grid">
            <div className="dac-families-left">
              <div className="dac-families-heading-wrap">
                <h2 className="dac-families-title">What Can You Expect?</h2>
                <div className="dac-families-accent"></div>
              </div>

              <div className="dac-families-features">
                {[
                  {
                    title: "Exceptional Service",
                    desc: "Attentive without feeling formal, allowing guests to enjoy a relaxed yet refined evening.",
                  },
                  {
                    title: "Beautiful Presentation",
                    desc: "Every course is thoughtfully plated, making the meal feel as artistic as it is delicious.",
                  },
                  {
                    title: "Premium Ingredients",
                    desc: "High-quality seafood, meats, seasonal produce, and luxury ingredients prepared with modern techniques.",
                  },
                  {
                    title: "Wine Pairings",
                    desc: "For guests who enjoy wine, the optional pairing enhances each course with carefully selected vintages.",
                  },
                  {
                    title: "Relaxed Pace",
                    desc: "Dinner is designed to be enjoyed over several hours rather than rushed.",
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

            <div className="dac-families-right">
              <div className="dac-families-image-wrapper">
                <div className="dac-families-img-card dac-families-img-card--primary">
                  <img
                    src={FineDining2}
                    alt="Premium tasting menu presentation at Anthology"
                    className="dac-families-img"
                  />
                  <div className="dac-families-img-caption">
                    Premium Tasting Menu
                  </div>
                </div>

                <div className="dac-families-img-card dac-families-img-card--secondary">
                  <img
                    src={ExploraPool}
                    alt="Intimate, relaxed dining atmosphere aboard Explora Journeys"
                    className="dac-families-img"
                  />
                  <div className="dac-families-img-caption">
                    Intimate Atmosphere
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ANTHOLOGY VS INCLUDED RESTAURANTS ───────────────────────── */}
      <section
        className="Asc-section Asc-bg-white"
        id="Asc-fleet"
        style={{ backgroundColor: "var(--bg-white)" }}
      >
        <div className="Asc-container">
          <div className="Asc-section-header">
            <h2 className="Asc-h2">Anthology vs. Included Restaurants</h2>
            <div className="Asc-accent-line"></div>
          </div>

          <p className="Asc-body-text" style={{ marginBottom: "20px" }}>
            Anthology isn't necessarily "better" because the included
            restaurants are lacking. Instead, it offers a completely
            different type of experience.
          </p>

          <div className="Asc-table-wrapper">
            <table className="Asc-fleet-table">
              <thead>
                <tr>
                  <th>Included Restaurants</th>
                  <th>Anthology</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Included in fare</td>
                  <td>
                    <strong>Additional fee</strong>
                  </td>
                </tr>
                <tr>
                  <td>À la carte dining</td>
                  <td>
                    <strong>Multi-course tasting menu</strong>
                  </td>
                </tr>
                <tr>
                  <td>Casual luxury</td>
                  <td>
                    <strong>Fine dining experience</strong>
                  </td>
                </tr>
                <tr>
                  <td>Wide variety</td>
                  <td>
                    <strong>Curated culinary journey</strong>
                  </td>
                </tr>
                <tr>
                  <td>Great for every evening</td>
                  <td>
                    <strong>Best for one special night</strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="Asc-body-text" style={{ marginTop: "2rem" }}>
            Many guests choose Anthology once during their cruise while
            enjoying the included restaurants for the remainder of their
            voyage.
          </p>
        </div>
      </section>

      {/* ── IS ANTHOLOGY BETTER THAN THE INCLUDED RESTAURANTS? ─────── */}
      <section
        className="ugt-components-section"
        id="ugt-components"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="ugt-components-container">
          <div className="ugt-components-header">
            <h2 className="ugt-components-title">
              Is Anthology Better Than the Included Restaurants?
            </h2>
            <div className="adg-c-accent-line"></div>
          </div>

          <div className="ugt-components-list">
            <div className="ugt-component-row">
              <div className="ugt-component-image-wrapper">
                <div className="ugt-component-image-container">
                  <img
                    src={ExploraShip}
                    alt="Explora Journeys included dining venues onboard"
                    className="ugt-component-image"
                  />
                </div>
              </div>

              <div className="ugt-component-content">
                <h3 className="ugt-component-subtitle">
                  A Different Experience, Not a Better One
                </h3>

                <p className="ugt-component-text">
                  Explora Journeys already offers some of the best
                  complimentary dining at sea, making this a fair question.
                  Included restaurants provide outstanding meals, generous
                  variety, and excellent service without additional charges.
                </p>

                <div className="ugt-questions-box">
                  <span className="ugt-questions-title">
                    Most guests find the best balance by:
                  </span>

                  <ul className="ugt-questions-list">
                    {[
                      "Booking Anthology once for a special evening",
                      "Enjoying included restaurants the rest of the voyage",
                      "Treating it as a culinary event, not a daily option",
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
                  Anthology isn't meant to replace Explora's included
                  restaurants — it offers a unique culinary experience for
                  travelers who appreciate exceptional food and elegant
                  service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROS OF DINING AT ANTHOLOGY ─────────────────────────────── */}
      <section className="ugt-advantage-section" id="ugt-advantage">
        <div className="ugt-advantage-container">
          <div className="ugt-advantage-header">
            <h2 className="ugt-advantage-title">Pros of Dining at Anthology</h2>
            <div className="Asc-accent-line"></div>
            <p className="ugt-advantage-intro">
              Anthology offers a carefully curated culinary experience. These
              core advantages highlight what sets the restaurant apart for
              discerning diners.
            </p>
          </div>

          <div className="ugt-advantage-grid">
            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <ChefHat size={28} strokeWidth={1.5} />
              </div>
              <h4 className="ugt-card-title">Culinary Creativity</h4>
              <p className="ugt-card-desc">
                An outstanding, chef-curated tasting menu showcasing modern
                culinary techniques.
              </p>
            </div>

            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <Sparkles size={28} strokeWidth={1.5} />
              </div>
              <h4 className="ugt-card-title">Elegant Atmosphere</h4>
              <p className="ugt-card-desc">
                An intimate setting designed for a relaxed, sophisticated
                evening at sea.
              </p>
            </div>

            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <HeartHandshake size={28} strokeWidth={1.5} />
              </div>
              <h4 className="ugt-card-title">Exceptional Service</h4>
              <p className="ugt-card-desc">
                Personalized table service that feels attentive without
                being overly formal.
              </p>
            </div>

            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <Utensils size={28} strokeWidth={1.5} />
              </div>
              <h4 className="ugt-card-title">Premium Ingredients</h4>
              <p className="ugt-card-desc">
                High-quality seafood, meats, and seasonal produce prepared
                with care.
              </p>
            </div>

            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <Award size={28} strokeWidth={1.5} />
              </div>
              <h4 className="ugt-card-title">A Memorable Evening</h4>
              <p className="ugt-card-desc">
                An excellent choice for celebrations and one of the most
                memorable meals onboard.
              </p>
            </div>
          </div>
        </div>
      </section>

            {/* ── IS ANTHOLOGY WORTH THE EXTRA COST ───────────────────────── */}
      <section className="dmg-info-section dmg-bg-white" id="dmg-worth-it">
        <div className="dmg-info-container">
          <div className="dmg-info-grid">
            <div className="dmg-info-content">
              <h2 className="dmg-info-title">
                Is Anthology Worth the Extra Cost?
              </h2>
              <div className="dmg-info-accent"></div>

              <p className="dmg-info-lead">
                For many guests, yes — but only if you enjoy fine dining.
                Anthology isn't meant to replace Explora's included
                restaurants. Instead, it offers a unique culinary experience
                for travelers who appreciate exceptional food, elegant
                service, and thoughtfully crafted tasting menus.
              </p>

              <div className="dmg-info-features dmg-info-features-scrollable">
                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      For Celebrations
                    </h3>
                    <p className="dmg-info-feature-desc">
                      If you're celebrating a special occasion, the
                      additional cost can be well worth it.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      For Gourmet Diners
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Travelers who simply love gourmet dining will find the
                      tasting menu a highlight of the voyage.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      For Value-Focused Guests
                    </h3>
                    <p className="dmg-info-feature-desc">
                      If your priority is maximizing value, you'll still
                      enjoy excellent meals throughout your cruise at no
                      extra cost.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="dmg-info-media">
              <div className="dmg-media-wrapper">
                <img
                  src={FineDining3}
                  alt="Anthology fine dining experience aboard Explora Journeys"
                  className="dmg-media-img"
                />
                <div className="dmg-media-overlay"></div>

                <div className="dmg-media-badge">
                  <span>One Unforgettable Evening</span>
                </div>
              </div>
            </div>
          </div>

          <p
            className="dmg-info-lead"
            style={{
              marginTop: "50px",
              textAlign: "center",
              maxWidth: "900px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Because the complimentary restaurants are already among the best
            at sea, you won't feel like you're missing out if you skip
            Anthology. However, for travelers who love tasting menus and
            memorable culinary experiences, it offers something truly
            special.
          </p>
        </div>
      </section>

      {/* ── POTENTIAL DRAWBACKS / WHO MIGHT SKIP IT ─────────────────── */}
      <section
        className="Ejvs-pricing-section"
        id="Ejvs-considerations"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="Ejvs-container">
          <div className="Ejvs-section-header">
            <h2 className="Ejvs-section-title">Potential Drawbacks</h2>
            <div className="Asc-accent-line"></div>
            <p className="Ejvs-section-subtitle">
              Anthology may not be the right choice for every traveler.
              Because Explora already offers high-quality complimentary
              dining, some guests decide the additional cost isn't necessary.
            </p>
          </div>

          <div className="Ejvs-pricing-grid">
            <div className="Ejvs-pricing-card Ejvs-explora-card">
              <div className="Ejvs-card-header">
                <div className="Ejvs-card-icon-wrap">
                  <Minus size={24} className="Ejvs-card-icon" />
                </div>
                <h3 className="Ejvs-card-title">Consider Skipping It If You:</h3>
              </div>

              <p className="Ejvs-card-intro">
                Anthology may not be necessary for travelers who:
              </p>

              <ul className="Ejvs-feature-list">
                {[
                  "Prefer casual dining",
                  "Don't enjoy tasting menus",
                  "Are traveling on a tighter budget",
                  "Feel satisfied with the included restaurants",
                  "Prefer quicker meals",
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
                  Explora's included restaurants already provide excellent
                  value without any additional charge.
                </p>
              </div>
            </div>

            <div className="Ejvs-pricing-card Ejvs-seabourn-card">
              <div className="Ejvs-card-header">
                <div className="Ejvs-card-icon-wrap">
                  <Star size={24} className="Ejvs-card-icon" />
                </div>
                <h3 className="Ejvs-card-title">Who Might Skip It?</h3>
              </div>

              <p className="Ejvs-card-intro">
                You may not need Anthology if you:
              </p>

              <ul className="Ejvs-feature-list">
                {[
                  "Prefer simple meals",
                  "Want to maximize value from your cruise fare",
                  "Are happy with Explora's included restaurants",
                  "Aren't interested in tasting menus",
                  "Have young children who may not enjoy a lengthy dinner",
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
                  Travelers focused on value will still enjoy excellent
                  meals throughout the cruise at no extra cost.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHO SHOULD BOOK ANTHOLOGY ───────────────────────────────── */}
      <section className="Asc-section Asc-bg-white" id="Asc-who">
        <div className="Asc-container">
          <div className="Asc-section-header">
            <h2 className="Asc-h2">Who Should Book Anthology?</h2>
            <div className="Asc-accent-line"></div>
          </div>

          <div
            className="Asc-who-grid"
            style={{
              gridTemplateColumns: "1fr",
              maxWidth: "800px",
              margin: "0 auto",
            }}
          >
            <div className="Asc-who-card Asc-who-yes">
              <h3 className="Asc-who-title">
                Anthology Is an Excellent Choice For:
              </h3>

              <ul className="Asc-who-list">
                {[
                  "Food enthusiasts",
                  "Fine-dining lovers",
                  "Wine enthusiasts",
                  "Couples celebrating anniversaries",
                  "Honeymoon travelers",
                  "Guests celebrating birthdays or milestones",
                  "Travelers looking for a special evening onboard",
                ].map((item, i) => (
                  <li key={i}>
                    <Check size={16} className="Asc-icon-green" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p
            className="Asc-body-text"
            style={{
              marginTop: "24px",
              textAlign: "center",
              maxWidth: "760px",
              marginInline: "auto",
            }}
          >
            For many guests, booking one dinner at Anthology strikes the
            perfect balance: enjoying Explora's outstanding included dining
            throughout the cruise while treating yourself to one
            unforgettable evening of fine dining.
          </p>
        </div>
      </section>



      {/* ── ANGELA HUGHES AUTHORITY BOX ─────────────────────────────── */}
      <section className="Adg-expert-section" id="Asc-expert-insight">
        <div className="Asc-container">
          <div className="Adg-expert-heading">
            <span className="Adg-expert-eyebrow">
              Expert Insight From Angela Hughes
            </span>
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
                  Angela Hughes Luxury Authority
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
                      label: "Featured in major travel publications worldwide",
                    },
                    {
                      icon: <Ship size={16} />,
                      label:
                        "Specialist in luxury cruises, expeditions, safaris, and premium travel experiences",
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

                <p
                  className="Adg-expert-role"
                  style={{ marginTop: "24px", lineHeight: "1.8" }}
                >
                  Angela Hughes and the team at Trips &amp; Ships Luxury
                  Travel help travelers decide exactly when an Anthology
                  reservation is worth it — and when Explora's included
                  restaurants are the better fit for the evening.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────── */}
      <section className="Asc-section Asc-bg-soft" id="Asc-faq">
        <div className="Asc-container">
          <div className="Asc-section-header">
            <h2 className="Asc-h2">Frequently Asked Questions</h2>
            <div className="Asc-accent-line"></div>
            <p className="Asc-faq-intro">
              Everything you need to know about dining at Anthology.
            </p>
          </div>
          <FAQ />
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section className="Asc-help-section">
        <div className="Asc-help-bg-wrap">
          <img
            src={Exploracta}
            alt="Explora Journeys luxury cruise dining"
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
                  Ready to Plan Your <br /> Anthology Evening?
                </h2>
                <div className="Asc-help-accent"></div>
              </div>

              <div className="Asc-help-grid">
                <div className="Asc-help-info">
                  <p className="Asc-help-intro">
                    Connect with Angela Hughes and the expert team at Trips
                    &amp; Ships Luxury Travel for personalized guidance on
                    whether Anthology is the right fit for your voyage.
                  </p>

                  <p className="Asc-help-intro">
                    From securing a reservation at the right time to
                    pairing it with the perfect occasion, expert support
                    helps you make the most of every dining experience
                    onboard.
                  </p>

                  <p className="Asc-help-intro">
                    Whether you're celebrating a milestone or simply love
                    exceptional food, personalized planning ensures your
                    Explora Journeys voyage includes the right balance of
                    included and specialty dining.
                  </p>

                  <div className="Asc-help-btn-container">
                    <Link to="/contact" className="Asc-help-cta-btn" style={{ textDecoration: "none" }}>
                      Start Planning Your Explora Journey
                      <ArrowRight size={18} />
                    </Link>
                  </div>
                </div>

                <div className="Asc-help-list-box">
                  <h3 className="Asc-help-list-title">
                    Expert guidance includes:
                  </h3>
                  <ul className="Asc-help-bullets">
                    {[
                      "Specialty dining reservation guidance",
                      "Exclusive luxury travel benefits",
                      "Suite and itinerary recommendations",
                      "Celebration and milestone voyage planning",
                      "Luxury cruise pricing expertise",
                      "Tailored travel experiences worldwide",
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
                    Trips &amp; Ships Luxury Travel specializes in helping
                    discerning travelers plan highly personalized Explora
                    Journeys experiences worldwide.
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

export default IsAnthologyWorthIt;