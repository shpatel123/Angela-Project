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
  Mountain,
  Landmark,
  Home,
  Binoculars,
  Train,
  Dog,
  Fish,
  Snowflake,
} from "lucide-react";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela3.jpeg";
import "../ScenicVSFourSeasonsYachts.css";
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
import AlaskImage from "../../assets/AzamaraAlaskaCruisesGuide/AlaskImage.webp";
import AlaskImage2 from "../../assets/AzamaraAlaskaCruisesGuide/AlaskImage2.webp";
import AlaskImage3 from "../../assets/AzamaraAlaskaCruisesGuide/AlaskImage3.webp";
import FlyFishingImg from "../../assets/AzamaraAlaskaCruisesGuide/multigenerational-family-fly-fishing-vacation-alaska-mountain-river.jpeg";
import IcebergScenicImg from "../../assets/AzamaraAlaskaCruisesGuide/alaska-iceberg-scenic-cruise-vacation.webp";
import "../DisneyCruisevsVikingOcean/DisneyCruisevsVikingOcean.css";

const disneyAlaskaDestinations = [
  {
    id: "juneau",
    badge: "Juneau",
    title: "Juneau",
    // image: JuneauImg,
    icon: Mountain,
    desc: "Alaska's capital city is surrounded by mountains, glaciers, and wildlife, making it one of the most popular stops on Disney Alaska itineraries.",
    columns: [
      {
        label: "Highlights",
        items: [
          "Mendenhall Glacier",
          "Whale Watching",
          "Dog Sledding Adventures",
          "Helicopter Excursions",
        ],
      },
    ],
    themeLabel: "Popular Alaska Port",
    themeText:
      "Juneau combines glacier exploration, wildlife viewing, and outdoor adventure, creating memorable experiences for travelers of all ages.",
  },
  {
    id: "skagway",
    badge: "Skagway",
    title: "Skagway",
    // image: SkagwayImg,
    icon: Train,
    desc: "Step back into Alaska's Gold Rush history while exploring one of the state's most iconic cruise destinations.",
    columns: [
      {
        label: "Popular Experiences",
        items: [
          "White Pass Railway",
          "Historic Walking Tours",
          "Yukon Excursions",
          "Scenic Mountain Adventures",
        ],
      },
    ],
    themeLabel: "Historic Alaska",
    themeText:
      "Skagway offers a fascinating combination of history, breathtaking scenery, and classic Alaska adventure.",
  },
  {
    id: "ketchikan",
    badge: "Ketchikan",
    title: "Ketchikan",
    // image: KetchikanImg,
    icon: Fish,
    desc: "Known as Alaska's 'Salmon Capital,' Ketchikan offers culture, wildlife, and outdoor exploration.",
    columns: [
      {
        label: "Guests Enjoy",
        items: [
          "Totem Pole Parks",
          "Wildlife Viewing",
          "Fishing Excursions",
          "Cultural Experiences",
        ],
      },
    ],
    themeLabel: "Culture & Nature",
    themeText:
      "Ketchikan provides an excellent introduction to Alaska's indigenous heritage, wildlife, and coastal beauty.",
  },
  {
    id: "glaciers",
    badge: "Glacier Days",
    title: "Glacier Viewing Days",
    // image: GlacierImg,
    icon: Snowflake,
    desc: "Many Disney Alaska itineraries include spectacular glacier viewing opportunities that often become the highlight of the voyage.",
    columns: [
      {
        label: "Guests May Experience",
        items: [
          "Dawes Glacier",
          "Endicott Arm",
          "Glacier-Filled Fjords",
          "Scenic Wilderness Cruising",
        ],
      },
    ],
    themeLabel: "Voyage Highlight",
    themeText:
      "Glacier viewing days showcase Alaska's breathtaking natural beauty and frequently become the most memorable moments of the cruise.",
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
        "Luxury travel agency specializing in luxury cruises, family travel, river cruises, expedition cruises, and custom travel planning.",
    },

    {
      "@type": "TravelAgency",
      "@id": "https://www.tripsandships.com/#travelagency",
      name: "Trips & Ships Luxury Travel",
      url: "https://www.tripsandships.com",
      description:
        "Luxury travel experts helping families and multigenerational travelers plan unforgettable Disney Alaska cruise vacations through expert guidance and personalized service.",
    },

    {
      "@type": "WebPage",
      "@id": "https://www.tripsandships.com/disney-alaska-cruises",
      url: "https://www.tripsandships.com/disney-alaska-cruises",
      name: "Disney Alaska Cruises | Family Adventures Through Alaska's Wilderness",
      description:
        "Experience the magic of Disney Alaska Cruises. Discover glaciers, wildlife, breathtaking scenery, family-friendly excursions, and unforgettable adventures designed for families, grandparents, and multigenerational travelers.",
      isPartOf: {
        "@id": "https://www.tripsandships.com/#website",
      },
      about: [
        {
          "@type": "Organization",
          name: "Disney Cruise Line",
        },
        {
          "@type": "Place",
          name: "Alaska",
        },
      ],
    },

    {
      "@type": "BreadcrumbList",
      "@id": "https://www.tripsandships.com/disney-alaska-cruises#breadcrumb",
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
          name: "Family & Multi-Generational Travel",
          item: "https://www.tripsandships.com/family-travel",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Alaska Family Cruises",
          item: "https://www.tripsandships.com/alaska-family-cruises",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Disney Alaska Cruises",
          item: "https://www.tripsandships.com/disney-alaska-cruises",
        },
      ],
    },

    {
      "@type": "FAQPage",
      "@id": "https://www.tripsandships.com/disney-alaska-cruises#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Are Disney Alaska Cruises good for families?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Disney Alaska Cruises are widely considered among the best family cruise experiences available, combining Alaska's incredible wildlife and glacier scenery with Disney's world-class service, entertainment, and youth programming.",
          },
        },
        {
          "@type": "Question",
          name: "How long are Disney Alaska cruises?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most Disney Alaska sailings are approximately 7 nights, though itineraries may vary by season.",
          },
        },
        {
          "@type": "Question",
          name: "What wildlife can I see on a Disney Alaska cruise?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Guests may see humpback whales, orcas, bald eagles, bears, sea lions, seals, sea otters, and moose throughout the voyage.",
          },
        },
        {
          "@type": "Question",
          name: "Are Disney Alaska cruises good for grandparents?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. Alaska's scenery, educational experiences, and comfortable Disney accommodations make it particularly appealing for multigenerational travel with grandchildren.",
          },
        },
        {
          "@type": "Question",
          name: "Do Disney Alaska cruises have character experiences?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Disney characters appear onboard throughout the Alaska voyage, offering meet-and-greet opportunities for families and children.",
          },
        },
        {
          "@type": "Question",
          name: "Is Alaska too cold for children?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Not at all. With proper layered clothing, children often find Alaska's glaciers, wildlife, and outdoor adventures exciting and memorable. Summer sailings from May through September offer mild and enjoyable conditions.",
          },
        },
        {
          "@type": "Question",
          name: "Which Disney ship sails to Alaska?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Disney periodically assigns different ships to Alaska itineraries depending on the season. Recent sailings have featured ships such as the Disney Wonder. Contact a travel advisor for the latest ship assignments.",
          },
        },
        {
          "@type": "Question",
          name: "What is the best month for a Disney Alaska cruise?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "June through August are the most popular months for Disney Alaska cruises, offering the warmest temperatures and best wildlife viewing conditions. May and September can offer fewer crowds and excellent experiences as well.",
          },
        },
        {
          "@type": "Question",
          name: "Is a Disney Alaska cruise worth the extra cost?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Many families feel Disney's exceptional service, Broadway-style entertainment, family-friendly accommodations, and multigenerational appeal justify the premium pricing for an Alaska cruise.",
          },
        },
        {
          "@type": "Question",
          name: "Can grandparents travel with grandchildren on Disney Alaska cruises?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Disney Alaska Cruises are among the most popular choices for grandparents traveling with grandchildren, offering shared adventures, comfortable accommodations, and activities designed for every generation.",
          },
        },
        {
          "@type": "Question",
          name: "Where do Disney Alaska cruises depart from?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Disney Alaska cruises typically depart from Vancouver, British Columbia. Many families choose to combine their sailing with a pre- or post-cruise stay in Vancouver.",
          },
        },
        {
          "@type": "Question",
          name: "Do Disney Alaska cruises visit glaciers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Many Disney Alaska itineraries include dedicated glacier viewing days, cruising through fjords such as Endicott Arm to view Dawes Glacier and other spectacular ice formations.",
          },
        },
        {
          "@type": "Question",
          name: "What should families pack for a Disney Alaska cruise?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Families should pack layered clothing, waterproof jackets, comfortable walking shoes, and binoculars for wildlife viewing. Even during summer months, Alaska's weather can be cool and variable.",
          },
        },
        {
          "@type": "Question",
          name: "Are there activities onboard for teenagers on Disney Alaska cruises?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Disney Cruise Line offers dedicated teen-only spaces including Edge and Vibe clubs, designed specifically for tweens and teens with age-appropriate programming and social environments.",
          },
        },
        {
          "@type": "Question",
          name: "How far in advance should I book a Disney Alaska cruise?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Disney Alaska cruises are very popular and tend to sell out well in advance. Many families book 12 to 18 months ahead to secure preferred staterooms, dining times, and shore excursions.",
          },
        },
      ],
    },

    {
      "@type": "TouristTrip",
      "@id": "https://www.tripsandships.com/disney-alaska-cruises#trip",
      name: "Disney Alaska Cruise",
      description:
        "A 7-night family cruise through Alaska's Inside Passage with Disney Cruise Line, visiting Juneau, Skagway, Ketchikan, and glacier viewing fjords.",
      touristType: [
        "Families",
        "Multigenerational Travelers",
        "Grandparents and Grandchildren",
      ],
      itinerary: [
        {
          "@type": "City",
          name: "Vancouver, British Columbia",
          description: "Departure port for Disney Alaska cruises.",
        },
        {
          "@type": "City",
          name: "Juneau, Alaska",
          description:
            "Alaska's capital city offering Mendenhall Glacier, whale watching, dog sledding, and helicopter excursions.",
        },
        {
          "@type": "City",
          name: "Skagway, Alaska",
          description:
            "Gold Rush-era town offering White Pass Railway, historic walking tours, and Yukon excursions.",
        },
        {
          "@type": "City",
          name: "Ketchikan, Alaska",
          description:
            "Alaska's Salmon Capital, known for totem pole parks, wildlife viewing, fishing, and cultural experiences.",
        },
      ],
    },

    {
      "@type": "Article",
      "@id": "https://www.tripsandships.com/disney-alaska-cruises#article",
      headline:
        "Disney Alaska Cruises | Family Adventures Through Alaska's Wilderness",
      description:
        "A comprehensive guide to Disney Alaska Cruises covering itineraries, ports of call, wildlife, shore excursions, accommodations, and multigenerational travel tips.",
      author: {
        "@type": "Person",
        name: "Angela Hughes",
        jobTitle: "Luxury Travel Advisor",
        worksFor: {
          "@id": "https://www.tripsandships.com/#organization",
        },
      },
      publisher: {
        "@id": "https://www.tripsandships.com/#organization",
      },
      url: "https://www.tripsandships.com/disney-alaska-cruises",
    },
  ],
};

function FAQ() {
  const [open, setOpen] = useState(null);

  const faqData = [
    {
      q: "Are Disney Alaska Cruises good for families?",
      a: "Yes. Disney Alaska Cruises are widely considered among the best family cruise experiences available.",
    },

    {
      q: "How long are Disney Alaska cruises?",
      a: "Most Alaska sailings are approximately 7 nights, though itineraries may vary.",
    },

    {
      q: "What wildlife can I see on a Disney Alaska cruise?",
      a: "Guests may see whales, bald eagles, bears, sea lions, seals, and other Alaska wildlife.",
    },

    {
      q: "Are Disney Alaska cruises good for grandparents?",
      a: "Absolutely. Alaska's scenery and educational experiences make it particularly appealing for multigenerational travel.",
    },

    {
      q: "Do Disney Alaska cruises have character experiences?",
      a: "Yes. Disney characters appear onboard throughout the voyage.",
    },

    {
      q: "Is Alaska too cold for children?",
      a: "Not at all. With proper clothing, children often find Alaska's glaciers, wildlife, and outdoor adventures exciting and memorable.",
    },

    {
      q: "Which Disney ship sails to Alaska?",
      a: "Disney periodically assigns different ships to Alaska itineraries, depending on the season.",
    },

    {
      q: "What is the best month for a Disney Alaska cruise?",
      a: "June through August are the most popular months, though May and September can offer excellent experiences as well.",
    },

    {
      q: "Is Disney Alaska worth the extra cost?",
      a: "Many families feel Disney's service, entertainment, and family-focused approach justify the premium pricing.",
    },

    {
      q: "Can grandparents travel with grandchildren on Disney Alaska cruises?",
      a: "Yes. Disney Alaska Cruises are among the most popular cruise choices for grandparents traveling with grandchildren.",
    },

    {
      q: "Where do Disney Alaska cruises depart from?",
      a: "Disney Alaska cruises typically depart from Vancouver, British Columbia. Guests often combine their trip with a pre- or post-cruise stay in Vancouver to explore the city before or after their sailing.",
    },

    {
      q: "Do Disney Alaska cruises visit glaciers?",
      a: "Yes. Many Disney Alaska itineraries include dedicated glacier viewing days, where the ship cruises through fjords such as Endicott Arm to view Dawes Glacier and other spectacular ice formations. These days are frequently the most memorable of the entire voyage.",
    },

    {
      q: "What should families pack for a Disney Alaska cruise?",
      a: "Families should pack layered clothing, waterproof jackets, comfortable walking shoes, and binoculars for wildlife viewing. Even during summer months, Alaska's weather can be cool and variable, so warm layers are essential for outdoor excursions and glacier viewing days.",
    },

    {
      q: "Are there activities onboard for teenagers on Disney Alaska cruises?",
      a: "Absolutely. Disney Cruise Line offers dedicated teen-only spaces and programming, including Edge and Vibe clubs designed specifically for tweens and teens. These age-appropriate venues give teenagers their own social environment while families can still come together for shore excursions, dining, and shows.",
    },

    {
      q: "How far in advance should I book a Disney Alaska cruise?",
      a: "Disney Alaska cruises are extremely popular and tend to sell out well in advance. Many families book 12 to 18 months ahead to secure their preferred stateroom category, dining times, and shore excursions. Working with a Disney-specialized travel advisor can help ensure the best availability and value.",
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
const DisneyAlaskaCruises = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [readMore, setReadMore] = useState(false);
  const images = [];
  const [activeDest, setActiveDest] = useState("antarctica");
  const currentDest =
    disneyAlaskaDestinations.find((d) => d.id === activeDest) ||
    disneyAlaskaDestinations[0];

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
          Disney Alaska Cruises | Family Adventures Through Alaska's Wilderness
        </title>
        <meta
          name="title"
          content="Disney Alaska Cruises for Families & Multigenerational Travelers"
        />
        <meta
          name="description"
          content="Experience the magic of Disney Alaska Cruises. Discover glaciers, wildlife, breathtaking scenery, family-friendly excursions, and unforgettable adventures designed for families, grandparents, and multigenerational travelers."
        />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>
      <Nav />
      {/* HERO */}
      <section
        className="Scenic_hero_section"
        style={{ backgroundColor: "var(--bg-dark)" }}
      >
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
          <h1>Discover Alaska Through the Magic of Disney Cruise Line</h1>

          <p>Alaska is unlike any destination on Earth.</p>

          <p>
            Massive glaciers, snow-capped mountains, breaching whales, soaring
            bald eagles, and untouched wilderness create an adventure that
            leaves travelers in awe.
          </p>

          {/* READ MORE CONTENT */}
          {readMore && (
            <>
              <p>
                Now imagine experiencing all of that with the service,
                entertainment, and family-focused excellence of Disney Cruise
                Line.
              </p>

              <p>
                Disney Alaska Cruises combine the natural wonders of Alaska with
                the storytelling, hospitality, and multigenerational appeal that
                Disney is known for worldwide.
              </p>

              <p>
                Whether you're traveling with young children, teenagers,
                grandparents, or an extended family group, a Disney Alaska
                Cruise offers one of the most memorable vacation experiences
                available today.
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
                Why Choose a Disney Alaska Cruise?
              </h2>
              <div className="aac-accent-line aac-accent-white"></div>
              <p className="adg-c-lead adg-c-lead-light">
                Many travelers are surprised to learn that Alaska is one of
                Disney Cruise Line's most popular destinations.
              </p>
              <p className="adg-c-body adg-c-body-light">
                While Disney is often associated with tropical beaches and
                warm-weather sailings, Alaska showcases a completely different
                side of the Disney experience.
              </p>{" "}
              <br />
              <p className="adg-c-body adg-c-body-light">
                The result is a vacation that balances adventure, learning, and
                family connection.
              </p>
            </div>

            {/* RIGHT — pill grid */}
            <div className="adg-c-why-right">
              <div className="adg-c-why-card">
                <span className="adg-c-why-card-label">Guests Enjoy:</span>

                <div className="adg-c-pill-grid">
                  {[
                    "Incredible Glacier Viewing",
                    "Wildlife Encounters",
                    "Family-Friendly Excursions",
                    "Educational Experiences",
                    "Broadway-Quality Entertainment",
                    "Exceptional Disney Service",
                    "Activities for All Generations",
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
            <h2 className="azs-h2">
              Discover Alaska Through the <br /> Magic of Disney Cruise Line
            </h2>

            <div className="azs-accent-line"></div>

            <p className="azs-video-intro">
              Experience the breathtaking beauty of Alaska aboard Disney Cruise
              Line. From towering glaciers and incredible wildlife encounters to
              world-class entertainment and unforgettable family moments,
              discover why a Disney Alaska Cruise is one of the most memorable
              vacation experiences available today.
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

      {/* ── BEST DESTINATIONS FOR SMALL SHIP ALUMNI CRUISES ───── */}
      <section className="luc-destinations-section" id="luc-destinations">
        <div className="luc-destinations-container">
          <div className="luc-destinations-header">
            <h2 className="luc-destinations-title">
              Disney's Alaska Itineraries
            </h2>

            <div className="adg-c-accent-line"></div>

            <p className="luc-destinations-intro">
              Disney Cruise Line typically operates Alaska voyages departing
              from Vancouver, British Columbia. Most itineraries range from 7
              nights and include visits to some of Alaska's most iconic
              destinations.
            </p>
          </div>

          {/* Layout */}
          <div className="luc-dest-layout">
            {/* Sidebar nav */}
            <nav className="luc-dest-nav">
              {disneyAlaskaDestinations.map((item) => {
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

      {/* WHAT MAKES ALASKA SO SPECIAL? */}
      <section className="dac-special-section">
        <div className="dac-special-container">
          <div className="dac-special-header">
            <h2 className="dac-special-title">What Makes Alaska So Special?</h2>
            <div className="dac-special-accent"></div>
            <p className="dac-special-lead">
              Alaska offers breathtaking wonders and deep wilderness experiences
              that simply cannot be replicated anywhere else in the world.
            </p>
          </div>

          <div className="dac-special-grid">
            {[
              {
                icon: Snowflake,
                title: "Towering Glaciers",
                desc: "Watch ancient glaciers calve massive chunks of ice directly into the sea with a thunderous roar.",
              },
              {
                icon: Binoculars,
                title: "Incredible Wildlife",
                desc: "Observe humpback whales, orcas, bears, bald eagles, sea otters, and moose in their natural habitats.",
              },
              {
                icon: Mountain,
                title: "Spectacular Scenery",
                desc: "Cruise through majestic fjords surrounded by towering snow-capped mountains and pristine pine forests.",
              },
              {
                icon: Landmark,
                title: "Rich Native Culture",
                desc: "Learn about the history, storytelling, totem carving, and deep traditions of Alaska's indigenous peoples.",
              },
              {
                icon: Compass,
                title: "Charming Frontier Towns",
                desc: "Explore unique historic communities like Juneau, Skagway, and Ketchikan that reflect Alaska's adventurous gold rush spirit.",
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

      {/* SECTION 7.6: IMAGE GALLERY */}
      <section className="svf-section svf-gallery-section">
        <div className="svf-inner">
          <div className="svf-gallery-header">
            <h2 className="svf-h2" style={{ textAlign: "center" }}>
              Alaska's Greatest Moments, Experienced Through Disney
            </h2>
            <div className="svf-bar" style={{ margin: "20px auto 0" }}></div>
            <p
              className="svf-p"
              style={{
                textAlign: "center",
                marginTop: "20px",
                maxWidth: "700px",
                margin: "20px auto 0",
              }}
            >
              From towering glaciers and breaching humpback whales to gold rush
              history and Indigenous culture — Disney Alaska Cruises deliver the
              Last Frontier's most iconic experiences wrapped in unmatched
              family-focused service.
            </p>
          </div>

          <div className="svf-gallery-grid">
            <div className="svf-gallery-item svf-gallery-item--large">
              <div className="svf-gallery-image-wrap">
                <img
                  //   src={IcebergScenicImg}
                  alt="Spectacular glacier calving scenery viewed from a Disney Alaska Cruise ship in Endicott Arm fjord"
                  className="svf-gallery-image"
                />
                <div className="svf-gallery-overlay">
                  <div className="svf-gallery-content">
                    <span className="svf-gallery-badge">
                      Glacier Viewing Day
                    </span>
                    <h3>Witness Alaska's Ancient Glaciers Up Close</h3>
                    <p>
                      Drift silently past Dawes Glacier and Endicott Arm as
                      massive walls of ancient ice calve thunderously into the
                      sea — a breathtaking moment the entire family will never
                      forget.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="svf-gallery-item">
              <div className="svf-gallery-image-wrap">
                <img
                  //   src={AlaskImage}
                  alt="Humpback whale breaching in the Inside Passage during a Disney Alaska Cruise whale watching excursion"
                  className="svf-gallery-image"
                />
                <div className="svf-gallery-overlay">
                  <div className="svf-gallery-content">
                    <span className="svf-gallery-badge">
                      Wildlife Encounter
                    </span>
                    <h3>Humpback Whales in the Inside Passage</h3>
                    <p>
                      Watch in awe as humpback whales breach, tail-slap, and
                      bubble-net feed just off the ship's deck — an
                      unforgettable Alaska wildlife moment for all ages.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="svf-gallery-item">
              <div className="svf-gallery-image-wrap">
                <img
                  //   src={AlaskImage2}
                  alt="Family exploring Mendenhall Glacier near Juneau Alaska on a Disney Cruise shore excursion"
                  className="svf-gallery-image"
                />
                <div className="svf-gallery-overlay">
                  <div className="svf-gallery-content">
                    <span className="svf-gallery-badge">
                      Juneau Shore Excursion
                    </span>
                    <h3>Mendenhall Glacier — Juneau's Crown Jewel</h3>
                    <p>
                      Step off the ship in Juneau and stand face-to-face with
                      the magnificent Mendenhall Glacier — one of Alaska's most
                      accessible and awe-inspiring natural landmarks.
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
                      Multigenerational Adventure
                    </span>
                    <h3>Family Adventures in Alaska's Untouched Wilderness</h3>
                    <p>
                      From fly fishing in glacial rivers to helicopter hikes and
                      dog sledding — Disney Alaska shore excursions create
                      shared outdoor adventures that bring every generation
                      closer together.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ONBOARD DISNEY ENTERTAINMENT */}
      <section className="dac-ent-section">
        <div className="dac-ent-container">
          <div className="dac-ent-grid">
            <div className="dac-ent-left">
              <span className="dac-ent-eyebrow">Onboard Experiences</span>
              <h2 className="dac-ent-title">Onboard Disney Entertainment</h2>
              <div className="dac-ent-accent"></div>
              <p className="dac-ent-desc">
                Even amidst the spectacular wilderness of Alaska, Disney Cruise
                Line delivers its signature world-class entertainment, keeping
                families captivated from morning until night.
              </p>
              <div className="dac-ent-badge">The Disney Difference at Sea</div>
            </div>

            <div className="dac-ent-right">
              {[
                {
                  title: "Broadway-Style Productions",
                  desc: "Enjoy award-winning, theatrical performances and classic storytelling featuring stunning costumes and stagecraft.",
                },
                {
                  title: "Character Experiences",
                  desc: "Meet beloved Disney characters dressed in special Alaska-themed outdoor attire throughout the voyage.",
                },
                {
                  title: "Family Activities",
                  desc: "Participate in family trivia games, interactive deck deck parties, and structured crafts designed for all age groups.",
                },
                {
                  title: "Movies and Entertainment",
                  desc: "Watch first-run feature films and Disney classics in the state-of-the-art Buena Vista Theatre.",
                },
                {
                  title: "Youth Clubs",
                  desc: "Keep kids and teens active in industry-leading youth spaces staffed by trained Disney counselors.",
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

      {/* WILDLIFE ENCOUNTERS IN ALASKA */}
      <section className="dac-wildlife-section">
        <div className="dac-wildlife-container">
          <div className="dac-wildlife-header">
            <h2 className="dac-wildlife-title">
              Wildlife Encounters in Alaska
            </h2>
            <div className="dac-wildlife-accent"></div>
            <p className="dac-wildlife-lead">
              One of the primary reasons travelers cruise to Alaska is the
              opportunity to witness diverse and beautiful wildlife in its
              natural environment.
            </p>
          </div>

          <div className="dac-wildlife-grid">
            {[
              {
                // img: AlaskImage,
                title: "Humpback Whales",
                desc: "Spot these majestic giants breaching, tail-slapping, and bubble-net feeding throughout the Inside Passage.",
              },
              {
                // img: AlaskImage2,
                title: "Orcas",
                desc: "Witness one of Alaska's most iconic marine species swimming in family pods along coastal waterways.",
              },
              {
                // img: AlaskImage3,
                title: "Bald Eagles",
                desc: "Look up to find these proud birds soaring high above the tree line or nesting along rocky shore cliffs.",
              },
              {
                // img: FlyFishingImg,
                title: "Bears",
                desc: "Keep a lookout for grizzly and black bears hunting for wild salmon in coastal rivers on select shore excursions.",
              },
              {
                // img: IcebergScenicImg,
                title: "Sea Lions and Seals",
                desc: "Observe groups of sea lions resting on rocky shores and harbor seals floating on glacial ice floes.",
              },
            ].map((item, idx) => (
              <div key={idx} className="dac-wildlife-card">
                <div className="dac-wildlife-img-wrap">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="dac-wildlife-img"
                  />
                </div>
                <div className="dac-wildlife-card-body">
                  <h3 className="dac-wildlife-card-title">{item.title}</h3>
                  <p className="dac-wildlife-card-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="dac-wildlife-footer-callout">
            <p>
              * Note: Every voyage is different, making each wildlife encounter
              unique and subject to seasonal nature patterns.
            </p>
          </div>
        </div>
      </section>

      {/* BEST TIME TO TAKE A DISNEY ALASKA CRUISE */}
      <section className="dac-timing-section">
        <div className="dac-timing-container">
          <div className="dac-timing-header">
            <span className="dac-timing-eyebrow">Plan Your Journey</span>
            <h2 className="dac-timing-title">
              Best Time to Take a Disney Alaska Cruise
            </h2>
            <div className="dac-timing-accent"></div>
            <p className="dac-timing-lead">
              Disney Alaska sailings operate during the region's warm-weather
              cruise season from May through September. Each month offers unique
              benefits.
            </p>
          </div>

          <div className="dac-timing-grid">
            {[
              {
                month: "May",
                items: [
                  {
                    label: "Fewer Crowds",
                    desc: "Enjoy less crowded ports and sights.",
                  },
                  {
                    label: "Cooler Temperatures",
                    desc: "Crisp spring air, perfect for hiking.",
                  },
                  {
                    label: "Excellent Scenery",
                    desc: "High snow caps on coastal mountain ranges.",
                  },
                ],
              },
              {
                month: "June",
                items: [
                  {
                    label: "Longest Daylight",
                    desc: "Up to 18-20 hours of daylight to explore.",
                  },
                  {
                    label: "Active Wildlife",
                    desc: "Whales returning, bears emerging.",
                  },
                  {
                    label: "Solstice Magic",
                    desc: "Celebrate the summer solstice at sea.",
                  },
                ],
              },
              {
                month: "July",
                items: [
                  {
                    label: "Warmest Weather",
                    desc: "Typically the warmest month in Alaska.",
                  },
                  {
                    label: "Peak Travel Season",
                    desc: "High energy, excellent family environment.",
                  },
                  {
                    label: "Salmon Runs",
                    desc: "Peak spawning season brings wildlife near rivers.",
                  },
                ],
              },
              {
                month: "August",
                items: [
                  {
                    label: "Wildlife Sightings",
                    desc: "Excellent bear viewing and whale watching.",
                  },
                  {
                    label: "Popular Period",
                    desc: "Highly popular month for family cruise vacations.",
                  },
                  {
                    label: "Berry Season",
                    desc: "Wild berries cover forest trail sides.",
                  },
                ],
              },
              {
                month: "September",
                items: [
                  {
                    label: "Fewer Crowds",
                    desc: "Quiet towns, relaxed tour availability.",
                  },
                  {
                    label: "Fall Colors",
                    desc: "Golden foliage across valleys and hills.",
                  },
                  {
                    label: "Cooler Weather",
                    desc: "Cozy evenings, potential Northern Lights viewings.",
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
              Each month brings its own magic to the Last Frontier, making any
              choice a great adventure.
            </p>
          </div>
        </div>
      </section>

      {/* WHY FAMILIES LOVE DISNEY ALASKA CRUISES */}
      <section className="eep-section" id="eep-education">
        <div className="eep-container">
          <div className="eep-section-header">
            <span className="eep-eyebrow">Family Adventure & Discovery</span>

            <h2 className="eep-section-title">
              Why Families Love Disney Alaska Cruises
            </h2>

            <div className="eep-accent-line"></div>
          </div>

          <div className="eep-dossier-grid">
            {/* EDUCATIONAL ADVENTURES */}
            <div className="eep-comparison-card eep-disney-card">
              <div className="eep-card-img-wrap">
                <img
                  // src={DisneyAlaskaLearning}
                  alt="Educational experiences on a Disney Alaska Cruise"
                  className="eep-card-img"
                />

                <span className="eep-card-badge eep-holland-badge">
                  Educational Adventures
                </span>
              </div>

              <div className="eep-card-body">
                <span className="eep-card-brand">Disney Alaska Cruises</span>

                <h3 className="eep-card-title">Learning Through Exploration</h3>

                <p className="eep-card-desc">
                  Alaska provides an incredible environment for learning,
                  discovery, and family exploration.
                </p>

                <div className="eep-card-list-box">
                  <h4 className="eep-list-title">Children Can Learn About:</h4>

                  <ul className="eep-card-list">
                    {[
                      "Wildlife",
                      "Glaciers",
                      "Conservation",
                      "Alaska History",
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
                    Without ever feeling like they're sitting in a classroom,
                    children experience learning through real-world adventures.
                  </p>
                </div>
              </div>
            </div>

            {/* FAMILY BONDING */}
            <div className="eep-comparison-card eep-holland-card">
              <div className="eep-card-img-wrap">
                <img
                  // src={DisneyAlaskaFamilyBonding}
                  alt="Families enjoying a Disney Alaska Cruise together"
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
                  Unlike traditional vacations where family members often split
                  up, Alaska cruises create opportunities for meaningful shared
                  experiences.
                </p>

                <div className="eep-card-list-box">
                  <h4 className="eep-list-title">Families Can Enjoy:</h4>

                  <ul className="eep-card-list">
                    {[
                      "Watch Whales Together",
                      "Explore Glaciers",
                      "Attend Shows",
                      "Enjoy Excursions",
                      "Discover Alaska as a Group",
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
                    generation, and Alaska provides the perfect backdrop for
                    unforgettable family memories.
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
                Disney staterooms remain among the most family-friendly in the
                cruise industry.
              </p>

              <div className="dmg-info-features">
                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>

                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">Split Bathrooms</h3>

                    <p className="dmg-info-feature-desc">
                      A favorite among families.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>

                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">Connecting Rooms</h3>

                    <p className="dmg-info-feature-desc">
                      Ideal for larger groups.
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
                      Perfect for multigenerational travel.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>

                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Concierge-Level Accommodations
                    </h3>

                    <p className="dmg-info-feature-desc">
                      Premium service and exclusive benefits.
                    </p>
                  </div>
                </div>
              </div>

              <p className="dmg-info-lead" style={{ marginTop: "24px" }}>
                Disney's accommodations help families stay comfortable
                throughout their Alaska adventure.
              </p>
            </div>

            <div className="dmg-info-media">
              <div className="dmg-media-wrapper">
                <img
                  // src={FamilySuitesImg}
                  alt="Disney Alaska Cruise family accommodations"
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

      {/* ── SHORE EXCURSIONS WORTH CONSIDERING ───────────────────────────── */}
      <section className="ugt-advantage-section">
        <div className="ugt-container">
          <div className="ugt-advantage-header">
            <span className="ugt-advantage-eyebrow">
              Disney Alaska Excursions
            </span>

            <h2 className="ugt-advantage-title">
              Shore Excursions Worth Considering
            </h2>

            <div className="Asc-accent-line"></div>

            <p className="ugt-advantage-intro">
              Disney offers a variety of family-friendly Alaska excursions.
            </p>
          </div>

          <div className="ugt-advantage-grid">
            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <Compass size={28} strokeWidth={1.5} />
              </div>

              <h4 className="ugt-card-title">Whale Watching Tours</h4>

              <p className="ugt-card-desc">
                A favorite excursion for travelers of all ages.
              </p>
            </div>

            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <Mountain size={28} strokeWidth={1.5} />
              </div>

              <h4 className="ugt-card-title">Glacier Adventures</h4>

              <p className="ugt-card-desc">
                Experience Alaska's spectacular ice fields up close.
              </p>
            </div>

            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <Dog size={28} strokeWidth={1.5} />
              </div>

              <h4 className="ugt-card-title">Dog Sledding Experiences</h4>

              <p className="ugt-card-desc">
                Enjoy one of Alaska's most iconic outdoor adventures.
              </p>
            </div>

            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <Train size={28} strokeWidth={1.5} />
              </div>

              <h4 className="ugt-card-title">Scenic Rail Journeys</h4>

              <p className="ugt-card-desc">
                Explore breathtaking landscapes from historic rail routes.
              </p>
            </div>

            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <Landmark size={28} strokeWidth={1.5} />
              </div>

              <h4 className="ugt-card-title">Cultural Experiences</h4>

              <p className="ugt-card-desc">
                Learn about local traditions and indigenous heritage.
              </p>
            </div>

            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <Binoculars size={28} strokeWidth={1.5} />
              </div>

              <h4 className="ugt-card-title">Wildlife Tours</h4>

              <p className="ugt-card-desc">
                Opportunities to observe Alaska's incredible ecosystems.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* DINING ON A DISNEY ALASKA CRUISE */}
      <section className="dmg-info-section dmg-bg-soft dmg-info-reverse">
        <div className="dmg-info-container">
          <div className="dmg-info-grid">
            <div className="dmg-info-content">
              <div className="dmg-info-header">
                <span className="dmg-info-eyebrow">
                  Disney Alaska Cruise Experience
                </span>

                <h2 className="dmg-info-title">
                  Dining on a Disney Alaska Cruise
                </h2>
                <div className="dmg-info-accent"></div>

                <p className="dmg-info-lead">
                  Dining is an important part of the Disney experience.
                </p>
              </div>

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
                      Different themed restaurants throughout the voyage.
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
                      Options for every age and preference.
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
                      Upscale experiences designed for adults.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Exceptional Service
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Disney's dining teams are consistently praised for their
                      hospitality and attention to detail.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="dmg-info-media">
              <div className="dmg-media-wrapper">
                <img
                  // src={DiningImg}
                  alt="Dining on a Disney Alaska Cruise"
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
      {/* ── DISNEY ALASKA CRUISES FOR GRANDPARENTS & GRANDCHILDREN ─────────────────── */}
      <section className="luc-why-section" id="luc-why">
        <div className="luc-why-container">
          {/* LEFT — stacked images */}
          <div className="luc-why-images">
            <div
              className="luc-why-img-main-wrap"
              style={{
                color: "#fff",
              }}
            >
              <img
                // src={AlaskaFamilyAdventure}
                alt="Grandparents and grandchildren on a Disney Alaska Cruise"
                className="luc-why-img-main"
              />
              <div className="luc-why-img-overlay"></div>
            </div>

            <div
              className="luc-why-img-accent-wrap"
              style={{
                color: "#fff",
              }}
            >
              <img
                // src={AlaskaWildlifeExperience}
                alt="Disney Alaska Cruise multigenerational family vacation"
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
              Disney Alaska Cruises for Grandparents & Grandchildren
            </h2>

            <div className="aac-accent-line aac-accent-white"></div>

            <p className="luc-why-intro">
              Alaska is one of the best destinations for multigenerational
              travel.
            </p>

            <p className="luc-why-intro">
              Grandparents frequently choose Disney Alaska Cruises because they
              offer:
            </p>

            <div className="luc-why-features">
              <div className="luc-why-feature">
                <div className="luc-why-feature-num">01</div>

                <div className="luc-why-feature-body">
                  <h3 className="luc-why-feature-title">Shared Discovery</h3>
                  <p className="luc-why-feature-desc">
                    Exploring glaciers and wildlife creates memories that last a
                    lifetime.
                  </p>
                </div>
              </div>

              <div className="luc-why-feature">
                <div className="luc-why-feature-num">02</div>

                <div className="luc-why-feature-body">
                  <h3 className="luc-why-feature-title">Convenient Travel</h3>
                  <p className="luc-why-feature-desc">
                    Unpack once while visiting multiple destinations throughout
                    Alaska.
                  </p>
                </div>
              </div>

              <div className="luc-why-feature">
                <div className="luc-why-feature-num">03</div>

                <div className="luc-why-feature-body">
                  <h3 className="luc-why-feature-title">
                    Comfortable Accommodations
                  </h3>
                  <p className="luc-why-feature-desc">
                    Disney ships are designed with family comfort in mind.
                  </p>
                </div>
              </div>

              <div className="luc-why-feature">
                <div className="luc-why-feature-num">04</div>

                <div className="luc-why-feature-body">
                  <h3 className="luc-why-feature-title">
                    Activities for Every Generation
                  </h3>
                  <p className="luc-why-feature-desc">
                    Grandparents can relax while grandchildren enjoy youth
                    programs, then reunite for family experiences.
                  </p>
                </div>
              </div>

              <div className="luc-why-feature">
                <div className="luc-why-feature-num">05</div>

                <div className="luc-why-feature-body">
                  <h3 className="luc-why-feature-title">
                    Meaningful Experiences
                  </h3>
                  <p className="luc-why-feature-desc">
                    Many families describe Alaska as one of the most memorable
                    trips they have ever taken together.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IS A DISNEY ALASKA CRUISE WORTH IT? */}
      <section className="adg-section" id="adg-food-itineraries">
        <div className="adg-container">
          <div className="adg-section-header" style={{ marginBottom: "60px" }}>
            <h2 className="adg-h2">Is a Disney Alaska Cruise Worth It?</h2>

            <div className="adg-accent-line"></div>
          </div>

          <div className="adg-split-layout">
            {/* Left Content Column */}
            <div className="adg-content-card-side">
              <img
                // src={ExploraCrema}
                alt="Disney Alaska Cruise family experience"
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
                  Disney Alaska Cruises often cost more than many mainstream
                  Alaska cruise options.
                </p>

                <p className="adg-card-subtext" style={{ marginTop: "18px" }}>
                  However, families frequently find the value in Disney's unique
                  combination of exceptional service, family-focused
                  experiences, world-class entertainment, and unforgettable
                  multigenerational memories.
                </p>

                <p className="adg-card-subtext" style={{ marginTop: "18px" }}>
                  For families traveling together, Disney provides a distinctive
                  blend of Alaska adventure and premium family travel.
                </p>
              </div>
            </div>

            {/* Right Value Grid Column */}
            <div className="adg-list-side">
              {[
                {
                  title: "Disney Service",
                  icon: <Check size={20} />,
                },
                {
                  title: "Family-Friendly Experiences",
                  icon: <Check size={20} />,
                },
                {
                  title: "Broadway-Style Entertainment",
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
                  title: "Exceptional Guest Satisfaction",
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
      {/* WHO SHOULD CHOOSE */}
      <section className="Asc-section Asc-bg-white">
        <div className="Asc-container">
          <div className="Asc-section-header">
            <h2 className="Asc-section-title">
              Who Should Choose a Disney Alaska Cruise?
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
                  "First-Time Alaska Travelers",
                  "Travelers Seeking Premium Family Experiences",
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
                  "Adults Seeking an Adults-Only Cruise",
                  "Travelers Focused Solely on Alaska Education and Enrichment",
                  "Budget-Focused Travelers",
                  "Guests Seeking Ultra-Luxury Expedition Experiences",
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

      {/* VIDEO SECTION */}
      <section
        className="azs-video-section"
        id="azs-video"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="azs-container">
          <div className="azs-section-header">
            <h2 className="azs-h2">Onboard Disney Entertainment</h2>

            <div className="azs-accent-line"></div>

            <p className="azs-video-intro">
              Discover the incredible entertainment that makes Disney Alaska
              Cruises so memorable. From Broadway-style productions and live
              performances to character experiences and family activities,
              Disney delivers world-class entertainment for guests of all ages
              throughout the voyage.
            </p>
          </div>

          <div className="azs-video-wrapper">
            <div className="azs-video-frame">
              <iframe
                src="https://www.youtube.com/embed/rBKx28xA11Y"
                title="Onboard Disney Entertainment"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
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
            alt="Disney Alaska Cruise"
            className="Asc-help-bg-img"
          />
          <div className="Asc-help-overlay"></div>
        </div>

        <div className="Asc-container">
          <div className="Asc-help-card">
            <div className="Asc-help-content">
              <div className="Asc-help-header">
                <span className="Asc-help-eyebrow">Disney Alaska Cruises</span>

                <h2 className="Asc-help-h2">Final Thoughts</h2>

                <div className="Asc-help-accent"></div>
              </div>

              <div className="Asc-help-grid">
                <div className="Asc-help-info">
                  <p className="Asc-help-intro">
                    A Disney Alaska Cruise combines two extraordinary
                    experiences:
                  </p>

                  <p className="Asc-help-intro">
                    <strong>
                      The breathtaking natural beauty of Alaska and the
                      exceptional family-focused service of Disney Cruise Line.
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
                      From glacier viewing and wildlife encounters to
                      Broadway-style entertainment and unforgettable family
                      moments, Disney creates a vacation that appeals to every
                      generation.
                      <br />
                      <br />
                      Whether you're planning a family adventure, celebrating a
                      milestone, or creating memories with grandchildren, Alaska
                      offers a destination unlike any other—and Disney provides
                      one of the most enjoyable ways to experience it.
                      <br />
                      <br />
                      The result is more than a cruise.
                      <br />
                      <br />
                      <strong>
                        It's a family adventure that will be remembered for
                        years to come.
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
                      Plan Your Disney Alaska Cruise
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>

                <div className="Asc-help-list-box">
                  <h3 className="Asc-help-list-title">
                    Why Families Love Disney Alaska Cruises:
                  </h3>

                  <ul className="Asc-help-bullets">
                    {[
                      "Spectacular Glacier Viewing",
                      "Whale Watching & Wildlife Encounters",
                      "Family-Friendly Shore Excursions",
                      "Broadway-Style Disney Entertainment",
                      "Activities for Every Generation",
                      "Exceptional Disney Service",
                      "Unforgettable Family Memories",
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
                      planning your Disney Alaska adventure.
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

export default DisneyAlaskaCruises;
