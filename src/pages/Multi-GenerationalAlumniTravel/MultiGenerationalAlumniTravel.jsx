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
} from "lucide-react";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela3.jpeg";
import HeroImage1 from "../../assets/MultiGenerationalAlumniTravel/iceland-horseback-riding-kirkjufell-mountain-lupine-fields-adventure.jpg";
import HeroImage2 from "../../assets/MultiGenerationalAlumniTravel/small-group-hiking-vacation-nature-trail-exploration-journey.jpg";
import HeroImage3 from "../../assets/MultiGenerationalAlumniTravel/alumni-university-campus-community-aerial-view.jpg";
import CTAImage from "../../assets/MultiGenerationalAlumniTravel/Plan-Alumni-Travel.jpeg";
import AlumniTravel from "../../assets/MultiGenerationalAlumniTravel/machu-picchu-group-tour-peru-luxury-cultural-travel-experience.jpg";
import AlumniTravel2 from "../../assets/MultiGenerationalAlumniTravel/luxury-travelers-exploring-european-village-cultural-vacation.jpg";
import LoveAlumni from "../../assets/MultiGenerationalAlumniTravel/Love_Alumni_Travel.jpeg";
import LoveAlumni2 from "../../assets/MultiGenerationalAlumniTravel/Love_Alumni_Travel2.jpeg";

// import Mediterian from "../../assets/DonorTravelPrograms/Mediterian.jpg";
import Danube from "../../assets/MultiGenerationalAlumniTravel/EuropeRiver.jpg";
import Britislen from "../../assets/MultiGenerationalAlumniTravel/Britishlens.jpg";
import Alaska from "../../assets/MultiGenerationalAlumniTravel/Alaska.jpg";
import Galapagos from "../../assets/MultiGenerationalAlumniTravel/Galapagos.jpg";

import { Helmet } from "react-helmet-async";

const donorTravelDestinations = [
  {
    id: "alaska",
    title: "Alaska Expedition Cruises",
    badge: "Family Favorite",
    icon: Compass, // Fits exploration and nature themes
    image: Alaska, // Make sure to import this image asset at the top

    desc: "An absolute favorite destination for family groups, offering an accessible yet thrilling frontier context perfect for multi-generational adventure and learning.",

    columns: [
      {
        label: "Highlights include:",
        items: [
          "Wildlife Viewing",
          "Glacier Exploration",
          "Natural Beauty",
          "Educational Opportunities",
        ],
      },
    ],

    themeLabel: "Why Alaska?",
    themeText:
      "Alaska combines immersive outdoor discovery with casual, high-impact environments that make it natural and effortless for families and university supporters to bond.",
  },

  {
    id: "mediterranean",
    title: "Mediterranean Family Cruises",
    badge: "Mediterranean",
    icon: Ship,
    // image: Mediterian,

    desc: "Mediterranean itineraries offer timeless, cross-generational appeal by seamlessly blending foundational history, deep culture, great food, and inherently family-friendly experiences.",

    columns: [
      {
        label: "Popular countries:",
        items: ["Italy", "Greece", "Croatia", "Spain"],
      },
      {
        label: "Combines:",
        items: ["History", "Culture", "Food", "Family-friendly experiences"],
      },
    ],

    themeLabel: "Why the Mediterranean?",
    themeText:
      "A classic configuration that accommodates varying energy and interest levels across generations—from world-class ruins to relaxed coastal lifestyle exploration.",
  },

  {
    id: "river-cruises",
    title: "European River Cruises",
    badge: "River Cruises",
    icon: Waves,
    image: Danube,

    desc: "Increasingly popular among modern family groups looking for immersive educational travel without the logistical friction of changing hotels constantly.",

    columns: [
      {
        label: "Travelers enjoy:",
        items: ["Historic Cities", "Scenic Landscapes", "Cultural Immersion"],
      },
    ],

    themeLabel: "Family River Cruising",
    themeText:
      "The slow pace, historical proximity, and boutique scale of river cruisers create highly stable, intimate environments for family bonding and shared institutional affinity.",
  },

  {
    id: "british-isles",
    title: "British Isles Exploration",
    badge: "Northern Europe",
    icon: Anchor,
    image: Britislen,

    desc: "These itineraries appeal deeply to history enthusiasts, genealogy-focused families digging into personal heritages, and groups pursuing deep cultural exploration.",

    columns: [
      {
        label: "Ideal for:",
        items: [
          "History Enthusiasts",
          "Genealogy Journeys",
          "Cultural Exploration",
        ],
      },
    ],

    themeLabel: "History & Heritage",
    themeText:
      "Perfect for families seeking intellectual enrichment and meaningful deep dives into shared regional narratives alongside university experts.",
  },

  {
    id: "galapagos",
    title: "Galápagos Islands Expeditions",
    badge: "Galapagos",
    icon: MapPin, // Or use a custom animal/island icon if available
    image: Galapagos, // Make sure to import this image asset at the top

    desc: "An exceptional and transformational destination for families looking to witness iconic ecosystems, dynamic biology, and wild habitats up close.",

    columns: [
      {
        label: "Core interests:",
        items: [
          "Active Wildlife",
          "Field Science",
          "Conservation Eco-systems",
          "Pure Exploration",
        ],
      },
    ],

    themeLabel: "Scientific Legacy",
    themeText:
      "Fosters unique spaces where children, parents, and alumni can stand side-by-side with faculty specialists to engage with climate science and wildlife conservation first-hand.",
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
        "Luxury travel agency specializing in multi-generational alumni travel, family alumni cruises, educational travel programs, donor travel experiences, and university travel planning.",
    },

    {
      "@type": "TravelAgency",
      "@id": "https://www.tripsandships.com/#travelagency",
      name: "Trips & Ships Luxury Travel",
      url: "https://www.tripsandships.com",
      description:
        "University travel specialists helping institutions create family-focused alumni travel programs, educational journeys, luxury cruises, and multi-generational travel experiences.",
    },

    {
      "@type": "Person",
      "@id": "https://www.tripsandships.com/#angelahughes",
      name: "Angela Hughes",
      jobTitle: "CEO",
      worksFor: {
        "@id": "https://www.tripsandships.com/#organization",
      },
      description:
        "CEO of Trips & Ships Luxury Travel, Founder of Luxury Travel University, Travel Leaders Network Advisory Board Member, luxury travel educator, international speaker, and travel expert with more than 40 years of experience and travel to over 121 countries.",
    },

    {
      "@type": "WebPage",
      "@id":
        "https://www.tripsandships.com/multi-generational-alumni-travel",
      url:
        "https://www.tripsandships.com/multi-generational-alumni-travel",
      name: "Multi-Generational Alumni Travel",
      description:
        "Discover multi-generational alumni travel programs designed for alumni, children, grandchildren, and families. Strengthen university connections across generations through meaningful travel experiences.",
      isPartOf: {
        "@id": "https://www.tripsandships.com/#website",
      },
      about: {
        "@id": "https://www.tripsandships.com/#travelagency",
      },
    },

    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.tripsandships.com/multi-generational-alumni-travel#breadcrumb",
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
          name: "Multi-Generational Alumni Travel",
          item:
            "https://www.tripsandships.com/multi-generational-alumni-travel",
        },
      ],
    },

    {
      "@type": "FAQPage",
      "@id":
        "https://www.tripsandships.com/multi-generational-alumni-travel#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is multi-generational alumni travel?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Multi-generational alumni travel is a university-sponsored travel experience designed for alumni and their family members across multiple generations, including spouses, children, grandchildren, and extended family.",
          },
        },

        {
          "@type": "Question",
          name: "Who can participate in multi-generational alumni travel programs?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most programs welcome alumni, spouses, children, grandchildren, parents, extended family members, and invited family guests.",
          },
        },

        {
          "@type": "Question",
          name: "Why are multi-generational alumni travel programs becoming popular?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Families increasingly value shared experiences, educational travel opportunities, lifelong learning, and meaningful ways to spend time together while exploring new destinations.",
          },
        },

        {
          "@type": "Question",
          name: "What destinations work best for multi-generational alumni travel?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Popular destinations include Alaska, the Mediterranean, Europe, the British Isles, the Galápagos Islands, and family-friendly cruise itineraries around the world.",
          },
        },

        {
          "@type": "Question",
          name: "Are cruises a good option for multi-generational alumni travel?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Cruises provide convenient travel logistics, activities for different age groups, comfortable accommodations, educational opportunities, and shared family experiences.",
          },
        },

        {
          "@type": "Question",
          name: "Can younger family members participate?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. Many programs are specifically designed to accommodate children and grandchildren through family-friendly activities and educational experiences.",
          },
        },

        {
          "@type": "Question",
          name: "Are educational opportunities included in family alumni travel programs?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most university travel programs incorporate educational enrichment through faculty presentations, destination experts, cultural experiences, and interactive learning opportunities.",
          },
        },

        {
          "@type": "Question",
          name: "How do multi-generational travel programs support alumni engagement?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "These programs strengthen alumni relationships while introducing younger generations to the university community, traditions, values, and lifelong learning opportunities.",
          },
        },

        {
          "@type": "Question",
          name: "Can family travel programs support university advancement goals?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Family travel programs often contribute to stronger alumni engagement, donor stewardship, family philanthropy discussions, and long-term institutional loyalty.",
          },
        },

        {
          "@type": "Question",
          name: "How far in advance should multi-generational travel programs be planned?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most successful programs begin planning 12 to 24 months before departure to secure preferred accommodations, itineraries, and group space.",
          },
        },

        {
          "@type": "Question",
          name: "Can universities customize family travel experiences?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. Programs can be tailored to institutional goals, family demographics, educational objectives, destinations, and engagement priorities.",
          },
        },

        {
          "@type": "Question",
          name: "Why choose Trips & Ships Luxury Travel for multi-generational alumni travel?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Trips & Ships Luxury Travel combines luxury travel expertise, educational travel experience, family travel planning, alumni engagement strategy, and university-focused program development.",
          },
        },

        {
          "@type": "Question",
          name: "How can universities get started with a multi-generational alumni travel program?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A consultation with Trips & Ships Luxury Travel helps identify institutional goals, family audiences, destinations, educational opportunities, and travel program strategies.",
          },
        },

        {
          "@type": "Question",
          name: "What are the benefits of multi-generational alumni travel?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Benefits include stronger family connections, lifelong learning opportunities, enhanced university affinity, alumni engagement, donor relationship building, and lasting shared memories.",
          },
        }
      ],
    },
  ],
};

function FAQ() {
  const [open, setOpen] = useState(null);

  const faqData = [
    {
      q: "What is multi-generational alumni travel?",
      a: "It is a university-sponsored travel experience designed for alumni and their family members across multiple generations.",
    },

    {
      q: "Who can participate in multi-generational alumni travel programs?",
      a: "Most programs welcome alumni, spouses, children, grandchildren, and family guests.",
    },

    {
      q: "Why are multi-generational alumni travel programs becoming popular?",
      a: "Families increasingly value shared experiences and educational travel opportunities.",
    },

    {
      q: "What destinations work best for multi-generational alumni travel?",
      a: "Alaska, the Mediterranean, Europe, the British Isles, and the Galápagos Islands are among the most popular choices.",
    },

    {
      q: "Are cruises a good option for multi-generational alumni travel?",
      a: "Yes. Cruises provide activities, accommodations, and experiences suitable for multiple generations.",
    },

    {
      q: "Can younger family members participate in these travel programs?",
      a: "Absolutely. Many programs are specifically designed to accommodate children and grandchildren.",
    },

    {
      q: "Are educational opportunities included in the programs?",
      a: "Most university travel programs incorporate learning experiences through faculty presentations and destination experts.",
    },

    {
      q: "How do these programs support alumni engagement?",
      a: "They strengthen relationships while introducing younger generations to the university community.",
    },

    {
      q: "Can travel programs support advancement goals?",
      a: "Yes. They often contribute to stronger family engagement and long-term institutional loyalty.",
    },

    {
      q: "How far in advance should multi-generational travel programs be planned?",
      a: "Most successful programs begin planning 12–24 months before departure.",
    },

    {
      q: "Can universities customize family travel experiences?",
      a: "Absolutely. Programs can be tailored to institutional goals, destinations, and participant demographics.",
    },

    {
      q: "Why choose Trips & Ships Luxury Travel?",
      a: "We combine luxury travel expertise, educational travel experience, and university-focused program development.",
    },

    {
      q: "How can universities get started?",
      a: "A consultation helps identify goals, audiences, destinations, and travel opportunities.",
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
const MultiGenerationalAlumniTravel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [readMore, setReadMore] = useState(false);
  const images = [HeroImage1, HeroImage3, HeroImage2];
  const [readMoreList, setReadMoreList] = useState(false);
  const [activeDest, setActiveDest] = useState("antarctica");
  const currentDest =
    donorTravelDestinations.find((d) => d.id === activeDest) ||
    donorTravelDestinations[0];

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
          Multi-Generational Alumni Travel | Family Alumni Travel Programs
        </title>
        <meta
          name="title"
          content="Multi-Generational Alumni Travel for Universities & Alumni Associations"
        />
        <meta
          name="description"
          content="Discover multi-generational alumni travel programs designed for alumni, children, grandchildren, and families. Strengthen university connections across generations through meaningful travel experiences."
        />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>
      <Nav />

      {/* HERO */}
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
            Multi-Generational Alumni Travel: Strengthening University
            Connections Across Generations
          </h1>

          <p>
            The relationship between a university and its alumni often extends
            far beyond graduation.
          </p>

          <p>
            For many families, that connection becomes part of their legacy.
          </p>

          {/* READ MORE CONTENT */}
          {readMore && (
            <>
              <p>
                Parents share stories of campus life with their children.
                Grandparents pass down traditions to grandchildren. Families
                celebrate educational achievements across multiple generations.
              </p>

              <p>
                Multi-generational alumni travel programs provide universities
                with a unique opportunity to strengthen these family connections
                while creating memorable travel experiences that inspire
                lifelong engagement.
              </p>

              <p>
                At Trips &amp; Ships Luxury Travel, we help universities design
                exceptional family-focused travel experiences that bring alumni,
                spouses, children, grandchildren, and friends together through
                meaningful exploration and educational discovery.
              </p>

              <p>
                Led by <strong>Angela Hughes</strong>, a globally recognized
                luxury travel expert, our team specializes in creating journeys
                that connect generations while supporting university engagement
                goals.
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
      {/* ════════════════════════════════════════
    WHAT IS MULTI-GENERATIONAL ALUMNI TRAVEL?
════════════════════════════════════════ */}
      <section className="adg-c-section adg-c-bg-white" id="adg-overview">
        <div className="adg-c-container">
          <div className="adg-c-section-header">
            <span className="adg-c-eyebrow">
              Alumni Travel Program Overview
            </span>

            <h2 className="adg-c-h2">
              What Is Multi-Generational Alumni Travel?
            </h2>

            <div className="adg-c-accent-line"></div>
          </div>

          <div className="adg-c-overview-layout">
            {/* LEFT — list of participants */}
            <div className="adg-c-overview-icons">
              {[
                "Alumni",
                "Spouses",
                "Children",
                "Grandchildren",
                "Parents",
                "Extended Family Members",
                "Family Friends",
              ].map((label, i) => (
                <div key={i} className="adg-c-overview-item">
                  <span className="adg-c-overview-icon">
                    <Check size={16} strokeWidth={2.5} />
                  </span>

                  <span className="adg-c-overview-label">{label}</span>
                </div>
              ))}
            </div>

            {/* RIGHT — callout card + image */}
            <div className="adg-c-overview-right">
              <div className="adg-c-overview-callout">
                <div className="adg-c-overview-callout-inner">
                  <Star size={28} className="adg-c-callout-star" />

                  <p className="adg-c-callout-text">
                    Multi-generational alumni travel refers to
                    university-sponsored travel experiences designed to include
                    multiple generations of a family. These programs allow
                    alumni to share meaningful experiences while introducing
                    younger generations to the university community and its
                    values.
                  </p>
                </div>
              </div>

              <div className="adg-c-overview-image-wrap">
                <img
                  src={AlumniTravel}
                  alt="Multi-generational alumni travel program"
                  className="adg-c-overview-img"
                />

                <div className="adg-c-overview-img-overlay">
                  <span className="adg-c-overview-img-label">
                    Family-Wide Institutional Connections
                  </span>
                </div>
              </div>

              <div
                className="adg-c-overview-callout"
                style={{ marginTop: "20px" }}
              >
                <div className="adg-c-overview-callout-inner">
                  <p
                    className="adg-c-callout-text"
                    style={{ fontSize: "0.95rem", opacity: 0.9 }}
                  >
                    Rather than focusing solely on individual alumni engagement,
                    multi-generational travel helps create deep, lasting
                    family-wide connections to the institution.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ════════════════════════════════════════
    WHY UNIVERSITIES OFFER FAMILY-FOCUSED TRAVEL
═════════════════════════════════════════ */}
      <section className="adg-c-section adg-c-bg-dark" id="adg-why-dining">
        <div className="adg-c-container">
          <div className="adg-c-why-grid">
            {/* LEFT — text */}
            <div className="adg-c-why-left">
              <span className="adg-c-eyebrow adg-c-eyebrow-light">
                Family-Focused Travel Benefits
              </span>

              <h2 className="adg-c-h2 adg-c-h2-light">
                Why Universities Are Offering Family-Focused Travel Programs
              </h2>

              <div className="aac-accent-line aac-accent-white"></div>

              <p className="adg-c-lead adg-c-lead-light">
                Universities increasingly view travel as a strategic engagement
                tool, shifting toward shared family experiences to cultivate
                institutional loyalty.
              </p>

              <p className="adg-c-body adg-c-body-light">
                Multi-generational travel transforms standard outreach by
                inviting the entire family ecosystem into the university
                community. By creating unique opportunities for shared
                discovery, institutions build deeper bonds that resonate across
                age groups.
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
                  These thoughtfully designed experiences weave educational
                  exploration with collective storytelling. By offering
                  intentional programming for travelers of all ages,
                  universities seamlessly foster cross-generational community
                  building, celebrate shared values, and spark the long-term
                  legacy development that ensures future institutional vitality.
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
                  Multi-Generational Travel Supports:
                </span>

                <div className="adg-c-pill-grid">
                  {[
                    "Alumni Engagement",
                    "Donor Stewardship",
                    "Community Building",
                    "Lifelong Learning",
                    "Legacy Development",
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
      {/* ── WHY MULTI-GENERATIONAL TRAVEL IS GROWING ───── */}
      <section
        className="ugt-components-section"
        id="ugt-components"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="Asc-container">
          {/* HEADER */}
          <div className="ugt-components-header">
            <h2 className="adg-c-h2">
              Why Multi-Generational Travel Is Growing
            </h2>

            <div className="adg-c-accent-line"></div>
          </div>

          {/* MAIN CONTENT */}
          <div className="ugt-components-list">
            <div className="ugt-component-row">
              {/* LEFT IMAGE */}
              <div className="ugt-component-image-wrapper">
                <div className="ugt-component-image-container">
                  <img
                    src={AlumniTravel2}
                    alt="Multi-generational alumni travel experience"
                    className="ugt-component-image"
                  />
                </div>
              </div>

              {/* RIGHT CONTENT */}
              <div className="ugt-component-content">
                <p className="ugt-component-text">
                  Family travel has become one of the fastest-growing segments
                  of the travel industry.
                </p>

                <p className="ugt-component-text">
                  Today's travelers increasingly prioritize experiences over
                  material possessions.
                </p>

                <div className="ugt-questions-box">
                  <span className="ugt-questions-title">
                    Many alumni view travel as an opportunity to:
                  </span>

                  <ul className="ugt-questions-list">
                    {[
                      "Spend quality time together",
                      "Create family memories",
                      "Learn together",
                      "Celebrate milestones",
                      "Explore the world",
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
                  Universities are recognizing that these experiences can also
                  strengthen long-term institutional loyalty. When younger
                  family members participate in university travel programs, they
                  often develop a stronger appreciation for the institution and
                  its community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

{/* ── THE BENEFITS OF MULTI-GENERATIONAL ALUMNI TRAVEL ─────────────────────── */}
      <section className="ugt-diff-section" id="ugt-different">
        <div className="ugt-diff-container">
          {/* Header */}
          <div className="ugt-diff-header">
            <h2 className="ugt-diff-title">
              The Benefits of Multi-Generational Alumni Travel
            </h2>

            <div className="adg-c-accent-line"></div>

            <p className="ugt-diff-intro">
              Multi-generational travel transforms standard university
              programming into deeply impactful family milestones, cementing
              institutional loyalty across multiple age groups simultaneously.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="ugt-diff-grid">
            {[
              {
                icon: <HeartHandshake size={28} strokeWidth={1.5} />,
                number: "01",
                title: "Strengthening Family Connections",
                body: "Modern families often live in different cities, states, or countries. Travel provides an invaluable opportunity to reconnect and spend uninterrupted, meaningful time together, creating shared experiences that frequently become treasured family memories.",
              },
              {
                icon: <Users size={28} strokeWidth={1.5} />,
                number: "02",
                title: "Building University Affinity",
                body: "Universities invest significant effort in maintaining alumni engagement. Multi-generational travel expands that engagement beyond the graduate, introducing children and grandchildren directly to the university's distinct culture and community.",
                listItems: [
                  "University traditions",
                  "Academic values",
                  "Lifelong learning opportunities",
                  "Alumni communities",
                ],
              },
              {
                icon: <Award size={28} strokeWidth={1.5} />,
                number: "03",
                title: "Creating Lifelong Memories",
                body: "Unlike traditional alumni events that last only a few hours, immersive travel programs provide days or weeks of shared experiences. These deep, emotional memories often become a structural part of a family's history for years to come.",
              },
              {
                icon: <TrendingUp size={28} strokeWidth={1.5} />,
                number: "04",
                title: "Encouraging Future Participation",
                body: "By serving as a warm, experiential introduction to the broader alumni ecosystem, travel programs inspire younger participants to eventually become active future supporters of university programs, events, and philanthropic initiatives.",
              },
            ].map((card, i) => (
              <div key={i} className="ugt-diff-card">
                <div className="ugt-diff-card-top">
                  <div className="ugt-diff-icon">{card.icon}</div>
                  <span className="ugt-diff-number">{card.number}</span>
                </div>

                <h3 className="ugt-diff-card-title">{card.title}</h3>

                {card.body && <p className="ugt-diff-card-body">{card.body}</p>}

                {card.listItems && (
                  <div style={{ marginTop: "12px" }}>
                    {!readMoreList ? (
                      <button
                        onClick={() => setReadMoreList(true)}
                        style={{
                          background: "none",
                          border: "none",
                          color: "var(--text-primary, #0070f3)", // Use your theme's link color variable
                          cursor: "pointer",
                          fontWeight: "600",
                          fontSize: "0.9rem",
                          padding: 0,
                          display: "flex",
                          alignItems: "center",
                          gap: "4px"
                        }}
                      >
                        Read More - View Pillars
                      </button>
                    ) : (
                      <>
                        <p
                          className="ugt-diff-card-body"
                          style={{
                            marginTop: "0px",
                            marginBottom: "8px",
                            fontWeight: "600",
                          }}
                        >
                          Exposing younger generations to:
                        </p>

                        <ul className="ugt-diff-risk-list">
                          {card.listItems.map((item, index) => (
                            <li key={index} className="ugt-diff-risk-item">
                              <Check size={14} className="ugt-diff-risk-icon" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>

                        <button
                          onClick={() => setReadMoreList(false)}
                          style={{
                            background: "none",
                            border: "none",
                            color: "var(--text-primary, #0070f3)",
                            cursor: "pointer",
                            fontWeight: "600",
                            fontSize: "0.9rem",
                            padding: 0,
                            marginTop: "10px"
                          }}
                        >
                          Show Less
                        </button>
                      </>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EDUCATIONAL VALUE SECTION ───── */}
      <section className="mga-edu-section">
        <div className="mga-edu-container">
          {/* Card 1: Educational Value */}
          <div className="mga-edu-card">
            <div className="mga-card-content">
              <span className="mga-card-eyebrow">Academic Enrichment</span>
              <h2 className="mga-card-title">
                The Educational Value of Multi-Generational Travel
              </h2>
                        <div className="mga-card-accent-line"></div>
              <p className="mga-card-subtitle">
                Universities possess a unique advantage when designing family
                travel programs.
              </p>
    

              <div className="mga-card-lead">
                <span className="mga-lead-badge">Core Advantage</span>
                <span className="mga-lead-text">Educational enrichment.</span>
              </div>

              <p className="mga-features-intro">Programs may include:</p>

              <div className="mga-features-grid">
                {[
                  {
                    title: "Faculty Presentations",
                    desc: "Professors share expertise related to destinations and themes.",
                  },
                  {
                    title: "Interactive Learning",
                    desc: "Activities designed to engage both adults and younger travelers.",
                  },
                  {
                    title: "Cultural Understanding",
                    desc: "Families gain deeper appreciation for global cultures and perspectives.",
                  },
                  {
                    title: "Lifelong Learning Opportunities",
                    desc: "Travel reinforces the value of curiosity and education at every age.",
                  },
                ].map((feat, idx) => (
                  <div key={idx} className="mga-feature-item">
                    <div className="mga-feature-header">
                      <span className="mga-feature-num">0{idx + 1}</span>
                      <h4 className="mga-feature-title">{feat.title}</h4>
                    </div>
                    <p className="mga-feature-desc">{feat.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TYPES OF MULTI-GENERATIONAL ALUMNI TRAVEL */}
      <section className="adg-c-section adg-c-bg-soft" id="adg-donor-programs">
        <div className="adg-c-container">
          <div className="adg-c-section-header">
            <span className="adg-c-eyebrow">
              Multi-Generational Travel Experiences
            </span>

            <h2 className="adg-c-h2">
              Best Types of Multi-Generational Alumni Travel
            </h2>

            <div className="adg-c-accent-line"></div>

            <p className="Asc-section-intro">
              Universities are increasingly designing travel experiences that
              bring multiple generations of alumni families together for shared
              learning, exploration, and connection.
            </p>
          </div>

          <div className="adg-c-venues-grid1">
            {[
              {
                id: 1,
                eyebrow: "Family-Friendly Cruises",
                name: "Cruise Experiences",
                highlight:
                  "Cruises remain one of the most popular travel formats for multi-generational groups, offering convenience, comfort, and activities for all ages.",
                items: [
                  "Activities for all ages",
                  "Convenient travel logistics",
                  "Comfortable accommodations",
                  "Educational opportunities",
                  "Group experiences",
                ],
                callout:
                  "Popular options include ocean cruises, river cruises, and small ship cruises designed for immersive family engagement.",
              },

              {
                id: 2,
                eyebrow: "Cultural Exploration Programs",
                name: "Cultural Journeys",
                highlight:
                  "These experiences combine education and travel through immersive cultural discovery.",
                items: [
                  "Historical sites",
                  "Museums",
                  "Local communities",
                  "Cultural immersion",
                ],
                callout:
                  "Families learn together while exploring new destinations and experiencing global cultures firsthand.",
              },

              {
                id: 3,
                eyebrow: "Educational Travel Experiences",
                name: "Learning-Focused Journeys",
                highlight:
                  "Universities can enhance travel programs with structured educational engagement opportunities.",
                items: [
                  "Faculty lectures",
                  "Destination experts",
                  "Interactive workshops",
                  "Multi-age learning experiences",
                ],
                callout:
                  "These programs create meaningful intellectual engagement for participants of all generations.",
              },

              {
                id: 4,
                eyebrow: "Nature & Adventure Programs",
                name: "Adventure Travel",
                highlight:
                  "Outdoor-focused itineraries appeal to families seeking active and meaningful shared experiences.",
                items: [
                  "Alaska exploration",
                  "National Parks journeys",
                  "Wildlife expeditions",
                  "Small ship adventures",
                ],
                callout:
                  "Adventure travel fosters bonding through shared exploration and unforgettable natural experiences.",
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

      {/* ── DESTINATIONS THAT WORK WELL FOR MULTI-GENERATIONAL ALUMNI TRAVEL ───── */}
      <section className="adg-c-section" id="adg-donor-programs">
        <div className="adg-c-container">
          {/* HEADER */}
          <div className="adg-c-section-header">
            <span className="adg-c-eyebrow">
              Multi-Generational Travel Destinations
            </span>

            <h2 className="adg-c-h2">
              Destinations That Work Well for Multi-Generational Alumni Travel
            </h2>

            <div className="adg-c-accent-line"></div>

            <p className="luc-destinations-intro">
              These destinations are especially well-suited for
              multi-generational alumni travel, offering a balance of education,
              exploration, and shared family experiences.
            </p>
          </div>

          {/* Layout */}
          <div className="luc-dest-layout">
            {/* Sidebar nav */}
            <nav className="luc-dest-nav">
              {donorTravelDestinations.map((item) => {
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
              {/* Image */}
              <div className="luc-dest-img-wrap">
                <img
                  src={currentDest.image}
                  alt={currentDest.title}
                  className="luc-dest-img"
                />

                <div className="luc-dest-img-overlay">
                  <span className="luc-dest-img-title">
                    {currentDest.title}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="luc-dest-panel-desc">{currentDest.desc}</p>

              {/* Dynamic content columns */}
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

              {/* Theme Note */}
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

      {/* ── WHY FAMILIES LOVE ALUMNI TRAVEL PROGRAMS ───── */}
      <section className="luc-why-section" id="luc-why">
        <div className="luc-why-container">
          {/* LEFT — stacked images */}
          <div className="luc-why-images">
            <div className="luc-why-img-main-wrap">
              <img
                src={LoveAlumni}
                alt="Alumni family travel experience"
                className="luc-why-img-main"
              />
              <div className="luc-why-img-overlay"></div>
            </div>

            <div className="luc-why-img-accent-wrap">
              <img
                src={LoveAlumni2}
                alt="Family alumni travel experience"
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
              Why Families Love Alumni Travel Programs
            </h2>

            <div className="aac-accent-line aac-accent-white"></div>

            <p className="luc-why-intro">Participants consistently value:</p>

            <div className="luc-why-features">
              <div className="luc-why-feature">
                <div className="luc-why-feature-num">01</div>

                <div className="luc-why-feature-body">
                  <h3 className="luc-why-feature-title">Shared Experiences</h3>
                  <p className="luc-why-feature-desc">
                    Meaningful moments with loved ones across generations.
                  </p>
                </div>
              </div>

              <div className="luc-why-feature">
                <div className="luc-why-feature-num">02</div>

                <div className="luc-why-feature-body">
                  <h3 className="luc-why-feature-title">
                    Educational Enrichment
                  </h3>
                  <p className="luc-why-feature-desc">
                    Learning opportunities not found in traditional vacations.
                  </p>
                </div>
              </div>

              <div className="luc-why-feature">
                <div className="luc-why-feature-num">03</div>

                <div className="luc-why-feature-body">
                  <h3 className="luc-why-feature-title">
                    Community Connections
                  </h3>
                  <p className="luc-why-feature-desc">
                    Meeting fellow alumni families and building lifelong
                    relationships.
                  </p>
                </div>
              </div>

              <div className="luc-why-feature">
                <div className="luc-why-feature-num">04</div>

                <div className="luc-why-feature-body">
                  <h3 className="luc-why-feature-title">Exclusive Access</h3>
                  <p className="luc-why-feature-desc">
                    Unique experiences organized through university
                    partnerships.
                  </p>
                </div>
              </div>

              <div className="luc-why-feature">
                <div className="luc-why-feature-num">05</div>

                <div className="luc-why-feature-body">
                  <h3 className="luc-why-feature-title">Stress-Free Travel</h3>
                  <p className="luc-why-feature-desc">
                    Professional planning and support throughout the journey.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* VIDEO SECTION */}
      {/* <section
        className="Asc-video-section"
        id="Asc-video"
        style={{ backgroundColor: "var(--navy-soft)" }}
      >
        <div className="Asc-container">
          <div className="Asc-section-header">
            <h2 className="Asc-h2">Closer to the World with Azamara</h2>
            <div className="Asc-accent-line"></div>

            <p className="Asc-video-intro">
              Experience how Azamara’s smaller ships, longer stays, and
              immersive journeys create more meaningful connections with the
              world. Discover destinations in a more personal, authentic, and
              unhurried way — where every horizon feels closer.
            </p>
          </div>

          <div className="Asc-video-wrapper">
            <div className="Asc-video-frame">
              <iframe
                src="https://www.youtube.com/embed/GQj8QXkJeik"
                title="Closer to the World with Azamara"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section> */}
      {/* VIDEO SECTION */}
      {/* <section
        className="Asc-video-section"
        id="Asc-video"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="Asc-container">
          <div className="Asc-section-header">
            <h2 className="Asc-h2">Lens of a Local: Pasta Making in Italy</h2>

            <div className="Asc-accent-line"></div>

            <p className="Asc-video-intro">
              Experience Azamara’s immersive destination-focused travel through
              this authentic pasta-making journey in Civitavecchia, Italy, where
              local culture, culinary traditions, and meaningful travel
              experiences come together beyond the typical cruise itinerary.
            </p>
          </div>

          <div className="Asc-video-wrapper">
            <div className="Asc-video-frame">
              <iframe
                src="https://www.youtube.com/embed/VUWKldvItdU"
                title="Azamara's Lens of a Local: Pasta Making in Civitavecchia, Italy"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section> */}
      {/* ── MULTI-GENERATIONAL TRAVEL AND UNIVERSITY ADVANCEMENT ───────────────────────────── */}
      <section className="ugt-advantage-section" id="ugt-advantage">
        <div className="ugt-advantage-container">
          <div className="ugt-advantage-header">
            <span className="ugt-advantage-eyebrow">
              Program Evaluation & Advancement Impact
            </span>

            <h2 className="ugt-advantage-title">
              Multi-Generational Travel and University Advancement
            </h2>

            <div className="Asc-accent-line"></div>

            <p className="ugt-advantage-intro">
              Family travel programs can also support advancement objectives.
            </p>

            <h3 className="ugt-approach-title">Benefits include:</h3>
          </div>

          <div className="ugt-advantage-grid">
            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <Users size={28} strokeWidth={1.5} />
              </div>

              <h4 className="ugt-card-title">Strongest Alumni Relationships</h4>

              <p className="ugt-card-desc">
                Meaningful travel experiences deepen engagement.
              </p>
            </div>

            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <HeartHandshake size={28} strokeWidth={1.5} />
              </div>

              <h4 className="ugt-card-title">
                Family Philanthropy Opportunities
              </h4>

              <p className="ugt-card-desc">
                Travel often encourages discussions about family values and
                institutional support.
              </p>
            </div>

            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <Award size={28} strokeWidth={1.5} />
              </div>

              <h4 className="ugt-card-title">Legacy Building</h4>

              <p className="ugt-card-desc">
                Families develop stronger emotional connections to the
                university.
              </p>
            </div>

            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <Repeat size={28} strokeWidth={1.5} />
              </div>

              <h4 className="ugt-card-title">Long-Term Engagement</h4>

              <p className="ugt-card-desc">
                Younger generations become familiar with the university
                community.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* ── COMMON DONOR TRAVEL PROGRAM MISTAKES ───────────────────────── */}
      <section className="Lfsg-section Lfsg-bg-dark" id="Lfsg-challenges">
        <div className="Lfsg-container">
          <div className="Lfsg-section-header">
            <h2 className="Lfsg-h2-white">
              Common Mistakes Universities Make With Multi-Generational Alumni
              Travel
            </h2>

            <div className="Lfsg-accent-line-white" />
          </div>

          <div className="Lfsg-mistakes-grid">
            {[
              {
                title: "Focusing Only on Alumni",
                desc: "Successful programs create value for every generation.",
              },

              {
                title: "Choosing Destinations Without Family Appeal",
                desc: "Programs should balance educational enrichment with family-friendly experiences.",
              },

              {
                title: "Ignoring Different Age Groups",
                desc: "Activities should accommodate a variety of interests and abilities.",
              },

              {
                title: "Underestimating Planning Complexity",
                desc: "Family travel programs require careful logistical coordination.",
              },

              {
                title: "Lack of Educational Programming",
                desc: "Universities have a unique opportunity to enhance travel through learning experiences.",
              },
            ].map((item, i) => (
              <div key={i} className="Lfsg-mistake-card">
                <div className="Lfsg-mistake-number">
                  {String(i + 1).padStart(2, "0")}
                </div>

                <h4 className="Lfsg-mistake-title">{item.title}</h4>

                <p className="Lfsg-mistake-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* WHO SHOULD CHOOSE */}
      <section className="Asc-section Asc-bg-soft" id="Asc-who">
        <div className="Asc-container">
          <div className="Asc-section-header">
            <h2 className="Asc-h2">
              {" "}
              Who Are Multi-Generational <br /> Alumni Travel Programs Best For?
            </h2>

            <div className="Asc-accent-line"></div>
          </div>

          <div className="Asc-who-grid">
            <div className="Asc-who-card Asc-who-yes">
              <h3 className="Asc-who-title">Best For</h3>

              <ul className="Asc-who-list">
                {[
                  "Alumni associations",
                  "Advancement departments",
                  "Family alumni programs",
                  "Donor stewardship initiatives",
                  "Lifelong learning organizations",
                  "Legacy and family engagement programs",
                  "Multi-generational travelers",
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
                  "Travelers seeking independent travel experiences",
                  "Budget-focused programs",
                  "Institutions without family engagement objectives",
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
      {/* ════════════════════════════════════════
WHY UNIVERSITIES CHOOSE TRIPS & SHIPS LUXURY TRAVEL
════════════════════════════════════════ */}
      <section
        className="adg-c-section adg-c-bg-dark"
        id="adg-university-travel"
      >
        <div className="adg-c-container">
          <div className="adg-c-why-grid">
            {/* LEFT — text */}
            <div className="adg-c-why-left">
              <span className="adg-c-eyebrow adg-c-eyebrow-light">
                University Advancement Travel Specialists
              </span>
              <h2 className="adg-c-h2 adg-c-h2-light">
                Why Universities Choose Trips &amp; Ships Luxury Travel
              </h2>

              <div className="aac-accent-line aac-accent-white"></div>

              <p className="adg-c-lead adg-c-lead-light">
                Trips &amp; Ships Luxury Travel helps universities create family
                travel experiences that strengthen relationships across
                generations.
              </p>

              <p className="adg-c-body adg-c-body-light">
                We provide multigenerational educational travel programs that
                align with your institutional goals and connect participants
                with top-tier global suppliers. Every journey offers meaningful
                learning opportunities for all ages, backed by comprehensive
                support before, during, and after your trip.
              </p>
            </div>

            {/* RIGHT — pill grid */}
            <div className="adg-c-why-right">
              <div className="adg-c-why-card">
                <span className="adg-c-why-card-label">
                  Our expertise includes:
                </span>

                <div className="adg-c-pill-grid">
                  {[
                    "Family Travel Planning",
                    "Luxury Cruise and Tour Expertise",
                    "Educational Integration",
                    "Alumni Engagement Strategy",
                    "White-Glove Service",
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
      {/* WHY TRIPS & SHIPS LUXURY TRAVEL */}
      <section className="Adg-expert-section" id="Asc-expert-insight">
        <div className="Asc-container">
          {/* TOP HEADING */}
          <div className="Adg-expert-heading">
            <span className="Adg-expert-eyebrow">
              University Travel Leadership
            </span>

            <h2 className="Adg-expert-title">
              Angela Hughes: A Global Expert in Luxury and Family Travel
            </h2>

            <div className="Adg-expert-divider"></div>
          </div>

          {/* MAIN GRID */}
          <div className="Adg-expert-grid">
            {/* LEFT SIDE */}
            <div className="Adg-expert-image-col">
              <div className="Adg-expert-portrait-wrap">
                <img
                  src={AboutImage}
                  alt="Angela Hughes - Luxury and Family Travel Expert"
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
              {/* INTRO */}
              <div className="Adg-expert-quote-box">
                <div className="Adg-expert-quote-icon">
                  <Quote size={36} />
                </div>

                <blockquote className="Adg-expert-quote-text">
                  Universities benefit from Angela Hughes' extensive travel
                  industry experience.
                </blockquote>
              </div>

              {/* CREDENTIALS */}
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
                    "International travel educator and speaker",
                    "Luxury Travel Influencer of the Year",
                    "Weekly travel columnist",
                    "Recognized among the industry's most influential leaders",
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

              {/* BOTTOM NOTE */}
              <div
                className="Adg-expert-quote-box"
                style={{ marginTop: "24px" }}
              >
                <blockquote className="Adg-expert-quote-text">
                  Her expertise helps institutions confidently create
                  exceptional travel experiences for alumni families.
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ */}
      <section className="Asc-section Asc-bg-white" id="Asc-faq">
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

      {/* CTA */}
      <section className="Asc-help-section">
        <div className="Asc-help-bg-wrap">
          <img
            src={CTAImage}
            alt="Multi-Generational Alumni Travel Experience"
            className="Asc-help-bg-img"
          />
          <div className="Asc-help-overlay"></div>
        </div>

        <div className="Asc-container">
          <div className="Asc-help-card">
            <div className="Asc-help-content">
              <div className="Asc-help-header">
                <span className="Asc-help-eyebrow">
                  Multi-Generational Alumni Travel Programs
                </span>

                <h2 className="Asc-help-h2">
                  Create Family Travel Experiences That Inspire Lifelong
                  Connections
                </h2>

                <div className="Asc-help-accent"></div>
              </div>

              <div className="Asc-help-grid">
                <div className="Asc-help-info">
                  <p className="Asc-help-intro">
                    Multi-generational alumni travel allows universities to
                    expand engagement beyond individual graduates and create
                    meaningful connections that span entire families.
                  </p>

                  <p className="Asc-help-intro">
                    By combining travel, education, and shared experiences,
                    institutions can strengthen alumni relationships, build
                    future engagement opportunities, and create memories that
                    last for generations.
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
                      With Angela Hughes' expertise and Trips &amp; Ships Luxury
                      Travel's proven planning process, your university can
                      develop family travel programs that deliver lasting value
                      for both travelers and the institution.
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
                      Start Planning Your Family Travel Program
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>

                <div className="Asc-help-list-box">
                  <h3 className="Asc-help-list-title">
                    Benefits of Multi-Generational Alumni Travel:
                  </h3>

                  <ul className="Asc-help-bullets">
                    {[
                      "Shared experiences across generations",
                      "Stronger alumni and family engagement",
                      "Enhanced institutional loyalty and affinity",
                      "Educational enrichment for all age groups",
                      "Long-term relationship building with future donors",
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
                    designing your custom multi-generational alumni travel
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

export default MultiGenerationalAlumniTravel;
