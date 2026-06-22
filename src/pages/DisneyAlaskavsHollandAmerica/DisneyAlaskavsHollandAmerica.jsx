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
import AboutImage from "../../assets/AboutAngela.jpeg";
import HeroImage1 from "../../assets/DisneyAlaskavsHollandAmerica/disney-cruise-alaska-glacier-view-inside-passage.jpg";
import HeroImage2 from "../../assets/DisneyAlaskavsHollandAmerica/aerial-view-disney-cruise-ship-top-deck-pools-open-ocean.jpg";
import HeroImage3 from "../../assets/DisneyAlaskavsHollandAmerica/disney-wish-cruise-ship-bahamas-itinerary-sunset-view.jpg";
import DisneyAlaska from "../../assets/DisneyAlaskavsHollandAmerica/disney-cruise-alaska-inside-passage-glacier-view-ship-stern.jpg";
import HollandAmerica from "../../assets/DisneyAlaskavsHollandAmerica/disney-cruise-alaska-itinerary-family-watching-ship-mountains.jpg";
import DisneyAlaskaCruises from "../../assets/DisneyAlaskavsHollandAmerica/disney-cruise-alaska-mickey-mouse-family-character-photo.jpg";
import HollandAmericaCruises from "../../assets/DisneyAlaskavsHollandAmerica/disney-cruise-alaska-shore-excursion-rainforest-suspension-bridge.jpg";
import DisneyDining from "../../assets/DisneyAlaskavsHollandAmerica/marceline-market-family-dining-disney-cruise.jpg";
import HollandDining from "../../assets/DisneyAlaskavsHollandAmerica/worlds-of-marvel-restaurant-spider-man.jpg";
import GlacierViewing from "../../assets/DisneyAlaskavsHollandAmerica/disney-cruise-inside-passage-alaska-fjord-glacier-scenery.jpg";
import DisneyExperience from "../../assets/DisneyAlaskavsHollandAmerica/disney-cruise-alaska-characters-mickey-minnie-donald-daisy.jpg";
import HollandExperience from "../../assets/DisneyAlaskavsHollandAmerica/disney-cruise-alaska-itinerary-couples-vacation-deck-view.jpg";
import HollandSuites from "../../assets/DisneyAlaskavsHollandAmerica/disney-treasure-concierge-suite-bedroom.jpg";
import DisneySuites from "../../assets/DisneyAlaskavsHollandAmerica/disney-treasure-family-stateroom-with-bunk-beds.jpg";
import LandTours  from "../../assets/DisneyAlaskavsHollandAmerica/disney-wonder-alaska-cruise-mickey-mouse-family-photo.jpg";
import CTAImage  from "../../assets/DisneyAlaskavsHollandAmerica/disney-wonder-alaska-cruise-glacier-bay-national-park-scenic-voyage.jpeg";
import DisneyAlaskaLine from "../../assets/DisneyAlaskavsHollandAmerica/disney-wonder-alaska-cruise-through-scenic-fjord-snow-capped-mountains.jpg";
import HollandAlaskaLine from "../../assets/DisneyAlaskavsHollandAmerica/disney-alaska-cruise-hot-chocolate-promenade-service.jpg";
import Alaskabears from "../../assets/DisneyAlaskavsHollandAmerica/Bears.png";
import Alaskawhale from "../../assets/DisneyAlaskavsHollandAmerica/Whale.png";

import { Helmet } from "react-helmet-async";

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
      "@id": "https://www.tripsandships.com/disney-alaska-vs-holland-america",
      url: "https://www.tripsandships.com/disney-alaska-vs-holland-america",
      name: "Disney Alaska vs Holland America",
      description:
        "Compare Disney Alaska Cruises and Holland America Alaska Cruises. Explore differences in family experiences, Glacier Bay access, entertainment, dining, excursions, pricing, and overall value.",
      about: [
        {
          "@type": "Organization",
          name: "Disney Cruise Line",
        },
        {
          "@type": "Organization",
          name: "Holland America Line",
        },
      ],
    },

    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.tripsandships.com/disney-alaska-vs-holland-america#breadcrumb",
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
          name: "Disney Alaska vs Holland America",
          item: "https://www.tripsandships.com/disney-alaska-vs-holland-america",
        },
      ],
    },

    {
      "@type": "FAQPage",
      "@id":
        "https://www.tripsandships.com/disney-alaska-vs-holland-america#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Is Disney or Holland America better for Alaska?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Disney is generally better for families with younger children, while Holland America is often preferred by travelers seeking a more immersive Alaska experience.",
          },
        },
        {
          "@type": "Question",
          name: "Which cruise line has more Alaska experience?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Holland America is widely recognized as one of the most experienced Alaska cruise operators.",
          },
        },
        {
          "@type": "Question",
          name: "Is Disney Alaska worth the extra cost?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For families who value Disney entertainment and multigenerational experiences, many travelers feel the premium pricing is justified.",
          },
        },
        {
          "@type": "Question",
          name: "Which line is better for wildlife viewing?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Holland America generally offers more wildlife-focused programming and excursions.",
          },
        },
        {
          "@type": "Question",
          name: "Which line has better entertainment?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Disney is widely considered the leader in cruise entertainment.",
          },
        },
        {
          "@type": "Question",
          name: "Which line offers better food?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Holland America is often praised for its dining and regional cuisine.",
          },
        },
        {
          "@type": "Question",
          name: "Does Holland America offer Glacier Bay?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Holland America operates numerous Glacier Bay itineraries.",
          },
        },
        {
          "@type": "Question",
          name: "Is Holland America good for families?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, particularly for families with older children and teenagers who enjoy nature and destination-focused travel.",
          },
        },
        {
          "@type": "Question",
          name: "Which line offers better value?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Holland America typically provides stronger overall value for Alaska-focused travelers.",
          },
        },
        {
          "@type": "Question",
          name: "Which cruise line is best for grandparents and grandchildren?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Disney is often the top choice when younger grandchildren are involved.",
          },
        },
        {
          "@type": "Question",
          name: "Does Disney Cruise Line offer Cruisetours or land packages in Alaska?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Disney Cruise Line primarily focuses on cruise-only itineraries in Alaska. Unlike Holland America's extensive overland programs (Cruisetours) to Denali National Park and the Yukon, Disney does not offer multi-day land excursions with dedicated wilderness lodge stays.",
          },
        },
        {
          "@type": "Question",
          name: "What are the main differences in onboard atmosphere between the two lines?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Disney offers a high-energy, family-centric experience filled with character meets, interactive themed dining, and youth clubs. Holland America provides a quieter, more traditional and relaxed cruise environment focused on live music, fine dining, and cultural destination lectures.",
          },
        },
        {
          "@type": "Question",
          name: "Which cruise line is better for glacier viewing in Glacier Bay?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Holland America is the superior choice for Glacier Bay. As a legacy operator, they possess regular permits to enter Glacier Bay National Park on many of their sailings. Disney Cruise Line's itineraries rarely include Glacier Bay, instead visiting other scenic areas like Stikine Icecap, Tracy Arm Fjord, or Dawes Glacier.",
          },
        },
        {
          "@type": "Question",
          name: "How do the stateroom layouts compare for families?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Disney staterooms are uniquely designed with families in mind, featuring split bathrooms (a toilet/sink in one room and a shower/sink in another) to make getting ready easier. Holland America offers spacious and highly comfortable classic layouts, but they do not feature the family-specific split-bathroom design.",
          },
        },
        {
          "@type": "Question",
          name: "What regional dining options are available onboard?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Holland America features a dedicated 'Fresh Fish Program' serving locally caught wild salmon, cod, and halibut directly in the dining venues. Disney focuses on high-quality international menus with broad family appeal but offers less regional destination-specific cuisine onboard.",
          },
        },
      ],
    },

    {
      "@type": "ItemList",
      "@id":
        "https://www.tripsandships.com/disney-alaska-vs-holland-america#comparison",
      name: "Disney Alaska Cruise vs Holland America Alaska Cruise Comparison",
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
            "Holland America Line offers decades of Alaska experience, destination enrichment, and extensive land-and-sea vacation programs.",
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
            "Holland America Line provides deeper educational programming focused on wildlife, glaciers, conservation, and Alaska history.",
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Land Tours",
          description:
            "Holland America Line is recognized as an industry leader in Alaska land-and-sea vacation packages, including Denali and Yukon experiences.",
        },
        {
          "@type": "ListItem",
          position: 6,
          name: "Overall Value",
          description:
            "Holland America Line often delivers stronger value for destination-focused travelers, while Disney delivers premium family experiences.",
        },
      ],
    },

    {
      "@type": "Article",
      "@id":
        "https://www.tripsandships.com/disney-alaska-vs-holland-america#article",
      headline:
        "Disney Alaska vs Holland America: Which Alaska Cruise Delivers the Better Experience?",
      description:
        "A detailed comparison of Disney Alaska Cruises and Holland America Line Alaska itineraries, including family travel, entertainment, glacier viewing, educational programs, dining, accommodations, and value.",
      author: {
        "@id": "https://www.tripsandships.com/#organization",
      },
      publisher: {
        "@id": "https://www.tripsandships.com/#organization",
      },
      mainEntityOfPage:
        "https://www.tripsandships.com/disney-alaska-vs-holland-america",
      keywords: [
        "Disney Alaska vs Holland America",
        "Alaska Cruise Comparison",
        "Disney Alaska Cruise Review",
        "Holland America Alaska Cruises Review",
        "Best Alaska Cruise for Families",
        "Disney vs Holland America Alaska",
      ],
    },
  ],
};
function FAQ() {
  const [open, setOpen] = useState(null);

  const faqData = [
    {
      q: "Is Disney or Holland America better for Alaska?",
      a: "Disney is generally better for families with younger children, while Holland America is often preferred by travelers seeking a more immersive Alaska experience.",
    },

    {
      q: "Which cruise line has more Alaska experience?",
      a: "Holland America is widely recognized as one of the most experienced Alaska cruise operators.",
    },

    {
      q: "Is Disney Alaska worth the extra cost?",
      a: "For families who value Disney entertainment and multigenerational experiences, many travelers feel the premium pricing is justified.",
    },

    {
      q: "Which line is better for wildlife viewing?",
      a: "Holland America generally offers more wildlife-focused programming and excursions.",
    },

    {
      q: "Which line has better entertainment?",
      a: "Disney is widely considered the leader in cruise entertainment.",
    },

    {
      q: "Which line offers better food?",
      a: "Holland America is often praised for its dining and regional cuisine.",
    },

    {
      q: "Does Holland America offer Glacier Bay?",
      a: "Yes. Holland America operates numerous Glacier Bay itineraries.",
    },

    {
      q: "Is Holland America good for families?",
      a: "Yes, particularly for families with older children and teenagers who enjoy nature and destination-focused travel.",
    },

    {
      q: "Which line offers better value?",
      a: "Holland America typically provides stronger overall value for Alaska-focused travelers.",
    },

    {
      q: "Which cruise line is best for grandparents and grandchildren?",
      a: "Disney is often the top choice when younger grandchildren are involved.",
    },

    {
      q: "Does Disney Cruise Line offer Cruisetours or land packages in Alaska?",
      a: "Disney Cruise Line primarily focuses on cruise-only itineraries in Alaska. Unlike Holland America's extensive overland programs (Cruisetours) to Denali National Park and the Yukon, Disney does not offer multi-day land excursions with dedicated wilderness lodge stays.",
    },

    {
      q: "What are the main differences in onboard atmosphere between the two lines?",
      a: "Disney offers a high-energy, family-centric experience filled with character meets, interactive themed dining, and youth clubs. Holland America provides a quieter, more traditional and relaxed cruise environment focused on live music, fine dining, and cultural destination lectures.",
    },

    {
      q: "Which cruise line is better for glacier viewing in Glacier Bay?",
      a: "Holland America is the superior choice for Glacier Bay. As a legacy operator, they possess regular permits to enter Glacier Bay National Park on many of their sailings. Disney Cruise Line's itineraries rarely include Glacier Bay, instead visiting other scenic areas like Stikine Icecap, Tracy Arm Fjord, or Dawes Glacier.",
    },

    {
      q: "How do the stateroom layouts compare for families?",
      a: "Disney staterooms are uniquely designed with families in mind, featuring split bathrooms (a toilet/sink in one room and a shower/sink in another) to make getting ready easier. Holland America offers spacious and highly comfortable classic layouts, but they do not feature the family-specific split-bathroom design.",
    },

    {
      q: "What regional dining options are available onboard?",
      a: "Holland America features a dedicated 'Fresh Fish Program' serving locally caught wild salmon, cod, and halibut directly in the dining venues. Disney focuses on high-quality international menus with broad family appeal but offers less regional destination-specific cuisine onboard.",
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
const DisneyAlaskavsHollandAmerica = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [readMore, setReadMore] = useState(false);
  <p className="azs-exp-highlight">
    <strong>Winner: Princess</strong>
    <br />
    Adults and lifelong learners often appreciate Princess's educational depth.
  </p>;
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
          Disney Alaska vs Holland America | Which Alaska Cruise Is Best?
        </title>
        <meta
          name="title"
          content="Disney Alaska vs Holland America Alaska Cruise Comparison"
        />
        <meta
          name="description"
          content="Compare Disney Alaska Cruises and Holland America Alaska Cruises. Discover differences in family travel, Glacier Bay access, dining, entertainment, wildlife experiences, pricing, and Alaska expertise to find the right cruise for your vacation."
        />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>
      <Nav />
      {/* HERO */}
      <section
        className="Scenic_hero_section"
        style={{ backgroundColor: "var(--navy)" }}
      >
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
            Disney Alaska vs Holland America: Family Adventure or Alaska
            Immersion?
          </h1>

          <p>
            Alaska is one of the most extraordinary cruise destinations in the
            world.
          </p>

          {/* READ MORE CONTENT */}
          {readMore && (
            <>
              <p>
                From towering glaciers and breaching whales to remote wilderness
                and charming coastal towns, Alaska offers experiences unlike
                anywhere else on Earth.
              </p>

              <p>
                When planning an Alaska cruise, two popular choices often
                emerge: Disney Cruise Line and Holland America Line.
              </p>

              <p>
                While both provide exceptional Alaska itineraries, they deliver
                very different vacation experiences.
              </p>

              <p>
                Disney Cruise Line focuses on family entertainment,
                multigenerational travel, and Disney magic, while Holland
                America emphasizes destination immersion, wildlife experiences,
                culinary excellence, and deep Alaska expertise.
              </p>

              <p>
                The best choice depends on what matters most to you:
                family-focused fun or a more authentic Alaska-centered
                experience.
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
                  <th>Disney Alaska Cruises</th>
                  <th>Holland America Alaska Cruises</th>
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
                    <strong>Wildlife Focus</strong>
                  </td>
                  <td>Good</td>
                  <td>Outstanding</td>
                </tr>

                <tr>
                  <td>
                    <strong>Land Tours</strong>
                  </td>
                  <td>Limited</td>
                  <td>Extensive</td>
                </tr>

                <tr>
                  <td>
                    <strong>Dining</strong>
                  </td>
                  <td>Family-Oriented</td>
                  <td>Culinary Focused</td>
                </tr>

                <tr>
                  <td>
                    <strong>Value</strong>
                  </td>
                  <td>Premium Pricing</td>
                  <td>Strong Value</td>
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
            <h2 className="azs-h2">Disney Destiny Ship Tour</h2>
            <div className="azs-accent-line"></div>

            <p className="azs-video-intro">
              This video takes you inside the incredible spaces, staterooms,
              suites, and dining experiences inspired by the timeless battle of
              Heroes & Villains.
            </p>
          </div>

          <div className="azs-video-wrapper">
            <div className="azs-video-frame">
              <iframe
                src="https://www.youtube.com/embed/nLPuJE2a8xU"
                title="Disney Destiny Ship Tour"
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
                src={DisneyAlaska}
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
                Disney Cruise Line brings its unique family-focused experience
                to one of the world's most spectacular destinations.
              </p>

              <div className="azs-sub-grid">
                {/* Group 1 */}
                <div className="azs-info-card">
                  <h4 className="azs-group-title">Guests enjoy:</h4>

                  <ul className="azs-list">
                    {[
                      "Alaska exploration",
                      "Character experiences",
                      "Broadway-style entertainment",
                      "Family-friendly activities",
                      "Exceptional service",
                      "Multigenerational experiences",
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
                  <h4 className="azs-group-title">Best For</h4>

                  <ul className="azs-list">
                    {[
                      "Families with children",
                      "Grandparents traveling with grandchildren",
                      "Disney fans",
                      "First-time Alaska visitors",
                      "Multi-generational groups",
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
                  Disney creates a vacation where Alaska becomes both an
                  adventure and a family memory-making experience.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* HOLLAND AMERICA ALASKA OVERVIEW */}
      <section
        className="azs-overview-section"
        id="azs-holland-overview"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="azs-container">
          <div className="Avs-verdict-header">
            <h2 className="Avs-verdict-title">
              Holland America Alaska Cruises Overview
            </h2>
            <div className="Avs-verdict-accent"></div>
          </div>

          <div className="azs-overview-grid">
            {/* Right Side: Content */}
            <div className="azs-content-col">
              <p className="azs-intro">
                Few cruise lines have stronger Alaska credentials than Holland
                America.
              </p>

              <div className="azs-sub-grid">
                {/* Group 1 */}
                <div className="azs-info-card">
                  <h4 className="azs-group-title">
                    Holland America focuses on:
                  </h4>

                  <ul className="azs-list">
                    {[
                      "Glacier exploration",
                      "Wildlife viewing",
                      "Cultural immersion",
                      "Alaska history",
                      "Regional cuisine",
                      "Destination enrichment",
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
                  <h4 className="azs-group-title">Best For</h4>

                  <ul className="azs-list">
                    {[
                      "Couples",
                      "Retirees",
                      "Nature lovers",
                      "Wildlife enthusiasts",
                      "Experienced cruisers",
                      "Alaska-focused travelers",
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
                      For travelers who want Alaska to be the star of the
                      vacation, Holland America is often considered one of the
                      best options available.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Left Side: Image */}
            <div className="azs-image-col" style={{ height: "100%" }}>
              <img
                src={HollandAmerica}
                alt="Holland America Alaska cruise experience"
                className="azs-overview-img"
              />
              <div className="azs-image-overlay">
                <span className="azs-image-badge">Alaska Specialists</span>
                <h3 className="azs-image-title">
                  Wildlife, Glaciers & Cultural Discovery
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EDUCATIONAL AND ENRICHMENT PROGRAMS */}
      <section className="eep-section" id="eep-education">
        <div className="eep-container">
          <div className="eep-section-header">
            <span className="eep-eyebrow">Onboard Learning & Discovery</span>
            <h2 className="eep-section-title">
              Educational and Enrichment Programs
            </h2>
            <div className="eep-accent-line"></div>
          </div>

          <div className="eep-dossier-grid">
            {/* COLUMN 2: DISNEY CARD */}
            <div className="eep-comparison-card eep-disney-card">
              <div className="eep-card-img-wrap">
                <img
                  src={DisneyAlaskaCruises}
                  alt="Disney Alaska educational experiences"
                  className="eep-card-img"
                />
                <span className="eep-card-badge eep-holland-badge">
                  Family Discovery
                </span>
              </div>
              <div className="eep-card-body">
                <span className="eep-card-brand">Disney Cruise Line</span>
                <h3 className="eep-card-title">Disney Alaska Cruises</h3>
                <p className="eep-card-desc">
                  Disney combines educational experiences with storytelling and
                  character magic, making learning engaging and accessible for
                  kids and multigenerational families.
                </p>

                <div className="eep-card-list-box">
                  <h4 className="eep-list-title">Offerings Include:</h4>
                  <ul className="eep-card-list">
                    {[
                      "Junior Ranger programs",
                      "Interactive nature talks",
                      "Family discovery crafts",
                      "Wildlife education sessions",
                      "Alaska-themed youth clubs",
                    ].map((item, idx) => (
                      <li key={idx} className="eep-card-list-item">
                        <Check
                          size={14}
                          className="eep-card-list-icon eep-holland-icon"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="eep-card-footer-box eep-winner-footer">
                  <p>
                    <strong>Best For Families:</strong> Engages younger
                    travelers through active storytelling and interactive
                    discovery.
                  </p>
                </div>
              </div>
            </div>

            {/* COLUMN 3: HOLLAND AMERICA CARD */}
            <div className="eep-comparison-card eep-holland-card">
              <div className="eep-card-img-wrap">
                <img
                  src={HollandAmericaCruises}
                  alt="Holland America Alaska educational programs"
                  className="eep-card-img"
                />
                <span className="eep-card-badge eep-holland-badge">
                  Destination Depth
                </span>
              </div>
              <div className="eep-card-body">
                <span className="eep-card-brand">Holland America Line</span>
                <h3 className="eep-card-title">Holland America Cruises</h3>
                <p className="eep-card-desc">
                  Holland America features deep ecological, historical, and
                  cultural programming guided by naturalists, local rangers, and
                  cultural ambassadors.
                </p>

                <div className="eep-card-list-box">
                  <h4 className="eep-list-title">Topics Covered:</h4>
                  <ul className="eep-card-list">
                    {[
                      "Native cultural ambassadors",
                      "Glaciology & geology seminars",
                      "Alaska Wildlife lectures",
                      "National Park Service rangers",
                      "Conservation workshops",
                    ].map((item, idx) => (
                      <li key={idx} className="eep-card-list-item">
                        <Check
                          size={14}
                          className="eep-card-list-icon eep-holland-icon"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="eep-card-footer-box eep-winner-footer">
                  <span className="eep-winner-tag">
                    Winner: Holland America
                  </span>
                  <p>
                    Nature enthusiasts and adults prefer Holland America's
                    academic depth and expert-led destination immersion.
                  </p>
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
                  src={DisneyDining}
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
                  <h3 className="azs-dining-title">Disney Dining</h3>
                </div>

                <p className="azs-dining-intro">
                  Dining becomes part of the entertainment experience.
                </p>

                <div className="azs-dining-body">
                  <h4 className="azs-dining-group-title">Features include:</h4>

                  <ul className="azs-dining-list">
                    {[
                      "Rotational dining",
                      "Family-friendly menus",
                      "Themed restaurants",
                      "Interactive experiences",
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
                      Dining becomes part of the entertainment.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Holland America Card */}
            <div className="azs-dining-card azs-azamara-dining">
              <div className="azs-dining-image-wrap">
                <img
                  src={HollandDining}
                  alt="Holland America Dining Experience"
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
                  <h3 className="azs-dining-title">Holland America Dining</h3>
                </div>

                <p className="azs-dining-intro">
                  Holland America is known for its culinary program and regional
                  dining experiences.
                </p>

                <div className="azs-dining-body">
                  <h4 className="azs-dining-group-title">
                    Holland America is known for:
                  </h4>

                  <ul className="azs-dining-list">
                    {[
                      "Regional cuisine",
                      "Alaska seafood",
                      "Culinary programming",
                      "Elevated dining experiences",
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
                      Winner: Holland America — Food-focused travelers often
                      prefer Holland America's culinary offerings.
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
                    src={GlacierViewing}
                    alt="Alaska glacier viewing experience"
                    className="ugt-component-image"
                  />
                </div>
              </div>

              {/* RIGHT CONTENT */}
              <div className="ugt-component-content">
                <p className="ugt-component-text">
                  Alaska cruises often revolve around glacier viewing.
                </p>

                <p className="ugt-component-text">
                  Both cruise lines offer impressive experiences.
                </p>

                <div className="ugt-questions-box">
                  <span className="ugt-questions-title">
                    Common highlights include:
                  </span>

                  <ul className="ugt-questions-list">
                    {[
                      "Glacier Bay",
                      "Hubbard Glacier",
                      "Endicott Arm",
                      "Dawes Glacier",
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
                  However, Holland America offers more glacier-focused
                  itineraries and extensive destination interpretation.
                  <br />
                  <br />
                  <strong>Slight Advantage: Holland America</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WILDLIFE EXPERIENCES ───── */}
      <section className="wle-wildlife-section" id="wle-wildlife">
        <div className="wle-container">
          <div className="wle-section-header">
            <span className="wle-eyebrow">Alaska Excursions & Sightseeing</span>
            <h2 className="wle-section-title">Wildlife Experiences</h2>
            <div className="wle-accent-line"></div>
          </div>

          <div className="wle-rows-container">
            {/* ROW 1: DISNEY */}
            <div className="wle-row wle-disney-row">
              <div className="wle-image-col">
                <div className="wle-image-container">
                  <img
                    src={Alaskabears}
                    alt="Disney Alaska wildlife experiences"
                    className="wle-img"
                  />
                  <div className="wle-image-badge">Family Excursions</div>
                </div>
              </div>

              <div className="wle-content-col">
                <span className="wle-brand-eyebrow">Disney Cruise Line</span>
                <h3 className="wle-row-title">Wildlife Viewing</h3>
                <p className="wle-row-desc">
                  Disney delivers family-friendly excursions that make wildlife
                  viewing accessible, safe, and engaging for all ages.
                </p>

                <div className="wle-items-box">
                  <span className="wle-items-title">
                    Opportunities include:
                  </span>
                  <div className="wle-tags-grid">
                    {["Whales", "Bald eagles", "Sea lions", "Bears"].map(
                      (item, idx) => (
                        <div key={idx} className="wle-tag-item">
                          <Check size={14} className="wle-tag-icon" />
                          <span>{item}</span>
                        </div>
                      ),
                    )}
                  </div>
                </div>

                <div className="wle-footer-callout">
                  <p>
                    Excursions are family-friendly, highly organized, and
                    accessible.
                  </p>
                </div>
              </div>
            </div>

            {/* ROW 2: HOLLAND AMERICA */}
            <div className="wle-row wle-holland-row">
              <div className="wle-content-col">
                <span className="wle-brand-eyebrow">Holland America Line</span>
                <h3 className="wle-row-title">Wildlife Emphasis</h3>
                <p className="wle-row-desc">
                  Wildlife becomes a central theme of many voyages, supported by
                  expert naturalists and destination-specific itineraries.
                </p>

                <div className="wle-items-box">
                  <span className="wle-items-title">
                    Guests frequently enjoy:
                  </span>
                  <div className="wle-tags-grid">
                    {[
                      "Naturalist presentations",
                      "Wildlife-focused excursions",
                      "Bear viewing opportunities",
                      "Whale watching experiences",
                      "Birding excursions",
                    ].map((item, idx) => (
                      <div key={idx} className="wle-tag-item">
                        <Check size={14} className="wle-tag-icon" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="wle-winner-callout">
                  <span className="wle-winner-badge">
                    Winner: Holland America
                  </span>
                  <p className="wle-winner-text">
                    Nature lovers often prefer Holland America's extensive
                    wildlife emphasis.
                  </p>
                </div>
              </div>

              <div className="wle-image-col">
                <div className="wle-image-container">
                  <img
                    src={Alaskawhale}
                    alt="Holland America Alaska wildlife experiences"
                    className="wle-img"
                  />
                  <div className="wle-image-badge">Destination Enrichment</div>
                </div>
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
              Disney Family Entertainment vs Holland America Alaska Exploration
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
                Disney is widely regarded as one of the best family cruise lines
                in the world.
              </p>

              <div className="azs-ent-body">
                <h4 className="azs-ent-group-title">Families Enjoy:</h4>

                <ul className="azs-ent-list">
                  {[
                    "Kids Clubs",
                    "Character Encounters",
                    "Family Entertainment",
                    "Family-Friendly Dining",
                    "Shared Experiences",
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
                    Industry-leading youth programs, Disney character
                    encounters, family entertainment, family-friendly dining,
                    and shared experiences that grandparents, parents, and
                    grandchildren can enjoy together.
                  </p>
                </div>

                <div className="azs-ent-divider"></div>

                <h4 className="azs-ent-group-title">Winner:</h4>

                <p className="azs-ent-intro">
                  For families with younger children, Disney offers a
                  significantly stronger onboard experience.
                </p>
              </div>
            </div>

            {/* Holland America Card */}
            <div className="azs-entertainment-card azs-seabourn-ent">
              <div className="azs-ent-header">
                <div className="azs-ent-icon-circle">
                  <Ship size={24} className="azs-ent-icon" />
                </div>
                <h3 className="azs-ent-title">Holland America</h3>
              </div>

              <p className="azs-ent-intro">
                Holland America welcomes families but caters primarily to
                adults.
              </p>

              <div className="azs-ent-body">
                <h4 className="azs-ent-group-title">Families Enjoy:</h4>

                <ul className="azs-ent-list">
                  {[
                    "Educational activities",
                    "Alaska programming",
                    "Youth programs",
                    "Family excursions",
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
                    However, the onboard atmosphere is generally quieter and
                    more destination-focused.
                  </p>
                </div>

                <div className="azs-ent-divider"></div>

                <h4 className="azs-ent-group-title">Best For:</h4>

                <p className="azs-ent-intro">
                  Families with older children and teenagers interested in
                  Alaska itself.
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
              Disney Family Adventures vs Holland America Alaska Expertise
            </p>
          </div>

          {/* Cards Grid */}
          <div className="ake-cards-grid">
            {/* Disney Card */}
            <div className="ake-card ake-disney-card">
              <div className="ake-card-image-wrap">
                <img
                  src={DisneyExperience}
                  alt="Disney Cruise Line Alaska experience"
                  className="ake-card-img"
                />
                <div className="ake-card-image-overlay"></div>
                <span className="ake-card-image-badge">Disney Cruise Line</span>
              </div>

              <div className="ake-card-content">
                <div className="ake-card-header">
                  <div className="ake-card-icon-wrap">
                    <Sparkles size={22} />
                  </div>
                  <h3 className="ake-card-title">Disney Cruise Line</h3>
                </div>

                <p className="ake-card-intro">
                  Disney offers excellent Alaska itineraries and destination
                  experiences.
                </p>

                <h4 className="ake-card-group-label">Guests enjoy:</h4>
                <ul className="ake-card-features-list">
                  {[
                    {
                      title: "Glacier Viewing",
                      desc: "Scenic cruising through Inside Passage glacier fields.",
                    },
                    {
                      title: "Wildlife Excursions",
                      desc: "Spot majestic whales, eagles, and shore bears.",
                    },
                    {
                      title: "Nature Presentations",
                      desc: "Informative talks led by onboard naturalists.",
                    },
                    {
                      title: "Alaska-Themed Activities",
                      desc: "Onboard crafts, regional foods, and local experiences.",
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

                <div className="ake-card-highlight">
                  <p>Disney does a great job introducing families to Alaska.</p>
                </div>
              </div>
            </div>

            {/* Holland America Card */}
            <div className="ake-card ake-princess-card">
              <div className="ake-card-image-wrap">
                <img
                  src={HollandExperience}
                  alt="Holland America Alaska expertise"
                  className="ake-card-img"
                />
                <div className="ake-card-image-overlay"></div>
                <span className="ake-card-image-badge ake-princess-badge">
                  Holland America
                </span>
              </div>

              <div className="ake-card-content">
                <div className="ake-card-header">
                  <div className="ake-card-icon-wrap ake-princess-icon-wrap">
                    <Crown size={22} />
                  </div>
                  <h3 className="ake-card-title">Holland America</h3>
                </div>

                <p className="ake-card-intro">
                  Alaska is one of Holland America's signature destinations.
                </p>

                <h4 className="ake-card-group-label">Advantages include:</h4>

                <ul className="ake-card-features-list">
                  {[
                    {
                      title: "Decades of Experience",
                      desc: "Among the most established Alaska cruise operators.",
                    },
                    {
                      title: "Alaska-Focused Programming",
                      desc: "Deep educational enrichment throughout the voyage.",
                    },
                    {
                      title: "Destination Specialists",
                      desc: "Experts provide insight into Alaska's wildlife, geology, and culture.",
                    },
                    {
                      title: "Strong Local Connections",
                      desc: "Extensive relationships throughout the region.",
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
                  <span className="ake-winner-label">
                    Winner: Holland America
                  </span>
                  <p>
                    Few cruise lines possess Holland America's depth of Alaska
                    knowledge.
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
              Family-Friendly Staterooms vs Adult-Focused Alaska Comfort
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
                  Winner for Families
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
                  Disney cabins excel for families.
                </p>

                <div className="azs-suites-body">
                  <h4 className="azs-suites-group-title">Features include:</h4>

                  <ul className="azs-suites-list">
                    {[
                      "Split bathrooms",
                      "Family-friendly layouts",
                      "Connecting cabins",
                      "Concierge suites",
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
                      Winner for Families: Disney
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Holland America Card */}
            <div className="azs-suites-card azs-azamara-suites">
              <div className="azs-suites-image-wrap">
                <img
                  src={HollandSuites}
                  alt="Holland America Alaska stateroom"
                  className="azs-suites-img"
                />
                <span className="azs-suites-image-badge">
                  Winner for Couples
                </span>
              </div>

              <div className="azs-suites-content">
                <div className="azs-suites-card-header">
                  <div className="azs-suites-icon-circle">
                    <Ship size={24} className="azs-suites-icon" />
                  </div>
                  <h3 className="azs-suites-title">
                    Holland America Staterooms
                  </h3>
                </div>

                <p className="azs-suites-intro">
                  Designed primarily for adult comfort.
                </p>

                <div className="azs-suites-body">
                  <h4 className="azs-suites-group-title">Features include:</h4>

                  <ul className="azs-suites-list">
                    {[
                      "Comfortable furnishings",
                      "Scenic viewing",
                      "Premium suites",
                      "Alaska-focused amenities",
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
                      Winner for Couples: Holland America
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
                Disney is difficult to beat when it comes to onboard
                entertainment.
              </p>

              <div className="dve-highlights-list">
                <div className="dve-highlight-item">
                  <div className="dve-highlight-icon-box">
                    <Theater size={20} />
                  </div>
                  <div className="dve-highlight-info">
                    <h4>Broadway-Style Productions</h4>
                    <p>Award-winning shows.</p>
                  </div>
                </div>

                <div className="dve-highlight-item">
                  <div className="dve-highlight-icon-box">
                    <Smile size={20} />
                  </div>
                  <div className="dve-highlight-info">
                    <h4>Character Experiences</h4>
                    <p>Unique Disney interactions.</p>
                  </div>
                </div>

                <div className="dve-highlight-item">
                  <div className="dve-highlight-icon-box">
                    <Users size={20} />
                  </div>
                  <div className="dve-highlight-info">
                    <h4>Family Activities</h4>
                    <p>Entertainment designed for all ages.</p>
                  </div>
                </div>

                <div className="dve-highlight-item">
                  <div className="dve-highlight-icon-box">
                    <Film size={20} />
                  </div>
                  <div className="dve-highlight-info">
                    <h4>Movies and Interactive Events</h4>
                    <p>Popular throughout the voyage.</p>
                  </div>
                </div>
              </div>

              <div className="dve-winner-footer" style={{ marginTop: "10px" }}>
                <span className="dve-footer-badge">Winner: Disney</span>
              </div>

              <p className="dve-card-intro" style={{ marginTop: "16px" }}>
                Entertainment is one of Disney's greatest strengths.
              </p>
            </div>

            {/* Holland America Card */}
            <div className="dve-compare-card dve-viking-card">
              <div className="dve-card-badge">Holland America Line</div>

              <div className="dve-card-icon-header">
                <Music className="dve-card-header-icon" size={32} />
                <h3>Holland America Entertainment</h3>
              </div>

              <p className="dve-card-intro">
                Holland America focuses on destination enrichment and a more
                relaxed onboard atmosphere.
              </p>

              <div className="dve-highlights-list">
                <div className="dve-highlight-item">
                  <div className="dve-highlight-icon-box">
                    <Music size={20} />
                  </div>
                  <div className="dve-highlight-info">
                    <h4>Live Music</h4>
                    <p>Performances throughout the ship.</p>
                  </div>
                </div>

                <div className="dve-highlight-item">
                  <div className="dve-highlight-icon-box">
                    <Mic size={20} />
                  </div>
                  <div className="dve-highlight-info">
                    <h4>Cultural Presentations</h4>
                    <p>Programs focused on Alaska's culture and history.</p>
                  </div>
                </div>

                <div className="dve-highlight-item">
                  <div className="dve-highlight-icon-box">
                    <Globe size={20} />
                  </div>
                  <div className="dve-highlight-info">
                    <h4>Enrichment Programs</h4>
                    <p>Educational experiences tied to the destination.</p>
                  </div>
                </div>

                <div className="dve-highlight-item">
                  <div className="dve-highlight-icon-box">
                    <Coffee size={20} />
                  </div>
                  <div className="dve-highlight-info">
                    <h4>Relaxed Evening Entertainment</h4>
                    <p>A quieter and more destination-focused atmosphere.</p>
                  </div>
                </div>
              </div>

              <p className="dve-card-intro" style={{ marginTop: "16px" }}>
                The destination remains the primary attraction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LAND TOURS AND ALASKA CRUISETOURS */}
      <section className="lth-landtours-section" id="lth-landtours">
        <div className="lth-container">
          {/* Section Header */}
          <div className="lth-section-header">
            <h2 className="lth-section-title">
              Land Tours and Alaska Cruisetours
            </h2>
            <div className="lth-accent-line"></div>
            <p className="lth-section-subtitle">
              Compare Cruise-Only Vacations with Comprehensive Alaska
              Exploration
            </p>
          </div>

          {/* Main Visual Layout */}
          <div className="lth-main-grid">
            {/* Visual Column (Image and Key Highlight) */}
            <div className="lth-visual-col">
              <div className="lth-image-wrapper">
                <img
                  src={LandTours}
                  alt="Alaska Land Tours and Cruisetours Wilderness"
                  className="lth-main-image"
                />
                <div className="lth-image-overlay">
                  <div className="lth-image-content">
                    <span className="lth-badge">Inside the Great Land</span>
                    <h3 className="lth-image-title">Denali & The Yukon</h3>
                    <p className="lth-image-desc">
                      Experience the rugged beauty of the Alaskan interior with
                      wilderness lodges, luxury dome rail cars, and pristine
                      national parks.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Comparison Cards Column */}
            <div className="lth-cards-col">
              {/* Disney Card */}
              <div className="lth-card lth-disney-card">
                <div className="lth-card-header">
                  <div className="lth-icon-wrap">
                    <Ship size={22} />
                  </div>
                  <h3 className="lth-card-title">Disney Alaska Cruises</h3>
                </div>

                <p className="lth-card-intro">
                  Disney primarily focuses on cruise-only experiences.
                </p>

                <ul className="lth-feature-list">
                  <li className="lth-feature-item">
                    <div className="lth-feature-icon-minus">
                      <Minus size={14} />
                    </div>
                    <span>
                      Limited land tour programs and wilderness lodges.
                    </span>
                  </li>
                  <li className="lth-feature-item">
                    <div className="lth-feature-icon">
                      <Check size={14} />
                    </div>
                    <span>Excellent family-focused shore excursions.</span>
                  </li>
                  <li className="lth-feature-item">
                    <div className="lth-feature-icon">
                      <Check size={14} />
                    </div>
                    <span>
                      Cruise-only Alaska voyages with Disney entertainment.
                    </span>
                  </li>
                </ul>

                <div className="lth-card-highlight">
                  <p>
                    Ideal for families seeking a cruise-focused Alaska vacation
                    with family-friendly experiences onboard.
                  </p>
                </div>
              </div>

              {/* Holland America Card */}
              <div className="lth-card lth-holland-card lth-winner-card">
                <div className="lth-card-header">
                  <div className="lth-icon-wrap lth-winner-icon-wrap">
                    <Crown size={22} />
                  </div>
                  <h3 className="lth-card-title">
                    Holland America Cruisetours
                  </h3>
                  <span className="lth-winner-badge">Clear Winner</span>
                </div>

                <p className="lth-card-intro">
                  One of Holland America's greatest advantages in Alaska.
                </p>

                <ul className="lth-feature-list">
                  <li className="lth-feature-item">
                    <div className="lth-feature-icon">
                      <Check size={14} />
                    </div>
                    <span>
                      <strong>Denali & Yukon Packages:</strong> Seamless
                      land-and-sea journeys.
                    </span>
                  </li>
                  <li className="lth-feature-item">
                    <div className="lth-feature-icon">
                      <Check size={14} />
                    </div>
                    <span>
                      <strong>McKinley Chalet Resort:</strong> Premium stays
                      near Denali.
                    </span>
                  </li>
                  <li className="lth-feature-item">
                    <div className="lth-feature-icon">
                      <Check size={14} />
                    </div>
                    <span>
                      <strong>Scenic Rail Journeys:</strong> Ride in
                      double-decker glass dome train cars.
                    </span>
                  </li>
                </ul>

                <div className="lth-card-highlight lth-winner-highlight">
                  <p>
                    <strong>Clear Winner: Holland America</strong>
                    <br />
                    Travelers wanting a comprehensive Alaska experience often
                    choose a Holland America Cruisetour.
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
              Disney Premium Family Experiences vs Holland America Alaska Value
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
                Disney typically commands premium pricing.
              </p>

              <ul className="Ejvs-feature-list">
                {[
                  "Entertainment",
                  "Family programming",
                  "Disney branding",
                  "Exceptional service",
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
                  Costs reflect Disney's premium family-focused cruise
                  experience.
                </p>
              </div>
            </div>

            {/* Holland America Card */}
            <div className="Ejvs-pricing-card Ejvs-seabourn-card">
              <div className="Ejvs-card-header">
                <div className="Ejvs-card-icon-wrap">
                  <Award size={24} className="Ejvs-card-icon" />
                </div>

                <h3 className="Ejvs-card-title">
                  Holland America Alaska Cruises
                </h3>
              </div>

              <p className="Ejvs-card-intro">
                Holland America often offers strong value for Alaska-focused
                travelers.
              </p>

              <ul className="Ejvs-feature-list">
                {[
                  "Lower fares",
                  "More itinerary choices",
                  "Better destination-focused value",
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
                  <strong>Winner: Holland America</strong>
                  <br />
                  For Alaska-focused travelers, Holland America generally
                  delivers stronger value.
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
              Comparing Disney Alaska Cruises and Holland America Alaska Cruises
              for Multi-Generational Family Vacations
            </p>
          </div>

          <div className="dve-winner-grid">
            {/* Disney Card */}
            <div className="dve-winner-card dve-disney-winner">
              <div className="dve-winner-image-wrap">
                <img
                  src={DisneyAlaskaLine}
                  alt="Disney Alaska multigenerational family cruise"
                  className="dve-winner-img"
                />
                <span className="dve-winner-badge">
                  Young Grandchildren: Winner
                </span>
              </div>

              <div className="dve-winner-content">
                <h3 className="dve-winner-title">Disney Alaska</h3>

                <p className="dve-winner-intro">
                  Disney excels at bringing generations together.
                </p>

                <div className="dve-winner-divider"></div>

                <h4 className="dve-advantages-title">
                  Grandparents Appreciate:
                </h4>

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
                    <span>Convenient planning</span>
                  </li>
                  <li>
                    <Check size={18} className="dve-advantage-icon" />
                    <span>Child-friendly entertainment</span>
                  </li>
                </ul>

                <div className="dve-winner-footer">
                  <span className="dve-footer-badge">
                    Ideal for younger grandchildren
                  </span>
                </div>
              </div>
            </div>

            {/* Holland America Card */}
            <div className="dve-winner-card dve-viking-winner">
              <div className="dve-winner-image-wrap">
                <img
                  src={HollandAlaskaLine}
                  alt="Holland America Alaska family exploration"
                  className="dve-winner-img"
                />
                <span className="dve-winner-badge">Teens & Adults: Winner</span>
              </div>

              <div className="dve-winner-content">
                <h3 className="dve-winner-title">Holland America Alaska</h3>

                <p className="dve-winner-intro">
                  Holland America appeals more strongly to adult families and
                  destination-focused travelers.
                </p>

                <div className="dve-winner-divider"></div>

                <h4 className="dve-advantages-title">Appeals To:</h4>

                <ul className="dve-advantages-list">
                  <li>
                    <Check size={18} className="dve-advantage-icon" />
                    <span>Adult families</span>
                  </li>
                  <li>
                    <Check size={18} className="dve-advantage-icon" />
                    <span>Older grandchildren</span>
                  </li>
                  <li>
                    <Check size={18} className="dve-advantage-icon" />
                    <span>Nature-focused travelers</span>
                  </li>
                </ul>

                <div className="dve-winner-footer">
                  <span className="dve-footer-badge">
                    Best for teens and adults interested in Alaska
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
              Winner: Young Grandchildren → Disney | Teenagers & Adults →
              Holland America
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
            <h2 className="azs-h2">Relaxing Cruise Views: Sunset Sailing</h2>
            <div className="azs-accent-line"></div>

            <p className="azs-video-intro">
              Experience the peaceful beauty of sunset at sea with Disney Cruise
              Line. As the sun dips below the horizon, guests can enjoy stunning
              ocean views, fresh sea breezes, and moments of relaxation that
              make every voyage unforgettable. 
            </p>
          </div>

          <div className="azs-video-wrapper">
            <div className="azs-video-frame">
              <iframe
                src="https://www.youtube.com/embed/fgt9NfZnfjs"
                title="Relaxing Cruise Views: Sunset Sailing | Disney Cruise Line"
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
              Both Disney Alaska Cruises and Holland America Alaska Cruises
              offer incredible experiences, but the right choice depends on your
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
                  "You're traveling with children",
                  "You want Disney entertainment",
                  "Family memories are the priority",
                  "Grandparents are traveling with grandchildren",
                  "You enjoy Disney experiences",
                  "You want exceptional family service",
                ].map((item, i) => (
                  <li key={i} className="Asc-verdict-item">
                    <Check size={18} className="Asc-verdict-icon" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Holland America Column */}
            <div className="Asc-verdict-card Asc-verdict-regent">
              <h3 className="Asc-verdict-card-title">
                Choose Holland America Alaska If:
              </h3>

              <ul className="Asc-verdict-list">
                {[
                  "Alaska is your primary focus",
                  "Wildlife experiences matter",
                  "You want Glacier Bay opportunities",
                  "You enjoy destination enrichment",
                  "Culinary experiences are important",
                  "You want a land-and-sea vacation",
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
                  "Family reunions",
                  "First-time Alaska travelers",
                ].map((item, i) => (
                  <li key={i}>
                    <Check size={16} className="Asc-icon-green" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="Asc-who-card Asc-who-no">
              <h3 className="Asc-who-title">Holland America Alaska Cruises</h3>

              <ul className="Asc-who-list">
                {[
                  "Couples",
                  "Retirees",
                  "Nature enthusiasts",
                  "Wildlife lovers",
                  "Experienced cruisers",
                  "Alaska-focused travelers",
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
            src={CTAImage}
            alt="Disney Alaska Cruises vs Holland America Alaska Cruises"
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
                  Disney Alaska Cruises vs Holland America: Which Is Right for
                  You?
                </h2>

                <div className="Asc-help-accent"></div>
              </div>

              <div className="Asc-help-grid">
                <div className="Asc-help-info">
                  <p className="Asc-help-intro">
                    Both Disney Cruise Line and Holland America deliver
                    exceptional Alaska vacations, but they focus on different
                    priorities.
                  </p>

                  <p className="Asc-help-intro">
                    <strong>Disney Alaska Cruises</strong> create unforgettable
                    family experiences filled with entertainment, service, and
                    multigenerational memories.
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
                      <strong>Holland America Alaska Cruises</strong> provide
                      deeper destination immersion, stronger Alaska expertise,
                      outstanding wildlife experiences, and comprehensive
                      land-and-sea exploration opportunities.
                      <br />
                      <br />
                      If your vacation is primarily about spending quality time
                      together as a family, Disney is the clear winner.
                      <br />
                      <br />
                      If your goal is to experience Alaska as deeply as possible
                      through glaciers, wildlife, national parks, and local
                      culture, Holland America is one of the best choices in the
                      industry.
                      <br />
                      <br />
                      Ultimately, the decision comes down to one simple
                      question:
                      <br />
                      <br />
                      <strong>
                        Are you looking for a Disney vacation in Alaska, or an
                        Alaska vacation enhanced by exceptional cruising?
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
                      "Holland America is one of the most experienced Alaska cruise operators.",
                      "Both offer excellent glacier viewing and scenic cruising.",
                      "Holland America provides stronger wildlife, cultural, and land exploration opportunities.",
                      "The best choice depends on whether you prioritize family-focused fun or destination immersion.",
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

export default DisneyAlaskavsHollandAmerica;
