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
  HeartHandshake,
  Compass,
  Palmtree,
  Mountain,
  Landmark,
} from "lucide-react";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela2.jpeg";
import HeroImage1 from "../../assets/IsDisneyCruiseReallyForKids/disney-cruise-line-vacation-packages-special-offers.jpg";
import HeroImage2 from "../../assets/IsDisneyCruiseReallyForKids/disney-dream-cruise-ship-ocean-sunset-aerial-view.jpg";
import HeroImage3 from "../../assets/IsDisneyCruiseReallyForKids/disney-cruise-character-walk-donald-duck-promenade-deck.jpg";
import FamilyVaction from "../../assets/IsDisneyCruiseReallyForKids/disney-wish-luna-lounge-circular-stage-architecture.jpg";

import DisneyCruiseLineExperiences1 from "../../assets/IsDisneyCruiseReallyForKids/accessible-disney-cruise-experience-for-families-on-deck.jpeg";
import DisneyCruiseLineExperiences2 from "../../assets/IsDisneyCruiseReallyForKids/disney-cruise-royal-suite-multigenerational-family-luxury-travel.jpg";
import DisneyCruiseLineExperiences3 from "../../assets/IsDisneyCruiseReallyForKids/disney-wish-oceaneer-club-kids-space-interactive-slide.jpg";
import DisneyCruiseLineExperiences4 from "../../assets/IsDisneyCruiseReallyForKids/disney-wish-sarabi-lounge-interior-modern-wood-architecture.jpg";
import GrandparentsDisneyCruise from "../../assets/IsDisneyCruiseReallyForKids/disney-wish-the-rose-adults-only-lounge-oceanview.jpg";
import MultigenerationalDisneyCruise from "../../assets/IsDisneyCruiseReallyForKids/family-enjoying-pirate-night-deck-party-fireworks-cruise-ship.jpg";
import Alaska from "../../assets/IsDisneyCruiseReallyForKids/disney-wonder-alaska-glacier-cruise-scenic-inside-passage-adventure.jpeg";
import Bahamas from "../../assets/IsDisneyCruiseReallyForKids/aerial-view-disney-cruise-line-castaway-cay-private-island-bahamas-family-beach.jpg";
import Mediterranean from "../../assets/IsDisneyCruiseReallyForKids/disney-dream-cruise-ship-mediterranean-cannes-france.jpg";
import NorthEurope from "../../assets/IsDisneyCruiseReallyForKids/disney-cruise-line-ship-at-bahamas-island-port-ocean-view.jpg";

import PremiumService from "../../assets/IsDisneyCruiseReallyForKids/Disney-Treasure-Periscope-Pub.jpg";
import Accommodations from "../../assets/IsDisneyCruiseReallyForKids/Disney-Treasure-Funnel-Suite.jpg";
import SpaciousFamilySuites from "../../assets/IsDisneyCruiseReallyForKids/disney-cruise-line-deluxe-oceanview-stateroom-with-private-verandah.jpg";
import FineDining from "../../assets/IsDisneyCruiseReallyForKids/disney-wish-oceaneer-club-mickey-minnie-captains-deck-kids.jpg";
import PersonalizedExperiences from "../../assets/IsDisneyCruiseReallyForKids/romantic-couple-cruise-ship-cocktails-adult-vacation-onboard-experience.jpg";
import HighAttention from "../../assets/IsDisneyCruiseReallyForKids/disney-wish-sarabi-lounge-family-entertainment-venue-stage.jpg";
import CTAImage from "../../assets/IsDisneyCruiseReallyForKids/disney-dream-cruise-ship-aerial-ocean-crossing-family-cruise-vacation.jpg";

import { Helmet } from "react-helmet-async";
import "../DisneyCruisevsVikingOcean/DisneyCruisevsVikingOcean.css";

const disneyDestinations = [
  {
    id: "alaska",
    title: "Alaska",
    badge: "Alaska",
    icon: Mountain,
    image: Alaska,
    desc: "Alaska cruises combine breathtaking scenery with enriching experiences that appeal to travelers of all ages.",
    columns: [
      {
        label: "Featuring:",
        items: [
          "Glacier Viewing",
          "Wildlife Encounters",
          "Educational Experiences",
        ],
      },
    ],
    themeLabel: "Destination Highlight",
    themeText:
      "Alaska offers unforgettable opportunities to experience nature, wildlife, and learning-focused adventures together.",
  },
  {
    id: "mediterranean",
    title: "Mediterranean",
    badge: "Mediterranean",
    icon: Landmark,
    image: Mediterranean,
    desc: "Mediterranean itineraries combine family adventure with cultural discovery across some of the world's most iconic destinations.",
    columns: [
      {
        label: "Offering:",
        items: [
          "Historic Cities",
          "Cultural Exploration",
          "Family Learning Opportunities",
        ],
      },
    ],
    themeLabel: "Destination Highlight",
    themeText:
      "The Mediterranean blends history, culture, and exploration into one unforgettable family vacation.",
  },
  {
    id: "northern-europe",
    title: "Northern Europe",
    badge: "Northern Europe",
    image: NorthEurope,
    icon: Landmark,
    // image: NorthernEuropeImage,
    desc: "Northern Europe cruises offer a mix of scenic landscapes, fascinating history, and cultural immersion.",
    columns: [
      {
        label: "Combining:",
        items: ["Scenic Cruising", "Rich History", "Cultural Discovery"],
      },
    ],
    themeLabel: "Destination Highlight",
    themeText:
      "These voyages appeal to travelers interested in both beautiful destinations and meaningful cultural experiences.",
  },
  {
    id: "caribbean",
    title: "Caribbean & Bahamas",
    badge: "Caribbean & Bahamas",
    icon: Palmtree,
    image: Bahamas,
    desc: "These popular itineraries are perfect for relaxation, sunshine, and family fun.",
    columns: [
      {
        label: "Perfect For:",
        items: ["Beach Days", "Family Fun", "Relaxation", "Island Adventures"],
      },
    ],
    themeLabel: "Destination Highlight",
    themeText:
      "Caribbean and Bahamas cruises remain favorites for travelers seeking a balance of fun, relaxation, and Disney magic.",
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
        "Luxury travel experts helping travelers choose the right cruise experiences through expert comparisons, planning, and personalized travel services.",
    },

    {
      "@type": "WebPage",
      "@id":
        "https://www.tripsandships.com/is-disney-cruise-really-just-for-kids",
      url: "https://www.tripsandships.com/is-disney-cruise-really-just-for-kids",
      name: "Is Disney Cruise Really Just for Kids?",
      description:
        "Explore why Disney Cruise Line isn't just for children. Discover dedicated adult-only spaces, fine dining, premium service, and world-class experiences designed for couples, adults, and multigenerational families.",
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
        "https://www.tripsandships.com/is-disney-cruise-really-just-for-kids#breadcrumb",
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
          name: "Is Disney Cruise Really for Kids?",
          item: "https://www.tripsandships.com/is-disney-cruise-really-just-for-kids",
        },
      ],
    },

    {
      "@type": "FAQPage",
      "@id":
        "https://www.tripsandships.com/is-disney-cruise-really-just-for-kids#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Is Disney Cruise Line only for kids?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Disney Cruise Line is designed for families but offers extensive experiences for adults, couples, grandparents, and multigenerational travelers.",
          },
        },
        {
          "@type": "Question",
          name: "Can adults cruise on Disney without children?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. Many adults sail with Disney without bringing children.",
          },
        },
        {
          "@type": "Question",
          name: "Are there adult-only areas on Disney ships?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Disney offers adult-only pools, restaurants, lounges, and spa facilities.",
          },
        },
        {
          "@type": "Question",
          name: "Is Disney good for couples?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Couples often enjoy Disney's dining, entertainment, service, and adult-exclusive spaces.",
          },
        },
        {
          "@type": "Question",
          name: "Are Disney Cruises good for grandparents?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Disney is widely regarded as one of the best cruise options for grandparents traveling with grandchildren.",
          },
        },
        {
          "@type": "Question",
          name: "Do Disney Cruises feel childish?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "While Disney themes are present, ships are designed to appeal to travelers of all ages.",
          },
        },
        {
          "@type": "Question",
          name: "Is Disney Cruise Line luxurious?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Disney is generally considered a premium cruise line with several luxury-style features, particularly in Concierge accommodations.",
          },
        },
        {
          "@type": "Question",
          name: "Is Disney worth the higher price?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Many travelers believe Disney's service, entertainment, and family experience justify the premium pricing.",
          },
        },
        {
          "@type": "Question",
          name: "Do adults enjoy Disney entertainment?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Disney's Broadway-style productions and live entertainment often appeal to adults as much as children.",
          },
        },
        {
          "@type": "Question",
          name: "What makes Disney different from other cruise lines?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Disney combines premium service, family-focused design, world-class entertainment, and multigenerational appeal in a way few cruise lines can match.",
          },
        },
        {
          "@type": "Question",
          name: "Does Disney Cruise Line have casinos onboard?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No, Disney Cruise Line does not have casinos on any of its ships. This space is instead utilized for larger youth clubs, family entertainment venues, and spacious adult-only lounges.",
          },
        },
        {
          "@type": "Question",
          name: "Are the adult-only restaurants on Disney Cruises free?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Adult-exclusive dining venues like Palo, Palo Steakhouse, Remy, and Enchanté require an additional cover charge or are priced à la carte, and reservations are highly recommended.",
          },
        },
        {
          "@type": "Question",
          name: "Is alcohol included in Disney Cruise fares?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No, alcoholic beverages are not included in the standard cruise fare. However, Disney allows guests to bring a limited amount of their own beer or wine onboard at embarkation, which is unique compared to most mainstream lines.",
          },
        },
        {
          "@type": "Question",
          name: "How quiet are the adult-only areas on Disney ships?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The adult-only areas, such as the Quiet Cove Pool and Cove Cafe, are very peaceful. They are physically separated from the main family pool decks and family venues, meaning you will hear very little, if any, children's noise.",
          },
        },
        {
          "@type": "Question",
          name: "What is Disney's Castaway Cay, and does it have an adult-only beach?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Castaway Cay is Disney's private island in the Bahamas. It features Serenity Bay, an exclusive, adult-only beach located at the far end of the island with its own dining area, bar, and cabanas.",
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
      q: "Is Disney Cruise Line only for kids?",
      a: "No. Disney Cruise Line is designed for families but offers extensive experiences for adults, couples, grandparents, and multigenerational travelers.",
    },

    {
      q: "Can adults cruise on Disney without children?",
      a: "Absolutely. Many adults sail with Disney without bringing children.",
    },

    {
      q: "Are there adult-only areas on Disney ships?",
      a: "Yes. Disney offers adult-only pools, restaurants, lounges, and spa facilities.",
    },

    {
      q: "Is Disney good for couples?",
      a: "Yes. Couples often enjoy Disney's dining, entertainment, service, and adult-exclusive spaces.",
    },

    {
      q: "Are Disney Cruises good for grandparents?",
      a: "Disney is widely regarded as one of the best cruise options for grandparents traveling with grandchildren.",
    },

    {
      q: "Do Disney Cruises feel childish?",
      a: "While Disney themes are present, ships are designed to appeal to travelers of all ages.",
    },

    {
      q: "Is Disney Cruise Line luxurious?",
      a: "Disney is generally considered a premium cruise line with several luxury-style features, particularly in Concierge accommodations.",
    },

    {
      q: "Is Disney worth the higher price?",
      a: "Many travelers believe Disney's service, entertainment, and family experience justify the premium pricing.",
    },

    {
      q: "Do adults enjoy Disney entertainment?",
      a: "Yes. Disney's Broadway-style productions and live entertainment often appeal to adults as much as children.",
    },

    {
      q: "What makes Disney different from other cruise lines?",
      a: "Disney combines premium service, family-focused design, world-class entertainment, and multigenerational appeal in a way few cruise lines can match.",
    },

    {
      q: "Does Disney Cruise Line have casinos onboard?",
      a: "No, Disney Cruise Line does not have casinos on any of its ships. This space is instead utilized for larger youth clubs, family entertainment venues, and spacious adult-only lounges.",
    },

    {
      q: "Are the adult-only restaurants on Disney Cruises free?",
      a: "No. Adult-exclusive dining venues like Palo, Palo Steakhouse, Remy, and Enchanté require an additional cover charge or are priced à la carte, and reservations are highly recommended.",
    },

    {
      q: "Is alcohol included in Disney Cruise fares?",
      a: "No, alcoholic beverages are not included in the standard cruise fare. However, Disney allows guests to bring a limited amount of their own beer or wine onboard at embarkation, which is unique compared to most mainstream lines.",
    },

    {
      q: "How quiet are the adult-only areas on Disney ships?",
      a: "The adult-only areas, such as the Quiet Cove Pool and Cove Cafe, are very peaceful. They are physically separated from the main family pool decks and family venues, meaning you will hear very little, if any, children's noise.",
    },

    {
      q: "What is Disney's Castaway Cay, and does it have an adult-only beach?",
      a: "Castaway Cay is Disney's private island in the Bahamas. It features Serenity Bay, an exclusive, adult-only beach located at the far end of the island with its own dining area, bar, and cabanas.",
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
const IsDisneyCruiseReallyForKids = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [readMore, setReadMore] = useState(false);
  const images = [HeroImage1, HeroImage2, HeroImage3];
  const [activeDest, setActiveDest] = useState("antarctica");
  const currentDest =
    disneyDestinations.find((d) => d.id === activeDest) ||
    disneyDestinations[0];

  const ActiveIcon = currentDest.icon;

  const [currentLuxurySlide, setCurrentLuxurySlide] = useState(0);

  const luxurySlides = [
    {
      title: "Premium Service",
        image: PremiumService,
      description:
        "Experience the legendary Disney hospitality, where every detail is meticulously handled with warmth and absolute professionalism.",
      number: "01",
    },
    {
      title: "Concierge-Level Accommodations",
        image: Accommodations,
      description:
        "Enjoy private lounges, exclusive sun decks, pre-arrival planning services, and priority boarding that rival high-end luxury resorts.",
      number: "02",
    },
    {
      title: "Spacious Family Suites",
        image: SpaciousFamilySuites,
      description:
        "Meticulously designed staterooms featuring separate split bathrooms, ample storage, and upscale finishes tailored for multi-generational comfort.",
      number: "03",
    },
    {
      title: "Fine Dining",
        image: FineDining,
      description:
        "Exquisite adult-exclusive culinary venues like Palo and Remy, featuring menus curated by Michelin-starred chefs for a sophisticated dining experience.",
      number: "04",
    },
    {
      title: "Personalized Experiences",
        image: PersonalizedExperiences,
      description:
        "From customized onboard celebrations to bespoke private shore adventures, Disney tailors each moment to your family's unique preferences.",
      number: "05",
    },
    {
      title: "High Crew-to-Guest Attention",
        image: HighAttention,
      description:
        "An impressive crew-to-guest ratio ensures highly prompt, attentive, and personalized care for every traveler throughout the voyage.",
      number: "06",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % (images.length || 1));
    }, 6000);
    return () => clearInterval(timer);
  }, [images.length]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentLuxurySlide((prev) => (prev + 1) % luxurySlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [luxurySlides.length]);

  return (
    <div className="Asc-page-wrapper">
      <Helmet>
        <title>
          Is Disney Cruise Really Just for Kids? | The Truth About Disney Cruise
          Line
        </title>
        <meta name="title" content="Is Disney Cruise Line Only for Kids?" />
        <meta
          name="description"
          content="Many travelers assume Disney Cruise Line is only for children. Discover why Disney Cruises appeal to adults, couples, grandparents, and multigenerational families, and what makes Disney one of the most highly rated cruise experiences at sea."
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
          <h1>Is a Disney Cruise Really Just for Kids?</h1>

          <p>
            Many premium travelers dismiss Disney Cruise Line because they
            assume it's just a floating cartoon playground.
          </p>

          <p>
            The reality is far more sophisticated. Disney vessels feature
            expansive adult-only sanctuaries, world-class fine dining, upscale
            accommodations, and exceptional service that rivals luxury cruise
            lines.
          </p>

          {/* READ MORE CONTENT */}
          {readMore && (
            <>
              <p>
                While Disney is undoubtedly the industry leader in family
                travel, they have masterfully separated family activity zones
                from adult-exclusive retreats. You can enjoy quiet pools,
                sophisticated lounges, and upscale spas completely away from the
                kids' clubs.
              </p>

              <p>
                For couples, groups, and solo travelers seeking an elevated,
                hassle-free cruise experience with outstanding hospitality,
                Disney frequently exceeds expectations.
              </p>

              <p>
                At Trips &amp; Ships Luxury Travel, we help adults design Disney
                Cruise itineraries that focus on luxury, relaxation, and
                sophistication, ensuring you experience the very best this
                premium line has to offer.
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

      {/* ── WHERE THE MISCONCEPTION COMES FROM ───── */}
      <section
        className="ugt-components-section"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="Asc-container">
          {/* HEADER */}
          <div className="ugt-components-header">
            <h2 className="adg-c-h2">
              Why Many Travelers Think Disney Cruises Are <br /> Only for Kids
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
                    src={FamilyVaction}
                    alt="Disney Cruise family vacation"
                    className="ugt-component-image"
                  />
                </div>
              </div>

              {/* RIGHT CONTENT */}
              <div className="ugt-component-content">
                <p className="ugt-component-text">
                  Disney is one of the most recognizable family brands in the
                  world.
                </p>

                <p className="ugt-component-text">
                  Naturally, people associate Disney with:
                </p>

                <div className="ugt-questions-box">
                  <span className="ugt-questions-title">
                    Common Disney Associations:
                  </span>

                  <ul className="ugt-questions-list">
                    {[
                      "Theme parks",
                      "Cartoons",
                      "Children's entertainment",
                      "Family vacations",
                    ].map((item, idx) => (
                      <li key={idx} className="ugt-question-item">
                        <Check size={16} className="ugt-question-icon" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="ugt-component-text">
                  Because of that reputation, many travelers assume a Disney
                  Cruise is essentially a floating kids club.
                </p>

                <p
                  className="ugt-component-footer"
                  style={{
                    backgroundColor: "var(--bg-white)",
                    padding: "12px",
                    borderRadius: "6px",
                  }}
                >
                  It isn't.
                  <br />
                  <br />
                  Disney Cruise Line is a premium cruise product that happens to
                  excel at serving families.
                  <br />
                  <br />
                  <strong>That's an important distinction.</strong>
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
              Disney Treasure – Disney Cruise Line's Newest Ship
            </h2>
            <div className="azs-accent-line"></div>

            <p className="azs-video-intro">
              Discover all the exciting details about Disney Cruise Line's
              newest ship, the Disney Treasure. From spaces inspired by beloved
              Disney Parks attractions to immersive experiences that bring
              Disney and Pixar stories to life, this extraordinary vessel offers
              unforgettable adventures for guests of all ages.
            </p>
          </div>

          <div className="azs-video-wrapper">
            <div className="azs-video-frame">
              <iframe
                src="https://www.youtube.com/embed/-JTRDjv_F5g"
                title="All The New Details About Disney Cruise Line's Newest Ship | Disney Treasure"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      {/* DISNEY HAS ENTIRE AREAS DESIGNED EXCLUSIVELY FOR ADULTS */}
      <section className="adg-c-section adg-c-bg-soft" id="adg-donor-programs">
        <div className="adg-c-container">
          <div className="adg-c-section-header">
            <span className="adg-c-eyebrow">
              Adult Experiences on Disney Cruise Line
            </span>

            <h2 className="adg-c-h2">
              Disney Has Entire Areas Designed <br /> Exclusively for Adults
            </h2>

            <div className="adg-c-accent-line"></div>

            <p className="Asc-section-intro">
              One of the biggest surprises for first-time cruisers is how many
              adult-only spaces exist onboard. Disney Cruise Line offers
              dedicated areas where adults can relax, dine, socialize, and
              unwind away from the family activity zones.
            </p>
          </div>

          <div className="adg-c-venues-grid1">
            {[
              {
                id: 1,
                eyebrow: "Adult Retreat",
                name: "Adult-Only Pools",
                highlight:
                  "Dedicated pool areas provide a peaceful escape exclusively for adult guests.",
                items: [
                  "Quiet Relaxation",
                  "Comfortable Seating",
                  "Ocean Views",
                  "Peaceful Atmosphere",
                ],
                callout:
                  "These tranquil spaces are far removed from the family activity areas and are perfect for unwinding at sea.",
              },

              {
                id: 2,
                eyebrow: "Upscale Dining",
                name: "Adult-Only Restaurants",
                highlight:
                  "Disney offers elegant dining experiences created specifically for adults.",
                items: [
                  "Refined Menus",
                  "Elevated Service",
                  "Sophisticated Ambiance",
                  "Fine Wines & Cocktails",
                ],
                callout:
                  "Many guests compare Disney's adult dining venues favorably with those found on premium cruise lines.",
              },

              {
                id: 3,
                eyebrow: "Evening Entertainment",
                name: "Lounges and Nightlife",
                highlight:
                  "After dark, Disney ships offer a vibrant adults-only social scene.",
                items: [
                  "Piano Lounges",
                  "Cocktail Bars",
                  "Live Music Venues",
                  "Wine Tastings",
                  "Adult Entertainment",
                ],
                callout:
                  "Many adult spaces feel completely different from the family-focused atmosphere experienced during the day.",
              },

              {
                id: 4,
                eyebrow: "Wellness at Sea",
                name: "Luxury Spa Experiences",
                highlight:
                  "Relax and recharge with premium wellness and fitness amenities.",
                items: [
                  "Massages",
                  "Wellness Treatments",
                  "Relaxation Areas",
                  "Fitness Facilities",
                ],
                callout:
                  "These amenities rival the spa and wellness offerings found on many luxury cruise ships.",
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
              Disney Cruise Line Experience
            </span>
            <h2 className="dfg-gallery-title">
              {" "}
              The Best of Disney Cruise Line Experiences
            </h2>
            <div className="dfg-gallery-accent"></div>
            <p className="dfg-gallery-intro">
              From adult-only retreats to world-class dining and Concierge-level
              staterooms — Disney Cruise Line delivers premium experiences
              designed for every generation, not just the youngest ones onboard.
            </p>
          </div>

          <div className="dfg-gallery-mosaic">
            {/* Large featured image — top left */}
            <div
              className="dfg-gallery-item dfg-gallery-large"
              style={{ color: "#fff" }}
            >
              <img
                src={DisneyCruiseLineExperiences1}
                alt="Accessible Disney Cruise experience for families on deck"
                className="dfg-gallery-img"
              />
              <div className="dfg-gallery-overlay">
                <span className="dfg-gallery-caption">
                  Accessible Family Experiences
                </span>
              </div>
            </div>

            {/* Tall image — top right */}
            <div
              className="dfg-gallery-item dfg-gallery-tall"
              style={{ color: "#fff" }}
            >
              <img
                src={DisneyCruiseLineExperiences2}
                alt="Disney Cruise Royal Suite for multigenerational family luxury travel"
                className="dfg-gallery-img"
              />
              <div className="dfg-gallery-overlay">
                <span className="dfg-gallery-caption">
                  Luxury Family Suites
                </span>
              </div>
            </div>

            {/* Wide image — bottom left */}
            <div
              className="dfg-gallery-item dfg-gallery-wide"
              style={{ color: "#fff" }}
            >
              <img
                src={DisneyCruiseLineExperiences3}
                alt="Disney Wish Oceaneer Club interactive play space for kids"
                className="dfg-gallery-img"
              />
              <div className="dfg-gallery-overlay">
                <span className="dfg-gallery-caption">
                  Kids' Adventure Clubs
                </span>
              </div>
            </div>

            {/* Square — bottom right */}
            <div
              className="dfg-gallery-item dfg-gallery-square"
              style={{ color: "#fff" }}
            >
              <img
                src={DisneyCruiseLineExperiences4}
                alt="Disney Wish Sarabi Lounge with modern interior design"
                className="dfg-gallery-img"
              />
              <div className="dfg-gallery-overlay">
                <span className="dfg-gallery-caption">
                  Adult Lounges & Entertainment
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY COUPLES WITHOUT CHILDREN SOMETIMES CHOOSE DISNEY */}
      <section className="wcc-couples-section" id="wcc-couples">
        <div className="wcc-container">
          <div className="wcc-section-header">
            <span className="wcc-eyebrow">Adult Sailing Experiences</span>
            <h2 className="wcc-section-title">
              Why Couples Without Children <br /> Sometimes Choose Disney
            </h2>
            <div className="wcc-accent-line"></div>
            <p className="wcc-section-intro">
              This surprises many people. Every year, thousands of adults sail
              with Disney without bringing children. Why? Because Disney
              delivers several things experienced travelers value.
            </p>
          </div>

          <div className="wcc-grid">
            {/* CARD 1: EXCEPTIONAL SERVICE */}
            <div className="wcc-card">
              <div className="wcc-card-header">
                <div className="wcc-card-icon-wrap">
                  <HeartHandshake size={24} />
                </div>
                <h3>Exceptional Service</h3>
              </div>
              <p className="wcc-card-desc">
                Disney consistently earns some of the highest guest satisfaction
                ratings in the cruise industry.
              </p>
              <div className="wcc-card-features-box">
                <span className="wcc-features-title">
                  Crew members are known for:
                </span>
                <ul className="wcc-features-list">
                  {[
                    "Attention to detail",
                    "Personalized service",
                    "Friendly interactions",
                    "Consistent hospitality",
                  ].map((item, idx) => (
                    <li key={idx}>
                      <span className="wcc-check-dot"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <p className="wcc-card-footer-note">
                Many adults choose Disney specifically because of the service
                quality.
              </p>
            </div>

            {/* CARD 2: OUTSTANDING ENTERTAINMENT */}
            <div className="wcc-card">
              <div className="wcc-card-header">
                <div className="wcc-card-icon-wrap">
                  <Award size={24} />
                </div>
                <h3>Outstanding Entertainment</h3>
              </div>
              <p className="wcc-card-desc">
                Even travelers with no interest in Disney characters are often
                impressed by:
              </p>

              <div className="wcc-subfeatures-list">
                <div className="wcc-subfeature-item">
                  <h4>Broadway-Style Productions</h4>
                  <p>
                    Professional performances featuring impressive staging and
                    storytelling.
                  </p>
                </div>
                <div className="wcc-subfeature-item">
                  <h4>Live Music</h4>
                  <p>Available throughout the ship.</p>
                </div>
                <div className="wcc-subfeature-item">
                  <h4>Deck Events</h4>
                  <p>
                    High-energy experiences that create memorable vacation
                    moments.
                  </p>
                </div>
              </div>

              <p className="wcc-card-footer-note">
                Disney's entertainment is frequently considered among the best
                at sea.
              </p>
            </div>

            {/* CARD 3: BEAUTIFUL SHIPS */}
            <div className="wcc-card">
              <div className="wcc-card-header">
                <div className="wcc-card-icon-wrap">
                  <Compass size={24} />
                </div>
                <h3>Beautiful Ships</h3>
              </div>
              <p className="wcc-card-desc">
                Disney vessels combine outstanding elegance and functionality:
              </p>

              <div className="wcc-card-features-box">
                <span className="wcc-features-title">Design Highlights:</span>
                <ul className="wcc-features-list">
                  {[
                    "Elegant design",
                    "Art Deco influences",
                    "Modern amenities",
                    "Family functionality",
                  ].map((item, idx) => (
                    <li key={idx}>
                      <span className="wcc-check-dot"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="wcc-card-footer-note">
                The ships feel upscale and thoughtfully designed rather than
                overly themed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── BEST DESTINATIONS FOR SMALL SHIP ALUMNI CRUISES ───── */}
      <section className="luc-destinations-section" id="luc-destinations">
        <div className="luc-destinations-container">
          <div className="luc-destinations-header">
            <h2 className="luc-destinations-title">
              Disney Isn't Just About the Ship
            </h2>

            <div className="adg-c-accent-line"></div>

            <p className="luc-destinations-intro">
              Many travelers focus only on onboard experiences. However, Disney
              cruises also visit remarkable destinations around the world that
              offer adventure, learning, culture, and relaxation for travelers
              of all ages.
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

      {/* ── WHY GRANDPARENTS LOVE DISNEY CRUISES ─────────────────── */}
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
                <span className="luc-why-badge-num">4</span>
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
              Disney Cruise Line has become one of the most popular options for
              multigenerational travel.
            </p>

            <div className="luc-why-features">
              <div className="luc-why-feature">
                <div className="luc-why-feature-num">01</div>

                <div className="luc-why-feature-body">
                  <h3 className="luc-why-feature-title">
                    Time With Grandchildren
                  </h3>

                  <p className="luc-why-feature-desc">
                    Spend meaningful time together without worrying about
                    planning every activity.
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
                  <h3 className="luc-why-feature-title">Stress-Free Travel</h3>

                  <p className="luc-why-feature-desc">
                    Disney handles accommodations, dining, transportation, and
                    entertainment in one convenient vacation package.
                  </p>
                </div>
              </div>

              <div className="luc-why-feature">
                <div className="luc-why-feature-num">04</div>

                <div className="luc-why-feature-body">
                  <h3 className="luc-why-feature-title">
                    Opportunities for Independence
                  </h3>

                  <p className="luc-why-feature-desc">
                    Grandchildren can enjoy youth programs while grandparents
                    relax in adult-exclusive spaces throughout the ship.
                  </p>
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
                    <strong>Adult-Only Areas</strong>
                  </td>
                  <td>Excellent</td>
                  <td>Good</td>
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
                    <strong>Entertainment</strong>
                  </td>
                  <td>Industry Leading</td>
                  <td>Moderate</td>
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
                    <strong>Luxury Family Travel</strong>
                  </td>
                  <td>Excellent</td>
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

      {/* WHAT LUXURY TRAVELERS OFTEN MISS */}
      <section className="wlt-luxury-section" id="wlt-luxury">
        <div className="wlt-container">
          <div className="wlt-section-header">
            <span className="wlt-eyebrow">Sophisticated Disney Cruising</span>
            <h2 className="wlt-section-title">
              What Luxury Travelers Often Miss
            </h2>
            <div className="wlt-accent-line"></div>
            <p className="wlt-section-subtitle">
              Some luxury travelers dismiss Disney because they assume it isn't
              sophisticated enough. However, Disney delivers many luxury
              elements:
            </p>
          </div>

          <div className="wlt-grid">
            {/* LEFT SIDE - INTERACTIVE TABS */}
            <div className="wlt-interactive-tabs">
              <div className="wlt-tabs-list">
                {luxurySlides.map((slide, index) => {
                  const isActive = index === currentLuxurySlide;
                  return (
                    <div
                      key={index}
                      className={`wlt-tab-item ${isActive ? "wlt-active" : ""}`}
                      onClick={() => setCurrentLuxurySlide(index)}
                    >
                      <div className="wlt-tab-number">{slide.number}</div>
                      <div className="wlt-tab-content">
                        <h3>{slide.title}</h3>
                        <p>{slide.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* RIGHT SIDE - SLIDER VIEWPORT */}
            <div className="wlt-slider-viewport">
              <div className="wlt-slider-container">
                {luxurySlides.map((slide, index) => {
                  const isActive = index === currentLuxurySlide;
                  return (
                    <div
                      key={index}
                      className={`wlt-slide-item ${isActive ? "wlt-active" : ""}`}
                    >
                      <div className="wlt-slide-image-wrapper">
                        <img
                          src={slide.image}
                          alt={slide.title}
                          className="wlt-slide-image"
                        />
                        <div className="wlt-slide-overlay">
                          <span className="wlt-slide-index">
                            Feature {slide.number}
                          </span>
                          <h4 className="wlt-slide-title">{slide.title}</h4>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* SLIDER DOTS */}
              <div className="wlt-slider-dots">
                {luxurySlides.map((_, index) => (
                  <button
                    key={index}
                    className={`wlt-dot-btn ${index === currentLuxurySlide ? "wlt-active" : ""}`}
                    onClick={() => setCurrentLuxurySlide(index)}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
              <div className="wlt-quote-box">
                <p className="wlt-quote-text">
                  Disney may not be an ultra-luxury cruise line like Regent
                  Seven Seas or Seabourn, but it often exceeds expectations for
                  travelers seeking premium family travel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── COMMON MYTHS ABOUT DISNEY CRUISES ───────────────────────── */}
      <section className="Lfsg-section Lfsg-bg-dark" id="Lfsg-challenges">
        <div className="Lfsg-container">
          <div className="Lfsg-section-header">
            <h2 className="Lfsg-h2-white">Common Myths About Disney Cruises</h2>

            <div className="Lfsg-accent-line-white" />
          </div>

          <div className="Lfsg-mistakes-grid">
            {[
              {
                title: "Myth: Disney Cruises Are Only for Children",
                desc: "Reality: Adults make up a significant portion of Disney's guest population and have access to numerous adult-focused experiences.",
              },

              {
                title: "Myth: There Is Nothing for Couples",
                desc: "Reality: Adult-only restaurants, lounges, spas, and entertainment create many opportunities for couples.",
              },

              {
                title: "Myth: Disney Ships Are Loud All the Time",
                desc: "Reality: Adult-only spaces provide quiet areas throughout the ship.",
              },

              {
                title: "Myth: You Must Be a Disney Fan",
                desc: "Reality: Many guests choose Disney for service, entertainment, and family travel convenience rather than Disney fandom.",
              },

              {
                title: "Myth: Adults Won't Enjoy Disney",
                desc: "Reality: Countless adults return to Disney Cruise Line repeatedly because of the overall experience.",
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

      {/* VIDEO SECTION */}
      <section
        className="azs-video-section"
        id="azs-video"
        style={{ backgroundColor: "var(--bg-white)" }}
      >
        <div className="azs-container">
          <div className="azs-section-header">
            <h2 className="azs-h2">
              Relaxing Cruise Views: Disney Castaway Cay
            </h2>
            <div className="azs-accent-line"></div>

            <p className="azs-video-intro">
              Escape to the beauty of Disney Castaway Cay, Disney Cruise Line's
              private island paradise in The Bahamas. Enjoy breathtaking ocean
              views, pristine beaches, and the peaceful atmosphere that makes
              this destination a guest favorite.
            </p>
          </div>

          <div className="azs-video-wrapper">
            <div className="azs-video-frame">
              <iframe
                src="https://www.youtube.com/embed/6og55S4EgUE"
                title="Relaxing Cruise Views: Docked at Disney Castaway Cay | Disney Cruise Line"
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
            <h2 className="Asc-h2">
              So Who Is Disney Cruise Line Actually For?
            </h2>

            <div className="Asc-accent-line"></div>

            <p className="Asc-section-intro">
              The answer is surprisingly broad.
            </p>
          </div>

          <div className="Asc-who-grid">
            <div className="Asc-who-card Asc-who-yes">
              <h3 className="Asc-who-title">Perfect For</h3>

              <ul className="Asc-who-list">
                {[
                  "Families with Children",
                  "Grandparents and Grandchildren",
                  "Multigenerational Groups",
                  "Disney Enthusiasts",
                  "First-Time Cruisers",
                  "Adults Who Appreciate Exceptional Service",
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
                  "Travelers Seeking an Adults-Only Environment",
                  "Nightlife-Focused Vacations",
                  "Ultra-Luxury All-Inclusive Cruising",
                  "Travelers Uninterested in Family-Oriented Atmospheres",
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
            src={CTAImage}
            alt="Disney Cruise Line Experience"
            className="Asc-help-bg-img"
          />
          <div className="Asc-help-overlay"></div>
        </div>

        <div className="Asc-container">
          <div className="Asc-help-card">
            <div className="Asc-help-content">
              <div className="Asc-help-header">
                <span className="Asc-help-eyebrow">
                  Disney Cruise Line Guide
                </span>

                <h2 className="Asc-help-h2">
                  Disney Cruises Are for Families, <br />
                  Not Just Kids
                </h2>

                <div className="Asc-help-accent"></div>
              </div>

              <div className="Asc-help-grid">
                <div className="Asc-help-info">
                  <p className="Asc-help-intro">
                    The idea that Disney Cruise Line is only for children is one
                    of the biggest myths in cruising.
                  </p>

                  <p className="Asc-help-intro">
                    Yes, Disney creates magical experiences for kids. But it
                    also delivers exceptional service, adult-only relaxation,
                    fine dining, premium accommodations, world-class
                    entertainment, and meaningful multigenerational experiences.
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
                      The result is a cruise product that appeals to far more
                      than just children.
                      <br />
                      <br />
                      Whether you're traveling as a couple, a grandparent, a
                      parent, or part of an extended family, Disney Cruise Line
                      offers experiences designed to make every generation feel
                      included.
                      <br />
                      <br />
                      Because the real magic of a Disney Cruise isn't just what
                      children experience.
                      <br />
                      <strong> It's what families experience together. </strong>
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
                  <h3 className="Asc-help-list-title">What Disney Delivers:</h3>

                  <ul className="Asc-help-bullets">
                    {[
                      "Exceptional service",
                      "Adult-only relaxation",
                      "Fine dining",
                      "Premium accommodations",
                      "World-class entertainment",
                      "Meaningful multigenerational experiences",
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
                      Disney Cruise Line combines premium service,
                      family-focused design, and unforgettable experiences for
                      travelers of all ages.
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

export default IsDisneyCruiseReallyForKids;
