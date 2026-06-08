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
  Mic,
  Globe,
  Coffee,
  Film,
} from "lucide-react";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela3.jpeg";
// import HeroImage1 from "../../assets/DisneyCruisevsVikingOcean/VikingHero.webp";
// import HeroImage2 from "../../assets/Azamarashipcomparison/Seabournhero2.webp";
// import HeroImage4 from "../../assets/Azamarashipcomparison/Small_Ship.webp";

// import VikingCruise from "../../assets/DisneyCruisevsVikingOcean/Viking-Cruises.webp";
// import VikingDining from "../../assets/DisneyCruisevsVikingOcean/Viking-Dining.jpg";
// import VikingSuites from "../../assets/DisneyCruisevsVikingOcean/Viking-Suites.jpg";
// import VikingOcean from "../../assets/DisneyCruisevsVikingOcean/Viking-Ocean.jpg";
// import VikingOceanCruise from "../../assets/DisneyCruisevsVikingOcean/Viking-Ocean-Cruises.jpg";

import { Helmet } from "react-helmet-async";
import "../DisneyCruisevsVikingOcean/DisneyCruisevsVikingOcean.css";

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
        "Luxury travel agency specializing in cruise vacations, family travel, Alaska cruises, expedition cruises, river cruises, and custom luxury travel experiences.",
    },

    {
      "@type": "TravelAgency",
      "@id": "https://www.tripsandships.com/#travelagency",
      name: "Trips & Ships Luxury Travel",
      url: "https://www.tripsandships.com",
      description:
        "Luxury travel experts helping travelers compare cruise lines and plan exceptional family, luxury, and destination-focused cruise vacations.",
    },

    {
      "@type": "WebPage",
      "@id": "https://www.tripsandships.com/disney-alaska-vs-princess-cruises",
      url: "https://www.tripsandships.com/disney-alaska-vs-princess-cruises",
      name: "Disney Alaska vs Princess Cruises",
      description:
        "Compare Disney Alaska Cruises and Princess Cruises Alaska sailings. Explore differences in family experiences, Glacier Bay access, entertainment, dining, excursions, pricing, and overall value.",
      about: [
        {
          "@type": "Organization",
          name: "Disney Cruise Line",
        },
        {
          "@type": "Organization",
          name: "Princess Cruises",
        },
      ],
    },

    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.tripsandships.com/disney-alaska-vs-princess-cruises#breadcrumb",
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
          name: "Cruise Comparisons",
          item: "https://www.tripsandships.com/cruise-comparisons",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Disney Alaska vs Princess Cruises",
          item: "https://www.tripsandships.com/disney-alaska-vs-princess-cruises",
        },
      ],
    },

    {
      "@type": "FAQPage",
      "@id":
        "https://www.tripsandships.com/disney-alaska-vs-princess-cruises#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Is Disney or Princess better for Alaska?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Disney is generally better for families with younger children, while Princess is often preferred by travelers seeking a deeper Alaska experience.",
          },
        },
        {
          "@type": "Question",
          name: "Which cruise line is better for grandparents and grandchildren?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Disney Cruise Line is often the preferred choice for grandparents traveling with younger grandchildren because of its family-focused entertainment and activities.",
          },
        },
        {
          "@type": "Question",
          name: "Does Princess Cruises offer Glacier Bay itineraries?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Princess Cruises offers Glacier Bay itineraries and is widely recognized for its Alaska expertise and destination-focused experiences.",
          },
        },
        {
          "@type": "Question",
          name: "Is Disney Alaska worth the extra cost?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For families who value Disney entertainment, service, and multigenerational experiences, many travelers feel the premium pricing is justified.",
          },
        },
        {
          "@type": "Question",
          name: "Which cruise line has better entertainment?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Disney Cruise Line is widely regarded as the leader in cruise entertainment, offering Broadway-style productions, character experiences, and family programming.",
          },
        },
        {
          "@type": "Question",
          name: "Which cruise line offers better Alaska educational experiences?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Princess Cruises generally provides more in-depth destination enrichment, Alaska history presentations, wildlife education, and cultural programming.",
          },
        },
        {
          "@type": "Question",
          name: "Does Disney Cruise Line offer Alaska land tours?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Disney primarily focuses on cruise vacations, while Princess Cruises offers extensive land-and-sea vacation packages that include destinations such as Denali National Park.",
          },
        },
        {
          "@type": "Question",
          name: "Which cruise line is better for wildlife viewing?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Both cruise lines provide excellent wildlife viewing opportunities, though Princess often offers more Alaska-focused experiences and excursion options.",
          },
        },
        {
          "@type": "Question",
          name: "Is Princess Cruises good for families?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Princess Cruises welcomes families, but its onboard experience is more destination-focused and less entertainment-centered than Disney Cruise Line.",
          },
        },
        {
          "@type": "Question",
          name: "Which cruise line offers better value?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Princess Cruises generally offers stronger value for travelers whose primary goal is exploring Alaska through immersive itineraries and land programs.",
          },
        },
      ],
    },

    {
      "@type": "ItemList",
      "@id":
        "https://www.tripsandships.com/disney-alaska-vs-princess-cruises#comparison",
      name: "Disney Alaska Cruise vs Princess Alaska Cruise Comparison",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Family Experience",
          description:
            "Disney Cruise Line excels with family entertainment, youth clubs, character experiences, and multigenerational travel.",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Alaska Expertise",
          description:
            "Princess Cruises offers decades of Alaska experience, destination enrichment, and extensive land-and-sea vacation programs.",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Entertainment",
          description:
            "Disney Cruise Line leads with Broadway-style productions, family activities, and immersive entertainment.",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Educational Value",
          description:
            "Princess Cruises provides deeper educational programming focused on wildlife, glaciers, conservation, and Alaska history.",
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Land Tours",
          description:
            "Princess Cruises is recognized as an industry leader in Alaska land-and-sea vacation packages, including Denali experiences.",
        },
        {
          "@type": "ListItem",
          position: 6,
          name: "Overall Value",
          description:
            "Princess Cruises often delivers stronger value for destination-focused travelers, while Disney delivers premium family experiences.",
        },
      ],
    },

    {
      "@type": "Article",
      "@id":
        "https://www.tripsandships.com/disney-alaska-vs-princess-cruises#article",
      headline:
        "Disney Alaska vs Princess Cruises: Which Alaska Cruise Delivers the Better Experience?",
      description:
        "A detailed comparison of Disney Alaska Cruises and Princess Cruises Alaska itineraries, including family travel, entertainment, glacier viewing, educational programs, dining, accommodations, and value.",
      author: {
        "@id": "https://www.tripsandships.com/#organization",
      },
      publisher: {
        "@id": "https://www.tripsandships.com/#organization",
      },
      mainEntityOfPage:
        "https://www.tripsandships.com/disney-alaska-vs-princess-cruises",
      keywords: [
        "Disney Alaska vs Princess Cruises",
        "Alaska Cruise Comparison",
        "Disney Alaska Cruise Review",
        "Princess Alaska Cruises Review",
        "Best Alaska Cruise for Families",
        "Disney vs Princess Alaska",
      ],
    },
  ],
};
function FAQ() {
  const [open, setOpen] = useState(null);

  const faqData = [
    {
      q: "Is Disney or Princess better for Alaska?",
      a: "Disney is generally better for families with younger children, while Princess is often preferred by travelers seeking a deeper Alaska experience.",
    },
    {
      q: "Which cruise line is better for grandparents and grandchildren?",
      a: "Disney Cruise Line is often the top choice for grandparents traveling with younger grandchildren.",
    },
    {
      q: "Does Princess have Glacier Bay itineraries?",
      a: "Yes. Princess offers several Glacier Bay itineraries and is known for its strong Alaska programming.",
    },
    {
      q: "Is Disney Alaska worth the extra cost?",
      a: "For families who value Disney entertainment, service, and multigenerational experiences, many believe the premium pricing is justified.",
    },
    {
      q: "Which cruise line has better entertainment?",
      a: "Disney is widely considered the leader in cruise entertainment.",
    },
    {
      q: "Which line offers better Alaska education?",
      a: "Princess generally provides more in-depth destination enrichment and educational programming.",
    },
    {
      q: "Does Disney offer Alaska land tours?",
      a: "Disney focuses primarily on cruise experiences, while Princess offers extensive land-and-sea vacation packages.",
    },
    {
      q: "Which line is better for wildlife viewing?",
      a: "Both provide excellent wildlife opportunities, though Princess often offers more comprehensive Alaska-focused experiences.",
    },
    {
      q: "Is Princess good for families?",
      a: "Yes. Princess welcomes families, but its onboard experience is more destination-focused than Disney's.",
    },
    {
      q: "Which cruise line offers better value?",
      a: "Princess generally offers stronger value for travelers whose primary goal is exploring Alaska.",
    },
    {
      q: "Do Disney Alaska Cruises visit Glacier Bay National Park?",
      a: "Some Disney Alaska itineraries include Glacier Bay National Park, while others visit destinations such as Endicott Arm and Dawes Glacier. It is important to review the specific itinerary before booking, as glacier destinations can vary by sailing.",
    },
    {
      q: "Which Alaska cruise is better for first-time visitors?",
      a: "Both are excellent choices for first-time Alaska travelers. Disney is often preferred by families seeking a balance of sightseeing and onboard entertainment, while Princess is ideal for travelers who want a more destination-focused Alaska experience.",
    },
    {
      q: "Are shore excursions included on Disney and Princess Alaska cruises?",
      a: "No. Most shore excursions are available at an additional cost on both cruise lines. Popular excursions include whale watching, glacier tours, dog sledding experiences, fishing trips, and wildlife viewing adventures.",
    },
    {
      q: "Which cruise line has better cabins for families?",
      a: "Disney Cruise Line is generally considered better for families thanks to larger staterooms, split-bathroom designs, family-friendly layouts, and a greater selection of connecting cabins that accommodate larger groups.",
    },
    {
      q: "Can I combine an Alaska cruise with a visit to Denali National Park?",
      a: "Princess Cruises offers some of the industry's most popular Alaska Cruisetour packages, which combine an Alaska cruise with visits to Denali National Park, scenic rail journeys, and wilderness lodges. Disney's Alaska cruises primarily focus on the cruise experience and do not offer the same extensive land-tour options.",
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
const DisneyAlaskavsPrincessCruises = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [readMore, setReadMore] = useState(false);
  const [readMoreEducation, setReadMoreEducation] = useState(false);
  <p className="azs-exp-highlight">
    <strong>Winner: Princess</strong>
    <br />
    Adults and lifelong learners often appreciate Princess's educational depth.
  </p>;
  const images = [];

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
          Disney Alaska vs Princess Cruises | Which Alaska Cruise Is Best?
        </title>
        <meta
          name="title"
          content="Disney Alaska vs Princess Cruises Comparison Guide"
        />
        <meta
          name="description"
          content="Compare Disney Alaska Cruises and Princess Cruises Alaska sailings. Explore differences in family experiences, Glacier Bay access, entertainment, dining, excursions, pricing, and overall value to find the best Alaska cruise for your travel style."
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
            Disney Alaska vs Princess Cruises: Which Alaska Cruise Delivers the
            Better Experience?
          </h1>

          <p>
            Alaska is one of the most spectacular cruise destinations in the
            world.
          </p>

          {/* READ MORE CONTENT */}
          {readMore && (
            <>
              <p>
                Towering glaciers, abundant wildlife, breathtaking scenery, and
                fascinating frontier history make it a bucket-list destination
                for travelers of all ages.
              </p>

              <p>
                Two of the most popular options for Alaska cruises are Disney
                Cruise Line and Princess Cruises.
              </p>

              <p>
                While both cruise lines offer unforgettable journeys through
                Alaska's Inside Passage, they provide very different vacation
                experiences.
              </p>

              <p>
                Disney focuses on family entertainment, multigenerational
                travel, and Disney magic, while Princess emphasizes destination
                immersion, Alaska expertise, and comprehensive land-and-sea
                adventures.
              </p>

              <p>
                The right choice depends on who is traveling and what kind of
                Alaska experience you want.
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
                  <th>Disney Alaska Cruise</th>
                  <th>Princess Alaska Cruise</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>
                    <strong>Best For</strong>
                  </td>
                  <td>Families & Grandparents</td>
                  <td>Alaska Enthusiasts & Adults</td>
                </tr>

                <tr>
                  <td>
                    <strong>Family Experience</strong>
                  </td>
                  <td>Outstanding</td>
                  <td>Good</td>
                </tr>

                <tr>
                  <td>
                    <strong>Alaska Expertise</strong>
                  </td>
                  <td>Strong</td>
                  <td>Exceptional</td>
                </tr>

                <tr>
                  <td>
                    <strong>Entertainment</strong>
                  </td>
                  <td>Industry Leading</td>
                  <td>Moderate</td>
                </tr>

                <tr>
                  <td>
                    <strong>Glacier Viewing</strong>
                  </td>
                  <td>Excellent</td>
                  <td>Excellent</td>
                </tr>

                <tr>
                  <td>
                    <strong>Educational Programs</strong>
                  </td>
                  <td>Good</td>
                  <td>Excellent</td>
                </tr>

                <tr>
                  <td>
                    <strong>Land Tours</strong>
                  </td>
                  <td>Limited</td>
                  <td>Industry Leader</td>
                </tr>

                <tr>
                  <td>
                    <strong>Kids Programs</strong>
                  </td>
                  <td>Outstanding</td>
                  <td>Good</td>
                </tr>

                <tr>
                  <td>
                    <strong>Multigenerational Travel</strong>
                  </td>
                  <td>Exceptional</td>
                  <td>Very Good</td>
                </tr>

                <tr>
                  <td>
                    <strong>Value</strong>
                  </td>
                  <td>Premium Pricing</td>
                  <td>Better Overall Value</td>
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
            <div className="azs-accent-line"></div>

            <p className="azs-video-intro">
              Disney Cruise Line offers a vacation experience unlike any other,
              bringing families together through world-class entertainment,
              exceptional dining, immersive Disney storytelling, and
              unforgettable destinations.
            </p>
          </div>

          <div className="azs-video-wrapper">
            <div className="azs-video-frame">
              <iframe
                src="https://www.youtube.com/embed/yw922nyPxZs"
                title="Disney Cruise Line"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      {/* DISNEY ALASKA CRUISES OVERVIEW */}
      <section className="azs-overview-section" id="azs-disney-overview">
        <div className="azs-container">
          <div className="Avs-verdict-header">
            <h2 className="Avs-verdict-title">
              Disney Alaska Cruises Overview
            </h2>
            <div className="Avs-verdict-accent"></div>
          </div>

          <div className="azs-overview-grid">
            {/* Left Side: Image */}
            <div className="azs-image-col">
              <img
                // src={HeroImage1}
                alt="Disney Alaska cruise experience"
                className="azs-overview-img"
              />
              <div className="azs-image-overlay">
                <span className="azs-image-badge">Disney Alaska Cruises</span>
                <h3 className="azs-image-title">Family Adventures in Alaska</h3>
              </div>
            </div>

            {/* Right Side: Content */}
            <div className="azs-content-col">
              <p className="azs-intro">
                Disney Cruise Line brings its signature family experience to
                Alaska.
              </p>

              <div className="azs-sub-grid">
                {/* Group 1 */}
                <div className="azs-info-card">
                  <h4 className="azs-group-title">Disney combines:</h4>

                  <ul className="azs-list">
                    {[
                      "Alaska scenery",
                      "Family entertainment",
                      "Character experiences",
                      "Broadway-style shows",
                      "Family activities",
                      "Exceptional service",
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
                    Disney Alaska cruises appeal most to:
                  </h4>

                  <ul className="azs-list">
                    {[
                      "Families with children",
                      "Grandparents traveling with grandchildren",
                      "Disney fans",
                      "First-time Alaska cruisers",
                      "Multigenerational travelers",
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
                  For many families, Disney transforms Alaska into both an
                  educational adventure and a magical vacation.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* PRINCESS CRUISES ALASKA OVERVIEW */}
      <section
        className="azs-overview-section"
        id="azs-princess-overview"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="azs-container">
          <div className="Avs-verdict-header">
            <h2 className="Avs-verdict-title">
              Princess Cruises Alaska Overview
            </h2>
            <div className="Avs-verdict-accent"></div>
          </div>

          <div className="azs-overview-grid">
            {/* Right Side: Content */}
            <div className="azs-content-col">
              <p className="azs-intro">
                Princess Cruises is widely regarded as one of Alaska's most
                experienced cruise operators.
              </p>

              <div className="azs-sub-grid">
                {/* Group 1 */}
                <div className="azs-info-card">
                  <h4 className="azs-group-title">Princess specializes in:</h4>

                  <ul className="azs-list">
                    {[
                      "Glacier viewing",
                      "Wildlife experiences",
                      "Alaska education",
                      "Land and sea vacations",
                      "National Park access",
                      "Destination immersion",
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
                  <h4 className="azs-group-title">Princess appeals most to:</h4>

                  <ul className="azs-list">
                    {[
                      "Couples",
                      "Retirees",
                      "Nature lovers",
                      "Alaska-focused travelers",
                      "Families seeking destination-driven travel",
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
                  <div className="azs-quote-box">
                    <p className="azs-quote-text">
                      Princess is often considered one of the strongest Alaska
                      cruise brands in the industry.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Left Side: Image */}
            <div className="azs-image-col" style={{ height: "100%" }}>
              <img
                // src={VikingCruise}
                alt="Princess Cruises Alaska experience"
                className="azs-overview-img"
              />
              <div className="azs-image-overlay">
                <span className="azs-image-badge">Alaska Experts</span>
                <h3 className="azs-image-title">
                  Glacier Viewing & Destination Immersion
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* EDUCATIONAL VALUE */}
      <section className="azs-experience-section" id="azs-experience">
        <div className="azs-container">
          <div className="azs-section-header">
            <h2 className="azs-section-title">Educational Value</h2>
            <div className="azs-section-accent"></div>
          </div>

          <div className="azs-experience-grid">
            {/* Disney Card */}
            <div className="azs-experience-card azs-azamara-exp">
              <div className="azs-exp-image-wrap">
                <img
                  // src={DisneyAlaskaEducation}
                  alt="Disney Alaska educational experiences"
                  className="azs-exp-img"
                />
                <div className="azs-exp-image-badge">
                  Family Learning Experiences
                </div>
              </div>

              <div className="azs-exp-content">
                <div className="azs-exp-header">
                  <Ship size={24} className="azs-exp-icon" />
                  <h3 className="azs-exp-title">Disney Alaska Cruises</h3>
                </div>

                <div className="azs-exp-body">
                  <div className="azs-exp-group">
                    <h4 className="azs-exp-group-title">
                      Disney incorporates:
                    </h4>

                    <ul className="azs-exp-list">
                      {[
                        "Nature presentations",
                        "Junior Ranger activities",
                        "Alaska-focused learning",
                        "Wildlife education programs",
                        "Glacier and ecosystem presentations",
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
                    These experiences appeal particularly to children and
                    families.
                  </p>

                  <div className="azs-exp-divider"></div>
                </div>
              </div>
            </div>

            {/* Princess Card */}
            <div className="azs-experience-card azs-seabourn-exp">
              <div className="azs-exp-image-wrap">
                <img
                  //   src={VikingOcean}
                  alt="Princess Alaska educational programs"
                  className="azs-exp-img"
                />
                <div className="azs-exp-image-badge">
                  Destination Enrichment
                </div>
              </div>

              <div className="azs-exp-content">
                <div className="azs-exp-header">
                  <Ship size={24} className="azs-exp-icon" />
                  <h3 className="azs-exp-title">Princess Alaska Cruises</h3>
                </div>

                <div className="azs-exp-body">
                  <div className="azs-exp-group">
                    <h4 className="azs-exp-group-title">Topics may include:</h4>

                    <ul className="azs-exp-list">
                      {[
                        "Wildlife",
                        "Glaciology",
                        "Native cultures",
                        "Alaska history",
                        "Conservation",
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
                    Princess offers deeper educational programming and
                    destination enrichment throughout the voyage.
                  </p>

                  <div className="azs-exp-divider"></div>
                  {readMoreEducation && (
                    <p className="azs-exp-highlight">
                      <strong>Winner: Princess</strong>
                      <br />
                      Adults and lifelong learners often appreciate Princess's
                      educational depth.
                    </p>
                  )}

                  <div>
                    <button
                      onClick={() => setReadMoreEducation(!readMoreEducation)}
                      style={{
                        background: "none",
                        border: "none",
                        color: "var(--primary-color)",
                        cursor: "pointer",
                        fontWeight: "600",
                        padding: 0,
                      }}
                    >
                      {readMoreEducation ? "Read Less" : "Read More"}
                    </button>
                  </div>
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
              Family Entertainment Dining vs Alaska-Inspired Culinary
              Experiences
            </p>
          </div>

          <div className="azs-dining-grid">
            {/* Disney Card */}
            <div className="azs-dining-card azs-seabourn-dining">
              <div className="azs-dining-image-wrap">
                <img
                  // src={DisneyDining}
                  alt="Disney Cruise Dining Experience"
                  className="azs-dining-img"
                />
                <div className="azs-dining-badge-wrapper">
                  <span className="azs-dining-badge azs-seabourn-badge">
                    Family Entertainment Dining
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
                  Dining aboard Disney is designed to be part of the overall
                  entertainment experience.
                </p>

                <div className="azs-dining-body">
                  <h4 className="azs-dining-group-title">
                    Highlights include:
                  </h4>

                  <ul className="azs-dining-list">
                    {[
                      "Rotational dining",
                      "Family-friendly menus",
                      "Themed restaurants",
                      "Character experiences",
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
                      Dining is part of the entertainment.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Princess Card */}
            <div className="azs-dining-card azs-azamara-dining">
              <div className="azs-dining-image-wrap">
                <img
                  //   src={VikingDining}
                  alt="Princess Cruises Dining Experience"
                  className="azs-dining-img"
                />
                <div className="azs-dining-badge-wrapper">
                  <span className="azs-dining-badge azs-azamara-badge">
                    Alaska-Inspired Cuisine
                  </span>
                </div>
              </div>

              <div className="azs-dining-content">
                <div className="azs-dining-header">
                  <div className="azs-dining-icon-circle">
                    <Utensils size={24} className="azs-dining-icon" />
                  </div>
                  <h3 className="azs-dining-title">Princess Dining</h3>
                </div>

                <p className="azs-dining-intro">
                  Princess emphasizes culinary experiences inspired by Alaska
                  and regional flavors.
                </p>

                <div className="azs-dining-body">
                  <h4 className="azs-dining-group-title">
                    Highlights include:
                  </h4>

                  <ul className="azs-dining-list">
                    {[
                      "Alaska-inspired cuisine",
                      "Seafood specialties",
                      "Flexible dining options",
                      "Elevated culinary experiences",
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
                      Winner: Tie — The better choice depends on whether you
                      prioritize family fun or culinary exploration.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ── GLACIER VIEWING EXPERIENCE ───── */}
      <section
        className="ugt-components-section"
        id="ugt-components"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="Asc-container">
          {/* HEADER */}
          <div className="ugt-components-header">
            <h2 className="adg-c-h2">Glacier Viewing Experience</h2>

            <div className="adg-c-accent-line"></div>
          </div>

          {/* MAIN CONTENT */}
          <div className="ugt-components-list">
            <div className="ugt-component-row">
              {/* LEFT IMAGE */}
              <div className="ugt-component-image-wrapper">
                <div className="ugt-component-image-container">
                  <img
                    // src={AlumniTravel2}
                    alt="Alaska glacier viewing experience"
                    className="ugt-component-image"
                  />
                </div>
              </div>

              {/* RIGHT CONTENT */}
              <div className="ugt-component-content">
                <p className="ugt-component-text">
                  Both cruise lines provide exceptional glacier viewing
                  opportunities throughout Alaska.
                </p>

                <div className="ugt-questions-box">
                  <span className="ugt-questions-title">
                    Common highlights include:
                  </span>

                  <ul className="ugt-questions-list">
                    {[
                      "Glacier Bay (on select itineraries)",
                      "Endicott Arm",
                      "Dawes Glacier",
                      "Hubbard Glacier",
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
                  Princess often offers a wider variety of glacier-focused
                  itineraries.
                  <br />
                  <br />
                  <strong>Slight Advantage: Princess</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* FAMILY TRAVEL COMPARISON */}
      <section className="azs-entertainment-section" id="azs-entertainment">
        <div className="azs-container">
          <div className="azs-section-header">
            <h2 className="azs-section-title">Family Travel Comparison</h2>
            <div className="azs-section-accent"></div>
            <p className="azs-section-subtitle">
              Disney Family Entertainment vs Princess Alaska Exploration
            </p>
          </div>

          <div className="azs-entertainment-grid">
            {/* Disney Card */}
            <div className="azs-entertainment-card azs-azamara-ent">
              <div className="azs-ent-header">
                <div className="azs-ent-icon-circle">
                  <Sparkles size={24} className="azs-ent-icon" />
                </div>
                <h3 className="azs-ent-title">Disney Alaska Cruises</h3>
              </div>

              <p className="azs-ent-intro">
                Disney is difficult to beat when traveling with children.
              </p>

              <div className="azs-ent-body">
                <h4 className="azs-ent-group-title">Families Enjoy:</h4>

                <ul className="azs-ent-list">
                  {[
                    "Youth Clubs",
                    "Character Encounters",
                    "Family Entertainment",
                    "Multigenerational Appeal",
                    "Disney Service",
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
                    Youth clubs, Broadway-style productions, character
                    encounters, and activities designed for grandparents,
                    parents, and children.
                  </p>
                </div>

                <div className="azs-ent-divider"></div>

                <h4 className="azs-ent-group-title">Winner:</h4>
                <p className="azs-ent-intro">
                  For families with younger children, Disney offers the stronger
                  onboard experience.
                </p>
              </div>
            </div>

            {/* Princess Card */}
            <div className="azs-entertainment-card azs-seabourn-ent">
              <div className="azs-ent-header">
                <div className="azs-ent-icon-circle">
                  <Ship size={24} className="azs-ent-icon" />
                </div>
                <h3 className="azs-ent-title">Princess Cruises</h3>
              </div>

              <p className="azs-ent-intro">
                Princess provides family-friendly amenities but does not focus
                exclusively on children.
              </p>

              <div className="azs-ent-body">
                <h4 className="azs-ent-group-title">Families Enjoy:</h4>

                <ul className="azs-ent-list">
                  {[
                    "Youth programs",
                    "Family excursions",
                    "Educational activities",
                    "Wildlife experiences",
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
                    Entertainment is more destination-focused than
                    family-focused.
                  </p>
                </div>

                <div className="azs-ent-divider"></div>

                <h4 className="azs-ent-group-title">Best For:</h4>
                <p className="azs-ent-intro">
                  Families prioritizing Alaska over onboard entertainment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ALASKA EXPERTISE */}
      <section className="ake-expertise-section" id="ake-expertise">
        <div className="ake-container">
          {/* Section Header */}
          <div className="ake-section-header">
            <h2 className="ake-section-title">Alaska Expertise</h2>
            <div className="ake-section-accent"></div>
            <p className="ake-section-subtitle">
              Disney Family Magic vs Princess Alaska Mastery
            </p>
          </div>

          {/* Cards Grid */}
          <div className="ake-cards-grid">
            {/* Disney Card */}
            <div className="ake-card ake-disney-card">
              {/* Image */}
              <div className="ake-card-image-wrap">
                <img
                  //   src={HeroImage2}
                  alt="Disney Cruise Line Alaska expertise"
                  className="ake-card-img"
                />
                <div className="ake-card-image-overlay"></div>
                <span className="ake-card-image-badge">Disney Cruise Line</span>
              </div>

              {/* Content */}
              <div className="ake-card-content">
                <div className="ake-card-header">
                  <div className="ake-card-icon-wrap">
                    <Sparkles size={22} />
                  </div>
                  <h3 className="ake-card-title">Disney Cruise Line</h3>
                </div>

                <p className="ake-card-intro">
                  Disney delivers excellent Alaska itineraries and experiences.
                </p>

                <h4 className="ake-card-group-label">Highlights include:</h4>
                <ul className="ake-card-list">
                  {[
                    "Glacier viewing",
                    "Wildlife excursions",
                    "Junior Ranger activities",
                    "Educational presentations",
                  ].map((item, idx) => (
                    <li key={idx} className="ake-card-list-item">
                      <div className="ake-card-list-icon">
                        <Check size={14} />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="ake-card-divider"></div>

                <div className="ake-card-highlight">
                  <p>
                    Disney does an excellent job introducing families to Alaska.
                  </p>
                </div>
              </div>
            </div>

            {/* Princess Card */}
            <div className="ake-card ake-princess-card">
              {/* Image */}
              <div className="ake-card-image-wrap">
                <img
                  //   src={HeroImage4}
                  alt="Princess Cruises Alaska expertise"
                  className="ake-card-img"
                />
                <div className="ake-card-image-overlay"></div>
                <span className="ake-card-image-badge ake-princess-badge">
                  Princess Cruises
                </span>
              </div>

              {/* Content */}
              <div className="ake-card-content">
                <div className="ake-card-header">
                  <div className="ake-card-icon-wrap ake-princess-icon-wrap">
                    <Crown size={22} />
                  </div>
                  <h3 className="ake-card-title">Princess Cruises</h3>
                </div>

                <p className="ake-card-intro">
                  This is where Princess truly shines.
                </p>

                <h4 className="ake-card-group-label">Princess offers:</h4>
                <ul className="ake-card-features-list">
                  {[
                    {
                      title: "Decades of Alaska Experience",
                      desc: "Among the most experienced operators in the region.",
                    },
                    {
                      title: "Extensive Alaska Programming",
                      desc: "Educational presentations and destination enrichment.",
                    },
                    {
                      title: "National Park Partnerships",
                      desc: "Access to unique Alaska experiences.",
                    },
                    {
                      title: "Land and Sea Packages",
                      desc: "Comprehensive Alaska exploration opportunities.",
                    },
                  ].map((feat, idx) => (
                    <li key={idx} className="ake-feature-item">
                      <div className="ake-feature-icon-box">
                        <Check size={14} />
                      </div>
                      <div className="ake-feature-texts">
                        <span className="ake-feature-title">{feat.title}</span>
                        <span className="ake-feature-desc">{feat.desc}</span>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="ake-card-divider"></div>

                <div className="ake-card-highlight ake-winner-highlight">
                  <span className="ake-winner-label">Winner: Princess</span>
                  <p>
                    Princess is widely recognized as one of Alaska's premier
                    cruise specialists.
                  </p>
                </div>
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
              Family-Friendly Staterooms vs Comfortable Alaska-Focused
              Accommodations
            </p>
          </div>

          <div className="azs-suites-grid">
            {/* Disney Card */}
            <div className="azs-suites-card azs-seabourn-suites">
              <div className="azs-suites-image-wrap">
                <img
                  // src={DisneyStateroomImage}
                  alt="Disney Cruise Line family stateroom"
                  className="azs-suites-img"
                />
                <span className="azs-suites-image-badge">
                  Family-Friendly Design
                </span>
              </div>

              <div className="azs-suites-content">
                <div className="azs-suites-card-header">
                  <div className="azs-suites-icon-circle">
                    <Award size={24} className="azs-suites-icon" />
                  </div>
                  <h3 className="azs-suites-title">Disney Staterooms</h3>
                </div>

                <p className="azs-suites-intro">
                  Disney cabins are among the most family-friendly at sea.
                </p>

                <div className="azs-suites-body">
                  <h4 className="azs-suites-group-title">Features include:</h4>

                  <ul className="azs-suites-list">
                    {[
                      "Split bathrooms",
                      "Family-focused layouts",
                      "Connecting cabins",
                      "Concierge options",
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
                      Winner: Disney for Families
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Princess Card */}
            <div className="azs-suites-card azs-azamara-suites">
              <div className="azs-suites-image-wrap">
                <img
                  //   src={VikingSuites}
                  alt="Princess Cruises Alaska stateroom"
                  className="azs-suites-img"
                />
                <span className="azs-suites-image-badge">
                  Comfortable Alaska Accommodations
                </span>
              </div>

              <div className="azs-suites-content">
                <div className="azs-suites-card-header">
                  <div className="azs-suites-icon-circle">
                    <Ship size={24} className="azs-suites-icon" />
                  </div>
                  <h3 className="azs-suites-title">Princess Staterooms</h3>
                </div>

                <p className="azs-suites-intro">
                  Princess accommodations emphasize comfort and scenic cruising.
                </p>

                <div className="azs-suites-body">
                  <h4 className="azs-suites-group-title">
                    Accommodations emphasize:
                  </h4>

                  <ul className="azs-suites-list">
                    {[
                      "Comfort",
                      "Scenic viewing",
                      "Alaska-focused experiences",
                      "Variety of cabin categories",
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
                      Winner: Princess for Couples
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
              Disney Magic and Family Fun vs Alaska-Focused Enrichment
            </p>
          </div>

          <div className="dve-compare-grid">
            {/* Disney Card */}
            <div className="dve-compare-card dve-disney-card">
              <div className="dve-card-badge">Disney Cruise Line</div>

              <div className="dve-card-icon-header">
                <Sparkles className="dve-card-header-icon" size={32} />
                <h3>Disney Entertainment</h3>
              </div>

              <p className="dve-card-intro">
                Disney consistently offers some of the best entertainment at
                sea.
              </p>

              <div className="dve-highlights-list">
                <div className="dve-highlight-item">
                  <div className="dve-highlight-icon-box">
                    <Theater size={20} />
                  </div>
                  <div className="dve-highlight-info">
                    <h4>Broadway-Style Shows</h4>
                    <p>Award-winning productions.</p>
                  </div>
                </div>

                <div className="dve-highlight-item">
                  <div className="dve-highlight-icon-box">
                    <Smile size={20} />
                  </div>
                  <div className="dve-highlight-info">
                    <h4>Character Experiences</h4>
                    <p>Unique to Disney.</p>
                  </div>
                </div>

                <div className="dve-highlight-item">
                  <div className="dve-highlight-icon-box">
                    <Users size={20} />
                  </div>
                  <div className="dve-highlight-info">
                    <h4>Family Events</h4>
                    <p>Interactive activities throughout the cruise.</p>
                  </div>
                </div>

                <div className="dve-highlight-item">
                  <div className="dve-highlight-icon-box">
                    <Film size={20} />
                  </div>
                  <div className="dve-highlight-info">
                    <h4>Movies and Themed Experiences</h4>
                    <p>Popular with all ages.</p>
                  </div>
                </div>
              </div>

              <div className="dve-winner-footer" style={{ marginTop: "10px" }}>
                <span className="dve-footer-badge">Winner: Disney</span>
              </div>

              <p className="dve-card-intro" style={{ marginTop: "16px" }}>
                Entertainment is one of Disney's strongest advantages.
              </p>
            </div>

            {/* Princess Card */}
            <div className="dve-compare-card dve-viking-card">
              <div className="dve-card-badge">Princess Cruises</div>

              <div className="dve-card-icon-header">
                <Music className="dve-card-header-icon" size={32} />
                <h3>Princess Entertainment</h3>
              </div>

              <p className="dve-card-intro">
                Princess focuses more heavily on destination enrichment and
                relaxation.
              </p>

              <div className="dve-highlights-list">
                <div className="dve-highlight-item">
                  <div className="dve-highlight-icon-box">
                    <Music size={20} />
                  </div>
                  <div className="dve-highlight-info">
                    <h4>Live Music</h4>
                    <p>Entertainment throughout the ship.</p>
                  </div>
                </div>

                <div className="dve-highlight-item">
                  <div className="dve-highlight-icon-box">
                    <Mic size={20} />
                  </div>
                  <div className="dve-highlight-info">
                    <h4>Destination Talks</h4>
                    <p>Learn more about Alaska's history and culture.</p>
                  </div>
                </div>

                <div className="dve-highlight-item">
                  <div className="dve-highlight-icon-box">
                    <Globe size={20} />
                  </div>
                  <div className="dve-highlight-info">
                    <h4>Cultural Programming</h4>
                    <p>Experiences connected to Alaska destinations.</p>
                  </div>
                </div>

                <div className="dve-highlight-item">
                  <div className="dve-highlight-icon-box">
                    <Coffee size={20} />
                  </div>
                  <div className="dve-highlight-info">
                    <h4>Relaxation</h4>
                    <p>A quieter onboard atmosphere.</p>
                  </div>
                </div>
              </div>

              <p className="dve-card-intro" style={{ marginTop: "16px" }}>
                Entertainment supports the Alaska experience rather than
                becoming the primary attraction.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* LAND TOURS AND ALASKA EXPLORATION */}
      <section className="lta-landtours-section" id="lta-landtours">
        <div className="lta-container">
          {/* Section Header */}
          <div className="lta-section-header">
            <h2 className="lta-section-title">
              Land Tours and Alaska Exploration
            </h2>
            <div className="Asc-accent-line"></div>
            <p className="lta-section-subtitle">
              Embark on Wilderness Journeys and Rail tours in the Great Land
            </p>
          </div>

          {/* Cards Grid */}
          <div className="lta-cards-grid">
            {/* Disney Card */}
            <div className="lta-card lta-disney-card">
              <div className="lta-card-content">
                <div className="lta-card-header">
                  <div className="lta-card-icon-wrap">
                    <Ship size={24} className="lta-card-icon" />
                  </div>
                  <h3 className="lta-card-title">Disney Cruise Line</h3>
                </div>

                <p className="lta-card-intro">
                  Disney primarily focuses on the cruise experience.
                </p>

                <div className="lta-card-divider"></div>

                <div className="lta-feature-item">
                  <div className="lta-feature-icon-box">
                    <Minus size={16} />
                  </div>
                  <div className="lta-feature-texts">
                    <p className="lta-feature-desc">
                      While excursions are available, extensive land programs
                      are limited.
                    </p>
                  </div>
                </div>

                <p className="lta-group-label">Disney's Cruise-Only Focus:</p>

                <ul className="lta-feature-list">
                  {[
                    "Guided port adventures only",
                    "Shipboard-centric entertainment",
                    "No wilderness lodge stays",
                    "No scenic rail connections",
                    "Shorter destination layovers",
                  ].map((item, idx) => (
                    <li key={idx} className="lta-list-item">
                      <Minus size={16} className="lta-list-icon-minus" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="lta-card-highlight">
                  <p>
                    Ideal for families looking for a classic, high-quality
                    cruise vacation focused purely on the ocean voyage.
                  </p>
                </div>
              </div>
            </div>

            {/* Princess Card */}
            <div className="lta-card lta-princess-card lta-winner-highlight">
              <div className="lta-card-content">
                <div className="lta-card-header">
                  <div className="lta-card-icon-wrap lta-princess-icon-wrap">
                    <Award size={24} className="lta-card-icon" />
                  </div>
                  <h3 className="lta-card-title">Princess Cruises</h3>
                </div>

                <p className="lta-card-intro">
                  Princess is famous for its Alaska Cruisetours.
                </p>

                <div className="lta-card-divider"></div>

                <p className="lta-group-label">These packages combine:</p>

                <ul className="lta-feature-list">
                  {[
                    "Cruise voyages",
                    "Denali National Park",
                    "Interior Alaska",
                    "Scenic rail journeys",
                    "Wilderness lodges",
                  ].map((item, idx) => (
                    <li key={idx} className="lta-list-item">
                      <Check size={16} className="lta-list-icon" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="lta-card-highlight lta-winner-highlight-box">
                  <span className="lta-winner-label">
                    Clear Winner: Princess
                  </span>
                  <p>
                    Travelers wanting a deeper Alaska experience often choose
                    Princess.
                  </p>
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
              Disney Premium Family Experiences vs Princess Alaska Value
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

                <h3 className="Ejvs-card-title">Disney Alaska Cruises</h3>
              </div>

              <p className="Ejvs-card-intro">
                Disney is usually among the most expensive family cruise
                options.
              </p>

              <ul className="Ejvs-feature-list">
                {[
                  "Disney branding",
                  "Entertainment",
                  "Family experiences",
                  "Service quality",
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
                  Pricing reflects Disney's premium family-focused cruise
                  experience.
                </p>
              </div>
            </div>

            {/* Princess Card */}
            <div className="Ejvs-pricing-card Ejvs-seabourn-card">
              <div className="Ejvs-card-header">
                <div className="Ejvs-card-icon-wrap">
                  <Award size={24} className="Ejvs-card-icon" />
                </div>

                <h3 className="Ejvs-card-title">Princess Cruises</h3>
              </div>

              <p className="Ejvs-card-intro">
                Princess often provides excellent value for Alaska-focused
                travelers.
              </p>

              <ul className="Ejvs-feature-list">
                {[
                  "Lower fares",
                  "More itinerary options",
                  "Better Alaska-focused value",
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
                  <strong>Winner: Princess</strong>
                  <br />
                  Princess typically offers stronger overall value for
                  Alaska-focused travelers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* GRANDPARENTS AND MULTIGENERATIONAL TRAVEL */}
      <section className="dve-winner-section" id="dve-winner-comparison">
        <div className="dve-container">
          <div className="dve-section-header">
            <h2 className="dve-section-title">
              Grandparents and Multigenerational Travel
            </h2>
            <div className="dve-section-accent"></div>
            <p className="dve-section-subtitle">
              Comparing Disney Alaska Cruises and Princess Cruises for
              Multi-Generational Family Vacations
            </p>
          </div>

          <div className="dve-winner-grid">
            {/* Disney Card */}
            <div className="dve-winner-card dve-disney-winner">
              <div className="dve-winner-image-wrap">
                <img
                  // src={DisneyWinnerImage}
                  alt="Disney Alaska multigenerational family cruise"
                  className="dve-winner-img"
                />
                <span className="dve-winner-badge">
                  Younger Grandchildren: Winner
                </span>
              </div>

              <div className="dve-winner-content">
                <h3 className="dve-winner-title">Disney Alaska Cruises</h3>

                <p className="dve-winner-intro">
                  Disney excels at bringing generations together.
                </p>

                <div className="dve-winner-divider"></div>

                <h4 className="dve-advantages-title">Grandparents Enjoy:</h4>

                <ul className="dve-advantages-list">
                  <li>
                    <Check size={18} className="dve-advantage-icon" />
                    <span>Family bonding</span>
                  </li>
                  <li>
                    <Check size={18} className="dve-advantage-icon" />
                    <span>Shared experiences</span>
                  </li>
                  <li>
                    <Check size={18} className="dve-advantage-icon" />
                    <span>Easy logistics</span>
                  </li>
                  <li>
                    <Check size={18} className="dve-advantage-icon" />
                    <span>Child-friendly activities</span>
                  </li>
                </ul>

                <div className="dve-winner-footer">
                  <span className="dve-footer-badge">
                    Creates unforgettable family memories
                  </span>
                </div>
              </div>
            </div>

            {/* Princess Card */}
            <div className="dve-winner-card dve-viking-winner">
              <div className="dve-winner-image-wrap">
                <img
                  //   src={VikingOceanCruise}
                  alt="Princess Cruises Alaska family exploration"
                  className="dve-winner-img"
                />
                <span className="dve-winner-badge">Teens & Adults: Winner</span>
              </div>

              <div className="dve-winner-content">
                <h3 className="dve-winner-title">Princess Cruises</h3>

                <p className="dve-winner-intro">
                  Princess works well for older children and adults interested
                  in Alaska itself.
                </p>

                <div className="dve-winner-divider"></div>

                <h4 className="dve-advantages-title">Families Appreciate:</h4>

                <ul className="dve-advantages-list">
                  <li>
                    <Check size={18} className="dve-advantage-icon" />
                    <span>Educational travel experiences</span>
                  </li>
                  <li>
                    <Check size={18} className="dve-advantage-icon" />
                    <span>Alaska-focused itineraries</span>
                  </li>
                  <li>
                    <Check size={18} className="dve-advantage-icon" />
                    <span>Wildlife and nature exploration</span>
                  </li>
                  <li>
                    <Check size={18} className="dve-advantage-icon" />
                    <span>Destination immersion</span>
                  </li>
                </ul>

                <div className="dve-winner-footer">
                  <span className="dve-footer-badge">
                    Ideal for educational family travel
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div
            className="dve-winner-footer"
            style={{ marginTop: "40px", textAlign: "center" }}
          >
            <span className="dve-footer-badge">
              Winner: Younger Grandchildren → Disney | Teenagers & Adults →
              Princess
            </span>
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
            <h2 className="azs-h2">Disney Princess Half Marathon Weekend</h2>
            <div className="azs-accent-line"></div>

            <p className="azs-video-intro">
              Relive the magic of the 2026 Disney Princess Half Marathon Weekend
              at Walt Disney World Resort.
            </p>
          </div>

          <div className="azs-video-wrapper">
            <div className="azs-video-frame">
              <iframe
                src="https://www.youtube.com/embed/B4hr8gBGMIk"
                title="Disney Princess Half Marathon Weekend"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
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
              Both Disney Alaska Cruises and Princess Alaska Cruises offer
              incredible experiences, but the right choice depends on your
              travel priorities.
            </p>
          </div>

          <div className="Asc-verdict-grid">
            {/* Disney Column */}
            <div className="Asc-verdict-card Asc-verdict-azamara">
              <h3 className="Asc-verdict-card-title">
                Choose Disney Alaska If:
              </h3>

              <ul className="Asc-verdict-list">
                {[
                  "You're traveling with young children",
                  "You want Disney entertainment",
                  "Family experiences are your top priority",
                  "Grandparents are traveling with grandchildren",
                  "You want exceptional onboard activities",
                  "Disney magic matters to your family",
                ].map((item, i) => (
                  <li key={i} className="Asc-verdict-item">
                    <Check size={18} className="Asc-verdict-icon" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Princess Column */}
            <div className="Asc-verdict-card Asc-verdict-regent">
              <h3 className="Asc-verdict-card-title">
                Choose Princess Alaska If:
              </h3>

              <ul className="Asc-verdict-list">
                {[
                  "Alaska itself is your primary focus",
                  "You want a land-and-sea vacation",
                  "Educational experiences matter",
                  "You enjoy wildlife and nature",
                  "You prefer a more destination-focused experience",
                  "Value is an important consideration",
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
              <h3 className="Asc-who-title">Disney Alaska Cruises</h3>

              <ul className="Asc-who-list">
                {[
                  "Families",
                  "Grandparents and grandchildren",
                  "Disney fans",
                  "First-time Alaska travelers",
                  "Multigenerational groups",
                ].map((item, i) => (
                  <li key={i}>
                    <Check size={16} className="Asc-icon-green" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="Asc-who-card Asc-who-no">
              <h3 className="Asc-who-title">Princess Cruises Alaska</h3>

              <ul className="Asc-who-list">
                {[
                  "Couples",
                  "Retirees",
                  "Nature lovers",
                  "Wildlife enthusiasts",
                  "Experienced travelers",
                  "Travelers seeking comprehensive Alaska exploration",
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
            // src={HeroImage1}
            alt="Disney Alaska Cruises vs Princess Cruises"
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
                  Disney Alaska Cruises vs Princess Cruises: Which Is Right for
                  You?
                </h2>

                <div className="Asc-help-accent"></div>
              </div>

              <div className="Asc-help-grid">
                <div className="Asc-help-info">
                  <p className="Asc-help-intro">
                    Disney Cruise Line and Princess Cruises both offer
                    exceptional Alaska vacations, but they serve different types
                    of travelers.
                  </p>

                  <p className="Asc-help-intro">
                    <strong>Disney Alaska Cruises</strong> deliver unforgettable
                    family vacations filled with entertainment, exceptional
                    service, and multigenerational experiences that create
                    lasting memories.
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
                      <strong>Princess Alaska Cruises</strong> provide deeper
                      destination immersion, stronger Alaska expertise,
                      extensive land programs, and outstanding value for
                      travelers focused on experiencing Alaska itself.
                      <br />
                      <br />
                      If your family's priority is spending quality time
                      together while enjoying Disney's signature magic, Disney
                      is the clear winner.
                      <br />
                      <br />
                      If your priority is maximizing your Alaska experience
                      through glaciers, wildlife, national parks, and land
                      exploration, Princess Cruises is difficult to beat.
                      <br />
                      <br />
                      For many travelers, the decision comes down to a simple
                      question:
                      <br />
                      <br />
                      <strong>
                        Are you choosing Alaska with Disney, or are you choosing
                        Alaska itself?
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
                      Explore Alaska Cruise Options
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>

                <div className="Asc-help-list-box">
                  <h3 className="Asc-help-list-title">Key Takeaways:</h3>

                  <ul className="Asc-help-bullets">
                    {[
                      "Disney excels at family entertainment and multigenerational travel.",
                      "Princess is one of the most experienced Alaska cruise operators.",
                      "Both offer excellent glacier viewing and scenic cruising.",
                      "Princess provides stronger land tour and Alaska exploration opportunities.",
                      "The best choice depends on whether you prioritize Disney experiences or destination immersion.",
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
                    Need help choosing the right Alaska cruise? Trips &amp;
                    Ships Luxury Travel provides personalized guidance to help
                    travelers select the cruise experience that best matches
                    their travel style, interests, and vacation goals.
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

export default DisneyAlaskavsPrincessCruises;
