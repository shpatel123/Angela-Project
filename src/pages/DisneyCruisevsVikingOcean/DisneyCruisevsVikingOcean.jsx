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
  Crown,
  Theater,
  Smile,
  Flame,
  BookOpen,
  Mic,
  Globe,
  GraduationCap,
} from "lucide-react";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela2.jpeg";
import HeroImage1 from "../../assets/DisneyCruisevsVikingOcean/VikingHero.webp";
import HeroImage2 from "../../assets/DisneyCruisevsVikingOcean/disney-castaway-cay-private-island-aerial-beach-lagoon.jpg";
import HeroImage4 from "../../assets/DisneyCruisevsVikingOcean/disney-castaway-cay-private-island-aerial-drone-view-cruise-ship.jpg";
import DisneyCruise from "../../assets/DisneyCruisevsVikingOcean/disney-cruise-ship-docked-at-castaway-cay-aerial-view.jpg";
import DisneyDestinations  from "../../assets/DisneyCruisevsVikingOcean/disney-cruise-sunset-ocean-voyage-luxury-family-cruise-experience.jpg";
import DisneyDining  from "../../assets/DisneyCruisevsVikingOcean/romantic-fine-dining-on-disney-cruise.jpg";
import DisneySuites  from "../../assets/DisneyCruisevsVikingOcean/disney-wish-the-rose-lounge-adults-only-luxury-seating.jpg";
import DisneyOcean  from "../../assets/DisneyCruisevsVikingOcean/disney-wish-enchante-restaurant-luxury-booth-seating-adults.jpg";
import DisneyCruiseExperience  from "../../assets/DisneyCruisevsVikingOcean/disney-castaway-cay-private-island-tropical-beachfront-relaxation.jpg";

import VikingCruise from "../../assets/DisneyCruisevsVikingOcean/Viking-Cruises.webp";
import VikingDining from "../../assets/DisneyCruisevsVikingOcean/Viking-Dining.jpg";
import VikingSuites from "../../assets/DisneyCruisevsVikingOcean/Viking-Suites.jpg";
import VikingOcean from "../../assets/DisneyCruisevsVikingOcean/Viking-Ocean.jpg";
import VikingOceanCruise from "../../assets/DisneyCruisevsVikingOcean/Viking-Ocean-Cruises.jpg";

import { Helmet } from "react-helmet-async";

import "./DisneyCruisevsVikingOcean.css";

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
        "Luxury travel agency specializing in cruise vacations, luxury ocean cruises, family travel, river cruises, expedition cruises, and personalized travel planning.",
    },

    {
      "@type": "TravelAgency",
      "@id": "https://www.tripsandships.com/#travelagency",
      name: "Trips & Ships Luxury Travel",
      url: "https://www.tripsandships.com",
      description:
        "Luxury cruise and travel experts helping travelers compare cruise lines, plan luxury vacations, family cruises, and destination-focused travel experiences worldwide.",
    },

    {
      "@type": "WebPage",
      "@id":
        "https://www.tripsandships.com/disney-cruise-vs-viking-ocean-cruises",
      url: "https://www.tripsandships.com/disney-cruise-vs-viking-ocean-cruises",
      name: "Disney Cruise vs Viking Ocean Cruises",
      description:
        "Compare Disney Cruise Line and Viking Ocean Cruises. Explore differences in destinations, dining, entertainment, accommodations, pricing, luxury level, and onboard experience.",
      isPartOf: {
        "@id": "https://www.tripsandships.com/#website",
      },
      about: [
        {
          "@type": "Organization",
          name: "Disney Cruise Line",
        },
        {
          "@type": "Organization",
          name: "Viking Ocean Cruises",
        },
      ],
    },

    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.tripsandships.com/disney-cruise-vs-viking-ocean-cruises#breadcrumb",
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
          name: "Disney Cruise vs Viking Ocean Cruises",
          item: "https://www.tripsandships.com/disney-cruise-vs-viking-ocean-cruises",
        },
      ],
    },

    {
      "@type": "ItemList",
      "@id":
        "https://www.tripsandships.com/disney-cruise-vs-viking-ocean-cruises#comparison",
      name: "Disney Cruise Line vs Viking Ocean Cruises Comparison",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "Organization",
            name: "Disney Cruise Line",
            description:
              "Premium family-focused cruise line featuring Disney entertainment, character experiences, Broadway-style productions, and multi-generational vacations.",
          },
        },
        {
          "@type": "ListItem",
          position: 2,
          item: {
            "@type": "Organization",
            name: "Viking Ocean Cruises",
            description:
              "Adults-only luxury cruise line focused on cultural enrichment, destination immersion, educational programming, and sophisticated travel experiences.",
          },
        },
      ],
    },

    {
      "@type": "FAQPage",
      "@id":
        "https://www.tripsandships.com/disney-cruise-vs-viking-ocean-cruises#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Is Disney Cruise Line more luxurious than Viking Ocean Cruises?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Viking Ocean Cruises is generally considered a luxury cruise line, while Disney Cruise Line is a premium family cruise brand focused on entertainment and family experiences.",
          },
        },

        {
          "@type": "Question",
          name: "Does Viking Ocean Cruises allow children?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Viking Ocean Cruises is adults-only and does not allow guests under 18 years old.",
          },
        },

        {
          "@type": "Question",
          name: "Which cruise line is better for families?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Disney Cruise Line is the better choice for families because it offers youth programs, character experiences, family entertainment, and activities for all ages.",
          },
        },

        {
          "@type": "Question",
          name: "Which cruise line is better for couples?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most couples seeking a luxury adults-only experience prefer Viking Ocean Cruises because of its quiet atmosphere, cultural enrichment, and destination-focused travel.",
          },
        },

        {
          "@type": "Question",
          name: "Is Disney Cruise Line worth the higher price?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For families who value Disney entertainment, character experiences, and family-focused activities, many travelers consider Disney Cruise Line worth the premium price.",
          },
        },

        {
          "@type": "Question",
          name: "What is included on Viking Ocean Cruises?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Many Viking fares include one excursion in every port, Wi-Fi, specialty dining, beer and wine with meals, and educational programming.",
          },
        },

        {
          "@type": "Question",
          name: "Which cruise line has better food?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Viking Ocean Cruises generally receives stronger reviews for fine dining and destination-inspired cuisine, while Disney Cruise Line excels at family-friendly dining experiences.",
          },
        },

        {
          "@type": "Question",
          name: "Which cruise line has better entertainment?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Disney Cruise Line leads in entertainment with Broadway-style productions, character experiences, deck parties, and family programming, while Viking focuses on educational enrichment.",
          },
        },

        {
          "@type": "Question",
          name: "Are Viking ships smaller than Disney ships?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Viking Ocean ships are generally smaller and more intimate than many mainstream cruise vessels, creating a more relaxed and personalized atmosphere.",
          },
        },

        {
          "@type": "Question",
          name: "Which cruise line is better for first-time cruisers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Disney Cruise Line is excellent for families and first-time cruisers traveling with children, while Viking Ocean Cruises is ideal for adults seeking a relaxed introduction to luxury cruising.",
          },
        },

        {
          "@type": "Question",
          name: "Which cruise line offers more educational experiences?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Viking Ocean Cruises offers significantly more educational enrichment through destination lectures, cultural presentations, historians, and guest experts.",
          },
        },

        {
          "@type": "Question",
          name: "Which cruise line offers better value?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Disney offers strong value for families seeking entertainment and character experiences, while Viking often delivers better overall value for adults due to its extensive included amenities.",
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
      q: "Is Disney Cruise Line more luxurious than Viking?",
      a: "No. Viking is generally considered a luxury cruise line, while Disney is a premium family cruise brand.",
    },
    {
      q: "Does Viking allow children?",
      a: "No. Viking Ocean Cruises is adults-only and does not allow guests under 18.",
    },
    {
      q: "Which cruise line is better for families?",
      a: "Disney Cruise Line is the clear choice for families with children.",
    },
    {
      q: "Which cruise line is better for couples?",
      a: "Most couples seeking a luxury, adults-only experience prefer Viking Ocean Cruises.",
    },
    {
      q: "Is Disney worth the higher price?",
      a: "For families who value Disney entertainment and family experiences, many travelers believe it is worth the premium.",
    },
    {
      q: "What is included on Viking?",
      a: "Many Viking fares include excursions, Wi-Fi, specialty dining, and beverages with meals.",
    },
    {
      q: "Which line has better food?",
      a: "Viking generally receives stronger reviews for fine dining, while Disney excels in family-friendly dining experiences.",
    },
    {
      q: "Which line has better entertainment?",
      a: "Disney leads in entertainment, while Viking leads in educational enrichment.",
    },
    {
      q: "Are Viking ships smaller?",
      a: "Yes. Viking ships are generally smaller and more intimate than many mainstream cruise vessels.",
    },
    {
      q: "Which cruise line is better for first-time cruisers?",
      a: "Disney is excellent for families, while Viking is ideal for adults seeking a relaxed introduction to luxury cruising.",
    },
    {
      q: "What is the difference in onboard atmosphere between Disney and Viking?",
      a: "Disney cruises have a lively, high-energy atmosphere centered on family activities and character interactions. Viking cruises feature a quiet, sophisticated, and serene Scandinavian-inspired atmosphere tailored for relaxation.",
    },
    {
      q: "How do the staterooms/accommodations compare?",
      a: "Disney staterooms are built with families in mind, often offering split bathrooms and flexible sleeping configurations. Viking staterooms emphasize Scandinavian elegance and comfort, and every single cabin on the ship includes a private veranda.",
    },
    {
      q: "Are specialty dining restaurants included on both lines?",
      a: "On Viking, all specialty dining restaurants are included in the base cruise fare at no extra cost. On Disney, fine dining specialty venues (like Palo and Remy) require an additional cover charge.",
    },
    {
      q: "Are shore excursions included in the base fare?",
      a: "Viking includes one complimentary shore excursion in every port of call. Disney Cruise Line offers shore excursions (Port Adventures) for an additional fee.",
    },
    {
      q: "How do beverage packages compare between Disney and Viking?",
      a: "Viking includes beer, house wine, and soft drinks with lunch and dinner. Disney includes sodas, coffee, and tea at the 24-hour beverage stations, but alcohol and specialty coffees require an extra charge.",
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
const DisneyCruisevsVikingOcean = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [readMore, setReadMore] = useState(false);
  const images = [HeroImage2,HeroImage1,HeroImage4];

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
          Disney Cruise vs Viking Ocean Cruises | Which Cruise Line Is Right for
          You?
        </title>
        <meta
          name="title"
          content="Disney Cruise vs Viking Ocean Cruises Comparison Guide"
        />
        <meta
          name="description"
          content="Compare Disney Cruise Line and Viking Ocean Cruises. Explore differences in destinations, ships, pricing, onboard experience, dining, entertainment, family travel, and luxury travel to determine which cruise line best fits your travel style."
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
            Disney Cruise vs Viking Ocean Cruises: Two Exceptional Cruise
            Experiences for Very Different Travelers
          </h1>

          <p>
            Disney Cruise Line and Viking Ocean Cruises consistently rank among
            the highest-rated cruise brands in the world.
          </p>

          {/* READ MORE CONTENT */}
          {readMore && (
            <>
              <p>However, these cruise lines serve very different audiences.</p>

              <p>
                Disney Cruise Line focuses on family entertainment, immersive
                storytelling, and multi-generational vacations, while Viking
                Ocean Cruises caters primarily to adults seeking cultural
                enrichment, destination-focused travel, and sophisticated luxury
                experiences.
              </p>

              <p>
                The right choice depends entirely on your travel goals, who
                you're traveling with, and the type of vacation experience
                you're seeking.
              </p>

              <p>
                This comprehensive comparison explores the differences between
                Disney Cruise Line and Viking Ocean Cruises across destinations,
                accommodations, dining, entertainment, pricing, and overall
                value.
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
      {/* QUICK COMPARISON OVERVIEW */}
      <section className="Asc-section Asc-bg-soft" id="Asc-fleet">
        <div className="Asc-container">
          <div className="Asc-section-header">
            <h2 className="Asc-h2">Quick Comparison Overview</h2>
            <div className="Asc-accent-line"></div>
          </div>

          <div className="Asc-table-wrapper">
            <table className="Asc-fleet-table">
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Disney Cruise Line</th>
                  <th>Viking Ocean Cruises</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>
                    <strong>Best For</strong>
                  </td>
                  <td>Families & Multi-Generational Travel</td>
                  <td>Adults & Couples</td>
                </tr>

                <tr>
                  <td>
                    <strong>Minimum Age</strong>
                  </td>
                  <td>All Ages</td>
                  <td>18+ Only</td>
                </tr>

                <tr>
                  <td>
                    <strong>Atmosphere</strong>
                  </td>
                  <td>Fun & Family-Focused</td>
                  <td>Relaxed & Sophisticated</td>
                </tr>

                <tr>
                  <td>
                    <strong>Ship Size</strong>
                  </td>
                  <td>Mid-Size Family Ships</td>
                  <td>Mid-Size Luxury Ships</td>
                </tr>

                <tr>
                  <td>
                    <strong>Entertainment</strong>
                  </td>
                  <td>Broadway Shows & Disney Characters</td>
                  <td>Cultural Enrichment</td>
                </tr>

                <tr>
                  <td>
                    <strong>Dining</strong>
                  </td>
                  <td>Family-Friendly Variety</td>
                  <td>Destination-Inspired Cuisine</td>
                </tr>

                <tr>
                  <td>
                    <strong>Included Amenities</strong>
                  </td>
                  <td>Moderate</td>
                  <td>Extensive Inclusions</td>
                </tr>

                <tr>
                  <td>
                    <strong>Luxury Level</strong>
                  </td>
                  <td>Premium Family Cruise</td>
                  <td>Luxury Adult Cruise</td>
                </tr>

                <tr>
                  <td>
                    <strong>Educational Experiences</strong>
                  </td>
                  <td>Limited</td>
                  <td>Strong Focus</td>
                </tr>

                <tr>
                  <td>
                    <strong>Ideal Traveler</strong>
                  </td>
                  <td>Families with Children</td>
                  <td>Couples, Retirees, Lifelong Learners</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* VIDEO SECTION */}
      <section
        className="azs-video-section"
        id="azs-video"
        style={{ backgroundColor: "var(--bg-white)" }}
      >
        <div className="azs-container">
          <div className="azs-section-header">
            <h2 className="azs-h2">Disney Cruise Line</h2>

            <p className="azs-video-intro">
              Hear directly from luxury travel expert Angela Hughes as she
              shares insights into Disney Cruise Line, family cruising, and what
              makes Disney one of the most popular cruise brands in the world.
            </p>
          </div>

          <div className="azs-video-wrapper">
            <div className="azs-video-frame">
              <iframe
                src="https://www.youtube.com/embed/q29bYL4Nb5U"
                title="Disney Cruise Line – Angela Hughes"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      {/* DISNEY CRUISE LINE OVERVIEW */}
      <section className="azs-overview-section" id="azs-disney-overview">
        <div className="azs-container">
          <div className="Avs-verdict-header">
            <h2 className="Avs-verdict-title">Disney Cruise Line Overview</h2>
            <div className="Avs-verdict-accent"></div>
          </div>

          <div className="azs-overview-grid">
            {/* Left Side: Image */}
            <div className="azs-image-col">
              <img
                src={DisneyCruise}
                alt="Disney Cruise Line family cruise experience"
                className="azs-overview-img"
              />
              <div className="azs-image-overlay">
                <span className="azs-image-badge">Family Cruises</span>
                <h3 className="azs-image-title">
                  Immersive Family Experiences
                </h3>
              </div>
            </div>

            {/* Right Side: Content */}
            <div className="azs-content-col">
              <p className="azs-intro">
                Disney Cruise Line is designed around immersive family
                experiences.
              </p>

              <div className="azs-sub-grid">
                {/* Group 1 */}
                <div className="azs-info-card">
                  <h4 className="azs-group-title">The cruise line combines:</h4>

                  <ul className="azs-list">
                    {[
                      "Disney storytelling",
                      "Character experiences",
                      "Broadway-style entertainment",
                      "Family activities",
                      "Youth programs",
                      "Family-friendly dining",
                    ].map((item, i) => (
                      <li key={i} className="azs-list-item">
                        <Check size={16} className="azs-list-icon" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Group 2 */}
                <div className="azs-info-card">
                  <h4 className="azs-group-title">
                    Disney appeals strongly to:
                  </h4>

                  <ul className="azs-list">
                    {[
                      "Families with children",
                      "Grandparents traveling with grandchildren",
                      "Multi-generational groups",
                      "Disney enthusiasts",
                      "First-time cruisers",
                    ].map((item, i) => (
                      <li key={i} className="azs-list-item">
                        <ArrowRight size={16} className="azs-list-icon" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Group 3 */}
                <div className="azs-info-card azs-recommend-card">
                  Disney has built its reputation on exceptional service and
                  family-centered experiences.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VIKING OCEAN CRUISES OVERVIEW */}
      <section
        className="azs-overview-section"
        id="azs-viking-overview"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="azs-container">
          <div className="Avs-verdict-header">
            <h2 className="Avs-verdict-title">Viking Ocean Cruises Overview</h2>
            <div className="Avs-verdict-accent"></div>
          </div>

          <div className="azs-overview-grid">
            {/* Right Side: Content */}
            <div className="azs-content-col">
              <p className="azs-intro">
                Viking Ocean Cruises was created specifically for adult
                travelers.
              </p>

              <div className="azs-sub-grid">
                {/* Group 1 */}
                <div className="azs-info-card">
                  <h4 className="azs-group-title">
                    The cruise line focuses on:
                  </h4>

                  <ul className="azs-list">
                    {[
                      "Cultural immersion",
                      "Educational enrichment",
                      "Destination-focused itineraries",
                      "Scandinavian-inspired luxury",
                      "Included experiences",
                      "Quiet sophistication",
                    ].map((item, i) => (
                      <li key={i} className="azs-list-item">
                        <Check size={16} className="azs-list-icon" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Group 2 */}
                <div className="azs-info-card">
                  <h4 className="azs-group-title">
                    Viking appeals strongly to:
                  </h4>

                  <ul className="azs-list">
                    {[
                      "Couples",
                      "Retirees",
                      "Empty nesters",
                      "Lifelong learners",
                      "Luxury travelers",
                      "Experienced cruisers",
                    ].map((item, i) => (
                      <li key={i} className="azs-list-item">
                        <ArrowRight size={16} className="azs-list-icon" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Group 3 */}
                <div className="azs-info-card azs-recommend-card">
                  <h4 className="azs-group-title">Adults-Only Experience:</h4>

                  <div className="azs-quote-box">
                    <p className="azs-quote-text">
                      All Viking Ocean ships are adults-only. No guests under 18
                      are permitted, creating a quieter and more refined onboard
                      atmosphere.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Left Side: Image */}
            <div className="azs-image-col" style={{ height: "100%" }}>
              <img
                src={VikingCruise}
                alt="Viking Ocean Cruises luxury ship overview"
                className="azs-overview-img"
              />
              <div className="azs-image-overlay">
                <span className="azs-image-badge">Adults-Only Luxury</span>
                <h3 className="azs-image-title">
                  Cultural Enrichment & Exploration
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DESTINATIONS AND ITINERARIES */}
      <section className="azs-experience-section" id="azs-experience">
        <div className="azs-container">
          <div className="azs-section-header">
            <h2 className="azs-section-title">Destinations and Itineraries</h2>
            <div className="azs-section-accent"></div>
          </div>

          <div className="azs-experience-grid">
            {/* Disney Card */}
            <div className="azs-experience-card azs-azamara-exp">
              <div className="azs-exp-image-wrap">
                <img
                    src={DisneyDestinations}
                  alt="Disney Cruise Line destinations"
                  className="azs-exp-img"
                />
                <div className="azs-exp-image-badge">
                  Family-Focused Destinations
                </div>
              </div>

              <div className="azs-exp-content">
                <div className="azs-exp-header">
                  <Ship size={24} className="azs-exp-icon" />
                  <h3 className="azs-exp-title">Disney Cruise Destinations</h3>
                </div>

                <div className="azs-exp-body">
                  <div className="azs-exp-group">
                    <h4 className="azs-exp-group-title">
                      Popular itineraries include:
                    </h4>

                    <ul className="azs-exp-list">
                      {[
                        "Caribbean",
                        "Bahamas",
                        "Alaska",
                        "Europe",
                        "Mediterranean",
                        "Mexico",
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
                    Disney's private island destinations remain major
                    attractions.
                  </p>

                  <div className="azs-exp-divider"></div>
                </div>
              </div>
            </div>

            {/* Viking Card */}
            <div className="azs-experience-card azs-seabourn-exp">
              <div className="azs-exp-image-wrap">
                <img
                  src={VikingOcean}
                  alt="Viking Ocean Cruises destinations"
                  className="azs-exp-img"
                />
                <div className="azs-exp-image-badge">Cultural Exploration</div>
              </div>

              <div className="azs-exp-content">
                <div className="azs-exp-header">
                  <Ship size={24} className="azs-exp-icon" />
                  <h3 className="azs-exp-title">Viking Ocean Destinations</h3>
                </div>

                <div className="azs-exp-body">
                  <div className="azs-exp-group">
                    <h4 className="azs-exp-group-title">
                      Popular regions include:
                    </h4>

                    <ul className="azs-exp-list">
                      {[
                        "Mediterranean",
                        "Northern Europe",
                        "British Isles",
                        "Scandinavia",
                        "Asia",
                        "Australia",
                        "South America",
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
                    Many itineraries include overnight stays and deeper
                    destination immersion.
                  </p>

                  <div className="azs-exp-divider"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DINING EXPERIENCE */}
      <section className="azs-dining-section" id="azs-dining">
        <div className="azs-container">
          <div className="azs-section-header">
            <h2 className="azs-section-title">Dining Experience</h2>
            <div className="azs-section-accent"></div>
            <p className="azs-section-subtitle">
              Family-Focused Themed Dining vs Destination-Inspired Culinary
              Experiences
            </p>
          </div>

          <div className="azs-dining-grid">
            {/* Disney Card */}
            <div className="azs-dining-card azs-seabourn-dining">
              <div className="azs-dining-image-wrap">
                <img
                    src={DisneyDining}
                  alt="Disney Cruise Line dining experience"
                  className="azs-dining-img"
                />
                <div className="azs-dining-badge-wrapper">
                  <span className="azs-dining-badge azs-seabourn-badge">
                    Family Dining
                  </span>
                </div>
              </div>

              <div className="azs-dining-content">
                <div className="azs-dining-header">
                  <div className="azs-dining-icon-circle">
                    <ChefHat size={24} className="azs-dining-icon" />
                  </div>
                  <h3 className="azs-dining-title">Disney Cruise Dining</h3>
                </div>

                <p className="azs-dining-intro">
                  Disney's rotational dining system allows guests to experience
                  multiple themed restaurants throughout their cruise.
                </p>

                <div className="azs-dining-body">
                  <h4 className="azs-dining-group-title">
                    Dining highlights include:
                  </h4>

                  <ul className="azs-dining-list">
                    {[
                      "Family-friendly menus",
                      "Character dining experiences",
                      "Casual dining options",
                      "Specialty restaurants",
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
                      Dining is often part of the entertainment experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Viking Card */}
            <div className="azs-dining-card azs-azamara-dining">
              <div className="azs-dining-image-wrap">
                <img
                  src={VikingDining}
                  alt="Viking Ocean Cruises dining experience"
                  className="azs-dining-img"
                />
                <div className="azs-dining-badge-wrapper">
                  <span className="azs-dining-badge azs-azamara-badge">
                    Destination-Inspired Cuisine
                  </span>
                </div>
              </div>

              <div className="azs-dining-content">
                <div className="azs-dining-header">
                  <div className="azs-dining-icon-circle">
                    <Utensils size={24} className="azs-dining-icon" />
                  </div>
                  <h3 className="azs-dining-title">Viking Ocean Dining</h3>
                </div>

                <p className="azs-dining-intro">
                  Viking emphasizes destination-inspired cuisine that reflects
                  the regions guests are exploring.
                </p>

                <div className="azs-dining-body">
                  <h4 className="azs-dining-group-title">
                    Dining highlights include:
                  </h4>

                  <ul className="azs-dining-list">
                    {[
                      "Regional specialties",
                      "Fine dining",
                      "Included specialty restaurants",
                      "Wine and beer with meals",
                      "High-quality ingredients",
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
                      The dining experience reflects Viking's educational and
                      cultural focus.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ATMOSPHERE AND ONBOARD EXPERIENCE */}
      <section className="azs-entertainment-section" id="azs-entertainment">
        <div className="azs-container">
          <div className="azs-section-header">
            <h2 className="azs-section-title">
              Atmosphere and Onboard Experience
            </h2>
            <div className="azs-section-accent"></div>
            <p className="azs-section-subtitle">
              Family Entertainment vs Adults-Only Enrichment
            </p>
          </div>

          <div className="azs-entertainment-grid">
            {/* Disney Card */}
            <div className="azs-entertainment-card azs-azamara-ent">
              <div className="azs-ent-header">
                <div className="azs-ent-icon-circle">
                  <Sparkles size={24} className="azs-ent-icon" />
                </div>
                <h3 className="azs-ent-title">Disney Cruise Line</h3>
              </div>

              <p className="azs-ent-intro">
                Disney ships are lively, energetic, and designed to keep
                families engaged from morning until night.
              </p>

              <div className="azs-ent-body">
                <h4 className="azs-ent-group-title">Guests enjoy:</h4>

                <ul className="azs-ent-list">
                  {[
                    "Character meet-and-greets",
                    "Family game shows",
                    "Deck parties",
                    "Themed events",
                    "Youth clubs",
                    "Interactive experiences",
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
                    Families rarely run out of things to do.
                  </p>
                </div>

                <div className="azs-ent-divider"></div>

                <h4 className="azs-ent-group-title">Best For:</h4>
                <p className="azs-ent-intro">
                  Families seeking entertainment-focused vacations.
                </p>
              </div>
            </div>

            {/* Viking Card */}
            <div className="azs-entertainment-card azs-seabourn-ent">
              <div className="azs-ent-header">
                <div className="azs-ent-icon-circle">
                  <Music size={24} className="azs-ent-icon" />
                </div>
                <h3 className="azs-ent-title">Viking Ocean Cruises</h3>
              </div>

              <p className="azs-ent-intro">
                Viking offers a completely different environment focused on
                enrichment, exploration, and relaxation.
              </p>

              <div className="azs-ent-body">
                <h4 className="azs-ent-group-title">Guests enjoy:</h4>

                <ul className="azs-ent-list">
                  {[
                    "Quiet lounges",
                    "Educational lectures",
                    "Cultural presentations",
                    "Destination enrichment",
                    "Relaxation",
                    "Scenic cruising",
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
                    The focus is on learning, exploration, and comfort rather
                    than nonstop entertainment.
                  </p>
                </div>

                <div className="azs-ent-divider"></div>

                <h4 className="azs-ent-group-title">Best For:</h4>
                <p className="azs-ent-intro">
                  Adults seeking a peaceful and intellectually engaging
                  experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ACCOMMODATIONS */}
      <section className="azs-suites-section" id="azs-suites">
        <div className="azs-container">
          <div className="azs-section-header">
            <h2 className="azs-section-title">Accommodations</h2>
            <div className="azs-section-accent"></div>
            <p className="azs-section-subtitle">
              Family-Friendly Comfort vs Sophisticated Adults-Only Luxury
            </p>
          </div>

          <div className="azs-suites-grid">
            {/* Disney Card */}
            <div className="azs-suites-card azs-seabourn-suites">
              <div className="azs-suites-image-wrap">
                <img
                    src={DisneySuites}
                  alt="Disney Cruise Line family stateroom"
                  className="azs-suites-img"
                />
                <span className="azs-suites-image-badge">
                  Family-Friendly Cabins
                </span>
              </div>

              <div className="azs-suites-content">
                <div className="azs-suites-card-header">
                  <div className="azs-suites-icon-circle">
                    <Award size={24} className="azs-suites-icon" />
                  </div>
                  <h3 className="azs-suites-title">Disney Cruise Staterooms</h3>
                </div>

                <p className="azs-suites-intro">
                  Disney offers some of the most family-friendly cabins in the
                  cruise industry.
                </p>

                <div className="azs-suites-body">
                  <h4 className="azs-suites-group-title">Features include:</h4>

                  <ul className="azs-suites-list">
                    {[
                      "Family-focused layouts",
                      "Split bathrooms on many ships",
                      "Family suites",
                      "Concierge accommodations",
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
                      Disney cabins are designed to maximize comfort for
                      families.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Viking Card */}
            <div className="azs-suites-card azs-azamara-suites">
              <div className="azs-suites-image-wrap">
                <img
                  src={VikingSuites}
                  alt="Viking Ocean Cruises luxury stateroom"
                  className="azs-suites-img"
                />
                <span className="azs-suites-image-badge">
                  Scandinavian Luxury
                </span>
              </div>

              <div className="azs-suites-content">
                <div className="azs-suites-card-header">
                  <div className="azs-suites-icon-circle">
                    <Ship size={24} className="azs-suites-icon" />
                  </div>
                  <h3 className="azs-suites-title">Viking Ocean Staterooms</h3>
                </div>

                <p className="azs-suites-intro">
                  Viking cabins emphasize sophistication, comfort, and elegant
                  Scandinavian design.
                </p>

                <div className="azs-suites-body">
                  <h4 className="azs-suites-group-title">
                    Every stateroom includes:
                  </h4>

                  <ul className="azs-suites-list">
                    {[
                      "Private veranda",
                      "Scandinavian design",
                      "Luxury bedding",
                      "Spacious bathrooms",
                      "Modern elegance",
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
                      Viking cabins are designed for refined comfort and
                      relaxation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ENTERTAINMENT COMPARISON */}
      <section
        className="dve-entertainment-compare-section"
        id="dve-entertainment-comparison"
      >
        <div className="dve-container">
          <div className="dve-section-header">
            <h2
              className="dve-section-title"
              style={{ color: "var(--bg-white)" }}
            >
              Entertainment Comparison
            </h2>
            <div className="dve-section-accent"></div>
            <p
              className="dve-section-subtitle"
              style={{ color: "var(--bg-white)" }}
            >
              Broadway-Quality Productions vs Intellectually Engaging Enrichment
            </p>
          </div>

          <div className="dve-compare-grid">
            {/* Disney Card */}
            <div className="dve-compare-card dve-disney-card">
              <div className="dve-card-badge">Disney Cruise Line</div>
              <div className="dve-card-icon-header">
                <Sparkles className="dve-card-header-icon" size={32} />
                <h3>Disney Cruise Entertainment</h3>
              </div>
              <p className="dve-card-intro">
                Disney arguably offers some of the best entertainment at sea.
              </p>

              <div className="dve-highlights-list">
                <div className="dve-highlight-item">
                  <div className="dve-highlight-icon-box">
                    <Theater size={20} />
                  </div>
                  <div className="dve-highlight-info">
                    <h4>Broadway-Quality Productions</h4>
                    <p>Award-winning theatrical performances.</p>
                  </div>
                </div>

                <div className="dve-highlight-item">
                  <div className="dve-highlight-icon-box">
                    <Smile size={20} />
                  </div>
                  <div className="dve-highlight-info">
                    <h4>Character Experiences</h4>
                    <p>Meet beloved Disney characters throughout the voyage.</p>
                  </div>
                </div>

                <div className="dve-highlight-item">
                  <div className="dve-highlight-icon-box">
                    <Crown size={20} />
                  </div>
                  <div className="dve-highlight-info">
                    <h4>Deck Parties</h4>
                    <p>Interactive family celebrations and themed events.</p>
                  </div>
                </div>

                <div className="dve-highlight-item">
                  <div className="dve-highlight-icon-box">
                    <Flame size={20} />
                  </div>
                  <div className="dve-highlight-info">
                    <h4>Fireworks at Sea</h4>
                    <p>Available on select itineraries.</p>
                  </div>
                </div>

                <div className="dve-highlight-item">
                  <div className="dve-highlight-icon-box">
                    <Users size={20} />
                  </div>
                  <div className="dve-highlight-info">
                    <h4>Youth Programs</h4>
                    <p>Age-specific activities supervised by trained staff.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Viking Card */}
            <div className="dve-compare-card dve-viking-card">
              <div className="dve-card-badge">Viking Cruises</div>
              <div className="dve-card-icon-header">
                <BookOpen className="dve-card-header-icon" size={32} />
                <h3>Viking Entertainment</h3>
              </div>
              <p className="dve-card-intro">
                Viking focuses on enrichment rather than traditional cruise
                entertainment.
              </p>

              <div className="dve-highlights-list">
                <div className="dve-highlight-item">
                  <div className="dve-highlight-icon-box">
                    <Mic size={20} />
                  </div>
                  <div className="dve-highlight-info">
                    <h4>Destination Lectures</h4>
                    <p>Experts provide historical and cultural insights.</p>
                  </div>
                </div>

                <div className="dve-highlight-item">
                  <div className="dve-highlight-icon-box">
                    <Users size={20} />
                  </div>
                  <div className="dve-highlight-info">
                    <h4>Guest Speakers</h4>
                    <p>Academics, historians, and regional specialists.</p>
                  </div>
                </div>

                <div className="dve-highlight-item">
                  <div className="dve-highlight-icon-box">
                    <Music size={20} />
                  </div>
                  <div className="dve-highlight-info">
                    <h4>Classical Performances</h4>
                    <p>Music and cultural programming.</p>
                  </div>
                </div>

                <div className="dve-highlight-item">
                  <div className="dve-highlight-icon-box">
                    <Globe size={20} />
                  </div>
                  <div className="dve-highlight-info">
                    <h4>Cultural Demonstrations</h4>
                    <p>Local experiences tied to destinations.</p>
                  </div>
                </div>

                <div className="dve-highlight-item">
                  <div className="dve-highlight-icon-box">
                    <GraduationCap size={20} />
                  </div>
                  <div className="dve-highlight-info">
                    <h4>Educational Programming</h4>
                    <p>Designed for curious travelers.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING COMPARISON */}
      <section
        className="Ejvs-pricing-section"
        id="Ejvs-pricing"
        style={{ backgroundColor: "var(--bg-white)" }}
      >
        <div className="Ejvs-container">
          {/* Section Header */}
          <div className="Ejvs-section-header">
            <h2 className="Ejvs-section-title">Pricing Comparison</h2>
            <div className="Asc-accent-line"></div>

            <p className="Ejvs-section-subtitle">
              Premium Family Vacation Pricing vs Inclusive Adult Luxury Value
            </p>
          </div>

          {/* Main Grid */}
          <div className="Ejvs-pricing-grid">
            {/* Disney Card */}
            <div className="Ejvs-pricing-card Ejvs-explora-card">
              <div className="Ejvs-card-header">
                <div className="Ejvs-card-icon-wrap">
                  <Sparkles size={24} className="Ejvs-card-icon" />
                </div>

                <h3 className="Ejvs-card-title">Disney Cruise Pricing</h3>
              </div>

              <p className="Ejvs-card-intro">
                Disney is often among the most expensive family cruise lines,
                but many travelers feel the unique Disney experience justifies
                the premium.
              </p>

              <ul className="Ejvs-feature-list">
                {[
                  "Alcohol",
                  "Specialty dining",
                  "Shore excursions",
                  "Gratuities",
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
                <p>Additional costs may apply beyond the base cruise fare.</p>
              </div>
            </div>

            {/* Viking Card */}
            <div className="Ejvs-pricing-card Ejvs-seabourn-card">
              <div className="Ejvs-card-header">
                <div className="Ejvs-card-icon-wrap">
                  <Award size={24} className="Ejvs-card-icon" />
                </div>

                <h3 className="Ejvs-card-title">Viking Ocean Pricing</h3>
              </div>

              <p className="Ejvs-card-intro">
                Viking often appears more expensive initially but includes
                significantly more value within the cruise fare.
              </p>

              <ul className="Ejvs-feature-list">
                {[
                  "One excursion in every port",
                  "Wi-Fi",
                  "Specialty dining",
                  "Beer and wine with meals",
                  "Cultural programming",
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
                <p>Many included amenities help reduce overall trip costs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WINNER COMPARISON */}
      <section className="dve-winner-section" id="dve-winner-comparison">
        <div className="dve-container">
          <div className="dve-section-header">
            <h2 className="dve-section-title">
              Travel Categories: The Clear Winners
            </h2>
            <div className="dve-section-accent"></div>
            <p className="dve-section-subtitle">
              How Disney Cruise Line and Viking Ocean Cruises Compare for
              Different Travel Styles
            </p>
          </div>

          <div className="dve-winner-grid">
            {/* Disney Winner Card */}
            <div className="dve-winner-card dve-disney-winner">
              <div className="dve-winner-image-wrap">
                <img
                    src={DisneyOcean}
                  alt="Disney Cruise Line family vacation experience"
                  className="dve-winner-img"
                />
                <span className="dve-winner-badge">
                  Family Travel: Clear Winner
                </span>
              </div>
              <div className="dve-winner-content">
                <h3 className="dve-winner-title">Disney Cruise Line</h3>
                <p className="dve-winner-intro">
                  For families traveling with children, Disney is one of the
                  strongest cruise options available.
                </p>

                <div className="dve-winner-divider"></div>

                <h4 className="dve-advantages-title">Advantages Include:</h4>
                <ul className="dve-advantages-list">
                  <li>
                    <Check size={18} className="dve-advantage-icon" />
                    <span>Kids clubs</span>
                  </li>
                  <li>
                    <Check size={18} className="dve-advantage-icon" />
                    <span>Family entertainment</span>
                  </li>
                  <li>
                    <Check size={18} className="dve-advantage-icon" />
                    <span>Character interactions</span>
                  </li>
                  <li>
                    <Check size={18} className="dve-advantage-icon" />
                    <span>Family-focused activities</span>
                  </li>
                  <li>
                    <Check size={18} className="dve-advantage-icon" />
                    <span>Multi-generational appeal</span>
                  </li>
                </ul>

                <div className="dve-winner-footer">
                  <span className="dve-footer-badge">
                    Winner: Disney Cruise Line
                  </span>
                </div>
              </div>
            </div>

            {/* Viking Winner Card */}
            <div className="dve-winner-card dve-viking-winner">
              <div className="dve-winner-image-wrap">
                <img
                  src={VikingOceanCruise}
                  alt="Viking Ocean Cruises luxury adult travel experience"
                  className="dve-winner-img"
                />
                <span className="dve-winner-badge">
                  Adult Travel: Clear Winner
                </span>
              </div>
              <div className="dve-winner-content">
                <h3 className="dve-winner-title">Viking Ocean Cruises</h3>
                <p className="dve-winner-intro">
                  For couples and adults without children, Viking provides a
                  more refined experience.
                </p>

                <div className="dve-winner-divider"></div>

                <h4 className="dve-advantages-title">Advantages Include:</h4>
                <ul className="dve-advantages-list">
                  <li>
                    <Check size={18} className="dve-advantage-icon" />
                    <span>Adults-only environment</span>
                  </li>
                  <li>
                    <Check size={18} className="dve-advantage-icon" />
                    <span>Cultural enrichment</span>
                  </li>
                  <li>
                    <Check size={18} className="dve-advantage-icon" />
                    <span>Quiet atmosphere</span>
                  </li>
                  <li>
                    <Check size={18} className="dve-advantage-icon" />
                    <span>Luxury accommodations</span>
                  </li>
                  <li>
                    <Check size={18} className="dve-advantage-icon" />
                    <span>Educational programming</span>
                  </li>
                </ul>

                <div className="dve-winner-footer">
                  <span className="dve-footer-badge">
                    Winner: Viking Ocean Cruises
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE COMPARISON */}
      <section className="Ejsc-service-section" id="Ejsc-service">
        <div className="Ejsc-container">
          <div className="Ejsc-section-header">
            <h2 className="Ejsc-section-title">Service Comparison</h2>
            <div className="Asc-accent-line"></div>
            <p className="Ejsc-section-subtitle">
              Exceptional Family-Focused Service vs Refined Adults-Only Luxury
              Service
            </p>
          </div>

          <div className="Ejsc-service-grid">
            {/* Disney Service Card */}
            <div className="Ejsc-service-card Ejsc-explora-service">
              <div className="Ejsc-card-header">
                <div className="Ejsc-card-icon-wrap">
                  <Sparkles size={24} className="Ejsc-card-icon" />
                </div>
                <h3 className="Ejsc-card-title">Disney Service Strengths</h3>
              </div>

              <p className="Ejsc-card-intro">
                Disney is renowned for delivering highly personalized service
                with a strong focus on families and creating memorable
                experiences.
              </p>

              <div className="Ejsc-service-tags">
                {[
                  "Family-Focused Attention",
                  "Exceptional Child Engagement",
                  "Personalized Experiences",
                ].map((tag, i) => (
                  <span key={i} className="Ejsc-service-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Viking Service Card */}
            <div className="Ejsc-service-card Ejsc-seabourn-service">
              <div className="Ejsc-card-header">
                <div className="Ejsc-card-icon-wrap">
                  <Crown size={24} className="Ejsc-card-icon" />
                </div>
                <h3 className="Ejsc-card-title">Viking Service Strengths</h3>
              </div>

              <p className="Ejsc-card-intro">
                Viking delivers sophisticated luxury service with attentive
                staff and a strong emphasis on comfort, personalization, and
                refinement.
              </p>

              <div className="Ejsc-service-tags">
                {[
                  "Refined Luxury Service",
                  "Personalized Attention",
                  "High Staff-to-Guest Ratios",
                ].map((tag, i) => (
                  <span key={i} className="Ejsc-service-tag Ejsc-tag-highlight">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="Ejvs-summary-box">
            <h3
              className="Ejsc-result-title"
              style={{ color: "var(--bg-white)", marginBottom: "20px" }}
            >
              Result: Tie
            </h3>
            <p className="Ejvs-summary-text">
              Both cruise lines consistently receive excellent reviews for
              service and excel within their respective market segments.
            </p>
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
            <h2 className="Asc-h2">Viking Ocean Cruises</h2>
            <div className="Asc-accent-line"></div>

            <p className="Asc-video-intro">
              Discover Viking Ocean Cruises and explore the adults-only cruise
              experience known for cultural enrichment, destination-focused
              itineraries, Scandinavian-inspired design, and sophisticated
              luxury at sea.
            </p>
          </div>

          <div className="Asc-video-wrapper">
            <div className="Asc-video-frame">
              <iframe
                src="https://www.youtube.com/embed/3eVrJWoWJko"
                title="Viking Ocean Cruises"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* WHICH CRUISE LINE SHOULD YOU CHOOSE */}
      <section
        className="Asc-section Asc-bg-white"
        id="Asc-verdict"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="Asc-container">
          <div className="Asc-section-header margin-large">
            <h2 className="Asc-h2">Which Cruise Line Should You Choose?</h2>

            <div className="Asc-accent-line"></div>

            <p className="Asc-verdict-intro">
              Both Disney Cruise Line and Viking Ocean Cruises deliver
              exceptional experiences, but they cater to very different types of
              travelers.
            </p>
          </div>

          <div className="Asc-verdict-grid">
            {/* Disney Column */}
            <div className="Asc-verdict-card Asc-verdict-azamara">
              <h3 className="Asc-verdict-card-title">
                Choose Disney Cruise Line If:
              </h3>

              <ul className="Asc-verdict-list">
                {[
                  "You're traveling with children",
                  "You love Disney entertainment",
                  "You want a family-focused vacation",
                  "Multi-generational travel is important",
                  "Character experiences matter",
                  "Entertainment is a priority",
                ].map((item, i) => (
                  <li key={i} className="Asc-verdict-item">
                    <Check size={18} className="Asc-verdict-icon" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Viking Column */}
            <div className="Asc-verdict-card Asc-verdict-regent">
              <h3 className="Asc-verdict-card-title">
                Choose Viking Ocean Cruises If:
              </h3>

              <ul className="Asc-verdict-list">
                {[
                  "You're traveling without children",
                  "You prefer a quieter atmosphere",
                  "Educational experiences appeal to you",
                  "Cultural immersion matters",
                  "You value included amenities",
                  "Luxury and destination exploration are priorities",
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

      {/* ANGELA HUGHES AUTHORITY BOX */}
      <section className="Adg-expert-section" id="Asc-expert-insight">
        <div className="Asc-container">
          {/* TOP HEADING */}
          <div className="Adg-expert-heading">
            <span className="Adg-expert-eyebrow">Luxury Travel Authority</span>

            <h2 className="Adg-expert-title">Meet Angela Hughes</h2>

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
      {/* BEST FOR */}
      <section className="Asc-section Asc-bg-white" id="Asc-who">
        <div className="Asc-container">
          <div className="Asc-section-header">
            <h2 className="Asc-h2">Best For</h2>

            <div className="Asc-accent-line"></div>
          </div>

          <div className="Asc-who-grid">
            <div className="Asc-who-card Asc-who-yes">
              <h3 className="Asc-who-title">Disney Cruise Line</h3>

              <ul className="Asc-who-list">
                {[
                  "Families",
                  "Grandparents and grandchildren",
                  "Disney fans",
                  "First-time cruisers",
                  "Multi-generational groups",
                ].map((item, i) => (
                  <li key={i}>
                    <Check size={16} className="Asc-icon-green" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="Asc-who-card Asc-who-no">
              <h3 className="Asc-who-title">Viking Ocean Cruises</h3>

              <ul className="Asc-who-list">
                {[
                  "Couples",
                  "Retirees",
                  "Luxury travelers",
                  "Lifelong learners",
                  "Cultural explorers",
                  "Adults seeking relaxation",
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
      {/* FINAL VERDICT */}
      <section className="Asc-help-section">
        <div className="Asc-help-bg-wrap">
          <img
            src={DisneyCruiseExperience}
            alt="Disney Cruise Line vs Viking Ocean Cruises"
            className="Asc-help-bg-img"
          />
          <div className="Asc-help-overlay"></div>
        </div>

        <div className="Asc-container">
          <div className="Asc-help-card">
            <div className="Asc-help-content">
              <div className="Asc-help-header">
                <span className="Asc-help-eyebrow">Final Verdict</span>

                <h2 className="Asc-help-h2">
                  Disney Cruise Line vs Viking Ocean Cruises: Which Is Right for
                  You?
                </h2>

                <div className="Asc-help-accent"></div>
              </div>

              <div className="Asc-help-grid">
                <div className="Asc-help-info">
                  <p className="Asc-help-intro">
                    Disney Cruise Line and Viking Ocean Cruises are both
                    exceptional, but they are designed for completely different
                    travelers.
                  </p>

                  <p className="Asc-help-intro">
                    Disney Cruise Line delivers magical family vacations filled
                    with entertainment, character experiences, and activities
                    for all ages.
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
                      Viking Ocean Cruises provides sophisticated adults-only
                      travel focused on culture, education, enrichment, and
                      destination immersion.
                      <br />
                      <br />
                      The best choice depends on who is traveling and what kind
                      of experience you want.
                      <br />
                      <br />
                      If you're traveling with children or grandchildren, Disney
                      Cruise Line is difficult to beat.
                      <br />
                      <br />
                      If you're seeking a luxury adults-only cruise centered on
                      exploration and lifelong learning, Viking Ocean Cruises is
                      one of the strongest options in the industry.
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
                      Explore Luxury Cruise Options
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>

                <div className="Asc-help-list-box">
                  <h3 className="Asc-help-list-title">Key Takeaways:</h3>

                  <ul className="Asc-help-bullets">
                    {[
                      "Disney Cruise Line is ideal for families and multi-generational travel.",
                      "Viking Ocean Cruises is designed exclusively for adults.",
                      "Disney leads in entertainment and family experiences.",
                      "Viking excels in cultural enrichment and destination-focused travel.",
                      "Both offer premium experiences tailored to different travel styles.",
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
                    Need help choosing the right cruise line? Trips &amp; Ships
                    Luxury Travel provides personalized guidance to help
                    travelers select the cruise experience that best matches
                    their interests, travel goals, and budget.
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

export default DisneyCruisevsVikingOcean;
