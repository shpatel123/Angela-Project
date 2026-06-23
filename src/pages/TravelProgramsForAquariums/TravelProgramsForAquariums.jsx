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
  Anchor,
  Ship,
  Waves,
} from "lucide-react";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela2.jpeg";

import { Helmet } from "react-helmet-async";

const aquariumTravelDestinations = [
  {
    id: "alaska-cruises",
    title: "Alaska Wildlife Cruises",
    badge: "Alaska Cruises",
    icon: Waves,
    desc: "Alaska offers extraordinary opportunities for marine wildlife encounters, serving as an exceptional living laboratory for aquarium travelers.",
    columns: [
      {
        label: "Highlights Include",
        items: [
          "Humpback whales",
          "Orcas",
          "Sea otters",
          "Puffins",
          "Glaciers",
          "Coastal ecosystems",
        ],
      },
    ],
    themeLabel: "The Inside Passage Advantage",
    themeText: "Small ship cruises provide close access to nature and wildlife that larger ships simply cannot reach.",
  },
  {
    id: "antarctica-expeditions",
    title: "Antarctica Expeditions",
    badge: "Antarctica",
    icon: Ship,
    desc: "Antarctica is one of the most inspiring destinations for conservation-minded travelers, showcasing unmatched polar landscapes and marine life.",
    columns: [
      {
        label: "Highlights Include",
        items: [
          "Penguins",
          "Seals",
          "Whales",
          "Icebergs",
          "Polar ecosystems",
          "Scientific research stations",
        ],
      },
    ],
    themeLabel: "Polar Deep Dive",
    themeText: "These expeditions offer a deeper understanding of one of the world's most fragile environments.",
  },
  {
    id: "galapagos-islands",
    title: "Galápagos Islands",
    badge: "Galápagos",
    icon: Compass,
    desc: "The Galápagos remains one of the world's most iconic wildlife destinations, famous for its fearless animal populations and evolutionary history.",
    columns: [
      {
        label: "Highlights Include",
        items: [
          "Marine iguanas",
          "Sea lions",
          "Giant tortoises",
          "Unique biodiversity",
          "Conservation success stories",
        ],
      },
    ],
    themeLabel: "Living Evolution",
    themeText: "Educational travel programs here maximize impact by including expert naturalist guides for every excursion.",
  },
  {
    id: "baja-expeditions",
    title: "Baja California Whale Expeditions",
    badge: "Baja Whales",
    icon: Anchor,
    desc: "Mexico's Baja Peninsula is globally renowned for intimate whale encounters, making it an ideal destination for passionate marine advocates.",
    columns: [
      {
        label: "Highlights Include",
        items: [
          "Gray whales",
          "Dolphin sightings",
          "Marine sanctuaries",
          "Coastal ecosystems",
        ],
      },
    ],
    themeLabel: "Up-Close Encounters",
    themeText: "These targeted, highly interactive marine sanctuary experiences are exceptionally popular with aquarium audiences.",
  },
  {
    id: "caribbean-exploration",
    title: "Caribbean & Coral Reef Exploration",
    badge: "Reef Exploration",
    icon: MapPin,
    desc: "Coral reef-focused programs help travelers directly observe marine biodiversity, highlighting critical reef wellness initiatives.",
    columns: [
      {
        label: "Highlights Include",
        items: [
          "Reef ecosystems",
          "Tropical fish",
          "Marine research",
          "Sustainable tourism initiatives",
        ],
      },
    ],
    themeLabel: "Preserving Biodiversity",
    themeText: "Participants gain direct, unparalleled insight into the crucial importance of global reef preservation.",
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
        "Luxury travel agency specializing in aquarium travel programs, educational group travel, conservation travel experiences, expedition cruises, and premium group travel planning.",
    },
    {
      "@type": "TravelAgency",
      "@id": "https://www.tripsandships.com/#travelagency",
      name: "Trips & Ships Luxury Travel",
      url: "https://www.tripsandships.com",
      description:
        "Luxury travel experts helping aquariums, conservation organizations, and educational institutions create exceptional group travel programs for members, donors, and supporters.",
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
      "@id": "https://www.tripsandships.com/travel-programs-for-aquariums",
      url: "https://www.tripsandships.com/travel-programs-for-aquariums",
      name: "Travel Programs for Aquariums | Educational Ocean & Wildlife Travel Experiences",
      description:
        "Discover how aquarium travel programs engage members, donors, and supporters through ocean-focused expeditions, wildlife cruises, conservation travel, and educational journeys around the world.",
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.tripsandships.com/travel-programs-for-aquariums#breadcrumb",
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
          name: "Travel Programs for Aquariums",
          item: "https://www.tripsandships.com/travel-programs-for-aquariums",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id":
        "https://www.tripsandships.com/travel-programs-for-aquariums#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What are aquarium travel programs?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Aquarium travel programs are educational travel experiences designed for members, donors, supporters, and wildlife enthusiasts.",
          },
        },
        {
          "@type": "Question",
          name: "Why do aquariums offer travel programs?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Travel helps aquariums extend their educational mission, engage supporters, strengthen donor relationships, and generate additional revenue.",
          },
        },
        {
          "@type": "Question",
          name: "What types of trips do aquariums offer?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Common options include expedition cruises, wildlife cruises, small ship voyages, conservation tours, and educational group travel.",
          },
        },
        {
          "@type": "Question",
          name: "Are aquarium travel programs only for donors?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Many programs are open to members, supporters, and the public, while some departures may be exclusive to donor groups.",
          },
        },
        {
          "@type": "Question",
          name: "Why are expedition cruises popular with aquarium groups?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Expedition cruises provide wildlife encounters, expert-led education, and access to remote marine environments.",
          },
        },
        {
          "@type": "Question",
          name: "Can marine scientists participate in these trips?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Many programs include marine biologists, conservation experts, and naturalists as hosts or lecturers.",
          },
        },
        {
          "@type": "Question",
          name: "Do travel programs support aquarium fundraising efforts?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "They can strengthen donor engagement, increase membership retention, and create additional revenue opportunities.",
          },
        },
        {
          "@type": "Question",
          name: "What is affinity travel for aquariums?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Affinity travel refers to group travel organized around shared interests — such as ocean wildlife, conservation, and marine science — the natural audience for aquarium travel programs.",
          },
        },
        {
          "@type": "Question",
          name: "Are aquarium travel programs educational?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Most programs feature expert guides, naturalists, scientists, and conservation-focused experiences.",
          },
        },
        {
          "@type": "Question",
          name: "How do aquariums manage travel programs?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Many aquariums partner with specialized travel companies that handle logistics, operations, and travel planning, allowing aquarium staff to focus on educational content and participant engagement.",
          },
        },
        {
          "@type": "Question",
          name: "What destinations are popular for aquarium travel?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Popular destinations include Alaska, Antarctica, the Galápagos Islands, Baja California, coral reef regions, and marine wildlife habitats worldwide.",
          },
        },
        {
          "@type": "Question",
          name: "How can aquarium travel programs strengthen member retention?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Travel programs can serve as compelling membership benefits — offering priority registration, member-only departures, special pricing, and exclusive wildlife experiences that increase member loyalty.",
          },
        },
        {
          "@type": "Question",
          name: "Who typically joins aquarium travel programs?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Typical participants include aquarium members, donors, wildlife enthusiasts, photographers, conservation supporters, retirees, and lifelong learners.",
          },
        },
        {
          "@type": "Question",
          name: "What makes a successful aquarium travel program?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The most effective programs combine mission alignment, educational value, conservation awareness, high-quality travel experiences, expert leadership, and exceptional service.",
          },
        },
        {
          "@type": "Question",
          name: "Why partner with a professional travel company for aquarium programs?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Professional travel partners handle itinerary development, cruise selection, travel logistics, guest registration, marketing support, risk management, and onsite coordination — allowing aquarium staff to focus on educational content and participant engagement.",
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
      q: "What are aquarium travel programs?",
      a: "Aquarium travel programs are educational travel experiences designed for members, donors, supporters, and wildlife enthusiasts.",
    },
    {
      q: "Why do aquariums offer travel programs?",
      a: "Travel helps aquariums extend their educational mission, engage supporters, strengthen donor relationships, and generate additional revenue.",
    },
    {
      q: "What types of trips do aquariums offer?",
      a: "Common options include expedition cruises, wildlife cruises, small ship voyages, conservation tours, and educational group travel.",
    },
    {
      q: "Are aquarium travel programs only for donors?",
      a: "No. Many programs are open to members, supporters, and the public, while some departures may be exclusive to donor groups.",
    },
    {
      q: "Why are expedition cruises popular with aquarium groups?",
      a: "Expedition cruises provide wildlife encounters, expert-led education, and access to remote marine environments.",
    },
    {
      q: "Can marine scientists participate in these trips?",
      a: "Yes. Many programs include marine biologists, conservation experts, and naturalists as hosts or lecturers.",
    },
    {
      q: "Do travel programs support aquarium fundraising efforts?",
      a: "They can strengthen donor engagement, increase membership retention, and create additional revenue opportunities.",
    },
    {
      q: "What is affinity travel for aquariums?",
      a: "Affinity travel refers to group travel organized around shared interests — such as ocean wildlife, conservation, and marine science — the natural audience for aquarium travel programs.",
    },
    {
      q: "Are aquarium travel programs educational?",
      a: "Yes. Most programs feature expert guides, naturalists, scientists, and conservation-focused experiences.",
    },
    {
      q: "How do aquariums manage travel programs?",
      a: "Many aquariums partner with specialized travel companies that handle logistics, operations, and travel planning, allowing aquarium staff to focus on educational content and participant engagement.",
    },
    {
      q: "What destinations are popular for aquarium travel?",
      a: "Popular destinations include Alaska, Antarctica, the Galápagos Islands, Baja California, coral reef regions, and marine wildlife habitats worldwide.",
    },
    {
      q: "How can aquarium travel programs strengthen member retention?",
      a: "Travel programs can serve as compelling membership benefits — offering priority registration, member-only departures, special pricing, and exclusive wildlife experiences that increase member loyalty.",
    },
    {
      q: "Who typically joins aquarium travel programs?",
      a: "Typical participants include aquarium members, donors, wildlife enthusiasts, photographers, conservation supporters, retirees, and lifelong learners.",
    },
    {
      q: "What makes a successful aquarium travel program?",
      a: "The most effective programs combine mission alignment, educational value, conservation awareness, high-quality travel experiences, expert leadership, and exceptional service.",
    },
    {
      q: "Why partner with a professional travel company for aquarium programs?",
      a: "Professional travel partners handle itinerary development, cruise selection, travel logistics, guest registration, marketing support, risk management, and onsite coordination — allowing aquarium staff to focus on educational content and participant engagement.",
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

const TravelProgramsForAquariums = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [readMore, setReadMore] = useState(false);
  const images = [];
  const [activeDest, setActiveDest] = useState("expedition-cruises");
  const [hovered, setHovered] = useState(null);

  const currentDest =
    aquariumTravelDestinations.find((d) => d.id === activeDest) ||
    aquariumTravelDestinations[0];
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
          Travel Programs for Aquariums | Educational Ocean & Wildlife Travel
          Experiences
        </title>
        <meta name="title" content="Travel Programs for Aquariums" />
        <meta
          name="description"
          content="Discover how aquarium travel programs engage members, donors, and supporters through ocean-focused expeditions, wildlife cruises, conservation travel, and educational journeys around the world."
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
            Travel Programs for Aquariums: Bringing Ocean Discovery Beyond the
            Aquarium
          </h1>
          <p>
            Aquariums inspire curiosity about the oceans, marine wildlife,
            conservation, and the interconnected ecosystems that sustain life on
            Earth. For many aquarium members and supporters, that curiosity
            extends far beyond exhibits and educational programs.
          </p>
          {readMore && (
            <>
              <p>
                They want to experience marine environments firsthand. Travel
                programs give aquariums a powerful opportunity to extend their
                mission by connecting members, donors, patrons, and supporters
                directly with the oceans, wildlife, and conservation efforts
                they care about most.
              </p>
              <p>
                From polar expeditions and whale-watching adventures to tropical
                reef explorations and small-ship voyages, aquarium travel
                programs transform education into unforgettable real-world
                experiences.
              </p>
              <p>
                At Trips &amp; Ships Luxury Travel, we help aquariums design
                exceptional travel experiences that align with conservation
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

      {/* ══ WHY AQUARIUMS ARE INVESTING IN TRAVEL PROGRAMS ══════════════════ */}
      <section className="adg-c-section adg-c-bg-dark" id="adg-why-aquariums">
        <div className="adg-c-container">
          <div className="adg-c-why-grid">
            {/* LEFT — text */}
            <div className="adg-c-why-left">
              <span className="adg-c-eyebrow adg-c-eyebrow-light">
                Aquarium Travel Program Benefits
              </span>
              <h2 className="adg-c-h2 adg-c-h2-light">
                Why Aquariums Are Expanding Into Travel Programs
              </h2>
              <div className="aac-accent-line aac-accent-white"></div>
              <p className="adg-c-lead adg-c-lead-light">
                Travel has become one of the most effective ways for aquariums
                to strengthen relationships with their communities.
              </p>
              <p className="adg-c-body adg-c-body-light">
                Modern aquarium audiences increasingly seek immersive
                experiences rather than passive observation. Aquarium supporters
                are often conservation-minded lifelong learners who want
                firsthand engagement with the marine environments they care
                about — meaning aquarium-sponsored travel programs are uniquely
                positioned to meet these expectations.
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
                  Aquarium-sponsored travel programs are uniquely positioned to
                  meet these expectations — offering naturalist-led experiences,
                  expert conservation talks, and exclusive wildlife access that
                  transform passive supporters into active participants in the
                  aquarium's mission. Travel transforms engagement strategies
                  while supporting both educational and financial institutional
                  goals.
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
                  Well-Designed Travel Programs Help Aquariums:
                </span>
                <div className="adg-c-pill-grid">
                  {[
                    "Deepen Member Engagement",
                    "Strengthen Donor Relationships",
                    "Support Conservation Education",
                    "Generate Additional Revenue",
                    "Build Stronger Supporter Communities",
                    "Create Lifelong Learning Opportunities",
                    "Expand Institutional Visibility",
                    "Inspire Environmental Stewardship",
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

      {/* ══ THE GROWING DEMAND FOR CONSERVATION TRAVEL ══════════════════════ */}
      <section
        className="ugt-components-section"
        id="ugt-components"
        style={{ backgroundColor: "var(--bg-white)" }}
      >
        <div className="Asc-container">
          <div className="ugt-components-header">
            <h2 className="adg-c-h2">
              The Connection Between <br /> Travel and Conservation
            </h2>
            <div className="adg-c-accent-line"></div>
          </div>

          <div className="ugt-components-list">
            <div className="ugt-component-row">
              {/* LEFT IMAGE */}
              <div className="ugt-component-image-wrapper">
                <div className="ugt-component-image-container">
                  <img
                    alt="Aquarium supporters experiencing marine wildlife and ocean conservation firsthand"
                    className="ugt-component-image"
                  />
                </div>
              </div>

              {/* RIGHT CONTENT */}
              <div className="ugt-component-content">
                <p className="ugt-component-text">
                  Seeing marine ecosystems firsthand often creates a deeper
                  appreciation for ocean conservation than any exhibit can
                  provide.
                </p>
                <p className="ugt-component-text">
                  Aquarium supporters are often conservation-minded travelers
                  who appreciate meaningful experiences over standard tourism.
                  They want scientific context, expert insight, and direct
                  engagement with the marine environments they care about —
                  meaning aquarium travel programs are uniquely positioned to
                  deliver transformational experiences.
                </p>

                <div className="ugt-questions-box">
                  <span className="ugt-questions-title">
                    Participants May Experience:
                  </span>
                  <ul className="ugt-questions-list">
                    {[
                      "Coral Reefs",
                      "Marine Sanctuaries",
                      "Polar Environments",
                      "Coastal Ecosystems",
                      "Wildlife Habitats",
                      "Scientific Research Programs",
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
{/* ══ TYPES OF AQUARIUM TRAVEL PROGRAMS — 4-CARD GRID ════════════════ */}
      <section
        className="adg-c-section adg-c-bg-soft"
        id="adg-aquarium-programs"
      >
        <div className="adg-c-container">
          <div className="adg-c-section-header">
            <h2 className="adg-c-h2">
              Popular Types of Aquarium Travel Programs
            </h2>
            <div className="adg-c-accent-line"></div>
            <p className="Asc-section-intro">
              Aquariums can offer a wide variety of travel experiences based on
              their mission, marine focus, and audience. Successful programs are
              designed with specific participant interests and conservation goals
              in mind.
            </p>
          </div>

          <div className="adg-c-venues-grid1">
            {[
              {
                id: 1,
                eyebrow: "Small Ship & Expedition Cruises",
                name: "Small Ship Cruises & Ocean Exploration",
                highlight:
                  "Small ship and expedition cruising aligns perfectly with aquarium missions, combining adventure, learning, and environmental awareness to provide an immersive and environmentally responsible travel experience.",
                items: [
                  "Access to Remote Destinations",
                  "Zodiac Excursions & Close Wildlife Viewing",
                  "Expert Naturalists & Onboard Marine Lectures",
                  "Impactful Photography Opportunities",
                  "Comfortable Accommodations & Camaraderie",
                ],
                callout:
                  "Smaller vessels offer deeper physical access to pristine ecosystems alongside robust educational programming, turning curious travelers into passionate ocean advocates.",
              },
              {
                id: 2,
                eyebrow: "Donor Engagement",
                name: "Donor Cultivation & Travel Programs",
                highlight:
                  "Travel is a highly effective, real-world donor engagement tool that deepens institutional relationships while directly highlighting your aquarium's localized mission and global conservation footprint.",
                items: [
                  "Major Donor Stewardship Journeys",
                  "Leadership Circle Custom Itineraries",
                  "Board Member & Patron Expeditions",
                  "Exclusive Behind-the-Scenes Access",
                  "Direct Conservation Project Briefings",
                ],
                callout:
                  "These highly targeted, high-touch experiences strengthen donor ties and create lifelong brand ambassadors by showing exactly where philanthropic impact meets the water.",
              },
              {
                id: 3,
                eyebrow: "Member Perks",
                name: "Educational Travel as a Member Benefit",
                highlight:
                  "High-quality travel programs elevate your entire membership value proposition, creating a highly attractive and visible incentive that drives both acquisition and long-term community retention.",
                items: [
                  "Priority Trip Registration Windows",
                  "Exclusive Member-Only Departures",
                  "Special Custom Pricing Tiers",
                  "Curated Curricular Core Experiences",
                  "Access to Premium Institutional Hosts",
                ],
                callout:
                  "Offering travel benefits transforms standard memberships from casual admission passes into interactive, lifelong gateways for global conservation community building.",
              },
              {
                id: 4,
                eyebrow: "Expert-Led Field Work",
                name: "Conservation & Expert-Led Experiences",
                highlight:
                  "Aquarium audiences deeply crave educational rigor and authenticity. Programs featuring field scientists change standard sightseeing into a substantive, lifelong learning experience.",
                items: [
                  "Marine Biologist & Scientist-Led Fieldwork",
                  "Visits to Protected Marine Areas (MPAs)",
                  "Hands-On Active Wildlife Research Projects",
                  "Local Conservation Group Collaboration",
                  "Aquarium Leadership & Curator Access",
                ],
                callout:
                  "Learning directly from conservation leaders, researchers, and wildlife specialists provides an insider perspective on global sustainability initiatives that cannot be duplicated.",
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

      {/* ══ BEST DESTINATIONS FOR AQUARIUM TRAVEL ════════════════════════════ */}
      <section className="luc-destinations-section" id="luc-destinations">
        <div className="luc-destinations-container">
          <div className="luc-destinations-header">
            <h2 className="luc-destinations-title">
              Best Destinations for Aquarium Travel Programs
            </h2>
            <div className="adg-c-accent-line"></div>
            <p className="luc-destinations-intro">
              From expedition cruises and small ship wildlife voyages to
              conservation-focused whale expeditions and coral reef explorations
              — these destinations provide exceptional opportunities for aquarium
              member engagement, educational enrichment, and meaningful
              community building.
            </p>
          </div>

          {/* Layout */}
          <div className="luc-dest-layout">
            {/* Sidebar nav */}
            <nav className="luc-dest-nav">
              {aquariumTravelDestinations.map((item) => {
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

      {/* ══ BENEFITS OF TRAVEL PROGRAMS FOR AQUARIUM MEMBERS ═══════════════ */}
      <section
        className="Leg-section"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="Leg-container">
          {/* Header */}
          <div className="Leg-header">
            <h2 className="Leg-title">
              Benefits of Travel Programs for Aquarium Members
            </h2>

            <div className="adg-c-accent-line"></div>

            <p className="Leg-subtitle">
              Travel programs provide significant value to aquarium audiences,
              extending conservation learning far beyond the aquarium walls.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="Leg-grid">
            {[
              {
                id: 1,
                accent: "blue",
                icon: Users,
                title: "Deeper Conservation Understanding",
                description:
                  "Travel allows participants to experience marine ecosystems, ocean wildlife, and conservation challenges firsthand — creating a richer understanding of the natural world than any exhibit can provide.",
                pills: [
                  "Marine Wildlife Encounters",
                  "Ocean Ecosystems",
                  "Conservation Areas",
                  "Scientific Research",
                  "Expert Naturalists",
                ],
                highlight:
                  "These experiences enhance appreciation for the aquarium's conservation mission and programming.",
              },
              {
                id: 2,
                accent: "gold",
                icon: Compass,
                title: "Exclusive Wildlife Access",
                description:
                  "Aquarium travel programs elevate standard wildlife travel through unique access, expert naturalist coordination, and institutional conservation partnerships.",
                pills: [
                  "Private Wildlife Encounters",
                  "Behind-the-Scenes Conservation",
                  "Expert-Led Lectures",
                  "Exclusive Landings",
                  "Scientific Programs",
                ],
                highlight:
                  "These opportunities create memorable experiences unavailable through standard wildlife tourism.",
              },
              {
                id: 3,
                accent: "green",
                icon: Waves,
                title: "Conservation Community Building",
                description:
                  "Travel creates deep personal connections among participants, uniting conservation-minded lifelong learners over shared passions for ocean life and environmental stewardship.",
                pills: [
                  "Marine Wildlife",
                  "Conservation",
                  "Ocean Science",
                  "Ecology",
                  "Exploration",
                ],
                highlight:
                  "These relationships strengthen the aquarium community long after the expedition concludes.",
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
              By offering immersive conservation context, wildlife encounters,
              and a deeply interactive community environment, experiential travel
              programs serve as a powerful accelerant for institutional loyalty
              and long-term patron retention.
            </p>
          </div>
        </div>
      </section>

      {/* ══ WHAT MAKES A SUCCESSFUL AQUARIUM TRAVEL PROGRAM ════════════════ */}
      <section className="luc-why-section" id="luc-why">
        <div className="luc-why-container">
          {/* LEFT — stacked images */}
          <div className="luc-why-images">
            <div className="luc-why-img-main-wrap">
              <img
                alt="Aquarium group travel high-quality wildlife expedition experience"
                className="luc-why-img-main"
              />
              <div className="luc-why-img-overlay"></div>
            </div>
            <div className="luc-why-img-accent-wrap">
              <img
                alt="Premium aquarium travel conservation wildlife experience"
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
              What Makes a Successful Aquarium Travel Program?
            </h2>
            <div className="aac-accent-line aac-accent-white"></div>
            <p className="luc-why-intro">
              Aquarium audiences expect expert leadership and meaningful
              conservation experiences.
            </p>
            <p className="luc-why-subintro">
              The most successful aquarium travel programs share several
              characteristics:
            </p>

            <div className="luc-why-features">
              <div className="luc-why-feature">
                <div className="luc-why-feature-num">01</div>
                <div className="luc-why-feature-body">
                  <h3 className="luc-why-feature-title">Mission Alignment</h3>
                  <p className="luc-why-feature-desc">
                    Travel experiences should reflect the aquarium's
                    conservation purpose — bringing marine education themes,
                    ocean advocacy, and institutional values to life in the
                    field.
                  </p>
                </div>
              </div>

              <div className="luc-why-feature">
                <div className="luc-why-feature-num">02</div>
                <div className="luc-why-feature-body">
                  <h3 className="luc-why-feature-title">Expert Leadership</h3>
                  <p className="luc-why-feature-desc">
                    Participants value access to knowledgeable naturalists,
                    marine biologists, conservation leaders, and scientists who
                    deepen the educational dimension of every wildlife
                    encounter.
                  </p>
                </div>
              </div>

              <div className="luc-why-feature">
                <div className="luc-why-feature-num">03</div>
                <div className="luc-why-feature-body">
                  <h3 className="luc-why-feature-title">
                    Meaningful Wildlife Experiences
                  </h3>
                  <p className="luc-why-feature-desc">
                    Travel should go beyond sightseeing to provide deeper
                    conservation understanding — Zodiac excursions, wildlife
                    observation, and expert-led landings unavailable through
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
                    exceptional guest experiences — allowing aquarium staff to
                    focus on mission-driven conservation programming.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY AQUARIUMS PARTNER WITH PROFESSIONAL TRAVEL COMPANIES */}
      <section
        className="wnf-section wnf-bg-white"
        id="wnf-aquarium-partnerships"
      >
        <div className="wnf-container">
          <div className="wnf-section-header">
            <h2 className="wnf-h2">
              Why Aquariums Partner with <br /> Professional Travel Companies
            </h2>
            <div className="wnf-accent-line"></div>
          </div>

          <div className="wnf-split">
            {/* Left Column: Premium Dual Image Stack */}
            <div className="wnf-image-column">
              <div className="wnf-image-stack">
                <div className="wnf-img-frame wnf-frame-primary">
                  <img
                    alt="Aquarium travel planning and expedition logistics strategy"
                    className="wnf-photo"
                  />
                </div>
                <div className="wnf-img-frame wnf-frame-secondary">
                  <img
                    alt="Naturalists and aquarium members enjoying a high-quality wildlife expedition"
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
                    "Itinerary Development",
                    "Cruise Selection",
                    "Travel Logistics",
                    "Guest Registration",
                    "Marketing Support",
                    "Risk Management",
                    "Onsite Coordination",
                    "Customer Service",
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
                  This allows aquarium staff to focus on educational content and
                  participant engagement while ensuring a high-quality travel
                  experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ WHO ARE AQUARIUM TRAVEL PROGRAMS BEST FOR? ══════════════════════ */}
      <section className="Asc-section Asc-bg-soft" id="Asc-who">
        <div className="Asc-container">
          <div className="Asc-section-header">
            <h2 className="Asc-h2">
              Who Are Aquarium Travel Programs Best For?
            </h2>
            <div className="Asc-accent-line"></div>
          </div>

          <div className="Asc-who-grid">
            <div className="Asc-who-card Asc-who-yes">
              <h3 className="Asc-who-title">Best For</h3>
              <ul className="Asc-who-list">
                {[
                  "Aquarium Members & Supporters",
                  "Donors & Conservation Patrons",
                  "Aquarium Leadership Circles & Boards",
                  "Wildlife Enthusiasts & Nature Photographers",
                  "Retirees with Interest in Marine Life & Conservation",
                  "Educational Institutions with Aquarium Partnerships",
                  "Aquarium Foundations & Development Teams",
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
                  "Budget-focused travel without conservation or educational components",
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

      {/* ══ WHY CONSERVATION TRAVEL CONTINUES TO GROW ════════════════════════ */}
      <section className="adg-c-section adg-c-bg-white" id="adg-overview">
        <div className="adg-c-container">
          <div className="adg-c-section-header">
    
            <h2 className="adg-c-h2">
             Revenue & Engagement Benefits for Aquariums
            </h2>
            <div className="adg-c-accent-line"></div>
          </div>

          <div className="adg-c-overview-layout">
            {/* LEFT — Benefits List */}
            <div className="adg-c-overview-icons">
              {[
                "Firsthand Ocean Experiences",
                "Global Conservation Perspectives",
                "Deeper Environmental Understanding",
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
                    Travel has become one of the most powerful conservation
                    education tools available, allowing participants to connect
                    directly with marine ecosystems, ocean wildlife, and
                    environmental challenges in meaningful, memorable ways.
                  </p>
                </div>
              </div>

              <div className="adg-c-overview-image-wrap">
                <img
                  alt="Conservation travelers exploring marine wildlife destinations"
                  className="adg-c-overview-img"
                />
                <div className="adg-c-overview-img-overlay">
                  <span className="adg-c-overview-img-label">
                    Conservation & Ocean Discovery
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
              Aquarium Travel Program Leadership
            </span>
            <h2 className="Adg-expert-title">
              Angela Hughes: A Trusted Advisor for Aquarium Travel Programs
            </h2>
            <div className="Adg-expert-divider"></div>
          </div>

          <div className="Adg-expert-grid">
            {/* LEFT SIDE */}
            <div className="Adg-expert-image-col">
              <div className="Adg-expert-portrait-wrap">
                <img
                  src={AboutImage}
                  alt="Angela Hughes - Aquarium Travel Program Expert"
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
                  Aquariums benefit from Angela Hughes' decades of global travel
                  expertise and deep knowledge of educational, conservation, and
                  wildlife group travel.
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
                  Her leadership helps aquariums confidently develop travel
                  programs that reflect institutional excellence, extend their
                  conservation mission, and create lasting value for members,
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
              Everything you need to know about aquarium travel programs.
            </p>
          </div>
          <FAQ />
        </div>
      </section>

      {/* ══ CTA ═══════════════════════════════════════════════════════════════ */}
      <section className="Asc-help-section">
        <div className="Asc-help-bg-wrap">
          <img
            alt="Aquarium travel program ocean wildlife expedition experience"
            className="Asc-help-bg-img"
          />
          <div className="Asc-help-overlay"></div>
        </div>

        <div className="Asc-container">
          <div className="Asc-help-card">
            <div className="Asc-help-content">
              <div className="Asc-help-header">
                <span className="Asc-help-eyebrow">Aquarium Travel Programs</span>
                <h2 className="Asc-help-h2">
                  Extend Your Aquarium's Mission Through <br /> Extraordinary
                  Ocean Travel Experiences
                </h2>
                <div className="Asc-help-accent"></div>
              </div>

              <div className="Asc-help-grid">
                <div className="Asc-help-info">
                  <p className="Asc-help-intro">
                    Aquarium travel programs allow institutions to extend their
                    conservation mission far beyond their physical walls.
                  </p>
                  <p className="Asc-help-intro">
                    By combining education, conservation awareness, and expertly
                    curated wildlife travel experiences, aquariums can create
                    meaningful connections with members, donors, and supporters
                    while strengthening engagement and advancing organizational
                    goals.
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
                      Whether observing whales in Alaska, exploring Antarctica's
                      frozen landscapes, or discovering the biodiversity of the
                      Galápagos, these journeys transform curiosity into
                      connection.
                      <br />
                      <br />
                      With Angela Hughes' global expertise and Trips &amp; Ships
                      Luxury Travel's proven planning process, your aquarium can
                      create travel programs that inspire engagement, strengthen
                      community, and support long-term institutional success.
                      <br />
                      <br />
                      <strong>
                        Because the most powerful lessons about the ocean aren't
                        always found behind glass. Sometimes they're discovered
                        on the water itself.
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
                      Start Planning Your Aquarium Travel Program
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>

                <div className="Asc-help-list-box">
                  <h3 className="Asc-help-list-title">
                    Benefits of Aquarium Travel Programs:
                  </h3>
                  <ul className="Asc-help-bullets">
                    {[
                      "Increased member engagement and retention",
                      "Stronger donor and conservation patron relationships",
                      "Educational mission extended beyond the aquarium",
                      "Exclusive wildlife experiences for members and supporters",
                      "Community building among aquarium participants",
                      "New revenue and membership growth opportunities",
                      "Long-term institutional loyalty and conservation affinity",
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
                    designing your custom aquarium travel program.
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

export default TravelProgramsForAquariums;