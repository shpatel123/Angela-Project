import { useState, useEffect } from "react";
import {
  MapPin,
  Award,
  Check,
  Plus,
  Minus,
  ArrowRight,
  Star,
  Quote,
  Users,
  Compass,
  Landmark,
  Home,
  Binoculars,
  Mountain,
  Waves,
  Globe,
  UtensilsCrossed,
  Castle,
  Ship,
} from "lucide-react";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela.jpeg";
import { Helmet } from "react-helmet-async";
import "../DisneyCruisevsVikingOcean/DisneyCruisevsVikingOcean.css";

// ─── DESTINATION DATA ────────────────────────────────────────────────────────
const europeDestinations = [
  {
    id: "mediterranean",
    badge: "Mediterranean",
    title: "Mediterranean Cruises",
    icon: Waves,
    desc: "The Mediterranean is one of Disney's most popular European cruise destinations, offering an ideal balance of culture, history, food, and family-friendly experiences.",
    columns: [
      {
        label: "Countries Visited",
        items: ["Italy", "Spain", "France", "Greece", "Croatia", "Malta"],
      },
      {
        label: "Port Highlights",
        items: [
          "Rome — Ancient history & landmarks",
          "Barcelona — Art & vibrant culture",
          "Naples — Gateway to Pompeii",
          "Cannes — French Riviera glamour",
        ],
      },
    ],
    themeLabel: "Most Popular Europe Region",
    themeText:
      "The Mediterranean delivers culture, history, stunning coastlines, and world-famous cuisine — all perfectly suited for families and multigenerational travelers.",
  },
  {
    id: "greek-isles",
    badge: "Greek Isles",
    title: "Greek Isles Cruises",
    icon: Landmark,
    desc: "The Greek Islands are among Europe's most breathtaking destinations, combining ancient ruins, whitewashed villages, and Mediterranean cuisine with unmatched natural beauty.",
    columns: [
      {
        label: "Islands Visited",
        items: ["Santorini", "Mykonos", "Rhodes", "Crete"],
      },
      {
        label: "Popular Activities",
        items: [
          "Exploring ancient ruins",
          "Visiting whitewashed villages",
          "Enjoying Mediterranean cuisine",
          "Discovering Greek mythology & history",
        ],
      },
    ],
    themeLabel: "Education & Adventure",
    themeText:
      "Greek Isles itineraries appeal to families seeking a blend of cultural education and outdoor adventure in one of the world's most storied regions.",
  },
  {
    id: "northern-europe",
    badge: "Northern Europe",
    title: "Northern Europe Cruises",
    icon: Mountain,
    desc: "Northern Europe offers a completely different experience — spectacular natural scenery, rich history, and fascinating cultures across Scandinavia, the British Isles, and beyond.",
    columns: [
      {
        label: "Destinations",
        items: [
          "Norway",
          "Denmark",
          "Sweden",
          "Finland",
          "Iceland",
          "United Kingdom",
        ],
      },
      {
        label: "Highlights",
        items: [
          "Norwegian Fjords",
          "Copenhagen — family-friendly capital",
          "Iceland — volcanoes & waterfalls",
          "Baltic Cities — history & architecture",
        ],
      },
    ],
    themeLabel: "Cultural Immersion & Scenic Beauty",
    themeText:
      "Northern Europe is especially appealing for travelers seeking dramatic landscapes, cultural immersion, and destinations unlike any other on earth.",
  },
];

const faqData = [
  {
    q: "Are Disney Europe Cruises good for families?",
    a: "Yes. Disney Europe Cruises are among the best options for families seeking to combine sightseeing with entertainment and convenience.",
  },
  {
    q: "What countries do Disney Europe Cruises visit?",
    a: "Depending on the itinerary, cruises may visit Spain, Italy, France, Greece, Croatia, Norway, Iceland, Denmark, and other European destinations.",
  },
  {
    q: "Are Disney Europe Cruises good for grandparents?",
    a: "Absolutely. Europe cruises offer educational experiences, cultural exploration, and convenient travel that appeal to multiple generations.",
  },
  {
    q: "Do Disney Europe Cruises include character experiences?",
    a: "Yes. Disney characters appear onboard throughout the voyage.",
  },
  {
    q: "Are shore excursions family-friendly?",
    a: "Many Disney excursions are designed specifically with families in mind.",
  },
  {
    q: "What is the best Disney Europe itinerary?",
    a: "Mediterranean and Greek Isles cruises are especially popular, though Northern Europe itineraries also attract many travelers.",
  },
  {
    q: "Is Europe too busy for children?",
    a: "Not at all. Disney helps make European travel engaging and accessible for younger travelers.",
  },
  {
    q: "How long are Disney Europe Cruises?",
    a: "Most itineraries range from 7 to 12 nights, though schedules vary by season.",
  },
  {
    q: "Are Disney Europe Cruises worth the cost?",
    a: "Many families believe the combination of European exploration, Disney service, and family-friendly experiences justifies the premium pricing.",
  },
  {
    q: "Can grandparents travel with grandchildren on Disney Europe Cruises?",
    a: "Yes. Disney Europe Cruises are an excellent choice for multigenerational travel.",
  },
  {
    q: "What is the best time of year to take a Disney Europe Cruise?",
    a: "Late spring (May–June) and early fall (September–October) are generally ideal, offering pleasant weather, fewer crowds, and a wide selection of itineraries. Summer sailings are also popular for families traveling during school holidays.",
  },
  {
    q: "Do Disney Europe Cruises require a visa for US travelers?",
    a: "Most European ports visited by Disney Cruise Line fall within the Schengen Zone, which US citizens can enter visa-free for up to 90 days. However, travelers should verify entry requirements for each destination before departure, as rules may vary.",
  },
  {
    q: "Are there kids' clubs and supervised activities onboard Disney Europe Cruises?",
    a: "Yes. Disney Cruise Line offers age-specific youth clubs — including the Oceaneer Club & Lab for younger children and Edge and Vibe for tweens and teens — providing supervised, theme-based programming throughout the voyage.",
  },
  {
    q: "What type of ship does Disney use for European itineraries?",
    a: "Disney typically deploys its larger, newer vessels on European itineraries — including ships like the Disney Fantasy or Disney Wish class. These ships feature Broadway-style shows, multiple dining experiences, adult-exclusive areas, and full Disney character programming.",
  },
  {
    q: "Can I book shore excursions directly through Disney for Europe?",
    a: "Yes. Disney offers a curated selection of shore excursions for each European port, ranging from guided cultural tours and family adventures to food experiences and scenic explorations. Booking through Disney ensures coordination with the ship's schedule and adds a layer of convenience and peace of mind.",
  },
];

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
        "Luxury travel agency specializing in Disney cruises, luxury cruises, family travel, multigenerational vacations, European cruises, and custom travel planning.",
    },

    {
      "@type": "TravelAgency",
      "@id": "https://www.tripsandships.com/#travelagency",
      name: "Trips & Ships Luxury Travel",
      url: "https://www.tripsandships.com",
      description:
        "Luxury travel experts helping families plan Disney Europe Cruises, Mediterranean voyages, Northern Europe adventures, and multigenerational cruise vacations.",
    },

    {
      "@type": "WebPage",
      "@id": "https://www.tripsandships.com/disney-europe-cruises",
      url: "https://www.tripsandships.com/disney-europe-cruises",
      name: "Disney Europe Cruises",
      description:
        "Explore Disney Europe Cruises featuring Mediterranean, Greek Isles, and Northern Europe itineraries. Discover family-friendly European cruise vacations filled with culture, history, and Disney magic.",
    },

    {
      "@type": "Article",
      "@id": "https://www.tripsandships.com/disney-europe-cruises#article",
      headline: "Disney Europe Cruises",
      description:
        "A comprehensive guide to Disney Europe Cruises, including Mediterranean cruises, Greek Isles itineraries, Northern Europe voyages, family travel experiences, and multigenerational cruise vacations.",
      author: {
        "@type": "Organization",
        name: "Trips & Ships Luxury Travel",
      },
      publisher: {
        "@id": "https://www.tripsandships.com/#organization",
      },
      mainEntityOfPage: {
        "@id": "https://www.tripsandships.com/disney-europe-cruises",
      },
    },

    {
      "@type": "TouristTrip",
      "@id": "https://www.tripsandships.com/disney-europe-cruises#touristtrip",
      name: "Disney Europe Cruises",
      description:
        "Family-friendly Disney Cruise Line vacations exploring Europe, including Mediterranean, Greek Isles, and Northern Europe destinations.",
      touristType: [
        "Families",
        "Multigenerational Travelers",
        "Grandparents and Grandchildren",
        "Disney Fans",
        "First-Time European Travelers",
      ],
      itinerary: [
        {
          "@type": "Place",
          name: "Italy",
        },
        {
          "@type": "Place",
          name: "Spain",
        },
        {
          "@type": "Place",
          name: "France",
        },
        {
          "@type": "Place",
          name: "Greece",
        },
        {
          "@type": "Place",
          name: "Croatia",
        },
        {
          "@type": "Place",
          name: "Norway",
        },
        {
          "@type": "Place",
          name: "Iceland",
        },
        {
          "@type": "Place",
          name: "Denmark",
        },
      ],
    },

    {
      "@type": "Review",
      "@id": "https://www.tripsandships.com/disney-europe-cruises#review",
      itemReviewed: {
        "@type": "TravelAction",
        name: "Disney Europe Cruises",
      },
      reviewBody:
        "Disney Europe Cruises successfully combine iconic European destinations with Disney's family-focused service, entertainment, accommodations, and multigenerational appeal.",
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
      "@type": "BreadcrumbList",
      "@id": "https://www.tripsandships.com/disney-europe-cruises#breadcrumb",
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
          name: "Disney Cruises",
          item: "https://www.tripsandships.com/disney-cruises",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Disney Europe Cruises",
          item: "https://www.tripsandships.com/disney-europe-cruises",
        },
      ],
    },

    {
      "@type": "FAQPage",
      "@id": "https://www.tripsandships.com/disney-europe-cruises#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Are Disney Europe Cruises good for families?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Disney Europe Cruises are among the best options for families seeking to combine sightseeing, entertainment, convenience, and family experiences.",
          },
        },
        {
          "@type": "Question",
          name: "What countries do Disney Europe Cruises visit?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Depending on the itinerary, Disney Europe Cruises may visit Spain, Italy, France, Greece, Croatia, Norway, Iceland, Denmark, and other European destinations.",
          },
        },
        {
          "@type": "Question",
          name: "Are Disney Europe Cruises good for grandparents?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. Disney Europe Cruises provide educational experiences, cultural exploration, comfortable travel, and activities suitable for multiple generations.",
          },
        },
        {
          "@type": "Question",
          name: "Do Disney Europe Cruises include character experiences?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Disney characters appear onboard throughout the voyage and remain one of the most popular family experiences.",
          },
        },
        {
          "@type": "Question",
          name: "Are shore excursions family-friendly?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Many Disney shore excursions are specifically designed for families and balance education, exploration, and fun.",
          },
        },
        {
          "@type": "Question",
          name: "What is the best Disney Europe itinerary?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Mediterranean and Greek Isles cruises are especially popular, while Northern Europe itineraries appeal to travelers seeking scenic beauty and cultural immersion.",
          },
        },
        {
          "@type": "Question",
          name: "Is Europe too busy for children?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Disney helps make European travel engaging and accessible for younger travelers through family-focused experiences and excursions.",
          },
        },
        {
          "@type": "Question",
          name: "How long are Disney Europe Cruises?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most Disney Europe Cruise itineraries range from 7 to 12 nights, depending on destination and season.",
          },
        },
        {
          "@type": "Question",
          name: "Are Disney Europe Cruises worth the cost?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Many families believe the combination of Disney service, family entertainment, European exploration, and convenience justifies the premium pricing.",
          },
        },
        {
          "@type": "Question",
          name: "Can grandparents travel with grandchildren on Disney Europe Cruises?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Disney Europe Cruises are an excellent choice for grandparents, grandchildren, and multigenerational family groups.",
          },
        },
      ],
    },
  ],
};

// ─── FAQ COMPONENT ───────────────────────────────────────────────────────────
function FAQ() {
  const [open, setOpen] = useState(null);
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
const DisneyEuropeCruises = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [readMore, setReadMore] = useState(false);
  const images = [];
  const [activeDest, setActiveDest] = useState("mediterranean");
  const currentDest =
    europeDestinations.find((d) => d.id === activeDest) ||
    europeDestinations[0];
  const ActiveIcon = currentDest.icon;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % (images.length || 1));
    }, 6000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="Asc-page-wrapper">
      <Helmet>
        <title>Disney Europe Cruises | Family Adventures Across Europe</title>
        <meta
          name="title"
          content="Disney Europe Cruises for Families & Multigenerational Travelers"
        />
        <meta
          name="description"
          content="Explore Disney Europe Cruises and discover iconic destinations across the Mediterranean, Northern Europe, Greece, Italy, Spain, and beyond. Experience Disney magic combined with Europe's rich history, culture, and unforgettable family adventures."
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
            className={`Scenic_hero_bg ${index === currentSlide ? "active" : ""}`}
            style={{ backgroundImage: `url(${img})` }}
          ></div>
        ))}
        <div className="Scenic_hero_overlay"></div>
        <div className="Scenic_hero_content">
          <h1>Discover Europe Through the Magic of Disney Cruise Line</h1>
          <p>
            Europe offers some of the world's most extraordinary travel
            experiences.
          </p>
          <p>
            From ancient cities and medieval castles to stunning coastlines and
            world-famous landmarks, Europe combines history, culture, art, and
            adventure in ways few destinations can match.
          </p>
          {readMore && (
            <>
              <p>
                Now imagine exploring Europe while enjoying the service,
                entertainment, and family-focused experience of Disney Cruise
                Line.
              </p>
              <p>
                Disney Europe Cruises combine iconic European destinations with
                Disney's exceptional hospitality, creating unforgettable
                vacations for families, grandparents, couples, and
                multigenerational travelers.
              </p>
              <p>
                Whether you're dreaming of sailing through the Mediterranean,
                exploring the Greek Isles, visiting historic Northern European
                cities, or introducing children to Europe's rich heritage,
                Disney Europe Cruises provide an extraordinary way to experience
                the continent.
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

      {/* ══ WHY CHOOSE A DISNEY EUROPE CRUISE ════════════════════════════════ */}
      <section className="adg-c-section adg-c-bg-dark" id="adg-why-europe">
        <div className="adg-c-container">
          <div className="adg-c-why-grid">
            {/* LEFT */}
            <div className="adg-c-why-left">
              <span className="adg-c-eyebrow adg-c-eyebrow-light">
                Family Travel Trends
              </span>
              <h2 className="adg-c-h2 adg-c-h2-light">
                Why Choose a Disney Europe Cruise?
              </h2>
              <div className="aac-accent-line aac-accent-white"></div>
              <p className="adg-c-lead adg-c-lead-light">
                European travel can sometimes feel overwhelming.
              </p>
              <p className="adg-c-body adg-c-body-light">
                Multiple cities, hotels, transportation arrangements, and
                language differences can create logistical challenges. Disney
                Cruise Line simplifies the experience.
              </p>
              <br />
              <p className="adg-c-body adg-c-body-light">
                Disney allows travelers to focus on enjoying Europe rather than
                managing complicated travel details.
              </p>
            </div>
            {/* RIGHT */}
            <div className="adg-c-why-right">
              <div className="adg-c-why-card">
                <span className="adg-c-why-card-label">Guests Can:</span>
                <div className="adg-c-pill-grid">
                  {[
                    "Visit Multiple Countries on One Trip",
                    "Unpack Only Once",
                    "Enjoy Family-Friendly Excursions",
                    "Experience World-Class Entertainment",
                    "Explore Iconic Destinations",
                    "Travel Comfortably Between Ports",
                    "Create Shared Family Memories",
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

      {/* ══ VIDEO SECTION ════════════════════════════════════════════════════ */}
      <section
        className="azs-video-section"
        id="azs-video-europe"
        style={{ backgroundColor: "var(--bg-white)" }}
      >
        <div className="azs-container">
          <div className="azs-section-header">
            <h2 className="azs-h2">
              Explore Europe with Disney Cruise Line
            </h2>
            <div className="azs-accent-line"></div>
            <p className="azs-video-intro">
              Experience the iconic landmarks, breathtaking coastlines, and rich
              cultures of Europe aboard Disney Cruise Line. From the
              sun-drenched Mediterranean to the dramatic fjords of Northern
              Europe, discover why a Disney Europe Cruise is one of the most
              memorable family vacation experiences available today.
            </p>
          </div>
          <div className="azs-video-wrapper">
            <div className="azs-video-frame">
              <iframe
                src="https://www.youtube.com/embed/oMJIrnbdpvM"
                title="Discover Europe Through the Magic of Disney Cruise Line"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* ══ WHAT MAKES EUROPE SPECIAL ════════════════════════════════════════ */}
      <section className="dac-special-section">
        <div className="dac-special-container">
          <div className="dac-special-header">
            <h2 className="dac-special-title">What Makes Europe Special?</h2>
            <div className="dac-special-accent"></div>
            <p className="dac-special-lead">
              Europe offers remarkable diversity within a relatively small
              geographic area — a single cruise can include millennia of
              history, world-famous landmarks, and stunning coastlines.
            </p>
          </div>
          <div className="dac-special-grid">
            {[
              {
                icon: Landmark,
                title: "Ancient History",
                desc: "Explore sites dating back thousands of years — from Roman forums to Greek temples — that bring history textbooks to life.",
              },
              {
                icon: Globe,
                title: "World-Famous Landmarks",
                desc: "Visit destinations you've seen in books, films, and history classes — the Colosseum, the Eiffel Tower, the Acropolis, and more.",
              },
              {
                icon: Users,
                title: "Diverse Cultures",
                desc: "Experience different traditions, languages, and customs across multiple countries, all accessible from a single ship.",
              },
              {
                icon: UtensilsCrossed,
                title: "Incredible Cuisine",
                desc: "Enjoy authentic regional specialties at every port — from tapas in Spain to pasta in Italy to pastries in France.",
              },
              {
                icon: Waves,
                title: "Beautiful Coastlines",
                desc: "Discover stunning beaches, Greek islands, and scenic Mediterranean and Nordic ports unlike anywhere else on earth.",
              },
              {
                icon: Binoculars,
                title: "Educational Experiences",
                desc: "Perfect for children, teens, and lifelong learners — Europe is a living classroom spanning art, architecture, and world history.",
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="dac-special-card">
                  <div className="dac-special-icon-wrap">
                    <Icon size={24} />
                  </div>
                  <h3 className="dac-special-card-title">{item.title}</h3>
                  <p className="dac-special-card-desc">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══ POPULAR DISNEY EUROPE CRUISE REGIONS ════════════════════════════ */}
      <section className="luc-destinations-section" id="luc-europe-regions">
        <div className="luc-destinations-container">
          <div className="luc-destinations-header">
            <h2 className="luc-destinations-title">
              Popular Disney Europe Cruise Regions
            </h2>
            <div className="adg-c-accent-line"></div>
            <p className="luc-destinations-intro">
              Disney typically offers several types of European itineraries —
              each showcasing a distinct side of the continent's extraordinary
              history, culture, and natural beauty.
            </p>
          </div>
          <div className="luc-dest-layout">
            {/* Sidebar nav */}
            <nav className="luc-dest-nav">
              {europeDestinations.map((item) => {
                const NavIcon = item.icon;
                const isActive = activeDest === item.id;
                return (
                  <button
                    key={item.id}
                    className={`luc-dest-nav-btn ${isActive ? "luc-dest-nav-btn--active" : ""}`}
                    onClick={() => setActiveDest(item.id)}
                  >
                    <div className="luc-dest-nav-icon-wrap">
                      <NavIcon size={16} strokeWidth={1.8} />
                    </div>
                    <span className="luc-dest-nav-label">{item.badge}</span>
                    {isActive && <div className="luc-dest-nav-pip"></div>}
                  </button>
                );
              })}
            </nav>
            {/* Detail panel */}
            <div className="luc-dest-panel" key={activeDest}>
              <div className="luc-dest-img-wrap">
                <img
                  src={currentDest.image}
                  alt={currentDest.title}
                  className="luc-dest-img"
                />
                <div className="luc-dest-img-overlay">
                  <div className="luc-dest-img-icon">
                    <ActiveIcon size={22} strokeWidth={1.6} />
                  </div>
                  <span className="luc-dest-img-title">
                    {currentDest.title}
                  </span>
                </div>
              </div>
              <p className="luc-dest-panel-desc">{currentDest.desc}</p>
              <div className="luc-dest-columns">
                {currentDest.columns.map((col, cIdx) => (
                  <div key={cIdx} className="luc-dest-info-col">
                    <span className="luc-dest-info-label">{col.label}</span>
                    <div className="luc-dest-items-grid">
                      {col.items.map((item) => (
                        <div key={item} className="luc-dest-item">
                          <div className="luc-dest-item-dot"></div>
                          <span className="luc-dest-item-text">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div className="luc-dest-theme-box-note">
                <div className="luc-dest-theme-note-bar"></div>
                <div className="luc-dest-theme-note-content">
                  <span className="luc-dest-theme-note-label">
                    {currentDest.themeLabel}
                  </span>
                  <p className="luc-dest-theme-note-text">
                    {currentDest.themeText}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ DISNEY EUROPE CRUISES FOR FAMILIES ═══════════════════════════════ */}
      <section
        className="eep-section"
        style={{ backgroundColor: "var(--bg-white)" }}
      >
        <div className="eep-container">
          <div className="eep-section-header">
            <span className="eep-eyebrow">Family Adventure & Discovery</span>
            <h2 className="eep-section-title">
              Disney Europe Cruises for Families
            </h2>
            <div className="eep-accent-line"></div>
          </div>
          <div className="eep-dossier-grid">
            {/* EDUCATIONAL ADVENTURES */}
            <div className="eep-comparison-card eep-disney-card">
              <div className="eep-card-img-wrap">
                <img
                  alt="Educational adventures on a Disney Europe Cruise"
                  className="eep-card-img"
                />
                <span className="eep-card-badge eep-holland-badge">
                  Educational Adventures
                </span>
              </div>
              <div className="eep-card-body">
                <span className="eep-card-brand">Disney Europe Cruises</span>
                <h3 className="eep-card-title">Europe as a Living Classroom</h3>
                <p className="eep-card-desc">
                  Disney's family-focused approach works exceptionally well in
                  Europe. Children can learn about entire civilizations — not
                  from a textbook, but from the ground up.
                </p>
                <div className="eep-card-list-box">
                  <h4 className="eep-list-title">Children Can Learn About:</h4>
                  <ul className="eep-card-list">
                    {[
                      "Ancient Civilizations",
                      "Art & Architecture",
                      "Geography",
                      "World Cultures",
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
                    Disney designs many shore experiences specifically with
                    families in mind, balancing learning, exploration, fun, and
                    accessibility.
                  </p>
                </div>
              </div>
            </div>

            {/* FAMILY BONDING */}
            <div className="eep-comparison-card eep-holland-card">
              <div className="eep-card-img-wrap">
                <img
                  alt="Families enjoying a Disney Europe Cruise together"
                  className="eep-card-img"
                />
                <span className="eep-card-badge eep-holland-badge">
                  Family Bonding
                </span>
              </div>
              <div className="eep-card-body">
                <span className="eep-card-brand">
                  Shared Family Experiences
                </span>
                <h3 className="eep-card-title">Creating Memories Together</h3>
                <p className="eep-card-desc">
                  Parents, grandparents, and children can discover Europe
                  together. Few travel experiences create as many meaningful
                  family memories.
                </p>
                <div className="eep-card-list-box">
                  <h4 className="eep-list-title">Families Can Enjoy:</h4>
                  <ul className="eep-card-list">
                    {[
                      "Explore Ancient Ruins Together",
                      "Visit Iconic Landmarks",
                      "Attend Onboard Shows",
                      "Enjoy Shore Excursions",
                      "Discover Europe as a Group",
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
                    Disney excels at creating vacations that appeal to every
                    generation, and Europe provides the perfect backdrop for
                    unforgettable family memories.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ONBOARD DISNEY ENTERTAINMENT */}
      <section
        className="dac-ent-section"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="dac-ent-container">
          <div className="dac-ent-grid">
            <div className="dac-ent-left">
              <span className="dac-ent-eyebrow">Onboard Experiences</span>

              <h2 className="dac-ent-title">Onboard Disney Entertainment</h2>

              <div className="dac-ent-accent"></div>

              <p className="dac-ent-desc">
                Even while exploring Europe, Disney continues to deliver
                world-class onboard experiences.
              </p>

              <div className="dac-ent-badge">
                Entertainment for Every Generation
              </div>
            </div>

            <div className="dac-ent-right">
              {[
                {
                  title: "Broadway-Style Shows",
                  desc: "Award-winning productions featuring spectacular performances, storytelling, music, and stage effects for guests of all ages.",
                },
                {
                  title: "Character Experiences",
                  desc: "Meet beloved Disney characters throughout the voyage and enjoy memorable family photo opportunities.",
                },
                {
                  title: "Family Activities",
                  desc: "Interactive entertainment, themed events, games, and activities designed to bring families together.",
                },
                {
                  title: "Movies and Live Entertainment",
                  desc: "Perfect for relaxing after a day of sightseeing, with Disney films, live performances, and evening entertainment.",
                },
                {
                  title: "Youth Clubs",
                  desc: "Industry-leading programs and dedicated spaces for children and teens supervised by Disney's trained counselors.",
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
        </div>
      </section>

      {/* ══ IMAGE GALLERY ════════════════════════════════════════════════════ */}
      <section
        className="svf-section svf-gallery-section"
        style={{ background: "var(--bg-white)" }}
      >
        <div className="svf-inner">
          <div className="svf-gallery-header">
            <h2 className="svf-h2" style={{ textAlign: "center" }}>
              Europe's Greatest Moments, Experienced Through Disney
            </h2>
            <div className="svf-bar" style={{ margin: "20px auto 0" }}></div>
            <p
              className="svf-p"
              style={{
                textAlign: "center",
                maxWidth: "700px",
                margin: "20px auto 0",
              }}
            >
              From the sun-drenched Greek Isles and ancient Roman ruins to the
              dramatic fjords of Northern Europe — Disney Europe Cruises deliver
              the continent's most iconic experiences wrapped in unmatched
              family-focused service.
            </p>
          </div>
          <div className="svf-gallery-grid">
            <div className="svf-gallery-item svf-gallery-item--large">
              <div className="svf-gallery-image-wrap">
                <img
                  alt="Mediterranean coastline viewed from a Disney Europe Cruise ship"
                  className="svf-gallery-image"
                />
                <div className="svf-gallery-overlay">
                  <div className="svf-gallery-content">
                    <span className="svf-gallery-badge">Mediterranean</span>
                    <h3>Sail the Iconic Mediterranean Coast</h3>
                    <p>
                      Glide past ancient coastlines and into legendary ports as
                      the Mediterranean's beauty unfolds around you — a backdrop
                      that every generation will treasure.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="svf-gallery-item">
              <div className="svf-gallery-image-wrap">
                <img
                  alt="Santorini Greece whitewashed village on Disney Greek Isles cruise"
                  className="svf-gallery-image"
                />
                <div className="svf-gallery-overlay">
                  <div className="svf-gallery-content">
                    <span className="svf-gallery-badge">Greek Isles</span>
                    <h3>Santorini's Legendary White & Blue</h3>
                    <p>
                      Wander the iconic whitewashed villages of Santorini — a
                      scene that feels almost too beautiful to be real.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="svf-gallery-item">
              <div className="svf-gallery-image-wrap">
                <img
                  alt="Norwegian fjord scenery on a Disney Northern Europe cruise"
                  className="svf-gallery-image"
                />
                <div className="svf-gallery-overlay">
                  <div className="svf-gallery-content">
                    <span className="svf-gallery-badge">Northern Europe</span>
                    <h3>Norway's Spectacular Fjords</h3>
                    <p>
                      Cruise through towering fjords and breathtaking
                      Scandinavian landscapes that leave every traveler
                      awestruck.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="svf-gallery-item svf-gallery-item--wide">
              <div className="svf-gallery-image-wrap">
                <img
                  //   src={FlyFishingImg}
                  alt="Multigenerational family fly fishing together in an Alaskan mountain river during a Disney Alaska Cruise excursion"
                  className="svf-gallery-image"
                />
                <div className="svf-gallery-overlay">
                  <div className="svf-gallery-content">
                    <span className="svf-gallery-badge">
                      Barcelona Shore Excursion
                    </span>
                    <h3>Barcelona — Art, Architecture & Energy</h3>
                    <p>
                      Explore Gaudí's masterpieces and the vibrant culture of
                      one of Europe's most captivating cities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ BEST TIME TO CRUISE ══════════════════════════════════════════════ */}
      <section
        className="dac-timing-section"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="dac-timing-container">
          <div className="dac-timing-header">
            <h2 className="dac-timing-title">
              Best Time for Disney Europe Cruises
            </h2>
            <div className="dac-timing-accent"></div>
            <p className="dac-timing-lead">
              European cruise seasons vary depending on destination. Each season
              offers unique advantages for families and multigenerational
              travelers.
            </p>
          </div>
          <div className="dac-timing-grid">
            {[
              {
                month: "Spring",
                items: [
                  {
                    label: "Comfortable Temperatures",
                    desc: "Pleasant weather for sightseeing and outdoor exploration.",
                  },
                  {
                    label: "Fewer Crowds",
                    desc: "Enjoy popular destinations without peak-season congestion.",
                  },
                  {
                    label: "Beautiful Scenery",
                    desc: "Spring blooms and lush landscapes across the Mediterranean.",
                  },
                ],
              },
              {
                month: "Summer",
                items: [
                  {
                    label: "Peak Travel Season",
                    desc: "High energy, vibrant atmosphere at every port.",
                  },
                  {
                    label: "Warm Weather",
                    desc: "Ideal for beach stops, Greek Islands, and outdoor adventures.",
                  },
                  {
                    label: "Family Vacation Schedules",
                    desc: "Perfectly aligns with school holidays for family travelers.",
                  },
                ],
              },
              {
                month: "Early Fall",
                items: [
                  {
                    label: "Pleasant Weather",
                    desc: "Still warm enough for coastal exploration and outdoor activities.",
                  },
                  {
                    label: "Reduced Crowds",
                    desc: "Less congestion at popular landmarks and ports.",
                  },
                  {
                    label: "Excellent Sightseeing",
                    desc: "Golden light and uncrowded historic sites make fall a favorite.",
                  },
                ],
              },
            ].map((monthItem, idx) => (
              <div key={idx} className="dac-timing-card">
                <div className="dac-timing-month-header">
                  <span className="dac-timing-month-name">
                    {monthItem.month}
                  </span>
                </div>
                <div className="dac-timing-card-body">
                  <ul className="dac-timing-list">
                    {monthItem.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="dac-timing-list-item">
                        <div className="dac-timing-item-bullet"></div>
                        <div className="dac-timing-item-texts">
                          <span className="dac-timing-item-label">
                            {item.label}
                          </span>
                          <span className="dac-timing-item-desc">
                            {item.desc}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <div className="dac-timing-footer-note">
            <p>
              Each season brings its own magic to Europe, making every itinerary
              a remarkable adventure.
            </p>
          </div>
        </div>
      </section>

      {/* ══ ACCOMMODATIONS ═══════════════════════════════════════════════════ */}
      <section
        className="dmg-info-section dmg-bg-white"
        id="dmg-accommodations-europe"
      >
        <div className="dmg-info-container">
          <div className="dmg-info-grid">
            <div className="dmg-info-content">
              <h2 className="dmg-info-title">
                Accommodations Designed for Families
              </h2>
              <div className="dmg-info-accent"></div>
              <p className="dmg-info-lead">
                Disney staterooms remain among the most family-friendly at sea.
              </p>
              <div className="dmg-info-features">
                {[
                  {
                    title: "Split Bathrooms",
                    desc: "Especially convenient for families.",
                  },
                  {
                    title: "Connecting Cabins",
                    desc: "Ideal for larger groups.",
                  },
                  {
                    title: "Family Suites",
                    desc: "Excellent for multigenerational travel.",
                  },
                  {
                    title: "Concierge Accommodations",
                    desc: "Premium service and exclusive benefits.",
                  },
                ].map((feat, i) => (
                  <div key={i} className="dmg-info-feature-item">
                    <div className="dmg-info-icon-box">
                      <Check size={16} />
                    </div>
                    <div className="dmg-info-feature-texts">
                      <h3 className="dmg-info-feature-title">{feat.title}</h3>
                      <p className="dmg-info-feature-desc">{feat.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="dmg-info-lead" style={{ marginTop: "24px" }}>
                Disney's thoughtful cabin design helps make European travel more
                comfortable for families.
              </p>
            </div>
            <div className="dmg-info-media">
              <div className="dmg-media-wrapper">
                <img
                  alt="Disney Europe Cruise family stateroom accommodations"
                  className="dmg-media-img"
                />
                <div className="dmg-media-overlay"></div>
                <div className="dmg-media-badge">
                  <span>Family-Friendly Staterooms</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ DINING ═══════════════════════════════════════════════════════════ */}
      <section className="dmg-info-section dmg-bg-soft dmg-info-reverse">
        <div className="dmg-info-container">
          <div className="dmg-info-grid">
            <div className="dmg-info-content">
              <div className="dmg-info-header">
                <span className="dmg-info-eyebrow">
                  Disney Europe Cruise Experience
                </span>
                <h2 className="dmg-info-title">
                  Dining on a Disney Europe Cruise
                </h2>
                <div className="dmg-info-accent"></div>
                <p className="dmg-info-lead">
                  Dining is a highlight of every Disney voyage.
                </p>
              </div>
              <div className="dmg-info-features">
                {[
                  {
                    title: "Rotational Dining",
                    desc: "Multiple themed restaurants during the cruise.",
                  },
                  {
                    title: "Family-Friendly Menus",
                    desc: "Options for all ages and tastes.",
                  },
                  {
                    title: "International Flavors",
                    desc: "European-inspired dishes and regional specialties.",
                  },
                  {
                    title: "Specialty Dining",
                    desc: "Elevated experiences for adults.",
                  },
                  {
                    title: "Exceptional Service",
                    desc: "Consistently praised by Disney guests worldwide.",
                  },
                ].map((feat, i) => (
                  <div key={i} className="dmg-info-feature-item">
                    <div className="dmg-info-icon-box">
                      <Check size={16} />
                    </div>
                    <div className="dmg-info-feature-texts">
                      <h3 className="dmg-info-feature-title">{feat.title}</h3>
                      <p className="dmg-info-feature-desc">{feat.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="dmg-info-media">
              <div className="dmg-media-wrapper">
                <img
                  alt="Dining on a Disney Europe Cruise"
                  className="dmg-media-img"
                />
                <div className="dmg-media-overlay"></div>
                <div className="dmg-media-badge">
                  <span>Disney Dining Experience</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ SHORE EXCURSIONS ═════════════════════════════════════════════════ */}
      <section className="ugt-advantage-section">
        <div className="ugt-container">
          <div className="ugt-advantage-header">
            <span className="ugt-advantage-eyebrow">
              Disney Europe Excursions
            </span>
            <h2 className="ugt-advantage-title">
              Shore Excursions Across Europe
            </h2>
            <div className="Asc-accent-line"></div>
            <p className="ugt-advantage-intro">
              One of the biggest advantages of a Disney Europe Cruise is the
              variety of available excursions at every port.
            </p>
          </div>
          <div className="ugt-advantage-grid">
            {[
              {
                icon: Landmark,
                title: "Ancient Ruins",
                desc: "Explore legendary archaeological sites and walk in the footsteps of ancient civilizations.",
              },
              {
                icon: Castle,
                title: "Castle Tours",
                desc: "Visit fairytale castles and historic fortresses that bring European history to life.",
              },
              {
                icon: Globe,
                title: "Cultural Experiences",
                desc: "Discover local traditions, customs, and ways of life across multiple countries.",
              },
              {
                icon: UtensilsCrossed,
                title: "Culinary Adventures",
                desc: "Sample regional cuisine and local specialties at every port of call.",
              },
              {
                icon: Waves,
                title: "Scenic Tours",
                desc: "Enjoy breathtaking landscapes, dramatic coastlines, and unforgettable viewpoints.",
              },
              {
                icon: Users,
                title: "Family-Friendly Activities",
                desc: "Experiences designed specifically for younger travelers and multigenerational groups.",
              },
            ].map((card, i) => {
              const Icon = card.icon;
              return (
                <div key={i} className="ugt-advantage-card">
                  <div className="ugt-icon-box">
                    <Icon size={28} strokeWidth={1.5} />
                  </div>
                  <h4 className="ugt-card-title">{card.title}</h4>
                  <p className="ugt-card-desc">{card.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══ GRANDPARENTS & GRANDCHILDREN ════════════════════════════════════ */}
      <section className="luc-why-section" id="luc-why-europe">
        <div className="luc-why-container">
          {/* LEFT — stacked images */}
          <div className="luc-why-images">
            <div className="luc-why-img-main-wrap" style={{ color: "#fff" }}>
              <img
                alt="Grandparents and grandchildren on a Disney Europe Cruise"
                className="luc-why-img-main"
              />
              <div className="luc-why-img-overlay"></div>
            </div>
            <div className="luc-why-img-accent-wrap" style={{ color: "#fff" }}>
              <img
                alt="Disney Europe multigenerational family vacation"
                className="luc-why-img-accent"
              />
              <div className="luc-why-img-badge">
                <span className="luc-why-badge-num">4</span>
                <span className="luc-why-badge-text">Key Benefits</span>
              </div>
            </div>
          </div>
          {/* RIGHT — content */}
          <div className="luc-why-content">
            <h2 className="luc-why-title">
              Disney Europe Cruises for Grandparents &amp; Grandchildren
            </h2>
            <div className="aac-accent-line aac-accent-white"></div>
            <p className="luc-why-intro">
              Europe has become increasingly popular among multigenerational
              travelers.
            </p>
            <p className="luc-why-intro">
              Grandparents often choose Disney because it combines:
            </p>
            <div className="luc-why-features">
              {[
                {
                  num: "01",
                  title: "Comfort",
                  desc: "Cruising eliminates many transportation challenges — unpack once, visit multiple countries.",
                },
                {
                  num: "02",
                  title: "Family Time",
                  desc: "Shared experiences across iconic European destinations strengthen family connections.",
                },
                {
                  num: "03",
                  title: "Educational Value",
                  desc: "Europe offers endless learning opportunities that every generation can appreciate.",
                },
                {
                  num: "04",
                  title: "Activities for All Ages",
                  desc: "Disney's multigenerational appeal makes Europe accessible and enjoyable for every family member.",
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

      {/* ══ ONBOARD ENTERTAINMENT VIDEO ══════════════════════════════════════ */}
      <section
        className="azs-video-section"
        id="azs-video-entertainment"
        style={{ backgroundColor: "var(--bg-white)" }}
      >
        <div className="azs-container">
          <div className="azs-section-header">
            <h2 className="azs-h2">Discover the Disney Cruise Line Experience</h2>

            <div className="azs-accent-line"></div>

            <p className="azs-video-intro">
              Disney Cruise Line offers a vacation experience unlike any other,
              magically bringing families together while providing unparalleled
              kid fun and relaxing adult time.
            </p>
          </div>

          <div className="azs-video-wrapper">
            <div className="azs-video-frame">
              <iframe
                src="https://www.youtube.com/embed/qxzrC4ahtDQ"
                title="Onboard Disney Entertainment"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* ══ IS IT WORTH IT ═══════════════════════════════════════════════════ */}
      <section className="adg-section" id="adg-worth-it-europe">
        <div className="adg-container">
          <div className="adg-section-header" style={{ marginBottom: "60px" }}>
            <h2 className="adg-h2">Is a Disney Europe Cruise Worth It?</h2>
            <div className="adg-accent-line"></div>
          </div>
          <div
            className="adg-split-layout"
            style={{ alignItems: "flex-start" }}
          >
            <div className="adg-content-card-side">
              <img
                alt="Disney Europe Cruise family experience"
                className="adg-side-image"
                style={{ height: "30vh", border: "1px solid var(--navy)" }}
              />
              <div className="adg-info-card">
                <div className="adg-card-meta">
                  <Compass size={28} />
                  <span className="adg-meta-label">Family Travel Value</span>
                </div>
                <p className="adg-card-lead">For many families, absolutely.</p>
                <div className="adg-card-divider"></div>
                <p className="adg-card-subtext">
                  Disney Europe Cruises often command premium pricing compared
                  to some mainstream cruise options.
                </p>
                <p className="adg-card-subtext" style={{ marginTop: "18px" }}>
                  For travelers seeking both European discovery and premium
                  family travel, Disney offers a compelling combination.
                </p>
              </div>
            </div>
            <div className="adg-list-side">
              {[
                { title: "Outstanding Service", icon: <Check size={20} /> },
                {
                  title: "Family-Focused Experiences",
                  icon: <Check size={20} />,
                },
                {
                  title: "Exceptional Entertainment",
                  icon: <Star size={20} />,
                },
                {
                  title: "Multigenerational Appeal",
                  icon: <Users size={20} />,
                },
                {
                  title: "Comfortable Accommodations",
                  icon: <Home size={20} />,
                },
                {
                  title: "Stress-Free Travel Planning",
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

      {/* ══ WHO SHOULD CHOOSE ════════════════════════════════════════════════ */}
      <section className="Asc-section Asc-bg-white">
        <div className="Asc-container">
          <div className="Asc-section-header">
            <h2 className="Asc-section-title">
              Who Should Choose a Disney Europe Cruise?
            </h2>
            <div className="Asc-accent-line"></div>
          </div>
          <div className="Asc-who-grid">
            <div className="Asc-who-card Asc-who-yes">
              <h3 className="Asc-who-title">Perfect For</h3>
              <ul className="Asc-who-list">
                {[
                  "Families with Children",
                  "Grandparents and Grandchildren",
                  "Multi-Generational Groups",
                  "First-Time European Travelers",
                  "Disney Fans",
                  "Educational Family Travel",
                  "Travelers Seeking Convenience",
                ].map((item, i) => (
                  <li key={i}>
                    <Check size={16} className="Asc-icon-green" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="Asc-who-card Asc-who-no">
              <h3 className="Asc-who-title">May Not Be Ideal For</h3>
              <ul className="Asc-who-list">
                {[
                  "Budget-Focused Travelers",
                  "Adults Seeking Adults-Only Cruises",
                  "Travelers Wanting Ultra-Luxury Expedition Experiences",
                  "Guests Focused Exclusively on Immersive Cultural Travel",
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

      {/* ══ FAQ ═══════════════════════════════════════════════════════════════ */}
      <section className="Asc-section Asc-bg-white" id="Asc-faq-europe">
        <div className="Asc-container">
          <div className="Asc-section-header">
            <h2 className="Asc-h2">Frequently Asked Questions</h2>
            <div className="Asc-accent-line"></div>
            <p className="Asc-faq-intro">
              Everything you need to know about Disney Europe Cruises.
            </p>
          </div>
          <FAQ />
        </div>
      </section>

      {/* ══ FINAL THOUGHTS / CTA ══════════════════════════════════════════════ */}
      <section className="Asc-help-section">
        <div className="Asc-help-bg-wrap">
          <img alt="Disney Europe Cruise" className="Asc-help-bg-img" />
          <div className="Asc-help-overlay"></div>
        </div>
        <div className="Asc-container">
          <div className="Asc-help-card">
            <div className="Asc-help-content">
              <div className="Asc-help-header">
                <span className="Asc-help-eyebrow">Disney Europe Cruises</span>
                <h2 className="Asc-help-h2">Final Thoughts</h2>
                <div className="Asc-help-accent"></div>
              </div>
              <div className="Asc-help-grid">
                <div className="Asc-help-info">
                  <p className="Asc-help-intro">
                    A Disney Europe Cruise combines the best of two worlds:
                  </p>
                  <p className="Asc-help-intro">
                    <strong>
                      The incredible history, culture, and beauty of Europe with
                      the exceptional service, entertainment, and family-focused
                      experience of Disney Cruise Line.
                    </strong>
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
                      From exploring ancient ruins in the Mediterranean to
                      sailing through Northern Europe's breathtaking landscapes,
                      Disney creates opportunities for families to learn,
                      discover, and connect together.
                      <br />
                      <br />
                      Whether you're planning your first European vacation,
                      traveling with grandchildren, or looking for a stress-free
                      way to explore multiple countries, Disney Europe Cruises
                      offer an unforgettable journey filled with adventure,
                      education, and lifelong memories.
                      <br />
                      <br />
                      Because the most memorable European vacations aren't just
                      about the places you visit.
                      <br />
                      <br />
                      <strong>
                        They're about the people you experience them with.
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
                      Plan Your Disney Europe Cruise
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>

                <div className="Asc-help-list-box">
                  <h3 className="Asc-help-list-title">
                    Why Families Choose Disney for Europe:
                  </h3>
                  <ul className="Asc-help-bullets">
                    {[
                      "European Exploration",
                      "Family Entertainment",
                      "Educational Experiences",
                      "Exceptional Service",
                      "Multigenerational Appeal",
                      "Comfortable Accommodations",
                      "Stress-Free Travel Planning",
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
                      Contact Trips &amp; Ships Luxury Travel today to begin
                      planning your Disney Europe adventure.
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

export default DisneyEuropeCruises;
