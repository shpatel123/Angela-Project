import { useState, useEffect } from "react";
import {
  MapPin,
  Award,
  Check,
  Plus,
  Minus,
  ArrowRight,
  Star,
  Users,
  Compass,
  Home,
  Binoculars,
  Waves,
  Globe,
  Ship,
  Anchor,
  Sun,
  Fish,
} from "lucide-react";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela3.jpeg";
import { Helmet } from "react-helmet-async";
import "../DisneyCruisevsVikingOcean/DisneyCruisevsVikingOcean.css";

// ─── DESTINATION DATA ────────────────────────────────────────────────────────
const bahamasDestinations = [
  {
    id: "castaway-cay",
    badge: "Castaway Cay",
    title: "Disney's Castaway Cay",
    icon: Anchor,
    desc: "Disney's private island in The Bahamas is reserved exclusively for Disney Cruise Line guests and has become one of the most beloved destinations in cruising — a place where turquoise waters, white sand, and Disney magic combine for an unforgettable day.",
    columns: [
      {
        label: "Island Highlights",
        items: [
          "Family Beaches",
          "Adult-Only Beach",
          "Water Activities",
          "Character Encounters",
          "Private Island Convenience",
        ],
      },
      {
        label: "Popular Activities",
        items: [
          "Swimming & Snorkeling",
          "Biking & Paddle Sports",
          "Meet Disney Characters",
          "Relax on White-Sand Beaches",
        ],
      },
    ],
    themeLabel: "The Crown Jewel of Disney Cruising",
    themeText:
      "Many repeat Disney cruisers say Castaway Cay alone is worth booking a Bahamas itinerary — a truly one-of-a-kind private island experience.",
  },
  {
    id: "lookout-cay",
    badge: "Lookout Cay",
    title: "Lookout Cay at Lighthouse Point",
    icon: Binoculars,
    desc: "Disney's newest Bahamian destination celebrates the culture, traditions, and natural beauty of The Bahamas, offering guests a unique blend of Disney hospitality and authentic Bahamian island experiences.",
    columns: [
      {
        label: "Highlights",
        items: [
          "Bahamian-Inspired Architecture",
          "Cultural Performances",
          "Family Beach Experiences",
          "Water Recreation",
          "Local Storytelling",
        ],
      },
    ],
    themeLabel: "Culture Meets Disney Magic",
    themeText:
      "Lookout Cay provides a unique blend of Disney hospitality and authentic Bahamian culture that guests of all ages will treasure.",
  },
  {
    id: "nassau",
    badge: "Nassau",
    title: "Nassau, Bahamas",
    icon: Globe,
    desc: "Nassau is one of the most frequently visited ports in The Bahamas, offering a rich mix of history, culture, tropical beaches, and family-friendly adventures for guests of all ages.",
    columns: [
      {
        label: "Nassau Highlights",
        items: [
          "Historic Sites",
          "Local Shopping & Markets",
          "Beautiful Beaches",
          "Water Activities",
          "Family Attractions",
        ],
      },
    ],
    themeLabel: "Culture, History & Tropical Relaxation",
    themeText:
      "Nassau offers a compelling mix of island culture, history, and tropical relaxation — the perfect complement to a Disney Bahamas itinerary.",
  },
  {
    id: "short-cruises",
    badge: "Short Cruises",
    title: "Short Bahamas Cruises",
    icon: Ship,
    desc: "Disney's shorter Bahamas itineraries are perfect for first-time cruisers, families seeking weekend getaways, and travelers celebrating special occasions — delivering Disney magic without requiring extended time away.",
    columns: [
      {
        label: "Perfect For",
        items: [
          "First-Time Cruisers",
          "Weekend Getaways",
          "Family Vacations",
          "Special Celebrations",
        ],
      },
      {
        label: "Typical Destinations",
        items: ["Nassau", "Castaway Cay", "Lookout Cay at Lighthouse Point"],
      },
    ],
    themeLabel: "An Excellent Introduction to Disney Cruising",
    themeText:
      "Short Bahamas cruises provide the perfect introduction to Disney Cruise Line — ideal for families new to cruising or those looking for a quick tropical escape.",
  },
  {
    id: "extended-cruises",
    badge: "Extended Cruises",
    title: "Extended Bahamas Cruises",
    icon: Sun,
    desc: "Longer Bahamas itineraries offer more time onboard, additional island destinations, expanded entertainment opportunities, and a more immersive Disney vacation experience for families seeking deeper relaxation.",
    columns: [
      {
        label: "Extended Benefits",
        items: [
          "Additional Island Destinations",
          "More Time Onboard",
          "Expanded Entertainment",
          "Greater Relaxation",
        ],
      },
    ],
    themeLabel: "A Deeper Bahamas Experience",
    themeText:
      "Extended Bahamas cruises are ideal for travelers seeking a more immersive Disney vacation with greater time to explore and unwind.",
  },
];

const faqData = [
  {
    q: "Are Disney Bahamas Cruises good for families?",
    a: "Yes. Disney Bahamas Cruises are among the most popular family cruise vacations available today, combining tropical beauty with Disney's family-focused service and entertainment.",
  },
  {
    q: "What is Castaway Cay?",
    a: "Castaway Cay is Disney Cruise Line's private island destination in The Bahamas, available exclusively to Disney guests. It features family beaches, an adult-only retreat, water activities, and Disney character experiences.",
  },
  {
    q: "What is Lookout Cay at Lighthouse Point?",
    a: "Disney's newest Bahamian destination that celebrates Bahamian culture, natural beauty, and family experiences — blending Disney hospitality with authentic island traditions.",
  },
  {
    q: "Are Disney Bahamas Cruises good for grandparents?",
    a: "Absolutely. The relaxed pace and family-friendly atmosphere make them ideal for multigenerational travel, with activities and pacing that suit every generation.",
  },
  {
    q: "Do Disney Bahamas Cruises have character experiences?",
    a: "Yes. Guests can meet beloved Disney characters throughout the voyage, both onboard the ship and at Castaway Cay and Lookout Cay.",
  },
  {
    q: "What is the best Disney Bahamas itinerary?",
    a: "This depends on your preferences, though itineraries that include Castaway Cay are especially popular. Longer sailings that also include Lookout Cay offer a richer experience of the Bahamas.",
  },
  {
    q: "Are Bahamas cruises good for children?",
    a: "Yes. Beaches, water activities, character encounters, and Disney entertainment make the Bahamas an excellent destination for children of all ages.",
  },
  {
    q: "How long are Disney Bahamas Cruises?",
    a: "Itineraries vary from short 3–4 night weekend sailings to longer voyages. Disney offers a range of options throughout the year to suit different schedules and budgets.",
  },
  {
    q: "Are Disney Bahamas Cruises worth the cost?",
    a: "Many families believe Disney's exceptional service, world-class entertainment, private island destinations, and family-focused atmosphere justify the premium pricing.",
  },
  {
    q: "Can grandparents travel with grandchildren on Disney Bahamas Cruises?",
    a: "Yes. Disney Bahamas Cruises are among the best cruise options for grandparents traveling with grandchildren, thanks to flexible pacing, multigenerational activities, and Disney's talent for uniting generations.",
  },
  {
    q: "What makes Disney different from other Bahamas cruise lines?",
    a: "Disney combines family-focused service, world-class entertainment, exclusive private island destinations like Castaway Cay and Lookout Cay, and multigenerational appeal in a way few cruise lines can match.",
  },
  {
    q: "What is the best time to take a Disney Bahamas Cruise?",
    a: "The Bahamas offers excellent weather throughout much of the year. Winter offers a warm-weather escape; spring brings comfortable temperatures and great beach conditions; summer is peak family vacation season; fall often offers lower demand and attractive pricing opportunities.",
  },
  {
    q: "Are there kids' clubs and supervised activities onboard Disney Bahamas Cruises?",
    a: "Yes. Disney Cruise Line offers age-specific youth clubs — including the Oceaneer Club & Lab for younger children and Edge and Vibe for tweens and teens — providing supervised, theme-based programming throughout the voyage.",
  },
  {
    q: "Can I book shore excursions through Disney for the Bahamas?",
    a: "Yes. Disney offers a curated selection of shore excursions for each Bahamas port, ranging from snorkeling adventures and beach escapes to dolphin encounters and cultural tours. Booking through Disney ensures coordination with the ship's schedule.",
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
        "Luxury travel agency specializing in Disney cruises, luxury cruises, family travel, multigenerational vacations, Bahamas cruises, and custom travel planning.",
    },
    {
      "@type": "TravelAgency",
      "@id": "https://www.tripsandships.com/#travelagency",
      name: "Trips & Ships Luxury Travel",
      url: "https://www.tripsandships.com",
      description:
        "Luxury travel experts helping families plan Disney Bahamas Cruises, Castaway Cay voyages, and multigenerational cruise vacations.",
    },
    {
      "@type": "WebPage",
      "@id": "https://www.tripsandships.com/disney-bahamas-cruises",
      url: "https://www.tripsandships.com/disney-bahamas-cruises",
      name: "Disney Bahamas Cruises",
      description:
        "Explore Disney Bahamas Cruises featuring Castaway Cay, Lookout Cay at Lighthouse Point, Nassau, and family-friendly Bahamas itineraries for all ages.",
    },
    {
      "@type": "Article",
      "@id": "https://www.tripsandships.com/disney-bahamas-cruises#article",
      headline: "Disney Bahamas Cruises",
      description:
        "A comprehensive guide to Disney Bahamas Cruises, including Castaway Cay, Lookout Cay at Lighthouse Point, Nassau, family travel experiences, and multigenerational cruise vacations.",
      author: {
        "@type": "Organization",
        name: "Trips & Ships Luxury Travel",
      },
      publisher: {
        "@id": "https://www.tripsandships.com/#organization",
      },
      mainEntityOfPage: {
        "@id": "https://www.tripsandships.com/disney-bahamas-cruises",
      },
    },
    {
      "@type": "TouristTrip",
      "@id": "https://www.tripsandships.com/disney-bahamas-cruises#touristtrip",
      name: "Disney Bahamas Cruises",
      description:
        "Family-friendly Disney Cruise Line vacations exploring The Bahamas, including Castaway Cay, Lookout Cay at Lighthouse Point, and Nassau.",
      touristType: [
        "Families",
        "Multigenerational Travelers",
        "Grandparents and Grandchildren",
        "Disney Fans",
        "First-Time Cruisers",
      ],
      itinerary: [
        { "@type": "Place", name: "Castaway Cay" },
        { "@type": "Place", name: "Lookout Cay at Lighthouse Point" },
        { "@type": "Place", name: "Nassau" },
      ],
    },
    {
      "@type": "Review",
      "@id": "https://www.tripsandships.com/disney-bahamas-cruises#review",
      itemReviewed: {
        "@type": "TravelAction",
        name: "Disney Bahamas Cruises",
      },
      reviewBody:
        "Disney Bahamas Cruises successfully combine beautiful tropical island destinations with Disney's family-focused service, entertainment, private island experiences, and multigenerational appeal.",
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
      "@id": "https://www.tripsandships.com/disney-bahamas-cruises#breadcrumb",
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
          name: "Disney Bahamas Cruises",
          item: "https://www.tripsandships.com/disney-bahamas-cruises",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.tripsandships.com/disney-bahamas-cruises#faq",
      mainEntity: faqData.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.a,
        },
      })),
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
const DisneyBahamasCruises = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [readMore, setReadMore] = useState(false);
  const images = [];
  const [activeDest, setActiveDest] = useState("castaway-cay");
  const currentDest =
    bahamasDestinations.find((d) => d.id === activeDest) ||
    bahamasDestinations[0];
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
        <title>
          Disney Bahamas Cruises | Magical Family Cruises to The Bahamas
        </title>
        <meta
          name="title"
          content="Disney Bahamas Cruises for Families & Multigenerational Travel"
        />
        <meta
          name="description"
          content="Discover Disney Bahamas Cruises featuring beautiful beaches, Disney Castaway Cay, Lookout Cay at Lighthouse Point, family-friendly adventures, and unforgettable vacations for families, grandparents, and multigenerational travelers."
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
          <h1>
            Escape to Paradise on a <br /> Disney Bahamas Cruise
          </h1>
          <p>
            The Bahamas is one of the most popular cruise destinations in the
            world — and for good reason.
          </p>
          <p>
            Crystal-clear turquoise waters, powder-soft beaches, tropical
            weather, and incredible island experiences make the Bahamas the
            perfect setting for a family vacation.
          </p>
          {readMore && (
            <>
              <p>
                Now combine that tropical paradise with the exceptional service,
                entertainment, and family-focused experiences of Disney Cruise
                Line.
              </p>
              <p>
                Disney Bahamas Cruises are designed to bring families together
                while providing opportunities for relaxation, adventure, and
                Disney magic — creating unforgettable getaways for travelers of
                all ages.
              </p>
              <p>
                Whether you're traveling with children, grandchildren, extended
                family members, or celebrating a special occasion, a Disney
                Bahamas Cruise delivers memories that last a lifetime.
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

      {/* ══ WHY CHOOSE A DISNEY BAHAMAS CRUISE ══════════════════════════════ */}
      <section className="adg-c-section adg-c-bg-dark" id="adg-why-bahamas">
        <div className="adg-c-container">
          <div className="adg-c-why-grid">
            {/* LEFT */}
            <div className="adg-c-why-left">
              <span className="adg-c-eyebrow adg-c-eyebrow-light">
                Family Travel Trends
              </span>
              <h2 className="adg-c-h2 adg-c-h2-light">
                Why Choose a Disney Bahamas Cruise?
              </h2>
              <div className="aac-accent-line aac-accent-white"></div>
              <p className="adg-c-lead adg-c-lead-light">
                The Bahamas is one of Disney Cruise Line's most beloved
                destinations.
              </p>
              <p className="adg-c-body adg-c-body-light">
                The Bahamas offers everything families love about island
                vacations — without the hassle of coordinating multiple hotels,
                flights, and transportation arrangements. Disney transforms a
                Bahamas vacation into something far more memorable than simply
                visiting beautiful beaches.
              </p>
              <br />
              <p className="adg-c-body adg-c-body-light">
                Disney allows travelers to focus on enjoying the Bahamas rather
                than managing complicated travel logistics.
              </p>
            </div>
            {/* RIGHT */}
            <div className="adg-c-why-right">
              <div className="adg-c-why-card">
                <span className="adg-c-why-card-label">Guests Enjoy:</span>
                <div className="adg-c-pill-grid">
                  {[
                    "Tropical Island Experiences",
                    "Beautiful Beaches",
                    "Family-Friendly Adventures",
                    "Disney Private Island Destinations",
                    "Exceptional Entertainment",
                    "Activities for All Ages",
                    "Stress-Free Vacation Planning",
                    "Multigenerational Travel Opportunities",
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
        id="azs-video-bahamas"
        style={{ backgroundColor: "var(--bg-white)" }}
      >
        <div className="azs-container">
          <div className="azs-section-header">
            <h2 className="azs-h2">
              Discover the Bahamas Through the <br /> Magic of Disney Cruise
              Line
            </h2>
            <div className="azs-accent-line"></div>
            <p className="azs-video-intro">
              Experience the turquoise waters, powder-white beaches, and vibrant
              island culture of The Bahamas aboard Disney Cruise Line.
            </p>
          </div>
          <div className="azs-video-wrapper">
            <div className="azs-video-frame">
              <iframe
                src="https://www.youtube.com/embed/bQ07mNwPiTI"
                title="Discover Alaska Through the Magic of Disney Cruise Line"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      {/* ══ WHAT MAKES THE BAHAMAS SPECIAL ══════════════════════════════════ */}
      <section className="dac-special-section">
        <div className="dac-special-container">
          <div className="dac-special-header">
            <h2 className="dac-special-title">
              What Makes the Bahamas Special?
            </h2>
            <div className="dac-special-accent"></div>
            <p className="dac-special-lead">
              The Bahamas consists of hundreds of islands known for their
              natural beauty and warm hospitality — a perfect destination for
              families and multigenerational travelers of every age.
            </p>
          </div>
          <div className="dac-special-grid">
            {[
              {
                icon: Waves,
                title: "Crystal-Clear Waters",
                desc: "The Bahamas is famous for some of the clearest ocean waters in the world — perfect for snorkeling, swimming, and water adventures.",
              },
              {
                icon: Sun,
                title: "White Sand Beaches",
                desc: "Powder-soft beaches ideal for swimming, relaxing, and creating lasting family memories in a beautiful tropical setting.",
              },
              {
                icon: Users,
                title: "Family-Friendly Activities",
                desc: "Suitable for travelers of every age, from young children to grandparents seeking relaxation and island adventures.",
              },
              {
                icon: Fish,
                title: "Marine Life",
                desc: "Excellent opportunities for snorkeling and wildlife encounters in the Bahamas' vibrant underwater ecosystems.",
              },
              {
                icon: Globe,
                title: "Island Culture",
                desc: "Unique traditions, cuisine, and local experiences that give visitors a genuine taste of Bahamian life.",
              },
              {
                icon: Anchor,
                title: "Warm Tropical Climate",
                desc: "Ideal for year-round vacations — the Bahamas offers sunshine and warm weather throughout most of the year.",
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

      {/* ══ POPULAR DISNEY BAHAMAS CRUISE DESTINATIONS ══════════════════════ */}
      <section
        className="luc-destinations-section"
        id="luc-bahamas-destinations"
      >
        <div className="luc-destinations-container">
          <div className="luc-destinations-header">
            <h2 className="luc-destinations-title">
              Popular Disney Bahamas Cruise Destinations
            </h2>
            <div className="adg-c-accent-line"></div>
            <p className="luc-destinations-intro">
              Disney Bahamas itineraries vary throughout the year, offering
              opportunities to explore several of the Bahamas' most beautiful
              destinations — from exclusive private islands to vibrant tropical
              ports.
            </p>
          </div>
          <div className="luc-dest-layout">
            {/* Sidebar nav */}
            <nav className="luc-dest-nav">
              {bahamasDestinations.map((item) => {
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

      {/* ══ DISNEY BAHAMAS CRUISES FOR FAMILIES ═════════════════════════════ */}
      <section className="dac-families-section">
        <div className="dac-families-container">
          <div className="dac-families-grid">
            {/* Left Content Column */}
            <div className="dac-families-left">
           
              <h2 className="dac-families-title">
                Disney Bahamas Cruises for Families
              </h2>
              <div className="dac-families-accent"></div>
              <p className="dac-families-lead">
                Disney Cruise Line is designed with families in mind, bringing
                magic and tropical island adventure together.
              </p>

              <div className="dac-families-features">
                {[
                  {
                    title: "Shared Experiences",
                    desc: "Create memories together on and off the ship while exploring beautiful Bahamian destinations.",
                  },
                  {
                    title: "Entertainment for Every Age",
                    desc: "Children, teens, parents, and grandparents all find activities and experiences tailored to their interests.",
                  },
                  {
                    title: "Easy Travel",
                    desc: "No need to constantly pack and unpack — accommodations, dining, and entertainment are all integrated into one vacation.",
                  },
                  {
                    title: "Family-Friendly Excursions",
                    desc: "Disney offers island experiences specifically designed for families of all ages and activity levels.",
                  },
                  {
                    title: "Unforgettable Memories",
                    desc: "Many families return year after year because of the shared memories they create together in the Bahamas.",
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
                    alt="Disney Bahamas Cruise Family Sailing"
                    className="dac-families-img"
                  />
                  <div className="dac-families-img-caption">
                    Tropical Adventures
                  </div>
                </div>
                <div className="dac-families-img-card dac-families-img-card--secondary">
                  <img
                    alt="Family enjoying onboard dining and time together"
                    className="dac-families-img"
                  />
                  <div className="dac-families-img-caption">
                    Memorable Family Moments
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ ONBOARD DISNEY ENTERTAINMENT ════════════════════════════════════ */}
      <section
        className="dac-ent-section"
        style={{ backgroundColor: "var(--bg-white)" }}
      >
        <div className="dac-ent-container">
          <div className="dac-ent-grid">
            <div className="dac-ent-left">
             

              <h2 className="dac-ent-title">Onboard Disney Entertainment</h2>

              <div className="dac-ent-accent"></div>

              <p className="dac-ent-desc">
                Even with beautiful Bahamian destinations waiting at every port,
                Disney continues to deliver world-class onboard experiences
                throughout the voyage.
              </p>

              <div className="dac-ent-badge">
                Entertainment for Every Generation
              </div>
            </div>

            <div className="dac-ent-right">
              {[
                {
                  title: "Broadway-Style Productions",
                  desc: "Award-winning live performances featuring spectacular storytelling, music, and stage effects for guests of all ages.",
                },
                {
                  title: "Character Experiences",
                  desc: "Meet beloved Disney characters throughout the voyage and enjoy memorable family photo opportunities onboard and at private island destinations.",
                },
                {
                  title: "Deck Parties",
                  desc: "High-energy celebrations unique to Disney Cruise Line — tropical-themed deck parties that bring families together under the stars.",
                },
                {
                  title: "Family Activities",
                  desc: "Interactive entertainment, themed events, games, and activities designed to bring families together throughout the voyage.",
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
        style={{ background: "var(--bg-soft)" }}
      >
        <div className="svf-inner">
          <div className="svf-gallery-header">
            <h2 className="svf-h2" style={{ textAlign: "center" }}>
              The Bahamas' Greatest Moments, <br /> Experienced Through Disney
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
              From the pristine beaches of Castaway Cay and the cultural
              richness of Lookout Cay to the vibrant history of Nassau — Disney
              Bahamas Cruises deliver the island's most iconic experiences
              wrapped in unmatched family-focused service.
            </p>
          </div>
          <div className="svf-gallery-grid">
            <div className="svf-gallery-item svf-gallery-item--large">
              <div className="svf-gallery-image-wrap">
                <img
                  alt="Castaway Cay private island beach on a Disney Bahamas Cruise"
                  className="svf-gallery-image"
                />
                <div className="svf-gallery-overlay">
                  <div className="svf-gallery-content">
                    <span className="svf-gallery-badge">Castaway Cay</span>
                    <h3>Disney's Private Island Paradise</h3>
                    <p>
                      Step ashore at Castaway Cay — Disney's exclusive private
                      island where turquoise waters, white sand, and Disney
                      magic combine for an unforgettable day in the Bahamas.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="svf-gallery-item">
              <div className="svf-gallery-image-wrap">
                <img
                  alt="Lookout Cay at Lighthouse Point Bahamian cultural experience"
                  className="svf-gallery-image"
                />
                <div className="svf-gallery-overlay">
                  <div className="svf-gallery-content">
                    <span className="svf-gallery-badge">Lookout Cay</span>
                    <h3>Bahamian Culture & Island Beauty</h3>
                    <p>
                      Explore Disney's newest island destination where authentic
                      Bahamian traditions and natural beauty take center stage.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="svf-gallery-item">
              <div className="svf-gallery-image-wrap">
                <img
                  alt="Nassau Bahamas historic and tropical experience on a Disney cruise"
                  className="svf-gallery-image"
                />
                <div className="svf-gallery-overlay">
                  <div className="svf-gallery-content">
                    <span className="svf-gallery-badge">Nassau</span>
                    <h3>History, Culture & Tropical Relaxation</h3>
                    <p>
                      Discover Nassau's rich history, vibrant local markets, and
                      beautiful beaches on a family-friendly Bahamas excursion.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="svf-gallery-item svf-gallery-item--wide">
              <div className="svf-gallery-image-wrap">
                <img
                  alt="Family snorkeling and water adventures on a Disney Bahamas Cruise"
                  className="svf-gallery-image"
                />
                <div className="svf-gallery-overlay">
                  <div className="svf-gallery-content">
                    <span className="svf-gallery-badge">
                      Bahamas Shore Excursion
                    </span>
                    <h3>Crystal Waters & Island Adventures</h3>
                    <p>
                      Snorkel, swim, and explore some of the clearest, most
                      beautiful waters in the world on a Disney Bahamas voyage.
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
        style={{ backgroundColor: "var(--bg-white)" }}
      >
        <div className="dac-timing-container">
          <div className="dac-timing-header">
            <h2 className="dac-timing-title">
              Best Time to Take a Disney Bahamas Cruise
            </h2>

            <div className="dac-timing-accent"></div>

            <p className="dac-timing-lead">
              The Bahamas offers excellent weather throughout much of the year.
              Each season offers unique benefits depending on your travel goals.
            </p>
          </div>

          <div className="dac-timing-grid">
            {[
              {
                month: "Winter",
                items: [
                  {
                    label: "Warm Weather Escape",
                    desc: "Enjoy sunny tropical destinations while escaping colder winter climates.",
                  },
                  {
                    label: "Popular Holiday Season",
                    desc: "A favorite time for families celebrating holidays and special occasions together.",
                  },
                ],
              },
              {
                month: "Spring",
                items: [
                  {
                    label: "Comfortable Temperatures",
                    desc: "Pleasant weather ideal for beach days, snorkeling, and outdoor island activities.",
                  },
                  {
                    label: "Excellent Beach Conditions",
                    desc: "Calm waters and beautiful beaches make spring a popular travel season for families.",
                  },
                ],
              },
              {
                month: "Summer",
                items: [
                  {
                    label: "Family Vacation Season",
                    desc: "School holidays make summer one of the busiest and most popular cruise periods.",
                  },
                  {
                    label: "Warm Tropical Weather",
                    desc: "Enjoy sunshine, warm seas, and classic Bahamas vacation conditions.",
                  },
                ],
              },
              {
                month: "Fall",
                items: [
                  {
                    label: "Often Lower Demand Periods",
                    desc: "Often fewer crowds compared to peak travel seasons.",
                  },
                  {
                    label: "Attractive Pricing Opportunities",
                    desc: "Travelers may find excellent value and promotional offers during the fall months.",
                  },
                ],
              },
            ].map((seasonItem, idx) => (
              <div key={idx} className="dac-timing-card">
                <div className="dac-timing-month-header">
                  <span className="dac-timing-month-name">
                    {seasonItem.month}
                  </span>
                </div>

                <div className="dac-timing-card-body">
                  <ul className="dac-timing-list">
                    {seasonItem.items.map((item, itemIdx) => (
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
        </div>
      </section>

      {/* ══ ACCOMMODATIONS ═══════════════════════════════════════════════════ */}
      <section
        className="dmg-info-section dmg-bg-soft"
        id="dmg-accommodations-bahamas"
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
                    desc: "A convenient favorite for families sharing staterooms on Bahamas voyages.",
                  },
                  {
                    title: "Connecting Staterooms",
                    desc: "Perfect for larger groups and multigenerational families traveling together.",
                  },
                  {
                    title: "Family Suites",
                    desc: "Ideal for multigenerational travel with more space, privacy, and comfort.",
                  },
                  {
                    title: "Concierge Accommodations",
                    desc: "Premium service and exclusive benefits for the ultimate Disney Bahamas experience.",
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
                Disney's thoughtful cabin designs help make Bahamas travel more
                comfortable and convenient for families of every size.
              </p>
            </div>
            <div className="dmg-info-media">
              <div className="dmg-media-wrapper">
                <img
                  alt="Disney Bahamas Cruise family stateroom accommodations"
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
      <section className="dmg-info-section dmg-bg-white dmg-info-reverse">
        <div className="dmg-info-container">
          <div className="dmg-info-grid">
            <div className="dmg-info-content">
              <div className="dmg-info-header">
                <h2 className="dmg-info-title">
                  Dining on a Disney Bahamas Cruise
                </h2>
                <div className="dmg-info-accent"></div>
                <p className="dmg-info-lead">
                  Dining is a major highlight of every Disney voyage.
                </p>
              </div>
              <div className="dmg-info-features">
                {[
                  {
                    title: "Rotational Dining",
                    desc: "Experience multiple themed restaurants throughout the cruise.",
                  },
                  {
                    title: "Family-Friendly Menus",
                    desc: "Options for all ages, preferences, and dietary needs.",
                  },
                  {
                    title: "Tropical Flavors",
                    desc: "Regional influences and Bahamian-inspired dishes featured throughout the voyage.",
                  },
                  {
                    title: "Specialty Dining",
                    desc: "Elevated dining experiences for adults seeking something extra special.",
                  },
                  {
                    title: "Exceptional Service",
                    desc: "Disney's dining teams consistently earn high praise from guests worldwide.",
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
                  alt="Dining on a Disney Bahamas Cruise"
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

      {/* ══ GRANDPARENTS & GRANDCHILDREN ════════════════════════════════════ */}
      <section className="luc-why-section" id="luc-why-bahamas">
        <div className="luc-why-container">
          {/* LEFT — stacked images */}
          <div className="luc-why-images">
            <div className="luc-why-img-main-wrap" style={{ color: "#fff" }}>
              <img
                alt="Grandparents and grandchildren enjoying a Disney Bahamas Cruise together"
                className="luc-why-img-main"
              />
              <div className="luc-why-img-overlay"></div>
            </div>
            <div className="luc-why-img-accent-wrap" style={{ color: "#fff" }}>
              <img
                alt="Disney Bahamas multigenerational family vacation"
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
              Disney Bahamas Cruises for Grandparents &amp; Grandchildren
            </h2>
            <div className="aac-accent-line aac-accent-white"></div>
            <p className="luc-why-intro">
              The Bahamas is one of the easiest and most rewarding destinations
              for multigenerational travel.
            </p>
            <p className="luc-why-intro">
              Grandparents choose Disney Bahamas Cruises because they combine:
            </p>
            <div className="luc-why-features">
              {[
                {
                  num: "01",
                  title: "Relaxed Pace",
                  desc: "Ideal for travelers of varying activity levels — everyone can enjoy the vacation at their own pace, from quiet beach time to island adventures.",
                },
                {
                  num: "02",
                  title: "Family Bonding",
                  desc: "Plenty of opportunities for shared experiences across every generation, from beautiful Bahamian beaches to Broadway-style shows onboard.",
                },
                {
                  num: "03",
                  title: "Comfortable Travel",
                  desc: "Cruising simplifies transportation and logistics — unpack once and let the ship carry you between stunning Bahamian destinations.",
                },
                {
                  num: "04",
                  title: "Lifelong Memories",
                  desc: "Disney excels at helping multiple generations enjoy the same vacation — creating meaningful family connections and unforgettable island memories.",
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

      {/* ══ SHORE EXCURSIONS ═════════════════════════════════════════════════ */}
      <section className="ugt-advantage-section">
        <div className="ugt-container">
          <div className="ugt-advantage-header">
            <span className="ugt-advantage-eyebrow">
              Disney Bahamas Excursions
            </span>
            <h2 className="ugt-advantage-title">
              Shore Excursions in the Bahamas
            </h2>
            <div className="Asc-accent-line"></div>
            <p className="ugt-advantage-intro">
              Disney offers a variety of excursions designed to appeal to
              different interests and activity levels — every destination
              provides opportunities for both adventure and relaxation for
              families of all ages.
            </p>
          </div>
          <div className="ugt-advantage-grid">
            {[
              {
                icon: Fish,
                title: "Snorkeling Adventures",
                desc: "Explore colorful marine ecosystems and vibrant underwater life in some of the clearest ocean waters in the world.",
              },
              {
                icon: Waves,
                title: "Beach Escapes",
                desc: "Relax on beautiful tropical beaches — from Castaway Cay's pristine private sands to Nassau's famous shores.",
              },
              {
                icon: Anchor,
                title: "Dolphin Experiences",
                desc: "A favorite among families — unforgettable dolphin encounters available across several Bahamian destinations.",
              },
              {
                icon: Globe,
                title: "Cultural Tours",
                desc: "Learn about Bahamian history, traditions, and culture through immersive guided island experiences.",
              },
              {
                icon: Waves,
                title: "Water Sports",
                desc: "Kayaking, paddleboarding, and more aquatic adventures designed for the whole family.",
              },
              {
                icon: Binoculars,
                title: "Island Exploration",
                desc: "Discover the natural beauty, wildlife, and unique environments that make the Bahamas so extraordinary.",
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

      {/* ══ VIDEO SECTION — ONBOARD ENTERTAINMENT ════════════════════════════ */}
      <section
        className="azs-video-section"
        id="azs-video-bahamas-ent"
        style={{ backgroundColor: "var(--bg-white)" }}
      >
        <div className="azs-container">
          <div className="azs-section-header">
            <h2 className="azs-h2">Discover the Culture of Disney Lookout Cay</h2>

            <div className="azs-accent-line"></div>

            <p className="azs-video-intro">
              Discover the incredible entertainment that makes Disney Bahamas
              Cruises so memorable. From Broadway-style productions and live
              performances to character experiences and family activities,
              Disney delivers world-class entertainment for guests of all ages
              throughout the voyage.
            </p>
          </div>

          <div className="azs-video-wrapper">
            <div className="azs-video-frame">
              <iframe
                src="https://www.youtube.com/embed/YF0iRLg_Cnc"
                title="Meet the Bahamian Artists Bringing Disney Lookout Cay to Life"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* ══ IS IT WORTH IT ═══════════════════════════════════════════════════ */}
      <section className="adg-section" id="adg-worth-it-bahamas">
        <div className="adg-container">
          <div className="adg-section-header" style={{ marginBottom: "60px" }}>
            <h2 className="adg-h2">Is a Disney Bahamas Cruise Worth It?</h2>
            <div className="adg-accent-line"></div>
          </div>
          <div
            className="adg-split-layout"
            style={{ alignItems: "flex-start" }}
          >
            <div className="adg-content-card-side">
              <img
                alt="Disney Bahamas Cruise family experience"
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
                  Disney Bahamas Cruises often carry premium pricing compared to
                  some mainstream cruise lines.
                </p>
                <p className="adg-card-subtext" style={{ marginTop: "18px" }}>
                  For travelers seeking both Bahamian beauty and premium family
                  experiences, Disney offers a compelling and highly-valued
                  combination.
                </p>
              </div>
            </div>
            <div className="adg-list-side">
              {[
                { title: "Disney Service", icon: <Check size={20} /> },
                {
                  title: "Exceptional Entertainment",
                  icon: <Check size={20} />,
                },
                {
                  title: "Castaway Cay Access",
                  icon: <Star size={20} />,
                },
                {
                  title: "Lookout Cay Experiences",
                  icon: <Anchor size={20} />,
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
                  title: "High Guest Satisfaction",
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
              Who Should Choose a Disney Bahamas Cruise?
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
                  "First-Time Cruisers",
                  "Disney Fans",
                  "Celebration Vacations",
                  "Family Reunions",
                  "Multigenerational Travelers",
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
                  "Adults Seeking Adults-Only Vacations",
                  "Budget-Focused Travelers",
                  "Expedition Travelers",
                  "Guests Seeking Ultra-Luxury Cruising",
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

      {/* ══ ANGELA HUGHES AUTHORITY BOX ══════════════════════════════════════ */}
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
      <section className="Asc-section Asc-bg-white" id="Asc-faq-bahamas">
        <div className="Asc-container">
          <div className="Asc-section-header">
            <h2 className="Asc-h2">Frequently Asked Questions</h2>
            <div className="Asc-accent-line"></div>
            <p className="Asc-faq-intro">
              Everything you need to know about Disney Bahamas Cruises.
            </p>
          </div>
          <FAQ />
        </div>
      </section>

      {/* ══ FINAL THOUGHTS / CTA ══════════════════════════════════════════════ */}
      <section className="Asc-help-section">
        <div className="Asc-help-bg-wrap">
          <img alt="Disney Bahamas Cruise" className="Asc-help-bg-img" />
          <div className="Asc-help-overlay"></div>
        </div>
        <div className="Asc-container">
          <div className="Asc-help-card">
            <div className="Asc-help-content">
              <div className="Asc-help-header">
                <span className="Asc-help-eyebrow">Disney Bahamas Cruises</span>
                <h2 className="Asc-help-h2">Final Thoughts</h2>
                <div className="Asc-help-accent"></div>
              </div>
              <div className="Asc-help-grid">
                <div className="Asc-help-info">
                  <p className="Asc-help-intro">
                    A Disney Bahamas Cruise combines the best of two worlds:
                  </p>
                  <p className="Asc-help-intro">
                    <strong>
                      The tropical beauty of the Bahamas with the exceptional
                      service, entertainment, and family-focused experience of
                      Disney Cruise Line.
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
                      From relaxing on the beaches of Castaway Cay and exploring
                      Bahamian culture at Lookout Cay to enjoying Broadway-style
                      entertainment and creating unforgettable family moments
                      onboard, Disney delivers a vacation experience that
                      appeals to every generation.
                      <br />
                      <br />
                      Whether you're planning your first cruise, celebrating a
                      milestone, or creating lifelong memories with children and
                      grandchildren, Disney Bahamas Cruises offer the perfect
                      combination of adventure, relaxation, and connection.
                      <br />
                      <br />
                      Because the best vacations aren't measured by how many
                      places you visit.
                      <br />
                      <br />
                      <strong>
                        They're measured by the memories you create together.
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
                      Plan Your Disney Bahamas Cruise
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>

                <div className="Asc-help-list-box">
                  <h3 className="Asc-help-list-title">
                    Why Families Choose Disney for the Bahamas:
                  </h3>
                  <ul className="Asc-help-bullets">
                    {[
                      "Castaway Cay Access",
                      "Lookout Cay Experiences",
                      "Family Entertainment",
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
                      planning your Disney Bahamas adventure.
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

export default DisneyBahamasCruises;
