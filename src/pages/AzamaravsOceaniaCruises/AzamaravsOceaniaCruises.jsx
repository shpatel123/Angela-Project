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
  ChefHat,
  Utensils,
  Sparkles,
  Music,
  HeartHandshake,
  Compass,
  Plane,
  BadgePercent,
  Home,
  MapPinned,
  ShieldCheck,
  DollarSign,
  Waves,
} from "lucide-react";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela.jpeg";
import HeroImage1 from "../../assets/AzamaravsOceaniaCruises/azamara-ship.jpg";
import HeroImage2 from "../../assets/AzamaravsOceaniaCruises/azamara-ship2.jpg";
import HeroImage3 from "../../assets/AzamaravsOceaniaCruises/Ocenia-ship.jpg";
import AzamaraOverviewImage from "../../assets/AzamaravsOceaniaCruises/destinations.jpg";
import OceaniaExperience from "../../assets/AzamaravsOceaniaCruises/Ocenia-destination.jpg";

import AzamaraAtmosphereImage from "../../assets/AzamaravsOceaniaCruises/Azamara-Atmosphere.jpg";
import OceaniaAtmosphereImage from "../../assets/AzamaravsOceaniaCruises/Oceania-Atmosphere.jpg";
import OceaniCruisesImage from "../../assets/AzamaravsOceaniaCruises/Oceania-Cruises.jpg";
import AzamarCruisesImage from "../../assets/AzamaravsOceaniaCruises/Azamara-Cruises.png";
import OceaniaSuiteImage from "../../assets/AzamaravsOceaniaCruises/Oceania-Aurelia-Horizon-Suite.jpg";
import AzamaraCabinImage from "../../assets/Azamarashipcomparison/azamara-cabin.webp";

import AzamaraDining from "../../assets/AzamaravsOceaniaCruises/Azamara-Onboard_Dining.jpg";
import OceaniaDining from "../../assets/AzamaravsOceaniaCruises/Oceania-Aurelia-Mixology.jpg";
import AzamaraShip from "../../assets/AzamaravsOceaniaCruises/azamara-cta.jpg";

import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "Trips & Ships Luxury Travel",
      url: "https://www.tripsandships.com",
      logo: "https://www.tripsandships.com/Copy-of-TRIPSSHIPS-e1592486640831.webp",
      sameAs: [
        "https://www.facebook.com/tripsandships/",
        "https://www.instagram.com/tripsandshipsluxurytravel",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+1-603-860-3274",
        email: "sales@tripsandships.com",
        contactType: "customer service",
      },
    },
    {
      "@type": "TravelAgency",
      name: "Trips & Ships Luxury Travel",
      url: "https://www.tripsandships.com",
      logo: "https://www.tripsandships.com/Copy-of-TRIPSSHIPS-e1592486640831.webp",
      image: "https://www.tripsandships.com/Copy-of-TRIPSSHIPS-e1592486640831.webp",
      founder: { "@type": "Person", name: "Angela Hughes" },
      areaServed: "Worldwide",
      priceRange: "$$$$",
      telephone: "+1-603-860-3274",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Orlando",
        addressRegion: "FL",
        addressCountry: "US"
      }
    },
    {
      "@type": "Person",
      name: "Angela Hughes",
      jobTitle:
        "CEO, Trips & Ships Luxury Travel; Founder, Luxury Travel University",
      worksFor: {
        "@type": "Organization",
        name: "Trips & Ships Luxury Travel",
      },
      description:
        "Luxury travel expert with 40+ years in the travel industry and personal travel to 121+ countries. Global luxury travel speaker and trainer, weekly industry columnist, Travel Leaders Network Advisory Board member, 2024 Luxury Travel Influencer of the Year, and named one of the Most Influential Women in Travel in 2026 by TravelPulse.",
      award: [
        "2024 Luxury Travel Influencer of the Year — Travel Leaders Network",
        "2026 Most Influential Women in Travel — TravelPulse",
      ],
    },
    {
      "@type": "WebPage",
      name: "Azamara vs. Oceania Cruises: Which Luxury Line Is Right for You? (2026 Comparison)",
      description:
        "Comparing Azamara and Oceania Cruises? Luxury travel expert Angela Hughes breaks down pricing, dining, itineraries & more to help you choose the right line.",
      url: "https://www.tripsandships.com/azamara-vs-oceania",
      author: { "@type": "Person", name: "Angela Hughes" },
      publisher: {
        "@type": "Organization",
        name: "Trips & Ships Luxury Travel",
      },
      datePublished: "2026-08-01",
      dateModified: "2026-08-01",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.tripsandships.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Ocean Cruises",
          item: "https://www.tripsandships.com/ocean-cruises",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Azamara Cruises",
          item: "https://www.tripsandships.com/azamara-cruises-guide-2026-2027",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Azamara vs. Oceania",
          item: "https://www.tripsandships.com/azamara-vs-oceania",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Is Azamara or Oceania better for first-time cruisers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Both work well for first-time luxury cruisers. Oceania's all-inclusive specialty dining removes decision fatigue, while Azamara's included drinks and immersive port stays suit travelers who want to explore destinations deeply on their first sailing.",
          },
        },
        {
          "@type": "Question",
          name: "What is the main difference between Azamara and Oceania Cruises?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Azamara prioritizes destination immersion with more overnight and late-night port stays and drinks included in the fare. Oceania prioritizes culinary excellence, with nearly all specialty dining included and a lower base fare.",
          },
        },
        {
          "@type": "Question",
          name: "Which line has better dining, Azamara or Oceania?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Oceania is widely regarded as having the stronger dining program, with nearly all specialty restaurants included in the fare. Azamara's two specialty restaurants carry a $50 surcharge per person.",
          },
        },
        {
          "@type": "Question",
          name: "Is Azamara more expensive than Oceania?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Azamara's base fare typically runs higher, but it includes more — such as alcoholic beverages — so the total cost gap often narrows once Oceania's à la carte extras are added in.",
          },
        },
        {
          "@type": "Question",
          name: "Does Azamara include drinks in the cruise fare?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, Azamara includes complimentary alcoholic beverages in the fare on most sailings, along with its signature AzAmazing Evenings shoreside event.",
          },
        },
        {
          "@type": "Question",
          name: "Which cruise line offers more overnight port stays, Azamara or Oceania?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Azamara offers significantly more late-night and overnight port stays than Oceania, and more than almost any other luxury cruise line — it's the line's defining feature.",
          },
        },
        {
          "@type": "Question",
          name: "Are Azamara and Oceania ships the same size?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Both operate small, upscale ships, though Oceania's newer O-Class ships run slightly larger than Azamara's fleet.",
          },
        },
        {
          "@type": "Question",
          name: "Which is better for solo travelers, Azamara or Oceania?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Both lines suit solo luxury travelers well. Azamara's more social, livelier atmosphere tends to appeal to solo travelers looking to meet other guests; Oceania suits solo travelers most focused on the dining experience.",
          },
        },
        {
          "@type": "Question",
          name: "Does Oceania include specialty dining in the fare?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes — on R-Class ships, all specialty dining is included, and on O-Class ships, all but two exclusive dining experiences are included in the base fare.",
          },
        },
        {
          "@type": "Question",
          name: "Which line is better for a first luxury cruise?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Either is an excellent entry point into luxury cruising. The right choice depends on whether included dining (Oceania) or destination immersion and included drinks (Azamara) matters more to you.",
          },
        },
        {
          "@type": "Question",
          name: "Can I book Azamara or Oceania through a travel advisor at no extra cost?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Both lines are commissionable, meaning booking through a Trips & Ships advisor costs the same as booking direct — while often adding exclusive perks unavailable booking direct.",
          },
        },
        {
          "@type": "Question",
          name: "Which cruise line has a more youthful onboard atmosphere?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Azamara's no-formal-nights policy and livelier evening energy tend to read as slightly more youthful than Oceania's elegant-casual, quieter atmosphere — though both skew toward experienced, discerning travelers.",
          },
        },
        {
          "@type": "Question",
          name: "Is Azamara or Oceania better for long voyages and world cruises?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Oceania has a particular strength in longer voyages and world cruises, with itineraries and onboard programming built for extended time at sea.",
          },
        },
        {
          "@type": "Question",
          name: "What is Azamara's AzAmazing Evenings event?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "AzAmazing Evenings is Azamara's signature complimentary shoreside event, included on most voyages, offering an exclusive cultural or entertainment experience in a destination not typically accessible to other cruise passengers.",
          },
        },
        {
          "@type": "Question",
          name: "How do I decide between Azamara and Oceania for my next cruise?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Start with what matters most to you: if it's the best possible dining and a slightly lower base fare, choose Oceania. If it's staying out late in port and having drinks included, choose Azamara. A luxury travel advisor can match the right line to your specific itinerary and travel style.",
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
      q: "Is Azamara or Oceania better for first-time cruisers?",
      a: "Both work well for first-time luxury cruisers. Oceania's all-inclusive specialty dining removes decision fatigue, while Azamara's included drinks and immersive port stays suit travelers who want to explore destinations deeply on their first sailing.",
    },
    {
      q: "What is the main difference between Azamara and Oceania Cruises?",
      a: "Azamara prioritizes destination immersion with more overnight and late-night port stays and drinks included in the fare. Oceania prioritizes culinary excellence, with nearly all specialty dining included and a lower base fare.",
    },
    {
      q: "Which line has better dining, Azamara or Oceania?",
      a: "Oceania is widely regarded as having the stronger dining program, with nearly all specialty restaurants included in the fare. Azamara's two specialty restaurants carry a $50 surcharge per person.",
    },
    {
      q: "Is Azamara more expensive than Oceania?",
      a: "Azamara's base fare typically runs higher, but it includes more — such as alcoholic beverages — so the total cost gap often narrows once Oceania's à la carte extras are added in.",
    },
    {
      q: "Does Azamara include drinks in the cruise fare?",
      a: "Yes, Azamara includes complimentary alcoholic beverages in the fare on most sailings, along with its signature AzAmazing Evenings shoreside event.",
    },
    {
      q: "Which cruise line offers more overnight port stays, Azamara or Oceania?",
      a: "Azamara offers significantly more late-night and overnight port stays than Oceania, and more than almost any other luxury cruise line — it's the line's defining feature.",
    },
    {
      q: "Are Azamara and Oceania ships the same size?",
      a: "Both operate small, upscale ships, though Oceania's newer O-Class ships run slightly larger than Azamara's fleet.",
    },
    {
      q: "Which is better for solo travelers, Azamara or Oceania?",
      a: "Both lines suit solo luxury travelers well. Azamara's more social, livelier atmosphere tends to appeal to solo travelers looking to meet other guests; Oceania suits solo travelers most focused on the dining experience.",
    },
    {
      q: "Does Oceania include specialty dining in the fare?",
      a: "Yes — on R-Class ships, all specialty dining is included, and on O-Class ships, all but two exclusive dining experiences are included in the base fare.",
    },
    {
      q: "Which line is better for a first luxury cruise?",
      a: "Either is an excellent entry point into luxury cruising. The right choice depends on whether included dining (Oceania) or destination immersion and included drinks (Azamara) matters more to you.",
    },
    {
      q: "Can I book Azamara or Oceania through a travel advisor at no extra cost?",
      a: "Yes. Both lines are commissionable, meaning booking through a Trips & Ships advisor costs the same as booking direct — while often adding exclusive perks unavailable booking direct.",
    },
    {
      q: "Which cruise line has a more youthful onboard atmosphere?",
      a: "Azamara's no-formal-nights policy and livelier evening energy tend to read as slightly more youthful than Oceania's elegant-casual, quieter atmosphere — though both skew toward experienced, discerning travelers.",
    },
    {
      q: "Is Azamara or Oceania better for long voyages and world cruises?",
      a: "Oceania has a particular strength in longer voyages and world cruises, with itineraries and onboard programming built for extended time at sea.",
    },
    {
      q: "What is Azamara's AzAmazing Evenings event?",
      a: "AzAmazing Evenings is Azamara's signature complimentary shoreside event, included on most voyages, offering an exclusive cultural or entertainment experience in a destination not typically accessible to other cruise passengers.",
    },
    {
      q: "How do I decide between Azamara and Oceania for my next cruise?",
      a: "Start with what matters most to you: if it's the best possible dining and a slightly lower base fare, choose Oceania. If it's staying out late in port and having drinks included, choose Azamara. A luxury travel advisor can match the right line to your specific itinerary and travel style.",
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
const AzamaraVsOceania = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [ctaReadMore, setCtaReadMore] = useState(false);
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
          Azamara vs. Oceania Cruises: Which Luxury Line Is Right for You? (2026
          Comparison)
        </title>
        <meta
          name="title"
          content="Azamara vs. Oceania Cruises | Expert 2026 Comparison"
        />
        <meta
          name="description"
          content="Comparing Azamara and Oceania Cruises? Luxury travel expert Angela Hughes breaks down pricing, dining, itineraries & more to help you choose the right line."
        />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      <Nav />

      {/* HERO */}
      <section className="Scenic_hero_section">
        {images.map((img, index) => (
          <div
            key={index}
            className={`Scenic_hero_bg ${index === currentSlide ? "active" : ""}`}
            style={{ backgroundImage: `url(${img})` }}
          ></div>
        ))}

        <div className="Scenic_hero_overlay"></div>

        <div className="Scenic_hero_content">
          <h1>
            Azamara vs. Oceania Cruises: <br /> Which Luxury Cruise Line Is
            Better?
          </h1>

          <p>
            Azamara and Oceania Cruises are two of the most respected names in
            the premium and upper-premium cruise market. Both focus on smaller
            ships, exceptional service, destination-rich itineraries, and
            elevated dining experiences.
          </p>

          {/* READ MORE CONTENT */}
          {readMore && (
            <>
              <p>
                However, while they share many similarities, their onboard
                atmosphere and travel philosophy appeal to different types of
                travelers.
              </p>

              <p>
                Azamara is renowned for its immersive destination experiences,
                longer stays in port, and intimate boutique-hotel feel at sea.
                Oceania Cruises has built its reputation around exceptional
                cuisine, elegant ships, and a refined onboard experience that
                emphasizes comfort and culinary excellence.
              </p>

              <p
                style={{
                  fontStyle: "italic",
                  fontWeight: "600",
                  margin: "10px 0",
                }}
              >
                “The right choice depends less on which cruise line is better
                and more on which travel style matches you.”
              </p>

              <p>
                As CEO of Trips & Ships Luxury Travel, founder of Luxury Travel
                University, and a global luxury travel authority with more than
                40 years in the industry and travel experience across 121+
                countries, Angela Hughes has helped luxury travelers navigate
                premium cruise decisions for decades.
              </p>

              <p>
                This guide breaks down everything from accommodations and dining
                to itineraries, pricing, entertainment, and overall value —
                beyond the marketing brochures.
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
      {/* AZAMARA OVERVIEW */}
      <section className="azs-overview-section" id="azs-azamara-overview">
        <div className="azs-container">
          <div className="Avs-verdict-header">
            <h2 className="Avs-verdict-title">
              Azamara: Destination-Focused Boutique Cruising
            </h2>
            <div className="Avs-verdict-accent"></div>
          </div>
          <div className="azs-overview-grid">
            {/* Left Side: Image */}
            <div className="azs-image-col" style={{ height: "70vh" }}>
              <img
                src={AzamaraOverviewImage}
                alt="Azamara luxury cruise ship overview"
                className="azs-overview-img"
              />
              <div className="azs-image-overlay">
                <span className="azs-image-badge">Boutique Luxury</span>
                <h3 className="azs-image-title">Destination Immersion</h3>
              </div>
            </div>

            {/* Right Side: Content */}
            <div className="azs-content-col">
              <p className="azs-intro">
                Azamara specializes in immersive destination experiences.
              </p>

              <div className="azs-sub-grid">
                {/* Group 1: Known For */}
                <div className="azs-info-card">
                  <h4 className="azs-group-title">
                    The cruise line is known for:
                  </h4>
                  <ul className="azs-list">
                    {[
                      "Longer port stays",
                      "Overnight experiences",
                      "Smaller boutique ships",
                      "Relaxed luxury",
                      "Cultural enrichment",
                      "More approachable pricing",
                    ].map((item, i) => (
                      <li key={i} className="azs-list-item">
                        <Check size={16} className="azs-list-icon" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Group 2: Traveler Priorities */}
                <div className="azs-info-card">
                  <h4 className="azs-group-title">Popular regions include:</h4>
                  <ul className="azs-list">
                    {[
                      "Mediterranean",
                      "Greece",
                      "South America",
                      "Northern Europe",
                      "Australia",
                      "Caribbean",
                    ].map((item, i) => (
                      <li key={i} className="azs-list-item">
                        <ArrowRight size={16} className="azs-list-icon" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Group 3: Angela Hughes Recommendations */}
                <div className="azs-info-card azs-recommend-card">
                  <h4 className="azs-group-title">
                    Angela Hughes frequently recommends Azamara for:
                  </h4>
                  <ul className="azs-list">
                    {[
                      "Experienced travelers",
                      "Active retirees",
                      "Destination-focused couples",
                      "Luxury travelers who dislike overly formal environments",
                    ].map((item, i) => (
                      <li key={i} className="azs-list-item">
                        <Star
                          size={16}
                          className="azs-list-icon azs-star-icon"
                        />
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

      {/* Oceania*/}
      <section
        className="azs-overview-section"
        id="azs-oceania-overview"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="azs-container">
          <div className="Avs-verdict-header">
            <h2 className="Avs-verdict-title">
              Oceania Cruises: Elegant, Culinary-Focused Luxury
            </h2>
            <div className="Avs-verdict-accent"></div>
          </div>
          <div className="azs-overview-grid">
            {/* Right Side: Content */}
            <div className="azs-content-col">
              <p className="azs-intro">
                Oceania Cruises delivers a refined culinary-focused
                upper-premium atmosphere.
              </p>

              <div className="azs-sub-grid">
                {/* Group 1: Known For */}
                <div className="azs-info-card">
                  <h4 className="azs-group-title">Oceania is known for:</h4>
                  <ul className="azs-list">
                    {[
                      "Exceptional gourmet dining",
                      "Included specialty restaurants",
                      "Elegant-casual country club atmosphere",
                      "Beautifully designed suites & staterooms",
                      "Wide range of global itineraries",
                    ].map((item, i) => (
                      <li key={i} className="azs-list-item">
                        <Check size={16} className="azs-list-icon" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Group 2: Traveler Priorities */}
                <div className="azs-info-card">
                  <h4 className="azs-group-title">
                    Popular destinations include:
                  </h4>
                  <ul className="azs-list">
                    {[
                      "Mediterranean",
                      "Alaska",
                      "Northern Europe",
                      "Asia",
                      "South Pacific",
                      "Africa",
                      "South America",
                      "World Cruises",
                    ].map((item, i) => (
                      <li key={i} className="azs-list-item">
                        <ArrowRight size={16} className="azs-list-icon" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Group 3: Angela Hughes Recommendations */}
                <div className="azs-info-card azs-recommend-card">
                  <h4 className="azs-group-title">
                    Angela Hughes frequently recommends Oceania for:
                  </h4>
                  <ul className="azs-list">
                    {[
                      "Food lovers and culinary enthusiasts",
                      "Travelers who value refined country club elegance",
                      "Discerning couples seeking relaxed luxury",
                      "Guests who enjoy comfortable sea days and global routing",
                    ].map((item, i) => (
                      <li key={i} className="azs-list-item">
                        <Star
                          size={16}
                          className="azs-list-icon azs-star-icon"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Left Side: Image */}
            <div className="azs-image-col" style={{ height: "85vh" }}>
              <img
                src={OceaniaExperience}
                alt="Oceania Cruises elegant ship overview"
                className="azs-overview-img"
              />
              <div className="azs-image-overlay">
                <span className="azs-image-badge">Elegant Luxury</span>
                <h3 className="azs-image-title">Culinary Excellence</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE COMPARISON */}
      <section className="azs-experience-section" id="azs-experience">
        <div className="azs-container">
          <div className="azs-section-header">
            <h2 className="azs-section-title">Ship Experience Comparison</h2>
            <div className="azs-section-accent"></div>
          </div>

          <div className="azs-experience-grid">
            {/* Azamara Card */}
            <div className="azs-experience-card azs-azamara-exp">
              <div className="azs-exp-image-wrap">
                <img
                  src={AzamaraAtmosphereImage}
                  alt="Azamara boutique ship atmosphere"
                  className="azs-exp-img"
                />
                <div className="azs-exp-image-badge">Boutique & Social</div>
              </div>

              <div className="azs-exp-content">
                <div className="azs-exp-header">
                  <Ship size={24} className="azs-exp-icon" />
                  <h3 className="azs-exp-title">Azamara Atmosphere</h3>
                </div>

                <div className="azs-exp-body">
                  <div className="azs-exp-group">
                    <h4 className="azs-exp-group-title">Azamara ships feel:</h4>
                    <ul className="azs-exp-list">
                      {[
                        "Boutique",
                        "Social",
                        "Casual elegant",
                        "Destination-oriented",
                        "Relaxed",
                      ].map((item, idx) => (
                        <li key={idx} className="azs-exp-list-item">
                          <Check size={16} className="azs-exp-list-icon" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="azs-exp-divider"></div>

                  <p className="azs-exp-highlight">
                    Guests tend to mingle more easily onboard.
                  </p>

                  <div className="azs-exp-divider"></div>

                  <div className="azs-exp-group">
                    <h4 className="azs-exp-group-title">
                      The atmosphere is ideal for:
                    </h4>
                    <ul className="azs-exp-list">
                      {[
                        "Travelers who enjoy conversation",
                        "Guests who prioritize shore experiences",
                        "Travelers who prefer understated luxury",
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

            {/* Oceania Card */}
            <div className="azs-experience-card azs-oceania-exp">
              <div className="azs-exp-image-wrap">
                <img
                  src={OceaniaAtmosphereImage}
                  alt="Oceania elegant contemporary luxury atmosphere"
                  className="azs-exp-img"
                />
                <div className="azs-exp-image-badge">Refined & Elegant</div>
              </div>

              <div className="azs-exp-content">
                <div className="azs-exp-header">
                  <Ship size={24} className="azs-exp-icon" />
                  <h3 className="azs-exp-title">Oceania Atmosphere</h3>
                </div>

                <div className="azs-exp-body">
                  <div className="azs-exp-group">
                    <h4 className="azs-exp-group-title">Oceania offers:</h4>
                    <ul className="azs-exp-list">
                      {[
                        "Quiet sophistication",
                        "Refined luxury",
                        "Country club casual elegance",
                        "Attentive, approachable service",
                        "Culinary-focused ambiance",
                      ].map((item, idx) => (
                        <li key={idx} className="azs-exp-list-item">
                          <Check size={16} className="azs-exp-list-icon" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="azs-exp-divider"></div>

                  <p className="azs-exp-highlight">
                    The experience feels elegant, comfortable, and food-forward.
                  </p>

                  <div className="azs-exp-divider"></div>

                  <div className="azs-exp-group">
                    <h4 className="azs-exp-group-title">
                      The atmosphere is ideal for:
                    </h4>
                    <ul className="azs-exp-list">
                      {[
                        "Travelers who prioritize quiet luxury",
                        "Food lovers and culinary enthusiasts",
                        "Guests who enjoy comfortable sea days",
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

      {/* ── INCLUDED AMENITIES ───────────────────────────── */}
      <section className="adg-c-section adg-c-bg-soft" id="lunch-options">
        <div className="adg-c-container">
          <div className="adg-c-section-header">
            <span className="adg-c-eyebrow">
              Value • Inclusions • Transparency
            </span>

            <h2 className="adg-c-h2">Included Amenities</h2>

            <div className="adg-c-accent-line"></div>

            <p className="Asc-section-intro">
              Understanding what is built into your fare helps maximize your
              cruise experience. Here is a breakdown of how both lines handle
              standard inclusions and package value.
            </p>
          </div>

          <div className="adg-c-venues-grid1">
            {/* Azamara Amenities */}
            <div className="adg-c-venue-card adg-c-venue-1">
              <div className="adg-c-venue-top">
                <span className="adg-c-venue-eyebrow">Standard Perks</span>

                <h3 className="adg-c-venue-name">Azamara Includes</h3>

                <p className="adg-c-venue-highlight">
                  Consistently Bundled Base Value
                </p>
              </div>

              <ul className="adg-c-venue-list">
                {[
                  "Select beverages",
                  "Gratuities",
                  "Shuttle service in many ports",
                  "Signature cultural event on many voyages",
                  "Multiple dining venues",
                ].map((item, i) => (
                  <li key={i}>
                    <span className="adg-c-venue-dot"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="adg-c-venue-callout">
                <span className="adg-c-venue-callout-bar"></span>
                <p>
                  Azamara focuses on local immersion, cementing their value with
                  distinct destination-focused events alongside standard onboard
                  convenience items.
                </p>
              </div>
            </div>

            {/* Oceania Amenities */}
            <div className="adg-c-venue-card adg-c-venue-2">
              <div className="adg-c-venue-top">
                <span className="adg-c-venue-eyebrow">Flexible Packages</span>

                <h3 className="adg-c-venue-name">Oceania Includes</h3>

                <p className="adg-c-venue-highlight">
                  Depending on Selected Fare
                </p>
              </div>

              <ul className="adg-c-venue-list">
                {[
                  "Specialty dining",
                  "Wi-Fi",
                  "Select beverages",
                  "Gratuities (on many promotions)",
                  "Shore excursion credits",
                  "Airfare promotions",
                ].map((item, i) => (
                  <li key={i}>
                    <span className="adg-c-venue-dot"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="adg-c-venue-callout">
                <span className="adg-c-venue-callout-bar"></span>
                <p>
                  Included amenities vary by promotion. Oceania allows travelers
                  to build value directly into tactical fare structures that fit
                  specific booking needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FLEET OVERVIEW ───────────────────────────────────────── */}
      <section
        className="dve-winner-section"
        id="life-onboard"
        style={{ backgroundColor: "var(--bg-white)" }}
      >
        <div className="dve-container">
          <div className="dve-section-header">
            <h2 className="dve-section-title">Fleet Overview</h2>

            <div className="dve-section-accent"></div>

            <p className="dve-section-subtitle">
              Comparing the scales and design philosophies of boutique cruising
              versus premium diverse fleets.
            </p>
          </div>

          <div className="dve-winner-grid">
            {/* Azamara Column */}
            <div className="dve-winner-card dve-disney-winner">
              <div className="dve-winner-image-wrap">
                <img
                  src={AzamarCruisesImage}
                  alt="Azamara boutique luxury cruise ship at sea"
                  className="dve-winner-img"
                />

                <span className="dve-winner-badge">Boutique & Intimate</span>
              </div>

              <div className="dve-winner-content">
                <h3 className="dve-winner-title">Azamara</h3>

                <p className="dve-winner-intro">
                  Azamara operates a fleet of intimate ships carrying
                  approximately <strong>700 guests each</strong>. Their smaller
                  size allows access to boutique ports that larger ships cannot
                  visit.
                </p>

                <div className="dve-winner-divider"></div>

                <h4 className="dve-advantages-title">Current Ships Include:</h4>

                <ul className="dve-advantages-list">
                  {[
                    "Azamara Journey",
                    "Azamara Quest",
                    "Azamara Pursuit",
                    "Azamara Onward",
                  ].map((item, i) => (
                    <li key={i}>
                      <Waves size={18} className="dve-advantage-icon" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Oceania Column */}
            <div className="dve-winner-card dve-seabourn-winner">
              <div className="dve-winner-image-wrap">
                <img
                  src={OceaniCruisesImage}
                  alt="Oceania Cruises elegant ship entering port"
                  className="dve-winner-img"
                />

                <span className="dve-winner-badge">Diverse & Premium</span>
              </div>

              <div className="dve-winner-content">
                <h3 className="dve-winner-title">Oceania Cruises</h3>

                <p className="dve-winner-intro">
                  Oceania operates a larger and more diverse fleet. Depending on
                  the ship, guest capacity ranges from around{" "}
                  <strong>670 to 1,250 passengers</strong>.
                </p>

                <div className="dve-winner-divider"></div>

                <h4 className="dve-advantages-title">Popular Ships Include:</h4>

                <ul className="dve-advantages-list">
                  {["Marina", "Riviera", "Vista", "Allura", "Regatta"].map(
                    (item, i) => (
                      <li key={i}>
                        <Star size={18} className="dve-advantage-icon" />
                        <span>{item}</span>
                      </li>
                    ),
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DINING COMPARISON */}
      <section className="azs-dining-section" id="azs-dining">
        <div className="azs-container">
          <div className="azs-section-header">
            <h2 className="azs-section-title">Dining Comparison</h2>
            <div className="azs-section-accent"></div>
            <p className="azs-section-subtitle">
              Gastronomy at Sea: Industry-Leading Cuisine vs.
              Destination-Inspired Regional Flavors
            </p>
          </div>

          <div className="azs-dining-grid">
            {/* Oceania Card */}
            <div className="azs-dining-card azs-seabourn-dining">
              <div className="azs-dining-image-wrap">
                <img
                  src={OceaniaDining}
                  alt="Oceania Culinary Excellence"
                  className="azs-dining-img"
                />

                <div className="azs-dining-badge-wrapper">
                  <span className="azs-dining-badge azs-azamara-badge">
                    Industry-Leading Dining
                  </span>
                </div>
              </div>
              <div className="azs-dining-content">
                <div className="azs-dining-header">
                  <div className="azs-dining-icon-circle">
                    <ChefHat size={24} className="azs-dining-icon" />
                  </div>
                  <h3 className="azs-dining-title">
                    Oceania Culinary Excellence
                  </h3>
                </div>
                <p className="azs-dining-intro">
                  Oceania is widely recognized for having some of the best
                  cuisine at sea.
                </p>
                <div className="azs-dining-body">
                  <h4 className="azs-dining-group-title">
                    Highlights include:
                  </h4>
                  <ul className="azs-dining-list">
                    {[
                      "The Grand Dining Room",
                      "Jacques & Toscana",
                      "Red Ginger & Polo Grill",
                      "Ember & Aquamar Kitchen",
                      "Specialty restaurants included for all guests",
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
                  <div className="azs-dining-highlight-box azs-oceania-highlight">
                    <p className="azs-dining-highlight-text">
                      Many travelers choose Oceania specifically for its
                      exceptional culinary program.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Azamara Card */}
            <div className="azs-dining-card azs-azamara-dining">
              <div className="azs-dining-image-wrap">
                <img
                  src={AzamaraDining}
                  alt="Azamara Dining Strengths"
                  className="azs-dining-img"
                />
                <div className="azs-dining-badge-wrapper">
                  <span className="azs-dining-badge azs-azamara-badge">
                    Boutique Dining
                  </span>
                </div>
              </div>
              <div className="azs-dining-content">
                <div className="azs-dining-header">
                  <div className="azs-dining-icon-circle">
                    <Utensils size={24} className="azs-dining-icon" />
                  </div>
                  <h3 className="azs-dining-title">Azamara Dining Strengths</h3>
                </div>
                <p className="azs-dining-intro">
                  Dining is one of Azamara's strongest features, with cuisine
                  emphasizing regional flavors inspired by each destination.
                </p>
                <div className="azs-dining-body">
                  <h4 className="azs-dining-group-title">Azamara offers:</h4>
                  <ul className="azs-dining-list">
                    {[
                      "Discoveries Restaurant",
                      "Prime C Steakhouse",
                      "Aqualina Mediterranean Restaurant",
                      "Windows Café & Mosaic Café",
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
                  <div className="azs-dining-highlight-box azs-azamara-highlight">
                    <p className="azs-dining-highlight-text">
                      Approachable, high-quality dining without formal pressure.
                    </p>
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
            <h2 className="azs-section-title">Entertainment & Enrichment</h2>
            <div className="azs-section-accent"></div>
            <p className="azs-section-subtitle">
              Onboard Vibrancy: From Immersive Cultural Evenings to
              Sophisticated Performances
            </p>
          </div>

          <div className="azs-entertainment-grid">
            {/* Azamara Card */}
            <div className="azs-entertainment-card azs-azamara-ent">
              <div className="azs-ent-header">
                <div className="azs-ent-icon-circle">
                  <Sparkles size={24} className="azs-ent-icon" />
                </div>
                <h3 className="azs-ent-title">Azamara Entertainment</h3>
              </div>
              <p className="azs-ent-intro">
                Entertainment features a vibrant mix of live music and local
                flair while keeping the atmosphere sophisticated and relaxed.
              </p>
              <div className="azs-ent-body">
                <h4 className="azs-ent-group-title">
                  Entertainment Focuses On:
                </h4>
                <ul className="azs-ent-list">
                  {[
                    "Live music",
                    "Guest performers",
                    "Cultural shows",
                    "Destination evenings",
                    "White Night celebrations",
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
                    Immersive destination evenings bring the local culture right
                    onboard.
                  </p>
                </div>
              </div>
            </div>

            {/* Oceania Card */}
            <div className="azs-entertainment-card azs-seabourn-ent">
              <div className="azs-ent-header">
                <div className="azs-ent-icon-circle">
                  <Music size={24} className="azs-ent-icon" />
                </div>
                <h3 className="azs-ent-title">Oceania Entertainment</h3>
              </div>
              <p className="azs-ent-intro">
                Oceania's entertainment shifts your focus toward education,
                culture, and upscale relaxation.
              </p>
              <div className="azs-ent-body">
                <h4 className="azs-ent-group-title">Entertainment Includes:</h4>
                <ul className="azs-ent-list">
                  {[
                    "Live music",
                    "Guest lecturers",
                    "Culinary demonstrations",
                    "Broadway-inspired performances",
                    "Enrichment programs",
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
                <div className="azs-ent-highlight-box azs-oceania-ent-highlight">
                  <p className="azs-ent-highlight-text">
                    Refined evenings built around learning and culinary culture.
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
              Spacious, Contemporary Suites vs. Comfortable Boutique Staterooms
            </p>
          </div>

          <div className="azs-suites-grid">
            {/* Oceania Card */}
            <div className="azs-suites-card azs-oceania-suites">
              <div className="azs-suites-image-wrap">
                <img
                  src={OceaniaSuiteImage}
                  alt="Oceania Cruises spacious suite"
                  className="azs-suites-img"
                />
                <span className="azs-suites-image-badge">
                  Newest Ships, Largest Suites
                </span>
              </div>

              <div className="azs-suites-content">
                <div className="azs-suites-card-header">
                  <div className="azs-suites-icon-circle">
                    <Award size={24} className="azs-suites-icon" />
                  </div>
                  <h3 className="azs-suites-title">Oceania Accommodations</h3>
                </div>
                <p className="azs-suites-intro">
                  Oceania's newer ships feature spacious, contemporary
                  accommodations with luxurious finishes.
                </p>
                <div className="azs-suites-body">
                  <h4 className="azs-suites-group-title">Options include:</h4>
                  <ul className="azs-suites-list">
                    {[
                      "Concierge Verandas",
                      "Penthouse Suites",
                      "Vista Suites",
                      "Oceania Suites",
                      "Owner's Suites",
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
                  <div className="azs-suites-highlight-box azs-oceania-suites-highlight">
                    <p className="azs-suites-highlight-text">
                      Its newest ships offer larger, more modern accommodations.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Azamara Card */}
            <div className="azs-suites-card azs-azamara-suites">
              <div className="azs-suites-image-wrap">
                <img
                  src={AzamaraCabinImage}
                  alt="Azamara boutique cabin"
                  className="azs-suites-img"
                />
                <span className="azs-suites-image-badge">Boutique & Cozy</span>
              </div>

              <div className="azs-suites-content">
                <div className="azs-suites-card-header">
                  <div className="azs-suites-icon-circle">
                    <Ship size={24} className="azs-suites-icon" />
                  </div>
                  <h3 className="azs-suites-title">Azamara Staterooms</h3>
                </div>
                <p className="azs-suites-intro">
                  Azamara staterooms feature comfortable furnishings and modern
                  amenities, from interior rooms to Owner's Suites.
                </p>
                <div className="azs-suites-body">
                  <h4 className="azs-suites-group-title">Options include:</h4>
                  <ul className="azs-suites-list">
                    {[
                      "Interior & Oceanview Staterooms",
                      "Veranda Staterooms",
                      "Club Continent Suites",
                      "Spa Suites",
                      "Owner's Suites",
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
                      Ideal for active, destination-focused cruisers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICE & PRICING ───────────────────────────────────────── */}
      <section
        className="Ejvs-pricing-section"
        id="service-pricing"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="Ejvs-container">
          <div className="Ejvs-section-header">
            <h2 className="Ejvs-section-title">Service &amp; Pricing</h2>

            <div className="Ejvs-section-accent"></div>

            <p className="Ejvs-section-subtitle">
              Both Azamara and Oceania deliver exceptional luxury experiences,
              combining attentive service with strong overall value.
            </p>
          </div>

          <div className="Ejvs-pricing-grid">
            {/* Service */}
            <div className="Ejvs-pricing-card Ejvs-explora-card">
              <div className="Ejvs-card-header">
                <div className="Ejvs-card-icon-wrap">
                  <Users size={24} className="Ejvs-card-icon" />
                </div>

                <h3 className="Ejvs-card-title">Service</h3>
              </div>

              <p className="Ejvs-card-intro">
                Both cruise lines deliver excellent personalized service.
              </p>

              <ul className="Ejvs-feature-list">
                {[
                  "Azamara's smaller guest count creates an especially intimate atmosphere.",
                  "Crew quickly learn guest preferences and provide highly personalized attention.",
                  "Oceania offers attentive service with an elegant yet approachable style.",
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
                  <strong>Winner:</strong> Tie — both cruise lines consistently
                  receive outstanding service reviews.
                </p>
              </div>
            </div>

            {/* Pricing */}
            <div className="Ejvs-pricing-card Ejvs-seabourn-card">
              <div className="Ejvs-card-header">
                <div className="Ejvs-card-icon-wrap">
                  <DollarSign size={24} className="Ejvs-card-icon" />
                </div>

                <h3 className="Ejvs-card-title">Pricing</h3>
              </div>

              <p className="Ejvs-card-intro">
                Both cruise lines occupy the premium luxury market.
              </p>

              <ul className="Ejvs-feature-list">
                {[
                  "Azamara often offers excellent value because many amenities are already included.",
                  "Oceania pricing varies by ship class, itinerary, and promotional offers.",
                  "Neither is inexpensive, but both provide excellent value for the onboard experience.",
                ].map((item, i) => (
                  <li key={i} className="Ejvs-feature-item">
                    <Star size={14} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="Ejvs-card-highlight">
                <p>
                  Both cruise lines are premium choices, with value depending on
                  the inclusions and itinerary that best match your travel
                  style.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FLEET OVERVIEW TABLE */}
      <section className="Asc-section Asc-bg-white" id="Asc-fleet">
        <div className="Asc-container">
          <div className="Asc-section-header">
            <h2 className="Asc-h2">Azamara vs Oceania Comparison</h2>
            <div className="Asc-accent-line"></div>
          </div>

          <div className="Asc-table-wrapper">
            <table className="Asc-fleet-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Azamara</th>
                  <th>Oceania</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>
                    <strong>Onboard Atmosphere</strong>
                  </td>
                  <td>Relaxed, no formal nights, livelier evenings</td>
                  <td>Elegant-casual, refined and quieter</td>
                </tr>

                <tr>
                  <td>
                    <strong>Pricing Structure</strong>
                  </td>
                  <td>Higher base fare, more included</td>
                  <td>Lower base fare, pay for extras</td>
                </tr>

                <tr>
                  <td>
                    <strong>Drinks</strong>
                  </td>
                  <td>Included in fare on most sailings</td>
                  <td>Not included in base fare</td>
                </tr>

                <tr>
                  <td>
                    <strong>Dining</strong>
                  </td>
                  <td>2 specialty restaurants, $50 surcharge applies</td>
                  <td>Nearly all specialty dining included</td>
                </tr>

                <tr>
                  <td>
                    <strong>Destination Immersion</strong>
                  </td>
                  <td>Late-night and overnight port stays, industry-leading</td>
                  <td>Strong, but fewer late/overnight calls</td>
                </tr>

                <tr>
                  <td>
                    <strong>Best For</strong>
                  </td>
                  <td>
                    Overnight port stays, drinks included, lively small ship
                  </td>
                  <td>
                    World-class included dining, longer voyages, world cruises
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* VIDEO SECTION */}
      {/* <section
        className="azs-video-section"
        id="azs-video"
        style={{ backgroundColor: "var(--bg-white)" }}
      >
        <div className="azs-container">
          <div className="azs-section-header">
            <h2 className="azs-section-title">Oceania Cruises Luxury Voyage</h2>
            <div className="azs-section-accent"></div>
            <p className="azs-video-intro">
              Hear directly from luxury cruise expert Angela Hughes as she
              shares her firsthand insights on choosing between Azamara and
              Oceania Cruises.
            </p>
          </div>
          <div className="azs-video-wrapper">
            <div className="azs-video-frame">
              <iframe
                src="https://drive.google.com/file/d/1zQXUruU1aN2m7y81ffD_6Ghw_5bel4Dd/preview"
                title="Azamara vs Oceania Cruises – Angela Hughes"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section> */}

      {/* WHO SHOULD CHOOSE */}
      <section className="Asc-section Asc-bg-soft" id="Asc-who">
        <div className="Asc-container">
          <div className="Asc-section-header">
            <h2 className="Asc-h2">Who Should Choose Which Cruise Line?</h2>
            <div className="Asc-accent-line"></div>
          </div>
          <div className="Asc-who-grid">
            {/* Azamara Card */}
            <div className="Asc-who-card Asc-who-yes">
              <h3 className="Asc-who-title">Who Should Choose Azamara?</h3>
              <p className="Asc-who-card-intro">
                Azamara is ideal for travelers who prioritize:
              </p>
              <ul className="Asc-who-list">
                {[
                  "Longer port stays",
                  "Overnight experiences",
                  "Smaller ports",
                  "Relaxed luxury",
                  "Destination immersion",
                  "Boutique ship atmosphere",
                ].map((item, i) => (
                  <li key={i} className="Asc-who-list-item">
                    <Check
                      size={16}
                      className="Asc-icon-green Asc-who-list-icon"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Oceania Card */}
            <div className="Asc-who-card Asc-who-no">
              <h3 className="Asc-who-title">Who Should Choose Oceania?</h3>
              <p className="Asc-who-card-intro">
                Oceania is perfect for guests who value:
              </p>
              <ul className="Asc-who-list">
                {[
                  "World-class cuisine",
                  "Elegant ships",
                  "Luxury accommodations",
                  "Culinary experiences",
                  "Enrichment programs",
                  "Comfortable sea days",
                ].map((item, i) => (
                  <li key={i} className="Asc-who-list-item">
                    <Check
                      size={16}
                      className="Asc-icon-green Asc-who-list-icon"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
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
                title: "Comparing Only Price",
                desc: "Luxury cruise value depends heavily on inclusions.",
              },
              {
                title: "Ignoring Destination Style",
                desc: "Azamara focuses heavily on port immersion.",
              },
              {
                title: "Overlooking Accommodation Expectations",
                desc: "Oceania's newer ships offer significantly larger, more modern suites overall.",
              },
              {
                title: "Choosing Without Expert Guidance",
                desc: "Luxury cruise experiences vary dramatically based on itinerary, suite category, and ship.",
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

      {/* VIDEO SECTION */}
      <section
        className="Asc-video-section"
        id="Asc-video"
        style={{ backgroundColor: "var(--bg-white)" }}
      >
        <div className="Asc-container">
          <div className="Asc-section-header">
            <h2 className="Asc-h2">Azamara Forward</h2>
            <div className="Asc-accent-line"></div>

            <p className="Asc-video-intro">
              Explore Azamara Forward and discover how the cruise line is
              entering a new era with refreshed ships, enhanced experiences, and
              immersive destination-focused luxury travel.
            </p>
          </div>

          <div className="Asc-video-wrapper">
            <div className="Asc-video-frame">
              <iframe
                src="https://www.youtube.com/embed/6lwQ6EiHI_g"
                title="Azamara Forward | A New Era for the Fleet"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL VERDICT */}
      <section
        className="Asc-section Asc-bg-white"
        id="Asc-verdict"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="Asc-container">
          <div className="Asc-section-header margin-large">
            <h2 className="Asc-h2">Which Cruise Line Offers Better Value?</h2>

            <div className="Asc-accent-line"></div>

            <p className="Asc-verdict-intro">
              Value depends entirely on your personal travel priorities.
            </p>
          </div>

          <div className="Asc-verdict-grid">
            {/* Azamara Column */}
            <div className="Asc-verdict-card Asc-verdict-azamara">
              <h3 className="Asc-verdict-card-title">
                Choose Azamara if you want:
              </h3>

              <ul className="Asc-verdict-list">
                {[
                  "More immersive itineraries",
                  "Longer stays in port",
                  "Included gratuities and beverages",
                  "Boutique luxury experience",
                ].map((item, i) => (
                  <li key={i} className="Asc-verdict-item">
                    <Check size={18} className="Asc-verdict-icon" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Oceania Column */}
            <div className="Asc-verdict-card Asc-verdict-regent">
              <h3 className="Asc-verdict-card-title">
                Choose Oceania if you want:
              </h3>

              <ul className="Asc-verdict-list">
                {[
                  "Outstanding dining",
                  "Newer ships",
                  "Spacious accommodations",
                  "Elegant onboard atmosphere",
                ].map((item, i) => (
                  <li key={i} className="Asc-verdict-item">
                    <Check size={18} className="Asc-verdict-icon" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="Asc-verdict-footer-box">
            <p className="Asc-verdict-footer-text">
              Both lines deliver excellent overall value for premium and luxury
              travelers.
            </p>
          </div>
        </div>
      </section>

      {/* WHY BOOK THROUGH A LUXURY TRAVEL ADVISOR? */}
      <section
        className="Avr-planning-section"
        id="Asc-luxury-travel-advisor"
        style={{ backgroundColor: "var(--bg-white)" }}
      >
        <div className="Asc-container">
          {/* HEADING */}
          <div className="Avr-planning-heading">
            <span className="Avr-planning-eyebrow">
              Personalized Cruise Planning
            </span>

            <h2 className="Avr-planning-title">
              Why Book Through a Luxury Travel Advisor?
            </h2>

            <div className="Avr-planning-divider"></div>
          </div>

          {/* TWO-PANEL GRID */}
          <div className="Avr-planning-grid">
            {/* LEFT PANEL */}
            <div className="Avr-planning-left">
              <div className="Avr-planning-left-deco">&ldquo;</div>

              <h3 className="Avr-planning-left-title">
                Create Your Perfect Journey
              </h3>

              <p className="Avr-planning-left-body">
                Choosing between two luxury cruise lines involves more than
                comparing prices. Expert guidance ensures you book the cruise
                that best matches your individual travel style.
              </p>

              <div className="Avr-planning-alert">
                <ShieldCheck size={18} className="Avr-planning-alert-icon" />

                <p className="Avr-planning-alert-text">
                  Expert guidance ensures you book the cruise that best matches
                  your travel style.
                </p>
              </div>
            </div>

            {/* RIGHT PANEL */}
            <div className="Avr-planning-right">
              <p className="Avr-planning-right-intro">
                A luxury travel advisor can help you:
              </p>

              <div className="Avr-planning-benefits-grid">
                {[
                  {
                    icon: <MapPinned size={18} />,
                    label: "Compare itineraries",
                  },
                  {
                    icon: <Ship size={18} />,
                    label: "Select the right ship",
                  },
                  {
                    icon: <Home size={18} />,
                    label: "Choose the best cabin location",
                  },
                  {
                    icon: <BadgePercent size={18} />,
                    label: "Access exclusive promotions",
                  },
                  {
                    icon: <Plane size={18} />,
                    label: "Arrange flights and hotels",
                  },
                  {
                    icon: <Compass size={18} />,
                    label: "Coordinate pre- and post-cruise experiences",
                  },
                  {
                    icon: <HeartHandshake size={18} />,
                    label:
                      "Provide ongoing support before and during your vacation",
                  },
                ].map((item, i) => (
                  <div key={i} className="Avr-planning-benefit-card">
                    <span className="Avr-planning-benefit-icon">
                      {item.icon}
                    </span>

                    <span className="Avr-planning-benefit-label">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>

              <p
                className="Avr-planning-right-intro"
                style={{ marginTop: "24px" }}
              >
                Professional planning helps maximize every aspect of your
                premium vacation experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── ANGELA HUGHES AUTHORITY BOX ────────────────────────────── */}
      <section className="Adg-expert-section" id="Asc-expert-insight">
        <div className="Asc-container">
          <div className="Adg-expert-heading">
            <span className="Adg-expert-eyebrow">Luxury Travel Expertise</span>
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
      <section className="Asc-section Asc-bg-white" id="Asc-faq">
        <div className="Asc-container">
          <div className="Asc-section-header">
            <h2 className="Asc-h2">Frequently Asked Questions</h2>
            <div className="Asc-accent-line"></div>
            <p className="Asc-faq-intro">
              Everything you need to know about choosing between Azamara and
              Oceania Cruises.
            </p>
          </div>
          <FAQ />
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────────── */}
      <section className="Asc-help-section">
        <div className="Asc-help-bg-wrap">
          <img
            src={AzamaraShip}
            alt="Azamara and Oceania Cruises sailing at sea"
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
                  Final Thoughts: <br /> Azamara vs. Oceania Cruises
                </h2>
                <div className="Asc-help-accent"></div>
              </div>

              <div className="Asc-help-grid">
                <div className="Asc-help-info">
                  <p className="Asc-help-intro">
                    Both Azamara and Oceania Cruises deliver exceptional
                    small-ship experiences, but they cater to slightly different
                    travel styles.
                    {!ctaReadMore && (
                      <button
                        onClick={() => setCtaReadMore(true)}
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

                  {ctaReadMore && (
                    <>
                      <br />
                      <p className="Asc-help-intro">
                        If your dream vacation revolves around immersive
                        destinations, longer port stays, and a boutique luxury
                        atmosphere, Azamara is an outstanding choice. Its
                        smaller ships and destination-focused itineraries allow
                        travelers to experience each region in greater depth.
                      </p>
                      <br />
                      <p className="Asc-help-intro">
                        If you're looking for world-class dining, elegant
                        accommodations, and refined luxury at sea, Oceania
                        Cruises stands out with one of the strongest culinary
                        programs in the cruise industry and beautifully designed
                        ships.
                      </p>
                      <br />
                      <p className="Asc-help-intro">
                        Whichever cruise line you choose, working with an
                        experienced luxury travel advisor ensures you select the
                        right itinerary, ship, and accommodations for your
                        travel goals — helping you make the most of your
                        investment and enjoy a seamless, unforgettable journey.
                        <button
                          onClick={() => setCtaReadMore(false)}
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
                    </>
                  )}

                  <div className="Asc-help-btn-container">
                    <Link
                      to="/contact"
                      className="Asc-help-cta-btn"
                      style={{ textDecoration: "none" }}
                    >
                      Start Planning Your Luxury Cruise
                      <ArrowRight size={18} />
                    </Link>
                  </div>
                </div>

                <div className="Asc-help-list-box">
                  <h3 className="Asc-help-list-title">
                    Our luxury planning services include:
                  </h3>

                  <ul className="Asc-help-bullets">
                    {[
                      "Compare Azamara and Oceania itineraries side by side",
                      "Recommend the ship and suite category that fits your travel style",
                      "Coordinate pre- and post-cruise hotel stays",
                      "Access exclusive promotions and amenities",
                      "Arrange flights, transfers, and private shore experiences",
                      "Provide ongoing support before and during your voyage",
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

              {/* Suggested Internal Links */}
              <div
                className="Asc-internal-links-section"
                style={{
                  marginTop: "60px",
                  borderTop: "1px solid rgba(255, 255, 255, 0.2)",
                  paddingTop: "40px",
                }}
              >
                <h3
                  style={{
                    color: "#fff",
                    fontFamily: "var(--font-display)",
                    fontSize: "24px",
                    fontWeight: "400",
                    marginBottom: "20px",
                  }}
                >
                  Explore More Luxury Cruise Guides
                </h3>
                <div
                  className="Asc-internal-links-grid"
                  style={{
                    display: "grid",
                    gridTemplateColumns:
                      "repeat(auto-fill, minmax(280px, 1fr))",
                    gap: "15px",
                  }}
                >
                  {[
                    {
                      label: "Azamara Cruises",
                      path: "/azamara-cruises",
                    },
                    {
                      label: "Azamara Ship Comparison",
                      path: "/azamara-ship-comparison",
                    },
                    {
                      label: "Azamara Cabins Guide",
                      path: "/azamara-cabins-guide",
                    },
                    {
                      label: "Azamara Dining Guide",
                      path: "/azamara-dining-guide",
                    },
                    {
                      label: "Azamara Alaska Cruises",
                      path: "/azamara-alaska-cruises",
                    },
                    {
                      label: "Azamara vs Viking Ocean Cruises",
                      path: "/azamara-vs-viking-ocean-cruises",
                    },
                  ].map((link, idx) => (
                    <Link
                      key={idx}
                      to={link.path}
                      style={{
                        color: "rgba(255, 255, 255, 0.8)",
                        fontSize: "16px",
                        textDecoration: "none",
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        transition: "color 0.2s ease",
                      }}
                      onMouseEnter={(e) => (e.target.style.color = "#fff")}
                      onMouseLeave={(e) =>
                        (e.target.style.color = "rgba(255, 255, 255, 0.8)")
                      }
                    >
                      <ArrowRight size={14} style={{ flexShrink: 0 }} />
                      <span>{link.label}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AzamaraVsOceania;
