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
  GraduationCap,
  Globe,
  Heart,
  BookOpen,
  HandHeart,
} from "lucide-react";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela.jpeg";

import { Helmet } from "react-helmet-async";

const nonprofitTravelDestinations = [
  {
    id: "river-cruises",
    title: "River Cruises for Nonprofit Groups",
    badge: "River Cruises",
    icon: Waves,
    desc: "River cruises are among the most popular nonprofit travel products — offering convenient logistics, educational excursions, comfortable accommodations, and a strong community atmosphere that appeals strongly to donor and lifelong learner audiences.",
    columns: [
      {
        label: "Benefits Include:",
        items: [
          "Easy Group Logistics",
          "Educational Excursions",
          "Comfortable Accommodations",
          "Multiple Destinations",
          "Strong Community Atmosphere",
          "Excellent Value",
        ],
      },
      {
        label: "Popular River Destinations:",
        items: [
          "The Danube",
          "The Rhine",
          "The Seine",
          "The Douro",
          "The Nile",
        ],
      },
    ],
    themeLabel: "Why River Cruises Work for Nonprofits",
    themeText:
      "River cruising consistently attracts donors and lifelong learners — and aligns naturally with the educational and community-building goals of foundations and nonprofits.",
  },
  {
    id: "cultural-journeys",
    title: "Educational & Cultural Journeys",
    badge: "Cultural Journeys",
    icon: Globe,
    desc: "Many foundations and nonprofits offer cultural travel experiences focused on history, arts, architecture, heritage, global cultures, and lifelong learning — programs that appeal strongly to intellectually curious and philanthropically engaged audiences.",
    columns: [
      {
        label: "Program Themes:",
        items: [
          "History & Heritage",
          "Arts & Architecture",
          "World Cultures",
          "Lifelong Learning",
          "Community Development",
          "Humanitarian Causes",
        ],
      },
    ],
    themeLabel: "Mission-Aligned Cultural Travel",
    themeText:
      "Cultural travel programs help supporters experience firsthand the issues, causes, and communities connected to the organization's work — deepening emotional connection to the mission.",
  },
  {
    id: "expedition-travel",
    title: "Expedition & Conservation Travel",
    badge: "Expedition Travel",
    icon: Compass,
    desc: "Organizations focused on science, conservation, education, or exploration often find expedition travel especially effective — combining adventure with education and mission awareness in some of the world's most extraordinary destinations.",
    columns: [
      {
        label: "Popular Expedition Destinations:",
        items: [
          "Antarctica",
          "Arctic Regions",
          "Galápagos Islands",
          "African Safaris",
          "Wildlife Expeditions",
          "Conservation Programs",
        ],
      },
    ],
    themeLabel: "Adventure Meets Mission",
    themeText:
      "Expedition travel allows supporters to experience the causes and conservation challenges their organization works to address — transforming abstract missions into lived understanding.",
  },
  {
    id: "donor-travel",
    title: "Donor Travel Programs",
    badge: "Donor Travel",
    icon: Anchor,
    desc: "Many foundations use travel as part of donor stewardship and cultivation strategies — creating exclusive journeys for major donors, leadership circles, board members, and planned giving societies that deepen philanthropic relationships.",
    columns: [
      {
        label: "Designed Specifically For:",
        items: [
          "Major Donors",
          "Leadership Circles",
          "Board Members",
          "Patrons",
          "Planned Giving Societies",
          "Legacy Donors",
        ],
      },
    ],
    themeLabel: "Deepening Philanthropic Relationships",
    themeText:
      "Exclusive donor travel experiences create opportunities for deeper relationship development — and often become some of the most effective stewardship tools available to foundations and nonprofits.",
  },
  {
    id: "small-ship-cruises",
    title: "Small Ship Cruises",
    badge: "Small Ship Cruises",
    icon: Ship,
    desc: "Small ship voyages provide immersive travel experiences that align well with nonprofit and foundation audiences — with popular regions spanning the Mediterranean, Alaska, British Isles, Scandinavia, and expedition destinations worldwide.",
    columns: [
      {
        label: "Popular Regions:",
        items: [
          "Mediterranean",
          "Alaska",
          "British Isles",
          "Scandinavia",
          "Coastal Europe",
          "Expedition Destinations",
        ],
      },
    ],
    themeLabel: "Intimate Group Experiences",
    themeText:
      "Smaller groups often create stronger participant engagement and deeper community connections — making small ship cruises a natural fit for mission-focused organizations.",
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
        "Luxury travel agency specializing in nonprofit travel programs, foundation travel experiences, donor travel, educational group travel, expedition cruises, river cruises, and premium group travel planning.",
    },
    {
      "@type": "TravelAgency",
      "@id": "https://www.tripsandships.com/#travelagency",
      name: "Trips & Ships Luxury Travel",
      url: "https://www.tripsandships.com",
      description:
        "Luxury travel experts helping foundations, nonprofits, and mission-driven organizations create exceptional group travel programs for donors, members, volunteers, and supporters.",
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
      "@id":
        "https://www.tripsandships.com/travel-programs-for-foundations-nonprofits",
      url: "https://www.tripsandships.com/travel-programs-for-foundations-nonprofits",
      name: "Travel Programs for Foundations & Nonprofits | Mission-Driven Group Travel",
      description:
        "Discover how foundations and nonprofits use educational travel programs, donor cruises, cultural journeys, and mission-focused expeditions to strengthen supporter engagement, increase fundraising opportunities, and expand their impact.",
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.tripsandships.com/travel-programs-for-foundations-nonprofits#breadcrumb",
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
          name: "Travel Programs for Foundations & Nonprofits",
          item: "https://www.tripsandships.com/travel-programs-for-foundations-nonprofits",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id":
        "https://www.tripsandships.com/travel-programs-for-foundations-nonprofits#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What are travel programs for foundations and nonprofits?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "These are organized travel experiences designed for donors, members, volunteers, supporters, and leadership groups of foundations and nonprofit organizations.",
          },
        },
        {
          "@type": "Question",
          name: "Why do nonprofits offer travel programs?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Travel programs help strengthen engagement, support fundraising efforts, build community, and extend organizational missions.",
          },
        },
        {
          "@type": "Question",
          name: "Can travel programs generate revenue for nonprofits?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Travel programs may contribute to fundraising, membership growth, sponsorship opportunities, and program revenue.",
          },
        },
        {
          "@type": "Question",
          name: "What types of trips are most popular for nonprofits?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "River cruises, cultural tours, small ship cruises, safaris, expedition cruises, and educational journeys are among the most popular options.",
          },
        },
        {
          "@type": "Question",
          name: "Are nonprofit travel programs educational?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Most programs include lectures, expert guides, cultural experiences, and mission-related learning opportunities.",
          },
        },
        {
          "@type": "Question",
          name: "Who participates in nonprofit travel programs?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Donors, members, volunteers, board members, alumni, patrons, and supporters commonly participate.",
          },
        },
        {
          "@type": "Question",
          name: "What are donor travel programs for nonprofits?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Donor travel programs are exclusive journeys designed to engage, recognize, and strengthen relationships with philanthropic supporters.",
          },
        },
        {
          "@type": "Question",
          name: "Why are river cruises popular with nonprofits?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "River cruises offer educational experiences, convenient logistics, cultural immersion, and excellent group travel opportunities.",
          },
        },
        {
          "@type": "Question",
          name: "Should nonprofits manage travel internally?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Many organizations partner with experienced travel companies that handle planning, logistics, registration, and operations — allowing nonprofit teams to focus on engagement and mission delivery.",
          },
        },
        {
          "@type": "Question",
          name: "How do travel programs strengthen supporter relationships?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Shared experiences create stronger personal connections, deeper mission engagement, and long-term loyalty among supporters.",
          },
        },
        {
          "@type": "Question",
          name: "What destinations are popular for foundation and nonprofit travel?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Popular destinations include European river cruise routes, the Mediterranean, cultural destinations in Italy, France, Greece, Egypt, Japan, and expedition destinations such as Antarctica and the Galápagos.",
          },
        },
        {
          "@type": "Question",
          name: "How can nonprofit travel programs strengthen member retention?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Travel programs can serve as compelling membership benefits — offering priority booking, member-only departures, special pricing, and exclusive experiences that increase member loyalty.",
          },
        },
        {
          "@type": "Question",
          name: "Who typically participates in foundation travel programs?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Typical participants include foundation donors, members, patrons, retirees, lifelong learners, volunteers, alumni, board members, and affinity group travelers.",
          },
        },
        {
          "@type": "Question",
          name: "What makes a successful nonprofit travel program?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The most successful programs share mission alignment, expert leadership, high-quality travel partners, meaningful cultural or conservation experiences, and exceptional service.",
          },
        },
        {
          "@type": "Question",
          name: "Why partner with a professional travel company for nonprofit programs?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Professional travel partners handle itinerary development, vendor negotiation, cruise and tour planning, guest registration, travel logistics, marketing support, risk management, and onsite operations.",
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
      q: "What are travel programs for foundations and nonprofits?",
      a: "These are organized travel experiences designed for donors, members, volunteers, supporters, and leadership groups of foundations and nonprofit organizations.",
    },
    {
      q: "Why do nonprofits offer travel programs?",
      a: "Travel programs help strengthen engagement, support fundraising efforts, build community, and extend organizational missions.",
    },
    {
      q: "Can travel programs generate revenue for nonprofits?",
      a: "Yes. Travel programs may contribute to fundraising, membership growth, sponsorship opportunities, and program revenue.",
    },
    {
      q: "What types of trips are most popular for nonprofits?",
      a: "River cruises, cultural tours, small ship cruises, safaris, expedition cruises, and educational journeys are among the most popular options.",
    },
    {
      q: "Are nonprofit travel programs educational?",
      a: "Yes. Most programs include lectures, expert guides, cultural experiences, and mission-related learning opportunities.",
    },
    {
      q: "Who participates in nonprofit travel programs?",
      a: "Donors, members, volunteers, board members, alumni, patrons, and supporters commonly participate.",
    },
    {
      q: "What are donor travel programs for nonprofits?",
      a: "Donor travel programs are exclusive journeys designed to engage, recognize, and strengthen relationships with philanthropic supporters.",
    },
    {
      q: "Why are river cruises popular with nonprofits?",
      a: "River cruises offer educational experiences, convenient logistics, cultural immersion, and excellent group travel opportunities.",
    },
    {
      q: "Should nonprofits manage travel internally?",
      a: "Many organizations partner with experienced travel companies that handle planning, logistics, registration, and operations — allowing nonprofit teams to focus on engagement and mission delivery.",
    },
    {
      q: "How do travel programs strengthen supporter relationships?",
      a: "Shared experiences create stronger personal connections, deeper mission engagement, and long-term loyalty among supporters.",
    },
    {
      q: "What destinations are popular for foundation and nonprofit travel?",
      a: "Popular destinations include European river cruise routes, the Mediterranean, cultural destinations in Italy, France, Greece, Egypt, Japan, and expedition destinations such as Antarctica and the Galápagos.",
    },
    {
      q: "How can nonprofit travel programs strengthen member retention?",
      a: "Travel programs can serve as compelling membership benefits — offering priority booking, member-only departures, special pricing, and exclusive experiences that increase member loyalty.",
    },
    {
      q: "Who typically participates in foundation travel programs?",
      a: "Typical participants include foundation donors, members, patrons, retirees, lifelong learners, volunteers, alumni, board members, and affinity group travelers.",
    },
    {
      q: "What makes a successful nonprofit travel program?",
      a: "The most successful programs share mission alignment, expert leadership, high-quality travel partners, meaningful cultural or conservation experiences, and exceptional service.",
    },
    {
      q: "Why partner with a professional travel company for nonprofit programs?",
      a: "Professional travel partners handle itinerary development, vendor negotiation, cruise and tour planning, guest registration, travel logistics, marketing support, risk management, and onsite operations.",
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

const TravelProgramsForFoundationsNonprofits = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [readMore, setReadMore] = useState(false);
  const [hovered, setHovered] = useState(null);
  const images = [];
  const [activeDest, setActiveDest] = useState("river-cruises");

  const currentDest =
    nonprofitTravelDestinations.find((d) => d.id === activeDest) ||
    nonprofitTravelDestinations[0];
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
          Travel Programs for Foundations &amp; Nonprofits | Mission-Driven
          Group Travel
        </title>
        <meta
          name="title"
          content="Travel Programs for Foundations & Nonprofits"
        />
        <meta
          name="description"
          content="Discover how foundations and nonprofits use educational travel programs, donor cruises, cultural journeys, and mission-focused expeditions to strengthen supporter engagement, increase fundraising opportunities, and expand their impact."
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
            Travel Programs for Foundations &amp; Nonprofits: Extending Your
            Mission Through Meaningful Travel
          </h1>
          <p>
            Foundations and nonprofit organizations exist to create positive
            change. Whether focused on education, healthcare, conservation, arts
            and culture, humanitarian causes, research, or community
            development, nonprofits thrive when supporters feel deeply connected
            to their mission.
          </p>
          {readMore && (
            <>
              <p>
                Travel programs provide a powerful way to strengthen those
                connections. By offering thoughtfully curated travel
                experiences, foundations and nonprofits can engage donors,
                members, volunteers, board members, and supporters in meaningful
                ways while creating opportunities for education, fundraising,
                and relationship building.
              </p>
              <p>
                Travel becomes more than a vacation. It becomes an extension of
                the organization's mission.
              </p>
              <p>
                At Trips &amp; Ships Luxury Travel, we help foundations and
                nonprofits design exceptional travel experiences that align with
                organizational objectives while delivering meaningful journeys.
                Led by <strong>Angela Hughes</strong>, one of the travel
                industry's most respected luxury travel experts, our team
                specializes in creating programs that inspire engagement and
                advance organizational goals.
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

      {/* ══ WHY TRAVEL PROGRAMS MATTER ═══════════════════════════════════════ */}
      <section className="adg-c-section adg-c-bg-dark" id="adg-why-nonprofits">
        <div className="adg-c-container">
          <div className="adg-c-why-grid">
            {/* LEFT — text */}
            <div className="adg-c-why-left">
              <span className="adg-c-eyebrow adg-c-eyebrow-light">
                Nonprofit Travel Program Benefits
              </span>
              <h2 className="adg-c-h2 adg-c-h2-light">
                Why Foundations &amp; Nonprofits Are Investing in Travel
                Programs
              </h2>
              <div className="aac-accent-line aac-accent-white"></div>
              <p className="adg-c-lead adg-c-lead-light">
                Travel is one of the most powerful tools for deepening supporter
                engagement and extending organizational impact.
              </p>
              <p className="adg-c-body adg-c-body-light">
                Today's supporters increasingly value experiences over material
                benefits. Nonprofit and foundation audiences are often lifelong
                learners and purpose-driven travelers who want meaningful
                opportunities to learn, connect, and make a difference while
                exploring the world.
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
                  Foundations and nonprofits are uniquely positioned to deliver
                  these experiences — offering curated journeys, expert-led
                  programming, and exclusive access that transform passive
                  supporters into active ambassadors for the organization's
                  mission. Travel extends educational impact while supporting
                  both organizational and financial goals.
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
                  Travel Programs Help Organizations:
                </span>
                <div className="adg-c-pill-grid">
                  {[
                    "Stronger Donor Engagement",
                    "Increased Member Retention",
                    "New Fundraising Opportunities",
                    "Enhanced Mission Awareness",
                    "Community Building",
                    "Lifelong Learning Experiences",
                    "Board & Leadership Engagement",
                    "Expanded Organizational Visibility",
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

      {/* ══ THE GROWING DEMAND FOR PURPOSE-DRIVEN TRAVEL ════════════════════ */}
      <section
        className="ugt-components-section"
        id="ugt-components"
        style={{ backgroundColor: "var(--bg-white)" }}
      >
        <div className="Asc-container">
          <div className="ugt-components-header">
            <h2 className="adg-c-h2">
              The Growing Demand for <br /> Purpose-Driven Travel
            </h2>
            <div className="adg-c-accent-line"></div>
          </div>

          <div className="ugt-components-list">
            <div className="ugt-component-row">
              {/* LEFT IMAGE */}
              <div className="ugt-component-image-wrapper">
                <div className="ugt-component-image-container">
                  <img
                    alt="Foundation and nonprofit supporters experiencing mission-driven travel firsthand"
                    className="ugt-component-image"
                  />
                </div>
              </div>

              {/* RIGHT CONTENT */}
              <div className="ugt-component-content">
                <p className="ugt-component-text">
                  Travel allows participants to experience the issues, causes,
                  and communities connected to an organization's work in ways
                  that cannot be replicated through standard programming.
                </p>
                <p className="ugt-component-text">
                  Foundation and nonprofit supporters are often purpose-driven
                  travelers who appreciate meaningful experiences over standard
                  tourism. They want context, expert insight, and direct
                  engagement with destinations and causes they care about —
                  meaning mission-aligned travel programs are uniquely
                  positioned to deliver transformational supporter experiences.
                </p>

                <div className="ugt-questions-box">
                  <span className="ugt-questions-title">
                    Modern Travelers Seek Experiences That Are:
                  </span>
                  <ul className="ugt-questions-list">
                    {[
                      "Educational",
                      "Meaningful",
                      "Experiential",
                      "Community-Oriented",
                      "Mission-Focused",
                      "Culturally Enriching",
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

      {/* ══ TYPES OF NONPROFIT TRAVEL PROGRAMS — 4-CARD GRID ═══════════════ */}
      <section
        className="adg-c-section adg-c-bg-soft"
        id="adg-nonprofit-programs"
      >
        <div className="adg-c-container">
          <div className="adg-c-section-header">
            <h2 className="adg-c-h2">
              Popular Types of Nonprofit Travel Programs
            </h2>
            <div className="adg-c-accent-line"></div>
            <p className="Asc-section-intro">
              Foundations and nonprofits can offer a wide variety of travel
              experiences based on their mission, cause focus, and audience.
              Successful programs are designed with specific engagement goals
              and participant interests in mind.
            </p>
          </div>

          <div className="adg-c-venues-grid1">
            {[
              {
                id: 1,
                eyebrow: "Educational & Cultural Travel",
                name: "Cultural & Educational Journeys",
                highlight:
                  "Many organizations offer cultural travel experiences focused on history, arts, architecture, heritage, global cultures, and lifelong learning — programs that appeal strongly to intellectually curious audiences.",
                items: [
                  "Cultural & Heritage Destinations",
                  "Historical Site Exploration",
                  "Art & Architecture Tours",
                  "Expert Lecture Programming",
                  "Mission-Connected Experiences",
                ],
                callout:
                  "Cultural travel programs bring the organization's educational mission to life — participants experience firsthand the communities and causes their support helps advance.",
              },
              {
                id: 2,
                eyebrow: "Donor Engagement",
                name: "Donor Cultivation & Stewardship Travel",
                highlight:
                  "Travel is a highly effective donor engagement tool for foundations and nonprofits — deepening institutional relationships while creating memorable shared experiences that strengthen long-term philanthropic commitment.",
                items: [
                  "Major Donor Stewardship Journeys",
                  "Leadership Circle Custom Itineraries",
                  "Board Member & Patron Expeditions",
                  "Planned Giving Society Programs",
                  "Legacy Donor Exclusive Experiences",
                ],
                callout:
                  "These high-touch experiences strengthen donor ties and create lifelong organizational ambassadors — connecting people more deeply to the causes they care about most.",
              },
              {
                id: 3,
                eyebrow: "Member Benefits",
                name: "Educational Travel as a Membership Benefit",
                highlight:
                  "High-quality travel programs elevate the entire membership value proposition — creating a visible and compelling incentive that drives membership acquisition, engagement, and long-term retention.",
                items: [
                  "Priority Trip Registration Windows",
                  "Exclusive Member-Only Departures",
                  "Special Member Pricing Tiers",
                  "Access to Mission Experts",
                  "Curated Educational Experiences",
                ],
                callout:
                  "Offering travel benefits transforms standard memberships into meaningful gateways for lifelong learning and community connection.",
              },
              {
                id: 4,
                eyebrow: "Revenue & Engagement",
                name: "Travel as a Fundraising Tool",
                highlight:
                  "Travel programs can support fundraising objectives through increased donor retention, new donor acquisition, sponsorship opportunities, program revenue, and enhanced philanthropic engagement.",
                items: [
                  "Increased Donor Retention",
                  "New Donor Acquisition",
                  "Sponsorship Opportunities",
                  "Program Revenue",
                  "Event Integration",
                ],
                callout:
                  "Well-designed programs often become valuable components of broader development strategies — creating meaningful connections that lead to long-term support.",
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

      {/* ══ BEST DESTINATIONS ════════════════════════════════════════════════ */}
      <section className="luc-destinations-section" id="luc-destinations">
        <div className="luc-destinations-container">
          <div className="luc-destinations-header">
            <h2 className="luc-destinations-title">
              Best Destinations for Foundation &amp; <br /> Nonprofit Travel
              Programs
            </h2>
            <div className="adg-c-accent-line"></div>
            <p className="luc-destinations-intro">
              From European river cruises and Mediterranean cultural voyages to
              expedition journeys, small ship cruises, and mission-based travel
              experiences — these destinations provide exceptional opportunities
              for supporter engagement, educational enrichment, and meaningful
              community building.
            </p>
          </div>

          <div className="luc-dest-layout">
            {/* Sidebar nav */}
            <nav className="luc-dest-nav">
              {nonprofitTravelDestinations.map((item) => {
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

      {/* ══ BENEFITS OF TRAVEL PROGRAMS ══════════════════════════════════════ */}
      <section
        className="Leg-section"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="Leg-container">
          {/* Header */}
          <div className="Leg-header">
            <h2 className="Leg-title">
              Benefits of Travel Programs for Nonprofit Members
            </h2>

            <div className="adg-c-accent-line"></div>

            <p className="Leg-subtitle">
              Travel programs offer significant value to both participants and
              organizations through education, mission engagement, and community
              building.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="Leg-grid">
            {[
              {
                id: 1,
                accent: "blue",
                icon: GraduationCap,
                title: "Deeper Mission Engagement",
                description:
                  "Travel allows participants to experience the issues, causes, and communities connected to an organization's work — creating stronger emotional connections to the mission than any presentation or exhibit can provide.",
                pills: [
                  "Conservation Initiatives",
                  "Educational Institutions",
                  "Cultural Destinations",
                  "Historical Sites",
                  "Community Programs",
                ],
                highlight:
                  "Experiencing the mission firsthand creates a stronger and more lasting emotional connection.",
              },
              {
                id: 2,
                accent: "gold",
                icon: Globe,
                title: "Stronger Donor Relationships",
                description:
                  "Shared travel experiences create meaningful interactions between donors, board members, leadership teams, volunteers, and organizational staff — often strengthening long-term philanthropic engagement.",
                pills: [
                  "Major Donors",
                  "Board Members",
                  "Leadership Teams",
                  "Volunteers",
                  "Organizational Staff",
                ],
                highlight:
                  "These connections often strengthen long-term support and philanthropic engagement.",
              },
              {
                id: 3,
                accent: "green",
                icon: Users,
                title: "Community Building",
                description:
                  "Travel brings together supporters who share common interests and values — participants often develop lasting relationships while strengthening their connection to the organization.",
                pills: [
                  "Shared Values",
                  "Common Interests",
                  "Mission Alignment",
                  "Learning",
                  "Exploration",
                ],
                highlight:
                  "The result is a more engaged, loyal, and community-oriented supporter base.",
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
              By combining immersive mission experiences, meaningful community
              connections, and educational depth, travel programs create lasting
              impact for participants while strengthening support for
              foundations and nonprofits.
            </p>
          </div>
        </div>
      </section>

      {/* ══ WHAT MAKES A SUCCESSFUL PROGRAM ══════════════════════════════════ */}
      <section className="luc-why-section" id="luc-why">
        <div className="luc-why-container">
          {/* LEFT — stacked images */}
          <div className="luc-why-images">
            <div className="luc-why-img-main-wrap">
              <img
                alt="Foundation and nonprofit group travel high-quality educational experience"
                className="luc-why-img-main"
              />
              <div className="luc-why-img-overlay"></div>
            </div>
            <div className="luc-why-img-accent-wrap">
              <img
                alt="Premium nonprofit travel mission-driven experience with expert leadership"
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
              What Makes a Successful Nonprofit Travel Program?
            </h2>
            <div className="aac-accent-line aac-accent-white"></div>
            <p className="luc-why-intro">
              Nonprofit and foundation audiences expect meaningful experiences
              and exceptional service.
            </p>
            <p className="luc-why-subintro">
              The most successful foundation and nonprofit travel programs share
              several characteristics:
            </p>

            <div className="luc-why-features">
              <div className="luc-why-feature">
                <div className="luc-why-feature-num">01</div>
                <div className="luc-why-feature-body">
                  <h3 className="luc-why-feature-title">Mission Alignment</h3>
                  <p className="luc-why-feature-desc">
                    Travel experiences should support and reinforce
                    organizational goals — bringing the foundation or
                    nonprofit's cause, values, and impact to life in the field.
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
                    Exceptional Experiences
                  </h3>
                  <p className="luc-why-feature-desc">
                    High-quality travel creates lasting impressions and
                    encourages repeat participation — going beyond sightseeing
                    to provide deeper mission understanding and exclusive
                    experiences unavailable through standard tourism.
                  </p>
                </div>
              </div>

              <div className="luc-why-feature">
                <div className="luc-why-feature-num">04</div>
                <div className="luc-why-feature-body">
                  <h3 className="luc-why-feature-title">
                    Professional Management
                  </h3>
                  <p className="luc-why-feature-desc">
                    Experienced travel providers ensure seamless logistics and
                    exceptional guest experiences — allowing nonprofit staff to
                    focus on mission delivery and participant engagement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ WHY PURPOSE-DRIVEN TRAVEL CONTINUES TO GROW ═════════════════════ */}
      <section className="ugt-advantage-section">
        <div className="ugt-container">
          <div className="ugt-advantage-header">
            <span className="ugt-advantage-eyebrow">Purpose-Driven Travel</span>

            <h2 className="ugt-advantage-title">
              Why Purpose-Driven Travel Continues to Grow
            </h2>

            <div className="Asc-accent-line"></div>

            <p className="ugt-advantage-intro">
              Today's travelers increasingly seek experiences that provide
              personal growth, meaningful connections, and a deeper
              understanding of the world around them.
            </p>
          </div>

          <div className="ugt-advantage-grid">
            {[
              {
                icon: Heart,
                title: "Personal Enrichment",
                desc: "Travelers seek opportunities to learn, grow, and gain new perspectives through immersive experiences that create lasting memories.",
              },
              {
                icon: Users,
                title: "Community Connection",
                desc: "Purpose-driven journeys bring together like-minded individuals who share common interests, values, and a desire to make a positive impact.",
              },
              {
                icon: BookOpen,
                title: "Educational Value",
                desc: "Participants gain meaningful insights through expert-led experiences, cultural engagement, and firsthand learning opportunities.",
              },
              {
                icon: HandHeart,
                title: "Meaningful Impact",
                desc: "Travelers increasingly want their journeys to contribute to causes they care about while supporting organizations making a difference.",
              },
              {
                icon: Compass,
                title: "Authentic Experiences",
                desc: "People value genuine connections with destinations, communities, and missions that create deeper and more memorable travel experiences.",
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

      {/* ══ WHY ORGANIZATIONS PARTNER WITH PROFESSIONAL TRAVEL COMPANIES ═════ */}
      <section
        className="wnf-section wnf-bg-white"
        id="wnf-nonprofit-partnerships"
      >
        <div className="wnf-container">
          <div className="wnf-section-header">
            <h2 className="wnf-h2">
              Why Foundations Partner with <br /> Professional Travel Companies
            </h2>
            <div className="wnf-accent-line"></div>
          </div>

          <div className="wnf-split">
            {/* Left Column */}
            <div className="wnf-image-column">
              <div className="wnf-image-stack">
                <div className="wnf-img-frame wnf-frame-primary">
                  <img
                    alt="Foundation travel planning and group logistics strategy"
                    className="wnf-photo"
                  />
                </div>
                <div className="wnf-img-frame wnf-frame-secondary">
                  <img
                    alt="Nonprofit donors and supporters on a high-quality educational travel program"
                    className="wnf-photo"
                  />
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="wnf-content-column">
              <div className="wnf-block">
                <p className="wnf-lead-text">
                  Managing group travel requires specialized expertise.
                  Professional travel partners handle:
                </p>
                <ul className="wnf-feature-list">
                  {[
                    "Itinerary Development",
                    "Vendor Negotiation",
                    "Cruise & Tour Planning",
                    "Guest Registration",
                    "Travel Logistics",
                    "Marketing Support",
                    "Risk Management",
                    "Onsite Operations",
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
                  This allows nonprofit teams to focus on engagement and mission
                  delivery rather than travel administration — while ensuring a
                  high-quality participant experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ WHO ARE THESE PROGRAMS BEST FOR? ═════════════════════════════════ */}
      <section className="Asc-section Asc-bg-soft" id="Asc-who">
        <div className="Asc-container">
          <div className="Asc-section-header">
            <h2 className="Asc-h2">
              Who Are Foundation &amp; Nonprofit Travel Programs Best For?
            </h2>
            <div className="Asc-accent-line"></div>
          </div>

          <div className="Asc-who-grid">
            <div className="Asc-who-card Asc-who-yes">
              <h3 className="Asc-who-title">Best For</h3>
              <ul className="Asc-who-list">
                {[
                  "Donors & Philanthropic Supporters",
                  "Foundation Members & Patrons",
                  "Board Members & Leadership Circles",
                  "Volunteers & Alumni",
                  "Lifelong Learners & Cultural Enthusiasts",
                  "Planned Giving & Legacy Donors",
                  "Foundation Development & Fundraising Teams",
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
                  "Budget-focused travel without educational or mission components",
                  "Programs without community or engagement objectives",
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

      {/* ══ REVENUE & ENGAGEMENT BENEFITS ════════════════════════════════════ */}
      <section className="adg-c-section adg-c-bg-white" id="adg-revenue">
        <div className="adg-c-container">
          <div className="adg-c-section-header">
            <h2 className="adg-c-h2">
              Revenue &amp; Engagement Benefits <br /> for Foundations &amp;
              Nonprofits
            </h2>
            <div className="adg-c-accent-line"></div>
          </div>

          <div className="adg-c-overview-layout">
            {/* LEFT — Benefits List */}
            <div className="adg-c-overview-icons">
              {[
                "Personal Enrichment",
                "Community Connection",
                "Educational Value",
                "Meaningful Impact",
                "Authentic Experiences",
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
                    Travel has become one of the most effective engagement tools
                    available to foundations and nonprofits — connecting people
                    not only to destinations, but also to the causes and
                    communities they care deeply about.
                  </p>
                </div>
              </div>

              <div className="adg-c-overview-image-wrap">
                <img
                  alt="Foundation supporters exploring mission-connected destinations"
                  className="adg-c-overview-img"
                />
                <div className="adg-c-overview-img-overlay">
                  <span className="adg-c-overview-img-label">
                    Purpose-Driven Travel
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
              Nonprofit Travel Program Leadership
            </span>
            <h2 className="Adg-expert-title">
              Angela Hughes: A Trusted Advisor for Foundation &amp; Nonprofit
              Travel Programs
            </h2>
            <div className="Adg-expert-divider"></div>
          </div>

          <div className="Adg-expert-grid">
            {/* LEFT SIDE */}
            <div className="Adg-expert-image-col">
              <div className="Adg-expert-portrait-wrap">
                <img
                  src={AboutImage}
                  alt="Angela Hughes - Foundation & Nonprofit Travel Program Expert"
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
                  Foundations and nonprofits benefit from Angela Hughes' decades
                  of global travel expertise and deep knowledge of educational,
                  donor engagement, and mission-driven group travel.
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
                  Her leadership helps foundations and nonprofits confidently
                  develop travel programs that reflect institutional excellence,
                  extend their mission, and create lasting value for donors,
                  members, and supporters.
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
              Everything you need to know about foundation and nonprofit travel
              programs.
            </p>
          </div>
          <FAQ />
        </div>
      </section>

      {/* ══ CTA ═══════════════════════════════════════════════════════════════ */}
      <section className="Asc-help-section">
        <div className="Asc-help-bg-wrap">
          <img
            alt="Foundation and nonprofit travel program mission-driven experience"
            className="Asc-help-bg-img"
          />
          <div className="Asc-help-overlay"></div>
        </div>

        <div className="Asc-container">
          <div className="Asc-help-card">
            <div className="Asc-help-content">
              <div className="Asc-help-header">
                <span className="Asc-help-eyebrow">
                  Foundation &amp; Nonprofit Travel Programs
                </span>
                <h2 className="Asc-help-h2">
                  Connect People More Deeply <br /> to the Causes They Care
                  About Most
                </h2>
                <div className="Asc-help-accent"></div>
              </div>

              <div className="Asc-help-grid">
                <div className="Asc-help-info">
                  <p className="Asc-help-intro">
                    Travel programs offer foundations and nonprofits a unique
                    opportunity to deepen engagement, strengthen donor
                    relationships, and expand their mission beyond traditional
                    programming.
                  </p>
                  <p className="Asc-help-intro">
                    Whether through educational river cruises, cultural
                    journeys, conservation expeditions, or mission-focused
                    travel experiences, organizations can create meaningful
                    opportunities that inspire supporters while advancing
                    institutional goals.
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
                      The most successful programs don't simply take
                      participants to new places.
                      <br />
                      <br />
                      They connect people more deeply to the causes,
                      communities, and missions they care about most.
                      <br />
                      <br />
                      With Angela Hughes' global expertise and Trips &amp; Ships
                      Luxury Travel's proven planning process, your foundation
                      or nonprofit can create travel programs that inspire
                      engagement, strengthen community, and support long-term
                      organizational success.
                      <br />
                      <br />
                      <strong>
                        Because the most powerful connections between people and
                        causes aren't always made in a conference room.
                        Sometimes they're made standing somewhere extraordinary
                        — where the mission becomes real.
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
                      Start Planning Your Nonprofit Travel Program
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>

                <div className="Asc-help-list-box">
                  <h3 className="Asc-help-list-title">
                    Benefits of Nonprofit Travel Programs:
                  </h3>
                  <ul className="Asc-help-bullets">
                    {[
                      "Increased donor loyalty and retention",
                      "Stronger donor and patron relationships",
                      "Mission extended beyond traditional programming",
                      "Exclusive experiences for supporters and members",
                      "Community building among organizational participants",
                      "New revenue and membership growth opportunities",
                      "Long-term institutional loyalty and mission affinity",
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
                    designing your custom foundation and nonprofit travel
                    program.
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

export default TravelProgramsForFoundationsNonprofits;
