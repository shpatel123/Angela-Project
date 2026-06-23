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
  Compass,
  Palmtree,
  Mountain,
  Landmark,
  Ship,
  Users,
  Sparkles,
} from "lucide-react";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela2.jpeg";
import HeroImage1 from "../../assets/DisneyCruiseLineVacations/disney-castaway-cay-private-island-aerial-drone-view-cruise-ship.jpg";
import HeroImage2 from "../../assets/DisneyCruiseLineVacations/disney-cruise-line-vacation-packages-special-offers.jpg";
import HeroImage3 from "../../assets/DisneyCruiseLineVacations/disney-wish-palo-steakhouse-adults-only-premium-dining.jpg";
import FamilyVaction from "../../assets/DisneyCruiseLineVacations/disney-wish-sarabi-lounge-family-entertainment-venue-stage.jpg";

import DisneyDiningOverview from "../../assets/DisneyCruiseLineVacations/disney-wish-oceaneer-club-kids-space-interactive-slide.jpg";
import DisneyStateroomExp from "../../assets/DisneyCruiseLineVacations/disney-wish-deluxe-oceanview-stateroom-porthole-cabin-layout.jpg";
import DisneyEntertainmentSpotlight from "../../assets/DisneyCruiseLineVacations/disney-wish-grand-hall-atrium-cinderella-character-meet-greet.jpg";
import DisneyAgeActivities from "../../assets/DisneyCruiseLineVacations/disney-cruise-character-walk-donald-duck-promenade-deck.jpg";
import GrandparentsDisneyCruise from "../../assets/DisneyCruiseLineVacations/family-dining-with-ocean-views-on-disney-cruise-ship.jpg";
import MultigenerationalDisneyCruise from "../../assets/DisneyCruiseLineVacations/guests-enjoying-cocktails-at-cruise-ship-nightlife-bar.jpg";
import DisneyCruiseLineExp1 from "../../assets/DisneyCruiseLineVacations/disney-wish-oceaneer-club-mickey-minnie-captains-deck-kids.jpg";
import DisneyCruiseLineExp2 from "../../assets/DisneyCruiseLineVacations/guests-relaxing-on-luxury-cruise-veranda-deck.jpg";
import DisneyCruiseLineExp3 from "../../assets/DisneyCruiseLineVacations/disney-wish-palo-steakhouse-adults-only-fine-dining-table.jpg";
import DisneyCruiseLineExp4 from "../../assets/DisneyCruiseLineVacations/disney-wish-pool-deck-and-aquamouse-attraction.jpg";
import DisneyCruiseLineExp5 from "../../assets/DisneyCruiseLineVacations/guest-riding-aquamouse-water-slide-on-disney-cruise.jpg";
import DisneyCruiseLineExp6 from "../../assets/DisneyCruiseLineVacations/romantic-couple-cruise-ship-cocktails-adult-vacation-onboard-experience.jpg";
import DisneyCruiseLineExp7 from "../../assets/DisneyCruiseLineVacations/kids-enjoying-disney-cruise-deck-family-vacation-at-sea.jpg";

import Alaska from "../../assets/IsDisneyCruiseReallyForKids/disney-wonder-alaska-glacier-cruise-scenic-inside-passage-adventure.jpeg";
import Bahamas from "../../assets/IsDisneyCruiseReallyForKids/aerial-view-disney-cruise-line-castaway-cay-private-island-bahamas-family-beach.jpg";
import Caribbean from "../../assets/DisneyCruiseLineVacations/disney-cruise-ship-at-caribbean-island-with-water-sports.jpg";
import NorthEurope from "../../assets/IsDisneyCruiseReallyForKids/disney-cruise-line-ship-at-bahamas-island-port-ocean-view.jpg";
import Florida from "../../assets/DisneyCruiseLineVacations/disney-cruise-ship-docked-at-castaway-cay-aerial-view.jpg";
import CTAImage from "../../assets/IsDisneyCruiseReallyForKids/disney-dream-cruise-ship-aerial-ocean-crossing-family-cruise-vacation.jpg";

import { Helmet } from "react-helmet-async";
import "../DisneyCruisevsVikingOcean/DisneyCruisevsVikingOcean.css";

const disneyDestinations = [
  {
    id: "caribbean",
    title: "Disney Caribbean Cruises",
    badge: "Caribbean",
    icon: Palmtree, // Assuming Lucide icon names, adjust if different
    image: Caribbean, // Make sure you have this image imported
    desc: "The Caribbean remains Disney's most popular cruise region.",
    columns: [
      {
        label: "Highlights:",
        items: [
          "White-sand beaches",
          "Crystal-clear waters",
          "Tropical islands",
          "Family-friendly excursions",
          "Warm weather year-round",
        ],
      },
    ],
    themeLabel: "Popular Ports",
    themeText:
      "Popular ports often include destinations throughout the Eastern, Western, and Southern Caribbean.",
  },
  {
    id: "bahamas",
    title: "Disney Bahamas Cruises",
    badge: "Bahamas",
    icon: Ship,
    image: Bahamas,
    desc: "Perfect for first-time cruisers and shorter vacations.",
    columns: [
      {
        label: "Highlights:",
        items: [
          "Relaxing island experiences",
          "Family beach days",
          "Snorkeling adventures",
          "Tropical scenery",
        ],
      },
    ],
    themeLabel: "Private Islands",
    themeText:
      "Many Bahamas itineraries include Disney's private island destinations.",
  },
  {
    id: "alaska",
    title: "Disney Alaska Cruises",
    badge: "Alaska",
    icon: Mountain,
    image: Alaska,
    desc: "One of Disney's most unique vacation experiences.",
    columns: [
      {
        label: "Highlights:",
        items: [
          "Glacier viewing",
          "Wildlife encounters",
          "Scenic cruising",
          "Cultural excursions",
          "Outdoor adventures",
        ],
      },
    ],
    themeLabel: "A Different Side of Disney",
    themeText:
      "Alaska offers a completely different side of Disney Cruise Line.",
  },
  {
    id: "europe",
    title: "Disney Europe Cruises",
    badge: "Europe",
    icon: Landmark,
    image: NorthEurope,
    desc: "Disney brings its signature experience to some of Europe's most iconic destinations.",
    columns: [
      {
        label: "Highlights:",
        items: [
          "Mediterranean ports",
          "Northern Europe",
          "Historic cities",
          "Cultural landmarks",
          "Scenic coastlines",
        ],
      },
    ],
    themeLabel: "Sightseeing Magic",
    themeText:
      "These itineraries combine Disney magic with world-class sightseeing.",
  },
  {
    id: "florida",
    title: "Disney Cruises from Florida",
    badge: "Florida Departures",
    icon: Compass,
    image: Florida,
    desc: "Florida serves as Disney Cruise Line's primary departure region.",
    columns: [
      {
        label: "Popular departure ports include:",
        items: ["Port Canaveral", "Fort Lauderdale", "Miami"],
      },
    ],
    themeLabel: "Convenience",
    themeText:
      "These convenient departures make Disney cruises accessible for many travelers.",
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
        "Luxury travel experts helping families, couples, and multigenerational groups plan unforgettable Disney Cruise Line vacations.",
    },

    {
      "@type": "WebPage",
      "@id": "https://www.tripsandships.com/disney-cruise-line-vacations",
      url: "https://www.tripsandships.com/disney-cruise-line-vacations",
      name: "Disney Cruise Line Vacations | Family, Luxury & Adventure at Sea",
      description:
        "Discover Disney Cruise Line vacations featuring family-friendly entertainment, world-class dining, tropical destinations, Alaska adventures, European cruises, and unforgettable Disney magic at sea.",
      isPartOf: {
        "@id": "https://www.tripsandships.com/#website",
      },
      about: [
        {
          "@type": "Organization",
          name: "Disney Cruise Line",
        },
      ],
    },

    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.tripsandships.com/disney-cruise-line-vacations#breadcrumb",
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
          name: "Cruise Guide",
          item: "https://www.tripsandships.com/cruise-comparisons",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Disney Cruise Line Vacations",
          item: "https://www.tripsandships.com/disney-cruise-line-vacations",
        },
      ],
    },

    {
      "@type": "Trip",
      "@id": "https://www.tripsandships.com/disney-cruise-line-vacations#trip",
      name: "Disney Cruise Line Vacations",
      description:
        "Family, luxury, and adventure at sea aboard Disney Cruise Line, sailing to the Caribbean, Bahamas, Alaska, and Europe.",
      provider: {
        "@type": "Organization",
        name: "Disney Cruise Line",
      },
    },

    {
      "@type": "Cruise",
      "@id":
        "https://www.tripsandships.com/disney-cruise-line-vacations#cruise",
      name: "Disney Cruise Line Vacations",
      description:
        "Disney Cruise Line vacations featuring family-friendly entertainment, world-class dining, tropical destinations, Alaska adventures, and European cruises.",
      provider: {
        "@type": "Organization",
        name: "Disney Cruise Line",
      },
    },

    {
      "@type": "TouristTrip",
      "@id":
        "https://www.tripsandships.com/disney-cruise-line-vacations#touristtrip",
      name: "Disney Cruise Line — Family, Luxury & Adventure at Sea",
      description:
        "Disney Cruise Line vacations sailing to the Caribbean, Bahamas, Alaska, and Europe, designed for families, couples, grandparents, and multigenerational travelers.",
      touristType: [
        "Families",
        "Multigenerational Groups",
        "Disney Fans",
        "First-Time Cruisers",
        "Grandparents Traveling with Grandchildren",
        "Couples Seeking Disney Magic",
      ],
    },

    {
      "@type": "Review",
      "@id":
        "https://www.tripsandships.com/disney-cruise-line-vacations#review",
      itemReviewed: {
        "@type": "TravelAction",
        name: "Disney Cruise Line",
      },
      reviewBody:
        "Disney Cruise Line combines the magic of Disney with the relaxation and excitement of a world-class cruise, creating unforgettable vacations for families, couples, grandparents, and multigenerational travelers.",
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
      "@type": "FAQPage",
      "@id": "https://www.tripsandships.com/disney-cruise-line-vacations#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What destinations does Disney Cruise Line visit?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Disney sails to the Caribbean, Bahamas, Alaska, Europe, Mexico, and other global destinations.",
          },
        },
        {
          "@type": "Question",
          name: "Are Disney cruises only for families?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Disney welcomes families, couples, grandparents, solo travelers, and multigenerational groups.",
          },
        },
        {
          "@type": "Question",
          name: "What is included on a Disney Cruise?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Accommodations, dining, entertainment, kids clubs, character experiences, and many onboard activities are included.",
          },
        },
        {
          "@type": "Question",
          name: "Is Disney Cruise Line worth the cost?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Many travelers believe Disney's service, entertainment, and family experiences justify the premium pricing.",
          },
        },
        {
          "@type": "Question",
          name: "Which Disney ship is best for first-time cruisers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Disney Dream and Disney Wish are often recommended for first-time guests.",
          },
        },
        {
          "@type": "Question",
          name: "Are Disney cruises good for grandparents?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Disney is one of the most popular cruise lines for multigenerational family travel.",
          },
        },
        {
          "@type": "Question",
          name: "Do Disney cruises have adult-only areas?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Dedicated adult spaces include pools, lounges, restaurants, and spa facilities.",
          },
        },
        {
          "@type": "Question",
          name: "Are Disney cruises luxurious?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Disney offers a premium cruise experience with exceptional service and high-quality accommodations.",
          },
        },
        {
          "@type": "Question",
          name: "How long are Disney Cruise vacations?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Itineraries range from short 3-night sailings to extended European and Alaska voyages.",
          },
        },
        {
          "@type": "Question",
          name: "Why do families choose Disney Cruise Line?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Families appreciate the combination of entertainment, service, safety, dining, accommodations, and Disney storytelling.",
          },
        },
        {
          "@type": "Question",
          name: "Can I bring my own alcohol onboard a Disney Cruise?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Guests aged 21 and older may bring up to 2 bottles of unopened wine or champagne, or 6 beers, at the beginning of the voyage and at each port of call. These must be packed in carry-on luggage.",
          },
        },
        {
          "@type": "Question",
          name: "Does Disney Cruise Line offer ground transfers and vacation packages?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Disney Cruise Line offers ground transfers from nearby airports and select Disney Resorts to the cruise port, as well as land-and-sea vacation packages that combine a cruise with a Walt Disney World stay.",
          },
        },
        {
          "@type": "Question",
          name: "What is Disney Cruise Line's dining rotation and dress code?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Disney's unique rotational dining moves you to a different themed restaurant each night with your same servers. The dress code is mostly cruise casual with optional dress-up nights depending on itinerary length.",
          },
        },
        {
          "@type": "Question",
          name: "Is Wi-Fi included, and is there a Disney Cruise app?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Wi-Fi packages are available for purchase onboard. The complimentary Disney Cruise Line Navigator app is highly recommended, allowing guests to view daily schedules, menus, and chat with family members.",
          },
        },
        {
          "@type": "Question",
          name: "How does Disney Cruise Line handle dietary restrictions and allergies?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Disney Cruise Line is exceptionally accommodating with dietary needs, including gluten-free, vegetarian, vegan, halal, kosher, and specific food allergies. You can specify these in your reservation or inform your servers.",
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
      q: "What destinations does Disney Cruise Line visit?",
      a: "Disney sails to the Caribbean, Bahamas, Alaska, Europe, Mexico, and other global destinations.",
    },
    {
      q: "Are Disney cruises only for families?",
      a: "No. Disney welcomes families, couples, grandparents, solo travelers, and multigenerational groups.",
    },
    {
      q: "What is included on a Disney Cruise?",
      a: "Accommodations, dining, entertainment, kids clubs, character experiences, and many onboard activities are included.",
    },
    {
      q: "Is Disney Cruise Line worth the cost?",
      a: "Many travelers believe Disney's service, entertainment, and family experiences justify the premium pricing.",
    },
    {
      q: "Which Disney ship is best for first-time cruisers?",
      a: "Disney Dream and Disney Wish are often recommended for first-time guests.",
    },
    {
      q: "Are Disney cruises good for grandparents?",
      a: "Yes. Disney is one of the most popular cruise lines for multigenerational family travel.",
    },
    {
      q: "Do Disney cruises have adult-only areas?",
      a: "Yes. Dedicated adult spaces include pools, lounges, restaurants, and spa facilities.",
    },
    {
      q: "Are Disney cruises luxurious?",
      a: "Disney offers a premium cruise experience with exceptional service and high-quality accommodations.",
    },
    {
      q: "How long are Disney Cruise vacations?",
      a: "Itineraries range from short 3-night sailings to extended European and Alaska voyages.",
    },
    {
      q: "Why do families choose Disney Cruise Line?",
      a: "Families appreciate the combination of entertainment, service, safety, dining, accommodations, and Disney storytelling.",
    },
    {
      q: "Can I bring my own alcohol onboard a Disney Cruise?",
      a: "Yes. Guests aged 21 and older may bring up to 2 bottles of unopened wine or champagne, or 6 beers, at the beginning of the voyage and at each port of call. These must be packed in carry-on luggage.",
    },
    {
      q: "Does Disney Cruise Line offer ground transfers and vacation packages?",
      a: "Yes. Disney Cruise Line offers ground transfers from nearby airports and select Disney Resorts to the cruise port, as well as land-and-sea vacation packages that combine a cruise with a Walt Disney World stay.",
    },
    {
      q: "What is Disney Cruise Line's dining rotation and dress code?",
      a: "Disney's unique rotational dining moves you to a different themed restaurant each night with your same servers. The dress code is mostly cruise casual with optional dress-up nights depending on itinerary length.",
    },
    {
      q: "Is Wi-Fi included, and is there a Disney Cruise app?",
      a: "Wi-Fi packages are available for purchase onboard. The complimentary Disney Cruise Line Navigator app is highly recommended, allowing guests to view daily schedules, menus, and chat with family members.",
    },
    {
      q: "How does Disney Cruise Line handle dietary restrictions and allergies?",
      a: "Disney Cruise Line is exceptionally accommodating with dietary needs, including gluten-free, vegetarian, vegan, halal, kosher, and specific food allergies. You can specify these in your reservation or inform your servers.",
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

const DisneyCruiseLineVacations = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [readMore, setReadMore] = useState(false);
  const images = [HeroImage1, HeroImage2, HeroImage3];
  const [activeDest, setActiveDest] = useState("caribbean");
  const currentDest =
    disneyDestinations.find((d) => d.id === activeDest) ||
    disneyDestinations[0];

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
          Disney Cruise Line Vacations | Family, Luxury & Adventure at Sea
        </title>
        <meta name="title" content="Disney Cruise Line Vacations" />
        <meta
          name="description"
          content="Discover Disney Cruise Line vacations featuring family-friendly entertainment, world-class dining, tropical destinations, Alaska adventures, European cruises, and unforgettable Disney magic at sea."
        />
        <meta
          property="og:title"
          content="Disney Cruise Line Vacations | Family, Luxury & Adventure at Sea"
        />
        <meta
          property="og:description"
          content="Discover Disney Cruise Line vacations featuring family-friendly entertainment, world-class dining, tropical destinations, and unforgettable Disney magic at sea."
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content="https://www.tripsandships.com/disney-cruise-line-vacations"
        />
        <link
          rel="canonical"
          href="https://www.tripsandships.com/disney-cruise-line-vacations"
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
          <h1>
            Disney Cruise Line Vacations: Where Family Adventures Meet Disney
            Magic
          </h1>

          <p>
            A Disney Cruise Line vacation offers something few travel
            experiences can match — the magic of Disney combined with the
            relaxation and excitement of a world-class cruise.
          </p>

          <p>
            Whether you're sailing through the Caribbean, exploring Alaska's
            glaciers, discovering Europe, or enjoying a tropical getaway to the
            Bahamas, Disney Cruise Line creates unforgettable vacations for
            families, couples, grandparents, and multigenerational travelers.
          </p>

          {readMore && (
            <>
              <p>
                With exceptional service, immersive entertainment, spacious
                accommodations, and destinations around the globe, Disney Cruise
                Line has become one of the most beloved vacation choices in the
                travel industry.
              </p>
              <p>
                At Trips &amp; Ships Luxury Travel, we help travelers plan
                unforgettable Disney Cruise vacations matched to their family,
                their pace, and their dream destinations.
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

      {/* WHAT MAKES DISNEY CRUISE LINE VACATIONS DIFFERENT */}
      <section
        className="ugt-components-section"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="Asc-container">
          <div className="ugt-components-header">
            <h2 className="adg-c-h2">
              What Makes Disney Cruise Line <br /> Vacations Different?
            </h2>

            <div className="adg-c-accent-line"></div>
          </div>

          <div className="ugt-components-list">
            <div className="ugt-component-row">
              <div className="ugt-component-image-wrapper">
                <div className="ugt-component-image-container">
                  <img
                    src={FamilyVaction}
                    alt="Disney Cruise Line vacation experience"
                    className="ugt-component-image"
                  />
                </div>
              </div>

              <div className="ugt-component-content">
                <p className="ugt-component-text">
                  Many cruise lines offer family-friendly vacations. Disney
                  Cruise Line goes beyond family travel by creating experiences
                  designed to delight guests of all ages.
                </p>

                <div className="ugt-questions-box">
                  <span className="ugt-questions-title">
                    Disney Cruise Line Vacations Deliver:
                  </span>

                  <ul className="ugt-questions-list">
                    {[
                      "Disney Storytelling Woven Into Every Voyage",
                      "Exceptional Service & Guest Satisfaction",
                      "Family-Focused Ship Design",
                      "Premium Cruise Experience",
                      "Exclusive Private Island Destinations",
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
                  Characters, entertainment, and experiences are woven into
                  every aspect of the voyage.
                  <br />
                  <br />
                  <strong>
                    Disney combines family entertainment with many luxury-style
                    cruise features.
                  </strong>
                </p>
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
            <h2 className="azs-h2">
              Enjoy 3 Vacations in 1 With Disney Cruise Line
            </h2>
            <div className="azs-accent-line"></div>

            <p className="azs-video-intro">
              Disney Cruise Line offers a vacation experience unlike any other
              that magically brings families together while providing
              unparalleled kid fun and relaxing adult time.
            </p>
          </div>

          <div className="azs-video-wrapper">
            <div className="azs-video-frame">
              <iframe
                src="https://www.youtube.com/embed/Af4CWANXYMc"
                title="Enjoy 3 Vacations in 1 With Disney Cruise Line"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* POPULAR DISNEY CRUISE DESTINATIONS */}
      <section className="luc-destinations-section" id="luc-destinations">
        <div className="luc-destinations-container">
          <div className="luc-destinations-header">
            <h2 className="luc-destinations-title">
              Popular Disney Cruise Destinations
            </h2>

            <div className="adg-c-accent-line"></div>

            <p className="luc-destinations-intro">
              Disney Cruise Line sails to some of the world's most desirable
              vacation destinations.
            </p>
          </div>

          <div className="luc-dest-layout">
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

      {/* IMAGE GALLERY */}
      <section className="dfg-gallery-section" id="dfg-gallery">
        <div className="dfg-gallery-container">
          <div className="dfg-gallery-header">
            <span className="dfg-gallery-eyebrow">
              Disney Cruise Line Experience
            </span>
            <h2 className="dfg-gallery-title">
              {" "}
              The Best of Disney Cruise Line Experiences
            </h2>
            <div className="dfg-gallery-accent"></div>
            <p className="dfg-gallery-intro">
              From private island beaches to spacious family suites, kids clubs,
              and adult lounges — Disney Cruise Line delivers premium
              experiences designed for every generation.
            </p>
          </div>

          <div className="dfg-gallery-mosaic">
            <div
              className="dfg-gallery-item dfg-gallery-large"
              style={{ color: "#fff" }}
            >
              <img
                src={DisneyCruiseLineExp4}
                alt="Disney private island and family deck experience"
                className="dfg-gallery-img"
              />
              <div className="dfg-gallery-overlay">
                <span className="dfg-gallery-caption">
                  AquaMouse & Pool Deck Adventures
                </span>
              </div>
            </div>

            <div
              className="dfg-gallery-item dfg-gallery-tall"
              style={{ color: "#fff" }}
            >
              <img
                src={DisneyCruiseLineExp5}
                alt="Disney Cruise Royal Suite for multigenerational family luxury travel"
                className="dfg-gallery-img"
              />
              <div className="dfg-gallery-overlay">
                <span className="dfg-gallery-caption">
                  Thrilling Family Attractions
                </span>
              </div>
            </div>

            <div
              className="dfg-gallery-item dfg-gallery-wide"
              style={{ color: "#fff" }}
            >
              <img
                src={DisneyCruiseLineExp7}
                alt="Disney Wish Oceaneer Club interactive play space for kids"
                className="dfg-gallery-img"
              />
              <div className="dfg-gallery-overlay">
                <span className="dfg-gallery-caption">
                  Adults-Only Lounges & Relaxation
                </span>
              </div>
            </div>

            <div
              className="dfg-gallery-item dfg-gallery-square"
              style={{ color: "#fff" }}
            >
              <img
                src={DisneyCruiseLineExp6}
                alt="Disney Wish Sarabi Lounge with modern interior design"
                className="dfg-gallery-img"
              />
              <div className="dfg-gallery-overlay">
                <span className="dfg-gallery-caption">Family Fun at Sea</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DISNEY'S PRIVATE ISLAND EXPERIENCES */}
      <section className="adg-c-section adg-c-bg-soft" id="adg-private-island">
        <div className="adg-c-container">
          <div className="adg-c-section-header">
            <span className="adg-c-eyebrow">Exclusive Island Destinations</span>

            <h2 className="adg-c-h2">
              Disney's Private Island <br /> Experiences
            </h2>

            <div className="adg-c-accent-line"></div>

            <p className="Asc-section-intro">
              One of the biggest highlights of many Disney vacations is visiting
              Disney's private island destinations. These destinations
              consistently rank among guests' favorite cruise memories.
            </p>
          </div>

          <div className="adg-c-venues-grid1">
            {[
              {
                id: 1,
                eyebrow: "Island Highlight",
                name: "Beautiful Beaches",
                highlight: "Relax in Tropical Paradise",
                items: [
                  "Powder-Soft Sand",
                  "Crystal-Clear Water",
                  "Private Cabanas",
                  "Scenic Ocean Views",
                ],
                callout:
                  "Disney's private islands offer some of the most picturesque beach settings found anywhere in the Caribbean and Bahamas.",
              },
              {
                id: 2,
                eyebrow: "Family Fun",
                name: "Family Activities",
                highlight: "Beach Games, Water Sports & More",
                items: [
                  "Beach Games",
                  "Water Sports",
                  "Snorkeling",
                  "Family Excursions",
                ],
                callout:
                  "Guests enjoy a full day of beach games, water sports, and family fun in a private, exclusive setting.",
              },
              {
                id: 3,
                eyebrow: "Adult Retreat",
                name: "Adult Areas",
                highlight: "Dedicated Spaces for Quiet Enjoyment",
                items: [
                  "Adult-Only Beaches",
                  "Quiet Cabanas",
                  "Relaxation Lounges",
                  "Beachside Bars",
                ],
                callout:
                  "Dedicated adult areas provide a peaceful retreat away from the family beach zones.",
              },
              {
                id: 4,
                eyebrow: "Included Value",
                name: "Included Amenities",
                highlight: "Built Into Your Cruise Vacation",
                items: [
                  "Beach Access",
                  "Lunch & BBQ",
                  "Recreational Equipment",
                  "Tender Transportation",
                ],
                callout:
                  "Many island experiences are included as part of your cruise vacation, adding exceptional value to your trip.",
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

      {/* ══ DINING ON DISNEY CRUISE VACATIONS ═══════════════════════ */}
      <section className="dmg-info-section dmg-bg-white" id="dmg-dining">
        <div className="dmg-info-container">
          <div className="dmg-info-grid">
            {/* Left Side Image */}
            <div className="dmg-info-media">
              <div className="dmg-media-wrapper">
                <img
                  src={DisneyDiningOverview} // Define or swap with your Disney dining image variable
                  alt="Family enjoying Disney rotational dining experience"
                  className="dmg-media-img"
                />
                <div className="dmg-media-overlay"></div>

                <div className="dmg-media-badge">
                  <span>Rotational Dining</span>
                </div>
              </div>
            </div>

            {/* Right Side Content */}
            <div className="dmg-info-content">
              <h2 className="dmg-info-title">
                Dining on Disney Cruise Vacations
              </h2>
              <div className="dmg-info-accent"></div>

              <p className="dmg-info-lead">
                Dining is one of the most celebrated parts of the Disney Cruise
                experience.
              </p>

              <div className="dmg-info-features dmg-info-features-scrollable">
                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Rotational Dining
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Guests rotate through multiple themed restaurants while
                      keeping the same serving team, offering exceptional
                      variety, personalized service, and unique restaurant
                      experiences.
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
                      Thoughtfully crafted culinary options suited perfectly for
                      both adults and children alike.
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
                      Upscale, adult-exclusive dining venues are available on
                      select ships for an additional charge.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DISNEY CRUISE SHIPS */}
      <section className="Lfsg-section Lfsg-bg-dark" id="Lfsg-ships">
        <div className="Lfsg-container">
          <div className="Lfsg-section-header">
            <h2 className="Lfsg-h2-white">Disney Cruise Ships</h2>

            <div className="Lfsg-accent-line-white" />
          </div>

          <div className="Lfsg-mistakes-grid">
            {[
              {
                title: "Disney Magic",
                desc: "The ship that started it all — known for classic Disney charm, a family atmosphere, and European and Caribbean itineraries.",
              },
              {
                title: "Disney Wonder",
                desc: "A favorite for Alaska cruises — known for Alaska sailings, family entertainment, and an intimate atmosphere.",
              },
              {
                title: "Disney Dream",
                desc: "Popular among first-time Disney cruisers — known for Bahamian itineraries, family attractions, and modern amenities.",
              },
              {
                title: "Disney Fantasy",
                desc: "Designed for longer Caribbean vacations — known for expanded entertainment, family experiences, and tropical itineraries.",
              },
              {
                title: "Disney Wish",
                desc: "A newer generation of Disney cruising — known for innovative dining, immersive storytelling, and luxury-inspired design.",
              },
              {
                title: "Disney Treasure",
                desc: "Expands Disney's newest cruise experiences — known for adventure-themed experiences, family entertainment, and modern accommodations.",
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

      <section className="dmg-info-section dmg-bg-soft" id="dmg-accommodations">
        <div className="dmg-info-container">
          <div className="dmg-info-grid">
            <div className="dmg-info-content">
              <h2 className="dmg-info-title">
                Accommodations on Disney Cruise Line
              </h2>
              <div className="dmg-info-accent"></div>

              <p className="dmg-info-lead">
                Disney offers some of the most family-friendly staterooms in
                cruising.
              </p>

              <div className="dmg-info-features dmg-info-features-scrollable">
                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">Spacious Layouts</h3>
                    <p className="dmg-info-feature-desc">
                      Many rooms provide more space than comparable cruise
                      lines.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Family-Oriented Features
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Designed specifically for traveling families.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Concierge-Level Suites
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Premium accommodations for luxury travelers.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Oceanview and Veranda Options
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Popular choices for families and couples alike.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="dmg-info-media">
              <div className="dmg-media-wrapper">
                <img
                  src={DisneyStateroomExp}
                  alt="Disney Cruise Line family stateroom layout"
                  className="dmg-media-img"
                />
                <div className="dmg-media-overlay"></div>

                <div className="dmg-media-badge">
                  <span>Family-Friendly Luxury</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ DISNEY CRUISE EXPERIENCE SPOTLIGHTS ═════════════════════════ */}
      <section className="dbf-spotlight-section">
        <div className="dbf-spotlight-container">
          <div className="dbf-spotlight-header">
            <h2 className="dbf-spotlight-title">
              Disney Cruise Experience Highlights
            </h2>
            <div className="dbf-spotlight-accent"></div>
          </div>

          <div className="dbf-spotlight-grid">
            {/* CARD 1: Entertainment at Sea */}
            <div className="dbf-spotlight-card dbf-spotlight-card--wish">
              <div className="dbf-spotlight-card-header">
                <span className="dbf-spotlight-card-badge">
                  Onboard Entertainment
                </span>
                <h3 className="dbf-spotlight-card-title">
                  Entertainment at Sea
                </h3>
              </div>

              <div className="dbf-spotlight-card-media">
                <img
                  src={DisneyEntertainmentSpotlight}
                  alt="Broadway-style Disney production live on stage"
                  className="dbf-spotlight-card-img"
                />
                <div className="dbf-spotlight-card-img-overlay"></div>
                <div className="dbf-spotlight-card-icon-badge">
                  <Sparkles size={18} />
                </div>
              </div>

              <div className="dbf-spotlight-card-body">
                <p className="dbf-spotlight-card-lead">
                  Disney Cruise Line is known for delivering some of the best
                  entertainment in the cruise industry, offering world-class
                  magic and spectacular variety across every deck.
                </p>

                <div className="dbf-spotlight-features-box">
                  <h4 className="dbf-spotlight-features-title">
                    Entertainment Highlights:
                  </h4>

                  <ul className="dbf-spotlight-features-list">
                    {[
                      {
                        title: "Broadway-Style Productions",
                        text: "Spectacular live musical performances inspired by timeless Disney stories.",
                      },
                      {
                        title: "Character Meet-and-Greets",
                        text: "Meet and take photos with your favorite Disney characters throughout the voyage.",
                      },
                      {
                        title: "Deck Parties",
                        text: "High-energy, interactive celebrations and themed events for the whole family.",
                      },
                      {
                        title: "First-Run Disney Movies",
                        text: "Watch the latest Disney, Pixar, Marvel, and Star Wars films onboard.",
                      },
                    ].map((item, idx) => (
                      <li key={idx} className="dbf-spotlight-feature-item">
                        <span className="dbf-spotlight-feature-check">
                          <Check size={12} />
                        </span>
                        <div className="dbf-spotlight-feature-text">
                          <strong>{item.title}</strong> — {item.text}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="dbf-spotlight-card-footer">
                <Sparkles size={16} className="dbf-spotlight-footer-icon" />
                <p>
                  Immersive entertainment is a major reason many families choose
                  Disney Cruise Line.
                </p>
              </div>
            </div>

            {/* CARD 2: Activities for Every Age */}
            <div className="dbf-spotlight-card dbf-spotlight-card--fantasy">
              <div className="dbf-spotlight-card-header">
                <span className="dbf-spotlight-card-badge dbf-spotlight-card-badge--navy">
                  Family Experiences
                </span>
                <h3 className="dbf-spotlight-card-title">
                  Activities for Every Age
                </h3>
              </div>

              <div className="dbf-spotlight-card-media">
                <img
                  src={DisneyAgeActivities}
                  alt="Children and families enjoying age-specific onboard activities"
                  className="dbf-spotlight-card-img"
                />
                <div className="dbf-spotlight-card-img-overlay"></div>
                <div className="dbf-spotlight-card-icon-badge">
                  <Users size={18} />
                </div>
              </div>

              <div className="dbf-spotlight-card-body">
                <p className="dbf-spotlight-card-lead">
                  Disney excels at creating experiences tailored perfectly for
                  every generation, balancing dedicated separate spaces with
                  shared moments.
                </p>

                <div className="dbf-spotlight-features-box">
                  <h4 className="dbf-spotlight-features-title">
                    Age-Specific Options:
                  </h4>

                  <ul className="dbf-spotlight-features-list">
                    {[
                      {
                        title: "Kids Clubs",
                        text: "Supervised, age-specific youth spaces filled with immersive Disney-themed activities.",
                      },
                      {
                        title: "Teen Clubs",
                        text: "Dedicated chill lounges designed exclusively for older children and teenagers.",
                      },
                      {
                        title: "Adult-Only Areas",
                        text: "Quiet, sophisticated retreats, upscale lounges, private pools, and dining venues.",
                      },
                      {
                        title: "Family Activities",
                        text: "Trivia games, deck shows, movies, and lively events designed to bring families together.",
                      },
                    ].map((item, idx) => (
                      <li key={idx} className="dbf-spotlight-feature-item">
                        <span className="dbf-spotlight-feature-check">
                          <Check size={12} />
                        </span>
                        <div className="dbf-spotlight-feature-text">
                          <strong>{item.title}</strong> — {item.text}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="dbf-spotlight-card-footer">
                <Users size={16} className="dbf-spotlight-footer-icon" />
                <p>
                  Thoughtfully planned multi-generational venues ensure everyone
                  finds their perfect vacation pace.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DISNEY CRUISES FOR MULTIGENERATIONAL FAMILIES */}
      <section className="luc-why-section" id="luc-why">
        <div className="luc-why-container">
          <div className="luc-why-images">
            <div
              className="luc-why-img-main-wrap"
              style={{
                color: "#fff",
              }}
            >
              <img
                src={GrandparentsDisneyCruise}
                alt="Grandparents enjoying a Disney Cruise"
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
                src={MultigenerationalDisneyCruise}
                alt="Multigenerational Disney Cruise vacation"
                className="luc-why-img-accent"
              />

              <div className="luc-why-img-badge">
                <span className="luc-why-badge-num">6</span>
                <span className="luc-why-badge-text">Reasons to Love It</span>
              </div>
            </div>
          </div>

          <div className="luc-why-content">
            <h2 className="luc-why-title">
              Disney Cruises for Multigenerational Families
            </h2>

            <div className="aac-accent-line aac-accent-white"></div>

            <p className="luc-why-intro">
              Disney is one of the best cruise lines for grandparents, parents,
              and children traveling together. Many families return year after
              year because Disney creates memorable experiences across
              generations.
            </p>

            <div className="luc-why-features">
              <div className="luc-why-feature">
                <div className="luc-why-feature-num">01</div>

                <div className="luc-why-feature-body">
                  <h3 className="luc-why-feature-title">
                    Activities for Every Age
                  </h3>

                  <p className="luc-why-feature-desc">
                    Dedicated spaces and programming ensure every generation has
                    something to enjoy.
                  </p>
                </div>
              </div>

              <div className="luc-why-feature">
                <div className="luc-why-feature-num">02</div>

                <div className="luc-why-feature-body">
                  <h3 className="luc-why-feature-title">Shared Experiences</h3>

                  <p className="luc-why-feature-desc">
                    Families create lasting memories together while exploring
                    new destinations and enjoying onboard activities.
                  </p>
                </div>
              </div>

              <div className="luc-why-feature">
                <div className="luc-why-feature-num">03</div>

                <div className="luc-why-feature-body">
                  <h3 className="luc-why-feature-title">Flexible Dining</h3>

                  <p className="luc-why-feature-desc">
                    Rotational dining and family-friendly menus give every
                    generation options they'll enjoy.
                  </p>
                </div>
              </div>

              <div className="luc-why-feature">
                <div className="luc-why-feature-num">04</div>

                <div className="luc-why-feature-body">
                  <h3 className="luc-why-feature-title">
                    Spacious Accommodations
                  </h3>

                  <p className="luc-why-feature-desc">
                    Family-oriented staterooms make traveling together
                    comfortable, no matter how many generations are along for
                    the trip.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ WHAT IS INCLUDED IN A DISNEY CRUISE VACATION ══════════════ */}
      <section className="dac-families-section">
        <div className="dac-families-container">
          <div className="dac-families-grid">
            {/* Left Content Column */}
            <div className="dac-families-left">
              <div className="dac-families-heading-wrap">
                <h2 className="dac-families-title">
                  What Is Included in a Disney Cruise Vacation?
                </h2>
                <div className="dac-families-accent"></div>
              </div>

              <div className="dac-families-features">
                {[
                  {
                    title: "Accommodations",
                    desc: "Your comfortable and family-friendly stateroom designed with signature Disney touches.",
                  },
                  {
                    title: "Dining",
                    desc: "All regular meals throughout your voyage, including breakfast, lunch, dinner, and snacks.",
                  },
                  {
                    title: "Entertainment",
                    desc: "Broadway-style theater shows, first-run movies, and immersive themed deck parties.",
                  },
                  {
                    title: "Kids Clubs",
                    desc: "Fully supervised, age-specific youth programming packed with interactive Disney experiences.",
                  },
                  {
                    title: "Character Experiences",
                    desc: "Scheduled meet-and-greets, surprise appearances, and uniquely themed special events.",
                  },
                  {
                    title: "Pools and Recreation",
                    desc: "Full access to onboard recreational facilities, waterslides, and splash zones.",
                  },
                  {
                    title: "Transportation Between Dining Venues",
                    desc: "Seamlessly experience different themed restaurants each night through Disney's unique rotational dining program.",
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
                    src={DisneyCruiseLineExp1}
                    alt="Disney Cruise Rotational Dining Experience"
                    className="dac-families-img"
                  />
                  <div className="dac-families-img-caption">
                    Rotational Dining Experience
                  </div>
                </div>

                <div className="dac-families-img-card dac-families-img-card--secondary">
                  <img
                    src={DisneyCruiseLineExp2}
                    alt="Disney Cruise Deck Party and Entertainment"
                    className="dac-families-img"
                  />
                  <div className="dac-families-img-caption">
                    Onboard Entertainment
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK COMPARISON OVERVIEW */}
      <section className="Asc-section Asc-bg-soft" id="Asc-fleet">
        <div className="Asc-container">
          <div className="Asc-section-header">
            <h2 className="Asc-h2">Disney vs Other Cruise Lines</h2>

            <div className="Asc-accent-line"></div>
          </div>

          <div className="Asc-table-wrapper">
            <table className="Asc-fleet-table">
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Disney Cruise Line</th>
                  <th>Typical Mainstream Cruise Line</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>
                    <strong>Family Experience</strong>
                  </td>
                  <td>Exceptional</td>
                  <td>Good</td>
                </tr>

                <tr>
                  <td>
                    <strong>Entertainment</strong>
                  </td>
                  <td>Industry Leading</td>
                  <td>Moderate</td>
                </tr>

                <tr>
                  <td>
                    <strong>Private Island Access</strong>
                  </td>
                  <td>Exclusive</td>
                  <td>Varies</td>
                </tr>

                <tr>
                  <td>
                    <strong>Service</strong>
                  </td>
                  <td>Outstanding</td>
                  <td>Varies</td>
                </tr>

                <tr>
                  <td>
                    <strong>Kids Programs</strong>
                  </td>
                  <td>Industry Leading</td>
                  <td>Good</td>
                </tr>

                <tr>
                  <td>
                    <strong>Multigenerational Travel</strong>
                  </td>
                  <td>Exceptional</td>
                  <td>Moderate</td>
                </tr>

                <tr>
                  <td>
                    <strong>Character Experiences</strong>
                  </td>
                  <td>Unique</td>
                  <td>None</td>
                </tr>
              </tbody>
            </table>
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
            <h2 className="azs-h2">Why Families Love Disney Cruise Line</h2>
            <div className="azs-accent-line"></div>

            <p className="azs-video-intro">
              Disney Cruise Line offers a vacation experience unlike any other
              that magically brings families together while providing
              unparalleled kid fun and relaxing adult time.
            </p>
          </div>

          <div className="azs-video-wrapper">
            <div className="azs-video-frame">
              <iframe
                src="https://www.youtube.com/embed/qxzrC4ahtDQ"
                title="What’s Great About A Disney Cruise? | Disney Cruise Line"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <section className="adg-c-section adg-c-bg-soft">
        <div className="adg-c-container">
          <div className="adg-c-section-header">
            <h2 className="adg-c-h2">Is Disney Cruise Line Luxury?</h2>
            <div className="adg-c-accent-line"></div>
          </div>

          <div className="adg-c-overview-layout">
            {/* LEFT — list */}
            <div className="adg-c-overview-icons">
              <div className="adg-c-overview-item">
                <span className="adg-c-overview-icon">✔</span>
                <span className="adg-c-overview-label">Premium</span>
              </div>

              <div className="adg-c-overview-item">
                <span className="adg-c-overview-icon">✔</span>
                <span className="adg-c-overview-label">Family Luxury</span>
              </div>

              <div className="adg-c-overview-item">
                <span className="adg-c-overview-icon">✔</span>
                <span className="adg-c-overview-label">Service-Focused</span>
              </div>

              <div className="adg-c-overview-item">
                <span className="adg-c-overview-icon">✔</span>
                <span className="adg-c-overview-label">Experience-Driven</span>
              </div>
            </div>

            {/* RIGHT — callout card + image */}
            <div className="adg-c-overview-right">
              <div className="adg-c-overview-callout">
                <div className="adg-c-overview-callout-inner">
                  <Star size={28} className="adg-c-callout-star" />
                  <p className="adg-c-callout-text">
                    Disney is not traditionally classified as an ultra-luxury
                    cruise line. However, many travelers describe the experience
                    as uniquely high-end. Disney often competes successfully
                    with premium and luxury cruise brands when it comes to guest
                    satisfaction.
                  </p>
                </div>
              </div>

              <div className="adg-c-overview-image-wrap">
                <img
                  src={DisneyCruiseLineExp3}
                  alt="Disney Cruise Line Premium Experience"
                  className="adg-c-overview-img"
                />
                <div className="adg-c-overview-img-overlay">
                  <span className="adg-c-overview-img-label">
                    Disney Cruise Experience
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHO SHOULD CHOOSE A DISNEY CRUISE VACATION */}
      <section className="Asc-section Asc-bg-white" id="Asc-who">
        <div className="Asc-container">
          <div className="Asc-section-header">
            <h2 className="Asc-h2">
              Who Should Choose a Disney Cruise Vacation?
            </h2>

            <div className="Asc-accent-line"></div>

            <p className="Asc-section-intro">
              Disney appeals to a surprisingly broad range of travelers.
            </p>
          </div>

          <div className="Asc-who-grid">
            <div className="Asc-who-card Asc-who-yes">
              <h3 className="Asc-who-title">Disney Cruise Line Is Ideal For</h3>

              <ul className="Asc-who-list">
                {[
                  "Families",
                  "Multigenerational Groups",
                  "Disney Fans",
                  "First-Time Cruisers",
                  "Grandparents Traveling with Grandchildren",
                  "Couples Seeking Disney Magic",
                  "Travelers Wanting Premium Family Experiences",
                ].map((item, i) => (
                  <li key={i}>
                    <Check size={16} className="Asc-icon-green" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="Asc-who-card Asc-who-no">
              <h3 className="Asc-who-title">
                May Want to Consider Other Options
              </h3>

              <ul className="Asc-who-list">
                {[
                  "Travelers Seeking an Adults-Only Environment",
                  "Nightlife & Casino-Focused Vacations",
                  "Ultra-Luxury All-Inclusive Cruising",
                  "Budget Travelers Focused Solely on Lowest Fare",
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
          <div className="Adg-expert-heading">
            <span className="Adg-expert-eyebrow">Family Travel Expertise</span>

            <h2 className="Adg-expert-title">
              Angela Hughes: Helping Families Explore the World Together
            </h2>

            <div className="Adg-expert-divider"></div>
          </div>

          <div className="Adg-expert-grid">
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

            <div className="Adg-expert-content-col">
              <div className="Adg-expert-quote-box">
                <div className="Adg-expert-quote-icon">
                  <Quote size={36} />
                </div>

                <blockquote className="Adg-expert-quote-text">
                  With more than 40 years in the travel industry and travel
                  experience across 121 countries, Angela Hughes understands
                  what makes a Disney Cruise vacation successful for families,
                  couples, and multigenerational groups alike.
                </blockquote>
              </div>

              <div className="Adg-expert-credentials-box">
                <h4 className="Adg-expert-credentials-title">
                  <Award size={16} />
                  Disney Cruise Vacation Expertise
                </h4>

                <div className="Adg-expert-credentials-grid">
                  {[
                    "Match Families to the Right Disney Ship",
                    "Plan Multigenerational Itineraries",
                    "Balance Magic, Relaxation & Adventure",
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

              <div
                className="Adg-expert-quote-box"
                style={{ marginTop: "24px" }}
              >
                <blockquote className="Adg-expert-quote-text">
                  For families, grandparents, and Disney fans alike, that
                  expertise can make all the difference.
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
              Everything you need to know about planning a Disney Cruise Line
              vacation.
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
            alt="Disney Cruise Line vacation experience"
            className="Asc-help-bg-img"
          />
          <div className="Asc-help-overlay"></div>
        </div>

        <div className="Asc-container">
          <div className="Asc-help-card">
            <div className="Asc-help-content">
              <div className="Asc-help-header">
                <span className="Asc-help-eyebrow">
                  Disney Cruise Line Vacations
                </span>

                <h2 className="Asc-help-h2">
                  More Than a Vacation — <br />
                  Disney Magic, Memories & Moments
                </h2>

                <div className="Asc-help-accent"></div>
              </div>

              <div className="Asc-help-grid">
                <div className="Asc-help-info">
                  <p className="Asc-help-intro">
                    Disney Cruise Line vacations combine the excitement of
                    world-class cruising with the timeless magic of Disney
                    storytelling.
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
                      Whether you're exploring Alaska's glaciers, relaxing on a
                      Caribbean beach, discovering Europe, or creating
                      unforgettable family memories at sea, Disney offers an
                      experience unlike any other cruise line.
                      <br />
                      <br />
                      For families, grandparents, couples, and Disney fans
                      alike, the result is more than just a vacation.
                      <br />
                      <strong>
                        {" "}
                        It's a journey filled with memories, magic, and moments
                        you'll treasure long after you return home.
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
                      Plan Your Disney Cruise
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>

                <div className="Asc-help-list-box">
                  <h3 className="Asc-help-list-title">
                    What's Included in a Disney Cruise Vacation:
                  </h3>

                  <ul className="Asc-help-bullets">
                    {[
                      "Accommodations",
                      "Dining (Breakfast, Lunch, Dinner & Snacks)",
                      "Entertainment & Deck Parties",
                      "Kids Clubs",
                      "Character Experiences",
                      "Pools & Recreation",
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
                      Contact Trips &amp; Ships Luxury Travel to start planning
                      your Disney Cruise Line vacation today.
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

export default DisneyCruiseLineVacations;
