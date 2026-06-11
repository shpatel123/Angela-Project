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
import AboutImage from "../../assets/AboutAngela.jpeg";
import { Helmet } from "react-helmet-async";
import "../DisneyCruisevsVikingOcean/DisneyCruisevsVikingOcean.css";

// ─── DEPARTURE PORT DATA ──────────────────────────────────────────────────────
const floridaPorts = [
  {
    id: "port-canaveral",
    badge: "Port Canaveral",
    title: "Port Canaveral",
    icon: Anchor,
    desc: "Port Canaveral is Disney Cruise Line's primary homeport and one of the busiest cruise ports in the world. Located near Orlando and Walt Disney World, it offers exceptional convenience for Disney travelers departing from Florida.",
    columns: [
      {
        label: "Port Advantages",
        items: [
          "Close to Orlando International Airport",
          "Easy Access to Walt Disney World",
          "Extensive Disney Cruise Departures",
          "Convenient Transportation Options",
          "Family-Friendly Travel Experience",
        ],
      },
      {
        label: "Popular Itineraries",
        items: [
          "Bahamas Cruises",
          "Caribbean Cruises",
          "Special Themed Sailings",
          "Holiday Cruises",
        ],
      },
    ],
    themeLabel: "Disney Cruise Line's Primary Florida Homeport",
    themeText:
      "Port Canaveral's proximity to Walt Disney World makes it the ideal launch point — many families combine a theme park stay with their Disney Cruise departure.",
  },
  {
    id: "fort-lauderdale",
    badge: "Fort Lauderdale",
    title: "Fort Lauderdale (Port Everglades)",
    icon: Ship,
    desc: "Disney Cruise Line also offers select departures from Fort Lauderdale via Port Everglades. This southern Florida port provides easy access for guests traveling from South Florida and the Miami area, with connections to Caribbean itineraries.",
    columns: [
      {
        label: "Port Benefits",
        items: [
          "Easy Access from South Florida",
          "Convenient Airport Connections",
          "Additional Itinerary Options",
          "Access to Caribbean Sailings",
        ],
      },
    ],
    themeLabel: "A Southern Florida Departure Option",
    themeText:
      "Fort Lauderdale provides another excellent departure point for Disney travelers — particularly those based in South Florida or flying into Fort Lauderdale-Hollywood International Airport.",
  },
  {
    id: "bahamas",
    badge: "Bahamas Cruises",
    title: "Disney Bahamas Cruises from Florida",
    icon: Waves,
    desc: "The Bahamas remains one of Disney's most requested cruise destinations from Florida. Highlights include Disney's private island Castaway Cay, the newly opened Lookout Cay at Lighthouse Point, and the vibrant port of Nassau.",
    columns: [
      {
        label: "Bahamas Destinations",
        items: [
          "Disney Castaway Cay",
          "Lookout Cay at Lighthouse Point",
          "Nassau",
        ],
      },
      {
        label: "Ideal For",
        items: [
          "Families",
          "First-Time Cruisers",
          "Short Vacations",
          "Multigenerational Groups",
        ],
      },
    ],
    themeLabel: "Florida's Most Popular Disney Cruise Destination",
    themeText:
      "Bahamas itineraries departing from Port Canaveral are among the most popular Disney sailings — combining easy access from Orlando with Disney's iconic private island experiences.",
  },
  {
    id: "caribbean",
    badge: "Caribbean Cruises",
    title: "Disney Caribbean Cruises from Florida",
    icon: Sun,
    desc: "Disney Caribbean itineraries offer tropical beaches, island adventures, family excursions, water activities, and cultural experiences. Florida departures provide access to Eastern, Western, and Southern Caribbean sailings.",
    columns: [
      {
        label: "Eastern Caribbean",
        items: ["St. Thomas", "Tortola", "Tropical Beaches"],
      },
      {
        label: "Western Caribbean",
        items: ["Cozumel", "Grand Cayman", "Jamaica"],
      },
    ],
    themeLabel: "Caribbean Adventures for Every Family",
    themeText:
      "From Eastern Caribbean island-hopping to Western Caribbean adventures, Florida offers access to Disney's full range of tropical Caribbean itineraries for families of all ages.",
  },
  {
    id: "special-sailings",
    badge: "Special Sailings",
    title: "Special Disney Sailings from Florida",
    icon: Star,
    desc: "Florida departures also provide access to Disney's most beloved themed sailings — from Halloween on the High Seas to Very Merrytime holiday cruises — adding a uniquely Disney layer of magic to an already memorable vacation.",
    columns: [
      {
        label: "Special Sailings",
        items: [
          "Halloween on the High Seas",
          "Very Merrytime Cruises",
          "Holiday Sailings",
          "Special Themed Voyages",
        ],
      },
    ],
    themeLabel: "Themed Sailings Only Disney Delivers",
    themeText:
      "Disney's special themed sailings are exclusive experiences that go beyond a standard cruise — adding unforgettable Disney magic to every voyage departing from Florida.",
  },
];

const faqData = [
  {
    q: "Where do Disney Cruises depart from in Florida?",
    a: "Disney Cruise Line primarily sails from Port Canaveral and also offers select departures from Fort Lauderdale (Port Everglades).",
  },
  {
    q: "Is Port Canaveral close to Disney World?",
    a: "Yes. Port Canaveral is located near Orlando and Walt Disney World, making it easy to combine both vacations before or after your cruise.",
  },
  {
    q: "What destinations can I visit on a Disney Cruise from Florida?",
    a: "Popular destinations include The Bahamas, Caribbean islands, Disney Castaway Cay, and Lookout Cay at Lighthouse Point. Some itineraries also offer access to Europe, Alaska, and other international destinations.",
  },
  {
    q: "Are Disney Cruises from Florida good for families?",
    a: "Yes. Disney cruises are widely regarded as some of the best family cruise vacations available, combining exceptional entertainment, character experiences, and family-focused service.",
  },
  {
    q: "Are Disney Cruises from Florida good for grandparents?",
    a: "Absolutely. Disney's multigenerational appeal makes these cruises especially popular with grandparents traveling with grandchildren, offering comfortable travel and activities for every generation.",
  },
  {
    q: "Can I visit Disney World before my cruise?",
    a: "Yes. Many travelers combine Walt Disney World and Disney Cruise Line vacations, spending several days at the parks before or after their sailing from Port Canaveral.",
  },
  {
    q: "What is Castaway Cay?",
    a: "Disney's private island destination in The Bahamas, available exclusively to Disney Cruise Line guests. It features family beaches, an adult-only retreat, water activities, and Disney character experiences.",
  },
  {
    q: "What is Lookout Cay at Lighthouse Point?",
    a: "Disney's newest Bahamian destination celebrating local culture, nature, and family experiences — blending Disney hospitality with authentic Bahamian island traditions.",
  },
  {
    q: "Are Disney Cruises from Florida worth the cost?",
    a: "Many families believe Disney's exceptional service, world-class entertainment, family-focused experiences, and private island destinations justify the premium pricing.",
  },
  {
    q: "What is the best Disney cruise from Florida?",
    a: "The best itinerary depends on your interests. Bahamas and Caribbean sailings remain among the most popular, while special themed cruises like Halloween on the High Seas are perennial favorites.",
  },
  {
    q: "What is the best time to take a Disney Cruise from Florida?",
    a: "Disney Cruise Line operates from Florida throughout much of the year. Winter offers warm-weather escapes; spring brings comfortable conditions; summer is peak family season; fall often offers attractive pricing and Halloween-themed sailings.",
  },
  {
    q: "Are there kids' clubs and supervised activities on Disney Cruises from Florida?",
    a: "Yes. Disney Cruise Line offers age-specific youth clubs — including the Oceaneer Club & Lab for younger children and Edge and Vibe for tweens and teens — providing supervised, theme-based programming throughout the voyage.",
  },
  {
    q: "Can I book shore excursions through Disney for Caribbean and Bahamas ports?",
    a: "Yes. Disney offers a curated selection of shore excursions for each port of call, ranging from snorkeling adventures and beach escapes to cultural tours. Booking through Disney ensures coordination with the ship's schedule.",
  },
  {
    q: "What makes Disney different from other cruise lines departing Florida?",
    a: "Disney combines family-focused service, world-class entertainment, exclusive private island destinations like Castaway Cay and Lookout Cay, and multigenerational appeal in a way few cruise lines can match.",
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
        "Luxury travel agency specializing in Disney cruises, luxury cruises, family travel, multigenerational vacations, Florida cruises, and custom travel planning.",
    },
    {
      "@type": "TravelAgency",
      "@id": "https://www.tripsandships.com/#travelagency",
      name: "Trips & Ships Luxury Travel",
      url: "https://www.tripsandships.com",
      description:
        "Luxury travel experts helping families plan Disney Cruises from Florida, Bahamas voyages, Caribbean itineraries, and multigenerational cruise vacations.",
    },
    {
      "@type": "WebPage",
      "@id": "https://www.tripsandships.com/disney-cruises-from-florida",
      url: "https://www.tripsandships.com/disney-cruises-from-florida",
      name: "Disney Cruises from Florida",
      description:
        "Explore Disney Cruises from Florida departing from Port Canaveral and Fort Lauderdale. Discover Bahamas, Caribbean, and special themed Disney cruise vacations for families, grandparents, and multigenerational travelers.",
    },
    {
      "@type": "Article",
      "@id":
        "https://www.tripsandships.com/disney-cruises-from-florida#article",
      headline: "Disney Cruises from Florida",
      description:
        "A comprehensive guide to Disney Cruises from Florida, including Port Canaveral, Fort Lauderdale, Bahamas itineraries, Caribbean sailings, family travel experiences, and multigenerational cruise vacations.",
      author: {
        "@type": "Organization",
        name: "Trips & Ships Luxury Travel",
      },
      publisher: {
        "@id": "https://www.tripsandships.com/#organization",
      },
      mainEntityOfPage: {
        "@id": "https://www.tripsandships.com/disney-cruises-from-florida",
      },
    },
    {
      "@type": "TouristTrip",
      "@id":
        "https://www.tripsandships.com/disney-cruises-from-florida#touristtrip",
      name: "Disney Cruises from Florida",
      description:
        "Family-friendly Disney Cruise Line vacations departing from Florida ports, exploring The Bahamas, Caribbean islands, and beyond.",
      touristType: [
        "Families",
        "Multigenerational Travelers",
        "Grandparents and Grandchildren",
        "Disney Fans",
        "First-Time Cruisers",
      ],
      itinerary: [
        { "@type": "Place", name: "Port Canaveral" },
        { "@type": "Place", name: "Fort Lauderdale" },
        { "@type": "Place", name: "Castaway Cay" },
        { "@type": "Place", name: "Lookout Cay at Lighthouse Point" },
        { "@type": "Place", name: "Nassau" },
      ],
    },
    {
      "@type": "Review",
      "@id": "https://www.tripsandships.com/disney-cruises-from-florida#review",
      itemReviewed: {
        "@type": "TravelAction",
        name: "Disney Cruises from Florida",
      },
      reviewBody:
        "Disney Cruises from Florida successfully combine convenient departure ports with Disney's family-focused service, entertainment, private island experiences, and multigenerational appeal.",
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
      "@id":
        "https://www.tripsandships.com/disney-cruises-from-florida#breadcrumb",
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
          name: "Disney Cruises from Florida",
          item: "https://www.tripsandships.com/disney-cruises-from-florida",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.tripsandships.com/disney-cruises-from-florida#faq",
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
const DisneyCruisesFromFlorida = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [readMore, setReadMore] = useState(false);
  const images = [];
  const [activePort, setActivePort] = useState("port-canaveral");
  const currentPort =
    floridaPorts.find((d) => d.id === activePort) || floridaPorts[0];
  const ActiveIcon = currentPort.icon;

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
          Disney Cruises from Florida | Disney Cruise Vacations Departing
          Florida
        </title>
        <meta
          name="title"
          content="Disney Cruises from Florida for Families & Multigenerational Travel"
        />
        <meta
          name="description"
          content="Explore Disney Cruises from Florida departing from Port Canaveral, Fort Lauderdale, and other Florida ports. Discover Caribbean, Bahamas, Alaska, and international Disney cruise vacations for families, grandparents, and multigenerational travelers."
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
          <h1>Start Your Disney Cruise Adventure from Florida</h1>
          <p>
            Florida is the gateway to some of Disney Cruise Line's most popular
            vacations.
          </p>
          <p>
            With convenient departure ports, warm weather, and easy access from
            across the United States, Florida serves as the launching point for
            unforgettable Disney cruise experiences.
          </p>
          {readMore && (
            <>
              <p>
                Whether you're dreaming of the Bahamas, the Caribbean, Europe,
                Alaska, or a special holiday sailing, Disney Cruises from
                Florida offer an easy and exciting way to begin your vacation.
              </p>
              <p>
                For families, grandparents, and multigenerational travelers,
                departing from Florida combines convenience with Disney's
                signature service, entertainment, and family-focused
                experiences.
              </p>
              <p>
                Many families combine a Disney cruise with a visit to Walt
                Disney World, creating the ultimate Disney vacation experience —
                all launched from the Sunshine State.
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

      {/* ══ WHY CHOOSE A DISNEY CRUISE FROM FLORIDA ═════════════════════════ */}
      <section className="adg-c-section adg-c-bg-dark" id="adg-why-florida">
        <div className="adg-c-container">
          <div className="adg-c-why-grid">
            {/* LEFT */}
            <div className="adg-c-why-left">
              <span className="adg-c-eyebrow adg-c-eyebrow-light">
                Family Travel Trends
              </span>
              <h2 className="adg-c-h2 adg-c-h2-light">
                Why Choose a Disney Cruise from Florida?
              </h2>
              <div className="aac-accent-line aac-accent-white"></div>
              <p className="adg-c-lead adg-c-lead-light">
                Florida has become one of the world's premier cruise departure
                regions.
              </p>
              <p className="adg-c-body adg-c-body-light">
                Florida offers everything families love about cruising — without
                the hassle of long international travel to reach a departure
                port. Disney transforms a Florida departure into something far
                more memorable than simply boarding a ship.
              </p>
              <br />
              <p className="adg-c-body adg-c-body-light">
                Disney allows travelers to focus on enjoying their vacation
                rather than managing complicated travel logistics.
              </p>
            </div>
            {/* RIGHT */}
            <div className="adg-c-why-right">
              <div className="adg-c-why-card">
                <span className="adg-c-why-card-label">Guests Enjoy:</span>
                <div className="adg-c-pill-grid">
                  {[
                    "Convenient Airport Access",
                    "Multiple Disney Itineraries",
                    "Warm-Weather Departures",
                    "Easy Pre- & Post-Cruise Vacations",
                    "Family-Friendly Travel Options",
                    "Access to Disney Destinations",
                    "Year-Round Cruise Opportunities",
                    "Walt Disney World Combinations",
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
        id="azs-video-florida"
        style={{ backgroundColor: "var(--bg-white)" }}
      >
        <div className="azs-container">
          <div className="azs-section-header">
            <h2 className="azs-h2">
              Discover Florida's Gateway to <br /> Disney Cruise Line Magic
            </h2>
            <div className="azs-accent-line"></div>
            <p className="azs-video-intro">
              Experience the convenience of departing from Florida while sailing
              to some of Disney Cruise Line's most beautiful and iconic
              destinations.
            </p>
          </div>
          <div className="azs-video-wrapper">
            <div className="azs-video-frame">
              <iframe
                src="https://www.youtube.com/embed/JJ0CEN-hoj0"
                title="Discover Disney Cruise Line Magic from Florida"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* ══ WHAT MAKES FLORIDA SPECIAL ═══════════════════════════════════════ */}
      <section className="dac-special-section">
        <div className="dac-special-container">
          <div className="dac-special-header">
            <h2 className="dac-special-title">
              Why Florida is the Perfect Cruise Departure Hub
            </h2>
            <div className="dac-special-accent"></div>
            <p className="dac-special-lead">
              Florida's combination of major airports, warm weather, and
              proximity to Walt Disney World makes it the ideal starting point
              for any Disney cruise vacation.
            </p>
          </div>
          <div className="dac-special-grid">
            {[
              {
                icon: Anchor,
                title: "Major Departure Ports",
                desc: "Port Canaveral and Fort Lauderdale offer extensive Disney Cruise Line departures year-round, with multiple itineraries available every month.",
              },
              {
                icon: Sun,
                title: "Warm-Weather Departures",
                desc: "Florida's climate means comfortable conditions when boarding your ship — a welcome start to any Caribbean or Bahamas adventure.",
              },
              {
                icon: Globe,
                title: "Airport Connections",
                desc: "Orlando International, Fort Lauderdale, and Miami airports provide excellent flight access for guests traveling from across the United States.",
              },
              {
                icon: Ship,
                title: "Walt Disney World Access",
                desc: "Port Canaveral's proximity to Walt Disney World means families can easily combine theme park and cruise experiences in one seamless vacation.",
              },
              {
                icon: Users,
                title: "Family-Friendly Region",
                desc: "Florida is one of the most family-friendly travel destinations in the world, making it easy to extend your vacation before or after your cruise.",
              },
              {
                icon: Waves,
                title: "Year-Round Sailing",
                desc: "Florida's mild climate allows Disney Cruise Line to operate departures throughout the year, giving families maximum scheduling flexibility.",
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

      {/* ══ FLORIDA DEPARTURE PORTS & ITINERARIES ═══════════════════════════ */}
      <section className="luc-destinations-section" id="luc-florida-departures">
        <div className="luc-destinations-container">
          <div className="luc-destinations-header">
            <h2 className="luc-destinations-title">
              Florida Departure Ports &amp; Popular Itineraries
            </h2>
            <div className="adg-c-accent-line"></div>
            <p className="luc-destinations-intro">
              Disney Cruise Line operates from several Florida ports throughout
              the year, offering opportunities to explore the Bahamas, Caribbean
              islands, and other iconic destinations from convenient Florida
              departure points.
            </p>
          </div>
          <div className="luc-dest-layout">
            {/* Sidebar nav */}
            <nav className="luc-dest-nav">
              {floridaPorts.map((item) => {
                const NavIcon = item.icon;
                const isActive = activePort === item.id;
                return (
                  <button
                    key={item.id}
                    className={`luc-dest-nav-btn ${isActive ? "luc-dest-nav-btn--active" : ""}`}
                    onClick={() => setActivePort(item.id)}
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
            <div className="luc-dest-panel" key={activePort}>
              <div className="luc-dest-img-wrap">
                <img
                  src={currentPort.image}
                  alt={currentPort.title}
                  className="luc-dest-img"
                />
                <div className="luc-dest-img-overlay">
                  <div className="luc-dest-img-icon">
                    <ActiveIcon size={22} strokeWidth={1.6} />
                  </div>
                  <span className="luc-dest-img-title">
                    {currentPort.title}
                  </span>
                </div>
              </div>
              <p className="luc-dest-panel-desc">{currentPort.desc}</p>
              <div className="luc-dest-columns">
                {currentPort.columns.map((col, cIdx) => (
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
                    {currentPort.themeLabel}
                  </span>
                  <p className="luc-dest-theme-note-text">
                    {currentPort.themeText}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ DISNEY CRUISES FROM FLORIDA FOR FAMILIES ════════════════════════ */}
      <section className="dac-families-section">
        <div className="dac-families-container">
          <div className="dac-families-grid">
            {/* Left Content Column */}
            <div className="dac-families-left">
            
              <h2 className="dac-families-title">
                Why Families Love Disney Cruises from Florida
              </h2>
              <div className="dac-families-accent"></div>
              <p className="dac-families-lead">
                Disney Cruise Line consistently ranks among the most popular
                cruise choices for families — and Florida's convenient ports
                make it easier than ever to embark.
              </p>

              <div className="dac-families-features">
                {[
                  {
                    title: "Family-Friendly Entertainment",
                    desc: "Broadway-style productions, deck parties, and interactive experiences delight guests of every age throughout the voyage.",
                  },
                  {
                    title: "Exceptional Youth Programs",
                    desc: "Industry-leading clubs for children and teens provide supervised, theme-based programming throughout the cruise.",
                  },
                  {
                    title: "Character Experiences",
                    desc: "Meet beloved Disney characters throughout the voyage — both onboard and at private island destinations.",
                  },
                  {
                    title: "Family Accommodations",
                    desc: "Staterooms and suites designed with parents and children in mind, including split bathrooms and connecting room options.",
                  },
                  {
                    title: "Activities for All Ages",
                    desc: "Every generation can enjoy the vacation together — from thrilling water slides to relaxing beach days ashore.",
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
                    alt="Disney Cruise from Florida family sailing"
                    className="dac-families-img"
                  />
                  <div className="dac-families-img-caption">
                    Florida Departures
                  </div>
                </div>
                <div className="dac-families-img-card dac-families-img-card--secondary">
                  <img
                    alt="Family enjoying onboard Disney entertainment"
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
          <div className="dac-ent-header">
            <h2 className="dac-ent-title" style={{ textAlign: "center" }}>
              Onboard Disney Entertainment
            </h2>
            <div className="adg-c-accent-line"></div>
            <p className="dac-ent-intro">
              Disney remains one of the entertainment leaders at sea — every
              sailing from Florida delivers world-class experiences for the
              entire family.
            </p>
          </div>
          <div className="dac-ent-grid" style={{gap: "30px"}}>
            {[
              {
                title: "Broadway-Style Shows",
                desc: "Award-winning theatrical productions performed onboard — full-scale, immersive Disney entertainment unlike anything else at sea.",
              },
              {
                title: "Character Meet-and-Greets",
                desc: "A favorite for children and Disney fans alike — exclusive opportunities to meet beloved Disney characters throughout the voyage.",
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
      </section>

      {/* ── IMAGE GALLERY ────────────────────────────────────────────── */}
      <section className="dfg-gallery-section" id="dfg-gallery">
        <div className="dfg-gallery-container">
          <div className="dfg-gallery-header">
            <span className="dfg-gallery-eyebrow">
              Disney Cruise Line Experience
            </span>
            <h2 className="dfg-gallery-title">
              {" "}
              Florida's Gateway to Disney's <br /> Greatest Destinations
            </h2>
            <div className="dfg-gallery-accent"></div>
            <p className="dfg-gallery-intro">
             From the pristine beaches of Castaway Cay and the cultural
              richness of Lookout Cay to the vibrant islands of the Caribbean —
              Disney Cruises from Florida deliver iconic experiences wrapped in
              unmatched family-focused service.
            </p>
          </div>

          <div className="dfg-gallery-mosaic">
            {/* Large featured image — top left */}
            <div
              className="dfg-gallery-item dfg-gallery-large"
              style={{
                color: "#fff",
              }}
            >
              <img
                alt="Port Canaveral Disney Cruise Line departure Florida"
                className="dfg-gallery-img"
              />
              <div className="dfg-gallery-overlay">
                <span className="dfg-gallery-caption">Disney's Florida Homeport</span>
              </div>
            </div>

            {/* Tall image — top right */}
            <div
              className="dfg-gallery-item dfg-gallery-tall"
              style={{
                color: "#fff",
              }}
            >
              <img
                alt="Castaway Cay Disney private island Bahamas from Florida"
                className="dfg-gallery-img"
              />
              <div className="dfg-gallery-overlay">
                <span className="dfg-gallery-caption">Disney's Private Island Paradiseo</span>
              </div>
            </div>

            {/* Wide image — bottom left */}
            <div
              className="dfg-gallery-item dfg-gallery-wide"
              style={{
                color: "#fff",
              }}
            >
              <img
                alt="Caribbean cruise from Florida Disney Cruise Line"
                className="dfg-gallery-img"
              />
              <div className="dfg-gallery-overlay">
                <span className="dfg-gallery-caption">
            Tropical Caribbean Adventures
                </span>
              </div>
            </div>

            {/* Square — bottom right */}
            <div
              className="dfg-gallery-item dfg-gallery-square"
              style={{
                color: "#fff",
              }}
            >
              <img
                alt="Walt Disney World and Disney Cruise combination vacation from Florida"
                className="dfg-gallery-img"
              />
              <div className="dfg-gallery-overlay">
                <span className="dfg-gallery-caption">The Ultimate Disney Vacation</span>
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
              Best Time to Take a Disney Cruise from Florida
            </h2>
            <div className="dac-timing-accent"></div>
            <p className="dac-timing-lead">
              Disney Cruise Line operates from Florida throughout much of the
              year. Each season offers unique benefits depending on your travel
              goals.
            </p>
          </div>

          <div className="dac-timing-grid">
            {[
              {
                month: "Winter",
                items: [
                  {
                    label: "Warm-Weather Escape",
                    desc: "Enjoy sunny tropical departures while escaping colder winter climates from across the United States.",
                  },
                  {
                    label: "Popular Holiday Season",
                    desc: "A favorite time for families celebrating holidays — Disney's Very Merrytime cruises add extra magic.",
                  },
                ],
              },
              {
                month: "Spring",
                items: [
                  {
                    label: "Comfortable Temperatures",
                    desc: "Pleasant weather ideal for beach days, island exploration, and outdoor excursions throughout the Bahamas and Caribbean.",
                  },
                  {
                    label: "Family Vacation Opportunities",
                    desc: "Spring break and school holiday periods make this a popular time for families to cruise from Florida.",
                  },
                ],
              },
              {
                month: "Summer",
                items: [
                  {
                    label: "Peak Family Travel Season",
                    desc: "School holidays make summer the busiest and most vibrant cruise period from Florida — excellent for families.",
                  },
                  {
                    label: "Warm Tropical Weather",
                    desc: "Enjoy warm seas, sunny skies, and classic tropical vacation conditions throughout Caribbean and Bahamas destinations.",
                  },
                ],
              },
              {
                month: "Fall",
                items: [
                  {
                    label: "Halloween on the High Seas",
                    desc: "Disney's beloved Halloween-themed sailings make fall one of the most magical and popular times to cruise from Florida.",
                  },
                  {
                    label: "Attractive Pricing Opportunities",
                    desc: "Travelers may find excellent value and promotional offers during shoulder-season fall months.",
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
        id="dmg-accommodations-florida"
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
                    desc: "A major convenience for families — separate vanity and bath areas reduce morning bottlenecks for everyone.",
                  },
                  {
                    title: "Connecting Staterooms",
                    desc: "Ideal for larger groups and multigenerational families traveling together from Florida.",
                  },
                  {
                    title: "Family Suites",
                    desc: "Perfect for multigenerational travel — more space, more privacy, and more comfort for extended family groups.",
                  },
                  {
                    title: "Concierge Accommodations",
                    desc: "Premium service and exclusive benefits for the ultimate Disney cruise experience from Florida.",
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
                Disney's thoughtful cabin designs help make Florida cruise
                departures more comfortable and convenient for families of every
                size.
              </p>
            </div>
            <div className="dmg-info-media">
              <div className="dmg-media-wrapper">
                <img
                  alt="Disney Cruise from Florida family stateroom accommodations"
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
                  Dining on a Disney Cruise from Florida
                </h2>
                <div className="dmg-info-accent"></div>
                <p className="dmg-info-lead">
                  Dining is one of the highlights of every Disney cruise
                  experience.
                </p>
              </div>
              <div className="dmg-info-features">
                {[
                  {
                    title: "Rotational Dining",
                    desc: "Experience multiple themed restaurants throughout the voyage — guests rotate through different dining venues each evening.",
                  },
                  {
                    title: "Family-Friendly Menus",
                    desc: "Options for all ages, preferences, and dietary needs — from young children to discerning adult palates.",
                  },
                  {
                    title: "Specialty Dining",
                    desc: "Elevated adult dining experiences for those seeking something extra special during their cruise.",
                  },
                  {
                    title: "Casual Dining Options",
                    desc: "Relaxed poolside and quick-service options perfect for busy days exploring destinations ashore.",
                  },
                  {
                    title: "Exceptional Service",
                    desc: "Disney's dining teams consistently earn high praise from guests — the same attentive crew serves guests throughout the voyage.",
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
                  alt="Dining on a Disney Cruise from Florida"
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
      <section className="luc-why-section" id="luc-why-florida">
        <div className="luc-why-container">
          {/* LEFT — stacked images */}
          <div className="luc-why-images">
            <div className="luc-why-img-main-wrap" style={{ color: "#fff" }}>
              <img
                alt="Grandparents and grandchildren enjoying a Disney Cruise from Florida"
                className="luc-why-img-main"
              />
              <div className="luc-why-img-overlay"></div>
            </div>
            <div className="luc-why-img-accent-wrap" style={{ color: "#fff" }}>
              <img
                alt="Disney multigenerational family cruise vacation from Florida"
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
              Disney Cruises from Florida for Grandparents &amp; Grandchildren
            </h2>
            <div className="aac-accent-line aac-accent-white"></div>
            <p className="luc-why-intro">
              Florida departures are especially popular among multigenerational
              travelers.
            </p>
            <p className="luc-why-intro">
              Grandparents choose Disney Cruises from Florida because they
              combine:
            </p>
            <div className="luc-why-features">
              {[
                {
                  num: "01",
                  title: "Easy Travel Planning",
                  desc: "Cruising eliminates the need to coordinate multiple hotels and transportation arrangements — unpack once and travel in comfort.",
                },
                {
                  num: "02",
                  title: "Shared Experiences",
                  desc: "Character encounters, beach days, shore excursions, Broadway-style entertainment, and dining experiences enjoyed together across generations.",
                },
                {
                  num: "03",
                  title: "Comfortable Travel",
                  desc: "Disney's family-designed staterooms and connecting cabin options make traveling with grandchildren far more comfortable and convenient.",
                },
                {
                  num: "04",
                  title: "Lifelong Family Memories",
                  desc: "Disney cruises consistently create memorable moments that families — grandparents and grandchildren alike — remember for years after returning to port.",
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

      {/* ══ COMBINING DISNEY WORLD & CRUISE ══════════════════════════════════ */}
      <section className="ugt-advantage-section">
        <div className="ugt-container">
          <div className="ugt-advantage-header">
            <span className="ugt-advantage-eyebrow">
              The Ultimate Disney Vacation
            </span>
            <h2 className="ugt-advantage-title">
              Combining Walt Disney World &amp; a Disney Cruise
            </h2>
            <div className="Asc-accent-line"></div>
            <p className="ugt-advantage-intro">
              One of the biggest advantages of cruising from Florida is the
              opportunity to combine your voyage with a Walt Disney World
              vacation. Many families consider this the ultimate Disney
              experience.
            </p>
          </div>
          <div className="ugt-advantage-grid">
            {[
              {
                icon: Ship,
                title: "Disney World Before the Cruise",
                desc: "Enjoy the parks and resort experience before relaxing at sea — arrive in Florida a few days early to maximize your Disney adventure.",
              },
              {
                icon: Sun,
                title: "Disney World After the Cruise",
                desc: "Extend your vacation after returning to Florida by heading straight to Walt Disney World to continue the magic on land.",
              },
              {
                icon: Globe,
                title: "Complete Disney Vacation Package",
                desc: "Experience both land and sea adventures in one seamless trip — Disney packages often make this combination even easier to plan.",
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

      {/* ══ VIDEO SECTION — DISNEY CRUISE EXPERIENCE ═════════════════════════ */}
      <section
        className="azs-video-section"
        id="azs-video-florida-ent"
        style={{ backgroundColor: "var(--bg-white)" }}
      >
        <div className="azs-container">
          <div className="azs-section-header">
            <h2 className="azs-h2">
              Experience the Magic of Disney Cruise Line
            </h2>
            <div className="azs-accent-line"></div>
            <p className="azs-video-intro">
              Discover what makes Disney Cruise Line unlike any other vacation
              at sea. From unforgettable family experiences and immersive
              entertainment to dedicated adult spaces and legendary Disney
              service, every voyage is designed to create magical memories for
              guests of all ages.
            </p>
          </div>

          <div className="azs-video-wrapper">
            <div className="azs-video-frame">
              <iframe
                src="https://www.youtube.com/embed/lZrL1PXIm08"
                title="Experience the Magic of Disney Cruise Line"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* ══ IS IT WORTH IT ═══════════════════════════════════════════════════ */}
      <section className="adg-section" id="adg-worth-it-florida">
        <div className="adg-container">
          <div className="adg-section-header" style={{ marginBottom: "60px" }}>
            <h2 className="adg-h2">
              Is a Disney Cruise from Florida Worth It?
            </h2>
            <div className="adg-accent-line"></div>
          </div>
          <div
            className="adg-split-layout"
            style={{ alignItems: "flex-start" }}
          >
            <div className="adg-content-card-side">
              <img
                alt="Disney Cruise from Florida family experience"
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
                  Disney Cruises from Florida often carry premium pricing
                  compared to some mainstream cruise lines.
                </p>
                <p className="adg-card-subtext" style={{ marginTop: "18px" }}>
                  For travelers seeking both exceptional service and premium
                  family experiences, Disney delivers a compelling and
                  highly-valued combination that justifies the investment.
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
                  title: "Private Island Access",
                  icon: <Star size={20} />,
                },
                {
                  title: "Year-Round Florida Departures",
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
              Who Should Choose a Disney Cruise from Florida?
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
                  "Disney Fans",
                  "First-Time Cruisers",
                  "Celebration Vacations",
                  "Travelers Combining Disney World & Cruising",
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
                  "Expedition Cruise Enthusiasts",
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
      <section className="Asc-section Asc-bg-white" id="Asc-faq-florida">
        <div className="Asc-container">
          <div className="Asc-section-header">
            <h2 className="Asc-h2">Frequently Asked Questions</h2>
            <div className="Asc-accent-line"></div>
            <p className="Asc-faq-intro">
              Everything you need to know about Disney Cruises from Florida.
            </p>
          </div>
          <FAQ />
        </div>
      </section>

      {/* ══ FINAL THOUGHTS / CTA ══════════════════════════════════════════════ */}
      <section className="Asc-help-section">
        <div className="Asc-help-bg-wrap">
          <img alt="Disney Cruise from Florida" className="Asc-help-bg-img" />
          <div className="Asc-help-overlay"></div>
        </div>
        <div className="Asc-container">
          <div className="Asc-help-card">
            <div className="Asc-help-content">
              <div className="Asc-help-header">
                <span className="Asc-help-eyebrow">
                  Disney Cruises from Florida
                </span>
                <h2 className="Asc-help-h2">Final Thoughts</h2>
                <div className="Asc-help-accent"></div>
              </div>
              <div className="Asc-help-grid">
                <div className="Asc-help-info">
                  <p className="Asc-help-intro">
                    Disney Cruises from Florida provide one of the easiest and
                    most enjoyable ways to experience Disney Cruise Line.
                  </p>
                  <p className="Asc-help-intro">
                    <strong>
                      With convenient departures from Port Canaveral and Fort
                      Lauderdale, travelers can access tropical destinations,
                      private islands, world-class entertainment, and
                      unforgettable family experiences.
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
                      Whether you're planning a quick Bahamas getaway, a
                      Caribbean adventure, or a complete Disney vacation that
                      includes Walt Disney World, Florida serves as the perfect
                      starting point.
                      <br />
                      <br />
                      For families, grandparents, and multigenerational
                      travelers, Disney Cruises from Florida offer more than a
                      vacation.
                      <br />
                      <br />
                      They offer the opportunity to create memories that will
                      last long after the ship returns to port.
                      <br />
                      <br />
                      <strong>
                        Because the best vacations aren't measured by how many
                        places you visit.
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
                      Plan Your Disney Cruise from Florida
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>

                <div className="Asc-help-list-box">
                  <h3 className="Asc-help-list-title">
                    Why Families Choose Disney from Florida:
                  </h3>
                  <ul className="Asc-help-bullets">
                    {[
                      "Port Canaveral Convenience",
                      "Castaway Cay Access",
                      "Caribbean & Bahamas Itineraries",
                      "Walt Disney World Combinations",
                      "Family Entertainment",
                      "Exceptional Service",
                      "Multigenerational Appeal",
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
                      planning your Disney Cruise from Florida.
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

export default DisneyCruisesFromFlorida;
