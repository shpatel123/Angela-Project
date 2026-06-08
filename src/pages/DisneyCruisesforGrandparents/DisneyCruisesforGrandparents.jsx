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
  Repeat,
  Compass,
  MessageCircle,
  CalendarDays,
  DoorOpen,
  Palmtree,
  Umbrella,
  Mountain,
  Landmark,
} from "lucide-react"; 
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela2.jpeg";
// import HeroImage1 from "../../assets/MultiGenerationalAlumniTravel/university-historic-campus-clock-tower-academic-building.jpg.jpg";
// import HeroImage2 from "../../assets/MultiGenerationalAlumniTravel/historic-university-campus-entrance-academic-landmark-education.jpg";
// import HeroImage3 from "../../assets/MultiGenerationalAlumniTravel/alumni-university-campus-community-aerial-view.jpg";
// import CTAImage from "../../assets/MultiGenerationalAlumniTravel/Partner-With-Travel.jpeg";
// import AlumniTravel from "../../assets/MultiGenerationalAlumniTravel/Luxury-Travel-Expertise.jpeg";
// import AlumniTravel2 from "../../assets/MultiGenerationalAlumniTravel/luxury-travelers-exploring-european-village-cultural-vacation.jpg";
// import AlumniTravel3 from "../../assets/MultiGenerationalAlumniTravel/Travelers.jpeg";
// import Personalized from "../../assets/MultiGenerationalAlumniTravel/Personalized-Service.jpeg";
// import LoveAlumni from "../../assets/MultiGenerationalAlumniTravel/Love_Alumni_Travel.jpeg";
// import LoveAlumni2 from "../../assets/MultiGenerationalAlumniTravel/Universities.jpeg";

// import FamilySuitesImg from "../../assets/ExploraJourneysCruises/Luxury-Oceanfront-Suites.webp";
// import FamilyDiningImg from "../../assets/AzamaraDiningGuide/AzamaraWithFamiles.webp";

import { Helmet } from "react-helmet-async";

const disneyDestinations = [
  {
    id: "caribbean",
    title: "Caribbean Cruises",
    badge: "Caribbean",
    icon: Palmtree,
    // image: CaribbeanImage,

    desc: "Among Disney's most popular itineraries, Caribbean cruises offer the perfect combination of relaxation, family fun, and tropical destinations for travelers of all ages.",

    columns: [
      {
        label: "Families Enjoy:",
        items: [
          "Warm Weather",
          "Beautiful Beaches",
          "Relaxation",
          "Family-Friendly Excursions",
        ],
      },
    ],

    themeLabel: "Family Travel Highlight",
    themeText:
      "The Caribbean offers an ideal blend of relaxation, adventure, and family-friendly experiences that appeal to grandparents, parents, and children alike.",
  },

  {
    id: "bahamas",
    title: "Bahamas Cruises",
    badge: "Bahamas",
    icon: Umbrella,
    // image: BahamasImage,

    desc: "Perfect for shorter family getaways, Bahamas cruises deliver Disney magic with convenient itineraries and unforgettable island experiences.",

    columns: [
      {
        label: "Highlights Include:",
        items: [
          "Disney Private Island",
          "Beautiful Beaches",
          "Family Activities",
          "Relaxed Atmosphere",
        ],
      },
      {
        label: "Perfect For:",
        items: [
          "First-Time Cruisers",
          "Weekend Getaways",
          "Family Celebrations",
          "Multi-Generational Groups",
        ],
      },
    ],

    themeLabel: "Family Travel Highlight",
    themeText:
      "Bahamas itineraries provide a convenient and enjoyable introduction to Disney cruising for families traveling together.",
  },

  {
    id: "alaska",
    title: "Alaska Cruises",
    badge: "Alaska",
    icon: Mountain,
    // image: AlaskaImage,

    desc: "An outstanding choice for educational family travel, Alaska combines breathtaking scenery with enriching experiences that appeal across generations.",

    columns: [
      {
        label: "Families Can Experience:",
        items: [
          "Wildlife Viewing",
          "Glaciers",
          "Nature Exploration",
          "Cultural Learning",
        ],
      },
    ],

    themeLabel: "Educational Family Travel",
    themeText:
      "Alaska offers meaningful opportunities for learning, exploration, and shared family experiences in one of the world's most spectacular natural environments.",
  },

  {
    id: "mediterranean",
    title: "Mediterranean Cruises",
    badge: "Mediterranean",
    icon: Landmark,
    // image: MediterraneanImage,

    desc: "Mediterranean cruises combine family adventure with cultural discovery, making them ideal for travelers interested in history, food, and exploration.",

    columns: [
      {
        label: "Ideal For Families Interested In:",
        items: ["History", "Culture", "Food", "Exploration"],
      },
    ],

    themeLabel: "Cultural Discovery",
    themeText:
      "Mediterranean cruises blend educational opportunities with unforgettable family adventures, creating experiences that appeal to every generation.",
  },
];

const disneyShips = [
  {
    name: "Disney Wish",
    subtitle: "One of Disney's newest ships, offering:",
    features: [
      "Family-friendly staterooms",
      "Modern amenities",
      "Exceptional dining",
      "Immersive storytelling",
    ],
    highlight: "Ideal for first-time Disney cruisers.",
  },
  {
    name: "Disney Treasure",
    subtitle:
      "Designed around adventure and exploration. Popular with families seeking:",
    features: [
      "New Disney experiences",
      "Family entertainment",
      "Modern accommodations",
    ],
    highlight: "Designed for immersive, adventure-loving families.",
  },
  {
    name: "Disney Fantasy",
    subtitle: "A favorite for longer family vacations. Highlights include:",
    features: [
      "Spacious public areas",
      "Family activities",
      "Multi-generational appeal",
    ],
    highlight: "Highly popular for extended multi-gen journeys.",
  },
  {
    name: "Disney Dream",
    subtitle:
      "Excellent for shorter cruise experiences and first-time Disney travelers.",
    features: [
      "Convenient short-duration itineraries",
      "Classic art deco-inspired design",
      "Spectacular Broadway-style deck shows",
    ],
    highlight: "Perfect for a quick, premium getaway.",
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
        "Luxury travel agency specializing in university travel programs, alumni cruises, donor travel programs, educational travel, and luxury group travel experiences.",
    },

    {
      "@type": "TravelAgency",
      "@id": "https://www.tripsandships.com/#travelagency",
      name: "Trips & Ships Luxury Travel",
      url: "https://www.tripsandships.com",
      description:
        "Trusted university travel partner providing alumni travel programs, donor travel experiences, educational travel planning, luxury cruises, and customized group travel solutions.",
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
        "CEO of Trips & Ships Luxury Travel, Founder of Luxury Travel University, Travel Leaders Network Advisory Board Member, luxury travel educator, international speaker, columnist, and travel expert with more than 40 years of experience and travel to over 121 countries.",
    },

    {
      "@type": "WebPage",
      "@id":
        "https://www.tripsandships.com/why-trips-and-ships-luxury-travel-for-universities",
      url: "https://www.tripsandships.com/why-trips-and-ships-luxury-travel-for-universities",
      name: "Why Trips & Ships Luxury Travel for Universities",
      description:
        "Discover why universities, alumni associations, advancement offices, and lifelong learning organizations choose Trips & Ships Luxury Travel for alumni cruises, donor travel programs, educational travel, and luxury group experiences.",
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
        "https://www.tripsandships.com/why-trips-and-ships-luxury-travel-for-universities#breadcrumb",
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
          name: "Why Trips & Ships Luxury Travel for Universities",
          item: "https://www.tripsandships.com/why-trips-and-ships-luxury-travel-for-universities",
        },
      ],
    },

    {
      "@type": "FAQPage",
      "@id":
        "https://www.tripsandships.com/why-trips-and-ships-luxury-travel-for-universities#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Why do universities choose Trips & Ships Luxury Travel?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Universities choose Trips & Ships Luxury Travel because we understand alumni engagement, donor relations, educational travel, luxury travel planning, and the unique objectives of higher education institutions.",
          },
        },

        {
          "@type": "Question",
          name: "What types of travel programs do you manage?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We manage alumni cruises, donor travel programs, educational tours, river cruises, expedition cruises, small ship cruises, faculty-led travel programs, and custom university travel experiences.",
          },
        },

        {
          "@type": "Question",
          name: "How is Trips & Ships Luxury Travel different from a traditional travel agency?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Unlike traditional travel agencies, we focus on strategic travel experiences that support university engagement, alumni relations, donor stewardship, lifelong learning, and advancement objectives.",
          },
        },

        {
          "@type": "Question",
          name: "Can university travel programs be customized?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. Every travel program is customized based on institutional goals, audience demographics, educational objectives, travel preferences, and engagement priorities.",
          },
        },

        {
          "@type": "Question",
          name: "Do you help with donor travel programs?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Donor engagement and stewardship travel programs are among our specialties, helping institutions strengthen relationships and support advancement initiatives.",
          },
        },

        {
          "@type": "Question",
          name: "Can faculty participate in university travel programs?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Faculty participation is highly encouraged and often enhances the educational value of travel experiences through lectures, discussions, and destination-specific expertise.",
          },
        },

        {
          "@type": "Question",
          name: "What destinations are most popular for university travel programs?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Europe, Alaska, Antarctica, the Mediterranean, river cruise regions, the Galápagos Islands, and culturally rich destinations consistently perform well for university travel programs.",
          },
        },

        {
          "@type": "Question",
          name: "How far in advance should university travel planning begin?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most successful university travel programs begin planning 12 to 24 months before departure to secure preferred itineraries, accommodations, and group space.",
          },
        },

        {
          "@type": "Question",
          name: "Do you provide traveler support?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. We provide comprehensive traveler support before, during, and after travel, ensuring a seamless and enjoyable experience for participants.",
          },
        },

        {
          "@type": "Question",
          name: "Can travel programs support fundraising goals?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Travel experiences often strengthen alumni and donor relationships, creating opportunities that contribute to long-term advancement and fundraising success.",
          },
        },

        {
          "@type": "Question",
          name: "Why is Angela Hughes involved in university travel programs?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Angela Hughes brings more than 40 years of travel industry experience, expertise gained from visiting over 121 countries, and a deep commitment to educational travel and exceptional service.",
          },
        },

        {
          "@type": "Question",
          name: "What is the first step to working with Trips & Ships Luxury Travel?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The first step is a consultation to understand your institution's goals, audience, travel objectives, and opportunities for creating a successful travel program.",
          },
        },

        {
          "@type": "Question",
          name: "What makes Trips & Ships Luxury Travel a trusted university travel partner?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Our university-focused expertise, luxury travel specialization, educational travel experience, donor engagement knowledge, strong supplier relationships, and personalized service make us a trusted partner for higher education institutions.",
          },
        },

        {
          "@type": "Question",
          name: "What benefits do universities gain from partnering with Trips & Ships Luxury Travel?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Universities gain expert planning, enhanced alumni engagement, stronger donor relationships, educational enrichment, reduced administrative burden, and access to world-class travel experiences.",
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
      q: "Are Disney Cruises good for grandparents?",
      a: "Yes. Disney Cruises offer comfort, convenience, family-friendly experiences, and activities that appeal to all generations.",
    },

    {
      q: "Can grandparents travel alone with grandchildren?",
      a: "Yes. Many grandparents take Disney Cruises with grandchildren, though travel documentation requirements should be reviewed before departure.",
    },

    {
      q: "Which Disney ship is best for multigenerational families?",
      a: "Disney Wish, Disney Treasure, Disney Fantasy, and Disney Dream are all excellent choices depending on itinerary and family preferences.",
    },

    {
      q: "Are Disney Cruises suitable for older adults?",
      a: "Absolutely. Ships offer comfortable accommodations, accessible facilities, entertainment, dining, and relaxation opportunities.",
    },

    {
      q: "Do Disney Cruises offer activities for grandparents?",
      a: "Yes. Adults can enjoy spas, lounges, specialty dining, live entertainment, educational experiences, and scenic cruising.",
    },

    {
      q: "Are connecting rooms available?",
      a: "Yes. Disney offers connecting staterooms and family-friendly accommodation options.",
    },

    {
      q: "What destinations are best for families?",
      a: "The Caribbean, Bahamas, Alaska, and Mediterranean are among the most popular Disney Cruise destinations.",
    },

    {
      q: "Is Disney Cruise Line worth the cost?",
      a: "Many families believe the quality of service, entertainment, family experiences, and convenience justify the premium pricing.",
    },

    {
      q: "Can grandparents and grandchildren spend time together while parents relax?",
      a: "Absolutely. Disney provides numerous activities that encourage shared family experiences.",
    },

    {
      q: "How far in advance should we book?",
      a: "Most Disney Cruises should be booked as early as possible, particularly during school holidays and peak travel seasons.",
    },

    {
      q: "Why use a travel advisor?",
      a: "A travel advisor helps families select the right ship, itinerary, accommodations, and planning strategy.",
    },

    {
      q: "Why choose Trips & Ships Luxury Travel?",
      a: "We help families create stress-free, memorable cruise experiences tailored to their unique needs.",
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
const DisneyCruisesforGrandparents = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [readMore, setReadMore] = useState(false);
  const images = [];
  const [activeDest, setActiveDest] = useState("antarctica");
  const currentDest =
    disneyDestinations.find((d) => d.id === activeDest) ||
    disneyDestinations[0];

  const ActiveIcon = currentDest.icon;

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
          Disney Cruises for Grandparents & Multigenerational Families | Family
          Cruise Planning
        </title>
        <meta
          name="title"
          content="Disney Cruises for Grandparents, Children & Grandchildren"
        />
        <meta
          name="description"
          content="Discover why Disney Cruises are one of the best vacation choices for grandparents, parents, children, and grandchildren. Explore family-friendly itineraries, activities, accommodations, and planning tips for multigenerational travel."
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
            Why Disney Cruises Are Perfect for Grandparents &amp;
            Multigenerational Families
          </h1>

          <p>
            Few travel experiences bring families together quite like a Disney
            Cruise.
          </p>

          <p>
            For grandparents traveling with children and grandchildren, Disney
            Cruise Line offers a unique combination of family bonding,
            convenience, entertainment, and unforgettable shared experiences.
          </p>

          {/* READ MORE CONTENT */}
          {readMore && (
            <>
              <p>
                Unlike many vacations where different generations want different
                things, Disney Cruises are specifically designed to create
                experiences everyone can enjoy together while still allowing
                each family member to pursue their own interests.
              </p>

              <p>
                Grandparents can relax, parents can unwind, children can
                explore, and families can create lifelong memories together.
              </p>

              <p>
                At Trips &amp; Ships Luxury Travel, we help families plan Disney
                Cruise vacations that maximize family time while minimizing
                stress, creating extraordinary experiences that grandparents,
                parents, and grandchildren will remember for years to come.
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
    WHY UNIVERSITIES NEED SPECIALIZED EXPERTISE
═════════════════════════════════════════ */}
      <section className="adg-c-section adg-c-bg-dark" id="adg-why-dining">
        <div className="adg-c-container">
          <div className="adg-c-why-grid">
            {/* LEFT — text */}
            <div className="adg-c-why-left">
              <span className="adg-c-eyebrow adg-c-eyebrow-light">
                Family Travel Trends
              </span>
              <h2 className="adg-c-h2 adg-c-h2-light">
                Why Multigenerational Travel Is Growing
              </h2>
              <div className="aac-accent-line aac-accent-white"></div>
              <p className="adg-c-lead adg-c-lead-light">
                Today's families are increasingly choosing experiences over
                possessions.
              </p>
              <p className="adg-c-body adg-c-body-light">
                Rather than exchanging gifts, many families are investing in
                shared adventures that create lasting memories.
              </p>{" "}
              <br />
              <p className="adg-c-body adg-c-body-light">
                Multigenerational travel has become one of the fastest-growing
                segments of the travel industry because it allows families to
                reconnect, celebrate milestones, and spend meaningful time
                together across generations.
              </p>
            </div>

            {/* RIGHT — pill grid */}
            <div className="adg-c-why-right">
              <div className="adg-c-why-card">
                <span className="adg-c-why-card-label">
                  Multigenerational Travel Allows Families To:
                </span>

                <div className="adg-c-pill-grid">
                  {[
                    "Grandparents to Spend Quality Time with Grandchildren",
                    "Parents to Reconnect with Extended Family",
                    "Children to Create Unforgettable Memories",
                    "Families to Celebrate Milestones Together",
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

      {/* VIDEO SECTION */}
      <section
        className="azs-video-section"
        id="azs-video"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="azs-container">
          <div className="azs-section-header">
            <h2 className="azs-h2">Disney's Pop Century Resort</h2>
            <div className="azs-accent-line"></div>

            <p className="azs-video-intro">
              Take a trip through the decades at Disney’s Pop Century Resort,
              where bold colors, larger-than-life Disney icons, and nostalgic
              fun celebrate the most memorable trends from the 1950s through the
              1990s.
            </p>
          </div>

          <div className="azs-video-wrapper">
            <div className="azs-video-frame">
              <iframe
                src="https://www.youtube.com/embed/vlvAg8vB-4o"
                title="Disney's Pop Century Resort Tour"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT MAKES DISNEY IDEAL FOR GRANDPARENTS */}
      <section className="dfg-ideal-section" id="dfg-ideal-grandparents">
        <div className="dfg-container">
          <div className="dfg-section-header">
            <span className="dfg-eyebrow">Multigenerational Travel Solved</span>
            <h2 className="dfg-section-title">
              What Makes Disney Cruises Ideal for Grandparents?
            </h2>
            <div className="dfg-accent-line"></div>
            <p className="dfg-section-subtitle">
              Traveling with multiple generations can be challenging. Disney
              Cruise Line solves many common family travel problems by bringing
              accommodations, dining, entertainment, and transportation together
              in one seamless experience.
            </p>
          </div>

          <div className="dfg-grid">
            {/* Card 1: Vacation Your Own Way */}
            <div className="dfg-card dfg-way-card">
              <div className="dfg-card-header">
                <div className="dfg-card-icon-wrap">
                  <Users size={24} />
                </div>
                <h3>Everyone Can Vacation Their Own Way</h3>
              </div>
              <p className="dfg-card-desc">
                One of Disney's greatest strengths is its ability to appeal to
                every age group.
              </p>

              <div className="dfg-split-lists">
                <div className="dfg-list-group">
                  <span className="dfg-list-label">Grandparents Enjoy:</span>
                  <ul className="dfg-list">
                    {[
                      "Relaxing lounges",
                      "Fine dining",
                      "Adult-only spaces",
                      "Spa treatments",
                      "Scenic ocean views",
                    ].map((item, i) => (
                      <li key={i}>
                        <Check size={14} className="dfg-check-icon" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="dfg-list-group">
                  <span className="dfg-list-label">Grandchildren Enjoy:</span>
                  <ul className="dfg-list">
                    {[
                      "Disney characters",
                      "Kids clubs",
                      "Water slides",
                      "Youth activities",
                      "Interactive experiences",
                    ].map((item, i) => (
                      <li key={i}>
                        <Check size={14} className="dfg-check-icon" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <p className="dfg-card-footer-text">
                The entire family comes together when desired while still
                enjoying personal time.
              </p>
            </div>

            {/* Card 2: No Constant Packing */}
            <div className="dfg-card dfg-packing-card">
              <div className="dfg-card-header">
                <div className="dfg-card-icon-wrap">
                  <Repeat size={24} />
                </div>
                <h3>No Constant Packing and Unpacking</h3>
              </div>
              <p className="dfg-card-desc">
                Traditional family vacations often involve multiple hotels,
                transportation arrangements, and complicated logistics.
              </p>

              <div className="dfg-list-group dfg-full-list">
                <span className="dfg-list-label">On a Disney Cruise:</span>
                <ul className="dfg-list">
                  {[
                    "Unpack once",
                    "Visit multiple destinations",
                    "Enjoy seamless travel",
                    "Keep the family together",
                  ].map((item, i) => (
                    <li key={i}>
                      <Check size={14} className="dfg-check-icon" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="dfg-card-footer-text dfg-footer-highlight">
                This convenience is especially valuable for grandparents.
              </p>
            </div>

            {/* Card 3: Family Time Without Stress */}
            <div className="dfg-card dfg-stress-card">
              <div className="dfg-card-header">
                <div className="dfg-card-icon-wrap">
                  <HeartHandshake size={24} />
                </div>
                <h3>Family Time Without the Stress</h3>
              </div>
              <p className="dfg-card-desc">
                Disney handles many of the details that can make family travel
                overwhelming.
              </p>

              <div className="dfg-list-group dfg-full-list">
                <span className="dfg-list-label">Families Enjoy:</span>
                <ul className="dfg-list">
                  {[
                    "Organized activities",
                    "Simplified dining",
                    "Family-friendly excursions",
                    "Entertainment for all ages",
                  ].map((item, i) => (
                    <li key={i}>
                      <Check size={14} className="dfg-check-icon" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="dfg-card-footer-text">
                Parents often appreciate having extra support while grandparents
                enjoy more quality time with grandchildren.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ACTIVITIES GRANDPARENTS AND GRANDCHILDREN CAN ENJOY TOGETHER */}
      <section className="adg-c-section adg-c-bg-soft" id="adg-donor-programs">
        <div className="adg-c-container">
          <div className="adg-c-section-header">
            <span className="adg-c-eyebrow">
              Multigenerational Disney Experiences
            </span>

            <h2 className="adg-c-h2">
              Activities Grandparents and <br /> Grandchildren Can Enjoy
              Together
            </h2>

            <div className="adg-c-accent-line"></div>

            <p className="Asc-section-intro">
              Disney creates countless opportunities for meaningful family
              interaction, allowing grandparents and grandchildren to share
              unforgettable experiences throughout the cruise.
            </p>
          </div>

          <div className="adg-c-venues-grid1">
            {[
              {
                id: 1,
                eyebrow: "Disney Magic",
                name: "Character Experiences",
                highlight:
                  "Meeting beloved Disney characters often becomes one of the most memorable moments of the cruise.",
                items: [
                  "Mickey Mouse",
                  "Minnie Mouse",
                  "Disney Princesses",
                  "Marvel Characters",
                  "Pixar Favorites",
                ],
                callout:
                  "These shared moments frequently become treasured family memories that last for generations.",
              },

              {
                id: 2,
                eyebrow: "World-Class Entertainment",
                name: "Broadway-Style Shows",
                highlight:
                  "Disney's entertainment consistently ranks among the best at sea.",
                items: [
                  "Live Performances",
                  "Musical Productions",
                  "Storytelling Experiences",
                  "Family-Friendly Entertainment",
                ],
                callout:
                  "Shows are designed to appeal to children, parents, and grandparents alike.",
              },

              {
                id: 3,
                eyebrow: "Family Fun",
                name: "Deck Activities",
                highlight:
                  "The pool deck becomes a gathering place for family fun throughout the voyage.",
                items: [
                  "Family Games",
                  "Movies Under the Stars",
                  "Deck Parties",
                  "Interactive Experiences",
                ],
                callout:
                  "Relaxed activities provide opportunities for multiple generations to spend quality time together.",
              },

              {
                id: 4,
                eyebrow: "Destination Discovery",
                name: "Shore Excursions",
                highlight:
                  "Disney offers excursions suitable for travelers of varying ages and interests.",
                items: [
                  "Cultural Tours",
                  "Wildlife Encounters",
                  "Beach Experiences",
                  "Historical Sites",
                  "Family Adventures",
                ],
                callout:
                  "Families can select activities that accommodate different mobility levels and travel preferences.",
              },
            ].map((venue, i) => (
              <div
                key={venue.id}
                className={`adg-c-venue-card adg-c-venue-${(i % 4) + 1}`}
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

      {/* ── IMAGE GALLERY ────────────────────────────────────────────── */}
      <section className="dfg-gallery-section" id="dfg-gallery">
        <div className="dfg-gallery-container">
          <div className="dfg-gallery-header">
            <span className="dfg-gallery-eyebrow">
              Memories That Last Forever
            </span>
            <h2 className="dfg-gallery-title">A Journey Worth Sharing</h2>
            <div className="dfg-gallery-accent"></div>
            <p className="dfg-gallery-intro">
              From luxurious staterooms to unforgettable dining and family
              moments at sea — Disney creates experiences that bring every
              generation closer together.
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
                alt="Personalized Disney Cruise family service"
                className="dfg-gallery-img"
              />
              <div className="dfg-gallery-overlay">
                <span className="dfg-gallery-caption">
                  Personalized Service
                </span>
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
                alt="Families loving Disney Cruise experiences"
                className="dfg-gallery-img"
              />
              <div className="dfg-gallery-overlay">
                <span className="dfg-gallery-caption">Family Memories</span>
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
                alt="Multi-generational family dining onboard"
                className="dfg-gallery-img"
              />
              <div className="dfg-gallery-overlay">
                <span className="dfg-gallery-caption">
                  Culinary Experiences
                </span>
              </div>
            </div>

            {/* Square — bottom middle */}
            <div
              className="dfg-gallery-item dfg-gallery-square"
              style={{
                color: "#fff",
              }}
            >
              <img
                alt="Luxury family suite on Disney Cruise"
                className="dfg-gallery-img"
              />
              <div className="dfg-gallery-overlay">
                <span className="dfg-gallery-caption">Luxury Staterooms</span>
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
                alt="Universities and multigenerational travel"
                className="dfg-gallery-img"
              />
              <div className="dfg-gallery-overlay">
                <span className="dfg-gallery-caption">
                  Multigenerational Magic
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BEST DISNEY SHIPS FOR MULTIGENERATIONAL FAMILIES */}
      <section className="dmg-ships-section" id="dmg-best-ships">
        <div className="dmg-ships-container">
          <div className="dmg-ships-header">
            <span className="dmg-ships-eyebrow">Disney Fleet Highlights</span>
            <h2 className="dmg-ships-title">
              Best Disney Ships for Multigenerational Families
            </h2>
            <div className="dmg-ships-accent"></div>
            <p className="dmg-ships-intro">
              Each ship in the Disney Cruise Line fleet offers its own unique
              magic, tailored to different family preferences, itinerary
              lengths, and adventure styles.
            </p>
          </div>

          <div className="dmg-ships-grid">
            {disneyShips.map((ship, idx) => (
              <div key={idx} className="dmg-ship-card">
                <div className="dmg-ship-card-inner">
                  <div className="dmg-ship-badge">
                    <Compass size={14} className="dmg-ship-badge-icon" />
                    <span>Disney Cruise Line</span>
                  </div>

                  <h3 className="dmg-ship-name">{ship.name}</h3>
                  <p className="dmg-ship-subtitle">{ship.subtitle}</p>

                  <ul className="dmg-ship-features">
                    {ship.features.map((feature, fIdx) => (
                      <li key={fIdx} className="dmg-ship-feature-item">
                        <Check size={14} className="dmg-ship-check-icon" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {ship.highlight && (
                    <div className="dmg-ship-highlight-box">
                      <span className="dmg-ship-highlight-line"></span>
                      <p className="dmg-ship-highlight-text">
                        {ship.highlight}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BEST DESTINATIONS FOR SMALL SHIP ALUMNI CRUISES ───── */}
      <section className="luc-destinations-section" id="luc-destinations">
        <div className="luc-destinations-container">
          <div className="luc-destinations-header">
            <h2 className="luc-destinations-title">
              Best Disney Cruise Destinations for Grandparents and Families
            </h2>

            <div className="adg-c-accent-line"></div>

            <p className="luc-destinations-intro">
              From the tropical beaches of the Caribbean and Bahamas to the
              scenic wilderness of Alaska and the rich cultural heritage of the
              Mediterranean, Disney Cruise Line offers destinations that create
              unforgettable experiences for grandparents, parents, and
              grandchildren traveling together.
            </p>
          </div>

          {/* Layout */}
          <div className="luc-dest-layout">
            {/* Sidebar nav */}
            <nav className="luc-dest-nav">
              {disneyDestinations.map((item) => {
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
                  <div className="luc-dest-img-icon">
                    <ActiveIcon size={22} strokeWidth={1.6} />
                  </div>

                  <span className="luc-dest-img-title">
                    {currentDest.title}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="luc-dest-panel-desc">{currentDest.desc}</p>

              {/* Columns */}
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

              {/* Educational Theme / Highlight */}
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

      {/* ACCOMMODATIONS DESIGNED FOR FAMILIES */}
      <section
        className="dmg-info-section dmg-bg-white"
        id="dmg-accommodations"
      >
        <div className="dmg-info-container">
          <div className="dmg-info-grid">
            <div className="dmg-info-content">
              <h2 className="dmg-info-title">
                Accommodations Designed for Families
              </h2>
              <div className="dmg-info-accent"></div>
              <p className="dmg-info-lead">
                Disney understands family travel better than almost any cruise
                line, designing staterooms that resolve common family travel
                challenges.
              </p>

              <div className="dmg-info-features">
                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">Split Bathrooms</h3>
                    <p className="dmg-info-feature-desc">
                      A highly appreciated feature for larger families.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Connecting Staterooms
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Allow families to stay close while maintaining privacy.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">Family Suites</h3>
                    <p className="dmg-info-feature-desc">
                      Ideal for grandparents traveling with extended family.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Concierge Accommodations
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Provide elevated service and additional amenities.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="dmg-info-media">
              <div className="dmg-media-wrapper">
                <img
                  // src={FamilySuitesImg}
                  alt="Disney Cruise family stateroom luxury cabin"
                  className="dmg-media-img"
                />
                <div className="dmg-media-overlay"></div>
                <div className="dmg-media-badge">
                  <span>Smart Cabin Design</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DINING THAT WORKS FOR EVERY GENERATION */}
      <section
        className="dmg-info-section dmg-bg-soft dmg-info-reverse"
        id="dmg-dining"
      >
        <div className="dmg-info-container">
          <div className="dmg-info-grid">
            <div className="dmg-info-content">
              <h2 className="dmg-info-title">
                Dining That Works for Every Generation
              </h2>
              <div className="dmg-info-accent"></div>
              <p className="dmg-info-lead">
                Finding restaurants that satisfy multiple generations can be
                challenging on land, but Disney makes dining a highlight of the
                cruise.
              </p>

              <div className="dmg-info-features">
                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Rotational Dining
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Families experience different themed restaurants
                      throughout the voyage.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Family-Friendly Menus
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Options for children and adults alike.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">Flexible Dining</h3>
                    <p className="dmg-info-feature-desc">
                      Accommodations for dietary preferences and needs.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">Specialty Dining</h3>
                    <p className="dmg-info-feature-desc">
                      Adult-focused experiences for parents and grandparents.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="dmg-info-media">
              <div className="dmg-media-wrapper">
                <img
                  // src={FamilyDiningImg}
                  alt="Disney Cruise multi-generational family dining"
                  className="dmg-media-img"
                />
                <div className="dmg-media-overlay"></div>
                <div className="dmg-media-badge">
                  <span>Rotational Dining</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY GRANDPARENTS LOVE DISNEY CRUISES ─────────────────── */}
      <section className="luc-why-section" id="luc-why">
        <div className="luc-why-container">
          {/* LEFT — stacked images */}
          <div className="luc-why-images">
            <div className="luc-why-img-main-wrap" style={{
    color: "#fff",
  }}>
              <img
                // src={AlumniTravel3}
                alt="Grandparents enjoying a Disney Cruise"
                className="luc-why-img-main"
              />
              <div className="luc-why-img-overlay"></div>
            </div>

            <div className="luc-why-img-accent-wrap" style={{
    color: "#fff",
  }}>
              <img
                // src={LoveAlumni2}
                alt="Multigenerational Disney Cruise vacation"
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
              Why Grandparents Love Disney Cruises
            </h2>

            <div className="aac-accent-line aac-accent-white"></div>

            <p className="luc-why-intro">
              Grandparents consistently report several reasons for choosing
              Disney.
            </p>

            <div className="luc-why-features">
              <div className="luc-why-feature">
                <div className="luc-why-feature-num">01</div>

                <div className="luc-why-feature-body">
                  <h3 className="luc-why-feature-title">
                    Quality Time With Grandchildren
                  </h3>
                  <p className="luc-why-feature-desc">
                    Cruises create opportunities for meaningful interaction
                    without daily distractions.
                  </p>
                </div>
              </div>

              <div className="luc-why-feature">
                <div className="luc-why-feature-num">02</div>

                <div className="luc-why-feature-body">
                  <h3 className="luc-why-feature-title">
                    Watching the Magic Through Their Grandchildren's Eyes
                  </h3>
                  <p className="luc-why-feature-desc">
                    Many grandparents find joy in sharing Disney experiences
                    across generations.
                  </p>
                </div>
              </div>

              <div className="luc-why-feature">
                <div className="luc-why-feature-num">03</div>

                <div className="luc-why-feature-body">
                  <h3 className="luc-why-feature-title">
                    Stress-Free Planning
                  </h3>
                  <p className="luc-why-feature-desc">
                    Disney simplifies logistics and family coordination.
                  </p>
                </div>
              </div>

              <div className="luc-why-feature">
                <div className="luc-why-feature-num">04</div>

                <div className="luc-why-feature-body">
                  <h3 className="luc-why-feature-title">Comfortable Travel</h3>
                  <p className="luc-why-feature-desc">
                    Ships offer accessibility, comfort, and convenient
                    transportation.
                  </p>
                </div>
              </div>

              <div className="luc-why-feature">
                <div className="luc-why-feature-num">05</div>

                <div className="luc-why-feature-body">
                  <h3 className="luc-why-feature-title">
                    Memorable Family Experiences
                  </h3>
                  <p className="luc-why-feature-desc">
                    Shared moments often become family stories for years to
                    come.
                  </p>
                </div>
              </div>
            </div>

            <div
              style={{
                marginTop: "24px",
                padding: "18px",
                borderRadius: "10px",
                background: "rgba(255,255,255,0.08)",
              }}
            >
              <p
                className="luc-why-feature-desc"
                style={{ marginBottom: 0, fontWeight: 600 }}
              >
                What makes Disney special?
              </p>

              <p className="luc-why-feature-desc" style={{ marginTop: "8px" }}>
                The combination of family bonding, entertainment, convenience,
                and unforgettable shared experiences creates memories that last
                for generations.
              </p>
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

      {/* ── TIPS FOR PLANNING A MULTIGENERATIONAL DISNEY CRUISE ───────────────────────────── */}
      <section className="ugt-advantage-section" id="ugt-advantage">
        <div className="ugt-advantage-container">
          <div className="ugt-advantage-header">
            <span className="ugt-advantage-eyebrow">
              Disney Cruise Planning Tips
            </span>

            <h2 className="ugt-advantage-title">
              Tips for Planning a Multigenerational Disney Cruise
            </h2>

            <div className="Asc-accent-line"></div>

            <p className="ugt-advantage-intro">
              A little planning goes a long way when traveling with multiple
              generations. These tips can help create a smoother and more
              enjoyable Disney Cruise experience for everyone.
            </p>
          </div>

          <div className="ugt-advantage-grid">
            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <CalendarDays size={28} strokeWidth={1.5} />
              </div>

              <h4 className="ugt-card-title">Book Early</h4>

              <p className="ugt-card-desc">
                Popular Disney itineraries often sell out well in advance.
              </p>
            </div>

            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <DoorOpen size={28} strokeWidth={1.5} />
              </div>

              <h4 className="ugt-card-title">Consider Connecting Staterooms</h4>

              <p className="ugt-card-desc">
                These provide convenience while maintaining privacy.
              </p>
            </div>

            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <Users size={28} strokeWidth={1.5} />
              </div>

              <h4 className="ugt-card-title">Balance Activities</h4>

              <p className="ugt-card-desc">
                Schedule both family activities and independent time.
              </p>
            </div>

            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <MessageCircle size={28} strokeWidth={1.5} />
              </div>

              <h4 className="ugt-card-title">
                Include Grandparents in Planning
              </h4>

              <p className="ugt-card-desc">
                Understanding everyone's interests improves the overall
                experience.
              </p>
            </div>

            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <Compass size={28} strokeWidth={1.5} />
              </div>

              <h4 className="ugt-card-title">
                Work With a Disney Cruise Specialist
              </h4>

              <p className="ugt-card-desc">
                Professional planning helps maximize value and minimize stress.
              </p>
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
                Trusted Family Cruise Planning
              </span>
              <h2 className="adg-c-h2 adg-c-h2-light">
                Why Families Choose Trips &amp; Ships Luxury Travel
              </h2>

              <div className="aac-accent-line aac-accent-white"></div>

              <p className="adg-c-lead adg-c-lead-light">
                Planning a multigenerational cruise involves more than booking
                cabins.
              </p>

              <p className="adg-c-body adg-c-body-light">
                Our team helps families navigate every aspect of the planning
                process, ensuring grandparents, parents, children, and
                grandchildren enjoy a seamless and memorable Disney Cruise
                experience together.
              </p>
            </div>

            {/* RIGHT — pill grid */}
            <div className="adg-c-why-right">
              <div className="adg-c-why-card">
                <span className="adg-c-why-card-label">We Help Families:</span>

                <div className="adg-c-pill-grid">
                  {[
                    "Select the Right Ship",
                    "Choose the Best Itinerary",
                    "Coordinate Accommodations",
                    "Simplify Planning",
                    "Create Extraordinary Family Memories",
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

      {/* VIDEO SECTION */}
      <section
        className="azs-video-section"
        id="azs-video"
        style={{ backgroundColor: "var(--bg-white)" }}
      >
        <div className="azs-container">
          <div className="azs-section-header">
            <h2 className="azs-h2">Disneyland Resort</h2>
            <div className="azs-accent-line"></div>

            <p className="azs-video-intro">
              Discover the magic of Disneyland Resort, where imagination is the
              destination and unforgettable memories are made every day.
            </p>
          </div>

          <div className="azs-video-wrapper">
            <div className="azs-video-frame">
              <iframe
                src="https://www.youtube.com/embed/rTuaC01RqjE"
                title="Disneyland Resort"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* WHO SHOULD CHOOSE */}
      <section className="Asc-section Asc-bg-soft" id="Asc-who">
        <div className="Asc-container">
          <div className="Asc-section-header">
            <h2 className="Asc-h2">Best For</h2>

            <div className="Asc-accent-line"></div>
          </div>

          <div className="Asc-who-grid">
            <div className="Asc-who-card Asc-who-yes">
              <h3 className="Asc-who-title">Best For</h3>

              <ul className="Asc-who-list">
                {[
                  "Grandparents Traveling with Grandchildren",
                  "Multi-Generational Family Groups",
                  "First-Time Family Cruisers",
                  "Disney Enthusiasts",
                  "Family Milestone Celebrations",
                  "Family Reunions",
                  "Educational Family Travel",
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
                  "Adults Seeking an Adults-Only Environment",
                  "Travelers Looking for Nightlife-Focused Vacations",
                  "Families Prioritizing Luxury Over Entertainment",
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
      {/* WHY TRIPS & SHIPS LUXURY TRAVEL */}
      <section className="Adg-expert-section" id="Asc-expert-insight">
        <div className="Asc-container">
          {/* TOP HEADING */}
          <div className="Adg-expert-heading">
            <span className="Adg-expert-eyebrow">Family Travel Expertise</span>

            <h2 className="Adg-expert-title">
              Angela Hughes: Helping Families Explore the World Together
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
                  alt="Angela Hughes - Family Travel Expert"
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
                  With more than 40 years in the travel industry and travel
                  experience across 121 countries, Angela Hughes understands
                  what makes family travel successful.
                </blockquote>
              </div>

              {/* CREDENTIALS */}
              <div className="Adg-expert-credentials-box">
                <h4 className="Adg-expert-credentials-title">
                  <Award size={16} />
                  Family Travel Expertise
                </h4>

                <div className="Adg-expert-credentials-grid">
                  {[
                    "Strengthen Family Relationships",
                    "Create Meaningful Memories",
                    "Balance Comfort and Adventure",
                    "Deliver Exceptional Value",
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
                  For multigenerational travelers, that expertise can make all
                  the difference.
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
            // src={CTAImage}
            alt="Disney Cruise Family Vacation"
            className="Asc-help-bg-img"
          />
          <div className="Asc-help-overlay"></div>
        </div>

        <div className="Asc-container">
          <div className="Asc-help-card">
            <div className="Asc-help-content">
              <div className="Asc-help-header">
                <span className="Asc-help-eyebrow">
                  Multigenerational Disney Cruises
                </span>

                <h2 className="Asc-help-h2">
                  Create Family Memories That Last a Lifetime
                </h2>

                <div className="Asc-help-accent"></div>
              </div>

              <div className="Asc-help-grid">
                <div className="Asc-help-info">
                  <p className="Asc-help-intro">
                    A Disney Cruise is more than a vacation.
                  </p>

                  <p className="Asc-help-intro">
                    It's an opportunity for grandparents, parents, children, and
                    grandchildren to spend meaningful time together while
                    exploring the world, sharing adventures, and creating
                    memories that will be treasured for generations.
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
                      Whether you're celebrating a milestone, planning a family
                      reunion, or simply looking for a special way to reconnect,
                      Disney Cruise Line offers one of the most rewarding
                      multigenerational travel experiences available.
                      <br />
                      <br />
                      With expert planning from Trips &amp; Ships Luxury Travel,
                      your family can enjoy a seamless Disney Cruise vacation
                      designed around comfort, convenience, and unforgettable
                      moments.
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
                      Plan Your Disney Cruise
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>

                <div className="Asc-help-list-box">
                  <h3 className="Asc-help-list-title">
                    Why Families Love Disney Cruises:
                  </h3>

                  <ul className="Asc-help-bullets">
                    {[
                      "Activities and entertainment for every generation",
                      "Quality time together without travel stress",
                      "Family-friendly accommodations and dining",
                      "World-class service and exceptional experiences",
                      "Perfect for celebrations, reunions, and milestone trips",
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
                      planning your multigenerational Disney Cruise adventure.
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

export default DisneyCruisesforGrandparents;
