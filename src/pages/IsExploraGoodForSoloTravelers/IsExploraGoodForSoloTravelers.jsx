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
  Clock3,
  Wine,
  Sun,
  MessageCircle,
} from "lucide-react";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela2.jpeg";
import CTAImage from "../../assets/IsExploraGoodForFamilies/EXPLORA-III-PANAMA-CANAL.jpg";

import HeroImage1 from "../../assets/IsExploraGoodForFamilies/ExploraCruise.webp";
import HeroImage2 from "../../assets/IsExploraGoodForFamilies/ExploraDestination.webp";
import HeroImage3 from "../../assets/IsExploraGoodForFamilies/Luxury-Explora-Journeys.webp";
import ExploraSuite from "../../assets/IsExploraGoodForFamilies/explora-I-infinity-pool.webp";
import ExploraSuites from "../../assets/IsExploraGoodForFamilies/Explora-Suite.webp";
import Exploraexp1 from "../../assets/IsExploraGoodForFamilies/explora-journeys-sunrise-pool-deck-luxury-yacht.webp";
import Exploraexp2 from "../../assets/IsExploraGoodForFamilies/EXPLORA-Crema Cafe.webp";
import Exploraexp3 from "../../assets/IsExploraGoodForFamilies/Dining-Venues.webp";
import ExploraDesti1 from "../../assets/IsExploraGoodForFamilies/amalfi-coast-italy-mediterranean-hero-summer-2025.jpg";
import ExploraDesti2 from "../../assets/IsExploraGoodForFamilies/santorini-greece-mediterranean-luxury-cruise-view.jpg";
import ExploraDesti3 from "../../assets/IsExploraGoodForFamilies/onboard-experience.webp";
import ExploraDesti4 from "../../assets/IsExploraGoodForFamilies/Explora-Journeys.webp";
import ExploraDesti5 from "../../assets/IsExploraGoodForFamilies/explora-journeys-retreat-residence-luxury-suite-living-room.webp";
import ExploraDesti6 from "../../assets/IsExploraGoodForFamilies/explora-I-luxury-pool-deck-daybeds.jpg";


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
      name: "Is Explora Good for Solo Travelers?",
      description:
        "Expert luxury cruise guide for solo travelers considering Explora Journeys.",
      url: "https://www.tripsandships.com/is-explora-good-for-solo-travelers",
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
          name: "Is Explora Good for Solo Travelers?",
          item: "https://www.tripsandships.com/is-explora-good-for-solo-travelers",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Is Explora good for solo travelers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Explora offers a peaceful, luxurious environment with personalized service, spacious suites, and destination-focused itineraries that appeal to many solo travelers.",
          },
        },
        {
          "@type": "Question",
          name: "Does Explora have solo cabins?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Explora's accommodations are all ocean-front suites designed primarily for double occupancy.",
          },
        },
        {
          "@type": "Question",
          name: "Will I have to pay a single supplement?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "In most cases, yes. Solo travelers generally pay a single supplement, although special promotions may occasionally reduce these costs.",
          },
        },
        {
          "@type": "Question",
          name: "Is it easy to meet people onboard?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. The ship's intimate size, elegant lounges, dining venues, and shore excursions create natural opportunities to meet fellow travelers.",
          },
        },
        {
          "@type": "Question",
          name: "Is Explora a good choice for first-time solo cruisers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. The attentive service and relaxed atmosphere make Explora a comfortable introduction to solo luxury cruising.",
          },
        },
        {
          "@type": "Question",
          name: "Are there activities for solo travelers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "While there are no dedicated solo programs, guests can enjoy lectures, wellness activities, live music, dining experiences, and organized excursions.",
          },
        },
        {
          "@type": "Question",
          name: "Is Explora safe for solo travelers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Luxury cruising provides a secure onboard environment with professional crew members available throughout the voyage.",
          },
        },
        {
          "@type": "Question",
          name: "Does Explora have nightlife?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Evenings are elegant and relaxed, featuring live music, lounges, cocktails, and social spaces rather than high-energy entertainment.",
          },
        },
        {
          "@type": "Question",
          name: "Which destinations are best for solo travelers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Mediterranean, Northern Europe, Caribbean, and cultural itineraries are all excellent choices, depending on your travel interests.",
          },
        },
        {
          "@type": "Question",
          name: "Is Explora worth the price for solo travelers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For travelers seeking personalized service, exceptional comfort, and immersive luxury travel, many find the experience well worth the investment.",
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
      q: "Is Explora good for solo travelers?",
      a: "Yes. Explora offers a peaceful, luxurious environment with personalized service, spacious suites, and destination-focused itineraries that appeal to many solo travelers.",
    },
    {
      q: "Does Explora have solo cabins?",
      a: "No. Explora's accommodations are all ocean-front suites designed primarily for double occupancy.",
    },
    {
      q: "Will I have to pay a single supplement?",
      a: "In most cases, yes. Solo travelers generally pay a single supplement, although special promotions may occasionally reduce these costs.",
    },
    {
      q: "Is it easy to meet people onboard?",
      a: "Yes. The ship's intimate size, elegant lounges, dining venues, and shore excursions create natural opportunities to meet fellow travelers.",
    },
    {
      q: "Is Explora a good choice for first-time solo cruisers?",
      a: "Absolutely. The attentive service and relaxed atmosphere make Explora a comfortable introduction to solo luxury cruising.",
    },
    {
      q: "Are there activities for solo travelers?",
      a: "While there are no dedicated solo programs, guests can enjoy lectures, wellness activities, live music, dining experiences, and organized excursions.",
    },
    {
      q: "Is Explora safe for solo travelers?",
      a: "Yes. Luxury cruising provides a secure onboard environment with professional crew members available throughout the voyage.",
    },
    {
      q: "Does Explora have nightlife?",
      a: "Evenings are elegant and relaxed, featuring live music, lounges, cocktails, and social spaces rather than high-energy entertainment.",
    },
    {
      q: "Which destinations are best for solo travelers?",
      a: "Mediterranean, Northern Europe, Caribbean, and cultural itineraries are all excellent choices, depending on your travel interests.",
    },
    {
      q: "Is Explora worth the price for solo travelers?",
      a: "For travelers seeking personalized service, exceptional comfort, and immersive luxury travel, many find the experience well worth the investment.",
    },
    {
      q: "Is there a solo traveler supplement?",
      a: "Like many luxury cruise lines, solo travelers may encounter a single supplement. However, many find the investment worthwhile because of the exceptional service, spacious accommodations, and overall luxury experience. Promotional offers may occasionally reduce or waive solo supplements on select sailings.",
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

const IsExploraGoodForSoloTravelers = () => {
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
          Is Explora Good for Solo Travelers? | Luxury Solo Cruise Guide
        </title>
        <meta
          name="title"
          content="Is Explora Good for Solo Travelers? | Luxury Solo Cruise Guide"
        />
        <meta
          name="description"
          content="Wondering if Explora Journeys is right for solo travelers? Discover the benefits of solo luxury cruising, including personalized service, elegant suites, destination-focused itineraries, dining experiences, and onboard atmosphere."
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
          <h1>Is Explora Good for Solo Travelers?</h1>

          <p>The Short Answer: Yes — For the Right Kind of Solo Journey</p>

          <p>
            Explora Journeys offers something very different from a traditional
            cruise line. Rather than emphasizing crowds and constant activity,
            Explora focuses on spacious accommodations, exceptional service,
            elegant surroundings, and immersive destinations.
          </p>

          {/* READ MORE CONTENT */}
          {readMore && (
            <>
              <p>
                Solo travelers seeking meaningful experiences, personal freedom,
                and opportunities to connect with new people will likely find
                Explora an outstanding choice.
              </p>

              <p>
                However, solo travelers looking for large-scale singles events,
                high-energy nightlife, or theme park-style entertainment may be
                happier with a larger mainstream cruise line.
              </p>

              <p>
                According to Angela Hughes — CEO of Trips &amp; Ships Luxury
                Travel, founder of Luxury Travel University, and a luxury cruise
                expert with over 40 years in the travel industry — understanding
                what kind of solo experience you are looking for is the key
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
            <h2 className="adg-c-h2">
              Why Solo Travelers Choose Luxury Cruises
            </h2>
            <div className="adg-c-accent-line"></div>
          </div>

          <div className="adg-c-overview-layout">
            {/* LEFT — Standard inclusions */}
            <div className="adg-c-overview-icons">
              {[
                "Independence",
                "Comfort",
                "Security",
                "Social opportunities",
                "Exceptional service",
                "Stress-free travel",
                "Seamless dining setups",
                "curated shore tours",
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
                    Traveling alone doesn't mean traveling lonely. Everything
                    from accommodations and dining to transportation between
                    destinations is seamlessly arranged, allowing solo travelers
                    to focus on enjoying the journey.
                  </p>
                </div>
              </div>

              <div className="adg-c-overview-image-wrap">
                <img
                  src={ExploraSuite}
                  alt="Luxury cruise experience for solo travelers"
                  className="adg-c-overview-img"
                />
                <div className="adg-c-overview-img-overlay">
                  <span className="adg-c-overview-img-label">
                    An Ideal Balance of Freedom & Comfort
                  </span>
                </div>
              </div>
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
                    alt="Explora Journeys luxury pool deck for solo travelers"
                    className="wnf-photo"
                  />
                </div>

                <div className="wnf-img-frame wnf-frame-secondary">
                  <img
                    src={ExploraDesti6}
                    alt="Explora Journeys outdoor spaces for independent travelers"
                    className="wnf-photo"
                  />
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="wnf-content-column">
              <div className="wnf-block">
                <p className="wnf-lead-text">
                  A different cruise line may be a better fit if you are
                  primarily looking for:
                </p>

                <ul className="wnf-feature-list">
                  {[
                    "Large singles events",
                    "High-energy nightlife",
                    "Extensive casinos",
                    "Theme parties",
                    "Adventure attractions",
                    "Constant organized social activities",
                    "Mainstream entertainment",
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
                  destination experiences for solo travelers who prefer a more
                  refined and independent style of luxury travel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ WHAT MAKES EXPLORA DIFFERENT? ═════════════════════════════════════ */}
      <section className="luc-why-section" id="luc-why-explora">
        <div className="luc-why-container">
          {/* LEFT — stacked images */}
          <div className="luc-why-images">
            <div className="luc-why-img-main-wrap" style={{ color: "#fff" }}>
              <img
                src={Exploraexp1}
                alt="Explora Journeys ocean-front luxury suite"
                className="luc-why-img-main"
              />
              <div className="luc-why-img-overlay"></div>
            </div>

            <div className="luc-why-img-accent-wrap" style={{ color: "#fff" }}>
              <img
                src={Exploraexp2}
                alt="Solo traveler relaxing aboard Explora Journeys"
                className="luc-why-img-accent"
              />

              <div className="luc-why-img-badge">
                <span className="luc-why-badge-num">4</span>
                <span className="luc-why-badge-text">
                  Signature
                  <br />
                  Features
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT — Content */}
          <div className="luc-why-content">
            <h2 className="luc-why-title">What Makes Explora Different?</h2>

            <div className="aac-accent-line aac-accent-white"></div>

            <p className="luc-why-intro">
              Explora Journeys was created to offer a more refined style of
              cruising. Instead of high-energy attractions and crowded public
              spaces, guests enjoy elegant surroundings, personalized service,
              and immersive destination experiences.
            </p>

            <div className="luc-why-features">
              {[
                {
                  num: "01",
                  title: "Spacious Ocean-Front Suites",
                  desc: "Every accommodation features a private terrace, elegant living space, and plenty of room to relax throughout the voyage.",
                },
                {
                  num: "02",
                  title: "Personalized Service",
                  desc: "Crew members take time to learn guest preferences, creating a highly individualized and welcoming experience.",
                },
                {
                  num: "03",
                  title: "Relaxed Atmosphere",
                  desc: "Elegant lounges, open decks, and uncrowded public spaces make it easy to unwind and enjoy every moment.",
                },
                {
                  num: "04",
                  title: "Destination-Focused Itineraries",
                  desc: "The emphasis is on exploring remarkable destinations rather than spending the entire vacation onboard.",
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

            <p className="luc-why-intro" style={{ marginTop: "24px" }}>
              For solo travelers, this combination creates an atmosphere that
              feels welcoming, comfortable, and relaxing rather than
              overwhelming.
            </p>
          </div>
        </div>
      </section>

      {/* SPACIOUS SUITES FOR INDEPENDENT TRAVELERS */}
      <section className="dmg-info-section dmg-bg-white" id="dmg-solo-suites">
        <div className="dmg-info-container">
          <div className="dmg-info-grid">
            {/* Left Side Image */}
            <div className="dmg-info-media">
              <div className="dmg-media-wrapper">
                <img
                  src={ExploraSuites}
                  alt="Explora Journeys ocean-front suite for solo travelers"
                  className="dmg-media-img"
                />

                <div className="dmg-media-overlay"></div>

                <div className="dmg-media-badge">
                  <span>All-Suite Luxury</span>
                </div>
              </div>
            </div>

            {/* Right Side Content */}
            <div className="dmg-info-content">
              <h2 className="dmg-info-title">
                Spacious Suites for Independent Travelers
              </h2>

              <div className="dmg-info-accent"></div>

              <p className="dmg-info-lead">
                Every Explora accommodation is an all-suite ocean-front
                residence, giving solo travelers significantly more space,
                comfort, and privacy than traditional cruise cabins.
              </p>

              <div className="dmg-info-features dmg-info-features-scrollable">
                {[
                  {
                    title: "Private Terrace",
                    desc: "A peaceful place to enjoy your morning coffee, read a book, or watch breathtaking sunsets over the ocean.",
                  },
                  {
                    title: "Comfortable Living Space",
                    desc: "Spacious interiors provide plenty of room to relax, unwind, and enjoy quiet moments between adventures.",
                  },
                  {
                    title: "Luxury Bathroom",
                    desc: "Beautifully designed bathrooms with premium finishes enhance the comfort and luxury of every voyage.",
                  },
                  {
                    title: "Walk-In Wardrobe",
                    desc: "Generous storage makes unpacking easy and is especially valuable on longer luxury cruises.",
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
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
    1. WHY EXPLORA JOURNEYS
════════════════════════════════════════ */}
      <section className="adg-c-section adg-c-bg-dark" id="adg-why-dining">
        <div className="adg-c-container">
          <div className="adg-c-why-grid">
            {/* LEFT — text */}
            <div className="adg-c-why-left">
              <h2 className="adg-c-h2 adg-c-h2-light">
                A Comfortable Environment for Solo Travelers
              </h2>

              <div className="adg-c-accent-line adg-c-accent-light"></div>

              <p className="adg-c-lead adg-c-lead-light">
                One of Explora's greatest strengths is its relaxed atmosphere.
                Unlike larger ships with thousands of passengers, Explora
                carries fewer guests, keeping your journey personal and
                intimate.
              </p>

              <p className="adg-c-body adg-c-body-light">
                There is absolutely no pressure to participate in rigid or
                organized social activities. Instead, the design and flow of the
                ship allow you to mix independence with organic connection.
              </p>

              <p className="adg-c-body adg-c-body-light">
                Opportunities to connect are always available whenever you feel
                like being social, yet the ship provides plenty of serene spaces
                when you want to retreat.
              </p>
            </div>

            {/* RIGHT — pill grid */}
            <div className="adg-c-why-right">
              <div className="adg-c-why-card">
                <span className="adg-c-why-card-label">
                  Fewer guests make it easier to:
                </span>

                <div className="adg-c-pill-grid">
                  {[
                    "Meet fellow travelers",
                    "Recognize familiar faces",
                    "Build conversations naturally",
                    "Enjoy quiet moments when desired",
                  ].map((item, i) => (
                    <div key={i} className="adg-c-pill">
                      <span className="adg-c-pill-check">
                        <Check size={13} strokeWidth={3} />
                      </span>

                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DINING ALONE DOESN'T FEEL AWKWARD */}
      <section className="adg-section" id="adg-solo-dining">
        <div className="adg-container">
          <div className="adg-section-header" style={{ marginBottom: "60px" }}>
            <h2 className="adg-h2">Dining Alone Doesn't Feel Awkward</h2>

            <div className="adg-accent-line"></div>
          </div>

          <div className="adg-split-layout">
            {/* Left Content Column */}
            <div className="adg-content-card-side">
              <img
                src={Exploraexp3}
                alt="Solo traveler enjoying dining aboard Explora Journeys"
                className="adg-side-image"
                style={{ height: "40vh", border: "1px solid" }}
              />

              <div className="adg-info-card">
                <div className="adg-card-meta">
                  <Utensils size={28} />
                  <span className="adg-meta-label">
                    Relaxed Solo Dining Experience
                  </span>
                </div>

                <p className="adg-card-lead">
                  One concern many solo travelers have is dining. Explora's
                  relaxed dining philosophy helps eliminate that concern by
                  offering welcoming venues, attentive service, and the
                  flexibility to enjoy meals your own way.
                </p>

                <div className="adg-card-divider"></div>

                <ul className="Asc-who-list" style={{ marginTop: "20px" }}>
                  {[
                    "Multiple dining venues",
                    "Flexible dining schedules",
                    "Casual or elegant settings",
                    "Outdoor dining options",
                    "Friendly, attentive service",
                  ].map((item, i) => (
                    <li key={i}>
                      <Check size={16} className="Asc-icon-green" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Features Grid */}
            <div className="adg-list-side">
              {[
                {
                  title: "Multiple Restaurants",
                  icon: <Utensils size={20} />,
                },
                {
                  title: "Flexible Dining Times",
                  icon: <Clock3 size={20} />,
                },
                {
                  title: "Casual & Elegant Venues",
                  icon: <Wine size={20} />,
                },
                {
                  title: "Outdoor Dining",
                  icon: <Sun size={20} />,
                },
                {
                  title: "Attentive Service",
                  icon: <UserCheck size={20} />,
                },
                {
                  title: "Comfortable Atmosphere",
                  icon: <Users size={20} />,
                },
                {
                  title: "Meet Fellow Travelers",
                  icon: <MessageCircle size={20} />,
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
                    title: "Mediterranean",
                    desc: "Historic cities, charming villages, and coastal beauty throughout the Mediterranean Sea.",
                  },
                  {
                    title: "Northern Europe",
                    desc: "Fjords, castles, and cultural capitals across Scandinavia and the British Isles.",
                  },
                  {
                    title: "Caribbean",
                    desc: "Luxury island escapes with extended port stays and pristine tropical scenery.",
                  },
                  {
                    title: "Middle East",
                    desc: "Ancient traditions combined with modern cities and extraordinary cultural contrasts.",
                  },
                  {
                    title: "Guided Excursions",
                    desc: "Organized shore experiences that offer a natural way to explore and meet like-minded fellow travelers.",
                  },
                  {
                    title: "Independent Exploration",
                    desc: "Wander at your own pace through local markets, museums, and coastal promenades on your own terms.",
                  },
                  {
                    title: "Cultural Immersion",
                    desc: "Connect with local traditions through cuisine, performances, festivals, and guided cultural tours.",
                  },
                  {
                    title: "Scenic Cruising",
                    desc: "Enjoy dramatic coastlines and breathtaking natural landscapes from the comfort of your private terrace.",
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
                    alt="Solo traveler exploring the Amalfi Coast on an Explora cruise"
                    className="dac-families-img"
                  />
                  <div className="dac-families-img-caption">
                    Mediterranean Exploration
                  </div>
                </div>

                <div className="dac-families-img-card dac-families-img-card--secondary">
                  <img
                    src={ExploraDesti2}
                    alt="Explora Journeys Amalfi Coast Mediterranean cruise"
                    className="dac-families-img"
                  />
                  <div className="dac-families-img-caption">
                    Greece Mediterranean
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WELLNESS & RELAXATION */}
      <section className="azs-entertainment-section" id="azs-solo-wellness">
        <div className="azs-container">
          <div className="azs-section-header">
            <h2 className="azs-section-title">Wellness &amp; Relaxation</h2>

            <div className="azs-section-accent"></div>

            <p className="azs-section-subtitle">
              Explora emphasizes personal well-being throughout every voyage,
              creating an atmosphere where solo travelers can relax, recharge,
              and enjoy every destination at their own pace.
            </p>
          </div>

          <div className="azs-entertainment-grid">
            {/* Wellness Card */}
            <div className="azs-entertainment-card azs-azamara-ent">
              <div className="azs-ent-header">
                <div className="azs-ent-icon-circle">
                  <Sparkles size={24} className="azs-ent-icon" />
                </div>

                <h3 className="azs-ent-title">Wellness &amp; Relaxation</h3>
              </div>

              <p className="azs-ent-intro">
                Solo travelers can enjoy a wide range of wellness amenities
                designed to promote balance, comfort, and relaxation throughout
                the journey.
              </p>

              <div className="azs-ent-body">
                <ul className="azs-ent-list">
                  {[
                    "Luxury spa",
                    "Fitness center",
                    "Outdoor wellness spaces",
                    "Yoga and fitness classes",
                    "Quiet pool areas",
                    "Scenic walking decks",
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
                    The ship is designed to encourage relaxation rather than
                    nonstop activity, allowing guests to unwind at their own
                    pace.
                  </p>
                </div>
              </div>
            </div>

            {/* Safety Card */}
            <div className="azs-entertainment-card azs-seabourn-ent">
              <div className="azs-ent-header">
                <div className="azs-ent-icon-circle">
                  <Music size={24} className="azs-ent-icon" />
                </div>

                <h3 className="azs-ent-title">Safety &amp; Peace of Mind</h3>
              </div>

              <p className="azs-ent-intro">
                One of the greatest advantages of solo cruising is the added
                sense of security and support available throughout the voyage.
              </p>

              <div className="azs-ent-body">
                <ul className="azs-ent-list">
                  {[
                    "Secure ship environment",
                    "Professional crew available 24/7",
                    "Organized shore excursions",
                    "Comfortable transportation between destinations",
                    "Personalized guest assistance",
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
                    This allows solo travelers to explore confidently while
                    maintaining their independence throughout the journey.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OPPORTUNITIES TO MEET PEOPLE */}
      <section className="dmg-info-section dmg-bg-white" id="dmg-meet-people">
        <div className="dmg-info-container">
          <div className="dmg-info-grid">
            {/* Content */}
            <div className="dmg-info-content">
              <h2 className="dmg-info-title">Opportunities to Meet People</h2>

              <div className="dmg-info-accent"></div>

              <p className="dmg-info-lead">
                Although Explora is not designed as a social cruise line,
                meaningful connections often happen naturally in its relaxed,
                welcoming atmosphere.
              </p>

              <div className="dmg-info-features dmg-info-features-scrollable">
                {[
                  {
                    title: "Lounges",
                    desc: "Comfortable lounges provide inviting spaces where guests can relax, enjoy a drink, and strike up conversations.",
                  },
                  {
                    title: "Observation Areas",
                    desc: "Scenic observation spaces naturally bring travelers together while enjoying breathtaking ocean views.",
                  },
                  {
                    title: "Wine Tastings",
                    desc: "Relaxed tasting events encourage casual interaction and shared conversations among guests.",
                  },
                  {
                    title: "Destination Excursions",
                    desc: "Exploring ports together often leads to new friendships and memorable shared experiences.",
                  },
                  {
                    title: "Evening Entertainment",
                    desc: "Live music and elegant lounges create enjoyable opportunities to socialize in an uncrowded setting.",
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
                  src={ExploraDesti3}
                  alt="Solo travelers socializing in an elegant lounge aboard Explora Journeys"
                  className="dmg-media-img"
                />

                <div className="dmg-media-overlay"></div>

                <div className="dmg-media-badge">
                  <span>Meaningful Connections</span>
                </div>
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
              Explora is an excellent choice for solo travelers who appreciate
              luxury accommodations, fine dining, destination immersion, and the
              freedom to explore the world on their own terms in a sophisticated
              and welcoming environment.
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
                Explora Is an Excellent Choice for Solo Travelers Who Want:
              </h3>

              <ul className="Asc-who-list">
                {[
                  "Luxury accommodations",
                  "Fine dining",
                  "Destination immersion",
                  "Personalized service",
                  "Quiet sophistication",
                  "Wellness",
                  "Cultural exploration",
                  "Relaxed social opportunities",
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

      {/* ── IS THE SOLO SUPPLEMENT WORTH IT? ───── */}
      <section
        className="ugt-components-section"
        id="ugt-components"
        style={{ backgroundColor: "var(--bg-white)" }}
      >
        <div className="ugt-components-container">
          <div className="ugt-components-header">
            <h2 className="ugt-components-title">
              Is the Solo Supplement Worth It?
            </h2>

            <div className="adg-c-accent-line"></div>
          </div>

          <div className="ugt-components-list">
            <div className="ugt-component-row">
              <div className="ugt-component-image-wrapper">
                <div className="ugt-component-image-container">
                  <img
                    src={ExploraDesti4}
                    alt="Solo traveler relaxing on a luxury Explora Journeys sundeck"
                    className="ugt-component-image"
                  />
                </div>
              </div>

              <div className="ugt-component-content">
                <p className="ugt-component-text">
                  Like many luxury cruise lines, solo travelers on Explora may
                  encounter a single supplement — meaning they pay more than
                  half of the double-occupancy fare because suites are designed
                  for two guests.
                </p>

                <div className="ugt-questions-box">
                  <span className="ugt-questions-title">
                    Why many solo travelers find it worthwhile:
                  </span>

                  <ul className="ugt-questions-list">
                    {[
                      "Exceptional personalized service throughout the voyage",
                      "Spacious private suite with ocean-front terrace",
                      "Immersive destination-focused itineraries",
                      "Safety and security of a luxury ship environment",
                      "Natural opportunities to connect with fellow travelers",
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
                  Occasionally, promotional offers may reduce or waive solo
                  supplements on select sailings — a luxury travel advisor like
                  Angela Hughes can help you identify the best opportunities.
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
              Everything solo travelers need to know about sailing with Explora
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
            alt="Explora Journeys luxury solo cruise"
            className="Asc-help-bg-img"
          />
          <div className="Asc-help-overlay"></div>
        </div>

        <div className="Asc-container">
          <div className="Asc-help-card">
            <div className="Asc-help-content">
              <div className="Asc-help-header">
                <span className="Asc-help-eyebrow">
                  Personalized Solo Cruise Planning
                </span>

                <h2 className="Asc-help-h2">
                  Plan Your Explora Solo Experience
                </h2>

                <div className="Asc-help-accent"></div>
              </div>

              <div className="Asc-help-grid">
                <div className="Asc-help-info">
                  <p className="Asc-help-intro">
                    Trips &amp; Ships Luxury Travel helps solo travelers
                    identify the right luxury cruise experience based on travel
                    style, destination goals, luxury preferences, and budget.
                  </p>

                  <p className="Asc-help-intro">
                    Whether you prioritize cultural immersion, exceptional
                    dining, spacious suite accommodations, or the freedom to
                    explore remarkable destinations independently, expert
                    guidance can help create a far more personalized solo luxury
                    journey.
                  </p>

                  <p className="Asc-help-intro">
                    Connect with Angela Hughes and the Trips &amp; Ships Luxury
                    Travel team to begin planning a personalized Explora
                    Journeys solo cruise experience.
                  </p>

                  <div className="Asc-help-btn-container">
                    <Link to="/contact" className="Asc-help-cta-btn" style={{ textDecoration: "none" }}>
                      Start Planning Your Explora Solo Journey
                      <ArrowRight size={18} />
                    </Link>
                  </div>
                </div>

                <div className="Asc-help-list-box">
                  <h3 className="Asc-help-list-title">
                    Personalized solo planning includes:
                  </h3>

                  <ul className="Asc-help-bullets">
                    {[
                      "Solo travel style matching",
                      "Suite and accommodation guidance",
                      "Destination-focused itinerary planning",
                      "Single supplement advice and promotions",
                      "Shore excursion recommendations",
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
                    solo experience aligns with the level of comfort,
                    personalization, and destination immersion you truly
                    deserve.
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

export default IsExploraGoodForSoloTravelers;
