import { useState, useEffect, useRef } from "react";
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
  CheckCircle,
  KeyRound,
  Bus,
  Car,
  Plane,
} from "lucide-react";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela2.jpeg";
import { Helmet } from "react-helmet-async";
import "../DisneyCruisevsVikingOcean/DisneyCruisevsVikingOcean.css";

// ─── PORT CANAVERAL DESTINATION DATA ─────────────────────────────────────────
const portCanaveraldestinations = [
  {
    id: "bahamas",
    badge: "Bahamas Cruises",
    title: "Disney Bahamas Cruises from Port Canaveral",
    icon: Waves,
    desc: "Bahamas sailings are among the most popular Disney itineraries departing from Port Canaveral. Highlights often include Disney's iconic private island Castaway Cay, the newest Bahamian destination Lookout Cay at Lighthouse Point, and the vibrant port of Nassau.",
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
          "First-Time Disney Cruisers",
          "Families",
          "Short Getaways",
          "Multigenerational Groups",
        ],
      },
    ],
    themeLabel: "The Most Popular Disney Itinerary from Port Canaveral",
    themeText:
      "Bahamas cruises from Port Canaveral are perennial favorites — combining quick travel times with Disney's most beloved private island experiences and the vibrant culture of Nassau.",
  },
  {
    id: "caribbean",
    badge: "Caribbean Cruises",
    title: "Disney Caribbean Cruises from Port Canaveral",
    icon: Sun,
    desc: "Port Canaveral is also the gateway to incredible Caribbean adventures. Disney Caribbean itineraries combine tropical beauty with exceptional onboard entertainment, offering guests access to Eastern, Western, and Southern Caribbean destinations.",
    columns: [
      {
        label: "Eastern Caribbean",
        items: ["St. Thomas", "Tortola", "Puerto Rico"],
      },
      {
        label: "Western Caribbean",
        items: ["Cozumel", "Grand Cayman", "Jamaica"],
      },
    ],
    themeLabel: "Caribbean Adventures for Every Family",
    themeText:
      "From Eastern Caribbean island-hopping to Western Caribbean adventures, Port Canaveral offers access to Disney's full range of tropical Caribbean itineraries — all paired with Disney's legendary onboard experience.",
  },
  {
    id: "castaway-cay",
    badge: "Castaway Cay",
    title: "Disney's Castaway Cay",
    icon: Anchor,
    desc: "For many guests, Castaway Cay becomes the highlight of the entire cruise. Disney's private island in The Bahamas is reserved exclusively for Disney Cruise Line guests — a place where turquoise waters, white sand, and Disney magic combine for an unforgettable day ashore.",
    columns: [
      {
        label: "Island Highlights",
        items: [
          "Family Beaches",
          "Adult-Only Beach Retreat",
          "Character Experiences",
          "Water Activities",
          "Exclusive Disney Guest Access",
        ],
      },
      {
        label: "Popular Activities",
        items: [
          "Swimming & Snorkeling",
          "Kayaking & Paddleboarding",
          "Meet Disney Characters",
          "Biking & Beach Relaxation",
        ],
      },
    ],
    themeLabel: "Consistently Ranked Among the World's Best Private Islands",
    themeText:
      "Castaway Cay consistently ranks among the top private cruise destinations in the world — many repeat Disney guests say it alone is worth booking a Bahamas itinerary from Port Canaveral.",
  },
  {
    id: "lookout-cay",
    badge: "Lookout Cay",
    title: "Lookout Cay at Lighthouse Point",
    icon: Binoculars,
    desc: "Disney's newest Bahamian destination celebrates the culture, traditions, and natural beauty of The Bahamas. Lookout Cay combines authentic island storytelling and vibrant local experiences with the family-friendly hospitality Disney is known for.",
    columns: [
      {
        label: "Destination Highlights",
        items: [
          "Bahamian-Inspired Architecture",
          "Cultural Storytelling & Performances",
          "Beautiful Beaches",
          "Water Recreation",
          "Local Traditions & Entertainment",
        ],
      },
    ],
    themeLabel: "A New Kind of Bahamian Experience",
    themeText:
      "Lookout Cay provides a unique blend of Disney hospitality and authentic Bahamian culture — a meaningful complement to Castaway Cay on longer Bahamas itineraries from Port Canaveral.",
  },
];

const faqData = [
  {
    q: "Where is Port Canaveral located?",
    a: "Port Canaveral is located on Florida's Atlantic Coast near Cape Canaveral, approximately one hour from Orlando International Airport and Walt Disney World.",
  },
  {
    q: "Which Disney ships sail from Port Canaveral?",
    a: "Disney Cruise Line frequently operates ships such as Disney Wish, Disney Fantasy, Disney Treasure, and others from Port Canaveral, depending on the season. Ship assignments may vary throughout the year.",
  },
  {
    q: "Can I combine Disney World and a Disney Cruise from Port Canaveral?",
    a: "Yes. Many travelers visit Walt Disney World before or after their cruise due to the close proximity between Orlando and Port Canaveral — it's one of the most popular reasons families choose this homeport.",
  },
  {
    q: "What destinations can I visit from Port Canaveral?",
    a: "Popular destinations include The Bahamas, Castaway Cay, Lookout Cay at Lighthouse Point, Nassau, and various Caribbean islands including Eastern Caribbean (St. Thomas, Tortola, Puerto Rico) and Western Caribbean (Cozumel, Grand Cayman, Jamaica).",
  },
  {
    q: "Are Disney Cruises from Port Canaveral good for families?",
    a: "Absolutely. They are widely considered among the best family cruise vacations available, combining exceptional entertainment, character experiences, private island destinations, and family-focused service.",
  },
  {
    q: "Are Disney Cruises from Port Canaveral good for grandparents?",
    a: "Yes. Disney's multigenerational appeal makes these cruises especially popular with grandparents and grandchildren. The easy logistics, comfortable accommodations, and activities for every age make it an ideal choice.",
  },
  {
    q: "What is Castaway Cay?",
    a: "Disney's private island destination in The Bahamas available exclusively to Disney Cruise Line guests. It features family beaches, an adult-only retreat, character experiences, water activities, and pristine natural beauty.",
  },
  {
    q: "What is Lookout Cay at Lighthouse Point?",
    a: "Disney's newest Bahamian destination celebrating local culture, family experiences, and the natural beauty of The Bahamas. It combines authentic Bahamian traditions with Disney hospitality.",
  },
  {
    q: "Are Disney Cruises from Port Canaveral worth the cost?",
    a: "Many families believe Disney's exceptional service, world-class entertainment, accommodations, private island destinations, and family-focused experiences justify the premium pricing.",
  },
  {
    q: "What is the most popular Disney cruise from Port Canaveral?",
    a: "Bahamas cruises featuring Castaway Cay remain among the most popular Disney itineraries from Port Canaveral — especially for first-time Disney cruisers and families.",
  },
  {
    q: "How do I get to Port Canaveral?",
    a: "Most Disney guests fly into Orlando International Airport (MCO), approximately one hour from Port Canaveral. Private transfers, cruise shuttles from Orlando hotels, rental cars, and Disney transportation on select packages are all available options.",
  },
  {
    q: "What is the best time to take a Disney Cruise from Port Canaveral?",
    a: "Port Canaveral sailings operate throughout much of the year. Winter offers warm-weather escapes and holiday cruises; spring brings comfortable temperatures ideal for families; summer is peak vacation season; fall features Disney's popular Halloween on the High Seas sailings and often attractive pricing.",
  },
  {
    q: "Are there kids' clubs and supervised activities onboard?",
    a: "Yes. Disney Cruise Line offers age-specific youth clubs — including the Oceaneer Club & Lab for younger children and Edge and Vibe for tweens and teens — with supervised, theme-based programming throughout the voyage.",
  },
  {
    q: "Can I book shore excursions through Disney at Bahamas and Caribbean ports?",
    a: "Yes. Disney offers a curated selection of shore excursions at each port of call, ranging from snorkeling adventures and beach escapes to cultural tours and dolphin experiences. Booking through Disney ensures coordination with the ship's schedule.",
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
        "Luxury travel agency specializing in Disney cruises, luxury cruises, family travel, multigenerational vacations, Port Canaveral cruises, and custom travel planning.",
    },
    {
      "@type": "TravelAgency",
      "@id": "https://www.tripsandships.com/#travelagency",
      name: "Trips & Ships Luxury Travel",
      url: "https://www.tripsandships.com",
      description:
        "Luxury travel experts helping families plan Disney Cruises from Port Canaveral, Bahamas voyages, Caribbean itineraries, and multigenerational cruise vacations.",
    },
    {
      "@type": "WebPage",
      "@id": "https://www.tripsandships.com/disney-cruises-from-port-canaveral",
      url: "https://www.tripsandships.com/disney-cruises-from-port-canaveral",
      name: "Disney Cruises from Port Canaveral",
      description:
        "Discover Disney Cruises from Port Canaveral, Florida. Sail to The Bahamas, Caribbean, and Disney private island destinations while enjoying world-class entertainment, family-friendly accommodations, and unforgettable Disney experiences.",
    },
    {
      "@type": "Article",
      "@id":
        "https://www.tripsandships.com/disney-cruises-from-port-canaveral#article",
      headline: "Disney Cruises from Port Canaveral",
      description:
        "A comprehensive guide to Disney Cruises from Port Canaveral, including Bahamas itineraries, Caribbean sailings, Castaway Cay, Lookout Cay, Disney ships, family travel experiences, and Walt Disney World combinations.",
      author: {
        "@type": "Organization",
        name: "Trips & Ships Luxury Travel",
      },
      publisher: {
        "@id": "https://www.tripsandships.com/#organization",
      },
      mainEntityOfPage: {
        "@id":
          "https://www.tripsandships.com/disney-cruises-from-port-canaveral",
      },
    },
    {
      "@type": "TouristTrip",
      "@id":
        "https://www.tripsandships.com/disney-cruises-from-port-canaveral#touristtrip",
      name: "Disney Cruises from Port Canaveral",
      description:
        "Family-friendly Disney Cruise Line vacations departing from Port Canaveral, Florida, exploring The Bahamas, Caribbean islands, and Disney private island destinations.",
      touristType: [
        "Families",
        "Multigenerational Travelers",
        "Grandparents and Grandchildren",
        "Disney Fans",
        "First-Time Cruisers",
      ],
      itinerary: [
        { "@type": "Place", name: "Port Canaveral" },
        { "@type": "Place", name: "Castaway Cay" },
        { "@type": "Place", name: "Lookout Cay at Lighthouse Point" },
        { "@type": "Place", name: "Nassau" },
        { "@type": "Place", name: "Caribbean Islands" },
      ],
    },
    {
      "@type": "Review",
      "@id":
        "https://www.tripsandships.com/disney-cruises-from-port-canaveral#review",
      itemReviewed: {
        "@type": "TravelAction",
        name: "Disney Cruises from Port Canaveral",
      },
      reviewBody:
        "Disney Cruises from Port Canaveral offer one of the most convenient and exciting ways to experience Disney Cruise Line — combining easy Orlando access, Walt Disney World combinations, private island destinations, and Disney's exceptional family-focused service.",
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
        "https://www.tripsandships.com/disney-cruises-from-port-canaveral#breadcrumb",
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
        {
          "@type": "ListItem",
          position: 4,
          name: "Disney Cruises from Port Canaveral",
          item: "https://www.tripsandships.com/disney-cruises-from-port-canaveral",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id":
        "https://www.tripsandships.com/disney-cruises-from-port-canaveral#faq",
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

const aacFeelItems = [
  {
    icon: <Plane size={22} strokeWidth={1.5} />,
    title: "Orlando International Airport (MCO)",
    text: "The most popular airport for Disney cruisers, offering extensive domestic and international flight connections.",
  },
  {
    icon: <Car size={22} strokeWidth={1.5} />,
    title: "Private Transfers",
    text: "Convenient private transportation services provide direct transfers between Orlando, area resorts, and Port Canaveral.",
  },
  {
    icon: <Bus size={22} strokeWidth={1.5} />,
    title: "Cruise Shuttles",
    text: "Many Orlando-area hotels and resorts offer shuttle services designed specifically for cruise passengers.",
  },
  {
    icon: <KeyRound size={22} strokeWidth={1.5} />,
    title: "Rental Cars",
    text: "A popular option for travelers extending their Florida vacation before or after their cruise.",
  },
  {
    icon: <Ship size={22} strokeWidth={1.5} />,
    title: "Disney Transportation",
    text: "Available on select vacation packages, helping guests move seamlessly between Disney destinations and the port.",
  },
  {
    icon: <CheckCircle size={22} strokeWidth={1.5} />,
    title: "Stress-Free Embarkation",
    text: "Planning transportation in advance helps ensure a smooth and relaxing embarkation day experience.",
  },
];

/* ── aac: IntersectionObserver Hook ─────────────────────────────── */
function useAacInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return [ref, inView];
}

/* ── aac: Section 1 — What Alaska Feels Like ────────────────────── */
function AacFeelSection() {
  const [ref, inView] = useAacInView();
  return (
    <section className="aac-section aac-section-feel" ref={ref}>
      <div className="aac-container">
        <div className="aac-section-header">
          <h2 className="aac-h2">Getting to Port Canaveral</h2>
          <div
            className="aac-accent-line"
            style={{ margin: "auto", marginTop: "15px" }}
          ></div>
        </div>
        <div className={`aac-feel-grid${inView ? " aac-animate-in" : ""}`}>
          {aacFeelItems.map((item, i) => (
            <div
              key={i}
              className="aac-feel-card"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className="aac-feel-icon" aria-hidden="true">
                {item.icon}
              </div>
              <h3 className="aac-feel-card-title">{item.title}</h3>
              <p className="aac-feel-card-text">{item.text}</p>
            </div>
          ))}
        </div>
        <div className="aac-feel-footer">
          <button className="aac-cta-btn">
            Plan Your Disney Cruise
            <span className="aac-cta-arrow">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
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
const DisneyCruisesFromPortCanaveral = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [readMore, setReadMore] = useState(false);
  const images = [];
  const [activeDest, setActiveDest] = useState("port-canaveral");
  const currentDest =
    portCanaveraldestinations.find((d) => d.id === activeDest) ||
    portCanaveraldestinations[0];
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
          Disney Cruises from Port Canaveral | Disney Cruise Vacations from
          Orlando
        </title>
        <meta
          name="title"
          content="Disney Cruises from Port Canaveral for Families & Multigenerational Travel"
        />
        <meta
          name="description"
          content="Discover Disney Cruises from Port Canaveral, Florida. Sail to The Bahamas, Caribbean, and Disney private island destinations while enjoying world-class entertainment, family-friendly accommodations, and unforgettable Disney experiences."
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
          <h1>Begin Your Disney Cruise Adventure from Port Canaveral</h1>
          <p>
            For many travelers, Port Canaveral is where the Disney magic begins.
          </p>
          <p>
            Located on Florida's Space Coast just an hour from Orlando, Port
            Canaveral serves as Disney Cruise Line's primary homeport and one of
            the most popular cruise departure ports in the world.
          </p>
          {readMore && (
            <>
              <p>
                Every year, thousands of families, grandparents, couples, and
                multigenerational groups begin unforgettable vacations from Port
                Canaveral aboard Disney's beautiful fleet of ships.
              </p>
              <p>
                Whether you're dreaming of tropical beaches, private island
                escapes, Caribbean adventures, or a complete Disney vacation
                that includes Walt Disney World, Port Canaveral offers one of
                the most convenient and exciting ways to start your journey.
              </p>
              <p>
                Because with Disney, the vacation magic starts long before you
                reach your destination — it begins the moment you step aboard.
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
      {/* ══ WHY CHOOSE A DISNEY CRUISE FROM PORT CANAVERAL ══════════════════ */}
      <section
        className="adg-c-section adg-c-bg-dark"
        id="adg-why-port-canaveral"
      >
        <div className="adg-c-container">
          <div className="adg-c-why-grid">
            {/* LEFT */}
            <div className="adg-c-why-left">
              <span className="adg-c-eyebrow adg-c-eyebrow-light">
                Family Travel Trends
              </span>
              <h2 className="adg-c-h2 adg-c-h2-light">
                Why Choose a Disney Cruise from Port Canaveral?
              </h2>
              <div className="aac-accent-line aac-accent-white"></div>
              <p className="adg-c-lead adg-c-lead-light">
                Port Canaveral offers several unique advantages for Disney
                Cruise Line guests.
              </p>
              <p className="adg-c-body adg-c-body-light">
                Its location near Orlando means families can pair a Disney
                cruise with Walt Disney World, eliminating the need to
                coordinate long international travel to a departure port. Disney
                transforms a Port Canaveral departure into something far more
                memorable than simply boarding a ship.
              </p>
            </div>
            {/* RIGHT */}
            <div className="adg-c-why-right">
              <div className="adg-c-why-card">
                <span className="adg-c-why-card-label">Guests Enjoy:</span>
                <div className="adg-c-pill-grid">
                  {[
                    "Convenient Orlando Airport Access",
                    "Easy Access to Walt Disney World",
                    "Frequent Disney Sailings Year-Round",
                    "Family-Friendly Travel Experience",
                    "Multiple Cruise Lengths",
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

      {/* ── WHERE IS PORT CANAVERAL? ───── */}
      <section
        className="ugt-components-section"
        id="ugt-components"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="Asc-container">
          {/* HEADER */}
          <div className="ugt-components-header">
            <h2 className="adg-c-h2">Where is Port Canaveral?</h2>

            <div className="adg-c-accent-line"></div>
          </div>

          {/* MAIN CONTENT */}
          <div className="ugt-components-list">
            <div className="ugt-component-row">
              {/* LEFT IMAGE */}
              <div className="ugt-component-image-wrapper">
                <div className="ugt-component-image-container">
                  <img
                    alt="Port Canaveral Florida cruise terminal"
                    className="ugt-component-image"
                  />
                </div>
              </div>

              {/* RIGHT CONTENT */}
              <div className="ugt-component-content">
                <p className="ugt-component-text">
                  Port Canaveral is located on Florida's Atlantic Coast near
                  Cape Canaveral and Orlando.
                </p>

                <p className="ugt-component-text">
                  Travelers can easily reach the port from:
                </p>

                <div className="ugt-questions-box">
                  <span className="ugt-questions-title">
                    Nearby Travel Connections:
                  </span>

                  <ul className="ugt-questions-list">
                    {[
                      "Orlando International Airport (MCO)",
                      "Walt Disney World Resort",
                      "Universal Orlando Resort",
                      "Central Florida hotels",
                      "Florida residents driving to the port",
                    ].map((item, idx) => (
                      <li key={idx} className="ugt-question-item">
                        <Check size={16} className="ugt-question-icon" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="ugt-component-text">
                  The port's strategic location makes it easy for visitors to
                  combine a Disney cruise with other Central Florida attractions
                  and vacations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ VIDEO SECTION ════════════════════════════════════════════════════ */}
      <section
        className="azs-video-section"
        id="azs-video-port-canaveral"
        style={{ backgroundColor: "var(--bg-white)" }}
      >
        <div className="azs-container">
          <div className="azs-section-header">
            <h2 className="azs-h2">
              Discover Disney Cruise Line Magic <br /> from Port Canaveral
            </h2>
            <div className="azs-accent-line"></div>
            <p className="azs-video-intro">
              Experience the convenience of departing from Florida's Space Coast
              while sailing to some of Disney Cruise Line's most beautiful and
              iconic destinations — the Bahamas, Caribbean, and beyond.
            </p>
          </div>
          <div className="azs-video-wrapper">
            <div className="azs-video-frame">
              <iframe
                src="https://www.youtube.com/embed/78a5juJUmc4"
                title="Experience the Magic of Disney Cruise Line"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* ══ DISNEY SHIPS SAILING FROM PORT CANAVERAL ═════════════════════════ */}
      <section className="dac-special-section">
        <div className="dac-special-container">
          <div className="dac-special-header">
            <h2 className="dac-special-title">
              Disney Ships Sailing from Port Canaveral
            </h2>
            <div className="dac-special-accent"></div>
            <p className="dac-special-lead">
              Port Canaveral frequently serves as home to some of Disney Cruise
              Line's most popular ships, offering guests a variety of magical
              vacation experiences throughout the year.
            </p>
          </div>

          <div className="dac-special-grid">
            {[
              {
                icon: Ship,
                title: "Disney Wish",
                desc: "One of Disney's newest and most innovative ships, featuring immersive storytelling, family entertainment, and modern stateroom designs.",
              },
              {
                icon: Star,
                title: "Disney Fantasy",
                desc: "A favorite for longer Caribbean itineraries, offering Broadway-style entertainment, exceptional dining, and spacious family accommodations.",
              },
              {
                icon: Compass,
                title: "Disney Treasure",
                desc: "Disney's next-generation family adventure ship, inspired by exploration and discovery with exciting new experiences throughout the vessel.",
              },
              {
                icon: Anchor,
                title: "Other Disney Ships",
                desc: "Disney periodically adjusts ship deployments based on seasonal schedules, itinerary demand, and fleet operations.",
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
      {/* ══ PORT CANAVERAL DESTINATIONS & SHIPS ══════════════════════════════ */}
      <section
        className="luc-destinations-section"
        id="luc-port-canaveral-destinations"
      >
        <div className="luc-destinations-container">
          <div className="luc-destinations-header">
            <h2 className="luc-destinations-title">
              Popular Disney Cruise Destinations from Port Canaveral
            </h2>
            <div className="adg-c-accent-line"></div>
            <p className="luc-destinations-intro">
              Port Canaveral departures offer access to some of Disney Cruise
              Line's most sought-after destinations — from Disney's iconic
              private islands to vibrant Caribbean ports, all accessible from
              Florida's Space Coast.
            </p>
          </div>
          <div className="luc-dest-layout">
            {/* Sidebar nav */}
            <nav className="luc-dest-nav">
              {portCanaveraldestinations.map((item) => {
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
      {/* ══ WHY FAMILIES LOVE DISNEY CRUISES FROM PORT CANAVERAL ════════════ */}
      <section className="dac-families-section">
        <div className="dac-families-container">
          <div className="dac-families-grid">
            {/* Left Content Column */}
            <div className="dac-families-left">
              <h2 className="dac-families-title">
                Why Families Love Disney Cruises from Port Canaveral
              </h2>
              <div className="dac-families-accent"></div>
              <p className="dac-families-lead">
                Disney has built its reputation around creating memorable family
                experiences — and Port Canaveral's convenient location makes it
                easier than ever to embark.
              </p>

              <div className="dac-families-features">
                {[
                  {
                    title: "Broadway-Style Entertainment",
                    desc: "Award-winning live productions performed onboard — full-scale, immersive Disney entertainment unlike anything else at sea.",
                  },
                  {
                    title: "Character Meet-and-Greets",
                    desc: "Beloved Disney characters throughout the voyage — onboard the ship, at Castaway Cay, and at Lookout Cay.",
                  },
                  {
                    title: "Exceptional Youth Programs",
                    desc: "Industry-leading clubs for children and teens provide supervised, theme-based programming throughout the cruise.",
                  },
                  {
                    title: "Family Activities",
                    desc: "Interactive entertainment, themed events, games, and activities designed to bring families together throughout every sailing.",
                  },
                  {
                    title: "Exceptional Disney Service",
                    desc: "Disney consistently receives high guest satisfaction ratings — the hallmark of every Port Canaveral departure.",
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
                    alt="Disney Cruise from Port Canaveral family sailing"
                    className="dac-families-img"
                  />
                  <div className="dac-families-img-caption">
                    Port Canaveral Departures
                  </div>
                </div>
                <div className="dac-families-img-card dac-families-img-card--secondary">
                  <img
                    alt="Family enjoying onboard Disney entertainment from Port Canaveral"
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
      {/* ══ IMAGE GALLERY ════════════════════════════════════════════════════ */}
      <section className="dfg-gallery-section" id="dfg-gallery">
        <div className="dfg-gallery-container">
          <div className="dfg-gallery-header">
            <span className="dfg-gallery-eyebrow">
              Disney Cruise Line Experience
            </span>
            <h2 className="dfg-gallery-title">
              Port Canaveral's Gateway to Disney's <br /> Most Iconic
              Destinations
            </h2>
            <div className="dfg-gallery-accent"></div>
            <p className="dfg-gallery-intro">
              From the pristine beaches of Castaway Cay and the cultural
              richness of Lookout Cay to the vibrant islands of the Caribbean —
              Disney Cruises from Port Canaveral deliver iconic experiences
              wrapped in unmatched family-focused service.
            </p>
          </div>

          <div className="dfg-gallery-mosaic">
            {/* Large featured image — top left */}
            <div
              className="dfg-gallery-item dfg-gallery-large"
              style={{ color: "#fff" }}
            >
              <img
                alt="Port Canaveral Disney Cruise Line departure Florida Space Coast"
                className="dfg-gallery-img"
              />
              <div className="dfg-gallery-overlay">
                <span className="dfg-gallery-caption">
                  Disney's Florida Homeport
                </span>
              </div>
            </div>

            {/* Tall image — top right */}
            <div
              className="dfg-gallery-item dfg-gallery-tall"
              style={{ color: "#fff" }}
            >
              <img
                alt="Castaway Cay Disney private island from Port Canaveral"
                className="dfg-gallery-img"
              />
              <div className="dfg-gallery-overlay">
                <span className="dfg-gallery-caption">
                  Disney's Private Island Paradise
                </span>
              </div>
            </div>

            {/* Wide image — bottom left */}
            <div
              className="dfg-gallery-item dfg-gallery-wide"
              style={{ color: "#fff" }}
            >
              <img
                alt="Caribbean cruise from Port Canaveral Disney Cruise Line"
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
              style={{ color: "#fff" }}
            >
              <img
                alt="Walt Disney World and Disney Cruise combination vacation from Port Canaveral"
                className="dfg-gallery-img"
              />
              <div className="dfg-gallery-overlay">
                <span className="dfg-gallery-caption">
                  The Ultimate Disney Vacation
                </span>
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
              Best Time to Take a Disney Cruise from Port Canaveral
            </h2>
            <div className="dac-timing-accent"></div>
            <p className="dac-timing-lead">
              Port Canaveral sailings operate throughout much of the year. Each
              season offers unique advantages depending on your travel goals.
            </p>
          </div>

          <div className="dac-timing-grid">
            {[
              {
                month: "Winter",
                items: [
                  {
                    label: "Warm-Weather Escape",
                    desc: "Enjoy sunny tropical departures while escaping colder winter climates — one of the busiest and most popular times to sail from Port Canaveral.",
                  },
                  {
                    label: "Holiday Cruises",
                    desc: "Disney's Very Merrytime holiday sailings make winter a magical time — a favorite for families celebrating the season at sea.",
                  },
                ],
              },
              {
                month: "Spring",
                items: [
                  {
                    label: "Comfortable Temperatures",
                    desc: "Pleasant Florida weather ideal for beach days, island exploration, and outdoor excursions throughout the Bahamas and Caribbean.",
                  },
                  {
                    label: "Family Travel Season",
                    desc: "Spring break and school holiday periods make this a popular time for families to cruise from Port Canaveral.",
                  },
                ],
              },
              {
                month: "Summer",
                items: [
                  {
                    label: "Peak Vacation Period",
                    desc: "School holidays make summer the busiest and most vibrant cruise period from Port Canaveral — excellent energy onboard and ashore.",
                  },
                  {
                    label: "School Holiday Travel",
                    desc: "Ideal for families with school-age children who need to plan around the academic calendar.",
                  },
                ],
              },
              {
                month: "Fall",
                items: [
                  {
                    label: "Halloween on the High Seas",
                    desc: "Disney's beloved Halloween-themed sailings make fall one of the most magical and popular times to cruise from Port Canaveral.",
                  },
                  {
                    label: "Attractive Pricing Opportunities",
                    desc: "Travelers often find excellent value and promotional offers during shoulder-season fall months.",
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
        id="dmg-accommodations-port-canaveral"
      >
        <div className="dmg-info-container">
          <div className="dmg-info-grid">
            <div className="dmg-info-content">
              <h2 className="dmg-info-title">
                Accommodations Designed for Families
              </h2>
              <div className="dmg-info-accent"></div>
              <p className="dmg-info-lead">
                Disney staterooms remain among the most family-friendly in the
                cruise industry.
              </p>
              <div className="dmg-info-features">
                {[
                  {
                    title: "Split Bathrooms",
                    desc: "A favorite among families — separate vanity and bath areas reduce morning congestion for every member of the group.",
                  },
                  {
                    title: "Connecting Staterooms",
                    desc: "Ideal for larger groups and multigenerational families traveling together from Port Canaveral.",
                  },
                  {
                    title: "Family Suites",
                    desc: "Excellent for multigenerational travel — more space, more privacy, and more comfort for extended family groups.",
                  },
                  {
                    title: "Concierge Accommodations",
                    desc: "Premium service and exclusive amenities for the ultimate Disney cruise experience from Port Canaveral.",
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
                These thoughtful features help make Disney cruises departing
                from Port Canaveral more comfortable and enjoyable for families
                of every size.
              </p>
            </div>
            <div className="dmg-info-media">
              <div className="dmg-media-wrapper">
                <img
                  alt="Disney Cruise from Port Canaveral family stateroom accommodations"
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
                  Dining on a Disney Cruise from Port Canaveral
                </h2>
                <div className="dmg-info-accent"></div>
                <p className="dmg-info-lead">
                  Dining is a major highlight of every Disney voyage from Port
                  Canaveral.
                </p>
              </div>
              <div className="dmg-info-features">
                {[
                  {
                    title: "Rotational Dining",
                    desc: "Experience different themed restaurants throughout the cruise — guests rotate through multiple dining venues each evening.",
                  },
                  {
                    title: "Family-Friendly Menus",
                    desc: "Options for all ages and dietary needs — from young children to discerning adult palates.",
                  },
                  {
                    title: "Specialty Dining",
                    desc: "Upscale dining experiences designed for adults seeking something extra special during their voyage.",
                  },
                  {
                    title: "Casual Dining Options",
                    desc: "Relaxed poolside and quick-service options perfect for busy days between port visits.",
                  },
                  {
                    title: "Exceptional Service",
                    desc: "Disney's dining teams consistently earn outstanding reviews — the same attentive crew serves guests throughout the entire voyage.",
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
                  alt="Dining on a Disney Cruise from Port Canaveral"
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
      <section className="luc-why-section" id="luc-why-port-canaveral">
        <div className="luc-why-container">
          {/* LEFT — stacked images */}
          <div className="luc-why-images">
            <div className="luc-why-img-main-wrap" style={{ color: "#fff" }}>
              <img
                alt="Grandparents and grandchildren enjoying a Disney Cruise from Port Canaveral"
                className="luc-why-img-main"
              />
              <div className="luc-why-img-overlay"></div>
            </div>
            <div className="luc-why-img-accent-wrap" style={{ color: "#fff" }}>
              <img
                alt="Disney multigenerational family cruise vacation from Port Canaveral"
                className="luc-why-img-accent"
              />
              <div className="luc-why-img-badge">
                <span className="luc-why-badge-num">5</span>
                <span className="luc-why-badge-text">Key Benefits</span>
              </div>
            </div>
          </div>
          {/* RIGHT — content */}
          <div className="luc-why-content">
            <h2 className="luc-why-title">
              Disney Cruises from Port Canaveral for Grandparents &amp;
              Grandchildren
            </h2>
            <div className="aac-accent-line aac-accent-white"></div>
            <p className="luc-why-intro">
              Port Canaveral departures are especially popular among
              multigenerational travelers.
            </p>
            <p className="luc-why-intro">
              Grandparents choose Disney Cruises from Port Canaveral because
              they combine:
            </p>
            <div className="luc-why-features">
              {[
                {
                  num: "01",
                  title: "Easy Travel Logistics",
                  desc: "Minimal transportation complexity — cruise from Port Canaveral eliminates the need to coordinate multiple hotels, airports, and transportation arrangements.",
                },
                {
                  num: "02",
                  title: "Family Time Together",
                  desc: "Abundant opportunities to create shared memories — character encounters, beach days, Broadway-style shows, and dining experiences enjoyed across every generation.",
                },
                {
                  num: "03",
                  title: "Activities for Every Generation",
                  desc: "Children, parents, and grandparents all find experiences tailored to their interests — from thrilling youth clubs to quiet adult spaces and relaxing beach days.",
                },
                {
                  num: "04",
                  title: "Comfortable Accommodations",
                  desc: "Disney's connecting staterooms and family suite options are designed to support larger family groups traveling together from Port Canaveral.",
                },
                {
                  num: "05",
                  title: "Relaxation and Adventure",
                  desc: "The perfect balance for travelers of different ages — Disney delivers both peaceful moments and family-wide excitement throughout every voyage.",
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
              Combine Walt Disney World &amp; <br /> a Disney Cruise from Port
              Canaveral
            </h2>
            <div className="Asc-accent-line"></div>
            <p className="ugt-advantage-intro">
              One of the biggest reasons travelers choose Port Canaveral is its
              proximity to Walt Disney World. Many families consider combining
              both the ultimate Disney vacation experience.
            </p>
          </div>
          <div className="ugt-advantage-grid">
            {[
              {
                icon: Ship,
                title: "Disney World Before Your Cruise",
                desc: "Enjoy the parks and resort experience before relaxing at sea — arrive in Orlando a few days early to maximize your Disney adventure before boarding.",
              },
              {
                icon: Sun,
                title: "Disney World After Your Cruise",
                desc: "Extend the magic after returning to Port Canaveral by heading straight to Walt Disney World to continue the adventure on land.",
              },
              {
                icon: Globe,
                title: "Split Stay Vacation",
                desc: "Spend several days at Walt Disney World and several days onboard a Disney ship — the ultimate Disney land-and-sea experience in one seamless trip.",
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
        id="azs-video-port-canaveral-ent"
        style={{ backgroundColor: "var(--bg-white)" }}
      >
        <div className="azs-container">
          <div className="azs-section-header">
            <h2 className="azs-h2">
              Discover the Disney Cruise Line Experience
            </h2>
            <div className="azs-accent-line"></div>
            <p className="azs-video-intro">
              Discover what makes Disney Cruise Line unlike any other vacation
              at sea. From unforgettable family experiences and immersive
              entertainment to dedicated adult spaces and legendary Disney
              service, every voyage from Port Canaveral is designed to create
              magical memories for guests of all ages.
            </p>
          </div>

          <div className="azs-video-wrapper">
            <div className="azs-video-frame">
              <iframe
                src="https://www.youtube.com/embed/SYUdtMnKCwA"
                title="Experience the Magic of Disney Cruise Line from Port Canaveral"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <AacFeelSection />

      {/* ══ IS IT WORTH IT ═══════════════════════════════════════════════════ */}
      <section className="adg-section" id="adg-worth-it-port-canaveral">
        <div className="adg-container">
          <div className="adg-section-header" style={{ marginBottom: "60px" }}>
            <h2 className="adg-h2">
              Is a Disney Cruise from Port Canaveral Worth It?
            </h2>
            <div className="adg-accent-line"></div>
          </div>
          <div
            className="adg-split-layout"
            style={{ alignItems: "flex-start" }}
          >
            <div className="adg-content-card-side">
              <img
                alt="Disney Cruise from Port Canaveral family experience"
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
                  Disney cruises generally command premium pricing compared to
                  many mainstream cruise lines.
                </p>
                <p className="adg-card-subtext" style={{ marginTop: "18px" }}>
                  For travelers seeking one of the best family cruise
                  experiences available, Disney continues to deliver exceptional
                  value — and Port Canaveral's convenience makes it even easier
                  to access.
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
                  title: "Private Island Destinations",
                  icon: <Star size={20} />,
                },
                {
                  title: "Orlando & Disney World Access",
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
              Who Should Choose a Disney Cruise from Port Canaveral?
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
                  "Disney Fans",
                  "First-Time Cruisers",
                  "Multi-Generational Groups",
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
                  "Travelers Seeking Ultra-Luxury Cruising",
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
      <section className="Asc-section Asc-bg-white" id="Asc-faq-port-canaveral">
        <div className="Asc-container">
          <div className="Asc-section-header">
            <h2 className="Asc-h2">Frequently Asked Questions</h2>
            <div className="Asc-accent-line"></div>
            <p className="Asc-faq-intro">
              Everything you need to know about Disney Cruises from Port
              Canaveral.
            </p>
          </div>
          <FAQ />
        </div>
      </section>
      {/* ══ FINAL THOUGHTS / CTA ══════════════════════════════════════════════ */}
      <section className="Asc-help-section">
        <div className="Asc-help-bg-wrap">
          <img
            alt="Disney Cruise from Port Canaveral"
            className="Asc-help-bg-img"
          />
          <div className="Asc-help-overlay"></div>
        </div>
        <div className="Asc-container">
          <div className="Asc-help-card">
            <div className="Asc-help-content">
              <div className="Asc-help-header">
                <span className="Asc-help-eyebrow">
                  Disney Cruises from Port Canaveral
                </span>
                <h2 className="Asc-help-h2">Final Thoughts</h2>
                <div className="Asc-help-accent"></div>
              </div>
              <div className="Asc-help-grid">
                <div className="Asc-help-info">
                  <p className="Asc-help-intro">
                    Disney Cruises from Port Canaveral offer one of the most
                    convenient and exciting ways to experience Disney Cruise
                    Line.
                  </p>
                  <p className="Asc-help-intro">
                    <strong>
                      With easy access from Orlando, proximity to Walt Disney
                      World, and departures to some of the Caribbean's most
                      beautiful destinations, Port Canaveral serves as the
                      perfect starting point for unforgettable family
                      adventures.
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
                      Whether you're planning a Bahamas getaway, a Caribbean
                      cruise, or the ultimate Disney land-and-sea vacation, Port
                      Canaveral makes it easy to begin your journey.
                      <br />
                      <br />
                      For families, grandparents, and multigenerational
                      travelers, Disney Cruises from Port Canaveral offer more
                      than a vacation.
                      <br />
                      <br />
                      They offer the opportunity to create memories that will
                      last long after the ship returns to port.
                      <br />
                      <br />
                      <strong>
                        Because with Disney, the vacation magic starts long
                        before you reach your destination — it begins the moment
                        you step aboard.
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
                      Plan Your Disney Cruise from Port Canaveral
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>

                <div className="Asc-help-list-box">
                  <h3 className="Asc-help-list-title">
                    Why Families Choose Port Canaveral:
                  </h3>
                  <ul className="Asc-help-bullets">
                    {[
                      "Disney's Primary Florida Homeport",
                      "One Hour from Orlando",
                      "Walt Disney World Combinations",
                      "Castaway Cay Access",
                      "Bahamas & Caribbean Itineraries",
                      "Exceptional Disney Service",
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
                      planning your Disney Cruise from Port Canaveral.
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

export default DisneyCruisesFromPortCanaveral;
