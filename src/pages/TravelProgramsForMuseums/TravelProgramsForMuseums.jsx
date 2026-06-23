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
  HeartHandshake,
  Compass,
  Anchor,
  Ship,
  Waves,
  Repeat,
  TrendingUp,
  Handshake,
  BookOpen,
  Landmark,
} from "lucide-react";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela.jpeg";

// import Mediterian from "../../assets/TravelProgramsForMuseums/museum-mediterranean-cultural-art-tour-group.jpg";
// import Danube from "../../assets/TravelProgramsForMuseums/museum-river-cruise-danube-european-heritage.jpg";
// import Britislen from "../../assets/TravelProgramsForMuseums/museum-british-isles-northern-europe-heritage.jpg";
// import France from "../../assets/TravelProgramsForMuseums/museum-cultural-land-journey-france-art.jpg";
// import Antarctica from "../../assets/TravelProgramsForMuseums/museum-expedition-antarctica-science-natural-history.jpg";

import { Helmet } from "react-helmet-async";

const museumTravelDestinations = [
  {
    id: "river-cruises",
    title: "River Cruises for Museum Groups",
    badge: "River Cruises",
    icon: Waves,
    desc: "River cruises have become one of the most popular travel formats for museums, providing comfortable accommodations and smooth transitions between historically significant regions.",
    columns: [
      {
        label: "Benefits Include",
        items: [
          "Easy group logistics",
          "Comfortable accommodations",
          "Multiple destinations",
          "Educational excursions",
          "Intimate group atmosphere",
          "Expert-led experiences",
        ],
      },
      {
        label: "Popular river cruise destinations include:",
        items: [
          "The Danube",
          "The Rhine",
          "The Seine",
          "The Douro",
          "The Nile",
        ],
      },
    ],
    themeLabel: "Why Choose River Cruises?",
    themeText:
      "River cruising appeals strongly to museum audiences seeking culture and enrichment.",
  },
  {
    id: "cultural-cruises",
    title: "Small Ship Cultural Cruises",
    badge: "Cultural Cruises",
    icon: Ship,
    desc: "Small ship cruises offer unique access to destinations larger vessels cannot reach, blending comfort with deep local exposure.",
    columns: [
      {
        label: "Museum groups often enjoy:",
        items: [
          "Mediterranean Cruises",
          "Greek Islands",
          "Scandinavian Voyages",
          "British Isles",
          "Coastal Europe",
          "Expedition Destinations",
        ],
      },
    ],
    themeLabel: "The Small Ship Advantage",
    themeText:
      "The smaller scale encourages interaction and custom educational programming tailored to the curious traveler.",
  },
  {
    id: "donor-travel",
    title: "Museum Donor Travel Programs",
    badge: "Donor Travel",
    icon: Compass,
    desc: "Travel can play an important role in donor cultivation and stewardship, transforming standard fundraising into memorable real-world connections.",
    columns: [
      {
        label: "Exclusive journeys designed specifically for:",
        items: [
          "Major Donors",
          "Patrons",
          "Board Members",
          "Leadership Circles",
          "Benefactors",
        ],
      },
    ],
    themeLabel: "Deepening Connections",
    themeText:
      "These targeted experiences provide invaluable opportunities for deeper engagement and stronger institutional relationships.",
  },
  {
    id: "membership-benefits",
    title: "Educational Travel as a Membership Benefit",
    badge: "Member Benefits",
    icon: Anchor,
    desc: "Many museums use high-quality travel programs to drastically increase membership value and boost brand loyalty.",
    columns: [
      {
        label: "Benefits may include:",
        items: [
          "Priority Booking",
          "Member-Only Departures",
          "Special Pricing",
          "Exclusive Experiences",
          "Curator Participation",
        ],
      },
    ],
    themeLabel: "Value Proposition",
    themeText:
      "Travel becomes a compelling incentive for membership growth, long-term retention, and organic community word-of-mouth.",
  },
  {
    id: "revenue-opportunities",
    title: "Revenue Opportunities for Museums",
    badge: "Revenue Ops",
    icon: MapPin,
    desc: "Beyond educational value, expertly crafted travel programs can contribute immensely to institutional sustainability and financial health.",
    columns: [
      {
        label: "Potential benefits include:",
        items: [
          "Membership Growth",
          "Increased Donations",
          "Sponsorship Opportunities",
          "Program Revenue",
          "Enhanced Donor Retention",
          "Greater Community Engagement",
        ],
      },
    ],
    themeLabel: "The Bottom Line",
    themeText:
      "When managed effectively, travel programs seamlessly support both the educational mission and financial goals of the museum.",
  },
];

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
        "Luxury travel agency specializing in museum travel programs, educational group travel, cultural travel experiences, alumni cruises, river cruises, and premium group travel planning.",
    },
    {
      "@type": "TravelAgency",
      "@id": "https://www.tripsandships.com/#travelagency",
      name: "Trips & Ships Luxury Travel",
      url: "https://www.tripsandships.com",
      description:
        "Luxury travel experts helping museums, cultural institutions, and educational organizations create exceptional group travel programs for members, donors, and supporters.",
    },
    {
      "@type": "Person",
      "@id": "https://www.tripsandships.com/#angelahughes",
      name: "Angela Hughes",
      jobTitle: "CEO",
      worksFor: { "@id": "https://www.tripsandships.com/#organization" },
      description:
        "CEO of Trips & Ships Luxury Travel, Founder of Luxury Travel University, Travel Leaders Network Advisory Board member, global luxury travel speaker and trainer, weekly industry columnist, and travel expert with over 40 years of experience and travel to more than 121 countries.",
    },
    {
      "@type": "WebPage",
      "@id": "https://www.tripsandships.com/travel-programs-for-museums",
      url: "https://www.tripsandships.com/travel-programs-for-museums",
      name: "Travel Programs for Museums | Educational Group Travel & Cultural Experiences",
      description:
        "Discover how museum travel programs create meaningful cultural experiences for members, donors, patrons, and supporters. Learn how museums use curated group travel to strengthen engagement, generate revenue, and enhance lifelong learning.",
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.tripsandships.com/travel-programs-for-museums#breadcrumb",
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
          name: "Group Travel",
          item: "https://www.tripsandships.com/group-travel",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Travel Programs for Museums",
          item: "https://www.tripsandships.com/travel-programs-for-museums",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.tripsandships.com/travel-programs-for-museums#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What are museum travel programs?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Museum travel programs are educational group travel experiences designed for museum members, donors, patrons, and supporters.",
          },
        },
        {
          "@type": "Question",
          name: "Why do museums offer travel programs?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Museums use travel programs to enhance engagement, support lifelong learning, strengthen donor relationships, and create additional revenue opportunities.",
          },
        },
        {
          "@type": "Question",
          name: "What types of trips do museums offer?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Popular options include cultural tours, river cruises, small ship cruises, historical journeys, art-focused travel, and educational expeditions.",
          },
        },
        {
          "@type": "Question",
          name: "Are museum travel programs only for donors?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Many programs are open to members, supporters, and the general public, while some exclusive departures may be reserved for donors or leadership groups.",
          },
        },
        {
          "@type": "Question",
          name: "Why are river cruises popular with museum groups?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "River cruises offer educational experiences, cultural immersion, convenient logistics, and access to multiple destinations — all appealing to museum audiences.",
          },
        },
        {
          "@type": "Question",
          name: "Can museum curators participate in trips?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Many museums include curators, historians, or subject-matter experts as trip leaders or guest lecturers, which significantly enhances the experience.",
          },
        },
        {
          "@type": "Question",
          name: "Do museum travel programs generate revenue?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "They can. Travel programs often contribute to membership growth, donor retention, and institutional revenue when managed effectively.",
          },
        },
        {
          "@type": "Question",
          name: "What is affinity travel for museums?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Affinity travel refers to group travel organized around shared interests, such as art, history, culture, or science — the natural audience for museum travel programs.",
          },
        },
        {
          "@type": "Question",
          name: "Are museum travel programs educational?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Education and cultural enrichment are usually central components of museum-sponsored travel.",
          },
        },
        {
          "@type": "Question",
          name: "How do museums manage travel programs?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Many museums partner with specialized travel companies that handle logistics, operations, and travel planning, allowing museum staff to focus on mission-driven programming.",
          },
        },
        {
          "@type": "Question",
          name: "What destinations work best for museum travel programs?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Popular destinations include Italy, France, Greece, Egypt, Japan, European river cruise routes, and expedition destinations such as Antarctica and the Arctic.",
          },
        },
        {
          "@type": "Question",
          name: "How can museum travel programs strengthen member retention?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Travel programs can serve as compelling membership benefits — offering priority booking, member-only departures, special pricing, and exclusive experiences that increase member loyalty.",
          },
        },
        {
          "@type": "Question",
          name: "Who participates in museum travel programs?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Typical participants include museum members, donors, patrons, retirees, lifelong learners, cultural enthusiasts, alumni, and affinity group travelers.",
          },
        },
        {
          "@type": "Question",
          name: "What makes a successful museum travel program?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The most successful programs share mission alignment, expert leadership, high-quality travel partners, meaningful cultural experiences, and exceptional service.",
          },
        },
        {
          "@type": "Question",
          name: "Why partner with a professional travel company for museum programs?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Professional travel partners handle cruise selection, itinerary planning, vendor coordination, guest registration, travel logistics, marketing support, and risk management — allowing museum staff to focus on mission-driven programming.",
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
      q: "What are museum travel programs?",
      a: "Museum travel programs are educational group travel experiences designed for museum members, donors, patrons, and supporters.",
    },
    {
      q: "Why do museums offer travel programs?",
      a: "Museums use travel programs to enhance engagement, support lifelong learning, strengthen donor relationships, and create additional revenue opportunities.",
    },
    {
      q: "What types of trips do museums offer?",
      a: "Popular options include cultural tours, river cruises, small ship cruises, historical journeys, art-focused travel, and educational expeditions.",
    },
    {
      q: "Are museum travel programs only for donors?",
      a: "No. Many programs are open to members, supporters, and the general public, while some exclusive departures may be reserved for donors or leadership groups.",
    },
    {
      q: "Why are river cruises popular with museum groups?",
      a: "River cruises offer educational experiences, cultural immersion, convenient logistics, and access to multiple destinations — all appealing to museum audiences.",
    },
    {
      q: "Can museum curators participate in trips?",
      a: "Yes. Many museums include curators, historians, or subject-matter experts as trip leaders or guest lecturers, which significantly enhances the experience.",
    },
    {
      q: "Do museum travel programs generate revenue?",
      a: "They can. Travel programs often contribute to membership growth, donor retention, and institutional revenue when managed effectively.",
    },
    {
      q: "What is affinity travel for museums?",
      a: "Affinity travel refers to group travel organized around shared interests, such as art, history, culture, or science — the natural audience for museum travel programs.",
    },
    {
      q: "Are museum travel programs educational?",
      a: "Yes. Education and cultural enrichment are usually central components of museum-sponsored travel.",
    },
    {
      q: "How do museums manage travel programs?",
      a: "Many museums partner with specialized travel companies that handle logistics, operations, and travel planning, allowing museum staff to focus on mission-driven programming.",
    },
    {
      q: "What destinations work best for museum travel programs?",
      a: "Popular destinations include Italy, France, Greece, Egypt, Japan, European river cruise routes, and expedition destinations such as Antarctica and the Arctic.",
    },
    {
      q: "How can museum travel programs strengthen member retention?",
      a: "Travel programs can serve as compelling membership benefits — offering priority booking, member-only departures, special pricing, and exclusive experiences that increase member loyalty.",
    },
    {
      q: "Who participates in museum travel programs?",
      a: "Typical participants include museum members, donors, patrons, retirees, lifelong learners, cultural enthusiasts, alumni, and affinity group travelers.",
    },
    {
      q: "What makes a successful museum travel program?",
      a: "The most successful programs share mission alignment, expert leadership, high-quality travel partners, meaningful cultural experiences, and exceptional service.",
    },
    {
      q: "Why partner with a professional travel company for museum programs?",
      a: "Professional travel partners handle cruise selection, itinerary planning, vendor coordination, guest registration, travel logistics, marketing support, and risk management.",
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

const TravelProgramsForMuseums = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [readMore, setReadMore] = useState(false);
  const images = [];
  const [activeDest, setActiveDest] = useState("river-cruises");
  const [hovered, setHovered] = useState(null);

  const currentDest =
    museumTravelDestinations.find((d) => d.id === activeDest) ||
    museumTravelDestinations[0];
  const ActiveIcon = currentDest.icon;

  useEffect(() => {
    if (!images.length) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="Asc-page-wrapper">
      <Helmet>
        <title>
          Travel Programs for Museums | Educational Group Travel & Cultural
          Experiences
        </title>
        <meta name="title" content="Travel Programs for Museums" />
        <meta
          name="description"
          content="Discover how museum travel programs create meaningful cultural experiences for members, donors, patrons, and supporters. Learn how museums use curated group travel to strengthen engagement, generate revenue, and enhance lifelong learning."
        />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>
      <Nav />

      {/* ══ HERO ══════════════════════════════════════════════════════════════ */}
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
          <h1>
            Travel Programs for Museums: Extending Learning Beyond the Gallery
            Walls
          </h1>
          <p>
            Museums have always been places of discovery, education, and
            cultural connection. But today's museum audiences increasingly seek
            experiences that go beyond exhibits and lectures.
          </p>
          {readMore && (
            <>
              <p>
                They want opportunities to explore art, history, science,
                culture, and global heritage firsthand. That's why many museums
                are expanding their engagement strategies through thoughtfully
                designed travel programs.
              </p>
              <p>
                Museum travel programs allow members, donors, patrons, and
                supporters to experience destinations, cultures, and historical
                sites in ways that deepen their connection to the museum's
                mission while creating unforgettable travel experiences.
              </p>
              <p>
                At Trips &amp; Ships Luxury Travel, we help museums design
                exceptional travel experiences that align with institutional
                objectives while delivering meaningful journeys. Led by{" "}
                <strong>Angela Hughes</strong>, one of the travel industry's
                most respected luxury travel experts, our team specializes in
                creating programs that inspire engagement and advance
                organizational goals.
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

      {/* ══ WHY MUSEUMS ARE INVESTING IN TRAVEL PROGRAMS ════════════════════ */}
      <section className="adg-c-section adg-c-bg-dark" id="adg-why-museums">
        <div className="adg-c-container">
          <div className="adg-c-why-grid">
            {/* LEFT — text */}
            <div className="adg-c-why-left">
              <span className="adg-c-eyebrow adg-c-eyebrow-light">
                Museum Travel Program Benefits
              </span>
              <h2 className="adg-c-h2 adg-c-h2-light">
                Why Museums Are Investing in Travel Programs
              </h2>
              <div className="aac-accent-line aac-accent-white"></div>
              <p className="adg-c-lead adg-c-lead-light">
                Travel has become one of the most effective ways for museums to
                strengthen relationships with their communities.
              </p>
              <p className="adg-c-body adg-c-body-light">
                Modern travelers increasingly seek educational, authentic, and
                culturally enriching experiences. Museum supporters are often
                lifelong learners who appreciate meaningful travel rather than
                traditional tourism — they want context, expert insight, and
                deeper access to destinations.
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
                <p className="adg-c-body adg-c-body-light">
                  Museum-sponsored travel programs are uniquely positioned to
                  meet these expectations — offering curator-led experiences,
                  expert lectures, and exclusive access that transform passive
                  supporters into active participants in the museum's mission.
                  Travel transforms engagement strategies while supporting both
                  educational and financial institutional goals.
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
            </div>

            {/* RIGHT — pill grid */}
            <div className="adg-c-why-right">
              <div className="adg-c-why-card">
                <span className="adg-c-why-card-label">
                  Well-Designed Travel Programs Help Museums:
                </span>
                <div className="adg-c-pill-grid">
                  {[
                    "Increase Member Engagement",
                    "Strengthen Donor Relationships",
                    "Create New Revenue Opportunities",
                    "Extend the Educational Mission",
                    "Build Community Among Supporters",
                    "Offer Exclusive Experiences",
                    "Increase Member Retention",
                    "Enhance Institutional Visibility",
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

      {/* ══ THE GROWING DEMAND FOR EDUCATIONAL TRAVEL ════════════════════ */}
      <section
        className="ugt-components-section"
        id="ugt-components"
        style={{ backgroundColor: "var(--bg-white)" }}
      >
        <div className="Asc-container">
          <div className="ugt-components-header">
            <h2 className="adg-c-h2">
              The Growing Demand for <br /> Educational Travel
            </h2>
            <div className="adg-c-accent-line"></div>
          </div>

          <div className="ugt-components-list">
            <div className="ugt-component-row">
              {/* LEFT IMAGE */}
              <div className="ugt-component-image-wrapper">
                <div className="ugt-component-image-container">
                  <img
                    // src={VikingExp1}
                    alt="Museum supporters participating in immersive, expert-led educational travel experiences"
                    className="ugt-component-image"
                  />
                </div>
              </div>

              {/* RIGHT CONTENT */}
              <div className="ugt-component-content">
                <p className="ugt-component-text">
                  Modern travelers increasingly seek experiences that prioritize depth and intellectual engagement over superficial sightseeing. 
                </p>
                <p className="ugt-component-text">
                  Museum supporters are often lifelong learners who appreciate meaningful travel experiences rather than traditional tourism. They want context, expert insight, and deeper access to the destinations they visit—meaning museum-sponsored travel programs are uniquely positioned to meet these expectations.
                </p>

                <div className="ugt-questions-box">
                  <span className="ugt-questions-title">
                    Modern Travelers Seek Experiences That Are:
                  </span>
                  <ul className="ugt-questions-list">
                    {[
                      "Educational",
                      "Authentic",
                      "Immersive",
                      "Culturally Enriching",
                      "Expert-Led",
                    ].map((item, idx) => (
                      <li key={idx} className="ugt-question-item">
                        <Check size={16} className="ugt-question-icon" />
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

      {/* ══ TYPES OF MUSEUM TRAVEL PROGRAMS — 4-CARD GRID ═══════════════════ */}
      <section className="adg-c-section adg-c-bg-soft" id="adg-museum-programs">
        <div className="adg-c-container">
          <div className="adg-c-section-header">
            <span className="adg-c-eyebrow">Museum Travel Experiences</span>
            <h2 className="adg-c-h2">
              Popular Types of Museum Travel Programs
            </h2>
            <div className="adg-c-accent-line"></div>
            <p className="Asc-section-intro">
              Museums can offer a wide variety of travel experiences based on
              their mission, collection focus, and audience. Successful programs
              are designed with specific participant interests and engagement
              goals in mind.
            </p>
          </div>

          <div className="adg-c-venues-grid1">
            {[
              {
                id: 1,
                eyebrow: "Art-Focused Travel",
                name: "Art Museum Travel Programs",
                highlight:
                  "Art museums frequently organize trips to Florence, Paris, Rome, Amsterdam, Madrid, and London — visiting world-famous museums, galleries, and cultural landmarks.",
                items: [
                  "Museum & Gallery Tours",
                  "Private Collection Access",
                  "Curator-Led Experiences",
                  "Art Historical Sites",
                  "Cultural Landmark Visits",
                ],
                callout:
                  "Art-focused travel programs bring collections to life — participants experience firsthand the works and cultural contexts their museum celebrates and studies.",
              },
              {
                id: 2,
                eyebrow: "History & Heritage Travel",
                name: "History & Heritage Programs",
                highlight:
                  "History museums create journeys focused on ancient civilizations, world heritage sites, historic cities, and archaeological discoveries.",
                items: [
                  "Ancient Civilization Sites",
                  "World Heritage Destinations",
                  "Historic City Exploration",
                  "Archaeological Site Visits",
                  "Cultural Landmark Tours",
                ],
                callout:
                  "History and heritage travel brings historical narratives to life through direct experience — transforming how participants understand and connect with museum collections.",
              },
              {
                id: 3,
                eyebrow: "Science & Natural History",
                name: "Science & Natural History Programs",
                highlight:
                  "Science-focused museums organize programs featuring wildlife encounters, conservation experiences, geological sites, national parks, and scientific expeditions.",
                items: [
                  "Wildlife & Conservation Experiences",
                  "Geological & Natural History Sites",
                  "National Park Explorations",
                  "Scientific Expeditions",
                  "Expert-Led Field Programs",
                ],
                callout:
                  "Travel becomes a powerful educational extension of science museum programming — creating immersive field experiences that bring collections and exhibitions to life.",
              },
              {
                id: 4,
                eyebrow: "Donor & Member Exclusives",
                name: "Exclusive Member & Donor Travel",
                highlight:
                  "Exclusive journeys designed for major donors, patrons, board members, and leadership circles provide opportunities for deeper engagement.",
                items: [
                  "Private Receptions & VIP Access",
                  "Behind-the-Scenes Experiences",
                  "Priority Member Booking",
                  "Member-Only Departures",
                  "Special Curator Participation",
                ],
                callout:
                  "Exclusive travel opportunities serve as powerful stewardship tools — creating memorable shared experiences that deepen institutional relationships and long-term support.",
              },
            ].map((venue, i) => (
              <div
                key={venue.id}
                className={`adg-c-venue-card adg-c-venue-${i + 1}`}
              >
                <div className="adg-c-venue-top">
                  <span className="adg-c-venue-eyebrow">{venue.eyebrow}</span>
                  <h3 className="adg-c-venue-name">{venue.name}</h3>
                  <p className="adg-c-venue-highlight">{venue.highlight}</p>
                </div>
                <ul className="adg-c-venue-list">
                  {venue.items.map((item, j) => (
                    <li key={j}>
                      <span className="adg-c-venue-dot"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="adg-c-venue-callout">
                  <span className="adg-c-venue-callout-bar"></span>
                  <p>{venue.callout}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ BEST DESTINATIONS FOR MUSEUM TRAVEL ══════════════════════════════ */}
      <section className="luc-destinations-section" id="luc-destinations">
        <div className="luc-destinations-container">
          <div className="luc-destinations-header">
            <h2 className="luc-destinations-title">
              Best Destinations for Museum Travel Programs
            </h2>
            <div className="adg-c-accent-line"></div>
            <p className="luc-destinations-intro">
              From European river cruises and Mediterranean cultural voyages to
              transformational expedition journeys and immersive cultural land
              programs — these destinations provide exceptional opportunities
              for museum member engagement, educational enrichment, and
              meaningful community building.
            </p>
          </div>

          {/* Layout */}
          <div className="luc-dest-layout">
            {/* Sidebar nav */}
            <nav className="luc-dest-nav">
              {museumTravelDestinations.map((item) => {
                const NavIcon = item.icon;
                const isActive = activeDest === item.id;
                return (
                  <button
                    key={item.id}
                    className={`luc-dest-nav-btn ${
                      isActive ? "luc-dest-nav-btn--active" : ""
                    }`}
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

      {/* ══ BENEFITS OF TRAVEL PROGRAMS FOR MUSEUM MEMBERS ══════════════════════════════ */}
      <section
        className="Leg-section"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="Leg-container">
          {/* Header */}
          <div className="Leg-header">
            <h2 className="Leg-title">
              Benefits of Travel Programs for Museum Members
            </h2>

            <div className="adg-c-accent-line"></div>

            <p className="Leg-subtitle">
              Travel programs provide significant value to museum audiences,
              extending learning beyond gallery walls.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="Leg-grid">
            {[
              {
                id: 1,
                accent: "blue",
                icon: Users,
                title: "Deeper Cultural Understanding",
                description:
                  "Travel allows participants to experience art, history, architecture, and culture in their original settings, deeply contextualizing global human heritage.",
                pills: [
                  "Historic Cities",
                  "Archaeological Sites",
                  "Renowned Museums",
                  "Local Traditions",
                  "Cultural Experts",
                ],
                highlight:
                  "These experiences enhance appreciation for museum collections and exhibitions.",
              },
              {
                id: 2,
                accent: "gold",
                icon: Compass,
                title: "Exclusive Access Opportunities",
                description:
                  "Museum travel programs elevate standard travel through unique access, VIP coordination, and institutional prestige.",
                pills: [
                  "Private Tours",
                  "Behind-the-Scenes",
                  "Curator-Led Details",
                  "Special Events",
                  "Expert Lectures",
                ],
                highlight:
                  "These opportunities create memorable experiences unavailable through standard tourism.",
              },
              {
                id: 3,
                accent: "green",
                icon: Waves,
                title: "Community Building",
                description:
                  "Travel creates deep personal connections among participants, uniting like-minded life-long learners over shared passions.",
                pills: ["Art", "History", "Culture", "Science", "Education"],
                highlight:
                  "These relationships strengthen the museum community long after the trip concludes.",
              },
            ].map((card) => {
              const Icon = card.icon;
              const isHovered = hovered === card.id;

              return (
                <div
                  key={card.id}
                  className={`Leg-card Leg-card--${card.accent} ${
                    isHovered ? "Leg-card--hovered" : ""
                  }`}
                  onMouseEnter={() => setHovered(card.id)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <div
                    className={`Leg-card-top-bar Leg-bar--${card.accent}`}
                  ></div>

                  <div
                    className={`Leg-card-icon-wrap Leg-icon--${card.accent}`}
                  >
                    <Icon size={22} strokeWidth={1.6} />
                  </div>

                  <h3 className="Leg-card-title">{card.title}</h3>

                  <p className="Leg-card-desc">{card.description}</p>

                  <div className="Leg-divider"></div>

                  <div className="Leg-pill-list">
                    {card.pills.map((pill) => (
                      <span
                        key={pill}
                        className={`Leg-pill Leg-pill--${card.accent}`}
                      >
                        {pill}
                      </span>
                    ))}
                  </div>

                  <div
                    className={`Leg-highlight Leg-highlight--${card.accent}`}
                  >
                    <Check
                      size={13}
                      strokeWidth={2.5}
                      className="Leg-check-icon"
                    />
                    <span>{card.highlight}</span>
                  </div>
                </div>
              );
            })}
          </div>

          <div style={{ marginTop: "25px" }}>
            <p
              className="Asc-card-subtext"
              style={{ color: "var(--navy)", textAlign: "center" }}
            >
              By offering immersive context, institutional prestige, and a
              deeply interactive social environment, experiential travel
              programs serve as an incredible accelerant for institutional
              loyalty and long-term patron retention.
            </p>
          </div>
        </div>
      </section>

      {/* ══ WHY HIGH-QUALITY TRAVEL MATTERS ══════════════════════════════════ */}
      <section className="luc-why-section" id="luc-why">
        <div className="luc-why-container">
          {/* LEFT — stacked images */}
          <div className="luc-why-images">
            <div className="luc-why-img-main-wrap">
              <img
                alt="Museum group travel high quality cultural experience"
                className="luc-why-img-main"
              />
              <div className="luc-why-img-overlay"></div>
            </div>
            <div className="luc-why-img-accent-wrap">
              <img
                alt="Premium museum travel cultural immersion experience"
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
              What Makes a Successful Museum Travel Program?
            </h2>
            <div className="aac-accent-line aac-accent-white"></div>
            <p className="luc-why-intro">
              Museum audiences expect premium service and well-organized
              experiences.
            </p>
            <p className="luc-why-subintro">
              The most successful museum travel programs share several
              characteristics:
            </p>

            <div className="luc-why-features">
              <div className="luc-why-feature">
                <div className="luc-why-feature-num">01</div>
                <div className="luc-why-feature-body">
                  <h3 className="luc-why-feature-title">Mission Alignment</h3>
                  <p className="luc-why-feature-desc">
                    Travel experiences should reflect the museum's educational
                    purpose — bringing collection themes, exhibitions, and
                    institutional values to life in the field.
                  </p>
                </div>
              </div>

              <div className="luc-why-feature">
                <div className="luc-why-feature-num">02</div>
                <div className="luc-why-feature-body">
                  <h3 className="luc-why-feature-title">Expert Leadership</h3>
                  <p className="luc-why-feature-desc">
                    Participants value access to knowledgeable guides, curators,
                    lecturers, and subject-matter experts who deepen the
                    educational dimension of every experience.
                  </p>
                </div>
              </div>

              <div className="luc-why-feature">
                <div className="luc-why-feature-num">03</div>
                <div className="luc-why-feature-body">
                  <h3 className="luc-why-feature-title">
                    Meaningful Cultural Experiences
                  </h3>
                  <p className="luc-why-feature-desc">
                    Travel should go beyond sightseeing to provide deeper
                    understanding and engagement — private tours, behind-the-
                    scenes access, and exclusive experiences unavailable through
                    standard tourism.
                  </p>
                </div>
              </div>

              <div className="luc-why-feature">
                <div className="luc-why-feature-num">04</div>
                <div className="luc-why-feature-body">
                  <h3 className="luc-why-feature-title">
                    High-Quality Travel Partners
                  </h3>
                  <p className="luc-why-feature-desc">
                    Experienced travel providers ensure seamless logistics and
                    exceptional guest experiences — allowing museum staff to
                    focus on mission-driven programming.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY MUSEUMS PARTNER WITH PROFESSIONAL TRAVEL COMPANIES */}
      <section
        className="wnf-section wnf-bg-white"
        id="wnf-museum-partnerships"
      >
        <div className="wnf-container">
          <div className="wnf-section-header">
            <h2 className="wnf-h2">
              Why Museums Partner with <br /> Professional Travel Companies
            </h2>
            <div className="wnf-accent-line"></div>
          </div>

          <div className="wnf-split">
            {/* Left Column: Premium Dual Image Stack */}
            <div className="wnf-image-column">
              <div className="wnf-image-stack">
                <div className="wnf-img-frame wnf-frame-primary">
                  <img
                    // src={HeroImage3}
                    alt="Museum travel planning and corporate logistics strategy"
                    className="wnf-photo"
                  />
                </div>
                <div className="wnf-img-frame wnf-frame-secondary">
                  <img
                    // src={Experience}
                    alt="Curators and museum members enjoying a high-quality educational travel program"
                    className="wnf-photo"
                  />
                </div>
              </div>
            </div>

            {/* Right Column: Structured Content Blocks */}
            <div className="wnf-content-column">
              <div className="wnf-block">
                <p className="wnf-lead-text">
                  Managing travel programs internally can be complex.
                  Professional travel partners handle:
                </p>
                <ul className="wnf-feature-list">
                  {[
                    "Cruise Selection",
                    "Itinerary Planning",
                    "Vendor Coordination",
                    "Guest Registration",
                    "Travel Logistics",
                    "Marketing Support",
                    "Onsite Management",
                    "Risk Management",
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
                  This allows museum staff to focus on mission-driven
                  programming while ensuring a high-quality travel experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ WHO ARE MUSEUM TRAVEL PROGRAMS BEST FOR? ═════════════════════════ */}
      <section className="Asc-section Asc-bg-soft" id="Asc-who">
        <div className="Asc-container">
          <div className="Asc-section-header">
            <h2 className="Asc-h2">Who Are Museum Travel Programs Best For?</h2>
            <div className="Asc-accent-line"></div>
          </div>

          <div className="Asc-who-grid">
            <div className="Asc-who-card Asc-who-yes">
              <h3 className="Asc-who-title">Best For</h3>
              <ul className="Asc-who-list">
                {[
                  "Museum Members & Supporters",
                  "Donors & Patrons",
                  "Museum Leadership Circles & Boards",
                  "Lifelong Learners & Cultural Enthusiasts",
                  "Retirees with Interest in Art, History & Culture",
                  "Educational Institutions with Museum Partnerships",
                  "Museum Foundations & Development Teams",
                ].map((item, i) => (
                  <li key={i}>
                    <Check size={16} className="Asc-icon-green" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="Asc-who-card Asc-who-no">
              <h3 className="Asc-who-title">May Not Be Best For</h3>
              <ul className="Asc-who-list">
                {[
                  "Institutions seeking purely transactional programs",
                  "Budget-focused travel without educational components",
                  "Programs without community or mission-building objectives",
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

      {/* ══ WHY CULTURAL TRAVEL CONTINUES TO GROW ════════════════════════════════ */}
      <section className="adg-c-section adg-c-bg-white" id="adg-overview">
        <div className="adg-c-container">
          <div className="adg-c-section-header">
            <span className="adg-c-eyebrow">
              Growing Interest in Educational Travel
            </span>
            <h2 className="adg-c-h2">Why Cultural Travel Continues to Grow</h2>
            <div className="adg-c-accent-line"></div>
          </div>

          <div className="adg-c-overview-layout">
            {/* LEFT — Benefits List */}
            <div className="adg-c-overview-icons">
              {[
                "Firsthand Experiences",
                "Global Perspectives",
                "Deeper Cultural Understanding",
                "Personal Enrichment",
                "Lifelong Memories",
              ].map((label, i) => (
                <div key={i} className="adg-c-overview-item">
                  <span className="adg-c-overview-icon">
                    <Check size={16} strokeWidth={2.5} />
                  </span>
                  <span className="adg-c-overview-label">{label}</span>
                </div>
              ))}
            </div>

            {/* RIGHT — Callout Card + Image */}
            <div className="adg-c-overview-right">
              <div className="adg-c-overview-callout">
                <div className="adg-c-overview-callout-inner">
                  <Star size={28} className="adg-c-callout-star" />
                  <p className="adg-c-callout-text">
                    Travel has become one of the most powerful educational tools
                    available, allowing participants to connect directly with
                    cultures, history, art, and traditions in meaningful ways.
                  </p>
                </div>
              </div>

              <div className="adg-c-overview-image-wrap">
                <img
                  alt="Cultural travelers exploring historic destinations"
                  className="adg-c-overview-img"
                />
                <div className="adg-c-overview-img-overlay">
                  <span className="adg-c-overview-img-label">
                    Educational & Cultural Discovery
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ ANGELA HUGHES AUTHORITY BOX ══════════════════════════════════════ */}
      <section className="Adg-expert-section" id="Asc-expert-insight">
        <div className="Asc-container">
          <div className="Adg-expert-heading">
            <span className="Adg-expert-eyebrow">
              Museum Travel Program Leadership
            </span>
            <h2 className="Adg-expert-title">
              Angela Hughes: A Trusted Advisor for Museum Travel Programs
            </h2>
            <div className="Adg-expert-divider"></div>
          </div>

          <div className="Adg-expert-grid">
            {/* LEFT SIDE */}
            <div className="Adg-expert-image-col">
              <div className="Adg-expert-portrait-wrap">
                <img
                  src={AboutImage}
                  alt="Angela Hughes - Museum Travel Program Expert"
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
              <div className="Adg-expert-quote-box">
                <div className="Adg-expert-quote-icon">
                  <Quote size={36} />
                </div>
                <blockquote className="Adg-expert-quote-text">
                  Museums benefit from Angela Hughes' decades of global travel
                  expertise and deep knowledge of educational and cultural group
                  travel.
                </blockquote>
              </div>

              <div className="Adg-expert-credentials-box">
                <h4 className="Adg-expert-credentials-title">
                  <Award size={16} />
                  Her Credentials Include
                </h4>
                <div className="Adg-expert-credentials-grid">
                  {[
                    "More than 40 years in travel",
                    "Travel to over 121 countries",
                    "Founder of Luxury Travel University",
                    "Travel Leaders Network Advisory Board Member",
                    "Luxury Travel Influencer of the Year",
                    "International travel educator and speaker",
                    "Weekly travel columnist",
                    "Recognized among the travel industry's most influential professionals",
                  ].map((item, i) => (
                    <div className="Adg-expert-list-item" key={i}>
                      <span className="Adg-expert-list-icon">
                        <Star size={16} />
                      </span>
                      <span className="Adg-expert-list-label">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className="Adg-expert-quote-box"
                style={{ marginTop: "24px" }}
              >
                <blockquote className="Adg-expert-quote-text">
                  Her leadership helps museums confidently develop travel
                  programs that reflect institutional excellence, extend their
                  educational mission, and create lasting value for members,
                  donors, and supporters.
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ FAQ ═══════════════════════════════════════════════════════════════ */}
      <section className="Asc-section Asc-bg-white" id="Asc-faq">
        <div className="Asc-container">
          <div className="Asc-section-header">
            <h2 className="Asc-h2">Frequently Asked Questions</h2>
            <div className="Asc-accent-line"></div>
            <p className="Asc-faq-intro">
              Everything you need to know about museum travel programs.
            </p>
          </div>
          <FAQ />
        </div>
      </section>

      {/* ══ CTA ═══════════════════════════════════════════════════════════════ */}
      <section className="Asc-help-section">
        <div className="Asc-help-bg-wrap">
          <img
            alt="Museum travel program cultural experience"
            className="Asc-help-bg-img"
          />
          <div className="Asc-help-overlay"></div>
        </div>

        <div className="Asc-container">
          <div className="Asc-help-card">
            <div className="Asc-help-content">
              <div className="Asc-help-header">
                <span className="Asc-help-eyebrow">Museum Travel Programs</span>
                <h2 className="Asc-help-h2">
                  Extend Your Museum's Mission Through <br /> Extraordinary
                  Travel Experiences
                </h2>
                <div className="Asc-help-accent"></div>
              </div>

              <div className="Asc-help-grid">
                <div className="Asc-help-info">
                  <p className="Asc-help-intro">
                    Museum travel programs allow institutions to extend their
                    mission far beyond their physical walls.
                  </p>
                  <p className="Asc-help-intro">
                    By combining education, cultural immersion, and expertly
                    curated travel experiences, museums can create meaningful
                    connections with members, donors, and supporters while
                    strengthening engagement and advancing organizational goals.
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
                      Whether exploring Europe's great museums, sailing along
                      historic rivers, or discovering ancient civilizations,
                      these journeys transform learning into lived experience.
                      <br />
                      <br />
                      With Angela Hughes' global expertise and Trips &amp; Ships
                      Luxury Travel's proven planning process, your museum can
                      create travel programs that inspire engagement, strengthen
                      community, and support long-term institutional success.
                      <br />
                      <br />
                      <strong>
                        Because some lessons are best learned not by viewing
                        history from a distance — but by standing where it
                        happened.
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
                      Start Planning Your Museum Travel Program
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>

                <div className="Asc-help-list-box">
                  <h3 className="Asc-help-list-title">
                    Benefits of Museum Travel Programs:
                  </h3>
                  <ul className="Asc-help-bullets">
                    {[
                      "Increased member engagement and retention",
                      "Stronger donor and patron relationships",
                      "Educational mission extended beyond the museum",
                      "Exclusive experiences for members and supporters",
                      "Community building among museum participants",
                      "New revenue and membership growth opportunities",
                      "Long-term institutional loyalty and affinity",
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
                    Contact Trips &amp; Ships Luxury Travel today to begin
                    designing your custom museum travel program.
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

export default TravelProgramsForMuseums;
