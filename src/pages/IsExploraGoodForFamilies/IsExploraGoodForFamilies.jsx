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
  Compass,
  Sparkles,
  UserCheck,
  Globe,
  Music,
} from "lucide-react";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela.jpeg";
import CTAImage from "../../assets/IsExploraGoodForFamilies/explora-final-destination.jpg";

import HeroImage1 from "../../assets/IsExploraGoodForFamilies/EXPLORA-III-PANAMA-CANAL.jpg";
import HeroImage2 from "../../assets/IsExploraGoodForFamilies/ExploraCruise3.webp";
import HeroImage3 from "../../assets/IsExploraGoodForFamilies/Luxury-Explora-Journeys.webp";
import ExploraSuite from "../../assets/IsExploraGoodForFamilies/explora-I-infinity-pool-ocean-wake-view.jpg";
import ExploraSuites from "../../assets/IsExploraGoodForFamilies/explora-I-oceanfront-pool-lounge-deck.JPG";
import Exploraexp1 from "../../assets/IsExploraGoodForFamilies/explora-outside-suites.jpg";
import Exploraexp2 from "../../assets/IsExploraGoodForFamilies/explora-journeys-oceanfront-infinity-pool-deck.jpg";
import Exploraexp3 from "../../assets/IsExploraGoodForFamilies/Regent-Seven-Seas-Cruises.webp";
import ExploraDesti1 from "../../assets/IsExploraGoodForFamilies/amalfi-coast-italy-mediterranean-hero-summer-2025.jpg";
import ExploraDesti2 from "../../assets/IsExploraGoodForFamilies/explora-ii-amalfi-coast-mediterranean-cruise.jpg";
import ExploraDesti3 from "../../assets/IsExploraGoodForFamilies/explora-III-oceanfront-infinity-pool-luxury-cruise-deck.jpg";
import ExploraDesti4 from "../../assets/IsExploraGoodForFamilies/explora-III-helios-pool-luxury-sundeck-retreat.jpg";
import ExploraDesti5 from "../../assets/IsExploraGoodForFamilies/explora-I-luxury-pool-deck-daybeds.jpg";
import ExploraDesti6 from "../../assets/IsExploraGoodForFamilies/explora-luxury-outdoor.jpg";
import ExploraDining from "../../assets/IsExploraGoodForFamilies/Fine-Dining.webp";

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
      "@type": "TravelAgency",
      name: "Trips & Ships Luxury Travel",
      url: "https://www.tripsandships.com",
      description:
        "Luxury travel agency specializing in luxury cruises, safaris, expeditions, river cruises, and premium travel experiences.",
    },
    {
      "@type": "Person",
      name: "Angela Hughes",
      jobTitle: "CEO of Trips & Ships Luxury Travel",
      description:
        "Luxury travel expert with over 40 years in the travel industry and travel experience across 121+ countries.",
      worksFor: {
        "@type": "Organization",
        name: "Trips & Ships Luxury Travel",
      },
    },
    {
      "@type": "WebPage",
      name: "Is Explora Good for Families?",
      description:
        "Expert luxury cruise guide for families considering Explora Journeys.",
      url: "https://www.tripsandships.com/is-explora-good-for-families",
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
          name: "Is Explora Good for Families?",
          item: "https://www.tripsandships.com/is-explora-good-for-families",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Is Explora good for families?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Explora is an excellent option for families seeking luxury accommodations, quality time together, and destination-focused travel.",
          },
        },
        {
          "@type": "Question",
          name: "Does Explora have activities for children?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Explora offers age-appropriate activities for younger guests, though the programming is more intimate than that of large family-focused cruise lines.",
          },
        },
        {
          "@type": "Question",
          name: "Is Explora suitable for teenagers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Many teenagers enjoy Explora's travel experiences, dining, and destinations, although those seeking high-energy attractions may prefer larger ships.",
          },
        },
        {
          "@type": "Question",
          name: "Are suites large enough for families?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Every accommodation is an ocean-front suite designed to provide generous living space and comfort.",
          },
        },
        {
          "@type": "Question",
          name: "Does Explora have water slides or amusement attractions?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Explora focuses on luxury, relaxation, wellness, and destination immersion rather than theme park-style attractions.",
          },
        },
        {
          "@type": "Question",
          name: "Is Explora good for multi-generational vacations?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. The spacious suites, exceptional service, and relaxed atmosphere make Explora a popular choice for grandparents, parents, and children traveling together.",
          },
        },
        {
          "@type": "Question",
          name: "Are restaurants family friendly?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Families can enjoy flexible dining, attentive service, and a variety of international cuisines.",
          },
        },
        {
          "@type": "Question",
          name: "What makes Explora different from mainstream family cruise lines?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Explora emphasizes personalized service, elegant accommodations, wellness, and immersive destinations instead of large-scale entertainment.",
          },
        },
        {
          "@type": "Question",
          name: "Is Explora worth it for families?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For families who value comfort, meaningful experiences, and luxury travel, many find Explora offers outstanding value.",
          },
        },
        {
          "@type": "Question",
          name: "Who should avoid Explora?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Families primarily looking for water parks, thrill rides, and nonstop children's entertainment may be happier with a more traditional family cruise line.",
          },
        },
        {
          "@type": "Question",
          name: "How does booking Explora through a luxury travel advisor like Angela Hughes benefit me?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Booking through Angela Hughes and Trips & Ships Luxury Travel grants you access to exclusive perks such as additional shipboard credits, potential suite upgrades, private booking support, and custom pre- and post-voyage travel arrangements.",
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
      q: "Is Explora good for families?",
      a: "Yes. Explora is an excellent option for families seeking luxury accommodations, quality time together, and destination-focused travel.",
    },
    {
      q: "Does Explora have activities for children?",
      a: "Yes. Explora offers age-appropriate activities for younger guests, though the programming is more intimate than that of large family-focused cruise lines.",
    },
    {
      q: "Is Explora suitable for teenagers?",
      a: "Many teenagers enjoy Explora's travel experiences, dining, and destinations, although those seeking high-energy attractions may prefer larger ships.",
    },
    {
      q: "Are suites large enough for families?",
      a: "Yes. Every accommodation is an ocean-front suite designed to provide generous living space and comfort for the entire family.",
    },
    {
      q: "Does Explora have water slides or amusement attractions?",
      a: "No. Explora focuses on luxury, relaxation, wellness, and destination immersion rather than theme park-style attractions.",
    },
    {
      q: "Is Explora good for multi-generational vacations?",
      a: "Absolutely. The spacious suites, exceptional service, and relaxed atmosphere make Explora a popular choice for grandparents, parents, and children traveling together.",
    },
    {
      q: "Are restaurants family friendly?",
      a: "Yes. Families can enjoy flexible dining, attentive service, and a variety of international cuisines.",
    },
    {
      q: "What makes Explora different from mainstream family cruise lines?",
      a: "Explora emphasizes personalized service, elegant accommodations, wellness, and immersive destinations instead of large-scale entertainment.",
    },
    {
      q: "Is Explora worth it for families?",
      a: "For families who value comfort, meaningful experiences, and luxury travel, many find Explora offers outstanding value.",
    },
    {
      q: "Who should avoid Explora?",
      a: "Families primarily looking for water parks, thrill rides, and nonstop children's entertainment may be happier with a more traditional family cruise line.",
    },
    {
      q: "Is Explora good for younger children?",
      a: "Families with younger children can certainly enjoy Explora, especially if they value spacious accommodations, flexible schedules, quiet environments, and destination exploration.",
    },
    {
      q: "How does booking Explora through a luxury travel advisor like Angela Hughes benefit me?",
      a: "Booking through Angela Hughes and Trips & Ships Luxury Travel grants you access to exclusive perks such as additional shipboard credits, potential suite upgrades, private booking support, and custom pre- and post-voyage travel arrangements.",
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

const IsExploraGoodForFamilies = () => {
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
          Is Explora Good for Families? | Luxury Family Cruise Guide
        </title>
        <meta
          name="title"
          content="Is Explora Good for Families? | Luxury Family Cruise Guide"
        />
        <meta
          name="description"
          content="Wondering if Explora Journeys is a good choice for families? Discover what families can expect onboard, including spacious suites, dining, activities, kids' programs, and whether Explora is the right luxury cruise for your family."
        />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      <Nav />

      {/* HERO */}
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
          <h1>Is Explora Good for Families?</h1>

          <p>The Short Answer: Yes — For the Right Kind of Family Vacation</p>

          <p>
            Explora Journeys offers something very different from a traditional
            family cruise. Rather than creating a floating theme park, Explora
            has designed a luxury ocean experience centered on space,
            relaxation, personalized service, and meaningful travel.
          </p>

          {/* READ MORE CONTENT */}
          {readMore && (
            <>
              <p>
                Families seeking quality time together, spacious accommodations,
                exceptional dining, and destination-focused experiences will
                likely find Explora an excellent choice.
              </p>

              <p>
                However, families looking for constant entertainment and
                large-scale children's attractions may be happier with a more
                traditional family cruise line.
              </p>

              <p>
                According to Angela Hughes — CEO of Trips &amp; Ships Luxury
                Travel, founder of Luxury Travel University, and a luxury cruise
                expert with over 40 years in the travel industry — the key is
                understanding what kind of family vacation you are looking for
                before booking.
              </p>
            </>
          )}

          {/* READ MORE BUTTON */}
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

      {/* ── WHAT IS EXPLORA ───────────────────────────────── */}
      <section className="adg-c-section adg-c-bg-soft" id="adg-common-features">
        <div className="adg-c-container">
          <div className="adg-c-section-header">
            <h2 className="adg-c-h2">What Makes Explora Different?</h2>
            <div className="adg-c-accent-line"></div>
          </div>

          <div className="adg-c-overview-layout">
            {/* LEFT — Standard inclusions */}
            <div className="adg-c-overview-icons">
              {[
                "Spacious ocean-front suites",
                "Personalized service",
                "Fine dining",
                "Wellness focus",
                "Relaxed luxury",
                "Destination immersion",
                "Elegant public spaces",
              ].map((label, i) => (
                <div key={i} className="adg-c-overview-item">
                  <span className="adg-c-overview-icon">
                    <Check size={16} strokeWidth={2.5} />
                  </span>
                  <span className="adg-c-overview-label">{label}</span>
                </div>
              ))}
            </div>

            {/* RIGHT — Callout + Image */}
            <div className="adg-c-overview-right">
              <div className="adg-c-overview-callout">
                <div className="adg-c-overview-callout-inner">
                  <Star size={28} className="adg-c-callout-star" />
                  <p className="adg-c-callout-text">
                    Explora Journeys was designed to feel more like a private
                    luxury resort at sea than a traditional cruise ship. The
                    atmosphere is peaceful, sophisticated, and welcoming for
                    guests of all ages — including families.
                  </p>
                </div>
              </div>

              <div className="adg-c-overview-image-wrap">
                <img
                  src={ExploraSuite}
                  alt="Explora Journeys luxury ocean-front suite experience"
                  className="adg-c-overview-img"
                />
                <div className="adg-c-overview-img-overlay">
                  <span className="adg-c-overview-img-label">
                    Luxury Resort at Sea
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHO IS EXPLORA BEST FOR? */}
      <section className="dmg-info-section dmg-bg-white" id="dmg-who-explora">
        <div className="dmg-info-container">
          <div className="dmg-info-grid">
            {/* Left Side Image */}
            <div className="dmg-info-media">
              <div className="dmg-media-wrapper">
                <img
                  src={ExploraSuites}
                  alt="Family enjoying Explora Journeys luxury cruise experience"
                  className="dmg-media-img"
                />
                <div className="dmg-media-overlay"></div>

                <div className="dmg-media-badge">
                  <span>Family Journeys</span>
                </div>
              </div>
            </div>

            {/* Right Side Content */}
            <div className="dmg-info-content">
              <h2 className="dmg-info-title">Kids' Activities</h2>
              <div className="dmg-info-accent"></div>

              <p className="dmg-info-lead">
                Explora offers dedicated experiences for younger travelers,
                though the programming is intentionally more refined than the
                extensive youth complexes found on larger family-focused cruise
                ships.
              </p>

              <div className="dmg-info-features dmg-info-features-scrollable">
                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Age-Appropriate Activities
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Creative games, crafts, and interactive experiences
                      designed specifically to keep younger guests engaged.
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
                      Destination-inspired learning opportunities and cultural
                      activities that bring the journey's ports of call to life.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">Family Events</h3>
                    <p className="dmg-info-feature-desc">
                      Special activities and shared moments that encourage
                      parents and children to participate and bond together.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Meaningful Engagement
                    </h3>
                    <p className="dmg-info-feature-desc">
                      The intentional programming focuses on deeper,
                      high-quality interactions rather than constant digital or
                      arcade stimulation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ WHY FAMILIES CHOOSE EXPLORA ══════════════════════════════════════ */}
      <section className="luc-why-section" id="luc-why-explora">
        <div className="luc-why-container">
          {/* LEFT — stacked images */}
          <div className="luc-why-images">
            <div className="luc-why-img-main-wrap" style={{ color: "#fff" }}>
              <img
                src={Exploraexp1}
                alt="Explora Journeys luxury family cruise experience"
                className="luc-why-img-main"
              />
              <div className="luc-why-img-overlay"></div>
            </div>
            <div className="luc-why-img-accent-wrap" style={{ color: "#fff" }}>
              <img
                src={Exploraexp2}
                alt="Explora Journeys spacious family suites"
                className="luc-why-img-accent"
              />
              <div className="luc-why-img-badge">
                <span className="luc-why-badge-num">4</span>
                <span className="luc-why-badge-text">Family Pillars</span>
              </div>
            </div>
          </div>

          {/* RIGHT — content */}
          <div className="luc-why-content">
            <h2 className="luc-why-title">
              Spacious Suites Make Family Travel Easier
            </h2>
            <div className="aac-accent-line aac-accent-white"></div>
            <p className="luc-why-intro">
              One of Explora's biggest advantages for families is its
              accommodations. Unlike many cruise ships where cabins can feel
              compact, every accommodation aboard Explora is an ocean-front
              suite. The generous suite layouts are especially valuable on
              longer voyages, ensuring families benefit from:
            </p>
            <div className="luc-why-features">
              {[
                {
                  num: "01",
                  title: "Larger Living Areas",
                  desc: "Extra space allows everyone to relax comfortably without feeling cramped.",
                },
                {
                  num: "02",
                  title: "Private Terraces",
                  desc: "Parents can enjoy quiet moments and scenic ocean views while children rest indoors.",
                },
                {
                  num: "03",
                  title: "Walk-In Wardrobes",
                  desc: "Additional storage helps keep family clothing, luggage, and vacations organized.",
                },
                {
                  num: "04",
                  title: "Spacious Bathrooms",
                  desc: "Large bathrooms make daily routines and getting ready much easier for the whole family.",
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

      {/* BEST CABINS FOR NORWAY FJORDS CRUISES */}
      <section className="afc-section afc-bg-white" id="afc-norway-cabins">
        <div className="afc-container">
          <div className="afc-section-header">
            <h2 className="afc-h2">Is Explora Good for Teenagers?</h2>
            <div className="afc-accent-line"></div>
          </div>

          {/* Feature Split Layout */}
          <div className="afc-split-layout">
            {/* Left Column: Context Card & Top Recommendations */}
            <div className="afc-content-side">
              <div className="afc-insight-card">
                <p className="afc-lead-text">
                  <strong>
                    Teenagers who enjoy travel, food, culture, photography,
                    adventure, and relaxation often deeply appreciate the
                    Explora experience.
                  </strong>
                </p>
                <div className="afc-why-box">
                  <span className="afc-why-title">Why?</span>
                  <p className="afc-why-text">
                    Because the ship offers a sophisticated, grown-up atmosphere
                    that treats them like young adults while exploring
                    incredible world destinations.
                  </p>
                </div>
              </div>

              <div className="afc-recommendations-wrapper">
                <h3 className="afc-sub-title">What teens love on Explora:</h3>
                <div className="afc-rec-grid">
                  {[
                    "Cultural immersion & local food",
                    "Aesthetic photography spots",
                    "Outdoor adventures ashore",
                    "Unwinding in upscale spaces",
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

            {/* Right Column: Visual Image & Strategic Selection Metrics */}
            <div className="afc-media-side">
              <div className="afc-image-wrapper">
                <img
                  src={Exploraexp3}
                  alt="Teenagers and families enjoying luxury cruise amenities"
                  className="afc-showcase-image"
                />
              </div>

              <div className="afc-strategy-box">
                <p className="afc-strategy-lead">
                  However, teens looking for mega-ship features may prefer
                  larger mainstream lines, as Explora intentionally does{" "}
                  <strong>not</strong> include:
                </p>
                <div className="afc-strategy-tags">
                  {[
                    "Surf simulators",
                    "Water slides",
                    "Go-kart tracks",
                    "Large arcades",
                    "Theme park attractions",
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

      {/* ══ DESTINATIONS BECOME THE MAIN ATTRACTION ═══════════════════════════════ */}
      <section className="dac-families-section">
        <div className="dac-families-container">
          <div className="dac-families-grid">
            {/* Left Content Column */}
            <div className="dac-families-left">
              <div className="dac-families-heading-wrap">
                <h2 className="dac-families-title">
                  Destinations Become the Main Attraction
                </h2>
                <div className="dac-families-accent"></div>
              </div>
              <div className="dac-families-features">
                {[
                  {
                    title: "Mediterranean Villages",
                    desc: "Discover charming coastal towns, scenic harbors, local cafés, and centuries of history throughout the Mediterranean.",
                  },
                  {
                    title: "Caribbean Islands",
                    desc: "Relax on pristine beaches, swim in crystal-clear waters, and enjoy vibrant island culture and tropical landscapes.",
                  },
                  {
                    title: "Northern Europe",
                    desc: "Explore dramatic coastlines, picturesque cities, historic ports, and breathtaking natural scenery.",
                  },
                  {
                    title: "Coastal Cities",
                    desc: "Visit iconic waterfront destinations known for their architecture, cuisine, shopping, and cultural attractions.",
                  },
                  {
                    title: "Historic Landmarks",
                    desc: "Experience famous monuments, ancient ruins, castles, museums, and UNESCO World Heritage Sites.",
                  },
                  {
                    title: "Local Markets",
                    desc: "Browse artisan shops, regional foods, handcrafted souvenirs, and authentic local products.",
                  },
                  {
                    title: "Beaches",
                    desc: "Spend quality family time enjoying beautiful shorelines, swimming, and relaxing in spectacular coastal settings.",
                  },
                  {
                    title: "Cultural Experiences",
                    desc: "Connect with local traditions through performances, cuisine, festivals, guided tours, and immersive excursions.",
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
                    src={ExploraDesti1}
                    alt="Family exploring a Mediterranean village"
                    className="dac-families-img"
                  />
                  <div className="dac-families-img-caption">
                    Mediterranean Villages
                  </div>
                </div>

                <div className="dac-families-img-card dac-families-img-card--secondary">
                  <img
                    src={ExploraDesti2}
                    alt="Family enjoying a Caribbean beach excursion"
                    className="dac-families-img"
                  />
                  <div className="dac-families-img-caption">
                    Amalfi Coast Mediterranean Cruise
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAMILY DINING & FAMILY TIME */}
      <section
        className="Ejvs-pricing-section"
        id="Ejvs-family-experience"
        style={{ backgroundColor: "var(--bg-white)" }}
      >
        <div className="Ejvs-container">
          {/* Section Header */}
          <div className="Ejvs-section-header">
            <h2 className="Ejvs-section-title">
              Family Dining Without the Crowds
            </h2>

            <div className="Asc-accent-line"></div>

            <p className="Ejvs-section-subtitle">
              Dining is one of the highlights of the Explora experience. Instead
              of rushed buffets and long queues, families enjoy refined
              restaurants, flexible dining, and attentive service in a relaxed
              atmosphere designed for meaningful time together.
            </p>
          </div>

          {/* Main Grid */}
          <div className="Ejvs-pricing-grid">
            {/* Left Card */}
            <div className="Ejvs-pricing-card Ejvs-explora-card">
              <div className="Ejvs-card-header">
                <div className="Ejvs-card-icon-wrap">
                  <Sparkles size={24} className="Ejvs-card-icon" />
                </div>

                <h3 className="Ejvs-card-title">
                  Family Dining Without the Crowds
                </h3>
              </div>

              <p className="Ejvs-card-intro">
                Families can enjoy a relaxed dining experience with exceptional
                food and personalized hospitality throughout the voyage.
              </p>

              <ul className="Ejvs-feature-list">
                {[
                  "Multiple restaurants",
                  "Flexible dining times",
                  "International cuisine",
                  "High-quality ingredients",
                  "Relaxed atmosphere",
                  "Attentive service",
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
                  Rather than rushing through meals, families can enjoy
                  leisurely dining together. Crew members also take time to
                  learn guest preferences, creating a personalized experience
                  throughout the voyage.
                </p>
              </div>
            </div>

            {/* Right Card */}
            <div className="Ejvs-pricing-card Ejvs-seabourn-card">
              <div className="Ejvs-card-header">
                <div className="Ejvs-card-icon-wrap">
                  <Award size={24} className="Ejvs-card-icon" />
                </div>

                <h3 className="Ejvs-card-title">
                  Family Time Takes Center Stage
                </h3>
              </div>

              <p className="Ejvs-card-intro">
                Unlike ships where children spend most of the day in separate
                clubs, Explora encourages families to enjoy memorable
                experiences together.
              </p>

              <ul className="Ejvs-feature-list">
                {[
                  "Swimming",
                  "Shore excursions",
                  "Watching sunsets",
                  "Exploring destinations",
                  "Relaxing by the pool",
                  "Family dinners",
                  "Scenic cruising",
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
                  Many families find this slower pace refreshing, allowing
                  everyone to reconnect while enjoying unforgettable experiences
                  both onboard and ashore.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY FAMILIES CHOOSE EXPLORA */}
      <section className="adg-section" id="adg-family-experience">
        <div className="adg-container">
          <div className="adg-section-header" style={{ marginBottom: "60px" }}>
            <h2 className="adg-h2">Family Experiences That Matter</h2>

            <div className="adg-accent-line"></div>
          </div>

          <div className="adg-split-layout">
            {/* Left Content Column */}
            <div className="adg-content-card-side">
              <img
                src={ExploraDesti3}
                alt="Family activities and experiences on Explora Journeys"
                className="adg-side-image"
                style={{ height: "40vh", border: "1px solid" }}
              />

              <div className="adg-info-card">
                <div className="adg-card-meta">
                  <Compass size={28} />
                  <span className="adg-meta-label">
                    Family-First Travel Philosophy
                  </span>
                </div>

                <p className="adg-card-lead">
                  Many families choose Explora because they want a vacation that
                  feels less like constant stimulation and more like meaningful
                  reconnection — creating memories that last long after the
                  voyage ends.
                </p>

                <div className="adg-card-divider"></div>

                <ul className="Asc-who-list" style={{ marginTop: "20px" }}>
                  {[
                    "Family time over scheduled entertainment",
                    "Destinations that educate and inspire children",
                    "A slower, more intentional pace of travel",
                  ].map((item, i) => (
                    <li key={i}>
                      <Minus size={16} className="Asc-icon-muted" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Inclusions Grid Column */}
            <div className="adg-list-side">
              {[
                {
                  title: "Swimming & pools",
                  icon: <Sparkles size={20} />,
                },
                {
                  title: "Shore excursions",
                  icon: <Compass size={20} />,
                },
                {
                  title: "Family dinners",
                  icon: <Utensils size={20} />,
                },
                {
                  title: "Scenic cruising",
                  icon: <Ship size={20} />,
                },
                {
                  title: "Cultural exploration",
                  icon: <Globe size={20} />,
                },
                {
                  title: "Kids' programs",
                  icon: <Users size={20} />,
                },
                {
                  title: "Personalized attention",
                  icon: <UserCheck size={20} />,
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

      {/* MULTI-GENERATIONAL FAMILIES */}
      <section
        className="dmg-info-section dmg-bg-white"
        id="dmg-multi-generational"
      >
        <div className="dmg-info-container">
          <div className="dmg-info-grid">
            {/* Content */}
            <div className="dmg-info-content">
              <h2 className="dmg-info-title">Multi-Generational Families</h2>

              <div className="dmg-info-accent"></div>

              <p className="dmg-info-lead">
                Explora is particularly well suited for multi-generational
                vacations, bringing grandparents, parents, and children together
                in a relaxed, luxurious environment where everyone can enjoy the
                journey at their own pace.
              </p>

              <div className="dmg-info-features dmg-info-features-scrollable">
                {[
                  {
                    title: "Comfortable Suites",
                    desc: "Spacious ocean-front suites provide plenty of room for families to relax together while still enjoying privacy and comfort.",
                  },
                  {
                    title: "Fine Dining",
                    desc: "Multiple restaurants and exceptional cuisine create memorable meals that every generation can enjoy together.",
                  },
                  {
                    title: "Personalized Service",
                    desc: "Attentive crew members learn guest preferences, making every family member feel welcomed and well cared for throughout the voyage.",
                  },
                  {
                    title: "Relaxed Pace",
                    desc: "A slower, more refined atmosphere allows families to spend meaningful time together without feeling rushed.",
                  },
                  {
                    title: "Accessible Public Spaces",
                    desc: "Elegant lounges, open decks, and comfortable gathering areas make it easy for every generation to connect and unwind.",
                  },
                  {
                    title: "Destination Experiences",
                    desc: "Shared shore excursions and cultural discoveries create lasting memories that families can enjoy together.",
                  },
                ].map((item, index) => (
                  <div key={index} className="dmg-info-feature-item">
                    <div className="dmg-info-icon-box">
                      <Check size={16} />
                    </div>

                    <div className="dmg-info-feature-texts">
                      <h3 className="dmg-info-feature-title">{item.title}</h3>
                      <p className="dmg-info-feature-desc">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="dmg-info-media">
              <div className="dmg-media-wrapper">
                <img
                  src={ExploraDining}
                  alt="Multi-generational family enjoying an Explora Journeys cruise"
                  className="dmg-media-img"
                />

                <div className="dmg-media-overlay"></div>

                <div className="dmg-media-badge">
                  <span>All Generations Welcome</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WELLNESS & PERSONALIZED SERVICE */}
      <section className="azs-entertainment-section" id="azs-family-wellness">
        <div className="azs-container">
          <div className="azs-section-header">
            <h2 className="azs-section-title">Wellness for the Whole Family</h2>
            <div className="azs-section-accent"></div>

            <p className="azs-section-subtitle">
              Wellness is integrated throughout the Explora experience, creating
              a relaxing environment where every family member can unwind and
              recharge.
            </p>
          </div>

          <div className="azs-entertainment-grid">
            {/* Wellness Card */}
            <div className="azs-entertainment-card azs-azamara-ent">
              <div className="azs-ent-header">
                <div className="azs-ent-icon-circle">
                  <Sparkles size={24} className="azs-ent-icon" />
                </div>

                <h3 className="azs-ent-title">Wellness for the Whole Family</h3>
              </div>

              <p className="azs-ent-intro">
                Families can enjoy a variety of wellness-focused spaces and
                amenities throughout the ship.
              </p>

              <div className="azs-ent-body">
                <ul className="azs-ent-list">
                  {[
                    "Beautiful outdoor spaces",
                    "Pools",
                    "Fitness facilities",
                    "Walking decks",
                    "Spa experiences for adults",
                    "Healthy dining choices",
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
                    The emphasis is on balance, relaxation, and well-being
                    rather than constant activity.
                  </p>
                </div>
              </div>
            </div>

            {/* Service Card */}
            <div className="azs-entertainment-card azs-seabourn-ent">
              <div className="azs-ent-header">
                <div className="azs-ent-icon-circle">
                  <Music size={24} className="azs-ent-icon" />
                </div>

                <h3 className="azs-ent-title">
                  Service That Makes Traveling Easier
                </h3>
              </div>

              <p className="azs-ent-intro">
                One of the greatest advantages of luxury cruising is the
                personalized service that makes every family feel genuinely
                welcomed.
              </p>

              <div className="azs-ent-body">
                <ul className="azs-ent-list">
                  {[
                    "Guest preferences",
                    "Favorite beverages",
                    "Dining requests",
                    "Family names",
                    "Special celebrations",
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
                    This thoughtful attention to detail helps families enjoy a
                    more comfortable, seamless, and memorable voyage from
                    beginning to end.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHO MIGHT WANT ANOTHER OPTION? ───── */}
      <section
        className="ugt-components-section"
        id="ugt-components"
        style={{ backgroundColor: "var(--bg-white)" }}
      >
        <div className="ugt-components-container">
          <div className="ugt-components-header">
            <h2 className="ugt-components-title">
              Is Explora Good for Younger Children?
            </h2>

            <div className="adg-c-accent-line"></div>
          </div>

          <div className="ugt-components-list">
            <div className="ugt-component-row">
              <div className="ugt-component-image-wrapper">
                <div className="ugt-component-image-container">
                  <img
                    src={ExploraDesti4}
                    alt="Families with younger children enjoying a relaxed vacation atmosphere"
                    className="ugt-component-image"
                  />
                </div>
              </div>

              <div className="ugt-component-content">
                <p className="ugt-component-text">
                  Families with younger children can certainly enjoy Explora,
                  especially if they value a more sophisticated pacing. It
                  serves as an upscale backdrop where little ones are welcomed
                  warmly into refined environments.
                </p>

                <div className="ugt-questions-box">
                  <span className="ugt-questions-title">
                    An ideal match if you prefer:
                  </span>

                  <ul className="ugt-questions-list">
                    {[
                      "Spacious accommodations to spread out comfortably",
                      "Flexible schedules without rigid dining structures",
                      "Quiet environments conducive to rest and relaxation",
                      "Family-focused dining with attentive service",
                      "Destination exploration and cultural discovery together",
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
                  Parents should simply recognize that Explora emphasizes luxury
                  and relaxation rather than nonstop children's entertainment or
                  high-energy character complexes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHO SHOULD CHOOSE EXPLORA? */}
      <section className="Asc-section Asc-bg-soft" id="Asc-who">
        <div className="Asc-container">
          <div className="Asc-section-header">
            <h2 className="Asc-h2">Who Should Choose Explora?</h2>
            <div className="Asc-accent-line"></div>

            <p
              className="Asc-body-text"
              style={{
                maxWidth: "760px",
                margin: "20px auto 0",
                textAlign: "center",
              }}
            >
              Explora is an excellent choice for families seeking a luxury
              cruise experience focused on comfort, meaningful time together,
              exceptional service, and immersive destinations rather than
              high-energy attractions.
            </p>
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
                Explora Is an Excellent Choice for Families Who Want:
              </h3>

              <ul className="Asc-who-list">
                {[
                  "Luxury accommodations",
                  "Quality family time",
                  "Relaxed vacations",
                  "Cultural exploration",
                  "Excellent dining",
                  "Spacious suites",
                  "Personalized service",
                  "Smaller ships",
                ].map((item, i) => (
                  <li key={i}>
                    <Check size={16} className="Asc-icon-green" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ══ WHO MAY PREFER ANOTHER CRUISE LINE? ═══════════════════════════════ */}
      <section className="wnf-section wnf-bg-white" id="wnf-other-cruise-lines">
        <div className="wnf-container">
          <div className="wnf-section-header">
            <h2 className="wnf-h2">Who May Prefer Another Cruise Line?</h2>
            <div className="wnf-accent-line"></div>
          </div>

          <div className="wnf-split">
            {/* Left Column */}
            <div className="wnf-image-column">
              <div className="wnf-image-stack">
                <div className="wnf-img-frame wnf-frame-primary">
                  <img
                    src={ExploraDesti5}
                    alt="Large family cruise ship with water park attractions"
                    className="wnf-photo"
                  />
                </div>

                <div className="wnf-img-frame wnf-frame-secondary">
                  <img
                    src={ExploraDesti6}
                    alt="Children enjoying large-scale cruise entertainment"
                    className="wnf-photo"
                  />
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="wnf-content-column">
              <div className="wnf-block">
                <p className="wnf-lead-text">
                  A different cruise line may be a better fit if your family is
                  looking for experiences such as:
                </p>

                <ul className="wnf-feature-list">
                  {[
                    "Large water parks",
                    "Character entertainment",
                    "Roller coasters",
                    "Extensive kids' clubs",
                    "Nonstop activities",
                    "Large-scale productions",
                    "Theme park atmosphere",
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
                  Those experiences are intentionally not the focus of Explora
                  Journeys. Instead, Explora emphasizes spacious suites,
                  exceptional dining, personalized service, and meaningful
                  destination experiences for families who prefer a more refined
                  and relaxed vacation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ANGELA HUGHES AUTHORITY BOX */}
      <section className="Adg-expert-section" id="Asc-expert-insight">
        <div className="Asc-container">
          {/* TOP HEADING */}
          <div className="Adg-expert-heading">
            <span className="Adg-expert-eyebrow">Luxury Travel Expertise</span>

            <h2 className="Adg-expert-title">Angela Hughes Luxury Authority</h2>

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
                  CEO of Trips &amp; Ships Luxury Travel
                </p>

                <div className="Adg-expert-name-divider"></div>

                <p className="Adg-expert-countries">
                  <MapPin size={14} />
                  Traveled to more than 121 countries
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
                      label: "Weekly industry columnist",
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
                        "Named one of the Most Influential Women in Travel in 2026 by TravelPulse",
                    },
                    {
                      icon: <Award size={16} />,
                      label: "Featured in major travel publications globally",
                    },
                    {
                      icon: <Ship size={16} />,
                      label:
                        "Expert in luxury cruises, safaris, expeditions, river cruising, and premium travel",
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

      {/* FAQ */}
      <section className="Asc-section Asc-bg-soft" id="Asc-faq">
        <div className="Asc-container">
          <div className="Asc-section-header">
            <h2 className="Asc-h2">Frequently Asked Questions</h2>
            <div className="Asc-accent-line"></div>
            <p className="Asc-faq-intro">
              Everything families need to know about sailing with Explora
              Journeys.
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
            alt="Explora Journeys luxury family cruise"
            className="Asc-help-bg-img"
          />
          <div className="Asc-help-overlay"></div>
        </div>

        <div className="Asc-container">
          <div className="Asc-help-card">
            <div className="Asc-help-content">
              <div className="Asc-help-header">
                <span className="Asc-help-eyebrow">
                  Personalized Family Cruise Planning
                </span>

                <h2 className="Asc-help-h2">
                  Plan Your Explora Family Experience
                </h2>

                <div className="Asc-help-accent"></div>
              </div>

              <div className="Asc-help-grid">
                <div className="Asc-help-info">
                  <p className="Asc-help-intro">
                    Trips &amp; Ships Luxury Travel helps families identify the
                    right luxury cruise experience based on travel style, family
                    composition, luxury preferences, and destination goals.
                  </p>

                  <p className="Asc-help-intro">
                    Whether your family prioritizes cultural immersion,
                    exceptional dining, spacious suite accommodations, or
                    multi-generational travel, expert guidance can help create a
                    far more personalized luxury family journey.
                  </p>

                  <p className="Asc-help-intro">
                    Connect with Angela Hughes and the Trips &amp; Ships Luxury
                    Travel team to begin planning a personalized Explora
                    Journeys family cruise experience.
                  </p>

                  <div className="Asc-help-btn-container">
                    <Link to="/contact" className="Asc-help-cta-btn" style={{ textDecoration: "none" }}>
                      Start Planning Your Explora Family Journey
                      <ArrowRight size={18} />
                    </Link>
                  </div>
                </div>

                <div className="Asc-help-list-box">
                  <h3 className="Asc-help-list-title">
                    Personalized family planning includes:
                  </h3>

                  <ul className="Asc-help-bullets">
                    {[
                      "Family travel style matching",
                      "Suite and accommodation guidance",
                      "Destination-focused family planning",
                      "Kids' program and activity recommendations",
                      "Multi-generational cruise planning",
                      "Dining and experience selection",
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
                    Experienced luxury travel guidance helps ensure your Explora
                    family experience aligns with the level of comfort,
                    personalization, and destination immersion your family truly
                    deserves.
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

export default IsExploraGoodForFamilies;
